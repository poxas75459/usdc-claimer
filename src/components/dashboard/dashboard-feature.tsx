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
    "2je4S1ttJKoTYDUkVc5Gifjkatuv79onKZWAAyqjBdEXpyz1D41SH3svGjg3oq7mvKx5A5d6f6wgwvVJjiC2Gnc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inmpP9cku3mueMit735h8ABKq2H5wTDbEbCAcvH8i36BJz1EZDKLBxZht4Pb9FwNnPwwGMcvFhv36L7ufKYZLxj",
  "key1": "2VT3nhqoXRXHfCr94daxc4U8ZdzbtDFe7QkEY8LWPx7CYShmNY8Noj9fTfWtSHzkcEWHHisrJJvoryT23X97ZMG",
  "key2": "4K9hPx2VaiEwNs8ARLn9wmvPEN8Nz2riENQM28yMX8v2fZsmcsPq5H2ocCPSgempodgXhWaMV7w9esqxtRW8qKqu",
  "key3": "AxrqYZDZ9rNYqtboQzdQgi8EspE6sx1zsuMss2QQq54kwtHa8bohZG1HwdC9tKZBZQzYiPAgEWSWgUawH3UmdPe",
  "key4": "2yejmeBK8E9Yj6YDSoYpPof9h8i4ZR81HR9UgdcwhRjvjS9ErmsPRzLYukh3iHi3PZadJG4d961VefXYCtKr9M2X",
  "key5": "3hgVL6gcoJPd22xibgpLLosCmESWZDbdCjxgVmsfp2wU3s4Qq8CBzYm3stTP1xYpJaKXvsPhcSfmur8moJ9CSqyA",
  "key6": "qVgyJLA8281UFhQdkCVm1ExCYPHKThyAp7mxSQZ59wQWDQRop7KwaHFzaP2hqq22kzmD2ezNbLFjp7CmD4KYiQR",
  "key7": "3im1nEQhSzYwMnctuKPkxkHgRYELuo16Vq2cYgA7jfhjFLrz7xX4PHXaoNCFenic3imCZ8fhYdEKjbcqg4XrYLzu",
  "key8": "BQZ8eBA61YCE79QxNGw394CPGSsoBjGPX7gYQ51TZeP1SiGgSFepHQBZNkhwEUQiJ1HED74eK67kcCKWkFau6Yv",
  "key9": "5xYkYsvq1EZgaSmB3RvG1XdzDiBnfyX44c72rtnc8ksm42ma2RSK4uG4NrCuakhvjxc6w3TMuCV5p2f8GQ1B8zah",
  "key10": "iwxaa4RZeCF3AfAau4SoNzVRBRRqR5yf7TCXvnE3MisKhTGaPvYi3TQ1t5S4tFtxnoMDcc3Le7jTmCZ6Bc2XHq8",
  "key11": "56Szeja4r4YmhFTQ67DxyMThsi1bN3cyYXTLAU3uCZk2eGbPG1fZJkPf7ae7uTaCSZUct7qpEa7sRpQFA8bdkSqp",
  "key12": "5GXEcrnH8HeVLCBafXAE8Ekh7cPhwtaMtqDNPz483u1WWkBau2e8WKTSV43NySYtjWakAx9m3ZGaVFT1FdRoPqrN",
  "key13": "2CdeCJWR1Uz8No5ZDQmVMNUA3uNwpFa4GGt733nGRB19pnA6xv2kpyA98a6cim1qmswEiHAhFCrGZkZjgkcqNVJR",
  "key14": "4cXV3WK4qQoN4AHQ6vdg8cjojc4XRdaMTaw2WjMHc4DBu8oYuvXhdxK7pGqmK4A8jQVGvNo4oDJVQgCjjAH6qn1z",
  "key15": "5CK4Hq1EU6NkpVfCoGYvMEKbtKJawPn7awnCt9nfEmD2pW7Ab6AaS9SyxRDq9XQhGnxMFnaoZskeMfjvaTQ18JFq",
  "key16": "iM9hH3yBYcExquLwx9XojxrxDK6BTPyxoxr87ApPab89rpYWEvVREpJbHxwh5L4tvUEDkAqV1LqcGVkYctnfFFe",
  "key17": "39bapWv9RCG4SyXpZX9v47L2CA8BRmEQ8XweghmvfQeoWktYL8bUEmGiaNrbhKa1JnVvazuGTLagbNXHU8Y37Scq",
  "key18": "52n2gMjB3zrL1agiUtg3kAX1NpiCRwVtGMj4Qx56UdSEYaidJH48zQo14pTGfHwpCRSyr5zFkWi3td4KCwq5tmR",
  "key19": "WPhBNYwb71ujR85cwLPQvYeBEA4di9CaczvrsPvRivs1CrCdTeJYXfkESrgJ6cxudzagTGhQ1X4hLvpU9gfM8HP",
  "key20": "3NAemXgE1fiSrY2QAHXW28XEy89jzrW2FJt8HFK7Pbmoqudu4oWySVd9ZVzAhNG5rubQYAW8qX9qUSrDuj4wxf8M",
  "key21": "SPnjuvT17izTGGxGYW9xUVAmCvknxgw8X9GdMHbePUPjNaLXniN84yMjqLCv172gmP3foPvh7jTUc4t88GYsUpt",
  "key22": "61pGzNM5m31cKLj8jcyy1KZ8DR8GNsFybV3RHn9hyGqfgwEn8skQSYxnCHR31oHfqVoXSTFpMUFuvg1morHenQYH",
  "key23": "3MBQoG7Z4PjFGpetY3ZASggUyuD2a53hZJboMudc7YnpptCMixx3hbTqAnmKR6MTCEXGBZwdVshfy91Secq3xpM3",
  "key24": "2tUaJfVPWoKh8VVrDMe1RGg2QzKz7Hr2QsDQCmUy7vZ2Yzi7ozpqa93gWi7fQqqT9GN2YdY7TLjKAf4Mr5EYkGqv",
  "key25": "33x5bCFZMVuAumAz52ubAwvcXWRsanNFNKg7UXcUJNer2orv4EbmFtgQFuth3NCZMJf4aLqwC717gqausF7fD2sw",
  "key26": "3EGV5AWZLNs4HQ6H2fCSCHekwXctN1qZGCntoQo8NBXBW3Lo2X46dHFV2Vw2feQEzoFFFbpcc8asWUchJTQfj4oK",
  "key27": "27b1XhSXhKvMYcjhY9YsfjtVvWJ28CW1VmGGK77hGmp4fHEZfPLtE8RGMU8szndMCnDEom3m2PoSWPCxnuPT9tCY",
  "key28": "2Lthx49zkbvN52wuA4Bk23EmALSmtiSFz6WJKzTXjSpnC8vbgWPyNRceWG8hW7jmpfUWCcwerYgFCJQatBMFcmkm",
  "key29": "2ijpQo6QoHZPTWjgDV6WqdUqWP676EGsyPzitSaZLqmLJaDEmiaZQnMAzWzFUMJwNrEDdppYsZyyNrMWkKCHyK4b",
  "key30": "Dikqs5cpJQ4A3LCezdiSTbfa2PPMH56E9uBZp3qkKKKsQfYrcNneA4P3Sy23BpTwcWoHMc8f9fDZGzQx2nkTHU7",
  "key31": "4YyYjofoJn23UdYYxYpfLY5Mc3kf9HYk351Q4CLeMoW5z5q5YWc36qJiwJwVHGZqEUx3nNGEMAudmvNpSZEEXqEP",
  "key32": "31CyCnfLmpX12sb3Rw6cc31QRngZUpiromiP82Bye5QYEaUDR1KsqwfELeDnNgkpFQHZEYLqjwPV6aJj5sXkFdBG",
  "key33": "51vZD4UGrxCejkxB9JmsmgvhMcUHrSHt1LDGYhSktuNZKZaiB5ByyPJamCJrMP4s6gHunZ8nGG1TKPpbjPiNddJX",
  "key34": "3w19K2PRyiw8uC8tK2UBH78TKmFbb3xzJsq9gRSNRuMbPe4G5bEnMNTLcV5skg5NRPF39BJhNnV65FujWHCyXkoE",
  "key35": "5P8yFLWnTVGKiCbZFmc4Rc5NAvEMEeGcB6h3khZg6BJ4KYAgPe866UoZJd8LFmHvS87aj24Z1PjTe7yYrBpfAug4",
  "key36": "4zisLbQ67YtqUzTgVgEjUNVAxF1VjpgsMFnwpCPdLrybc2fHdYEpqEspLQAyVZ9zS2aUwgmpsaTyBLS2E12A9Qzh"
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
