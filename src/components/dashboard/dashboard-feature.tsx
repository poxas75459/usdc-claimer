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
    "aCF8Vm1UdEHe6pzxqLaUhhQvrKJzW8U5LQ4VSx3tvfkqkkaAEHF9PcpghpQM7BiTH44UfqdAsc9QVKWoPFoxUpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tyTxr7i2xHDbjJPde6dY298HRLVo2ffjQGTFF9jA78SSfF3hAPDwnPAAoJ7EyqspYus5mQcdmUHNyQFwiEWgas",
  "key1": "4KTDrySaNG5Sfc9CJaVU95KSMUiok1zMbiDBDAYQMoGo6V9pgNX9U7hBtpuVuuGUsVfE9PA1g7kYe7LAdLYfKBxf",
  "key2": "5JqrPi5ZobdsniTt39ZjfBPMwMYaxsCZbsECkqsFu6RgshANjESQrbAmNLQNFTNi6KSgsijCo3abXkdYU5wii5Js",
  "key3": "3ryHQ71TPVce2pjopyYchdZxQPyN55X72xo71Lognp7uaT9avBP27HCYPt5WEftXyjp9ogcjAWMuR8kWhAwSFKr1",
  "key4": "3kYUPJAX3dwGmMgASbfLuE1cpXyjENyvrjFYeeFDHr6fYXBiL9FYQuzmqDxAQXD5KzDDrNcNQiCw6c7nobN26W8L",
  "key5": "4z5XQ8NWySomXidpPQ9ZAeUNpJw12Khe18kW4A49t43xF3dpu84UcqGN8rxqxS1sUAUN8AC2NugwAVG82T2JbKdJ",
  "key6": "2jSArJiTM4dK1z3p8wsjMK8UJexBnuoD659TzjTLD9hn2GcziAWzzDh34MQo6vPxeJQaqXWLi9iKd1SJ7UCqFr5i",
  "key7": "J8cEWuTByX9RhV9B1UrW3ECTTeJsGPn6xPEPHMfiPpz1uLkKbam482ZBvLxLqt451frv3L2y6tHP8Yx9xRSxroF",
  "key8": "451oop4EGoHH9zGmNK7VuqsRaYzBViuUDQk3EPtabENRMwV7GdYLL7ChzUGQ2PmG74ARSSSuPVA7ZraVdd7kBqeK",
  "key9": "QE5Tg26PCfMrFUsCgpLTasnB8ME7jsPxwGWRt73dM5W8nhjrBDpg9A8sS9bVxqsQM36ay3hHpeZMeMWbBFe8DRc",
  "key10": "5Sv3U5ikiCkPHkPXxU5yMRXrz5cMFmQBcN2xodPsGiTEbiUWay9VTfdLKRkzhHsL7ByJ8qE1ryry9NhXzmW6mXic",
  "key11": "3b2T3bM5h6aGEknYcdyMrqPd9RGt2KK94yTT62hKTV6aTcSEi2MpaEiyrCvqfdUMxAv7eE2j4yA7jrEcGMSEhs26",
  "key12": "4wpxPB9QmDf8A4GUkqRnMb7z23Jza6hpe1AERkQtqufjZBLtCFc8R1uUv5AyZcG7zTdeivEL6BozbnsHdDHzF8Vv",
  "key13": "Aum4XaDeQ5wk9fiHcqNUGsm5gstMV18adtQBMK1veYdAAHc6gGJPd3oh1WD3ckw8V34LY8E1Mj1EQseKzuruPpM",
  "key14": "5GVfHT6vfUQhCzqDbQNyQT8L7SMRD2GKWhzFbaZpNKJarKLQXDi8cFVhx7oSrmX19kk8U9PzB4J94wnagtUEDBbK",
  "key15": "BqSBhjEAW7T93Eq5MsDeJ83K9MNGvF3bLyqpjDsc2PVjbcQGtQ1ta1VJJxDeqQpNRrnvdX6E157rggTCudVwGTu",
  "key16": "3f2yDPyvn3UaYRTX33wUNNBx9touuKG5tS2jgai8ZHAqgT21AZUF3Kh9Qgigp3ntJkDN9cPSsHPa5Z1Ffh5gz14t",
  "key17": "2E1hsyG42FFJ4jcAyJmpNbKfWtsLwq38mTssULhAEx4UdqWzVuYYsgQWT3h6aK12YRWexnmpHNNb9ZyCHqy7DUmG",
  "key18": "2fvxgYoXzbX5LGyxPW1nKAY832795kQYLEKmAdfrKBiC36cGNwZVBKEPG1Nv1AcsriYNHfNNVfEGtttPT7KPfqXq",
  "key19": "whqJbKd9HwXKBxRScoNxzREtksvcDEJZ3hpQYZ2i49rFkeFkC3ctTbWq91suFr3wv6zH3ASg5JvSsDLCBZ1sDHA",
  "key20": "2ErYuNekkvuqXuAR5LWQ6wCw2bFZqf3dVhZthz4QSL4xP63dnSacXRPEZTAYkm2JmsvuPZvcFpD8UG62PvBBU8rb",
  "key21": "4QNY51A2mRusQvkf2PevRQdeUhitaResHB6ZRixhdbYcvdSFWQBEKv5ZwTGMZArLgPfmcDYn3KvrPz7vfAQDaTrz",
  "key22": "w5o9FAtEWiJ72XVRJ24g6D9kJSpGLTcfVvVeHGteZE5XgFHMpT4GBLsZ8bYw2L5bQ3GGouQ4CnHqUyfjLU3Htpc",
  "key23": "2rE75ZJQ8bVvWEKH5JnAgDeHfqww2YhZJgX9nbfk24JxqaeTf68K6yxJM8qBWWBcN1X5SATDwcFNgJCEoFHzGeB1",
  "key24": "39yTy7LBw9JQAYPpLG7hqMPZHNKNREnKTxLeR18A9mKYBDhXDjvdnUfyPKFt6RvcT2VBtRTSqEwFmiDbdwxxdhLQ",
  "key25": "3HBm9vkL1sXSEf63JiRt5xcg9PRFiWQkZ4EFSDDaumgetSDVZRUZ3zjTbVqGnB6r74uaEJh7xyFNhN8wPFtmNNqD",
  "key26": "NAVmBwk6oFduP8wvFThYCnENTGa35ucjJTjeMs5zk4HzJ11kgRGbzBPS5HaiK4aGHHDeZk9o2B8fc2uAhqXGhW1"
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
