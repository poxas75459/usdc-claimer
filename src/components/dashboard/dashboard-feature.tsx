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
    "PLHRE3f23qSTWv6dbWqcPfy4nD1k7fooyeFY2BriJaqZk8uBK2HTjz9BgzDL1uubTznuVoRXmngx6qT3kFLZvbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5243xS5Xv2R9VrmoWy5Gjcztvfgt9mvy7Gh6wQaQTiZznHXTfSFB6J1XXseBaDCF5EgJxm2s824tkyqjndv6h4mF",
  "key1": "daLbGksAthm4NEH2wcipy6sSHLk8ccU7r9PE26s8KU1bxEpWyn2VpvNbZ6naHoG47jxXr9mNRjvpbHi1KokRJYT",
  "key2": "BKhbNoMEor9bngLzaknCBch9NzwxtFhW5RYdPMHbr3L9MD2Qq4PDMHMuGXihbK9YGHZ5HgetihCxCKTD3kGGv5v",
  "key3": "5pYm13XCMuVmwfBBmkGbJG1QA5xN2AdXE3JA5fYVuMirn9Ncswpa1XiSnUdRnyz4BP3vy12jJHbuUEY8UL4iLnGM",
  "key4": "z9rYTbDMHwME6BDfmKK3jE6YECU5KfTUHYE3eorVk5xnGPF1ZNdCxCHWDu8S9zBWw95qBLPEuuGmdLbP9z3Eh2a",
  "key5": "29bKMaWLvDcQM6FBA6SJ6pTYZNdS6QNnqxLod39z511rJkVKZnWFaGgyHLQbwvVqP5aS7KpujSjeGFkNsBqREjkh",
  "key6": "4dD94d9pg8XYPoKVzQEMVikzyCMNi8DDf8QjxUKCUdqRYvL7FoGtriA1sR8jKuEG9MYrA1ywJsFL7CmqKCuHmHDt",
  "key7": "21HF9R1NHQ2jrVRmeY4D4dTQwvyReZ7V4UYgyora4zgeafuQXn67Ahg6Bcftntm5pHH8Ct57bPUBKrLY1LxMdgu7",
  "key8": "29Z4zm8ZkxuyyXDi3JfD1ZwdkdiQBT4Cr7q5FMky7cbU1vkA7VFmzcRrLBmiG8gNYGXuFWVzTWoM9mAT8aWAZyCS",
  "key9": "5kbyMq67paC5LkJNDqGxYr32rrJdmm3Herianf1CMmfyYdxnjvht9QMF6dZdYWqLJj7PvTivqdoemHzrc4hnsBa3",
  "key10": "5WmJgzCtNsTBGATnst3W5tVmq849KRdvpXW22cSPdoTmgyd1NfgY9npvdT6o331s6vp36bSYvZ24H8i4i5fhvXmK",
  "key11": "5ZmWzh3Az9peBkUS744dvZB5cUjrQgjtN8Ynjugbc2UFwgDaVWR2dL7U9QQyqj8mynkeV4ousUMJ3wSH9GaEtRTK",
  "key12": "5RqXqmWo2y3zmSDdCgkn8LWjgJZcAm1byPGXnxyC6ToqjPApTa8n4iFnb9bUCTtcQDNzFs8aA2sHKXAf8J6uJmsr",
  "key13": "3uuxe28djNz9z5YwqWd7HwKsSxTc447iXpaowkxTZjeh8N5w5rxVSorEATkJuLaDAcBGfBY12PG8yP4amZxeBkh7",
  "key14": "zk6VB9Xy4pKf4LSVpK2JaF9RoR81KHfFq6NCmup8WMjmCNHAsQyNh9BRfTArpPdJ91ekbkksZueA4x7aeUjXAKR",
  "key15": "4CgGa6VRiwTMdaKtTfszZ1kxagu8LTSogaVR8fDVKLJXfAywcD8aZFPJTXuZNPBVriv4zH23cv9jaR7o6YT56fJ8",
  "key16": "49yfKsknxgRxNHtwuSJkGNjECuJNWxWkQjvh7wkkdzPHzhDRhWGPXX2p5VFghHZW8syeJFzaXuV5BsTKmMVaXTpb",
  "key17": "3M83N6t8urUV8PwKhCHaUKvxLc617ADbqo1QQk7kAVZpwAMn9zZQ8XvcknsU9ap68ezoFavzkrXfjSRAhtHtNU5d",
  "key18": "ZGqwRzyAHnfRbvYy8YTyN2bLZnyffR1viD5RJFCD6hU7REzd9YwQn8N1qA5az4QFK6UmBm3gxazwCpr1aDxot6S",
  "key19": "5LnJWfTodqnqPrP5hRm32w4F6r2qg197sdEcBnrVzJaH1zV4AiwFEqtWztDDK2ZMQwn41u7VWoXeGyTkgze5LVyK",
  "key20": "ZW6PDp7Ruj4BCrFBuigbSU2yxHMWnGUQv8jjgpZRiyLbE6G7qkBC6jXScJCNabLfajAB93ErJcD6jnj21dFiTPy",
  "key21": "3GJ5ivUeTb4CfCB6drum5dZaiYqi6rvtFGkzo2i8dWow3V2JuoH5RWtTezS5m56HjyhY8kTQNuWXXgCNJZ4WKhbF",
  "key22": "5AVWABkDWb71mVpNL9ayPG5ZC4BD7JeDX2fQBymvvAstVNh9NKDqb7kgEnvELz8GUfSnzRWHHKKe5FFYrXZmYFVr",
  "key23": "63RGth8EuwRjJvdP3LYF3qjRv8qRKRGjSZVdrQQ2X4oLRdopHJQCHhWkDtakGK81KTCApQ2Q96UuqhPchS7VJSSt",
  "key24": "2836h7Tv8tjoyuohMiYdUp8VmJWJ1x4aB68kwmEgF87QELUeCT2mzEDbuS2XDjjBGbYtNDmCcKJeg3G1MWG9RuYE",
  "key25": "2B2eT2HewHypG7L9Q9ekTDoxsKzcsyKGMaoyZ6jdVbCeW1Qb2Xa2k9H8As1MaVbw2DmnAneZ1c4HZQsJ1mVzn1KT",
  "key26": "XipK5tkeynUsDUmD8YBg1H3HKmEJwgNQuShQSRUPLEV4hpvu4T1NNXG1CdnPPXryyEXLZx1ALNwhZB7YKJPFfyP",
  "key27": "5xgA2WM6piyVMaqe5WdDmMveH2DwpuCYpMrodqAiTmATGvAebvaLXpH1m6jbaDcHPUpHfcPcMyUJGRN4Hbgg6mfn",
  "key28": "3bYARHEadCVhdo6BnoXkk47WaKHFZEWFrzkVqKpN4p79ZUVptog3cpf6pr4nRhFnPkkZ4NycMsSZdkKPfGbDAhDb",
  "key29": "23ZHDpqYpPgKBbxVphgTJmjMtQPeQAAqxC9wWxaUvYViCYftJoM5bwJjLciXiNHvUHR6kup7om6kmMcSGSBWsro6",
  "key30": "3DW31YVNVixtoJPrxJbZdfQSc4RjUNG8fuiGX2s5rwBwQmGhkH5qeSLAKGDV1hKosWe3yALm4rCvKsVcQ1zmUHDJ",
  "key31": "GWYSTR1ud2NrvKpJini2bAnZFMXcZnqa2T3aZZptkKJ6cTyDc5SPi8C6Yk7sFfFdGhKZbB8oBaL3RMEhbL25Pr6",
  "key32": "3dAdnyTMXFuoqYZjrGbCE1FGmUw1tRdY6YDXAdBNZz8UYioRbzDmGmDv9BUVZQ4ByDF9AN683UgkvYuaBT4inNNo",
  "key33": "2TZ2ZMyNRsA3J8NaAe84LhMyVy7dLKmYg2nr8TqzNiuV32Gzq1hjM2DchZgCYqRTW7FiNrbSw6rmGWtx5LfAySPP",
  "key34": "33rbMi8hBHDyuFXHsXkAKEc6qAW3VoU5FcAwxLMeRzRz7vN2rFK5qnmSAAW9N1gknFie9GLi3XnypA44nsJmCS3v",
  "key35": "2dM2NmBM6Q83i2uhwByopwYe19CWDZvC4TkJnbUkztrZCDAFdNajaGz4CQMcRWxNdhx9gSF5AmDGgHbbyWvmgoaZ"
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
