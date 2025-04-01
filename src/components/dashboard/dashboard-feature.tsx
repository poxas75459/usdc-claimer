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
    "hdFNezut5eTuCiswNeuDdgv7juMTb2PJF3bqLvtGKU1bzVFtjBB62inyu57SYcxVRv6QYBFuyQiL541WMHcbLtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyV5F34724bmsJpeudwCrhrhbQmrr7wCfGRNJ8rk2ZXSZZq2jMEZY9cVZnQQP4FeyZAsLu22ZwbfKgXZ2easFYY",
  "key1": "36KDqRtLfKBnVcUAAXtu5tsjr59qmYNnGNdw9rXwNEJu6Y8hdknCE4m5ueqgKBjJ8TXYavxFf4JtmNUJqnWuXjSx",
  "key2": "38ztrhm2qreAcUFZUdxsAbnWDKTpMUXNXRa4d48gmGg1Q6Hna29vabcBrkHTfbn3x4NGP3SCi13SCKbRFWYFR4zK",
  "key3": "3pbdvMDEtnZEXFnqjJewKwuWXfbzPFhUZqRcKriWTHifGRtPyJu6rtzmYCpWkmuFnHMMaVA65DjoP1pxtnuYMAzP",
  "key4": "4ZVmFokYHMsNbjwGXSdyGBrnkXM5oGmvtJxXpiWyjrao3tFnAjo1newFCu9528uo8ehjcepgnjpno7pwYtn3pA7p",
  "key5": "3dbTWRroTxVHzg7wLsCofhT5R1Zwf3T17HAjMNobqj13QGFFFia5zk8sViWxEAmwN2Y2HSnbFyJ2ngwhxZNsMg3X",
  "key6": "5Kji8fcypoiH8zUyJTUnAeJbQFqCXznrNcvJph3LVAWQ4sLxjM2ZicAMi8eaGFKGFeNv1Gj6DX4bSug5QNK8ErMH",
  "key7": "54qzyMyke2RgCxikWYLqpQGVeXhUYNBFB3Lvgx2kTN19aRVVbW5rcjodPdkQXsWTRVi7Jsyhkf7PCBKHigoJmF7H",
  "key8": "tvvys49iQfNub73EcDygPS4MDtSgCCRvnwpf7E193RhX2h9jcCZzkYGbekUCcvJA1HuPxE1hRzQoCha6Bq82aKj",
  "key9": "3UXZen2Y3q7U83n5Wne5JFqk5V8zWXzpE18YEpYpjqWDmv64Vj3P95qYJU2FDhKwfXPYpjUens35KtE4Ta6gGF3C",
  "key10": "3YaBTwcCTJUWGN4DfL486vHxFh7ksbgTWjFdsgj3kY57ztF5ofne5wyx2pwub6yvXbD2KKPuAEa1mJ28BjQ7bTM5",
  "key11": "3pnGUSdXySdKyMHtxto1FpGF1ecJ9w4bg45WSS3FDFKNLtar7ZpjCoG6EvnK3CSfXymSiigNfS3c3MTPvvnfvJF4",
  "key12": "2u7i9JhkUrkcWVb1nxeJsvHZ1NUaFfAm49Jf2CWNfnyY1aWW8RoxWu3WJkuTKi3pW5MzxRxgXsZRwf3UZuRTsrJq",
  "key13": "FM18K4vm4KrULBN7RDqJMsHSsmXnvGJSgEJsT1LFVEDNX1691py8hzzRWbvR5LXPxABLb1D9d5TgHHfVi72WTYf",
  "key14": "3maKuNktst8B6e7bjU7CqoLwRnsThmiqd82NebaEJbBDecuibXnq5HzMwdYUBMxJgeKJST86zDD6wYfh3iB55DJs",
  "key15": "oVcFrq4w8JDDfPMkyv7z2fHCL3sZnYf9qZa48FBDDJ9XPq6eKqp6mYggkvH1AkxS65Ywu1yEZNnCR79bLhFJ38u",
  "key16": "qSqgFHAijhjFdq38vGzoi1q5iHm7KtKXcEAHsk5Dtudk9MCLysJVe43f9BtWsbdArrYLT7Ejjo4MZ1RDYw3xZyQ",
  "key17": "3UB62HTtDk9CnnsEHAKLAQ1FNTE4x2BugGkgHJWtV5Zod3YAHRFN22hD5dm9jWsisBUgY5oygqXDmiiQPwVqtLD5",
  "key18": "5WWGTqz5PvByXra9ecKn2SiqG1e5q4Cc9bf7VL5rYgqisexmC6D4WViuts9V4EdLP2RYpPzd2ri9PCzoma2n5aWh",
  "key19": "5uzvUAo86iXAdErdha8SpF3Jh7vYQsF9tYnrV1pkyHqZBCauDv7ZLw4zrLA8FqCq8CFMpQhsF5kmbi2NkpJtLk6z",
  "key20": "3moKzdtA7ZuHeiyZS3BAeXsDEKYxVbDvA2EiwdHGZkD2xwJWUJv6vMSRYJthXm9Y8oMsQXEcqjjwRZsYF6WFdTeQ",
  "key21": "3iTEbmebs5rDxGMP9VGrsVHn4Zsq9qUCnhMVwmitfgUv6qnpEcdJeLUMxySjUyFjChuuDLwodUmYcCzh1ni9koL1",
  "key22": "3J6DXQTLq3rQH6XNNiyejQvChNkzGNQ8kvvM1fyCfvrniQuLk4oqP566bmsuLeLP5Vrq8oKKhexBTbqKKwCtkJQK",
  "key23": "2sjH5UtxdJnu4Yb531kRR8zVoEJeQCunhjVGy625xdqeoHrfsHMXN3x5VvCZjVSbVTc9YxMFZpws2S8vE4ZA7Ry7",
  "key24": "4o1xQiDGKfptCVdAD4HGPdF4LCgkL6Ai3kTHADFvsZ18BcPu2atnSDp7bMyZonhdr3VxHfmsfkoZEjg13N9G9jmP",
  "key25": "2bbkfBErDwUfyqLDhsV5HRKx7eHF8FSR5JXxthVYLda6XzHUXaPygU7xxaYSaaJYEstfcZMyir51gwHvvs6RyS9U",
  "key26": "463rJbMdZtqezigzCdhueBUv4QHsx8fAekKGBnG2eYLpdPGL7uJ8GgyncuxMhwzvyMvvqM4qaXo1Ypkb8cNvqAz3",
  "key27": "5NwtHpgjSadBuyhC5T9UJwP9DfWeNPuErTZqosdhTwHMh5gSrMBxA56VXZXVoDMY79VRNX1YiRAE7vYntufLjA75",
  "key28": "2bYos3DqCAgdQ7vDFfopz45QkmTxwc3pYs34q8mo8hC3hLT4GLzWQf56fmNgECKAhHfyftTU37UMR77eCgiRkbv1",
  "key29": "4ojdXyv4WGx5ak7eqhgw4nqUcf92hhTzg73tWTdDtdpnsx81ToEW2LWegrPTSk8c4fMhH2eug2Ger2ovjEqaC9eV",
  "key30": "tGPPxAxK4CZBSjzrhuUxfhQEPARBZkuTh1nMFnEqeVoDmD9Akv9vfjezc7JKsxbhSeUb5JeKeA2m6ZRHLozj2kW",
  "key31": "5NTfwSx7xp26ULFLG8xVw72nxRDXqcjoo8GoDW857ERJqdWhFbxWD9zJU5SjBCYxSacTrVMd8atyJN718DSDzebk",
  "key32": "3N1qtzs4KDQqvnBTdfNtLxHndrrWDev2NxywUf11nhhZHzotv7cUkv3Bo8LktT1K4Yp9XRCURiQYcSNmPC9cYsVo",
  "key33": "224JFEkzqnQdoywRzAiE9GvXkaWiNJRVJsvXVxynzrARTosSkPBu6ZqmmLZcRHZ7x3uhhnYjvQUSPtBp25rbHYEe",
  "key34": "3Y3X6ccfECRt6Pe97GCH6xzZqLzz3CyXQyXJgFNoBHmPxRuDmzg6C3DzqR1KVbkdUfcoaFCmaEMFkFjcVsHarbPQ",
  "key35": "595haAjVx3oShFeahnnhGgVH6PMUmRm8E2StjK6GP91bknA4TmD7CSBaJQS2YVUxicmL6zb5yENYNZUpNhzexz4i",
  "key36": "CTBszHdMS9uVXaT9AdVtFMcoe8Acim8Gq8swS8znWLqfXUMNgyxfsuRWKKSaiAbqgGVYsFEUCZJfBfVc38Y6D4c",
  "key37": "3Vwnvr6T74bBFe78LNfrKcZRC5BKcAVsdRphbPzsBMafbDYHSCUHR8HEEKhXhXEmLCKMjCdWT7EUiMuasUnZAJpo"
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
