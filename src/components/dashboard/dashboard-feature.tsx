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
    "L4iNNDLH2xdkTbtuEuqJDotSW3xFb2xrs4c2AsuTL4mLyPhcr9drnb9NJapbfgChbdd9QsEBb2SP4V8FgwciTNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ga8ELni4iTGCrc7Tm9e7JGM1NoUsRkjw2iT41cTw2okiZDEbhPd19RdTgSDXURbX3TLf7Dz7pdSJFvUMSiEMstD",
  "key1": "645S8ovUwLUz4wfX5bynrjhY2pyp2rQ55U6FHPsXLPQU8pGGuRqfNp75tUeZoyUuuPywxToZc4XA3mLJCBiCt1aL",
  "key2": "g111Jom6F1uUouensovzq9LMdBnGNRRcHvHbMfC2kyWenZGEHWbJNJchbQRyRV9GG1pNYhW2DJtPZ2vH13CBWkL",
  "key3": "XYi4HVGYjNQciZWF1EedzgbYSKDcHeaJ7Erzg3g9dTLovxxjmME8MXhW27paeT1ZZTbNWTnnRBihmviQE8Nz3zz",
  "key4": "5WhPKife283TAT5HqXDFSdJoLGwaNpKV2a7qEdjm1hUhsBse8aYdjnpPi71bT17y1zFotX1HVaQAoYdagjpYciTK",
  "key5": "VKUgwXp5f9SxbR3EC49h8poG6M1mmMTfFKqxBodFF4Wn58hrUU9BhPxqrzoYLREAFUaHUFwW8KAj6W7FGwobwwe",
  "key6": "4JW9r9yrSyDkYYjT6ZKGk963rpxTvRoowkstmn5eMdadUVgbeXRkrABuNGAughth3f2nbr6Gvd9T4Ejcafb8UNHy",
  "key7": "3XuW6gKyWzr1CBdQZc44kaGxPRWHu6BfqZEjmhXyRF1ukBqVEvWXGwf8GeE69ykiSJmvu35GhG8gtwgdPk33FXji",
  "key8": "7BiXPvAWKPMB6MxB7FN1kzJqGGMyTw44MMJcsoSoPJRrf9hSPgnhLWWHxBNnRFUoWCWznLLERrca781rs2TYFB6",
  "key9": "3Uqd3RzfrfWU2DFnBtycdpm4gJJ2FP7VyFK7b4dQ1t6avCwTdTNZpvDsNuG8Pn8SuBbzaFtkbTxbgMQ9xDow1yTW",
  "key10": "4NMdtMyAz2byCMQXztLP4oGmzaWrpnsSjVLHoKEgRhrKCucWckhe4o1wwREvUyQMs2Pts4VrJEzMRHfwftrnCekL",
  "key11": "2SShj7g3PjcXy9dbyq2MQX27SJwfRRrUQAYFnXJ2o5mEgMJ38wfoLchMzx5yGuyt4yRNN1eA6kAW2ECTRE5y5FwJ",
  "key12": "3mLdPJkmDeU5WgqQYTwini544ZAJBB529CCG1e5GQQyHSBuxyYjaAQLaD5ssF9vajA1axzaEEZ68CL7KYS13mMiq",
  "key13": "23MeNZczzyvZw8rin2cgBtU1id3zViCvPXTJXkAoC89XwoCVcGJMYa2FTrXwGBAmeCAhHsAe6pj4DrXXeziJzxnz",
  "key14": "3hwZMitf5SBfrhkih65V4VD4dKMQRefs6uMyYZwuVKUzYz8wUZwPVskNwVwxJGVTDki9PXzWuBXg8TdFPmwKBAHH",
  "key15": "3WGanweYkeiPyhTYtMFHRpLT1wYh9gk8BzWFwJCN6JX55V4PLTx38MsnKsB8eK7tf4hc3Uqa8SiWweadqGkoKpQR",
  "key16": "3Jew512GqBd4bBgF8T8ah7pxt1c54N7NW1nQJJSj1ZgYjZtgv9RXthZhcZ1oexqTPppFGR5snpFzVFsyBKZXEZVS",
  "key17": "514NHYLg4KJ7Z27yVwLoh9tvpHuvvm2zqobWnjKsfVwyypKzrMhacoFegVK5emBPFhKLQbrB9LQcbYiPEtwAqfeN",
  "key18": "3XbUKdSCDX8UX7m898mk52TpFXox7AUbcvGQUZn2YvnXooyM7nNc93sftmVgdVaa7CAKSrTTny6mrFsp1Ff9fAGe",
  "key19": "3oa8BePN581JZCq3EqGzXnK3bVZhkv3Zdw8i7qM73QgoFvDyCRvo2xWWf6cwvGVQTHVQ6SaAArkx9YWWLuu1cA45",
  "key20": "5ibnuV4G5a4DxNSDMuDi7dv5iPrBqcbV5DofqSES4S7E7yJXfPJAaRbRK31qKEpaVGVWBiRxwPZJw4U9GAwytAo7",
  "key21": "3DsUFGNv3o77CgAy87LqcP9BULsEo9Y3EHvaKFGHPz2MDm942JjgwevcwPxjLDpa5fc9iDVmazzfN1XfLkciybtU",
  "key22": "5iFA6jVRxEHQWvnYprZjvKLaSuDuY5cqikgfRrEH2LvCQpcMWYtPseg2jDXK2oCkFdrv5Z9m1FCCg2eVK1nJxzuc",
  "key23": "32ShPZktpMUa6JkMcgzJwhwtaa55BfmiFBjVfKA8Eaes36xDDjcq3YjFjVzSgdfGZgoJNAriiEpfVDN4rMZ1KmT9",
  "key24": "4MxfvQiKFZ4P3H7MkkzYavjF11H3crYKKUgm9xVzqZAxYnwJgDWcdZu1JFawr5K5H2P1sdniZsvQmonvQ8C9qvL7",
  "key25": "2kCJzZKaesjbdVWowEFwMZCo9zDHRHefoEQGwUbbkipQajmSMuHkqBkeTJT5AYF6U3HT4ZPKKNCcpyVEHdNKkSde",
  "key26": "3SycFGtSX5kE43GiMWDJUhRNf1Bb5GC7QFh8g22aRPWYxd2LEcVd77NcDrtQnpJ1aG3MJVuoR2viARMEDd9FiDUy",
  "key27": "eW65mf9eMoxvrYkWdCFHNbCX4crZvzw9unm2Tm2GpSrvjWcdnPC4UE54LPba9E7rZvpqE3Cu76QupguPD8qhiAp",
  "key28": "4e2jrvrFngXv2bH7mVdsumF7eggYiSmnvFivvcduV9ga2zdak8uaW9dXjny9rq6AsG9o4HKqdTkXwTpfPpFEpQiA",
  "key29": "3dtXaZXjTug2ncSqMw16BCmXaCx1RDSQKRGaKaZFQHhvkrp6y6cfLxN1vgEuUcqKQckR89tX3VRgkDxQ8krMogho",
  "key30": "3VKosrk2MHmNB6n5EBmbYFbNVFhaHWNqUPkhsDS69DhaGf4MHcW6sxuRaJ9hFdYXCit9RBbU86ca2iGDtc4XyAz8",
  "key31": "YRQWU777H24khbWN5iN8NKnXsvsVkFzCNH2CZx95WJfC3w2fHgXWWxmnmovDSsk8LRqGkSMUk383yfS1V8U94UK",
  "key32": "5THQQToCyGMJhJiEg4Ss849vEitTYP2SgJVQkvp7pccM81MBANR29cF4bfEPHyqZJy7BVbbZVerqR5XbHAUnzsgV",
  "key33": "32GLxT3F7zu9CYrRitTsRN68QC2UcxMZWbi5DFFn8bqYVy4Shcr2Yk1TwRabgGeysCprrE6SLAndsRWrC7MCwHxQ",
  "key34": "2J2bMyaSoUxwxUst9dXkj4SPi1HxDV7tN4bmJf1sgXTwCFJYK6u2HKwnRaSrZdozrbt39G5mq6fHgWmRUFfFVfWT",
  "key35": "3YtEo87boManCkUHthP3vb9m6pN2ooc5YxsgAoWchnhrePRKgdpMu7tmJ5QnKHEQKA17Vyeu4wBQyAi345q1T7Nt",
  "key36": "3TyhGPZk56Ux52CTgCszZDcMv5oUA5Ji6gog2YaeCuRNFoRPHNnzyAJzGRCdBHSdSNMTYfRNsVUkPuxPW7WJCEn",
  "key37": "5hktMj9z6TP1HWnSnLNiAAMmhHyht5n9QHgZJLC6kgtBrsSK5zGToCVJCAu5oLGpUKBKANQSnwiRjVSTSWB5svmm",
  "key38": "o7twbB4ApYwCvtJPHYDgM5tCrW2NG5nTnGFwyGU2hY8PgKcKNkjs6ETJ3hjFu3C1ghqfaHZMD2yCyzfbRQtkNTD",
  "key39": "A7vNzExiL2ZkP1W4Rfm6usqo6mq6Wxn4Dg4NHxtMd2t4vfoGtt8YvgGZEJVWkKWHDVjTuX5zoJGCqhZtKefG4rD",
  "key40": "4P4XHdoby8ZzKMuK8duJxHnnSqCzkq6cmzShtNAhAFBnp5HCJcdgJ8wA7Xc61Gi3JHAUHx7bbgDgdpQyWeqshjnA",
  "key41": "HwM3Jw53jcza8qvYFjaahD8VTmT25zSk9kUbFAPW4XMArHxCeT6wCziswaiburtSTKFbmkcbqXx5mbuBjmjs9B1",
  "key42": "4atqg1JGVcVuBpYFAr3iNr4z7zFYVoZVSE81R5EVHJZPNZXt2RW4NtJ9cgtmdirkem7PajH3Ct1MzyYpXrGDDrxe",
  "key43": "5Lou8SL5299UQpAAruhdNB3TcyFJHQqTv1otBCXetL8S1XaZshpQfuxBCDgWSNeKywZowCFc4xZJKqbNwMCueRdZ",
  "key44": "2nYTbMCNgFfrbPazTi63F8ZbwZe1qvHSpmxAVyHk5wkbEBxBHP2745CEJnq2BNWP2xMqjue4vT2Ni6xKdCRj7zDU",
  "key45": "3MWZAmx7TLDr75yyQmxypwU6P64BE6uHWcmqibA1SMG2gHsZLwGkGz3LLNXZNdXUp6epLZYcW2E83ptdo36PmgX8",
  "key46": "aFSK9SrkA73NbugUaVxRF7nAi95BoZpWjTBbDpq5KxL2wzdbyhbCQjsMTPUDNYtdJg3cxsfGn8uVGF1muDzQER3",
  "key47": "38fHktxNJ7qthd17AMEPQYDfvM8wtKrX1raK1abFRgMVptLWFxbXHah9sks3HJULxHw4jUFJUpe8qZYyLpLCpDbe",
  "key48": "2GUuHmFz3TMtYzBSJVLDsdQ1fGNtc1zGCTBq7s1oNbKk21Da4ccD8BF7M3Ns81A3drqxF5jXouJgqxEqZXs6BXUJ",
  "key49": "3cXRqH3D8KyrCNqD8ruqgk4Xe4banmG38V2MRTFAts1ybSjLjUmMX2HbGvwkMgWKEXSp7LaUtWEzvVW3t5dnFUAK"
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
