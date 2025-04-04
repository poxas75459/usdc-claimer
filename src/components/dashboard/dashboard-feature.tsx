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
    "4dgXPtWKUQDcX6N3EQpdLpu6FQtM9MuskdzxMNNMt11A8gsxsgSCtBrtiZpiYLKFySKxn4qTHoJhddn4or1qqrJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmJsQnBeCAa5s4VvzWuDupckdwZUKxdkchxZJXioCQF94EEwgDEXxaV9Ery77naifFhU1qyyiMqwNQ7j2ZVSCeT",
  "key1": "51r52bXJf8ibiX1ipP5tFMhn91CH9TDbgbrpJXRHhQiycTU6huhqeR2gYaUEqPS87EMuKdgKWaNZcPE4ZnLDCitF",
  "key2": "3GiN6HKAsHVKJNhXGiQKRCvF5CgKwGe4xUNC1j9w8NysS3Kj1dB7hWSdD4cGWLva7j2eBmUCayAVi2CcYYoHKhgG",
  "key3": "375RzmPbwH2ccYhiztMhSVX8UK3VaKrBp62fj55NUJ2uxWkfD4wyWeyMmUn3B4p8JA78GDQA7UHNisCJ4fVWxrg2",
  "key4": "3NiponXTLk4ZpavZRGzRUf8dwFND33DZVhqe4eSvh6nPfHdqfNJGKVa7d9HWCW6D9ZMXh5yCaVDAuNjPjLVqDQUG",
  "key5": "2BpFVYcZuwuxWrc2sUbTTdpgsMzd776utLnQmpjswsThXVLRmbTcQVbgMU3RYUiWQ14j413DgTZaRh7xebRWYcaM",
  "key6": "4SfkAAJ9kJZvrBCmxtbe2ZGwYRfjUcvoLxdXSYvA9xiK7eAq7vByxqhteyuDyLwVQH96VKUYnowYv3pWdDmVnyBc",
  "key7": "4YdGDCFXuhJp3iP7MrajFcFUvEkdK9ucqNFsguGg8Wd9MnBuE4sEXoZ3qcYLCdwKXNc9KQRfwdHY1NY2Bzf7V8Sm",
  "key8": "x1kcnf1M2uTgmztWRsFb8RiWM3sFt75MoRmuxZUow8FPmAf6cd7vS4nCebLAfHgMYYvUUrsMcQC1qe99RjB112J",
  "key9": "3p2jjmbq3dmUcp63mteNjWiArUj4iL7c5QsSyk3KRX3oxgbZZLpWrA1cscXgo1x2MVu1jA6NkwRVo3jNexbs7AcU",
  "key10": "4nSiYDPmKotEE4iqatnyVU46hxzPWvADwnJiA532VR4Kv7CHSKEdpFhiHd7mWXbsmb62CAf4KeSrSbAd5ugT6zTe",
  "key11": "48nu7c9j1shB8mACCRQ1n7H59Lsg3muwq9oSk4RAQ3XVkA77K3xYWy4eR5nebW8ma885pjeXVy2BKLrVnrG5njjd",
  "key12": "5vFajKACzD9P9gRDEViKjhRvPtcNQ1GADwsaG8rUiCTy4domCwVYk71SiJVh2ZV5SNd2yooQidVqjNqv1asLxoEL",
  "key13": "huVDd7BxF41oBPBzF2Z88zts23LaK3nBzAbBhn7Y193hBdmsatk5gmqEi67RWf95Tr8gdygZgAZLU4wPDJ8RKXH",
  "key14": "2HZnx4PFnFLUXZQKfbjTHKE4YNAkPuRsiqQa5D3zMFtoJqhPhRUzMrJYhj4vvSR1tFivsQeJ9mWauxPxQ17JQpGp",
  "key15": "3uy1CWBrrWqjrfCiieVzj8RsGoikJRrB2zBpaN5QQRqHR5ggxBjQzdQJzF9SZyvRY24zMizLj5ZUAEx3ZoDcvRn3",
  "key16": "4NQfagCEWogLpcE5Ty47xznVbs7QkHmNwzs5PYSf6mCve7gttGyFdbWUU3iTmvcGEsY5812AmqmHMBswbbaXZZCQ",
  "key17": "57v4ygSB2RDPdW834qc3hbuA2krd9c5Skw7gRRfDACEjMWug3j7bhaU62MaTihoBQB4fbxBdMQt4h1UHDSVFQGJD",
  "key18": "4Wz3ugpw8SQVQmzsyiojmcDCmPkpFAFjiMpmpsr29RUEKQmadrR57XcMsrSRz6Z5zNQjmKrLWEPkaHnAzX7KMads",
  "key19": "4a794TiFYWJQxs52EVtmpX6VRQ1NNbgPkjRnBzaaM6eqZp8a4eCvxLgg3DBQ55raLVB241GCX7QL21drPJwPCDxB",
  "key20": "35uHDVqnjEcu16QfcYpceh6LSDcEZK592RqQWcExKCL6NWHWpDyU2V1kzrhTJADxm1ekoSrDyBb1P7SDoHBLHahP",
  "key21": "4Y5wZxGEywS6mX5aKwGi7sQYBDzHLPRaoBRWSG8Tot1ySaAAM3JMcf5V1RShZKWWMCw9M77keMg3dt4M6BKTscgo",
  "key22": "4aoetVHxRUbTeoYyHEWQ1ubu8bogLAEHCjiKMu3hR8cdttZMYoAzgjautei6VqhGpZhffchXShPmSsC1QV3KFnMR",
  "key23": "L6vSktoxgcooU6UVyg3oy27n94RFiageb2YAWdfBeQz6irr17HGKhBwviXXsJ6gp4qL4SY1QtFPQFup7GcCc5YB",
  "key24": "5MufoRK3N1gH8ii1eU8tXbJkHqjNyLFnGixonu1cWX7Tucie5Age1P1PKyDdvqzr4aRuADwXrAsMX5gZ3XjnZeGt",
  "key25": "QopXnJNEiLrezHRQf5pNCTsEM9ESQ516atLdurXVkXRSK1DoPyGEh59KANJ8kxXREJRFChzCoBMotMimLgT3x1S",
  "key26": "51riuxUv3XnP1efLpgj5Ti22YKR24G3N1AJSPzaTDa3oWsokvMyumKpDbz3Yjanjg3cMQAGaMkqEzXyYriYLwq1L",
  "key27": "4prje9bwDKkfDapFvV5PpY6xEeMajjQWWHfwwKhpdarz5cM3JuEPTFqktqfXkY9gyzmRdjGmXSLWnCwBNWutZJoM",
  "key28": "2CMWK3rtKz4FjdGxHpXTD3WTSQE4tj532TmTcpPugNL2W7CzgEL6zCartQGtX1e9SPKTCGdjnUJd4AhmzkTHguMx",
  "key29": "2mDEFLXb8BhqqrwYbMYAwKFFsj4KGZdvPPWi4Exvh9VQFpeJoMAsCp2Et97cfi24n3yH8jRXo9dnvggqgWZVNG6p",
  "key30": "56NVGdViGGxSQAsSzAKoxXXmTTrHnKULcmvNz3vvjxG28TwsHaaBUtm5wcN2qVSWaUiHJWtFRWU6ap3ZNPgBPPdp",
  "key31": "31eLvMjFVWuNh4vH1zv7ofH9DWW86ZWTyG37CAWizeo6odx6VPez5HYTAymSoF4LSovYkGAdGZjZbkr8b5vBwCxe",
  "key32": "52wAkb6Tcu93UvQqZjRfZT4KARKcZgJ7eGuz7quZpsBngqbSgo3LBZVd2ucR9DD2yL3D1fLo8BETjE6Nn65biqSU",
  "key33": "5KyUksmqjiLNuYhkyN1rPW5uCajjFU4DLEhAxrVU93vFHjsdBYu99xTTCaipeC1bbrbBmCz4BKLgdkwKmkiMoD24"
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
