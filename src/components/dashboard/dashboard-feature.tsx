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
    "4XzWAHcQrB72EWWUmpa4zMZZFQmo9uCKk2vvJpDSJY8b7WL3T1JXkFC6xWibJpFGtYgQ7F6hni5NkiMeb7tzwdYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jChyZ139ZghR6UMKhv7qVj9A5vCzhfJoG83iEZJr6bvuQHv5UWKoh7NNRAovNNr7KQatHzAa3opEXDBndQzk6AF",
  "key1": "2jTpj9KocsZ9N4mkXWqBhXSfzpR2ZYuHJENfiFxCGefecPVcndBFt9CoZxiyQgBbs31xoa7ZrTtHbWnzqkA8Po9B",
  "key2": "33gZmJkkVP5EewGsxyDXYaL19dZHhFnsDgA9FpanXZHPbApwtEaa5b9DJGbHVvurUPQrQxdGUv6uRwnyhkSiY8T3",
  "key3": "3yguwdjpRc3xs1XZ2ZS8neYs1PHUmv3E664oVREjSuzL9Xh2xMHdMv3twYZoYEQNVYAMdBKUr9F5ne2Z7tK8YZEn",
  "key4": "5gce1TVXfoyo11wem9nkV4wn2kBU1EAPiGn8DcEFYJbC9XVZMZj2nBhKrskAeDHT7StxC7KGoVWqvb3TYnkeq89D",
  "key5": "2s1iNQZpum7nNVPgCcymTVehJSm5HcVfg16q2WU3k71zGgRCWqTkpu9YevdG91LXhc81gcowaPLRDJG9ZETRhZXL",
  "key6": "4dMCSq3hU4qhdxKVifTMPvSVFxnVVbKSusjFZVqYT8XXvM5Jh2mjSjK6HSTPYUwikZi6t3iGraxHTUbwJDnbgTEw",
  "key7": "3xT8hEvfhAg3X6883fk1YXRxgtYTLQ6YCXW1YKyWpdvcmg89qT5Qbp445SdfiAQwDPGGP9FxcNqAE2Yz22MY3Xq1",
  "key8": "53439tSD71gzyr4MqTWX1cbo5z3AeGphMsTh3ukNtAbPjNRxPwb2Lkmms6sFQsB9KkQybUA1g3Hrzuwh1ULJeo3M",
  "key9": "4HegJ19sE6nNAmz3XFenhxgirHCQghgAzkLtk4dEpFqtk6rtDEX7CQriBRkfQgJDes5RDJTj9KVb6aBNPY9pcWwd",
  "key10": "WgVCeNynPLkSTzAZ1CbhBVko15uYVg5rus4Uo5pBbe2aawQjBswTezEb51iwbMMJcSVoEL8s3i1AZVnJcUWqd9m",
  "key11": "4vUWugAXezQhPkaucbHegj2YREUUJCdyHgwdfaZmLkNjuHnCqCuTipxQMr2g2nDeVCV3H2WXWSq5dG4QvHu2TS9d",
  "key12": "Tys1G6wpYTWAJxf1AMeYT8xXvwvHnvGTp983bLTrw6pL9dYBNZ8uEcznqoYondkhYMyaymo4FrFAtjkuKQ6sS7i",
  "key13": "4VrU1DsqJ5Qb6bEFC52N5z835V3EReoi7ujjW89Bc2QV5L28nfjCR8S1HjoEfKj2RsXZSwcnAtS3WSHNDDn1fQHK",
  "key14": "2NVM6gktxanxTPjhNz5pygHP5yEUnQMY18GdCHEx8gGmAVYZpo4vjJnKyEKTJ5SPsKzjmEe4XeFgDj87XoWw6h6Q",
  "key15": "2yTyAnqnUEQjohoY1eFvXUWUemsR55DuPS2vCPzYaBFjwQbVdZD2s9YQtZ2NqJg7e1PyKETni3rfFSqvhaUwnK4z",
  "key16": "66p4iQiipNPBsyr7HEG3M7dUwM3a2A15o1HMFe7DzEAgdurmHNEQB9TxobnZY28z4KeppMKsBE6aaQAeN3fKgjVx",
  "key17": "4HxsR3CtKtdXXf3yLiKtYXdpDuCM9riQbLnMPYy1bRJGj47kYu52sK5gHQyebsbDQc7T6Aq2Zjmzec9mKFiXR1NH",
  "key18": "Y8jFGxrQWqKyH5gNfPXCTgh62YrZE4wxPoGPYdG38c6WFtj7gWWxoZy5t1CpGKBw4vLzni2XGq8AzjLTREfZFmw",
  "key19": "2cab1gdFQgEQh1NoMGFvF9padRQmLuTrLe4v2sVAuYEbukF1b6BrCXyfwssn7Nw2qkEsN4MmghnnxjBoNCKgyxCD",
  "key20": "29pWGBjTCYKkPR253dVwa9Bs8zYrGv5yhJGm9CDsS8sPQrBxKZenMf3zf4xaUa4B5jW4bgv38ehHcodKBmu7YZr1",
  "key21": "SaH3GqJL5hF6AWUrKcZ1dDZLysqsc8PGoHA2v7fk4uncmxMrJkk6tQrM7gK1rXu8YovPdr4eQ6hnrdE77ELFzPj",
  "key22": "4yUh89sJJqk4kwfB5pCJhtd7ZPnJD6DvKUGbiK8c2r7EnyCvrFNSUHKdhGUWfm2bRWFJuvftWikFiFY8ujYTSBT1",
  "key23": "nxfGvUAs4QECHm5aepQfd92fyGtWV21yj6uyRXjym8srHmnQueyE5aJGvkL8aQGjdhPjTDyy77u5aSCHiXMKQy4",
  "key24": "2gDtJXTN28VQMBUqpQa83ZBmGCeuysCwozRYqia6LfF7ob7a2eXMnF3AxcwXoBvJjBVFpYL8GxUBsUaGQijAKXwz",
  "key25": "3PaZCQqBEw7nNLXX9XHk1iV4JpdwoNCAzjST1xPV7SuTZUHqBD7Vgxqc9PEneJvH81V2RaRPS3MozmKqQqx3Csm7",
  "key26": "Vvydj9T9hkzjijPYDUqAa4SxD1yG3teMD73Evi7PyoPmGK2FsJGTViU8a6CPwi8aT3HpavZ6ZhuFkSVZps7HfaU",
  "key27": "21wsdw8AzfjwcVosAcjQareQoEPidiBA74WuWuz8Ksn8ELkQdXsVndqmu8q3NJEjPsCRQuhSrrEViE3fNSwqgsfZ",
  "key28": "42zVL9ZaNV8VptvmNPEdxDQGxFaZjsuBwRRiASWBS6KBLRABVyzSEzzqTrzB8rsvFutjYCSJBriRbpqwM3MvZWZG",
  "key29": "5HEipDWMcQL4Bdijka434GB29v5oPsMFJcPgjvGs3ete63irepkeHwaRThKyKSDH8zVd4yz9R594Zk5Dq5c4sXcX",
  "key30": "24GL1SHFGnug2M6Xp6EeHaSvHRqBhdn3njga5wWj3muTXc8ijj8yCZp7MgwMps9vidpKDaXfx8uhvHkhvjBNwNt2",
  "key31": "3cT6wpvhfumeYCDz7KDpi2msjudiVSQceVw8AkNURP6Xuqc8HhPWTYCvuT4gCihymaoT7h74A2DhRqurvVaWsVs8",
  "key32": "4v41GNmAQd45Zzm7DVmf8AiRcmgQAeHVQfXmRHa2pM31mFZ2rZVDSWqVmjGaoZTStprQ6AJGdeAYksLWefyWXhaD",
  "key33": "sJ3hxgjERCk3Se9kUDozT3A254UvrARjeTJbWJ2qnQn8jnhhfhJAPZKM73EVr6drC7rE7bdxx9Jjht3XFmymDnF",
  "key34": "22YPQNaBSFdbaMMamJSZpdfQKaDT6sf4nJhvyP8wEyTHyDjnkXGDjH9zskc4N7PjWxGf6NCkgFtNsw22bx4eD6jr",
  "key35": "2q9ZM3FquYQ3BoSJasJrbNW7go2juxpDcMwYRkfNTPXXJECxJ7ByKEJ3HzXWdqxD4D9HncwXoizzrqW2egSFvohf",
  "key36": "46vaUStU82Gaq87PcMm2mLYcX2z6DNTVkJCZUkijkkfNkjWUfJm2NcgoEuFYKXTMRhtZAAR7GZcX8zGmWbiBuwTf",
  "key37": "3GHfms5Xaj7xLt7TfVYbQkp4EVbrEvnxytvxJJFCuB7zXHdAvKEwwDdnPc3MoPSRRyciP8MEKRguDyBHjLSjrNj6",
  "key38": "iTLFxb16ah7AdfvVgo1DynwrCrMPL8cQ9PjgL7BHG8maQhVqfvhGP7XGHG1xHwkGvanH3gLkZRibEfuotHPscWn"
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
