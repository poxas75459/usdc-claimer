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
    "3Vi7qj9MtV39kHSRh7Lv6dqfkQ5bKDbQqTMKZQGw6bBH123KMwfCVceBVY1ZxHsgjPFCyBXEToVKJbVm2kiBhe5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NaXH9MPs98AgswjFBPDdXLKFL9KZCi6ZRskcCsYpwU3Et8UaetRRpEpA7UhaVy4upFrFrKH5DKwGLjcL2xbKTC5",
  "key1": "2NZRr4WTnpUFhYpSbGiv8HXz76C4s5jEzKs8zigaqPynUEauB69WMmig75LPV3N12cxKxdu2mZ9chdLsUK3R2JK5",
  "key2": "388ZsJzGEnk8PYNwxSe8pb7JfX2Ghdui1bCEvvzs3DLPbp1MwfYKBcugGmBN8T1ravgFbA5KefPJSPLpP4ef7cBZ",
  "key3": "5raa9eFmN4zTa4MR9o17iGYC2pHt3pSFQNpmfLrRRaBuH5DzDsNU6QHdpWEy4H2tjpYudVTCyhZBGLBZ8YYcDjve",
  "key4": "4ATSadufgUmLKu538tqmvmNFPCXYe2sqMx9Z9dSdg6SZvgnz4ZVbHPwhRw7ebBm7B14X7ypoigQCZNL4QTheuScq",
  "key5": "4adDEoSYfx6yENynQUX4qj7BXQxq7wWE8cjApBWMJ2RSCT7b8cST48egRRNEcZqswyf8mDh233bLDy9SheWfoWtZ",
  "key6": "8hLFJyyeWyNR48ArL8jqvMiqmbX3p1eoj2SUrkQ47zvDytvJPfbfaw3HkAxBbsyinaB19Ssm1ZvuoMAYR2C5fKG",
  "key7": "5XE2nXjK4tLnrBhBfLg5MTAvYdWAgKsmkLKPyxTPY62wEPzNmxVhTDTSjeRLEvJ4viN2bpE3PJskWBnR94gnNF41",
  "key8": "9Q7t1bngG3iv1EeHCTKerH5TkjMpuu7t7BHyMqajZt6nxg1b3dBuCdtZxUCzDVgS2fMqRrBjZCyNBB15gsHsnja",
  "key9": "2A5Yf7BkTNrEwMiSYvhSvAS9xiSg1HKoXhLwwfQ3nU8TBtZyDuBMEpHPerWV1GB9y1dtQVdLq7PjyanEqzP6Kw1r",
  "key10": "7EZZ3SSPx17YJePvwcAX4JxgqC4tkDSWg9y3keGhc7n3Bbte5tBVJXYXc98hTNabrmfSpvsRQ26aZdSxtabCZJV",
  "key11": "5gACLTyah91CrCsrRQF4PtyKzEpTNvsEVPEMnh6SMhw3E5uj41fjift9WbKN3EXwHfdVJTjt8RJzfJML38R553Bb",
  "key12": "5294MkgB2jaDkjuwdrE648ydegu5bWccNoUbjvir9hxW8uD7Pi9Hor32b6TQzpaUksFW5T4sTiNo8FTYvFxDpjMu",
  "key13": "24CktEbsgkWCsL4CHmibgmJw7mkwG3ABcGMiQ4Tm87BEXYGJofxhPBZNXKyAuvGxnrNp5z1MZkxwCY5APuax1kDT",
  "key14": "3H57AHAfVkRWphKccH7aPcD4nsDpPpETyNF8VULYcs3G8DcHo4Gk8Jma2RZMfCwik6uWyepcULbKQH2xwv2jyzxb",
  "key15": "37VSB3Wo1dKaoVEL7oTGHEmTuthWZaNwFXMhZD6p6b4o7HWTAsPSkMUit9Tyzz3QFhppGZXAqMcfxnfR5QzSGgtC",
  "key16": "gXp46GeZZfPmayovcVbA3o1rE31BDd7rLz4MZNdwJT1hDLoY8p9cPLxDbBCdbGTqnY7xQBuGderLkbfKpr8ZwyL",
  "key17": "5SA6Aa1iyj3a31ojZp6vegf5dwJ7tiLBTidBjUe9E7jeFrudRQJ9pCUXivfTbt3KfioEhkwq42ag5hUgWb2sC2t1",
  "key18": "3BF8kmVqE8e8cxk5JDDjqdHzxCujM7Q7TYt5qsv4wTbdv9znA4Nni6RLMxq6eZQabtDymHTwaaWoh55DAHZ9yyjN",
  "key19": "5zPYNeTub31uhSXMpy3Uw5NSKhqb92CFTtzmV4WS2e6hCH4kzcru8EeNuNVZQWUaz7Ft7CjXKs4VKYSPYrNSHvjf",
  "key20": "5s3C8MevPtFe2qjumyvd4KAqiF4DvRisopf7rfD2Vna5T7dtsx6HqZ75Jcr9Ufoa5gM46Gnr8gt1Am1CXEE4JXLT",
  "key21": "5WKqMnB4qTfVChmR3MjPBqt5PJZQuqkemqJhSmarwbxa7RZniBL1m2ukfRMs6NGJ9MzHEYxmNtEY5S7rC7nFoNe5",
  "key22": "5se9R6Vx5S8HV7k9Cb6cYcUpAneG4vBCuyTzUMbeLV8GpM7k1S2mNqztbqQSFZcqUiXKKZAAy9nM25yryxvRsTVs",
  "key23": "5iEYeJqwSYFvBNUbvHYWhgVtCxAQUvEXz3QSoNY9R8beT55CV1EwdUFasyMbkwrsjwcj8CHcGsKPPgXSzrbXMxwG",
  "key24": "GMVypaefLUSctzSskJLfMdinXT1W2Tk2mXNybkb1W6oTatPe9xAtQP1wn1n7cw96MBJcq8K3oWeZv5ohqMLGR4a",
  "key25": "FhM1BM3MFDHwMnZpBo2DvWKHza3udA5EX7btpSHRdTvusRypEkgXsrcNtxegiarZxPfPyq3cJEYhCgSwTs5v5iq",
  "key26": "3BEwBfjVYFCGgyVg5x4HQgwCgLRZHHwZJjf1m7FoCYcq7AmFhhe9YqtfgQ4vZ4VqkE6hm3GZLctgj3tyNpKWx2es",
  "key27": "3zTgEoGawVyhaC1Zoo4p1doK5iBNTVgm6eXDVr2Q53v9t968UArrydH1PxjFcaADLXsY2CexFAgMzEDzi56mwdfv",
  "key28": "58hLEHLLKrhZEkq68Rx6zGFCAQPAr4pqGy3VvJpZmeEFNATL1zwSbQc8yepe15xHWkxYVqYo7ccEDUjSqE4iK1LF",
  "key29": "2mR4xgsFQHa1gTVqnkhihJZH24mABeyAbU17wi4oaaNFzFhNFG5w9ZuebUmgna9DwY9CAZnCYUoc8cgG5XKJYr8u",
  "key30": "2nMCNB76iq96nhECNAgCnWhojypwGiYh4S6VnnduAUKABv46S2zsDXwCGWod6zHmVN5QSbxcW7SBWC7nBz6rGZDN",
  "key31": "T8FGymU8nUBYJ78w5AqM7MzQ6Bfz6GJGqg2gLaexLA5VG3GuzyYnp69M9imo84Eoz9jgaLavjqBfkhmVjUtXvJJ",
  "key32": "21fGnn2DbEQrs4YWe1XyapxWi939h2XfhMdkCcG1YaHm9gk4bCy2Vxrj2Nqsch7xaHsn6Ym14g9VGGC7FVW3rRLu",
  "key33": "4R2jJC5VCxJrKTFeVUqgZjcjGY5gToeHBUGxqjgLtchvt3fsf5wsdSXabn6Wzk3mcXcXSrpgnj3MMqetR1rrHfqF",
  "key34": "2c7aPgTfxfi2P3EqEDo43NS67cQsf6vZcX3tDsLfHFFeLHcCxdxrGkpopSe2n74MUBS6JDXEbbfcpi3m8nUoKACr",
  "key35": "3woXaYGFUqqDUuoTzpxJkCGEJFSjonrJJUECjJFqEmnAPRtM2q7YVBZiWHmXLCKLqNByspBzLSHPjjo4iHG8wDvp",
  "key36": "2n6nTyaQMMNeAnfV6MqPY2qh9MagTf9XQesMzHsBf6fsLjWCL98DtYABPVgcm4mTScJCZ4NUnjAofLWHWqL1ibn1",
  "key37": "49H9pozweoYMUDfnZAugeo7JPFjMB1BTNwHj1a6bQaxDEbjnUg1dxBmh3TMy2S5BGjCH6rCpattCLERhYhP8FVco",
  "key38": "5KofEury9QCQYNUrCjMvwDyaiL8dcCK5c3yJwaJVHbzb47v67vJ3RK4eQaP8iZsCaKsWeYFMZr1YCVZH1F5V2x5s",
  "key39": "2Srg5pjwGUwPNxKzmAerWm2WERvCMQWAD4dV5ip41JLendT8yLTXV9FsJwSxHJdP7rhBi6aKecsqGvwCrEqWF5fZ"
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
