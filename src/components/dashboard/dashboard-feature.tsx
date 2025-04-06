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
    "5889hDYUXxjEs39sP4P9CtY9Zf4yfkpjDETy1U7Yi6NeAR6VooT5K5jenqcjakRRVLQbZJjGyY73WjKsLMxg5J1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HdpSWWJztizaeGfkwJ23Sjzwo6uBM99FoF5ArrW62nfP8aNA9o4guukwE21i3hrg22DCVJzeBbofejMjGwvttk",
  "key1": "3FD7vovyS2R9tquo71Q6qPKnD7xZUfH2LFEZXMnnMNrbU9FScsDwwsr3eRdGkGtVm2yNQ2r2nwfQtwVYr6gf51Ww",
  "key2": "5YQG1bhD7LE19aqRxw2VBHMjyKvsvqA3bvQJRVGMv4z4EYL7rJrfFRKNo8uz5MejtQsXENWbdxvtBvxYdEWbeMhn",
  "key3": "364KrrSobUS21Xs4R8i6zjM5gdSKjoXeCxy4vhUTAXSxGUbc6CgaTvBMQBYD8jJBJg9FQaWZt1gfsg2eVFCjGY1r",
  "key4": "6noWHQ54XB8H34n94myH989bD3RcpSxfro265MRsJfK1WfFkRKn2avK9qH8FHBw2o1RLEFX6PgqYN1VWQhFS2Qx",
  "key5": "5LQXNxXwod4tp38J13WKBRJmF9RYRDLF2eQk6gumEUfan6qH9qnBPN8tw4sEyAvo3muRPQxJRsxNVHVsAWMR4n9a",
  "key6": "4AWJwUsDdWUDYWKYQrm8eNBbPGRcLkGYAJnokizsLzY3s8rENMUrrDVMQt8nnXVSDnuHiWagPqVM1j86jNTL2err",
  "key7": "2aUEonBtnQPnqG1WqoG9zkhFfaZ7Mx2qx8DHf2bx2RPDZtbjzzFpM2shF6GJ9oFtc5wUenJ8vfDKRXkQ6d8tiKsJ",
  "key8": "3VYjPD8yLWDD4W2jPgothMf1qzQAwH9SuawcTi7CzNSNtz7up9zi6CWbJx5QRy8VLJrBt9qub5no6grmePsbX9ye",
  "key9": "MKduc3JYN7vrbH7U13nEmd7eRxMmxpM7JeJrXmTU8yjwKMEnNnU7BJ8nF8p6sKZMKpPNsGPxsNQHq8virAqEbBW",
  "key10": "35Md3KH8Heuw2jT2eLsyzqk5v7kVdkEBvEuJ3o4vsoxeYBHY7jeN57M6fMZB7tBwQkWyBd2ht4i1FWZpLy7wkEBs",
  "key11": "2sykVv8F8C6LtcnSAWsx5KdnZ4RvMwycmD2gKUUmdbjmhTKzAbb3r9Li6DNMzYikaLnucqvyLf8aG7hgWEuMD7Be",
  "key12": "4vHxhfzvRhreSQRdjPyLs9doXLqojbdspGpDKEaTdMvcTBoW9zZz8bnuWVrynhZy9LcgYxZgU65ZJnmVVcDzUuKS",
  "key13": "4LrdxVhs8BTzQ75SaNdTcT7q6PSoejzNrutMTNxdU1SuTp6QohP4XTE7XPJmksSFfMvfcRo7o14MNAisHzpUUbNF",
  "key14": "2KnUReHSrfRpbWyxhs4C1eZtAWWKF8Sw5vPgqsJbZtHY2wtjGJZDJbHejKurMwGes4Ka6L5BCBU2Nqa2S1MHMXSK",
  "key15": "3vzJG6575sE26rTrVjxqC3iy4NuFpX9xcjhLZWRA3aVmT4zRhVPTtziZvPYwoBigFSzoErbn34i4b77FqN3bryLC",
  "key16": "3U3zQ7cQjXCzjSo7NcEzQ4RQaS9kUzqAL5dVqgfdefakBnvmUAHaAnHf24GsSwV2yjCqjStPdHd4s59oa5MGop36",
  "key17": "3DGvYWiKZB7nFZXZYS48kj9XnGsSVtnpWhqHEuxabkbazqAP76WgjKQMzVFwgfhgRu4BAzsPSQf5mzHHC7UUiCxk",
  "key18": "3dLABZQJT8mnmvA7wcY44cgQMXEJFCbbG7H274eQiT3ha2ZgVP3sTAAJTkpkRtk3wwsKZQa3ahdczYCinvZvJxYJ",
  "key19": "21DuaNTf8rsWutrqCtT8YDtnMmvWy6R9NvGj6AACZJeqRktyuaduLUasVzbNyzb4Q3rqV7iruXgbKVPdFmpVoiLQ",
  "key20": "3wZL9pDryyoW2Ly4esriYi1EQ4kVUye5sEND5RXAAz5XNjqvT5pAaw7LrefRhResS17C7fWhFSX6MzsmzxLVM8Hk",
  "key21": "5JAYjopo9xv5xhNPDyqN24WGcejBRPWZgJWFja8VaAK9tMLVKTZR4F4fgV3wCpMxxwx5pev2A9AjjZ9ApGpcZrHT",
  "key22": "5jgDhgHRZpWGq1Njez5c9kZ8xbf7EFJL7ufdVrVk6vg9jmp6CzxY7vZJpyUjFdhR8wfmw6hXQBEv6sb9PwmtYS3Y",
  "key23": "3kNJN3QYEZFX5pPRg6v3LX89MkVUiReynmt8PposKcPSbwSzK6RxMAa9f5s781n32nMkqTg7bq9zTaFp7TLFi3YA",
  "key24": "Z3m7UpCk288vx86pCioDBkNgGaooAWFvdAtAHHbyik6xiQ3BzjpE22ei8r3ARWCxTCcsAGBWJeWMvhJ2aDzgW3c",
  "key25": "3bCxwc1EPyBp2jUmYH732Cq2t6ec2wse2LZmPUBihAqEmUa4oQ8PjP39KvN7GSc9mkaSQP3mqeutAwvemywp55UF",
  "key26": "3FTUjuB7Z9Rcs2KXbpd38ekW3MFoHxRiujDLPS2XyNcCj2rWN8cAGqqS8ryuc9r72vCCb8LorPLTXgcGgYYEBdCK",
  "key27": "FCUwLjHdyGW47xNKayzBDku3WmJyNCpZ34t46rqQMTnwPg66q8ugDgPThptcR3E1v4WCJht5iXx1TvqHUvggQki",
  "key28": "5dwhg8ToQ2t28X8HmRqK8Mu86SFPvY241ERva9HWH6oVEMSVhVqCrYPskyXgYSaJXquapcYdHAuVWPQ6DbJAddLN",
  "key29": "3yGdrzSvMkD1vVmZoAzU9rEot5dpH3mGR7cYFj9NCEWyCQiMZeKVxbYFiFS41N8Ebcpt73DAfb7WXQw8muKJxE1W",
  "key30": "4wULZVjHnRLRs5SBdAdKwe83dQ8MZd4oQ1Np7UuWDvi91vpyHVRtLFUs9puFizdCXqivprowG7qyGDSyDfUNK83c",
  "key31": "5N9DJnFV2eJYTjPy6gRD9GqLKDWM89N8QioWQhnE8E3Xebjnno9HvXHjqohPSTVt8eDPLvUTYBEx9J2UEiRfo9fY",
  "key32": "ZxgmzwXuVpdwiGhGkgW1NssD69Y8BLtFVEdgRhm2uPTHW6n2Tchke9dqgVC3S28k2j7BqHyZsSdy5tRaehpsymY",
  "key33": "4nxr2LFXe9Qvi9At9wSt9P5J3KCxRwDufXZo1GRNJm6A9jyGtGJg6DDV1Q6YaPefr3eHSDZ1NinpCEST3sUbmb6u",
  "key34": "3X559NF5U1pAZJL7pg4hTsbovvDn6HwskFph48dm6JixmUHLkZDN2a7so1Ecp31nx51jsSb9zpLiB9f1v3Qg6jK4"
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
