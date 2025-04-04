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
    "5ekWdwkdYcfBQy1QA6xxL6vhBGmBy4UpmexU3RUdNmBvTM3yvX7ubfHen68wUcjrD93djDhVPakQ2wAJc2Ei12kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbhkdiQPcSL3Q7YpPbLg8FytBqfp5bzAvVrpTUrtS2fQys7zEZ8ykCqUSQ2irhKEuTD8rtuf6adwufvTr9AVwWX",
  "key1": "5bL3bef6h8SvfXpjNvXxnkLSbkREcmRe3CZrfuFw2yhv3EQWVTCPefu9VurdLLbwBP59obj6rxQwvLJviMgeVNw7",
  "key2": "5KpW4T27DKigyieoz3JyRYxtHa1EVAogKbhnxYaYi3TyugnWui8MmdXC7J5629TKhuuTgGDqUbVXjNawzcc3mSJ5",
  "key3": "3HazzRtGGdgZ3agRr8mNBwPSn3xw12D6UuFMdSQM7QKfiV3ccMx6XKTnZZekFmhLH8HH6QArU1XK5PnzwPuxDGTC",
  "key4": "53M5XpGfzSDasbPETufk9eYTZ7PNRf6LtrBHqgewfUgsASdeeVA25t57oyhkTZYyXRjC9cE1vVNvXUpyRDfzn5H5",
  "key5": "61K7yy3XrMmZUQRBcx36enezx9t58S8qB8As5brjUSgo2QcgzmZckGM643zi266UbH3B7LW1YfCtY1VAkjcZgetg",
  "key6": "5jaFvAHWcBVi5LjWjMnGSSwpcqPTAB2Nq3NHvbGCzrHeh4GXM35ypU1R3Xm7QjajnaMWzo5WTSn2BaHdRe7ZMPj7",
  "key7": "2RkwFTuMcuH54qTtKLn4fNHqt4gttWiF5JdEmXU5fMRGuD1X45YyJKys4e7fkUaHJrCfVvJw2TUePRrKLc3gBw9z",
  "key8": "43U8dxbcDch1CSzhxQccxm3taLh1FvLP9RHSsRuJp9pXFDWLkWQPepZVRLic5Y7ZFkH6YZwyBXRBKy9oSpfir2X7",
  "key9": "49n2FMtKZYYTD2LXZxfQgJRMDdanseRmAMCUHkZEmnN2CgmTnMYvDLWcrniQKTBqR8Kxn5wa88snuX5AyP9Hysjc",
  "key10": "P7MUe74DEXZyeumeEbPjxrv4mFxnsiAPy8yxjVSA7RHGG73LirTE62Mtk6oL9Mpcu8BgdaX2yvwntWWCeNtMeob",
  "key11": "49rtaZGb5Bu8enstja1dXbxVMoqdopXLDnD3KkK7LA1ia26YYFxJLioqN8yft8ReUG6vEbGFMEWdjHQ7u7uCoJM6",
  "key12": "5rxvNBwbZsmY9KYwtCZNWjUU8R4JjNbMtCMbTzWVDtGxHuhWphUXui8B8UhVdqHQbdaKLjvD3DrhzgLB3PEYuzuS",
  "key13": "4veJbfygp9YNyz2JBCccQLkuY82DNCoV71ktsAuBCg1BzZ2wy9GuZBKNLpJf8ZyeydNNcvQHMkANYvu8AggcwqVQ",
  "key14": "HsPgxT1QFg3xgP41VuerUoA9hBmENq1wgoaYcZ13XKyJb3gnti5PFMWEuQWSnmk8dwYqr3Db1svNv17YZVxA2kB",
  "key15": "S2JRQrseSTsx57MGKb69huViCKwHQzQ6bNQYH6km7RtawUpTc4f1Y36mcS989Ccka1UfHAgbSvStpjkXCZeR21A",
  "key16": "4shrULWC8EcPqUihvUcj5QHcCWgfaScUgJADMJBU3GQ44vGanhzDJxyL8KkZsaVZgQpxqK4pAGpBGW238MFmGFAx",
  "key17": "BfmssbWoEFDQ2Rmyy7NcYJ7k6xQzNRAYNm78p3KzNGGJjhdJG9rPfBGH8kYaVsdR6wX4GMA5ioPAvespg8sahpT",
  "key18": "5iv3dWiSsVNCV3XgiKCp6qs9YEgBtN5yvP3zY2TH2vgQivi7kVvwhxWLbZnNNrseY15BzwbwReQNmBGWRaLK53U4",
  "key19": "3wiPhFZGdUtcXJyN5mFbXPrLcL8uM9KHNK8kjqi9wkxWh3w75vUo5aFkz38YKW3QWRCx2Lp5etRXNAyJkg7vrqRB",
  "key20": "4qCKd9Unt2tVCq8ixDJxYMNpEQ6GPaawHgUaN7LysNYppQ8euqSC5oJXCjbNHwhp3A4DK6sDieq3hhuTUWTkwtUN",
  "key21": "3v2HQhjZfDaKRdrPTVvFWSqduaGisBnHpAQxQ2nNBdefqSCPadCt685M1D7tV6CqgUgJLcpQzsmci1rEfUcn4u47",
  "key22": "2UbGo1yMt9fMgk8MiNHQcr6Xjtk4JNSPd6AVLkXNXNWBBMKJScUyHFNWQaYfc94kF49b2YQHCy2yx5BaHb8tw2gi",
  "key23": "2ja8JQeghGhxGvgW3fXGq4fK7W4NpJ2VWo4ehDemS5NaczLLUQvrvA5jdEHA8FQM2gTX11CwDo1TGELLafeLJmFg",
  "key24": "3KdCDkrU3A6ziuqZVy9w7nAdvQWi135Hx1mGX46es3TKrYoKZ931fg7eJSgJiMYMJokY9tM2TyFafynMXYFoRcMU",
  "key25": "5oRND5hDgxkRpAwE1aUTY6eGnrXFmnsTtwvxqTR98FMFctRXGMf1jNLXtmJYeqfVi2LsN2GF75ejaPoo2JtseoBz",
  "key26": "sa7G5bw4osMkmCLVWcBvxUgnX7PxLkW4qpHEUiihwkjU4XHqnFsW4jtdJ17pwBeTH5yM6QhzvGgqFae7dZabVmJ",
  "key27": "2BZra91dBkr43RoL4YiJuGq1DaWabh6jsmBQnyjhi2gkWerzaG9zMmKehfKqSVaxkvzDdfCTXKBSa4qGMNESkY7W",
  "key28": "4xs6bcoKKqQDT7HpK3buFtxvkq8szmipMTjUfNdynUCZBFkQjGLktui3wJBwjYifZTVU6JFkWjLpCwkc7tF858wa",
  "key29": "5zANW9Gh9sHXNHQrPpwQbDGAFukoAP8tgmB7zL2HrnEspH5ozD7Y7s4PECEBE8Ptw73koEYmDtGTiHo9o5QXHn5y",
  "key30": "33iY1Xi1RjSaa9wT2ec7rbUN3XHUULM4cLvWPNbQhY3X3YASHSwSrJfsFJCi963X7ps8x69VNViGj8KFPTNoXJPk",
  "key31": "V45hx8ZkHWM8sgJGC1oGgjB1YFztWj3rgecpxktGQHTsyjioGTQnxjnyv6psL5LfoecRuNAKL5H7AoGD6FgELdC",
  "key32": "29Cny6aEAwHwMkF3srMGgoGPhGNm86K4oRYvvbTGyKv2zwy8i9gpV5c3kFwLfZoZ3LxqnsEBN1hrdshSuxo4Mah9",
  "key33": "5b2KAoV4Xf5LoyhKghECUabAgRXewA4UDeX6VsBdiAxn8wezTFsHXFeky6CcvLf2DuTJpxAAABjd85GPM966X5WV",
  "key34": "4Nxy1cLfJ7mty3crEBtJ8QHWwxF1u4vEnBDZBAE7WTcWuL5BGHFHFx1zDHPPyY6mv89u5uZe4okbrDvwUxZnEUhf",
  "key35": "5YGpBHQiKWQBAkpt7jm1kGLFj9qfrxw5QjTCqaJSvPhPckq8W1XqFrXAo8K2Ntb5MjmFK2BDkFaYRXfUxHa1Gatd",
  "key36": "5n4tvZxVBUWjL1SPjGodsApt9fptyviS64kCQA7SEYUsko9iAFBSkdm39pqMBxDkBmmPA4SJumVcuDRsM2ikzyw1",
  "key37": "64BvXj2xoCVFEUnJbUYQ2Z8SHTjmh3iiJ67yFsPhpRMZ2qsYxoxT1z7xog2rqwR5MnrHDCLRMeZ3U5dHj9tdnGw5",
  "key38": "4x36Q6cj6WvS73KB4S1zH1nGcQN36uPkQpVRCAPrfPRANAphBZi1dmTx5fe9JDnemQyA3TFKEcV9zDPz9JV2a5v4",
  "key39": "2FCedysLLVrdJXjmhY53iwhPhtksxmyr5yvGnF5x62VpETs3t2Z7W9EirXRyLirLqGLU2KzUyhx3Sr5LZJENoBQk",
  "key40": "K23gfSBWCUwqDnXJuvT9Xy8MvEeu3UHgLvSZ58mk33hpEShvMWMLuQEXQRe51vs48QkaChyu1dGo86D6Avrfiv2",
  "key41": "5r5tErbfi39DqJ9s11GN5kUDiZZyHj4VFGiTxuXLbCtTaNR19WvZK5dyNHcyHd7VNdn1Uy2YY6LoT9yDqozH6xDW",
  "key42": "4YCXGUwwaa17ocLDSH249NQwHrRctf8XBdZjSdzUsRCr754u62Y9BJVW5ZeaYbryvUBw4KVMNxURX3ppctcUv3rC",
  "key43": "Ny9RDRC33sPZHWQRNjKLmhioJRt9crmJyjA5KzgdRaKHkwuE43jNE97gLbP9aXfCv7wQeVpvwvTineMfwu9XwRE",
  "key44": "aYVXSzEnGvMoSPjwhUfaiKD8yHawRyMbSjriYAUfyc25Z27iLj5MYTyVLNuJkZdYJ4rDis8pjRshuSKTquz9v29",
  "key45": "3vR5W2fuxVCn7GB8Lapmv5gpLEXCjFTim9qrjMwXDzTTiEQ7FKHTWyUbgkzg4VtSd5VtkYmbqbD6hrt6C6dwMyZu",
  "key46": "4sPRx566Z7RyGsiagGotZpkcvGeG8odTc2JrHwhKmAQKdJRSCQXL2P5Hv5JhL6xcSAkjuDwRqikJ67MF698HyPTV",
  "key47": "5HUFxngjc2JjLhFBxhHpRyu9n4Pa3oLpjVkthtBroAfBJyiXxaarMcEKwcr4z2b9zkPVgUjLgdTpzoHJC9PfoAN8",
  "key48": "4EdpVDdY5L6KeXborhy8sn5YKiswZbs999KEFzcLfNqbmJp1KTiG5jsQEvz81NxfHUwh9k2f2xLUpLx9hwQyCMqY"
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
