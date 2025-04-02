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
    "3cj6LGfV7gRJpjNcqQgg3ckSbB3vwvPHgM6FDJP2RnJKi5gFA2igABMB1JrcpRFmrBEiBCS6q5YWpHmq8caxoxu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u98s8S5uVCyeBGtXYw3Xoo7CXRhLchQThQuHeFXgUXZ5fEdkR1dgM4D1BcxiYUb9ZX6UazSoNCdKc1hpHLGRhqu",
  "key1": "YuST5ayFb8RBJbHPk7mUjDCzrpV36m1E63S2YeUiFEFM4ypv6JNodxVCNKfPrXHi6h71VpDMvcfxhkVFWNfnxG6",
  "key2": "2wvWTQB5SEVkkaFgG93TrRk5n9pzpxJsrAqUQfrp7hg6d4YNndqWjsuv3E3STbYomoiYG5UzMCBjNGNAF3gYX8SX",
  "key3": "5EPPbRVx6DumPgafBGyuebsBPRGwWfSrhFU3AJmn8qntQxSsdVmUay7vGuWF3WgnVJ86cBS683ziouGua3C4sJZt",
  "key4": "5gZ4gMzcJRWuSpGs3cuXQoUavqiipMtzhxhAqRH72JXvvvLUXkX1UaUydk7xUoix64DKAPY6TdQ3h8cK6DndgL9Z",
  "key5": "5pm8yq483LMRGmFzJaamNZDgcDEr9wbCXdZuopYiBeAgHUefDMSkNiq2b9K1U5we9EnZpZyfvS6NykBFjQFFKvv1",
  "key6": "2w666NdaBR43SqiDgWkuzqEAx1AXDsFfueBNxLSt6qoDbMfkY4KYLaPd8zo9coZ1dauwimQp8FoT7e9CetgBTB46",
  "key7": "7isW89sTtboiF7RfW4x9NDocGGUyLNEfoWXz7s5YkrHa83AShxVPuWDQdpKLEtYDi7SizkfMWtkjg9fdba9zRKy",
  "key8": "3A2iDaW1C6fMgNdHiPEn9FHHA2ZQqkpR8x8spD7SwRFvwtT16auWHLz98oMJwjdDDnwLFq7WfYqtdjLW8FNkVRMW",
  "key9": "5dRPHLN5PjrU4jdqDc6cDQjCMNivB2eqfZybj4HocDi5DH7FYrM6dugmkVz4tmgGbzUpfeoiHp9vnxxS5vaqEGib",
  "key10": "4dHxjvHkPMtrnyiJzg7xgPA4htyMKHUptWJtHrtSMStL4zQuiPaT4XKbnrov6soPxwgppGMYXLwP4Jvnk8pAcSsn",
  "key11": "5nH5GbAXRXDSFK4uCR3QMUhxKQ1WWsAy86eZP1B9r6AsEDYUpj6UdDBfob49M1DBwwN5KEiFrkDJRZiQx86FaMHZ",
  "key12": "2yZpRqqDMTt7mfmuKpaFP14YSbQtvvUereHeurQnPPnTZkpRqnJYYPXqnFhL9Ht4FHHMaK7KaPuX6gxmofp9dSEr",
  "key13": "2NvuzFhc8dXHjrutQa3TspZ3KDN8Pha2we87ZTrdo4zqqmES4t3PrPkGgY6NgKrLBoGNHfuaEMLsP2i9y3nRvdPA",
  "key14": "2MtQ4fmYgemh43kA2JKerYiu1ZJBdMbcSRwvy1N1mBhkVc6QBqxza9KjoZz2QswHLLys2FnZpiQ7gguFfEg6cnuY",
  "key15": "28iwxsbZgHL4iQqU5Tfob4345WZFM4npx2Aatpu6F8AQzx2dTPn2ZYhNK6CQkFxMm8GANuP3QyV2ZizxPPuECM1u",
  "key16": "3fS2mB55JPGE1Fi4p5Z9s1ixy725L6V5CV1N7GMhuv4WNQpY4sFVzJcEtedwp8MaepHRSnMs1BcCJRd7xLrB7boC",
  "key17": "zCuJwjqn1u2ehePGzmrjbWAo3DcpZXFtXnP5yj2bDFaDZZazDSyj1Y8MSL4cxbxtj3mCQSqpYNYdfCmnNHqCBfk",
  "key18": "2JjrNAue5NSMeZFeew9YnY98cu2qy3Ua56nz45AYX13wvLmD1KvawraHBrHnaiU7Vtted4fWRUPDuGspTmfLBz92",
  "key19": "3NZtWwuX1MV4ujCxi3z4MgE5nZwTGQ2VxcTSdffM9m7LpahztgAa1fEq2ARiAysE2gmXZD3CXa1uvkMRehAURFSW",
  "key20": "59X21zC79GHYErvVQ662QH5yP6UrJNTpWtSGW9eJuGDzq9EDtEhUnUq6gbt5EXjZEt6TRndh3sGcbUr2uqVGPVEy",
  "key21": "52x64euoshyiFFD7zDug1BZZvssfwoqhcR8VCoVnGNMc9EJLM7bJsDfapPWECFUYwSq7f9FPvnYWiich9NA9Jdqn",
  "key22": "3UJQFvuxTWBcWRvCMJoRdTggtz7GNsgLZXpYTycp5DijcQhtpRKq8PCUbyUhT12iu4umZEhDsiFEVbTAjaQuDxYx",
  "key23": "5kp1jTVx4AyPAgUDFbC1e2Q95nexsSNvkFhoktxmttLGnJwzsorhivCoDRFucEwusFj2xd8TrW8diW1wBFcguncC",
  "key24": "vzDVPQtZe1sa8xngh5eq2omCYC3bFkwg5FNRu7wgrHnVSwifg7K69abWjgzoiyyJbc6iAAfdmZXqdey3sQLQc2W",
  "key25": "4qa1XptnBevRgwR6U4fYrsDeNJRWn62FdE8xUTpFv5Z6KFnGTxgmfRamjVWH5gxPuePtiqyGGqLnZYDduWnyEQ5u",
  "key26": "3N9V33ic241g4PgXG639j1pKGmjyG2xC7DfPK72PwAin5WHzvorUtLnfuCViMbaiDuYzkFi2r36a2J2Ay5kQn8ks",
  "key27": "37qgXicGvpY4QHNJfCGUoM7XjQ2ztre1eC76Zcn76uN149CyYJ67Vg72RkDC12kHwREs63fEBqMX3AsPQwcy2WCL",
  "key28": "4krCt2hYaPjVnAmdTWBBJznUiRYRuNSFRodjcRhsbrqR4U6bphHiq9FJjQ7wDCmerRjks6RRF58Wk5GZtWhThBwV",
  "key29": "3DpojsCL6arAL7L8wsp7UG5a1phVvncuZp2A72Qhr3qddkdyR5Vt8uMRnjRQWjP5eh2bEe3G34euCiaKCrWq1qKt",
  "key30": "5YMUd31NsT6CNLRaqx6fArVFbV69uYQ5oVygsBAJhmvLTusmuMjyvN574Ejc8yD6BJYdyDvpTSwFBhcbsfJkdK2Z",
  "key31": "6526egLJ677X99EiRyX6HSNnFcCLxJV6VQcpG41Y2tXjFQiQTAWmonqpDD3xgc9g9WeNaFmuW9S31cAja3sumDtT",
  "key32": "5t5frF1b7q9Y2fvbqRTLQPrUfMxknYRsGEp9oEsb5jP19fL3z8TWPzWP8A6beRwLBfR7pvJ4Rs6t85f3x1QcxP6g",
  "key33": "51MqHgME4fGtXmUaY3UrQMmVnWcH9x2AebGXPkzxR5aeJVLiw4TGrCK3QJidduRFWmK7YAuYuKbPVAMEgTkN2evR",
  "key34": "2gZGFmmmnJConRK1tjwfgTGpfi75FziqtHNM56tX8mqwjgWAzp5LWYSNwNXdd513GtHrvgwKwWBqZfgYUzeYFrPF"
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
