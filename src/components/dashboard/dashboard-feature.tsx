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
    "5K8r6T9scJMwDzmy4rgMQfXU6LseFN4RUVNLoGibp7txDuB6KyBSdvbgGffBiPc5yJogsKr6oJTGUSaa6tb5VJQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJQCVpsHHGEM8r65qPRiwrhQMMWZRrxMmS6f4Xkpn1ky8XQRUQrBKB89XTb4X5hZRePiKucbwJf1JhsDirA1T1o",
  "key1": "5SS31hKVvc3uDFSe9HjHn52L6CbWqMTj2T5xZzXdA3AZzVFSAsNfsJyQJFufeuV3xoGxFGxfNuJeBUGzDbNCawU",
  "key2": "4s7P9Z7yi5fHwBLSnTtZXeiMVe3YtpHgiaZ7u8QASfgnDoDbDxQJM9NEYiEwAWXqTvXmcBnVdFiJxteZSTnfJv1n",
  "key3": "4hc3oyNRJSboBmtXj8E4BVkgc1jWioRWfhi1x2VDhLm4JtD2PRStCrZ4dadoqQrhHMZC1h9Eo67JWVGHKFz2iWyr",
  "key4": "5eVGhFPv5fUv4NVfFZsE1LD2bJtTNSJk7KFsxPtYahRA15roL9FbNLGhC2T5oPF4PqZiWTLd9bNqAhjvcsFkZYwT",
  "key5": "3cNt7M2prq8E3WGeHLyBJor6axYqqqeUHFiVhtyd1DHb18waoXic2CWS4ScYgFYHGTmpa4XLU1dNcGe1akr2trSA",
  "key6": "52Sd4hq2mYTn92Z9Zw5Ab4SiTMGL12ybiHzwUVp9XbjokrsgnbaxwFjUzY64rc4WZN7jEyhSYUrRQatXJpvZSTWa",
  "key7": "28vaZDmC81FDkhpis49Tmdr5tFCUGfPqKqbGZjXG5BRoNT5gK3ta2NYQb2xcZp3FnkX7a7igGmi3eFh8QGjkQXHs",
  "key8": "5WpkE853pDaH4gJAZ1A3QCgTY17jzsFWiyK5GWUwTttBVYZtiXMuNHk7aA2WbYLtonGzMDP7pNDFGMXssKHtYHNV",
  "key9": "42EL592Z591jw3e5Cbn7C6e1CVJRpjDvDA7zUz6qj3YoriTpTBPEd7ZvFQ1exbgCvnFBBpUrUvC1pZYNPFAk7pnz",
  "key10": "2B7f8wfJipApK3UaHY36gpmQAr9bQojJ5Ba5NaydWFopRodkgwSrTqmaC4jRuvTya35ukLzgwBaJ9iu5AoXNEXro",
  "key11": "2on3nwoHWcU4tMHTHdTL5HsiyPz59gY4pxb5YAvCFQWFK4NRBeuTDdsG6oZRe3pQg8mSc9NyZe7kzPTji3fVTiWz",
  "key12": "25zGpYhA9834X64xoNCtHTsS2ETrd64eBGkvznG1WfnhHFnh2ibXnMscUwXLbTVTxG351XMNwkD3hUbtFiRoKBjn",
  "key13": "3mPESdcqqEeao6ov5KiDKqBFHjWhPN44Hs64NpSd9aRqMEjUi13V3tDkm1bV8mP23v8cdGr8H6eex63Mr7ZhEjxs",
  "key14": "4Uu8wmSNeYDT2fMGjhoCrRxFkgNzAubuct8UQUcGCBMLtiHehdfApd1yoouhiQ1T5yQNTgnFBP91B8JLY64tYHNr",
  "key15": "4Bhz7DwdS4gyY7Yy18NspEnfBMpMYVoimUXzvG2ii8gqttNXWiJCe8UEQQRSR6KTmh7Dvegp9JpBxwpUCMcbwk4F",
  "key16": "4YPqfMAnU4jM83KTLVqJBh7fxuwZWHz9EHqfj1u3n4h98VKPxvh1jAcEjBP5EhXnEgtWmWEzuk2XpuJNemreE8Xr",
  "key17": "57RTaaSSGYuhNLxcCWQyFZw42TZBHCDJaoCFYCtYRZTz3VBfHwRsQt4yuvr5kQqxSLPvWUnxd2DtngPa2yZjb63i",
  "key18": "3Qm3cWGLxcAoCDdEBvcc3H29W5N8p8AHbE8BK82eDNF6yQPcnMn5h9jKsQDQVM2SaChCaU7Mdh41HqXEwcjKAXTS",
  "key19": "4gGfHL9HEtP5i8odegrkBkRbjP9YKGkCgQ3QiKsEYx6eMFhSFeENBPUtSWrDRYXuSSVfGkTz7C1gJvMzbAh1vELo",
  "key20": "3Hx4jQnms1iywn7BGknDCiVGPbPT22VXiUANF7EgbopKpv4nXdcVzHqhYkGfd84aWDYzFnopvh9AAgHqTAtGqqC9",
  "key21": "3GHctgCepuVqcLQpLffdyvUJSsR7FWGvMeGE7in5vLywLKCUGoec4DCg7feY4fBt8msPw28FLnAedPVpHNhiyBCG",
  "key22": "55MrKVzfeoNSbJMHdemidNYqMSCUMmm8bYFsjYZAjH8fU1fY2Z3SsbbdYwXSePXCKt83kFMmwShJrorziZ8ue3fc",
  "key23": "2HLN29gRoqUbZbybkhBVU2SFsbrYf1qH8AGWAUWVAVZeZn1dvHhK714SGvgEPWSNhZ11TZ3kRbR21cvHmSHmGGVe",
  "key24": "4pw3JxTDhkTTRihaBKuBgNX9eT2AHeAF1AECUh6i4C7saeDmdbJ8Hex867TMX62Xztoq45FJ5FzAhfsMe9YVas11",
  "key25": "42ThkunShXzPLp6VRc4R1CNAtYLj2WaHFRw3DEGziPd6ikAhJ6DX8VXZB9Qr8jNy2pmN5BsfptD7sYTVuY51rTEB",
  "key26": "5KAniLgLvtXnYuy55a6WBuAhzbjEbYJhCXBwPbLWr7NofNZLdbF2HCybTuTxUxjtgXCAgHNfvAydRMpFFjHesvE7",
  "key27": "2SQn6GePxda1PjZaRkaUaBNCfCHM3fRerABKPjcAf7orRBMsSzBshkhUQkBTJ852KdghdUVy2JG3DsQWqFvftvdA",
  "key28": "2gwRDnxt3pkdDdiFocKJ1CJii7jmTYCd3vQfHb7ozv4CnW4rWudRU7yVB9BqPa3ctzXcAj2R6fMSzCbSz4uKpMRK",
  "key29": "2Cgm3hvwusoHthXLXxVTZ9q458sDD66ABCohi853swhKAxSJhbVsSiGn4o1ASeceGcA9gWomcRyfXhCVAnSNhab9",
  "key30": "2nkXCuiPiSr5o8ndZkuxxVRCRDFD9TKcNXcqV8Jzbr4FBGQMpM4nfGP3Pv6ezFjDmFEfBaskfRALp3nDAAqy7JH3",
  "key31": "36zhUrA9cqrWe1eD8o1eLHQqyPpnS513Y4NDFtjp1vtzZTdW7YwVMzaGfcUo9R2vM6q6ADs1W9Bb4sFTJj26WCUj",
  "key32": "3bJvESefzLcWNeMEsKG9ufzbCSuFTwRKseuZhuVazc5EUsWbdQfSrXhUqNvSQ4yajvDx1BT6Zr2kue4gh6AFmmNi",
  "key33": "vKTwLbEF14iggpzU7rU9aKRP24BAZy2fTgE3PMVsz12Yfjm7mBLTBaiAGMJszWDgstVcqihiBQFsoDpJbn8QiMD",
  "key34": "4s7BxF93udxxSJ5yn4ifEvzUNpRLK4vRg9SzV4uV5UVjazJNAzQF8ZFUpdtsqB9ywiEXNtzhzxzMbpMdm4Qudxq",
  "key35": "3xBYmqvBxe8fTUEGF4cySxWpaNsLZw9YdU76sjVT4SjjPEqXZRutTfMQGqYgwKvSY1c4JHk9iecUydexn89wptCE",
  "key36": "67kUzSZcKXn1Q29Qsbosy8EhuU3gB4sV6ZxVecLeVyYHpspCHchfNQBYdFGYWcHkhUQH2qos7hiswDu8R5wpALN3",
  "key37": "43VoooELntEKB61Ln1D7iBqpqXxdED5E445vkxCgjdZ4ZucNcaW7qn7r5Zqk4QDyAxip1MmYMq6GsvDYRLKwAf5f",
  "key38": "ttzq9tR6LejNUrF7xfFjGZsuZHoMp2YmBgQr3sBMYkvPZT636uhS9YpYqTo6tEShiUAyUvKPp3Xvn182QRRmYzr",
  "key39": "r1tuCX3NeiHc9nKba6tr7vWffVqKBHkbKfsPfWRZ8w6cM8nUoEevemYo3RcqngrqmZvbCov1oree6uKuRPyRe5U",
  "key40": "3wiRxoFz8hBcGV2shpsAykZ18BiFQMBpxDKxbtYVUdcjJGxpA23AKm2w2BMk24L1wm1uTpQUHVhACrsbBdrn8U69",
  "key41": "3unDtX4X3a223a2yaLepGvMrtGTuRWVuaYUXsjrTz4JzquLXUZEJrHyjuEESZN6h8T9aRXDEJaAhW5Leu2bi5xrv",
  "key42": "5BWdixzL31FLfiDKabZ15tTxHB6x6UsUDzwbEr3t8BxHqjnoDSWNtj8ozAghgrSQfuaHj315mTmczxZ3KWQsqs16",
  "key43": "3T1gNfDmMU8ZbZYuRM7rbsEj5FY3oczqEXbZpXDNABKu5qvs4Zs8dnfTYGcPVHQmu588eaDikbpVGp8JewhXZv8y",
  "key44": "3vZ2zaGx6w6u9wWR6hLhaNaXCdtpwaTT52uqyA5ezj1j21zedkMoYteA4czaAW8RHSDfCGNeTweEm5ZNbuVKfhAG",
  "key45": "5Px8UkhxL5MjXjdfXd4mSRSGNYp4okpqGpsZW6tcAZ6zyytvEbsYqZZWY22s7Fpfdu3bWhtienYAnPK1UFyzJFse",
  "key46": "48Xkc4Puq2sUqJetUoe8SASKh538cwFLaYu2o2dJU2Q9cLKTdVsfD19MeaSjMpCB9JTrq7Estfp9ZoShjJrX8AnK",
  "key47": "5e4b4Tqx5S1xi1xR7Czt2BiEAtB38nHHenNpE6NH87qGh7sUxfYn3TcMpcM7vzZ9BxHycAyfWXTx56X5WUCQsqpF",
  "key48": "5n938hQfYRWaSJ1WXKNMy6p2WFB2xj4vz7FD9dLQgortmtwmwcLpdGfGe2ty5zg6K8ePaFNGZMcat1VyVamSQfCw",
  "key49": "4ezJqtSPqP8tGzyyWbPdokM8M8Wh5BhBagmxCfwFvQpV3qyoA2VZxAdsk8tLqw3acXwnqmxWEWHjM5k5cJDTnNLm"
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
