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
    "2UBPWjPLf867EEwnTYU5kaYRKvuvEfjGJ7LcQV9s1kzLgVawCMTPajPMLa8g265qPp9Dobooo8sm14yFcz6uAH4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JW4tW4B8H38Eb4jKMugBW7ncGoHxvvy3b1p1RYYxpbiKBB2R8nEArWTxNCkvz8goLpHdKWprS5CvSBmp94NcSLR",
  "key1": "4XcoLd8WwJppJE3AUCuXmoTABMCd8yYPhVYkkFifYYUCGmLxdjRwP7im2UQJANHinfiaish6bB2TiMQJbY66e7sk",
  "key2": "3uJki5PANMUbgBJeSWCbU4sX7kuKShBy9BgftYHsxfci4FZCWmrjzPDq1cBj77Qh1E7qswxkbs3h35jJc8aduUh",
  "key3": "2rDogkEDMHUXswhTEVpRpNBosbyqWTyNE4wtyyQaP9h6B9vStUTVuR7ZxdSGkPkSLWLNTQpGsx2zzvf1aFCKL2v7",
  "key4": "2EHjJGvvnptfG4jytUunTwxGRnYtQU2U9hFmpka73AM7zR5AvFKj9LUk4CbXxEBmqhvyx8madyf2ZxBVQMS4QLNf",
  "key5": "2ipu9h4Gf6gVPB6ohSq4EAc8eW2QzRw6GwQRsQov49fx7pWZFuayy1gQnAtAyTHGtsRSiV9jtKXR5Z797TmgkAi6",
  "key6": "2eQucbkMD1zFeBo5V6L7yYdHgjVRAuFzLzoc3e1ZdnMPyXwkbouEY3irccL2sj1U2ivyTxDCimz2ZvjuMp7VCBmW",
  "key7": "iXPFdd7e119qCjFu7tqMrytBGZuPW3xXnsDMr6Ax2uGAzcCC2R1UX4YYrmWnpLhwzrc5jMAttQfJZaSLVBgiuuv",
  "key8": "4yWY7DhjS6iVv9xACoPgp4eYB8orFcG9L47Swn26TKGW6pQU1DzrvJX3cQFVT1H6tkveLboeSpFUSnQb5KCp74S9",
  "key9": "3AvBtfsdZd3kMHbaCDPmfwU4vyDiRtuZj21H1Vo9Juv79dBzxk8gZtr13qeHHDBnwqw5fRDPKWTGzk3JeYQ8KRGx",
  "key10": "D3mFhGp4DzMot4Zdh8mNRg3fzNfoczuhk5vUFfUyu4Wt5dTWdwAD5HnhxXwmzJahMMFGb52CuoUeJGj5U2PFWg6",
  "key11": "2wXqS1EvDY1SzqwYEohZ2rzKuEtTBZMELhd9kqn98xfGgFCdVmfCqwL4qwCDdhkJjWrvoqHCiFGkMm9HzFUixiQb",
  "key12": "42Ze9aLUn9iwzo6EyQqFB2VgWQ4PBptzozEVQfqNCakjaiDS5oTkZGkyDQaSV1xPNbVCGrrYtds2TVEZu4Ab3ccq",
  "key13": "CR33y8sNtR2Vq9JykezkpehWKcbTSt6QG3biGQRpNZUXQvqxprYJRjrabnMuPS45TUcMMbVc2QEhExhJvyDTABn",
  "key14": "22HbmhNKDbJw4n9sWonr5AR8osQMGWh5reepL5QnqyHcgU6RQHXYKZjXsbBD9bY6uiz4K69XhiTtqArJx1aE5Kcw",
  "key15": "2kDM511QQ4BuNS5PWrwPLju4LCcSZTiGETRZbmmngT2VXcBCKJQR29cXWL46ySzpPL4apcZexMYUYM8pAmH5Wzhg",
  "key16": "mmjKQUpE8FPbmz9Ga4D3xEcR93zsc4Gu6gYY5f5yPtPfAVsHSdQkAQyre77ePYdf9rpps9GfEA9hEF4j2XoCG3X",
  "key17": "5VhMtA7grRkJBQ5hbhtpAhzFbXRNHrgJ7FCteWhS9hZDb4aXmCTH93MKmFjxWAjRw2whU489VpGUTPEg2xpGhq2q",
  "key18": "37jLMpFLwJuq3jP4YitYYjRRQy7F314kqMJiTeeSSNpAciW8NGHh5JFi2jwbbjiCSZDwP7ZsPmKGmuE1rcXFcqWW",
  "key19": "2Tu3khGNNLxxkkuBieussQ2AmMiy3FLFv2mV5rJ5mq4HQEPGAqRi2Pta6DuAsgCEWmLdSGGTNCWkiPDWJAAtFAx7",
  "key20": "4GoyoDsYerZf4eizVMVyms8wYt8is9EVPx221aP3sXki8ieHayXNs9okENMF4LbU2qqmkEJ8cpLgib9qBKMY9psR",
  "key21": "2R1UWBAQ886KrUuavuTFV6VV6wMxENKRpBuPVcjeEpek786f1RzH1h7jhG5Rn3YK54X86Uo3zRbAqaFiAP1bEWz8",
  "key22": "28YcztM1HqVsdfwJQaTqFeCyqJkvUaZe8TMTxWqysikkoU6rnJSDpLgcuvpqnooViEs7n4yxJwLKqBbp8vZ79fua",
  "key23": "4PSFxo34fTiWpRvRWutmbaVn661uaBXtKdrrLMKHRWYiHofAkWtGJ2gaxL4Mv3UfKyV9hHkZRYpNDud6BaCAFBxf",
  "key24": "4zp6GY2ooEPhqvbWfQPBfTCPijQ8CRsGMTHMfowhBWGckYVjCM54Mqq4Avy7v8pvdXPbP5kp9VK8xWPR18HHcz4Z",
  "key25": "2V8FwTAE3s4bATnsxmpwSBrV11hpmmDnbxAJsekxyMLqz8nCHaBC8EBKjePKWQJhvrGGorVg8v7PANEUHutA6hG2",
  "key26": "y7E8WURndys9tb5ojf9asNUYzbU6gddgdejE3D6Zp9Jj458nvxdW36RimduEWCMShGhYwpmwCpyVPPyBfqnPrRv",
  "key27": "4m2pXzDtKybeDjr2uwmhLTwRusnK5PYvqBW9KgXYBJCeMxiVzbebaCi1qVLu55KyFRSTF2UFM8hEQ94ryhCozGDJ",
  "key28": "2tzz127gD7rdC8ysoGsghVacTDPNWa6HKUZgSML3mBAZyvoBgW9vM5kd1yn1HqkaBKBCXTLHk93e9VaU78o8SH3y",
  "key29": "vjDpsfcscCcR2MNeVs6TB84E9eQUFxqzm88h2bfdrcXc34DdBmzNjnC5FFanqDRZEV4iSawZfPQp94TJG7RDvyD",
  "key30": "2cA6cN4zdWcREkyKuSoHQNr3CccKzwAe49gexe449Z3Q5KS97uJrZcYZVhe7aZeRYufEQbVZxNo9BVBVck85xeXe",
  "key31": "61mTqQJQjzNR2wiHYcDR4suYncmnXBAWnKZcBS1rmyWpyFT8GiCm2ia9GZSxbmagUdV2G8q7sxEzHpjFMwZqAFws",
  "key32": "2wf4Ywccm3GBYQR4UPqyWUWqmV53grMrbUpC3y2MNdyBMVaUsu8Y5KpfZjE5f3yncX6BWPRhdtyjagttUer9P9CQ",
  "key33": "3knoTVqRiXPNpc41wZeWTQw2swdTXvv462JFqocZ1VKWE9a7rduRY2hcwueCrJFhsUkqmcsBULanK1V7cqasnKCf",
  "key34": "44S3zDE49hMibQGdbov7D19N344pWY9rqca5yghgcUqyn1aRsyoVZNFbDZnu1am4pU7CRe1zJ9LgdxNLGAbP3ztF",
  "key35": "hqWPSEX5DyEJSGXNqrt5avQ5EV2RLx4qhhjgcsqF25pvQmpHK9LyUxk8CvhtJNgFysS2xNxhkpEUqjhsZtua8oo",
  "key36": "5fa82U7w4swokExuSgjv8JkhqmiiqdLtmBeRZpsk7W8UmeQpwjvs8omk8q6Ki1vza8o4CR7oXkpGwSnsoKaLzQbb",
  "key37": "46pTF82tP2ayLibm6LCAgw8J6SiZwxNCbucET2sYKv77iC9UZ8aZiHsrS79At8HPEBV1Jbgjq6K9PnWmLdgXPJZf",
  "key38": "BqdSoZrodmcUDDK31PyY9od9nixdPuBdAD5vFWhh7c5U8Tz7WHLjQRv5jZKYn2rUFxmgqoieUVM6x7NBDZeh2De",
  "key39": "5ibS1FzN9YdAsNVpzfBsSq8Yek4313rFy9NK4rwFEtJeSWH1BRvmcbBB19TsProC98Un8gGSUhkgqPdPACzcoTh7"
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
