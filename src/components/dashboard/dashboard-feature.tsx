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
    "4DqW3cDqtPFnuDCWFCwjPGA6qAZKxZdZbwv1g1Hy5yPsJsMnUvAvovjAYRHZVJmtQSceTDu9xUEgbWYvkRjNZ6f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVC7PsH7jqucpz9J5ovGsiaSjUxGi88cSgo7f44jixtHZtixNRBMLjv6cMogeX52N3UzyFdTXjLTXfVhunGtmcf",
  "key1": "3gaqAGWMEFS7rWGB4eyo75CHwH48wSjb87o3n2u1VSArr1k4oTBKdWui17o9tQidcoYmWMqsv53KkgH4UrG4BCmR",
  "key2": "62qMXevar5zk7oThM3d7CgrvWk343MBsGKUv2CRaa5atQPkGipTdvyUkKPyiTJuCfxJF11cRcJ8xr4kzeGQuMWJa",
  "key3": "fDJST6D3zwwq2f6tSPHm88FYaL2wGzXTZQVsPVZ9XhT37UGDU6GTp3JgbWGZYQftfj1bk2uUc8CHkh97KSqQCNz",
  "key4": "4U4AkfpH9sfxf1sxLgBFC5K6DbzS8v9v2URgVY5XtvF7hH92MXMnrDCDKPnpL2Te3Vnt2SUQ9HEpfnjV5xXPNhEU",
  "key5": "2hmWQpua5tNw6nDppxuCDEjJfmhrEtBHVzVn9tm6xfVt4vUufnBXrkJmewdD9FDhz1Z6m8oW7ATyX8MRLNPcJScm",
  "key6": "2y9zZizYMZvt2mY2QmqrwgssGM1mTo8KVvbJ7EGymUCCaB5TfNVs6k81gyrEBAwNQq9yQUofMx6PXhTYc54VnnAf",
  "key7": "3s8jFKgFN2vAbAcky2GyhtebwkoiV9te9S7R4urrMB2ZFSTCBFFbKXpJxf1rtVZR4JSgkZGFJJxMiovwPyPuCYM2",
  "key8": "5m8PfkRaZkbxwrGi5wVE9xBKyXmuXzn3zKryqutdjhGfoMQdobPeqTtStBKHK5cWp1LirGBetTxgjK75sGJ9KMZa",
  "key9": "2xFRfsxXERebrAhN6xrJ7MwNcHrsocxTKfJJSamL5bQxLXyASD2Bs16PLtnAZDc3CdB3fCxuLDf1xyenA7UvS6DJ",
  "key10": "3qkqMK1j7pKcusHRqpEYvUyPWQPzFWoxEu1AVaxbtf7GUNi8KuUtBez9PCNSdq4QyUaMj58GpwotkMLceTAeDkPT",
  "key11": "DBmcwjvFvz8FbZbKbYR7kL4kkgYWtZTUiCwcZFBiSE5nSXttC2LDGHGJd5d9wHid4rFcjxTTLB9omGaN9qmC7Sb",
  "key12": "3mqpuUjFQMP4n3oZK57gA1XS13aqr41HKESiwDZNVVjSg8EymKpYXwjQen6tLw2n7V8s6kBrtkaotAjvAAfAWtyD",
  "key13": "2tFFvazXpnJcSyQGQZqtqV3h7FzjzjHEHi6ZDnQ3tS49RXuBJJUnY7nn3bbSwFtjjDfWC17s7TnGuf3HjySXpwbC",
  "key14": "4J5jC45626RhCxZkmEPSQ4YX5LS9yZTtzL3JXDi1tE8pfF4HkTEfy4PZvav6T9FTsYVGHjLtw32Sk1NvN7VSH2HE",
  "key15": "G79Kqw26fwcLYjzeZdteqS2b51fJ6Y4uLb9dgKMTGhY59DSjsXaUMhBdUjtPa2r4zmeSGv92P1ViSZD3wJ4Q46H",
  "key16": "3YY3JD4tNWTVsNppH2SrnxxCJzSWoCm2uKGUQnViLnUCcEQHqujAPJ5m6wkZug2qoKzhaLVKvuBqQgXFQJpQTBVP",
  "key17": "4AMA8UEu84UoJZsRBAuSkjCn8Kjbs9U4kR9YPVnkwXB1843Ytn98opRS7vBqbstQvwmc9evXYhPp1ZWm8NKtjjaL",
  "key18": "4KsQrimqUu9iVLKu55xiv8FWqfjpi8uFwAL52uig7idXvcKeUhtqBVcabGfW9Mb3vS1gkcFP15qqpiFDGv4hsg6w",
  "key19": "5GVgXV4f4Ps2TWuswoMqqCKFnQxq32HPa26Q7BmkekyG3vraW65mShyA6vQKYJEpFobMY6Z3z1KpoByEGww4hnFP",
  "key20": "jUP6EaukWWGW4vn5cYPhqoNadc4uzRfggFDjXaRD8oBAWj11GV1Amm2b7SbsDNSgEXffmBhbeuJH3jP5tYf9SUa",
  "key21": "8UMGP9VMzGw9yM2YSaQQjjcDrYgG2C6fzQDSqh7oQ6wYu1XJnEwnJWHpA4a5KyRhSBj9ojBswgaShF2dYAw6zys",
  "key22": "4zUFspMqYpt5xny8cLEuvw7qWSa8VPKoFFNWzdEXGwh1YzZCCfo4AXHfq9Jo45ZsUa5KAEr4Fba53mvvJut4hXqQ",
  "key23": "2JoubxtU3s9cz9jjy1wHEGmjMFb1W16YzwMgFRq6dF1pxA8RQwukEDh1EhgyR54xQqkPW1feaV4Bp1fRt2W44tRh",
  "key24": "ZPxphVYQVVyMSKTvCL2LEdrrmHWbYMhJj3TeHNqZMDSQQSwr6f6QW8k3XwkAyo8iEa4ckyBXpLx9mWqaXHMjox5",
  "key25": "3Fhj6JJXwQA2PAvmcWgqr4dprXQrUqu8Y5c3RRPRH4n9TTe2rMwtNwuTE122KWxgT6FzYuMTa6nHkPXQgQhkck6E",
  "key26": "5641ML4iuaXSYZ55XnvWZceUNxqaeGDTjg4JZBNv2uz2nGp7susY713Kb8W8wpYrq5cTSa58tH7c8fW11vCf8oJV",
  "key27": "4ZPpiKJbwddxSEM9aioAdjQe4z5aj2tKWkuHKXV5eM3G2rUipsH3AuB2NLZ4X7uDr4BLPSADMj94GC69EVfwFbXj",
  "key28": "5x5uo7NaceH6tyPC4k55Mp11A88FjXhBQ1iuhEiKZMARVMQJbDYwi6GDg1uPzcJJNJEw4yeRYvNVa2RAxofkV9F2",
  "key29": "5JEdLkZhNAay8TpqewAxiuvVEtPkkL34TTPb4LFvfCSsY1HsQSjxTwmtPT9nDjtpmRcfsYbmkAof6nr36kmqRF1d",
  "key30": "1WESHtg9WMoQgNdMxu9E1xqbHmdFsGmBjF3gzpGUdLR7bhbz6MJaatEJcTBKT3ELwoCYM6VFktdnSPSxyWCiDdr",
  "key31": "3uWYNKpatrsmKZbK8WqGyRUGWmwHMd8WLjYTUqZ6qCvySiMcgPUtD9QjRscTL6rPrrD7BrZDm17sNEMoTqHXvExX",
  "key32": "3N4SiLHtP9vZWoBGydkLep9uewFPoDXDTCNNbJ64EJ7iHk79v8dCvEX5VRiMxpFn2TrLxU38sKfcyWGR9ZhGi37",
  "key33": "5vkpzFxnM2SWmEzmsUoC6K1ZGVY1m5bxNbVpSFK5A1sK4zuKKA5PHH4xfQGrEYhTyojFYYLXzgX4gUTJ7tD7rMT3",
  "key34": "5aYcaDm9wKzPoMafdxYedUHGMY3ZCyJuhSeUL6MCdk1cFaCo6yxKYXSX7Z2mtuxjcDyuFJv4u1BiQ59Xg5xxB9n5",
  "key35": "4MW2VNi5KsHYEedTtA1iSN6hZnwjQG5R8WtLzf5qZsh2ZisGrCLzBEfCtX87KeBZYiNHVgFbcVrevHBXocCuvVXg",
  "key36": "2e5dvgKDwmEeALbrBmKrR28Y2pCzpyd8HPZM2UnzZiEui8NcnxueZ7CWsFxzZXYwFRYB4Bz5cNgKk3tKnYzNxGEP",
  "key37": "3WoYPqEsHhN42bJwCsq7gVMmgfNWui5CD9U6Yw9SMPLK3oCro2br4TjuZFXSA37juvUYpV8bppY1f5XjV5g1X76w",
  "key38": "2Y72YjgdiSQbT6oLsCw9BRDwiRLZV9WGP797Uaiw5bLBVkZeCehMQWmi9z9qajn2fgyY8NC25PdLtGSR1puSxfKD",
  "key39": "5C3ZX3byY8hFJn7D6kQYR1YNxPTBNUY924kfBo5LS1izTyBaQvrDmDmtVDbBSm7dEHzrYJ86etAGtft9LBmrv5NX"
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
