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
    "5mwYTGcEE5H4HgZxEhy48QHNKHKhryWc4dD9TK6Db4vFL6zhLuke63w31F3Aa3MhdmVbbj3p6qzH5CpiCJpecz8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PyUcx3arYRxmzPjBaJ9mo7D43KryzSKzEiMs29d4j7AV9CF9ZssehfhvRV3WpzTP2sshSyqAFQTDX3DSfteKhpc",
  "key1": "wv3ERnBjQgBqd7Q44CUpc5dKt5Pc7QTDnGAFdgQnoGN777oGgFxfdtsQz172bEbwk5BH9rVMZghxeyF65u3Baq9",
  "key2": "2p7wjkvjRAmWkwpnuuSuXLWE8fvkQ2vTgSRCV4QPDuSVahefpHQsfH57qRsMKzfAbhWE16ELchbpvPfPTwteSYos",
  "key3": "2z2zbvvym7y95nq5dNv9rKwU83fcKY9jVDvt9dSrJCX6XKkXpGKfaEnSgZGxG5MgSWurZ83tZwxheRp7WEE8gzFp",
  "key4": "5zCNDuBNDTgVrpUNq5phMzwhtWEahGdrnHwF58SUQ4SjzGXqYkjL48XnT37yGZ42LaKuZUU2MjC4vncuSnUcbcyn",
  "key5": "ChdBZnbDqJ4MAuWYoVaKG1ZjxfsSbEBXdAG3titkMqF77d8QY7doFYtnVKH5EAs57LQebEVpFSAWzPHhpxvRq6L",
  "key6": "3ixzx6J1ZJY8PjFnWaaMUZ79gieMDiyprdPrU4VbVvBFRWsWrTvdycD12CHgchKEMmwkpyH6AkN4mwMyHnA1NszD",
  "key7": "4VDTf1ESiYW9UpLvL5Ux4N7fbwAEBx6diPXVLUNY5o6Y1xwnRWGJbByU9c4Ax422wxsvvGLTjLtrSkuSTbqdPwWj",
  "key8": "5EPg43AAdgWzWT8dEKyLRxJwSQ7YyPKV8Zg1tzfDFBe8thrUzpRqfWwbgrtMabj3UCEGt6azi3K35Mk45J4NJUTQ",
  "key9": "eCgahghR8xSdq5Fpe7DTUtLc6hzCmJBakbUWmU8LmtkALYjGVx5DREaw2ryB5LgUXrxihyRzANCrpWUAEJWXxFF",
  "key10": "2jt8TMEaeWrkNS5GZYRhpVJou1T3ViavMQ6kFpnE8g3jRZwZGTFYQq85g5DvKxE5iFVYgVAzkbSSYCLztt5LwG7m",
  "key11": "25oPhMg3UcpjH53WAcvMQPffTjYUo4v7MeSrdvEUX5GRx6k8GtmgyH82KvZ64ezEyWxVgm8VDMvhCNJfcF5Vaeot",
  "key12": "45LNtig8RZRk1amxfhqp8YdEhQVUwPd8VH26zz8JmSZfVjd5t86YcxoF5DAmHVuJXyxXhXqRjQdBNwHSMi3JfoZ1",
  "key13": "4A2oPE3tWBet3oTJGz9ZkcJ9iHPXcEBiPUcj9xXyL3zc1RTTgKx92vXbTfUZ2EE4tjZEHw61SAMH25PwefNUfNiH",
  "key14": "o7zYJxvAEc7RPUnKdkMMYyb3h67Tt1YEAYrsxzbGY8CRDoQ9E8pP9Kvc6mKPfkCy75Qow2hAwCaHeT9YfuH17nt",
  "key15": "43JhG1Mjjsb8hxmCrk5EPoUpnJjfJvP6ynZsLcySk5CYTfKuJdHesRHFZp4RCSi39MfnW9ajfrERnxpkn7ZDJsm1",
  "key16": "5ueDdskuHtmrkW4vyxA9RBwUSS8Wij9HrDAqKB1uK71rcNsEcQqZBiSjfqEng4Ckxh9SFSWPUrDRkBmJJmDpzxV8",
  "key17": "2kEvnhaREwErjjGdttGSywuafvPNXNVpSMw7ogEVpSpnm8armxJQh7QhYz4LYFCjFnNJAsockJRRKJRA74BgJCjK",
  "key18": "2c12XbiAgd2jAG7ojm6UbpVy5a9yfsSK1VMjsJfqZFkgXsSzEZMqBuMNsxdiXxesHAGpWaRyfWLY1BQbPUUvhMxk",
  "key19": "32Nr1cEBfPborXPhqWgbdJmHF8juxMsvvD1yc8VfqguCq8EnahiCXB58jokakFqphJ9EfFmxpMK4ioVTEyge5VE7",
  "key20": "4iQTqYFLAms666j3f6ZDikT8DUWYHC78iPAEUs8v9agWzj3g5P8EmWCptjqj5WrHrVtc3c8wHwqgyUWM2K2XBQFx",
  "key21": "WHgzaxgaUPmMQKfv4myust8kzjB5ZgUn6nTjFm6maDZ5J7wz44Uo2yveKvBZAaSVzeQ1Z8cKzRWJJXtUaPewYUG",
  "key22": "4Sv3p74JTkvoW34cnDoX8aX1mWRgYHnKJsdPdsj8gVdCALZ8gZMah2LB2TB2ZG8h9h1kDq6Sdo6xYqov3DV73L1K",
  "key23": "2C77HKJGHJcvt3J2wxqLKrcf4qTHCWucbEiXGv1cYtpgo6i9Z6ESoqqkt2RQGfbotxn3wiSGuNr1reLjXzCqSw2C",
  "key24": "4XouJX3d8WB8cWrbgiHgwo1qVFFC59QSFKSnmNVUM3dkmXdeG1dGmWCHCxEXkqKTCavKJiFJAxkm343YimEZ8up",
  "key25": "3ehUuqKePU7iGrcEnisJaoiS24qUbZiNvCmLtvxATQJgkMZMzb1bVSQNTXfCdeWMMV6R584NTfGk5Jkatethr1TE",
  "key26": "4G8JYEStYzzcTfXNYj3f9U4oAokGEVMB7bUhLTZw222kSYvFJpnm3M9Zd6v5UY9XfgVA1DwNjx84N3Qrs8tpLQ2Q",
  "key27": "TZiEy1Mwdn3qLVa3jW3bpr4PJrkKHJfrZtevYWFQVVjnwAmD4hDaPSGNwvUCxML3pjuQ1XEVED4taugJpQWXX31",
  "key28": "4LoSjYdN8ijs7v4eo4jfyg3tf6V45ZJB78tmyYQXUQvH9tvJYLehB2oR3KrLQxSm8fokwYaveo15Dsn45vhkGCZW",
  "key29": "2rPvg1bVnW9AAJQtyu32wajFz7ux5Z2y2KLEjrBC2c91WPTEnGshJDTeSALLWR316sFe4ERgj9jFDFdeTkKoFXgG",
  "key30": "3fgEVy3DXYQgUW77Enhju57hLDTn9gAhZrjTkumqLBTeca2M781C5hAJR1skxpqiABsCfBxKkizcC6YavkzBzRUN",
  "key31": "63cQbBXTWbtFvmNxdHabFegLPTvZASdScyXc4ZTBaHuXMNnwsaXB3pcdiRCKsEGFJTzWDe2jYdBTyx9xgy56xFnV",
  "key32": "44WhyEa4HzRSpi3EmpjjAkKpUcVtiJFcDsmJmRjhTFmrSNpPtGQdfiobPahM664mXP8xqHTSjTXrWM9oyQhS8n5n",
  "key33": "3EEgsHgBqLGoRw4WjHKzMRabGbkiRJoXi1o9GuEK644U36DKuU7866gekgxxtMdSWXiK5TMzoXY9S66sTuaDLRbm",
  "key34": "4YHopw8gDh6YMxUixUyY5v2ywbgBWH7HbyV7N4WondiGrF5UHwUwL1Z3vZevjdeWkfsuwTDRdy87SGWEV3cFbvP8",
  "key35": "3boRGWxrQbHKBFGuzuGzRZdhR4fFUpCz2KZ4pLHnEgGPuhqFgrJ3eP71YnMi26hp5zeK5RTNuDceL77P5KiSTky3",
  "key36": "3q1iDqWp9VSzE5S9Qh9GWJWn4bL8xurD437qr4n2YiCjNuTGHXQRY9E9AEXWkfsiRLb6kWKDRDEy3LAo1YJdWRTV",
  "key37": "39fNsnrbEwA2YcXP1gafQyMF2msvYwaVVLNDBwXRtE6kSd8Pi99kFFcdVbNs9n9VnEPEcbrHVgaiPkpAPkHEDySm",
  "key38": "3P2PhFXiaCHopye7seYB9uFzCkTXdVRvA7AuoC3NGWPpJUwnf2pzpZ6fDdgpKrgxo5AfQhiAa2GARMvMWksRYwFv",
  "key39": "4JsryT7mq1yQXRxWXq1AZBdrx2J2TsoSSfbqVpibDmyw7YkNtB2vZQ23Bdi7HyATsdQYV9vCc9qMdiJ87L7SUXQG",
  "key40": "2dVHfH3GtKjr66CD3BqPCmPXxpfHkr587UHyJdQjQjeEB4vuLXvaCmn7KsLAXUS3VH7dfPpfcunGQS4MZxtBPvjp"
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
