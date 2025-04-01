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
    "51n4MJcJVxExeHzW2tHGVzWpUPnxL7MfMWnaJj3rs3QQmwT9jjZXxfyYSDwEdUa22KsjqBmgqXgUBqM7r4AqKF1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Q2P1VKrops2araXnWSiS5Yga36dNRbE4tVBfnvT3ZSBYncUDeB2QTnvwaNNQEtv68XfZ1r5G42qBkVF3uzay9p",
  "key1": "5MbbeFnmcsQyHgGzQdBNzVwFcqPi7GTnAqq1bpEopNdcfKGUFaYTdUEJAHaaVGoCs4spiTUmTtaexzf3BmFmtfWx",
  "key2": "4WACtNmf71L9TAeQzdcm77bxePDXQweGPHJFgkKkdXk72bKYsV912kUDSkyMoHLukztG1Ydovm8tbRAZSs5RBh5z",
  "key3": "3cj94ZW7buCL8j1dmRCuiVBaQcMHRgD1CxQ1ANVeWGgKdD83VGR1hCygsR2etNq4nQ7DXKyFZcPSouWhEWi1wviH",
  "key4": "34HT2w5ZL8qVv9ehWTTh3ZZMLqKBRZRghSeEvqJXvsZZcmobduPVQ268ZLYiqUud18eLAQaFrZS4jWFNBUY9sqfu",
  "key5": "2Rjf6pdAP3tmtRyeWnCf88yj2HsxiCWacKWJ8ZFXqcFz7TawLuGynFr4DLEjVFYBA7FCv1HgZ3FG4g631uEZYfp",
  "key6": "3tpXh2S8wnsWxqdJhTT7JnhqYm9xAxC6vwLVyfVFv43ScqC1DWBpDdirqwB85ow4PhoBD52674Sc1f9Ez62emUfa",
  "key7": "3EMhAQwaWrZ1qwhmYFSemi48LjFNuTJUz9bGFQrg3LBzFQsKtDJi5dj1M7f33hnk1kwCHvCUqss79nSx1pHqU3qX",
  "key8": "3FLffSzL17JLsLFro64VVyVWnakTYrhyLUMK4vq2sdGeAM8xy8hWUeNg4qPwykeSw9DbY55JrN5tEn4PGAPjuTRY",
  "key9": "23iq7XbanzDi1nHvjA1o2ZnaeoadrsuNQzgAGHjSGsBjVRLFm7R6oQiiwX7CozZjPjYjKmxp5aYns6soEsmr7E9f",
  "key10": "3ahDh5x8xmBGppaM8PGfMzky8dFFQM7CcjWpN6yLXZsy3NdYNWYbrexLFbSan18NK5qksdfAU9Ti9YP9cq2yhyTt",
  "key11": "b7Cmssh5nuPE9Td9Vak1TekUbQ79i4ea35tH9Bpnv52oMDM5yNpKZ1HRXWHB9Hk6cmkXC15nr9Jk4Vnej9bvNuv",
  "key12": "5VttasTtQE2Wvu49XkabGJHV1iAHtkZJSp5MFBTuLeMckWmk8mraLc8kyM3LzjhyWxXHzLbQ3MBjSTqazEspgYFF",
  "key13": "o6TbyLYReTqQ69J9rtU7BPoK1hhcG24yGQL6ib14Tggk1VtMmWgQnyAJGLrodjESTaYiMJS4H6BePJztMzazxa1",
  "key14": "4zQxu39Q6L96HhsMXxrS6bBkDBrM3XrQoWGJhhWQpUbx7uPTiXpNNJyGeyU6G4TAQwrVWjmYX7F9LrQm92LzjUsF",
  "key15": "2wwFE5mfutNKDinuReSFXgKHaNcRVuKT1gdZLDrLVjzmDdvtCMLZP4j5VJ7Fohucgtw9o1tcePkQ54DGcxz9NPeL",
  "key16": "26pQa4BjnbVTcyiyweaDiY8wJBExeyufFmQQyAG72L96ibUfXqXZYQfrQShhNMfWFAfU6o19xRr59g7GJ92pwGDN",
  "key17": "532GfNhzXkTMb69ssqU8LHTcyhuiNgVGNSjrjWEzGwGdsb6ex3gyewnDCHxXdDGqs8t1J1Q2qktgZ87oWcB4qZAn",
  "key18": "3UvvQFVqBuRqNAt9YGYbNUPbhBtcg9Qi5N1hCQKwbX9L49d2evJ2CxgYJ89XrbqWRhzTAdtzrB683317cny68vKA",
  "key19": "3dVHPHPLeMADkUXGbZQUmLNsKCQ7ev7KdeZTyBk9RPTFvDAzk189n8uzHgvTPSwpkZQ63Nn9pL7imMDNc3xVKdhz",
  "key20": "4jpSuahuSkVX6Q6Tgq6QH9KGFTUqgb9TXC3Q3F28muNt5SgLGz55xGuMEtjuH4zsTw26W7AiiKTChDrKAT3SdkVN",
  "key21": "Fzz3Zs4dkmoNED9Xzyaa5U8Ncs5MFonaRXcwT452RXMmznakmSWdYKd56ZU41toy1yBj6LvrbTwfgD3iFPfkSPb",
  "key22": "A8M27eNPRX4ze7Wt5MiAsPKKM5sdq5ayaRztMgMsjUpyPkFVi4j5bqxoXSBTHwZrVBuj2NidVS5Q9dALk9StEXJ",
  "key23": "2hYeNUcKBEVMEmFAi8rb6r4mRLsrpYCvzstsBrv7FkMgetyofuWCkbo1CxgYp9juWuDK6nBtQAXsMPdz9P8Sw4Dr",
  "key24": "2F1TGKmz1cLn5A9TXVQCRQEBND3p6JLKBjbQYdKv23ZqnkTsVdt6mfg6Bo1DnKCE7TebFhHuSeBKZEmqYN6vUNxJ",
  "key25": "zCKcxg1FYEQsjn6Cw6KXVNoKQG9LbdyqdnnoGngivNNZ3kht9nHVpKZj3nBkBj8LLhARumRoUfUVkNLf3d4Neqf"
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
