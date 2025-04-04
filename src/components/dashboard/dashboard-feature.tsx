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
    "4zV9smuBkzYiadtt54rvK5DPjxJAShkc2A98pQWQcxj9YXLmcU5yYS7QErysvNNQjQb6w9MSJEHACFqwPyZzVHZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQDzHuchWMHxX8se1swwJ3aCBH1TkLWvCZTVNgFJ7yVC5KFTQQZ5HUEYLc5xE1FLtZ1vFZuNXaFVQpSgc2KuuKS",
  "key1": "5V8HdfiVW8mC2s6CnsKW2Gkcph5FSX2MxJ7NWkaWH1t9MdFJ1bXepxXRDEg1DmVUa9H2gDhizRkKQneiQDAaeLC8",
  "key2": "56fDyTfihXLzwGdcr833MSG25ZGJWeGcBHeMBTxHTh4ca5vw3WBcY4gbyD8yhmSid6LHou14rodpRYR2tNVHyGW9",
  "key3": "2Ke4YABxREotSCdnWZBpG2WTXppRDX5qv6vD8niN7mU468BD3zEKCv8UbwtsooMN1rpV2vqGvWopVnyspw7tvbsj",
  "key4": "5roCoU5kmjd1DhHbzcDBShNSPvSb3deuLWbeAMTs9sx9bEmdN6jH5UckrXXsu878X9Mb2Gwj6tm4M8yZcWjkAEza",
  "key5": "4QhgbQvK4bNX273LcigXdZgfmcHmJRd8naCZdxRBpQ8FRQwgBh1eTpqnWQYtZPcKuUnPM57s1kDye82z9fVLBMB",
  "key6": "3V9Pe3wPd7DgZHMcoJ9oidvBB6HyqQ3aXaHBkMh8hG6Kv3jiytvQ4CvXKH3yAmuDiNSKb2uZSHgfAJ3nv2uZhMBB",
  "key7": "5dWVBoTTkJ5hYf7Vmbc2kGpvoQb4FiE3qPXNPNh7nXFq4mH7heZ1MwG5P68mdgnMDw58jMEApHkrw6EZwtMTryR",
  "key8": "5YecMEKHp9xoaVzbb5AFvLL5GmnB6g55orKDsqpPmCnQajLRz4nowUHA5hqkiRtKtU7sqsaTA9eaZWgdMwQT72sx",
  "key9": "5CoyB8PjFyG3FT7wFbn1r6DSn6X3dEjwL8F8oP4Z5FK42CmPsUTki7w7DFfqG5zXRN9DxqfvXkK4Utrsiwkm76F3",
  "key10": "zPk1RCSxaDDbTrxa4VYPw1owussQng2hMVUwiU8J7M8NghTCZfie4YvFqALj75ZsUgGVY2sNRCUuVtnX5vNBFDx",
  "key11": "5JXZErE9EP8xsC7iga32aCwcMBUs5CpJK9cFMvArM2Ln7XpsuKh3i7YgmvqeJ6MMHJXVx2tnvHP6YDAwYMACvkeB",
  "key12": "255D2zNAwuy2XY7QJzS3Snu2KBAYpuAXPE4mfR4vW1P1wExF5eTgH4mWWbEbVmPv6VBZJ5Ey5uPqApJGmQqs3PcT",
  "key13": "2ifg5KJoTvrmAYc1CHsJTnS6kThVQMhsjGSuAPhVkr8uCQZimHTN5qU9io9oNmF1U6e98LLR8pjoU1JgXetgDcJS",
  "key14": "3Gh1HfoVsG5jDpAdjYKagsQ9axaHEiYdcoSXYQFJGAMwfq3xeYYuKyccNp8RQvj7WNuhP72jWB7uyQusPpTzF25q",
  "key15": "48G8LJ1S92pXHTw9Acxr58YQAfZPxvik4ewCgmtdvejAyq8rxQkFUbD6uiH4pSE8W8YPHNktfJBDFafypcdBTjaA",
  "key16": "3URksQS9ThgJXtdMpXix8yNXkLbwfpFAWKMbC3CF4tgcNUJypg4txw9FN75XqCcwHX3cTnfV8yVU51XWi24vZx6j",
  "key17": "Rj6aNS6Pbvgu2akW6M4AjvRj6RhJadrs271QGen8x6oq2jytdKmcsEQJ9UNVcUBgp5FBo4yAiASjjd4VMNi3xpS",
  "key18": "2oQC8i3J1tNzBYarhDFwPMkiRp7rGxtrSSdoGYgz48cLuXKNe34EHo3CdEF2SBVarXkF9BR6kodUCdEE7ZM5zGha",
  "key19": "5CrzCDEssisbRmTnvnuh5RRvnGvUtVKo4ASkRFE4Pfz3Gyg48bMy5qkRwS2rDnWRdGv5DU8jZZz6i6ER6jtDciAk",
  "key20": "3oQLzKZXH3aqYjpmgh5iQdZwpy16onhQLc7sRm3H99jH87Rcy7Vakr32JkVDoKtdpDswNPP7ema5GZrd53gARUbD",
  "key21": "5TU38DT8Fm23sFLUtJdgBsxPuKxnMWuW1Dw4V9b2iz9SrJLY5oyFDA8EoK9EKw7kgReHasa7UuSKECGGki8MRNni",
  "key22": "NiSqH6GqqUwPeMepcY5Kpw9K6dYmrM4ZpQdzn1TQpf2ukQYB8mfz6ggaDCfET4cTtThE7uKfVUHvBqXRkvZHYSq",
  "key23": "XAY314J1JfrzVdBrfSS1VXDcKygskd5bcjJ8NapFgd4tFzE7gUVEDsz9CtYbj5whd2vYktPdASqQQJHkfZAEKwv",
  "key24": "2yCBmUjcpUG9Z88dWC2EHraGsBauUX5Wk6CiX2bsjwMvykwkPiq3CRkStW2CBWUkqhyFAhgPz3jQArGeCK89kxc9",
  "key25": "5Am6eVjrpE1LEfpdy5Bks4zuQHo6WZ2qNKwyLm4H3P91nsRS1JpCVeiETnBcyJU3zKbheujvT1dyPXNqZmanjcMt",
  "key26": "3TeaBKFCU8fxXMSHC5DxvsiVcLArxia1x3AuLNJzp8cMobXiixqaGa2EDnsqqudTpgKG5kqJ8SPxDsmcjz7reEsR",
  "key27": "36NEdepfW6S8ETA6KELcD3NcsRMoHv89XMtyvGSv4zc7WYHQroUGLfsdGSyN5M3qj4SzcjF2dpbosHrjuaEQbNya",
  "key28": "1Ksqo7v5vf3GjAkqo67rCXRyfqq4xmGTWtbNYKv2TQiw5SPrkCkxrWso7ZnrpKg7bo6cjKAQhEw3SBvCEWeZtfD",
  "key29": "2jZmWS5zbLv6EwbSzwtLF71tRdXeUpcpwpouax9HbLinZH4Phje8UMn6JVWkpS7z6Aac23Nhotvc5jWYTkNqtDJn",
  "key30": "3tzpsd4PZbu5CAm8Lhw2bPjK9PRSiJqykAbQaAfi92zqY8Xa9vFKhcVfvzEZcqV622vp5xMLFjBssWSGc7PFiZLo",
  "key31": "45soPLhHajHmyZ9s8ct3LFMhGfhhKwmFzuErx8o6sjdhhXDcu7uqiNq6zo9uwMpCy2unfFCSuXcfx8LBwayK7ak6",
  "key32": "3QhYcGnMu5J2ddkQ2XeTUyToiaryBWQtRyFFdHcu5JfeyzMhzo4EmjLxSAVPemAX8btwCbaF1ktLnMBMikja6AgF",
  "key33": "4yLsa7HusRM1BsdgA7aYLgk1tYkFwUQeDU3mY99NjtqyNyo23Ji7MdjFUhzPDL6DQgEPzryNUcT1N5tNfq3wdWiJ",
  "key34": "57w1vnfAFp6xGmUqte2yZeBdaJ1Ap6u9WzJPHnnMMqyaqGAgGjE2br7924mLnHfZof6ZYaTqfJMM94hgBdMnmNbB",
  "key35": "3ZrwTDmPfLpM7U4tZiDrZoH4ZSFPuRArGJLLnwY9A4v6thJgqXdFKLhwbFa8uW5mqYqMiZBGJdyeJ3prW4HVbMRT",
  "key36": "YvhYqzjMZZnz6xcn5VhMhoBHAxMPojGctxCNt3VGp4JnCJ476RmGWNyiCdWRtXk9ft37euw5zBKwCHVr5cbrn8Q",
  "key37": "4GzfdaCN9ewi4FMXfFDFd5EZYoUTQMA45BVNGmaUg7oMkpcrgb9nAQaqvxkKZyBqisxxs9gCaFTNFB94P9LeN45F",
  "key38": "U4dc8vcpCBoiGhJamn1JWqRe5ipLyuLoNhAM2NJtJf4cHMqRrhuPpBvQmNPMec6qTUDuEtUkfX6wK9srfbLBSFu",
  "key39": "2rfTCknFmQyTRduc6pM8iXPeGm6PQ2mCmLn9AxcXES1QYG53ZcxzNrwitLLDsB4CNUUX1VLjmv6RJQaXJVGNqgJq",
  "key40": "5esGhvHTpuqQvSqwESwKvGHz7P8Z7YbQW3KMnUipFZncwLtJoTq17ZyED7YbsABWhCTXuJVTzm9BTriNSGQuXkNu",
  "key41": "4Y4hZE9ZQmnsaUXkMAL3kNHW9ZPTPoinw9g9EADh3ULG4kh9qa7epz4GGcAbDEJPYUriQHcg9Z3N5wZn9v8WTpPv",
  "key42": "5GxPT8W6ypj8xkY9y2krp8BjN1THg4GcakMjvCpFVNcdfUcbZXmHDeeddZdFS3ea3LkNyeKRepLXzUHnxYEU5Tyn",
  "key43": "24wfpYGFn8i7W4P95s6KXfhjCnqV3S1qBGcFZts3vywMdtpeQRnPKGiPtXHD5Vs5hJsuhF84bLwPb5KsTdGNsTfS",
  "key44": "3y19mPEcty2Xkbwc8YKZ13ETKxadV3wHBPFYcR9rEBwMcpaiyorPvr1oAMwJMiUbDmgmAQfXeJBsLa5fgoG4gmao",
  "key45": "5RzXsvCeC4t65AoXLx3KW8gb6t3cQ3NCVc9WRcajmFrkgWRrum53pQJFYo7EpE8rgscZA7dSWBKPknP1A9PMK8We",
  "key46": "tfksDG6gZiN2HFk97fanFLJbyhWCt3PUTVedahudky7NFt7Bi9cGzX7MqyPNcnWsQCfN4YJCtS46rcNW1wGkYAK",
  "key47": "2ed9hCvYu3NhQZVjuwmRmyBKFfAENBmvV8SDXcrm9pi55yWsk2wSYWRmQUeNTU93p4FtWjm19PpUyApLcYy238qc",
  "key48": "tqEyx5R9xBLasesRLHvZ8RY8VZP8CzQzMGziB19oBZSpgFzGhkfKM3J4NhiX8KKkkKNbzanVtWsTcoxzA7J7Hpj",
  "key49": "5yFBcDVk4AVsFjiF2qWkS8cvV1WDdBXRxsCypwvd8xGGvGvbRSdYfqnsNCzatSa2FMQEziPweyeZbehnWGDdAhC1"
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
