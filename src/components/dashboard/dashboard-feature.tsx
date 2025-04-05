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
    "4HHzmEoQpXGtXtLKEZaPdjxCyh43yZQ1kodBuEAfUqrcXsRhKmaAdv9SkFC16146rFV3rQKeZeHd9wcvjL1V2LQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLuKY7FPKFprLKYmU3oAXRrmi3ca6QenFjwYfthkzSEkH88yeTdS2zxPLGynmKnwJCgkTiVPBGXkHL7VaqmMaDx",
  "key1": "HPkP8xWzbHjXz2g87Pt9WePQBvXNT7QuZ9g5qJQ5fAZSiqQAn9PmqjXTwEo3QJoRkAnXBdruuph8XxF6MpHwxeK",
  "key2": "4Cpd25z5GvLm2VVAeLEnaos61Hn3CqcbzAx5hP9o88CqyPStLePwsfetpEHcYcQ1w8T8EAB7VaAt1jMNLCuN5ioQ",
  "key3": "4jMiipW73GwePBY49uhmdptpNHsntps82eewgap2JUFke2FHvxdB3LJgHESPkSftEqiFaw4UadMXUCN5e3KNVyEs",
  "key4": "sommzqWDFYUne9yfNCRrCu2YTDJuWRfNtAT4bYkHRm8BLwoXKnGhemwLfDmEu2LYTsTpVgwTpFSRa5JyemWjCFu",
  "key5": "ujr9QoxMX8tXpdc4TTDuyBYR6qs113koccgBvkUTkmYqjwBP78Qsp4N9y7NhJAJRR7ty2nsScQCdjCooMhW4ZTJ",
  "key6": "5sG2zPBrL8KcKJric2X5remPw68wm46mp2HJ8qPfKoSxXXjwCnMSAeHaSq71HfDU4PG9uyX9xN2Mz1gk67MjjMsj",
  "key7": "3zFycN4xBdkfM93LysCbGt14yTxw3KS2cyCwUF5zYw1eNVRJSo3xfK6HNxoXabT2gQMDFFaFihmGCQqitKrR8nDT",
  "key8": "4KPMaATjzQ2nixCS7pswhbRzuC7uQh21aMd1UQYYk7Z67RTvrhcGLg7YBCDJyVDjtJaGPXBN8ncExUjMzLrvnmSK",
  "key9": "62LLXCtuQQJDdyoJNZwRdrfduMde2dHPPhGjj6DKhwR1C5EQ5FqB8XQA9Wz2GMYkFB3CwoRt9kh1AeT3zmDdvU6S",
  "key10": "SBvWnZ3n7D1hEcQzL4uWPpAzdVkgtcdXg5YFrvaq3dLHBU3FraAr1uUP6LaMABuXD7HTW7d8CdYiZBVjMKAGsHJ",
  "key11": "55WMyuXJbZWThrL9RNJ9CgdRAiPUYgW4EHx3nBBAdZeLkKSKMhS5sKastzAAtj6r35Vmz4S5o715g2SJdRTUckBz",
  "key12": "5F8puHmW3vAhPaDkyReU2vwXP6kLtp6L6sBL2msbybLgSRdxbBPnSC1UGZvDjzTVTyi7xg1vtYRqNubkVrtEgdBH",
  "key13": "5AR5BkSX7KN2SKvzaNZmHqe6f4yzmS24NSSRGgK1yWswS77tqD42wyMrDZXKeksfcCqjuH1uYWBVYUiRMD8kGKZt",
  "key14": "56sQgZ7Xz5L2Kcj3ne6qTCrizDu7Uziv3QyjR1zqctgYjp7eHKUMtsh8kQ6ii9vcFppMufrN2QdJPKXPZBb9A8Ls",
  "key15": "3JNK5ReuBrfFc9EJNDL5YyLZtkko6nXDYz7CF782AYUuiKtmJMVjrtnpJ9pcx4GnPJLM7W7XVtNxF4osxs8bqGmZ",
  "key16": "5tVYx4c94EijjM8rv5ZTKMrEdiceFdRyE4nFgDY2zdwCg8T9s15nX18TEfU9gMYqGTKfZ35XbxKWq9HeZ4rKRqyp",
  "key17": "5TBKFemUWJ6djaobtKJieEpBVfPa8RzsoP7qL4jm2rvYe8wtn2c9cCjjM49ifEh1pPBzg6BL5ZHysZrTvSQzcgDZ",
  "key18": "MK3Pk5JsCoM8uM5NMZ9jeavmmSgLsr7CoDLbLE77LcQukyV7ZjyMyFi3zN9xZ7HDxQ2EqsChxyJQnJS1Qv9DTts",
  "key19": "2vmxrwMjkVeoK8jHGEbeud3niQbbQCD48yCWLLqPVzY81Lcuq9xLV76ZnZTnutqSzY6GnUsfacLHUztMtSf42Hva",
  "key20": "5z1UvaBYBYbLTz5Mm7ptkknnye66yBNktSEfmKmGrqYrgZKzr42YDmRJQSVGVyLNmz9sHSpRQ1FrK53DTovbz9a5",
  "key21": "592GjxAhifjYP87KgihVCuRbu26ZbSkspJ8pRyQqeLMz6bdZQ7sediWFsCtk5dQ3gD5wynBfaHH3JKpg7y9XqghA",
  "key22": "2xjR7KMYUbzkyUTcbhi4RmHm9oQz1ynX4JJAmtLp3tKkUMesm1cWAuwd4RL2r5FcAwt3YSrxXXfUjTYhuRcL9hhY",
  "key23": "2JiKcBak9FGRkftB6g7SbM3CWGxwyCjfKCgEdHov8NP5aFtAFaL2MZgp2xib2e3eh5dPA1tTGjaGjAMCHr2ZobxY",
  "key24": "58QQu4yb17Ltb3MxFPJ4rnX4db5o8jGfh21cHsV6JaJP3BvVs3uPbZxuMj75KcT8KCvxRU2ynWhRiaFtB5PC2xvj",
  "key25": "WfGRJSaP1CQq4JJDBFtPhBpXCCba3D2di1qArxRZbqj59SoYXeyA5sJiheXYoQXV4ECsSKLyzJDicSXezMdYj6b",
  "key26": "4wThBe5Qc5z8bDMPvXKxeoezA3gPcYs1G3R9YTkdzmB7LZ6Ajqnr4ZNiQmBw6rmbgf2xfnF8zYrtdguCvAGrYZLi",
  "key27": "5vgprnrompjzcRimaRNJ4tSTDBQy7LFkUnXAbjA29biVhnDt1agyfDTdjeimskvLhQ94PDVUqaWLsYVZPw2d2Zpz",
  "key28": "jf5kgAYjqyhw15AqAVXSYVwXjctX3WDFKHFeW2wyRsgp7d5x7zn8X5U2zMMDqpT7zpChsKVH4uGdfVfcfDxzjfK",
  "key29": "2RsvQ3MCNBeDskaKySZzoqoEjHq7VZe6ZirVZoEA1P7jfEaRYwZoqbgCkKR8McU6LrU73buexvCpWNyA2ce6j3Pv",
  "key30": "3FbBJTTA8ue9WP52RpgUPPDPeEVEBjUuvAN7rXZFoWWToScFnxKMhLaD1CwZPiSGPGMNeaf9bF361jueJj9JKS5L",
  "key31": "2bfNVN66SyLeaRRHoddoNLoBAqBa8ahxsAn3rgyPKQCEqZ19dqYQF17yhbXEs5FVmpRVLYN63rh1bDf1G33DyeM5"
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
