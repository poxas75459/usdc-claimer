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
    "4gt5G3hW5og64HJ3zS6nA3PKgC4U37HYuK2Pvkw65CcQTjjMGqxxLaYtwne7NSvYGkQfXvzSReQnoL3FKZd3LroD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UoXBt2uQdNs6XjEpLwdrkgbujA6aFECEeasW9vGJ76Ak6ZQYtM8DxVx6W2SE8eDM39itgpXsVAwQzFqUFeR2d2c",
  "key1": "5Cdg2zE2vYBKvD2ygoYbqyXvkvE6G5WDiQrV2Nv8Dyq9nqw2pm8FBxf3e9VezpTmGXnumXqfZ7dUiaU8tDG81jix",
  "key2": "3fNJ59VTGxbvTFXpygq1ibXW25zfrEXf4Ty8p2HwWmuqsq3fXqqmYVBJWpLAKXTcZ8gtJFU3Aqu7t4PmdWkhFYcA",
  "key3": "4vbUEud4AAYdygkKBiSN3ifqrDBEPZejih7Hy4ZV8pAViqEoRjYYaoKei3WdgEgdepXFFLXxmJwUDWU9oEsArocS",
  "key4": "3RrjnLrTrQofxMH5rWW2CwVgLyqXYds651xcMV1zCpCYVpdpXsv74ipNG9DdhKugFoywJzYdD5JwUwSpsdE8w2rb",
  "key5": "4jjewvschejkQTWRCVHhCkGXVjteyPFYRGgJPrGNMdBDs9FMUJkgppwb1ZdHAd8ix771kTjQpq6FFQ7kS6Nr1bgW",
  "key6": "3Li8c9Souh9VkHJF6vRSLyUKuYnAq8Q7hD3QM5Q46Z63BNMxf8VgJksL3tR2ySxtwUMQASrngAdquQraZnEpL8nF",
  "key7": "3Akj1HKuTTQ1w2r3jWsdXgzkuhCKCMaGgw9A4xVwTk1gB1xXzjX7b1yGm9DEvvD1bFbRAWc6WZ1ex3BfoHXGznqT",
  "key8": "tGggyDVXGAvNBCtsJEVcdrhpqnCXqLTHLXktPWUg8HVA45sjrbXaKH95ySCA2svxobHiNWTQ8AA1Z8VnbarYpiF",
  "key9": "3dCxFgU2MmiLTjFsiuoELtBqLseoU63QLv8hKRNUFagWtnGVv8ws1Ho681fsE1kpzDMW717LyTdMSdjvjvuCTAoL",
  "key10": "2dWrP5CV3xKtcspZs8rLRhfPJGhxGJujAUf4j7g2CMz3CR5qbwH7VYQk3sKsrjFSuqdh7Ke32sM7Sr5AiG9cBCW2",
  "key11": "n1emoi6oYNrMC5QXvKpnURCotT7ZV9s5SDWkTrnbysSPi5GZkoNBdN4pwCnvRGpeEhBPXsSH4YjZvsqPohnZDzm",
  "key12": "44ikpLYbohLdC2QG464SSFbfm2jtzysdeUUnXejqPvSmxPss7LwTyjJm9Z5hfzTmXT5QweZuSr3gtEQAswmwVkSw",
  "key13": "Dqwqka15s6rgu5bt7BGtH3PqE3QDkKYxM1irheVEe7xMS1wjRkAqt1oX4ocE2gKZJ7H7aqohHFYodWA5fGeEhmF",
  "key14": "zB9bp4CzZ1JKbyAD1Nh4TaV37EP4vhkYk2a6phKjPiiyDHaEGUEufg1JurkwEex4ehxrLjxeK9pWWGomTxHe5QA",
  "key15": "5pksrDAWdWBCrXY2FEf4kpC6xhvSFrfVk6Ju9wyVeQpxjM4y6ZChee6FeHXa4Lj6Un7KPniyRJjTxn2eKPoDoHoW",
  "key16": "37G24TJaoqMrxi2ZtFX8NK9LGWnJ85RHfa42pakWn5nYpvkV4FkQRWwvZA77TC7jCMpNgW8zT3M7a1PzYVKC11PV",
  "key17": "4CLYPU7rctJy884VsE6Xi1o7Qmswfd2AfH3W9UAzH81Uwy9griWaFKgFSRAyxhZyCwfSNkuTLsAYQzc3ficeXR6k",
  "key18": "2nDMjfFJnT7QzLPMMZc5YP6xG5f2mJUkVsguKa8Dqd7UqGNtaWq1G8Upw4xToPVFMKP7J1vH5mVH2iJZTsStXaJi",
  "key19": "519U5ot6vXrLGkxmYbuHMREk8FE8pNQ6BevDKeH1xAuxWXwDpKC5yYgNyYz7LkvcDcE9g8weQuYxPyGbFKPQ41b3",
  "key20": "4EJGpvUMfEzYKNKMD7KvHMp7ZwLN7r5ywn6txtu5Zk3aviwaoiAeiUw1qE8rKsCnXse4bUSRBxs6SC3iEa94Wdyi",
  "key21": "3Rq4uZbrFU9qpBffrYLjQD4WqLj5skJJizdhkv15R9SbobTzSpt94orb8rZrvajrUdNamBVrXKYJRXnYzfcFCLBf",
  "key22": "qtMkaDHZT5EeH8h5r1rnj9izsPQP7mDzMm5g8hwfKNRDL5rj3Q1oYAnZCuEs73UoupXFGYbpHHwcfDXTg2L2Apu",
  "key23": "2dZYNjCPqZKYCPdL9rKRBayRG1svvbZ2RXmqEqZmFbW7brS9m8NT5Mpe3QKpp24f2oBgGAUg883r3GvHHBtLV2uN",
  "key24": "4vJb7g88cxVvoia7YNMnBQ1oAbZu4Moc2MiJAKnEiYLuWpTYHtiw8Q8xuhbc9gNEd5XFc5WGJB5Gh1TCz6QJPUsb",
  "key25": "43vCniPUrxSSu17qeRWXXbPspzQ1exieA1m5entN2T21bwk8Vo7Rhqref6byQR4P1EF936wmvEkw6tRw71jyNcsA",
  "key26": "3kcpViUj2vmy1UQ4G6YcKqGuVbvQ4XTjoNwriRthnmFogfGbPuwvxkoxfj4nJEyKVoapCqM9kc3L42NYjPenowVP",
  "key27": "3tBftK8aa8i1S37TCiJZPMeFrjJGiDcWf6wx8d4BFypZgZGM6uABQEZYmScsMGr5UoxR6UdKYLuPD29qansEAS8g",
  "key28": "3VEW8gr6NJf8WXd1vqWQQ8xBA2p4HTpTv3zBMHwKj2akLMctd5RaVhcEVEzcwookzCgGKrY77ZM5tkPdnyeCRMYB",
  "key29": "67o7ZxwDUFbH9MKDkeNgV8j3WHjSABc3amcQcVfiPH9nTuCrJcD9Sc5H7N6h7FCsNQ37UxYS7EbpAJB9GhGc2ugw",
  "key30": "2Y4tbZKbRVNppMMshtne9rEeaH8FyKu99J5MiFC235W5WvxXSvZN3EySgSvobYNFDaULrdg8skudohPPttngzaJN",
  "key31": "swFFou31xQhzS5UUsbAQSm7Qi9m5eDDCvJRtTFzWCHDrr8NB55KLHpWWvadtfyVUL9kg98YNngmSwUgm1R8rtBB",
  "key32": "265tvKqFxdotv2g6QDxkoLmV5ALtLAyYhdgzoEZbLPH9z4fXm3MadeXqkfHfaPzPCN3TEnSH3CYg1xBRkM3dxUnd",
  "key33": "2kbCHZvYt6q3VeDA6S5vGboF5pNQ47Fwo3qSVnz6axEHoZSpjNDMQ2bryNrRdFqHekx6zAZWo7f1aMSs4qsByGPi",
  "key34": "27HuEyCTA4fpXRn22L5CQXTdP8hCeiKE4QAHAkjNAgiD9LyrxU4FaMP65U61vLE7ZXKiYnwiHzynGjfvExDuFksK",
  "key35": "3dGWXwh91ffBpuKocDSWoAEobAZKU2vbNRZi8oxsygwDQYa8Y5Vz8vVhCni7g6cDzrtgYH8Q7HCQZRYAuRvMMCsn",
  "key36": "xSYPcS6i64XowoK2nnGTdb6kyBk5KqVK3LDjDe8vg6FHbMnnuRprPoPrNijcKR1u6W5kqtAkom8pgHCytoxRsKf",
  "key37": "4WRXfopnNSktQC7xmkqtSmimvQQC47Qsd3vrfSGcQaaK8UU9SauybYTCyCjDMz92t9LLrN9PgnncLH6eCsd69gfy",
  "key38": "3nZbpHH6mCbJft2DtwwUrcoZaH8AGfB7qhtysHCAaCS57HGtfixB2sjFezpWVk1zXJwQir2bxwEhKZPF9ynF7tJS",
  "key39": "2Ph3zYkSZ5bGpAiMv5ipGWn5nxrF98YQt2UdQu7zRNSdZVbNjEfhCgjQTVynRCv8cMVwDe5Ca7gMbtcUK2kZSmX8",
  "key40": "4GfFPvn8Uqit1Ww74wF5yQu3whgDQ7cV3VuFQdeHWemXFfGmB4q5fV5zfBBz9fAsAxjksbxKxFuUnEzXCKEQqU1Z",
  "key41": "2t9NUM2oA8heweHQkcxY4EBVqmBmXrb1ATqnsRpq8hRfActvMLm5xLXnzbpH1DaN1HYUmwbvLrEivKA4hvpebTMH",
  "key42": "27iKDTN3J78JUH5cogdTqgX9DEULYs9hwQFerv1Ug9BEoq8nbYYsHhGo3gs8tFp3Ton9BH3ir8ff3GGxz5VxRPft",
  "key43": "4wPjQK6EJyt23Sb9o8TehTkTKYiSBqwUQRzdKfkcRH2moXnmMQF7BfYHbfGhCVQjtRpVSsNcv6vYmJ455nBUuby4"
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
