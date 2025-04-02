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
    "TAEdw8gY3bAptsVdYBwfqYiAtd9VYLgFm2nmWbViErjZuQwB3jqQf3vMycP2oeBFtQ6PK5Z6spkHAP23PS72qBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGCU73huE1C4cg2Y5MGUKpYbAYh6PTWwgsFRzjAMtBgP16rPxGV9oQwYrMnwA3AD8AXnuzrQeJZBjrzZhGFR5uV",
  "key1": "3CdaVv4iQJaGGyCkzk66ZawsjRmTCnjUimgJGZXUB88QJQainogNnN2hsNf7t4V6rCF69ryq35DpvLv8hirtVE9C",
  "key2": "5WFEVBaixeZ6KmWzBkcW5xh2iecZr357DxwguLW6nbxWAPPC7imUNYUDrNqxLVQ5onGnZDXem2yHeLTDZMh6pv5P",
  "key3": "5KbwXBASYCGZJFUgp3QHEZUNKG5Mxy3aenaqVKRhgvgQ1CkJmm6Y7kjrNcviKMJxfFGruSw2u5wV82jy5Azqb8vM",
  "key4": "npxtXJsucDZfnES5WQ1XcWAzrFqaFmYp57t41fqgDgapEYz1MqRmxdULhAtuhPF5vG6gssXZq8eA7Vm3YAtjFtP",
  "key5": "2viCcosomsQtacDHFKKQydV6cBcAHVSzVGH1nj55QGmvRspDkbxXaQDLHxDSm5D9hai1SmoRNFohKCqSNdKeGu6P",
  "key6": "3DXJSdoqfoXZqzpvvKWWoKrD5gtRSdjdsLQBVtQps7M7o8uiawJN2pj6iKzWMu71aTJujkjenpgfHV9SG8RgRZdn",
  "key7": "4GT4eWGrbH4E7bDqMrkBgi8VWu8uLimpYiirnpk63V99DS5UB8rF4f4hsUEHHHr5APjPCNH7e1pZWrxS9eYmwZPS",
  "key8": "4zRctVyCEdKy8HuebLFzS6agtAg3EpfaFKta5nW1Ytk3e3Wu6f4o5Y1f1amfd6vM5F8w9sxwnfUE5QkUGmPWvVxy",
  "key9": "2YL8BNyrASdjiKyedf22myjqgPY4DQQD9y3qjiLYDz7pNY7Sw4PPzfi3HJhRWnMtCfQ5z32C2Df3Fj9NTiR1Y1AB",
  "key10": "4jb6MHCZyqruigP6A7p2iaDU7ZS1LtTWgsQyUbSdzsKBsthtSonTuFoyJUD9CneCw2J4YRq9PNKU1Cwk7j5vUmo1",
  "key11": "2ZGA5bALKrjS957x5PEs3GZrJXtSKCcXcyx4Xwzmf1sQRotbD4GRm8aseyLU4NeHrPvwLiDnswA1ZZkA4hUzPPcY",
  "key12": "3ScbxGWwzadMT45ajW6Y45amps1vNFDwxidhJaVG1hFsAMkEj9tbYZ2fuLT4tNN5BBAiJU3CK3rQdVm69J2VZSiE",
  "key13": "2BqPCFDMXG77iivZ4DPNYWsV63PYPJxncryXRGF4fHc7SqQJy1KaaX8XDkaVVZjaGqJ5s5xLH2wDzmfriwMNyEFH",
  "key14": "JK8uGXTtDGxtkHHghNZBewRCiNRUp95khAyTWVhKAkgww3vzoyuVE9emeCbHPvybp8d7kwUTxa78eU3RwfhEKyt",
  "key15": "4U1DgGkD6pp8Xdi1L5mPeRDyDoFTLAbBHKewiha81WADY3kLUspDrBG3aRmyWv4NWE95RWqYo4dV1d8VDTPbKnhv",
  "key16": "Ztj6M9apZxWaFbd53zfZ1cGACo4gpDGAgUT98ihG4yeeh1eGUB9v6hnU9cdsxDGwfJtsHom9FSqyAEohsTvUZGC",
  "key17": "38anuLvztb75CSFY8Cw5PWcWu2uPHjpbcmwqp99wNYwbkkU1xuLBpdZyK7JSPSiRrA7yR2vFm8oEqSa2JtkWDAbW",
  "key18": "5VZXYuPN2gfAqM8ioq5fzotNHTpYbQ8HfTdkZ31XBhJFfHGro3osQHKxF3jfGxG4QGQ7ac7Ee7Xgc64YSsM9YvC2",
  "key19": "615kxPAJi9oUi1gsQXuqF4A3RzojcTZ1rKpKpzhkuL8gcAeMchD2RhBS1kRqKAeuhQ7VKY1tGXEX3Y4ZvtCzAQ8u",
  "key20": "2bxB3suk1yp7pam3GRDv9sYN7F84YJ89RyKqMi1AYCN8kMBE5QnAoyQBvvHteuJqRmPB1hDuLpsUDaDmEeh83kF4",
  "key21": "NcLF2GF3fuQLzyMdGAr9Grvnqo5JsKmueVmsK3nN6r1rjsAQqi9VbURTyNtb82e3WC8trpuRBUy3BJXtPLyBUKT",
  "key22": "42QaqrFcSqKG4kNDJe3hJJXoV7qDN45hxXnUUA1pxwYGkz75PeCnggcbLUYZLBWwXyaRpDxEkGiEuxUbzKFSSxeo",
  "key23": "2FwhQGqbPfU7Aj4UURvT7dzEgMgouCk4HjfSsRKVXzMSfjCPQyPwLpTNCFoRw7cPyhRe3GQ5sthfTAm51MKiEY2P",
  "key24": "3jCoyfEeXA33KckrHFyxSzrEdTwPF3FzrizuyZt99DxMjRQAa7f2MLbqBR6EDFRKoByXVBbAEK2K9sf1LXXYrc9r",
  "key25": "BsrGjDzJzXKRDBJvHqQtQy5oCgcqvDcBt6ZQA7PmixbJLT1PuDYWV26TJnD9R1VjSNxYPjtMerJApJwgkXMmU4e",
  "key26": "5on3swnnoe1SnfYLKHWTfMSnM2G2zQCAbpGft89K8iCU7cXj9wSvcaHiXUPwAEAn8mystqCSsjKyv9g3Lqk2rDTC",
  "key27": "2qwgWQX9U3Vzyf6J4JtLXYCfJhXUK6sRsJEF8m6mojfZZY5A946ExAp2b32RQencSRy3i5PTJ3zRpXeTJD6GGZMb",
  "key28": "23a4i44x51cdVkpjuMZXLji5XeUxSJkbAdLUYMKc369xCye4hrQfaRXfC1TzjU83cTAMstNmND8S8ce6XK8c4PJx",
  "key29": "3M3ZXd8q7wBUGZ8qMH6xYVKGHdp6igecVP8c6ZTUNj5ckWRkd2R2nU7krfdNga7sE4iwseY8rUBRK2caJYLXiEER",
  "key30": "2u4NqABxjbgKehQJH11QFd9t9k6gUd8ojxunM9BmPkkLaXFaFJqP9SgDDX6zjBbnTLY3mdyF7Nx3evUgJP9Uq22X",
  "key31": "2sAHY3NhB5q6fuMJv3XzRmZANKn1Pvh3ZHhanQ1j68FocaKHZixDKJ84u7ZULhehKRqrTsDTxDGRxmw5S5Kk3euT",
  "key32": "3cuBJSTavYtzqriwUgA5HGpQyPBCZsck1VDpbXtdDvsD4WdPjR2pHSQ7rVxEYozhUpLKCKjExUeXTK4RX7yN1gH6",
  "key33": "m1nqSAMreBoDUrQn3CQj761eyMBJseUpfY5mtuPcunxDM2HxgoVt5PxaEF8KyePZRc3ssZUDAy7t1tT67asQNoz",
  "key34": "JRuz7XcSPdJ9spHk1ExTe7rDeJHWRXhnog3yFviTWeSuJZThdXxRYiYp4gAz7uVaGN4NRyEFQjCXWoTMCtHqFyp",
  "key35": "4tyNiEtuPNqWV1Mz8yTGGYyEFp8kkQDsVbik4SxEZxxUSFt6RS2zqFBx2Hr5iUEJ7jupMu4Lt1jrCRkCw7fY32wJ",
  "key36": "3BJiSw2o3VsZi56yjhKNWfxRNU9zsHuBpLVEsytjfefJi3Vcv9PFmpqnXRqmSEqo84vHT77fUKdhcwTp1zoWysz6",
  "key37": "3SxhxKWDF4Q9eeLADjVkPPDAQBpXgte1B44VU4UjfdvAUtWRNjh9bG51SvBm3SWyuNA9bNheVjWdAyDSMRnCxKh6",
  "key38": "4p5FgSapeZWbPWNQNeF317kodujJENYRWZVhsEgmMUpWX15T26RhaH4kjAQtQyXv7BHRaejUDZoWWrtiyrsRjef9",
  "key39": "2LriVgnVjBKeywi4JHAUxXZSNJdMHgKcTkPYZw7oEsA8r9snmFQezLJe3tgSrVBNMZEGhzLijCtkKdUPS8kBatC5",
  "key40": "39wbs7eRd9tzHNtF6gx2WLXqAPVsayKQVj1u9Annkqm9TK7XpVgbWwxHfeEqYZsgpMLgJrJKcirBnYkmmrrbLf9z",
  "key41": "3hAWVdRBCo5HZyV1u1JDZDD4NiD7verJBDi78akeemxvqbFEwJvd8PcYkZutXe4nN9Y8uYYiPqiTZNbCAaSwAQqN",
  "key42": "jax8KzZwyJQss95Yus4yXtE9yG3v72SCqhMEnbpN3WjbgWgivTVPdD4tuEcd6rvk2ioMxUq3Z6WavDKhfMV2YrF"
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
