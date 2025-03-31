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
    "2ue5bYPtc5TXTWe9Ngc5bVRYunr2p9moN3K9TfrX7exXGXjjqp7MVfGPHJqoNJ4VQgmRcrzdELS4QM6tB3uKGBBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUQMg76tBcRJ9njKACkAUrkgKRXYKX7aMPBPGbuPj3ZTHyiN7H3ceBn8DDGbNqTMtc6AiU6gGSzor4pNt9jMhgC",
  "key1": "2hmnFE2Y75DWVRh6K8yXF7WidR8oVtyLep4h3kjBRGuzQdzYMJT91dqYLZTax5dP4cfGZcrtqtt3pc6WLmCW31JS",
  "key2": "5JzHWsmMfKngMpAvK6Rm62GGsXnJcNZTwZsSvRicDGNS2iUzxDW68PE5p4Ms96nJ68KJPaczPFCcMXMYzELHtjum",
  "key3": "4uSQSwBvf2nV3cjsQeoptChy7wiZHaM8g8Ffrizx7uKe2HZQ4ETWwBovrphbph7a5ph1zd1ye3iSYCSc3bZTtWUJ",
  "key4": "TXeeV3h2iMdcD65ecHCSgCuLXq4woe8zKa6vuHn7CsZez9KK7MaLfWqKRKpsGHvmzfubndTAeQs3ZHQG9CrpUq9",
  "key5": "ahXUVuCMxd53cwFH1Zf1dJF2MnwyYAvvBDwhbEQBgWZUgpXQVqzmo1dkCk9MjikpwFrPdhWjareo1qFjcBzVaKH",
  "key6": "51ghQS2NVAaAfHyrYHdbDuNBH8RexsVZUXwZVskJ9ttxxLcebJhhQY8VmCvpSBh9Taj2Uxve9zDKAJci2kdKNEXx",
  "key7": "5M7KwWhdAqFqYvjKGNvzTrpTAZLe597AgBYcku31rTsd1C1p8rt2hC5XAj1LzsM3zhtQwwLRhQFNgJRRYWU8suXp",
  "key8": "56hDJPukJyQT2sxy3NuLp87q22RaLVPncZG88jhgSne7s2aqAMarCDAcog7xA5fWNQhov8TQ7qNBNQNSsa6wAMYX",
  "key9": "5k2U3HtddRUrL9PAUi5MtpZ4ZHuWqka6Gu5gmGoPyfRhasmnt3qSAufTgpKifsfucnvTYx7mDchbR4FSiR6Vmopz",
  "key10": "CoUNBTdAFq7f6AVW7e5tTcyHu2MYcbk27fGFrACMsmEg7DyPY8whREEtzp5WBrA24EQV8LxT5JmJFvLp752i9DD",
  "key11": "441JyrV6oJuDEUkvh9MzjeBzMmBNYBWCSAMjvCdYa9UWXN9jGDcWmduUrW5RUrfQ8N9vZsz1Ne5eMB2jym6bsbB",
  "key12": "5S6fXMUiFsLDug5tATAGFmXDnPYwJWFSwsSaLVTPZkKAvgqotXqXR2U8KSUMZymKrhamz1zqBMCs1qDKbPTCFGso",
  "key13": "5vsBRncMGuVXToakEWP3knvbsU1BwFkpB59cHfFqk9T51WxvmAwz1UBQRvoWJSCKrf2Lt3KLyo47SuT1FQarBTjo",
  "key14": "5CZXXxsE5n9bhjRaGfeMHbmz6ydeAzYNutWtT5bhDFC3zNGc48pg55DLea7W8xCkxYR4B6WDdMhNJzF4382K1pcx",
  "key15": "1MkFLw6XeWHeZHMHNzQoBVxT5AoMNoN2BEpWqAhbc8WTmph6uQTwa47xTESwZLashtfCzNc5XiQJZx7jN3RbDAx",
  "key16": "4vxAE26JhZ8wjyqEwMQ7o77sLcyEedgQbXdNSmZrX3BYNisSTmR7fTx5MoudBppdHCt53aEovbNBFT6hJF6ey8Lc",
  "key17": "5msMj5gWR8tLYig2KgWHiE2Q3VG38bKJ7WntdAxbRVUd642W3W9zPgqgqb4xf23kGCu5uDHS9wbQi5kbAo8d7p7c",
  "key18": "4xQ9B9Xr2b4YxnPwSP6Wsfhbn8YiaD1Xmw5Sr2SRgSEnAdwrqGA2jBM5NKnxm3ijRN7WYhYW8ydonGHrvZN5qVJt",
  "key19": "4eiJLsBjZHcD8mFmNP5QfxWxfZbD3Hmz5ew1zh7D932fgAzqWDyzSxa3sDBpHBw58t17MrcRoRUiXPujpPDhGiQR",
  "key20": "NBiiyQ3csfNUzDGEWVUGGgbW64CdYeDxWUPsvfmAZV21afsaH6s7nT5U5GNEUKdhHHrDkj8VuWhyyGTRPArajJ2",
  "key21": "5r5cQKB6edDVAzZb4xv8zyJfWVsMxjEsHUJeXiKtPBsTJjPaDfdQ632r8YK36QKR3yt2AVtFp62hAkYg7jfzaGjB",
  "key22": "5HyHAEZzJGDnycJNfp2GtMPEDvbfr9R7mqAScBay2ZoVt5E1GcnVwSuHmp9juKt4fDUjCkzWxJWWgF1f6dbFxPi9",
  "key23": "4ADfEnbtDw58Um4Mm2ELKunEgXRSrpkTsu5EBrsB55eCPDrM1vijY4eHKeAnibuGo4YhEJCo9YjTBmdKmtW58RAi",
  "key24": "48TrhpYVP2y8dMnFy9dSk7uE7c3NgNEJjgEJr8uv4vPq8gXNJfVgF6pXBR3ozZfLD9KRA2fhYHDucH7aFmpQwcT6",
  "key25": "3RmAbNiVsdvFzG2qUDNKZDV5NXnD4635bu56GiJtfWydYkC1PNmjUURz77VCsHGFtEj2euhbRLxBVZKArbM8rdwE",
  "key26": "46DBUoMYjNp47WK9hpEQYBMvjGkbouDUPsqehWVh2dPSFNtVideVMJXCLrxUdFk1MztyCvdHpgLSiZbaACoVg2sW",
  "key27": "RjP5RovqDVmW1EASXageoP1m56N9Rat126NMTwxUTha29oU3mqHaUVbraVbS7j7Pebzw9mhorMtaWrT4qcezaK4",
  "key28": "pVdhXqgcD6os6JZApeN7yVNsCXsJVY8CiU4FSU2rqQCN6dWLGC2V6QMJw12zs7WVUXT9q7GBw4ouaDD3XR9sktz",
  "key29": "4n6HN5bjwrWDHKsboYuwNPZizQTx8Bh3oq7T9uun2MwTv9kkPPftcZt12wxNrzeDTQYdxuRcZSor8xewDWMUWh5z",
  "key30": "2DAkjo2zzhvV5H7BWDSk78N6g7QrAfVN6oKwjeW795xSZvomMyJAyQxvFMtomAoTt1yRQub2GrFosn2CB9fM6yb8",
  "key31": "3pXCyi1oeNNctp4j5JWcVtM9W4JzejhA3BCEZu175vRjB4fP16xohJQjkgf4EvU4sqy8CbtVkHbdmpBjUWcL4UF2",
  "key32": "4NNcKVi1AhmVAAnfVHMwy6n3BNyEzUg24fnt5F6ovMZqX5rzWgpupxEPBho6omqKK231ho5rQwzqBJ5rkeT5VmrE",
  "key33": "4MaT3iDEQx2z562UixUQqYVdNxHswsrzBgkmuDrN9ps2x1sYQ8kE6oum53uDcNvyMMd7f16w7uWyFmYNKgdUBxQL",
  "key34": "3V6VvkDC4M42xmnQv5Pgwt2ybW3LZbeKjrn9DtMacJuLAhqbSvPKGsD9Gt4BLuoNV1zjrwVLbnSKJxw183iENpAg",
  "key35": "33EjBm9QZPFcsVJDnFfQuTM2N91yB8Dy1eZ7WzJSq67awWEqRkLw6XBL8zF4mQtph8isAewFXUGJYo3ZZgZJN5xa",
  "key36": "4FVAPyJG81qgufjSLiyJnFkLAfzwLNAeaB1g3xby7bq2145cwbkFUQzh4k84jA6VcDMAtMj5inGTZo9MqWmBFYkx",
  "key37": "2z8DkZBVe9Kpye44gwRjHirHKe66HPG3beCJAHhkZ4rLQNKd9TpR1wwjXdF4TPJjrBHrbZHSY4Bnh9gofaUuoxWf"
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
