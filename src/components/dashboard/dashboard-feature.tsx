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
    "5zE211ccEgbjJMGpyFutqMnjzbgbatVyHXRqATN8CwamBeNNRP7uoLDb2ESaSBeehTMWJyy5CXRU9iidbgqnD7mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tkcFX2yuF9J1hpCighiJydDHwkGUQmqdLk6ktqzhR4TKAvKmxE6cYnURq2vP3BtFBVTdLDSvnpQRgvEi9fSttq",
  "key1": "4My1XzUzYcpHN7dp9rdRhf4G1JA8d6hakoFYZzrjJmBTRkXJCcp8W3dHq7ddnPbosSNjmkBqEF6Grh6JAYg1BrMi",
  "key2": "42jUonM5WWWaaGZEgu4PHiH2KJxrGNHqaxXpV2jP326HY2LTgrQRFzRkzMQLQFmoD6S1tmj3oKXmZfb9gumA5K2b",
  "key3": "4k6MtttL7d7J284ByugHTz5YdD7WWccmaAhug9WwkFeqbZKWuqHNpxtR1K5nXjxs3kyHgyPTNMQFavw1gQfy6js8",
  "key4": "41BeQn7uqtFSAAfBXa3idyMkHXqowQpt5Cg5i4uEzzY6qHxs3rMqcyvPoJCuX3ftzi8R9AUdgkVMb6uUwzt9Lio4",
  "key5": "4ecHpNrJ85wZZq8EoB18bPvLuP9QqRQeyiCqRyeBgDycmQZ8sVvF2nAg7Fz5onvoxQjWpvna2z9sRsdtxqRhZ347",
  "key6": "35xTNRfCZEvNeqc7gHRMCmprXxfqwnijSKUhxvHZAS8QBLr6UCBwWetcPRDFMr6zrFH3QG39fTRdFFTp3mbUhCBD",
  "key7": "4EhfjDy4gVavUPmncSJHACngbeMZGBz62ZTHBcj4KndHgyvqsV3bJSzw1ZPrbrgmvFtVDuXUCbghTN4aU2ZjqGBw",
  "key8": "64Sbowp5cTmTUthibY7YFk7vYyZH1ABphMzmwYVpt11s1PhtG5hHrSB6RNEjahWxce46arNDtF57DG7EynBaFRK5",
  "key9": "2ptGL1vwsyDJ2XK86Vduv6tMmHJQhqVMMEWU9Re1PVoT4CTSAqg2wE1tu3tZJZ5c26tQbLXRgbBKfENKBdKpCUTb",
  "key10": "vKWucBrrpBdPqvwiS9GdEnxEhn4u3c8k5kbXQRDMmCdTw4LUHCAYEHoHtz4cNeScFhc3ntwz31zXmq9VM2yDDo8",
  "key11": "pkpnNQ4eukvU3r8ayMawzhJyRcQWtAC8yHTzvKBvTw6GsnnUSVWs9hAZN46rWCDkvakhYtnaiM7Gh5TFXhNeMTX",
  "key12": "3yKNSvAyzZRsdqhHtKDuiWhsHpjACAbFaVXew1BeFSBwSvizR3Ue4Sa5K2MCYHP5EqvsTs5yRxFnYEsPG1TUQXnw",
  "key13": "2Fu61BvznKcpmk6jzcURgZ4ww9hmoUkQp3yaxCP6QK7DDttqToMYAFjowh4ijtm3B3qnRv5kx9KaXn1UxJzn526R",
  "key14": "3yrqhhGpGtg4fD2fRupXn5GdFcVFsxm5U9BFP5txgMqJMunSRNjo5MKZs469pNRV9cmjfa9FakwBRYF2ZYGippau",
  "key15": "2XhT4Z2nF1g7gQvQ9BA6KQW31a1u5uQTiZAaXziX1FrZ3GoXNBoTFDxdHBb3UYwfCXRjmK62DVzyzxa35U6hkeG9",
  "key16": "5QTurfuexd5rVnAmcDALuZZGSFHxdVcL9xVPVnjK4eoUAaj8JfUH5E2DzmiAYsFX2QAQQju5UcvsbTEkbxKYG6xf",
  "key17": "4CbdvxJKdUBRoNn6BXhof2tR4fvUgbEwqQv3WA68Whnk9B7NHrA8Nw9VUtydiGj7LuKsAkVX7TPhyuwHnEiaXUx",
  "key18": "ngr8a6Tjf26tv8G1me8hxjpiPFKRYUqaSSS1fmiFvwiTPeC83rzFhZnq2CxqkzbR3gHT3W7mY7diriFBb2Du2nd",
  "key19": "2owVQqL7RqFzQhanx5KHuLCpWUUzhHzjG7r7FD5crNh7UxFbitsRWNKEqPyvGJq42tzLRconxvcNXsE5fnwjvc8N",
  "key20": "5x2kVdNN2hXASVRJuL2jifB84fZSnmixoXEnpH2nzH5E7EvvzfpfkZACqcjp5PsbQiBkydtSAw3NYo9MGzhfsHjb",
  "key21": "3WBQbt1KNYEwaXsVAjWY3yJcFmEEx1j6UUQyYxLHQHuizcmGnR2uQba79sTsmtzPcjhgzE5NK4RGfXvqCsHZYQDh",
  "key22": "Rca3tiNSYyBwS3KYbU6Nqm6NKrSqw1u2WcfaCBw9v9mEt4JfehcjFXnEvwBPtEbXi9z84WvSkePivNuwWtLDHYt",
  "key23": "3AVahe5XN6j5DzicidgKX2SBGHvgetGDwM7Aob9Ku4G1yL2HMPfUbQ8x5jv2pCExUx6JQTCKVAWdPy5rgUxKQ5uT",
  "key24": "JariCRgyVQLLZQAQAbi3J9DP1177b62ffx3Q4Q2YvkzkqPZgt5UjnTvREBJCRhVZC7mFwt3EzrmiHuZT18YcySw",
  "key25": "hP1NUMjehbaSfDSHsp5StbfATXE9Q2YLCVJCkGhdDWBDGvT1r3oYgxo9WWx6hjyPTV2YFuDEbBrDq8KFLTCGcec",
  "key26": "317ea5PtWJKg2YZJ8SSwCGLHT2886UzBWooQNhKJ3hTPgs5FE7PSnh3bgmpH7SogakuFfcffGFVVZN3WiaY5fUPH",
  "key27": "4GXUi3qNsQJS5Np6fw5RwSeatjUUTPzc4CeRon6z5RWnbBdz4NihoAmeXmbVKV6ps7kmSWiXDNANYJh6UDjxXMz8",
  "key28": "5tzZBGWag87VNHC3aHFznBV8YJbcomFCpf6yCGwxjmg28Vj9ZT9dmvPzy8Gua2FjyBFkKJvrgMezwJHynhavFFeV",
  "key29": "yYVyg467mVJas5eYYc8EC4fiMmnaP8FRjDzRkT4Gzj1M3EMAA4iRUzUKXMsUih6hfG9LP8E83i67sP66hQaQvDc",
  "key30": "5TeUjfC2bfvkU9h7AJpPM9LqsPzYX3uvcztW5xfwPYQGKc1qStKbuFLnZX6dZtt6uqi71wDGGwhQpac4f8GTH1J7",
  "key31": "2U619SmE7HUQHQ4VgmUkB3EfFgFjkRLQtsqExiw5XsGC8xzKxDjV5yr4rEWfprDvQuPfdJ4FPVeyPGgChUmj4u5S"
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
