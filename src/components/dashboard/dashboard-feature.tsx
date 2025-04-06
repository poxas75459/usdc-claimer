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
    "5394R4sZezUJsJ6WxbLpK8riZFZMvesQyjnU9bsQSt9awTYg6ShDxYzMweo5LsTo18VVE4dvbuVkvTUN5VWES6Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmCCK2jnF8hVAnsXzSGJu3oYjrVTXMbwcLasH1TzADU43tkqtd5mZcEoGoxoNuAsXW6zNasWAs33gAdT4Njwbyn",
  "key1": "Fv1tS8SiMQb1up2wG343GzWNZ2gFeFtzfG8CxeGsAS84JbhycoXLjT7PX6cNgpaAytu5bwtyg582j3ZVycW6QUm",
  "key2": "4fUspuPmR8nhZ1ZX1DtQ24fZTLghacXesmAVGEi3H5WtNNviFp1DjVYjCiZECLEbaHagrZkVVjtVmcucwnFYaVmJ",
  "key3": "4Noxb6q76rAng5MwvNzEi4cdcBQNj5oaN6TmkufSdFPA8NuVX5UrJtc4RpEccs1jTcWwtY9CEgfnPHqSiPdGJvTE",
  "key4": "5i8tq6g6W9mhEnkWPBvVqjwD5k7qg2V5eVMDHUszv2S9QikZt7N6553SCUwiB6KCiHnsSaB1HwnAffPCdipKu9CM",
  "key5": "mkqQmPDv23jRRr6NhmabCuQipxY3PNS9E7HpiYf8Z7TV2wg9DUuLFh9yLdK4RNLJovNwDXgLx82RG2TPiJbHd7G",
  "key6": "5yUxpC7L4CRAKKysxAyvTvJyLP7f4Y3jm1BUF3EVfTJNrrjfVMVYCKZjy4aA1FgmktFufmaAX9eyfRBiErAviTQh",
  "key7": "3uPtsiTyKEWDfLDbmhQvZNf5HErZpvYxXTtBQHkckuJEMVixAsRQmcAPHc9DiKiw5iZMoAz5kwN16KfBb8ap1Ewp",
  "key8": "5eyDmpXc5fH19FMoprXyR5dVjF2425t9sCkoNoabHfw3snpfCpor1NofK677Y4iubxqnoZLaHrvNZ1XYdEoC7XZv",
  "key9": "4P8cApmSXxLPCAZzSSATG8aMMi35QyzEN64Rtqdto3kZBDf3RhcobSmV9FzemeuQPxR8ZVkUTUoNn4TZw7TPyVxL",
  "key10": "4kyxS4oq6FT5aBATjLfTabxtcetZ7j9wwBf2S7tTi9W9nXthqZpjbv59VdwtqmZmmpAELp3hHd8GZuksQfahcWwx",
  "key11": "5UELLPC7sBaZtgHiZq9iEwFVrEQVPo9WHe1XgnU3qUmrakCrYsnfutGfeh6m4V4vqfxTwkt1A45Yh9jrYt9o61C6",
  "key12": "4huUkR6t3JToiDJikNTvNroBsPFH65YPUzA1A5HDNWUMQ22pv8bahypUsgGECHeLiq1AbxCGN3M1EXTJR2AKnVkx",
  "key13": "qteiEsqt4TF4XR5yym5Fn8qzBAaJoWdQBALbfNxiTpJbBwiXJyqf1GFDRkKEaTMh3jB674x7vSiwVJ8T6ybTVhh",
  "key14": "4Z8y27VHeF54HrAeB86iZwCtuf1GyYMYTwHB4FAK9sSh3UEACogPDQK7eyA1Z1jyFr5HXFEwGnG64tsGQuJQ2sd7",
  "key15": "3jroJcjMRrkMHcvmteruw3DGDd2nGGSEaraGdkj1hgV2T4dUjrVPCurmAaH4WoEBaLW6XjNp9P2cDNbs423SpPfe",
  "key16": "22WmSpnweYJq2Qg3R2z9LBPgTUC5vroYC6DY72FbkUNuWVxdHoo3T4v6r8dPwm5KqcJTx559aNVGUGLjtjXKuXMe",
  "key17": "2GjZsZeKUeZaDGgyjwX5YE784W3eVtj8Q3PZW5yvPBumXV3RDzZTxhz16tqeTc6NkTc9bicQ5bavvV217phgJjrD",
  "key18": "3R9Ma2f1ZF8QksrX7DSyAMVYKQsHBm8wmomFrakJ93G8XZBKZnJKzyUKtznjmjPidYzWpMQZEMk1EYJnLQyHtqH3",
  "key19": "3RkMsvCgpX9GY9RkDjQwhF7rdxX8WwBLSY1iu2E85xoUVwPvLeRzw1a5bJPVAMuV5XhW1NWSHkLhJ3NA3YcC3bH",
  "key20": "3g3gjHMU6e9T7Nu5kVYHKrTkG8kdK7MjYxkrCs8ZNutzdRshNnonc45sBaPCwsYbmwAiE1GB4hoM6DBvwvDoX19P",
  "key21": "YP9ZYrPa3k6tVinFc89MXxTbnHMUFFu2afnRiRDUWiKeCkjy8H6eXiciEX2qwoqSzb8qJZx8hkviH8h14CLZyTB",
  "key22": "2f1Pkx6JQ1pcdp6Q3WNrVLKUFsLh6dM7Z8ESq8aptUS9DDFo758Uukzn42nGf9vohNQhobmoCdoM56ZNW9Ee4dz",
  "key23": "2RFMtrGyQxNDqc4zZZwjrDa2kX24UDKzpvNp5kvmfE5LtcndjAvZBVga8eSLnFZk2SSdk7KHwfWgEMPpjDG58snM",
  "key24": "5fLstQuatoZ9jfrsn9r6BkfSZoFb2jtUSswRcN7d9DFvLxbMMR7tzoUhP5tv99kefAamvVQvjSe6UFmdSBaaca9B",
  "key25": "25Tq4wtads1Ucxm4E2xLbdrGksGZMd2JqmPoB7Cz3KCniYAYXMS6Av5iWnUBVGbnEKWHgd1rn5CpwV1JXQovhy2q",
  "key26": "zqs6buimDVgiGKm9XRskQV9eeJrg5gsAy1hzjGar6k6M381RPeQPExExgW3sQ8kTTzZ2yt3v1Y7FZmGR8tAFGc9",
  "key27": "4i3Cc4EywSYbWdka9cKUiisLEREfEFVpWx5Gnk31xNFv5tFPArHEtyeQjx6VsTUwYL8xKxUAvdhxMCcNTxroFdgc",
  "key28": "5xB4EzBj1GWeMSW2W9KPDP7ivNp9nFNc3bitLGvAWiVXWQuprD3G59GE9SPyFVn2zTMTjoHpviZVVhwyGX3fFsTV",
  "key29": "2p7s8h5DQTVfGPHcLgQakDLrUbe6MJu9rcqbXccYS71yB3zUSCPzzwcqfKtgmL4afiGcZ7fdZhzq6vmBdyGwvkN1"
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
