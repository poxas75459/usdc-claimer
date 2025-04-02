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
    "4hNdY9bUrRtaomsGQctcPP2tDkNWksyYpm4ifZXvZmR12hk79KcKK5BcUsr8DaEjkMu9LQUriipQjanTH1LCTvky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L6nXbVr37M41e45wcUTpttihePemRuAsfvMC5sdTV5fUrkb6JvAPvFpFsc637K7U5VVXKwemCkcznuXAAvuTT6E",
  "key1": "3Az87QJFKtR92URnJj9pAWW3jqK6eov2Li6PzXYvQneuqvd4dxS3XbkbGm1q3RbBYQ2bYgx3vjevf1VR34KuAiai",
  "key2": "pVPW1pnh4cpPErUETCiB6P9f1K1fRS7M33ezgbjUv6towyGayxJxqTeYRYtMwiefz16ywZEsbuELdvK6cuJmxnc",
  "key3": "2myfz3qCBRs8Az8MFhMtmK6SA1aHt5iKGj6pxUPah11gBZAHCuVwuNSgCocAK5JaCsmp53GR5ARbt7kDCWi1j2ko",
  "key4": "51DXMfYpNzVYxBRq61ce3UMTj7c69xUs8Awt6mCbMZ6J1oh28RcUAdgTyqRckAFKfaPEoEvrPmqaDGunWx3rQKY9",
  "key5": "5eCTV3JMHf1TnyUAoqbdV7S6rXTWqTPwzb6Sgj3QUZUyWMbgqvjfJcEp4aABGJTYtfmSwdFHbci7wG8h5LmkyRjM",
  "key6": "5LPPj9XRYRqVnMufZ1zdoxwEGnKvv2uTLNnWp9at1QiG87SsPrM6HMRBpb1b3zdYpLM5o95KK6Xzmf6VWDCaRCcC",
  "key7": "2m1BXm8ruYHxpcyjZqotopL6z1UHfMsMJZHyQjw4hEn7ENCXzGfSVDqroW5SQETGuqQ9fjMdm19PPpPRyEqScMNB",
  "key8": "48yr8PSTbjkv9D55S6gTdtmsWA5knwLLzS5M95MXYVYvUJtRxTVtCsdmdLNLLXvXx98sjqu7A6b9RX3RoMbaxR15",
  "key9": "3wqE3tGLNaGMDHs8dAmbAYbgXtqxBpTDmYnLk1k3ffutJSuiTouympfDghUXAcZ9H8WFUxsjfQEP4Je7ZotpYiQW",
  "key10": "BBQ1Vy66MnKywayxmBLMCKPygrRwBghb9wkZNAjurXTNFeepDe2riTjitAWoEegTc3d8ZGfKHTcz5yLRrsXgDGW",
  "key11": "2DmDHr4ywK8LdLyou93ytowvhqJGxaCoJS9dnT5xmJNhqzhUthkNYhjq7uWFyfrah4GNP8uu3VBD7vpy7hvLR12Z",
  "key12": "34ydZvgiCwwKCdui9jir5gBUqKoSj2D9CoNEsVqsTDKc1oCeiSacnXXGWyDRU6kBtbic4LpbTqsuAKfh2PvRTEyk",
  "key13": "62ANYh2c7k3SJRyGyaYivaVW8coL1FcgXqv9Y7RT5jNvEwyoehfy8JbxPXS63N8U25GixDjqLqibqdpUXtRDyJRB",
  "key14": "4excvBaHvq2mT1s4KvjEVZeEsnTVe52M85EMB1FZZAaGcVJquVcpasZGYofpwfULNQXbvNCBywY2JoivfLgiNs3s",
  "key15": "56yb6sabuz8wMgrNYrsaRZBsAQ65yfda7ujgBnNRDWoeHW2GpJada1641qfgv22xAt3zieomYNos8zg3RhskzAyv",
  "key16": "4a7fkP3StMwrBsbgWS6TNKHd32kTinkrqTQzDT3C7XLJgsREEFDroQcLVZcrZ9tk2Vcp4GJjNCBzycx4StJfLCAZ",
  "key17": "61vAHFjBu4bABitkWSyRki8AdqJtDLNKWCavC8XrAe9eyFrXe5Vtx1Xy4EWz2Pshx3JS2a387sZhXV6hvNF3BDs2",
  "key18": "jSCh3DV7bAGxcSDDWs8smqVPsiUjVBQ1KMG3GY2wqJbAG2LoJFnzJ2xVDpMSRhSDhJMy3k2KZpQYFvsnZ5Mps7a",
  "key19": "5fz8bs8WoRcDBxBZjeAU21xMMrRJw87ibnAMWTKmPREdJNxfPwNMapKtKHJinSkuPpVo7VPTXW7hyBgspGTMxh1o",
  "key20": "5CH41PkvWZQHmziDXtbjPYWjVDyn2tBqcKhNAT53xYcGoCgXgxSqQcGmPvxU3ZqGh3n54wnLPKfWmRQuTTiCbPZV",
  "key21": "55je11PNQXTfKzBRt7Sd1NdYd6pSd2Fp9E744iWauQXG8phjdAVjX4CtH2Ag7ZLHGmjmPcnWuWPHNbdXt1yW56ms",
  "key22": "G8fjniRwDNJTKzHH5btfjus1Mr7rTDfAff7CzHq92NFzfn6iDh1XZRPzgKa4uYtKH2hnKWt75tr1BQzP2o9j7Gc",
  "key23": "4nyuTrbQSVKbFjQcz1BDYwHcifantroU6ZrHXW2vxLBsefcxmpjTaU7PXcUp8T5SDJFqQbe8t8bvaA4gbAtscncb",
  "key24": "4QayqjbAvQLPHaqeKmwr2Q3HPBAjiiRz4DaVMeeJFQQ7N9GizVs3sSZ7BVdZHBugTjGnogQr8H2yDEXyc13tufqt",
  "key25": "2wyeHRWXB8ZV6RhfuekVD9Gj6EFFtTGsvMu36m6kN9Tr9y1dL3mhXMZtfhCbYvF5Hy9EquTHoZ8ZeyiiMBqkgxT5",
  "key26": "2FbZzXkUAp45Q4BZJKey7h4FuS1EzSmDJUNPACzyUGSxi7FXqz3x2Aina2NymhXn23sAfcXzrPkF82xRwis7Prg6",
  "key27": "59x83tgfLdVUYRHGKG1WYhpqh8hNKzJDic6bKp3FBTRhUwk9WCcPiSWRQNdgLSBAq8pL3Y44AL5GKZPiv241bVYp",
  "key28": "aeEwnrbYj1Ei1j2GVaquukaPyBQYFqCWPTvjczW9giM8i7VXFEMK4o8LqtTAWph5hJb2fQF8ATsKSMzWvfkHBwr",
  "key29": "2CtsDHCojBjgBscqxCa4KNke1te3AWr3q92TmNHQ1yuEzbPqtdugn8SV2ksCpp3gjmn1Nf6vSvZP6M1RvmJSXJra",
  "key30": "2cV55vhM9QSZ6KprEj5gD6CFz6kgSPWtbZDzEWNNRUpmez6Uu8YZATiyBWYtN4kYXQrMKUhX5D3fg8aMgxugWqJU",
  "key31": "279qa5bMhN56FT3RAEqTj1Rf76HNHwSwR9QchiSTafaZELRHiBAkLde1GNYdd6fWzDrFmdyEHupLDyaokcKdfmza",
  "key32": "5KZuV9RuApQSJwyVQZXmrCJjpHmdD4UpoEppBS6S51NsL3qcaDu5u81irbRYHsYxda5XN6EXYm4VPWyKhgSdEG1v",
  "key33": "5fbEQEyGMMYUKHj1iHQuYu7xzc7UcfF2zvPPAbCreycLXcTvzBnC26JJF5g39PBCq4XuConQPkYsqND8CAbSaEeq",
  "key34": "4tpuE1KD5WbqDunVnr3D7fAgpcGge8rPxhtw4YvVxu5GCL6VEEH4YxVuTzyY9Z32mACZrGFFi8K315YevbhMkYrg",
  "key35": "2LBmwCzE6x7uGvm5onwUKiupXAcxGWYiSyG4z3mT8i5DEGCqx2hWewtC39m2X7Rv3cLBsNRwZGPrTiKRqc6UscqY",
  "key36": "656RgnWMJEabVLzz62Qk4pPbEevDTeqsbZuH774FRLLv74HL47mkpNimxjn854eWMzvsABvf9KG2zxqNk7zxqxv6",
  "key37": "T6a7cwi14i5cHCVTq2SomYVQ9YDZEY9eZ1eHUCTHbGCWf9QdDd1cPg6WefjfG1zT3SpVBtq8sBEAPwh1KdBrWaH",
  "key38": "29jNVQuzmvjvC3uMMtvWzcspT3pAjzWbqtaEJSi8RPd5WV3MikkND8pqS38CxUBNdJovzH7vEvAGEYCzBjpv5VNX",
  "key39": "3ZUfc7WzaRo4fLbT7tDxA5e9QGLN9u4ouYtpTpVjGDx2vnQ7rnAKG8LboHuZyeWbmNJCjyM7nVKXEKSFo2EmodVf",
  "key40": "29gBZXBFuAkhmc1RbgSYvZVxz4Au2qDDipv1qnjkFsCNPon9UBzXNWzzNP3u9D4pe2Q26xCacCSYUVdhxAL16H7k",
  "key41": "2s6xLdXUHyYB1vhLZ4ceukCNYNiC5ywhAnYhCrsfY6TyuG7X4ZT7jgBA1ZpUXnbjFWH7KLxR4i7awTJwiKhExrbj",
  "key42": "3AEBtSxTCcccwyYDVtLocqqiqhW85KRzE2qvRdYuPhTY5SwGPSp238TCbv9C3e1NkSPePsJFvmNKCnJqGv6ENEwJ",
  "key43": "4XT7wcfdkvo1Pby7EadihvA9fQGj1f2FwW8pUV2PUMNAKDSHAimeyWjcWVjGM9HChA9JjgFKDP6rJjva37Ttad37",
  "key44": "4DUxmCvQkTaJLaWW2Tyv7cL47kwcDt8xF4fg2qMC3Nc2V5xJtb5FAxzGJJ69NRghe14E2mV5QjMwgLwM1sWsWqcA",
  "key45": "4FXqiRvcMiCesYxm1Un1cA9h4zhwwhJmspCyHuxwy3ZycmBSJ3MRKEfx96WWbXB3sC9NbgVXnB4z1B2LGAHoUJz",
  "key46": "3uXZt67dpkkSMjjRXz7JNf8QD61YiwTHC3FD8CMfDW1qTnJoZupTfgCNutAURDzXr462cjkbaz4RnsPg4KVBPtuU",
  "key47": "3qr6tG2GWVzz7maQ2nxtxHMyC5J59wtLBxMrCof4yx34XU6WDw7UEY5E3sEC6PTAnjTj31WcBoJBsxizUf3q93V4",
  "key48": "4Tx9QC8R2XY3fBbV6Y3p79ucMk8WLwYMoHT9un55nKJcpzWumBLF53uHzprXPajAtnxm8GZooF6sCoRZbYBSTm1c"
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
