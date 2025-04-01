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
    "58DDqFRopSKCwrHnfMh4hkqk1N5VywkFZHMm2FV5S9wbArrcWzmkDEaGPfYqGHrfMBMHoS2SrbtDue13ZSz5TF2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNvJrMCrK7EcXic4H686VJmMLSDqGVUQkU4TzDtQkmK6j467dcYAH6nZ51puf13rWjsfXFLbgjo86rqXFCrSeig",
  "key1": "2dQA8B8hvqUDp8EU9u5eobjKx6kzjkyoNWmRo4AKCHmAhU8m31rpjunvLjgBTSP5FwapBX8Xk55fmhi1r74ickSV",
  "key2": "5eddEfWdCpg8usjX45wVJAToqfU3tBYqPaqFfQh7mHTqXtsTiE75qD9TsqYvw8u7NDR3twk2WwEzwBkmxGowvteG",
  "key3": "4tYJ3pQb2wvn3pjrAMcuzNA8uppQSYw9NrXPQauHjD2rjtHZpF1xwDGYftLF91dJPiCiMwtbA7tdbPPuUT6eamHm",
  "key4": "4jyGD44a7aAvARsMdSRYusvkvtANw8WR8povrNcCqRziqa5yTigxVmiHt5sWnVuxiXsP2sqUK2qWzoDTPnxhX48o",
  "key5": "3iTUGCzaYKKyjq6nUFugdXYxrRnQgQnmKVVr4sKTinCuQ11jC35xfF5N2XQrCqfL3iN5jPm4QP65Wk2Hzehxwdeh",
  "key6": "2gQtshU7xPjibm1EWi3RVBCGATtGQY17oWd5b3rVQ4GTMNgaoefcS7MBsaxnPALAmCUTRQHrBrSkQyTNsZRjYJSp",
  "key7": "5UimYwopW7K73NZuUnSX66jytgX6sg7jaJNGZGv5anwQxWYo2sgoGhm6aVgeRJL1TM2j3RAmnZnoCLQJSZRe1h62",
  "key8": "2k37pbjTSFVmNFqCntHMpjjNEWUHNd4ZHEPeJrEttwzcuY3gWNydS9LeakVGsZZCfep4jipjjb56DyY9DBChS6hJ",
  "key9": "32MsMkXnyjPmKTPThTckc1sigfZTDmzEbue1W9TsZNVTD1mCqZZSyaMtjKBaLgimtnf7qRfQEa64WaxWnH9cTeob",
  "key10": "1aFTeD6gaQLkLvtGSNAa2jSY5aWeGEkiZtTDHfABHsiVrxebh4czQ6rTiikYPo2g5M3sdHKEoMMN9Qg2LKD9sYG",
  "key11": "2RU2R6KgwDQkJEbvbYJd5fRjJqvbEzwoeC2XUwFAfUAKgFroEnPRNrQS5eEduN8kihXhr2R4AveJaRFvKzzmZiZN",
  "key12": "ugKTY93qeAFVxVbLFD3M7ZBF5ckzkdsdo9SZ2R1xa2sj52Ut7xpiw7SWS1VYDbQDHSRtuhsB9FGMm2PpjiFia6w",
  "key13": "2w4Ko55sDWvFWPJReVYJNNWsmuUzrTMDZSUyXUcjNkiUnaw12gsizNWopzdWh4ZuwskR8hjbVHU9qmkD8N9FcCb5",
  "key14": "D7dLwHeeuCwmVRFzhEXdGCNUBm7ug98b96gnkwnJMtF8tFSrc954zE3jhqq7biKQ1T9ETntaMiR2MWoXRKnw5G5",
  "key15": "gzzZ5j8BN16HYPsmNtZZyUcHyyn6DPj2CB89zh253y7eEr322xnYueBeFP6MYu9XFbfVy7SUjBLemZKvi5hNxW9",
  "key16": "5hmui8y6kqBiPoDbsuLZBpdkwpozAtTirhkVTtvtwn4WV1rPko8DKm4bRfGvLo1bFwPnQzj96XHCP33Ju3xYDnfh",
  "key17": "2ibq4kjH6gcZu35fYieKaMCiHoqdq73JX53xAPonunjaDyGLDV922JrB9kemNkE5gjsxyPLMvM9sV6FnHxAuJZTQ",
  "key18": "qCGqDAeVtvXS2N8ajwSBipmprCcnmLHR4GXJaVkvv71cQimdzQL1Nm6gu5zoiJAeMa7C5Y56n9uiTt2UReaLuFH",
  "key19": "3J6yCfiFXfZb8SzaewbK8kvwJzVrgawgC6wbtDWauJSg8ut1Zc1BSarAjH6zrf9drYJGiAjz2rvpcTDLKtFqCpC8",
  "key20": "4aEUzChD1V51GdHKYaSxzLTd8D6YjouwjXSjsAoxbevJDj2poYdYNt8H194maQWg1HsyZHUGEkBdbsGfqwB5RPtq",
  "key21": "3qnvxPJxz74bAGbeg133UGVH9yvW2DKtRAMDHEYw7mDfaZr5KVZaCfp8vQcz6nenLJSvcSPqNrdD4VvisbCQP6rU",
  "key22": "3zky6ubZApFefJNYdL9YhEQsnMoB9LSkRoxGPdsbXFBf3VYcfgkXUGfmT8edtFLx8q164qP1ZJ24cYAeARHz9jXV",
  "key23": "2KzdBB1ymPSznKMaradrwVoaMqoEdH3d8ShRttFvubfNaQda6a7mftPcJjE2fgJJbQaL2i4oDcdzvpy1uKXYGV46",
  "key24": "2njh7Ki5LxNMMUuK3F969yYE7t6qWnJKnraSJsNUCK6L2t1bM9K25dNXVmWXo7D6BQf1UtUvpz9tAMcRBKozNWqr",
  "key25": "rg7neUzaL4hoUYzyzUmCu1rGgAjpfMcFouspLudPtNskQFz6aEBdf3AHuLhdEPwXJDLVRCeCBS5wQrGCp69Y8CX",
  "key26": "4s1yqL4hWuC9PbwZJJWySb4kcWBP5ezm3LJ2KRjx3VdafjG5qoMQz1RiLxTRCLTMrVPfDjeJD78k5oANFdSGhpmT",
  "key27": "44GfZ7EqmJpJx1kgkjZKMjWFLp9bNnsKDWKfFjy7YfT5p74MNfWEHp82dASJavegfkA2uZZ2KRo7oDMeAjpCTuRg",
  "key28": "RZ9CnSsjT8nL82munTo4cngyDGbZzrM22mtQY7EmwMsNS217to8kkLLEfDjCqaFgM8UZiDbLTx1GYAbh4ZiUdgU",
  "key29": "2zUYvY535phZJctqHiLBQVH1dsgyYqD6nSNipYK4Yx3rQdiUTHJRGhpgwCTiBR2ZcUyzNxjsNkTjcYzrBZPPyCDK",
  "key30": "4eaVTkbqBVVX7H3jw9oJcjhxgt8MHYCCHau54n9hPt1j768XTA2AQcHF3kZ2i2i241Y2iBXtZjACAM5rCdjiDr6K",
  "key31": "3MkA4kmqq5u8MHfrBZz2PXGMChUJjpFVb1MMyLAhun9f6P43hNsneUD6MAXFophX7ms1n5nSxTMWaAT5UCRVuZ6H",
  "key32": "52jNsbHCXrUEdrd5cyfwx1Yj4c1CaVE5R8C7hoUt18j6dHMChUPEaecM1nqJGqfW1TSGDrZwf1iQx3n2KsoTBMgV",
  "key33": "5mwArFnU2z57Ssq35WagiabX2nfwVfruqAdKNYTPERQHDfjiR36W6MVXmRH2bNU6czUNwXnBMqGSpcPQaHtXwuJ7",
  "key34": "Rm2vfQZYNTSP99cAbj8Q5rURu5BsTJ1eq4KGTvz3foNxQVWYJkmxAsKkC43sq1prstNU2TpxJEvseKHo9renZsT",
  "key35": "4m5GbqiMdFdGPQSLd3dX8y2zBQ7Ka7aQeRNqfKae6d2sKH8KRJcDmyJyhU4Twvkjdkkv89hZLJFdnMwJEwhoZwSG",
  "key36": "3QzD93MGeUKFUw3So7XdGETZWFHiiNtAUDTwfjSY3EXynXSrf9yZLkb4NALPFchmYA7N3MjG7dmo8QzLqQBjvkAE",
  "key37": "tRRJhjQtvy5nRFdQeEPs4tAVQgKFux8MDL29HcPbqUndcovfmUbmG7KzaLtHmivS294EaKRsJ4wVXbbT2bozxNj",
  "key38": "3Lk78kFAPwLBbLRQ7TJp3v4bQJrtm8VSJxWj6rpjAx6wsNBv2SLXYDTdezMjjfbCcEhJJiCE7A6E1jkTVcMCckMK",
  "key39": "5oGFvKzmKsKBpXdxy8MxYG8RPVCEEdK46NmyXKAhZ4Ze5CCtGtTh7UT5w9xhGQVqmisHuSH5E2hTd2eMCLuCNetn",
  "key40": "9JCB3kWrbVGpwz4U9eqKmm7NPzLwQuCZRQ2FLqacBug5BN4vz4ttHMkkWYAJ4iu6uDaZ81W3U9hvMvNjq6wc92n",
  "key41": "2UXuyL2C9yMHgJuoPBVQVgjvUNEkpZkWHZpTb4dDgFf8abjYjewyiArWB7ekuFznV9ng6kXuKSEy9s82Ggak6jRW"
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
