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
    "3rt51VDggCcVeRm8z1sxKbD2raJ7DLjbBmkPv5ErAYcnS3ZstvTyexhg1mGfYC9atUZG2GjQ1x5yreHuLadBtvzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RrA5iKZUjdY8wQ7cVCTYzRhj4w1LwhBPo2DsRast9LoDH7HNcnMopgw4UoxwmnRCT6xmHQhk5pQhhmkXR79YMbk",
  "key1": "5N7zihFdxfQYEKompy7oBrG4i6koywSE8swbidGaoYeg3nxNATvJddEgXQEBbAnMDsSBcSf8vvB94PfH6WnuuW5V",
  "key2": "q45ed92SdQQ17UjRH9Q9WcEKyiy9po6wSKwukSqoSW4fBUhGrQNEQmFbKcE2EG8uE8kJjwy8y9wELd39KnezXLL",
  "key3": "nezky9TnmHW7ki3h1Lw16z8gXMdveBWqbrFm4pTnVEi7FzU5SMdmPZyZ3Aed6ZGFknCUHvXDMJkA2qVWozmXPqC",
  "key4": "4AbLG3Mu7EBeKWoRDoooDv15CRAd8oaNCifjaht1knAUqaYHBZ8ywDbBXrQxexGP8geo2iZ3T1j2vbHVnYek9xML",
  "key5": "4TnF3U9MbpedNLz44iCgL49Q7ZVqUVYpDPuroNrvvGMJ957gWjuM1X8YpCySNGsfAum8S1WSTBtTEo7PwJbo6nGC",
  "key6": "2WK8JoHUUG9vHNT1jdXJp8UYqSfWWqJiiWF3sLbXNxTZw9XcVgbcBdN5MEc4w5eX1UZcPT262bYkxaWEevDuWbPR",
  "key7": "4H3MgXDaVSGFqxSVZsHzz5591yNezBDeQUDc3jg2tasAWq5wEe6NVhapU2D4hGsiWKtjS4nRyBYWYpKjsrre7TbM",
  "key8": "LQrpNq2Kj5KM4tWz5PZw9Y3u9JaTBkA8ZcYtebVpfLLgN2VJxJzeAVuzrkxfkp7rG7VwfDH6qY1m2BCkXdgCfJ9",
  "key9": "4oZ6VDfLy2HisTsJ2Ag6R1JyL1BVV22C3Bk5arByZ5z5EVvW3Ns9nvUN6NqY2DKjcnzupgetxsVK9yGdJooiP1jc",
  "key10": "2wC9GCnwg6E9ST1b19gxEVyM6ZhCXtpVNDz7jVCqyzqCKX5uXr9zfZTAp575iDVyVUpUKCj4jwKF7FZcXCAgCmoV",
  "key11": "51WadSCasivsyZS9Ugt2DhZJenuAe749zFCVuvWEUExKFwVFsG7JuS4yKMDe4CRjiEo614s5HNAksgk78NHgRnu4",
  "key12": "rpXCmfUJgqyAG4gEGKRYxcYvCVjDocpJ53oQUAzD5gCfTt4BXKnbBA8dSFpyC8C85NtLC39w5FM2X9FijmdbS1r",
  "key13": "2pd5pum6e4YbyWs5bMBVAroFYshB1CcCLFCjYak29QgQUXjTsiF61fKM9VuZDKDCh6CvonKQByiiZYCRD79Ppf6a",
  "key14": "jFoswdgHR5grDcHML5aY4vJ4V36BjKiH4kbqPeUU7iqqaPy8uGWJ2toNGXR6FLtbWVExkG43Gv8WX4K3Y1y57EQ",
  "key15": "nWcUXFqyqH23mSi85giog3STAcGB6GqNah2GRfYcN5FV2GSycmCyKRiGG1GCKmGGBsZcfbRNTrpdffkqX428Bbk",
  "key16": "16tHvf8xPND454Yf8BNpMJ2dZBLNoKPBPti8TxRDjLBxdm9qzepjxycDWaNoQfq9D9H4CMiQSwJaiq9WcjxZjHy",
  "key17": "h1nBMJaeVraeFSz1EcY7govar5h6QKacjnJPLmXbWs83xhL9SgRL5NvnE3oRNZhXD4FhCDJMWzCAgkoxXqCHsEp",
  "key18": "3JtGwh9bMmJGzsxQQsjX2moQpBdFpEon2MxhHFs4R7vyG8SCGLGt8zefT4uWUR36psNe3eBAxXVeALnBYNnt9N68",
  "key19": "3wWmATK6o5KvKjCDUQoTSNc6z2ZHJ6r3T5CjVp5uqApmCBY6ErUm1p96ckMAmpUfjCpJaPqorSutACbFZyvc6zoA",
  "key20": "CpoppcZFQP3UQ4KiV4V9MVXK8DTCqtR8EkfgmAikSxeKfEUFQF9iEBnRtQRzvMnXapt1XB7wz5J2fi29bdZMMzJ",
  "key21": "2R65H5ewX4q8RqHtj4tmDDdu4qmPvqiph9YQo95K5gjQsEYixjPbEJTYeErJW1AHr8QFTrJdoeKZdd8TUoH4gC4J",
  "key22": "43LRoRCAm8Fz7q8WjeEJYyFTj4PkhdiVnLjdBGSswQckzhEmjRve4eWnDMkwzeET6fx5HjA1ryeWdxPjnkCsBGxj",
  "key23": "2Nhq5NJjXJfTHZz9CoC9bPpfFvMvjMex4zXPiGE5c53tGHgmJQuYRRZEiNSn9JGgabCWxbsC9uDXmqMSXSyHEtGJ",
  "key24": "QL6fZ3GxRRJEEC2JyfmqSuBJeyWMTnUY5iRy1EuXrkDRtKkbBcDGntoVH3hRB44kWVtAGaAosaQsmEczLpsuPcW",
  "key25": "pJAV1AQMBXNfKd1A1E7of7bck6LnY7B6c2au9zyChqP2ZKEu7oeRBvVH267ubBzGAy2zJDuvT6kPxYJCFdz2jty",
  "key26": "2bjaPaRU8ZV93oE44hfB1kbp1cyZ9BJVe32VdDwNTMJB5jFmd8DG9SHVcjMz9qwj1gXXNiMqSmPuTnfzHerHTBHY",
  "key27": "5nuNVdPDfBRKtgoM45Y6Yk61QwyZrNZn21S9yF5FC5MnAdT4o3nrx6HCoT1Kb51y2SgdFfeNmRqZtst64gCTDkq9",
  "key28": "61wTxeEqWD8mqpgZMCkZ5bTEZM79TJD1KxbcRn7ySC81zqkpYh7XCKacGvLCtP4JmVpZdrLxT83XVzS5SQvwQtmb",
  "key29": "5LFpzXCYErijWeh2XRKnhttnBixDSyXFQAG8pE4Ud6PmgikF1QYgeZZrUMmheMpyUhDBGJo149eTmPVyNiX7dzWm",
  "key30": "3Eh7cEaFoHbQ8eu73RAcAtYtvV6RzjajK3suUNrKYCQpoGCUSca21uAghEYF2n6jUfi4xwjM1WtFRQe8bvWbuBbY",
  "key31": "3HepJGYZKoBEhg9GYtUmmGRj9zsf5pM5N9W6bgyWxnSv5neVq6V84WqVgtaCutE8F4T49F5hnBjMfmdoRiYCNdNw",
  "key32": "4CWuNabWZJyTyaNRLQC4USCAHkCusbkZJipU1X9xoaupUhRaWFmZ9xoKa1sNsX7MsJ1ucKy2nH3kNj5FfWJ4ffdq",
  "key33": "47zQYVL3ecd3yi4XXjhZhe7suQsWwMUPsA5PFaptbv9f3egkD2dEuDnScpSXGAuhJXrSrogzLJGCg75usfopGaFt"
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
