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
    "3gUejKUBBRwEaLkmSrYCWxgVvf6rzVSGVQFofHF91qif72f51AnoUZLHN29Z8NffR7fUv9oFh6vfSRUz9B8T8FWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKCHF8AhHyqfYr51VkZwLrGMGWS1nFAPS6T6wLF9K11476PXgtnnpYAaJ982BMvrfPcvqUX4EfPYx7CKCEMRErM",
  "key1": "3BmYDsygxiJGtJzDnkXbazdiVJiCbx6d9xUCdm5mphK5GhYADqgYpPm44neBm7WsDVXbjtybvM7r8FyAQ8UHyh9Y",
  "key2": "5QnHUVmBX1kpX98Qwnbe4bMH1Wq4z8Xy8QgXm3Ko2rWohcWvMUGVakbTiNWGHf562LP6tCZfdV8mK7wZA447wMuG",
  "key3": "2s7nEv338ZhMGDy4oxzH2PEeAVZXyY4hwDaoACsbWaUk83siKp9Zawc52iPofab5qjqQvHsDQX7hj7wqp2KUyF46",
  "key4": "243mcwyFr7o1v8kArvcRfG9cuzoxEvSRHaBHFRBKTg47JzRXx4SQ87AqRPXPCqSxRdkRSnKuEJtF2HRK9SnQy4Cv",
  "key5": "2EcZy6SSFoxHYYfXhGXuRd4r5H7jZgjnUqBEA9TJUtpujL1g2Mh8mFFqC2xKkcQhJDyZMY7ToZnVwkjzfngJxQr8",
  "key6": "3UMuHZVe26AqTEXThBi4rA1J3FFPRJSca5peC9J73nyswajrHx7wdJ6ZTBzYtiAsz43Jqs34PwQEMtuKaZYA6FP7",
  "key7": "4jdrYTXzmQBhr7VGxwVtkqhfNC5M2RWsFuYbDxxwYWwWif4rkKonyHhEVp6Xy6f1tf33pHSgUFNU2RxhibVVyvKA",
  "key8": "51oDgpWAGbXotMwe33UMLc8EAKw4QHom1KXt3sk8NdRY3gYVPfV4CkMQ9sE9XfvBqjPWraoXW89u2AtLPAFyHFL9",
  "key9": "3TqqftLrLqPh6HZcGou5Hx8RdLPqVC1cV2zNM7VL8S6BA5kcuTdyT8DFHtuWGGZBKoKxNb1kRfKbNzor4isS9UQh",
  "key10": "2fEokdog5LCziqAGdW539mGWtG7myrULmMHU4o4w6FwzNJ7QVTEmg7bcjzrXFPiVWcZ3a3YgpgdLGfh5NANTy9i5",
  "key11": "5N8Mo54rYkLMLeQ5cJJfCNkQTfczGDhfSv6ziLue5X23pBfoaW1CpNZfuw1ZZoDsHB8C4LXPdCSNfLmCTbNSdNpM",
  "key12": "3hVjKWw7hGtYkJtEs1d1qyUL77ytAnZdYzZTWTTMUY6tjL45ig63iX71S7Wgtj1M51XTbJeWTxFKqNcoA33bq3Gg",
  "key13": "2pebstGcvSukbMCBcRTyuLUxiEXAj5oibMLi46eTMNnaP1FjHNeCTUQqgkwHpWDC89kg5LtdznLUc8eEViaecML5",
  "key14": "W9sbT1jZy3YNQb5gg4t3BGb3Wy2uu8qmZcBRnMuSHq3B3z3ATQaNfnseXE6emSeM3R6nt5gWoRMLvmUtHz4kkXr",
  "key15": "47uC4v6BsrthejDmn1CuD4eE2sASeQERTTBTh5ptygb4SFhGF1Vxat567ABr7pEezQ3zFViurqqUs1aY98XMR3TG",
  "key16": "gyPuvZbtUwxEgPvPsfoAKL6z5A4QK8MgkdxXuxviTaC2mpDMYAuu6t3Jg4Xj1SBrme7Q6RDk4mSMKUcyMCGqcR7",
  "key17": "2HMhrPfKtyLYoNTRqXaG4ZR4Q9LWhFfNSp19MF1hE13k9CWkKxCFZXM563FdRbrHrwfUQpwsgtVpVd4R5touKTXu",
  "key18": "2RvMqcZF2SLyfa6gxJa25naQNg6xFBSvRZABeKk5BhEvLiJpjTbJ6aK1mj4HKu4qFjdUHtKSm2nRRTmNbuEQZFMt",
  "key19": "njeHMf9N5kxqky9a7zwdviYq7bhmiAK9BeLVtTua3YgtyWVXv14LGQiXMBYFkL4a7BmUpSqA8aRCWQAkg9hbAhZ",
  "key20": "31Dy3hUBPZiYTZ9tWzqqFG3pY8RbAkMqEaKAd3FyNhie8ZpDXNtksVWev7SXHox4s1YUE9u2Z8BLXxCpHM9kP14d",
  "key21": "3FApjd6gcuc3RevdXbAdMbSkcCWiQ11DcUz9WSWLFKAp6RaURomauQCtftkCSYTnV1JeTSctVBmgSwPdUw2Wh3np",
  "key22": "3sYqRZnhEwPyFxfDZjB8iSVnzV4rEAnwbxPqbsU6Ew5zLNLMAe1Gx1zUVQQpGKtoziV72uDCPkFkv12uvyaCJujj",
  "key23": "63KtEMSe61Vr9v9WBa2DgAuiQoVafp5QJHYgybyUafNRjxVpZQmrUqdnnR6K3ULSnzV4F4KA7rH48mLHqubLe2CP",
  "key24": "4ZsZFwjpzLS52BGMHh5aA6dn98PbAQ7KyDTUT7a68SkhGd352DWb4V3snQEFnrw6gRTsPgx5f3UhVVs8hucuooMZ",
  "key25": "2jEKmMea4c3A1xjqknUrhxUaQWUJK6XwiQKkp9L7XJYVSceCJW4pRqLrGLATgdAYX36tBzi8PpQWyY5okN92kAfL",
  "key26": "RRvQZqG6iuAdH71fevsjDH3wWi5xdTAEY91sHgxBap3Rr4Z58HDu3BC4x3x8R24FsoJMqyrtBkvF3xCcDRecheo",
  "key27": "32VrvqL3pY5c7J7AuFxkYYcdJH32xcUq9KCdW2JNhtPykDS2FP5MqpgC1imH5r1M8BcZodFgCz5ZgPjX7pwpX8F9",
  "key28": "2QzBDDboJxnFS8HZfNYfzdTEJtTaQWJAENrbSFYtsmfmAdtEiiTGZ7r2QyrYkURK5mpeRq1rGLZvjtfFTbL8CRTP",
  "key29": "4aJK77jzTFKb3aLV1DKA3Jv2u4QqEqqQ9L61AXqR6KMJLvCpoZKoeASTqDf3nPPNdZ3Y52792NAzpiRuS2KKDmTM",
  "key30": "4UvVGzJv2Ay7WJgrfGGShPpQjJVxC7iruAvPpJX4ozqh8pvtS3zXoQjMy4Lj7G3FZCAdwMRgKTCmBRbQE2ZKBdEJ",
  "key31": "34pUASBMSzbMPvvgsbu2BJWfBcN9D4CPFfgkjy6Jpzg2VyH9US77SNChx2pm6CpFGi9V2WcsbUx26Bj1wtNXTgs",
  "key32": "ar1HTzD5mT3iq8TFMxFHTkkZQSzDTYTmbPLGCn8YRgoXqTjpRmsCjQEuueetttSUzSdpnE6Fscap3MCXBE4rLLx",
  "key33": "t3n5rbdd5ZqnMcoYU7ga4LVemjAiFNm5cgk5fJ3Cd2xHVnYDqH3sbhsQZeL1XWncUCVdP5rghB5mWxhCghhMAet",
  "key34": "5pk78XMpPuGsNfiA9LrjPM8cSTozodYbTkaxfDQZPBipyoNHijGRywJpzhcxGitw9AWEMnYEHXVAL9GPyyyycVpW",
  "key35": "2ggHQdcaijWtfeSsPUjUyjqBy96AqiDL31revyvSM4hV3hMKAUcSC9SXf58pjHvYAkcZZKL1dEzmuhHUqSFdPcK2",
  "key36": "3aEXNhpXNmEZrPH8iJ7GGSEAvXN85x2GbtA6pWRGfbdXqves9NcRYVn6TuJBvM3k77KjPooqhrfFiG94hQMuj3qt",
  "key37": "x8aCdturCZjZy7kVVdugeH5ikwx3GcnSFHZcC1ocXTzeQBYaB9sCnhowktSjLepHaVZASsmk7nV2UckFh1mkppy",
  "key38": "TU3bp9dScmuJfqX3wp8eFkHbc8CxFtrzWNzG6MT9GwRJmwjug6jwqbSch8D4YLmFWRsaZGWFSsnNeBb3EV3RDYP",
  "key39": "5JbF2C8R9MXV9Aakmy1AnfbtjChuEGbsjorFdomtydHNbw9mYw5igbRgBeKV7gCV2efAUTqeRLKZqu1gp3mLReAL",
  "key40": "CSSMb4Q5y8CeB8Em76dViLm16HtKvM77YtgxzZmmTiVARsndKsvPzWVzVfM9k61G5cqst34ghM1rUhQx3pijTBL",
  "key41": "48WAJavkSBKaPJn66roySjVnnamyGY1JcmieHf9mz5xzWna15N3QfktYVSdGs8xud9Rw4iaCCmAE5gRpyTpRBqMk"
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
