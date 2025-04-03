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
    "2Zx25BuyvzJSghyXDtDn6HbsQZ8mwgXqMBEX4xXuKZFMhGnSCvyGZSTFUvxNF8xthUCbKLGYVvTRLL72sM4jWDbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pEEuBF2nqiApBuqEjXTPYSbBBx88p1HXMsBisnmXmqsFv9kD8L6KDPAbyWPVcDCBWNxAFxZHFUiG2VN9sMphhVK",
  "key1": "4DVhm73kPxz5i7H6UHeL4D5fhpu7oq4uQJDS5byxAMzEevsQYz7pahfaDp7q6jhvbKBNr9ZX6Ve1WrUgfHN3xk5b",
  "key2": "4f96SEs3w9VBEbxrEG6JtsZGFBF88gnZV1q489byMLAgKZp9GGL4fkAxxEhsBgDhU8518eCN3tx8dN6Lu4USMJRe",
  "key3": "5zCAQkz5Q8ZuqXue2LfNcTTPx7fRhiCNHerxJsM9nsFgp9a4dkvarsXXprbrKAaFgTm9BGECzQcNCHDdbZHS1zEp",
  "key4": "4DmQTVudBTn9jHPk2zMg3Wvis3rEyfqRUkeB85UH8j5Bp732stW215ZNzKHcw2oWfZwP6wCj6dhXVGQ5sif8RHNp",
  "key5": "4pRBdT7Aa8uYojoE6186GjQsabirXuXZWJoKRdnkNtcUoQWVzzzEKxtXnGJjgjmZgeg6LucpWREMdXPfFZUbRsAq",
  "key6": "3grHoC1wNieqgUc8tcWnni914yHW2Y8dwsjyebfKqd6K4u5CfH71d7Tr63TjnHcxAhtFurgsMjVp7wZJVzZmX4Qm",
  "key7": "VLLkMzxBKKH25sjwekTw7MhHQGCj8z5bHSV7vpmLgYmrALTamZWWFsope5VP2gKYKE22Zejfo6wmcMz4X66WK7e",
  "key8": "4Hsa7Vvp1B6JehZYa2eBkQvb9CqADNkAbuuwHKLA487Ykcf2QB2J8YfudPqvpRKsuc8JP1thHPDin1ECQm8f8DTc",
  "key9": "4tdwAdtMCQwSMvqP475JLGTTxtdQm6uKbBFTYdJh1MsdNPmVHfUbMMXSw8FPrz3ncngfEGC9bDkftRTknaLSoCYq",
  "key10": "2dZYSXGm2XDV5eqKf5iqWMQo3NZoCdDqYJzWVQs8E1ku6xrfLjnqQbhQSb2riXZickGB41gBA5fxz6uKB1WrazR7",
  "key11": "62Hmy1JvGBCSsBZWzUNwQruzzZH4GWtFt9mzpJ8Dk7uNhmZVgn6ubBHBQ6WGoByCVESQinjBLib3BAVcFingarh2",
  "key12": "5vgZLpeEEofjzV3kmAtng81Q9ZTKUnbbMAs5P5Pq7fYC3py2Xd3ZPTK1CA7xQAjDvStyAifeRohUuzPkVVQBobN6",
  "key13": "4NbxQZxxyV6AyoZoUzxoE6jwc5TgXtYe6mqAyZESUEbn5aE9J7tVobcBU2exj5re2znQfnP62v4zPtBpsP4SwWcD",
  "key14": "2mCd9sapMb3BTTFU7Q1dT48Dix1wwjCAeDGEKVQAZ58op6shzwLCFVXawdrgfXNvgUzGWNsCFJmKyk3J92ZqZCRC",
  "key15": "4DD93DsJ2c65tZL92mrn2LLmLPN9i47Yefc1M4uQA63aYmPcs4LKDoqc6oYKpj35XvMDyz38isbWCNwvTvsBYHru",
  "key16": "UzpK8KVWP4B67sKS4Z59nbtpwjNVR2ENqajCMLpWFVyi7LzH7tnjGYdAsW3ViyiNYpy6KPfdrkABPqoNbJR4LKH",
  "key17": "67Vy3sxL8zHW4fDwHdArfhNXhxB8ZmPkBYXWERSDDdo7tr6wD6jo1sJxN852HnSeiA7fV9AeGAFZWq3tccbHmQsz",
  "key18": "5s519YV1e2BewCuHxbBJc1Dc45Y4YoMV3JDr8ajcB8E9izqKyxpmv1YEb5uqZ1qh24phNgmXZV4mgyB4FTBe7ygX",
  "key19": "3djNhw94Yr5CuT2gVXZSKWdAh2CSz1rp9PDFev2wQ1N55os62couYx9uRQSrfLgBgpJsyW9A8ewGmMFSiYKKAQa8",
  "key20": "5KTBNN7u2fic1G8MZJXLWbsx7qZ7z3amCyoA9iEkoE4qitHpx5xnCBHGvTGACjocbd7AV2GEEaK5117H3dWwa5MN",
  "key21": "FcjzJNp8uFqd43pgUfWUdJHGfpvWQRKKus1xyDLvRmwPjQWBEi7dUMB1umEto1ehGgtnq55TYUme5VAwtCQcCMd",
  "key22": "xM6cCBVEWMnANmYB2U6cBAqbBYWWaLjAEMbfchE2oK3mzAxgyjBhvWHEKXnJZ6ar4pQxXDrmpJjjKqMFY1uAWiY",
  "key23": "2XPARofBmU2qVAsqAChbU1Sg3HR9hbHS6gZPaJVro8T1uXHXRMoovZUxbWSLYwqUHbieX33inYHFt8EjiEuT3Hwg",
  "key24": "3C7Zb2xjshxZ8seuBw52wFdJFeHVpfsniiUBS1wHPUG4rcnRBwPkVTUD949m3Xw2dnMBphtzYMkbGqW6nN6jwM2b",
  "key25": "iM9Kat5o9aCLgUjhjwH74dv3A9iSr1hjtFVAYm9fHTfQ1P8LX9ofD59CbjMpCUoKBZT4NQjGwZE7Qv8QjSvJYYr",
  "key26": "63Uoe2A8oPeydyyGrr5MqYQMT6jpKucxQFTpDRhmTLzFnsGxiPKLjsymAKCwDiZueXi5MMT34cVV9cXUNqvs389b",
  "key27": "3uxYsS85Rd9sxtpWxMBKgz26pJz59zspDzSQUGMKyvoy7r8uoguFyvyVsF6UweQf8XxgVeK7TgyWeBh1SiN24Tja",
  "key28": "5wZ6BACYthFc5DteNva61tqUZxXEpsuAghuruGJ9WhQjnHavgjLXBWbxtuVomsFPBAm2a2MJdJmvxfMHF42dZTKb",
  "key29": "66pqtYVpGAoznt4KuUYu1Pz5TmSvMx33kmMhHmsmZnbyQ764CyPj6bkf6TTMgjmQTuedAdPL96gCBJ7WFWRwmS2a",
  "key30": "5FaeHwaGojnMcMqMdVhC2214EPa4YjWu56xTTMnCPfjyuVUc5fM8aw3xs7pySvNQbCFGajpnnvfULGUFVTbYkpF5",
  "key31": "4yM4XocDhK2fJcsZLhkjuHfSSdWicqnX9zM9T46ZhgaS9xBp3rjAJkXruYzB9atwcS3eFwUqZz91oqLY8aewFU6o",
  "key32": "2qcMnyXd1CcgjHKXgMrZ3n3NqCQnFwysbXU9RvxCfKhEjvYXJ7Qr2Z7Nwgzpj2cRUsTPZ99HAdGck8SuXeT8v6qU",
  "key33": "5z6YyRt2UjZnD5MJCn3AwraffUzAcNMfD44i6RimvbhprpDh8iEKz3JjYvfZqdH7n1JoYTRWdMxeqmwzUik6uGvt",
  "key34": "3sg5NBbfuJ1SmXieZPJKFG4Aj8KLCPng1kUZkELrJG5Hai3LvYZFFUgCHch9kD89hnt3eatYAQGJiBZKjGZPzkDZ",
  "key35": "32FU8cpi6zLmWakqKv1hie2cgAChPhrbwViBMkPYz3ZrSERQ4Mg7Ypbb7ggTvKMxuwqQV3x5hWGQbeuYHBzfHL4j",
  "key36": "2oAhXCVZCfeEcsi6EFyppp3Qfu2rANsSxabwrScyQA5EwHSSNb8T6FXiuCRLaFcmbGYVi4n6mNJascoa4ywbLh2s"
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
