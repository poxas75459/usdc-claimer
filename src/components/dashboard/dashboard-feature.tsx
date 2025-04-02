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
    "3aDwH7HTaeUFiM4KXBc3oSmZdSPf91o13cZNLPyzhgGzeaPFcThYrAYjkhLBDs51AvKvXawGtdh1mEThk4EUinLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64sRTz3ft9dQXXdAVogztHoYgduxri2CCmPH1ofD7HijWivQtpusFXoc8o31A54Ydrj8cTS2P2pc8YLuhxKoSxss",
  "key1": "4h152Z2nFM1D3c5nKLyMF75Vzaf7ndu8JfA1sKQeUXZEJCSEkpEEgBob4HMsDNiTNtAgWhAUPMfn9rY55gWaL5Ry",
  "key2": "2mTKrKJ6qwx8bsxWhfWwy387uQg36kNTtnGCpSrnmMm1aAiyeDc2gWfmD9dv6E4Jsz6jAYTnUNpGR2oRvi9nNvYe",
  "key3": "2LVRY2pYiQXaxmjkZFJr8hqTpe8vGxqSZPJmnyFJRZks1uEjxtHTP7HdkEsXvVnBkB9xvj1bg9yJ4eA5K6T84Rft",
  "key4": "3ShkCJ3mzMgPBKheobudSGibaMxL5Dvam6sbHAkBHreFFJEB8N7A7ChtTXBm2CxKhFe4s9Q7ZSQT3Wwfa1J8uzvZ",
  "key5": "5ioGcM9PS93i9h4LjeWdaZbkJYcBzbr7SsyfCZVMjfrctwGHGacNwZhr8AGE9AMy1bstRhBb5ev9jX1ksFf8q9tj",
  "key6": "4LuZsm79ffydYRG2DbahQK6nW5PEk6Pjyg5UaJuYyCFxMvEAQuN5pFS1c3Swj7XTTW6e6rpoTjPr6YzcHqEQayuR",
  "key7": "5Dsi7YPdxqjgYtQcASngK7H9qTT5oX3Y2fb6msSXVYnScuCWYqzgKC9zsH754zsXpezNuwkPqFTEtiE9AeGFMk2b",
  "key8": "5Pg4F1MurTvUSA7341oNq6voU1TpG4TF3E76V1BcabGA39iBc8S6gsby9yp2Wxgb6sfRC6h7bvEyapbFp1uRQZAm",
  "key9": "omBy1ywq8Lpbd2gV58qUDr8M6GeEr2DFE99gnUgvsoEzLdDaH3VY1t1nwJYpvAS1E4Jhhbnq1tTpDKaVXm6Gm6o",
  "key10": "337RmEjq2kkZbegCbigK6Fqrpjs4ujmAJxNoYQnNxoUeLZ4NRGo1i6psykwyHWjdGuXMEgt64DiK6pa5eWBxP8JH",
  "key11": "2BKVg1CL8s3tsVDegJc87Qbmt8VwsPNJGyFF9W8ic1LxEWoPztdT9cBUGvwtJ2vdyuGeBf3oMdCr3BmRS8qcBUoG",
  "key12": "8VBB41bDa4eQi3LCndMmNvMsmTJVsdsU1SZ9S2NacMSYKrutjUeU7ogdszhyZyDvmij8UdjGAtmcsyZH4TYE6Bp",
  "key13": "4yvaFpGthGdhHqfn3KUgYWTDiSVRsKvQm6Fy7EpY6qsbsb7Y3hPxvfyMWNa7jFwM6MW4wEudb9cBfb93ja46LTfm",
  "key14": "4JPwe6qFenfu1FMS2xsc5gC7A1EbXYhJP6b4Ji1EazN6MLkpUaijCikX9WECsXqJJqevX9awbiCWEGWmQ8TKceG7",
  "key15": "5UobYnHwopJvbhxdmmih1F9kBJvSoZ2NkzC9ztFKitfyfpaTA3vSL62aZ8DxXhCqNxcWSxzVxC5mJjbCBpF9fssb",
  "key16": "3sy34Nr6jPPGtPX9dHoApBQrSSmXE1gogD3NJgVVP2vk6aqgFVH1QnVz8i9xAjH26EejCWcCnqLoD9QGnQjWf1Uh",
  "key17": "McMLjMSNYckqF9DjCUa6eEx9trqRU3b5q6BSbdLAktv7KuKjqPV9jHmJPw6MXeaRoudyfjvTHDtGD7fgtCDGmKG",
  "key18": "cjD2uxTMtzxSmM9LE6D3MuYnx4Aviru79v94KFEXmfU4ACJtggCe5h47s5MJmAwR3BQ7zkSQi4huUUffjQVzLhj",
  "key19": "2xm6Vv3wsxnPcxdAaTBJUDBCz5YShfpJ5Hdb29s4dU7g7VPfo8ZHHpAXx1qvRrnnQXFd3wYMQ88PiBGf1VSgy6nU",
  "key20": "5gVkbMkHRoHMx93rEsFzVp5gMRzmsatUD9FrcEm5hgiNL98ZZ86sHu3RRbKfknfKGTmLqrVfEPHacsJJL1rL8jz3",
  "key21": "47j5hFSNSEQARedA8vTddRKxAd5zBSDXuUpqneyBtYkHvk9KiWQzkM3wqV2s2jAqK4PkW8NfmWFaPbd72EdmJKwM",
  "key22": "t7M3sUiCamJGzPukKVYZBNJatyNhtTrMnMZq5pqkgmArGZNFe43xFMb9B1Z4weAZWNH5A472f2P2Dnz3xAmqL8K",
  "key23": "2mPEooQ9FvkvsWsm2eCTWtJnYXxrMGrZTF4gpasfBZd49L1GoCPsDb8ieZY48UFg3BpKozsTLAhXPTnd7CLGCfvi",
  "key24": "4jMzC78XsdnTLvRc1RXzmtauqj1iQLhsaew5tjKzhRRcHzXSHkGHtxfRvxBDifMiFCmCiRUerbTrnxX5cdMxgbLM",
  "key25": "5qeLiVgaHTCoKv271U5yWgZXZ6BpG9u17ruN5ZC3aJJj2SZ5k7cRxFoUPhp1tD9M23kYbeCkyQgQaWU1GeBQ17RW",
  "key26": "49TKfdxemA8nxWm8m145KvVR6bHq2ePXGW6Li76tsMCQMDXykg6ajLjki8PHHLktnDs9eCyceSzCbuAmnWiQXxYj",
  "key27": "5d7MeNxBKxg9K6DRYghPp9kAjDfQPpnzTFZd1ymSx2whs6nUgqHpSg5sPqhP2Kciqt1aSiLGyf5ox83JsUgb9fA3",
  "key28": "XCDKPDaCcsJXz7d7anCq3TkRy3CRgSQLeSuwk8MknGU4sGKJkRc53nFS2NHAZRPQqbXjPy6GYPmpw41MVQivQCM",
  "key29": "NmqdwppZq45MdmkuKQ1FhmsG9cJMtzkPYTv5QjkXArCrgRbPHZTZGJDaeHeeBLQfdsq4Ee2vHUJQjGDypKFdFqt",
  "key30": "21MP8M4emPJ2G7y22qNarB27MZW5X5AzjJTrU1cVUD7rpUQRpdwXaCApourYds7KyzCdJARf5XYftD8M6ZMdabNC",
  "key31": "5vtULzGNQVZjNNbH8AwpTijSpNgmiKCJB5X5TmtbczqfX9ioXfHiy6g1Cz3nMdoLippbG9AdEqWg8HuA2gXSX9jX",
  "key32": "M7v4VVKsydkGqQUmLpzTT3Vh9iQz2SxA3WXtDnmvK3iz6cdKqvi7tFfBppQ8W5bRMM1i2LaTkhGXexdF2LdJqim",
  "key33": "N4UFaMdZ8aLpq5MaGsYpcoy6QDRt1EHfUoaqRNh3gGqmmYDGbs5HqpMASLfziTEui9vC13cB5LYwcxf2rELEn2N",
  "key34": "2XbpT73nfozn4TnSXkhjcqyLsxsjXTrD7hfX611jVeHwsx3GsroQTCpqVf11ykM2tr6AHN4iUo3S2c7iontBJanS",
  "key35": "3RwauB5rtcLLXWDxD2pxSjvGdEq5WU34qMb9JCtEST86XNx4j7GUgbpbc6MZYZ2fMx2sR5E12DdYVtCu1uk3H1K",
  "key36": "4HR3w2Wnppgjy86CkBUU3WJseekUfzT5MsKv9aY9N4jFUEEteNjLibiH3QmwAEUuHFTLcm3oHjmNLC73M5ccM2V4"
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
