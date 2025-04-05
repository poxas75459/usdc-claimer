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
    "L7NQazGqrQhGGoMYeeipAwLnVtoFx4A98D1A3NU7xMxqmsE9hcnbom7FaRaAU9Xqy7rtBxcinTez3Efo83LAdxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YsdWtdCM4dLobXcqABKo1vieRq9jatxG6oprdHAoszUuqChW1sFDogVMou3N3phaU7tHjBC6XyVwbfNWDCM2Jx8",
  "key1": "3odiMx6zsuxzqr9JPM91ppzzTN1ckUYurCGQ4RD8fdTws9FsJ79uctzZRCHkveHWj8vEyujjnCs6tiXZHzbrNVAs",
  "key2": "3FnTxJ9mzd4FLDqsVUMksdQtSbZrLf5SpNbSRXiSPXndhaBbmfJsAGXqDJtreCpHoSLAauUHbbxzL1fzTL6ta9pw",
  "key3": "2FLHX1xRs6zHZej3YfSswXjiXMr2cvXmJcEu2NMA4YyfAYWBbCdiJjYrATWoBqnTd7htgQczfLaa4yQ39j2gQtRB",
  "key4": "42joRa79Qy1y2zZYMrRbF567MkRG2qK8f7jGK6nfHSQXXTsexxipKkNmhmiQzC15WguDHTZztAJr7enNBxYvqP64",
  "key5": "42x14qPFdSV98FaDJZqrWgC5nBPEX1jTb4LXihg8LieJj1vuJvzAWM93DvRa8B68Sian9uYnNC3VwEccsLTRLxSS",
  "key6": "4tjVpwsdgvDEixqE4kJUoSqhsQtogkkppqWmRkanamo8YZHt1eKLDhvXbRKMsPtb9cB7zzeDHvmxKvDqyFFLqjXd",
  "key7": "3RQoFaQD8T5b5kPWJ7KNGaHDw8SiZgMqGwEiNj41RKaLY2mzLRvBTXsCpRD64VNexMsLkpnCLWStMRQ4j6aUS1g4",
  "key8": "2SBoEkRkWLZUu5VVYTyZn9aegMRaBHzD7vUoTpWu5sWfhw89ocWjWPoUyuYUTJqaottK2PVgZp5qE86UbgbB1K8e",
  "key9": "4LxNv6CXvhW2TbkzhLxdMmuYKfNeFuQLxEHvcXXhG92SjSn6DxyKqXN7hqkwfW3qmbu624VpYBF9Ysi8EVpipisv",
  "key10": "56aC8w4C9QunJzLVgYvSXYU2wLwtf3aepJjFuZuYW6qy6iwaqMaNvQCBXHXBcKJainCHQsmzoZ7cK7fXfxnvcz9f",
  "key11": "2naJoCAoVZy6uMarVs6iPCr8VReausjKPwYLiWKMbhmoc8HQqgw8dxCCrRzn7uDubt1Wtw46zHf8WoCVPU8fnZiS",
  "key12": "2PVDKXKtsR5HAtEsvyZHtHKQZXqbnbQrPvQFptzy1KMPTiQqtd2tfL5uNTyN3fyzgNFpTeQxCspCrYmFu1pY9tXZ",
  "key13": "35nGZZCEJDhEN4Z3cEirQXHisG9Zto5SwiBaS22MgdyKuGP6tDBMmSZy7KYtzKEPEMxX4KWm7zFew66xZB969qLH",
  "key14": "wuWU17HFhyq4woQzCyMniRoZKLTAimUvfTE2Jra7rY3GWVaL9nfUB19EwJHYdmKd5ykr36YM2BGjVbFUQEdAG8M",
  "key15": "3PvSgVDAb2dk5udr8xBUh4Wnide4HqzU8c3vqDco2R96GESS1H5mHa5uctVJ54ni2trXA5SSDXmaZvCobcfa9pr6",
  "key16": "2hwxxDRx5bGVMGPH3ixHCfPkvPPpFH282FtzTNeFF4ouRyKQF4aXPrceURskqYfL5AjFriNeRhZ4rACR8vDJsYZF",
  "key17": "2f2yRFYiHS1SwHo3oTkusnwDhn2FLjhdScEQNt49pQXo46ndaegZpyXZ4cYHTR8aPW7c2vxVJ5cPFLzKLJVLEFGQ",
  "key18": "2GcB1ajSGvT3Kx5StXpTXxCoaoRop8ZJAFMey46jGG3TPEdgEafKSFniznBxAyiefLJb3Yo4TKRLDXiQNev3ub45",
  "key19": "2mwyC6SXB3qj4aSi5dPe5gvyNpAmGwJeaPNcLZH4LxM5Qow5FteyfgZ6QoffzVBSEi98A5xVx8dobt9kJ5eyuLub",
  "key20": "2kWUeCf5ZhPV6QhL2nsbLWA8R4Uj2MHaGqvDeeyrFVM3vmzTpMKkJBy5SPCNqf1kDTTsWMd1BaeANQoVxyR2t66x",
  "key21": "4f8V4jGPS3xqoc1fSgGZGNq3hkkRBzgsc9jiiEWiPAYyS2d5dD7YSsQLsyLKeAo468A9tz7VUAtyoCnHgF3i1dWA",
  "key22": "2Qn8SjUvXXzMoAB8i45QeiujMdnD1S6rhwQErPEiXP68aTBaevAwxNQKwQbH9gv1hGGqaXixeXBCgmqeaz2LEvFp",
  "key23": "3RrSNMw9ba5g5QNGMXJnNU659GSGkBwQuh8roFwfPH5FmhRmRMCd6Ued84UfeBAdjoUFc2im4WMLUJsh8tf9k1DM",
  "key24": "3ZoLUWp4v9sNWZfWXk5iZWJAGLKtYA2hZGceZqGqxZPUNp9rqnusbSrtQj5iogBJYi8UXTbGo1g4NiES2x441Tfk",
  "key25": "J1PakQCu8C1nVopzqAKjePHYc6XowoV8mcXahnY8gHyZ3Uo6DgnPVyvpWAX9XoYskNgrFWrNfaxGsdrx9LDTjTV",
  "key26": "Ajw6ZqgWfbRuNuDpfuehHYyRUDPDtHA6jAqBwaWGrGQVc18xYHkwKUNpH4fhJeLkrsM7egQEDMxvoz85xFgbyQF",
  "key27": "36G2ZxFbPLxmVznt4Ka3JNfgELvFLgMdERo9qGsC4PAK5oEWB215ukhQDgCgtrT7bMcb2mojEXCcNpQkc2DEgu44",
  "key28": "43aNo8wZLNtKUu2N9GsBkawLWxjThDMgUvs4QcrFgUmq2QR2hZPy7hQxaEqT5aBqnN9MGQjr5YMoUuk6wMjntU2q",
  "key29": "47KHC8D5m9cizRfthW2i17e4XcL3saErqXuam94EEjk4ttYEGwAo69juTNCjjGBcs5dGAXx31P6knyRY2j5Gu2Eu",
  "key30": "exuQWpk4h6LCHXN3oet5ayS4xkUNL68r6adeHukKDUDwnHJwMUbYM8BrLTgehR6s2W1B7y8YddEcj2LtGB5ynod",
  "key31": "56wGM2YcreAHuLwVZiQDg9SN6NLqJ6Ec1QWgaDm2pxG2zJrnkmV48NMmySbaWXscrv9gSUHokFV4rxAHrwwXtLQA",
  "key32": "3bzN2K1NtKNkmw9C2YgoZQmNFCjDczLBQUunbTGUu39SGCGekcz3wkSqShaiw9i6PHKd7haT4SE9yqZmS2pw4t8J",
  "key33": "4Y7txdDWndC1j1CpqDpQkwf5wip9EKnHcEzqJpuSKPwZ8K2KBLjFKDZyEVBJuw7PDaQ5HChPi39GmxhmZ1NXYMsF",
  "key34": "37ai718ncmaG5vhJiU2rrwXWMhKh5avTN6163UUKidkqZzNR5xMVomDWre7zo83vZuxJPsv165m1zMrjh3DQj59E",
  "key35": "4pYF2HmVyKu8YmnGZfFCYUsvh6BcxXHLi3h7Z1qkFWcHjrxEcccNu3i2mQX1uJP91Atr8GDnfF5t8rX63dgA2GmB",
  "key36": "5kQjawWapEYAUCvVf4MHjKhJst5TDHNq9KtDMtvcLJB3xbV7LmwPSoCnjreWHsUqitmZhWM6ZfQzkRBeKxvx8Gcv",
  "key37": "JEHsXTAiCPQHjTTjUkhM55P48GeWUTHMawuR3G9t184HcpFERuiZGTSmhqcWx5CDsQNRLkWQ8zsBkmHYuBDW6sS",
  "key38": "28D8CsPQCckSXki7oEcHLiUu4RQVZLykQPiuCzA14zkbznySHLm9sS25gyJ9Uag9EHJg4FxTRx17LFKaqp9SLME2",
  "key39": "2cScLDBVQE7REDJYtnBNM1VKNLtM4V7EfEKoS7JPG29Cs9Cr6kcMj5WkqE6AThzJhQ47LedBDEVBdAcwnnQa8yun",
  "key40": "5dgHpXxzFojHTT8kkHRon12rMHW8oymAv9XTujey2w69qGoTMKgnnoboeFqMdLFhq4BFS5CuvNSqHUYSK4Rdxy47",
  "key41": "5wTV2wzABN4dMZK2shuaJ6tD5vPngSbobAPeTVw8cWpmx7pYSM41M99vmazmmT1H3yRmgEgn7W1wjqtEp8zp1k4r"
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
