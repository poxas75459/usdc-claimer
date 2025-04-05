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
    "2xErY8zKtaLiuHsG6fjPB55QD2vboaZcDdc5oFWngHBsQ1yeNKMhRNwBTwoePYf8qSouEEVfaub5AypEnHkivkNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCHTaXCFHCxn9wKsJssmekMkoZ3nKutmT34fGHNbwt4deuqrJndB1ZWk9sZzFxK2Pi29tE68xFEbmFeNfVj7CsN",
  "key1": "4dE5rFbqqDXr8QpM87rCtse4r7imM9d4AzbXXX5Xj1G3VANq6uhuubD769KKV1FJKPLYAp5ywxrPoCXtCzyDs4Fc",
  "key2": "37mL2u9ytuP4UykBpF69Jd1EwwL59PvvRVwBCuepdKySuRFxrAfNjLbi8ssDGUm1pttX9GPu6yjoVAg4D5xTybwm",
  "key3": "5RP8y45SvNy9zoAvxzdWhpNvh1Pr6r7aBnyMCnihz27NyRoHhD7jGwyT2GS9tESu2vxhSvEPi5RpENxCDDqBKJ4Y",
  "key4": "5FRgupFA8fPh43tVRG5u7fXdd7z8oCLeKmtFHgKDRzqeVeKAH4NZHAA9bnjJZekuUdbbVdziPTg3SnrzTcEBJCcm",
  "key5": "iTUPii4265VFyJQ5tvByG5YvvJQDu5D3q9dbfZ5jcjctq5Uo2YKPXVmKA9aMhbeZ2b6uZHrBh1eMPDuUvYKAuY9",
  "key6": "25e9RkrS3f9ZM9YLoQQ1HEubrdaeha1GiPdUQKH8P7aSZdYEFA6dJ8gmm1waoMv5x2Z4whTFj8zjMh3kdh9s4eqj",
  "key7": "5vApT9cXVRf5PKxX8eMbfzJWzwcoDyxfCP8hmro7f6owNwuLWJ1N58SKHXY8x1P5Xo99s85Qr5Nyxs8LpjP7tS4b",
  "key8": "RJPBBanxVSkULqBjuA6So2o1AqbNvmCW1Fgt22MNvTZmbm1ZVvjo4B1cWfeNzkrK9q95zkTtYWLozYd3wTuyNrj",
  "key9": "2rtq9zkfRQ78E2B1PFdd47i755VG1QVzYUwjXX3mkJf4PuTNA8pRYGfGtRoX17rNfxtdRJYghas9dstyX5wzuixH",
  "key10": "2JKyCvDx83MVKwroUq7TfjWwHpP3Cweo872Mad7wrJA9twhW6Kr8bVePwxvFCZmQQ5y6c22ivo6EGMUR7MXpQCyr",
  "key11": "Xx4KYNavc6p7iPCK87qZA26DXz3DugJf6E4SkbdFGEzFN3Y3tLMUkWPhvWraeBRRTu3wdcZdd6YVUgbC6iJgGZ6",
  "key12": "H33b6BALbrQkrSogVWJnzJKLX9seEbuXmQzLLT4nmGXNL214Cz3QrPGQvD7dPkuxbhjzeZUqm2JJTcU579gcB3b",
  "key13": "HE4F2isTSMo4uttaDmeAJUrDgqiXkEcPy3QovRSSm3Ki3wgNoBivbHek5C2fWfS4WZ3hAh6fJfYrssbp7njfCHS",
  "key14": "5JNig9xN6Rv8FVgLxmpGkqzbVN1GGtXiFeVJLUJJB5941D9aZNgTXZKPDKJCAsLYE73P5y7difksr7sZD31QpMbn",
  "key15": "2xJsmcqf6ysjKp2MBJnmiWH4DQkd4KbWCpEp84awSkdirMvxYB6gumGhksfNQ2VuUPvJUzpcaBL5YmfnwfKg2hoV",
  "key16": "4pdycbPnsbGGBQvq4GsxD2yfKeDZ7tN6VhCZuGGgxKo6ema9UZRhjXaYzn9fKSpLYZkNhYDbuDkewHzmUzU6qiJX",
  "key17": "35Zmwe5eeVhnJELg8NEWdVwpGr42dAkheh36Hgxg7ou76SjYNB1BiuxU54Kq8iMKWjRm763RH7CA9hAcrfRFmRhy",
  "key18": "23c1HEp4GrY1oM5BeZaLv4oxPmezpCEjxdySdXDFNB9nbQBUnrWkJQjXzMYqfSCvhpn6seaKRh13n1sMifCAvCrk",
  "key19": "2CgyQdrTdMSsTf2z27dd1rvmgM3hVSJE4TZyywaVAqzXkPPJWYnRCVTK18P4Ce14dJdksVVt8rv84jydtXeVzCbX",
  "key20": "5WeG64wzCKniWJCTBq83X8E62sRwxK88JjntvAd2GAF9qPinhVbBpZryqcF5v9jFRz5ppzDgwULiXT3fuZopm56m",
  "key21": "5wXr38uEqMahaNS5tvAC2QXLKjABmRuQaq5EQ9TsPgBrDaqP36ukULVfEc1RiQjWALJhZA5fmp3nqxhZhUdAxnkz",
  "key22": "5a6GC84qBc1ytEXHY7JSYrdy8iexVDuo3m1RzPZpNExCrRnfUaN6CoefDbbR2PTDmzBXs4DMug82Z7sYyNgwPFZS",
  "key23": "5cbo5fy56TAfHeaTkDPU6BgoW3T9cEPmig8tTqZRmqevg1Vz4ckj4yV9csxY8DyJDCZCBFMMYgJKKq4K7f3hNPZs",
  "key24": "2mEdosbCRUGccmPuDyx3qrX6DafKfccvqsC1Z5uDRBKQxGuxhoBY66c76HnBijdYWmbjPfvpTTj1hWPV1Bx5ABjn",
  "key25": "3tqAVRPd8VfLuB8nHsJY8tTuPM6Xc4D8h6wXbtEwzECnqdSgp4SsMT1ob8Cm2Pb8RaB5idGNAWdvoEphiSFdJdpb",
  "key26": "4CkowpDxCZ6VoVjDr4VFaBc3aPgAwVVP3A4e6WFz9AKXji2fppZd1VXC8ScXHNfpr1uU4m7rwEEKDoRGSa6GbYkN"
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
