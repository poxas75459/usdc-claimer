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
    "RFQKManzuboHyfVrVUNWpYdFK9wh7MtTexJ4wxLt2xyKCcRfsd9R33CMb7uKMqXee6YXV8mpH58K5C76KJ7ghbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vthmWSdHqDzHDMsxyZTyTqs9jEhgjECbkd9QY1bCqw6tZFFJ1H9Wkn99pbK3bZCSpYFSRJETe4DVZj3uevGcqA",
  "key1": "2hk9kJoWuh68VhBYFg4jQ5a5a5q9xC2zhaXehFPwW5iKLGpF1xr4aBr7F4y7K2NgRt77rkGfgt3XFs5BU6zEW5vA",
  "key2": "5v7m8RRJNYcYq5v3FGqRLaBCVJv3LFJYwn7RUaaLyny2nzNwmufnosDxhHnk722Gouo2E4NKrbADw3ZYNAEseozr",
  "key3": "2hmoJKSLuG9JyiEigMMXWxzYUypw6cweM5AxojRem8ANL8iUEpHszLmbumJ9TtDk9VVaHj7pzPvEVDrnKdjm6HKi",
  "key4": "4ybhwQbh9aiseFvmkuT7SKPdJQtJpxc5qV5ua4FHwPSiRzTSUoUpNcgvrdXrEkVgqGQB6rWJKa83aXqLB4bQPgGS",
  "key5": "52DTTJY9eDMvJuxwPsTY782uBKvZY7riT3ztrRg1uaSD3RcZx5mkxd1oD8RpxeL7gEVuaeW3FpwNoF5xgyLJNtQb",
  "key6": "APpU35sVET3MBsY9Xy2NdyFy99aAVoj8FGw4Uurs2Jhft2FzEdKimhpKsZdG32fijzmoptjPfLvptQqcjorxmHw",
  "key7": "2aMdbsPPhRJ9bNjcQTAPix845pKTwfheYdRvQ2g5t9AFUNvehdrAQnzGd2ZrozhUQEqFzyKX4TjZzPNZkXmD88QF",
  "key8": "55pG1MMKhtvYonUfJX73yAfL1gmggTXkeWT9RxbTgRXy3bZegzGtbyhpvoZSd3WpeWqck37Xh6TiZUhbxreURFGm",
  "key9": "2fsuHj4dtKetKUhGhS6FuKFg26DsgQUrEnWsNfGTmaMmLvZPLuTXkzcKhC4bsG4ws4zDj9jJVyPFGL5c8DhSCagV",
  "key10": "21vCCY29E4T8w9eL8ETxKvjm5yPC5L34jQQHreaVqhNzCZBGLRNfzGuNgUdYj86AZ7nUY3KtqpYogerTrsUTCMLi",
  "key11": "4gUYuwZRneoYrAPc4eACQKbDJQuoDPaMfBzLESFrgbjHXGn3KfUQGb4AE1p45EWXyWAWJdbrJNWrnemmyh86ZYb6",
  "key12": "5BXTAnhSx5rDoAMwoPhLYy6njrHLNPZRmW59xHHpxYw6k8bQyrY36TwxiW6nKamqkEt2FZYRoVrGxa2BLvuEngLK",
  "key13": "pBjHoWErtWu1esvW1o4ZGERmmVWdUCuPdXsGBTo7LWbqy5WExS69ARFfsJqhvJkuahJZHn3dCDZ23fZYpoBZCmJ",
  "key14": "4JVKbx5cSTcTo9AxtdEm4Rg1rczrRChc8yJiXCmUcjVfv3gFgxE721P9Cjp4ZaVh7Xek897P3Vue3bpGp2hhnpnG",
  "key15": "3vzXmtn3TgS4aQAJjctKyBePrSXVcDqHixFmCxx8HfMG5G7KBsAcNoW21PoaXPz5ZFQKdiGetQtgj7D5mn4kH95w",
  "key16": "4TgF4FpH7g1M8v5RfGNngb39ETmUG5B3jWhJ4MMA5uDuBckNVFpiCqHZJnhDHt1RPR83rY7pkTmiFjfFEc35ztVr",
  "key17": "xANdv4GzHaHocnqYhjutiDtohHMH4hgF9ty2UN9ZU8TiwHzG1o3ZcJgWrFCiuJSLCxtpLNFhQeUWNPWrwKmfxqQ",
  "key18": "3Bu17d3YzYbYdbRGV7MuBff1wB63orgsbFVqWMWbADprF2PQCu1kFs7znstpnaBs73dfm3oEy8LJqz1B3TAMfpy6",
  "key19": "na9etmQDxyU5tQZrhC158ann3q5BjfgEMdyJ4g1NETYJiSdchxtBJtvsVEdw91QvAxj7RRCTNdEkkUrC2jqBn82",
  "key20": "5USwZG3XeP16RhdJb7JmPAGtfcYdFpfMKTZSi5XSky8d9aQdFQG4ppPoNt2DuCvZaLrpYEW3U4jfCp2Q8KCvBmCL",
  "key21": "5ASCw9zM42zPKBbQtTTouMKHmNh7nHgrhYu7puD9jbdc51ntr4dwyTRT6H25szqASbiRi8uUFaVb1ha7pQMTQWbh",
  "key22": "4Z9q6uttEjYhDEAyZ6fY3L9u15ttLquUd2vFKeTFkMFtxWbJsJ8aRk22n8fkhiTZaLYMinNXfDFFRt7ULYjwy3HH",
  "key23": "4QZXAdCTvtXeDwPj6YHmzQJ1NMs8a7v1RPHRzFQFRFBS1fitgGNE5m1s3HRpQSBycNAzmDN8h9fERjEDQXMhDAZL",
  "key24": "2e2qgYHLptsc5xLRXoN6zHx5SUcXWbXe5Dpz8oSuWXKLH7dVaVTEdPP2KSveTfMWx1hCnqvxXKjU3fqJ75dpt6uW",
  "key25": "65VSriMpVtH7zNUpXLePq2sUP3yKVKDRhTK4jFLtJX5VRPqdFo11aYBsZfEZ25z5pFhhf8kCLtgwhWtaX3AfR2pD",
  "key26": "9asWcmfkddv2ytCFNba8iaDy8se5GGc1PeKn4GTNJisgcWin4fbxwfZbDnJdApooAFjAqSQhG9LVKFZJyguTa1X",
  "key27": "dETZcLopz7bw2gsJ2fAW18mU7GUkxcFU72rEN3dfGNzVFq2vrygmPxBe2RbGT3WVCCuvZJPH6gHWJWGhE8SbntM",
  "key28": "4vtRVnGW6tNh4erttNSV9YjwpoaaYLQU8Q6kksCF5qw6oZiQ2vKtA8J7nUkcYutXDHoFCR8rMj8CECnU2KXJF1nB",
  "key29": "NM5bL3BAvT9rpLBCADDKbHDEUG3U5fbsiH6eR1owcz1xhNChFUYdMx7Cv1z3VUQ3yP18GM3mwXfYm9sm2u4r6TA",
  "key30": "3nHX8ZyKUu1hZFJtT5N2Xs3GX6pdhDRDXc9jqziDJekzRhJ19N8ubGoFuv6CLx9Qz3FDzgtDuog4xYUTZToSJ2ij",
  "key31": "2T4nDc1c1kDEG8Ybu6joB8YMKs8Dr3kPabrfBUWJB9WSPhYMmnev4QhGHjgFjk5R7XLA5zyLBdfGoGSbxpJac7nM",
  "key32": "2QwLkrrCdCHkx7vTk1FzMBWmfo62XMnMBMxWcW8Qz5vcS5BMnq1efaXY7mgrzcBqqs2hgqvjJPUYYRdhhrYFRvbL",
  "key33": "14czR3uqK4wVZMAsWkht6kDnSd9fv6A94h2CTu6mMD5G7JYj1rYLu15xfxLpk6WyUWAMrFeY9puGFABqpVj1hEE",
  "key34": "48LRftvm9TxK23h7kQgPR7zVxwka7KFFeiyURckWRscJbqEAJ1mQcoYcxeZA6eQgF7GTsRKaTKDUu4C1k43k6Bp9",
  "key35": "4eXi26LKuX8pP3mR1BavizyLJQJP1TL3p3iuioYrvf7E3ZRZ67zKSiGmUXpJZknAXFstTk2jkynbMVKE7uRj6jiU",
  "key36": "3fCA9pi6CfokzUMBBHyXjanHhM7xKxU5s7fyLHVVbinpgRemngNcmbHM3SbdGuPDWFeM6xUWg955oodcCAvmz5N4",
  "key37": "4Wg4nHEuoHhUULk75Z8wCYGt1hqxKQaumCrPGXioFT3JS2stkRT37DoBV7tnWN8BeDVjvc9ZuznpxdzLsedVHmiZ",
  "key38": "PxvpFv1ZVmhsGgHqHexXNad21ueTG5Z63T5jRvs2Xrmu4EqTUyNdQ95eHPUkmdefxsycqtogcQ5tbTGPvw4CXU7",
  "key39": "271EmCXQvTWaamzVvg44HXAM7ySwp6xRVHrqvW57eEns4sqh6wC9PnDXfXf7MM768ULB8J57MYVkbmQVn2XYau16",
  "key40": "4dCt3a3HSz7NKgDNsYhqM6HoXoh1bvohuvPuTpbGFVZKf3D8sGHDZqveLFrEzFwQX1kHwkKfps3mcBpcJiGYQJ99",
  "key41": "5hLrj1LNgWjZPMMit2GxEyhaM5op9MY5izHRnaJgVFVxj3cy9z8AvJjJyjcs9nhcsrN5bZhcggxLeyoVqqW9iPpd",
  "key42": "5pVaj3jr4JiQDqVZGDXJTsNV5WVCjfbBfjqStURkhmpcmWCbF2hd5YeTLhD9cWRcBY3fB37JKCqaXA4s5B5k7nRU",
  "key43": "3SvP4Kp2TPDpGECNSESh3HxawyFzqw6SiMdbiUErEYK6fMNJwXhpif7ZD5S5fn6tsT6z7jwj1gH2cxeb4vSn7HsQ"
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
