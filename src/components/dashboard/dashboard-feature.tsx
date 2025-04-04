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
    "3knZ5tt1t3SxdZAuGZndp3NmF1h1ihX7NLwprNgUs3ArZKEZ8YCx5Wo91w92Aik925r5cwk2WViSDx7FUQ6uHv8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43AG842ajkzDmTjjdawnmWuLQqAzVATuSMAs5NV4mRbfvDvsLfUArDGiavnRaMdyD5UCmbog6UTvHdfxheAe4mbQ",
  "key1": "3ne7PUEqPVk26jU3JLjKfwPYedJK8cUzzAL9VEjkqCrmZH2sAikctdWXvkxkANdCK868dWj7MGV9sdc3CtdJ3k5y",
  "key2": "4wNC4k18Z37YBAbFAqo6snGRB7xmd32E7iDo9aUqFeR2uwpxmcvHQ3uMVwD2Ci6t5WrsiTpTPiTFSyYi39mR6crZ",
  "key3": "4ywVg3vkwC1uZKew8nnk4QHMqed51FkiiJ4fgCGvHf8FZh8Qj1ZvjDoYHztYYxpCU9FygyS5B6k4MNErNZ3onjTD",
  "key4": "3PeaZcyh5wnAtGCXycDJio4vokCTLePcevq84gbtqQiPf8Hmfk2pCNdNvz7Pb4VXrubdjGSBAHXmG6y91CDsFvCQ",
  "key5": "4WRCD3azaN2U9X8McwytGYUorNAVkxd3qgAqdudaKGKhtcNbUXoDaeRx7jA67HCjoQ1sJrvi4igJYAugPqmF3JA5",
  "key6": "3uFK6kUrkPt4y7JMsWXLmoAbKGtWgAPFqdBPuxeBW6Wtu8LmAB5FVi5d8ZCfjaE8mfEWp5QfFDCWbxvLgXweM1oK",
  "key7": "2XoxyFbV1cWzDG19W6B2Xh2wKazaxKDSWEGjPoGVkcW6Wm412K5kP9a4LjdwYT4DCGkxo2b4HwECsRowWynPsjH2",
  "key8": "5TXuKjgSHc5E2VQRmTwWcJo2zCRqDaFWHLH61AVxH3RtNwVyKqTN2oH4xs8i6fc6kVf8zSPsaJQxSA2VNfa12NJo",
  "key9": "5G7GGi9Tj7hovc9MjL2S5gQB8aQXE5gKZXkxtEXWhTvu96hFsYR4rR3onUPNzM1ip3PCRvUimEAW9fQ9vs1amVme",
  "key10": "bXdBB7UK5EkAZYcsfWGjGQtoBoGHSXtGcUKWXATQWrBYNpXuimKpQ56Lb3Wozy3Dc1KmWjm3X4T4EoZnByT7nHZ",
  "key11": "2dr3tvDDgybXbLtHEyzxv8bLR1qpKfSHwTbBuv4qXfFmetDrkRFABBtBQVMtnm5ka1SRMiKMpa791jsw644GS8hG",
  "key12": "5oD3xT48Ju5vUEUQ6oAjtxDnniTnYjSvLgfNDTv9RiNt4mqDUHZMw2AF5E9kS8A9LbhH2C6s7jgosbJFeHkyfhaK",
  "key13": "VHPAki7WiUbp6Hq1fP6CvB8xqwhAVf11XzDyEPKwrzj98ZkMvTRGJWEDVsXKDXCk7WooQEiWbPPTWBv8A29Yqdr",
  "key14": "Neu1oEPDuNd9Lw5nQhaepMmX3FZ4mtC7kNA6ynJXBr5fd5rqeyJUAVZ7JeRQ1HcATzKDwXLhzMenx57apmxDQdM",
  "key15": "5UWU5NR8svSWt8vNSR4gdK2TxHvPQw7XbCWNn2spxPCHaHiR4ECPrVB2oXtjKkY6LiauJahZ51HNPXhfpscQAzPA",
  "key16": "Q42aGvqoXQeS14tTgSrGw5TY6pRzt9RwAgfLs1rzuVVPXsuvNEoFUH8a1jQNYJptbwy3oT19VRtFFZLS8LcYyH6",
  "key17": "5FwCfNio1sTFRQv29Kyus5b6af4zEbc87UkeBqkxWRm7tCCmGvaMYSYvtBSbHUdT4b9Evusq1Vy3G2LW8hvUE5Na",
  "key18": "5Vawk7Q3xSF18ajr1VRafvVQjL4iEu3yoZHApqYKo7WPr1sgXAufqEGyQ2bxoBWftFHwpK7KuFFJaYSv4rfTCfSz",
  "key19": "3zWXVX8MyHKRdqF9vtY1skEHx3P1zw52RG81rHBCb3b6HBV9Zs26EST3wxdQp9PmctnLGHiKAhD2oZ9CfDEjUdW6",
  "key20": "44kBzxkwXxhWVP97jtnTJb4ezky4AJgvjLQwx4YvU1TDfbuEzynvTXZcQ58nd8AL5AtudUrfX1mZWxXY9coE72kF",
  "key21": "4ou1TaSZfhaGafNav2iMBuzxjFLb7hJzD9uBut2WhiNzyrv7aJMFfZaGgwDZtLCJeZPRJTQNHUsQA4tbUYr5fhvq",
  "key22": "53d5nHNtGPtrdBNnyoihF9bJFb11151X9NGShqQvi5NKHfYPswEpTPpBszoS7pU4YZrzWwAMPL1j45G7DgCozfK7",
  "key23": "5x5piUuCQh2RG3eAd2WNUMKG8jauoTmKaxGQW3J7FB17nzTCruXesLuTnDqNhzmTh15d7e7abbiAok21fWmNMdB3",
  "key24": "ykxREEmFqXTBz4PH2EQUifHzMB16KKEay6RhdRgxEA57VJa1nDQGpxycs9J5TBnKzezkQZ9YJqeGQXeAXsR7LXQ",
  "key25": "2Zg2XtAxp6PiQBS6MStgszaJwiz6AH3hmurkQ6ND9MiuWDP2RrirrRnaB5kt4ybXGnRACz9wua6323FLoESNxj8s",
  "key26": "3FVFc7SKw3BCMkt5jniMVH36eHZcx4tMY7NGdbvoRuSTKjjWnh4NQbWuWUrpLoC1G2nJnme2Cq8d6VNJcnPqguoT",
  "key27": "5NsPfjSqeF9DZDFADKU8jdKW2LfhtWskcwoXhPJBnve7MKPr9gWn1H4PQQM1yYfGUietFm4jxpCvQa51P7b4Jnsa",
  "key28": "5gdUBSNnThnyRChfwTv8jysaRH1VwA7GgY9vVeuAvdahGgVgJAmpeEnmznTaw7iwqRUHmobnPpDrSzH1woreJfnb",
  "key29": "M4VniYUENyBbaZzZfqyas2Uu9QJGM3W1HiHo6ic9p3WEGQp3UHzJfQtY6m5QhMQYTzsMP8RxBgZtHXtPNkRzLzm",
  "key30": "kVfimEm29fcXtBK9EEzXAEvDBcNMywBWmppLPs3pwshuJPWMND6TdyAZTGSCmXrvJJK5B2He3diANtF3yppgCiB"
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
