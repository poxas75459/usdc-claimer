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
    "5TZBTMwxVvQk2YEJm498nQA9ePw9QY3ZS2svmBmATse7MwtrTFdBr528JCDV1WUCpLyNFXWk2BJdEfBDyeVTT1aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66N2DbXUfajYsUCTHGhHqcRnEBg3uiLt9iaeuBMgk9Rc9irpzhG913ujEbPr9Lfjs3LzmUkK5ReBD35QJpfYN2Lf",
  "key1": "zm3W1JqiSKhAg5wrckDkExCtsdsexmtNwEVnZS9tAuDB5HRwBXKndLHvgzsY8MX17M5kPpLVjjvULWBfxWnBpQD",
  "key2": "5udsVqViv5KqRoCnMBEdBMjSaqKotq117AanE8THppaXMr6ndcqVMkuNH4531ynfGcwC9ZznNgaF7YT7Pn2yz4Nt",
  "key3": "ktWf7eF9gHukSxZYdG3JwmcVd1si2QcyBzjhkNRiUfK9s5ym6K68rve5PTgyaxG75FjBMmgmB1NvK4ZRFdWf9dA",
  "key4": "5BMYtrk6jZWVGcE25o76inF5DpJ6dWpArhx1td59XzxzYSegD2cCHUaZxx3qEU7MwM9BiRuNBwZaJFssnRMQYZkX",
  "key5": "2xLCMC2hBCm3bTM4qvcoWsNTjV9DDJWnAAuURAsiaqjyapZMaVZPM8fXvfctAEpcmMKk5obgL4xYK2at5MU2op1i",
  "key6": "2ry8Vw7xx4qrug6dcnTtB4Cm8uAtGf5HE9vsjoSKtrgtkWQJ8gzVx1ZrC7ES6qcy7M7ZE4Y5iFKCHvzdfMdVfETj",
  "key7": "3gxZUqHdHkFhWseSb6VeeGgFWeZ1v9tf9xrboJFq73qumptqsnu6WsvqiUUYpxTiG9H4GxMdBZ9Tnn7RphVD9JXH",
  "key8": "2ETos1ZAoD83c4JEbfBzDfwx4WeT61oK1PBVmEFvjQdJtm3sHYUknirLgoeVu6jr5QSaituuFbQzwWhmn9sZdHXg",
  "key9": "4ovCMQmB83in6F6wjyTUu6TQ2qdP6cDSYs6EWH4QqGP3k1KyBdkzzFQtHFK2YSq6A1UKm9bjB98LtSHib8hM8KVD",
  "key10": "3JkyxsUBP6iFNS7Hcx18VxsD3HwtxvDTfLy4JXJb1FjaBYd8xKaJLtDLySW11cv82frXb8YQreA1mxVob1ksFWaD",
  "key11": "5ptXGrK16Uu5aWXewAuVfuA3PwbB3Uy58rHm5FpydY2XiFYeB2npL4RVY5WGSLKR8ViFpwhjYmhAKPZyuxDfkFXp",
  "key12": "5etLHFk5MDYpAMq423aZf5d5Gr5cLE5uD5Fw5dRmuDQJGQyWfMejxiTzYeUSaymz5K8FuuGVptyqa8HdsiiyATo4",
  "key13": "5Db7fFxpP7yFCo9aZ9E7g968ZJE8zjRH3npSV1MEekG2pSondxyibZt5mjnuFkY2kTBDbFqELwrhov63ifT22mJM",
  "key14": "QeKHD5gZdY2kAvTHXhnjLRriZUjVd2jjmgpSWP1BLUQWHj4J5i8kwpS2mWb3w9QyTk5KEebeTYJpM3TDENNhFz2",
  "key15": "4NrVevK8n4oCoXh2XWUn2G5XebQDXuLzWzYUafaAPTRLv5YvBD993MdYiyKFiUA1QdbC5SHyZXdavfDQ5vCT6hHT",
  "key16": "2MJws7xp6RCLMhRc2sHhPURY9T8Nm4E3HwnKQzCVAeknhd2QZnmQoSB6HZWqS8J267bm38MS1jbrh5NuY8MtzDZZ",
  "key17": "5DJ4APZJh3McPMrtsdZi7hEPvSGk66GV1zCA8wn4CWTawLWPZdbUtrr5g9kPRtJvoKJEdDGKJfFyFZ8uKSKwtws4",
  "key18": "4i6PGvDy5EX1QqVCa5GvHjiS6bSNnCco9HuMdVJSvrij5cH4Zr4iYv3173u5kRvakzV883zuTXHv7fUmHoGSmV1Z",
  "key19": "3YNpxp5NUD6xa37Kz4hu9buUXWKeS8SdsgmioVYBJzTThi8FMq5RmFJbttd3pdRauUwYdBr9LV8raGAW87BoQN9p",
  "key20": "2mzevxSKeGZ8v61UGAGsKHwMRdkgTydFzNFaKH8wgPNsZM7CyRVD5Y7PDZsHZ3ieY4NypjvfcCoNJ1xZevFsMwjC",
  "key21": "3tP6NwbDLz56EYTgpzP3wjjnhXjFSxQyrNR4zyNrBSXwU7CfmfPctyZNxMepwnA76tqEnA6Ga21KogX6ASvsp2Gj",
  "key22": "5dgzQ2i7etAKKL4kYiY1Y6UpgXLR2JrKSUanvfYqvxCJBxQkpht8QoKEf2ZmkcZrAFE5ZjdRHqi3L28ZUwatnJQG",
  "key23": "5qfv3AD3tqkUEbzqi6fuu5V9TJYA3zmCTBBrLQxqFW6VcaMVphJ1V6LRLyPdvMSZyj9XTddc67m28fPgGQjkeUqT",
  "key24": "2QX29nu3enccub6ocpHHzDUjDYSuYVM31H4ZJUh7fpXZj7npiGwjAwZ8d8dDWKhwtdpUTKaWj9iDvPW2DBSdgzsU",
  "key25": "5CV3xQ8N4LLeTqDB4wpMqcLpjErFYWGALHpDj4RaQfyauWvTNj9LXCeDhgFm7hxobyRtD4MAM4nSRcHCu8UDdJer",
  "key26": "5K3LQXKqctbnhw5Zt9TA6PpcoEqgfjQFzWvfEFDqFcG7aLR2Krxs18FMNQGCMkwJSoLgZ3sEH72Fmtanahp9U6kZ",
  "key27": "3T4GdSCYQdo79S4LR1aNEew4nwi8gjnLxgG3kh1r4Aua9b1yx26VCo23xQaf9L6SGqhoNdKDCqNFLdyrQhi8xekW",
  "key28": "5BQGQbhjKyWAjN6tHUrYytaRh5P3a6PE9bAS6K6h5zFp8c2598SSHHmycqsmF5MfLBZ25gYCcc2BcuDPda6JCdWR"
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
