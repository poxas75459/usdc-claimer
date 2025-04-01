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
    "4o7BuyvuT4e5XysXcGmUf235rsi28XAfVUy8FsDWL3kD9SnsEAz8PHGdCJoiGX5a4QuxBwgaKcH1mDPKuEiiBD8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdUeUkrAEuSM1aZ6DebVx9QzMufmMELr1RoV4YCNXzfEGBbYndSv6qUeAyntnkGr2KqKZrKRSn8ygJHoqR86Uap",
  "key1": "4HV4aw7HpZjbhcSrKWaGQS17h8BUrbcc84xJaZLKMgqt2paS15ZUPUYtWzyfohu4X4PM5ya9emLBSPUqdpJNe7X2",
  "key2": "4epb9eDhnREpEfxT4iyDzsjDB58qZrdh5AG6hvu8cM4AHyct8Sa6QNHENf5sjUDVzkmt6viCxM68zbc7tocUx5m7",
  "key3": "5H7cG4HTBztBvC7ZKMWeeC9LJQuiGFU2Pf4JH84st4dkRMQmDFKeRKqrpvR2b1r7hDaU3ofS56FjHRMe819XJeA2",
  "key4": "5yEEhdx16tsNVAmddBZfjWu5acYvfWZEYKvTjuWC75jxhWr4aj5w5D6vimsh4tECApxZN72GAHig693NC4we485K",
  "key5": "625btF98CJgNHJwPTDYGVjp7oyWqLv1Yno9FxxRUBMdxaU31q2TE9JjP1yxhjXjrZLm3w131ELYusye4caTweguQ",
  "key6": "2frKgnBoGzMCGuF4qtAJ8oWVBMdwQinU6Ggg8u1LU7BY27Az8spUe3Cp8NgH8wQ8URifbj7kCnh9fCn6FcYPe5FK",
  "key7": "3gNpggh6YW8Pp4f5srbeAcASW7BcEZe6oDdCgd2XUsRNMy8NuYjrmveUFJmTBxcbeg4DFW8kUCwmnBgjafciFGFy",
  "key8": "2qqUK6HDVyvjSbhZ2HrW1hoPgZwQ6LAzTK1JPDwdBmdiEmodEYnuDydCZ7Jpa3HP2NmDKVUxXFeJM1fBc6dVpVdq",
  "key9": "41WgsBKeACLvF2J1NGvZ7EDpjPNvk5FFCoYEF5yBAU6qr29puYt6KzDNw4NotmesW4oYH22ivDWADXoBSDS8v1g1",
  "key10": "5gJgDwywxFj5Jfn3jd2z8Q3mMbrnXNi71nGbdCV8XiXAfa5EERw1zkvSGYhwK2R6Pg14vnSxfTndJcmMi5RDeLLY",
  "key11": "39wcJasyjcAoNZtRntr4KtN1rGbccoWHoNcPauAdXZ6SpnDFGuXxz392kZe52MyPkDCgYFZ7r7zvczoEGHBeg4af",
  "key12": "g9eztMCatLnvnbhtA3NpMd1dDPBUDqhUENn9BxAbgN9pb7KgxJX7b3VGzMBEgkJyp9HfpyR42NFsQnyabgDcjLM",
  "key13": "4br28nVVgogm9dHzJHn4KDbvgUQLGtWF1eNn8SYumNsZNfhyR8wyKFrVVHS4F8ZX46QAanTMSuWrh3H4aL7v2g4j",
  "key14": "2bNTPE74Dzoi4ad7ERruzieKsAk38FWX4Dp1fgEKAmjYGufhwtKidboBhwp5uT4b45RWrTLj3NoJiHffsW55mL3L",
  "key15": "3z9UGh9frMPp9US47W4iBWTwTtHRHvzT9ybEJRHiALCPk1SYVCq3HiEqavLJvL2SaKcDjxzce6exFqqGJ6GjFdQ2",
  "key16": "3dQCUZBrN9tyzNYMsSHr4snFYTc2VEYQsunZQKAYqp7uPgKgQxTqApv1pkkynQRDtk3SukBkhjpra8Q8LvcCrXZ9",
  "key17": "UieqyQtrBFaNYqUNesqeUZnAiJLC6FrkxwnyQRZS1eFfZwg8RUFn7kZg6yawjBWeDuNPYm8Q5wFMhuxRriK9frE",
  "key18": "5dU1RF6L2HXYFQc1AaJSoACBzBtHHBFXP4bQXgjVZPHhrqj1NaXGg8fV2cnrDbtekBoS7GGECvTjmhATCYLWY8WC",
  "key19": "5JXV7cD4C5XYmuYnZg7mxQ8MXwnDoVxyCy5z1uhqRaLtETs6RfPVKAFfdJ2zcNQj2mNEvcPXedzJDB9aToha3Jv6",
  "key20": "5uu5gQAay7pX4QNyXxM8oeKfyDi6uk9hJiJ3KfQJQSUiFXqaWibnZjxdobF9rD8DVSvxyvN3JhY9XStjJnZ2wktf",
  "key21": "kCVkV4CcFa8eSK8nXZXK56xVT6QzxYfuJf4VAQsKMq7AESzyrawFa4H7XzTJqqhSdigeKAhhnZWez44akXBaY2L",
  "key22": "4oDxMUwbA4dWL72TBZ339zy7qnqrCzeVvgGzYZaUb643A1gwBu5JvKvkwTdSpwcNpFHE97hyGe1QTmj5eNaBhT7w",
  "key23": "WqBWsqFFfQdPFG5kMDfu6QCeLNBH2sh1D339eYLiXSYPNwBeti1GTvCrzruF9wGET9oniFbgpMgTGLi9x1t7ZsH",
  "key24": "62iAH4MVT1HeLEvPfQp2K7mhwDzznvrafHKmaacKCupwcWvU9SyivRtRPqm36Gk6Np5zW2w7jKDv7KpNhwrjz8c7",
  "key25": "4DMeZ2CY2PsVLoUirY7JzKrf37aCJDVLASsCfR4H4XUUC4VrzhjQuCh4RbhqFchsZeaB2WHYV64Nx61i6eYw2biX",
  "key26": "4RUsKdD6JGFdANM5byzQyhpPCxjbwPFXvU9oMRcjSw3SpCZqurtFrb5LnTartnZrLSLPna7mYgz29GRxjddWv5Hn",
  "key27": "3SdWwQwwFQUE5mavYW67GXbPBxSyxFwNZ7n8kCGEN6MSwBFovvAE1QT8nxqrF4HNQDmd7rVsfhsW3zBCwnEU1iJ3",
  "key28": "3QmG14Pk7ZhpdX4wm1TGqPtQfK87fy1wPe1kUiUXXae2qdT9e2rUfnLRhDv1UGiPnzMj6se67EEGrZP9UDs36Rnd",
  "key29": "V1EHBck2oqQpek9GLGaRJtDJTJv7sVqFxF4SNFhbtFn2KT3bcn8hrAVmgACuktWsrJ63iqy4yVfyZpRqm8GDK56",
  "key30": "2MXTtUfyXkgNhjmNgVTgPpxw3mGRUjbUjt8ANtPV7fYjKkbsH8WfaPQdAWmdf8jpkUMDXiWGCtwjLqqGwtFaLV4Y",
  "key31": "bfn4qV8ArAnqe3ypLYk3HkT8By76GewbL7hTsFvxfULzCa4oeWFXymaodF3EyJFauRBZbLgDRQqiNmUoRnGPQmL",
  "key32": "25hqoqFXKZWHnZKvKvaixXqpFjf7fsDkeZP4zSUm3uCU7TL4kUEYppGBirXF2w75EYp2SYbu2LdEbtrExodjtVbE",
  "key33": "2mRfirz1Vv6qXu3bwxnjXPiLGkrsQiQU5fmHgkJxWozz52tWjsAU1R6RASeHaM4VHz2pCPgMvfEiWoBQkAdXgiLk",
  "key34": "4pot214m2x7rRqhJkXisfJ4YXzovaYxmB6SM4wZAfzzTFPsaFodYTtWYF8ceE1qvoRPzdxYK5b3dJ8BKTKeBVMBh",
  "key35": "4JwTGF3p8ENqCvyEcANNpwKenhZ8UwxHVd36wFg5GGf191dykCFBQehoLMhWzPyVXp4wEkBrSZpgzAfSkTCsKh4B",
  "key36": "27naGK7JAzSHe3oAGDahmWmq4RcdZiHNuZ1AtvNSaX1fo1NnniwB5TyNGZCoXQMXFhoxWJF38xnyW6honf6217Pj",
  "key37": "4nrbbfuBP76gr9yPnWdjaCk4CATRbZK4mDD9ngWLoCRYLz4sqx4q4mRqbtn5pa6F9zVL97yKHCfhbvZLUFiqvYVU",
  "key38": "679kHWhebAcLPwvJyxXy6XjVaSYEoHg35RqmP9KpgJb4WLYiBCdHb4vZix2LQkFPK7zEtHNQhJGDU4AdnwYnEKe4",
  "key39": "2vg2m23vuGxqF4d2oWA1ghvNMBG7dnCi3zt4xJgaEHCJ8WSr1bz4bzkj9xymrPyYtMQ2U4uXaeBX6FxvEYbw9nAA",
  "key40": "4gGjqaCU7nLbyxmTKdu6wH2Jovd29BQ5VBRLrTBMSi2UZs2G2ht5xZbwZAquuGDuZB6xa3QJcrbEybBLo2TEe9hm",
  "key41": "4uYnTKrf2wAEjJpk6FqEU1SerH7JkZSNhHLU2GbBA6yBoBNfiANx1DmuZqaBXQE1BGMWRc2XRA7VTvaEi24AVdVv",
  "key42": "4FjvX4Ju47NGeutYYiBnX2m6Bozr5u8BVRrDCuSSjJRtJyM3KPzdu44ehkwV7A8JyhgUbdxxRZjLCui3S1xmcYxT"
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
