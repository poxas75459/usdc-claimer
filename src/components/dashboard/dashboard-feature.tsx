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
    "5SVZRsvnCSdHzuzBJDkLLaxasd7Gvph5NGMpDH5z7ameJckaUHGCFDbABNyehguTk2HvmrmvGK6a9xVqd9oPrgDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ju7eATtQvsNuxwkozkpJbPThUebgAG359qKKZTB9YJa52DyczSaX84ypWqrUvkfErKzt1WW2Xs2P4WEcxwkzMfK",
  "key1": "3iXD7FkoRjy1WjScJTtJzVZU9ByftnjEkeyLs99v8H8MUy6dB7agFaR58df1KK2ELE12g54JnsN6gsfxcHnGyh9h",
  "key2": "WydmrDNhaoqVdQ6G1FSr6hdzfsC3GAWMo9hyas6qfrsgZkUfgDeukx4XXh6i4MfGfZTNkeufu2B8b5f6B64ykQ2",
  "key3": "5wEg6kk2K7VHEJsWWwD54XAYqzojvks7FJeknmNf7483EDXpbCHUA8BjhnktS4AcULQUkqJUUmbBs4JDCviBYGhK",
  "key4": "oBeCfoQp2UdWNPJkWdacck9MsoNUGSV112SVwFZzHDkZELeyuiqX4cxUp93NkDzMxMnmnFRq5Ny29V9W9JfvXxm",
  "key5": "66T8P39FApSMX3RiZGUTuq74Fw68mukyxJY7giJH155toLCJmCsrcpxYcyfWGYmmWnUNGxQB87J4o56JZAqSt6Jj",
  "key6": "3ZXaJfPgA498UbyMNqAisiyAfiuGB49gqSdSSJwPsu7sbEaSb4FPSegwGVVZXjLaaJQjtDRysyFfX4hkVTU8oUvQ",
  "key7": "U8Rbk8Wx4whR8tXFciP43uhdgZKps2EPvNvZeVnDnDtVYYMrSv6YCCEPXoou4eFzTDDQv1KwoiKnpq3PdcTBuum",
  "key8": "45yUYeveeDQCxvPyRd3r4dxnruNkqLMPcPxBMK17x1scLr4qRhUuyvVHwGL7apbXnVTPkE29K2uaNoFdm3axnSQR",
  "key9": "3eQdXkdKPEHH8TAjdBryWytoyskc9PuviXFS8DpnfQqTLoLbwfQLTQBrTjJ5RqnTD4vd4HKWAdfWa3tdVBQ89TQ2",
  "key10": "95oexmPynuNTituFAtQSsedJtaSmRw5fYwj8T8rhDnfMxp53Xy2SV7ZCMS4fjTk8jqZ63tMvrTuZ6LwhcjubhFa",
  "key11": "4PjTSN1qw7GB3ykzyhvpTa9mnkLmss6ped9L8k6YgCtSpY4Yzz3aUVk1cyuqSQThJBkAkPF9NEfp79X43Xj6dFao",
  "key12": "4brqmbCHTFBY2X8EsHrQxdw8scjdf57HPdtP5art9Wgam7KnaUDw4waer6HtPVuUWCJgRHqQEs5MZcifxto6PN71",
  "key13": "3UUS8wZm2K9ettPqjqeSJFnm4f4aEXLDVwEmjoC4DeiwiAN3kRYEFyAd2wbeo6ufBpzLQ5m4XFmW13WTvzEvZ2ED",
  "key14": "3BLePgfxi47MuTm37dKcXH2WF5pwAHhHSZkkSZcpGNwh3diySu9BuRHbckgLPoKyXsvTnDJQp1o7GaM3PDnvLoDx",
  "key15": "4zHw69anVAU1YfuVyUvfjmrWWqfS5LzF4vgfyM9AGkAnUoedgMd7zoZmp5ra2vcJQkF4USTi2PatTv5CLW7LosWB",
  "key16": "4RFxV3yyx1UXhrTVYxSZaRXeMFua4unevfuJ6TvR312K3KU7stbgk9Sa83aNsywYoc8jfFF8EfwnB6JKnkNrMeke",
  "key17": "54bbzJH2yY54eKL4w3VdXC2z8K1kXGG4wGakXrPEX5mMGgptFFNxvZKMeCTgKqie168hioM3XLT772KsWas75kcg",
  "key18": "2pvwaxsXcHhLxFaDoatNWrw65P6bKht2qRLDj2JjXJDdN5BtJ5b8W1hrct1TjKjmoKy5wMp1mdyV9VZGnDLRnpwM",
  "key19": "42H8CMQ5UpDa3Gx1dZN7KVi1HpigLs6AamLhLYNJTCAbB9KcXXLajHUcVkgxsiuSx1HRpEJ3CJgv1dkqutXuFDCU",
  "key20": "3Xq8FryKtRXrxwugYTkAhpCVdJttWWt5mQnBBtD8NwwDyvvdXjAKgviirHWmSusXQecvJ5iFtvmNbgmBaRFUr6AQ",
  "key21": "4ue2a9E73vkj4vHnVhAmJ9SGpmnRQEm1wS1zykV3GGgPM5L4kJM7188Ps9oPqxTVRRt65Un11dGCqCWZMHDwgFRn",
  "key22": "4CinFXec5zrsacegqZAqEiE2uo48f5ebSJvtvFFG3PsfNiPHGYdimerrbqn6uvgkZWXf7WWnUR7DNqBcX9syPtKr",
  "key23": "271MgyJMY5AuuGuq3wC7Li68bRp1w4psKmvZmNrdZQMgN8T4hEJSiptYp7koUurqNhy8DZiPfT7Pa2Qnq6gwXk6F",
  "key24": "fUwBPYPMt13YDtXtKe7cWvYMCZ8A1uT4gkUdvhkop2gzDtiv1mMFwbVtEr8bzVA2JRqHLpkLt2T5HH2787ZrsWh",
  "key25": "63MKbH9f3iX9LkutiewDciBSWPGjVWFVS9BtKChTc1YBhha6vHyHeptD6vEeJVGDhwQiUxo8RaDNbSiwXrKqnJyT",
  "key26": "2UeUW9vJrAqneNT2SJg1PP7J14NpMwD13tc2mURckESJ1r2iWSHWwxCpViJPAk7LbUKCs824mio38o71p5j3Kv4f",
  "key27": "66epe7Ag8MQHKWJcKW6H4eA7Rqk8Y4askGLxcMsWNW3h88t1MaW1cX8XZ914sm4Q9mvtUTZ8rX6ZQ1mmL96ZBhUE",
  "key28": "2hyyFpNw8ScYEmWVaZu8YCYaQyaMw8qMbFewDDWDkAa1PaxiYSkKehUtMoU5cDWtPYeH2X46Mt39Jmb9UJ7DijeQ",
  "key29": "4Z6z1tgu5SWjufKbeHYeSMTNnfciDoRfpTHZEJxriXepRwJ6orCyoEysPtMF3qJnst9RwpqDXWeaPMxHbNc7DCZW",
  "key30": "42u5xxsqyyfm8iYKQwaqAWd2MCCPqjt6oZpmu9CNxzhq9U87wnziXieDL9Ptj3ehTYWMZLuaGMUCgC14kWXiWKrr",
  "key31": "2dYuDxCvP89BnPGZ7j9KgFBEaQdYMDNXZsxfX2qsa1KTgZBCF1aVpP1hL7JKCH1F3UwB6XeNU3gyY75xnhkm6CQ9",
  "key32": "4apy8Hm8B3uA59uVeaioHNimT2tMW35icAfs2eRGhtfQzvhDdGRJiZnZiqdySvCSnQrYFgv8V2HTKuf3UtTQPErT",
  "key33": "5T6xH84GdZXTyhU12ZQDmDhFg6xgpUCTLC1whC2CPyuC7CjnZVpzNLsQNy3gSwCq1uRchDWrBioJzb8HdYUetDhm",
  "key34": "XFfU856hKWrei9wisEidTPzixJzyE732hEsFHujKxFFHGgX1cwVtV4EqrWeTHF9Y6KpnwdVR1hnj2PRP5JmwaE1",
  "key35": "5dUQ8GvK4zAfywa7TwvBaGDgEec1E3MSpdC58bbUQC3Z78FPBe59amZ1Uwd3YnWPViVfepMVdPHJWvcBaAbKkRd7",
  "key36": "26s2y1HXLk2pjtoxTgGBGNpajXr4oN6fYVq5WiHUDVpjorVLgNAhZ3js3SCbMtem9KV3H8tYjxn6F7TfNymVsL1B",
  "key37": "27cU1uGEA7VbYjtwhMH5rN1BTuZshmxL8D6u38vfHVkBxgHAjVQ6bsUtbLWXHQv6op9mpq44S17KoNmZS1Leunv8",
  "key38": "4tmYtpzoBguWkkCa6EniGRWK1xBBEoHCoTacWwK6CVovLCTS9RHHJ3GadpA9s2q1reumXLZZJug4idgbDGcCBEEQ"
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
