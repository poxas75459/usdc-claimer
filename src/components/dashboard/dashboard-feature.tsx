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
    "2mAwUUZeB9rJd21nGjJvNL3689uZGRzqjng5d7GjVrfcxU4ARJQT1kRVVmX4aBKxqe55qEYn8Q8ea5i52an8GMPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4kW5apAHQcej1ywr3mKkCjhcC6WWAKq5JPRTutFZpNmJGRFUSWg3mCLHsipYVvDm26YfrKdC9DkcDdCpgfFqVF",
  "key1": "kqWGyLyHw8Zq3SDXgFBv7EPyWWK2febaoGXkJm5cprdyyCkbKWNeewE4pnd3zSHwtJzDrz1PuAL9LVD8WgDKEjt",
  "key2": "2BdZMw3HNYMg4927PHFAQNxXaByrGJZHDFSsrMGxayuN1d5XopCQ7qizG5LWagXumUcsdfwNLCRxaj6xedN9S9Pa",
  "key3": "2XcFnQXhpXTJP3sKDtqDw9Y6NJZ2ed2PWD8mGiViWrW9uDwnd1SQCH7jjdWq1rj31MUFDuZSRPaQAM7gigBLd5Rt",
  "key4": "67JdQX87ES14gx4E4jRpcHy8S9yaP6QV6tEAHST5xpTdi7bseCfeKnFBYYF7XqYVFxQUinNHWcgxMe2jDTMneuXj",
  "key5": "4882HVXp1iaCouvSmBvP5qyRczcRELmeeWu7TM1zbz9iRQda8gu4BsSxgCzBFE9WrJFa12Qbimj6yz3UbRD71TMY",
  "key6": "4kA96iMMDM7ik45WLHwRA7UgkKEXZrxKVcriaNeK3WmWDDtpE3AJEBkZuCkbBzqWAPu2E3WhTZopnyi83cB8F6oC",
  "key7": "5ZG74EH68RdTDVqGgYuL8Dg8kSCEccMLhbf1u8Q25fr7QNxFgwe4W4NpsC6Be7cMQzbWzj8e6wQQEaDaoQup3fu1",
  "key8": "5Lq8hyupcvMHgYcejn9fmricdK7teHQy6FLipNgzkPa2TYCMqG9Ac8RRjzwwdY2YDmuhr8yCAWKL3u4dA97KT9vd",
  "key9": "Gu3VwuowUTtphaCwoLmuk3swaRxwX5jjdKKJkCpTwXATNwbfdrg7YdNQx5sdPfRnnZs33jurChzjKLxiay7fqGv",
  "key10": "36wPoURpPkxjds6pbNme7oRKgWQMfz3BPtdoGvzZdw8KUMosQvG7ek6o2fjiBps43deTxAZW85fsk86tenWunXR2",
  "key11": "2ien5iGRMQBhMjEcWmqfbwch9mSwh49wVL8ofSBNg7EbdRezRHkQSzZgRdJq8rgGhFN2Yh1fR3wdqYoxseWFiHVg",
  "key12": "5zzsgnVZUwYi7ZmW4s82g1XvSKtnbbgxsfknqMPoQEYjZT6W9gsittmbBPcrmq1PmdR2SSPu8mTvof7EMq36XAoa",
  "key13": "5FvEuakijeHMdYQPnTJCKE8CENx6Tydf6pj4pH1XXZYH63dVB28VXp9GQ3zvPuEjb1xzaZzhdCwakZ332xfqRNVh",
  "key14": "2dgEH1kKT1ogmNEsHtUSMVMHkZptNZWU8WYAamoTbAijSWcxjC8X2jSuxuMNYeWi5dF8eZTzxojX69u7VwV38mkq",
  "key15": "7h1BLjMtNx4Ru4UE7mQw2p7896nh6M4pZ9r149RH5sAkmHTkJ2Bzg2NTENLNjR62ULKtAeZMDqKBRFqvYJnLGwM",
  "key16": "2GnhjvhnX2sRGbsxGfM3emkaLD4od6psfQ665kbfu9sRpDEJjS8ir6obAEKzpNtc3sNWHYzNLgENM6Ak3tq32vNZ",
  "key17": "383unmE7xGwekoaZJby5QJMy9ooPmBpdgJm2qaeVFYxYyiSeQFpwoGCpc1ZxxeLD8ghNarDSfch8MyHrTXgBVv1A",
  "key18": "vR8a1nPQXCPa4cxy5ar4gwisPWAkEusK1Sk4w2i3vtbD1KqTx3MYLRCbSmmdZK3sTgpt4wFRYPgQTGkjeE5hHtU",
  "key19": "4PyEzVhgN8RQeW3PixE8JjBqikt7MRKTgjkP3d3rHCHSebPWTCqBaWKELe3RauRwUKY9HzZ3PKD9iP28LRHSeJ5j",
  "key20": "2isrybvhR5No4h7FWB3ncsrAc4UyE9kn2ttsNvivKN9L8QPsxRzKGwDHedyKYpNxzX5f3LB51DzSu1v3Ghsb7NLY",
  "key21": "5SB3q8vmafUuGsJKJ7cWAc4sJnxdjfKgxDSeEw5XsFvC1eRsshXQQFemqnVQcK7GHaMuVfDZKcL2Mugzj9mJV7VV",
  "key22": "5Sc15NWLHMqqJVFjbc4EMvb2sTu2Xr12viRudrWQjqnJdvCXumiNsoMM2kmqrafBgyiuudLBRZWBYwNwDnUZMRdS",
  "key23": "4Gz2WSPyqZNpd7Xnd5ev5WaNDJvJtrSZ8dk3CBx9SyJdKfL7HiqrJqewxbrctBypXEvhP33JzubqAKuFjbayJmWM",
  "key24": "2fk8TZLAHbuz4dTbLEaLns6e72rGTQKYB6KRcvahUFwi94wrU9JeHQYMXab7pwWJnQzmDHzSdx9eiDsumFMuTvsh",
  "key25": "2QWrKaoesybYumxcyyTyUk3wXFCn6ZndsQEFQD5LihfpfBrQhoSWxyQ4L1mzU3GyJrTw465UGfu1RW8wEoYdR25S",
  "key26": "2itmbioLjZha4k7ujXmQbbnh54nh1e3sktJ3aKHXgdGqiNi5uSAZyzbtLacaWVntKxGBJGWENf3HwxcGxMH6q3ar",
  "key27": "5iwTBwHJtyuYKdEuDvc557PEdn5J8Qh9of4KjbcNTSMic5mGtNCQkShoBByAk8jtA4bcuBNH1XHr1tH629NvrEHE",
  "key28": "45ETGpoZhfAQhQfY7v5sW7jjDD2LT1mjyV7HBnWX1g612qSbKst3pxCCUx1zejxmy9CKjxWmrxr2tHEnUMVGF39p"
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
