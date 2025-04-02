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
    "4o3BHj7LRtyTYHh4qu9b6HUpsbN9twF87oh2yVeTA1SubaSiQwvZeRyPptak4vEeczctkxRsojnZm9cpx9NUKWnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMbF6A7Z5vSU1CitVPD4PH2YQRNsa3VGZcGzcF6yPZckE43daTmVawSvLqxMjg7Th847rKYDjd1uzh2ouj5G5Ry",
  "key1": "TQqrp4W8uxghhBFDnhAbAKcKNmtRWxAHDqdPoAaUiTEjmZnTkCnVqsTX5NuhSubjUPeKqMhWHtJUCGVGPZ82b3Y",
  "key2": "5bMvocfXhJQXaoV9Aqys3EZ6tswr5oypda22QpM8q5ZvGp7D4MsjoDbrDHDLiXBzKXP1nar8EmnqjhATaRyiy6pV",
  "key3": "5auvvaXJAEMnv9KfVw2P3XB6dEhR61mCBsJW1rPQJS4hPJapZKBuAdRm2YAjhDdBQ6c4tL2kDQjhfJf4kBMi7njA",
  "key4": "3KSQ1iNgkVkBeBXd9yeJKVidcPSe4u3Lkba3eS9kmcKHTGMD4Uj5SsFVHTvKkJZdyGxVj1fZCfeWFkGHiqwnMgUN",
  "key5": "4GqwSKPCxciqu9iZwU5sYE2VexX3LQSueWTm3W56ipijyKUuvd7twiMNsGTzbCGn9M7jcM5EPVriKpg47o11bxjQ",
  "key6": "5yVo3BWFhe56zNixuiEdXBQ34seF7ejGEN12oKWV1ysrvYUPwhtEBtHjjec12Dfk3Ajm4rmYi1jskMG9vJdwV8uk",
  "key7": "5EcaesqgNQd4LYraNwDnKxp6QEv6rrrJNdxADVMWXHXVsqXPoNEGmJnnsnyyGbdusHoNyjb5LtsMr49svWvACHDk",
  "key8": "2Jxnwoeu2BiAhNRcCH5y8FQGz4uD1ruUx1RuTd9SpKtaFToCRNTV8cCxc5Bu95jSTKVkABXz6w18LZ8C4zRT8DGX",
  "key9": "4uEqcD59c1Ms5vofDnuLaDJDKJBbR6tUrdD317rANwn4cwwj7D9oeo1imWqe3X5xnZ9hh1DGYkJFLvrZHFQ9K33y",
  "key10": "EqbJw2U4EEYMWp61eVrofjZPBcA5zEpsjRfUdJPgbU6gtCJfEYDzHsT1ocjPVmsWE23P4rirskNh2FiXrQBKy1L",
  "key11": "Kem3p2MJp3SQPzipXq7VqDKAiDx1s95yMLLqKCeDbU2mCQf13Tg57TpDSxzhEJ9ZZqbuoUVpnMZMQ5R6Ko2LH2U",
  "key12": "3HFBttBxmXguwf76gXfPNdo5StZynK45BFDX9JpK7ASuhqXFXNjB2XFoUet5jVaGps3rwRJcaqnyBWmicRHrZV2t",
  "key13": "3ZjcVMHwpJ4Xgr7kZ5zFy3qpeqdJ5rykuYNvcMh3zigsp8X1Va9VoEAKNRAtRi4VPTEA4u2xBqCbcfdsPapAAtUu",
  "key14": "haQ26osRitMeSVLG1a6yDPbNWCFhrVyiCVWCLXrfF1dqF1NP8pTaPAKUB4S8FgUNxMxqJYUgEzZkVzx7AW1QwpA",
  "key15": "4qg1FUGzxN7NSx9qp6uaFRyHdwyu9c8oXbpr2PTMHqsnDxeZnfuy594HUeut2JuUVdR4hxuBV2fh8X96HrjdEGUm",
  "key16": "2C7ao7LGpn48ZkFf5y2K6wu4RcnQnKjq1oyNSDtXDh3Kcvt631Px7gmxVFvXjMhYnv2FLmz3hLjfqHYeJ8hncV1E",
  "key17": "5m2vaM7dmnKGyLjG9p8uewnAt28drfTs226iJz9LTQMAC6AKYgEAhCYTmp16SudvBHxVYHX6BDeSySSnkXbsh1i4",
  "key18": "4vxvs8nHjRZ3spQ4VCwySonujnSCV2MXChzeqrwzw3G2KrdQe8LzyKREDERQWH1j9yF9QifVWwWa5Kcg9KHri6Jk",
  "key19": "CWUBGzjDvRLqmi3DPQVcXPYsogspuUXZ6dGgEKHvw6fMYS8LPMEoKHF32YaQS6G3uUie5y4wwk34BozsFadxLW4",
  "key20": "39VwPBAYBCdGWqvpdwiguB68MW82vE6kErRkK8QFHT2L94pnF255oXnYQCnTkCcBrnxkkGrVgVsDMTtVe3DszuLi",
  "key21": "3Qk3KuZz4gEgCzQK7f2rB4CeKfCpoUK4vYPNFXKvKrsCqQsqXxuzaFcnKf8xiMvZzmXNa4gT1CvvqxjAL81jkdw5",
  "key22": "4xo2VdsGvNk7QRfb9Y4V4D43wR3niTU8RTtRQN4G2zdzxN5Ha72wTMuPkKjHz5ThmnWM3HZN7DFqqNhJck5hHeLD",
  "key23": "2r4bWVg6Y5gTi3gkyLQ3cmfQDhTb1oog3k6QPHqc94VmBm1jsfUzbZzbYPZMPaTVqbkMJGoqDDSWa7mzNqeps27Z",
  "key24": "W1sY99mttEb3PcX97jaxts3uurrVxrZs3JHCzoQKDh7kWVFv7mP4S7adGBkJ5j9RcsxVYrGCedjphytu9pZAxyA",
  "key25": "5P9RVwk2JK7SEDrcyGirfr82sSdwpYnkMMHLWjNdSLcAftZJsrugrVXifna2sJL8L9uDWRHnUCnom4mRDeRQCniM",
  "key26": "3S4iqhtahPhtEsDBQZ6wRu41GRz35URKThLykHTQW8pz2i7buSK9FAAnxRNKF2snnLY2GCDmskTYzTtNQrpc2gh7",
  "key27": "3KkDzAKUVvVYYWBUgCCLwj5Qf1QxW5qoHohKuRvYzrwyRj3YyfwMuQFusDnrKYwTESvCBJDBQPHPrKKfZWkG1ab9",
  "key28": "2oNmLSoGoiBig3up275xtogHtMpNCxqzkjVsSd1qQFsER3UF8beZhE1Q82GCjoGAHKxkArV6T2K4NAZp6P2pkjJ1",
  "key29": "56GsADsM6SSWqCtLiKW5Md4mZR3r59nUWDRDujp9gF6YKEEJWfCVM5ecW6mjgPGwBcZNKoCk5j5uGZB47aiMLLq5",
  "key30": "4yaC45RCcfmAtxiQbVbVk5d7HC79ZQgKxFubXQVxoaHWSaJDp5P5it1dDy85gZS8pf9NZXhGTTvX7s2oCyYsWStG",
  "key31": "SnivwaEY3VSX654DcVLLzF4YG5m9oKgkmiixLg5ZDxzgKM4GAVwwJufxS1eA2St4qhbQupXb4pBXS6T5SFo2P3Z",
  "key32": "2YrCvJvFHBYWXfXjvemDjbwS94yVjj6FUjdUKXyFUwUETHCbDtVZ1syU31BRYFLAVhUneMAa8D662AG3aumD6dyu"
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
