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
    "3FR7zne5Xk1xfTpazE87LAex6RFnuRDyoUjgQ9bxXEZ35BnYizBGKVX58i38UvczQGPQUUrjf5VLHGuqsQpr4Mgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33e1bQA8Th2JUF2ioinsCFMdsyahWCUJcoxVCydzka9e6Jhm23t3f8WPpaDgT7DaK86cTDTr2km1aEoeuwZczwkP",
  "key1": "2zAnydceWzVNPtBLookNCkTbG3hVRsGuGCGDaaYimwSJdEK42nRqbtLspaKM2oS38WqgkAYfmuVgGtDiiPfjV4DX",
  "key2": "5K6MD7RLhziQooGLppbZsHwjKDEAtJFefquax3uBV7bQs8WRpYjNUc5GfuYfUhgntmUVXETi1GPsMBgtfJSEBPPV",
  "key3": "5YZGZkLtLQhZXYvqva6MPBW8JVBnSELAnZJikUiJvdSgCSsph3G3X35y3BpWRCyywMwhGcemZJS2exyMXJzeQ4dD",
  "key4": "2vz7ZmZSFy3tLR4dJoU7nNXg7bLYsWeEJrt2zEzKB2c4Pr2Rdn6T9eWUUJniKhWHHxZ9Sr7qGatssRGQbTZVxzL4",
  "key5": "4hi4vw8CjEq8CKo6ec45E39cnrHr7dAmUyAGMzumdtfuBNY1pghStw494afZXg4n4J5eHdnNmUvGDgqtY1oqMBVQ",
  "key6": "4ojmz38q2EreyEWq3d3YFKNTUwyF3UZEoCoRRDRqbhTXrBjnjXk6Ln34ySC4apXK1G6MCwF3uuyK6L4PouYhBFXp",
  "key7": "5LrHfJujPjWdzy3GuCa5QrnbbnGzexv76D6jHhSdBnhKqUbGP5epKUxug41j7W8GGrDhzftWejgn1L8enpSnrQWb",
  "key8": "275MJsCFEDk66DdqxcdrpGmdxtwEbBmKV4KH3UBLYGirr5T4xkuVhKf7AqquRH5Bj3QubwYPNu2avzmxYn8hCmmV",
  "key9": "2RD2curBLhp9h6gw3v3cGmEssxZ52Tb4WXYeVmE32Lg52wsZBDs5K1bXoJ9m2X2JfqkmmqPje2wYjxM4RV4ywJGi",
  "key10": "ke2G3z4c27g4XQf6T1ZXtVQTr7Pq2YnrR9jSJDZ3jvHwcTuM1pEsy6whh4bGiw6evNG44UENSo39QBgEcjdeCWZ",
  "key11": "5PVRzbYFqufQUTHZGdkJ86MgKMRoCDZXGreyF4ntPEBMFpGwwtTS87Vzcp18UXhaeRibV5Q88GptjyGCHyfNJACs",
  "key12": "5mdm1FHFZjTWC9SjYbSMyA47FhRoe9gEFF7rq6jzZ9GKg7ZUXT9iELC7VAX6UHTQmzfJ9P27aWACXTQ4Cs2FN1bz",
  "key13": "gWv1UCDFq7RVtA9DtDZNdGwh2CamcSRXZAsMD8J4QMcSPhGUzPbi7KsrYEHFu3sK4bkuZXfcaQBTJQUSYq4zYhZ",
  "key14": "3LekHXDYpH66fBVJp5ywtV8igKcDXkZ6joY8GjWDzc1cnTcxECwLi8fu8DmN2zYfC9ivHUZfzGB2Cdf6ijoo9cGs",
  "key15": "2GVXXwT4oH1zXLQwftSEFooNviMqCc8aSyvCWmHsCFHAUVLyYFv2gPUhaBt5E3g4eByL2gSiyQAA1YnZAjpEGHSP",
  "key16": "w1C81Sdyx6CjrwvoyFvKSUyf4NBMRaqZjgVv9Hb3unoNw4HdYJ4TPcpxYaVqnZMrmBAqZY3j237UcexGUEBMe2U",
  "key17": "4h7DUES3382ofrguRB2CVAZVDuJYdW4C2jFUZBSAdyfdC4ymAGhETziF8zhSWdVDHfGku3GZEA3wGinxcgd1gDAz",
  "key18": "2b91NepupabxkYvavKDNqyGC4qRdRJmLqJGdo4BZxraRxtY8VU8oreNJ5dQhNGVtEZweZD7F8ZxxRANaCsEpJuUM",
  "key19": "99Z12UbVe5Bge9x3x7ostEghHm3TnVnW4uttmeUFNqJ41mZ66sK3LAYwBcTbms5UWv7x7YYkBu8Tys6sNYnUGZd",
  "key20": "5zQqK724WDWCUwPLFF87Wj4Qpqx6cWWdccoT2JziGrwFPaEhDz8MmUYq79w8a9ndYkaTS19JauzdeGRobDGjkhbu",
  "key21": "22Toia9hGpedgDoJhQMrjqZkVu4ChYKFsN4Cr2vQ7f5tAhWyVnG2Ku7XjvXHWBD35CQM5ciCefsKEBHaoSQnLG4s",
  "key22": "21GajR4b2G9JYoT1SDtBXtR1g7ZXrtAYctJtYb4pr4X2n4MPMWSf1pL95PyMU7QCrHyu5zAy8RvRGyWwGg7D4NA8",
  "key23": "2GGtZn9zNWnVXmAsaQ8WoKJKVR5puUAMPRAAN35cpVeV5Tx4ET4hdkzd3E5jdhxhVbEZpkEFe4L6Fdf2sk6gZW8x",
  "key24": "4mKYL6DSD5upJp8LUtp7FZ4hb5q9b4GLaTiDsgaA4eT6yA2w5Af5E2ZLkQtW5kjEHqCJPzQenvF9ns29yKFN4goq",
  "key25": "gEhu3UUG8fT4hvibri6T47qgzDxf4fAy7YHFWY2RSorxv2SSvimYSn2ZnTHZ6zdakuPonnusskpxjeNVmVcVtwi",
  "key26": "5VgpXus1sytCdxc4MStu1aXMpGmJ6iWsCPfnbDNfCoQVb2h6rbMzmLYxNmxt2hWNpYt4GcnJwY1pu6V8L31MansB",
  "key27": "mcvSTMqzb69DRm4PAhjxMFtLBG2Z1vC2edo4qaUsY3dWaRPjBHhaVr93aN598tpEcNotTCj7QN9UaMJkPk9K6Eg",
  "key28": "5dW6JYbsL8eYUgWH2MdE44EV7by4k7yUxc8yYsHBni7YnjToHhxy5D7fzCSfdF6PjypRTaKn5EaCFnFYtRFi2oHb",
  "key29": "2rvPX6XEkqTF2AYb9U2ZrmT323fSgquNGGrRAwHNgqbHZ1Qpb2iCNHCmXJRG4TZGfdP8rqqT8PqaoK9fdGaFzmgZ",
  "key30": "4LT88bLUGcWy9wuUBvj7L6nZBcpZKiguJ9HdSE8XkVuuDaKsuwzm8S7DWei9A8EvFqoTBY4Xcnogv785QirqpHv7",
  "key31": "3gGUwkjaLvTcQsiDjzeuGusyTARe8AzBi2No4tDrcUcbkxFaDXMoP8vU2knf5z7pEaZhusTM37PZEe5bYi7QJrGF",
  "key32": "4gvLoF4hfAUDcX6Tr9DdAAFtJE6JMPT68XNEaU5ooooZqoHB1q2fYzX1FbVbXMXLkDZXar7evQdsCXXKze2pr5qk",
  "key33": "4BQsvmgqKZ5M7byyomHBuPGECFNa1NVBHFynmMAbmsEc1a4mdVKcSXkznqSQWeWQLgDg9MBVYAJtDi5Y7ZmDE9cZ",
  "key34": "5JQNeL7FJcnRcNK3PW7QyG7ZwFd2vQz9ceU5i6GbhqPDZELp5X2PiEwbtwuX7DZJSXKzdkNjZ7PDoyhZGJFj3DfZ"
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
