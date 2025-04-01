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
    "54avRXBQKK6hmFFSkHPhn2Hik6gXBUzB86xZDLsPnQwCqMaSmVURZwc51YtofSokg8HV7xNrBt1gF4NpbqPoALyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vy4MzmF1g9uRDyhwUe6SsFQHGZdUVzcLnR3ocqCrGTxCS985wQALDBB1cmxmsYkHbpFKD11J2CchLMTFZPrS7Y",
  "key1": "3KPtYcWjrPBC7u2RFukLkAKKwGqArjyZwS8E9tFcyR98XaztLVPJz7Dgz8pMoUo9WgE7fRqFmgTiQjPGrbpmXAnS",
  "key2": "4rymo2JpZ7zfKY1bHNmnxxx7GHHJGLVTkBtq2thtfHubeGRauuqYzXu1QHWmMusmtSjutZg3gwAsW2CB1xTbB2Qx",
  "key3": "4nBfgtZxt9B4d67YMaJ96budi9iB7igcNG7t6wiSJBs1y9NHSj8EW74apXnerMHuydG5FkjNCWhj7pKqnYicPPq5",
  "key4": "5g87tLSuQxevzkoW3ftFgEUrEWohFP2q3FuXWt3CzmUZwCjRhq1AMnJgAHZzmy784NqMgsPYZt88CV8LPS6SaBfD",
  "key5": "2PnUK5oD5J6DRvNrGqEs4irbzPTRK7rkEzs5Ec12a163vuxvZf7e3Seeav9krWLqCGmwHASpJHd9tME95G6wb1gK",
  "key6": "4PTHekb5Xzy6epmt9PkbjuM2jMco1bF8u4jQyqU1ZTKrpFU6t51Kf1HvQtTXUTvxjL7KQaf4jX6zq53ZBcwLtXyY",
  "key7": "2GcpKGcefza4tEhbzs2jH69HvuNpy9tnA59YGv1YqXsjBJs75ShdCvvCn6AujMzPz7rc5mKCoP4zRYpEefVLXRBW",
  "key8": "2zLR82S7fwwa7vNn2atGbKsujpaMqWYdpX9mVRa2VMfiyf9mrTnUQbeJNUWHUtk6sz72vhYEJrZZnu6fnY2mPtFg",
  "key9": "4ohmRKm3Ri4ap6Mza6LcqdhDKw6Gbf5nvWNcZzMhykdWfiyu5iyqM92kWZMYuc4B6v2EKYxFQE7qdSGknueupDuV",
  "key10": "2hGgPtZc2FMNtbTp4v5JUC8c4L6JszRUbpvmbwcjZLkyZMuXSZhbFi9U692jB5nsGPSNt3ytfLTAhsWvRgPaY1q5",
  "key11": "3cRfRiB5RUpq7EM8gSRKS8eZUiuweMqqaZzkY7p2Pv8qsmL5NfEXfT8geoqDbf9XYueauTKuvnLJkti6cxKqsbBG",
  "key12": "43xdRMQFpbCpXSXcJ9UVqwUYFWKnxFae5RQn7wPChLxfYcMNMoRQGFpfCgXf7Brf52GnW43AqXA5KD9vxrM8bDGr",
  "key13": "3s7J5Vi6CYG5e3ieZXVwHt39mBZY5CyAn9cbhBdcf166VKx3nFtEb1F6p4NWGQJbiPFXx9Xecb1L4AnTJZHhLw5o",
  "key14": "CwcpKjehBruhoUc2jwro3jw5vmboXYYvAWNB66746saHA7o3UHQ9ymPeXQPMgSU4oweq6Qu2hiUzz2UiLQcjMtp",
  "key15": "4yn68SMvFajNBmVpZ429yzxLnCjSoQcRGHJwTrouCG4qBn6jg9zRwDjsbx2yQzwc1bft5xP8tStVMr8LU9jRhJ7g",
  "key16": "4iB6GZKtU2WnMDoKtic6KSXzrGUNXGo1zzinkec3YLBN5fufwFVTvDXo28Vzf8gwJ6VVerk5bueE3WZv3pz9HUfF",
  "key17": "21Si5MG8SNVoBc7wBcR6EsgG8NcdRCLkkcmbk8KbUn9gnLHrkpd1Bt6vrrJWmj64n8nNVYb3jbZ7GiunVpJdynwv",
  "key18": "5XFdFgzzc9CApduwx7JfCwv3qrgka83dJoPamkaNwiKvCiktid1gvi8dxoEHjdvEuALMhkCjJG1pvVd9Udv63uzF",
  "key19": "449CJJjm41fQf9TnymXLgx7XaM2Q5A2uPxVVSSUDqE993G6Htry1rWUekh4ePk1LErC6xU7SETfXWDD5MSNoFEdQ",
  "key20": "2eoofjozfep1w1Htd8CL1dg8mfqw3wwzsgfjHtpA2rakhLNuP3gUJ8yxYYTyNGHY9AQ7E8tY7YjGTTjNjny4iQ5e",
  "key21": "26FG36h3xehwNBjM78yzmp2N2Vy51XdadgQ4uerzttPoq1bko3SnqCQ5P4smSWwMRZLFKWBVDzXSAGGMdJGdiRnz",
  "key22": "5dfcDHo45zRGnzUA2fcDsiKbqMp3QTdiFWwRdABn9CD885XSRYwWf5GmPFkcuL8jB9qBZVSnQ7WZ4gBHm1Bf5ZmB",
  "key23": "MZpUikbcAGqjgGZoNCrE8ofgkjDemTMtMMXa7yniFK8jNjEWxd2NeJtphoButQsh8kPn7Cv8Ds5bC6YVTMMA46k",
  "key24": "3cJEenDJFyXSqxK5Bp6S8PrXRJFohDFu5mbMuh1eHjqs7Q1RmMRzSBtSgqsXfv3VT1vA8H5cYb4YnkgrDUfaczb3"
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
