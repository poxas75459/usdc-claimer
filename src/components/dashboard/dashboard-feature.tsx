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
    "BrkfxGBqQqzyEBdhTXpKYAm4b1YrerXMPqJamrrws4wVFsWUgFE4UA5oEioT4jiiJXJ28KoBw3WZXYdq1tYxo7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fEW5sqU8QGdk1WRmV5oNkpUuRu5v3Zr2R35TYrQjsKx31asu5Sxv76ST4JpmFXJoBqyM1293ViTZbQM5k8qJTJq",
  "key1": "5uZ1BpmPCorHvpwzxJrRS5BaAAizHpGoqYAGW2f5EQnD2WMp4oLkhvMqikrQJYd4LH7D4nmDLnvaFiUUd2stoPHz",
  "key2": "5eHktVzvYp5EhCTwow2xHhHwFzvkVaujzCexDL6d2AztNNAKS1Xcob2JxE4bvpcfiJtjfSD8J7xHAng213qE3WnT",
  "key3": "5kvawgAx8EJ9WgCvNJgJvL7VKvadtmUvD4jGZS7DPemLTssEKveE3vK9Up9Af8aHJzvXJkEnx7KXZ1W3xSiSKNrH",
  "key4": "61dNKThCzsuPU5kxJCpHvN9eTBV71ndqnXMge6moECpcaxTBrVyCE3PLMUtHPmhvcDaCTz9tJRxV7YUNn7KVazvr",
  "key5": "4XLgL5X1JgCgphud29zGcZQJzPhZ1Hk4HaUJ8Bg5FZzJRP7rpWA35cnuA1vDL1T1gFYUu8UezJAQXRJcvEfajqhT",
  "key6": "23dwpvTjfA9d8qwDp1mRYadLxCXXw7tiGYXJ5EwAR8EZykE23X36r9xLZBjrT4fh5KHnfCyJhy6ccjt5vWdp85ze",
  "key7": "4BYMpRd6TPeVcQAeXV3Ltt74qms3a1T1FxpSvAkRDkkmW9J7N3CNsorWs7pCzi82myfoWMzxqU8jYzxPok4fEESN",
  "key8": "32zdS7MT6DRj7jrLupDrbChNiAw4zvpngp5ikjfuCAovKJ8kaVzBtSavyoUnskNzvBf8W2KC4PDjKLhC8XMQg1sB",
  "key9": "5RsFSw7Bu4WiBXEPh7uoT5R4yL1vH6apGf6RotALvcvz1HqQirTKRSK3CPgQq2iLs9Q4VDnRiQypze3yqE4ywz28",
  "key10": "3jcNPTdTk2YpQWXqgRo8exVJtJbUWerRvEr2BZAEign43DFhsp34qfffokFmPXJ6TFTe4d71JLy4SExeRx4RiWPf",
  "key11": "2BwemWaNdu9vCLevU92Q7mud4y6XShEAet8MqLAf1X6XDbjZkmqUgvLe79GbVYNSf8Ap9MzDMV1zMExyhwpNirUe",
  "key12": "4AoKNCA31eaYH72DvWykNVN3sb7BnSv2o3QHtcLBG3VvnUm5ubi1Vyb4fEbHP9oEeoWJBHmCoTY69sYu2wwSzKDN",
  "key13": "52AFTtHH612Vk39JjTkLS8Tq4jSrUHetma5zT345jA3KwQcLaY4VCRerumr3K3HrCTcR6Eisjnvn7o1mpV84J1cf",
  "key14": "45zkxHedBQpPei4Fm8NXca73gsFSHp2EDYt94nWWYbb7KU9ReGziQjhFiNqDeF6kepXnnc2Vv5jQkfsfQTymH2g8",
  "key15": "2o9qo4Lua6aB9FLwz5tfgS7rMQUQhdZ81wWCsij7SCmQZqkZT938Pm2NV1hzAUxPwv8fru1xt3KxtSA2u7tm3ntr",
  "key16": "TuZYHDYZZSXvw4LLAXSXUc36Txdh5CNkSa1rRKFzb6C6NkTS53gUzHqMu3ruFE68T4QxbQixDDGTaNDu1WdhtQG",
  "key17": "34Unnb4fWrNcnzGwkv1oWu6rxLzX2uoyDTY1QDffF2GyxXt5jFoGLwJoVRPA3QWqsxgivcPQFCRTrG2rWs7ae8W6",
  "key18": "HD3Ltf5jXE5EgbnQzAUTQ9m7eVsHCYQ8pZqL1Bp43yzMVwzPV41vEU72kbVDHBc12EKyQjb3HfVQKTZZkjsnE5j",
  "key19": "2fFfHmukh1Wr6JfGgQP5sXrY954pGgvm7SNeFompbCgGzpRvZCHTtDFUmKVrBs7rzvCDgA77M92ThGyuSR7snyq7",
  "key20": "2kkfG19MANEyzRkmYFAdcV2KPp85mdjh7UTanfTXbt3Q2zwtXCFPYeum2SCh9L4xWBt2vXg9X8y69WawocpfLn3w",
  "key21": "3SoJxULJB9uF8eccWmD1oJE1vZdGqn21oXgGJ92ZHBkCQiYYfmkxoo7nEKiqM5ZTtmL4FFEziFYQgfctjistVtrk",
  "key22": "5GM9Pp9XMyGaVVY3cBBgvgPDZCmZvyXhQ5e46jBV53DU31ufGq5nKQ2hPe4MFnCPT4v3v5do3no85ienjQ1FP73R",
  "key23": "2K3LGuUGtbaapsn82WDYJq451aa1nhRgYAx1V4mpBR3TndVaQTRLTprAmRZ3M3v4KMmas88UfparKNNXv1aWHP1E",
  "key24": "3rqReKcUBgHxd47YdHvK2YTudd2jS3KWwmMgqmH2Y9rYV7MocH2bjPiDm7brHKLMAVXwoGi63WMpWoH5oC49QSQv",
  "key25": "4qrqPkAGCv7kqqzKnL9evJTTwU2sgffF6h71bGyz9ftXKa7dvi4gw8gW93C2Dqosj7M9oGXYYrjt33iKCebpXo4J",
  "key26": "4ugQcqDSU5bAqerzDTuHaZ4etxW1AwwK3D9QLK1yAnbsjjJWtubpEmCC5HM24FFQ1EvDop11f8Tb2ZDDbsaeQRnP",
  "key27": "5veDWojqnVNBuWSsAiwPYGM2w1wbJzjUbh8gdPPTrUzGLLzdSYEVfMCoxGbR6PRnxbzGfQ2b2y6VsaEEPwTEvQ1p"
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
