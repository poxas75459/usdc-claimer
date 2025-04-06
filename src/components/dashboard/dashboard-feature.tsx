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
    "5cZJJvEj2iDZupLMzDutery1ZYCozJ61Vy6CL1cmebNX4ZDrzXbNS5mxgaYGK6J5FWSupyyHDepTCQCFDh8W3PVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPWhf8AmMaibeFs5ZdbCxv7px2hp6t8htahBKB2Rqtt9dMSSisuQC1sfW2M3kAL92XBGqZFekGAyHRGDWWiufbu",
  "key1": "3Xxu5yk6zCsMBh9dpEgDDRpZrz2NuaRFCyvJzfLJ8ozZDAwZdsT1oFo89MaNzrGTQwpwAmPhHp6ZArSbJEqQw8cg",
  "key2": "5zLqqcA9ccwUfdcXcQzhx8VEakxf51uGWJ2RthgzyyfFm6Y3qj93prRTQMbmLSujqG5QKue1PTtvtY7pZfsqDLUr",
  "key3": "4JUibXLVMC7LZoEiRoAWTEfmiNaQy88AHkg3kcmaWuS4jL1mCfNNwLgDQrNQP6wHaz6wuoES4sonNHbq4DDA6swZ",
  "key4": "2TDc72pWnEKmexRhfu2GWvfwoDLJBUo3Q7Qs1T2VhqC8iUp2GxKg1beF1j7Gf1Xn9TkfFkaAoKFuGMTkVN3ixirx",
  "key5": "5QTG2K3GhLikNLk5QBrdUBYA7UPATuaLJCCHaHzbwAnSqQyH9Cbi6bUAHgNu6pYEDta6sNZcqweL9ZLXAg1kHaeM",
  "key6": "n4KiZqBSBrwn11GM6mHZu5WHHAooJ96GoB48ZDwjsJUUaKexdXvxadMTJxspMsMCnvNshVuSFzTqCbQ77Ln59jB",
  "key7": "2Zc7W7qCuxDCBg13L2PKZETZGwN8tawg9cWxQLL4bQjjwMkMVXG4vvpH4qvTkJ2574Mjdx3N2yVn18rgawi4UE4D",
  "key8": "4n29BFvk15Lg8RDT3vzdv7kaT1RVTRopJ4ja4rXVBaCCdth4GqNdr54MqJAC3QCApaxj6oG3H4rTiH8Nz88qoPSQ",
  "key9": "55FWDVhiGwzUnAEmWeoY36PAgFKZ6RmX7jRy21Cvb7g7w1gk2z2R1ULTPLdBP6k66x29moJenAgCTgeFwageaw3t",
  "key10": "39QN8uccx4p3YmCsHJc59u4ZkhD1XabMgtMHPjEB9BVA6mZNUZ8wBhZkGHdQgT3PmsfF6EQnyF4dfiCTw1ooPwRv",
  "key11": "3dTFwmC92Qz9bhFKoWdtwq7soNJU2g9SBUQfCx6kyAeTezUxuHYuCp3jV3L57JZqsbNbreVLGWdUVvMojcwnrQdt",
  "key12": "647HRF2XKW94FwskMgsuvoPvXjq6YYsjZoyxRz53uVHnCqiRkEnB1TadZsSykjZvdRK6emoFV5hd24fRUxYmGoTR",
  "key13": "63uMB2uBPJn6oeBP7txCB2j3hS4AfwCdBkb7J8L1ZaYvpFaALovMTCviJPwm3PYYC6yGs8x58UjVfPBqkDswQqkP",
  "key14": "5cwftEdmi7tiM2FfZgBBhxS7N8BqJD45N2DrSgUGQpie3Zn7cq2MJM9adQSTYxshth9PPe2q87y381m3UDsNztmB",
  "key15": "4FW8Tv54Y24ApuDKr1vRy663ouudQZHYwrZud8vSV1EkYXbWaarq4Dr93k47GVgQJodCzgMTa8dkVY9z6HvLbUuJ",
  "key16": "KQPfX8GjTcRcFNMinyeLvz9WKLjacLmgsqLzArDRfJSEy1CVUTeZ61wfuVD5iiHGpF8rsvpH2VR3SWTvW5QfHkd",
  "key17": "LjBqzyaBAisf2Bva2uyZhvM8rV3mdQnDFEojZyxrBL4WB9fQkXp9k4k6b5KjwwHBuAVTgz1ohhfMeWCR3kuNF2U",
  "key18": "5uGP95o16pQsQpnG5RgCQXnQUfW27Vt9kj15ivUC3Yz9tELeQEAzN3nVfzQvUeHdTqE6CWRQLMpLUc4SwJqzNFaE",
  "key19": "3iXv1EqEiCcrfUnsZ6a1a9ZNSJcPrAtjkiSkfUVdRWH58XwaBUDDu7Lntz5fLsFhWqLHDND8PYuJJPcD4HMMKUuG",
  "key20": "nfHhR1sJB8U4LeDji8vfNWkwg6JjSeBtXgqKxpoTAbQt6gJajjMsuMXqi7rAVjESb4983hhZDmNyFs6zgc49mzp",
  "key21": "5QMGUZTRHLGHimrxktWUTHaNmE9sdkNvoNnXk3Eop2FfVDRmhXntChvBP9b9Tco5Xyt7uvjhpcfXevae6Lp6Q3BZ",
  "key22": "4krbSJar3Fc2L6hm2F1xgsTNWBHiQPQKrRd7KFoXyNXDiANTnE8pLam19pPJfqNq6jkK7GJUXKL3q1FT7ikgXgMK",
  "key23": "4FP84GwvJsB33z16vtVX9gjonsFUD5chi4vbi88gYMwnejchy4cGEMbW2S7j3DisJAYS3pZLAhSa2bUu4xHGVbL3",
  "key24": "1yP3BmV6A62kHurbtKPxAZV2haems2fQmryAdDGXZUo52zUKnk6JEbcacHtVVrTR7Xa8FSGd1vAJAFXNhQwffgL",
  "key25": "m5j3dcVHy25k5wBTG5wiA2kinA9Sg7ZggkXjFKFbRvNPegL6qnnASEewGB9jWBqthGiR6Rq4ZUFe8dGChmteCjb",
  "key26": "2nXbXssaWju5GoENqiP882DUQ1d2XWSfNk86Z9ctFGvJVE2GvgJer4sxJeJC76ZvYCA6GdWdBLccbGk7Mi36smXj",
  "key27": "45jhsHnjoKWiKTaxTUYnXLePRzQrdvs3Zdmo1mGWynHJjx5RW3BADvTN8GToGbMndyd4JhjzBqg4LN9L1owAXFBF",
  "key28": "4K8Nh6eeVqbaXrjcWpv5P9P25zNmZuozkbgaqjxzmE1TcgSjWm8HN4FmAJdu6mGDUQyiLmuZ7PkdeKY7nwJwNh5e",
  "key29": "5APrQqocsSksFXxSvY5NQC2CdL8vGCtKR5i11RpUFBs2yEfeHaDa7bgKpMDEd3vYPoxx8XR76dkqvSyEpVPyHYpq",
  "key30": "2cS19922t5yKPtMcJbAXBtKXdpyGsZ75NF72F6L8eMLHYpnJ1r6wFzVUxHvWESJuvavtjZCcxDLVCeZJmLb44Dxs",
  "key31": "aB9xksXuMqnNxxLARwBW85GkZLA78CPgnnxfseaXSQZ1M1p8Yyaeb7s1tmBCzkWvY4nEWEQApnrA5VG4tC4pNzW",
  "key32": "7Xt1MwZz9TkbZNLjBmSMqW3xCQNaGMRcioeyKTzTgHFtFUj8bKMxyfSLNWQG8AhXrbfgq2bw6aZJdRqN1cygHM7",
  "key33": "aGBgt2xXPS8FPWgFvWomj2khHNP9B8bQbsdiPd5ecwYtbGH3LUDuUPQH1jEESgsEXTdW6Zmc6V1krhJ1G9uk6nZ",
  "key34": "nWW6fJoWKQrS435mTkHKFaetpBg8wEQaMRiitWGKCV6z96GTmfSPNXFcj8GUyDV5TYHkhLps1e41AyzL3ijtJnZ",
  "key35": "5KddnnWSCQSrnNiJm3KcnYnpdzkyn5s8DhDUZGzPJN1i7Paa62xe6waP4RrrD6c4Q3waCfbvHgaxmibKqASRANhR",
  "key36": "4XaBjLCWUu5fNvBowpSGmjabMK5uHyXUyd1FG6m16B9vkjsX8cX8cvneFp71pVJ6gmMam8Ho71qHzP6rVM65hoYF",
  "key37": "17efgSkoZpdCf6HDw8883HtSWasmLMJw4STz8XEoDwNBjaGrMZKM8E1oH7ZqJo97kf37wRx1xZeVYC8BGusoHwZ"
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
