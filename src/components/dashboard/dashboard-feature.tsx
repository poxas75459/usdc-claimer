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
    "4u65jjd5cXLQJNQtHAuVa3sZDNHjf5o7kQgzw9V55BbNJKPEESFzDNmvQJ8BL6pMJ52cLqEHTmoi9KtaJFTXKoPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFs4b8N3Yfys4qk7zQzA7zgtKWiNGdK6NZdJ43yWnMojxk1u4rVwycYB8xQCWKY55k7pVeroPEcagh8Zvo6ghRT",
  "key1": "3U8H9QNbDSYFXdAZrxJKJaTHFm82shh4Gt99TC8yGpdRdXXJZBejJNF8NeLqBYgVuxiDsKZk46ti7yroxMe2AtmT",
  "key2": "5RBaW2BLmdKuUphQShiVUZ4XhjZPeNvgnpzaPnDByGX3eU5dK9PRk1f62G9yS9yYc9mKrL67gJVCSxxpUwi8TQqa",
  "key3": "42E8DFfxjwthyF8goT9oViNgVaSmwNMdwvd6kdqMVtA2boW8VQ24suzSQazbFkJALgrZod7GFdrD58pPxSrZ5fmR",
  "key4": "3Jb3Mb5KokBNU4hxghg5hUoYvFFxUReuSS71Ds4GPPcbdGz9w4cqssN6MbXQB9KhTqkye9PWvdyL79JL8ShvmRzj",
  "key5": "47QdtJUbhXBT6t8shcmv1iZVpTUJYFZUpy5mq3LSZYHD6vAfRqwt8DnxFVcJW1cJTWaYXHivpZdFr3bL6s3VXy84",
  "key6": "GxWsZQF6cdLMTNo4epw3X1Xmap9HrcXX8ZiKyWqt5TEYdk1r5zhqvtUcjEMmAtP2wLmDyH4RRyAX1x7YRxUKTsg",
  "key7": "n3pEC5poupHLPCSDv9Ewbu1n7rp5NRwCmQ9qYG9GRFb2Z3B9NPjv1ioyhDnLPxzLSTGBqc4EsZQT8TRa3U9hgi4",
  "key8": "3XPqrV6o3p7VP2JsahHk7jCFVo4dY52u43t7nzVyo8cpDfynmUReHnuKKVNHT8Fw4RBHzoCrjGNpuARVvLrhXHAR",
  "key9": "2ueGtJuhaw75qHrZ4oCA4EfYzk2rxhiDZqT91CpRD8KVhBZYmpxciqGy6BQz9a94rrgStRcxinCRuCEPWLXzCAUL",
  "key10": "2aCcW8yMTeWJUycLK8wSHTWLXPBo5mdDZkSLpEB6w6eGza59vFvkB5USdnx8QE3n1YG2Fn3vspd5MatwH3VbAcEK",
  "key11": "3FKQaihVb4W3M19XANQJsWUgen1gMJiR2bZtVd2ADWHVKerrVGnqSN9aWBtmUFnheKUsgjWAtwfddHqeFnoxa7j4",
  "key12": "33keQ7ECu3269w4aYLKVFSRM5csktYzD42wmZKgXQvGpjzV3MbLvzDwevT1gQhR38pNnruY5zBnA2CyiVaYDDP5f",
  "key13": "2yYptzyjnCo8gjd7dh7prJJM2NEtxWc52auoRvmtYKJHwVNb2NATpwSWL1BhVAGaYjft1zmtX38xBsNAPHzL9U9j",
  "key14": "3A46BmFFqgc5EXvYDqjKiPXvpnSiEdguR3WdBheR5Q4FEYd4mMzKWzB24HYHCwKKmvzMxGVj59Ssi9iSMiUngrZu",
  "key15": "9VQZb5WGE1FjkBgUjGeyhTqWPCBZVmaYjCeaw3b453PXXnEy4yub7a7kx7BeUHXYDh6qsW3UpW8cmQfcHmvYnNh",
  "key16": "3Xhx8mFDW7yESxarCjtfX7svrk9gPXiFRSsZif55KiensWYa8CxzWRtVEFBA3HjvZzjYZuLrMEi7q6oyLz4PfL48",
  "key17": "VmQaioijvw3WRUB2Kg5CCDnUwLYPzVMeExGBWtqfZFwhDAh1nvriJuwVhhDT5kk5MBNueeWyW5UgiMiZqPcXbzh",
  "key18": "srfwwzxasyhwW2TR8uPFvimGrvpRhGipfsPJioEiKLHa8EJxWnsjNvdyEDh5bDBCur91coGzu4dviWE4BbBPxeu",
  "key19": "3rxn9RrX2T46EHohycTHrnbt7HNeLr17vyRqzsVS2bEPZ4CPKVXxj7ger7XzaFnAzwDm5ZSLaz1XKPKeJD6RKTMk",
  "key20": "5ihKbNBpKRPnwbViC3gdSgFDMLSVAcozPeGDSW93N64xUyAxSK2japJiArwxS2qSnkeUxyjaxNu1VEExCmzYtYdn",
  "key21": "3aKBfUnRR2As3A4RNnym2i3pQyUfFusvcSh4ojEoQY8znTa8NUYaJWn2FFAiWaAcFLL2odBaGawtYyiW8sCnchLa",
  "key22": "57zAjxxfXDHNvErWaEj7a5SC7vK58fMCSFPceteJ2AN9JnQVEW5V8C6f76u45kvDFXytSyaEo8S6VmzuUVRLP8wk",
  "key23": "56bJAauU2LYs7DjjuVY6xFXRyH1xf7ybpg9AuNmWfnsFAvMPnHj3nGg9wZgtdvvBCtiD5s2UNBkHfdkUCTRftQry",
  "key24": "4XXNocnkjRo9u7wagTdPDGXpdCxw8vy1Nrwr3oj4dHZPCd8MPUyydpGRuLL9k584F5hHcZ7viQP9kygchYmGwGfj",
  "key25": "2WKZ8Fb7yMqJej2TL3UrM1zMT5PcKrAsGh5De8PZJYJtawCCiLD7hZyimUypnK4n9vZGs26PdXGbAmiaVRYnkhgQ",
  "key26": "7mpLPGhhR5RRnUKB1YPaPWAKerneoSp6Gd7Va1G827BLCwpFSKB8LcUL2qJ84efq9Hxttxf4sLg9FW763adeWtE",
  "key27": "5QL5GPHq4CPTGHJidKspTLh6rjUVP75mvWeS2GzPqYDoeVzXo32VXun47AHT58Hj9bw2Npw1eQmeF9mNVM6Do57S",
  "key28": "2Hx6N3XxcVNhPwubMddMyDW4xeB1JxkH8kFmcPTXtjCb3W1goBTETcJMvMxJfoFGCh127pw5XeRYgYsto5iTHmZy",
  "key29": "3Sgv5fMJeUVEczX1miorRivL2cBebcQM3eE7M25Q8h8ReFcteXsbQLJsRJNQkWfnQMrsee1Ar92tjvnuq6iUr21U",
  "key30": "2MfHYguWqA6LdXkaUPRtDaVaiU9zpmTFFX3R4CHxSU2ScwfzEgFPy759yrHacmv1CKLi36Q5tYwVphDuRpBkDyh4",
  "key31": "3SCJLP2NpUviozMdMMdFC5uCFR3jbsJ9u16rvByvFN3HJuHGP1VW1csUjQLPa83krnVsUwgFHdDtr977ctWBGJrY",
  "key32": "HCdEUq6JFisFyRqdrWhvLCLTy4Gnq8w4mMqY22mekjoH78myqyEPuUfDNoP8J7w88uNtc2Dr5rULKva2mE8QAH5",
  "key33": "gdmKtA8HYjxJYMk91ocMn5k8Ucb6rKuCrgJhCkM9GytycxJQHXPS268vQUNp7WJ6wAY3fTGv4Q91E68cZYrMkSe",
  "key34": "5CecSeyZoGfmgfTnEuT5ECzQUSaqZFrRYmjWbwJEjqQ6rdtMRxndxRjtr6yWMoH3SqtDaDidk3ESLU62Nap36bBd",
  "key35": "63ABsE6mTAGBukApPP4r33JF4rNBpNPqx1343DSMMG2GoD7Xked2ywFycnDEcSbmKGCPfULTNvWfRMGNinpRk4m1",
  "key36": "3PxXakqreVrjW3zgsYodMnCdRyivnHNUje3koEkTP88wy2Ujq4MQXfipbhnBPEjLZCtrLSy3dR1TGsR6QNpdQyLV",
  "key37": "47sUDC5JV2pvnGf5MuF8LLLSPgwWraKUyiVxkcbaN2abvuHptc3NE6UWK9TRueiypbwZ9DwPoYcwPkWbiZGmZ8xZ",
  "key38": "3FH2RMz8totBi4uBTKx3GNT6iCb7x549dtgr5DfEtQi8uj1iijCc1F4ZRHNBxGSq8fHYnKtfTQkNd5E43Sfyz9UW",
  "key39": "3UmobKadws9VLkQQiU4Ar88Mh7RpMaty9qQhYMksMU8bR7Doec979qcoKKVqybgWr8ix5xPtMs37RQwm9movNaR6",
  "key40": "Eg9iwQadRLjuNAtV9EjbT5H3ipNz8vqgBNPKf7b6tX9A5FK1fyBniDwYBbhWaokSCd8Vk8w4UraZqwDqeGak3oA",
  "key41": "3ayHq8TmbC17sX9p6ZCKth2Jnhxy86SYzheUQ8NM5qd75fiKJn5FE9yiTtyUxMvoydzFi1JvUXKZf3jPiY974YVZ",
  "key42": "2LGW61UamY4YYLf8px5uz4kTZXi3KXxNjD6rhF28tyRCYubXscr9cjgJ5MCQXVypayUiP3KL8CC1LudQ3eXfZhqu",
  "key43": "5eeZpNynPTLUiEBu1qmvm4ggqRsA17wRDorwwXznMHj1kVfH51vwL1m12w2Siu28vvdN19YLCNCB1qjRgDAWhK6E"
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
