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
    "4HgW89wqqjy43xoGb84gvvhfSPTcSnnFSsQkgibPLqnshZWJhU8zQdyNHWEvgwzWkYevRSQdW1E5xPgH78zLJX1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EU72JgoGHs41Tb3Pu4ErYHwFDJzreRJJim4MdeTPMhjg8kFCcdLjdtx8ErgJKCQZ23entby9aSJJ6LSzAQwTstk",
  "key1": "3LnjZv82CLoHcEDqrz6JTh1YJhwELqTgeRFZ221F8LVg83GMqfJc8MB8UngCXju5mAwD9qh4svGCZ2kQDbGhduN4",
  "key2": "33haBmFaBsXv8PokNZPAgTMQeunABBoAWwNH6sKSjgKdvzuxFRetAKqCrtiZkCRnTbVnr8LP3QnjNuhtzxnrD57C",
  "key3": "44NgJbqJsfgABKJ98mfCMwor8GiV9F9n6nDLxpNKbevBDN8szDi2Fm8Zo6kyXYPozLZGM93r8eU5ASWzg1aZcVdF",
  "key4": "3bd7hBZpckh4LsxXzjbKUpYq3VHjURjSVM2d4EXCz6AWdc2YQdiFPwGK5PcawRjAvFMFqgFJtH8N7G29mWFEunkf",
  "key5": "2PmSnRXNzpBTubsNPqfxhoZ2n1nw749SYr7sRY7NmiSbGdEVeL9BA7KxvEK4beca51QRZ7UN7haaJ6MMTwnAAJHb",
  "key6": "4cg2J4Mm9ZYvPByXcSHGg73KkBC9MFz8RvLZ4c6tUCrMRn3Y96MgNgy6x9xNyWmykNhHWkeD5xmv6UcDHT5396Yp",
  "key7": "5n2KJaNUcRGoPzEC798rL2CL6nE6CXJ2dbKW2UxXfAcPtv1HviRGKLfEBDxp16kkKbD73nZYTjvYekAbEroWSoV6",
  "key8": "Pht6NziGcPYpW9E8FEEM1oQPThcsjoViZjD7ema2SpPzvgxDzNnXWY8LNBhscjYHeLJa14UutprZJZiSFEK1pi6",
  "key9": "3SWvqU2Gy3ru9p4yyM4SUL5StjmCMbUrSgCJ5R6RqC5TGWypYfGEFifR8WP88tgsfQEfnTA3Z3dDvzcbTDwuG1bq",
  "key10": "4ytXD8bnwBfsJQe7bgHvupfeJPU6y3jKSewx51cZbZHP2TvmkxMkggGccJiKBjPPUZ3W3291KpjtkhvxhFe4GbFf",
  "key11": "5pUG7sc5NwoykH1jvsLVupkoa7xpLjn7RjxGJcBo5y7kb7AgLdoCpPaL1jD3GEFufyKhfi9zVdUg2JpuotVECW1c",
  "key12": "3MnKgwhKEFh6HmW1Vk3UV1jueMtq383sZ4nzxefiTKtv1dz28xKwHbKffcAJnGcvWTCAwFAfDKY8fRPsWHK8VkfH",
  "key13": "3p4A9Cme6XU7QKS6RGQa6EuFB2NA1AgYpM9zUdX2icfrKYx8EMVxoK2avvAXjxesdQASSfQUPdPCcgKZQqDbSZct",
  "key14": "4jNi6A6hkzxtErX7YHTAPJR1wV4ie4nQXKEwHAAgEZwLLbNwEx7Srk4zKntEotbc2PXBeEBspun3x9WZGJVmQRb4",
  "key15": "CGcuszGnbN9q9miq5nX8nJ92KMAXxtHGq3aHKdk1TVPRUeYngCRWN1BzbEDt8uvNZc4AdukdPospGdqsgQ8Ks62",
  "key16": "52VckUziSdEsYDQaBVjkzasj3RTS3o3pPMCi21kaz2kX6WUNi3iPRJPWS9v8kE98Q8ZQmH4VzuUH7Dk2fGzi3iki",
  "key17": "qXtUqqRPgub1xCARYEaNZVNtvC46doLfYWEtcNdror7GmweWfkMmdNxAsjhFBpEbUYGQdDKCGQd1guk6J8wVrNs",
  "key18": "29x5EUoJC6vpE8q7jkpTw5k2A5dCgXXNuAzsJ9kyA5hs4pwcc6n2dJSaq79hPPSgQZmXebbmBKiWT4meyEvA1hDh",
  "key19": "3xYM2oDqyPguymn54HkUhabjradUf6oaad5tEPLW1gZ3DxCd8D25WtME54ivsoNCsMizJvuFYT6EyLQVJMAjNrSx",
  "key20": "5ogj2dYUcnvK5D949agJvuHMAT8MjvmeDoqwBGV3QbZVpHz6vTLtyWp2tvaGVr6tBrC9xvM9SRRdzKV93bvRWSKr",
  "key21": "3Ugmxj3mK8mUPXDyahQ4zCbJD1ETR4c5gv9h4NKRc8fmuBY3w5QTRk5snFTWk4TPgmq8rmDAuVkyfH7biZ1yUnx1",
  "key22": "iWwKxgmiwyQbWQRc8VpM1b3sANZh1edYqmX3pdPYGooyqepBXLLiuwMHCiHZPUHvhDXDybUmLGbwxAV6myxV6EG",
  "key23": "4sgukrfFUL21wi6rNRcTJfJZ3nYL5UVMa4FqGmL7SLY6YuyWBeBkcTgFaPBk4JEV23PcZkRrAK2JPJSeS67CZGgn",
  "key24": "5JmDrA4Ko7T4RSL48kXNQwqd98Jcu9yBEDGauMVE68Z4j4CN6SiX8GqKy5r5vf8ch3GiPiSyr7hgRuAPB2E13krJ",
  "key25": "2stFtdMjyBKvXoYBpWFSZVSvHiphv8xxPpRCuX8LFfoNWtsmf5DZCCNGGtvK3ZDhXJs9mNXgw57G7BK5CieoaZ3B",
  "key26": "3SJXZqzUrkLnCk2T2MEiGq7NWJz587uAKNNeSDBYtyS74AxzCiBGSHW6uzMAC7a6cMoqmNYWSZDqDMLtjUxTNBoG",
  "key27": "5P91Eno47HJT2FMH8CtUJMx9j6PfH3sjoApSNGL4y7bz7mqbVx7RQ2SAchxfVzTGTRYqhCr92uf61ua1xrQrepEx",
  "key28": "5LNYZ7xgaRbxNGZemcWwAkZ12Um2RCMg4ajrGFzBTJnEdjzrbNhjbGEThMGbmRWseySca9sNdxpJVC4uAjeoTiPy"
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
