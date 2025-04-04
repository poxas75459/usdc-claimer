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
    "NPW8cuPU85dUqd8UJskTAPJw7dAzWrzPYDC74BEg3X6kjnsfa2XdQ7dYtv9UjCxaJzrEToiLDVpga8zc6ajXtnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YhMAZXp6iBYu1RiGikexWVGiLoVsHYGiP8EgwF6hxnXTh6mnGryk9136TwN3gsfDqVZwDCbfUwFigrpcdYVAyim",
  "key1": "2fdqNvM1zRXfvAptnoXquhXPQpmPUJrCkqCNYYD1dqNbnzC64TDtt66pMsgRVXLyorEoWMPH8DQba4LQg4RHuTfW",
  "key2": "4RSQA1UsbDA7NRmQdXz23jmYaBvoh1vpFE1AyZtdsFan4m6QuRpY5cQUbbHzjQcHe8PZGxZDzoGrwfGXfR1MiiU4",
  "key3": "4gSxFKALdPWKjAWpcDVtCLS9WMDjJpXuVtZtk1z9emYjL61TyMABQbUBu2TWfX4G9qRQnRupz7WBZP9FQcaztHt4",
  "key4": "3dEdepQvxN2twQ33JRnyfsYg7xep9Hs5ZPiHHQLt29cVpg4TsXjwdrW4ohQicArMNtfpAwdCSAyeHAf7xqpibpqL",
  "key5": "SJ783t5VhKQY4bTtVuVZTGQKi5w3cTjdVRxLbCE5KjiE8gonh6fATaotJdJHvyMAqyHoGjwpTCqm7M8T8EJsUVJ",
  "key6": "4X1vMGLnDBbDLbDvyj6baLzrhLaddNp5BZY4RP9E5cZVTSqUTk9gUPv5WKj8KjrpzokHwdbioTekCt3NecQGRy2m",
  "key7": "2dKpuGpGzxHN3Aet25ACDJ8k78fJiw1mkZB72iKb3jivpoUXoHAYopSBWP4LGzpTDaYDXuLQRcJ6vSjBDDKetWMc",
  "key8": "wKmmgUQ9hvEpCc9ajrwN2r4hYKH1WRzGbXexxf1eLMkrpCe2DmTBDjG5wkmfJdxX11D4ELMmsLHuB1x1FmLYpk5",
  "key9": "4rnXkkWoSnRgT5Tfdvj4upFXAknJ4T5oDSVtnNKKEkzPjGroVvTtmRWBKMguwXFtQD856zv155toXjyPDdY4FsTu",
  "key10": "3pUJCx3fLRV1Y1i8524a2Za4UXd33xwysdzcuYfmyYUT88nL9sqrT4z7TjnttWFsJyAesqUmhrHh7ofeZmyt64qb",
  "key11": "4oWdx4538W2BXZJcS7SYyz2h4oHERSGGcTxH7ocxKGLWwko6Dcy7BvH9ofeZ3oHXe3UmA5S8Enp9Ys5YfJwHznrV",
  "key12": "4axM85PKC1PM74zFgb5Fp5xmRzjHA3qsnEKSu6LbWKWayBXByMNgfSV6XcUYFA76j5to5W4JwxHHyFC8J9pBiQHe",
  "key13": "2NUPH67XDREoX6LxVSqG8fD6AwyjGREvunuLr1Z74V2o5voYppX4gWcPKzaVWVo5nRhXgJUTXNn9BFFnXYKykctu",
  "key14": "R4s3GxdVzaMvRms8ePZM7t8mxdjBGLSyo8rEYMJer3BFTsfCcGVM9jCSfPbphd3qKuG2f6sb4SXPJRGztZGR8fK",
  "key15": "28pgec3K1dgpCTUc3AN5AjCCXCKbRFivd7o7mws3n93n5pCDc2isfLFLAo5dg6AdEiGGYA2Xg5MGPRaAVbXtuzAp",
  "key16": "3khKVfkTkDHbJg5ZsdXDgrbqdqwS4JRdtSneKFSeD3aGH2eLd5N1eh75oo2igsAhzF38h7QJzc2nFBSe4eV7L6ER",
  "key17": "53e7a35VoiyM9bCSgEduXQvNqDVff6mTFPVr23L4JvV4m3GVNBZXefdA4wX46odiHMw7jjR4LsZdSA4WZx7jyXho",
  "key18": "yjaaWrVRFRY281XQzzT7p1ANZkV7HviESdhfDo5enTgpavrsixa6bCqbvuhn2XqHua12YwqA3UKXcgaP6aKvnsi",
  "key19": "FbRxT2RmmwBEnk1ahFhbNDYKpMDR6QkehYKpFmNfucY15aq89NhzEvkKTbCQA4R2sSDfNeGeQYdTDUHxhj3Gpno",
  "key20": "41gvhwTs8q7GQE7PrzqMJ5qkuJ9ZRDLRNJ75VJDrcG6KXbwg7LP5o6z7kF53XhsBqVm8DnFvZue1ptne3nnDoGDR",
  "key21": "4TYnqngoBX9W6jjyGfRmsMobrocq8MUDjvVxiUcGhZSnqdZkExPCxFKB8fM7w7h2sVHTdAykodmgo48JAdNi4iTP",
  "key22": "2DSgZmPstR75ofBydZDFEopLgmV3oqv7W3CMkiUW43zYwRnNz9hwZA77cgrrbyjrf4JvYhyEiWVvsea878Nohot",
  "key23": "2CEhomJAH1frfnG9C84QGcpZTDmncP1wuiqP9YMLe4GTATd6qHurVQEwbPk3tUSWjsfV3xjz5P4HM6r1zHSDXuna",
  "key24": "5qsixDeCNzKLUEDghU1kQXRwQvAhiXDvZVGH2uK4PdDoDNVr3vPTGwJ58rLqbLqRC9Qw8AxtKnDnqkN1DMuct34m",
  "key25": "3tbqZXK9AkpDhguBuf3GE7AjwbJN5m766rXy5MhV9Jkg7czeFuXU7t57dyX2wpXBxWrFYsf9syafDkyp9a8qHdya",
  "key26": "4tPewK8jpoS2UcznFcueYNQF3w96wuhxfn99iNgQcCqzbZrFvxAw2yNKMGTtP4oJmPGzyNHbC361nweAzxtA4eCt",
  "key27": "5LCVwYjSQLB9VfwTp3gbNUeTcFiQveLgCrYjpzh7YiPHFCLnfB94cnVv3vJLzd6Cyx7mKe7XMbAYH3AxtZAn1Pax",
  "key28": "4UDHm36UhBMJWr2ubnfXh7oTNtt62jSvEQPgKWPR7MFdkphAD86MVuUhtRVepBENjxSUxGELp8hion7MVxKYTJBP",
  "key29": "2RZPm9hnPsXitWxvqPVCLSKppTyubcjsvQZSzFiWmTeXN6b8YcBuwmPwzRSE8fr7vXwQr14Vh6wkk1AKB77F6dks",
  "key30": "3ZuSEgz8P4EgwQUNerXaoiGVP1dpeud7zdZ11oAoM3Pwi38PphKZpxPVcBtSchRZen1hozuFajZrUsUkgqgw4jUS",
  "key31": "3emYDT89fD3WACoK15NidrcZmo7EsXpVBgMHPb7WH4Xj67zXhsxCKEYV1x9z4PH2c4iXcrUa9J7ZC6tpKBfsUTwo",
  "key32": "62XTbmMNDLXvrtNFBNcjR5nw1s9x8iSAzHWwKaRR65yij535goaDmzYWKcw4ueZmQRYeXXntEvx4SqL1gDBb1vjG",
  "key33": "5y7tDkh2H4etjHq8AhSfuMEaKb2XujTjWpT7Cvq2252nUXoTffiMoveJZtPuGf4iT1Pd6ZYLPbfPzwfemWLMcotW",
  "key34": "SSSdnpnN5b4kHDLjVwFZavrGHA3T8KfZU3knMCZj1b9Qw5ULggYbd81bGm8xsUV6WQD3cnX7eFeVh4DpcTz5cNg",
  "key35": "7TX8WunMaKNzAF9YsUJ6LKQoB1utGEp4MRF5FYDyd9g19LkRfACK3tQ5my1dRfzfsLhV3Y4nEf3Ky4mfg7LMPFg",
  "key36": "3cYfHBU5bzxLqP86vuq1gFAgv1CuUTGydFxoxC1gWsWkguEnqo36sWRd3jtsBJrNHLYsigVc5E7eiry3edtZtSkh",
  "key37": "wck534VhfoiMtQnea89wkgx8GsWbqGwQgqJfL3L9Lxvz5BKhybud47ptnCoKBzPPSLgfUfun2ApVVveB4UtB6Mm",
  "key38": "3ozKwpbdf4orP1s93TooM1dMyih8GTYgHgPGFUPz5AMo7jhgZDHDZkwoRxAwMYUNJr2749wMN7NcvgkyBsEBuRgf",
  "key39": "m1bdhsma3YkXHiX9bPsTYHkksFvYvZiom1eRJjfvmWN9kqyBpLW2VTQKpXUt3pT9KsJQEairhnVtpsdxBm2pGeU",
  "key40": "66SDqaUsZFXUTVmtuS7QMfT1Aw6TxmmjNNjPWiPX9YW6UwLpXbcF6T9EJMtcSrbLuMJ4syebURGiw5mByuEY4vgJ",
  "key41": "3T4L9JYCxAaG9ReCzSxJCs55YCKiF1wAJfv1sZX2PpikSA24PjthMigq6XzHxyyPLPWQFddxbkMFibHhAkoAQSrw"
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
