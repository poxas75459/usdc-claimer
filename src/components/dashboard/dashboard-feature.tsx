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
    "3XRYJPVyYNFDVGrgJiWiDV9qiY61xbJJ4xC1RfzDbh4cnJdxZVAUyDaxcs74j96i2PkD9HmUxxm7mHemw3ykxX4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2or5FPcGaeF1dLCqr73jJiR5otp5ytdYVrookMp4W1naud85L7i6bg6QLaK3Nc95FKyQUD8KBUtG3EL7iEPRFn9b",
  "key1": "Wt463agHn2ycZhfiJNug4mtdeQcakHd5TeZRpWd6bDS5586gtrMUDAwiPGKh3tkRjdqAydZWd13RNaHuN8BmmK6",
  "key2": "2iE4acJme6BgGG9eN8enkHPkA4RKKfGtNDoVACBra3wDJ8zBXgS4CedVP8fXXoMnYNoqHJmbv9AvsripW9tUwS9A",
  "key3": "3MMJZdGewaFKncfCiYKbntVwC5J2MB7TR4dqw5qR2hPmfdesBMKHvehbDnhU8xr8KukxZiaFXWuCxeRiwNWQ3NN1",
  "key4": "jJNCsA9DuGB5KbWkeACqxxpXmW3XU4vHBihxD55WBN7Jb4FmSGZJqZY2nq2HGbxDv9D1WEEH4RAjuxQBe5mEGvb",
  "key5": "CCrqfc8NVNxNzomkQJkPUqkYCX3FA5MePkZfpMGhKw9eFiQJiCzWPrRtTbVeZg5Bvc8253qd7mMr4fRu1m31iyk",
  "key6": "v4bvDNF9YAp8wc7ZYt6bN6Nu8943DDczo9LoCNPe98rjTkEnP7n8QKkCZ1nEo32xS6eSTwfJdbu7QT9jrQGtghP",
  "key7": "2XNx1McAi99K8U9GuVTR8udA69jc4kWirvD6Sw7Vg9Jsp1HQ3rERFmuXLaB5kbT7XPJ5WdF6bdwNW66Utyx7PQsC",
  "key8": "2v9Cz5f1fSswB3J7bcVj2pd1orzqcxiWvPrWvrbrUrnuDJ18bGXGJKeSLmmdM8tAepbYoxN1MrXQx5fdAVanrUE7",
  "key9": "rkDPV7jBjCZS2fXfz9mMrtSbUq6cxPrdTa243XPq5SSHWzBvh5uavcZHNbfc7iduXXDomkaW9VFvxHK72ows5nG",
  "key10": "QGLwuJT5HCXw67LNRqrgCHnjPPVM12EouZBGVAs1AWCAecs1QRMGhzWGJ8XxsyBETayWNh5NmgssMPze4rBWcoT",
  "key11": "QVm5fr6TrFm6iCtGbmposM14cnebvu12qRqpAFj23MwFq8v9y5RJ5Z9egni6btcK5ZyvUw4u23Yf85N8AcPgvAq",
  "key12": "2JmfoQqiTVvDdCsbPpw9SzC1odGNjhDzZJtxeqUbwFJ14sBMSpaL9X1ZdrNGFDxS5moQ38mQw8w8nNV7kPCabWLk",
  "key13": "5625JptA8dkqs24e2iVYKht3gaWqX8Q8j7BB1ZUZdbb5vNQE8VUFC5aGGSHaKBR8Ny7DgGvCwsjpr3L8wGwe79HH",
  "key14": "3UQ2roePrwm3KLcWJREEXYZ8H2g7QisZHacvhTdjgipGW7s7jeXC2JnQfRiiFAj3CSmJ3v8252S5CeVx4zqiRJ7f",
  "key15": "H3ED6e1WN9un2Xt38WAQJ5vra5rxywUzd8vhV3S2UkJsGbfSmfkekV6YcrKt9HVRBnTvTtp4HJZAkFcmNLtJPsC",
  "key16": "R4cSnG3VoD5UnubyejRiPvNR27pNSB3eR2UPUbRyuaYPsMvaRUA3B8fZE36MSsccAb7UizjotQp9gFLPkjwpSux",
  "key17": "3oXQihJYdedJRU3bKbeKfFwVEjSfGsZdNYYPTHa1Jz7F5DxQ9FbCnttiyEHZxGrovd33zuBuJRHEPtH4cGoBVQUg",
  "key18": "2waevsZiJaV9czv1DXMzkKQhfgErKomBa7MrpqbvgoHufYo4SqQE2whwbQWmKcLazyv6tPjpuLy1KjDT94UB8rAd",
  "key19": "243kynqXT6bdyPrVwGckLorrWMetY8NB53g9CdTjhKUjXbskKasmV6AzsQ51mQYWwntj3H8csjFVUahZt8LpDNbi",
  "key20": "2ThWyfnKG4jygToQuadcfKuCYGBmEWJrBPtEhYhKiUUqgZbNuyoCoETJNgTqmGzKnSKxBu3AzpBoghSf1YPvd4N8",
  "key21": "3CmHXWN4i58AcDAGPu97XC28VeJb6i4vv7QnBhHX1MUeYoyWup6HFnBKzcKfqkuLbQKZDjy5zvkUXAb6mLQupkk7",
  "key22": "4uC6aJxz8nCJw4aND1bivEyvwzJvTszN2cbhFTTKfnz51i1vAbRw4zZ3Nwk7MHWxspouAvSGPvMgbbzsYWKqqfPX",
  "key23": "2SXujVt2RbCt7UTZqXZwpQ9jw1VGk42tkgeNTsenSujuKeg8ek7JK6QzmmMa9CJbkUMMF68q1d59P9XFq4yhuzo4",
  "key24": "2Rpkam28jUVq9BHmjQq8j46MHNb6JRRFhEC2crRS4rF8V6CxoCu9FWSoojdurJL3a5ZD6ZRyCL8qK1wyoN9QXByS",
  "key25": "4d2HHejLcBE8sCXvJwAZKBuCg2uVsYiiARum2cbpK1DMi1vvBQWUQJ8wVu4bP5N7Jhh1Xach7SzMZ3Tsz3CEPX7M",
  "key26": "4sYowsiw1QQkTGmV46kgzQMbsTZzXrRiutf1bDgtoeqnjuvJjup3j48oEUzp4qBncKdeLGYjY2j2EDdvGnVVGKvy",
  "key27": "2aVde1UxEQddT9M7YrZPUphDZqVQv2TatkgtNtWFuaaX43w2LKu2UZ6VEWzP4WqFeDGUA9q9H5CQZft1QKuzDFtP",
  "key28": "47gb8pz5aeVMyxNRATDZ5K1kGt2dohpKr9NRpLjhKUMB43SX38pnmVEuhLmQm4N7ERvUikTyFUrars6LX7TQkjDj"
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
