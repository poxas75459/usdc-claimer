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
    "67ZwbsFtq54UFD5otrAfCbgKZUrXvKzdPfpku5tRiLdjCtyEhQEBjomsxg5iKPt9hGWTugAGqDxWTa1RZ4rAkeLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RuEHbmwNk2Fp3aJe2tWgkesTToXkpsCHoWTj1kmCCjaL5LoNBMiaBrnwQCGGBW8YYJyJzKGaHm4j6HrmFyTKigm",
  "key1": "NqhfvFP5XSmFUks2kyf1A5J7RKmACdcq8URUxKUhQVaBHHgdaEdaLe2oWzQLho7s63zPrmkyFvsdPK2M8vrB5Wz",
  "key2": "3XyeESfvUiGN9zwX8TurNN7mLyJt4DJnhSSLtKY6dAeFYy9YGzxL5dz6hqaBnGS2ZZYmY2nssDGfJfASDm5as5Ec",
  "key3": "siNGte79K5RGKavG3UMBs4zy2BgdJBBwk9tUjcsQCmNRAhGNn9aqyMMCpzugfyThWQ2X2mqJWrnh2GGuhXYQoTd",
  "key4": "fmKwycycSwJqVArM4srva9iouXBySigVAByzhD7EvSUfUqvhfW2TpkQih3fRhyr4rQvxorzK1xSiHsz31tzCWz8",
  "key5": "3R674TcYDwrjm5GGceMQTxhXmtPbrMFiWcGsohbopcGvzvPuq2DQFzQ2ZmNh4qxjGNW17PguR3z1WcaSwMBw26L7",
  "key6": "5nZCJ42wG7n4wa6sgQJmpn8QjtjHp6HF1bt3tfNcT4PdA9icWzso8FPnrKenrS2bnWSpWqntQGj9W7qkFzwbDqUS",
  "key7": "3Lm7ZFMft2tyBXsDVmhSE3cSACqcCujJXXtCM8Cnc4bttr1CHm4ddYJmWHJd5d2aTTY5UTKrDPoachgWfDoqmf3j",
  "key8": "5FCA72wjoFN1DEKhQo5taK8Ed1Dgffhw2WXpTvYf6vC6b9UeudpUuc9BWNh69vKEz2niJieqxZZpZwHJoCzLLe3a",
  "key9": "T5MJSc5rNDJhFo7UaD6MZsvJAB2iwbnDMoMnPdYwpW6ptUfcCo9WgmY73tdL5qEfhAxorbtcRGoUdkRdHH14ZaA",
  "key10": "dd2mer9ACuJ32QPAccqR3CsRxxAPvLpSXpZRuQdrKiRsKrdky1RrBMbb9r4WQVVnMxRiYFonAwceyyZqbPoTGzr",
  "key11": "4AXbwu3kdhi2xEpxv5GwJ2g2XuE989Pkqc9mCkmZ7snN1xsnvJMyLPg3vk8K23iu49zrKpzs3i7uhym7pKFCz4Us",
  "key12": "3DiFZ6CVQf2DFusuNndjPwi9qcwBU1DXZDotLgaSjSfadqAJP59JT9WpDdhGnxdenof5xsW4XJoSv6DZqzvzWa5U",
  "key13": "4JCZW5XDRZ7cbhyrDYfGyjg8uqB9nJ2MYBZKQYFrcBreRnzzk2fbgLh42jJh3u6pajx1MAZ9WVRuNuKVohEMTAC1",
  "key14": "2KpvZiCknuFbF2GhDpBfjeGVNzw98q1kAGCHb4r7rY9jZ6wbqQhFpHwv6gzUoupw4ehwVr1VESf14h9MWrHZSAqZ",
  "key15": "4T2weXGTE6UWQcGKjhzL65bz7UuS2Daj2YMWscC9AtAwXUL7V6s5qr1Q5ueYRWJWmamCvykcUygMCpRLMjom1dpx",
  "key16": "4WHuUZtmsvUU3aoW9TDhB2RtwX47mj4r2BzWYysfKUhuHaiYdsdjJWLNeUzNbNdWpdx53zqAhaESQ14pCSSNcX6S",
  "key17": "48hrzjodmAi8hAbc2p44QpFGR9esX6kjgLqQU2DBaZztegebYEDEG9GuDqWrME8wubZ9oNN6MQzVFCRVVttHV2Vy",
  "key18": "4upDMiw279WMwt3HR27hkev6UugD24o8dhVBRbp2PtkMP9e9vSQVDHSCfxSy9VsNNT3zb5MEVwG8URJXJuTzqZws",
  "key19": "2DG6dw8PkvTcwQ1RpydVoVboQuFPLdTBBCZhuaYC75BwCiAp8HFNNJQNKha7Sz9Q1ik48DwKntw5Lni6wgAYk3SZ",
  "key20": "2d6hHuGodiggiPT3zpyCEzM7sPGTgXMMyHxDfbA1Zew8oSHuKeHHNyo81P4MEUkAmig9nHFK3d3CL8yUVSo93T1Y",
  "key21": "2bzfhPW1tnCmuieYVWEXzC69ymi3YCTNA918ZYDxpUsqVuoMsQfassd1FopSEWAQFRxkqhEo6572js6UCWZCMTW2",
  "key22": "4jGgf42zyNG1L61BbcB22J9cX8sJ5NJ7iRfGW6VycogqagZEzdLxrXWreSM1xoK3BQ3UhXREM35igUcBc1VBXbEz",
  "key23": "4GpYn9WcYH9BYm8vqsQGAeL72Vti86sMGhxyFEsmVznTdfYh4ADVzjqTqHQQXQhFzwb2QA6XsXgKkWfat6C9hUC1",
  "key24": "mi7PfC2e6hw21To2vqWERMQi9DutmwpFEsUj7ju5xiQX5FYNUNhaAyguupbBHXoGbTLBwyiNvcrqPtBhK1iVPfe",
  "key25": "2YTC5egqRg1xvPUrbfCBuyDpwuMM7ss5tEUaNAHD1PRf2nWnsThrdiH5Y1kezktuuckHaW7uvYCZ4GEFLREeqXib",
  "key26": "GWPqZwvZNsxC8bZTzQtQQpES9Ecsq7NupDGQ25igWAkV9o5ekbNxq7K37yRS5EA9oprJc72DLsQT8XB2PbK6bJY",
  "key27": "5LCjmpAep8e1wBn2o6bZU7RxC9GVzaFKJnadL42Mfu7j4iGaZUCwKPL2yNCyoq4PUDLzXTQ9x8gCA7z7PGYQUnmo",
  "key28": "63taq67EAzxGfqvR18cWngDPVuvAHFK8xAssgJUbzz5fxPjYpt8oMWaUxi3cXxStnhnTf7roJda4uRWVkDh3Euxe",
  "key29": "285DPvMn7XhjPBbwBgfWosurKaPYdAiCf6XxLyPafEBRa8tRRsetNUkGgoUBVgQ4ziF17dbjkqrkrDkCxvdNqyt9",
  "key30": "3oWwnCh98C9wJ4faRmLVzxV4tdaDwDGcPiGVkMZNVxtPSqTVc23NtmcbEbF5dCaKMeHr2yNEvW84LaegPGVQHb9q",
  "key31": "4xXs5eG4qCr5ELNvUPj5sBbC6a2E5QvP1zsx2uucvdKijY1HQWNPtEJrPqyqRQXUL3ToRVeKC7Row9WrFH29SiF3",
  "key32": "5RQjEkTswBLmzusXZa5NTKZrcmn2QdG9uM2YZVzgjtwrxGizmVnTdBXZSNmEFGVQx9yxArASn3ywUoKqeg7P5imQ",
  "key33": "2on3WNxoSfTvv3P3avhygF2PZzJX1XiVrTvXTs86ctWF27mE73Yt5oX9mq6yxsmuRVq3YY22zMWU8K26SHRmSkUw",
  "key34": "3mfqJjFwrH21a3WF8FbkWzwuBG7TiiHn9aohYTGhyiBQySD8QL1aEBZ57CJdXDjWFYNRovoFTUtZLDPWkAaLNtZx",
  "key35": "gV6Ed2nPA5VpF5JyzBdrA9D9XdHsauNu25bTyiw7vZCrpjPu5HSue6wEUkCYNoEGBXxcJrmKdPcpD8XtP1T93qW",
  "key36": "2Amf3XVdDcVyJgeN5LdBQfa49hZmWgBh8urzvGeL2qWodpWx8RyHbx4zUNuWjgEB9Er1e4BBs49Zb4QZNyWmvSAf",
  "key37": "64zKQGPDQNA3vQhB7TPADzTHyfSWwdfeYxr6xG1SMhKYaKbSjn38cMYvaZuirtWQ5EvEsJSCyhaw5bGtXnvKMuE",
  "key38": "5qGi9RCFrAobSvwaQCWToyG9xUj41RsLnnN64XPsG9WXCQQPU3fnGWemxiDuRK2wpASbkZKvELvtLBVXMhs6Fofj"
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
