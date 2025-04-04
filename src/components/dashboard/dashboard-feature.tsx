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
    "3YeSBkSTYyNQLdzKgGK4VkR9fMjEBp3yCySkBdXgkZdFumPw5Dx2wRjPTjRR3osZnm39ye7gAxjAM94fzhFqEexp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGkbqp2vBeE91vCfuNqMFjEdiDKXXi3PHiV6aPoNd9emUWYFUiJzWwQDThfHrb4FDX8YBzJsQtCwJ8QHxQcMnxe",
  "key1": "3MvVW7ePfqXgKGt1TEfoiysYJ4sBE1jTrAzzCVcdFa7rfvpDkcafSmZ1FDWkbT2tKVFaTzGNS4voJrAuie5A5LTN",
  "key2": "46uL1N1nuSKX6RJtFSh2ba5QmB1AdYwugjpcXPizRBxEMrnzeFBs7V8o4WkW6wSrqxPPSFN5mvf9YVNUiwGktxkf",
  "key3": "4M33VC9LPzo94NFPqMgBHa7xNbWDAuAyvNketZTasQMjv4nhLfWyyo58QCyawtq93kmZGRjHL6nrV4zY5TA9kQgA",
  "key4": "4zcWJSzHMezYqWakj42fBqD5uacFJfwjni3W454kc2EaqSfNu18xx2eveMpsayo1JDQVKqB8mL9GvVRHBrFXkB8j",
  "key5": "5mNfchsWzkZsKfJkxgU3TSXXu1fy1KvDC9UMz4RfPZhRAL4YYKy42MxNNszb1vULKKtK1o7kBktJLjxzVKRDgdhb",
  "key6": "wMJvmQqf3YkbFSjgLHANpUQC3VYCojkJRTLhiHv3tuibyqUbAYbQSzjm2AGHLUbNaqqgPJcyy8qdJ5d39mkTo6v",
  "key7": "3jWnZjpnZnjMJjeuuouViPjvuvhzRfReY5PuZ5JbQh6usqDnQ5bGdeNxmUSANkFkxoX4mQpeRRfbXAcauka8UGyB",
  "key8": "5jjU2LdDf6uLx7zpq5Le8oyHi7Ba8K3ZMkJQy7s9KyNmMPEBAKX3EaLj4D3RQ3jWe2zEoiib1xhArDT7kF5D6mDP",
  "key9": "2Dw3ZbQnfEku4vexrgmZ89ECWvcQEScC8PQWqrUdmM7Amsvy4PneM9QY8WaN5QBSst85tzgDVv1ZUkERrc6Coc9a",
  "key10": "5QHoQnUFz5KKauDDGs2S1GkjpME9CttUPDGDLD71hWeNWezp6KgFDBund1aV6KSQN2ArtfAsBRFF8gRy6vChqbRL",
  "key11": "5yYJNfMZdx2sccbE5dP2DmF7quwTMzAvVdgWwnC7Y1Fx9xR19VQHpjZe743SdTwUG35c5ffPMZCizUUdHeh6nuyL",
  "key12": "2RH7ai9s4uvXpdXWppHznAPT8qSB2XUjYcQ3dEU2oQu93X8J93mzDgxyNKJGs9m7f9MvW4pn2iwLb76p5jaj3TWb",
  "key13": "4VF8gSUJVghkbPBicsYfkQpSCFwaFM32MUPKQopA1L9VA3nBrs86STSn2oL9NU7ACFZxN7cTqCRvqi4bBGAvVWWs",
  "key14": "5GRAszdTdHRqvqUq5DFoPW4gx3AGTvsWQTjt2vdE78zPz4FW8f2rmNBDmTc6kDEJMpkqsCHJDwZSauTTksBJwfFq",
  "key15": "2G716gomxHTLka5M2DNArM9oQrWzzvJGkxVA8vwbvDoqJENuTq7r3EnuEt64aU4Q8u9CUkzNUGtfLya14ea8AwvW",
  "key16": "21XLdhT939o4AE5Qvsz3Q6J77j2V99bZefDWDS8PscjNcjrWs3XStEsjMAnv1PtSHVt1bosrtsw3tay93Esn2w5z",
  "key17": "3c2gVxCLU7E267Sw7QEkP42fTvspdj5pH7U6ZPz9M6yPmc8SjudjhMFvzg6SJ81JqQNZFpRao8qNqrbGFkjcYiPS",
  "key18": "5z9aUUhmHu6BJfep7QaqVPyd2A6Xb7ZD4FE2U514HbZR5963vvbs3b2Qt3y9b8a9kqQq1JVzPZGuBSMJZs4Xvzui",
  "key19": "66HLsLHritWxe1yct22914uJggCMvZuVC3QkL1qcz9TeFBJfAXAxeVde9UfBdNJVfgpcrh1P77WomE1pwPf2s3X9",
  "key20": "5UPUemkAyTRvtG7fWXPQagTiyZ5MZWEjTEZgyLpZu9BKfmA6u4w17UX4RxX7nnUkVnBETqU9a7rYHQ45LJV5XgZV",
  "key21": "47kck2HoEjqVoQwg4FvmL1NQu9CFqdeqgKvA8UavvpEWnTz8YCGZuyJ5BqAwSpn9vr4sPNUCtGN42DjiKzFDVHKt",
  "key22": "3CL7RXK5ovSQov1BMoy6qjixsEzYatKeAQR9MSrS7t9MiL94G3AFq19TKAVGVvCcjahxpkj6aVbSfsEFtB6nduch",
  "key23": "Hmr9Wo8QPk9G9eLxALbj7HL1qNKoAJ1qfYdnJYSsuB4Rd5WPuexb9gbuBNAzxU567b4b1PX4WdWTsKXEStNSvH1",
  "key24": "3z7xF9QGXXiiHp9NgBmemtkGJ54KL3Ro8YTV5wjF8ScmdDfobKDqWMrZpwqMenioDgWnpapaMPZuQ7NuqbbRZvyY",
  "key25": "4kgpNQHG1xknHiycE5c7h5mEVH1EB3PyndkB9gCBjMG3hwLbsbbhtw3ubwriCkKN3cikEPoCKDhGENWMvPJ4pfTG",
  "key26": "2pEVn8VZoPTUxJbES6DwxTjupC3FpWT3w16pQ7iazxV3yrnjd1wqNjCwX7UkhBoHgoLp7uq5g2Atu9GNPioWDrGm",
  "key27": "5bXzkxLznGgDqwhMZMm1qr7sFozCJouSFR6G8NNGAGinMsfgeK3EZFQdZLB8XGscHB9AKUH1wRSyRThSUtE2JC15",
  "key28": "3s3FCxNW43NCLQWoihZUrd5g964vEA3LZKCZS6cgfEsoaAxpQpzogzbPjkNM8Momj9ZtjTxMj8UybXQsAQS9Q7mj",
  "key29": "4Ay3a5gzyKdSo5uYf1wUPs5kVceaX8UWbrxFYc7fHjk928Q2H5sfSFUfEe6zMzTuh5SFzpeP9tm9L1waEuHQtjt7",
  "key30": "4ZQ2o9ougWZcSvmPSuGVzns2QK983RbwPfiR8HSbRHYHJYfGuJ9GL5WQNRqgwsvADKL59frkgjy5SH5AkWBiQkdA",
  "key31": "EPjEe889kQFQQdfX6oBamXrximM5NUqKyXPPHvbhDrwjUnppcF3NjKsLNkvp2Ujo5h4TtVNFARnGo5CP7aBm5dq",
  "key32": "35wrrnryoUASi9mhAUAmxi5fTS91221EqWZ3zJyE7GbB662BHQtn6vJb4X1g95c4sMESK7HKATjF6wB8xV9i3jXv",
  "key33": "4S7ePtpwQu1EieqbeEv4DaZfcT17cVGnx7iLyzwu8PGr8UnwAH266MzhfUqnwdByxULLFjMVqB7e7NhvZfVy2JxA",
  "key34": "31j3nEVcFeAtopq1jppfk3786Gt2jPefsPstrTuPQhLLbiQbP2qnUDdECx8Z4hQ1HZq39uQ3fUosgQr6fYprC4td",
  "key35": "2j5JWjAg7NpGNySzAxfSAsrsdYXyNJMvoeNmBx1t7x8kuugV1g6gJG5uj1bFBNx5rNB1MrdUDWwGnY5jAy3mRzzZ",
  "key36": "4BEbxAFiuvX1koiuUievz8EZ3rETeq23ip1LLDDPrMZq9qsKhM63g48s8DddV2F865T7nD9Z13yKqgLtVogb3VbG",
  "key37": "2uS4DJKGTciPZ3VrsxfD2Aq72cVpPU72HfPUcQTihZ8GNf7vGon1jgNm2sygUvByYcD4EXtZBtFNjkQoYc7LLFgg",
  "key38": "4fFihVZVibfNHC9ZEYS19ZxKv4YEW19TTCSs7o7646SkGbvxLdMQnrC2qEeutZVi1YNHCR63KYhfPNbcsiNqz4sK",
  "key39": "4a3ied1x5YxNfvqb4qU13XvsoeJmgKRgX1Dcaz9FQkq74CY6jRJ3zwDkRr66AjzTBVz6mJtgEKSQhi6oVrybaeGZ",
  "key40": "4Ph6Zbs5rjrV1AwZUPe7RBvH3Rps1egYxCE1i8neg1SLwBpv2KtUYVU8LrYo2gXJPV3Uh7iVgEyMKgkjvLK8pDkx",
  "key41": "XZMh3yWgb2C7RBdJsNUYhKK3SfoKT9L6ePaPy2WrTEyRCL7eTgdCRjUXvvyeM5PfixVhWhuTxLSarkauJt8sUKF",
  "key42": "QhwCTMNP4j8XVxe4rCCqD2LeXHQWzwb8DiBQwPt3fF1rt5Z1MKx7uuCkBFEv9ccrtvcozXYUh1wLzBSmcqiVMPG",
  "key43": "29LRb7tSMeSqaVfF63Ktp61TUxmj5N8x6XzdfYADy8KTYjqez1wTvq13Z8zs6RVAjgGBW1RZijku4wNN5TV4LWVz",
  "key44": "4T66kBYUK5y2eAq3oGHtpBC2KRvjQfXmRRvwPSUcvAHSKqgR5tRVLsvk6fVbun4FxGQY62Z486rfwqo6ZZeCCbwG",
  "key45": "5D3KWENDakbZTn84X8miuawj4P5jJ9E5Cr83KBzynU4A2MoUBrKaHSb37kr16kcvL2T4tMAHAvonmn4vgWncSQLU",
  "key46": "P414iSsCVW37zf3z7zLLuaZpqhXvdnEQRN5aN53hS3dd7B6JvSBHvM5a5TW4sWtRDvbHrr8MeV8jFm65LkiNChp"
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
