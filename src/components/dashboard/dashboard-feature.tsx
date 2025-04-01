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
    "Ke6m33A5f7tcgTENfThsvc1PwKY65eXPP4VqQY41rWgQ5XgwsMDfKdU1L9Fc6RrppRzU5PAkhFxwrLqtjzdeBQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYHfJuJxrGhTPXJ23qoAED6v7gxpUVoadEYhcqS3H67Xy9ttXeZGBXc6An3bgRHY3kZ3kH3rnv6ZJAcrB9DfLNq",
  "key1": "3ULHfedunWtMMSaGVwoVxp43PkWK9keAp58EK5SgMbLea8fAyRFE6XaMUANXw6ySjRyoja2AP5S9EswzGYWe1faB",
  "key2": "31MWfKcL4bcCFsSz1DKPwj3uUK4xZn653t4pBPs5xbCJ7BNy5puLQxritHpJR9U2yqrtWMaNxvUqmXCxkRV2nGb2",
  "key3": "1VzxMfZs1TebiACCvyLKiZsiP7w1d3oARDnXQrp71YTQfkoaWveeKWbr3gyD5MV9sqcyq3u8xafLzZbJa4fGtVt",
  "key4": "4XAvBdAKfKAzdKUDJdf2DbusReXZuezLpJ75Wx2ewBz5jwbn6M32fxiGKzRe4Efzgw1hWkcKd7Em858skrukhxwM",
  "key5": "RYABSBdksMSNrcD4ZQyF8CSyZeGUc9dCFSmhdA3quZc3zkCtt9bqrwzDg2o8D1uMmzjRTDvsrrU2EfsEQTTL9A8",
  "key6": "iDs48Pa1aGkjThVsJZJD2LmQT18Gt75CKTi68j88dHDzVdeHqRsVj1AmGkWwwGeWs2hhb1fe6Ar28RBXM84sDJy",
  "key7": "4HiFSCzXrztKK45d7brAoa3LLfimKVzPLDUEq1qH9KNttr3HfJW7rB39Lh1JUFT1eVBCvSk4VtiTw2SMtYgJE2rM",
  "key8": "mXGUiD28uE2pihVLCH4cjtMpKCkW8VW1x1twmZsDuGSsDA45X2CuinGBortB5dsZhpZGs1h8UARqUmYJYh4hwuG",
  "key9": "2UCnb5ktKnVQqiwJAkcj58U5hWQs3G6AdrvkBQu149vgUkHa7qvBc2t37t3qn8NxnykmFa5quXr1n8nXhSEF29aS",
  "key10": "2Pjd9BEGnrwsg7V2mqkBAZnp66UgBneSEtfYnjJabHgwfRszy8TdknEJm1HteYzxD26aYeWmEuv3gP3262iT8QLH",
  "key11": "5LVZstZFVsjwzZvVhoScwNmNtY3NajktAq6EgoUss8mmUPAmfbMR5SDfy6E9SHKTqEZPVRsnhQXeMaATdtmEWpCs",
  "key12": "478wJAS6eB2ySFVGJVTML9GwojFzAaKfdWevrAyj7ehyFqEPAoR1djLKPfXErz2tVeAgjJrpNF9aAdkoM5FgzLiq",
  "key13": "62oUkDbD9YeTQwUEqp1P9o9ughqV6HxZRaXmKppUPEBB1M2PsK7dFTwFwMXLq3jXY4jHbJtLQ4BNLnLHyQaUku8s",
  "key14": "5npRprNBXxkkrR23nDXFikoFTrD2eCrK9YhLCMDfq9LjWqaF7sVWP5YSUxc6WHhqnynJAKewQSU36LLcK1UE7gdR",
  "key15": "2YNHTaLbdXa8u9HKUnxQuonGQYHU51qFEAJ6BZ8xYjPDYi64QKNyDQkq2xrSHdb4THDLMTatUueofApGFW9TCbLM",
  "key16": "4JVbHMBHSSAehTpoAXAKHH255DDNtVZG98jYALJgbhFza66VJemPWb6igo3XBdk7jcJPcNHMe9eCSdVn659N4iFR",
  "key17": "4ZwPmWUfJZEKAM9wEVy16aACbUt9BD3jhxvCbFjAmoZmgWSTh9s3HPDhiyaiUYzkCvmaMkK8xANDhN4Hausuu1nN",
  "key18": "3yHzBarqG3ZimqCztFyuLVYACE499vAmwqRZKHCHiDo5Ayh31dk27QhxphCd55Cbcab4vMTYcH2xVZeLiZd3AioB",
  "key19": "2UsWtveR8dmi4RcCk6JU6nVRNNuYEf1HYqFseFsJwipbJrScpSfT76ENuvarJLTkCwdTH8iSLH7MufnpmCCKGCt8",
  "key20": "3inkvYfoSE9hLaDr31BKMhcHsoXu2racp7seRwEwsaHg2jLsLa2ZbB6gimKEGhfiCaSHqFsLgRkebAxtLF2GPM8Z",
  "key21": "38EX9Se1rHqEyUat9Fn4JFPo6q742doLAcNYJFyETLPyf48xg1rNxowrPoEpMjtKgUirt5JmNLStCTHSyvbg8jsU",
  "key22": "2dD1TVwBYWxeLhSa7dj9xh6gtaeKS5N3FfAoH132N5KkXo43vJNrohUcPFwhTyuS6ZNHuyQA5y1j9LRXCfik7yTi",
  "key23": "65Cd99JuTgkWuQqhxUVebMhKAU9yzAHfcQbB2AWKTXidm9Dp6T3guKCjAAUe8TKm9JbN1FCzuynsaVh5SDYeU2sq",
  "key24": "4eHwgWxMwUscr2C4VVXvJjUhrQRMzfChBwWjF3uUptzj1bp6H7UUtKi8K81fiqv9p2UPH9qyEjyyi9o5CYhhAcLC",
  "key25": "2NqC7WN7H5duSeqPhxcFLf9ZZ82V4gJrNEMrs4K6dcNx8yPaU7Xt2zVEMZj6H3ZH5gaonBShgCBW9yBfQskeRa3a",
  "key26": "yWdVChf9ta7quuM6Z5fWubj3BcNKMEtTVfqioSw8F4BaihbDvB1Ri7z1FtSAjRcjud1pFM83RJvWSYjYhNguiyu",
  "key27": "3V4uaHEya2GtBaB6mVjjbha7baC1uVtVtGaReb5ZphxFUcDwiStRQuSAWjqtN87jwaMdrWSAgVC4Ks7TgxGD9pKZ",
  "key28": "4xMz6mwCHJw1tNszVPvXPSFRKW8W56TvAyEqSVXeSyfSYM87muf4Et7wh4KsKmAWiP6Sqr62ZqeT5DZrGzHps1vR",
  "key29": "4C9FE8qfwzcowhJBcSmuxpTsD8hrhVnHazLYwea1Dn2gQKRAc5kkyyXVZj3kchf2rdTt6a6T8Qm8gfc2KD9bArEg",
  "key30": "4Bt51PHKEZtFSdboyr4zxDpz739cZxrRECaGjCsYXS3trsz6gNrGzShzX7JgUhehrNBKJTvw1NprAmEYgEQ72eCc",
  "key31": "m31ckscuj3KWQas91yteGxrtdvehBduHUDKC3RfXo7neqPp6aCmH1D2UUdqeeo9Fgg7dA354xrNXuYnRKDSKxmz",
  "key32": "5MzQ9SmW6RjgZCDevq7zFmCPDg3BDaHV9DMu3gHMDZzLuDeFRBLVN4UEcfE9FsKyeRY7xzHvBCwkc9tA87Boh4sX",
  "key33": "3rAEWrEF37t4TCmbEPitWtJzuq3ciMhcUpBqfY7LZzezgKCafwvcx1WyhMJMKNLg9yLqiVnwcr49qGrZyf4xSTN",
  "key34": "5pvJfrzgH6YxN9DzJs41LLuZj2tGfnfTBuBzrkJbaAeRU76qeTTnYQH4WHzjJuAy9sGm9iz1Tdyjoo2uRTaKgpRR",
  "key35": "QQSnGxww1aUTjgEC4rXs3kin7aM2vQ2sjNNY41g8uZ56XU95jQHuaSUUb57AWyH4HidLgib79BPBr9rvAHiRd6o",
  "key36": "36z141mYb4XqSi9zGyfs7sxmSeqSvzN3JdgikU2URkFocQxHk4xfSrEhWrBVbnm7aQcXBXqwTfBfk6VYh17yzQgz",
  "key37": "4rwK58vquvHcYuGMLVnMgGx1DVgUV2quMbJBsEFMPnUZwvbBpmDy2bYJpxUveqP6vP2avf7RfwUZnyarXBFGowKo",
  "key38": "67juxgr2nXKjZE1gunk3RWZ4xKrdwNWfjv7XSoCSfW4juYpGkqfefVyvwswTA9LGWvK61fgrMbdjxFAZLawKTgW1",
  "key39": "29gr8BaLGKfRt1KM8N7xndZFwaTc6siwU7EF3JcST5iYPGSQVWxGMvbA6mreqBhFx3sMDtJ2GMHxt3fPhjfzUPb4",
  "key40": "tvG9p3mDqnXipJHzYR8CzVPdNzSjNTzRnY9r1HnNUPoPnsvQKTrJRiNgJzzVsiAN2PkWyfu8H23Gc9HyiQoidXA",
  "key41": "2beV2VNihh77DXEMXbk9xzRrNc4QnnUziBCuyUzrJSnG8aei4GJADDQbyNB6yUD6HXQBmvCMQPSt1Duz6MXPkvRs",
  "key42": "XD87GMc1xTErzQq3WUxDdozeteaMPtp6S5yRmEoip27MuUEoamXtr9TAEf1vB7WTzSTVBeJDhwka2b27obNxnPv",
  "key43": "4gqCuYEMbShU2J9iSLU3M9ycx8t9RoqFhhHqu2dtqeU2jVF3G8ZEb2gaChaoXneEuBEeSdwgxcuQajYiycicRRrA",
  "key44": "vjDRNUF6uxVpKaBuTzA1QNGLEyg4y6M1XHzvEnT8c9dzUd4dYPr6EsSp1aWNjYx9yBorVmGnNh4RRAEEdVTZE7S",
  "key45": "5iTy4V44aWdzJp5HAePiJYXNE73rN847na8BebREU3rAvkhz6QjKvVJjxYp5qpg95EXB2UdQxhY9M6MHbdZgiJxm"
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
