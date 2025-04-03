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
    "3xrWsZnYDRRR7ZnacZX2Cc9K3iAj2C5h1D5mNnkTdLrJqfYcWNWPiyVb4xkmocAryVyCaUhP72942EYVVwJQLJgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXW2ciVoy2p4NAp4GKJRJNcxHtvhd24XczNockPhoRUHjs5a1nmM3yvcsUuCykHguVyDYjVt9WFf3rDSbeuzxRc",
  "key1": "3srQtGLtUdLu5YUn1UW5uqkYd6id8eiGnA7F1tDnPv2Qaj5YSevxM9yjRDbyKL3jdpZ45Qhc5ytJrNcHRNaL1MsF",
  "key2": "3fuFpwXNaNCvZhagCJxWPf5HbwhfMp3RdEepSK6v7ny8QpfBwnuuLufuJGJmivMVCWFo4W1FHf5G3JZzFADiq3Vu",
  "key3": "58NneWXrW9K3pV3DckrrGkwj82MNoxYvzMndFy9FVfq9pg35YJRm8EZQDd7GXzsDKL4DL1MafV5rPN3LuhQeTWLy",
  "key4": "4ztWYLuftpzXL3dCMc4ufWPqr2eg1TBDirT6hw5HgzVAbCzipxbt6PsduPdHD5Wuv52ombYaSLWyNxu6w4czVDwh",
  "key5": "259Ua5Sz7qCFBRAu52KnXWxJ9z6aURwBQgTULBbCdKB1BcaAyhzjJEmDx4DcWATAUYD8njPYcf9MTY7n7xWg8qpt",
  "key6": "3MR4HRTnWwyp6MhfVWrXpTxMyarpwDsycoBddGHHwvcC2EjgKMbunbkNSw644BpthxzDbb6MB5BRKbiniQ76zJDX",
  "key7": "Sue3YjpYEtbW1yziHJrxSW9Fv1SbEcBeQxqTA25C4hxjndkKciKUAhWzmDWbdQWkRU7JPJ6nEZ8KjDWZPCkViji",
  "key8": "5ZXQ5EtRY4aWRHw5BELDXkeCcNoencQWD8r1qhJohURGuM5TR2bYVSm1SnnuxGBpWjnYydVXUCV4JQFUUojGti3z",
  "key9": "grzo9BNBCy7WutgBpVXspoBtwz99L6oAwyib3y4xwq3JHv4i4Wp738JVjQQyTWbEXQXB5g4qD9jr3rWMz497DNR",
  "key10": "28n6oEMKCQykeWKjMfuvKNhCz6GiB57KKMjJbFwAAffAnt33F4bDqDwt1QCSdaZXeb7ZUj59danbbPTiotQ9N2aD",
  "key11": "2s9bVQTVFrmntRLrgJNjo2mUNF7yGhb11PNvLvso8Uj3ee4rumtFjLj3fmfiapxMojqEUBdu1q8EFVFQ5nX4YXj6",
  "key12": "2J6cwVdYMV7qgzYa61E1YP4EtnaSrx5CQbP2qpqKKQxcda3uRT6BiBXZJ3U5qrsr7Xb4fiPVtuqE75D9ZjbmhdWZ",
  "key13": "35hBho8sr9Gi9tpvZyUd14m4g8o5GqqnVTnSivZruFFaodWNjsKWwMaxbq21s2kwNcfUkFCMMBscazU2tHVZxrdm",
  "key14": "5UY3GjnCaUcYjo1EwkQwByfjfbh4Lshd228J1kVxdhDG8XgjtUruVgT9gDXi9sry4YPWHVxyzTxDPYsibR4BFNgW",
  "key15": "jqAkxDfsxn1HGjnCxQC6Ta9ZkTYzktAL2VnVbBZRWZUCgNLMFJNUdLvaxnqVe8mUufBXUKFg4R4fTDrR6Zn2Q3e",
  "key16": "3pdAFpNHa8uxBsPcRRS8eWMtrMcBsJDgmzYetBLpZxCebgu9Kaawbot3sgBA3K418SNfmRdJyB3N9zmRPB5raqx4",
  "key17": "4mUpvH1wcteDcCgjmmmHb3CJCJM9woWw3Q8xvk8uhBqkjNB6aKxEtm3dzgVreXwktD9454aUmRTygLq8XXX13Rwh",
  "key18": "5KuxywhXepGjLFTsrB21Bd7EC9PV8eaoqi5nvbN2JSTNgYTKXk2Us11WhWaAXpGgwuGyxK6et6BMssTpU8XcJ8ES",
  "key19": "3Kro3CpxPAJNCmdyo2oSbAnxmeA5jaJwnU4Af4nHPVfD8C4YMC2gT54KYqcx5i3gf51b1viJeWVE7X7mKQdiLkXd",
  "key20": "zgbgJnK9XMiptjyAix3jsMkqUvZ5AUVVCQa9HSLREjdNXXhigYjdjaD1oUesUgwAGFqdRaGDWQRvBXwNuCsECcV",
  "key21": "59aX2R3khRfdQwzcEWEsWq8aWoJ7Z96jPpsSP83A7eA1F6aYDhF3MXFLi52BQM5i7pvAumPHXr2Bg26BEQashBRK",
  "key22": "7uWrDh8x1QNe1Cesm7wzAi3EEMSa67sdr4cAdDYcCDPo8t5Go8LrfRSmfkU3AgA7GfcuAWyCzcRKaM9Hnd3yMhU",
  "key23": "5LZqrgHvHht3mYUf4RwVeBsYgQJx8176jp1Z3qm8nqeggwYS2goYqG6SkyvuzJJBcTh1Ltkgj14YyiaKYvHcniGB",
  "key24": "4LN8RWspzsodnZ7sPUiBhT75qpoPKQeLLP8Ukn1J4oc7Gj2B7jZMZq7akKJtnKskNKF1jcPgiLtEAq87d4UZ1ks",
  "key25": "3ko6NPtCkNgCTdmDP9uy1AG6pJBmRCFZPovmZz17Zh3hqbu2vSxjp6KSoAoFZBBBxK2QrF7gthVCmEHLwUo4MpR8",
  "key26": "5QFAKA6SLpAyeGc6E56rkz73muycj11NG3DBDbXNKrtoYvRgp77qcqPMyPqEEAprECGPnejkD21kcvepTHKqjTW1",
  "key27": "4ktpsyx6h7AuwPLNEui1DDBpnWE1TXJJStqskfwd7PQd8buFS5JCPRHFYS1iBCAYH4KyPS4JUMDnkMgyy4DPm4wQ",
  "key28": "55APfTfoJB4NdZzjDCsriJ3mueBJpqDtKX1P2pGYcZ54qwQ7WmwSyM759PzThCBVoocwznUrcJgbdfSJvobsxGnL",
  "key29": "3fEPgwq2W75udPUzg3EKHTtkqcnKorupe7BSNeW59PeKvMLQYxxkhboaTWjbntKU5ZSvXMrSEfJ9Zt2GKAnRrizY",
  "key30": "uxvo4bq7FjHkV8XzKYRUWuhqEzReipQmhCzayM6j4JPbXwSJywTZZjKjFzdXmrT8Qr6HogVCj5v3QwQYSEWtSM3",
  "key31": "SDRVMzKZ97HXFBmiKgHr5uapdx7AP3AheokFHkzzn6QkoX8VY3sxYYGuFC4cgf4G2KZmu93k7cEbgQwD5rL3miW",
  "key32": "4JA4p5fR4nJ2xW7q9g2XQLe5UCPokDKK8PqDJHAyntqGFmuccL4nVPVC6Atm4HtQqy5n6JUf1dAdCN3SWnayexBP",
  "key33": "5Mtx2LsQHEaBNZVjYWLNQRhAwaAMdeYghLvZU9uGP2oe5Xy2NAMGWD2q4AYXwHwm4tfo4ty4pLmp6QMhp8VfA6tK",
  "key34": "41Q3oDD5rJwVuJJkfvJLYRjh7EgDG3EQXvjYJBAdmqDgE4HpA6TjJVYVTmkastnhiydMjbQM9wVF1xagGXc1WCpf",
  "key35": "4ZRtGKY6uiF477PDuhmqQLoukSEuKky1iPKxCAnt22CaGAX1v65r3PeBX9QUTgSjLYUtV77sxnbse4ijHamZZV82",
  "key36": "3h45PC2nhxMiKGrqveMSQ5qShckcxqL9vcCKJcowVDt83ZB8FJ5825RgLLuetRUQumqEPJFbFFZDruEuNwaqKfab",
  "key37": "4qr3xxHdfaJwqw99nXuy8TGwpjknuSUnBCBeyaLz1wB94bYtcuV1yeozfG29ZqQn7vLwMKZCzJ4e2xTrid6kff64",
  "key38": "2UGoA5YsgDHhBmBQ9ZaHTqNFcxX3nJTKNMwiJMsnX76WA8RWjxNsncD3LEGMAH6srEbxZgqhrPozPuw7VYci23Yb",
  "key39": "2sqR99ZyGrW2uh1a4VkEq7Y3NKQLF3noWFaD5KgzTDhmicHwmz9W6uFxCBC2QajKx3bUJAufLLZ9kNRxtJcfzX96",
  "key40": "SeEmbx2WrSAvL7Wptn6FLXG3YspxTgGwewA1JT2kGync9hYNrfgNbzsiSCMa6Rjk3PV55gxYLcUpwXDhztKCiZ3"
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
