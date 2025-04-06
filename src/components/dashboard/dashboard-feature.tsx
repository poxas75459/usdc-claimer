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
    "eL2AFreXKPteQ617BtiJG9xsQZDbDUVmXYsLyB4gzZ6tTZYzHKBg4TW8vUFaB6zUSxjXHpG8R4S86aodMHZQ7eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UGDUd8Z43XEtfCDNeyMpfjU2n9UWX2P6r4qdhejVmxtJHUFT8fhTD7XoJ5h7mehxNEi4P5jrsLsKqU13NjDpqL",
  "key1": "2wfY3R5rtyBgHc6GamRTZXjJRWiuEZY6equqkikxwsXNG44xch9PaGp3CBMnxps29iKnKfdSntXMTD6yPSUWXcJi",
  "key2": "4wPu2PecaLbk6EZWNBbXVJGKWncFxztugEJ9BqJ4hK989iiTyUj47dpw1EqNHfuaLHW1twXRgeBkC8TXxCpH7ZTs",
  "key3": "4qBAwExv1YeFjTEpfx6ptWunbHLyYVXoRN2uP4oUu9qTWYmvZyCYmEHnn4M2vqnmmBEJoCPDmRJjomPSaYvunHbQ",
  "key4": "38urx4Y86VrNLdrwCpe1AfjTCqc2EiyWbbjiqYoRj89jJUWw8pQSxXkLBymgnps6pvMkX254ND3rNcJDYxCU1Asd",
  "key5": "2MiQMtpQB3MCgQs1eHtJnPg5Xizcym98PXULE6KzKceY4n3rQzdnagaiUqDvZVjuw8sRY8N3Lpr1oh8ed5297DUn",
  "key6": "Tt84dCVbJ64CrhNNhpvEFHVNdaiConD7T52Zbo1NAcuccGmcNqhfwutrxrcGMayzyg2CTgMNbkrcL1kD5qCM38E",
  "key7": "5sE2zCkDPm5pyxuoC2SDXWkvVo2mAF6wHczhagpU19LmWkDRjAnzu5CAWNQ41ogWK64SsvyzzgfBiFjAzikznuDw",
  "key8": "2Hw9nzACYRHQN6f4DZKrUiXUiq8GWgsfQBeDinNi4MxS5PaJme9PgzDAquR4RMc36F2mHoC7FUNvsq3XhqSYhZ75",
  "key9": "2epNs5QfPi5BPaXFejYQe9s15rDDn131ZaWLriwcNdtzZMZM2uvzEVSbmDCZeRstE6JXRj4CvPkJaR5bHwQLN4LX",
  "key10": "4737KiDYGqSkaEHPjveFnzNBjfwvYtZ5Xijbqq1CSVDXzbVeFmMbgtPyabJdavpS2RXtPCA6mhrQMq7rdj9fg8KL",
  "key11": "5UKyuS2kgDAjrMP3ZEnS7VmujTgKHUSoysmP9CiBLbUUQjSSN9PmxvPRL4CxYrwRuBfJdJRbuhH4cmApPHxrP5uw",
  "key12": "2diReqyeuj6d1osBvZYidd9Kk1sdbobvPz1aTKpW4BhGHTjztdJ6gt9Cp3qawcBLE6Rz8U4qxnuzotwk9a9SzzK",
  "key13": "ariGzzkytNGk87pjKsBSXTP4ks8onBuByvuFSwu1gywsbBFG8ct3imcQC3XzJA5o6auZ1obJYSxFWN11fkvsQ7y",
  "key14": "64nv8U3tXW9gP2TtD9vVcZnBbRyTv74zq4qzFRxGVPScxkkTrTbs4AANzX2mRkmzwVJVJW6p7gAgXaSq7DYM2BaP",
  "key15": "4sJqzokDGmvLaaa9zhC6qpeuMEih422VbyMicPyztnC9JpST8YN1z1TcrvEMzGKnxXXHAq2bKXS5npJAd56HGrwD",
  "key16": "4QGeBdsmi2FXfP9WVGXmdQ9tHa251z9RRZuucpBD7Yv7RXf8MzigiQ9WuiqtKMANzECRjLespxru783quTZBdXQM",
  "key17": "GEC4h2YxZW7hXoaKvwGMsce93zEmBAjAiqBAhyH2p16GZmMPPrkJRi1EfuwBDH8V7AHWf5HAHN8pcXTgt9CoJiP",
  "key18": "3w98QRMxg4KLfVQjAZ1QNrBsBcJ5g4GcdZ2M5M5Y9V18QvB5GZP66JMjFwkVRzALgEWjuFdxSPM62rPDq9GhLfXh",
  "key19": "5zb2T98cfeDu6cduDixvRN9ixNEAM5Y9Nb9LNcjq68ti4kg8KktUVyPNNd5xQ5H921wFymvtPiGbaX1mmPWaKE6K",
  "key20": "2nZTDzRy65txwZUctZhboCxJ19wked6jAT87T49M6dqBojuDZb4iQt1EXJXwVQYUdNKbsewZBcGvxHzKt3sTZeKN",
  "key21": "55Eyy9r3KTmYHCCpc689U8eC8rsGMZKZSNJn8mm3JCaMiz9Mec39zBjt19cjX7z1xz28qbw13BAsPZwV5icA21bo",
  "key22": "nMQjEzwwAhexS9tUeu78MpoMrQ6s6s8VJMZ7pUEnwEVihk3CSPHAte92jFkYSwkVU2Ztdes5rC4mHJzAZnyU3M4",
  "key23": "3duHvCoW4wJHLfEHd4Huj1Fu8E3aEHqmv36W7eCVCZHhNsV474TFaaCbbCa6agxFSb9pVUiRkNgJNZNYU7Jrz9cG",
  "key24": "qEVZahpruvrkULToneEy6rasMvYi3XRN56kV7TuuCs6xQYEwgDu23XjXiFaw6G8GqGjXkxAw7yf5Mt5TvqQhtzH",
  "key25": "iuF7qVYUtGN9hYPCrUk8KSy7YqoWp1DWKktDGGkMFf6JtNevdyULopmu5nfD7kpEX5mBsFwcZg7mZL3boQTjHrD",
  "key26": "2T2WyAR7qSDBqr8EKPcEiLSa2zdkSoAuVevtQUERkQbNaNyAZRSauxSg6VHfeLZmZYYXSRHjEn1xA6h7nrxtBaZu",
  "key27": "2TAoJx22Geccpn5JfzauN3WiTYcNjJGHbZAXwWBxxc71oHgpc8jrEEKiRJcEu4feCrV6o6jUDyDgPWz5VYzAyTqY",
  "key28": "vxDyhpuhHoSwssQevDVw3s3ox4DhNFibfP7XPt7FbTUuCwAZP9zxNCyGR5hVzDVLhPWN5oNZGPGqKYs5qBVQgod",
  "key29": "2NQJKkMhNSuEeSknsCfYXHQ5DtZdbxPWEWJg6Y5ctAjew2zWKRxgnwHPSKwGd9p7GRjjFxGW2eyLttJd9V3gjDbq"
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
