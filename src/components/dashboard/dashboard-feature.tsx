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
    "2abys8QfRvbBuUZjo6Sbj3pGmBD2vSLL3tBrwdo5MefLPv3r8RGRaVUXARbX462qUPaSG74eYrbmPpHMLG9so7Bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BtNKJzktYsCdShTSB3pk8f6DMASro1gUb2s5mFoS12bez1A9m3QFa8weqpW9ArWNhW23MQU7vwDob3BzrGGRbu",
  "key1": "47AaTYZKaWzakGpPMZDK7q1WgzPqaYJTyKq3Em2pngKSHsfcAKnM6LcfuCEsNz2p8nLFFwmjVZhinv5KpVfDQqNr",
  "key2": "26wGKrw8nTH4udWeSTknVArhg1KWHBWgDZwFM5KGzWZ6q6tVMPgDPzU6mQ5rKJxGkhZ3wdB8hEjsWjXJJCP3w5AS",
  "key3": "5s6RMQqFopa9NsrTfcqJMEMyBHwPk2zvGNjWXxtUN3uxDuduYaUKrJqbzQ9vLg5oonVZFbMVpERfcHJxo3NgzKZG",
  "key4": "4t4VCdhrdP4GCdURmYSkaYfqy5h79VVeNbteSBXszsjPC9NZxjrXFb8TzVRjWcLL1dcD1zbw6yysHYv7sWjhBJyx",
  "key5": "aWfCeSUNTW6KJRF8Z7rvPKCpov4Lm8kvoUYuaCc8CewxzZN38N9QHyvRxhmGWVJtgJM2QbaEjfNiCKHYD8rB5Bv",
  "key6": "3CWqryer71JV8gshPughpL6zybjVhEYdRKUWjoHqUa7WqL4erCuRbcP2B85T5FJWKcMi3znTUzCqLebbd8haZNmQ",
  "key7": "2bsovJ1LVowGGMzsV9SYCTuxCDJXy6EYcuWcw7bSbNfjUommwWM4DbR9gu5uLccatjrw8HmcLAoHRFCQpp3LxdJL",
  "key8": "4MNohTq72SVaqQHvmDdd1NzXY3WAKbJdoNYsJbidjaBJDHhrfNrLaH3jX4KoQ33KwM8Xu4mBnd2aWGDX6wUgMZeh",
  "key9": "52x4ffq2WDPxZEZz7PjNGBSXo7XisUqsWHDZAvo2TdtuXzf4kszu6T4jEm7KxP57Hwk4PjN9cuNxkuYowwDerxFL",
  "key10": "3o24LfvLVWTWYBS4phMPppVj82D4XgRMRtjJAy25EDZe8YyXDxP16hGKYfiaSxGQDUuPpzskK6d5nTKnJuevNWSb",
  "key11": "3hV9kJMhVTszPVwavZHFF5e71kaT6ZMLgkGeyRi3a9FG4tdG2ogQXu7dpWP1JbeFz8pLiynGSPuMEextB8Er5NYL",
  "key12": "5KriVB9AUkYLNCMLfPx9VNm9JuCmW8aLbdDbzGwjeYSp1B7vZA9uBDMxpnhwDnChMAnbxxwuT5WQnT84tXW7G1hV",
  "key13": "3aqZGaPDZ9yfCroqZQq8AWAryaz5Mna8C1Rgq9yALFpoiq1pp8zWTSLTYRvBXhqN6qsVSc3mg7cDyEWPWNwhZQpy",
  "key14": "57jRSsLhBbd8jfrMPE6zZ7ov8AZhRxLjBiwt4TRRnK28nHjTJ34WUXNqMeXb8XykkruvmLusbpaFCoNj8UaEzHF5",
  "key15": "3BvS3eDEU57ncaJM1WZP6wEpJBFLLnHAZMo3vdiuD6ew7KvparZqjMnSRS8y2FQnRAjsYiQ4gQocjZtCRGrpyj9x",
  "key16": "1YdBhQFkcqKc3eMXSxDuvdVpRSC9RSoWunh6CJo1RcCk89Mu91ibKanEwa8N5u2jX6EtfqTyjWoFRwE4zyun9ER",
  "key17": "4NgU8sZ5K6oes1hto89ZGUiXvpX4qjFH6bTtY1N2zVmx51uegEHD1Xpee3dzbBQvVvNWhnDxVZEovfGazQiq8LcE",
  "key18": "3cDTuk2D71Cwa58SMoX6zzBkAVxYoDiVYeexRGSztjMVezP7XKdKbbdRma5XzitBco1YXLq7Uy7yWAy5Abh3HvK2",
  "key19": "491DLa55w7zBUB7XhYgTw2gkYLg24GDSPaJ4yQotCbLX1bMF2RYfoY9RppmMktX53XFbMoAmFT9aRbuSy97rH2n7",
  "key20": "4F5mgtRY1S9Senh5oZmRdSAzoMkSrpmV9VTu3dg1Vi6LHMAQM9mAoxzHfcnN4ADorNWLeZcwke1iffEjNw2LJrZT",
  "key21": "3c8FUQNe6YikGHoDhTc8z8KHALT6LzwQHyLTeP7ij6cXwjsRbbkhwKXYSDwQ9aeYHmaAg9HvYaukeameVyuubsMS",
  "key22": "4Z7itbyvMyfJDZ4vHZSGcETTw6hN3fjBMgU4TkdShsjVcAxpZUKoDXoLYd75yoS8RpSkMxDu2ijRZHqjvVZp6NPY",
  "key23": "hwbDkLRurTAZPvgM6N9yAMLoxCp5XdmCM4d17QqmH5F5jW792r7LmQyo9nFB4DFJpjgWRiFxYTJxQeBaEZC9FUR",
  "key24": "4b8M11cFpEFNU2JeEibXjbS5AHBYd1WLpmwNZZxKfs1rXbhpSayqHMkZzqi6UT5x2RY64qE8CYC2jFcoMUwFZJap",
  "key25": "3GKgfDY66w8KSxfu5D1XNbpCEXHgMz15C7nBchsykZ1Q7365DkxjvFJKCZnyAWmy9vR9WWfGXGsvRxaACHXFxHGP",
  "key26": "5jQSYe5Ai76RW6A82sHdV6EoEz6x3MRix7qwBRQh3FJkMsZnKoGMMTVf7x3AaoD6urJ4Riv1BD1zYwdXZPDHyqT8",
  "key27": "4wytk3DTZvxg47vzBN3CENgjtVNc4eaAeZmUFfxQ2PT97MTjXtwryDvoWqEujRPynbZs4Fk9cn9kPqUcyYvucUSS",
  "key28": "hq2HmBEAWjPw3Sj9WJoCH7DCpQ1PcUPUSZjRdKMMW65tJwpUjGTVsnuKuGS8K5nbwruVpxjeDnZTdoANzu3h4fD",
  "key29": "4jFqA75SCpdSbDikhVPtBqd7hyx32A6Wu1JgqZucNP7WQSjTFyBMcM1Hgm71aWVMxBJ79DGrxneXgtn1mX5iQZg",
  "key30": "2zYHHeckVJQyHErfk2CJp2uvuu3pPX8fc5isqz72TBcgyLFmrx79Zj8wWQTkG1H2AcrkddoYyKRxK8XoCHhm8rkx",
  "key31": "2GMQcZM1hZSL4JCQd2i1p86b53XtERRp4bkbk6QYRE7eT7A8kdhUmKGr65oGZpbojdaDdV59ap2MtbT6NvdgbDN1",
  "key32": "3RNuFfWCrNVKLWdC3YZasozuQcz7JvZKdZv8ArxtQTh94FEgDYzVEKCLMFgJ1KEDCcgvYJKR5e9pfZT1U2CEsUgY",
  "key33": "5VNsZr52yPRxzFuY1TiDZREgjPw2syLeTfCW8cyMAwoLJ7ABoe2VgzPNMkXzTA1TPb5hoBG8XhcvxaE54srqxETB",
  "key34": "23mapLP54Jrxf3iYFPWbxSCDEcHc2Z59rCYmC5FuAcYRxXKKRmJ4KXbemxg3nA3HSmb4MgtxSM7AoPiWVQHHY7XV",
  "key35": "5hzZD9LiNHa1BimGUUr5az5xzFCbBkLp3LRRp6amEJYWQgpuXsFN9RWoo2FMgz3FnqsDbcVQ5vH9aXhURXmL27j4",
  "key36": "5SKKpLaNEJohkapnnnpDD3NwZRx7GmvT5pSPZacR6axpMCSh389c59hpSyZkQDBbDJNLsSD5Wut4HBzHXon1GRru",
  "key37": "47BR2UwCbpaGBr3JfX7DgLDjCfEbSn7uWAaevG44VBCvNbxdHx4HuuHz9NHAdcDMybNdGTtUBbWuxymqUp6w7DY8",
  "key38": "wcrqx2Esh7DSyc89Eu7YcNqot9fCRBqKynLjr82m2gR1cjEAkqd4ucGb18ByMm4yj4Jna8629Lfbw25QzkNnai9",
  "key39": "gndJiUJcQQZw1egcF4ViQtYoEy3zpbFzzdDrNc6kUF75cJKWQSfW1PwLqp9B4bDnRreoeVBd45rpR3kvmPJ2axm",
  "key40": "SAXvwYYyfoaArNRvaEChhUUs1RBviDN1Z7RoQXJz1v78XepdveT4Y782aCfw2ttr6imCcEA8qkfk9hsRBQQyWp1",
  "key41": "WLch4HHyYimypPyx2ARt52Le75t7DVWWxrF1BBuqwZNFXws9WbtWwiCKNnd271uGZgScDUST9B5y3HSTPHVvbHV",
  "key42": "37UmfyYU1Co674tGVzvhdEyfBJQ6vTdev4wWP57dsmxbAidcVBbGTyM1Lx922i1n8c89aYNaXLd1dBNUL7yJiFdy",
  "key43": "3b58gNwPfjp4CpErRAWdn5UxgcgYAdw5jjmoyEQcCtgFSwzSNbMUK4ULNpVGLQTe47PnArsoNge41GXCqKxMfasc",
  "key44": "5yPnowngSSdV2HRtpBRbobrWmaGoezDWjXHT6SEBfSyMidBAsxP3sZhGKBB9ZH2RS1tRWL4DTULeS4cypKoUjWaE",
  "key45": "ymtTTapCkxpLhsSQ3nvda2kJuKDuQVDDMEhQ8RzRYm1Z2ELQJjXzDBuRSoer5BoP72E4DuDydLdVNt18GBZ4kfc"
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
