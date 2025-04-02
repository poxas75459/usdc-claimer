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
    "c37K3DvEVRzgzUuFZ6GAk5yVQ5yBT27cz2ifLYnBtQbfP46iJApfkFQ42gNyWF9Eyj22XmrGNwnDTMiQghpYYFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhPBy2JjVZ8N9NKPKD3yVHDfYT2MTF5eJi8mgWVN9fyUcgjJBdeSxBYeEdoeWm8nq1zM3ghua6vM7Rb8BsJcwyb",
  "key1": "ns9Ujbc46fLUhUt9LFpMDxsBRdRqvGvufc2QFMaAURXda9swDNg7LLUFw5eyUEt4KjAnsbLN6Hbx8CfDUQuP12R",
  "key2": "4uj7wfbA2urM4263LTd3n7gQ1yFdnA2TZCYYYpmnhxBgp1FsgkmgyjhBS9tFjmALoJ4WC2tnFTN1hknuEAJLn3wn",
  "key3": "25CBjpYmuZHD6pAEM9ngumyQJhtYg9CEDBQtKvX9kQrgMWWND6ehjxhgMA9oU5R7amSdPMFx4iFLpSRd9e5PjTgd",
  "key4": "2yPpEum5d8PN9Xt5RH1UqLvat8LdGnzVekCKYaR4WiZZ2SQCxn4kp41pXSFhyP6iDtEqdxegh4484fPcxCqU287g",
  "key5": "5i1acvYwNQVfAragjRQdyf12qhyu1qXDV1cTP56QEm6uhnRU3ne9q9wGTxKYawLqrNFK6sFAgJ3faLhf22vwRVA",
  "key6": "2A3wCekAsaMoGAGRVMsnk35nKko8Xc7Lbqa1yVSWapNfGd88BnddrmHbyfek5qYJFV9tJYYoxWRWaoLeM2U1xxEt",
  "key7": "HqT9MbxE1CUzdvWTPKkVpTxJuJsbjj1VkajwrW9M31pNMRVcjzavxmdyHpQ4SAX44T6hRSEmzt7NqxdfysSKcWE",
  "key8": "49P7YQ2yZbr1Be5H3zKizF9FnRRzdx5oYLzCHgGihkN4PnnoJnCF9VFzDx6hthh1Z1aYpFVk4LQwSLfNZJW64qzh",
  "key9": "5bbVwjACZGb5cYjBLp5ZiqpCo2twdgp5JpmbptaDGZac5Jm472tdqvhMDoVGfE4cJCaNBCuNRLgJ8RfwjDia4Bkt",
  "key10": "gAm2MkQKFWVsgUBCP339J28ouTxXyY8dg2bvfxvKcUo1GLrqZYzDNfZDur5UMmyHNXZjjcprgB1Nw83ouWKbUVj",
  "key11": "281877J1y1ojdPDtc9KgLpPgg4zVd24Bb3vmhkd7r5zaTMosLucT3bPgu6WPXBh2pSLuwUBorfKqnyPNzNWRhSdA",
  "key12": "3GqarviAfKK54gaBYd9NKt82fWcVCHs8smPpe8zbw1ukgWjuva3V9wfvZLkWd229LY6ZdYQLmrfFVTXb7RiBgERL",
  "key13": "241J7SgyLrSFysmiCc8gKyRSeh4yH3tsKHTiUSyCXBiTsvFmSPgPZ8PZgVAqNTNMo4jcQdwwdbSXAPEQugDLgYW3",
  "key14": "5yX2RjiQBfsX4jJC2MkRuMJLG6ab1WVQcSVoXaCu6WinaAAxMC5Xcg5nzwC8mMVGaQinwXfxXPaS9NW2SXmVsZt6",
  "key15": "3Tvp7SFzZY1jfnBcv468eQWVDdPZNbDSSSJaMjZW3qoEv1ZtToB2URhjG5er6ASMXqxWaGiA3BJCcuyPc4WfsFPy",
  "key16": "CnB8Wfyo1aC9APNdDaDGzt3q1w9DWEN7RP3QZwoU9RqUXnWpwDrjdooZwYBqLNgFW52ob5QPTq4LTpNuY52xLZu",
  "key17": "oHwbHxYLHNCmcg4i36o8vkUgRL9xEBTjTT6eVkcSTEvsA4ssxeaLcfP5KZSmroauJ1yVoP4W5JWUcdaraBcdg6K",
  "key18": "66ZsB6EKDECoh2pp4zzQphf47J3P7xkanM85GwoPjxRqFQBPPnguBs5aVCbqYpErvF9w1ySw4eHkbFV1BxjGHp6J",
  "key19": "2v83Bxb7aabHjFQpfXMG8c2XXgziDWuHeVpjkJwfUdkrLDG7j7WLv7KsV9TTGGaRngJK2JVTd366BzkV6aKJFwdo",
  "key20": "5QBMA21aTHCv21o2XrpgAaXYzr3ejDmcpmQ5VS5vhycSRLUK1wrT3ficxwU7rLtuwceYdJXDjRSZGqKBAeSYT3Jp",
  "key21": "D9PYXsNx3TZDPddLEkhiqxVcV6vqqXQHFHiJLvYcCPfC5JRk224xRYFcDKRG6mFdVjhU23dghhmnUdS5gqE7vfx",
  "key22": "oypZp3Z7cbHAts9QmHKGTnckxMh4on5bCUc28YHZFRxMFM7F7ER7fdbqpMSmxqFvnQYbXNBs37LJg1Zz5R4Wt69",
  "key23": "1gedzPus56ExFtDYxEyfHSSWsWmnaH9c2iwX4idP9RYVkbPQtxzaXg3HXe3of5hJSinAjmb9zn849x3YwKM1cEc",
  "key24": "3hWUyW7ypVoQyRXKoNEiSmoSzkALpPC3hHu58s14248xLcHs74ghu38443W5WvX1aGVwCcTxvnGbAjB6fWtJcFgD",
  "key25": "4ruW4oJhx4s5teaYe2gqKS8bpyRkAbY5LUikinN1FaJQRGvhmZW8xzA4zVKeybJXe6XUeB9KQZ1tuf8m956LWDKd",
  "key26": "2aQ48SScQNQdvEXBHBywFeHxFMuQ5tiyYwhH3VNfXn6k7pRVumiAYt2pPRMbT4GFsAn8zMQm8xUM6XqoLhoKBaNP",
  "key27": "4siVU9W62kkV2FK7gUPo2hHRtdTkiMd6TWLAft2a4KMaPhZL6wQmj4d2Wc4ZHPvY7n6Ct1GCsMYqPDDqG6xJe4QE",
  "key28": "4bK1CGfazA7Qc3SoyuioLv3FoNv4Jrkrh2EVsLFqfoHp1ipcHoAswhoayqMFmJwrjJzBYf26RRLRghqQdHpRYuLF",
  "key29": "34ywRzKaA2BYZKyNBRh632AcJ8JRrgfQv87PUNWUw4CJha4b6ZXpYs7DrGoaN5nYGEtbjymZexEt7skb83w8cUSE",
  "key30": "tZy5ApTVfhS6fyzxb4eBA7TLNUoXfLG3eapHVe1hrL4h1YMB1WhaR586mPgvJxHCFHLvaPxjYnrezCXtz72nfxm",
  "key31": "58GEpBPwZv6wZ4pKCjKqG5R513RHqjqoSrB7DCF1yFXiJisXLcepZoRj8TqsgVWTd44oiagqxSzfTXkcfYgEmwDT",
  "key32": "2ZVgZsk2QZDV3ewmns1jVWNZQCjkiVJrsoXUs67DVgeNPkkADGL8v7gCSGToFQw5GqEYHkv1MogiLc83HHGVZGbr",
  "key33": "k8VYDF1mQ3vdDudFniLSCDcyeTvLoMCS2B5VgW1nKQxhVxoiDGoT7WjiW5JUVt14KA5iX7XSUQzgMj95eAkdUVp",
  "key34": "5Wwm7WaSHiRU2YsXxk4zLNbDVsPN56ff2HH4suVv2NkeAZPejp3bLRfh75VhpzSNgjTztedYGkwhwX2fXHGqeTqo",
  "key35": "5x4bwMsRYw8ckaX5PUn28WFNZeXnAKnwyZ2ZF54EBbCJvn8AzuSqJcumK3aGTz7Z3ZzkUVT5xTT9eicMZAuMxMaq",
  "key36": "54XJ1kW46GnMUDgDbajrAvC9zJDKDEK1tkcPcA3TXcxoEVPBZ1AJnEbc8kKnQvwK5vbX4jHHpLqDLu2vsPUUU6bg",
  "key37": "48y92rssYzQPZHy7BHfQjdfpsKGqdxqbEKybS51nHyC9LKWmLeMzJpgtuGVyd562rQoYNbfyF5BBgQcezFjx5BeY"
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
