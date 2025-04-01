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
    "5oHSghcmxDkakcivRfYwijKL4hLk8VmrBBau1eMyth1cht6m62yT8tcHDTBGpurNCbsBQAUwmebzwo6ZaugmetW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDH9t6hMi1eAxmmyoPuA9ovSXM5bdMHiKR41juYiv1wLLnQEMbov8MydZy4XGkwiGaxACgLMVzDXYiq9awtnmVT",
  "key1": "5eX9N2ab4yj6a44fkyrLPLk2a72J5QYZPbXokGJRTUT3w4U3gk2cycAo1oLST2rB6BYECdAteNvtF7fbjdi7xEnV",
  "key2": "4673t7MH1qW9nmtfKqgktw2eHjotki4h32ups2u4Jw5s2wUkP57v7bbco4mZQsBFcxcVumjhbWx1VtsKtxannzQH",
  "key3": "2zrQJAkwSsrDRRn322DQR5RMeHXoXYPGjUYXcC9U9sxKLgRjtBxjPbPi5R4JzSDxNjT7gSr65SKZ15X4GU8ZoutL",
  "key4": "3oiA77h6ZivMoAwvLZz7QkiaEKbbK8eAcgYWvynDNKNTQBeNHQKZzwNZ3mcSq1XYPoMpqLFeMuPQXTjPuQY3aY4b",
  "key5": "nMYg1o9uJHSFJ3okmmF4mD4FaPqPveJNkF2wqt2A85eS4zbmFtyabANsBQ9Bu29fSPFF28SdbY8SE2kztP87Gpf",
  "key6": "4iGSdH159TmP5PrGweAKrhGfd9vxHzJuY7PiZPwMYfb2gjjv4qCrmt5641ydRvYc4PWnEgPAXVtFsPTH8ZXPR2aj",
  "key7": "4wP2xA1CHZx523beU5Mxaomx5B2pt6isz7auZ4SXTrQykFaF6ycMNwhsN23TFQujjq4Nuicf6U2tzWMkRow4rU8X",
  "key8": "3CqSzQbh5e2Eb3XSvesQ6PcSv9gbbcEaFYKmmkqCK6XG3tSKVuXGNaSD8Bm7XLBupnKimTuyhGW8EyNkKNydyoqY",
  "key9": "4wcL3mdudxGt6SzNE751NfPGjobPXSRsVd6fbioEKrTVSTYNhcNoRvw7YrNssjyhbBaFVJtdYzSGGkAo7ZyxQrkG",
  "key10": "oMBpqXKMGA41n2MGw1te4dsALtwW4miQcPgwHPyCHzkkpxc3AwkTUr7iksBRDpTe3MfCgZkboYmqjVXjExzQWHe",
  "key11": "2dmzMiZs5kxvNSXdZKP1HuNyvM8Y7Z3NxhqCvu6sDaxBYcrEjocYk2Ja2ukyJAxJMNE1sCQ7xXujiYzHK16sU6NF",
  "key12": "3wu44S7ZZYEVjFqrne9JAwdiWz7nnNEK4x7uGhLSm2aAy1Ywongi5yACVhGxbc4nokhgWNnXtko19MdqjwomgmUo",
  "key13": "4LcCK7j3ChQv8EcZFYgPUMyH5B3d6WT4hzasBFhQsNLspjz83DEnPPy68WK8aPhbedXeqcaoCtX2fpa5UWsxxWAz",
  "key14": "2mKwxNv7qWD6u4uNcCN4Qc1BPAxP7ByY3Panc7o3U62HgFnF7QY3m5AmNCj8uB7j5aNAzTvtaHyXJRpoVmVWZk5M",
  "key15": "497VFR7FBgAKkD5HpT9JgpoW8j5E8kpMe9fVnquzDW9UW9ja9GSDpfiGxYncr498zwr1N3w3wAm2B6TGEhmxCbe7",
  "key16": "8eBufpCrZqt2X7Hef25nqv2t7tkUGGafWzqao3tnbyCjhEsUxA7o5RRKyZRQP3DbyVNLUyocMPFfjBMXVnXQKPD",
  "key17": "3BijDXDS2ixA8eMvWm2DGjziqt3r5X8oaHyXv1w6wDPLASDmcxkkoP6ft3VT7UiRkGRvjG4LSDW2vP6sr3kzsmc3",
  "key18": "6TzE9bDkSCU9nENN45VMakU45vx2RNNN9LvwAKUnXgwhPNL5joYBqwBaK8PkHdTQ4P5GkCgAfd7zqhDFiGuKpzw",
  "key19": "3aiKerRfVaB31vUZjpkb29LysxuXJTyN6yDXWjU8Ct97b4Fuhx4NX9MCJqta8SudDJHhL9xFtQpUSvpbxrf9JY5R",
  "key20": "3ayf291A9RM6XLw9hUbE7TVCFAxH6y6yPUEUp1QnT5U23VzzWHV6yb3gzL8hcazZo7z9zqwtTFuiYsBBJ2DEry79",
  "key21": "2DZdUHaaGtYap4BRk3RvadARsoX2ovBg9L9jxjVHarbprFRt89ayzh7W7SgZKFrWYGT8VGQdcnDiuF9fjpyKDKJv",
  "key22": "fKCdNXNDD77pEfKMne9cbGrEs7sazkviUmqConTcsTdAo4gX4GDjeSVXRu1rcaa6FqcufYJgReSLCGX1S99iG41",
  "key23": "4B9rYFH28sPJq19UT6GBg8unN5NCRa1DvDPjG1HstiFZ2nRXv7RuaGxpJnHZjLvnfrwEgqGWSJT81drFaQJRhU6Q",
  "key24": "4oVGsEBovGaFUddL6C8uc51ELy43mXFzecJU5xYzEd1ZM6AS4qyEYjNsDi5jhBpKvoXz52MEUJsCufiUA5Pi2JfR",
  "key25": "57CHx7JwhHcfRUQpcT6NLpSmywqq7AYpnLDTkydfQkWSwp6YwsixUhWY2KEGTnmoKSaMrBFQ7UFEg61hVi768M38",
  "key26": "2CTLtAYctKWeDSL61wEjod172fGVwbS88Qfw2jBpUWR6WwU3d9RQBi815DjDLRE2yS6uRskjaeS8mMGFWShNfjHA",
  "key27": "4brFcuF82jzd9zq2z65W8dpWn3dyTLKGrhCKZEwTtRsqBoCHfsko2EmsLjNYSxUwpCwcAGFvw91RpQizLip2jnFH",
  "key28": "27DJwZA8TRJkGhYdk3c2vBnpMV6sDxEcWgYeBFuPxLRLLUMBMc53BjieooyMaxFwRwo5vDuHuAJuNwxAP8a2vHEE",
  "key29": "2R3MmURq6PiZtWesgsYb93JpW3b1CxpTixgGq4GEoBwNfNfQxyDSfJk3gnUg5uMjHxyUxmEM3oU8fM5QYoxpgSJJ",
  "key30": "39kg9Wafiw18W2eiZzFFgowdmY7wj1TiX6kQmBZbACjKVNdbyxywyHmdqquQu7hQ1aXzdWSfAAvdDLSs6QgSZYAv",
  "key31": "4zqoZ7gbKrkoviT7rFeaf6CSN7uo1WASHEYAyeSD9zhk4bYUThtPeVaDxNJDBViYv3AdCVZvf2D5ZL4Ga4WTJegM",
  "key32": "2YkCdoZtrzxUMLXihhP7j5RNHrpRXeHkMrCe4zCpGMmypNwQSbSyE7N9H2oFQttKWe7jxpTjLuTthVug19kynf5P"
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
