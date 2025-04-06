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
    "2QVg1Yyu2zm49PsEu8Ma1FruVBewT1BkWpwsGyfhRVUCnqQcCytpitYWfwf8Ph7Z9gyGHzBR1UGXUXfzpYJzNaG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWuWNpK6RZeHbc3NBY3r4N7YBtmbaCUirQW77UnyLRX2nuz1xfp8B1yqmVRM5wiTWeGT5mJN92tG2mCVd7EeACb",
  "key1": "5fMdwWrz8CNKuGndgvCyhbJYJk4Ua7NUM2ws8t4736LLaUUAPYGcXgv15nZZnEu28Jchy9bW7jWL7z7FDuaiYVts",
  "key2": "3AHRMXN5A7VrK9uNFDdsY5H2RV8DjbJNx7S5M3ZqrF6CbWTpK8xXucgRNuU3BQSMKxj9VFnkmcKt7z9yLyy2esvn",
  "key3": "4YY2gDgTWmgQxJeXFWk83zvpMYAucNec768edPN1CdzGGuQNrV1KfRm5VwGTQZZ2BHUb1m4ZeVq9twXh6DBLGVCp",
  "key4": "sMUXqEo4e8ZcjgQJChva7b4hRWhTnj78gxtLdmAPSN6TTyimTuUE7U3t6uVYkGRVzwrpjsp9PQk1yT7UaSFN4Xf",
  "key5": "5uoRVVmdXVsUgHoRzEYoGkUCPnNvSE97KqtvhJj2F8cEMFP3m6CLKeNXAAaj8ZbfKQEvdiRUHFBe7TB1BBPNKemS",
  "key6": "5aXjzLeDvDyD674eXPbyVB5TAzGnRwUBs7P9ZmfoMZ6LRkGrDrrsn7sVEEgzwRinzUY2sGtJev7sUEb7KJVTZeQf",
  "key7": "5p2opst52ZQf2NSapGsR1Li3UKNx4ZAgn1nuR6kXciaTAyiCVtptMY2EaJ6ULJD1KPyWqxteACBEAT79XJWrQR86",
  "key8": "4Qrp5gErWGPDgSQuTWcFXFhgiaJKwcbmthaPBcDgJ7fVuZeLv66fBsgLP5wn6QBWZABfhmZjorqdLpJBVPoAig2z",
  "key9": "5mYeiXYTUUj6BuvaZ3ScuPnUDxfWzaXfefVKTyBandGi1kTqJ36ixWWsJrypC4FC9qDvfDMiWfigAqFFZF1e9cpv",
  "key10": "TTk2ZpduGKNnCo48neXXiYyC3RQzr79p9W8CYNpzueWszZv1PRfJPL5daDgDDmtuctkdjHot5qYZgyanBodSmk2",
  "key11": "GK7xtUtnuXqXYWQuFfmoZQ7P9QnzqNXvYEmvP8bN3ZgDu4p4oPyp3Gi5Vd7D3W1GzeBS5ZvFRdVYC5B5HEFb3JX",
  "key12": "3u7FPfsfDiokfTjKCGpkofkaG3WyPZH3tAeguCLbgyd912ycKbUDnmLeQiP92E26vZ91Z6dMYex7sbcgGJ8SQnqQ",
  "key13": "4gtn7yQNv79HoV1MU5DQHu8xVbfTm26Uomc1agNc7YABoCrNHKq2H5iUi8WyBELiZjQATM7gZD8fvpNb5FBQgNfa",
  "key14": "5t32Em5oDy2JmMuXpT7HNZSj1yNHWcpgaE5JsfH7vwDHTePoTz9hmBFGQtwKKmkDoBKnURhUpPeELpuzmQGv6SJp",
  "key15": "5ji1hg5h3vPiSRwhvkVQyyrBxikgta3q4cJKaCPNtkuQ1Zk57ge3iSELpp3AETHzPzaFjCceEZRwqKG2ugrWYueA",
  "key16": "3E5c4TdEJ2UFqaycf6d3s93gSgAT3HjZGnngohWTkEVWz78Y1uGM7g9w9CcWBktvoUBDGseZt1k5hcwJAUUMHYBz",
  "key17": "54ZyU6Txw3EyTQmjUKniz35q6YbyoX89HGhpKteSXKpiBXKn94oAXxwTVNNsEsEUpF5GE2xyDNCq8hALWpf32A84",
  "key18": "5qigdkMJsRngbsyMY6HK2iVia6xBGHQGmFfXjuwkUf1QBHn9GG6ADLg6XAFutYjrXkubTwtsXZaUmG9CC2oCUNPx",
  "key19": "3iTQ1AfLynpn7dATY89CNApV8jzLZFhHVCvdUC9C5sqwsvFT7DUg73WBRcGm25mRMZqPrPbSRJYWVYxYcdHMWdh5",
  "key20": "65nDHTbgdatvDGHWVo7K9wAPqM32H726fgNNnLgvBCTiNhnVmhvgonwsxcz4uvtdJQLcCYXCKwf67mRyayJZv8mH",
  "key21": "QX1c1PvH1CGMjfvkHMfZra2Nboy56hbmcKrytzfQnTebfLAH5LeTx4n5FqKiRKFnyRo8Nhdq4tY86kd2o11yRQt",
  "key22": "4uEEVceEHEB8jDuXkfaJPNzWac5ftCT6ENLGr3Rn5ry5xfdHPnFRYgGwF9boX87g7qAAYsitcZdrEXwvDq9EgH6A",
  "key23": "5vhJsqG9SwTL5vwLMTuAtmvFe3QAbmSUN28VTjq3bdY6BVQZP8DrE3VCZi2WUBV2VtWFMuCCqvbXWaw8cStU9W5z",
  "key24": "2NzW6gBw59RVnGyqQHfy8FsNPyADY2hJ78KPoVUo7TgQtqonbdkA5caFmJVVuguNGdvJtzdRdshKM8Q6B4SAJqeK",
  "key25": "31ycKroMVwX1jjwAde5GrZayK2Pzp2ba5ZAcGyosSGwkhmVyxYEqpkFRNnffYn9QnWeMRyNdFaNFzH8ELmwuMWu1",
  "key26": "65sWgNK5aHzYFBRLyQpFNQWK27cL5QSDS6Ur9vYXHdTGTKPDY5CCaqzjfs4Hcqy77qx86vLgtvCJCwy7BVwZhSnj",
  "key27": "4k1XC4d2nhgXe6Sx9QUEa57WVenmSkaBSmGA1naFPHswGJAKSUBYGZLHRBZzxKrEgyGaHfMEGWUjJCfUEWVfU5Tf",
  "key28": "5yhRTkxZRWer4K6hNS6FXwNG5N8nW897guEYbrdeDmzFy4Vd6qrJYkZReGj22bATw5XpQUH3McZbGHaU4wtJB676",
  "key29": "LLzQ6Fdd2voeQEDFtdkasimzarR2w7gzgxt3GkaKxtw9j7zK1GeaLxDAXxVFzDY81nfFjwiiSWKYHvqbuCcXV8b",
  "key30": "21peeNyLXmVM17VdjBDusCxee5C1c4r6sohEKgPRJdjFiB68ELs7fM4mt1REZQ9ZkzU15ASEXF2eDK4CuepHVp9z",
  "key31": "2oS1GVJ18MrrQmmfWDKgMYfb5QHiiyWrz3pmy12g6LPhToLs8PniLGbLVbCsGxb7YAQYCxu8BQsNXnGR6BTX6uRD"
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
