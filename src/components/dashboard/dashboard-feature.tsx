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
    "49iSPJLwVeVQqJ3EPXamJKx3sFTPLbz3cMZFCw3VLqpk1WwvQwEvt681QLpyPsMUcFztyBC34un99wAUfJXNWhM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36n9wwhGPwaTnJ1betAnT4J3cb97dNaASKtEiK3tWqTz5836QQsrBjuoDpKgZQ6PnrePhSqdqujctCd5q4ytAfgK",
  "key1": "ChF63k8zbYYcNVijy9hMjESbVfJszZz27gkzo4iYQxZWnxY8USEy8zQmYw24pqfQeMd6eCnDhBNLZW19w1y5w92",
  "key2": "3Afcd1BPQDekk8UTMisr1ZLAoP7sE3SM8rtpfRBpQ6e5jYTnPdSpjDuCmshMbqEyPSbkS2rLLU63JUrJaE7VHxdK",
  "key3": "5z3kWbCkQ2AqfDg4wdwUKxhLL93UX7eDc3NcJMWQim3rcdn1qLmFNeGpqRf3gNCwicZGipFyEvJANd6G1jwCFdKN",
  "key4": "36p3fd1FGvgUpCjMsUvEzLe2FzK9xNjncffdPjvWWVGzKp6eHVPx58KoKGAdUjQHrQmwE6BkF9UJXL3Hz7omBuir",
  "key5": "5jHRpZtgWoVrQT4Z5oaU8CuKF23o1zWkUmYXZTTxhUTbE3exdntEMnznLPhrSyFSfKMPmB3rkm2LbHPPW3cZq3QL",
  "key6": "5MeMSAfASftbXrLrQiKPwqGME2TnaaaoRy4TF71QUdGpc69FZCQiSmFmFg6etgxcpcujX21YziM8nXMvMNBxSzAY",
  "key7": "4zgCUZwfgoQ4J6rjZAX7ajX9aCyxBpo8HxYwpSWUwmjBZCQfPcxSJfBPrn4aiXxuwvQPfYHjFDntXg82ETtm4Do1",
  "key8": "3LQxsYhwsG6JS2TvjqAM3useLJwzLmfkk3W4khqxhqcMtNbaz4yDEPQASjgfiqiQjJDFmB8P5UTBT7X2i9NPimtn",
  "key9": "eBPNKHFAgjbkvw1fn2uMbyX1BhXuWVB448PW3wF5rUVzyHk3d9vQmab3Zcf7qabsBbEvJiD4rnummXSwHH1hukb",
  "key10": "5TztEHvXGSLmpeWy7E7DQ2eUBnQLTCUjbFG8YSiZ1cr3iYds9XUuuXGA3pggmJXDAH8Wm7rLLRvJwsDJ3ij2ve8t",
  "key11": "3pvWa1CDWiwsJH3y4jHU7fQUdXtnfkpL8Jkexkey8bTbLbPT4NcNF9b4pnzHX3iVvzbV5FBKCxuPTeSFqMc3zxWR",
  "key12": "4qVCKFc6TFiPeLkQ1cnDELPBPkDFCsjz8zRQQGSuLok6cbYtDw4fRXRTrH9w3k53aUyXfjk1xzXDeZin3B8aAJGt",
  "key13": "51gwoKxrDE2sR75BP2uPgkQ1Tka7FKey6UweFKandUsi1LxjjXLMJYontJBA8R5a5RemhDHSTF9cER8jeMfBtGWn",
  "key14": "4ihmjzYg8DyVXYV1EpRWsERBBLrzqkCjhYFa2Ci6nqYYdJA5CKxxZAuKjAQ2D4KDVb728R2aY4BVpRbraVSkCX8b",
  "key15": "2YCez1PLQkgPKBUbFpLjX61hae2kBYQ9jyus65CEvwoxNveucjXsyQRZE7tjhrXWDo4rdYwuB24V8JKHhQVU7d2",
  "key16": "2qHBtXiwtgoTx5Z5xys2h6g6bqXGiRgAp96Egq6GiXEcPxgT6UfZjsQLFUeYNngsufyn5m6vqFQFwUCC3XFdmAqW",
  "key17": "5GRtfYLUx4RdCyjDbETfmxCqnButaVmGz8jhyNcr6gBEyr8e96foi7XAuw2PNga7NNVU1wjoS53xwz3D82zMMGN9",
  "key18": "2ve5QAdrBfpYTj6kn68XfUhyDyeczvqM1CchBV72iMQHxhYFU2zFzLr6NnWqQHA713YqLeuJJgV1SpVXTxmPiiUE",
  "key19": "3JFaFYEUwKNdrM5UU7uyJBopntPXuEr8uVouFBqjhAubFwqdGFbJPa16f2oRdQ8HocSDxaMS369oBR5hTy6rc2Fr",
  "key20": "3BVANW92jJmrQE6coAddQ3AWuZzgNNosSfy9FbXWEABJpv4HEmNaBRCdD663N3FSPTZknHUPZGHntti3hx58iKsE",
  "key21": "XqCX3YJVgSYVVZkuRNbKgzgiuwuxbFBKf8xUye8nZEQnXi5ZPtHBnXVpcukkDtBfoqGLFYZ6jHDWFRpLdCSgSRo",
  "key22": "5hWytr8TESYX9ZQVF29mM6ooR2mvTzKNzKmAmQ7CXcAC93tjwyzXpainjaP9M7YthGtniwaN13ryKqJFseW4BnHQ",
  "key23": "2suUQz4cvsrszPWNFtM3dVwcEcRMN5JLsx4SSoP9xBX7NLoDMtcUeziUNkGTKUQtPddPEkfjeC7MWnfF3iaNr4mY",
  "key24": "4D1Up9ziLSRVRZat2PuA9VcKUASjMh92cKYsQrHfVAKLYvogjLCTTDvRN1Bj1reUN2KSuuDrLbsqE7Cv89PQ6ADJ",
  "key25": "25aJ8LHEb1636AhyDx4QyazVNvpN9uGcZWmXfU5pxJ2wJdDAv87FTy9qyzu8u6vqjzYMFfB4d4usHvvgqgffPJGS",
  "key26": "59bwXZVhNZ94e5Mq7J4ZkehLtJv1DfdKBek8CVomeLR3kZGcGSRCgeSsNPtu8dYm7K7QmxtRfx3hFLEmr6GE9Yvz",
  "key27": "2dhFmFWFhhmGv54xm6S7BjqpietA2xDTZDRRZCTZkj5SmBsKx6rTKUrkTWwENrpxo9CX7tm1PAQRF1snLNeSa5qq",
  "key28": "LvivS5uqHa4aqED13vbS1jMpK9bD3N5fABTRA9qjRAWs6524BG5gXsTGVUac1cwqiDCpiTRzRkGbeGhAaC41hEk",
  "key29": "5Psj6kB9DbDtPqm2EWU1LMdGq5rhYTvKnxTFY2F74E5Go1eg5CXUNfWaNESi2UTKko1kAS5SLpu4WhoEgbBW3L6s",
  "key30": "2guN34ZyLqKNid8ti22wZRUhbmZGsq95qFWx1YEZtnp9JyGqabXXRG1GmUqTB6SP6P4AroN16nL9G5ckdAmyGUyy",
  "key31": "U43WK8sbXXSjkLiigaWQoCvgpTzr5HL8gbYq5TZgYCi5bqWJ15Dmp6feLcwX62ktnbFpSKg5xVjNCDccLK6qdaZ",
  "key32": "35qBgLgsah2p4pnnTMs1SrzMPvsYRnHF7szA9yzjQQz17JLVhyQZ7xqfEuQBV5XQkWTHrACBz97Q9wUq4XiaqEe4",
  "key33": "5Hc1WY2eHFCP2qujwtsxzcGQrNYrpsQmZp3yTKhUVo35oCptcDT2RWJepZAkr8DeD2TtwtRNb1aaBF7Xa2SAhXX2",
  "key34": "2ppinnkHaKtMU1EG61Yn3AQin17gJya91EQFzLLBeni17pUJ9W4wQYkZosbingVdS1hmjSRauSRLM9Jj7BXqdNAS",
  "key35": "3nVaKEexihjwUt7X195y9ZNPoK1gMcriekfdqanPtsAb2D1iPCVNzXaTTg9D6h3RZ72TmFS2cDodRKHXXDmG88Xf",
  "key36": "65jEhMYFrdeu7CEuqAXge9FCE9VRpUTtDSN6JsjJCbmg45iSqFmoD86sSDZ58pW14wwCAKiBkeJB4UMiJJuXbE8Z",
  "key37": "2L55SUmMkiwnHmpdBdBPQ6dEhcXJFswLBvvDHxWEhi2oYE5hKJoQazWHm4bhZWiBzgJtaxW7w6TWNHumyQrreAP9",
  "key38": "4JKZ4DEEwuG78eG22MFYRPRp7VjvrkGMNyaLEBMyFLZLsVJdDgm25Br6sDp5n455xXKoJvBHiEDtUsWAWGYjaRBt",
  "key39": "4dKsxCHpKAHphatcQdtUKSJtB7LWBAxnGqhRj3SV2MHAA1MdE7c4qCz1aKS2c6tVMnBwgbPYy9VexgX8zXsueyzx",
  "key40": "4Df66iVrT8mt5raMcFAbVkPQqGe9MPQ77nbm4KvkDb9U9PqLoWUXM9zX47LwUwrRV2yxtqHYMUVJS8VSeLcau3z2"
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
