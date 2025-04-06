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
    "48CEG9aoCfnv6Kspu37KvwKtMCsYZJQWSiL42DKuXMGsG679dYAD9jsoJwNQG4k3XwY9MGEKjhJHr8UCFHmPoz4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePqj3GP76GVA3HfPNff6Wi286iQnpXEWpCc53GsoFeb83Sy2kGczwBE1pLX9NobH7V2c2SAwaeEnkiRa8jLXt4d",
  "key1": "1CMnLzfpA9srUpaoUQj22b7C4hdHtmj64ncwzmrwhmGo2kVk69KYkmXYsg1qJj8tUGbDLr1RNiurBrZfryqLtZd",
  "key2": "587G2iN13r39xxD1Meu68qgB7qLFFVx4hxg5241Rx7XjtrdjSLEeMF3nMBVsbKQ8VJyqAvRwi17Q2vWPFsJfUaNY",
  "key3": "2yX8EMjvYzkUAyzEnFAotShgrMaoBW1uXf7tK81So7JLHJRrW6CMgLfp9rWxmBYD7piHc9fnRykjhWY6EvbKCAwr",
  "key4": "4m3q8k5PNyhGsyPQTrUS4EWbSi9Awh2rBMbSDyyyj9jMKasBHpJFrvYQzYQCwnpWGp4krRCkSwjpKUrXTZc2kRKK",
  "key5": "cCEzixgK78Kikb2RrMXtosb6s6WkHfKGZFDPbpBV2FD8ES6F9x9m2fdsyXZjKWEvpfr96XCZEComHaWsqENBwCa",
  "key6": "5oZ5oRX6s3a3xPS27LFt1YHJSC7SJWy77ZKwUEtb2GMTqZnNBuCWRDBsYTv2MTzccvjDC92PDcyVtXaNqqr913wv",
  "key7": "2Su82DAtckCXbcLqvL5VNVdA7QF2vjxHAbyE7wDi6P5xCtzprVkDiSZNKVPYvM5nw7btfU1FoLRjKGt6b9CkzvAS",
  "key8": "4Yjo9TJDTyqoHFH465k5bXV4zRhCVGeZQbW32bUGtkPmygji4EcDUaDFJAvMMZUcHDVnAW8LGEna2JCEc3EGEpL5",
  "key9": "5P4Hs9M59z4Z62WjcF8pskFUwBKpX1KjLj8L49u6PsrUPuejsE4FcsoDZnddk85XsdEpgySRPjai1bkwLJuuytV3",
  "key10": "4KbavzP1hPVCm7EV164pKhfvqWd3nWUyLaXjGpvsTSZ5Vw4aRjXPR9GWpXEp9x4w6EZze62VFhtDBQx43WkUsDad",
  "key11": "3TwUx6xnJPH9ZuHZNyvc3PcC3ud6z5fC2WnNDXGZW16Errzun2LSEJGUZZ93JosLUh1NPYvdPJBSzvTiSjs1ivhc",
  "key12": "45atuGQqaq1oSAwYoBdsggiioU5jxgJffhuQCu7JinwdKL5pNgzUTmyxosLitbADBvzXtXYtHMhaj3z1Lits4dJ4",
  "key13": "4sXvAQJd6S3TeSmjcufPSx6K3Ue5CcnE5Wd5nkCxnYL5dnjjWMxEmsCWWepkcy78gQRWXqJNk6imLZhDMHdtTcnf",
  "key14": "5EdkPEL9wK56vfNdhEx4rHP6TzvviiL8einmdkWKCE1EW1boqtvcE6TvjqWpXjxeYKQY4MpBEvEupkk9JjxpyR7Y",
  "key15": "4ifvCYUSdHEYQenUEdUYPTA1H4sPZ7Zf27s7QzgrcHSswUwjPThD6KcPof5LTowYTNmJWxxh3ikE6wndruX8WWki",
  "key16": "35RAtY9Ub5UBSBo328NRbkay6zCvtzrjmmi3EpKhZakWZ7by4qABoZadv3tfr7LTz34EKtJ1LADRvgjafnxk2wcP",
  "key17": "s3WkPYhwA3xmiLmB5LZtD1PduRUH9T8K4SfHF5HTfqb33KK4HnJz1QP7qoWNKPb5dHJhnVBPKd89mShGKfB4bZS",
  "key18": "9EV6YfLvP4e3532BSnBnyhnXzEMuyjw8PzJCaHHpNg2qakzRV6Q5ZUFyiLXJZQCaeu2ohphU83WAup6c7RBtMM4",
  "key19": "3dfvRdX9chBF5CKpDDc6dWomJoN6tzaEF8kJQDJ122psNuNaLJiLB2ttx1y2V7MudntNEAY3dfJNJ28Ljahw17kQ",
  "key20": "3KhrgM3fJzKPdwTPSKZhhca9mVctCFLzpSde2VBAoGuXeTfQhCnWuJmHXar2wvKH2rGAsiB3Chq3W6xAo7KvUHQW",
  "key21": "48Ls6NKrhx4E35xU8g6Y2AmdXKVQyDye5UwHC99ekx3s6pWSmwsHrdU8hqBZBxkNNMM5rNQ7XU6ak5rHBhUk5Mdf",
  "key22": "Z8KofqteMBhEdpgNKLsBFyvAYSrFmtDZE2X3rJ8nCb1CveV25P5S9oCzwT2riiY5aUxHC2Dc2dKLRKRhdtu21wK",
  "key23": "27KCBh7FNMa1mvPT4GsLA2Qo67oRzbkdCeg4CcSe6mNNcqHqT4ZNYxD5v4KzL9LRV6rBCkMWQwpcK9CPRT2QrvyQ",
  "key24": "4stug5n52FkmsbZTw3Cx6nh9W9kzqq71XiBTMmMxaFveEMTr4B3ELh2emxp5QEgAMzHed7Z6C6HbJGZZQD6VikCh",
  "key25": "55HNNeMjqWxrPwe4eZR4khpx9cC3ijg7NRNH7xTVfhQ3CFW5gvBcDaHzsMqFdufZBWNxjDorv6Zk5sKJ3A4Jgd7U",
  "key26": "2GK15NH2qScGTwPXFN9wz7DYiECfpVtuD2nMhUbbXXL3byMp4PQu31RobmEQLwc9HDBC816eCCcxM7ESTm2NY8JD",
  "key27": "2fM6yovPn9KrU7mbBsD5FYd75iUH5VA56TrA78Gewc5PBdWGsDnGJnRrohASRDuQ75B6V5jrATUHL9PiGEQwzr92",
  "key28": "NzU8Xp7H2YoHKsh4RETJiRHLsar8mLczTP1CgPjQ75p8bSnXzMXB762Vs4y6FYdSoD8482rwp3x4KG6bobjeb5U",
  "key29": "2he1G2PyqWxEduDfJdsTakfGLuEbNXvs37q9o83cayT3t9V1WRp9QegyJC89AzgvCkS7aoiZCgnhPEpb3w1keHu8",
  "key30": "4oJ1sptVugK7ihG5DaTXtNMpMwbUeobNLYsqfgfANCnaACsTXtJVAjv4msZjUaN2VwiT6ZdKNPidNURznKhZKPje",
  "key31": "3sSrWsLi7p2BKjA3EYCFBf1unhZtpAMfCGtECFALPGVoBMuAdmrmYc3ZfdZG8ZfwbLViiSusp2RNYfVF24T521T4",
  "key32": "54JedPWaSAiMCCgeeuAL1N1nnP11jAr4jcBwwGzZBPopMYk9CjbHqVPbctfxq6dxD3BdAQzKrEx2fbF3xpp91y8v",
  "key33": "5RAdn2CzwGoie7DtFJpvcWqTEpYYysjwdpQQKbrWWNJogPuvcSdFmJ4vfm2umJftF8cG7o2MSRWQFzjB6RpvMBtY",
  "key34": "4X79XVUnxiJD85yGG8AGg2SiPnomyqMcxwoyf818Wh2tV6joJs6hfP2ApFvFVnhVJgyj5stSZ3SikY5HP88S9JzR",
  "key35": "3KwMCaKFmWwQGjN7yr8YBerKwCm6eSfPgBKLrf7PmfTuMs1oMASju5sriHKrLk8v6TQeW3JWi1cJbTV4D2EY5onJ",
  "key36": "42xahJDrSggsG4ZZBGEBhher4QMfk1dsWSXYkYBg12kYyUyDzkctRVkThQjsqejAKxPtoVXAh36uiwCjj53nKtDn",
  "key37": "5sF9E5xniwtJzH8Ugt6fqFbHEarxCz2a1MHEnp8iTE5Na3LBoazSmXjXwps5UgGz6Ly72E7oUExw9esCwi6dT3Ax",
  "key38": "5M8vtinRZkvovFYQgBzAGAoQgETi3eqjvH7dpZkAQK68doDm8W7bGzQbpaETsaPnjpgSCesCSRzFhbNHL7mJ9tW9",
  "key39": "337wP62tme6VWznW3EKe7DSbuARdrJ91pBbAkSKGPyDxr1fquuaqLWg8jnawpokDHwnWR27qYPYq9Z881k1xLaxg",
  "key40": "27KX4W7LLBQcqwehPqfSL9YqjD4ec37FNksiGdnZ1GNy9HoJJTq3e5QibkznEGzE2LcicnwXFx4vL2xKyoXWh1sb",
  "key41": "jxMpYFoQ32w8nvowWqmo5NRpNs3nUAhyDzELM1YKdeB4vXpcGAV2Htuk7o34CPBNZHidRXEWCeULM5rAhTbbiHx",
  "key42": "2Yjm6zJr4TzTRjLA27p6TfYqXfPJvpXGfQp8yKZXfCaBBny4z75ANu2jxEnYttPLP37veQQRzCmkSWNhqD1d8dSB",
  "key43": "4FftX2zpb5z8hqZCBQpwEEuKb9v8zteSeX7gfdDCbS76NykE6jBn4KBxCgf3TEa8rD4ivrC94jsVijf2NzDjYbSD",
  "key44": "2GmHCGh9dzaAsgnVBiXtW9DVuAtgYGSPDanFfAQxmfWsF1bJnrVSZPDWtjGgUDy98Ck2UbFNcGxxBEmZRUGFWzHB",
  "key45": "3gKyU6yAszvpeAGkLHvnvhqpe4XxTM6nAYvdvpCmUe9RtK8YSiKq4BXHLzcVmqR633MHpxJAUpLNUY7BkHTCZJgM",
  "key46": "3Yzmnd898xwx7wjVicVLeK4azuMCbTX6e4E21EU8fRtZ5Lv7DBCb8TEqKD7TsLTV15J3xa4BbBRyqYk89BHrgnDN"
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
