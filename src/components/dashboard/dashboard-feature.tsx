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
    "4StaUmFZycjcHxC2e828jqawqoSCrWVvvzFJkBQjMAgxKJ2WhWCvvUhJmdbq2tw1k8zQgwLMucmsDMwaBB92aRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzg3V9ZDAzkNpTLqiVPgKhmc1k689VGkJz4NHrABv6egCqg5syNeQbsRdry4XFviDST12tmsMy6U7fe28fWwcys",
  "key1": "4wFNPFg7NiseHyar7UQiviaUkSL4JLsYeEe9bDRXcC9bKCPCCtTw4ByWJ7TSauZQpuy4xegviUzt7TYfwGjnpb4g",
  "key2": "2Ri6Reax7tC9Ahy7yafTBb4xyqavPWhHgXtmdbkqHqt7o42Y6mqLHxNMHh46vPtEeuKssdBsV3QF9QZEPDmeRrM1",
  "key3": "2vuCYaAmY6acE4CXT64yGF7sc3pMmF7GzMB8eo4rJNkyU5CPFN5AgmAZUMFvYbrNtTYv3PzvYdV2dvT8HaUpigXw",
  "key4": "cWdkqijfMDjGs8xdrjyJxUFhseGng6PFZS4AEAnVAZWfh9eZn611noK3yUwKfGPAa1TkjFv2buFQpHuXQJGUCQr",
  "key5": "9WYc4fARxWzajYvSabtF3TjpgUFfFMfSzNgeGGSxEDALPjGgnnkiZfXgzorUvyhfwYgMGXJmNJJQQvFvVqKZeex",
  "key6": "3xQAUcvJd6CD7gBdnprXqJvUQrU5tm4EF3pVTNfa3Vd1JnWp49PNSKpQDysEGs883QxjhAvb7n8fFhMmPV26o17V",
  "key7": "5p2gmvqi5bq4a49os8DTjBxZRqSzDUiKcDM5RkJixUG75YcPCx8sQVb5YYNrxt4r1YBgfCAXEWc3YWNjgebyZb3A",
  "key8": "495WGCJcrAV2E6ryriSnLMSiQH87AYiCeZhaDY4sAfDDt3iA21MYQwj8hY254N2LaXh2AwEmXk39aayigmQgeE58",
  "key9": "2GmxBmg6pvaNob3HbuLf744Hzgm6y7Lj3z39RVyhpAg244Zkvyydf3Ex2TGqW5v9hnkXXVXsaYhhMQzFmp9kUxNf",
  "key10": "bUv752o8RMo3PgcnAFkbmcZCiLARbjCWLPb329GfBWmbkEtEmKNT9NEEFj1JQNg3PJRUQvtK9p7BcNTiGg1zrK7",
  "key11": "4Vn5zLdhYayeyGWorG5D7gq5iszGghoARALFPTkzhRzt8cm1GgQtUPDsaXgSYddNcFHGmiXVeMLFsqh37bJz4MBP",
  "key12": "oQmxAgJoW92QramkTJjehFHsEkc2xA3wPjaArKzmsn149hdaYdL4SEN5GGhTrboB3MearoTMQ5LyN76x2YVHBZD",
  "key13": "rhVzMK4sTTMou1AvxnHdaf12vuPGJgCEdb9dHm9peghzpUQ1bVYtzjpwz5vE6NEh1s78ay3waxkzYym48fon6rM",
  "key14": "4JGCk3M1hKDJ7Y7vmxun7uWQ5Qg2X94f7YswgbnZoDWSnthy6QZAS1FN221UeE5XkxD51s9gFRDDuRX5ha3qd9oH",
  "key15": "K4BQ8fBSZMsu6oT4wo2McmvVEB7d1Vwwce6inz35Q7aQ1aKhnRJp19YSg29jLYNgcGJzEBJJnHHCgMHwzuXKCXc",
  "key16": "576v1rBBzWBtoPe2Wg3AQJz5oMHi75Eh6eYrLJfBXmzcYbmvdmQgbnJv19hj3YQpPnX5YyxGQ4SZY9DxmmvGA9NH",
  "key17": "QvHzesUA6etatbFwdqw23tvKnSP1RKjyCQExXzrQno1aSB3CBus7AfUMDDUDngq8xpdHCK1ezKGpEdy8perrywD",
  "key18": "4gMiNgc81Ppm83omG1seEzwm1SXRJVjqr2vYq6HgYyHXv2UWpyhHbeNB1FyJy8CVVrNKkL5wNhSp4mEiESCPixDJ",
  "key19": "4VcgnV21zfoB6jfxk5sw4hZWg9REohp6iHpyR4cVxVsRyxgrX16x69Rkyx7WqayCveqBeus6Z34crS9ZkU2dQGaC",
  "key20": "5Y3CV2cVAmAqk3BgN5vX35nAoWGSoG6Qr1iH2oHHJkkicSmdw7HfjQrLtSApL1S9uMzuCVxaKCTAGMuU6to9mMD7",
  "key21": "3ppDCYWzTwnRgZ4bFyf81qtS5xE6ngAx9mKxYZ6SokFcxbmZ36tDox7pSvxkrMGaJNHqrqqpXWuTp6uerdar1osx",
  "key22": "3TjiKkiwUYxa6N6hUDVvrEQWTsHXcfKJtEAy5BLBmu2noZNgL1bLZgQVmMfwSXa8PciwvRDxw2tYAcqQ5g2GzSfC",
  "key23": "2FA34RepdrKLf8B9Fm8KotDo2ZdA88yC4A8PqQakfrGB7Y68Xwra31ayPcbwoHMeGtbGM666AfCngACHUWgAcPxc",
  "key24": "2g4QMnqVfTKjKbjjZUCVtk2ddynLZ5Habw3mW6okKzBSoYvfXuKXMZ5eXQMGKpAbcfrBdEaeZ5zFxtYRB9oJhb4G",
  "key25": "4YCT5Gtm4SjRGpmj8ssrYrUTRJJic6ZJkR2N6pWzcgTkP1vUti6NLjdnHu712qoNhQaEronfqBMW1suZUEC5wJQW",
  "key26": "4CtuHV3ESxucXDUeBUyffMnPS6pHBeZZr2oediT3myY1WfRGpsUiQLn1WMQZ6CtRsr2i5rj9djor5EhybdQnaJab",
  "key27": "3sjcHpTd5mz92vCUJ8Bw4WyKk2BvSMZ19oz3YRiPtByUjszE9HwfpAZWDA9RLT1TeDuogTmmxRgDpPVadjVmw7z1",
  "key28": "41sCFK8bMn6vroShwxZdjAmBhbpj45P2jRPqY43C52S8JeGKzjZjJSjPLaSNKwBjk5YVLyWmDemgFzp4JJhZiFX",
  "key29": "4tHXQLQymoFG5w5xPxSLPZNqk4UWdJmsDuGjxndndtYC8wnrAZ9Px35EUYZsnfBeDKj5BrcHjhLuNTWiyiRmmLwS",
  "key30": "3AP3QzcXKr5ts2poA8voc9UXyS9GxMxU8rEk9UguHV6rfyMTM7Y3BxdiHu4FiaxUZkwjroJiDQE45bW1hVzvjXzX",
  "key31": "3sXMBbz3aLJLVdvM4bhitdvUiqZqU4dx2vcDSJgsiWM1EM6wxg4CZ1JDqj9e8h4UbKUTb7d975H1qvRZwJQB5D2c",
  "key32": "qwnf9DJbRKj5oKjDRXte5ctMn7PtKFsYZzzGGrBvLNbJnB9dWAayD3Ku7B4UUB1dFygpWeWF8hXmbLvX2Z4erCa",
  "key33": "97NKy1zM11hui693W85GPAU6yMxnZaVmZArtqgvibfMUqEYqUTxiCw9yQAzdbUADrSi6cptu472UfHdt82NDYXR",
  "key34": "5fmKRreJJ8AwjouggdEpQua7QRF15VZcKoF8gkYAY4pxrBSBxF4bmn5fkybmwNwdMuEuVpxEa2q5wn1TYHd1ia9h",
  "key35": "3KWgZYqj36kev1W44fek4sVboATiwznxhqwvpZNifxZvtB1xiowetdgaXkGtAbZYXX1VBhN2bmxTCWDjjjsZHdAw",
  "key36": "2qVQmC69XWk3UytxwZMxiAJEN4ui5uMQBX4o3hU6vKkDGJE3KSuBSeG9X79mCb7z2gZNxrhNQXBwLBSBWmm8EW5L",
  "key37": "5DeU2UjgrUngybziGAC62jDZMmnBfqNxTzMKoUuvCrVjzMQW1jxHonehcKQENXQNc9hhgkXBfXEzsfFxvvJ5jLUC",
  "key38": "2yQ17zZ3uwLZEATquHhycvc9Ps6T5k3sHrz1av5KAqAzRcKgsQDaHUXmGpVvbNg8oN5DWQAMh3xGva2psHuSNQw7",
  "key39": "4kyy3LysRHSgAGBTpnSqExp9C6XFrVDSgQczUjUiH8ihk8PEiFF7PZKYDPtKFbGd1pqj2h4nj8iH3romJzrVxwSH",
  "key40": "3ovkECfFXKQiaj1qpB3TCtJs3o4CChjTEnFgmqyp5HAKnabQruyTBcusKPRAqBUexJp3u6bvr2ii3ueGriqBHmas"
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
