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
    "3iLCdXxGHrAFou5DtbDNZKXoKJ52EZXq498A5sscY76q9jLf2vKbiSLLr18TFcLe7H4rCpYwEhQqGqgNaCQWXqpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6j5yP35FzYMx4ApRUD2nediwAv6B7g4irbeSv25dhBcq2SpMuS87LMrHA1FxC8UUrjQrjSyymYhshZzgYPUVvX",
  "key1": "5DABbbnW1ZuGwN76ZCnYgmyAo1yJuoNYZN8p3MzemDaDRDypoeEzkLLqE9eEZLU5uWRnWGTjRtFzETi6QJ1FuhD3",
  "key2": "4QBo4XrBoPop8BYvVE9W6R36NzoC21SonQagRFKBojHjhghWoCUyMNZ3QxhinNHhMpFJmBkjPd7n8hXoHYpfy6KE",
  "key3": "31JmceB67yGtj9pWfiX3PbvG5JfbdAoVSii7kUfa4aW2vH4MX65tZxs3EZTdbhH2Zph7MT7yrXgj9jSL3qnM1RFL",
  "key4": "3kW3QG1wjLYyLAwdEDmXj2vd2vCL7azSx6Mq8xfREFhkZBn3nyz9qRE9GhQAZeEjMmUAtTMJ4ojEfcoa2PzLtzPJ",
  "key5": "2ZFyLYC8r4uev8C8vPNfs9xkbqE1ZScF3ao2s2J7gb2N7zRiXXSpqs9hmRA9n4yh1GWLpCAivcRHPJvWGzFWQLap",
  "key6": "a1vU4dyH3guC6HUmGUK16e5GNNNEAoUWM3rirDPQiW4i5i6Hot265NBwL9D4LchXTD6EPMwzy8BAkYoteu3dDyT",
  "key7": "WNxADe99DYqfmJv8XiBRmzUSBSNeHUUmTbyZ8fPtp6mkQ5BG1DdJUzeDCKBUpUnjjLUruihkVxNWJzCtdtxAgCX",
  "key8": "CxwHJRbDGnD6UuoBKN2RxX8mxVMF4XFWS9cV4VQ7d8wiGt5mhkMxfMrBfx2nCsvSCABsoJVimpSZN6fytexR3Hy",
  "key9": "1f4sNBNCnHoQes7gBa113XX9BcWfzUcupQj3Wi9SnrY6EXJ6MY3ykoaJw3b8cVebJuas4Hrm6bCVyQPEWTtBB4A",
  "key10": "3ooG7GwZ4xb6mE7qCYAzWnk5w49brwHJHE7cGZjKyJSm4s1zYyfMtag5k2Q5SihbNNV48UmBTDHWMCULtCjjZWS4",
  "key11": "34BTpvxsJkp6iDATqSCTvjUwkrkpABdLKiJ8s8J8o3c75ybx88UQ9DoAcgDdLRNEb3pnkWNrS3Woq1yJZnutVQ8q",
  "key12": "3c8HM71QnrLn3MfeR72nSgMe3VCsGsFpvKTyymdeGTDXeFJF4DkjmXx5wtFAYsiydn71zpruHbw1obyoAGxjjpj3",
  "key13": "5cXsgY8bn1NTTJwxPUgedkLWzWKM33of58RdkTyySQ1TEuvmvQ5QcyEhj6X1npNfpsD5qJcUXoHoqWMbGFmbjAT8",
  "key14": "3Xt74aRZum2vucY6RaAWGCE2bKQRsiqwvxdC8fKsysEE3zXqbzaXstUGgDMyY33eBu1Y65sqw5NUFoUNkbk29Bvn",
  "key15": "3tJXUrz6pyGzLDi5jZEAUJ1GSfHYLWvuZbPovzh2fTeTJhZUjR97ckTcz9rwScu3N1QwtfEZ3hU2Fd7cW3Dg2pnb",
  "key16": "4SMCv7WirxEujtKWVGexv7wR8MPt9d1jFvNRxDKE2LvcQWJcBBnvTBPW58HsrkpaACqz4Y5w5GNF97GBESNX58f5",
  "key17": "4BALt868KPkmhAHn5Lh5FQTes59SAxnTubrTDxeRSbevyiPHvh3bUT6qPFnwVEyqsuRT8MBBgTBNmiqwWYRYgb5h",
  "key18": "3D8fFRGDr5uRawgFCWzMXRSiu7P8rrFQSf5UoGVRYNMvd9B11DU7faZke7F7pq27Q5LH7Lmy6zQUfTwQpX23r2RD",
  "key19": "39PPnjL5oiKnmayeQkUjJQvAvmPQFU5dS6DB28cQ7gTmChj4ZjupjshQ6oW437uYac7mPuie58a6soqu2BnaeZYJ",
  "key20": "55GDBRQqFnT6Ap69JB6GTxVerfTWXTxQQrnq5y2MWpGMY4qCLEkJHx4gg77zXGJcTfYuGoz1QYXTtQRr5v1vSpDs",
  "key21": "4RWaBwF1DwJpkFDuNbxLEvxVbSRj6oqXu6gZtf8B4yjj9FxJGJsWxiXhRDSPxWH2KwWmFRaBsZPwdmNC4BxAGcqZ",
  "key22": "x3jCf8SLj1YUoqEDAqDkTer7n8rjFFMe5KCKgmZKUncp18cuAyMR6ehafvEnAoHgfzXBz79gyTdVsFeJMGRRixv",
  "key23": "hF9JtnACBbW1fmvwJ5FL4rxWrMJps2aLPY9cbUmF92FsDoNtQA6BA5QpQqA7nP35W3kM2sPGAqfPHuMxqAvg5eS",
  "key24": "5iKVKyoYtuDRyiivGgymxmsJmesm4Npcpgf8W54JthwmjeTUV1c3YdtFQGRTown78i1zfJSJsMEtwmVSiQi2QUc2",
  "key25": "3Aq5knzfKoAmYHtUCaaiDD7QAgksGHjPpB3VLj1Nj35F6AiP7VecNyBZiPHbktR54yGygA354zAcPcH64nZ576q5",
  "key26": "3mgC3rz8zA6TK7AbQ4h4PQmSeazMj3zCpNfgn95swMX7CkGFmDnMX1K29fYQ8NWQjuJkR8cbQ1ppwPkKiqoZ5Gge",
  "key27": "3SdoYm2Sr9L2ftDToVgs2HhmJwX2g46iKgMgYxa6VxDAqMqZGUxyFqNutwiS68xbsiVu9o3CHiwXiLMnLogi395D",
  "key28": "66ZukeU8fPKjEyj2coaVS9KAutMBQZBQC79PgwqCxfJYiNBnaSNTA39wsAWB61JwQaPj1Rdsb6aiQWKJKpwJmNf4",
  "key29": "46djLqS1k2VX9CbmjityPhbmZ81vrp1MqLZZJxfuf2WgdkwtCsqUMqoyp3itEYjqe3hSRD6ZimEESTWfwEZc23t3",
  "key30": "4NKtwHVbtdhG2X7wredBw7Zh2M77nWAxnWB7DLBVKpDA6tpJygCF8veXDnDo7ZVDB82cUgvUX2XbHRauZ5Zhfb4w",
  "key31": "5DnVRiQtV3VBvzBr1NRso7Y7mozYXSFy3iW84cuLxMWv7JsSFDxrthCoZ2SGMxxah8nt7AC6DJPRBTDmZhjbxMsH",
  "key32": "5wt9ZJop8wNT2skxwTZ6xcQSepKLYBQyvqNYpyF42XRBBjUyN3SJGCRtm42rgahciyV9G5PfmeuFpmaDSNiz7Gw9",
  "key33": "3Vq4gKTfTTPqMtPJbyL5BohdamtUJyoTxbWigtQWFRaoNbEG5VPyKvWeEVT34fXw8eaNF1BEUL99nJC7Vxk9nPwC",
  "key34": "5SdwhWtdjnc8HNr4zZipwg8JPLujfJDG6BNU45DdWrYTJz91aZVLA5T8dPwFFdw1AyocThfm8efHB1X1oxsMeZTM",
  "key35": "4YVmxKK5jKPz9zhCLyJu9CWDE8dUVsr5i51Yprz4SPj9Xu9TnELRudGYUQuRKzUzpqTdTCdoLPiQrBoVHN2VaTJF",
  "key36": "2mU2bxu6GSBHQcJnPcJvuGA882a3jGy5ZnLXWP9uj619S9gXB6CQ2h8UTvW7bqrt45sMVFcUGJ9Mw1aDEmRcfime",
  "key37": "AwFpG3LBmgNKD78QeM9PJcmWiGYk6uecgWC4EXgeJVndc4eD1UqxsVKKBnSczT7PpjxeVtsFWE84zndFZuN9Pkp",
  "key38": "3Q6gJ9jRtgKQASLfjCH7RiWrBWWE1rKGnBxfMyPLRiPeGqKnwpskzEWZ5rfy2WdRaGZWjZQJL914tX2g8yniNHex",
  "key39": "3sHqvkhk3rzRmR6FWvvq6HX7aMG9hTytxqwGcPpfJHMfWMMpAkbNroeGgBp6sdBzzNgGRLugZnFdZjSfbraFcY6G",
  "key40": "2UPGEVSJTwLUGZgB9bWNBbh7pMRPK3bsaGEPJVa4yAZJxwvWurvwwNc2t47M1TC1inHJHJ8dKuYseyeoPg6BAQFW",
  "key41": "3pE3HS6W21QRpZrXX9SANTEETi7KCtwNB4gke3bfd2vEH6zRTbEitzSmHuvi1PF7ukJDyo1358VL1z4eCdoCvGiS",
  "key42": "2zocfnEEtSBRFDYRjP7BWNH1XfV7SCV7Cp7Yhi81ACPFBpzHG4EzSiwaFDEqyT9cX6qJQrEMYgcKTJ4mRU82qRvk",
  "key43": "LWBv2nAjMrBRRteNSMVEsQZKtdwdjsyC78B6M6W9jpd9DLzF4Y6c63K48PBU4M9nHGqAsA6nD6R3pvMXQQX5Eas",
  "key44": "6qcLwuJEoMUdGYhmKgnbNkP2A4MrPPMBtG98rL85XLGRD6PgkGHZwKWuGd9pF74YaZx36wKQFjfvu6qHdGpUeSu",
  "key45": "22aVmC9o8RczaBcs5iHu18Esd8ve8YzF98rrUHtJTNBNgBboF1eBUhCid1zV8RKZQ1LXqxJYd8cH6tmbCxYDi8fX",
  "key46": "MJ7Fx5hfKGsitUakk64onvQ4SQhNWY1mGdjZGT319zKJtvLPhriyxkoyiAzJQceUnbxZ5Np5oN35QXzLV9u4Bco",
  "key47": "Ln96Vp5JkMsoxnN31TMDTTpBGrsaWLhHsghFtUPF8prSmTEpDRS3JhTtSKEPp51nyYzDrM2n26YMS5XWt5ohYgc",
  "key48": "2VDw7HZ2yL79qYP3YRnpVAkhRzFvKfKTHdHJcUP2ksymK5bDaP6prPRc4M9gdfmED34g5gUDR45Fy2yVxqQ8XJSo"
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
