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
    "28Pr2D2ixqgoQ2gMTrfQdJAuMy5aLtMbm8dToZFWNFVnonfSEsNNBmNQD7f3VkgPsy8ex3FxRSHVVnbygyQwWrg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnNJW9FB1etEaVEkWE9xDVqYLSYEBxBvL8KZpUaafiLHUVMr9jP8svSAhTsKXVtp8253kYcXC43WqCFRakEFS4t",
  "key1": "5SC6uMz4o68EL3cqFEm6m7ppLhkQr6cYQeopf2pntTXsBp1UVMFMka3nkZrN2NZjB69VMHBHEFkipgBTkvm71kb1",
  "key2": "2TTHtan5uTGHKhheziS1uAdJetx5z3oN2bQZ6JTx76qE6A6GjfLd6xtNM2Xus6sC1W96aTEzRMvXKhw19BRWYo9R",
  "key3": "4LQECgjZvQMAWEUDnm1A5W4jV62kBaBkFczxFHCQujvTR3L5HHPthYxJ3QUrtL8SJFaKzgBWuSyfGTzbwsHMVWhS",
  "key4": "3PcYPTZb21aox4zWXKGy8bLY57AL7RvamJgDQs3qAFBKCU5hcR3tfRgicsYbyhtptvZnLFKAqatYYY9FGYwWn6T",
  "key5": "57epZZokQSehZDtCNTPyDV1h7RwQFDYTZivcBgMEbe93tJobv6FwaQJD4FDxYwEJPXq9wVtZoEejManjyrvyJzL1",
  "key6": "2SHB7nHFQmTiHme5837bmLLcybpQwFf4r27qqQw69KRLcjJBFp6MuwwHwZ5BHFAba7zMkZiqB8f2nT9nQyYyQf8s",
  "key7": "5vGcQazEeogmf93VQByp4mvWVnLorPE7R2HcFSg3znKEMECBrfKStrhZ4nxHthALdSNvgRU1PBfSX3QLiGzZTB6J",
  "key8": "gLBvgrH8eQjrrCZyN6xYTr22MxGcCUMvRUnZZqjbqsFu5DTn3M199SNkReFp2uMtNCY87A2zmyDAuMPaQd3A3u3",
  "key9": "49XSwcjTXby3M2i2Xy3BePdb9QbBu5wmV2vhJvWvH5QN5cehhAM4yVEnXPaQ4FgQPS76G3qjvWssukPPsj5MR8XM",
  "key10": "5WrxvNGbktbLbxvfp5KjdiXkvYdJ1Fmb7CeNeTaA5kaqQKGdxnJScF4p6J3FktcH9PES6NRJVUEP96p56qgFWiy9",
  "key11": "W43nrhEtZGrszYPVY4SERyTRSXkbbsTWV9Z87ojgz2DDT5S6j8nAYzxRG8QrJ3ouAM3Gqt3no1m5MefpjbKj7Lu",
  "key12": "5teKBb3nhrJhEv7oAnBmJoYysqGnjaHo4ycw7EkYpCpwEwAnoo2Dx5NSVygD4BfFnp4xx7HJ31XjfDevJwCtrY9C",
  "key13": "3JJ24qEdmmFbduxv9tkCPbSYgwBVFQVrPp5DGJGBpBDJaZ3XgM5FZ8Ktat4ftzU9t7Ntk3H9E4woNqQEDPUr8cot",
  "key14": "2KzChp68bkNdTxENGYqWaiEpxGF1gREgdJXR5TJmEoVNi3AJbCfTEWcAqdFmkpuciYXLdobX1SHX3oacJN2NX4yz",
  "key15": "4cgLcPwUAVnEt7xms5hHpgAbH5EDU5mSjWud5y2yeutzAqW2vTNhR4oWNW9K7RkzmVxpFwn8iLBCxjxf8GidfptF",
  "key16": "2cFrXyQGZ4kg6o933nbkb7TnTETbB8hCYmpY7APsuT3kkceSw4bAzjZ1HpowsWLHtt3HTTXJqHXy8g8RerSxBfQ5",
  "key17": "2F8yBqHcXp7Yjtez9d9nTJ6bnoqyyDBzkrxYoBBjoXdDZeyeQhVntPc1xY3PvLxmsMBbABYS5HDYASwxjL2aiM1i",
  "key18": "2SuRqKKTm9ZLHahS1uhZRFYGxsGuLRgs4RTQKar6H8smtL74d8fd13Ef1r9KqpP8NSQvLQeqWDDRzoZgPQ5Jkxup",
  "key19": "or4Lv5BfFbppwdHi7V7iJiQ4q4HSu2WMs44M2RgyL4dJt8xypzy1nKhBpkJwgkhteqZvAFJuXFeHXzDZpy9TZoG",
  "key20": "5qdLn3itJmEZunFSvGSmZTmFVCfyH2vpRtF6ZvWTpgy4BdqZ3DV518WcQpxMnKPaanM3quBDkAq5Wz5VbcZ5fEeH",
  "key21": "3mVzJywku4RZCjgYMhRE8Ctf7dX9PXZYMfKWR35ANfQwFtttK34gFJ5uQQteAX4FFpZZ8ZBRBVJfFXaXserxasgn",
  "key22": "4jDXAcigVNWqMAwG8RNJkjZZ9vLsAyf7aQqswP59CMo6GC3vefdCZ5Qi4jWcimBcCwju62Q2kauZEzhV6PsL9Euk",
  "key23": "5dw8o1KoksoJcTWMzUJvVRg1ogpud15cQEiT8yJiKxyjVKuhtsjYGUh5U9YBdSY6kQVYhE6a7xg51TvAtvGGoo2q",
  "key24": "5L6zXPSXoZQUWPFaEcpiyjbWufSdLjwYRUuax3Py6EKt9zo811XmCMUcsYFfMPkJT1FEX9Xr4Fsixbo68h8J2pBu",
  "key25": "3EJUraTaMKDw31botKYPyBHvDahdie9MUsMASTfWftkKHvwzjJa6mga4AXi37qN567HeGmSVPh19vmRaQ5iq1pz7",
  "key26": "2mHMidd7Pm8utWrh24KPTZVwAWhY21z7kZDEbM1uUbCczzJhaAa91G4qzRVXN4o4kFdi7H7TQXbSSYSacN4u8AQf",
  "key27": "5MVt8jLAeyJqBmxTfhRu3am21hLamsdyH9WU7nhLyiStxXq6XDDDuEKNW9ec6nHNA19UuJb2C5jaisdij7sVdefY",
  "key28": "4B7N3iAohNEbksp11gicEMtHGy7o6dYGjuSjjfU9FRNr6ppAobTpriLrcLDPCsbhzbx9iYTwqykKUFJhyuS5hFrc",
  "key29": "45xq4o7BsEGg9ap3Ggc71Qi6tSTW6zJPQqk3exaePc2qY5Kxp556SnDaYS7K5Gj4SRLhmvThx9nPUiF6JDHg4eJD",
  "key30": "4auhywVgY2MUwzsGSgJeTaC2GMMKFW738JrcLkC7Es9BhFSb68XyKxbwTLdF5Yo96krCZ2bXCoaSioA4Aw88h44y",
  "key31": "5XhBxCnbVrr8NU8RGHUdoRHq5S7TXV8NNmXNjH9wDZGTjbPNdj9BfkjHoHEiqLSgLRg3Hhw4JhsLK3fCg56q6ZcU",
  "key32": "2kB72R819GB8QechRCXWKnzztUA8zC9vkKA9T1XKGMxCsuekSYKizr2rTrE952nXZeRc4YMnfkUyKLRheBqhuzDB",
  "key33": "4cs4D4kcz1Z7mnfGrNxQvjahVTXQQgmFcaZnpLS8RqMYRiqsKf5XZkMTpXGdYG9U8NqZ21ozhoECngmUMFSrorgB",
  "key34": "3dFfP3chYHHpm6hXRCsStZJMEhRMGPuz54v4JvjDj1w3TGxRuN83zxPhFTR8nQtU65tV7eG6z8dhZg4yiJoDyzoa",
  "key35": "4fm2XuPjTsaboGdwJ73da6tsuKKvuav72nBUcfF4LCQsTcMyQwBvFD1r9Yq2e8s7HdvU8wSHnqvGcPgJqAGeLZw",
  "key36": "3UUcwRv3uh43AwRRGxSUEB9yfizJxrz5KN69GkCqmz4esDbhRvWco9Qico4Tkzo1VFsz7KB7TQgMq8juUirNpgye",
  "key37": "2YrfesYmXbZ5grTx4h7DNh5gv7YzSkx771jPvuEd5GXVYq4noYKM9Rf3GtDS9PH6r6zGxiKojX58SgkgwfNi8G3p",
  "key38": "4KmhzKKkCnvH2MxcdS5RaUyvyNDaDgNtJceHLGeyyxx4V8trYngUoSmq1gJptNsQJE1v6ASkp8rReu4igpJKsQ3w",
  "key39": "2B82ik8ZYBHgXPAHVxxPmr64fcyfU3TxGwPEChPdMRwE9dqeiLNHNknhGp3SPbmFTqdaRbPg3EnaKAo23jfLxrXw",
  "key40": "2KtkiQQuYQLXQC4Q732mBrTnQ63ukjzbwUr6iptAcLgWLihJjN43J2dJH6DRZY4Dp5p5q9x3mz6ehnxtftbznt4U",
  "key41": "4CAne4hkVjai1wUUCShmdSsXUJby8SQjkzp2qYUDgRLnMbnz7eTQ8RhUzwqqC8iaaES8v27qkYBhAcUGCswTZWaS",
  "key42": "3cKD22QBDwWxkSraWY6hH9emjhHexC461HNj3ubzZ8JRocYcu8EwCXbdERg2isxuGtzNrBV96zywe7Jw9c3QKGaH",
  "key43": "2cDc6y9XG3qhbSpxeKaU9t9fx1vSmucQc2hLLV7V85aTC1QJ7uxptQTqc3SwwofPPxwoZGMobJXmTsBjJnQRWeKU",
  "key44": "5p6ipJpgVv9mx6UaQb3UAo9k8uLKCYvwJmk5Vmsh7h1dqiUW7AXEkvzKHgHr451YMwHQeb857HRT3DeJTrbjaBxU",
  "key45": "3a3wShtYcSWTawAhjrHyMpCGvFkMjHwHumDY8oFn6MfD7r3Eoo2V5tod5j1hEx6raWhJrjy12EYLPfRcUEKNCVpv",
  "key46": "5jRcBfJ4BRoS11KjTDUtLVb8NY4FMsvGXRAqyojZNPBG3isF6nkLwydGdB7iyZ496TbUxf3ov6G8PJ4zVJufXsKH"
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
