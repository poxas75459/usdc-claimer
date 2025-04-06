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
    "2FiDhX3ZkuuEdx2P3QdbfQzSruuK1ZHmhorRzyo3jgn18wCY4Bt2aUEamNqstrJF8XAR1Dd4EUveBzDu2gpDTwUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUskwv9BWerz4Pba3HRpdhNrMoHNBiqhDA2UWvaV9qzCPCvu8trKTT42xZyTC2RrR48MWx5CFLpmcT7wif5EfuH",
  "key1": "4sPg7DtXE6RGaw4FrJVWR2bsc7jfaBo6teoj77d8kpndKzsD4JGGeLGqqpzsL6Jcx9ZTGd7jJd6Ra4z4LPYPaR9c",
  "key2": "3P1aCYLWichyMQUq6vCptoaHq1ooN7CR1HMDcW2RvuES22H4dGbMuiAUbirENLLGz2q5zcZfQ5ak71aoLjzrdaiZ",
  "key3": "5AeEV5KpRA7LobndFbAVUHGSgVLzYq127Y6oadkc15kZPVziWpibT3cvfKejK5WVCrKxH5wiLkFV4DvtkaZhrQBa",
  "key4": "5LiASu1gVBAmcAmNuuia1n5eQ582M1U6MijATiZYAH7TF2yaPXwMUFs19rZGf8SUTmpexw9zZ1vF99mFUFm47PZN",
  "key5": "2JxFAPGr7ztuvaYPtQbSWZDkbRdZXC94iX4eh9eeu1qK5wNogUTRiTEdFczPmNyGP43VvD3EQWTKchYpqPgyJumN",
  "key6": "3CkvJAmAPwJMqUC9BL3iHmu3D1hS4mb2rDVNvEdb9ffSCKTHTXEWXCkJaBVkpCeUg5j3Ds4jJ7KCakckfjDFomvw",
  "key7": "d5t2PidsUBXrP9Ro6y2vW4erhtQsW79PcGUhinEvqKhBeNqJ9dCC9sdbfvFrrQKhmsMKYgaP4HWdJ7Tub9qDL7L",
  "key8": "4m333o6L7oBxriFemQS2RNkkp8DewUYBvBmN5cL2iha279viN5DcYMAqXCJHaz2bVKmGHXtztPoomt2Xcuik7d61",
  "key9": "mSWraZmmyvkhMbPL4tx4PR9Q31MdhT73GxDroRGa9ctdcKvnPPUm673r7aHHfCFDVdTmrbad5m9vzahsgwPaka5",
  "key10": "56dwCm7kVqRNYCBKSdD6HVN9DzbivnCi5PZ4jD7kKwTrZUP393s1YnvXRp8WwiGgZagHumFP3xquucnHUZN4tPs",
  "key11": "57NCZ7LdrX8VnJSnVNMt2YjyG5qYXfKTsJiqEfTFXSyto7rStXoF6w8KwgyAMv2Hp2MwM2Z9xkmd3meMgPd4uX9m",
  "key12": "Huw38ApqcLAn9Hhg51T6a2bBKq2moPtbJuPeZyqcyg2hTm8p9fGd1j1tMcANVGhNzWyK1A9DLPAABejy9H68ZVs",
  "key13": "3e51nqapgxn6fZyrwqjwazb3jHKug3hhjB9QY1HqBY8g2TRmee6y6BYdow9U5r2oJ5wNVjbpxb8uBPns1NePG2Xo",
  "key14": "4UD5rvak6zg88mhnnEoeURT1qQajekRCGoNQtrkbDWtM1zmi5PgGn2nSsvdMiM4b9AqsJf6hJ4ngFtcm8hyY2xae",
  "key15": "5Xd5wqQdRXancQFfgpAbEMMzLmvYZmxfMPsHx8Yii7ncRN3Hn15hhyBdzyFeYyWw1Tuq2qsGU5ZB7f3AFwWDPTP5",
  "key16": "5PhVSXSbBH1J8MWfc3Aga7hxT2fTpo4LgntrtM7EaF2U197PNChZRMWMX3PNP17EGBsKcRKi9qtSTkSRwcShdrQP",
  "key17": "2tDMbEW732XJXuy1e4YZMX9ZRopj3oYmda324b36utDAaYQhrkkpRAXaKR84VphWit6nYejuT9APSDu56tTfc3F6",
  "key18": "39umKB6j8PHcRmVMoajUA7y6PEJgtTMLyQ9cHmi5pcPuaX3pTywkxWdccCzPtphVQvAcZGX8VXepXbuvt93HoWAk",
  "key19": "y6G1ZtxKo4RZxsaDxDaQhkSoRe2K8B2paDvAjKRsoyutjnojZZ7ZGwh6WeVMEp1uZyxLaSyKPDxGmgsMZ2gbhGB",
  "key20": "sZYppWrppcjgMbaYtz8882vT5JWeVxfjRdSLyCRoVx5tZJGpu2rg2rmYPwq524gFwj9C9UNPsSCEkVsgT5xTXVh",
  "key21": "UfchVcgGJbhD45CNZvMmmYfVBY8k4LvganEooMY9eazofqQRPArPBpQqHt5sc2X9os82wYkpfTLmSn3YATd1Q3N",
  "key22": "3YU3GoVuQKc7tsH47cMGfPtJhov2rGRPHVqXzLfBwQcjRBAZxT5sSB1hP7zjEqu4xxjEDpU6GxkYEfHCU1Kfivhj",
  "key23": "2UYPr2XyULAoFfi8w8fjYTrRBRD96dX3CvTu982apbfcvY3LXYoGY6UjYQpuyatNuFTNZiVukTMVMHdA8SmtJf3B",
  "key24": "jzmL49hfWVpGFs6nhyyvYciHqZ4NQcMG4V66mF82aF5YDVhkUKcvumvm9FhyM8X1WRWVJE28bhRbRwuBgf4e2aw",
  "key25": "ZrisxgTuzJ1SAPRL3M24Y5kdCPtFcPcFnskUPCeVGpmZTjw8UGEe3jHoRNnT3gJdQDzhU26DztwLKiQZ2Kq7AHt",
  "key26": "2KifFy1nX8pjkvEekM781DJ6boPummuc3RJ242F3Gj5RdaVk96s7CTmcNbeHpPqdEQA4mih3ibyZXuqhYQmXxUMo",
  "key27": "gCb48XKZ16yqdSeXBEzf9WjCcYh3nK1nghzd6tARgqGdBFR9Bq3c47Lx2Z1fojZ3aBQpmEWLD2XPMrhusEtLFVa",
  "key28": "5zfcFbAWirSLZkw1TSZ1wf1dBVbj1EsKZM74aNbiHAooKCun69VWFhxh2EsgW9czrrGTVXqTr4y6ZZNmvNpeE4nG",
  "key29": "5ASHoJRfwubV3ieZvAfh3Sbyz5f1QBjESbSVNkKCzyq76Fxr2rqLS72cmuNBFE5tZX5vJG1YpmgYvkLS1A6QFwtg",
  "key30": "3dF3MsWv61GAVBjxrjwBWj5gMZ2FLAsfjrizfPJK7QFPQSGWgAsQjQEQD8AvWki6UKwRdRfuUou2pkxuC3T4os17",
  "key31": "3qwtvychocmtJwoUbc5Rfz4xmTwJx7yRxfYQ2vDWz39vrT51Mb36P6njpphCDz2h7LWHUkdxESivbwX3oWLqpNMX",
  "key32": "38tteuurNMovSRFfajJiNjXQfad1YMdBXZsAZwPxwFhJ7JsqJ9aXtzeTE783jqE356FT7Qj5tsGBkU3MAVK2ixeL",
  "key33": "2bPV1TrRBueYDZmkKNtyrpNf1RwwgpRbUtEdLczw7MNdsEgMygk4yzVeH98ftZCRMr95HXwjwghJ8iGcNfenTzwe",
  "key34": "2hqyPBCAd5WBMWenNNyhJDpLnmH9ev3yGu9KcgdY7Nc5PDgW1se12thfC7ZyizgLK2NygRcRdbS743JPSHrmoXcp",
  "key35": "3guCyQtaFfvh5g2tKKAoKuXGzenchfajPJbCo2ch6gxx8mWvLgSbpBXbQ4RXpA8zgChanRmymbAFKepgv3AQGaW",
  "key36": "cgsYY1zxjuXRYMGvTEF2QXq7mdvaAhBnr3Rg6MMb3fGG7oKZWUA7N1JqnQG4wJtJakc5gX15hex7TwjTySkex6A",
  "key37": "3TwGFnHMT7qx4fk4BCLDUnj3o1rhpDW9rAf5nz5j9F5ZL4sQ5Ycio27JJYKcppdsMomGRgfqWJVxwrZhpDxAN7UK",
  "key38": "4xk7CkCWm8wkMqdCD3v9PHYdjWCyLzWBE9pBb4qa4N4NpZcUjDBDEo1XbG7cUpuQ1M3H9tsgwB5MBjxa7fXiQtmA",
  "key39": "2L4T5qJ6dva3JDWJzTLMqAQfnuYGJGf6vdMagpCFAzywuPciqwm66NSY4aRGby9TuJehYNTX2RrLtt1areV1RHi9",
  "key40": "2rAzHgF7ZdYmtoENEtRnpABn1mcKq8zZ44vgxRmF6xjDshrNJT2Rj6C1AzgVp3sYFoFSGxUUPPsvhgQMgwzpHNHL",
  "key41": "u7twcJsyqVWgxKwdhdyXDrW3yJgqBgndsW1qbxcS9CFvegLEFHRCd1MKQ35HK6DcdnTPxh5gcWRWgeEcWxYNrPE",
  "key42": "5fu9fXu4KaWXgYbpduMncu3nfSRNqNPzG3ZdhF9HAWw6222vSq52ubjpQgWN2HdFYspGKp2mGXM2mtXfPyc36cgK",
  "key43": "2a2uKSmHkyC4D3HTBf8pvCYd4yCSYEUYWzbNTk4VQ4NkqUL4R38e874tSEe7zbc8pJNdYy3tpFjB8qr7kXfHZ6TR",
  "key44": "5K2tKYYLA8QhR3nAmRFKhvde9xHHgFJELbFFJpoxfwq34jipeDgSk21194MoVhz6BAQAszHMN9hufoVpyhS4oyhE",
  "key45": "42AoNYA8UEVmRAskrLbRUxtbx6zTLuiBzrkqYGqmu1rhAbfwfKdRc2UNieSUT3NL52YxQPiukr62FNQ17HCak524",
  "key46": "2TqP5TZUfJRAxMtMFRR1zLPKznWgCnvETZzZH6DXqLdS2yV9E75hLQNRNvcKQd3GGHneJduXuHSxcn1j1ABLzka4",
  "key47": "52oV6BxWsSTG9N52CHqHe5aFURCy3Cg7Jg2zKiTCixeCqiUHAao71CTBeG6Rt9osYMhMTuX5fjPDWCL7RonpDkoE"
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
