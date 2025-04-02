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
    "3MUv3peioRT7rX8TVGkPb86Tyt6fXf8rhhUoJaAZ7fYsXczmpv1xWZEri2mPjrQBhxbPrx6Y5VgDo8K61Rw1k7iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyqZSWNwJ7Fh97ZnE8v9WwLCCvf9mX7XwbprpHbzF1NP4mhmQ1mWdnrYifSUnKEYxCVA8pCrdwDfHQq4dpmtyXr",
  "key1": "2GbQKkYPFzu62tFeWsrKG4DPA6znEdf99dzN2KuqfQ2ptUj3r3LjFwe4WbHZKN51ekxUCHB5w5SLizkiUHU2ehso",
  "key2": "3Hv3MW3f3qdxGbxUzhb7Pk1hJKCxYAVpSzsaXmhxC7znMrzepHNVuFN9GA7zFHJbYVy8aq4Ekiq99hYs1iJx8HPt",
  "key3": "YAzZgxzhS796u1LEQP7vxetJhkVyukairhQmPSnkUrz1cxrFSaWaWXfQkcHK8W7eSUzhzYLKRhggtV3d7jSRVxt",
  "key4": "3UJqrPqhieSwJQu1mDHo2eNEYMZvzV7RE7S7hdj3GW5JLFMxnjFJ2Q5PCoL9xCdYBnVfWfKaV99oKBN9MdYkzPjM",
  "key5": "2oPFQemzd2ZbactidncMrcroLyaiBve6SJV3dwSJKG6oDXrKrvt29zJSyvemaM4jZG2Dbw2LtGKokbp4BupTjZBB",
  "key6": "5ZkF64gpK5oYZDCUUvEA1LtMK8JZJqtFiRxb4KGcaHyyTr6xnzHu1VTHG1gXh8LUdZcSvjjvTBMd2hAGS7Bce5kv",
  "key7": "33XFNV2AC2vVDZyBpq5n7xQ4wnF5PjAivfypSjBtJvpr2qYappCnJefjMwBnCdHFDpQK9H72J1wG9nRY5QcpDG6k",
  "key8": "2UAR6qTEMUQm6xjqm4PfbWH1CPKvXjXCovsQbn8SZYgiJufUHGuSewH2VMcYKFXnZiTwuUXZgzVFY6tPBVuxHStP",
  "key9": "2NnKpBsZoaXEt8RuxjEgakmExnU4H6ZQykMJYfX4g14b4jHEMs8psVFAoSMFaLkYq4jyKQ9MZX4m9nLT3PUwYR1K",
  "key10": "4FoAtRXTSypVDfDMWzpaTnmBsXMyJQPvnsbVtbDj85auNhdJJZic2WnRCTd3MYQ91NVk1Yoofbqu3CVVPsCrVh9A",
  "key11": "rSBReskMhV4wDTsUvqNKLSwnMDdCPcTbvMs95WbUCEmmxnBHheAx6choioZy7duSmQHvfwoA1BMGNBm318Ht5we",
  "key12": "SFjLTo7qgoM3jXg5zMi5xgSaM9gUpGbY9PahQFwyPcvMTiAbgDihDu9VwMrmSDtDs73jXpMtNFHVRDhsHMBCCax",
  "key13": "3bqDeCYNKXbSktmYYV55YjgryRzqGTudmn1qcT8Z2q6MKmbxcpY7F5nwCFdkpqNfU637bCoCwFBxkLssAqrLvAub",
  "key14": "4qcZkLfXHXvnUNH7wZzhdk1viZ6ZwTscriYgeNJQ7VZ72pNqWWu8FrU43Y7sGwcmMVoLs17fPssxBTMpXpCNNYg6",
  "key15": "4KJvU3Mo48hH5p5sidT9JJSpe89JiX9rKfGs4zgwopR5f7a7NHTZvUvCsPrmGa8NXhxiFskRr6r7UQQ8CGSnDUKt",
  "key16": "5MiJ2Dc4mjB7fQ63JZYMEVj1aQ4f3EbPEHq7Mfg33biMyT1wuTk7Yw37LRs5shNCmT3Yse9mo8MX23e4VMoCwNBM",
  "key17": "Abx25HFWqrWa6pWzJ3wV8bS2c1Tc5jekjNrq1aWpk1iCnJxEssQEn7Vh9MmLCkWPptQsqGaEfauhRxuBGgxsyxE",
  "key18": "3rzzpjSm3E2H8LQvsyHsVzmKxvxztwzvRmsEcBkstXLaBT6Lk3hkNqMexB6JjFJ8DPUXHcvSt7Ry8Cs4D3WALiWj",
  "key19": "3jDEAHWW49DDkFdoM3AjfAdXjs2TesebbAZi7qTCvYmqXUjThP9JWgZQA8ArG44RZ85Pf1PYN3d8ZJKbEVsUpARc",
  "key20": "51TYFeFS8FBUrkKSECUQ66akivr6JdXsLsLJuMYpjMzawCsXPVxDhJmSdfaGskF1ZVqZgpW2fcbeXjpxmsGuqa13",
  "key21": "BJpUvYMyLgEqHg3HHnTrLcAEqivG9D2hVA5jWtQwaLT5gjnWW4BA18XhMGhU3JivBuT5P26hjXmJgFctgbgKtxD",
  "key22": "2NoRECobAnJ9LqLVuYq7sn717zrRrPoyUBac4M3L8eGBVkU6JcoGf9Wb6yr71sNZjMGQfCF5ej9GkqW5zVxK2WQW",
  "key23": "4fZiPxZs3bYHdsdckipCUZSqWJRhrZLKB7CTYYi7XXY8coDTF3g73XCUiqxw6cEWZNJsnRmKc9NJfpZRrPpdgR4H",
  "key24": "1E4isBaFaq8UWu84b2TQQphAHvXAFA4MZS97UAnt9shprNCEu6rHWbUTr3K648Qc6ZVeVrtom83BY7fFpDc2VTX",
  "key25": "vBN3djMsqDHEnv1jn945eM2bQHLZ82DAo6Xvy2V6E63RDAThWRDVtUSq3B4Pi1JfDfBEPDCWVrsX5uHoyTJg8EZ",
  "key26": "5Ky2wXVm32wd9R1DrRrY32Hb6FQVFdSiTXz32Xkze4skenFSKxh9B3fEncB48naFupT7f71upDzB44RNhTTEyMWa",
  "key27": "3Y2xnRDpB6cuLQkmTuKNkU5vnUC44hcn86DYfPt8Z6Xro3FNgJcDsCyyes3JzCsPC3oHGydh42JkTtop5u6X2g4J",
  "key28": "hSsySWxcS6fgnG6HmqX74fLJNxaX3wxF5qC7R6pxvL7ayHeBeWmWBwTx8zKBXzmvgSWZ96M6DQh6zQTRUzb6i1q",
  "key29": "2nSTvBE8bghaSVeGjMeUAQ3g3HVenfRgACEQV1gEruku9MA55uq8EgU99yUSBefJck4f8wcEztEvR84NyLCemMVj",
  "key30": "4XPnzzViwoKrwKeWLPifw98qVhi8qa7vXAmhxbwxCFh4g2nCBFDzEzQ2nVpg6uR9GPgUhGrwXc8D8E74mnQRjj2b",
  "key31": "67SgLGbRRnwis5uG3Bb3wb4nhqsAQp7rzBfWdqdeQ73sQqF2G1NxFn16dd9hMVPfmttr1WvTcANhDLCSEdtPU2Ea",
  "key32": "3u3h9uF6Qck4CM5ed6PJr8jCWs4iUwNhih8a9mYtXpMAQrohvV3Jx1hEpWS6CjTZDoZw1sfGAjDPXg9ZPWEjUaRu",
  "key33": "357abnddqGStN2Sp6ES3n6qPTjarMNLukFmUE3G3zEuMXC5UDaQrfnicvxRg1H7tFYEn8HFxtRkuHTzAkLNW3883",
  "key34": "VmVqsr4W1K69tWAbVLY27C72Dkxdx9gxtG6yHwYkfsNZXHkLezN19gscb9VjsTkDE37DAu8PFqzs2gTiFb2Gieu",
  "key35": "3vppHKuUdkUQ4m1w4mYfCfJTPz7G7nstQuswei9nQrzanHawc4wM3JAtCq3wNNExyw85XrfKaQdxsd6wBVxjP7RC",
  "key36": "4xfUanbdxsGAFDqkjtor6HNh9tdswUc7sMfTiayQSwJZ7BN3mY5sEmnY83rhGpw65EiEJRzpWvtmW7FKRioYscUF",
  "key37": "22o51gg7kysbwLBWoAvhZW7y9PirfbYDo4KmGCkVMhNHWrfKVZCRYsonzpjDDgCULfj1AKx4kQ2fZQMEiLayYkrc",
  "key38": "5ewodkUM9jsnyRgazvm29QH42foHqmQmodY7pvr6AKrBkePWCo7Ed6a2tGUjdr72z4TTZPr27QaT3jsbL2EoViDo",
  "key39": "4NSThpMmrPAkNcBJKoGNoG6dqtNxuoqXzEqd6RKkCVMfHfYcDPjehuH2rDbFkwgjwPvNRfBDUhr8kVzh49T72Doe",
  "key40": "3YB1qom1FBhYb6JZt4jrXmFRYpDoaRfmF1W4vQhZYQqxuzVoyjsAL3vovxegYQ3qSNortqsmmHi8dth7pmJs8fzN",
  "key41": "4CSkVc9yTFSgwGbhsJTgyQbok6PRvXibWv4tAJ83fq9qqwb8P9SP6RSKaVFTDvbeYr6WTFTCWrubx2c4AEwg843c",
  "key42": "4e3p8CjrpyZWhfcnSCYBBTSF7QmyVWTQAFiRavLdfrjvMbrbreHjHtZAMYXxe2yMf6ye53psPKeNXU3pQLJ2H2mn",
  "key43": "3wiq6J4CWytx9bTQX6sE6PAmRpS9JKtZLhAoWug2XUfDbrhEWM2bDZy87y32DwM7upaGRSPvBSQBoeLvu25wf1yE",
  "key44": "W6oS32jR4SAUS6bumy9nd8ERAXEdsATpG8oGWiM9nTShm9ebomBKD2ZoLAZcFYNBfn9b5wB7ggsV6BRjGXvDAKY",
  "key45": "UQwyHoMgwC3mjTd5dvFCWAtgA6GWE7vYnzyavkXbGvuMf8oFx2d8kiPMNPLgPMzuxfKdEHZRZ4M7AL6L5x2tsze"
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
