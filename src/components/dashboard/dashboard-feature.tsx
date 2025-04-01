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
    "5g8CffMPRQ1iCt6ZSeQXQZqXxYFwFhDzHQ1eCZ64oWFqrpogYXZ1uSaQxRZ1VfDUPkwoietCcaEZmgfcC9APjXX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sq16dcG3khmYVoiHMfFv95BiyapTL4t6gd4BTSsGGVCcjk6VsF5CfigRe9bySLnXjDnf5LV36ueJ7VPsCETnnbx",
  "key1": "3wMi4trGb3izmANqp39hdgsK8ypeB7L82QDkBCi3G1faDzLcMP3kyCuuB9EK1LUgi1Lema4GLJjRyfhZ51STcrn1",
  "key2": "3B67PuchGLEKjnPTKiXikDSNcpgPuzWCpTxEpL8W34Y32PQ3gZFhdsxN2D5vcGdDhMZjzadLzZaGxzrFWJz2pnMG",
  "key3": "2Anv1Mca1TM89bF92ucgUzrPnd1hdG4ZNRqXAYsj2JmfRS2vKfn7MApzKAzKqPt3rFmUEzFVWCB9AxR8Q3sCE1ct",
  "key4": "6NZjgTEmogULsZbZxrnQtcF1suJfuCdedL4hA48bQSPaRGno2wfw4spWtvc3tbS9h6HRpHpFS2N5hBYK5rP8nsA",
  "key5": "2tct6ynCQcUdNGtx6fBzLyj38FnXfV11oWPwpdpyP7y7Z9FEzP7RVzKa7ryVx2mKdM71m3jmiiyJJnGcpgq35L4d",
  "key6": "3KbfVNUxbEiA1zzVmnhAGo68YCEgu9VpeUXYpxfGBXqKHW9FKakuwM6XGvcBcy8s3vahSDp7KewYmPKANcZ9Nga9",
  "key7": "aj9AqCscbfcsrU9zYqQ9dMUzERCVgN1D65GmRdHd3EgiCb1eoJBQY4E36ZxGkBKKqbpB9e1BEDAbMQ5Q4kRkxAa",
  "key8": "2fARLm611viZWRfL8E7odKm7Eo3CHBgk7iHonepRUsubBqFKASbxafUkGaPpyGhwdaj6ncnseMFF3NniBd6gqp5u",
  "key9": "4e2r5Prz94TNXD7MFVcJVBQNgJ83JNA65yribqXny4h39n9TV9mAfWeJk94T95uTo4tBXXCsNUtwc39Z3UstKUET",
  "key10": "stDkHYFHanyK682TYtHZbGdG76tVYoorcgp6DdjhxQATr5rw8YK2AeQF6fgLhbAKnYPFqR2uqhqWwoqF2WXzPnM",
  "key11": "42zN1vfuwSoFTYbUPFQjxt3JmCmXMmzUcbHDTtbYukQb3oqSHsHgz6UJLXygD38x3KZtwyfNioprUJoMqXDSNWnK",
  "key12": "3i4xb9YW9fc6HyydPxTPXfDLC53dKTe9X1SsWZmqrxQUSXYY2mW1adZzou75AJroKPhf2AB2mz6RivAZQkPeSBxX",
  "key13": "2tqdFU6KwwhyJ8ktDrWa7Czz85KEFUQ6wpNhLjLCw8MWEEPwqbAU3QBhSpPeFBbphedKDxbrWBPpQpbpwVfpxmZ6",
  "key14": "54KKwEBdawZwbu6WXFyAxNRDoRVuscX7usGyLVAkchKFP5xFzC88cgJyoB7N3xFNjQWZCvYvqA1rVt8p2cWour6y",
  "key15": "fQg4P7RpKfzb2WaYuGdfHUJJXnf9LXziJ2sF1GjF2jm6EGaQqPmXmFdKuCXvHAdnqtA7ZyHegQ7bW2JpZyRRhvV",
  "key16": "aJtT287BVe2P2izheUyW9oZnYUkBksCvyPJGxoTfWpTGr9dxwzkiPXWqSzJZRnLGMrYwxMozB52RYh6mgH5snfU",
  "key17": "5gN1aUYzbbyfHKy9RHvz22VySBJYBoAS6QDERFYDnxx56EBFzZNY4Bvi9aZmPe6KLq22mMRfrdWUwNLVRJR8qZLd",
  "key18": "47Hbwsg7Q2GWk9qZoLV5qCQAN5pSs5HkFgGmRxvAGNZeiW14BfuhMh7w6uw4tsNY29Pit6cSE9L9zf9hsctxdyMp",
  "key19": "3mSK3MuG7Uzums3eU5pkFTARLWBARchcByD7PK3R9XLb5XCoApanbUxF34h4Fen76QkLYEkmywiCCHscHCo2WbbT",
  "key20": "8Y7T22BFNYFpUHC3zbJtjUq9o8h9ejEAE8QBG9Xf8jQAt6i7GwRVWkW1AYgaLicQqEQxcGnXWkZeepDawF1Xuvm",
  "key21": "ttJ4fqGwuXemkTBQUm42kHYRWh7XHsAcvHmqVbQiQGfCnZWDd5ubQjjZ2dgf1E5NGh93jmy4MPJxkv2yRs3tFQ4",
  "key22": "3rwrn3Z9ifMtTD3Awn3TtngJ4kcPiV2pN5NqJpRYRUqbSDGsUcyiDnZGphQnDhYbPQ6RQ5XrTQHpXi6Q3PugsYgd",
  "key23": "CTdcQU5PGMXVAC4APizknnUAo9EqDe4ajZuFnFrpZ6vsr434zJL49wAGxXGPdDy5DTvofHyVVnH4GBv1CYq5Cq2",
  "key24": "4rxxx2YQJWnZ1UZ97c4N3TJiDUXjwJtZG663LDkELydkb7VqiD8N2jK2kqejDDtsFprWBVvfTVxFfWRd9byGJ75V",
  "key25": "2gnAepSarykQTFjZGtnfxXu6VgmA9FVvz4p28saVftBJ52raeR8wowcQJuWEzanqGTKcXMMDMbZR9zeJD1y9hScx",
  "key26": "4EEFA9JDU8EGv8jV3xjNaNgmmouKh4rZqitHBnabRANRouJJ9V9mcMnUkqxsFEqFjz1ib1qyLB7TrRWm5mLubs8",
  "key27": "4VxeZP3HXexrKabnYueacxUt5oVMAjBxjjxSg4mH4DTKDPQeorsFLRVWUTRV2G3NzjzL85RSmK4a8Rw3vM3pfTm6",
  "key28": "2suw1jsvQntepCQy1sxKwELP6HCmFWWQkQrmS4iWFy29vTG3TLJvQvzPbcQtucX9TtPTamC8Tojm8hGGEgev33Hw",
  "key29": "dx4Lk2pAtJvJi5pqmajDVeiRJH7gaLL6McjN4zgg1aoA4HPHM544EJWkU8zjFxFSP9v6m15LKvEAMXcFrat9Fm3",
  "key30": "3mEYUEqozM6o9v7DcKvhJkmV4q3FtByJZfvUiA3QMebyXkKLFfS76Uw8uEJbut9JmNEvCXSmgRRiytc96xvdPkxL",
  "key31": "enQsjxg3PMSEzPkZubLC3wDrEku2zGNqxiBdK1agWK3yL4EuHibJwYvE7CX666ZMFqRDLrHrhdszawkwnupuzZt",
  "key32": "2iET2c4N3tSQj7YJBtmhCzcen2RxcKNFkQAMrRuZMWEzYasBhykGJfCKC47bfGHUEUfQnLbfczLFxGabrVUm6WGy",
  "key33": "WyR6LAMTM9mPyGt36mcnTcQmysrDKhAvX9pME9dHKWPHn7YAscCnXS3yV3gnkff2ECkSpGJVPWyVMoWdKxzaDfr",
  "key34": "46Ln9NLabymSiM5YQWdn39k5KbWjQgQcR4RYFFBdMthFABr1Hp2PBcjCY4NRBEKso4mLmaHQdi1YTYrNR2YVCfQE",
  "key35": "QJABzbM4yjuqaPCM4JGueXYmzAYpoqUB7pM6G3UaGoBVFz33yQ661ev1oCuoM5wfxsFXXnx6kT6sRNv5mrFefJZ",
  "key36": "Dcms2AbGfvao3sXyr83zgjeRS63B4P3BYPVJTsMsa6o4UicDRib2W2EZiKHxcXa2XbrNE8yNtJ7KPudhqt167tp",
  "key37": "38r8JmWiHRbzMpEXqLGsNTxWAusKVp7u6ssyXKosVFQUqsBCdQ2GrP14EoAWrVf5pYBpz2dDkg2nug77Nv5JLQDc",
  "key38": "3c8dGuUCvWqHrvYisTw3kVjRxPetSWGMXf9XDZdDuMBZdkgKw8yQGmu26Xa6Dk89acFq3FUGEn6s5NViHP6BHaEP",
  "key39": "GSkiVbaZrGCjRVeHT2huzjDe1QZKsgPqkke1phP1PQjevcKAieyTPvaYk8Vm4BUXvJL4pthPmMB9vjZ9GXApDoZ",
  "key40": "2UK8ySrcuDcxx5tiSeC4K8BWC5oDiJPT3fRXBC8THYikC2MpRKMozcUKS71tVaBp14pt8sfeJk5aBUm8xTdCzGXg"
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
