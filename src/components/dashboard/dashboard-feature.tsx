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
    "oNu7UFFruc6eL3GuYBR5nP3oKoYGdVEXinD1qM6DJprwkGob7WieQ4rC9hUAgHmoxRup3jUsHUmD76s9bTkQ4cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXJa8GAN1r9c9FyGuKvN7FdHG5qtYPsgLa45mtAkyChJqqx7gDzegueQfRrZaUUcZEoCYjsf3n15DGWeF8LNxzA",
  "key1": "3oAjJAMPryEREZUPYFLjWB6D9rugMZebEij68HL77vdoVF82gjp5N3AUSZT3bWRtwQ4kGTjZtB8143DscVZb3pXX",
  "key2": "4bXnc8XAxWadRkBH5UZUjLhmQEkVZUiX59Yvr2NXSH3ouMfA5TNYgeqotN3gck8orRZ5YE9o2ERopPJgVZVS5nZS",
  "key3": "2ZhznaW5tX4Q5K6YvccRyJrViffPdCzsZYEAgA4zwhsVj485epatTZugdYUP4Qf8xztu3XxApCAQAM43BeEtudUq",
  "key4": "EJMdQh9Wg8jLWDZYDwrpCLhfmFeQR15hSHv7nooPiW2cC2hekQWkUDFoQiDqabNQg58tikJY3DgjUFinSM193nm",
  "key5": "2sH1RrdewAm9mxLdovuZg2g4FePgn38vXymMrAtUyuk9MvNCTXbgDtW1MnPtdjkdja3GSPwoEa7RGm9NviSPgvEN",
  "key6": "2RXQvanPRPL2cjCQXV7L557okjXVSdAEVh9j2tt1d72GhdaQ94Q5RpECSFd6svv2nsztCqc8uBCWpoTB5CJhgpqh",
  "key7": "2QbA8BKcQYKaingC6yaykSNnip3CUk3kSpGgnjQYQt8zpfejGmMxZTJjmCfWj6qVukty8itxGoZUJW5uYAwaBxmm",
  "key8": "2EZAw8KEzSAtjZLdrFaxGEQGs3dJVZpJX4jiHFVrUKmXegRKZMFXhEZEmwXJGgmr18GvQK4aty9UjyWKPf81Paro",
  "key9": "2KygmngRd9jP1Bxp9wLooquBMji6HGGwkrB5rA1mY43BUcCURW459tWLja5HVQDSLmBCvkjmaep8bdNT1PmZayAW",
  "key10": "5TdNeZc8UdbQk97wZyqxrh59w3RujMxMUL4wuwdg6Hwwo8w97yLu6eanrTXHLe1MSDgS1cjVZTKytm3GRvuuX15T",
  "key11": "4yhzeXgp1Ma63woZQhfdkFQPBBiqjjUEfr4zocWv7BoPDefLammCzgy4L8UhjZTpqjtmVJjbkp2TQCNm5oQzuTvG",
  "key12": "2J9wnkk9eEvWfLWEb33KPTrpQA3SHTxQAqSaGo5coHSTpascveFuuUiDcPqK5KAEwoMbK53Y7EBVvFBqDD4miGr4",
  "key13": "3cVX6s83qbc2CRSmUtw9YALrfQHWiiXVAummcKLcHG2eVAaXmb2LBXwk72A1RA2QM61dinCRJnuHFhaZWsYVgp5D",
  "key14": "3ukHsNhGLdSjWzuCMTChcvBRVJyLcevENcuGLXUHx6dqtR2qp7A9zKxtkuPqLY5q3Kn4TMeCCJKuYB7KfVeuq7Uk",
  "key15": "3938DKjt1HeVmEnLwT5khctBJR6ps1wmCJMnaFjrwKrq63xbpG5dNJk9T5dyioahSetPTJi1h3kxY4iYjMwtbo3U",
  "key16": "4kdBwBa1WsUFBXHrwA5sNxAXYBsCsHjv8W7NtVxRxeXgSkEZkTvKfgmmijqHqhN6n2UGkpWX65kCH4VtZy9bAEjG",
  "key17": "62EhTxrYio3qghMYQJfE2KR57zENPepBhRLoDFJSVBajq7UyuQmNU2LMjA6E56qPMabADnsJzQTULSXYKxPewizm",
  "key18": "VFqpRN6SoWrQepwRBK12YqrK89QzQQ2xkZEwZzvmuei1N5hNKRdYn68XczfEayd2CdPyPrdDCKYSufvbNt5UmH8",
  "key19": "4JXw8YfYYG1HqqYr2TMB54ZXmgNsPLNs8Z32bYErPz3CbkQNziUS6bkuEBtG25zA8B6NdUDVptUTbkTz2T85y1qY",
  "key20": "4qsF2swe2kvAJZz931FmdaQVGFwD7ZCqy8hEVhq6Zko2tzp1BhitT9Ktf2wJQoPWwMFJvCg11pnDMux9xC1ykvtz",
  "key21": "2CKTqzJruuTBcsr9DJRD7ksKDYdABZojkGyZT7JWuhg9ggveT3XTg9A9T94mfqfjBtaALzWyymXHcKnoXmpLi2Lv",
  "key22": "4uvTdgjDyofwmSJTMd9eS7xvU8k9jonMFkPD1GvvRtNmNG5qwqFtws6P7zUKPfihcR4qvXVb2e5E3UD9H4vZeicq",
  "key23": "4sEu1TWTY5S99v1AXtvSZ1gcTFB2cafKVgj3CjSgDmSjfFmXeXrTr3Wu4c1n4eFgPJ6ghANMHbKEkANZEcoodjfm",
  "key24": "3CZSSSGGs2Ja2wMpqiUXPpqGe6YWoUJf3hockZo8SMiumQuMHQhmnvRYwNxxeGa4CqR4HyqfQnG1ReUiXg2D6qK8",
  "key25": "5dQTQbiTcBk9SFZGLUu64EFtakYBGBz9rsrsygXfhHR2Hk8cXd5uwwG9amXN1E7kwvpBLvgLoghRRoaSbm3dYuYS",
  "key26": "5vV4RncC5wzxPQBcSPJsge8nw5bdAX9m6HRV5QnrGeQ1TJGqEnx1bYKUx4dqqRCyfihdq3uEMxNhbbZPreu4We29",
  "key27": "5qrVjVGsJETVFJ77UbwMwFsrZrcEQBHtZmvXAsgCgj7K9mzQY3PpC7betBBVREXU9fQysU68Gunu4KLJ5Kmk6EJ5",
  "key28": "4dctHNuyMezhjQwngnE3dKyf3BHkAcocZEQL9SLJ5VRn99fsSGSYnAMJwTqv6mVWT5wup4nNzSjVJ4pwrhuujSHx",
  "key29": "2fcd3Bv4D7VqJ7AH4ibrx1QEfbKSiotYnv3RGVYVMd2CV1pTUZRyX4Y3bMm1rx9k8wbrcbda9AWfGDSQkpw1EbZY",
  "key30": "5Y5m8k74kjiKYkhjKiTcrVRLeAtxPN4hGCfMkVwktKzRpQoURBhyadX7QFmDMcztgY9GGeWDptuxc9c8EggFC4Gh",
  "key31": "5sM2iMu59t5pWrYpnmUNsWsVqSDZ9ankVKtconxJa8WdU9CVCMN1t9tpxnbENMveWQEgT7jNEQLpumwLVa7WAPh7",
  "key32": "29jMw6Fs4T1dH41AsqEc5YfvF4qTkV3NRtCZ22KRJVKmucdmNCouLZUCda6iK4kFBWhpHG5eHeGpmoVnywDbTjmr"
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
