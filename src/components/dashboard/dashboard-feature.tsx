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
    "b8iiFHRL7xt5sr2VqNccmTFHhCu3AzwNYJ1tirithEsgR6N5TZUM9H94kKpAJY94bNMbAF9V1dpXRBDndPFi94Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQVfCfhjyHWq93qfjygCBXqRzRLV45sT5sysT5PoZuCPXg7NiwQk3rtWv3gW56zVCt1vycUVSqGuUp3JD1YZZCu",
  "key1": "2D2cZzH1erES1FwQPsJzKubg5NGv6EuN4p83pPE91BjYT3ZDqsvTPje4grBUPSQ3BqKVHviXJiMnP1SmMhy9nRWj",
  "key2": "4q1KW3MkUX6JJ7DyBk99sr1NPpYxuhzpLsjCFiQDXgTBnBU4Yxr8hBAfav98egeWejRDnQ6tJaXqSTTDesgr1qcC",
  "key3": "3ZcNiqR1f4Aa6qXDs4xHiQ72CQdA87Tvgb8DBFvAfLdcn9xU8cNCzB7hedqBqMZj4C9V3JdiCFXTZbM8z7ASDSS8",
  "key4": "32rUaSK5q2AbhRf974hsdyeRdszdT93NyhnQt4r63FLMHQ7jvUZt3b8Mp6aBdfiM4fhJ67bX1fdXvoDWw2BzNJy6",
  "key5": "3gFUoNdq6wJSaYcYxsE6EM17St6TaMrTQgdQLPrtmnkmMy6MAt8GPVqfm9qRJmsLqVYiXZsfKAVMQR4ZokEu5uZK",
  "key6": "37ySbxm6SLy3mumJWbMdGzNq2jgvhBWve9HPDpmCmt7miSh26pG44FJX6gn2rjU8ppwTFPmWkLqmL4SdPi1FB8ph",
  "key7": "3ViCS4uQY2fUqEQ6dAc3W7T2aaaLr4csuyjC1KQShYWGqNet4WswzQSaT1LNf7bC4ab3A3jdRJTZazFfP6b5x9eY",
  "key8": "aphBePo1s7EkiQRhqoDTRAFdBzeTJqd96QLFqemSNMbf9uMVobtXB4KAZjUeZ18YVy9dsaUjTR4j9BNhfQxhDAA",
  "key9": "3pQBC1sNppCTqdkdkYcvi3SjCLptMY2p7yPwbDGAUYeJAqUvpTo7pxw1TjpgiCrJ7hK5jxQbkcEW8adxV9DW8P2o",
  "key10": "2e6rwj99ewbdDroKLa6gTUbeC549NFX7rceXQiK1vbDm4A4GgXRB2Ny7kP5hJNGpUdGigFdDHDbQzpvRQP7KJWL6",
  "key11": "3NLXCXHLtw9RwGzSEGBdSrowSa1BC2cDqcm5duLnckup5fcE7coNYc5PGBR1FVLsCFoJ6qPdtTbiNhL7QN4tzjDp",
  "key12": "4329DtnP31MS133HrkXZyCPzRtPK9ZtrfpuGE8X1WF4XEJXX65mjJonreor5PqEKs2SVGo6EvhxQQKzi4NZpNVrz",
  "key13": "4V9wrtLcZEJCeAD81wSbPPNEUvXNBPgQkPNuH971odhaRiiKeGaVywPWDrQoAfRbeLNkZYWMha3PetdVcyRK7WrP",
  "key14": "3X5bPNsAf2AXiQD3FNh4dmtgSmMiaNFviAiSuMzBqT2eWHNpAG2rdo73ERReUY9RsyCNt8yZLGR8jp6LyTs11sWY",
  "key15": "2FMqWj1TgqJCrVwyTrpLxSFupyBvtqKVCtUSia9sWHopWaLBcbQhF1WMeqpsCLaA9V4QGhx5Auty4ujgvKTgt6tu",
  "key16": "5d7iUnNQAyt9tvkxty49wKgjF9FY2XgR2RAivgXYxrHxUWQmwJCdrKJQuFk4aEic3DpvanfkEF5TNBdrwuPFZFwY",
  "key17": "8dVLbu5YR7bmGfZUhaqppFw8P46MC4xDJMjaJRcnGksTEwvvYF3fwmN3fZK7kCeb2jmXQLSNxgLU2ea9FixC6ey",
  "key18": "64At8cdhttRp778Bdo6WV1j7piKYfXrj1Hw1u21TPxzHGd5epFzeV2fzY1VDR1ncB6X1VpqNYc81jvHvsNNBTGPq",
  "key19": "5s8sLsRApA7zzLv4dhLkKH83qrkKAQjdjkp5sFFWbKNzPSUc4j42sdNZhAefBdtRQWD6ty8XwafXoHtNR7PdHHcK",
  "key20": "N1uCpeeqTEa81vSe13u9HAmWu2EXZqEaogy7kCusZ4wPSbGmvoRP2QFp8FqZ6nn8qQZerEzGoToPnwLU4Fhy4ho",
  "key21": "3DnHKUcy1m7c7qdCUBjsz9QxuJDYYd6fmPD7zMwYGaww6RCEKBTguoWMsZLwYCnu7LAzRcTkiQJLm97ChqZ6ShAn",
  "key22": "5MfunKDzEzhDqw4gDnhMNaf7TnoTCy5khBk9aW6J5oUq1VCH4hg1QrUWRkfzmrTHYhmyvbqLC2gkrjcxboKLyGjy",
  "key23": "4b9q67vukmBvBLuv6T4kYFbBUbTv2rFESHAEH5eG2xs4FP7rTFDkbjqWbbMAUZujxbZZbUEyqoz4EeieySHmiWZZ",
  "key24": "3mTNdK3x8ZNdHjmAmPys6RD2gwcwz2x1JeDcceGcJX2VkW6WqyJypP1FetYyCJocNRMiGPdczu6ZUnABdUcNf86R",
  "key25": "3HzA9Ee7sLHgWfmq6tQYBJFvAMdVvZBheFxQYcsyPpDEMxebCUBVeSMoS5EkuM4QX6uY6wmeDbpJwyDaAZzAq53s",
  "key26": "4Pt2RHpajSEzY2anzoKzpAHadWpmRTRiMiYy9dm1GsXb13EgjUHqBPSX156un4g3RSdK2REchCGg2Fkc5PseYarz",
  "key27": "3KfMvMaNR45vm9fjbwVB6xvaUgSGpyaGwzbRv81pXAzoabFyRSK3tWhjHEmheMpYPQjUkWzL1Uah35KGQUyFTQW8",
  "key28": "3g7ktLLHAg31jjB7zzPzHWLXndzX7mLjxdTfqvFxopFTKqPh4ZkKUenm5NePkm6Cmn8x6bn39hNESDGd5UP34ufM",
  "key29": "3VXyz3tArHdMKccqiAgRi4w2FxJ1s951NJcUaG1DW1vP7LV8SfB3vTfE6Gku4XXw2xVsdkfC7U9AQz3jSjZshaE7",
  "key30": "PG2UGq7ZwdZH6rA3DCqjJBfkUs1GjRnquaqsejPQE6hrdAahd8GVD2m7NY4VgqHsjtiu4doV6P3gxjFWN4aQJx5",
  "key31": "496nV6xDYTopmCtTcpR5o3aQc8onHpRjS5C6NAYydEXFSMx8HauQjhXdiNWvTempVBGxbBVR9qYFcernwauYbpBd",
  "key32": "3pjPZ7Lgw78J11vtPUTm3XmrZnkEPHr3w5c5rLrMxBQzvaqvhRpPnYeDQTqimiaZzvsnQmakANVjUwNJo2G9k8Bm",
  "key33": "3L9hFVw3LAG747Y8ERkfGVVxnU7HucUyRiQERwc8v8Sm2S2z1xMGfhzqLojr4fmFcsS7nP4gS7x1N583BaJskhfk",
  "key34": "5vQXy2cafVgdNnQDVVNxQkLS3c6pBaEyTJdFVcHmCk3JAs6ZSWGpHc5U5Hecmn4hKTMxYU2CEv7CoK7w677L6Kes",
  "key35": "5LDzji1iP6uoaraxSJstj62RM3oyFvbDnJk8d6rGGDPUGwUmdTGGpaUsoVu8mNWNS5GobW5G9RKJYneQ3U5epNc1",
  "key36": "51jgdzbvYTu5ztuHvaQXom57SoeZVvKpxfDPGcAmFRA5Y88Re8HRwciHcqfXaTE7RNGNjRUf6bt2ELLy74XVmXCx",
  "key37": "4Kda1w4V8C3V1dovLBvnynEVkUduPHCX6pG5pvBRmHVpKFqSHMps4yxBBsUHhgo9o5Ch4gNNMNgwM5D3pN8Hv7b3",
  "key38": "Xmk9DHbK1JXWk6VV8iXv9KNHWub4Hkfw2RiD2ZAuqD178PF2uyF4ZQxCgYAd8MXaHFrUjB7uQVtb2FGGCDMszgM",
  "key39": "3cGykaz1T6Le8yA6uqT8HUZYQYAG8xSUH8gHCUrsK2NUsvnxfNPTGGcneDmi3otU7LoQLMxvyFxhFqo9JWcwBLeo",
  "key40": "2k7nbRcGcHhQm9n9EtdGRQ4JJRQJ7iqAp7ePYTifwtkUdoYYC6RTfe9XsVnxTAv14dD2dskZFvNzVV6VZ7TZsoCb",
  "key41": "xFtTq3zutZXycJ2ecA2HqaEGeRymHKgMb6wcFugKfzVkA2nfrPttWbBixqp6kMBLZQ7Vzx9SjMDaEruHJ4kncwF",
  "key42": "5jRGAwG6vxqTYZqw62bMFmSwwLarzuEL7a7ru8fAataFrNgMSyy1MQ68FgEc6MF4KVYn9KK6QK73t6UFL2xQELx1",
  "key43": "38iqckV5pcDuVAbmbJ4ExodN9jaQ6HqHQAk7Qnf9yZCzBPogasMPCtjicbWaHsDCqM9tD5QZ4R5KHYdBjj1oB9Xo"
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
