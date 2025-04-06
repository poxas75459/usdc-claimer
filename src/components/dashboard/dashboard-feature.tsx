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
    "64tFrkKN38SMbFTWvEax8vK5xnCu9TgpogN6psdQeEhasKw3YYNG19LmbSja3Qch3ZoapoNXEkMYu9u4DWs5xXjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgMV93tvAa3VLQpCJs5toptWS2KeEz7YaQmARDP4LFiJsL4u7EsoQ4o6gppk5qwHJEbKTwLDnwpfRJHUD6QuHTU",
  "key1": "34TXgHVRMCy45JM97P8Tvm2pjuJg5FVgZZWMD4vews77kVM7cfmyNvB6QLGtNidPRGqdBmibF82CLY6wtZpZzDkm",
  "key2": "32nUedBwqZYudejUTLApymVZzcLhwHGPDy6dJTHQausb8eDQYSkUSfvzjMofqYhWsgb9s5LVELphYZwtJrpQaCAN",
  "key3": "2vV3EzveR6Kegaf2e9tpEc3duwr2J7bKyDdHcBjkhvrHdPDTYAp3yYQ7DUueQta59JMBnRYDFbXD1xZnhchfdJhN",
  "key4": "33LxqV2jc2kPpfZe2PZeF9KSNrULyinXbngNYJQ18rJat5i7VjwHXASvdgq41p9QPRnCQ7k1n3VSbRT3fow3xe9H",
  "key5": "2EcwSZ79ZryDGo5RzRrmDo4BRAYLnF8YdZ32UNE9svsWBB8uVVpvYUQ7kpVCi8oUfcFjkhzVwu4i8MDFBCWCnwzz",
  "key6": "5TtgKdGspREtRvBTWETXJqxgTCfMY42gHkBrCLRUEjoVwEQf3BjgQEurkQy4A9Ki76jBiKazWyJtMwxv2sxPRtu9",
  "key7": "3nBVYhxoom6WQCCxdS4cTFL2CmzizXiGXw9FVrE8dW8U28kWiW37kH9GC7LwwayQM6Rov1TJoJu2DRHs3MuXUv3n",
  "key8": "5swgy2v7i4dq4SGMGCuqXJ3KQMcCBoKSbentLyMLb3F2qVG1FMi6bJuUxkdQEZJAGHLerFUuHms2xNUUwovVtDsR",
  "key9": "2umDVRFGn2AcipvE7LiwamJemjBCqvdRC25nX1GSvMuZz1hNiRa4SPdo9qi4QhjumU4wxEAMFEBxo7ijioy2hpic",
  "key10": "2UxZ7Q8vmr2hNaEMaVue3BLYRVLFdwD9YJ6G9zPsR6ApHyV5omXV4os77yCUeWEbq5Lw56XsHPWFZWiWwtKAGHcS",
  "key11": "2HJVenDmjE9KFsRfsmNSvawE1cQditLmAGQLyeWDR22jregFt3WxXVJBoZme2QP8kRuS65jvkmzdnfRcZK1fipZp",
  "key12": "2wMQWyNkWepLsMjBKtuqVngTyuUXSb6GbNEEKPk2hFrz1h4esEJQmLi9mbJ3rfpZC1KTBZ88xPj3pbkcVM1CWYx7",
  "key13": "3BBQ1DnHNMa8wFx3CoW8pLyqc43YtQLnSM8EXZZXKZH6m3iyJwK1wMtKLfVEiAKRA9AhveaULSsRggWpiKuMBm8H",
  "key14": "3vtazhYcNBbastUy8GdiRR5QNwSjaB6SMuscsqPQgJ64hZcUDioTmYxRH8pCHvHmHHaFtTycssGVXCxFTEnNBQiw",
  "key15": "2eX2iJqP9cNSBKvTSh4vUajtJgD5nJWci5rgRyV1GqJ5mERnGCwpvzU1qFEtfaYYYKV9k6PutJ7VGHgV4EX5Xqwc",
  "key16": "3W36aHHj7uAe2aSi4VWjXVNXf2RMgxLsjZarwq4tbZa3wAYmnbY6gAbNPNUd26eAqebdeuCVAggkMvXZnYT8E8rF",
  "key17": "67jePDjSaVmoDDtf6HvhWhs8fws25QXoaggtxQtW1PRV3oCYWi5AWkGUcPDHxRAqA1TgbbqPq6DbpbEz327NovJU",
  "key18": "29LtVeViisH6WVpUm2jhFeXZQRjVSFQUBQozkADMezHXEX8vzwrTmN85NGB9cJVscWAL4Lps88ZSTvFDgkK6QVuD",
  "key19": "59fsW58QWj73ppoxLdsWijsaFTPE7BLSnCfYqu8fUiBW8PTy5GrYPn1h6PbeDt653Kg6rV3kJsZAaX4Y41HosS9Z",
  "key20": "2pMiEtTT4UT5fwEd9D5DRBb3eUCN5dWzYeWtNpZq24sAcq3bNy2JzPpx9WuJZPbiQbACDytb3PCvQnajJhD7kcWj",
  "key21": "2LGUiFPEd9c1XzHdVtfZ3ejnDo9LeD3M3UbJrcvZV4A4g7xgxtmTj1oPehCvT3Varc1qbRaNt4CMaUXE8baQBras",
  "key22": "4DULmfeAd7dNW3GwKTob7tTKpxvyNxL7TYyaxmg7xPwedoJ2TWpkET1wnXWzbH4RxBCBfYqX5i7rKBc9bUeXGPq2",
  "key23": "2ECiZga9GFrgVmPLCc32acR7WfMjyctxfK8ygrzwG61e8zF2GfVHHz9wpuLujWs79MjpQQ7kLRomUvYA12kzA3oF",
  "key24": "5BLBR3K2E8Px4ZNBarX4ZMAPqRcuT5FuRiPYjMwQPaAjZX16s5w5UQrZBZGktvrXHFcj4eugcfHaL3tA2kxBbniN",
  "key25": "sdEnri6GWUKtZ6B8JoUiu6A15cny4vt49mbm35R1m6sxtycQaPJevWbHZsMYC1RJf91WpxNzMhfEVtaRAVwWUqE",
  "key26": "5oGmDiTf65ywUZXEiiyDMTYYnPXmRzXR1uMoXpP1ChADgwqZw5SYNknsLaTNSYM5w9vphUasdSd3U41aY1rWjUiE",
  "key27": "5JEBbTHWwAwbpzqts218eC7q7hwdHmpEGBB2yFyDqdkicrBCT1B3SshSKNhTyahL9XS8SuUtKV4HYNJQ845zCJPf",
  "key28": "3Ab9L86jYFbqeYFFwWcNLpGLjhLoGSDpdo3cQViAspCSmCmWP6wZCJr3DXC8g243yMmZ1QZsQMsL3pVamdukqUPi",
  "key29": "3aKPkhSBV8k7BVw3F8EfFBU59zGE6aNyMBQC6HodPpW7o6r9JNmUqPJf3ExBTfGARMVziwkrmZQdij4mxS82oPLa",
  "key30": "3xE5uY4xvFnXJATsyzRDv81kkx2TiGt4vhhthrXa7ZTZyfmB8Ch4YQvCnaqxf6vKNgGsvZxTVMvuu4RnQqaSPCzg",
  "key31": "5E5uVuGgB3Hh2YehyhQjH6EjEVjSQFn7KwbwsuPQ1xYLc9vYXfFtAPvtuNqHRtVDWbQiXQF7uXEaQCtkUBA686TH",
  "key32": "NsVZch3dbQwNT5aZKWGLQmesG1cTWtmszTsC6kpsaavH41m1EmJw673VsEkqj8AhGvWMxD5RGmQewhnUasZLxgh",
  "key33": "5xbrYzhoJgu6HZ1T9Y4MMjRu9sHfcMWM4BGM19buJy8TKDeM6kMqHQLNuqao9WxK68CZjMmbAarjaCdBNjKPG4h2",
  "key34": "5tSgRHW2njEpRQd3Hq929SXEuXnQbVWEvWgCcCQskuH6Woh1TrZJzkfn7vQmPNemu1xJm7kr2nTkkv4AQZi2W7xe",
  "key35": "151Gq27hmVu1txgeevHP6N9RUKonetuiMxiq3QWadjnfdeESb9FG8SAQ7xEKJCn12D92XuRWpKtd9UT732iKCmg",
  "key36": "PZCar2NTG9yWTmYnfcRLsZrQ9zKMCZvNaHjecrNTjPJ3o8BbTCYjkfiRJJZeF3xRxdXuTycW4iPGqwqgP8XRUJY",
  "key37": "2n3ad1P8iLXB7B5cAv3vL3SQLueDQuKtMeHpUTTcwGN7A7WN8NPAqryyf1Dzep5mYg4Zf9wujCesVytbaHNy8TXp",
  "key38": "538u48Y9mLEN3ykf9ayfxhXMZuSKpEqshPwfGx8nDvbDxYNESkhMTB8kh2RZSCwSmz9PTxWbcZ8PnPbAN6CWiZBo",
  "key39": "643m731okrHsN8hPvJfp1tMEvTPozsyxBY6ZBSaDv5GgBUt4W78dFsRsApnRhhDdd48ds77N3mboJXrYZp17oPof",
  "key40": "4ujUM5E9J3ZAA56QGk58Xr5XbQSJYmwuucwjJ9WXUzeGV1i16a8ssaWgBVWYa1aoRoRbZZuPBc4KZBHdH79sFoYe",
  "key41": "4VFoXLWBw8btLShvTA9AYUYzBqFE4upoCkNyfHM7Ya7KqBt8mhq99cMVz8E8BgZZp7ozokagLCc3cSrSqirvwGC8",
  "key42": "5DSLUDja95XRAWBjdbNdgCEKmL5N149XM1viYb65FPtVQvaXShJQiNUy8sNw1tGTP7RSLnyuP7xvbhiUm1n7LKuv",
  "key43": "29gEjdAgrAJBsaFU4Tr5k1v2NJdckbnr3RzyHNGNkaQknRvrSMsWM5KbbCvp29vfaAokzDiwct4kGWYPGAmBLV95",
  "key44": "4xzcZTmmX88C7PaAWKBhmGcy3eufK2BjCm7cfsUAPft93jxMcRuiN5neSeZwWxF9SmHbYAJ2cLEA4X7LopYQkaJW",
  "key45": "5QVKxMJruJyk6Ru69UDmVtfLkkgr44RALaQ3gcnyM7SmXF1PKLTGig46zbQXmhscGnN1RGPLACXnrkSF78eR3g1G"
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
