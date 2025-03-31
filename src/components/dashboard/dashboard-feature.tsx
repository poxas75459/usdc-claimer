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
    "4jUK4w6G6NnKvkJXv8kVvoqyq3F2Zi4qVAsRxzV2RjNr7zhDVHYFVSkvLqJ3Q8LaukHiC5JjT2beMVSNsjRRd2HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51QWirT6x5FGjAteic4NRFLn6NrhdCu6MsRi98USmtNBLqJbRttWCusEKSg6AwqXJpY8fmNzmsSj867crMDdZNCD",
  "key1": "5zEg5FtQgKWLzziCXwvBKSt2C1aKxeTXcCyjEmaNNcWo2YtAtwEZ6YDicduRozCywrDmx5znEq4sbKFyVvG7Lkq5",
  "key2": "gX8TKJThpxuPXHswRiBGKyrAwWA8QTBgQdXH2f9KP1rh4s6CZwGTuXr31eJDKZzRJggpBT2g7yzdp8qEUcnFGoa",
  "key3": "3HdS2uT2LiDSwnEqkhFXoyk1KEgwgczGSN1WK7Yp2vq9VGNzQioKNBk1KMRfzZtkcheqUDLjXq7vaPaz2j9hNnxJ",
  "key4": "61UJdG5bWnUpwjr651rRzBw6HxK4auJUiCZUjxj9N9Yr37oMPACHSXP27SgA6eqAVWj3Q2ceTNehBvNdY1YjGajD",
  "key5": "22MCNBWvfNC7GL9EoZAMs7RPKT6sw6H2QFFtTKQFHc4pa2ink8uJB67ezZZAsThKXMCDVt7PRzqTQUsyxRv4sNqS",
  "key6": "28oHtmGDPom9AaVcn21CFqHe22e6gtcpqt68cgPGXFWsY2FNgZUMJ5qgVF7iPvEidQPnfLUfcYk9uJTb26Pr9qnz",
  "key7": "2VxAJ3bTiratBWr5A3EXmJS3kdE3B12Pemm2X9U3LignK8wdgrJHYvCfEAJEFxtCtjKXqZ67v9ahCCpCYWRsPhKM",
  "key8": "2kJ7hCDzC9DvcnJ8R5cXAbQWZ8yxtJFAjWKAJNAaP84vD1XVSatj93x2u2aJEhQ1ywCSMYeEUYsbyVeptVnnLLe8",
  "key9": "3KsBsUpXmGGRQLEuMBp5v7Ao84JRt5BAVaUo1zj2Q1zPNbRfW9qmYjtmrVgy9WVuK11EuXZSBRx97X96hbDafskg",
  "key10": "27LSrXs4Acy8C5EDQbbPbcurccDgsLPmMQhcvT7pDJXPV3yZm665JAa9aHuh63smCsyA1EpcQXtCrFHDXa9eUGQt",
  "key11": "2qVCydxV1fdDNXbE9d6inJz5Z3wuSiZEQtLEdjpnLq2kKAaLZzeT66GGKQEsYXtsVEByjS7JhMWK9FyRTW79ysv7",
  "key12": "5nxg5MeoWu1YKZAQqWeTVrDAqHfe8QWQxxKs1zdXyGQYrAopiJVakSj5ZBoCHUFhg7KSudHC4o9gVPeL9s7Kbnso",
  "key13": "2HK84usRbG5dftyEMrAEQVmvAET3TmnVzKeSYzJDL8K9E1sFGn4s8KEJSB9ZJDVnN2FeYFm8tGYqsMH36kQJhN7W",
  "key14": "brasVXFb1NkBNAKLBGFH8KuijhwZtGb3gAQrEttGdHGfmqWbWb8JqXLQH1yMVA3XM1K9YoBFsMsvtQyLabcVjgT",
  "key15": "qm3cwFA9X3edteZ93yo58pwk7Ar8doMNc9fNtRiUu8ff67BYh8ZRcomWuGDinh2hqwcCvv452KqDRVufd2CHTfU",
  "key16": "4EapcorvcFFrLzhxuNsxHnmWXUCxTj8rQb1UU2VRzvaXrxfiSJbidLV5yZynmEFum6tQ699YT24ZnA75uyLGZacf",
  "key17": "4dUdc1xPUnbvP8aiPiZxoQYkW3c9gzgSgZbu2veTbojj5tUSfxAuRCLCu5WpEGzAVJC4fFh2WN3aqFLJREsyGR5P",
  "key18": "4xc6LyjDM8MAzi7eV8YY7iGAME3euoWfuciMJWRhFmM7fqqjDjhks8TuNeyUL1buu3JdFEo1qAZj5ZBQQW1bHcfc",
  "key19": "2cTUUCqmrmsU1HvnCULgo1fbVc4zXDUNo4rECH3q9sVXi6Fkys1cqRNGrCWrcTwh3GUmxtRzWRX6e9bPqGDWQdFS",
  "key20": "4kr2xbVUZrk4Gw5eZEibt7kFxM6i189eZJuzVXXPcY2u5RtZnF3oBMzzu3VUG6x9uFcT7DyqC6JRuS1kTnnZxyHE",
  "key21": "5nMuRch62XHPBytXVj1HZoW2vPQCvmivm1bpGZruaw4vkhqPRK4oFaTDr8fXnh2QsKujbiNWzLeVeiSVQArp3FJx",
  "key22": "3kN22wgYeHGGeaTqttdEdQiQwmkc4TdHdj1hyce5bP3kWPAFDWuHzYWt6ert9Au4JKqbMFcJ6txhowsaFuFAUV4X",
  "key23": "34tdZiHquhn1VKdefxJL3i2MSxzsa8DPJGaDFCy74oeWkHe94Xd2gHJKT38vcGe7SUMa6Kzy7YxsCe33cDMVzEwc",
  "key24": "2Yj1nj3NEU6eMLjuVm385qmDk3YPuPc68erQ1HRas2m6Xw9Pii9hUisG93v9sUxjHfMpy7mNc9uk5papKeSih21V",
  "key25": "2Sqwz8WZ1XdJnwa3PmKcBVgs1Np3CyooExZ8UsvKR1cmdnPepQdXbCAoVWGvUv7RS58Fn744vVhg8JDJviV3fiDW",
  "key26": "2qJTyPcDueNs24D7BCca1fVLbrzwpwoMapH1EqbpU85w6oFhvMqSeDTiVQcFvnkySadbWqhpcaCCMr15yCstFgqH",
  "key27": "5N1jNQiiYMMCrKcysFd4w1vTn9Na92pED3XHsivZasRKWrwdawkAbtgDCk51LyxgMUHA8EuY8nduQBLReo5u5v5U",
  "key28": "2YrZiG53RqtT8z4abmG3umKQmamAPeS63MFz5dZQvh9LZYXRZLoGQv98Ds3fLfnVN2WRb5CGZQ47d8mSuNT1hfdP",
  "key29": "3kEoLqrjQTJpy5N7CHzCc7zGofzSMPL6pZSdcJxGLpAT7eEacDsm31GaWwBQehrSkaEWCnb1KrJgHgzekNkmZVtz",
  "key30": "52gUwo5oMw7yNPmJdNCMAUgGHfMrg8gQn3odbzLf8HMFzkVW2bto1ZrRTotycM3kpfaVCjnupwXXQRyzV3mFCK6a",
  "key31": "d3e7WhVrdJFTLTqfcWZmj8K37g9ZhUCTX2xeLmZDq5r4HE73Kfar53rc3MS66Q9SPQsd43H2M94YBbAqdzxovB3",
  "key32": "3cnBkPk67avjew4TGV47fd5mmUnhE6diM59x6xdmyr7ch4LRz9fQh6Yhq8EW6USMyDR9MUfzPbsSumaJP9zu3Mq5",
  "key33": "5H1s7QQ6a9EhCrVVKLcP6DDvFHzbphBdT7jFADavyve5CmUzvDoyhKPBBypJCMSHsnKGeGE8mcTsqTXbcjPjEVZy",
  "key34": "3baUXfa9YzUMii5nh2dC559Xs5kqtxyhjX3Jzwo1QXr4tCVzQAW7SgZcqf8CJeJ1kMvZ51yEWqby7sQ9JixoUAGY",
  "key35": "2iStPVyXB59Sgubey3Amo58Hm1ARW24vg1qK1em7fUvTjTXDPesENF8jXwUHZqWH5ETMUwX2SpfBoJDdNd6BS9V8",
  "key36": "5hxdShkMk6PWdUp3Zc7L7Y7XwqLtEFe7GB3zP1xps6ZwGCy4gCK8iBrN3k17wJmZuwbAtDgpSjnMz12f968xU3g7",
  "key37": "2qTT3UQhChQCgr3it5mMv5z8nhupdUpAV8dsV9rGMGfSic4Y6QE6hFG6dWi2cbjQYgnjiHC8otNXYkVj7Ggm3mNw",
  "key38": "3sp9rXCkU7vcW9qVYxN9826BUp4dyjyLbUGi8nTPSv5KtA93znii7aBSA1y2HuvX8RWS1kRDgcP7FZqUmKJYHjfs",
  "key39": "3i3cs3MdYoKjk9nsqdfWSXbqcoVMP6uu4WxrPokAjVb51k4qw3LFSy8CrNyzTWp3LqN5piUSJp6MNfHpQ7mYozK2",
  "key40": "3qxiRAV26E98YFaU5chRRGymLESEhxGYnZhesUm4vBguE8Rr7pcK6MUABQwmU2NqzSzZXWp9m4duTLqXqQ97VbG9",
  "key41": "ntK13xrhYtyu8aEBdDY48XXxijVT8zCSH8z9ZsWCxhMy6E3sfd7fWK9N9EoAP6Zd69VAaxxLqizyR5J9uo7nRg6",
  "key42": "5gXE4uUfmFt925yqvHonxRyxKZhKAtSoqrqjdT8TfAds6MtXDRKKmY4KeSvzSGPVJCgnNUBNTj24YSi2V7xEA8gX",
  "key43": "3tcr4KuPaGf8tePYRTV4dbENudU2AEuA6GGFEGGy91S8ZfHiytjWfyReBAmH7vNZQsMrFjNV4HV9XGrrzH6acq4e",
  "key44": "2KhvjZmSj76fSbftwBT3rZofiNL53t8RSnNfga11kKrMDdWBXPNeRsxo5jRmzp9EZq3SAtdnm829wq5SHNQ5om7G",
  "key45": "4a1gphjKiydZrqDBGvF8uA7cPGYvtpRZJsFQTsJQGH3qAQFSAeyviYgPZ1XAnSXKmQdCwgmoSKagkD6HHwLZ72tT",
  "key46": "3SShz3NYQrUPGvRxaJikC7iCtc56ugLqXUK7tKvXAmTth3QJYKV2kkD66DqikugBvQKZEZn143UVVsK8HcxN9kvM",
  "key47": "2uCzz5zEEpYa1XnX1NpY2uy69pHTbVHxUg5JWJFcNW9hTAgPD38JhvsMqDrnudcCVoDJZcm94RejuetL3EYmBz4R"
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
