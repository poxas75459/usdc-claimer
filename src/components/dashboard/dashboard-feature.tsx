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
    "2m8Vy9PDKkt7An1w4XmLQ6XHwrNrzAG1RnXByWWv7PM6Kfj29NRiGyGZhApjW9y81cUkoEQgvZRsrpoH56HaLUs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sb6rZugj8eBguW3EqwDbxHbygeGDzFXxXyGBQreH8TCm8FS3m4x9BVXP7Xr59LHiRPsFdaLxydspgmTyXsAgJi7",
  "key1": "GQ3GDjd6jmZoTgNuXSs3cCZTXdoa7GMkLcMFFGUDtjDvg5cB1CFPQSNoW2c1G2gszM7CeZgJc5Kh3vhn9M5ufGT",
  "key2": "4q3ECHHAcsxtyRwicQuF3PBbNYJkfqQYvTU1MgagEj5xgrUfM5uwPYuZBSkGRS4f3aZA7emapTK5jLopW7Tgv6yN",
  "key3": "49NLpFnnibGc5w2EmYHet6yZVYduPvPNiiGXpepNYCXsLrfdt6HHABwHey3ZYbshRMjUA1syWtgUkgYxzha9kNf5",
  "key4": "2vg4rNueVUsvtU8XUfHhNwtBHAG2NFBgFJnJkqRtv9cLPJ4UqQCaF7moCQC2tAibD2czBvSJecC3hGuJQpQqvpmm",
  "key5": "2FFPb7ewTWPPAKmHZiphYCBvP2HkaMie19zJ4PcAdb99VULmbfAwya3dV748pMud8WEJF8HB4VxogMnatJyG86dN",
  "key6": "5LTqgjXHtaZbfft62YZHdWHMSUkWpPPPA4XrbMVpjUN5Fe7pLtGKrWSstr2kaY8A6qWcsDoUdfekYgS41dqhrpq4",
  "key7": "Hsc1XFNcQxS9ZzzgJCMAy8BCNd1N383DKXjkvyrgWUtKuiAGPHmUR1aUhGjE9jwBB3rUQGWDV7ra7rPQS36c1zQ",
  "key8": "3BRKzVRjrv6D22aQRvL1L38yybXRKt3K1EC9cVzvx5AxSWQPGPzVnYgN2yX915mSLhGtWTrzSeyqzgcV3vKKgRnN",
  "key9": "3XFKd4f87G8DiNJNAQWXszzJCNLFcRQt4JX9M6NXkm6mXuQHpaD4eFChWufSU1mDDUSBGdhaW1xHu8ATCCeXqCDa",
  "key10": "48DQRgYoGQgKSNKdfGfKhFCV53vK7KisJf3JsXYPxGxe5Yxt1nUJ88oti9yDRMAkckLR6joiyZyuids6vShXEodG",
  "key11": "rmg8NzxVJCg54D2eAbCnFhPcqwev1xyMKLLqitKj7F58KeT8BL8PqtFAd2coKYQD1ogiXR1Yf83cbZATEWRhLf6",
  "key12": "5353G7DW9bwvwyKU68irxfeLrztdgsfuMGNqzzSNnWGbBg8CjvCjsqQiDjb7UyZ2C89Ue859DVdw6kVR38GNGX1G",
  "key13": "4AcapZjicju23d576dgQk7aSbYTc8cYgWFFqvb2HE1wp99rfovVmZpJZ4MHn1S5E5avtt9uHiPqwxsMdcpKaaE34",
  "key14": "2LVMNMS5wzSnVG6mAFziATVqkqFVKoYFMZiMuStEevN3FLXUDBFEu6s23vdeAhTNotAhM4itVTDDuiaGwKnAphYo",
  "key15": "3rwUyTfAy6bwW2uhwLSdMPoAiGpiYazs6bt8f9paz9rKcJgAw2k9zDqi3mX8knWgJc6PMPuLp8Buy5L4g6zX6Jg3",
  "key16": "5Tg28HDtP6BCznaRYdkJKd6KLEJpgGQUwTUJVYrCo8nP9qUeeUtAbdCWyqj6NgovsWyZpiWoqgvE2KrHrhNdqwzu",
  "key17": "5WZ4z83E6drYL2iXiREZUtUnCcT3VCuTSw8TQprnkbmFM3NUpgRQj94Eb9GVFsZWPnHBFJGpD1PDnQmZsKewpsj3",
  "key18": "2qkPrf7TVuAxDY6CCpjZNBsnf6fc3bwS9s85gwrZjz2y9e9hxCCfi6i54SFqmgfgysAmyEYVU1K7gTDhv5N6xZPE",
  "key19": "9ESowtaeV8SV6uhkrXpNSd7RCvHQouBDWEVWywwrW4TYZBLmmEx2qsZjV5msVBVUvKUATNaNK53DWNkwt4ucY8R",
  "key20": "4dcr7Nnw1hBDW9JeFCiHxuKmfig2tZmp1fkRDAfsLyknhdwBdAKKr63dRv7i9nqNm2YJwYt8RpBPt1ZVzD4iohid",
  "key21": "4ucGwCAbTAUCdsbLhfXS7tHB3JU1R4FjygNLhDv6Z2s1BxHm8faXyU8yShvZ9aYZNN6rssnDVspPsUGPBXbHaU1W",
  "key22": "4zscQnniobpSaX4mATf1TiZH4DeK1TBb5fBwXktk8hNVQ83WHCrr2wQSGESbVwap1d8RfcYKEBWYHGJ4S2MTRE5K",
  "key23": "TptBd8BDqNoA7zpFGkebQRKhqu1R7F31fD7zFdc5Vks3HFu24My6j4RSoF2ob7SriAxdNzAvg8aBaXTw6tZCEmA",
  "key24": "4Ebd6TioyQWGgE7JaekgfvLFDYoZoWaU4z6fBtn4wJRmiGDQq5FdeHQGk6m91RnXePh5XAzn4pperXJwH5HeHzGL",
  "key25": "5i7xFtGkkZ46rGLoKi1VYQbGY9BqJwNk1QpyArQJXj5AxPgbmJV93zMa87XrcsS85SmCcTXrCq8deySMxtgMHWs5",
  "key26": "2dJgurQzNphUbqXkdRNTt2MF44EJJojTrSxN4Kam4JDLUb37tqjYxxuWDSZmREZEh8xyPCXiMXqorQkRcoaDP5J1",
  "key27": "3RJbSMZNs8YcFAdbSXn99uqqbG8YAfFXdbzE1RLSmzgGKx5N6WUbivfDuv9HCmpJhVwnmyYo2rfuiQbT3VnkdTwD",
  "key28": "2XNtpk9rKTneyqQ1xv3eV3vEF1PyUZEwTM4YHuVfQsTwEDCFX7TtH2bFPvmt8BJraEra6DM7tcahVDNcHq3S2ew1",
  "key29": "wmBst15fizVuJwNFuQLMq1ZZTgb8FTLKbLyE1FzorVWKWCSyAgdYGFsmMEw7aARfbcLEAzCnJqHn6SFS3YvS6hY",
  "key30": "4M62k8hkYnrqhPrLT1hbeWF4PyGGZ81ARaZvjjLB6rdttkfYT6Gz2ooyZTLegz1eCLWBDGwPPiv4xWA1p3zwbMN3",
  "key31": "48Us9Twj3Zu1h7UB2ykVrDT3oxMiELQaeVh4QdFZJZaoLH46Jj3UqcCMSS4ujy2cf5j51yqKZJ2uHNXMsbEd5PDi",
  "key32": "2t8K9qpPaCRhPnmbAe5q4sUPq9Mgq1hJx59vCAzSfEdbF9VTSk7sbbKrZWHxB9oJdSyBGCBufj5VEN6N5oQbK1k1",
  "key33": "3iADfXGqVB7boipGKmVzpp9gqYBrPjpdMfrFBC6kMb6JYJghtLaR2LWo23fwdb6XhoKGVtvBskqurKvqvPvGhbK1",
  "key34": "5koREZ3oJRWg86aBR828CQcYwVDpEU33hiv8WgG9Gde1tGt9mEAhj2rG5n9eMcq4VR2MsGjCZuSiFYbTyHAkJfyo",
  "key35": "542HqYCnrYatAokGRkKJD37jQ99RdUoJX5jk2X1ZqDqXe547bFatvKrZdendra2s584Dk8dDUxMfJD71t2nBVXgo",
  "key36": "4fHVrPzLR2LvGcSsuTspgaHZCRDQaCcy2UdHDPjSs33igrbeT9jezzVmxJyxEb1T2e7zCYzPwT8hixueJULok8Xe",
  "key37": "5Q5dSRh4NTfrDhVRptRnop1JdzACW3pKq2QXfNse9ydp6pmWhj3RZtmE5rb1it1DCBL2DgAfAyS9BSW4Dr3QEAQh",
  "key38": "2ysyrppRBEJwfQzRhETjLwojsVFaUK62Wnr66L1EYHE2qcsJeev92fzvEtPsydq8tJ4fK4aiwhhkgdH9YjPNr1Qy",
  "key39": "4PFfg3JK6hAWFopdJ71oJVQk9MGrasHbTPiqpQeGsvzkZEFp6gw3ARAUvui4KLUpc3kHLGfPPo53R8aN4N1kgmyx",
  "key40": "446dDm3KDVScuaCa2JhTkJrZuJXZpYxQhpWYHj89eqkfpfADgfF9zZLjEnZsm72VknsuLFFAY2jECQ2hVn2bYNc7",
  "key41": "36RJgsraKCdkc3R9rPjUJtASv2EyrG42FEc12kHvfPKjJo6oFK2RZUZiN28G8Ua8Fy9t8K647RPwjmkSKibpriC9",
  "key42": "2gsMKHH2rmiUGEsHAcJhMg8Voc6wUjA4eZc3GpbSFMSNGrYxfrqg9ASM1EWWDqDBnX2q9AgSPTVaYj9fQ8n215W8",
  "key43": "3efgsHpadzhJmADbQ3W636kxK7YNQ7HCBXgTKhAEPAWhjeyanpjXAiU6KZEmaXhTqvPMWVHkMwP9h19pqGX4Fbe6",
  "key44": "38EmCx8DhMB5a8KCMYkbFPNvoF35XNRvkgbtBerxmw89Mc4E7FdUpCqtNwzURKmSSg3jRTDyzXsfUHue32eKeht9"
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
