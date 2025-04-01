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
    "3DMmTb1iedym5SfmofMzjZKEBvKeAdYdzufBruFVUkEF92kPUwUQVHbBR4CiTXjibNcFSBrirYeUXBaM8Cw79bSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BJa4xXDH78eCRNy6QgPVpjsbQU3tj9tQydyLF3qzdn8k9zzumRrpufhzcLvVQB2XrALm3mkNnkB6B2QumMPB7d",
  "key1": "WVpZhvwA6FmCGRkD1PAgeywV8s19xCE44ve1LbMwoSR7KKUHMrfCyZgHLyEyAWvkTUDEdU8C8CWmpYMhfUmykN1",
  "key2": "2zyYUuxXh8ZQoVPourX58VJVkW2f4KYLeUqk28qNYtxCwbFmgw2RN7EFHr4bk67iW5jdqqqD77cibkyiv5V4kiQN",
  "key3": "39TVB8kCUPrNcnGvSMbxoBwtycc2pLA1ynGbBn88F4mRULvFVjWDCwdLftt1747ypSU2Exsemuc19KkhEu4Jw96A",
  "key4": "5NAmWWP8JSjjPJGd2hypwhHVCsF4MWRFPntvHyCxhimBN4V2REbtB7mm7fpEJLEzzAt6XSi7VwCdnTCWVYbv2n6U",
  "key5": "2WoCivjgHZA3kAbDSaKn9z9NEzUkb6yq9hLs1rDoZnBf2FaEaoiBt7jqkECxUC79xpvK1BgKpkpvebFeneXy8TrK",
  "key6": "3Zz4niuvPPDp7N3npPcQ2JkoYwxpvLHtKya1DDgWR4smoFeLHtHsTCY8NzZc5BHRd7iz6FWdkwtNW2wY4XLTTSDi",
  "key7": "3DhfM1dDf3WbaKekpPcizfGMvMm6y2JzVYHnvg3dA4mpRrWgaHeNE3sBM53m3U6Zz6G8Jtr1X7iBejxJj2F8keMZ",
  "key8": "2PpbzWZyJTSXPn6wjuu5ZmgU2pVCGqBTtGKpQw5kmQmimgFSRWMPT1BHhZqA1psDs71azwe24wjMQJ2t9C8LjCV3",
  "key9": "2vqy1JaL1HrkAukJgFsJZknhR1ytF4RFUgtVp825FKVQZWX6pQbDvsmZjE2R1Zzs9HNHfnMTVqEhiLkhJN6jCBrV",
  "key10": "5xKthNoSdTFBT5x4qLVYGSo3ibVFqowwW9VsS3ee4QkBczd72Ta76zxR7DDCwui25ateRzvV2wmvuUX49dtDSrSA",
  "key11": "YEBaRgWfMZ7sN4vVVmtLtTWHTCmTVyodAAVQf695qKbdShFA6xvFjB67osjy2pDLk9SoTRo1iMCRCkpE579RWa8",
  "key12": "3FVYfwtQXDg75fo1xkTPEdXWKEjNjAN6hcPP1fwRgSo2utP28PX4KSELNnajuekEVUWLuit3LfWjqq65vcfTtzLW",
  "key13": "xgsdDZqk2qUjhZXbfy1PA6Q42ERPJFDhiN1zHd69TtR2wo6XSKKxWT9HJouzSy8FcaWmtDdxdsT86ENCz2UWeX6",
  "key14": "pUxFC7ERnqPgnTbfGsSa2iVLf9uCFxAguQUiswWzwgbwy6QyULw4C3ALTE7fBGsRxdaJqtQYW7LCQGUuzXQWtc8",
  "key15": "2DJs6ofh5cNoKNtpcWjj5P24D4pLp7CDZi8QmFxphwi6YKAmaJGFmUe4iXZ3vcdCG5zCo68ubc7uiSfBNKVnUNDF",
  "key16": "3LMyRcdivJfMtiRCALe1bh2bsxPe4yBp5eSqpR7dAWA7SNDz4r49y2kL8B7K3d1SDc6CnsjGVq4E99kMuLLsfWDX",
  "key17": "4FJ5jVzp49cDMPs8KxAit1S9SpjgTFSdJHrx8QHv5inyqdPvxkGN7xDZd6aef2t5c8UYhp3oey7Y1xztk8BnUrpH",
  "key18": "3Tjig56xczAPVMd3FjR4xtTC28aiecDD1UGmBmuF6bbPqLZuad9WWZAABwzhsksujCLUkiELfGeJEpVjtF22jser",
  "key19": "5XhNRwQqLndokAMuoiCufwJt7eYvzGmAfhNHpbAsVnsDakEL5FE7bHhor59F5ek7HmvQt3CEhivZPijAruYeJDrU",
  "key20": "2XWNysP3M49Z96EacYtfcyuuQGfTuHbDVZqWeBszCq2LbqK9wT8NAt7LvckWdULFXMXiCbctvJWc1wHBSLaQjqDZ",
  "key21": "35gqXnvoUBBUVTaAaMs6bqxAee6nbPHMfjLNhbLXAwAGzQsgzAesrCqG3Hrx6uRvH1Gur8B9fsA9a2i7r1SWcag4",
  "key22": "4ricjKjTd1BhWCTe3DkUBCkhCWt4a1qUdg3MvsSMjq3GJ9teN6rDAibTbucFBvLgjESkCJ6eno5Q94mZesVdEHmz",
  "key23": "2eFQxdBMVWs8ZEZxEhENjKRVkdUKYWbTjWFMvbF9rxX7QC64nD6zd3N1KmQaVawJSgLA6YygT1SSjsWJBuRHAd4G",
  "key24": "Wc1hcbPmGVWxnQXUNVuMqm6HvmuTACJ6kiUPqy28vcj2zaAbUzmPjrn9jWwUF59frQb3gGqbmaRVY6baajMs9Lo",
  "key25": "47jWPeGJN452yzbD3QLpyrHL8ze7G4wYwrbG3dv5MdZ67Bd4Z1eT7aM5y73QsKbVENuz8jaNt6HKCatEm9jVCSiF",
  "key26": "623RsdmTd2xzJQ5w5nEqcnXY7PdFr57BAgU2HeWXe9ghGfpbmvrvteVvg2m1feXZQEDVYK4wDQe8BT4B5fSsm3ZG",
  "key27": "NnwGWJ8du6rLAwxR1kTcFhY6JMU5oyvRxXFqPmcFZe1uWV4kHFyXJE4iccRVQJtff2nYjyB5h8k11AvgSPraaXF",
  "key28": "5TgMoW6citBEZk3N6z4Cd8pDrfyPh7PtFLv8ozMQggeSq1Rs3VyHn1xHXomBn8HurGEn11cbYzSs4op2CMXu3LCH",
  "key29": "3XHYGNavzZgJzajZhSFgUjg5W1QUqes8W4XCRzaYFs1NMgFWGqDsziWn41F3SJ5HtckZRSPpLxUTWmu7XdgmacYr",
  "key30": "2oqZUEPc1NoQqsE4Un2nebQSAdij2gNu6Q1LN1pSsc2PtDUsdLR4bXSU1g99CSPfYN6g8WJHcToVFC84MY8T7dGW",
  "key31": "CjjytaJ7P3UrX8aP57bWeYsBqEJhyQvG32Z6JjQiG1X9G4H35GdcidCSd2zzAgFDFtwf2vFcBtCUSYJwEfyLVtk",
  "key32": "4dSt8VMgmtX5v3GeF8SQQQoSuER1kE4aPLemK5cPiLvWEdd1wHufES52FvvqGcFQsTt4v9ueFsuADwu1WANUJCXc",
  "key33": "4eDzy6pyuMh2r8xir4pM6LfAGheVAYFaobjRGgxFyv7uM1cQhRu7bnqg5dYg1VWPC1hnW1YfxCMUwW88TBJiuaef",
  "key34": "PjfzyuEg4QCoVVpBp353SgKYSNcQFzVwHkcLgHfLxuLnvNwFpcLnk73qNxyn4PoTsT9txg8AWzoVCwM1k4eDM7d",
  "key35": "4E1o9yzc5kHQi2sqfXSnc8v1nqk2rSHsJ3fwv8PTWnFNrrxRQ143i9Tt1djwZ2nv5T4Sm19eGiVa3rbz1gVG3Pz5",
  "key36": "377BvaE5YaSWKtgPgb4wrV5LMCxhb4QPMPJoBzTJbKhJ4NBqrEhsYPApWaAx7PNmQPQWsoTzB4FUm4qHd3rgzH7",
  "key37": "3bWCEXo8BGAHZCdbVUHLXSHMyJLW6ZsFqocybmaBjhc2n3keD5fxdhJu9dZiUUSCFqWa5EKiTCRBaYEEsRY4vikq",
  "key38": "2WCXDQG15zFLNsLCPEM3FxokQvUVSDBgAVq1UXXcGPR2fdXsutBZcMpeYpF7FGNstD9nm4QGpsNWEtE5jUEdAp6Z",
  "key39": "VkUzVKPAt8YntSqQ7gVpccVfgG7ZsmDLBVDhfhuEJd6C2q6EZYg7sEXUg6yrbiAFjn9h5ZmCQ7bDFdNz9vY4Vqw",
  "key40": "mtfLvL6h9rrGtt6t48tTdbAsRAtxEBADW6h6JYDwJMMeqpNo5USvGKmXB1cFnNFTyRp2ztMUx7BD5rxeyUNfmSM",
  "key41": "5ehoxjgwXHo3GkPCm1SnoxcdHWoPh2JWNvUiL21PbggDRckAsbqzCKyzXFXdVWzqv7hpxsEU92HVeYBZNCkxiLwM",
  "key42": "4yQvuaBcfbqN88MwVgZ5e8dekoRtQNcbG8Nh5AaqTLXHYev8PFokdx8rMRmFXiZuvyMaZr19V2vgL5yvgSTQUPyY",
  "key43": "41mbHLU44LCqC72kBkr1NTeZXwHLNL6oTfah14ZcAZ8DJuJDNNDKGrmmapReumTQwt5gFpNDxqGbXozEUCur5rot",
  "key44": "4SN15xY3EBja1kWHtHKiAv8mXxqYmgT9D8tEMMtCsvLC6qYxvqsNC7y8qze9ND1ReSifzSjvjUsKFbhGojji9KZR",
  "key45": "2TdtbuAGaHQjvsTQ6CxnEAUnGUTJYVzULhhRmCeSbrqPVE5mrX1TQavDdyuGYcUGmf4fCwxPhxvEPPyxr2kS3LZd",
  "key46": "5eaRQUt8PKT7J4ogHHSB9f88GsgNbT41F1jXV2XBvgM1JqXsarLNZksXAPGmqF6ze7geGYCKMuje1pDjWwP5wZBM",
  "key47": "ifbErWQggBswpPJxtK4XqGDxmyHyPG4hdZLYMyD9peF5RU4mDZdZMq1DWXzP7Lxcofgvf54MfBg2GcDFWPYtcWQ"
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
