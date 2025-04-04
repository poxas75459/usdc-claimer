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
    "5VzJ5eiuQrKHqimncfUMCRfDGa6F6BMWHP5DHfrRy3siUsFj3NQK9WvEVbL5ykgFgDHa4ReJRm2Gnp2Ss4Q25aGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lai22Kc19Nxeaxw2WQuC2q7KupuVfUTjoSHjhtHf3hcuWLs9qc19r71C2BdUM4iisp2ZgEwcnptb4Yn2AW3tkZf",
  "key1": "4aBummc8A3ErY9rW54knXPBpHbFooxXV6cdNEDq3rfjPZNTpeWWz1Tf48o2nwsqxzsFM7Sz7FNGFf5sqvtKhYRCX",
  "key2": "4cBstePBurgsPWsBkUHQvAg3GsE1n189BYB6U2PVdvofCmtzQnhpkVs8Z3Zo7BRTnVEKsC4MxrtuR4AyhtncHP3n",
  "key3": "5eKJJ28W9dULYqidkEjUAtrUB4rwxYkTisjx5UV7RXf6GGPpqXPM7o7aRFBH2DvnHET9bEtQsvzK2h77PqdCbLcA",
  "key4": "4WsEWVXjduNkbTnjyfANqZG347tY2PuEtH8oEnxhaQwwu2NVqCREZrgW6jrGkHm7J3DL1nwDHE6mhNvKRk7HRsHF",
  "key5": "4QBdm7LXaE3vH6YRG4gH6pg6zxqF3JrBBMzRvadzkgoET3AZNNrkT8zqmwsQnSLtg5e6dd6bmCvemoi2g4UZm5BL",
  "key6": "2rBiLod3Fg4139ueREy3B4Ehmm7ebFZ9vR6Kkvq91SvYBy69CD6iAnsDbzvS4VaYfKbqBxsxuzM419jeTeQ2KUmw",
  "key7": "24xVdFSi3fEf8X4Q5UZzXhzHKA5fiZyCpMsMqiKGYi6DK8ofv1FiiwZwbogePMMFb1CNrk3tiqwhMse7ACzmQaFr",
  "key8": "3EqwSiQTeZsbB1sUAETGMVCqx6maXNwFEWeQ3bVyauoF2jakGeWXcbtoonCm6pT1m9ekJJnM5LqbcFkH3m6cfgyd",
  "key9": "52VwF4SuWgndoH3Mizt2vBe8F7v39CrvTNZWUDaYZpW88tRRo7tMCzHRHWMTbZ76Jim3z5YYNyuTQuD3e8bCysWX",
  "key10": "3rVk4Uj9ZQQoEov9PnndBWB8uaDVexn37aaeQ2tSbW7BjWFzrpU7tNS6eagsJdotMBLrWVmrCGXKVdJ1kZrP114W",
  "key11": "uFQ22vBvNbQtmi9B5Sp7rNwdLx9cQ7HaqDs5MaMSa5HJer7nUj2ABBXiuvTyUaCp9L3xkD2qCXaVSR2nS9jmzhP",
  "key12": "2Y5PFDA7V4yAgopgw3TMP1cDdvXdBT9s9mDJmMNPNaTHefHX4BHKNcqaUbFwiRtzmLEuQTUk5AGzs38H49oShAKm",
  "key13": "e76fGCfRbeW28oE5PL5cwtW7EE5FNqxZJFVj49FwXBppzJFiQ8yi2Mx8Z94e3WcrTqQrf87F6YnzqKvx7eBE8VS",
  "key14": "4S9GVBYVeEg1DcGPaaFkTuoUcmRCoQ3NvL8J9mjJ6eYfnyjiccC3Fa9jkxFT8vBbaud4b3cGGdfAtbZSkcxrQ9QW",
  "key15": "2nQWiyVTkA2jXDj9tsmW6Kw8UaF9kdBUYCvVPuAM4GVKiKa8RjUJV9rik1r9YoCUTMbwncQREfQRCeEkdSHhGSSm",
  "key16": "4faYEY9vVgnRDpK2Xv9ynYGGkb2qPNtEAoHVt5ovP48iNfQBDG1VBG3iygzbNoT1TZvHorSuo119W9vimjpA1Tv3",
  "key17": "S5QoRL4J2t9N8cmTmuiZUBy9n3agAquPnBq8XL9M9Mse6uuTm4GXHmvZyeDmDADkQgine1EPozQp2jmccvTCoVL",
  "key18": "3oxrRYQtEaprnMPiGvmZB5w9YZQo9j94YsxySsTGbUjRa89BEdsceaFhWACYTCPHPfB5Fwqja9kxWVh9hbx8ScK7",
  "key19": "3w8ZCykXGKp2JyvUz1oTmjGXfZsA3nhosvWozPxRYdySmyCGKYFrAsoA6uAb2QJ8Cdpn58dqmcTeA2V7unU7LPXi",
  "key20": "4SaCAnsJTsVTgJCK3j2r9yadjRPKZmVmq13vpyymnv2nEmWpBiiP6zkGr7Tyq5Mng7x8XJLQD2PikcB3usKvoxgo",
  "key21": "2R82R979worFW1t2V24kcXqHMZbU4SsayZzrH6k4hKsUVvQ9Liypi3HFnnzo8y88hS3EzGZCrYPU2gAE8yjbGUYU",
  "key22": "DfpUYcR28SrqxUhaTJ8sVu3uuXhy1xPRXH5f2TfpVSCrudi1BSkdhiy2UM6egm1XsmL6RyRX6s5oYq1R2jzneyW",
  "key23": "4GAJCXT8ZJN6JYgDmU8nypmCDXzRkZBn5PExGymUR6cxMrfTzRbM8mBJJJJ26DKS4BmrE16kmi5HJmm9reTqXMUF",
  "key24": "fqBE4VNmCuTKGrBAWJe2UTocaBS2Lq7PfnsyVjNor4MCzMJqS7K6Y8ePmL7AggrKDhdpN1sWoc2F6cSRmcaSLyP",
  "key25": "5MY44YxHaNRV9sWbnNtnwqm358CyNi4HwkDQAAmBXdqhTVghAjtDrEBQ9oMgKoUenyWHkbP98G3A7BqKtyoA6T5K",
  "key26": "5DD4QQLx6N9uk87GDy6ujfFTJ6FXrTTKLoWsVtvzDGZ8jqiW3i5DBeQjkw6y77KkJFvPqefY5Ghy6cLJ7UrAUPBW"
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
