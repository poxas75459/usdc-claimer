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
    "5yoXoLuMoATUZTKE9Faj9CNsVhXN7DoTZAoBWbqXctyfLpYi8piyizK6Yt77xGibLFrxRywdE86V4sNFTEsGRMa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMNqDFn7t7txmD9YGShem11W23YTPgv78tqHAtPUnM3TG4fCpHdknpbkKTuoG9rRdvZ66Pwe8vVyxJmEjoW6WF3",
  "key1": "3yDSMDj86ZMqvKJnS2fzFG6Xo1MmKjQSPu3N8hEP1Ke42WFqYurF9rhb5C8jnaYjePZeRauS5UzouB9PMNTyX7VV",
  "key2": "yAt3YUYNuWtQGKz4TVBaNz2HGyjhvBPH8UpZRyCxLhUGBwivWB6w2VwMPhjLpXXtEPPgKUoHvXfLECEsgHyEmey",
  "key3": "98wdk24HNFWnVL9oDZ3HhjwMp2a9z2fGMssfY4N19gdGoqQcYuuWn8JfjvB6ijpoeWxDUJ254kt5xXnhBVuBmwy",
  "key4": "4HTSmSqPamyKZDvxo6wdawid3z2PNQ5wy2UGxKCWoRxs359U3nwg4AHXsDKiBoqsWwJjRE7dDwAgD2fCfJkeuu9y",
  "key5": "5CNiUMPmxMRxNeQ3JgaowD3sVGA5zSmjkbbyxpNUuzn4oXDF6R7jQofXF4rpwm57onozne1G6p5XZpHZ35T5UmQx",
  "key6": "AmnvKvEwBJ2HaA4WknPLukeJxyd4qXgWzZjMc91r3zKg4ku3GCT8WSXa3Rgw7doB2eNz7hjN65rJ9WTWFSzAafW",
  "key7": "nCzXz3Zwbz8S97PkRo9mmKnirDL4S27KykLB95jiCdKun42VYyQGHauGVknuQLY32XUGW68xswKaNnpmZgNGJn8",
  "key8": "4hakHBqzwKnpptVns8exb877JeYbQMPEw1tX7qfyAur8hfmDt3h2gfQiMkBHLybWbqdze6vCA8AMV5mFKrLaMMFw",
  "key9": "4ep6ZkfVHqkU7gRCuRVvKW1y1MNNCT6kfoA6nLHqia1wsR6L5o5fxh9ybpTXH16zCyWrY5nfKtso9NrEBjreinWE",
  "key10": "5aoxiFQqULwVnXdtjRjmkVBXZNnMvzJkr1FteBztckSKRYpxcZPtwqV8D36yTq9t9Zuh4AoEsN77abwDLsVG97mM",
  "key11": "x82c1ARzaZStHCeBsWodzKKLSEeytURsiA337UDKA9sb5PungRSCGJnj3Hw6cUCngeY5GLr4TZfA9N6Y7m1CM11",
  "key12": "imosBGfUigFxY5s47AQq5vUELpaHHUHYk1x19tUwRBx7MBtgx9PGevyEDBE27cBX4btpCK3T9wcsiytgs5Whspr",
  "key13": "4LDRXB2P9Z7TUPukQvvbtTH6rCr9GuMgScgZ8axwnrJbMXBkmt78qc15cJ4fingYaLZx2CZMLcG7FxGniN7qteBs",
  "key14": "4YRVUPwkXTDR2cQGYkKK2SwxYKj1KKi2iihgjfUVmzGxLgcB2Nschzyf85Jyrnqy49AJKFu4B3hMz7bu7QhP5VdW",
  "key15": "2R9nJu5AQtWGtvTDjJKUKhShffvhYgKNSgF2ELv8cvmKrQtWTo4XkGaeoZGQqhAzMQeSs9eH46n1u33QvSHY8vkg",
  "key16": "5pnWzYx2qsVt44FybR38D3ZZMfYFB2W4jABsBAwZEkGmDGMJHUC22oX9eCz1Zc3ufsnRyg9FwWSVzUXkWRM9pzSv",
  "key17": "qVch9T6mrnhVZ34NNXRpAZ4MXz6mhUpa8XgUkWi12MXvNghpq7rPT3qZvpVLfcA1ivBBY2E3pPDL4qgPCjqQ6nX",
  "key18": "4zHi29hKNFZG4i6Hcv1n1Wkqkc3qZNB26GJmSg9FJioJoBh9wB9kg4zMG7CuQdaYgAwNQCeYtj51XoyhyMSqe8qv",
  "key19": "4Fwots2ohWsr2h7rAfsYQRJ2HqPBHhaQKu49HipqB9kB5eXuceAfGd7WvMwsxzPTQ15JQT7L1CxKLEQsy1zfDC6e",
  "key20": "5EyES8BqQ1mMRNnmL9ooi2ei1jNPfvKnPMQHySqcuZJkh2QfYFwg8nBVF7DNfCymRhFwCSxNGsDjkQM89wwwU4kp",
  "key21": "2QQhtPLoARJepjbBwwDS2UswjbBj9VtbWe5kEJY56PA4NxbafW3weS7iuc9J1QbUh8kjLQSAEFHrG8eLAJxrPiXm",
  "key22": "2DGxrJKgfERBwj3QWHsdqdPZsKpLXQu76CqpPQqximeU33FaLZpkouNwk9LjFEHxsCgRngmkHDvbPw4Z7YgDgYif",
  "key23": "5FkbfbURBikHt5VMUFbsonx7wCfray2edKt18WmuXqLA59x8JRtnCpRrFMmFzi1CiaSxpBUBbasxUVNMtrmtaXjb",
  "key24": "2JFeYBRaQg9RK25ApoL7RVV6C7144ghweN3qmgwfZgj6xN9G27peT4RxLEQZUgWKs4FSAD1C7SCY1k1WpcAhvBcW",
  "key25": "5Ym18gJiaPE46unVUGS4zCECotj6FQk8nMkqtkRN9JNJmtMod5sRN8wMLfRho9s4WbLxrmTYchZND9kSyATGrh1z",
  "key26": "3VEurhEj9JioWFxaWVg9xEiDC5gPbPonxTE7d9jokL2TUv48UqFW82boYt66VM8FwNpRorXrsSTXVHdkfgm4TCHB",
  "key27": "43a2orgQzVjPu3nvLTuamibJPAFrXyZL4VBs2P5XtpxUBV4QmwrU8fXbzJWxXtvmBsfqLibsfEjeQTbj8ue6ysua",
  "key28": "FgYnpra5e5V18ZZwLJALwxYUXdJEqFkyLCQdk4xMt8skKQ2B8fngS6gjFYhTaB5R1BaxmpcgQrdxeH6tBBbr3Ws"
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
