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
    "4x7jwM2e2FNpoizKFw8zqqrhqw1jVrcMWCd3EEKPwarcdkgdVohHiJsm2jU35hRjahCJUd2Ljfk7RLceBfgtMKm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67H1yJicakbTzaeQfHMn1Fo8fiavoVBX214i4Q1K39ZB92eYhBaG6MmjLA6DpKzQuKwcK1q7u25rFY18NwUiG5wu",
  "key1": "4jUJV4aP7pYxaVN1F2vfNC1y97Y7TR822NFqQqBYsJFu71bBksRcWJGgfsyXpLe7B85ryRWaFv7GFam1oWuEaMnN",
  "key2": "3oyALJyLgvf4fF76Drr7JN9cBrmqp7HXk65CY35EXhhHywDvtL3zimw4Ga2j3zfxHMcbVTpXdsjL9GWMB7SGWWQb",
  "key3": "3uzqBeCUgKQq7hga2pdRfnvWexa7rte242vRBeuvtqqfGUEKtAzox5yKKPKDbCWUy6G8QhU8g76FUPPt7hDuJAJx",
  "key4": "3n1QxrPU1P7ZvNeBVErAFLvi5uRgPJMpSWicybwm3npCa9hWjJaZ1ivFTznoMnW3VrbPshsXoSW4uEQvwbthsARr",
  "key5": "4bSLwN9caUWmcPUFbaeTkXmLXZKp4DjGoSUzwZetPgbNPY9oJnERrkXPxdCkfDTSycmfkp34ibYJo9ygectx29p1",
  "key6": "44zoCNnhiwuq4Edukgy2QgeLyErP2Dnmioh9xYzKgZHumNKCCgdTqycnjnzZa88HvYQ58sqdE2eGMfJRP3yYDB68",
  "key7": "5KwfHZ5mmESrm9Ahd21qHGv41kiTtJJUTqyREoZQe7exhr6emUgX9RHkwy1hQ37wLxHmSXZcwFAHNWkhveC3P2BN",
  "key8": "5Dg32vKLB9B5nqPXDWkZNqJNzpX7TX7Hw9VCXnAR8JqLVsTdbFS4sBQ5nfnSynkcKzKBNAPe3QTd7oggDDAmrUnZ",
  "key9": "3VXUogp3t5Ur8bs51boAoRgRDkZPGTQW7378npN3UtYdmd1ZyUXbWAg9Y9Cpm1NFJ8oECFSrF7mhoURzBDYSt4u1",
  "key10": "2vxZWyBqBSvovxmuWdhr3woAiuybDaQzrTfuc2wPNdpdDCsPzvPJArgMU5KaqwqoUBYTiyPP5QC1a1oKtRGCZowS",
  "key11": "uaNEGPmzBD6fXHd7uSaFmeDr3jYA7ezLXVdvBnG999eoSHnkKRa1LotSThWzDnmGNNNWznKWz75aia9e32R9ArY",
  "key12": "4zsiN6vwB6kUbJ62izD3PjNYUZHCec1nU6HBA44ozoSPpR4VT53D6QjtfgPVbX8buCuMwW9oFG1mFSdYEPfP3QRY",
  "key13": "2cC6nYNqtUWFYqLZfZvtTy2JRUVow22LJhaqEn1Wad2Z7NfUVZEJx3yjSc66pdB3jaFPCBWGRmpihudnVamcBVZh",
  "key14": "3TNv5bcK2B1XJg5schWbKEEHaszj7PdemrZxwqnFZxda3Vrw7pebm8dKw3f8q1HZvqrLTf82kL72B9S22TeRZfbS",
  "key15": "jMwY8qm1H3w82rKEazmkpYm6kAvD6ps42yzR4h2Dg1CCGjTabhMhzzFwQQgq4d7FhatoYJYFCCFYsgiNiH3VMAY",
  "key16": "2Vorfg5LxKSCAFuVQgU3ENwjHJZZTr2RRxRMG663SZYstkwz8ynEQzmavrfdJ1H6fcpwP8QK38zCuegVEfjL1DjM",
  "key17": "YobYthWXXFrdPKQogakjQnQq9G1QduNE57fxTrmw6xukvxWfDJFSbvkhXdGHBTHzUG2sHQ9SbSRiW4Mgf9hzup9",
  "key18": "sDcnBCSoDrUf3tjUndE5ZeuzHuQx5nBMGUwVcadZPGQwmY6YNFcNFQr4VPQkPnCeMxpWRnvanQkaQZEzA6pL63N",
  "key19": "3myXqMQWFYHJtgHW9wep7evUUhM1MmzkjZQQ7T6ma1ZqYY2bxWRTpww4hWw7eBQkcJPFyZ9UPQpkNwcmAEpZNJeG",
  "key20": "jgHDA1xN2TG4aksivhWFDu9mPijajvgGQXW69NwEbgDz9b942hcmcE2eXavyJxAJc3fdappMcWGhsHX6jZWu5h7",
  "key21": "3ue6y2GcJteWp3kaTciwu5mabTU8caSXKec4osnt12kWZgaUqtQ4TaSyXt9nveJo3JJ3Ma217Ero32eQz2A1caLW",
  "key22": "5KkSDjusQurALuC9JCuwQ91GJq6THVjx6eWff8Pa2vPkhidGVhqZD6TpxMeyRmvdyrg7dgQGSc3pGtWumLvutk1L",
  "key23": "vt5Vc4DCp4FQsH6tCpcXoeMaf4oHFVnRCbX6YzXJfjNaVRSCLhKgDbo7gbRoJd6mYd2JeqgfoizK7Va9LrGbF4G",
  "key24": "4NNvrXjhsxWNesbY8R8Mb9NeaxXzvC2wQYZ3KRavHUBrzDdZA6H6vxZTsV9gwuPRVn8ZdusGhYaq4BBLDzr1FgEU",
  "key25": "wrQseVEaA1or7V6Pa2ryVtWVpckz1kABY72xcyGfND3cKyXiFV11JAE3HFvQksqZUzoWcyrG1e54d1HqEXQTbU3",
  "key26": "5hjkzNM37LAFgVy8tEeeK2EMdmUatFxsW3YMFuqN9pEKFHYtvxcXLRhgz5Uamrpm3sZUzA3Zee2EdR46PByJadac",
  "key27": "3JeA8wgExeDsUgrfh3uHTnnrCE1b9wbRwcaSJbX1WNTe69vpx4iwvUG1y8j4MAhLprmnjBzxt1NpFu52WhgrpThf",
  "key28": "4r7mdY8LP1zX5YNafRpT6cgwz41BX3KHhQMZfqWZAnPoVDBzDQUYd3syqCZm1Fkwk3Pdkqyn1AtcNu5yGMKnvrvB",
  "key29": "4eVS5Ta8sGmZV695FcSfP41NMhtdsRwfThiENZzyiDhgu4SZpx7tcVeg32wYmASbzxoPzpbpDf9tqNNgRPK2bja1",
  "key30": "5mHmEQGdqFkzmdzCuMnBHh3vHiGyqwjHjuRVBFo4QokLzBH1WmQibkza6CFFXgEL8jWnovYGRCkcZYpGXsjdY2No",
  "key31": "5yck5yfsKj6dKM5e6A3VC1onFTDpZVfqQ2dEtHckknXwyViKjxAjL2LkPBew3Ktnd8tCEFjF2tt8C2GbeppfE9U3",
  "key32": "q2Mu2iDwCt6yeZHmBfsFQbRDps579fp7QGhq6iwVPNG1X7QcHDMs8u7vSPTVsiRSQMRj1Qqk311MYGWaBBeRk5A"
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
