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
    "5uVi9aPsCn5o8r3KeWrCSSDsBiLG37o331VidgF6HGcELQsjHgaBV4Jahoy1j3gtiB2bTNxZLjGUbDc2pnqLEGxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcQUFxkTmox44LhrYv4LSyru5ixFVanQQzPkF4jBh4sTMx9DoM1MQPXijZYpeYF98QY1zMqaF9fzJDyGjyTh7jd",
  "key1": "2n8DaqwZSJhf1GJFrxJrSgsH4vBC6HNPmCnwZwYjzBBCcvfTHxKMRaJcAhcbZprQUbcLYKKUEf8VaxEghVtf9BFq",
  "key2": "2XqbvdnQDf1tNjKU3sW9kLTzsSGD8opFNsS3NQCqo4XV2hgZ7Zmf8sZGpBnTefGESyEfFJAKVFV7vpMxjpqD3Cvz",
  "key3": "3vyUr4jpEY3LQFyPWQKMzjcFoi5nboK5ai7nfNuYxatiun3enQJYBBk5sis28s36Gh8vMqLCwddzGfBSeYuQsHNN",
  "key4": "2LYUq8NeBU7c111DMXEbW5j9z6pmNdR3ywqTkWicHi7w6Q5xyJRL2botZXBm2BLRvwcMiBjYHktP2KDisByzeoj6",
  "key5": "3jdLgSP1tio7cce4z5kHS38AuoUGX5KRoydjveVkrbv1RqEE3LfDmdVpEvaQEqtsACczteC7nxSmmmJmcwyecWsa",
  "key6": "5Q8mKUYteTBZrGpNbcSCX93U59NyyKxxPMjSHkZHnpQwaBuMdh3zHeWr1rBnKxDgQmoamJnC1qZpEEVzVcsHkBfH",
  "key7": "4FaUzAX2mXpL11rJaQ49pFnswF4QBKdHmD1BMwzR8XrWwesCuX9v59LkALMR2VxQ2KKgg8gK7wFp33Z6F69Q6Nes",
  "key8": "2bifMuhGSbqURAd2LoWzmLtkPic7Ny4NzfZqCVbTaNewWnkp6ybsVisZ25AkgNDNTSDDFtrJPAcrZzeZpJARbpjS",
  "key9": "g4bTakwKPRpKsd6QcQzWMbx4v4uNY5uE1fKtkdx2xowgpDVotNgicAdmXPkeW5xB49DQ1aN8BoeyX2pyFzc4SPr",
  "key10": "2Wvsie4PtphvA7UaPYLCJppUQLC5UfTpQ4JE62zPcYJpdaFx7eCFUFcKLagU4ZNv3jomRmtUMnLVKPM16PZ8FQX8",
  "key11": "4pwzJM3ZkXQpJhpCTP2MqoTtejWKvNpuQkM8mX4TRRXNLgUF1ew1BW65b2m9Cmh2iFdNGrsHY8ZovXnQE1yZHTfe",
  "key12": "9wNbjYWVXQCLppUET8xB7ax4s8KBDyYD14rZUUcdoviPxcqS9SJQPxJb61wtcwtdrSLPM8C59MuueTbRChBq97y",
  "key13": "2BnozXGBr9i12P1xHsBmSkGC3NjfuT4ybvQbRQM6KjTia2oUjsCfnxxLmXdkYQgWTPdvfoPV7FJfhpSBTWknZovt",
  "key14": "mzUbZLFv3c4RUitgNV8mhog8oMdE3AW5htdaos24TmjGa1N4xNBv7dwa6oeJaiP3W5sS96VtbAfmWqHKYEYVzFE",
  "key15": "67pHy8wxwEsooM93QJyyathf1zWfwxt7CcBK5VjB1h1D2yon1xR3Gep5PUd7BKXWTBXzUmtzwF49oQDt4EMuVjwk",
  "key16": "5XWyPheFktVDMgymXbcAbDm4YEm7QQLRbTKXzLS5WnThhm6gSmTxFxVDqoogDgxg5fagabxNjXwxquWJxR2in59M",
  "key17": "2TVNWrWYseNC9KB8DQACtWzzGrSdDbz1dffVPhAagyLK18b3ZZqdy47z4evqErHaRMjZfEgT849SbqR3s1d6FYGj",
  "key18": "4k5ghbg9wB9KLYdjug2aL8VgUydBFzp99nNrEbud4VaJxbk9qD34WEe1ooMVu7W5g1BAafQaDf3d7JhQWo7bGSr",
  "key19": "5ftCHGjPqppGJyBtQvDsjfGMithTkwBoCHXogq5nKfPKqwUKuUFkQt7noX2RkEf17SSV39awzCmzgoFTVTWMCD1v",
  "key20": "5qcvgKajsuWCDLaYtKcqXDCn8gvCLeqq5oZYEVCCvpnURfMq5h3Pjv9xEFVVyTopUrvXKsRfTrLWmPeauomi3JJq",
  "key21": "4Znrtw3YY7sjAefmzvk4xtLGKhmuCfe3ejeCgmnwPsCtTfnGLtbH6C9DXHXQEiNhoYQhoUYddsZyrXcmwCchukGc",
  "key22": "4TJZ81Wf1vv6HPb4yyFjEG7jFmAHa9nT5YaWZa8fGzyBrr5SgmwkCLGM87xiSbUqWirQCrUz4e2eeA7xsrSD6jkv",
  "key23": "dqPgmwEnRRpbpFu5uxpPwn9zzJnUusxHqzhQsSXoL2z4sxi1z7t9ynbQtq8NHVgxCUcH4cfMGsKUPvLPjg4pBkq",
  "key24": "4Cx3Wkb5X28BgaA3cQUUdGhN7D1PXWjPWcS5iXBf8AZe1an7NQcZp8Bn5M1EKTHhk7tjLZbFYzjLLqzNp6WkMNYJ",
  "key25": "5mRsR3TGemPoiK2CVTZfcEL6ZcdobJAhPGftAGzGdAo68GLqhQkmvbGLEENQem7rt3VkVo4NYPfWKWRSBv9RrZ8j",
  "key26": "dkZStfG9eWw7XavWsMKWwWfdoN82YW7EbzNT1DhXnkZZFpKssqEbYZTBoqAgkwbuYfdMyfTsNT9gK6RtBBACSNu",
  "key27": "38NZ9dky1SkU7WJAZVuFPxLDmbmKoWH3NoGQkS3NBLFEu6ZNj2L2s6DUcypXnXoATxRU2YAt4YeUT1Zfmv6vM5Fz",
  "key28": "DRmsD6nUwNF6261a4oASndC4xVf1tRR45fp8c6N9WGEigaj7xvEK8JSFjwFp7DPmLSBnFRY1B1vDbfL3oxQYTET",
  "key29": "6fxD6oum9diNNUYFV7QEWG9aoBqmYTF7D43SoquXRqPgYSAJxrrgBU3eeqtAU1YvGsrsWiZLg5B6PQxYLbdi2h9",
  "key30": "5eZZfkACfSf77EgdJqurt8jaos4bz9tDM188UpUwGQ26zcgtFpqmSGWmstggMvL8SomTDnq2JTYgisAMjqcJDs3j"
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
