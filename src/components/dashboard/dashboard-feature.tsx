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
    "3xEUMEyejoa5XrXZgRm5KrHAK8QG7u6FCXkczsASU8GkNSKczvCcPokw1gfCHngaWkbNWdmYsa1swm6aMNeT7t2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpwYvj8H7cjyajPB1JHsYA71F6CHf2u17z4CsEuq5UwL1YpBagQq5sryEidgAjG5hiKqdiNU5yYXiuBAT73zqsh",
  "key1": "uk7dRMXFtZwBPxzZptPLqjjDqviaDxdGSLBE2zgF9c2QjeJzWPj9WcVLbiLRXaXA2cmTUZ22rCdKyfCYnW68VTV",
  "key2": "39wmZtQXYWZ5aijV5eibCA2UwhDHcNPPHcWogq27HiwaQiFwpBpuTHsWmrG8Z8QLhm8yYykCzE5pN3UVudWo7jzC",
  "key3": "3GLNAxspJNQCzJyNyKxUvvaZ75ZhS5iWEsVaUhdcudg1T9da3KCf7d88ToyhzWimjfhXzKuj9jizLWMUD5ryZ3yx",
  "key4": "59SRNqQQox2ZdPdZbjowgSm1biurM2h5kpXHqbkwb3R3WurAsAiyBahnDNqF6r6hrQtTzVabz1rU8CZ3xwZVNZge",
  "key5": "5wnJdFSUU6w4uXPBziWz3Ha1mCxvrBNh4U58mNJunjpceVVFZYrwrcqgHiZ4H4JcCafk74a44Cyapsy7rdrvbSFg",
  "key6": "p2HUpDS7tm7mPx3T4grgbDfGTmNMSZ2ZbeCWUZKiDHSuD5Qk5FKv17bFQG1NaLgZ3ByQ1os8C6NjeiA6p1PS1C9",
  "key7": "2ssgMSozekJJ2NR4yKyFBrVcfqSBsn8eK3CcAu1jmMqG2K5mXtE5VVkk1uGhhorxGyduf2c17xnhdBBabJuZQGQ8",
  "key8": "3HRE9zkRWxxmUKy9Pb6KeLoMun4gt8Cho4T3N5GmwPubMDVa8DrZzTktwq5DopjuAsue8ShEa72zZds4x9ZyNHZ1",
  "key9": "3BBus4rhTw5ktRAbB58s89wKo2tFjQqy4w8HiWGQNeoJfdft3i7b1b3uSNZzKFhnGCsz51hAstBK4hS5hbxs5asv",
  "key10": "3p2D3Nd6r5LiE1mPHPgALv5yVhcEHrs8Qtn794St2bq5U4XtqunJUpzay6skkgheu1QD7ADRZjit1EjBgwYYKKbq",
  "key11": "4peUuABSLVKd1me8gYTN1bNzuadbJqaAhKNazJeM9qCigxPtQZ43Jvq4ucgHTvmNCPUKFJKYRibGRFnM8L3yQjbw",
  "key12": "2JvL88gDRrWiY3CJwdq3u2qYjhK9TSBm73Autazqfy3xU15RfCfYRJpdCrsnmLad7m8GS49VaqCrggq4xmeAGUJG",
  "key13": "2EvYkDkJHUJGK8auxQPEkBFFSBZqrbYuu7omDRrXwpmkVCorV3ySjH8piaW1MEGevy7hgSAXytF8t9mswkL7C7XA",
  "key14": "3nXUMNKUWcDgGmWyfWT5N2w7hEjh2XrrcpgWsprjeLRZCMLfKZ3CArcLqcxFh9TEUaaXe7KrC5oZiwF7XPMULbA8",
  "key15": "3xfhcWKaa1jiQzg2eooZqWGtvUQw4zKAyDYoqHW2gygKyBSHdob2s4qN8DJEQb6qjdK6xMGa4X3vKendhKNFWQnm",
  "key16": "23eLQ1oLASCBp6AC1MKu45zDFELFAGjBkpKEh4yVEUHNYfu5LySBvauTUqT41YT7nT6ggpzS3gsm2ZAoxSWE8Bv5",
  "key17": "4JwuZnEU2SkVjq2sMQWtGaqgijb1RH9kJSAZS55oTN1jbrn4ujnpTN1QyVE4d3BPpz72RSj6eScrchRytT5cdnT8",
  "key18": "4AbLR3izMgTMp7gw9JCe5S4aySQ9aKdw8ixGxRpqvf8D88MkonDqoGsHVsi4d21hdp59G18FCZikpgC4gpHGfHdY",
  "key19": "2eMdY2Dg7o8YYVejbKnPCGRdaLhppwPsA7kvRLoZXNWbSRXJ8QF1riGDGuZg6AwDtnHRuT8hVR8QpbMf1gjihCPZ",
  "key20": "CHqCYKputEyWyFUJVhtdHYVEgJvZNRpkLUHekBaKeC19tyj8xKmS8kc3G4yEsrTZ5zgayRp5yoSKcFR87WwYd5Y",
  "key21": "62cFDo3MQbQJRT2x6pEd5Qs1Ln7H9GYuGvpvMCbrVAQN6oMdZ9ZM6SH3cytYZGcSVgHkCwwy5YdXqj3itdD5T35t",
  "key22": "44TVwPL3bT4fgRyrfN38eAmXjTPvmkSZAoE1nnhT69dMbRnFuQN1UBoYdA7NVTcZyeZeBg452G1kD9B2KACQLf15",
  "key23": "3Ft7wo79baNddeonEFC65bo8SKgFeVswWr1Nzcgv9XxE3pqkbq3Q2g5pP4qPhYfoiJgx5wXMY1TVYQrmbDq14xRU",
  "key24": "5633oAT7i3TJQBtoJaHJooUvA52vLkxbUFcvzhPqhYs3NquAfiNKQp4CkmWE8EBpXnY7RHkSeMsxyuf6F27p91f",
  "key25": "39gaX11FY83f6nHmtXaj5APjajR5hSHgCCPXx1Bssc1gcYBiPXyTKpxWj5zt1XDwyfodMjkJcnd7WMgRQxKzguP4",
  "key26": "2RBB8NLAekAE6w5Ni1RVyQ6XuEPYdQebqZBSYmUrT3zaFf6wnU8pZDyaXwvaVfjProywKh5vJzC9CT5B3nKTFiqH",
  "key27": "2o4a4AVzUW4vFLerbzZcUJJqA6HdNAXXtE8uDLE8rPjg4GaTLKA37qZ2E2G4VZ9u2VGzL94bV7rrXt68VdG4asjc",
  "key28": "4g4kENCMC15m1zqGDSzo1St995FW9JREDP5NmZhyRb1pB5KqRR1afCLj3cM9cftfgPHvQYjvDweDdKL4JKrPpQP7"
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
