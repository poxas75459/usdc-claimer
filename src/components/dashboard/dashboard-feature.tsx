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
    "4NohuLTFD55cZPcvzgSgCsauQost15xB6rvRu9NZvPdVwGTsf2gQstdgLyMcKkf6pKf81tbJeLBD5EsUoFS6PovS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chAH9nf96J8XQ1UYRhj7j1ibGfmyuVqQ5rGf2ZazYWymEQ34TXbMfc3QaCDE2imU5fT1SbLXQSeHx8sph889D4Z",
  "key1": "dxF5PvQF2TEARBQ82jjdpZ6YLseWNWzftXTfu9FfGB6QSyn7b3kGVLBdxMNPyCm6ZrXgbiAwNpeMAZxKZjs11rQ",
  "key2": "41devU4QsA3XQHU4HUD4sMENW5kvUTr55uJNeMvWLivNHGDeGJ4iGuecZ4hWksTYUxSg9KCbeh6z31e34H7SvaLP",
  "key3": "NP7xzHy8uGj8dEmZB1MXSqBExUxnLSmMQAYSfaiffVytmFkWvxHXrsLiJDrrKpqL1Q3LS4NY2U91m3LVj7xnWek",
  "key4": "59aESeon9xEm5BpTmX4g6g7MTWRpDctmpv8mXG8C3ViTcF2AQzG3q958tDUVZpZNzBcQQcNMKFXfw13duTu9osV7",
  "key5": "mWUgz9WYtQvYTQosCgVuQfrqpzuuRn7bewr4tPVK7qV5TJHasQet291ePVfSbjEuJFLA9ndnQcCXmN5yLGrWVgS",
  "key6": "QsaW5VKUbXV5fSaPDiP4FabGyjUDMrL6L1abmMisvi9i2LZcsae4o9RcnsmXi47JSGaxvNiD3MWWU46C1URyTRD",
  "key7": "3MeKK8ia2hWd4F2RifDKuktVcKTKHef8UhoNjYyDoxPskFbUBjjzzpXa1tEaghtRdsFbKxM4bgxaD1cS6XpFvhXq",
  "key8": "66oQagktfMZSdfSMZVEYdXDi4BMbouxi3XKge4WUz5hT9unXux468H3YtdQvTBbZ7yA4JtGBFkq69xmsShNKsToc",
  "key9": "5JZjViohajUiRCmKpJwueRLEWLrHbQynmRyUpdFiPQ9uzfoZJdnV8mwRGW87gbHtxaBduM4LuXScJDTffYjLi1xc",
  "key10": "66FPkWG6VY1V81hVJ9aCpJynN4rvD6UcMbSXjNwiMfT5mXPkqjZbrhvRbrbJUPAEdpn6CEXnDgicUW9do9cmoDXw",
  "key11": "Wi3bUDBcFMD4xvenk2bW6uUotBYtCt2U3dHRsFeKdCFhzv74rsE7zD4CZi9ALah8EBkEotRfc9JC6HLQKmcaSFB",
  "key12": "5JakF9yUZrNe89GfyD8SR558qZjWn2Li8JQPTKQQTCNkovdRLVQwjVjp7YnKvRcH1XFXnsWDyjnk1o8cdHiPSyXu",
  "key13": "sNURYcjLrZi7GqpH8fDYWAq4nZSUtbZdfhDuhJa5vXFZydd7wPK2gAXwnjfBjNdQderfTjMwd83eafL4MMR6KP2",
  "key14": "53G8ieGsLR5naBmhj96HAH3d6Ey9QD3E6VJFTZi8jB2ciT3DSq4KScKmFAudzLFMgdnJ5vakhi1yKGSQZgUU69fF",
  "key15": "mJtyQ931pQ1PmCHGaxuVnYTaeJYuZT8QiFEHkfMdBmJzxQv5w9xqwuhQg5Ko932RrPcqnUiw1EtjrNNCm5YanAu",
  "key16": "2vHD6CMtieMAit73Vryvv3RBr9i5ZwfnsRNs3QpxxpUBADVtUkE7tLJNwMUhi4rbCNbcPyqMUWNj2YtbgsNCKGFL",
  "key17": "3qBKeeXtEojaK7TQS2N66F5G752oqppkgyuvoKB8nZ8VULtNHVsrRtmunDLyCfkY4CZ1P4sRdKgP6NpxN9enXKod",
  "key18": "5SwKn1dPnUvsiPKCaknbfRJMPmsj9nm5TebXXeEfv2H1EWQEgFJaA1RZDU46NvECE8KQL8HqJU9LXHnTgDTAeEk4",
  "key19": "21SYvStCWAeG76ieUNWbM5NvMCfTjHr8kRmvjLoEqys9UKxYgyo7hjy1X1z5yu1qXkvKcBZ9GkNUsmKuTW5tzE3R",
  "key20": "cmV8E2aRYM9BFTMN7ABhFL6MBEjdNv3F7u5UKMzQmDXXhYvSk9CAXipgSTnGWo79SaZH3z6MHgsBgQeeiuF7wKj",
  "key21": "3aFy2YUJphZ7qs5ofZM5WdEfQuEqrULbydcWym9PJRdVFwFJkMFExqhwXt6KgPybgscGPSFYMd5nkFiKsTsToU4P",
  "key22": "5xkXcSMyhPDFZJgzqcYkiPtT4WYsxzkkr7kwcnRMHhG764jLE6UPdPCeqTw85LN9Boftrdqx4WKmskQF9Bc4uJMy",
  "key23": "QEryCqGq69mWKZnekffvt5okwezeF9W66ZEs5uQs2wqcHUUnURZz5v6ZeuwmSd8FWco5ooRvNYrQntvQ3u41N9H",
  "key24": "e34iZMKtNSyZL7wbnaydaJeqLJpHu1T6B96vCsy5aezJDDNy67PQaDQMqavf6i3o7CAZ2W8i6ikkrLeVcxDE2B2",
  "key25": "mSXHedrpoNFBcnv3vxaqoizm6bszivB6R1cXXbpj4NvAAtkmpwcMWhU8EaVMiBiqEcQRQodcQWMiATAkgTdKpgP",
  "key26": "JJKbCpZQoaj7CWdPZ4K4BQBzuaqNUNu9MWPqXFxzCc3HNfnL2vZTT4m3p3RJkMqPcKzS3w4mmW1xxQEuaRfoGEw",
  "key27": "6eaHsHibugw5n51niR18kmqiYL1at91P3xWco5imWxJaM7VawiokufaBoRRJHMKXLGxG7VRAMsH54TpShGgiyaf",
  "key28": "5ABeZaJV67vPqGgBQppdwz4uNaKxk1qwpdiSLoRB64hu1d3Lv9WVo3e6J5fEqJwNvyn9hh9vvSARvV75Hm4MQf4q",
  "key29": "2mcrapxLbfEquUYFuVLJyr437Y8Ewq46iup3ZAbHgmaaycxpYEQjRd477Vd9X3ZAzJbTSb2e68Ajdw9NfS1vVK6G",
  "key30": "5fV2p9h1jcqxAFvjssLSHnZ3rynniRNkN7ahFyjsEnc6h51rSQniEAZniqBXTDz4GSzckctRVYbajNaD9TSFQVuA",
  "key31": "3SSN6WhFRXgLyekDncTFeyEBC6rSNcXyhPRQfDi4v9pcpsDNRXXLhfpz2DUX97cuzG83tkAbqPqfVnGPWyrZ9cC8",
  "key32": "5MbKCBBvGVcHvzhnhe4tWgKvsGrJvQtMS8TM2JQNzyQqWeRNjD9FndPQgLb6R4Px1MoYh5wqow8tWii7wkcJ6gDg",
  "key33": "2pAoPxf5xps8W9gBRrorXMeesYLDKZbQbC82FCWgaf2sCaABKfyZjrxkopJ8KLKvFt7i9eU62zuBgAbaMRa3wMcR",
  "key34": "5Vo5LP3GDioPftoE7iw6jxz8cJ7CbKzgqSa6KxV5Hw7iC9C1nNPxRs89auaQxbVby6q3baGUxTvXPBsXFH5MXWNu",
  "key35": "21RytoXvhbfW6vieN6JgqxXcxH4EkLCwYuGvRcqLuW4Fz6mDpQGs79szUNsxzgDie1BRo5g99w8XEysRiA1gqB6U",
  "key36": "3G7vKTYAkHQ5AbmvzTG1GJ9D4JQdNMfwSD2WfP7JEqbeL5F85QR4mGxS8js8PzX67ggacYyJiyCfupssmtVNWXes",
  "key37": "2msvbSuFe1YSYSTDim6o4HLRGmG3XjBHYN5CpaA6F684zAuLL9mrbEZsZBtfND2zshzd9axcgNdNGcHpU9ezwE3H",
  "key38": "2tT3NyhYAADCujJ4e89RNp1Lj2TtDPBy6YFMhkHMcbRHS8m25YnN5Y1WM5UrGovUeJJrRtbHSLwg8FxhNwSHm27A"
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
