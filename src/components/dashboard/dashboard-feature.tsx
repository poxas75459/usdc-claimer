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
    "4wkGNDbHKWWCw52hJdewHm93UJhJGpkrdzwwt6iEKedbymGWm4RVWjrTLajTQdu6D1XohxkVgUR7PjkFqJ3Pgw4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfh56GvUKX74s4uxVA42G7xMPpN7V1zGhnbhFCbTX52fZCctqn5X8peW721CdfJDx6jqq9AiFhQkGWdzihb948f",
  "key1": "5QE8EnbjtHTd4jGJkxqFFDxx2Eob4HFsVPBtsL7BQqZY9TYdkqDFN3USs8v8LWeunDyzkoj8y5fEzs4y68sccFPw",
  "key2": "5YoJvGgTHvw9xoQHfLmVz75dzQ6gJ6JLXhgWYu7TohYXuFYraW8CVHUyXimS1ucWHEsWBKRoYyJ3RRgzfbLPtnXB",
  "key3": "2mRRE8p9Fhv7XYAJgq2j2Es6vrr34JKefYLPM8bJzJ72srXLRpRmxz835CSH61W7TytksZBxtqjJt2qY2bQrmEim",
  "key4": "9KvWed32V6BAHwGzS57jaQ5bQ8DMm9PwTHM2bPPQYFvfE31KHTazDzRZ1mXxHn5xhb1BzUfn32beppsATXXLb3h",
  "key5": "4AksAXx43ocCRTGc9QqPTR2VkTHFPynwjuA5EKYX28aTjXmLhonRkB4PnUTyEfsfDRbWepXHEyMX7q3KzUpRDaAZ",
  "key6": "4qjTbELY5SGL1w1kwDJwkDw7c9Lj9kNTGw1dsShAC2hKoreJKewBagd1bx7fHonoa3bCkerpQARZfCVWttEKwpUL",
  "key7": "uw7nM1ExRbPbcC57oRZAWzMCkn1tF4yqrLgLm8x4Rsnrmeaynryh1Usd3Rp9tL4PysgtDZfGgRHQK1VTHuaS13d",
  "key8": "8cq9xZ2XoS8USvAZfSJRd4775uNrw5DyyEdAGJ5f9JPnESpu7R2tPRFLXPPQwZNJTRYtkhkKByWB2HDoo9CZfKv",
  "key9": "66k9dResBzkFpg5JSgm5ywKZnggPJFfqJ2dCqpsJ7twKqeQzi7tqq3PskVth8o5hfkxSWhDyap4ks2vzjWR7fqBL",
  "key10": "52KgGkdA4Wbn78yH4BDNWtvfT9UA39cA2GWXTvTmKyG6c5fcujkraWx9HKsYzf7aqoQu4CtaPCmUgwdhtmo7qR8a",
  "key11": "tEjojEXGNR2hUgndv2vfTdHYMN8ShSHAKxFgPPjKvXgo76Tw5hvuumjVc9pScKcc72iuUFBFRh6rMYqJ2U2DYJ7",
  "key12": "4YRNf6eMqqHHZvECq9Xy8e4sgSXrAVSLR2tMzUazTTUXvjxq6ezMjmBifnvbtbdKuCia8z3hdWMwU8xrVd7LFuNW",
  "key13": "2EHi6k2ew3q2N5V6rW2GRchY8MR9gXxj3y9fwSDB8ioybEqesoGswSkiqrVUe6deybdoRHPghMDzvf3E4AZQQuWN",
  "key14": "4fT4xXKNzeisLB7BH38km54JT5nGhpRgmF5paSp4qjSGNhJsoURNVqnWNTS3kxp4AYncrcYM9nJ1agceKBB8ah7e",
  "key15": "4FETkPbBVnMZA3fgcAnfocU2RR3XJfEQMNcYADbV2WvcrbmffwU63Woy8CJx9sRaCJQmcz4wDnemK9qtvva6wCPD",
  "key16": "4CNvTjHdzHd5XpJtqTzx1h9rXzd15y7tM96xZUFhjKaCjZjzjA8yV7LXiARJTYLqsrrWwzuJQhFqdNKw81y27Kgz",
  "key17": "2YhDgkM8PG6FEeDwGXTk4BpPSnpB8LCXYQXQyG1bXcgyY3raYCZRLdE2ssZkvqL5aVns2nuD5adhiub9emZ5wAMf",
  "key18": "kc3JaEr2ebNUXQidypzrFsxsRy6Aq7yknkDDKxJjxw8DAjzuRXNnspq9FXVc6GExqVCKvEDaZufjAHnpTqs6btG",
  "key19": "44BnTPqXJa2imdGbDXn7LAwspmc5gcqNSgu7bDWwK5Wyd1u2odgggujEBCNZ3diphzwUWB7V2cjPTBa7bSybCGKD",
  "key20": "36ABj4h2YvBVWjexRReFwX6Vjoqo6GZxWKHh9JwKzA2SWwUjz8mHz9ZUndgTMZ3KJsdVjC9kcqXwgy5bjVLeFj2b",
  "key21": "2PPi51JhjybdwStBrMDvD4ziPeTRhDxbJp4FDo9rHEriRJE8jC3oJgmSTBjccSE69tneYp6hfupqX1uxHMdSZPT2",
  "key22": "3Qv9g3YK2HhZhTcSxmCevrUYhJ9zCRLjVm7iy9SZoBN7ggTafaa6posFrs9VtMdzhfU1pM2dkebuVpu61r6SkBS8",
  "key23": "CRcix8oW1mGVSmJZL2rXZQKZcg9XuVBxjUhL5hUJuvT47ruC8YefYtzrpBTcfjYoD59hPysp48EKj1zET7hrvJr",
  "key24": "4kcsKCDkYy1iw4ELPB3ZEsxDoBby67zqcd54veSGpCzcjYccsMHWjvMtDhsuemmX9jxD5JNTaBuxxB2CdkopNobo",
  "key25": "5m7nfMv4NZgK2tuKetmkYkXH2SwYPketWxrTfHdu9vogdRy9hhP7DEB6UmsN1G8vkGakobEjTR4Ki7Y57U7rHHhk",
  "key26": "gixDQRvkZqBQLMCQcLq3C84QMbM9oaqet6QQjJ1JKqtamWLy2hzmxfJMHJjsJ1hC14agMqBrwq7goEahgnYKSJh"
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
