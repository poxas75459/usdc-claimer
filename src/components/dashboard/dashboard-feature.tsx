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
    "2ADpKq8rMoQzgSFritErB85LNovQLTYZTt8gjQsXtsZMno5KCRLQzcvfk2GVKm5V5UHzqdMSfgbBS4YukJry7Tq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsYQrhiKz7v6fjYW4N42778tKFLQKpTBMMN8EvVDC3LtycTnjiA61DctrUn6A2Ekviq1mpCkMJ7vHMLQcakAAmv",
  "key1": "5FokJP6erPi9yuwNPioqie8NmrVpg7BQA7MYHR6kdJ7SxRwpevNH9o4U4XxngTUSAohBACyXZXYsFMGkHxpjCpvt",
  "key2": "gAUWw4brTYxz6kBco2RA1ZjjiCv8JyXdxhzmR2Up7Wi6bjov7Sgmw45c4H5uzUjfnzxmVnNXcf6Z8LSDHdmRzAQ",
  "key3": "48xS6hnkWyS8FkrVxxiYWX8giqEHpTARmSuga9b2bR5BFdxw5nnzuUj3aTqv9uSkhtE4tDoLamTNfVbBHNRmzGeP",
  "key4": "Qym3e4gqpUBibmmpVq9vDucdPAMNZDXuZqU7xv1WNyUKWyFmnAUNsKjhiMpu6KXaU2LCVKNGCVszApqmgTVpF4g",
  "key5": "5kQWH2q8RVdRYJBxSWWQV8F6RbQYiBX5je55xeCpD1nnAR23XU629waXVtb4XMsGigkvv1VKQ9xQBYrXdTUkAVSA",
  "key6": "3gd13ZXNENJH9yviZagHWN2JChc3oj1GjFVmqFypxsEHqpMFmZCPoGKTKXZGVnDrCr5DiEBLojkif2fMPmEtCk2h",
  "key7": "5aLwHLZG3JDyk2RyKZ7qTHnJC66BxoYk5DJr64w7QYbPkHSid7ArjJ5V8fbq4MoGVKR1t88YLenzJC7UZY9aaSY9",
  "key8": "5YPBwJVXHZUReqgmXkMy8ynRNCe7deb84JqvYJGP1qQAvdYuTrjNY9vmPaUaJJSja3sts8wfmiUyWXkQnP6Xfdk9",
  "key9": "22Q1XjCfZzsySMVuM9g6iU7FN7qeoyGfjaeu66WCEievvoeTWSffqoMb5RhDYByYb3TUjid1sGBRQ7i2vy8DotJr",
  "key10": "5JfRxdkA2XyvMkBmJodLk8mSy4YWBGTeKuVTUb8F6WtcxKJhCb3pDXsjzJcdskEKNxTHeq7xEpcTEMR5hxyFGeUH",
  "key11": "27tGXCQD4rQfNoju3siH6oUx53EVsF5jcegufFnLdaMWtkUfSgvhf2rWM9rvuDSkse4E878CdqyZsusTCdzktvmK",
  "key12": "42hyZdPACERzMAe1mP9kEsKhKLpdWdvJixU6J91XpBzSPZe13pTMV6jNaXNM8T4XJZ7MMzMbVyumZNbDxdutaBFM",
  "key13": "4pNqhHDDEzsLbGhCisHjUgQdRM8jwMirBCKVZh2cyHCUKpJRVwrbqFVuX5WNqyBKQs2c53q1AfAiwMAGZCWbxzo1",
  "key14": "4aBhSpapmoT6qn6PmGbm3XaRHpsTudz81RBrrR5s6HWfMgHnqD7ctHp1Qmd3hJx8GpjzQBsJpjrUVV5wzbyL2W2W",
  "key15": "3LQ2FHVpX1VS98BJ2VtBzKsX8qiVPPJHPDpLniUEu9gpX3kkLbACVhgZzLgYL8ZbYWVuaY7eBw8SzwvWnSaH3XT2",
  "key16": "4k61jfA1o6f7Rr4XEPi4c44z81AvGwjvz2tfLNdx8DnNsnRcfY68SjMstGBTWh6Mqz2TGdsYWhA6maspsyDnup1m",
  "key17": "4EKipxnUVZK79Jy37fkqh42tU1FtoTPPeHB1XdYJ7QBDZoBh63947PJPaFWHpeXD1P8Y2EUq5Ssb3fTCLDY53Kp9",
  "key18": "33wGuPWEHfeR1CdWPq3zNmuL38jN6vciqxXgDtiFGzUwonuWWfFnDuLaSo5HvDPtS9SEgtYG6JAMajjJjJj4iRS6",
  "key19": "3zyAJ52MRiAov8ySDiEfeReK6HfPybCKP3fBUXE4NGjwFsKn383dzpooJF42tthztxjSmJCcPEZ581xNCHjZ5pxg",
  "key20": "5wscU5P1ZrtAbFHNidWFuRKdjY4tF8MGMtoo8Pa8uWXj6Qro63bgcvhbhXdhE695a7Uj8zseGsYgm9CpDBBMXivf",
  "key21": "3tXKQx5SRvBf6iMHdUJ2uzpfoXBw4jQ38S8JcWdQv5vFgv18YZpUPjyQ2Q9uFiGWszgQXFt5GazFASAVt1JpN2Up",
  "key22": "3oz4QsKbur5TyDoQnY7sohbAmzFxcktxFBHrj1xygoLFSKCGvsNqdM6z32Ryue666KTUCouH7KcaYEbngXCYpaNG",
  "key23": "2tomDt4zXHfzY1UQaGkUQiiJGntw5CqR56uk8KSPvNrK2Lu6b8V2ECpDoEyU83SuayrZ4qM6uCSPeG7GVmWNmrC5",
  "key24": "2LTVn2erjLV2oX9rhPEB7osjTfj5vGaCUJU4ptdAmNLkgjMmEL7Jxshs6jKRt3f4xCWCEz9dHSDoMZ46FvgKEzuk",
  "key25": "3yyfgZYAXRAh3vSgvVwaabfkf35rJUq4hvR6surfXwC4msBhFFipDhNYTvkBNjx8qxT1VHErvyNyWXMBaZ7noeq",
  "key26": "3qm6xzMa31y5sM44ddxAZjkER2X7r4QtBfqC1wDZwP1NJEBtjrDgEb5PGn7XyDC3JWLkNn6KbebZmQimdrwhiRSx",
  "key27": "mqgX9A3wPiRMAXsGawzmFYVLejuPmLD5BpCDzqpBDLUSUDfJc9v9wsrfujbcFPGbjbXQrTUZS4ptkFbMG6UaBx3",
  "key28": "25Y7ZSUpQ8fTVcHimtg16QcXEbJvTNN8kvm67eSz7iD1YWKjc6uujgptYdy58PhfC1PsTtuBvKPYPzsNP26T5wEK",
  "key29": "3H2YtZ5T2t4r6M5KVGNQaaf1kFZaTfi97aXtjJfnVxcdzGTqsmT6kZw3MdHgVwHvEhYrCr5JuffMrjXMNoqjVFe3",
  "key30": "4MLvoG83aMByBV53XUH4g4zz7ZGUidq5kTtpjgS6t6NyPaF1Wky5yfAzBUB2z1hnNnK6gLZmDo4wXdt9FfbqEtva",
  "key31": "5tZX7pm2eRFQv3poUHfVKcSwnarK5qVBGaWRjiJY7zFLNTovszKJgyLqDM2cSLv5wHE8c7VUDg6F65dDhaMvFxX8",
  "key32": "5HQnuYqBg3rkaXectugZkN6ZCq8RLXmJ6ZynVL627gFRmBmZFTRb71JuRB6rtAsz41zGwhXxWDeQvTq4LEFHEEyq",
  "key33": "63sMFTDLqGPjMnzXs6zC9U94QFLV7QsqPmUb5v96vZJ3cb2Qcu2V5szSWKWfPyrgX5su3FNxRnkTf3nupU5GX5am",
  "key34": "2C23Z2K2K6GsDhLhmvACEj6E5dTsANxfcNBjPNMrTcrzA4mKxvWfQsmetkp5XfqgLNBFTzsQrqxWosmpqHkZrriQ",
  "key35": "C9i3nbNmgi36YCfyZ7fLsRvoDJHyQV72ZBBd1afbGUyuZnGZPkYr8jkmDQqLGwri1DR1SzutrCs9qv7k6yu2iTU",
  "key36": "2WZBEETo43vquepUujpaYUYqrBVL2P15KexxGXvuRmXqJFANuXCwKBM97VkqdVNxYkfqydCpZkqq3jrZ346Ur9qc",
  "key37": "5Kv3oPCXbEBa7mF4DPFTmHciNUvvmJF6GBFHZWTTkXkZTbcYkb3tH5aD4iFVmnRLP3Eg2DaKWtLNxqD9K7vnwyp4",
  "key38": "3ZkTZd33n9GLcqwVWuhm76XKZnWZeBoMhckvtQcRBfde6oAwMBNoGyih8Sb2LnKv6om8FGm43h3ayBz5zBnXnQYi",
  "key39": "4QjThY1ykQDaKVRmzbjXXFgbjbtKYhDsLJRAmFAH3eBSzVDxcmejZzkL8vqVCW1Urnare2nYcsPhxeSnzD39XHdu",
  "key40": "3AGEKb12b69vJ16hvtfceodCarKWMbpRBavV8N4UUntEg6EwP7D8jisQPYUQaoby6XDvwWnFB2BUKuoukJp1mnH6",
  "key41": "44fowduXMRGTJN6s6ob1HfEZbm8PhBCVjazKnHFdK3UMJWZ8SosfpUYRiNgm1kkasNemybFN5hbX6H7iY23jeTFG",
  "key42": "dJu1NzRagyJVx6KGKuEGxXGYCZBPyzhKHmHwH675mEmMo4aK8vTRqT9V91hgPmW6Bd99G4xWVUYXuSbaZtwaZQT",
  "key43": "31rmfSQ7PJrGZYqLU9R12eHTejWTsqdveCoizpThqbTDYrJK7RCeQNR8uiv9c7fpM2vN6edc9ErrnuqdxBvUh9dR",
  "key44": "4HCYiHv6heWorwXyhEuFzBden428u8KVXra3iGEnBUs8o2tPGs4sgeRHrmNBxnXZvuz9ZkZaX4rSosQUmtS6rkLx"
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
