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
    "4JgCDWqDekWrz1tNUzjpwW2xRsnxcgs27JkKUmzVXuNaMYxiC3ErrtnxLerS4bbsxVjk3jqxW5bt1Y3m9GEbv4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yS5jMNyuQGDm9oQg24zrN3CpgCHzpJJ6c9PQuya2RVnyoJRzvK9gTtU2CaMpm4M2MuuyjJLUueHVbfAz8hy6CGw",
  "key1": "1TgJDiGy6gMtiLFrT93u92eq7EokMwmk6hkR6AG7gbTty8gEPsSVeJVrYkSLQMdu4iSEFpWVJNufin2exohdDaF",
  "key2": "5guoTC6uDvuxivKJ6cnHyFaps8qR5CyqoHdNzSyrjQVMBkD2ABcCenhr3LEvsHrsH3qqDy8PLNgrAuV1EjxEx5dC",
  "key3": "3rz4w4D6SMQBCSmGEbAsuFdDjrGbBhsCWTc9DdHhcWS2P1k8ptpsQRbFcZxjZ5MFMnUbYDL6ZvGk46XgkMVgZmt4",
  "key4": "3mq9GCjMeff2r6FCN14dXhQg7yk2vuZXbmyoWsSspzy9KmZ7BedQnVHeUJ5W47k7NbaCwRBNdXT4mgNt9KDneuk7",
  "key5": "5sg9t4EyKzgjrEWZctcJF1MJHhFy9z8PUGxQkJBgeT9b2xoSCdDeMR8nJm27EnvT5nsevDT6eSJXxzkvJGD1FAAk",
  "key6": "57YcyYMhutg9LGYgChMeJSrxe6nW9Z4Zpay7EuzukVLe2oQwcUrwUy5hJZdNxbHAFssyvJ8aAwkLZpMUZrNDiU1k",
  "key7": "5GdbqrtuvCdzjrt34EdoiSLDwsuaP8JwBpmxueaq7Sv5jzMMDRBtv3jV3pUfbcaZZJw2dLACk8CLgRFLgbDtma8u",
  "key8": "2bbfK5Dit3ufpnR3cxSmb6LvZPr1bFwNbaXKaCSGJuew8cSGPgK3WiAadUqL2t4djb7R3wp3Gi2d81Y7XcgnJyvE",
  "key9": "4pYpDUPtNS1MtEGYaf8zMNk2TEQpHRhHmGRrKArCzsfR8ekpE93WbbFLTRqr8ZLbzVEAUaD6LRcaQxrfX4j5nYjF",
  "key10": "Hhp4rsgsKpAFiPKXcySzmCBSKA81AdE4k9rE2gWvP3mLH1DwTceqoEkscxD3nywenL4aiz8D41Y1zBLCB55qpZc",
  "key11": "5ZNX8eTPYCv1qZ6x9BSZtHd24LSsyAXSFXefsSEtqzQY2QaTp1WgjP5q2pSTTudF518Hnzo3MUTg57iDyBXQWLDH",
  "key12": "H5f9G1tajGtF8mjRRjx7WTmw5WuPQNs9QF6eZrFoWciPjmCqasuxVVryWuXASJ9xDpngmcGTzD6zihRnZxRfATM",
  "key13": "4b24CNGtzHzM1A9uLXEZ3doHRZX8zs2Km9AQGrBpaMteRL3NRt6eYch4uXGPrtMCZ5mQyMpYYJmrupyaviLpyA8Y",
  "key14": "5PTYVJ6TmtK76R8iP4yFAU9N71af97ht9naqQ1UJy7k1TVMZa3x4UcKxbnQyAbTo6V3YkW893koKkLEtdF8gXG28",
  "key15": "APtBx9jB1CSrYCB5SQ4vbmSXvFPT465JbpLJfXtpNBGWe5r3j3puc6RSwbEKqLxLBPGFuwEcyBHMCgxxNjdgJpS",
  "key16": "KiTubbsvFpTa5XsJV8CQLVUKagd3taQr5Akx1KAX8kkb7BP4BVwFzpRUyDVzxFCnWTawmh7mTYKXXj8cn3bGiMV",
  "key17": "4rZLxqnZaT19MHkH64zuiqb5wYnSTBcpHgXiirQXgjmMzp3SNFRhtmuZGTShGzopWEfB4JEJk3zV3npurXaAGRAV",
  "key18": "3sAQLuoM24RrgSHh9mcWTcKaLgHwPDBaYNm9isQUaiuRuaSRBSBzfhWucjBkzUmos8wqgiVcg97iVF3dk9FcaKE9",
  "key19": "WFEaMZ314sRxVCRuXnL1LTrYc6bw6DHU4eUoUgNAcaD64i29AqnK8ejkZfp3TnXXeVDrELkx5UF2dpicT5E8Wau",
  "key20": "5MVxe1TASxA77eYsVr7RetEhXXAQa1LLdKGqAm3m8m5sdnY4Tub1CiC4CACA7KPrYcTjTQTFNUHkAAhY4AoDrEMb",
  "key21": "5b3fdAx9mBbzqYkjTGxu3qK3UFM4AE1GLESgoiqwtoE8Ta9VcCJkVZ11hpEY95jTqQwBgMzszMGkn6UQLnS7S1cT",
  "key22": "5GuCfg24XC5bCW7kVqYqoyRT7aqLr7sJpN688t6XPr8Y1U9mpUk5sUPZBFsV6iYppCdB37CzkistH8PGoVCGmPQt",
  "key23": "4X8P6Zmq4PJZ7odr8fQVXfSPBxri8XwKzdgKnbYJ7JdsmAXXfF28djsjJ1qWNchDF2GFxvG25PuPLmzNBpCdWBGV",
  "key24": "5psZorK247kkob54PLY6AYe79RS7X63DxSWncmV76a4gLoskQePvK8iXjAewHjxNoh35au4uJ2LPHFePYnUjKc4p",
  "key25": "39GL7R6ftZgQb7yibyzcFjGZB3a6LWPDMBxgQbmueJMKTdC68NaYm8jBrPS11vkhLtFM7kdWuNGMc9CoosYvbv62",
  "key26": "224TN1L4cTQWZZCthjkfUwWdRqErcmiRPAxmy3H7B33pSJrVCfEbbV4xiXDnA3p1KhyBwmJRoFcWuq4bAvMT1a34",
  "key27": "49X9kD6SuA1jqtBWYp1CQ3p8Ng9oC7hvon5qg7hfvDzw7Y5dB55Psh4BueRVjbggZxeghMGgEp8jCPjHSWguMt4F",
  "key28": "3f7zs2mDPSWNL4dZ1eHhLBtEw4TdwRamMXEFAJQ12fv5WAdNiNNXkpzinzLmHr8oqxJGfnkBHPabkBXfxRC5hNE4",
  "key29": "5xMJYikBHjkYj3GTMenfXZSYndnSjPUZdfvnZFNJsmpsFKF9QzB5zL8sDeBhKDYxrwzdqxEbV1v73bmrQR2URJvP",
  "key30": "5gRUrx25K3n6ub6wsKiF4DxtpHDhb4GRgeHcp4ssbkTKjf2ogvVf4vApDKXDQ15SjADoXMRNiRcs1YvchJQva56E",
  "key31": "3CWbmfEL9LGFeshqTH65SfNxYXa8rWe3abPYoGvXiAKH6csBFY4wU7RsutiVsDm9pQvxDaKzPQhap2SHArLr9q4W",
  "key32": "26nJuC91MgvUwgAiWWpfH9RXCmUqy1GGQJRYXeHetQ5Q8uM9CpnK91dLvaYaReUWvK2q3v7LfHDt9kZXiVhw8aB5",
  "key33": "3Dh6fNvw54tt6ktABiceR8buPZ2XeroaBbg4y6wvR1eS6zVM8KxCCwZwaPPG6bm226SYCGz7ubXLN79wYbp3ZfGL",
  "key34": "2aPd247mKPsqymsDB8LbtwA9PNN6qDZ5qwnj964WApp4KoKGcZBQR3QeUbygNwPacWxXH4b4aHcSLuyQ4H3Zwr3T",
  "key35": "3u66sXrdxceq75zEk4SaKBm4GVPtyaDLTGQx4pcWt4H599JcJaYJ5FhrBwZpeCKPafs8CE7FpAUh9237yybFugJc",
  "key36": "Wj7TAvxzoPoCUEWdMNKmwuxe5xsMY7BxoWn4MZdgKKpgND85Xa9GCTCP9KD5y6tuoZQ9TgXagCkiJTPTbv4qziy",
  "key37": "eRd75x3c6hLZtigJ8DaPyBhZRcvKi2fvNSpUvHHtj79FmTSKk9iQj7JrBoAS71KMPNteLESktnGbKx5XJHvdShw",
  "key38": "5sPULve4wgwvaFLHKCb3rK3DhGTmN3CRLPCXMv1Cpwn8bhzVWPVADGy6BewdjGJbJvTL9fhZ7wDznKpWBnHX7sLE",
  "key39": "5kKAt9oDgRWcHzmZWkLCkCVHS1qUHypt7MfPnWRgqnh9KpZ8ShvK93BHASMigxeQ96Jt7iHtTB1coS1ze1Vc6NGw",
  "key40": "36mhCiN7c4ghEUfNf37u9kCqFiQ6Qjiv2N9GkJ3qyxgenYxtpEbRBj7aXq1rgJv3JvuCAszMT9pBkPnTGtwvdJvE",
  "key41": "2eHWp8KkUFWcuftfGF1qiAg2shretmo1L6f8UrBqXLkpLYsiLN5GKTn5wcQJeZFv4PoJVxcSrbrLf5FRZfM9gwdn",
  "key42": "43itVDpmWTqwCx8jKyyaJwBKFLQJ8q2HUY2UQbiqVsFXEsfM2fgf1qeUK8zRbVgVp3vVLgdo8ujgceSgbNdqMeAC",
  "key43": "tsvcSWdZK4UoDFKNPxLyr6TW314jCpjWL26NtgJ2JbZynxC4XJEdn6JmB86t1BwbVWm52w3Be3HMhxQVsVjGbaT"
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
