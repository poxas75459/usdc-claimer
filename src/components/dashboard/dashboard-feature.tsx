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
    "2HJkK5vgpqgZmDeR8TnEqgBa3q3UxJEt8np7K3GSuanFT22WZYZeo4WhPWMnJZyEzdiZVjEhZVgJWT9UJ9teMy3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRJWYhzg4K1DRh1ihokmzRTcULK2PSUcrham2if22V4w9LNirwhKeaW25KiBAHi7kXZdKJrz91LiFyopdaJeG1k",
  "key1": "4xeynTxe5qDv4H5bTxBfAvgkHsg5zhNTJ3o9ufvVVzQ7ZcE8aP97Cptrkn6CPG9e5aYAUhBGGG5SoEmvHHj3Ufeh",
  "key2": "5QF2zPFApKr8AdoodCqsTwN138Txir6hxEB7QYdCgkWJbmQ4bSB6CwRv4qCN3CXAz4GeEssxznt6gjd9Ae13GY6s",
  "key3": "5D3M5SE9w81umqeeZhDrgdgVnthNS54G98FiWMRFq83UZtoAHYkPfdG5LqbLeRzjKT3a5toHy2EF2ktEKMWQ1ECh",
  "key4": "5GdSpqPczTvt8ZRFdiXPW1xsfUXuDom2jF1Dh1mNqeHYwmvihq2TVpJMZ88c4ZL3tCy7W19FYQDDWYfYjv5jNj5A",
  "key5": "29kHBLVFeNkoNxCEPKSzRX5ySfnsFbq1utfNNabv1wb1zsw9cECnTFkJyguBCV6hfRp75qbdKZ17Jixjn6GRMoCt",
  "key6": "38PdoaZ5b3cpQjcESCUmQZWT83ALhEnPHQw6chDf9VizCkn3xyjufCebBWRqR9P8BhPKJMQ4gswiCQg8A4qzEp5z",
  "key7": "22DpdTL7xWDr933PfzxWJKewT3ht2TBS9KrH86PCPKMWoBdkjgVsG1fviqqkGVqUtg5TfsjmQLm1V1bPgDL7vrg1",
  "key8": "mBpH1cobCLCoGCa2QHaPSmqvHEyk2aZUnBRpGBEWPamNtiBGmr7LgXJ41ZrER8DM8tueMn2deoHyGGD5dJfXy1H",
  "key9": "4mH7Nui3Qb9PV57tniKCiDm2aYir99MFTAkxdMrri23MTi8PtZS8ykSLw7q8mbS7kGkpYgCwEG9aRkTCRg7bfwSr",
  "key10": "sEzefFajHSzVVGDaS1TVLVJ9g4H1Ue1kjs5JrVJgWir2LYHXyhHkCa7iejtxbB6TZH2mxmyZ836kSXnnQe5eKKN",
  "key11": "4k5kndUZh2LmVcyDywJKyp2xt8wZi2zUZUAyKBxzAnPSQTjKCH6GWfYnNTaeBwVGDfg3H7xUtfEsM2B1FJvJ8u9H",
  "key12": "3yPbd2uZPEiPeK5he5pBfa85M8K7zNNodD82jcU5f2AH5nz8k95LSjMh3vRwN16fC4wncdu9WENhknMWWoSC9G68",
  "key13": "d816QWJyixc7mXpur6FDMUicBAYiLAw3aBxa25TZXWuvHfx9Kjgk9g79TpuwfBdm7yPywEr5JV73L7ZPhgLorr1",
  "key14": "3HUS7gRbC9Y8LbTsQYP6kCQZSC75Ej6wHQBHdHuTDiN8B644K33DStcafTJh1Yww1sytNVh5iVBBb6PoSDNaYepe",
  "key15": "2b1qQgbEKSu7ukfe6omtdM5WqnhARza4uiToqN7FL11TXRwWhbMJ2bkMjC6DWggmrZv2MaJ59mUb4y1st3ehdtBy",
  "key16": "26NgT5XaKfyfVEWLvaThew5un4X6WFdhY3AX7t3xxWSDVvkiCg66vAVyhdDHNM8ZC58v8HX5ZhoT1DkYSW6XAgCf",
  "key17": "4fynBKVoWuC2o7G11TNsc5mja9d43ydhmvKK7U5qba3PjVjtUgffjKdNJNMFD39JDgroxJNPSdXMB4pMf2SRbXHz",
  "key18": "5i7HKQTBMUsY1zSe9VwmbpwLy5THuYG22mEzCsc5nNU18LPjFH87jD44oDyZ5GDcRHypRq7CQM3S6dqqsECi1w3S",
  "key19": "62A2ch8y52HuXHK9EhDbFWCZ1Je5r8efCiCF6Noz5yvi3kTeBZ615ZNrkjbJYKK6QuEfgXFtd9mzUDJ2hbNBugoy",
  "key20": "4mJ8kutyo2jQqU4JEaDEi1ArNAgxk3cNwLhu4buMQq6vNQzRYDdBw1hNR3rGCguBbwvdd62EmL8t3VfPBGGtQSMW",
  "key21": "4xME5LavrcLQCTEyPyVDWbJsPq37J9bkWyC21k6VpxhsozpG7sSuSoRPnGpSe3xoiEAxpV8KWKZWYiAuuxaoCWpk",
  "key22": "5gzGvf2jTd1e7z7kAhEJvaxDTGSrFmCMVC22urPaVvDyqvDqJpuYVpksfczSNXqDtyihAxLbjNgM7jx8DUcBeomb",
  "key23": "5EwZ8HCDDnmHr9HTmfsG66zgx7S1W9hpNqStbe4kZTrtAuJ49dZxCojzzKV8BVAc5tBqMadmjHVPPAC7d5q1YH6T",
  "key24": "33ECg8JXfYeFnSePoUeR4X1gGKw93Aak74taLaxBF7fFUFsJUpSWuKaHjvZfRTeyPLR3aQQvTba1kzm2NN2x5SGa",
  "key25": "585CdxGNe1yqghiWnfDTvM4CzLbR9hjsBJpYxWNvqcme9M2xKvV8HdaJ4KwAHHLvTsSpHmeACiLkmRBoxF5Nm2vg",
  "key26": "4Xpb6GWjLK7dDiqjWLutTAwLr2rTCQfAmnnjrpu1M8ZUHKnT5W6YGHjpXBYe42UjvUawAeDhsKrNDN9fQ3t2mMWW",
  "key27": "2867nvXksrNidktgcUikbWYbzjw2XcTfzBZVx7D3qjaL2EbXVuutYALjxxTmEAJ973BSnvXogGxrw1DGFLPja71T",
  "key28": "4z9Bhgd2YsRVRpYkEvz5CXkJJJS8gNhu4BJCz68gVgaUCUP8obhfy7woEzZq1yVDTzxzfx7ap4PQQLiBY4BaLDwe",
  "key29": "466sV49ToqV5VyWV83Xm3e2rAFfK2ZusY3KGSawJfUuK9BeryLdiYNWFF4mtzc2h7SjXpvtaMijBg8S6MNSaMLmC",
  "key30": "F3txLRBiJj6GVk7Evqx4t89GfFsjw7TVrq8EoGqta5Hdjh5H1bY1TpqzoEiCovm3hNHhPGRgHwhxPuFCw8FvbgT",
  "key31": "3xffBgbjTmKRNNgxgL2pp6kt3QEg8ZM6oZURfk7ZJw9kh8PnA9oPo5HRqBKLnMhc7UEnfdRmd8TF9Bw3dC2e3XjP",
  "key32": "2f1SdTuVrm5bwVGcudK5Gi33TuWxK8AM9Yuy9QGYtNG92Lgc5h24xkeDrGVoukB3aknygK6c5J4tmAPqQLJFUoS8",
  "key33": "maw38iJcGwtkCuRt81QF4DPXEWLTR1ui8tCRAnKMoWkrSSKS4k8rko3gLshFLeYFrUmKpiUdLXSHa6SNSNrHrow",
  "key34": "3F2JFx9PJ5n1GPytSvK1d9xRWDfE14jdjbowGKpbgRiwdbYpJUSBDYC5KVEXdUE7pBBKu1bUkSPeniAHie4xv4hG",
  "key35": "5hBTMRWtassoHUXSJwURmyLRrQhAFRsYWBgPiE6vvp2DhXbt9yWsEHNga4bKq76qLp4BAr1rbta7oekGhfiXwwjC"
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
