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
    "2Z8HwCAMzwkvT5jCHYqLkRrh2982V1NdrVjaHT1AindrxpSrpEHhUWE4pXEDEZWC2SGdV224CL7ZarRJ4cN5Ma4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJ4ApyoZbQGnTxB264PH5p614CAh8yRvC2bHfB11WRJpdvGXfH3gtHFznpQfEbDeqD1yu8XTzVZB2GTo4YPaTSc",
  "key1": "3xc4nw2rRRuVVBQWApb6G85L5pbTrNF9qytsRQqj6QfSV8h586WH22VVVAupYY14LE1XDiRkCGDhpSvYrJvnBB7P",
  "key2": "3P31ZvsRCdWu28CVH8S7BTb3nr7TanjYMxNatixtWzAKaAvLYRFpjZDpRKwpzMrH2kfYUoGdrJSZcDSjDm58Wp7E",
  "key3": "2yNJFUZRDFzM8zfvBQrTXMGtFmce63LYo5idDrX3aKd82mQ1RRNsEWJ5Ta8nQLRMjLGNAZHjtsfUgQN3dWAxbYZE",
  "key4": "3D8sntqkXGvpay9Y3mCknUkFPUquAGN3gdN6BBNnUeHA8ojrDQUGUG6X2AF9rtJiZSrngbqMt2an8jvufftbQr8m",
  "key5": "vDX4T5YZdffSTSBe6vEKG2QUjSVH8XrbQ8e1Pe3XXEygVLpFC6khqQGw3bSDtaUyjXy4gmi2iBeyBhJ7PSyp66L",
  "key6": "sUv9S7o8DBkqCRricnbitH91KyGM2rmt3i4TbDuEwg15pSZny3cRtHLyuV5VHBzyXrWKUMuRYPnsic3fEeQ9HHs",
  "key7": "uDDotjGxS8VLb22ccjAEafvnH46foEyZXKe9RkP6yYHJ7gdsiNEV3tdDHpiTHmsjfXEJLE3v9Us2bVrY7x6DwRM",
  "key8": "tf2ZYJbjdV2MzBB48UbcLUGvQ1RydcfVXGPRVJpvkuR79tsWQbfrusrZhCptWRfKBMi9mfFbM4kknYLQFZyt1NG",
  "key9": "4N5sSeeAW9SHczKY3XHxgwPzcq7djyPS6ZtyxpjseJYMEqwf8H5KTVTKcsszgwmoh5t8LFGv8XgXVnZeE1HFxM2w",
  "key10": "QujxX7GDUECMnEXHT8NEiGvVYGotCkVxL6x1HKCWLHv8x58f75kyZ7qntG8kjLU3NfM8yZozd4PTTZLygREc6v9",
  "key11": "33Cpi51Uyd8jH83sv4GvTGF48FXUBWN2zxEjc8d36hgrx9sGPgVK6g2aQKQT3PSFHyJSjkmzqQZVmye6qisPk3Dv",
  "key12": "2g6DKtYG1H5DHPVab5L4fFfyAB8aXqb1vXxsALyymoVwgzjMoD6LCNKDe2MGUepiiimuPPZDhAzipSi6zAoFL7Z8",
  "key13": "3gsfiT1im8HVDye9hEJ2tvpuUfr9HY2adzQbo3qeSF2xGX9egicNKAEJin1nxCpehwoPXxGD9nxKkVYcEyepDMjn",
  "key14": "3sajErJ1xZJikgaFUTDP8AKeDCMKHf1dVkt1EtWvToVesQiehdcmtGMPD3VPvo6SzQVrFbMqN1b7gQ9Uxt9XQ8YE",
  "key15": "41xA6wJiKEbmzZAsdHVFiZXYHywt5cPN2EBvE7YvasB3Zd5FWwDadktDEPiV19JHrx82N4wwaTnrq34p2YVpmFg6",
  "key16": "5kzjc4dhs5xgovT5mJwtDSsVKsAWdiMovVFSbeFjFh3LT5vfmVzinniXva35k9XYteRSa4dx4r2PxS4meF2tLe69",
  "key17": "GkoutQPeLBx72rkWTVxHKJ447k4Rmy3Hy99dnkFumEpAW769mgMoyoELD98Bew6VBMH8dqoZjsk73L4hZ5nJb1a",
  "key18": "3rELTCat8uB4huasS1FjZmMHN41BLk5iZcmtYfpamU4DtfFJWx7PxfnTuQsSf5ELFFcLYbuQfERH6KnBy8Tzbzuq",
  "key19": "3xRk7D5QreDiy8ZaM2hKTYhNuoLjyPEiQyhz338PJow7LQt91DKhAPVwMCtty9QB8WhZSBwTkk8Rkwzpnr5BEhJX",
  "key20": "3PywbDUnQkNScKQpCovngdU6L81ME6ELGStisps5mu5rCvNUQTXTWUq7hVA9wEqyeEb2h6C156FtXCkVXRHaoDGv",
  "key21": "47uktY5m7SZnvnZLryMp8wXGZp7cvwA3pmzu4FKCEiGTNANDhWAcNghkUz9oF9Nzq24vHAV5mZA5vbKL271gvPzh",
  "key22": "25N7kbPbCtmdKxdXCCywYgdduvFpnuTaWvjz4DqxmNkYRj1axHuFxauET3Wo4Ls7kUM5oxdowQ69gUTKz17YgTa5",
  "key23": "27jLKjgaLK7U1rbzLtZ1ywS1yJmjMQLi8u2oF7G2dCARszXebvy4jDuGDbUDVCz7beKTuZK76sQy126BsLme4mdt",
  "key24": "65VkFra9AB7hCaD4FainoEPmB7w8uwxneojRFf8Wyg7WgfcRQRFvRdKvHEnzovzotZg1bTyo1kSuGoo5QQ8gMGVr",
  "key25": "2EAh1ZC1JPQinxUb2siJRRJsjYcqJVdHJSGt1uJgQSwwFVQ1UNQXtyXjVJjkh3zXkRTrau73wE4Dxh7q47YLHyQ7"
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
