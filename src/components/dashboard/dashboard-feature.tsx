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
    "5boaKLM9Gd19yhP3VB2BMAmw1Haj6EsAiitdPQ4MKJ7cgZ5DbDKEgFbmGeTzad89LJvi8X4GD1THXh7nF5e8TecA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CauCXVJFkYJqRZjfiZTV1HjG8BsjSVzH4MhmTGFwqaLtp6SCDF2xg8yEd5qDCqGV8LNY4wxiRW8wVQiN4QgPZgC",
  "key1": "BvVpsTUrKJZYMYcwdah8hoLJY7xbfbWxLzDK9sfs8CW6uBFL6J1sadpeq7QuJ2gF8tYBnSoh2FVYu7q1jGznS4t",
  "key2": "mM2dNNdC9yTMGuY7tfsucu5qGa1k8MyJZYPJevjBLdHsaTxyDsR818F4WYezj36mZAM8ZBiGKT7h1CrWPSV8R2B",
  "key3": "ytgr2fRntdFwvbUoh6hcaPCeoCkPKExqyH5viGMjxc9m7NHr3q7TLA8Q1mWwPcG8dAyoBomRkdiqax5hyc82ihy",
  "key4": "3pEQF4BCNBYUkdy6HSQtHZndjukVYRtwKe71Agi1Dmvxa39GgGStiKArvC46AJYsDKT9QaWwVsdSE3oK4zgGw4QM",
  "key5": "5H3aJy9g4be4wYezvVyBJGdLrscTCJcDHHQ3AbUN8bmoBc9m8mz8cgNjJN4tSJfTSpQRmKcEJhb2P8Z1rUmy31qr",
  "key6": "sbKtwbkdaeat1cvGEEgFBdHfe2pgRvz2rwFLtsfzhVaxjUaQSjD7eFFQVYFfwPpVJA9thn4fFWCeTt712xH4xSw",
  "key7": "4JjNH7ESynT8yaRxDqbNdzrFmw5njMA3tX5MP4KvcfPnuuQmJ3SACVm9v3ZjJD6uJjDMro53Xqo3ebwPQZKnsQX",
  "key8": "4DPGc1huDx6AVtCSeq1Lc2fqu3Hraon11y1sVWuqmH6aWVgJbU4FZRPzTmkJNhik9hyasxmsqYzuA6QERbVxXMuw",
  "key9": "2pTVnyruLBbKSEfxRQxfFY69aENbktGp7JTY8Y1TR9PNxMAPuxnGAhCJtKK5pHVKahAuJtoCXpKNQxyQRGiDw2WK",
  "key10": "3bT7cwy8maW3CMCdf8gtVkxMjoSSwgwZ63wduUGVJdRiqppAnTSpEdB2QicAMuQVFAgnZvwUpYBECPRuuFrRAHmH",
  "key11": "5KfUSgFSKUeee7bvLtM2zhtEAbFyYn6VGAp6m63zeQ7kGMB7JwA8Y1mnM7X2mRpf5NE5etPkCR6oNa6QQZV6wF4A",
  "key12": "YaZjM6J1XFGaAN6CTNwNGFfy7qDoZoEM7m3mR6eaNz84caF9acTxcNHfZeLoLoVj3YCynY3kLAZkkFAca5V2mgT",
  "key13": "4MUiNuddMvkvDe5vNMZ45zj4ZoyG4Dd5tXj7gCY9N6cV1T6H1iotJCnKtY2AX6M8tGkb6czEqZ8uPACqt1uFcXBT",
  "key14": "3bH4vYZ5xwmr9NtRoykmVTUtFUAMPYpbYFHncbrWgobo8J2m3FRXT9P6WcB8r1ihdZv9wyy7nPa3GWYTDewVa6z",
  "key15": "489V6vGjkenuPJxJtGopspp7iYYxNDW4FP3fTWmkef39sUho2c9oAqw4MQpiPvb7GeAa9kKMdz3MDKatYyu6TPvj",
  "key16": "65jFs322GAKro64aauP6o1UCAasfqapYpDFvzdFkmxyyfUt2vkXiHw5CrAXTEf51mVAR96pV67nBCqm2HqqjZNdn",
  "key17": "jgU1wVCzB1K7kCTKkyDi8PenxzWGJ19Jwg8z4g2dmHQTUGNtpyqFea8YautWCkCgNdUt2fmJfmtWHtcueRcG39c",
  "key18": "2XtHXuwtoTx9J3eAo8aRaWpefDDgi5vz1rotSmDjnrSbrZTpYKr9rkWXPiAsseoyJ2N4bT1chcJDPMp26EtNq6cP",
  "key19": "3TGM9AZqHBhgeUFff4SUX5jTvv1sytPVZZ2r8AqYYRv16552NxBXKEbJwhKpY1wZeZS8Y2RdNkubEvgMFZvfiVoS",
  "key20": "646jT2QL8aWSpoVaEtzP1TASiaRiXtchVUM4jSpac7RwxaLygQExnnFL8t9CqkCyPmE9h5H9VLYDZaw7NLzmzcLY",
  "key21": "4ZbPU4V8G3ErVDjyDTDrVWMTKkFwpUGDivhmrBWCPXdsrJf9MEzeTNnVBm4SRzKV5x8iWLkWvNpBZkrdJUmV3uQ3",
  "key22": "4hm6SJKHdvs9w65BAgX4ju5w4hBeJhxhZiXxDrkcv3rqiBUzHGdTZgF3Q9vQEDofx7xww3pV7ABcdxPuiT6syviV",
  "key23": "5yveVn5erj5qYRbS2uE8mfss4gWVXWnKix5yCogoaryUVg8x9YNjYLsjthmBFSJtDsvNuJfqzvVpNz2oasFMTX62",
  "key24": "3aFppesHJpH6m48S4KidU2AC6MgT3ScjspVkrbcvMSrzu91LNT2XDEG8S62eaud96irgnkGcPyXeyCSChcv3Qu22",
  "key25": "5CcnVYtFmRsbi3sg8j3UGn1XVBdmWxoEGdzkEsnfNr4cpMC1BuvqBYUqr2KjXXpEMa5xG4UB7B2YqEpKmk3E7xX6",
  "key26": "3dvyA4innmSpbuup8DQpcofCBh2fMDNkQDLxr8KS6iVHCVYZtcQRemCmib7io3z4b9aN8BhnnZtuQjVuS4UvTGRz",
  "key27": "4msqRbt5zEgMXKSCoPqFwLLvDiugaR4DTxaYA4npQSqcBMjFbip7THqxtpVJkYkUepXLg9CxW6ceBcs11mbFBsic",
  "key28": "42j2BTLmXcVFF6TTNvLaovmE1ygReUchb1pQMBUF7NArNS99TgeJ7i17JC6TUVXKJVYBdACJ6prfasSEZPQWtiJM",
  "key29": "4iDsVvwbYrRUWqpaxMnhUNaF5yywiyzY5DRafJjwciSgrKgU4CxCMyBjP84rdGJfhuAXcVpV4fagUNSxXeHqG9V5",
  "key30": "3A9f78c3d8Ppfx7T3QmW1BwFsv1Lee1qBBum2FyVyNtH3CgHALh2jDwcsZq5o9YdNncmbFT2a8tiL7sTP5ANt7nG",
  "key31": "5Z2S5eAQ1wcEndTvvAZS3x4YuauRksg4x6dfrbR61v7fEsoXboAjoYcdzmANq2Dj4NWbDEzSZixmWC7JR8Y8fo7G",
  "key32": "mziBg18axToWmprvVYGJv7ERaxPYgWAAex26rdUoxfheRB4bggA4KDk8XPCEvwdtfsG85sNNQ3NnwzeuvdkFc2d",
  "key33": "266HVV14yhbUncRp1EENAwHXScJK3UuiSfA8aB3VRufQkcKmkDbM91bwbXQhXVntPur557RSTK5ym32eDbTwa8hY",
  "key34": "23yWiHZB9cM3LUtP9RLCDAB4N5b2Z1Me2QwwgpizFwC9JPtMCMnSycfYoFbqFovLeoAUpyEUGda7nTGbshDZsmjS",
  "key35": "4J2WUKYJBQHxg7uPrEsMUyD2aKdK8Rm3BA253srcBwh6uWW8ZJocLFb2Q6Bs6uhJgbrji4H5wmRmMswxVkCEtJh9",
  "key36": "yaQh1Y9GmUBSwFhyQF424BscpA1xike5eZT865MdEaVLk54NT8z9oict2aSh5ftBYuabbVkLsJQjARhc3rjjVRt",
  "key37": "4SPzCyfmuex2dxPhncTtQNbfFBBynyAuEqFMYzZ3Kh9iryE9Yw95sxHrUaZV2oT9dqDWTV7JSBv2Dmm4NziTmn5Z",
  "key38": "26iftUWuyZts5gLva9d9sHEGQrwLGReUcX7dfZfxMWcC2Epr7rwmjo6KNb3PX5UkV41qL2NmZ8aokhE7AJ15R55u",
  "key39": "3hmyMbHwhR81iBw1erw7ftXLAyRR2YXT4fG7EcgUPW9VrsvjzKLebJiwcoarP3Pst2JiVBAS5TqF9QHG2TnACgQo",
  "key40": "3gWqh4BPEVTxWQjq9AhoYJfXdVs42FsHB5ay15jxKVcWriYQjBTA7f5ZKgExtTtA5LE9GMgTQKMWXMgqSy7SdvYm"
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
