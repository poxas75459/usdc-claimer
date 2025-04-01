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
    "5p7uABvDpdfrZZGHExybEeRvF3oxTyjV3PwJpYe6M8uWLnnZfnCL89kugr5qgs9J5DMowMrZ8nJPAdUiWVkkmBJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BZALNZngw961qd7u1BUpGwuWxKxVtmH19qRwXjkgo8S5KU6DzaWAhMAcEUzkskuhp5jGLS7X3nLsBnA3B7yL8i",
  "key1": "5nFJjzMTKtRJRGmBSPM5JCqMftVq2DzPNZ3XvgFkYWgwo9xmuAoBTCQuV4F3jP2pZ88ANd1R5GHQi6jcENMtmbHm",
  "key2": "4bmaGdjvmFZkd6SpwMtwotZphfW728wa9W4DFWtcyXvULx4dPcLwb82iH1LCzv1iU9xgXcUQu5BZ3MHh6GhSBoSP",
  "key3": "3cB2gCKG1bkTjLbuYKZcBRPAWN6M4t5G321t1os82JL5pbAnqGK224byPiqmUi5CjHsns8sRGNzaYLtiMKnqL3PG",
  "key4": "4XM9fitDxu3cD4PGPcm22J8bPkQ5cAnPLyVsaZuUCGBvYF2mAP9SHkE8RAZnJXo4fsVvi8P1dxyqqj46eZdLHtks",
  "key5": "4x1msv3xi3LXtc1i1itzuDww9SPxprfxPDdcWhd6nARndaD93yjkPYejS9FiurVk4Hc6F9X6ABZjHg442VmGLQa5",
  "key6": "49jsjxSGAAPKM2WSKmZhTMqddJXp7UDzqNUZ4qud3D4XPx3L6MEX78NnWVcU9vkiY6qAiqUH3tm32VzG3AAfmbE7",
  "key7": "4pbdZTv69BkUc4CofNZa9HsDmDF7qZr8AunmbEUBr4jqM6cSMcNVkcin8sMih7x8K8sAhAv75HCteHt9tUbsJw2F",
  "key8": "4G7kS4mr2KqqjCUMt1okijsGNB4XfzTAYai8VTcS1YrwRyCZi817sDTuk4fksn3BQrg1LgrtHv5STYmAPZ9jKkJB",
  "key9": "4pC4gTJpCrPQgCKaiZ7VyaTWmau6aZKLm99BFZa1nUTaZZwrcjeAoxqbpQbFfPavNznykK9SzMpx7BZyADXd7gkM",
  "key10": "3zFi9Co6cyDW8L1g9xsY5bdahMFizid651t6pt3DyhokDTrNwHR8ZJeDAMA29bpz3CfVYY4xGem6nL5ZkWjbibEv",
  "key11": "5KZQZ5edNv9dTXZtExNAkJZwVxJEgyPeGv1Dvca7dHDy1Dv14wCZgewt4jPExZRiJ83gGshpnMXSYV6xegGeSEmR",
  "key12": "27zqqnhW2grot3jub5Sm86TyPZgF5hdvStcdftUKLzZ9jVMCg71bA2DEyziB2RDkZBf6qUDeeLnn7XSXAkWVLye2",
  "key13": "523W4RrkL45p1EswyWHzcCn7HmPqofrzgFo6URMV3qvduuNu7C3nLZZxUn4Ai4wdxSug6SaRuUX1M8H69y6qshtP",
  "key14": "5kYn36Q3uDEmE1qvvsimjaT7DQzXfC7wK2NdXwaHLAFMgGBCZ76JAzgiA54sC81ykod9aoZEnrirmutw2BmVBvUB",
  "key15": "PuBVDQZN3RjVixGycagv3fGfGCX63RRmwssUtjGz4sEJuMSbxRxNBkt5mhCR5aCHx6Gtb9By3TL25xS2j2bsErZ",
  "key16": "3TK92iSdmH4kJ8q9K1Lo29mNvBC1xT4CWaNtQSZJsoqw7QV5vqSFFm2ALsyU6MESeCBMFStizxwGYUo6PGdPmkQt",
  "key17": "3cmnSw19LvmAp7AgwjvcZ2peYmXDtW9GoeFh1uJ9882vHNXoZC8HV9d82szn9eG9YErgE53SW3benXXbzKEy4CbX",
  "key18": "3QTrFCqszQWgyYy2f3AgBzsCbRQ2SPmYWjte13KG5BVDq18xotTN5TEn23VNRQUFe3AJ54kkhBhPZnqarxCNz9NU",
  "key19": "EGFY4SHtaBArySV5xYvhFZhSpBL4HQDi4hwKeZkD6xnRXev6K6jMZ2NhSyvU63cmWBTGu8ziuVBKxJJWJk58Zdh",
  "key20": "2RvN945jKoFTBFebDs2Ze6CeicvhbfJaYUUsEzNWn2FjGVv364HhpaXe6ob4umTgHXM7Jcs6p6vxrVgYv4Qd2v3W",
  "key21": "4Sk7pcL4niAJkWVoWXxUNgyGqP2Ye8bPeYxhGyzenjBMobcVnYcaYRN2uyueZDeYaHGyvv6XWzpnLcSrGizngBdW",
  "key22": "3xmzB9QScWhSZdToCB2D1pgMWVtmphGedTiYMAJnehEkXqarJpVrbYHS1QvugWffRNmZcgamzdjooiRdX3zreNTh",
  "key23": "5yZobvE4qdVmwASTsJNy3o95VzgzCMmUqkY136eJQV5v5zV3uNRXqPGHKsUCM4rm4uQiiiZkdZa1P9L5MkRkaEvk",
  "key24": "67SQBd2NEYfrrCbE3i4HKg88PcBV33zshHg4kMpKVAiQ41haxypFavbMJ8Vq3xsAYFTMQ5iBCFZMknQ7UtyDvYPp",
  "key25": "2PQCPfJmxJ2NG6zoo5tcwusuWrnMwPLBP3XZfe5kPGBrdthHaPruJ3yaoPvHtRBreke9LvKapyVA4xnrSYBSjAob",
  "key26": "2HWZrur38USdoHQYYsCwdrFYuocMi6NZar5o7AtS5FSxt9azFDGu7ehc1usg6aVdYj7xvLyYf3HncaAkJJRQNd68"
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
