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
    "56SJ2zPr9MyrXX8dtHba4c8ajJ5sXNrkoWDwVnz7fJswfHuXJgTTg2WJ89E2FLMv6WSkmHiswSUkrfza9dNCDftj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jwGDGn5qkqDF7Z8QKea4b85UVegezqXPsmqFMAP4sjuCJNdWYJvxahjXpvNz7N5Xd61wcpzxQgBuxHe8fAgKgx",
  "key1": "48MhRtbmv67av3SwpYyPFNx6oBNDDbtSjBQKLzU8TdgKA2okYHGYCih3G1mdrwBRaKMcXMGHNdydtygk71FgVu2N",
  "key2": "2Bg2LKku7asSBZ6kUZC3eQFwGQHJwJsfCFyZ6B7wWdefnut7TC18puRzuExBsx4wbJoNkdarL8fJ7rWiCdsqfWBq",
  "key3": "4ygNNxx6Xv1VrYPBTCDXpA7zKAtbyuL9JmSQ4JRouou4ZYGHm2ruoTwcmLCqxH94fP2RyyEQsQBnBcJokLaywHMp",
  "key4": "wE4gRcMCHz1qWFMm3wgGvxGCSjU6gYNmsLvUt8jW3caks1RxbqrdLxZYABZCR67sTp6Xubv86JAPjRKjmURxMNs",
  "key5": "5HuyYPn3RPSHHFfi9Gu4oCDES7zrxjBohvf8gH5XJo3xAQqcHjyQEYj8mSDnVKGHzLyY3tTTuZdwkyhKfrM3hSgi",
  "key6": "cHGiDUivNAgVRtbMSBGwfbfWsTVYCJQXNLFqKE2fusNesjzWtkL9wiUru3uueXt9eFX7SWFT2GqBPp6XHr1FgnT",
  "key7": "5Rms51a3BD6d6Hv3pMfZ8LH1qpBWwKbrHFkwiEEB7Kb3myS57DGdDEdECrLdAcQ2Hvt4WTBQgSivxwYSWTweJjUr",
  "key8": "2emtTgbtdNpCmnfqy4W48jQvCpnisySGYAip9mbyfKZxKEWrguT8uvmKnabcTWMPYtuB37T1381wBSMh6g9CPNgs",
  "key9": "2uUGeyZN8Umjkn4NusYAy9jaBJQtLU4mYD8mThQ9w3kYF9U48MvT2MhxCEZmMWVNC3Cng6SpHco3u1HP4irfLtQd",
  "key10": "5cD3mmYPigofNJpLwGqrh8EdAKXMTjAcw3VsN8qY4eCPSDbQ2erDhVbRmoaJG8nSFqMTVQ4Jg1oZLwaFj5Xc92ui",
  "key11": "oU8LFn2mYtBQFGS4R3Ye8rVEQyJMEqXS4J7ik6k1D8xQRuXD7y6AQXeUGTKfj4c2fAcTjJXTukc4r7TX2kxSYUR",
  "key12": "59PfFTF4UqYG9awHuGBM8hqB5HjuWaCAK7EYCvXJ8f37TUFWy1CtpEh6jKxRePsF2n6M8GAnfw9yfxQUZ4JC7aNd",
  "key13": "WmktMH9SSiDnYihLaBmRtHikbiw22jSaSXjNeRCAtRK4TqZUmwovVo25ADUsZE2vbgKLsuvMPcrmGbvLxHscdtd",
  "key14": "4iJ65171sAHdsJBfqS53UUQWPZZwRTdqyZXme847BWfSg5h2cjU3dQyXuRMomhm5DTYucLmjQyp8BUu16rRhwaN2",
  "key15": "qR1DfAbcCBKmPuqzC41r3nW3SXnykvdSSc5VjkzwcqEq3feY4pHH7LBz2iRrgcHYu1osnyqXKtBaNS8f1M4LFka",
  "key16": "42vzTRtsnekUF5GXxbW2M54EZhMCu4weWWeVXdJLy9NbpGf6fFPdhbkSgQcWRFG82xeH48MYuTbYQ1kY7rt8Db4f",
  "key17": "28GDNVPh39TxbqUbHrSGey1tQHLMom6wvG5tujvSS2ciGpnxUzykRDWvEma37rNSauXiAvdL4ZjTJYKRgTBMYZ4n",
  "key18": "529QpQmpgLNC6kiGDwKGm4cZzjZGLukg484h1CHiF7bhsT7ggT8actkVRNRoL9fvJoe31UqSWMwsHrCYeVFw91TJ",
  "key19": "2QMzMbb7NGEUorPi2X8hQvB5vV8m4f6wvTbnCHMScnnFZoQMm2gVpKfydbbLURpvrrbRU9VNhmnigfKhv69n1yTF",
  "key20": "2aZU4nMoRDsJ2R3awqcMQZShiZQf2unBitC4oCp6166RYyrxTLsvvQpEK7nSEKquz4rZPLWYgfT9he9SRUffuG3H",
  "key21": "9CwzVAjJmx9zXDvGRPqwLALcXZXaj3hHRH633oBYdpbjHGbnEr5ZmRyKicwdjwSsn5YZV7cxgvTsnP96bNKEwuC",
  "key22": "3rewoe3XbvVsFkyq4vG56xQnECvBKef6LBL3sSvs4W6dNzXsaWrogDYuX9HMjMF5kJrY3yQ4b9mLqwVQ6Tyi9kW4",
  "key23": "4pMzkvxm8ErJbhTwdi3jEc9rVuD1xg5s4hBoVF9VBB5p2ZM2BM1Bs1CW1JSykpRK4pmJCcEPviQiukFYFHjaZfp6",
  "key24": "3i1GP26mEdQRnpxZMJPmq9Z1q5ikR8UgKvbzwUZp9R2kDAZSrZU464SWgeVT2C9b4c943mHQPjcxJfmCPYPbx8xa",
  "key25": "4CTR48298DEeoGGdYjxZvEVgSuj3vrAQxyaMmNYz5fMfiA1VJ1RtejB6DuroYmUrPuqKoPmuLNQBBauJ5z8V3yfs",
  "key26": "5mVibV4eb2brJ3dSWmqVMEw8SvzVfSGaLjtdTwWFqUv55K3Yn4LoCZmRbhyBrKPQr1vsikqHZ5d87AsZt1Cocvw2",
  "key27": "3QyHNAvZb1DvGErxXfyh18Nbgir9CNNd9u9LL2y65q7s4H9VzyNbU4uYHqyChPcj4idpzt4EzH4UMbXpnM3Myh64",
  "key28": "3ngKA23zFyYo1sMJ7EiGp8nZPHtkZrWvfA7ffFEdLrkUDn9kojQoiWckwLiVd9K5iDmk2jewYg3d4PZLWST5C4w7",
  "key29": "4rQ3CdR4e1oR1DYXxRy2FQyN25H3GCEbhNhD8kHFEsZGdxDZ2djkqA1VQr33YLMh9Kmom7mfg7h8hc61sYD2kddJ"
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
