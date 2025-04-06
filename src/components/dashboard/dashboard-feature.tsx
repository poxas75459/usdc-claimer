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
    "vtLAxkBHS6thk9Zw1h4yF5NjNFkieAVka5udBFcFeLJ9h7qran5AxYJDR15fq4wYrAvvzxtevtoVFa2BjuB7V5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnCYvmzmJWs4yebVMuhEjtoqzw9beNbau8uqdVaSW2NUCru1q8YpMKXgquDvKdExKmdWxmv7E6ZY65XgEBVWJxd",
  "key1": "4jgJitj48ZpTWaXp9wSt6c9a4djM2sHTpccFYVxqGC1p6CtduGcaHmzt4DKULa2i5FncQT1DPameRSEtniizhF4i",
  "key2": "65ZsD8J9Lf2o3DXuuTqbAdezCZfubbNqFaHufjy5XRLD1wo2DYyd8cJBguHuQwMYhxca7kx3NEcDGu3c3NWwNu2v",
  "key3": "223d9Ku4fCnDtxsDVyFiYxhHPKT99KayqZs2vjMwv9pNwFNwou3pFauZkS4t88CLeqivKkzSXUwhyFhwV8z7RA4n",
  "key4": "2Nd6v1gUWGBYwEBoUFtYwEHPze7BVsBqd5sY41radjkMQJwpCb9kjB6tvPtChaGjJBHgU5BYutjHtqTpVg6fx6n2",
  "key5": "4hhHPimaEE2zGFdzCHyDL7yhtkvZw2fP2n6YswpHxZ9Dd1VLVAK44TMQ3ULJ1q9Hhxdnjdncf36G4yAoyuEpjuK6",
  "key6": "4DcqYp1L1toRAmngbKWdyjqUmhTRsYGFqHb35G9DUuPsxWrc2XxkvWKWxVjXxx68pwuvCjqfa2k883AxTRhjpWxd",
  "key7": "5WjMBYTcz1QKo5Nmu27ubUUfqpY7b1txmvWdF1AsSusAJfoSAZhgXoUkFPtiLV9VhcC1NEWgo9wUq6fbjpDzCbRY",
  "key8": "4xMcZAum2XTW95y2VwzYepcZ4cZX2vsza5qgsxRV3FsJHhuYoqihTeJwYYx515eVJYzwpvwCXcDpHo9AMCHKwJT1",
  "key9": "4pmkDuRswiF61S5uu1UWGAqgkSaVCHLbuKe12RGCaoog8Qd6Dkw71vaqwSxVkzvmrq1zteRqxQTUqQmENYXWzgpL",
  "key10": "3yvxPxC1N5Pxf1mod2qjCmGypFgcoY1gPFLqtdVoBkVHa5YttiPyiJHK9sqpmzQN7QCi3C496Vn3kzrQNpZvcuzQ",
  "key11": "37Qv7kWoc7TxoRkBnPAfjR3yScfWTCZVv7xYBJcDaE3VuNMW8P25ADM26UXSbD95mzuRciRM412t8mAgHxfRibSd",
  "key12": "3vMaxKkogzGsxdBsAVLuhxJPRnuaS1RKGKn6NN49bbotsLYMovcqYwhJtFVjDwZKVKGB2Ro96WHQyWNVa6gkw1f1",
  "key13": "4EVqL2Dg72WgW2gXCEhfBGxcrZNzHhmfhP6j4QKZjRGMMn7BcL52uXqjn1bZvoQujrJHAovyz4wocauoL3TiDjSF",
  "key14": "3UT8AC1DEVZsXpQCLLrsFxzJ9mUZUijhFLmZ64GKRjSeRRZKoMktyBNTPJv6ezdtY5Rch7iKYF3cZQQXH5b8DjZp",
  "key15": "3stMityRMis6fs7dwbYbJTF1NVH5VGLuJeDw9PprARShXYfw1kqtC7t7SSYatydN1vBcJFsj8ph34S4ngbHE54ab",
  "key16": "5efoFP6ajL68mEQSaY5JmUirQ6frVKKAJnjWXBLJwXB5on9Syc7gKzY4jgRnDVDwk7bcYNsNaUZiQUAbZyKY7yPN",
  "key17": "2ZJBkdGZF8x3Mng5d3zeWSCk2vWHD6KBzJNsiUYd58YfbSudZYoL7wo9pgguFf5f8hw2ohkTVNwPLCLYy6CUkfkL",
  "key18": "548vk2vQmjoJcHRp5sjTLgfqzgj6iQdrbKeoBHvG8q1V3UTMjp5G9DdCGUYeWQgyJ7qAcnekqCWrTCBKRqoASGG6",
  "key19": "5NaLLNQSpwgE9y6bsK4JUALdd62DGMJXSM8DiAqui3CqAtdW4j6oVT3rvGCS56QbenqGggCxM43qtFQHBtSMA2Py",
  "key20": "3nXZ2NKCnJX7fSQyy7Ufqc4T1ngb9z1FhHkwkTXSkkC3DjbPwnhk3pmj65MC4yidg5NZqi8JnwKu1LDQVgXt2wZS",
  "key21": "22q5sfatE8EjZ8SQPB7jwG26VZhhjvpCWZhCMNNTDMQ6hTk7gJTrK7sib26xoK1cYrC6UiaYqhPS16HpEejwEa2w",
  "key22": "GNvc5vnHngrYpSCujH2UmigEi7UuBy9PgeKap6n4oCgErPc9gMaFaj4B6PuLe2gDBgL5NPLtwNGkzgzKxGdsNoB",
  "key23": "62isP2XjqUp7sLNxsoDTjkFG8WboTTCs6BTaHHp5zKX7UTC5Fdj54JfqHAkJ5i5357YCvTKEgLWRfSqbkEendTW2",
  "key24": "4TuQLzK4E3BdA3oofPkpW3tHsdL8QtCSbhqzKG2XnW5oLxTfbZ2V8RodqJ3XpuGe2kDjnB2hC4LrSaVcYJoCfouC",
  "key25": "25mxo4gPBrE5K8jDiGsLYAESMgLsqEkdSruqXUUj6DEuZY5ymHbuV8pG2Ctc7LxPoiKAQKj21cnvLWWQQ143LxpC",
  "key26": "5hR5LCQtNwh1kbkNWvDcJ8Wi5QcxzFjAbFfbwYZyXMCZoRLSqm7PEcJR7nBfLKSN4GP16KRR2o6xzn44TyajtDGd",
  "key27": "5a5u8tagFJ3qXvCpQXm9PaDq7jLfbAZvzNawXCYgK8ja3axMfdrZ8whK9amjmggvCMcxRsD9vjzEbiKCPabqPjZi",
  "key28": "hqysfEeTwhGp6XSy9jc1L2EjkzFXodBtorfQskcR6x5WCqN3dFA1MyG6x68k7sMm31MSb87SimXVPDZVuVc72Ak",
  "key29": "3qNVekcLjzWynbiZKRXkVQwjRWMdR6irTmQQaWQvA2QBvbbQuL7UsyvYpShnSRBzFuyCGaCBBkjUHxo9qC24Xpby",
  "key30": "3hi26TNNXr9T8eo2rdzhoWYpaEuuJRS1k4AFDiEsKMVTCc79fjDFKnjdfqB3ZBvhE3pXDQMGpENg7uu8pQpncRmX",
  "key31": "KZmPHjVY9rgoyFtiAce1Tt4VasS3V7DbYi29fGqnNc6136R3rejE86en6qnbKSztsWMTpX1iEttng6iiVXNhSmm",
  "key32": "GeXqyNzRqV2h8ihB3Fw31ZqJCCV1aWPtmM4cxWCv8rNc31h4HDzH16xMqA7ktUri4VKKrryFWSkuCLwSXrLL5Y6",
  "key33": "7i3sXbckTPdaAcpXQrxUAYYHwz9euSTbqjcV49TceTEgU3XFd4LTHP9dGruiZcLXfVuVo1HMpRBxJ8GaHqB2Teg",
  "key34": "4AbGyk5TcP7Hj4sueRH7QoKCZTDAWwc5e2QGXzfH2AHHPQmucdyTtQNGjvH2MPi9L2akDXvcw2LgT9hQN1DE3d9s",
  "key35": "5z5HPUH8CvNxeyHg9h4GegeWkqLht7Z6g273nf573gFCVcWcrgQjhBmWp6BW1ru9wiZe9eE4jCNwar815gKn7FXX",
  "key36": "5ftPbEyqRosgsinrko1jMocE175t9ywPobcWGYbeaXWaq75W6cgiEQT9Mg2UtQr6SgBj4bSX2KDwcVAbBCv8wcbU",
  "key37": "2FuVCJe9whKnWd5NHazkvqqVmvJiaVhvrrbUjgrDKZb5PQ6Ko5xBD4nDJWtTJcjw1NZ3NFC6qJTVamCebiNJaqxP",
  "key38": "2YP87fWMA8Q19bo5ywynvXKTho5pLWEwAB4tfWXRAWn3xEKyzCUP66vX1PmLvqz5cmyGemoFmzYYPo7rwBuBaTp1",
  "key39": "Af2WqhuN26CjrCDf3XtVeDaiTVk9QS4GnvQZ6Nw1EnFxHrYzVvDivKQkjQCZ9b12VwwCV1nMnbio6b3aTbPaVVs",
  "key40": "iZnY1WrQxfgxy8zCnQH7vpQ4bfgs5RJ1LfqWiYXWMt3zRNZZSFRrQNcnPj63iWgtc2bNesMP4rbRj25tn8p9tsm",
  "key41": "59PCk3t8C8NYxJ83YLBkEpkbj63SE2gnjXm3YAQVWaYVyFb5tjitnMWMUmA8yVEwResA4DEjJ4JDyqnDZz41KWnr"
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
