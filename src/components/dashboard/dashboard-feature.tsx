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
    "kx9oZwSuBeecQMNdVqU14BJwxGZcZ4kfHqRDxDH9HBXko7DBJR8vTkBwSQjFbziEDyhCNyQH6jDhh5SjRoWQSHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAdCESCGmmXJv4RZxt5KYaX5YHGnHPwzoLQ3uKeja6K1MFKqLw4Jmzdc2usuCeAU8sqezVFTdajZKBMdG6TMEHH",
  "key1": "5WasE6pCCSCLY7x3iX5EdQsmNMeSj7gqya1dHjtsy4WrpjQ5AKGwFqbtqqVztMjnD76P6eBd5a2g77vgpx9cxLMF",
  "key2": "kJ2oXmwaYDYh3LqJToTd9siyRSabLYyge2Ekz1JRGEh71pJCjAv1bSaMXppneNs9wJfc2wgiMsTEtUnWLemuJR5",
  "key3": "4HwaU57N5rRVLju95vPf9Rj6TyyUJA4h7agH31W8yinRm6RpGYjmzpzVqGQN8KbToPWeisq2XAiU99Z84rwjaSwj",
  "key4": "4HxLVvZS5LTeb3yofNQJ8ctH8jTKCuA1QEgQYPbLMJU8aanki88SUxu2L8BidDeYFFNF8RvyUxGJerdxnfBFz2tJ",
  "key5": "g9ugJT3xLgVsB2AETwE5oabJHvCRwtPUxQnY8X3k6r2qypHarFkxj2vKbrCwTfBJSmcWTuijpMzPQRYJcQJF9tw",
  "key6": "ps25NLyTtpAF256XB7Qg7GsB1bbMteiT6VgV8ALreWSTFG5SP6Fw6ZNPVgVoLdqrC3Lj8metZnfKaBm6GMuVxhf",
  "key7": "5eZAoHaEWA8jxfPvXoHwCZycwnZt8z1myiegJG7XdPnJPdfYqG77QjyXxQssjS2eAKcncR5kxXRjU3sea59hjuuu",
  "key8": "5yLmLRK5rfqYijyu4FEC64ATD5oaGakEwQzhc8NtjYwvir7AC8u7Cj5NfBNPF6GZDSaxYo27Ub79VhomWzupW6Lq",
  "key9": "3cUvCHEmitqTvN5YzYN8RFvRQAWNptjub9UVgXy7NAyM25aciiLakZBTGxJUXehkjdenZVfua1TpsywmDCMdmojk",
  "key10": "4mH4neoK8tAdH7x1cmUtS3LSLzuPxqEAjArp7V2i841TP2ANKvkiEGdw9EP2vY6ppe1dAhF9fh17JSKV6HfHkUpa",
  "key11": "5pDLBJL1eHuD4nwHLL8QJH3SujeDncKAaw2q1gzE84D28Y2oRwmEVssgwMGyaktTByLPFz9mscWjCJwbKotzaQae",
  "key12": "5rrTeS3CprrsztfNc99Xv48qQrni2KDDwZGunkGw5LJeysQt6qeAhMXB1WtcQsGdCf6Hby4kx5KCmaHtxMJfg8uj",
  "key13": "5DeXGwCQEXCzowuZYRMwF8uuewZoh5rPq1atJNkBwp4A2Xy9mKzvAxHZBBsc5hC5KcEzM4MBUbQ8hsiKpFerCuG7",
  "key14": "2M6h5gTUc2BpsqoczfYZ8qx8RGCFjCb1kViLr4sgUGee3pqhjotY5AQdakr3bMm8iiYEsYLyPtd9FuPqgfBjCcbD",
  "key15": "4MvfivQt3kXPrbHKu8tKJ4gpmZBwxnbXsy3RQeppoKvF8SuTD9JCwph4QNQMrDehkj4QyHpcGYEUqGyHiPmTJQFL",
  "key16": "bwj3Z3KbR8MfLzZ8CDoPTCHLePYumRYop2zim4pLZuZRA4QB1ZqyVYaBKkLsiHrjWbzbSi7j1aM8qTWw9iSaz6r",
  "key17": "2NVszswgepa1TLgaebCLUVp7wZHERRiWPRJuJZmSHA5N5qhHALHo66wt4XNtX4pGEJMc1do6GgQEPRoN28TW3pYC",
  "key18": "4crKUtad6vdZwY6nhLBJ1RVBshiQgvGPLjA7VyK6HePCsw7qG9N5bRChLDCb7xG26oGHUM6q6w7S2yKQdfMKztNL",
  "key19": "2aDA7NWSfFfGpdFnaC48YiUqaakVGjZu8npJazpT1TYyCPA1qQo5QshALSDagTUZk6jzXrFjREQxdaRMyRYZXMdU",
  "key20": "8tezNDQU5VUsbxZRMDSB5McTnPWQZz8LQkrM1QuWnybjKXmg6asDi8rZshomG8oz25ucGihPN1UCoxnkTDTn7zt",
  "key21": "5rxeTvBmf1ZuAJxKYHBw53Ar4a8Jah95rTAr87Gk4gEmbRAEHvAaHjYh1wKPuRmzYxgGGWbkrQaxgWxDnQ4XCmic",
  "key22": "5MUfyHLjFCXUSYqycS4h25FJ4RQSDqx3Fgxo3CVz2Yhrf8Yqh9Mw6745Kf7yRQJwFc2wPuRKyv4LM1Ucu5ocQ5rK",
  "key23": "JtuJaAY2zcYXJNeFgpGs7zS4wZHtP77vBX1GmR2m1PdBtHDs3VawQdrptSbG7gFqkc8okbdqHN9g65ZdoakEbF3",
  "key24": "43g5RjaWsdQAk1DmEsGZrcGwEfrxtteMAJzQpjkXzVPA4cZffwfhFCSRFfcobH2kqfhSmP7gMjCV8tUtJ1CXAi5v",
  "key25": "5S9pvvjwcrmCzMPQ7F753jGic4M7Z25xNpqYSsCPxMQ9iR7RDobrSDgtjXWS79yUM1aE5RvMZF1ZSnfB1FsCAdHz",
  "key26": "CjEcM9mgudTuSYRNqcv2ry9EABHJJYApkG2NrmEFiRR3BfHybunAvBxXLsjCaFsCfY4EGA2DViYdP6S3Lwug5Wc",
  "key27": "GRtmFSidXxcFeS3x3mwMRLPDoBmu7nd3CUgXHJn6fLUTKmqPZBkPa5bweg64oksCzWddB8Wnf6RymFBQNTvRGXj",
  "key28": "27DTV4fKj4WyMEZnNfoPyZWX4GABqXAk4XnEQPY5sW8nNSt42NBLcDqfHKVFc6WimX6VVBrQb2qchSm4hedaXYCf",
  "key29": "2vZTy4waPFP1KPq3jLHS3frufmMgkngftJVYoV4WJz8Rube9BqMt5YtNSUMw511A5eQpo7DY74pA2RCHUjaPmt8e",
  "key30": "3N2YBU27KTbcZqKZ7v1d4inXDCykNfvGPxN9uZsvdoyhVVH7Y2JXavpmZs9BtcnmtQDs66bQf4mACLhogAwwKkjg"
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
