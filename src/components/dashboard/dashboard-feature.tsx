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
    "59r13785mjRfRDKmysshsUMSK83xuZNMwbsFGW1qrtqunnBP1Nbx5jku6nXvJqgK3nD7vfStLmzNNRRVn1nq1U66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGL5PrZ9myBA9SCMSFwyDkXaMdxnE7fDYJCShcnhKkdWL1mY5nVB1ijELDWuSdceygkGoMquxtCqfXrbpCFdHi6",
  "key1": "5EDGnEG4T7rhWe1zsLuPhaNvawkxTWtqhSvH3wwiJFhgjnXduhgMywYheFDdkCZWr7ANNJFT8CVbs2F3zeq4uUof",
  "key2": "5zJ6jmLCxvKwNdwVxHdW4C85CZ1enSkzkcPeDVWR6payxBqbH5Gcdtrhyk6Qc5trwMEo6FzRSCXArmjWJx5ijKXX",
  "key3": "51xCxrN3TpwUcVUkqfceX5aD4kepbqGEtFW7fAe9wYm2dKhM8uiCwWnhtEyKDxQn5LnAnCw3R3WfsUXjfUQsx1Ef",
  "key4": "5XePh4uQih3n3oTJMGRvv2KZWBVKAq4R3mDtfjHHxM689wjHNMdhaBDPFJEftQk6rgPoT7jwA6sYPBKAtJ1qTvCc",
  "key5": "2u54aV6oaDYNLkSTwFutR1zLEbWMWziaKH4PbQ7AAfjKrLY2rasnzSLjEMvf8vMxznLBQpwkW7CCkAhyGxRP96Ys",
  "key6": "YbPi8EKqTkpXrNzcVfBwVPYHsM2jZgXhYtPKxuEXh8Hdru3VASfxk45HFwnkg7KbwEQrKRNxmaeeTvE4LTeCQtP",
  "key7": "4KQR2ygGRPKTACLVWaDHBLTgxYXr3nf9cQJ8cQr4M9uEhKHjFTFWvmPAJxBrJGMQvpBtFPHEjm9bF7W2DK5HomS2",
  "key8": "2zSbtFTU9BKWuxWEh83d79EF1kiGVTwq5NiBoMS8qFz3YKEynw28wZTFzJ93RkC4iHg6yRaSXim723YXLdJtpQN1",
  "key9": "5p1QhPmUcjr3Wg3ehxFu1pvpbsdHoa1zCeyWMW1cDFUfubMtqq2MVn8P3LtsF2cEYA2xt8fTrpJrUN9CLDupvRJk",
  "key10": "3c6VudN3x7ETrRZcPs39bx2xgTouENQ7a3PmNySvKBrJNQLnCtpXp51JdnWstjepuUPNkh7HemvaaW3naoCXSuq",
  "key11": "5qGgwNAMuucbZ9tFzKSqD5HdB2J5zkoJS8ioZ77dZvKzw4WjvYTkE6rqxEEw1n1iE7iusCs3BuZmev8q3kESDHeC",
  "key12": "5kia9Mdsp3JtbSc6vbG6BogyPHsuJpznyQFMsKxsKiPSvj1T1J3eQcTLNT6pEa8SoguUkfhQn3xyeTGgLVY3PsYS",
  "key13": "5JXbk3V67wFq3Cuxt8rtVKUVaHNNHPs77d4Ax6QVnsEgC5qWdZzndajpLw9zig4xqP9rnckcxmRZuDqJWjYaxWso",
  "key14": "2i7TSpn9v3hodSP6M4yrwtxtRteDv4qMn8BRESMjMyUSfHugXJeqk2BSayCHzXhiSqR57HU1wrtZnv7xPhLpcsbg",
  "key15": "3WqT6W2Gw3kbdHMq5gWaJXBffZCmdaZnkt6ZBA15bEUp4PJgNp8fqtCVVSZLwhJD7YTtd6M1DNbRNQ1uBM8t1auc",
  "key16": "3mV8m8zkWLaSXB9erHQq8pdUrkZL84fWcGqu2b2WwmiHCrjZx3cjvb5PDjgPKDtWRbYCXnVUc3gpTgjNAjMw4G3a",
  "key17": "2vpAZm4hXM3FNR43cxAWvm7VKmozhDutvPnBBs4GNgJjB47kkcH1sCgih3gHjnRBTXGbekZeCpULPCnZxgDShPWF",
  "key18": "5xVBKu1mzUq5rRZmenTEj4Rm2FjX9wqKqbdtVe4JwPtxHDKcqoMLPNi5SBCeskLdBKDvRmPqP9HYxxJn8GWGmqc8",
  "key19": "41DeVVZKz3FP6CJhTwNkA1Z3nFU2eGWUM2NrMF9BPGnQAxBQ3dJU9usDCPLAaUGR3UgwttixHJAeTfhQ7MP11mPa",
  "key20": "5jvwSCaRrCrHXJqi4LqbTqcc5opwLxxtmYrYkmvQJXiSLKbGgda8cxTrcs6wSx9LEKt2SpxphspoFF4eXQDZ3KXa",
  "key21": "2j2ktaV4m8fGtDovtaU2KX8jyJrwX4XWobXgTYAhPrG85sm7rEvzRJM5ks7WYnVxAFXNNWZWDQ7v1DuNymczRBLw",
  "key22": "4abHk98E9oKz1ozcJC6CsQh2adVpDHBQfBJjuETQegHAA82PcPamacNymeT8V51iPzP1Na52SSxJTCyLLthUzUZj",
  "key23": "3FUEcxzKNk5ntLVaMqWH436knaMboB9VqU1HReY6gazWf3q4udAyz2kP67m7tiHTQgq18GkbhmJ5HTYayWaaW1yu",
  "key24": "4ZEsvc6JotnQvbdRhmk3Qe96FSrZ8G6YE4kFJxZunkBchAckfroq3wtAtNqWthTPQSoKpr6SrRfEPeyHgGt6QGS8",
  "key25": "cfeJC8rMoroa3tejD6NGiCUdU5VY9vcuXksJvFvpWU2uKrg4ehPk1orE8BRLSfwLg7DW6h1Rvzy5nEygM9FqbdP",
  "key26": "5cRMpB6YReWN2ENFemePECkiPNrkP6vQCmSTghqH7UMBXEJSowypuFfozgoMbZwRN773FH6RgC7EXCwdNrHt4P8L",
  "key27": "4SDe7r6NHLsWJ8HSjYf1PJstFdWtpQj3dHmis2W7Tsg2iNdeDRiLCz6afPQ3nSWa4kEU1Qq3E3Pfc6oKTAd3xqK4",
  "key28": "4UZ4sDwjA7FAF9QiBpnHHhYvuj4yg6n48f8TcaSwMwS9VUHCyUy42USjA9SgwUMKv2q2oQXqGhe4KJL3DDvB2gRh",
  "key29": "3fYaiz8UuJAUKR8WYJgHP6LH1q9tPjo3UNXTAvgscSsMzqeEuGdtc3ydUdasJUfZdjSKpCH4GhGbcturNXsK1HqZ",
  "key30": "51nazS5sCToijLDg7oNFd5cqZqiN8ua2MNeuKGPbX35T4vyUkNUMVKDp5hDdvkZh7JcaHr4R4BHHcReDuUVT8j95",
  "key31": "2vB36xqGfKEqPsmKYaUznP7hGGPhdn9TkyjwyXkU8QN5dwuU8KE94ofNHuZfy7h6wRqf92kysKsfBJdVabaWNzDr",
  "key32": "3a5Pc7jqaVpxSPKQMW6TuhY18MbP8k7BRdKNo6kVbXUk5WoK1an8gLMY5xvyJG5fnRAQw6zzqwQtmKR2uhxGrcny"
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
