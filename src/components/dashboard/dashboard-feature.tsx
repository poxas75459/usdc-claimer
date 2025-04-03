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
    "zusHUu27HCee7gk2cN3diHXoAyEQjBiqiMryMAcZC9mMJw6Fa4WvjkjQccvJEbremUjjmxRcbt6rfR61XS7Z7KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DMfPtm5grCaMxt5JJzwwkCJegQSu75KYnMmG16EHeNfi855wRCoYqXM7QnnCFi9AbE5UTUFJBD9UgT3KZbcdQTr",
  "key1": "5Dp8wufeKZo658sYaQNH2s5yqLnhBpzt9aLYSysB6XAgGcbxMFfe5RsRfu1FDfgXAjDfLaDjaU3eRrYRs2CdfSxx",
  "key2": "226Yt9ZWfc7tz3mgci5xVCTA4rSdNYHi8ZyUYcHFfpBcqFWWjjjrG2YuuQqfxG3dVA97t7XPRrADrh7Pge9mHNKC",
  "key3": "4VAiG3mzgkvGj2cX722S89NrFTAnhCyqbXXq59rsmjTtuSuAGAbbnoJTCtWchBQbNh2PSeaR2Q1GWHFfbJuNSQ4V",
  "key4": "2fXVk4joKi17yn2KjVkybacqJwt1A2AYyWFr1yTLoEDM1aCkWt5HWzm7f8LZyQXVEvHDmrPEw1rcdTrkWeds94nm",
  "key5": "4tXwNGYJMT6TYZiGLewWPADgj1K98RPz6ZqBqQiHxDV2G2YBfBMokwUKVNt2sxS1VDoAqyToYkb8ApaWjp5hKmJC",
  "key6": "5tcjvdBtzNho32CqrseAxpdZjTgB6M2Yw6YvvNg3WzFtPSGAgBEgBQ63QXVXk6iyP5renph338bUvsqxVssHuuHe",
  "key7": "5X2e8jRcHgLDB2CqPYqFkCjNiAhocwsakXV2EC9p9Ccey6zwe7Tnr4jaS2mQJ8yknkx6BkJGvRVYC9XoqxpTCva8",
  "key8": "3cSLXSvNRJcHkpGqxS5VAUBJ3AJ54db5fq9NJ8TSLEnqF3rLyQCEfx1nWA4ioz4XbdEScS3AM7CV5MMzLs3C7gm4",
  "key9": "fnqBcZrgZXVUg62zahfV5b7wzU5VxmmTrLfTEBExWXAqdV3u1WnTBSp7AgE7UQJKdJuboiKt6TcymkBLWewsXCD",
  "key10": "4CTmW6ot3U3h44eUaw3TFMPkqpT3mrtuJvByKvWLTSHNp9cfaXx66acbDk3gm3ogPzL9LQBxC59iZqaHbFXDSTuL",
  "key11": "4ec5wRAnq9g24kA7PJn3AXVEopgPDqq6RiD7y1ckXggLnxd5X4qHz4fZU2WwTqZja8iQrwhNx5EnizX31KSR5rfh",
  "key12": "4xEnPf6xzTT4jBndv93YZ9PeXiedYoUgT1iRhHHQ6dQruhYfsFSMbfPQunLidU1Cos2RQKfHfoEMNgdFAeHtUZGJ",
  "key13": "4cNcExuxV9cZNWq2HJFuYpqgv2m6KDSB53MPDnWwS67nxvzmvhNmGmWZBaaxMKJgWHRw8qkhwRduV2p7mgrysxRk",
  "key14": "b2mKw5wFMnMoNFD4CHdscQeQ97Rcv5LC8MEgJVKA24ELM5dro58Uq7QgwYQXiUDM3U5EZWy2vFaPfMnEiVmycui",
  "key15": "38m1dMnGBa92xvW5D4ouc3tfVwz4jowHjZZChTDp8kFZzQc1pmA1jzdgSGguYbkkwnomKUmMHH1VT5QCmNwJANxM",
  "key16": "5VqvYqxDPQMM8QHh6agMyRYjHY2hF7hKUD7zb61yvXk5vPrgzkZEf8PPkNFSx9WwD7tZ5WAdo1eofhw5Y4HsfiPv",
  "key17": "4K12QWBQi73VnFmQ3uXCjPHcinNhxsM4WejK4sxh2YpyFN9FBKSqCCmFrjWpVVEmz2qEBkXKZ2i8nzWk5B1XN9x9",
  "key18": "5WqMGNhuFKtxkLh7ZA7zo6MttUMr26ypUjCpFqdVGGjucELczLHq5byXQDEoSvk595YAAdfchvgCzzdmg7t2tw4o",
  "key19": "2YoNHHwWVHWQUmjByrSmwG7pAxesMoz8bEDEQ5PBNsAah9JEodgrNPFySZ6aa4Xpc1AUDQ1s9meJ6HLRqh2KQf6n",
  "key20": "3VmKhgCEHGs7UNaR71yP58riAinqLg3VBf2JAfJbajBhmEJD51GufAs3928jfJ7iEa3qKvpj8kNnFyDc9UWM5uGh",
  "key21": "5hk54eS7FwD7dBJ3g3diaJU4qmrTXi4QkJA5AdcseEXjPwi926fCfJ6dhC5ksqxjNmAgPvihTgYh3FFp8RKWHy1R",
  "key22": "3rDgxCh93F9XS4XEPTvgfzHhVVzoxjDfgXdyJurWL1EtKmoBNA77c6JqFMU8P9o9rxw6ZNpMA3HCrcBTmCFBG6Qp",
  "key23": "3CARV4FiHF2r263TJrdMwf6GkYima56WbiKeyxh8UaoJfAde8CLZmeyjabzsaj8oj8Kkhne2FiEU4BjCpAyEkDwV",
  "key24": "5yn2YM176eP2mFypMggvwjKRu3y7n7Ya1khBHwx9jU55mjWaZRchNpkDfehU3tFsgs5bgdgrErna2cGZ86BdP6GB",
  "key25": "2GMttKGhC4VBJeNEMeQKQ7FD6akWXixEMKmieRyYhNC3EYaQNZjBA8Dg93z92rX9fWaq4sUwe7tM8CgxG74uyL2",
  "key26": "2cBsL2fKa4mqsPwMu7crP5cZ8keXjphdvvZiGj1HGqSyKG1Gv9PC3ngCVJZbWkdhSC5wCqHx8Zi3ZdK2ACzJrxC5",
  "key27": "3JiV9KkcfCrqQXjgaGPbG1GKevJkv7BMSizHDPhQivwuBsQHnct7dujDSbyiKBMyA8kDitua6d1QJ2vSvqjCdwja",
  "key28": "27AZ1dByv7v3Z17zysZYnPNmjvm7vMDJ1Tc33M5Uoq5GEqwtMnQ6bqMAjwEvmmt2XWZ8jmZSEEGPh9KsVuuXABor",
  "key29": "2v4SMqt8bbeiRBWntBvK2h6iotj6fsG53ytnRag7f8KdQVxn3ov3xNswbXAxdYiUxv8TT8WDafetEzuwjSgHU8Vf",
  "key30": "3j5FTU8KRJFq9HmtqCmfDRDZdFvpfePufqGjajU9tgvGVtyp7GSQzK4aAoGKixf6nXkzHQqoNZBabppMokH5Qe7R",
  "key31": "4dw4k3hbVtn7s5VtRfS2Juxu5AYdNk5ikjHfeAjyizLPf9KAi7iCbfwN2rRfTaPedVJhjXUCdjtLJECnVodPxTyM",
  "key32": "3tjTmMvsqfp9skKje5Dwt2KgW5dCZAo31uDm4dcNCJb3zTHu7V5xFh8cpc8wDqdAYewjWQhSqmCfYLaPvmVYokFe",
  "key33": "vM9DfAPHwhB9gJHapS3UHot6rSa1Ajj2acfwqqppfhjJfU2aVDJzKtYYXNwpGreV8HkzZmY1wBF33mV1S2f7ie7",
  "key34": "39RtMsxQLhY8TBceyyP1VxMCvHsKkm5iBhs9zM3HUgN6vQzmSRxGWaxjXvCQ8YMVSu78gYcxZdYYk1u4tmSLSz1K",
  "key35": "35XXDVD3687stm14RcrJNML4AqXKFM5W4hVnN2hLadjjKnveUfsccALdy3SY8TxEmNkpEgKRRnZGKpbwsgUhhHyh",
  "key36": "4tyJJvbeZE3EodfFGS4SisJUuRLU7uyvpsiHG2VKna7mFJA2UNMdhKxpF3U8mWinhVcBivULFe9jFy8QhYLyqwpD",
  "key37": "QyXYarjZYghPzNcdiAuheD5vJ4aA6bp1NaYvNXh6P4sFQ2CufSp3HewLY1U4Zf2n5bHzJjmxSdeADRDVwwMR6MQ",
  "key38": "3v94D3k5ie8hYnTHWTXHwDNofgpkGCErHhQPA5sa6jZycPRNziaSDBdUjcZfGUPRRQK4LemVxsspD5cMwjQcsB3r",
  "key39": "4zJEseX5KQok4BPhumuAorQDTugGyYRd3H7fouB7RiU2Q6V19JqzyaBkwt7GXTZJMyg86NsfcSYc4ugeSwkPoztK",
  "key40": "2XQaZ4tEvpEcXSqGAK9zMNUrkTm4JpPgsPw8h6TehPjXxTBM3iTcHcEeLsUenTFnKHt5BvnfBYmvWq82ZKgYjksw",
  "key41": "1gH1JKz3fcsLGZMc8wSZ51qC8mUDyc9tD5BT3LHmtYC8t9XNVDPgmBqUeYYfYjEc2J6npkPpvGJWQK5ViRJknq5",
  "key42": "56YGVdpgVHpYDAsPn3TD5vLtL3xc44fpYCSPWmvHbJCcRs9dq3ysAHmWtrnftmjwXUd9Fi3uJCGLa4r7cYZMTDXX",
  "key43": "2pgbQMphY9GT2T92qDgTh29gezNAbQ3av4Mh5iEJqEwf6HxdjNu4wWSYWJMvtRMCgumm3c4UrqDdiiQZpqoWDB4H",
  "key44": "6axQE1H5VcVTAkS7ch8M4XmaKRNzWQejELPN4ZjssbVDZD5wuNXfJi76jppbSTtWNrSh7uCCdSoBY7pkwK5Nf2t",
  "key45": "4RF7A5CRxKADy4bdgLYc4KexSVcvBtuTnqR8G4Tt46RW57W42TSuu6k2ieecprE7BcrwNQBHfTz5EBLZtXshcW8C"
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
