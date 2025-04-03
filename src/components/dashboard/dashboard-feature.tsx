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
    "5zgxUa1irFj2JcA1JgKfBzX1RHe13gpLzzHuzP5MqQm7NYM94sezSoZ8iwzdfJ2Xbp1VVZr9Up8pyyf8E4jTZZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbtuuqNhCoZrF46fws6iNoG1NgumFQyKHSWV9J1fPND4KGnmtnDLAHmyHGBQa3adxTfVm2uaNfESEGaNXhnmiYV",
  "key1": "4HkNwnZzwMTVtSgjWfQvUGA316TSbyzJEH5FokYkUmYpTe4FjSU8eZUjp8T4ighw18SiMjxc5c1pcSk35xSxUfbn",
  "key2": "4ekJsTCReHpeo5qF6vzTrHN3ibRp5pebfWSCSNnJNmK661Gig9oYqzRCJciR8XKu5u27XNWsiTLNG3d14fze6sdU",
  "key3": "5U9dS9NzD6NgSMhHiNKZofYMA8jqdhTwfCDKLQhEZnX8d95HW5jS3mMX73fY1z59H1zzmgYu79wgMC12exKUuui",
  "key4": "uUQRr5FQYHFx9d1zsZz7yyaYNj4kYUjBSwjVUiiFVUiLiNC8zEeXv6Jz8rmKG1PJWm9GHMmpyYww1tofVHhGgdy",
  "key5": "5m2872T8FB5yWS3BcsFg1g4PKpP1t1ziWd51eqrzJF1GaLYrrmbVKVD2p5i9umY1LBGHvdP23k6hCRfUpm4aSfBW",
  "key6": "5V2hKgHd6KN4bUtDMmHPLzEVdKdGZ5vegdRuUAD5BsichYPzpCLF1R2cEuzdKDWDjEq3Uv2fEpf9PCBwDMiZVFGh",
  "key7": "5PYZPEiJPH15sv33m1WktzR2SymZ6hTdkaZQkoq7oczc35yvxHifYApmMhWGzSKKfWPwdRkhiMQ2CFUcixBf6Y1V",
  "key8": "3Lt5PMHkpgmh68Bpbx4ciM2xWwkPkJhSnVxYjsipexzcQKcM2tbjpvaRgW2uA5Rp3biF2w4oqi6ZCa1QX7MYarYs",
  "key9": "8mYmACTRPbUFWEqq7UuhMeYLWz58uaQ2ew5CozpUaikMdr3L5rA2AfdmcetWnTmcDA3QdHViWvn4yX8CSUVBQ2v",
  "key10": "4TEpgWWiswBvqtUmJ3YAq8dQ5HWUWxrS6UUv2Ub2bYj2GFwU3vHbfnodnfPPSWLNY4GMMXcKUJpiNxwkU3DmV1Lf",
  "key11": "5SiGPr4fGQr5KKPvfFGESrc4VEbTgvnXH6vgZSm79r7QScLfCmJg5x1qtzpfw9D3ahtuVky9yJzNHDVJsMCgwvc9",
  "key12": "2w7QiiPSLffmsgMk2udxgF2LBh16tTEbPo9uv1vYPqgErhPDJEsCzm6etUNGHGCByb6wVgHvszk7ZxVpzsSbmkEa",
  "key13": "fgXaferQdugFwzwz48bepa1vPWT3z6QaRFeuTfd8BsMG2Ssq6UHUtyuTn4SqRiLSBmVSTnbxWgVLfJaTChWjz2c",
  "key14": "8keZgXCEhKKZcsDfocRdDkS1nBgPTXERQjb8PwB5Rge3Gcgj9rziTgAa2eTqqw5TWrJjLs2D9ccGtNzraA2wQmV",
  "key15": "5wry1H8hL6RJ2SUzMsYbcdtQKH73vUpQZniqUVH1nckA5zzKJSqvCXsy2gEdLFhkCgn8qK1PFPZXKEpnkqp7Q9EG",
  "key16": "5DtCF7FxWApKUDfgXbhbzw2wRGcrD8Tezxa2psjTJH9fRqsQn5JgsKegoyw7R8kPqbzwueUYufoJhhgdFqskSAMA",
  "key17": "3ZL8QG1oP8xBpo53oWfNnuKJH6paj6APHigpxdNPBt4gihbdi3dWNgGSJw4M2VuYicfDS6FLYxYNbjuecQExvEPD",
  "key18": "4jGEbP9uXLAJHCWfKqPEAhZFAQ5JU25UghURxXswdbdHQ1eN8ETXzzS9B2qzDZwZC9xAFJHAAxvABDsGrK1c7ki1",
  "key19": "365fPjQg5Xj1HkWMPC73MHSaxS2mVVsFVGRAQcpNVSq7FBDnTvFEKqa3MojXxh9NZqFJA1j4dfT93xoncP8s35nR",
  "key20": "1MMUgvptAqa3RsN9g5yHf7ZvYq75geDoqit5extcm7ijyrLpoTusbBghe4BMKKoDrxUqgaRQUsmpZd8zQAbtPfP",
  "key21": "5A5h6JH9XHK1q1ca55EEpkbTCuhK2YodArhLCizZPabaeAxEhJ4YGqcLWPrFqYBdyHy47UM9XieJVbE7g62tkBEo",
  "key22": "MugzcmxahkLtbtBwTEiecbnPiugymkthBRAGwXWoctjPoCvBay3LwtD4mTi5q68XSvyHxrzrZz8xRtEhwWA513r",
  "key23": "ks5SjUKyQFnPkWWSw3zXaYCALqk2A3dyeeVqsAuF6DFYh34NgZwXxaxP69yaM4Qh1uEPBUfowrb76QvivJ3wcfo",
  "key24": "2xeUKLH5HchJHGkBWvch5ZMtASzTLY5okVyDKwzLN2MRf8wynX1WGtiP3b5Ao5A6YgjXSex8y7s63ZCsbtFJguqj",
  "key25": "2e49V4qzNx3fqp3mit9S1JNvs93Cob6BwWyArFeRi4SHws3hEr9RZxLbrVqtqQ3NydpN8bJtJ7knuXMYSwfA2A1S",
  "key26": "4ik92aAu34EaZzcUZ2inaH6qXwA9mHY5NiKmefabwZYU4U9LgwXLxjuHqg55gU9TPcysVxXaYKiTHM35Jx9kzAzo"
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
