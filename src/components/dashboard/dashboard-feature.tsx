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
    "5Wad8Xrye6PEfMDAKGMK6mfoMnFzyT1TLD7vciZ9TuLUnrP6kBSt98EuLFeez3fvs4ocNiXfgtvp3QnyZwSemvLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upidCi5REs8Gg8eMcwXfVkgHsctucPz4xCaVWT69YoGpFJaec3qDA8SgcqAZCKcio88exjUbcdgfpZJPuEKUcWU",
  "key1": "RfhZgDdqUj5QQunNe3t4BmmjkW8xF3SXt2gryBbzVydHKuf3fK8D5mjL5cniekqVAxiveVSQf5ERyLqzuSx3PXu",
  "key2": "D2FTnUVqUt8cz8F4qgVPmwM2SWmeUx35ynKWVwy3B1aLiiwjp9sNTkQx2DYaq1snmFoqZf4uoiV6rhpUbFCSycA",
  "key3": "3zoi8woNyTpmhevLPwPYkkP5hQqUkdAVH54CVJof6E6WS5XuonnR3EBS6LqMjjCHvLK89Hinxhy9u2rqdK4g4o3z",
  "key4": "62cLooPEGXJKvrUSfHyhzkFjtY85qzDgT7Ctp5tLrkTgAbTV1C59PJSNQmk7s9QDW8LircHcMMT7dnnmmVD7WMNd",
  "key5": "2oT25dF5TFA7tuK7Wbh6EP6T56zp1m1jrPAgoHt4ZsX245pVRrrFa1m6UyvFBW3hTDWUMHYexFB8WUJJuccPRHw3",
  "key6": "25ozp18YRAuMWhkg1fiWS9MwGF3BCiq2ZWpgDoZiivjipmZTKrnjEsXZ4u1Qc8SPCdqtdfWZ3G5cf86BtusidTdp",
  "key7": "2zfxViFKfg6Z1APUCwLWxX4uAfXFuEhkYrBG7zH6vj8NoyF9ChHV4esg2WTJMdQ1DkKcHkZLZz4dNLMUdWsvxjsk",
  "key8": "bUM6gy9ZELHszk8fBc9Fkyt2yX7jP17VJkkgxZ3Rcbu8vpazTwRFAx1Yu12VQo9tYpktZZfcMHAELANFtAkVkzH",
  "key9": "3gxuTkVxjbaT5BkKRgSWDuqZfmdWpPDaZdxcbUYgwsdynUfdzptxoGUohhzcUbCN5e8tvzEmJ6GJsVbtzdWWQU6Z",
  "key10": "2JeoudXeyRi4sfLDW9mWJ97QyLoNyo3raZedL5GGPJJr8tcSdhCuDJ9kRLxQa5am9JVyCFBEPhr5j1LD1LJfT5tY",
  "key11": "3KALeoCx5nswYBBnVQR2HFHVemTv8iGSpz19L9YqARYPG91ZTMgwZWym7yNd35rpYR9Z1M9x6zH5Km7BG1LN7yuj",
  "key12": "2Jfqzek6kS36QQVkjFHR7Kx7SEpLWTDiHEemEZXSyujN4F2SYCLhHUiror9AmihfqHE5iaePsyUDwi8NHk9fJ3aQ",
  "key13": "4ngj9k6aZpTAgMgXW84Tv4RDZUxa2D1vWq195jJekt3wvhAurzkioZFwNi2AYPh1kCvkezyrXbshb6q5tjHuSXus",
  "key14": "3C1vbYsYV6LhHMLCsVmZf1aAezUZMMR5izJxt9NkAw6sdF5dRd1JogKT5ZDq1GxsM5yERbqvThBDXYm2MPAkrBV6",
  "key15": "4Nywt2FS3JAgKTArWHaeBZZ4pc1qLBnDNBQZKJsYaF4PXz9u2PvSmjQoKhmVzVgzyStLnynGk5vGod67eY75F75G",
  "key16": "5Jmgyg5uMmBJvLM5jdmSwJeT8JrFr3GnsFwzbC57KQWrZ2VFm48pEH327kRDeUK1Vt6fzFZjPEKjYrU9he9cA8tP",
  "key17": "5V9kguXVMxzk2vfnGUPqbGruhW5pu5tQTaAAoS5yYUevP4QVtEzKFM7SPzd9J2Y76c83P6RsvjNYbBX6tm3xVvJD",
  "key18": "5GEPgT9obrdNsj4CMeSaFxnZNEcZnAFFSQL2ffSpqiyibiPk4sxTu7rH41sjRcmCxW956n5AZrg4pVL1FxxJxZNw",
  "key19": "5jj8wV1XSLk8SJ9B5DxZv8LPjfJnJstT3goRAenFubUqQcm2Du8DsJV4t1b25bSHC2m5P3kwuzJDYnws57Z7CNSE",
  "key20": "5XannCZ3xbqSUqFag6hkFYvR2wiJPb6jAQpcCVjoQPNNsR6VwGS4C9jj5q8FUju375yuVhgBeV2uBGHxyLYAUDzZ",
  "key21": "d7eqRukLo1nYrdmcQg4gT2AHf4S6Z6667jXB9d4jvJJCAtJsPTMRo4afviyFJh2dSt5wRkqFvuHB4R8zVzW34YF",
  "key22": "4dmiN6VkGWWSzi2n1KKQqowKcdWtBMTJB5ztGrpVj2HDo1nxZ5gzphxZRoiydyRE6AxgyZcS5NmRUoE9HY6jyu8n",
  "key23": "2NFwNq35ZSkx9NWpR9AB7wVri7z2NJ5FapVnuKgimTSHahTLvx85LGwk9WnEcgpFzgNyVF4TUDNXT3yPAxzUAwVG",
  "key24": "45omjECumAKitnAWzDKhn5bNtbRHxH38ALwYme32HuPK3Y67PLHZWVV1wutpAimRqQAy9qFURQrSZdnz7NDMtLRY",
  "key25": "2gwnrftx49JjB1FT6kfhRSa4c2MFAYVKVZjB96MJeJCXsoHWp9147X5spatjzMbmeeBiQEKkhaLUiQwjq2QFF15G",
  "key26": "5f6LWiMoyTo1HnoWCfefFXqvkg5rHvKpLQf7zxBfasJ1jxjWhKmrmokUC7WsJTbCkxnqCAvm5ACZdcimMCkwL1dP",
  "key27": "2zRxWb6UTU8LRnvuCchiFDhE6ZdPuoAGhi2RaNe9adNctv5YLfksRLB4SVbWPskHqDvfpHwCtsGVVU9nSPPhnTpC",
  "key28": "2SqiWaXvaQXHx8RnT2JPKyThg7EBx4RuRsfyMWqF5xDAgRCuwjv5wfycte7Kyyyu7zhHjVXAbq1bM6hVrLFTMi5A",
  "key29": "sYyqnQpCwMA9uAFiTet9b5kHP1VrjKTSqc6rbznEWjKqQeXdSwZx1pocKDCdmLoYiZU8xTA2aXYgGbeMeRthrvL",
  "key30": "4YUYXLCXHmYTRnzcoUi7Yb9x8kDcyBueuEUxM19URhwDy5bWccaneoWYk4Wn2ziGehpRvvLvB3qjkELNqo6PUcTk",
  "key31": "2iwMKJEMgBPuRULg5Cx4aZHDSEmEvGqGpqpCJdCwAPZBJ2MzMZA1KBNUcv4XxH59Smk5rNHEyw5njZEWrMHTGpxU",
  "key32": "TGz7bnsaGimzPhZZ7bnVzH12vxLfZSf7NVWCNxWp9LVEcJRwybXDfHGU32tabguNzv8hUN1TwwuAD8p3w7rnLDy",
  "key33": "4FWQHvQqUyDrj8he3TorQT1amGDGbs9f6mbJ2gHhM4XnB8q9Gg6Qx7oxzYVQZvXoaHeZdxc3C1fKZhRNUa1dYE9e",
  "key34": "3j5Y7F7qdwgoPhs39BZyy3PhbqCURt7EfdQW2JLDTWAJ71xcbVZyvdYiWVD7GF5SuBAHJpJ4D8ibTNNAY594JMaR",
  "key35": "22dfBwFezkEGYamhHSgW1TAoD6gTVNXn5BsBVwbaoQPzmc7bQASDvgdbSEnEamRZR7L5dyFYUgNLC2sZPLMwr2er",
  "key36": "3dsMtgoag3Curm6Thi5hbpxSqnqLJmx8GCS4EmqsM7Ti4P7BTHwugWxyVeKpbq4Nsd7h2rLca8NB3kLWSwzpwWXn",
  "key37": "m75WPKyXEZP4PnDyBYoWpzEdxTYeaABJF8zE6F3HJwdAq9f3iNpdjZ6gBe86ReSuwMHo3knEN5pLsopF7X4o62x",
  "key38": "2SrUjwyKCgb6vx4Vt9RRvayQkpR12BSHAEpNeeedBZK6wSjWB9UQhbN2EUWCW1oEh6gqKTyNE1xhzobYMo8nLYTu",
  "key39": "3YC3bMBTdzsp4HbosDWnnzdNmzvvEpG75oMU9Vws7BQbySirkqGrHgwo9weryX1ze7td3c95hq6cg3HS8YFqwiS",
  "key40": "3UdNRhfNShpP8bfRDLvkdoA3nKymfTY8oCY3b5PoC186VkB6i6L9KLAUUeWoYwr7kd35DWVVZe38pjaGuNWZrV9o",
  "key41": "4MCFeCpgJgfNixKCVydSbdGpQWm28Gs1ZjGQtT32ShJ4DeytV8MkTGi6Ubg12EGpvZNnxSth7CZjRGdavHq6taVf"
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
