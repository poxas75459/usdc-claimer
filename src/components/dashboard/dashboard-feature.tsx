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
    "2qhZaZTXdqRVNCCYX6JdNodqdkHuFtA15efzTtSUjv4kSNrM6qhBkrf7WXTDvZkWXDcfG324ytJcYXCQd4eheU8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G24prjfSiJa2FC4tre4nKH7aytcAndyvAZHxT7tz5a5BQZfwNBVP1ZsVWz282C6RDKtuvYcutvmPMCX8tNHHyQF",
  "key1": "26Na8CRiy4x4jh9aXXEkCNLoGahaFAPf25GJTczFJariHspn3sswAbVDSvypScUpK6AdC8S4PNmwLmhUwsuFDGZY",
  "key2": "4pcE1QXctRkp4VEmMaSg8yZKjnEx4fDYTbnGifQJ3CCBMSf5NHmmYLcEEDSr1aZduVswuNgbvS9oymzKiRJ9XAND",
  "key3": "3iDKU9BY43KBbhZ9BFAtfZhcBq5gtzyXrf3Bx6x97c6DWsuBAC8WADwM1ibUQ9TdCsBenMFRELhtruSXACRX5c6s",
  "key4": "5bCfK7W7rQQo4Sx69QM7jVMmSHKQWqBepeRseo8nkFy5LmKkiaT5MyY4oV2Gf1yzNTRXAhfWc1fUsEENKmpuZkT1",
  "key5": "3oDorYs96MKhqtUFdkoDtn1vEQPFq9GnxnucbHxcQwkSCZxpBftjaqRxkTJMAHcPgv3nREupA5uEBCCD19RZUJim",
  "key6": "55FKahDnEj1PfyQYHQw3iwZYv5t2AQqe87SbWFJt6NBnLiiPLohcHn2y3qRczRmGA7VDqBPMqEkdAy7BdvRKk1DA",
  "key7": "3wcE3K4e3UZN5jv7xQ72A84ALtAbKSTwXxFwKUNpjuKbVRKcVpttty7F3z36d7Z1dcC85jtoET1RurVcbrXXbdfH",
  "key8": "4f6qPHk2kDytMD7yaS39HYMtDLh4ZMPpQ7tQA1VrtmxZHnGfRELpUG1LNPMcg5Ucu1opnVxbL6s9ry21k5gKJNcy",
  "key9": "5DPSwSr3XhjCh4ShYBQz57XksNzbinSTwYSFMvpr9U8V5Sip5u8dCnxTUcy6xBeQ5Cuf5AV54dZsSAHZ1aH3x1BX",
  "key10": "2jNpNs6si79N2qwhYRnG5akwQEB9dvsJ9fd31iMrM9Rmn2Xi4hRHmhdtTbYTRekQa3v6Gxj8om2qZactSSN3pZxq",
  "key11": "2AmbA2Pnz2dMecgRCGWTzL4qraCyAbp1fm5J6TgLACjUXLp64x7wnVRi3ZPghUxgZ3GrsLMPUD22ao9DsoY2ebSK",
  "key12": "3KDzemnmSGwFfxiCZqDAP5xq5tWNckk6DkFYbBzeehdy9RH9j8qtPmrVWHBTgH96orgoa8uqbQmgkfeghwiECkYT",
  "key13": "fG6KNwA4kCNxw5oBmELHCCfspimQWFb8xG9TcUq7QumyPMgy3BJ4RgSvtaodqyGjb8djbLCuUoCoMWtcXThnGJh",
  "key14": "2EyfEVSzJWG7QnUQDaaFuurRUgfqW7VLLHpHVAMbmxXqUfeQ7N4pDgvGedFNkcEumoyJrR4hUZpphKFrZntdedQZ",
  "key15": "5P4TaXWd4k6JyWn2byfoBcGNk4G8XMGj8Me5rJUjBTg6UNgve6aCzS4wA7K5fV8w3Zy9dizKfUxvAJ6RBMr4imAH",
  "key16": "aZVejupRL96R5YivJzWiVQWLQsvf9rjhQUgzEdaSfkwEnrcYVg3rj2uMEWYMkHkh5MRtjVQExQ5RTdBsZA8Dki1",
  "key17": "54QNYggAsaz9H4m5DgfGU5yNYYyq6sVn6wE1w62rz5apkUetJMwfct8zjs2egg7X1RMeSzX6FRHy9i3JaALEKibK",
  "key18": "5xVv477TmCBpapPtTgC3gAnf2ZoCYSo4H2tp5TbyTEGeADmKtX21Wastevwy2aok9ua4uEd9ijrYp979ahGNGiCr",
  "key19": "LKFvCethB2AX4H9dw9HSx17qeGahhES5gfEiSAML63AJykwBbvEq6DcasPza8axGcBE5woCRWsNJy2rQVtofJTo",
  "key20": "3a6AKZa8YZpPgwWSWqygsWCZbERCmnynCrtTRjB5nq4wXuMXYrCjpxHL6oKZjYt2x1qRUcYnbvUwRow2sHR8jiXN",
  "key21": "5LtYq1jHyFZ1h9TXK7wRM2SsGqPRPyP9CFezW8gRrNkWcLBpnM2hQyZ66zcWgp4seUAh7oKRWWhyHueC8yCt6UxU",
  "key22": "4Bq6YDZ86kF2Hybpsb2tm6UVKHoGZSdXQtg1Jx9PyZH1L5xsmzJGaQX5dKxYjJtZYCuyZ2W8KtiUzHrcU6YrdAJC",
  "key23": "YE2RH6cu5hmBqHr7vjxXUfDyigogwRWX4KCimkref5c3adtTduoEZxYeUwNjDSXpUwMLXAG8GuwwPiULDKeJE61",
  "key24": "65Ue2veUFiSkFSerNi3RQ4VAoq8irWWX4cHcr1tCDzdbHSE2dyBQQVzSASyRQmkvURUXfzpdDkYBZ8tHCALbuJkj",
  "key25": "3zAFf2tKjoo43gmTDguPNW3Z6ybYgnhyt6ubwR9bt2vsKB993W4sevJsmqqKxQTd1VRTV3Zmc74j7p7kTmppYWXZ",
  "key26": "2qMZSstJx4R4AtFNdMhixbqNH9gSS118wRjNYdUeNqcybr3T3rYwobKsUfBLgRUr2Y8tNFoJsw2VjuaQSkKXzaLG",
  "key27": "2iB33YRCsaNnM7EaGAzgSbN9f7PXbNpv646t57rhQPKMti2U8VmsDLNFprb81Q1FhUMzvtE4gVV3pMrMP26MH7bp",
  "key28": "3RmEUBVmzqr2bVztwvKZ7VzWbBiBzHD9uMKWGMaTJQmUiNv2xiUruNkrW6AtaoLzLcTr76KBffh3y7L5HtDoo7ig",
  "key29": "3fpWruTANccVxx1vdfV9Nsa4Hw4UapDxzcBTgz2CyH7JxqkaTsKRtVkLiPPoLBWyyo1do2obSPWjzBywsxKU7qDb",
  "key30": "LNeVeTjHZpp5rkVZQffq5CnV7s4wVV8MAFnPbptogCPh5MLeZTZxzrywT1NNWJra4ahDni3LrdPNcuozLki2Q3N",
  "key31": "48ZF62bhGjnZoXN6EdnUJYxvACg727YaMW8HBTRJ2aKfKrvzpLhNmtuWwGhTTZNbwuwVBajvGqwbrX3mYsJBUAKz",
  "key32": "5EUqnJ9o3Hs6YQvq4WVh3TcquWqNFJ3D514GHS3QW7ECkDEuPyWwoFNFnEk5o9ohYeqJAyKDjitcEQj7nAE8bGfK",
  "key33": "5T6wbRZH5Rv9J9f5H9Y2ERf8a9y8Gz9FtbZHbS3PgzHCyHSRij4sfXuB283dsKXVV9EWUVWt17CbXAiwFPwY7Luh",
  "key34": "J9TDMifKJm2eTYxXzbY9FEJqrTCEwLynkEsyq2ZnPpckXG3oGywLyV7LDHEAmqMWmQdD1VZzpGLaqRbKL1Np4AC",
  "key35": "5boYLyikodQcBzekvY2q5MQ2Ts4LWD3z42J6CKaXUm4EfX8EnEzP2TxTRv7tqVCLqnZczLRbBpZL39hyL8jxEwuz",
  "key36": "eRKccEMcxSVgMmrioCQJNtLeFGyNdHK9zvVeKjqdHmUbS3LmaTFvDNq55SLsa4XstLnPnPQqWrtP2kZ5QSLd7t2",
  "key37": "2yNb4Cbzds4rjNNpdUJgCwCYnc53mSJdMXAupUesC276fD2SF4GfB6KNqXEjqMYvPoitjws58QbfcuGCZ4max5Sg",
  "key38": "2MfG4CmEJN5Frv9a2CmWKaohX2G3dqzJEFMaGXXqNmhVaXZZEDJqLc2PJyAUrGN4xcc3FmvtX9ZMWwnr1vMDiWoR",
  "key39": "4G5ZzPGaBQq5d94u6xyoVNV2ioC6HJrSDYe8PPYzMb1L4x8LcyceBJpHM89qtcWeThmAnczu116xuyVyAGgXRFpe",
  "key40": "3i3irBmom3885SoyYUsBm5tu4uaiYD2CGnLweRardSNJaNUxFMUJ3YuvasmLzcdc2hbVHZQSJr9dF38DbE4GuVyi",
  "key41": "4ZyZoX1msobekxFsy3z6xceUZQbEPsv3MFuc7MifrmxQRMizAPwSCTGDHy6iN6Zy86wuqcpGnpNe5XwVoEBSjQ7z",
  "key42": "a87XyiHQT9J2XjviLnU5kApP4vkAspXNR6iAHL3fpdQZfsYZPhCBdNEwZk2VQtsm89Mn6arMprsZmRT6BhZNwb1",
  "key43": "5Ck2bUBNa4DZHJuoUraJwnCDTDtAoMok1dYdkpr5eZQmz6VgwSBHMutKu1QzqFRbZtTsmc8kMYXBgJ21ULEdQEfd",
  "key44": "55HrXMTeED8Ag9jP8rsVQxvQaRjyeFLhJ6sRNLAsAyRCUKb25bEqCGeSdCoKEy57rNNnMJkYwuVWUN28cciAkjzf",
  "key45": "3CDqfcVUKET2HRJSwsfzYbesFbSAUt157CQvoMhrBEA9dtTnxH4G836EbJvrvwpPUNCBdxazJNqQCiB87NiZoEs9",
  "key46": "2yJiqNKq1YscPZHUAeiNVfXJRQesEzp6NnFXcR1Q5oM7pLky9KnAwqY36w7RGLFjrRDCR2ssfxwN9n5y7sqQSgkK"
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
