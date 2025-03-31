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
    "JRPwtyiXDMXgTDYdEwMdps7TP1PorcCVrYcwk72U1etRsZ99uQZe89zduaDTJTk45d7jDgF8Npo2FZDkirzbCYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WqX5sLjZPqphVVvT3B7PExg9DTQZ3zfcqgacBvhi3ZD3mmgBrh2oMt4kGeYWCah316MAFGJozaSeUr9Hpzuv9Hc",
  "key1": "2tTECpiKj4tHC9TK4diuu5cBwBqHsqctaf5oWJApYQttZVS7bs8hSRBLHLQsiH429vCLM5bExjc8rHinHapPgVzf",
  "key2": "5ZUzYWrGCTBHyAX8cQt1rMc1iMKXkbitQmw5F9xCqqSV2iWuBKptBGVMTamfhAzrToK7CaaYaNwaCu65WEr7o4ds",
  "key3": "27nKM78eakisru1P2LgJqjEApcCQ8VddsBKKjH9yr4zuMSsvSpX4C4cW9roQjgRMJSFZ5fujhU21cp3VqP6Yhzwp",
  "key4": "21vkKwBr7Cx23gYR9AiJEBC3GN5ViLDG261RzYsKLr9oPUEBSWz6w8nfSLPNLMX99edCbpRW8ihYdtcCnNvTS1Zv",
  "key5": "4CNpXfqS2QEbkmrTEnim81P9t2wnNiGFgMnPiiRorNKya52v6qxfYBiVmzbZpvcDGcVRMkgqgFT93nEjkxmeMLeN",
  "key6": "5JQXKT1y96ZcvuaeKouPq8Wd2ytsZFDcmun5p22ArtKXvMDZFwb2arxgHvbCATmtQJWXh64RAvjfhrqEFUGWpzx",
  "key7": "2Hxqjn5qPuCKyXZ6BceXrRkcLkEN9ccZtcpjyUnHapEpVAM9LbzAwGgrkW4WiorYs5kVvEbZvWq2Gdfjxwb6zM41",
  "key8": "2829deBUe9NP6MBLMv9wnzVmuz2gHrYv6qEVjr3pYGEA2HAcukDaDsY6BbJNtNRomxM2zhW2DjCvtraobJrJ4wnq",
  "key9": "3aeyc7UfNtwuR6PpedYe6XcwUVQSXjNoJZBNF3sz11ZXx5dkExvZ8rry9ifF16dk5FatQkW42zD4zSoe5tcc1Wyr",
  "key10": "JMjrEsV3dL5mrJsRko6ZDXrNrhdG8DcVWCWVHADc8ykNw4EmfrPfetqBs1svZo7ByjgFzb1Cb1FP5WFYQcX2AEy",
  "key11": "4NB85dU8si5dW7L7VcM4cgZrEC7DdzfgwEf3kHVc6qcEB2VDmja6qHYEANdzy9mXBijAVJHPxgWskg2M7S41PxFK",
  "key12": "2PSLkP4qykmoT5dHx2Tn9wywS3QionuY5PjXjxf6YjLZYuFBbfsACmp1mZLQhB8X3e4iAmmKFcDNfLx6wTuoiwDU",
  "key13": "3RE2cV148BiM1h2pf5FKkTu1uewGFXNp74KpJ9U8RwpYwiLBraWqHua7J4fZVfz9cjtWvMSLTc9CeQGqbVHU5oYr",
  "key14": "5DkfE5RJ86JvZ3qiQKZyih5zLMz4KSehu898rYrBjQcZkgL8NriSKY6aVh41a27as5K43D6Eba3XLiTk5NeNxLeV",
  "key15": "2Sn71bs4q4bQncSKLtyMQ32f4mEku47nJ2f8fWpg4S1ccSdNg3kf2JuMt3rraChc8XDm5CuUDfwELS5N4CHeZFr5",
  "key16": "5mDTrUk6dxUz9Z1PFKHZMxH52PQxtB8RNqA7tTdLKLBapg2US34hVkipa5RAKBf7SYvweQCVcwzpAnEpNc39cjKj",
  "key17": "5oTJTYhpbvEp1h7u4mdFrqQZuZC9Kon4tYCMyRE41ctT5KxhWVW4xwgTNMThqgLqHjWXcky1m8dZxqArfPd1ei39",
  "key18": "2h8fT4pjBb8Wk4q57ZpEw5oDTnESwDwWjUas7NK7y1oYHdSHxBLygtFCmfYFbuwf9HvepZ9BcWnwag1qnHDP11G5",
  "key19": "5VnuAQ49YSt7NdUNjp2PNXbbhAgPjCqDB1mZBWtbr94v94C8uEdKZTGr9Hb4HSR5oCNfGP8GMKGx1L4YLpYc6Vkd",
  "key20": "4C7F58JHubrNxeXeq5i8pBc4bfX5X8rRdHt76kc6UaFXdqN4xa5a3HeLi8jDjHhaYFyubkuHXBShuuDEoCAZXBMQ",
  "key21": "D6h85T52q279gjCAEPo2ZEnuuyS3n7okXn2ZzBDXJDDzjooKAmi47aV6ATyeivDw5NimmixPZk6gjx2C81XQPn5",
  "key22": "pyJA7xjoeszvUEfusR4m4zU7VkB1FEqvkakiUkkTtwJL48jpgzwheHJ2kvoRd5cCtPMGYtcBJHdq44WJQBwnA9n",
  "key23": "41zfnMdEBFJKSDk9mgWiyTwxk9kMCex5nQRjnHkmLfmYgtJ7YycioeGgLSTp3HhcHnDsouDvtv79iquZ7kRoZT7x",
  "key24": "2G79RqMX1ZoG2m8WR5Ez2SmhjaQ3JjZ5ujDyEY5G4XxhERTtCUd4Vcp84AXdwshpH8WqNxHCanxdbkhdSqR32uLJ",
  "key25": "2a1mxwiEyT6CkCQdgL4X5ms8U7bqTSAdpxaXFsQ8X15ovKCv3C3AqRt4v9f4yGqcfukX2AuhoTLjnysRyVbxqdnh",
  "key26": "4kq9onDDKfkFHQftYHwBGyUMtRJogbThzaRv7PN9Y3D3MUaPagmCJZhYV35VQ54KHupvnh35Jz1A1G9z5ifKnXZ4",
  "key27": "3FREPxm81iRojLRq8XDxLAcSvYfMUjPPaUXpGbdhJifj7qFJ1uDDqBwGPM8m4FiPiQFuw1cPokAK3HnQZmBLGAJo",
  "key28": "4crbRr7cT7DwQsCxoaoQpwkR9MQWk7xqhv9ueThyVez75REYQgcEnLfykJePhJVnCwW7Hn6wvueksxXQ55DVkCy4",
  "key29": "4acCNptjfSaas466zeorPXBBtbLzpLhdzNjHQm2LgLnTsynbVb9ii4RmQmPQkX3omBC6yW9SkwvKMNJ1kNghgzTG",
  "key30": "5vDEgKPxzUJaQ3n34ga6VBt1giHLDDYinvQHwyBV8p3WgHrcLRnDE74kevq15HfqqSKreTB9TD5axDsck2Yvd2Bc",
  "key31": "627ciq9rZsNBXzEi2StDQW6aoHfVQKukFDNUGueBLqkwJmari1VvQWYeCLr95rQKD14hyLDAMmVfP61nsxT2xqTa",
  "key32": "5TEzL5o9QHJQg5dfj5cQ9EJio47PRauWqLYyt2uKUKGPkA5oSueaYKRcgkwCuTC41u8bNg1zXYhQg33RobQU4B2N",
  "key33": "5RTTh8b53AdYXUY8mN4XaFuLx1Exv2F1Ra8QtmWSbskVWiResqnxbjkxt756n4BLcy1gPXGsr7jywFCwuKSLebqr",
  "key34": "2pvYcNQzigto2HyCbqFykwo2pkZEjsbwVcSd76LaxfrBXKcGQYquvgPGyEcLZbJ7K1VqC1e8yJmDChaestZjw85q",
  "key35": "2uTDP5Yww8aGxy6kfBctwDzTFVkWCnWxiUT86dYbkts4cyd9uBgggx85xJTzXZ7CQv7gfqHiegUpZ4oZEVFrtAFH",
  "key36": "3pRFQhN3E1q354p2zV2cr8fPFctXHmqhVvwAAwBp2PKSSvtXqNGmAcGusoA7mYYvEbCx3TwrhqgZjQ6zUBrmNtob"
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
