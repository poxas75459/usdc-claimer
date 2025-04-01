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
    "4Bbir8ZwZnyQNcVsHQpEn8n1UfrkhJS8D2JeHWYoFuURGY1mVwqFdgB5QGJxNGL6nMTZYSyh7kzVB9UrcUeZEKjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4PZ8Un9pgLNTozE9WwYF1L7PXVwMw9HtqKq7Bt2pUdUaZ2cx4faZzyFcYrkaYBf26V9GgRqd9e9PkFZ6LKDaFP",
  "key1": "3r64ftgtEDnNs4TQo4AgHFrjGUCg9DdPkwRw3d7tQE3m8xtGdBAwUsHzj6XrR92VPf3guxbbmGSXWrqedjsiQ9rY",
  "key2": "2QHJkQbjFDKvPrRifxEPuhgvCgzqV9Xbyi9ShmYGZ1dWJUF8DqzaE93Whpa2kHe4XkcF1yUhJ13Md43zkasom2RK",
  "key3": "UTbee9EWV3PGVfNSFmUi1NinA7ih6adgLNZoayXP8GstXzhHpeXGYBqxUkFxHrtDqNCbFBVVTtZwteso5QisuwG",
  "key4": "2v13ZY2ivt1e2t49GzMUQwrGrE14zZPUPzvmTneTctpVSMhYgXm8rT4MackA8MdWVTC5UAGrPXE1jes9zud9q5KX",
  "key5": "2pZz9ZLGVhfvpWQu7aBHHKi3h4UkKQXxzDYACGR2Gyboo91pdPcog75s5nmoCGyf25aQSzEGAYvaAse3E5uHGLNh",
  "key6": "5dDjhhWT1jDRj89yYnd3PQNvWZTNwzxFNp6w5BEZ2paejTktN46wNHAYKaKw8AQF2wzBzQJzzvg4YLGVYhGjEmNS",
  "key7": "tHsAoscfq2NXh9q3gTydoczoqnkLwo6XHqzWqFhVz2TENCdMerZJT478Kh4B9gh9qVavnZme6U53QFbNipp4TfD",
  "key8": "5T2UC3bUmvgZfDgf7U7euP8s1F5w2LSMUSUyuJk9ddosYDnRc4YPv8EpSriLSdqvVeBgYGEWMAa8DQf1uSj7LCy8",
  "key9": "5cjioThKqoNVHDVRG9i3viQdKp5SKvGepRV3vwTDQaneEFuSMZjgYGSBdfHEsCjn3dJbfCuG9aCeqK6mkrXVT2xM",
  "key10": "4LhqnHiBCMHfG6DUgG9n9LNFharMKtjor87ftCX4ugBTKwffQsJF2aEB8GpS2bzeYFy7PLYx5kNVK4eoG1hCekPU",
  "key11": "5NrYBG9K7XLRTaeJmueNbr9szys1u2CC5Xf7rUfsosFYSWGWM2m1evb9xrL1bqdhcxyNwQSV3ngiyY7otLh4R3wq",
  "key12": "KCMC7SU2RCQgC3bf3xrSEiucLaSApSPVWMh1aTLEYmS8gBstSVmy7L5qhmXYEor8z4vsiEWBLG8b4utUGR1RF3v",
  "key13": "23CPQUSoZ3P2P9cChJXra5FZgcuBx5BdfZDG4gNiWbLoGvWmafWWSeP3amXvvEt27AFRBcX5Vn1Ewz8GwppDxQLN",
  "key14": "5jhKtkNo5cGrrh9z1qDzkSEWXbw8TRBohYx1mvvruBWZ5xcTEr4tuinKVrqE2Lv9zitHhCCqWvKLhaxEVC1gPruy",
  "key15": "44e7tjZzHUNc4c2EZ9a6SMUovjjzLfa7k3bXgf5FiSJCEZS3rW8kzh8RhyjPCVqVQ5BBkZjbeTAmMKcJdUpL17YP",
  "key16": "67X6bJjqn6khWDJLvjQzvTUeAAGcHZwaYNv1XkAwHds5TKX91zKEbXuvGfP5QarZey1WqMaAHaU3VTPminwoUjzh",
  "key17": "5K2tUky52G3Xixyj6QGH5v7hZmhVxUWfEbNkHU1noseM3ezAadGxTFwvUNGRfrpbjCrVGMUiqbWW4Ep24RdnaDLY",
  "key18": "3rdx6TRCyyCA18ANXx1U1spkHmVpfC6Evs7njQtzCHb9XYN4ew4wKF9iihRSvJFrSJjJ866nareMMjareqJDzx3p",
  "key19": "52p4s1jdCLWA5wYvBziyyFoW2tkVqEH43JuxagGpX1hL2VRAwzJUBWofrkVgPotkrDyBtx8X8vqUJLHTbtdeqJ6u",
  "key20": "3VbY2VLrsMED2hMeXreumYtRjZ2kmwNDirhpF1122XW3DpjjcKaKSTu7ajwpa3dKZCY5fnYANBHy1EB2kAZu8HCn",
  "key21": "4KrSggXnkwPzQqEDjvYFVQRq1Uuesg2t3H2Mp7fAPu6K55Dk7GADn8Ug7D1t8ZpwkWVbAW4asiWwFBjthRBvrx9c",
  "key22": "JkFKwWK4UQbT3NPuXCjw7kpZqs9hKBYYP5Nysu5CSe9z3GpZJj4EwbvekE3VEheMzB3dByS4nupo1WK8ZgnqWXw",
  "key23": "2jf9ayQtHW5pgCCfK8kYCFa9Mde8BZe2uYd2MJM5n5g2Tq7VRf5RhvNncyLuyX2hZgzPPVmwnY99awreyXydnzVP",
  "key24": "5a1zD7PZ7QydtPya5CJP4MbT42ZYiWAVAvrwUY9J2JGqp1SUfZryCdRDQtd2cq9yJxT7gAHcwkYqphytQQqLAYPa",
  "key25": "24MxNbCWTNNMbKFqwzWDtXTEaz5qpZa8srv3rtZeaGFkCb3mJ5JSwHJjX1quXnqy1tU5qnFrDpR5i3hhWpb9RL9s",
  "key26": "2cyqbQtQjKzy7xptggRQ3nCV35DEZpp7vTaiwPqHT9wFqFngyLubkn983Di89gr5cCtgLYUJGJptb1ZcHTTfPQUv",
  "key27": "28v4QsMid4ekKPdmZaerfsNPytXFnX3FPMWuMDBAr83th1x8iSccKTLGpHmmgqAr45gBSQnG2QpYvojhwPfcP6Mm",
  "key28": "KJwYUsdEtNvBzmp3EmSJm9gd9ZY5eo4gjWhVrDNqmKAQfYRe2ZLpvyGfsQggJKTJNxyW9AsoMfEGsXM92v2rDtg",
  "key29": "4vwMbMArg1MbM8TUuSTGugBx2gka79BE1gfmQLC3iyexq7vrW4J8arrTrnGxDf7JeJEnRf1actD2ZEuyNe9E9rQc",
  "key30": "2GqcN8CgBvTomqDnEdBnVXhpMn6V8xu25qJ7eM84DFfigHNRg8ZoCYLZ8ooSFRG7QckpxBPvB5ihSnC6oZyq6wZd",
  "key31": "52W9iwmEysN66ek4cmVA3zPoidmRgZoJ3MGrLVGAstUt8DNz7WMS48GmgQ5kWAXFGLNFbJD4ix1suDhzFPq5k8Rs",
  "key32": "53gHZ4GTVwZDtkuVcDnxjKm23VPsA1P2iwxcwS1UAduu6Wizg6N2Jv86MkM8Zsfpu6Nqui6bSAkN8Hddj1zqxjB",
  "key33": "H1V887cJHiZTBJ1k1yS876pkQKvjtog8V9jTGHExAWhDZtRqmYHQQPHdEiPHsDRLyghkPZM6wKqkDxSD2w23Z6F",
  "key34": "LVoCvABb3q9PkpyA9YMWEmQZ5eoA3s97HCU6QwALWtfkSow83UpaAa8Y7wkDmSfp9ma1aWYKgjUjHFQVGypctSY",
  "key35": "jQXbnNuk61bR1wgm3JruENhNH5Pyqp3wn9tFhPAyv9Vb2bWDptFx9F33jh5BbNsr28JxxdqUKZBnndQaReNmsrd",
  "key36": "4Pmw2qJF3Fz6zYN7H4S5ggnTbUjYiqhNj3qQgZjqu9HF2batnqirP7QAH3E3qxiYfafAS4KZJ95ybf4j6YNzsVi",
  "key37": "5NUkMohS4KDa3zkzR7oqwqrCWZiXxEnBuHGrdikazXge1XmD8biAT3PnidDHFo1SDS4P2g1SQ48Tpq9P3HFB1qwT",
  "key38": "3zvEMJqNdZaZ6d9aDJpPVWWwyH9uDg3hvCrbgy8KdwtnLAv3p52Bas5oGteJ6vJAtDjEDmB6XYYzAcUxxiPA9fPn",
  "key39": "2M2B7pb18UKhm6Ni7SNX4DdC4wU6NRdu2S5qNMsXr9Z4aaMQZhPYmEd1Gtr3QXs1YR7C4aWZUAb5ZcYjzHzxfems",
  "key40": "59MA7b6CywQRDv8H9hQcHjuHY5mfgJeQwqnyHcsDQCAVZ8YjYJrTPkCZG85FXhB9jYApWEh15oM3P4wpxZ65r4iM",
  "key41": "3fqtqkXMo99VBUWe8j4HpSNecKmGMndBomKDkh11ScviWBcZ6XYjvdZC1FFWxi8CCWk7Nca2HbpaTukU2KavinoV",
  "key42": "3CSM3LCc9j8ZxK82UCfiaUad374YpRKecMmQfQAVyT4B3fnJB7EctS57c3X7GwNvAzzhDMbEbtCPKwBmT4NBmx61",
  "key43": "22NL9JNBhiDtz2X46zMUHtFhdKFK3qDphLtKMJPSBjZVu9ak8JvVQgwGzG381zxQofy1PLjB5AGzYit5Qtyxskuj",
  "key44": "5KciSCxWiEYiWTgz6DGg4wusfjLDmxP7ifPY778ahhqR92iiHQhwEfcpMfiekjLuQnq2wGTNWM4LFuoE9Xt6bnaP",
  "key45": "4jEufpPmvGAzhUau4LhYWhhTwoZGFeeYpuraAdjv86NBDVVkpckudBCB9QLuxcJULtm6b3EN6cEfBYetRqHGfTEn",
  "key46": "2VZ43w4eFb2aStfGMRniFp8FoGMXBMre3qQBJ3yvB2bLdqwNuQNHMnmZ5C5X882BjK3NaTDfBD5tRvkFZ7fiUztG",
  "key47": "35yDNrnq6jcVKauSoVmjh9XwLkNwKo575bxjoJ1anVpCqnw9YLmrbELiAKEu4Ze7eTNxhrVTsQgQbY1aj2wmWLrB",
  "key48": "49Gn6stUkJAUAz9FF4jxUWxAX4pGag2rZYkYZM9ZroF7fepDuggzVxnunRaK1jJE6L8kWu8WqjaeWcHs8Vx831Lu"
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
