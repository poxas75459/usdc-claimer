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
    "HHFUb9ZCi8HhgSjRJ79wjEPoK6sisJJ2QKMid51wDgDN49poTtm3jcsJQVHy3tTG5ARxMsm9d8sXC1gE7VjUSvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pH9rBfhKbizoQMsKkhKS5FyiZnRpemG1ZBuMzC6HscPvDb5hN6RdwDNeZB63zTLnRqSb81Lw4ahT3jLPKBUHmvB",
  "key1": "3T6h2eEHD62uuRGp6tm2HJhfpwS4UKLyasEFNaJY2TUEaVV552ey6yDW2vCqzafH44kt8c6dZ1Qb55xueHVXfCRh",
  "key2": "5f5kN8EYbYR4fabcybLPwZL3cDMtUBabWms3SqW5wE8awAxKCTgoyKSDMrUS2YuPj6UritnKoh24732DeaNW9UAN",
  "key3": "5LaFsqMJz8BnfXn9CLdEwFQ3mxaq8YkG5V8dnHkHcSgML9Y67pKCTchiWEG2FuQxCM9N6zimEFEkD7gcjMqhZcgr",
  "key4": "zgsXynYzNJyTeMeEZzj2DbL5o8sFyYkaZoPvhR6hRP46GXgDTcnJkJz8XhcwCBSNvAnqAVDYxYNtiMqXUH3LM9W",
  "key5": "5XYuotbGABm5dvS5h7SWCiCJVyAZUHt8NYjyKYNvdWZEKGEzhzmq4y7ra9opPMvn4n4tqqYUHV8mkq95pGxDjW1U",
  "key6": "2LtiG1oVL1SLJ2jyQpBhfvob6eugPjMUFGFw5CPkXiTyDwoyn8crDhKnCqzuHLr6tLcNVyNsYazHHKmSSpW7k4HA",
  "key7": "3pX3kDToknp6AYDPxk6pT7rBgocCdtrYBGxvVN8Fm4fVV7FnKNGaD378BqiE7N5JUpBzVTMNAErEMJADcSj7zzpt",
  "key8": "365GpTpTTZC3DDHNC7eZexMEk3awNuCdRrjJ2WPgvuhXJ6Tx3nFidKV4CLp7oMeTxgUMwyksQ4zjYSQ1dBSFpANq",
  "key9": "2c7xGDFiWtGwHh1gidtoQJPK6Qq6rfDNTTHMNLsFEvne8wBUe4dh7cMYFjukRZze4KUB62iGSoYoE43NkFaR6vYg",
  "key10": "y1DivBTqCtCyKZxB5owYgKK5jfSxB5AZdKutxvw2L1wNqN4KC4SuFmXsKP1r2f8D218idTgmczdBg6cMC3Sg7GP",
  "key11": "2nZ5SiJbRDkKtv626uGar8ydJ61Wi6LdAXfLRH8u2oomy6Vs7NtkH6sJonDhE8NG13ot71HvHhBh6iUPtGcyxx7h",
  "key12": "5ckNdtTh1VvHPzf4FV7dG4ojqUghp4jKL1ARWJNfLLcjL9Dsf8Ux7jN2RE8ZaEKk8wUXsdDBxV9Cbctn5s7g7csc",
  "key13": "47jbtwAiDWsvQ4tiHwnjVxEYw5m2gcG5jcQbuuFqn2x9eGbsfeLxfSzeJP3k5pSbp8rE7aMdR5AJrQhCD9qFVeyk",
  "key14": "5EQvwxdaZrrEtnuEJhxNmp4dYJWxaSueE4bFjNer1U9eH8w9U9zZXLsWtqASseVsbLLU7T1uaXFPhvwMakACFUuM",
  "key15": "m7ahSTK1HtQJ5DcDEdnA48v2qDnJK6RPskSz25UZrPbA49Qrr7JsckAXCxrFrisa5HswGZ9LmhU6sgieS8MxRsJ",
  "key16": "4WwwUrg1VtGQ9ANfNNhFqcziQN5w9arS1QKJ5kM3H6VzzUrdg1Pp3ccnrtQf7csawPtfiRmGUHpvhQX1hdeqC63u",
  "key17": "592sPvtPgQ1FagXPVowVrdHwtQZY6y3QBX1PsafdKtmCzh7QQVmLyP4t2sRGUBWMGLYPdad2e7yeTsMEUbARoZax",
  "key18": "2YTpNBQrWAzg3ogVsvP9Qrfk7wWeSL8cCorq5MiJP1zuz4d137CVXkNf1ziYCPUXAjETQamh4mJvUBLURPRBPVNw",
  "key19": "4k9o6UrAQ8aSWiQppLWP4NocRN9YSk7X4qydcLEFmmNZARRYpyAe97tv37x1v4ny6cTd19wZ4iQ8X4XoeXiq3vNS",
  "key20": "4Tb55HTwtesEWTkqABRvzkuf7pT1BXU2f1uN73Kq6kadCeANGPfsF1hj4rKhJpCSFu3FXwAsaUspdmoEotrJkztE",
  "key21": "4EFMY6AdHeoaodmyWzybDdbJxNJ1o6j7qs8d8wDn97SFZabgYnkdTUcNWmjSwt9FnyDQHraFur8yyzZ3jiNXAxcj",
  "key22": "67oBYE97uR1bRe3ygRhNcMz1rhSbCZ1QZBapEYN5veReB2B2k3SRK7KSDtKTtvD7V96mnG3R9cSUNz8HiMnPMNQT",
  "key23": "5vxvuzDrWTMUEPpGKYbjBRqSEuLWLAy3cvDHbKigEsGqnu6Cgc5TiRYmeD35vBpuCxLeBPh85a2nSF9ZYtnFgBrG",
  "key24": "5DYrx7Aq3gCN7c6BweruWcPDfauAbLv367jZvge1oTxzDSgoqFxR32LgjAwj2uTUNKDycHpT5QCWwbVsNkADY2hy",
  "key25": "Gy6JGH6Z1HwKggMdwbmpGc3FzT5kCr7hcyumYSiCN2WHeVEBWkM8iSSw2CCPEszug1hB1ZSm5BsdySm9btxpukz",
  "key26": "2Qf5DN1kC3AzGGWnSLzu2EpFYkh1f1CTBwZ1EF6qHg9G78o84bgNLEagk7MPzSnTLeY9m4Y4ikx1b9cQ85wrTrDw"
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
