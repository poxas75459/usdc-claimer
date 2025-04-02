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
    "2iG1wiCekTMhDgmia66QCfymeUjKSXyzKxgsEoKa3u4mHoUEQ8X3nEui1TX1e9gPexU18SB84eGraVRqrvNLhh7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYruaJxTpNhim5sDJtbTJEGR8aj6pYibnJjrRtaT9QBmzfEEErNZ7tuLdUw841ZWjTfocNjTCz7TBCFnVyBNpe",
  "key1": "4KfQCtXwLoxF1YLjhssu8Distxtdn6d1YauUycJCSu4c1tdv6u12o6HNdE7KmLtciMsJETzBtNT5YybrjNCnmdZf",
  "key2": "2apdrKdtL8uT952uqpE5Pg4DGfbnj5eGuYYbCPSBSDEvQL2dq1XiSDD6BpJ96XfggZLPsBgopBGLp16iAtbQzAA6",
  "key3": "3V4eCZzda14soeMc3kQWB16sYoeEY7SePwD8azDQBv9qP2LwpVp3C7u45D1GMJSUSmtmqsHFc1h2MWzdduHiygns",
  "key4": "579MF6y8dSqrRZG6Xsy8ejPjsNMjahdY7GBkjRuaPWXC8cm5EaBBf5osWggYdg7ZkmsoqbJZLFbWLN91B8DwNboH",
  "key5": "3JoW52pXoXYYcTQkzGjnyjhNwKEMaqfg9V5D1cfqnPErQD5kmQkqc1eKXUqLrCLtj339YK9BpyXQCtkn1qUqmB1u",
  "key6": "3wSfJEucvmuS98Fmy8TZSrrFbsTqGYjavinJ3Go1goDjUL8Xm722sQSmhqPUdNABSZ7kkpGvZKuLgjMqEWcZqkAq",
  "key7": "4SntfPNV4qwwa6HrKY1u6KneQ2qPdK72wqLdUmnWNznthqj3GrRTFyiamdm4hv8dp1W5zWboz5BWt2gfj8VTEDYo",
  "key8": "nzdzgmpJGKMixo7pG2prZLn7KN6coX2v3FFeMwiPi2EwYgGJfsDxUGM1qMFLMTDEguE93Q5dFWfsZeJVnPyyMgQ",
  "key9": "621jLpPwMQsQjD8ZnAfgzWAVyQTrdNeSTdtggAjkqTDM26uBeMvNhYtcStyXcc7Ef2tU6vPfLKMdZCxVE4WNay7V",
  "key10": "4p6RtPZEHkuPNs89pdxByyYyTqFZsq5oc3w2egtPdysxt5ApsDko9LqFRMeLyKrpyFctEm9nAJZCjkALJq6q8LgT",
  "key11": "3VtFkDnt5myUyRguauoRaxAbbzymNhp8atzgyqeqcAFoTXkCemyaVcroF7mTajbyTJZAh8SSX767FxcbTX51hcNJ",
  "key12": "2A6cmi2f5yW6gdCVz2fqtAEL8HbVbzms86X1AKLzgi1uP8Mos4QaTdsvAZWuZGKtfnzPp5DfSZfMuHXvsxBHtQUf",
  "key13": "2zV2cmgHWhB4msq1qq7qN3MvTTRYqPeneMokG1GVMrj1Eb5QcTe8E81BY2KwDEiBWmsmikXbzQXBQyBBx8eGHXiW",
  "key14": "49VTPtieyDuvEuMh9RXfHkBwYUjt1K4niMwc3cYhZ2kfB1aenZoxQDZ4DqSGd8cavWYY5Hk7LmHPn9Ma1WnTvH4u",
  "key15": "4My9X39Vwj8ijZmhhmWJFgeKbayyB4sgZ1FZEPeXABB7fhrUuP6pfoJjCPWo4Wt5gDoGaH4CaS6gxpuyPeEBpScm",
  "key16": "3zxBDFotrScEbq9VC94sAUWsKnRMuMHTeeSJZzWH7LReTzpnjZAAEHtkumQTYAvmzypNws7WxLAAXh3fLzWNacqs",
  "key17": "3fBqRb5aF8YwvjxGmUxhJpoCbQPVd7S47N5rmvdD8nm2z18Aqr5GbzDLTJ2oryBA4Ce7BYeyyHdKeizZJAux91iM",
  "key18": "2zkzqefkLXnmgHYNMjJ9aBQysME2ph54j566mWwV5FJjv2cVw3Jw6cdjnr3D7fnVpSQtJRgQot9Bdn8nYint3fwA",
  "key19": "42SLUNxxxqJgjdgadszPeMZXbuSWgvHd1Ky5YYquoKyuRTZsyA5epbtn5JhRGjEGBPk5LbypNJh7aEiDNgcRdZQv",
  "key20": "59fnRSBWAYKNLq4Pb5W8BtE3hqCrHYk64AvFSA3MrZQBPnFSgxYPtzEDdq3G1QKpAYUMatiqGK9A67MfBeC7QbMm",
  "key21": "2QSDZJL7YmfhRAFZHBp5rj6A1FPx54nGvAe7SJDgmunBSHBEojHWAGjLEKxfgd5zhMTkjKn4PPv5YKS3Y7LbmQGu",
  "key22": "4jBaevAvWwgLtXS8LRU5ETtsW2SeJYhDKqzytW514PmEcU5sNHAL9igP6rA25nbv7MGFEFUXXgFVJJoq7Xuk28vD",
  "key23": "2Eq9LNvwnewWffM1FmWbfT8n2jxWowbyNmcVh1PooyqFPkM8rfTtoXKqzDtzwggdgHdbZhgjEvekMwjdD8W8g7EW",
  "key24": "4eRghFSYfGigsetQreW3hGFcbPBc3VDLFWgyt1HTL7FVBH4C886FKd2wqSjfKrkqupBwQxo6yqhG9e3EHzyAtDDH",
  "key25": "YsxmVrep2xffqzzShyXztaV79hf4TWEJXzKbLdchQNu4w3HkEmKciu9v2JQ4GwN9S6ihSXJuwt81GrXpV4Lvtw6",
  "key26": "4jfsSPouqHukSTgGp47huRWUPUyK3u2B8F6dpJb924huYb3yYoHhE7SE5SN4t9EAuzYkvBRMivxnW9eNAFGpjVBN",
  "key27": "3fRVb4BsGyrfNUWorvjJ4QRKMghXwYhithbRmswjhnGS1m6d9Bg2yot1EZUCkZrmFJVAPgBcLoihzMxpwsqBi7Uz",
  "key28": "5XYMEfBcZH4jHL1tvAo8X286KeKgW22aod8AsuZ6nMfETjYzFAnw7jNtjydGVy8Gkvz88fUKLB7DZqauqPgRtCW3",
  "key29": "2rut1MFXfa4yy2pq1tPHpj1NyFmhEpnKiiirSMPVeGhey2nQbxurdhaaoV6oib3cotadPp7xvk63yZR9foNtYGiB",
  "key30": "54TDyJChq1qUDLYcRVjaJL1SCbs4zfcbYTghYoB4xeKqZc41HDHmKFaHq6na9z6JJrRSZA1ay6xCk4qzRfwHjmC9",
  "key31": "ETfHUxBPdvmKgKUWvq3LHukrYvcGaeKo15csJUQoKGhNWuYjuhNM8n1z2pP6bZ4SWRDn5tUD3Gufx5mjJ6xBjxr",
  "key32": "3bqVNEmKHjL38GiP6GPeuqs33QgYMnphHngP8nPJJgPQvi2hxwjAgnM3gjBmi5WtGSTFhZnzADBWpVjPQyvHrp2S"
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
