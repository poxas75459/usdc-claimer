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
    "2uxekoqGwYfG4iUY5AQXx4DzE23JYmuTcLwgtLX2Mhd8QXodetp6sFZvnSoxZMUBQbQbktex5odZUWS1BxZrV5AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCvHLdR41LqDiHAXTMza2AS9st6yBJswkjKgRCKaQBkbd7dm8451DaFFAgxooBcsZPgcYRvmAQrx1a46otvKEPv",
  "key1": "4bZHf4iQ1cCDEY4ydcgP5LAWnYvfKZZihR2xU39F6yYkLErYYCfx7JL4vTdwF5ZvKpp6m14A2J8jhDRRdes8b3d7",
  "key2": "43mSdCWpmTF5jwMCw1zRD1M4rcRFLch9MRZRYHbZSLuNVyR3Fr5rFojEgSHqBB7rgvmbeZRKXdTbda7Mzd3GD823",
  "key3": "5v1m3dHWA1Xw8xB5RtSKeCG5mBi7eAtfZ13dwMSg6iBJ6cwpvUDQiZEWJKNf7h9oSrnD82EGHqxdsumZKgwonfjk",
  "key4": "3LW7vdpr4aKGQczT7kt1o4hhJbjzRXYEXY6DyVe98cM8zoR7xPX6K2kuSiiSQsej3snCwR8sLbhkMBFcykww8ZkM",
  "key5": "4bZF2rcbBshj9xRbR2j7JDL4UwCCn6jjp4ZXoiFxjzTX7C77vUFaB6TcP6ySE6xpSYcjRuPMxaBUUncbtVvVdvEk",
  "key6": "2SvgzxGxt8AmKQuvxvTJf2fJoXgbNivoTBjPmwfUvtTpF4G1LHAHBvH9L4ExVpvuCtYvLtwoRsKUbkYPhyLLu5m",
  "key7": "6eCTASmLvCKPYfUKyMZu6znagdtd2mUVPqGaC3qGkRUwBNA1sf7SDK8YigTmmpYHEqFWD5ibXTjEtvGizpoiATa",
  "key8": "gG3Yyh7NkmPEnGGZJMfyU6tYFrtkAFVTsgVUpeL9cjTfjGSfUHjYUVmxUXyAzZp1nz2QhN4DrJFvmvyar88UmQ2",
  "key9": "4jY4vGFHHUxUaY9iusJCeHv4cMAbvh1A4xXyzKvDGZcJ1q99XwEY3gJC8jgJx7QAKr5i9kGCQLy75GXvAqfiXTae",
  "key10": "49iqFKR7pBirw98ZCfpiv167kmVsnoypmhzYpWj19q73s5BEZypK9sLbeu8h5di6y31CQ4mEbmqotu5ASYEf7bgd",
  "key11": "63JhZV2or9ppEyh3XAMjmFxvdDYtjM8udFxufnHB97jAe9pUg6s7Puyhz7N8DsD3Jhdi3wVzPsfFMNBSprnTDYAQ",
  "key12": "ocXNfV9YHgA2XQPDDBvcsKmKJmzAvffs1jAPcrxaBmtT62oCiV58jCaDntU2C1nfDvw3UmxWbH2JbNtgBifwj8n",
  "key13": "25DjC6uU4ikbGyMzy33gJJXtbjfRGdmPZ6LTGFSvBg9CtrsqNz8LJtYthJar2RN2HyC9h75P68DfJCKT2q943qzm",
  "key14": "4uTe4tdLhkwYzGURhM26HsUs5p94F4htGVCm1ik7f3Y89UBUHAE9vN1T8Nuc3TzZpqY3mqu8h1VgvWorKMnExw3X",
  "key15": "5iGbGbzUk1z6W1HzH6q2epogMZtihK2cTRdrit2Pmt5GkjKEQ3vzgqy8dAHukxvNAzgok2JUc4Yec6tTDuWrLqQK",
  "key16": "5cDbRaX3828FvCm2EE1yuuLjPNFGK1HYc2672wX7Na47aTQVGWsu8jzQA8p79qsij6i24TrErYqoVXyZWByhfwba",
  "key17": "3TCk8QEvC8puzVMfyhbCBPT65RGWBbXHvxgnhkaxQXbKofcMjQCGyrbxUe8xCC8zy25BpX14U26w1ARcfEvVWYan",
  "key18": "2tVU86WdFsqJCdoZyBucgBukwmEDFoZiyLKKtoTqLG34P9YWA3ezteZP9YZKf8ruEMnydio1ypo9hUceryYSy4az",
  "key19": "2xzqsLKBMErLVygqDXJvVQcynhm8JCJGW4JZ16hnLk84E1mowEg1yYCXrhNpUak9QMnowB7ka8663cjsAKwhPoqj",
  "key20": "UHRLeoVoedZLEsDuNWFuZuH6skrFYJedEdYCU9FzH8GCW3ApEdZtmAcVborUAG6iLji5CnsxzAEBtWFpNybWZ2W",
  "key21": "3A6fzrxwFBhNTUHmFa2jYTvqTUy28QxVhv2zvh6PKQvEZ9RScCa7aSiZsRixW6B24BndUTdgTyAidwJSf4oRSTuP",
  "key22": "wjtrjPBbT5ohWhz3AVJnddGEYLjXVy3VGNENLG6KyPg6Zv824ZB1CZiyMVGpp9BjGNc9ugEtydAiZ65dF9QCeYP",
  "key23": "3Lgjc2BtG7X8EWQ518NFTfgnGpX1dxXwjyKGh5xP6ehkoBcZVrzhqjd9vDzPbWTqyDQ7rU1AaKFJrzT4BiXFSTn7",
  "key24": "3oBsciD6szogRibyik1np4d5e5nteuiupRb72X3LNnDtrPe6GJDgWUqZUaqpVxFSYQ8SdJcd6E1PUB8qtcEKK4u6",
  "key25": "26JeoyDp78dbT9Qo9uphDMrJSuJctMgYkhuSEjgFGQvmCXuYzb5qwNEvpQ3wwfE9AWZCewDX55LW277RZhk618gb",
  "key26": "4StktDu57hGpVGC9BAPgzGzkaRbxkSf9Vi6amVjcSQSiyuEeK3RN45vyzj1V2qZwSYHa1HY6u4x7hqZFtpda32eY",
  "key27": "5Y5BSFCzUDiDRFGZYPKg5sffHKNgr7JpgX44JGvMaENkxYvuQdWEuZREmSnBUmVQqfnbnctUMSUubaxPL12Y7n1q",
  "key28": "4JnVYr57TqZyufV8cJaQQyuKtAZdQzvDA8sPZvNXqazH38PQY2ZiXcPtJQZPR6mc8yjV8nkwG21u4N5ufh2iZ1Y",
  "key29": "8Se3pcQSpEhoQdbBVqqKBmLivLjKBdvFr47Prt4sBbH2tJZ77pKsJnL3bBJaNsAoEwgJcSiTvGYPjvZuQ3adPX1",
  "key30": "2pBRuqdU28DW6YjaDoRabgvyBCTTLpW1jPqLo3SMKPZeJLgPkY9Km62oJPLHtsH24bhC8oodKk331zNfu6sEdGf6",
  "key31": "5EsjnkifPbbbRonUAhWSESMVwGcP6z8Jtvw3UgfQgoZKqpuEwhtyKiyxsUSVJLKsVczy8iqqA3GCy6rCZGViyEuX",
  "key32": "5syEHxF1GRCxMqNsHbhQPpw2qrq7wYwcKy2nHHfoef1jGJSUQNTUuzHxqjnwQHR2AEmM9TvCF4RD5r6hPeJs8amq",
  "key33": "37N5q8peonwRUJ6rNFZFFnQE5o2DxZEJ3VL9rV2psdEyvzdbAyYvRqbYcxzDb7NrBberD4E1uu3PXboonFBZ9mr3",
  "key34": "4N77G1Jcg9reCqL4eeFEwwDBrqkeDTAYWtzZnq6Qgtvgi78nn15MGBErMS85NoMUiMZ5vAHzHikW2KRmkpSDrhet",
  "key35": "2fAQiwdi6zhQzBsKnDJmF9L8cbUJR1YtKaUsFNoHSBdYLo7MRNxvEjZZ6mtBvTJoXTa9XdmBHP2mVA9Zb5JstDvu",
  "key36": "5FB7Z449MszANVKz3zrjxkKWgqxepf8mKXX8KeHC7RANSuFdcET5xGY4nDf8rWcogPZhYt98TPHQkmFFVt7vUsE",
  "key37": "3XaURTcdDXLr9QCDFBgJqp71zwhLvzZvertJHXUC4QpFY9RNj41q1LLCuPY91MYyFtomTGEoJuATxXBhbnutUidv",
  "key38": "w5aafvMjPWp19xtnrhWnM5fLHAhAVHR9kWYJCbyWvrLPTUVAAVW9W6GMBnZN1P32enDyd24gZtNi4xx6Kx9d8E1",
  "key39": "5943Xnb1iwitFcM2zoDemB7aSpmxRFLe3x4zrWFDugxPPLj1JejoTCPVaAhF6rsfHopNGRNeVZLzjBTXdWNuQaPw",
  "key40": "2YQGok9PxqhgXJCX2CQtj7f2P8uCEJ8uuRrzDJVRWNVT68UV7Lbq9MwsdStoi4vHwqnMcvaVPLrfjD51gzfytpzo",
  "key41": "43TzYXaeJskoSpTeraezxZ8CMEgM7VLKNhBrm4DueeXY98Wxav9eGETfYLf5dEnCs2nJZRXWriaK3YbZMGJwnQxi",
  "key42": "4UK1HCN6csAFBa3sgY3SajWfswLaygMVcFMzfxJXcS34BeWiNBQmWWKpHUZ8cdjR7F5U1NGYDt6zwbDVuEfP3wxf",
  "key43": "3JcB8NR7nDvk3ipnaVdLKagLgXsecU5hm95o8XJLxdBbAGoWEt31UYzCF8KQBk2LAT4aR1YPwLmHnzgCgdgavbL9",
  "key44": "5SVxP8uStkx2wW5MukKCeCxyRbizUrQLbSoN7pG8vv4SryHJvyWvBboRXhCJJdfLVLR2AdRAwZtoS1bzEPSZL2By",
  "key45": "2v9dtWHpEQHdLTeskSnYvu4yN4rWmi6CoFPWcUuZUjXoeiSKfRZSB1XUAVyjJnudu9t11HyNiLrTvNNZp3uv8NPv",
  "key46": "2DqE1bt1DpJWyiFVq7tzQLzPRh1vsH2TeqcW39HMbPMbSk3VSc4zgxmtiRkVP6bCZW95Qdp7vKAG4KWgQdNf6ixD",
  "key47": "5kj2gVd8DhotRpZNbAM5qzmjqAakujif5xavVudZov89RobsKoEcytE41Y9QsEo88GLruzZwfna9fb6oS8W7sxws",
  "key48": "mc3DSQym1MN4nSV5Y1EdKTcNwmhDJVuB2hEa9rRAXZUY4WNDixuzWB5ny7X3djCDFccfi7VBPh9xWGQ7AJhdS36",
  "key49": "ebAEgKQrvpnkNcY4CFE9asdrbA67MBKnDk3y8hznw6oK4H24EnsnJRWWu1dYgPav5mZ5hFe8ZuNJq9ptULp8a2P"
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
