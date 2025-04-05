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
    "3rdYSaAaivHX91wwd5ns9pPGedYk16CrMxzh725v9UiXChN2LZJXsrvTMgtXQ2WnaXGkiCw6UYu2cwMpE4ZA6zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGpaMRHUYj3LLQkJbS6DGgAmrDFZsruekG7EhE7acv1xL5CERYsSsjhfcz6CiotqLES6JKzsncKi83acY1iW3xG",
  "key1": "3mcShHucTpZiBMZcsLoVGZ1Vr9dAtJRF9prsQtHVSFpkAnm385r4bGkrnRfA3eTN2UxaUGeAY7yAWpKTy1src45x",
  "key2": "4g3MT64ibjC2NPEE3nZq5cdsv9iX5w84A1TepYgd3Jqa5JDexkotL2gS7DgPGsgvu2h71fgfSKRW2jMGyW1Umipn",
  "key3": "5CGWdFjb3XP3MC4jSY3KSnzSyuRaTpNzzQJbQWmscmHR2nSuUusttsV5V5pckuwv6gJkJvatSC7EaWRWiL3zk9he",
  "key4": "54McE3e9hpiHK2ysbDumKvGgy4gKfcQcTtR2W5apfN2Joc3xr2XxoKJzwDt1eKRT8LAXveHY5tAWXJrJw1ndMTEG",
  "key5": "45fyPNi5h2y91JnKjqhaKcAjJGXMfydZutvyidF8HWgcY9S9Fnu2VXNJydVt1dxRqVjSgmzbduMKdCDdpJsTZPq1",
  "key6": "62KGv3Zt5W2CjVxnj64V3SztC8xqmjZVLCTt3tmi548q4WZKrFveHbrUh2BfKSmNpJksX8x8LsfrkYzhZXZ8G8yH",
  "key7": "4qLzVJBadMiK4S71xLHdDeaQTVY4PtbhECrDhwHijyPnh4o7jjAotd2Xsf3Re3h8JSi3Awsz4mrW53r5nUDXNgHk",
  "key8": "3V7hzZMEiCiwqekfhmtki9CNTV6Ry4Puqym9vrrZ6txNW3fnW5ECurSgAx7ALuCr1SdTKNZ16BVvLhBMbA4MDYgE",
  "key9": "3cLt85hJsCdQbjjMzwo9spiPSKA7dBvoZud4gFTeEybqwAbBScVgeBsuFbbVH7cwuanT94vCqMAwudEHvcbeKiaZ",
  "key10": "3oWJkx3pDSnfX1orbJWxg7Ad6rYZFH7vQdcSQ5EcurZuHpRyK73uDv5ADYL3TqWA6mRAmqQsWxdA1bgfUmNjdyQp",
  "key11": "4nD27vEqGZYWejBXSrzGAMZD6iUVDKrQbgymL7kyGSDd2vR8xzqDbvHcaY3VTGGwrzvrFttmBf4Ms4KNx7wyHB1G",
  "key12": "28Tvh5TPbcJfmwN82zUX3E6CHv6ra8gGphAMWgmKQQVAqT7SzYBfczYXLexvoHEuRGfSmn4ddoZTF3LRqmzjHTkx",
  "key13": "5DhCpcFeQMMk4fJciLNMLERWBqhj5B9LrhpzpompgSQn3EPs2g3PuHz87CPYseqJmRjv9dFmwXUHyxHceQn6fzPu",
  "key14": "2Br9HEGRPUgTH9pKXxYw9Y3RdFAdqMUcZyX3TBGdBSLaNrQmweDpytGUBkvkiVDL5Biw6aQwKeXFvdVrCRDtsTjz",
  "key15": "48hTrqYDeMEzGrbKNcFnYwHhFbjoPmjS7M2dcNTx3s7ZXE4ZZWFfGDy2shM3MCXke6BkeaDTpwUDpkxazvAJdKeN",
  "key16": "3htjYuBfW26uhkCBiAUCCuJpvVsFFixBuNeFfRwc8J1SJthUvr42Pv6GnMSxeZs3iAV5Faxb5UrNCVzYCop4Wa9C",
  "key17": "4eeUBFE5eWhL2r7sFgqjPCoH9yHQkUWEDFEjq5gNMSSmSjCA4DbBQozTuU5PiyB1Gw5ynonPksy8Tc3DPzG6XFEV",
  "key18": "5kviKTJ6q3qod3P4MRdzNGDvUK6TzTccNpMbu4ZU6czXkhJy1inDuEEdhqSGrBZ1Zr66yRzoP1Ce4R8cN9xpjmji",
  "key19": "4CQQs1pu2RhEfR7sh1dfZghfLAyzj7DZFP7T74YbdQw83t8KPLzcCSJ2jfU82RMkWExorVw93KH5qxeaZt148ZkS",
  "key20": "2nNRD8DaYyQRidX6b2r5Jcy6EmULERXZ5rsmb51nvJLkbRUwEfnf6t1NJrT8PvMx6JhmQ24Xr42EkjU3L6Hxu6Xh",
  "key21": "4JoefPaKa1igrsoR15JZAQJTniiDnu3WWaQwdaAXppwGkvdJf2ExaHK4X9peMmiDY871qSsqeBjNhb6aAYFaT2P9",
  "key22": "3DsR54Hh7nsWnmCrgk4TjkL2ojcA2QMEju8MEwJgi8jv8wjtd2H6XGLdCk65Th6T1vqyLSBTSr6bBPTHjg6YBGcD",
  "key23": "34ZxhqmFS6qhnFRMw5FiNgHLVfcbgcYjUZfxoB8pb4N142oB2MWbXrxT62GSABoHGyKANtwDfuY34vFJGBVFU8bP",
  "key24": "3ejhvB1KmrV5j1eessLVWz8PavuuUrNLPQEsebJvLVH4dZVuJ9ZcohE1W5dE53v8kwRH3mFsMLWVB9BzF4gDmonV",
  "key25": "3ygnPjtfrnATsvUYnToDU8prxUrW1wCD9fHMerXkMJJw7SCDVRtjViYXypWfvUeCtU5JtXedBkzMMAeHauuBA9xM",
  "key26": "2FYgpS2wBg1TpPcBM2YM3tYBGRya4MzyZiM5EWzbbRmLA9AU8gwR5cY5UoW2ZrvwUNeDjzttm1QCdbQCP1S3qXE2",
  "key27": "4feYb9fFwks6h2EZeCFGe8tLyXoaFdmsq6cnBMPFGmTRa4kLKgQsy33zJkyAkDdqXpowawkvv7pXRHMQGZoofyWX",
  "key28": "3A7shMusCUNy9ZDwZ6BeiFvL6pCgwJzhSsGoWGuDvwu7PP24rPBNAbibiDjpZrs68Fj2ijT27bDP5YbFaCKA3L69",
  "key29": "4Dw1muJHWKry1tdURUP9ivhDk3n8wTxPy1MnMi3cqbLnKvmCsALWX8mLnMvFpauwHW75tmBC7tb5YGL6ttgeGvaE",
  "key30": "8rY5ZMbNpmxWPgtuAk1fNscZbLYwXAtBoLScG6tPD8HmmHG8hPKQJeCm9FcuSBxJLELMAWHk1juxVGJmjpANBcH",
  "key31": "YrMHrsLWu2angR2TX6Yvhi2SjpzJ4DF2ksZJSzu1fCEqow8RRUV2JBeDvrqfbDk8b1QUZCzEuSXRvKQTai3f6VC",
  "key32": "4ZNm1j99eZnqu7d6CpWRLX2rxRZoMqkw9So4ktyW1PnJCYNbcAGAGCS35TUMTZwkJfFzhcsFvgGjmn4NXd1MRfgS",
  "key33": "4Jw7GoMSq83H39Bo48PPzsBVy1QFayE8n2mGBNNFQWjhZ77xpxSHj7TA1MjyefifqQxfXnnJ3D2V2JipCuP84DHs",
  "key34": "4t18kCBkrrdq69hukhNQdQAupM2G1pRLYRgoFWsLJRHMAWLhAxDhoq4uKUpVuJsWD7K54TsTXFrKem2XfwfKfAfV",
  "key35": "EowJL9EhsSXsLxyeeLGDcGqFxBUCTP123hqTKddf8YNCokZzPyzv8taWx6QEaLpnhiziCYB1SUChHZHV5WJdjsd",
  "key36": "4c4q2yXHLaeNcqTRbRgKuKaHU9rJFauS6JsjAeXoiJBSTEVgaFbdAQU8eeGUGwUdxrPWhaBwpJvpEXXWymFXMFPF",
  "key37": "5PF94rMU6Qreg4WNtvnDkqSShk7RJdSsTjL7t2D8FJ83iQH4yXNUnHV7Vsir2cF7jqh4HWg6CNXBJyZDHXaWVNPo",
  "key38": "5cttJziRmaYycY3XQL7zeC8Dd5QounueT7MbnBj95XgQpQHZwQvFDLCXxseE5JJwCwyXUXeZ6u7GT7JHoSKUUnMk",
  "key39": "4szcgtEGGVtuN8o7kNyQE1rgZwcHWB7LxXQWVAeUJVFhLvc8ohogf2qfkjpaUitJNcJZCqDYzNNfLcqQJV9LrmBv",
  "key40": "4JdERSwwYpwvqtVCnzNAZK94eeNffu7NM9VSjcdopApmvNgrwPj3hqB6XuTH7xBM48LGCFyS2VYXqAV3G28o5UDF",
  "key41": "3ttQrwBnF9wt2FNZa816j8mKWju4dLKr7wCwrphtKysFpGdrdhYvQFC5Gpv5nCe2XWB71ZQHui1Bk9CAWdNQxoWS",
  "key42": "2b41FuUPDpXWkrKS6dN5T65abZxpo1CoR7K9oQobLydtNCqim7QK3kNeuU3GNo8s3Cf2rCw42Sy47HF41SrzeXr3",
  "key43": "4Zefqtw9VVXhfKT23WzpRyMZd5RuWphciMdrRSLrSEqA1GSeVGo7VXAkGufbRSvwT9LneFrSDbXFobC686gcg6C7",
  "key44": "65H2Enk5PUMFbuqMszwAwxRyFWMdxGdihiRveGBrPwizMUTTCQwtAodXPtBfBRu3nNL3dPYWX4RXvC9nHjCbkLmh",
  "key45": "MzNUcZ2Mf3VKPun9FEwLMyEJgssZoZn3kBWNXqbxScBynaWvudcDtHBDMSMsaHDb2XFsuAo1GE8sJJ4hPbJo6Ue"
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
