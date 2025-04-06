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
    "sU8AzfdKHwuxjkd9h7nCGm4hDfE4M2zhGkxDnBF7M1gDbNsdWVAGDFGLDrDvAoo3d7pqxTvkv4NRfKzGBgT9bJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgYZeawuktArDoMNZwBKkzR7FmYUh8drMT5eCduVG7BGsoXCqyqCCKhysKzvezHXJdNtDQeVDG6VAKFut6tsEFt",
  "key1": "EeaMvbZKATn8yivQhiRatoAybU7omq1EzHky2qfhiJ3CjtMLZzjz1yRaGAjtzzxukBayA2bmtm3obhRkBUPj7Yz",
  "key2": "4ZMRAGKneH6Kr8E8G4CPosB8W5C49xi5D6xWmDuBZkiYXrswQ1LiJCj96yhQLDLoHfAr9zas2Zgfa8uKNgAHSVB6",
  "key3": "5rLic9FsEZ8htYiXJWvkffcPaPFL76nn7VSZo4zhGfZxvmTdnDSJpn4dwhewCUVYhhBzMEsYvnmdFXFR2SoRQurt",
  "key4": "5EahM2Bv7ZRHCkeqGqf3os5VREMKUGNt4XUeegPz4ouKnrFXdrvKtaS6qzsWnGARW7dbDebx7CjSyCSaskBhkEuX",
  "key5": "2TxGgXgnWgZvx8CSHrTZQU8CGHJYjjh7PpynsEEv2CiyP5vj8zLnq6BbkmvXQMi8RASTyZK723XnRzoistjgVyfh",
  "key6": "4pdA6dcP1u31MQ5JJx3KEbgsowMvbUa5oVP6oYvXGG5hA8tPVvpkhrscYnkq3JhHaW8QgsfM5865dVtwtnmCaKH7",
  "key7": "2y85PrUQhVciULPQHSsDXcrduQER3nkHHBG65LCxvSRawhvdafcuZAqSw9Epka16u3TQUCSafEL2Bcdp5HvP8yRu",
  "key8": "5AJd1r5FJ1yftQEn6XpykxA8F8WaZqmYuwLSBWBcvcW5jp8a4jMyVtuprLfY6RhaLQV2vQs5SCEMA3g9ynJXhNKz",
  "key9": "2bixdWYm2SBbwv7fSQFFRnWhcsvjT2D6F93QFFy6ixfMjGXe6R2mZDUETfaWd9HU2YwwRBgA1xFSTgRzHGgFU6n7",
  "key10": "45gExhQveeYKxZfpjckoDGCmZnUM4fk7bpxoZxgUfdEbdZHnPNsqktGhdF7iyFNZNTbUmHrAqdrWPTwD36XSCBbp",
  "key11": "3UTyK2vaVvAtrrF5QjG8htiRGMQXxtBkCjn1FhuoUteg5iUz4xWo41i6crua8Qz4AQBrh3wPbAA4Y5cMGDaH5MYJ",
  "key12": "5pc9GaHq6dRj9G3zzHwvhrighPMxfzX5CoEYKjamqcv8JUDom6UCHuMLsPiCgvkCSyoDNoMLiTsE5Cop5qvu5FUJ",
  "key13": "3ujhvAmVaX32jpxTFAasRTDUPE8qpYDZUJGG7AfwZRrDqb4eq2JiLRVgnJ9meEAmnGqxtg1NiwAiB2rj2fd2uH7i",
  "key14": "3Jx39NT5vQHUnA488Zi5GfcUKWgD1kmupyEWc8m8Y44UYqaEEF8xEZsMeGeUfp4LTUdB4e5xrWVgp4QYZiaJetBd",
  "key15": "5xqxSd5KXjEBBnBZBcfddia5LfPjDQ7MqSYW2C1BmyrjXjHhE29B68ohi6K7NxfMJ5ZEBRzUsaJ4dj69u29G4CUb",
  "key16": "W8ym74tdGmE3gngwXp2izeCaV5vbvf9ybcheazzQufvRoP7xeAf9XHUo5jBcjhfd7hRSznbZXnpR7ngfr3LQP4J",
  "key17": "3PsdF2bHkBdETD1vbLJyH94h4iMowGGNx1XSwtCuA87JZepRqLqgd4zPQnKzUF6TTzmkXS2v97wanxcrTPkcn9Fn",
  "key18": "2pQBHw5RB8qKViyXxrcNtuNWUe7xU3gV78GqSNpLF9v1uUF9yFJziFj3aRT3FEbjrShWxCEUcPGj9k2NjjsZijf6",
  "key19": "3TRqLiw7wfegi4HENGbkVURh3bSUF9DF2Ek5GN5DKZJcTc5oc4xZZDSg9KdzfQHjS8xFpNMBxW2xtDapnX3n35JD",
  "key20": "4NiBRUoeQtaquseFinnLmWa4DYL1JgEFY8xTkdUzxHDXctbqaaXXYR9A2J83kzsF4AXGVBBAREjoB8oHCj2VSAjX",
  "key21": "3B5NkazzS8NHQZuJDXk8gqKAmLHvt33DT7yioRDYZR6daDBxVapgY13SxLyXnCCaP5NNf7q4PNrbgji6nBrZBnp4",
  "key22": "4JgEexFX9CCLDb4ERXffPeryjrqHvnJ55ff4cZuQzT5goVnj7WNVJzF7hJBMUVXZDPhm35iBLmPhmptN4o4qXFoL",
  "key23": "vW4iHMk2QzrHLvMRtepoVNabyBrYjQNFrHzkKny5vFmuQDVuTA788KxFwPUZJQwGiZBnguMuFYC3tPUG2UPemvM",
  "key24": "3xAX7MzfhMzpWBGVwwzcjuC9bLKEbRKnBr1p4SkN2ThwJE91LHshF6gDFRWzmJx5oPMdUE67eTSfmaW1drVNHHWP",
  "key25": "3ovnKXyW8LUhSmMZUUu4KTkycHuUznvRxVLrPrbmB9LVvvas4v2D13u56aAyFweaEFz4nRDAoKdQVb9mjy1WHMDL",
  "key26": "5vFzikGjP9ERzkonwPsu4zPR2LSfG48yCqTZpZzHXMrjQKtDJBfSNXvGRPxKDbUMJ8kGGJyqrZ5GMpsZPwcz8zkY",
  "key27": "7ZAARuqU5Wr9rC1fcBP9dYJKX2DwTjV79xh14kiashzU5LVLuiQGznF9VHggUbf32vLWvgXksj73m4jmxLEf87C",
  "key28": "23m4qEGi8oqWjniDuQaZ4GaVmsp8WdNT2nei9g7aE5iEiqfxrbGrFRx6h88rqLgFBxvugSkbaVn5Zzd3xcLJPMTM",
  "key29": "2QKM7m1NQra8EMuQuPti9XYrrBiqRWZJ9zRkb5YRejej45HePgrX4BfGcihPijoL996f8DX6RuoaADNVxMTn9GFn",
  "key30": "3hXrZjbfQjWU3WA9vm52vM2grKLtmuwxLrRPM8x9ghzjmF58Ku7AUYDTjAcn8SaJH1qMKLBc3yDBrnAaca63YYLj",
  "key31": "5i6RocuzJuQM541jqW7RxZvLxM5psfqztnRuym6r4bzH8MgEPVMSyi5B29SBsMiAxnHkLjbHsSzdcmv5qHTS9RP2",
  "key32": "2p2C1CxvBwhBA4U3DP2VNko7yHtHCAS3oaQwPfqbNWqJ79GcX5QbF6uS8aCkrRspWAzL8MvVqmHvn5rTi6P3FXxw",
  "key33": "2gfMA4j2XCFiNxBouAgEqbhtxFr7Pn4DHBHH4qvpiJoWysjc7xv4n3ZRqpLHiCrhaUefvYmP9cqfbbWtfaKRH8Gb",
  "key34": "rsBqPuTLUG2p9LyfozVNyFTk4mNJy63h6mSNkoHbciizHJayXYsbQcrxtk7biyGNZXcGMtkbs8VXKxwDLFLU9ev",
  "key35": "51BsVuFedM9V8Rhjs7VxKQ9kCLQUHVCJRR8VBvxuz7sPsssN6Bbkadiwfnjk3kNB5JofcU1Pb1YasWBUhkpCudqj",
  "key36": "3NsvnttHBWfrsNFPQRBvxZUATiMNNnmVPd74toYmbKELUBnz4PsgvZKKYkgwMtMUTZLrdyvZddxakVMpAyq9GojX",
  "key37": "4fFrs7BPDtnoEi7XhTX4Y2d5GUuTPi361shMmWUR7cEeBRKiMcFnR5ve8xYaLqAvWquZjcP1JUqXDFmescifXiye",
  "key38": "3nDk4GTQXvgcNPd8M3SGsUe3tzMHZasVdKVGH2UQg2MXBiD5CRfXCUa8rycj7hab2GiUN8if2ud1K8hyPa4dUh9",
  "key39": "62nLpxGrqUJ2qrZ1tbXp9866JwcgPXQ5EE9JBH6BjtfTd6iEnLNqo3zE6vEAkXpzvTTG5Ui2VGrMspQP9fsjmJUN",
  "key40": "1jtjSG3PiyzpS1qsPjSNPgV6k6FbTR2uLUAxBkv5DGSLFLHyEP5KSxhcChU1bfCCGN1Lk9paQy8EXwXYE23cYzU",
  "key41": "4stgp8sez4sjFg8LsQoffpJwf37JsHBmrTF1P4c8gz4hWueRBy92KC34rBRSY8tshWLp1dp5FMbo1x9ifw1yDVr8",
  "key42": "2Pr8Pie7uy4ev4VMqaWDxvpfojshRMruRTHRto15xVv94b2GT87YQpYKCXbRfbNH5gTmY5r8s5JUGf9zLqLXaUFB",
  "key43": "tZaQNK55p3yxHgkH38b1eCfbNfuLkVWJULLSkDUN5WjSZoBWaaYmGfYg4nUjfSQccqv9AuFKUMwxj4qDXqLPjyb",
  "key44": "5Q9cU3CSRLVbttU8gxdRn5LDYuUu8S4mef3PJsokadVXosPhpzM6Jj1apCDnUrFopN5d6NkcbSTPPJnRrk5m5pE7",
  "key45": "4w9owayYsTVCaHqzf8LSpJsYF2rEVzVLsWatjx8JUMwo7m5gPhipeT98w7hY7uaSPe7o8CYj1FLAmzRAHgqDmrgJ"
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
