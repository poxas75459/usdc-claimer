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
    "4s3DT8vhN4RGHkkqvL4RaQMr4XLy2Kn7aEghHKth8zGWeTK8FQH7fqvzpchNV6914U3nobZGqTmizYpjqCPPRLey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfcZ29NAo6SVrJWwiWNUgA6tPtVQTNzeRb7sfAdaRv4gVGiN4Khsve9D21StcFDoAJ5NKjjQD61m8yFkgTK4iuJ",
  "key1": "4T6rEXy9KvPHQwUnLJMTaHQEhEZBD7x5XettKYpL7G344CE682Wf69GjSSDY9cTVn8mSwwUgbVFKAaqsCZV5s8ot",
  "key2": "4MHhGNb4NG5b75bAZHGrnPm8CYTPNPsD7FuTjRBLUoRH9LVKm16c3BoAyu7QNoCrnC81tKcn2NtayjXWcTwRFT74",
  "key3": "4a4zsYSeUWrbABtc4mWqyhQoD919ZyUFbaVsVit6Bsxqn8i4H1DowrKXuvFwk5ENmf87dNfZGaV525N6TCgBMCu2",
  "key4": "219dSTaVyS8LbhQ7xZQjjo4Vn9uvmuMUT9bwabz7dqAdtsd8XUGC96NQagyN3tgcc5VqQaqmNBihrJg4NJqQabh6",
  "key5": "gBt6tYwViNKk5vVYeeo8ctn3Rs3DPktx9GA7MwwcQDcspD9WncStyT2pWNC6dJogZ7D4MEGZACsbJtVZZJRjeHY",
  "key6": "2FU1qQaueR5WP1xGEXRMvRZzXyJCkUpK3gz92QDjTVRbmWz7cxr4aUqkXCj34vRaES76FPdxzdCRFtDWDnuZkzNq",
  "key7": "5pKkCKX36WNB4Q5sGoSc7F1sQVyCzJzjPN1Jw3nkDYQU6vToaBKuD7tRJbNaFw5i7aYDcp527XWsNNQPFzbPZUyM",
  "key8": "2bb2UUnVg3oStUZcNyn2CZyfvQmHLzV7DCSwNm7rSZHh9FY6teuBCL1WE3CDnj7fKwSFduskVznWNXjf9NjW8NPz",
  "key9": "3apG1yAWLJtoevVYfpT1rFYebBt6sCrbqMTxQTmX7ZZyc2xRMQqScKjWyjXechU8d2y2ynvveCVw21nRBdjAXUnm",
  "key10": "2psXHpesLD4uV1FuZrSgTr36BVw4MgxCfNR1B8vkCmHPWDC2Ng66upHkPMaMPcjcNsddW46bswgXadPxMKbYNqqk",
  "key11": "jk9RkZuu4pAdCrxv8Srg8v8crEP56KSf8Xh8t6akp9JaVDVVFBT31XDUhsN3XEYEAHctx7fe31NaJDKV8Mh325a",
  "key12": "2HaP5q9XbeBxUcSKNQbe8YhWpRD9PqdTnvEPhNcZY1UsjQd1SBY26KfLotSVu6KqN7ofJCrFs14n9L87QriTkjPs",
  "key13": "3xm6JfoSQezqrMAMaewewQAfiuVBp6Qfyozr2g6U5F1282BG3XKdCx1UQLcBU75yhho62jvpBoUpJSgiAo5X2NBq",
  "key14": "59n1tKfPAhXqPndqKaGeduRhTbP1AhMmWwcHqJGuqigCvYQmd8qXQTAfTCfyCFVMxYMqa7JDFfV7F8wA3nXHJk7n",
  "key15": "29fvPFFK2vpopgSLXeeL7Brs6k9nFSfq5GMJxEx6LvDspXSXFEUgA7o7PjtSfSpWeuQF8Fqhbpz6ekyFaJaGay9X",
  "key16": "23UVr6LBAfhnNBV3VwTCxQABqzA9YNVKaLKDMBHyCvMCGpRApsJho4mKH5jZtZTMDRHL3dvEex26hQh3MiPKiviS",
  "key17": "3gcHNJ338Y9nZapoCwCdbYDsbPRciShFzujVgi67n5jCqtosbhwPxJwyngdokgUSQTsXHjMKMZXKrZQsemWccu4Y",
  "key18": "JDT2EMti37ucFJVUrkpLq9GgbraNFDjb6LzyicY698AqCg6f6kcivWt1FMiGhsrR7rzQF8j5qenUoXeASaxM8R6",
  "key19": "3dJWWjDxw4926NbjynPNbTXcbFarT1dJPkPih2papN5QtnsxqXBtLZbZijhHvdPd93An3ohfKJUAjyFPFmXuepAF",
  "key20": "E7n4oM3ehkTXSKrfAYJnjtLhhwajmAUBMoi9utw8Z3Yysg8wNrSzG4rsS1215yEFCqePpYgsA9ESNtZiQx391Ad",
  "key21": "4e2URtcogvHGCPutoADXMuGH6szMNZAUboqvFDtdG1ca12tVWK26f17frA5EuFcqX1rJTeMPzAZqVAfbqSBWbehY",
  "key22": "2fHKFuGHjAwbfNNhQE6wgZR2xZ44B3FGP8kd7rooAqoGRYciPVfLXPotC8yxCpaP12mtx3hRc47dJmakJT9C4qTa",
  "key23": "MHSapkDDWFaN18AVEtBVVDp16sww5UAppCHE15oE9p6yKQSdWPGcErtTuytnuxrXyVLfmkq67RZsZbFWLZHUteT",
  "key24": "2tD125sQso4QkjN6fj76FAouocdtdvsXWVWUbF4KprDq2qt33aCjPRLThnCcJPaDJCRibNszQEceZcRNnv1E5pLW",
  "key25": "4K9rhMusPfjr9HiBEueJc1jT8rUxb7DPNm4rs6ysvJPzQgL1hTNitWBPRhFpqG8em5hZZ9YaDBvXBqpu4xt9hgXC",
  "key26": "5zhJgQK5pnwYSGNiyGd7MkGXVYBN1jgiUcVTgwFErH3mjUzdFMCLNW9YdeKHmJL4SbbiikNGZasb4Rv7V7Ndu5Vi",
  "key27": "3VG5oDdweacV2Py65p3diNZNwbK3ZL7ehPYZLFMcsSzmdacygbCyvVFJ9PZ4dwkxM5bWThBqSfWg3aSjWCtPdAKx",
  "key28": "2SB8epaXczVxDsxBeiL6axPj7nTYrdSQxTMV4z5qyk8zFryQgzjecLdeXd78Hvosyhuz28gsXapySUKdhtAdnFqA",
  "key29": "5pih9BMyc5oRZU2sMp426DTGVgDuq35ug8Az74Yvi18aEeRRDncgDeoBDuQfd9Wtt5DafAh1j1ci1UkbAg4RZhnE",
  "key30": "5vMvuYRNUyk9eKcQNdYPm9K9NDdsMVqPr7TrVjTarXCDFcTrpaK5NR3PFhsNETMvoZfsVPe5aZHW49J15ZkpLHvW"
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
