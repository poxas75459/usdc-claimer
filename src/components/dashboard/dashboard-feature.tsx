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
    "4ykaWiHzBg1fZsbR2kSfy1RP6XKYJEF2VknVfQCvx2Y1tjF1Y66qp3drdAjoi1jjFMp12hLfA8GaxqDV1tnNywVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9KZ8YDcrJw7Ud136dcQF1dBSfvpc9HeNQ2VDvaFotRYDRzRcjjhRBHxhyh6vCVM8ewAnU2sRijbY8wodvaUMBh",
  "key1": "5xmJXPsZsvfqCy4m7ggGHRGLR8gsmHzPJ1mMrDVkEVGHJ2WzcB3CzdoJM4ySXXR46E4SBxh1Te7NCiex8vbWmb6K",
  "key2": "5mFq398gPJLD7MYnZJBX1yXFUfk3rurnUPeRDEe3qmytjUNjQ7pZCzKc2ac1ScLyHeAsjeKgTaqbmovhVzejjmxB",
  "key3": "5xNFurLf9nPQpcPWKNCLKqdziUeAdYvpPLS3qPtvPMKkhKG6dYNyeGEbL1euVH5ZUxz3CiJ9ctYQELs3hGVTe69v",
  "key4": "3QyTrdmCDhvDYb6miXMwYyFmQyqH6j6gESTKqnM1bvPvwanK9JnXaEcNADom7bQZ2AZfJLL5f8p6KhbE66aMYku6",
  "key5": "2tciYSahti1XWgt95Vu6YsEAhQc98Nq9RAazX3LMyg2Tu5VNi4ZGHqwXD9re5kNb5iaAyyWNgigf46A8PZ99HXiZ",
  "key6": "5gosiCjZjnmJYZ4GBQc7pHCfZvE97DF123SqHMS3WnbTEuv3qrBXHVuayj3kGShUk7r8ZoAVhTZqQoE3jQFrULfV",
  "key7": "2MCbDsyHQHTMf8VnZX4tZix7FyKbwEPRXdtwDXn9F9YmAsuwrYesaTK6G8YWGsPimp8TKeHdKWqgVRS4jXAF4teZ",
  "key8": "67iDtvQQZ6wymU3gdntdCYZHgPATQ1cPekfV1DYKoRxik2tMycdrHKpgAw3WAQiqvbukgRrH43bG6BTd3rbNDX27",
  "key9": "3mpDaGqNBN9bKGTL4HTiNgzyHo8a6FnAHTaocq2hp7571QKN44HAr6cyBKFzyA5JP8f9UDCgoJBfzX379P62poMg",
  "key10": "2YMDVYXAkFn66Ci1CBmHbGrC4Sv4MRAEwPDYg3sMph5sd5h2gLPtjMEHUbhQxrebxVEefU7ikAHEGkPghfAhf4Le",
  "key11": "3zM9Swq4ZDDTkSzqSZek35mv6ZxYSj5vYFqr2WVWkQKPE3er2JHuEmMSFgLMLXNFPQoHF1DF5jEqJ2Pi3E7S5bXC",
  "key12": "5v3cZe8a9pSfiDmtEAKJQZZSMVmjCh4xgEnivyXuh3bQ5eH2QGur17PBhhUD6tj6E324mmUpSBZt6VmhdEdCAxQb",
  "key13": "3qY41Ds8e36M3Wii17VAS63b1Ybsuge9qxkGVZqWx24fSsvZU7UENFYXDvruJXUL7WgkMaD8JxpXbD9qvPJsUxaK",
  "key14": "4vymhT4mhcuMowjg6vbEBngsHmKQmhMXDvazqWKMF817caGH6UGF2DFceT1FienNVcpJBcorNHDsGB6dFxbUVEKv",
  "key15": "2uKMMJfjDcJuDjA8GANJZRqt2vhQ4tWpnZ3UwWSY5hLR2q4PukeAVq8wm9EmrHUuhvzqgsowLt7ZX7JVMncMt5Nh",
  "key16": "5CVmWY6EK5oCovZdR16sMsdc6ZptLEK7TBuizQ6KLZxS29cDAyuYpXvR78jVis2vrAUyAtYpya93U4Ed4cjSZEp3",
  "key17": "6St75i8z4JXP7Fzp1pU3MvaNCzUtMt4Eg4yk4j75MWEPT65CQR2tMRJmX4Yps15YPXnUoJJWMSex11VkC3GNKGX",
  "key18": "5NCZ1TfuM4QeU52KU2e1GaezmGod5aBTxzf6gdYYXFzXjyzFVyPJDGDdzyT1MmA3HYQqR96AsuzDdNGwRpqCTbhd",
  "key19": "5EBbun95Y2HLU9YMYCVQPaFrMwi1ERsdkkV9SnRLqSCcEqJMzDtjdsvnioJnXAqfU59GPB2aU9aezFgPjpU59DRm",
  "key20": "3as4p95uERz7UVqzbgeyiybJr5sRjWLAkq115bXG1RnNez3nimgJ1EN6Pm87bgziUNGmTinmxoLcXREbY2danYgw",
  "key21": "5SpZP3UXqmYJUSwRcBwGtSvGa98PkXhiFJe6zseNEi2wNhGr1UuAUKUPifGpqWLzyhFEPpHYHETeLXEESRPD6vkG",
  "key22": "3gpcWipEz96Fmn46Yoc9d5jYKrD3sRx1hNLy7qV9motboj9WtY5exu3AZG8xaYyZgaWrNEikYthN5VTTfHLyeFCC",
  "key23": "yi72kfekjZ7aFYiZfeWC5F7ufRukPkpB3VfPQYmqo9kpj59mxTZsE9zsY98UPUmetw4qwU8vZHbune9uTb5vz5X",
  "key24": "ccz6uWpb8XVzNECo8vnj9MG2kSMY43d3BghwmezQUTGohrk75PfRrWwVEVkyw3oZdEaKjhx4Bk7EZnfCe5yZLxm",
  "key25": "e6sKaqieukh8GoEvDLkLCdFobrNXviYyQYKtMMnDTqvTrD7unzrZ9DfwELo3UfMgmscuse3TYxbcUNDFa7pRu5F",
  "key26": "2LNC4WKs8RjWvn6ekKw5zEjJsCGWad2dSn3NQpCA8bbriRE4RmD9hR65Qo6UMnVH2KRJKhKwD25fpKSPyEjucHw4",
  "key27": "67VVtsfmRLCpU8XyQCsssbyiSHuayFHr35oWtkXoVcgvgtSTq1S9p9DHALYCcuUpMRapEuKJm58gctdRwqTyktEo",
  "key28": "4Qft6w3mNUdBimryY7zdpHDy9z6k4vcTJkYRUSvqNSEL7QRbnAtQtppNk8x4jTanYh2GJRC7G35eM14vzfsUKBWb",
  "key29": "613oQ9WdQ5QHBE84tnfQtcQRa2tCWpHmBwSikfY2iRVmiHEGCAQWSpv4rVVxQhXFKuH5LR4h6MZ92BMcoLe9SZvc",
  "key30": "3rxdds8hdpy6Anu4KuRrFFM8MgZnhZuhKqBKFro66kmp9xuJfFvk8sPJF8PiXH9FCARLdN4BtxuQxYubDDMTaiX5",
  "key31": "4VZack8RnfykKyEXnjwsovTUo4Cz3ukqJ3msbkcbijXn9H17UJrwq2Cp447oiiPftgZsVMsYSoxtj9uqNeEQNRaH",
  "key32": "3fKyi2VQv8GntaxNEUu85QHosFJa6qWQ3bM8VJrbby4EN8tKPwW647TRtc6TiZ5922h9anS1a4N1xU2Yge7MGNMm",
  "key33": "5hZ9XFNCpapz6bbbnDa3u2Y8Wo8jgd24JnfoWqz9gmLyGUP1NuGBTee79WDRf5hT97ARvaum8LDtWm4aS81EFis4",
  "key34": "5CpcVnUtAHNCxQcjJT5awZ1d3qSPANPi79LtGp8o2qtx9cqA627JqPHQWQBeueZwF6jBorx61ruoP8yzB3k46dNZ",
  "key35": "5h7VGk1dUJNxDxJrw53EWvT2kVR12Uz1CxQ5JvtPnzeKq51SwV5JztogAW4R52ptUG4jVfm4sov7Dm6D47svTrxG",
  "key36": "5qC9uQTZZwC1L7sqXognxNraeVqHEH19H4fon182wnNYceH7Z4ay5ADv8kKRDeCJRbtG1RBZLj9Q79tR9GHZFLeN",
  "key37": "2jXC1bMxGd1knNzLd8GDZs4Mf615VDg3ZVn9VhdftZU3XpGfVvsEQ2ihgGucKP9qQZsWHHXUHodcfZrpskT6CohZ",
  "key38": "RN6BKwsiEoPZYiwP3HrtNwZfG4GLZu1uHBjHsrUQAFqMG7EnBtTVxKytQJ97CQcTAfZWsiCW4ErZP91TeDvoUPH",
  "key39": "4KHmCqRCwFuj39wMvg1BKUm8nG9R7EhqT6cRZNGXYmvZ1agXKV6dGn7aACQ5iQNeqrPMdJd6Fe2mww6YKe8xa8Kj",
  "key40": "3e1dzk48CE8wi8ETpMxk3YtVdHrQE8u1RJjKw9Vr39zRSWvPrukjnDBAqjRiRRV7vKQdWLDX4eBpPbSYKZVX1c8B",
  "key41": "5Q43UtZgwN2S4crRudcdSYPUJabnjg1pgYgRcDekas8dMZd4owPYMCuBDaMZZtypw9VZbmRcBJvCtQ9J43UrvLNd",
  "key42": "z8sy9VH2z4iAxDeeNWQNXT7mpz8znj8NPeLgi3YPTk3oartU3KoaDoaYJ2aKpHbjX8xLYTUU3nEYSxZwz85DgwM",
  "key43": "2VkcCn7BZqFGbvsKx3TTDHxJqzMB41q7yFAfLqw24Tv4Xw3uTvPs3wqZTFrJxFsZhACVHTZg6FXgs7RFcDgk1jcY",
  "key44": "5tJCamfgczd4DHgcexYDSrQg7GvdrDLcbHyUKNqi3ztCR7YzkzfrmasZcf2tvd2FERmUo7FaGoqT4o1ABG2mq3oV",
  "key45": "5FfV4Uwug5MJEYFJEB94z8iy4WNvBFkjF9sH1jdrmJXxUVFvx25Le7fUQTaqU7tXqgnSzkSCgQ8cNuAYMhMbJw5m",
  "key46": "2ZdDW4yf9ZzECJ7heTU96ZWieQLUViQZg2grzLGQWkGR4knLakaQXyu7wsm4ybHdb656ufCo1LTjr4pM5vcaYs4w",
  "key47": "2xAbbH1QtENfYK5tnuLx4UNV8zLziHxjvpvBb2BWdUHbY5qiFEzf45pUfFprNKyAbiY5Yh3vVjzaQ1Xv64ZK2apy"
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
