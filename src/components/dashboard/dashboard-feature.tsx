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
    "4yXeLuU9JpF7GNRCycXLPrBJfzCs1nhh73HV5vufRLs7NsNVKBgSX6JEBYwN7sRoqqGKn9UwpjdqHsheWn5TAxz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ter6AyajUgfoivY4ELKCEGuXGAQ4NejtZhYYjCFLLdT5Cgv4GcwemxDzXzVsCe1Qycje4Cobjx8pQ38bgJijaFf",
  "key1": "kNKZPteoUdimYBGAxAmo7jo9jZog1hFBqD13MQVHEoS1PxCbHZpdDDDU5dsbbFHtr47Cq5pmWGPHSUMWP6TCB24",
  "key2": "3wEcqvZQJxnfsTJ3rA1Q63ed77MqJNbsgK6H7rwom9wQZWwQNjTEU7LbyZDbkj5z2uPePBsjZjo7pd8jqzmQfjAY",
  "key3": "58ggfrMtdf6qAqnu8Dbs6B7GwQ17UsbQpnV1d7gFEoFMJnK69i8BbDGwfvTUHNDVQpEsgB4qhogpyiwp4vf2tVUx",
  "key4": "6JAKcc8SDBdqzrNWpSX7hBYCCNtqWLpQojnxre1CEA5Kn5Ltv9CZ5EpKYcZv99cszuU7NMtZayzxmxpCC4NHAaW",
  "key5": "63pMKiMnyyMqteWxBbYBAUUzUm67au6o6YMDv6WvQdq6V9Bxk9qsGFV9GCYZEmuZGE1yzcXuFfywfAm8yWCSmaB9",
  "key6": "7s6GxzsqduwKP6ERnqFzwCtMbwu84wDotANmnVcAP6PPZbnr7oKqnaHnUrYiMtvF9hQVnyY2mKxp5RsQZnAozm8",
  "key7": "39bFr3n6d61xTiPWkxypzF16B7RhWnAMrRED1bBiC4GYnBagMLpqS4W27WiiSvgCB1Zoqgfzf99tMwQsowrZ7sX1",
  "key8": "3uy887PvJvUxwoRXi5XuHi4vg81bsSuYDoTQ8G2tKAyW3y4wG49Tjx2Qc7K2S9Htn7r6ogHQXRaz66M3sorJ3Wte",
  "key9": "2PCeKqYoHyt2HAJHXdw1htDXycmnXkktzNnNSjfF5DyBfiCgyY5tJVrq7yKBdYVb3XXwQSTdJiWaB24LeFdyKNNw",
  "key10": "2y7GZmiHgBSxzLiG1c79cPoA33L99Lrs8yrENPacnWQh4H4Kzqq1ViyoGxTpUX5XhhhScjGZJT6cbNiNE8DJRvGg",
  "key11": "m1mNvWYy2i594HmqVHQch52FSTZetNeUafVX56dhNLfYhV62kFTvkwqamKaAgwCBVcpBA1BosS2cEYezZqxowQ8",
  "key12": "2xdwHJUEQXkuSUVi41vJpwfwq6RhUcuVjpNCnWinLfeqKCeJV7MvadzYVwrNb58Cg4K5C3K6Vt6Cfd5ugYLL48ga",
  "key13": "2S3bbWjZwqjjLL3dERBwPvKNw8DMaD7DFyFpnzPbAtjVdLHvqiznaGHDRd8gaATzz15AKFuYPV5nvh8roveyiQNy",
  "key14": "5RyigTQnEzDSAsHKy2A95EXNNpeVAFEXMst2DJvKsvE1G9pEa9SLvEcLpE9W1wZtd1xHCVsk17r278EoMRMo9iHz",
  "key15": "2ayGfzAx7idYUzaSW7A6FxqwcajbPJvHabrBpoNtcXgGwkfmQcWXTg38VCdiVYbpQx7JJU1FsHQw1CJfKjKdtZTX",
  "key16": "26TTsqPKYFpknq2j3BVsrMcZef63F86XaQYt1wGmgK7kyA8Sf2jznrgcBoc61hS7wL7ga8DR4j5VFmKuvTqMA9pc",
  "key17": "27Z8fFg8KDmZ3FLgxiqxHSo1WbXzQSh2dMrZ1JTsvb953sU3CLQTe1muqrrrpKLjfv3YKvAZe8yDPSiKmKWPRiF7",
  "key18": "Z7ciFQeNCbUKvnCEpw6gShnxdaVYYzC2eYVWd1NybwDaSLM2rc9mxv6bDhdFRUZbgCaPS8e5zThfTg2cVzZXtGn",
  "key19": "4qnRxzuPtP8KBCEqt1yjVcs2M8p8aeMKquf1CJ3gnbnDy419qxSRTnpKpbraRsimcqjN3mcT5bR6qZBpg2R8796h",
  "key20": "2B3d8ki8y4vHUwAStv83Pr1tBzPkinLQsSNLL19CUSZhcGUtZfByn8FRR1R13aEHv4PcDSh2NGgFPDK6SFFNNQgq",
  "key21": "3Z6N7s1oje37QuhqbGSwnjQbYcNzv9snykGGDKrLVjVKs2JDHzoMXW9Vz9Lu8AcZPVArYej79Cg8H9TTKsmzwLRG",
  "key22": "28Yc69PCi6yhoKDLxYmVaFzfBmRPMLee9FeXP3PDCEJiy5L11CHVYEe8eJ2xtThvuBT5jgXoufgPn4s8HQq3DRN6",
  "key23": "QeSRcrWsYWhrq1PV2JSC6JUCV7DgiUqaNDMUjcWBgu2UyqfMRPxLEUveVxTFfhPioy8suUgBferr93fXtd5Cidj",
  "key24": "2ME124j8NVAxdPJ7f5ZRo4NoQbjNPJ34e7eLeodsn8kUWawVGPEZ4Kut4dgPF7oJCGzQUwswo81uJy2zqU6PVPi",
  "key25": "2MBzyeeZSKy6fcuSPyHinsNL9pXqUKhhTxgm8vsqCRsrQ4NUfej5SpeW5o26UhWPwGPzGpYZazCJC735scHctdVz",
  "key26": "2uYL4GowQ5T8CehrNMiMCKaqC5fkJEMHQUA6rsSUxnS3P1wgugweQbyi5mm729gXWQE3TXtXYU68FaoVQ3K2jopy",
  "key27": "4U5tVwxpvXYPPUFrG4rBwGCGYiquA2DjeH8b2MQLsiG1LiXvEHQc6Q3m7kAU8bCGEr3HLPYqiYMWeCXxZJJUNioj",
  "key28": "3xeocejWwD73gtPcbYFWahpwviWHiAxoPyxu2WQbQnRQYRH45fnz44QavJqTvTHG4aaaYNw3nAxbefkFUfWUwoxL",
  "key29": "4kP4B69R3wL4t5PFuJwzdPcNUyb18VuefC45scUk1Vcddf3t2Cx1H2afQ2mLdwqcfGzYWGUzCmA1auWuCpgDsxFV",
  "key30": "2vr9ij9pTATDDcS7hRHpU4VLwPB4mQ6jG8p16Lm1YTuFTpGiDHQLVw5SJ8Pu1S6aU1SDzQ3U4YR3L31v2xbLdCMq",
  "key31": "3kdBV1daitdbx9RjzzerKSp7not1NY2ArMwGnhKD8TMR1KYKuo2x5JtwywKZd7A8n9tpz46DRMQQgPEmQUmditEW",
  "key32": "2kF1FYDbvvRrqx2V6nWwZ3G7bQPZwdskym6Sik6XQiGyVHf2JrnxYWTF1pDvge3TTgv3qrbH1z2cLNLyW1XdRe1N",
  "key33": "3czAZKi2QE7MvxeywuJQHeQdMvTGiKzAoPB1wkP7Mny7hBQLySDw77TEyJSjiQKvYFTwP6icerpnBCxdipVWDD59",
  "key34": "Cp4Z8rcpuBhrbSpZkLB4pPHqR6KZij3sPAoodC84nbGV6oTnZdrTWvY2Ld43bwkvVRemHjVsCbiFWWDw5fcZFyq",
  "key35": "4FkvZQGuJo8sVd87zM9ZPhYqTqR7Ak4D9KvQuCXZ4gdXqLRckqXyb3rdvwRoCXss8wyY1on1frvC1ciWzJ2LzML1",
  "key36": "5Rpt2nnV5yGnvh4ARtkidGYX5YwtbBsb7ZUx1toesTwKUGUAs8Uau3UgjSmkfysUu7dLNHzpeWD71XhhQdM5cBUi",
  "key37": "2STRGGsDJzXwzhivztjVJyxdzdzVH5NcqureRHFCi5hpNEPHuLF7UCbpeor7MkJ2HJ6wudiaoLY1hHRinb95qacY",
  "key38": "3T7Qb8wDxb51ZPUezzKcX4TkY3q1eN84S5ZMiC6SfuH7PTxbakURW8dnnARVNTZayivCNHiu27j2o2wHoWRfu2m",
  "key39": "4mVfz8ue55Un9h4xYGVAb6YP3tsqgsJVGD3QanG5DzcECtyDWxVohgTYQnTkcvxdxhPu1FdkrXz7oDSZSDmTZCVi",
  "key40": "165KdUXmrLPKuRRMULKtyUu52HVHpSiBNbPbvvx5WfPcoFrtmeW7zjfvKXdqYg7bPBDXRSjcxjC1nmYfmts5KKK",
  "key41": "4VpxNnGcfKw8V2qJFr8odQy57gmJ13rJYZZpDMKHoXyiXRUBcu2SeqVKLbVnTtAxMrBh6nnPDCjMC2QXFQJuWZ3c",
  "key42": "3kXRaKFXYwJi5Tk2s2rAHLNgrLr4ZBzW9pDGVhPg4z67e4LMozrfqsPouXmBwySEeRKNDNDtPioAetnAcpHKQARX",
  "key43": "4XmmkjtmW58uWt88UTbWH1o5rRtdMD5nd6TRGJ45wxGXwu9GKgdGC9GNEvKrpoG3ppYxTuAVrpZvj3T2SVmLkaDb",
  "key44": "36tF5iK9sHLZGx1VkzRta4ErQxaKTCKQiJRbwe32Ci9QMFMaFL8M5xFMug7KivWdXALTYhPvafziqRiHRwPxm6S7",
  "key45": "ogvq8wwjnyCKRVqLqzjha1vx3eMmMZkLGuTdTMFjdGdFW1x6iVfGpfnz232vAfEgshX62s6JZPFBYJGV2taC8Yw"
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
