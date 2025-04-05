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
    "2hYxmFugvcXSVSfmGuqFy3s9FC8kTRrDQYRUSjfRXvv3jV4ippG76awAkvrrpWUmeK8ffmTyngRzQ9xU2MGFHStX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EUjN4MdHbQaNm5paGarEuEpvVdRmiQLfqkUP9d1sgtjEx5g13qTx2Ra9oCaX3r5GTa88yJTmqKbJiXVz7KmPx7o",
  "key1": "4gNFMW2tyeZWcbPTSbwUVQNLoyz5FGjormDQ7GycYaHuH2VzPbL4Q7dBxW25se66ziozzvTC6Tv9uEymzVngAyH9",
  "key2": "2bDsa4K4sn8CCJ5JTNsnqH5nA4sU9BURRHYoGYHc9e8PjReYptnhUGWMNzvwcQbdZvz6oADnmoToZkghRY7S8nUv",
  "key3": "oypZTtSicQX3oJq8UyWPpp47PanvJGtXMyvQtJs6euntGBfdLetnvRQjYfda34QkMcT6Y1tBKcKMjG4QizyhCZh",
  "key4": "2Cfs3aFjLPmwQyo6NWSg3jKVMAJK4cVnJAuzjtw77iwBYQ3wbTriuJ4hhW8P7upz2uDU9cPUfgEsGGpou1FEGJct",
  "key5": "5p3qJ9hvCqsdsLrSWF8iafi4a6f14j9VPG1VXHadL1pFbwuDMhe6KJm3kE28XGczixDvfNFc3MCVxhgWunRdGszC",
  "key6": "5EhHBtWZ642hyXGdMpTpg8iW7PQ238HCvwTy2FXDbWubWMMVZxM2MYFTppiBSfwwF68Nkvyuk2TNC1KNyH28qJ1t",
  "key7": "6LhyCdBaMwyu2wxeZbZSXWihhcr6rsWLDuLcHAYGqZHHyFknzMDhnk1u88uo55kbiKtxFktZMATw2Ka3F6pHyNU",
  "key8": "3Z1259fPa8Zi8NedJnYgA2f5383WWmWMLeDo2qeDETmqxx8E4fYXvA3oiCevSi8eCdbG6TNrS6KyMoPNWV9CDupa",
  "key9": "4AoVRfjiEXEmARTHoAQZtpXCqfRqNbTiJYLCCvca6DEbdJcWHksZhdtsApjN7t5v8eznKRKqUHnEPJXbfpCNiL1Q",
  "key10": "3vFWV2NYmXF86TYc2bS1zMaed8FWeMXxZZUcmdjJAkxpU4UyZeANmk3Fija5xXv5Sjfvb26CrQbhonD2Vc2LA8E1",
  "key11": "2X2jBHaA4N8N2JqmB9q8GEA4QYfT6TCT952eRS3Coi5tfrpDmCPzJhhUV8mfqazkJvCXq2XSq5RVdqcH1t2rKn6o",
  "key12": "61cPNTQbVV7nibdE2oErB1UpguiYdi4Q8VUVGRHiUeRtUmgfZ9G5cMWeRAHTq5hEzupwRZRcwjLvrpdkzbuSoyQW",
  "key13": "4xQQ2JiZ9n1bug6SXCmpCqkYwp1v2D2C2rbvHKhtfymarJ2HFfWeGV6u6xBktEfgysTdwCxT8NVvqZ1b2UFhBu1d",
  "key14": "MB3X4PzgE1cJNKAmXFHEvW3Sq47LS4d3gda9cjE6DXzKVigxR3pMv1LUrv4nd9kjfY3xFYkZy6A3hWeZVVKgx6D",
  "key15": "3CE8m8AmTyppYYSMpytbM7qB71GYNwepXm6XfpUZYh7D7cU6oGFX98CXQSVkLpsLMY3eYpYEBLSwSc4PHdYrjLYL",
  "key16": "4MLbHxkr6ukM34FGb1WaET3LrAGJBLASPfPDCTf6uz62q6gzi8rkjpgFp2BiiMbctt2YfKGpVgaQN4Ed8mxe9F6q",
  "key17": "EBz7UNQ1fBFch8d5H9E27HY3r4qPfDrpXMnPFk9J8Tj4jB4fpeh8s8iLpPQpo4Ydjktc3dG48YUHtbJ3VuucuzY",
  "key18": "UANPEGx1kexW69hkURkJMSuziXQRoNkrARZPYoyeZCpDwTfRYzynb9ZRMjxAsHEKEQtJsUdMz8JMok9n3Ax53Pp",
  "key19": "44SEnN1WUtw3VnCNwQksPDwz62P7WrofZALiocVSd5ALaEnaFp3YGnqegEdXz6aP43AsdzeNRiqAwNQi9pvv7Rwr",
  "key20": "2XffJRhwQjGyezm6XutM7cXqBC6WJmB3oGTYi77d1jYXMAGZtozQ1gtPjeNLNUmXmwa6J6Uze3srYhoPHSuHuPko",
  "key21": "66gNvvAvZTUw8HZmZkqWPT1maypoge9kh1s2ExohxYTxnqdGZd9VPhEG346q2vtH4vbbdghArLHnYWeatBcb432p",
  "key22": "4hvjrSApoDAkVb68eJ8DssdmqLEwpVxRBgrPdjrtCkCZUkPhAmmzGLCxioq5iuqL64xYFEHapU1qFiH9TaECEKV3",
  "key23": "4UfBVvr1tqqLx9aegptJ1peRpcwyHyWdjQLf25wGjnUEvUpA9kAtqnKQ6iVB1WnLGKh5qeUrT9td5f4VeDkaL1FS",
  "key24": "3Z8Ne9GL5hh1GXvgFHRp7EQcPPCE2Mr3rJfLuNzj1g23gRCuEyBLCDFRPwxD9hs73fzhoVdjHntM6oftaynMjAHN",
  "key25": "261TDJnyiMMEgFP9Y3mg5WGZdudtKF12RHRVbtvyZyrdYSo5QPEy2E76zax3aQC1uR89TNmd8J3hWfzb66onMokn",
  "key26": "2bymEvKcNqvm3cL7AoK1i6BRUvLEZoGju8KZj8ys13xA4weCyxJDTycVzy8vCrd1eMNNt48PAtEwYSp7JUa7BxHg",
  "key27": "41vKrvkTzLgkXMxpGHM7QmgjFuUaCAFXSm5gWaGcSxD7Z9xkAvX5DKqwiT9xtfBK8bqXQ92SmEWjcZGsjUvhSMkN",
  "key28": "3uuQADgYabSVF65ryK4XHJoPF1J8mmgktSVHKYKA5HVu5e8Licv6by61mmPC8yfPUxQvgMgjoP9JDRC1dgyPfaXB",
  "key29": "4sGN2frBofwgzfc9fU5GVgCeBPyiPUs7SwyjZiitojGZHhHCRV7cVuZB9xwfR6AXz2hN7S4JAYqpAyXadSkQuwbV",
  "key30": "4DRZ3nu7r5C3baV8z8Aqp1fSJqc7zQ6CPNVzJTuLEQJo81ChEpLAoLrcXAeSTSzxQEUZASntd9dFd2o9BE4tx3aJ",
  "key31": "2VJ86LQ41XJV17Ebkg8bSVKApKSkSzc8wsV2o6iwzRywHfbSxm6q8MhLRy2d2zMCjZDjty2TTXTqZ7vpQfZVZAx8",
  "key32": "4Xr2oYHrFYDfoQCyDJDveEfcABnySELJqnUhBfMcJtUhpd3VH7eWgTvgsbNzXYaThczznAhPrHHBfyixB1v2uCHE",
  "key33": "5GuJqMaAkDDHTzbQm6GayFJrb1Xbtu2ksf4QXT9vHWLXA7xXTeQsgkFMz779YZh9JYMhN7r8QJx1s9uQtJXz5tPB",
  "key34": "41h52k8Vrqt22GEFH7jEqT55mEeNLogQbkoP2qFKdniMUKwBJgoG8RE8L7uE4pNUQxB4qHzzvgGs5NrYsZ28KoXU",
  "key35": "4sLR6KZnA7gRhFkJXdDCPV1ZzLtpYpFymvMT4J3j4Kxit8k31VcHycsPR61vBkn7RTDe1o4zSMFgNdUXG5gKXVmQ",
  "key36": "4q3E6Zo3t9DYRFDG9G5fXE7weR293DxJHvAaWP2c2hLBFSq2TKhUEj4H1YoUKs5fje2GWp8BLFbi51TN4CHxeJ9k",
  "key37": "5rutXydGr9QAnX1AyYqLFFFyVR7p7R3NMLsXQ3xAfUJFxHq7ZJFUqZYtuN9np8Mc33Jc4mAAXsdhg6PvRAA36YUp",
  "key38": "5vB6JnuvimqZdDnT432zXdb3FZCisgKBjVthn8SDDZATnUcReCZgENifkf7p454mxWNqfNPr9B4Na9qKu7jj3xw4",
  "key39": "3B1huVKLtWXeYj2DBjg2EBYmeJ8PtFho6fmp9wjwxDqe3qB4DJuVpLttaSjgYi8wGwS7mvNwQv6Sg4BKeP7qFm4W",
  "key40": "3hRa2BGqkAp61AgGoUViLHTysmUck1hN8m2eZVCLV1EovE7xP7hLbcP3UB5YVv368r3Swn5KrUBeE8fAvax9Aswb",
  "key41": "32rYKroRtsBbLivpPhChutnzT56qyCUnZc13Sy3RgfaniEZ9aFmETRvm3LPziUscBgWf9KT1JaZM2JvdVezrd6XP",
  "key42": "4FyB1gMDRgYiB5BiKrYyqWkQaqPmZ9qinX3Mr2xyCBNcpdjdUfLjdLJqPxgu84GPLgLGwgcHuQEggpr9H1MaCbcG",
  "key43": "3Ew56tsWyGYpUJhQsSDox8hR3qDtxoHp2HGWFjrnCPz5RkWoNz91XaYcZ5K288w3FxBqLYvBP4ti5JgkBcyrNjUq"
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
