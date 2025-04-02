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
    "5YoQFtVNbBUZcLkxyb65h1TvKJftDtbm3juVyN6f5k6bJCycvUvC4HG1KnWkDqjzQ4dH7zSTJ7Qs25qQzPvYL1kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBSCTBzDTGPECn2mtoKgMcxp4t8xs7gGsxYrWAYaEdaAvhY5iCdSatnMHghobAEbVkLy2ZPntbqKDWKeK2JV6tD",
  "key1": "5TpWzgbYbRWePjHrLfZgA73hjD2mG3VzYuXMmi2yC6qpv2pCmyVWavho87ZmQnq4FMBwGB1s9BDtEHdEyDxtW3NF",
  "key2": "2JPmHPioVp1Kok7K4TjUP53JBxE3fib3fBKioeKC3XG6CmtPCAZcpBDZfS7fdotdgdGMKiDfSZ9HGqfWfio32Ubw",
  "key3": "58yfkAL5eCpmPeAhwV4dbeMiuBh3WpKv33doHc5e346QY8Ht4eZEsPNZ3xAYzj6nwTA79nhSEAxDx5KqL9btBk9n",
  "key4": "4J5Ks1dA5MJet8HQFvV34wMXoSbimBaAKYvdVcL5PLPuyqwLpTiFQPrR8ARjUaNb4TATUXDM87R5rjR9DQdcLWpS",
  "key5": "4utA7MKt6Z5eBFK9cpbCCpsW9n6s8W37ZKnWT99Wi2kdBhT2QJNHUWRuLnMKg1WNHHpZ11JTQ8E6tv3y54Cmk81d",
  "key6": "3DkDM9Xr38Mq8iZshc7CC4LmrBoAY9uUgMGdkERtTzMArHs1xWpqv4kPt7n7VVVwMY7o6u8odRULANjh3S3JLAwc",
  "key7": "2GegWRouKVvnBofA24ekxQdCa8LhrqjE8MwNUDJtKkAmKdi97MSUD6dg2HdApfPJs51g7eMymrBDfhQkdH4Uwyjt",
  "key8": "4RfZqayAxgRD5JwMBDGVufmNMkxaHNo2j27qF4i4E1damskrA71MPuewJE6wd3nCo997iaU4Yqpw77rX6V77Y9wY",
  "key9": "5WqaYJtFoM7wQ5K3RBYiyrSf5Ne4Rxr14iXuBbBGuPn3jcBSbtqfRqyJmXfLR3gGZGRAXtkdJ9GdcRBv55CJLxJS",
  "key10": "2b5BghURa3U2UkjQvCb28HNkRWPdD31moxpmoDcQjPzRqfVxRjei86imYyNixoCGgTHHX1wbvGBFLKmwCKYiQsx1",
  "key11": "4HnEXuw7SWi5cJbo5JU76JPsAq4qsMtBofXec5zBtzPvCPNCKdREomDvFmJs7Qx4utCnc2x89eRFwnA9E7HNezkP",
  "key12": "37ERvi35oLeMx8Fk3BA2KgdZcxMwA2RwjF1kt891rEdZwkim6h4EBJqrEij3sb2m1KUDKqkqbqHi3d2EZM9BwC4M",
  "key13": "61RntdNbNdG4YyVqRrCxyLxRmZcr3PCbSSS4unpsQR3Y1f685PgX81qYpVE4kHiVKRfGCfVxuXgtt74DD2epTqDz",
  "key14": "3wfRHQV6ZC2z6ANvKjMrC5kreVym9e8akFCRRUpUPWsoLyKdtJDx3UUnFFkKjCAabfWoa8q3HBrfifaXb6ya22cs",
  "key15": "5CBd4u7gMhRiNRL1X7xWpd3XTkxVA1iB5w4f2BJFr6HEytZGzT3HkDzmLhhXuk8cfCqziDKmdcPXrR8cBeQHmWgE",
  "key16": "4traJPmG9VwUbCwGkut4n4MCcCfihBMhzNU1PnD32WBngSS6HHQ24LcFAn42SY6KniiAvkrjJHLH5AJyWKSxhcC3",
  "key17": "2vKrMLRBz9wXR6wgKM7kwR98bPUVmNsTskJsSfMMfPtwuZN3v8KFrbpkRo5i7Nm66FGXiGerMxfypnynKwJfsRti",
  "key18": "Vfv4QSjW9WweWn3MKLsWKfQjn1R1L4vU6T3TrNwjLw1tV8u6hSdkfBgV4LFphRmexuhjdSMS7GnETvk5dtcEgyD",
  "key19": "X4Lw5LvFyBVFyXm8hjKa4TCkz8LkLryAPRba4jMSD8Ri3QBReRPfG4HZDc6P65ZSiMxXuyYiogyo1MazKELpvka",
  "key20": "1QcEG1VQRYxY35QFHCJGMFHcUR7jX7GGKDb9rBeQUw4r6ryufe7jyag265cmgRnvasrF2vPWY1UqowiHkYXBMJN",
  "key21": "4Xi7VxqTA1WoD8cpVzZ9c1cUVfzFjauCNJaLbA6PmnDy6Gk3DVFgDULq2cFDvCVhd7ajfvX1VPM2zTGr8bpQbvDq",
  "key22": "62LNXup1AxbaYsYWcatfBX7pqVc1sXLPb6EQftdY2mLxNJzdjCEmAvY5g7iWTQ4JivpApwE5SJ5EPMtciz1h2HDn",
  "key23": "2sxJk7Qu7yPYBQo1113xubTpfHyoFwkexoLfJrom1V64H3H8gNGRJyfDoyhbrvrXVG9NhEQXHUMLmk4TNzMgzpmq",
  "key24": "5bgFqnTYLYv91uK7HbSevkHWbo7ucWSWo3r5ZRgHdNshpQrJw8MdE4mkcWhFEjLuWYfxwvqovwJ6xx1g4bRNaCEu",
  "key25": "2g9s1bongnZfqhNhQTo9zvcrrW4qXAH8brd84KL4bkdm9tK5oX8vSaYtM5sxCW1ffkyx3PzncRJzGE3GfFUGeK1k",
  "key26": "5qr68jg1F8HXzotb2X9ksgtsTgMWzyNAm3qioRDm68JVYGwZqGCr2c8HR5MvkfhXUVvMs9ujfP65SPSomfKrbXro",
  "key27": "2YyBG2m4BMRmyxSHDoPy5KXqNgbyyoj9Vyc3XjEv4MKdeksJg3AgEyuV2jWNvXFQ9d4KG58Sne18ZTKSZzvMvd3j",
  "key28": "TBEFCf9KeepcGWa3mJSDmfJfcbBWoCJQwx6o2zq5aUUnBoY3NHhZGSoyLc8o45Y5TVo6vuVtYvworJ28tG6puoH",
  "key29": "4uimrBBWUmSqeimgFe8NcxEaCq6aiQ7xPoAmopMboiDdvveArGbQBpVFxxPNY99zXqpYN6HMv8y9rrHKEd5E2HnJ",
  "key30": "5JhbtMz2ffgZvVQSTAP7ZCFhmwdfvMkEFRPmZQZJjUXr28LnoYZAAiRoFmCTUDRGasNT8c3S92xGbSCKWpATXBR2",
  "key31": "59UxR3UR8Cg4jC9Hw1tHw41iir4HkV3drLK4YaXQTTMr1VU2uzeNZfhpXtsRCZizimHqhK1pFKBXhqVPoy6UThqN",
  "key32": "32VCdyNBiwiBvrx2TbfG9ZpMVUidgx4N1MJLkhoqVjLaEtvhcmdbLHEaGJ55UoVa3ZBbovKShZ3Ru3VambUpTWdA",
  "key33": "5Gj1Cc4SJon8gmwGZ7eNAXUBnHAcUbZdqmrt12vt4c9KbdPtQSVUwiQiMaPfnj6suqZ7y3RYXLmM4i4gdmS65y2T",
  "key34": "5CUqsJiRtyUcfszwRxo27CvixzDx5vPFYyCnicxkRsisfbAG8FRZyrKSv4zJMgmSCTpXL1RKYiWnjwaSP9eLd2xP",
  "key35": "5DCWCZdaEVoJ2vM8ixWYuZEkRKBktT57J2sHqvPsLHaWguHareUszjdys7sVgL3iopGEcH2PzwjFkH8sz9g7raQ1",
  "key36": "3n2HwLgh7ukgtNZFbB8MT4B5JfnE6QNZwd1JctEfCt3F67Feat3moxD8mWTcfohAKjdiLc9dwktWNeb526cH8B51",
  "key37": "25AtWhmrCugzMVEFCnYwYHoyrogzcgrRuz6ZorzwjA4HNB3gVUjw7JWrNkFdAkZR5oa4xe6vxEkwQuSq9pBn8LKm",
  "key38": "2pHuYRbQtp8GhgEHikdc1aLNmabsHutDvSn4AcRskmdSBZaHHt5dRF666d1BJsTSdpjkRmVQ11EwMWScakLq6GWn",
  "key39": "55aCbjbpdhNbvSnDSsT3Wh8zGKG8QX2zyAYvxcMG1cyadZB34si6ciJ9cj55rsuB5bbH1Wn4LU46G1ena1sAxCGJ"
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
