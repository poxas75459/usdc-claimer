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
    "x6683cQLKkUzjmioAVjaBqJLWcD6F4AwEuttg8nnM71QWMyCwrbfwg1aejwowdEKBVAYsdXfR2kLvb8ubTg9VQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6BnGWPYhjfPTN2MNtAtRWYL5cZpcQGDS2YLSN9cujMXPPGgfShcqc3AqZXQoAjVVFA3MExNDuEbaHs27cL5PDbW",
  "key1": "3cskew94zTXpqBxhUGu1DS3no5uNn3DcK6zLTq5X3zDvGEvdKJZzqRDjp8s4N4R9YkSr2jpXetLzYCY2NGm42DMc",
  "key2": "3WT2hWth15TTEAHBuqomx8xi4YVBKZ6YSvE7xq2M8yVHNtPCryHvsgfcq89oHD7bcSRj3PJUa9pcfp6aXPoQyEbc",
  "key3": "45fvkjucTYTkYnc4ipwZNkonpjwaMHVQQMYaC6mbp8GiM4TkRKP5featNMCH1WSeqkfJ5fjaysb16Mr7HJJrhHmQ",
  "key4": "5CkhhfKtSQ6t2h9CYdPW5uAqoe2fPqEbGwXYZJVrnW6bcxhnFFw5Fwi3rPxhmp2XPeS8Z3HuqoTkJTy2zDiwM2Nt",
  "key5": "4wTNns1tnoh9t1pU2HbUkJ5d4EDeU5LgTcdSnUYSidsktSmQJTj1Z96AYqyWKHV7TKHHBobBpTyisYcd3ShvH54i",
  "key6": "47uExfv7BBUm5cYyMeNyvT6xMfussZJzQxAv292mRwMp9doLhnjBwD9mQ83CtnoVFB1ZmSbYev27oAxkYMP6kYG3",
  "key7": "TFzqRAhpBEh4LXqBipouRhABHCb23WHwbFxMGMzWGfV6J5ouCqFSCJgbX78zxrfUiTyXQGYXkUcUS19wvoAgwxJ",
  "key8": "jRRSohXBeyi7C52zGnfYWSQsRxzagWs7NeZV8Dv2gDF4ZwZFJGVTt17FJA66yQNRQPzWmy8gN53DKkUbZTkrjFi",
  "key9": "5o5xANF9n1NhfnCtKNHy8veMLnvymbrFJukeRA4J7WYMXfVk1YaDHZ2TFum2CU1usK3PKfZTuYRCroJdg1kUafqN",
  "key10": "22JMtr3ARnsWabwuM2CCcqv5RNp1MUkhEpBH9sFeEzWXvjqgwUiCsE9wbVXgkKZ3TazbUuP3X5yfMLipLqtkxiPU",
  "key11": "g9mhUATeoRohRtbVCmcFUQdyiF1XQvxMYsUYYSNypziWRYTX6tT6m5qHwUHsrGXLQBqjqwpbJFA4Mn8xjN78vEk",
  "key12": "4vfQKqB5AodMwXS76623vuohqP1oXCnYjtiHoRSGzQ9BQMzLKp5p2HQXQnbbTkpBy8o5BQMnjfioZAGECQhg3iiN",
  "key13": "7emuJJ7etsJqJF2qCZEdur62ZDZ8hWBWkvYRneUKhsh51FG1GM8Umeqnsi6eoq1QtFQBsNXKjp2rcms6cmx6Rax",
  "key14": "5jqVp87dRwWkM8sk2DELMZXQG432UDDYYiBunYRcGtivvAvLHrrrKpPHtG2YFSkg8ec1dw56npY65SApx2shSygg",
  "key15": "43TsHfTrr5NK3MhR3uCayzycxcayKwUmLQJo2xhKkDpHpHQZmsCUgYTYgc6RQPE5FYJfxCFH5GR2AVnBVLamjp88",
  "key16": "dd7pVkpUaiDf2DTQSw6N8sccwNGh7A82fixdX2EP9LL6vc37L1T13p5JQGjQXk4UP2B68KTZJDjNoLjZaWsDuYJ",
  "key17": "3FCznFKBWEK1vECMV2CvTEneUdVvVizvg63Db3cg1knVF2J6V8d8rTn78qgv5rDmJ6k8AmGayuQNj6ViGzBD46wu",
  "key18": "55SoVQP4bNQd1nd33z2ry5iKC8ENq7eWsXw3Pvhbo2LcGTu182Rr1vnbN3oUaanq3hcpMi7HQDduz3wE2HEkKsJK",
  "key19": "5tWA92er2se5mv8nT3CiwhuhL59TiGuGdHRKNkATFKEXTCpE3393wZH2pekw12uSrTztsxZ7KdKkLK6YbTjH9kDH",
  "key20": "UL4Edv46L1ssWaAhhfPG7hkdq4ZgPon64WyL8xaVHsZFdqccZ1UqH2kJHr75v6sg623An7Lndbyb9k3ucpL26Jx",
  "key21": "2FcdhNA9ZZBR5P5xYeZGcckFwbqmEnBek6NudbabRW7PTJrVfWWCvRERrDX2zLCtBBd8G5mJqHcCDtDvECdn18iP",
  "key22": "3N9Buz3xYYGPQjh2QuB6krKVZaWK2wBZdUB5PavYGZPSUfyPEMhcu1G9DMmfTMrCEfpod5Pq6TmvFNX8YzfKDzU3",
  "key23": "67EB2Yi4N6QWvCGGEwPuMJyhu2qQGiFFh1dSjpMkPfGGEXFxYXNHnrMsFWorsHrVrW1iWHAes7ApXD2xXgok5vRg",
  "key24": "cyjh2AT4pX5i5wUeVJQnkiZBFvkyECAHbotwGLwSgQyjRdiGFXQJpzgnQoYcgdwD5NHqCbC8MB49zLKYJXGhu84",
  "key25": "2EjUZZWVknQQxBU8r7uL4HNLguoG9FuGzvg6caQ4j2gtfRHj69r8bYfneawiSeMvv4WeXBveGiDYE5611No9cR8S",
  "key26": "2aav2AcECFGCcGVPBmTPWP6zUVh3boq9syZ1EkcMn6TKMDisC367YGD4R9sa7FBaxwYTNR8qW1UJAnNZcV8YuLX7",
  "key27": "2RfZKXxHn14y7wN9vDSabkw1vJ8WvaQNWaoPQjF14kpRbvJVc3ykm6rRgA2U3aYjztphQ9JKqpNGBXBRE2gTMfHK",
  "key28": "7f2HDRRqgdtUoFVEkSJdPmjVJkH4pLBygr1hRJwv49nckE6VTzVmyGYJppometuCaKHwfGwqdaCHMVf2uRKaWWF",
  "key29": "29RZPHkxV3v2BtAicFkA3j35F9W5adEKYV9cReDBXwbeDW2Suekw159krfvMKjZZSkE4bS9sVBVJyxFSBPbqCXox",
  "key30": "3LL3dbMojmeVygVKgG23Cgxusab63wqDvRdKKW2jKV9ZkANPHmwqExgJkUvmRwmCMReuAAnqSBVtMwKhhRQ6PEg",
  "key31": "5P5MPdhRodS4r9JLvWFXpSfw4whpRVu6Bf9XE8TSQhcrhXN7JtjyjCsxHtSbivv7fyGrJ9PGseg4FWF9YEbxhmv5",
  "key32": "2QS3L3MKaHTEAmWqFeMiGjFyw6cxh8A2X6ePwUc8eomCh3MKB7PfX4GzbrkJEgmccGjcmKgzHXt5DzU34bM7v7bH",
  "key33": "3Fv57ZoU9qQamyLywhnFtFkDywje2MZePESxYdu1iZNuGBZiP3dNySsxVBHQTDULv3XbbKgVAb6ueir4w8T53J4L",
  "key34": "5tFQxoUrtLLqNo59xbERiGG6WquvSJYb22X9MjsbXs4FGcwWjDc53NvUrQxCgPKCj9QfwkcmeQYaeUEKdmkurWTC",
  "key35": "d96zFY97iNTXaFZeDcBgpNRG9DCe8HFoEtJYQZv3PB13zH6eHgbBEE8BANCyQ8J8ykaS5k3R7AzHhpKchHkyLDS",
  "key36": "2SJUFQrofbjnHewbQ2KVNMZMNZ54iLXerLBZQ8iirAQHGusG7KjQkVmCCSTyYKkXrZGiTt6bCV5BmAX3LMkpK42s",
  "key37": "2t4CEAsui9GFP98SaQHgS1FD5H4NFSgtLEstTvc8s229zi3iX1oC62BtZjJZyeAwxxyH8ghGN7G2qM1r4tgE78bR",
  "key38": "irFMN32ax2UHPP8xhfic79fy7RZuKyFH8TMgQb88FuRdPbD7RguuM1yJXkBnH6i9TRv6aiPht1cJb4aCemP3x7A",
  "key39": "3WRizouQZzErz5e33HUA6okATmou9c3ZL46anx4wEfrpQohzGgEAXhWNXkgGXMVttEoNPcSpZB1gWicnJCiapW6p",
  "key40": "24zAfWXgwiJcVCE2we9ydRDJ6gGNi5rLzchmLMa1wKvt3imgTb1bdf7sfxr9BtBb51JTuoDXvp57muAaQyAzkpdF",
  "key41": "4KL7KT3V2ArB3uMten7rt6SiNYor1mAWJ9NKKVVeFoTveK5p1hHP62rdPYTf2G7MUa15JZ7SFnGSxwYVjqmz9Ptf",
  "key42": "4piFXfwqu4kiL9V34od7kGS8D4wn2SF5gVtosUJdZYvvS6Z8Dxmzi8PxnULqrtGHDQJS3fgSAefRMhS6qMAnhCAA",
  "key43": "3V86MSoCanCxj2U4s4rFih8ERHdF2FZWyQymQthkQGRzHA2r78RjRcuHBPbKctwUJLhE9hwLYoDL41KhKTxUkWdu",
  "key44": "2aqUXK2f8PFasJUQfhZQdmhUaqWdTENzkuU746jbVzmf9rZ11CFc5oazxYWnZEGMCSZQVg7EbScHBLTuvcWb4jp5",
  "key45": "3v3265LumCbe7aJxSbWn5Gu3eAJvZ9oFZUMy3WitLojL6DsGFDQSqg3ucZyCiNLq1NEFoyFoHWSEd993dcgWMx1V",
  "key46": "4DeRUi2V78C5JdQ3AFXwNbRxRCg6DyQt3i8yXFcnNyLrph93ubiiYT5y38LdisrHyw9ZsvMSoR259vGpPBuoioh7",
  "key47": "33kBxMzd6v7wwJh55VNVnBMHxbQ1ffJJvoqV5W8bY8S48qv8uuVkqi37HaunGrLxyB5KGTiyhrJC1Lfa4R4j6Vwt",
  "key48": "23dyTWDho6FA3Azo29CVy1LBrJQTNC5hUFWVgh7s9Np8ENUf1jVdzxq71oaGzoEiDgSGpA3zdwKMGNcFPX4zzYbY"
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
