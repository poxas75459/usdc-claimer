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
    "2jyEstww5Ujfdqc7ppKeQPCt5fCkn4gVCBR5jD7UnYMFTVLBLxAZQcDikdJMQ6gQX5rTCV8TvavAZb2KDqXFiNXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUpSZCyWAukUYdkWZp2mEidwSxfyRsvU8SL9oSwotdFSsc75uJUHpH8VsPBKFaYb8nEgremnozsDQnsXh2aaQbt",
  "key1": "3DTZUyGdKX83G2UpdfwUwZqZUQtrQ3MYi6AvJMhAAuYfC7EAgFuFmUBsJWQYVTHQjs7VkduqDq4WFXdSRyHVDqBr",
  "key2": "2hcLrERBzrCwFkSc1Ex9QY3xoMUABC6gYZJxWJ4Nt829kwu9dQ6nnH5Ys6nYTiUFfVZWnpSdHNH2BGsxEM47dUMY",
  "key3": "5PPRCH6L8DUSp2fz93aUN6YAf2NjAC5coYuw1CPB5oK7crS5NQP9XWj7GsDMkuUZoUqTg8FqUbkKUMWmEjhqHpMx",
  "key4": "5jewuYorL1Sa3zUhvvWNVBo1g4Y5ATVF45kX9km7t6gcvdhfEpey6qMZrNMwcfC7YYQTvTtQL2L8ixqUk2t2MMAo",
  "key5": "5f4DH1J2S3HKbEtw2kJpjUZuMXm6khY3f1aVNccKtZMiWHvd9UATAobgmm4UTqKQTKifm72tox6ynnAK9csRtwXY",
  "key6": "48uYCGJjoMfjUx6MfNBPieAoyQmLYEBWqnc6iMaEETMZfHPNQyZzQNvFtxK1NNVopSkRwhdz4YsBTv7n8MhpntXP",
  "key7": "5f4muUuxiDSAGDsyDsV5CM1pz9teT2F5UVgJj3a9FAXy9B8oDpcctU5E1ux4QvrPEnjgZjXC8XL4QyABzRMHkXcK",
  "key8": "4hoKfcUw6AJLrg2ercNDTs9EJ7WSxVTRyCNy1K9YN8yDMrZ4jfyyiiEhJYteVxmmudoeHAVwGgdP6Uy8MnbN9fsn",
  "key9": "2zcRH63k2E7XeVCctnb4WeL5mTmdoor2PYDW78cdcdZ74NkFzzyTqyt3CFAg7ePyJERvAB2qux1m28zY1XPUPRKB",
  "key10": "39pqveekLT9b7rBkV7ZP7RF4F9ZRBH678SQsUPyWTUGzSe6KeKyMjSz7voDcbXBG1rjjXWbV8CCLhDo6MpoDvmPy",
  "key11": "4GWzVcx9NtWs4BMh6rVWEJ5Jen1sa278dsF25XJsGsq2rPvf3wEU2uisb91VvMg7Z21vmN18doB84G1qDXWcyqo2",
  "key12": "3d1KUW9XUFXuj4rRJ7sde4wFZs3FNjHsS8G5dLJAi8GgfBRzR6LPF55WhAyssJ9AYZSdEwfmJTcBJ1o7nfiBSy2G",
  "key13": "SPMv2bs18MuR5QcFxUijXxuAAm4k7rGJxKLM6ks2eNSbcwjUfupAZzxzK4iLCuoYDCAfip1M5ebCXbYkaz3RQ49",
  "key14": "4FEvnFZAjKd8KQEj5cLd2EWcVpUBMcepHGiTKE9xTGHTxABJPtWQSPWBtCkZxpTYbxhxDS8kZMeqqTr6P7NvUcCm",
  "key15": "24muwg2wr8AevbinW1FdvcSDfH7MBDpLP8eBEYSKU8MDJgqo9jJZa2qYrftcWk5K5cNUAfEUXva6yW9bGWJpnkgg",
  "key16": "5jdjEq9MX7gPWpAB3nA3Ft2EBKmyfxoLbFAmA83f15HMhmmm12Q9MbPKNJCUeFxjK39eyGHwWa4Xaay2da5KyfYW",
  "key17": "3f5681NEVAs5zxaVUKa1wFgqswGHZvQXKo7qbcDaVN2pSGe6Tgiqjh1jGP9FFekmZiQgzHarcD3eQQZxsjdWTYm4",
  "key18": "5MktBmcprdprSG59qjQ1imhFtD5twm8n6SGkkzHWGpxoroycLkdZBJAE4ktmRRCrDPWCb1qLgkqAGg9zkgPyag5h",
  "key19": "5Kw737xZsnfM52nKMpbTd8YnEufs7qHxK6Dc7F16BpFfjrSJE1kLY9iJnDMzwvNb8Pyfs9xt5w5vb9nfEac8MTBV",
  "key20": "5MhRJkM7TB6haSfvm7X6Ay9tyiAEbY656rq6MUPgDQbz5PiPgfKvLq8ETzZNUxuSYwt2HQzFzYpkAWZLjbaoTUYx",
  "key21": "2kFV36ssYUQKvxktSYZMEevGaKH6rtiKGUSjz9sVBTnUBoisZS793moPEJiJJXo9xLxrqvmcoqbcb1wuxno1W4M2",
  "key22": "2478hciC3J1BjMDxtnfBvoyucgfXX32Hxben5HXzsUbgTm2jUVNvoUvW5L5Zv7aDxhUwC85SdVe5BAnpmYP2Vwqv",
  "key23": "36Ci95aGvzYgMcbxSVZCVd6aTs7pHzc1K44v8CnNvXbUsvEcGTEtHkhLrfqKKWzGutxJ1mfboJxLm7R5HJLJurmV",
  "key24": "3PkBGHVYw5PugK1g8t46YW2B3r5pFKostbkzUcvoXiow5HBmuwZiQzqRGQ9yB9hz3moVQBEW1t8twFZz9VQF1ToH",
  "key25": "26rGLG53Z6VbtRjnonJoKsk27uDSZoKyzpJdp3CFCUCoty1LMLCRR5WyURP1mkR2XkVaCj9waHUmSWrWp3QfuSUe",
  "key26": "tKvZCfd7Mui3d3Ga3aDDtNfnWbvqzSZe9TU8UqFrRSRbGdT7jgkwkNQ98ntWkHxS3G8BragR27oBXdURGzg56x4",
  "key27": "5eoLcBNkNeFi3m5fSNxs8yVwPt9p5ctqa33b5bgXWyGTqQxjyXdCAW9jiYQFcc5L64m5mVoHU4CwX5xop6gKqkZZ",
  "key28": "4EueMiLiQomKSTYZvt5BbR4mRWMbFgKH1ZGJBuSX1hjcLV3PLQWU1zZKBBUgPUwpKTp3U4fj814N415RTbBiugn7",
  "key29": "ZEq1fYsGPZDxPgdDLj2V2cx2E7XUngepfUMsV4gEkid6i57fwhtCWFurqAkTT8qxiATzc2i9cL74ws6C9vegAS5",
  "key30": "5NY36PNSNbwLmf2k12WiJupMXREzdvEfK5pbqKmZtrp91jG4iYgFDUHsNjnsJaFeQVLsZB1wo7WY45ccJuKqRxdz",
  "key31": "3cwwaBKL8A4UVpCQM85Jj2MHeqPb8szNLWy3chi5v4viNyBwypqW5w7nThR898pmF2UEPoj4bejRcmqUzcunN9g1",
  "key32": "76yE1uZahAm8gMLfJBjGjQpATafedb5efCWTUF8ir3TyzUjJvom5r1HwegH4QoeYvhd83eyKjsXHnxwQ19fDgan",
  "key33": "5aZMHXyeySoADREXtQ4cd6tHdtu1yx8DWy8mez7rnAZBRe7TSD71Pq7eRRzEpyvu55fKdLxb1wjWEFZax1yRWWRD"
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
