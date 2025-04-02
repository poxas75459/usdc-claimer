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
    "4dqxgoS8yuZuVzn9d89MveSvQoLEp2hYnMBejBpLjP2ZrXg4uTgAnmfuYc3qbbSRxsUh9W6daxkXrWrKjSWS5kLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kkTVeNv5YFnDL4hwfTESdp4FUfGWYZwUt5L1LRe62HunfnPVTXeaAAa7b8YfDJEy9ZDbUe1xohoAqpvCbQQywQ",
  "key1": "2Q9ryHg5Fcd6cu1CPLJGoDwQobEUmczTU6PbngZ8dKDyVMGb9G9WVLUhnXCWHoZWtVsU7JYH9MTwQR1DkPDArdPC",
  "key2": "232cxx7AnDBiBWhsQ5Lj7eojsZU8RaS8i4ae6oGAcw7fYvaMLKx59gCc3bgaK7Gj2hKGrLZBFnW9NuKtUM5wH4so",
  "key3": "sL73TJY5vqHrbg8qapk7gVEkRYe6bADJsC63zz7xjLz1nXkskxnK9XbwTG57wQSRuZZjg7sqroVcPG4RdjJiUm4",
  "key4": "5S5PstjyZRAiWS461wW8jMWkJ2Cwy47BJiDtcbEGnYRK59ZfiNorb2NqHHemuYfEHjxyzekH61ZDJRgwddSFRA7h",
  "key5": "3LTPSgTRBbyhxN5gzzL1rcNfmRHETMhtPzsZa8JbdeiMMRZvGFCk51SNEiW3SZfo9UXMmTu6FgQRChDXaVfp3bB1",
  "key6": "2D1rTNXq21UFTJivtctAAv9hUVXffMBNTMuwVCgUjaYxT1eohwA7qxejWe59XsDRAGdM8ezNR1dwhLaSNoYZr4dG",
  "key7": "3GHKXMsytF3PHgRrrn3KbNpdg77auTCf6zLyFcC9q7qnmB5jDdnx2JeT4nwQ89mAkRpXAYRXSfXU9qcLj1cEs3qS",
  "key8": "4Jd9ZqiHkNB8cVBHgrUuc8pVkLjrQmVH3S6DLDd1JaQBrdkqta45xMJDQFH22Ao1cDeacmwUX3tw9111zwDYPmee",
  "key9": "5P5RSJ8wfw2evuHZFxfQYhHYtgubKQGt1BnBAwoGVoVBBFqKkyVt3jTZW6NGLAqCj1LaZk5CB8UWwkvSKjEgBmb3",
  "key10": "56BoaVRuMUwFDVLrAoP2rRzBUyswu879wNbwnxUGiZybum8mxrHZDUj5Fa8z6HguqKhfMKvNoJn2gWBCbQkF5k6s",
  "key11": "2mS9pLndKNfZ1rZZyMXkG2C1mETae24MxUYWe5KGEj47qLXDbh5uqqVqu4YGBdfUx8DPg8Uw5pHpFw4oRBe3FVLo",
  "key12": "3aaEzpwweH76Qv95JWg9NvGUBw8GgiJ5fGyTnvMCUA4uxycFxpJvnhWavaJNPSy9FC6G2Za8UidSWAk6AnpuA4gc",
  "key13": "2JoK3tUzCc3pkBYCJ9ikiXSMTYfYJuAAUBVduC85448ZfyrZZcELPVS1dBsv83ikh1tHP42TdyEgbG6jgP62r6yu",
  "key14": "3yvdtmqGtkisNj72RFjKqFvjaRgbBt8ErUuSyHEoyhurn5gmSNkxV3QoSrgvX7mQK7NBcZNGT6FZNfmiDWvRnnTP",
  "key15": "2suLQ8ouCd4xfQsPW98W4zw4WTJ5u4sGJUSte6DF3V3DmdSqZDcyCFN28mZwQxWwigmmxhqRpbzNUGUJ3JtGinq",
  "key16": "5KtofvtupXfeTXv3BLS7wszK2XET1mmWX8AM45BYtuex3zktdbMhnWi7cSrEKwWmib2aGLqgwADDM4fqmHKe3jGY",
  "key17": "5y9UCH6237GS8PTPgEjKYKdQAQUXD5PqAtE5V3x4PWMeNYPQ75sWiHyX7thFxABtbqKUJB9fRDmqgJKx4qFQ4RZo",
  "key18": "3YT4MkWjQFXzHazmtmiJHXNfxZndemkqTkGrtKUE6gMBfqopPfRoZQev1ik5y7PFmPCfVakhDpLFYR7kngGeSieK",
  "key19": "3e8DFS1g9scregKanm4K7zvzNATP8SgCyNi5vtSTHgi7bgJJ8JRYHogFuToweYntYaGseGnAV59azvix8X7s7Qqm",
  "key20": "26xJt1e2tdJ4NkbxyydvwXJ5kUQrHn68Br9UwZgMixmiU6ruZiyuj7iX7kZjKUHJTx2uDUzFr8iUEoiDpaFPV8dp",
  "key21": "3uTScuLSWy24Loug1WMLkJLMLa96bZiBBdvkqqXSLPxwbEApshPPuJVviLCVkBQE1nZBo3ypYfDiasDbNiiDtALv",
  "key22": "4mDuWjYxvS7NpcccddA8kLW7MEftdLiBP4JW2ZmDXNTXXUtmjMbyavu7qQFYqunU8jjjnFfVkAjKMKBJEHUvTqhN",
  "key23": "4fzbyX9hFqzcrLVKsVYesPd57LM8qUsZEPVSprrzAw5XPF7Ua8Lya6v4wNEM8iJ4KJcXnSKXYX6igAmJz1LvgjFs",
  "key24": "im6Jjc9CuWJ8YRdtFhTHe4v2DkjtTeFUsVyCpkcSZJCR4ETArgCDvhtpLo7xExrKd8keEbHpsvRBv7wWcHzzzP3",
  "key25": "91AE24f39hGAnWz7MAaRZt7zRo4TF5bmZ3Zp41Zqg8yE5mxsbE6SNaTC6BtV9HGxXM5qpD4iAgLLLe7E2HkhX2E",
  "key26": "66xF3VHxsH4KxNxhXyMtmBKvV82KMGc4aw8dpmxyBcgDqUUfnJhzhko8dD8Lyrt7EZgstDxfWQsD2vp3Huke6sJ1",
  "key27": "4xz12hQshsz2bUWBYbELkZtAsXdH4i2tLdMZWKNBYV7kAeXNFZM8MMbNZxB8tyhrMNzwhTvUmAP3usEH4EL8SLwU",
  "key28": "2MRe7JdBqmTsdEUZBiQA1GPUAfWghoa9TRScNmzmRYqbctN4uGrSboZGwSEcmNKwSRqXoVwhPjzaKpcWihAxcJfW",
  "key29": "6637LaRvnedtTnXZAjh5nEDtkwWTY1Qda4xsiC6JrW8bK84dYAmmMYAayrM26xzcb1fX6yFvB9UYeNAkqJMjxC7L",
  "key30": "2hQa7n2Q9Bw9gtq345vZbd2QoqLxXfSukFrrRYJznofVB37UM9AVJHSaUUWe8vKmYAuEFYuiVX5QJJ19ZmyFW2Yu",
  "key31": "47YoaqBESMuJhgjqeBGF4AKSiPJvQagQCAsTZFNgcn2oV4RJN21RErKjfPaH7pbp2ac5VKL2FmNPUAHgCmuUWEAd",
  "key32": "ZGc7212xsar4Qxqv3Df4f9E5XNyTvcQcb9j6CaJB7eyVysBYe1kDkhSXMtUWAvA2yHkkod9QNMYbhcmb58bUpdE",
  "key33": "5E5H6uA7B4Ah899Z2KiyeP1dVZLT57TmJwnYXES7aj97Tbo3fLJiWvSHMsQBuJKYQdjNKEftzw9Lfi8FePK3KkSV",
  "key34": "4x8yhyCfycHCuZEjW8Pin4s9jgGd7wPKdza6zDyW96zDTFaLmTgHeP8yus4GTMEsHQ9PYQPtrX9TK3JpPdv1SKw9",
  "key35": "3ox3cZAFj9pwoqgZ8zzYxRv2qbvpae5ZoQoE7zP22ZQFM2qWXUVVRnmvCiwpUc1oUp3hy3pmjNjghbmhob7xLqjR",
  "key36": "2FqT3QeuqWWGugeuuG8bvPDTN4NwNR7ZtCuk8gmLxefVf2VE21Bm3BU7BKZJftohaXzbNy2rBwAHpJGm2Xm4mPAW",
  "key37": "2WxXYEXTpr4XbZcs9uCNaLr7PwCt12iCf2qDyGS6asX4Z1RADLJG5dBJR7xLQjJFhj4k7LX9c4fb1WNQxRdGu949",
  "key38": "Egc7EbLkNEpLPEPy2UqpuoVSdRkApBWgBVu1nkXUqGxGG1MZUKW32jzJzRHbdNt8e9x8QAW9dtTmfRgbAvD9Ywz",
  "key39": "5L3Lue1jh57jaFNQhubWp79Eg83BZpABk2Kdhx9eikNh29A7DHqtbYLMFpaWp959owjNwAqXPTqnGWmoJTmmCkhe",
  "key40": "4X6vxvazGQnKwfGUcak82yFoFrsmzo3bsZTfRKXo5KKvuZcJYST3R6U4bs76MQZ7BL5JnyaAFWs6oPjjTjNkTo9x",
  "key41": "Kz7bZQidhT5kb8f8NSBVNaDTGn1wbtKBahTcA8V1eWWiJUUf8UmTpzFq9nAKTwotCo6G6pxxdUNPFEey4djiggE",
  "key42": "2kXCJsMnkMmfAJwiD9VZyzHntJKDv1mMDPNNxaB94RbUPLyPSPTkKmUdXWFDKEuKLTMsXTmYXtBwUtXZrFxGc49t",
  "key43": "36CztobvVxhNbcVW7ZfR6TU3VPtYDKuVDQXFwwSLD31ZCVLfdCuV1dwZMpowtQNcismL8w1d2JBWebAvGXThHCJY",
  "key44": "7oUSH5PVb2YGvTo3RkxJ86p1zAGazqRdGcf1P415QyYv7beAmjzvPL9MNtUT8YabS2LqgRwYpWJorh7yakLrFag",
  "key45": "4uTJPW1kKzer3iBgkHupGkYQtqfSMG46dHUGgck2bNKEDrmqq4BVjf61rYC1iP2EbXzzw2s93hXoHfhSLdpBAEKd",
  "key46": "3WUtZk7i3LGKHRHRArT6kXeY7jYFmH5R88xQ4VBnKFveSW3yQ99G5ic9MBY3Lmf4xAiaFu1cfkpDVJbgkpiEAJiT",
  "key47": "2Wu8pRxyqR6HyEpJGoAtWud9TRpNqafLmV6xEa3amnTaqdWJKg2XCCxXwTRS78rPkYj9eGwpPG646KyMCzE8gbNU"
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
