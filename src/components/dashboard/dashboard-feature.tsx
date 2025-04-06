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
    "4TjhXyMFGTKTWrZnGsKz52B4tpLzTZcSZmSnKnVpAaKfmuNDta9Yu7utn42GJRCHGGDzo5UgAkmZ95EZVZv6irDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YNvzazterPGiE1xnavu6Vwr9fiDCCQUtsY5fFkb12Y78BeTNfah3QKmzh973xTsoNb9Fvs9CUJbtU6rYydmeXa",
  "key1": "4xpwLPGxmnUYiwAyQL7tJmyL73rokCzRPhV4fzZg8Eex8YKDd44TW5Z3BTitk8zRcfpzABeZQNqqqxU8fwTCVTpk",
  "key2": "2jr2KJTn7y6QibVhAiQu4xVHuvpoFR8gy1xGbJa6S58uuewrhmXe9sZSXwNo92ABnDg3juJbkZEB6mgD86AWGrwq",
  "key3": "895x6PeqqJe93ZUcEajDW7PNCL6U1TrCrBKrkXHWHqUpwDjJGX5ZTvdGc1vnukzRVWeJQnYQnpiTyBWVyrXf7G6",
  "key4": "G3FRc6s866PugdCzo9EvBKzYbhFjUce3wLb5uCKqNwtR7ngogEFr5f86gjd1fALXr8PxRz4UACoz47Yo9DNnXp7",
  "key5": "3w2K7cB7bthNnL2NuRgZ9GiYUgzwCStBt2n3ajARv7ATRckWmvCLCGhi3GkyswQ1nwvTvewvsbB2fWXcaxZdAre5",
  "key6": "5ddnLiHoZWAKrNKwdEFGUPSNCtZNe7KzcaGXgCq64pMSsVs7cHKc3hirZ9phYaUgJGAi1MkDduT2pA49X5rd3AV3",
  "key7": "4PL2dM24e4r4Fb79KJNyFNGNw63YRnvwKD6imzDeypVnt1qDaKQpmHiJ9SuXPQFa3wrXYB7y26vp5hAhnQCxbsui",
  "key8": "3bcyWjNg5tBD1mQ1dtEJ6TUXtAAPm7wLxUGPxGCxWAuH79xSdhxNof7u8s9MWWeP3SJP8z4dJvwo1ZKKEYL94XXT",
  "key9": "3hfE7kFfYjcjgpkgh4LPVDEteZdw2ZrCeQoy3PuRjPYZ8tZRspE4S6b4BYRtcivCp7S2t5RHm4WzZfuht9iDedpQ",
  "key10": "Ls5c2viSFGJUqQd6EsNc5k85aKg4eK62Lk3jgqMpmSVFmmyw6PaSXYcgH5nczWvugYfx5kpeKqMVd48HSAaYrpT",
  "key11": "4aqcpZWUSZkjyQcmnAziJmqt1Lgm8Ry9Jbz5vh2sHqVbJibQc2eYwfR3UKEhnjzxzQ9WxP9sEwxmVQyXSvr9tDqF",
  "key12": "3u7yYzbDGwq6y7XimHFZEE3oPL5EiA7VHeXdKrjKSKou7E6C8nShcqmoduokhTS2r9W2nQ9CELX7eiHM2shba6e4",
  "key13": "mqy9hqyxkEcA5xr5scRRtG7CaEZoASRhdarYfmgTsuoreQFrATM1cY1gtcQMh54u9sjpNP9mVLrewZa321x1bhb",
  "key14": "3szSUoHL7kyLPt2kVXkgJsKBD2rtvdLCTvCwsAWVMdFhZidXwCpajakN65HikiGNRs4wahrGc3y96U16Lw7i41Zz",
  "key15": "5zoWCdwTgRKVXSATSnj73tRfGw5gRKPRiAXBUuNq1emqw2umTnVLwvnWtpKunrUfDkGz3vEyTQjC4s7CjV6Ekqus",
  "key16": "yxpz8csN7GqZtSVEdA9J8UomYhj5q6BysrwcPqN1YbsNrypHNHxsHguZ9VSnAqn5skwNJV3fd2sJeV599hZNo9f",
  "key17": "46a2rYEWUum8FYaQ8nw9RqhdDVmCVV9bWqRFETkLdX6UUHr7oVC2w4iZebBu4A6TQVYifKqNAimzMiUngHd4kBSR",
  "key18": "2S2H3HVXyA3D1rErC9rGkMTsiWTwHNQGPN9oib6Ux2ibpRHyGsBWUt89RsPEPPgqpnJDMk8JZn3AGdFFSs6hoX2u",
  "key19": "4aFbJC3fAEbzcvARHEDF25RiqtRUUT2n51FK5UsiykvTKx2vE356svVzih2Y8F2eonkJAFzeGwfU9gFyJyXixm4n",
  "key20": "4jFbukJ2hPyhXw7Fuca2NJLFKD5rxLSdkkbrgoGBCs7CYzKcSpdquaY8bmqx7kuuV6vdA3aZG5MomEahmEjrLZG5",
  "key21": "5rWKat28AcfLPE6uYZHASPfxnav1St3QmH8DVkyBD1hk3yGHyjK9hcdEko876XfU1cn1navptiTbikzDJ8XQz8ho",
  "key22": "4T8rAcBTCk3yDyFUJnryeGfrLbzEfQViRCXKxMnmntkrG3owzCMbXwfbvsNUajHjr1EoXupRxJVETyK92VpHv6Vi",
  "key23": "itoeK1vww1xDxB9tg67AKpAZk4Wm4ES9Cz45XVKGGXYXkJa5SZpFk4jxdH6hPJAx6SvDbjUVNQJnzzqhJfuwjPb",
  "key24": "GYUADjZ2jQjBWWv7fYvcq1cAfErUwjtEGJ1LutHBJBUiXmGwyH5fj48xcQBELmhbyhZDmR9h6TqZDKFji31HMZE",
  "key25": "5A6qC47fXCHrryAtpyEw4edC6TsseJ4sp88JS9cE2dQQb3iPUbUGttJabdp2E9A4sXLkvJuC4FiRs3782RUGjPUu",
  "key26": "48XV69eWarCDAVt3Trb9qeLL6PPNAeHg6XHQKuUGkVaLZzkHSgJ3aTEuFa9tfbVcuMu2PX1BCAPBdt2P3ENfeyb3",
  "key27": "8vzprar57sUfhbsaq3jZ3AwCJqfm1QMpB37tDhznLo2wwwybdQuaM3JeTeTQFyQq1bwKmf61W8Nwoqq97vfZezv",
  "key28": "2i7HNVbWUxHbT75RXNH38JaGTiFkSR24nLjUuercyEmUo5uM3N4jLaSLFB9vVfSk72XRve65rH4WLDkQxwU8NuUu",
  "key29": "2eFAE8rqZWVpWTXe1QVGxueopZP4Sk9713xKs3r2NM3tHPL1xcBVYBZxoKWj3MiqQSUMKSnpVjGw24ZZHLdacA8K",
  "key30": "3w8BbLuzovRD6ijvdJ3Pewp2r7BAHrCVhUqoD62eTje2wCTRnMxSeF3pFVVt2ek44cp1L3sMeRsCDxdyN9XSZkn8",
  "key31": "1zNAoz81Leo6uDRqrTNpCUFgjsWwWmAc5W9vhncrzb2vwpNBKDc56zgDDg8y8kxeT263rHdLk1pW23ZVXA57BR4",
  "key32": "5qpH5GZ4nBT6KdeFtK3tosm6E5UtuDx8VBGf5xqSctsFhWXaes2RcfMZcYmJU9jMQbdke29FPYfUkHLciB8JZ7Ss",
  "key33": "2jHeVaYJyUZTCgsfcWXmWqwedNhjuoBnyTcSG36No4H4xDcmz6Mo88Hi8w51b9AbwiEniAqyjw4YEPuPdo6MG3ww",
  "key34": "37JRbSKrbDAjWp996mNeHTtLDPApWSPM93AQVzk6LuavAxa8RqCqTAZDgRp1o6bd4sY5JcybwMF51YC4kmothMNi"
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
