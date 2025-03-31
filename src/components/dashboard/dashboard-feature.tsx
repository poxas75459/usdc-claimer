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
    "2ux3gS6xJGJvrteKJB2fSLf9vVYMUdbK5zTwaraGBEM7bSkeVzVCDuAtANsXFbR14koyQQByJfCHeAW9RW8LE71a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3vEousn7pyBL8Mp2q1bKD84cB2d658x6EQLnG6Egdv7vLx4RwgE47wUDr2Dd5gxdFHsjZBHAdu8wwo1WMU2ed3",
  "key1": "585EPXyoW8nukzbXSi37ErHmRg8PpwjfVCuLhgFjPcrSagUbRiLSVvMB8vMBErSXLF3Jhb88nfTqTmbjCKJtwDTx",
  "key2": "4zSvjvgLCVBzXj5G2sogjFBPn4NrDuibqxm6QoymjQSv7cW8NF78NY2arzGhCRJyJNU3XxpmXA6wRf6wU8GTUrYR",
  "key3": "4D3u8hbE5vv5M14cgouMmf7DeY98ricgbrrr7nCf3GyqjKWQR8VLz44QoTeS2bsScaZPmHa8B3irH1sfUVAZqwan",
  "key4": "3dHfhyLFWcSG8Q1vGHbQrFGgxL5MwVcLHokXQ7cbAx8RFQ5vVGizasz6f7sFAqio7ypX6MsRzrBcBYR9MN5UJmGm",
  "key5": "5JbGVAPZ6ps5xrA6vfwLsMapouujreiYor7H6a8Hr5piP18AYvnyvQV3W7krGdubGdpDtmxT8fsRXBBJKytxssTi",
  "key6": "5nF32nZn3Rr1HurgAhF7qC6jf4X4QEs4VE9as3J9qHaDgYEJtn9Psz64MnVoZet48CjFq7aKRTnBVtzmTaRKD3QK",
  "key7": "3EAqFjXeG5SdoTro4fSbF4mi3aqBfhwzy5sma1Xr82TXU7JLNpKt5wNv7hdKrAcjmtza1R1hX9sspbCmHEJxfZZm",
  "key8": "2RPjtX8TXCBmSqnanQhdj3kJNzpLjMMA23tunn9eANrXmJuZKGYfsD7BtQKLbyeK6WrRjHH4V9fZbierHDBVYGnj",
  "key9": "2aFNkiJna81BdT4Q1SEL3xF6yjVRNTSVvfpJsQjf4dBY7Zcj2kWLq78t1NPKnRDu1GCtyv1RRvVQLyADhjy2Dy7z",
  "key10": "NXMCjXLHUFNjNvhXmC2nNciucfovmwH6svWyVp619wr7ksFkFMjxSWQgCMRs2ibw3ZXjtgVPnTpsCQB4SCVh7pi",
  "key11": "5i6jd1TTrh2ty8uRRw1BpGuyByL8AxbfyMoujhdqeRof2ecYEkEfgzsM2GpfvuvUPZUVZHz4SSs7375jwZVvrXUV",
  "key12": "5or4xyTgZ4QUgBosi89xJwEFvBUEPpr8XiTc3NUBcv9nyfrwxcxZZzqjTvyhseEbbTM2oFjLtQe1Lufr6x1JxmGz",
  "key13": "5rdkf2yxbJ7xs5Qf6f92FoKprsLW1XJE4vzmBNqUmQ5i3tPrkDVFLM3rqiFzhUVtMpyPZQ1HkYpERa8kSTz1SBrH",
  "key14": "FZ2gt2r8Kf7k7EkmhbDR4aUK5HNqyti9vMr1APavXN41jonQHxiksCjbY2krCpY6cZK9H98W67qPzDYEC6hZWWi",
  "key15": "2mEqdgjD2J2TuGchdbD4RaeEi62u2pZRCiERk9kKDHUh3zGZvDTPqDCmmEacUub3KXPe7mJN1YtKKjkWDBoBm8vj",
  "key16": "4o4pJU1GKrvWyfZK9P72immEcT9wffg423NsTiwBWjaGpRsTSeBgmHhtAWjByqWBJ1o2xM4ZbMyUukDuVsNSBhM5",
  "key17": "MemfxbscuaVgWYCtya9A6koP6MWmJc3jus7rFkHW65yx1AiGBi6Hcxo2h6wJD4SzbaFMgCJt9AW4RNWoHJbocem",
  "key18": "365DpW8Y8oh8aJD5SWGxnXG7qtDDSxGiav5KbtWJfbcoYmQfk34hmLfNPpUqwhVvvvvZpjht2j4koUEuQfcM2huj",
  "key19": "37MTyYnosBtcMWkivLjDmEDSdK7m44xTqLWDtJnwTdfCHC5QaqgG44yUvmsUV9T6LsxRKQxvKxG8LQPpiGjWBRaM",
  "key20": "5M46P7ZZJ8J32hRYsXVhRKw4zjDnbyUWE5Q2k5FDq2QNAw7BaW3CLbdmHRzcved1NDSuS2gW8KUTWYmuEtE7d5Q9",
  "key21": "8jpno6jURiiqPfBnGQ3xjWJHbUspGQLMu1eVeZshXjkqfRP1pSsAiCyQSfmG76JkW92PPGaBxNvYDLbMF1GpWZB",
  "key22": "581JszbCBtoiW3766H2VcdpA9dmkKevnBFZ4kYpbxTq8kwNoExNh4SnVxx69juHaBs1tHL9WkQf5Dn2hEetnjeso",
  "key23": "4p1huqWTwXJmdxHYiKhS24q3gDPqonsBmZPr9RiU5PtYM5Achd2XkEDZFZicqwPuBYVrpgCNVcRCJwRzqBndY7yk",
  "key24": "4uNp7A11cAW4NrfBSbFNsJ1LNJoebHhCk3CwUSHfPH8wL1YeprcfxZp5DbzcyfRhPgefdFKYCh6A6YiJTTQ5599X",
  "key25": "4J9RECB6gPth5A9rkA16JheDdjyhpBofs84aGad6YgDPRw3bAnmYyqtMarCHELMx3zbUn1SgTN7cQXJStBUoX22H",
  "key26": "5YwqZ8W1ZYPp9mTuoUJebEtgcJgMnPgawE1vfDDvZWUg9b2QqnJyCFW87mCtFJwHufiJzVCSNVdDcvU14TJxiCL3",
  "key27": "CzKxbdKTUShED82BnEvBdZ2Gy2aERTKehWcsziHbiNacgH42PtsQHSxhEdmSnPft81UkYNMXu9niT8gJyRBHCAE",
  "key28": "39RAEbYQkpoMKqFZfDgg7rddjBuTHGYaERGUFHXNMrdFS7EBAAPNpXoy7ibcqHwJQ2dzGDxeZYCQYCi1HEpk7Y5m",
  "key29": "72T6Bto45X2g7JHEhD6BpC86FSiCSXAvy2ZZS2Gu4iEojJnsM12PevYfLoBmvqqUJrhYVqwycSrSsKzkA7DeiLt",
  "key30": "WWDQkAykEbBTXoj7PhRK87yATpzNium8kxqsP6xaxxt7rGRZcedBgBHgXB6zfquZKuaReqMsZPs6zKsA6CaLFiz",
  "key31": "2gP6D1XgRvFuvXSx9VdobETaKQovvScmgoo9fX558AyffxDU6HerY2XzzLBrif1wxhPc2kdbpP4aWD6G2ztwrPks",
  "key32": "A9GG9WWtyoYRadELxFVvbzEFA1hpHTrD5PwN2JneRS6dhJjAfpNTgHnAgFMPyNL2bDkAuyncKRkgTnSoe6BuPv9",
  "key33": "593dvrfQye8DWHhqicjAg3XyymwswfyswufxRgW2WZbwNb3fbZUQuShEAbP1cUZiC3XZA4jiPSQkaPVP7xCAZS1j",
  "key34": "8iLBa9gDpFNKFFzm6TNTajycXFiFfQ6Evz6oSu6tTeh2JPpATzCnLVWqH3QDTbUZ4UnreWKZcKSsvB4zmyGjQQR",
  "key35": "3sG7ohymhMDC67EPhQ8Tm3YzHQuGMrUbqiKbSwyPqvLZbPW7AfLVkEKqH4yXeJrFuh62Ss8uA55QnSPiNDGshi7L",
  "key36": "5Jr8rYKAQyAHsEwdsXE9Y3MGcBMBXbn4sew4eX7826oZv7bxXMA9dCVBpAjo2Mb3PiAwrjDiBKGoTyh3T7wMGddW",
  "key37": "49721iM8UGUAk5aVGgBM1uk95mth6zbmL1YvXzu8aQ6xHX7vxA2gtvAyWnLVpAxpqvxk8GuYWveLS426JAmtpu3M",
  "key38": "5JBgjbL6Tasz4h58yTyMbsjKkeGz3CVaC1MRhhkt32ad3jeBwxqBvx9VBjoEyzWViC9AoUiSX6dWj2Rh6BXdwjrE",
  "key39": "51Vto3psAWqNeewVAVEkR5naYRPBQat8jDZbk3NmPSbTUevE91ygLJAdSbPW9914LjBLQZppqHDMdZaT7su5GdBL",
  "key40": "53JRCwgbg6DRAbvZFoDfFz1Rz9HvzyidBQZB6e6EmqiKj5t8C1atrbj3eoGdnFuAP1c1nn4LrG3qCUf8HVHAnerV",
  "key41": "5E263xcsaCdkpKBaNKC2dZfAEyCVX1cDp4DiqBiuULac3bV6PL1mmf86oM5TtWiMeQZLbnxZ9k3QzTa1YUisxLW8",
  "key42": "p7EtZKQf2i5RkvqZsQ7vJQetSTn4HefL5mHXw5HZ4PZuNdsyYBh36YwQwk942V7E8MgxxtFUmAThvLWx3XXGCkA",
  "key43": "4Zjbncbp1gaMZ5RUU9UHQmxLD2AcssuycS5pZR2rqScFHbSNnxFwCefEypxjdABU5K4G93Tdor1J95NyNdvpb1pi",
  "key44": "uAi5kcx2XJZwQRmk3mE9FkDVtHaBpH12BRVmanMdXn2KQ9sDsY9nDQeYSrC6uZe4w32V6VYMyRSDFaDZBjH8jzX",
  "key45": "4Hp7hq74oWRpbmeye8WrzfPBc3v9mi2R4VkSerMr1mjvc4wQFY7fmvxadBHP35VnYE5K537YyEVWDqs7KdXYwxde",
  "key46": "ohm9Z4KWgbwk7YD4UQSmRQNUVamLMhtLfBkkgNp9xEeiY2S51h29qqFiHFMsQiS8dUobPWD4ZJTkuFmdCbefrQj",
  "key47": "51PQbFkJ39KAnS8WDTkGxehD1TeQqSQQjmpLXenMSmpWt9BELmWA7Trmj367W7dSyoEVghetSDuMtirPjoc2Gbic",
  "key48": "295ubwFfTAaXSTMJgDJhog5ZKVEFFikmHMJtsd1mUHh4cSs45s93PtymvEsh4R2uTctSQCtpUVVfP7zzznvsy3PB"
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
