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
    "5XxJLas2yFUEttVxMoyXLTSyXF98PBBeRVydeEKFT5Z3oybod2EosGhVdXM4ApEcefdcTUpSfmqB5E66zPyiowoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8jiJ259gFeMdJp2MVr9xdsQD2gEHE2CWbzVdtdaynFzJEsyMmDERx5mGSwwhDRMj9tKGFp6t3JcSAwhs5D4RGE",
  "key1": "4aVf7SAsaRswegunALas5ukgnF2UZcpxnWnoM78or3irRE5jEfpRyTyRnksWQq9K8KYryuvwMogPYgcWaHk8ACAy",
  "key2": "3SKbpjaJCJjzioB6uTeGWBQ4xmxy27Z7t9JnEvJGbkj4czqSCdRfVuutf46XKqB7mhtPrS42njHoj8rw4r2YUNgU",
  "key3": "8TJrvC7ee4qEcoAq7kwAknz82naLFGbv9pNnpvbwpwCew88279TVd3cnFRpoN1kSQDJqB5NAqrh182F6Ve61hqb",
  "key4": "qucwUkDzUaKFSvXzm1fXh1K5BHLTS7uueVeEuZ1Sq6EANh3t1mHGMPsDWTGtx73dGXRr8k7piNmeTA7LdSXUhvq",
  "key5": "4hxh2nrnJdGUyPRn877Z7yZb66bue1LNPp1Q6SfBmK9xc2PNw6THWvpae1H859GuhKkqaGeSxsr8uktQovHuepb1",
  "key6": "53QK7ADmVB89bjBQDrdDfkX115EWmVn2C1J9t93dKaCY5xGCd778jX9xD4ewxhsf2WJCBvNCBxXyt4WS4dbdexfm",
  "key7": "GmL9erdxhEEtawWu89LLqMg3G6DV3D68gT1auymsw9TYC47GGrzskV2R1rpbnuXsmHgWYxsHZ4bZS2vFGy3eyz3",
  "key8": "4Q3u3tJ41BYXu9ZCHNqtE1MbBMQ44e49qdxMaw1pnzmWuX7AsLopPpimQ1qUtqMwmqYfZbYM54GESBvjcoGcMRwh",
  "key9": "2SVi1PEKuMatAXvDo1EGje968F1DQXfvooVEYuSa9vnJDdCn76EJCegerScsZAh82o8dF4d8eogTaHUujyZmhzZ4",
  "key10": "2oGGoYF8RqJ4imSxYRywtR7sCQ4xg5hCex1g4RF3kRXuhsuVR5BJMMFB5ekZ7WKsAgMak2r1cZgcw1bRQFzQSEYf",
  "key11": "28XjvpwNgMpyPUWLbwNs6tRCBQDPJaHBBujM1YjB3iUGHBfaAYhgu38m62xCgDVHuyZJYLGeXnwvweTgiQgiZp76",
  "key12": "4k4voydVigTDPJGE9kfbA3AtwBdf3R4W4aNH7K7g7cL5cupquf9aY43eeRGmHwa4LwGZf253q3F3uk2xSD5M2Nbu",
  "key13": "53YoYWQZrhvKwXku4GwWRJKLHAf3byTjvEGJ2r2471PcvBT28GCqF8pb5ARspt4NSZMKHC67NKHijPbNAR3fSgPs",
  "key14": "3euUqdHxYj1wGxWkK5MaDPdNT8LvFGxqGR1wktzKGUPZuM6qKTu1L5b68ByLjDhsRnFXynUBL1vxWKcWKtGsAwSz",
  "key15": "5ZCxWebbdgdyNrrLQCD3HnWPVC2yp8yhYge8CetV7o8ZvZVB8vXs4YwvYnC7EsfPmiUtjfhnywYhjR6SDKnWrQeP",
  "key16": "3SjbFukJMiD6w5s86B6NiHVf1teUAQK9wz1j1DUuaEHn3kZ8pgyraHKiHavm1QRndTwmDyf5VLGjNBbhhLsACAJn",
  "key17": "2ksBRyusBq1KWtrhqNcEACXeJv9CTz3m3b14bcQSwJbnPa5CMvRqjRB2MXEUDZHHL45RPxA3jyj2efSMH5UvMtEK",
  "key18": "54twaNoLM9Rs2jzURqo7D3wfomdpA3FVENb9MtjkvQCGgciesvZqLoLMhuFU9GK3BmMRLf1H6nCKz1BUvWbzf1z1",
  "key19": "CSNZPWmvNwBYfgVyFHu7DaZTDwaW7jE4bpkKde82oByzhrXKr65B5fcZ2Fv4zUQFs24gJbkVfa5fsxhDSBax3YM",
  "key20": "29nfPvFGjtATt3YrWcY3Abw7mgePFXahHhbJoe5LPbokyLhkxYN1Uk1mrQ1Hn37FDmDVCUzAJeqWZGt7CE5vppRL",
  "key21": "GwyWEwMJQZexD5W5Vz7kT2r27ni2E3f48krJ78zbWrubTJNS2vKaPFFrTiRTNNjBqM9c6cDiUbpaz5xTg9tnmsS",
  "key22": "32ki8iPaWN6faUFtnm55d5o7g3ieE5ZmNECA9gqtWdxtGAUqq6FPVhjbPY4YmvWCzz6U5HeiNSxqQ2wazC8Gyoha",
  "key23": "ntFRxjsaE7XjFtW1jfQRBD2EazV9U7oJq8qnR35y86bTKqaTqpoS7HfzAVuwaVHcuziZubhG68QED6D8Q6JoyWD",
  "key24": "3YMvnbUoiFbVaz2TCm2Wnf3T45oEXKdjtagSzV54Q8QixYNgGbJ9djC8DxMAt4iaRAayp5ZjgRq2ynaKgge2aw4n",
  "key25": "48HQDPmpCBAX1mjDnaXu8Dh6jUDt8dc6QMQmih7pqtcKSoRkWEbSwdz6LXpRgoEz1DHxeqBsmc8LyJcrEWsX7wG6",
  "key26": "2xmTrMmSV4UzvUCLgg6uPQF6A2q78uSVp5QGLxpkhgbqebvmnYUXYX2Rqh6h3WizBMtKK2329ugWkKbwYbAPJKcd",
  "key27": "5b6iU3ey5jD4onmTXzPF6VAD8wr6wLyGtSTU6bp3W8QmHJL1NxK21ZkyW32EgqFyhWjs7i1bbN9vovMFmKdeMAmP",
  "key28": "4njsfojux6yup4v8U6QpdzMMALoiugC62J4D5GRZxVV4VanpxWef9w9ZSF42QMZRFLuHB4QbRujtqnBNJxAhBQqe",
  "key29": "4YDmv7BPf9VtUusjQEqA4fseEDwQejk8jEqjed9yVdpGkubkpRy93efYeV8F344qDvM8zhyHZpMUDqTpa9fbgsyp",
  "key30": "3L5jubLs54G3omKnNWi4xpjbLyYBsguZGgkhb3UTWQcwudfyxYZwMhbHng2JJdsjW7D7KBZdYc4woSf8zy9XAxRS",
  "key31": "2qRytdKXLDq9AVVZgGz5Ujs9SEpdvLZ2XSC1eoGHjRPrVrdsjWwjH35gYuHmKH3NXbTcCKuHwcwUstfvU5HVFwFR"
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
