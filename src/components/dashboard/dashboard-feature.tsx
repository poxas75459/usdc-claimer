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
    "3CjdMSKz7xt8auuM13kd4KwgQLNJo3kQkwHNfpX9UCTvcPqPyf4LQAPJkdH4XxP2qWbWriHQ96GyJnQtpGG8DfVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65M4yJdzLub3riyW8x4daAu6RAuKbJyiR9DWc61HC2GYQkSZhU6yryQ5MEZ92RkvmZxwKvPQ6vy3SPTwPNsZwE4b",
  "key1": "4CtZAna8jmGHoweSd4neSg7GF2dkihjT321RmYTxx7w2s2mgUsCudkhn3jsHxTx7r8sr7et3WFdnGsfSh45wPh8d",
  "key2": "4phq91gEDo1UsNunEa2D42gBCkt2ERjgPy98DwaaGYiRiU8wp4PxiJKh8t9rWyWT4bM4JmLqsruk4NJRBefnq3rs",
  "key3": "2NtqW2ryv1AcoExkJ241bXN7jgADTXT9y8jLFbBvgtsa5wZLjHzKq842Ef1UoWKNtJroPgxv8X3UZssHGe2JUo2",
  "key4": "Wnc8wdjJGxGsCyVd3nEFpLVfprewic9iMTydG4eP825wvYc3VaV2diHsb8kuxKssoFLXq6M1ftYu4jH3gLJVXpc",
  "key5": "2fHqpBZ8knYwRNrVBJjH4AooiQVD8BR9APw4aYSbJBVBhKaC4VBrzwYbsPmfmnNEE3QLHNjEUjb6VhzmPAp1tQhx",
  "key6": "55GrgzLfJ1gNxffpHLpEaHNFxZRXrhU22CTWzTQLhW5tKVXM51WJJ39GULfVQWuckReoAc8sg6C9QgKUyMna7Ti6",
  "key7": "2qmEWbWLKNHsB3nRv8hjvuqe2FzDkiV3MXvPsq6sNKiiubAoBUwd2YcT3npret9upkSkQTA7jdXcJaFxbaqWSFVB",
  "key8": "376XbNeeEKCfX5gf9EJzReyyh2fMr2fhNetcuiGdr7t8P38DzhscyLRSgj89wXDjqbup9FxbHz3iGjrBKJi5pDwX",
  "key9": "34VXH3Jbvt5LPH683ivpsdxmAmqp8LyzjPwUK7c9XPS1281ZYhFW6BUXJMCtEXzzyg1QM7iQ6XfM7CtiHXFbnq7d",
  "key10": "3N88CtnqUisyfh8TS2BziC5wLftbML48YHBvDvTsMjUoVw6JVihgugPSfWL3zNpgjhWX8ejWtciCycBbyvsJ8om7",
  "key11": "5zsM7ToEaVcvHcYcTbz14Y374y8TUH2EYMxhvUBUfDWTX3Yr45BcNCE8LRGBHmauJzg9gTg5HAkZJ6s1RQ1kWj76",
  "key12": "GrPXsXzFcUYuHTXNF88mD3WN8jmgzB9FKG5rxPv6kzAwDExzdeZXmrAdzuK3uJb5F6c6skhVu3qutR7TZwbw3cG",
  "key13": "5AAs1R7oM9qAw66g4ZkV3o6GyDg5EoQqrC1EyQRUbcNGKpRmLUhXkyCh6Kjn87YcaGjx5GR3SbiYnPgc5oJpL3kk",
  "key14": "5EztQ3L1XRnJ1TC9JNmVTJCSh6LBQasBVf1LBwCjdL25mCW1GqR4F1Bz5QuQci95925X791FFpt9896EE47yVy2n",
  "key15": "1Kp4tgWskLdRUYTCEGtNnroC34spBVJKR9PHbYzYur4ZUPyeybfudBBr2x4AdsnHFt6QpcLbMNmgGJp1dS8nVRb",
  "key16": "2FfXu84BKZrPq4niQSkrcj1rPVUVixZ83SBazFv8z7g4kMJd8wn8gY7vabPNnBaiMqRokTzuQPvZHny9KWtA7zHS",
  "key17": "RRxm5VkhXDJc1sw7f5nep83KNgZzesbmkBS6uFRo5Ld74x1vvoEbeviB9eGCRaSMdAL3XuydmdvLrYgq1m5o7tq",
  "key18": "PjaiHkFLpwNzL5DS1b2UAHq9EjUkTL1FMvYgey7PjsznTpz9mmcnubvvojs2LBdSwXh7YikjPNKQjRBW32QiGZd",
  "key19": "mnJ7edQExkXKNbjwRGueAAmBqHX9CKMEP9spNstapycwRMMWFrBvTrZgsuZ3okz8v2M2Tybr2v9a7MZqJaL4FdS",
  "key20": "GGycpGGV75YbmR1EEcqRJWc1zyR1Hb78WeF8NooCawCPBz8KcV3dhyyry481Vza2P958CMaY1QEwHHqQEWDychn",
  "key21": "3aNF1zby9CkULx7AhQ9xyGqQJP6Kf8hjNTKz9LoTZ4QVkaQb6Aj9fYGYJbxoNjyLaWGjhiX1B6UJpDZPnEfbPJbk",
  "key22": "C27eY6NpSBa2vBPCHdKTuYY1s2L1yp1FWibeatJKjDZ8BKmbTYjoJ5e4JW5z631AJvie6wUPVWXFHP7ResVoqHP",
  "key23": "5giHYAHh8gY5gvYC3BiuSahPW3LSwWLtYzqTpDmVS1RNb2ngzjCFZHhEjuA9jTPL6H74Dc7UCkhdBatKyiwtrwsr",
  "key24": "2A1mMTWKXxYamgYyMb5LQr8HTHEDTVM3eJiPWYgN1XtbUARGZ7kF5VKkXQZ8QGRBDaMvQtkWzwe7E5Q91bwNNBKJ",
  "key25": "5mMzVuJfuGf1iu55T23vjsKgr8fyBmn9nuLqMEhT4RG7MufcQE7WBvtXq5hgb9BtTiLRwPwGLvwdAZe9VmCMX2um",
  "key26": "nFLHE3qFpWGomrBsga2dqYeAfGun4Z8U83a6GDLTJKwF15SLL8hdZNqR4CwrLbXcbh6w6uePUrQQGnqj9rPXenz",
  "key27": "4381S61GKZ5w5y8xCtzShk1aM2ASXKC8Tk5svLzWb5AmfwvxqkQRezdDbBCBsVAt1bdZpfLFdA6MgXYKVgRqB8TN",
  "key28": "Gxz2SCmn1T4ATtr9RoXJfCZHN89CJsaQktc27B23J5cXSGkLeZVJbb1jHCfMavHNfXuiMN9t96GxWPr2i11ohbL",
  "key29": "3gD1sFfK6L91xQz9iNbNdtoJ4pxu3LzBF5otWjMKKbikpiYVK7m3oCc6kqc27rHGHuUbTpF9uFntbAnKQyXWyVpH",
  "key30": "TgUeXPtQzbKmZD6C84oQ6rqHvgd3UCcRo9mpFyBDw84FLi5XXVDyqGWKKLPcG2o4i4mhHegC7HeR5zRziR3eEke",
  "key31": "5GzKb7pwtEjLnsjPjH9Xp2JuNXpELfzJJy88FjWJmW4vNvyzHLv1ZrqiTir3YrJ7MgHEH6wBeSo7UdqeHb8MFkPk",
  "key32": "2UUUCysWSzQYnQKiAqroPCFFf12U2LfxSodpgSs6oegsZUp9157SRZ6mVSuPFgVbfhyRWB3Q6ErLsPujzX7X5VxF",
  "key33": "xZ7LbxjdSxdqMVGk8nLgB4tMHBDZpmn7E9hnGK2yYCuhjsFHDirgjVWGe3HVLRAMAG61eBzvX31t3h3HkbeupA2",
  "key34": "3Mj8kyg5LwxnySt2mtc4XZLZzhS628tC2c5fV7gRVEdAYoCt1ytuUCW9o4EpCtTn6dCSDW7QGa4s5gDx8git8Dqh",
  "key35": "3effrUVXRaAafZYWcesXGMNv1vv8HCWqr1Ddq3Tjp2oEJugL6QCNPVbRVjcKKvPU9DNWdZGBbVhhbHfUt3yvAbbt",
  "key36": "PqEKuSsZQBRUXW3Kd4eq1h8b1V3WUpyuts2e4mRkyMMXy7mfk4AVrfbcSkwF6NFkHGzjd99tNTD73cKknrsRroX"
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
