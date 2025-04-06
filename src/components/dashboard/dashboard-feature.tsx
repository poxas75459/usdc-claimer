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
    "5wxubV1vwuxHQTV8pNRP3S52qT9KkHav3NtALutv3CTSWCfLLSfEPv38gRTqKZBq4Tw95DTxBpj51VM9uT3GimRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxirTfwLftrjn8uKBcbM3Nhvke5Zw33NbeWuTGLrMjr848JRD7U1saMmQuB5qhEv8V17doDSHAt3HaSKQTN94Ty",
  "key1": "4C1rmJfuNKo8fmzHayfmu6s26tynwvxqGJbGomqLd3t6j9DijdiXwhE5t4hcb3VUGRg8VjUGMWpMR7dvaZFVX6rk",
  "key2": "4ybGSfstJzJY46oRtFMo52DwosViUBB3HhtmC7dSxQoQeidSRnK89uy1d7LnQEMskBpmQ1HdX6xyzDyT7dgkxXGR",
  "key3": "5q6dSupx4WujmpmsQJyZ9mAsaNyMnLHgesNML3B1eJmFxgKXT9c7ZDnGV99nd5MuRLdbfA7M8y1LHbSFQzuKDTt1",
  "key4": "4hSbKfp56Md2pJ7ULXK5gxdz4ncsLvyqFzVdHq3ChAJ3n5GpRATMgEJafHJKi7ArppuQHv8FtWwEMQQXc7x7tkpj",
  "key5": "5iXGATfmKRqEubyefmp7S1ybQ6yuShuYZQ1cGGz1q7KGobKfCrbpenPiyfBAWEfqnUZT3DCV47UuP7FKTaMTjpio",
  "key6": "621Ds2o9RCtpe7sqqx2cWB82JwickAwCj1HnXk6idJyXhuyPinHxidxeWToXcUPTp3LW1Nfs5K6sRoLQxf8vmgAX",
  "key7": "4tig28c7bTqnnc4RcHNi53KTU8GeLdxbecgCf659zWEmb8LBVxEPbkNXGcaxXUpP8xwApXTkZQeBxfHKG9i8rL5R",
  "key8": "2xnj8cN5JRHapgEozR2LqEcvt9r9SQiiv7P6y1H7oMD8mwzqnFoyTr8bHEoZrnchdyUwT77xsD4oTLPoVWfZFgb2",
  "key9": "5gtpBfUMxbyaJBWCSUCWwhkgGYW5r8roRgruuWSDRcVjxkX3CHoEybgVmWJMve84idj3pA4X16LMht7jSX8XkZov",
  "key10": "4F66d7xJMcFDkPpiALPVP9UZNM7ZLS1ecXe4WMyBqZeuBtmH9J3feAPnjg7sbj4Gea6saFSRisLXfnAqgm3VKzc4",
  "key11": "ALsbr3E3tiPvG94UdhAfpBF99j4LTiWvCo8LgL1tc5ztjXQLByuQ1vMw6bJAz7iRWgwruKUkZ6RF3iZ3bCnJnzS",
  "key12": "4pv8Yiashft6vqXE3rKutqxe1r6Bj36xbXBgyV6y2mqqYorp9EhW2MBG1ZgTFBuwMWh9jLjntYdxMwsuwaFK9nY1",
  "key13": "3ecBzRiyAbtEGBcJAWns38ePn42nTw2j9qJXsNQbgsimBFNe57sx5RuokyEhovD2dBap7xz89ySM8Z2M5vVsQeXD",
  "key14": "5vc7cQaY4xpHecpCRzLAjX1s73NzUAgP85euvtXJqY9Fg91pPY2nYWxTqqH7mydWuW5h5nmuzYEbQMCE8L31rgac",
  "key15": "2GoqxYXcPqHLTH7mNHnMVi64MQpKojDXc3prBUUCcSLSJBdHdbCFfHsHxF9zfDvwAEq6WJ2k6Khrq34mpwC13uyq",
  "key16": "c538Geihazt8jiZZd4eAdLB9n36uFnMabPPVP9zrTBsdaypbwFuoxxXPM1nkDtq1Yvivh12xS59NtPA6QjqPc7v",
  "key17": "2tzaAHyJDc6sVbZUfU9jTjgHR4ipV5NCj2zVNMyBkwMgyMvJBqgpjcmQK8q8bFTpyUcKjEbjPNPQATB2QmgfvG5z",
  "key18": "3232oYHYuiv52aekBPQS3EVmGj1eskmNFvHb4Lzy4dznv44jVMiz3SpA26Nh9WwTuYsgY5UFZD7Bfh9BdwQg4Tj1",
  "key19": "4CUmiesV1WeaFU6rhiAw9fRYuCRsDHtmrGMMg82U266UkggkYa9j9LYNSigmcdZkPKe9cySHqfQbYwJfe6xC3PsZ",
  "key20": "47nA6KMSAzcEJfzy6aJJFUtrbiet3SScq9Rq6y3K7xJs69QxDuf1C7Hcf3VozUH1S9JJmnJSxftzFAqXVCpSKtkA",
  "key21": "5LsuGpdukG1SCEsXHNaVdGq2r268r4W5jNq43vBAcdeabAqhz6rCbREX84Qm4rpDnWy9H6zzmXBvBLETxKUHPWnx",
  "key22": "kiuTj5MGJDP1N8bdTcPopWAe4XfDCFdq3buFw6MC93CqJp3xq2Bk7NC5hGGcy9fPbfG2Vq2kAh7LHHtR1Wz5LsZ",
  "key23": "226vWXkQVEVXvv5JJ5Y2Q8N69Q3N7BRrb9tXfjiTMECq13tzyebddiDahWkZwZKPznmsJi8ANoaaRR6B6tLdHRAA",
  "key24": "31csko3dJjxkLwFASxBvnHBo1UXPbB1A1WcLFnEsGj9gumhbU4V3ftJpF1mycDSc8yWDoNPh6fozgTx1xEzQTMve",
  "key25": "4dXz3XZeJEsrMM7gWk1L3ZHBPxT76H36aXSFrNFGFkaQXCdbM7hzK4SaeC6beJCiSeRqLJTqDNnsrtFiaJ97SHpX",
  "key26": "2sKfC8cNSgCXsrBm3eUria1mmufyLkvXGsFw8HD8pf6tpCS9TypQSSGQhJoXe1rTAowF7mHCbTwL8uAN8NVB5kCx",
  "key27": "BapZYkqZpfuKtvKJURX9Jd37tBau3KXH5qeFxU6kFQAg1U7oA8mTqgjm5ubWB5fb8U8e9fUiZVTnQSAX7mA4d3D",
  "key28": "49bTxosCNASMtvNaVKcExaW8j4aUBVZWPozWEEPLbbeDKxFiKUhnbSNijtkivv9BaHXWQP3pS6LgmwvdWFuZe2TJ",
  "key29": "HJaV37vZFoNLbovSW4MS6Yta3qfGtxt6F2X8Tjy1PwrMLzudNtgqiv4eaUvcyTMFESRXdoAXEzgtqRwszBedUk7",
  "key30": "ozqKiYWGr97bc6UH3gXbofZ9zaXZkN1QjKcFVzTyqGJhgV8bXWqQgrmpJHWjfkhK7FhassqK8owgLsjCVHMYb6P",
  "key31": "41Xctw3SnrqUbRpXvwDjGJVwPBgmqMYMCdWYAtVZ2y1VfHizMvvAGenUoqFmmdN8jeidczWWbGZaZJEvFbUz8D16",
  "key32": "2wBKXdmBX7mF3U6uFbHJAAgJM5SjraFPDVgRM87hcFbwywq7VzdCSkDAXNH7Aj3xweCwttPGTM4F867ubWKVJano",
  "key33": "5MqBEWoNdfiLjcLjWiuEmU83Astfo2ndjBPwo7kwkrowKKGe1o3NwYsGN4bARdk4vT6uYZ8t787ox6r5sxb1oL1g",
  "key34": "53wd7GeqqeTb7PAE2CiCEd9QiWot37hGCeRKWA4NQvHgRM7CSUQs1U4xrUx5gKWGkji43MztWZVq9JEdK1poqTH",
  "key35": "4muiQj6RXCjtTwqZ5p1NCHcdvwNaCFXa8tWbTok2JJ2eogqSaMkXRor8bnwYHmNekBJme1fWgzLXmkFaSpd8T4KF",
  "key36": "5eVa1EdxPMvtyrfBpTeemdaNCYSTuuydEDYUzkp8LPBNb4YEk5DmjcgKjUtsVyzZPhJrLRHcA6LMcfcaBcZMV6kb",
  "key37": "4A65xnhS1rhqJN7uSNKf8NQXENavSftfAzfwCZseAzjUSSzdcBpy2ecpzSjNKmrHSd9j1qS2UUWppZZU1hLVyTrT",
  "key38": "TpwWZLewD8zBNu3AFSrz3ceRTooDzJtW9rXb9xfYyFTR7ipKe2Vwxabzp8NK7yGCKZqcjQrZ9TN6menkTbt6Zyr",
  "key39": "2xhA2Pg6bzVJxv1mpTNVXtZseKJHx1r1vatkc5pxekBt52PtERYPL299aqCMFqwUnoN1vWp4XHsqndRMEGoKXLP9",
  "key40": "2Z3AcYNEFwm93rZLJ96BRw78BZiGwqkJS8W3whjuUwCNAGhZj9QGwNDnbdLnCAcTuTpwawWgJHRPwym1Kwr4JKX4",
  "key41": "2wAvPv1HDAkCc6NHwhTbJpP17DZKvHm5h2acJWRm5aERHr8b7J6XmFSq9cD2sYo8FEkTmok81KsWrS7MNbHcS43o",
  "key42": "5YE7ZijE4u4oYhry2uNUqGPaYY3E8ZM3h6y8DcX1u4DKc8vvwYsGer9bnmriTfoE3P3L8V4yCybikBPzs34LP866",
  "key43": "5Tn3QJYSPDieADsKY37TtM7PFRsND9xh6QQyDQKksQPEqWBzFcXmyT5uJZfQ2k9kugegKUbDX1ARyNi7s14VKewo",
  "key44": "4xi4kceEmKAWhKqgfXZ1Z6H3BvPBUDrTsB4vdFQ2a6QZVbxHgfnTVDm8RSkRQxgCvJGrQ8gxv2KrqADLT2B5JVFg",
  "key45": "t47iZoVKESxWnoMY9KGLUV2vEfbDoJkJpvdGHkW9nLNGmcDayg6G8pJzAhppNamyPBPd7MGPDDCqjc8FrBrAtdm",
  "key46": "4frsEFBXyVgzwLEbSnb2JiiWzKm92f4zJ3xw5Jw9EKZyiVF3t48DqfowFJLen3oGFro6HFAvUEGg4xRnhZWaEgyH",
  "key47": "2DvDJdnTF46YpfTQidSspyfG7xWZWPq4NpjjWzUfAdmPNn5Jnc5yAHx5Ry68n6xHrfTTyEgEj6nNgC256hZBFhh7",
  "key48": "w52fZLDauLjaaZ9Vv6F9re3NU7sCJEzDwVrxzAfz52MrTdX8CtDKBHxPhWioz4dLNSgcsZidpxCsq3wv41JhLs4"
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
