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
    "3TDt3SrR6UAKkKZE7NrhC1HSnyS6tR3SzAC8RjAzvpnchrNBK3nrMJV7xVguyMocx4YDKD9XvVZNVwtgNtdcyjn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8gyBsUwL9rQu6hTowd8Z99MamL6xxa1rVCYjjcS3ht8sv3Y5PdtcDhy1moSzTx7SpgvHWL7YkZ29BhBQPKjPCi",
  "key1": "5MpfKCNnugLPfNh2KBk4DwrwhXnHWqpPbCFW87CYBgYQC3HXB7caNmPgXTGtrafDEAiXivdpVbpeDycsHrCJvtrv",
  "key2": "F6WQET4cdn3UUZzoGFsySL2JDL9btXzK9EZaSpgWrMbgpzbjLHDgVZCVKHoAX2wigjPv65c1eJJRLfD3nB3qnYy",
  "key3": "FrgRKLJHuraGv5Ho1JUa5Dvsh53irmRqD5339ujdSWcfv6YAQXM9UFixSoUQxTFEvDQM934ib6jnizZDvBhoBzD",
  "key4": "5j7EvRh1UCajCLrkp27KaARLQYyQ5xMAioypKPdVf13gZNFq9DZXTvkMXqVtPFsG6CAD2RK6KLLHu8MigaDeDFuQ",
  "key5": "4Xeib6KVyAaoLL675ftBXnbYQergaje2uMndJUyxKaPcJUVu4jsJjPBM6MajhY6T1ArCH8W83DvweZtt5sGr2Civ",
  "key6": "3rqsworNXdCHYDgAnWoZdhGT8TvuDDtwrD13BCVRz3zrmuLPAQmVpg2m2J6FSoTtUNdJ7yUy6Eosdm7568M7N1Xq",
  "key7": "2b5PtRC4jjWmXHPiopUmgtjcNof6uy9rfKFA5y3vnu8nF5dPPnSSQLSnyeHUMKszThKdFVLPH1948XuEZHvUD2RQ",
  "key8": "4fQTwCzF5hWzTr12nTdsfaXG4vZUBgdiCcy4eN5eRC5jVdPNk7qxdH2LNJPJRbp2BE2y8W8FACS151EBpiLSMie7",
  "key9": "5Y2WMELdXMFPJPrwdyv2JyScUwhWAUaMvJiNaN1zaYjgFRUC8JyaNVTLyrmumtsi6TyEqWcSKv2RvkcsxozH9ySd",
  "key10": "BXY6vLzwC2F6L2K544TeudYAQKiFrPuJLVhSEWaNMTfzkrVe2b1LdjLvtjQgCc5sKFSMLnci6KCVjDYNYXNmPuV",
  "key11": "3aWE1RHyEZwNUBeS35Vr8HTGPbpDSPG4TAHERy16UGsroZu4VebSqjJrTXFChXBxurqCF8VsLuaecS9iTM8DM8YM",
  "key12": "2smxnUTwqD7zirwmW1ash6DmVEbVNGPJupb68aYj6oSVwH7XZ3CGUQvsoteJncU6CS5MhLfymfg2kKdfTpUhrg6A",
  "key13": "XJUC5iPTSCbqRgqM6EvY1A7pDFYXNqhLHcZ9A3RNGEz8jxJztuXu2Pzr9KNgCwzWejaE79awz2HTwZAq3AHzGPz",
  "key14": "53J5f8YQvB6TwmwendsddrTggEzcLLpAM9SEL6bFEW27XQ35hZMH8cuHMa7T58sosNidiXkLeK5YbH8tFZms68gp",
  "key15": "4ANEFq4vazCn87HNC3ZfQ2G612GcGyujyUQNyXnfwTmo2dyQXqBPUaWBdjsnv8xFXzcCMcV95bi711nhvQZSFJcf",
  "key16": "2kiTawmc6vk6gTor5sWSYPPbeiR3FBUVqEoecb8dASeamJXCj9QnsrwjJAiaE9FfTTsvdCttEQE8G5QP3bsaK7Su",
  "key17": "3xV7g4fpJ6tophkA97kEp8JcoqmSSReACxFdXETyArtJNL3eKnZAR7iRCCPZ8EiuTgLVYLyGjYCPWchBPiNY1joR",
  "key18": "5ay3csTqqGd3uLZj3zb5qL12yhCGchyomh3gEQr1iHkmtA88X1Ctoo76fSiqv3e88iBDRN1ZAFAxm155212gtoH9",
  "key19": "ZvWDchNBPmro78RqNqYnZwR6CeLJJNerA7EqYXsGhGFWg2BZmxRQetakW74i6DZe2CUtRfuRq5T1NN1AaXp5vVe",
  "key20": "zWSS7riGTxhzTwY1gM8JEzV672r9DoneZipgbRRTu2QYcarM6nX44xSnhDiHnucqdvj9PQaRJmHWtVugTDxhY4a",
  "key21": "8HtxRUaNFUKNg1gKcUpPB8hbKSN44Ce8E5jgk3NCSAPGD1cUcz397jcBF7gjvR2WGC98ASqWpknfrXPsCD67DHj",
  "key22": "61M2bVxqJzLxgaso8hvrU7fRMAUa6hsHJxdJ9ouAcxkcnzAiZPjsZdLVEG8vjG4U3vzsUvhRE9mz23RsQXWjW8PR",
  "key23": "ZfVpD1HcQGJjZx5nEBovmRF5dHfvPaY4E3KHcnf8vFvkkUfLHdQ6gfeYiX9fiiDJWVwZv1ecYRqpy4dgSytK788",
  "key24": "5CM8KMeq4oH4Wd5MisHbqTfZ1K3HbeNBbbQDSvJnEMjF2aNqCNz2jwJvXqF93zZud5e6STycm4tzE7VZZ4RogD93",
  "key25": "547W9PSmQeApaRAQqir199fujpCqZJsCpoG6XUx3eZDKXhCYkj8dE4h7ncjhB992cjDQwdsRiwBsUa8ZK1GESA8r",
  "key26": "5ZU47gFmYnSkzYCtFGFn4vXRUG4gX9EN9WkPvA3NfPFM1fLzczSSgHWRy6R6Sf5ddjHRrDL9DggpwwLvqkkrazC3",
  "key27": "5aAuPvAMwQF5jLxFPPTYQj3Zh6NhjcnLRE6BF2LMsuGqtfDuaKj3zdA2Jr3sqg7zLzotGmFYfQuLXrwZ8iSpKvNY",
  "key28": "2AkCeShiMzFeS3EYYUAnzGEYmbi1UkBxiouwgSS7jRcNvsNr7qnpeghLhkQ5JUC1c38LKAM1p4JAK52ML6uw3MHc",
  "key29": "45opxfLbTFwjymELFMAGqiEDV8xQQuNmYU1viZ2PmEBzRwWexX4651uyY7yekPH1Qo2brZJD3o8j1kP4SYejKQhr",
  "key30": "my6N5ZmPcCwTogzDBGP1GQXzVPY8xDeZAaqBtJxaYBENcD5XKaAVEHTTJDPMGgsXySZJH1fJhBWRFpF5WPWyFsD",
  "key31": "2nr2xzxGVncBh5megCGp5ZAh1j7LaP6PTr9Y9PB9sVTsAjBfYr9NkizUyegUrBDig29ZovkbCtAMhZZARpA3ZFLs",
  "key32": "4utBFYR1x2m8GEycfhQPQUnzWec8w6rxDTzoF1b4CZgszjyM8xKh573DkwzQtuxUuoiMcZ1f4CKtSK4kMTYjeGEm",
  "key33": "7cTcyEv5afxD79C41yzuqPshS3dpPgMiFny1tLgyS411Fgk7vuixXRJjbk5iKDNLyyVKMoQUinXp2Y4PjEJhEuN",
  "key34": "4kGtboZDSL6MHUETdQbvuoYsB7vD27enb4h4wtH18oBzYQiJLekLmy1SfibXuY5U6PwZE8MBqvieTwAeAPj1KvR3",
  "key35": "542oahHVtVfDXzdkiG4LEw9J5a2oXHvqPvHJRhBVGAiycT9GUdew1wx3p4fBHVo2PKBVFo678juFJUGKo8xw8uge",
  "key36": "4p1br1aNGTmPftvMBLTSGAV38Ca1rfC43TTowmMmNHDM4eQtg5vHR2JPzzMVcHavKvusPgcwbcq5C8TZeXp54Vyu",
  "key37": "2MLnPaGVbP4qa152Q9UTqxXMA34TizGj3sJpwnjvFXG8gs4xTGZWcge4YC7ruxjUS6gmFEKMvwQz2pV2GVj2TLfC",
  "key38": "5Hhe2cks6VWnhoH4R3PX4s6LaKKHsPgz3CJSUDEji5bXWZU5rcSC4jEn1WFTukps92TuEp8TfmByT2YFNKT78RA",
  "key39": "2TdGmGQSbPrzeT8QDYjt61nUfcZg4rx79YKRoFYTmPk3nTWRmGby8QJKSkyfkiBmgHdbmWCUj1fBFySzvoMrw5XL",
  "key40": "sprUEnNXyqv3mHFRdTVmnqWdc9Mm4yJ3UoLHhcKZ4e72R5MeeGaHP8BoKWyDG7wPseJs6Lj5bQyn8UcLszyTJUU",
  "key41": "2KeN8o1NjdcTboywCo7cUsVvSEUjPbvqSJVBwVfTiurLfrrbXeswwXHuyyKYJX5UHAbDWex1Pjb7Yj7evnSHXSB1",
  "key42": "44oTu5eaqZJ6VAeGKgq661ho8x3xEfKwXKVmphjZ9x5DHoaEFSbux7CSBr5eeqUnmk2ZzChfixx57TPSWtrZzrUo",
  "key43": "4RGxCBxv8gfgcMRLev1chd5WEATqLeq6txCUuLAJ7Nzq6WEEGXLgyEDcvWvye5JrdfQ8cGDwfBJyE2UP3ZZXd8g4",
  "key44": "27tbCr9MkmpR24pexmVpuhQNJwhrJ5zEoBcju399YWEcUeWYw7zuNMmSJ4fcLSGgfpughdKXVzgNCGRMnHZWNbRF",
  "key45": "4ciXwDUxvJ5HfPaZ5sivaQ3WN88bTzGLz3nLmUVmiH9C5HDrT86kySUiXQPgb2agV1riWuPpDV2uZKj9Ebu92PHR",
  "key46": "5zjGmB6fv1P5t12ztHzWbeHXc3DherTAVnpTgDvuqNnwXyKNfZqFQ3JV9ss9BWzFmed2qhsvWpCiCRmPN4MZA7Hh",
  "key47": "5uwDR5MMTJFTEsuYtJa5YvuKfqABKSeJ1qy3ZrXt29iTWh68qft7J7aYcoX5CTHusYcncVNWVm1ijT9KRmxGHnTS"
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
