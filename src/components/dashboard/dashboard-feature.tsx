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
    "32k9p415x8GMetQYsiQYKYHHLJDXnMa8REEN1knyHMqp8csMeYUjtGGxXW38anBceXZ2paV25n9RqL5TPiVQVxmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nmi4zmxfddmpyPo96i7ewcwmvhnYtZCQXXujk64Xp9p174d31JqJM6BBgEZNUjTnXXFUfcDCqYBH5inPYD9bjXQ",
  "key1": "4oY4iu8sAtntUzFVT3owDxRAP2TWiRL6MMBMFZHEkK3M25JqjecmPL5kQ5H9RfZoq3ZU6KRXQ53v57W46MvCxpWg",
  "key2": "5FqAgSNSsVSmxmJDLLictL34jpwa7SXsM3LS4pUXF3UwKYPAukqjFjK1eg2L2jihf2gJDHsokL7kxera1HZskUgA",
  "key3": "5vM25fRwfg7gugY7Nt4dmmzei19sJsMPdsLf6ZZe4cWyr4kKdhM1QPXHk34TU4gXb6gbXUyyJCSZK5xnAeBzmYAw",
  "key4": "2k1D9EQS4nEtbANe7y6j6MKkixm9kDx5JHGJxigFqMxgERizCRNXSTmB1h67GhReGyGta2CSmhpdu9iNiGuNFHpA",
  "key5": "288CPrjVfZi3DdxZ4n7nhNUeV6ewAhKx9gh6U8uqtHdDM5QJ9NjfdSRHRXWPe1iT1VjSWRa9zM1Gnt48crmNtFSx",
  "key6": "5iE9eq9bvj1wepwDitikMhiQfS872UdKgyDPYxZJabc1SikG9U4hE1xZahn2JJpSLKV58wme2umumWWq6Je3as9W",
  "key7": "AFjFb68hJ8JKvEZjLX82iVuxKKdwXZ5viU52Seg3WiCMG33PNhQRRPydnnxpe9zRgR1FjdAW72UWcsqUciPcG8s",
  "key8": "61LD3PuZKZkgiqnLMyRmRfxLkTBdXBThrXQq5Q8ejKbGMA3fRkLcw6ddwe9Yr1FmhNXCUymioWTik3X2dgem3fMn",
  "key9": "u9zLdetavLhCtPtDaYPKSbpGPDTwme2iFxkj76qNfv8JHAorEQYQs9eW6wF9mD6PnVfCpfQnH3aC6gLi1b1FXQc",
  "key10": "3zh1uTzB48onmknmCaDJmWpfNoyH69ttkjgy8S1gemSLgt1uGjSodVcXgBdT2SuweYbct8h6NJzHu4JEYAPJk1eh",
  "key11": "2NN4xK9EmrPkpxf6MBRw7pxjk2FsxWD4ovNNBC4ELc4DPTfmd2AcXUCMKt1Tg87Txg1TKD76bUqbgggVGfeH91n9",
  "key12": "4RaTqQHchmb5frH8xke9SchcKb7NYnLyiar3KUUeM2jzJHbXaBiNVnsB5daBhZ7Cuf1Q34DZP9a1ejJ6qzzL4LYN",
  "key13": "4tCZSbdrakaqLwtLRXrBmqsJiFnVyGQeQrAHCSZZrv8MMwLyGJZrSwN28Noj4M329exgRUWEiiC25GGS87XCwBsn",
  "key14": "hzRPvqxQVbUdXMcZDWjSqcMjuWkSUz2yAkLDC4aMLefVgcDmXeAY2cz1kPTHh5B2keYw3WD7Uqqg9tkGuaMc499",
  "key15": "3shFPygDkTHSL2ebrSPqXjtNRczLsgZ3qsjiESQz6U1nqwCBYEdoHGMh8TBjYLiu9GS78zR28eJMMXP3FUacSCmo",
  "key16": "A7fhc7jrhhC93DN1j3mxgwEUpm8LUzKv6cWK86q6hLGAVtEnZS7VNd98Fp4FuFewnv9jD1TxESs9orHU2zBinZJ",
  "key17": "5hrmwSkiagZ6qPobD9LkwQ7PswsQ8DLu76ZyttmroWTdPZWcYjsoEYVjnh5WWQubPzbripCgAzVAG7QbVSSpgJMX",
  "key18": "4uYBhKswCjrVVMZHtcAPwnNwTeLntaLWqfhG3qhMBmUCikpw5PCS9WAZtshREuG9TADZh63JM8dy7ZPRr5GHpFad",
  "key19": "2TXjoVZrRi9mxTcW2SQW2WQnWoiQkoay68JrKKXFQwvqPNLnpNHuWwG17s2hxE1KsY2bEe6AJsR68cWqVGKtt9uV",
  "key20": "5ZUn2fTKpMhmJ4uCzdocFQ7bZeWXuu35aHtGoaLaLmeF9vNeSEXUfmdTHpHZuWrc2EZ5QYT2eh4isRQ1JLwaZMdd",
  "key21": "4L4z5jtoy4N7KETdaDbUsdLoJPfxJKKdKTirQSEqnutcfcEe6ySiEEUL1DN845MeRhELN7VwbJmmYXmkj1AuiikE",
  "key22": "2AJghvrJqWQu9YXErC7xdkJXLEY9umLvkwY7FrRC1XcfaBAaP8cNc5SScq8HvXDi6TRG7tqdU3DAGDi4nTpGdpwL",
  "key23": "5AZJzFt6DtCgyCJcuMzSx23WiZ9qhvPB63B3VBXPAHmySv4dMDg5gJcdSb187jRkRtNBe6U8GQF8S9CcV73wqY7F",
  "key24": "5gUJ4NTYZj6WPuHF9HemGaMe8pk3QqjBKtjfAwdoQ6hug9oSr8s5JDBcR4LuPi7rboG44xR2eanRcXm2EZKApAe1",
  "key25": "ge11pT5AZvtrd6RYY4N2jFoL2XtJceQaT2F5mdLa5s1oWZxNM3AyU7FWh2rHX5tPT5hZEEAun6gLkmneSyLdemD",
  "key26": "3KrXnPsKp4xsKvKVciZKcAJPEZnCeaLFdfDbN2FUdnaXdCzJuwU5THA4QAyQFrrjkxq7E3VsMMN6DPraHJ3S6tEX",
  "key27": "2ay9FJFzukdozFCTQit8ix3FCaiW9UDEtRCXNEZedzpwzmC15QVZBnEe4c3PaEC7oJ8fP3KpNdKYnQSJLeU341qP",
  "key28": "2mVwj8ixum8EY3g2eFv3vPESjQy3vXWTe5JyxuwP1ScxaxLz1PFUU5khrVmonmcRuF8D2AiTPJ61rJ3WjuBeJszr",
  "key29": "5EfPim3CkkDjkSxio78oXH2CTcXjUcsKFtiGrrZ5iGUdCiDTQytCMHPJFTkkX8XBuSTJtJqZ5E9ahyW39x4MNNJc",
  "key30": "xJCBxy1xf27Jeqp2YVtiZk4tzNk3CvSaZGqXHxtV4J2K1MUmc2ynEfQBqssAiF2yY2Dzz2roBTdE6VzjoHh82yt",
  "key31": "dm7sC8Y1xR32LE3MaBABQdz7q4UkepxeRyNxKL379oBJQJc4eF5HS4PStcMWprZE5TesT3KgeGTo4NYPgx6Ce8b",
  "key32": "652RGxpv5Ee8NJikn7zzAjosgZLpfBHiBDBG9TZsFcacDZ6HiRErYjyad9mLLuW9jpAKnrz8dyriMHJ37jPfQYyQ",
  "key33": "3RSByNBeeW1krYUdJv7LMGtCK4ZocWnMNEsVHSUX4PaHQ1LauMXCST2rjwogGkKgsVHc5VuVJEFcpzo9bSe3jjXP",
  "key34": "35QYBxGpnTaahN2JKgvdRuxKG5CPqmf2Av6VmtWoAs6XQ9wS2u1ycDnUFtcaLS6J75GzcjBABfSKGaEWXaZGChi",
  "key35": "3PY7gcGMLX5PY5PjT4o75yrmTMkgBhngKeoVnESVZoPTD3F6TbB4L7TMqHiqtXgj16jwdoBnjzCpCLofWHVE29mk"
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
