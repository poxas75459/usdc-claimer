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
    "5W3h1HJDuvFQMPpSvRE9ytTbYNQUcJoNscwJWMtnjeEwvXrTVgo2v4UWtnhsrTETgna6UgEEwZtiBuKXfjifrmVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhmrsvWxL6rjqFRUgKeDegCLi94DuBsHrkcPUuys3JqUpa4QmHhYaTAeSo3io8wjJAtWi9E3BwgET4VJ5bwHh6w",
  "key1": "4s7JCtQr7vNCLbm1y28BeQF9ZBGiAXQcA45TBYAkCZQbytP1nJ3zhNpYohHWCmTTpewPprpx2QPQ46ZSyqtQnS6B",
  "key2": "2kYNX7NDTYL2TRPBsGSPqQX3xkEgvbt4W6ztrNJwREDHiiFMfwoGJiaz8yKW2E8mshQRAKQ5JP4EaBQ7t16WSgXZ",
  "key3": "2digAfK96yM7ZFXChXTgCDefqPmEfj8QE2doJ5emNwHWYQdPHqpco9UoRZcSBA4WmSwv732Go9wTRbrWr7xP9Dge",
  "key4": "3HRPykJAAbQykj9cCYh8gNLK4EvFNqYuuQs62nzgtq94qPhuTtCGaEqxZ78DBVpbJjj9aCpnF1Qatb7yRWAHUtGL",
  "key5": "9NpVMCdibchvFfXoqJSzfdQRfkx6ydfUGekKYjBXqU4KM4FTsndS4KYNzW68h4snH4hDwbYZKPsioDnc4fmShT7",
  "key6": "32BVw8b3LCorytB5QUJuA43J9grUk6HSA52dXw4319sFLs12qFD5XNSmxufNqFhSNm5Qb7Sv3haiAHo1ZP74N5Sv",
  "key7": "25XB5e3x8pvizM13Tks3Xj9R9eBPHsBpoFeMMYa64YZs3ivRwQoQfaFwCXeiUwFsNyvckcizUyo2n3WbfNK1HzqH",
  "key8": "5PURXEDhzzK3eTHLVTwzZ9D4ck2A8bHLPYknvmBeHxZDmmvL6pDHLyJcG64bR54sGqH4FyHXg5zbS1DV79TqueP7",
  "key9": "45vfQgxr8wjTwM5scBJyBunS3HCzMsoNHfuZBZazE8Sygxh5tKzWr8WR7mWoFEamVh7RkjYTTBUZYVg9XHJ9x7yM",
  "key10": "4774XnhMARu8GRMm3H3TWGSf99MWmsugm5s5hxudZdukLiBzwQjKSFzSYSVUHGPZG4BjwmgWrtp8QkEAJ5wXuqZY",
  "key11": "32xT5qYhktBJWRWWQ8sueasN8h9a3Tw3dnqZop8g5Q3UezBPDfZirdzrYcte9VsMbsybiQm4nc2dq7WyTewg3j8e",
  "key12": "4oWN17WKW4ktdgGf8jzFffy3Ph25Pej4m3kx9vo53C3bXr7jZjirQ6jc5HqejDZfM4F8P6T1hsVhsfKrR2srmCkg",
  "key13": "4PMBapZFNKrVs6b8TtdSuXEXf9oPkCqkBV12SaTJsKEPLnxprnW54BcQCAnzVRLxR2vtrwKvq8A1Rf5gQekTeof3",
  "key14": "5XzkmhF1yMYWFHdAA3LwsfDQrNLW4gqG2ua2cf18Yk9DbiNBAZ3LRHumZUQYELj8qryD1bkpLGbZu2oWn4pjoZmn",
  "key15": "3HeMr1tEjdZp2FgJzK349wyjAQern6Dzz9BrQeEJc8wj1daTkLGE4LC9S43rimEYu5rWykoj8obaSk9adQWF9ye4",
  "key16": "3uXp7KRktzkezfnP9K73jNBsNmWLoJiCdeVPBCjKLoscc3cir3hmucPkQbT55jrwqDWbGFxYHSUYYvbREdPX26iP",
  "key17": "4BeZYzwNUoJuQtdaqCP7rhEzJoXjmL4Fpre3tujscrEd1tgM7oRMRmsgm9dVNrod5oCk5rUsHq3J8DzSbbtQM9Qc",
  "key18": "4ter23CW6eaq2EsvJBBvAser5aucUhJqG2qRVka57q3MmfSCiRFrJfkaJUVU2SpAxuBmP2JvB9A32o8m4a2GXv8Z",
  "key19": "31eE9Vy13o1ZtkCWU3nZXspdCMYaQe7FdTMoK9jy9AaiBGhEz2Z8NGyFzDB6DihEPWdugB4sted4RUkVhXZMG7PZ",
  "key20": "2AJMFnJHHtxZu5NSau7EdXqW2Lm9DsadFZzkQ853L3GHKDggFNtm5UvqUvJErMVPtynH476i3em4GvjcCmpYYxtC",
  "key21": "5qprQPRXEmK3KtYkgZGYH1R7rHPj8zRFnGM7xVMzKCXmdfMf5rweyUMeKoq7kDBJRFXk5pfGaXuTipTYzsFgxFkw",
  "key22": "5fj8QNFMrQsFdnZwCuEfeTeiT4QReFzaZqUT1eMwB6Ww2fFC8aTWu633itCDCjm2jVeUfy9DY7QmJbJcBdeHRuta",
  "key23": "3CbVDJcaZ46JxGzzZX58YXbhuCAimHYxUdPMdrDasNgVKoWQUfzsm1aRsGVBJ43DWcLp4WzDeXEiC1YdJ5EwsSZu",
  "key24": "4m3UBCUgt9Lp2TDz6ShcsJY1moR4mGxLKNHWDv1DVQykwvx2kkqnogGrxdxfgj9CWUR37AveA52H22JNCV4AMSj3",
  "key25": "3jSeyspuqxhCK5m2LEdpv4RRdMxnLvNFSHeWbKXo7eqBxHS6Cqt6LNHTQV321PQpTKHyRWBpd8hdeiQwMYjQ4X7F",
  "key26": "4Q5P98x6kfp9MKfWfKTgTa1eQp5quHyzgyp9XbywkJJ7VPfVnc2skPto9K3GrQSFpmeiHmzpjoPwDWX5haisVP1X",
  "key27": "328zPKVc7eD5Qk4AQh33Nid2pai1JzpnctX1efVkbQYsiQZwrCUQULiEArMsUTYUWQj6sXji7o6m6zi7pRwjteD4",
  "key28": "4LzHDtMWE3PwJLcu49CBN8TLixVYZMx55mszeEfJ4r9LfQubnoxoxWRyNJyJUUTLbWXnfozNiuUn5w2AoSrUS7do",
  "key29": "3qPrUyZsXsEVJuHpS1jStkW7aEQ3o3F26KNx8L9xfGdRZ9T8zisgiXagd4aZAbya1JvGkQkvFHC7DtgbwCux8fSK",
  "key30": "4bnG1iwsMHzdANs3JZCh3E56yPiSQe3upipk91hHwEv5itoa7c67QvLf2HDPyE3tsMYAybq7xR6U2xY916bkvTzq",
  "key31": "5CoRR1HnDgede8s3c5wLq8JiEQ8FyxNVVTCPd3NDRwFwr4qNNYV1udemCyJC1V1J9JsS6GW3vP9xcZAdPAfCMPkv",
  "key32": "5tM9ycVY8NM29sbcUiqEsNLRU62iquDeqPQh1wQiGGJyWMWS9D8fmp9XppJAHrQjgJcJvVADqP1Q6TY7T7bZompG",
  "key33": "2u2fdqc2oWgJZXLSdEY5WGd1fiLa9XncyUCDxLkd8234ghv8ekpteeiNvkAjtHUDBKn2HwF9c43tEczxZCf22gT2",
  "key34": "2URtfUH5YmrM4soGqDFokezdudE2Z8jf65CHy1WB6cSPRotYGcxmRAoXyeTzdZcZZpVKCewy9oFZKnwzxdpwKumb",
  "key35": "4Vvc3Z4D9VvyAmDgkYcaDcPbnmiLwnLa5yAAruvDnYT2qYqC9HXuDCYckEkDvKACWrenUcU7qdYMFBt9wGdrP4gj",
  "key36": "5jtGpXpXgyrncUFbym6ZLqJNZNLPcCUtt7dkp4d7MJd9gCTtjS2nCB2525yn8UdZFcpuqBY3Zic3AmTniNq74GHE",
  "key37": "oUmDBQvi1L7b83PLDxoB8YU2AcbPPXnhi3736y5u5ia2W3Z33Lz1A8BXF5pBou6aR2uMeoQnpaKMWfx8RZ15a1R",
  "key38": "3FBK8Ndap4iEcYJnc9pmL88SVZAKHwNuqWv1fDtY6jNJmAdDZuiMbz1EQwZhfcRwMFcb6J8uoewkLr8oGArcUsB",
  "key39": "2xsjkYZJnVBv7XjjdGC8xbZYfvwh79s6xTRoMrigFodqjazRe64Sn5V2My9uVeteqrjGyqgFqQwpn16Rfvg2doFL",
  "key40": "3snZiXyFxWVJid4FiyNiZhUnx7L9p5VFgwdEgZTMGGnSy4u6Yt37PntqfdbFrhgMuTzYWAtUGCqaL2LsXef8guJT",
  "key41": "58KDZg7tS87NEg7zKZMUCoW6waw3Liief2bjRDZcPeostgKBHwbUBh66UA3rq5sdGszhL4p9ZkhgGNZEaQkPWkT5",
  "key42": "3btuBqVP9JLaXHotmWgKM9L4NpWZUt3cmdUAqkqm3ngt4cXxp7jxzwS98f9SheXX3JoYfbuTTVgvUKEZtZ29gvyn"
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
