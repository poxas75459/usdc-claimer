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
    "3cNHXevGQ37uY7rJsysHzmQicaGiThDvLUHTXyEGnDas26JsHz97PoW1zKHUB1aJX94zsN1Wi3Si6owfuMw5tBp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MytMYSnjXwf6Eq3EEXowT7GaccnxmFvARV4EVaMsPeDVhy2ujJawC8bvk3NDRq7XRTW4XxgXm7UzqeGFhfeBBv7",
  "key1": "SPinjQRAd3uD5uJA8xh86tLZqnKZoVSLjr8Jh5JPbLF8MiUXGDwoTVXe4FpA8BuQ6KJFpa4vEe77oD3dsEXjR9V",
  "key2": "2hdXLKTsneKCvAgiEk16aXA6xjkEGfkmwgSnNUwvWkA6VdfFtpFv2cMM9KtLrGCxBRksXDQBXRwShwgvCS8QWXHt",
  "key3": "4ZPwNAaCovzkKu3JEiaMqZovGcMAUBRSt4x37zUDbqsS6dE1H3reY2LG2uh9dAFj1X1gcQ3gStJnq3oS6UL1jHbz",
  "key4": "2gDwKarWFMd1Go6LuTFs8AghPoWkhTzhZWmAJriMNpNHbSMpbimFfnyZjE9PnoZFWthieZHawFGQQoksoBKqJ5xv",
  "key5": "4SrGvygC8aop9U5y7PCmueSwbt7eJJbuK3fDPeEu6KVbBxdQ49FVef3STYD5SUMTpTZtjUkTqiyg5rERTRe8Jf8e",
  "key6": "3EsQvSPaZyyuA7b62RHgFyiCYMb6q7wbRnSGmxDshY6SHPRgAboz4WnFBBzto6F1YhGkX1Q2JR8M47xoN5B6S6MD",
  "key7": "3kPcYDS655PjW2gqny4aBb8CDxrmKvD6VEZxLxBMihd2YiuoyBxux7VXupfAp9rNLwRdr5fwWuvaBM13meAPWesV",
  "key8": "4nJRcgAxGGXrXAGxA6QzAF3wYuhNNvcWxecYhZyS9CUNAvaDXgMVG4PLN6iFv2PXj6GW3zWDCcGXSX3GQSkvmLv1",
  "key9": "2dSd92AUNjqSzQW7y3Y84G6CradvRt8n3MYFm6zSxKhviBSBveWGawd9E8tkddtpzaeDvgkdLGuiVPGLDh7ciCAs",
  "key10": "5sXsrHvn9FRDGPSzt1s61gfR2smUGi69u2aurFq8eEPYQaVaQZWuoQwow9kYVrbTgXt2Vws7XNSf837n5FTBmyTs",
  "key11": "3AosMciAe364K317CHp8RaDFmqeaqJXFPRdcFZMPBz5es783BDZDLJ23uMEybq5zfwCUsBiwPQotMKKHpqs2tZXF",
  "key12": "kQCrDMqQ6mt6GnkY5zgvDykqhcxikx4WcpEpWyBL6Zpkpeh4Q4aoSBB18dYLLdp4DqxrxehPHmgDfumM6s27DBR",
  "key13": "3Frm2BBuvQSbNfpnLebY5cEE5At3DPigJzmrH7fpBaJSDuXEc3CEwTcegvCHxqDwsQWnj5sn5ZeFhcQhoCbCiEY4",
  "key14": "4U4fcujJQqSsxMC9QJsC55HERTMe97MnnLiz2tBn7hw6cDZZzdgPDb1Bj59kdXqySsyxN57Ws14gGbPret5KfN59",
  "key15": "3fgxPbCSHaYGrNLcjvNhJidgwhBthr7u6QsniT76dixxgo27xEHK1SiBbmSqnAcSiy24zV7LMn3BmviqQWSzuTni",
  "key16": "oSH8WwhxBs39dXq4GFu4vugY5JLUtsFzNoVkCjtKAE7kqmLynperqJf7rdcRdsjFCBomMxUSe6zaToFN17TzrUG",
  "key17": "6249Ho9J7RctQ1xWdQyQenQ51YddZmwWczXzsBuTHo9tpsN82dFyAtA6jKRmE3D2NSSsMcnUeSyQByC8sd6EwQMo",
  "key18": "5Q8FATYagZ8AHk4PuhEbN9xx2gFbwGkgtsKDKvL9g4sZjoziAXyzhoNN75DyPTHWvs2HsCV9a9qkmxGokA8cYzyf",
  "key19": "3TWBzAxRUzbhXTSQ5wU4yS1NzGcnKMmvaYvUdqcgegJnaaZQpot9cKjAUjBYQkVbCoPKUu9243LYykcDgpT78Ch",
  "key20": "3aznEZjWx67HeZFVa8CnFGZxx88RbbqE4CVUjrHgan8Hb7AZPgt1pkkbUWoM8mdPF8u4axPqBgER2RbzcUqjKqu",
  "key21": "374RrXEgvawjkwXk3t4mRpiWjany3kCzCceshJQxQqbJpRaBt794XyMPQw2GnGR1nzKFQ4CLtYPhhhHpsGf4mmvW",
  "key22": "2XzFAvrvy3dtXZFt4NZRbMbp36DMEFtsyXNwqFr1AWZrzT6obR6V5XbiEBHj8UHGY4TkGocB7RGsHZ1VJno24k21",
  "key23": "4xdWPoKdbgEHPKZoZZVEYtmf85kmxMsoxvxw5KnvpBFHRhVu2YLtY8pPtt1npfPJgxaUTyrwi6KnMYcnYEvma5VK",
  "key24": "4xYA6FKtnFEF7rLUfAwntfDdJW39f2DRBn4MXumTuhtokFCptSj1ZwFQj3enbRbxuGXDdwuo7er8rYZg2z85i5bN",
  "key25": "3YnMABGz5dcSuQDkDTWwx7pEyYzMx7BBYAV1BwBxzdUrqw7cG92H8nGN6BskcS7fcNaH2UqbGbqENgYQVwo9XC4s",
  "key26": "3ZmmAvGzisBjzTHbPf7nhJb5tY1MPLu3CkJ2XJpTMzg6SCfKjnZjgmZ28VRZFL6VvdUEvYyHonizvzrPDtEAdCjk",
  "key27": "2XUimYsLvUyomE876JiFEkxY2CaGARo6yohxPusAStTaRnZdSKjHRnrmq5KgGZ3UEytbzsYb21okNNU3Lyqxpnsz",
  "key28": "22nvUMvcDppJ9nUA61UpGtC57Dq3Y4yJkPmtQ36VpdXgJRgn24VgUZf1dVmhHJ2x89Ez6QzxYo7RdbGeyZSZQiBb",
  "key29": "42aj6dyXWb2aqqxN3F6pT581v4awXCQpB7Bvgg81eNBc9APw8yJycfZXVjEwmEycfcmBii4ngZ45Pr29uVz2c585",
  "key30": "3K3e4PDxLC1mAy3xqQEUb8QcDwcuNS1TvNwYmvdgjLtLeMc4WeRuyCBz6Ab5DsDaMxe67Xe4WMkYueuXyvbX5emN",
  "key31": "3itmanmRH1AA5cznmKM6GfYP1XdWsbTfuhjB4MWE9YYbkNxewZwdDdf9Bu7w3czMjyco23JSUUdUjNYtt55U1mp8",
  "key32": "bA6xigMMdcp2DtGuaSg2wnwShPxvGqQ8NnsLMsBawL5c6rvgZDFpMhhyv2oGzcJHK4J1LETmCFdz2FW82FMkhde",
  "key33": "344yfzmEbeajR9VigEuYCpkz9XdwDdah48qHMc7Ms731Z6bBEA8orNRPmALQa6AVSB6YnmksG2Zxk2JzWqEYbLSz",
  "key34": "3YaiU9tPnDyW5u4XoVDEcAbm1WsZDi1p8hHdiCErNyaCMjHGv9h6DTdTtxSHLSNnasbjmXxD7J7sNnhsN79CP41q",
  "key35": "4d1snmvCPCzaxtPntRUp2b1M8rcXLEKcXa9jVwHiRWzh5oSYRL4QX4hwp7iTZ5Q3cjFEP3EL1pCvaK1NE3i7erih",
  "key36": "4FsF7oy62Ax5zK7nHcKGZej7QS66QiY4WSykSLthc5mQ6eJoEFjvEeR8t3pDTniEe4hRk6mVH7zQoWfEi7JR1mxS",
  "key37": "9gErNg42dNt5QxTLB6fcNSmpouG2Ck9cbfEfBxeiSSDZaM5A95LhvycH4PisQTabzg54REPMJ9AJuK9MDB5BEhL",
  "key38": "JK62t8FsuS5C1bdFjWWjy73H6z5VWgUWpZEgXKgj3g9A32jrA1e6JNGTh9FrfHF2TsJr7UHdHMaNKLHHKHq5fwz",
  "key39": "3NvJGSMUo5ZkMWkNeeiD6SnFWfVa1GBvGdSoFhkAGq3Rv389DniGRY6bpiqxp1YLuEHQGTADBWaJtn4iFNV2mwLe"
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
