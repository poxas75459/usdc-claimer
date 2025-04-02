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
    "5izQxy1vMLpf9Lwr91WuNkmj3B4gPG9sBFRm9MSb2vP1vEiKaTyqAHeSVmgxBnQXSmZWFL8FAG3ezAUgKUn5yX4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZoEahjKEWbXeyAVUkgK4Xdb3seo14Vgs3cEjkBrc18GVitU4nwVrtrJE7zA3uWe24eyY3A2enETfTWAecEPR1h4",
  "key1": "52MtnBoXmycF2DsUNoB1cskLbxVFbreagzPEn5CLC1i4gKKmDfJQ45T4qyqoSWh8w69xS95YoZ9Fokw2ZVDHUeuf",
  "key2": "3eYHuGTpD1rav4cpAVByRtWChSQhz5kitoaAfYvZeaXLUZoiGH9PvNp4PH78SPXbcwLx2TXax5teCovBU4siqbV9",
  "key3": "4c3ReUmi6nyqsgrwYbMzAFHuKjZxMo1cJhYAmp2BV7hXtqWMYx2RouySW3a27K35RrBwZkUmesvJCTmebr8iigNH",
  "key4": "4vTDXsv8Fj8AMtNYd3R1MDCwUHsvs6xhPWusdnNjzsGqdszBB1xohvLXLUhyGLGXdx9XLeQaQmXMpn7kZ6e7NzCP",
  "key5": "n8LKgVL9wKaDZG4W9UWCanJL8t5eN5xAF3M7x4hwQcStUgfCqr8Pms7K4KF3rV2o1zaeWFBLuPuJzgFktw9yzns",
  "key6": "3ve1TJfahgdpqGjrXz4WZcqunUAZH322e1d9wvdiFjyDQ9g4UZeN5Dp9ZFhPXvwsLphggcMAQMMTaCTenpSotejT",
  "key7": "5iN2GHaHhxn69XSbsfoiJPNYo8HGNPxPCtjM4vbTwMkP5RmyLwkHazpRP8HFz5xa8EvNBez1Cxo7ENNdQviKq8fL",
  "key8": "mSXd3UJTBgdRzMCL5QDjpnGbdpy6D38qo4JmQ2cAiPzT34u1jJp6dRuDcuhZ3hP52yp55SnvqbittDLq12sBu76",
  "key9": "4tU2YPeoiZQgmjN3GsiuhPCSpypEjcfmoYN9xhGqygxj2maHbHqv2o5wM8BnAgphv4jmR5zacQ9m6tQdYFtTz7Fq",
  "key10": "2XFSMydg4DUhsiqofxPsfJiPVss4VQX2Rvf6bmacdaMf3UXtS6W4Udu4yF3fJ3uZRN6GXjk6y6yv5CxdfSFGJqPY",
  "key11": "4wgQ4u1SxyuNGn8og88hVNQR5TpCjrsRTz3agA9Bhvk2KFk1KkbRjoAic8YfNvUCmrU2K6eGZhsNNddRNHM5sZZa",
  "key12": "ZKLbNiwDUj1sioivVHnJS2XrFjTbQtEjve1faX8JPCk1xtNWkf6e3k5z1HdZsCP4cAzR7kcyKCxABenGcoXrxY8",
  "key13": "2zV2MaDujYVueTHzGgtHPonjPjTCVc5WowBTnKar2rtW8YBkEF8kAhtnGX5YdcNV2FLLq48oarFHjkJyCwFVp6pa",
  "key14": "2bGPnZbDQGusY9D6BMYXBRQ8jMvSxKzNtDebHMPfMbY8u6MoyJ7XFkDqQAD9xNFXmht6A4biwcvkvMaUNxRQj8n",
  "key15": "2Xjsdy6ksPnVyYSkeSKA7G9mid9zSKNsdKr1z6w8p7XVojh2zEef4WqXkezw7BTuWW8QA2xhUP7i6r22Fqb2oKwX",
  "key16": "3dwhDxyJY7qMtqyVzQbptdaMYch9c4hqaBC3QdTizBSxGyum2YQ8ffh5TWxm5na2NCpd1iUQA3GvqNCuC9Wio9ds",
  "key17": "5hCf44bwpopFoSxG5W1S6rpQLZ8zvAg4ZTvKYVkd9qhQ2kvr1qgKtJJU296PWgSmKCj6L9PJp85636Qv7abZGT1y",
  "key18": "2vM6o89HmhuUTYjM6xVtmzPY7RCSMHJ7kgZFPCxbZmgYbzmQuNeU82aNFx8t4P4Pgmk3uHFMntGWBjLhViuH1AHZ",
  "key19": "2e3fUxnaJKZ7cnWtLg5e9zNQFCQ4194VQgx7eycYmELoexQR3atGrvJU63sN6g7jmfSgUiVinuNsQyWTh1mG3wrP",
  "key20": "3pTTsCFymR4nDkdoCmzY5LKGEt15Fe3H1hu5Fq9AUFp6b8XvBCWESMYRJizMPugtP9xFJTWyKeFEnVWR9dsqT5eB",
  "key21": "5G9Fdhee3HvfEYaqYPDaec3pYYth3csamikYb1H4xS7572FcHhqZ1GA6mm3fdqBqGmMESs8G81mHFNEH6WuDZyK7",
  "key22": "2VC3EAsTV2rRw2bKhPGNjWrVGQinUrBZohbdadkyWmR5kxLTdpSW4X1tGUdyCfcTM8mx5t32sfWhZVULsqy8v2qi",
  "key23": "23hP1aeDE9wYdBnWgtbCJnJND5WQc3VdGgbWB5duV7zZenrAzLJnEo9nEqvM7bjz9WrAfTVzrWgvivvaVK5B19P5",
  "key24": "DGzUS6Nv3GXmBshrCWUhUv8sqsGkFv4drLpKwNKystUFe8M38Q6TaFSVuTBqoQQztVauMguj79xu5e1oWgMzfm7",
  "key25": "46QUQDR4Z5rDV18kPaDqATBFbotU34fMGr8zx8R6eBKZX4b3TZEAATYjCzWaELZXhRqbi8vd5WaDzDMeMJRLRUTj",
  "key26": "51WhQK5etRVqVcQKZ2qabQshy3YJBg5FzdYVdkfqKA2Ed1ceyJ6yZcRQkyvsH3oBZxY72PAqhyDomA2qqPBDACCY",
  "key27": "5XGRiGV1WX9a3zoX5aHa7N5VdNMcjyjqisyv6oxuvki8XmUn7Yj8YiyMWCVNse8rciisKP2T7G392esBvL89bLqf",
  "key28": "5FrzBbv3kPJDnB4Cwxr7RsNt6VF955qk3q6Ra9226e5fmP7GfDp2rcjeoGGxcpsbVD9UKqh4P5efNBAAbZL9Nsk2",
  "key29": "3pr6RJHdLvYFUFyUjWgGaSYCqLaJWXDjpphwfBqd2XfBG13btecex6KcQPVT4uzagVVV28zJsdM6RQ1LikrphCqp",
  "key30": "4S2gHPio2JHbXcXN4NrHiNHE5ynqP9gKaDVofcHwBZ3XZ6Pe24CfRkSZnXtzt4CjNnZVaMVF4gubcCBnk4j78xyn",
  "key31": "nzKjuhiwHrAJvgazjB5bZrPW73RDamsF87UYCms4UA57EoZG3LNcFRPWFgdRd6HFyvFhWLEnfwKq5AmhCqbFiHE",
  "key32": "4m9CMk6zu45e92aVTcfPRFx5VrQLVUoXhnSsBtreu74uUSvLBmSLP366AsmWUYRrAUESmQnZEzmtG5XgfFy7UxgZ",
  "key33": "5PwCRG7UQeLzuaph8e4VbZ68wsftFYhrpQHNha5K5BGMhjjKW5WfErftnzn93sp3zYe9jb9M6z8ZKd51EQoEhJV4",
  "key34": "5dLzXtPhSbRPYGiF11QYrahccTujwduy2sgcrjpKPmfymwHDhAMkqmbeVYJy8352r1SiEJWMmmsxn7DMuPWgZcCf",
  "key35": "4qA5wq3dq7pQPMzd62BwKXrdsoAtqVH1xw9s74aRjMaEst3FRvHoD8xwKeniknUkP37AzG8FsWNcNaNW3igaFv9R",
  "key36": "5ABShCgLKW2RzJwsCdPN2doLXc58rLJXfGEahfSTveNkQQAmXYHDhBsy5iBWoSsgVHyxsiTvTSLcQhVnRyyEuGAk",
  "key37": "4cSMbxFtPZZDAbo8Qx8HVQMxiv9Db7wfwVC6izmdBWauFXXPABCrjxax1TQvgeoBQV5ZaMpj44DiQQeN7Dgj27yo",
  "key38": "2vVvbwUqkvxMvAHtCYBsNpWh9e2YtjXJYxsTJbumujcnhL5fMyUVpcJXsWiMXYA8CfaWXbY3PYuqRZzWknoGNcRN"
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
