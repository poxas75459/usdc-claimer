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
    "1fCGi4Xcvr92d7PNgjwL9J7hDwyBLnR9XGPrKSUJZ3hFC9SBynz3uri3K5WavzjRoWDKGqsYYXD3D77CB5RBgjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXT3HQnK5TMJuQade8yJwgB1Gbge38k5hvM1wDqXEUd1Fc7qFhCnTgKT4HGhpjFQ21BKYzVftNmBWEkQPVRcPdr",
  "key1": "3kbR4ntMCdyD1uQ91hzUb68oYM7EnVnNiPvFEcBpfSz8TrAmyjFhSo5aX8AeuEmeMLKP8PB8q2gkisQJ6umLi1Ad",
  "key2": "3vdBzDDr1cQcUjXmPX8tdHpn1DJ3EZ8auKLfYhSZV2yRtQbXegdENP5X2EqyZt6GGaxu6DKN7qRe6g5BgEw8S32c",
  "key3": "3Bep6jPZFs9snJMbAiv1RvRwUHGc9dDfiPbZjx6KcTyPEMWauTjHLq7fZWvzzoNDgQmDxwBgcDEpsQC1Yep8pnqd",
  "key4": "p2xht16UHiGpjjoVq4HSdNwRFPbr7LYQRJBizQUmQfj9qFeW49yxwQGz15wen9EYoxaFifBEwWjRgfuNDB3BsQf",
  "key5": "FMBk3pJ2Z7KL1aRdyfAMkBub4JB84RWCHWgh2jdn8QUk69tAtcQAQfdKoY2wcmXoxnTA9qkSu1JJtBeA3AhTbg7",
  "key6": "5oc2gNRNN93xWdoFGJ5cpVgHvibiz4AFheKGbCMmpWHySc2qTK61n6KJTouyic4wSsx6HmDLrR9Pmb9wbBGRRvX5",
  "key7": "2n1G5M4UUyyZmo8GAqSkMsCuDAraAMVLJqwHVEr1B3YCAuGQHUreD8mpmqGwWBdXz86yjTEw8u1JwKVjBPZmneQU",
  "key8": "4NH2jZYezX74aLCDRqnVtQ8zZpw22wRgGKzdSdGnGWt2ZiEmiv3neqVdq4X9VgsLisYXCGRKTEf8LG4yBfavkVue",
  "key9": "4Z1YLxp6J4teqkE1D54nLRwZg12MgYqS8n2Quhthake3ZFYjYAA59EoHM3bbo7dNtRk7a6WsQq8aKvk57dykmUBf",
  "key10": "64S9RCBUujfmTrudAVdsEmWuuwNrnJqWviyuafKEedLSdgBANEaDTy3nHHmViufLzbFgBDg7H8qM4Mp5HWJGpdFf",
  "key11": "HpA2wSchF129KgjzMQrofkR24M5aajGD7EN1kDxR9QCebVtgcvq7CFAvkfEPDRjXXBQ1JokHcftGgAQtS8srAmd",
  "key12": "3JPMMx7h7a57h3RdSoPGhQDTYFppJAAsXU83SRLkyNHry7adm2xdPT5YHyZeZyMi9Bftn3687mNcqYjhFKhAQ9ez",
  "key13": "gSLJAH8AoJRdestuToirEZeEHH7ta5ds85VG6vgTdueaosNjSvA7TLjWA4L2tiiGwZLiS9tybaQVmGkgzRHdEAZ",
  "key14": "36myJoqa3cg1VHNQ1dmivyeSrFVGWua1UQbBDp7xaJqH4WDqUjSQbhUpcormUnDCYsUodtP216aNBd92G9X1ehpS",
  "key15": "5KE9mq1nBC4FB9s76ESwAsNDQd3ErWWW3sdb5MZUeo4XYmQ8BPGgoFh7Rv77D5YFBc8Hx4KCXLoBqJHieLtqCXMR",
  "key16": "ZGsVJaB3jfyr7x9YCX4w1tA7L8kuqd4DQ2NmtCsGX1TvPpwpqHan8pR2e7RJVFNMzn1SoK6oeqHpgduaGzZewQ8",
  "key17": "4cDH3Xqcx9psK4fFN67CNzD7ursaDTvFyE7onRgPzmxpSgVmxQKuunxZEfRXVjXevuv4XvuguV8tnabs6pz6BcXj",
  "key18": "3d6c56e5ijNygyRJuyepr33unZXFN1fBQJSZNxUgVgecFwv75EqhS8gNsoHqHmresN7TgRuF69Fw9oWpdPu3p5t9",
  "key19": "29WujHZRRfvN72cV4uobgWdmtmKLvccSpTmX2gpLpMKeqxWAZNbSKH5BbAqTdQ1jv1kYFEYu8riBYUgUt5GLfPQp",
  "key20": "3HGRwcga5xJLsXWF1HFcpnceNS8vCLQTHcCudhxpdWQaZCZus1Vc7u9b9sTDC9fMivAPQVm9AA78f5iyRZN83C1n",
  "key21": "29ifmhjq4Nu9DiTpBw9KbhNWs92tywERo5Ne2E7pFFcnXoNbWF5XQ4LUMEktmSWbfAFGCQ9nRRJ3M6tZWkuXYP23",
  "key22": "CAypF8v65HP1KqTFT8iU2fuxYJih1QfPEaQjBjYBttSNUsYuM5crZXhaeqRJaxebZT4pXZSF5nBbZB1nyW3gaA4",
  "key23": "5FNf4GUTFK5wigRUuU6zuCbrkWcjM8zXErpeFnHC1zs3DyoXfxgCEyCZgH1nLoRFtDrCwirLovEZ6JgbibWTq7hq",
  "key24": "4AcLdt6YUXGcLuYY1mEviWKKQLbeBwyRuxdUUmuofEZ59Vyw3dc1MP14RbwB2f52NxEzBgeU6G1VjVFoD9vALhkL",
  "key25": "2rf7JdK4X9esJCe2EhAxmDPb7XqahE1UTi5X1Jhccj8HTFP73D8TKRbfjidUPaYDQNKp2uSfZ6j4vvyZD3VXDCrn",
  "key26": "NKxGY2vLWVYSvJUNb1rAWDzZfFSffy2zR6v1K1WRSUFKzgBZ6jUF6i2TXTXwKXrDH5sGkZNhNNJ7QAa5FBGpxfX",
  "key27": "2jvvuSc24TQJBpgw9QunPz1PjTa7RDhEaEThE2w833beUbXSiMPh4zVecE5HYVH3F2B1dxgRTwuGrmsuWd2DBVrz",
  "key28": "2u8Qv4LJD5wFDy1KcL2ZXTr5L9L9HDyxZKAKybameSbDpMWz9syHf4E3zkeTCxyHBxgwJN9dR6cFRtDucdJwgjWz",
  "key29": "2hhCGm9oMudeRmCbAux3BUt256GmitWurNpDM5PaNBcbuZnghrjfvUHN2MyNSmrvnUzwEXhURL6HwUu95T8H5mPv",
  "key30": "5RCrKyZCiSpHuykbgAUTmKfWbNknp4Y97S9XhzwmEd4HLz7UTgeyqQareDiNm4JxFvPPqUyBZrN3nGnDkX4zVBXA",
  "key31": "2jrDEip4fjURQjbXwkcW4qYfrvGsX8GK8heNB8RQAbXrCSss5uDD3aYHR76tTNMHukqsifnyJksFxDTxHKb7SmjH",
  "key32": "32uAXTZXeUBm5F9n6RDXPtuF4a8qoTAViNAaY4qZkeeXBBiHa71dQf15eALqAv9iGLxtYjHamBK6NUbZyaieSDVQ",
  "key33": "2eQiZVTvtfNWmY3PQvKJkCmqycVzGGNave9tE9e4paNuJTpG3P8uRLwhAHM24FUkgKTKfbM8dSsrva728C3RAg4q",
  "key34": "3KNPD4PT2ADo7YpgPWSvUukEorRyEj5mkpWMo9VTzXUjfTVkTjhgQTAjDcqw6M7oZvVGMbvQueo56C8fgWECoJbZ",
  "key35": "2ktJVWEQ2N28iFaZhUKZAARRJPH2Y8ntM1jTCTkBa5v2vDMpfQXR6kmJickbsEDkQ4WYtWMcN5hZhMuBcg4xNHni",
  "key36": "3KQnB63TAUpNPGEmk9PiamAJWMDrPSQSxB56CAUBa4jPhJXjAhYXaarXeXX3UUvzHwHPy24RcsCbFYcnhyauVuH3",
  "key37": "31WMKjfyJ6KrSA4U4r3cLaFVpyu5bDT12qkK6Qs1SF8NdNpxD78EeA9KQzTaUvsucNAzEU9TFZQt8aN1CtVcz1u9"
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
