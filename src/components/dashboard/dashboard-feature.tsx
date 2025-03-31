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
    "634smL37EZoA6WufxqcGbbooLJBNVY7BgtioogjwJMz6cK2o7kZj6GPX1BR9V4r71QovHkGowq8ZHQ6ijqwYTZGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eWsNaZhmc9pV4NWSqSPrcCe2u7BbS4C5aD7Un3s8KHeBdVYNg8oyzAkhMfeGypymcRRLSXqhsmYc5JoPu3uSoD",
  "key1": "3CJdCBwQbueGyfziBvWThARXBhFGkjdWgBXkc2Ctp7WrrXqXLASW6HTXwbRnv35q3vkXZ6MT91yy1Rjf8t7CmcEf",
  "key2": "2VCHdDGNkttYvRuH93osNZndxtptDTpwbawMZqfNJRGXNCCPU7ztATLh8jn3eLJsRQxWkayDkK74sGnd8DZQcxqo",
  "key3": "34zr24zrz18wYnvGLYDm5bmNGSfk4cSLJnb1RRyoVLeVMaZKKBq4GZxmEdtZ7zHmZYaphYKAA4iMJGkbffktCkvF",
  "key4": "2h2WinPjUxLtFto2PfZkfziScJCGgHF6wY3HgK9PoLVoxoNnK8B38R7Ek9dL2kcJ1S5U91Ng1RVjqYyv2NCUK9nQ",
  "key5": "pjs1GZNtKDPT4BU65ypW3PRh8zN2jLezvD536BHiwwo3owDfBaa2oU9LXFJjf8FfXyedabtijep1LF8tLc19jK2",
  "key6": "3Bw4pYHRf2cp9DJdQ91UFRczJ8jCeSpDvdD2kfJtkWea2kSewxbzq7TpEk8PeYUXRSodBY5X858BoqDvefQxLyzc",
  "key7": "hAXbykRFfBRG28ZsTwMPHvSbsuGC6qJydugzga1UB17p1yfiSGDKRphUruXfPArtL5CSYEQVryiGruw3XhVgGXV",
  "key8": "4gbf1nTkofx2VmRfR3Bs2LqmDmh7PGimCc4xbLjSoHmdKWk6Cqw8XVZpzqha9omYpAMVonPRxvHMyMVoeb65MZE3",
  "key9": "3iFn6WmvrE3WxJ3Z9VR972i6CZx8nMvz6zBCXB3im2EHxhgXRLhpHfCyN7XFUF2ekHdyXTsPbaYTdbX2SeUtuo86",
  "key10": "43KeShocJyNDoih5m2fB36kfRLqbFryJ5UkT12waACdQLxe1s9eoz53PVomTZPEcgQWK2F8iMYjcVw5WNhbf3TDH",
  "key11": "2WZ3GSUymfBnn2eL2ma3su7w3dMGEiCWYhT8oCnND2Njix2s3t15rAW2j6mQsViEtsBs2RXsSmeJwA57476QDnWc",
  "key12": "2qsMVn1L9wcu5rgxWvauBKQY7bSBdtdTSUC7ZYUgE2zZ4iv1gYCTjpC2xsL2ZKd6SQWwvyzGU9jdpFabxbKcLbkG",
  "key13": "3Mz6tUfKEekQrhU6qPxxTAE2gNFo3vAn7YMw7ir2cLU2pGi2HR74QDV8E5BXumXCqAPXvcucJD2r532XC9CDTjNu",
  "key14": "4fQ1KcNWivgbY8hQhiheLSTykeQ1otAKwTM6A3t3SaNWwXk1okSEwDMm9YTixtSz4CD2GJeKohwEAnXuNULDsaJ9",
  "key15": "64Pm9KeVeDkcgX1rumL9nxg6fZ4QEsQRWRXpthSAUZpy7XAtP9J9TqY9MAsYdxb6vrDSM2UpYxNKvzZtoosxzwmd",
  "key16": "3dEK3S3oW7WYAZ8QPTzysFf4UnBAewGzLQ5syEwjj9LWf8iPSM3YGcXGbNJEzJiCWo8bdR3azH7RfqYeRUYWEg2B",
  "key17": "4e4XinmuJXdPPzJjgQ4mdSTU7h2DZRdaseAW93Pi5d9h83WtAvMNJFPgThXWsCpW1L6x1FFmbMj6dK8pwQuSrHG3",
  "key18": "5C2M2eR2R4s6Xa9TU1aKz4t33SZZtXGLDPr2vcFcnSQwg2BBaZ3VRCuY5GTGtgVvEVJCSMLTnhg4DV2YwBruYrdW",
  "key19": "2VUA2YmPaMAFr5o1RcBiZdkQe95dSfgtMZNr59WaZ1bx2PXe1CMumtd74GKgHqFHtFYhnuWWsXfVCRjG9UfXv9Kr",
  "key20": "4MXBvWDenAkd3Hu9kbK9QopH1r9dNffpB2gmpXD8ozdivVxjsLn2PStsByPhkM12HnkaNQ9Gd3wV6AY5RHT9Ey8z",
  "key21": "65WXtYYPHQiLMFqGNdYH1a4BQAV5JnwTL9JxboLK4feGn2hryn83pz9fQwuw9gPLCcQkLLYstC6pdJffrPBmFrwK",
  "key22": "2ue7ne6sUJ3eHv36Sq1RCHniX8eEFTH2ognuoq6X18Z83YGDgjLuZZ7CLQPMUFEr8UFuQBuHR7d4NFy2547LorLW",
  "key23": "2KLcCRwEwNipmYcrG3LEfpTeC1m6PuJLjN62Y3RJps9FwdP8wDd7FrFhRRiXGY9c53U18LNYKGxNawjx3VvypMJo",
  "key24": "2w6NPjC4xaTCahPp2rBCjtXttuJLn3P5aSrwEWpQNJhhz52VHcoADua3X88yxnDdBYNY21aSEAD7QsUH4XnVvGKa",
  "key25": "4U8mqoqFXfXR6ucRQUteQMKZX2rwTfPNJR4d3RxU3skhvzH1DVXMMJfo7x47b1bKFgWQX1w2rDnsZ7roefGZTnZ2",
  "key26": "ycD2uzCmLWps1rJvewuCHWv2MrP7FS6AFnLuCrCuutzYrEk2vt1ocRMNEKM61Bm9Cqbma9aSTsBH3MQPBLybZJF",
  "key27": "4ei2r5B3BFLYnDU6Sy8gJGMn9NAXtGW9KdT8BCT2YP7kGbe1m1QaFoBYWZs8CnqeRa4SaHzcBuADwvt5L1b8sG92",
  "key28": "5EC9ZmfQHd2wxzd9jY3NdQYUCRNxosZ3AXPbJ74x4SkGJA1HZSYfdY9bACKiFBT4FE7Q2v4LLuSfB6FWYNEUWpZ1",
  "key29": "4U9hcCnEVD4mJNvSPKQofkkbD6R3QDUxewNjhHYRYxGYoHNAxnoaZfUWMdbRgdkutqHKC5JB4Koje7t87TfxpZds",
  "key30": "35S6wcHu2kzAVUSN7HBpauqS8fo6Qoi3oMi7aZWupwyJxZkujxSdunriji6tB7Vtu1hxDczeeBjn4SmuzkMANvFG",
  "key31": "4rQ7Qb5C1inGhoc1XZmmt5Udct3SGqu7hpyEFUkgJATVGx3usvuD1ZWrtsSvtHgrxBAZUbmpNjjZ41ntZWJtpBc4",
  "key32": "25BDx4QemhhhPuBuBUb5gw3Jtx9rsMZ4ccswUqS8MypDQwQhqyJJwgqBbHngNLwXB9Lb5HDzW2CupDoriWZBFgPn",
  "key33": "4dSyCKUbCEJPfJhFXuyNVD3b64kxDFz4pmrdVPAiLsTCeZjgNmpYGCKofTN7RJJZWxBkvGKrYSGg98KYjsPn3H9z",
  "key34": "32jTNw7qkzpVqCJUAGfEBEpEYvckDyjkFNocHTAguiimkDP4cpV7Nqoxr122rfo8NdERnWDz63FeSHCnXsTuBZqu",
  "key35": "2fDKAkVdC1Wrd75VpGWRSVodve5idDqWwgGJnga1RiCjUTgGXMbtuJRo8BQXyFT84wddqd8gjkMsnUwcnafuDsrS",
  "key36": "3XqwuuxqdJQPQopvZGiQo2qbhXg28dsxK1ecgSSwH2LWzs56yCtGSYzWw2dHM812xN6Pn9HjbHno31MRV7GpmpCk",
  "key37": "3CTSL2GQt6kE9bEckoM299nZTRpaQbBxBBtPUV9yGEe8oGLbPHNu1JEzdiMcgxWRyg4qGgyxiqX1sMCLHKfHCAgq",
  "key38": "5etsCda2dsy2WWd9U3VmTPpmKsGMXNPPYe8eaJY6HbZ6oU8f2s9UexFxdSB4SRiYqLJQzYGt3TNPRUegvYA7HcsJ",
  "key39": "5hjsnQyJiPtyLtWHzh1UQbjzy6i3sdnSFXMx29iBcEetPjCGAjo5W9acbNaVaCWUTvbFgDzmmvjhaHdtAaoFWnjD",
  "key40": "5gkhpZo8bCPqqmc8SGSw3W6i1GQ16kJ2TxF2MikubzkRfSAnnvyfueFeprAbyw6KA5a4iBZys3ujnvTAdwV118VP",
  "key41": "3RRaAyD1fGjj9stcYvMVUkpkvsFdML6KApHnTxWeRtMDgch6SDy5QSxjfeABhPwT7bi5jYs2kvjhcAAB2w2wH3ER",
  "key42": "Nj1uj9np78icUWy5TjFfUwDdQWswj9JzYtWVEgN4TYo3yAUv9nD2pe485UAPAEdoB1jq3Rfme4fRwKUpXLi8821",
  "key43": "2YUwzFEX9CCVKn34tJ3mxiriMyscFLQn7daMj8cwQpyYWdmDwrx7TLhWAPGdBpn8hRCAan5s1fYyrem95TxVEi1W",
  "key44": "25w1Eu6mU62i4nRfgQ1T1bP4EFeaet5VVjCsVaegceNo5Dgqr7RAwpCUeVYyimDQgdT7EN3Q94HeZ7Y4eSb1p5tX"
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
