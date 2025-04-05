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
    "4Dj3hvNdfJ47HwM2a4MLNL9VHWQpdd1H7iWj4mVWL3DNMiekXuKcA1YDrtXHofhw1S6xbXNDQKmd64tkKaj964FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2HtDhAWW1SfC5L58ygbzsxVPG26MpxLpYdinpZ1jShNDWywyuEeuuHSccD9bQBBGizgy7Yq4if7gBpwoTfkeYS",
  "key1": "5Cf3xEiBkUnKitLaseWzuFVXtQGwXiHdLqQmRCvbRpYBQxtiAMcL5M9Su56rjjDrZXtaemKZK3PMyTfn1nLUUV89",
  "key2": "3UkA8WkVNpZdu6hnPdfTSwD4KMYQ1XLaWRY7JCyEAaoLMV6x4jccY5C3CVEaFE22xwTGWLmjFH1kJfZTJWTvjUch",
  "key3": "5wRcJbDtjX27KqLyqgumdrwbJNJQyEdHcJaHiKXMvFnZoMPXmoUxJrkcb5nSYrNQwTN7JiwaZGdHvLJ8cW1jUt6Y",
  "key4": "27cGb8mCi37wzxxM4vkfarN2Zsj57vNRkjPCKGGCdN6k4qAJuixBxyih5xXXwR3jE5J5VvDpGDzsax9V9qkvvGP4",
  "key5": "2uzNTEtmn34awPJxZ7RGjKDJ45isDZF8usDm7VaLUKPFy18ycVBpBMsasTh8G4geFQpaBRBmjfQ167Ajiejv5DQa",
  "key6": "5KXGTr5n2oJUU6HZDhxVu2YyHNPNgfnhif6Mft9iRFUocnge7EQ7eGNH2JXwEjKTJbuNLyubhmbARFvRwZHjh3uD",
  "key7": "4eDRo7tWaZt5Feundi5hncav8EoRfQYPxH8BQVEcFJr5qPzA3SmWp8D97VdgFJ1ifNk47U9necNnXCF1UviBDvEV",
  "key8": "3KZFfV3E7GwxdX9Y4JFkVTczqfnJpjqDNzzKbd2ZwSZ6LjsMEMXDHmFbPTsHXRVeA9pLENsMccXDQKSHA1f7zwvG",
  "key9": "3fFWGGnzr8VLJhFpHgYzCizfgo2XqNPtMpuCQ5AMUCTkutFy77TJiCWxARajNLsuspJPbnXJxnG5mWqW8f8vbGaC",
  "key10": "5Uwa8eVkgZQ1CCxNQcw3YzKMMH51xGbwdodH6L134YCtw9AMuHYv46DwX7qgVr7YvLEpKefCCNx4Zf48jo7nd9YL",
  "key11": "3D7QLSSw7ao4VG7iZJLkPSMB6ZuqqNKgnA8eZu7q7z5Rpm1coxDMLHmnLnHevfaYJCsn7ghQZbpk2Rw814zYgeNN",
  "key12": "4NECExEtNscGzf4gSj2SNjWRV9BWhxt5tuZSvZnFHp4XoN6eLeiayfKeeiDXmSnDYKeo22ZjyFxVphuh4fcgxG11",
  "key13": "JrELH5gYogKksDbUd8FyjpGKdJ3mnoXyRYKFLc6UW9nmSof5acsCaMZ9Py5WR2qFSmKHi8VqrchYufpNuTgVscg",
  "key14": "2dZ6GhviyvEhNadcf5oNDH6hFbYfQ7fkyQt6uefpBXBDy4hGTHzuTkwmzJ27ddiA2ZHJsoQ8TrEhrQftKi7Z6QDN",
  "key15": "wJVWjsrTs5fiZoRmuSZw6jM8CoRnH2ZFCroGmXVkP77Q5n8Fppj1CeDKwURNhJ1P7EMWsUW6TKj9bUcRufgN1bv",
  "key16": "mbHg817tm2u5hkqPY3rByQ6FUU6dY2yFjaAKxC1o9ZwpEUnEr17mzNTFgerBu6PqPcqZGK3xaFdJ1VPqhcoYpbo",
  "key17": "46Y4fHLtBjAoBqA5LfHtwbE7r117M3iwbLhJdmWU6t7NK5DXXEqSjRMUVXr7H7RpDXuPShWeaBXxYtsDrDLU14W8",
  "key18": "5fbhuH3FpPyd8Tcjzb9wupP9wvwoj666Bod9mWW7we4eBzYapgC5sZ15brPP79wrQPWkLoySUHi7KNA4F1DmkdxH",
  "key19": "3EPTK9MwtoNQLZaxpbMZKFcvBUCv5eMQevr4gGjEx8GgDbJEM8D4CbCXuMcUe2STwhMGiUsesetkeMsfDgzF4MHH",
  "key20": "4X2yvDQDjb4KoHDkjhX6ocUcuSQtDZ1XjPeLPBtvZ4oupVzom2ci5m5r8V9BwezqovWaWCuWRpHaQ9DGB2ocikaA",
  "key21": "3PMkgrVjE3WSmxYcTv77MM4p267t2fXCrnYyf43iNPvo15fSwEXn86Z2GhgwNSRgGJzRqQQZ55dnXNaiJxnedoWD",
  "key22": "3K5hddghWesL4YSvcYTQhWCQkJtwy9GpSYgsMEneLmAABkkudYwDC7R1F5KvBh2WAZ4MnSuM7JmcbBTgTU1xgezz",
  "key23": "57QkhDZEiRGAPFR9JK4UyfkdtqFqZ4UhkTPQMoNLNKNwDKex1B7uucNKXF9b4f1ANXfCXZ61xDZbWjQM6t6WKiTt",
  "key24": "3PkSEG4KX8sKieaQ3JMZowfJiaamAsBvKjpz8mFAnsVZJRNqj1JuE7FsG2faV9eg95zykE8yykcoYeZ9ZAwtMXi5",
  "key25": "61vL3y6Ggy3GdsjVmceAVJsE7PxrcT2CnHoimAroEY839SRHH21Zy19YGBKcQhnUZpY19Sy6iNGcmhjqwKA6WcdJ",
  "key26": "4Xo3ykEcW9dqWmYkUPgRMx7QWXHFh7jHpDvg1miRHF1c63jcxXJuPsZxrR1CtCk5KrJYpoPdNvM6H5sWZZVYMGJM",
  "key27": "jCtLi7HkDMniGZqdNeLQ4aPfQa1xAHrdBW7AdDsxP81KTL6bD42GiEe3kpez4RTggkYUi4o65BvctSXWWYMoRj4",
  "key28": "22BEiuXJmSFUTcbyTJW9D4KrkTpBM6btDCn1s9gwKriJJRM2pjqs2Y6skVpbhJguF5Ccg7t94SfkVHte61FkEciE",
  "key29": "aZVCoMfmKSX1kVN3qdsNxV76NZF11auNcuvR5xXfxVRa2cgAmDAMfCpDKMTaivxtkn2bgQ6cUD3KjTaqmUqBTKM",
  "key30": "4Uwd6varazAovjiEADDKTKNuW7HUQU9tsFucnAkQSM2QWGpNPXyHRbSomQVZwi14PiGFtbQQRQrqHGjvBgc5Z2xJ",
  "key31": "5GJYfawUmwD22UxEWbWwJAw15GdpSzwRaqP4KshQ3jJFjqQk1C4LQUUhSsALXkpb7ZxnT6Pp7gNKy7DgsjNukGd5",
  "key32": "5uQUmTXbM9hpCa5h63RzwduSXiKYS1E7doYunH3QsHuJaL11dkUsRpixBPDAgFmH4SramYNuCNJaodREeQ89jgYf",
  "key33": "2bv61ix6K19Jh1tPQdx1yJGqipPBy8NMpoxGcXySnDK1YnHszT38yuK53R3wwxZHighCroLxDpfkEPs8ayw5hPU9",
  "key34": "4swZ3XByZChvb87zv4bU1QrGC74Br7tST9RDgYHLcgYSHuJcRC1UCivSBxF7ecZrYPQR5b8cha6ZGqxVfGD1DRJj",
  "key35": "3g6KqFu7yTXG4mH7zvyYHyLaTJqQQQF4uwNDvg9ejxwCzfgm3XMb6mi16HouMfRKUfLbkZXyUyqxgysptBBb2bgT",
  "key36": "3tqAuArtMHKYw53K8ifYoB7oQPo2BViDxh3A3aHsNiLdPvo8vachF1GLBeUq216c7ePEYPRMm9YUwMoiTxuDxTnc",
  "key37": "4msEnKUgBUKW4cLZSo146Aca9g7h7ensGxGa8UsRibZLzHg6kDYWUBFU6gdp5FVCCCizREsUsZmWa8kWRpjqUpgh",
  "key38": "2hrsUXhweUqUjBcYnY6Rmjk2nPeqzH1rQn6suYNryzYysiV4p7XtFUwuuaQsMnzzaNmMmjnAv8ijTyKcS5nPnQ9Y",
  "key39": "2vivS3ieEMMyf9eDPjAEbqhrZPASJw7RNdRwZ2S2XqMhnEDxHZjdcLCHq5Aip87BM2rVbWncgT2b1gqQy6M2bjt",
  "key40": "5yNVMyuYeUpbxZiK3FW6wwNHUPVPZAwneKzsL4Skuq3S8rZoiw9Y8KnYySJj2wuLFqcfQXRZkUpzspmvH7DkoC5h",
  "key41": "3iRMCwG2GWzYVsAXN4fRoLBdgMW624mFE9WUmLbYSpkRpvSU25GBRaBmeCwcDMchad7dsCik8HnrR42C7nvyiQ7v",
  "key42": "fuCJKEN6yFXumFhGWWXqdcif55DxdmdUzVEqD2iUnDXog2VRkzNbhD3oJCYWX5BHZ1E1gYbNfERZZdPV5CxUCQu"
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
