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
    "3PTva7bo81Fg9vXbCwBGtG5MLpkTNicgsMrNgDbbVakSV9iuhnsc9tERfS7fu6RsjpgL3ECwBWuRMhQr9r4cisB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwCtqKKBSakSHBfTgr6p3QCvSB8AE1ow1mGDUFsMc2XS9pTir73XBph1npWtnASZGDRE45RTCXUZY1cHqkPznLu",
  "key1": "vHpxSK6tERHxHJK3oeQ3AMPFgPeNviGvsa9u5BudRixgqDbi4nqqy3dzaVKDV9Uhv4Je1ti2sf9FE8PJ8smWa5c",
  "key2": "AuGG6g4SN9dSV9t53zBT4V2dbccXqYBfgU68rUgWo35WsTZJcrLwfEUwo4KKhR6C5FEQyVkNGuKqJK6TfhaEdAP",
  "key3": "2PbNnpXvhKL4Pf2dQiqqPt7b1SAh4P5nVCn5YW4i5ZtGSZNpXqJw4aHrBYnhntxRsUQPHG9zxz8GUwzmjBB8Qy3P",
  "key4": "4NDFqjF5jnNs9DwFFbfpBbx3zKH9UP2d4myGXR2HwvmMAPvQ6jggnLHkLNck9MMttTHaNcSkPjZrmvmiL291kGEH",
  "key5": "4XNJfLQvaQhiQ1BfAvjdjrzyzgsVfZs9RV62aqUWBPB1aDwJ8TXh1u8JyejY7yzYVX2JyFdace6r5oWikgLF7jsp",
  "key6": "638BMnKcraRe7TvVGSoVgJ8xZjtEWf8J4UzJ4384AcQFcEYfjaxdKWDBcQvd7QDHGMz1Fd6PsDZF5EtNHakuA5WN",
  "key7": "2wmhCXRSoinKz5o27zHxiZba2hRkpvpdMVJJ2Cj6SLFHbE5VzeXhmAJujYnLcko4pAQRwweyQbZAPzCd6KXGnXVg",
  "key8": "42tgkeJqCRSwXzrGM9Lgxuz7wPVqzQLAF5e4mx6uSnnrdCYhpeGhzYWfyZByRjht6bA8AA6j5PJ2WEk2gCXBerqu",
  "key9": "2pC3KqpFfK1iM9jMuS8MZyH1rz9fD6Q6g5gv4h3rrZKwGXJahmGc2fB4LkPkiJzfCfEivncGfozficFHykTGcpMz",
  "key10": "2kGbs4YeuJwkWBXUN1A6URX3LdHtkRJBjwqHe63MtVN6WQhL2fMQzjtguhYGhovFjwiSGWUvPjTjEeUQT8txUi6i",
  "key11": "3tJ2grYQiHaTZeqmqmV6DpAT4fd4DQVZV2gqcJPT8XWrF2ApKFyt8fByh15dRCBj3zLgYyXWMt86sJXoavjjDEWh",
  "key12": "2Eoma9uG3VPsLJUBXmxS8fRG6AbUbbt5Sn83F2nikg8h8gVjPVaKDLHW8tURM7wrbmeF4tRjsffS5iW51oUvWYkT",
  "key13": "2TzrFmwoxEjyYtLKnU86suhyvdBYEVfhcDkh3PMTVKnvPHRXH2GSLyrC48sWoSTkoeZvviujwqYEvH5vBgwwCH8p",
  "key14": "2M8mKUpitKyoG2dXzV5EWKw4fXUjALdf7kKW9kkm9bkbyfURrF5ZXrxg5nNFeYiSbskesy1NViY8rDp4SkFgYPY4",
  "key15": "4BW5Ury6bN5QXn6W5KGpyA2fLMzLBXZZrKoRuMYpme52ENVpY8oao7LpiQ4b5EPTnRiWt2W2SKiuVeBe3z6nCRQt",
  "key16": "4b23i6deSzPyLp1ymGJmFKa8evzczQ5b668x7KBCR7Dbda3iCJtX6djE3U5G7CSUBbSt347vuF7LprUw2BHmLcL2",
  "key17": "5NRsAwnxkFVoynuavabLYueMXL1nx5pAvP5ajhLcQM9TcBbb1q8RLx7xaf1DJiwHdHz5XvvfbhmboggfzxGXhgq5",
  "key18": "1QW4K3wrvGCHgJS1BvPsob3XdwifFJpFHAoNvnsBvTeU25vmtXzePWzLp9DjpFyxZ8yFgjZNRaWaS7Wyr5hTiAa",
  "key19": "4gYzToHKpzo1vMsDiGRLtpvYh5bs1JTorHoDKu9KxWpmyquhXtqFDThomgSWE8ajv4P9CSQHdddDuAgAp7drspwh",
  "key20": "2jaV2EbfByEbCkL3Bya783NA88aJXMxf5rGdfhiSMZKyLtrMaamFNgETMgTqUTtWhq74EEZuRfTmUf6Wq313ByVt",
  "key21": "c6x9ZNZGC4SZnhzPgxFioZjeykAMxYED6KjAZ3gyFndDVTQPkLpCsg14YttjEtqyHxgpH4N6HHwsTh2H1BkgLof",
  "key22": "43QJXSoyU8BXd8BZHdgGSNMwbx2ForeU7bqJGgZXDdxjhG8SuYqj62Dkjkx2zmJRTxA5SZ37t17GHzUoa8XU9fyu",
  "key23": "3DBaXZkf8y4T9ewzX34CutE9Bc8Zi4hC5BwU8393T1nKpv2nARfVWRC5RoKFtc6FvYGtKBWdfc45ReavYLvKtxnS",
  "key24": "3RAhi55f7BjGe2C9Mzp8ci9EJhMXTCvv39GgWRL3ZG9LqSsutPQudSBxcTSCMoguXvErctphKiqUHBsbd6pKWJfm",
  "key25": "2tdK6gBiyiHyB26feHRdou5Cj2syaAWH8L6C8ovYz1ynM8dE9dynbfNVLYBga7fhG4987fjnoaWRGkbCbqAdzFEj",
  "key26": "5vuWDMZGukJ4pw3JrRNBGpYeqqPfkR2qMy6BCDPNzGeyyQRzDSdpnRVXdpqZFWtwL7utiDsue7rDmNT35iviJUt4",
  "key27": "5cYn5McVdhj8vE2Kqp1hZj7fhqJWHkERxzLT8a29u6L93fcJy5UAVUztfDM7X2WCgPVcLKj8HWSYBjxaVzomWtHG",
  "key28": "2VX8rRBaN4CMx4VC4uXYsb2NAKdyuUFyu9FdtiX2hPJohbz9SvXveeUGgt36owkrpN15wHvWk3MKd51hdSb1sLrD",
  "key29": "HcJPCenFWLDhnrGec8ALa3KFWEYfhZd6m9MCS5UjbvV5eSBvPGYtPthWe6rdT4gcVzE1z9zibRCKzJ4pqiSWGpK",
  "key30": "2D7UEkcDSLj4jxr1JYXRfgGvjhUZv4jCbMmqqdGcSMwVsdMWhJnPGs63tcq7deYZ2rMAdGnd2y1H6i7kKorj1GS"
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
