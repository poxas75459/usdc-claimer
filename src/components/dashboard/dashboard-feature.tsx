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
    "3TQPY96evWH3coATUsMxXr6M6QbpbirpgkPadAqBmoLysatw8d1RxpCoipFH4mX5pZLQURHivnbkJSfEmPYFc1PP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZEbb3xSgFkMPVUeMxXkAKJB1r9mbabwva4gAEtCCnWZLCg8abLZL2JT8qfxi8c2FPvYWv4EentrFnid8FG8qyQ",
  "key1": "UfyWAC7xixJkZ15ncDVjtxd9HjYY4sdNZa28asmVPN4o8LcVeYdpjsCRhWaowosWmPNnpG3Nro7EpVnCVLuFXuF",
  "key2": "4onQzzVzYboLLSoYY91Ad5a63WFWKaYCN9b92rpuYvLsa9Fwu3hRm7a37r1TersZJzy8disTX9n8y9QAhNe6xSCq",
  "key3": "4VycQSr5EcA5EmbCD21goy4qVELACs3rgCkcAsiRYGYDsmXNU914vd7gAbznnbCLL7dD4eBcoB35NrbcqEGvrbps",
  "key4": "5yKd9Q9jzryxiEJf3JAtrZq1fuEPWNnfSjdtSSPDmERYfzrTwGqU1XGCKFAbBYnsDYo135Y5fZD5QYaQpjXpPrPt",
  "key5": "fTT3SjgSp3A6JWzoEHLaZ9stpo21hPHZmHriJ1iTbjSno8mAQfWSHksEGVsKgfSMufB5TN1DGpvwNBaodwf9XpM",
  "key6": "564ijseXKZzxAer5WUA2snRWGsFNsSi4gr6mV7FXnyAepbLdNezCCDUG8ee3wD3zhwdD9rQ4Gid5TLomaU7CeFKy",
  "key7": "5w7NMrvNS9JQR7gpeLPW8tj9CSZ9fYYCLie8nhuKTfcWHjjUJoFmj9AqmsdaEthU1fWBRYCB8QERHPJFnwZLZkyD",
  "key8": "tERPfEMdTuaFVNdvcNANf81k9cghXv4U4PMWRpe7V5SmZGdMB1X7gTF6gECzUkEfQ8499YwdaT4rCUTRnFQ5Q9X",
  "key9": "3ytB1EvdrCLoVhMPNEnF89s1puZPSS3KUXWG8qfFqXxci6YWegfV4ZSgKER4WDtCgNhiWvDdTzN9go7QppUFyXr6",
  "key10": "4ScMA8CbdFeSBPzG23ny2nLGvNYgd1yKeQnAHhf3tkcCtLnBZrMJJbFWbT6W2c5fupYtXWxvDYbW7XSsQ1cCcjUY",
  "key11": "QmS9WzZLHifNdxaNaBJ1jXFVdFuv35RtBQbPa7ZBuEpY2AfXey3YhAgtdzZFSipQMJaExxcw4rK8B1u4aLrP2Db",
  "key12": "34s3sEC8rrbzU4Cn6ZPNmCrFQx2nfgmk6h922ApH6L42CWC27sRtKzT3is1gQs49vnjek99kbEjkVCSMQG8ZpRXn",
  "key13": "2BGhrLYhwZQez9duH2atSzPRogZsKpCAcdYKqJvanuQRMLWrwo2Zs7JC8hk6dR1eSZNYwcTT7ouaiesr25yy5Hsw",
  "key14": "5LoGsKDPi9oKzcGUKPWJujJPSvrnxNYWL3q2h2eA1BTKhvavNxmfsCg1zY66vnCyUkGVjxN5ZuTrjAFd1wFntY9E",
  "key15": "rugDNcGNTCFHADuhv8zMFErUqQybdEASwE7QSr1MXBZt3YRNFAaL2AUnmYgsWA4Nxk4Lm4GBH9XRQmn8XQ5hpaG",
  "key16": "5hpaPL2LgmKRXsVyLxrEZ6wXXvaRKpQKdNNjVxqSAJNuHzHLTpu3BKdqFPaK6nZcwWsntve3bF9s1fWY3nKvG9V3",
  "key17": "3JdbMoUb2L2q7vi47N8Cb7Rb7VZ6NxzDTyQYHcdDewauXkBHPS93Gco3o3kSFeeSotHoaroEyLFiDKqqVyBgdnLf",
  "key18": "3XmYoksUbqT9aQYHagEUUhb9gkePrB6wxeCa8DjNoYsQ7CuxfieDHNWoL7qGEhoNRvJQBhcR9HNQ46TULZRgE8vx",
  "key19": "5knvRsQdWfVTqpdDizm9Mmn8NjATK87DjaunKam3ppESjdgianTwmAYkYXzaX1rv1zZEaxHqHjzJgdC6p96kXM9M",
  "key20": "2Zk2aFVPfx9xTxj2UBjENWZb5AyaJ1nGw7ERh3K99YhB5LJ74TnMks8pqEVpz8FVvmmvAGkXyLuKAbq9WpKpCpPZ",
  "key21": "33zyRAC5UxCPwmR4XncEHPS8FTXin5cNEhncrvUUYRZBzt1EvjrUPyQF9qZXzZy2b8xtVwM94mJMLCcBFNhE5ZXu",
  "key22": "4Dg4WGaKVkY8r65uaFfeJHbRyu3yp7kXZgjjXq6p7juPdeCAWS7X7La21h3rwnfJ8giHBWAg4ommFWas2D2Uu54U",
  "key23": "67nG7Yg7ozbH1GECYJfnf2TiyM5ZBqhyYwa7fyd7KhAefamQzGs7bEV2P83ZdxupvmkFG8J69P5iwnrPV6g6DxB9",
  "key24": "2YcZu7EiqSEHwTDoNYHwExfWL98FaGWDxcr792gzBDqupbTFckrPXhtut4Cy8nDt9hW3yQd9a9K4DXh2Bcv4o4QW",
  "key25": "25NT4M9mLbKUWkJmnr4E5Cpzfg42vKbcCL46JkadwUUVyfgTEfxBf1HrMfhoc2wgWRuc2ZWfkU6vH6UAkfZQDKEV",
  "key26": "h5CewvsbCjmSj2CpFFUeVmqCxnuYNwF8xoxPggXfWq5HGSTo1m1mZhyYR5AxdKkLYBfyrW6CFS1QhC1gQru9NKC",
  "key27": "2eUV8mGegFRKZTSMvkBo34aq9Up75VXQoVbNgamdVuP7qLPsZoM7HFoaooN7TifdduwqU29VKobdcftBtkuKtLUp",
  "key28": "2aW5i3bunNWYbca7SbMFkDKtXvoduqYhGEc5DyPTniTSfa4V8SjKqUfwyCeymVJQgPaoPk1n7uwA2UTvsHUB4dWW",
  "key29": "28QY54JGKUgh2G94gYVJcgGWyorrevH1tJKdHxkJTdK2MBQMbrtswsVpjTmYHVhqebeVcbL2BrRiUiT3wFd2xFYa",
  "key30": "3iD1v2JhcuKdgz5aWUzHrGb7jc5XodsDpmgFYNeC9J5FCTmUoDVdrJLYcXzA5ks5WypkZfE7TLr6cCr924F45ot4",
  "key31": "4pU5CNaxKPKgSkZRQsn85LF33vvktA6Ztf3qmdqCX6p7AybChEweLQH7TrkftF1ihSGVExen9i8tW97JKvXY5AwG",
  "key32": "5fg6Mt4CM9hWT9xXqA8nXX1r1pqNbkuuEScuWukHrK7HxpYVXZFj1tmP1cohsmU8wxXBhebPjcAQuDwSY7NQzEEe",
  "key33": "ndpYJEM5tKXGuitpCELAuqwtiw6zaHg4CVhDqXin2PTQYS7i5f9m1W7gnoeY37aMXDi3yosoj4MV62dt86Kn5hS",
  "key34": "33i6a1Z4LjExqYXYSiNjXuLHwVX3i3so81UKAYmUkDvSZE58YjgEZwpiCdmfC4y34hnGa3RaBx2gPY3XMAy1o2XQ",
  "key35": "4NvFNW2ZGkTh9yfyqYewk81EmCibtAmMtMkmZjsYsnjsHnjywP8bs4oum5wdKRZnTofvMp8rWgj2ZVjR8dg5KRac",
  "key36": "2Mj9HKp4LobVrTPyefEu5JUR6nnVfcqq1sNy7ed2KMgWyLAXTmwf6ZTp3RkHt4T5mDdGTG78ZVBvb4jfQH5GZPtu",
  "key37": "4F5dujXTgRncf79XpchuSG6MjXr1sZgDxFbjcTNU4RD32hye1LRdLCciH9nsFbp94vWLgG5sjvbTyos4BgajPoAW",
  "key38": "4JkDzAxKuZFkGKn5NvQJ8icyKFYQMpGAM5fgYhoM25uJB14tPqzzeBWQVAXYFy3M1j92hF98KGyxV1HnNXkNy3Uv",
  "key39": "5D9nFJMZ3rZcFvPRG2fCWeoENzn3nTS4aAyMMUm8aUCm21kta6ZffEoRyUhSRo5Qew4xMx82Pe5ioinmKEELTvHA",
  "key40": "WE5pA6qnCSVFkY2APuogokLd8yMTVTbnxBZDSMnbuvQBtGHHpyrzY6ZsB2aKj9BvjMcJTcjV15TRsHoksFtgzZ8",
  "key41": "jc4DWjZaC75eRzSRG8526GJA2zP7Rr4HMaXMLGUi3HEipHc17rqt4C83XtFZux9mVZ8Bsa1s1TU7Nwxaf98LzBT",
  "key42": "4MtkSfg4nukEhx5i7jKmAuebk5CC7PkLTfywVThvecfJ6v633anX2GMH2NTLsbGkv135xQujkqbdFkdBa5R4HJNG"
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
