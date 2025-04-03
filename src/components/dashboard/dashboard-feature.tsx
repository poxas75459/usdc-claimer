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
    "5XbNtSmznxCAuR49Rpw2fjn9hfc9XZgoaQT2u343PvcMaCvfbNphmsFqyH6n44WWgKPjMyEZKXQUNbnYMdLnq5qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTTWRdBmRkbpZzt41nebB9KNw8nFYJqNNCyd5zzucuiQKQsnbxvZdBqEkNvx2xG5gBAuyWofR58DXNHbdQMW5FK",
  "key1": "btK58At1vgWrRdxtQ3MhfrSipC9H3x3bfChE7XhS5C7rT9bDG2bFCYMd86oN6mTmu1pG2skKXayw1bibZkTTTTM",
  "key2": "MU2nu3sLwoaKvcsnPiV8B6bQAqBCbwcnjRLwdBPQWKZQjck7FfNybxXozmCu5UBNh97Yz7HxoKWg6LTQLRodfSM",
  "key3": "dEMRujiC4sta4hBeVT3NHkd9vQCx8jW6VNK7iTvv9QdeQiScStNmR2DGxTQXsAyDBnBA3anePYDGrzoLiALPc2z",
  "key4": "4Z7wpfhM7jKxefY8UfbMBPoimmGLNsgeD6VQwu3YGpqC4T4iKxUSgKrufL2DHnULykpXiqC5FX88V46XGxHtrjhN",
  "key5": "4L8ebNqHZ7BV13yE7PdCEngeobL6rbfVZfBptj8GfhprDSmG7hrUGZfibq5wnVBjtVuap7ekqK4jWx6ZA3JnTzYs",
  "key6": "4sLEWnCiWjuUUJXE9ryQBZ8QxfEcbDEDvmAu446vCfhePa2vC6izze2iAPtnF88rS8AkFdXNTQFwkUG3LH8LUF8W",
  "key7": "3eixrfbPXL9QEgciUZo32utegVwHzNJoP9cXq2nPoovxri2RqNjetBpWjnxEdcYQQowRUv7uFnGzaMXBAuvjSRFx",
  "key8": "4mh31ecpmgx1cLig8569WPP4DKoQ1og3pVtMp7pZEwMm2RH6eeLaw9bvo5Tw4Vu645xnTMXt8cAF1uUtPJSQyUah",
  "key9": "2btEALWnXhVvGFvRS92eC6vokXdXEbSk16ooqvi9W5WyXBCBUJrJZqxy7jZorfcVByiSxwa1KbtizTmV2Udcf7dk",
  "key10": "62hFwYDvm7xpRAEuLJEWSWzwqKUHrCVWz9V2DzGnkojgJ3uWd4qHvbS1J4Ycce5JVLLqEk4EfgNKbekovLmVw3ZR",
  "key11": "5YJ7CBLf9J3jEceN1kADiDGvceqwvuweYqwdPumdDNFH9ttExizXPYXD7LmDrVaFjch1aWaVQSTitQHf8xDMiizy",
  "key12": "5K4Jz998r2FJMFpVpN7khtxUHX9DkoUY6JHCLQWMtZdEpSR6NP6hp6S4NAHd8S4zNq85WCVJWNrShER34QoV9nXJ",
  "key13": "kJFbWFSR3oTwXeieheyZ28pBPL4B1uu9rrGYp2BFNGhf4sPPmFYcfYE2ipxWnUf5BDyhQ8cPzepBPzcwyNNnLDr",
  "key14": "2P2yvags6BSgMTHx1A1Y6DbxTmuQBPb6HYAj3vs73cR85exjnbAujJyEcsa7DggiRpixTzypJCKVoFhKP1z2AQD5",
  "key15": "2JPzysoVpPsCMghHffYKtbxHJFW64neMJQ11Q4dBnqDpkC6zWJeDXKN1bFTrELke7W3AXVJ3skETrjSw37nHicof",
  "key16": "2ycbu6n5fSenRSUpgYhgsVxVvYJb1sa6QEbjzDtYqJppjt8cKy4KAk16CW4sMwyzdNwErqzwcjjt1ErZTCTcrhny",
  "key17": "2BCxzKj32mPz9MVCduveW9CUNsYSmvSDoFqk1eZqS9hSfWG6SMxfVtEAbPkcvoVgFcMKJA4zsCdXCtgXyT8BMxPw",
  "key18": "5nrhchcNxDoWWzxzvE3eVhdxCYVSXFU9mMiTEi9p6SkQQ5M7e6GUGeJ2h6X8Jdzn487J7CFX2yxD3qRUMEx1dRsT",
  "key19": "3yHD9cftTg2c1pNBEu1FsavzbfgWwfKuSymoi72HoBUhVRD1Crx4sDd97hGugML3gD421FMCkqqiihrGu1x5QtGX",
  "key20": "4A8VrfGZAGZT7ZjUb68ZwDSA4PJEreQxMAafYS3TRFqLw6HCZ9i4VTEVEFW6wj43zqS2jCs72HxXSnSbBgiE3REk",
  "key21": "3YhYCerVrnHhjm3z2uLgP1FP6G1hr1M5BoXtAqXoREXAZ6G52VJvqisj11KZwzahSFuxy3uRZQDMYaiZgWCcvxc4",
  "key22": "3UVJf4EvsRhiDPaWzyaC3vgdfHZAL8XZD7WLCzrcbqhFghL3EbViSBGa33PHc3V1jwe3KUVk37s9qJnPRgvrUFub",
  "key23": "5LPw9VXzTzRUjgM68HT6i4Sxq7AuAELXCkk7r8QSZg94ebSxwqbnVtgJ8UKPgyFDW3nNj19iydwsYfwwx1KHSey6",
  "key24": "3XS1rwn4zkoKUZvfkoZvPJLkYt9NEEMvTE8wLppdrETXv1U9Tcf9d2ZLQqEnkm6kYGsPLWCgnmM99txFdGhmz6kV",
  "key25": "WZAZGM3Bb7znbBAdaT7Vzf7Z7ssMv68co9vdF7tRLeSz1hUA4a6JB78nHnheX3mnHKugt1iyEiaD2C6prFPtAn5",
  "key26": "4dJtjz6LdKtMzhfRvyayfL5hCXNNAT3seKiQ7xzL7RvvpHh6jLQ8v8NMp3aJvpK2yooinLRqrbTgLvV5q3wje2qf",
  "key27": "3fL2SKkxU8aEDggzmP6UH9dQLtzCR1idnFDxMbuHfhgFNkGzifry44NGw5bYE5bkU5gCPsxSqJ61WhfC4U1gGsFZ",
  "key28": "4uw3t1MQhuCW7qhizF3Nrf9PKE74ERWqx2zakyAqGN3TpFm44buXXdjC1zx7MctwSiHibE6MxxZFooYSjEV4idvK",
  "key29": "5sPWu5jEkhEu7wpiqU28CM6wse6hCCJshhd1xijyu1sVBNWq2HvzzGStj6NAQRQZB6BQ17DtYLNQeUh97Xj3emPP",
  "key30": "4Dz9W2QUKbufmY37k8QoGdR5kjtnCYa6JNCnMwd6iBfERLXGzFhQS4Qdf563cBNV8q7cQvv56LCNNNgJpvVYmqdU",
  "key31": "4jZWXwkx5E3cQXUUpCWeTTi5hqjFpaDAJmZsYYxbduFrHRpG4TDVUETMWdpxgWNpCKzuriBUkAMSNS4QsVPJHwoy",
  "key32": "3mrMDkdehHJ2TWR5pxq6mHUMXMovuBZ4rzEFe7YQNuukGtdoXitWahwcQTroJzErafd8K5TMMaaQtHvj3Esmcufm",
  "key33": "k3feg2cnixSVCao8h7Cb4deMTNNjPaTg4i7yZsFZ6w1Ya1mXp2gzBF2anEXJQadWGvuWxY1jWze25TqXx83sp2u",
  "key34": "4d3HynuGf6FNXTSDaSfS5dinVZD6kSRe7A2o8RDcX5UJQeCwhDpUsf8pSFxZRytmzfF9LxmrcPjgxhHfQZhVnXe2",
  "key35": "2NzAo3AKdWgL9YZkN3BKcf4FsREYSWiuEr39UcESNeaDQYizyKRkqYRAxstNRzk41Q5jqfbX75UpzhviwoVU98p8",
  "key36": "3qwtrrwkCdx7jBcm6rKVUxBoJuLDaYRP1oNFGcAmkwAQaz41YReHGw59WwPbwFkerrkVciV9fHSa9s93stjsTVE3",
  "key37": "5qE4ezsaRrxTQFdEkR8TU165H4dFpQuR3MrgHov4eYvXDT2pw1XwdrbCVtfNqSfKhAi6Y6DTn3S47KG2oLNX7AYp",
  "key38": "57uma19tQDYKtojB7znieMDskpG6yhLiuWYCoprsE32rvMYMmHQLj1BUBxPoSNfyQjD5xY1sWWFzSDn45qhWqMax",
  "key39": "214ATJ6Z4U7HJLdppEdnY2djzYdny2auzZSwkXcnJomUQmw6woDtP8zhS5JKJ8j9JudMTDqY3Ly3RArxzibqf3Es",
  "key40": "2F7Dpuw2sQBF33ChDXTmC5a6zwsf58atGuTvBUKstAtnRMQvRR847aFDemUJzgVrUH2KpGHrpny9cZrs2yUHxVAQ",
  "key41": "pnSKMkGjr16ztjP1ZUXdpwF9X1zyGQdaRwkXbfVqxHhhvxiiCrp3krKXkvRNeP6PtwxJCggEzPBpzPPAumdAKgG",
  "key42": "9ujaw1Qpw7hQ9oMYUcgR3JtNR3x5Pd6j8KAMXeo19CNtTPwmf16RiCQoZWHgVV4DAz3b7e94J6uc3q2bG5jaUH5",
  "key43": "4qkexj2LTwdmbf4YETC3Wj58sWeRvWYWfcmBZmHr5bT4XBHYpDsFavATpTXMKV8LY3nGndvcCcCHY1Bsq5Bna3eM"
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
