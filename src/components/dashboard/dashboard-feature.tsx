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
    "2AWHX1EZPGU7jEG9Ub9R38JPMUmYFB5p1bd3AHvxf2zkbMnf7iy91ePp67htHxfWX29o7DNsNsEfftAhdwojvGP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Cg4bBp2BZ3FsMreqr17Ft2uHyo83koGT8RRxZTRCQtzSQJhqde4iA1ScaDqHEXduHaYSuZKXDgNdFY8964w6mS",
  "key1": "4NdA6qHZTqGA6cQCNfzoxriwiTwB156dixcAgg5HQo15Q6p1nU711TWij3XAEKffm3rJDU6QBzUeLitPCSRFF69j",
  "key2": "5zMYCVxWQWXVadU6LwtFJXdwxG9oQ64H33cGWyxGzEoHGGQbu3rSojUhx8vq7u7ZE5bimD3xdnE1X81g1TAuPF43",
  "key3": "Q7T5CnKhbhepgQQzfsSwXJ4Xksnv3dpgNjN2XNciTzxL5FVm9i91ZDL7pwD5p2u1sToWXQXhCrPfRTHaWKunFbt",
  "key4": "4t73DRGcQfooe5iYc4JbUVzECkKV5Hzzb1wvY8JmmocjGunAvCUsTs5mSYnkHsB3pD78ks79ZGBG9ACypRdaDX5m",
  "key5": "4qXJjBLTvX7tWB1nsRPKbTviTC3RngM5g3Yh7ri55P1KDf7WGWQx7KezqgfKtm4JVeN6qHXcyqkEcZF3pTsN1gPW",
  "key6": "2FR8HzzjEqxitZw5FYMAz8pwjbNErKZPK1JjFrUUVQT1B6vJVYs5t2HEkfVhqv6vZN7daS9BUbvBH4JuS3oQY3eV",
  "key7": "PaSLViNUeWDBd1Hj6RGycJJF9fxwCo91epQHmFyZxmNGUkcP8WrquPVQ5j6KHNpraJdYsTEz4pwvCx88H8Wwh5i",
  "key8": "4dPVAxVRMd8CX6LYMKQkpS67ZStf8wdsYBTzQ9k1yAENxaFe5G9Af1MBfWJhMLQbZGkkrsjGG98JEhENHAQ4iZgB",
  "key9": "5pzFyXXoAGzqVbBXt1WTJ4RatQu8w3WR6XfpDfvQyp9eZ5r8j3p75qxT21cPp1ZCJPdLn5aybL396cVmYuRjoMMW",
  "key10": "51yMCVGdzboYF4njqzCHqSmyis8fiuxyKmgki5UrxG46fJRLXbt21bc2M9zNyDJHLJ467W6RAkDbzqtZD9am4WHb",
  "key11": "2F4LUDo7YNMGNuXaapVsTCV3k55HeqjCpqCim7LBYFTFdhscKaT5Jd3TuR9NQ8SZ5pa8D6ac1TsEpFipa4Y4SUC2",
  "key12": "3BVGBShhE8npuYUXPPSdUsgRHayzURvG5kxhJkCxzniGqGfGKKp5yJufMy8AkeThgrqjVbezBt4CW75zH9BijNvu",
  "key13": "u3sodAxBVvpSUtLRtpUm6niLYjwhxbeucVTApSjZg9NY7opXxE74u9JK8gcw8iiip7tn6wdo5fAJpSwsS2Fij4H",
  "key14": "DYiG7RmpRmQWiasLseokTd1D3uX8rpZWcZ8WqYZg1RpuztJP9uYZGAgJ2cL3BvH5TuMrmn59uR48iDu5VCNVY2V",
  "key15": "ksJgyVwzXudL8QPrLHbNZam4U53KCeD1PsockrjoFAkJw1QPeVNcLrF9HHQtKfoEKMVNPkJb8dkYKnRBZdStyeW",
  "key16": "62jzC8k618ZGDbEPHMWpMuKeDqYxQZaAABQorsCFkbumFzfgAyQV6jKC2oHL3CzachLJW2JWb1cG4kXuf46zw1dJ",
  "key17": "2xY5uBERCK2KQdPDxFJdfmHvemBV6Toe7ZzP2WuWQMvzyJebmc2zvxMrZdR6WJc1cGHBsdKnRotqGPmaVGHZLzyw",
  "key18": "25QDUQZGz5XsHVfdMXishwAGPFrsR3otxf66woLHf5odLKuuQwzqdUp8qhw1GULbRAMoc5EFMiiiT3gG3133Vkdf",
  "key19": "VJdeGc2pSBQcVNJxkcxwCH7T7CB2fZDe9aTseXDmW8ExNNGAQTYQF11pZvB6eUZYsoibUs8DZwBKJG43YfnFB7a",
  "key20": "3nS5QiNjPAAx1FSro1QMmjQQ5bYEmNpNWQSCxsKyS6ym9YLGyLrq7U2RsBHX9fK8keTQcyZKq1xXdr6AuFNTb24b",
  "key21": "3Ccnhyw2RV7TXz1CR8kunAqmCBSRbsPtpS4XWSPpqrSVDeyJEkFDwQUuqmLhrCnUJX8ozkXzbd1QSiEFhFCZSrkM",
  "key22": "5krJwvtFjTMDMtPReY87jhsC634YLdvhT8ce95yVLFRK4Zi4SuxTjLojYfNMQaq3WpybX2JwCNp1Qci6sJsGeHnX",
  "key23": "oqwrRmKazefUyVCRJ4K4HtbF1up5bWPH34nRrSkpPDouXsXgzXGw6WcW7CGuSHyyDTk8B42VNVxWs31JCnCgRdh",
  "key24": "4sYMgUod1f2rUneWLCuSyCuqZEawuncQvDkhucuWzFNvcZ2djvtf21bc9SQroYmw53G3Qk5k4k2N82BsCtUuacbY",
  "key25": "2q2gcWcx8UUrTGrsBsBmJeXhhbwAqzPkwDekcFBAZQoxcGgrf79UpBxofm62g6TxoRoWp2SKEPxd51vYUuJRLteF",
  "key26": "5kCREh4fAKDncnw2P918rgU8tY51yss5atQdwjcddAtpQYSiYcmx7XJX19dgjfSzHQ7333ea7Y1fb8YpwRAGhhuF",
  "key27": "3JvmoXt9GKk855HnQ5tKPJz8JQWPEL5qFUc2rUiFiJer9L7M2iFHHkzWJnF5brDmoFAtyQEr47PJD6bMKhG8T3RF",
  "key28": "4WvTWdjtRDRPikiDv8i4eNVCyRtTrpsBXJy8DBBrcHwpRbqc6BcgNgTfUjRNTQzrXJQfp7TS361Sgu41PaE77aP6",
  "key29": "3r9GZuwuRqE2b7TWP2JbrgukZ3zNoZDxHvc6Rqq14rVDCR44mYwFZSkeau83fU99Lt5BkdhpGaXC11DTJqbE1dYW",
  "key30": "5uLFS1mg3YhABmrahobF4pvQsXHXHWEGkSvjcxwHn8Esv78unS3TGmPUzr2zQV6EiiwS1w5ihUwTSAQtArTCd5n2",
  "key31": "2AHyXxyfNQzXGnMXjtWzwFcNMN37cgF5A3UbiQaY3cP5S5ubyadX3viLX5EpCaNcDfMAdKFhieWEkFuwTyHB7hiH",
  "key32": "3RitAs7z5eHEXKBe3Py8sqaY645rJGNajvBC25AL3AyRwyDGe4PBY82tGDKqXEbgaZyowPfU96TCDvZRFjZ53sbY",
  "key33": "4z4xRbLSr55HNVrNufs45ivp79xiXKFqGbNoVBkQ9tmh91qBymsH9zhWTtTgGezxK73WzNtsxNzkXfFKtZ9a8kL5",
  "key34": "4YbNjBF611FbPHVHHdWtwVBMVoqhzNQuyL5ichx6UtMNzwnhZ39QqsGyMv55qv3fbs7KU4x9BNDhS8idKWsGmZKA",
  "key35": "3eGJmhK1UsE1cQRMMfLtHsNvt3nFjqnHawonurjMoWbhDr8Pg3dJCszm6KjhQd7rpn8cJWorNSJ1QwdZC4TB81yt",
  "key36": "5o5WkJMtyFBSJ4BWwZf3ptgBa8WM7mChw4iWnbUb6DdhXRV2ExGAHCQug7pUARmfx7xQcTdqL5VxoJM9LtrPVBt4",
  "key37": "2qYqSkdMeWkNi12ZAivakVAwyL6yAMoZwYxXvr1tiSc11zgYdUgj4QyjL8pn3zdwxfMiAgeNv2yxYoMXgKSuaNLH",
  "key38": "2FoNBUoAhcv8ECUum73Sczco6N4VfHyAoE28k12m4pHzo1Yzuf76QNnQrBXp78DdXj5v5gwAY65pTe9WVMJnzdL5",
  "key39": "KnWigTnAjpiGb8isYtrGRxpEJ14xGy8ofRs916rHxZ1jSJMMYCfCeSozD3J9cDma3Tqu42YfzVS3a9BqyiwLTJu",
  "key40": "XPTDGTfzsySdiBvQvNKzJuSmjFxsyuDwNfTZgEri3f56bfXeDgN9neQzJhWHMGkvNYotXeU7dbRa8j42i38b2TT",
  "key41": "pexYMB3omkkUF7chu66PJk9gtGvajoSTxVkrQRwW2fqNVba75LuXP99iNoygnkkn1aQ4HFYuHD1KqTKyoVr2257",
  "key42": "2H3bskTG5Vq832yMVtu5j4DBxRHZeUY7WfCngtjVMhiRosdZdNax43zUteEqT2auh5qoFvGF1poGWP7iYU9Pd4QX",
  "key43": "5EaLUNgqnYwkdzfBPtWhxo5fdC6GPXDoxNnstCtRpHPGULotLDqY65iaDpFgLtk5FGWgdPK1imHPZUrjBjRvNddZ",
  "key44": "4HqaxcHwDisSeVKPhJTsPyKfwnwghyYwfN2nNjmmYfZGDZePKjPnYA6fVBQebmSDA4D6YJQm3GaZppS2ndmEqJox",
  "key45": "4HUKg8vfLvtHs7AXLKyx3gftKhHmMzbnoU18HoWG3cBvgwzjxY9QWMH4XtA8kRanUJmJfkc6bck1sg1xGthnPLui",
  "key46": "4yGThKPPFEjU7VfFcd2yarXUfrzur6xtrWze98oEF8XPzVNKdxq1TH1V4GND6Xu1Tdm4xfLsBanwScjy7T29pQB8"
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
