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
    "aDquMedaALSaKHc1ULcK2CKDUpBKb4iWrmNPfBTkaPFx2Rx346f1kh8KxXQtGaxwQcdDTx4RwePg9vaXM373dst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lq6y5xHwMr6Rfst3wSYZwfgVwDCq9GKEm5rbursESKEyiM7aPobhaESLw8SuhTjasezer8YbKiFBZub7Y3Q5Q5",
  "key1": "423B8a5QLwxaW4M9ZBzu7Z4fwDBCgN2BuocciBWSvBMLS3mwg4PsQ2RpaoBovq5EskcveuudNzUx4RvQnAejcaKe",
  "key2": "3Dk8feVZUzw9NtJAiXg73mqFF1cmySjtE9v84frzPL75MB5pdWbGMQFtwPqhkoCZo3XBUsvrrXqU2HJGCtuesndG",
  "key3": "2PmioLGXS2pv65AHTDBW86csexeVDw35rStp3M7bTWajBwrwtguUuPy91GEqHmxByuUf85HfCf6omX3GzQDwSgpd",
  "key4": "3fsfda4ZqUPvjZ3CaT8GXm6FbjHzPBmoStqXoxGAyWSeVXFVL1zTLDiWJeBaeBaYfDYwSwpEC3t6APLZzhYGnCZL",
  "key5": "4v4dLjNc4bXK3iceSAjzuDkrBscThihfsjSWy8eS5zGbPDzXFzCZ1uGengnQJVDg9Lg38SbpYVommahQ5Lih7ogL",
  "key6": "3dd9JaAgY7NEaQeJ8Zg98ZyMUVm6ezhAqUbZQsU5GVYuSEFbcvsFdTrTDhQN2nn9TWRmEMvziTShaGLsquWpk9oE",
  "key7": "4mPUkguZ6FzNiyw9c6ZMVWoaMhL12skcWr7qUZoppfoB8Cyqrn2KjBXrGh1SwoNB9BTGU6NzxEvSaJ6YZBTWPUtW",
  "key8": "cYMdvsswgZPrYyoLoahYF2H1RknRcfAL16zEGoq2PAntZssuJzXMRRiAH63683bZ2nYKuqN8DTshe1y31gyNBQq",
  "key9": "4kq7TLkycK3qxekR9U3MuoHws9DPGdBL3qmdh3vYNkMd5vBKsXJnvURWnUNJqYYMtnnLmcxx1jaMQy1VwgLsi31E",
  "key10": "56ZK1oYAXKhK1egK8WHtmscYX2e7HoNcnFe39q2r3NjR8JxntFxaKGx4JUgCg5PrEnoJwJQpvSSmXWwKURa1Qcji",
  "key11": "5UQG2q1wxiZ1i8pvFm9dvWjVsAoh2qM2HYhWLNUU6YmfHdbs6h3vKqnKUuKBykMZgCakyhzgKLnmr3jN3Tw5FsGu",
  "key12": "5Hi8nwP95TJuxhPDKKYQU3hWgjBHsyo1RfkfPCbLeA336NAjKZpJyMmeQuikHWbovCnpXwjBJ4MmgJTiDUARqgXB",
  "key13": "5WuMwKSdVXcBP79z8ncxSbZK6Ew8qqvz6XFutomRgewdkRB28GoEUXnZvCbjKtBmozUxMKc4ypMxum2rYu5pq6dz",
  "key14": "3u237jc4ELsYFN4RzNyFw5iFJU6dw8bqwtwztj9HNjL6PneEM3Aa4oD9x4CazTPnM8dvRb2MQ9QuJVK9ZCh2d3Pb",
  "key15": "5DQkUdb2JEaxnnoa7ypWwQPiKP9eBHrtxkWMnNqBn75zyggrAH3wetbKx6nbbKAWwhTCoN7YaPUy15GcQbmyfqYo",
  "key16": "3pKqgK7qmEyaymbeksGjey7ShD6S7nnMzfsZQai6CepM1H9gTjKskyq64RdmBWDev83iQkP4YzPwqCvPP3UXeBdG",
  "key17": "5913F9EW8aNeQdcfpWPSm5VkSxs28Raemrttqwv3W881tUdFjb7Tux5mtSWhqoMh4C6f94F4ne5eFhwGMX1xWG5C",
  "key18": "6VtC8bKPSGKDD3LXFoQQZ4GqQJh5TdKC1mW3gHL2W1JXaF7Fu2XsMRt483MFH6dxq93HufrgnTwYuCgi7HMSQey",
  "key19": "4o4gr5q6MNUenmkthYa9oDY69y4sxMNhSTwy7WVZkmANcqk8UL5YwyFZWMXo9jp8Hoph5NeoavesTPKyhFeMEbp",
  "key20": "2dzjpXhZMZVLkTYsV54KVCtZ37s57R2ZFnWNNKd6Xe4KapJ87V8WkUJ9ZiCCrYiFvXP2EN92sssVtA3R6dWDizAH",
  "key21": "55huGqEjhcvRnrEeaWgrmFJtbSJTnd51UbffqNzLie6PCzhs7hAzUA5pjQewdUBwzcpjo2ourLK6yZ2NDEwWpHpJ",
  "key22": "4C5UfAdB1rWn4j2Z35CbJ1TcyQG3iP3ogMH4FtrqzHVsgdSUV1cLsgwouXp2pHNRRtHCAgfCUKX82GxZL1Dh1V4D",
  "key23": "3eG8VyuWYmx52mkQXpYx3GHSEQJg1WhHaQYFCUnaR3tCs6JtdZ2Bf8Y1mnhGBb7LuH9MK5RYKPFL8ZQkwyYHvtfH",
  "key24": "3X2e2roknBvnBKVFnNG3KxWZbssENYJ787T79g5ww4SMyzy6SEisPVhRqrMXRcKeWKL7Ytdkb3AMxgiN7zSqKJLV",
  "key25": "4HX6ifRHx9KNHSgLWdUyhCYhok4aF6WUxUxn43EE72r4CBEtWa2EC9NV92Wbh1LmiBp9MCRgHjFSyzeDwGbL7SMb",
  "key26": "43E7soXoBwJDAhnTrgW2Ht591Gmvo17nWzHjxuvospiSQEM7VVrEUXWJED2ULEXe2soBZ5nCX4Ue4rJoWhz88LRs",
  "key27": "2TF9kShmSzkudtzHDjUrsiy4rHhdkUTJhHrKApdHmAGaxpzgUTyD4NTiqZxuAkQofSdiEeYcH5FL731DJQ7psB2g",
  "key28": "34Jq69WDLhf6fRnk4GuZv6e9vN3ZpQbQMvdciP6knFUsrTeR3kjpNxTai83nzEjM5Qqx51VFySfb5D9EZu7Du1or",
  "key29": "2aFmH2j1hX9ZF5gsDkR48jSEUKEEiiyAv6DeKwReXNVE5E52BUPwBJeDyMZNH9f2S3uru6YpekSi8jbTuSoNXkA7",
  "key30": "55W3S9xd8qK5TYkksQy987hEFATYBd8FyPfEijvLZv1mXGhkgAFcoCxSb6YSxcN8ZMGPdSeqtTxYoeukceso8jjP",
  "key31": "3sNPHnPG5CiL4fsxwbx8AuP8nGXHhAYHcmSgBoRZc6t4hN1FZsHMD8MkRM5MCHQjhcoLpdEmhN8F7UUYHRT66LDv",
  "key32": "4hVKWWDLq8Dm4w7yAG2qeLxa4Hru7hndzwm4HVbiXEWEMuZo9TwHMU8iV7GC3RQ8bE99TSkG7UDe6saBNP5H67sk",
  "key33": "61zbv7WyYkGxGbgFmTT4th78kVovarx3mT2MKQ9XTG2eW1BmAF49CJDPygb5vWyygMm16YpvN3nC3P33sSSvLMpB",
  "key34": "CLpeKhBcJKMrryEBU6N237ThNamaitKQQ82zmPU6zJRxZ96FRuYu7BsGgJixJm7gEwF4cXPUU8EuNDv41HrHq5q"
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
