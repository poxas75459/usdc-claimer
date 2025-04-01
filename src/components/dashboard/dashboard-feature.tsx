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
    "5XpPtyty3WfyxQTJGX24kr8h2J6RX8BoABj2P8jh9Pqw6uzjwzVGMREg4F26KzXyu2jiDC7MenYJs87HGRA5MJMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTxJQ3iHRZccy1hEt44iLdF9ZCGXjpGaTyQNY4tqB8W5z49xEdyUJanKRXoKgcNehY1nZmpKgS6e2zDYeJhrKe8",
  "key1": "2DPvUhWP61D1EdBWR6hv8JcuSDHiQewdtsPUZjQXxxZKZy6hRrygwtoxwezV7T3azHeDHPGGSPNbyFBAS8Jhk7sc",
  "key2": "2dyJv5vTJ88gUkFWBnUL72hzaNZAhbhKwp4WbQZ1WD6JYoLkpgUnQWpu2XEBDowEb6HGkLgcHv1hu5XQk6Yh4KHs",
  "key3": "5ktpmwETcUvu4fgPNymBGQWmpZ1UBmNi3MvGUheYQ4xjSrDDbn4zRN7D5R2qFbMdxxufPyNcyLbTxNpuU32FyCHx",
  "key4": "3jezyADGoxA4NN7BMdhoK8ek3oxCZt8Qp3JzRCMxCvDpDkmq7X3ZD7bztYgaEv8f2pB43ydbcci2s57dAmFUhamg",
  "key5": "4UP7J48QmGxxRfxtaFSe5Dy72WPtEDsuNQ9R6t5kPKtf4ShgC9243W6ziHhwNat4S4ETjk4KfYUhzxahNaJgrMAy",
  "key6": "5yZJPTAxSvRTmbZurLacnC2YvCoLCDK3FWNVBeLasGxzwdwiXHPu89mJjJmnH12v1bLxgnPKuZikpUquDQ2T9uFp",
  "key7": "5GhYBAzQFf6gXPXquwLzGdWazHJjXhVrewLo13kTJvrABd1q8322usugZWTALK9NWpYdQnQZvQJP75cx2vU6U3kU",
  "key8": "CtSJzToGxFXEeXMu8iqVQRvbCVVdCVpNrK11KGFBYuZHH3KZnBKHRKbvG5nyxc64HRfxsgRuPGufTMabHnvNB9G",
  "key9": "4gki7SzMfTY6nExAiaK5Se7XiPD5J7Kt5Q5TJpHeEdK4kGm6Xyck3BvtjT7YPkd1ctMvBSQH9AHmjH2N8Mnnqkgm",
  "key10": "5nZ37a4WhQ7MEX9pdZR8jvmJs4fL4N8Rpt6fc7rVcjxTcFxtDRg4UJ35PD7ee4dFpTSpwS9yUfNvfqS2v48yP2JP",
  "key11": "R7Pu2GBybnXkpHd29Bphh58spaa9yCPay8XiM9FkgWgmV58GzEHMH2Uvho9xJ5qiqi6Aca9Zq7bx8Qrt9hgD182",
  "key12": "5K9HEvhqEQWRFtrRndMts8pFK2X8dr4C3JcmeZ5jeet13bjdnaPp7iU5h1L9vUcugYA27fNNysatoPod2C8KM2wU",
  "key13": "49pcuCDDFkmHN6y1LtawJQVRggZouaY4ZHwpHggGbFRP2JQsQ9mkx1ymxP7uuYUxke4sMa6XKf6yJ4AfqfC1zY4n",
  "key14": "35dAYy96z65YJDPanY3WXGdVyivh4ESqXqBLQG5X2QaP8vxX392FzL7kscPxY5y5hkhWeREHvsgxuo77A3QNHsUP",
  "key15": "5p2x3YkkNitKXkDdtrGLiSPpES9ELQJ4xPLHhyKcarcTU8WTUhCcqtXD6RDQwbGptysV3JPbxrvwjectwvUNhyWa",
  "key16": "52yvSV6yfnp1pjER5nR5XKnmqh9jgLmrFejQUERKc4353gXD1LjehUSDGMqcs8Cz9tmDNXv7bC6NQpqW7CGbYmCy",
  "key17": "5Tj5hs5rSCwCtkfjHrbJcW5CV8pyfNUp8u2g9eTbmtLLUGsxDN353XMzttTaybJizYNmndirMXqHcDEZjUMExZx2",
  "key18": "4QDjGcAmTgothGtC4u5X1kfokhgv5MhxFZcekorBEESTUi3sWSCRZgizDidCntsvrHkLS4HFQQmCGBrV6bR4zaXz",
  "key19": "63fhBBEG6gjCXB8qFPND1rnzZ41YzrvhkfJeHQcF84wUSdSDiqzMipAo5kqs7GWRPR5jq7zZQRDTXWt3bNgh4v8y",
  "key20": "4PyvHURMZTuX9S51WcesaKKg151CauHuF4jfdUSt7TKUsCPpcwLzbZqbHACywzLz6ozpdkN2TZtunNt3geExxDKN",
  "key21": "ZACyNRyF157yLfozTpAcHZNMZYPmGksTro3LyHGvdJSu2qvpfGcqAkTjpnEUf8rKegM2DSJk4RSD2Pmt4TCPiPY",
  "key22": "3tZFycwtAfE7RT25ijsC4SEurTTurhNTiiRsipcSHD7vUR4TaFAH4f9ssSF6uaV87ECsTUZ3se9GRnP2pg38gxRz",
  "key23": "44RvhG8UjFLYBhzuc678nru1d1VBvTcKMknQ6FEVwRRXJoSzMfyG9sxAtznuDfYriB26s286AhMHyPHr5QM4yhG9",
  "key24": "qwxJodhvEN1fH6eq7UkXzFTuRKH3JjkBreQhzbpLRXrgzGWqnq6P7v7XNy8fCDwU1Bc3us1eDs7udL4z8njVbdu",
  "key25": "jV4tt5UaYxTx63XmHMUALcVmeiVwxqLLhLunEATVEtLftSnh525iqGgrZTUgSDkC9gTin5nE88K8Lctt25o5GFk",
  "key26": "3Qz6T2sCtbAx25NVXtSiCiPg5DBUG19SV4Zvrx7b29YjcLc4frkYE1M3vVuzzus6c9GV2cxe2Dg2RJjtiw2y3V2N",
  "key27": "3iT64caWzoEK5xuLfkwGSc8YVuHbyUjmrn2jdfoQ9kNE6rkuJy8WfJ4ARSELhtvK3ojWj7AgyKP6VfsLagziZvde",
  "key28": "2RnR5QDGFQe1hwN7ZJoAqRrMfhvygfnHPKHvhiBAP3y8gUs1FUeCoSy6ewSAVUN7PaNeh2eAEwH9Eg5hVXZvP6pv",
  "key29": "4jJWD42mD14VmRrubd9CrZ6HREyV6LVBwhY66nYwdQ4PcFhLjFfDfnJmfKjJbQfoXYht79gV66dgC6HhhPyJcjaw",
  "key30": "3ecZtSLW3rNqZ1TzcSpxqTo6JyMjz4UPgRE8fK2Hj2V3SFD2Rdj9ZDnxxmvxck1on1vityJ341yC9CWNixAvbMXD",
  "key31": "3uGaSeVtYgjtVLtVgrGNPLhHtPjgvdHZfHnygv3LJrxpp5K6NRt7x4eFkPxtivXyw9NQKdV614fTxwVkj3CihjHm",
  "key32": "4F292Mje8rCMB66mnqbBUoqANAkE4kcYohBCwx7xynuNLXbb1y6y7e4KH1zGGBuMTWjc1fxE5pFtpzJW4fjAEZip",
  "key33": "gesk7uWYunsim8a8Toh8RHqbn28RZAWaBBEWvFHDwfsSgKVKcvV72T8myNCZQb6yohMFkMhWm73qfCwTXUC2wQL",
  "key34": "TFAcbmcz1Bi3UVRWXBmpevJoVnXJBoyaGunah42onhjCrEoFuPkPM6qzf5tBW927fAN7dGFP5A5oE2DZGtoLwYo",
  "key35": "4dZGc61HrsyZhpXQBdfb1k6HiTAK5QPCAYAxXYSeztoP41DQk6M3uqWUqKrXHRABzw8f3uA983s7YSNwi5zmVnrK",
  "key36": "2mAXbXJw41vrqarPHhNgPEuf7wh8j4MsFbmj6TGKGx6tyhkP6BvReu8bRWAL8i9V5PduhaoqkX3g186zXpz75Zks",
  "key37": "44RnwwWbJG5knXQEZhVPuyU6Q5Q57uKDjypEd8meEf7qkJ2ZS2E7x9RpSkQd9yMDvSQgSyTeaqLBvjc7zCwDCWM1",
  "key38": "2d1zLzqF7Jb1MQBn5sjv1VM5VY8nhXZfEZLBgjTjsgc3mHgK9gVSLrmhcqHYSDdW95djndQnJxBSibQFgMtdM9fx",
  "key39": "4kTD77xjumKYL24akC1NjwA2vLccUr9PyFXicg3sjsTc9vADK4VSbsnqZ5bkb2ttnBv4xyRuiZgGFJCyXN3nhgq5",
  "key40": "qHBn9LcdubwqaPcWqp1mrrnio2aunSn4o99do5s5weuYZPDwQUMqKQhthMMr1zYx5zhzR9pqQgx7M5SScS5wW65",
  "key41": "5WzaHCdRdtheVcZVfWsRPvcE7HA5J8DWK3XBFU6B4PVqSHDrAD5MwV6qhynv667VauUySMG12U4DZWADiPh43adB",
  "key42": "gYqKZM4J696wyy7cozRUHmyiGMznBkgQM8uoj2tczjvuXMR3XcYGo9Y9FNyuENtrSdyVt5b29jRCeDPw9Cb6AtV",
  "key43": "3wHuMBJ9esUspp5vqEQD1x7dHoAYRJk1mRno8H4U5TT7TAASksnh66LZi3gRcLh3txaSmUfHrBuSYBob7gqh7P2e",
  "key44": "3pZE6b7UMtvZKmmR9FUp4TMa5gpfASzhXm85gSNNXv4THcqctSKGjdqnFsCsHgqm2RDLBbWhoumiPxQrrmbi5jUa"
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
