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
    "55LB5CvcSfJCBUr5i6DESidVbf6KtcaWHAcizRsvrW1aAF7MRHmmK8D7ghc9Wk7tWKdWBYMkMpaBhkX1cHrKpAAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dAT3upTa9ZwZxMKknk1bcY8E2NvbK6u2pu4bg8otmbAuQXw95pMm1mbPRSWuZttsUhGWhB2CAnZmp5dxQDgTVU",
  "key1": "2StgC7ufU2Y6Fggsf9Yy6TJztwNifsoZEk3DxiXmv7U73aFe4BPY5416tU5WvTWd52NUbmxSop8JSm3X1YE8yDN",
  "key2": "2airdaCXVanzyPNScsa9r2t5EMEyBBK7LH8zLgxqtj6J6qtwDJpZVyCFpquPbbbjTqUJ37DQhsnUB8P6idCR75hm",
  "key3": "5GbYze5DwMNQTEsACXjt9r6V7ZV48i5se89TWf67qNQdJE85b4gQndkNXhqvY9JAXtyqre1vUZc5sAy8E5SRVErd",
  "key4": "4MQ7r6WrgFsmkformY4HrVbtM3ziKKM5PdNRJWZFALmFomwP8PuT2dq6jwut2Mp8qY6hqwEtk3X6TpikUFQ2rfas",
  "key5": "2zR9Kp6TqdBRT7Nw2oKnjUed6PyfZu8nNeoVm2emxWHnL8DBVhYqax4izd77kmVHPxyWBeDL9E4fFvWSsR4pVAP4",
  "key6": "2a3V63uHpDTJPZr6f51g2vLq9zpB8bQWpgdrQ8EAi5FK5rbxcqCNMqqCnFjv597FZJBdtXrGQnwDRajiUFX41EzM",
  "key7": "4NDyU7Z6Ch6SioLoAgDnF6DZy3wPkZCDHi3dLyqCcveENp1hiUC74zfFZTAEdHPj2V92KvUKZJBTm5LTttF5KDC7",
  "key8": "41atuhdbb9fvnRJSHVbV2NkKe4uYNgnK9ssV3dtqRcNrjAsRYj4s2CKHivNY2X6b4HuX5zYprmE2d29RRy7M16PH",
  "key9": "2WzZXnjBuxEo4v1aLfEQvHDQiy31AtibdbRsGdHW4hjHPJD8hcLKGyqVu4Pt8CrHGMUKQQEguFrtgBhKMWomopEL",
  "key10": "4ML8FQDqqQY5zNe9WX1puV5wtqugJwE5DpLq3QW1LF3DerFCHNPXWB2EE7xrVxkXPqy6n1B5j2tKYVA2SvARHtTu",
  "key11": "nLuEu4FRhzLHpNxGxJbhvu1Yxjp9KFuzh5pFCQjiYYHxjMvDSoBgASCzN5G74L9VieQvtHCSe5fiva9Ft8YaA9W",
  "key12": "iF69EAGEPC2zVUYpBaeMixxyHeTGibURYoegAs2YTP31oLjHWJBTMdfjC5WjmpR9VbSBQhuKkZETavGNWKzGym8",
  "key13": "38pB5bKX2HZWMMZvSqoTHpphKUCz59MfUYnMNKKmryxkR9yTzhWuFadB7RWUhtYC1idAvrD7m5NSvsMVYf4H7TDx",
  "key14": "5s8724rTcivmT5ntgwFGZASU2hae4mXzJsW6M7z1esKqZxgKkfz4u37bKhszyGTgvgnhmhiwnS4A99eAW8BiQqqd",
  "key15": "3G5J66KrxTuSjLzY4H5GHExkAyywnMSEnnDeBmSetzaRmPzqmtraxgB46KTbKGmEDjXY8ueKtzGA34dU4zggcVwu",
  "key16": "37UyneXnVzZuXdxwKmiybgGmfhg9dr4Q8cBp6ch1uHp39FEEses3mqaw6mVcEkfnwRveXEK9TwSdPt6WmDz1KKw5",
  "key17": "5Rz4aHLTP58xxf5zvDwtrz8QL2tU6zK7MDZW9hkoro2srCEDHKpuvLN329mThBRzXoYs1L5EMiRZpDgW8UnTMNRW",
  "key18": "2XAEdhhosu9aXs7xL7UTt5gR4ZY8gq9ex8zX2JgyP721K47HGwdUXFXmi2T2LEo7WwqHVF13qhhhaJSsizhhNwDj",
  "key19": "HXPVx6JkHxQDG7ZRrCyfeQkmiHFrrpbXCZdJ6UZAcXjLXrQJAECQPGPViSQb2b23CgcK1TPJmH9qGofzG19Hr4V",
  "key20": "5XoH3BUhhzm8pgmYSazpu5fwQKLTVzYAv2bsUDrYSYFfLbozTjGYgoB1Syr7XKXiAPLDFnkLcczMwberCDmyjore",
  "key21": "5p4ija5NTtgWaa6ghDD2ggT4yWPj8wCTyKeBzxwjufrxFx6r5pDbcAL4zmeDk2k1HcjxdyqYxbzEAe6my2wpv51Z",
  "key22": "Mqr2pskzhG7MKPn5ncAmN8L5E74w79TqMPiEchkPjUbCPVVQr9THu8NQJgRtRMTmY4LYHSgRjVqfjUbZPBELqLs",
  "key23": "4gkSYPn1Jf9UiwX7r1c5dmosVHREbdAMWJdBdbafPctmrYHSZS6F6GY3xcqYBi6j2BDhw6ncMQey2Px4CoWwXwKS",
  "key24": "ztZEQ59cz8BzLcwhS8t4DywNpwEuqF8hdZNTzSZNhSByAZozS3HDuS71idsrx7ZhXEQaEfyxagBxpaSNv5AWUwZ",
  "key25": "3X3LQTGhFPg5VvkRwfMwT49e96JynUH21MHhKzBVwRepSM2Hcw6t7wMTC81eKrXLvauvgQJS4rtGehXYQaRUxdkE",
  "key26": "25UKdyDAsnHa69aXRT5Hk6TnviqGKS4XCJxTMtLCjcsWm4nsQ1SP7hFLTur7bE1JLnnX1WRhWn9ii2Ubqg97RmzD",
  "key27": "3NYLAjBM3i1KRxSb6oVTrXagfnB4CQRAYhEmewuaReANbkCNFP6rHqwcQiYJkNzKer7GvwbDFeiSJVoy4bPLD3fs",
  "key28": "2KFewPpHRdxNNtezdtU9WQ9VG8e9KFCA1ATK3iXn14RDQugJdWBnVTdok6Bmn62LveYwvd4D5tTCRgqY59zdbRai",
  "key29": "2hsDhEMaXmCQGyfP9dv4MkCs1kao7M95dveF7S3VXV8gzZVyHUU2Yj1D2H7KSXH1Ci3TA5ftjcQc6To1AiF1kHAy",
  "key30": "3WCVmiW2ciXuUNRsUiYGFueSNwmgXsE7sd6ucs5UE5CnQyEKpbYsusiSidW6XZHNdaVnNE9dvhsheWR9S34rXYKX",
  "key31": "56jZtARPPu5CMQ4LQcm15Pya6nNvYAbDGvztwqi9oHvKqzJH6i2wdTxP81gZR5ejdMGzuwprDcQmSjPvEQUSV9z1",
  "key32": "ksDgujmgnEhf4E4iwU6eUYACR4y9gSigqRmYPGEWS8F9L2zrFEvwu3EK48ANxK3r8UpnM8M9LavRf1mhGMLAUT1",
  "key33": "2XxZLAL5rW86mZUuB1MrMRkU76LnsY8WB733xyj3Je6JYHWyStE4bZZzGLXxncJcUSbp6J6Cyby3QzVWaCLpZwy6",
  "key34": "3AWuz1UzsXSPQvsMsuUJJ4RCrG9xHfKjpdeUzpLQqq5r6B3dQEVsZEE3uPaRLPCohg5XNENBGhpKW847wCfTADS3",
  "key35": "2hKGkYGwFRSyEQRVTKE9Aqix6oqwtMLv53dUSbVmwGw4GeGSWaccPPXFE2tZYJYJzZoKyhDYJ4vo2nv8A3jNrqj9",
  "key36": "2tMprf4qAdGZrfMoAEnJ5eyQLDjgMA6jQ6XEamj95PGdV8UrQWahLyM1Hwbpzfd25t5rH9UYiEYGy2UoDe63cL2J",
  "key37": "5uSUffdaeGMu5TwjTB5LKBfUUNyQMmph87wFqmRiMpikTs1RY2m4BsuTtY57BJ88eUEkFEjDN6ZwwE4x8WUoDNRu",
  "key38": "2Xqoq2uduAG4MKurKzB7bG8ePbvXAsi7UCd2xV3X1RBy3BvsyT1vav6DhaArqFQj3xvuhzyBPCavEMPk4KzfR9sH",
  "key39": "4es2JxzAixqaTtkAeSxWZo3g4HziQY4qWSpDsKXZApLWoN6Vn4KVzZTivkVzDXBVVpGKp6FVzkKQ1g7pYwufpsc5",
  "key40": "5ob28gCE8MYc8ZZQwviN1pc1iqwfbNT6omY8vq7fiGsdaa4fjA6X4sAHan9Lm7MsPqkhke3acAZvp5qQPAn1zPe8"
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
