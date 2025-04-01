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
    "b8xyHVU4CgLnYSnp3RiaiA4d4qM7kcbnznJEW6YWFdT3LQyrniz6Qx5CTpGsejqs3PDNWHaWQquKhhaseGWbHd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjkrosEombF4aoe9dVBcZKMNF4YDwnR338khsUaqaBFdT3gnc6T8sz9LdR1nnzddAz63sQdX4aQ49i27hYTXuuM",
  "key1": "3YqJqm7ry4Jgdwd1sSVHYhrrQVK4wLjwNVwopRApTJjaxfy8HDtesGR12s7pm1r4nLgfZjKjLQaUHigZfkjKZoW2",
  "key2": "3HwWYUxL8E8BnrQtLrpwb22fz8kuiY75aUtFAnYJuJiPFmxnEtaYTRbAnh2585317SJ1YxBNX2URaVG7kgnxznrL",
  "key3": "64ydR2puXEBVHhDuRD1PAvGaghgByAHhTaFnWmcXr9xWg9GAjFpJ32o9agUNXMCE12vqBejoqRvDTvwxEx29zKna",
  "key4": "2wKzS3zLnMK6ewsy9SZJEA4itn4kJBTDexnqCMd5F5gszECucCp363P9i6d16ZXkTvCJ5fu51AxGn3bX21wDW7XK",
  "key5": "4Vto4oPtPxPpybz1ymwKGKXsDYe3iiZrbGgA8w1Gb8YnzYnE88oEVUnK4ifMfZ8cMFCHdZg5me4u8vza2myFYkTq",
  "key6": "4eAoiKHTaz8z41c6sRu2Cu6fRWbS5rr2N3UpWauFNJkrGGxRwYbRuZpQgcKuFiFdvmiK6GvQui4jLHHGMEX438pj",
  "key7": "2ythviDRtxUdr6WCyxfv3Z6EkJPNdjFqs9fwZ8qzuoG3Qo1ZfyWGJ9xgzEsh6MHtdumyh6eZsqSaoumiYMrSvCAc",
  "key8": "2tfj8bNp1ugtrCRaZiDniFxnWG1jrusdVTBbEhJwarutFCBksYWFmVScTaN4ZAkLsvsAdyTatwSTxDvzCxSd9N7k",
  "key9": "4AhsRqT8TRtLAqmzjcj2xwuY9BFLWPhEPSYwQqN7uWgL5sgXyXorhJabevELRGcdvvy1oL2Vbtuh2YoE385y3X4z",
  "key10": "45E61tMKkThQ9SRFqnTkPq3Vz4XHsz43bQ8cFk1yqGizS4dv7bo26AjK2nK7GkDyDdzUVVD9P68fiQj2mJ68amPo",
  "key11": "3LvezCKy4sxbKZT3kFUXmSAxxxPkGjsPMVSzjB21uRM26h2aSQyhhdSemmwKXZKyEQohiqT8FLPPK6dye39axXK5",
  "key12": "3SizvsRB98hqmx8eUyPEVE2AguvEtDjNJBizf1AVAJMowSRWwurkwc46pLRvYXTcNW87svMbKfMFgrPQM9taM1NK",
  "key13": "4USbDufPGxmGFXoy1G7jVMzhz3ZL1t1B6fMKMond5m1vNa4aX25pvERNx9ehZJSDXVvG4vFteu9VffHbPsTePYHZ",
  "key14": "4tKYC6yuynxyDzecUZGj82RAukkv6FGieXP8VtozLoPCd7z8DuFiofFSVafNADg7m5s29qKSnP588XmxNbbMTnrZ",
  "key15": "5jvs7Gs91aYfyRcJAFdLKo5TH2bo8fi1oA7ANLXGrXQjCfApfTFVqYkAoPm3oFUUSduiVNB8cYdgGJeGp5Qv9b3s",
  "key16": "oe42dAmk5coiRkEpvfoxjWEgFFdDHvii35oPtjzYef3daFYPmXjdVYj6paxtJkxHRzLHfZN6LJfzqgJtyUWTDCj",
  "key17": "5Ttacg4jJMd6dfFkYpi7VK6FhsVMtTgkKEC6nTGJtVVfxDMfVk6yjshiM6bMYMPNQedFiXhoAGWZCy4kGsCgPSj7",
  "key18": "8uMQveRvWAFYBqNVHuYT3ZMau37UPYfiiLUwpvfBrjUfpGrRj3nib7GiXvt9xnMQ8ENWnPqL4aJFeVqQaEQQtDx",
  "key19": "2YYzfBSPhtwwQkT2a7tbaf8Wp8imc4Y4C7zadhD8wvPZNwZQzb2FCTdFiopZSjGiLzihTejM6gT6694jMX6pe4U4",
  "key20": "2q1bF8bCkmFHSeWa62uF4L7EffQsDSBAcBsPkKe6xwUGnki3WvL8i1YWcpuzXMB4attqD5Wo2Vg9Dwyr55EgF542",
  "key21": "LA7x8q58suTAvgmgiqYfzqRi4FwUTg4SfyqDeHvhzmm1etr7hpNnFQTiPBi9sNDWgXTNoUMW9CHNskSk5xXDNC4",
  "key22": "567dFfWLdUNjTKUb44HxDaadnmqvA7mS87yhuAi1bo2qAJiLH3uKxo6t9U4dPoakurASpEoZDT8TPwhS2oZor7pH",
  "key23": "mmALfUgunTqi9drBJhY9sCcxNb4rJCKzQdDb34XBj9FwN2AtrnEhLbWBeUqfjFPomih4XYpRRACLy994awYNCmf",
  "key24": "3oisEsEE2uFWAfnHA6o8TQM8B5ekyd2uMyjxb4Mh6amZNnx9m32eGc9r1JHj2VPSp7VAdGSdQpV6LWbm8bA4TVwK",
  "key25": "2z6JQBRbJsMcdL87f4GfHR2NKsnBXvCdAEJQm584HGNzEjN5MtWiN8pe9cCpMj5C2sXTbSuKda6JRGejo7Pf59cR",
  "key26": "3TW4wQdDmvGr4W8J6NxEst5GzQ2vs5J8f93S9JDZfooNa93sssXRRA9omAWrPWe1c2SewYNrHwAnhVdXtybGWqZp",
  "key27": "992qQ393sRDGqi1iVKA9kgtnU8cou1b6oQcykfSCpQ34P7bzvAENF8KvxCGDZQbQ7fnFUhJNYvrUyekuT7pSkEe",
  "key28": "28fWuaBrbd9zgykDppHLcfLahEC7QtLieuoys2XHE29rm25qbzwPqD4gJqZ6ivAZPjbchgZJNefu1jyFaHtKFL2q",
  "key29": "sBaEfCsV4ugx9Mf5vY2kygANNRZernFrMB7m6x9fiu5E2XyxPzjHbW1Bq9dmBcFvXZGZfEr6bTyU4kGZntXNWfw",
  "key30": "662rJXLTA8FbKe4c47g3D6HyYzvtMXhCBKSr8GnFnPTd8kSWMzMsqwVvQsBEcCW9YGo2mx4NadbwoJzEi4kNq7kt",
  "key31": "5zYfggsHDQPAGyxbUWZ5Pm5aZUgN6LCwVrdSjHua4vi2xbLr4oxxsdgskuSexLRAJc4Ss9M3jzZg9P63cj416zdV",
  "key32": "4M6HoKcxZpah2VXoEtcZuwJGSeebUbN3s88RFwiPz3e1WYPtNMU49A4bU8a8eXJrMohdqcVvVTvKWUaEKNpfQqZq",
  "key33": "5y4hh7kQv25xHQ3exZkXUukbYpi2CgTNakTdMHj3m2Tmd2msRjsv5m5in4Gyod86HKqz6E6qHBRTzHCpGJgVRN9D",
  "key34": "3ji2YYEqb8cEdfbkKUisKbgTbskemUew7oHWcLh3fLUKdFkZ5CEFPvAoCtLBzD36ySvVBqdGuk4L11ezj2kUSExK",
  "key35": "9LzYzgdGyfzbAHqLuBv5i3MqBmCD1iuZBQyWfnonyibUW6wAPo4UNLCvbqLZB3qXPKbTueRHmHpXgq8JMnor2Jd"
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
