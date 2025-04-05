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
    "yHP18g4vfWNTh2MjKrxJvocBkQE76JikJ72BPpUVBH5WGjkW81EnBp3ZncSaQErqBhWsvnBQHbmfjZkFJVFL16N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpW8EDTy7zQWfiGXeb6GCWVGvA4pyrtdtH66jjQWrG3QmX3Tdcah18hupCnwn1G19ovrzHV7Fbb3pezVj9U49Wf",
  "key1": "3KoBdTyzjLE9iM4vB2FBV3Mic5TKcV4K2RfRgAaEkhjvSuzfeUeBegCcB5hQu7n5DKHUdXU7MPFFKysVVYbDxM2b",
  "key2": "335To9a8V5LKy5idizXVML8kkEGfLFS7HSp8hSrLjiawKhiSiYmtYSB7NLHSkNsRqHrD8cJGAtwWUVY8eUvzmiiE",
  "key3": "5DRGJt11vesAwZZTAKTKdroyCvuCFsmZmFxkmqUm47eRNarnHjojSJ3dMTMJ5W4cWyTV1k3CCDUrd5xtZ4gJL3CR",
  "key4": "2mZzrGcJUjC6c6Vgw6SqkZx9WSEQZQVVt2a5HuyGkFdf8Z3FJuE32MLpQF3P7CryeagQPZVFv6xvb9Eqr1A1WuMH",
  "key5": "fUSJJKCcJeD3JKNxDnrVYn2easavyFbrFatvf3zBHKasvdQY2ndY5nEddLGXDotfvkwWiMAiKsbwH8TPwsTevxQ",
  "key6": "5ozTqsAGPbEJnXJGS8Shv7uS5wQFXzo7uP4t1vmoYXVLaAT221WX2DqXHb4fvsJpe1Bvoi6cDEMF64z9iSTukYu1",
  "key7": "51qK84feg4DcbEHdPoe2Eqkuima95AmN1Dai3is3FoWqyf7PjCMAZU3MPoftEWFSixaHi47368C7AJxrVDWoYPiX",
  "key8": "4nhQPoDox6EJM1aYt2iS4cLWxi59Jixwy2M4pkW9gcWWchFLRCUJrTVZJf1oQzahts3EHmcuF7axif6X9i6nMewv",
  "key9": "5vJrWU7TcxZKm9MF4L8vuqigQmugP2R9UoT9krRBGazkUnFD7LJte4xV3i3pkh8nV8EMucziT7iRfZt351Vns6KG",
  "key10": "42yoPZN344o4CQF3kzWNYK5eavBfoz8aTFUirTLC4fpMjdbygCW8DXxWBbeocNfLTjZjUKdYWjaiVF35WixgNnqw",
  "key11": "36DJCSXrNrucUz2dnywp8QCWVVxEuU6sPUU27dyMVbnTmBgeC9fdTXw5Eo9XfLYrqreFvgTzXNfrVe2dvzGu1roR",
  "key12": "5XMDsXbud5b8guAUtGmDRUsdpv8ayDyjBKdYwbSGDTyJH9t7whGVsQUL22yHLeWyrFzft851FCiXF8PqjH6sXPrb",
  "key13": "JEh3QwT8DNjvN5M5hYGTFzuRb3aueQxStKmRQyuHBthiVR91n8qjhMYjvjEvCJkGZQiz8ekFXsazrb8z7oz7rVp",
  "key14": "26HAX845u7oe6UTSUiBVen7aaE9nhCtL9fdqPTd9YnLsadaK3VhmSivXasoh5zgRnArJBAnN3oeNnLRd8qLqG2Cq",
  "key15": "PG7XmgeXyrzNhnLCGSnzhNZAt3aKQq14oDRMR75NKb3L4dPas3kBCWF6zCCK7GW4tw2hBbEjVR97GXLdyt63bpk",
  "key16": "5Ljs1W7PcvMmBQvdYHWxQ39a1wVSBQzsveEs1SFG3f2mZwC3YWQj4xaMuDZSmDwkpRS4q1fizLjrrX45hgbMKVp3",
  "key17": "HX6wWVtJqS188kwPcsNJXthJaK5oqPRztvP6CD53M651Ppb3sQTmMkTo8Z1pJRLyrBG3Wgi1Sf5CdVv3S5q1qGH",
  "key18": "bd2TBRNR3uUFyrWayrS7uP8viQkios8jVQwqgLNqFYuNsGQbFfd87SDuRxt4ibPonCHehkcatX9BKuSCGgjthKi",
  "key19": "RZUgrgtEohxMmoy79gwUGko8iy6T95Lu6nFT9eN22iCWc1Kow44t4yVWQWpoVMWvwXbVnFg3NC3dQhWwJvH9SSz",
  "key20": "5dYmx7werfJ4cHhse2ZtqTicPHNvYUz4RxoXWqisX536YieGxTtQUyToH4DhJoz7XfE1ggJyLgVxDvSkCghnTKHt",
  "key21": "3u9fLB2NfcmsAVY4jB2ghqURCTzGjh8PxXymxjuD1w8SWDUGrDA4m5sKyRTSPvywKzUKGvrvGxYqgV4BiKFFoayz",
  "key22": "hct8WVVJk9GBVSu6jghddC5Ye75GH6no6nUVQwksiGiTSN7WHArzP63AGcLEFsbvEtMJY5wLSyiujwqof4TYhbD",
  "key23": "4UCMu9fiTxfwLorXjDQLD5fC7kAUPPmM7PAPfRrT9V6s2A93t9eoQh5nB1QRkfzA9DCuUqRvjiCsgCqyJNPPYnHE",
  "key24": "55chbyWDnBXJuDBLDaYKXoAMapCB77hVSeVb54VmDcg4xo1kfjEYcJUkJy71w2bca9Jx8H9mQSbZ6Nk2Hjy7D85t",
  "key25": "4Vbzrm3FNVdd28upExgJRchqsGqPUHJJ7prngyZm95zd9twV3coozKK1uNy5qByLvvK7ck2Cn2mtEdSYYcNqrSNW",
  "key26": "3YxNL3BMkkJQr3B6ruuy4Z6LHHVNzKZPEHxgHUtKyEb5JP9LxGtSVW5UvSB275JH6B8Rf99FVf6dcQpxBQfzFzvt",
  "key27": "vZzHXk3JNsiYqA7AruttJT79X7N3fwi8vfiGxCx6b6fWetke5AFjtjT3dxeMZkYHv6KWy6UzbzrYrSCswyLWKBR",
  "key28": "3yr8uuCo5cazKQpo5JG3RpeoQonJaeJdbMgXtaawmr866LMcCid2nVKnt6ghvwwwGVDvBwRKaLcvdRc4X6htLyfD",
  "key29": "2owAnLw3LpkTSDzPwUsV9DKRVGRYFuxCUvkzn9fTV23KMeRg7jWo5wfineNWKmYzs7MrwW5JgHVDikfzaJ4XdXuX",
  "key30": "dPjX8566tWxSQkCEFbu1Nga4CaqKuvkR43nfZQ2vdpxgaWN7x9TuRHEiDxmvyuJjvE7UsURfH24mYLmPCLEbYGf",
  "key31": "4FySqwWw85xBVqfomiqgJqfJAwnphfSyUsEU6ktrKRVBCBjmVWQFm4fNUwLu16D7xGcmjwPk6n9pavwUFMMPaeLf",
  "key32": "2NMUyAsJxpqnioyoPhZHP2q3mrpE4NAW2kyL6BZASNPFS3MRf5huMixutrE1ePYV5iMYbFu21PWPB6nS22d6u9s",
  "key33": "3b957tfEQPspupTfyXLrkhJJEDmT9vKjMYB6N877h4HJKLutgLQuVxJ6WFCQGC774Fu386hKRv99FGeVxUsZZdpm",
  "key34": "47c7j1ZLYisrvhddEjpRpDAxvvh4BDze1VHYQHdDczNLg7L3oqEeC6EYU7Mesejzay76pracfQDqCE45wD4iWmXc",
  "key35": "5t7dGsV9xsEYSE943GFPmvQvPbcKRsKt5QDTAv5sPTuAY8FDnqudpUyEEDefsxYvpKrdWEx5dxT1zRMoM5bKwqPk"
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
