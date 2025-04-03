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
    "5RmNC56wp69EDfA5gDbwrCRGrcp3ZRvnCsqb9myRLNfkexWTRb8i8Tr4uWVckhuVdywSFPHSkU8m9C7zD4oxLGRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N77amgBsBgxPX1dXV1FjTzmKfr9DANV9EbfqW2ZcRAV7Lq3P4FPACmDh2dBzSgjnRGj4pCFqbDc7o478tBpJPdk",
  "key1": "4sXhiKPQQrWyMuPjFr23ZW9i9VeLYruCbSLeu7S8NLnD5P1YzkxxSht9NN2aEEsA7C2zbWyYq1ftvC7fzKTk6PJd",
  "key2": "49rM8P3VHkeatTwan5jwr2Vhk6zWEd8Yg8uXZbUAABRqnM7kxFyL91nAZrhNqTndCc2XQfHGUwokNmgXAXu9BV1L",
  "key3": "WdTXzbKQbY4tqHwjSb4aCqBhm8WaxMoMswULiKF4yn1bGWdAnmAUg3jVokgNJ7k3DNG7CJTdxwQDQrK2aHYxePN",
  "key4": "5AtwEJ6E1PxmB6fuKmq9CTSviNAwcxmTippDXPBRRe6stPJmceKbzhNonWhz6AfrecARsV8myoSTtJFEmAfRRd36",
  "key5": "3isuTQUCHZSxcVhnUAYQaWHPBQ6gMTZWrFNt6NGzwoMFp2UfQVp7zS1BVmpDsCUWctPnD9CPS1uZ4wTDwWcs9ZTu",
  "key6": "4V5kqGQsCajAaEmwaWWUBueo8KLhzsjM2Y2pCnhZGt3kDzXp9wpHiRpjsT8sYaZ9NkFBgahkKC38dNJRG2qZ74rJ",
  "key7": "3C29DgrqDQ9rzbiWSX2f7RW8sDCxwbkBbSHXLrWrP8v7rt1ZJYcFiUC1uapgxiJ9oxZAm1BtwNcDd2MtEi6QpabX",
  "key8": "EDzgq6dTdcyQkY7ZpFSG1ZgqeYpoKWgiB3RoRFi1975HQt6w1ddEBiZXyvC8iYaCnXbpqvdjNQfPyV6Uc6wq14k",
  "key9": "2uKBk9u2Dgv3sFoQ39Uk9a4awDwTzTnjo4NhVwzSNXSiU1WyVyjz9cW3gtgjGtR1ArwShneQYJNsqQViouP5TdRu",
  "key10": "3N6FdJsVW77zTQmiKN6A44FZWBm7uiZYYA6hKtKndpUZMByJxj99PDPGKZA77u9PTC5KCsUca7eDBaC4hURQ8TQy",
  "key11": "2TXEPptHazaXcz1h1z75d5CHRrJcEiZojZNrESs5z8T42o6h1DBzftyyofpY54DtWpKKfYdzNbcUhnRtEwthaRfv",
  "key12": "495VZntpwNNLyQhP3pzsHFwtV17viGpxympmkuK18DDmYN8iLPN3UjLDz2hQJtafZazKi4iMyyn7p6WvgFwytAxD",
  "key13": "2x6LRErZNtKhfPBxoGLeEorZAnRwYEy3xpRY6aQSZTTnSbZZobJP1aGCzk64cs1HaiRmM89MsTHwgpSBRLPttYCi",
  "key14": "4Dv51pd2zyQPtMHPspaCAztn5cBsMw8o7h2TeqMM4eFjmhAehnSBNWKjHuYjYM3Xxm7ZLkaDWGufPfWtvQqDRwq8",
  "key15": "49c1fYWFfK9uyTN7V2MExiL7FbtUJ7xBpVPhjdjpyDHqc6SGQh4vuU5VW4xvSJibffb4L45z5QBmwx4GzxW3KqmE",
  "key16": "4FCqwUuZff42qTGdfk8NhLBSu2u6k1LD1QQEuiMGM1STcBo8KEA2RexdtaUWaDA4ghVWuN9d5ZyTcAPUDvs2VdUA",
  "key17": "gn7itK9ChXAV7nPtBtD2u9UQ4urLcT5KPQuLtv9XWnNWBSUJoDEGmnx9ExjXCuaqafGiMk8CsgJ6iWAguFXmfQw",
  "key18": "QR4VzX7GwwZXG9UgiZ5BHy7NgzfYGU73iUhERUDEHEDYrFsdavHdrAZUxAE6KdRgvEjJsAuQR9txJGoud5scFjB",
  "key19": "uz9PzhMFvJJvEELc6P6MKrj7ojnyjT19g6fdsBe3dC7nNGRrjrTrAxkRdp6pfHApxQhiBKYBEKjRe34M4yU2T58",
  "key20": "3z2qfQxPK6KMuMvuKtqPbMJ3vE561sWc9ps8hbaVCXQfSzdmvczSaH8wA7ppkkKbFcUBQYpw5DNiisEV8nXXomhm",
  "key21": "8DJzSXKtdHzX3kaMjHcR2H7P5ANrWNBhe4pnAXhugo2MGdex95ewVzMb9YfGA4QDbmFJ59A7nQzBpMTjeprS6kL",
  "key22": "4pW72EoEC3dJC8wP8bu7C678yax3q8YQSJiRG3Hk4wjC4ygPnXVAtpwD8DEStsgut27pzkrNbivj591sntGzymgN",
  "key23": "2vhYRMHSDyUzZ2khj925p3onnb9qkQrDfLwKWmC54vJjoLT4UBJx5EuR9XRKpa725xW9PSQ9UitNiFVMfgKpd12y",
  "key24": "3vXh7UzoU752WQmSdPD9dGFnjpVvMe1SLycjjZXSr9TMjsbtU4i9BWqg8ouknXHMnKKaKKUWbKxDjTAqRjKuz2c8",
  "key25": "4L1UNWfWfgTCGEkc4gA65RNN3juUtiZeuLhbm6rQtYzwP4Wr9j3NdUVDHaFeDYJmwQgsTA66S17mnnuoawVSbfvb",
  "key26": "4WcQtmv8iMtBh6DY6U7fL45gytm78CBYw3wSuqxsnLoV3XMhxeYAU7RSdP3iXHxuVRUW7v3g4Mt1qwYtjCkPBWjP",
  "key27": "4nvcYTErUXLCLGC58g75wY7xe8G7iJXWsvXYuZxUyYBM7GQEdqzLcgcsw146DiNWVomzCFvZnUN255iPLBqak7qg",
  "key28": "2cbmGnibSAgbfV9k3Q4oEK2XwsjrBnx5oDeaHHW5NjeuC4Rm4Td9gomEfQ4erAfiYrxrTBfBgzEH3oPYrq58QY8Y",
  "key29": "2dzLLtJrGupc9Y1F1SFwwztRjuAeX5eMNR38t68SXdi7NrtwMJWUQ4PWZ3SK9s2N9sJxNnAdokDg6pWYWPpHuv56",
  "key30": "58oMgHSmQ7yYTvt7bGG3fpapeZWxpZyHM1xv4QWCMuoD6bfENyRzbL248ALpi9ba4wdx84CPKk5QXqQyAuprqFkW",
  "key31": "2iw1nMzLHkWHV6bKz7jY17TDNdA8YCTgXcmpxJzDeGkTvfBMsWQyjaj3etHoGi59BEXULaWLLSTAhTvp4uwY7UQm",
  "key32": "8HUXYRwLeoq9rTaQCciuj2Wnj6VEHn2rTyMEBm7EN22aojoMxka3CveE4YiQ5477r114vRJv8YVUXxLtdaL3pAZ",
  "key33": "5s9SuRwyx9LwqqLLAqL8tp4eMz3AKopHoncsXPvfgr3hdcrFasKTYBEG1VF7BKDkMbMwCqkysMFUziC4W8K6iguS",
  "key34": "4YAYtq8Tzh3Zw2i5cLB69U3Bau4HLMGWeqLvC1cN9dRpgD4kE7f1cRjAhhqVSXCgNrJftAHaBp2Xu8Q1mXdcdHXU",
  "key35": "4C4fjjQ1E7ccMtXxYu9TiV3Q8RuGBfKxtLwEBUJ2ToSgpCWpCCpZ9Q9LpJjVvfzMfVyoxBaCWL1K7fmyPY4EJusQ",
  "key36": "zqzyGbuTbZYRV6FxG8BqwTYgUyUy7uQF29aDK1HJQbMpwV5W53bTVjzxdWGqUDZTKUqoX8MBR4UMERAGT7gVQNR",
  "key37": "2tgT3LxKC9LBLQrTYvstPj3rXviboGoqac4rsW9hu7py8xaqoS3poqtRxkJFRg5PnzCeudf1YtsonwaSGMqxgEip",
  "key38": "QtC5Q6QwuFJE1BJULvcjZgoPu33E8uKxj9wpZatMwZ18JXPWjGzsvMcXdsh245sEnUvtAt9JGYzxjQiB2FzM9eh",
  "key39": "5favqCEcHVPhKC3U3wxn4WXQyAKRdn7YLNPiF6BMiVZ9Xhn91aUNJkX3tBr6J7JrYAexCSHgSifquNnT5tQHJKno",
  "key40": "3An757pnyNDWaz9ZjgJ2h1mtQnXt6JYTMsEoStcmVPTyd1dxH7DTAkt6ceTtKBkrxiiVqmdRZCnCB2StbVqmbWdR",
  "key41": "4tmrUZsApny3jh6t7aCP3DKSMe933gCyFrEhDRNRjNfS2EMoriuV7Vjg3wWU3aK2tEBTR1UBDcKFNusNrB69wdM1",
  "key42": "5iFRsM3csqBUbSzzx4WLn9WUhC7US8uQWhq6xaggXdWpzUTGVWZ55sWFzy7XhAZAu1jZR16QbgmJeHpqboNcnDUu",
  "key43": "3rgCJYgzrL9nEUkFf4LLuq9UDFFY5VFWC2GyR1T12YfqGpZaN19GTzhmzzzpVZbnkBrjQymwUz2sm6hPgZbpnNJh",
  "key44": "2sA5sxHvTtR4vkyc2bLDNTbyTKjw1rEDESX5uLZtybs9zWHMSK3BwThzEA3FNbxKJujAg1LCcViHBg9fCzoaFWaz",
  "key45": "ACvMEW3JZ43CVUAG8Pc5k1i38mHSD9J2PDdYySJfPPSaQUfqjVG2HkJqLxr8NcjbeV7ZkyLmFSGwXWHCMRaNmbo",
  "key46": "5sntBKLFj6D8JGzL1gUGFpwBWpk8v1uPVJBKkTrUffevLYZem5no61NuKzzyEg4qBZCnnUo7U2EbDyec7MQzcNYA",
  "key47": "2vH4CRqSbuUfXyJcR78Yx3J8AfwJA6manvfiRH8RUrXBxgJQK47XoF7oYhwC72QciGTZLwttW8ZM6bh7EBh8PEZ7",
  "key48": "51g3K9YtgAzKgh7BJjHSK61urV7KM6yEZVscZ1k8wu4e1sjwD6AkZMTjhzqtUursGpHiLWE5huCTEVVmyUr7W4rg"
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
