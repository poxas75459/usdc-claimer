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
    "3mFaY9HMBU6oe4UwExusgPMPJCn8YAQSVfdnLwYD7WeRQQcCNjHPVYH9oNobYmJ7yWLKJAbaDPpS4yxKAkTbMMBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkX2JSwGqok1Cajf2xKpgrjNi5KRR5ScNoHqDfEbP8ci6JAsCRVx5q51e62NfCaU9W5QZX3R1BdhKhPxedx61aS",
  "key1": "4Z6RRBcJgEoc3mSD26V81CudYqJyEunjHH87tJ3uaCQchC5TfBWzMKBWT5rsQv61WDGpVNDCaurmAQp6peBxJfVU",
  "key2": "5eLe3rX8BTknvNCNNsMFUSEWu8u55rCnRoPj5916YDCtL58XpTDWwn249HooCpC6gSsaSAHctDmLd2b189fuaHKG",
  "key3": "2bCzq7L6rBySiXbBp4hr7RBRrx1ZkNtLBmQbffkG9qDFivwtdruvCM53VYHYSYutLpkmTz4WwQVCathFEWfnkP2d",
  "key4": "2MVZskyeHZTnGbxvmKqNxVSAASpxzm8ZJEK4YfeeNq1ERXDsqGKUAdHGUyd9RBM8AQUFvmWAm7c5PNU7VTnsLknp",
  "key5": "vzMkQUWu4Njb5wGswEEZirqhPp3dTzhRsJdnLpnGCyc9a5Cwp64kHebUJgqfF8imZbt4FCnnzkV4AexqKYKyg7e",
  "key6": "32bJM5QJzXGfKbrXs4NNxty4tUwPjmh3XDtEesFVFmuYoCPs2UfeTgtJTix58yVCMc79phZcoQx4dRiK3jTQ4vkq",
  "key7": "zQPWP782uzKmnjJ9QLkKtHLE3PycftJ7JhLUSUJoZTiCgtj1UcPGTAyB2oMoqhtb6s5yhspg6C7g5hqp8WACnrj",
  "key8": "49yxPtmqZRQ6AYH3ztsfnGtGFYB3hSLQ2ujcN89vQTpPuUzpqioBCnVAkLFXH4GBjY2GLijSk3s57PsoUafrGyW8",
  "key9": "xpdLbv7GKXguDHTSkMfAK6qn8UVUjFdTdhrna8FNsuQZH2HzrPHaKY24arVZXr9rvaEgr3LU2CtLd2LgWC8B71z",
  "key10": "3rpzgekiXMg8kDtc3TV3VdD1r35e9KHcFFd69Se4t24WViouEPGKoapDfLMEQhX3sNTeHu44ajcfWpSsA5mx2hoz",
  "key11": "5TU34o2zakKq9KF3CYBagdECs5SV9iZjLAcK9VMVxcseC7cx6rChpwKGFyhRqtzszL94GrWXfcuxs8icsBF88ijo",
  "key12": "2oyNMKuEKcwbikVfMoARQmppgTtNJpJKdZo35DLPN6Nh9rSbPTqW6mfFvV6YTK3EJwk6Fe3mwLv1XwoJwZ4WefSD",
  "key13": "tSpfN79Tyq7JSF1Vya7Dhbkpr8zBVLfbtWBXXMEZ6zHoGr7xiwrsMLvTR5sHbcKyx3AaypcPNNnJrgV4NHrf6P7",
  "key14": "62MMWWESwxA9ybJBQAaNy2CoudMHfYTvQTT1PpBDiDKXxP8RVE5roUvytGUWxDmd1RQpEFVg29HQN91nxpLVPwQB",
  "key15": "5bnRM8uE3Ug94maDETFoesPBNszbk5ZSByuLbCNhrZSHfdrJqJUdKSaebPhjfW1DH8PgRkyoWcmDUPXCmfZCgEQ9",
  "key16": "35nDsUxBzL9fwkb8xJNMCEXpwjtaYyWdJXQoNHEsduK9jqWEweAWUq4qfNtonGnno6wR4zxZGqWVqNqYQ7WN65EE",
  "key17": "wx5tLyN5u1HNeM4Vf6TdkftuonH8PpVZxyimEgVmEnHyEkyRPhft6v5DUsjARk7QySHmgxG8VZVqqvP1vLg3dKS",
  "key18": "4qHMhdxBrdiyfLPggS2kuDMMAcZxUDw9qjBr6df5YokSzMQVrDw3N8eUcrwYcBY8xHvKXgb31X2Zd9uT6HMXyYdV",
  "key19": "3UdggMzbcQ3E5BzNTnXYdGpHSuKtcLGvxTH8yKmVjFEdR7RZL8qGoS3nAHu492pGbp9Ve9daXMBrJyGcWamRdJ2h",
  "key20": "2QcxLYm5s9iN9BqSrveg1RyfZZTKYioTNxt3Wb6es3LCLWYV8kx2jqXpyjPyftA3UMifekU5mJ4idjoikwhGhGnd",
  "key21": "4B74FovBSx6XheLxvZpg2B4k536Whf4UadPLvCoz18xUENdVBjdYG29TKUAxHctG6h6t9GL71QzuRSG2Zboq5yTf",
  "key22": "3aYGLgcc9TBcdFuFfQwVsDvzK9erPdx7a3LGNFMohh2g53nNCF62R7L6UTtQnneyy7A8iWt8Z9YkPJz2pULrei7x",
  "key23": "5PQCt3vK34vwuKLCpR9SrjKERJjSqwPA3X6VFYbFqzkeZ9QaT7MD3ekV2E2LSo9SfVkbqFbUfBzLWhcLpnqqYhwk",
  "key24": "49yTgfuzvsKqzFg72BwdRZA9mgc2Ct61vYzqXTZKkV33Dn9z75MEaQx6uCZ1u2dx7bzRGPoFez4iK2JShbRoyfLP",
  "key25": "5ZatABuK5oUoj6RmjtwAVouiVz3RN5fMHoct6GUcrfeBsHrfBH6zLTqyrcbL7XY7UCGPnTAR2zniMAfWVow6PLoG",
  "key26": "3vybSe9R9n5hqb7YY6hUNwNaVxKSFVzgqfy4KRGjohPvXnBQbT4NQLjmiU6obdhUGZy5mzGS8WVRXtzfWmriVpek",
  "key27": "339tc7d1u9LkJ7zXibTVGzr3Fb8aYvirdyxUEUSuB5kjVqAXriWhT1VDP9GihWYTeZoVyWKAR7tiT1zKKUB73XJh",
  "key28": "2EvwVruNdEj9dzKjdQ8HVQ5xxNdkviTceGaG2QyFvz1jL4RDM4S7Ko1C7QB9m6VD5Q35EVXZ4co8M2VwhP12LFeP",
  "key29": "3dnWp99xicV9HFBJ9pWeHCKfLBdBQAtYZ4az1chctqLGtuXW8dufUNvyavsCZoiasjRanUEJr1WnM5PFjunG7VeA",
  "key30": "R7c4vtUeKegARDpbERoz1KGazmujEux124Zxm3wPGDvLQCwb85Vx82Nd13WcSFCGGdM5cUY2vKRK8Ce4PWYk19b",
  "key31": "2CfpBnGn7hEgwkn1xiq9HuX2AyHEkPzGHwVWRDUMUM6ii8TotjzK3G42j1t13HpS2UAnUSvrYyA2Cxik6NgdB8Gc",
  "key32": "4jvHpUBgLCAMSFDW94W2Fg47nF7NJ8C8NWHn45mGcyV87bNSxV5fL6LALq4wK2P9ttKEGQRQRVG7MdVLihdLbkdH",
  "key33": "41izFH1Wd2CgTpBxHQYZZeudKf4RMrisJZrTRsgn1RzEftspwaJuV5b4EDTBmZXuCdrHaMK7cWqCwigvqCvPWHt4",
  "key34": "2ukDNDsFoLML3N94UnnMoXCmHNXaysmoH4CPUjfdmLkxfDdbjYEpyvpYCauy2F67mgMgTDMYABAwGTupjZwRcCSR",
  "key35": "26Jti3gb6yX4vBj9SMNdpS7qecYugsSeHmSsGs6ttDUrsEPWEjR9f4RgmWhyNRp6zYBFgrdkWenLEfu8uK1yyANV",
  "key36": "2kM31tTTWwjpmsYVbnhPxCXwcsV1xjm6sjAtbSFn2vhVd8i8GhjuAhHKqwzvqLG3EtTYm7u3F2uc7vD8Dh8MQBhk",
  "key37": "4ws2g3MThuPhqiznNYHZaWk7pk4FP8cvLumhka9qfYmpcdzkXCKFzmqjAy6PuvaTKpxLV6itoQhfNCDmgsey5Eeg",
  "key38": "2Nsd6yjAx7QifcGLaqTT5nvC29ddpLLWhwDG8Jm5MMNhDue84aRPTFdZ8d4YcKKXDKufnYrsA5nXvLZH3Zy9g9UT",
  "key39": "wptYXCp4oNCXRTQ9fegep5PrnqoPa9Zd2NRFWn58EPKTYrJjz8rrdMMve9Csgwwe2fcP6qRLt3ty3tdhZKdwuNB",
  "key40": "2txEzZBUPpbePS6okM8mLa2QQABBXCJEUS5PMc7gTazkSnP9pE3Jxph2uynE3RZAfzcwqRVuvARkwd2mTrf9D4qY",
  "key41": "4gxcTq599pJarSsTurkpax5A9tUSVigzF8qNhCFWZzhkCq6EwVQaB6M3xvXXmKhVJzb7Zen1LZj8H65rrFhHbL2h",
  "key42": "47N6GN5Qh45Qz8tmVSztuTpQHP74so8N4EHe78R9n21YmX5fGnuQhZ8NCBjFAvxcQWuZAK3pseJZ424K6377wL6i",
  "key43": "5tXfTxp4To1NArCcoSbzrh5ZU5SDhfc3vhRJnKepUe8rD6uPFjtRL6fqqdyW4en2BYSScUJueDDmDwUfgNbsjUgT",
  "key44": "3JkZyGFYoJaaetjWyLkwJijbSKjQnYBWqUd5gSb8wmV43tj3XbeCfmzimMZ3jVLsdyd8bKFnK5HpSfcoMRS7LChu",
  "key45": "2J25DxnF4nKKkosvqzHa8giEYDFgkHurHdJQRPQghDM3ge7KVXvvAbExsLvA74H7vwYwaqNjLu81f7tpE82QfN7L"
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
