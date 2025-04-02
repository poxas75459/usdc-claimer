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
    "2uxAmXs57XfxuofFQhVQJ81x3sixVkCWrwppExHPwCeszRzz5zhPm5NNgMZVzJXzKihQBpAVqJ2ZyZvMd1iYAQ29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJWcdMg3ZLHB2JXKV8jCsjTq4pDaJPZpTCSYy7xnZTkvD1QiCCJ3T182Sk5L9k4auHPFEvfUj1XKhdxxp5vZFLS",
  "key1": "5qfXzjXJUaPmNMRtB9heYzuXV3fWwXumvizmH1xtkhv6o5ZAd1ka3bSpxAdxqp2Gx1So7GgvJGz4C9aSdezSTEPV",
  "key2": "2A5eVwEZ75D5xC7x3sw4vjbC84jebjMvnc8h2sdVYnhGhwybEG1ctmGXENgMaJNMG2qXhfxepq4wSCrGUwvgCNgD",
  "key3": "4BAhSm2CVZApT2JZG7vF1dZJFQSr8yrSnbFkeaLxLtTPrwm7cCR1JzBLwCqTtraGVKKAkyJDctqZw5TbXcd5zUBi",
  "key4": "5cfneEj7D4eXckKntxmEMvq4goLeMZgLTmGUQnuU4SjUGQ8DpFrPNeeTCrXiUBvzT342xKrW3HNQgRqxkvX6jEoA",
  "key5": "3yPCPiUTb1bSqvNTB1jYU7m8VoFvTSJkWkhEB5VsmmPLDTkQaLo3qbh1h3YYzYJi2HfZ5ni6yaJD85bfHaJzJmd7",
  "key6": "3hYXMvdZyh3gC7vZqjxszMuSVJ7zhqRDnFnM87TffUsSgVkJEYMJFvN5Sbpnst2Uv73AiFhMCJXKhLBbfDaNcS2",
  "key7": "5tbS2DVsbV4drgSzgTyeWWN69fePWTrTBVMufadCUnsE7gHVRpWTLVL3XdUTwUmb6LFTcYro3wTc3xpWGCFxcUVs",
  "key8": "2MUEWWVfFedJz5ocqiWdm953Gvmcmdm12WfYYohWN1gvtZw8KyKRR4nvt9mGtqPpHt1N5i6TZwbBTjk99bDRh1kk",
  "key9": "dxLUTVrcLps2nXPf8up15EbGCTFMrhKNtZZZEYpeKqsAdzFU1uVPKDkx1nsGpQeabgMxuYkcLSbQVZs2Djkohg9",
  "key10": "2jLueuH6Pyc1nR5EzeiYi4TGNWsuQicghfTa5LevvcEFkqBj4S6sfKgieASqvRCczqRujBVkiXRRkdNbNAgn3xpD",
  "key11": "4MczdVyAL2pjQQZvKgersxz1fxLyeREAHbYzT2rpEHqztQMeLhVZTV1nsGtAVqEhNLdjJEwQ41YRSztvMkXSoufM",
  "key12": "4MLx89mACyfKAPJuhVXPuSBSCQKeqUMQUjoWwR26bH5FE6bnErnqAfdEaPVdeCWR8G9iKf6wGUmFU8XDQoshcKib",
  "key13": "2ykyxUD3q1msRQWcMwQ5mAtBLa6Xb43MiDW1ttAJLbACNCoM6wogvB4phkYJJNvGsgKYzZQoWJaFeo4Cg18SSd6K",
  "key14": "3nnd1bnZciVZio6TuVKXbp66ku1FSaMNqsujXN6GeeCiDSgxRUkM3ZoQhM2U6KL5m1woU7XvgEsApTzSngsXgEdA",
  "key15": "TbitKvFu8hJT5uztwM3TFkgu6r3DA3QKNLLdYtZnDeahKWJM9jrbZPQhngGnBQBdAGCAE1TWton6vMfZLht3Mkd",
  "key16": "2H3FvBAiFxEj8yDj8ggUTJErGpdrtAgzByiJe4HLzP7NM48jWmDh7hrcWRvzghmgD12PW2jj6g7bvMLNdWWV9WR8",
  "key17": "2pUfpXLmwLJP9SpYJ3Astqu3NFtXnQofSX7K6TYtXdAueWhazBxtULTqxvXQgjWTyCNeoyxmycgWzG6s9LLHjK6U",
  "key18": "4HdCGNFsLr1Kifu1jgzg7M327XF1VZGBZ3gfjYmoTH4DPYaUrfiksCyCif2oYrBmEd71yn6vUqYH4tGJvPYkuoEZ",
  "key19": "3Bp8GU8jg5J4DiocUKQ5LqsijGd8xUZ77cLuWi3EAbF6V8F5qV5dQy3Z6bQEvjsbDVPPWMU6YHvr4UEaxpBt1yPd",
  "key20": "N6Arb3pzCwL3HRDpKGKTbk8miCuqzXjjv48uBt11xW7S4FhbZr9EqM256PZ1ck8aY2a6vPQ3azBQc7tBAqFhsrc",
  "key21": "LFsbbv2j2do6jcGHBafBKKP1Fu6cnfMBtF3yN1hp5rJqSKsjHUyk8rytRGzA9W3hVap1FqMXCZJaK9EdoKzsP2G",
  "key22": "2S8KovEcjjRNvnz2SXkRDW6rpFR14Bpqvm3HVFHywz1jecud9cFiYzhEa6AChTppxGPX7gCqoDXtLzTcS2L6p1Yf",
  "key23": "3F7ZHBbuY2XsmCHrD4QmAomvPdWUMtf4v7er7gT3Ne6Zh42UFddSJd5XEW3KjZZpSknR7XVqPH7EnVB2wL2wQhLA",
  "key24": "3cct8fFCFqM6oE3aEiZFo1hYH4BQ1fwZNunx4gZicMQ4qzMJpspBvw3NXQ9BMKY7RYNatih22pNXa4rXXVySqFEG",
  "key25": "28uuKjPV9tVwPHDEZTFUaG19Bu3pbhcr2rPy3yHzQp3QLGjDRkcBqKbrDeQqw1FehNLVFd3pvTQCdMQaMTV9XksK",
  "key26": "3LLqctQtcyHuUXhMgJqriwdTZ6twiSh7LDaMAb8Vuo2LanzHGAt74Ya6gTzzemWJFaRZBBpSDosTLRHWZrrN7z4Z",
  "key27": "2nHHGzsDLh1kdxnW43KQ5t4TVhsDTvSTpkLQ1cc3aS2TmmTu4zC2MY3bAZdpkKT5DzVkNA461euhg4CRkzDoQ8FV",
  "key28": "yJTgDGkQmHBov9icK73EvK2njyg4BoW7E64szX6jyTErYps3RrAc4zjkCt8HnD25qX5XbDCua6PbbAfwMvugVmP",
  "key29": "4e7p9fJTid1UCBHAUfCZ9YMsQXGoW5UoWt16Ket9ME3rbYCWQz5jJdKZCjqeRv62BdtvnYZBtcrn1aLPEdeF2tsq",
  "key30": "2SAFMUEUNG7NJyyHTispUNS4DcJyDh8oxJZhzbToJg1NmsSMyC9AH6MgUJUv97VbycUUeDfqjZ3CLFyznQaxYA2Z"
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
