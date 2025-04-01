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
    "4pmHFa2sWn1s9PEMQxuZxMM8NE6ADskgF5xRV5X1LapjiLQMrPz7x4sMpMcTBSL6BjtCBuffxWBeB24Bf8oiqnAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VTAmk5AZWGe4ez838XKFuthhxKNx8f4TS9jqwVKYPUtfBk6ZrjBE7bgF4QPd4oYTdzoATWZ5WDnNzufRozGrV4",
  "key1": "5MhUnYtAL2RfCi3nZfnFUEfXmCAMpyw3VpPix9cyKtUHDFY6ozdHysjXNtN8Ct3XLVEbrUBGGGzFPQSnaL63wyK7",
  "key2": "4xMkdEaHLpX7NU9nYBhu7oqdy3h43LP3drdMkuL6Mp6WvP5K9AhMbzY6n4HNtrz4BG236frxXCP79A1xeZdAy7Cq",
  "key3": "sMnxrcmY38mygmmAYbkQARCbFCfZyai1nYZERGCcjD3Mj53qsfxx9ZjeQFDTRSn8zeBj4x9QKmR6TmRQei6LaAy",
  "key4": "2xmMWxYD7epyCJ9yDY5b64F7wsbVoK1yzRfU5zf6prgggstHqUPs5Ae7VTH8HGhQ2pkrbgsxaMLZ5Vkr1BH5Pz6X",
  "key5": "4kyyyhbvbWwP6jf9z2U2QyU7ddX2F2wBezFAV7tLrBsMvSsGsuxJkrdo1f41WgmWvek5Y6f4B2AV5Wq4Y2onzagz",
  "key6": "3bqJs9a182Fh6khHubSkYSAQanwH5rE5fd63Gr1zLQ8Y4bAf4Dsks1N61qZefszSt7ovVCQyBxrrRi13vWNMMoyh",
  "key7": "5zCEHEHhoHnXYfKYoLg3jVHzTbd6KDGnsD1phHe189RjHSXWtRk7zQRWVPe5KZdV4QpNqU6YM64tYrc4h5SVn2rM",
  "key8": "5mxi7wLP4dzMptWrHyb28JAPy1BzGKSv1eNba6QSa56NTCSJkvWV12GMSkB8VYbvfPGn7T55pgGQmpGeWnYdbhv5",
  "key9": "545odpk5JGRR2DRwFt7942j445mBbMjo9uXuEcVvegJSeTcYZ83wvtYv86ckNBmXvGozkFyUfNQb1Pgp3XMfcTLc",
  "key10": "3AuYWu7kXuRLL6YadLNDJ6rNppGtV8n1JCuiUQLCDz7BuK6vtXLb6Zeamp5SSJJ3Woh69CeGH1x4TRr6eLh2nknn",
  "key11": "4AyTWMa5CALait5A8g9iYdSqUg7maoSTbjzH1E6cCgm5pefWqHEhq4wcdTRDmW9qd1i8MMr4Afv6Y27TfLpX8awe",
  "key12": "5ivMZUGr8ZBwona3nJTNdv3mpCmb7o1GSMrkoFttaki2auqsQHidMbUgTUACYjJbuLLbMvYSQFwuWhaNncvDqMmP",
  "key13": "2bxcTEqgPvXuN5DPxT6AZuLwKqHE5epnkcbAyNFszsXxYtrEdvVcTTythCa52ttnkBUbniTyUTVhsR6DwxDdY8AY",
  "key14": "8P4MteGApo61CWhPNjRrFyCU8Rcfm8amdJ2rx4QUz4ugpnKuj12GDrErCv1imx3DwH2AUNn61W1aStTZ1NZA5NZ",
  "key15": "5uQ4NZJK4yE86uW1MSPYCtn7guJztGEobwF1vg3S2cjLEUPnSkvMB9G3ChHo5BzggwwMLrmcLqLeSxAF5shGRXvc",
  "key16": "2Bv8FEphEx41MTg4j5Dxz1RgiTCwPZxVsteNq7grC61DTvdi4KJvDusR5XjuBBy97uz5WhMGvzV8RcSXFpZiY3zV",
  "key17": "4xGkFzmPeMx5KTbG8b1fq6UGH9K3MseLX35osw5UC4GRANzLEkbEpAVYGyaMTdkDcaDUTDPQw2dHTR4fk9e3M7et",
  "key18": "5o9hyLTJEM6w5eVJnA7egaNNn1yjfEC8scyAMYFxp5hk3gP8cBcigFyncFvVrENQz2JiYHGg4TjAAt8DNemjxiTc",
  "key19": "5qs9YHcJ8Hnta9vofmjgp7vhoiQ3KGHxHJBpzUu78QkcJNtqRrkR42Ngf5ZSU2jqE6dFcqU1j2YnjEJyWbdavycK",
  "key20": "57bVNuYvD6SFr9b5rfxy1tePRnzqam8RVV9qjteZkNA9NRMhcTvQYmhqY96pZGV9TCgZf7KyWiHJCbbTHaUWJWtY",
  "key21": "QW7Akimaxziaz9JDPsRLfwCxwNRhgqqukdkGH3LE3mCjvuuNZisnvB521ARSwvbgFWp85XtJYHTEVcNCKsD9qdT",
  "key22": "4ghXu8EY5KXh9YtgabUDhfcty7DL69kXpYuXrneSw8uTFSroa2uh51ufmXG387kaQ9RHHafye4dCf7YCAZAX9B6Q",
  "key23": "LCixyS8fgwwUPKutkkRgx7BCLDooXXauEifT5ELhb4uDYU8kWgfZLRHHBY2ocKrC4XddYeMEmCKqLdkEtQGiBGc",
  "key24": "5AFcn9CWci5qv7CPmX9oXpCaKwMX8ixG5xrgntCHfZ8WrG6nwHhMgsHGRftw2FKNmvmPM4uYdDqmXZkw4qSTPxjB",
  "key25": "d4aQonbkGYpHKLzA8edNTeisyc4qyyCw2JnynFqU5k1xviFBhR288VMSHNeCkqREeJnk1iik5EhhBBUnqhTtsrE",
  "key26": "RK2Novby6GXKwstqjk7NxJs17y5xs2LyyWkriPbzi8K3KfeXvnM6sJyezXxiN8nCMByToGuM1mwVxA2Kuw86Uj9",
  "key27": "4e4xBidfg13rGeU8ePnj2LNexMkEWTx3XcVt6oXcuAThPZq8pWWguv9vRBA9HRPA2Nor2TKDKGWMagssi63HWxGx",
  "key28": "2M9SAmCJkYmEAB6A2WCZcb86ahqpXJK9zBgs6iPXGq27ePP5GWUJJ6QLRagqzHd1qNDg1hKjY4yERmxTbDvfoYn4",
  "key29": "4XcZC1bFg6YMUgnhHaPL9G7KCiBkGT1oae7qn5JQ6YRssTD8ssYfMfeRErrpa8gmNnKG7RwbV6agdmNUiV132z3J",
  "key30": "4u5bLwqYrG4TCGfkdxiaaX2UQ9gLrYiW1ckpxqQxZ2ynvcMZrArQXBeMZi6atLGJAFDD4mkQTNn4eDRLWevMNNM7",
  "key31": "RwckMYGhekkgcn1n6MuiJPYNoMzYNEw6jftugG9qz7MhAMhaoymbAik8SMTVnybVYZ9qWQ6JSpQ9tbkv87K9KKo",
  "key32": "5naiud9qkQ47eTw1EqHettogxHTxpQD5giXWLpRMzqtU37QJqwNBEvY7AzY13qoe8AkP9tviD5aqF1r88ye15tQJ",
  "key33": "52DgYHpb94gaVu7A8vcHJb5LN2t1HUqsgBZ2tGS18F9j2MNMJ2ty95C44wDX5f7f11FvBAro24MChfsUd9VUxrbi",
  "key34": "2jfiGNccdnTaZMAzxbe59dZGoNQB3GkcFqRAFYBrqhmZFJEEvubjsoHCFXyd62idcqD7uHhTaX72qe2UGsodUecq",
  "key35": "2AsJq4PdjM31EX7ZXJCSk65yuJmtd1kqJ6AaMw1ek1HfiF6XxaoPCa9ycksZt81hJP1rJUH4vP1tcKD1ZfsiFako",
  "key36": "2RVmyymZskhPGLRUvbWb5PLTjaHSQ13kJzJc6RDqc4EaXzQRmMQxwKtazzV96wNNDV9D6gznwdLJfiMbEBVp9pby",
  "key37": "Xi87aVz8f5scwpkBi8GiEKW5pYaMcLfeRBWgFWMZZ2y437PdbcjCQBLzVCD1Mvg5R4EHDYKsQaDDmfbkq3RPRxq",
  "key38": "3Lxn4eucHY4UM64meHiqq62G4Cqm5gwEE4wTXkkrgq4CUdMpNwVnMLYHPmLN2jKT6y1N5oNfhp3mnMRYQf9zT4nC",
  "key39": "tSdALCSknGjyxSTzV19CetXc5swrdTVrxgfcd3vGmMxNViwYA15T9bD4LVxzojfYVZYceDqyvzuy7JLnHmY9FGN",
  "key40": "2R9g9ACRMcZjM8aAwdvSLB69Vj1DgE2iDWkWapkA1uoN61hMsHK3AVTHX37CsnLq5j4v7q17RpuFnBVuE1Ci9f6L",
  "key41": "4XmCrnzFX9GEpdrdspjAzY8kpCjYufxmq3ePqYxtTqihYkLk2uwn8Z12gpYWgR4xvGzrBkKck1WtaoKWg9T18shx",
  "key42": "5NSP8i6fVie8k5Zb8sLBmf7FdRpevWoHAQw7QqCZpSRWfTBJrLqJRNisrC1UWrUeiQG8XpdEwR1f7GxCPLEWDVVJ",
  "key43": "3FAaqanooWa2sFzJfJdMrnBSwZkjeJQqvtxjzKdXTDM7uRHKhaXJsZ5PB4aW7fgpgdDKWGHN7bR1K3M7xmbWMdPK",
  "key44": "EkFJX9MMfMVgk2rXpVwDJEnKs96mJLJod4Z83pssAe2U9ANZ4upxcQyeLWE52j22kJT62g5xGS6RSsEH2GTjh8j",
  "key45": "3qM66E3RHY2B1SnfdRXdhNZBT1gGkWriBKXuWhnXJYQAgQpwfueXvFZ4g9PyzsLtVYMhxErZeDBmHrSZgjcaUR7e",
  "key46": "4Z49ncEcBpyLSUH5bAGdxWYjUykmpgkDbQoVFuj4tDJ1n4mThq62dy1SAhz3t3qeNhaaUQ9HyU21unZ1P8H5qR8v",
  "key47": "5ENcbDG9X31zMq8ULjbDkY6zbqLAVj7iASRYjc2Ki575Gj4SFbKxHNV9c3sTxhAKhjCCoDHFFkd8UDUtom1BMGS",
  "key48": "4kSDCbKLcTFwYGYRnew3V2pBGiaXdmV1JU5mrCuYApdxbAvoSQyXWBp4q7CYoZiSjDjeThF7DNHDbzLnJNMcS8id",
  "key49": "4DtGN7oUy5aZ4af8gZQ6y7sn6VbZZYE5bavhtbyw3SnV79i7qxuDGvZS8nLPXAz9jwCHNdsxJMLyveA9RdacpKWf"
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
