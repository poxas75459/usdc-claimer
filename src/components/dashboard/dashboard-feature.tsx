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
    "2ZeQBeyD57xiLx2qFXKC7QrsuMM4wLD6b4mdGpw6ejMcE5KsJWWkuFi3PXpCzMfXYatnSHyd7JEArUEXcsTBBmnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzPxEfuuy8Yqr33tCjQQrqEMnFPbTxdwFV88vCQV1pXMfmQRM4SfdAKvccCausnYpyZdrsMZjMQ2cqwuWPEBwwC",
  "key1": "eWpAgJAjDTRsBFTimkiHajbAahogWwe8JaYovFu4A79jrmJnbNPrixHZBQjBFZ2SgeZzQxZMAVMEELfZcKrAndU",
  "key2": "3hjhAS7RFV2gWfyGv5KJeeNZwWB6Tu51K3hUMQZmZuakTbtuYhjZYdNzHSXVLTks2kj7Uc5RA83UgHYU3CPg6ejA",
  "key3": "53b5g5HsreuX4Su3HGMutV588m6jYc9P7q7TdpH5hcg6j9KH2mAxEhhcahtnwF7UfRhfKdr8nsjVRCau5BbMkvS8",
  "key4": "L2DLEtyTwwdDptC3r7adYffnTgWaWWY3P7NEoFYdBZvUN4Cxi2YKvEtcPnbfyBnTnkwdUuyvvdE72PW88UgiLK2",
  "key5": "BpVm97e4LZzP7bWwtJms9HqjGsayqad2QEiD8C3CFrvLFwC6nV6c1mXvSefZnnm63FrmNTLS6xyQWTVAxL1jwEg",
  "key6": "3Cw7swVj1CshWipeXMdnuD9ivecax7GR3f4ueryFHi2VRtQqYJnW8FABekqPgkSwEcnBJUrk8bLvRLbjGSeLu8xa",
  "key7": "5Y21J2sbnP6sM2WQsc527MgW9BaZ5K8LzoC8zbtMSxPnEArBy5Jeg2R9bEUbzum67UBb6864YDcJygRycgQ5AKGu",
  "key8": "5k1yduPVwNEFE1WuKMq9LdVoeGtmGjYRctuBguWeSJUjdmqPWM6KTpEcw6k6zUKKRznosxfSv3ZZ4Tw1C9LtW7A",
  "key9": "5GAtwEvDZT2MqhXuYMEQ2sxQy8hRVuRHPkDtWBSxGtpmUUqxoz4JSMAa9DJq9uTE8TVMivxe7qmeFBha3FVpKG4G",
  "key10": "4FMYpGJJ7BwCY1Qd2rm15cKqbiikXLvVBBBhd85xDJeu8UhmBycJ6orvVDLgUgWh71LRvdesk2TGN2xKzj8qoCVT",
  "key11": "SY7nbdMaZSEBeQy4fWidDAJLhGiD6yXqRuAMHCMu7WjhG5DfcDeMyxEg2eHXbbWFjkofHsZVLCwMVCGJMSytEs1",
  "key12": "1Je2Bw81rozKxWpJfPLmQJPCTsr5HQfaHUJ8jJC3p6XbBzQqxD7dTuV2TyzM5cRuHrz91bWDHr1FPBaic8kQfui",
  "key13": "64TntUusq1Su12seABm7ZmsZvQneVhSP4FdnwDNcmA2tBo3vBWqQGknmRYZgZUdmsQtZwHqLv9RWipPWergowfMX",
  "key14": "2dtfAXtDbk7LToKFCCDji5ngMa2Zynyg2Gwp8zR5JSrJydj5RH2dqAcypJeaFrK8JGWmLkUhaQSvrmt3pnq6bW3t",
  "key15": "2CFdQbHx9xYMwTjF8kuzRkyabFT4BvJERaT8EB64goGCPFKrA8JXeGNvJL9WgZUJdviVHReN4soiajG5sejrMrnG",
  "key16": "3PLtmj6sWtsam7FbVcGX4bLezr8fjrRvysNNNppCNFJEujRvQtWoVGTKcfAJVPUBaW6HKntQV1sQTKCYKXyDvDcd",
  "key17": "3u36cswumtMqwzEJgqKuYrq52mHYiGxMz6gKE1MSCmedZENFRrtkaumh8kcG48qhVAsLB1TyDoXNjGowy3C4dzTU",
  "key18": "2tmVu8J9aZejoe2ULB4LjV5n1YKXoTVNZXrny99i2fHqevEspKu4RpkoK3tkXxAScz7nxmgMoKHdVnsT6n5qdGcs",
  "key19": "n72Y8jriByeznuEHXUjoKUdjzgWUo2fjMBnAdY5TaADzuVCH1BduoiQ79Rrqv3XtVWhLep8haq8EdyDnAg72gbR",
  "key20": "3mEtGEqFsyLn2nJzvTzttUMC3q5MCPSSBGZDb6j8Z3HVZUhTmaNMoWE6hLJTJYSfvBZquyQ1rfyKnNVhJgXqrj3H",
  "key21": "4rp7DdD62oZjcdfqFQ4Tesg3UZ7qoA82AgkTgdo3thMaRk2YXitushyKJ5v35nuqPW873KEkaZV41R6QYXMwTYuv",
  "key22": "5wKyfeN4PFh3NgKQ4uEDsR4Uac72P69bHyaobe6wRGCtZyvFdj1QT3iYGRCn6GTypGmqTCmfKTJe16qc1G7GL92y",
  "key23": "UP51Fc7NQkQt5cXsGLWHJCgjpd4sM59RHh7meMkuTcaFPdAhvQ3wwQxNqCghtfNHhNLxqNbhzqwq6azvPdtFTZc",
  "key24": "5v3bNnKnXfx4F6qnZHy2e11nX95dqf23rfZ2ptu1cXeEmPfoqemm9ndmdQthNUcUaHGgQ5JJmcqFR5WNP8LzeHK7",
  "key25": "4C2orJCp8wTjzQ9WS6MjMHZdBPWm6PdKEqW4GmQtDWwd4greTm1GbyZcDLJBX3EGm6ZCHSruKZgsfEziwPeKvRHA",
  "key26": "3yajKphpKWEb1792Reuvc54GxucqWnUxZTSd9kBq6qDTrLCwo62e3zQRPEC7UhYG8aAoctfxVVKsMJHSvSPosPJU",
  "key27": "5JobaPyggfTjAiCd2HyS6rD84MBEKWMDsgt6YYqj7MYQRohQAJYU8XBuXFCSt4BkCXbkKURYhZBQo5MQ5uKTxUJE",
  "key28": "4eRXTCchDw5qbqGjTinu9TwS5b7suZ1UUyWd8LkX5cUKNcZq2m8no7HMazVMETSPWKYJf9oasLk5XRjrKYadz5p6",
  "key29": "NAnUvZDdDwWT4NMDogagBXdVBEWLAvxjXdmC31vePxHZmpqnfyFeme7dsdUaN5gvKL4c9fASu7KD3S5svfMy5U1",
  "key30": "D7JzbzuwkQJ2XrR4zKuuK3u8Zssbq4GPTLQnoRoVUnLmkv75oAEAW85Ui8FjB3DqjMiRdvR237geodYhhSDWCoY",
  "key31": "3H9ZhdyZ4sA6QNGa1kEJ3DyRaZaF5ij8EvzT1ZxSv5uXH8ieZxV2m3cDTTAGBg9HS3EY9Xg6sZFL89pYavgVaTrW",
  "key32": "3Q2s9SMVpFNr42UERUkiEaWF3jgCEkDF2AT1bqcLfLqnfsdks7LsHJDYYrUGJSu8PAnUzYgT8dGapJk2wsEcZL8i",
  "key33": "32zDQRVNk1pZZ2DHdJkBqkhsoTGPgZvBq2ni9K6QpBt8KN3WGAehp13uc1HoEmaFksPA6AxLBMLz7xRU194ynpME",
  "key34": "5A7VxqGv3hjojbhWvoCvrCttUzPUbx9Hh96jVivAjyfBkFAiHn6qHkXv9frE65hAByCBzuRwNqMet3fWK5yxNPtn",
  "key35": "3MYs1U39fwcZmnRvuesvXhK8toBsSfqKzEwZ1wh2hJF9t9J4Ytomjt5aphC47mKJztEsPdqpqg6NnkQQM1VreSaW",
  "key36": "3owYTACYFddfnA9qwo9dyzsaEL3BSj5FeQSBELpqyEK3DS8vDNydacff6tsuUHr9hg2zrk74y44naSaX6KwkqdCy",
  "key37": "3e5AGPVSR8MFmCcxyWhxxUgKKRrrKXySQArX884SfKr1xcKMMy6QHaoXgBKVghxA4KKtPxUnVq8MERzfefkuTTM7",
  "key38": "4b2PeqHNMNGaBc65qxHnbHfpAFETrqqPon3mMr2LBmjbrZm4Y1ihzQVmdXVaE1jni6exbBxz3b2SE8vvq7ks6MAF",
  "key39": "3pn2aeaRUd2qzv173nFSxkkWbdsqVmEm2tpmSgH7WtwvFgawjcPyFu6KmxradJpgK7PQKvgGrRnWFkNGf8cPHEf2",
  "key40": "5vQ8czjUB5ppp7c3igk4427pthG33TAZ3gLcHv3318t1SAMgMx5mDRPtQHXv5sWEjR92iJgm7Pdf3WjuQL7yBTad",
  "key41": "2wrXNPuAX9gYUjPJvRF77MTDNgugVSjuLUXXJXt5Fa667KCNf3mgpLQeY19BJL2bPQskFDaGxUrLKYKwKeJJvUXE",
  "key42": "65pic4182ZFZAJWxFHykv1oanA47SSnGki5ZjDFGcuxFz8S6dZfizL2FU2rWQBETSB5zvhmge8yS19YCfYorYY56",
  "key43": "3u4Jy1NjeABX4KjE2KGLyN1SedW2caTtdXWYyJJZmEXYbx91KkxhD3UWigWcUeHtSzLUJeFGWxtTHfpaR1gdc52p",
  "key44": "UcLQeSappWBQ2anfCsCTUnk2qyWV6LfcwYgnejUK5x6vjipWbXkxehyo2E6VA8TkzkDDmg4tTTRaeNFDRA9ka4Y",
  "key45": "45febfKcYhNREoUukZH2QruDuHT2gFjqrrLiaYEpEQs91HWLz9TwYUHS4AMbdVuvPdKSYbeqiBPJC9hjdXyjB7hD",
  "key46": "23BJfTJQNn7zvSDwykh9xDH2TgKGA6krkP6MkoWXmSR64sjizMLuZqW5y99y5mqxnAQZaFFVJ8S4DuaeryP1pFj6",
  "key47": "3jnXWcGz7kboHS5QyVJfETt86oZUMo8n1sz55gam73mEzPfXmk1SLKhfNtng1iqFvf6h3ucD5WMJB6Vxb4SKv35h"
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
