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
    "3bimQUFhfKACRKNDh9jjJksmjHaRozXWbEKokqYsGcJT7M7XX4NEozBeHWe3C2pC6RWqkWCSDr8PoUJqbWRz9ZyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvkjjaWmw4YWYG5XptvHfcRn3Xw4HC4Z6aXyw4McEi3WGtV644hBQFz4nTWDc9d7bKwiNimTNmWRnuZsCsh9HzR",
  "key1": "3f7Pm4mHE76QQMthjzcaWmfw7e3n4jxnK1SRo96raW3uby6jaUSnvr6RvWoYZo3jJsWqJVJDRMwsKJtNYBA1UYnd",
  "key2": "MTLRHXQQvCXavgvg5ZXuim8GjRoGLQco4GoQY4Md6S6si2QbZHqwp5WHkN7CfgLvgQLeQpuRNgRCarya2uzhUDC",
  "key3": "4snXqhhWzUh8skZk69qwFNrTX9QkPLbwFAcvHYKmUCg3ukvqYm3sJ3j2UCV4qAWCkyj9kUB38dBbyAvYpdTGDoEr",
  "key4": "2dQaFC4FFqhJwPzJrUjweP16vdqQapjVtYqp9E3LJ6gAeDuUB4aMpAJ5drkefafJPbMXC87uh2Fcf4ZcujKHyfRW",
  "key5": "5p3gqxzuoDmLC4ZhYiSTpZKD7tuPVJhwrm9D6QhZ7noLkJUPJRyDdtiVsnBJQyc2siSzoiJdEAKKKa4SGnvZMVFo",
  "key6": "4XVTt3GQm882EdqGsabp5s6FzS2kybeihaFNTKfiSW8WQswxYAk9atNM9bjgw5dgveAH1tjD2viADfk598pybtmG",
  "key7": "V3D9yA5BpJtFCe7WqqAttFFzWLRy53E6WXcC6jf7PbymZZVUmVRtFiUMaWvoWXhvjmFwYjx2EbVD5fRvaYgNgnX",
  "key8": "4QvogvrKGP1eLFxNxUNm3M7pFtiLt1ejecGzzFPkG9f9DyTxwhCA4HQ6xgMCSWYSYvA6QWWSQJHersaJzXPA9Uu7",
  "key9": "5P5b3izvkSiDH1XcQK5tzxNjzKo21xSq9stHexiixtKojCv6L5MEfkpDbH4cECWEvddE7zCNETmDKPrYJAwm8LpT",
  "key10": "JCH54SVTtdVsyWwyTf1etLwj3hP1qhHmBUNaQs6x7o3e5Ps4mWoeSF4KKewNDFLst1YzK9JFSdQzimhKQnSLKyG",
  "key11": "3PMeavZWMUBAM7c9FM9VHCSjghuFyRmkcoLc7XbeWTEWKTejAQMF1VrzLs57fr6sWNUkStvvstgRQSRhbsVv4DgF",
  "key12": "pbnJVRFvvBg3dvnJvbfr3wsBe15n3cGtpDqE4xNcLLW7CYKZ7SxJ4njBLw3Bf427pXEzqURHeYJvwvqqRuqV8qy",
  "key13": "2FCBVCYoWgpjyE7t8HdQKsx6xngGCXLn6wZuJSRUzWkVF1Jc3AkAFx1GaM4587nFwMZg5ptuWM6g7NYRqFSNVPSK",
  "key14": "3t2UCXAhcy2xT16zJFZtnmers89wvkQbSQqzWj684xrSkEJzu2WRjQGii2m5jfdCbxZWbpJSXdNz1yvwj6SKpXn9",
  "key15": "5uTeWY4ERBWdykNRw8H1UjJWZugqc1gu5hZTmP3Vppgn2vMWCzRkNHJVfpE1QBByQEiK1CZAvv9gGUzADkr33kjR",
  "key16": "2W8mrGSyg2aNDFFeNnH4qW5QDrFRDaoPhKoRFqqUf8ncpEps7YuHrzMfYaNyab4YqThhHP3tjfZ9z2bvyUAvVxZ9",
  "key17": "5YBma9656zXPKGGgRzCLLwxSMPDJkGjPeP1DPPnGqTZfHwHnM5Hrw8cNBGbT9d7xMWrjEx3cFz5jdv3UDXuF3hYi",
  "key18": "5Mw9gnqeFc9PokZcBAvG91Y3Whte9Pukc7Zc4RGb2UVGcFLod4zWqwrpu8wtAHb6CE9HRRApkLa7B3DgHHqszyC6",
  "key19": "5XQuZmuBCVJoCVqUycB1E6pTE7rKVXvztMhnnf8EcgrYJ5xMzVw7NizEa8pnRqeSYHnMEfr6HSz4VfTndiud9rU2",
  "key20": "7yGJN8Av2gzCqXuU7JDR2hqZKJWxJ75LXrn7P5tK6Ss7XmgLKQRT6DHUJ1AgsYVytCBL4xEngK4Myt1MNVVF9wN",
  "key21": "2XtDN3z3DErB3frmcy8NuHiS5sM9ZZqwkx1y6yqAyazdYd7eEgBD7Y8EjjwshoRJqXHS6SB8TEB85s4s4nVnZPYX",
  "key22": "3JSZVUZd4g7XQSGQdib31mrsH4yLHT4P6SXxzrt9ERP8jDNNVatbKdqm5M72VgTHNH71LR95jWgcn6pnpDWByGSG",
  "key23": "3VWAsy4De5Dnhajy3uvhM5SuXy5KzVeu7Ci4jNcFodMHe8tXWENFs1h4haftUHofY936YUJX6Xf98T9X7Hceox2e",
  "key24": "57JLyt8ARTkM5KPgdf96n9i7Yf9QQeNuGtWMtaRPsgd6bdWw7MEVDtRKfyFmvGicTnAQBN1vyNbcNVtsSmnWNiWR",
  "key25": "5Renk7cVEpf1ioBu7szhfBCcoF5aZ84opmwVBzSse1SPiyt2HnT7FGTFX8pfZjdYeiW13a1huePMTEoESrgTUpbk",
  "key26": "5AWN5MJ1MJgh5BowV8yju3bsipDmAX3XwJkttsvmXWWVFdu4QTdkeyE6yEZYSwtvY9Jd8TSv89G2RwPAM6zG6Z1Y",
  "key27": "vKq4C35M4hngkrmMvmDDHQyuRCSQw3WxMfE4yL97mD8NvdNbafn8aP8wEmbwWQyeHD5jyRAn382nf9tAtfSQZ74",
  "key28": "3FuNqim8NENTSckZBqfWhXNVfFVkf21dj7psnD6ZnnuQjXSD19mSjHBJeqVKFL1tWjxgi2xxZQuRngFNkonWjAE2",
  "key29": "s9XJNZRfvkB8VJRWQr5aWTDWN168YPiWJqFZPjeZunHZuyXdE3TMu9jcAayU2FCXecEeP3UzENMAngpyADUn7hp",
  "key30": "3jEXKAmzYB6h3qGRHzdjmoxCrWU3hEWMZnj9tSbqf8vsATEbv3HabmwqABeWJKezD2XPLGeqU5cFyr1uzYfo8nR5",
  "key31": "3y7zcvkxtWzNX9dhGHcESCL52dQbGcCM2etwpk44CHLwPbCxStNkYe3UTn6vsmf26uQM1sBdzSa6mx1NFwX5H8cG"
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
