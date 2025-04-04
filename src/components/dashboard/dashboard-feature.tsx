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
    "AX81xFytgHHBwserm2WzxtKCZKWmFENUbu9yspF2NN86LQ8rPNgfEHkm3uYFtVHLPQj7UUyerCfLhTCsWugzty4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJ6UjpMnypG2YjEC5CLQAGh7vQ6omsSM7VYxfZVsSQTJGFFCqvgfSuRB6CX3SZoRZsumABYskvaryFmDxoJM5jo",
  "key1": "2FfevkL2YpA2nxKAe62b9cAC8iXRJqwujK2qeoAaCZCLejbDozQPTqzV7JVg3iB5MBRpoYyy3QasCfRcm1YmBTDh",
  "key2": "2PKACPLqNbiTxdEDPbToqvWySkeS1ssWroP4R3BBv9WdvV9ZkXwr3QYJSkSQULE1iW8NHucGRsjvDVnBxik9jX8a",
  "key3": "AwQ1kBVRxQdzckbHn5x19LqtJ3WeaW5krV3Uj6LAptPwbpHbNEnZVdqAZK7dX91VAfjHwAbVb8YvEFgQfa81dCh",
  "key4": "5zou55GxrVJejdRJN1eNPSqvw4iZvv8sT81ww3XAYWav72Yj5E3h9jzcmMpBD4HSoEyBK1yLVGpzddbRqyhoTjto",
  "key5": "2GQpGDhy6NSUv6mqx2pYMGEAzEk7zL3KxjRbXbHYJH79LuJr14BAZfoU5T53MeMVc8HDq11dNUqgfFoe3Z8FtRG7",
  "key6": "2kSzzQn8r4t6zvcA6gcxcqCkzLvfbS5eJ5e9Ax6XGXh4wZUTmxrHcpNSsspC9XMQiat5mSH7H4JCgn3KDFioFP4C",
  "key7": "KYUPfTVrVtWvDCDUBFmr9UAm3GTr7JPoZ6A8CXjQQPafejpd6m2HbPrN5GUEXah42i5mEHRx95DWJuhPGwS9oFF",
  "key8": "4W49bLhrngpdzbWfkFWHbHrB1sRVjukkXCnajGZj9BRqStzgb6rZfsif23UqCt6QPrdyQSzjmvGmRaPtTic2z5dq",
  "key9": "2KCzNLBY1tMjbwPsnHwdSJcJ9Mch2XtV9xUnGH4itPemmGpHAx2dJht81EkEBh9zmAaAvoXtXrgzGa9Epta8TbWe",
  "key10": "4qoDcNqfBMh3Wy7fpGEJ9qVd7UVAyYkdsAHkGC8R8Fq7VUQXZ96Dtg3xuppc3h5N9CvHKUFi41tZPzuob6i3zk5v",
  "key11": "3Gv46Z3pUcuSCpAg8X1MktyuFGJ8zuRS1sBh9zzcntGHyor4dfznkoEiq3MDGc1wB62Y2C62pwskD11qaL8Dh3XL",
  "key12": "3TPSEmboZyq5tRf4GJkp4Cc9yqbJ8ZCXFeARo8MuAnXbttaa7X4hJLwsaQhc1efBUtnPz1rKAksDQbyFkW9FyuYd",
  "key13": "2vc9UtfBLN3866WmUCZKSBE36QCtbAUM61Dcc22i6wL1DZG3g2JKCkcEc5Jx33bGV6qfJ711tTCtXp6x3LaLVQJt",
  "key14": "62is3pY338r7bETrYy2BRVNPbixqjszBRGiHnkjBZ6upwPpHy6KVfchbLbZCRdofCzUq38nHDNHL1ZAgKJ4NA6y1",
  "key15": "3iQYCwr5YG2LXQ2cnop9kgaVDT1BV4fsJRDUYG5bSrvZee8KuMiwZYz44U88ywvGozpvGvEeDuUCYo66JEeb3sQi",
  "key16": "3azyBE29QQqmTA1a6ojbbiUmkpQDYp4pxpzJhmHiC3qqKVWHhnQYZRbRNaDja4RH566pi64Mezbg7r5Ri2Xkk2gN",
  "key17": "53UonTpdZmaaJHKeYe1aytKrNmF3Z7GVk2sxLCEjgZmdWWKKjH9S4GJ4A4dE61cirJxP3WnKqcAHF51RibJjJ6UC",
  "key18": "4NkfiLK7PQDNJbcQMvq9fLJ2a4W63Y4TuZeAu8iQH1TNvRYCkJDztmSrJ9bgVCav6JhQK51yDpBbpu4hew9LDgPF",
  "key19": "4Ti2HU4Ki4phWkuA2W8TY4FHimwHtMJuDD2dt1TND8oqi3LxqCznZCCrSFenPHz5icTpD895i5es5jvP1c3uaXLw",
  "key20": "4AYPjyT9WCBC2r1tpqsiHFWoEX3n8QcjHfVDCLcewzBatgfrHX4BAG11sCFoxzXK7mQW7LJFzsee5M3bA6pQX2jW",
  "key21": "2nyMHfJioGv765GS5Jju3mh1Ycx1FHfxWYrT57Kmpkbk7nPWQdDfV4WhU6hP1XxFA2m4XD4t1tT3qxBijn6tvEKc",
  "key22": "vC42wTFwj7w3hbixaiGULDhLmj25aAbwxfZoxuiYjNh1iHsZZf7mfGJTpXcXYq2jayEEmCMLk586m2Hx1n32YRs",
  "key23": "3M2DX7dPFCyMXeJyDBEWdJpvyySnD6sdPn4vKPqmntTKFTiWVBmwwpvExMz7KUxD8SMsG2gYymTtb3iHH1Gc7RfD",
  "key24": "21mysBNvCFhZ7DacPoNLydpNApfgMAsUyhyuiuQjvYXvS5BVXn3MohsKeRiewNQAj1YaPWn5gPaSsoZkbfWYdjij",
  "key25": "3qQE1xo8JUw4D8AZPcJzCaBqgkVVLybL1i9WkazMpc2NZVCcTmuHKFi6ik3RAT8oaHnbdnavxuQoAxJXix12qcQ1",
  "key26": "43YjL6V9yuVHUdH1L9d4SH8H68Z7oqnrmfZjhNw7rGt8SmFBPu1KMe1eG21JrkTaBV9r1uWiy7mBsdJP4hcGgHEj",
  "key27": "5Wrj1JxRsCm9pYskUYgZ4rKu49ugJukcwrdESyfVMNwGcau4hvn5KU1CHBuLsgfJvMPNUciaLEeqsY8naYpnRTCg",
  "key28": "4jEVaN63Uout5x1id6Gib5bZu1J2WHJJsHQMfdyf7MXd44TAcXjf1Hb7ZfHnbWwJG4hujVDKrMGHT5LpcMsPxBN8",
  "key29": "526LTjFet7rvmNhx11quunhYZQn7T5MfZFox5MqdQiREsBuhMmiMSN1yuT4taGyVp17XS9bLd6EZnbd4n4j2QxDA",
  "key30": "qAKywhX8qkBWF3LMGLahRacurN4zpvWFD1vCeyBGqiEmcCmKkYqn54zy3P5QBBiSh5hPVugP4XFcwQnSg6w1M7P",
  "key31": "4MLt2q78PNfUYqf5f7rrMpSB7LoteWcdYgSBXHRtCauVWwdL2xBGyz33SdJYAjadnLoFdUNgiUwKuVExnNKL96F6",
  "key32": "3ErZmBqNR9jZcfXmCCM6ECBenxa2RD1zYTnqBMbxysuRcfDxztNYuZ2QeyCWTVPSovVK9fW8ZbxncXUD9wLtYw1u",
  "key33": "yuR5RBX2jdZqWaLUR3ec5nYK9adea37R8Jeh6R5v2q93BbZimTSNxhQoBbhsdhVVDrbGqyvpWJeHJUEwZHV74bH",
  "key34": "5YdMvGo48zQK1pZmLZUGhVAZiuoC3HcqrefZBCKs1LABrVH3ouNAd3JhWfjhv6tNKqPubqgjgWyX8onVtLs7BXpz",
  "key35": "4ZaQZhg6G1r3XvHK44HwtJwbDeXyD6m7yf9P2SiFjpuaXLofiTuZTCKTehTD8M5PobnncUF728fx6LbXPxvGrno9",
  "key36": "4xE6JLqPGNM6dNRvaaQuuSnSfKLn3ZdJ4JsQFiLt6Wjeer2crQxYQHzETH4USiZUkRgGHUVYfEr9Mb2M5SiD4V53"
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
