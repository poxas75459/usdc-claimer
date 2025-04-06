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
    "3iJ8csoY1SknpxGUV3Vu5stExRbiPPw3HRrQpQgU12cGGVGeyAKkYsPZSxpt4tper7Wyme8LJsjM9pgANxdQ1oDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yF4WuBi6RwED5f2BbXwZx54KkWdBgyBybL6cy2bvHsWqF2VsxEFbHxLwppgaSFVs6U3RuDA9TFcor3uigQ2JND7",
  "key1": "55TKL6r99dzu5JKLaQ49VcLpfDKrnAqyG7KdWmdMZ9ErWNawFBGiEZzMTB3wrizk7w5Vc65g4Pybg2pBvWooVTh6",
  "key2": "2JLvFbVJ3WukQAMyzxzeLVT3m9TurWPDQ5GEuWbxE43aokq1rDYxraKPw85mH7peZbkrZ3qKZTJPwMhRPGQRREHt",
  "key3": "5rcVLqAJpXsBb99upZWs1WfYatZR7u6cT3u9p6j9k1pSccrgit1rp9mNY941NEGmt6nUV2yL11EWcTG9cVdxcMqT",
  "key4": "3zPo9Moy1B68YXwgkXa2s7mnqsXqi8fA21tupSqt8xuiGkcBGCBDtdvJV8gE3PCciWAj1J6BV57ifoyS3V7wwHMn",
  "key5": "WHha29NvhwtEakYeYnxNgkgW38ou63QfQvbNWUb6EfLsdvMdM7jLabZZT5SeQRQ1kqmWMxYC9huppjG9QKS6qpR",
  "key6": "4gyAi35ptWUXtKNVt6m592NSwjNmxXm4gPYPohjZWaXQYAXftw2VRGBSLGVhAqwsLjLeRKy8xHUyVKwd3ZBXYG4D",
  "key7": "4CeibCP6fRNAm9Amb6LRaJrVquF6QQmMUFWtTUwmWYmm7k2MLxWMW4pmrf5oamTW8XK6XhuJJipPbxujEWrwKqDP",
  "key8": "FuRRc46MmViyD8yMy4aVAwa4hP4TNNPh1ShMrCXTrFX5PPtyxnMoS1mEgi2Lz2Uznr2jozGT1Zwr3yR8gjdMSoM",
  "key9": "5rNxtrLyE3Tn8mYxPsTyZnXD9uk2fh14oaJkBvXSWAhscSufmr3Bdcsm2FQrwTU8KrzdzvgqRYEtYZ19TWCS7YmT",
  "key10": "3j9LVDLr3g2pRzum22rA4MnkzxU74XCcWbgpYhqHchBdc5wjzgpnrBURJMnD4PAdSjeEfASEuwAwFx63EmY5Aof4",
  "key11": "5HTPEvWL2deV2kMm9ooSH1okMGhDS9MUXsCoNDTqopfhcJCyaicBX1Vp3JAuKBHC1QBnUjBa56DxjTQbM8w2MyBP",
  "key12": "4QDYYAv5dBtfbP9qumdVxnapfsQtcS5ijeH77MfBBY8kCeQ6GkEfpHG9oAoMCnt2zoMYa4Ya6bwHvY7hH2K851Hz",
  "key13": "53zWp1NvndGEtYHwc7WQXMWBzhu9D5ZAE2P9apRKUKa83jUQFrLqhQnm4ELgF7JPTPM51uXoP6xVskzniSdJX2dy",
  "key14": "9FDC7TZ2sy7VJzLTiyn9Y9nHFuSQuqyhkiD2gjc34wXFHG9RQVYnJ3vpZdZqA2sxAbFvmh7tFcYb4ab8QddtmwB",
  "key15": "hNc4w5GGr117uWVjSZK9rcGvhoErcSHB2ar5DhwpnyYLmkzjXwzRLQh2KS7mTbFGGDB7pY39dVJyxg8HsHuf1tp",
  "key16": "3CsSrtAD3wV8SQ3jTdebwLWwPwBeqrdDNKTxRpYzmDsRYwHd7gHy4UKFVZUVuwuZSpkdLhLgsJ3otdQwGbxnL6o2",
  "key17": "2qNNkPKgdx4YrWZBxi27kcQ82htQrjysbsiD8FHeT15JeNQdEsPWUp4BVV3XKSW6dz49qPjQpsU5gm1Mux3ZM4sG",
  "key18": "2PU5jqk6VNcwuEJdv2nNTXx4tXdMTAFxyDQtPppLm9gEHqwqcXeUef8SAUnSY87jHN9MBLKk6PgDKhTMxfgakdVn",
  "key19": "43eZE3ArMmawbMjvevDuUmVmn1g85vrBSxNE4fptN6uxcKJqbCS2EcA6TEgiM8pz1EwRNbvtzkE8YRskfG7jxqiM",
  "key20": "3qP5ad5uKo94isfG9RkUjF1KZdW5kCEqomMoz1HagR3AWoADUDgwR1xZFvcJWAPgfoQwZDXbabMPzkCV6TJNMZgL",
  "key21": "3oCpqjEiSDRo7uJKijRcZkQXFqRq1nirgyrVNjp1LmS5kgu5G2BSMnYTMhqPNWf7YCvf51XAEGMAcBRJ2SkkURX4",
  "key22": "2tN2Xdn43vnfoWhqSB3Cz4GmJ8svCkLJemV7ZELZUXk5HZ3HAVx533SfXVDN4Y2E5BQushGYtM9NifAGePRagZfd",
  "key23": "4Z9RdDEkJcqERJnDHXreq2nNncMrE2NeKF69XieKvYNGiGJbJZRZu15uUyYdggWmWr4pFp2K9rFYW7Zqvo6HtYdM",
  "key24": "nXFRsmq1YFS1SwAd96M9jGv6E6R1XQd89cgcRaPGqrpXvJgGDgtgavmZLxGpeke8C1zn8bETrFBBNqZAxzVwyuB",
  "key25": "2RJJGLiPgdHsQhXkvhs5jxGhnsubMim6utJrGGBwnKq95U4GQFbQuWhSEbcdwbch6SazeLmwA4UQDMQAtN214hE9",
  "key26": "4fsDzp3N7Hgj1DfaySuLx1uQKqv7JdRYs2x36zAdSpfwUdWfDt9xFa1JJHbAfBmQFvLZqtGqN69inDbyGzVBHCnm",
  "key27": "3Z1BauJiJN8srAA5o8HjsYjXYjqB3xau5G18yBjREtnEam2coKoWpJBWtU7ko5WDvhU6J9qWnX1HTGNVssHLaN1e",
  "key28": "jDcnhe7aEyc2LwSUyscqTmknmdWM1m2tDAZ3aQBurkQDiaV1uygVedPs5sBYrfZo6QtfJ677wsWGzSCm88kMCv8",
  "key29": "3hFiRDLUR6kEdVuNUZfsdoC6mV7vtKpkvqiUHRPASgXsx6BbiqmFTFsBZdvFRzZDBBxUfR1ByvUBvGPxqgfve9Fq",
  "key30": "456eguPopQQyS4NAPQbMq4ze9czPEL8zoyjFofWsymgpofpqm3aWRgdFTfBb5fpfyT8SBEUxUTmcHCuEeFs12Ejs",
  "key31": "4gLMQkErAhx45FPmjGUCoFTh8hg7tYBS6kz2YE6BpwGSGFEZTv4Kp9RzJxdzDKyng1CESN71JLZLb9p2vANSgj5h",
  "key32": "Ro4R7dpYyi9GbmVgp52h3ubVe1dVzcbebEnzJ6p6tb7LGUnDij1fQWDjStHCnuVTm2Mb3YEeuATHyncM93xDWeW",
  "key33": "2CWTGbMGx6PoedFRUwQCFVMLjbMqQekbuXbWuEwJ8YwvgcPSAWPpHRxVPvVNaHhZDzcVNDdKr2BKCRnvY6mgLFAF",
  "key34": "5VnSXDawfkzYjGAS3PvUzB3duakmCmPN6JezXzE3baSJUU8hUrZ9kgdiXqBaX5sezD65U1r1wz5TmaHzKnMhxeL4",
  "key35": "gyir1A9C1ZCFUvuw7TZFM4a4aJ1NrNbT31Uc4XDWvtNbso3ntq2DjGrsG4dEFmKiuSZzZ8Cen2H9mY1PDgKtTaT",
  "key36": "fP7MHhYJih8tC99EEjRu5n8AHeszE8cCHyS895U28Pg9jJxK6kijBo1fMjcuhVeczvCT3K1omTJQ3GQSdLHXJY2",
  "key37": "w4FTwjjKGsGEfkzABptaU1rfErQzNeYjiMDKY9PL6533Wv9MkP5vfaUzq1oq9aoYAEmWTAoPSxRNBCxYiX7eDEP",
  "key38": "4wegzWx4EnnSmvdmzFjR9fZaeZyyyojdJC9YSNZpc8c9EQThTrMtzT81Vtefu6RSxMXcQ3FMBY8XHCVoSJW2Ri3q",
  "key39": "56sB1DFvbPEYFLXGx3Xza1psqg5iQqipH2FEwUDHiNrWFRSMYZi2xVyPXr6ouYCLQFFQvQR4gPXqam96G6Y2zrSu",
  "key40": "3DibYP8YcgYn2bsnDoFP2b2XddTHMKtu4Ux5QiSgPvMuY6jkhSpSBq5F8nkkkJSZojRGnpj5epeMN8niVSMUM162",
  "key41": "51oU2nQhE4gT8TnBFT1MJPNrF2n2k4GoBbVnuM8hUJLrHDbgMdyaBHHNZWVBo9EsPyBnWgWSrnZNED3CyKfL4MWW",
  "key42": "2SsRaBUSyurPjnUkbFPKurApW53Q5un7yAQo3U7ooVz5r4rkaaLPWYVqKZHRwCWqitRPbjZ2wCue5ne7Rx4mYJGn",
  "key43": "4eYJwVMFmWffDKdUY14iKpniUTyhYmRxoWKndvbZfVAF4Qw7v8VLkSSyXD36hPAPJtKeenigVAUyieKsMYjRbBKL",
  "key44": "4ReuRVkVFDgRF4F3V6zJ8hkJZNBUeGmMjNczHNH3YQtUiP9wQ2NjErTM1LUqJ9Xi3hWMq1j5t1FAq9MbdK1gKg4S",
  "key45": "25qV8jKuu8CW3rvJ1fWzWoN5C7Vwt2QcQbudFzHVD7nY8L8dGaQXDF6Bs7wPrtZW831naFJUefWjETQh7ftoz5U1"
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
