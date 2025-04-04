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
    "4QRj3FV4wcasNcFzPirWoM8wWmspEcYH3RnkwR35JPpGho5q5qrjFstaFnAYjojWnowgoHYoQSz6YfKXJkxub53h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUQMkzUNRXHQF4hcnY2GQqQun3VBfNJ37xmc7n6PF9EPF6f8HemXGJvkgAztZAdWSwQM8aaLZhg5ZEpguHe9WaL",
  "key1": "57mcL8YtrZjuC2Xns4SVU7rzpS9epKheARUNmT41X5qkyvF5y7wmfN6mvuonuwy16iJ9ibjg5cwhTHiUfnVA2oCD",
  "key2": "5PxG2Mwnj2axfEqwcGs2CxiWPVkbZYvqyx2mRvSgXFoq11BDwHZfs9BwbP9cCFiWUqP6Q3GQivKjw24c3Wb2MfSQ",
  "key3": "4bcP9VMv9Jv2JWK7ddMUnm8R6B4UZFUiHiGLy5dd175cHFvZHJZyDw7KuvERdohz5oJv5H6NsF2mhVEpeu6yHjUp",
  "key4": "21nuabRSdQM78CLDq5Ahjm1oTapWTvAQ459D2bSmajsERnPcq3H9SQLkjqeZ3dePJzuy9RDDjbko9nwkvfasTN7C",
  "key5": "493dRhuA1qNReftcz8C5ZefCoCLYLP3frwxbfYnzcrog1Ro4KHxSWUmjk3fvX6Vd1446qdFgtSvKjrZYgHWoxEKF",
  "key6": "3m1pbGBQCDqwpGkxoqWUUTHTwTRzZjkYVNYcaMU58oz7HfLv7419GFDAkaxmpSDncuHshvK3Ga3bwmLNCinqk4Kt",
  "key7": "3CSpLS9h9eA6sz7oHF6yabZwohTfPaZL4uU7WRBxGEPEBwYqZBV5ioCGhuSPeKHbh5PGWDvDXy8o4yhQV6mDyf1h",
  "key8": "5Hmy5SGFoLKWeUUViJAKq3q1q4wjqeLkxYNLJmDHushKWFqe1dyTriu5N5qsv6GTTeirZfPUysyZUT8G8x4SKxea",
  "key9": "39gxGYegtynQ6oy5Huhtz84uEbGyfTPiT7hpa7gKid2G83yc5tTiGWbcr64ZUoWs5St1wEjpwPJ274GhriEmtzu3",
  "key10": "3GDydsXNDwuYd8jSJr7ejxRgRfn3PVN1CDWwQonYn77csHBKR6Div2CWGESZ3yXEBpwfnCWywRQG14PgKh8eCESH",
  "key11": "5H26VxdRXK4y829pDLgBLsQ9ctHUKX5FaqszL4YGZXFcXEFqyDVx5kFu3AeovUBNotqfFthGtNQwxLau9iLsoBVj",
  "key12": "5WZuGqv8QUhAkgzrZrxKro9DwToWrvKHJHVdkYxRt2nRH2oL3AUjhSBfdddMFbaVkxRkBkgLDgGenMo344t2t2Z2",
  "key13": "5TnbTYYs9KtoSTXVQEDQsqqVSxyM9ivdFJDxDeNu6irX9cRFSg7S7aghkykvs24CSgpiUyTwJgubSTyCxHyHFZku",
  "key14": "3jhX2TaDH1zEuwhTC4m1ZK2ENNHUpXyoe44nAB1f1v8jfRiQ6zZMAvpCPEtWeSWcBfZocJawchXkYhDgFx3Py35o",
  "key15": "5umsdfNZbcmA7LdR8F84frCEve87WfLfa2M6A6L69wajUuRyWmRtvprnL5AQS39Htr2ofpPMShWf8Ftei74eZBoK",
  "key16": "eBcpfnx2z5KAQQsKWCkcQF2pzdRRRsGg4WhHwrg2puX5VwVbMtT7qG7WL4oGjCCLaxCzGc3uG8yYzKqttnCeqLY",
  "key17": "395JvHyPKD3MnY5WmHEgCUPxaXaTmtbr3Ai2PMvjGvqnyMiaMaXKP6SX933kJJvrzswag6ADBmWb7TFXvjrZJXZG",
  "key18": "aWm2GsVx5SJpmyUHfKkjV93SoNi5LW9aMXcVF9GKvF1Jn4GLBrN4HafrCUQ7E1PvcUwB27pNsnKPEp9Zj1hbBaa",
  "key19": "3oBfbgdk2BfmhdYVbYMRBcSpZbhgGQaDbiffQJ1usPxv3UydHUStMPFD8Yd4Dcr2i9F8bwLJGg1ttiapxzrrKK2s",
  "key20": "SWpE6FznCtfVTmmys4AcrYXzYc5RBwK5We6JaJZmFUhFoRKvwdKrbMRseTxcae3ZrKmoS91B5TbEgscbbF2qJDm",
  "key21": "54PkgYwhdweo1nHCHxZEtrJCSJfypWsDozXGtard9ZSypn7Gvf7q2twR3LNuktrkYviGGSTcivgvCeVoMJMbvZ3",
  "key22": "AUukJ3kKKLkSmKCjgWaz8EzbJN5YdowgeW6L6dYZ2m3iXKoc8zCGnaWLNNnRAafPxqwzre4iCeofRgR4wKRRTsM",
  "key23": "2s1rPtAmJn64x9UNgxUgFiJ9JV7h4cgjaxWZkZrkmNcpuJR834LFQQZnRNe1P5dAgrSu7QVBsE8RLgzFugaL8F99",
  "key24": "3cCAhFby8ULNpeL6rZTKhUXjzEepR6vj4nvTN6wePZWbgR8jwkNFq1HPauegjZLSMBBGP55Hb7St58EdNnaPPhA3",
  "key25": "3TvZ7rY5NX5di8ZvrrRjfd9sgBbZMdHGVmQnLVMFbT9thrDhjPT6ei9CwXMRRqPXAsgidVcjWJdExsJSGttQoCiU",
  "key26": "4kEs2MCHrytpHHtQMJDtyW8vZkULZCCv1aiVaKQtmSYMT1Lsv11LJJnMMeq52kDra6fu3F1Z4GcBUgProZafzYVD",
  "key27": "4jstz3H37C27PAC5wkGQHDkTezatyXYBsS3pXhPrtom6UFGt6LmwuQWKhUgBckFS3Ybk3tD6UXxF3uSVVzwNDRwg",
  "key28": "3pPwBGQsKAe6soX1p87TQgZa5aUeYWb3cWmVxzazXrPMRVbJQmgPKhmQvadTz6xHgne3VbtzwSjZw46FLKHhV8J4",
  "key29": "5M9Br3ud21Pf4brryQzCYVWs2sjJEn1uTByBQe8Q8yV6q9vsjGtKgxqsBBmi8LQUsTG9s3PzDy5g2gpsgoNJ5F7L",
  "key30": "25Zja3mRtKVy8DJgD2YBQBj1iBFiAbL2XwVGFMY5j9HrAsDHzzFwac7tEvQJVwWDpfoPtaHxz3zreDPxtYGDHMid",
  "key31": "MeeAB9ULYXFaLy8DkJDWi4zdZ2MiwXiSy4Fr354xkj4MTPwXHNJoeXvszku9v19Pvm1xGUDkgo8BMzKXyjPaA1B",
  "key32": "4xEruzuqX7hy8nNU3Hyc47H9Q53nnNf5AhmXNu6FeZzjhLoPvCZXnB7QgkEcdFag6CowknPLUDCk662oKKD5Curd",
  "key33": "fSRtZ9mNeXvgDPpKDHfJcbNsrs4JRubiQdTSXosbsxfetN61wrRBMBi9YUYz1t9L7KhrJpTzsNkDzm7BzDhfMmD",
  "key34": "2NtuMNWRxkvzUu9aBZZfq2zpJACsb1SuBJqXjinqdf3G6G5a4iiDio9dSrcvBSWi9hZ3dJ72ZYLzRMhfSgD3sCPJ"
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
