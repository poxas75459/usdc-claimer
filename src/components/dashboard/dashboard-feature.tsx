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
    "3JCjRfDocRptXpF5wwmQ7rdh8uUS3iDusdkEw5jGye5S2zWixm6LVF7tA5e5XYrkWdvjgosSiH8qLVvhCv9JaJ5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Q9rTZ2x7mfh2qSGZN7UU5h8WQW8Ge7x7TnEpEFmiqPx7xqjhRrYBUf9FpBuE7GKkgpHRwgTivJP5jE88PQvdtR",
  "key1": "4v1V9bmyZNJ5ZHDBx5hH7LFLLuRBQ3zYqi4phPNsWKsKE1dJ8kDBKv7uFHBjySafVVdBmGa7NbS3ZYK8qMrewgUi",
  "key2": "4zX6xcnnVK5dnzU2t69sr5bcEXwYCTvp5zfghJuPs6AnP1kXetaWEGeYh8LHmPLPXUiupTryypHc7pmNFe1VPaYB",
  "key3": "5hrqFYKajMd1NdmD7YR1VBqwAsN9H1ePhpx26h4QYfpCCWibuRDPLDLViizoJQ3FeNeYxQx7ZM6SoEZ25BQimNim",
  "key4": "4BjyTMGBaY8LMyuks8GgZqGdrPHi3SQBLm6JCEgU3tKbA32iEMUVeqRxWey5eeV6nmRprErca2AGrr2JrmFoYG7T",
  "key5": "5r5CSuNvhfZQGzvnApPrFQKiyR4w1CLeGNNYUdCLRszbcgykD4QjY5NUB96d4nC99XdtQUQVzbdvFyhn8ZdVwsyN",
  "key6": "2hgtbh2LakFr2dN5w6FS2zSqNkHCKvLcGC22AVxnBB6HqRmnS9Q46FLGvufx11UHyN67pbFsFy3pgj2NsPgGkHS3",
  "key7": "4AJTezCWLQ3kBVKAjKvcVCquyYYKewdbAUrxa4WE91LGj9zfV9dNew9HvKSWghWJikFot5ji6sQaHSaMHUNWpXn1",
  "key8": "4GjpZEp67cMSAef1CnFLa1xHh27RgGW6StWsVNGGFpaUigqJgp8RNGz8FSWz2JrvSRMuzeb7DR2c17qKhnQJWSLZ",
  "key9": "utSfvnfQgx3dgq7AdKxwg3sHvSdqPRyvvbHK6K892zkniJxAgB9dV398NstmhyyhEov8nERD9Vr91hzsvxed1rY",
  "key10": "2VAy8EZg6ow8mR5mFLWhazsJoYH8z6JSJRQSt5jdQMfJ1RUxvVkDjYjpHst9Zf3JqfRgPoQJU3sr2SP32aRLdmDJ",
  "key11": "3iCXDhDRYEkswHTHrvhfgQ8wwNVsDUnjckV8rpioePJxNaFBZfLVPPiMCA6Q17vyowiCxX9KWu8x2ZKAZ2AvuaUW",
  "key12": "5JJaszXRGTWer6fPuXwr2vm3CvZu8YZWzubgEXRPibPwpsrVYbEsHNtyMNzQqxubS4tfWGssL2oZcssEWrsM7GtN",
  "key13": "3Ybj6KnxoWpFkZKRzcEB2JtHPeb9gkDxkFLambgSXybH1orFwAmSv3gCaMqQuyDmY64fpUnVSi8BjY2vWh9B5aCf",
  "key14": "5nB2TEG3u3tQZZyFTEJMXvdiuwdX7NBbHiBE5Q2q6EKfSh3aphotVJgyLTqa1txV5SvCdTTKjLZsYWaVYHKJBx6f",
  "key15": "Z9Ln1SUJ8QT8Wktp5jRA88ZEQrjuqU14iwSDHdqzhVnTFs5Tmo8f8YDkpMpbKrREmKSecgQHbe56tN1LNtQtLVJ",
  "key16": "4mS5SGvtDdRLGHACyHkLCD3bDfmu2q2qXzjHS2oK7RH15EgRvbWsMMjqwTSPHw4RtJKbvkf8obfnTL35c1Bv6LoV",
  "key17": "46jcvUvk1bPTRLrLKmod8PEQbQYTXGWj9kSTLzE9R4F1sJN6s7AV8c5J2aa85Lz5zieis3KGEvcxeeuVsyE4FLV9",
  "key18": "2S23HqvZHRYMyRSeJf2svYoSG8LUS5Hd16LckasCFnxxv9azct1VMY3Vm5ArtEHmRCHr7HmFhzuxisufwu93ngrX",
  "key19": "ABtreUFrWBLvGNpZUsfLspYjEQ1DkuzkJEM5qEHhZkBLguxUPhGK2FF81qxWUAdUhxyEUKWFng5dmnQvqibAHtn",
  "key20": "VC8bjpsEcqqSvhbGgKnZVWKTYJc6KoFufCy11xFx9hVJyUCLToenmH1NT6TaKKJbJ8mhx9BKTEf5y3UsKKBTz8V",
  "key21": "5ue6JXzEw5SusxVek5BbUs8ZChMMVwwD9v14MR7gvHdDonMbdiHPWFC8SisTv4sbGnpYpFjemf3aYH78Uvh9vLaq",
  "key22": "3BZ4gJVHqGrPKgpCU17CoXQmWRzt4XVtFsTzxTHnSKic2oKUnoaKgT49yN85GZrp3bTYf7L7zNRFTWWbiSZNiaFS",
  "key23": "CTqut3j6EG5bWtJHhELcdbnRXNbj7vZJGDE5R7EkLFb7itcfJtPGEyiecHwqvmjSphEi13Yp3bUAg8u4UvHt6yV",
  "key24": "5tMmHKdqaH6P2b3uHiPdHfpVBMinbNp4T5ZoC1DXwDi5vBqJia9WGEA9XYjtLdLyiM4prKcU2Fbr4rDAXxwC7cQC",
  "key25": "4ft6Pa4f2g8DWk8jSCasa99pBNKE5fT3E1LZ3nPQ1hH88WtmfS8AWre7NvEE7bahKTE5rDX737do2FLyn4VCeP4v",
  "key26": "4UgQDDe4Y6WUDLey66jRy18ND6RVbnmsubV9UcfSgBsiTddQEyD4xqyo2ptXtiwreJfHmg5D6xBApXJmczgS319U",
  "key27": "PvZf41sW9yXRasstcxHiELU35y6ScfDFT19SKae3WifZQ14sHdWabTXwfvWPj2iZULmhiqq4g4ZBHkMKK7GGRjz",
  "key28": "5ELMMTw2a6fJR1XsGLJjvs69QcJTdEejjBYZwe2nw614hMe2CQzX9XZ2ztnr8AwyWrrLP2cg7WRmbNtZyH9wD9Z",
  "key29": "5AqTufvTDpZVFFNsXdfTQUbmh32LxdasDnr8533Nz11V4W8nonGRwcqJY5LyiF2dCcUdayCAjCmMYp1iwY11JTuf",
  "key30": "3YpMPvgt6yzQV8MUYCyVXFcXYGvpmDYpofXvEDGjriyuXQJjP49VaL5rDzCgJoWFsVb2EFyUbU9nLvLAuQGLGVnS",
  "key31": "LTfTPvsFXpfTnGhpinXcV9WCoop9awtgp3EEeSdbNo6EGpkEftgUboKCUXot9EmooxpyPjEB5HnmS7i8fq3UsJV",
  "key32": "5hM1zWD3UZ2QR1trL3FUa4BYfuP9R8MBnzDuCDjJHeVX9C5asTwnuyUnFw4aJFke3cnsf8DDjK9yzMXLdwrfLcy6",
  "key33": "5cNgkwYXgcdvFeHrSrK8vBo3mc33Z4BwZCaKcYVy4FQrmRE9BVG21fDX3C6gVNYfaKxVPYBAPrcLJhG3EDVmPzRK",
  "key34": "2r2M518zLFTLzTNvfBRtayqDdeLdSS5uYAjzPDw2eT9W8htTsBDDvwu3etQLLxmGmhMd7jFgpRkRHWWtDoT1tnAr",
  "key35": "3bL7d9MUECyfYBDUD3sBfDBxrZGkKNq5jCGHi5ugrdDhSFr6qmVNpVZQvfrfxqkvw9xPmzurHP2pgrRdGydsG7yM",
  "key36": "4QDf5Kn4q122x6KZFvNjqf122UDJjC75aH3n8ELCf9rdZiGQk6tanMKFHR5zhrze8XtgQWt4vqAD3ymWoXLzNcHV",
  "key37": "MNrPYT82wNMzj4ah5eNrEBQ2wFyzeHcucB4K3owoyKQGXATPMrpsQg5JkrZga4VNd6uPQpFquFdJJv1jcEBbsEf",
  "key38": "dK4sP1iyei26MDMYEnt344QcfsJ66fGLc1AcPFM2VDkK3DfNWKday3qk34ScsA8Br9D16EpxwrPv52uf55Ke8Kw",
  "key39": "N9vmMVQ4wXbvyKziFrZWzn6EFxLw13wMkUgrfgSaYPboThHMEHiXU7vWsekqsLmkbQS6yEJobWAv5HAVmdPwqBT",
  "key40": "2hsXuR9vruvZTfWfzoGFdPXDTbb7pkwUgwwSGhiKLiS3yABbqtobqvCUa7ypdq6jDT1knXaSuxjRAARfAC9VfjvR",
  "key41": "vddzqsuzNsTBkKfu97PL23Rw7cikLuCWN6gwi8RRUpi9oDEkgHXcQR3q4EzL9ekCf7SBCjBqziaeq4KJ4B5YyKy",
  "key42": "21o3Gr8SgUEojsVPGd3TYkjvM7QkvqBqYq5TcNbmqevRfYmyBGAUCBSLJd1fqkgVnTA3KdwzzPFSjmGjG2bMBCJ7",
  "key43": "5ieKTxTHoHwB2Cv5auvwxKDAygwjuRAV4v4f2W2KhP69N3Fq8NX1oPMonh8xyQS8MCGD3UKuVmHkcURhQwsuVQuH",
  "key44": "69oaTNnbuhVtTzwx249u7b7C2j8TThwPoMHvnnre5bE6Ugk1AomhmpUqcVbUujMFhseYpLgKUo36TJqQ4j9tFzE"
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
