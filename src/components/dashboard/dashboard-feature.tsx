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
    "25XbiUK74tZy464VDf3W4XT99dyTnJuUSL3QEPV8FLsd7UxJxTwBNCeQp1zJ8A1cqvZUiAeRW11inqCDu1b3Fx9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eriH64dyrBYGH67d9NGaxx1AAtExR9ea131jyvvWD6pBWkqUKY1iMPaBPfwk2u6jwKzCuHnrKqQKSmNytCWz3TF",
  "key1": "4ym1BpXhdeNz4S7y5VbFkkNYMYe891FTqgnvPgs59QyUjHC9UAz7wjUEFN62gt7ssoZzPfsfjJx3smw3YpMmfsL6",
  "key2": "2eVhYQ9qNwjVNLvYN5PDZU7qsLHM6LjdZZCAcCjvCkLDhtRosKrLUNVkLYMuixrSP8WA9eWMUfJu5BHUr2u6u7t8",
  "key3": "438p7mPTZm7ETNrwiVDRpT1wy5osegaJrQSZnZrf1Hb1q1i9s6rUDDKseJ4EjByXfJJeeeq7DKW7axgGx4xorchz",
  "key4": "4ZxcXsBLXffs2Sot9HRbqKiX2B5RLZ8CjDktzzrhDbWmB7GuusBo8guBX6pZFam6SrsekwFj3QAGbTDDwHeMtLEA",
  "key5": "4m6ayHoh2DHy1oS5v9nHANKehHa5e25pgophJQqCxGK3eGW62QecDEdrEyPMZjzn36guvGhVn7SX7qRuapJRFar7",
  "key6": "4g6X4ywEpsoPzQDabeZvMubvsAw65VZmsnsHrgagSpGCW4EMpmrDcfjy3pQaHubfGw8EqkxLTHaxW3pVG9UHmotb",
  "key7": "61aA2i9DfyUrNLFyTiB4xJ8NfCx5uURQWX9ubTifJu7rveViTsCA4Bp4QsdvU24KMs48TMn6GXXkxJKSkE92Qqpa",
  "key8": "5824aNwg9iJVPQ3PVhJZfuw8msdRnFYdZ9uyTAC18mxViBShz1pNgBEsMr4iTgvcrG3nvPFx24C86tXx5DGpiCDY",
  "key9": "pcfdzhiTpNXHYmWJQqKzQ6snJg5bpUgG4oJi2CPgq2Am97vuY3xokQUpDUcvcXWGpfihmnkoRYkYihbtctPraoQ",
  "key10": "zz3XNW67Ei6zYTusLCSXLytvBiGiD1oJbf1qN4h8zj516v2WxZEHDvnLomQ8E9nqUPeRqs2YdZccG25hDoBZaMQ",
  "key11": "2sPLbdXNQ1DfRdGcdFj8gPSKuNBdc6zHL9Q3T8NLAdL89Woajqh4jE9wUHRZQnhDqkLT2v7HNruGXeDXFgnyrXPA",
  "key12": "2NkQCB2rpEhQRqubXy1EA6aP1wvRTMBXGK3JUvr4qHVGdvYoXMTcjHT4QJZSKywCa8KXpT5FtodvbUuHbsBKGWuk",
  "key13": "4WA2c9vpPw1gEivzrekCQdRefWXedYWjCS4HgBctXrEUgnhCeZjqJxsL4GsGJowBgzAU9v2fmVV14wcg8BNsu2aj",
  "key14": "5uDpPzepp35nsznAQLtL32obnknKYwgkNXPjtbNpmr2khn5k2e1HfTUDkd8mtp8iwK7kST99SEhwaQpkmds1KASc",
  "key15": "4qTiWGFAepGKiz4jCYpnvRjWFG4yr6WxPL4KnqUQWhkp7NEUFpAo6tb3Me5uDqsTeozWMGgz5Y58SCAuneqGkAGD",
  "key16": "5z3to8b91uUnGjR2Mm1U5E8jBAKhssqWbHQcrGB89U3wstBnwf42WfzYnHGPyWYA7vmLAKC6j8adPerATQMvdRBM",
  "key17": "khJwcHuYGnH1hSUhqRp6ZNinNwXRtzZ34Tw7zHak8eGw6wvvepkU8wCeNvhacqtJxCsPmFEtzomecrqWFbdFCSP",
  "key18": "3kGRfYpdy4U3SxB4CJD1YhjYPL7xQRB3dCG82nvCTyyMr81Evz6nEbfBbTswZkgweo8q36goKDXwxyktw9yZg9eN",
  "key19": "3hryFZN9BLtoRfiUY8X1gWdeQMT6GPRtbT2JvbLgxgxHoYn8eVCknpj4HLS4dshitZcwmDC9xj9yQ5yds9HdABEJ",
  "key20": "5AAVCXHdqvBmyorbVaxSDTwAA9BM322XNbbMgTuAeSp8ibEg3ovDUngi8iLRZtbeZVEpXcFsaPjB1zCcPkQM7nyN",
  "key21": "4AZb4yMNVtxqrJMwVVBJoGv1Y6zuTxSMAqP4VsLoapquqFQHL1gTVzvKYipuZZMb5pMwo2Kgeo21yi2MxKaAUhGn",
  "key22": "4hUM8VUhe9ioMjj73jCynoUT383qq1dsRuYgptwLb1CPBcLgwXPY8VuydcLdiwu8QH9rwYraQkE1PY3c1SinVR9X",
  "key23": "xa5XRrNq3jXH2Gkc2fYLdhfB7WfFMfeQB5RT4yTnNTEbNUwCw7RVwx6fp7C8ydpqvxySSzJH1T8C3zwH4R5RgKH",
  "key24": "3cMqpwQ8W7RYUzKxiVYBc11i9NHGGFv6dy25jk729YFLTDeykFp5HUpsQiLWxFqckZF1vsR3wXUiQH85WN9rE4Fp",
  "key25": "88S8HcwP6nUA29HGP1mexsHwteioLE4VGVVqsWFSFUeGg863XxyGHqNJ5ZRa9iX5DoDutX1zN8ePYJQkwRMDDZG",
  "key26": "4PGGrfuPHC26hB8cqAC1W268TtnvUACte2VcgN8hqpwDBw92WbnYnLhYyazJNo5Hi9HnZhovwqDGw22ZsSeDXiro",
  "key27": "Q4Kbq6RY3wMy5CTDZB25VjwXMu8oz25QmyTfZZbdZkDnUftYUxQrB5xQ565pR1rMMxdJnDw93rjUMW7NjmY4hQX",
  "key28": "4NQN9FseY6SM76Bz1EdEpMFSNrGCoEyNQM5kYXKHSTHayoWauFcP4vVRZasAvyydKhaRAchQKVKRNS1meXV8aCuP",
  "key29": "3hr2NhzPhEFz9WBgnzZ9jXT7FeLmf6kv8gr6ohWyAVrJTgzjVHeCD2okjw7Xrv3Xv6cSMFWEhmejRaoiHZn9jLVc",
  "key30": "4fnqTF7TtuNeiTTUae6fDWodYySYAVZ2diVb7eZXRsSZkNP7mNcFStWYwpkeNizx5SR4bB9xK3nxV2Xg4tfmzKuY",
  "key31": "527rCBtwUWvGRkrQA2jx15Ypyv7LRwRePjpF6rv4UYGWmwwCBDVbhZJjcSbXGwnXVo7okYUJabtp3mT2s3m7zMqc",
  "key32": "241Gm5AUTgcDsZqaXkZYwY1tq5VvVt9gChhtmoVVh3gHsyhvfMPBMfUk6yyzmJGqioWDyjVtj7vJg1D1k4z8Ta6R",
  "key33": "5XBeBSXhWJBwdkivRTfdcVMPiZNWk1oEidb1nZY7mSsWyXkVDJXdngB87ay1kyfVYLpuXUnoDjD96uS5g6RHGCsL",
  "key34": "p9PVEVUTDZFQRPXzve8XFVTL4hcpvuySB75J8qFkvzWJMeGrRN6jbvgKL8pm5gRmWKgemTsWmq2PHKrnTKJJonQ",
  "key35": "55BMoGao9Etd5isX3nyTFey6SbGLSyBqZziCcSZsAXDMZj5E9ZTNAc9sqoQgZXuYPgqrKxLWL6znewCtp49d9jEo",
  "key36": "4QVp8pBczP5CRL5jn3qnEZHR4dxxuJvMrmvz1YhwMQ9PJJw7XYLKv7UC9rHTa3kQCx9FB6QyKvThRVoTh66emB4N",
  "key37": "QoKiDX8fW1GGQWQYfJ3JXG8gKY4mBYYgq3RPs2VWqhuD5wKctq77MhVE1mjUGCpGL3ghr53YvaSTBxXZHed1Xke",
  "key38": "2Yvd9Kra93ciBi9sePAyk9LfXECCQex7NCvWE8thCoSdZp19xcUvNfuqbfGSJNGMPREtTbG1EfwAKC7ZPX9jR3h8",
  "key39": "2Xj5GH8jCGagRkXMCTmuaw4i5eJQwmkw3WowEXNCv8RFLNVtLqeSvPq5VzLXNTbPQuYg7NuzuT4LUrnXYKaoF9Wz",
  "key40": "2eaLZvChDLRTH6fhes5HcCYx1dURinVNtrZWD4hFV7bBTihp8ttbMpSoQgtN8MhfNyXBdLmGGFQFapKGACpwcQsB",
  "key41": "5sEQyhJf7qREd3UT1SrqyPw2pHgstb69vm3qFaMoKSeKu2wqE3DvKVie2TftLNoWX6MEvT9XzcEKPzRji3oSGs1",
  "key42": "kbYLoHw3vTNYAA2TVky6tqxay9ehBnEu2EyehWJqfJvqFW7vGmmYF1t3Zi7LgvEqPQATMZdD6wr7hzmEzGbgkyN",
  "key43": "2NvvxQLHectnegSCXPLxwK1f3zK7Amdb7HZGspfi1VSAP4bRkjkEF5Y8WkgfGEcDC1XfpNY5RKfRCHz5UwfMgtc3",
  "key44": "5LLSgEWcQ83DTfEuh1QueA5UaHpx37X6hi6QrWYEKyXCn9aHMV5JsjPxqiLETJ8K4wUXBWfmzHBVU2GcpeZEodNa",
  "key45": "fVTWYAfPAXdjz5kxrnQa6P8b7RehsJmgw2dfuw3kQVQdNo7EvmFd22pBEY2Y5jKjRCyqU7KXGZTG79urHoQ5TUH"
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
