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
    "4hh1sV6rLdJJ5CpSTCNda7GGhCz18yw6kHe8AkCXTTgXtGdbrKZo9mEDAErdsLCjDu3YFmLCCdcubLR51PgnMvWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKKor9baVKeVEJfB3wVbivAmf1fmXgVCXNVDFfLPnkCMBaLsAr79YXzCrTL85Z2WTsHNFZuwgBkLbg84LF4QUvG",
  "key1": "2wMhpisr4VHKdfvBUQmdQZKtzaDCdQhSgWgBdrzxU1oXPMPUGCGRvxQZp5fen43PBrVV4rzA4CXnPod1W3C8CQ71",
  "key2": "2uMspWpNH5mQbaNWzhxW2XxwG5Fji4BkujS3RJ9b2nwFk1sMazDT5hZMRH7SwSXyNemSB38TfPnRNkAx8Vou6ULA",
  "key3": "3pHRNVvM1LFtvyLPpxsMyC4wG349sj7AQ4ZzrLCcFZW7nQgjm1WZYKZHakf7v8ri3qpaDVuQWske1yJ3FwAYbVv8",
  "key4": "sDjWv9j2fPfjAm6iu3USVUtXR4QhHHWgKF5B7Nxb9P4jaes3HWS8j1UFGjoQhtot4fZbMNN1R6Vxru2yjeKxjp6",
  "key5": "5X3yu3LcHmpL2qFBshHd6Vwy4BdkidSQGL6Az96NRV7iLfAvdRL67nyBbiFqGXMkxzc7M99Y2MTgZQB3RGWSv4JU",
  "key6": "29EuMfcCo3p6yR9Z827H63CSqnpxm5gJm6pN1hZGiVt3AsCa99nfNGYV4Zq2T2BcDzkmv4LpiYNG18brrYaRCBrC",
  "key7": "2rW12NoCwTqBjXpeTC4VknYap6C3YGdnahjA7vebuHiFL69xd2dfPytXdGToke2JN9R6zqvwxuyP6dWS8RTJW8Rm",
  "key8": "45U33SKDnBnhewYTNLGsMMnZyLSn8ti214ZTfDcFRKAgN3tLnfqFgqQQrUzELeksUdzerTAUVD2fBFkUJhr8hucs",
  "key9": "2d29PdUSWXJMaCAtXcZKbhPaX4js61KQz4k1vr1LPtDogvttyq2rs2HcJ2xdYvLXycWtB11vtMJXcamyeHYcnQhf",
  "key10": "5aQTDc7E5LQqobo5AfrmyopaizCYZqgotEWNU745Zkwo6WPCmj5eKTkMikkutK5nc6Z6QuFEutEtY4FfFGPJKgeS",
  "key11": "qPPgTmohegupV3NFiKD4tdmTwJtuTcZ9rr8nqkFzHm1Tp4RSqFpi5X9G7nCPQpbBXPoFpDD9e3MXwkHvBMqNiJF",
  "key12": "5HYtHNERTFWnebKij7uZtcJbNtBhbD9RjHzqgLkmxvGRz1wnokfth3s8TWFw1Aavh36NqyyczJjL6LdPqZWf8Rwb",
  "key13": "3jNfH2ts4eQyPA2eVScgW5Lv7Gq7ni2ZFiAYVT8XAwKXt1nc8hXFn1tLVUmXYXVhKLoUwn65wMcpSsuJQ8RWdb71",
  "key14": "5YQ4MrKi76a6dJf67PgXgyHdTnkKzk6VewRrMWDvfYPoAArLhneEAjebvJz3dWcC38ybUG4xF91YkDDCrHq9Sp29",
  "key15": "2NDxjxmgkemvtXDAvibdYwrFvr4fAZJq5LP7UZWw5SspnkweTAZA8xuNbsMc1XJYNdhirXRsqrxxLRLEP1fuwj8D",
  "key16": "2chzJh29Ezhd5XiUSVyPiU1tttgzsJfqZJAnmq8ESfLjndm2FHo7neSaqErDYvr3Hmeqw6atxjrdhXVuGkx257XD",
  "key17": "ufA7DhK4JeDrsMMQZpQknWeDKESX39hLbuc6SbEQvSFi1GKzvBBGPC2ATJSyhxtSG7VnvDJET1Z5EejCmFesJta",
  "key18": "61Tz41SLNfNKCdh9qpiUJHYAyqn82trDu9PdQ1oBK67qNjvJyHJNcvgwvVYL3bAathgjduXgrxRaa8jwgpdmXsEc",
  "key19": "Kp5BFTemY6VQm3jwh6mXHrZVLU3oMU78gVn9xzoEL8PihDcRvjMEF5sCBRxHLmcxqfvQQSYXJzLbTUo7DQS8GQH",
  "key20": "xHTXoU9Dcen1WGYEk697FiLLBJ1ZF1mtrPF1jSvwGeSm21UiYwBM4jLoaRQmbDTgZFgKCWeSNPz8V9KXX8tG87V",
  "key21": "415F5eRDx6j1danqapXr8vPXWJiEwbhiuPY9fmKjk82rcospZGrdK1bf8ZZUJxhuSFxt917Q8mY75REpT592xX5w",
  "key22": "jae2121BTvRZCtPcgdHfVYiVCkm2YRpe2r9rCeTUNq5xdpm6CyHgFA4PZnZxFMmwJUKfWEdVh4Kf2VkLTim9TpM",
  "key23": "66Fqxz2HtEmKDLxsEz74wv2XtF26H9mK7Fk3Yf5o1SUoSjKcFZ2jFtNGkZSScSHV6JiGZyiTsNmrDj6futRvPB14",
  "key24": "3TY9E5HKXyxDP3dS7ZM54ZduKM4CuShrwP71FRn6SjnTXNDaPWth2cpetJHB4Um6sdu1fWbdeB2QTWyxin1nTU5K",
  "key25": "5Xq2kfQZZgXVjustTkgLgXW8snCzmZH1Y4uEk4X8wxzS1Qkn5VncXbLWDhQEfuJYZgXiVvnzCVEfHiwY9tSFEDkx",
  "key26": "4TRkuuCC2o8gCFnErpcgzjhnGnDrT4wHAduApo4U697LVUg4DL9Ps2XAmR2y4xAyr2Nu9Knma7dXfbF8Tq6GyZme",
  "key27": "5uZrMG6F7JKTTdz4DxS3nghEQxN3XEUEjWBEeENmxEbZWfFTDYn2crAQNJTdoGEvjNjDuo1cJFTmHGJjLFsjSSr7",
  "key28": "ZTEWJVTYaWGzpV5nCtfXFUUMHoxrSTgRkEQeiiTGfGrmsLE5sJPkrisTWTdfL2BJpcgoQQPN8duFqLFfokZdfN3",
  "key29": "3mL9LxXgfgAodQ81JeDtwZ77qGAbMsxAbrMiqbBDS3aAr5w7BzrggAMeCCse1uGJyKuGic7LJGptdhn96Lz4FKeg",
  "key30": "2TdWiJsMhWDTrTnHw12x3XM9B45B1UtMp4SbKEkwsBvViiq3Wd4GebfppL1QmY6za3bzaE69SK9Gda5vL5rwe3oW",
  "key31": "5rthMtLYmMW6gkkxhfsPMg3LFMSNMu2wyoW7g5WKfn5QqX7aSPWd6ZhfZBr3QxmMdTTPmVWmU7eQ6gnmJTsiShz5",
  "key32": "vy4phfqECAQPn7arwkdSBdmcHvc2qx7VfxJpGUvGRz68ha2GER55v6A7yCRBJD9swMdVgLop57wEYPmtcAPHWxA",
  "key33": "5NVrTBQdaBdUfTM9oBqegPwpAjtdnegvHgkkXNy1HtHfPMKibaBeMryX7vXXP9C2YkgDVMGUcbSjdvjPcr758g63",
  "key34": "2Rc3qLGhSrsA3nLKtKqSQ6BP6xMjtJ7mS3yFvcV9mduBs9bRE3Fa8YaHTJbsZGdezhEFSr2ARY5E98bfxRksYuF4",
  "key35": "wBbgia8vBh9fRxRuHv1FfjC52Tv8u9NMLKZCE97uX1gja38sa4Ja7ob6LVGfe8iX711JuT45Cb6J68xEdPG2Yug",
  "key36": "hhwgFyhmCzXYFuvHce8f8PPEaouoixSJioGWs2USi44PBVmQ1uAs6WdvTVp6C2p7KtxkHQScs2xRQ49svf38SE3",
  "key37": "5nqanpbk4U2aDkHvHD1rHUDTY7rM2RHDTTx5AM8ETjdfifLMefnuuPM7qf1xJehaxXTFswJxnagpGQnbMenxtrig",
  "key38": "1WGxWFhWhAAkQY1dw8f96rTPCwrJhHR55awuX3fuuubnXokR2jHEknNhD29dqzJosrwoQnHdaTXpzN1yWm8hhoP",
  "key39": "ijSUxTLKD4CnEuRGHriEYsDMCtx7jZdVcaEqHDeN5UnZSQGgKb5Lf7FRQjqiJn8LcqeEAuWDj3CSRPP6F5465K9",
  "key40": "3XGW6vPcKaYLUjSMGXXmMYBxeQ19zAEid1c3edT2NpHJjar1HmV2z3WPNgD4H2ir4VgQPkn3u1s84FiQY85ysBys",
  "key41": "3coAvXzVcEVSSuEDgt7MZfg51HZnGKxS5VA927KrHGeqE8GtRsMkGqpr4r6DcAULFZA7hkeagsH7NG3jMknCdaxp",
  "key42": "5p6ea5EmfG6PkZvtvkJp5LKTxEzXSuBa1JufKHdYxtV6opSFo4nz3aZKvgzBvyEdavwSA5shFfMC3rtzL3fDQkDk"
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
