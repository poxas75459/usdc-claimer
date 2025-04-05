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
    "3aaE2SQDzcbwq43HMJZBUdDH7AG9gdM1mL3kFBngG3REznUBfyut7vZMeadfySVDqs516ofAkRis7J6KKrABwNvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3WNz37KufKjv9aFE5BQc56VoEBzRJb8qduLTF8ofE2SXB2f974xxzRtCMhpqMygXKHRMCTQ8qyFyCRpwuYAHLs",
  "key1": "5qid7xeTidzsu9UeZ45ZL5XFev6PYZBxGwcjJZ9Mk6dii29Xp2isJK9NTD32hNy5DqrqUR7htm7GsnUek4uMfpRD",
  "key2": "5XtS1ykq9HaKgWH3zhLusxur7a9Y1cF1i5zm6q3ih2k4hQxqcGcHk2B4YyMiu2hzjZwoqbzHLmCHyiqEvGedEP49",
  "key3": "2rMxJpYgPRLaMXfvRpREiHAoD434QqQ1hrZaRmiSKcJgFbnqcU5u1A6TnsmyvYxMpU6Fj4pwp7fz7EG3cD1k5JDQ",
  "key4": "57Edwwan2yuCTWk8Aq8rqdWoF7YBTv2jboerRwVruAChKesybnqMdxkWNtUiNfebVEq2MVdJoC8LHYRgpehSUiVa",
  "key5": "4rBCUTDA1cFcYJNDBPGBRLRKxoTTT8t9WnmaH8u3AJeLLf1fp2sjmquCHY1b7eQTziWXLw2uJFthpdhsSy1o9YZM",
  "key6": "4ii1MTSg2eA6vjrhQy5zoF82yeYeHmGPzBEM53dhCPcUT8hee3MUC44Wmmi52a7F6ssyt4eQGGKKq9wVTwGJvbaF",
  "key7": "5X1sR48ZdnHPY1uQtCmGDzRnN36uZW5pUmYsjiiZQ4kP8Z2ameA5bTiWPMukLRAkrxEpwCRtsA5gtZXXFNdSEKpt",
  "key8": "3PknmUeVcd5HWiBJJFFYfTgV89z9U7UkV8kTpVFXzutL9GMNpmspx7vkUoadjVQvEyg9ykp1C3wL6twwhj4t9izm",
  "key9": "3DBBUuXv72khCAKohp5H5cRqj9HYT6tap1NijiDJNhUpJGcTH1xUL9XxTvmiedDKKNDpL4wvAYTeTVGXcWFQWds3",
  "key10": "3pzBX4uyRcr6dwNJ9gqvGXr5ZaECb1xMUqjqWb9oXBm8DngcnEd142RtHc3RPjC7gmdGjyNrZ3hMwko4TTrKFF1M",
  "key11": "2QmDdR13JwW7atH2qTfffTxSNwLypzTcoPMmqGDRHh7N6P6ir2bKeB6gwV9tmwudXzVH5SRT9mYi5L6PGwXGYRMb",
  "key12": "JjAqkT6z7mxugqZXiQ8ANzvZ5YtgWRbjj2LNFWTMg3SWAjXQpDth8wg1PCa6nzbqgij5CRAqnscruj3VzmXtoQB",
  "key13": "rsjUc7d2m5eqknwkNnXhdwvNh1Xqf6fSF6gXfwxNZDHYbmC38HTeGfWSy4He2gx2YzTebDCUWLbzC6UtXgj3d6x",
  "key14": "3DjxaJKdQGrps7PKBArNwR5ArB8bJKoAsvhV9kApv4fzNZenq5YZWAgeZJwwf3L7W7eRmzM9L1CTMaJwj7i26AGv",
  "key15": "4Viyq4kHxmAHbWqbppenW3royAcPbjqHuNo8oG2QERaSAyX1FZeDDnqLdvmmUrKvwtbBoV3UNvfe9mEiQy1nEfR4",
  "key16": "3RyfEuagaHfeqjxwju3gprTFi7YDyEb7BGrpQd48T3j4SsD9fGpuLSXRBvhj8hpn9dSSPdKPzX9MCyKueKRQJHoz",
  "key17": "HE1NtKDxF2jjwjSdHMspzFGM4oUZ8NK9ytHVudPGoJrvHxzvjSbFTyp2bZMUp22W3EZTbQUSczBWh2AsdKepvuh",
  "key18": "2bMdZCUdax5pLU5skAYwcV8HzGZvNefhMM6o1ofM5TBdoHGcZ5iyWQa4fc1KeBtFXHEix4vAVDs3XNu8nkZLQTxn",
  "key19": "2Z4ovE792iaTD6TYu68UiEQzbhhhypT85iAvsoYFyB1ACbR3JfKoAWQCkf58QKBRshmRpxTTwNSveZEfMbmC3E1R",
  "key20": "453keFbmsU7ewS5VJfDQZtM3vLaHVtKbX8X4cT1Qvabsi5abYKZick4xwhjuqY9vxBUXarxG4UCs14QMnUjX2v2r",
  "key21": "2Swqphe4bGvXTZj4tWDDP21C8CyKDjUy3upHrVcUfnxHSAuVF54194dP3S6LJSPoUeAhM9nZQTrViMGqwame1ur8",
  "key22": "5owpdrjXDHHqUN9Rnim85B8yqi1GJqFPd2ddkrFXvLmARdR6FDLTbNqp7dcgVz7MWQUv8qTmMgFz68LjsB4LmP9o",
  "key23": "3oipCYE85nfrrzLPGbPJuZN3snatVPuJykJ4VhjuAEoPN18ssqe1sRDvs3AqpQx44Mq4rPi6T4dpm38ECpKhRKvb",
  "key24": "3f51MLyvzWNNFj5f1KuGW58AED32HUM92MaD38NmFDms9zVJjFQcLbyKaW8Hc8YZ4afd74DZN9UT6DVxmXTheBvM",
  "key25": "4KdBqMeys4Bhb6ZF31AHFJykZeqrpfkXbfrzJb4uQh794P8wwWyAs9cv1tyvkyYxkK5aQuAE5YUowGFu119UQFYD",
  "key26": "4SFz1ABXAZyhvVxG4xqf31WJQoWhmQ6pgx3tJHt8cPKkVfhSYYw4pbaD5U9pF3bNgVvQR4Tw3yeY7U8N41pFjAPu",
  "key27": "2cG8spChQHGXGFvxowbpcYaeN2DoJq9PHeJ8KQVVEN2xJJJBntQPV3GRbR6Psu9RknJwJNRQDk8DsrqsHARjjAhr",
  "key28": "v2k8vN6hkxB9Tjkm5nnu74MyHJXh6mXhd6Abju2WMinAeSkHxq95QoLEH5w6UTH2miWAMWu6QiyvmDaqdNfE6XM",
  "key29": "GzVSn5UtJBUGtmwVpeRXKPPagiyxi5jYK3DJv4ocm8hbFZWXQjbsBLxr7dk2bs8pPuMYowWfBjwvaVEZwoT8gQi",
  "key30": "4tyJierxrmn4kZnibac8WemUeRG2A1b72vTFqGUyboHiDhLR2MCES5hNqvLBqU5PgHuAN6xrZn4KqUuNtKw6L4Jm",
  "key31": "4swkuVjmtEH7MoEEFM5ARBaWrWjEaZxvinmnwAHpjvDo65ojkHH3Hjfx386T4cx9bK6MrP9cyqSibajFKQaRbV9C",
  "key32": "1KoWWQgawunFefFZFLE5sQQc6JrEcWpoNBptD2w6dhCb17aCEpvXdjYtoVUEujXmULJ4oC1v4jksnvUVwFGPrsg",
  "key33": "2ybKKPkEjyD6FfioyMHGwSYXQw6sMgB8t3PMaoxxXpkqcspgKaF6NBHj2tLnroMxmgQW65QGfYu6yP1LyA6kwCDY",
  "key34": "2bhStuZZHrxBXR7187TzTJ3WCYU7YHnuiQwic6zt46gD8HjwQmZseVGQootz5MiuCsgdiXnB47yryJnXwTwshrjK"
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
