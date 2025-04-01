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
    "4C3eDo6JhvHQaunjNAyQQ6kmYyJSqhLZDqG1bzMS4knvT5jDyAQHZpQbHtr1h2u4qTqAG9kkiGA6VG2noJaFFmkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJ44x2zHFX3tKSDQZC2FCc9UcuAZoTtKwLUVAgxQyV9E4RLf4yMiqz4HpFMFZvPyirRLaQsMwa3H1iMtCWB12ii",
  "key1": "3SMMUMozBS73hDT2icqQU2ryrHFKh2JMuNd4sZWhDGymPyrAcdf4zNpDW5oguJwDtq3b3rhxa4nSgu9w7GyHe5Yo",
  "key2": "5SbRq8GSMB7FNn7Ke2RAQgbbPvzg6HSDAHewF6XmNj7vttDVpzgTXwVowSmFGUadHzTNGjivCNXQhLdifGuetRtA",
  "key3": "4ZJhcy3AcDZ1BnVrxtTM49fGgb1n5MBBUaYicDRjRg2bGoGZnJJpqnECkWcTi3PV2HNpBaLgV39woFy7RE5X9THc",
  "key4": "3VGBnVnSRWAMB7DRMoBV3NUv7q8LRyuoyoJCvEwewWz5eWkQVNPWuxiko1afWJPzs9segZNQpJyyfAYYPLLhXpbG",
  "key5": "4RsqkMRXJTed72RBcXnsNgzFZsrXgyKyg6sMyC82MQESTSB5rEE5PG5AwYuh9vnSvpEfXyEotTBfVH1QJwjRpdMi",
  "key6": "YkHhFpUPVB8sVRH2GKtGpMq5niNfuQ4sZoFNYRSHuA91WGxAGJb7iPFVnF4YnW5Kt5dXJk4msTBHQqLcs8MLKjZ",
  "key7": "3DeVY1VkGNyemVGsgTXGD3QG4eFSreEWYnweRYEDwcDkp4ziCr8MtZX66uobDtYRsBycXUkRHD6anwGaGHeyXFBS",
  "key8": "2Zh5YZQAi5hcYvwuTmcineaw9ZHssHZTEaCxUb8gWRgqMjHpB3hNixV3R57hvvF9x3csDREv1MNbXSLfBMENFC8f",
  "key9": "4SWoZsqc91nRhj8aNPGwPuYTGjkK6Zt6TU5MaePwRRtBThZFSx6nFLH1mUyP5TdECbGqSyftGFfe8wF8dDpN8jcx",
  "key10": "4FTQEi27RZS5Hn1fpDcUiT74bCR3kzmVW8zzqZoGRzy9grR35gwmk5WNhpBGSVArBK9uYLA5mitM1dhjkL5369pK",
  "key11": "3THdvM5gkUM6gv4nJaHrFY2N7Tu2ciNQdvfG1osoBaUdQ1215Vk3PKY1QSm7KwgT6cDHukdtfiaYx1qhWtXGxxvv",
  "key12": "2CHSHBwXPkUcZCCZz6u5PxJpnve5tFpptshv5b7vyYMs5B9ZXeEGVLqQ6XwfhDv9wrFWcLSXvndjeUSwHNsu1Mie",
  "key13": "4kmYXrYrqxc8yocnkTqQV59Qnhuf9X9hqdD32xMuHezpyEFZzAiBRdGKV16fymQsjSjCkTAeE3HsG9qr4qCHhoaN",
  "key14": "mnGHwZ65gYcAVPKu4cVhHcaksSmhZDBQYcZb28sTanSFtDogLHGrzjEpYHUSFF1iUeufKZeGg7QjhvjQiuaEhaH",
  "key15": "5UtV276MV7K86mrchrD9YFg86ti9Rz6FF669HGpVFbsQHDhqqaPJzJK2u6W6uphoZcNzgTYy4veKwBKZv4ZPHnst",
  "key16": "4E6KjPSoAXZjmyUYVvyQXy6Jrqco5onHriNXfAtZhjBSvPbncP1RCy558q28wDQchL1C4gNvbxbUL2CDHpbqbYog",
  "key17": "5tXgkHqEsbEZDhpDbL3Q2BjbcKEuBjGQnmJxPxBmubpmYtW2gcBSNDczuAMK3JDsUwNLz44Qicimf9ZiZD6BLAwc",
  "key18": "44NqGEqpR9XM8Es15c4USi7K3R8sVgG21FRY6HqkU7UqHemtzaptiVFNPP2B6FDGkNt8zEvBrPi2aJdEcV7bvaP",
  "key19": "gGhpmcxJFYdGaz4T9h5AYEktwjtEQa2DTty5QsAzvJdZTLGHCaL5mK8BCZrhYWLtiAP292H8e1wL9QuzxrtBebb",
  "key20": "3c9Tnw7yTpcL4oWsCbZy2XxeLZCLFUu7jKN2Fb7K1wQKKxfFcbS4DAHWdLTsWvamjwkpVq8jdGEzCn3Wn8n4ATwM",
  "key21": "52S7RtABGvPV9eQN62MmGfJjNmjhKM8TB6je4BTHA4yqGWHesf6dJkdGGrb3Zbuj9GyK9pAjx7FXqccoHma1fURR",
  "key22": "58kEYFwcwC7fnsNY7N2Ghe2ZqtXsanA7paCvv1fnsmW5CKdSQjarVMYqHthQkCVejRYXXxZVGQpx39q9kcGcMsCF",
  "key23": "4DU9GX2BevdyFueHirHcYg72FTe8d57CYCHkR9GqPq5jD9yRx7qBRiNXJFXxXWod8LgVuB8qGxCTxtGq2UAsfdKX",
  "key24": "5Fau7VfLZ4s6g4Ttzd6dQoS4LjsL3GSfBbSgew6bQvJvEWPmbSw9WUThaB81cAq4GwkQG1pcbCquA9DagshpyUSk",
  "key25": "2uR2wmY5r8US6GAjgBw5JVwrar926owExt8vNiGTTSYPwenDHhfTNBVaiKDc6bwT69zFnwyrgy4iP1aYc5pyMSny",
  "key26": "4JRL845w4S6MVX2pJctiZAM3av5W7jQdQhYdvUhWDJ83jqCbTyhDtjPCuEUMn9s9JcWW7fjTfBd1n8WTkFWRmoMU",
  "key27": "5WJCZsGYUNbn8Jtup6K8BrGZkt69XaQejE9cg7WwMQej5nhkhuTf1M6iThpnBcHZYC5uKAUfguwbju26jW8ygjMi",
  "key28": "4QdBbpThPeTg91HjgJKJCaQXcfYFGLcK2cuPLTo5Rqj5fnJnmKGMSsycioxykQoqf3PC3RQfn7CrDbkPZAYy53Ev",
  "key29": "3pGwAYan1TuqXQjhqcXYXNETVjazanAfp2oP9sUnx7NNM8c4H6oEM6pz6RVNtj239vwZHG6K6TM7aPt3i2RDjbA4",
  "key30": "2CojWuAKuVEfwq4HKvgA546fGxt2j7Nm7pwq9RNt49kfxjS2RJUMiRLDTiu7kf6CsiJnerFBb57R1zTEQUiKQxa6",
  "key31": "3G8RjQBS82GrRpiVu97ooZ9SCDN1AApX52isAdCS7UBRNyDHozY2zwbc1cQRsKEMzqSiXdKtoGfuSJuVABTrqyLK",
  "key32": "58YRS7iVrEgjF5YZa2HMrkt9WCapKysYBtT27tPDmVngFNXbeCftqNQPZmrtQNxG4niJk87MHYVsDSZQSQKcqGnv",
  "key33": "2nA4ZbhsdBvoyQtyJC45i6BiUE1BoFYKgdSDZZLRDMVThc5Qj2DxVkjWkN5Rz2CJZJu5YsccZVNRUAXKRW6bBxpb",
  "key34": "aJZCRVkStH9mqsYHiSoLdgkAaTJRAwFG4EFyJUPU1hsEZiRzQmfj11QAVTv6weR8J7ZZzxTwDVcHyDzN1GiXARP",
  "key35": "61A4wGQwqbiHrbeNs1ZjaXKnV7re7TeAMYCe9WnxQToXw4ju4dkTHj3dsGYmy41pmNcou2PDCvLM8jkbUUSEWfiX",
  "key36": "6KbmfvBLjXGXgzGTDNrj8jPpQEwmuF2Je5VC9Y4UojoR9W2NbocTX7Ybe1zegn1PNhhsmYu9xSeEAzpn2CvWXRo"
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
