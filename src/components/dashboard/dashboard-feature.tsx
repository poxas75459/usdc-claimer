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
    "5QQwZwcQqQQhJRHV2Yxk1aF3xR1DAWsxqfLxJfB4q3PiN53vrmEHsERGkNtx9F6togzQvwTyYn8guT9ozzPQpQy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwSsC7UXhWdpv35cZHrifhCnLpd1stESquid1p2in9u19uJn1rhAAWxjHg5xpC3pCu3meZvCn4TPT63wU8HK7hi",
  "key1": "suh117qjHev5uxnnuQqhhqW4ae71PWeN1oHgYQuLXzic1LLy6b4qAPD82q5FDaq7oL3tTTG7mnUHgzAmZLcrGbJ",
  "key2": "4tvpPtbA5oSKS9fDMtLs5bWdaURMnaAgaEA8j8Xzbcre7GFi5QnRWNaYtXb9u5cmJVs2ZMbvoDG91h1ufFsKrnPr",
  "key3": "4odaURcJAGRM6FVXCyg3ErWzF3vvUQzP4DhmdtFiNTTckf8hKL57KfFR5vX6etpw7yeHA2kL5w7wHafDKza295Ps",
  "key4": "3BAEEACa5XT3jHXhd5tB3QcyGww61WPcGiR8WmaD1eJ75vd18QbwDKpWrPSSfa85thoLy6a9mUeschzeRRcEi4S2",
  "key5": "5py2buSxZbBD7ZhMRZfmBF9yspJHeJBagHLgmVadrigUau7YXYvb3unC6qzNVTuEQX6PadNJFVLUENjgd1ziotpE",
  "key6": "3oLWV3qjfgoXZ7mqTEw8YS1b7roG7pkWFurG6FpsfGx2prvTXuicaGESX2DjDcpLQAcfJ7HWyLx7wmPFZ2dmzLbM",
  "key7": "3bbhxxy2VhqDaS6Z5grEPRq8zr7J4aMcB3f5428nHQDDP3RVD543XVGhaxzXfBCb3THd1VieqpWrDsoZLPeUmiiU",
  "key8": "33nU85gLu5XhkBwYjmcahwWKMmJKAp9acNkHzoZba9d7e3SuELtqXGDXMTAdSVvhXVt6BPC8Vnom3sdyu2yqsq6Y",
  "key9": "24TbGFngPEJ7VvrP3ESrYWuSbNLM8tC3imdzHghjboXU83FcvMnGCH45u6zsELoahqEReeGRpU4yuo3qf27QFc8r",
  "key10": "yCQ747GrYsUs77jg7DGg1CEL8Ng3DBuKaPHEuTuvmBZnSubGWuYsCnv2XGCVxUfXbtfUSbFmhey67w8EmasAw7A",
  "key11": "2tDo2sxZpfpiQMH6TuKcw1zFtd7L5W4myuNR5teP8wB4fi688mzpA2D1b7LE7AxQx9MyV7WDz4SRR9UWVBbmqtqZ",
  "key12": "DnHzG9dsGKMkxyK6mcMx7kf54QMBRkxUcfg6DmEPUM41T1nq5irjLQ9Ke2W29Sq4zj3Tro1Y8hQ2Up2D7oYUXtQ",
  "key13": "4Lr6vCPLbr1yYi6QP2hZapNsNxLoKNEZbVmeSS5ekGnoy985qJpgRmtD7KFmj9SsvEggfWbULi6AdLUdFqoqmQK1",
  "key14": "58gtscZgKKSyGx6D2P2Upy7ppnM2gWqDoKVQGd7FhoWcwLhjfhAAS4JCtRkyAiKwza9vnBT3bANLg3EhqSYRwA3T",
  "key15": "3aN99Z3HSCCCbeAif2aGginACQi3g9o9bRfV82UeGjnDrhXqmrrqbaWLRUSAiAhNfmwmgsU4zMcbaBZpxFELtA4r",
  "key16": "57DMhpYtXWqq8EVxE9ERxvr7aY8JY8vm1yLk1WbzmifXs54P5xuJ1Xg4hREdJCxDyqLVQDPAeNnjqmzLpPtExNtV",
  "key17": "3VuMiAs6S7Pfjy9pUZduV5iC6UgfVFLfYXZoCg1ZaUf8EXenVZ3fXZ1knRSEFYHng3NLkGHGeH9RvA64ikdsTcH6",
  "key18": "rd1BRk6XyeYTnE9Wiq62tdMj7vzEGkeHw8ZdVYko6Vb8HqSkcWyBGfUcKqVsmJ1zbKB19PrDpEjEySqAqw1nikG",
  "key19": "5985xYcmBHC4fwUPu9CdjeihX63YnXcMytY4QS3M5RoL8a3k4uUCthst9YDB4XKhcPcP9RMT2vFXU37Zyh2bY5p4",
  "key20": "2MWr2mEiTsLJySr5wdhiAJatudTP1LmxQ5naM8GjpUYUDAc41rBibjDZ3Ud84ALcMY16RScNLASUrNZqDSn1KBz1",
  "key21": "a4TsQFz8BHyYA5tTepQh1YuFmggdPdsqaNxNDRCNYrEPuF3MeEDNzGscvVtKA51ifbJnNM4ZBivDAf9D29j5Wsk",
  "key22": "31CPdmRj98DsV4DWKQjM3XY1e1yZtcsqqc6Fr7HotEZvgE7cuK4eFpAD94AtPMfcksqSRdm2PpqafiyyyWvZBmor",
  "key23": "33noBFoQS6nfyMR1uTpXGQuB9JM8VmEwMx1q8zFkrEBcRNeLRGv1ayFjUkcX224BMeGfUcMngj6JNHHMQ9j2qtch",
  "key24": "3oBZyHcLbLiL9VSMDNCD166u354NYHhout9X22ymtELUuL8HFK6ajhNxp5fMAhBhQAiDqM1A6Tu98nkFPwgx63NK",
  "key25": "3K1MeKBQysfG8cYjSKcHo7z1N8QPY5rj8HVbvcnuLJwEVdiXXE9gHyz5r1g2wQu5ELZUCb9Cxuwxkd5TVY6LinDV",
  "key26": "SAkhfzkAih5LEB3PBzqCrW7bTQnKVfq5CzVvJroKLMst8KE93fEgtKMnKqj2Q6Q5MYwqYKN5RJnpNaWMtfEJPSe",
  "key27": "4byDw2dYaVbvqrMeSvKtBxcsxY1PaWskVoZSDXC4sHuK3kS8KwPNUsNEAR21r4B6qgXRkjE27ZMFApZVSNE2vG1J",
  "key28": "2XbFzLrFhiMsYB7mKjc5w1mMsxJ8CmoGbbc1iXggQzkD9Kw484ucke97nVfZqzUeCrq6o7xeac5EmVyQSiLRybWJ",
  "key29": "4yU6kekoogDBE3HpH2JWehzUmAr1HMjBzPhiVWyEW5enpHfvP1DgC8hWyHi4MxDUwGupQBBRLih5TXNLzh4AawqN",
  "key30": "38w1khr9tf14eSqh6jNGkwrPxHxwMtE6LRBQdNxXxG2m2qnhFxRBtfWv2xCCPP8GCeF7JDcz5LLMRwxRB1b8zbtE"
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
