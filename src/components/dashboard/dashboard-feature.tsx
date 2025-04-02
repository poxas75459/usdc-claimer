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
    "2ZaWoReVzdujCwv4CRLnuu8AaHH8g3ATcwQYTZ4FvfuHpiEFJCq2Caqugg9aMnVhNYhevzQcQYqLzbh4NGzxaZYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51WXK4vzMFzaRmfw2feFHUrfgACSp3XwhheivUZkkRXeGR6rK9PkQh8KLzCUAwD62zTDN3apdFFcF8ARcBPshLq3",
  "key1": "31w93NEjB2wJB16bcRdf2rpXf9TobUjQigFXwUuxB7WR9Y5AH579iPrzqQk3oi7kWEwKw674ofx861QTTGCf9j87",
  "key2": "5S4KrjgBfFUY2HLqqPKHXqdMNZMFnUBrvUZjWFXe568XgfSnhQ1izw1XRf6r2vykwpLheZFpef938Xh1cSqWbmfw",
  "key3": "4unbAotf2C7aeyXZP88dXsqZLWdjHX4yXtUYZHfUdZJd7vjtmttCtj6yGDvYkW8paKLn7o6YZCWXpREDfoenQJWQ",
  "key4": "2eGah9gSeZknREQAhQSDrJzNbFXQLFKMCmNkDzVNjNLGv5qm4fGghLxfiTxo9JYWy1WuXLDVzP8wAPNuCTNT2aNt",
  "key5": "X6aNv88tLBu57g3qcYrRuj1NAB7dDXEw46zihf6RSruHFUdG1MezVrayGJPJfJ6rc7gngRg57KVKJcqTz4DH5Qu",
  "key6": "4iPhCLbzYu3JPWDWDLDf3hFmHFZh3w4KdxzDgDLrqTnnTvZboi5U47TjLfyk1qzvUXE6azJgtTprQuC1G5xCyg5L",
  "key7": "53UeBBZBRHqrxAHAGfn68YTJw6mPnGWPZE2LZeTkNWnvf3Ew1UAcZacAyxpG6e49NNcS4WDgjyZJhRnttLumw9Xc",
  "key8": "3rMAvyWiJHvQiWsjLonLb6rs1oQZo9VHwGKZpq4ViWXhopaMjqitCt3KfSBab7WC3KbiRGpZinTVREpHPMXzhQ8v",
  "key9": "3TfMCkj5SzVfQ3A6XPAcK8JvRH1s4ZccQEF9NzbgHwTK375JYQKh6Fs88Tvv7bibM2wV37sF8ch6m53evUuF6w7c",
  "key10": "LyBtNTGtMxJ4zvHhjv14wsiEB8e8CXAuuAnzgGme24SZxxJLc2wm1skWFYMuMqCgKWZrKRo9RdhAXdU7nF1fb5b",
  "key11": "2zbZGZfmn9SREzA9dezWbJPr4q7VYoimNC95h48AnN3nTrLHndkYYx5eX3WJyWxkjQaLKpefXWi34QvLWFh1PA37",
  "key12": "d512QhzPwgoAEgukRRpp6mJZoEjkJdgdWiP4J1aqZqwVXATT999xA2xRZggWdLjB1tRy7hdfusCGXZJf3BPZaLG",
  "key13": "scmjiWENT8Hfuq1ZT8kgRtq6rLpa9wwFkQr38qLasmVk1rmSJBE7JsHtcVygHeck8JbXn783hxkfebUuwZP9z19",
  "key14": "VEB4YarVN7h1SyTtmf9gLo1A1eGTQ2QbdwTHvR6hgDZupmYqy3JxRRZ6hdoeeeuotsMbLyqXXkEJcMBuFNCrhSm",
  "key15": "XNDAGVneX1EwEwyecynENqtSGxHVtwDFjMod5zdmv3W4qPpvBWa2A8xbDa5yk141XkqxcYeiWtJmRkvCL6Eq3uj",
  "key16": "59CKU9Ppri3XfTyCHDjuRi2Se5QAdNaTjgnDZA7NGjyRvkV8dopuceez6kURy3BaTBMkJczjct9PL3jnaAeD3KHh",
  "key17": "3A4zLuAFDd96GHDrvA7FpLbSC4qHwZQDppxayB7jo8o86JyxgmUf41JoDHLXWoNCtnW4n9xcUjVNb5RwScMRZkcz",
  "key18": "4Emx68o5xwDRLDg4pdRg5apVPNV7bYTzJSn51v9RaYHVE5f5s7AEptMypCQTu33j5AaxnA6QGVMFGw9HqAS1iUZF",
  "key19": "5PnQhHE6c1B8gsYbGiKK5zz8vdgADz64xmgwqbtQHkHd9565GhxHoRnXgbrxsWrmPWxmojZorFPBk9ZsjwHzoCwn",
  "key20": "5x5KqT7avSncqnr4KR4d6sH8FWkNpHAFLKv55M1aUB33vErDeE5xZG5KYAVG5yaZTbztaPnQTGr5HHfHMcsviJSi",
  "key21": "25mgS4yckznetnDL3h4qFfyqFgLXUtLaVd4Np5bx7RSzCFcRqevU81Pz3r44Sbnst24En7YWJrA3RqGNr4W7GKjQ",
  "key22": "2zV8aUoXUze5m7bUBWP5QaxdJquwvxQHAW2ynjjRzYqnNtRyLksuoKDLCAayjWkyouehfqhbASxNywQiVwfheqBr",
  "key23": "3i2bvExnYRGm6RnCCCTsBMkbhVU43748XpsrA8E3zZNmZJsE8EDwWCAuxQ2j6t8NtnwqbT2zbNLSUWyxjz8D6mPL",
  "key24": "2LgniYhTB1vZt8aoLPti2ui1x6qpouPYCTwpBNjbgDjzQK3jBjsyuv3EadxHraWFifPcmarDjQBVNPfNy2umA1AW",
  "key25": "5PDc8Ex8Mr9WPW6id27sogDvu5phYSidWatPcSQudjtS4MU5DWVPezZnD7AYDLfbncVsTCHQvBMZQTkGvwwvqgty",
  "key26": "2QXQaDhKxa5jApVdDJhwV1mkfYoASsRWvJJ9UbDSpzi1VxzrKb9pik2E5JdS8Aze5nqSBVpLBXZZh9njeZUqmei4",
  "key27": "4jr7aoRT8Qpgivtjuoxf34bmm2Ev5PSQnUSY8f43mCtD8zE24nzoZS3riLsgmAghXivumqw3wJVNcEaGZXizgazh",
  "key28": "ub1VbCV3eKF4kZoevcBcmXtNriM4GjnoR6QiTdw7Mis1NBJPY3dXW8KNRXeuWhjj94j1uDACFax2nX9pHyDfUYE",
  "key29": "4sSPAYACBiwX5DbV3a9Y6jy2betiZF2LBaAYp4t3esYS3ghHqy7YnEZiYXNaaxawAR6adrzEveeRsnAN9RZobAoU",
  "key30": "FKeUk4cpuGBv9eZScW3wecPx5FpL2FdpBs1e6NFyjtpFfovcY9mKJq6Y2YsvjFbmWeLPNz6BnMddjBzXPb1jB8M",
  "key31": "2CHXRf6EzEe635WSyRpA1W49XbYvdEg7XQnYSijhyxLdGTc77TCe87cK9iHhL46dp4NyxRQLpyHH4dpDCqSf5CZ2",
  "key32": "3VDw4mFFKv91KFLMABfZG4HxWodrR78PTUPbY1kDGufZzRMKMWojZVsmXGv6ShfJ3rwYR9ZrMjEVDvaJH4P43h8Z",
  "key33": "32F2bQzeH6PsbBZYe2VJiT6F7mmrhMWsYXgvmhQdfZMC7abMb2W2PT1oYRYoRsGT3DyoBMfhkhmQUtsRQWknATqd",
  "key34": "5YAZZ9vpErJe3aGwTbYcQZNSmBPc5Aamx78nEg9ZdYLyLb1DWCsaNycazoPSufR3Ppcy2SJ5fMFGckkjjrQx4VqX",
  "key35": "48gJAKVSa77X5vc6NVTNhMrjeGS4uQqAySnNZ9TDdeFHC1aXpRYQeGgFge71DcYr87ymdD7S2iC1VrhULFJBzbMB",
  "key36": "5d1qjGPKhVmRqsgPJKFc8JxAErCpp5regjW6cdytB5MFJgCW1148Z7nUeJMDZuCso86JihzrRZspnFVr9eoSGCMR",
  "key37": "164PmB1uNB9jFT1RfLXJfgxsnSPHWzr4zwaJ8GVadyLrnWRtpoANuQhfsmL47U1vhwToQtasJA3zDrLieQfuubj"
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
