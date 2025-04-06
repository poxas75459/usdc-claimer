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
    "5zjgxbMhBPiW7BKMnQ3vKJUxandu3dsDvd55fH9A7rCjuXuAvryaeuxv2WhwFYi9h55Ah4avjSZADk9ict7JC1QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8NCvrBSZwF8ZvmdL88RbtiyPD8v8Cv3Fvjuf9smwHiCrncSmvXhAoBYxujPadHDiHFeHv8D3VzNG4RuagBuM7jR",
  "key1": "4xcf9djwFnn1wUcgkBC58dwEKiPhDaRbtW7bifNxdKgcJ7aGBS5PDfNnasPSAA5vRBWoQgbKW4gbJej9i51sd8i4",
  "key2": "5BNnfkXjHCZwthwwvx8nzhvUofHPjmij8849ftth8eBeAcQhPMXy7ec2f5fR6rVWUjqE8hqfLQtbMW1SqFP8K5mw",
  "key3": "4ybB4nbBmC2h1goUaUb2PVQpxoGwMcodmu4wCUsXg2nDstBNj1aFEp9uwoXSzfUpoqugNLuTN4JrMt26vD2RnPVM",
  "key4": "26xeoGTyryZZfqcuJVTmveSE4cZR1hPnrnikHQpBnJVnhvnRrTJ9FX5ocpK1Rn3z3Uut27qKPYBpuf7aKv7MPePE",
  "key5": "291aiKrRC4zADnYjkQsZDuuziL4TrF8R2mFDeuJ8gN6qD9bHmCQFgx4AjVKvHAqUjKuxymVXD8sYL3Gyhen1HKxj",
  "key6": "4mTmVySJBzeAnAGHzMW63JJmabV2XRZKJt6J1uMXr9GtTzxDBW3MsrcMaUodSXinREotGLuCLTQhQ5wNZc2Rt6Ya",
  "key7": "2Yb3itHxqSSr5XE7Yt4NZBgBWWKn7dcg5ZK5p4HTRTfwVTixQpARCbsYNwRt5x8UHxraCLyGXVHwrSjqiYSNtMeY",
  "key8": "36L325Y282v3mUhv2zM7mAGPRtqRvpHLutJWMc7Ht4hmdiDXZeCMiEdUndZNAB63NzRNHoDKjmSBS4AvCswnpRpH",
  "key9": "27w3wmSTMxNQHmxieXXwiZwpbGU9hjDVbrRHgy3TxHeJKasVNCZVYYCLdpS7kYQooxx2CwqMaRkEuBtpYyBYANea",
  "key10": "5adDMPnabPnW6B5168MtwFxRP3e1SRXZYeKjYrvFnJpW35UVcCVPVTxNpXKABZ9NtigucmPxAHwgFft9t9HxJ9zA",
  "key11": "5pa9p1NroqsPhvhvMLdjQHiDm2QtYNcREeTXAQ8PVyqEeME9U8MTJ5WnyWjmKLN7bMAzXY7YRzjesVZiKPYQ9z8U",
  "key12": "4uu5zM773Wr9d32tGAGQRdkNXvuoA67nvMTAPfTqHFZkt2R87sbTiZSTRT9v2zyUyBsDgFSySJyDwM9oUVJbcbbe",
  "key13": "5qjqGZD4yj3KY8LaZQvX153EHotw7uKQrjZmT1WpnjfS6djiDrt3jC6kaJ1cScvTSok5xUxFBdU42nhxQTdstfeV",
  "key14": "4ripCVzSt3KMaC6BTwQSBF5pqPmJperk193bF1QkWWymXVYJrgSewzT5JrGMcnLee9UTBPPz8esZuVBbHB7pH1Ni",
  "key15": "3M4WHifcFF8QDpEZFGiXvn14tDXvF2SnXftz1AQtuToSCiwuMi6AsrnqWHtJBXi8gEizdreT3Xfouz7kDLiwf97k",
  "key16": "Xupyiv6n2cYuYEBMkvxaAGd79ZSY7ypzrnLYmqV1TDFgUnELXJUtJvgd2heaityGEHL63gpwQqrCMzjtN51CFv9",
  "key17": "4KevJSywVhT69KpAUcxndJbtoSRPRw7oFt3GjXqiKz5TeQBuVtGWtkPbg6wfRcicHmmRHtyCXYDh2cNXHTq2ovjw",
  "key18": "8AE1SZoZP8qSsYvUAvL2o9wEuEAUFkocypRv7N1utv1bu62LCjimQ4XV9zaUENk31CfpmEZoeJcvvoFh5ky8agD",
  "key19": "2eBuREjBJVdgCi6mgfDr2U83qZud2aLNdH54LepCVy5Qdzx3vPPdbnSNs7CiFjFRTH9Lxi9BPZAwDWwo1RMt8YL9",
  "key20": "65CECAeFjThiqVQjZdghPyx73xfnu36qgKK1UaiEsX8ibLhvzyeuNxi6ZxLcF2H8TYXBeiTtJPEH3WaFruipo3o9",
  "key21": "gLS7g6ses9f5TLZM2VU7U6jPkSK5g28hDweNdhUVBrcqSvP7kWEKUXxc4kEUzbtPMjBCgRr2jhz8exc7iGdH1qc",
  "key22": "3qn6LFsUVTXqX2FvuEDZUGquLWBJvWoMWcJEd33jPraK1PPEeTpPk6WRp2xCDyofff9riZ8M8TAjCTL9xjof9gcP",
  "key23": "2etgVXbq276k3t7vUn3S2tr3SKykVJabpbPckinL9sgmrV3DU1ubxoS9o8vDztLpckdJyjfcV4qhEiWayvmhiSo",
  "key24": "hGL9YrD5BeZadJy5RSth64sSbFKMJUoLKEMGXXCa9bjtZQuWjYPCTSTBBQLiWyJsTfiC2ukbBPkDCAf6TaFEqGR",
  "key25": "db2PedcgjfSdpDn8o2sjoHmTuFetEhet4DAB9P4vwRW6ACvqpXy2ocgdA874bMqf6BERYrUs6QoksaFxgxeENY2",
  "key26": "3ew3PwjgY3AW1p1PXm24FeskyjouQyUBLdq973Jaa1xTpvRSyc3dsnyYeqJyBDtBjytCAd5aH3Khi2448nmYgmRs",
  "key27": "5LWMr9cyiWPUSwe7ASFfJiixAeM5si4kHcmVkkfgNWRrvvBQYLzAznnJkqRRTJRoRMfiw2oRtnZ8sgptQ1mZAt8k",
  "key28": "q8UiiBdRPkF1XLSKWZpCSXsLV9gXGcNfqbUHEJ4j88di1RxxFpXXBPiTvsAF5K7hAZ4QPNgtEG5GpBXbmnr94Me",
  "key29": "338KmAymNoztXk2Gw4XjNXHy5pVBR8DoZxbZfLMHem4ZgnKDNxAXgovJrAz9vXiMzxD1oS26rQn1Y1N5yEDyW6zm",
  "key30": "4MPgj3QRWuxAnUPtvAnWAjjaAuDVkcWR9JyERByrtC9mWqAfaTw5cWiFxATjFstASDRat6vUv7seW36YhhGt7Eyn",
  "key31": "4gEpBptiVg3m8UN5Vs9iidEvYdptQmc2yNL6c1xTwcqmdm1WEQmdhSSD2f2Jd8nt9aBg4eFEoTgEonQPfzT65xnu",
  "key32": "3tFyUWKS23b15S3BQ3KxzeDU92jy6PDuQKj8eRkAySdM7dnjfo1tZ5T6FyYg2DYvyY1hUbzX1CczevUDQpbi9hs4",
  "key33": "4jmhwQK72ThPxjdqo9nbQkinmLmbAiZiixfo7iwQptLB6LLf51MT2FuhFFvQYXuL5SiAb22ETGV9QqjkLHUQLS39",
  "key34": "4XoQRHw8L3sHpWWKu4iLFNJwXXtwEbM3kRhGg8oKPF5fkRpteWAYusyDrKBWP7RKhNjgrGmfsWwUhXZpopsRTdBh",
  "key35": "2uT2dphLCJfpGgSgWipfnWgv8pBEdJCr6dTjKnSWaJcFdapKVr87kGX2ojm8wLcSgNS9Vtm4R7fZQDS3idfYL2hn",
  "key36": "M4rhLsaSmGiiRzBvqhbUgF6XRnLnNew4RbnSwJ8ADw5bwgKuvKpbyhcqLHAJTLyjVTMkwidd5QtnLAH7o9DYQWd",
  "key37": "ysuzgQsMsS8Ai4if2ZnA991hRT856Keh4tHFUCUyvCUsXtCZs3Jj7v6eDyt1BZJ1ZvcaKpczGGMTLurgHwLNEZZ"
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
