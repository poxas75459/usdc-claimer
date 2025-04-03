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
    "2oqdKe6XHnBRJRoQnPrveDbwfQHzv6bNcRN3LDAWRRN7LvQFBupv4cZ85RkvxssCRNXdUG9RXdrwtBpmSQ5Ydae8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cs4LFVkSTtW2r879CZguvEi1tf2yqtXZEDL1u9jqdQybURaREskpdyiNaQiLNm7gPTwcUABzBvMYjii26gk4XnZ",
  "key1": "3MiACNLgJW7jFogo248iAGyGNCZFjB4FpTjeA6Fpczd3D27ekBEfacxGWDu19uF1F3GJSNrt8Zuntur8fLtKjrYe",
  "key2": "5ekBDBjeg6vttPGwQJZoM2vsyJrpCy77b21KUJNZVgPT47kEr2tpfzGvm4SVYLSnJUeBmXZqBAgY51cvmszLQLDb",
  "key3": "41DTG3ETcpPJSZztiQJcQWVUJ93N2XeQhdrbfjDvdMHkaiC2DaVnBVFWwZyivJxc7akM98tSvztUDkHcW5LX9tQx",
  "key4": "kxsA1u97xbE4hDU3kxsGudUvijToHGczxVfF7ZjEg6QQZwjf6BQD2fyZ1VJn6Vb3SbT8BkEGK78XcVMyf6yP8jf",
  "key5": "5JF9UXxDDtWp7HNkgNgUxDorGrAoUDMHcVeLJm6hdpNLX8JRpPNzvdtW7AsLNAUmicreBf2p8yB2n8feFHbXaTE7",
  "key6": "2f3XC9oG9jdGf8EVAdN1j7oz1KhTKGD6UUvrjQnZHfBFQg9HemeoCi7npxP8Qg7mfvwgyk9CJGx9rjjTcNzcEE2j",
  "key7": "4iUcgMxgvJAWbvMqbFgYvmXKRxDgX2vWT55CSPQxCaM5DiNryDETSff8XHQ5BKcSBmFMUqPoDTSXj29Ee5SRXSeZ",
  "key8": "3L2hvjG7vYmyUAq9DknbarRj6NQbmWv1Y19cxynduR39eNudueCaCZmwAjDhk26EY5JkS1qpwZyeb1Vc7JZ7t1mf",
  "key9": "2sckZgefgXtsoUfwkWMmMQR1zeECD59wQFxGjEmoia6BRVaHgoSmPVL6egxCRvfCtPeN9k5ZJrMgdnZaQ5E7ahqd",
  "key10": "66hr6cPDYn5Sz9G9Rn7cYGEA3fyXDDKQzwtq8Y99DPKCL3vjyK3tXu3vCDY6NB8ccLRjoTfLAQ9fqxpjVrLwJr9T",
  "key11": "p2MenprbodQNAs8ji5Ar7biGHP92MTfHyHH6QSRoWm8MoCnWUR1se3y2drRqkGsNj7BYkSSjYjzZNTFe3NmjZ7Y",
  "key12": "2UpnfRLC8QJUioKrqD6uxsoamuQS1WHEeFAzygsf8yRYHYWJj2wG9tNS5bnegauJ3ZAhWsm71CsHk4DqKqQovj8Q",
  "key13": "5txmHMPPDjupkWan7mR3kUJ8m62xaxiYUcG5GdSXR51nFhksJH1y5Gz87wNfYr1VWktecz9rKXyU6AbhAgiHQs2K",
  "key14": "5jJdw3r1HjCosUNwLoV6hrUna2ift2sKRyZwq5ZyJrvR5ghQiMStPyyvvkctws4A4vLWQJ243YPX8JFy8miMKWHf",
  "key15": "5XLjuPHKHXDTkasT4xphF3jFVHSXHCLF8WZQv2HdME1Rk3Kgq5dtNftedcfH3C9ciZUqaH41AcAvvGpmC2EfWrZf",
  "key16": "2TZZtq6dVLXXugaiSpLx2SA7gsVBqD6b2aCwbrupKtfaEESaifzGvptieeWj4cFbzvhej4kHvzCg7YYCXvmtpNhJ",
  "key17": "2UKC47DotieJqgJHhjKJGL5W155r7bbiLRq58zXg6yCE5n7FiKUxHyndD1R3jpTmHtX2B8RWZpd14kgN4iA8ozY7",
  "key18": "5SXPpi59oBwgfxwUeHZDEmZohZid52J9cna3gBXQQETt53F7g4o38tnwtj1i8uyA1dzg6XTyMTd3EFVDc8zEzeQ5",
  "key19": "3ALuc1qAbyzstxvxgc3SdvZWaSnsQq66yMpxRDqbRbATRCguKqgiG8A8Mg2nvZ8FswMQWo7U7CFWh6u8Tj8kJs6s",
  "key20": "2F2fDzotxTubmBVThzn4jgRCipCig7n4jQuemCXaUSFoT17uX1Mfq6KncCNSbBWaGTaCQZZqhhbBMs1YaNb4sAE3",
  "key21": "38gfavhhJfdQa3S4fKpcXHMqeJ4jrtS6ocVaPQC8rgMe87GnouYuYpcEHGaXRHCrCBGXYcQdgcUuyqHM2e9wVP1z",
  "key22": "XvEtPoJBm2zfKTjEQJjq1sigMfuX5jKJDi5uk1edgJbK7aWtyxaNa6rjEDX8zHWmiFYtCnU2WPnKp8kKuZePahD",
  "key23": "4fcNDpvKbirKHw2XMJkCduy4i9eRVSgPiXKcjwWypvogw5zze7pFyk7ai5uSUd9hFRGf3fvvuDg3iHh2rKUr3yLK",
  "key24": "5663LQxN7PF5ZovsbHQp3eopXzRM8YsxZGb9nNmsiJdXh6A8QKsUMJeAGfB4Z9rWa8jmh7K9TieFzVAzaa6gqNXu",
  "key25": "wCSKp26tGp2UYkKs3uPk2Am5hyt3aWJZMJRwHhZ8JmrCf32akjsDPnBXhTVXM4tn2xSh8K1yeCTRyywosbUnNui",
  "key26": "2AM5sSCgZceNPWgY7zqbXHZuPxn76adG2TweVfaemB9hkZu87UqiNiGQkFFU4Xt6NvogrXSSCX7rvVmaNhE3L4HN",
  "key27": "5viaj46uct82ThYbNufTdFUzMun1gd6okyiBMLTDVM61Vo2GH4ExF6GZxzPjnjVMx1i4Ki5gzUv2hXw7ZWHZyvqS",
  "key28": "3gTKD219xRevXXZaRXQGBtsbbdHGqomY5oGnNLYGx5tRexhSvkPqkY23Q1SkjNxgPunjR6RiJ8ALq3GNteJ7xz43",
  "key29": "2uGKMcP43grBQNVuuuUiaGDxejRCjaCjeR7D1bfgtk54aFFvvvKjZVDueH3ibNaAzpwaB5w7vE7jybCiF5GTxU2h",
  "key30": "4nvJAxBZgFWuuhB4NR48auAJ2LmraWPLzbyDS1sop78quZ6YQZPPYjPYvKK1FFb41wD2yn3QPKcFD4Asz1tZb8Vh",
  "key31": "4SeBvuZ5mUrbPmLRVZZKo4kwDhw7KwHXi7Gr4fG75D3UCUMJBsBHDDrTuaDNqdi91y8t2UJWJkf1aXcefeHe84Xp",
  "key32": "2RmguqvcesdWydea56ykUayTRFge84AcEvUKdJpspEHBoSBu8LgJBw3baFK5b3ebjD4D2jvptVaVcHXu4dvyyEPQ",
  "key33": "4wxaauaQiuwhagXwfxqPztSsLA6yqco7VQfv7UZA48LWpYCj4MU3uKaDPbCkBhM1cwuQHSHrWaXAJefXtG47ynz5",
  "key34": "4jvDX3Vxa4oFMWozNv1rfxJdrG3AuCyF3jmV3suwabjXDdrUU6162RkgFqidNAtpNRStu2CiALvjxrNJ5qbRqHTm",
  "key35": "5B2ynWjz7QquHz1sR1obRNnr3wiTd87CwByxkmYh5PtxYq6L6hVCYuzk6LXnkdbbKKrY2DSHLmaJyoi2t2EBR7Cd",
  "key36": "2DbWcqDJNimx44V34DsSik2nnajJPniPQ39GDsUfAeeT6KE3tbqeuRsd3pVVHvcJThSVxAp5RtBNSjNXpwXwQraB",
  "key37": "25sBwdb39dqq5zPqh4cgbHbZmC2gnPDs98BG1sSsuuLi8yETTEnA4cF3k4MVxPwNXBso3xAo9n5gtDnmbJms975V",
  "key38": "57PM3KLuXncUooH69LBkaRcHgB7MLGyx9HrKx5xdgaHHoQDvriXnKtMk5rYS7YvT1uEJ1n7eKneNoSW1sAahsDaq",
  "key39": "3CvZB3Z3aYbZ3Pm9EAqGyUHvA1r32QzfWpzarpcxRtqQrynN732SBFfPwdNT2NzowKkLpBsGJjZE2tvzn931r9Fy",
  "key40": "2ZWQBuekpX1aNJLcYfNDDswXHkMQGth1oXSZq5G2PpEAuGE8cyEtY3Nz5GQJUMfrmZHLFxNj4xivCdHgafydZXEz",
  "key41": "4xgtngufrbPfAga1QkiakH6WSzv6tVUbtzmEbHKRA4KL3yb2ydqhwtNRx1RYtQHwibyyoFJUQccfwXVitfGhQZ9Q",
  "key42": "2AgJtKkWKFdffVLq8sExAqytq8nqa88kWAsUE2DCzNkqb7ZDqGWuZPW9vQEUHRHer5wBM1aH8URCt8vamBv8VnhL",
  "key43": "4AwdeL1xotiLneFk8xHF72oEi2rDgEAqmng6PivKgb9jtDzn1cuvietwose1e2XFhvF81vmaYNTKPdetz44Lm7ro",
  "key44": "RgPWfHJJE6AkSpeJA49w7fDdcUcNXkaCsR7aKuAr3cKgjrcdcQBwfNY61zaUQ1iVBZhT1RDHQbtk5aw7KWJ2F4G",
  "key45": "2GvRqFfAb6RM44MiznJAydQTi6rewMsMR6sWsXYdncGYUcRhEgSrdUJiBK5ZhW84SPPoeknvNsnW8W99D8QvijLx"
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
