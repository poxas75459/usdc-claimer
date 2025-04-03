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
    "2hcDnLMh6MDz148koUmw5n1dBZRunZ86Arq2WHMDxk7USeA1wxgM6rTo4PGrVDC5nRyCmt1BPf9bFwRcK8REDhRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hNSSTk1L77dmdtMsoRxQwHgf1YvpvvUcqNAticEqc7DUMB1CQZXhdy6hivvzBqqz5pbfVVvH33BtkkRMintWX1",
  "key1": "2QzbBWkX7z64B5bgKC2jtpKVhcrTq8JUY6F7gbFzQVSkKHJB9XZNCrMP9nPFPx1D96bewQAEhcdGBziMkwYU2aP9",
  "key2": "2VMUoqvf5fbEX3uuHP7rxywEeEyrbhfdLMMZemrQuzBwTvUVwKv91DTswpTSZZkXddNUtdDyQgTiUZtKZjvtAabG",
  "key3": "2VfrLwTNzT1Y7pVstnbyx8jBYU4psi2KjMripQnqs4uWjMZtmU3AYqR8gxcDYnSSRHdhqiXw1Uzwd99HzAcFxXvW",
  "key4": "2usDxfhAjZc2vAdqN3zCmWpTHbjyCA7D7CLuHECKBKxjkFgjJ2piVVohLCMh2gZytMRrHQd44Z9qR6ZdgZfz32S8",
  "key5": "igzXYcsCUfwU2RS8YeS4QV9brB8HLkHNzfMxt2se8sf1HfRnD6jmh7BG5nRhS64RJPzJKoJzCesQ7AcN8TbTAfr",
  "key6": "4VCjuWAva3Sp7Q6UQFQGnffyCNfeV2m97v4sosh2pyyQ3vgWbTkUDxKuo1UigoFpLW9ozSMmVPFefJgj8hQkuGzg",
  "key7": "Dpwyz9JJB2Hobj9gXj2hpinLYzTuVcgjJWDgJfdNML7LPkKJ2BU7KU5WJtBhJmZqXdfwK3ehPmDSdoH98w3k48W",
  "key8": "2y3n88RUqdu3QKrE2zayEmRCbRdmf8YCmtudxnhEaFcbu1wKUNQmG5TLx3JLawwBjfj3spsq8YX8NCVqjS3Tij6A",
  "key9": "2j81CPuyCyyFt4jSqhNCSXHZiNoR4YGJVMgTVW2XpH6zF7FGtjd3qP4mUw6z7XPLSVfspEMWQMsYcpYLDFnhjABj",
  "key10": "62ujRASq9Ww1CdhRH9g8MnBrDkmbViexaB5qDnKtF7gMpVFS4Pizt6sE857Qonjh3hfjYr5KqVWdJxmraRLxCVK8",
  "key11": "2rVdLfaYsN5Mt4eP55u5czDWPMXXgxNf1oMAA6i9ApMX9qauoZr23SY5qMj2xtbv7bNUo4JHSXM1mAHPFawES3yT",
  "key12": "45NPt1aAg73Ek67pTAd8dc2HpNAXuMV7jH914jDr3iC6nGDvqAmrnDYwBRxz8fFDfuWmZ7az9f4CaHGeuUMqMsCj",
  "key13": "5MsMzoWQiwzFKxqG9cWYHf1Y1dZZ7XJEdAL4qjQVo7Ss18kMMyCBqfm4YiA5z1uuxzAjJa9eWs7CG4zgweDevR3P",
  "key14": "3cSwUtgZCmGuY9SkVMwZkY9NQXiDa9eVtEJtityqD4vV95esr3Dkgb67qx3PCj86Y5bHqEiDnnTyz57yBCwcissg",
  "key15": "5XAGeS97VSmaxLmqZY4VagTCzQmhcgwLAHhSotwQiqkAbFy1tXnMxtesHLKjEk4RuZprJF7qvSNwkP9CcW1LSES5",
  "key16": "5qMjigaY9Kh37dB5sEWSteVf23Jb7yvQXb5Cbm4dLMcEyPo8qhQHxGRFWdfEeaM7ergiwFmEdPXkvc4rV9Zkzn7Y",
  "key17": "HoZMd9Ty5dhx7JssY8dwjNg2dJwXZhaFVHZw94M2yredxXa1GeXaiDgAmDUMcBxZX9uT74mGwKm6xPXZw8k4QFe",
  "key18": "3XH1A8N8yrPSFzjtaPFeMBHFFXf1vEt8PKH93EZ2BoHEdkHTKBFNZKHWGVavyHDJfBCa581kePpvUTAJgqKCtpFx",
  "key19": "5LUTfZcocJZ5Q2FutukiGmtamns9WY5izhbz1Kf7D3HSiH2XkYGAr9Fy3CSsb5Rzm8CbmE4z1MgBGaQ52N5a4dLL",
  "key20": "2aAY6KPU5qHHRnbQsx8m5aBQc12JUUyHZt4dms2ETsFA7znL282wTvdNBhuwKXmicbZyzdNZz7aaVwys6nHVvpD2",
  "key21": "4DFoqYvujseQG5xDbv1h8mMLxPugd2m1ZcNwQCp3MdW5GL32kkP8CbypfC4YynsDfViYtGggvF4enUvZYA3m7Nyv",
  "key22": "3nBoRJcMt8sYnACiNKQfk7tFbP4dXPgTYQT9tp6MrAbtzLy2ETCYnBBAroATsJBedkKbGEkJj9ZuY9Lj1URKfuv4",
  "key23": "5uo5zi9chmseM4seaiG9c1KMpGnxoHqKSmSK2PQCBeMUfNmH3UyNxHYV2Ez5iJXSZoGnPRmP3tYRLJfEE1RGTHdQ",
  "key24": "2KapugEwttCnZKoSXXErApuv9ic8zzMZTsKMrKn7wchuz6kdDJdCkng2pgepAwwns6cGw8JShKuBRbQtoLCDNvLm",
  "key25": "fM5ruDPmmNhke3qNiSuVgXxw4oRkbAGYCdqQtDm7LWxqdC3rhopGbZxUVFgQZBhAVaDZfzzY1Yoq9B5vQHrEDsV",
  "key26": "56k3gnXWvQ72iG9ExPtWTWPZdm84jcQXYQmJmFUQA3vTFUkLSavFju1VNotrKZupPmeusewZGxDRYX7QHiyiSFWL",
  "key27": "2vWFifNn1k4cFFv8JhGNWxsdqnoKiXMrdVTq7DMEbtYajK47ksM3W83EyTgrMk1o9bTHkkYqSpB3pPrnQ87MXPG4",
  "key28": "4uvxRYkTJRD4moMahRKmaeKnBZgPKdQkKzWipzBMdRZDK7S4xRpniv9YwFA55qwmykfDcuX84gKKzpzn4zug4N3u",
  "key29": "4NBrE2ufKY1uSscU9uRLoRGPDTUv9WH7iQcXxWxD4QEFv8Cy3m6q2DHqXsxD33PPWACvHRBJwWHiys1GAUkB95sk",
  "key30": "3NV82eP5HMcpZ6XSHxsbyMKpdNaSdFENir5eqdmwMy5fRupSr7Tk6F9vioqd3fvUmdRxZQvGNWvRjngmQf4n6K1T",
  "key31": "218tCn4tGXhhZCubs1mfJ4SfrGzoY3LQKbYDQz8pRLNQqGh47cnWz5RsU5U1b8bzJS1oGoAb1KN9W6w4KvfW9z9t",
  "key32": "QYpiJxWpEALjthqrfv74eN7fP9czF7mqpM9UjvSacpQqSHzTESooaKJjKkhKdJfo5rzGokCMKNdUK7wRorXCtSL",
  "key33": "4k1zc9kbBhcYocMukwbDdPDR7SBW8ihAWFcTx58X1iZGHFVguJsTNhmMsJm1znhdNLF5nZAWp83vkGanLi8pVEG3",
  "key34": "63CvSTtZ1tyAcvuA3dEktGbpNJBkUpmbVuKb8wSLPNbjK8F1HZaaiehR9Bk7F1rJvx3xigGzgtZFPRmc4pTZPiSZ",
  "key35": "3kPAQzcMqS2LwjyVrDQKGM8i8CkSZox7U9ZmsevabtQ5dnnNSEWzH6tEXJY4YN5MhwWjJrBTW5pDPoSQDpMAs9Gv",
  "key36": "3woFLi6HJaqUQt2UyKSepzro3LNx55gZnre2LjtUGfe1uRcx9Xtsfx7B4oYpM76ZPzwbvAnCLbYkwjeD7fm2BGJ4",
  "key37": "5EPNDwgUGP9WG6VrWc5zKz3ShG24aE4sE46nia5k7qCL1zrMAHCxDgznoUWAh69xuHdhG7tHRjw846z7T4CuTbMz",
  "key38": "2eWYAZ8Fyxk9e39i8JGJ9cLXF98oWq64HZWzS92YprACoaNATKbdY2M9QaoFKggoWx95Xi1g4NZDkPF95AVzdDRY",
  "key39": "VJgxGqxqRbZLr3gHbikALcu1f3c9AYXi6hWikx5cVAVgffCYve4fMu1zBBe3WjHB666kBSqmi3FqTTnEgaEBVA4",
  "key40": "5yuiMkw2CGd2JtADxT3qFzfB248gS8a4f1puugi6nkc4RaUbLbscp8fnnmqCGoJ5Baoa3pDkX9zn4oHHjnwFKGkM",
  "key41": "3bGSzVqw4JnoLESGehdQrLAFZWesSUuo6XF8PXhkSAj9BFksdnsZJEmXGNJv3zGNRwd5qaZFdTb294JCBpycRgEA",
  "key42": "3Nw3Gyme5k4tacADLSHRy4gBMGNtMwrrd7gyYQKtkeVKvGpz2ZAF8L79cDjetN3iZTkLbQX9hJwN48EVSTCnFNSS"
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
