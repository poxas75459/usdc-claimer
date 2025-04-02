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
    "2Cvf9sEEzpmajsL6RJJ1tHJtsagUt6L66oArBmrQmHaQKmAwUShxCjjbxvDKcFRSgVD6YoY6oXvvjSD1LUQSYt7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2yHcDQML1AU7b6oAEBoCfw6m3VQRWZN5U8ZymxG4Dabww2dFdt3hrstfo5DGGf7qwhgARWEpu423zE8cXGHuBA",
  "key1": "2X4a9s4a42KJFiHyrWBaaQokqRndri5bN5xhefzDLbK8XWd7YVSuwiejNXQ2n3my6HByUE9FkpZn8BVA221ZUcGW",
  "key2": "588pFxc2b9Civgg2re1aEUBZqg559Yy3uZhs6hv8KDPFYb8hMxYoxLpzuqSgXLhgEmx3TC9HUYdXQbxbHT8Eo1xg",
  "key3": "YaAmyBYkPANoNv1rjk9TR8whpQ9uEiezDkxS9dm6rvMocqnuY47gREFRLa7MYEcMPRiFuVSDQAeF6VG4wy3SRjt",
  "key4": "2kZVYamhnwRuVBdE2VLgfaLapA6XTWpi1VrraVMns1PG1uQozCycQnUKWhW2tnNyuhodLfZBT8jhsgwUSz5JJLmY",
  "key5": "5SdgezK4RJdTLKEYTSAeqbAFzrzM1teF4XdTDSMgAK4xKSN7iog64hEtPVoKchSX4F69q938bZ52BMnXPwCkMaBe",
  "key6": "5jrnKkqK16M8bsiTDNRPrPMJD1ugN6ThBxmPa77ynLxjvdL12CQT8zG361mD2miv1XKuHh6sR9qeswca6qwvjnQ6",
  "key7": "4zmfJtMPA5nxBzztu3N3ynvenbintnMgQcYWaPs1EqJQhbPBT9dQnNF5LroJzduZ7gs4GqXBUBYSP1h876Fw8c2p",
  "key8": "5Dhsbbg9tYADrWxRb42QrKxoumBHMkCEtbR8qjzKZbvMxFbiAb92xPgptC3rVpWgmhDcUQaNJWrhGXs3wrcEDZGC",
  "key9": "2MSNp5CjDz9rexkYrrSPQX7yF2uNh4LTcN1bZ8hZisFiMeqCiMcGghpEbGLBDbJggnEnuEG6qMy6pH8WFPXVtrQN",
  "key10": "38x5mfYUWeP7XrJX1BxJ4DrG8KwSqXQYzrRY4kMw1dgZdtNoEW4zoM3uyN9djDfCjckqwtS71YBhKXgvfTYDtMDL",
  "key11": "jbaGvYFf4wAAj3uVp7zeFhetgvNBAhq25HdACYUcvxo8cFMCPq6wwFoZsUyxXTDDyJgHgRJXNmeqi3rNWhysajh",
  "key12": "HAQCkY2dWHwitWtPtsWAaDzDBZ8eCZWuxEB9HgDEnRuDMgdBu1jpqMo3Ntz54p1ZZX6dbQgf1iNXciopQ2fcETL",
  "key13": "DUCcL5J4McDgBhBdxg6qBJDgZT29dXR5vS8BzKNk5qVoMuNZzav1HA5tqA7LAwwznSbQdnedYqmnUGqHADgiG53",
  "key14": "3RcvJw76kVq7vGWpW5fNhmdjx9q2U4AnB4PT4VPjZnFZyCeh6WY8WRnQd61F8AkYrbsDQQizG5VhEx9H1mmFudgT",
  "key15": "4xmwMebUQuKX5oHM2r2XHtRqi7XuAXtqq92oWjZ3DyjxpUFgVKKCQt9HWW9SJwYdMSyHZyZbD4GDkz6A4NBaLpAJ",
  "key16": "2YEkSmAAWqvEn2DfBYEnjZp1TDuqtiAQwQsxHDDYLsWZWsov9QsQAdXo9rxrVbBzTaSJYX1zVKmuBmA9882729Sg",
  "key17": "3zDPvvCawrCwRBf43UVbf4vD9WbdGCWMJWhKtxy1DSHu1xVykqFo9HuHmRWU1Lj61G3xcK1LPYjRcA4MbqEn4ejz",
  "key18": "58ZdiwJ96SXTJcoptNLJTNjBkXg4GDh1pUr7SXszgQo4Tu82xQFgTuCbf7qboEXhih1KqXaBi4WtDgqp9FLPLCJJ",
  "key19": "5cMNkZn2npDCMvWFf3XtdFLfnz3dR9jxiumHJZ3LMhjvhCsreHoisiFgowwzUKVtJvdMvQCToNQ8kVYuSRp2NUpL",
  "key20": "5x6uQCgAC4dUtp7MeGx8LkhhmkrjkuTJfh2HeReirgDQao2t37i8pbo87sCTjVriYUHr3zGn97yhKeyGu5Wesc43",
  "key21": "3vik7mbtuoomTmCRAb6baZruBocdwBPDvArpiuJuUQeg7UJ7cVyeWMB939uq5NCTef5b8uRqVtvDWz8rKDpaW9oz",
  "key22": "5MLc5D7JXpdGAtQRXLSQHZ63qjcELJvKbo86nVnKR5EAMMGggdKRGvpycZ2A4WkcjKya4uA8qQgfbxbmApu97xar",
  "key23": "krispb63y8Q61PF8EbgMFbuUhKhSta7Fw6fZz7iev5qLbEcYNSGgdXaK4Dx7Nr3j2Yte4R7LwAfU3pUuVHQEDuW",
  "key24": "NtqZf6fwAJ3nEYiY3CyHC2cN6qNBk6BLmZFDu1D2JyJZJR3438n6txqnrKQT1TafTvGetVvQvVthcbR7BeL7Em5",
  "key25": "4wc2KWVZyAH8rNUiBLcjNL1Zc4s8andQgapWb74ouTddBudxYNhJiqD42pohQwGCteseJtdNMeFuDv4i2ZQgsUcZ",
  "key26": "4WvgjTKddEdzY48sGHgDCKFkdq9f7pDEkckbPBS52xNF1AZif5rCpim4sPXxgEnu4PScngoRVYyeiX8PcKx5gqfW",
  "key27": "5SrvTbG1P2jXv3Diaa9mKaUwsutfJUg4VAhbtZ4kAspk3eeJZtFCEYCqWtqT8S7LNTBHxtoews3rZySDimyceh6s",
  "key28": "2DYPsZiuXzStJ2HigPJwApbek5NSR1h15DveyNuvXyzsFtixtu9yoJPytW7Xgu8Zgd35c4yvVqTsPEqWarHeR2oK",
  "key29": "4cGwZe95kg1KrJhVdSM62QPTcUCneBP45ctrcJiHYNZEXNTpDE49sVRmdU9NV9XBC6cy4YK3NNBe1VpcESbk6Fdc",
  "key30": "6367RLCsbeb4z3eMsLf3k5pNSJw56JUPtFz5vYoDS7c6opPawrELbzZtptYji7PScdJUzD9VedXmpMhc28LgcF63",
  "key31": "vqs7bRkTcihaXVgz5Gp6MrmNc152KmG75gSyK5cFJTmsyviukV1LZvzChUWJ7m16NHiod9QxyEEwakF5uo6BADz",
  "key32": "4rJTs62KoxF6gcgkPzByFfziBEB1oqbZ3n3ym8ERD1YeXBJfY7rDzyPg2tdd2sroMwQnzMmSoMyRZpb5QbwbYXzZ",
  "key33": "3qpD7DG1Rr3m5FNLuT6J5DznDja7PSX7j1LYMafqfC1rqweLnpi97avga13pq9Gew31Umg8ksa4GsQmX2A1dYUc9",
  "key34": "5xhee435EtohzXPqKn286fCGdRqEsBtiNcfu7d7AbCJFGmsNzoqh7pvSHHQqJxSmnNrGHah5knn9SCzDDnKAnq4V",
  "key35": "3ajUnebMSwxLCNLiYrG4m8LevxuvUsX5wngBsxehe3moZGmW6yacbP4s3osz6wkwxd4uRN48k4DrPpbHcqZ4GtrB",
  "key36": "498tqawkHZZGpHRYersuYM1tQsXDUrx2bJ1K8ojRaj5iEbLr916HYdMsEXkpF2f7kC3eiGTvDz8K3HkwtJ5uSkd6"
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
