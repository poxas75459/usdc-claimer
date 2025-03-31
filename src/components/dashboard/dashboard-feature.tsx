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
    "53ZSdYcYuJ46YbhHTmUtq9vU7MspT5wj7b7pfdsn3LjJtS7kaGz1B6ZRJHPaFG8QcSXxSVq3sk8qdBV5nJ1S7fX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwSYYLiMicv5LAZn7Ka5vdsPhvYErqR1DX7AJXiXDWF27sNiuy7WgWTtnbENr1AEHpyVaLpPPn1ivcDRBy3vxWS",
  "key1": "4wWD2m7uMpuwx6Z43V2e7jp6NbfntSWnDjTYeZaTmCuMT76kUKFGBCzu6ziT7XcLRDn3J6ZVZoD2iudrUwZ9DJbf",
  "key2": "2JTERcFVZtQeFASLPLZ4xiSPho8CzyAf9ZpdER8L1Qa2D2jPCnsghYMswURHHdrJ3Ew8fGZPUrXsQH6LPCxjoHYk",
  "key3": "2G6YademiBU9XW94UrExDJ99xBCWYhd7231pKTBCi6pgoP5uaL5Ppi4Fgqq32HwBr75PBqrmWji3GZF5auRJa3HF",
  "key4": "3ZNddbhEd7z14M2UffaxeEa468pjSpGsTkCY3KrmggXqdrMEnL8yUcYh4xDDPNAE9BK8ByBEFthfLW2rmLXJ45hk",
  "key5": "51AWpxBYHwYikAYZJ6S4rhmp5FoX65EqyzK8DCkeJnuMbmCXmNf3HPtnJ6MWtPzcBcM9ocuJynUvQYJuKwtfqoA8",
  "key6": "5arKF7dpD16tqaeizfSr1HUn15LrQPdnYxCvz373EDLi5EEuyLdEgFcRb5NnuavdZB15CRD5rdKrXJGD7S4ZnW4X",
  "key7": "ow4T8TyY67GHEuUFmtXEw6Mgjis1Q8zPwxp3KFrHRt3aMT3iGM3YNzWd5hXB7yaLhf7YPPdAKvpbJtLnt6JWZ8W",
  "key8": "gKVQFY4SsMfDwJ5W8P9e8vXjJyvatwFG8oWDvq4DNsCT8NkDwh2S57ughSbQRSTQNMoWqem8xhoXkGAT6UtcWD6",
  "key9": "2SCVmN4Dyr74gcHsChikgYJQt7KyoigRVykYpAsZcZCV5yfgGku1tZsFhTV3A3GRMm2MA1WRoR4AMZVL6Miye9Tc",
  "key10": "4FGQ7P25xFnymHdCJAMaBDWYhRmx8bwqkqFStaH8RxQCpDhfDfYiPWiSJC8raBaHAKDWUWsYKMjP8G83omPqeLZX",
  "key11": "uLpdP4Vnh4pjZ876HDquWPP4gLoiK21h9kYBdmGKtBHxAGgqUdrFdrxLqkMAwM7xkfddadJ68a3nL9bbszEESy6",
  "key12": "4LWowmXWXnVUeyLDjt5W9wYmNG3ywCZvc2CpTuifGoBZATdCcbT7QNfmCpct9oEXNRLdE9ZzMGe5vNdHLJXNngZD",
  "key13": "248ZgzyJh8Y6A9WWADiNLYQU789yE2hL2RmZ8mnbiqkNgUWdMYHMx269mPn3enGXjEJqj7wBn9QHbNfHYZADMVV8",
  "key14": "24EMZSGq7aQ6oheP7iXkJaH2QuE7Rz27oxVuuvjdQ6Lt8E8jbXTiqaMnFyYT1axLuDJgis5kFRhZg6u3fHh2b5zE",
  "key15": "33WoGkJ3WADcnFwJMJCLDAoZtJZgRyLkcBnkQiqdejVhrX4vw6CYF58FYSc2UNR5njPwD3JBB2BJXkUpwfRMJsGD",
  "key16": "3owwa3PTC8Q9anuFh7TqgeGwS7UKyJdDtt1XcMeeK4QdLNfjEsfLexD7XnexrGWUgjv3N3TqVdaWAoijSVzbxKQD",
  "key17": "2Fkd76xWv9ZbQ59u9KS5Qv3aGk8sdTrFDTrWUnH9Yo7U5G9CQW1BfgbZhoWx2aq55ykfZ2SqGHmg9n3j9F7aDqz6",
  "key18": "3cVxCPNTha922fjFdUodwHs383vuT47UTSPfJsTprCpryFtTbJAqi2kre53VgdjTQnVgDGAgUicYyoM4kPnEvAQJ",
  "key19": "2V9NLfv86i5mVS88pqNbpoGLkUJ7RnHisf9DLrbfvWkfg2GSmzX4pBTKN7aViufSvnnZTKhAShKNM5tNSCHkJNCh",
  "key20": "5b2Kn5dG1okgmKL2YFny4n1XpwBX8MmcAD4ZLWUqfdLmj7m3w18WxP1LTQfRxUMCLsYDpHvj1niDk7GNjxmLLyf4",
  "key21": "ksmTV2aiXq4EnWRoEgYXwtA2z2qjryMDeyfA5LPdcYUvZvAJNJeARsyfhNMyvgVgz6y7AkQr4xe4zeh2fxmfa4y",
  "key22": "4HaUyBvxfsfo6MAaWwahYTUscgVPGjZZjAdK4KdH8brBxNGiumtAHjF1WUYiUhnUdgSydab3pqdMD7GsxrE855uh",
  "key23": "5rTsCMkcfFsVDyWG9TrUyq1aQT1BUPQjGQHsSBq6KEzWr52qNX2J6iZd8tVErPizrcNreCuTffpPuNuxBPZcypbY",
  "key24": "8VWydSGmyfpSR3yug9pcpNj3mMTM8FxcdSMsrEPEpFJAA5Zywe9qp9zcvDo3McHwSyLJm1rNsLS8H1mqSZ2ytq1",
  "key25": "3pCEn4Mw5G423HHcwgCC3R9XesybsJhcx7gLik9kou7JqmwiJjHAULcxTTCR7PzRU9kb5fvNCYeU6dyRPtX4YKVy",
  "key26": "2z2gpbZwruaW7CyiL5xDLtwZpZ2RekXcNqzmNuzwsqKcisJQHnFfQeiJaCkCCFfP1gPEyDPepXN9A9hwZLdYdKun",
  "key27": "3LhSVF6PK8qjgrGSK7QRJDDqAZfeVqJzVTXpbuebopBGpCb784WosLSGTHW6dfF8ETmEXhdHJgjKGpsR4mdv4ctU",
  "key28": "5RoCYzXiNXJACaqvqhQscRXVyH6t6KNZ9kYky2XZfxaDcqEf8yewDrDAHU8CLqW9djcEwG8KAhpytR4v6GtKvPDP",
  "key29": "EqVCaSmhJ9KieriokHqu8KhrkaPTQtYXXDvptJdd7gWzcPk6dzLk9Vz2pW71R4nLMjhYua2xvS2MB8fcWQtv92b",
  "key30": "3YgGAFJBigokW7eabkfX88wp6FrQqe7qfrqTgKgWv3Q4XyNNw8NWQbcxncqT7iudsEQnijpqbuZnENpbuN3vbDKc",
  "key31": "3761BGT62ah2JNhpfZSwZsfFqru9xvmacigxTT5B658F8HrS7ZWyH33JAs5nbRMvKAoX6PZiQZ4ah98X61xaReNf",
  "key32": "4HjQrdyTDUxPRZWXYKGoJMt5qWyAY9CuCQz6BmWQDMxxaZtSwKmvcmjZ68oxKNm59hXUCTWfvck2LXep94SPtSJ6",
  "key33": "5WuwF3VzfdU1uqkKcg2DLtTNEnujPsZrX9gUb1iNroxnmabJ8JUJJNmGCZ5WNfduvDQRsZm7d5MQu1otem7yVYay",
  "key34": "3afRPUjgGF5JWRtqs2Y2gWTHFcw7ouGWT7oegtyq9twJjZ9dTSzsjGiGMiKcYtmGJdZc1kgXdkXv4JBeAg9XbRye",
  "key35": "3uMKZM7oe12PTWhFbug2w7RoC31M582ToxyuGB2RM8zKttzznR5HsUfkVfRHj4hpgAT1ShCbmcsyUZEoTVUb23b",
  "key36": "HpMiXb7bp45MJwSh1UMLF3gsStpawPxWXpyaNEuRy2YDGDNsBA6wqkGAtQFduJhMJkjn65VhQuEejiPk9uNw7UY",
  "key37": "4kWxQ8CH4qY9UMnM1oLDCRn4FhBJp2XaqLDobELkP5v3pM9qS3jGdhtYzXtRU6W1jutFaGWB7mqJgdRE83t4tLu5",
  "key38": "2EnL23ieTFgKnKUpuECXfqxZdzZ6ghtEu9Tu5MwWtwpqy4iQsK4UnQLihfdABDvnKLJCQYcaUhttAMbULrQa9LKN",
  "key39": "3eyhAzD789M4p6ANWeMDBeUiCqxf6LopXuN8mipKanQskcjrNpAZc2qtgcBuQ76Lo7U2RHD3m3TJoAEy2FrWjxxJ",
  "key40": "4jxTSUUjtnBK9RtR2e3YQjKf9fNNNozVLqEhDHswM7K94rnBEJ3H8FMLh4LULvCaocsWRvaAVCfzGNcbPivf31rB",
  "key41": "4Gs5jwLTrxscocav9ukcXiJeBKxdRvFybBx294QEz67rLvFa18qAcWbPkf8tCZKGQq6Tc3F8XGTvfDgJMzRNaCVP",
  "key42": "3gi6qqMdspmvNrhoQSmUMUWKezJpQSEd3iNmK1FEcAGxTPWvUPGwXAJW3kyVw9hy73LDLCcv32VTnEfPJ78wEqSD",
  "key43": "2pLNq7eyPtHabzbRtgexC7VnWChQRh2idefAFFCsCTMzTPKAUiNjU7sSgoDZwX6ANdFUWTTEA9XZk18M7UCBYGxG"
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
