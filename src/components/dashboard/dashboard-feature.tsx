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
    "4FWhKzzSqrUTZaVw1j64R2S7UjFBdtFS4uKLE7u5m9x6tnZJXH4a8BfMXeA9XnC7rbP2f22jnNQf5nYNhSabnXJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CbdxSwCbrBv9vM2DK15TDgRCeMqmTcrdpMRjNpXVRizsLBzWPzmQfnLpriGAf3vqzW4Rn5PcHSnAZFf34ARtWQ",
  "key1": "4FaYZkb8c4uBohCY39m73EdQockAwZTqUr71Y2MAx8tRL6L6LNJHQ2uhqgEGTxZKux9AM4oGCrAMPt6ayK244MS7",
  "key2": "5rRHhnyJerktKJXafYCkrB4NAD3UHtybVz6f433gDt82P3UuQAQYaD4LKU8kTtZSQWDDrKwnQ5KQ8qyFcQnoDW1j",
  "key3": "3jbvvJGp8R2dEwU67TnzvHa1o8pZ7iD2drM7hRU7c7jTdPHef1roETM3AhFbt2bHPu71YJf3ALq5FGC7tMsM8TPU",
  "key4": "5GdR9TckEpyqrk3CtgPbcuoB888caTDrdYwAc5Z5gbnSwHRAXJvsxPTefc2jEHWFEjky5FHkqPNVnMFkrsQd6Uo3",
  "key5": "3GrNpf4GQYua5Vkj3x6EsMdzUZaUYZSv3bRSoaxmrcwyK2dmRfGVqUA2mZU9nXY5c44xwwtc4w3zd9x4tUPy4kwZ",
  "key6": "3yhJ473SdxnLzUCiidESDSsCMWm5wLCY2PLptM4UDY4ndRqdtebEohPmTnaTBuzvYfPv4trmeWGuWuvksYNbVy5A",
  "key7": "5KG7vMRobhGNpc97oeffLigjwGVstaeMpkyeHT8FJBKMHAFpVjx1BC9HGVuqDw2ieYeRcqucSim1YdTN3cnh5ejh",
  "key8": "2EnHaX7wJ9fL4BbVdZ66kr4Rkz3g8dEpquV9ksZwPwKihW6Ki5xti9yH3L3PHVFpbDG9ZGdEdjnn5cMvtPVcDxni",
  "key9": "iP9uJPioXtAXT9eX37zw7uqSo61KFLehGfxHzoxQMM8x13iw1VQUQ4UHeiydnL8k3gsXZcWZ2ACwCfZ16tgDtjV",
  "key10": "5ag2D7g2MtN3zyWLoPHrdXEzZFeeEjA8Fqa8vYWpS5mW8e8N2TNny3mJpAnnvqy9X67u5yAKisd5M4WfVXwsSMdQ",
  "key11": "2tz1Yn3bMFjmL8ofmLrBYXZeQsRrsDURrSNrrxRbvszfHMvVbFDqViBgcHzmKbpVW9q8P4UqkKuVtSWpFph9jQyf",
  "key12": "3wnaKvCk2Y16UtgWijMqZ8fLXmbVNnXZW4XLsZXybhQEXMyzFhDEqUXbAcjDjmqYsUmgmR9fgpqH5otWSHnbLk65",
  "key13": "eGw9WUESfVYvHg3QGLD5hU2PDXgvdAh4MTwANMX5WHudayi24G5SCcTHGAcqLaXU1o3xfbNsuD5WRv2T9KhxUYM",
  "key14": "2g6h65wiG5syyiPBd9WVP5TAQtYMzEXrRYGb8WYgHJkRvvnPZtyJFQcSMFGgxVE5dqH4QtSbfr7GEbctZPfrprTt",
  "key15": "HRrGSEd3ruMmaBZ8jmj2wJm2bPx8EaAyJkxSfP3zcvB9J3iaRPuesfNn86ronG9AYR2hV8ezYbKPcAdp4q1JHkA",
  "key16": "4VZjncSU7oow1gdqRyQwbtvvp8F7yMh9JPfLxsGirknhxKHVsQKkMKuWTKaBn9ES9P86FwXCghGNUuJPsj5mcwde",
  "key17": "45HPWvefsrFrJ6a2eJcisFtUjrVvdQgjYComXPsvLSBkCw8za7rXsCwzTihyGYoo92xAjKeWqEQ81h6WzF2dHvVG",
  "key18": "3ybWkzGZhne31GbyQYJcfzJegq1QUvvsjjV6RvGTpT4UUD7Fv9cjCfHJcCGxbLqbjgCv1rGM1qgyLeHnrR1KZvUQ",
  "key19": "4CUySoL9UpBbceMwx5V4N3jBtnzarv6ZZHnMGXYkMEbaB1sHLeRKx39tpnUizdk577sjYQhJVBt79EwPWejDiqRd",
  "key20": "UKu817aUC98qADBreNHbedjMd8wUtuDe7PafqYnwynNDF142k6stAjLNzYfJ4bJejFhwiQfPrhvHG5RtvDPi3pA",
  "key21": "ZNTfJsm2xcd7Fd4N7N6F5qkoA9RKwBQVV7WLkmsRERiamGKjKxwQVmpAqGoh1eJQBBTfebUEb5WRnZgbL5HHDvA",
  "key22": "35HevKHJuXPtX1VX8mV71EFfbJ2ZiZBEVNURw948ZQCygNNmDywgQ9TomP2wbnZssqPmTZYa4Za5iL8p3gbau45y",
  "key23": "3mnzLafgW7uJCeZ45MtN64CcVapnRaxoLm3SCd9wzcPgTPSFwFW1aPjJzG9R1CxNoFE1gqmFSQd2T7r9dSDcEwJN",
  "key24": "3pMCueZYc3ADU8RGZfnLcvEZc8jWpChHJAbqgCedFxvGE79vM5z917bzTvQ3Ngw5h3kvqa5KwQVsEnJKMXeXCozZ",
  "key25": "rSgTbX9WXw2ueuDGpcp37UhqmQcqYkgBLJ4qxb75KjBeKwHWANxTVzNCNfy9xkDeBpinR3isgmpdpKDmfidzp17",
  "key26": "3aSMRzghcyTm4sB1srmsnGU2ThbdoYoePcnsQ4yrvvyNvgfERyTP7R56We2Jk4kGoNAdtKUuR2616BXpuwQE5WVe",
  "key27": "2vyLzSS6RnMKd4NRcuF5tRydSrMquka7WsGgUhcZCT9CVyZzCf5RDhvQjN9pvBddg6PJJEdkstHm2t3DyGYiuFYE"
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
