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
    "5mWJjPYtKaiaW4mdnYbfP2i4vJnZdRyWuDHcbXMAwUNRRWLUbSVtctWPqT2Topj1iPSCBJeLqn7kvrxkrNaiP6Z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbybDd724eqUwvMKi1Ng4wcoK5BAWVFEBhu7fEFknQminGxmqJdhXu45Z1LQFELXheBFSUn9fgVSAfhasrU2UV7",
  "key1": "3byaCsEc2eySA2t1ubXNNtWSKVCwEFLTTkWpWJ8FKbT2jg7taxk9pvmEQFb8PjGpUjVno85cGf3A4KDCG7gUMhVb",
  "key2": "2NyHjVn1R45R1mahTJEVh4xLzKtL1NzmS1MsYDBmWt4F5cxh1ufLZcJ9eSHRbAeYjYB8tdSXLwCNGgDz2WcGa93o",
  "key3": "4fP9XtEu11wPnkupSZrzqwyWfuqYQvccgRZo7R6YuJVUt3CUwzatNwJacefCjumfgAjokiMyRAKkC3RVJnY75JGU",
  "key4": "2nDUfWZKCf8njCLyacJNV829TrXunErMnKCDGqS357qa4GD6adkXUZYATPVtd1kEZEbVpvxMZUiigKW2c5GLVJyz",
  "key5": "3L4mzrK6jShbQYxL5EWdsstMb2UMTncJhWtXcfmGRETbc6UyAKgaJ8r5FNacYKVqB6z2uchnwBJuV6dbN5LhHpV6",
  "key6": "5kGUz243fEPg9DWX4ogsobDkfDFrGW9DDhHTwE6euYz3mwGkPFZS2LFR4SbhGZ1FbX4SEmoLKZBzs5WKE1S4tbzy",
  "key7": "3UpqYuGJu4jpuw1oK8M6EqHL3epchWcwEf8P9nPHfKHBeAtF25sLaV511VCZFchjWPTGi6aqTRkbcK6boLDEPZ1u",
  "key8": "2HPgDftfKakYDUnVAV4vizggGktocsMDPi4ktg9TVr4k1wqGvHzQ9Sxdm4baU9ftsMnbP5sZvANSiP6GTnNhdWxw",
  "key9": "2x5AbCWydQxS6Khhm7MbFtWMTfyhEZ1Sk41YcbETKfW78K8xVHC3vocw7Fi5Q86q1iRBEHF2zoVWGWaxVss2yStt",
  "key10": "4iB9dSLT3A5k5hsmApDer4ZYTQibjquL6SgsB1pLALdukXnah3DoGmE1JQx6ogjdXsSaF3TvF9JxX4YVevdbwh86",
  "key11": "3NJhPdyygDS57eZx67Vg2XV8s9HAzPWwHY2BvZ8uUWmTYqcAokE88ofzeTgbsnKR12zWU9NECBP3ttG56Vi2Mx2A",
  "key12": "UiZKcA84k1kdrFYPkscZR23wHrqytqnCvWJrXpNHZrGRCSUrjuq6p5GTGK6hdSWsrRXLdbrK4QwZ6XN3Kk7nwom",
  "key13": "2KP2LfosHVSmguzow7VYe16oXJtDPhwGqvmPkQEr9Ba4Kmf9VhoPJiHrYhQY5Q854oNeWGthRjsycqxP5HjCyte8",
  "key14": "66cfSiTz8V7ZC7Ft1BKjwRoGYrELLerXWtyUTGcLiQNPihmZZ3pUJywYoaMSr6YY5sqp3C2yjAdXLsMRFvkwrS7A",
  "key15": "2ZSmQ9ivkcNEo7sMFfrmPkCYzFMt2fWTg43uvHcdSXDRwMsCf7FMoE6jG93Jv8LMRyQRbg8AFR15squ24rWQzbms",
  "key16": "5xi2niEhWCkLnC1ixkBxhoeT8Fa8hHRTzusKHGQYq1u2rFsRkYHnZSbdGEDgBTmcAQzN81HdkMhHQNZZZ2PSXpNt",
  "key17": "5U8TzSQkp7E6oEeFhMNWeBnZC6aGoii7sMrR5PkL4DFKSm5NjM4Gde8Fn7Z3AyfYiBdpTgiVwWBRDWHENGjUqiJH",
  "key18": "38ThwtCQrjJ6mZbfLtU5Cfx7nx5dZPNBzXMcs1PirrfDy5LNJctfZpPfsnGWugo3mRZiRkUMMFVEpUKmzAS5vPFV",
  "key19": "3kQ6LriUSqLpZ4ELJvY4tMVDbQrUSieAGHk89n3hZTxxgpiymbvxU4fBBJQAGZaKgk9PF6QkaUZw3ZAN8bVsr71c",
  "key20": "5gz9678sQxheszqm3XR3iPznar3tJAHZEZz1FsGF5LpaZqu8FdozwZ1TYZtXx94hFifuQkuQpMXsoEYEKuwW63SE",
  "key21": "5qDT43V4nY7YQuAwp3dP2Zaga4XAmdNv5RHw1Q9iRvXqCLfpfUHhCL2BZwCBpSoGrAD1tNEXWMQVBsdw9cxuhwi8",
  "key22": "3dQveFnNZkqtMzdyS7beTwU2tiwxQKGxT2KsRjKX4eem7W3J36K4kG3hZRcprbiN4NzW1g4CncxjJtAZPaKmoLyK",
  "key23": "5raQzcrmHyF6Vu24SDmGAEj3edtom9Ctiy35zmN8vLwrK77SZmeje5anmHWtUXAddJEuLksXMJqY3ntNNM97ZuU4",
  "key24": "4fFwZBY5uF2ENc4AQJRqfsEgkbX1gQfVBk9zp1i5G7axunKJrq1qX2GD3CbeHXn4sqHp28XhbcSespNji6s1E7sQ",
  "key25": "4zaFXk9pd8GWtvEcUuikEhTxGtY8zXmQmemcZZDcCZ9wSJ4wqXnqQMwiK2E5FtCkvPZfcBPve7QcDEPWuwCRJRvo",
  "key26": "4LgJwzaQMLTf7d76p9gsh7joANpicXLuuedUZy8v5aw3UQX57a16KPtgQms42SK3CUw5xaXgr3yrttSJuEhZLkGd",
  "key27": "4oNetEzysSv75ZXfqk1sLdZjKoFE6z4YGnTWd8GhqSozEzUzKYYnceutjyreV7uXJmSTzoe4EJHPomUSkfyFyevw",
  "key28": "2DkQE9vzhRKBGB2Czjo5wxLFZmC1vX9zHWVr8FY2PXrSt9VDvLF3hh3sRUxEf2E7nyeedXcqsiYMWnZA2635qQev",
  "key29": "2HvPYxDhX1XmCW5PEPDTrHBp7kZALZCiWFmPk2PNPN4FTcKCyibKHfdEzDRnm2Aqja2sdRxRhUWEcUXw16W3paze",
  "key30": "5Lb9agMgTdW5XPDAghsa8YPHzP6aa86kz9agGtW2oo9iVKEjkUG6SmPfX6YRWNGKkbhQYBzs63SbgCkeH9VpSjwP",
  "key31": "vqKXP2vm9q7GGARMc7ainPYWd3yGUNCEeLxTuntQo7tyd8Zyh2T1A6HrK69rm1UHFx6LYQ8ESxSSKjV3a2MTArg",
  "key32": "35oaoaXCujMe3asQf9bkELLsPyLJHThmpcBbSSCDrqTngYmyPrUnrBwy1p5n2ZmKDep1xM5cH5jmE87jGBJWhdGm",
  "key33": "4W3ftH8yK4V29f1SYaq9ewWJEtmot3YGKaYxGM1vQLx9hJA3nsowXJCYrwABMdYftfZLcN6KsrH4mRZjRHL7CxHp"
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
