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
    "33PmK2spRm5KnBsw4ujh7pBMYjrLXmKn2rMN7ZMUZx5oS3mtudQSQjyP2LcFuxcH8veQsQs1waJcXNpFNRs42ai6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56CwzAWh2EG6jtRt3M65ipLBKweWiQvZv7LpB7rTzih9Wq5ywUPgGjrCWNUyQ4mFq4oktLEqCcUobUY1eQFZ5GuC",
  "key1": "4WrtsUTn6dxSTHMDe94XgQCv6kowrVskQRAhvaJkWD7JKgU1g18MrMg5qeSxKU7HYFPeRZvki6zzrZeD9kdV4hns",
  "key2": "46Q6Ce2sXLwif5BthM2rFyA3dW9HQott6spVLqq1CyZrR2GKbmu1cUYEkVM1xcN9y382FdNGu7BdMPz1fbpPxD5F",
  "key3": "3WKjh2hchrsLCr4WirFUnM8L7u6KY7ToFqYZQTtr4Y1tfZsKxUbEAMn24w2bTDASQPAsKn6Vo7sZwCRUWyQy4Dqv",
  "key4": "4Rasm2XscDSXwp8PKLgZ3DRYsZGGJo4CGHdCNaHGLTwhRDVnx9Z8i3v7xLD6i7EdaRLqe3bQWDJHzBmiuri89Yvq",
  "key5": "yt2VMdLKA8c98uSYgGqKymt3gGSKqkousPBWPX6HotxfdvrypV47Kxa7zyCKB9HExmCHXREUyMLxxd1ZCc1G7ip",
  "key6": "2qSkVVRGputfdhHKxePrr3T46ZqsWhLgDDNrou4i8jtMEUTgEhE6wA9DwUDckudCaErp4gkzrQ7wfAkdwnig5HZS",
  "key7": "2sUzeX3t5FPxqAV3tgnunf5JeukbXMXSGYXBToRRj53ne3CVoPvFdCTBA5LTVzMXupnZWFBb6AodUxM22ydsKsm3",
  "key8": "342juRdCX8PDU4V63q1oUxXDEa31u8vN6GUYjdu9fwtMaK1CehSNvBNCo1HZNn9GmheZYTsfmeiYpaiP3QgaHE6N",
  "key9": "2K4A5wahA6r8QRAyfQ5WKUbiHyUviWYbo6pGDPkuzTwSTUY7k5JESNBs1u1K4gPtLU4njAqmn2GTKEwoDHv5QWjC",
  "key10": "5XFoeT1BL6gE3JrsTVjBWo3SmSvLNK6TAaXu22Nw3WPd7JrjfWAJ7JSR4Hz7znWqL23fZYNXj3FJ5xfTrrUutAzu",
  "key11": "3js6hTpi3i7bWC3FoV1pBswyboL3PNrsSPVFwkew8Ss9tfha6xM2cKvwY92U94EUBDhYpvhLQu4pdqkCSUSxvxj5",
  "key12": "2GMixRL3nNTgM66N7XMysEHnzgSi83ZKKQQFiyx8NRqPyt2BkexQBQFFWJNwVCJMzQmZwkGBAQHj4a5fzreWMVN3",
  "key13": "2UH28gdu3b4VB5hMbJptgKzTos5rw883aPiBm3fBsEAQsmzzyC7CnfJ8PiUNRBu1Jffqj4HY2GFnYV3tBkb4qeSc",
  "key14": "2nnp6hMrUb5MkidaUFbFBTxSgsFhaC6wAuTLifpZBwBsCMyyUpuLszp7ekLdeb4obcwJ3h4wddeGycRtzH7XGe9X",
  "key15": "5EHqnQxxoj4Ax7jLuZMUSV4CNDdDGnR46jqzFuCb4BJ61xFjurN7Wyw1Kgx6TqWbQ3F8H75smDw4DfAaFySRq8kv",
  "key16": "2SYQrn1js8ojXEkJ2CQ9gvhWDiRUMHDSAxZe3St9Yhgh1QG3ccLrWZLgvMLzsqpHoCZmgLcrncGkxJywEd73Tyn2",
  "key17": "2Bn2HZQeYsCir6r1ZwM6AcLiuBNTJ5cWDuUUKkNkqVtTgaoeFeXWtgkPQYre7qYzJT8s3NPQYCtXWXAyiV6Ks8s4",
  "key18": "2HWm8UpJt9KBHxRSNGdYEME5wMQHsZgSGXQJNK7QPPN5QvnW1WNwxW4uaPitrG4AbbzT3TYffJVvCYVdRQS7XPLd",
  "key19": "5JX6aBPtvF1n3gAKWMWVJUTSY4sugigyKnsmqNhZKTWmSZ3KxtRdkWy1AUE9kdc4SxmyBprUmdq7enbiosRsw25B",
  "key20": "31kcwZrkwj8PgssMhXfHuHfPavDpvhoabprQBE6LnRjmNJ88AYrdJEgCfDzTM56AJH1zit8QzCrjaidDih6w8ywu",
  "key21": "4umx8aRzsFif5qJWUuCLuMDnsUr6DRmXct4oLdUE5xUdatiHrEv1u1JM2cKEKx4LBtuhcYsFnD67HZ3UGPxvLazF",
  "key22": "2tWyUCTF3u8Chv8NRUZUfKGrVsvNM3V6oSQbezZEuGz4KxktNeCUFJpa2twLHzyrwZdTHPpZZgoaeDB3Qb1p8WgU",
  "key23": "4dmSyn6yKuc7gjbCVodGQ7QUv6G342akxZqdUWM6aznCvn6bgq2JQyNGbxX4qjcRwSfUeFWHF4CHmwXcc6g9Ad6n",
  "key24": "5T2qZy6jHhSSMze3V9FRvKjX51UvnrrPWJ7BY5fpz9gMPDyuKtXQynGQApdPjqJMWdCNNKQeHftuJVQi3vzrhT2n",
  "key25": "WLv8EJkLQDEQGWRpxGiahb4F7jY19reaY1Qo4c8kWxRHtBpNdHyJzrG6CSvj1J9pJQPNMzviraaW4waziG9Xa6X",
  "key26": "2FzKjCbJ52nxT1HRQSPFstScKvNwFosQAiac7JA8v1FacQ8mPrS45oBdXB2z2TUDDetdgs4QbXopqvKbFRvYMbpw",
  "key27": "5X2rXU32aiXLFnsS7FEtwpmRqJcwWcj9rDXGwNLR41xUSU8QyH6h19BPcoKtps2VT9TKNdpkbHe1bihPY1ti1s11",
  "key28": "4YFxWEUoiASsFbXJe5iJ4xovdZqwFuvT8x66EEu3qGNxS3HJxMqW2SUL1ZXw5DB6PBgk8FrAwRrXixSsXXFEvpXm",
  "key29": "3Zmmz17P1T3LgMvew2h8SmJmNT8nPbB4PPZrKr1qvohbLr3pn11xM3bFV6mFEEPV9PYBNxxj8VvLV4RryPu1kP9",
  "key30": "5xrxRUWcj9Kg8GapdUQw1wksxrj2y8msogiirLyiuo5szSh95C8gstdvx8tZwKatFmwZfRq3TLu9mUrRKpe15Kj8",
  "key31": "5tAd3rgJm91dXbciYhYTYQJXH996LWHFeXCHsD4b56taU5HoTWpUiwRjs66H8mEC8L8o5uwE9f2GxQUfJ4HFMxXP",
  "key32": "2QEKvVFs1SgcmTcoH7kAYiNLnPQJ5XRiTbiYkF6yuueyJcpPbGLzat93yXy7SafD1xBXi7Ay9FaD8yUfT3mbdLNH",
  "key33": "KYhZJbJ8AuHBk4rNez41BYKejYnvy3cg7nWpgbKaEjiHM9Nupi98hQChkSSsVQtwawLLcKgGdzm8VZt3yvSq4X3",
  "key34": "57LAHaWDiNpqZY8pA97jxxTHTYghWkf4KGSK6MoS5LFzhbRV876kWN7Ch6ttNtgByqnYjaRggPFKEqTphX4L1F39",
  "key35": "3tnDvELVEMMFQF7vC3US2eoZRmqbtczm6o8BN4rM3RkfVRNybVnZPRd1h6TnULUcgS1KUmbWYM4fcuu6XrPMckek",
  "key36": "33u2T7nrXsSWMfWAj4PQdViw8Z7EtPkDcytPapZkVtEDtBF7Da4dxTUnxvYrkbsbkzgnQdwvWKyTFBg8XhQU2s6S",
  "key37": "3c7rHtnQDubUwTd38caEZfq2LGnWUKrsaLWMA7xCwX6wANQ9AGf2rMet2yb8SijTruobEHMe8jx232pFxFutsXjf",
  "key38": "5yyiDUBLNQx82rCQsph6MybPMpKo2ctrNKxKq1V1gHzMxFRQxse1oT1XMPHwdJ7Kh35UTTrB3DpQqW39apgdgtq1",
  "key39": "2oKSshLHja1me6mHB6ofz31cn7coetmhs3YHkBUEyJgHswsxDZ2hMYvam2AscgmNeEg7kYq8mnQmzN8njUoZP7qv",
  "key40": "5JuMiyCBKKQ1gvQVhV2qABAoKMBBuDSi7zXNorr198Mrx47r9Q1QpkzDym3XKK11CmPYQ5cxF9EinJtAwveDvATZ",
  "key41": "2zVWGnwdtAntYUKopWxm2ub33Qc61gzuVniU14TDuZLJV8rbTYBC7Q92roD6KsE5GAGvp2da4HfFfqne5pMvdQsV",
  "key42": "5vL5TnqA951iQGbXe3EnydMK2tS5LHqiDDEsMd2iyPCDmHBTZgX6Y9cWgTxt9Y7j4gVzmQKv38jd6zKT1HiZ6jsb",
  "key43": "5goeYoLVBttwLozmUFmKuU3HRAbJtcpUn9GwckfACCBFuSKrk6JB4fysdeCn6L3Da2odh37UiX5d9Gbf9rxkKXJv",
  "key44": "4mYRufoaK6qHEPrYxjqzb5wPLe7qExJUo6sQ3AePS3CKj8n7pYqp4PNWf1jobpfrJFEaNEWUpAVzBfzv7zCiAfeJ"
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
