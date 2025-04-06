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
    "3jtctZdkAj7Y3Jpjq8DzkBnrEfFJ2qhQ5XufbmGeY13ttJEtngCHVZQk6UqoVcqNmVDrkR5sBax12sCynD6VB5Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXdZaATM8ouwTFPpPsEAc4yNhT7FtEDPNB6LtimnFz5S7X9VrbU4s67SRURRfh8CNneEg6W78xmjGET72jijpGW",
  "key1": "WgGfLadujQxFud1jwhmUeBssV9zAQoq6Q9vY3mJKHQKZbGN8DsTuZjN38VewYH4qdHYadfvyBF4ohqoG7jPStRL",
  "key2": "4uKUJpPEitzUkCgprTgZDsc2zLPQejWYtd3JnLTZjHcoCSRnwPopZ9MbQNaWuFy97FFv3WszdJ1KvThXJzbPEgEc",
  "key3": "3XJCAqkp54UpkdowR8S1WXDsshFJNp5EXB1mM247nh7R4kvQ4uoE8eKazAN7rJKksT6CKM3PTXd7JrTAL4chQunD",
  "key4": "Q69kftezPoXuhqcfC3MSCurCkTvsdnNP4iCQw1DSt9w57gHBhSDAJHXDZ7ErDLubPYQetguCRgZckR62mP22GbV",
  "key5": "2Ye6m6jZrL6k3CnC7x89Ek6jrujfGLfzmKERrFSU48bUSWvdfzPxNswSwx6a2DgDRqxgsNuT5egBHpm4pbWnmUSW",
  "key6": "3yiZUueBn7kP567eDchbHsuofNHAuSoWQs9fZE71qqtVTA64vMBBT6idENbrSwud3V9e62wYmngTm54khABcpyDH",
  "key7": "2CJjQ2CkCC1tAUnUn6GtMraZK2piBPFdN54SHxvXAaioJ7hGiav8HCxmEtPLNDUFX5mQiNU8mBkLfiiJ2tcaj3xG",
  "key8": "3EFBXAWs1Ng5LpSQtJgVsWZMZwjwY7zUSGq84qQSccV5eqLTVW6bjJSp2yjBWBJF1VpJbTAYrpikEsK7u14E1rLQ",
  "key9": "4XyqXZYeVCNLbbambkPxhrGkCqhWKPX5vP1hxeM8D3ZRX82eqoFjwGNcvWVqi3JEUAhQDFkBxgx9zxFxR5SKNf2d",
  "key10": "5tc3aiy8rb4p4f8qrFbxWazDSYZTBxZ4sws4GVphUHEJJ7nrBaMSipe3LBqVMKEbJYoM43vvaL1cPgBiDypEkFuA",
  "key11": "4Gxw6P5FRarCLmMHgB7WM5mzZwiVeREQ2ybknRiLqs5LzCw6JCGZHXkPbzQcvE3ddVMS29tBvGgCXcqQBzcenbhv",
  "key12": "4PbtkRiu5RYnQhVWFm3232erRSrut16NazXZYLvgvFYHKF5YkAL8YvBPTWWxV8yCq18S61qeodtKCi2ETL9j7EcF",
  "key13": "3xU3bZn2Kj6P2uGLetGGvxqwyncM1xoSjtgaZeane1LUVRKPWrVq9jjRyusUVzhCSPQPQTCbnvBzMj19j3v1bTwf",
  "key14": "4UefrQ9HitBdirBHRUDDPHKDKDbLPVvMGripyUTdp9Rx2VSq9nLAZCEioMLAHtN59xQNiVnpvo3a4HWQX2wAFjtM",
  "key15": "5Udx69RUdW2wjcKa7g6TNMfSsrE4e3LR5drxEX6aeXAkb54mw2Gym8Pm1xMENsfzAXzwgxZ1mMbxPM9f4nYc48nK",
  "key16": "47AxPwK5hHiuJZp6E8bwStCms7jbD94bctgFF75xPjUPtwnW8Fsw1sFi78RWux7ZAN7yov9Dxbh64gPzUE2M7NFB",
  "key17": "5vgsC1wftD9t8oBLLJDLA5CmF8H2xbxgVNnZgZRkMKHzEqtbeRgHewkGXfsHL8wZWLFwDC49wVWckLh2a8wEdUFo",
  "key18": "4DicfvBLQvJF2Csvf9WzWNbtM9EchQwRzfNvKr1iNVDxaCunwwdC7hdhiJAzD871G97BDsu9qvK1B613tX4BPx1X",
  "key19": "4LC4QaisawHD9W1CPJoQFUnwYitrX58uWKt63ttqdW3aeWkKNaD5H52CTvPd5Nd8KYRs8bz8qy94z9B9GhJJ7Gst",
  "key20": "4edJzRESeLZH268QjNtRAbFitjKk9YMF9UQiN7Z5Z6ejhcNHXx3U4juSAEa6GRgiKdwEiVqqHQ2cCGTGEtuAYYdY",
  "key21": "3JwqBsYed2uj2kXZMXDcA8yx2Ytjagt2G1kwNPHkvF29WvjskTtQte765XdoqxsMns8xQ8eEp3FLLCjy2wxNMr7g",
  "key22": "2Pigh9RdjwXCvo2kNB4YyLxFsexMG4DdwCRe6hjDRCfr56sP7QGi5EnfmvTiJjNz9zxwDQSUYEmz9raFrDmEiAdb",
  "key23": "5qw6hpZ7rCaQXkUsK6AKqMMuKwVxgroh2eBS5FLGbpatgRe8aN2GnP73Ng6ntp5MJQe8iVaGhoeicr37bKbcuz8",
  "key24": "3424PT3ykx6f9Mfa9PW7k3476GgP8WPWwbGFZD7bM5VjLgf2MzbNiHgZJGraP9SKVQtvxxM4stEcZCPhXemdYgt2",
  "key25": "2vZMzGeUiLv3ypNRrGfs2yaxCRB3tgx6WKuiN3LBN6QZacuKww33Vb36aayWTp7jfgxSC4iJ2mWAG3dVcHYdyN2y",
  "key26": "PScqLLUyzkgm6uynZgeKAnnjNzWLZvvk9g2yzkmsg36SMCCsd49JZmNPYSPDxeCbkgPEqkK99hroUwRZr56GmDA",
  "key27": "63e4vPfpqG5C4AkAyFg7JMrVjwUSkUGzPVp7cZpySwUh8HYN8tWvhMW9FxSaeECkCCdYxw1NM56CsHV8YifvV4kR",
  "key28": "4soLdwno7QyXUxs8FabbCEufA25wzmpzU7PkBtyDPUx2JZjSP5UZZ3oPpdBmLPaZ8BNQsZQS2mzD3T5era6jonY9",
  "key29": "4t8sKT6X5wMeMNGtPYR6v74tmwtVensx9X7pUju7fafPEQSTqMW4QQhyKhnLorM9uVnWgpk3Vw76da5CKkRzrmrQ",
  "key30": "48MdPN2K6gEEeG11ZFFWgNTZTebiemQfpbLKrmnMEMwts5Tgc5Rh3JWS2yvEVoKicVtL3pYFgwRLDyhYqVcKpvg3",
  "key31": "2GdMsm3n2q2zJwFVf1PD2STGPghRork5M9ztv71fUbMM7NK6gGsDKjByhaAuLae6GRhghtDtDPKyvqY9opDKpca4",
  "key32": "2xHCsWQ6iaYRvNs1CVp2bc3krUtKpDhsN4jWANVXmdwnbedKeczNJjP8xQKioktFrq6YxGk3V98zkvzkn7Ukrzpt",
  "key33": "51uKP4KTQe8PDH6Ln1ZAnAy1FNAQWGqcaKnoREdsexR6WUkKrpE22X83eJ623busgFFv5x9GKkP2SqJPWChdwMyf",
  "key34": "DexKy4ZJRz3vZJJwsHczqZAaf4H5VGM21ydL2yqafWCFGM8CZpBpGHDgWyMuf5mxpg7c6xxTkT6t6szvKSs9JBX"
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
