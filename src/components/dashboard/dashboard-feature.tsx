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
    "5vJSLVecmf3pwqyQ2BUYqe9HjMbeCCo5AEJ2bmXN52BnT2rhtQ9P7mjQbTp2aZ2mY4WUaxsRiN4YK8Wty5gK1UUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EpZY4mB3K6ordHMRtTWRboQJBYXdzNfePaZgNaShkH2Rpnvd584pGVY7kATrfqNJpdL7spzHD7UMfmAz3oCtT4",
  "key1": "HaGNP3p8452y3tL2ENWKuv1e7c3351awyastwDScSiQeUoyHcDJVe8FJC2m6rc4YZrrtQ12m2QuoPibEyUiofPM",
  "key2": "KAHDuywmG2ufvwikxZhqMo9NjDizceG8you3kTC4Bep75MU7FpUn2YqPJCuxrgGeYv6wxsMUAxxmoSDznCXNT2H",
  "key3": "4eeF7oStC2FgybwQeuEevUwgYnyCDp5ehf1nfRogrxtBvxVL9nXaBPg8GkHVzRHkAs7Km3HWuNDTLdvnfcfHEHsi",
  "key4": "LnmAGK1N5XqjXmQWMyiTKJ3a3WSjRAszkbjkRXn8bR4dJ1LSe6NMeUPwmWkny8Ma84oXm8TGYM6sTe3EQsgY8aX",
  "key5": "WyLPZwrv3anX6zZzGXhes1seFeDTcsQwQJJsCUas87Qt6WSZz3QKqDUquozV9QzVUUxhhpAAmVmQLYbAA1xYqNY",
  "key6": "K7GaMqHHAcyfzuXjaa3cWS5Qy6BxNzPT236wb6Vn2JK6THAaWRLMxXtkxDExoxKXwFppfj6Vbz2b1954QyzC5bu",
  "key7": "CPHGTh3ZsEfw4PSp1WrZXtdox34JVfEya9kdUe2ZwPequ7d3TM3B411Mr19QKrtK2Rg4VYudY5uEPMqBZxsiwiy",
  "key8": "439ShWkmucbLShEhXzkUfhQQXioce28xJRceA7G5pr5Bo3FKERbnuv1XMKdG4bQhoLuVdvyDMB9pwoJVuLddC3zn",
  "key9": "4AEdaePX4TTVBqhoZD6Tnv3iYvyzwS4A3J4Mh9QJWSnnWNryXEQdpLy4YFNDQ8MW2zocTygNqgZq4szBC8DsGoLw",
  "key10": "25RPgrjS27gEE2Jm2y4fSRfrgmvREdLgJLmwYz24wjM8xremsKj3FYupxeXWQUrx1sykBdCCmaLStrK2jcp2LTq7",
  "key11": "3xTuAcL644Gkbi6QDAXChx9wm7WjWN423GfJCxYUUo2V3MQdND6f26nPgw4CskZeQZguo6mPHTA46AA9ui9nuP9U",
  "key12": "4HfY4vMPVU7nwfZ8BtEUDNwXzAYsRX7wQtVfroJJevc64vyTSaymQm8pb2mghCEXKJhCAU1RGu2TS8NqiKfS5WHM",
  "key13": "2N2EMhT4THq9iYPmMuCpX9GdfBGMVdXmK1sTThGKh9e3kHV8NcSj8RZ3zX3mVepz9Aqm1cc1yEHWgciR6z63yvYF",
  "key14": "2SY8dXw3pmcA6FGNMezM1K23cSad92V4woF71A9xfVFCz5bfMLKvmyt9Kpah7dFBTBo73ZeGE5UQeV4nKPTGwyFj",
  "key15": "2mMgNh3aX76NZp7AEsRvuyLYqDnpzEPExbWoN6WwKGX9s28VzPzGe7NGBtc9EtKxutvMTxdYc92rmLgyLFhF1AFC",
  "key16": "21mKztPBsTF2Ay1u5aiCTpynohUPjthms9rxkhrP9dU2Xs3nkXyXBJ7wy94aVt5KGkynNApDshWjvf5h4VVS2HZW",
  "key17": "5Dc2QzjU3RWfcKcqJekRTbzvuq2zsvJoEdoor2wAN7vWETndTbHoJYiFoJwwd97RYkV15e41tdWKVok4jLVAUrhx",
  "key18": "3hP7G2nsPz15EoxDxHc8E9MoGPhabXXLUzwhjfjUenVrpchiABEvMCEt5bCtSDvRGNqoUVKRrqZ6JWasnvBLGutQ",
  "key19": "JzZ71kXCo2Gkd3K5irf2dkUdmpRqnx1vm5npD8V7xcxTMsyYDnJoJht5F8s3YcoiDRb4aYmNTxeow4iL5V9XXx8",
  "key20": "4nd9DtRQwUNKLUf2nP7TMmujrfojJDgUPDvPBEtK6gDUaJhabkU9GEzMP3KDNm49rvQ43J1MkQZy8QXjxAgVr7ST",
  "key21": "5VNVh5BqiTPxXU1XMW4b82s54KUcPdXmp6YzXLZX5ozdC48yaWETFCXSpAXuvQwuyW5NV6m3RG8JmY727n2H8omA",
  "key22": "5GWdCFW2y8s3mRPDp7NYzcD3xL7URHNzdxM4e2MWSVuXL33xdU35s1ZuKHbEUEC6fif3sEsKuNKEWp3hxsWfFs5s",
  "key23": "2JPZ87CePSLUroeFhf16Cjnt9bwauDHFy3nZFjWoTRmSqT42xcdRrvuChbv9W8ndxzbZUnCepUZryfg53fv43wii",
  "key24": "aXaBUwBu2oeBdSfbTqdp3EabC4oXLQs8uBBoQTZUFGnhpKchBE2Cy5cLFqsAGQ2QacKVHPXLbgh7ZZyhM85jPTA",
  "key25": "K94iaU4wPdwZ2iXHGVsX6J4KTetP3g2NRRneyDT2nDJfRGa5ShsjD5m45xP46NqQc1uniSoaQwJ3eNUKAzmtsjH",
  "key26": "43ph7kvCZiTRixTerz3wgCF9Cxf78ivFCSepGottvAHsBSHThTWMWGB6tec9Uy3QdFDFuHR8uawJCy92q9VcU7RZ",
  "key27": "5ny9jMahkJqaYsc6j4ZEinnFiJSf3sUSznW46vMjZ9guzzR6Ti69Fwdz8UnjXSBnPsqqYWSJdUWybcAy9GTHp8j",
  "key28": "51CWSpU4wKeHjodokvNJZ697PJF66SwTcgxCFFuuFvCREv3qGMtGKJ2zqySzcod65gqzQPts62zFX1Lbf8YZc7qT",
  "key29": "2CjwAYhZMCc4YXi2yqddMwNomxFhPJXmdg8McYpymodwfeDKBjadMGswgAAmZtoc84ZYuqoQiuy8SzitJeCtPEbM",
  "key30": "3Fg86BuALWDpVJATVvkoxsEV7fTDKhwNahLy7w4Nw42ZogWogH2VL3zcBCA3hSoPvxZfavP7JkSmQdfsVeLQMEyi",
  "key31": "3B9mFs3GMM8MAH1wXDQfgHJRH1zywkN8huW51koKN4Kju1EPFvN9nBUpE4WMLZ9Js8cfsUPQkuzq1ZhJMKDBeY8F",
  "key32": "2ptE2ZomQsV16GNVy3SK3RcEDQrEWPwipAcZZ2pvPZqVynrzGRcxmYrUDynkSEFLChq3zPaopBnsKS9BoWFqeDDs",
  "key33": "4YJ733NqrgHqzmUi7zWCvnBeuMuvwif6vJyLSH3XE9SMESLCnjv7WQQvYmaHZjmpr6QDRBnzo3W894MiB4FGo41K",
  "key34": "2uNGqfxKJcd1juwNp63s9Qua6RPNLaaUnyZhd3jhiNjMKETHxq4htBt61KBvjWAn2L2uAFrkBsP2iQuUjybwzjy1"
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
