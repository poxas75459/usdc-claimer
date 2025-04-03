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
    "4ULmdo5U2o196jzYFnD4PG6oBe225VTY384u79KnMgrTrta3VoC4Mv8cGqXDqcY3S1Py5QCNfBSDTJEwhnAP4Qku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2D8r5KkCNoBhXa83QUVyRvnjPHAk6geaoyedrd2LVtYjyp3BgP9eCqRyL3cvWyy3ZbrvsBx9Bj35ehaM5y5FXv",
  "key1": "5FEqWkUTCSD8dBXqFi6D8unEmaSsZGjtUBfFyBNeviMb5VMyyzYRDcDqronNq9Nyg5rooySMP2uUBA8K4Za76vCA",
  "key2": "5XRxCS2K2s94pDdhHbqHxKEQQW3qpw5Cin8x55nDWD785ymA7nt34q5M38kbwEWE81BXojQD4V6BxUuQNoFS22tQ",
  "key3": "27XHG6qBtehnYCd2LcFAqincfkqno47UKxwhQ57bQ1bTwjptSBSMiZyrnJwFgKtS9FEW1773LcjAT7KtNSSAEp5R",
  "key4": "zY6EV5k976yoCgJQqp6vCDVvnEKGjQMG7WsUT94zAGNBDdoH4WEqcvjTejnh5AAcL4doa2wyNNWUWxJwjnCbD6i",
  "key5": "3QrPbQnZj4eQGiWPP8CCX2ijPSFSEAH77yGY6Kf9dt6tZmQn1TJQs4Gh5d4XQhgy9uGx86p8eG1thSS5bc8viyz3",
  "key6": "5kzqW1RKnLTQA6Qc2FiRrAnJo3wi1f3ebc2zEFWAppdbYprcvDCBuqDSqpGtDf6ZgWbFazSJHAt6Wg3zcWHnuHSa",
  "key7": "5tEziaPnf1FUR82mzTfiyPeo2xaEjg6Zw8GhfedXoGvzJ4ce2zyV4kLZKYR2Vi4iCRhrDjwc9utV6HCH8Ytmmn7W",
  "key8": "2MmY1uzYGBzzrmjTEkNFzcUBJRq3HLFQFoL6eAkKj9Roaf8hAgEAvyPWx2edPgxiXfRxoTU4B2ikXeyrLBnji34J",
  "key9": "UrcJufJ1GF6i3fLndyYUGnZSrA6XPXbaC918BxbZfPo78QARc41BNtEWKoFqnKPGJL2bLEMPJBRVEsDNvb95RnR",
  "key10": "5v4qYqgzDouoFuGczjY34FWeyyTpfaM4gu1soH4Pe2PmcaTUPLmGXAuTcM42GWxMUJ7MLLcWMUczZssxaTpy9YtX",
  "key11": "GEQyQ3rUDyaAYqBAGNNvjdndYAnXnwnLGtMNHPrgfHNe9a3k73EfaMdyiYNrTMdqcDKB3C5b3JpJJcekuXGsidd",
  "key12": "4BiQqvUBFNZGMsCNyUzgaYbWUPX32k6RHda6JwCdes9L7r2uuwDJgXs8KbeVerNapaKgDoc9aHZmsJYnq1HuhYn7",
  "key13": "5oPovQT5xNaNzgC9ZA52cgXexq2ZW7mRLavGY57Tj3j18e7c7huroxyzYbCuwiTPKyyJaNor9qg25FBDv578oz9r",
  "key14": "3JCFCS8Sc3oGTC7YpdVtb1td86fvGme11M4ijUSDN5hhbCvL9e3w657r3TNU5AHyiE5qD2mM9dtctr3k5NK1btVG",
  "key15": "RvtCXffxSXtnsfztbk3SB2MyMNXYavQsDXEBMYCaE1uFMSgAJ5MiRsmDft2m14mF2aVzszKZLsYkhQWkQYv6TY8",
  "key16": "2tsJUi9LoTgYm6Xjkf2kCiw7hAphksp4oxA4KodXjm3JHrqhMNHjjjpZ4gJTuogmgu8hNYKS4jKM1NDdiHKjWViV",
  "key17": "5xYAnA7JZoy7kjTpKsxHLFWmBiTGkYaPxcjmJ3sbSNPxsrqWmXVf4WFbsmDdaYzoExjEFBMAbJvVLTzmDQiCryL7",
  "key18": "2GriMax2cyaeiKXTHtqNNV77sV3Y9pwFCccNBKBbsQuX8No4JZV7gmQ4huEYcDd57WKcV96B4MpBHdzUb3JPJhmY",
  "key19": "5fyFcERmFXmRwMvQUuhsAyyGna4ABquHubGhoRjJ4G8Q4P2iK6QBY1Limd9pdaftta2KUYZhzCBWAK6ZezVUD1RR",
  "key20": "5MJuGgdyMSnd6VqWiXndX1mGvNPP4tabS6Mr7uoMUaTRuzHpDfpbiGwP8vpxSuy194hk6jkBzYwECf9ewvuC6wXx",
  "key21": "2n1VEgV9QSuVL1GURzkhWZeLE8GmH5TNuTYhVdGAm6j8umkjHhPKQNF9eZQRcUHiAL7JuzPtpgGmAu6JuTFSsX5o",
  "key22": "5zVmJkooPeqxjjhSqG3NiRK9giSDt9Qg8SrgoPKu63ZvtHuKff5atTkKpS93RGesMJLRbhsV8DTex5ekVv8XtQZh",
  "key23": "5kxXtAASz2bUPskGMByhdx4jLD2t87fZPvebER7drYpFuU3WLb4CSn3TDVeCsnUWEGxUrtZG3vXJUoDCiVCHN4Yu",
  "key24": "2ViDe2WGMrVGt99KBnqi7j4bobmzsTDzN5Mjg4i8RFoPTaGzHkLrWeTArhUaBJChn7FAP6kkvEX1RRq1QgzDfRaz",
  "key25": "5i3WaD3WTrySXdv9zbuDLdvDrRk55YWrdVa6v7M9vUihw1ydGJ1k682uLSs5SRWstNCdQof6c8p3woxYbauPv26f",
  "key26": "5eesBjrwnpm9JqRLh9YhHNTYyz1oUf7mkey5HCbxVJhNDRdZmM2bZuQqvHgJuuS5xUbKXkqV7eQpc1LewQL7oTH1",
  "key27": "4KQkRVGzwv5ZKUkW7trB3CcHi9eqwT7eTxhWSC5LRcxQqcLBigUDyUjx5NQqbbALseHFuCXbmyiFxSzjAJadJ5aQ",
  "key28": "3XagXA8kZWXEHMGDAFyevHSmCr9t2PEuJuxVAHYWQriR2HStUeuDrduj2RtWn7NALFh9rHLxECSLog6YnAjJKKRr",
  "key29": "2aYra1ahmcGYnzctwAu14gqa28ixVSnXHsGo85fHqwteSNUoTD3VbWLXurqmDBwBoGi2E6cYXRyQtu8LyanyA515",
  "key30": "4ZmG43DzuXDAfCM1Ne6Nza4HiSJS6wLkWBK7UFzFB5vBSHcgk5z8wqtsUSDVrNEQjezKHFPBU3S8iSiJ2jy6w51i",
  "key31": "cTN9Amce3yq1suUJ12p6ra5A6xpDVz18SmWAsV6SUAq92MN4DUqUv4ctMQim4GUiw36iySeKnHt9YiLGmahdPuR",
  "key32": "xXJPjebNVgUqzi5RUnQcpxm377QcNeFwryFTgvZytZWeHfNJJUQd4KF4fN9NzYayF84mW7256GV7iAfu6sMF7s5",
  "key33": "i3QhERX22QJVzCDHDXPcw84dEE81NDFKFfkWm9GmxcxtPYCThAff3uiTi7LNZVHRkJRskx8qwJxC6suu27BjEHi",
  "key34": "EPtmzAAmNYNrKqNdBjoum5JMFDdGwaxS3yJcMkcYya2uf4Qi7cyc25fQKJaboPFSZxEqPhVUFBRmMmNtMknsQNk",
  "key35": "2XWXhQq9eopjmxQXGW21gmgxwHTeb31JwwGnzKAEhViBUUfYkXbyhMG42sVxDcJKCPAXucxbiifMNXnYsNys5KFV",
  "key36": "5r1W3h4FpjczXKFsR2SZh7MyTgLhQi9xzVxoLmuZUnpnszqJshNoTX2X6fGRjPt8nYRxH1ew2LTxxkmhdim4zCje",
  "key37": "42bgz4Vhgt7bzdrWvBB4KEhwwQrhxndU2pSgGFiD3rA7oGGvnZjJwnXDqX12WULDF1HhM8YhzCCxk9VBAUSj3QW3",
  "key38": "4szo29BfV7Yq67uLVt9v8BQkhTMbNA85dKbcg9uvL9Rqn1yyiQKDKwNAQGcVRihrzKJZgUbMa8E3dX5DBuHPciST"
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
