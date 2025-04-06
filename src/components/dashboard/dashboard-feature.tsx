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
    "5eM5qhLNsSZc8VqmGdpXyvpNrTJ51WAxUU6Meg3GARiA15kvq9q2fFhocYH8Bb8n58Q93ZWxvRihZH2g9TZ9tHzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsBGTgffJoYARBTnhxd2D9niL47LswF2zsuoCP3SThL2KPaaMP4kXZCdh52firkGB8fcuodVjLqTWK2rNdsy4cd",
  "key1": "3u4sj4FEAYPzX6PwP1m2AdSBEKM9yGw81o6H6oEfzrzEXorw31o5NsUSe8aHw1DDydiKevwMskbE8S76KvEdDEJt",
  "key2": "1rRN5h5rMEb6Aovb3in1XK1AKcA6WTvx9vLpuMsKNNG1to6j9T9ti7r3isLMu1ggUfnXTgNah1VxSt52hSJGAmM",
  "key3": "2pxRdtGqrxkZYo5rabXe732brmDndz3Rsut26RX2U2nJD47rBgVymb56LmXLrg7LtzTNb6PWwkiitNWyaQWMLc9r",
  "key4": "jK9HgmuAMjbmvbBiFcoQXqqEP48sLu5BrGmMeKhdpb8W6pJL6JVTgoirBL1VWLvLd8iBa2gjUKzwxxr8n3kqubd",
  "key5": "3Lzr3zi4tAQXmWfuHwyNdGkXVKsVQvMT13zvrZuWH7NwW2aMVwzkHVAa7sbEoh7Yb3nMRCpzBU4ic7pSjY2Wp3FB",
  "key6": "5aXpEtcv18DfgheottDvX6VEBmtU3NByGQrpBexuPuaZBH7dimwYuRgq9DzGqNgAv66tFan64RnTZojF4yHLh9UM",
  "key7": "5fhPeAoqr7PFhv6HrCDAF3b84ksXB1YfuRK6AhDKH9BDozssKwaZMbBQLVmAzbs8XvkipNh4vE4cBxmisY7QaspW",
  "key8": "ZEBDk7mjs8tPyWpYTfRW6RECXZiMaZ4VGTtsJrXMhLYhiuB1c6xfLAn8k7Tv7BRb2GWTACu1KqVtwB1kpY6tc5N",
  "key9": "4NfREhnKtCCSLT2sAfqiui75dz8TW9wToQvGFoprUaUhoZuE5ZwP1fm9FeV6u92RcfE8kKADKExPYVLZoPE3ANV1",
  "key10": "AQ5PQLTTqNp39XuDHAMC41aCCP21beqGhTKaucvLbTgLLQ5soPEoizqHCC2gJ3RGyuENNYgDASRe8nkohBbjFk2",
  "key11": "5L7LT9FzQJqmzSgsVLrFatgHV26dztsKSLjSMzfWqbxpZEV7HjuR8SB5axNcfQZobK6ShvZ9vQrTBzdKbV9wcnan",
  "key12": "5UxEE1cYbjpbPR1Syi2mMM7x7rYkCGX8zyTpNRGsPZE4xh86goeKxZaKBFuCJokErSHFbxWY6iJ6Vte15dS2c8FQ",
  "key13": "2x9UGAgqeqw7Yj1GCcYeTnjec3DDCxDixibsWhwoxby9mQuzSbufzWGfTj4YNF1wxxKv5bTAwYfKH2oqW5a1osma",
  "key14": "whBtinhd1wgdHhbgT44p7ZpWwBG3EbEN7BzkUqmd2LNepnVnVeUSB4UP5KHdegsRMQd5b44hLQg1M9RhM1BfxZY",
  "key15": "25mVUqnSGjVbZuNcWc15Ux6iFkqcvL4TtmU76VBeoapQDAVjFKzhLtewG2Fh5LVCzagj5C8ZaQQyvDStxPZ2chZG",
  "key16": "4XJ5P8uG8NNFLi96yPLa2RRSVCXRnAXi97fnYcDYbhBN1GwSwLsT8TQwSgBcs8YT1DLwazuh5UdRxqqYuvHYSySR",
  "key17": "5WKrQJnLV4hT29dgPHNr7W2J4M9855mzT8XBfHjGN8jp5thfh7BSWsQqf19yRoYsNkhN3T6RzQCzHuNLgB7YdkQg",
  "key18": "5nya1DwWwu3LoosSecmzx4DZ3d3SLEmmnzeQ4tpJcWqSeuZtn6BfeV1chP5vu3UbaD3crdFV3nFa7kbrFMqMVY9Z",
  "key19": "3jBAUKnJFPuB1FUaS8oMxi7PL7xWJrvznXHAgsP8YQmSyWJnsQbZhYQFSBoEsASbYvvEqaAkut8T8r83kZhsXRb1",
  "key20": "3QSbXBgqizwukgkTYfhEcuLof5v8g1HpVW2wXhawVdVW8XXMpQm3Yv9kSkac3Jynm17bYkTZEUQHwZ8jA54TMLey",
  "key21": "5AYDKcsTUmptuHvuAxGPWtWbhiriL1tzKPNeBQ6UjeXQa7kHabt8hSo7xKa3iWZKbTF4nmqJxvxhbvu6BM55BZmU",
  "key22": "2jp4PzdwvDDyW9ESNFXrAFMeR3DxSEsiTAJscPQ4vDMHS79LXfHJVScrmm6cFJGF8upD54iThhwSGKHJz2D9cPts",
  "key23": "5udCUx5g4RVsGCUWjmwEdwwizFgx89cW7228fbaBq8UJwRvLjidD71gYP6eNuMughkcTYMSQUyNqfHtDhZvs5K3W",
  "key24": "4UDEmh5CpQofU3NVUoZxBbjPn9E8Rxz61hH3WwELJ9XuwE6BLryaXA9Eq3W7WfbZ92KvvF7d7P243VEFu4fuVMpx",
  "key25": "2xBfTAG9ercgn4UBN5TTjeFDutMkTYM3FH82h6tZoxtPrw89XY2N5Bxxar7JEpPf2QdLzXd7PzNDoFYNnF2ZkzsF",
  "key26": "4czYpk4sAEvYTU7z4y9YPpRr6mM4J7uF984EFHQJHEq8dHXgD4wDiV5vvi4NTaQrPeTiwNA9VexSCxibkHeF8Mub",
  "key27": "5pTDcevrNPVawFVpv9vzqd5rgboJ9PJswm9hprfU6JcFQKtR2wQ7zsNbZPcu7i4MzxFvwdVdiq3ij71zeA9QuP7g"
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
