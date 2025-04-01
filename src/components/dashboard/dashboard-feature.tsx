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
    "kXW2VSVaKtdHCiXrVb9q1vXeD481NimVRcnRdf6Pc4mtAC6sjRS3CNwNQpVSeyta9cjWvgaCo72E6PbkuerxQ3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4Ehkt1A5ShZupbYC8dJRpWFnv7pdcbXmVuxqmWYYoAubqRjELvf9UsDC4gPmsAArafVxhrXKQ1re35HuTjm9gy",
  "key1": "4hYdriiftxov59a6yKv2hzxnuFKWgvQ4e353gx7khrPXxFXG3eiqo4q3Fs6wkfEFB2oFmDAoS61L5gjY47yDxP1m",
  "key2": "5o3gHqi8uYE6XAsCa3fUamUW9oW8oXJWkFkTes99Qou55Rerav1BhhZTtxfygtEaow7Lpqinqy4dYm6Zkm5acStD",
  "key3": "37m1rpvqx26vq1sFj5ekfzp7zu1j9stbU4BFN64NcjC5fi2GwZWnQAScJLU68uxH3p4t6o7vqWRRc21BweNxmFpn",
  "key4": "4QhADB1dPonmixPmsS7HsxL6xVuj5Enu7endZwGofPaVAhq7j3KkGTVvdZcx33BvC3wo2yjVYduCZxuM5JiW4NiH",
  "key5": "44bZX924m8hhdUKntMfSrKDBhzpbZHjb6KVAkigdbgtqNik6scVbFrHkoPvTuSTkduNBPv6zmKnX4127nPiGyr9P",
  "key6": "aDKmr6tzXV8ZQzgR428YcaD8Lgrg93gox3yWrK4e9QfK94oupHqSpsfTf5Bg8fMgvQHPzRsuJt4wU5pQW2VQMcb",
  "key7": "MuGz7jssVi9WAboirAyNcvnujJmG8VjZuAuFCjhJpQx1qoLVq3GFoYnHXr6aH6RxY5YGsnFQLBiQ5DYGwzRsruw",
  "key8": "kZUSJ4VcNRqEp8yjGH6SGaZYnueWbBwnPr9fTf4hzuZu3sKCLNNayY8qnQM1EVtNXhPi4RRTwxFWEjheDQdHsWP",
  "key9": "4Y39oF1qni2ZiBSbJmMVQyjJiNFZ9HSJ6aJ4WnqyPPQq2UsqsXKiEbAZt4RyV2bviejYJ7rbXNSqSPyXpc4a5Ltm",
  "key10": "4C4EtjPgYvyYu5jYfCdR38mPuTSAimQPtkHCWnM93RGNazv6DHPLWmmJM7Jg4zcLvSJkPVaMytB3fUZHtkXiarrr",
  "key11": "3CRgc2Zve1N71KiJvN4rPaTnPU9kFWNk18oihiQSVuGykrSdckbz577R8B6wo7imUfyqtM4a7skYwqRFtB4P8Ppw",
  "key12": "3w8gBa3TQDoeFEoYcxqah2kTPCqsekbjGGMhDPax79DFZF9NQDm61trVm6A3Q4XR9dqmuyYWNtUUHSyXb3dLUCH6",
  "key13": "7M5yk3NyaAeoHnQAdLUdaHERukwMXyHw2mbxjszFqNRtGZ5D3vx7fr92s8Bhr2EMxA5BTvspuaN1vS1RRU2uvdc",
  "key14": "41MyePZyXR76YAq9C1D3PbkgTDKXpUeoDfvstDm1GhV4FQcsbVLGiCgJUw21FWnKuEe2f8eREYiYh59UXcEWA355",
  "key15": "4eQKiWufqLpDF1jditgYa6FfJ6rd79va6d1tTErRQ754DeQkzxr4J7bgZ7cvsR5boUfE932NMZsTYxooNvGcEWwB",
  "key16": "2fWEn7A56YxqCKsB5xKpNsj1eQR9k5qVjtw5n9E41wEeir9acKwSFisnN1wcLbJaFG2w9pPNiyLrbvbKM61GJJe6",
  "key17": "5t612YpNVa9juwWrFJNQhMh8Htcj3cTA9Sfr5buPBrGHGgXFLK4XLjbqhUxTXzXrjMK8qydsQktn2uMyiFPEqpAg",
  "key18": "3nGE8pgGaAMXhFSG6oSi2YWSeFNCPiY7HNyfWGuWSi5dtQazFMbD2Vp2qxYKuMELCV6yvhe45HDAov4wFqZGQbhi",
  "key19": "4LFAmEzykyWkXHkRPJYdoHiiS9C9VqryGajBNd8yPK17cvxhQ17XhGTMcZgBD24v6w97gKjgDk9ZVsnc3mcQyjUh",
  "key20": "qoXHrT38W7ANnRxYBX5q8WDkJB3ZevSLudqAMuH4szRmeVv9kHWnZnNougmy91V8AhEKddyWW3SmmFZxq3V8YTw",
  "key21": "2Whri32aYkUt61VfV4Ss8etwJpE6AMbx4ypbK17CJ4soEnTUgYrD5kpyNdHhvoXEVRN1NjrzGbLKMq2N8bhrVj7F",
  "key22": "3g4cmM1p827zG99YSnaisspQXbv7AoYB61fEJMpd92QAWpeghoMU9j7wtr99NMZm9zdAT1v3arFZvHj2izo93o47",
  "key23": "47iw9wCrC6FuixuPYxS71ikJw7xVnczWRPVSBc2fZuF3a9JpCbK6Z7PmAqZNXhD2MexSSZ9GjVtAJHYPjfjyj53C",
  "key24": "4vZmDF5zcFrL2PvVvm69WSQFwHA2YLowWb5cMiinUDUiJLEbjBDdisumQWW52BfN4ZM31VfuJ35V4d6n8dfmeZvc",
  "key25": "5Uj7yZojzi4ph8FGPcXCLHwMQibyDv5wsU6vqqizWegKZkGeTnBTZHa4Sv714skNqp8k9XijQZdeMnZ2NXcKxxT7",
  "key26": "qf3LJuXjgpPVjvN78hCpiGMSn3g5tmt7CAJXJ4MoenHMUAgADTHJxZTqatP39eZzfpyUtdWd26nreJpWAxEDjyN",
  "key27": "tr4ZyiJ6dk2qzTgVB42dk52n6qCDgqgiCvTsNpce9QiNowNm3yQFx3W85A56tnudnbP9jACH4PPBcHcSuNZNGyG",
  "key28": "nEDsPtpEAy6nmYSqvnm63RjmPRBHVkBj92VJpov13pYh5MdnayFsyPsEtZMXpwGkLDQjTtJHiiqVXuG1Th46gtF",
  "key29": "2KzuQ8tXhG5NgpsCo4vnoEFE5XLZ1c4j6GerSjmgck9e1DiQ73hvAaCtihG3MWKZe8bvvfJvrUZVmW9VVhEAKrUJ",
  "key30": "4LFhKaji2ZGVZXcgTmo9UehySmKEHVZFDzJJ5KLE7dMvdNfbPGqy99BTyRfTKr25J3P4P45wJBcPzXYSRLRyEMJT",
  "key31": "2Xd7XQbtAFPGRXYNhTCantWBNowHksDuT5W9T9xwnGz5JyFDBnEzG9a7PYechzie6hhtGNeHdrAyZeTLHJhXgAxj",
  "key32": "5JsSWtABonRMFcRdZvwASZzuGuXyDrwKBbzM2zcGotAZjJKk2oDp46TNziExYPx78JmDGrHTeQLcY2MtwePtduYi",
  "key33": "3HM3LWPkpVHDsW4JtwbS6maA3aoq4S4C6RMUmRTVVUc7CU56QZ3Pj3bXYmCkF2V3KUNY8mnn65D7rSAmaQ2paVrz",
  "key34": "4LcEosJi5EqR5ocL99h3eYFFuBvxjqayLaPLWDb1B1auXuGYjdz4EHrsWDtDkWKyXA8az4BMdPxd3LNRqoNwUBFi",
  "key35": "4nWSKKqYWDAL4ufdQnjEFV1udAmtPGxeWaKZtQRwF9EdvbTnTKGLuLTJF2A8BugnmKpUMUvbTjLh4A8GTbPbsWBc",
  "key36": "RxGPBPbcneuRHZoUnvWkw9QtA98bPEQwpaFJr5TTVaHxhH25XG1GiV9X5MJjUS24G6dF3evJbpgMSHeWP6X6R3n",
  "key37": "3szc82XaiSyBrTSnyC8NUJrm8APwFes3kAMbB4QaGiYHwsFF8ydXQDbyZHoV3i9LgXRXdK3N1T4R9WCVyczhLiE6",
  "key38": "yzGW6V2Q2D9oCP38y9q9qC2ZBnyF3WLBGoHW5NabeFhQYBhEE6KNMVFm4WXZc9NKyNk7F9xK4xZGiYGiYaMnwMT",
  "key39": "5PJDfcNptKizYGN5A82r2vsBMFytPkDN6Wemho3dBeYuUfU82UUxgVCb2nME4wsiv6j19oW3bSHGdcLLSqzqizjZ",
  "key40": "QB7Ar27ejCRLpcLAWNwL7ua9KskAuGPiWhLN3a41ai1zrFLj2AGUdiVxKZuMcbKTtiMUMizoc1XvMoHCasMJCEC",
  "key41": "dWLWomfDT9rJZV2oSRTTX98qeh94cQARc2RswHTDcdNAt8M74pXiFg9ej1DWUNaMDusUnKptqVjJLSqb6vXtQWF"
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
