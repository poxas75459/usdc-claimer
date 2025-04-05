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
    "5xPKyBzXLXHT6hWSpQSutX7NjHBc5uJkyvNnvpHN2QLM7DtQgxMBDxVdfkgBNWumGuqSe24Qt5XQyMTUbPkHeA4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NamsaZFwnwqzVtYifR6eijEeYmi6sSERGNdysbuN8GAcNzxXgPVFRdPPC1TvbiStqmjsG1f4TSFnozS2nqN6z9o",
  "key1": "5zTPYWBkygr4meS99byqHeCCcUyfNTyfVQdDGSbdbdkK9Eykx1F3nqovKZ39tRrx5EXtXdhFEMypJpFUsjDBVdzd",
  "key2": "3n3qdYYaYPTaJuFBb1CKj3AUnAJgGddubNVXG3bLBUovF1qx5AmaVBEJqMhXBNHrd4ttvMPGrnLroJnauNFGFgnK",
  "key3": "51WgRTjMXDF6vC9XA4JKytKpJSHNDyyKDa1DgQ91RRUYHNAvjJMyPTph7XNNKnMS4QebMm27TNaRpSw36ikmSsLd",
  "key4": "5NAv7VwdkzXwNXr8SPBp2dwrTRAU9gFUWRb7pRyw6s8vKubnGxkeNTWFEwJLCZVMWtZaFWsPqczts2x5eh6y7DJ5",
  "key5": "a5jZjvhyzziLMTteMA9BJy7KGuHdvHfXyPyTBVrSacjZZyfBtj17jQrackFgu9zFcuEfQWubLAJ3zWEzA6LuJ85",
  "key6": "EiYYSU6hGFgyH5QAFM3zYebrq8UU26zxvDNPeLBagnuGNx9YkZUDBa2kbEbvcUz4axMCeCYSgdgau57M7DHWRUz",
  "key7": "L55naKptonczHNx5TCpATs9azd9wx92X8LxNS5pyoULiRe563mfR9qnKvmFvRuMuhEhpzSsLLGDbVc5ARi2zzdz",
  "key8": "2vx3wznGZiukY1ijcMzB53x2zFLteJJHMHL3HY93BqLKgGKmewE8GuPgysnvoQm2VCFzjsDTHKtr8yrSpNfAm2zf",
  "key9": "v6bCnC8i4quh3FkgKqzheN8ewUvwMsSLEzVGLFzRRiVpqDPghBhWP19Kw1crWHdC5sz1wv5QF1f9aZpJJerELw2",
  "key10": "5zAJBVxFjiDVuPANFSPGSn47WJhUadLqEamLGxcQyGAykdpkVWEebPqAMs2XuWxfSYY7QVddWxkPtta8re5QD4hy",
  "key11": "3x72mNTsuYfy5Y9gg42JHdbjJjbuUqwqLjMiQXjuJGVfNAPCdxpYxRorkgNxFsXKaeS5z7XfyfUW9jcTnaoixVSu",
  "key12": "2TDF76jGZqbkGcouUH978DzoNqirhKNj94TffkD1EcAQhZpNcMSUmdp8cvtTFAeriFkeMoJy7TDDWnLm7uuygVR4",
  "key13": "648hN8Lxt3FezuVwmzpv1UDgV2CFeyHETN5KPDhXKgKxmoyciC162JsZL43n64qTFKZWZfgVyFWBNKXAa4mx2pDa",
  "key14": "5sAc67Kbwvh88VfNwTks45F9xpomHd3wGkv1Roe8uRB4GUSCLgi34CUaRmdbhg49pLnZbyCSwDHbpxX7PSstZmhJ",
  "key15": "67UteQpggaCFnpG2NYs6VFx4xdgobv7nQzcgAcaMxnET8TLkgFtrz3SujmKmwVdfSQmqCwisW5CL9W5KQEwnvGRT",
  "key16": "3RBnDDDgPBRYYN7gW1zuCwMJSRcBbH6SxLneKgq3qHjpekmvx5xdtFpbAhMEKmwBr2HM8mBcf4UQLaHNSsRvGrPy",
  "key17": "3uGbSnDmydQ4itWTHtGuUqhvugJiXRKL8btngps1b9BGb9Y2wpbHVeTGgJgt6fydVgntFF7jc2WL4FxrYv45rpPa",
  "key18": "5hdBeHiUhbViELEiWyAeQD9hu3y8pFyfAaRqt4CZYtDFXCsamhtYFj8NU7pw67XF5vmegds2W45qzdPazUTwT3EA",
  "key19": "5Gn21KCktvzrLbAqELnL21LGbgo6nfHsjwRbWDStnCwdKSSYmmJZqi7U4DAX5w2vjQKyZxBwvfJ6ttJSEgcmorn8",
  "key20": "JVbkq3qBadU4mgi7AH7SgjSdqYJBG2LVk3bb8HvpfU3XscdeGhRasfkW3jJAXF3MnEb6hgiEhKnmgzGRcvGvK7Z",
  "key21": "5BsaqBVSfRa4rbWcMJqfAa7Jb9vi25x5EpxoMSdeuwL5eTUZWVgw88Khi59cJAzfoDqPS48gWQpWSaQjHPD3beM",
  "key22": "4CcX4tV7xn8Wiy4ykBB6r95F8P5yuUp25BzRkuJbZknJXY4cpWD4tSZUacDAFaLNbBizmzfNaNbvErCJaZZ11sEy",
  "key23": "5h7JegLA7fUBAJsHtaqj1UHrk4CGtzsuogf7Wk8ezoiG78iyf6KescaTBnu7hLcgtdv6NsmYfmtcZAhD9QLmv7qE",
  "key24": "4LpecBGCnf6sfVh71qcoiq5TPeiH3zMpULkUUVH4Hvf6dS1tr3uBP5a9Y8AwQR3eK5VpPpF7TS8ozFL33CPPHYXF",
  "key25": "2hsc4yewrQmW3UB1tByMUvT9GuUghvTe4cxbmvDYQ3vYwucrgfqDjgCvSsMZcT7ojCJXL6E5JYsZxW6Rnah5y4Uy",
  "key26": "3x4YrSYVFzRTuf3xDJsmBGrBDKxXakuz32GAsj9rH1ECFpvQJQkCmuhshdR9X8KWVH3DxPaYK5SQU6mDarofWW3r",
  "key27": "guAaCXpt6Tz8E3xrRdrXFbAARXU4P8MnfZt5hpgZ8aPXapf28uaq3fMokFs1BBMWgTGBN5mSq2ryxnoDxt1de5d",
  "key28": "2sanYryjEBKUAvcjBxTYPav69p8H8M8aei5EXdyzmCVskHX911nhPtgBheZjWvH5Jo1jrZZC6kWkgJuKmG2DmXkK",
  "key29": "X3RnAd6GsVknTMAmE63g6xfYzjoKDdeG99kaPugRjuFNKEkT2mr7nuPH6QSLQHBkYxxc2KCNvRi85tUX3Z2NFDt",
  "key30": "4akBgTbFwd8v19ah6c3J2JzZfGrvjAF2UWZQYsDyEqkieFLz47dFWidcLb52eNh7LtRAV9Ps9tuZKe4sB3X2wdE3",
  "key31": "5ZFhrDxhHLKgkfUqT8JPgHLSBLvJqxrQpD6BvxoZXu6ERPJut5XHXuYuRBi88GTXvYGv8HmwAtQaw6ttZSJrWdXN",
  "key32": "56stSHChrikWfZRb3pvmSdMzJf2W39ddtJQinWidumiuEzk5T8RUwNwptc3egifHBsGcpkkbZr7mKHEnzZEU175v",
  "key33": "38g9mKELS5xL2h1Hiiv2dQoBtfJdntT2tSQGXUaZ5XDzREyR4Cz8yLs4VNcgfcEqdDd6vyKK8d3qJ4zbMWsMRJG2",
  "key34": "3hGfecMeLm7mdfCaCbjej5644Av9uDxzigwaUGHnTTwAe4VvG7ahXZPcgX76k2TmQwq6dTZrwtf2qLsA2GDirmwv"
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
