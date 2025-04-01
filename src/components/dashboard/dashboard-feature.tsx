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
    "VkzdfFzD7ckZXWHDXpNdrCjTuR9MQAm7B4epRRyQ2QQUDW7ZGpqXDQ8Gw5rQunigjPnn51jYf4kMixyPy9znnED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctbGVVuTDYG41DrwwwFCMaH8gz9Hpc4kxmzQEeG29kHCVRoqyrPtM1kSTTYy9bjk95QJ3SJbedVajmm7hbcn22z",
  "key1": "2DM8U6hEgFQBQCHYyafErqe8TZ7GnWgvG6qjnp1nsMFmv693a76B8wb1F4CEDeiV8kwcy1A3TJ8E8nSEWgqBmCRh",
  "key2": "2QuVmmAFzMj38WTa66Q1H9H9u83UaKXPaM8EZtZY1xH5GoRVyYTJdRMEnMZ9g8dKskkJ9v4W1LdtzeLapr4fjzWM",
  "key3": "ZmsvuriSR4KXYTNYnMd5WkFKutjEEKwjdFbnzR6vj5xibK18KxcvRF92eVy2w74VgtPH6Ft5uWT2QNdsmnisYFp",
  "key4": "4ndfg2D1Csk72HJysQQ55pem6YrkoesiULcwFQKwDESwZVWuUep3egkyDNQb8y4yrbazGLhgQfZoqNNjgk1WQmPS",
  "key5": "45Uofsahu65z63rvyfG4CJuXwY9csMc9tagFsiwENBrGEkiSmvhxzJZ8YCVekp5uUXqMXJTCZdT6Q9SB9cvqZJ4V",
  "key6": "2W4HBcjzEX6zFUxquS67h7sX8gFPgWwbHE2Mm1pyv7HMMMgjkcsyV84WWLnvZamRkTxsDacTDHeAp7pXhWevdYCh",
  "key7": "2gNcN8id9SP4KuafpHCbqZbJo7ijSYAZFPwUzjro9GApRoDGcMbScaS5KKQXS1VPVNfpRhXWoKxFMhVuqhx5ZKm",
  "key8": "5PG4Dq8X3d9PT2j9MEpAyBcJdJq6jbeW3PiGeofBox2wC5Qps7q4jJJ7QJXvuaBmmrQj2KboxWwoXqrpU12qUCjE",
  "key9": "ck5wU3y5LwzH8BNfq715D1YKXmUjRceaop2uXYPbY3b8G59BxpkdD93rPpz8HaE7NeFmG4a3jeRWxsKGr7npysc",
  "key10": "2SDZhYMEwfnfBETUE9kUeKqL3msLouuLRjGNRss6w8Uh14sWPKEENbEHnDFGk7EPuCh2BnadpmWvFz7F66dK593o",
  "key11": "5otSurJdo25JNXWTZ8qsYZqGhwdkkRd6YMR4z19TkyqdYmFYju2a9NigtcCERiZZFMLFQDAxcXSENZ8F5j1JVXTY",
  "key12": "4pYscRzEKwvKLmbnFbag8rdndNx9pdsqoQa2uaveNSkyQxDDVB6ee6LjcoYkFz9ab3SDYvCSv8pTApCiyGZ4EsFz",
  "key13": "5XB82s3fKr8mm9jVcap2HpTVjsFxAxRe4yK14WaJ2hMLDUiBosSgdzWdmBv3WmLYg9tEJ48cU4qiwdTvypNLgin8",
  "key14": "24KsFMYGZU9KDgWQ2ncRotSjEu1WSKtMGknKyXbNRGVE3MHXg4KZGoH9AvVv5TigpDu1hwVE4Koh2YGCBtN2aEjF",
  "key15": "94AjXUmLzmbAnjGbznHqbchRfdMrBVdTJE2cJpCzxDWe5cUgDh2t7Ju9gbYqbCQ9Fk8RHJxcqH6gi9EDQLzaRtf",
  "key16": "57wE6gsTyhi5THVs2R2wyYVqJ6q9ZVacSTwmsZt329TSk4GMGXsD4wQp2BkyfVa3Vx5ZiBLToQnbM8xnfHz3gfSE",
  "key17": "kG9kfG95n2jK1M2T5yQnSinmbmscFizaiHRShL7kcBUmUFJmK5N2SmFZGNmKyZR6FdQ1rnLCNifmGSHBdjGBLSU",
  "key18": "tKfKVVUG4rWa6SBwzBW9N8EwKKPzXwRpiHtH5vnAWucqM6bbTQHXbVEpipyd6B12wez1GgPPAX8VL3JxxcnhD3y",
  "key19": "4PCpgs844EUbDKWKT2WgcDMV7j43tSbSKoDUFQcEoq3zpTnBWjGAgixK2ubfUkPiJu4Pth4PUoXe9MpZp4tk1Vyk",
  "key20": "3HwiBreS5UMDf8neAHpTnyLR7Y1NvjaqXRpePY1mMuAThgmZuSzHQJ2qPdq1goQF55qrYR1ohGjWAtkPYiw1iDFd",
  "key21": "5c98YZ3xHkGh7qjN1nUoCZj5z9Q4zF26LRX8FHACPnW1s7f7zqCgBQKmA6HHDCxgyniZjq44DmhRcg73m4pcHsjg",
  "key22": "4y5qsZ6WrxoxxJAg4fqoQRrLxpMWpqaQ6vGQ31XB78kFmNBkRiNxbJ3xvFPMWcStdovx4NAXLweYNFe8TqgmPwrc",
  "key23": "4LL5bxt9haeue2mLfpRaAaMnrz4UuwL3mBNMBmTyPEkGzUfV453x7BSsxdGcijjDBcukJBcsq7jAnntXh8Svpouh",
  "key24": "HMkoNMhch6qg2rdnbw47g7L98DX6z35hSTvnozEHGfY75tmB84zWANRitjtZgvPy4S88feMKip67vrWejgtveDw",
  "key25": "h2tVg1eY1BSSv3QfZ7xTBr5Rf1uhMJpmL6Nkcm2pThkxr9Bg6gdjj4bwjxNxJkgBu2NXnejxwHir55UAJJbzGaV",
  "key26": "2uDXW7FeMqJWRu9Y7ifmqe3WYhDjaH8Bc4k24i85q3665XiRWTqZN7rfYtdMYUcBNznH4hHHeB3ixY4h2BX43wtt",
  "key27": "pUMC2W8QnWFDr46CRefhv2LCxcFv1oWtzRDKcxGP75qaXh6mHnPPYYBt6JC2Vi6hk5jCYc7cPs26XTFacxYZtLy",
  "key28": "5e8fRv3yo5w5YY2Lghn5JnpCgSWLS2YMTW86CaXrFXZUxCXFARu3ZQF9iGqCSPtyvgLtNVav2oY7ZGgikcuKH6cn",
  "key29": "5or8y1NHVLyQ54UJr76L5YRtuUbC9NyFhmW2JNTAButxstZWmp85Dm8fenUtREYH7LJZbKEhug7rtPF6VPFaJhon",
  "key30": "29Dqt4XPJNpEdYtAhH5vKPpGVJSBYo1p3Z4vubcWh8ZPUKcEkgcvg1QzgSaab4jt4goomGV8FM4ioAA4GoySFrXF",
  "key31": "PS8M9Br5M8R27L5KiGi2rSVAso3tBGpncxzvgGYRZHqi4SBTYCfyFytX1vysiruSnXicLhY13C738vDMb9MDLKa",
  "key32": "4iK9hr5ekXHSPYhYiiUjtvQG4FgeHQ2ChCMpLFCWR4sfoTYAB9McYXZLuxgwYU7p4fiiHGjThwt9gqCCf2shea3Q"
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
