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
    "55yEuRkcSVv7stMHxVRBCPUXDn6W7RDeMsQY3G613uBRRP7inrz7NuC8dR6xJok66Lzvvwc192FXY36mhSBhjTbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wh87M4tXCrcWfC4so3VYpghxuSVJdXZsoUpgz5XrYPf2cnZ2zn4CKM59AyHYVmWdfyRN2zYCMwPhb67axFZ32TM",
  "key1": "5DjPZ19DGcS2Ysbz1qHqDvhhVAyEgUShjZo1CZkQ7ChpWvArLKD3bsvXJqnZ9eug3p7No5cGURiC3hFuGa5yPEc7",
  "key2": "HYENx1A2EBHaTDkDdU4F9W6b7KbL5wLmxhPPYHJBm6itstfKm79efY5FyQFekFT9pSPVW1pvKTZQn1xeKgyx4aS",
  "key3": "4sexADFE5hErkJyDQkmPFNxbbc4YiK24NRTb7Y3yW2vmJ37n5DSzovZScmeGW5AANao2FcQcZoY8cXYC3SDENmh9",
  "key4": "4qURVT8ZxfRozzijLMK9Hz8n8LGnQ9Z1xKjuTLUkpPsYTaEjG88rGKWaMxy5LVsToUgcQmPd5L9JpreL9rHL2AG7",
  "key5": "2QhGv6UTpGFF9XzB8KLLSH7LD4kiEmVeM8sjCCLrUS6vt8APjprM3t3NFNVJveNWLQfpvJyE7Zx56cq3TQSRXQpN",
  "key6": "3ZsmFRKZCnAv9WDwmf4SmZs2fZVh4uwUUgGDBd4yJ91ythkWbLRCf3KcsGUTQiMacv9PYz5C7K9oNNtcYj6NHXKB",
  "key7": "eNQAfuzQBq8vit7ad5ebJk9HY5fG1t2KTYqDyafG5VtDyD6Xu2sSii7He6guRD3w8Dn87oZBVsxML4Ms2cMUzWo",
  "key8": "XhT3EKPuR5TFEhx7f7eENpnEBQQuETEHmrbd9sTwq8ffQNKVv9JnKcbtNz4oCagjsuuQ44nWcEpmbz6RkyF9xHT",
  "key9": "2ixdBz85KvYrh84ygdaL8F1xjzyuqBzdTxg2t4GxBf2GsMFvyMquJST5szQgEzYQAxqD4EMbBpSGY6QuA5fnXjZs",
  "key10": "8zFfmmirjGw83JmkrUCv9T1usSxsS1LxkS1tjCepQMo2wPBiP74eg7Do6YyJji5UAvc4AoyFBCxmToHFoVeS5Ls",
  "key11": "5MtECtvYxcSvqgpzc2F4rZJXoCrUSdkHMAaj1qV8YAEMp1FBhWpnbxwMZchVw3FSBgqhz7C94ygWsfFFHKYb3zqP",
  "key12": "36DVzwgbFKhq6sEftr7e6yqKdWrv1VYK6tsTx8HuzYYC39i9LvDmK9dvofJdW7xAgvFeU3GzV56EW4FZA3prrxgC",
  "key13": "y4Hr9Lbke3C7ajoj2aHNwy6jNXbdsUECLCystqdXR4qdxLZM1Fe9X4N3MVRH1Zyb3R5n3yzn7i4LMx8v2KsEBqR",
  "key14": "peJng6D6DcK7kXvtBa1Xkw8BpxrBfy6RWaK4MGbtSp867ErKxiDkKFyPMt9rr2GU8T3e2qWg5w8gLct4mSE7EcS",
  "key15": "4Wub6aAeFV81TiWMDStJmvEqZsS5drTt9xHg1r21hFfMFZQLuVc3nYxu8TbbRp6he22wpt9p8T6afUNtEjB28RvZ",
  "key16": "32f1F1J4MEoGSM8jYm5i5pWLzedrDytjXPik3VQckXg2tZq5dLU61fTCbtbupEDxxRfQwtjr5skzbiN8tjVqbkYH",
  "key17": "3bT7ewHhk1BdgHGTPcYjaNpHcJ8baSzudcgfiqmEc1z7ybVNSayvshzuyDoZFrXJ2U31gfyrtnHuiMzdY9ZqVtNX",
  "key18": "3EHGQ6esydN9XQA7h13rWTh6v4JykrCaEQb8NDK46sASgNSKGVnVxFkmdbNXiHjMhxCTWWtrS44yKt2giaUwTeqd",
  "key19": "2EWtTR9w43jwaa6ShN1f7rG7wEkXDqVCbZ3P4X41eUEf6CABTz5nJih2HEsdGHwhZ9w3e9ogTT5UQhDGamBBEGJq",
  "key20": "5vXLRMucPL1hMqu24X1JdkpUnrb9oo7skRuZcdi38mjj9mjJbuzTzEjmECxQEh4TfBZZBwpMC6dx1oPUBuDd3jK5",
  "key21": "9oQupcPNnrWR4emPYwbZ8KJSjqhF9epexokwqNPyenhM5RE6ee6ZxDSf8gtgWgd9TipKSw84j2sK9fUABcSYXMU",
  "key22": "4Kw3YEvdyTtPvKNZhLWxDHKSSBH1dN3Sv7KWxKSnXaz71UmPMFCwGgY3fNdbfZ3VZdPLzV5tFRJyc6vnUNVurMUV",
  "key23": "52Yf88L7pWF82NimXY8WKBdnmDSSMfT5KAogi6F98LGyRqaF9s3ztRxhQp5b6vab37pdVuYE1UyTYyEVWf6KnzUG",
  "key24": "2a7xxH5GWVDq66LZxi67oPsrL2PRgHtUSUQzbdLDMnBdqd34fVcPZ914tPD4trmhTVH2uFEHgb9PDuBPeaaMug2X",
  "key25": "3sfcK92qjYZgvarPDEskXEvrRLM5JfCiNT5EdmuPBRg7Z8yHbnjN4oPyjnEM3nAm5LVErJE4rATVudbSgsXmiUh",
  "key26": "66WGL8iRcR3jeg6ijRkRQBZGkU6PqgdgttRQHdDrsgQJsoBtBWLh25CR2JRafEBTmGZ1gPsTRQiipZZZcApzvZLr",
  "key27": "5qpUKMoz5itoPW6uBFEfdqL76AyWcVGpvegHNpMWBmNd52VunsGGCjkjGgA54yjtngRDKiA8Hv7MUFngAu4hq1MW",
  "key28": "4rjSv5eov7AzaC26iRpVhPBNMW5omGauCQFmgdtCYJxyGJajhLxpwA6BEZFaHVqBJYymxGopfd1Cx1VXXPjUDRQ8",
  "key29": "36Y1cB2orNL1Q2r9eaTCxTw4SHPFYrDPTTCvsrAQQA617sacxcwjPeQxH84JK8Yzq4kFzN91XqgAZYrF5Ku2s9sK",
  "key30": "24K2A8CSo6YXu5V3U3anN11uKGATVXhpHUX5MJVWKSezL8utWkZGdcgtLR9aunSyMjGvTb8MkEaepw4HL1YttdLC",
  "key31": "5yE7hMTCAipfTRrQPssNFBfeGV4rsKm9F2C5E9xeYLqyy2XkgmF441PGUmCX9hJtB9viQQvCuD41A95SSjayzWCz",
  "key32": "Zhe2nPB3d3RddKF4RnkSjFnFq6Yk1ommUMfj8Bv31ZZh6gjg9oCr73tnGWuBhXbJpVSWH9PZ4g3hPLNny4SWMxe",
  "key33": "41m2F9jbagpQqKco1MTcdeKteZjBRsaZFYLKNX7ztmUJe5g8c2fCLhEcm5952jE1BUAamwu6ztahBXP7x74WP3ka",
  "key34": "4B2xqks3xpFvezshyqhocujqj31oY3NMVfRGMwXrcFbuw5ctXUVPJPZPeurCUbhB5QuahhbnWyZ1VNoZv16vWnSN",
  "key35": "5oqXFtgyL8FYjrSEgBgZSu4ND3ZsEbK9YRQp5TXZT65hkmySUvSqAF4iFeiVKzWpL7vPfydaGxh8dVuZBp2PaXZj",
  "key36": "258ebkTPch5jnQ9f1vDRHNgqkZ4QK19xkgrWZYzhmUZyNBWAGzFGh7r42RkvAoYpQfMf48z2p19CdBxUvLK5jn3f",
  "key37": "UHFDHYh3wfNHQert31EfGKMQ3MeQiGeDHLTLTJiHicX1gkVTbpVLRSTPGoYsjxTJQaYwvp4FoDFq4JskDEVbx1a",
  "key38": "ihGgoHMJ9f7ym5xjjG5PeqPVLE2YAm7MY8kKTzXq9e4Sgh7QpeDqzDGqZcfxcWkGdmehubbYQhK7MDvEJ9dor1V",
  "key39": "4oxCktni6AzzhD7r4R6QG9mRCk96Hfi78nFNyJcj62JYZrFSFMhpGuihbWmUpyeRcGarm9aVmjxUJZ55G9o9THau",
  "key40": "3FV99wsnupRHTNwdP6NfEp2vV7LW6M2sED4gCNbgZn1K8KRxESmTtyuriLjGDNKDvThU7rByZjRZjvyFzDqdXyUN",
  "key41": "43qg1qRWEvBdZASMPBafnNQT8h5btciYkeCrp1CERPXh4E6KbRnj4fRxJU7yRW84qKoMoUamMw1QAkjpJBYuNyiG",
  "key42": "3KBcGgfnCLm77UNo5GiToDX6KnU4JHoXiAiEoGQ8RH1FkRhHbpB9xLvFrQjmUGb9NuGQSMitaQBdynmMYiw5oEGr",
  "key43": "4X9vg4vZ5nL8uDGLfjitraQ391fgBg1F54c8XvtcQubA1pGr9wEX7qeWurmzha3nXasLP1HttomTUkgH8Ca5uGK"
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
