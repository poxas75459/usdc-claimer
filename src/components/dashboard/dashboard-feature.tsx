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
    "PNKDCKstpwqco8thQtbPP3PqAhexZEidnRHRhkH9nuCip5PWAoLmuZTbgNARKAi2gbrnje3bMCVHUyTAGG8MmZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFbmAjCzwgTo9XbWYccv5rdC9ncK56mkmcH17NQbPpmVgXJxcYL2k84pKLJ1MvSeSZHjWwbq4YU2JkRnT3AU3km",
  "key1": "3Nc1tUeeuuPtUxWyKkfytuzDysWRm5QaSWpiFFscBv2uhSJpSQ6JfpijM7mJdVBHQKFirRw37SbrZrKKmbKYZsWA",
  "key2": "a2atnyFgtCFPASvUeskMDYzMh6URtYHJwqjBKhg4c61ZapiTcQVoeL4z8Qts4PShVeifwC3Tx53La3Kz3SY7GMn",
  "key3": "3ZFijtfgfytDZ6FfWf6ChR9iUe12UfiMkHZ8iE8nyYTymo38Sop7gfjCuHjnw3mUha6BNKxTGnp29Mkq5mchyxib",
  "key4": "54Mp35p9AdErvacqAmSFKHCvEAwfnu5qAQ9XhuAMseD27xutXUkfAR2vH4sDw6EH9tJDzro1h3bnizGjLCXhmatj",
  "key5": "2v7kDrmVJ9scZe2hbr9hv4gyEhTfECLRNvDaHfwmWwMP1hQ82X7g7ts79MYqT3J5HYMWwXuhzR3jPuSLhoQSz2T4",
  "key6": "EYnZgy17Le9UjyYfkuAcZeRGjPgMYR4nySUD93w63kGrUgUYuosde9PDv8S4HsQCxrGDZJpWLTpREiKLkiQM1cQ",
  "key7": "5mevNpna86su4yd8Xryxv2QSQsRevPni3Ef8tGEwCNVypPrRfgtQ1z2gLAto4uXMRHQxz9zT9D4Xc4KJbYYwqqSR",
  "key8": "3VJGSQvjPBU1JGg2B53xrWYKuEH6Vmuh1aVVjv65AGpgAotpWmW8Qn1fnPP17xwvwTrmct3yMqrZuX6JMLyQMkGb",
  "key9": "3SXfog6HhUfHcqvZdJyMyyAuSrfQPaMvjGrfAmj3R6Dv5apR1tZ8FGmFmoF55xyk54xZNiyoRsNSBpFDF3dVpWKX",
  "key10": "fdoAL7nvVNz6b3nJvoPuA2YnS3Rmdi4ZW9u8SGhoy7Bc8fivha14viSVwhuDi4TCfEzFaNB6XTPuRWXxokgvChS",
  "key11": "58F2kTwvJHcB7GLBQoxAhLtW29NVavZ4bYSfS4aq3uq4hGRFWp4D6iEF1rEzzRVszaPQcdpEetELvisi1H8SE1D6",
  "key12": "TFfxKYgFU4woEWAizXZ3UcySaq3cFYhzoSptJRZeoxfv76sk7qvkFM4GdsDiKoBnDYgyumYS42kyB1arJgt2hHW",
  "key13": "3h1eFXRLEL4j7RRQvRCLtjjEFU9XrWHd2qA3sBifkGPSCH8MnTUNPGAJuZjc4H3vGmUUcba2UrVSb3SKUH3Xa66M",
  "key14": "2ATpVUyj6zBBjw47cWFbcVL7GrYyRwPNsbDTMXVt7FUpDVqbUvCYz4WUCNx595HsWfQPrKv3TXvJNCTXhjBm1AV2",
  "key15": "5wxPnU7df4zukKT87nfa5rey1tosYQmH5vXLPcjNkHmS3K96KUpjST5EmhRNZq38LHu6gjdfbPt55PWn1rj8WdPH",
  "key16": "2ERpFrWviQDZPY5MRQSHLgvsaruTzhLo4BYEaP6PtHmU9ktRwBrRy3kgSh6PcK5GZQLbhYYstAGv9UoxKLQEn1RE",
  "key17": "3EgmP74x6qAmH7vVwo38TwFGSCPhmDVtk1VDQD57QcSE9cEWgyF9XnTscxMkWDMjePhXrY9avMNyzbTXoTuuWo7D",
  "key18": "26YGKdPzLRxGSpEjUAhoxXugvgWDzUmtimyNfhiXhtwNZpSE6D67USuDn2x2Fffc8DNBx3j6NBnR2YyFpXnc6RHy",
  "key19": "4vYKj8sesu7vf7DyYuV1KY5HZkL4btiS6w8PosJHV13Uh7XBP2Uy4QFguJDVrumL16NvnBBuNZN8c1xsPPBnsT6K",
  "key20": "5kCB2SSjFKRpr439gszw335yPAfEQSiUCp74ALzpqvjJzo8YDMUkDCgt6QHNHY6hQ5Di4uVVTKfTB6Gs8Nxa9a3z",
  "key21": "3zi1RSPwsV7BDdTXVxGWE4jmrFKyzsmM1xTZ83DLpMjtM9nSxZS3RuoBteDjx6nZi5ASsRX5Sns9ix5hRNhMjkgQ",
  "key22": "5pgYgKG2CryhEcEN8mSxiWF4miq3rX54bfmZUh8koq7gZi64bNoxceHhr1i5qyLGnbvtZXVF8xcUPWsVeQKo4Jvk",
  "key23": "2wZjEDSYCydwnwbrdNN5mHUxL19G1fUdGgePqY5fnvMVGr5eEWaDvnHJctQX5emhJG3i29GBnhKxSKrGe7RSsyrp",
  "key24": "ooUXSd2vzUfxGSGbRzUk2US9mFYvj5tsKFqiE7y2BMDn5U5yNYH9PZ8x4bCAanbuNPEsHyxhboH536YeS7yPu5g",
  "key25": "3GT92Ai3X4KzhQaJK5QCoEXBHXYZeW1AW7CVX34PLMBa7XGLKmzQw49pB1DwvMvCoq2Vrcykzya7ND5ghkhn3dYb",
  "key26": "4urHHx5caHWczfiX87SQpow4iHoQE6sagZg2FSMqgqhrkoWhSxP1aKzX1Ka3KmaBPdczE7tKwfsmyhjXiFDaTCzs"
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
