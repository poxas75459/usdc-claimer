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
    "2hT1XcFMSL3EjRVCiLWtY3wyyrkQbbzBqA8gTfZm2wrmwYB1PU7cFVW7T7voirHRX6YsdkxN5ipGgcjjFtJdWPZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56rqHqjQ13MngQK5njrtMkEkFsba64UkaXf8GUyQf5BF3oc79ynfiqTs8pmWSckeYQwxf8LKvctJDPVPjQxC5jE7",
  "key1": "gedRmHiBZZRH9JG5HUfXrgn8pKJv95T4Um7f6tSprFDRkQgkXoUfFgjrmgnq81QDKgzKccnYgN5jqe9MCTBj7Mj",
  "key2": "5pmawmbdFSCntFdxnDSKGw2QeXkfBasb7Fgp1Bw9dYcsbkzLF3u6rQrnmJVfK22jLdU2WnPeYy1raF41BpnaqyAx",
  "key3": "5tFFsYDC1HkUA1R1PmSSZHa9vR4pX7efGtQPhYPfenu6L2zFhqNHseC7RdvD6KEErYpbJBm6EHrXDgqttn9qixfS",
  "key4": "5rfwzeNE5FNuvEs7eE84gGasH4t5sXGhawPtXqVq39pyXpJ3X7qPc6ZHGwDWAG1i1CGVdRgFHzFG6fyxA61aGDS1",
  "key5": "2axhi4u6EediNciWe32E2Vdue5LUrpFXMq8bXpAo36qJ5z94QQQHzZe9eygi2XSDP9G5KLDvwRjtdTEMKZ1PJeN",
  "key6": "5ghtk63b1Y1jcSNrUPEFZjVicMjaXL4ZcGT4gzwaPWs7w7HjX7FZ5G75ddtvy6ZBrc7ZPF5z1GbeFhTF17qKj5g8",
  "key7": "3uZrTrD9zF3F9KHAfNEt3SJTme8jJK4u6CPs6am3D3YJbrfYghxdGckXgP8GMHBnVCbMQi2anhbkxsu3BnCD5deT",
  "key8": "MQJbJJwQUqztWG5G7CChZPAdudR8jpAQngkFpTzJKrZ3tr91q1H9owm1RJHuFCvYptjRTDyYHgxs1aVAkgtwoo4",
  "key9": "3NJg9bC6N4NutpNa7SQ1ayDdBoCk1NLFnXiEHqZ9uiiekNnPqLKqdyiqu5uGaXBXatJztp6TVqj9erGS6kbgJnvJ",
  "key10": "yRn6fhXTCue2TMRFWJkwuuGvz31CZqFBF7xiHR9CHmD6fz3Wo2GquUqvAJgrSRZ6qzqNoj8d5oq49iwBH3345Tj",
  "key11": "4HRwptj9iiTv9NgF9QJa3hFrj72UQHawtetxQ24CPGSZfjTnMMsZHxszoan6n9PXykpQQ2nunYMhK6LhNsV3Vh6z",
  "key12": "29Nzib4FcgxjR3VpouwQ2dFPKBqgEsbGSRayAmmghbRTNroWjSBGjgmE4r4XTjsDmhduKjZ9gYeQFbRmaK8TPjc1",
  "key13": "3WJVAdZWJtYivCnFXYC4D2c8EcbyEv1Lik7JYSBM4HtqEH6qaiohA8wi8XuJkq9xBSoAX2WPvDjcwyVzExu7pryQ",
  "key14": "2kQqQp5zkZV4wxMJ9CDnC8pnrHu2e3CJHZcH5uBiLgcwhrGq2ydurDffX25S6FayJ8AYsMun9f4bV8cJhh3DhrcX",
  "key15": "5Se9Mt3QmUwKxxnKe3ujgvoVcrruXD5ouEz4QFSe2evuUWXWtTza7Dho7SyBWxYqxZX4VLzh5d9ozE5dguP5mcEV",
  "key16": "2rNm2CvQqNLVPCodMvbNuAKhfg1uMQ7bg5Zh6DZVrr2SxZS2ZSV56F33QSiKELeGHfH9ngwGr2P6xbedy1WqjEaL",
  "key17": "5TL1r8N2oCcp8znDaXEcHTeRobcek2YdP9cx4JMrkbbySbVAMzh2gk37xtJGjzQ4QUM1dtP5UM1gX13V1cn9MHup",
  "key18": "3XAyEmc5C1BJz2hnvPHRZCcPyuZSfMZJk3uVFy5BoYMqSVupPuykK6wx9a1F2h4Y1JZiyQChPN3XYDQE2xrXsRuc",
  "key19": "2Rd3cPbWTkhoFT8wf8Vko9SzE7BvgqzT3skBZwBBCgmRd8kAFEQ1kkQVcRUMDBgWdbuesXEjUjCrnyUWb9KeHQyB",
  "key20": "5ZG9rKk1ZkbkDfrZRYguQiTpfpXPnV9KobRFqesGi4TtKSrCWETWYtM1SXvHMT88g5z5UD3hq3kcmXpTyRYjnKEc",
  "key21": "4hGnMrNxA4zimNPpvdjqmynhG7chPyJjEHoAXNj5P1MwEMEXbcqNVtj6Xbxyqg3F9ePhJuhPgtbeot7TNZRo9w2N",
  "key22": "2DZ7coFPY344mMw4auUGTHgh1GtkdJtP1toW5ELD7D5o6oCMm99u9Hc7cd6zmEQSn2D1FRrSKCgxzM4U7G6dbUCe",
  "key23": "3gearHEKGVRFiGvajGe2avcBCQ1umwm4wHecht4ZXNJJvZJmFPrV86tcXTEJamCz3ACZSCeAqhGMPm9gSmrZ2S3a",
  "key24": "2QN5fPF2gfxcYUhEXsJExBVHPWUSsrba6LYK52VTpJgD832U41W9TfJvExSCb8pjMUGzoJFkNZuYgXrGni9YT4py",
  "key25": "51stqXjgUCGj2GcaHaFyjKtNwP8R2v4efKSCLxNWWhk9Eg5m94Se7no7spXTHL5nyMtzaCpvJkuXuX5Paj2rvVvt",
  "key26": "4vDPbg5w2gxgoMbuQifwGcFRzmMFRZrTPn7PopMmpVY2vo26b2h1b4YWwTpV5o2MywDQh6xfBvazLNmchatxzGpQ",
  "key27": "5tHhqwiEucWc3PKvVHUEDMnkKgZuQ9Ur5a8eWz2Fbi8RfZcLEYukxoKASa1Wsn5ZJUYwDKg9yxpkfZrSP13QC6y9",
  "key28": "57J2sjuMCvFcsnwQqyTfxHJbEZMp61pVEg9inChTD4jHb9pMztAVHp5mGxYBjJ6NZkte3tzQLQmDZZrQhXznjwR1",
  "key29": "4SKkozFyjdCJcVhCBthCHjgTGUoYMhEbJEpxdr5aLfYzXYTRwA6tta45sj6Z1gAfQZKcq2EiFY2VLfyNzzCSS8HY",
  "key30": "4PajDBNWgw8ruCfaXqNUr5byF3ZAc9b1jLByyXar4hPWWxPCmrgzKMLBaFFywxRaGznhHuqDRoWr626Bg2r1jEBw",
  "key31": "5RhZxP8S2TcBuBoB4PZJ8oxhmorvsRhGdHMPAaVTbzK1FvbBixCcmdAcXyWZYL3AdHSRqp3jLfBEGoVqE9RDZm6H"
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
