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
    "3iB2FkftzxxMUqPovqvHBhoLAPmKwihJZTSBNQXMWGwUeEnvEdu5A1ntiBGqVNJuFwy3LCrRcnuYBdosZQKqKj8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UcHQUVFZV9N9kRKzGMmZkThuGEhDfYKsDMzTwvnYjKFoUuJJLTaTrxNyzqa1ieAhzEwYDpNYw9iqQECbFmz1QuL",
  "key1": "3LPfJGGXdVGQtakui2gy7R73udNePehd4kcMv1NRCZCqaWE84ibPUen8y1h5HBVt7zNPEvZTNRhpxL64cfGhuyA7",
  "key2": "4HxWE6b8k6zG8zbS6bj4QFaQr1XqonZiMUHZFSaQXucxP1JiHnPoUvSAqqaoxwyUQvd6SKnM6X7urq7TqpTaDtvv",
  "key3": "F9DyU3GjhtmHYrh4C12iFd5MtUsH4HM3jrYgGLPn3x8HHuJuNvim5B5NnNEXcCAnMhpbQMkKT2zvfw2332UT4Rv",
  "key4": "Ri3R4Yzn1CBYQuF4rm3n3E4kaReWAgfwFC3EZLNpgxrZoinN74zaEES37ULo2TtpZaCEsMsScw4gGBRjaTZWQvv",
  "key5": "FR6Q3rNZ3nZnJkLfdXvR29sRCBEMebtg3pzmoQi1sRbB3CfzuPeG99zpW7GnFC431akRtvXLQGUb3V2XPV1aCAE",
  "key6": "4q3JKRkbQ34KFq1n7eUNyvpQAZpfMxEJBi98WDTQ7xcnpoKR4dC9LVctATzzVRfrbg2BdLRMm1FX7YEetgAW29vo",
  "key7": "5ViXNLipgDg81vyVoqbdB9xaNq2F1ZUH9ogpQ9XS5YoAsNP2yYmohSR6orUqpPTwUTYQguR3HTTajW8CX4tJJ6ai",
  "key8": "5fHN3h3Sf697J4MQnEJu184tGAXfeD63Y6A55XrzEn9LKAin4LxRCnaQXPvf2sqnz2eJS6ZiNbPptKBYvaLXs5mP",
  "key9": "46Z4pWnJf8iru8DzvrkJMMyLvvCSdMdRwU8aJNu62sjGAh4qJBd49QvfMkATvZ6v3VRUY4fkxTcFQ8CgiZNmjJLK",
  "key10": "5YXkTkuJ7CQTR2PyCgGBtgzeKrdMZqRH3xE4cRTMJfGPbPMQBXNCDfiUVexacj2p9xFb3WVidtzSyL8xFrfkmEtV",
  "key11": "2vizVW1rQ8z8X7XjCfvU11Ef2apEzgXNpc95zPZwi6iYSshbNtWbZ3H4tLpHjHekmJqaZyN5dMqbcFByhufio9Sc",
  "key12": "2TBzubAzAbhXh22BEqab8e2wAecFnKh1wRKYFodD9uyBU7DwKuadJKxF4v3Dyx8JjP43ZzJ7mpXr1xhMS2FES5TV",
  "key13": "dfZNU5wsse2ZY9x72oXuiD9qHmSKmR3BmsiW2oCapyLKt2Q2sSeVXmLob2GyrjxXZTPmpE9LSqsmKaPc9ExXvw5",
  "key14": "3BasiaiBapi7TBmA1v1GbmHoPm6iR3RJ72ZH42JZ2Fb2T42CZnJpgFFzupfgZM9TDeZDyRDHiFgZNvNHme4ePxtw",
  "key15": "3RqetdakN6YcHRhcXL5yy6qi1WW9nmQdoRX2gb841PN53paERbq8AA2bfV7445ANNS8a9m4TPG4q9wqVZoVqvkza",
  "key16": "5wPS8xgKg3T6UWgbpVoZjYqmwig1p1GAxzGRGCTZXQggcz9VdhaTTm88twXLuVmnYv27doHnHRjcWZfBzgxt56nv",
  "key17": "1hZGM73eai87QC57qmbb1j4WhTSG5jBFLFiciWHyo9AJKyNW4tqyhwqDje23PQfKBjvCtkMqr1BytvjS61ELrH4",
  "key18": "HdjwSG9wH2zN8jqStKkM4W3uxPE2kkP9dJx4yMeXTfWK2vmL1TvhXjuCm1nFDBMRwRGzFSMpZDLWoYk6dxfij2r",
  "key19": "67eoqD2sugm9UeScteS1mhHWsQdRvBrhSy35EKsFsuuabJTMkQo9MdSBV7AcTh93tuSiaKkMexrnfhi7SM8ZWTTv",
  "key20": "4sbkh13pmDf9UNYycS89t5yy7MaXfoXGFkFKAxHKeEYkJBUmSJbYtvJsfrkf559BhqdXfAyKUXAjNLCGjtHBh9St",
  "key21": "5NPf7mLe98ekWm3r2EoWMUxB84p7DDaUVdPvx26bJgf8LsQPbtVkpUV4yLECP24ogFUMTj4jKdBknQgxLaSwJbuk",
  "key22": "4naoKrhn9mSrRbrY9b5qRjoYPbL2mTZCbgdFLyB9qnHSRLfqkXM4pHgKnpxmtLb7r68MWY58XGgGsDeMxpCP6hkV",
  "key23": "3ggRAk2QX2X7JZ4otQ2AK5bdK4UJ5pFLG2hGsZeWQdexwLNWKpFxLFU3uhh1kRkiCMpMgVA94u9s4CGWdYjRX9Tq",
  "key24": "Q37paVicfk1aJ6gt4Kvw59oMpw8Squ6DLd3znxezQwtCqZZPibsNqiqzJvNSFJCVoPQmzvxzy4K2xjfaUu5fpWi",
  "key25": "52YHhDsB9zRDYUEDggG2B2P4VNbNqtd3t3CfXPYY8aNKLVWEnV3dNM99fphqnTQZ5nHoWv4GiGQzmQpzBcaA5t7L",
  "key26": "48M6H4hNDRDaaFm8PPGBcwuN469TjySRx9TDZHxY4q7cS31rckjVoadnBHovUhPaGt316j677u4TNMScZJZwJngq",
  "key27": "5hLsGXfvBLTRyCEK5ekpctBzy4853moQNuFX7LLMhdGjWRYpMLmdRbPqHzrmZzu31H8fppcD2WovVtLDSh431aMe",
  "key28": "5NDvSgWxd84iH6SPp7Aof5ye1rWHU83As9kzF9bhJTyRNki3fAo2DQJe9vfs9PfVPDArhXcoiCtXjwExjCowovzH",
  "key29": "5qrb3gMumEk892ucJyse21yMEgvVESe1nCEAbtwJq1uud1uRJkDuiDW9B9aYKyC8uqH1HwixS3uFFmBqqnp1gaiR",
  "key30": "5FGSWeD9vB9mYb4eP6rsCjkvdneBB4zMTKR43q62LFMqJdcY3bVDpi1JDY2Lsui3jy2Yhh7v7teKwNRwPh56KeQS",
  "key31": "4Jxk9cHdoBrZvXv6DeoEaQ91aE4eS8aEqZafR7RAtFFx4sz6uTP298cEeMepgBVUUQmJmrKh7J9uXgdJUYbvU3za",
  "key32": "4Gbo5aRVJaGnTS3oq3PKiB3GNP7v6SrGA5bRD4ZAHKqvYFKZmGRLKzarzY1v8UVqzNggAPTfsTqZgr78fecBfCNj",
  "key33": "5p4tqJvkkUVKmUPoJkfxXn5Qt6cwjfukJ7zZgPFj9A66mgbHYJR4PFRYGWZbR5DPbhiK2TYKvengLqusXb2TTyx1",
  "key34": "RgMAwfuG6V947kkteCqR88JsZTghu2WQPedaVWeSPCvsKodsuGaP1dFfTGm2FwzWhrpaJBDjvFYhUC1W1BtBJeQ",
  "key35": "2SfPm3FNDdsAAJ6gbiMnLBJT3esyhQW5UnnYFfavfKTQEmYA8trFeuirirSnnNAcEciyRCpwdzHpYVGP5KjqqkEQ",
  "key36": "5ai5yaQzxDdV9XKxydF8Ww6s3p2cQaX57diVfoTGzqJmCnFRk5rcmrcuY13gUNUjripWtPr8vY6mBVzs7vQdwx1n",
  "key37": "4QSp1hDS7uAZxoa1bFxtNaF1EJdcidwY7B6o9yg6v5NExGrTt5ErFvdGwtfvoSp4qkGR7EUCFANVgPA12NuHMQUn",
  "key38": "3iQrtZyiZuyGnXraFNBMfEFxKXEpxqzK1aYANg7Br1Bh6zNVKJD8BMJ6p9kVtrZeU8Hcap4YYu7wHSckN7E5UnHA",
  "key39": "4usGEdJcTnnmFFqfd5pToirJ8KU12mddj8PMMpfvGkXMbcxckqePhs2nXDDQEa3wxWjPBch3vnw5DcFtd9mbFMpR",
  "key40": "pQDkBt9stp8HX6u4PRjVtQLKjPW8HKehCmWLwjanfrjXFsDBrei3jc6itrLyyfxwbAR3aCSSpLBXaRtDppnB3tv",
  "key41": "3edn3LJ8ig5kj5HQLnnaJGjUytcvuwNHXhp297Y7Eg6F4ubKWzNbT8wjcAkLr3vj5TSBEksRihdZ8yyQtQpxsBpV",
  "key42": "2TCgpDSM863419NankXZb9cWFiqoCWRwjBZWx6bP8HH737HJMdRSWKVVBPsHPFo8ro1spqqs9pV8r6Vorx3vFXeS",
  "key43": "3QH9mWmFYW6umJA59h4Z8adR53dS3w758YffD4AjfHJaT7pXYQ24DBXH7WRFe5KKuoqubHcsz82KrDqhVEU3LWqi",
  "key44": "rdacQjjboPvzy24QToncTnboTYxaEsSTusAVvZRDL9aS6dYdTfVoh2UD4Bt6ew9dyo5mK1ogZ6PccrECVihf1GW",
  "key45": "zyDobyNXDmkA3qCxPaqs1sefz1MpBAXoDbqnGt5K47NxoTD63cd6UWA7G4niM7xuHva4LMWu71zkoTwgK5gVt6G",
  "key46": "3rJhcpQLbBonLoKeBfgaP7JucPqqKvUoo7Yci1gsnfrNwmJBxJv2u4BZgQqnfVkUt3Bt3zAxtfNtfvDvyVtGNSAc",
  "key47": "4ucuGk52WMR7duviqbTEJ4J16XDwjc8R6nPeJRbkb3iQhHfJBBK8t68i3Qxxe9zjfciHopcHjsZ5yW2cHjxsSMop"
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
