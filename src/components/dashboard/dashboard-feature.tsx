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
    "2srrR3yEky5hviwEvXt7ceKesFTtwGS1tPzYiS1cxtRrqHt5VFYFJ5yeFb87Fo3G1RfuHcoM52kLKvUxLDUnmUSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s82mAHS5YLnn4BVpLGampmU2JNBSVAAB1q9kfgC7JQ8aNADeotisxoWnvYh6E2CE9HnNTwS2wHyF7nYMibuuN4h",
  "key1": "4ARc2mLv6QugWhPmbdK1aSdo85bxK7uAWiphapP1rKXdqF17JahC179rgiNfc52NqYrmDp3btxf3DFdaxdrR7HYr",
  "key2": "3txGrhpQTupudp9GstnwoiKefqUuqjfoBgj26Pw7EB4dTCkZpJGkuCB9reprmmD5pxBPMTKTpf8hLtgfwE4V8NzU",
  "key3": "2xNcLVXDJEsMQadP8uxPonAuujHsxotxJSWLxkhCf2mid2rtFwiBFsiE7mbqP3uqLmaYif65pLkUc8iPxAM5teZu",
  "key4": "2DCivnVXNBYdbVdgQPJ8QNyvUUjTg1xyi9N12ML1cFZ9cYHx5jtn6XxkUkZwbDXTGgSicebHfV8TMNrgg3RBseJ5",
  "key5": "5nG5gmr7CMWUiVGLgSN8pDg26q3bjj98LGJveEWD9e8TyvhcUXfRpZbicQzouvB3cxHN3jV3qQ5q5MsvsjVVgNiq",
  "key6": "3Z1ZrK8fYKtYpTP5hrnSYg3fwzPMgDCUnbx6wukQM8Wr8kHr7AtkUVtaRZzcZ4hwo2YC9ZZJ1sbk515oRzPCgmVA",
  "key7": "2LqK1os2AceGPjuBqx6RkNka3C9AXkxeuM2SmUfJqX62tQtrHiAhtm7vPnNNkkSuyN9ktCdhxbab8ZZe3NkdRcAi",
  "key8": "3UeWGT98g8in6W1ca5XtmeZT6FMW7SJnhr3JcxPdLoDCpU9EmTRv9vPs5oAz8Tzogn3heamETiq4VcVJZ3r4w9fx",
  "key9": "5JipbcsNiDFQAG9ea3tvULSCmgs4vccSL8geoMdKKNtgCdGUhKWJhp4LmYBjqscVpPCiZB7RCo1vwVgBNH2TWCxE",
  "key10": "3pPsrN2fjHBw8ME3LgXLbBP7BVYV9Nyd62G3gUPxenRCvgTWs4KE5w6CiCirzqqMrceYe1MaNbZo5EVUj71MuD3G",
  "key11": "5EDmq16fPfacRTikkS42WLW1LWyxR9dsZJdexssJDxB5983WBrfQjQ2io71gLnsSicc7PdNespS3fYMdgzcL5cer",
  "key12": "3vWh6SvFFoZqcZdZ8gfejc44EN4dK7JY6GELLz8bW12qU1ZzAP88e26H6aQ6rDr1W1pdJ7iiErtzN5VR2eaCxNkF",
  "key13": "4ccNoxDQVmCnwEdxBiSgkS7gfPp5y1DsUk6t3rumdMuJbYezWJKbZrb65UaMszEPkfknxEYXV1Ang6fu3agSq2iD",
  "key14": "4hPAZZuMyiuMTDNYjE5HWGUXs6K5mfobXNXuXimAUuZEdCJkBMu9CyTqR8sqh5b2ev4Bj2ra4igt7vDKTKoyK9Z5",
  "key15": "3PEQog8nwsPc3jHhoweaccoRin1rwuUSkDNs8mimttRTN7xZQXLZ8XnVpwELc7s6Z3kPqiku3zBs5VMraNHP7cFE",
  "key16": "CxDcuN5k5D81Shrox3xi4bLjEkQ9xtjGBRapjg3zKN3PsZxR7d2oN2s6ZMbbR2PWLikEhiDo9pk5K9kn7nd8RkW",
  "key17": "3FppVLY6DhLNzRCF4PNLVD6G5BgXTp1Uf3NUFdh7c42UUftMiodJqL2MjmxPKJZpK3RG3bVeyMzr3xS9To5wLoL5",
  "key18": "29HWP69qGSUeT7QfqYjh8KzCpeLN7dx7vuQYZFtTKvjAzRqFKd5HouTt3yRaK7ToatPPvmquZLmFCSRVmsVHWqfX",
  "key19": "5Gxe25JwGXCnt3DUjRiXxrZJfawud1DpzWkHyxdY7WTxaddzfTGhGiVfk1cF9De4dJLf6KpmxrDw1MY5HE6ZJaDM",
  "key20": "3KeVeqYkZX9xsYphqcw1KuCSPs5YJR9kXz5UMiZu2vJM3wYNG1d3qFt5KCPCH3iiu9C2xPVa8QP7fRt3HRp7jMyP",
  "key21": "54k4d8ebs9PKzt3YBrPuAzbLxmx8JvQj5EfrkjA4goiew1aZTEEBqEHLXSkxhRKhuyrJZgu9cko4fVojJ3EvMEpQ",
  "key22": "5RKyKRZz3dujbFMeP5NqgWBhnhF7eKrxNEfSR8NJDzVoqoQD9ra1Qn6o49T7pi1d9nH5FjXxgmHAA9Ptk71xRweY",
  "key23": "3bZkht1SZZeYKMSHr6SZW2ymMT4AW64X2LNvNFxv1FNS3oiJXyPEmsCLXLVqPDT4cX1tzRgei65AJjWKvQJZ2xjJ",
  "key24": "5iEWxFxmcEeDZyTigviVRzweD7BK3HCGdFJXULAcUJZjdtYTBHkPYtCr4yexyTsrtbSFLQtT5L4NBZYDxwVwXkqz",
  "key25": "3ohpjbnFp3xvgmvy9o7kBUcGedTCiwNvo6JTdfhAvPPxMeRpwcZSYCRAxNxRUNXeeDfobphRKLCpq8SATAGj9vS7",
  "key26": "2RCKQmCT4b2uaTqJGZTX7SBDQH9qJvirfZR1GiNWxd3xn6eK2wtstxU3UKFZqgghN12CHVSi7bL7RtY2mgcreD8N",
  "key27": "3VSFWHLQG4LSyuLMkpXg9thK5vpGeB4VKjJmqV1Wk7RCAQuwfmmhbEigTZSCgCAHwzTmwak9U5zgqk8WbQYwGotD",
  "key28": "9oBpkDJCCrBS37EsvU2jeZWTskioi9NndfpjhHxicyuVwC2NuUWdyPfFriq7nbaCG3ozCLeU6kpFHYkurhBGVTM",
  "key29": "LYJP6D8yQAJPDUDDpGV4QYAZrLaTfKp3bpF9Dq2Sr7BzDDaP8ZSgAAPi5oWAq26dkpUqBnPSe5BWGvsJdWwkD8P",
  "key30": "3addF8d28sbX33cGeZwfahHY8P6H7gxTDQ1NjWsNcrxcVmpAJ73N6eLVZVdskf4wsA37YepbSYHQTP7a3Z7d32o1",
  "key31": "5PMqsgA2YTgCoxDS721Dyj6VNW9htsGSMkP73uHuNtSCzF5ZsTSZ5jgAjbpNN1Brkiy5gSbL3vt8om6f3wxo62C2",
  "key32": "4LDnafpXWUmiswSbShTFcDCTqw4699kbrJ1nZLZQRDn3LK7yYNKvtu5g4xiEVrxn4e5UwuY3zsCdzP71vXHFdZeE",
  "key33": "4W2Cmi59qwGK5EcUzKbJJ2sReeRU4sAvZVGmvpGk9phY7odTt4PHg2DNUtWn57fvH1duo4wUCUnMTv72RANm8p9z",
  "key34": "3uQPVREf12bddcY8RbEaSCeXQD8UsMtHTz7MmFBkn6m1hDPtqdwBAQ7c1mxPRXd3m2AAmUN9vPoZJRB8aCs4UgXn"
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
