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
    "dfvEtDDCYBNUsdxtLd7M3SwuU4FToKeaRosUbA9wBGF2vpiWF4eM9eFgh4pvagHPvdmUovUitdTQqotdCje23co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDDuYHYg3yRRoD8pfFbDvZbRB9atwmcSGn2SjsfP2KsV7SZNP1QkYrCs95Uykhg3TGP7g3d1tVomRCb6GNzZDKe",
  "key1": "5faoAQwwFRdfKvHEANc99GgouUdv5Tvqc5KGCFzvVnZ9TnvPMYtNqnxKJNziWzxnCVv9AmGPcMYmHzPMd22kb7i6",
  "key2": "5u5yRC48CG5jA345XteVf9irkPywq7hzpsj1vbt8cu7oSpbfFgsyRNV99yo5WoP9EzFzrNXsW41TorZXseRUskYy",
  "key3": "4FPR475iLodoYaAhwFxtzcF7SPb4wSZCFss7jtBKmVwymQLAph7h4ng1SUn42JhNX9bwcbYqNqQFTnSuFjPY2vam",
  "key4": "4KRD6FrWSWBrMQ8dcThWyivXtx2arq4mBY6Yu8Nh8AK8CGyEvfdKBZ3rBhAue732PP6SWpRWiPpagubVcwBwyXqf",
  "key5": "5gGy3uv6m7chfCxQfmszcWmnyrPtGmyohccaS1fYFQCWWqWH4vJ4gD8QjeDL9982tgD2BC9wupktYbC17vRD87Fv",
  "key6": "5Dw87i8hoYBvi185yrXwneNb7osBnFAcsYGW7pV5HdRJLX4LuxrYpDdTQazxFMW5RP9DXmkgG7Dr4RBKUFxTsAFL",
  "key7": "2y5RCVTJeYFh1QMVZ2ZZrXWYf54PQ1jy8WtCnkW6Qb8sbmYFBTSPNmEvDPKr25VjcZrwWbABsABtSpSkj3QNHdBr",
  "key8": "2cz36XJSU7yUsZoovkkYZrhLu67EogDnGHvn4hLR7e4b9RYckrmsAVgMWfsEk5vY3pLsey5aCXiNNv37xfUZ5THL",
  "key9": "4Qa5Fvc18P5MMXbJDnn4nsns7nmYy8D6ayxqUfKbeXvR6dCjGWzNS5FLn3a6xdZDDL1VTXCDnGo7hQeQbwMPZDPw",
  "key10": "fnBmVmusZ2iaW7vAeXYnf5tbQcsX8NkqCkUe8QejSMDKAoiY7Ln7QmUJ5zoYKZCnsTCN5A1PaX1XQFwGNU2EBmR",
  "key11": "4Mh5ME82oehdKAuqMpMEUHdmeEzi5uEXVKwXEm9wW1nxKbHfefquZKDh2pTagaT5RuLtiq4BKxE4cgDqaqibJoFC",
  "key12": "4HoHBLNPDZXaETUyownfLVLwDyXtfMvGb9KMtXkm2oB9hXhbHNeZF6CNUiRpJGjms65p33FdAUop29vfzWeQAQt4",
  "key13": "5B59WTKWGn8VfdGfC8nnYxqhbFQri625rNDvTbmvuF4aosRwUUNRxwsqrHj8JV9ewbuGXWCjCiSxDveURhnJbty7",
  "key14": "5pR6X8gg8HEwboDbsufpxxr67SL1m3nSpspX1Ep6ce5CFWVgtvkRKQJvfVkg7MNqtjQsQ8triWhiaHP3xekfBG2R",
  "key15": "2uVDjBnDDzmpiipBX71pVqYgKUZDYCU52MGPNaXPhfEmAA9FHno1cq24i3nXnoMJjcg296iw3KHKCugmT5oXzufZ",
  "key16": "3zkvgD8xcDRj6kD3oEefeJAVze5Zeo45Eai2dYGzT3Gaq597PWvWtLjBEyhHfDresh1PKDebHqBbf2Q1xSkPyWj9",
  "key17": "5THSnLqFgKdFs1AwbNK94hzJGWX981YKcUJLRnFHjWQ3hG51FeYnyhGoGtUMx9KbdqxoMcFmw5JdyoknuDNB1Tso",
  "key18": "tArWZhyvvsFrxw2vHu5bPAzFs8fCktppuLwsevJU7ojGeuWpnyPr1f6QzqZiKTm5P3VFV79iDg36H7GAxumzniU",
  "key19": "LFutUMUV24PqNCM2arDCpPqXtNSK7cfgtA812RRxN33mrD9yaRz6hRNFf7V4gnSxPF3CKPa3bS31pqFDHKy8Tx7",
  "key20": "JGmwr3Sp32o9VWzjUQEu2FUg8ALgrSE1dqupSseFaqLpgwAV4oEKjNvLzos74Vu4T2iqwo2vupiKKViBoVS2sEa",
  "key21": "4dV1gzDcLqg2Vw7cedf7yr393qBAXg3LsyNNANDMrt57NHmFHt6iE36TYExZJqELN7rvdH7kv8a5e5j6pJAAxgsR",
  "key22": "3XYmp75Hci4DUAdj9BDrwvj5kYqr3bRx8h5cq7XqNREsCGGUDr2pekVgcawsvTg9nsLqAqBCHuxEegkWVovt24v8",
  "key23": "CHeEkTz5z1vDscqqRdKmwxcTYzYTaCLYfFfcr6KJeTbiohahZFSJRhyC8eUyx4V4YZQpU681jMgfkJ97wvUTNj8",
  "key24": "5X36AoRXeJWhxZg8cFv1bmmcXFffZBiNNtQ1ycFb4mwVUgVtB6TTdqEmgdPWkebAvwdHxbwrmBY8LGTeBD8AKcp9",
  "key25": "52nRfvtJyTPiDXnpo6HxjynxrRYZqeuWFbCsTDnW9uaPNSVMWXKqK1FP5fU8AxTrraZjssgq8p683D5sbB3fjcuX",
  "key26": "2U4CDpYcseTY9e2gBNxjgdAE3jD6X3ve5v959dGWPQLkcXnWez9ihGEoWbjiiEmK9gE4Znc5Y4qsX1fi6qwSZ3r8",
  "key27": "62tGRAGfupQz4Kit1GYo6MCF69QfYzo3PuUm6QBVqxUrGQs5djTNKnsQviRoogTuByEcbRb5uHjLqcgRJ4yoaVS3",
  "key28": "2Au7khahQ6jb5wpBpD7XZ8cGgV1eLuWk2qffYoA3maUPDicRVbP4viCxCfFQEfvWc9TcNnKrSaQtpGB5DcxVVPvF",
  "key29": "2zBx38N939q2BpohUcXumo9KTTJgkZuC42UkuHnWvv4Nvf1rqFVF9o4YQx434P7JJdEUMg5FwgoiBfTknP8KEZUY",
  "key30": "q2fxxrvWKrS7Ha8fdjJbr4qtXfWTtSLL5Xw8arfoEsafwU8mFLnmG769DnFnokdXf7Encj7DkCYzdkNiAuhhcBr",
  "key31": "5qAY1p9wVU2o9Eh1Fe74ca6tq65UpibeXhDuBsajRGGhsPypjkG697e38D61PYcSAbyCD8hL9mFXmYj5qBzdCsWk",
  "key32": "VEz7KVBkiNiKMvEhacg8CkTFE6gGSBYGxwwvKYjTQZMJ91qrM72PT3dMqL1qAj9zWwCNFpgWg2Z6tuUJ4qqiCwm",
  "key33": "2aAzGXr1dAZuvBMUT2gVuoE8RhGmzhCdUdpMxkBAihbwBTyEqzWaGBMhS8DYSG3wx6AUvoqpwqwrbFMZG6oPCiGw",
  "key34": "55gVFuCTAvt8eZKw1U14h9PoWzWU1p6Kjw4dzgKNoJLzWpANQettnrnx59kKQKDAFZTL8wP94UoxkK9vhvsAmnSp",
  "key35": "3xevLFp6D24pAzk8JmaSPUiQrDyVU1C5Le5shQQXT7zFMwqswtS6isTxMxYWriKooHJeWcFA93w37oEfyH9kmKAm",
  "key36": "5w1veSGnn5hVPgnXPE9SBhnnHcDendnAfwqsYAKxWbZ7qrharz5fPJEwbpQBmY4TFBjzbpJrn2ZNUYTCx4ZNT2Aw",
  "key37": "2RDUxJzdUxPHQ6mLeMKnjHyEh6TLotVeE3uTjTSGDAPDyxWUWwcS2Ef9RkA4qqKH72bQKZxR4WGnHcnBCWRvdGpj",
  "key38": "auqd3m1o3MnNZnwG6vZ7oLe6QFfMpNyqBybNvxTk1aFpPTxuQvUQCa5HKzznXfeB89BkJf36JgB2ZCHsuWNfHQg",
  "key39": "5qnbFyXiw3n57bWXveTGTVuojbFhjXu5H23z4SLmz7Yr9P6HiwhgdyYb1ctgLeReXkototFhNs7arskAArUFCPAZ",
  "key40": "4TUquVCmhqeTXrmYgphLA5GuuJbKUm9Szhu3Xgy5qt1hGVixDRq8VvKNnjcGhKE6Jx8fd7FmLG66uxVPk6gaxWQZ",
  "key41": "uRwEuvkMWkG6g93k7bWe5pReD6BokVr9f9CwNa4cTGiwRM4yrLY8xBY2b9xhCrPPQqfG2Kod9gjv8bhCG89vHim"
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
