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
    "Y3e1d3t1LB7hL1qjdCNLCF2yV4HVAiCggBMporwq7S8ouraC7e9GsW4wEDZw716kkBotVSZauxxMNNnBRn7GBN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZNs5HPqa6P25eZu1sSYNMGc8Mb5wTPjWduHZsURNPd4EjpL63wruSXUEWWoCUd6uiNPPer6Ks5k3XLtvUKYATZ",
  "key1": "4sqDvHzXpCnvepNi4AZ9oY6L6BfUXfh6cgJC7kbKiHUJr26JoajFf7oStCzqoFvSM7hsHm4RzMDnMK6Lrc3uxeM3",
  "key2": "4YRCHt5Z17AxRehAAsjFNEttgd6yEHc6WMfo25SimTgVP3hyYP9zRhkxFmw4gQXgbCWD3zGBjedXZnQpHWKHgETN",
  "key3": "5H2fMeDfxM8qD2G6LzDuzzEeq3voYLZv8SnjkfnXWYZPNRjmdpx2sfx2R7dnTq8dZcrYWrvrt3SXGRVQuvNUiseQ",
  "key4": "3YRKkfwEs6nQiZXHEPW1EEXc4BoHKWepFU7VTHjDm3YKBxtFj92kWr7iwQrY4Qxxo2H1G8E6xhXW9JmufknDdunE",
  "key5": "2YyW9Si4ykGKxRBJx6iuW2fP23XEtum65C1gVA3t75LKMTD36eRDRthT69Ksbuwwshn3hyveveF4tvMNvH2t5SWf",
  "key6": "4KhaJaxrDQzx5QW4iXspDLiteQJPYg9CyGkL2QYknULA9gH3SgE5RFNE9fhpN3YYiX3qQFZRt7wwcaFQpViuE5vR",
  "key7": "2zgpWwrYpJfhvVQdFrMUqK7EPa7nG85ptMbPN42p1HzsUtT3hGkxhEZfzKhkp9y4EeNf2kWi5rF5z51afmPdBayL",
  "key8": "3GbwtTPrsishdbZoar5r3XGSjTKdQLwcEgdfSs1d1xxwv6xQrtkp2fjhsZ9KkzXwUVryrfdBJHUqtGsWKEoN9F1w",
  "key9": "5ToPhtXfkEnwEdtF3i8NukgmJt3AVTeP1cRAo78Hztqe1Go511FBb9d46r3oUWDaTgNnmaXqBYyxhxGYku9Uaayo",
  "key10": "5REVPecvsc1MqjNKT5PnEiUmLqmC4Xik9LQMR8AyVtHYonen33pfqEWr8iPGHLWaDDa7bVqkrBt14M1ZutswnhNv",
  "key11": "31UAkaJoXrR6cczghsozkj87XxJfrSyRfZQMVydDEKMjcj6tjYYinmUYKVTxe2oc8awDDtUCPDusfKr2LTt3VA8r",
  "key12": "5MVHskuQfAvHr9EUiFErCFqbYHRhPdh5pWSFwwFZ7rnvVShEaGY3oxca7xSVpMA3kDsiEbLne3SY8c13f5m2tP3U",
  "key13": "Hd4ZBnJfDvWZaqqwi6kHKo5bWYiuxU9SxH4R1w6Td14aMa5bwJnaGEzvdxs544GtzC5b8dv8D9qvELx2junwk6f",
  "key14": "5GfL8nYNL2ZAjp4MBVNoevPE8mY865mQatSCt1Ew7F4j87AGyCGXXQo3tcTaqK8PqihfqNDN6wP3Etb7M72Ctfy1",
  "key15": "vamMV7zWbB4rLaTB3MvH1FurJDkTjdgxnS7yp7dL8KonSLgdtxPVxjjRpwRFZ7cKitWSJP5XdgoCvXnBXQxkRWY",
  "key16": "3L5MrKKuU8rTPLezr6ovDMjqN26xyMi1JK9ys3Unry9tmUVBZiVt9dVRsfhRdSUAHc74g8c3qKRjWTQs3ymDmnus",
  "key17": "4zaYPB4xxPHqiKD8vv94m4cf4PTu27QM1k1H6ucoaqf8tnRZ4j1g5n2NQCbUgxVZuPxWrN6HHERhyJuTxm7gAdN3",
  "key18": "3anWqj4RGdhAXaSCHveRvwSarAF6U7WVb67g6xV2egfXy4ykd81y2asihEob3iU4kyxeWkkFSVKtev4jPo6SrswA",
  "key19": "54nZVGuYNFywDx3p3cBorFzK2maqJckiG7SXehPiFLrP5QLahHQqvNYGNZKno2ardBRAiLogAhmLLQaaPdE1uGsj",
  "key20": "cUqafa8qWWjt3TnXc12ymY1Z3aFrcKADWUNi2j8fcAcv9sdCu2j8e7sdNqYAyavcyDM2siHRh8skTzfssrdZTpw",
  "key21": "667Ayv6cSXVvUayt8wojvEmAYQHdGEThk7t4WXDT8AGz5esdgui82Sxm3SdPu8YATN8FsiDEtyCeNL6mhiNQtG54",
  "key22": "2LgAuCQ6T6dXtLbafJonp5P4dFddngeRq1vvqBYmKHM1cTbQbGWspcL7p9BChBu3nx8AAZqKZPTzshPvW1AsA2mN",
  "key23": "5iFcuCNbp1qZQTFHnmPtoJ5vEJRdKWaK5BkohwzcCD1KzdyCycnacjvxi1KDskDoTxLnSPW5L7rG6jDxSZ8awimY",
  "key24": "4yJEYi2UeWf1HP3ZRZ8BYNWW9VfwaBc5aFmqCnubzY7qw6GFH9GicvZjoS7ZwBxAr55pYiaTvfMZ1xvTFBkCLX77",
  "key25": "3mTATVbKhR1gSdAk5Vt8znuwxrJXVRR4ZLae4QAttt2S25QybuJEkudPkwUfDFBeErXfTYUvtCwkuxgB6RjRp8sW",
  "key26": "53z7KhadCoaCNTQnA6Xsg73NWVfisYBzxFskUGREsJz7en1sSiPGNctksWUjaaNAPLrUh9tifqHEfBDoNEW5Xxog",
  "key27": "3r253EMnTMhN6MdaXWMEp9mdyqJKXucPehvKL6DkDuiD43HPcSEJ81wunrfxAL4N8athBU4P59ook9p7sdoXCgsu"
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
