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
    "4H51e5iFWJgMJhiKn9nczTh7hjKcu2VLJ6zacaAWZE49zDb6ihBqVY2tE8VDuCdJmvrQ8Bhcn4ZX4xrpekKHD12c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEHrrCDUM2RZF8R8zW8Nu9LhgCXMc8ki6qtWNsAgegPw7ct5eSFXrSyUy2jZUGZjxUuAb3jZ3XSLm1Gk86NjWJc",
  "key1": "3ZDdeN2E58wCX3qojxk2Ebd4C9ZKyhYHNiX5856hGW2wXHdDJuCidqpjcPe4xhisZR7JUXR7G6WS1Wp66rUdu3Xx",
  "key2": "3BPtBdrqNdSwHG56Uf8KHV7gtJ5oHW5dm6FAXdBx5MndKDchDPQfTYF5wFn1SD9XAoeYKgwsBAnSwGeCgUeqdR8i",
  "key3": "54qDsgVuym9amj5j6xov9gRTAyUXNZZgXNFxXwEwZfbNfbUwPysnPdyAY7rY6aUAwqsmSP7UCsuedYn57YxXnbY",
  "key4": "3vh3jDHWG5K4pYmSSahiexUBv3ifzDfL7asbrJ35QcASRcNYm3AuRRdq2QCVVQ8psmFXQ9v2uPqMNtrGjc5kAbsi",
  "key5": "4SYKjCeopjWSY1bFB4HXHMgEaqYGTjc3Y3pTv5sJS8zEJn4oc4L61m8p9MPDvstRj5pLDuaX33ddQp7dozenD5E6",
  "key6": "3mNKaYBAD4sMtp4mLyt1SmN3THoeymdugbNH4H2QPyuBKZ7ttbUongBU9DcqFs2wyJHYb1AgnU7TnWQaa8Vjk7y7",
  "key7": "33XKiZtjSqSGk48cFYTHXSWSq9QbK8bNnHbJ5xarujfdiKpK1ovd4mtZn4SyVoxrxotmqkUfDF8QmuWZPsKBxQKP",
  "key8": "2eJVtwMFHYXQ3Dsogmx2knmQbX8sctbBuc5JQ393QMu5WaMwXTVtQj8dzNGauJ27qp4W9pxXgSqRAcGPJWPxWsLb",
  "key9": "2EdFbGdJeU86nBdqfBAL1eLsjcRH5eRWJ1QZT4V6t7wNe7URnuSVQEGm4iDaUAfFffNfx1phZV4pJyvtsugFU2KH",
  "key10": "2Rwrc9Yi6Ph4svKMirnDDbVHGxgcSfsznyP2jtCsAoz6BQ2De8Ag3gdJyzMsB4X1LUwmy7h9uhr6e4PCRAx7otxe",
  "key11": "25p2HsBYnvdsNkj3mB6RLvqMrWxRU4F1ViuSxgVhidi7YDoMQ56VK6QtLYHwuPRkLsHgm7JjLPJUbE6BbgXbutjP",
  "key12": "mdpxYCohmwwaHoePqu7aavoBvWohYYX4xRJfGaqU9waKvGdi6Nyme9S3oEudtJuRby88XmqPyPGWTQdcecBujHy",
  "key13": "2jZHiqBLgRFFF8oFGyWoBGVeu59oh5nRXbyTVHW9aWv2DqqAgr77veTtNai62nwvfKC2BaSR2ZUhvZYh7U4sD9of",
  "key14": "2KNNBMGGLav1uCxZnRa1LomZysVHQPwDChJvVAkoptCgm7Bb6RrS9KSr2bh5krbdurjV6SAYTeAWv39HL8RYAAMQ",
  "key15": "TSqr8cLEV3Tv5h68FdkqC2nW23h8djstfzH3RdypwB6o7XSoY8mBCNheqgM66ugtg32BkXHrM4gFBV8WBD8J2yT",
  "key16": "56hRQSC6YvXZr2ir4QWxnUNM3ax27DzCuDP2kW2qgaGq2izT3mHALpwdzMVrVvxRBDjdSwQW7fywwxNMowW6o7iQ",
  "key17": "2EjCjgmD8LLTW1RjfvZ9WvZpqJjCpo3L8CuxHCgneGFhf3nWvwyvs72Zdm6nu2o5Mbrzk8armfS3L8fLjKd3JCUg",
  "key18": "2PPipQkYChpQkLWqCgFEvRBXki8Gs7QcWrqVBPQnoGAkcAxuoi8aHzhQxRA6d8yhYxtRsoAakDsuHAK6VKfZa2G5",
  "key19": "3EfAgUbSpdGZSNs4ZxhcYCZYoVFTk8SivzsiHg3A1QxFZPb6WVRb3tyFwZq83xCSAjzGUwtpJoRbZA8HdPkfAios",
  "key20": "5mmysBkQgWr8GJxYweg4tHQcm7RnivDM7Mn4Lp4DJmp2gTBqT5BWjQ5aYpbFqvH1tzmZxt61yTtE4b6eY56VUdbE",
  "key21": "4E4THSc4UhRrbHVNUHNTe6EqUEjd24Um724pyDi2r9YzYFLDP7EUUYPBUaQdWUL82ELZmEzLmWANRvGi1GEMo7xe",
  "key22": "39vt6679J4u3fGVeRTygXNHqwwqE9bXFLWhvXwJDYds6amfzo8CuGWrJQtMLgTxHUvTT7C9fcmmampcchpR58F2h",
  "key23": "5NoM6pNR8pRLeqx4Gwbd8EMJgHiWHMrHzrtg1smQbJaFmtuZGyXBR446HkyeEggU2cDEe6R2rbAY6Jm9LT5C9sSt",
  "key24": "34SoXtsd6YGW2BirVGPusMthgCZU5dDYB7zs6QVCfz3KCqGZyejuzuXCykCwVUdCCQSSgc5LAbRX9UtvCwKeRcWh",
  "key25": "2HW6BqmnAHAJjaLzyHCVwWqk6DTHnLqowKqrgk71CCMgwKGGbJuf6rrBTdBNyPb12goG494AsLFdFGBm2KrKhqM6",
  "key26": "sU3sc4sv2gcehxiBYUqWemrgN8hgDM7k3yhBcVdYDx4kKwCdfVE7ydWxcdSJbJTox6qsCagtNpU9u6CWhmKJb1R",
  "key27": "5SqTBPEKJQSxGKpir3mqgcts4qH9z94vB3AhatgRbiNZnJARrP7qiJJfoZX6KNu261u2TbZgAbG568398MNHeD5u",
  "key28": "RD6bpH4MKbzVdkYcpyyQdB6q6tT9Q4cX8dGjh7kcNCLUDt9YgiganyBc2EM6a9Dz9qavWjAqs2EpqdZeyvkpHfm",
  "key29": "4JagKBc5sH5Hqw8yogjhzR2UPTutqtnbTDBRE3C9VMUs8UAtDxLayqMyEhmrpBYfDHm6j7KXMa9YHdfdJb4nk55N",
  "key30": "3npDBRoxFcH8EWvZd67pKVS1e5t1MnAYemvGhJEhruMkExabTjEA7y5sKmrWwKifFpbvweL7kqSdbm9A2rsh5rat",
  "key31": "GCUDB6VN7sMydLvxHXKnsgSzbY5877o6qrNATpELZK15PS7PV5RXqhA9nmUzHQgxorL8aFsauxMEiWNJX3RQT3J",
  "key32": "4Nq8N24AQYzC4GkbxQGqybcJJR7av2Hq6gEgF1PfcfwmcJom4yQ9p9xgzA2Z9Rcb7UCGfVMxYh5Jt89it22L7dKT",
  "key33": "3hF4CvgLWSRqQUwWoMKcYShd7QYRXSEZhLg99Qo62Hc6oDwsRacQbUX6973MnyBZ2GM6E8Tf9NFkTKgyMQEGRtrd",
  "key34": "4ThQfTSGHxDJBb7oDZ1JCQyP9s1pdQ8Vem4t6QoQBDEHDsWg3xJGciUJ7ujfToYk5t8wFZLf89pZR53r28pSMxt1",
  "key35": "BMwVhhSKSSynG8pKfrZLUSXvifnjF9zHmKMJSqUGMCUrtB1VmeKLKVoy6QpMJkMb9wrhASAwSKLmh66hq3hVpcf",
  "key36": "2Qj1bVSDYPi61uA6ZRTChsC8696TT3vfu5AVtqDcsdjfCkzhQekJjEyCZPa6qmkNWNqKb4W26v69wZKwiouTfkFE",
  "key37": "3T47zMkLxLTm2okteonNRqd6ZRd7kUvzxoKcgg9bvgk47rGbZyv5oFhnKeC6fhedTtcY9Xf21NEK5hXqAwUq6hXY",
  "key38": "4jpheB5Nua1Au1EkoserCYE5FcP534fAw8XgghJnmWbVtP9axcvxfCpFuwariT2qjoBd752AQ38ajYirrjm4UL32",
  "key39": "2qrRpb4TY5wwLRiNoNbM66fEGnmCwRtBeWDBZzBCPDC8Y7MqP182yrLBaKyZJYBCqcrQ2A7yLCiV6kXMmp2n2Fu7",
  "key40": "51aXvvkL9q6tvRFif7tnhvvK7w6H8jmdPcYhtjY5HGvZroWHMxXaRWbb8Q3ovZybEMZAfJVqsCANJs5NieurNf8L",
  "key41": "2HaZCLXb7Z5VBgS2H13vK5UY6n1sX6h62jTx1oMj6FSmZ6xgsBCvGyBacVdKzrS6PDSW58JMviqDvoZFVmzEzY3q",
  "key42": "2oV7HDiXAUsGaezVrrZrYBDf9ri5D53uqry89LjwocCScC4tXwdLBoZeKmmyf334feZhaHULDpjgHgDxT16okLCK",
  "key43": "2sjDhWmmpHTqeL6gKsETy5HYUAPJteC58U3Znn5zd9c6ucuXkyska9wfS88xsHMQN9WtLAYAEtUZJpwRo36qH617",
  "key44": "7kApXPu3qopTpxsaVt5LVeZpTMktnfCu1XGcnfF3nHNpGEnZDkMtYKrgs6Z1FT3jGrst8t3Bina9DF2B7gg552k",
  "key45": "N9wpaGAn1skkep3uLqbrJwwERShzq1r3jDDDA6fsXBmadHG8bYRcRs9qRi1LMbyR67kYS6sYPCzMJcBBmBCnudy",
  "key46": "BgqNGjLqnTCu5sQwVb8DqU4fyuhGx2es7XZRb5p6ePDkcyj31DEMxDnuC6bx4EbVKr44CNhRBJTciQUfmMtkeED",
  "key47": "4sQ5gohopr6hbGk8FggWHgDPVYH5ycbqAgMLzVS6xqQCrvGD8T66ynnWmAVxVFagi6qJkSvWsjULkh8jCpFEu6j6",
  "key48": "2jjT2cTAKD26hNdFJsAYbfHVWNg9nZhBkLmeHjQbuqQHLqh36auuSrxqs1QTsbvZt6WAw9cxmM3sjwL7yyZU2kUw",
  "key49": "3ZbD86fzZ3en3hQdjgH3Y9Fnk98U9jv6wiC9zFHgScv5XTcPspNqAKTBcY1MRjm7qsEA689hMKCa3YciJW5CDmGN"
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
