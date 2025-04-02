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
    "2tixKC8G5BAwopRGroa7Z151q9VKXUgGvVCTAcjtmnFdurVJQ3m9BKd5Q8qKH1s1F5sKogFQ8kGBrq9QCM4kxDNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SceBY5Qetaux3AK9aSeoaHjz9G98q2jKJgxqbafGfJLkQBvS5Mcq5ahVdqotPaXUxadLe8DHQZhLUVNcc9nB96b",
  "key1": "5aYt6VpoUvj1UicPJPzwD47zZqDjw52AQfWERtRqUPbrBEjFji9Ff7DxWLmYSQkXREq2pYyu1UBW4bwQwJE2BZMX",
  "key2": "cCawwHBbeSVG6UxLecAyLyAuLf7noKMM36bF981cC8CZRP3GCYiCDBwBEZc4Sc5PQbtHqccsgVNZJuNQMbbRR5N",
  "key3": "3dYDzcjCp6bwoQ7rJd5sEfLqpXuVe5uaGNJVMbBkJFZM43kWmdHApeAsJQS5L6iSWX7yNqBFFhBKy4mS2opwws1Q",
  "key4": "fZWvk2SJBe1GD3y4pgYys55pfzzkJEPLu8fMtzFhRhLz7z43gjP4qghYa9YoPd3cn4F8fA1QZAUwTZsbHdRpU27",
  "key5": "46W8a2FkCHrtKoKbycpZNEQyxZDFzSCFamTBWcFm6mDn6Sdba4jQuqZ2WALh41qMVnmSheQmXD1MVpgRdJfHmBXZ",
  "key6": "VjDH163CQVpmXjHu99xXnmJiubqF1X7EnKeBBfss6mAcTkZeEX8sT54tRBNZSKjx4wqNUZarUcU25XsXRb732pQ",
  "key7": "3vNkkqHsK9PG71RDB3Kii2vRqWQvBrWXtbMjLbysnRbVZKmrD64iFMYRRhWYugFbkJsMB2WvkaoZACqNq6Vu9ZxB",
  "key8": "5DJcLxhGfa6F11sxjTyfLjQRq5v8eRN9Rw2k3yCHMgvnTFnbsep8Wf2NXmPx6TNUkKYPbapGKNZP9tKZi6qEZwtU",
  "key9": "4MaYpW5De5aKYywykiwohLoEwxU4kBrLeCFmXxM4DZT7K22UEBpaRuPBp3Nji4t4TdDdNHDefChPbmjMsbvgjhms",
  "key10": "5Y44Apxxx95izG7NV8zaq5wjNhcpc5Ns8ZSDtkCH47AB46TgXKHcwa8wuWsdnk9o3BAeLH6Jc2sr5SzxQ2wUSui8",
  "key11": "5tNRVfffoo4MhyVBfsJHjUeEawManuyYp9L9QAwgt5uh7oNV5yvHNgVcMvpCSL9H2uY3Atgtd1mrCMrGuYcgp6pn",
  "key12": "4THqrKpU3E5GrW4xpFYdLg5ShUXMeuAyzR8xNMoNHVywigU6LM6Dn88DfNVg7UhosY5RqonLEEvZAEMKjTQEWocE",
  "key13": "53kUv42Q7jDVcsEJH85jLkrjmacL59EMQmmhBYWv9cT58nk21RTMRzx7pnienCSV57gwqyB1CG2qWEyRZffRtGSD",
  "key14": "PkByUpkC5YEDVMquWw9MWo9DU6HzVLVRu1Bgcw3UTECVLNrzP6fGk7aqE6TkvVvUCmXxM2QkeYN4NWLPibV7HD5",
  "key15": "4VMDPiZmodNii9VQZPiFAFTZHJbhjF49XKKxGLm14CmvagP11wAWcrL5kdEN5s3FAyGYS22LtfmNWnWF2pk9LRY8",
  "key16": "5Q8Pe56pbw9KeVQkgEWPQQZpqH5VQ8Zjhkp875tUTXJAmHUNvNWSh82J7mFK2eWcB8vJkK8d5JceKhfx3KPyfhWR",
  "key17": "63G7fboAfioyRrMUQmEp6ctWEkYA8eN3FTnJzmEED9C4fBhYY14x72r54raWba4etA1ehhRvR9ezYoNmVp8n7iQp",
  "key18": "4nPVsRZNtvbCnwbDAC7sqcPxy91Q8k9bgujwRLdkBz69rtUWd9QkKVatwNTH3Q1wGN1wxgcmvGXvUf58aYba1bsG",
  "key19": "4irh1tRH6Sbwduc7nHMA9iRDHXF7NRfgFm5NtJU1txPe38AWCRcW1opZFJ1a2RgzYQqr9rfqj1Wwzj5dzeqeitRB",
  "key20": "4GSqR76ttJPNWqwBF7hWMXwQL6cnF6TpQkbcC3qJn33NAHurN5b3ZbKf5NewRyKzYyqdGC5ZZfUM2VUqniCGtWPg",
  "key21": "5cLiUEoreWXtgjKt89t1EzAV1rCCzJSfjtaUTpmrZmdsUhy3FNRKqTQDkTZQHYw4tYJ8CQktnNeDKBz7fted8ZYE",
  "key22": "2RU3GLCNisYZJSyJvPrPjatq4xhT8YMzBDpvjtjSUvmXjxnL7iTN8mR5Njj6DvefEXu2czDL6z82NnR1hstt8WwP",
  "key23": "RnEwBXsZzndYavTYrSwdiP9ECY2f9V3apUJNaZoBHX3HK4Q9CMfyHiBcuDMwJtUT32ZkFjrC3tAYXJg6XKLwSoU",
  "key24": "33Pz7qRUcVFtj9CpfEz1PHguQpDAWdhDdjwJrSy4UZRYeNt1713N3wMbPXJKzn193RAdgQeuy2TU54G6Qr7ab69m",
  "key25": "G7vMZTC94q2wjBNimp1wtvovpCamodW4M7R6RmMWdyr4S3j8peYEKUVDmamijXGfgJ1HkxomvrTXk5x5ENbtuVr",
  "key26": "5KAE2hEXi5mpGrB5g4WvsJoAiRsUcPbG5iHhnUxikfQ5xybf3KcqmtnMoaiLYV9NzvLSK8aj4K9ekyA1VDiq8EoA",
  "key27": "4zN5AierhoSb18v9B7v5L8wUjDxkJSKYYwUoz7TXQKj1GxM4QhYqq95zg2hSrW3LoLJgJDK8WScjM11GfFrNprDN",
  "key28": "22z264CbGaeVrpKLKZ9EiTTohgaEcXxdd1t4H33kDbEMgdozdV9o7nD3pbPomZY9qNS7ms34UQB72J6Sf1uqyZZL",
  "key29": "KbVXjRv8ZAMkixNy8fDnYqvN7AwNBuYygTmC2S6hJ8csr2dSxTfhUQ6DFXQtdjGhnbc1sY6ZLT18LGhXbiFTBZA",
  "key30": "3jn3Uk5W6eNQWweX6enmq4Ti3yBe1Zcro8EZeCk8aTFFGnnmJJjbqCurjaXqX2kyHZcZwEotLN7o5FfxAfTACN6p",
  "key31": "rCZdtJb1CPuF28HNJhCSciFegfBi3xyLCYQjpG9ekHNK6L2sZvgLu2nNDYgsgTY3BM2Cs97VUSq6z4fJes2P6FY",
  "key32": "4gC4S7spc9LbKVeBArNMDqhicKPwAyVi4nju9N2KWzaiAfc1RjK7YoQsLriyrD2Q3EsrVx5bpwWXjC57qe7gfKYK",
  "key33": "5f1YgyswsGT2AEDzZdg7hyEHj2mvB6iSG7UnVZ1UkcwDMGc9e581GjsTFEmgiExrwRqk6y85KvWWuSHJRZxfNjHo",
  "key34": "4vAyKuAjsr42JdsZwdP9rnYXZCpMSooKGbtXWiksHExuXQVUVPbNPQRajmN2Pn5ZhwQTvbneLTbHCLLf73bWkkJG",
  "key35": "2qgs3REERkJQq6UX4wwPN1D25Vt3FMiCr14Uj7Jz9y5Viv6aTR7bYQmNpMDuYWRMSqLam5ncUTuDUc7FukAN5RQ6",
  "key36": "4EUZrefFNZ1rKE43tz5zQjAzoiM8P8qPMLg6P3etKhU85hGH7ZjgYH4SNxaLdCb4CkBxbVbFW44abrHnHyvh4dzj",
  "key37": "hVWRcATcXpt4F4vwtYxAUC78YUhC2xrV1U5PjiBijJuWZDY8B6awkQ6fo42WsJkfGXTUXMVAdKUzSJ1rWZgJT7q",
  "key38": "5vXqpvAV9nkE1JcLUjA61JYfZiFQn9L2Nf3HgEbu2jUdXNsXzVf9sZHwQwoT5dNBkhKFe4zifvUsL1152LRVcsxR"
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
