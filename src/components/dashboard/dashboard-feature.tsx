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
    "4cAg7vzhehLqHmddiLfdWyWzCH8DxJGRyMjAUSSLBRwnJUVyTCcaHZBV1HVYUsQbDkjJgmUcWU62qxjWJpZnGYhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jL1RTztbvBwGnR2WSEVsqcZSo35PWH2T5Pd6YXShT9TQKP5vJU1U97Fta8V7DWX47Gh51GDGXWNcBiDXeJ9jSsX",
  "key1": "3fTeeWJHhMq7Mitpr4a7cRH37tH3CQrnDa82DmSNsDyWFgyWoXCaJ1LZ8SsMqk884i6jrKLEWHFcJmJEbJdFzcnc",
  "key2": "2WCx7yqrVxMTrZWBDpaBjU5J6RHAmfbyvutXC5YM9E5DfmzdME7SjZYx8TeqQYpsKdtPgNymGE3Kx1qKoLw96NkR",
  "key3": "JLyL5rAKwe7HkhUV18DFS4dHjVe6NPz6GZV5YKY2gZxymMwgUdy7EYRHzHd9FNdpsrCTZdRSR1dgeX3BHdoktNF",
  "key4": "4D9zURcysGUn21ia7AQHqeJ8UGtfLDGsNFtnxamdckuaAmYZUmfeWjU3opCAogasrXRBGFpBbDTuzyR98bcp5hyy",
  "key5": "5vcuAdDPMNeZ3kLWuJW9eYdntvQYk5EMRoeJKjKbUCBBLQoNz1qRRqzqL5BhYvdE4JqtVGTCLQxeXjHTYhZpH38u",
  "key6": "5vd481eLG4waCqQGUyv41H88RG8GPy5tK6HjyQ7xicKewGx1iXrLHgmvxeDhXF958SgbhAaStUADzAhPGGrARWqL",
  "key7": "5wgSphGRWsj2RecqttKzx2nhEux7wt2xdM9oj2xt8SeUe5mn3sgm3VgLWEm7frafdHUrSox776eWVfR5bsfHhMnA",
  "key8": "28M6f7pyJDRXigjzAjFmEixpaTFkReqErnHvEzP2jcSCC32nL3U8ey4YZtsHqJjX1th5jzSy8QsLzrsLv1hcX12g",
  "key9": "4gDbL2noR3yHwq6tcahgn2c5xcyJEebPrxEbYuAN4h94CSkoi2khKchaD7SE3PcrfWTXRdb7UcJAfrwvfwzMFRBc",
  "key10": "5eB6y9WjhGFpDbkLkVMB2Ch5m2Eiag47Lhu5V6wyVx7D8qrYLECFdHPcm8TvsGv4v5vWvt3b6M5vGHwEYT9EAYM9",
  "key11": "5wCgyTLdi4p5aSN5Eo1YbmrezK2GRtorAGL1YFiUaCEgZPWnNnpMcr5HbH8t4YVVqZc2kdsTQg99aSMUutpMTo8y",
  "key12": "5oJ8jP3aRsu8U5skCPLxxFteJuw4r1p4dMorp6T6AFuUZti2kqezt4nsgwX7Hpzn9aDQhJdkoHM2VyWcGHCgjMR4",
  "key13": "5YGk96dKz34dhNTwwh26TGTbZSPzjxus9hj2NfCS5ZBbN9GBNU4t1AMM7v2jjkhB1utcqHfdEjmD738JEBcSqNQf",
  "key14": "37wKWywRrMdW7fQBuJuvbGFMNMcCpagYVrxGtKxzoDXA8FyFmocrDinjPWzkvJY36vVaVsNNExFsRAzBK2HwREVB",
  "key15": "43tp3ELY3Yonijv9bbbfDgMGQ7KUABtiKkDSr5BsfW9ethwGcxgRmFVP5fK3SH3yptxjRKvdL97JFNVGuNcbCr5q",
  "key16": "3xgL37E2P27hqdKdJePKpBynLpSnQMeRVXANHEQNAnKUq1wJJjaF1PrrrrNZRBtE4u5yqwtZApawsz6Hnosgwe9a",
  "key17": "57E9W3QdtEb11rV259xFcNfC93JNbnANkhvTq81f9tnFYc8MfdHy5AGJQMSmjpYdrr3g1uixKp7Gzvf2dX97RGYP",
  "key18": "2DihCDtEZzMQUjYmjyze3SFZtf8ZgJXh8VfaW9XW1zp7qUHb85kBD8VEac4FCn23k9hdu3dYKG13PdsKMf1JyabX",
  "key19": "AA8dLrgm1pBVoS625j2jEZzNcRLFt3q69tdqz9DBbHePNJNQRDxMgiQ54o2dPUsQXXDv5HEmzR8G9Wi1B4Ruvnc",
  "key20": "4JPavWMQrcT4wkE21kfvzDNsHS1xpowFsVTN14WdgW4ugEBqPDd5queBny4gRRwwLahArF9CbFRpZrib5H7QJ9i2",
  "key21": "3PLEP7Lccbp6NjJibVzxwKVZWLt6dFRjmSqPFfEG1t5te49yPXr3vAKypoVUuas2E2hd7X5kFqSyAmiRd6NEtGD8",
  "key22": "kp9RociS1EQUzGmRTUUB4GM4RGFqDxsHSZXR9zKwBboa7k2puxN3ueyVjbSmfZr4g9H6PC4DuaSUtNXAgcdZdyf",
  "key23": "2RgAd9j4tjSm8A9pkAA5yrmuy2fegb2yMnhSciE3niVmeqQzmFYWMoR8WdFrqqDS2QdLmzEvKEUbj8Q77td6YsB3",
  "key24": "32zXsGur7vjB1CSMYndW9ejNuevg894D4F3MY427fuFnM2odiDH6ZRpT5CpjgpvvTQRBqn7F7SJ6jwM1RToxCAde",
  "key25": "61qdtS8h7SNjTospkqg6xqrQ4BV9rBiUrzNHGu3qJmv4LXAiCjDifYFGKHdTApYAbQmLtD5gLt2vA85CiuSpwYZF",
  "key26": "m3iTrBkYyV2C9K6HYouKDp6CR2R85z7rHwWEDRkc6XMhaguHSqFjDrcppK5h2gvkPpCk1yfxKSHuABE5MLbFJmW"
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
