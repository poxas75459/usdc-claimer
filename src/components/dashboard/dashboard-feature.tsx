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
    "t3nJQHQDrvqJVN1Cn5wYhk9ud6UWmB7caj6TEEVk8MkCEaStR5FaBfiVN1k6CFwt51uH8smKkZ4wP1CxorW2waY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nD5nHKp2JB5TQukhqyAvF6myPTf6LfAVtUDr5wxDdTWvs5L9m62WizGLpozuhiSmE45ocMmbMvLb5MGsC8hsKNV",
  "key1": "5E1ahkrEYUaMNPc6wPUuiXTkxHwMxYjGujWAMPU9792VVHaGrKpNdDXoHTAoPjujvabYwPjkYV4vJ79r258P3j31",
  "key2": "5J1ToPpwcTeeLi8LND4u55ZMsYEuCExkJFi5YRHdW7eyA92w1MhgfRj5HRfVnWPA5eZaXg1cmokG3VdJuNxAJR9z",
  "key3": "4KKuYTuLCsDRERntHCnJMGbU99V6q8nasfShR9VaDkZa2TmeRAmBWy2zrBBfxw1xw8rt2hLTsYfLR1YpWiiXpXiz",
  "key4": "49H7bjCur74XAaTdbcyjENh3TWwyiVQTf3iEfeYHLcd8NL1AYmw2QY4MTnWapTmkeUweA7YPusrjK446bAHyLguT",
  "key5": "BimZVS1xqxpZjPAQMPwAwLv1P8TDmwY5wLKDX5hBBmS7pz8mme2KZp4AzggchkHafXGeAvjRht54DaSTCc8suAJ",
  "key6": "3sKPfsapEJNkWhmEpjDjVuFpmjEDttuQD84CQ7cQmCpfvRw32aL1sH2NSRoR4vyxkQMftnNMdNYzDLMg3QNC199P",
  "key7": "3rFF5VfEvfeNTMuY4mUxJYpeuXsxj9sbMyJTAV2jn3igwtAVUmbPSREDFAqN9gxA7kaC5YKRPeFypCGWXkSAuPwx",
  "key8": "4ddSGYkCgjdHevnCLsyg1WXvWRPVNDbvvF33ZbpGDJyi7QGzDGZqGxEq1JukpComy88FBaYrdUUQ1eJxT487mL4o",
  "key9": "5j4N28BDJB1EXmmp37FnVYd32NhYb6w9FknF2CfShNEkUrr34ZrK4NwKL9nzXNDLTpu1vohP7vbWmUUKDVUS6PH6",
  "key10": "5CB9T3VVhJQAFUXonn6PKmEXfU2aeR7degKaGNw7mq3B3numVrMTqubfP9iiGe8T5kkLnCSWeHnckwRvM9fudcfU",
  "key11": "Sfzj4WHfsZH5FNAFW9avAmmw9zGDdAp3kMq4CwHBnXVNywThhsJ4Cbt6J2DjaZcaB3wMMAKmunpeqgperZVyj7n",
  "key12": "3yhyP14ADrZS9QFxgM2hQbeuFwK8WBUC6xH7x7p1LxrNXP97wRsmwWVeJvm9xvte3dbxixciCQTDgZbm15myJyuM",
  "key13": "oh78TQngQ9cipKNhBeFy47sn8SGUf5ff2iXTQ1sSs5LZ5cKAmgifr2gVZfRGK57HwdySkgTgsuBceLwuQ2cceP5",
  "key14": "4d8sC2YbD1Y97nnBfAf5RYE5JZRhvPfmPFZB85cujainS3qj3hMzx5cWx8NJZh292WRfbwQnJME5yb23WiCdgmNW",
  "key15": "5oZPzUFRoZSnqxs2kNja3MDsdeLd9592337fX2fSE62sn49UUjXKgeLqvc2zZ2cXq1mzToRVGDPDc4RqLoENxJ57",
  "key16": "5nrC64vnuUoTyvYavD4bZuvgktyTf2rcrd3rLnJM3zPi8swB6mNBVboX3tqUBP5eYqyQp3PfKpyHHyJbxfYWedPY",
  "key17": "pSUxDLo3UP61bvUCrF4a3zVv5JWhAbjioiijXpQGbTw5JrWTfKBfsmdTK4eGEfRbFgyS8EZuGngdhgT6qsFMHef",
  "key18": "4X4n7h4ir2TkzQgdU8ABX7UXgwLpkqVrMCrQ6WegQW1aESCnGJ8rWkEVoKQEaSGd2HFHinkbR9bTEhQB5o6emUgu",
  "key19": "5S5MRG13m6SzareqEsSrYyXt5qQize97vA4gHi7TGCiLEHH2pq8235JuF5gtsCk9Mg28KL1grsppxpmLN4855rbY",
  "key20": "3KysXZ7AD6YPpQXJxmqgtCrWA1wnayTrS1X2zzKXwJAcj97QK2cEteAwCpsG9WSkRukwBuAhnyhxcu3GxiutkjNp",
  "key21": "4uQaarN4QmwtAQTMFy6nGKqnDHXWzZ62DwxFL77wSmNVYoocFcye86wcJPpr7t6D8qR39jRi6bxjjp9PnurJcWBX",
  "key22": "42y5hh8oTaA11GsKvnhspUBeATULtnUw5beVcjsFEYU65esyodLCJ55SmYFF8voqiDkCPPrk6W5SrnBMFyLCaJLY",
  "key23": "3kWQCqBZLvQN7bFHaQDyPoNnkTK81zckDGFKbMqRbe5Fm6m9oD51hJT4oELPfBSafqBJjHideiWXK6stHvDw4uSV",
  "key24": "2zaU7fMWqTsmQKT1cksbJnJYNv5Pn5KezQgX8kKbSbz6gx9pUwsuwLs9JSXmqH6Lf2EWbjjwuUK6n67LMCoDxhUo",
  "key25": "4HyGDhSBvjoTHJMXGqUSqTXhufrea5HWcivZGWFv3JTCb9EE1o9dp6vi18zCLq6qYKmt6jZJLXiVkQ7rdppo1r6s",
  "key26": "nrUDbzq1HLn5vGRp7yuVCf6ucZADRXKME6QTsuyREa8gUP99H2EMRnsjuNApPABXcwLNizUDDCR5XcH9RSP3Ljx"
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
