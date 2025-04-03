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
    "3uYMF3hWRgcWqT8kxmRpAaVdVERZR5fZ5d6csPiZR8fgXqf7uFnWW2kDzfBZmrB3S4yQ7C2GLvZkBxfnyhQTHbmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQ4FnJtvPmMQX7z3BdiMeZ8Tag9mkymx38gzdXutNdMLjy9RvSdrZ9YKMeFz7jn8Jeyp3pS3hqB44LZdwV8hWNT",
  "key1": "616bTvnKTvyR2dcq1efP7zH4BHHFreQVkzsYLXNGsbcvibDHFYmXho59CCQx8hVuEigFp7kr2D6NNrWyCSTnujZn",
  "key2": "2w2szqFhpy3q5M7zYRtpQ2NQZod17FXVkQkwhwEX2xxnWPb8es49ndYzTSW8EX3xFDqjxwSfyDjD92DwiqNVk359",
  "key3": "2vwhyRs18HsfxHPWakAsxwSJTsxg2VaDQGpGHQzJkHp5LeFWkhd4XvXBEUc4RS6piFSjzsxMEKREaEafc8Uh5dXe",
  "key4": "3Ev8cSA42Nb6ijduK95ySzyNsKPejTRouhJRYPugyaY2SiCHqpqp17LrTfMGtQantovwXTsuKDfoDhyRnpEQ7K1B",
  "key5": "5HwBy3ehrMeFvVNoqWT5ZLwMGrAWGYH3mEGUbzZDXqzAFnfH8UTW3dQsumeZeBr8wDjoZAUKHPNsEPLJ6jzDvxCk",
  "key6": "55jYTBKUzyhxy5YQR2JJQuhLh8XykxZ3FhpwL3Ymp7NXQ4LBihLb1DsEMTaiBvMWuEauoHkHYyC75i4y3u9epUAg",
  "key7": "2BQcEnHDS5yhLzLwLzCVRTbHQayi8dGr2zi8WZVhuii8xpGm9GE8NDpqQboUaaukfPAR5A8ayDepbadv7P2Lj2My",
  "key8": "5XiGkbPWjGpA4TpVwK3P4GcMVzL7VyVXjjxRwSjzBnAQcL8ex2q1AqoRkGVq5P5W8JNvCacXwnf7TFYzNGht9VHw",
  "key9": "2AyW1pB2LWHwBXDWZZVS2wNaBmPfX8A6UzfS5A3ZBX4Ltia6SkfiZozxPnWCQUwToZ7NyxCzTNz26LYReB8dQZQM",
  "key10": "2g9bewTBoxVWRqBBnnNCb4jjgBcY4zJQ7usBReYEHCHnjYinHEPubQpWD6WoGQ6UzCXSkCpKam9pYrCwGsAx9B9a",
  "key11": "5rcx8qyd9evWVbQBSX6cKYMH6FUMwxcHa3idGjmo6kQeVwEe7Pi3svmJcGkZcmsZLnZmgqhyTs2qhBjuTU3g1MZ8",
  "key12": "MSgVZyUaZhbWZbqE26cc3PCv3RYyWecsijBjrBZK7aFohKgsmKNbN5pHNQuVNGRjfkGpXiWGimeoahTX8JcPnTg",
  "key13": "4h6BrMdrjXviapA6AchTsm8oJLKnKZ9gKWsq5HSEVnBjvtLZrqyRQogg1XHARitG9W2tvX4FAknmSx2Pdgnyh3K8",
  "key14": "2eJX7ZEUsCWTPXsT9qiJUYEPtjYQhbCXQYKZePjduKGQWzHCaai3qCtxGgmcMaShexFJdSifGuYEHGPyD9sFV1yp",
  "key15": "2C9eH7PwEt2wS4bPuU4AcTXSRTN7fEtaqY6tG2yA1yjssvbmpFaXNJd7u575yTGPUFic98SkTnt5dTh9rvY6DD8B",
  "key16": "Wif5PATJL2SXpnGMKHW4mvEUjQBpUsaEUacvV3ekfj3bVfFXmBKUgyoR2BRyuMXFFytcWewKcDDDMuV6uyxuijv",
  "key17": "2XbAV85jrKVT9dS7SL3TkXgmbW4yRzwiZMN6M9LdRAvjR3cWCCJf7HFodC6xL8KwTtaGptCDUR8GiATC9munZhSc",
  "key18": "52JYk7HYo9y38ypHix7iSx4QZmP4AqaHQh9tzUWkWQJiXDLD2T6bLpYctxAhTY4xmZHkYSGsWQSSSsPuGWpVxEvi",
  "key19": "MQMe3rkrXZc9zuaKwRXdUBq11cgU8wZ9ZQgKvrbPeL4obWJj4FQuPMg5W7UTeDhLTGggSfJLdT3gngo7Wq9N8wW",
  "key20": "2qEnhNca4QayMwwmN6s66XGLbq9eJ6RptBn5VFHysev5TdfRn5VbB9LpBzK8RgBus1skdReBXh5PospbMegyiw7L",
  "key21": "5QjMCCgnDZmVwRyQWmZ3qQ8ZaC6C2X5zXGZxd5wjS3DWJuNvVKEsuGatZe9ZkEpv29w698LhAn1p2rNJUK8wPM2Y",
  "key22": "f643PcfdUqoVWdqFDm4EvuQTJHSSjnpAPJFguba8F6DhkG1uGQwP1RL5zH4p9KUUKsSPM7bQPsSrcLPg1FKB36k",
  "key23": "34AmRHaAbGYg8ReUoA46sfw4Bgi9VjidgLcKfsAFbrfEdToGoV46SamrqLNMzGPr1PWNc69Nv5GrgyxW5Bg6VHMd",
  "key24": "39ZpRiyCZ2Gf82qALg5KzW8uc55yrgeoYZiZEUJ8G94JBycg8vg7JGjZUmRvgqCBLxeJRe9uo7D57y3TnVuapoX6",
  "key25": "5t4hJjkQVotwdyzNN99uP1y1Z36mM3k78z3CmDfLwJ594nPJ3imqDXRMjD7spKBNHQcT1BqCqMpATDUCYJD2kib9",
  "key26": "2pjjqnTkkrvzkaHwHmM7dHoPJ1Er78TpZKQNqSCjsRNHguNvtisyQ8yxi7koN886evAMyKJ5UZ3zzAQVgHkeNbKm",
  "key27": "4VnNPMa6yoVrwkkhNJG2zoecQj7sfa3jLAYDi6BuDSonmjbxQ2W5Wp6oCrMwRgn6xiAVHSfg2D39YRETWotG6n9c",
  "key28": "2y2pzBz6EYSd6JHifmPHY2LMVBR28RSso5WKAExco3dSBdNJUJ3Bb3ioqa2vhDeA6BPKmw7xYSqKgvScZa4YWfan",
  "key29": "54PWsWfYqrEjaFm8nAc7T2SrpTxNx5DP2TJ1sfPWVqLbgnLQpVsgcBWvVYzr8D1kyia6bYF18LJarEQYVWXNura3",
  "key30": "5TE7dR9ETwYfPjUmBJszp2qdophJ1veDLyHfEPQvSbEPZjye8gUt3kGmjwzZutZ3LwCL1swAqpWuNVdZYCKU2Rfz",
  "key31": "3YAMwmwnJYZbWFbG8MV4PKvcNULzywdsCWDBTDq6Ca2emFLSr2xwbipnxg6S1GLX21dhrWCWtaentMZzztHZySLA",
  "key32": "3BsWDCVuYS4DgFV8Y4GmJvDoMqGSFafyRsPBwn3SopyAVKmpRuH2MAaJcsfhcKeyd4THfofX4ur1sxFvk7YwQDcL",
  "key33": "3CjdRJ5uSGDwLZeYKCFBWz3wb2GSV7xFGEdYn2597kKTcj8vuPXWuSBN867dN8a3BokS5kPA34BNu6DD5Es9YtSD"
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
