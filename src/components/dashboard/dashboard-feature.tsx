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
    "5tKYz7MqDuvJZZMsKaatSstVc9bHqcZ4xqLxZLMWSxQWmh1Gh2UHg4jPUUYEmvZk9KZFRKv3RcvXVczD7vzHfRAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWiJVUAmT8BUEX9BRWqQKvuFSwgYyVfU8CXtgjiSeBhDviz6MhUsb4nmDhnve7zgCnHAcXyZYQxHAFc12PZXwda",
  "key1": "3FArFNHggJF1weRDogm5MfQnEvp5PCuytFW7ye2sMSdLxEqPfmFnhUJyAyfFLH8JQ7vMCjAqgJpZjixtvLAbepBd",
  "key2": "45zPFabwL5YgxUE2z2qbRMJWp7kineMBQje8XgeeXUad1SaRggnJ5i9zD2MuWDeGYEUeniPicVkow1DoD5QMsf4n",
  "key3": "3JhDbKNVLyVKcYLCo7itCcCoc5Hwgd5qBuc8T4hgovKdPy9o3jWS2qQGFHnsfrq4tuyuqK9ZS4377x7nhKtKbfFX",
  "key4": "67RQS2jRUArRANm5nmmzYqZ81R3m2zxipUzn51vUc1bGpomTZsHu3AyWgZpHSFWSVc9wT8NdAioM6r1qje75mPz9",
  "key5": "5mXG2J6F6tW7wQUS9LSb3kdX9UNRRVqUP7NmGXttAJmrdYUUSVntaqRw5pvuPkbzXEhsmgRfmTbLDwrjvYB4Jpt9",
  "key6": "5Sn9ktbh53b646uQbkNtkMKkPrHRaSd79DmvJ63CkMCKZ5yNtpuurekJiRdYMXZuaBaf9zmGkXCQqW5y9u6G9Qzg",
  "key7": "23yputuRzRXHVT1ENTrhxQJmeJPGVHk1bPAqFBfFGv8gRQ7TrcrNHbdFe96mbKBdRFNsKPFZ91bMnRhgUS4pjvUu",
  "key8": "2T5JFwvzmgENtsrG2iwSreWDXTZ1aRkLnegRW4FZNns8Z7prkwMMiwarhpX5MHadDe5ckPUuecyi8m1yHNztUE4h",
  "key9": "63Wg9MsFHfALtn2yfpGcbDy6DBC63vqC2ZKvQTJo9GAhWbSskas34CqmDAiT6zrWMvUdYHD4TRQzjShVZizkf34P",
  "key10": "3wBKwQNLD3B1yjfTPy7AduFbdoytrLZAX4qnMmzppXwD7xwS8t5fNR6HYTaQLWmr3KQAStM8ESHjCSczGASVL66i",
  "key11": "5kpthVYJn4URWbeonnnAPUjQijZGF66aM9ocFqdhaymzXnX8iezY3wbfwh3JCYJic8f9fgPJAS6qt9vUUZ54nEkW",
  "key12": "4tetkvLHJAxDKzjrmP7vXPZQYXcMtasXANEsjPWRX5R5bs7EZ7tGumTgVy4Gu8DaNjLnajMueZVRvQJf3UFnGcYH",
  "key13": "36xJ7rqwDhHFnWKRPQj7jspgSw4icuyym8nF1xWgKTmUC7oUuFuxhoxYvP4o96Dc5QSMAL6sB2q5GQiiQqkgwPfh",
  "key14": "3SLCvMxKZRddHrkSzoXjWGbnjqZDnzzXi3iWbXk8gkdWx5nbTjC4m2eYhdY96R2Kf5RY36tPK9xDYRQq7dCTjtkD",
  "key15": "4R6CPxHTgNG5X8Vp2T5F1K7PBw7U6pK24zMFVP9CGRmsTrf78Dyn9Bd6NtPmgkZnncNLGKyaBgKJcwamd9EygkXu",
  "key16": "HhoKLRC8dngV2DVgY6ParPbMhWj2eJjLkY73sNKQnHWtiLbrNVyYNHKG9Burc3hF3eUPFYsfaSeNofTMd5hnUat",
  "key17": "4omD9dNtLwd6KAedHvd6Cy8NmKE5fiu514MxwxntMAwAeoCGZXaG2xHjUeFicREZSHxjmGgRRgV9EuLHLdFUcd1E",
  "key18": "3BhbYHbjJLexwHqSK7Tw69GVAbGEnWetAwn1EYoBNKK42pqdg3BAbUazNrZcAfq7Ja7nw3SS7eLRShYXc3uTzMgX",
  "key19": "5h3HDD8fq8hj6Xi2E2vV8Yfm6VKso1T4a3ccCXVRBB4r4YrLcym2ACyZmrDYM5vn3bs5qhuepN1fxWwUgWBa5KC5",
  "key20": "5FizTk78EtJq2orRJvUw1RbL5t3KwtuWDEcAFjeYsM3hQ2YNfctHDxNyobhp9zdhm6bTXXfGmD3DoZjPK9LqR9rk",
  "key21": "3LZaoAoL9v1RbwCvPxzcu845zCSU4NVw29dY1FdUUGWPJisuw4MV1VXvoB1MCEhWddbz4YLrEXhudphZMn89vgJa",
  "key22": "4TuZ5kAQP8GiNxtk6NYmtdsqQYoinWe9fhWq9XstYgau18dmbC21pwzUnyh53YeJWedRAFVwmNsRNsRZx1uwRMXF",
  "key23": "4gkBAjvBu1dBcVvoXQHxd1i2fu1ks68BLGiF1VJaBva7nwfkZtMEqU9ty1ppWpegdMzCV8tbUYafxqxUApsQchZM",
  "key24": "3WDqZFWfafs6iXjMS3r3t3kCL1ojHLvM9NQv6cVcGQEziwbvyRLPGhoqaErLqXopFQN3DZcGjRkV6E26ckNK3rfw",
  "key25": "2PHJUCa7mhm8n2HNFfMjXgjF55SoZNjHRu5ELiFgp1jPAcZmKJMAsJnXsQG6i9dDuHxYameKARZquNDztAe54cHe",
  "key26": "uWNAFX5NQkSDtyDnRUXHELnhZHzikbi4WVGPKY1jvkdyT1GumZEQCKpm1GESvWv8Yaq1J3sAHkg192Q6TJFMCFh",
  "key27": "2RKERRHvAP2ws4dUmHabjwBuHq2cxFyXfwutiaQbpx3o8CF5fko19KiHkMNVPodB5ks6d1fE3pDGEA8tHYp6oidW",
  "key28": "5hB4mochqj1jJ79v5w4PAKQdoiexjziCNUQWwCChManFxXvbFf6bFxWC4xLrRakH4PvrpBXEAQDbvozYdaz8vEAs",
  "key29": "266yyNZQpZif5XH4RH1EvU7uanUp6Txjirj4Yn2ku8wiWZMp7JZkHBK8uj6ogit9UcJbzVrtrWuRfYGmjXnxoPhS",
  "key30": "oudJyc6sYRzJ3LmVC9129xJdRs5o5EMqH71sDJ5zGf4UM8ARFKCrQS4CHLRVHDQCAuPHA5Ysp2HBJmefk1DgQio",
  "key31": "315CKZWAEcVd2QEn9ARXQTNRXaHScZWi863FFY6hCcWMEeKrLnduY7rtiyeUg7FX3vTQkoAtSoddbE7p1Jcq64Y2",
  "key32": "5tAtrZ5vN7UQKe3fsuHiPo9fxmf4YxDCD5KfUUDsbTpiGFXa9MZSMktnCupHgu3QTVRzkrrCc2W4Bo1Wo6MZLxQf",
  "key33": "3TY4MiNgrdM3amwZ4uZWkvPnHCWtsREkEt1tq7oGSr9RAsH5cBdXEzziUkAGTEE5fyLVozfAhCTWeZ1Ei6BpfLMx",
  "key34": "3PmvJUYexcJQgSamnyMvB2mWA3zpTEZ6ubthFmMqVnK1Csfa3LXvKHxfMCSPa4UnroduQ584PB5PwGoanYPdgjiL",
  "key35": "2tbTQuUSjCBq9ofDTVRK3UcjPBMqH8jmvJkJeAAGjKGLQwMEybXjTECY2exP9auxux1Uhtax8u3AaFiu5n86tBsh",
  "key36": "2ULZ6Myu9gjKGw1FYT3MJvxGP1Z2hyAPhCaU3b8osnG9BLDTpWbHqVA4ubvpn9tuLAErDfepyRpMhgu2NB4xjyG",
  "key37": "5jVZggCkZjC7oBq4UhytZevES5Mfjk8iRfWvLj2fut3vYGb23Hn9wPE3XTBJFr8vB5P1yR5emsd3CRL79gA4oj7e",
  "key38": "2x7HXnyYy5VE1rFMm8EqeJT94mhkz1MUsLcJifrsgxHNmDQR1fdrK6XUYthmJBLnHmSkeuhT9w9F4ZkisvDwqYwH"
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
