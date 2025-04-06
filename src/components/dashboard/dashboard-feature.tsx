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
    "wKyeRLyvW2YPMjwdXcX1upFiZprb4wn16Jazh5SdTd3Jru6rPYhvvV7p49Xp2k4NTQBs96BUc4komMrfSGDycNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiJEU8irdAdsahsrH7X95LB6arUczrTuh8q7NXunqNdpP6rqYt1wkhaNTnk6qwP2foSfdiN1aD5hNv4vmggBoHj",
  "key1": "44dLXVgpX4YQ6xMKY6KmN57ebhT6eYojU9UqhvA3eH7eak48y5Gy5W86CEa8rRMDD5fBeLA4NYPFM3mfjeXeManh",
  "key2": "4tKdk4sw3LBmwYFccMpX9yX6WkyrP3nLm1uwJtnasp6DxhHjXfhpoddPn4DGXhhYpo7nw5wpjHyLa8wS5vkjYhYu",
  "key3": "BikukyW96C4H3NW5qXFUSgoCbdsNGB1bBSfWsER9L1ZA3mi3tTKvPYmUqo8vDRbmje24NVJs7QLARt7JSdWAGHN",
  "key4": "3mESsGqLHV61cjKevm7PX3FjpMt2TzsWHhxH5H4dFU7uEMscnZjHJx9QhkBZ4DszULoGweYAn34Mdm72HoZVvbEv",
  "key5": "2QjYQpM5AwcqcARBYkxNYJCTqFS9bDuTH8cKCxvvYWqrbnQvRgUa5u5nKeuJrDzk4jvR21e4oVeJAmYQC9xeKZM4",
  "key6": "5aQ2Nbm5S81fP2uP9CYNKHh5kDQEtANv1SdPUWHsxNMuswfSyzFgqMqY8MC48AHnQuvEhS5GFcGtHvAbtrMU7oeQ",
  "key7": "1ovZfJyjTtzbKyNoYU6TMMHNC9BjFe42znUsMhrqSVPbxsdGndFCqhYyLiMGwS9GGCbQbAuc4dGWqDEBViCmDGV",
  "key8": "c6hwdGoMerL8u8D3z7xQgaWKGiQZiSD4DwTYSwskkc8fWEXThYU4F67bMT7jKiDoww575UjTHpvGAP6rgFuGk96",
  "key9": "4iWFVhUDZPBmsR1ZBYqEwsTdeV1zz26eQNfyw1rj37tBYzQkeDJCkFAe3wwQYsE4PETXWjeUyFM2FFMrtueKP1cA",
  "key10": "ev44H3nV7mRri8MLnVSbXP391wHvd9HpqqSoZboCYC7m2aoBmWWc42GrzvET3GsUfGyQiq88x4EZXWmRpeA1z3w",
  "key11": "4AL4qQkYm55RanE5RsrGFxkpA6BFyqngQ8UwHtVQN5zJ3cg1bgwrNz1eNNmn9AijrkM5DnU6Uakt5ag3EVQc1Z8f",
  "key12": "vhVsgW2QYctXt2aqZQsNaQdkwc51yqCdhsnKfMEdQfQ5n9JUMVvYWS67YB8aGHdPqWU3mkK8T7GrY5NUeiyiBCp",
  "key13": "3wbNMsKhQVe1GBAwyc9Sycghw75E3Qycf9WqMekzQQZ1SWNtk8L2SXnbK3NGqqSVGX8UeaGZHiqKcLiPDFkHxLcK",
  "key14": "4qr39r2EVu1H3XB7s9J1cZKDbjTUcw2txcEwZ3pDEMQX5FDAAV6Zy3TFLTcKuu9y18yqsPLu4coJohYKo7yucCKf",
  "key15": "5RYKaKLqy3QrUArXYZ1GMdAmzEwWcHws9LJ6wjFoz5YLyFvJGbRJwYkdgLZJuzukQ9tEetD1GDWkxJ4nWpdLKzQe",
  "key16": "32JujiQbqGvmqK2wqbJT2uwcGAFteLPNcJoNAnqshjhATGR3jxffRfK1ooCBjUoxF6Pq7LxTQfYd6Dx76FxvWiN3",
  "key17": "3P7FXRwxFo8JNueFhmQmBBVL7sXQxBxtxmNJDv7PEkXYDefCf4nWFVFsJKDxTNYEHFKhzx9qmQh1M4jdAYxWhf18",
  "key18": "2E7LVvzvut3KzUd5drnvpefj7idESrhj1EcoRgtABcWrsr7oeVTMjvRfpjdWGyZCrkRHk1siGNiBNmx7ou4U1UUR",
  "key19": "2AqPNBCg4CUjSYL2xAxuUberpD2oHc4yHPQSRjVkepNUqZCoY6my2WGNcoJodLdB5j3vZHe5u9dcLtnkyxMVnJDq",
  "key20": "964TqQ5R9sDy1LJbn5h3RscsdSiyEGuBHQhtgCYjM5nWMT9FLCACzX2PyajWhREGx8TdNvP5B6G54yNeUvKXsa2",
  "key21": "3D5jG95UPqi66MeaQWX3m1YSTJ75D6ZMiBY388TnBtU6KcGtykQCGZ7mG3RTz6H85gNT8FhtHRsvY6dFKe2cQWaK",
  "key22": "4pvaehfnF1XRN9KrYVEcPZqkuC97oL8KyWQpd7z7eaDMqVazwyAG4TFm3d5Q5qN7HrNPLAxoWiGzaqBLz9LqSVoo",
  "key23": "3oQgZ7izrEgwnUkqgW9SUL3yuFY37jFcqrWQAtXjD9zF7VSrSxHKQKtNvgVA4Vk36mMSrQCLMwfzht4n4GLkDA83",
  "key24": "4ChYvmmbgnp5bR2BsEXidpsMpo8kaddPnn385pmBM3ngaALeijLsbH1vi4LMFV5gaETwEFrtTNy4kRJqr7ToKFYT",
  "key25": "4Jvn9Dg8ry5AQk9i4F5pcte3swsvmHe1q2YDMKoDSLfwW5Wnyid422sKJ5A6fv3WEZS5eNnzQtmfdkNJ3Qmh36KU",
  "key26": "4VKtR3JZu8XDQHuabv5XsgDqM7f5RUGKoxDFRpk8Yb6tSrPvJtZEsfvDG34aYXqDUKwwbSBv1WKHBemqcnvjLkjm",
  "key27": "2efYwVP8LBCwkxrJj1vzzC979v65NVYobZ9k7Y34HTs1dxcRcmXRFMKwQTMyqVqN64Mwm8bcUSbTKJ8oDwK3s4qg",
  "key28": "58eEf6ZT8EsHXLSQWfpMmFujF2quNAd5JWmKRYt5XKe5qjGhhFokqmtE3NUeTBdppnL2XxiaRGe5hfMLPuLgzUiU",
  "key29": "5wMaNEWTU8JhdyQYiRCMJZkrd18VthZ6WZqZNAgQuLXHMRUb7SEC2agFeXBtuBcmJn9t1f5ASwgRsyb8QsgX8dio",
  "key30": "2jK6D7vnWMsXarsrgsZ7vdyAdxtLubtAz2fuTKnGuS5RkvzDpTojbSfjkJ975taEq9AGgFvhoUtKQzXb1AgajMVn",
  "key31": "4cKWUpJtSfaLSTe8Qep1TdfwLUgu7Pj4xaTKhtakN6u32PkLF6Qch3gpUU4EoTsvy37Ag64KUYkkL1hiecA2Veov",
  "key32": "d9ckRVM7o1DPbHcQ4dKDPDakXLRoerxkYjQixHdrUS1o8xrUT9tAprNGVBtLqz2Bu8TL86ndEF13U961oNYJ75c",
  "key33": "3VFUcuu4DAwDereT1WGnu2nU9AHHxqTHZuvLgD6itDhki8bSdXPJjveVYo5BXYEBcytjVH2R598JmLuW5HqiGLL5",
  "key34": "5f9yPyPS15Gm1hASEXtZtNj67GDnwzeUifqGoW5mZsUXUw6rx9k6zrJwjueNNhTr6SC3ctHykwjqmy3Lwr37kJyi",
  "key35": "52MhQvsJchu6z3cpxPuQiJZo8vfY6pyJkovVmfyJQFHNvoBfmiiEFaLMhN3CPt3s3VufYnf6Z2ya5NKkhDPRTyrB",
  "key36": "5HVKyHEJBQPxEjDfVHuYLtzK5cHj64HNGsAJR71w81zSjzT9aVffqV24SJ79dJYVvPu4Sjt2S4KpxaAvaEwcZjjc",
  "key37": "33QNarqZUXXbY3ByU414mixXwCMKFhUWnzFMNbdpuF8X4d8DxUR38QGMqNZubioUQxxK5gCrEbAFwrL3eMSxDHx8",
  "key38": "4MHXbPrNsMicWtGjFN7EQxooh4fWGEMs7oRhkbJB4XMfd6XV9URGZ7EZANipqGtCJtvXCejAccyrhpjRt9WXZmji",
  "key39": "ZSDJsKiUbiSeZ5Ku2GmgLarxLnEcNr9XbZCGVK8kTiuerPFdYKjqGfm2J8oKhJid7LPKkNUj2G7YMbye1wmjeZv"
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
