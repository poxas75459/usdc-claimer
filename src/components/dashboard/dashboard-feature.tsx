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
    "5xv4XCtooioTwkpPG7Jow3GPp78bzYa7sFEZzNws5SqTWDViq6yPX51BQhM3mepeuaBFr4w4hCU1X5KbrUPkuJRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVVVXHKTCJyLsGGVWCxwvBNpM8YxdcuZPHU9JCk6UtYxiakZ4AZ2E8JAjw93whtjmgYWGQ8QFZpz3Q3eo8eDSWW",
  "key1": "3fD9U3L9LyWnZ8VynyW56mV8oezKML3dnz3n2SPExLFfPbaULLHwiNFu2wRdKAWfT8xwSKapZ6XU2Dj1Esf9cvFW",
  "key2": "5NY319TraPjnWXXqfVJvbMhPfvQrzDyKq7TNJ7DinoXVNpFsSSUdzmabhN9uzjMZY36ZngN5kVQBvwZn8bCGrq1v",
  "key3": "3B1STXrLzP4gBgxhHMAzkQcE95JDYKSqpNwbWYCEnLwyP7XNLVxkoueF5cgw1JKS8hZaboCwKynEGJSY6K3UpRLd",
  "key4": "261hvAZ3jYm4uThBhidnNMLbaqSyGakYPQEvVdMacjD62eLqpU5CgzSwixdsZ9tRLyNpkkmF9Fx5skaLDvaLXVfp",
  "key5": "3Xtzto8zkRR7DADSAbJZhx6tmxccVYLvoCudsgiP2tqwKrNrgy2A2vXhfiz1MzyLUxToTXJy8DsaUbbRxaP3txM9",
  "key6": "3P82WeK25ygvmZ6qFsrmWMT32riZYMLKWk1TA4RhZ47gkXSHqz2zw7KYbXGUubX8gJt3UZGi3EmpR8jsoZBoxnFi",
  "key7": "5ByrVtE8KQRAADiKcBMBNesbph2c4FMkYB2bjvc6eSfTJpJoBxXGCdZXZgfycAR4HjAApdNiHGgfBnye6rBmKjvd",
  "key8": "4ktwkGgKdNePjvoGRXqhyYHoM7YxJmRZJvrw6oWp4wPvYEgmkq9vrpJJDtmMeSyquqgoiS6rX3T9iPLuF8JonPsb",
  "key9": "3j6791gHXCQjv97m8DqTj39GX19BYvkdCTvC1oD3z4YJVhnAuK1BXBzoB2MqxzzR5oXipkRYkbdG6toSx7vi4u4P",
  "key10": "3TZcGAJNm7KsbjyRNZegBcBhXxMmD38j1MTRZqsapuD2BNMujyhKx8cPVSadysthYQU8gDt3AifFWoDqYq1c5Yhn",
  "key11": "QeYrp4WZKVN9sXQxRzYH4gPmEan8YZfHW2dW41yMBjT32exd14G63WB4nNF7FR2ajxjx4bUrnWbDjWf6aKywcLy",
  "key12": "4LjZjrhAyguqm98gs17yYziJnPMtN41yScSURmBJajxqTxH8ykTVk6SgvjfdCVnPspb7vdwdtuTiLUjHKeKo6CSt",
  "key13": "h4AUHk1jhoQMRBFqvcfLUMpnF29dXcr4JZYcsQJ1DchUjdRoNWD3FmkhUffT6UqSkNZdtS1tqyDFyxkLD15rbY8",
  "key14": "4onefu3y7jt3zNQ6hxUzEbBCMq52GfWc3PrUFfRsvkcbgJtTdnwsUiyTcJgbQJNMHM57vvfZ3iEzGPSkMsvWFes7",
  "key15": "3mJLaoppHpYfWzQcJtanWZt378ijfCZ7rjAJ4uokcB9G3EfTV2oTy4neQZcaRQuMFocoynSfHLbKWkoubn8aKvhE",
  "key16": "2UPSETtMPjbREyA52M3njQgjhcsnJoWV5q3YMLLvRfGHehoE9J3QFVQ5GaZ7QHnNfTwhe3FKUMYawkeAQp26Et1t",
  "key17": "2J5oxasBQuEX3Huw29jYnUFVr1zkXapZUDHRzFNV4ksgNgBNrVy6oa8YcjZdkMYTB1pimFRFvJ5EzriEzKcpNukt",
  "key18": "5mZG47eRAHJykdBwQbwbaBZcy2tAPUqATxogXSsQMBFsqsKckYSQ9dwLENxy1Zga6K7vuCSsvztVPRpiijKKbohC",
  "key19": "5HdsobJYJTW8HqzHj5uuSShN9MJp2qVuX6ewWJZsJVexLkrWBPyS84tumyMw1yggCeXPw35w1NLSqFKTABmsM8Do",
  "key20": "3bEtSF2a3R1GpycP7gutx3eWV1iArzF3XAcPHsenymusrZ9zoCZkv3NwGKoWaRmq6NmPro4rbTtmwoMZ6Hya5E34",
  "key21": "28JvC2yvMMKDDjHzxcBmrBoLP3AJtU1PysQwJZSf9aKxQTA9wmsZfPZK9sUhxnX4ajthqiajdGnWLmkU18vvHvXL",
  "key22": "6R7B7gPam37p47jKJoooh49HmsE5oxd92LMZg9DLjJcqK8o5xScxL6Wprpa7yiHtoai2osKuh7g21uoxiN9x5Lq",
  "key23": "2gKp5qVaok64vyvXuA3Gjbrq2Ydf9mz9u33M3j6LB7JFe3VoX2jZq2Y5chhfL74V9cUhBCtzniqacAkgqbpb6Q3F",
  "key24": "3EECahpSEB4nYeHx33DdnJmnX4XEYQkibMQW8oc2B7s75KNxBymvHsWZWLPt7AWktHNxzxzLoNzkAg5WqYHyJJ53",
  "key25": "21Yd93Dfb3cdb8WCjmha7mhw9v7sacVfjd8uox8JUf7vs8cMuGEEzC3xa2iMj6rb4nYzC4ZtX6PZcrtn2cbWvCgr",
  "key26": "4NUeuccNoQnt6TJRcjTXmjdBwToHb4nnSLx5M1d8CKF15ecRBbo5craWwMQPLQzKkKYjFHVqZ2Z8suicj4sRZ5wR",
  "key27": "2vdWf9mUSnTbhSxkiocXbVem2iR973FXS3Ht4E8TbaM1JRyWzYC3TbZ5aBc519eEvrcGUYUNuZ1MrZhr2cwgahiE",
  "key28": "4AdLaL1CsxXMAnGfYs7kKrG3scw9Zs8oCxGNZ8zbLUe93LEMuYiN7qQ5tzcnrxsB6aTVdy1Qb7WkKg3okhoTgWnZ",
  "key29": "JBXxZbGJ9Jtv3cSqzxp3MqaJM4ToEVfx6XxZyPvYuDXqswT9n5eC3CirGnXX278ssMT5daEqK2uzZEJDRPgUTxv",
  "key30": "4L3xdC6grB8WEnRU9naEGLUxeLxnG7uoRhHUmoPWGusg7NnphvEFmeP3REnxQnC2hRuSiJRaH38dpJTxuXpTAAYm",
  "key31": "43fuynkoqqSPE6xzxa4TDHmvjjatL8axpNiZbnrqRiQCoPh3KT6iNe8ETjzDktwNQzrp8Bx9tDG6UU64pYSpHQac",
  "key32": "2VKmAJuCg1KBSfpMrgKdLLM4kyg7awftL4Xs4DSkgUH1NKe2bzNZCoatoC9C4KQBgvvxSm959ZRqbPue2R2RJbWs",
  "key33": "4HouWt4QTnAgtbRBQhNUZcHU6WJLru7s9kiw5duk6wJNKpK1TSeKe3ZrTWugt9fe3fTZFNpUiN6YfTEhw7RDFKbT",
  "key34": "2crPfr2cYCL364aJw3dMfCokszo3BK2GkuAyh3ffJMAHwmQTpECQxQ7wEiBcVcGAjF7gc9yrn9vzEsXbjTjwz61d",
  "key35": "38SrA1vDgEMiu1yuQuPtTiQ6SicqqPbDCFdgGtQVTuisvN9JeHZrD7Ckv9LGBvaj1r8ufhf21cw9ZGntLzm143Ms"
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
