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
    "4mb4hrSrNvYs2mXYkB3gFieCxfNLkxH8g2V7iMw5KnHXPbgKZB22DE86VLmfC2Pu3kzKFBVrVPD7c7Jj1SdUEvHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfqFuGJEY6BSDi4FtHaThnvQrEqPf9EPaNq9nzwBPjup8h6MEvDDkKcHqnzF4iUmya8bcHoYHh5kQ9w4eC19Dd7",
  "key1": "2mrkvSoDVKnuiUkRYUXMZiAYdX55hXK1gbiLFkMJ72smNu1ToziAZBuyHkUXL58Ww7aK1WsiNGo5VMZHuUcr97sQ",
  "key2": "3gVWSX2aqt3MjKJ3xAdnwwWeAnLghjR2qHVskFAsHMuuD4WQT8HAXiWnoNbBZbh9ba53r6LwwgJgs47s3R6DNmVg",
  "key3": "4ZnMmVy8RB633JxWfbM5gmwAjjDggvGMzBs8YU5DrdeTZk6N2hu379TJDoLnjhGdUVFxxUrXcBLyrisRx7DVqZdq",
  "key4": "4P4DesmNhVGNiQjF1SMwKDWG8cVH1d3uEDohFPZbJWhoLJqX2DVDxnX7wLffNgw4C6yBzFUQf72sjeT2n8hiWcof",
  "key5": "fkWcNexqSbnHghAK67SKS9AfFuU5k2RFXPC5ieNGAZdonffxRggBBCidiyRUtecwsRWBovvjsZbtHP1Q5esoTQw",
  "key6": "4hKJsidHMPArD2Zkx9eURBQ1kQ2sp5DknKe1EUm5dFBfSS61ngJyMNTcWZgXqw6HZymZTPZ9cDKoCKTQdqcdCWVo",
  "key7": "4sZK5z67GGYjXgwEg8pwHoF9mfV8bLuiXDM6yh4VdcV77qW1LsueZoFnNADLu7SAX6LmrJCjVsVN59jmfnhiDnLT",
  "key8": "prKdMjmzDMKZVPGSNCvZ5mwKneNrt7ELkaAp4e7yHtEciG4PjXuugzqbSfT2FziGTuiSoJNiNXvWVqEUKSjyGM8",
  "key9": "JHoGDJK7jvfKLo927pESp8r13s9QxusASsdu5mFoaSkFmD7UU78qYRPFymRsZnpj1AkWmSj47bv62Ny6owQd4Ao",
  "key10": "5s9MsCJM9BhYKeHBfc42HoHit2zy3TJvBUGqLRdmPufQ4ZmQMosvY3gnEwkAWaR4JVC2YWbiZVi2bUXKVUQmzLSE",
  "key11": "4FnwacN9uLudxDnBfwVyE94BwdzkRBmzdFTZUoJ2NjPFNCPoU13nht1rps2CzNFLDdvicCt8kiLMJoYduqpbGUh",
  "key12": "31KC3tQSAfk7cSQ3EZWMKa77mjahLaE2W419qTCjMtVPdYRx4pciJQphnZKemQ525H9AbFQZsEPmXVkCYDNTatrX",
  "key13": "AcZ1H5xiz5MLJhAGL9eBCoEc59B8TjYfJZCkbxhhyGqeqmAQDENE6MFG6jZBajPRwE8Gy2UVQ2qDD6BMRirxNtt",
  "key14": "3QyFaQRMbwo2iDiz9vDiaHY3YUGeW7ejDmwVyn2K6owpzbUXv6jq7HFtFyJ59UugcKLuCvDSBvAyFhzX6b4NKwr5",
  "key15": "5Qz98Jyn7toDXAKY6DL92LVo75d4RmAB7WkMrXAzZzqkhSdfJZ1oUHgm1vUQKDDtMWca5JJLrGqcjtFn4DCxNsDe",
  "key16": "4YQv15xnM7U5q4Xwo1y2Hf5rWzRwMaZJYxeSNBwkkKJQuT32njUCKG8iPEqY8AL38BgrBumVmrbsiSU9enR1w2z1",
  "key17": "cH53SeXXDjLfk6khrXQLZBzU3kQ9tMgPy6pVFBkVUVEF3EgE3ugfuvanvrStwqpXY6xuNtfS24K2L5gKihytkNX",
  "key18": "5CPYhN2JQZK1bLmbVztg1Us1nVknu9buEBf1yPcMXs1Ee5qgtiNnpV8Y7sPTemi2ncSVpLLsiMmpMq4PvneAngeW",
  "key19": "G2WotiBPWujPHWPjQeVLxhxFRNCs4WDhXY7AWyhfg6AvncxLiVJaY4Lg3nPE4xhjNiFXVvSq2qBWMj5SD5rv6cV",
  "key20": "234Y4goQxTfL1ELw3BPi6iW71T3uFhneJwbeuofVVWGdvFgxKfjMok4udBDxJJXn6Tjmhqo5f2KBaS6dVYWE4pEJ",
  "key21": "2Tjqw6jfzCeHqGHiasvCsbzRyNkgU8A9mAfcYVQp5WX62X834uTugkdu1u9QjggJashxaQHyJp5gvAfUXqHzfDRD",
  "key22": "36Hscu1ecJKtDcRZNMsM5p8U3p1XRnqvWbd3G5XkMKTcJms4Fr4HsFZu27dMqXKB9MdyWsKJZiWcuaTk3QTKBTxp",
  "key23": "35Epf516FQncJvEMBFRvsyUqaPoU9ecQp9MvsJpqYuybXMVQdMGvzX1JWkCXiP8d2nk3UB97Ero8j3bMPJMTCZka",
  "key24": "2KYNTvnT5cmLb7mSuyiuwJeE7xVw1oDQn6z3cJNmApVvp7uzC4SaEz54Epa3SuH2BLGt4hk3xmeg18NZjvZzeZfa",
  "key25": "4gy73YWFkHgAFcmPs8zSKCxCJ9tR3V3KJcVicvXebknKh8cT4q7r1jHAK8N2b87LuGAvpiVgtPKSi6Af6LP7X3hf",
  "key26": "4vBrvLGB2MKwNrxv1sJKEKd2zwUjrQZVLgQaha7m1WqhHQkdmyc6m1Utw21XcDtyK2UY2AnDJC4k5rnFurdFhVb4",
  "key27": "3eH7sENsovFx12mqfqUcTGPiNAQs1RdYwhARosvfr9KWwSsrrDGV2xyXnt1MmMGaS9o5EyibnJj2qQf6QYAgHDKy",
  "key28": "31wt1jqm7DjKou6c5iVJp1heEFmLLFaWqMgKQounSy9v3pWWQ8Yy9ZHKGH4yn9JumonjAVCDbMsdEngNUSWJk1yS",
  "key29": "4zazhgiqxkYQ7yZsZB3wV7w2oYCUK6na9rixQ7d3u13wUhafRo5AZPvupRcmHVEyPZg4kp8p15qGmQqvQ3DUKDUN",
  "key30": "49txC7u8WD1BtAV1TS8rt8v3jqjWAheaEch2MyTwAnpRFbRrB8AkaorHV2R7qPwhVbcc2SYLpt5HkwNRRTYP5egS",
  "key31": "3MUN6FvxxUjn4JJsX5q71F4TvWGXbBDjzPw1xLxzGr6vx4LDtvHfzjGf7Hvd2sGSmFUUWcsMRLki5LJMo6q5Avpy",
  "key32": "5edu41pRgp26A2YYz1Kuz58o56w9v7Pvc3sYzneaQkB7tUd4iewZX4PiFnF7xTs8pv6kp4JXdP56qCVe8YD5VPSB",
  "key33": "5AG8ieo6D8QkzcJznUwsfu3JjxgV2CuL866xWXcYH2ofayBU5Mvty1odf78ptrTjosi625qtKmMqmjeqWETZYCqS",
  "key34": "5YGtDvXSAoPswnkgkYk5u7y7vbhsVXFav6rTsXFRxDrrPBmS2fcSGizz4TU6zuWdRqndNTDQKWHmPNH6814wFeNy",
  "key35": "47QrFETM734xuWmMjFzF5KFzuE1QfthKwhLDgnmkpwfxfvURnZSWNjFwr2rNQxeoeVnvBer1PptXc74gmtht37ce",
  "key36": "4rKabCTQLXq3h3iYtrz8CyYPRNfxmpMNoetkYcjdWAggziHui5T7UvWXreUyZkZN1WgzMDbmHyWnUXPDodaUpxit"
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
