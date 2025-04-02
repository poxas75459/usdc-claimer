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
    "38NJ9iBytWgvmfS5Ehm3FXwfqp2BYJV5PAH7eHPLCpyKEZUuKi7cpGNMTchZmKqEtHx6WB9oApBcFrJup9iPcZ9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkG89ybNCACLi3JRc8G2GYZ2Fnne99AzB23kg3QNyucp6PMCAPhVN7VLRbEScEvdms6dUEuZ4brLmiRKBpHkNBm",
  "key1": "5EfUhrbWqdEut3BuQspyc1STpbPUvhRYk3ece7QxhpVEUybwAusDWcxLLXM4CMcLVkxguiwMHknFhR71YTCDeNAz",
  "key2": "4LY8FgiyMWzAK94K8rRqSvVU4GJ3jphiYtMxXARs64pUJCn2bqy5gWr6GXD5cpPPKKGma5KcSR7ZFPfMMzwAEGkv",
  "key3": "2iPVBi8VfqbkuktKGraUkpFWSS7pNUR9AZZY5wGVGwsch5LV3bX5jLq7jNkdLHtxyLS767Z4K4gjfZNwJjqLmurd",
  "key4": "3iyCsJxx3c1wqLeCcCUxaf5XjgUdbXTUAq6wge5ZvhxevRswEYKtu1gYmb75qpBDc5BCTghWhiN145Y5bEw2AiHe",
  "key5": "5cihGwaCstmRGJyZ8ubhCugcrL7zQUaYRDnmbJRpipdJUqoC7JmWWKy68g2LoRG6SHbqEuMqtcCPTYicv34vvktm",
  "key6": "38VVDXAPXzSwVgm1oyVywLgDgo7NLNJJLZi89BqLSWaymP2gHHeebvdakxbxM9nWugwa1YUht44Mtdz2NLm7jt8H",
  "key7": "hgbUN2KYxp8fZgC6aTzehqeqe732nGzfyzaEhgAfpoXUWDXBWP797HeChw9sSmLWqttXB3xq3WXtwsX1r4DfAAz",
  "key8": "2NFbrcbam9R19G8w1qcoP1b4bd3xyGNaFUGhjzZTPhpdo9SURh4bJYG8KPx4qe4UgALeXhc5ttvCcN8AC2pXCrj3",
  "key9": "5U5M31rVNK8YTTa6GZ2BKmbKuBRUMhohdrvGFkXxSCVkqrLSaZR6FNbfuwF9G4zxyg1bSYaKeBu62VKH6kcREk9x",
  "key10": "2uCYiMJd8jhD4wi27MqDsJF2gQrhG8JcAa725VmN6KHZ2HgqdwExpsV6LE35Hr6ipigThuBRUhQw5oez2MkmaE3z",
  "key11": "257xUFBaRhzjP1CTFt92UuyWfye6vgDfsyR5zDvv48UxwaPy3RWAKM7E2hK4BjkgAtdNA5xpNuKhzo7Yv1S6bFXR",
  "key12": "ZRfzs7vyFJUTXk1wPDykQrU8u7PVNoMshu7c3ynn3o9TfSPRmZYxSFftf3NqBjjQjyhsCEa3qCXxkzpfDgAoU5F",
  "key13": "5JBwcKMqR3gBJzfrZSRtKi7VCADARqkz5pY1dt1ThnX6ohhqbvate9pbxfmBTQFd93DMbRFfWBTHHFAdJRnpGsjy",
  "key14": "3XvnKsiGuaCGJLVC3DKvpHxTXWHFuF4SmRjVu5uD3UTdWpzyAW83KaBndqe6Ftnj49rVdcUGwFU4yxUfdd4nq26M",
  "key15": "3s9sAtB9H3ScKMZiYv4DyUYwA1zvr8YykF1ifUbzuDJKMND6FRbHKhewWeYUAytg1hHQHrbGyMxjGKVJv6yfmESC",
  "key16": "2MUd9yBifhhaEFmLdUdcA755Y2T8wmhJKMj4eiokESBBUTTSoY7zEYcXrqh2qQaZKTk3BUK5y2XP4Kyj2g3bDUqw",
  "key17": "2DPM1jjbN6hfC6Q7sNJ7ygQfKWhtai59hVbNwzGFRjR7gspydsnfyGkj9TPpUwM7AYPhjtMXm7KZ5xqcQ8Ldu5rw",
  "key18": "4i7u9AKzNSFim29SLLdRGuWaynzvDk8pRiY61ckT2by3onjNvTFfVaBYH3MpaQwJE2uC4wcYbUcYeptUD27BvZPo",
  "key19": "22gL9HvE7dLxTDGkNYzposoqrmQFLn5eXJFCzrgAk4YVcZUM8VKeXC4Xqhieyoy5pK6uneP6Qgd7nTkHnyrxKnf3",
  "key20": "2Vby4zzF7edzSGfFDMt7VHcR4rK1EgzpKwzLAiYP8hUCzWoWtDammJEkb1YCfMksgfAWuhhm5WPLVwhhHi9Vbghc",
  "key21": "2hJnjovBp6RV3Z2UwMQL2Eixr6LWoabhxxLRy7216ftY9oAA2QU9qzBJZZLrzdMeCmo4xcdw7odSKZpceiLWfujE",
  "key22": "5Xo66FooYhuinqSrC8vnZQTXBUaLeeso7jXjHfhdTaTipvQYriVNajsJEMqBEnLDQyL7q1GWndUsLxo4z5foW4p",
  "key23": "ivXxnmcbGc9bt5yGYsFjwC6jWfzZfsaVK2cc279WTPNh8JTvr6MhXXcT2esSuBZ22K85vyeAnareGo6i26wWBPJ",
  "key24": "4bWwQR11862YDx2zQBmEtomDN5MsiQaLdieVjr59Hf9rT7WJ654eHzdyAjSeWNCLfDrLucFo4sJvPpsqz3DZoJpY",
  "key25": "4UqhmrQzMRnGJTrJDh5zqA1wWJmNmqb1AkgyytF8o4NQE3Z2sUDqvkadMvBjMh8wSSMefm1CP7iwSBDcWRBeWBqD",
  "key26": "CmkYy2RBMkbFeC6yCMmXgyriDLA57GFpSmsH39iASJwCv4hA7NHDc2E1GzjtVVm2bXPwx4H9aJD53YPUgsceFwR",
  "key27": "5wVyJSQ3ok7hPEBJpPYdKwXgwMWQZPxUvJEEWXTk3spn8xPzAFrK2DcxGcvjQDpNVW5Bgx732q5gBz88qFePZq5Y",
  "key28": "Ts76MfcjooVihJSCKMWZLSdP4bRA2JacNVMWejbidPVLyDvCCpsqjxuAFJd2VwJ2pcCpFzQx8PvWJx7FzavR2H2",
  "key29": "WPybRsRMZXS9KAeddsYnSZupLdvX4pyfzb12cnwdZWzcMLDXaXbUZtPzQXbdbsf8XmChVaAo6XGr7SzNCWpSo2B",
  "key30": "3s7hvLL43Q8kVjpZRRWg1ZBkFgpPou1t8ry93qwZtNhNq4y8bkcbBnESJCp5tz51mcGQJr5dva3PjzKw6EuzszN4",
  "key31": "3Wt91pK6ZPBMv2FLyq4wUziYrZUpCU9UkLAfTcjX5LWtjwEdf5UvtgSJVqjbD8W9q5G8pgqMDJXJiwGNdC5RipH",
  "key32": "4bKpxgJsCjSUUvUiXBiMmPpvEi3zEHKcpin4s96sRTARX4itHKXpYK1MDhbK9yRpWQonehNWyGsEjjbrC9yqFMRE",
  "key33": "YFCaAJcLrfC5zirCCTFWFKK8sBeJTA3QhuQNkjNXavd1GGmdAD3VKmSee4uVDJq68yWJmyFuyVNexAEbX1Xtba1",
  "key34": "4s5Aq2ASRQHiq787n8pZjNQEfxsgjmcexE6U2o5rHuMydY8JsB9ppHp8deRT2rp7NxsmDn3CXyzXRdbyRRFk8KC9",
  "key35": "5CBvmHM7ou6nLEvfPEQPcUKud6hSJbrxWrkS43hGxB8d8rv3YnAxUYAo3ADRaKmDzT92DqWbDfPUfhH4MMyGULPZ",
  "key36": "4kKKnidiVa6TFXkBSquYaXABUDi6BZBGeSsDtcJuM45FkVf1ek4PZFBFyQWR76bnDVotmtQhHXp5ueEohXt7QH8y"
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
