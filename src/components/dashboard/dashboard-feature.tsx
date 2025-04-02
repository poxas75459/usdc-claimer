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
    "3RTdopzYMoG1tUAr4cdTabmwpti6ues7BFFfedEdKzmPi3nzJLFDDz6VyiYJawj2pUaeRC2wVMQvDaG8jSfSpSGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvm4St6TRvJD4FVoCj3g7gpoCNRdyFCfnMFXsE24LLEjFUwuTKkF5T6TdcqvGoZeJeYZEyJAEjuxtgsdYZMRPyy",
  "key1": "oUnRqWFySt8nj1XLN2af4U4ZuhvZqUGm6FVc8TgXuWrfdGNKMdktnJshsJ1LB5oLT4mHXx4Y7Fy7vjDqgVpJ4av",
  "key2": "C5ysPvZhFwMXbFTYgGN29QAaqvrboBkEW2Ftmk4JZURdmH2d1dUokSHroScn3FqwoPRrQMwZQc8puWTgWxH7bqz",
  "key3": "5xpnvcdZEnpbRZdEBf3j4ZHArSjEhi9NpudbkidmoPjD2XoFCqb8y4NefmRAwxvvTkh1wDThfdokNPDUSeEz1FHy",
  "key4": "2nx7Vpx5n6cR3nTgAbhxNifDfYZmQkvx6HrgU5TsaLHebuTAEeKMudKCJn5FyR6Xd5WVnE987fdaWxkptUhDm3Ut",
  "key5": "5BNgFeEW8hab7TgDAHLPakXThUDoo1LApfcXXhQSgPdtRd1wuD7iGdtThqahc42zSziuHaKVPtJpkgdiiVsRsTWc",
  "key6": "2MvGsgkCPBrwSjrww88oxtWw259nzJixUBpYY634ieyrzADfTndEwAJaeB6v7bpmqDHMNEF5nfMj7V7ewARoDf2C",
  "key7": "9tb2MxkocBSjNcoJ3mvfXjnzWiv3jZgHQjPDoTB2Xt33YUXa7yyHbAB93mtPq7vZGpCkW8FPQx4AV359S73B3mx",
  "key8": "51jW8qnPQNDXqaBya9oEJf3pBiQ99uGa5AHf7euCQLV4kZCZWqMNAcKk449nUFn747cnUsw7SfBVmyTU6MyaYUDg",
  "key9": "65rau9YtuwWKhPtENsFCconAEfe1dtgtXY4scPbnKY3WWCBCAQ4JWjh4TzoijaoSPim2H5xjNjhGEoSUzqLXYqve",
  "key10": "5t6GCLR5venWsNcPkyNLVNBgHAveZyEdYu84KR79YBm6eU69krY1AJU4gXJtAozSfsYYJqWaNtTNL5A7m4PC2pp6",
  "key11": "3px98CLnCxAEi5QLuDM13wwcXkmbGAxBFJMhY8QBbTFYgzeP3hnJqv2gw1vvLK635m48QX6XXQ5k8ALFLQwrdG2r",
  "key12": "3VZuXT74frhua2Z3QMdhmxkTYUXXqTuLCF4qef8976roTyqhMSjuqSDgrc5DgLezBecwiKQATqtmYoutfvJdH6Qj",
  "key13": "3sBNQLphFC5CxFEgLYTdZSYD93tTphwNRWzS6S54qDemWiFPFtzhevLks5prD2njKbA8uaaVkwGfDpQru7hc9ec",
  "key14": "28dYjvfwds7Q6rWsv8nqUxayrAAcyMYQfCYxFfHVdzVZjBd1s9fRVjFfwxC7FVK8DUrXSuCUYkcabFKd66UfK7JW",
  "key15": "KGemJKkdsnZYGTU4845wrTmzGuetgBn1Z2HnAhvxBsAjcCGfj3gcABSBLUxJ25fseNaAfVEpXe3JmHdaHdni9nj",
  "key16": "37KC6pUmRj7JsjSundkGqBQ4zAjc3mib3TxthC3eaiAjWitB1GfDPJv6wDZqq4kgWWxjgrQPyuYp8RzUKc5XXmDR",
  "key17": "CzE717AbXnxFsBpJY8gjqdJJPGhRFGg815fUWnJc73Ya5QnL67zu86LXWSRqkgSAic6c5wMWYWSeEs7VPV1QMki",
  "key18": "o9mSH3AvYSmMy4H1VyAwi24NPzUZzPrnjtqCCGe6mVM2yQyggdDq363XkpXj2ECNNLkZSZGPpGa4RpeFf6dW1KP",
  "key19": "3obfUAHrBxovP6mwL1SsB9udxmna37r5Frs43omfQ91LUB1NPybwoX2x6Z7MgiwhkDCSsetZYEiXvYrgG7dkf4rr",
  "key20": "4yXtVAHr7LTkHfHFB58nVjjekSfw8NwdFkMcPnwrZpkDoMYak6uj7sAkde1FUujKczSGcFvEz7v3ZBrc4Kebh3r5",
  "key21": "2yfEzHEqnG5JvKnN5FvRx1c2Z8unUBvsa52vkh6vsoCkvfwu1ynwj8h7DmaXR72Whbj8J5yADwnuUqpdfuE7ek4V",
  "key22": "AbAPweZ9KEHyEcp4rBMXddp9JtVLWJRCMEdog931CQBugSCACy5WfcrSK2342DWxG9iokojgFTtpB2JG84Mm2CM",
  "key23": "4zPK2mox3ZXJgfBygrvZVpMg5HAakRcjVW84XwA3CswUeUBtXnj4fV86ruZb5onnkNskVcH25f55ZSsAWc2eDgdE",
  "key24": "2wnW6iCkTvZ7jP8957EyFH1MhRduHvTJKSpTmuFhDLCJqzTWYvHL78FzjTDDMTs5674sdyUfh7Pu26hBWAq7fvoC",
  "key25": "5GPjrezY2GBBbaaFU2MEjo2UVR8LMq5XqJuSeqCFNPR1WPdDuoBrDhicuHGRMonMCKqG9DpS6rapHXPk93Ew7UHo",
  "key26": "5EJeyWLQYn2mjv7MxHqdMAUmeqz5sEoivuStRYLY91XfxnmTp2EWfddZGCh2aaByHxn7rR1xZEi9AJMSvkzq4pro",
  "key27": "5qLLa4VLysGFxnfo5dxmFfj3WAqfaZ5xJz8WzQ51yWBpQsTbmjv4QFjHNVdrJbmofWYBw7sUczfyEew9fCraXdra",
  "key28": "2Lu9z2BsJLRWfCM5eQDW72G5sQ4n46E1oZZKxNkm4jxt1CuTRqF1zf4YV9BPnGXh6eHHmbmXB6bFiSVpf4BcUczP",
  "key29": "4qsaTZBsVLSZhTHsQtW7jZjs6vhyoT51tdVJUEo5He6mTZ9VhjT3gBKpWSy25XZJcEzaRfg8ZagtWyVe9tFboGnC",
  "key30": "4zYJLmvJVsVB1VFjn6MxnYdgYHwxQhNe8CQrz24nSq2CfbM644mqUKUnyiy8PvawKTZznp1yoeTmKSDQ2CaW72f1",
  "key31": "32VV9UGsrYm4ADxdur3xs2J263L5kx3t91nWKsCMcd8RwMjevXn6wmeMLtGsctKrwcNYWwoKVdda77rzo27dgZhB",
  "key32": "24jtkt6CUExsM4GLx1T3P9pLX9L5dUjFF5AEEb9yXzt4uxPF6tX2sq1Ms3Cd7iC43aWPAeUH5hYPDNFH8yfohSQc",
  "key33": "3FUxtJ7Dy77XER7ju12pjy5CbXZTv6k5KiSeYYNxRVsLAH6PPgURhvRxPohweLw58o3XiAE6HMsbScoiteirGJNU",
  "key34": "2eaJwAp2jvXjh3FDxNXGKJJvK9mcrcw7yefrv3UwFhF3vf4tLhzb1r5Qp6hoHYkLqK4tn7pYsRbGpkMwKdR9V1KV",
  "key35": "2PY8qFNaaZkK8XYRkYRFtk2WxBgzE2pa8pTHS1drXaxqsF94aLhPGfp8zak6G5USA6oojWUdNGGuvMeY4VkunFaN",
  "key36": "4NF4kbturDB5GJtzrygkngAnxJSKJ1tejubF3CcxD2NYnkAcav5crdDNybN3FjrkTcZrw3QnUn3JSWSwaEdBqSBc",
  "key37": "5vXboLwQ4Q1V5smsHCY9PGzuPzW3C3iAXXYpR895kKe8hzbW6co2M3Be2Ckisn44qZGs9yiBVY1nxmUHDetu3xW",
  "key38": "3WTx63QW5Lq8bbt6boEAdb8KpCEiXuCMWr67o9RZscdy5d3BtRDB84aR56HbeMsoftG9Q5rj62Vm29riMooyoWbA",
  "key39": "5Acm1jccQUtyeP7ayiW5Xqo6o7szb7sBmo7BSbdkgSgNHFMEwhBrJTxjWH24oE2E2EMViHno6vHboanYuhQqV9Di",
  "key40": "4QJvEmWDxs5u67jaFx4FUEpVSSz1pMscgf426LuCPJFoWm7SNUGA59enR2ekDwTmBhZTGabYVKME7fARNUkBBCFc",
  "key41": "4jQUVQbREYQrCx8A4uACVC6YdC76Av7CMuSa3c7gssBFFL1HAZRGgDtaRZKbnmx5D7JABwvX3SeXmCHNrMZ7Aqpt",
  "key42": "4Hox3u6o35N15yaRRF7fcKnczrMGbCwsA2BHtekjUUdWgvniWpqywecy8m65WQJ7EfuuS616REFFvuMCztxbqd5W",
  "key43": "39TchmzYEtFv4HgbA3EP3atKndz7bb89KnjNTugE2zCkKy1ib3rVmg7xV7oyPURExqrn1qQqGTgBK1wXeWq5HReM",
  "key44": "3LQKNcQg2TQqiCsp94PYfbQtFWxFg2Wtp4gr4pmwdUoVbu4yByihc2DSqP9b4bGvrguC1L44Jx6588CVWYW3vTy4",
  "key45": "3LwyDBMUM6MS9tjkSmDU3g8ibDL26gCRsSTcBSVn8WD6NKkJyp8mrPvwZ36g381KXJadu7ibQ7VUo1kJNTBYcTeV"
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
