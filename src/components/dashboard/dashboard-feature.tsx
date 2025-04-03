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
    "21vVAzynQkvjcJrY4XYiEqrwq6Eq2KVHEX3MfgNfAhofmNmGPXoacjvYAQXgtgRRDzuZrmxATsXSM2VZmSkgZ7D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMeqoqtM1j2644P4KX4jnpHTGauPy1rymPjED1Tu8jL5UW7QQLvyNrDT74AoLgKikdEWGNrEp5sQYhRPuwb2K6y",
  "key1": "2WHDcVG2idAJrNZeGG38yhzVtAJg2zEv3kouwC4ezbEzTu8eL2NmXtU85e1bPuCAn224gNyZ5RvFsB8rqMsiwTre",
  "key2": "aKV6qpPTBhDmvowDxqXjykSbpkiBKo547WJ76pvknz6HpYhtTxD1kgkTA6LFz4SuD7ZtA3L2JcaGygSzp6518f4",
  "key3": "2CRTjoNrvKgiUwxgxMekDMq3wKunPo4Mw9Gzo7J1RphGWHw99K2nqH5SmdTb1ihTQUbkrxt5Ath6ygYPzPVFegkX",
  "key4": "47Eh6xbV36ecmsgkduyQTEZw9uoSwXNFfe6vaNAbu5Htyo4TiE222Dbpb75biac8yDpi9gHE2aD4X3WTpBNmHWko",
  "key5": "3pHHosTY1G2ALkXx2Z7jMR5joMNrPHd8gWjSKtnM6qigxWg1xz8ytVw2BoMoHkdDkfLfnECqYYGJCv8qC69bmL6e",
  "key6": "3BVvwbhEZpQMDYYjSpJMFHztPvnv86ZGmQaaofL2jFzmntb53UFCVwJ5dKoyRk7Q9L6mTXbXsxPc9UvLwYwQdcUT",
  "key7": "CbqDooRxtjHfwmNR6Mzagrv6HNUvhT5Kt43jo3JcMKQ9VJzcaqCdXetMwQU1NTCbGma2eTXjCRwm9kCSt4vSEFi",
  "key8": "5yRvv1tpR1a3gLu47kCGvuxqToaUREE9cMD86Q3n3vugygFT1Ti6HNX5cXDitstNkyUm3rLNuoxBg6nKnKvZp9AG",
  "key9": "2bPe1nB8PVPU3vQrhqgvPwVovhsoubXPN5MEqU96Ja93AB5ef1bPvuDLGsEo1F6fBDRgZbfCS7ESeZihC4YRFq2H",
  "key10": "3AdpCEhJXwHdy2QuEL4QBqAXmU1FkaijNE6oAaai73ikMnsbyAaA74oXcNtPLUWbQGawJYSNeVVEtRBkVdZUYLQW",
  "key11": "4DFN7fZTPTBbtgyrF6zaHwu7Z99ZVgY7DkijXrCuDj8nqc29HSX2UNQ5gT6L27L1AzQQAav8EoCKR6Dr75Nthqw7",
  "key12": "3gZYVAinbPBiZv54eus6hghKSQg4PYs2GdzV6wwNwcRyFBQSkVYNQ2CDUUMv9hS7881cUFw1NtY3M9Qsdui2CQ7P",
  "key13": "61jE2X5xAsKhewHskpL6CJvodGnp93SGHAauavwyjfypNAATVp7Hkb4Y3rQtU9AmYpZMzmQCpFcLwjqV5Hoy5dtU",
  "key14": "W7bMjhMjjaFF6Dvot5RGvTEndQuLdNyixQwLudPVW5Btx8rdLLoT6X5wCti6uwWEgC2LmGDWr5N6NS2KGDZmxs9",
  "key15": "qGrpi1ZLayAMqSoTVja8Y4VzgesTRDZ6xMHRJZWYeRDrLfitmCxqhKaj6o4yuDMR9QiL7o5ZwXMuKQRmsMjB1wq",
  "key16": "j2dJKEVuvYhwMCRGoq3VJ2H8ienaUgRzoFLAMcEJbc5uP3gX8hr4hDZknMRoKpTgUewwyAM1cZJCWhK7XYponAg",
  "key17": "t1wYFqsb9FQNZMNVBvPM6RUTkAnwmRDAcGdCzafTaayLoVGze6Ka5pJLrF9pMNfMMWdxZajs6dcFFKhWrGFqfYR",
  "key18": "BkMZnKGAX4MBnoewZ9YM6BebBw7v6onzpvZADSUZNJ6dgD2bD4UMPB5Rf9tG8L8ZzijDp3yCZLxFYj4r2Bou8WU",
  "key19": "2RKejTjnGSch6sv6kBDSp26irQs7LJyxTXbahTZBzyVi3jEvhFRAdAYLKgLzpNnryd8SFTKxgnNbZ2Vf6aBAR4tf",
  "key20": "4fa3jLSWLn8VBguxc8MWiRPhKA92vRKmrgu5q3jmv6UxQ7Y6jWLU7KYaNtbppw3N1sXxh95jEuN3VNMJBWWhAeAd",
  "key21": "2LMS2pNwJPc5DNfmtjoSQLhFf8wn1Fh4wMRsBaCvvkmB1FfEheo1695sMtMGxN5gSWnKsUbvcW1nMjH8FN8UpDuH",
  "key22": "raStxc9MnNkuMd8M87cmBchU5rJgEX1jPqNc3BzNrnT7Jm6J1DhgfayjwpwEknTwJyr7y3Ap6AUwmR9iGqCXHL1",
  "key23": "2QBSV7FemBE8yzUwg6xtcWJPA2dFWSHDHWFduRukxZ8M7F3UGGM1L18Z4hLUsjTgtDZvM6dofPf5TM3cXZdbr4xi",
  "key24": "2Dm5T1pc4iNBeuYT2xa7fATAKFPSg2eXGdUy7KyaUwbCLs4SjU4BMMofL6ZGSU69aFwVTSviqpF4W1dLThiaPYXo",
  "key25": "5fECprCn6DaLmDWBJ2ud7duYs8LYwi4tiNMADmBkkuppWaa7YwGhm1z6mML5MAQCpAhv1CgzT39pJEthNimP779b",
  "key26": "4ikxaTLdGHusDWhdRGEMiqxEhjJELGrtsULUAThkm8uyaWpUTdZ79PLzBQoZUJBBnCn8RS3sHeEBMP9HLLVhK262",
  "key27": "3GDZypaRC6mYqTsk6FLKsySbQ1azqgSKHdp8EZn87xRvxGYWJVs3VmyPQKKoCyiBxLUgaFkatvukYua8SQPsSCWC",
  "key28": "4tAyListPCayCHJe5jJ281KCvBFr3a98pL7xnmKJJVWDQBqreg18g9ttDhwGDJQbTC3yu7K7vcQfgjsHAx16mkXx",
  "key29": "3619oR6i2UtMWjez5gp7rRAe7jj1JmqvKMK94QNcmSePdyD4cbUEBXcdxSu6s2yP2HDRFFTKGjbXKATppNVi8mce",
  "key30": "4PNUgVypw8bCKZvW89YCeGtosk3h6oYjzcwkLDk8TDFr2az24ga8ouz3eiNyN4LQkNuN1QhFhK3TP71BrDd8Ms5R",
  "key31": "3k2EGNWKATTZhHkZuQiJN89d4FzkYbvf7gHrdo7kyqmcYnXWJNv4U5VF3N28BJMbJS69Cf3jmkaSKn93pAb5AKvY",
  "key32": "67nkcDfbGq7ndVKTELbx5oxxJDnsYpZuooAPxbMRL3A6UgizDfcxgfAesq4t7zzWFYp5PsFoEuvoVMoFEYTv39gS",
  "key33": "3joc7BsbqwDspkM9frcNihBcXNC87c5S8xwhkdHiLBGYQsbYL5jFN2YBycsT4fLh14HpPaWcvYUoFjBZjFkkLHAq",
  "key34": "4LZUNKX8xToaVfDTw12tqCwRDubyiSmV7tw5QjPtmoXbQsBY62SeVAVBwiWC9837QfkrxMWWzw8v2oRTAwCvyp9v",
  "key35": "24qHaJhMLw6aLVR5jctvdQAJqJ6wV992568NUos5DjyZZeaiG9uzhQ5MYF5YYuxMXAQjH7gabDcxP5ai2eNdUpM7"
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
