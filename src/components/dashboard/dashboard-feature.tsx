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
    "55Y4PUzLuhF7FUy6SK1ED2eJ48qHJrywQLr53FdkLEfA2aW5C3jq3xj3p93T6kBhJpbn8cWDgXXCTnTmF7t4FEjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7GJHbfh1hrLey6LUorYfgT6dV2Vfn6eLvwVHyDHyisAeGxs4PbNLw1Uopc9hCdFwLfaMR88e3akVReocpNMA2r",
  "key1": "5sEuNFmyMzKS8weZL9vqPmehz7ssQig1ZzUy3mKgScfej9Y7wTBMn7msV2jyFB7ioFKufJgYUFsUKWFD44MvvRH2",
  "key2": "2mqPi3WhozrXSKj6WJBazXinvJ9rbY6WLALYPJadWxLMyYFdF69ZkrURWmwGyiRLwwyNzFV9Jbu1SKC64XVLM6zR",
  "key3": "5Z4LBT74qUAm4YM5x4KiAHNb2zCu7kCHWCgKbVUQdXTtWFtrZngKS3RxqNa7J7NWuVrNTJ717FqvNTwXBJAHLFCk",
  "key4": "2Ggm2VjS3NaksSK4CdymU6iGM8UJ9hxqQoFmm5DfyMEo2SXFV2dZ8n1vpYy8aMdwqgcmEMfUfohChdDfPCdvhhYT",
  "key5": "66youVU4SRY5aFcA1QxGZVZsYLXqB95hy74vvsHYNJ6HLf2uqhCBidDEH2nuXGR2Kvt3482oLcs9hCW3HeU3dcKu",
  "key6": "4xDEnHs5e6TUQmagZPeabRe4Y5BkU83sbyRhwtPEACLnsw1XnUT1whCcTHEv4BjWQfNxmxwiDtnUgwouTcLamzfT",
  "key7": "2PkLpKCYNx6skndyMLtMsenFYPuugjPmJsHEpGTu8veKBWRhVQ7bkt8sbU4TzvH9Bh9x8HFZz9jFPUPC3F7j5pw6",
  "key8": "45W7DxpTfe1zGL1ZQfe35Qz1wdYsdgHp5SCvDYgZN7Kuzo28eaXis1zobikJDxpu2pZvHdqmETR3rDi5ZMjfBMR7",
  "key9": "5fsoWgjxUpMzpiu978hvVpocWA5Ms4d8ar59RRmPQMx8gnfbRcHg3DxhUK6eDkoRMBKNwwHnocj5LpGvkfJqA5Me",
  "key10": "gsWUwMKwHHir35eZty9XxqVqgDosazn2iJVaMBYFFFwPauH64VCig9jgX9EcxWoNyoGAEmoGqN4UUzE5TsSLfCg",
  "key11": "5iCUudyfmCHUJ6MBg21STZPjdYdHBU8zxy6ctR8QMZs9Lg9rqaRzdbDtZcQdBNNX5UsbHkPYVEy3Em9S5WPK7iis",
  "key12": "2BLLaeTnnN5Y1VepNCr2zaSdv3yk5FqVxweXozRABxMpm6sMsDstVrwmH7QZY5qPAJJ7JwSjAbCGU7CCHEnwHwtN",
  "key13": "mHx66Wffn7ykjpub6QBa49iAFZwcUv2sxntjTwKvBB2Bcx7BLeZxA9Gk26iebRzsnJHkw7rhF3U6Yr7LzQSebi3",
  "key14": "kGJCSN3yb7sFUW6FpLzTgbrvQw5V4cTtJXEBWErFay4dD23tQqV5NedH8a9FDqd1nGfH4mBNvVJTgH6gMGPWi4i",
  "key15": "RSdtiyr5MyFZC7u86vwNgehnHXdiy4GtEWYdCJ9Y4dUQVRthNVnZmchr1qJYhojmYSuwRjXKUtZ15EziU64wYcC",
  "key16": "AAMsxAGpSNiaX1BPKZX3GWjaS9RYQGr1q3XRSsisT7EALf7sNsTBHJ5hkM9MUgGkuCXQ7vNeMTxvYbT3JPrbBYf",
  "key17": "5qqhvLHxkPn1JrX4CPDEEK2dJFHvukHPKHWjwBAJNj2x184orach254EV7HpFwiSqspiagZfdqawqgZy8j6Do5pQ",
  "key18": "2nXMK1DBptcjC5DWwxHg3h6uZJUXnS2F9g4nRTXq2CRY5V8hopf5vfZVTWoi2AThap1tpYPwvWF9ktg95FA4j1xF",
  "key19": "5z5S3Wqxbi9taNznbdGo9QnLWadEV9gbRFJYWtnuDe3bcgUY8Dtq2rPjd2b6nKCBvAYFw8HjNutnRcn1A56LJzci",
  "key20": "2kK37QfN8TbQ7zvNy8kNUT3h4wVvjzkVqkh3qQm9Kq3kd66h3Wq8fEfUfJZvnN9nVKVZCSpnr476pQbxzaDaNWDy",
  "key21": "4p9PYinCsPL5dzV87iJsS6pyHaDmTyhh9Wk3pJQ1gqYZ2PR9oNVvubdEf8gzoYPHTRXKxxUyYgRKjCMHz7yyDALT",
  "key22": "3XsoJv3Q59cFjp7dHQGQPKZtGSqfVvKTQpTzKsiD1DX3SEQR6kmaFXXHDN6SVrnyVDq7XxeRbPSXZoRgWEBW1ygG",
  "key23": "wZGUnvEarpzAe6K8LdjFfKrH71fAW56FTsQ4sovxqC3BrXbVS7hAJ3aF3ti66bcexyp4vBMwUsEg1YwfKR4vd1U",
  "key24": "21LSEURG7ugpdNf489VZk5DoQhTa6nB31hcQzqwZqjXvEC9mADG1KUYnA83v7AAoKvw9YE1xTfbfLyDBZSvhDZNR",
  "key25": "bwxKP9zxBcgJMUospZfyBPEYneahrXn8EtsdLvZg4bCptSSDaiKzzMnJXApAkrM2Wk5m5apoqUQY8es2SJqaSvt",
  "key26": "3LriZXCoNN1WS1kJTQLRsn1iZerVHZ22gWFrwVCfPCTzg8cJwXWJpLjKi9uSuhHLRyDEU7CwbT8pLYo6PxAV362S",
  "key27": "3M1HVmWpKA63mkthwv7o5pmbycZeuvRLmkk7NtpU3G8o7B5PqikrAhJXEzcRiGwpPfG7fMxWY5XDL7fr8KRxPjMC",
  "key28": "H1wai7guJQSyp3fjD559i4vPpAWpbeff7BooZer9AHY6wssugwM2iyRiHKgcaPibFvejXqjYnpyaoW8RttF9r8d",
  "key29": "2KADa8t1MHqAWZkQEhqtmi9pBtwgaGfZD62zdqMX91ynTaJt9JuYBF1UjdDwHiPiD6aQkHaP3YdCoeHUe8DHviuy",
  "key30": "4C3RYxZ2QHbQVb5Tqh4PMiQ9jwSetExgBjPXNAjUqtXTSDAcbhhsXtep6YQSRjW9wibA5BDojc7XDLs3dCyyBRSK",
  "key31": "2KA7Jc3CR9MLUKZDaye6teQQWYf7XE8hiYkGaqo2iM9h69MLdpoiZJ5mMSCPC7jJcEJpnikodKER36Pq4Jog4E9u",
  "key32": "3kZfWShYPRXSgpWrvGGgAAC6KxGGiVPxsjHZjQ2vezVoCtYmaYh6LhD5fjBLrwxAD6CtkQBjGm6uLhZkYQ224jhP",
  "key33": "4Wpbck9mRP7QcQj5NKFnn3RQ59nXMUTZ11H1S6kADGzgqEr9qZkQy4sgMXmsSqEnmaUggzh6mPn5YSkjkKc169hy",
  "key34": "5FavZ6ndFJgLLZpbF8kLzGd5LjrL8ewu9k9TWChJxtnn6118kAiv81MLC2LaWuuGRpyvv3T4KP3MCLwrgyDJ7JKq",
  "key35": "2C9mNywX7dQLF1MkXmWurQitfd81ZGXTFMF1S4UXgEqCkByn7yzQ8MPWGrQTDRJTHRP6SXMHHmDVC1RRWQSYWxVc",
  "key36": "5VNW3sZHKy41YJv8hgEfPEGMSgzry2L9F3zZrZMWSzm76vpcaMGgwvUPaCC53pYJLXbFeddz8TUK91yiHYgZhvqn",
  "key37": "3AEz6yZ6b1CMqSQrDcb2GF2iMxgiasMkuT8FJjNaFbpXBG2krJMQapaYbW2knVW7Q3rnVAWJBfWRXkReu7zciyDD",
  "key38": "2jnZCMcLy2YWee9crFwnyb8GnqFLddkkQudaUrgZFN2z9GQgvWuXw1nRyDgSbqqprVAuQD3fJCM9JBjqq4Nukj7p",
  "key39": "X1V4nHcAyVmGaGrjxVrQRviDUH1GSFAjpAmQjA3LPf1v118kSc1zepWrS7voJKRBqwsx2od5hgtDiMFhG5S6KVi",
  "key40": "3cCjQuSMpq3rD1MToZpfEQnh8WiJ4LmfQkfS277Mwrjf9iWuDMm5FXSM5V17zuSe3xyww7JZGFQBU6M31t31zJi7",
  "key41": "64oQV1jn3pm44VKMbh412t9d8bSR5HPcjUf1BCZNyP4MY6nNAGvr8fskyqymrJ2rPAt5N7bJdDsLrirv6v7hHBFx",
  "key42": "4rNPjbxjb7tf4gu9cuDEe4VaVaaJD1TY96fBHPrk7gUuSdEMmWGkQs7pRSy6QwRUBUDkcAaecqdHHY3nHtM7guAH",
  "key43": "61uoCXcBUy31Yqt6iAL4cn1Wz2YsurKCAEHxP4m48vukVf3vRTVBK8nLbKY8QRMgK1nobbHSCmZPGpHd6JdedQxt",
  "key44": "2y7WNP91s2AtGznvh79bdUeKamnxf6FvArNb9dJf6u3oSAxmqRRs3xf4WfFtee5YMRWph1YSAXNHbRDWGdSfzUSA",
  "key45": "2jn7ktfAm48AhiS6muomzdAH5vfc14V9BhQam51vtnStRZssCkmsDGbjbLeAidjFMU2w9zaN3hqBK72SedrSHQD3",
  "key46": "3V5237jUGBkhYSyCwrJuL9ANicLVEpx4RrGBXHvFgkuXmN4ofwy4EitPvU8uaL9u1Q1PwJ5pXsF5zWyo7javP7zS"
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
