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
    "2MUePeJ7uq1FaphGtTQ2Boy3AV7nqodtSaeogZmWsb3vUjFbF9izopyf6139Yo2ZpmmczaF8QTkBLka2xn4FbCGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrkbsYweeXdJ8GAUh4VSGu5Fy3yKgHcV3YB4WWBN89nuG2gejDhJV7vt331NMkGrLk44TftyLjfFsWYWahoYCJK",
  "key1": "4Y83g11cxz97Q97Tqt8H6yoHSd3jgvTmSw6UTS8i6ty8Bp8JqoBbxJvJw9tf8JnGGa1GxBhwZB952htfpGFPsdgb",
  "key2": "4XaA5HDkamXj3rgTFzw82U555uA18VEHWNauwij3k9xqzcFrHS7rqie9ff9X1YUen2eHHoPWXcSu41udsHn5qdFw",
  "key3": "CodtPrjb6QmivZ6zqtL6FevomgDpRMXK8h1hFGGXHdaNgfgYo9hZsyAqfjwbDiQY3nzcKNw76ks9Ufz2XBDEBVk",
  "key4": "5ioq1LCc83UaYb25846U6XzzHCQU1C3CK8q5goW5vGFfJKVnwTHsvDe4XNSPH6ZCeVWT73aQwBy6fxvz2wgd5Qn8",
  "key5": "24doV7y94k6RpdsLbruksz6ptTaeopbPae6VQCuhBrnMLzq4HLwvb2JtWs9M6AMxJ97PPjuZyRisB8AMuQj4o65o",
  "key6": "Hh3KWyaAsJWDUVSaK65JwsJwAnEmciKBhgjgo4VDQxt9WWNzHsvp81X6j9PfVwznjnPEXxuNztg6MhwpCkHeWu2",
  "key7": "3fYnZS3J1dkuG4YPByu9kNNGKo4TGLiqsu3PrMxVx3EZiCVS9uV44b92AAbadNR3a959zQnyZzYZtaDFs9xYedkV",
  "key8": "3PTKoz9WjCZ7mcdGD6ReDhrGu3tTxLnv48Y928twgtkzx6rW44Lfb2VaRS882Lx7qRKSVS763wcYLyDLBt2GwRct",
  "key9": "kGpc6QDU57fpZHSj9cYz1avTFrj3MWDvbe3ZQBdyv4w8UXzo1JvyAG9zAg66khdANdzTWrYY7MpYKUkNUqyxYeb",
  "key10": "FiPAuvWYXP8FR8q8xvMNQw5q4Lh492C1TVh537PkPf3DihkEHfjtvRRERsvKqbtCSpHYtxUKt52XvmDMUYEewVE",
  "key11": "4zKm7ZhwNmcqjhTLAmmRUEbo7btMGYPVTgwV3Jh6U6FM1Ca98XHHhTJYVGvvCxicp1JFfgXe4y6tRyfEFCBkj8Eo",
  "key12": "3urVAP3gTiMnB79bZbi2wuspcFuhCM2gLGPFGtS1WWK5bNecrneMKoxBobQZfwVRqbSYUXUa4g76PSwebX2KrUX8",
  "key13": "4CrbyK1JFRLESgJNbqoPHLjg5mJibizQHC1fBJMYzJoYKuw22GwAUoLf2gTHG85rZTXxLJf7Hasx9hPs9GmBgGz5",
  "key14": "5GFS8NqXbY3jBL8DSdyABsSP1X6xX9mpUs1xGPSXGp5jKDdUwT6Yp4pCQyn4fk7nFuncjyxMo6EZX3FdofkQ9Ftg",
  "key15": "411KAqC9chrdpZitFrpDpLccFYaFtUgzvhX2yAPgNufB73BCSB3GWqQJ4Pvn4aqgddmZDx769wybQPNh39jK1SF3",
  "key16": "4ES3qfN7eS912DD1CWEohtjXWwHM2VE1V1KAMzSQMTmQCH6Mr6F3hAbhBdzQR3Y3q21qwk5iakgQz1rxMEZK3jB9",
  "key17": "5x7mwjXvPqCUbEUSwtzx5QEbmFB5BLTKonoDWaHAfrVDv9FHdeXfHGVSkENJwnbW56vj3zzLfUqfamAFazCBRwji",
  "key18": "2mufN68YM4oK83r5veYySS2Z6M1oWsHZxpWLGbrMNUDj6EYrnzKkBDayEgHoJpdxSNS3juWi9z4iBsUzLYVXX1K8",
  "key19": "52hKB6QSPyQA5Q32wJpFU2wV4nrJCExSo6Yub9pr4FVXpCWBGtEEvLLha4kLnGMwQ5B5Y5RjmCmbMDZTNTsqDp55",
  "key20": "dcx5s6uGxUxRgVBjrV3aByUgWZdaemUQUpCHdh8Lk6Q7bt1gEkVk628T25LcZsqUS5YKRedDQ4kPGmS4wDwkeVE",
  "key21": "58KWhpyhY1cbZC8CH5x2yCPrMWHePr6ci7S759Fr9W4imVv6iDE4HXBTxrCrTuZmdShSMbwVKBxQpEq9GRQ6qq8M",
  "key22": "jY7XafLEKnqqe3rCeYjawjLekgiyqcucTTkHMzJ6TTtbnvNs2mVYJdTNTdxnHRfjKRyZF2FU1Nod161NbRSUvSZ",
  "key23": "62EGqQ8YxCgWSoY2iHYbk2UKC7JC325NJDF5eMUkEicYYhazUuDrybyZw6X7JdUiSP5MPSDvJ1x786Kr4LhfP7kM",
  "key24": "5ft5eAy4CXtS3f7HQuSafchGpSUq8nkNbqGBrPBYSmPBKciSpZJoVB2Ae6643zuquf4DLt66f1cKiHGgJXLfVHt1",
  "key25": "2rF6oy2qCXSXqD5c6pCNsBzPFnEZ4EaJVM9DSfQD9DQgXx5RFF728rrww12PG3NUYXBKDXJ4REExGYx8medQJddv",
  "key26": "5mZQf8g8ezp4juiZDdFyUu7gwHT12jiGWqzV1zDeMtfevH1CNMvWtbn8wjLqdfM1m2TUiRZ777xXXvvfHD22TYdY",
  "key27": "3JGgSjLQ2VEGCrqNquHswk4SREFkEL8kCgzpoi4sQePu6kBuv87NoiwiNsiuR1HV3x7wRnKoKrU8Knr5eGi77TED",
  "key28": "3DR3ew7GbPxHQLa1Hi5pRxtTo3ycxVh82Z9ZZUXjiSFHSSGabBnFDDCrBTdnuaagHuefJwNB5cs5AVTFusF1fgCy",
  "key29": "3uCPip4tChTFUxWN33iZm48Jhy4Wfm3nY6Rx1UDGqk8npRGu5Kz3WLUPGxHQmuHEShGcSTewSJwZahK3TCzZGqhA",
  "key30": "2fg7CWtdkhkFvbBhGz5ZRBdRJ3cCXASURo7fyFVqXNFDXjLS4tEDpeJXiA1EZE4hhV1UktkVAcfr4VpqSVmAFB5K",
  "key31": "LPEHMMqMkw9zej8TAV4f3qFWeyu51hPge2JwBruDZaK41nKreSgz2ZruXpxVaxUe3LwJ3uw4a5nKA6S19urfVc4",
  "key32": "4BKcMhZuPCXq1PLTMGy1aZTsirQcqVAyVXhzMvxhMPy1Cbj3sXL9mYiyDz581MnuH8gsvgDgRz9uFhucvRTefvVt",
  "key33": "4muARvQKQd3rCXFCrWMfU5hJafKiRqxjdjvKZSkJGqcU37M92yAUNwotKW3chhrgdrgV7MN7wjGsvERTHNGT3pp2",
  "key34": "3J1mtdJpmTHgyAxVPyQPchqEpTEAFz2pxFys2ccWabsR1kJiiwBLhYu2UDertYcrGGY1GKANBnPQMxi2zC9vS49X",
  "key35": "3PX9HHS8V2n7AA1qxHbtrrWRRgNEAtQb8Jo1xPyA2BEf5viQBPywVQd4RDCeBF2dzcBGQG1FcAjf9ikchqF5sw9e",
  "key36": "2ce1URNrFfFjppisHQ77mRzb94qFJKdWVujRzFdg3GfoUaJ4RB3dAcMuer295nG2HVPzKBdF8fNYa8hUYeEka8TT",
  "key37": "4oEhVvKHxWb8zFnQmAZu6KALSCCt2cHZTWgnVwE6CPMqqD5ty7HNMrq5tWp278ZWTLBBDXGtoTaGaVZCy2hQ61Ro",
  "key38": "5HbipR9ouywYncKtG2o47S6V1TYikYVdynqRv9kk7Soc7kJFE56UwnPvW5AyWt3ghhwfzkwMGaz6bXEnRJ8R7PLB",
  "key39": "3edzxb7cKRBAJ6WSr7vNxUoyQNCyMS4q9b6dpC7J2n27N3xXcqQPMSLHqXpUFNzCh8AFm77RjKUZvQj4cJf276bD",
  "key40": "5ERmQPx5Ac1VmsHHNV8xBvNBT7ZgG8HQF1DxaSYCSmzoYioyHHAFCHwXRc8625E3LqyBGBciMwp4MH8WarRKVKTZ",
  "key41": "4M2i5Pw6gCaVG9CN8WcxocM7NeTGBMv2YXHsSXKrrUBdtWWadhfDwysjtW1dMjpWzwTiyRj9EkcuRUHfgmVUFFKK",
  "key42": "BtS5TmE3RwTTDSmpSfEb68i7ai7C5D6XMdzXcch6NHMo5VxxaQn9hFJ6J3fmt6kY9x1ntjoKzbbJGFwosdciaTz"
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
