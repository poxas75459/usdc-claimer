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
    "5EZ1JDuh74L9orRNkY4h5Mdnbs8ESXYStBTx3tnp4kBMLYKPL2pWJa6PobprBHGKA2ni5Q976DbbN8NzqhqDECer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCAN5zZYN1XEZM2zwdm2gZU46mHFteNE78FHnLQ8EAJK2Czzh4LxCc4eJq71cBHKhLQXPwA73eervZGG9jZsBPD",
  "key1": "53nRy6MfgaFVSEkJWkzyrkpK9YNwXYSsxTnotAfVwiUi7o2xZYHNJqcChJXVATYMTtuRgSprFswFfT3MKR2bHHM5",
  "key2": "2GCNoonDstHwc7cdAQP1fscpNBoHcMK1j3vhWyijsNPrjmsb9WtReDkhiL1wp6hkXD1H6ZEipX4mELGJbTs8cHme",
  "key3": "55UhyEqupXbuRTwYbDXbqKqLGFgtMEvaW3TiLaw35GDBbpanZs5sTkt7ffnpFguJzp1BExxuZsmeMnN7d2BkDJJP",
  "key4": "43QyYJEKRN28Mdc5U4rCFaUTbGmtyTmpfYYyMteKDFxU4vaAYHeVdY1Y5ZTkiefHRHijsojBmSs9c8eW9HEdVRmr",
  "key5": "3jQc5WKbNkGHNGYpLsednKWLEDVGaBzXaVXLfkUnNU4ybbw1RP1YgW6XGopueH4soYM3upoYuNF3AtAPahA3Sdq2",
  "key6": "2Pc95NFHyaSKVufjHjgb9q4xgdWQesS9s6GdNgyBEfoDeBv8XqxnXU3oWqwiNruvVwCZ7mVJkDxJBLE2B1XifhZ6",
  "key7": "2FeJQGC8KqMxdLKaRYR8Jm3dgioNtdxc48VeVEHe3fEUq5fSuAwwVNSuGttkukBSZDsFdhKw3dzePtZqamdJZtBk",
  "key8": "5Y7Rp1RVf653PJSbio1MJiX49yWpbMpfWjtN637hW4WPooS48EqVL6J6w4fy1qneQNhWudMzLdfzoHkV62NoNr3d",
  "key9": "5b6WbfohagYwMVT67HKjT5T3wZTD7HUDL8VpP42ruFJufYTwh6ZaKXQrEynGg981Bf8wKxsU7fddqn9gJXXfbf8t",
  "key10": "BPGcNHb3Sdg6cT1phQaGkZTDsC7XmMR8t4ZtHdChcygdpfY6aXpQuhpt3zSW8LiRGjx84oYsFsmwMkLRtkDCkLr",
  "key11": "2WgmiQBmYhCcKbyhN8GEVjEw4jYgm6ND85fz4Xuz1X5YEzVTLVdseu1uw2qHkbJKBhdoqRMdaD3i4MbzNyVrjAN7",
  "key12": "anQ6iuAVrKWQQSpG755RMSnQRU42PzwoZbJs2dRgT1PYobVzhD7m9rY3zB2dFkB5vAojyzFkY4Tg7kAYRRxHNv9",
  "key13": "3ctVFbf3rfvURfnK3Sk8AEm8ByXrtetxxQZpPaY55iJ6fFc5DUgMExzDPUFJsz1nS4mzdox6j7nD7U313PbguZQG",
  "key14": "476QKJgmfYEAzihg8TAKJk2Vgv15yRkzoangMmakuUnCmn2tQeHge32yVVN6KC72332113JGJYgCRaCF5GnY3BRB",
  "key15": "2XE9UtYkRKjoTFf57QcyEYyFuQSdLKzLACzDzGo9gmirUQxJJ8zXjSE2ew3R7P4iWCVif1DqAJYmMLBYu5FuFoYv",
  "key16": "8nCx7UoaNNsvn1WWSKGLcQc8HyR9nAM1fiuFPv9xCjQhZHaUD7CkXyyDffz8b1iRbfQZyAmjPwVqXEeqj4oafBa",
  "key17": "2xqLYBZ7sXwnnU6jFxvWsVxCLXD9mCCDMVNUHrpJKh951C2ZikLn8TxyBASU7rVsMCJBPyi71Xtoa63HBeRc1rNn",
  "key18": "2sDcKKUigxSES1WEWgmMZRLQfABuBQqz2q6dtWCdT3uEMJGkhCi2oxu57gT3kEXrS5CcYp884xtQKc2dsKGNDtfu",
  "key19": "3NzyX5z3Ee4qdHv2abvcFrKRKQfdCp2UZk2jKnTGQbH5rxignpVj5U72fSbA6beWD7L11CzHUSrAfeWhaoK4HN4C",
  "key20": "58SLojZAhyf6dWAA11ykSWSiGJ8KD6B1C7JSmXEfqDHvMxWtR7ppQpCfwuJELNYZez2Ci6dmzK2ok3RkWabSiEtJ",
  "key21": "5GzB4EwrUyCLB5YfSoUFuCqEciEZSKj81q471rTUYDKub9DZ682deTo88rCS4jhiyhUwNnssEdaP4yJX9LEvUXwF",
  "key22": "52eRdCUGU2KocRDQoh51K38aLyT75Z15imALbhKSK342iBAXz1TsbSYk8B1bumBaV7tm2gzy1Uho2pCgMCa9qUuR",
  "key23": "3Bj8RVs7kPC2HNqEX7SH7JTEMCRxTNP9ctcGRgB3Fdh3fqe9qbcNThka1nE3r64Wpt2BjC4U2CCSHBBtyfnDkmsa",
  "key24": "3eetcoMrZA2DgiSd8xTmrpGDGfPMqfwFWLuNxiJ6yhS6kzHLdmLv3GMUTmLtQRbxXZzZdVY7xuPwddcGd9Lebp85",
  "key25": "4gMzcTtmukvEYzWwXcAdLooWjvYFUBXZJ3hDd3riHY9njXhs18KBW2LYCGHfzR94m7TBpoq8AQy6cA5uGMc2Cetg",
  "key26": "2HBDD9SPwn1DN8cR12YRsyc3zgjteBNenKLk2htCpwfPNNEue1xR767Dii9NowZPoDw7ttHk56MjbMRT98BqntAS",
  "key27": "B9e8Ja4rAKzFJ2BmqXp8oUaNGzV9gPxAECsYBFFdtUXrxemoTARDaCxsTQndgWTyxFqX81U7DG27ytikV6zuEG3",
  "key28": "5kuV2CyQHoELfXRQjcdqC1nz6sgVXQVzsmwQz2b5EMJmggAxNUqJ4L3Jb92B1nh7MRmKeogh3mF8eTstF83vyT1F",
  "key29": "5rUpMGwZpjMPNAVqUisEniN5pjJL4y4uPrsnrYcDzA3Ym6xgkTaSRyWkbtYSEbJ6CacrdK3qcEX3AZvMZMZW3wLt",
  "key30": "4MpQFXHMroqtvf4EfSxRusK4zGPBZbUkz5GfrwiUcmYPKmwR29j5K2xzvSj1ZoRgVNYKCW7uxT9z3LPrQEy4pdSa",
  "key31": "3iHxTRdhLNfprTht3SQVJCA9ua5rHCozVVfA1QE44g7qXKsxGyrkhVDGRdxP8eWXPiW5Nn4McrvNtfg34PaYMKeB",
  "key32": "5eVbwKPSdYwbhy8tCv7ePq2vESxMKGjnXsQfGMWMxkeeeEFLXZzqoEnSMqCaSTcUQtggkjYvDyLt3dDxBXCi1gbE",
  "key33": "4eLoPbzgXHs5rTqmLFzFRWEH2ab8kfuCY3dATWxgNrGREQnXU73xqWHMjmxmSam7CiRyqdX4wgJ3kWcVA71KwzxY",
  "key34": "28hWphAdbo6x1U1wCMZJZSUxXaPBZ5bWEM914vvmcH3usC1uh86v3H31X5j9B5EUEBU7bB2jg8qMWRG86bC74khf"
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
