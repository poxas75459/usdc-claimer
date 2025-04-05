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
    "5dGq7PUjHsWBhGNtCXiRtNnPDkXEcupz7YuSvziYi7BaqsyJq6VtjuzGyhHEGwKWFzy4pnkqTpqNPnhM8CE5J619"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKhS9RyM3jdE7HWimc4S9Ch5HLWiLwfAZSzvhckTSDWmJms1NYramqGkQ4dFKb8e8d48aFV4gmsjTVd8Qi3FTkX",
  "key1": "mNzUZW11oPdaqa3mvh3wsFzxEYg6Uc9GReJMty4VCsqFVBNff6taqvQYiKG6PYGeXNu8CGSwTizPJEPhytpqow1",
  "key2": "PavSPTheyJS5Ruau3hFUcURXcS3vg2hjvgaG4y7GWZ9mLV8wsXzZM4wvE2JFxYavShFx1bJJaPJhvcoP8E52pgz",
  "key3": "5PPUtFbaYkpmuBUnnhDkuf9zxfC3M5B5FQdrY6Qk4LRFHSC1hnUDymEVueuAzMQfBUV4c7zVNwpm8WaxweVPgr5c",
  "key4": "3CKFbqwByStcd9hPyVyH2WKewkJgJWeKXG6mPXw8KARjg1XLjZY7zfEvuDu2REKJeuEeM3HMkWv8Y22tGGrogFyW",
  "key5": "2GKPHRMYP4o7zHNj44Q3bavW1n4FaeCKdNtKm21bauPQAbVTe3YgpuTYjzUxxB96Kk6QcChV3MgsB2PZDwqi4JPw",
  "key6": "4jRkQE9VdTBSNU6dtKupcQky5JDdPUseSbjcqnrDJGmwT93ttC1Y62bMBEGFwLsv6hco4cg51B9X13L5CtHkKYvT",
  "key7": "4uQXg5z6biN7TuKJirsCboQH5eCCN1fGKNSf7R7HtqHUpjn4whXHApJjYedF5djsHBcvKrfAH75KcU3K6ZzSrHsY",
  "key8": "2UpfrF6ocUwqF1crBBxWTifsuP6ieN9XCtA3CCXFYLeBNDoBLwHmFRs2BjvqYgykGtz7ZyFrevTtCAbgmsqMN9Ng",
  "key9": "TFXYZEtT7xhHBCdDaPAcjYesZASZoDx2ej8zdR5TzNigvvkPcpiJWXZdgwRY3bDtaPyLCCZqnYUhRPiAUnGes8v",
  "key10": "2f67LZJBa1kzbCYc58yKTDDyoFEcb4ucvPm2J1LQQk2rsCrxKqYTx1YL7fWXVt25TNFK3CcFA9wKaTvydsVaGjGQ",
  "key11": "5Uuc66Du6eTsjmLxg5JGdHW9SdsLjS6pT2wbADp5fKpUZPJgnhp5pxKrwqzzuydY3E6M7bhVcagtxxox7kHjkho9",
  "key12": "4WtoZEpCpMS1vzWhzQvk7BbqD7rLzf64CRRG5SnGEpvGFR3t6nxf1mwzB8hvYgbjESGCwAhAxL1PEAPyhkSGdWrx",
  "key13": "4Z8Q1qkxUzdLt5p6Yrs9ZXoxgi45FivBiPT6BhVKqr9hYbEzLbuh7tJGSPEKnEqSXmU1APsYurqrjqDNR3gQ45ys",
  "key14": "21Rwe73PbSQiVKtHrugyfXUrPp2tJ1YsZaaevopW15ED7XZt2kqTRyDUGVQkDGbQEfFbavX7s98JZtLPanrPer9h",
  "key15": "5sNCpD8ZmNt5vDdaJuWUQmZDrDfgM4oMwLEKVax13J2EGhyqUZPw7JEmr2gbPSSXK1PB8UyXWYDToZdWZWKA8uQD",
  "key16": "3HBtQjRggWv9gUXsAedA8iXLBkzZsBAfmb7ZYkQxGGHrX8ZMvG6xkrAf4k5vUR3C4LwTshM7WddB14GG5EMnTBFu",
  "key17": "2AnJrv1wrQhLXZHhTGtWm6vKs4YLUC1GYdLJoysS9uMHaBiQWMqvoYkHoYQMq5bJEeMkjZnDpsUVq3UPBREt6WSh",
  "key18": "2qQHfE6g1mf5NmA2gpTpK8DuHsntMJmU2BEy8tweNoJouabcr5JvrcApHYxey4MMqGcMi17RReqaQMwgFBwJtTSs",
  "key19": "3xDFKuPid4TkfrrbYaQvHrHSu15MKhpH9vEPvTEAVNCS4p2TndNL45yKqniThhhLq1rAL7FXfV8an1hHe9RnkvVZ",
  "key20": "3CSj63pCP1PzA3yNsf32hNBTSrm9ipBPXSB8iSA3qGrm32eCzbWpw4n3b3WPHodTgmfq7tMSqh6AwFrPS37ih59i",
  "key21": "2AesGixXuCx5X5jPQoCFTbmhUszE2FPUeyNwFGwuAKRba7PeMV5MCAMZzBxHxNZtLCECdmLfVwqQfh5y5f9EXWR8",
  "key22": "2eZYvLTKxhYyjbCkRtCJoewShaDdAv1JUNmmYa3mtUT3nQLJLmUy2Lj2KeNLXN13YusxPmzZEsTUZVGQtCQg2Xcj",
  "key23": "2G16RjM1TdDKfDY3EHUbGdyH1rh4bprM37Fi41KVLsK1LHqZRcXyM66GeWrPzREve3THJXMaLsjs4c4xGZ3tntgR",
  "key24": "4XMVTXRZF1tvRCyzpwFokr3VbdX4mKDKV2uYTsPWTMALFCRqRYQvYA5vDVBemPvYy3WRETRHf6ogdtQdrKRB19Xt",
  "key25": "PwBVDVUXLrsNuoJtY8fJUGsHhWXhqmN587ey8Uwsa2kuTf3okVXu7eNt1rufTEbAZQTf5Ud5TfhcpqK6GiDQnrk",
  "key26": "5wApzabqHkprfYQ4tgSRRyPNsZERoNAiq59E8ghxeHL3pKyLj6ZQ8d6K6wkjuwi83EeuD5MHzDEdadQtRD7gUziK",
  "key27": "3a9LcugPBQ9r2tCxt5f8TYq7g76YFmjt6aVroxEvUoFvEYNps25MqvuoasKeBTaYQ16kPWgQMnGtJAbXTveSRMHy",
  "key28": "31S1q3zpfKzEVpTU6WwYLen3QTdYncc74xaxaLjo17NTr3iLPMh23CwH9wwzW5XbdonFMFdYgsgFqSb93PXekt4j",
  "key29": "5QYzXcjpRhPBKGUh8JLcC7WXRS4g4vCts2SHCbc9iijR6RQJzRo96h6HkmJxS5kDyaoSUHXFea2RWQka1TESkGFJ",
  "key30": "28QtruU2HxfazzSyHQj1jcvzDiVsZbjgPSEZLowxEA2MUKR5xczYkDFgvaR9x87RcwvGiwdMgNuy94au58rAn2Lz",
  "key31": "3hGyZXaYXgL4nQd3UCa99dE3wcmJ1oihEkGGDYgno2yoLe7d3rmZi7TwQ8PLBYtfCNmF2YmSnaEGw3Udc7KzxEWq",
  "key32": "3SDwNt5DSH4FLSvoQpsyRzbU86PbPYrdqyYKnNRCGZvWcGuCChVzbLV6GFqawpdwESxEHY81NG9F7sRo8DfrMJaR",
  "key33": "4612A9EWcvDfzn3Uo9ed2ExsPzGN42T1wHQTW7jkNeCLr9zGeRCZVWHaQTkRmB8E4AEMYWpZdizP3CuC8HQhXhXF",
  "key34": "4BbqpKRYxUBUyAyJNw1eW5jDEVG3Sk6zqUt8SSNKiM6h9kb8fZCoAE3no5P34akKE1Q8cdPKABsHTCXn9nmXqhm8",
  "key35": "4aKJwoJQ37GZcquGv6EJeJTX45DL1cdpMoNuPGenYDhusFogYtnJe3gXUWQ4KTJ19aCk89aRUH9SbrEp53h9KhQW",
  "key36": "3bUtF8whAGqtj7exNQNoHgyxuhbbt7pZrDFtFj5547CmdyPGXPG6QgeyWi9unmnW4s36fwFZNdYFQ3Kzyw65f13C",
  "key37": "3kyxhRivs3ZU5xeTSDixBz5DtbLhrPU8r4ymVSxdnaySxeYT2itDwjckemTuVVd6Kn95QTF7amiobyTe2jRtBE3U",
  "key38": "2gTQYXbFUhHFUxbCM4vB3otEWrPRNcq4diDFu9DoShHU8ingnVxb1nSirdC8GVJbfAus1EZMNkgLeaZnyepTGKgA",
  "key39": "4h6VqCUFzyp9FPrM6SN8kie1Uzb5DzTaAKC2sy3on7CjC4HNKRbFVauYtrtrtffxoLzQawnAfxS7FBT47cRpoV8A",
  "key40": "36rB3ATSC1Q8w5kBmPCDsYFtah3qfAwmdquNeWud4ZfWbd3yizFFQ55fqMv6U7ULXKouMbApmTihvhpauRxNhF14",
  "key41": "2muzVHcep7o8nY51EaARksVqWGwFrEooRBBbVai1dnRmvrbwy5pdzVmfY8JjjWSDVyReRLQLFpjjWESUY1rJ3Xjs",
  "key42": "2Tyz8GdZzpSJWX1bpHfXMbx3AkWfvYsyAPiL7jyZnGd5xhZHyW2bpHs6GqHK1vZFtE33Jq3uTG1FUgUvkJNH6Hht"
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
