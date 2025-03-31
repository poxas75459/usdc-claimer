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
    "6WFYHG7X4fEEpswfniaKYJLB8xu5S7Yem3uNyw25s6YqHYwnyuUFkrmAQoNJ4A84UbPptgJcqZyJYwujZCYyNkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t63G18oCPmznQsemoEAof8iQZjyVm41zc1UJDskZZ717Vdvh61vN69QTJPy73d85GsXW6pSFuR3gfmU9hcveGBG",
  "key1": "5egM6zUyUP5Cie78iy295CHtftAxJPAN6c9iSdRLijsyMLT46fJP1Z8hJT8M9QpPQW6vG1evRh34WWg7Zuz3aZnV",
  "key2": "49ncLy3hErh6gf9uBzKydkquT7QXUeAmwBkdPWDFrv1Lv5QsMH4RZZmZGqAYw4TGG9xu9xU56fvungUuPuYE27Co",
  "key3": "5fnBKH6pSHYkTM4912NufpqLzsMoNK4DP97h42P3YbDHqUQVrxVT1GQQy5RAnWxpeJfijKF7kAdpy87PoguNMt9H",
  "key4": "52cXQdACv3H7VcTjCYCXghZw3nt5gpTP2PCaYgSJLPWscHMJwgt3ZREg4jZsRQUvG1JCP9kUqeLHTNwJztxQuwFx",
  "key5": "4q9rg3L1JNDZjQGkSo9PnXaZrAgWEQynvDQmHaTAfRMXni8LSaJ4BQF3dP6cQtE24HHSBia1mC2dkSgxnje3Vh7E",
  "key6": "2UcyYpAaWXEbG2rsb4aVTJVEDo57LWE2rpSJFApGrvuaX2qkkoXPkf9GjJNgVGn9itYbQJ6Vx1YK7YsgUK1H6AS4",
  "key7": "ypqAMoV5cGhaZD2wfFyoZf7obVgSbxJPVbyLfqmWGDhDgQQZrycfgAC7TTiFkqS3iikEiwCNZv59iYCmNF8VyPo",
  "key8": "2ecpCuv1aui716DttsnrsNUP1kE7wGD79mmJ146oxAL3C9gSZVWRYEMnPKAjDgzcAEiqMH1QkVgjrdZsK6wCBFqS",
  "key9": "4MbwHh6usGBnxwsJkV2hFH7SCe7kSHVxyv1hXQBs5SasMrjQxtL1AVFLyuxVqttSRz6viwMi9AkQHSkQuDaQ9xJG",
  "key10": "3r13dwFSYZrQ5q2vkMT9FJTNmtCq2GCHYRgQ7UBBVSGjJeU6a2f8S27bqRpzpWsAo5wuT15WpJ3yAZtieh6ptVf1",
  "key11": "5QnEpLfojYC6a9t3fCa9jT3rFjzK43D1BMxxVXqGMCk9eL1UBtbNsLcJKvfoNxNkuVmRMwNN4xs2Wz4tgErfSCWP",
  "key12": "5yYhavWXVQfVYRC2o32s8F94oiDXNQQBHwQq75JbFZ29oD2x2LMUTLpry9bPJiviYuc4ZyHAGPHLifkLv3vmrmSb",
  "key13": "5pZ8keNuQZLb84vMFTEvj6CYBQAXE1BrQH9DQRkGuvxpgYthLQwVW7ytvgws5tSmha83qxmfgDGYY5gT75KpsD9E",
  "key14": "4c1crDmLTW5cZnb7yaVzHfrCWaveLLd9urHcN6p7sFg1BseBRxY9sgZSJrvGBxZDBJbHFt5FygdjizefmWnUTgdS",
  "key15": "4rkpWq8cAxCjJ7nwwtbb3TvZJwuJ75UmejZsjJD1LDT2dnNXBHYx4ZWuBrjvH9KwcZcYVAfXgGpMaMXBY57jDY31",
  "key16": "2XzcYtrCRodzYaZkkZ87M85LTpT3PhXvtywt6qbMtcSp1LEK8m6ep6AQJMaYz4DmrNGjJjq2FGtRVJCg5V5Y6v9Y",
  "key17": "5nX9Nby3Pb1fxXmkeTEk1S968sU23BVgu6pCfitWupR67B22kePUTYMPquUcLFWuMvF2SLvxxy1mq7D4NsoUA2mu",
  "key18": "3wtpeBzRs8M1kkezas7NTsX8XxLAFMt6oWqaqhpJ796f5Zd2V5RpHEtoNpfdz5PVKnuwFVWY6nsXg4vLQ3DnizeA",
  "key19": "4Er3NCoGfNUkMMyzqmzRVEoDDXmQ4QW5dUeFHGsoVLVENAxz7999RafbVHE1bkMbHpaGCzmSezE1fRqVsmMdo2Xr",
  "key20": "z6wdmczrUgKynKtrPmXdDtzjtmc8AxwyQeKjUzbZzAQ8kqoX9WJXFavsLFWjJXKs5EviqH4PhfGpur7PAu6xaJu",
  "key21": "2iBFKgDp45phAv4aiRk3SF6EWGqDYhuwvrktTqBwdnHBVWcDong7BQJhTmVAFNByjDjHpFvAc5bx7WtuuSPWH4jB",
  "key22": "5GCx6Lv6UB7av3GvtzLKyJUKFDdVHhRM257nPb7a6mj82gFWo6uR6chYcT4FFCVGCSAgZW8PW1DDJzpB9oGh2y9g",
  "key23": "3iRKXtuntKbMVwLoyZTxjucNBYPh1Q8DCuTmHJHT98UA4ZgeP3qvz4cQfmN24KUhjjmiFaXENHq6XL94KBmK9EZ1",
  "key24": "3nwuLT7dtXm81Yk9P6tn6yHNNyc38zmNanNBZYT2FYZ2Bih9rHS61xR5z6cf9cr9utVjKd8YKmEotyQMx5dacmAw",
  "key25": "4HPbxSonM2eYxN6fsKHeXs6MvAo7mA7rVpooMNSftz3NsVSEcRoRy4CpPqLxae8tmMQdXba9FxK4RE4RutWpso1b",
  "key26": "4cTkdtaGaaL54ikNFeukCSLzAyQ1sLmZ9H146WzzGg5SFcq3kUjyAPVh54ghsa76R5N7XmksiuY39eGajF8WoNUZ",
  "key27": "5tuwPouVbpP3mS3VDTnY1Lq8nVyrhUqcekoxQhnZZRDQGc2BNtS42iWoiSqtNrZcqSBSAEPRZLFTb1HMkmvMokPn",
  "key28": "5f4G8JP4u6kSPScV7zq6q9ppdpyuD9qW4eQEhUegUDLq6mqfwvKBtzBPotQAFrGxLqnYqprhzL7cDeykB7ub9vgU",
  "key29": "nM4YWWpGushbgBDk5fDZnR6AZu6DtvvUuhodvZDD9oEJD5wvAorGTd3aFrP7CRXCiLLnpqqC1F5S46AtqyaAN2k",
  "key30": "4Y8SPdKUtYoiqYULqoA1tk9ZHdyy1Ri2UvChmLfzEAdHALdMrQWY58iLoujAZycmm9TJhTfE4e2zyffmT74ziaPr",
  "key31": "2o3P1G4W747JYqgwd8GjzDU6fcLmXKL6q8X4Ck7H1bgGjpU51uZfv9cXBCKGQ3jTvgbf8gdKoq8hotM5jMxJWNwN",
  "key32": "xmQ6QfEg5TFAAPSbrsYsU7nAfJ49BZCQhKusPbBpouGbw57NXhV1stjnN7MaCgoghPSdJesLNr5c9eDmqD9sxgo",
  "key33": "3s1bekRjBq9bXBa5qBnxYkLw7Wa3wijvkKVPCWcXyQe6A5aBkSrg2nFGQgHc5e7WwK1UqjXxNLYuUsRqjF2P6Gtd",
  "key34": "2CbJRSWgSwk81wgSEUjcZcRhA93LA3w16dS6HMETLhdQueL8yQCUbTbMPRQm23bTWszXU4veNq6BX9hPHkEgg947"
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
