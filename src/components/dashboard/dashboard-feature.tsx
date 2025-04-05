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
    "5vcZudEAKCabAXprrHAmVEzRtuf5wBttf9MwV6wd5cSuX8xrDyhZRmArSGhwarHDz23qi6eBgP5zSPaPWkD25ESG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXaMwq26ifjsQ3Z8pxWY8dnQcCFatU89xonqsuUtSj4CvLhjm9VUw2J7kGjuCEk4u6jESkC5tnuAkM9q3QUBMpA",
  "key1": "3NqXtxALgoPbuzdpHveTeoLhvGEQckH3eRKjpUc7oM1cwzErqThzrwyHzSkz6RQ7AHS3HsvxTLF34jGHW8KHZFVb",
  "key2": "49UK2RUTaNEC2GLPviemetfhNWPz1wenSkYwKeLymDzwKGfxCtpaLUKFvBkJsipdc7rasZuQQK95VxYhLBDRDS2G",
  "key3": "UNSFa4uf5gK2p3mA9EVK6xesXsXxdhaofeopn5vNMbzQFqovg1kZJ46QpjW1WfExG7p3FBEPhzyXu6FpJ25ncbJ",
  "key4": "3yz197N1H28Frd7LE7gGZg6hHMNjohN24aRowems6b1UuaeTcJvzTKAGAHwboxK8MjhBQrpY5RTZfRMYhPS7skuN",
  "key5": "2kQXLgwQtcEPMMuVnomkkon8NGGcRvEqydoZeq4Ux5WDzYRAinpuf8ZsQd6zLpRgR81UowiQAMHYNcmrXEupprfv",
  "key6": "463AsVkFnke1XXKcDWGX1EW2pYfqT81tMx2dxji5NWGFP7FnxLNeJvL61Q6AbaedLg3Q6Jiuwevkbs8sgvUcypmS",
  "key7": "hndVqf2uwXBczZKkfFZpK6aPPjWgUkG5VFnh7xUqx6AWkrQe9JwPCNHhvRxa2dFQaM8MJyiyekxhWZ4mfdVdLge",
  "key8": "23LUeQ3TbnDuoXVCQU8C1vLZTksBGueCWJt7f6nA9KLF5cZ5f6LHmjAXqw6Pp9mL5Xew3prKLh2kr8T7BxQjdJWu",
  "key9": "4TonyD81vsgLNLaECbKpAaA2LrDdKajDpB197yMtkkBAfbG9VgJyRqagWRGvAhitgGUcNZagyQdXjTs8VnXD746d",
  "key10": "2my2tb5LzFcD8DgpYm1GNKCaqFhKVqUHKuVWQJwFM55nZhUToXQrLECfYiBP1ejmx1CXM4RNNh1LubCyzYSRG9PC",
  "key11": "2WnURx9pkUejL2eRJPGAP3qsnzF71vXr7JrYE6yS8L3c6wi8piPBZCc1UV14dVaFmLAE9nRx5unfuD1Wp9HyFaCF",
  "key12": "2zvxC35p5h9oKzfyqMDFg63b4yteGJY8ntRbkfe1mYiJL3DVdvdHVJLb9GnraYDVtiXrMJRuXJx6n2i1JcML9CNj",
  "key13": "65HTj66z98RcTtQEoG3RVgraCfgVdYfQYDmkayJJWnXSzFAeXuMJZR65x8ZJwoku2D8YGU2h5UN8Qz9RriF49WPi",
  "key14": "32NY3HnbnJZLGityCB2XX4TfiPYqb9uNaMSDMn2aeFB7GAJmGZyRwXL9ncCTHrYjC6bC32hjhGfcG8aB1VbM4WDq",
  "key15": "4RwV8Mk1qiYuzaPZ8B2RXQh7c8J8eWTMiYXp6qASbCo8uujczHDZc8G1dBePquWAoSUffX8ouqLRPSkGSrdXccGS",
  "key16": "38Q2k4GsnCzty6hsFVuqrB4TLy3SpXtGx41S4mYFH6yeacSCq7NJ4Ni3n5m6utLafsgp5wXY3nTabBEogjKxE5c",
  "key17": "2fcF3M7xzs72Rm3XmdjrmsxMYvwrZuK4pKAooCNxD7gsXn4f9YR7QKAaP8sPszqXXQ6WTnfDA7PHmnvVtUXDcBXQ",
  "key18": "5Pc5dSnaYQeoNRXgrPzJZBuVdWLKVePKMuPAFPWh3HP9wN5B1KWhv8roYjwjACG6QQzi64rKokWzBHJzp4QsmR7Y",
  "key19": "Ctc4k778eyvzeVtAq82dDo4cFR7ikg1odA549nqu9ZeYjtiatQCzH5nygBWirgcaskaGg58vKeAUZ7TqSN8kve4",
  "key20": "2dDMgZ1G1QVpmf3TYyXDxySGyRnvyhaUBVBbbR49KoCsCJjhqVKJDdp4nHLpcVTp8LMfrFvqXVYbq4DH8G2ECFeu",
  "key21": "4kQ3Qd7HFaq7i4kVe2SzVspAKqRFhoBjWMr9M3arYdm12Y2azwbcLRQ8Uabn4ciZR89xjKixmwj7PBgEGLsC9LVo",
  "key22": "2YEEHMM7nRMCitY6MfU5BYn3dmMMk5dfYemEte7YnLevjBYta2ydpUkHnUz3DkFGNLVpZoQYkSg8kUmMYn2BsoEi",
  "key23": "3ogw5sPza4uWrASmdQLg7f4Hor1siCJsPMbAD1vQmy1ghgnzutdm86xiiaMi6U6HrmZta6yAmjSok2ZYgvCogvoY",
  "key24": "4ueAZMzE3zaCYsx5HpKacbBnB7r8aGeF7KH3WDZUv9LCrAExW2g1ChvqRhYP9LneDbbWCpjCkCuMqUi3JezRHXtq",
  "key25": "3UkM9mXAGN1qnMbAb4wDGThbfkfLjDvbbcX2RNQhg37F3ef3vrsVB8pASVcceFYsKgJqQPgBMKniiZz3Rk6PjU7X",
  "key26": "3C1iQYCWUdTh3mnx2WcK2j2zUETHKBmyxvqwGpo1CTRCsYnHKCFX15TSm2MWm3RKaM1TonyRX6UHU7FYViiL95Vo",
  "key27": "iEs5648KdsYRN6muS8pJfvjFqR2bwf2oBT7Xr5s6D5zxW5j5Kw3ksvZAa2NdBuzArULbHyT3B6gDmiPrwmC9ga9",
  "key28": "JQrHda42BQ4goMemcjgGab2tCzNdc6jkdqaAPiFCBUZBGuzpFMd3hv5Givf7Dn677pW1qKRQfkU9DynGkQ2M1uD",
  "key29": "5Jq5z3uX3soZEt5iee7pYhCxwdDe7mN8aPGRRv2zzQMYaZ7R7CaxBYhbeFtQE19r3CcugeJtyjorGquqiDaj78C3",
  "key30": "4WYMAYSrYx3rvcWr5VDEes7g7XpUfToezvVKRsDiaAbZSUzjwG8haQrLFwNQEkp8CZLy1cDJ2mKpQfpvvpMSAyoY",
  "key31": "5zH7W9tgD9pZZN9Cg4YZp2DexJpPUsdAYHTFv8RUbbYng6knkAkm8KUv6XYzcSc95iLPNJAovYL4oivpsrGZs3CV",
  "key32": "51aFNDfw4ReAumpws6jNZ6LYB3WXTRYFrdNTcvmwZAtcksVK3pppqmNatF61pCZMRWesEKDoWR6F53pwtdMsHjvj",
  "key33": "4ehXxxCFD2w8P2Ktwqi18rw7w2LDWcRDkEeKjcBqHiEwb9NpQ7nSGBc6Tf1K724MMbdTqTXYJx8GXqBH22QSskab",
  "key34": "231SQf1c9ZxnUB34eH9YSh9ainGcpaYLatCeDdKfhguQ2L2FzAto4BpujHHJQVXWg7iRXtwamvNGYkEh1sShp8Ex"
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
