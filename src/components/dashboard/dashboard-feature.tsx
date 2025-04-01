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
    "GZr3xqd6hGxiAVqHke9LSSULHmAKcgJUX6JQJWt56XSvb92HUVCgdpZQCfKrhwpy3MHXWZitDMRqDDf1i6KqfHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6ntsUCbQRx6qdsm9U78CPy4tGXU4rnvArzCSw81FR8YMXm4MbY1zmC3i2CJ1KdKKMnHcC4yf34VTmpvnVomX62",
  "key1": "5sc7dBdUSvSXAd2Hx7tvj8m2PXFHhQvg8U4WHr2oFgMLRXQEZiBMD4qQZoyV9qpsrf31jcfJSCphkK7bcMMUtNMe",
  "key2": "4u8HuW1jMRrGpoK2sr3xFdvbxDe4cNhAQyLA36MzgMvDbJsAyHimhr9b2xzJsSU57RvXAHxtbjhipreF7rSYmC6R",
  "key3": "3HUb9hC9EcZQ4HuWZ6GN7keZyGzb3kNd775dBSXa9KvTomiFscbkKYMAFUpdKULw4h11AKN6s9RTkvCUz34pKSuq",
  "key4": "28KNQz6j59L58jRhfW5M4tLxHbmC1W8gSwG17fYH2W33YnSzWPPqWhi1dKN722ULbeWASjjUbhCUKMfeVcka56wM",
  "key5": "4tMMi2JW25FdNs8gPo4qooL1ohCQAiRwAnQrupywwo263mr4Cuk4bmxtSsnsKXYtH9xqgr3rT7ALMR8BbcoVfKRd",
  "key6": "2jhnnguu9MUxy6JaWwpoNAwoiYBtuTUmuk5W4hA9yguPpVdKzTj1Kmucp93ht7FjMAFFf5D52snYsCBF1Bwqq7Ar",
  "key7": "63WgTcM2Ha224D8pttb8kTTbtgNAVQ87ykeuL6nk4hDYEj7WAMfkywU8m98MTWbANHekfPddNsHeJrZ9huaDuE8R",
  "key8": "2BurqZGrFBv96zyEGUUpcKSq5bWFW4UpFyhKmSH5wpFoJD4X6k3FnMZHsQb9Kc6nayJpmTUpi5U7qeyTnoPdwkRQ",
  "key9": "3ZSopYLGpXLNojvn6roDfG4Ah7suCRWTutHfwvk5itqdDGbZJtZ4LkskcKkYy45UgHAkPCUJTyPA4nSnJ2Tf1nHY",
  "key10": "4tMLdHU8fFBe3J9dFUaPF52pgvFXwDnKgZ2xCvYRYFe7w2HfsYJTHnmCnPkEzLRfnAgtCJAniUnbpRDqPPTPYyvE",
  "key11": "3FYAyPN1jVP4LLdfiyj67wNwSWDD5aYKaPXbpAJsGC3Jjn6cCHSy6CgRHVk7o94xN7hPHx8zBS4WvKzsX9yoyRbN",
  "key12": "4H5rjJDtUGBxGTV54Qu5Bf86W62VncJ6ozWHQEx3AVv4in76L5LhReFw7AhFcqJU7ZEWxoTSkVBGKquSm3XV5Y6w",
  "key13": "64MFyuKqPtoy9DyQeta1VWUGymBm4buFk3EoLuBLGvQQG6pq8S2zp9BFZeSSrHwpmJzCETU3SL1bXCDecYKycfgi",
  "key14": "5NR3L7A8MkF3CVQrtJA6mUUU2TeQg9dYNHgsXWzczg55DbFrPDkELoUGD41VSHnY4kwKfpkWUt7frMgAQGUeYYiH",
  "key15": "2iDARUBE7bVhMdfgrF5yxF6FyVtJ1mFeA2S2gWRW8mUHXAM7FxPzGbwRSxa5VHaoZfhkCRWKZZhTMesUNre9gKaP",
  "key16": "3JB3eppoYkWQ8DFDErKVDMewG5hyM8gLmTXH3WH6fVEC4DLFQrrPM7i71wqtZNC3M57SCCCuBQFL5QBrTR5gTqUp",
  "key17": "hpdzgMcUnXc45AkehRHJmgT1DDsGupEuQFjLQfyTdze5wcwNkQiqv69RrJT7371AqCG6NLu42QMFXsJEpvqfUE7",
  "key18": "28SfBJ43WLhZqjvWrGTA3we4R8QgnyQ3PdM1LzXRoMDz2HpUN7KAo22oU6WCFLHsMnUdxDgiSAUZ6ZngsB8rHAnk",
  "key19": "3yAHuCQsRFjNMEqopM2Yi6W7NegC1CXHG3SHuVZEVMYK33CLD3kL5pJ12FuL2X9Zcbs3jobjAZzvv2TzWT6fGDzB",
  "key20": "2zxEKHeVksh9CAyuAWvqJqHB9bPDRUxVdymQjKuNxRGjFvkiBxYAxi1XvDpXT8WMzhfCgEjKHXmsCH8GmN1FuhRc",
  "key21": "3SjeCfSPDeC9reL67GkyLxUVsjrmFuFBNQJFbZ8iSP6G4xSCFnUwvcwFzXWpf4sR5xAFcxBG74oLtCJ7d8ACDKs",
  "key22": "5cZHnxD14XY72L4QqjEj7hbdZXLDPGPping5pY1cKUpXR6W7D634dC1EMDkKuy7CUg5HWD9xD94DK3rJxvsFmzEK",
  "key23": "64wRuWQVWQTbRB2BgUNe2ZYHRT8TTT1tsBuxAM3nyJ6mB7XxfGRYpB6yDiRvf6ieavbFmM1PF7MNKExW1W6WHv9r",
  "key24": "62azLBJ7vEu3ykaqKDtKAwgZdf4adTzD4EHH7x4n7wR6MHgXre9U5VjYyBdME9Ad2c7iWf243XyapN8UaB4s4P9o",
  "key25": "3xqmU96wAPAQBgSjaV9uAF44mWLCRpZ2pN5rUJK6fPLMnQiaQg9jdmQDPr7DXxFYYhFdojtRTr4hN8zGzPMRB6fe",
  "key26": "2GtxddMQW4BK5DhVxEFxY11rNFzcEuyYgrh8uU9WgHKciVNG7rtg5bg16aivoN37BXhD3FNatynkjkhbXZ6kzMEU",
  "key27": "3aNeujMqVnrUNhb5rhhiwBRJQ4B68grgGoJsXNJx6D3mT6hrbzBTv9hYDJVuGpf86ede1hT2zbYVuAom9BCtBzXG"
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
