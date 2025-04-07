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
    "2SJ5rf63C6oTxheBm3uxy3c4L6ZkGbxJiuzfqtfJP18rXxq4MnHLHekKZUFQXqPhkP7auJzBqkazStE8mvc8ZGWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwdvqSxXUfA3g5XH9qP6LjbbdrDBenFqx9HwX3QjHiJbBk6cizPNyN1kkEU4pgJAebTKdAvmewJoUSuPiLtwLES",
  "key1": "58sKGcbC5koHC6gZV7oL6t6L7G3RxiAfGPDx77qTqddtjpaYJcHVgMfcnaU7V5fqRU5qyZQ2btatNFiiCUb6ZzSc",
  "key2": "4dfanRTCVCZ772V6hMCyUZcFXtaaM78XkQ2CYbRckEpKnRLjmLvw5Pu7ZJah1cvSNPKZELwo4YYWHmxukJWiXeHs",
  "key3": "Rg37EMAqURuLBfS9d2tZrsBXzuRsWnZi7ftX5LgCwPaU7jB89wSJipXTNoYbAUz3UPyqbCFk8dB3AQr99wQ2ivH",
  "key4": "62WgvUAotEi23gAaF8ALCTChHfULoivcQg6qMzWD7rcocKedPip8k5Fh5q9QzCzT2akeUaapZAGuBfULoTRhw2pi",
  "key5": "bLeoA8HQjob6pKU1B6BoWHmhXEiMbFtDhRpwYU9SB5NsrsTescxH6NFZo88vKogwL89522LKwH9fCbbjw2dGTmJ",
  "key6": "2fS5Ehcb5JNQisE4yqYhbWN7kYkWjhKje9yuhUWBoF5uN2gprpSuooEA51BA89MDc3k3gRY5HfmA3soWdu8Qpp26",
  "key7": "3z5c5kQWrsJg73wswoDGdWJEmWm5QZW3NCMueDyX6kFCm2rVgM9NxATGNjTFyyyUpAB7Fh5cmp9dwfiiZ1Yy72nZ",
  "key8": "5AwbtifgWp7TRtLXMXUh4mRUs47iFLyKTBsVuxAkRR1ihV8nYsmc8W2MV6BEvDJBRPo5BuAuBhb2KvC88d4LkkrP",
  "key9": "48tnNMS9qPqYprULkyfQL1TTNuw2FqgR6FaYEL6VWLGtiUW5HpBT3zcjKjrLT9sAawPtNPU5jZNViovsu25R7iqu",
  "key10": "3hi4nMf9Ap69uj2HjyNNHW28tvkDALA9adaQdKs4GbFY7ot8RYGzsLDeA3jtauaBrPL8k7FSHTt2bw5fv15FpWs1",
  "key11": "3KbEcbaVJDboMSt2pxiL3e3L9PAGRawuSpcDuhtpYFrmgSwy5DfQjnqK9bVnk7EDzmzZ7UNbSBQTMXoJbnVxGHb2",
  "key12": "3a8kYVkCPaGYVaBR3CFpYHGhZcbkyHmmouJeXUKoKrmANTSdXBs67GfuxoGUAtqk82jEGiKHj2RRYHRF9TqR2evr",
  "key13": "5uRcfjLDVoxJUYDrCggA9xGHLfHY4jZnysZP1AEDDHgDekaurnxGfb9TuGnSn6tHvREDrH2EjtXfnoaDDJpcn7Ep",
  "key14": "XGWY4Dx3D4LyiHJJawNod3hVbqZZaXTKUHmqXpSDoT928GstuGxZxf6y1ERQtJpGUoY2nE333ukNKQwmPT3w1q3",
  "key15": "3Uf8i28uL5mnoMAXeszdFPqgXjTQ4gY6xP7saKZgfVs7Xnyrrysi7UbBnenFQuszAMejZZFoE9UXsp4taTEU8nqS",
  "key16": "4TpKNbYoTX8Gtcsd6q6g86jaKMFXr5C5ACRF5R7aYRS99RVz93s4N2Rx7LUQNobsAGxuHdPiqPWFvBaYYstJFXLi",
  "key17": "457Yf62amzg1iCa66GpromgqyoDr7y5rhp7zyUCYXCGww2xM6xGGWC5RGBBojt8CfdStfeUnx16zA5CeGDRn1d6C",
  "key18": "2oeM4LUacP2v9WDXepKhJyZVfzUQRxUZSzvgzMPguimyL11ad8Kd5T6Kuv5ich1tCpXtSxStJut1s3nrmiGyGDtK",
  "key19": "5AYK2eUZ6SD9FiuaxkxcpRTos95Uo2iVJyrDxLi2WK9TCS9BKMRGuARCm6a9kAiw82bVxT99tPk5wSYJj6EfJrQg",
  "key20": "5rpHeoKKoKP9dHuMrPExVwy3MsFnPFhhv5QTT3HKQMhXbPBRSbH5An1mwKApFTSde3VZvU4BeJPWCtuNAaFpfv2E",
  "key21": "5b7Dzxgj6tPAzTwELmUuteFSNaAFyYMwpv1s5PVvnos7WBeLuWvjK77M2DUMVTrTmpFu7Yrca5BjbbEZrsu2SYeP",
  "key22": "A6hujhCSy7MY2nxXyQpVGxHQ3X7F3ARBWj8a5nwXxBd9BDTXV6cH8LBocLqks81DssBxkHBW46EaGZEx992tHSB",
  "key23": "2B1b2QXa2JK6tA6mkxG5kATgW7nsotN3w5LoUoh8yfsCgPDQJhqJgUeVa3vo6bQs1teU9sYLyiYBtADauw4F3yck",
  "key24": "3askGjzJGBPa1dV3L8KjgxfcG2GkiHMsTxVt7rRoC8s8pUhYQm2ZBjnMib7AV9aZiExdjnBsXTgfdW87rH8TA25u",
  "key25": "m4hMkzXkSr3wxWsVn2M4UqAw3r3UwsDXsg3HUGrp2xvBDKnkkimjdJs6cChf3wnxsEng6fKHbiAtXwQvwQoU2Jg",
  "key26": "31w6hX2ToMzTvryk6M1THFaGycv9a3CJE3E9DAghYRQWmxqn5LfUh3tnu4C6dNS5NWg8ac1D2HKDXr7BwhQEmqmY",
  "key27": "j23tohNJYQVYJbFCL3XiYoSCZiich7UFgSVPW77qvR3TBMiwpAgCFcAeWE5ZcoMV9qwsQw37zpXv4VrsEswphBe",
  "key28": "qZLg8xAW2amoGF6cEvuxe22swVcu9rwsfJzM7LVwMkoqhWV3fJMrVejQkQnyLrvxxRggqheektBL4it4D6F7AZP"
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
