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
    "447nTXhq38W8wGV8e3ZAskF79AmfwuqszQychyWsVsxXaoPWYwdWxjh9bTzLQdweADo2ojAwswVaGcDvzwGtc4dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1vyXkEjBWPgibqiSyXLGo1j48G8m5D8CcpzB9wQ7BDPVoyU5oNYf62cDDPWkr767srLF8gTtvpYGV7GbutzjDEX",
  "key1": "2fbSTmphVPDLGM4sxkitcFsP5QSNounnQezGarQquf6XwWTdc9zBH5Zr1UfMbm4tuQrbRzWSabHVXGZgXtYYg9uw",
  "key2": "2mRNm6o2o2DdWh9vJByWP7PYJNFoHGC8pArrgJ8nsJrJm4varyBcNFbBrHVtbnP5fKJVFt4LHqqdL7bjWGgvn42y",
  "key3": "52esYEkgK8xEBLsqLbtXryjckPhFBH8tiEqpJ4iYAUxoBW8eiqafHm8BHAexK7kEXJgC57Fgq93YgzCsUVWGMPL9",
  "key4": "3R9QwPSz2F9RanKourzvQkS6uNZ6BzyDirpmMuQwXZ7KGNERD4Cy478fYksbpbsSBvZnvNCUNwhVDHPBCJbMGFQ3",
  "key5": "SksXpFMXePcZZon1KXCNkzFPQqzhU7LkWe2go2czvSJJGkfeSyRKAJdbEze66bW4CQaXhpTRpJGSNBZRXEPF4Wt",
  "key6": "LPoWcpUx1RFVueqnrRaUZGm1KVxGgMhRhn6Bt5EKP7Nf9HALbTQWDBMRk6rxjeRp2UvG81LY8zHJcAeMSdU9byu",
  "key7": "53JF3VDn8B2WLMjnPW9ctiybevUJyj1TphuBRmhmEr3Pn7C54hzCt7g1YFjBPVS76EiC3nCCRT4u3pjsG8EnuWn8",
  "key8": "Csju2DV7G3zjj3rjp2yyWecLzn2UZVGHGV1LbLjuK2A1WUZZTJdyjrNUf1LH6SqMLxgw6Jm5nzqPrjT3xpSva7d",
  "key9": "4wN7rBdCyodjLCo3uCbWj2xERjNYGWbwiaYEQAx3qeyssRMFhu5bh595j1v8jvf2NL61gYCu9TcKUi9NygPUq9iS",
  "key10": "3QBZME1p4ntZnbkfYrQrPRdup133txJJdTnFrkuJJQNGG9j5TBafd3hxwiMVWcsBLBavvxZ51b5yer5m2Vjh2Q3B",
  "key11": "sE8LwSwnXQZZ47dvVTeSGkaFuhjsgi9QqssYmVEre1NLM2MqwLAj7cUnNn9mjt1zPPRYaAWPTKqfhJaewFzSvBs",
  "key12": "33eHrGwAxNT7gVE7xKNoPhy1uBYpbAKUfsvyb5ue5ULRAMJRztSgYmXKgtQQfidGzsp7R4poNxwcDAiJhaKuUSpZ",
  "key13": "5esUJUZLAceEFPNeuvVKyTJxdQNdEG8SsCVNS2jtpDBmdmegZ8D2rAcPBBXuoHCnZtrS6YUsEhsgQexz6rpE2bmH",
  "key14": "248HaxSjTa5keeaKQnytvoqsqTBSb4r51eoxgDPnTMXRTGBwUPBpFn4So4L8yiw2Pc4WPrZAzAyuMcvoM4iegZSK",
  "key15": "2ZtLJQSUHo7QCZoaMt2vW9vruwpPJ1uBaVr2Pasv8Q16HQj13dBnYsS7nWMaVP4EjC6xtnAZGrG6WsYJtru3VG8A",
  "key16": "2TVaRUYndMgQrmzqM95egXasNaAeyfxa3ovR3uftvLnjSMmhyoZC3kosjXfLoanXdSd1gUSdphVcaDA4rwG8YLnW",
  "key17": "26JJqtE9unWUkKDxN1vvMhogspw821XBExFMb3t1UDvEZ8VmEXLYTfEjnhebNpHNHfAzhy2aY7eQNJHsGsRqH6sV",
  "key18": "2bbRwPsA1ZYbRBUcipZuitZp5P9ZrroaHdbMf2FKVBvjiYnLE8Nw94omgwEJ2o7rtCfr2uuEFQHa8kkmaUXZqgzC",
  "key19": "3CK3fwnrfzwzj6Km4oMMcUx41aNKNHtxikxGoteVaEC5qx6k4CEZE6EUu4dPA5oR335AYndtgNXNwpWM4tXVscyD",
  "key20": "53Vi9TsWQ1pPVthANRHwA5hz7ts3ynLtuJFt1woEzfJMByXFDBCEoPwhovsRVuStq52yf44zfhDQF93s47YpHJe5",
  "key21": "cZwERyg81VnCMSZw2N5LHjafJeRmnFDmHJaWE4TeDUtrEXYGTb1BuSz3kwjDJS3iBrMhkdezK6sAKoaqV3i4nmV",
  "key22": "5w7CEsb2ZRD8GEEMTSACfK3mXJ4qfHrHChbQ1mTkBuTo6WkZgLPREo1dy52kEEN83ucXvhe1JS8HRymm2t4qW4zi",
  "key23": "5Bi2sDKGNYnjoCBiJoQC4vGbo4kvXst91uCPTtrfqyJbe9KX8PT1npHeJFX48CEmBUG4ZGTaDfKAwdogQW7E2Sq2",
  "key24": "dCPRpDLBQyATFtawbi5qAtEEENJF6CwE5T2Erx85z5kXehUsrPAsaEvfdZQG5p7gTgzaJwC7BJ7S2BGgtWSvACR",
  "key25": "2zzu5xUFodWSRFaKwpzV7yrRfxjJLwqPm2DcdzeJmmZcZLs5F3iAY7c617KNmTELyiEtJmPTmjXeM9R1cW38J7yV",
  "key26": "2TFEsCYUxiLdvZ4S19aqstnnpzPhTYXy5vE7HyjqJkpiRy3ijQ2AynQPui9MRSfsmfTf1AjTkfEUsVnvMa7mToZh",
  "key27": "PTj9ZZqZczwVsSkNPwsibtp6Hayu9qUpgS6mr3poGrDJkpVaNc5oEApdUK3dBfRUHmLuqEtQFi2ZeTB4fSmthFj",
  "key28": "21qEJYCqdAXwgge1dcbJYV9J3c47QySwxPXzfLVQpcSBeAZ9qUbvimTrDQjFPywnEFofqnppc2JR8Frgh5oPZ6Xr",
  "key29": "2Yds5HJaxQuTgGmwUuVndn91XH6rYZxKDSR4Dbsz9yQKXK4GbEnzye7aBwvMsmBAnp4gwqf1kevUJQUEuGPG89QC",
  "key30": "2ozABUvj6Yow1nompTonUC99TC1iSTnFKrPHxu1b13vQZbSiZAuLodCk7obEWwRMi8PMEsxBW2L7SkG6sssJy6H5",
  "key31": "2JCxcJyXW5E5wjohmoqH3744zSqeP5NcxstETSXcvaeZkiQ3dhSrZrimbYGgwyBkqN2MKMFmkCxxZdHjG9JH9ycA",
  "key32": "3baXtbfxYVMPRuBjSTyxow16qiuvURWgMLxWU4bDCwcfLdrtpvHxRADwpoy8nRgMGabxAa9KnAxebztgmkNfLqQ9",
  "key33": "5h1jEpjAHr9Pz4cWmEzFZdJbp1zkLpFJsDKnxWu2Eu1fyrNNThjtM1hT8mHwcXTxXNsegnrSXeim2WbsKgo1ob9m",
  "key34": "4HBdfXiyCkUTJvuL8gDUHzVueM2UsQLrmhppM57ESRKCxq3HufYbGT6nJU7vBnySAmnixQz2Poj6FS8N41M64eNy",
  "key35": "5jGSndBdwJUXDtZi8rFrdQQuiY3Xiz4XzXwfyVxVFenvE6vAjSCodn9LMVfUox4tUC2pKfkJbQSLji4CVrXhTStj",
  "key36": "5oMRNNnHTjkNcQNtFkFxQSmeyzX4nt6QKf81VoCVUpLghsgUrFn3avKpxAph25pdLNzNsCrcEtFP5EVu2TmJM7hc",
  "key37": "2px3CBpF3LjYgBb2HTb3cRvHaCCSexAsC5qwUvjZswDApZ7ysZgt5e7pShQ4REjF8iKPSv8vbfqSgn4ZcUQV9AmV",
  "key38": "35TGWouKWWuR2fzaHLDyPGeQTUkc5HnRYsfvtwuNVfQinNdteHBPU3jarijQSavUkZFyuXtmg1ypZ3knLk71cuYL",
  "key39": "2PjocARAazh6QJZWcUjAfFzounegXzzgAutCR6RXxUp5trCK3U52cs3xhHjhMhUiz4ojFqAUknpLCJPfpnuBNPAV",
  "key40": "4FSTUBNgN552PyEhbGgx4ouzhrV31TnmnkzgPrbZnpSCqhJxJjwLg9TTPcwMYhGYbiCQ7Mc94AFqoRtLMvcw2V3y",
  "key41": "5LagLTwsodaeyPPWtMNpRddj8uVcjGx8WDp4qht3y18Pd39a9afrEwndXVu43Vcntum2LmgcFdaa1C3hp5H2nxN4",
  "key42": "2CZDCd9cLu8X9qksegYhDRKnaQ2jMWAbjRTWz8vpQtuG2BKeJeE1hySEFJgAEPay2N4yw6oATMv7nqaCdFMN9HiJ",
  "key43": "5RWJparQoYiy8VYTNTo2qN56nzKAFoQfVBGAdqp3GS1sjcnHPvc7f8HqbXfQnwRnLYz7yw3y8UFwed6MSJhLA4YT",
  "key44": "46TgmdrAgMyjXdci1mdgG7fkvPtxN4KXxoseQsUGLeSaFT3kNA8HaRk4eiJVkQWQqQFT96UetNR53TLmV8PrzqX8",
  "key45": "4JEUdFy6iYheYc4qvvyYxkbCw65hF7cXSLcqUw6WiECZs7tbR2V84pJ3R9n9Wgsf5LwGAsrhB8iQRt62KWAhPNHm",
  "key46": "5bWN5MEaEtuDb3fAvGMRy1hk2Vo1SU97e3Z1aSQWWHD353DZah1FSmZRoN1f6DuLM7wXVWew8GJq8w7ZYaARxwLv",
  "key47": "3drjbMw4LKH4B1CJSxzfRARMA8YRYz7ZJMhoS7f26hJBwPHCYWo9SvjJeTdHQ8Ma28kmjf5fDzCGpqBiiCGaZPKn",
  "key48": "4pLeL5RGiwXoaU1YNF2WLxeSXtfUXBy11UwQsk4jg4YUyMHRMX29U5p9TwMZRddYqPkugQcNAhewbEAv7XQnnDmh"
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
