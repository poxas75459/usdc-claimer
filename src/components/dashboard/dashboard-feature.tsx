/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3XAHyc7fuLbC7JJdXHdcJ5tP5iU3DcxCCaHe7t4v4ttniMZnaL4jhxPLrWSptSx8bNYzz6Pv355zGNQoGZVFaoiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdHViNEazn7gv6c66or7L3awetYeQWbztSgz7uPbQSbwvckuE4zwWA5gZ4ySmGcaXRB2X6F7wAbRdeCpZj54q8R",
  "key1": "5oKBspvSzEVCvyEinYhLuEuAAX3uhpPtgAg3tETNzRKwBtZg3ouR3pCSdLVGGrRzTPRCsKd7STogQoZNuj6sXKvp",
  "key2": "2avfkvk8UCtfp4qbve3RMgn4LDDvgEJ9guyhphGe5uMGv7Qp2UbyXa6VSHQqvhnDogcfGzFbxAXct5FMHCpPWtg8",
  "key3": "BxnxLrXXvbs2scJE9jSDnNPMuwRHiStZ2BdP667zyiUqA6SAi9PZaHvtiWELNQ7YdtbKWzwQ3qo4pHbHhShPPu3",
  "key4": "JudPBL6mSmr2mewScLee1f6p3QvWCKZ2ciRaHr1ZMvhb59amNQvuNHMCj2qvMRVBcqXdv6JVggRcX1fXL1R3Crf",
  "key5": "4Zrtt4EbJ68Sob3SocgJwrpxa3DF6Rbvd2Vp4mHuk9geLxwMGnWEeKMw2cjkAtrZgL5kee7Z2ufeaoCMrgZskB6y",
  "key6": "Xq1SLF4ndKAoxMsu6dDq6ebERHJEqyBrSjRbug4jQt4Lg6rGMxTsd2Xs7fLG1p67oySdtKQR6o2g2Vq2R79fYVQ",
  "key7": "NKnPV783VpvZvLfocaxVrHNzN76XjVb6TbQn5pzsJowFbhvtNQDwYksYE3PtffMgihe5WwtrcbHYJ96yL4beaPC",
  "key8": "9cwSXdE2grZZf6Mhb9umtUwceWkNoHzwP9KC8KX5nAqaVKwJPBX7B51B95VC1b7kw5m7po2UJsJnqzSGXqCfKPR",
  "key9": "4cEKuaZHutfkWWeLSP8txiVxYSjQHLuBzvwBDmYNurEvLKwUf2cTat5JTVZQyfjyzzhaxjyi5WVSLVsmjjX35HjP",
  "key10": "5TqemPqMiwYfcc867J7MpxTz2Awr4GEgrHqQdnQ8SPstuxVoYJh8VFWuH9KsUhdPXL4hgmR5HZgHpg3khgzrtcAs",
  "key11": "4BTUJr7Z6FyN4CwSuQym21pbb2GbpuMswRTdmqttV6yHAuSTEUsigrin2NAAQZ9cBP9Y72cXyK4iEbEkr8z3s78Q",
  "key12": "4Cjphi8xLc2dqH2rMF35wP2uEWWSyMqW7RjmTo9sapQHXWLRyK876EJRk2T4Tq3jrHY62FBwGSa8AbgsiaMXQDs1",
  "key13": "4A5kzagAoyDdgP8xLhdXbHmBuCFzKC1MeEr1gX36phVgJ61om4oPMKS6cQasXr5x7JQVxvJnqeqPLKxPuzziafpX",
  "key14": "5EP3NZDJcgGEnTVYw9pVMqbM2AjvwKSf2ghcLhEtCobc4GxMuxErez3GrEE6UBvM1tzNeWSA9sEnYyv5yHGqF2vo",
  "key15": "4RwQoCkTWCxt6B5LZkM1KZkMriea7qG9EZDpVuBWvLberSdrkYf4wRDtiyWvSWbnqZKdSu5vfhaPFwdAVkaX9uhh",
  "key16": "5mJrC3dA3FCHbMip4MsxXCcqwQmZdCyMxqJoMgSYqstGBAiz1qHHbn5hdxsfaA5VF88zQK37QhiF4kitNQ1V5tam",
  "key17": "2qMMjNnjq57KpfjGQHz2oEYUNFT26wVWZhbStvxFSkWh6wZ1v1AiYHrYUG9GQc3k8zWs89mxcmRhBiD8RJ1nmEPX",
  "key18": "5uAJBSmaPZtWc9M4HHzri9RnA6vLDZL6Hmwwim7mL9dMCAWBgiMHwFxNWAyCGV8ncfwDeAgbNWP6KoFQxCJ8aBH8",
  "key19": "5NiyrKMC5dutoPt8qUKVxZYSmR5scxMnqaUKjn9z4TYcx6Gsz6r1fzxuXXAR8ndJhCFRcor9js4URCn49g94kbyv",
  "key20": "4oT97ERC5Bz6c7F7PiKHxaCpGCz24wnVnUKiXoo6WYExTq93ouyM4LsKBRo1mztCj4Zrjhr55ZNhoj1iy9RsQ4MY",
  "key21": "2tTL2ww5ayVvkBF7b2ap2uTWYarRP6yy4uYdj9i9ydtcwwrtGw8pTzkPX59bdT9yJbzcSGFGsXCBrPnmyqXpZxdG",
  "key22": "5AMzGuSXxac6HgseDLFKxBrbGJ4k7YXrMSJpsGzXdWogt9jgSiiH3PqsEVHSPd38YZrKx28vGykhmLyc8bqWBhdM",
  "key23": "4TbUYhHs49S4pMgNAUicwZ5BgRG2jfV26UZh435W8Zr583zqv5HPjokY57pG7goZL6EbAGAYUMQPJzKswQeB6D9Y",
  "key24": "2DVGuCpXwgqDtjTgPJ7qrD4Bi84Cuk3uHXuUgBRHaBjDk7T69h1VSP4YWJFyvkBEQtfHgNUPjKmkQryvjeBHURnZ",
  "key25": "4ShP5Fbmtroa3SigKdUNQeDiyFVCSFkLNNurpHztXjVY4AcXxYfYeVDadfNidouV3pJPb83xhEwijgWvLpnqXAup",
  "key26": "5izR2GpRKVfvaFiHgbExfFbJYMAuM4hg48hv7CTNmQfMsGEFv6AyzHKeEbQMdEx64Ep1poRfKDVc9RouBtYuAb1J",
  "key27": "3Ap9GaPwUAd8Ls2iEkoYQbvqMkAwaZvAsnXnedZWn4oMRnnU2AcaYzVRPZbPTKxSbn7W5bD5eAFWNEZGsoMi9s3o",
  "key28": "RiLEpejjez4RVCUcTPxEn46yzudtrdMQ1icWqvyB5LXZEWbDEgN3VxoF2rTfnsGM9mrfSzMkzxwRQv82No3tsdb",
  "key29": "F1tNQtNVvH5q8NWFsCcjto2fxiZ6ynWG2xybiNxZpFMLuypmggRAfLMC698oXBcJGeR2yuv8rbigS5rp67pEMQn",
  "key30": "5zkFQ9aaNQngbhjL9KXhCxxVSCg1nawaLLU3bB5f42NGWvvSgkDxMvspS95MSaVE3Z6FqfmfnnY3kSWqs1sNpBd9",
  "key31": "Up5N8PDSvEzUCTadHyrmEQhfXtuMMrdDPPDytgwcN953PpnJwpwccHGiRnJAa4HM7iWqAxWocGWXhuSGJzoWWn9",
  "key32": "4xQgG1vj6MeXsi3cVfMX3ria7tdLq3o1Qzk1FaAizemy7T95UbGNTnJcZLU7t6dmryRqwVMdfbGFjSjeyJqEeJXa",
  "key33": "3553kCCi9QKUiP2XXcwvjTdgRkgwbH1m3T7cGy6fykSNYyTyMnytRq5vqzs7TQ1VnXnDYn5yUuNieH52YjAQ1AL3",
  "key34": "2WZzBBk6W62SyGbnRi9H6tBvUSNXs3m1xhd5QVN59YRza1QSeehbByYCMCawnvFKVR9y3rRbVfMZpmdisSbJr32i",
  "key35": "3oj5zEBmt5wMgBHpQFCbZBwMA5fB5KjNdAtzTqhmzFNBLCuFbMtoZBZA6FtQrLJtrhR1kzgp7cJ1uWss7oVBBJd5",
  "key36": "5SGpWdAmLQnhThFy3Roi3KmAA5xmeygsY53gxXuSx5wDxy1jnxRvaR6wZG85XyzeSWGDgnQQJtzA3mRzXqqctWsC",
  "key37": "28udhCAc31xWx2faK8JBgMaKJ5WuxDtnhG53iG9FV5XpqpJKAnL9uQBsFbpUR1tDHXxETvYVJJWPE5LN3Fam6Xyb",
  "key38": "2RUcAH6wh4whQNRLuDuzgqV61J3fmCjQVvy2aNyjCaiH49JiyE5uqNrozuL7ooT4X6EAGpsW2jGuUwBam9x4s986",
  "key39": "B4TsA6VaXg7SegS5ajrXBTVbXdhG8WxCXpdbeCfgXjT6RYHju2p7iKWpvRrS5gXNipM5DsjrxEwF3kjL7xxQaNc",
  "key40": "44uPCdyRQw79fH71SGLLFWgUeFkau4Pf76WFyxn5wC1WmBmeywfuXKGW25EkRLqUhezRJwkVizbou3fMn4XQoKzj",
  "key41": "1G3XvD5bzD3NfSZfpLJxSy8JwbdsyVLUBFgRTMBgXFN2jT5vZembZLipjKB3aYZraWsF74DxBWsEPom3vUWrtqG",
  "key42": "SCZxw3t1H1sfb9kDW6MWMuqhjHHzqXH5qovvda6mUWSJcqG2x1A8fNseX5wURCL8XTM3fNAxXYExqShwmoxVm9X",
  "key43": "2S8Bva6ex6kzdZYTZLdDm5NtteDnv35odBLkAzouTM5c1PDZbTaAQK2bXfTTdyMBDKgK72MMKqUv7nqXhBgt98Kp",
  "key44": "3Jf2C4whwY6Jbbm4p83vzwGSXu7wXpnGwKJm9mCbzz51Dh7YXvjy9K6aSvkS56M3A65Kd17djHVRdVeyiJhJH8f5",
  "key45": "24DyjRrNWbPpzwgZmC4m9HRgj3SRYQicP1BT4ygQXugwsSELb13QtK2hrcEFd9jyj9Pws6ZdthRTnerVcYqb2t3o"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
