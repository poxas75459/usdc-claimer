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
    "5Yt66irvHT184FsNDpefxMS8D2gcpVg45iGwSeqShMxCvCBRiYrPoTDBfYAVvZzfyiE59wtBa5sUciW3wuxxv45A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4et42ezD6HHSuCBpPu5QRpGZ4HZZv5UpAgj6Gv9KjsFZVjXCxd7b6HUZaHuGdiidZFkuyP5HfehzSXaEPrG54Az8",
  "key1": "3Lpatm5FgLMeFbMXKqxHjE16CADrUf48emBaZwRLmygLZbwqZcyxPw5DsAgaXh7JRXREcpEQjsWffCY4XoyKg1V8",
  "key2": "4CJ5wA5fbLkrVzEBhhn8nMjzRN3FsCwHc2X7mAD3347VsQSCnN2jCBasFTPbMQFFU7mjERNAwSpQ2EY8VewwiPEr",
  "key3": "2ENg9Bk6icYbiY4NKr4sobn9w1Cw8P5GGaje3tTvw16o28Sh3Rjv6KHmUdTYfKCyr685RwENYnJueW4JpE4YkHQK",
  "key4": "51JhawpSC3fYkW2kUAXwJyW7VZVi7c6t6KARBmbfauipLGuMeuJSM7tr7QLPrPwrivbQuwgVMHq6DgjdsF7jRqyZ",
  "key5": "44phXrqJbVka1vv67jCpQ4v7ARwobJcGczmkSJGpz5Wxktwv8rTgDj4DA7ZtcC9EowAkvVwWmk3R5f152MrXmgeG",
  "key6": "4DK99QvkFzKwbh4dmKZVJaxSW7Z1h9qMhCfEswxUDnaBEhzSQCpATcAhAZD7Sw3umx22L4BKjpkPXGcethUiZwEy",
  "key7": "3io5GL8yY15yucZZe9Dc6Biff5qBP85zKTxVHAsY8DwuHE759HiDuxG5KebirCxBkCyxjJC2mrbGhd5RD8w4GhLQ",
  "key8": "aK7Mh83Ccu4kBMcBxFpRtCxEcwCawyMwVhQBC34LifkcNS5sf62oK8uJ9aT4uMHvrD7SrQXn2ie4gxpcZbFAjzn",
  "key9": "UaA6sCmtLSjo68AgZcVoqkXk5CCBd4fUFuX9psWecsdj3kCGRNTcyfoCSVyqFQEtihvV63NqgB1gchxwYbYf1z6",
  "key10": "4UbMwfRxU5eTDUPoS5RuY7SpgYzv2vxw48E7zxAJfGZYezJck6dNFyquVYWnX9bTiky9fVgpXtscuS3moLef7GBv",
  "key11": "4XYKrPgcLBgNvacMYQE3cH32XZUt1r4f258rrNMHSvQpkJRieLcT76zwdwrB98Nd9nhBCw9R6kxiqaPVj7VBBDPk",
  "key12": "2zAT9xubF5uyWQ4WtuzfW1aoLSC6gsmgWRtojGphxHDYGG77CCydUpMrAC8aW3YJHQiptEGX4eXQxHaFJSciwxDo",
  "key13": "4PEmdKwNPDvnUESNuwigGWKhjtNtu32wt2VpVxKopmH4nsvpcxYrjdUMX2PYFLHVFifYAZgFCu9CsHbC48BGihAd",
  "key14": "3aHompw3wtShU3TkcK5Jb89VCTFhGwATscmWYFfeA4pakRRRuLMfoGxnnJLXsTtZ6QpdhLA2yACE8Krj7T6VP9ZT",
  "key15": "5iLj8BwL7qni26mwSFAdQmNaeyDMZaXnAGPDc1kpyy1nbXbBgzQnQJCyj7DzWDqV8UQLEbARSBSPZo8fe4dEpnjs",
  "key16": "4EwgqoiQwdButsPW7XPM32zak1Z2mtWHhxasYgcX4xLFMDnvC2R7iKPsiYytSa1mL42A18H3VAZeDPKgsUEJdKUi",
  "key17": "27C4JUnpRdiDNjcD8HCUf8JBRYmdAxGM2Efq3aYY9qzfwNtkwS9ZLjNaRQK93v1a2VLp6uxzaXMwkV94SUM79XGd",
  "key18": "euCqDMXB7E82hxqi2bBiaCVdpRUstu5KW29EWskhJwGahe1aF8oCqnRyYTvNnpV6m7K4W5d6Jyr2EcH7cmZeWfg",
  "key19": "65UwXm1GGiw6DHbmQ2Pp8ZG5yJ5YnZo6Fhbsggm5jfvWqLhekdPupqWyExJ9SxiFbskbCq9h8Y4Xd5oerSvkDHwz",
  "key20": "5yDZcUWi9GudC2HoBvLUQ85wvZfymAvQ2QA5LmvCw9azEZaLqH8cRmwwULFwuGpKBMQTwdgL8T84eBt4FhCZGRN",
  "key21": "4z92WjtKjit4zQfkjYvZCK41Xet83P4VSoBeUPY9Q4gptbpM79m89jB7FJgYqTgyfcTDa11VkSjPiU5A2zvCrDDk",
  "key22": "5NQfqC8XvKZsH3Sp3wvoxEAFCbtDfrGF4Hyjj1UV317YdayoBUdfwtkKjQcoWRTa9mAhnpZpscCi1jkBtBpyV7xq",
  "key23": "3Cdh9KBUgcFo79Fayij5BbHyrbid821u1UccPPCnHih4s1KfPWxgwjBNGqCaAohkVgnN8UK1rMEt47nVHDuAfXF1",
  "key24": "44FUJF5MRusxSvjjeVmdR3vcCG8DrAq1Q2A8YVTPary51i8Wumn739U58xoRqDRUC92zfpqfhZYrWhRi6L6FFHUm",
  "key25": "4oFPUUQHayhJh3SsBzMvuzZggJBkFgWRqADcaRzj2uv3rX4JpfzEz3NfPaXz61vhEJc7LYRpvg5eZ5PnpxJ69kv6",
  "key26": "2MP93m6rnXq2yZEVedrtCvP52jLNo8ExMCg6YWiSu49phG8WmgwkBnXDGu2zznFiti5iPRJtK9m1pe5JePScwEZe",
  "key27": "36wNgLpuZkiTbz4F4bLnSpsLrk8SE7ASoYZUY7dJPu3NwtWJsn1qDyijENUKBrvx4U5uBuZdffdC82ZNM49QtcH8",
  "key28": "3DKJ2zxh5sp51xXjg6JF5u5Cj6Zxq6oLJAKroNWp298EwpGbAyejpYhgnrTk5MA4YtfY55xLvGkcZkMeC5JGKCPK",
  "key29": "5w4mYDDSguLMT2XAJAriR9wZa8aAEEjRoWAzYMAbFgHbq6g89ugLPMgHuGNvKdwKg1NU3NsBDCj2M2im3eoVjkeV",
  "key30": "TGYR6xX3d2RG1K1eop2oqSz8Rsz32tpv792jzGwM6gGF7jVV4WB5E34b5Shj3KdN8ayJG4raFXVxxcT99u6Soqp",
  "key31": "453w13mAqsVvRNvbP2tn4Dyz59CsFaTJMCWreLKXn3nbpE3mrcskAb4BE4cVF9pGLt5Fj91NM5cmZBk541t6ps5W",
  "key32": "2WPrmU4C1f9eLM5DaxjWG86sa6iytybGiU8za59zUhbR64qFKerSwX7qvrGmu6TTTYSFLKropexZRkrvGhfDdhmb",
  "key33": "545Lh7oAii6EY9z76BynqEMKkGDmZUSBenFzGuYNppT36128CNYEcfZPnshG7Ex1obP4bmWY1Nj9Cj7QPYHtDBJa",
  "key34": "5RyvHLdA88xbHFijc9GACUrtMRFvMQv8g4HwiUxo6owTUe6rFH8btUEyK6VXwxnR1X7L86LW9wtEew99ca4dJcq5",
  "key35": "3maH2DEfRccYVTbdxCSLjyyWjQtsNorZ9NcpJAEUfGEDVFWPoN5gaUhKAVCB7R6UwVMmBw2ZAMQUUXPHPaksfArG",
  "key36": "3sKj4v4UmAityqgY91MVtCrE1FCHCqg8yqrs6R63u2otctQELQr51cB8ndpAy1yPgJLourq16gD8GF7sKFNQ8Ymq",
  "key37": "L4kxHW2gkAibtRKaKCiZB94oWsjrwgvtMcZxCbcwJ9eeM2LhTcj9Zb38iyU94bBme3wg3rynfycee5GMYZEHsEk",
  "key38": "4UUcPHDi7CP7S9MCf1s3SGBUBhTY1iwLvUb6svXb1ysier6wTGTpQCh2EKHeQZAAbPEt172JgrWMMbdXRdrprBva",
  "key39": "37MWXHrtjLVByraiuSFGY7KAkuFaKh3azPXZeXuFnrg1zzGJF9BsXNZWtUoCRbdcXN8jvY6LSwrrdiNG7VaQVdSP",
  "key40": "4moeUZTsRoEmQu3q92BbmcTiSTjDQdTRogoHGR8WU4t3XiozoUM8Bsy9ZVr8JsZCjgff9k3PkfWrw3LnPjhH41f9",
  "key41": "5qgBFzHN7ns8ejH1RcnaoSfRDNbTSizDiKFsx5auaS7A3LHrkKmEAGBLCsP5eDjazfnRT6bns2W4xu8UyhNBUpnb",
  "key42": "2odcoFtGQ9HvqnAw3c7hu8Zm52YVmBgzDsXDbCcqfv5iKXXgEQD4Udo6mW2Cus8Mc3t6AunBqRCXYeneXYXwZqPm",
  "key43": "3kkK63Lx8Kbv1ocAG7wGgyHtt1ZwwGi5tJND2dMr2C5toiqWxjJFo2VdAQCBZFa85K9kSF3PqHiSY1wz7Fc5wRQz",
  "key44": "2kDH6uNczSvBvHiW63SciqQG9717cbydWNZHQiQk9xwVRDdaF7P7236KAPghdZoSCn2U6tmq8r6QMG9TpaJksF3Y",
  "key45": "58Fm2hjxPRnVUTfc92fz9Xozed2KKkXSKUff3hyghZWVQBTm4utWfBrfok4Le4CHrHUFwz3eyvdChqQwbVxxk3dG",
  "key46": "654S6NFgsMVxoE7aDmrAxXHNUNRHm93dWfAB5tMWN9EnakMwnQtitQg8H7Kbp7c8QypxdaGn3Ts8aC5XYpnrqZZX",
  "key47": "3mCrPDXdyAXVqgEYhyxHmkiBKehqYMPreWFCHUD77mMmWC1Afx1q6ZHzT8NucRtYx4dgomiLzvb5v8vtcfRVnz4o",
  "key48": "3NBkcZ1Nu7Lw3dpj5hLTvDWscWF7TBKVAmkb1xfiRFnS4NYV9DpmTmMXWREr4VppxppW2ikX2sShhFL9UDLCF9ou"
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
