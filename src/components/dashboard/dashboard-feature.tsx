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
    "4JkFXRyZY8dAWAfe8LPKwtnGxwYcGNnqdekT8HVjiAr5nhpxecrGBUes6xUYm7Rgi9ppnSW3hPY59N12EEfer5Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9chThoFLsrSNXxmaZk7ADPsjSiZfsJ28xLYMi13KEVHgkYBoLSC1p1QwqiyDfRRPTSDxJZoegD2DeFudLFvj1Q",
  "key1": "eniawQqyweoNvuyshGJfc476NHZzcE57x9JQi2BSsaN5XSXJEBR1gAA6Lm636q3t1p3Zh8CrgAc5gNjsHrbfimN",
  "key2": "5yDYsjPDi2p4nDhtwj6G7act5vK1CP3EKjDXqAzLhhMqaKVtPnqR7mSZ9BTk9LDxb7PkA6PVzeEDCRg8s1VVCW1T",
  "key3": "DXtnVa1XZnbh8iRFd8DMmfv9GtxhWanEcafvgM3Lfxjp9btRPnnbSsHabnviKThQ3FNh1XRpWNUyCBEfkH4AWx2",
  "key4": "3DYa9P6rMnkXWzZDEG8WRktAJWEjJb32fANziHFpc52gn9CLU1vVJXAeKYZBSgWzKuvc9Ji46MErRTnW3xmdRjUK",
  "key5": "k7ND6QaUNeBwSFFDfCm65wAAn75KGXWcR5Tu9Kgg6kwNS32iuJitNtE9tkqLyRechECqL4P98R7q1oRpybL2FYv",
  "key6": "HDvmivjn32vv1TF5BDswitLoSnaoumAMByeMDAit5ae98XBF6S8WnxSH2PRj4GsWYbk4sMneG8CEY9gFTszf7WN",
  "key7": "3hwEZ45yAv1Gv49f5Z6EJFNTNrHxHKingdhpuXxb2qANkmWtq7jjHcs5HEpemERivhXG7V5uYyPKQhL7hReRmyjB",
  "key8": "5Q7SXsBiBptMFxM8ohXjj9Yxu6QkCH2k7yAAL93gZkivAGzFtuFLCWP1kEQAAVWr76Z5iF9sUGKmiCohshoqKqYD",
  "key9": "5x1ruYizBpCaQoZfC7jkXzK3W7LLqfxHZbjW6QcbrsX9D2EqsP1bxQYrmywDaEtYhzEN6j93pFNhUiNKBKpxJkZ4",
  "key10": "53UaufGtc6fnLwa1HPLWfYCiwqrB2Vi6YLDGX4Wih2JXeu4bJrHPsFcwkhs74SQ1qVa3TV183jn1q3MRUAKGJ8Mx",
  "key11": "55vD1Zxbiu8hiu4qAV3bwHkDaizHpwfVYweeJNd2bydGcWgBDGXcm8uz6DbYDchS4aebZvNmqfrXsGjM1i4r95PH",
  "key12": "kt7r9JhRYmjBcVbsoJz4CtrAvSyqtg4mCCFDL8J4hDqqMNkVfue5PHnKRN8yosGKU19DvLfA4kLQupyTxajJq2b",
  "key13": "65w6tu471WBNvPuNrxemcnHND3K8Pth9WbG4owXKKpCHefiSq4kDWBXr1oGtbZDvPeiM96Cs23fDAKQQv7zyCbKG",
  "key14": "5646X895MqmvFdhM7uwAjiNZsYN5GjfadH27rYxcuthAeRoz1SkE31exs1gD3wGv3u8s7QeLAbjCu1uCMR5hYBBm",
  "key15": "5jVbB32Qi1wKUMbSFUyvVPBsX5s4jHg7b3EJg2K4ps2LbxwprYjUCujQdvL53D5j8AmhESZ32SVEjhWEXjBVYemG",
  "key16": "4BHHmi3rssa3DH5nYnnfPm836GszaWLqsSKK46c6p7SMdR7Z5rCvSVnDSq1HuaXh1VymSP9ykdAzRt4viPZNNkYy",
  "key17": "67A4mgeSE7cSbJasJp8JC25Mdv48kTpaFuxQPLgaawGt3d5Fc3HgSEYMW9VS1qrn7hK5VyzFtdLVGrxvSv4QrB1",
  "key18": "5f5NHfzRfsYVJaoKMvfujv5rRoo4LiY7rq1DMzPX6YH5MxoGMnWfXy8Ft2BqwdVjWRpn2abgJYMKymKuo5NPY6xq",
  "key19": "34BUEthV1kJQSMe3dZTbDTLJVbV2HicxynhejxsaxEt7jphsy74M5HxAz1T7ekMMwcR579WDtbyowMomYrigDArB",
  "key20": "rdyRiSuUDK3pgQWqJU3jtHZ91h72DfwbNUhgPY8YJWhkeNSW62PR5iH6CibAsd4tfjEgCdn1AkE17h3FkpRoche",
  "key21": "CrhjjacHhsZ7LQRZJiRcseierAUXEagWHoYupitYafGwzDwHZYAg6DE2h85PoVRo3uGdi2pWeF4df8vUBTMYQE8",
  "key22": "2h2Lmkk6VvV812rDRNB5HxC3CdfmE4FPGaDpTpxYfzfXomrRtMLbrJJuYfhNmcC6LGzHkc4JRbobAqHzfLxm5npV",
  "key23": "4FCRvPj2e2yYT9Foq1B3FntZMxnVBtF9sZEn1pgYgX4oteZr9rVFgXZ19Jc5bDLWnQGkKeDSTVw6a8f1D3i7gLU7",
  "key24": "2g7GMYzufr51joQYLpV2A5TRZBP2rSzTXXVcP7E56Cat1rbBaeo5f6gMe5VUtFY8kt8Byfc7TLrZUh1eGpKoCPco",
  "key25": "2ptmTUbQSbWzxWu5kkRDCmF1jLPiy1yEc3GoYSFHAwdTh484ZpkjG9mWQUiUKJaUfbqDQvMW8gHd1zighVXyvivR",
  "key26": "aRwfKn9beAcXjJtosrGbHR5gLV9BAuLPAKoWjVDiEPduj73NqAkcFv6SJLQWhQ7Uf6cRvAXkA6bzdh7wurLH59k",
  "key27": "43BmDeYK8ThPCxjPEq1Em4j9KPck1rLaSpF9BJRMh9H2a545iMamnV5xbfk7X1e1sQqEvuZmzTHYXZGTREBvrDW2",
  "key28": "3bAFnebxWtcGJEmkMw1rrWoXFqzirvhH8Ufh4WZtVX2jXFGCCB35de8jUJmNXyZA3UskYFJDaoMW83Xuad8Yq6ZA",
  "key29": "2Pv7sc1Rt2i62yys1neizTzaSiMzrHtxzbwMgjTKgQWukeDddfd3KQdUuqV7H3xdUuWiNTBe7xev8BWjgz3SEDZT",
  "key30": "4zDh5gkpqpr8BZh21UDoPxviHVN1pvmMuzeUvMzcnd2yb7gmqd5YE52HMtQ94aL5KwEtjCSUAoYoWpWJD317QpKV",
  "key31": "N3CCCUvNTDn1Kv1q14mCYfeM4fhYLpV4xUEhaGne5CXbEQ3uUvU7PotkQcnBacTGATDpztByiAuCvArmLfdyG55",
  "key32": "5bVPjxtEgvtyWjToyeowakbes556AucWhvAzmsBwyuT5dAk9T4oVSrN4LZCTYMyMNsYSi8uocYyrhf58L8ccgxFv",
  "key33": "4hfkpiwbazUHHsrnvGKMhS3MtrwyMvNTtTk31UFpaBbNLcaTFqsA2YN3RQrGm65f1JPsYcVfYWR4RDLqACPBb14H",
  "key34": "4aNJnaD51NqWr2SJnYb9VDqms5bYDmZUY8p5TnAW5iHwjAufuNa99Yt3zsjgFwNBDdLtyG6sZYjNPa9Vrm3cSyMc",
  "key35": "2dneJZhBTErkqiMRvtqY3R5W4x6DGi4iPW9ZVMFvzjAPcLGL6xLPHKFV9PM188bH1XBgeywoJqZmD292WckRh6DP",
  "key36": "2saGsiEFNAao9NjvZiwMhNw9QqFML6HEH7813A4Rnx7cACCAazMeKGXkGubWHLeZBFuRFnHJvXwtSdbrfLGmAtHK",
  "key37": "3541jghyCXhsQd675gXodH5K1C4SnHzuagrXHvXVcFE8hTYdMTrFLtei49MyiXQ2fgPyFYHaczk77gfctPjs9JWT",
  "key38": "4J6jU6tHYWox2RPJPAqJo2JiWr86CiviRgpZ8iR3pTDexe82e3Jhgvxq5CnUtUXwGnwa1Bv2AAq4J9qzS2EAmKz8",
  "key39": "5LHXfsTbw7HRJcTeFQXHiexh68efbNWdcprCCkNMVtapa7bLrjmUebo5jRmqgCX1nPKPkoDd9MDUiKUFwkfnW5Bi",
  "key40": "2G51HVMrpmmtLULr2mybBY1mRhpoudd4MVzV2mfybyqePoer3ygknUbkPsdQAwm6zrsKZ5Mm6XKcr9PHhVdgKqC5",
  "key41": "K5jiqrHFSSVgMMbkXgV3CuYSrv7kj2JKbyPm2D35M89QvqY9P6eTFpFLgi7nNu1jrHPC7F5occRCjxQnG2HN3nT",
  "key42": "3UffNhFjZFqx5pJQ6boy4FiBVpDxTwuspdG5A5jJG1GM2vgucQLgUmVihtHABhSqWKfx6FKSkiL9nNopE7zTNtXw"
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
