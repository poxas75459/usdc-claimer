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
    "mcpiJvf9BHh2gu4YgX2uvEACVxroRqHNKRP2oSmodXskPqCBRWVjACP81ZR6may2qxehGARo2EzscNbn274oeBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJyhURVBhvR9Qeif5gu7h9DFqmYCKXu4b8rfnVMAeMsVLEdUDbGYbK5jvJrWyeMczE7yJHzGuY21wdqqAHNUQ6Z",
  "key1": "LZokPrL4FZz2U9qPxj9knvGRpEUMycUfYFYZTXmGedEQa71EyKYadfo9j5JoVgp8ivwqgMARVAdBtM1anR9oPrV",
  "key2": "2s8PccoMUFZw9s3ZLWFRH5MDSdDPwZx7r7KwjYf6XYKW56TbCBQEg2bQTyeBLc7W8UtULwXqjBcQ9MbnyEm3B1Kf",
  "key3": "5ywWBmd7MT57AGpFXCcvVsb3yhq7dG8jwGVBjEeeAqWrLyXU1uR2oYEKCaF93HDTUa2TQ6uSJjHgP9eKr5hRE2VT",
  "key4": "2GrqV2rCAhJp4Vo8nnfViJf5imC4gn2kYoWZW6c2Pij3PeM9oq4XxXxVskeNgHZduXuV4BdCdq5c18KuD5dybNYS",
  "key5": "4Upcu8P4q8EarKFC8BojMrP4U4RokJFtxR5J6NVku7fPjBPLkp23wbSxMbxt63KNLnm6qYYF5a3RW5e8yMVgQCrt",
  "key6": "5ka5EhkptuFHVW4571F957gE98aQxQx4x1xiDKN16KqNgJPNpoPR511ypy5Km1BseKu46T3x9WMt3T7W85BUjYaZ",
  "key7": "4f9EjPjx2nQjuXuZJCBtL8V1G33kvtLDP4G9xEK78j5eAcTvh8PpSmDbdDcUbPsSwE3HvuMMdR53fX8W5DhwFisL",
  "key8": "61gYfwo6AaBbsJFvM6o5epmTVpZWeix7FH4ezuFkgMNzhZFWGeJjGVK4FetSsjxCZmzXqAWqPTJCxPvkFrxFNTXr",
  "key9": "35vcyufzkFHupBDECouuYWsHLZRV3MCYfYsQyxkWn3hWXhzp3qH4oSQgmJX761ecGArcpXZJ5yKTjpQJ2G4m9XyZ",
  "key10": "2ybqXQLkQYSAv2DgbKYgREEKHZcYJ2JQSiYuk3dRRgMC6okEizUMoGJ19PDZ9BEkeLL6HHAyEd6zKYZvN9sVtg8y",
  "key11": "2LZincyWD6yK6dQKjCGzhLcc6hJotsowK8WPyLpYAwF3GpE2i3y51BQFuMKwJBfEqRoLBJtfnAXjwNNgV5bM8jmD",
  "key12": "V2frMDpzFC2KcrErNNAy2scfFPquPddSbxWaD9yhNRtQkJfxm3eAmiZ2mv922fqKL4H48JY169bWea2PLKdyZdq",
  "key13": "3V2dPTYJQbqRTNhbYx4YsvaoMnzSrT2aJe4M63dLNhdStyQd4Bi1NJ87iaX6uZctTA48FJMigXnn7peNAV6bov3e",
  "key14": "3AsNgTEXVK2RCtyEUrxCMbNa6eZNZwYgSNd3aXdgqGHx1aGNDziZ8g6wywWv6MxenfWnKneSFQG4os4KCTNDooeQ",
  "key15": "3dUEmcZ4RZQb1tHFdd5Rdmm9QdZVFvLBJsWTUyt7vvTGtQd8rHjmA9doDTuzvK2gMxBP1e9XFGrSmHdrdDozBGA5",
  "key16": "3f2XtyVcxcrv8umTLYfwyRX4pR9BNGsM6ngCzkpXZ1guuYEzC5dPxNunJYS3Enx6Sv6yq8jYLWfEwtwhMCjSw53Z",
  "key17": "K4ZDeMukrCzFqBkrirxKJPjutaT7EQZUhnW9gfyLUnHfsdbnDcFqxNNArfoQgyhKijvm23x41VeeZuGeTZGrmbX",
  "key18": "2vJTVR7cvjdggruZbqXgbtVJ6LYMDw36o1XDr4cZShwrVa68XqM2EkUyjdmEtTXqJEwfVe6d9Ho425frfjNMziEt",
  "key19": "4uHeB8GpsrtjUXJ1KnTjWA7nJ6m96udxqiTynVrutjUG3rMZCaJKRJX2hznfPoFgEr2f9FygZswFPymoLVXQKMqE",
  "key20": "2zTUCkkHD4jQvtxY72hhLnFqbmaWUPwoRyP5zfRnStqEyrbEXVPr15dJKZA7gDcZEFqF8fqHuUAaiuioYKX1fWjh",
  "key21": "6ADEzFV54qGQe7yvEYouKPGyHQdknDQWs9W1M7RH7US1uRFEu5X6v5C99SrJFnUuE8d7Tucu7WtksFo7FAvvt29",
  "key22": "2eXsZ3h3JEqaNA54EwWLRZeKTeA6XDAQmxb5hjigMH1gxHRiTwR4cR5ZdGzZcgZos1b7D926uu4PxzF4ejgMDThX",
  "key23": "43cNrofFAYUXVE3tvNMBGxpG4Sw8MDGXADZeDw3k58EtJ5esGqiAyz4CR1N2uVH7ZhN7VbJiik16Qs7fu2GBLVDE",
  "key24": "fJtT6u155UVvM3UyEjVPqkeuxg6Jzgy3bKTQWEdSUKJFbhz3S5H5YdjNZHoGvoGYutfrrsy8Xn12BeLAKyqgEdw",
  "key25": "PbAMfQNwadvHzkzZZ6mX2YbHgFdczoJ1WrEFUxAD1y8C9oA2XJiu3q6Qppb8eb8WMRmVHhA3B7EDFgBJeKhrphk",
  "key26": "4kJsB5GiaKp435uvAHMssYE79AvroiNFWjUdufDxn7VRmNhd1fz9G6v4RwBELhFhAKhb2c19CPUN7duwmNf36K6C",
  "key27": "5cpLJgoeNmTTcgwFXxGFQCxs5W2PfKcJDh2n2XBbfjLioP57GYwtyEtbFy6ATfr6u6b4fHVK6aJGYqEFsSGYveEY",
  "key28": "oS8Ls4GD1Gt8h6kFLpXS7ed381cmdDFnzyPbbYhEnUrSHxca8MLbAkR9dyr3SStVHqfDNcTTanePLFH68yMDqXJ",
  "key29": "3QufgVJBSgkzvkFFdEFG1YyeJLSbCMXbdkA5ppFG4CmJWfR7wpzNcuQVAmYeakKgtFdxbmq9RMncvjjuCjat5AHg",
  "key30": "3U2y8YHEd8qDSECRvQpg7KoBbKBMe7jmJp6tKU3Fkxf7NgyadNBYzfQ9mkFjDEr4SzFujJ79RiMygqDgwrciLiSW",
  "key31": "3jKi7td9bFpSDTjrogHLckkDjBzriGe4fjmEKvk3evZG5U9FLMVxNzb5VRe3XrRmnbbXVMYvrr8wNHnQeuYEjZdL",
  "key32": "2sVTGA1xBMXMqvixx3nyP1NQPtD83i7z5MpAHCBDMamLUoZrmjp8gfYjbc8QfVWdAWVsri6X363yzg8c5Gr2B31n",
  "key33": "2AESgo9WxTzS6xNu5dGKiB66EJtrZd5P2kk18T8GuwWKJ1voVKxjgvkSvbxy3pwxnJfyQVJSSxF4nso9JkboTmvN",
  "key34": "3GZU5RcGuVQGN9GZqM5H7pH8fBPKAxC3XYF1SgwNW6wxJMs78supVUQKFG7SPU5m3ZtJxfyK1WwVeECisvqpRGjW",
  "key35": "2nNtKS4ADMw3jNPXf4FwBV7jAwyk3siFor1aCHUSA3u2TH15honBJLKVqtcrAe4gxMh1tLGh2gArtXdZ9AAhf3Y1",
  "key36": "2WnVy3gKK2afMp2rr7euVYxQkTwjGixYL3K6vYLMLXj35ZY4qYc5wH3Ayj8hrRDr9xEiFs61inQxKnR2Can4aJSH",
  "key37": "66ACsU8R2U6GKjiDY9AuwUejB5pe6jErumMoXWLqxMxFgRdAnnoxjsjxuVMxdhQeZbfii4vrGUzy5dj3wby7fV83",
  "key38": "4fk6VGgHSGoE8niX9cR6nRjW2DQ85EozAKrDgYr7HncAXQW25kPmKbmPwyCS87fHMuundYcc4JMYae86vRUVQSXX",
  "key39": "3K55r9JqBohTB3Xued3PEYyVHNbcWr6EfSCqTijcJKp1Tk68RAg163treuYF2ETaGsDDgSb5m5zemXxnUXbVD89s",
  "key40": "3PUKv65Wds44KCcacfwojvU8qCFSBfxCbys8CoZduDH5QTpGNmmxGkiksVBhyAFPBTm8pEeNbhJ3RzU5BaDdghsq",
  "key41": "4q32mSVVVRUxyvvB6on2jQEP95Q6gz9PftAs9YKyKEvjjUxyE4wL9Yjp3zuRD8NKxbFXj1bVn3dcc6ATDZwZ99AJ",
  "key42": "fjfwq7Xhy3XGUwHRqT7pGiU9aprufmoGnkjmLdDBfJdPYpui8pSCErhiTwE12Skgid8YWboZFVrtQ72WmKYSXLR",
  "key43": "5EYDS9GVDDpbC5ZYiojBbUcvGTaJAdWhXkV3coNF4HMwDpXV7QW1q1PYH51tk92cPXgMGHZXK8TYKrenbmmyZEch",
  "key44": "4ne2who6v1Rq4ahkazNpfdqiXgRzUQixCn2cYnjmh8DqqbUFCZunZRuJcGaWw4fYXFzmmXAfJvoyoQLedc8ExFP7",
  "key45": "64o4595LiQNXYgJrDDk8QCZ5vYPwAEU9DUv1QmcLsCnFbBmsAi1Zv7bsVU7DBeL3WBPS8RnzqAxwT6SboMvFMMHV",
  "key46": "GmnHgT5NgDD8gjwrkK6EGqDX2RtptSw68sLVwhPoQeaeEq2oW8JHLwR9m8u3eYWau5bovFhQtxYsN1MBbd4EsbG",
  "key47": "4PZc7ui2rakqT39thbAzyurYXpUsBREM7DXTYEFSJPJzDXyERxo16Pz7xgpY1R9B39C8LWTSUe7cP9WVKqbsDe8s"
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
