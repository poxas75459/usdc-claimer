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
    "5bhuwQrdNgKkJxsSzidPjQD69aBQ6RKpohUapVsQhL1anjWeJ135YtierSEF2CrZGCnciWavFCvBQptBKLhL8mWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8LqDbjSDNhYiHf1WjjNqGuvghXGjEc7bvjLAARdpeWeopLSmm63niS37koi6hVadTR6ZUARTjiqQB5sbFQ3Nij",
  "key1": "2GhBC4ZtijvW9NzRJ4oteVavk7AuJe8iqndcuPNoLsKbsJmYssYMSdmkbUjockHjHxGgimWz2A1kaeZwRGoxya54",
  "key2": "3vQ8nDQkGNgH1wBtMcyieEeYK62aNm9oVsnDTLNSdzDheFzN4fhtNjTz7R55B6KkaKZjqY4tqKwdymvqrJhN5RpV",
  "key3": "5EF4oydhprUhZ8A4iZR2VtRUL13p9vcab91NmRiuC5XJsy5qGBXs2LtJC6xsdtgjhdT6tU338cQFg8zPWtira3yd",
  "key4": "53h3vUvx3hsHpGMudp5hYWoUahzKcrySEhP89sPhiLTwmadNoqmc6iBYXoPnaqRWTCXnbtguwERkZBhaXoUmuuqb",
  "key5": "vgjsxCr6itVvUqPvKTS4GoZvVwxhV3eGMsTkxqScWmiaa4ai2yLKZCUe55SiBDMahd5XZjzn3Nd9vVxQ8ZSvWNy",
  "key6": "4yDn9XCCB3MEftfurKMvjFnRRkgL1xTDoHvkkirmLzemvFQUsmEQesUnkvyWjcm8Mo6RYncgXEbcmrTNVWMGi3yM",
  "key7": "4frCyTyQAkpxjDGSJSrxSqfW5d8WM8dex3qBFdzGykwAMcfbhQoAPAR251fSNqJmDR198McX6hy4ZXLyQecAwS5J",
  "key8": "28NGeFEqquFGzffzZb38Ude6WXaPphmgpUk5K8WbYStn54jn9NmMsnXji9avcSNd3FMZJe6FNuRygzsoQHtUrr6U",
  "key9": "ktvaHb9zXzycUfqGXjUJPtMN8ifYuxkueuX6BHboTQxKSVKfEdWYkH24cWsjGKMjzXngg7MdzRmfnQFvtEiSEEe",
  "key10": "2SCZS78B3UweuYsA7s9dUxNwU3MHa5rnoJp9BkbCzZDDKckDqB1wkW93GZVqtb7TcwyabWWqKvq2CYhxG6dkXERK",
  "key11": "3hobYLD27VrmL7hyyN2st93ohB1XHupJjJDroaTNzW2w4SJZwwiUUApSMGSjvVcwKQnZnvtpuD4nqLZqNQmW2A5D",
  "key12": "3EDWZWfgaEbR2Ugux7gdgcULsC5CjX4KmnZ5bweZxKfQZjaVKPiq2ZvY9xe7RXWRPL7DrzoyUHVnE8aXbSW6mogg",
  "key13": "3n8uGTpKvvGySFZ4jmhWh77S69LSWhc7JhPMzANN1b18DWBYsAqUFMS8X6rn6Br3mWckuTsQdLYur9KkH1xPDZJe",
  "key14": "5jKm6z6TVv3rv3bNTXNVGvjM3Gr3Wfe59nTZpb9VCcTYbdLWTuWZy73DKiGKdBrZB9N7XuBkUCJDeVjo2Zv7eDY5",
  "key15": "4xN3NttWQrN4Gsa8y2qADYEPcK6gpLU2vMbg6iM7797i5oDWqbN5L46gjHK8jyycZQggQih8rRsqjb4fgxn5NBrG",
  "key16": "qSYf6JJKo2ycFerkS1cxGXkbU5NnCrVUj9Mh7Y7R6kfM3Bk7sCxjgr7p8MA4hUuzrd1qQmZmYkYrKfmjNEhFjXd",
  "key17": "5S2xRD83KAKpjtjpt6RKw17qajgosriBiPZgCjW4Mdihgmr3F41WdWfZUQaK7mmMRHWesxxpNXHyQikpRSLzF9qy",
  "key18": "5JcHWUKvmSPtTsG7rQrYJUb4XRCztGhZbSeiee7MZ5rT4PMd7g92WqNvWaDy5kFfkNnxu9pmXrw7wuFupwPMJrS",
  "key19": "24mJWSFeKyAgJNkj3HkbRCCzNBE4hPwz3BwaPeTL4YU16Q8jVezDhwppyfPSCLyLNxySUD6WSc26JHucaZmPE6Lm",
  "key20": "3xYEEDMjNiuSvLvkb9epDs2tDRE8mUJsWZmmYjfGcneTvVPrV2a5a22bJNz76vTSmyaR2r2AWZHMzRo1Budsa1Uv",
  "key21": "3Apmcsr9rd2jPGmzmqLUfcgM2fKNm97BaXgLkTyL94aLnnqtLZthyjB89B6YnywhR4tgmskvuAnbNU7LT8HrpkHy",
  "key22": "2arQAh7Q84BdYKAWZ1P5FxfY1YKxAkwkUgceSW3mUvEYtCTbXGC1G6Z3Fe28UEHfSgvMcrobFf4JccQvEK4gGcmC",
  "key23": "3631aRYXJnofVczh8Pa7uoXq932naUhjJhjU9CD9G3Fj7woirgLzmxEpgBcZGxqtZjT71UoiSdQ3wAwx3tSL3QyX",
  "key24": "UqgyAQNvWESyuaNmm2H7qw35jyHRbe4SY2ChXb4AUKVKeNzAzCSfZVLicKkfew4SZCMxjxjjgciaYdy8EQzFAGG",
  "key25": "5DKEGLgHZZ7q5YSiTHWXETMbFtQJS1ztPFSxT6XMVmdbq1enba3gG3bPi4DeZrQgB8zHTkNuqkdkWuMgEVDBGYC4",
  "key26": "49JigsEGPWd4Q5U5dhE4fpaiDU6ueBUD8M2NeVBc71J5SjYGodjDgdr4KmnC54GT2LWv4iWZahURZDBYA1zAtx6",
  "key27": "4mTWfitWeGVkNJLqvf5wP9zpJX36CeoMKaeexddSBxcZa45nSv1TLMNS9yEsjD9EVq4UQp2BZzgBTJtiVSX59G8w",
  "key28": "3M7YMArBCDfnd43EX689yERTLaXvQxi7ys4EPDAhM187dnJKVs1asxKBXNyjW58893VTJbdJbytjB1MwwsJVsMTg",
  "key29": "Nxkx3BkjTeKm1UKCqf1gQ18tNvoCa4k7xYdG3g6Nh6akPDSuovfya4GBYtFpfpx1rU5tefY1x9R3M7WyY5ahTha",
  "key30": "5H5RCanJcV9sRctiB2UtdYzEjzsPdL8dPgVtWTJe7nPTjQgP7LGwsBYhZGaa36MDKSg48wYDKcV7DvojSsoz7iuT",
  "key31": "65Sjadf66MEHdJnXid9RA5sfjiBhATWNDncFgoCLVP1VAZrDJD9TMaV5ukizLsHNpjTmVfQdy9nggTqaTZ2vzh5w",
  "key32": "3qtdb1FwSS5zJVcEsbPkADmWw9GzBmBb2CfEF4VHZyFwbNspnC1BwRYL6FuNCZVtyLF9Rhx9Qebfuoi7pQQjZJVw",
  "key33": "uMBNH6xXp45zDhEmwrTRuimECaoT1v99gEfwnKMJGf7vBEYEudvQnsyeiQa1z8Ez8tfHR2WEzcGSZmhUtZwnm3b",
  "key34": "3HTJLRiFm1MV65Q2bqY2qQfnHKQeRrtix5ejjiWdohZkBfVFVdZhTFpkpU6F77xWErzM9W2vus2A73SXvXHHAW5N",
  "key35": "4AyiTx1TE35aCygpi8hL9GnENrq8QBBpSMTdRuzkxnGBwkAetSPYDMiQHq7YfWyyopgQn7YaN2LJeTzmVZwRE8MB",
  "key36": "2xqQAgg41EyVY8QJrev5YFJbKQUp1vKJyczRCexLRL71GepfnvBrrxzDC1PdaUKeHEmaowJ9iYmgS5eESZVWDPvP",
  "key37": "5r6bqLU6Rpt6iWGYqiZEAqmPzCP1EuJ5Gj682aWPFKGbF2d1LmGRge4Mogrk4xyiUk16mgPdjhVJXuxeUP6UsTT",
  "key38": "58U4jhHJRyYECregs3Nf3FSzkjNrejevaFATtx4FaqKzkjZq1QNUvsv3cdwMYknY9hkq4nudNMnCXdT11jaNg8cV",
  "key39": "3RxPmPqDQcZJsuR1cNeynM4vRgvKJsme7rM8roeseKApx4VVgFtX6rCqsZaW3M9vQGr6DqEBUc54gzvfCfpEHv9F",
  "key40": "26bgyAxDp759EUx4BnwribQM4F1kwZqF8HkhdckcCQvd67JdzTat1G3Bo6NsATYndpTtjMWENRGZKx4samqeLCwz",
  "key41": "3wfXqCpHgvEJ3ZLNLAqiinj5HbNT46JTScmjwPPbjo1iK3eCgEqwSYUBsw6p6AEhvvtc57Svj2r9CS3KWwZna1Dt",
  "key42": "2jL52Pa5Amhz4QzDJ2gEnEqNArUZYiwtbkXQPkGG41SPY6chLpEXD6j5RgbVde1aj5nc4APY99QUDx5fuGsTrJks",
  "key43": "2c886ENvT1pfbH4NS31q5HQUxmJZ4BCa2guEZfYFQj6M73ebkiMBsxf3CVRnH279Sqvqt9DkrXvZUiNbiCY6j3sK",
  "key44": "4GjpcTR9DEvsr9nUViDVUd1KydN42AXLAr6TcboMxya48QWQ93cVvCmHV2irgmg9WfmmUdhgVjemp3KCLbwci9CA"
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
