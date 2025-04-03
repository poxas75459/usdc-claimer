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
    "5d3EktgrNKxFQcLD2nnnZTNY2WdPoNWHAL4gEmNSroSx4etivsydhZ6mLSfQN8GkxPjVaQk6grCZStggSPtrYjNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTpwniuZGsMUfyvn4PAF5PBQWsL2b9KV9wJNwd8KnLAjJujvsULD5kgGS4uj8GLDdwMb3mSoBUzdTQyMxMPq5ve",
  "key1": "pnK51oFaLY4LSQibrF5fcPa6WG4GzYXyiNQfGJ6q24hjR5Y1Yqf1fLn3iu6c8rADZhip3eQwZ9rHWKJqSUnZuGE",
  "key2": "5ZmswTV8bARgmw2u9ZUHmvojjySCaRrHEhsQhHGDi6QVkBty2kkmC84QhV5vxV7GuvvEZNcQNqVrD7mcNFy3Fyd2",
  "key3": "4xGdSYk15o2peJocEVFKXdCFCxegdoKrxCMh3H2dHiiXyYMaZ6jPbcjYzyFGjYB1fuTSmsLti8bQMAx1GNRta85W",
  "key4": "3ZGdxVcaB8K4FX8q9joaWH6miF6rxn8ChnV8xSU9fKQNkZnckPHerZCqG8i4cToRrLtYkujrivimsE4TB2FAwHD1",
  "key5": "4ySHo7ZUazFZPk5tiF6RWQF926ju74a8XMb2dyGiHhs2iwhsM1Q18igTGRGhDZqhk8DdWtS6fnH1o3Zh3Y1etMG4",
  "key6": "5HYycGJtAh1ZvUYWLooQJLULDJ5AWf9bd65TnVpSnBimr2CuJRFFgVYc42foNWo6KDAPgKkAodRFFJRtXWF8RY8W",
  "key7": "55wSvDsbKJJEyMgYhrqHbHigLtg77Bp4mKz7wLvRpZjFKgX9WbsMrA2jg8vxZNe5QWWq9vP2t5NfuHnYrqDSzV7z",
  "key8": "49tXfq2zqAxKFaR46HdgyP92UYcXMGhG2bqwV3QVZu4NdFCJsVeWKWJUMkurk3BweD9GyMxsBnUxUP7VP6hFY3K9",
  "key9": "5vdaupX9wAL8YDPBNtQsNFRJrsNuhCxpsyK9ug3YQQExEWMSVLxjEuVuap1vNdBjojCEYxFJBFHX39yLjv1otn8z",
  "key10": "5NZeKQc5wd3zo8udN84vzocmMNKD8oiTM8oMsQJXVM47aDW21rYmPVjFrvnCvNVVfhvREruvKAG5XLBXX2amW1xG",
  "key11": "35m15zQoTPxybzt9GWEsc1ZCCHdQDPCMd9S7oURLK8MXJMccQf58Da9J1aM6hojYMB2ccXWamSUZGKhS6AzB62ri",
  "key12": "3hHqkGWT9yHma6jtZcfbDrt5Ya9yyhmGVEuadKxKaf6dz2Y6BjpVJpz9LvL3H9pqJTudpvPJUrTdPBBNDJcbTJnV",
  "key13": "ahPgRcojgyjurWZKYiZ3GFokETULtG5EShQeETak5H4KXuPmZZnMJRZcCbHQv4XQo6FRFMTJfoALcDoTXCgZdmu",
  "key14": "62LErX8j1WrTpCSU8hCi1osduM8SqZSLt76wrfPAxUwDNsUhgcxsmBWqFAebniSZXDR7M1KnJgHVtNdBRbc9pvqv",
  "key15": "2MaeQ65hShDK7hz2phcbBSMk9cUNRe3HqMuNjwaKxFTEkfJhfrqSToRhGv7MM18pT8tvH7ASQ9ygiAya88XZ9x8D",
  "key16": "2MgJopmEzxsQmXUAikNEoDWcFYaGJA15BipjdJXd9eoS59N6nVCA9uoNMLDv3XqbrAuXNCuydp4oLWR3e2p3akfu",
  "key17": "5sTR4ht5LPzjV27VRR4RUzztVUNL6NAe3Dpg45X8dKu88jSC1UBA1yrMiTfFWcgyKsLyvpUTRcSFPG3Q9d4X1oTZ",
  "key18": "C5eds7AAbthvPKiSziCn4B8Fv5pQZzfsg5erEYB91AVikiQEAJSvDw9B799H4kCPPph2Uw28tE7C8uDEvx7Fyzm",
  "key19": "3LE7LyA1MqGXfAB8Jv4T62GBiwEwBgPz8XHkr7hBpw34w9pUqbi7RMHnWN1j6tmow1GBpksuLL5XABm12gC5CDcL",
  "key20": "3Yk9xescQVcM5rFfoMqB7uZPZigUamQuGh6U7WvhJZ8UebxTHxSAckmPpUAQR2dTBZYKwZtVh9ggW6RL1JNvu7HF",
  "key21": "3cy8yRwWGqHmtRZtarhkiBfYiVpp3TXLcWUrKPsx3CLAitKjAYpqt9WkMTJxueXvViypzouVVcqvWoDBQoPjH3Vy",
  "key22": "5nYJyLxPBDN4y4LgwYkMBpeBCQSjS5S9AToGphx7DdJcD8oyq43mRAgGQSs4iaNaR1UBUkbvvTi8uYjkXtZxnHzd",
  "key23": "66QE1AsM15ecFmKicVA2rvaw1JjcRWMwK85FKtE6Q39eN5cteorUtNxT5AuvNpeh76DVmZJyTxLEC5HmCcMwLgpA",
  "key24": "2kUyS9rMaftPYxxzAn2nhGJoh3KgWnTGsfrYt1J82x46CGSTSq5cr1SEkQL9WiwhTidamUTUCnFVkDu1oXBhGoer",
  "key25": "2CtNLS24ayER9cKYEf7Tdwu2vBYP3dVRQQyMuWbVvt13V8RUP7EeXWKbrGDTYh3ecrpvz7ZHfLep1utjqdY2795s",
  "key26": "4ZGXsdXR1YKVRFniS2pii2DMGQDADwVP1EGFUVwAaYxf2FmsbaCGoVz2i4r46jGmeGuDD4xthuLSfvuTZ5xcsSoQ",
  "key27": "4mTQoB5HmEpfxHoUNVeGh91AkptuNrHPvvex2bibQREgrNCBwMLXbnhRqsXU5xjKNtPAJCdQ3jCwqvK8fu5g37CK",
  "key28": "3xvQewPPWg6jYGQfK6JKoLNx8FG1Bw9VJz68CzixfPV8iyK8vgXKDrYMYFaxm1MDHCSwdYamkxQtzczLBfkCip4x",
  "key29": "3ynsWYo9qkRznkgQFRwCBWz6dicNt6ESXXbd7fgfrz7e3Gi2G6ARLNEq7nx2Jz8igWEujdEYaUfx8A9oK7zxWYF7",
  "key30": "41QPHR54LEBZUM7NZvDRP5NihC38C2A1ys59kc8mWH7Sju4HKnaJVQnDaRsmTMkk2v8F3LWqTfB9Eis1eWutbe8E",
  "key31": "2PxBpLsCMRsAZhGqJy7NjhAth3dVDJn5HL2rW6y7tFSHTSL41DFw9NkmzmhEh4crGGnM57MuugaW9EGE9b3h2Y1u",
  "key32": "zqJfGfsX4ct1rgVcoVXXbpMXM54C1qHudjuMAqfrWYgNWB7pxGYv51CbRGDCf3PHk1C8ZQCm4XFk2ZPM7grrEFB"
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
