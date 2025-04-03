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
    "4PinYmBavCDNySc91qNwUNWRtj4LKFvun6oRqYArSuzHmAdDW1RH18e6axRpv4S3wSRSqdFgxE57Q69kcVgxoge6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPee7VtSEGGSuE4gbLDko5WGuR5HFDRApVxE1Kr6xzRotw29QuDzAZk9PkSTZ5Ga3e4GDiobQeQrHiUnzyZdHWs",
  "key1": "2VpKguJVUezmNcWU7GM34TuSQTN2QLyQ3q7D6UZXq2HkZt2D5Kqkx7C5i2Ua5RMWACKvjEJDgTu6wRGAg5eJxcSY",
  "key2": "3ymxFvuLvddUzKaNJ3ipeutMw6vYA3hcbxZBdzTN2vNh5eL1R7Tu88M4z13V1DYLhijR6fSr2tSwvby3tKQUVmtr",
  "key3": "5sEBB5X2CxvgB5L93Rbe8Kot7RkBpM9NcQY5M3rYPVE2ejA3dPDRg6Pp8oJ9VUdU3UTyNAoqr1MM1dc52Dsho281",
  "key4": "4v9kHfyxwGQSMcJZQZMnk4Hheymz8AFcyXsTCoG5vXvTbXgePFnDyThHLmwWDpeQs2sthpKpxSTJHu1FZzeR74QM",
  "key5": "567ZeYSoru4xXvzk1cyth9N8ytHWhgWcNQ47K5UV2JzGR7HMbudviKJ13XHzp5GBpEWU7RRtYeM97MqTL3r2zDAz",
  "key6": "5fCVjTC9M3pu618iu4xWWU9K47jnbuSK5qYdSa8GAEAxyVNAmtBBddQSzkQpMFptceiDeJRn1GB5nACx5Yoo1qh2",
  "key7": "5LpvB1YUniCFAiz2DpqpVpXwZLEE6R2g4PPfieF45bd5yCBaoiMq2qMscxDzSvwSK54hLBysEdxMczyyfNkJ1kJQ",
  "key8": "D3djaAsZStVrF8fLGcEqKogTnWM7Ei6guPQHH436B56T9nN4PWFSp3mQCACECDEGjgZsoK3Gp2Zn94vEvox6Hnc",
  "key9": "37YyeJE1R1zDWzzAt9yC5ZJF5yyzzmcQQTTUJpAq4kyapefX1H4GWx8UspRHDJkdzcxoVWhPAjQym5nqQRCSxGn",
  "key10": "5SXxNSqkZHLn35So3DLfw5b4PbbAqsw3gwpMg94LD6bxQkdU2QQnoJaGz657WC5B1wznWMM6VG35PvJ4c328HNdP",
  "key11": "4KazhrpjcgTC13LEagRZsuBasgAgxwPQavYxbG8PRb7wNdUkoM6u1ENaZpsQAzPhz4MfjgNRi9NDdcz2qnqQnbV8",
  "key12": "2r4437nkk2c9ZupSqVsQiNFkXWNdaz79dXA8BqPe9wCBpB9oAPNok2eiZmZuK6rsN4Xghzb1W2Q1Yicsn9C8UNJz",
  "key13": "5hobRWFL4JmUeexc4spnob8i1NniviFf4JsGCeksRqCZzSeASp3QwAHCs6avpCh8aYt1k7Z43NBKXpaBKXiqMBeo",
  "key14": "3k8jfU2Vud56D538yAc8dXNSnPUkg14VWE44ZZ4t2XXEbXPhQ8hXcd2rUBrKc8xs9MdoE5pe3FPyxvTkiYFX8TxH",
  "key15": "4VWmHVyWWSLUYpAESc6RwcdBYX3jsN84VagQxJ4GT1YqehaVsMTMJqqtHDrVoPSiDLVAM6ZxrHSqgkwJVSk6ANAV",
  "key16": "2MDLqj9jtmiHTDHGL4W5VrswVKBtiHFivp5eCCNn4RDjgzxKhmkRczVZm1QrJcX7o4j3rHkQPKN69eGwLgcAeKpM",
  "key17": "2Um1dAyKPYxHzCvAjoMGVmZfRZ5McNsutzQAYcVdTACxDPD2V4Xeg8T8sjPj3iHmxPpSoJamSAgFcs4soYERSqJG",
  "key18": "35psNQ3oeFAL3msPN6drNV7wpoczroYDbKbxG2bW8DSb1grxJCwsPXrSycXRRc199PSBkgTPbeyywmZUCvjus7DX",
  "key19": "2nNvzL5dQRajvwD2zeAhZKx3WcpEa1FnY4aotgNyHGmvyqMG78JvJAMRc7cDLqM7kRncav4ChBh8KSU3w2B9B8iq",
  "key20": "2gbDgH91x9ad2fE8ydFrTX1iW4Yoddh3KKy4d7ZMmhqNkfrYQs2YyCyvvqxbuiDdsgUD53U9sBgdU6YXHY3E4vw9",
  "key21": "4VJ4jJpJ6tzda5WweY7S3JHfk1CBfXyQusKNn3QTGbPQfyzWsgNPN8etwVuUDfYptNRDDYCN2XTk62Tc3HTKyBKy",
  "key22": "JBuzfKaREthUDopAnyjAT4B2hh3CfBDsGVqrcMERBgVytGTFhNxggcvNkpt2d8pTaaTXbxqyZe3bZBCkXdAKjjn",
  "key23": "4PGZhR4pk3pRc2irWHLvMNrpMPFbZu1YXoP4cLKoi191mAeCNJUtW8kVftBBYjHtL2haR4R1kGwhjaEuDmHgcL1v",
  "key24": "41UmuED4khHBHXXDqn4JbLRRELTqn14Vh7aRBKATayU5QS3NXEQgeZUpdgKXQi7McPNFkRiakudbHpy9oB9ty8Xm",
  "key25": "KFcsJJQB6J2bxay4Lkj8VznAJy5z71Cug9zNaFCG1JQcLnQsFvR73u9ZKTCZACvVEkMLrgBS9z6LrdJxBb5JGkE",
  "key26": "3hJ54E3u6G6eUe2FA1M7maKBxk4wc7cUJoPHZhhCqjABDgdap1y4514JV3KJBzjD6awCbHM6yY4czPXLB1nFsnds",
  "key27": "2p3v9PeUsLaAMj4EvpVo4JNEcgRQ64cFYA3hzVSFjSufk7sQ9ZJ3zEgWnQFqVFEDWQBM4GRUZfTxvMoS2LmbVTLu",
  "key28": "5vNYwLTu73ZtF23AAG6VNakGJCerUKKyygeMJQbZnu2LztVL9XBqXii4ZX7Q8qDsydbfm6bd52yH2iRAC5gRpsmq",
  "key29": "2VKbWQSyQnFP5RMA24goFHWJaUsT2NomhDgkiZvfU3bbXziHbPZEACQ4toekwT4FDpjuvvFuH5Zv2nz4Jzqbm52j",
  "key30": "2eiGnG84e6gzDwSGgdFs5npCXGeEQ1iib9hP6jpa8q5VLFA3xEzXFYbZiWDejKKEkruKyy9yjfqaRkUjqYeoo7Hf",
  "key31": "5hzo4dzEwWFNNQxnZHe2gj3iWrSF67s5UaGoS4uT1CcJsMeeuyZcdSeQRRDHG7jDdc5uo7siAdGDxt1qawmbcxsq",
  "key32": "2Ft2VFo2vQbbsFmUAAphUAjLw4edhAXDocsd6uPtHNFsUigC2tDu97AArSDH2UTiddDZnwkjbMjSWuGCsgERuZAd",
  "key33": "5qUGsNJw8ZcBWJwdXyTUPLtF1kPb5cEREVwcj3TCV8jt8aUhmqiH1AkajXa3BHFTrKxPScYfBYwcJP4rRUPTPEEJ",
  "key34": "3Wm6VmBBu9MCMc48Xrwh1FSzSYuQnKF8WjzMx33L5axi6BiDjC1unnQK7pxKWN3d5VQWRtgjHtvabgtzZjQhDSBY",
  "key35": "2XQST6EbidUBBYRwoPc5Xa6sjS1wbwGBFrqHHSDdKMvG15KpGEzRcjz5MB6fbfWt4xoaEGtefu3NDJL5tvUibYF",
  "key36": "2LGVmfpbHPFFTjGykDXte3au9Ly4R1erbxfSo2AAW2R64QwmYuCD57bAZsykg4BnJGhKgwWQDbFZGBcX1eHWX46j",
  "key37": "4bXXAUR7dFw7jHymEYCYckxza1rGZjQK4A9ovT4R3EhFjJzJcy2ygJco97MgSo8FESEsVQcqhDyMCgyo3qbQBr4E",
  "key38": "5wh8E4NN4ysKaGMr4MSww4BxzkrSuyniCH1cPmh582HHjES7udAP5mMJh4tHej7ERY9GiRrDaCKXqRR3WKV3SsjV",
  "key39": "4g8qofUxSDbVpVotTusHeJS3B3QdL2yKtwnpkSsTLwqQnDH5UBz7myXkfKzc8puUMqcuJKHVfExpAqJ97vvvj4PJ",
  "key40": "kEEteNNky5MGBdJN8qeQ2YVKAaK2HSip7bhEvCUJ9H2e8ijf4iiSmosuSR9xooZB6XVLtqTUQXP3eo627m7S8mi"
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
