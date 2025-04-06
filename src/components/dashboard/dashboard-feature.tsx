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
    "3aG5RnrJAhuj1AELUxjxQZhaRzXcUA5eYSTSGXnis697K2PLXUzHp5KAPCDN67TwF283QbC5MqwwjCq7HySq2jw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JerPriCA8Ek56NbN3tYs8swJMC8jCq9DA8tpfYdtDfNug2CcyrMjUqhTmdintJiawFhqHaoBRQW1sijp6oom8cR",
  "key1": "4so6xpuHyMksWySzo4cZLuPvQiWkAo8wezdL2FfMLMguEvfzgWFzsoeayBnspsbdZ95VDWFkbjmrkJ46T8wbWKrt",
  "key2": "sUE57KtwywBRWkv4NWJv8JaY48nDXCY71FqyiiJVV9za9pP5NeuWvy72gC4UCdELntogUnn6DUg1d3ahbRRQuns",
  "key3": "3mCMBK9KVvasAvyP95t1Reqt5jXn3HtBkzjvjMi15379fWrYPVJ7n9D6QG6mTbo1Voxrc393PhgBLDjEGA7AJLuc",
  "key4": "3nDEQ5NeGsgR5LDiqMnFph146vZMCzV8qpEtRH686XP83k2Q7eH5Run4rVJ6Khe5gXEsFghXSHmfxDKGGiQuS5qq",
  "key5": "3dhbcQ1uGRcrNfi4Ahmow4Ah23Sea7ZcCvVkdCt43gWbGnM4MTzD2i9CRG1vvjmYQTwiknDKMUyWk6HRbtRQ8FEm",
  "key6": "4GyL5bTgTib93h9uQSNhv1MhUNgDv28RTrzSjHXKF6drEzozg8yQz2wUQCewQAB9v1BeFzaVsnMrVAtFGudz1EQG",
  "key7": "qvkyEPMvdHmzgJSrcxN3CvjKu78yoW2pgkK7G7tNGXjkWPDC2frPWMxw3hZd5KmVzFhpQUFXE6Ljw1QzxTRoWF1",
  "key8": "2mnvpyj8EUs8tQJfopE1H7mx5qi9RqT151n8MKEXkJbWKcitN1JRtGAqXRPeN6ttzUZdMwGGQqtiGKRuSa6CK1Xe",
  "key9": "4Vi2wh4R5JfHdWf8wi2zRiRkp2vNYpadBGB9V5RPh8sixm7u2UsaW8feFdCAYDTfUsrcyL2bQNTLXzy7B7Fvgmgk",
  "key10": "3AenDcK7faTDj5ppDwchBPhdTBcf9q6D4owsFd1T43Z2AR4JDw2f7CXMYSXs1Fz8Yxu8jQ1QDwDnk1BzsTWQTyvF",
  "key11": "34VcNeVpoeUpcMvk7DZF6KzUADJ5pCPmgUoL6wRXfB7pRZuwphgQ3DjY8YnVdLuqdFz3ekYkQv3KMFQttw2KUPKa",
  "key12": "36TqU2YGbZddoVMmW8NDAxYcEBVAogPjeGh9tcd3gbuFqzUG6wF3ePRgfJDaFgf9gr15FMapRM1WaiuGJDJ3YgeZ",
  "key13": "5AZ9xkZrFw8EWC4PccqWswpBCMGhJhwNBAJMWwRxEva5sJ38UzRxgSXxaBXw8hKhyrBkFR8Km3Skybo6iQFVr55U",
  "key14": "3KPWozPFciQTZbs2FzkcP9JnxsKYrWyfrEAswKgQYj52723NNfaY2w8UD5yAFzS7XNT2SyotAJJJZg4zE4ZDNnao",
  "key15": "2sih1Sh2yPYBbde4VCThF8PbmyMTHjVw5U3NKQF8BEu9BPvse6ZJygUfm3WsYNcygC3LXXG78j1PMyRMpkSRhARY",
  "key16": "3L8goRJcGZ9xJDnhjKAeTCtk99AtmRQgxqAowi3VQV3dF2VATWEfq1gSmqGi3xjiPcP3M5XRHFuxxgUS5eeWdaez",
  "key17": "2zQq3XqTH2U1vZ1EACmfNWHax1xsfWcztB47ixGEdfL5jy4u2mSPLpdMVe6tEmERwLcM6a5YWTaHocNfoDDfWsTk",
  "key18": "3Bzk3Ko9UQfypXxcZWQ2p44zpNf8ptMWvkmATr6DZjXiue3GgGRyqU4fx4BiWgtKTCos9QJN5i15XkXP3sMCY1Xy",
  "key19": "m6dEm6t7ygFm4zFjSESQP4F9Gmp1tLzNNvxcCBZ1iM1F7RZJkMzF81XKoLHK94LW7eEFEBEFtPR41tHzSpANbhy",
  "key20": "4XDY2ybBEG49wzYBzmpGeqygi4EihC6DxARAmbTaige7eH7UZWeABeGPhPDjFAEuji7CHAt8y4dyprzsDaqaRFJE",
  "key21": "3KjmHZtFde31sDaybrnonWVwcsXEGsxNpmEV7QBREPPovgewGrSWpiWPkWr8zrdWfTfta6fwbH5kAcbPF138BbqT",
  "key22": "4dJB7q2dbBkRfBQRA5PVFD5UyTAcyScGy55c2S3EzxELDFbFmrbTJJkQp3Q8RKfnwPLVWrQ73p8rWkaZdQSCfLaV",
  "key23": "YHjy2me3W5F6rbmjZr6H1pVjMXXcZo2tAnoZEh2evSNpaU1KciUFr5A4upm8aV7ieEqVqgzuKhCoYY7TqvFtqKW",
  "key24": "XN81i8qPZb62t1ScFynRqPsfbJTFQMs9PLK9d7Au3boTrSez9o5iaLJ3wCcuMqZg7HmSfYsVj5EW2977sLgZTwm",
  "key25": "4H9dtk9JqJLgorJs2FBQMGhk7CcujjUtMYRDjmmQjQbCjfzstA49EACqi5VvaqwVwf7R92akMA6SmH5tYCT9p8Uf",
  "key26": "5TUYt8ExYdj46vw5qEM9Dt5Aa9GxmCmR5Tim1TPF4HfyQHcn7P4KiSo6y9cQNqQazzoX21paRCiZYxthMBT1eHgo",
  "key27": "3BCKdhHtj3X7f4C2ouv98HPYDA79BcN9ZvwzrYk4bKcEhsKhMMGGNSRch8H2TpfwAece1tRCC9fV8FNHvTMeDCgG",
  "key28": "3u9ayVeyCxEPwBM1j75PPmyfiyc78YEo9iM7vavdfc7WgZgsrzhVYbcTCCYVWqhu4jivLcAQsz6uuKDyzbMgmCGz",
  "key29": "CVQ7fco7kDiHJB356GPBjx3bsYiPKtsL1PHQFZEFG7y8xiGtiHsYkeBbaAEJ4mMfETWJYgS8hqdqQ7UWAQDzM1V",
  "key30": "3DyKWjtfKLVFXXHF7R2mMP4ENrHNwGWAnviaybTGZGcXy1ZPYnr2SYfepDuFHcFAcGtcbVqqgV1ZCGBsTS4T6Qeo",
  "key31": "5RgAX6BducDrkzJYvvdjCVaZtHQkL1RjSocceP26kgixeuNuSxxgaGUUpRro6eovhDB9NXiqSByVb3V5S54XYces",
  "key32": "2Vfuktsvs2ZaNS3SqHerd7jgpQnCymVYuDH3nZfC8psVribwiikDzBwmxcR1Ar5cuHpvbr7zNZasPKQaCbcfgKx5",
  "key33": "4FDpSm8h3VjZGtUYDx7LkLqV3hrZ1och46h5YXKykfjTkBwagh5gM1Tjr6RLXBTj8NTi7f8b79hEfkt2BBPCGPTt",
  "key34": "2fvZMktesWoYRCDcXXT6neJZbxtwjB7gFLz7mbtLtjdj1Rh8UYwCR7mznHduQhH3eZovnRaf8y5whq15uMYXbt1h"
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
