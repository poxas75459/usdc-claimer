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
    "3Y2ZdmGdoWESVEdRvN4umstMKpicEAyVT7ce6gRS69p6zGANsmzhNH8RcGENZqeph1M6TAmwzTZriq2iQDTgkHaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bngNdgBmTCi9s1kXWxjKzyAFMnDqNTHiTkdLmWgEvcPJaWiVhpBNAeAqrwkdQkMTswjV6LBdByupjD5px6bm5oh",
  "key1": "3j1mzikT2yzSYsBtKzUr3ih7NjxnV9aHnvRxgJt5U8SxBrmbnqvJaDA5KLf1iTj7BFJuwp12idrmVogY96xuwVqG",
  "key2": "2MaAQyMCbEqd6rjxHyG4mpn5EjXDmZ5gK58MnWjDq1tsUy92U4beiLaWPwhsgeqFfN7hhaqqWnemPZRaSDnejX4Y",
  "key3": "32S5HDoxQFLCzyY3FbmnswdZEnoYHdnGjZkucgDEqrjMgRtSdhZ8jvMYNcTJuRrUF56ppuRQg8GPQ3W8si5bm2hw",
  "key4": "2Lyx9X3bBoP5535iV5Lwz53QCvX5Gjd3Mt11NWh6QJRcPQx5ipQELYnTbVgUgUuDnTDaZcTg64PooWXfzRKFetiE",
  "key5": "4hpVvWhkS9U4LvSA98MxSVLg2LMv9mpwPZUgkNZzY5Kq9DW2R6eDJ5T6pwdk6ZCzwgp1kPrLWR7m58TWRPFXcrsd",
  "key6": "3n8VKmJJTdKJqwFt1ev11ze9GRuoWTDJNuApieXGPWXnzojDXPg8UqaC6iSnCyWzxy1mfUURdGq7wzzmkdUXMm8F",
  "key7": "4pnseeg468ZXGPL2twRtRg6oVKD1Wku7cavbcz2U1BRcTDqjK4vHM59HkGsYhZAhtiJeCgHm6Eakk4VBhQ76Q8Yo",
  "key8": "5oYWUf9DMT91XJ8p1RuwUanXWYsrKG8pqHR3qbcHqF5Vu16dQsfytt8e2hXdhFHVaviUrjUF7HA5CukLqfmxFQjm",
  "key9": "3RyLSwpWAGpWqMkCS2KTKnPD1h9BHhwJwmmSUrdzKFxF4s1xRnfq46W2Va6hwctCaoXNeQ6ZAxrf5PU1PrJv9U9T",
  "key10": "4yY3SBvqaC1FPrnQcKNtAzsUK6MRxLivZ8BhCEoPqzT2iUyRAJUPSfqG42wk4K7dtkDAKvz4P4pSAxBRD6ce5KPj",
  "key11": "39jcc48oXbvozC2pEGKZMBXYFmZkvyev6nNGx7yxm6H6FR4xMSunogAPQkio8UoM9jcmrp5m7DHdNib9GJQfBLY3",
  "key12": "JZG2Xhn76MzniiTJ9uL2CEvtte2AM2yf3UB2FULMzVYsqM2P23dNhyCZP85VykJ21mmtNG5LEbkidBdKekafKiT",
  "key13": "NkZjJnowaPXWfp8faMT6fY1WiFA998etHY4SYTYTYborbEykqrUMVKsyLEZcZWnR2KUyHYqw6d4MjwfTgWeV2Qx",
  "key14": "BbJVgjUjwq5dMzwo1vfENCv5DPTYUjYcuWwz8S3hGMuHUCyd52TJjUTxX2wkjMscDRu4GYZsgHEozK7FQszvM7m",
  "key15": "Uyz85ds1p8u4AhGqeYBAD2mEB98vqr6cAKpScsKWdUxiXCkHAPaZHYSfaPfWfASEQJNj22DmP8ALN7fND7khxpG",
  "key16": "2NSduAJrpnqCEoehn5S1XYYvEKr4d5pjLuzijP7rfXajABRXqytmZ7moxv5FnwuMcaVgfeJKC9UbyDhikXL8wBhg",
  "key17": "5Dqd7VbYforgkkUdQQpSFjvgqj3WVbKV7rybbHkx6fhdNZRrpdjHr9pyDgbeMVUccLzwq3YRmKZXBHxHXfAgfsG6",
  "key18": "3RREY9dASXt1Vs3oUENyhVnizLPq8noBMoNnELyeiGn1SYJtV4RYdvFt6AFLGyCpUJFTw76wCrhSXi5pXnp7qCLF",
  "key19": "3gPR2MDuJLPLR3K4xMPJdvUbWEBahz9c36cPKC7rqPAq5T9bhST2Uo9r7m1EigE5JeYBcDSd4xmSn9seG41KKUQr",
  "key20": "uCGH7E45DyEVnjvnBiW1w18PtKAdpgPLY7H95fsoxduzaSkuxe7EzvvvdPdpCSQbnSYENEHffLKZYb8wei7ekL7",
  "key21": "3ZdswVVBvmbmHmFQAUYSAC4mBc8zHC1a7yaNBxzkpvHuhC6gVjFXMYMWqyqR1RJ3BPqc9sC8HcRwCWhx5YGcWvY",
  "key22": "2nbGzTJjrfW1WViCZghZKM3wmehLrzjkGMgJ4AEPv9koWzhg6GjgBnsPWHDv1NG4JDn7QpkyUbvmUHFxc5QeTexM",
  "key23": "2bXwuqaiVRe7cEPRBfap6qfNhev4Ubf6bMtUqDK1Sx826bnKfZnQVuLctZakXzn8uxEPi5Uuv2koSP5mUpZzCTah",
  "key24": "5QAv5cmsntKN3TjcDf9Zohdji5hruh8YkcwhMktTxdMdJ7aKNAgwXozLjyDDz5jPxxstT9SmFLYm3ZusDkixk3CK",
  "key25": "26AoyBBLmdwBu9neKPmJacaSAZL4afhjRwtqHwMsp2USATzkNP455Gp7otXLapqtkfrya8kAMJwgBWUAYQHjt5Do"
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
