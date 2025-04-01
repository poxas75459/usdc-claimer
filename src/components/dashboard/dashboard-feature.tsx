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
    "2EwcRw9s3TZNL6uTxyV3MWHD9feBw8rntzQcb5kVz5ak5UCiKmgJhyV18x9hxCtEJ4xRhUwpxCsqBw91qY4nCXhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47q7wJMcia7ktE8px79Rb6mYpS6QPusantvK893SZbYC2Y9fWpgNX2yopzdpQ1Mg1FLLxLRenSth2EtHNqCfhqNw",
  "key1": "3d3g6QgDCDU3EDQRmeNr5eVTWJkx2FCFUdE8CUzui6BpMSbXwKp2BWupYqSvYakKWgqmvkQSkGWX3Lt7heUxsiMS",
  "key2": "3Zk6oysx3kxwiCt4e5AEw4Y6QbYG4Sj5SGs2pYchCVohVu4fxv2NnznGvXk3WT25zRHBJ3tMvmgRm4c5e3yGQhdB",
  "key3": "4TTkZCfszaVxYNvYSS9WX5A9XAxFX9gYQa19KX1HjyZDkqAECjutUjs1UJNN4qdMcLyjiSg8Ska9MBfRregEvo5E",
  "key4": "368rTX85uCJarTAR8AQ7Ao9BhRyz8PZqaKE2UyeeknHZCyGeYTjJi3CVJTHTpqBZzrkcYefCLzqxEibisBYqR63s",
  "key5": "4U1oM5zxTtCmxseMpBYufAuZtb7kPvVCpRZt3bJPCq7xy61S1Fv8H1VJjYwCB4Kc5SQznojvTVPkTbr4Adx1ecb5",
  "key6": "46a2JCDTW5AuvtnYHek17QkdwxHTdfCn9Uyg9Cjb2zUpcQw4uRyauLFRJeGgU45EkuDvSpurtQEb1aWr8ixLw6wa",
  "key7": "2oTP7HawmfgdnyMHbu9pj1nSD38oDG8RQnhTqCcrRt11eZs6er7ZMpNTDw3QhmsqHA2vVkX17ugHa5BrmuTip6dU",
  "key8": "4uvfT576EwyfAcnydMEHUfa636jrbm1CTfHK8Y3SRQRbEHSg12sTvn4jexNdevHyjxbJ9cnmXH7x9Wt6LLFAyiDP",
  "key9": "KYeHUXPq8ZU84uwRSTFyFxEHC5gu5xdjmr5zp6v7ankk7PkZRQmuEvhfYe6J4c15j85EV4xxWJQxJwdZBYjRcpa",
  "key10": "4RUap9ugQ7qNZRP9JhVZvF1AkTrVYUv7CxVg7YRSxmXcadRDEnrTTJWf4CrawFWD9qViEoeTmNZuZ2LrWtNsYf8F",
  "key11": "2CT7U8NrhDd8cJPJUkuw66KWdER1ouvPedLPFHNyJ75ufJafmJdLG68js7sCSNcL8jmVXc9zZcG8XBoKUm5HhHCo",
  "key12": "3DyzqQ28gFJDeFJKyh4pG37aiv8oggBkpvg9sRfgfrVSWj5AicMGZ5ymQfY62AyKXStEoQMfLCxeWPYVo2TEknhi",
  "key13": "TNB28a5npYvYYQannkirB3XVcj4L6FR1ksFS7xrC5MWSE5b3VArsmPMp8fkbt7HYcJ4825tH3Zn7BuSdFZ7EYBo",
  "key14": "eGKTXbySmkhE8ZPyo7HJANB3q9C9c39ozS8vHHRit9DErrHYECnc1cnXFUp4C4ZkqVCkcSzdHPKYoTU4cew9JmX",
  "key15": "qCyrApqrnDxumHbTMCr2aD4eBnWEDAeVmAUu8fdZYyiyLTmHGXZsMi1BQy8Yox9SyWiiRUqezkzgYceBmyMXASf",
  "key16": "5XjauoR4qSQKJ9zPc8U5dsDwYjDNuio4dtF7yJq8eS5Bg4X9oFWUxTRNSkNg7JUaRoeSm5BxuNUBpWQeyQnaF2d5",
  "key17": "3zbNZhPf28esttY9V1PFAQEkvDfZba9PEqBg2PrxmAw5X4Khghta187FpsGXj7eEhs5SvdDxKgm3Ptbb9cMY8kGU",
  "key18": "4U8KY6am9psg2eALSSF3XBuZqHKU2RrLgqzSvYudsquVSnvPQUD6XLYi6YrjTL8171FcPzRveGhNkZW6xd3kkwMq",
  "key19": "2CSwLFhW5wAzvg6zsrJ88NaUJWRH9rnvwE7ZXwJKfUikbjai9X62RFMf3S1hC3GxwbtgTaypUxj1c7hUBj1ry9zB",
  "key20": "59vWDSLymAWcz7nPkMm3FkbGo9nyiKWXtU2W1vaifH3xC2xiVS6thhY8RWsoAzazKAMnTHjGjMFBcLygGbkVgddn",
  "key21": "36qrajFSmRcvi6KEA7fcNeGjMFkZSM3bTCCrGTR15Bg5fhGnxuU8CeVBkW7pomdCPEHmDJoGkm9TUAnxr2KvWX8Q",
  "key22": "3hBHbhQp1zWkRwXGCQPSe2axjfKgk6HkujH6hyvUUdq9Qhc93RZxbEYVNLEnwjFDorAWxgr74Fn6cDmferqrSymC",
  "key23": "2G7WjiisBrtHEEBQFpwJXaEURvvL8ZuNyWtXRnYCMFhacbpQSgLJSxK3uhr6MFuakg2nZvQnRyhXZnNLQo3YZXNC",
  "key24": "44DD6BQnotz2f7fqFCEMEKuKPys8hFA4heqL96tytRPE2RUk75J3JmaAY2aYqpPZ3MzH8MwzuLekJaQ2pXUCHjtm",
  "key25": "4VPU28YwgemvNff9sweTcmTAuFNjNera2XGLMYndDZev7Fjb4q7jt6pYWbnJE6fY5GhvnFvtgFmUPXu4fEprLHvy"
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
