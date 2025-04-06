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
    "2xsJR1S5ti6kd4qS5VckE2qTjCLXcJa3PXoWMViNNmwPfQCzSMpGBDud8KE3ZpbAoE5YvJ6o9YZsFvLpGujXvfiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyMmF1HwijUh8Ecp4eZQ2hCTuYNZF9YYKaZ8wFoBJ9V64EcQF7pEUwf7C6ztTFUWA3H5648DRkkd5J3smeVKAg4",
  "key1": "2GkU1t9qHuSBTSUHV7Zh8kurn4Giha3uNQQZwsnkYi5EhmSdiNot5dgfF9P3DmCpcPpqVL88D9u7ZqGtD3AgNo5M",
  "key2": "35gk138RdVVRTjSTi2MiX65zNnGkRSMmv42MwSuGLyxGKUzHFRNFusj2ymv8EQSVuzCuvrVcEcrZs8sKRY2L7Ydx",
  "key3": "3jua42UAj9CCceN9fkrbjmEWE2YdEm5u23w6yyqZo51LBndXw3oPwwuupD3uXYWbM6Uged5bpPAmVMoopwcFqSXA",
  "key4": "LrE7deJZFPr31UnN2EbUgrrRBm8BWsTgkWa2bJUExEcGWrhgmsbCqMUdAjT3QgNui3hjDcfhLaXiJDpr2APZknz",
  "key5": "3g77w7XVnWtdecV5xbyg5wtonHs3wRb3JJkBv82ebTuEWhFnJTzZEGr9EXJmxLRDHGX9FTbz6Nt5F9mKV4qvWXqo",
  "key6": "5LQreXbJnTCLG24qwsdHtHZHi1MtxZbD7mTyh6du8LNYd7LpXLGhG5DKNocSdgZkdjus3sehnq8uRh8Nxav5T77",
  "key7": "2MjHuAuAeeVXicEBnqm8AJJAPHYVnp69RDQU8oZ5mZEepWFtx6oaGrKrDfgP4G9gvZGSvFdGcuJwUXamTNpJxqQv",
  "key8": "41TEFUpZNunp5q6PMfPWSkH4eXEkQf4YqDh7KoN3najd3Jxm1aapEY8tBGRb6ynxHcAoP9jhR76XSpakh1WrDE2x",
  "key9": "4rwmEGpsdr4Rx5HiS6PcEhmAFpKXTs3jUJbCHpe3DaU5QMHEcpcawFqW4QNRB7VheC8oe4w6mMrM2mt7uM3pdgNc",
  "key10": "mUZ9QM5ME7GKMFePvsK3isPtCC9DbgwCFQGqU8cELhCGtPkddEaNco37s1yjktQ9f1H4rJS5NrNoBimqgW3DaFx",
  "key11": "5L2x7EKqhnfF6AqxbyitrfukwSCMVFxuPEAChsChvptYadEquK84impzwLhC8uE1KZbCW2qABwV46FpGzRSPRgQV",
  "key12": "5FYceHh5YHRxmRTxs35fgpkLMaMVzE1AfZao7UvBa4WfgCgjwpLo2x1EKPKbQnBxSZGbDZ2sySUhPZJ2peDbBbTK",
  "key13": "pLvpzPZ5T3t8DjKATbELnoq7ppnwnxNPYabZ5bkY277gXv6MNgkrBn86fAbRVe6H79XFdMwmgrd2auHM11WKtgE",
  "key14": "5988K5V5Mf6cdMLbyzfrGLknMXQQeuBkVZLFpxNZpdGEkPowK9THNtWjbdivBb2JRFYae1pTKz4Qkmd41C5XSzkQ",
  "key15": "58AoDaCecJ6qjfmLhv5Z8t85o9RE5TyjpUD8Ta4AcW9BcCkAzMXxpdUULvzdjwAE2UGGpHpGecLLBMuzaeAiDwdg",
  "key16": "mrgQ8CjYN66rJRUJJYj56evXnjsVyYPxUZAaESyJQGHL3dRSQHRD6BcHdzkaZVYDkoysqD5jMeo58RgJGrK25ae",
  "key17": "3oPycm8eeruQ8s7w21bUEqfwDgbXabE6i29QeM5KxGv7rwmiwVbgFgMEttAiobvscv6eUNnoWquUHtxaQcJLehPK",
  "key18": "4SAmeC8VXigGwzH4qpYHE63PysmKToX2GimGbLrHe1hAqWHH7Q1N9UtEhM7KiNC5QFsAYYDs4AosZDMVmQ6crhQX",
  "key19": "BNNZpBgrMuEUC6VV7tBeJjpV7CGXmAJUecfTcdMRzotCX2v5BNHHy27QFwTZtgF1NdfLsXVnXxPXdhD2dUqenQQ",
  "key20": "5KKtG1fut7nd6nShY6QmxE3oZs82NHJKXLJaDYTkqKgheE7QNiJbHcV73Jvn26LkRNKf2eN1Dwzhm52RT2v34Nd9",
  "key21": "29ciiWPufRtvGgvms9QT2EAu5nAuFZ2rN9dWE62tmDP5G9D9THWaUohk36eorg7Vq7TM4k93Vmkvp3Jy9qhGnRUZ",
  "key22": "3e6GEwUZ7kYCRkbznuY1cmDmuVad3CQhQJCaaRDNsWE7rzqck8dV8pxyBbGaKkLm9LxehE3zRuURvR1T79UzahAf",
  "key23": "4gtDmA9yVwAsDenz9z7Qw9EfWFdgG7RLF6WwWn5nt6ERgSPnoX6UPCdaWhALkXvdwaXfYVjGKTK7TUggxeoxmmuY",
  "key24": "Y4mfqdiihXLctSW82isAjU3CDVbK9XwDgogJ5wdmWgv7J2Nk7f8FjcRiSEyS2T5KnTku625Gj53z9wMukirszMp",
  "key25": "48Ut52XVypVeodmUhF3LtVRzRUy2WphSnXjLousqFjV4sEXS1XkAmfidN2W3iFJsQL8DJ9A59U92X48yWt6AdPqm",
  "key26": "39bv7pt27PVGVR1izthKbg8x9Wv44HprxE1nMjZ2Dw9V9DUQzQJbgwB9xWgvsFBMM5NhWLLNqM6unZEh5n1naHQ7",
  "key27": "Zv85fn6xkKUz1FdEeobqLr8uaRxyv5vhdujbVAwWYKXEx6XDgivB3bGP7ciSNzqrKmQpiy6kaoZHsn1bhzYcwds",
  "key28": "53iKw5oknXstZn74NWo9FiteTqsSmLJKuqdhk2K6pXFiCp3Dksz5k1GnjsA28KiP8K4hPaYrrzPjibPnwDxUiksC",
  "key29": "47WxXsomBUScRdDNPXgdLAcP1hi1BYgFFmztzXGbdVjbbWoTGJUUTCPztZ7eaSQU63RdFUnVwj3wAZH6mRmDD3jE",
  "key30": "4dujeRASFUaan7LAkfZBqdv5Lj6AtUatpjKARZR52gUY1NZkP5hGLNe3CZt9FBWMqp6Bx19RNTjkWUNR1u7zwukK",
  "key31": "31wgLFqFFnab1G6zrFTN84nwMc9uJN5veKkShtZ4XGBhMrsWrcLbSpYitjTExHwE791zZeUk479Joey2aSxTTZe5",
  "key32": "2BPw6wSSMTPrVzQE9PtgzmsLJtkT9JKdBj5wQquczN61LUyRf5kYjgHVU8aCg4FpuaqYQSvrGyPJVG63LKuqaVop",
  "key33": "TucwN8YBB4tGgByMUV8Q478SNWbp8SeU14bVUkZiWA3U3d9bgH6BqWsF2MaiPkmzvNYp561s6xX86G94dPeiyTB",
  "key34": "3MtDhD2xF7hLj2rFGMKycyE1gqdb17kK8eWdwqqEFxcxpSSyPaWCYSVR8EzsJMBFe2bmH9gdYKMLjWxJ1XMLwt4y",
  "key35": "64GCZPpk4g6iXabMe5d8JodVDYNywTMzXM8YP5jCca2respsvqjoztg1if1MUrjiPQ7aXpugdHfSkJ4SJtt4zqUD"
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
