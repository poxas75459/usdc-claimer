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
    "47zasPyDkFoHUBh6Ah7ABTT91Ycjs9yc8qCpN5aVAsboTQM94NS8NkxkVg5jNbB8JSe2bcuXvHJbCLVxT8FRvcU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cF1hhdAyMJzR8sZMURQybjQ86daaP5gnCmmYWa48og1TCQn6yF3apgYHkGk8L5uZGERJXGP5aFd5ZT5hDFLDsR5",
  "key1": "3fS4FyFdgiQ3RJ1c16cSmNX9BCRSjujqiw1akkRMQZKpzaQZawJ5gS3XF7TwxbUnARDnUXhecHcvnEzJsQbd3fNB",
  "key2": "3pzqNobbei75Wp5Ewi24SYfm1kuGkD225ziwfDJbfNUo4AYRuqYMokJH42j7KqMUG3Lqpkx98vnWBc6enbGuz5U2",
  "key3": "ywzdEzkajfUUWMCpUfefcwmdu2tNNZKL6igziruQdC7MD8VDMxQ43cLoKv1pYy1GfpvRx17pHF7uYSt84Ss6VuT",
  "key4": "31pnFNxopLMJ42Mp3iaix3pSUSf4S36QtjPpdUnzhP6559SstkCmGFt4VTx8SHza1MMGuEJEA3KMG6M3mqL94mkA",
  "key5": "4VeXKSuak6MUWW52fp5R9juwbki3Jo1Rifpy9sF17p9skFpajMUjjfkYFnv1uQN431nAUBgKDXPz4wvLPcLJZ6kE",
  "key6": "4Y1kP7BRwchuW81Kb8B6wyuCJLgo7jNfUVaNibJtDEoY6RvoS9y7vdmJmiBY3PH4cRVJ3Zhgz3A3veqdX1AcYtwC",
  "key7": "uM1Ma79fApNmuNov2yb2zbQc88N4CeBuAM4cPMjKTP86yDcHnZ4RRZ6gn3TpdhrzUMTR8CqcQGMsDxVPumfsFzQ",
  "key8": "2BKnk8cHzh1g4UUKUasMtG1MZJK9ycArywPWJuHvbckbDJQbeZS1VAdwkGQJjwnpwktF58WSMzjbSxFA7zwZRrLy",
  "key9": "R59bbrEqY9fAdtN82ZhV5WgQrGN4Zo48bkMZ5xhvtPgBV1AviAcL61KXxMobf7QGRcSSzvDa5sYHzPkLB9Ruh9E",
  "key10": "33xe2L5r1jcuVwgqvdoqHsbggPcDX6kzFFGn57ZCAx7fPbfVszZVf3hdVE7sWiV3k7cTwXZ2TKUaBBLw4Z9xPtyS",
  "key11": "5FTywRHCbdBYaNYaSzMyXvn8DheYuHXAcPZwYFUsNfSXECnQykxyKrDCKmCxPBtzPbtfQHvh5V3nBSVZNYdAQnBt",
  "key12": "23BTZRtNR8HoaUErWqVt3SRkQ2ZEj7PpThoeoSJeQtqZWr1zxjMneYe11fuMsJo7UrmgNwTmqmnHJjuCggN4VJKb",
  "key13": "4YXQUMKfGyeD1Q5VsRdLihzx2VuvPRQHaDjdyTMvo3efVS7DgpA8D7oquGCaaQCGBf89hJ3My5iMqhEReccFHJhH",
  "key14": "5X3g2q4PV5K4xmWEHFuBAESjS17GRoADULg1pGSyGgR6D8BafMWgdF152Nx3sw3Q2P3axbGrvrY7RcCx4jn9GhpD",
  "key15": "4yQjJm7w9j7QZiXwMzRVX8einv4rmjycMB4mGDjmq5wa2SRQr8VHvF3pcA4WaaW8kUdK4RY93ZNQWnsQn3yVJs9T",
  "key16": "2YpDeB6RbvkkXk34ncgHsMaAaQ4tj2rGYW2aDiNb4R133xq3ku8H2omabFYDkCWeu7PcD9XWWewdkn3JeCMqEDH3",
  "key17": "3PAbBFugoSbAWcZzNoe1nfzYa114jeGX8C9JSfUuCgP34Xg5aGCQf9EjeGwSNpYpXXUyAA3zrakvqGVTeqJojSxb",
  "key18": "Fc6ywGWJdLfG8bLGTQ87FuTsdvNyfgp934iiuVHgHUbm4WCea5TijLmrtw34KR3fcNKmFrUnkhfGsLk9BiK91nD",
  "key19": "5mfv8Lgc79mr141dugtXvtyc5k9YuYCG4MvoKwxW8MBQR16eXtXakrvGfnQxFHwA5jrqEEzF9n9KJN22dbeaomNj",
  "key20": "4QpVhWgVYUXe3EWudg65uXiTp61cRwDakGEPk2edcwea3JeihJrZHVE1zkSNELdgN3tdokNLK2XNnaSZ5WFJ8VCE",
  "key21": "29e8pjjh1FouEk98ZEh9RXUhLMhuA7zJi1mrf7NEqYjFdhzx8tJPvwTcmJrLnCda5BzkhgyKdZtRVd1Duh7BjD9D",
  "key22": "39TkiSFYHQrbf1TyAGQPBx4iBEEJ6maFWP3EQ5Zp1dch8Sz9UZWFdSLahCrjL4dH284jsDiRccnLrf2564bfDYxo",
  "key23": "3uutTYNoJR4UfbQq2CT3AWNwUJ8CVwzx1zHSeXPgpsweARucmZDJYTrKV398fXbQ64MoGrTdXLrfHT4SJFQhc9LM",
  "key24": "5ykLp82hU9Bi2zHw1A3hwJ5qNQLv5iR74PRe7ftsoJh6qbbTJa2Sv7CZcgSHtxvvk6qaTTZmkWzBPgg8y5U5Xj7S",
  "key25": "3Rp6WRHFfvzrm9gmFnwJczxRLgnatKiR2wpcK5BKqcZ3nZSFiQcQSEK64ma3M1GU6swFX5HSHex1BpyWMK2rDBXp",
  "key26": "4LYHayZ91zPhvc6skgpZdUfSshrbSEb1QoXyamnmR7fc8oKdoczbPop7YR9bu2wGqpC4tZ2cZ3UPfZvrEBZWpnNh"
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
