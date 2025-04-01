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
    "2yCctGKQCUyELeVNfBivtWxPC1ka23kPM9J1Uvo7F5r1eqjeuZ6Z2M5VHyaRxg71YzF8umBw7g3pahLSauPRjwHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32s3HNqtFk993tNutHgxjarSJrXC5Dos3wssWExfguK3kpVesV2RVYA251JS35rLfmqqfmpPJsnehCe9Psiu3u9M",
  "key1": "2dsr6pEWet95PKjPLQbYdM2wJYsfyM4sm5uQwkUBFEtj163DTJdWgEEikXPZjVCNtoGKoQqHobH8MZaq4av5PUxr",
  "key2": "62bVMg2ZpadibqNH1PxKKt2JrvBEpS2QsPn7NnUezHgMu8w83S8DZHDaSkAVzViCXngaBor28gJxt28VgyrFevc5",
  "key3": "2FfHtrBaEeTh3kFosb8qgTykdtv1drhfhAbnKnXdfoijLznxwViqHByJfqgyExqBjbKwDz8LMr1b4f9GWvcB7K9Q",
  "key4": "2ZTL9PHMgWbYrqtfNKCSac2eMVWVR1bLyGLTx4hAtPuUCV5cUunkBNoGF28wFKNmUxAWHfN5KiFLNGBtuKrGmyRe",
  "key5": "5TFANDnDCBdq8AwqLiB1RippFFRTUW2yu4pLcjrxj8w1EiHJzTsKpBrUzkd518kYKF3n9naaL5R8NGoT3DxRKYcQ",
  "key6": "5iTQ4dFgK7dsqb7worqp8HKmxzrEQKLztmonLC92eSnmumTgWXEdU97kdewHbzaEg1pRVMG6PpsnbJ67CoTCD2A6",
  "key7": "3NpQ6jLhkKBTyc9rnFeSmz44MqPkDw3kDjazH34ausA79PccPZpA8xMW3MAqbMMLgQ2HkTSAD8Key4EkB45FJ7nX",
  "key8": "3BkBiEZDM4WrjTCSQpmPzGvwTHw4WkDqnXwAYYVUFCVQqMDEAWyWWbrvPrUg9JpVXNJWFx7QWeaLi4oq9pTiqc1A",
  "key9": "2hQkE3iVxzMqcQpkDe5NYW9NkLTdGiCufvApYTPxCmpm71bsbxcLp1NApdHHoGjrYXFQHieAJhXp4RsCbC9Eci9Q",
  "key10": "52mFbkEc8MRWwZCHSM1C97T6yxvuUyRp1NorCDDDZwDfgubYkwhCu6t4CF3sNuTiifWUnpQB8FK2cMNfnFrf1LJv",
  "key11": "2toc1hXUF2QZ2fiFRvdCHnNjKz8P5D7roCcN43Wi9vNk7qvFcyQ1XQ1DmmdoJUxGuQCHqMTst6d4odeSojFg2YEV",
  "key12": "miZ7PxX9PQQS5sEHvyf79QbAtvBMreDwFsPY34ZSPoSQ7vvgZQjpAZFTGqFJNuSgQG42arRYEA3cap2XBjStZjS",
  "key13": "m9oA77FapsGcPzj3wJKUQkbgHLMzhhy6ejXWmRDtNRvDZwEvLHGsB5bMSEnPEYoQC5AaGSbZbxZAieXRoJGEFd5",
  "key14": "2SYUWNhTSP9hCkHbvtoZGp1TpaXfu7oPqtkNRmz43uYmjRY1FubUtwisfZqChDAykKdjVahvj8Ly8HrvvnkPd4Ag",
  "key15": "5srArxkF5kp49z6LX8UhGrffhKGmQ1Qpjh77FfxJSu5WbQGw5tMms3myFCNdSfoTsJ6C3TdLuiZ2GLebu8PRprGv",
  "key16": "3egBZB9bFmHGTZkfF8Nae1R8kpZxHW4roXRdpVqgkf8uH4eq6mL739JNbvrcGEfXC84ZHayjyEGUmx44xRft2tov",
  "key17": "4RzZ2NVhyWfYQMSDZsW2tw64q9H9qTXqqRWN3EWePUARJoopmCykHf5cgqUdqcuLJuTQyKERcwxK73p8gaT8e99b",
  "key18": "3F4YaR87Qt4Msd9hRxDAjQc6gHYcRB2h3b7fNfz9N4zTbD7H4SqAn8kUpTU3dD5Rm9CusybNbdmhRkvYeU5izKza",
  "key19": "323h738oGyQQAaXNokP2H8eVW6qQD3mwbNtmnonfAFkHpFh2gX5VTKrT1eE49NdZc76kAjiVGRxf4hcWNXwLN23v",
  "key20": "2DJ9AVp5b26dHRjHENk4VjCifpTwUTAX2uwMT6c6yXJvcwgcKX6iZMQMfAGu2KTkAYj7b5tCWP64kx9VgM6Sofak",
  "key21": "2Scuodf4rbRqK86nJxGBsBjnqBNthBs632mBqbBPJoa5wKcrVFF9XbaZad17NEmmaAPZ4WYUYGtZJnmJu3D3fAPV",
  "key22": "3sxS7z1XRggj8r8sKXMfK59Vrk6Ye6AHVLYNNgQbXprMMR6uAQ9RdRr2nBXVUnUasZuP9kSgxQPHe3RERuYYXriT",
  "key23": "ykgFk9PQzGGXUKyCMojKFiZnpT1a6r1jYncF6DpmJPT8aTibLCs33tsLNyGZkRGMTHn3PFr5HcUS8FmXCJfSAHP",
  "key24": "5Tdn29bvax6BrLDUau18imD2cbw7tDsccVTeVfc6oe4DvBzZQVumFHzXPBsB3hgXiM4iXVFsr5GvFNCGyvMWqvZm",
  "key25": "3zza4QzUbS5nwyu8QDvs7tgjaKjunuyodCT9SZWZiNWKYKWCPTVtwvKMopLjBMvA8QDVK9Jjcwanp3TjZaoaxJZw",
  "key26": "HmphdzwS2h7XrT1StrCGY5zsNKt4ZpHNi8CX5CbPu4fKgjobC4vqPwy31Mcfos2fjqZchWJE3CXHGaDwuF317de",
  "key27": "WYWbPD5Q7HTJGMEan1zDtWZr4mRXYcSPSAcoDgGhVndXJJNzDQz5MvAENVNApMvHgk6LZmBiZD3ZoXfyPHMTU4J",
  "key28": "3KaprjrTsM6ocLgdmEfgwAyU2c8C8nGkmBUy4ato7ww6dhn57ynEMWrbDUxRSgjTxcjskzyeuKKGcc2MHFZX7xXm",
  "key29": "3VXMpAD2Q4aphT7RrSMjxvKiexXrWbkE5N6TQDJhuqNJcmg9NKYiUpsHuneAWaEMXCa2beVWaXBGEvBMJyyPG56q",
  "key30": "65d8o33peio63Exyi2eKSCYuQupTW2mQtpLQtZ5hjT2FYG2Bi6N3yGxnCsGJr4d3jPcoPtTBoQBt1FmB473gBdkP",
  "key31": "5Trw7eH63qUt4CULbXUHxkjT29YY9j5fgNpevyeXSFWxgfN8xeA6acSL3znkzFa9RqYVRini2KmHEQDo2rB7ifcx",
  "key32": "4CA5E5vyzsAvQYmZQ7Sy13xyx5QsUihVGaugn3RWssnbq6gwPKUzx38NaLwGqgdpYydr24oSJ9UU7WzYFaVJnoZC",
  "key33": "66UobicXpwpwJocee3YR826QTpkhSd6uFVKjUeBkN7zPMT6Lf4RwpvDoMjgjffFZhghyHEdorQfTv5qr4LmXxbSA",
  "key34": "3VvyMHhnTQZseSA9JzeJPePsfKTjE3J3VSRUdL4NEiiSnXYT6SMfemm15BGcm9bWyy4hEmWyxLF3k4FHQipkqShn",
  "key35": "3tMqoW5tK8D85trnD57R2egeCvhKCq6H4YrRBDYVXfYgHWCYiwPBVi3ymHKGeZDbnZAQ44ChjSPdsFXQN8zqdBXW",
  "key36": "y6u6LWQb3c4UfHA2qCQS6g88Rstzbx3e5auFgUx2oZTX6tpEfm4jGWCtseRDBoTxrR7jfzwY8QW6QY2xhbX5Wcn",
  "key37": "47iXZYVeWYj5zA4HsqppAQugCdxXMtjpqxR9zE9durjhCkykaaGEM6SKUeJ8x6MJsGyGMJodY9G6hModk8QnXrGh",
  "key38": "4tr4uDEvypgPTaCfUep2Z8KqdNjNyRWVUzmhpd85fgYx4jnSH7gBWSc5kAGckNczdTJPu9Dbtm2JFX55dsAU5m4E",
  "key39": "5jEtcYsPq1gpZwhgPmwUcpiDLp4DtDm8kFrJu8coY8UyrbP1Fisq1pFycEF4SpfPS4Q74Ng8pSFEbY9xWtCNQ6zL",
  "key40": "3j9XqnAfJLPoEbPXDgPUGfCwkN2JhGdcuBrtPbtTYBCbkU49dAPu6fqgoRVb4ynBnZ1vd1gL9TeH6ULkvRH6MU8j",
  "key41": "2pERhv5dgx1YSuQC4TWN7nsTptbwds6cqE7oRU2XqfRKCQcgFBfmFApQRdt5qmFoJy5eGRs2mypJj6H6NUt8XMNs",
  "key42": "3DsnnjEDkWT1CVeGmrRW6XVG8HxHmVhLPtonNxmJx7DjMFzGQsMwkvyDPwxTzCpBsJbSZuheq8MiCnSK7YnNziLS"
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
