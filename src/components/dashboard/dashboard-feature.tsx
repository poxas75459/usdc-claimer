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
    "42RcyH98SMTxxBeGpRyqXFci47fNTK2xy8eheQT7GVzVYwXwvxTVZ3tXDUnpNzBzTwNkS3EqQtL9s24PhuiHqSKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3pr87DmwPn6Xkf5PH6ZKGw1LTcvGWj9LPxNsEkyrhRrvajCem9pBd41zcJXjAv8Q289iYf8vGqDcinkZx6UqLf",
  "key1": "2Jbe23MvzmVWMtMJeq59D7i56RmecycikXFkKPQcGazZpUm2MSqzn1Sz8hXuEQ3DZ69k6N375oYwERuEDRfay8G1",
  "key2": "38XN1FbkS4ktpYeEUerdD9rAygmCfCM9zBeE5FJcPv3NCebtukp2mQJRg7ufJwyDVdhJ78gk49Qzodmsw1DzsG3B",
  "key3": "3LgyEaBVMUuif4sCEXfp8KQg7iuxJKKd2g3tpC7iStrWFNhp4QiZKQfAEUmJXY4Bz1kNhRotxy2mdmgdC8G6FUmC",
  "key4": "Vxg4yCdGLYD6WWeneT24YNHuSm5LJUZ7QJpKmWXyP8hpVZpcDvREwD7MABrYDQbHowKLUTPixrRf6ptRbbPzZ9g",
  "key5": "HtDv2jv4gRP8WuqxCLVg244c6wVZhFRwXxmvdgTwwzEfFXRww9yFZ8nnV2e1bPwe89p2NhE2xzq9WNhy99i7Wh6",
  "key6": "2yCFg5xxys9F4wEef7iEn5cUrpfaKF6viiRb8YAJjLKqEco9aFSbT2Y35nS1J6z9aa4vBJ7Hf5wKtxbtievQkLaR",
  "key7": "3Tgg4AeDvyiRTzbRrJFyTzXhk3bukDtLeYfdxFBhQcpohyJ7TPc3VpAb3A6H933iRuEMxPMjLYMPTpUkzGLYtpXD",
  "key8": "mdtyJ7hpZwCBT6T2ZYg6DChuLamjq9zw3SwYUUaV6hVqnngyMAyv5QYhLtQMERpTj5c6WC8G8u62aJ4BPQrGKXM",
  "key9": "d275T9L9e62iye45qHZrnJYLn8wmLwD4JrRjnHeR7P7yFwYVpaDqwULnXFXQSAYDb1TtVYxYhNVMrdeSjAf8TQf",
  "key10": "fM2SAF4iV5kQ2XZH1nbfYz4J1imswA614bGtPqGojuiJS93vXWm8vcnk7QsN1poDqGdo1eCKLr6Tmbt9inj7EqF",
  "key11": "3W3V5nPx9hMCaskQvGtNBUaCDNwmSbCs3db7arPe4WZosjyywk3e4MzC2RfMFPVsvTE6dsiCwVgJerkN98CwdQTR",
  "key12": "xCD7EKBM9nvNzr4WyBwmDfQp2yKWYEJ4PTifohsxWnLHhecjtrogXspBpdue8J53i83ewbEkNMSFt9TSV6F6LzN",
  "key13": "3oz1LoXKrWzk845Re6RBp126kTNhAa1i1V2HQVCSLeQPtncGVmKXnSsvs7RTjpNw22U169nb5wVu8n55WsNUxci3",
  "key14": "4jg8t5Xzxo9mb1i5nJPvfKUKgY8XcfLad2LejKPiRHqbabhgSNoorM8tKkMY2EBKp277nrqZpqZDXko72afbFy42",
  "key15": "5y53i17g8N977rt1q7UHZiPhLnzWRHhPQc3XfAkjFTDM89RByjp8mm6nGbNLohzpX3wwgF4NDiRKV4ZQgrokf12H",
  "key16": "4JJXXLSPWoDBwBoH2yALMAJbq21xNNc9Lt3LXEhsn7VH9bBu4jetV28K1Rq6D1mUpLin3zZXB88iuc1F6dJGH1BD",
  "key17": "3XFBXoYo9q9oqR2Vyoq8Tj6J6gQG4TH6r6XFizfgqTxR3uRshm7Gm52faYRNQaFtRMZAk7kTmVYdKJ8p3AeQCvTm",
  "key18": "4ZmY29N5UBXCmLBNuVR9EN9EELuqSM2vNRfzfPnpDW5AobBHkEPNfURYPdVWZovMqjuXvd8W7skuVrbnNatG5B5m",
  "key19": "uSroJmKav5mmmBxirMRFYXtybSyFdWZNkEfsbKZSxBLajegMoS9LhXbJRer1DcLACxCdDuKxvTxUrjw1x5j3sMK",
  "key20": "4xkT1Hh6uMfY6CuKq3fPUHJEEPADo11w99qyYjGwHLrAxbDZPZEQHi8sx1gTRUbg1RgTarAHcuJz9f5VNxPdsJ7H",
  "key21": "4ZoieXhSVGn1JjgEuJeaM4QU1XTgsKPgpWvDYQbQovAhKACWBhgsc6LTAVxUWpgZsEDHmUeg2ymfXKQpvpL4826i",
  "key22": "42Qz5GecT6eZ6dLL6UmBM3Taztwv5EDCRVhFS7C82ixeNqwLE51t5F5Lp7JFdig2y74PGa3bL7QfjgsrSKBkQkXk",
  "key23": "4smBTCSkNyRywh2otyHL2J8ntkhsqh3icoeVDhAVdu33McfedhgAFUhUmVtyA2vp5wxMF4ZfT1bamxnLwTXiQE38",
  "key24": "5EUpZ7LavBZjZ9oYapXF4R2GtWBhSnWK2TbFBMCMYpnwdVfCKN1rA15HAMz2nuFuuRAe3N5A3D8tNPbfXmTCYP1s",
  "key25": "4b6VavEcK83NTViMTTfN25wydtX2CTyebSQJoYKxG7cmP1Fcq91BpEBJT5hcBdE1P1Mp2v68kYJ66R7SmtLSoPuv",
  "key26": "3XY44nxjUFMQWe6GdwJhJnBdWgoRb9RSR59iiTZTak14uVhkVmf3vGrW81CuSJ6XFyUMTh7WjuCWsn7u2ZbL7nSW",
  "key27": "8f3DMnr8UQwMYzgmEDQ2pkhUCLi2vbXDvH91ZJpYD6WKFCxCiFSPHFJ2zZYwXE9iUUwNwtg1W4x9VXGWy2THc6H",
  "key28": "45whLSbTJPJEUMBvX3vuieKyth3i4QcAatFCSmDb8q1qvCQqqyaT4oDs941VyPZ9wvGt2x9knmheFJRECSCpGkVR",
  "key29": "TtMEmBd6f75BgPWBSaSQ19ZotAyMC8XuKv5C3Mbg3Uo6GntQ9TE42pTfUvAekLDrkrfBiBjkwrVckwmPXhGtBHU",
  "key30": "KQshRdTyYdguAADdEaatKg6X1neCFzLp164vpJE6dQqTJQQjrCvFNiUcXNUxBYA9QoicnaTtiUoPxB1ExbkPMV7",
  "key31": "3vrjMPm2q9sQmT13iWQ1odjX4Jjt52kkvdNV4EDjezTGWQ1Gf4TDfzdexkuNXs5t4wvNtaWHkXYcK9efxbCenNgF",
  "key32": "25jHCkz1dFM5HCwtZVwR88sCxq6VpAwYxrDWeTgXUdDbkqRzJUvLfhAssWSkpBUrXhnbcAJ1waqB65d5KaY9hXSh",
  "key33": "25XHCXyY8Y7KhARr4GeW2yXtE67xB4Ga1qb1EL7rWXYfDWmKY8MkxSQ4ceT61HGk3TdBSqEwhDvcxoqCaEt9wWed",
  "key34": "xhqsYQyjTGsCeoAodx1W22gPot7BB53mUoPMJDzfaTo4DtE8nrAdt1cyVrZMsJufgM8av1HRuKdrqDDgBqcTKny",
  "key35": "2kb2ki8v8jiuja3eDfiJXNjeJ5nb4EP1r69YUqGrgQgzmozdo6faVCYdKQd8nH5bNJmnd4R4g8c6tZekR4z5khL4",
  "key36": "4pBbjWq4RdVeKB9X1QhPPm5NTSjMinXG14vHvqoCge4MUgn4WpAAsQJD7wVFk4YAAYxqnsFp4DZiFeYPUxdPiMKE",
  "key37": "PGZsVWHqfc2wUY7NxQdssmFTRUccu7JXnFTCpvQTUWbuQzMtKH4ZQEoAU3KuhuMn8hbtxKTwLWbPLjKv1Haf2TK",
  "key38": "3dYrdjkJyZRUeujsoG4p6B3rZGaSvo5VFPc3vQPjTgM8H1zpq7sxQbzGbP9hSskri4mEMGBxh46ANKqrovAmWGgn",
  "key39": "51tFBXXhMot1gg3sTSiDwsM5UR4HN94sfe5MUSkj31komB327dWxBNCWgUEmymCHmgswBN6BTqRYVBRauaZ5N5dJ"
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
