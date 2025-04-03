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
    "33pYDWqg8FyFzkNDegeSWas75cjWonRRN79CUyq48SLLreNwP8WmdnNN32y3xdCWs2Qv2At6rSVHvTcwxPciC6tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9MWyZz4ziqtQVXvtaG7B37G7Ew3gz4VD2XsHmukDcApH9HrJTCikvZNfksmoa9g53vZWgzp4So8gqDqskxWiu",
  "key1": "qzub389GnDwf4NW2gQUJwbBJFHiys2h5dLPvWdvL3teV8pqg688ak6UbgAFMV9AcbtYKbemykrXuHNraHEkdK24",
  "key2": "5ytdpTq75bygAFUXy9nS6NWWuYX7WHy2PBF6ABK2DFfhVkGcZnVaDhZtX1FsmP8g8vYsWBAyQYbnNUwtinr1QxGG",
  "key3": "FAUyvVmKGeUbQwJ4YLAsCUxgsN5apMk72ep2RsdzLpQXqwL8X12nB779DscXxs6bgULbcBKKuro3x4wRLjqvisV",
  "key4": "xjRht54SyiehUy9LHQcxMCTkPWS8XWwPn5WNPHZZ8TvjLAehRbC3h3rx6HWje43eZY894T9rvPdp54YnKVXNZNu",
  "key5": "61nAvew9BM7jwbX18m1iz2pK43RsFp1oawZNPrheKX3B6QEfMJnzxhxNaXK8gkW45wqwjtNB7UDFRN9Jy1yMfezN",
  "key6": "29JtPkgUAJ6KTanZpQMX9WSAXVtwDgHmvMhF3Tui4gXU1qmm152cTacpiDNCfcZ4RLUz6WYA4cyNRixKsREuZSCh",
  "key7": "44e631mGTaQBhwnmmnktYZy9jz17QM1QPmnpE6rvnSExXaRjHGSYqECzAQnmvibMRDE5qDxKk8PmBdmTRZzS7z1m",
  "key8": "3Rgmo4Xm5ev9Zf1pAG2gzDFfKAeCwwG5m2r9mwXJpRb5aLRqJqcjiPSSrUwm9kQW7EpchdWBodLxWGqdiS3octGC",
  "key9": "51B4eyzjnA4t7Xeew3ssw7NaLg5hc9zXGdWmNN38uZcsDEzQRnoAmhHRN3dStA9QFK6Ts1q6i3snKxwQE8vMJst5",
  "key10": "twAZnPvzMAPKM9eUoo7UGCYxhQCsrnJtQfXYQuBdBcCTrnPWu65zj4nrA3gYT9xAEK2LmE9aDyj4rQWaW3CnH4E",
  "key11": "4ZsEqLdjLCWj9etG4izM4geAXTNAvX61sXZ9mgA1KcuVq3mCY8j48xfaDYa7BLAiyGQu9GJsUHj9vT5Z7rXkEfy5",
  "key12": "3o3w6qSbUoecHaPYj4EyqYvHsoC2RX8LGBkPkxV6ZxCsXFVgqUhBPbZp571Ya4A7fjJFFZvJ83YXKjjMda7zYXom",
  "key13": "21F8a4gF3yKdoAgGwa6no2EGJLQf3nTuSPg6ZiFJkPA2r95Vg5agKunTrDLXyPvf7nrxuSGqPE9aQc2e5DxCAuow",
  "key14": "42KLDudEPHYLVqYJ1Qfz5qiH6GjPQJD2j5DQttmvLXPTVjUZ5FSAMLwUVvhNtJujjNRjN9NnPRc8ayjd8g2W5kTK",
  "key15": "3XNiVtfCAG4rJ72Sca2nziwrfo6zwwj9fAu3Nc9rH7nNEiCfm5WgHbB128JF3551r5Z7RG3rAUNcZj27NkbSg75r",
  "key16": "3LmSz5buagdPXXVgp3ihnsHYFB4snoAzTWymuTRbgwy9EVTbf7M87A5iUEsUSLDTMwrgbSTRn4oWoEhSmHmPeype",
  "key17": "2Sjw11bgsTWYexgAJRD8fqwfMtagsA8XwSAsgHySx58vzaNYZAww35RjorjsEcUvuVP226BNcrm9Gv1Q2VYqdj1G",
  "key18": "2Ytx8ALBpAEU8XBk2KbtZbvvkuRusGcL9xyxGJZBBCEuFAcP9oegWMaBz6MVeATA1kA9fGcQk69aGAmDiiDeWCUW",
  "key19": "5B8dWgphdB8wE1R7Vicp6umCcKk3JG9ERhdyXMujdNQwAcZVs8uZ4QfJdDpbRKCzBJeFC1rzvfNwkwmHoiEAQiej",
  "key20": "46UYyBWHS1VDtswvJ228QD5etQsD3LaDYTLzijbmZkwLq9uEqbJj9XKjnMg26EGNTUAMCGJFbuwBJHWdqDU8KGAa",
  "key21": "4w6itkGTmS85eHeWzdenoU4kP6jNNrS6Hxhazj3fPWGZ1oKThjswGoUf5TKTDpis4PYXDRUpcgG5rLh6EQz3nCtF",
  "key22": "55Ngv2JskKUT2U2xj7S4ggo65eNgTLVbqgGh7kuxJZEYbfYAuvGgbrzcvTSmMiB3Pn35oJoKVS4sbANTWNmUVqUA",
  "key23": "53MfHwP1E7ezJSj9Z7is3MxwFEH5UhQXEaLEEiCLewgmDdGhZpMtkp4bqr4wZAWQhsKb2EkkPh921aZegGPR7kG7",
  "key24": "2i5rVCirT9Ks82SE1DLeaMQL2HSPePq6TG7WPEsNYRgr1JjZPeyp1howASbk83zkr6UkyXXr67HmowQBhwELkmLZ",
  "key25": "2KuR4AgZocsCGTMdZMaPPvW7LNxn2GQ8G46kogzQhA6hXdj8L1CFbSkXozimXmW5KHxxexZzBjWdNwM1eeBYe26b",
  "key26": "64ctRvtBzfguqEQgMC4aer1zxdeCiBoWF6YEiQGfJP8B6w3UjKpzPB53Ye1PUATxsZiye1M7AabDSm1gxBg6Pu1T",
  "key27": "4AzwbRoTskfriUahxVTWX6Jr7DfJRhsdCp8h7XaNpJtif4j38uGkxEh98FaABdHAjH6MF2s5Bf3sLgg38vjNRh7a",
  "key28": "351aYtzEsyKPfVRkDL1W93oEV6jBEftXFV2AfZqxv3aNBJA7pqeXg5zZFa6vr2jtxQRy2Ci9ehEBKuhfkeujYBmF",
  "key29": "49qshsHm56gCxaczemFPWxRMupN6Lw8BBNxsRt4SCcqTosetPLPiZPaThJk8HX7rMvWQmYQKDXv1Jjmd6pZcmAM2",
  "key30": "2geomFZsJUJagJQSrAfvuBfyqNsAvnn22xpn5sVyDQvyxZSXM16d8VQK38Uz7GkZrwFksroJdXRBUEgG4WZqy2Sm",
  "key31": "nJogbE1DoFWCaY1RBJHputFXhbDhDC9dnkyfNEva1FRbyXv6YgeeYrQpPnmNxyhR5AzMJGBSYxSCkpbmDnKYjDU",
  "key32": "2LoGT1EDqyM3Jsa1tmNqi7X6hAoTKWEwQqezoxaw6wBn6PEj2PAxX8LyrkuNtyL9JNXp2qLhShYjTY6TunRcyweJ",
  "key33": "2CYBVz3WKXJomxBtxTKdTWWcqY1BPErHog7tKTkwufq9eLnFNCVPhMFvWqrK8dAS73gjPgJNAJCnzwSf1grTkWHV",
  "key34": "Vf1aDkmZ6jADT8uhv72rfEbxtX3yYaH7uHZ95qEnWWPMHSCW78hT4FsqfyyBQvLbaL4jmvRT8KenUFXsSjHDpVP",
  "key35": "5BtBiu3Tm76TPqCkbZUV84VAMrNJBqcWxRXzFW9vtdrmtPcRwnDWdgLphYyUMzYzTzYo1sEi8N8WVX68Pa7V8iPJ",
  "key36": "58rnZYMa8Ch2jejPyYvL8iKG2fF7NbWXuC1RkWsxAao4rPode3Zjuyramgv5npT7EdqS8PPhH6TwBD7S5b8bwRGc",
  "key37": "4xDar8JQayn1YSwewRp5BAtKH5xaWif8uQd41XsmVSHANYfHXxBpAFJhhLdhPCCupConBfduZCSvBHvK6fmygSoc",
  "key38": "fRyzgeoRjD2DKy82QBR7WRHAAp7D6mMKhzso4B8yxxhLoeh9P4CBpvGX85LRNzBTwsLsHLiRgRXCX3ho2DcaGsg",
  "key39": "N1ysAbWZE7BVnGQGULj9W7tqiFmmFPNEVEzveC1V4Q3i6Zz2KrACVtDrG5VugXKq6gEboVMu1WxH2hdmDNmNx1R",
  "key40": "TSVMiGTwWBZMguKFvKDaffAQsZDr9CpiUgyMNM7Yh2MGCUH5ykTUKpa7opqzp2dpTWbL7m3tkk3dFNcD6pnDbHQ",
  "key41": "3DJqTbof5DsLheo2QjqcaR2cMoxuqPTg8oqnYbYJsmYG3ZHYMd3XsHBBG1p4acTUbJyAzqsdBfGCD4yCmHDoDeqs",
  "key42": "3WgEuzXbXSZfwznkGTZ8ytvASX2HsWuCozD54rn8mvpAbASjhLEAXHsynCchXamA7Gvq8KuKPWXU8wCBdmpfbFaL",
  "key43": "3KbVGUoZrkYJtZj4ctTpBZCoDhhRgCyMcCwqRNDywyjXRCnNfPJ8v8EEfCQmrv66T7BNPMMSqRxJrHEGEMDEEE9o",
  "key44": "YC87N3ecy7nKeubVWmLv5XxwXkzoeZvWzUcnXCpNPC1BiGhna4MQedvB6JbyAUhDp4WEMCApU91g1nfXGKBmz5K"
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
