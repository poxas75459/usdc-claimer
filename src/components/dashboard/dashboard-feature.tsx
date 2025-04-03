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
    "WxGKzhuEGv8ZUxSMQHZCPoVooJoqpy6PcXvSZMpXBnju5GGEndwhd9XCg7JNAcvAkCLamcyCCtatP8YhgqA9e9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6BQZk6prxHbEsQ6xtVzakhgjRxg596CXmYZW4eeNpp3vdRAMepDxda7DDe3AUPUJuYiuuGu2XFSQN2CZpJPfv8",
  "key1": "366A6gVAR7sN7sPzBKdsjwhFC7Gi6RHt5BpoZmw28mfLHXwtXpWLyD98UMGSgUZpsGfT4FvumUXGuUm1Qydk1WFD",
  "key2": "2o9DpcniamwvAPLqLzGtGfQJ1tXX2gNfrho5KxFPD4RaNrsJYv7sCFq5Rx81hKL3TzVCNEpd384XFvzm7PnAsPRL",
  "key3": "ZSs7mRiixWX4GSfWTWyULUn7rBaAtFwPuWEw6HX4ti7ztzmFMHA5WQZeEoTg3tqG8HDEtJV9MMmdermYMjFABxY",
  "key4": "4FCmCdp8BzTssNxPpJ8E53SsdJT8SHaWBL7H7jtjvHtZsNzrFpv6KsHpq1tdGSAgqkMKKpEHavgfs349DwUCxhpJ",
  "key5": "56eG9gEbbEZBz9v3oCzaQYVe4XM9MSfgHyv7W5c96W6F8JGkgYXuzS9qgTXB6bovFoN3CBKJp8mXfpBVAG5jUQAZ",
  "key6": "26cJy8UbYVjXZwceq9GpffLX6KG5DUXn2oxcyBYEBunJLgtthRFqU8fcmLrbNi5vWGUcaf7SKjCvCajyH7Utb22p",
  "key7": "QFVMfjMWvTdPBWk7mBguXRrQT2wruszUpSSwG6enrCrge6NCrMSkBsX7SnPArTEgEsBqCoAmCkmxS9iKVH7AsWE",
  "key8": "4omfEW6XnLwoJx4jKqGmKTdRTy7fggAKRtRcvCvrdQVZzudDqB2qJSP2ttvh5NMWxoy78rktceFQjPuqA5t224S",
  "key9": "4MVhp54AVnq4YyhhitbXut8avvc9jZedktFYuXrbioE3awy8p3QEunYipzkzeeUvweTXaoqkjAFv1ZghiWiaUbc5",
  "key10": "41VSAP9PYoog3r2yS3pLTKyubHq1RpXhFt64k66Qp1cPXuunCJGmKP51o2VeG22GB51u8eSQMfdh7rEwUzAcaMBc",
  "key11": "5tHnsGkduE9H1bCu3bWzK2YyN3VtLGZJJaCZLZWTZC5kmTvSV4ZCgwrSyrTCdVXnxEcbUsmdXsYExKLYAPGBXQEn",
  "key12": "67AxG5ZEuWr7nQavknp7vCXzvxbSe82nfVPQkvx7z1KYYMixhJjoEVybuJQhoSc2JPN9Sb8e9QYE4qkXaTcWeNcB",
  "key13": "4LM78J9b5vs2LRpo1dvV28DuiKcqDn2nYYBiq87CwFM6EYCqct7d2ZFeiPn2xQBqxXgkBFKcQcGad5ZqNX3P2L6g",
  "key14": "37Xj6p6s7E8Tc65FbxHEPbFAWVYMj6jLbKrxagno2Sc81fHJXL8wowSfN7z7y1p7pCZENpZjLbSfrCvEMJ7by1aV",
  "key15": "35iZS5ppm1AaEUZBkHcH8qzeT7TZY1RxAaPto1jmiqEPEdvPSh6nQusLxmHpH5MAk3rRS7CBuyR6rUfn6KwNPv59",
  "key16": "3wDpmxpmE8bgZKJAuDTeuQNhHtDQEdUcduss1n22oJcdwapvhktH3ZhjAh3ZF5CXxtBUwJ4uvtgm1pMmnNTYkYZx",
  "key17": "5N5szhN5iwjMGdBBB7WewvmYLUjxKLbvq9iag9D1PqDE6hnviBbz5JsNbhtAqiFVBXfYfXrCcjE69v86wfRrY43R",
  "key18": "5aTnWdLj3LJ4zCDNzRkRnm8hktYrj9DthGMdbEwg9CiieHb3qHgFdJRAVCxyq5QTJNJi5Pcf4iWcqHBHCv51aQXM",
  "key19": "4HBpAgcC4zbzghAbc1refBep4MJsY7HCsvtYDQx8YS1iNhGAAjseVS3PGZvAsbiXZrJSHbRaiprHT1CA7M22sRhH",
  "key20": "23Uh3omarsUXvMZoUHG4AK8oDTW15e7xQnayh9s8w3yFxcVX5s34bkvtdX7YvtFfYC2Nt1eWBbULZa3uQzqV8puS",
  "key21": "3Hc24QHuUqbzP7R4vsx6UV7t7sWCSqZwAb5VTmEQ4tEGwAPR8Y1GoQNdfRs1iygaN6gLsuKL8xgw4fzYNFdPVmd5",
  "key22": "DLDQSmXYp5fXZUU1Tgg43rcHWKjprZpSBhxbNwhDBuqBxEodxE4eZdwNRm7uAxQurcAtpQstNoW1PkfyVCq7MRZ",
  "key23": "2JkRwuYttvxaYsofLzCsU3tiZPCH1AsLEeskzc8eJXeBRqy6ngdeWH1vb5Q4q9TW8aKF2hvxPzP3x9GhL84N863D",
  "key24": "4uCLRUJNr4t9qiJzE37A2uWygjbXawQ2Wq62n1Mur2yZ83yqqCaBgupKMKHFQqtL15ypZTt21XpED7gnthSaLGSo",
  "key25": "5TFDrjRsRahGdKwXMuSu2EbCkvMuPrS6HFY4wmvtWgsz8fA512goSVZTC7ub2jDZA6UuZjWSaf3uwu5Y39ufidvC",
  "key26": "2HUyUmNxNUCBwjuj9jJRNeGCajqgPfWeGt2TD71p2q78okkeqB6iDpU2T4kS63P8qx6CuyrbAAYMinXShe6KvHZV",
  "key27": "3dhvaa1hPRmXP3bgZeQF8bchY2rvhjS3suFwnfev4grdbJshS9ooGJo8uzvfzWJ6ZfGPgUmdggepUcP3rNBYcH8E",
  "key28": "PRMCHTzoJTuNgtaj2ECx8QXXES3hAw87FXMqzdVwDq7p5t1FEpHzAoQBDmKxhh8qp4BwkkvpqwxU8SpBxEQBCv6",
  "key29": "2kSvPfHK3HZ43qaDr5FPxBoZ9gBBRwfey8aBCXQ5EF7gUj2j679peLHZ9pjYt8jM3h1KeaEY9RoyL3LYCdz969Ve",
  "key30": "4H6nDUnvPMgyNaDFstHM9UkbmnnCQ6o5vnkjNZj77j2CSFDeZvLtypiakuNdXCkGReoSsdgzCEcsghdt8n5PzYko",
  "key31": "2NTX7ouaFcewHiNNSfpoyfehRDhsiTbJUaPhanFAuVp34CRFn7HoYRn9kNciAw72ZimcsodFBg14Yn2WNX98j67g",
  "key32": "4wgEo4ZKiiwBJMa3i7U966xAjrEtH9CmV2X4dsifz7Xkn17btFedUMcaWM3JYfJ9HBac2Dmt8Dv2k5Ryq8dghN9y",
  "key33": "2LhRG3znqqR88WbuEMCP1xH9bs4v4kKtmjXX64wfbe2cY4SqmHNcv7q9GCRtxuKWDGVwAuvzDxj1DJfMZejhTGGv"
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
