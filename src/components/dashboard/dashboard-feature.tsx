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
    "4vHsirFtExvW69CqtzRZzsZXjmJ3vZfKq8jK3rBbf7qo9gardggKsKDAPnKaFaWBEQHXNPhoFuVG8DMcuHuN9WUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q2U1AMvoStnhEih2bNXGDLNHS51zb2EfM264pP8J43i9BqvGX4YUfQPNJizwMsyfhoCip92oNud9zrHDbhtqQZ5",
  "key1": "2EMdDLaUYHTe9oseBJJvg38gHRJryfuSCQFEynpEJf8bD4LtRchyVUXcYUizRhmCVJGoiBqdzjJ2YvhgwGow1eEd",
  "key2": "CFhaQMLMhoLUWKnSRJjWb9AkJoP22fgF91vWuYheQrZbTQoPkoSVK2NvQ4BYoPdxxZ51UKX7FUDsq3H4dbHdXLP",
  "key3": "38F46C9Q7kVJMkR7Xb3md3h6CtRkAVBPmeCZZJ3xgjih2jrPdReBkognj4oGZT7KvjdS8sfaJH5s1SwvwpmzAP2p",
  "key4": "2FnMUEznmPR2B5Zdy7dZowPyjYy6rfBqo36m5nGueisLWA2y4BXsCHJUePsndXPSM5p6TmMZEiU3GRNYRPyq3p34",
  "key5": "21viQWMJXBq3VuaqGLQDFTrGavHRBGR5d3dur9WC8Fg9K7Ye39aTwUrDNxtiHcAqDLX31F2f3tAZGeUjVknLCF26",
  "key6": "3mvwaSV1GTtSEUhE7jF6etHK2UZooSAtbmyHShiUsEH4w6unYeUKRUH1pHgVmAF94FbP7rwhmzCzmrRpSueXVXVA",
  "key7": "4otQ9HApU3vEZSMEPfuv1gGSe5k2JwiTDSEnFegfJ1xRTKVbZFmyz9uE2AgaLmPf6WGE8VshTDeWbpjhK7TgV7Ef",
  "key8": "6mwrgszHLpB6ths4YfTqPNhrafZdSbBujEA3GuAeRQugiCd5TfgLiAMiEgv9aCg1LJDtQUsSaKcfsXkMXFoWGk8",
  "key9": "2YEqKwPZcv921axh9SGxFcdpqd3GAMfL4d8uX9EnA9Kh154K7HMaMhk5sKCoDjotMsvxSNE2PThefPEmbQdjsJGj",
  "key10": "2ZiN45UeDPcohtEq63584XZ7YzP8BEYNANXd9wjx67oQokEJ15LMpAWYt46VrxW2UUgyP8asa6wRdRbRvQ5xtVP",
  "key11": "4R8ZtzoDk8J2aK37byoM9RneXw1XH48S2yfcuc2KVit7KejSQfbDVS6ZP2YUKnSGYttc4ymzo8Lh6S6TxD2xH2zD",
  "key12": "4USksJ1fBNyhc9raAT3qx99QmZNwz6giXk9UM6gXazWFzBDr8BdPCovLMGXqPS5rPzgnMWpyyRiTpdCxaDaPWiEw",
  "key13": "3yMviehsbmazZAByx7WGbJrj2gdSCEBhkGeAQ2Lgbz76osZUPniCg71ZtAymp1JqES5pYocRRnXQstT9AGMQAz7p",
  "key14": "nD1BKSDK6Kpy7CBLLqQmLJf8o5i8B5BXAtSea2GXBJNbcZsJ58iHcCsorHT7jApbkXfQNesFyDm8UnWdEuiLuV4",
  "key15": "LnZJAFMpNsTnm5umpsFBXkEkeVuNSwfWpELHQkfEvqd2jMnVUyqa1S6kngrqYirsRBQSsBga7mYiF267v9TBnUx",
  "key16": "2UyFuXtzN1pwsDM6CYrtYW7NoESHukYTSsanbLey4yPX1ZqwGHK4UJtHLP1HmA3tSzXEcKorLBFdBbTiQE8UYw4G",
  "key17": "3exjkLy2ydRntGUSGAEbpsAToqcLaYMRmFagCSnyeguGobNJA4ai9u4pZDA3PuKo72CRz345LjHPotCMxK2y4sM2",
  "key18": "DpU1W3sMLoTHurWaChgtYrwgbYKzrsHXZTXcU2YadWu5F8XU6ET7EWmHoyiZxmYBcF3pXiMYNTzHJszeMsghLbp",
  "key19": "iQT2TFzYssp8CecZbEh46L98R8BqMmv6EQu98MAenKmjE92PYjWW4RkYbb6E34Jiom9PTsffkxaRoKAedV4crPP",
  "key20": "54YMaoQPD4bfr1WfxpBkdWBkCFfTYqkjsWG82b1etopnyXB7itpv8qTpjmjcK43cv1FQAK8qrYjYHk8U4PWgu9Ct",
  "key21": "4UMfvEVa3RwTY79UNTbANXRLyqMt6H1AFie6mRQH7nZm2WTbKme4VxjfEx3onqqRnNqSNjRoTvCuLQYuo3RjrTxd",
  "key22": "2XGk1LviztD1wApGUCdKampWS6MZHV9WiDg3wLhwHQ2Hq9dJbJ5PVde16BqSDzGzUJAmoddnP2CKfZd2CESaSP1t",
  "key23": "4GaVidVCRwP9Pn1SLy1QSKpymFa4BiNc61ZavKpkt9c9mtpJ1WW1akZEd4cSRdkCX9WrJkxHXgwkfEA7tRVT4g7C",
  "key24": "XFEr9XuwpG1NLZuEzdnb14hn8DQNWK8As4AoqJMfUafFQAMNSLQCaNAhBrqYZBv46L5KBjTjPZdC2h4Ve98cQ9V",
  "key25": "4mCVqBfcPeMtCd328swH2yctB5YWBNnwKoDV4XqzzCzB29pxfuPQXCZ52RUhCa18uHpqM9QmF3FXZAm2frQNVpho",
  "key26": "5QVu3iuNQCR3MvuxZ7JbBHar5KJk4pAXwdGyrxfxw18g6XFzMyZWMHZQF2URbhg4n2NvFGnQ6yypvW9jSx9sCcEJ",
  "key27": "5ZpttS9QdDDuhauuPfmk3nX2UUyD9hpot4epPCTaNzw1PFfkodf8CRYWEo8JPD5wbeAL4VPdyLqoqS5NkWokuHwv",
  "key28": "MjqHhRzRPtMHFPbNeRBamkEPqP75WknBZ2Eppo2pTyJydqaL7uG4deGsjMtEmMfX8RY98dM291XEy6Fj7QZYGe3",
  "key29": "Mssrcdy8fFBTfwgYdosQArufVRpVR1ohDe6Eyq1uz8ByWRVbJbPK3xqzguj9bL1kc9oKfKhmefTFA5NJfgbLQKL",
  "key30": "21QFx47Scsi39PVh9B39yTaf8zvHzA2JvizygSo59uqAyeAN8rL8XocPySSq5Fej9h5VK68xWSftBnog2d6QxMpH",
  "key31": "3Zw4Nv7pfVRi32pdkLunAKD5avJtFSRXjGs47fd4Y79AkWqpiBit3hKyZwdCyrc88Xy8hfeCXraWh4jvLd3696Ve",
  "key32": "5yNBssFLzuGR29tYFmoM4pRgMvUKmhbUfxpRffrtHy65B84dbP2AcPSjkxcDDj5Giwbt6nbU6pbxWoouDfcQbn8J",
  "key33": "4KguxdyFNNvdTiLz1WkGBSP8fowFZSuGgbQLrWvKBt8Mf7ewMywv5wjWTUkq9XGWrokZcxB8dyafKvbuQSap2qSz",
  "key34": "2dSie3R9uTN4mo8QiFNY8d1JfZkcZS8osmc5LC59ZPXcqzPZWLDvVaq3nBm4XEfJExE1TBdN8aUUBevbnyxCQdUF",
  "key35": "2qiw65gB7A4ZjWef8U1m9KoRy5hQMbhg3uePewVuVfucTfvaSLrK4ykcyqcHNXQsY3beBzsrw4zgjZaym58JEbHS",
  "key36": "2dqaxmDSkPfL48hGvoUvgSZmAhyqcjV34M1BCVoejMwyRnGzHvpske9fannmY9UpzxRq4S7wRBLy6b5GExr8dBQW",
  "key37": "4X1KfPL5C7jxn7c7E4jMdMWVJjDjDEPFFkfnEqgxaT8ER9K14r86geUTYNPUqvuzisUDRzDW4pvXw3UhpapR6u7x",
  "key38": "4fy4oqzKnSDiiWKTHd2HnF841o14pUSddBhdDGQRT5jpYfPeWLohX7YX8M4mDd6FzRD7U4dH6iyhStTRpbjJx5hV"
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
