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
    "4Vrp5TYzcZLuN9sU9f1kBaSsiCUWo2Y59ioXgBuKrwYkMZhCie4V5rwvWGj2vYGDG7DydywW8DkjZZojjTc89kSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhqVnPnqCVJZ5RRghhfkCqwo4bUYCDArHHE7reyBvMLJcJ9FNcYk9Mhm8G95ZxPeZZbkqvEdLHJSNAEf8E2iWHV",
  "key1": "23SVwmASiqqCwBYftUbscRRbEpWndrMw5K6M8RfvFUb7sTJxdCwyB1w7X3z7ukd5QHJtr1Q44GME44hREDyDP9UE",
  "key2": "3HfebE9GCss5risGzJ6RXLwRidYVswfLypFvhUiWNf7144ocvVeq91KU2Kp4M5woedhdBwAMoVBUfdVB9PhxCghU",
  "key3": "2HMG28zYBcc7JNDyS8hjAjFd7yFC9cMems3rxpdrS1JSSVE2Jb1BYZ3jtKsGq2ZrnYeQJuZSFNdUMdJxmuSz5k4Q",
  "key4": "5eeGi5UEWSekkHzxY9YGSeh4in9mMkMoLJe6sMatUbMv2hVexp9m9VkmzpT6N7yfFTYCoaRpkxDPBZ6UN53NfyAU",
  "key5": "PTZ5n3RCsF9Bzf5wQg6zksFkg7fi8WSSj9BWxKSeokCpaD6dQ3mumF7rbQRtCszNvPgazf5kM4TJ2ni4vdDra2K",
  "key6": "3cJ5uBpa7nsFwXvXGjbr26pDiy7V5UZRHZf8foWy7Xb1G9QXw8mYDw2RafBtcQPR81gM5v9Lum6simbimkL5kDt",
  "key7": "3Zgw3m8N3Fi2KVZsXGfKij7Xq6jr8XjgT9ATuGpmjYdJKPfniv4v9hpzJ47m3Da6U44wcNZp2HoFtPghBcV2syTF",
  "key8": "E53SXG3kKLtEqE45zzemD6Uor5Qi5drRbi1pjUEdfUZ4RymUr77nX1RmUYR6QK27fToGKNb8opXz4T9GNdj3xWb",
  "key9": "4jzXF8ojMTn2KULxCKwj3rKi4HtE6eQX4xxf8FEEawP9kFyNABHhTnXL7a77PGLVeAyG8k1wzjJNpEXQQ9a5McYj",
  "key10": "3NDfAE2hVYoJbDfmwBNcQMgcaivrk6enxWAPh4ZMiWpZCYRjAJngVQ5UiJgCzTHP8Q4PKXLDCMRZSBg3i4Q6a2iQ",
  "key11": "5CxQeVuG9mUqXmQv1Cadfdwy4akNYnzskUrYKfBf82WyVgZJUSaZZMVtpopSrS3f4wK9BZoEmW3LpDuPhcvu4iNa",
  "key12": "5NfxZNQiXHyQSaskvzE9vDyPXNHb3npWw3isqcpaTmroksyTRN5caykeRzgF9exkNJCHLA8FT9qQcLHxwDcMFHUq",
  "key13": "4ikg25CUy3DLmMfSyAn9dagLA5u5XGtummhfHysyH4hNwiYGNd1tMRLih8HyNQ43zto8w48WVQVAe6NyhKWUwWp",
  "key14": "3P8ndQV32rHVk4E9BYTmM9HmrXg9Jpwd7EnV1v1QiPriM4oUneTsusVM6DLwFV2iR5uqgMmHzdf4fipXg821PgkE",
  "key15": "5KrBbW3EScAR3s5ngJjeWfLcfT17DevCXuXRSv6TFpo9AfSjJ5pdsmXM4jntbh692kpvnTNEv36VkJHvMYQ3rEui",
  "key16": "4MVFeJtdETuqn2UB9UNjjwPP5T7D8A8DEkc6qem1BCKqMuNFnN2A6n8hJbPW8cRFHTe4YSsW8oXUXvsmFkosqcnm",
  "key17": "QCcCPHwpqiAMHdDthPZqBNi1XB5uNrvRQ336uViZR7c6BPrCfVEZ2BJchAfq7U5Ty5BkMENZEs954YYfzNxeJQR",
  "key18": "3Du85ajrDGJwuZrG4MydSAjAvA22UPTjH8Ghr8K9gQGmzYaGFQnm4aZvTD5s2QAs3iEERj7hZAYxZNTJWX8VNe9p",
  "key19": "5NkmQppqRfc6fmg7F43urSZP3w5c8Ekgm4pTSNHPXdz2DnZ7G8wCpPVFtJuBMQrKPjVUkanvWXyPakWEVMP8qgcd",
  "key20": "3BCnaDSeEs4TsRvrDY25kMeX3Et9i6iaEswVRWHEWacLFVEao3JT3xrshKxxSzyEhs2nMqAMragG4t1tpRGow3QE",
  "key21": "3WfNx8d36CPJzJaCzsMaZ7UhRrszh8krUDFu6j7mroKubKAfqXFahV6VPf9s6TH2xdEr6rZXKwuqRNErabvcwhz8",
  "key22": "jNaNZVYbHqHPJFDHnuZTLxvwLp5LwKfT9X1XQyhW3C9gsoC9YfXJ2WxXHXJnN54ofCMScxtxgcfH1MZf7gqdxaL",
  "key23": "5gmswdbwBoM1CbMNBdxPX4N27cJ8UnsodbUWVpnnhjVY7ApxeYMNCJxCCjqH4qyB7Z7YNonpyBQHFBW4mNnbuhG8",
  "key24": "3PdY5XZDGZjKzA254rTiD4r4RSkt6kDP5D19SBxxpx7CXKaAvN791PtVsZJ8pG5MSmUGnMRds4zPppLUfGTeScUW",
  "key25": "uga97pRyJVTMiHEHq1tuvDvCQk5UahFNW6XQo5R5MVWXss79TiAyypsUcWyb5xxWE7fvFTS9PXPkiPPkW7fVnWL",
  "key26": "4uS254ax1nN6YsQm18zJBKrocAUMU66HXvGW8fqWxd9QaWZ1LT1VTNzWVowu85eP3fpCNkmFPcGDjPdnxZdvxLoa",
  "key27": "1Pe3CVToFVYzShHVeDHECWDPbMHWpFp8kgfCe5fVU86Ztv6KsJp8doKCWTfBmphC2f4bm5xBALBbFjVQM8mWeGZ",
  "key28": "4gZpWgGf8AJy5PRHv4833AQCNYjZCybKgkQXDZp5GeSLK12GKmxfpV79ABTtggc9P3Q5y3ayJfTndHLDQ64eSN7N"
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
