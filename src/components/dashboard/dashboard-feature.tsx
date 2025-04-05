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
    "3oPYanDMEPxGbBVeUbjvxPEWDGykvtzTs8qWrtBv7pUiNkPeJ4gdweCuxb8YehnadTSuKTj31cLEPC8K6ZRTxMiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjAcNgceKZUNU1A5WqUwy38DMuLa2TGPf7V1cmq2ukhYrXDmjsjS6c87JknFTsX8No4KWzkwpmcKRfXSDD1cBAV",
  "key1": "5SfQm4eDUJCcjzyXEh1fdeBuGuwsQ5yj2L7q4KTDCMpSWurDREBHrdLBzqSU7QivAHMLvgs719cet3jkBk5GCRTA",
  "key2": "qxPG7wCXyNYJs3bmzUrpkDtTfWMBzDJdtHrX53Z2DpFpRj8Ttq8wiUQSK58fuALnW8Svqgo8gGdiioXyZSA2fMk",
  "key3": "2CGiR6Y3sU89aGqZTfn8YUnw1Vcw1TcGQfpDqRAJY4nDu1asoDsZDnio9TB8BYMUeRwFWKnq3ULfZaj4L8bYAC9S",
  "key4": "4V9JGuwkGJfQDq6RPpY7mvNdfVTcvUJzBKHUrTSWQoHJzmtMf3SctMtMxjiLoGFRHubZ3FKL7egBdZQuiUKgRmgF",
  "key5": "3mR8nmjV3wsh1mDuxg1NBvmi4M4S2AEbafckTT2ZWzPDkDCArRUmtEmjd53UsfL22K38UMGwr7xxEhzrneV8ixDi",
  "key6": "2LW2AVQPBRk7LunFGTotQdCjAARSQpi85gzuUdmicmPAR1BJDSRWEPqw2w9Ze7NZYZwnX5pNcq5cksuZLEqnRknm",
  "key7": "3BYP9kK9B7ELXsv5gaozYNzj6MJm6m9CwQQjssP2bdJsHPpEWV8nKBPhmugbrGxexPhLtzFJqTYUnyRJ2senxznf",
  "key8": "jgAyj8czYkW6txiepJGZnda9pth9a5S8yj3e5C4auAcs4xhws7VS1mtEXSqKSbW9p4uTq7qD7YnxzcSmN9667hh",
  "key9": "4hgkZqwWntCCA3L5Wu233zrGhZLfdFspAaTxBj9vGjJu1NzYHcwLEN1y1pr9qkHkdGsNciVHp4BmKDuVec9M98VV",
  "key10": "5Ppi1GHPm8kKCbCdqob3jidzVk4sUdys8A9iApzS24NLxy9uFxoUDLCW3G178QSYhyq3r9xiDwBuTEmJPrC4hTWR",
  "key11": "4whVWZEAch2G8ojJdfyX9w2kUtvoSnYH7ii3mUVhUkSQuPeXGgtiedQE7WC5BZUmsQFL1sCWLP2qLPfTG6U2e97g",
  "key12": "3MZExgDhhe3dtizcLCXH4PWC8Gs1hYNApdqgtQgRPFtm3Qc23Fu9yHr1cWvtJa8gRCB583TBY3Pdp5569tPpXXpa",
  "key13": "2Y92ZXpZ3savCLk7n9nJuPxBzTfYEWQ2eBGG2BrEHT6YvfUQR9ii3ib5gQP4nrcG8dHn7mtJ9N7M4ZHcjG3ppvg8",
  "key14": "fi8EWFLU2P6EqvF4VAiFLTJfLMtSYKGajyMM8QNg2khwspDMdojFkd7SYm2R7cL2CJ1wSqHd67CA3kkq42xbp6g",
  "key15": "5PYzAke5Y2BMJcRAqZYKLSgnmVY8qc1B2kXpPxMFRTbqCGFWbrn978LM8FKXkSrpkPfNjniS85sC9judHvKPKGh2",
  "key16": "5NVvhoBgfrLj3uko1WJi9eh8YMiLZ553Ty1e3EZFCZ2TAL3JU8xaZbDN6AWTtRQqKaEEQefDVGhS8sMTPkBVhn5L",
  "key17": "2ajowqaY9hYWzzyUP4wXuZDtm8mEuq8ZaY3ea1vJUUy6LH5kvhXpSahmfzEZVHcmvXB9qy32C3V1QJxf5LC6ssQS",
  "key18": "43aTpvH1NLU27TqFMmWucvdruqTmftaZuzWqy53Dy4B8mFo1b3yEatj4JMvsrV7evS7iMG42xds8h3WdjPEoAKQg",
  "key19": "521G7GXCzJfC2ftZ3MMNmvKEZfEVgJmFFhvYpnA7G7HT5Syjn8vbefkwsUzPV896PPfp5QtjoiRokcQUs3883tNF",
  "key20": "2tpTqP14yYtNNtTCDkiE3W7vyKzEpx8sTafJhBfjnQGkN3QPycHGkmwjDUN6CPUVem3oQWoPjNHdHwgCS2Bmhfn4",
  "key21": "3vMgpnq1ZFdrMVLbmA5h5s2Kvxh2RJbY5Pk55oCtCEkYWJZYids54LA8aaJSSCy6o6pnnmmZnyYdtPeU6h5mo79D",
  "key22": "3dqCHJBPouEobBBXDvXydkd7VL9cHNP2om48cbup4xmYgsCo6RpWn9EeJ3NW59eTG4Pw83GunPbu7v4825skCJsc",
  "key23": "32faa6qcAALqEQgs4nU66U5pVKG9ECv4tagZ1dLxg6qLvZR7RmnvABieJSsQaADp5cRTqtXWXpQdA5Z385cQJRk7",
  "key24": "4fjrfvB4UKjNboP8ECNHqXevU8aJmBeJEyyYpUpFbiVR1D4iPYE63V967iM4XpxgoSKEQNRjFnEMLPy5KmcGHGXa",
  "key25": "513hhGMMF62GY6m2h8GAz1Jqw4YdBhgPybhjUj6Kdeyg3ABXjgXoLibT1mLrefuX4aRqjxQLvCoUhZXKzMUnXTUF",
  "key26": "5K21245wAxSqgQ5i7DuwiEMKNR4hdShSztpDrK6fqeFVwEbUWqKSDAvPbioZQu3M97hmMCzqTDDri1p2yXrt8pex",
  "key27": "2cDURVL2bvcphrJymriK5w7EVGKERJfiMLAzHTzZ2Gc5HCuW69cCpdG1LRGjFrW9FSCSouRU1mmHYECgTDtVHQCY",
  "key28": "yGSPuPfYiobVxC5mbJSajfMbCP1bJRrypKHkuyuwhFKVY4vtKagyEPPLvwo6N7896iwAtPYT8J5WnHQ1qbJiWto",
  "key29": "5V13SWRHDhr5VB6FkngWovh9rbgKtfYaqfzjXz8BD5WqP8QL7LNCK7AGzbJ7QHsSC4T1uSrcHXfRaBuKyXpy3e66",
  "key30": "2cuwZ6j7XzzzRU1ha2C46NRymN5PtjHHLUWSrmiVugs2nqdHQQhNLigG7Vp1QHjfzBBPjLPnMV1AU4QyS8GmBjbq",
  "key31": "2FT6J19LfEmwQFWjLZ6hxNhiy13SbL2WPq5HqH1M9roGZ7eYCp3x8GzbvBc7JEkbnEnh4d15sXj3PCBdfS85YfaQ",
  "key32": "2UZmnJEDshwFBByP53gqxKR6Ayj3HYFGKH8Zpn2ocgGX5m6JvXe6oWHyPa3ad1ux1PAeqESfXCrJDkJPxPRL9JLh",
  "key33": "5GGi2YunQTn7yBZsAVH71bHZ8UuHJ5RutbTEh81mdFkJeeMLiz3gAqvF1wnT9PdbkDenCqd6azmeetuqWnuVyq4D",
  "key34": "4vTihtw7gbZ4jCeh24B1H3k6HY2qKZez3Q72h98S4xVRkQLmbD3DxcX1yxYYo9v9sbuwa9cBa6ZAz3eXZH7NSZnZ",
  "key35": "36ktWCceABFLKA2cqc5sgB9jd9SoGzSHkfLak6i7RW1knYuVwXKDhGeQvrBE7KUMur2yS4QC5BerZ2WrmaSSCpAw",
  "key36": "4yB7QrzZBXDC3QJx2Hu42XCxquqFotfA63FMXbkvWwZPd1DKiSBeYzfMGVuUkLkG6kW6FjYtPjM5zeHKH87Mpbxd",
  "key37": "54z2C78gwUK3Bao2w4kf5hWP3YwK3SWBZXFmssWivGaik7zBD3LhEwvZ3imbEf9Wh1khiTsMcvQUVCZcawy36Gh3",
  "key38": "5CF8Kk3D8GHdHHntGiaA2cDpCESdWVLvhW33cR5JMfPqeRQ5116LirJ1F2BiTpLL1bfhxoRBXEMk5cvG3wFzMnWH",
  "key39": "4rRTZNehoC8f5bDrt5esVhhuz6cGBf5wgDygSZfMwB26EJKiyGLXab1YPGmMQFWkXwxitp9u96KxDS8hPBTBoBkd",
  "key40": "4vs8wi8o94xN7Twpu2oCpVMwv5tqCR5i2ngiGxUYf3nzUZtKmKz18u3bFDtBhiT2eWBd8s4EctgjE1AaFXqw23cz",
  "key41": "3uTveKhpAVdBiK4JboNoGK8NZZ8WmniFKtSb4iwjXWZyPEs1KWoLKkTFDK2oWLYzEvMCxuk9VFfSWQe1p4JjDxwJ",
  "key42": "2T5ozw13YCS5kBu4X8EVJVG8Z4kZn2wV9LAk5PvsfNYUUYSsnt8BKZunEymGoev8N9cM2r618jsjhUZLPiohBU7m",
  "key43": "5UMyZuSASUGhgUzvpin6ULMHgUpBJZfD3NbLhPTVw8gSr2DRCXnJZLwf6Y1hYn7pCo5772EFYuuAdtmkJ5jUqcdV",
  "key44": "3Vx3H8TSYfPD8STJZ5jzNfcyJHFfH6ujBuFDVxL4QxUXuyi2bpsH4aNr2PpEsmwb2iu1GTNJkX1vJxFJFtKLsofM"
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
