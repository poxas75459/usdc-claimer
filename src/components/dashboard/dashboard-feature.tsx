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
    "AFXV8xgeBSw215BosBk7iCZ8Xkh826uKGQp9mbBxnuTxg99i2rvRCjkCspVe7MHpLSUCd5sDpKu4WakBEpaxTbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pT3pVZHx8RZgp7Pd56dbyK62NnZ9CvJvmunR8LhP8ymSn2uqtR5nsWE6ahmSQ2ndgKUcXzCKhwbY7KnETqtUfnE",
  "key1": "2bcKsSQ19YcMDajX2oBFda9KyB7CMSZNoBKZidgMD7Xju2Avgi7n8qr34bCAFWnxNt6tBbBEV42iPPqSrZumP2My",
  "key2": "66empFQkmkGz1SJYWALZetwoaZwMUh5EAdZ3B25ekV55qWEPDwAkSiHTYxu3ghyXJ2q9ubaazBUej6e6Y5EvsXze",
  "key3": "28qKchgfGi8PCGbTxBd2F2FgWLd2ccEBrreHC3o5jQFTWNi8LTJ1wRJAQCrcCqTSWfBwAp9Dj7XsMYeGHrCMdXZ8",
  "key4": "8m2fwYyfNwuqBfeP94cs8jucdbuzXnuETP2DuqSrcWaWy6s6WsFpC6dngoLVjUyAeP3tYCn5mQS8XeQzDbN9eGb",
  "key5": "5ANGr5syzZbtMfbfMNomirrLornehExnrDa8DCE7Dpo117cU3Ar61JDJM6qGmassgUk2t3yuePBARsjhTh7kSJyP",
  "key6": "T5GveDr9vwV13CpCqzukt4FDP9tpq8vnXzna3DzKjupaPFMsWoydDRr6BX3sgbygYCU3mktvy7C7vjN12M9Pbvp",
  "key7": "QRqfvdqJsTThphBqtszxhCA2xvT38nEMw27W8CxPqUGG7zd6viM9z6oUyzfWbVBxBTnR72DupPWYdvVVb8bCYZ1",
  "key8": "3XNa4JLr8LkJi5XMCDTKXRcghVrTr2y13h73esGUrVRudFiRBNQk4WPLRtPgQcgXn8DSdZfyDKCnpHxXUNsGPwwF",
  "key9": "5CJUHF8JToBmSVzVZpJG2iSuj6MrkcgMhdJy6SSfoZGHMWv9T5C25pL4UWJaYpZUi8nHRnrcfk2cLVn4ooLqmy2D",
  "key10": "46rkLbUpXWEvXwKjPrDYhQCodJi4LvQNRpkXeBuLgkVycCo1cKR7qkYXxNJt42uKfNknkDo98Gj5NYvmAPeGHqVX",
  "key11": "4bfKdDRvUkrcFX5K8pmMQZf6Q58GsbSErdJ7EJZNqfix6DXQcxXcKpd9wztDvvYWwSvJZMi9o1P9uXqK6P6K2GSi",
  "key12": "5macZqXSzuBYkmmdrNU3uUxmEqWoiWsdS8cRSphc4UjKGNe8BAGZzW9zNG6jyFbprwARgvTYzF1Mfhb16mGni8qM",
  "key13": "5YfdGtGeqAubxGecQRAHnUV8VNKuoLP9LWef8GH68iQRzuCnLHbDkStPHMqRtcfy2MkgzUqTjBtgJbqaNoJzKtqm",
  "key14": "61GkckbDvJmQCCyj83FqoNCcNJ4AAbhvwRdxVojXepT6q6EMZBWEVD5WwBt7sRE7UkaSC9GWkLQ97zsnhA1mK8Dm",
  "key15": "3YpmUoAYPAQvs2QWQW21m3kJhNhcX2WAbTc7Uy8fHBbdZVp4z7mUicv5pSpnJk4NVMNmG7dwijXpbbpNGt3dSNV",
  "key16": "3cXn5EUwzCUXXi1BvZWLceVDZsyP14m6b5jep77jfYv3xKiFX814Rgv2oNbuQBFvMLtSseRyrWNzAR1vpKkFacBF",
  "key17": "2fRea49MUPrxv2LQT9kVkSHyLmmwQ6BxCqwbbHf7vp1kQmrgvoYcTyhPkJu2uVmFhYwY3K2B56mxb2NbLjgiTuHj",
  "key18": "3aNaPZVFMnWTfNsqhz5qk8hH42DPRNo7BE4SpNzJowEqLiLkdk9wPPZwGwxQxoRWHDpPj7FYayJAgWBQ1WAfEfM5",
  "key19": "3yNDCzjHZ9MidWdTVbnK3CStgEBRUbCsqi15t3wy4Ycnq4vAdmYtWJFg4cJB8XeMPYvYbZanXc35t6Fb4w6rwZo1",
  "key20": "2z8DBqqGS5B3pBGrGWDg3vCE7xCTm2FYL129iPAsXSw9V4kVuAfHgRtXJa3c1BG4LpUZPGYnhv4oYwiX6SfcwCek",
  "key21": "2vppFHZfjBQZNhqoVogE3DuNndzwjE8VUkW716tkkP1LHiftoWnDfZWSfM72ymBNU9THbXJsTP94vq1dTeXwRz3F",
  "key22": "34JRVM9fiDwxzaPQcUqdRfjFKmVske2MTrehpWAefLMuHZW8zFG4uKYS8sMo6dkpw8neUUjLnuzMhwNwLKx1dRyY",
  "key23": "dwc2CaMXQjh3XxeX4pPRHtbDxSPCqkYTyMjSHZcCR19HWvTVBMZQiWVpcZkD5rHJRr7Yc5jA9YEWTkUyn7GxH7K",
  "key24": "4GGRUdkDU4ZXU3NNJgzZUK5UYzsSVdREBd1X2Ni28Xz6ZcoECZJARwvTkMVHTKJvhQFC2CKzhbmiHXesEVc1tejL",
  "key25": "sYsi1KAAt2iM6aqoiUVPqwFRZqaJbrRZbut5suBZ5BeJgb2v5jbJwP8o2tGwyiDDxqZkuDAabBj33ZmkBhYH9fJ",
  "key26": "2kCYM8ceswg8j9iHTdfDEno8qtnwGDxHTUPSMAcmwBimTeei98ZHftCa1FrZK82QdZdvcZGJkEJCiFgZCXQvRCFN",
  "key27": "363qskEvoXTHJ9QYQce6CvP23PQAL9pwS5MmWqk6djgHghJXz9aBQs4dMk2hVN8cL8H7tya1rmHWGvRkBC1JBxFF",
  "key28": "3XwmuvC22V5xnrGjwGj9KUi5hnmoG29cNRq57px5tGxzsVTcioCwtDeYTZ5E1XJXHZEd1ZiDyuJR6x8WXm4EaXEP",
  "key29": "33j8Zx6t7fRc3wq8cNE9bTAhG9DE4ypXQsJxofMJ3gLNniA87aLjx5SAEgm42dWyZCHYtqf5vwJGwaFwdBERGRpn",
  "key30": "4KxeixG2Tw1owbTC7tbSFYfsgvq4L5WnNi8tAfqbVFy3bzgD4Q9cXZQCGWGfUNdWgndZ9ZdMtJorPSR6u4Y6MNkT",
  "key31": "3d6QBqDn7gd2zqGGPcShWwS6yLeqW9ukWqTnznje3hE7KkxNSbo7y4e688eDf3wBERU1VgcCUEfuo1SWGVNZcYxL",
  "key32": "63S5vEBfgPQnN6SL9Jxc3KCGogbFAWqex6LQQjLWGNQNDWgJCjqeWNhhwq3B3btHvVwiMv1VjCpQCVfsmrvrF9y4",
  "key33": "327aCGpTK6GNUxoxefcXaq8H3NG7nt1L5mGzdfe635qY3HWR3mZa1DDqXZG4Dx9VrU7Smd7J93KrWTqm5Zr5Ug9k",
  "key34": "2b3UUD6h98Br8bRnHDLqX3EJgCdPCTFxbRdwxYtZq8jgAZWwnA1ZxuyeEZ58kjAtVgpihdKGr9diEBDQ3m7rGBsk",
  "key35": "idpmw82DTbnnbtWPR2MXLWAPUP7EvgrYy2Q1bFcUc5rMydgVW4Mpgo44nkQt1UVTYbRSbsB1LQdS8MRsSns8hRA",
  "key36": "3TfF933cAgiRDKHDLsCMCybSxTSkRcRyt3JFaBRiiny2xN7vTA6TAu81fai1kTdkMQN5hhkfGiUeAeabNsMgRMFu",
  "key37": "yCXJ5mDQi6chzUShU7UDf5sW51rcd5s2MDhmgjn3yU26brZTaP1ScYfzRQfPrxtmUuvqXo5e7SXidNv1iryoFNQ",
  "key38": "33QRTCVRhRiUp5y9obgdaE8VgqC9JxwG5ZWUuzLA2958gTvV3Yqx6qHPsKNZmBfHr8vcUomuWUmmk7EwQZXa6ppR",
  "key39": "4YZeUC9xvpKZUPZUMmNvyQ6xYSqaZtgBewV9CvNqPxLW1iGhzP4g8x4xtBDzCAHTaey72PWZE2ZhvocozZ3d7beB",
  "key40": "5KNbMtjDVwLuuoMRo4BAwGyX3cPMnEhFr3Lrr4nejRqcQEvGYf5M2EshpRqh4FCjqSsMsFu6XXRY18HYWYi9JHBp",
  "key41": "5ottcfVdt8fKMxczWAXKkwkqyUxiWTTiiY7MdBBo7KfNB9B259DRycey9mkLTxkwGb83wZ9UgGT81iYd38VHW1kF",
  "key42": "4CDt5gjs5H2gGLvdxetkMtdUQHk1YYshKqRM2dYYDLeFJ5oeq8ESCzQeZZa4KZBqvxo5hSVVUe813T9bFLGoUXyN",
  "key43": "3tsJsVwZn6RnjmaKzC7FgNMvmnj342y8VHZVEDY81DRrjGuTjDrFVGSRk8B5bXs2wntq2T6Mb5VFMyC2jURcAUpv"
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
