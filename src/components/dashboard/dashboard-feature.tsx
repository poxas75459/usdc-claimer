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
    "3TCJAjVYW7eVMZfxesnDMbPzrpsdiJAx6RqAiY7o25w8QWL19pLrp8JK1YZDpUsvKK76n9Z54XmfAiKFzWLAbZV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZXVfrb5mBGFoLJ228WRZkrjRnrpTZyKhue4Wwzp13Ht1Lzmfi5suDZd8iNSuxsjy9YYYC2WgXN3VLL8uGF7qMs",
  "key1": "3sxtdDJgE9zWAPnohm1DtuoPphhTY5h7awRyDVvwq6B64oVdNMPQyRtc55etEpENH3MHwb6Rx8pKqpwuH3Uk3xA8",
  "key2": "NbgkmByn9f6SoSvyYUkscVAiW2wQHFvvDyecFWcKbL6m7HmwoK8HmPqgqCJyBhKE5r8gYGSSNVD6FqQVi3YYs1t",
  "key3": "2yotkwozjBPEEQafEEn3ve4aKWS8LqTt9euNjgCoerY5hbBZkMPKn9mpnLeg4JpT12sYS3SCQHE6fTM1DBxhbyao",
  "key4": "5W25kt8zBy9Ddi5yyvr2gDk7R8vs2QhK5tXawkBTUkeATebiFjgzws74LBmQEiX3oMP8HAXhLZQKQPp5w3v7nBH6",
  "key5": "2zr2FWgFYufWXzY4BJDePJHN6dnECrx9mWj8Rsm6LPGQvWecg7pobdSEphbiopz3sYghUN7dk98yLJJrdLJwaFGX",
  "key6": "5h3nz816FP1QttWxEXdwEuYbECnoWryd4nBXBxdya8nUUMiSoHW5zJQh9epyzAAxTzL2Gp92Yten9ZpeVd9pyJSm",
  "key7": "prfyncTe99ZCcSESss3VMvVUWNS4Ax6mDX9ajLgK5PgjktLD7ECHM8sLBV3AxThoR6aGrQELKvwQ45zTre7wcmp",
  "key8": "cHKpomRnoDsdvHaX4g9Tb4cX5eTTcbULSvQq749mLZnVC7bhz5kgeFoJwZ5b7yDBMXMXXChXUtQLAqVj9ra8ci1",
  "key9": "4FpMAU1TFeDJAEchZkxoWQDhSf1wpJ6j9VouoGrnmxem3otUyZsraEfECZrD6hRzNQCReYPYySizV8xPLyJ7mXKs",
  "key10": "xep7x9A7FFQmPWZVtfzK4dtHg1wrnoUfftFiCBcgn1AqpqbdeRWSo1MRV1m1ic4e6fkKfyTvURPmy4fBYftGTqe",
  "key11": "4VCDfY16zFBewSMujgWomj2Sd96HLgbDAxQrQE9Eu6qxZ2McE8XqQJpjWBnfmF9z3k5mjHTaD9wfKdVDJotx4q6S",
  "key12": "5j4LnzoGdUVSEPYoDEXq8qs3XF5XRzMpPA2JQeTJr2youL64gu3ySJtkeSEDRUHy4o2tit8m4VKeCo3LyWpFytix",
  "key13": "3AMEcsN4YmD2WiRCYbyp1JkuNy2zQEU9cvBnb15U3nMV79FsMcmFDu3XiiLNSwPd19bRi8oTWcpRpTq7XhV9Vz3z",
  "key14": "3Nzg5k2KVwmE3siWqmPdVYJNS1dn3DkmjVgHeHNW3ReWhgMSLWETyURcV3J1sXDaAy7ueZS7GEbJDbtZr6hK7h8p",
  "key15": "4kczq3YUqjP9BMdgpZFSFUqWgiMrgtXHytbwEDfzUYQtT3V94n6sz55kFVyvqTSXUL1ypqt15EHfHpWuU25nRKqF",
  "key16": "4D8tTce148487rUsz5duwtXLDjj1ckyCwPMtdYeHJFfbB7h4pKD78rhuWAJadHXXyhmVoKdj6yN6cxq6wZtZaq1A",
  "key17": "5nPxU9gWAj2RZbWhGEXm1XPhacurWGUt65Bion6ShMqbUCWRBKmETHAuvRhrfK74kUSwbUUuFuBuAmLZebPeEGNL",
  "key18": "5sMB2ZprfQrdhB6k378mZmCZ8jFqLX6JepgKtetZSdkE2KbuKRHsK4wx43YukMaKsA6GvZxqucqWWAmaXCnEatkX",
  "key19": "qW8p73AL7Tv6tiDwnpdWi6KR2qt7jFx5D1SjXEgyKT2eufF6corz159dLhxU9xAqZzReuS6ceNfhzQoNvEyCMHA",
  "key20": "3LDK43s7tCScgGfa5FMLATEm5U3kFY8ASpSGiDx8Wvr8T9twnL1UhDVZsAkNm66mnFnREHovJ3yWMKBj1y5etL4J",
  "key21": "5bEZcRCizAKwDEZPEzAwvZbnsw6t4iyVCjgFcQH29mh4FVanY9gtrs4EJk7DJaSf5JNR343NZkQwzd8z7UTkquy2",
  "key22": "4xFrXjDVZir1jioBiuNde785UrVXKm7cNPGP39AE731WLt6yvkLLkmN5XNVZ3ANu9KFusSwAZVu5ecjjSQ3NKHe3",
  "key23": "58sahGwouocgDdvC9eoppS3UqD5qzJYLsttfVcqgHzrXWGzNP6Pfkdt2ADN7XrF1aCBG9pttFtkEMHaJqBFK2a8Q",
  "key24": "5WGT4fuGiTguit7ykMfMsnh7zqbvZXBPbVvubay7mgaGGbz6y43EAWKjGBR6UKPNaT15cYU5CcNrkeUYgqZf5aSt",
  "key25": "fDTfHRP4Ndqghdxym7dKK5b6wh9zPjGVjqSkwLHsG1xP5xNJwfc69HYEheMnqm5Ankwb9Tu24QnLijBthAfVr1v",
  "key26": "5Z8USNdB97KmaUm3b7VKsuNzVMaEER9TL5cuS68tGADkQmGhHFzzLArHPNvso1eivagC9VYCXyYwzpM7TiguHidL",
  "key27": "46NzYa5XZbb2p43aykVAR2ubDSiPog8UmLXCo6ZYBg9eZMQQgivmXgtDU6c762KCwbL8AiTN6bJ8xPFi9TKjPffP",
  "key28": "38Ph5QwdeWWnVpidZhVQZFL7BuHx5hQ1P6u4h3U2mKshM1Wh1hw5KEosUfoZ4n6x5Dq6fEM69p6Ax8TorriEV9np",
  "key29": "2XBW9qenLhY1BZBAdmL4dpcFygEcuososw63hTRVikcy8B8zV2i8vRgiiSwB2KTJJw1Nb95s9DUmK7ZTyBhjEj4E",
  "key30": "wfCmSqkjWs1AimmvaY5FbtRobypB3aS4WrVnGD7XsVh5781vEgm7ABnZsXYryQkPfWk26Nxc3eubLpqM4b9dJX3",
  "key31": "2M8zw1oAEFtGE4A1pNoYkNxxy7REycFKgMWyH4c1rYy3LSk7kL1en2cpW3Fb4177WmgLsvMKdP3Rw4yjhnNiHebB",
  "key32": "3f5uPr7RtwXXRhWRxRKinrkxAmiiXegsJE4Pe5inNV3ESGfDgeAsVJ6SXxA8sM2KzCSVJr1HbmffUTCGWUw7EHwc",
  "key33": "3mnhrzXvviWyFk8T2F1ermwWa9CW7WRwPdgeZo65AnpqMjSwHRcEZvt8Vcwbo36yEjWmu1YNv6BXHCmzJXTYqvTu",
  "key34": "4ZNVfwDRM7HoTRUmjTbiPqmdSRcj1oz5J3SNz7F3p6oWAQqQAoEoHLP2VcXxnnNC2gR56gW9BJUeNa2Vzovv4g3T",
  "key35": "C7voVBY51xUzoaG1BE47B6BpSQiUvVmgMihDEZF9ZjA31pWmVhKWAfmDfgWu1Getot4uLgsehpVZR9xAmTCmvy3",
  "key36": "5a4FNxx9mo2Au3vAFM4CvDQiMf6FMMQYKHFcEiBQ1y4h7sZRmpch9fJPm7QWFR7UMbNA5VcptqDZ1bjduYyfsatU",
  "key37": "22t8gqscpmiVC4vaVhXqG3ayacRHdhki2Ew4ModKiXycR22mUuCG8924sVVFvcgzRt9EDxx3TAqSusFprYzvfgJs",
  "key38": "5QtcLyEHXXcn6vV2LoNGnjJhCsYiZcSN44sayHTaRRtFpzdPXy3m2Nq1DQVuZJn6uJhvEoKJSGvTUxodsieY3tRY",
  "key39": "42FHKQpeBuU8ku5QaQTfxvWuhymqg8EY4NA96ikUqYf2NLjV8PWTMgPmw1WYygLXtoq1zgNKtWRhz6aU9D691YQc"
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
