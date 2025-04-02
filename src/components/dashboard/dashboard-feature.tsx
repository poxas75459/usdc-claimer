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
    "yHSpqarrsqe6LJeqatCE5uNyBvhXEknebXAznckvVCSs8aYf6JF5gwnJZ5RPsBzXNoVvainHNmcqF33W87DZhVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2scPvrP17Mv95b5Tj7nc5Evk87m1KKQGqzSHxbfDfopiygKVH7z8n9rAQaMTtzHLQQm47YPXpCRxQBYsjAP7XDd7",
  "key1": "4tqXVySi4vtg3rk7pxB1n6B7J66sLBMEsFVgRHvTE8NGpATUFysTuH4W7iYnLcS6K8mm1LWeK1VTnqugQaDVPa3t",
  "key2": "NvpurxDPg7VALLN7gWSeBMCDodc83G8yv8WhRG2iNGdQsVFpY3Bu9yLeM1VNtdJrerURMjvSbXSfDF31y4u6pf3",
  "key3": "4zHUrze72LLY9xAZfns8SkwQ1Nz2gfAS2QohKEkT8bXzoU1N7Ev1k3Pj4CN67puMHmD5PoHZ9hGPgi2jHiAunXUg",
  "key4": "2CX1tJ98PnwGwsJr7rzXxhi25eDRvNLbVoft6xESwsRaP7JXKoSjRTm1Nz5Bc5BQtqrBaKCq6c4JVtM9ST69CHrF",
  "key5": "4WaGKL1yF8959xkTHZtRQK8zVZWb25ciehLHGJyUxQTsHhuVviw1gsR36K9nebuoEjwHi9bw3CSbfcs9QWV1GjA2",
  "key6": "5d2G1pDx888zkY4iHuVZzT9bbfkB1Q43bzrKU19muTkmwMFeG9PPWVysUvCkeLUWuJnATV9fe1AjitjUbyYgFzwB",
  "key7": "2BpGDPLviKQhnkGe9trBQsU5ViUCqeCfEKHopibY3A1yLcZZPHF6bHC22kfxmZB9uG8yAoMHxaXwh9MypKwV7Svv",
  "key8": "526RsHaNmJyWFg9qotH6G37ZRaKVScwUEkvnvCVQnQdPmqQN1cfP3m1R4q3QX6DJA3XzikF6jcs6Xs6DBE1PhGf3",
  "key9": "5USuHyVgwo8h9jzJMRUAf8YkgP1HYyDpUqKzgiZt1rZartCMwmWoXR7V5H8V6dTi7Ru8HhmjBMHb6dPrkJN5vNGD",
  "key10": "4uEPERXFYN3xsZ4hzQZJ1oehReDgEGRAm5N3QEfctdWqmnVFwu6VzSeP1zPmxeTDARkCf473e1bN8jUXHU3VvzW8",
  "key11": "5LqnrJszPMUeKao1ovyrYxatGB3Pf4fpxXMME7aP6g9bkTbG9LYdysuaNvcodDLyBfLrnUqgpBDhdVQ167bLnoqp",
  "key12": "omahmwLgR2so2QS28ywKvoL9TrVSd6gp7PowwF1e5SyhwcnjdwY3mjT5A5c6Q8McHJRfZnW6pfoecqvmwWX6SkX",
  "key13": "JvB4JbYXqC6drdFP6sWwsWWeAcGt86Lbyh5eriJcwEanhz9YihjrNWk4VxVTuvAgwnRFGJ1PQqdsRjV8Sy6v9mz",
  "key14": "53htidmJi3Vjrx7SxjmL1VYqd1DxPZJpHXky9rCy4eGpHCTb3J7PCK3T1fUSfDPe4DNeqWYzpyQ12Ti7Pv6b612S",
  "key15": "637ok3SiypZMDAzqE33sUgkgruZJxVsyMrW5CQK1FVXB4XFH2DWjJ4ACMJSBLEd19kLq55jZimdrdePdbjK7sE2D",
  "key16": "4c3AjR9GL48DW9gCJz35MnpysaxWSbG5kbvJw7QmnckyoH9iN4Cdmvq5FtEfq3VAgi6kSWw24mPWQ3N5r1PsskXC",
  "key17": "5MXPpomxshyMxyWdr8c43s6SaRLRjpDGGvEx6rBsv6G8sBwhPfYk25fhFE36pMbUmbDGisuH4S1SESHyXmQi86Ln",
  "key18": "4hQjQdKHWq1C58WbHj6dj7CcVHjTwArQ7d9fC3VLkt2fZyY1xQ1Hfb5GrXdGLtfbeXPSqULrBRBhnQBuJEe5Hcqc",
  "key19": "Tc8PBGZy591fWiihcoVfYh6zMrwcgsR1MWzdPPTM8D2KQTs4ReEPH5GGMXyZFwh3XMyp8JfaoB4Qo6UWHzEXFQq",
  "key20": "2JrKYyuL2wqDt6Aqx5bQsarC9iCyijhNGZgSpQGv4BsdS4hJHqPqd2kGsLDiMb7sUm4HRvdd4mCGF9SCqedyJABV",
  "key21": "4WA6vCjrhpUbb3tyAoF6UPrjeTJFHZ97VT2C8kJnUCmesFRxFeT5LE2zJxHV4ekr9XDe1Qgt3JNfoE3Ta1KU6eAz",
  "key22": "tYauuVZKTo3wGbopf8g4Bb8mWYXYYEPoc4zyY5Azev8xynuPMZhbS3mt2u5UEvo1qVG8BZvCxeERVKXUxkY9hYs",
  "key23": "2sayguoj1YkpewC1xXYDQbR9i1aGo43t7a7CrAYAJnuAxQVhFjpLNsGTVQZiVyBjm3CZVupwaMyfGw1UiPWyP5H6",
  "key24": "36kF4ogyY1AZhWb83w6GySQyRs7vgkLkt4ExgUYdsnyrUniKiPX2fkqGCH3xPF2yn4CxGARA7wDtGTGhz39PdVZw",
  "key25": "ZQg4PdmLQFADy7W6Ln23NQuCxVGx6Khx2hfJ5CFMoHtUnLVVh96KXhmfNFko2JVC1baqwJUmZNm5WwgRbxAEx82"
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
