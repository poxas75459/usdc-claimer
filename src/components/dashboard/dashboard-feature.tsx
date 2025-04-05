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
    "5a92cpw8kVHcdaXS8N93CcLJX5cq4LsYYMPhd6LMB9zzyyvFweBfbsSkvyQiVYH1Z8KXnaVkFWj8ewm4cWArKtWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grAWzr4VMr25PBCgdcrcPW4ESZ2wPEsff1W8FCgGyKsNCrW1q95Axqe79jA49kkybtXAAxJQFbT88wc893or9xp",
  "key1": "422nn2tTbwsqrRs2fgoF7sTmJZLd77FKmboCrvvL4t4BqFTCLQsJR8xmsNnMAzpgrHJmv9rkvJ3RHxsf9Vz3roy7",
  "key2": "2rt4h9eoQBzqBFDb394cvEFz32f1aD96rmvfn4c4LRZVZA3YYZK5aE3x2vNYv4QMvoKpZnWi9doq1y2QhWXT8qmY",
  "key3": "2jkBGvni8dGAqmZM5H9zLx3L3c1siXpP8rXtGXd999BSkkCJJL8rWRFEVR8ZX3ZE82YPBnLU6Q2guv9N6f3SS2qm",
  "key4": "2vc4L5bXjNtiZ6w2iouD9HaLBMxMd9eXpDT1fDzQ6VnHRhjYuJ8VH34rZcFn3rzPbbb8KN1iDnGnUYpCCH4fHbGQ",
  "key5": "3g7TK7tCGVksv5eSqco9HWyGmd4FW6S96Z1dX4PZJManwZUuZNyANbz84Pc2HawTyQNG1R6iDxKD1qWuSipgVgKH",
  "key6": "SZWbF34phNB6ZJTtSEmiXoiGEtr7gPeFWv4Kgh3jrE7JKpXTMahekX88kcddJt3UwNETCLNZXuRnW6pBLfw9ED3",
  "key7": "5AwWbcYgmGcYHKGd28MY51hp4AD3DDfhQXh3aESvmRX17mBjPT1nvPeYbCUHzpczQF24xMtyNVxr1s98gTasXS8p",
  "key8": "3M7PLwWQsu3UVk4SXd98Wzf994Grf1BPmGakNP8cUxfU9FcG5woTgV75keQ2DL5XATkUHzyVFe9b39xXGikMW5tb",
  "key9": "4EBxGZnuVi2eLDyYbgAiWRpVAZtfVtbYs2t9RPd7v9BBJre3Dg3rMM6oMvSPvZeQ6DxMjsbMpp6S5CnQRHdMbCE4",
  "key10": "2n6Qc74bzkm3nVuxfGHjcCSxodmsTaXj3SwE1gYof1kRSUS6aWmRknq66QjgbJbEwqXpWLMNQkHNxJi6Hx6uhX5N",
  "key11": "4buhmvFcMXrjqaUYo8DCKJ5VL85zpUcUhjppP142imMdgqkmbxoQBnvciuWh4UTwfiWYtcaYDT2Da7h5Wp8pV4KR",
  "key12": "2e6QhBUzDSBuPtiGSgyeQ9Svt379Cqi9cNmnh2oDwYA6Ci3dE24BfGPF9N45XU5CzLtjz46gnTbECQuAwZoghVgX",
  "key13": "3NYz6wDHZ3nzR3YxhkSEbfFJDV9Mk5TqtR6cJ4gAoG2RP4gR3yfWYfdzTgD676n4fnYupx4jmorhPPmGk4jZCr6v",
  "key14": "548AyKU7pojSSdb1dceq5NB7yUniHtkuj8RpkU48Eq7n9oYcrUBkvc43hKy8BvoBaua8gkGfT1a6C8A8n8sbYW1b",
  "key15": "4xEHxPncsYtTmdGpgz5p7P6F1jfMGS1j2y7RkW3vUMtL52BwsrDzyRN3r8dnioJpxgd6o2fPhm4FB4qeKobBHUKD",
  "key16": "3sNas3u1Xqjb3UXeVCdwxjAPnjgbxgfZ97Sai6G763rkY2g9WX2Q44imwosHkkyNNZcV789E7thKv2br49hbse8p",
  "key17": "2aoK7R89zSzwaqhkagA1YoM4s45D4tWqDWSqZyvnyrw1CTQNXmVkpw6zhKFKM5Emq39qdxnE1T3NXSd1aFfDH4yv",
  "key18": "5DrRQMZFnwuCZrz4rPRP4dFE2oSUJkwhJYSyGyaEQZ6XfCkpiz6We2bFYLUyDgqE1tbknReRaModsGBv2gEPGBSp",
  "key19": "CKTrqQyKyKBYqpojYv1P53k3HmhaEw5WrJ8pcwjnQCGMaCJFDqZ6takaCbqu9fxY5dAjc5n4Yrk7inEyMNpuGo3",
  "key20": "63RXjSyhk2SbjpqRS9jLMdJfoNxjPFS7tCKJofW4jctDKqVs1BBrkYr8FZEx7YC194uwmqB4roCvy59RDDN75voK",
  "key21": "5G7cNqgcNvJ17G7hEZZDjpx2PcFgsNdCe71vmmJNj4YK9wVJ1ucyaMNepowpteZwwma7akXRYePYLunsZknzY3pu",
  "key22": "4Sxohhdx4wTZBsTjXnWmBnMrwyZAKXa8dMYnEVFjXSwYVGm7zKiv3ErVHj55zj7MbBo17PiNEmJGxzsXQugE9FxA",
  "key23": "B9dXniVY7xBXBu1TCoL686Xfqvh2EcEYDze4P1WF2itV92S8QAuvYtgz1SF7z5cvHreMazMiafRcKcdq7GYXhq2",
  "key24": "584WMcKnSnCAiFig9bxrpMKZY28hpSX1e6fsELZNmY468wNzXnpL4pwvVYWS68jA6LULer1Vbc3tEG43qTHd2Eyu",
  "key25": "2KguhXowYe4ufS2WiVGALJekKPHviWGm6e5SALyNV2sZSvzTtikCALkniKqk2BygCoHzZ52bFjwo1j4TgFJkYuVp",
  "key26": "4y4ERUaqhmSkCnCAWgf1p3hNWS1kqnF5Qqxrb8SyymbozWa8bigUBAuSWqK4y3cKfr1TmULLtdQcNrwaeFLDnY8C",
  "key27": "4W4n69jgDPdXQnaqaqZ1ucxNU7J3ivoxGbg51UVbRUfs9D71eZaKRMP7ADNjTHUtj8N9z6qZP5Y3puK99cSX9Xn9",
  "key28": "4BTwdSH9xXgyoX7obbGhkJoJRcCp8bqmkmqJ8C99UXr8sjg7WeDU733XcYd89tQDh19vivn9NT88QWucQwoPydwK",
  "key29": "3U9qykANbxQKbMVeQf2SyqnTPAaNa8NCv5sZPwmH5J7ooQkm38svMEthqTCkR3uw2gYRmiHKzRzdVGimv1VgBPss",
  "key30": "4VSu83dyXLgFb3hcCkdpg3qf6HDeFexPM3CSwE3TLYvw6E59VS8p7q8RZsj3epkvJkLecbyKBJeVY1XQWc9apNC5",
  "key31": "5c6QVCdMSuE4AJnZZmLHhRmwU1YUgg6sjUpZbW9Nb7ZJZitWE94EjEH99dh69rGgZ8avnVjJNeGMymg93htFTkKB",
  "key32": "58Ww7hZPh6MHQk2PBHCEu7mrc8MzpzR745tw24AHrB1127grBYetpzskai6iKwmYfX1sdhQWRgmk3kQkBMfR2qFZ",
  "key33": "5oRvvkA7QXpqYWMEZSyrBq753s6VW4QE57SZJqWxnAYHg1WExRWM9yoNgbijNA66aR4wZAZhrZ47h4DoBGmDYnLK",
  "key34": "4FNgsYshjbpbc17DHPf2hz7mXMHP2pZZADxRrJgHfr6XXZcvGMASz4c9NHDXHedWCkp9o2xXxrBLwab7jtufLdpa",
  "key35": "prYJSrCuAwB8TqwoJt2r7J2SQ673MBbQvk7in4z2B8hU4aBzbRoGHoMeXGEnngFeecF59GE4HeQ9ktLk4qoHHzn",
  "key36": "2KqYunHDa7bCfHKnYLMiktfW2VJc5RRbweifXAfhK6f6b1CC6qVaUCbd4fMh2poV3GSa8Q4uL2XvoHgmFG6BfHsd",
  "key37": "4H79FfuCxQN8kKHkExyYeRr3hCTSUuorz11798ohKQo9cSw3vbyRLH7UbtYh9ywfTvuLV6YietViAn8VryTF9sTQ",
  "key38": "VwSatGyHbQb7vif5V9WPyxzKgtXgSeqrWDQkP6Umv1GwrwztKzFE2An4izgQiZfjNEsg2HwmVrY1J8kJYvoVgPs",
  "key39": "4jYCZRLoEbKPJd9V52M5ev7E7d2rM9Pvxish1Ba4JeP4TZc8qfCJBJiWPJpaZCXg3fXZCnob53deHf2XbxRak95m",
  "key40": "fDBEUeVKVXExxoCty1Kni2pRB2JnR6mVsRnzYvqhPQenVttXvnJHoJH8Q6FLZrLrAcQtweP2vezmSrQuHuaZDmx",
  "key41": "5XJsgkP9Kp34fQzyVotwkiVyTgFH8uodUvDCij2BixoKgs1TsxzCKSPU9Mr8nduaYgQX51TFE5K5cEaYSJFz7pWU",
  "key42": "4uUkAz6FuLaW1WWq7LELhdwdSAwwRyU7UXzgT5M5DbcebWwEPPqTqcfX2DG1FoCkzDW9Q3i7mF1XctsPEMzu9ouK",
  "key43": "53QDdH6phPEMSDkPpr5qp73FSmDjnjkmEUHS1MnsfMYunjpsid8pWXUyqnj8YtKPY9xdPm3w9xE9fMPwSAJ77kXr",
  "key44": "3YRV8fbyJai4sgF3VXwKeBYQrKL68tkTSbPoijWfScasqUyPwzjnUMzPUFuG8ACBmXxd2kdLGQtWvGrdsRj4vAF6",
  "key45": "3oBkVQVvG7sqAvirTTMuKvfnpKWAPoRJmmtFGhrwJSXFFmpNjwpcSaJu9TavfmK7tXdkusKnmau7mhX7fq73owvA"
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
