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
    "3JKwB1rkk7RjJPLV4AWm7e1VpVZFZqZp9oNQkcP1cD8nnjqPTrx7DqmNrZaNq1oPWLuq83J5W5Q1BY6TFWoQu36B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZMxZyCS2iqAWKp6wgyL39wVgsjnF5rbyyq9YeHoQqv8wr9Nh13CYbmkKAHSe9XyNag48SJbowhcFxkME8A5zmo",
  "key1": "5wt7y2JFXH6hUmXWzUhZAjsm7onE5hQ1Njnr1QYfYiCQ3umkUwBA245zAwpZhHwZvLSJXzJ2BoBjQdbHYTpHCDS8",
  "key2": "2y5KXa6hg2dE8ASejbKbF2JCXREXU3WEeMXnwQrmMuaGYXKdtPvLLCQcqU9CXMX5dvm5cc8M8ZzjGU3y5zjdTLSx",
  "key3": "2tW6W2m6JE3pUVEgTX9YB9HLMNPhePeTwbZtLjegDJRDCXyF6XnY3ZY19TAdmCxVry3miiXtsk4SGsm7zsSBaWyi",
  "key4": "3F4eMhr8G33mJcMVAp3T97ymSpqyRzo3kxQtJe8nJ19J7XuYWk15hDWNhS5hDoJRtWatAZq8zDkrvty2MPBnBMP9",
  "key5": "2i61hH82B2zHEPSzftjaqYdFyKbj5yNhoSwCi1rdqeDbYjBHmU9ZnLGLVRKm4ybFd8dqU6Fhib61EL8rYkyrEEY1",
  "key6": "3wpkJ2poEKWZvnWZMjEdmxPfAE9JGZ3gGPHnX5ma23VqJ8ZsPaLT9LLMrZofTkM8SuW4mncDtXaLAUDJ7bbGn8wq",
  "key7": "4wUQtEgXMLyckdjqpEoxYCdKjVGPPS98fePXcwaaPvwb1JFMcpZ9u2GGrVc4rWcPzUB3P4chgd6RqGtvizdHRESy",
  "key8": "4mq1Cid1MWq9hyzbTqKoDkvY9RqSyQYdWnJN7HVpywYJi5vVU3rAYN6t6GyNzFuBAsJMzFY2kmaaEA8UiUJm4F7v",
  "key9": "2pmLZTGcrGL113ucjpJxvR2uLPypbAkFkdsa2BGSVscwHRsSjzfoSfsrmjUKGVSBDxztBmivNcTVY8uNEd2YCDYT",
  "key10": "2AGQ8VGzNjGcWmuUKzv7gywjUTZQstgFrX1X4RoLgf96zWRYLehUpB8Z2SqNTE6VGyLJNT85mdtXPiDz7ajsUjFe",
  "key11": "4iaJ7eboNZFLgWrthaYuoR9T6RQ6RTmttYSEnYKgewN3kahp4NewpQto5MgnfAdceuWrXxiDEeFeELfjqKk6aWjF",
  "key12": "5d2VdGt7JXUdqiC8pMghcUXpkShyxTTznmLhwF3kriNsHqe4RxmL3wAnyRxhHdpx4tnGxtxR498oNK2Z2vmxZhpD",
  "key13": "3BkGqXkaMF1Z62CmeMRzUMyaEYuN61v4QZUJxbKt3b8iajjMkRJsd3cV67pMsKdqsbPxgvjxETp7uL2HVSHKuySc",
  "key14": "4gL11kvZzGTKiwH5Bn7Jg1cX3iGnjiQFfiqxi1JCw2fWTzV43mjKAxsVziitkeFtrcDdkVFb9abFE3kgKVsrfgE1",
  "key15": "P1bFPTxSpSGbbQmH176L7mfuewMzVxLbjdLoJJtDaMEtF69JtaxAvsT2PUkwTg12GGvdx7kH6YqfJcfCgGRTVkX",
  "key16": "39ZWsgSkfD8XqiizF2BFnQnSRZUJW8Pf5h47GfFek8un5NMVfSuVAsxFwN6ujYtLnPkUrTd2VsxVmX6fvSm9L9Fh",
  "key17": "4ag8W2C5XMQN5yACDj7x4zQM6v1pmF9R7rwh3cxuurbExXCC1JbE2ocKfHWfeMXJrv3Q2MiqLdxMTNSBsFSTmvUb",
  "key18": "2KQu9SEZtkPxQZvRAZ2bGoMU9XS5V88tzSbLrPjFGGmZUug8vWSPDg3okcP1RPM8tZNbLVYqruRQH2df7Hj6ZzVz",
  "key19": "roBLFjMBVYvSijsJi8NC1xbfN7kA6jeLuCSnQPYvuMLZgMKrTChjUvomjnjmZb2dV32poctHXyTvjAS76inisxZ",
  "key20": "9J2VZtWtEvDVyXxpYNkEcUPCs6YrrLotNP94pGoggZjbYE4LvGZctJoNx3dt5p8SpayedVrfqLru8szYcLMrK6w",
  "key21": "4fJC2UoMKrpuQbNbRgAVgQps16KjE26u31PdhwdpAWVf7NetQHyd8ReEU6QV3KGGF8TozcnK2rzLpFzYRBgGRFFQ",
  "key22": "5f79Dhoqk5DfW9FniUgDxfpwpGHvoaEE2KdKpVbT4dqGvMnU9hzfp3jCohhaFRSxj5qFdTSaqEZj5GDaD2ZDSEA6",
  "key23": "3aJem4aPjWrR9xmj8N2S9a3S1CqPbSkgseitRuFnCyok3En71M7Eqe7Yi9BePtxfioBA3fNkanv62tsZxGxNqLzD",
  "key24": "4VJB2GgdGs2Spfqee8XVVRvAWLogvCkvPUhryGh1tx2X4Pq1Ww5Sh9iNHYgUmYmvNHhEXKxUuFnixeQXY7Py5ngS",
  "key25": "53nYsibPcrCs1YTkpuYA2E6nzwTSgoh28cg58X8gwuR4ZrG1aRpcAWivEbxVK4tcgZPoWEagYrP2xNoxsjnYouRx",
  "key26": "5MWnvgRyeVZh8WKTr3bQtPW1mPwBXHggrzi8mVAGYiaPS4tCBh1vp22FRNnufCZH35NkQwS8FNcRh79ZfNgr1Bhb",
  "key27": "86XzZ7NKyCTLCWzMRo4uM7n4EX9gRFYb6ccpCWSjD3VEPoW9GtFuJKeYBcWYfS5s59fhHBxxtdAT45PxV2rqTyY",
  "key28": "3QcWyigZCWZVwdaWXBepQzbVVNZAhgfG12AYLGUH5AMdtMHdtCJDqZqsBvQntmtuhP9XHF36h4Uoqr1abNHTGDVK",
  "key29": "2MNMTgdBxBqDsn7DU9V8KsPE1QGj1tV3RZ7hAe2nTFdomejx6W4JngtSMurfC1cQoQrSq4Gu2nbaAedbf1FoqnUN",
  "key30": "JsfwizUCAhS9GofT7f4aJ41UC47pxmr6QiYCwALVrBhReNwFu3ngQv9AbS6waK4kJyNxB1DzBrwBsabt11naYhh",
  "key31": "5u9AbaTxh5NUJfTAxQEhdNgMzUisNDcKtpNUrfQJ5RmNTy7C2cTMdvL1v4wWHcBiyiaD5GBVMmLissff2KPPbipZ",
  "key32": "4Vs8U1f6DBfQg3cSQQX6GWWMyzJgj3xQdQFjgC1akzThFywZBUE5rumbionWkzTjxLpzM1coR2FJ2VVxQJPdsAwq",
  "key33": "4rqJZ2QbbH1CuUrobWYzgDQSPkKn7x54kh5LbkVSfq6VfCLuMndMmSfBaHBRbhZ5gPibQ456cevvSjqKSd9tRCQK",
  "key34": "pACFCgyS9xX2BDUH5YoWCMirL7jigkSs5JJsj6kpjjtE8L53utKcdK6raLoShggxAugFeg6Sd5kuafuaCp4HpAD",
  "key35": "2SbyCb3N4KbChLo8F9SeZya7D9mFrgqnVRjKeHMyQMwwH8WvQWuoDuMzdYtE3n1m8CrsCL5c1JcA7FeGiciFyqVZ",
  "key36": "62gLoCAnN4vmxCRNc4NUkWBCJNdMsMg9nFeWhGVYukV9rsobthqi8zqZ3Pr6QXba1mptEKaVSSo2nnmFSJFg8eZA",
  "key37": "2yQzfjjPTJMVQdMi11kS9deSvq5NxNKk6jxsMbVFGmLXv2cGi7qp3woHumXBLU9wGcJ1knUbArdxBJ4ASJBGzjA1",
  "key38": "2iB2xHzwr7GehFE5KYRRNXWe6cCfPwwHFzgoTAKpEbzSbAuy2SfBF5deJbeKc4eJtnLDTXZpeBxsoRSFypZjcUM6",
  "key39": "5BnWvyLEXGmHMuCZBojGnLo1kZo9QcQvgxN89Mp8c38p5yC4tdwMjPfZRaZJDrQHqqe1GnpBaZgkJWNLkMoj6QDe",
  "key40": "mm8YeseZYvXPXXPzMAPJf18YG9ZGEpYYDgvxFzDe8QKhHTt1g6r3M7xS6PivWsJmd5X8nCmgubn5mSHMe9Tfi16",
  "key41": "5PU2tGFG4q8jnDBMaQuqw1qjrPvPKM9d8xGMom83nTo65eaR9ius9Sb9TAnbUGNXszfLVaZnsjkjayfx9fnnsyEu",
  "key42": "EsfM88CmawTHJmrdHWNJVqVU2VnQKhnacvzoxTGJtCSTVrKrA8Bd7GW3iUR6HKi4RvHusZXaQJYy5Gzz93QqjC4",
  "key43": "4ZLvZ66Esfv5YXbW9Mk1Dy9ihb9KFvRRsMz17QVTJHxFKt3wVZV9rP5YLfPBFy62KibRMNDJnezCFX5JWBotarhC",
  "key44": "2Ddawfq1nQFr9reS3npHZmMcP9DMMWu3dSxzihFp89j9MwiaLHqStW1Yvf7FskvBLFeazq25Q8ai6tYaQegDQ3xY",
  "key45": "3LqisPQGZhSuVz7TJESkMiVyQoYRAM7pELLjA8jLkXm3WzmHTmruFNianoSaZrK3NdnkSL3HQHThMKtS1Jz5B72W",
  "key46": "2e9zXT6uJoJ9b5RNAwosHvr7o1L4KUakhj8rmoKVmS54hVNgxzL6keVxur27ZYQbRqvDa6KC9qAQZv67gwQ4eV5K",
  "key47": "pjkyZGJ6QPBepBpXqKWDvcae7YtrvqEQ47q5BwDnFSue7nzzJrxGPBKdiWhGfKctkeeCt48jQgLC4n6raKKM95E"
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
