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
    "5WJExhUcsAuDsKcoMQ1e1hvBmTsHkZoFH11oCrGewekQCqF8MhUe3r8WNNfcF6jaMJwC7gtP8yVnGWw18VxMkGYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38m85e8GfTERciSmzU9HURq6umboHBiauQc2oFs5E3nvcCetos33znL8oNcvYQaF3yRsoACM3fpR2tw8cEeZ7vyB",
  "key1": "5KoCm2msAw48pPbxtwcrB1zmg7aMViWtcE8PMs4ZeFb1U9k2wRt1EzYw4PiuxAsLKA1qe3Bi2zfqRNwyVRNNaaEg",
  "key2": "2H6DKDMat9wx9snnDvURPfsdku2YXk2nkfiHvgQ8QdjmwcsiSaPXHXPfnnhheceyQ1kEqrDifdDwumY5M5hDnPTh",
  "key3": "3a25PriDN5Pj81MzxXTsJGVAjA1p6DAH3VuxBrCRXkR3wfi92xF23usxXLATQtiZWdJ4HKBZydnjp6GJ632Qc3g4",
  "key4": "3DzQeNfcG11rzeAurRzL7pQa9XovsTu6krWFNMYqSaWEVDMNSYqkNU28XFxpVnFL7z2hMjFxc2fg1Akm1WRnHW7q",
  "key5": "2iQCreGpmJSmHUhbvJmchEDU3G4axWFsrwHkkboR6LbmjRnGjYTuH7o7dpEhPbfVSCtH91pVkriwHsEbGg87Hrgx",
  "key6": "5pAacdBK3Re1AHw4ZrLsN82BJEEwB3ivGFAontBQxBBVQaaVdqhdc5Kp2oFvHa63QwQyFeQZoeF3LvcqGm3XyxAw",
  "key7": "5yQJy2e15Ji2VGcakWhT1mbFUuxa4E32okn5MXcAtKMpMqfr5cLNAvCEc46H1efsrW8q2jJ7Ph8bMRKPn5K3BffB",
  "key8": "4RrfkJdYr9SzdRx4iy1p4ubpMpdfAGAwXuEne12k6mSSMxbNLYavY4Hu9UoPL751tbaWTQLn25yN7Lnhc1ork8Wv",
  "key9": "5jzEhUoyvdiayE3hBSRjXo79anRtLVKnKFYamSq5mRjDm2BdTb6bMrLyLyVdMNy7f4nYuTQCeJrZ1oi1CTxQgDg1",
  "key10": "2UTrxUjJcyzcmXWQbT6K6QdFWtk2fD2ozhnQK2BQ132QReknKEYJn38F7JjypMrQ7qKVybFztMoxupJe3mgt9MVV",
  "key11": "3t78q7Jpgp669iuHyyLaSZUQg4YhWS3ehymiKhocRegAqAF5iCJgw5QAu2m2vyJcEseKy6DhweD6u1LFKrjjbbiC",
  "key12": "5njkmurMrzienFo48YmWtCSpfsLbFiU4soL26jsF81LcymA7fS3EE1AdtxRj6btMs65SCqD4c2GmjmpteVfGt9eQ",
  "key13": "39rLervp7fKX1NKS6taPZUy26VtRgtNyWvuoJKr9du54vadXxW6mT7buEwERTiEmUoGtmN7AW6cDoVYKhnK6QLD4",
  "key14": "imcFpo5CihC44NaYSwz8584J1cKV2oJkD2s3dTLvGzbFB6ShG9WqE8ruKh9xNNxiZGyB5xGLXXJedbHmXzBFf36",
  "key15": "2qUxVF36RLmegpsgpSC7GaTfttpJx4ooii77gJ3MbtGcaqSFXf5bxa96qUk2YxLkTEyyuyTo8UKcexxZnLpWXoFs",
  "key16": "4xXhEQ4rf4zqpVgekcAga3uKCEo7RyVaC7SeRKGUPMDBhnmvYmmgFBWmqMRrYDBzFHiMKRiEgCEcw8V4kcQkRPvh",
  "key17": "4va5ab2hjss1o8xtNU1i9VyTrh9g25eYVdMUzvmDWFQ41weibAWDpziN5eDuHGezyq9RMD6VdsBQQZ5D2hTezESB",
  "key18": "2F6HTrscGQW988Nw6k2kmwcgHxEdpLtZChm5MXdTZ7nc5dTGcSEhmvb6C7C4MJaJhDUfeLrYb11P5ReU6QSKo1f9",
  "key19": "5k4EfMcgigMh2Ky6LvJ56ChgiihJYbWTj1WhnFkgvirc6UGwqvx1qn87VZmmbBYnesj52p7jc9z8Ygx94544Hn6g",
  "key20": "2MfNypwKmsXvbtw4UVqhVzZgUUH6ReYvWnbRuyEzFL5faW5XF35arzoa8pCm2D8ELsicewkr2pqsVHBvTVRk3GcD",
  "key21": "5FkHEh8muBBhP1C7AWkWW9Xvmv4rjJpDGLv63VXQrbTAQLps7QAKDrFZCahkHtbcwpueyHZ97Mr2xwMxF1scYhYu",
  "key22": "4xgtwVN2rghc9shaPWeyrvzXYoJ1e83oGc1CsLcDCjXhBDDtZDUEqsUnAM6dqjWPWyfCEs2zSG2eU13aqV8ZubBr",
  "key23": "R8ziYaP7nV4m7H2vp3NvFhBThFwD65v5KJ2V5ovhVWrD3jeTicAz5Hembdkgm5arGsmu34jVpqoHEhwbwnouStd",
  "key24": "4gYxdA3iG2jWsChYxFaQ2dmg3KMZn9jT5LW88da1FEepfcZWXA1ByHG36BFxnRPRcr2t2h89yNxDogmsAFGde9PS",
  "key25": "22UiVwDFxkxeNiS8wBRhnWTaqEQidwJvKLhNbBbj27xmmkLkM5RPk6nqMZxHiEdTfdgfA779Zw3PVi8XPu6M6An5",
  "key26": "2BQpQSUL5UHYestGNt9F3JDiDZpo6ejYmcHvC4rDaJMMvHb9ug45rVoLU4Asu3syTtFpnrqfhp7dZknEWzS3t9HN",
  "key27": "2kXMiLzAVEjBW2PaPQhMxri6jcSwoZHUMgGmgHAgffhqkMxJas49WV1DLmw56yBw8E4wP9aksrsjRoh76r55SUnz",
  "key28": "5AdHseZt5KGoNtcyPZfQrR2vKz3GL1fBtnuYpaLZqzWJVjd4LZQRevu4JGksAPBoXjppMsp7QruXvQuEwkgWZoX3",
  "key29": "2AVbE4FTZG3vH6JgsX5FRma97HDwx68jEqCVDAKzG8Gx7KKZXpQViaztBnNARQG3m7BxHCAzX7f2P821UYE5kaK9",
  "key30": "261z9WxBdtdtr2hYfkRCZyGmrFkXKDKMB5KAk817USL9oich3we8uzgkct2fUnkDNqHarBj9kbqdiSvZKKqvfeBr",
  "key31": "vRxg1FogsC8fvjdiVL8xhUMffuciBqe6vNeGFFyz72kCTzSmaaUnjSdVV9dtzpckrXt21SJFnF6iqyrQ1bZs6KF",
  "key32": "3rRtmUsQYxaiASKrJLnHsrKLpV1yfYppQHsazchusWTToVGXVGb2Ue2YrEw5pqXS273UY4cNo1MhYJFjfZ1yTv11",
  "key33": "3MepjvaSwFZr9fL5FyGzTYK3Qu7KaGTYMBQbUVW9DiQucQbuPqj6xcu6ACqQ3U8MzqR6ZEGNd9MwpcdEM6kEQZ26",
  "key34": "2mwts41ne2Gc933nZzGLxpenSAq7N1CGLXhPmSu7nH5AHZo57yjnNvWAm8QEpYQt35RV37qM2sUmni5yTyr1rDyX",
  "key35": "2sH9M6tCDZeGF8QhYU94e7QmofRUpzGBoJTUrinNGSzF2Mdznnwzk81NErHu6DnqudFzCrE5CULCfoH82y4WoFXK",
  "key36": "4fMZ5CT9nf6fvDkVGGfiEeyNVJnN4ZmDcmbGU1BDdFF6WRiCwaYtwx4kUbYAppsG1Z2nxzvubkWkXkkXrQbvQSHr",
  "key37": "3aewmpBCE7Gepjjg6g4tMqt3SqFoLreay7HysHaV7Hu538BTdfoaD7XuXzmNRRoX544N3SkpuAnTnu1TTa95vSs4",
  "key38": "123g9gGhMSWMNHyWCNCJmgmMGku5wg5rqCxh3HS9FuizQqB82i77R2nUNGpbkBui9inqJAfuZ9LtH3BQnrB3ByUr"
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
