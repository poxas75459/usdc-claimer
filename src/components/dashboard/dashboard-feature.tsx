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
    "2cBFZFn8bYRpkfpa4VX5kabBoDn934xiWWxHb9oJTrCNQxRJHy4iXUcVZxFPVU8Fz1rrjZHAZh4hKN8FKNMezZKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EyjbStURAdwKKShYhgM3kJE7LMa7aK5EoYjaRyTn6hUQwfTLUX6qVzQmHF8ihvCz2RHNJHKow3GSE4VxpLh43a",
  "key1": "5XNZjLFToZGAros4mv7mztajtbKDK9CJnHCmsBU6k5aDBheiTyWvxaaBsg2HDW587PNHymEbiiVbUJE5CRsvDEav",
  "key2": "5W6AJmvPUb2HBsDGrs22iScqNQ3tWfrjV6KtLAoAiZSKasKxTiUD34bcNX3c69AbHzhQrDC42nepCrrcvJvmq2oX",
  "key3": "3WqnLpvEDC4VXMmDBtwkFrNvx8cx62fKMkFvh1tapi3BJptXUq7na5hWCxtvAruDh1xeQ9oxXBxLJLkawNfCkkUB",
  "key4": "joxjd6nQvnZmN8rVJiSRGoQzznjaVW1sr7DJduYnCV2FnkJPnwYoEHgAPQgi6yCzVbMbegRQHe6ApxmTknwbtFC",
  "key5": "3yoxUQ9bsjuA5enyTjsCHeNFSfxzaKgw1qBuy2VuTVfN8YJRDmkcqMxAQKjogzXobqgkFSEmDhJFCywNyCWusxab",
  "key6": "4DWFU2WgLdNRVxo9Rus44RGDGNdm8okngQLaaMvhQCpSz4MWRESb7z7sM8F2vsAKoZtVpFcw6WGkQEUC9hBoV5P8",
  "key7": "5Shknmv5JNw9UCgzbyTrZXhyG38cjJH7uPBie7orMhJqvMkog7Yn3qjVkignrELMDk4iUUEjBJwbjnZprT6k3AwW",
  "key8": "4TYr66wSi7hvWwXSZ5Y8YP1QTwt1p6MgXG7itPgai18btyBxnYZUKAyp9umxZPPHvAmhhdwaZvatMJMMPLHu1y6b",
  "key9": "46BJh7W1RC9cZdDVsL7HoxF7sEb6z93pUjbN17tMdUGT41emmx3oiEjMjyD6KQmfNd7aCDCwxzCuSg43EcEai3DT",
  "key10": "5Pnfh185Z42683abLMcz48YGNtfRNZuqz7RrXZmc6fckz1TNh9Lvd7AzRtg4Bso4cAqheH9cLFVjoekVUh41FffE",
  "key11": "3QCzrrJUVnbqDU1kopLF5uypV5oKLvEiPFwPC489T6G3Uj8vWLYuT4ndbafwdqmvtTUNgHRbStP3Zrvrra32Qwmh",
  "key12": "2G67cpG7vgH61gxwiiXAnFXswegfPXjBjdT9pdGbgePWvkKmUxKmN6436vmj7NPHmvbWw5Fdkb4RJcdcTbQypo7X",
  "key13": "4Xey5cKFy7fVdKdjErtTr1JybencjQw52aX942y4YQgCjMMyYuSyTNaq41z72KWn9qpqhBKL1jws2SJiie89Eghv",
  "key14": "2YgdeSSqsSTcsBvdHuSzGHCC11u2MamweauUrprB2JQ3vteyEBodKMC9NkVZ472Ya2CUS8fH7EjSvpSuMT67CNS9",
  "key15": "5Z5YRh4LwcTGHZ1SyJVbxZ3bSSRhPz2ndVzfAg1UQyRLiQ9NNmhSe2dUfyuEcJbZ3n6dFr9ZXutiCoELXysFyvL5",
  "key16": "3akJH5fUadyakKPVQxaQymn2YSqam8JRArQrxCk6cGxMmxUp6mDx2ppHt3bwcf4PkEuqDikvFwDqHkUFk4FHAkhv",
  "key17": "2tB4q3MRvTnWYoSd6dqeyRHzTgGqYSHQUoYh6pXvQbLWiSAoT1xpuYBXyMPkGoL2kTcrLTuEQF6oVZFF3phZVbyA",
  "key18": "4H5ZBJbJdHYmqD799UAW6gMWPBPXp4WbJqJSBDgvY4tCv9TzRPVoanvtCqNB4soKUV8cgmJFkXaV39K6vP15nv3u",
  "key19": "2RxywaF3EgeQ4VptuGu3frGny4byHBgzXDLZE1Y7WRbAFeUai1dLV18hpoxQvMvsP1nn4TSBxXsNJPN2Dvczr6jN",
  "key20": "3vzswZv9hVtcndQGmpTBDwi5SAAUNwkQ6saeyHoKboJ1H2pHJuBJ9Rc37TxvHf9A7xa5fKpH7KxkvuEGypT1p9hM",
  "key21": "F3oJKpQmqsC6yAk9XgZY2S2jhGKpYU7XykgwjPhq7NFa2bnuCv3maPrXdiFm4gaaQsZhy7vMaFHWrh4R5pXFY1i",
  "key22": "5G3Yw48GCkvy5nHmSPsBmzPPgwatkBTknbfmG4q7XCgHFSQ2cdDiHp7ML7axTQ5mQtXYjMnKVgaKVf9oMmN1yRAp",
  "key23": "4yEAQNgfE9eKq74jcrZRrTVq46Noj2RVjAYcLEH43XL8B3LMkWNVf6T9SMDeGWitpDSNquTmbjwmJb9AbAkT8jAu",
  "key24": "2uRNYZQAgNskaFXz4rLaM8okYaQm4eYxxmJPX5jPBmYaCJgo2zYETFAkbLSWx67VRZTxsPJpfdwtmF3B7ZQuRAFk",
  "key25": "5eafF5CWmhur2p9jG2awFH7WtWd4QgmH3GUrNaZC6oaWxY3XXcUZCZCiWroqoqCN894qkqN4AXSTU8kgipfYJUpz",
  "key26": "3vdj8GREzZPPeSpdP24RikeHkiGVwFTcjnSDV1avkS3dXL9aXWeZTUsHwBw3hGHrt1fuqo3y3No1yPgUP28iwiM7",
  "key27": "5J4m9FTjmM4hz7k2e3CiB1kSBdyVhNVE6PUNbFDNL7gEdTJqw4thp2pdyKH9M4Yg8iHjVNnS7whrb7xGaCU3jGyT",
  "key28": "3YoZ9AF76WMATMBtU2usfdPHiRnxSRBcUKey7628HvCPMQCNzz1tr9DtAGK5NPG5NEJ9K4NWKzs27ira4J8cSQjj",
  "key29": "5Dy5o1GG5vibkNoWfVhxeNMMKuF1h723DTbHorLqddrnoKq7i5WgzNmtsuGrpbmusYBdTct1Ef7TxQsxjyxdAxbg",
  "key30": "237cYM4uMisEo3344oBzf7mDckWFKZWV48JRRyRosaizWHXnSgrcmBaumR2duEaU4A9BLxSbbTia7Lhf85qWsF8C",
  "key31": "3N81rStcS1DzHAGffhZeCJ3Hpb9GhHafzhEPYgJ5WgdAG7Nh85FsR5QhR8yWyBd27FV2kbFkZNsWSLJRXiowGAQv",
  "key32": "4934eutyj7hqhNwFqz1RdZBC99zfqdjA42rX6AJUCzffwinz7WDnGBMr4Ui7TpKFHUYme3zm9airPWzFoHp2g3kW",
  "key33": "2DLNmyPLAeJJVYugHtXsNzgp1MV95qQUuFgCYWdu654HAFN2tPRFbENR9kCQXYkFbUVDgHHgdLHzwzoC8Go4kLs2",
  "key34": "2gryfuitSi8PEPJd3mwkjHxwBLJyZJJUxwAoLjR6s2bWGZNecXn1phL89pLuSd3injJxDgvBHQ78QhEUmvbqVmDc",
  "key35": "2md7ABMhq6rXfQym4eURzGK4DEan77KmQohZ6oGSJQMzuoqdjuT4Mko3A1w6BR6QAmEKmqfqTFavx1iUq8ian7AB",
  "key36": "54iZgpH7S1C1u9i1Ca8VwBCBoT8oeyXEdcCP9wkZiKb5fmxNfgwktdVrgCPAy6TE1LVVmVG9tdyQeoSd3UJtUq7U",
  "key37": "65Q5hnaaS7Kj1vYJPAag8HwFhgpypaqwQBmF2HmCcDFVzS5kqRBeffVjUrNhRiVijdN2LrFv6YobJKGhSw2tUSQ6",
  "key38": "5wqvQyJqwY4qCu4mu2xPT313a3YQs7ofKpPjdDXjFGWnUm6KDtjmSKGvMgN2GbCWPCSvAtzqGHLYJ4YK3nfLADsW"
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
