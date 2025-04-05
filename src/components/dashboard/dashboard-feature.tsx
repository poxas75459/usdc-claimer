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
    "bzqJaAvezayRJJi7K4iGkquWCSjX4boVwWo6hW9NryjfHoEfqn3n47QF2fsCoKpTxuwnNfpdYZecSdcRCBPCpQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EyKEom1F7xXba8zq5dSDdiJUJq8Viyew2TJVTiDEF9iR4qJKjLzo6C1Ui9XrUnkxBxGhjNgtH1cQqDWABP3gb2",
  "key1": "QjUcuxRLWPeRRcsT1WZMcEoZf5ZSb77ocBLE99Yc9djNRQCdwxWsMqDFug9GP2ezhRMK43D1Jp7KL2wRXmS6BYQ",
  "key2": "2jZ57a27Fy87EEqG2CQvaB2ujvHDvCwEdPwpDTjsAUD5P8iHWKePMuo1UHSjwC7PUcjssC41nuxgxDmm7pLYEsk2",
  "key3": "XwKfuqq1A3gUvRmtQvAp9hSbREWMmKnZdYKwPsZzVQzN1WVsJxdVmRiQXic2uHwN3TqVodLUZ6nuso54KiUxZaQ",
  "key4": "4LjBojuBk481z1uXY7eW9tt6na27U8T3opH7ENqP2om9gKdgt8txkoFVQt7yYhasF8TVyFzq425eACnivndZrN9o",
  "key5": "5FHq6XKNLQXU6h5CmgiXw4dTPDnUuPtBCphfZ5GGU9X8AR4y4QFZ8gMBRzmfE4gDSpNP4enMmBJYwYRTM3vgnCBw",
  "key6": "4vUAcdghoQfAJCac8jZKHmKL6CUcBg4FDR7zMF6pJ7S71zKW9qN46vLzqMPpYCdzLgLM5Vkvc1ZAtnKbK2d97UVJ",
  "key7": "2yY19iH2JUuoPhKFqqLX85dy3RMv49312dyMNbRD6eGNhaE8FVydDok7hR5PTpN4Rat8tPppQYFZUMDeYiK8jLqF",
  "key8": "4kEie5bvyr2Qc22yShXRNurbGpzQEPqHp1otkwyxFWiXLy1cVbRuNwZsHqS9nnZhzwzZvp3gYqD6fJZPjr7VtkF3",
  "key9": "54NNvswkN74ktPnSUVUHcR9WN251iHGv3HHgaPgFZhu3aicXq7Ez2aoPaXoi2sjpWNkyssXBWJSq3RHkagjB7rj8",
  "key10": "443whEzDK3Fmuq5hoRpz8Zx52QfynL8DKAxuh22nWwH9MfrpiGLNk6jm4cDqk4FnEafzBW4SShQ2GLNqgi8A5sTX",
  "key11": "39MM1JiZxNUymYwJNPWMYKLVCxHypfZ7GW9B8aozuZaef25N4cCUsBCB1esTRRzjBF3wASC7EQpCtGViaJ9XkXy7",
  "key12": "2NTodver8UpTNAwtWTkhFnCAHYf3eeGj2wVoXf4KA4LBsfVhACRQy41dKHR375dgddAa3ztCuEJm84mtNHJVqHCR",
  "key13": "5VVMFYb1vxxAVHX6uX5ELTEix3qRgxJyhvfFpVb65gq6tHba7bhEBTNh7oL7wstxtBqheSe8CfG9ioLUZVjat4nH",
  "key14": "59sak85F1i4wNMSTzrwSdR3BSr2F6KZvscLvTHsXbxQdvFx9nzsSeahU7fvbkwsgnN2jNcZUMzTYkaVs1PTP73wT",
  "key15": "5kcrsbn5N98T68ATXgidGJCiyGFtQuuebKAxJCjnBq4iKgScJYTCY7j4RQV2MNFxZxBxpsmm4BLDZRUju5P6xHKY",
  "key16": "2ex4ojUGvbwuFV2d3TQ3GfSQpfxebfpYXKQNgzSv1y7sd2MCN1AYyE5xXt9MXtgSddCYwbY64dRzcsdddzQV65yT",
  "key17": "2jaC9ADp4QcKzahci2CytXPGwysza6Wmackpf7RyRVVKr2QwactC9JLniE51c5iGT9RnrZmA525zzgf75eg54sPG",
  "key18": "4aWCXeVRWv9S2yZiqUpVCRqwnU3HSkgRuqajgEZyggQPmsG5Mso1CfCyv1pqu7QtiS7K8PPr8wW7RNtmEAuHi3UX",
  "key19": "2iqykaoegsfUAy8H8ToE65vvn2ejxAjuhPQ7RaghGgfZ5BWHaWjWrSvdpQvBppmaEGbH15K2fnk1AHnzeUSYFhPQ",
  "key20": "5Z4t9SdD8aZUaQoeSFYjQyTYzAUHbCWepjV3KmiZfXHJsMFU2jPTKuLWLNNxQCbwhMNDW14Wzo6G8pTzs2n8vPBM",
  "key21": "51k8hGZ9hRe1Ga1qZK98xuNkeQiUkYPk33J63D79hytpYSQ1ScSegb8mgDCopM6gUQYGGAY5XUtHodEjFeDdrSZi",
  "key22": "qJUehjQ3bHWh29XA9fBgUGC9xeL4BGbuVxWULLFgvu1dkhaAe7HUXLyDjkfuG79JgcnAmvfTEu11YWRBxmQLU5u",
  "key23": "Nsf54AXMRJzW7DifVJbg1ibKAPAdcwiyBDHruqt8VMGqwUQqF6raLsehkdBjrmLyePbZGYHusJmNQGPLG49wfoP",
  "key24": "edz7GCUdPGn67kBXmXBKV6mQuZ3PzSRzgAr4bhxXLReb2pkuEa9NxtaoJLoVi8FfjsxGU6eVt75FbqnHpyCDNnY",
  "key25": "4b5H9cEHsXp7p8FmFzgGSazFoS9KvGoeqRYZrTYZXnzthgfYzM53SCyYvVrddB3wmkt1Wsjd8UoUupCMpQZyBrmi",
  "key26": "VSCNuSrn69zgXq5XXhF8Aycqma4yGDA5jk7BhEx3YQRn2LkvgWemsUuZSPbxsSkTWkj8CuSfxs4dhpvPLEib2Np",
  "key27": "2ekB7JaLQMpPGVtruqF5SAdRT7VpQuTo5AzaBdUGUNGV6h3gHR91k2eLuWEyBhAvzppejKQsEvUERU6cW9d5728y",
  "key28": "2EVxW22YzodDjEUPUo26EzJPrw441DttkHpJ2An3y7LdhFRQSXhLYuTBGyuokDADMFND5TdaWE7Qats9azendUbE",
  "key29": "2739RKCJontc6JdFQhUKRJ5f5n4nFDJQ5YxvUrKSa6saazUys7kkqLMf2PB4F8GejxFmT1DnejvezSzeQFsY7rso",
  "key30": "5XXLZtn2iuxbr1WGpNrS3uKgHQ3QoVWnvGst9oeg8HqVPa3EEJQjf9RWAYERyYcYC8mjMsjYgqVtfo85NvtddMTX",
  "key31": "3Re9ktLKB3XZjKeiTuJr6RDEjE5Kr6VKH4Coaxb57APB12JSVsevFABK35FpcAo7CBikRoUAr9y2yTwTWZbZz22z",
  "key32": "2ge3Mfv2c7cqUigdyHMSBvWw1MCZo2H3Sa3LFqk2APfWBMKBg9avuWtQrRTXGawtBRdnyyzhkT88W11dsDPfd48j",
  "key33": "3LKnUSAtkciK6CAfDQJPwhz6beGdpqSutHJVxFGAoHF29aCyVmZMumRPyvGkQQKPE321pHdZ9P92sUsaaRoE4dCn",
  "key34": "kfoTWDtUWQeRwfmhz5BMywT4RUwWaPRcYb3e6vjnX6Dg5uJKZwLRbZcV6EfQi1F8PJsFr3JE8BDZsdiuRGCNSWM",
  "key35": "5ZFw5Wziub8binef9dSCaXxau9FDicj3mjgCk2YCBjGkgt634GU2N1izDnzcAd57zbh6cwzy3yted5YvNWAP65K9",
  "key36": "3hNJKFqhoU9yAhB2pZ44x6LwFyjf8Y9NEyVFBHquzLJP1eSg8tQi4PgqtGVC2vLDuasaAYBN6JjQW4vPCU1Pve2i",
  "key37": "3bD3dkVyUWBKqsbidjtts8GPHq4qLWA9UPam6h29SVMsknL7rvAxzx9BpMk8xh84jxSAMXkVLz8XVtBpWHnaHQqR",
  "key38": "56Gmpzswq9VSS7HNMXLJUnLLpQYmU6SE2Ny4zDkTQuRAPrzF49XF5UcGWihSA2SLdKhqo5Lc2VyU9APtSchuuPMw",
  "key39": "32UTLuD8xVsJGS8AWZX6jb1cDdqxgWRLxjJmVBZDjaMbUcrZvtBPuwbz3NbnJpBevhuLtwy6KL9NkpVFkQJK73hD",
  "key40": "3DBoVrm8jGUzuxVtxp7Jcvs4wEypTQYmve5tSv8MEkqyCT9QFVnvD1DKErtSXwxYzX2MDC4vvbQsePiUdJKJePDj",
  "key41": "3CYYPfTY7hj5PqSJ5UfZr8aM8s384DUZiyyv7Cuh5FMPJ6RvhFi3dtgArJiqGtwsS6SyFhAWUfzLR52yubtkj5HU",
  "key42": "3uxC1B6FddwBRKUGmUJcLXbF83DQR2mJQdvS1QM4n4kMto6rnsQBHj6F5utxV4wRrKZyukVkLJgGFGYgbiRuKuEC",
  "key43": "2UAy4DfgxDGR55ZTbfy9DyF4vPhjRMGXeCAicjgDSy7bWayktjZEH9jJLmUUWwrWtDXCDstF4WnfeFJZ9QAk9GeH",
  "key44": "3GfTBkR3SDn3M9AcS6sUdvSt2jCsnEXzPjSRy4RSZmSYEzgmSJUwxNtVqRRKP9GFKQxPipyGpCFEjDsuJEEdQx8p",
  "key45": "3FdpaG7Y97zuXbkTubtkHUTDpPvSJqhvmKuWDMv6AhK7tCRxX6iQLuT3H4CCYQD6zpfx2EosgpkNc222Go9D6aMC",
  "key46": "25hWUZSRYf44iKe28S2oB2FmxDooQdanbhDXCVYBW2Xo8YFJuhTddtezd9bEr78gxac3jtTVWkkT3V6tj1ugPD7Y",
  "key47": "rkfmDPKpr6s2oqypEreETxK9jxrCRp5Uh7ohhmXRPk8LRigB8cF6VTaGCbPxbrgCNEoxBh2DPmWXPLt64SSbouh",
  "key48": "4kBo7sUQEdVLoo6dsC7dM2kUuUtNasmuic5YXwKZA8Rxb14nSdGPmBod8gDCSGUWMeAC5AbyK9copy5ssmfHWu5s"
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
