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
    "3gp5sPT8QPoLBYdTVen59VBxtixeEio3ftVmQaTQtdtSnAvnmK7N1j5v3cyQCSisvdXxqAM7eRZ7fqwrdYiGjcf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpFXQESGUUQLRT3a3Q6gumGBvSYx5tEnepyVeg5taZESPa7keriAXCcxnyvj9rjXf2ZpX4pXgBQtyZvxEPX4DKQ",
  "key1": "3HmBFuyUQDvrSjUuCfyQXrap1D8Y4Ss9qGgaS72UGTujAfEaKQvFdivunUo1JW3E3C6Qy7bGinRdd4mnWCseHoap",
  "key2": "3qmFN4AgaRSEVF4CgEYnjKjnX11K8s3CQYz1rJ3FH98yBHAPQtLWnYwYMHq1Ms97gTZw3ufX2hacsfdWxBj3nk2d",
  "key3": "5iYUaUfTZFALQmZZQoZVrWKkMcRFuNiD9msWn2nhfzGEJc8qVPr8jA18k3vGJRgrGPWW1DebmoqNd5HyMjqdq5wg",
  "key4": "2XVCXA79mXaUXXnhNJGJJ7sxBo3TZdiwnX6Zq1sdyFD5wKddHufw1V9Jt5wckuqYCDCKK61JNySNEZevMzhaef2E",
  "key5": "5nbBP7qKqj3Cy4pBh55rfY964gGbdtktBwp5LTjm8oczQP6xj7HobARCSJRFz6z9Bmz2XQ5JbvLBA4hEQYCrThZ8",
  "key6": "4vkNBuxUgSqWJe4K4WAbTPQmwCZRzwCpnTPRNZd2aBPguPfeKZiYEeuqtrPnk7Z38NgbU5XhAj9TaS8cE3df6DeQ",
  "key7": "5Epjeq7g8YsGGdze8afa9GgjPSLZQHBHGzierCdo5v5E8ReAtHj9ZiSqnmDRcxMN1M62vrZv1LFxxzqsmyvFm2Kz",
  "key8": "3d7GsWhkgwtNiqWxuiPWaesj9Go7rHyAxVN9DxYq8DEQKqu1FwLAecetTvXxtwYK8BUa15DgAAvi4Lbb7NMuDwZ8",
  "key9": "3wNCpas7VmTMBoi2k136DuXFNxGzTc4hQR2zbswRwYzTrsb1dWyhPB4KtyjZEUKpnec6NAmyPWdesD24XsWkkp44",
  "key10": "5sbJJ9UNojiBWhgUJNnsXtSoLz8h2ZLgAoP8xRZtgZhohbqUJJjtGcWFkXD5ypENvsohEoWkAMkt6JvfnAquDVQA",
  "key11": "5UMwoHeHWLPiKuTWrN6vdDqfm1tgzPGU5LDUNn2GDgnxiGPfk3QSFBhUQvKQn3YgDxK5muyyxzJc5FxjhfGTvmpd",
  "key12": "2xZAd8Xruv3Z5yQLBbGVaS44tdJryrrpKYUd4cBuq15SskRyAGCj2j6GvR8pTQQddg8A6CLWciGqudSKajUiuUr7",
  "key13": "4gMRQJahMYHx2WbXqgZZyBeTKrgRML2thonfjgcDTegYHtgkCqvAJdZ9QkwyZtzvQRyeNGKiRMXf4iHtip2MWe3m",
  "key14": "SFoF3gyEcZD4V1Rn3qV58s6rvMbotNvb4Fe2GHGtPBZGX59UmVjNGHjDZFKk5KK6WJtuzwRoN934u7oboRqW4QC",
  "key15": "59pgKySoJ2yKbPuH4PRdQJna5zJZ1xg2ho3o1wXP95L3AeYNosvgGGTBQeooh39G7L4Pizt9n93CFBdWyHDV6PW1",
  "key16": "2VtFRRhVFE5LqjfRXvL4gnzFPfsDbCjtayeih4TVhWG2RgH54Sm2w4KVTDn8nDsPM62h1mf9qizzEzTPBwNjq5s2",
  "key17": "gKaa6p1jMfY31rBAGAHkKNDDTxfh4NiSHF6L34kwanZKw9TdbGjunLH13nuh5pQLaH4dekf5PGPoe3UZdBxCzmZ",
  "key18": "268GETJbtM9CWP6CK75NXJEbNEwLcTgE6YWUVdAXDoDbwTX2V6EcEes469AXkhXy9Ecp4vFKxiMaA1PjTKCBfouu",
  "key19": "5igwRfS252fV5eGKZy5WLxPexDugqG7a2U5NXSkrm5t6NVvmSAQhgEGcJHmvW2L65zeQ96yJftVwoxC6TmoSW1XA",
  "key20": "3BJ74g1G4QsY94FJMsFLwo71c6BHBgZQGArerVVyddK1n9YjFMxZkkduthYXfhy9vzFGvd4q6GEXxPt2ysMyQeUE",
  "key21": "2FN1qNuiR9eCwpuhWRirUGwxYBU4qDW8Dkk8XcqpcSmKxWSXGCV8S1eUX8eJQYg6hJGofStueKA1UKfupzok9XYU",
  "key22": "4qfKmXuDZSx2y94WoEi4SWwU4wKGGGXtnX5HkSFmm2VrUGAQczpeqLSWCmoF8qgmdq1y9vfMyCGh4hJK5u5X93qt",
  "key23": "5RKSWcDpdprj1gtvoBvGz69o1y7wvaRMkbMgKXBaLKUqncUmGf5BBVKn7QwiA2Ye8LBWhpDUaiMqCFcGM4668WYD",
  "key24": "xJfKHS2gjQU9qjaKCZwak1GkPUyFmJWhBHW4YwVpGs2EUnN7cH5HuK16LFk4V5JzLTrpeeGn17bMqLqxHodwA5w",
  "key25": "45Lk66XiRppiNWsDR6casE6xcxyLtJvEkouie3gzUqn2SLzKer4Re4wnA3hhf5XWUMuR71GG69sRYQQdq86VCjpd",
  "key26": "3qh1HuAkWsKN9mP76gzVbNcVcGk2rb3X2NTQy8wLKX5fB9ebMCoQGoNR9VPNwVS7dUyZKLktPAnPJMe5K2EuYy2f"
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
