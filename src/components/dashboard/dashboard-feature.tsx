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
    "2fiZepZzqnfppiYk1bAPikAzC9o13inEHyerMzW2BF9jG5SDKjSHdodKpvznUiSzHm8MtoRKNVpQTFAw4dSKfXMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CHaMfmigWSGQj1ir4T6EC1bMUdbfsk9hXHyuNQ2gc8bXgSEMFoobrqyeMXiCctFqfaAXCRWpbtSNwURGsb8Pmr",
  "key1": "4tQwtC3e9ZZmB468Gk7RoFLRJkpzfrAHwHvMP7tgTWMFxN56UN7bufSnQFh9ej5S6A8MsaLfR2pmHcxdU84nVKNT",
  "key2": "GF8ypRPh5LFeB2VDYAGadZZvEU3FgjaZxqbWScegfCzeFbSMpZy4281zkB8heVvTXmykh5khcBqUWzrELiih7SP",
  "key3": "4TbaLNug841gb4Sj4eXCrfpdsVyj1NF1CJoxoQVA3AknnpKyHYMpt5ZWi9nbqGSy65xLYxp5WdMpwgqshntSJ3TQ",
  "key4": "5yCufys6KTjfK1Jy495shEc3f76k9ong94wmD6XWh4SK6rpw6DEpHaHUYLrjHxtCUkYREdoLSqn9dEUn1KGREfc4",
  "key5": "5WTZiSynvo4iK4UwMQsCwkJTspngR6LWVrsRme7RUMQHrhkGzWoGDP3mnS91nncSVhnEYx2zSJGPdyWBYCfRYusJ",
  "key6": "29Pi4LiFrvb7mPqEaLGbVuffVCg7BqKEVBTGpdiFNYck6hb9ProQmzK8xCUWJcQb6WsSRuFRRPYU92SakLTX3Nip",
  "key7": "33Z81tFzaBgKcV5dQGrpogp9Vo8gCYE5q8FgMa9NQWNULDdAJ8KkJZhmjDnyfPWVerRUk4yfMySTk7DCexMsh7rH",
  "key8": "556BVjV8Ec32S5h5CwQjzos9LamuNMSDzFLruEp8CPGvwRvmTNjcJBvLfdCWxmm5pzDCP9qG45wGTFCeEc2cs4dr",
  "key9": "4ffd6CLGmuTzykH6SZtB55rM3FrgK5hEkCSFVEx99aAmuCPv5SFL4zDzbrVxXbTVpY3VRnBfuEqN4Qmqtwovz3v2",
  "key10": "48zMaa82FFtLg1Wu5TXdRaRG9GiW8MzD3CwUxVM6Ef16w4yKvjyqPxV6u7FSdHRZRa4BSRJHfcVdxPeG48FDUXaY",
  "key11": "2VSm6HcoLrfTCpgw4kn7nUbTpRtCxieuGG6aQLayZM99jYkYLhtovi9x6zrtmin729H1N3sfFGPjdNvfoMQ8h1UE",
  "key12": "e4vX75eU8QuZbWzCLukG7nj8mfxaYGX68C3eC42z9mEMMUwU8GTsf4jQeyDg6AQrR6vPmv1abBdFBmxmziKocjZ",
  "key13": "37BvoDSYMPcNjcBc3LMBdDCpx61qKJ4o5ALUUNVUPn5ti6z9ARag4nvEsSYpRMRa692pgt4vB9BWAXovRRrrdhN8",
  "key14": "4Zm1Ut6vRhnoQcpsCF7fVufUW49myGFhf8dp38NAiKP4RSWDnSEkkk21kAWwbrYyDjpUJSZPHY8TnzDDJMR9154B",
  "key15": "2STVcHUAvkLb4QEhKDFvLF9tuYYATMXfRngAHo4f8RZVqLYQsTSezfpeSn38NzMFHe6RDYLdqG8YBwwrgAJU3uMT",
  "key16": "7pV16y6yBQRfEXgY4XckUEGbDJTuZgCSV4DnzphVCUux8AUvciP6W9hEne3g8znmxEDuG8b9AjneS732KgkchPD",
  "key17": "2jRgreEScMwWHFr5A6yf7XacKdPXismaKzejs44uiqGNd8hByfEFYR9PDFncu5Lc8cqWVxsspSTXTc5JrjQCZFL1",
  "key18": "45j1os9dqUUGqDBzs6d683Nz3ptnBBha2sTv3GQCbj9iABjfFHCfduDnhwUxPDGoaCCb5c3Asu38W9mAYSaTQQkU",
  "key19": "438N75bzqJp5LWxcFieTwgxes7HJFCdNxKFDyyW45dChXa4f4no13weVCCyPzz7AVmzZSNRbUoi7eK7jUD3U2uoS",
  "key20": "4epDVX8LoZapkHAZQLQsKGru39Emn7WQYtXL26czkh3hAZT6Zs7r6DK8Sr7q8BD2DktS4zf9vDCouuFVQ7AxsZin",
  "key21": "4udsEFYubVzug8KZ2Sas783e5v1mHmjfde6P19NjQQK6DWsA88sQeMaBxyg9Dc5V9b2W9B3JAFrpQ9qoYcByZLgn",
  "key22": "4hfdTeYnTWBxfYvX9gcDuMoHRZCdebTTK9H5SwS3KWkqSxQFZ2DxztqfycL1Bf9q7sQdyapxERNxSLUk6aiE5GEf",
  "key23": "52KffUy5FYeq22zFuTJ3Am6ZEm6pjFFhyBSKFGFhDfrBX1q9pAgKzWcFs7pYJQSnDuDHaUWWGCxvpYgMEt1Wost8",
  "key24": "3yr8TSmAPzCUcXbep591DEicoKKkTX8pa1uc7sZ3UXC3hbiAVn5pcarV5NsRifw2u2CfT2pscXDSh8DCsvbZGM9E",
  "key25": "PXX47RaZ7ebJcCE3WSYUZFMrVwWcHyC3wB5BZM3K6L6cUmpHUnoGJz2PbE3SQikVDuXYyQ8gpna7R2CiaRyrGUF",
  "key26": "4LNuqmz4BsYQaJhLHYwcKVuj8HhSiT5btVochUQ4f8agwyFUHoDDxJzpnVTJqGNeNm2PXmaHUKRoMk4hPNszxej4",
  "key27": "3srbVunvCy7i1mNzPATwmdcRfbkCUwrSEgFFUyBdJMTLwTgBhKGBPfLa3sRcqJ8QQQ2g6Bx7E1rrQsQtA2iirGrr",
  "key28": "348Y2EP4pat1b4GwH6f249pRiEoeT5AoJrTYkdGRWq2EhgR6Qt1mC5iSwHTN41KxGqHww8KyQoWX4CLwqPtV6Xga",
  "key29": "6SNquXbPzPDp4dsU2WmaTBXBoAKsFTYhrFKG8CJbHEpCycQB44ipNVACerjjpbNS3RmpidPdQDVkac35WJPceUJ",
  "key30": "3SexWwG13ukk3v3yPeoUfUgdR6VjLjx3suZVEFNBGgho4XtyAaLCs8CnwbpuBUwW4WTesA33fR31Gt9uzWXFbLCh",
  "key31": "2KGJtA5YTPseJCxd5RkRdKGLtppaoJUso9ydo9pb9YACXbg2H5fnH94WDs63sJnYfdgN5Vf8cTpAMHh61rHN141w",
  "key32": "5uSada4QfmzKcho7HwP2S4AA54NmKvqGvBr89yx7ZNU74iRsNSpX6Bz7X1t7vdZG24qvXPcCWynzpUspAJtKXh5F",
  "key33": "aZ5J44nkAHPDaQspSzzFwXZCuLim8MKYHB92LTBTxweBLo2GrK6ga54KmPT3ijP95ciR4QihajznrFJuCM2jGT3",
  "key34": "JVzdA54hVtsdMB35JxpZLrWYYa5C2J6gajT29wnSqYDnXNnw5MCPydNrwAP5BMcNzbXr5FTcEPLvHHNzoReZyEe",
  "key35": "HZfmwpDTEpsioTqeQx9Z4ojmaKQkn6EatJsbPcqi2HMNnmd3DWKVVgBYN1325gNG3pF9LyregKdP6gq2V5ioZ4z",
  "key36": "33pJ997H4tLSaA1wfRKunJZttcg7F1uvoawHZ7B68nRcKXRLqS3JYhQDsitAQSigPxWFHRSHJFoJPKKRvYtfjnTn",
  "key37": "2Ga8JLAPaL1mt8dBFYGqgoPbfVP7FMQ4z54SbZvKEvhLEYCJxPTjJkZQXDPU1Ep7LXtLdYqohG7mdjtdcF5NNoCJ",
  "key38": "5vHL8uSeFEmG8LjKrxhssWYAFy9mQb1RBj3CBuJM1dFxPH2oRUADDDXRoRCLu2uRUPqYZa3zc5zBZGsgh6Hu2hV4",
  "key39": "5TvDGrCLhNDwY2p9VPM2WvAPMXiytuQ3BeAimN76QT9s7DhMbvPxT6wgKX1LPXemVcr6iQMc5o8nWfwBajsNqgTW"
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
