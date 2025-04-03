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
    "5mNzT6CqKSEerzzLKB7VNEtrWeo3vHMmaXERmJHRNLDww3WBkTLBKme6ZJ6GYsnBTzavdhTe8igJhJY96brugFHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NrxnzC82RardiC8rkFTtCcDn5diuQhmr5SeXCMp21Q5HwD6ArwgCMkGPBGeUFQChwaXVGUVdgMWMecAVPzpXZJf",
  "key1": "5ucrnEi2oHLSg1L2PXEZUK5hhtYsXxhZRxivzWYQ2Et8t99z1dHbcEF5tDPjHqDUo6KSoWADoAZewJYpFbdrqcEb",
  "key2": "sF7jktuDPjLhLTuZhFrVemC9gmdJskQrqHFtdkPWGWSHPqi5WgYEDgpYu7TATk2NBTY8uhmuzLZpAmc7RxeqBMK",
  "key3": "3pZzdHP9Py4cjgttmfMygvm51a9FJt6grdYSK2KppSyVESMc1FoAnfxRCiAy9zs3qQs2coQNNWW8jcrMoLYMxKF3",
  "key4": "44AjqjYELyXrQhWP7VunkMQp6hWcnErjJEhFRNTUnn8U2SgoBPvPRpyg1UrtYK8ZDeBg574DG2Ha5DvH6ny76ZxJ",
  "key5": "3WNu1bdGXgu8cD4vFUTbaiPkFLbwuX1Zaw1U9eT4pVnwWC8xCy64sgSDGMCQ9e156mMRL5A3Q623PSX6coiurGJd",
  "key6": "NefVCY6xMMMFqWnsNnDasVqTYYLsfNejffYugW7izZ6nrnS7MsqwX5BFS1YmeAdzWz1QwB8dSaRPXKT6xVTFoja",
  "key7": "3Fm4FNKr9E4CFesihKhv9rTa2pjHXXaoqgXxMA51JvxGwM11P8F7sqvGcrVSDUi3BrpyZBUDCnVvTbsY23MYX2gn",
  "key8": "XEqGMH4HgU3er4iqXESD7WZ6jrzLL9bwhENmjhnTArvKVHsBrkMmNtpgrwVZUXSuUweCUU6nqpCHzqBrhhivCwE",
  "key9": "2UnLnJB1pEYUxeGEnKUPPcY5foqzdUk6yrxhF3jwM5YV7cbJizqCCm6rPaf67pPtcW9SUjXYZ74pdJuznrbULLbs",
  "key10": "2B9np5hVUPPxz3X5VRJfZvqNjYSXgCY9bYJg7sVtUWgvWYXco9xAySFGNBEaYCFRdvX6LuDsCYeeV7xUSYa7wszG",
  "key11": "4tihubv7iGAt3SvS4M7QJ94EZxecc9N2t6FLH48NtjACe2h5FJdbppEnAwQWFnD86PNZtimwEyb5qAmYpFBAeNjB",
  "key12": "3cdV1eNbAxuBfHj9TqMgdQZMg26RgsjeLGmjrQ3ov8GacJ9JYEX6EnhNboZntU5kcDe8wb6a9xgfLwE2bZVH6SLa",
  "key13": "655g7VhKurpaoMpVbWABB2nHv7pjWjTLrPTmvhmYoDwPwFN9LrGsVeYVcZx2hka3evmxWgwXa1XQWj9BjVBHtDDt",
  "key14": "5eM7BRbUasjMFntJaauFXioddnKgpgy1gNQc3WWt5dj6uKNPAdHdaAon2VufxZ2B3GNApS4x3qJcknWeaGLWGDvL",
  "key15": "4dVUz4wAA76SeRVhRxvdTzQvHLyRhGYWz4J5eDvbAiwSSkit6ZgtkZPA86nNeep4wBM6Hzn8WJHno1MXQZ1bcsjq",
  "key16": "iaqpqsRyUSCF8eQ8Vkp7kq2uV5vAw9gYGrVAC8UrENVryr589nrQknHV44mhKtadiefF5EQ4BbBVXaW6ZoCt9Nd",
  "key17": "46BKqRZaUNsSvQCoPLn2eECqpFMKGHyVzB9LXm6ASipRfA5oWsQjkRcmr9qZAxA4drxZi3qTe5zo3MS1vpfkm3Eo",
  "key18": "3knp5CmHjNPG9XB3KpFw6jorskMkEpmQ5oBTvckJ1dj44V652Njg8ShtXtwpFrofAhj2ALK9stXr9KZpR47NEWcQ",
  "key19": "4pEuMbBszSfcBCZMJwvgT4HuETU57ThRQo4h2r7X6MB2Cqu1T4b9NyNeYBEcwsN9YEKuL1EkphvgWLVGJ3JLZrAs",
  "key20": "3UewWiK12LEEWqdyHHvSAy9Z4BdygYe72VZSKBTCXgZ3CMoBBLsKW2KwfiCrn3fwZgq1nyPiKADws1YJGz2xbNpy",
  "key21": "3gN4bJdviYwYo32dr7PdSKk7TFaZs8jobwnKSwxt3vvuPEfy8znz3yp56fAcAKod5TG8rHihtWwd7HZ7z1NY6PPo",
  "key22": "612v5eEek245jdUb4esx8DrtCuh4pmSHyBo5N4fj49AgT2uLGaEqrysAuVq1VDx5QYPUGXdfdQ4nUvxmk31YPTpc",
  "key23": "2SFNCGGijMCiYs7bSXZS1W9BonaoH82gR6kSz8fnsxPvs2UgAJcLW4KsoZPuDcf2fwYhqb9XCHezXe2Q9baE8g2j",
  "key24": "5ZJhYwSBpkwwR2yK8DS2Lazs24vcLSgGwuVtvTRx7sq36FkqNmqWMo7EvX4s5AYwDLdtNxCGE3udwVMWp78fPXuh",
  "key25": "H184PYrGcecwDE9Ry5UGFRSFWpuMNvYAbRPZdTj18hJf46yGMTXMmxzDsNPboyGYGnBAjC5j45gn4z4rG2mSni8",
  "key26": "2PK5nfmeMwou3hXcGnWT3njCrpsmHBJrifGxth9NegsUU1szr1wYraG4guFrEUKJ3FmMoNpH6v3zooMZr19hr8H8",
  "key27": "EjQ46GqU6m45AcyFruTQmtcS3tXJEBwn4TZcuqbHAkopLfTH9oyCvs1DjJ3CAgsP9J7cNS6We4w6Q1CMdXDbWxD",
  "key28": "5vxq2EQ4zfKxRteoNXkcp2pwM7PTVpwc5rpZ2AEoKmnjKGVhQ8Kz9Wn7BxzMdDX4G4sbcvCzaS1iPe5ZVhTTPbD1",
  "key29": "5nTvwhGrZbAz1Aa9f5PPjeipiYf7acNhUcm1fyVRx3mAqy81phG1j7eRWvhzWcWJRzGm6MzATA18m6jEDUeT2sqi",
  "key30": "2QzbhvDKUnw4EXAqxjxGLbCMDbQgv2hfD8iHYMbAy9DfWJy6WNP9YNJJSagZ14NDV7kSyQVWiqdSx2TK5zirY8Y8",
  "key31": "DiA3ognymzchFvQEYr8iYnbzRXraR7SSH3FTAsY8ryAN9SY1u8sKipAbT9DmnvsNY2vyUjK6GEWvRvxwt3opRwD"
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
