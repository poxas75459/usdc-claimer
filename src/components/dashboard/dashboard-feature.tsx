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
    "27aaxmKKDFvKxom5qkTbXUZVvs3VCYfePTgL5v1g6y7SSCgFrtTwS81GBJF72d6LuErRkTMRDRzzKpyjoFT3yZud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8Q4zWr7bowTLZEVbmBxvfiFwHRCGAcogiwtEZYcTHrhWDF6oHBiFC2GU9ojWAk5R4bh6DUdSdGHE5GdJBZCdie",
  "key1": "3UaDNL2EhoxtSWr7U5PL6FbfMnTSqMHJk3wvrwzkaaRH1CPzpr1F7YMHdmYGWVThsyyNpGYtzw5Fs699hw3gTm1P",
  "key2": "3FHDib29Lgx1aRoqHkDEL3PaW3adDfsimLn7u6yLXA65k5wY9XUdWPY2S5nJGVcz3E5gCXEJuyqgq8ca6BxJk2k5",
  "key3": "2fK2EsGhmGYpsfiSaH5APnoWxpjBDwcDYVaX5FXQXqRiCPLLoig8kMbMD3BcDA4UfXymnrZNbm1NWtTRKWcW616o",
  "key4": "2SFT8HdaZhazeKKwQWiKYyp4STDWGgnFVTNC8B5txHqmQWYRMMiNeDPB2g2WHxCkSsbTqu8Jrq9VJ3LkSrpFYSGQ",
  "key5": "3mWCWM6ass1iQqTq2Kr7XnHAtVP1iHzEDxj4UMdDfVsML8F46ar5AWXNGwH1unxdyoVreqskyBntf3KEcSKusV88",
  "key6": "5HyZ2QN7rkXNuTmVVuNtDxb6xpBEJxk4yvXVctx9pt4oEe5VhGtY6siR2gKWFyPttvPU6416MsrjooY1yxk5GgBq",
  "key7": "5G12b6Ay1HWJWkk2vCs6yJn7qG7uk12da7Y1NWszmAotrDkUaKa8VD2vvBT5bdeEudUTzQWL97c7vqnYsSxxBVjt",
  "key8": "R5Hwht4nZRyeSwRvX4ha3V297DdimHamxDcosbbJcBtfKRvRtzdtTfQnCu7jTXh5drF7qQFwAhQz8CRi6qAnDvo",
  "key9": "3YzDzeAuBcTgREkvD9gNNcbK8TNLxHnvTA22rET1DT6C1ufFw59CFcZhB8WSnETdexZSFz6XfPd9KTYrZEjzBuVm",
  "key10": "7y7mNXSSfpVhykTRrjTf2WofXb6rPMpgyqmaGgTAWoVLumSCJC4SDvQTL5yCNrwXqcQPqJwN2DhGcoCsvZZPV4d",
  "key11": "acKTEce8QZUztmPbELwDenvTvFV36BzHSJLAcPJm9o7CWEgGwHxxA1hmMCpg2bjYW7GnxTQL8Kgm4ybEkLM65f9",
  "key12": "2ZuGmS1CBUEFRhC4ihuJmMYggdao1Q54eha2um1hdfEXjm6vpiR91PgtNZaQkqv1hoA9gETjuyYhWPZ2rf2jbcTp",
  "key13": "35cYZCy95QY126hkdCsVerggP5qYc39V85FhfjPFkBj2tWjJjGd9gN35ZGNEGwqt9rVsf3kGkadVf2AEjQ3UEUCF",
  "key14": "5xAPAUNU7gq1YVZx11igzJpSf2rBBqx6WfnYzfJLpeh9SDXyupMmG5xFHWDmVQLcovxqYaEL1X1HxjTmvaUA2Jc4",
  "key15": "275mSvauFFanysMwDfc4BjxxYUwD3T1i7Qb2qMbXgMteEBzN6QtimEBMSptY2BBcdboYpa9GbvbcVifHocdp3AWg",
  "key16": "4AVN71u6sVfqDYFeTV2FrJAmK8JQk1J82cnoeUzLTjzWvGvLRZ54TnJ9YjumgdMBio4LjDHCWKgNZx5bh5yFSqeP",
  "key17": "5WgvcrZHqve5HZtbeSsoJF1nUDGqZwTbLvDTK8LifecircYocwD21QSLaz8guTBRRBSmFefMfDr2E6Cd25tRwMta",
  "key18": "5jPZWWS6e5ZEyR3w3NFvQsfAcbeFuJZYLabnyaxxvXyaeudzsj5EoC3mT7cVL4EckvEEnssr71niHSXMAUmQTGJL",
  "key19": "3tY7r3qcgqstiLxjokVnfMb4Ek8q5XEd7V1LhimmYrCDjTC7DP4gAQCpBnmy9ks1x9puFgZ9EhHF19FHRLhQNFff",
  "key20": "3nvtuNg3JxxhLF3a12emXuf34rJDPgw9PL2mUnZPYrVtT6bdntA6HWpmuvdvjbJHbaZCa2EKH5v3aa9DHmnx3Baq",
  "key21": "3sWDVwinP8yTJUU3mkKpSTtkA7qys9rjQEez4QMmyRwJkKohQTgRY9mTh89xrEcfpTtZWWfQPYGm8aUeuPThBSsB",
  "key22": "4gRMdhZK3rWJe2N6EAVrKSJ8FYL2jabqGEkFyEfhy6E462JEk1bV6af5aFtd73HN6akhneQ1vELvWhPbo7T795fd",
  "key23": "4duffAWpiFCFCD5PsqiNyeS5ep9szKkHb4p3fAQdto5VBF5pi5j1B34h7uYiYTV4e4NCRPjsRX4ZeBVwo7ZzPNmu",
  "key24": "4G9LecHZeWAP4yGJW1yBDPcf24U1TRmv2EUeYwL7m5iG3aH6m8UPHKp3emLXEmDg3XAbJDp147vpfdGTXGgLred1",
  "key25": "4ru5EJ4uPzDrs6Aaef6aHYo5VG2SKecq6bbkT7p1JadzQjDrkbCbiGh5jRcwcqzSBnzN2jLW1CuTCBLFHaE6U83H",
  "key26": "61e8RUPEMiodU4EJJPPXLPouJj68wU9zsDcnbu3rMtPUChSQbaoouwa6dLxbBX8GDD9LoL56nprt7dKqoabNDK3c",
  "key27": "2BQEmhbQBva2Pg5puAA4Z5wenBTCgboEXN71cx1hZtQxqKJLJt9dHLQt187daA1QjSfotVzykh2JB3AScV8i9XvS",
  "key28": "22qv8q89CwT2MGkxGsRHKBciFd1kWP8WDx5d4VZGWn9H7muD87vBQUYQ5e2szQjEpba782SVyeQ6Xdb7cVyYT1EV",
  "key29": "qq95AKcBEuiyvbr6x4MALpsZAySSBWbCsEsufLCnnRgU56CYBzRSshiB4oXTyW93vBRHA6HX14Sxe1aQGRYq9rD",
  "key30": "XjgjBx5K6Dmv1AQjXiWv2BXrdrUkKoxd1L8vDESai6Kp4AQXj1m4cGqeAw7ipKa8zRTW2Vx1r9pQ6YmuZA7yutV",
  "key31": "3DYsxLnNXoReQYamA687wwvVvCAqybLwuuGd9SvTxkSg2jQH2pMVZTqm4WTt21NZez7nQvzaQt5DsspNjKEorYpX",
  "key32": "53X51AEeMaHN7VhAHXCjXJcsaJ95hph4U35kWbthK1ziJtNzVYvUSCTPaFAuf7Lt2y74wvNXynMTp3kdf7QvBJtu",
  "key33": "4yA1oQuQcES2gvLj6ZPnE5Gpi5PVdDzrMFpDfBAhAxbMXozpN8KhQ5Dt7ZovFi3JJELYQiABd5pC73j7LRnp8xEa",
  "key34": "fTYUFrfCkk33U4VRGBgTVBkkh9tYT6v6FvQLW21qgkGiE8BzNFZqSsCv9qpQTjknN7HBTATH26f8LhFyF89iFWX"
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
