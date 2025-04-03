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
    "3SKbtbRxo2HRfGHzDeo8LGfkoM7E7QW55u4AnfZYJjNPamjQLMkteinHuKTeaQ7mUwZLicZ8opqn6Dpx9eseQrGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfKSEwmHzYWLqaJh19FkF2LjQ6NjVBb3sLsoLTiyT39KYXFLwFioVJhegf1GRuTncit12RT1h5KWf5zdN48cFHo",
  "key1": "44PU6thwKCYNuS79L7pzrKaQwEdPQokznZffTczjSo9ghaNduLU5zwL7MqoP5Ek8ezAy4sYxifGSfseQaUqYDUed",
  "key2": "2ZEEqJKguwZzFvJxyjXbAz6QYymBCbmvxso5UktrbcPwMw2sigamWLDHPEscVSKzu6w3BGKzLDdQJcEYKgQArfTC",
  "key3": "5kxModZDoPzTZuusDVCyxmzmGgb9CF4fZLTE1qDTQAtWFUTeZV6QV1cRdUcF9udQ4Heg2EWRbpnExXBAANy1y7nb",
  "key4": "4Fo3wQb5EVMHu3RMuy6mSZtv73vMnMkiDF3nDWHrKnq66ismH4ZG9G3PMwmrfMvFxGxD549qsPNndTfLaKoZCADn",
  "key5": "iqu47HvRfLbTeiHMTmHPBGdS1JYfV7BDSxuMLUted7psWQLevAwGdoLxhcVVL9jKyejJ9YchEVVWLtTubYECive",
  "key6": "cqz6rxFTf52PHCCWUoqvxXPgMrSdT942LexWwdYdCpKz9xAdUNSWkJUtN2qbzqURczbgn4kacX62GxcYmqctNHi",
  "key7": "4UhhMcNMv1PRMB18LJi5ySiMXSkUD44aBWdbQGi6xykR5JFyAtMPpXDJ3yzW5Ljtykt1oTmUEJ2r5iVRL6L2jJtx",
  "key8": "RPVMAuG4w95fL3FSDewhACUvtGdAQ7MwUGVMeWyNCoYJ7r85o4QHJH4UuPajySMMjv6bwwRLE6ucqJ7JsFZiSDD",
  "key9": "4EKys6xkK1vLTC2WTfzcvpcZqCQLen1Fak4L2RqH9B7kZh8fZpNt1DmasqHXNJhTD2XAL1CmZYLjSTQTYrRZnztM",
  "key10": "4aGWFWFg99Dn7aGDsoa4fpHDAUv2oxYkWu61qB4vHzcM1e7mrvQXEUxYqwXbuyY6pt3GaGchduQQtcoGd49oxkYH",
  "key11": "5u81jZLJDS9yDznXzTUAkrLu43mUDXYTtqph7s7eJXynZmrab2XYV4xhQ5zixrDLL9fabCRFJAiaE9FZ2zDWGHRN",
  "key12": "Vis4AZd7iYhGpyPogri4JDPp11X72z4v8iEyLst6w3SEeS23v4ZbwD8BqBLoA4uw4UmKzYvd5DjUymWratHibxX",
  "key13": "5Tbfddh6uXxJ2SViZSPYTAMi4PRVWAugsAjhsnRtKfDTm7AZG33GxFQfxwjF1L1GAeBXfUrCekwvtxdpBZhW6md3",
  "key14": "2CgdAQbb84RUbtXZZYSuGSvdnPzDK2RQQA1xnAJt3qoB8XHRxKREh8AR2DYhH1xUWCA3gB2zxxh4VwyEwoPjCS2K",
  "key15": "5UAQXciDGcEra7DvDRKjcjoFLm8t9rUT15qTdNf7N1oNdkpeB8A7CVKpxLFNqZog4prz3U9c23AyvwUAEQRnQqgc",
  "key16": "5ky5Yt1ZeP6jVQY3xwUT7MMqUY3n6cg2JecCSrX5qmNtwnCAj3Ea5HQn8q4ZLUa5MCZ4KRz6hWNyVP97EJwcJXYS",
  "key17": "2i96KMcNgokHA29fzTCamWEjN3CWkdWLZsLXQVVKjY1HoZiZvgmfFdCGbB4guHTy65ThfFiMGzkiis1onJCa1YaJ",
  "key18": "64aPLTD94sdPtCG8xhpNgUvgLhKZVayM6TVQjpw8ZtXESD33V14reG6RNJPBCTEiisFYPU8RyPf2DqjzQPNwbqmr",
  "key19": "5NoyKJmKMaHDKd645KjGE9fVzV3UPCcBNEginNFpCVy4hqnzkt6kUdPmK6eqVe9wqBVTZpkJfKFkVWFhpbXbgoBN",
  "key20": "58Cai7Gbo7axX8XExTsr4yHcqtJSy1fqinjpvCuTF3KF73HpuUwwfJipwdiW8oUsGPEKqtSpfhhBv1cA5hsyjNh",
  "key21": "46FrPb3LC6wjkBoMeUWAA91C7RXcqqQV9hPhczMeQ8WLqoDMinFjATEVmVjkSLAXeK6H6yM5hhqX5rZmoCuSmPBA",
  "key22": "47g5XXiDkqzerGm4W8zPngx61DxRbSg5K9HcadbU9X1cacbn3dpo3rzBmsZcG5CJyEBGLVHoEjQJ3TGTYbQ5rRVR",
  "key23": "2xJYsZPwEye7numkgkfoeGdAizF18uFyGrei1D8D7RBJf51nQxrD3G5HeYHoxzEGe6PThnD87M1azeJCyQpL8SyN",
  "key24": "4pPRZD7xA8NKhxTxfxzDDXcKJnkoG79Z7u7eTFd7WbHt2J4VCo8iJ426XqsJpK5hSGKPHWnVGQVTEp3Bw2TYUptV",
  "key25": "VuMegmT31JYsBp3t7cpQp4fiZexERNwJBEjAVTwRNBkmm1Kr682fhxJdQ5GdhZiULVZyJZnyr2dms3CLmo9p6Hu",
  "key26": "3XrmAHqrW5yT8phijhjw97xay8C9EKUBoprkmzGRurk5pWAgvS6qa76Y1mkBP92XUT5fNEFKxfCCmRgkNpwFgMYg",
  "key27": "4do1JFjgwq9TiYC2uVjbQMjvwVVEkQ8w4a9Aep8g26Lz1NHsooEYu5cJhNn5UAVS1sTdE4pnQW3DjiTLk8v573W5",
  "key28": "ejDBtHBPjeGcb2KczQztmjcQ5Act52d2yeogJeK2qSjZaLt2KmGmTXAsR4S3vTBheXyFynbb7tBo3LTrdL2Vr2A",
  "key29": "2ovKHNatZYLukzekmjhRRXj5peR2GBxbpdjE2BHVxJPbeknzg3DmosXJrX77sqYLZz94UVUmeVSzRRxd8BzRpo1K",
  "key30": "3WTkbeAqCohNLM5XZx914qWKnfZBaog8nThhxDbJYnr9N6ajLdhKukzHSzcxq4n3StiEAdgmGrmQsbe5iC2yxEEm",
  "key31": "8JsgrhmCPAvYAkdXQiMnmt5mganw2a96CNzb1DsKSzkkKhVu8vcSny5uWXUP1wBR3b6Fvw88pFjnrCZvCHA3ejz",
  "key32": "2VMDRJ2amYKQh1797TFzeyfTm6Q1LaPWSWrnKcNQd1KawLZ3BZXpRb7dQUDGTS8LVhhU1GJHkxfySXALQQu6RyKE",
  "key33": "4PLHWBdm2DqmPwCRbmZ7b9BFgAXHXhwXcDZnL9oJbHog73hKNBantM3H2DTZzaoHLhwmfcQVEHfvj7tEQnnCXLcb",
  "key34": "2vvWFuvJnnbJHXysmcxJj7erCFqESXGQbMo6YfgPEgeiStwHmUxyBTQgoUGd81bCH6MFFgFyzBxEfigYz3FwaS3N",
  "key35": "46xo8qDs77Qf1XJvbn6C9cw8U5MUcishKtVuKqB6MRXAjWaLhqyFXpKRqncGYAj9Z21sNK8hbRPnstLfp6QLq7C1",
  "key36": "4We2u2usvbuKyLY34uTyHczctDg5JAqoNrwb9gkD1h1H7GXVjuLYxUvabduUrmGjdbYd6vaScXZvPV6ypMfRRDzf",
  "key37": "66BPNrbXA2HAvRKjSP5FF65MgfYt1dnAGQkT6KvQhGHSXWc4Eg4BSD34NZLwhxjcEbNkVqC37DCFXSQTBxhmzzv6",
  "key38": "58SKAnucCqaQmpD175YHxgzVB47KdZQj8agwXWXrvd1kkPKyuaQTyfesV8s5wDXCyVoQHAWh4ZrsA46tTGUDV99",
  "key39": "sgLcnZVdHkkhjrNLcVx6ip4mjiANCzsoTdhV1YLBNzY9EBSxnBV1yCCZYopWwgqaqpmEnH1NGB4hGFtHw53TijQ",
  "key40": "5ewuxA7FU8HNxfHEJB9N1YxJYzAGjtG3rXrAMCK598aZHGPtAbj5YcseYcvCZbjUHCLD3ckbRUZXKcz49BHyRzS7",
  "key41": "5ctVPzHQfA3roiP6LG9VCm8xE9w81gNaRrJGdfsxfwzNLvKqn63FY2ndmu1nheEahLvYBSuBbxeDruXwpKrzPY7s"
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
