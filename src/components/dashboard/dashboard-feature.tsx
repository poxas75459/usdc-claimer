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
    "34S81YJcwxBzLwjs8UDrCnPyQab9NGs25cSG6MkgCeNNdeaoF55XVAVNSR4YCPca7rGZJouHZFf34RNe2WZhZbdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NgfVkzJNRw1PjNDUHPjLrNvkeCvrbWSW569E33hELuhpD2uGGLL2e4jgmV38TTa3Tns6bNs9aP3RYTVHCNbASb",
  "key1": "4x7XV31NMrPjdUErcuYFcCkGpb6d6spYzdqYWRf9WpsPDj9EVintTLHtZkjvAobgE4fVFH1ZmUn3QTe96u8sZ5uR",
  "key2": "232Z2RDU6rKpj3HuRRYbqPJM7WCkm6S6AYqqYLR5HPsBudeWhYrEPErBkBfWztxfk4tMhUNwniuNMUCR1JtxDvwD",
  "key3": "3N6taKhw8L91zPUNvSdX9eD9F1Azrrrb87BNVnFms4ADEAH1MM6FwChzq8W6zb8W8SUdMeptwt1GnrMzRJ2GbXBy",
  "key4": "2YWXxWRY4N1Z1wcpynAiK97wCfdKom9ZAWTYfBpCr7LYo4Bwd7Wn3St3B81iUuTHDv3tpMpAChRwQGDZzMvEZB61",
  "key5": "2y5UupZta4r2MiAgdHsYfBJf1JhSVnfBB8c2Q6ZmqwJLcyRCEg1XZnRnYJY8h9A68UHJvgs82rm2FzXecX8JqrFf",
  "key6": "3JCsW2y7fzR6GS6Q28tJ58fQypmQR4J99oL4GG44BeYnHCCKRjLaNDaTnQwKXczcUHhCV3ztN1vAqPc7dto6VdZ9",
  "key7": "2cPVzVUCzeK5p429R6kA3def9FWDMSWsjWExhxkPAsd35wrTjVN1mBnKVL5Ljmhcf4myXNKPs2mUexQDVmHH3nSb",
  "key8": "4tLtXW7hqqpb4aaNKcJxVYczUXLR9TRjQ38pN3MLh3v8yRDneppdxpEpETcdYJNMYbxMkwTzo3q7oBuTLDPVEGF4",
  "key9": "2qaBgQPJAsDTRzeoXd8F8Ho2pAmqz4U2YFzCah7bpfRZiY2X1pfyd57d6NAPZVniFC64S5gKeYsJC27oCbzgk6fX",
  "key10": "5uG6EEVwt1kRuC456fDYpinbewBJvPtVbyhcerTDkhMm7K8DPHSpdZHQhtnYeCoNmfQBs4qWD4Gn7KxTi5AghLyF",
  "key11": "5H3xvf4Dt35A6f15FVK2AdqmmehkY3YGnfKPtq6kUnsi2ro6CiU8Wo8kEkGYxpuetpLXQTjudJNmURX4cxuY8G8L",
  "key12": "2ZnNemaKepUP2M51uyG1EFAKDm3trq6y8h4VCBdtNQ2pxXTdW6wxkSfHc9eNHNizmSr1o3ui26LGhPmXEG5Peu5x",
  "key13": "3au1fMsrTJTzBxobzeXvqBCtz5BvQdht8xG4tyCJoZuqzqJwx2wQikuvW1Mc3QZLQ73c1Yn7MjUqfb1S77xYS6G2",
  "key14": "4tmonyX9VcZGGoPu3a5RiWNjXgnicCBLa4EkeJWNxFLyKNYJeusFnm1zgDsX9w7oo41pfp1wxbZQU5PFMR88LCY2",
  "key15": "3sXfD5L1PVZAH5XM4jtnpyds2DTVkyxzTt7BnS1FS7jSzcF3zvVWVtcKcMVHCKjneAb2uncxmt9yrqqZ9MhagtGV",
  "key16": "1mQrgMEhb1HxtoNZYYXeFtYj6eBnrUkRGExYDZq599GNxRo4kAR4ymsNqwumATW7wHtJdN5ZiVXa9LkTm6T6FVT",
  "key17": "VmVZ7Nj3Fq1Lwm68tH1rFuGaS9zdvfJJzyUJNjMEPqban7ZL3EEuF1nF5U2BkLSpcM6raKmsMdAkuaWUYhHkM4q",
  "key18": "maogytauJWozNyViVg7ZwD8qJVxpb1egrd9J5zedYqaj3AbAMLtVMdoVpGnGpHghuPgGSouhtXCkaohBeAki34C",
  "key19": "2C9ZRxA9tPjqAe31RVSSwoAyLnCoV6X46ffdbkLuBVh9fuwsCamhU13pp8suPZL4rRYpTRXrBRS9R1YZU44zKiXW",
  "key20": "44CvAJCernW5bnRLgpWCN7GCwyp4xro2hhbnHEvf1uJ9PVz1r6NSCYDDAm4bCepSCpqCx9oqzS5bEfANGdrcKg35",
  "key21": "3WV4bWMBhpSAyawuFyeeGBNfsTh3wwo3kXNcXhx5c4sajqPzntDGev7XbZWrAnTE6QGPHZSLKzBPKozpR2DBuLiP",
  "key22": "2u8MxwiwzqVmhXkai8RF2twxesYHxvosGSCuWtarkD9uKqvTLLUUPM5FWzuGHYwY97cBZrnZrL3p3T9Y1AtiAbJS",
  "key23": "26zbfyPh9yZCCXgf5eGXR7n9mf5oqgpWjpHnpEqgpqPwwpkTFbVoH3giEAmAYV26Z7ZELfeXZot9LwZfCxRGVVcN",
  "key24": "48woAFWsGLVgJU5Vu5Da37Tmm7GuFV7oy4CTnWRLhowsXN8jSkay4FzbPBU9Hkqk4gG8aBMLixe25Wg71vebc7Qh",
  "key25": "4dJftmUP5HY5SzGDA4c9fJERRUL3N5qXwfpBKLSkjhXrg4ucvfhR4wjWpgrcckenehk4wMXqg77Lrt5joKD75hKb",
  "key26": "59gMiYcdbX3nnLcKjCDBYjNdNkJvcaVYVSQZUsscTXPmNDpBnfDE6enGBMQJrNFKZw2yEUytjPFFpG93Bv4nGGUa",
  "key27": "5NUDN9J6fmwRSPyTS966N1ocQpptnipyvmUku7ufAjuKr6ZY1QaPURUwiSm5yFswQbLDaiuKiLcrYoLB381ds5dt",
  "key28": "4C8DF5ArJEgSriQALu6vSqpR4okgLYERfjnaxAgAXc7AuurfcqxqWHuewUQBcBMiNsirxSwcFKtxLQeNojZzBTEX",
  "key29": "5ZKx988SuxedCjDk41DtDB4pT5jXzsEJ9cvtRohWwZZYYa9austurHqRj2pEavaPgcfFBHG66zGNfXCEaq1sv1rr",
  "key30": "2yjSWFGNk3SDG2udrYs7eE7PUH4AAZEXFGrg4HX8qmxX8dtfvNz5n1B4NdeCi9qQNTPJeAihmaNfWco4NG2SosrP",
  "key31": "2Esfoe7Hmc35SYvUXi177qL9xwj5DD7C3NkiPshVpBsNULfYkepKq4Utm2i4hBFa26PB4EfAoAcEpNoYswNj5aee",
  "key32": "61ayhupVj5wKS7924rzJtm5gHcyBSFf3gzBjK4vLFX3sX9Q7oNJDZitjLVvebog3ZWd3i3L9R9k6z8NjXAaGtFE2",
  "key33": "51g75iWpmLJyPbSked1Ty6s1eu4AzDyAGSn7wW8whumUNdyWyvSGujYsK4p7b4btcVLNXXCG65H3XaSGj6hi3ibR",
  "key34": "3PRhreAgu58Y16R6DduXyFp9kujn2ppA7nrZs3eohwsxXU8jw8mvKdPkAagxL2SyTeyHcSyMKKK3om7AwYr3i4hx",
  "key35": "4boe8fAQGh85g5DrcoRPdsQyttbrZHatbyN4u7QMYqU5DT3rraYUkcRJTD61FjM91cQwhBiBaWrB876hBDEDpniq",
  "key36": "35G5yY1zbV1yYCg922p9Fm2x5PvthzaauTy2XKjorKmfwTBmqmd7vo15fKcn29hrPr4K3Y5KFWz4RaShwroDHSUq",
  "key37": "5oR35Xo18DFT7aAd31bBRjgfEYu1f5y2fLF2hf67TQ6Y2dz8JYbFBSrNA8j6wEWavsvobse7U4FayDNoJ4pY6TeE",
  "key38": "67am6j7WPV9AbVVfJJiZuKHdK9pZj4dEVV2ps4SbywztAsiN1axpNZZNuWymxDwAXV2ffPE8F8vmVLH87Ty6HnCT",
  "key39": "5tg7UYSKEXncQ967XCBK6MHNRnZWrXjkjmbQaeQ5QrdhU32PDwGnuiN4LqXomnGTxBDWspBCcQGWfrnUwbnRwtQN",
  "key40": "4J7JVL6L3NvzFqwjF9mXE1D44iWDNnkHAz46y9cJooRQgN5BNEJHn74NhymA3fewUSzBkKqTn39NKr1491Xp2bjQ",
  "key41": "4s8PZNDvax9ggrmGtKTX7o55oByRi69aBMyGR5mnjC1xAKwCjudNozkKqdqhrRua7U41xKTYbAdYoZLKvvQ78FNz"
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
