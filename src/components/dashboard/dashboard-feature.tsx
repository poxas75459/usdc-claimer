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
    "3XcC1ZEV8ikkNQoD2KY4WStiWf6qUeeeFq2chzzzky1tJfztkWuRHm9RTtQGB5mM4YzRjJQWWQCo6V7Q7psBzX4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLtfKzdNWMqteFVQ2GnoXz9QASLjaNbrP1aqmm26C6MDbmHNGeN1k87bsWB11vCfzAwhUM4xNLBmCSdAK5STxB9",
  "key1": "2zoKcnTm4jzxcsTq28ALKFikPebCsmPhoJXyma1iiFeKs4ZNz6v1oxJDF2LJfPmEZf9yorYRkSu65ZhAqCKY6pXY",
  "key2": "24bmj6RGCVoxaE9jz5HUFq2B5Pymy6k5TWKWZRsWxtVG9yRL3dZDE9Ff57mrJApVGg5cHDbie6XtMxJmsCjizEBs",
  "key3": "Jeyxpt6Wv8CAYemCddSVysJXT7PkGg1u1aaYGQgSkhiZPFdDhEQkV3E7k7JekUFxMnzseDJob1JA539TcxPjtTY",
  "key4": "3f1FRjY4KYebLAeeHvk488WCw5mMFGcckfcZ9foH92AYHEqX8s7fkBgXMcbfSspwvzAMEEYSqHZPaJNQAnr3v1Cv",
  "key5": "5YmEPfYoe1nP8nWzP73BwWvQUNVRGvjJr3dAgf9SMnfjE7kxbd3GB2f9FszDTc44oGTTpa6nRWkCMUxJ6vha465H",
  "key6": "5Ve9QZwSjALUGMkQ1Retc748ePwn1f8rFk8xCAxms8S7NnwXmfWuuen8HnXbEuWeHVw42mRyygqf7w6RsshbmnSi",
  "key7": "2AHn1LcoodzGfMXXCCFAzwdCWp2ZJQRMww4KS5GhqPh3HHyhcMWW957NyfCTiqjYkDAybZ2Lqng7dimA7WX9m3M1",
  "key8": "26PPzw5qWaytkRkETzHEQd1xFpdBrbXzsgr2bYHoiFNef74hequ8dwzQnyvJqDFpqfmsdNaeeWnzWHhWrbb65i7E",
  "key9": "5nZxj6z3yqBWvRQ9vPnFFsL4QxfBzJ8meAdwr29nJJ5ark2J4ckw2pFtNE9jXaVpttdV1c9tyuuDneZtaskqckCU",
  "key10": "54Dfu2UZvjbjLRRSMcJ1eCFc8ximwwznK91F8LrUiDiS2JmFB9yd38zY2iF6r4MGP7nj2MnTkPwwXMjuDS1oNhKh",
  "key11": "54UVnrFApUdi4ZKhZNiaVMXAsxpTgoBehdCsSZPMGmW3yZCatbJZ2whHGyELynEkJDr71GxPtBBg3gKsjy7Yf8p5",
  "key12": "3NHRZZTEGMFj8LzgMsgnoybJauAJyFzsCKgX3hM75Bnc6K47F89rETqU6QJYCP8NPoNXMfgLs2bH4vhzyPWxAr5",
  "key13": "5TBwvTz2HJfv58Gibdm4HYNwDsNjaKXszHujdqmDG8yRXdGzMNcmKptwwihY2FqmmAKRrvtWHkpSDnXmMADMJadb",
  "key14": "2PexkwkS3pZJdyzpTpnCLYKHhHHmczVkNeQHLWm5AVWGic2BNima6DivVrEYgCTGwxTJy2yKtvEnxzkjbsEWaqcW",
  "key15": "5SXUYWkpiEs3249NdqYVKiMhHCPPL3ukEJpofVYFrAUCXaDGZPyF3hF8ZiDg8Ai12utBzZm9T344jzCGBhZCZGow",
  "key16": "5bKtb2fzeTYGVLd3KphRwmfesM3vNWnD7TTQRAB2aPko5BPsvqsP8fXYqcqxkguRjipyFCfxBfhHTqaAortmNun5",
  "key17": "5Ypxmkt8FmqRvJVGCuDBzxrNN9UmY2Ljefo3BWSBHxZ2B4uwrEVduBAPi2BJUHzBgdKRXoddaY1FiznbmmgztgDJ",
  "key18": "2Gqfc2VJWhp8UewuwLwtUkhMmi9Shc2qumMGwFkoX4tzfVihXiS7qcgZx9Cs3FcLxBLCqwWg3LmkB8Ukh8ZthG3t",
  "key19": "5nhqj4tn5QMUGA9w53EgeTbs3P7yizrfZg3KDhhfuCyL8ZSM955599ZkTazoY5parQG6CVBruqEFZJJB291o7T2o",
  "key20": "4LXRoA2QEcAbCnc2xT3erYuZaFE1fQUkt6Zt2pdNFTwvYDUHZi9LzUy41s1J52znpJEG6xw2qEXgdqPQ2XepWXAb",
  "key21": "3vCVLwT4D8QKZfJnzxo4sWuWDkSdqCTeJrrsiyP54pYNnifbudXomYDDXuN51SLvx8zkgtGq1hDRkhjUpYnsyvfD",
  "key22": "BYsdq8HEnNvFWnUWJcTLX54DYKrXfZbN36eXQ7DRGyBaSpxe5sUHkU12jLQxGkY4b5BePH5x1ira2g84N8gqNrD",
  "key23": "3BuNQi6jL9FJw1KoYJXXeZqye8jf3uU1uPR1jUqoFernFfAv7RuBNPVfHTcDSPQujQXCaJfA6kwCFHJb2bMx2mTu",
  "key24": "3AZ2cm8ykMc2FgbUK43sCpmYYU4z1d5TA3qXRQf2bU9KbTbrbHmRan5x8A9wZoQyHMatVWAXz3nESPGoriX3rzbA",
  "key25": "3NV6thqc8AEUgkXPz3d3zWzQh3eebmEg8KdtQeL7akmcKAsUXQ5tE2oPvHd63YUGVJJDjeednwfEeZgBJ2N74pfB",
  "key26": "ysCwJNrDR16uVnqjpBN7wfhdqWiVZE9hnBuvqmeZQcmNqi2rMv6ds76kmFiMSNsqdgG5iLbAzhVAysjEmqfmSex",
  "key27": "5kHsLAgsWwXqYEWsk81WSt1kT6HUtpHnokV2mEZNPv86hRAj2W52xdQ7gNVXyJ9B2ueaDpHvyAyt3gcUg83zBcEC",
  "key28": "5TmDcnf84qrv1qKz7v5L7i2mkbViL9d32JjkTXM9aWk9g97zakefjznKtoDucCsWLv7ZtdcErtnBKg4KibVA16M5",
  "key29": "4Vp1zHqFVvrMjFRGLs5Mdsg3WsoSBs1e9vaFhw1SkRcoT6EA4ba8tyFbQBtCBM329h4TDKuJDBAYaNZTzRmeJuzJ",
  "key30": "5ie5u8V9J3kFVwyopEQixRRWDsaf1DmRaZCrU5w3NVZuiF8cGsrjeWvE5Z3mHcB1QzovWSMBLBTwVMusk6aCgeTT",
  "key31": "3tiyBzYM2LC9oo74y4DzCzjp2k8CsqmZL5YtfX9KEs9YXoZZ3tNPpKw21dfFKM7Ve64vtmLWZN774VJ9r6RcJZRm",
  "key32": "52rQmdD25X8djwDvGkx2FjLDG2xEFeU4UBUhM5v9GsYA2aaBKcgo2pKb2yFQuLiMEtVgBuUkXapr6hAWxAvdYqsV",
  "key33": "2cgPQDeCmSSpmWZ8nxTBR15CUaUAugNTqMcB4FiaSX921QUsQWCucXuxcrgPHaHRo4991Ts7ZsnxkXpzJ3H1WunY",
  "key34": "55x23z8kxa6qQ3U9i2qH5kpE5LepvmDbPUmTeoZyk3rTc7XkSjTUG4c6sucBZJuHNwyy3oD6eZKp17YUfwDF1fjU",
  "key35": "62fmwmv58bNkjLccUNMvWvqoP4XbdTofgvN6RpSD9cYrQ8fubVY46Tb6eV8ucpXb2qEj6ExLAn5iTBRGdLdYFhoj",
  "key36": "5BbwXgVZWM5aSZhDTVNq1uQRKfiiFzJAepT8PyDRX4YRGTg75crPJqmeVaK4SgaVgrzjhBZStoUvvjFfPZqeKPS6",
  "key37": "4AuUhzG43RDRHMqJxcSvUTPzskR7pguiwcazUzk51wJxVvAC2P1b7g4GPRVYE2fCEHVweMLigMH6XYjaPDKmNQzd",
  "key38": "2dfJV3swj5MR7qmT9ABfcGSC4pVAz6oTg5Htjvm87qJZXhug5iuPbzgF2W16fJxscWXGRyzSCWV8HS84BjXytzy",
  "key39": "nnBxcW2wiiA8J1wwe9MdY1vB9mBmp1dBVaBHRaC4maFBBL1m35KhbCnC5hS3YmyRJEjvS5DvbYMwr3Jz91zM8G3"
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
