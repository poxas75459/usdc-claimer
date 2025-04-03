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
    "qPw4mw3Gm4HNc9AXrGmUGt9uW2HnUeJUbtyE5B9CxnWcMGYZQaHN1rCYUN6vBVw2Gy6eLwj1TXqqN9xqLGgVCgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndVXt2qxcHMgrqYSq3cuRpXMz3woptx8NNQPLEcYhgzw7u7wNTst4UXCwpgEQNziAYsTjDU25ePJdKdbTM9Uzqw",
  "key1": "4LphKBEdRXMg12JnvcSxia6DxhrK3CDT9giqnuddKeY3uFWqf4vUFk6VtAkUswBGhSQdjRgRWPJZfEBzHKCQm7K",
  "key2": "2rG18ZrgGiZghyRoBWx6wnmZo7RH4r9GQ4sV7URPk4UUPW6ce6v4tJHiyjzzmpRerxHht4VTqELC4F3c1Yy6t3Zb",
  "key3": "ZxozP9MMkdXLivsPEvRrh55QDTqYyQNkahM9XjtKvJP2axxKj8Nj36j6MJRYzMap98C4wVtDzBprX1mFLpQnh2k",
  "key4": "5vL92j6LHjaL9ardTHsN2sB6DjmTP4uUGCvfZen8NGw1CDCwKKsFZs3sPRMYa1jBvRZ2CsGocwqKaAaHL7nUCn4N",
  "key5": "4GzHoimaun5D9b3HdxasENG7nfN6FmDJ9WWez5yjoPDUBUVsLXcVzqDvhvZyBjMKQSFGjcjMnpV5mnis42Fopt8r",
  "key6": "2HRpskLgHMijkF1BuPLd58gUwMQfG2yNt8xdHg9ph7qFgSaHxJ6U2uBvMPDeoiLoB8UPhjAnY6rjhTfAG6XQDrrx",
  "key7": "3WpQHehwmBL6YfWJePDnYug2K68qiHoNxr9ounQGJtQsPrnA9L6ZxZdNETX315gQtqTnzfYdQPG6rKvyd4E4XMXa",
  "key8": "2N16L8vmRSLsC3PgzT2JhE7WC2eFyv9EER5JJi5HYjP55zocbXPun5nFcqRH1kE1q9LpeXzf9nwuKgypgLSeyh5S",
  "key9": "TXvvYwS8FU5eomxcS2EypfBR8YwAnAJrQGP55VsszueHjb7J8My9mzjejUm8XSgzGzNQEVaV1Z8FwvF1MSVDvxC",
  "key10": "4cjZikLQpAGtPMkaBsBC2fzRDrCHgH9Bq2iGRHeRwioGGt8uCoyVNqF17fRUUDwmAX3aSrieuHHq9rcHtpdHYnAy",
  "key11": "2SEYErBDHyj72ZNZ5TZSip3jXUyRZTZsoJuZ4U8PTw8n4feRsz4vV9wokJ7okjtvXQY37DMdGtS2p52GeLR9LWvX",
  "key12": "1vh92DcKpCt8ScJ1nEKCw2DuH3pL4abkhYa49iWkSW5eVELCJsz1UVMSYw4zyLN5BsPHBKsTfigW8eqRKuo7Q9w",
  "key13": "5H8bZYGGvQH6cSLXx5beZkSKUaJLgE3W8nVJzaJLzdSZ7c8jyYe6dQo9amNeVVgUGM6giZf9ifBKyqbDWYz3TSJR",
  "key14": "4Dzhp4aNhkwjVLZUkggTezD9eqaoLMkWwdx3Fad9teSmYsFQRT5ni6YFNydeinPinB2zgbTTKmtnH9qkC3GfBNFC",
  "key15": "4YqGoWVyxNgJwdGJb8SFH9no3aduyrTC7b4YuuxBXP587qf3ffzqmK2SBuW6ZMJstjdFcShxSYBEtMBLoXggqLau",
  "key16": "2opQBFrRFgzFzQYT51yfgmVEREA7yUHVNj88NVUi8sMkjrSVtfQFs65pRusypHueUtt5jw4qaKfUuXfAqs1NDh3c",
  "key17": "42cRht8g9hj53HsrHqrQ1ALH7Awny3BXweGwWgicBew1rt5HugH5Ezcr3qwjNXkjRsNo9n5EeJcz9DGEf766zafF",
  "key18": "5YCUbZKoKs7EUvhHdyGnDHYaGYtvaWY3GERosjhsA2eznCyjwSbjnbmZywXiCpv5TQKgjCWh7RnoJksNbeAG5chR",
  "key19": "4rRg6PYuSAuDib7PikKBRG8v1bYaCoEQYv9Xq9kP1w1BebDfNJ9ASBJoGdvfQyqwUJ2Cgb3WWYjefGfbt3Razd7F",
  "key20": "gdqB8DePBaSvSnEdwPHk9hSyXYhXQJgeWrmVLW5rWasAm1JSaaV8E5baajLfewj9YZiCVNmhP2ZrHrFmiH7XsXh",
  "key21": "52NDeUsnoGGG9GRDSdLtKzWjxeJJ7znFtstiitRZTKYqzHX8QxXXM7hn8ijhT4D9kKMRjwPDyxVNskuUtpYHokay",
  "key22": "a9HjfZtPw3M7z3Nm7JduamJRdQGb1QqzSnThKp16yDr2h1xPdPmZ5KTKveT2d1Qj7VQdRv86TfU64BDdiTGHZYr",
  "key23": "4YaDcWsGwcgskkaeFVkPNqSSQjSFShNvuoqJdzATm8em3KFUTFvR3YwaWb3DYTgZ62RSTR1iWQMoFW21WgjbrrZd",
  "key24": "4o2SgF6D7X8AQWduYHbW2XfihUAmxcSdTZHxGXtaZDCtzihKrRubrNZEosjsCFaQuNYz9pDZm42YyzKnZkb27jwt",
  "key25": "4CyDofdPwD56v6in71FnxR3S2p3JfA4Ro2xzga5vceUgUpubEofERkACny9PHVr5uPRPqvcJSQGAGAwBxxYLAUQQ",
  "key26": "67bA7XRutseodhLbxtWVqderevHT7mLYuAVRwr2ByvQ4e2jJFUthfxTBgX2K6fsiwqLoPjZJVVKebvioHwPoSwpK",
  "key27": "55T4zMMC5XTDKqCHer27BD2u2ofBT1TphU5zXbJYUFVdu7kmsD4iWUQoGNtmfu33CXN4Cna8YLXy6qz6LUYNMtBF",
  "key28": "eYQ2hgjHDC7YFFsttJDQmVorHaQExEqNBc259pC9ce8sqSvSoE1zC8TX6EW95tFS3dJdeSEJPrLtDhPYho5d3Ek",
  "key29": "CbW3xRa8oYyZT4X2v5XXGv1Fd1siP2TefxyGzB9RGuxHR9dN8sRfWDtL8nMUdqFwjd383H4ePeHFQ8JhTe93Aiz",
  "key30": "3S27onL5156cH95sYWNaZSTEBPZ5tyfADTzJUNtox6zJDP8HjEtWNnXKPuwZaRUVeFKi26AbtHuvKtYmbEJWeeG",
  "key31": "2V2LaDMyzELwdABex9aahhgKTXFdYNWVZegcPX4E1k5b9FDjzUTKfDrz6Fdru1qnURq6wv7HggB5KLgGeRZMmXDk",
  "key32": "BUaT7Akid4FaCq9giFRuVKG6JsoMwvTDMK1A134ozRKYba4998jEUZVEfgEqeuTzFF1XXXLkCqhjgguVRynR72n",
  "key33": "4XD1CK36zdSfb1UYiiGJNoziwSTKCGpbxn4BezGi4gFELQavfVD4ojA5ixrPDTrjPJVEQmbiLQr5EwxKBDZms3cM",
  "key34": "53VacE2g5zsUDBi4YtRvVsL8JPkQV2tVaGqXPoXtRkDzzR6HjVorBgJ6K1E1mVwfzrEfryhanJy64G1vCUHiAjkG",
  "key35": "We3ZsayBrSqXrQnDHdaQqz8qKbYrXY9NpgGDXLFbkC6AAsHAMwaj5XQC3H1sP7yoAJWLU4H46dVcQGtnxHVdyn8",
  "key36": "zDHekNWYsxduPDGS7gUFPciABEGhLQcMJBhh2iWrzNVhA8cyXjiwjPkgSYDrz18dhuETrnzVBCKKvQmaAWZnZHK",
  "key37": "3BqQoCQu4XcWLsvZBVaZDtwoEnD9Q2c8LaPPfTGkcVRce2bpy9pidhJdC5XGSFjEKh2D2JnX9sey7D8ccDRyvHf9",
  "key38": "mJJ9QDvQf263cKERR8bnHfXhHcYNCWDJLxNbVT5Pwku9PHRMzDFiaaqVaD2XzzrVpk1Tn5E2oBJn8ZNBA5Vqkj7",
  "key39": "5ArHHewtvmddHotKQBoU5vrzziRTsHVPfDxuS9AU14REKukjYYtcAVqLGvASuoh9j2mH9wY6XTMReJLzgXStc571",
  "key40": "KEyeMbifBYe6uwjzorUxC86F2bxHm8kD3qhTNVKuAD9FSxSEQpgpcuiPd1Pa3zefs1noPeGkcNimXYX5CoK8Nxs",
  "key41": "VGj6Y6Rb3iF5svBEjx1gVTKFvfoPfamRoMLjTL516bD45bGy3orFmGQqYgSUYjPiBCLSBY4hywNL8XMhbfuM9nv",
  "key42": "2tpaTfyhbd8kBhCCmP3Gb8ieBBzcVg3ffDhEVBkZ1bkhTc8BLhAk9vZmZQYJTQz5tobLoZNEBHtPJdWso8Vm37JK",
  "key43": "3tPDKeBTs2bLz6fKmMhZpneVvfAPPKwwujXZ1SL57kAgFHWVfiLUkwQtcZWm6JaXifuz9K8QQguWq6V5gPLxsrVr",
  "key44": "5oRB7LVi3zpF7WbLwegELNUCnRxKjuG7BwrQjf5MJgxj3VSCrEmrjjsLZyJph98dbdc6GdWjkkrTnDiXxVgfHv9W",
  "key45": "5JJyhX4Akfg5ShdTJjkAjWQBHzh5tcovx74RSY2crmvxWsCu8ZLX7AA1vRxNFdEWouZC9ixxfwnQQkrs6NbCuB4a",
  "key46": "5ShnQ3sMwfezjW4pWgF2bHCEWWVnd8GVyH989eUNKDbDtevnKPEcBuNEfN1NEKyV332thjmJN1F9cz23HZfFXL9A"
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
