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
    "55426jhFYytXBHvSEJqVNJwxvZJzeovhFoZDSCH4eR2dTF1zavSidWBZfjRcYwn31KSZtCP5J8cErDU89DQpoAYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3sihPq45ubRbybctuPDHNAd87ZYZasgPQvejjBstTYkyH2vX59NKmn6HKfoiip5CnANC5E7zfGJEJN6B6BNxbr",
  "key1": "u2x4ABjbaKATCaANnSvHxyie6UZeN17yqfaZWs9TCMqd5KEKvACaiYJHW1UzkZuHAxjiTu1u5cmLFGCrRLTQ6LD",
  "key2": "3SWFGZTr5RdqEHewteydqEZ5m4F3k3ATYt7qTY4LZ8faibAzgYACjGYrJsK8zna8Wr5wcRwubKLPXARkUTXaRoNm",
  "key3": "2UDvSwik7RgsC6WismkSkHbc4kJ31Ej1Vn4sAckuKZaMoaMG4fgi5ehXW1b1j7cjcQrdPVmAgxZ8CPA5wbJHWkoR",
  "key4": "4YAz12jZPWR7JnQWT7XPtNsBM4BQT2Dv2Cv3TzWT6C15ezGZzCtoBZix1GDnPYjRfqubb5WPpJFs3WBfA5bSJV4a",
  "key5": "67VZ5L9Es5H3ciTT2ET2NRrxMSUnGY82n64V8FhKSu5kkuohemJBLyUEwjRH2G7cbzdffeLkmhPhk4BEQovC7WPj",
  "key6": "D2dzPF4aihT1KpnGxJ3AR3ZqkpTx8Vxbctbs6PwWtsL77D2qCnaVEiK6r86xo8ZmKkib1QXcJxAUjNomEnzctFJ",
  "key7": "HccEcHFXoD4w4nzACaQGmSDSJTCczpoFw2mrpf5qUtfpcfCfN8kTfNo9heLqXkuvrL9vNZpz9pXcqscV5RDYYeY",
  "key8": "5s7auFHKESfMYu1Pij41VsgixwZkeRFVLSoLCXMhFDnGD8jGw6GZVgBK1QM9LEq1u9NELdY6iJsbcG8KfapgMRos",
  "key9": "3Ew56w41GTNz82NHyJVp2yXxgGJgr112ZM7ySPseJhkNEL6NVStnJEuv6a8wbAZYwkfyVUiqHDauC9j3VaT26nnx",
  "key10": "zETxLuHGoDews3j94WeycsFj44iq8MuB4xQjrkveEJTFyJCib5ya7FbcFJx9xTKuaQrRJK4rKoi1kBioHNoG7En",
  "key11": "5WRrZhd7giWrGXmeHUNRY992YZ7X2wL7yqeeFua9W9bibGT618qKdJVP9R97dbF368PfHaD892kBxCGu5AFgY3x5",
  "key12": "2HnAzPD5zzRBj12LMh5MW9hAjEFeYEJb8pnLP4ztVQuejwNGyRYSngGaPB18a72253UhQ9acDMpFWB9AwewA9hKd",
  "key13": "hn5yMZ73TqdgVrQFMiKuhSDsQQitUHP5GemtGeUMEaBEniTwGRUKRCU4vVz1fEyqvfmu3Lb5xVpkhNfykDcXX4e",
  "key14": "4hLktRMH9qnTNGd4VeJwTN78WqkbhsCGqzsNofpiDZiJ816sAWXG2ntuXMLfgm1NYGzaWBirkC4s5geNkBSsGGG7",
  "key15": "58smiMGpNQbrN5GWB13X1B7n7aqQUWwvGrgmG81TC4zniGf3S4ERXuLvTPPrkeuon7gsyf6ozakDtAYJgELDwJtu",
  "key16": "4jhotWvLik4xMqSFk5DfRwZe7V6A7CijZUrayD83PjKo2DZAkAgTw3rJaQGTickwrB8fVhA3iyTVoX2EcjfUN9pk",
  "key17": "4v6oPsgqafJGbjzCccvvdihBGdjJwqWtZ79tZ697V3jVWyZJ7a1pHeV4NLcbK9YMxLMmqGrfdrqBJMmVrm95uQZB",
  "key18": "3i75xxxu3m7hkZQ7mR6Wsb5KqEcsUd2jCKhRRheKUn19auFpnirRDGppaKQoBjCfFkVei2CQBNSMJaYKHfHe5C99",
  "key19": "59KHge2qgncUCCk91Uh4FhdLNpJQf3eaMVibZhr7c1nfMzVwksuApMVhPBNBZQfLwk6DgFPqY37oVeM7nn4cQNw9",
  "key20": "2Jm6t6rVrNE67pBoZn2DSBMFschMJSMmzF7JqyAEDAyYbnr7Q7hyTbBW8zedtQa9cTMbNQeMnMksCrfTm8KvtX2d",
  "key21": "3HGyy4CCuYUaH1LXp9DgWhy2LXbE4KhUMaUxuw7YepYdRg1iqJoJpvZL6u2vG3yo12Zkcticg61YaaPQnB2HBhv2",
  "key22": "rKpG74RTZ53TJSa7cnPRY72ApmATHtDd7H3QPUyiKQmnZ7sNi6zb5Nb9uLT6b6Fm5Kgc8Whcozb2e1BFCxsT5Yj",
  "key23": "4BEtuZkEKG9CxNQsA1C3R22wYDGMKLnBZVgmwfTEuyK2rBZWS3LpYcFk5WzKYKT9sp6o3WXAgWjnzVhjZSHz5hZX",
  "key24": "sGhaGMZDXqSrGbSaMTzvqyXNoHhTF65ko89T24Yq57CsEqus6uke6QSG3a3uZyr3dQecLLuXChrBAmEYo8JAX1x",
  "key25": "5zrP2tP7TNbnVnXPJ6UcYn1Xg7CoWFfUHzq5qsv6dzo4RfDY39Q1Qw5FKp5faZrk1svWrAXmEjgjWvAN1CqupGDU",
  "key26": "283WtU6GoUPFh7i5PsVqbbPNt2amjUYCzTYCEY5WvvVVZC2X3hJVUFPp7eT1si7gY1nPXeQ7gYRBDevEyy4uc93F",
  "key27": "3tR7ie3c7xXKAw8nvGCnJKCPLun1gn9XF2trh3wiDws33AStmb8QEm2HY8CpxgeQxjvLnAe14L7oJPnQCCB2bB97",
  "key28": "45jRDHhzoLNuCCcpDfniNgLpYtagVxp6EBtmmysh9NQK5UQ8csJbUXuJq9JwkHYe9uxYzzG2odjwEf4gsYgW6dgs",
  "key29": "2RdeW1gicv6FhqsxYgdhbY3PcfXk5JCgxuKdy1thVNSusKdKZfrAVUeSrPjZgqdQ7ehS75VtaprLQqDkpBYScaWC",
  "key30": "Cq8sJo2Nx8rL2B9W7nq9VuV7oc1jdc8UGiQsixxqNoo8eV18DYKjzUfxC74yToHdCtsNe1NPce1bj8u4MuGY2Dh",
  "key31": "KoqfJVfAsfFe3s8oxfbvfGKchxFmfFvCFg3vY9G9bAseb9xT5UEMvBU93rUABJn8P7XiZpa5qFTFu3YvEAc5SEJ",
  "key32": "37m9KkLJBUqVWqkjS7NG9TCTW62MGWtWq4ndG6JwxMUimaCoaSPxrgQyYv21EDV7aYiwgq932GyQWVqcviU9fayt",
  "key33": "2gr8raj3uRBq6x4sJsn3JxgNadjcjVraGL7WVBHjSWFHfPoRcPR6QqhB6G6AWfXQ7qArS6csfGt7uVHGPcqV47AK",
  "key34": "3wgJ1vTbqwkgFkdS41xM4pSxoxEkRQ3aJG4doaSrximbizQVoFHfN1FHqp2itsP6gjLru4fK4TGRfa73m87qZgH9",
  "key35": "2Ho4MhnjtUKTjPWNm3gR6uTnuGFzKuNBkaZMPdtiPU39pozXnrgkQR6Wiz7RJeMssLYP8uPCgGp6r6ed7jEck41E",
  "key36": "EGAVvHpzE29weuojVvXBq3pk18hCaJLBPsj1Pq6C3B1YkmjKroZmRczZCTtcnL9eit1WUh2sLC5LJqM459pvrSZ",
  "key37": "5FdTJDeCyYGqvvt1QaDQJE7Ji77H38jtbD6v4waZn3kWWrY8QLCQzomgZhq7Hu73Hzz2rpJxaQP7gUGBVkSQjgmP",
  "key38": "4FMvKbeoJBtjUAuR1ZwgpWDb8HkjmQYMCwJaZic7tfTixNz49bFTdrQFbh9Eb68mHtiiQwzMRvM9WAHZPmD2UeqD",
  "key39": "9Rzxzzo8zi75hn1WxxJhumSczY1FNNL5GkPnnQjFcRXiS6613m9tjCRRFi7HghmfGyk7w61wf5LeNaVHb98hUKx",
  "key40": "4iQ4FuDQTKma4p48aRCDPH438L7fJYfGoAtCFdFH3huV4CcEgttQbE5hZiP3AGT1pxmPd725tt5GegASsEeMjYPJ",
  "key41": "ozmJBQZdbB29h2MdgSqf4ycVN9tHGumnSq9bNMqNYXSDJxSMU2TuUz7Rck44ZtkFTrkfBq355wrVt1oPAYVFuJd",
  "key42": "uaU1nrjTM4KTmU6EZKD5SKkyhHfaGmqMZpqskgLRUKKokhtJ8LCE4icaGL6oXAuGTj3ruZ59tCAPBxii8V59T4S",
  "key43": "33eRX72dKKAmo13s6mxoEDMzt1quNonSzCM8KULEcoLjKZwoTBYDkvSr9dzQq5ouSfe1uroDLLKKCjaxZVkgLLH",
  "key44": "4Q8p3isiE28Rmi7CcKALTnhv61RSKHHnh96SptaJKvdMzXGoFgiuzXPDukNSx2QqMyzVztWKaVuerfTxaxJfEfU5",
  "key45": "3813EZLEaFBRPCe5WPu31pxSXfnrLoGYTzx89excfTCrg6MQ3WYdZY2K5ey1AgiQ5HrKDt9ekTvTJZ6ZRB9vBicQ"
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
