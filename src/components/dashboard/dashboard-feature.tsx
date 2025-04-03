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
    "5SwXjGZSMQMvanStzGneyvNSeG9bk2AFmGKkwptg1dEp9ujQskdrHFPv5tFr23cyv1JYTVnwwWU2U783x9Lpgqzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzDGe5XZ14TT3aSD1Mzqr7MbNF9sFWsrFtVyMHGkbvdKrmj5cZd7x4iWy5cW9QZeC8LjtWV5rBHQxjiGm3L98mM",
  "key1": "2LDSYJGdEU8UkeFJWiBMpxUGzvqwx1Sghe3nu5PkdSVQjSiDfpDQ8pkfjbzU5Wm2uTfFMjRQt19tnX8vpreR9LbR",
  "key2": "3K94Xr4wZk3dkJUvqjjAWrkteHdPJ1BDduK72ydX8FQ6qWjNaZrNpXMqHRxssLXGnDkDKaBvXPHsa41Vsr8FgDiy",
  "key3": "25Q7uYU93s8VEp2ZbpnTSnM57acetyJ2FGeaZ3cKe3hLNGCmy5AhE7k1zi7WrhpbBbZB8p8Aokv2EQbTfbH52Hvm",
  "key4": "GFT1rqAVHtn7A1mZsCyxpStTkY6iqDoRLqPDCG3kEurjNmtEzSGr74oxYgJTamEgHebawXgTpMDpxByCMziNBi2",
  "key5": "zbknyFy7jPidytwMxKSrJt4XfUWXPrCEbjodmF51My5KD8wbZst7f2FZmgHyurM6ybD82rdFj3ng98ZiNCjQuJr",
  "key6": "2Z735CumU3TqnZhTNNVeAD4w7QKKwemWyrvFBeCAWFJmMrNBLJqiwLQJa3Y6KWE9nJyH1ihUVae7gm7DK33CdDjS",
  "key7": "4Zy93h2MegJeSyKqZXQ1kx7C3VZBd3Hgd65YQbFuLQWgNtSqzRTdo5MwVK7W4ngwqzi8NnS5LQ9QadvQfrzrx2rz",
  "key8": "vyoGBQURNwh92txP3NPLQgo6mbA2szaAeWuxgDx6EiGZCjW1bnDHB7tPfrN5ja1b3VPqDp32fNJwdrTzY96FqcT",
  "key9": "5h6hW9NPzh7MPns784HDT5ypFpMd8NtNJ99fqJiokMQ8ycPpqoYWCy3JxiLhMZJ6kkdAk42si9ejQ7sXnr4KWM5B",
  "key10": "38iBFeNoz4jSwBY1UptHMPhEM3vkr1vKzEGC1mpKKKQBkcW3WqJg2VYrzgxrvqzsuu3g2aGWcSjsiGmecaBV1M7C",
  "key11": "RiJyrkQ8jw1Vvg9KhzXAQrmQ78SZ7iTnjMiMhq8ppwY9cmFqmFijynYYZxJP2ghpMi2t1oqA1rv3pyn57k2PGvY",
  "key12": "2f8rBh2pSA7dUMnZoV7JrXKWeWueb6CaynNQQdL6s9v13beJHEMQ5XPToCJmSnVG34RunjQkc87dYZA7FbPUxx8w",
  "key13": "22eDaziqhoYTYZydFpcTPQN35erqei5mA9KLQTXFbWy4YehbUFUDEBKtFXyJF5xmnhSoJuP82AMDC1f4Ug5WD5kP",
  "key14": "2s6EviNeaXPy7PoTQLzZhnebMQ1TjRDQeGKLzEoTcqAeqWJ9Ehtoe9wm9B1RzPjVZKrgfaiVaPz5ZKNoYrsgx6u7",
  "key15": "3xnuEUK3zntLutwgdYgnszcpXmWYF2iZwiUfFmvNH4pT2e3baPQbKhXemy4xzrsqTUBPSQbjd4KrzkRYkeVbh1uW",
  "key16": "4eqH6xc3RjFiNBbMRo7f7Sgfc2ZJU7K2mLbY4SAEZesZdxCMXFctCt6iRhwUdPaXQt47RMLjJCwT1DMTWCwUaJFh",
  "key17": "3TJMrFYSczSzP6Jjisz2t2nz2X4y96mXUtgDUZdCe8cvQ5JJB5RpRVEEFw97yo5jn9Y3yf5m2sdMhAKWhsctXGHk",
  "key18": "2ENHeU26mQbgG3t5EbxWP7mpCtQ3YfCyRCNSYzmutbxXMW9QFUPcafAvS8f5GfJuxLBNXSBw9SJExDmta2aHUbhS",
  "key19": "hKFwxYpmGcTqWAqMMqnduXepVzkZWuKxMvaHCFz4xhjmY54RaTLUJRuS9FAezqp4KR2dsRZmSedD8QwgMtBGT56",
  "key20": "38Dhfj1RioSZ4T1GHDY2MnTNAugdK87zRHxsgQerpZ8FT4trciDgNquNmNqpHy8ftx1bQRu8RTUELTZJZx35HnCd",
  "key21": "fLi6vyCfxbcBRJvnZDp5y4vWhLdHJcZqwx3jGcF5u82WYmmM3UQxY8iLwyzUQpSTX4ckmn1dj9eUuaR995zydaK",
  "key22": "zxb8UQeE5mcg1CGfchZi4ACDhg8iQMf3uH3Zt3AwCbbJGP2ppEw5dyiGUGfrfVXtAM3Tg5o9uiSy25qFMACf6TT",
  "key23": "3mfM2CpBwvZJWfp6Bh3QmhHCj36CjK6xns61CvVon3NUnYLsdbvmUtayQoiqGq1eoVT8awd7YAa6AKuAQywSXs77",
  "key24": "mDyMcTc9dCBhW9R2UYv4aAuLeP8ek7Y3JgqAJGTz55myS2VnnYnFRwnfrM3pXf1RzmmwMTfWgcN3SLpjYKMghMG",
  "key25": "23bPDw4C6BHUp6aYBdEQ9qnRYkKzpHsz3M5ce7ENzD9J7DebQedzvS8T98RGFrz8JosncCKkZqrVTiD5ZsZPg8KG",
  "key26": "2XR6j2D7a6BHegT6ddUANYvjabHqyMwjJKBEep22d2WKeFuJmYLU8n9qYxjtDZPadxKM8eZJB2Uc5PgmBPKJo4rd",
  "key27": "66oqUwoYDybMXsmNt9DjKom6uiFVaMwZkPVjQsfsvsToWwgJNgGP2aukEA2eRkHS7YXTSyeJmGKDq939YsmwQcWu",
  "key28": "4Cw6Vcm4V1Y5QsFCxvuJeyFegiwAKqgSixE3dJtNCCGPrQuZ7PVK9wg1qjoHhHYEcQKXd623a2z8YBkT8akzmnMf",
  "key29": "2BwVcYN6H36mvcM1sfKAJ9EpR5i6Q6vFEoaHviQ9fqPFU5pDW9kkhYVhJYCfZBUxqQaRDxisMbRJmo27yu4jjYuL",
  "key30": "4jBQKoJS5e6ydDquJmVhWWcCd5dqRbVWGwkwfUuSDW1jb87vzLqq2xDr7VSpaiCzBPdvQNzSxHzLnzTqHoW5gc4n",
  "key31": "3XQzhuUkDskxGc4tgp3RUxFYv9EMBDeJAyjRRmt1roW5gw6eVHoLKSe9NqsTLjTgDzeXk4TaRFjAqqnUFyxgA4YV",
  "key32": "3i6smF8nAV6WvNcYXMwKCWZrMsB3iC2FReFx3TD4Zasuk4kmR43M4Ek63q2nVhaxgaCL5D4h8iKtMMMek3YsKdV",
  "key33": "45Hg65uyVmwQsB2EN5t7mnRvQpYD9C6c6Yvgasgco2faEqptV9oevKQChvsNTceX7ZWZBXEtTkQhJ3iqpFs9Zqfb",
  "key34": "3r89BFC62ouRj1Ao451W3ZXrh3Q8g6dxtDPgi6uEUNLHZWxZ4956o4X9jUHbMe5hLEBRHsUu8dKEzQMoMfRP2h8J",
  "key35": "3An64WY7myxwc8C26UTZj28Hssu9HDoEfwQDny6jnWGdPysoPNK9D5rPQ9v7K16xVHw2yqmKDmgE7qGFxbmkx6ox",
  "key36": "2oGWZteNFpNX9Fh9wgvsTsGoK5X3fnvCZPNNq7aUg1iBir6cF9UKoht6VeRNxD1JEtejL2LgPoqZcrt7e1gHymRy",
  "key37": "3DHqvqpfPq4PHK89Zm2F65tJ4RKEe6eN45iSGtHq7eP1ESmLS7jvXQx9enafd9vx2i5T5sk9LHJ5fSDKo7PnphgS",
  "key38": "4EyuDKCm1evMTAFHD44k5v8tXFgSPoPuw8Lcm7Ef5mvVM5F5GTt2vpw5W8mtsLwR15reYU3nN1CvAkN7PdRm2icc",
  "key39": "4w1LURz3oqtH6T7JGNdLLGHwmc2AhP7SoXPjFBg46PLKzYngNuDMXKwmrkCpDj6wX1fCmgzLvpLoKfn6UpJXBimg",
  "key40": "Zr6ErqySLQn1MFgT7G8RfkW7mr5iRyrmgA8ezQWfSGqK96HG6H7BchRh5t8YA9ekoRMM5RE2LaP5hBASLReHtWw",
  "key41": "3zbdBfau13VbJXLTHGcuCsyceDLrmr4GwtRpRHF42avyGpQP5DvxMQcfnEyDeu6K5FJEkgvaWrePdeaR8kJU5wXK",
  "key42": "sn4umLzVN9HqJXzpwEnsSZobGwvCQBV9S98sRvZ5uuxLEmcBL8iybkH3Ya7W1HBxUtLpnS88WR4HsQfS917eHiG",
  "key43": "3v5ey4FhJKH7CjU9huJh7rgtMScJG746SuqL2yVtNdobGzsqpjQ37ZKcsPE4tHXk6eYnCnLWrTrG3UsPRDsNZaHs"
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
