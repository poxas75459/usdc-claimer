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
    "27XrhGUdNt5twQNjcEeXS1KmoA1YEFkPiVAjyaMk41vjf6yXfNgNpJdKKRYA8H4bSQvmBZJZ9fvTEF7gL9zZYXhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhwSP7EXyPHasmh7vzvj5d4nH3AD6mC5iSkicUMzi6BXfYjzvqwyLco5ndzhXgVSteEv6U2qWFCDniwRG4emCF6",
  "key1": "nGhjrifS6HgzYEyBnvMdukvo4MWPpwbcLRxsQ6tzyGioQs74N8PtLK8YWhwqh74NSpCM2tTo8Dd6WZmoxgL9WfZ",
  "key2": "3weZwJg3CXzARgC6Wo7cLa53HCaLtzUx7hbivsjim64TuyAu4nzVDXkY5xxCsPuAqoBNYt9bCUjXkN6cSyxZLU9s",
  "key3": "3WpDbD7oeELGLvkWVzbxfH3mKfHCoUvXsDYkwKMdpKobBTNTTUe9PLpGXceU7cGKnS6FGANFKnHGmiHz33p7wzx",
  "key4": "yRfTyFWB5tkENoV4bGt7AzLygpqCj7sYPHmERUkuJMSwXS1HckJkSKFzvvrN2RWTxxEPtdWnvoBwfvqbFL9fzHi",
  "key5": "5EyY1nzyxyTpNCqEFT7VZ2LANAFYdJisnsG1AavfNoJEj7u1oytDQzQKPPaXx2JyNEJqetHqbyobyAmPyp7WH2iw",
  "key6": "4fQXo2cMyuAHuumjA5WEye1KVoiApXg1q8WwJVC46ZibfNxgJKwHNSJ9hFkYdapB6SEbcLf2PLk4SmatQYgVSFx5",
  "key7": "3xKZbmVjVpiLaUK6auronRqCupXWv1JM1Gw3GBtedMRGQ3xrXQR6juLM7Ys6DCp5nYQTwwwpsFgXrCzTYLexQuBM",
  "key8": "5cFE1kwvhR1Zw4LvX96re5ZES9LRfuAtQ5RruSvv3TMM7fLg7iFjmr1z2sEhytKUMreHbBoVr7xBKGQtbDo5PeX6",
  "key9": "63JXyzYNHF5RdkC67zGmutSdmRYdzpHqdmHtKmYWppEpJcizHiuswhqMq5TvohKgUYviuwa2VBDWq4DRutifvDEx",
  "key10": "2TC8Qpdbk77JcYzyyubYt2MddsQeH7dtkkXSFpa3vW6gJN6woFWjcWfBRsLfN1hsNa55z8xWJ4HQj8r51jrS6YVM",
  "key11": "2o6tMoJCTJxRV82HKVaoK4CXS9ob1KtAmZDNtqQFXgocHFDotacwqSmLvvPpoavGUMM9Tb6yfJcdgUZT5BYVw4aV",
  "key12": "5tHt9Noh2iV9KSFKWNuFuPJ3ELhd9HdURCuwgxXifqZvZeKL7sAXN9S8cueeJQpAirQ5MjyvtBV1qgcn7kZgAruK",
  "key13": "1pdrKiwnhMUZ6tFVDrx5K7Uq75t8hsN6ptMaBsVC928h5LF9sVEHMeYkBD1QQ1qkuK4G1yviCjWKzFf7Jx4Z5RT",
  "key14": "2PLKvaskWWe7NEzR4rDZpG274irgX9NanBxm9Ui42kmDnLgjqSSMEg9yHCk8EHsNjZZZMU6qakKHzLToRLNcjixu",
  "key15": "2e4EJQtggVtBiSqM8J9jigkjevQpuhgKfu86X7GXkmjnmdKPEWvd7Dm9HKVoyAzfYUM8tC9jykpJNUAXwmfHWuHn",
  "key16": "3B74prFCRaLUCgU927eCKmaV9kRxDAwbTrh5Fv3GAhsme65mzVVT6boX84H2uuQqYK2Chznm3caCXk16c5TQpv1U",
  "key17": "4f76UfVnrPuVe3Zh2zq3YwPmnavT8gRD3w9w52EUQsCxDVcYGKqF8k6TnvJo14bxy1VhdGwM1JkKGf5UABuaF4NF",
  "key18": "3WfVJquvvzLYeuwWjVDDvEavGQUm6HsZoy8tmt5bYUvqJDbMqvAakR5jdKqBFxZmqqbBqYSbXAw6hEq4t6Ebd7sb",
  "key19": "44h6V88dupDLgGN8TnGAYXC6awFLn7d3eo1RMMB9mQU1uAdh7Z7BSFRbJpxwXCZaRn9LLVqQv5MjetoNosge39dT",
  "key20": "643Cwvk7s59K7qcgDQxCiS44pXTsZiTBXiKd9DfsDUJv4a2vmcHMhVZqCM5gyHQPkHDmuKgf21wdoLa7uhABJYov",
  "key21": "nsEL2Zfm15iiXTzTY44BwNeJfP4jenT8iPkcVEKEXt8JUYycN5NGraqBfhmd48uq5tA7EMJMoMTAY1XZMJgpv6M",
  "key22": "5QXhmMijHRBqGZSLcYEpgYyiLZ8gmmRV9nfh26qbSTDzuAbp2HZsxT7xiesFaauqah3fucASb427UA7YNEsJzqgG",
  "key23": "37KdtujaYD25wc8UGzruUp3RwvGDw2iRb96za6W2fP7KmmyoxZk8ccqby6sCvHjnVfi4DLDDYgP5qrpDm41zGCAx",
  "key24": "3PSn75DjRJLK33ZeSmCK6FYdpcK1C2xnUvpDauH7ZX8E4346jiT8Yk38ro8y7ZdJDYKn1TFXq9cVsvxU67KYT4E3",
  "key25": "4Hj8iipETmqrM5kvy4zfDLS6dvVLU7cSXPWdNUf2ddf1vzteUNHWp7jXDzcLUZqpnmCtqhnoeBMRC8f48b4GfbVE",
  "key26": "5E8b3ZSYn8mD4BgrXdDsJwfwCa89e3Z56WNg5UPMYX7w3mrzMN7rMCsHvxy6uDLFwitgHyqRHmNqVsGEQFC5mByx",
  "key27": "5f8vKEpdFYW2ME6R1F1hdsKvkb76i69FuN5FGCddNBAEFBVgRLtD5hS2CxmKrXzZ8tvamY44sE5ymBGkmsuvVYqv",
  "key28": "2AR3mzaLw2pU3AG5JqNUqk5GSN6QtniKyCcVWPr19SkL3LQLq3CV8sDhMZwpekHVZqHS5tcEDXEwpcRvFNE7LKJV",
  "key29": "2T9W6NArSXJao4G9n5PGjYPr2Dv3PmBqf2PAg96wXaXNg8yU1X11TBpwthVACVFj7Hq7jSytUEYXPKkY9tL3bww6",
  "key30": "2SGfRg6waYyEjWrvD3U1LVfAKecbKpdcNUyHEqdbYodXFjDGjPEe822oio1VTXy2BwxGPMYCqUpjrAaVEhRRTFWT",
  "key31": "4XrPHjqJJr3ivzHH3v3eSQqLDRqMYPg6U3ubZY1e5HWjEmtscn18wDG2pYBFR7oqsXxioXBBJAFW9DbGofwTkquZ",
  "key32": "379yyLz4Xioqh5YPuaYPBgEioroiuER9RaEKSMoKkRRLgJ1jhcmPNoepv3f6HrtjKxjmvCT21GsahbbCrZAK4w8q",
  "key33": "5WCBn8r2HC6re9DJKboCPb4hinCHQWden7cT81r5r3aJvMdX1BCBQkPhcBwKjQX5rUZc2V2ikrJ4GFnRBup4XMga",
  "key34": "26deAAStXzLLmrdSWJ8bTnm68W92jPV3adnSp2xotvvZGLBoH7Dc2DpamQJ7Mkb6JEA8j9w15t1h4YN1PMDt4ABN",
  "key35": "3J8TBZpGqb6NWYeeT7YTEqwnmCUVQZaeAWMNwUvrd1Ur3S3QNQipDEq1MPzqftFfSieQHfiF6vbFzHpnYVWNtGpR",
  "key36": "479ToGxbGGg1DhaNeCBQ8HTBGXstf5xwi3NERvvoAS8YVFJ7ZBUGVUXsuwqga1fXRbd8sPegQZYo2hPfeQowcUHw",
  "key37": "4UoarrswyLoJYhbxFUyjpt2r87Q1n5LpBHSnnCdaQy9LW5VXRk4RVdamndeVc9PLzyhCb1JxT156fse8GS51Rg8c",
  "key38": "8dcjimro9BtnKCqPxGRZ4ZVWBqjsoYaTiFGKJLc8cdvEVogqF4gx6xMo2e5suiiCuSU4xTntQQUVbkSKVXy5hn8",
  "key39": "5x9Jiq2DygF4ow1tBu4XkAsmz6d6bYcKueEnEykqs5Yv7WRYPfcRbtDJrr7KXSpPDNXenv9c2NbW91g3Gio7Qd8V",
  "key40": "2cjtN2FiiUBjaAE3NHZ7GRzmcEgMgvptN2SToQRRzV9rwEiGC1MsQDs4h5ytbsSvVj4c7Q58zxqEHbpBJtKXfL58",
  "key41": "63SCAkYWRuTRtYzbEN3jKLv1NLMe8W4UHFHGuacvBKceVw9soEk6eQNBbuVYB65PSqb72nczhBEjbPLhN68Q2QLp",
  "key42": "2FtNo2wyp2CYg1s8EJ6q2LVMCE8GCmzxoPfSa7WuiCNdeEV5GbddKa5aucyvidHaqRCS2X2FbKgULZjBJQyCLxBL",
  "key43": "4Gdj1Jb5Qhf41to9EuBvH4tsB9KBRY1nVPJAJVpqAxJUNZu1YpvhZNtthN7fFfXEaezpf7wEZ32MRrRUbpxNB942",
  "key44": "4jPfUBKV8hEhfiv3iYKDxST1oUi8u8m7foBi8DhoofRgBnjFYH41uZXotLuq4mUB8WU8Aobqad9SbnxAXLgzHPzf"
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
