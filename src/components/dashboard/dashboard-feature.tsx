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
    "5CHmX1Hzg7VHZDs2958RQdJwiLK3cHPgJ9QfP6P5CF9y9mDZ4ag6sW1Q4vGLA3JpxemMM3D3WNbGJAyUbW2LJVL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzqde8uDBFG2s1u42nfe42Zp7bz1dPMoXLuuH3k5ko9h1Ers3d4dhEzXxocVtNV2678yJAMtN3ntGst6Ms9mbB4",
  "key1": "45tNFsvnpJ4J2gd9tJ1nxrchX4582JH6uxU2VABBWCGuFEvJEcW3e7u717v7cUM3AHv4qwzFSxbPFHXHbNYnw7mB",
  "key2": "yhvof6H43Zt6ikUR1RbmcxfQnysu1xsdcRSCdfQ7oZJkVdWBQAtuwYpVPPSgcyBKtPjj5N6VVyvXnDxmp3PmP5v",
  "key3": "2X4hvSZus6jNd6mTG6h11BHeVZavQqT4Kk1DD2HVvNMKWn7kMc3qfytiwY9Q7Q2xG7p69CyPpRnnzcKY2TCAioP8",
  "key4": "41K2q7CPiuaQKv4JLZ6voDx2reiDqvLSHecoozkUPf3PQohZxGsj7oaDLfdEDkCZgpeFue2GAvBFY9NEUjCh5H2j",
  "key5": "38kFaj5zNvmASFDyNdnj2vrEifYnjktQRTWZPUPzZvM3GVGHFhJ5rK3hCJNR4B5N4mz2gLdQdcAoeLuQSCmn46Wn",
  "key6": "vT4L2YJRQhreAgTsDhb2GfN8HN3iUgvrbAT2UbGQmTwfbvRDM7RtF47FkXtFJ9v5xPrznu1gujRjJt4eFE3VhHS",
  "key7": "2XwsaozxMwwVq9fPwwTZRPdAYaHh547Uo3fmdb4XRUNs5ENF99tvmyzqp1zya92nb7jfD2Z25dfhCUajbCrTEepr",
  "key8": "3yrXTv5vmdiKh6UKacf75vwvReLxM7XjHweRbtrhQPtq2TMUrgszrd8NVt6KtVr97v5hbBLkEdVBwFsFfkuyHw26",
  "key9": "KZqc7qiehJGM3wtmqEDW29VSXu7UgvEjAa6nQEeE5juigz1KUEZNxZ6YQfwxeNmR6ZdGYoF9DNr8RbF6i2DefD9",
  "key10": "4oFdZFRRV4cqoY8u7s8j3iEeM71aQKWVRTdmjU8198ogp51i3xLU5jRnTQfjmBsCMRCBej3dvfETNTm9WVhXqbpn",
  "key11": "9uYvU4TUcCA3K4D7nTDrxFdrnUUBEGcchZx1AMn8EKW7C3rLAewiEKMJkfUXbMFU7FsTfdKo9Ty914VHPthf4Ap",
  "key12": "5pC6vSCmD63TuYJE9k2GN4Q78k7U2514ShWro52hMaz9enbXBaYJZSZ1pbUbdW8sSMHE6XpzhcZBtDUhGCyeMMNG",
  "key13": "5tuCrA7Bpr2zM3mxV8Sbe4V6CaTtmScrn86FNiJPqkwcJDwtP4hcCkokq6D2328RDfGwoBXWccVdfgzZaFQUxNXw",
  "key14": "5GVWeP7hJH1dEk4UtfoDQWzS6NyoBFTKmVDjDnyKwgkTdxBCnkhpVnyCZdAipMMfSF6L9xhLtX2zESDV6dTLZZUJ",
  "key15": "4X7N4akxKfsK9XHxwjzNBDZyTovfoX1qpsHusRdH1tgWPmZBXcK9i8rzoy1CEgL9tGTxLiNA4Qg87vuyVFGGCnVy",
  "key16": "3DZTAa1ppTRy8RfdxqQFcfLoi3JDYL3P5AmEU2YDN7JcW8xyy6aVgXgbgRkYUL7V6QKmtQS95oBvoFUyLhDUu9ES",
  "key17": "B9xxRuYeUPzyVxqPrdStgTjUwvsJTHUMcNAtUWRJwmiTK6XT6yoFBUPwxaztxPn2ZJhYTymSzQbNRbUk9fygqXz",
  "key18": "23J8JUzVTdFtNG6DQvJaNpBEF4BNEEYa54QgrutWDmWgoandRAFYWhE5rdx1wy4Vur2J1txgnQ9XN5GZTxPzw3LZ",
  "key19": "Ki89kwYDYvbsQ4UoYApEySteWEha5L9VSRy7uT3XUnVXxf6gdcpEaNv6RG57d1SGfNUwvHMseBVJjfasQPcrgfH",
  "key20": "2Ya3hoFjdzBW5wrhM8v5ubzLinGyJ1c2qhjMdDWPeHE2JN9Xg5qfnJku3n1UQfNQiA3tFWhMQLMzfDeJP1CGMZLE",
  "key21": "nVtHYZCkLGhuECAjio3vUouwV9cVU1vayYQchyANo56kCvMAfTm3iUiFFGTgxER57mqsw81syGKqqoFyaTdRK84",
  "key22": "5jc1ioH6g3DdVhXToCJVQeZyyn5Vmv9UPruM3jarFaKuVJSQ51KPzqdbGufNTXFU86D9XAv2U8tWp8TUsCtQ8n5T",
  "key23": "aGGw9YcQuzQwkhUbapZZtMscwALNa3iGLrbiCQbHTLvpuoJDTjVPRQg8HorBYixLgjdvq8p5dAK8aUCRHWTHxqz",
  "key24": "5qL3MFvUQcuMn3NyGErdDhNXr5YhiqEKvoirbTgKveih5FhsDrDoUu9UBg41kKbYvfreckAivynrPjCjpsSKDoqa",
  "key25": "2Eje5Mrdzx8HjKxujnsiGdbfx6gHohXVQcLSD1UJhcqgP7anpFZYdKDBcvWFwmntgZXa3H52Z5de6toREEz2aK9c",
  "key26": "5GTYa1v1yfRWkcdEZThzM6rpptQmjny2iwu7y7HTsRPDXDzdmJuL5MVrhBw54zuKsRGFxqYbwsmSe9rXew1oSXUJ",
  "key27": "4x2AKCQMxEm49aQSVWCejmYetePKKF3HPfWprm8jEb2byQUHR67HEjj3cnokRvJWGXuPRYBDWYb8T6e6NfQNoBPn",
  "key28": "67YeW8QtERF4bcrGeTud9TocQW6VEaN9ziGtMuMpHKav7TvCgvzY4YqLAQapjPnV7NDZPsxAmB1RhegjiBmKA8Xv",
  "key29": "2dQwVEbxbE7j2zS9RAZZH1tfy17SNmPDRnpQNRkXyWHZGeULQTPuEnWDdjcJkfL62FDFf9hHSZrK9BKpWxcG44fx",
  "key30": "HmpY5M8DCAtwagBYQUx4tSDdBCR84pUS7E2jzfaqaHzvwpnLWQ2KzHkQRMWM3qHb842AdMowngLt7TJRj9TXeiM",
  "key31": "2e3x4GG5nRc5diDMNcekDawUWV64Jj4jegKteZuTRx1Eouf2GdfmeWhUstxMDdUd5K68hR2e7UhRdFiZshHyKPHQ",
  "key32": "56sajvf1zZ9vytqoRZJoQvavACv3WpumTZ8vGGzbodC2TAwK18638L26XisDoREFePMTKfjEFeYStTepUJkUx4p3",
  "key33": "35jEr1yGrqqSTyURs9Eez8ckjSR3tzanBySJLnAdhAJpY1Jut93mkEVjToUy3cq5RzZpeJW1XryrDNXeBXsiMYji",
  "key34": "3rjy2W6pa6x4HyPgV59drwjLAM91L1BunwidLhcfoihGxmDTsDbdyjM31bWby1LqDe9vMuuBpvg3tG2nt8BJyrLU",
  "key35": "2E1WoKQ4oyRfXv86mRJBA8rbF8zKYXo3YfnX8MnpK338q61pqcbfhqVenCyzR3HmzVKpXoQWHcXvMogpBKoaS1rK",
  "key36": "3oLPzKtAsQh7yNkDeCYG12mRFbTuw8DJQ8TTjT755jsNwoXcLLfPJ127oeuhHdHsSrHR2JMELexPCccs7CGH58bJ",
  "key37": "33Ti7cPdUi9JidouuPVvxv1hxe6Zvvb8LfJKFP8xnFkyNrQ14QojoGrv9uTN1RM5z5feWeyrXK6z6b1cLXJUWeAW",
  "key38": "3USJUJPrhNZh9tsAAsps4USmbuJQYwisUavAEXnwRHoC4KuRRod8R2aDdMtMGakDopYcidbNikTKDzCQapH7y6wF",
  "key39": "tg84tWj8iyxwJaSgexXvPnQCenFjvXeKV8dZ32XWFoxDU7yFAGhdB7SXNnMPpyAc2r1zEAbKFqZAxST59aezw3j"
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
