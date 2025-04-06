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
    "3rPy7JSYAEskMVyRT3GjMhAh45oJGDrm31acY3hV37vMiajSijoDMDdxT6smgjLnKy4jc5uezfSk3kkNjv1aYhbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJBxRqD5KUfexvLoWTqShF8qSvJocaiVhede4xaK55nqdzsUugfSyAxXptBXfSCezAD8N23gyjSXwvwRDJZewE",
  "key1": "XooKwHAFQCEAiB75QfoKAkSpDHraapugD1HixRB9VuD86VhepHARVrwwLUJ5FCpBSoYsQ11TTZTEzHqsAVqEJX4",
  "key2": "4Qvc65hfjr3E7gEDMnohGyLZyU9pfir1SJmcx2ANcAsNRMjdkKBrruYQrqyw8inhDFhuKXAyQUuTtP58yUWQ4ARx",
  "key3": "2SYw76Hyogn86NGvPyFEFRtDdYwwx78BkeU73cVYRWfV2Ps2V2zCG6VRehBLVEcQpKUZbo8UmoV7brgBQMrjMeTr",
  "key4": "5qsKfpjHjGD9rKFefqpeM3BeLPTDpUkzvM9R36ngvZBwZwnJjKq86kkQQ479oAJCFL199mNhVReBPTuVyfqDDvKF",
  "key5": "3FymLcFWmZ9DFZZG83b4QRUNcM5EhM8F131JAzALnG9DpXzT9x58buGSY7YqNj1s1YMQiNq7j3w8SpKURZRosDGL",
  "key6": "45M3FkJWD7jztqcSv3ByomLDJtDDqC3vQw1GvxPEWThHev337sKbq99mMMQzRpRXnP7jok7XY8VqKDsb2w5sXR4w",
  "key7": "5hxERnEc5enxM7uPtSeAYikBMCbYtYZoa3wotAnoHGoYiRb8tUGF25mHGirq8BNDLsnJEUgdrjYHoSZpaSSLsGbE",
  "key8": "LiC45ShKqVfq1tfAr7zAoTziPy3KLEQj2Q33AW3U3PSdjrkhV77obC41ToftnzNvidDmbGM1vaZPDFq3Qu9CzxK",
  "key9": "3d85FgX4GgJYjFTto9gEBbSiSGpWAbaKrctyjz5Ta4N3B4xzNnmwBu6HqnrgAum3uzR1wrTVk6HjspbfWr1N9M8h",
  "key10": "3BPz9wE4KmXCrvJRT7NqRgfnhFAYkjGGifeJDpDz5uDh3EQz61RneVTRct2rfHnnGK8bLGwd2YrFLF7xdNMLnWS6",
  "key11": "2fne4SW2CUjNMaA7Qi4oUW6bGUV5YD4oV2MZpdPgW9K7Qck5qfztAy2gnvgkQWVzbkXXafnAdgQeGkUNqwQbgHCR",
  "key12": "xrPgUt1i7MpHQfqoimzkANAzUJraGCiMrBmN8t7CVy2NLfBcNwHLrGomTuZcWXeqAMKggerPNmHaSu4z5myC6Tb",
  "key13": "8RgUXhJzT8BJLeZ51LFiNhosecCcT7q8PRbbQiv4wSsxCpEjeAB8iKmdbJGrvo6X3h4dwDY5qiGQ1aVcfSynTrk",
  "key14": "5GUEuCKkJSR2YMrfHE5qfhHKMBaWEH3yLrX7vUrAzqQ8kx2qok5rxLHdQ6y1edauwkaogQkNC3kpGwbymEaezHZi",
  "key15": "Bkg7fV7B3YD6MqoCNu4seUA6rmWKJJxcQu3oboG44jxHmUuDvnPBjdjQXeqnodnkNKbEXWbpgssZQbHnCGGy847",
  "key16": "4xGu5ZSsXryvHgv22BG6vmwZxs9Tt2s5rw48dTR1Gp7SiFBWAf4GywJc3QQSJL4r8PGpyoN1LYfnunD6FGdBAQrA",
  "key17": "4KYqJ2WouSUiXjGhZn9D9yhsW1w2tJaMGxz8hRqcZzyB39sjR4yurf3vU7dnRo82aNEPLR8791U2ATTTJhEqiCoJ",
  "key18": "4xXgGa6MdQxVXuDkUyLTF4gSWssG5QNZ9j6iq41AdT7od82NGvQNBLg4JvFb6wWE8KH7kosgbQZZg8oLvpaWUuA3",
  "key19": "3fycbRW1QaYoPnQvZz3No1rYrduGof3U5BVuANTAaXLLGx9pRmAMAqhZwob5G1rSgbDcSCyApwiW7B4w1nLsbak6",
  "key20": "3TqrRaLQcRG15vPSDHLLh3Xi4UEHgAoqh8YT36SqsNuQhqNkRrpuUqzszGQSAKUjK6GXfbzHdi3aaufDqYuz3amK",
  "key21": "2NuoDhSLk8HR4eDZ8d9rBsLZyW9BjynDuiHsXZeV4endsBmJXksov5n8Km7Qra9wpvsEQfPJ39q61GHqkw2wjUmb",
  "key22": "sYs8vnM2wAacrQ6DhFRpW33UjGFBFxu45k6HtjivbMLwCY1geb7T8kGW6Gosw2H7ka7yAgYDKZqQXjbk6gaCKZe",
  "key23": "5AGdGyWtg1faqBbWFPaDur1oG8iVy3P4bSngjDxxr6orGY3QnMaS19gZJCsuLaDLzPfEuFZKdtKzi8rrcoC6frvS",
  "key24": "2LXWdbMGZJwyLNou6HPMTk9xTqQoS2mPEbJZZkLacS1LysMAsv25HJimYiqMRmG6snYzBrinqLG6wJf8DA45cqbf",
  "key25": "2VDXffBk7JtJJ4dmudmymXaLEnNaUzfzvdUcfbLRhHpXgU7nQYBhWJqqAHRbZTU2uWRBhVjWbQXi5FNxZS16W6zJ",
  "key26": "n2sZWGx8WKSKn6Vsh4maPkuoqYH8zWhFuiwG3SpB6RXVt5hoi8CUhYJaWrT3zyGCt93Uk79f3EwQDyWbMcovSQf",
  "key27": "3umRAU7KuQjs4fgyy8tWuSYh5ZFBhKuwQAgD5PN9BiRxp2zsnSsKqgbvJR1zFaULDf53ugpKX8cEYjdckTKBMdHD",
  "key28": "2Pr67d4syfz7m26y4qCGwcPBYFFoHTwjncyhSsCgGzFzeASc3VTkFK3RVHVYFGuX2yhzuWk5tukzss4E7EKjGzgC",
  "key29": "3xb9spajFhHSmtQMDcb5L5vvFunBEovxCYfFHvTVYLXaX5DX6nzu1WVHJjMwbaoEkxb3g23pFVyR3jj9Z3xAukD6",
  "key30": "3AovqRajnc4kcvpLtyCGiEvaHeN9UK3vqsgF3tfT1gTuxsYHGzGcK3zNPPu9jZbm8ngwhmu4wMzxXHu1eKbA4RGV",
  "key31": "3fJ4t4Pvd5sg3VrJyQixM3Ydeu7Ax11g2zRUvwuHyyAkpFe9XFrDFdDGsoAPRbyE29di8BSJDstuiztcZ2bLNZ72",
  "key32": "3kS9qqVtqsBJyeUQ1hMoZTe3oj1GWcEA4ucZoFWxiemYmMSe1Y7EbW6zH3HiVCYKbvY2GrRKzo8qv6qHKzRA8DtZ",
  "key33": "4Er6Fm54oWH5YvhLrKmgftfvTD2RwAmtmJ2ArDnBQzsSq7Uh3wyB1syCuSdT1R97m763oDwtMDdbz5XfR8nNcQRo"
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
