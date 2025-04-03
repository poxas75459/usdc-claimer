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
    "4gVpquntXkLvt4dbXNgG11rsTS9h7Ue5vjw9YnD1VW7pTmxTDEMdzBWQUJ73yipiqNJGAoNfEzegX1dAtuKFjQVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T3i4Kqnm6NhA2hknviQrBtpLwn4e2q4RqzzVRzdDdAyC72ynp373B69oSYzGjYfk4uQBv73pZWiXBDis3uYAhVu",
  "key1": "4nF8guhACUTMPvHdYFj4v94jHiWvYi7TBcWAAYtEBy1kmiY8Z4B7orHTV68NE76QVLz4GoMWLpsNupkcKuif9Yhy",
  "key2": "2VjK76k8qCmhJS9cddQDhRvzNFMAYgv7WgPawsDQEVokWMxBH15xbHA2EJpbFHkuiFgtRMmSyqgryy62dVtw2ZUJ",
  "key3": "3P33wMQ3xeN62yxtYGmtLyVmopCvX9kQDNAfSvAt6XNU5LkMwLkKG7sLySfaKJRZKD8aSV4bC2DVSVWkrBp3RzZ8",
  "key4": "65ZHrGG863w54MugJX4s8LWnewnFLFh6cuhBLmxa5UP4fBoZDvtgLKViMZ6B66RNDZSwFx2EHpHgQAGSgkjUVDiL",
  "key5": "bpn3eADuixoLv1qtX5TV7n7JuiuV54uPfq5DEUEVTVLSW5eApmf6yFZZCPRf1ELMJgs3we1r62BQeWnca6hXdKV",
  "key6": "5aAxj2ntxswxZayMu2amkJkNb1KnzezUJQWPY3c7ewaH2gRyXTSunaU76cuHTFidyJc1vcfBt775cLxEGwaXPJku",
  "key7": "FDBZmBB2heuojcyzL1XgBqMa7pFpUNz9dzRQhfTJSvfYjxURnPYCfzpBFDpUosmF9SpbZo64DTxzKutgZMnan9n",
  "key8": "655VE3TL9NjjRo6enfDGyd657Xu4BQec1HfXEtj2mwm4PcvTLD415iz2Vrp57auDw2zEgdXPTh6XZgVzqxjkbpUp",
  "key9": "5bYtVvL8fdjvci5WEEtfSBKb8ituNE5muJ3PD5G9kYZJgZKCzSbaccUkPfz3MPGHVPgv2N19ev9465FKPsoLUHRi",
  "key10": "5DAosZGUBjkbgA8qoYMaf9Gngaks7jF8LQf8t8BJBvPAbGTz8uebJk3yzd1t6uPkVvENoriHxJYSnQHHv1aVFpiK",
  "key11": "4MwF3YK7zzGktr8Yyywp61stSnmamoWS4UkmbiuvJvVaVYZFThoEMK4SVc8rmCua2LWpwwbbm9wNDNAFD3PwFGt1",
  "key12": "2zq5hbwWG4kCSar4nSx4dxzfpswZimhi8fLx7dyWfPHb3YmkssKKF9mtwJwbYHJjv9UTzxjjVXQL4oEoHL1E4RmZ",
  "key13": "2iYAuuKwU8PLoCUPta3r4VWPxBXFb1coPFBZvZFYmwV3RNMM6BuN4KGNQpeYvgnJbTHujUsjf6oRUE4XqiWUPcAZ",
  "key14": "rgr3mmQi8hr8AYKv3mfSVSXBaZMKLuboWKM8yjApvzEW6Qkknq65MumyxD3AH99Em7PhE5yZ9Y1zP5hZjFdbj7d",
  "key15": "2jR2ECrVjCrHfSNwodG4GtEMEcxESR2DGUJJBp2DSQdeuh1d7MnRbcB4eRGF8qY3TvW1b6W1HRFvuDpQbXWYd2Ut",
  "key16": "mmXiRjGF4DEo89HULJq4sPcqxLMpodVC3JuEk5vbNTKCQ3CXffqiV3oD5DPwsJQpGzNaPrB8gyX96BU3i8iu7E2",
  "key17": "E3bEZN9pscopBkUDVTqbxq7KBd3ixsHdircUgjmacDBVNPwMNfMVSMcNKJSmevN1e3cytbCvhGLXc3yetZSDRJP",
  "key18": "4En7F8uZBNM78WhhDzyurwZBTJfpS3r5WF842DbWmLLGUF8yMXAPVDRqr3hCLWVkB5KWkjtY7KJfVP9yqF652UQ7",
  "key19": "5GPW84pYhjeapdTJ9PZdqCJrDouccjqNyQnzvZnU1JcCzzLiuWZxoinTmjgfRVraFGq1x6ADzHqeT4y2ZLyyYRzm",
  "key20": "2NCMguXqDYDVAUZ1y8JEQq6dCXkxdq1aFeaxgA7H86p1gJPicxec6VLDRFiHwm44idK4mcujd6rR81z6WX2hR8of",
  "key21": "42RcRkoa2HwcjcTtC7jrTts6UXQQqGjPsnjfLtsMQqoFTTdtsyxt9Bf6tSBQ3qUVuxrvoepo5nBpM4UFRxthGBJV",
  "key22": "YToZqrrhiPJBYNaBghCYRCHYNxNiNn2jopB8c7veYR2dUvTuUgp71MG6cugE64GHW1vSvSPVc3D6trkCEr45E6q",
  "key23": "4VCZ3nXTxLj9unvKNpyjEvwQx8JuR6FChdEAAa7YAaCcx1uDYjBr9xQGfRFecTbiYdbmqurXLgHHwnU3d7QeMxPe",
  "key24": "4krhySoxCqL7hDUZGdcxw2QKvdwsSRJ9oJybgZTU25qoGxNEdeUPpAjbT6KK2NSKbvwfdr3VPjjxSgY2sroN5U8X",
  "key25": "3jgRupgL5j63MuWHvecCwdkSXGJXxfc4TqqwnVSA3CMCSPgmfk4zYo3Zp76nBd8ymVwSHN8mTB827cqBozh7BW2A",
  "key26": "GwL7AiYiX19RrPXSqsuvqtG8ctGFJaPF63iFQg5WxmFE2yXkDCQpiCVfJZ17Rh8iMbJ1nPMD4QHmvNpappLTZ5P",
  "key27": "jo9odgH9qteie8chv4KowKSv8cYY3SyRJcX6S7EFq3sqFxTiZA1NszE7x5mbo9th6Uz8snFHC1chzHT8JEgJLCb",
  "key28": "3FTwTXr2vfDPT6FdsZh57TZWQ3pVcYJBP3ycXCVsvLBtUqgW6diW3Yi2aY535aVnHKR5zLgUGzZibV6eBzEqY4tb",
  "key29": "4yMzX9Z13fRdGwaxvb18F1q9CQCYc7zTFfFQzgJAkW88VxJpWdWXbLQWeUZ46AF3x7gaL1mSBGLVoWTRdgwhVUMV",
  "key30": "JfNWigtEFH5rtn2arWe3dUVDc8qnNquNgZ1kwzqhhgnEsYFLRbwprfkpwyS4rNcDgtDyHKo5uWBYe2ZUR6A7YEx",
  "key31": "QeeYsWn6iV5hMmtgUdXidrhgTJ6cNQRaP2c2FSa5pWtnUZ7YrjCDA7CCsD6UgeBMsX2vhPGqKeJuDw7e3VvF1iu",
  "key32": "QG8zpFZYSp6UCXG7ohSoz85mBiUhyrPn6rAcZR71xi8PKi6mCo1mbu4xDJPSxvUnh3aYVHUWPJyuVQdpNmJ8wua",
  "key33": "59mkiizuWZQ7z2U7nkABRcVP2rfrLTPW6U7VKzDndcHsz5kMLjEcPFur5SEkmVmMmUUwZzkskJmzVLdKjjZFYo68",
  "key34": "jZSrwzQFek12HnxquhfBYyNKHzsR9TbUfkuKEnwm62PaQLA1HA6obcjb78cpV3VjUtweEJFbfiQgGJ2NcQDcWTi",
  "key35": "2rQCzJFJd4xyZbK5z5mpkS5YsWBUUy5NFyjYs3cehYr6zhNvLXSX2n9GuaGFe6UYeRQxGYtqdmBFXEDsSn4RY5dM",
  "key36": "4AbbLrvXSWTY8wYQM7VD55rMvQ4mmAQQVxDYSvMAqDf6shCqBhxyEGEzVrNEZJWiK7cQpsjuNaRgvH1XMYuRY6TZ"
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
