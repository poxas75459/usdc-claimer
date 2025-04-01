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
    "5HkXU8tN1ckMYAMWTRcsnkwqBGn81VFC4PkV4bViMpu5E2LfS6WzDJXVnzpdnMUHKhdSAqj7RwmLgkebuRsBSz7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtjcuXHfLNzCAXbV6QwcbEBXEQZkFdUb2SdxSzumdbE2JmC6sFzRPN4oVV8H6dkCeb5QZY8e1sRFGY9BqMX3fvF",
  "key1": "NTnfBmmSCfSCs87Dke7D1e3cmJjLe85mhaehe8d2TUxmpS1orED1bUu78jvm2aZ7YNpjiBYKepYeuLAcTHCA7uM",
  "key2": "J3vBe7SoNoUCQfv5jTJ3a6Au7XHa41SLH76NF6zuoV4Y8aCGVGzDypoxt5cFPEWQEd6UFyzPHqqmuJ3ZMvtiU6R",
  "key3": "2CY4Xu9UReqBbuaoiJmsJnqN28dKcrLaNYTmbr4jLZchGFAnawbbw1Bc6NEaWuX2CJVx8QSFN5s2idJMK92PcEP",
  "key4": "5Gf5maCGfhP8CMcJET3wonsUSvo8r552yPbjrrvaCVPgRZzPrCsPNbfxwWgGsJgg2fKLDpTej3JRKh8oYXEYtKuC",
  "key5": "2W8DtBjS3EEb465JKef6VZHdLvJC7hCf4K7aCNsJosdRr8vV76d8sp7CVnpT6Q68gmQ4cDrHZtfdD7GQNEVXFoFg",
  "key6": "5oqgski77gA8B7nAsHXfThARoxSKcMwHVcUcsT4YgL8utDetYw4dn8t7G3zmrb14u5z1iZixYDDm8pqDEL1ZP1W7",
  "key7": "5QmhjYtLFpqgmSLec2qyw8qKQ2KxmL6pCmCiPKqt5UMhseMJk9EZJkd2oRz5qxdZainKj4ChZZBBGqNATVDLot5f",
  "key8": "joyt4vfZMWMpLm7FJ56gXUer7mDkEdwnnf1L8Lj3u3HmAuicUf6Gob1LYSnztXLM5xkHQE888jxiu7LMcXqDJE8",
  "key9": "2hzaurxe5Nu6qeH82AhdouhXhCmTZR98xt9pnR8CcbAJ2fhGuPYbak5A24EY6VoQurCGcH9y1dePbYA5fP5jtm6P",
  "key10": "45uwki5gAdMXVuxSidUZuDFEeN5qobHGAnmR3FiQErJhta3AvgYthLH1BEVXEdvydy6BRMyCiRe9BF4Svw3cfWkk",
  "key11": "3h9XcisYtjpDd3g9kKmqacqHU1PPcDwCgDhQKFGoryMoXdmZZUuXBuQQNgLmbD2NpfpZYzNDNQJ1qaRLVPPRyaWD",
  "key12": "2nYw9nJJh2BNwzQ1DsF2tyXuusAF3haqi6ytdy259d6gLkHjyEZEaUpjTsd6KvvWBpTgGQqyeysbXidkk6724dFV",
  "key13": "4nQyytEiXW8YAtw5rQ94MbhhbouzRbNwcsmfYU1uUwZAf4f4ZWihUzBd5x3etxMRgibQfkc8gkCiwT1fevRG4xQz",
  "key14": "43y7aqNnbTKxeLaFXv2DZbfvK9DwBTErutJUweZ3LoX1nLv2xxGo1ACKpXe5JobjGjqkfgBZZYCv9fRLvY26XDcd",
  "key15": "3goBWHJLNXQK3M4sDQPC93D61YbijgjFrBEnxXeTjDwPx8eTAVMBbMay2Eqb7ZLnNaakQqzMifv243KEU14eXy79",
  "key16": "31HbsQxLJx8EaNMhBDMG1bqkbMaPpKa76fYFHX4AxVPcdPQYsqfcxpfuSFBuz4QSQfqkcziHVDrQwtuVswLuxrDa",
  "key17": "39GacE6AyAZq7Ua2YZGF8D1nF6HoJLtX3xNTd7RjV6aH4L3jHWpzGbQzk6yNrEnyu8zVxrLwLC11j1cRKPo1QeKj",
  "key18": "2BNtkMfrFRAAJAg3KCfafuVZVnSSsZKdB6dthk6wdbtQmnuBVDQTE5rHnTU4GxTEFYt7pVLCSZemUtC1V1AR7Ai2",
  "key19": "4dGn6ucAFqqU37FKwrQQ59qrTzq81sUi4g2RtdhumkSKBLhiVcTytQonUDMZiiHpRGEcHejxbiguKfYWqGJctu5X",
  "key20": "g2Vb2Qc8mHB8NQZ61RiqhbR1v8YHc497Y8efHqFufaraFErGHCy2Mty9xnXfb3e4maqyBshEituNPbaKZxJeSa3",
  "key21": "4GXDyJ5MsxiNLR2oVxmxCtMFBdzyQMUtKrxM5hcnHDVW16u18NV7f7CF8sQjinBpJSTYgTo85WoipF3Xnzav4qmx",
  "key22": "216sr9MhuzQ6henuGDnLvkJopRZV6ZsiGsnbFKnQFyvbHMy7h3tNMVYG2jviMmitNPPVQuPVYp1mj54xg83AwbDh",
  "key23": "4rpBdptvsBX3CW8wphqjAWop5FKb2v3QVsgiXHNiiEg8u59gdgC169XTo5sn2SMFwtYE5uADyHCm8j8yzTfUXh7g",
  "key24": "2UsCvk4bHfnK3a84nWivkw9nXteaLpfoe5Ac6GEVhxfr8XuK9aHynJaCT3SZTwearn6JEQ7g8LgQv2DVSsF3PUQ2",
  "key25": "52ENYvrQtgXEpJNPBDsHAigttL9UtUBQ2RRyLB8at9WFdFG8EdKUMPHRPgjzFigtELqGLUwMNB3qjzwxF8b6VBz5",
  "key26": "5r3w5Tz9XujdEENHz6CJ15YvhbbEEUiMAeeEPAtyyLAKz3d1A6Ctuyr5dU7q7fbFMi1UqsLoNXfzDvuMi9Wtur5W"
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
