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
    "PHVAhTrt2XSRkByuW19Q2jNtUC3LyaxKzCydt2PPAJZxF81W14DiUsKLiLfcnseZZhuxLawf4ATiHAnpzYwEAgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dc1XkJZCDhzfSqrQEo7utxWDbD4px2idmGu8GVX4X2sTBEUb5HLn7awfheed2tW4wPCF7Vgj7z8C7862DF2Udg",
  "key1": "4H9hy8e5YCE9PQGaPVnSbjAMv22695Adr3LoEPPPo4wZAg6AGKu5i9xhtsytM3za77gmcC4hnRpwD3bohiVym9Dr",
  "key2": "2ZbNBBCx4vJsVTRBhYStgsFsYPW683NESqt7e4cXiVJQM2CfhBxGuPy52YsviJS4kZbqqSjHAcgfPr2q6Sfj7GNP",
  "key3": "5cBBUgdcDZwMuSFuTEVc5Lt5wbTnYgiNJ9bddtpuA72AjXL5zmeokBnizXGwgaA9z9aThgWbJwR2Vt2SkrN9LUqQ",
  "key4": "4hsUfxr3KCbBjdDsv5nAzDdDCqs28w4D7wDyhduhGGxkMJC8PXpAEvFFKEHkpP2ESzdD5bYRVjKiEQKWiSaSbQmr",
  "key5": "2cH3xVQFKQd75b1tRFdoDUAMiivFt5kfzWawjKnc8PPh4YYnAy9ATu5htSsQrV7GXwwjQjDAdmk1nFPy4cmkqF8T",
  "key6": "56SHptkJqGpgMTSxY1SLBvgiacVQ3sAgdVwJtX5n4amHSarFLDQHHrCizftsqPxQgMaXabgWCQmgqZXJNWAnm35b",
  "key7": "3A5wniwnN8iXXCCihQcWZBBGYzNuLE9LGfT1pRi8V78rB5CAgyuK1zfTBNRzFsWUB7R8LXWztQLefWYYhR8Es7Fu",
  "key8": "3dLc11UKDskRHWAi995aqcQaYTuWNvyT9X5PRqfUZTSNjPYHX7Z2DcELc3xUSG9WFf1ogDtkXd18PW81hKsgfUW2",
  "key9": "2Cd1X4akFMgD9dnqJyNxAJ1Yda1zcZyanyFrt84KGe6DUZPvx7GPvVVeKAh6sGET1QVqMCbdVp57XLHNKfZupFht",
  "key10": "53Vv1urYwRM1QWMEZBLHTqf7JSH4rB3ohYP42WisMdhqhisWiwxTVMocnUrdFnTcvhkcR5erFrKRaeVPi8mpVY3R",
  "key11": "5tqgCkPGPw78UmPu8hFjrGaVuKXhsBmCUMgx9vkAf8pq8ywQs9MLxPGkTPUrWZMSE7YfMEgEhb6j9FtDgB73aVHK",
  "key12": "2XJadk6QhSApqD5rivtK7FQ2z16Bg3QZugQco5wxisnPYCE6WJgKyHk4Kxn2DPGshANZEGgsXtsQxb517kFxhL6v",
  "key13": "4fSSECnDtwHaMFw9D1ZkE9yLYLo1Xrz5AbcqFLgoqbjcFrF39RiFoqSQBH2QzX4Gb525HAi9DDmZcerVTLGvqhyg",
  "key14": "4RegZxrTtcQdA6C9tpwT8SDyfVHLFrZj1Taa3J83pyyoSrHW22shkAVi4B6nMbnn2ac1UGG8kb4hAeFCRoMCPWkK",
  "key15": "46v2LGKmu3fkriQ3EtVsEuypMZZJB4aEkNT919h5pabr9QAGXu5UEUDt6vTW2G4gG1qkTJLv6y7xyk4Gx8Bik5hh",
  "key16": "28gzMsi6u6iUsSuNbvQ6c5C6CxyQKW7TjW6oL9hRposhjXQeQExvbBy59tTg96Lg3oBNE4bbt89L2qG1DDnotPhq",
  "key17": "5vAG7GCFKtGFF9anG7DBdqiJWckmEveeLt95P6W4sV6fiFkgfkXgNnBpnQ8GmCjtHBBpdaXKhcQac7p6jFznTmY7",
  "key18": "4xvg3F1G4LdguqrQ2bvbsqSpGp9aViRDTiGCxoQnpRqQeWVr5X8ZgVrzQ2LM8P9Dki19Qrmee3m5D49kipbxS27n",
  "key19": "xMX67XKFD4PJSJoySiHzX4EUSX7pzHWvwTHQpJ78L55UtX5ZNpswcq3e7TvEq2sHg5snXZtvaVREcJgxUNFpgoZ",
  "key20": "3QwEzKgZ1LAVcFkDV8VnX7B6pTDHApBZufui8eMgeJfdryprk8pxovdXoRu4dguB9iDPeuEvmQ975hwdbW2kAyrQ",
  "key21": "4RjoJPGcr9bRJef6CFudxe59iiajeurq1h2FMRBLXzCwzLSzESez2TRJqsfWPvjKGQcvqURPTGDSg2yZVXL5Ap5U",
  "key22": "SqiJd4rpnpBu3XGCa3gDcbSJ23GGHbWMrKnjQjYHZMVFVJi4pwGwdeKb5XemZGJU72GxjkkunyqRmFgSXfTLNSt",
  "key23": "4HFF2DtsUfoj1WCw1MnG39FGjtkjNAkkjvhmeTHnRZwAPnT3EfDbo9uyQwRHNXWPZexGQjwKcbEQpvkuwk2vNFn8",
  "key24": "2RmRsJfEzJecXU3NC2NXQ6njdpzgjsXFoej27yq9hy4ufLmsWvkxsv9KAGvVD9pPsosogp15tvqfnN1gfdwmtw8E",
  "key25": "2uxFSh8tKehxQ3oqxETUFKSksiuN5btNzrRwwQc3ELQG6pTGDCr1rEnDnoh3Fcj65CL6y83bcT17VL5pyS2pJsZj",
  "key26": "4q5JhMvgTjwoTKAQ4z1ButXwxDWVfaYcLmgU8PfTt3BVV2vkmVSETUhFwAAyQcGPRbonBp7dU13qbZSh9bgmY1Cc",
  "key27": "2E4fbHd1NLreFuJha9yjFJ8DBUvzL6UuVPVymS5pQuXZQi4F7utWqRex48EWLkhUkHrQBc1jP6bT98kp7Z9ZG1qf",
  "key28": "3RwyKXe9muKEzZHdFVfS6SjG5odN1SZE4LXKvU62eDZpFsZ4gtrwPgLnsG2yyjsTrHGJvdefiCgyhqDY6cAWoer3",
  "key29": "61tXzcgzfiAkP4UutfAKkULoDf3jfxrEYWU8Y5dSkdgfVsDCEVqCuJ9CKdfJXXLqywVwc2maj1J8hDQvwYAGDF1y",
  "key30": "3upiZkSkC1U7iFnWpwMMDtrkHC7jDysdfikwv7WeJUi3XYMBCaTMS6SQCvcx89bWVgeEo42a877W4DtUuym9VpKR",
  "key31": "3G87tzTMKkFFZHsaCGx94izZAVszL6Y4pB7ZbDvAcyc9JxEPZQ3H1aWKpbARxDrLecg12PrEUGHQvPG3yNc8K74A",
  "key32": "55F6iwgpiSb4DUKesP8HuM1yop2Q79AnMw1V9Av8xsPRPFfkUAS35rW37cXpUJ8JKcvfeU42RsahPGYX8EP8tQHB",
  "key33": "66XEmSYQ8D8JNfXWzpRw9B1vqVRFP2Ad3skxMJbTUyYTfym8rcLWhqo7dJLbtrzmAFwgGy22knwW5yMVhMdhXSHr",
  "key34": "41qSaPRwfGiw7az9HWzjjhcvbfUZSUGyubjjERfSpD8efqj6P7u146rqfT1FBUkyTnNe6JQfkcLtqqbLReR427ke",
  "key35": "4SEMum5DQfWbN2ihevrW9d4SXdnyFqtuuM9NSgThR8AR79ijkvtT6UDTPiwAargNgw7DAq6MF43pqoxzHiwFgJNf",
  "key36": "4HUC3XWpEXaWdF3AxnLZZJymb67uPKoA3iCYYB5jfsfDtNEbHkKezCo4DnedMrgj7WXpLYSZ9PAn3EYQ2ArCrDYb",
  "key37": "5hsWsSDaXLntxHVYwN3oU4SZn7Pfsjji7V6B5WbaZXZenaxtWzeyXtdcurngwxkc8v2856Szus5x5goTSeNNaBdD",
  "key38": "JZCj3BZfNKw75uJVg2KgvNX9PEAZ3JH42oaDtUTDCLy8tqZG5JVat2Qafv8EFnfREq4shhvYKkvEk1PyHVod5r6",
  "key39": "QcnqNJrFpsjFtnbtK3p8uFGPqJknNqVsgxGwmoqUGcEPiiNVXejLLP22JgNdMSf2nF4vSupFuJDbbgYVwgeYfnY",
  "key40": "359tYut7KbJjJu58a1CN6etsoCHPXQxSFKsxV1RoxxVABFjwpeZbbiPAE2yAghTcM7HxJ1mSL1qVuLXi8LbCDvVb",
  "key41": "hG84M7b7W6iPP33bGk68zk5GyLPJPpYBqc7xhV4aUKjYytHJQYQf9Wn7qnn2CoLdLQESKphMfjRzQuEUMducg4J",
  "key42": "2xjGHiigmjoDBLLr2AKxqnEq8qFzZp68veJYS3JUCssjV8JnHmTKuAFkcLTcqBhFMgSjMYMUmTTdu7JkxraUjyVP",
  "key43": "fGsKCJd6gN7B7TfKd9SFusdwFUjHYfPddAAB4B64u54JXYuKd3pntUzkX9ApUyR5oxvTb1G6jsvFoyYBHwAcwPY",
  "key44": "3sFAjWYrq15Mai9GTGe9dChAM5CiDgtQPPbwzbiE23r9GBfcJAbCSVJ5at2VeWEjHPhvLot9Zd2mod9Bxt2Yz5ov"
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
