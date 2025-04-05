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
    "3FxbZuvb7yxmoXbV351j8rjZcf2MYU6ULzKHVUDLozXrupuqG8DphT6HgeF4NskB5EMKd75asxiRHfBDQaEPRFQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYdKdvXNDrbCpHMK2qQ1FMfkMLEm5Q379UkQt8kQ1nRRLLcqJr6R8qYo7Ws25UdhzFuLMcvSbAAinNoH6tGcvMs",
  "key1": "EYpg52FusftZfRAYUGBmNieMY3hayfHCY1qgxyHZNB81tpWDpkM94GNntUNncnNxfFwd3K38uKrFqAPuuk8RAny",
  "key2": "NXNwFB4W4tfgiSt8HS8nS7EQtJ89of1LybDJaNLXgJEwGu2HMMd8RJVPkGmsFiDTCAKcR7q5SoLceFjQtSMA2mW",
  "key3": "4KoBvwrDAiqePi6ZU9skA8ufDTqxKnVqwXYdWYYvDi3xLx2wKKW1oDK746vFQD1ppM7YgYmp2UEXWY6ZDSmtPBZb",
  "key4": "2rY8pvuUeoWvcBYFBhy3XgM6Kaie3cm4NwoWfufJic3M1JZgUrdFNGZN81DHRAtbGLtMSC7SrrP8WEMTAb6CSVi3",
  "key5": "5ytncCzGQcJugp5ZemACv7tJjeF2uQV33qoG77bCcRCzF5ktzF68YyfhCZ9sXbVJzaxbbrAirUdsWAvSTdHneTUt",
  "key6": "2eycKs9DnBMGQayMLWTeBtLk66K4PG5hsS3hJ6QXEUErueNFsUPRUDG1j6M9WveT87kmmo6kCQ8CyNmKgJYvALSr",
  "key7": "2QFRawPMSg1WryhA4kVGRb8Nf57cLn7FTufGZ98yZsqFyoGCFZEuKe86CCsX3oPkmLk5RChLDEfSfZGvEFxRgy4Y",
  "key8": "433gGBLrrrFVL7ZZXNTzn6A8f7kt2YURxQzESDio37AYTM3cTaMQMzv2yVdTdHQ1BiJB3uQRQ3gmXtdEZfcBSjS3",
  "key9": "5idgNUxy5uGvMg2tVZGfRRkM4GH9Hkpc7nyz9fe7buJgPFsH8qNNmtgSg6xyvmp5quMJd3p9n3ied84FLPyjqwDu",
  "key10": "QaeQQw9bvJ7hLhSk7pkcgkSqTb1Xgf9RpzcJ9JQLckbUmzCy6BbM1ivc4rDGBK6iqJ6nVfZMayupWbhXJczrm2o",
  "key11": "3ejiV85ghbrvBSAg9m4cqWAjWJEy54Lgr9fAWjVh414xyNx1uYv9dgRR4jzLjcj2cZKq43e1hJKqPVKEbUU7ysje",
  "key12": "5RRpeXzLyaf7yazkGyjwYrufPJ97c5iz74wT5P1kEziM9pxN3bTMBhXfKv2NhetNRHmk4WxhLHBMVJgr2CUhtHL3",
  "key13": "2DNKSCUzh8ahhfC7bPp453x2VcUDdUxgV2WB8icvo4gYmAwPcgNyhwRP1FDFXJYWGKk1Qwpf6C56s47mdDZFxd2f",
  "key14": "VLSNS8CfC1LMX5bMaLZdwz5krv7Suq8kKjjoTUZJZ2WaE5xCaFQhv4bkkABRrLHipNzYcmBjKrhMZFTzucWourX",
  "key15": "54G7sD6TuY6cS3VoEnMWeAQ3A4Ms1XBxVW4ScgUDmsiWvcC8zreGgfF3CcgXPViYAPFDXgFrN3bYTSD8abWpWG6y",
  "key16": "4anVPTUccH1dDGo9QKKp8qxn6K3bnWtocm7NYMAcsax1GBmpnnpmNbuBZVZgzQKXovu7wseNu4EEYFGkLBqN9KPy",
  "key17": "3y13veZJpGr9mcynTQjCsoAQS1G96yp6dyJFzgviwX4GLdJjpiB9p6RPKVsicf1WpVEmAiQVFRY7xmufrZoohwMW",
  "key18": "4ok5W9hu3hCtpvtpFSNqsoXPGZT7m1wLAWMmyuzUmNyjLY4rUSkYFtr1u8LfPyKgk5tReSABg1Sd9gDpqr1mnsmH",
  "key19": "3Zk1xku33wdnLtc3v33D99o5iRHBEX5XP4EKsE3cvqQXbq1XeGVEFS2pvryNT9A5CVNcL2ekAxD1yKEQfWiT6yUN",
  "key20": "4yVWkUXpgFygknBn4Fo55ua4WRxcBZoqicSvoKm143hT9T5gSJqDDZwFcRprq4QfkicBxYBmRBbR1wW8X4Lcn4vj",
  "key21": "3Mryim7VCwx7Amt13Dwn69K17yf1XZsLE7JyX3HuZZJYFDXaqQGRMDwo2NQVCkQpDRneWd8cpG8p8xCgwhxsMymW",
  "key22": "5qXu6TkKhFSBd14MNRvfrSbbbZhhC8D6WH4Rg8Z6eKPiofo5u4scFQmVpJt1ao1MXT7gadrDSFU5ecJRHCEEzJ1n",
  "key23": "2M6aDZcB4RcF8QNoYckspGYNH3qd6FN3iif6zEEyievkTVH7h42UWt3NjdDgsi6phw1k4X2rHwbbq4keiMzrD83i",
  "key24": "Ws8BJxJF2bYNEmKbjpBEQoGTFtuoLvwae3vieiBdNihT1LXAk5qhsqjSbTc1GGhbeG7xb7Xu2KPyFqMhRaCULM6",
  "key25": "4HjCdR5Vt3JPZYBfEn62JBmDFB8Tp1fSUPeJMc3ZT1KsiWV5GKZZG1auY8bRG39sY52yV3dJNTQiZojEuAWYoo6G",
  "key26": "3Bgd9tpJEHMGZK2ND6M56mDyYnyj9g4qpgx8u69pURcg9SoMoueRMszxiiqjP4h7zSg2rePVfTkit9hAcxBXjsKe",
  "key27": "4H7M7ZfSSw2MaYQPWNkujPzdoxVX63h6YoetrRam2Qnbg8mVTg811N75j4tDFoTvgyYv76uyKVDLWGQPKVsXPeTF",
  "key28": "MWNbYk9NJN4PHAgUTwLkNHP2kfNqvr5xCLgnPBw2FrodxmxRhMKtaG8R253buFTXkYo2bnbqyqXzBjthKpcQYzm",
  "key29": "2Rx3NnAJL24URdTbU1Vk2d2AZyoWS5VvL7RrSU4RNHeKkJxiCV1NZnfPSkkjcCYMeaZv2kqzKc6K1aUZiGpiRD4Z",
  "key30": "4cNrpDcVZcEWqkdEg5jcieE8yv3RL1FGufwf6sWo2J6Vd3hSPWurEP1LUyJyFqT19JPeWhdGmSH9n1ZK3hvXbRCj",
  "key31": "3FkRGXZegZq7L5QwSW46Z8Vq7EyzwfUANnh8wwUJxRYKdgsNCitvD8h2bb3SQPceBMm3TURYGKcpACuqMvvnRAPL",
  "key32": "qBPLuAyLvif5UA7nsMimTR4nnApVLbMJtiE5EkgNibCUpT4PUvwQWLiWPfhN5AQ4m61ZcSt9QaZzXWFkDmm1LqG",
  "key33": "3AEgwfV7UuhyPksyc9hTxHGHkPEyLE6ZZADnBU9txanwhrdk73LfqHisAsck8ks6zhia23aDoV29LYjJzSqWSgYR",
  "key34": "2ppf1KciVeG3fSz51i7u14Jh8aPPA6f3u1abKkuKuXXRaQPhJHar72yi25a7Qi4UBoggMLoqKB9Lp3MTFXQe6oQY",
  "key35": "3uJLp4gskn6tHLAbcGZ7B5y2JUQcsQpPz4oQYnfnSBy65RnvAr1b14BDmYRjpWyHWS6qcV4bEBWL9sfpp6eGKE5w",
  "key36": "3xMLtwNHqZa3u1c4MgPCzEGMD2qvHCxCWaXS19CF29aZ1DcukhqHcC2aQwe6UEXyFsmt3ktN9GWUNA57kTgiqPhd",
  "key37": "22tCDU4wUSGcKU9hgFCyaqaJ38NgGrSwo27jdyaHMYzwFAjPEcfHGDuDvP2rRexNZsPjbJpct1kkaEZ6GkMp8TQy"
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
