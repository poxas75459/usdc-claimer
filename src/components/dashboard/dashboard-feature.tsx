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
    "4H5FWKh93McCHbcWGANwjutgmbNqimtQUnkmq311hk9Dh1cUvqkyyzVZH6SRqUC9Xo2xQpGCkk5wTjKXgD5sgJEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFPXTaBZWFKfad4Q3oCdpre51M575cBzeZpEB9pdoScjRtPFMGBmvcnHbtb11JwUhPGSiQPCAcRhvJzAEHeU9V8",
  "key1": "5T4S6rjQsnxVFP5gfCY92pS6MgNapF63LbKm2WE9U4PHGDFaJY6CRGfWPM1jXQnAp5foBKdKVkU1Bpsrx219gwLh",
  "key2": "CuJGpPNtAwY4DsSE4YbcA6h6xGdZZVTrpL5MNz7CnBmSMLiqfV5c5DVPG6yLr5ojMAn6t7jF7PLpmbiUZK86Rof",
  "key3": "5m7YzhUfFPahbeF7WvVkaopTq4m3UCnYXhS9a1JPXqvcaQ5TinDB5nyDWXwX9T9ptwWr2sP1SM9SHssU25bsn5FZ",
  "key4": "3eCmwWL6cpDo5uHHKbRHBnJb57q2gm91U4TuqU4XkqFbeswB2zCdt7aFNJfqUWitn8sB9Gg2xEmatE67Ft7CJta4",
  "key5": "f4dxsFu7nezkpyPaUNDrBQRpbPkBfREfka3wJfUcza874fg8rtsLdT9LapiVJfiqtm8pk4eyQxeeJ1pxbm57KXS",
  "key6": "pqx8Cf9vrVUyYqfcDKTj3uEk1Pqd11dGfg4pJBq2GqAScVdyH4cZzJropaaGg511qBC4Q5R3ZuVmqtidmFepYZz",
  "key7": "KhFLfL3QxN1Hw3xR4EZ4YQypfCV2Y3dGft6QpLqBdjth1PquLq7g3nbSBFbR9gQQdjhjgnnUZKdgTyYMKa7adES",
  "key8": "5Zxnf7SjSPW8ss42b3sAqxFYga6aDADeNppXjQZ7Wde7atJybXQpHkoNgsvxAccFmpkNQ5oRPqje7Ysrqr8K4ytY",
  "key9": "5mZbAcy6BtMRbaqj6RMD7rFvjMNzgZoCLFMJnZhs5PJiywdBcUbLrDmV7gVJMT3LiVxHumzCJcNsjAaDjGVrAjKy",
  "key10": "5sVmXCMBNy1d33UwQ78FNDC9oi5hKk5pTDPLJDmyGsgwy7NfX8cZKhffyU79nMTbbTCuWvuLW9jEHCPreZoZxtA9",
  "key11": "3ne2i2HKP4D3rtFbTj1BiJQFgk5jqwNExLer6zWHcMC2u75RqMg2kK89rQ2CuTNthGt9YtEwApvHxXCZ5iw95piM",
  "key12": "2HXEun5EJiTNRcBraVdjEDahMqguBKXE1o78M1VKxZKy6FoiVxwKpD57ZmPX7jnji5U6vuXsTfGgJ4FejHzjAr2j",
  "key13": "5ywDsnFoA2YEsavB1hzu9U6vFhpTYd8PLMWPtv1Dr5oHbjcJqCjfcTT8ikXMEeCpTKfDKN5DQiHCc9wHDDK8maLe",
  "key14": "4pE1nF7AKZf8bSHLpBCN6N2Ji7ZXJ28gBXdXLGvqU1ghsFzTznVzTJYhebQdfjCvQKuiSbsjZV6A1TDRSfVntYXM",
  "key15": "LkCgtJySXdgfbERAr7g8erCuXFbP8bgt3zymhrF4wLUi75tHJBhYpnJNbQYDdpZ5XSjrLXqvNh5zNA6vwbWXWt8",
  "key16": "v97vRbudDoZqQS5yZ2axgLQQeqqBq3XaTChkp5SSewiFvNnxv5pumi9yhVvYjF95JaVSMpaqP8vFHHAiVkcyKdU",
  "key17": "3HV6TU245YwHXPJAtiKr7SSHKzeRANrf8mudjVFmnwJKymZ8RkDc7wPqHeAht1QET8WvC8U8jYHW2MtDrzL1XzWa",
  "key18": "4EWjPVpdJMJ6u8wm4KDDpYtDby6G5hNCi9VP9GFmLPXZ5fyCCXvnt4NeAfsp8kBFnpY4PY8pLSAHpTGGKskYquAq",
  "key19": "4Gd53spHSvkh3pPx6jzYVLcqPG4AfPEf9KHW718WL2SxLJzkhebbv3nnVf9Rdb4FnrVG9awYucEasNShE2wsFDjV",
  "key20": "2oyeQ4vbwqZziX9wS2zZihZELbbVod2qzpJeLhb6To7uAPQ8XBFoYefJvuzBUEJzQj1tSZ4smxiGLg2FnovfktAz",
  "key21": "4MXoG2nevFijjtCD5SyZsxJQLhDfQd71J4z4GRdQWokX8AEpGXf5Bxf53YUXpZPH5eDusAA1JNo1AZ1a4FzcSrMX",
  "key22": "4DC2NH8AWiwLBFZgdmCpVVms6fhCDnpkYNseJn2hbUcFd9HoR3ACBgcJf4z2n5cDvczrNavwhG2hZvJKtB5wPGrG",
  "key23": "5pLTvkw6x9H7NpP6UMDyAT7DRmeMttNNuCbqhVBND7THMpdy2P44EsQ9wPK1vDbAQTMDtYf4D6a4iNJThHxYbvoD",
  "key24": "5Vt2pN41SP5YPWpjaDyRmr3RwLdJA5QiA7T5RCdLBRnFezNdNcJqVVeYJP8XJu62Hhn17kYeoA5sDs9bRF1RKaPS",
  "key25": "4KXsgdsVUw9iuW7tBZ9Rg2NsWqJTwHTCh6HXGmhKyvSmgTuGMLwutQgiwgKUrcwC7wmXKgpg9Sjjc3MaKSYBGSBc",
  "key26": "2qxDzTnVjVrKNQQHz3c32EonTme2hmxpenCp5bF4Xp6GaoxXVRJZAeAuqMQTqv1bd5xYnUTXd2aYPwPATwS7ku52",
  "key27": "3GZcW11GnMpHifqoRc7oifoMMD52wEt4YgV6HCSWPi1PxnptMk6UJQbaFXmSY15bAZnQDNXTPmd72GFHou13Xk5F",
  "key28": "2Suh8Mi8SKNGNP7MhAhdzJDd9GPfodwAWS5DtumLwkvkM64gb7AhSLQCVENdjgpgpfMZh45MkZYPnHKkBxtNJH4H"
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
