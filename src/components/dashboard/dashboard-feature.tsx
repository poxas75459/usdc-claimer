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
    "4e4fjWvvoJe383EfTpdEXRX1Z3kpdoct6VHauJh4eGT1UgsGh7RKmAra7S2yoed6kbHV5TP31VGyULmvAiTZtRL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619vhykvBMws2ekjkLjU8iFZaCx4tGSLmJzqTABf1qzaVRmD3S87Uuhz5B9pEVbnYgjtFCFRE9xMs6QDVjjMdL5X",
  "key1": "CoYiFbbeuYSjU1yVhXJbPtzrUzuf3aS52ztC9DPNtvmqSpmqbWR4fmPu1PPpnqrXn2xadLnxkdVsTVwVgxaYn7L",
  "key2": "2C917MmoDYYMCv4p1w6iQtqkwotRb6KpY8Cs4tUCwwgY5tAzsu7cR9DMwUw9XgpV37ASHPPhYXdUAGX7ZG4URWhC",
  "key3": "3t1DwfNXQjrehQ5zoUfZ3pegWNzS2tsyBhtVzBQ3U8qCqhMB8TUmNu2spBTyLwoXBf3UfMAw9oHBGjghtWfMrEGa",
  "key4": "XpqRnFNjvyLJBpte8ejRFR3NqG5v5VjA14AKEdPYkWwgQ1u8DeoyixT36C1whTETyW9JeX8FaboKSivYtRLFn7U",
  "key5": "5DEQ79CC2FjzYFNGkepodDhRmckiSKw8dQcxi7XsRBaWSyPxZw16TpzzYH5TT5xMgwBxach8HMH3diB1ZyVeTuX6",
  "key6": "4UpGdVtV2cBuoXqSX7Ppvjr82b9PVZ5Xki9RuEH1Qma87TwUYfe4C3uyBReXVJ5VcQQcbSx38KJZwvQ8XcwjwmKN",
  "key7": "2rbf5EmE3TUSpGBX8PwY5NAWUnRehDPFyBHB3sAbjHVqTwYmxs3QythvBL5Bhe9FYSikyu7zxBbZXc52HTi9FP4r",
  "key8": "51pX7HVK6zAk1geVwhW1a4s2tWQXymcf1h9KhDDzd3pviPs4veBSTvWRwfT5DVkaAgmve5JN2UfDJFpy4yyCjZg5",
  "key9": "MGf6ix8Q5ZniYtnTNa7bpGuRkjAaLtphFxXVXyfZeJD4wUjxoaXDxsxmgDzNf3VpyStMqwPBzRBjpTQRjASwFRn",
  "key10": "2qpfbxC9UpnwUry6EGaFGxDYaxTmf6Uxr676j3pFHmsvDrFRGMDXLgAaQdyDeBPBHMtXV6NJBc8t6aiQDi8GFuH9",
  "key11": "46ypyCMHi9SED16fsy6rhCzc3SdxN6GwzVVf1LUVDNDp8tt3G1ZjwKpEKoUHrYqBCGvxM5AEZVs7UVVEB87WDvJo",
  "key12": "2bcJevioFP1GMdffvFakd5EfUYenVUjyae6RzpEDwCbZ1evg7fYwMc32SkNu63HnBn53QpMa7rRRN9Uv3qsGNtH9",
  "key13": "2rerXwkU3LMjZEDAQNPpf3bgq8Fbp6yaMhAdzD8QDJ4LXwuXYAZ9bz72MxxtAUdm24yui1GufZGmdotasecY8wgV",
  "key14": "2oRHvYWJSXx4anVFbLSiELdkU7zA4F3asnGsdCDb5kMWMYSkTUSfQXRievVfsznBGg9KWb2VXVoYCSXU3WDHpygm",
  "key15": "eCuAYgWnhkqai2zdn3qtBxV6f1aXFa6LTjCpjkCyhScbLzfSy7qYitfaPTRGnXqtJfqqftYfrD8FeFvLBAijXC2",
  "key16": "XK9gXpJFGsEXCuypW9FMVzrkVVuAGXv6RAhEnpgtCAwDp58EMLwpAsD2vsTc8DMy6apXEpcHiHwthqkgmAmWbSD",
  "key17": "5ReZYJAipi8NTWHW6WjcqDpMUAkvRP21f9xwv9koZMXw88Tw5vxvvX6TQbk8L5FMwWSKrjtxf4vUUn39YAEoUtWH",
  "key18": "62HwvaJxxTuZqx49uj1mAKUQJb2PEMtjDT2vFXxdNhS72MN8ukwGL79GrmZ5kGRY3fuKeZDpQFpNmraTiX8v54mE",
  "key19": "2sKDTsNyDmHBYQbZ5CVyEBAbSmfBVwRGK2CnKQQ3W2MvMhoZjaWxMjuT2VhcychGqm9Wk4T5LNKgr6VH5fJm5yri",
  "key20": "Sv7J23xPuG471hwtKD8FtEgM67iyGto7aqB2jY5c6x8NiS63RCa3pyXjNBj3WixgAzFYWcuanU4uvJPYT3kuVS6",
  "key21": "2VkKwbJ8AbXRsDsyzFbMkuHYxRViNc7ZJTUCtR6Z3nvzsFq2GEg3HGqEmUHxmNg25S57nKFrRfSEhJW2mhi1FZK2",
  "key22": "262jQkPsq2Exne9DPf8UXt7c1ke5VhV8uFmafMjFBK1BWXXS6az9oHb6tK3X53NUrmrd1vXjGrpaVwxNwj7idp8D",
  "key23": "5nqPsRVTR4iTVLfjXVtJTr9n4u62jw8bfRf6EVkk1MWs718f5a2NYyBfNPHSSs1XRRVhVuUgkeFMCUX86kK3Wij8",
  "key24": "kpxgiGg41VesKVvUbpzwNiDcYmf7ZTQK3H9UbpEe21zAjAhJ8oTMSTT3b64wrhHpfcore4HUXn2CfJrE6jka7Z1",
  "key25": "4ypovkUy7XK6XXpub5tPqnVNN6PwtqDJu9NB4DyxpNJcHso7ir6s9Ais3t8acWdA62tFC4BrEGBr5zWAHRxVtdwk",
  "key26": "Yzu2zC85UvJvxtGSqaxwqX7ZofF6yZA7arKK99oywkfvUKZw6v2LTBCAmFf8b7S63LYQZPbcohePB1PYNuvs2bc",
  "key27": "3qVVu9vxdWVhiyToefEGirgZBLR8vohPZkmYH9Kwpb8HHjSTmZsuMuvhbSJGqdAqKdRxai3ZkTEjafLCoVanoLRx",
  "key28": "5U9UjVhmUZFWmMpUfJZhnX1Nx8Eu7PpW1rV4DoGLc9ned8itTYWfSdWs4dA7hPVyiaVRVHDzzkkNHvshmsP5uouz",
  "key29": "2cf1XeVYGbw7Wg8ALC7EqmK6hXf6Fq5PAjAzTYvba8ZbbEJGV3CAY8Pz29xocmcQrybhoirq2VbGcZM6UpHFkrn5",
  "key30": "5oGvb1b2w2ZmKyRyFMC81kwfPjaAB1uQWD9SwkYxx6uoMUGfWVBeyvMSin87WQEP4DbseVsaUKeg7aX9JpAuaRBD",
  "key31": "LMyKQuWimQ3A7VMHPAHhFsJ3E7Vk2yUrM7GspdLaebqXpVPwkvqg6ewTDedqeUfB4stad9kUhqhSrGkPCH9s7tu",
  "key32": "4oPWr4hDxUaXu4UDnGR86zS7jseA7jxFpaC6GMa1qpMVZtJwKyStYUW1aK3DZhT4Ey9feDTEbKri6MRYwy3rXdfD",
  "key33": "4wfQ1JEvGVeRkyxBnjEuFoiicvzZ7sD2vhpytrxzExafSBF48nvAzN2jHNkMiPYqPwgE3GWw47UiNjoGsJwjNzRh",
  "key34": "2NFNftFZXWj2keST9eTjV4Sa9sMD9vkBbgrUxvsVW6dHfkWC5hZev6bSNb7nfkirB8hMN5c32ZhQ8Ha8ozMVABqD"
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
