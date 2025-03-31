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
    "28nN6BcoAboGRzVTbrHQB6jZ5CFepNRwJVwS4mdBjP8pGxxQbf1yG7AL3jCrn436Cu1KWYbJbbWz2DaDeVerf78z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uMGZi3sPnkkg3nJTxAA1McdFZM5hbPSpAEHyB7rzXUAYNtYt8JMLfdD8YHunGXfHFFhzxoCg8bpyfZ3u2L1cHQ",
  "key1": "viUfBzDYa7Qq2JpwBG2GRrM3iH76uhKPR6CsGtxftckBE6331GCWDjSvJpgVAv62TYBZ2q5bhgwMJxSs6j5NCFN",
  "key2": "4uWvviWfwqXQa5VN9BiynYHrCDZvvy1aiprt2wjWAXNqDr3Wa1a9WLXLLHKsDj5k3D31tv2sEYm1YRRAv7Jb3qAP",
  "key3": "Urd9RdbbE11B1HmWw6XwLSyqF8KxEf7gjkqiRkYiiGTP9BghjVb7JXzkN8BPJYPFP5GesLfurLvNim1Qtped6pd",
  "key4": "4ovaTzux5um5jwAYSsxpd3d62QDCTHphcfGvoTGGzXiYgTXHRiqACwKaufiPfBjBWrmZr6uBNqBTZogReUK3eLeF",
  "key5": "57gceLyKQX1MXfxv2sYpUyCRD8QHAJoZAyEAX3NNAkWLosUvBi8agvPrsLecviUfNKrBLypvAmg9aVN1b1X56SyT",
  "key6": "4Ut8HdVbQEB3fMJwi98M6g61M93LMwokwm8QfwJdgdS8QA1kUraRWemWtFTnotPVuFuoCrwFRKcKu1aSMvyURgzg",
  "key7": "3bph8L7ajfLFnPrVHfPzzN8KKx6QGsSbfnUr549FL9RNeuwnCKJA6RNrXg12eQgQv1whSv9c6X73jdqSRYJ9v3NF",
  "key8": "5m8NbPkoYBkjF33ptwMUsRD2MtzFNMays73iLbmcPeJS3ekB2Hgs994TMS6fcE6L7PneCzTguiSZkhnL7VJyNxhJ",
  "key9": "4tcTmABdpjQTG5wNozpYodzoxS42HT7XynD2QSamEDEn2YJahESwPHFmz5EY1KvLNcQRn2jL8nhsdCQnsHwGCRWB",
  "key10": "5pBwXEMRB32xpdKAmC3TDufjzqwAKV6SemcWiVr3wZ71itqdoNR76DeoKdK91gaR3tTwyCD1c44BECgQ7wFQYdRB",
  "key11": "31t6NQKv9JgiugDZzDW1VRVAsRC6EcXBm7cF37LTmHn1FxiMnBCqGcAS4ZA15X26nAg2Gu3DZqAoL9pyAeUwH29X",
  "key12": "3tT7fERYUnicaxqrsnd8ADLdxnEaF84L7RvZHBK9DmFF9LYEoxTPcCYUodWRTHkV1A31WncX7hgw3eTmFU1M4JZj",
  "key13": "2F5Gf3zcCV3aTkCMH9RauKbUGxWUU7mC1A1NJgfeu8YoYPRonRM1XmZgFAzTb5SS3J5ABYZprpaQ63q3dQLLLG9X",
  "key14": "2aHWJF5ipF9o1CBYJj3CQtx4JZRmqFdrHtFsdaeC5SaC5ngRaKKpVMQhzLZrhMKAzEPm5mRz3xkoqFtx7oTdZBsc",
  "key15": "5TASSn8DFkJWB1mQHF3ZXmjGo4baMFXbt7gf3Secmjt2Fq1wkro4T4pq6iG3KPupGvBMGjSLWVZh97FtW3J7rdwi",
  "key16": "5mG5eH3WnZLShHfzeY4ht8iNKmBzuHTybKDyaWamFUPvSH7uPzckwm3jSECqug39DsawkP8LEbZ7DU7YA4FDZ5dd",
  "key17": "xML2LGtVF2VN1k3Bim6aMYFyZumKAbiXNiHf7PYenKax7ARFqQ8r4TgwZBuzTGYXZDKY2VTDQUGmWa2Zis44eEu",
  "key18": "uMMCezeTWQBuCzNy4yieZNuSvCbRzEF4WTE2XfPzqudWVEHqt6vnmRBH62VjLgJKEWLUWaZiwTsUkWRbWRxETgG",
  "key19": "2kGWmqyZa2UqjWGcAa8JzXMi3MBtwVXapfTHvNtntedsV3wWRzYDYB7GjXnV1cRL6qgroQZVtWHAnL4YF95Ygzgg",
  "key20": "3LpuL9d4HtaK7RiwUarqtdgdvziaiAQsqhkyLrB9kTbAJ2E1BUFKT3qKK7wqkkfW1BhQW4yxJv6pY6ZRv3ydQ1Wh",
  "key21": "7Qn8nK2TuA21oE4hupctCRobVcemtQ5EP6vATQ8ZrHhdr9w2H6NuypRW6bMwKAMC3B8xqNuJBCiNMxHM9RE57UY",
  "key22": "5YcVNTpENMJabgKuT16Fd7dK7MPraNoPKPDDDk1BFnM48nnqMq48oTWnnSqoWMyGbFJfL5eWCnk4GqM9wRytmFcQ",
  "key23": "4UeoZXcys7of1j3qpQQBNnxoKX4wLfZFQcZ27BG8bpfwX1qP9dMdDxc7Dvaj6YUQSi1FfSuhhFexqexJod63kchp",
  "key24": "2c1Z2VhHHzSjfotWifHMnmWcaesVVE6xjS5hemXZeJYodE4CRVEQ8B4BY7rVQfwhpmwW31NPbpYndtQxxJwoHYTC",
  "key25": "VpTgNVaGFz25AboJrB3e3j3ZrxUp1F5df1pjasmF3VBuig9eiYQyyC8YZ7omTVefmeTW2zTjS1UFWWroxiHkzTS",
  "key26": "3vpGTAxVbNvvb7vZdG3uUT1d9vr4qq1XAnLniMBmrh2PEHHgWiL8FxfgSfwTKxBeJgVLX5a4JhcYWDzwnY2zHeb5",
  "key27": "2N6MiANe8ypMHt7coKX7oDXyQ5n5WBxatPgmrSd64dUAb5ipiC4Crxup7DQTZfmHTkhympG9to4HTuXTCFf5nThp",
  "key28": "5NRDaP9JzmMfg3KYihoVyuzetwYQNAV3imuxVngX7k43JkHE6fYFNzEACiG5jn2jX6LpPxMu9ubib3HajuhMftW8",
  "key29": "3JRWv6kkEMJzbz4TRLDD6wfyfdHx2tY74E8jfDJSRR3jDFCrBxzoABCphLW84jngKbDbewMg9To6wV1w9HhsS2dv",
  "key30": "z9GK5kPj9HUGzzynPwJ5VYiBPe8HTHTYdzw2xmwWY7MDujwcEZTSpMWhhg8gghniNEnQ76EY9DycXv5LBWzhtKa",
  "key31": "57YjJRDnZokqZZoHcxZJxK7kwJD8XP9Xm4wrt1fhGBxDwL46NWjeAiKpsNQop5UnJpu9AHEkvKsYrAQLiHR25c7j",
  "key32": "4QDpVZGNos3k2FEPNr9rHgFVoS817xPtDbLBkhfdqCbirYk3iGPsPD4D6mLkiiq3pXE3NgXWaR9WjiAbMtDAU5t8",
  "key33": "3TrghZCErXfbrKuRZ2cwUagDyo7BiDuJ16SmQYN4ghVZ4kb1dRArUSPuFdSDRTTPyg65GKuTx8PJssKyDKb47EXu",
  "key34": "4srDAYiKkcfYjkQwP5dn42oPQDa7h8KRtTtnJvfsj1p6WvyfwdKvkvt4kZ54noQ9tyLyf9iELCPtcngtu9d4RGqY",
  "key35": "4gBDKossg89fKthnXEv9xeRcACHqzPz3Ak4uGoDF2WziLhKfcR9Ju8nbk1GGLzavAw8SnhqVy3gK9vcX4rf6sdQo",
  "key36": "5jWYmfRivA3ncK3LAhnEUHuVQ3a3h4U8xkiVGxTLJn2SPpAJp8PEhsLK9Hg9TWxmAAdcR3urUibn6CHSQd1VZf7f",
  "key37": "2dc3Dnzx4oiqaveeNuhcsc4qoTiJNkDuvdg2E93bPknJnz1T9fJWSDs3V6pcMCraL4bYXY2k2C9a8o7tC6r1E5vU",
  "key38": "bQUcDTMtCfudf518BQWwocgKZ2PraA5Cy38yamfyuAu6kVSvZWjSWY6FGzgGUXN5moYf48XkJ5uV4mq4zbX2Poo",
  "key39": "51dCHJ8Ct7wnCJvZzfzcp3woAByNRUe7Tk5g3f5PZCLRcZHaty1oAmAMM4C4NAMouWkNvaKQM7sXeRVXcMJC99hT",
  "key40": "5AysKQExtAbStaTPjbaoEJjMxUE8CZbgHbR8ysK7mJEJSqpuGtofrwJhpZA5thHe5fFY188RHFdFEB61k8JKU2TQ",
  "key41": "UsDp5eWgfgug1QCThb28CHFTUgwHyfaBiWdEHv1w5Xgbed9gvsZxkKMpREyepMyFYNSnZ4pAUXCYoy22BS5mRHw",
  "key42": "4pQ4qoXxBHskEJfeyoGwFTFiT7JiQDmNQuxcQZceW6zAUreGeiaVZw7iTSsffsLujKHDqRxUwEaNyHZY99qizaVN",
  "key43": "4qu94B5nCuCLK31R2QwbN5RkdiQoYfMLbpYCWATMKMxz3d9AqQCpYspf9EcqYCUGn8Qstzzm1gF4tR4FQPKPnS17",
  "key44": "4xokrmUpziSfLQDjemQz3MVyaVSZf4rkLYFjNiiQxtrucqvQHrykv12LV7DVbb8Pf1rz3BJAJMA2wmimuxzkaVi4",
  "key45": "e6NnF8R4xfyTBnUQ7YbVs94XmTz3Mi57h3fB3A7jPTgo2cAUX9yJtLwTfFWQYGtHvwprUfre5fLDSdSvKi6rP6o",
  "key46": "5Xnyz2YBRf1KxnCtQBqRRYVJoxGCfkv5wE17wtVMYwGbWpkvy6oGzXzvRV4QCN5zUX6zGDaoqusa9GVdhWPmkxtf",
  "key47": "iLEv9utL1h8trdonFt2UsLCAAo6fqfjDnTHtFutwTNAzFFq6uaAzimfDunX9SJ8Rn1XfmaUGAZnye6fxpvPKgGK",
  "key48": "5axS1F1vixAiAxNRk5RBCebebBjtcTU8hkXqpmqh5B6DXAvuWvAt6ss3h1Yk59HPaXEXfhz7LAcZqPVRyhywJFUB"
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
