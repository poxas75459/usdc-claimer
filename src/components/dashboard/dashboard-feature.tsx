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
    "2HqAFdT2ui21Mer8wA1i1r6f6zmv9FoRaYWELi87vjjfATLEA6ZCGGuDGVfu15eyag9oCgfPVdjYfrbXMQyaghGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cvCbXubMWS4sJLATAnLZExuX7FuP4m7rEwdDMNxZxdmHegEJJt4hCgqp4itWXyR26hpvdmwQu5T78onyHMtPjW",
  "key1": "3PmGdWh8dMXk4j6VpoXn7u9qjjfMNDW8qKaygA6dGyHDniZ9JxTK2m4pm5vqmQRexW1VWLT6vvQuGuao7P11EdWk",
  "key2": "5wFF9Cs218xMdRVYqPmJ6pUMPCSySDBazRHonMvagM1y6BCbch7EmZiQdbYsHh5zy7WX28CyqWKbRJR4jJQ6QULw",
  "key3": "5tQaoUAW2YPS3ckpVWG22Pg3BiEn9HTfpdAjRjisuuv3fkreLgcmFgo7C4SArU7uPR3H8vKD6Cr4nQw7Ys3bGH7w",
  "key4": "4aXtFcTSHwn3nrNv1iUutVkYM7X71mijZfaAiQCpNwJj1CUkc2c6c5bB1tcwxnuRguYzeDpL3zeu12stpZBF9dmV",
  "key5": "58813ySudinNuYAapnZ6ere4HnyAsGbKbwxCuV2FBB2yzrKVmYvkYbAbyzE1RQo5GfS8nv4WUZjNseqLeDreMuc8",
  "key6": "48hdjfcFSHW6jsdim3R3eLHCxDdBYJduUm135Q2yk5nnvbKi3wsMmxKwNHa9XNmFqmdytbXdUKuxbNAf9hZZA3A6",
  "key7": "54X88Xk4S2MAq8xWrTn7LwbiSLkz6DDkUyebgeCguRFUmwET42ivapDh6TKHpmSpMPFCLVXuMBXD3GnDstL2Urs4",
  "key8": "27rndyHZAMYeKEeDehcqCSDVbETXRfTWsgF2BSUqApk9Sq3qUBuumBi7oKbu3RWTfqKMWGceeT5fxZDzw7Rejc5k",
  "key9": "3VtHPGnhmdBkMts1ysWEhh4AwBQBQsjykytLSKsRZ8mo8ie8pb7F5i4CHLXgSqkymMn5pR4Ae1HnP3zcVZreczix",
  "key10": "3hEu7aPGVzTKccYSTTm5817dqFtkFjPiw1QxgkcirDHh9G1LQfE15xjugPcVb6zTtVHT7uJBMTiW6mXdTBz1H5ZM",
  "key11": "3XFzfSDiqMkZdfqQ5nP3x4pM3DWBvfMnTQsj7X2CPk55Ld5ry8EimdzbbTgMGf7HWJjHxcP1wrkZb5bbBpi6qu84",
  "key12": "3ybCw9fNasPwpAqf39MQCRjvbToV9TAGvud8tvnmABWUND59pJU4NLZqjMmCfjenNoZaRwuQsjL3biXuAY5ehYYn",
  "key13": "3b6oUY5QVjCR9y7Am4eoMiU4bxzc4hrW7cctEGktcm4QUUjLXKsSq8W1YVc1x97aN2SBNSViK6d4Uz3ZG2rQKm6Y",
  "key14": "5YW9YUV18u8NaVBzeuZdzPtERQMrdiaw8u6MVVCN9k8vRDk8nu5YtnGWkzMtEydVcQtr34A2wpPEJLvdRFMYRfHE",
  "key15": "5ZK12QbwaxkKKP4f4ebJZM88STaeWhQRdx5gnAaSAqNBawB66VjpiMcbnAWc3qymuyBAHcJWmTVGs8SzRpsC1HyJ",
  "key16": "4L3RbMs5piWU67oqxHT7rtGuNQxJSs6bVLP1XGMHGgAVwrsVh8nG5YkAAr42g9Ci8W9hFSmBn3YFKFpeXwiRC7dP",
  "key17": "4pWqz5vthSHaTiLeYPUvrgJAyuGYpDTDPEVv4qdrnkk3sJCNM32fx62niwg7Gq4poUCsD8H1LR7Y6MrtvYXhuXA8",
  "key18": "27SP9YJ6e9cDat8PLDW1PGBUMwTSQPdAvecr7sK6zRKuczmLh2batwAtimy9wUzBV8FyqvPMr8DoKA2CPHNsrP9e",
  "key19": "5yzs5tcswuZQwtpvFrcdbpeTM7XP9uZhyjoaU162zkBg4HDVuvAZJXWhevHX8GVoPgP8hPPicYDJvRBujrvk6uZf",
  "key20": "5fieynpwtHucWmiNSDLvuWktpTjiqT1Ty64qpvdqvyGAmpHR3vpMDy7HqaurisCLBqg5edqZKaDbhWjFfrxeewwP",
  "key21": "2qF83kteARJzBZraLjzJWsxEMoC9rpytxR3sTES6LBbvtgAmMEoPtAqWPpeEf739J98NMpj1saeon5QVT1NfiP8H",
  "key22": "24wt1JQv84LYkEZxPZTfzNhHecWru2aSWDkJme6tA1RxFNg3PLMg2xxFw42r7Wm53YiP1dUHYhP85PnAQASvAfn9",
  "key23": "2bEsjUQTnqx6xQYTnqfyPsjuWWnGPYeZoysagkrvse7zindKtVP4DvqCQLP6ysPJnU6QnzLSLLNoD1sWx9Qa8jfC",
  "key24": "4otsru6TZjfGFS4RjQVsZBC4WngXYgDfvWedQPoPPriTvGFxK994nPiHyDUZiyQnsv8GTrKuvZrdAcyLt6FZ7zRU",
  "key25": "5DbU53UpGApKQvXVCp6zGhjF4M3U5DBJ6iPvVNw9bPkymvYPNoJ8GxJ777z5e59YAYdibmys9XsWFT2UmkPBRwC2",
  "key26": "2g1EXE56FyBrGTvz4ynfXVXhc8iYDSsHFbctHHYWA2EodFPkoUduYzEhCydcGZTAioE3pBhY6bCh1VuZ7HHMQNiu",
  "key27": "5iw8PXLAxWbRCWy21xKErL6p51sfbpJT21AwWCwLtngauNomkCM6PoaWmWMfswuzkT22Z6y4sAYUQgfVzSFX3FBw",
  "key28": "5LGNwC35PDJjyxiwUwapxFsLyduYhQ1xfUDnk3TKVG5uMY22guT6LXSnaW4KVo43JzZJJxc6KiZTCVHs98YHAJVR",
  "key29": "4xbrrpGy3TxW3TFdifU6cyHtbAKWmrrDvEKtvQzGZM5ws3yqkTBL2AncGL66bHHY9VfetUR1FE6pmGTqjRoti5ze",
  "key30": "2BPDoDpZDTxZsJHM32onnYzgRdT7pmb4icP2tZAFfD5RfEJdPf4ggUS7Q4wF3tUgz8Apvu1wJnvUgc9em9jc1esC",
  "key31": "AcC9NmhBUgSFhLYWoorv1Gys6sitwuf7JAScuqcLARiCqBfyS2uG6uNn1hDWPGLk94Fh43zUdBvZBr3ctyspkhf",
  "key32": "5ZXVpJEWKFpcYBTfycUDapkRiK8eRaBeSMJvw2etCDyUcDYRy8pCPVQJBkV8CWRqMVTdsWYps5NQLjoa5Pp3QrT6"
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
