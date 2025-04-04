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
    "5CZfEvAnVAv8f3unqXv6pgDJ6vDpC9kuUkgBzSWSMxn3BkHpgyvDxjwLXbPQd3yvHbu653tLu6PXBfTYA6pJdPc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ybrQRzbf6LbYqy6VsLvdxHY9JtTkjenyHNuLodQh6GotQhDDGUpozcD899DoiH9LXNPedqHc4SYH9qPAsgm36Xh",
  "key1": "5J7MzScyQHaYx7uj1UcptfSKQAKa3d1jzYYN6EAZ4bCaXWEXUUjfRxTNRF4BpY8TTZ62s3DdK47GoBBLzMiyhosp",
  "key2": "5oeAe36LGSsZX3CbfKDi9fzhZnRXCwo2zHoMVyJzpEhDDiKSmHr9mHk6yBqzhpMfFc4FjyWbZwPciYFxJsgMA57h",
  "key3": "5wftJ1zNK2xbFuApmyMwLfsq35T4h7PHPg1n3APMJtyQgafaTAoppt6PEZGwisfrsq2d2FpU8P8SEwfAyKLJTfCV",
  "key4": "5YtzPQ1ajsZLW5tFRGHupmkyRXQTZWAkZaBK6Ef4oYXXudoZyDb3fHfR24Aiv9XtegJytA7VoS4EA3JoChLeivZk",
  "key5": "2k9aPNxtSxWTsvtqF1gTNxT9vHU84kkoBe4s2DL3263eVE4YUvyVrnM4LP8haSqEZqntbvQMzsbLB8crJRSmwCVP",
  "key6": "QWa54sQ4QhQsYDbSTwysXb7U7CULAueLnvzNxTGh3GA3BwYGMyicHDmFYLoqkpV2xhDCjmHpjohz1Dt6ZVGi3eA",
  "key7": "J11cJK6EwZY2tg2sdPtZZQuue2Nm2rkxkhtq5gayZtxjpDktUWQKSr1WQQy3Grmh1DhzH4mHbNTzpdin9fzq72Z",
  "key8": "2nA5iQ37itJazieJ22heNWoUR8HNvkU7HCYMJxMRJVaLZNgJQmuVH2RVZshK87sG9ZenJnhdvjHVXhC7NVn4BWNf",
  "key9": "4UG3YKiVGVFKiStQoA4UqEXg4GALrDL5h98we1a21bivMB3JsYizScCHsszqATjBtkVSakknUPpVV9HtDKERDomJ",
  "key10": "3t5NPNdSu9f6QFUdptaEoDNsD57EisugKLs1qMRo7zob9F3GJMS46vD8Vijm1taq7D4UznooGMD7VoqRXxcSWcmT",
  "key11": "57WCfuusA5DnFnMF2b1qW9q3fLjofpgGmzScrTGKLruZaZSYQjypdyiRuYEMXCKuksstuK3o4zuSKKXbzX1E9Tw6",
  "key12": "YhM7nVrxMvf9e325Cn9S8a3WwE9AxbWgzp8bRFig7WKNG88JTvYvVhexq5HB1qTSQdfNF4RyUJNtf1duxXmYLD2",
  "key13": "5BUKLrhWVqE78iCLTVwy2yUKeKFG4EaojAnbFfWYufNSs8W11Liobkrkm8E2B1EiatKFB5qvwMhnhzHsUTkF1tU",
  "key14": "2VVGDMhRp3QWBCKDVhkkZgkZcBvLUNpUqTcHyNPPfRZyRB3KUuxJSHdYWLEZT95m9EGbr8kZEcTvVZvsYqnAfbXz",
  "key15": "35Dp4PFa5RmozE48o5bRP8ytCxvPwRaknEx5WfsVGbcimwbPHusVdH3RAUk38XUPJ2ir39putesjrsWVSABkz2cp",
  "key16": "5SGAbfkiDGbNhdvekuD1L6oetd5YeD4c5UXJfM68VdCGTJGb4LTPCMX9L2KqH75w9E8KY5zmFZX8PzDeJRxQMihM",
  "key17": "2Fq62YZ9YQssA2DsvdroWCeUpGArze7xFJQPWuPkzptbLeqMSy8GjhBZhc9qXmgReDKe2m5xHHPkPnRk8PtPvLV6",
  "key18": "Zy178r9Jke6TTbrRmgsfKRYBUriacGAPEhwEAff2awQfF8XRVtyUHtxWENMArkVVdh2Ld35pcMRBZeHKZ1mqqhg",
  "key19": "5SJw3evotkG4eHVU7vw2i4zbtznS1gsd3zRtwLz2CVYHQJNRpt2XzktcmaEMsmGkJmyX7REvp81cuo9mwiivGp9z",
  "key20": "5NWsDzfwgKj9epqmw47wQujvHTefnS9dyBZmJjhSaEsQnQ1TcVuP1zopQrjUhho8qePoji1W9XU7dkN4SxUp8ePb",
  "key21": "3U3TbKwmHQvXXBGYeQd2RFyerrBozAAz4WYX8MqgDvQ4eaWd3VkQoHgoAFY1Q52kWAb5vGcraDyCWTrbQfBud6Cf",
  "key22": "4cSJjQPxEyFddoQ2FPznD33S4Kwwm9L4mz973LkAvfasFs5J4Jm4TPHFVBr4ugH6Y3bWLXcfx8SP7L2vUS3eUpud",
  "key23": "61uSYbQ9kYC9YtERN6e6KRw663ScJu8fUfcEPeqJHHg9fJbxZ7qmwMu6YsMaU8gzjGt5wMuhmpry2bpXWse69EnT",
  "key24": "4ZzoXW4vxtjJ7BQuKXNSXSxKuS659MW6p3E9thituCCdbd71o8LqXZfe8mNTcwRvxQENseQynzqHKGzar5xGDSTx",
  "key25": "2YdUiv1cEDrkYMGrBd7xq7cs3RMmjkCWZKLbr5Ltky7MG5iBw4k26h4JTDvhJSzBNFTYCk92n4XeNc8wAjZDK5Ks",
  "key26": "5HR15hdaAj5LfaVJ14TQ6spMWjj1bdkMftaVsXcPNAgTgpCdz1FG7MZcEPUEGgyTGSkK42DtLGXEPATYGj7tFpZL"
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
