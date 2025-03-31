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
    "4wvSbsm9Uq4FBv4j3UaPSsP6FoSKr1RUnZ3siGAvjL6Cnf76DwYEw8fM1txa6UkYSr4kfhTDcdmw9RAn6rqPs5Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pSM7RZACLbfTTzK9SVLZMiqQ817GXs1LfoyCNyRQJzeN2RQ4Zgwv84iLKGC6KPbecUU6zzrQCKovGEbDGCAaKX",
  "key1": "qgBDEkfGU9xDqi4vhiNL7eEewy7UyzkQ1c4ZstvkRdeMLUFEyk5NqymbpeDNJXVL7KpzGUPxDBLBwcREeFTrfUy",
  "key2": "7jWRTHYHZhmir5WsWxWjwLnsSuxn76pnGWgBvbcGLnduPk32cmPDdrG44NzqxurrPqZwburBYqNufqn3Y8zF4Sn",
  "key3": "2qHctiri5d15BHQfmHFUUmRybQKQMGedVzkNk3DdvYwFcSnvADu9iax4zyqUQAu14RVy7wnrwARBn7NZjffZU39M",
  "key4": "5Hi1mZTUCDDPnVtm45hDJu7dpr5yfVZs75nVAtdugTVxFNgxDEWqoNe3nxrStzDcp1HmWn4nj9ZSAux4EMT7jW4",
  "key5": "24k4zQmj1uoKrKoG9ojxk6TcvegZ8ci364SnJxdNizHUUv3jki7YN6tT8rLETB3PMuZEV2FxKRoziYPFsG1y9UBw",
  "key6": "39YfCU2PAhfpEm6BQtJw25EcXue7DMtsbQ1BKmyFkCUdpJyR1eXWJagAKSm9MmAJGzxrHEm65XiBmqp6N7fqH6JK",
  "key7": "35EdWhhSEbYksRNnu2PqsJJbJAzPnwB2JRhHYnxKEcjNf3aCg2r2zt3dLynGKWESrkEZ7tYTKs8hgGYRxTEbgfK5",
  "key8": "3gMrRVxnGuZKiFnc41AXfhJdiS5RLw859vV6rQ7DEP2yWJNSvaqpTqjfvz3ep9nyq1bWaktUb5dL7U2rwBgUnHb5",
  "key9": "5gmZYrWLyzBVk1DiwYjNRg1sJYrJ91hW4qswXd3DxK8nVnFAGWnv1y2cVEmAvDJFRjSfHbaKmSmLpakJPNXsR9W",
  "key10": "5ubWoKx9XcbVLwKo9u4Fa1gFQrei3N9Z9vy7H2iSgmsyGq7AKTte1KzeF72jxv1ymUAaP2hUL2KFcPWAdMtKedjn",
  "key11": "Z649qq4Ana2SgpPa5KcFrim9bLXZJHHFHT46FHM4Xx9adXZNrfb9PmjA9KGbVyPFMNQeu1PXf89dbqAoeRUofvS",
  "key12": "QaLdweTHeZJwJVZ7eeszdr1ut1iJDCiV4przTbGNoc64FtaLUpLpidwuQQAuk8ozd2GSQb3AVDFdihitijpo46C",
  "key13": "tmykQ75Yvjf2iFoyFsgC9SkeU6SqtHuMLzDwyMmnkL5xkZdatX2VRoWmgLeksy9wS1bjwcxwJnGBHZA2s9b3Mmo",
  "key14": "5vAY6cJ83JvGMQXdqJN3wnzNxdSMU3dbTNAucBKgVP9cN7go1zg1kRaJCPpcB2BXTB7AHwraFYuwhshLeVsQhdHU",
  "key15": "3S7MHHTLx3WLR7Y2jHGEjUhTRAXkeK3asZBXANRpa1GcfiNjsKopn4RS7WXw1oSLVmz5hF94NG2Xkg93mYMzrL47",
  "key16": "5wXpT4MmCXiPYA1XJ9UeKZm9PtdypGCDK7AsC1K9Fbwz2bNcdA6Q9WYB2KbXRNKw21hNR2ruD6RxovPKvmq6vLZT",
  "key17": "RnAJkYoxr1uLHrTMNZUzLySPHvE8VSstGHxE18pTkpsx7iN2oLjqsatfb1y7RBXH4HqQoLFj8hZXRPNQiHoYLUY",
  "key18": "2HMfcm7MLJNUFZtm5QeEqwdPdq3jATBcMWfqbYRdKKKfrz7624K3CfKJ3MUvNG1dWFQcQoS4aMf54SvkqFgciM4j",
  "key19": "PpQVzx9DoHm7s1BLUzH5gTU4d4wnHrdAzp7YgfkDvVUmYQMkwCd4vY4scurS8xSnx8YPD38Asg1HqkSxcoK3D5B",
  "key20": "BpYBj791zuZxeu2RXaaDnERDdUuUm2uN9PWdv4dJbJedkj9Xq5wU9kZW4aohNVfmzL2ZN3yhhTw4LehZLismMn8",
  "key21": "3mui9bcoWysZgb978dAkG1hNVCB8auBLC1Xt9KNC4hp7cfogKhqBUn3JZsoq3L8uGFSDGnJ9f5NMcuBYmwwePRAL",
  "key22": "65B4XuB7vVt3UpDbUZtJtmtupkxxQPJKSp8B6k3LT8UzPiJYzfhWge9kMprKss1X8HxTaUPUiGEeDGV4cAphW8cW",
  "key23": "39K5ZE2yRHjzs7JfLvb8SQZx7JE3aXgN9eEzJN19uT2jAenmYabSXpRyprMSTkf5iBZUUDtza7L618VwZyYU3jHs",
  "key24": "2GLbyJNHdDGQDfe4syWXdVAyZjEJXF7dXUegFV5UFmiEeCxzWpLvZ7wvjuAVUrE1Y396gXuR6dm3Kb5Gkt8sDUzY",
  "key25": "52doqJ6k64yn7FFso8kfsReEWcCXxKwYLpHCpAJStnzDE3otyBjpKgww3J6oxEBGma8Jw7u8CXtQw4L5jJ6dcFfZ",
  "key26": "XkrNGQgfyNPy9pbVGNQnpWrSZ6UnyCrFF7hPisxCQcYYeGsXw5DXAGSD3LdpzC1D1ANhYYXybzWMtUfKiDPHRe9",
  "key27": "2TBbJE4jAarz2VmXhXE1cjBSbjp7ixcuWmxihd3wwQCz4C6oTnGsiwxhBYSXwGGAyXiP9if9Z8iqK7pSYvTXCxW2",
  "key28": "5raJMbw58FCYKvLEZn21NTbgqs2Fo5DQyHF64buERAornV4xNGS1HxPs8ZiSgpaVScr2wScUpTi9fatpsJA1dWEZ",
  "key29": "2J9Astgan3QerqhiFetsPJEyXzB29NZnP8JUxzf9JTpcVNHzJ3sMzDSFq2vgbKexHcLwZzD19xfR6ktpEfDBCx2E",
  "key30": "YjCNy2zqj5LP8Xu9vP5a38rPjbspPQMadAxWRVa1h7mW2XQxw8k4aBdMd1Zj5xmcaaym95wPgJVMMxuVNuo98Ri",
  "key31": "238CfLKtxbZvDLhyxPnAQQe2aqjVDhqjUEcbJmpNQFk1GGZPW5dcxfPYyoQ77hUGgSc1TYKHPQYQHgQTBf7ukdVQ",
  "key32": "aQe5Q5WsthQuAFTzxyjZRqUn71Nw9sVZxYWKNAUo1tvHy1qoHE3uRiBYgdABTkYCKSdcMoTkTNusGtMMj2sPS6D",
  "key33": "3QsNpn9M3zhKGHo1s2i9PJgCUNxd2irLdEb4iY9mN9siaEwcHNe7e4Wt7ndtQj4D1sx5dzEcgqW7ySktBFwHzYqK",
  "key34": "ZovrRxUfyYMqBNunz9CoBkepJ72w9NgSzqvwN7qPjnZQcQRcKYKrn1bCbdoowrhcJAK5n5ZgG8y2XAFBNCUVuEq",
  "key35": "2xEvfpsy2DXhAy7DaFfTdUaARB3c4e2HtjSgckc5vBW4yCikrXNgnE2NhhAoqb3tEFZD7fqUCq9iRsnZWmy9gxqB",
  "key36": "54psynCVpm9vKLgiFoEEG2znMnK3zvttAD1syczdxhZaBsKQvbUKdrUx6hqjzqcEDPTknbg8YCMGExUVig5frjgG",
  "key37": "zGH5JFJKSJfUMc3kZhNXCYjebD7QkGGQUsHrQ4BiXkcB34nJmYmZx8zjfMq7mjLGrKmsdRTJgzNhtRrVScaExwA",
  "key38": "AQjT2MqbJdvNaZJg9QaL2jFFGhsfZD5fKancuKxxwEnXpsuMVpHDh84NGGu9ASCNC4Na9NBm9B5NbFwUhc37itZ"
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
