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
    "2tJjJVTQ5zPWk8Eif53bcnNMMmWHe9FC6YGhruodQLbUXD2Ga53FoHteMFzLNuY3s6pZ9BS4mYw3dZGNu8QeUWaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhLsMwQETcbDHJjVrLxNPoucnB6Yvo9QVBeiKDMBTuDsu3KfMUeVUm16zp8WeNRe774bNrLZ3dzAdNu2RQ3xbDc",
  "key1": "CoGswoywc4JpEeM5MzG124cYpZGRJ1uvNSckZYi6fHBmEDz36rQU61736dHytgwmwnVJmg55mahCDQhNKnK6bhw",
  "key2": "7CHDY1zaMJHKD41FueA6SWFjF67S5sPb96vmGMgZdGS7hmUQM8zkNWQyHteGh4f5aNkP3UiTBusVwDmyjs7XKxL",
  "key3": "375BFJKkAQeXaEsdWeYAVrWdkREHiBFa2v7SDTkXi2HNLN78uBsK5QPoVDEgRxhCpsmCX4EfYW2zaE7hLsmBr45k",
  "key4": "QwuP1AGF11tvjgXLzz3SpgJ4gxmx7QHvHfv1TfYo2vaxnL7mLfEV2o2wT78qhqTcuJKRXAYVfEti8MvAAhYj5nJ",
  "key5": "DCEGxGkgtcbzeFLNSbrBnFMQY5NdesZxGaFbexM81wMZLs9QyAAdT32r5ECnpZcSJxzjUMxHzJySUTLcKnmhY1x",
  "key6": "4g7WMZRghCwyUdAUEWryDSPz49EWRyNTWqijboBB8ZP8Ki2gQgXUjE6iR6SB1j51S9r3e7rXwLAx23NJuScj4xDa",
  "key7": "5M8srNFYTVy1uSFYMYqSrHLywEN7SeyBAhzc24qvorgWapUAbcrovYns9FzedWx68eFYiQkgy4nUo5LCZ74nbkE8",
  "key8": "4rj5PqvmzPRykCtyjgqVsdyB44zT8xfW4ebGeCfRroNW3cDVqFCuKYtvFqj2NsM5LJPLuLyzh1mv8Vxa3CYub7tr",
  "key9": "5p5ZnyzmYNynX2MDY7ZZ8btRaZ2VwweHPLC8uSBBgBuz5pnig6QPRpxz8hhFJpSVVH8K8Sw4uKk3r6qmHYckxAGZ",
  "key10": "4EBg5bAxK2CDCFWyp9fjugc33nhu9dEYvSF7gcUCR6q1GdWCe5FkrGkR5DVmNCDf8pyZGedWWGfpkyZBP8FvVJrm",
  "key11": "H5nufPAYB4sBrjkJNziqWmLYcZH8rmQwzXKLbZt61kuZKmgRD2SdTZm3mHkq4a57YrfrCAHjWdtizfUJTkSErEJ",
  "key12": "3ZbBXJMoSVh1vzAHn59Vd8zm8iF2sx1rW8ns38a5FfXahtxMLHEF7xSquHmD41CxGkcF8hQrf5aYbzwyMgk3HDK8",
  "key13": "5pfPnWcq5FeFrE2n7mod5EmAE4xfunKui5FYnYX3TFWjfhyuUiCzJunARXzUJ9vBccFAo5XZrdhwFX8gEYx7exZz",
  "key14": "5feRsFF3hXaZCimMBnsQuGiqP7tz3eNrnN1KaLrNNgC1yzNVTdr849WEr73sjPxXUuosmmQ7NCfj32YUqSzUutuC",
  "key15": "2Rxd4tFp8ThV9Bn5SJbbpXPpKzMG5wEggcebAvipz4RA3RycY2GSupoQHu2r6GX19yxaH3eJ6UL7GE5zNLQbYHkK",
  "key16": "2zjbqsQZCpvexUdQJEyttWxyXhuZpogEYy7mvwuTAKViR688R48MFNYxFKJUdZCvvqLSrcKSaYPTHsSggxpKKPvu",
  "key17": "2Tr3wXsaXHqBXDPDU8CyGtJJ7dfQN4yF3iivds29rVa8KdrNtaiBRDEcmmCKjy5HCYMfTEQ2JdFcQkxidd8nMUKw",
  "key18": "4tq9bLVbBcxp548jVDHXocUz7zyzgH7K6JwGZxRJrBMwLDa6QT1f8yLh3QmeZ4H3pPXrqWoQAzw2KDyu2eqGfCFm",
  "key19": "38mYMAWsvHbzs4pZKFT84mfQExLZiqBVi61S22nurvGvfroDV8CBgJfJn6D7cTfMa9FxY8wt1m7BV7s9KgoWmn7f",
  "key20": "4YWHgjVLszbcqPwkWrGGBTi6exY5mvTCyxprHi9Geu9eBQaiHCxvP2AECQL5bZRqL8h94Pkvvoa45BwBVmr822Ap",
  "key21": "EoPesjapejJUXoj5BCoPL2vms6pSUNLiQKWCGdpjQZ8ePCB1rQjpqV9xgjUCWvJdn2WbXuzeDFZcHv5KcXGFXPa",
  "key22": "4EP9bpcyaV6HoHWoLknV1V6RarNgKHuMusVM5u8sxPwzWL3T7ANw12Jr3CLVPa9XubYBgvZ34ma96ho7wYy4fzSz",
  "key23": "b7AELCwFFCcXJEJzTANvcP4uSpCr6DwzH6mbeZdX6eWBccGY5RbBxxTtpv2Z8LCo4FXZ5TRTdpMLF3KLPv8uuHG",
  "key24": "Jsr6q4bBMrCtZSJQpV21Q2awacy1pWWTLq3mPdZ5KqmgDPsY9ufihHBupsUzwSKa5oSYTaBJSKThU3q6Fsb7fsq",
  "key25": "3w2eEJzYfwJQQiMCsa5nN2Ua1iTuyPwCjYvpVHpwMrHy8P7ZL3G56Diatp4hKS4YdN91yowmQmheb4N8dBTstvUY",
  "key26": "4C8rF2egqQvJZywCi8hjvCKZeYXyZfjCXreReJSZMfHnX3mXKrZz85k4t8GS28Bxgea9e2WrAChhwDg9mQRWZapM",
  "key27": "2ZkEJMCTuECoJjCUGrt52Qpo6FN7hhp22qnpgL3XqojSupJUGDx1T1ezg2Yb1NcWb3CFiw1A8GnkscaqF7iaSCYc",
  "key28": "e9amD5Choiva9UmN6FDbzGDgCxAVq5EWKTnP7ppWAavNpBHu88cMmZHV2rKJGYAPH48zWPdUTdBPYsAKk7k7uZa",
  "key29": "2Dx9Z7HMctXj9wsTLeWFrrvfsF2LPSghUehmRvSAVeaWrdzyY21NNuh9RwwEZZ6LrWX5brST3WducEHDB95biuNw",
  "key30": "4nE8CngBHrVnwKw4S8ermDAyAjLjNj1x1BCFZMELmC1YbTj3geWknQPYLF1h7K8JKgaUSQ3tXP274dAnMXwejVBm",
  "key31": "5ycMXgBcQ8QDLajNoDPGNN7K2Kg1E62sjyP3CrmCoNzE2oyJYnQLnbmogNeF8bZ7KyjeCyBSKjoc945oRMp8HcGd",
  "key32": "42X2CCkxVGDwCzC7zytXF2BhdeqwWaBtkLxr4og7EyKrxNWATuVsfRvNxNnvFJ35sQwULTKiV1BAiiX4xy6TZZW5",
  "key33": "6E1vh4HEe8auFJoPa2gSuALofHge4Qnrptp49vVDx3CKp3a4dwwmBLpZWRMsHDzTfnT4iT7V7bNRdShqdT2tH1A",
  "key34": "5UoL4RnBee6DveUjHJZh7sXqGev3bLR3LqKY8jBxHnA3o75nMKcE6FFGMmiP1XSxjtwAJXzSbu93HxRojdaiZFW8",
  "key35": "5aSdJE8V9CYdh3eaJiHwiBkeUjzGQCepJ6F9miDMi6qAb65p4ap8BWQX1tpKjASGVRUJwKgCdUV1F5DbMbf5FMgt",
  "key36": "3x6p3SbuM6EqhDRCJWvhgSb39WCP7gUkKqGKjRwDvNfVdfwJ34x9JFF2MTitnJKkAkyFzLrMMDNVs8NX2QQdEt8V",
  "key37": "2rJKzcNYxcij6uMt1GzcnQ2VZAtPhPGTeVB6rAMGnc4osWcU9gob2ytsZt9DDnoDSaKdWpozRb5E8aSUttHqiyUV",
  "key38": "23jJPE5WiKWi7Sr4nYHd57FwMtxEd6ZrQGfnKsHxmXiKJRmL9wWnCTkEkDWEaZhmyK9jpdxC4nfKs2xEM6sJWSYs",
  "key39": "3D7XFp9KqxwAkm9qTqLJXb7GHrA6FYuJmvshwH8uP48xf99acC71FMBa3ZQJmKyH5DiA8yVdfxk7NBNtoWnJ6HBU",
  "key40": "2WkjckmK7CCKcT1jhu2a1rpxQDdutgmrwZnmn1fSaCbh3rmUn1Y9DoxCLNdE8mcS37C1qHZTGVRNxXCBAwh7hcPe",
  "key41": "5f7MN6N7tvFTL6bz8TKywSDJdN5fQiqTABvTgK5JZM31Fs3TC9zH5ZaT5uJdnTpuLm7ANBvtnTtScRivLkGt6vJo",
  "key42": "4xEi9ciuPFbfjwea3vPPSrAKLPXwkgrFp227EZh42jaaFXB8wFVfovzz2L7i3VXzkJBiME5BT1P2fHUKxDKY2fQy",
  "key43": "35rQitHtvRJgs7PDNRX23AMLKTe6uBbiSVSoDJFkZV9F3Zj2eG75t13bV3FRxSny2JPCWv8fcMinL5ePcU1jzeZ8",
  "key44": "3qmBf9263BR2eV36RwHXsPk2RC6cwqQmCZS3vZ2iHvaaYouG8gskNMNkaSefc453DnHHJpZWt4Dzha25SZKABNGT",
  "key45": "3FhaBwRhFLEixbFTkfmGPdErh8Z5PU9cC3RhPBAnVo4bASp6HWcozyyw45HFcc2rviAeSmPY6XzLX3HiErHQc9Yi",
  "key46": "2GNFzUkqBA6Fj6eka9zGFPQqDeHPNZa3RCemCHqixFhPjdoxZ6NSPYc4gGkuS3YGvGsB7ntg2kXXTrdENorgNS15",
  "key47": "4sRnpR1bi25fcRWh2FGX3rjV4dTrYwTGTb6igAndtxQhwJc8d8GpetRxke7ahqjoxH29nRmcopsbjaj8RLjoZKNL",
  "key48": "4ZwQpfNJiLW6B21NwojkAJkfuPmMKxiPrL5ZfsqGrdfoKWHKwgFByX6YqH7QXuZKfRdng2nWbaZvVW5r3BLWfSS8",
  "key49": "2C9GBXwRrdoG475pZcCRN4ix1WDniT7Y3aEcnuG6pqW2dBpmTzSzDFNWZxqFFDFHYSXcctfsVx1PfLr9QZDPAsFG"
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
