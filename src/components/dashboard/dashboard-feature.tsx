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
    "3vNsUuZKbFHdEW9APpxjS37bckZ5r2uStX3TeaeAiEXPuGBfd5qqDNPVwz4wtKE5xhurvVK4NgQTECaSLxVx2559"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHbxnHtqik9gDM2cVhWvs8M5yiG92VJHW7qjFAhPadVyk8JrPvAVMbuSbhYBS5ctYQXhxyv7Mv5CZTt1F4YFYza",
  "key1": "2Ls3jbq4rjkmYc3XqtDLtXQ5XoS3BvbwXwLdMtA9dQKR25X8y5d2Qsf8rM7c2WRLSjpjrKjqcjQs9RfvJAqVTwPb",
  "key2": "4NUx1KyQSCkLtVfkZHP6NXsZKrKNaDLNUNPHTMDNuJfRBoLAM6c4Sno2EGFgDX9EnLwavVrUx4msxBfyaWHZFaj4",
  "key3": "3LK8V67itVwrRf37kEakXGaEZCmzuZydsFsjaPA9DuLmTfTv17Yj7wE8wdZCtgVTMfX9EfD33MzQNCHema35Jk7Q",
  "key4": "5eRUc2ypuY8bguKU6N8bt2KopVubM6Dmj6gyi6aur4Ke7hMFs11AjAzE1GVyhEYvYiay5vgCSi6RSQrYUsArfisM",
  "key5": "8WHdHW3T8vZjoumEZMtUeoVt1yW3kRR8GKec9uXW6sdFyk7BMVYz7tpQ7SkFjKgtbyR6jW6HtZfpHLH3rBFDFpE",
  "key6": "eBxdbotvnPXwbJ6dhCyysuc3W6m8T5LPMJBFphRQpfioTSBGyyb5xVPZBPXQwCJTHqcySegh1GkSLxDMiJAJWHo",
  "key7": "311MwBcp8rSdxA1N31nzf1uMiYC3Hfr2t4bRVu6U4tr5UuS38v4qZW5ZBUmioHcrYunUSzggxLoxtsuafA8B35iu",
  "key8": "4ApC796vZfdF64LKBnxfR18WjFQwoqPYW3FczzkaAxHiosoCFi2chcuT2pDyj4kReBKNziyqdwJtZP8jM95k3Sso",
  "key9": "UHj6MUZyBs6sBLJ6mvStzmjNAyLhwoHcHDs3ms5mUcERsAV8XraQhBigawnWfs97HpvfryWtnrxVnB4KkFFYZuW",
  "key10": "3D9LYTUiZWNfdvaBrCj3rGDh2Fnat4Y59DfSFWnYVXSzBtuoyxGatg1PoNkj4yNoj7yAzbvk265oBqFNezgHwzGf",
  "key11": "P9hLGgjqXr4mUr2i9kiuEX6rncKfNy6hikierg7naEmaoeq5qPPY1sKT4hv1fYYk6dkHCqWMNpk75w5XBfpChX9",
  "key12": "2Cvci2o3AZecUFSHFyYkEKepYiQH3hZY1r2En6aVNrXrF7GgWQu7JknGN5XY5i7Q9WVTPS2xAFvRSeVptHDwYnSf",
  "key13": "3SisVinMeN6fc5U5s2MFzp3G4mNitYRruatrGGfoWQe886XPKHcwwxrqEzLLYdfyPeZXKowVLeVz18yuX8bx1W1Y",
  "key14": "5SrGuW4dix7rFpqFUEi1dRjXNYj7Vy4r75C13nw9UZokifoJ9GMNpFyXuR2rivvc181pbe7RVftbuqxDy6tQ5fXp",
  "key15": "4N1vjZrpXtAZd4ciDxP58pSrPhfRhCKZG2fB2KLoK4KsFRwwgaXZtmguD2pAGweNuttrCt5LzAxikRGirm4FYME1",
  "key16": "5d4eHNeoDaRoj7Lc7U8DcTCHNZNCfJWQwY4PTp8cV81uziSKE2tPdxnKPmhTUrGuYsdEudAXwzeEu1aYztTwRsxe",
  "key17": "2DeCMJCHM5epckCmLHLur28yzkSHKLbsRDugvpucM2qZrH7wrLLeevxByaoQdvQFAXiWrqfJHvqAuv1RMhit3qdq",
  "key18": "15mv5LD6dqxaPPRNyCWDhZ6N8YNat29fo78PokSjVizQUYVh2DVECqyABzJ9kiVm5zuZMy7nB9wxNVfbEhn5bGw",
  "key19": "4Yy2eGWTeyXWANXXg3QTVJrTh7KaMxjQfaxnU74aTuvxege9jXtpuRheUgCHpdkwe4FMX66GEUzhyuwdJSgpEf4M",
  "key20": "28ymBHuVeRv6UKKCvaXpfccednN6wBgNu2JkbrCUQY5h5vTgJYucx8RgRSWZd7Lib7Kj7rEbyGHv7oiws6LifdP3",
  "key21": "4XqKYSmv7s6QzZmREzHWKNfHj3Zj73KLXeFLZG3xeVpZY6Zvf6GqL9exriXWLxjBVg67ip7WHAeh7naXVoqrFs2D",
  "key22": "47eYrqbvrxT8Yx9wTeoGfrfhPrEdJRSBMjyg5dNW2LE2o3zKbWncLoXHm5qSaDgvrE7vCBmxire6HmHSvxDX6Hwo",
  "key23": "5cTtmHewV5S3cNwJ1Nh9gvEp2f2C47yT6QossDJY5fbTTpgk2DnigCvjGvQRZv7TZg2Yssos4KYqpKgW1aD6XEUj",
  "key24": "5NRAeBMs8imqqJ575WsvUCd595U7PsqcpuERKCGBynNi9kwAD4V7Gv121E77hfzAfqbk9amGY7FJb1irDSpmUrKK",
  "key25": "3kJzSJS1PmjnGCajgQRxbwT7bBzQ7NxyCsmaGknWhGpiM8Ui6S6h5wKgmcoigm1BTi3HW2sdwq1F1FAUn9igMfDq",
  "key26": "5hnFifQKVio1pMgsnvQwMUVwpWr9LYbc9JnsihKm3t2YxRA3kxuWZLLjNvpH76sb66cwChhJLAGnHqjNzsRRDZVN",
  "key27": "5UD74h1xHo7TTgBFW2VTMNRseHLG7hHVeL4iULQv8iYCG1aoAVENNaJF9M81uKq9jucD1m3xoXrLrkMcXXV7Qevo",
  "key28": "51gX28QZVZeQuWxAPpSazEPpGZjCytsQjdhjv2qcNdu7akpLRpiFDnjx6MB78SHqweBmy32zjhR3K5ZqTm1eyxG8",
  "key29": "2oELD4oym3GFaNAGpgDRjxeF2kTAWvDcXEsaHH9K6vaPd11XZN7AzmZM37EEbtumeoeAQU5aTJ6kJjTjHVAh9SiW",
  "key30": "58Wp6JdS44sXjTPx5knrpLUcv2jpij18d5t9VQLQdg5n8A59HCixRaJGxVSXvF6oqbJ5Kx6se8LBgnq2rAPYZ9UA",
  "key31": "5rm3eKaVmaBduL79z5NYPHJhsVVAyZFEgfgsfzcDEfViJUuZroKehShwn7LN4ioj8oBeQ4GW2abqhJhZUm8z77w4",
  "key32": "3Ga7S1CAidxJEdbc9FYaPmM99ypvJTdeSNftWQ38qwPeZ24aqHkdYx1eHE6F784fczzN8C97NBrEMLQnFtHfHqa8",
  "key33": "59eEKYmNmoqTfUxVmrkfmGrd51wMyQJBrTurCNpM6he1ZjdbK3UNb8SaaBbKmRiXiPgHQB2HMxngYdWGDFjGifRm",
  "key34": "2cogiZDP5BGQoRfWhXiR2ioN4TRjczeZFdp7KtgRWZYVsAVyF4evTmd3aHpEudtu2r9hbxdeJHBgX5gyVnA9C4cw",
  "key35": "3nz8vJyRkpyGq8d2kL99FRsXiU9LmJGE2np1FDTUBrxx1ufdufMbYw4roxLAA9dy82W28UzWg3KHHVv4kgGY3eSF",
  "key36": "2wbhyfCS7inpybUrCVgu7zKL9qSN4dYcjfjbWLHR6tjfkp7tQTU6SoBBUYGwQxHktvKUHH3Ezd8PFKdQWp5hykyH",
  "key37": "3w6xZNy5LWLQbtwRS39QMGC95Tp7jxTvAXnjpUorKHkiv2HouMYdtwmsGbMhG98577bs9PnkvptdnQLLbnRHe7ZH",
  "key38": "2ghYy7w6jCq5DXtLxTyMEFnpFz8N6srEFkwarHJNK3aJYwRtFCZcsmrxzpcqz8xcZnLu4TxnnbeC2FwZX1FAN3fr",
  "key39": "zG8nj7dZcNPgVo4PTA3uP4vSkdmQ5Gffzck4BGUT5tGm3fZPvNu8Fmt4hKfduVzFQdJS5aGmHv3CY9YYB9B1XEX"
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
