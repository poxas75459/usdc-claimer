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
    "3PUoU9vAZCkqE1PMkssjf498tDFajjrWi9fhS8peet3ijj8vmBPk7K5RMhPWzGfJJmHzA3gqexBxgmmXSp9FsoKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtRXDLGh3uf7xf5PgGwswFDYfB94roBetEuXe5P7ht5dGJyCB2hYxDGA8qtpE6UwQ2z4Z1LBBRqoYSJiMo55cCH",
  "key1": "2X21MXBb8Vjs1vSjvMtW1rPrgDnrLzVTYe5pbwcFSjWBDVhQgKS4gqJRsyrzn4Q6uGsWq2ys6KVCQFVWQj2qUQyT",
  "key2": "3MSuhgsuKSeki3pVb9dAqvUWPYPMVgbm2TN9RfBfdFJSm95XXcSbufSw35A4jKdbe8Vn9w75zYB7kLhpHzTmRxww",
  "key3": "4Hv3uAVZ4WNsy1h4Jgc5VXZRA4RMM5hry1t5ovMSF2DiLgSLzSr8ZDV664Kiq88ChkeZHBT9Pcdk4MnpSrpciKMj",
  "key4": "3TVxxJ9h7fRTkdMfBXguCt7JVHiSRZiSY9NXwbBrGyyZXC6hHCFn7HJiX5Z3MxGVEZ4AEMaNEH1kTeqbhrFuSCWZ",
  "key5": "4GzHc5k6FB41ZqyZAGtqfdPSuGYpAG9KFfLUwWrSMmtZasHDrZRfWjZ4PXu6oxpdioUgYKPbkzNDn9zjVXFzCXTv",
  "key6": "4SYYkox1tQLsFQkv1FZ9SJMzDHpnz1mxy3SRnN4wcXHTFJSvWQG9nzWLvp4fPqcEATP22c6pWgJEBihvn5vj4n1K",
  "key7": "3qH9v5g6K3GQSBeGpbRJQsFMj9eUfWFTJ2bW3VnjwjpTsaJbH8FFGLaeHXSg1bdJ8nbW2hTABTMT2BjxvoeTgNLn",
  "key8": "2admAkECdoPWQoezgjjsBePtwiNh3NP7bYnjpWfxug5aeJodrQeWVFFi5g36bzX4yKHTuVioAofFqQsK8F3Y2g9H",
  "key9": "a5iH7aWsSEdPYsAkWLGfNg34wMoX3zzf2M8D4ZpmpiLWWo8iE6FPg8fV5aW4jQWseFyypyJTHimou4n73HTFu2K",
  "key10": "3N5eLeFDnPbtZZnshNAmF41Mb9dd9Xb7dmVFqKDtpKN877T5w5H6ppFS9u2SoAzYXsDmYWoCxJmk3A9vdsFcg14T",
  "key11": "3rbYA5AtTGAmhtYfmqLecxrSghcAfs1464aEpG1Kx3szPtrpRwqNyJRq5XnKrLRoM5v6N2FZ1Gtbqa3n6NnE2Zab",
  "key12": "4hS69EksvE1amnGjuPQqFvetj4KjQBaqjpo1P8XLWSBzAEauBAadT4Fdd9LDhJYeDkxVVPmMmuA1e8EEMHQ3W3Kx",
  "key13": "3nxDrDFoCsAeGLAnqVYn2MitEibaiDayCApXrmoS2FcaRBkSbdT2VYeugP5sLm3ns8Gsp34V9Cv9f3qkYgaMHmjL",
  "key14": "QyjVgSUrcfMqLed8Y5R7kcn9jhS1nTZyUixHGuBPPCmUMYxs9zXArTLBfmfPQsVbhjfpXeLUCdoGvkJqmRrwKZH",
  "key15": "5DMLBvjNKQP39DfZDJHE9GSW3vEfpE4HdwwWtB5qEBQV8NsjXVvD84LNbhaqT6XqfPR4ae2y6NWsRAUkPTZCSVR",
  "key16": "2ziHzMR9YDevxonKv7mWMoSCNikNt1w4xqgQvvt2viF1MiPMkATGnb33iG9sdgu3bQPomia9phFmYE5Z2ER8CTGG",
  "key17": "3DDbWJqgT77TCxSdt8Nw7faFpaNNHae1VnkJTKHAH1aJ32uqZqHiZdDkMrXbnZqxFo9p7YUd4QM9pAQXZJv8P4kY",
  "key18": "3pxXZNhSvrNmcdscS6aFBecMr49GvredYBU7H88FWdAu5jXbJLzRAP5ajju8CmJVKvovB79STLMyJ6hSKCis6XsK",
  "key19": "KNtJFRMxF26yWBHXD9TefWgQF4uVzixrqmXW3YqQLwbtJejGeyBbF8gwocbx8MRfQ97W2Z4T6hEptTpwxtJvJia",
  "key20": "4mhFwPYYfdBBfTdAGTsLJoCk2jdmufyJRsWxEhowr5HKPA4TVcX3svEpz52RTHcA8SZDr5s1xAzw65hzPse1W7zB",
  "key21": "3xdwLo2VJLuuPYFpUuG7ogsYhGGTUJzrsZuGdNL55KxWgN8bjp1jRFZ36zVArqwjW2654uWku8p4Ce5oeUHziVxB",
  "key22": "5WqQ5dR7GLXPfeRqSgfcHs64wDPCvUZ76e33ojpUbisoaVxxvGJV6iKHGdvB5ddjAJEBg2FLQUxecPtbLzQ5cH1Y",
  "key23": "KSYZxszBhcCUaDFPknra1zUQqASGPhjKMykQwRY8uBYzJ7bjsJLULJ5bQHTTh2VMnoKQqmGbXJniDnYLPWtaAf7",
  "key24": "522MUgCk7FN5ChFPBPHrpjHs826kybtgbQYwaLkw6zedSt9ujS1r5C4vC9HU6AsMbDyfisXBjryRvbRJdKkjfaxR",
  "key25": "u7mbSeYzYQBNT618h5tEpV1nKmd1cbR1hzXT2bP3D3MC8xHXqfEVCqkJHW7RHq3gP648U8edxucXFDh3d6Jtsje",
  "key26": "4oChxQ8yzBe4uEVouCYGKG9DteJdsDiu39FRWDQEL1yoXKgNShjp3mSWXvENWtasHCWGfS5sgbwUR46imJB8E1Fq",
  "key27": "2wUiAhVWUYuUKUiyb6zCotBNTnWWrKV5u9HKutWK5ZN6uUdzcj12f9fAYPHGsjirN4gJhsJGMq8WLH3sYq178Q1y",
  "key28": "ArkGJBgx1RJMdKFD5pw1KxpW24V1VRwJYUWh4yPLb3Ptf6do6G65mSbcQXwTKY6MQJ2B4Yx9HyAmAkcRmK2B8AP",
  "key29": "3yE4BrUpLtNW8jjHbywBLB8t9qU1oqdqXCx8tCjbKVQyZ49yUvzGjB2tqk9ur1LYzriunSn3Jnaq6csr6U8Shv57"
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
