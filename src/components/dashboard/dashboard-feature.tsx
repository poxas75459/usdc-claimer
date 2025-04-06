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
    "2pNL2RUoRd5tiEdzmh9zc31QbvkSnFpGdqyF9EF9sjVwempoAm9w61kwgFVXfFCAnfQW2PMUn65w88NewY3FZYr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF6DdhQ7LVNSyL9SNQ6McM3DZRgUZKsJfc4bAozkfGV4Xt5gUsqvvTdtCD8e3t165uGsKhqoiy8q9dxxBkvXYD4",
  "key1": "3dYUVV97EhQKqZcA8pEhb3Bkt38B6xzUQ9JiLVLJyqwCEDCjGdZWNxTam7szZRrkE1UoxxQ4khNDUrNTTqmnfJNN",
  "key2": "5HfvD9ZtU3ReQAfJCv6XjcGaARBwH6b6sYiMin2NSJdPq7AdeYLTkCs71oyLY9GzAfcvaRLtRXhkPjCz7GKzDbUz",
  "key3": "4aff5A76VxXozj64phacPdAurcVnCD3kZZHeZhTms6JzCcG8drcwnkT175dKebtaTLMeCRKSG9k8TVyjAMH4LyD5",
  "key4": "45CJrQVEuv15G5RGnFTuwzJ6ssxQoiivFt96tGid1UiQkiwCFg7UXRJjBWDCN5TQ2W1pHK6F8q7KkFHDLG9MubpX",
  "key5": "3HUbXaKXSsZwjb6JpBAPoAN5Gvsj2TNbBUEwzwkysHhtKPmWjjC6Ssj55JYJUVEhmHsmaUttUkhgCrgo8oGrEHZ7",
  "key6": "5NeEMYMjxWNy67Z5m3Xe5CA77mLA9dGKEZfHJybJrjc56Y1DfDQ3DpRX8ndZkwTUkSReDW9JjSspbzHZWnaNEPiW",
  "key7": "5dGsuepwDqaWWJ2DkQhW7cKgLipj5tiCodxuRi5KxFYWB7KsULr9is4BKuZ3NAL1kZRLG5rzt1pEvi6SoA2N34ov",
  "key8": "4AhGHRUGku7TCNVWnytmmx4p1qmahcW91Ae132dezpQbRH48mSFgbVUTbLRkEYbtZ8JKmzRGyJQ7H3EpSifGkA9F",
  "key9": "4UBULLGySwbHbVGJwVqMjCTZmQ8D3KLFUoGX4KkEhMaoimThPrXu2WGPde5kQqZhZ5VYtQT7BVb4XdE8yFzX3Fd7",
  "key10": "3LYWSz2gYLCmfFL1pmzTA9pfS8NqJryLSnJBRdHEMAiszycazWmAES7vkfsWhmaBbuxdcaR7CsSD2sHKsRJr9yZj",
  "key11": "216rqaE3Rvxrv6jWXnuAA9mKXJvsndMFMdpvbkDbbRTKe7xNpntSb12JT4GF8xRLt5fVk9AvYNHUu9dG9DBKopqF",
  "key12": "LFufRtDKHww9jh6PTiFghSzUWen4TD54YXqveyGWUagTj27u95bHVjijENRixjPn76Q2FdWDvAjUp5kEPFMHxuX",
  "key13": "4WJ3U26yCVDwpAhFKsKWgdAvVaZuBzQFqz9B7LgUPcL57vac3f28NWTS2mKziT4zVfdbFG6D5os6t5JrfkpViHLh",
  "key14": "meX6WZ6Ra4FmFS75VPouc57DbgATV33auVXhzUdViJ2dHKUUHNYrE4ww8TCR4UUB33QETWSFRQGzqG13YDY6YxQ",
  "key15": "47RZHY8GZmRSTa5NDKF9bXYqX4QoBcbyGz6Z66HfJxgeQYqEpJmb8Ct1YjZpF61Tse8xrKYsWdFtLLxg6Wiw1cJc",
  "key16": "4SQ2f7RcZTpxsmS8Yr8gXBtgQ7aJjRNzEdtMqMt6Cd6hvCZwVsrH6NaporR4LesH4pzqyekP7ZwBtBpSuzCnjxBF",
  "key17": "aKp2Bpph1jYJ2t1GY9R32fp69kW9pkx9383YAt74HZ5i3SAGAgzQNP2Y1PkXtT2dxmhFQ65Tjp46h9SELc1KbqA",
  "key18": "5q8wCTRdHrFMBVnKrL7ZKbJmKyrVpdMvxXGa8VPJjnH3ZpXJS1tdKAD24pRwGCcvn7ckfLgxYDGXpw2RhoabADKj",
  "key19": "55p4UJQ7b7ifhTooYMs6haTnMtCwNCJe56qiBCM46XD62aCDqC4H5XjFBWdC242fv9p2JZo5g2DCojEExeCpYQ3p",
  "key20": "2iTisXpwSAHzqG9Lyz144cf8QMvydh6uoCLoypT59CDnN3wDdm8HaWtAQayDXBnGSSURYdK9vmDR7MJxTztbegrk",
  "key21": "rjyT6F8XCRMRTSCDQ2mWRBZ8qKsGL6ufKtNYaaCEk8UsXzPPWRgQn3sPvT6ZWhDUG4scCfrRix1uLBwx5nnbHvH",
  "key22": "4eTspfkYz8jHGjfZrwpJQQ78ak4m68e4wfBbzaeYUeH6LMfnNLkP8kJC75oZZKZZBAGMqiu8yX6aVzcW8PzVDVGD",
  "key23": "3RTQqgjAuDqnzLpXQPhoJXpr6GVfiUHD9fnjkAiVVfDi1w2z9PRp37bpyeahZbFW46RuDQTjnkBHBPmSSHxnN7xG",
  "key24": "uoALm6dJaZYPCMBkf97gejP8KQQv2RcDUpZLMgmri6PrXG3cJ2EFFhLmHutNgq7CV7VtpBpV8mtRD27aXMKNzVY",
  "key25": "2hfMiDALfmV5hkS3J3GaqnZMeUiZHMKL5BcHw72HUTkMGg5RDfUQsvocU9ZRCf16r1r8m4EvU4Z1H1cKhhjx2g3S",
  "key26": "5p8Tr4utSw4njvTZBv8K2v7ex1LNAwuHtJFDBEraofwcaBi9uB8gVwZiAg3aVTm3Dn8bwDMHr1op7sgvjxWPgadw",
  "key27": "3CBPLYHbYh82UBNHbigAEYNZ1sjZA9FWuy9o7YrqNaFa3Mez5NPTLzGtE6pJPLDZd5P9bHdQCBPbqTuoxPGpmxyo",
  "key28": "2pjEAkaCAviYjopBoxk3XBzomZtDva2qYayrTmaPzukupUP7QHwzsqq1AdaHhsuTgmWURM1ghdW4xkNg4FHnQ8A5",
  "key29": "5pd17Q5z6TYBZWe7S514RfLLng623fC8PtrsCaufGYqCuiARxAJqQta6WrbSNUwcXPeWJh1eSr3shbq2Nj5qv8ZC",
  "key30": "4g1QVCB8WKpRsjtBSwHKreHxK9yF4CSKCsKJvjAphBsXrW5265k55yj7juJK4Rqsek2TQrA5w8CFvt85kWN83HuH",
  "key31": "PnhrZ4FtkE2gwurmHd24Het3TBDoLhTZZWtSUeMdteJSf5944BkPbvJgaTJbY2uUDSfNWcWYdmuYgShCNJ9xYb1",
  "key32": "2ECNFhU1bAgik2PqwHzYeXWDwWpj9dmAPYNfYHEBfu1tJtnX195QnLP386KP29DbtaPGPWCpvN4iHjy4hseoYGm",
  "key33": "3MrQwr9DrvDv2Aci5Tjf6vivzjaYWSUCnqsaYd6U9KzNvfozYnrhBNZSj75G5kuxWzjeDHLXfG3iDLpxexjqHc7F",
  "key34": "3Cs2kidsaxxdGyFyk6SvW5trQdnCgksDxfayuA7uj6B9fJaFsG5T6RqvfgffyNLPe7c6YSSEem3uD3BGeiJsBZdE",
  "key35": "4Xjpr5QdLTEnhLHwKDypBRwixQyVd7CUjLXYN6hcQ1C9AMNs9CRzqBSymtkAuNMhcUtRAqooVxHaaovUZN5KhktJ",
  "key36": "4krzSmfQiHwyUDmdADs4ULNSsjJBFkkj5AAJRZbjZUojALwK6LWSMYNDdekGwi1WZyr85danutLTaxKr2CaxGXqa",
  "key37": "1FEPS1DaMLQoNK4TqdsKWjTyRpv9RXL3oKpuCAqy3PYWjLqTBga5yhFnM8sCbSZUMcrKpCWtr9k1V1pjUBcbewG",
  "key38": "49aH48N6n9dpvVFdnAtLi5JfJ3qf1iPiSUYbEukN3Mq4xpZMqgUb7V2reKTRLDgtr5zYffJ2NyKjk3R6SrTQMSMb",
  "key39": "5NFBYih5RPr5QNEW1BnrmfcDhQzZ3TRmQMqmvsMNZuWRKP8FBZAKy7LNy6EJeMXppJ7L8uXrETaJYXPcyxqbHDm",
  "key40": "4AchcNHFKZUwJPZaGRTUBdvMfABz6ePAqoRWZkYzdfKeuPzgVYea2r3PiVRue9BbXTzNGWAA2qU5nZu1AbhSiMZ2",
  "key41": "41uJCfqpKz4t27AFmTUTuNsJggM7hSXmAXUCsceMiFzD8VFsRHjdqV4N7Shnpt9NbQqLqaiDpMCcHyH785uX8Sr2",
  "key42": "5ehR3NtBVYk4umhrQojfYJfxgXMgKNAZP8T67eJobLfwJRPauEkjjq7mzXGK8VeQXh82uCdC2kGKUQ5USjJtFpu",
  "key43": "3A2umnuWGMUbboM9pieU5fv7sVJJTHi3euaiMtW3iQ5V6tGapCXqModzMw18DVZkch47HvMzTKWxr8C11xPw8U5m",
  "key44": "kjMmD3Vdi3mwNYYhnQ95n16oezvHFz64gnY7aGsu3kLB3Fsn5Y1N7xKLY5KvdKQraC2RAneasz9UF4pEjK7YXc5",
  "key45": "4M9BgiEnZnvVtZFLBkcksCLjXVw6bRqETdqdg4MRv15Qcvja4cBVXeczgTvX5eKSFMpDXgv2qcojq29n1uEA1Sf9",
  "key46": "3FYchGWGUNF9noqeDJN4TeP6i6wdqtTyP4nqZ6Mt2uJXGfeCw5mMexpa7mnQrf55omuFdNG94nKsJn1kQP5mHxJm"
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
