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
    "5GKfp62AxgDdFNXir4RQvTHCHuJxM7XpTXw2SZtEEbJAYfJ81JzjcMBb732Fyu298LmM6VBs9DSNheBmPX8TUpq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWpQp1wmibFSa8ZUZw1ETqMdZXA9nNcaHGXtunx8JxDeZ4Gwg1NRA3tx4Jg2f2wuNv7AcEscM8TYwHTSYXSUp4",
  "key1": "3w5GeJfjtk2rkwewujnoN4EBQW6XcC3RYFijeQYMhWhePWidoVHQq67RNSNRerhLKpG437PgcEjEp5g6oR6frbe3",
  "key2": "3oKNo2hVoZRwARzMV1Z5uHcibZpLMShQ9zJUMFnoG3NKHnRLyMqz5edaLgbPnmoNMuzt35zoV7hrgPqbRDaZNUZg",
  "key3": "5vUEsjQoCLgCLrRtZECjNxpwbQcNbdSNrjPo6JHen24hBQii7STGDK2ZnCUzyHnouKHRk7B7Xs4X49QHrTfSv8ii",
  "key4": "3vYN9manEYY9xoHqX9Vfez4KkSkriRe9hSATTvxVeiWAxSYCAbseezEnrjCFsHh4Xfdp2Kp5qisQHXAvoWYX2ksn",
  "key5": "5oQrw3rBfDwopprkjd1LFqG3stRxFKNSsrAHmirsJx5whshhrzF7K6M6ZPSdJeAab4fpMTaMrxYnL7UtvoZWPBwf",
  "key6": "5HzUpozFy1FpG4YzFMe7KLQnebuA4H8Z3Z1RFSXtY5UMKQ7CAnwSD2XyB75nyis2hhpSpQqLQVLYkyBF5jS1RkhW",
  "key7": "4SKLxyWRR78SBx1EsvPFXUpgaobwEBw8vxi4kj5VPENvtcxEoU7N5fe3GzTAaYzqSXmabZjtBj4pZCA3du6SAmCR",
  "key8": "3ir4gdnMUEnA4bt5ZxRLbcSKgUR5ZF3e6T2cabkE8XcUTEwpScsbLGfHbAfxnfGtWUDgidMLHiEK8yXipcx6WkCB",
  "key9": "PEsGkJiGuECUXn5ShNpAh1vdPSgy3CjXz3t76RDoewkVxm2kvr6wTsd2QEq3cEq3XFbvjNSgRE72RfL82xMQw5w",
  "key10": "Td2VkghLf8TNPCuM5vFtrTTt5u9mbR6dYTgHA4PYKbGBG7dpj4UcNBWDqWsFamRZYufYXSeWXvTSH32UbhEhLDv",
  "key11": "2VRiSezN2Pi8xfGSSePhC9sawVw48ZLpERQVGKSA8L8C1PGj8WmzVgvhNECKXuEjD8kudkdZmdiz3cdTtPkZATcr",
  "key12": "2o1yDKJPs2nh7ECMW5ironzu9eAwR9bDGv3X5st8XZkcmuozW6djmbJAxTpuYTxzBdB1r7aCb66tPjdCivJ6tnL3",
  "key13": "3vZDDbBj4QVB9kQQgZxVZXgACrusuTJ6p7pAo3RY14fgZuLbeSzLTY8oP2SWHkg7n6SEEdP6i4Roo55pXzY6v3A8",
  "key14": "3A1QSCRRQPwwYcYxuYjMZSSuxD8qJS91MCJ54zZ1KVpygh6cR4gUYcVsrFLQkkteLL1JQ74ZeTQWUMKnPUQ49s3u",
  "key15": "4w6ZVFqcY2JcAo2VGonHyx9SU7Gpg1JANyk5wQB5xPhhPnGUrr6QCVa4C7LjTZEgEgHw1MsgrPS2Z1LsUgEnNPGN",
  "key16": "46ERiK1UtgYHhaLf2sX3HRzHRVuibdxxdXzthqj93AHhKugxcTSJFKbXMxK1txqMa4TTJTrvWKBBwTBieyKY7a4t",
  "key17": "2nN3GVrqEn4Uz48NPWCU4V7xF86XgHotzDtBhS2ciasW3atDqzEQ8kZAQSGWCH6xn1EgHtQHEnVqT87kxxnhbDPw",
  "key18": "2QbnP4TjeZsMAhNXYzTHkqh5nCC5rqcnuuUftkhhBP1hDyNF8AeszvzfzV8efrsGs7J5CJh7ZCVSqviU7LfyhAXL",
  "key19": "2RugysUgfmPBbsZoe8fzf3PotPav2PFGSr9HQSgMS9EyFL7Nc7MGgU29sbKcWte4TBVYXyVLq2dmzehnpoJ6Fhy7",
  "key20": "NBGkeCnE7nXGJ7nVhXAXFbL5CJAb8TuXFci2KxLmaUUP1zFP8YBQNnnMwYHdsb93U4Wg7Buz4Nrk2u52w4HLPgd",
  "key21": "2KMEmXaybYwuM5Qw3a1tQC7XLbUu5RNejuQ56H3VtCb9zAtv1C5rJwHRpKsw6piVfaKyYiDsr8hzQM9wMpjeJRHa",
  "key22": "2oLFN1NJb2MsTaeCL3sWg57cHQq75GH96cMLBEd3V2zqCgVwmoDy8u6iXsZL7NEzUZnTR58PRyJRRoEgELxia3hD",
  "key23": "65aUwdfYRqwoJ1Kgv1UKgPks4Nvi3MUWxA1E6dxMjCcdqLge9Ri6KUz9rrDZQQWeeEJZnfue1gPeixSNonSZQ4Db",
  "key24": "4bphHKevSG6ggLHnie2GJodjEMjk76T5FG2TLAN4fMuHdZST8DCoqNS8rzdVy9XttKW9RwV7Lv5SuiEAdsxPQQSg",
  "key25": "f8ZghSqq2Az3GY3BmGQx4Mc4ErtmBaXrxBjaR7J832AQebYeMiHQ2fpyLBP8o55JRqjnHywY6LtQFAxeGRaj29c"
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
