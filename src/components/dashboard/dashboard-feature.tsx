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
    "2yuNjhtez1ELRbdB27oAmFW8aQyBtpVxQj7FC4dEqDCGBYg9cAjRR4nEE4vvD41aNUBpWvDFLbhXnc8aMy5ij2q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGNAFRTQrb2oLsb9xPahC6K7pH4LAdvmvuwkLNrReeRdxCc2TsX59M7uwyaHXrqJXad36AEfnWacM6FNa2x6eRS",
  "key1": "5tPzG5sJX4GmdWBqDkS2gTT8B77zTDqCKVBHxW9HPee6JKuuxPcVfiQbRm8iwU8UMBQLZ4WMgTcWvFxU5f7NtCuM",
  "key2": "2dQde3w2H7Azi3N1H9nEmEWKibtQJEkJdfnZCcPGrquq3AzL19UEHhW7q13K66oUWwHBMUMyevnaZHASjBqqb2dQ",
  "key3": "4UDjB6hMqpSjyPrT1tzJE2jhZ4QnZsUYaruU23iADZ1Us9zSEueF6HQacvK7UAzBgn88iSi585EwrrmfHp7KqX2u",
  "key4": "4m8dbKPU4Fqu9merYZL91jqivP8yHG4G3nvLGsqJJheMHkciLN7TwEGz1ai9Mf1sdA1BosVtUjQA2gyYKRzVDKM5",
  "key5": "3sS7QUEB1DACRqYyESmv2NyxtT27371uaQq9tXvJdVE2YpG4E92DKGMHkqoHStE6DofyhEcFsA457wPXkbr2urfh",
  "key6": "58F5oFfby2jfHLXY2yrH7qpzZSE9vZ4mbUA1bc4T2MLg3XGRvNzo141Sfr1tbjA3aCZKTfhWZu6EoLAwAVQLhXNc",
  "key7": "3Ti1D2HGmSec1YrF21QJiQHQzGoxymM6Sj3tkjUCHsbFZcEHpboVugguLzUjHjadUbC6a7hHbiky95pdEfPfKz7E",
  "key8": "3coVn9gJiU81Tqv2jovdD9wZSoRDWQUaxQx6ZqhaVWupvXu2T1vFwJvX1y4TGG7NEce6dpVQRFGoCUTpV6sjfHJL",
  "key9": "58aWfpUHFAnDgTyGrUcnzSj45n8G8UDHdkWhY2sMrbMBySMec5nRUA761YEEibu2Xvpiuj1UHL775x3WoiSVvhM9",
  "key10": "4GwcsBoNuXEkqKU9XjZgsfHZGzxyr1crd3X5uRR6geAxsvHKNdXKxvF6v4s2JwbSGJkjqTLbSGpD7x7GfJbD5Kpo",
  "key11": "4Krj5PHJVnitKQaeBnQhi5SS8bTWqc6jgC76ofxh1T8Nm1nUmML3Q66wue4Ltpaa67ygwZ7i76tSqGYgonQbGwTq",
  "key12": "2FBj1ithwZQJVY7t68wJixAcpnGXmE1eBT8MGHyxaa7FXHHfeNbXF89Ac7PhxMeCKEnbnjkWhQinyBf1ADwV3J4R",
  "key13": "3oXNiiwid9eY6pXoMebK3f8mEcPh6H8rvE645b9tW3s1e6pcyFLzFxdCAYTwnFWWxiJUjwg8Zz8RfD5VcxY8HNen",
  "key14": "5iRdmmEQdXPH6r346MnjgTVuV2oVUhfXcJDGzSPrhRPrgEaLpAdeNhtr5kwTLXaL4HqSmLhKGD3Ct7rrPiJLxSVU",
  "key15": "2vBWrWT5Lnu1tpd4m884xBhc6VoYQQaM3jzZR4ELZS6yE3tqeuspZg6X2VpsWZy1KKTu1bdsZZzb4GH8kJb2zVAD",
  "key16": "h5r3iVBiAsYvh6jipj8Ht9emWiiLVwyCJTf6M2gU5qsjBTGScsMwsyeKVE5NRo2BRfQbbE4q1NuAc6sBhQfTxdU",
  "key17": "iBumu4FjupFYjkAYK9CDUjtDpwoUDRJkDWe277UWrvbXLwrdtvU2TP3auF3KpPEoHpbLqTB7UzBSrohwnuqcueZ",
  "key18": "5MQHfVWua8wEZJwfSsVvCsVcV4NEJHL5DrpdH2HkQJQem2ATMZKNhoYdunSFirHhs2QytYyH2wXmg6o4ED3rL4ka",
  "key19": "3QR81V4GJLWuiHQVPMrrGEc3NsGwADC4RPDcttYnrLUsiYiuAszDmBudwGa8QAi8EGiLoT14scwHrZJZNx34uLKV",
  "key20": "4JgKNKvEQnqjpZWf3cutzsuLEWo4beDxUBnQXaoRgFvqEmCzZLNMKMLzjfkDqpRtc8bjVaNWkvnghhdkcCVAnnen",
  "key21": "4x6qtYF6iEnyW43aJBQV1xkFd7MSo4C97L1ehuHh634Q3ej1DgutMZBPfYATYZAFhuK28cyYtN1CdZ4EM1NaMKGH",
  "key22": "5ea6G3GUstJXXrbvPaf7g3CNid4h2cYPuDYivPFHEujBFRxF6TzFWg4TYQnt4DRKLdzP54LjkT1FMN82R3M7x3rL",
  "key23": "V9utk6H3eRo3vBxBfx4LpauWjpwH4BUuU6duhFNvCRmvDnpasWaqPND3c3j4MW4LScPpCHRR2iADMeFK2B1MESJ",
  "key24": "2VXMZkz4XbLEYMqRZtZEbb7VpTbxaJQjiB7KJem1SnAuFAB1Zx9VCM6JPZLs3pxEBVxe5hRuYLqZrexGyhAkirJS",
  "key25": "V9GY6EfhCL3Wen3x9PjbBqsXNEYuCoLKUnDQdKD7rRCe6gy2AJsETo8DwPDnEEi9HRUfUDqCwzGaPH1mwPYDP5w",
  "key26": "5acGgm3gdCgTVLQ5AMjyWQAg6WqHNGgd66ZdwHPqn8W2EN8QwJkpsMKczYddy5csB5aKU9vht6ntiYaZQsYH2RC4",
  "key27": "33YBrK1Hh2BuS4EHJchStoGCgYiyRgBXDnqcACnY6TcZUtsDJs61wq8Sng8XpVrebdDtL494nxYEz2LKtW5ZHFo5",
  "key28": "5HxV9PTkQTZUfpYTJbuZiNp6ZeUXjHB2thVxMXMF659nU7LU9qC8bE7W53idj4GMXWVV27bJbusR3mFhezWYb2Zh",
  "key29": "A5Cp6GJVdYTyYpHgBHe4ta1RoKK1JxmtPxs6dvDYyjs5su8Po5LXTcCXC9Kf4dwBh7uEyrQTpxFAetodnY18P52",
  "key30": "5MDGs2SEeQBcVFuHCGNzszq2VEqZDwbCSHDGdgwmz5MpMxNCrEc7YHGEiXcVK3ZjTT3P46uS4yHM1AAHy9Kf1eC4",
  "key31": "48gNePHUnfmgQpnTFP86PGPJEBDKEcZQ3uWe9xmN5FCcC2cVvFmMwg3daCJhteeX4g1NDuyakQHwVdcorSnZt7Jt",
  "key32": "2BCrpgm3xBPWju1T8xYVpWzA6ZyMzEoPHs8e5HsmYp7Vwo1y3cfvkiufSCBEFAcev3D6tHiL8oEb9VomYMYycbfU",
  "key33": "3epjiuN8RYKqksU22tBmLzxsso41EPwNf5ktRVs9Cazu9rnKbCe56XjD6By9sJ8CRMyKhfME6fxc75WFEuAmoARX",
  "key34": "4nnCf6eSvDgmtkpKmf8f5r3QYh9xg9e5toKmsABtx9WhPhUVy1iC2YNeLg9XjAdUgemdPGd2RT7ccu5XH4TZS3pE",
  "key35": "4oxT4sKhi5vDXCdXrbt3y2M461SchAqDYwsfuq4WHjtUozQ6HUmXCPnbCMy3XUVzriPYtxaTJCDmJDSGpB9j7sMw"
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
