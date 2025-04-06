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
    "wzTY2Uoyr82hK4w5W2vHByQ7RTASRxrAdTAP3a4gsnSK41kYeFJRLKLh836D58HVpNrgX444MeANwjLuN8Q5aXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVnMm3bSooYB3rEEahkmx4JmAsKcwDxY8A6LAPYEBe1Gx4NS99DN6BgaNVw1j49phvQEoaP3XkGxs1W9rTschwm",
  "key1": "3DAvam3vvJm98zHMFLJ73bpQp4eadsTwRV2fNdfthtMbLUr1A5kTs3C5FLt523suLBXuU6TGgWY9b1EjGwHfgKZy",
  "key2": "2ds3BgJ2ETZYhnvTn81RPb9rK4Ceqp9FJK2KeG5eXFjRWZzMWWXKYSCubD6csqxVb1ADHtJXmz56tJ7NYfFhdpME",
  "key3": "3NSrzYpGtcniwkfGXKWTsjaHYJd4p4bUaFrr3CZ66eeq7E4TVe8VUGBMKARFZ2bArhjrkpMPAUbVGkEEP45S9boQ",
  "key4": "5XqCAYbpoZR4835zwirPhcHshLaST6UfTzfRdomNCS8hJ2RERJzyYBV8wD4tiKDAZqcdEkma5iniVDqSPJu15xdt",
  "key5": "W6ACA6CjVNFwUmwbcax9iQ5dM5LTDy3ZyfK2KSKZszxfP7NrjcJvQdCtrfb7oZBMJMSaxsALeqmhJjX9hVnCjYU",
  "key6": "2e36bFCsepedE2d9moTSuNGgAvEnY8m6iGewvxp9NkiB7ScbjraRhCgc3tYB1xBic8ii28peSsYy3ZDdWdE74LFf",
  "key7": "5viyn9omXp4XuX8odAoHLxFFGx6exBJL6KryPpYJopMiaavpPfK3iUnq5JAKxtqCWEDqxGxiqqcwQFvsgdJWgPVQ",
  "key8": "3e3U187KuYTrZM1KQEJc4ToeLJkhkP7BVxwxdaLQKky8ogq4oAJH2hGSGLXd8GheJFep32EeZ9rJraP3xBgnRruv",
  "key9": "Jd1rCKpcVwBS8uyhzvnxKohovUeLy557U4wzH841NVgxrsDUvMgKxzaZ7vzBsUf8yD9PZtPZ9EUMYdYATbBMXR9",
  "key10": "2ELTQgVSp3YxtSnv2YSCp3VAA2vZN7VGSYmguZxPmf3BHWTX7kgCGkZLvbTBhj4vjP41fM1fiyDUMceAkopmnMRd",
  "key11": "2TGjoCFRgyBRWWi4XaWrHZgxHHE1QHzXd5wapychubD9jHzGpHPPnhEc4Z7g4VKqgUXhKeyzRgTEPxw6mwfmNyLA",
  "key12": "4yvmirMfYzU81iDgrRu5Qcqy73HBidJrrUp8QrdrXg5xj1MkM8SYQWVZ2GMXqk1tCvVXmTteDVYiMfzSNaKPzhRk",
  "key13": "3JUfMHs3kQ2R4p1khLj5Mdyi7dTDZXCW2mYiwJ2N397EQYceneBWbJr41vGDwxwH5CjWMBkTrfL5teMdW6ao1dpK",
  "key14": "3kLDFuKz87vKeHTwcq5sLuz93ZKjNFkcbCvJbNSFftuXtYxR2uh4BiUBHZaaRLfQ5jE14Xng1VkY8zTdryKStNLj",
  "key15": "3Wh36nhY8SrUZXrNqqFqAqoFyrQFLbz4CRtfhDe3ch1D5kZEH1L3vzJDY9J1b8fzUj6BiirxDXxHMVq66K1UFgic",
  "key16": "5Q2vMRjwDvQmhaCRJh7nR62JKgaXosHaXC5xvy46ijZWvu1JecTFMyKu6pCsZ5E2nttgGfWMk5fGQPrF11aWEuPu",
  "key17": "3GHfzHMQ93rUP1pSFWkrqDonZ2tCxHTwFwxTLZUPp9s6XUuRpB4hMm6hN2ZQCzAsxPUocsLwDQCRTbRzozTdkgb8",
  "key18": "4Yqf2QZ2ss12z23ioe7UFtTDhYXrX8VBfMf8jLJ81rHTduHDn7PSup2P1X4oBN3pQ5sbGYs6n5PBzGZWcQdxdzG8",
  "key19": "5anhTbqsb3sxPuWb1CUa1ybYKCCGeRhhN4pyRo7223PCjV1uYmNR1JrMBnh96V2cnDpxwho5hHBVCT4SvwBdr8HP",
  "key20": "4BZAdHDJXeAnm37Ey5D1i8vUu5S3M4NxWYPKFta6PUT5LUncLDBLanSA1rh4NLCCWDcnTifCHimozot77D414Eqy",
  "key21": "4poaxPyNYqCkQmQF6V1gGPXhVafX6BqEebizYWnK86PNytdWtfhXEt6sb486oNRZtAPsWRogYBZK3VjGD9TbyjrR",
  "key22": "2ZYLKZkrnWJVd5QvDn2ekPWZEjLbpaABovoSqY4EQ6VynZSjnbZKqJQ7FKc7TvPksG2P5iwVWLPU3dhLGZj36egh",
  "key23": "1256PqzQDaiHbzdM6bc62TfFp9dRPaaPQ7jV3oQVKfPyu8V4Pm4BRh7CpDaAcWbo6thcM7RPSHAeSSZC5XS2GnmU",
  "key24": "5a85x1PnhF4MMDhpEPgpNfAvmdbpryvM4igfBiPHMMcY4qKzprnZsmRsxFRxNRYxbFGHFWTzjoc7dUnNW2FTNTyZ",
  "key25": "561sUtPM5ao4CbJxUGaPX6kwtNB55XXVqYz7Qm94R1opFsgk1Mmgs6XDduNPKMJHSWhkXCR8jqQMqbmud8SvEZHt",
  "key26": "3g3qaLsWrrC7UEgnC3jBsWYST8TXi2xXpy35ETEKGgRFWkbuqKdgEbEEoSqsFboNwKNiD7TZxSTETHRRecTqeYEf",
  "key27": "5fbxPpyukePdfSq7VkEmoUzX3irtwFChJg6s6mTq8nL3DbBWo8aEKrSGSAxa9xq1PA7rYfHnvcRzKCzyEnHksBYN",
  "key28": "4p9a8mD7N7TBPyMaPQVVzwazqXqpw7YAP1Y8246Tr8P2a9KAffDYwycEEN4jddUsH5QdQCCijoSyG8gRJGRcPadZ",
  "key29": "5MDiE8EFE8x7dctJ3GTfp1WY2XBfdnDtJ4UCrTnMivJQvQch8MSu5o96NUrCQwsZPNUHwV9iv8PYPJj3Evk5PYb4",
  "key30": "4ox6x6k3F3LcHvDmhV7tkzdnhWfgss58ifiZggUErfbQr1PRvBY2nhGH8rZ5EUhsgyXfPcZLUnxXr5oo3hSdGrKx",
  "key31": "5tn9fpovWWLXjYtfyW5x1sBVZbyhJ6MatbyjsDwDC2w7tgsmyKxQLB15UWY8xTpNe24uvWyo3LPhm9YBNrRNkv2n",
  "key32": "47JQrum1BGyQUXbwzWChrjDUMcoSoKyxo7iURN1fykVny5bsugueV7Lrs7fJPG9oJozJWAPczomsaxPyvG8hthSx",
  "key33": "nUfwnELftzoGoANa5DScTvGnx7pQsJRyZxzZTdv1nfxC79JxNyqBxi3BVNRWDPuGe78MTwBYLfjdEhn8pQn3vpB",
  "key34": "4PEibxn4HExcVuiSfNCxTeMcVbmcpAf4DM2sLmZJx5cQxB3LH3mdj3wCmzEQ6paYsE1nuSQevhb2S6G7E2jAavoQ",
  "key35": "5RC1548mKKcVBLPVtNfdjXHyPTa3ch5y3sXSumMTAVw4Kt6ZaWkqMgbj8h7VrKhNp3jq9CtG4DEtt7P93D2QT7W8",
  "key36": "5AXupLVECJY29U2R2RYoHHUzs3Tob1E9zYQmTWPuxozynoqxdgEmRkQEZbUkXswmxmKzzTvLpmmB1s21rZh7YKSG",
  "key37": "z9HJTCz2n5548qqk4yW4BmYnswmduKdqMiaTBwQSWaM7iTqnrmsNFNtkvDKB7A811buNWLL66GL8KFjknByyNLZ",
  "key38": "2n1ce5Hco1vrBKtvZXyzZwt8Yh1WY7jivdiNtvsDVcKC4WryC4Di129as1bAVriFKHj9Why9DfEeociSb56wtpJM",
  "key39": "2aqxRBmW2vbwyJVe6oNiqtd61gLVeaA7UW1R8xpiVkGwykAA8GdFY8s4nL7wCuB8gsVHBUV81Sq3DPeFaZJ711JZ",
  "key40": "36ukhcSfqmYPyevzwBt62oosnKVLvGHsj9if9ywD3ne4N7pNyRYRLLH69PofyLtZJyx324ZXDLH43uJkdWHFBppv",
  "key41": "p33V9hKDw1n5KA6843EMBaGCde3pKekuTeJknfioWRLg7jCNfqwwJW9YojqCP74qe4x4CZTA6X1yByjsVs5N29Y",
  "key42": "3nF9PEsYRgRK15UMAB72fsx4WgmX4jcDP6YrpD8dnt65H5fuyVzR6rgWfJbrgDDcenv92VvSstkKc9giacLgscUB",
  "key43": "4eQXXraS6L96g6okPcZxswCjSWKQvZB7BzPuFq8f2pXbbfNwjE8a8W3BQgpX65tinmV8WWhkraXeGaUZhddoLVoi",
  "key44": "5jGgeZTuRPH6LAa89M11eJeqHZ5MTL25Vs8TNCHNapP365r2YKtmBJQNz4pxmnPhsT67CdssYLHzbQ4G8fbJyTx7",
  "key45": "5bErqFtvnibpaprUSc8Di85MT7ZGJrDyevzmKxATpPD9FJ99mpsqyX3kiwLkbas1rXEpLSBj2zxiGfHoFjpHqssW",
  "key46": "4cHhMEzxivtxW4F8PAtdmY9nDGrQLVyqRwLaqobhEa1gwn4xiMRuq3Looq2otojruQP7Muf4jfSkZJt2Gb62coNb",
  "key47": "2qmT6QrFquLXnCfZQ1nCTcLDdWH8xfgMdaDJBo4GbRkTPp8XzEJWBjd4CgiRMpgvnaeGSKP9yofPSdKhBRdGDe1i",
  "key48": "2vguLH4z6nPfyNMyLaDm4e7P6ZoZ1GidB8K7RYnxk8hFDEj4vdM2iqakGUfid3c1MjsrHkedbtDCNyyxx1UmeFg1"
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
