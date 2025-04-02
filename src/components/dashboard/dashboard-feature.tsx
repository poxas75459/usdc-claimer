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
    "5i7bKyR1fVj9SXPcjgqcMmvHk4RuJQ6kte9Vwc7HR4QMQf4cs1iedJz8aYYNqbkpn5fk4yyFbo26gj3wZw4iPgoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiUMJFaMWj62UW86KQb7vwfiZ7hZGsHELU2mMmwZPi1qJhSTzopq3pNYmzkLXdWt2kEq13AQUueytesxKmVhbQD",
  "key1": "4DhtGcG47Sd5mgY8w9coBkGNyYNREQKi3GXCs9LT1m8bCFuaa7Xz5U5uYdEp6PPuxstCU67rjW7SEkjvh6kK8iqB",
  "key2": "2e7qqStd1CsXPJ3wh6trh94vfFCv8yX9CqQyYjcEwkdSEbNTLFQpavSfozg6HgFLMcAo5PaSjegXKYskcU5ds5cv",
  "key3": "2wjUUP2tYWsqwHPnhy3v3FzW96vDeiT73VvMmriYYWEqB69BquUHnqmmTxj9DG6DYupNzoPBWpL8hXDNtjeMES2b",
  "key4": "3E29PDMMF1bnSo8i8RK4RETv3y6Hetw32FT1aSXJV6RcdPGfT3jQSKXur4osLb6TfeHht1HH5pY2bRaaBr2LfQC5",
  "key5": "34wBJkPCbF3i99FLVj4pZdut71seZyTYxkJSkpxEDrCPTJXBKs3ynXz8wBHL8aZN1ar3YLnXvML2sKDm8AurJoC",
  "key6": "21CumdKeg2ZsnDdrHJZwZTXD9JqrHBD2tZUJWTNwib9MmZWx8sx7xayvzzx3BrvNQGfY2wiSfKL7znQPX7gPBG1m",
  "key7": "3FHu1kwbRHX2m1PpSsxkC999NomF6XpSpsyB8CMzS6nqJk8fU9QzTzndRhQSb7GTD2fvhi4VqMDrsrvqZCFpbHPL",
  "key8": "5SZ8bTeKp7vSCJABEmfYbUTrupua5UmUccc1vNB4244FS5NUsgv3mjZ4SggeeXYEYHey2D9KM86gygVKrwS3za97",
  "key9": "cJzuyxtSeSa3UdmS6vQhYnHLH3VVuWuJzJuPWnFFxnqdf6nNi4EWUaDwHQupLNfevrRPUZy7xAztGUvHpG6SoLb",
  "key10": "4G4cACrmK3e63aoWjzmEYB8TY48ZhTkGbbkMGMaNWyXwHyCPeh7iJDVZ5cdZ9mTErzuiVU7HavUsS1wDL9MbUtox",
  "key11": "5ta3pNR2cytaZsZfVE9FrJWHCVUj2tEPFJi9kCeTMWBqZEujirU36pifX5twE9TeWDHouMbqf42nVT4bLR4B1bCk",
  "key12": "2HrbbUhT7fu2yZcABgUx21QgTkihEKAaBpazraa8zJFdwNeQHaxDkJmxfa2cPJfsmKVFZQASjZY3vs92wVAqskkk",
  "key13": "3HXMAPW7BXFKycQB9RUxvKhuWcGbtAuf8uM6iqj9zMLuedQveoqWz4fe355gbGqFyfik52cS4zXorD7bmU8FeWos",
  "key14": "4ZXTS3JaTmW9w28kRcWmhLeRfZDHi1cYq7JnJPtvywyjQE6DaKteDGL6XqHudSZk4b1YH4LbjkTPi6awkMPder2D",
  "key15": "3rY6SKdrz5vHR4utrdFjsN59oQnrCZYM86rsHVTZoJkB8NxTzTqo6YQt5U2W5gvE5MUApoN9oNN8Eu3BmnFsghsW",
  "key16": "43TM59yVGMhMpdvaJ5EiRfEj58AR5pow1HPzzobyyp6NdDGMEDAdBFi6frKZXCqnFfnudfzyrG92tRFHYpY9eaZ7",
  "key17": "3FizxGrXJxgUdKmsTxTSUQmQHGyvVr93XyW8kRe4xaWtssoWfYdTTAkAaL5yH5hmBPTdnk3GAGFgsouA1Jg5b54i",
  "key18": "3qZjyq5nUmSfNSPXpTcEBfDsmEcN8wUsNv4xW3YyHxyNdAEeusahXTJLRnTC8TihCNgsV2qwaGv8PLY8bhg7FTp",
  "key19": "E85npmiUZtBsn8FUN1CWCNqMM2QoQcYGiZEZKCr26n9zirbD4z88VSDh1NUqorrXxNRNsjxGAkCrzos996LvQX9",
  "key20": "36bhik1NUWjYBMgkvdhru7e42mW7BqYLHqhHApq3ePbPjMQTqtATsqNpqtV1jDhmq3VWRysUt6egJcFpxGHKCuMx",
  "key21": "fCChjBCthv75v97sY52ZxKQq5r8Cv6qpGxsNtWsgDUfV5adFeUaovCkyp9d8gh8ebHjKyQDuSPJw9TYTwW5h7Sk",
  "key22": "5Vh3qWfRH7smKXoPuJLt25QKCWvxc6WJgju5JpNDwTF3HfDvBedrDtPvJdRLTC2vrZSSbfCbR9EUaTW2dw22ZHMS",
  "key23": "3otcrgSJXmZiPhpsm4VB1g8bvqjz3AJG2ErnUVvNSUqGhDrTegn4bh19nqev44hDXrBaUaMUrWeDSqe7REdYvHm6",
  "key24": "4SA1wQ7DEJCxVgY1BG5v5YB8bLzwhTQ21cdCsRpS9nVV5evRQBTKeNLewhViouFeeSZemXdXhe6rGqzWUETSRJZs"
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
