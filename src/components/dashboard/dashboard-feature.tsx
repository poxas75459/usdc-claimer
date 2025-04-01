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
    "5fA23JvoWeXXJUBUprHTBezLawjWJKwvFmLT9Rf7jcC3NFVwJGKmEeKbPkcshvLBMLHDRJdikknToUnqBaQCNkoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFA4jhuBvF7Wm3Dr6uaj1szBxuZeTPHMRz77bcCZyZSHTWEwd5vemCmEWbsBdfXzotCZ76h5qzS6QdUwW9Pgj4c",
  "key1": "4xS2XzbujBiEn9uahnxnjfpmpNciED87vWGGL4Y9hKamsDTeWT3BxBsh1XYH2fbGpWntmWmBaNu37c4Y2TGLgeGC",
  "key2": "2SMpXCpssGKucfw71vsMxgqwWWin1xZfZT4HH4PMQ8CcmkwDch8MiEmV4nWmoPgPePkUm2TrVEbzwtEjn9UC4tgn",
  "key3": "4Amv8SR8WjxD6LERnc5SoUYTXETtYvCPTwuu6ZU8pV9GKBu8u8ZRc3GwtsSSW18VNQXap79TNW1e3VxuGiNYxcPi",
  "key4": "Tu7PUmWmRWWUsoNE8fdTJR4ipFdAaYDa3uNSZJvaZ26j94E84xupUXTK5Fhq2t6quZWshxaLBcG99V4whpB7Xm2",
  "key5": "3CDNo9YgYZZVGuYtxgr6oHAoekzcENqTimYRenG8A75ptezEmH5idpP2QvacozWURGezgQN9VjJ6G8MohsxZ4TKK",
  "key6": "535HK8ru9BXSUwrr1qBj3iUTxG9nNqfKDz1BATf5V1VNCeGnS51RBaRXJhXbTXUjGth6NMyMzYUREEUraiTDqJj7",
  "key7": "EaDvtqwoTQyPQuvFvDruYhQwpfYSh4xPorTf6bstYv39hK74QxCEgdAe4QciVEM9xtyd7U1YDjZUpo5YJ9BWLWE",
  "key8": "asNsnoPLSXEEvn3Ujc88Fc91poqNB7RAHjiKyuELoEaTZ7MrHcpTJFogFmGwRaogxBYDKRrkaBRJCZogGqBjAD7",
  "key9": "2g7xf2B1sUZGdpGrkzV1MWzNACfd8Lf3PGesVN6Bf4CUP3iuXmN2BaWXKmrqGYi1shLi8MpXuabmdjU3etcQ8Qjm",
  "key10": "5CESDWVEndJGq72EsSXvEwmS4sGn62b9xFt76hGtQkMEkPu2qd6WYpLgt4kHfqN6NBrDsXKthkHUv4dJEhysBr7m",
  "key11": "2iZLwUm14526BWSW7CMiHGsEyCGHrQmk4ujcpz5qaCWgjKGpTr2pyoiZbajLB6NYNZJEv31YfVYeZybdxb27DnPe",
  "key12": "6DTgTo1sAkCbYAcwpdsxTABg9jYDHjakbZmBnpp39nyx3fYmZKuVLmTUZDEKevEKeSqvPDFhKwFYgtTCFWicLB9",
  "key13": "REP56s588L8HMA1hQtS4BcrrzXzDvK13bUjBpvR3EzamsH1B2ZoeT9jvvNrNsVEuKe4cLbkkqwTtqSYSZkyHfCK",
  "key14": "5U5YEqqB3e7BSLnhLdgCSWm8PeBAMkUyNSvMyJGA24NwC3kHt7EAGzPnkhfiSB9KRARL1MZLEYeuWdriRhGHqNNa",
  "key15": "BMwyBVeLd96NcFUuG6xiQCE3QHoCbFzoRf1fEG1auWMbHPW6jvxrm889bMi2KBzNkSgKxkowM6jp6KUapPNxw4N",
  "key16": "4cmy2LeRzr1iAUQKqaEZaR2SUFVCXVxUJ3vuspdKRk4S4yfjvZDAjThyjyQ3kiciqdfpJuhMpBjPZ27efdREczPX",
  "key17": "43zKXTEXJ8SkgAYcuU62dLLAFTaSLARQ8wwJxJ8ejc3haEBLwqsm1CzoFwXBTgns8oMYq3Ynb8MYn8fpxxsihsjD",
  "key18": "67mBgQahhCHdfPpaaN3LqzE76Y8NjLkJmBnQbH5RNzws1YTHRUrkaxNcywzSTQ561dkESdDu66m4TSKfHAP11Bu8",
  "key19": "vYnTRmnMM2YMdcYBh4HvvDLaZ3tzBFFSbP3XVVN67cz58G1XLReMDLJURvEtvFupQmdHFBkSD2a2Uo1Mqrxxp7c",
  "key20": "32Xmpy9Ju9AU1xGCuZ6WtbpcFKLHzaCm9tzGtAEKJiYw8z1NANHQUhqoBShWaq8jr713NekTf1k36A95Dbk99GSz",
  "key21": "3BaiuQJNnu82pfX4KaeZ2PEzQVXrJmJSBzyYptEP3tgouyrrkYXrFvr72uKmtnH3zJA2MhQma1K8NQY8RN3CCwmt",
  "key22": "3FHK7dFXq6B4bUSNCWXWNg4xxcHrMDMix5DSFYrhGNJixRGg9HQeJAncxueVfXceBMamvNzWSDCDjdD8xJQysAFN",
  "key23": "53XC7nva4auSqrSZCVS7BASSHtE4R8KALeuXA6dsfC1yivDZmcRBDtogo7FudTNq1Yr2QqhYcGEKaJrh7tMsgx1b",
  "key24": "kpgVBNqbEdj3xHyQboMBapDyA9JRj3xKmHmjXP7hjTstJVRjPdGJg4fHZHw2vrQZCNTtfCfVEkB9W5bJGBLh3KB",
  "key25": "Jm7JwnkALRXY47PTxGMsu94MbNxGsWxw6fgiiUAmg1xL2W6dYMr8Vh5zvfJy2a4VJBzAaJ3TEj1wcGrddMt3fD7",
  "key26": "5eiYtWAquVNJ6GV5rKJKL3zeRg2QaaB8RhLrRv5pDCoeMWDfkMZxADbT82ji57N3QboHaTn7nFg4s8DKxDgG9oVv",
  "key27": "2Xu9Ky1BCNUXQ5bPJX4M1ZkqsdNmveJdmZRKYb9i7PoSVy8558PKDapk3k7Ab9GBeZuftsGpikPd7By9p5kEJBsf",
  "key28": "5dxQKB8S3vP5KEf6hu2ArXckBr9fnKkXWHPjYi3qyjQohUZ4bqRnLooRoP1GAcr3exMmp6FF1NvY79E3hajEGXa9",
  "key29": "4MhDV7c8vK1QJLqxaa7MKLfn798FhZyE1m8QUaZNK8NSuGnYm3tZDVP5UdwTZvukrF9KD5ByjAeFg3Z41nLK4MpV",
  "key30": "66YXadZ5kWt7WbNcaWpKvSPT8uA45pyLTehtum6dsagD2gdM9pQMuGpJQSxJJyqcGdjLvgurkMiyUronooAGi38K",
  "key31": "3iM22dUiEHUHR6yVT38koqgnrHZaa1H2fep3GAtAXkj7avpunCemGTdyZGG5UX88xDkqmXC9t2RJS47u1JkyP1ph",
  "key32": "47aMnQyhvMXoVWKxakapaM5dPUPsz8zrv2Lnc3t6DH5bVGTJtbktndJmY9y27ZurzodEKLAktwUX5DeUYdaUvqB",
  "key33": "4Bh4cvbVeH7xEPCGyzvQuK9huX7vTwpfgJAgEtmZgMkHEpFq52hDfvsPg8Y5jUZbvX6BVKeKAKZGXF1Ag5vHHuD4",
  "key34": "4MnbN4WZn3TW9icJd7PNnPqnsW7yEF2avzY6m528kTkYFgXpnonCirQ2Q4muBbA4L1SkhjyNoX1xauow897wghuQ",
  "key35": "4W9VmhpdkmQHTY1nx9JA1KNr1dEiz36ut2QCBmzf8nX7QkwDYTqayhr5ooTHtVKCu8Mpsz451PkxTC5KoDArwcHY",
  "key36": "2KFwf1DQnfrH8zBppScsMiMujWHXaR8smpCebJCYjrujAS7rxS3u4nMryPZT9zJqHmZ9sx474cW77WyNXZN7xQFn",
  "key37": "2rcu8fWMqrz4JSsiq9WMkq3WoHtCUMhC6tsbTMPyUu3EnhDmcvXHvDYTzCiD5RjUTrNNKyjWFP4gbRvkTaetuUSS",
  "key38": "hmQoP3N4FUh8xvjPvmCR9jMpqXoNvj3LrTy4L2LT6ZjzAdMe7DnH6Cix3kuqtBk1Ru3gqfV9XTEXiWVtJoSWPUp",
  "key39": "2tSeRwa2Am7hqk6dsmQUb9qXgmxqpkERKFwSabqVwsQUJ9psqF9DAJCB7gZJfEMc5HMNbD18Mr3MEYzcSAvMeZxN",
  "key40": "393kp6rUDu19Gjv9ZBM4kk36ycWatBFLkzbh93CveP6Jk1Zk47D212vAFpMTfrZx59yj2k571Ss9d3xNpszsYpCV",
  "key41": "3fcSDJ5kC7BM8FawFdzaAQs2FDmtSjsfXxFS1NZztkrWkNP6ra4JmkB9PCL6y318GgVGpjfBMMRCKKWqwYq2tvKG",
  "key42": "3gfJfLsjyoNW2gtLTqmGbmSodCGKzmsTmj8XnTEzCyN85FANLFYeQzUWxhgN4KWaXcYwAwoK1aGQfYXQzwHwK78W",
  "key43": "2CXFjXCXMjgNEF3vKryMXTWcxmSEtbvcGbZquX24RAqY15MhjinCoYH5aEaoLYKJNb3nzbVkJf4nDDaSvam4FVat",
  "key44": "2spkWSn1fdaW3M7Lrizv2TTnvfs79VWwnt7FrVTMr3iw13eg3Gmy6gsfUxy71iYUtEnocF2V3m5iaikSJQ2FSrcY",
  "key45": "5umRUsqWxXFUYiC35FaK7CtkaWDEydj6kL2J1b3oDuL2eY8DFLkHphF57a6nrf3rpGwwBsnTBxGxqG384siQnSBA",
  "key46": "65fFDZDgbKNNwjdU9uamLC3f4mMsPgWwkoigBA7ahbuoCd3ZbfM7CtG2Z6pUV9Fdz4zKHfstn8Q9SyztQUceFjAP"
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
