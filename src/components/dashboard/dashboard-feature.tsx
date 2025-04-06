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
    "3zDjFsctLS3BtnoHv76HrcHbfUnW81icfBV95doDTgMoqnrDLUMTdAjmuoEHksYevtYNiVwKLV1Bc55cAqP4oTLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzCpuad9uC7fSvMu9bBiyDtYHXEJ6DburgyNBAnuSjqkJoKm7XAGDUHCoyaZv4S9GL4DEWVchwhYa7fskH9ST7b",
  "key1": "6wX7YnVN4fcosCvLQbh78ezzxvZTxAGGMYAGEFZbQQyaWuzp8c773ZdphFHgjD1bmFdyKTQqv7vsfouEswBRUog",
  "key2": "4nKoPF87DTjrPhfbdc4cVFKZFzKv3svKykTgmiHjGLgRaB4jp5kmhfNE8BiqiN62JrkhGyxbEDYaD3yEvVfxPWdM",
  "key3": "4e32o2NhTkpPRCsPjkLhBvk51Zmmd8PcSy2cfcajeU8XBaqtiUi5CP2JPGNZd91iqALh5C6u4M7RcfzD6FwjvESq",
  "key4": "37ZWWYcvesRhY1Mb8t2J9d8EYfkCPctagCCumbvJwjcUe5tvA35FM8pcAjjWMhS6cDtuVXubieFic2StwYvdpboi",
  "key5": "3okziPt6zmBokTzTMXEmuxGvyA4Zo13oHSARtYfvv2ZyorGwntGgQZzC9w44SGK4QLP5vJPDpYuvVtnr2qG23hLs",
  "key6": "5J1uWvme5ebhPrWKCET1XFZmfrM6RcDoEYDAUJ57fwwNx3o61kCRoagsyiAPqBRsjRXc7Rfe4H8jojiKeaVjVnGp",
  "key7": "27nDdUn9Unz4BTjPEzoiXE5VaLYeQzVx37gsYffCvbiQzWQZxoYifRcos1ZC9ux6JM6hYzjMGAiUSPHfHv7E7LV6",
  "key8": "4kdRzQURyHjZL8xN6p4PUhanKotrjnB9oTF6k5odGDiJH617b72Hdzm1v1anej7ppxuwDXNqVHgjTGacFrupvTXx",
  "key9": "5SvQJh78QuMt4dbYqwvx4iTbXAbXBVUDwiGo4s5zcoFbMVV9yTugRsKT66W2pjzSYMkdERVe22Xm6TbPhnEw6B4B",
  "key10": "9vxNPjiJ8MffH81hseFKYE1JneCRq7TDZ2syHXS8jjq6aKaA3cZ9SmCNnn5jxY6fUoik4X9JKyDsfkmA8DnRunM",
  "key11": "2XYVNhrzHNc7F1gJhDahkMX4jgA9dqU1q35fmmmeSwpbGHjWeE8WF9HUiMTfLfZZyNZMiQLNhADiDWHbSG9EwEyt",
  "key12": "48bD4P9LDLiLUvagfKejGMxXxu4mU7GiqhKywuZRhBdDMeZRifiAXjnXq3UBCezS8aD1nPFtZR52uVXJc2PggqQt",
  "key13": "2mYyXDsTudRGeqP6rrAXzDy5raeRgBgVNBxfBgNxRGHt37WUMcK59u7jaLdZ9MkSd5Xin7fmMFALCfpEcS8pFTzZ",
  "key14": "M9WNpcS5Km3qNpsVxuBw71mnhMA4kpFHWMCtvqpU4BCkTyuAJDhGe9fVyz9W8F1VTuB726SgiBsEX3t4jq5gp2J",
  "key15": "4mS2MASUbShtG4Gr1CDvqnUQE5hUxGwESPhpFbbyqsAuqQCvoPhKMpSTm8wgxLNzBbAhakXj4gj3sveNm4tXyWA",
  "key16": "3cRym3gEG9F2BphF7MKe38wH7RFjya5C9nyFqbCJ2g19yCKABQbr6GrfP53CoNySaHSi5h8f7Y449F4noyuKA2s5",
  "key17": "4xvGyEeC6NGHtnqnjZ9yNuV2ke9cQcdbzLRTUkQ8YKUSLbLWxzVWgi9esEYA7M2VZxZvmRVj2FbQyjVrd9M1kHMj",
  "key18": "2bMEh3ktUxKeJ8t7Yp7d86oGfP6x29omo7gh7nTs7jK5o5mfZx1nJeQpf3PcHRs6WDMbo6TYphAGsT7EqcYqGbtn",
  "key19": "4894wyfNddA5PyPbYWaLB7d6Ef5NdiErT2Dfo3prGfGs5XZfcaKHUSorf2CgbyQcjWS6BnmDZMntHXq4sKRcdHwc",
  "key20": "39npLtrvkvhZXsFQ4DpxYrxoYDdCbHkj5PutoBXqBscb7zMNEnWWdNHBLQxYBvPmagMBhEzmHSaDB9iLmir6zijt",
  "key21": "2aWoHVAgUtzgyoaF4qm1QsfJ16sVXBUuPhTWMPsqr1sz7Cdx2Q4GYrBiRkDW7FQTgRC87r6EaxvLMDAnjmu5kx1Y",
  "key22": "3jA6tBEHYVmX3DoEj2qhRcT8D5rzxCUfax7KgNnQieB2BKVStHik9KqPHaUssTGgQxaYdxivifYZNTbazgqLRSJ",
  "key23": "5uDGvN3eWuR74v7M7JNXeS38CKhcwaEcMaAbJoFPYvc9fZqsCVLhL1bphmHxGnrdQr4jQ2CEQdv33FKKWcTww87s",
  "key24": "5GZggjyry8eEuW7u9xqkXvoqQ1q9YMaZCt478PedkCvwnAicMpLdMm6YK66CRJc39329GMXwDfFMzdspZY4podZ7",
  "key25": "2x1MgQgpFGdGDXrYSMgpdU7TtPnB5vnRamv1YhvBf3aD2SUgRiUzov4WTBeGCynkePj2VUTXf18LgSrKYUZWxiqc",
  "key26": "zrgJHmpjvMReX8kySpYVCNuH7eiG3ad32gD57UD6TjwGmfoM92cozDxT5RicyyHBcqZWbHwwDpYMpvvHtCvc76J",
  "key27": "MyBanDzJwL2sCkYa7ETNRa8N28PsJvRf9Q2UKAh3SdFX6YNzm27LcUX85o4wZBYGWYtT7E1DrbAv3W7bxYhhHja",
  "key28": "2kEu9f9EWxcMNb6PST3nKungQrPh5rYicVGyBdZKxRFypagoDY9Qk4vyUgMSBy5pXGr1uP3NdEYP19PPpjEDUw7E",
  "key29": "4655po31iKgwB1N7dzMuV8hZNXtXRuAiy7jNhYCREUxXDQFaTmhDb1UmWmqtP4snsTWLKCXx6XX1uPKVYasYVft",
  "key30": "2tEW7UGWjSjZEzeUUahjyjJVN5kGEK58JP8FaHD7MTJP9zHoqKFsBr3gCyKcGk3gVzdTqkQ6onXqByqppxoNS9ip",
  "key31": "4wDB5GRD6qAbKbRQvx9TbodCj5vdD9H5CJonQatApazW5SoVmrdZYzYqsxHVDKg8jpwwkguuBksVbXCwgvFA3jwV",
  "key32": "4ewLuj38rNzGgv5Cb52AcdVGziahJEVBi2gNZoV4Car7DNRHh1ipfFbsNiy6fDiNbba6zJDfsMFZMv5SepUrpfvj",
  "key33": "3EXPxEkgKmKSj8FmW4NhsoGSsdyw9DRpczYxo8xC3AaQqqNjq8nkQ8PFsSrQLxYcfDKtTdJGApKT4ntL711qWtUR",
  "key34": "2SkYh6pbmwNPaBLNreecPst36jxynZ4YG1PX8vY8XGbMvb7BQgyw4rn2FWHkQR3KUxnQJaXAEiEZYnCfcw5fHCQr",
  "key35": "KBLX8FKDWFofUF8xufhmQDuW9BfGu332okaHc3L4oYACpbsCfBD8vrbN356vfg3dg5XWXu47D3XKY7Z1jiyuVp8",
  "key36": "4gsjUwtKB5uHcKuJ2J2nErLyNfgHt2Bkc1R1xre2mPiJfLMYdLgoE6DtLmGPt1iSp1YaQp5jm6ix4NM4judFmZYj"
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
