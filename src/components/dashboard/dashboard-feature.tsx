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
    "4etaLMg38fjYapKcSMZh25kcrEVVwJQ54zLF8ZQLqJXQGGnCGvNWVYtxMnbq6uEsf3YfDxeFEjFKxz3bAKF3fyRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svEN2tq72H5PRww9iz5ohaUfr3J7S2DcbrS516LLXRjf5cVptEHehb1wRNjtejQjVZjigJuzsTJXbLcH7k8EGy2",
  "key1": "45HKHY3WJgwPojU2t9JR7QY18FstHvi7bD3GkSHuxy5Z59LHUQxBFMjB8n4cZ213RmqkwFXGNdAq71NywN9yLzce",
  "key2": "5Q3K9NJnJpSrsFfH8tvEDwyJkz8E39JfkZCtwYZRvJc4oicboSpSVrmeMgLwxcDVDtJmcxaVkT2CnSAyaiGMcwXw",
  "key3": "2NxyfWZLPf53TQULCkj1wkko1X2b1xAQmwwEWy3YFHN5hCnT6mNCUUpxLQryttfJtp3yiBGQSuHVbbkEXEaimgPu",
  "key4": "2DbhyjnFgFfts1WoFRreUumtgRP5sizGJgkLERWKy99VL3QbFA3ghNJocbP1w5k2pJVtpC4Rq3jUzXCs5TGGJsXd",
  "key5": "5t3FKSYjg4Z6bJSLEe8w7BQCHvr7bKyxLTvX1grxYXVmgdes9ghKt8e51EjioWezE6KZZE299xqF1WpzdPQSBUsb",
  "key6": "2yqPePHdZiFU393k7dAoxo7hu1JMuWjK7ap438tzotpJKQSkKgniZJgB4bG8AXdp7U36t3kqayNJpzy9dNeDLfxT",
  "key7": "5bKEqw3TPbnnSUB13RUcXHLzA2tsNh7eddzZhPPK8Rr8fZ5Fr6TQVRbDAgcFwUxq8WGiUAxDhGxXbyCd4jatshhE",
  "key8": "4Spjiwkp7Y7NkFC8N3idtBeY2Wb1LPUaPYRWBZNRTaherk4c6qGctfCY1bHRb98EnxFkRFP2KEcxSZxDNvwysiE6",
  "key9": "3TPGX1KQ4nUqVcoxRjxHW2pbRschuKFcob68o7byKDmvA1bTZEXXA2y8FMueUXn2pCq6d1QpWmRtXoyaQfRjUJuB",
  "key10": "4Qq76qQQjRhsPQKFUkohCSer5JGvB3y7gNn3tAUsKmAPJaPGBDEGjhgPCjBkbSx3rL3kKu8jrv7oSEjQztpFdVKK",
  "key11": "3pazq4AXb6srnyKkLZQbPK7UCjBCDucjDcsWFVoK9Vy1SPXK8Yh8rA3h3WQaYvFd9bVzLhipSc7CfebCrPPgTHF3",
  "key12": "4Wohi1nvPGRQxFmeQXXSg2HP2dqFBxxw4bvKW3sRhUg2GnZSUuHtYE4aYe6MN5e8Z4RuhNtLZKyB4b5DvenZmoNn",
  "key13": "4a2mZzku2HFjQtE2ViVRNUta59KH32ZCD4JA2WjASVitHBEsKrpsaMHKXdbvSCHfYip3CpZUACs4j5s9U2tFDhyL",
  "key14": "XRRpwGU9rzU42eCshyK4CMfwzwDJpUxtR1X91ntrpSWVSKvH3s8fCYtUtfYDLsC1CgNqUnZambVQn879BVu7Xcy",
  "key15": "8r7aadmXgMLH5rs3eo8naZjuazrRuQumbhXuo1AM1hNJU9Yq244ZWX56phTqkauMPC5JcwdZ6mrYvnfepxRW8y2",
  "key16": "fdVpHzZJcojytibZB9k6XqSDZ8cnQ1NdbSGKJ8b92F9ZxmxNmki73FCV8Hh3jUsuY5taRh6Y3ueqajJfsaKrPqU",
  "key17": "3H8bMrSwkkgVd8RN2eYHpWwvHSXoL6CXWRdMgHQkNysyFHjQFB3QABYz6TuUcsq2DGsVxnieegHt9hfmv1y2uqiW",
  "key18": "qdQ26e4jYNJKUHKdeMwyZshkjDw7CyvdBtGgDdMjxRq8PaoX3wHbDUDY181uRBTq2EDLJcTDhe6Sx4TxbEMkwtg",
  "key19": "2kzd38TJXoS1rViWT4sXwdrB7iXve5sBjkKCvsb2q7mhbtY3Xi4dkieURoqnLA4hRVFztfFyDNVkdLQdyhQNHAG9",
  "key20": "4XV8EWKPXPB5yNdHVmF7MTEi4hmV5N94mQqynoz66PjiRnCjDhCaZieJgeaQai79ydfr4JD78k4rtAHS9gsY71p9",
  "key21": "2FTzt15GGo42vWVgNFCrGJghu14Nqv3ArNvBuCQKooPMdvXqAc7A4TSkxRLk6LpR3pvn1v2mUE6d3xdTvv7484ZT",
  "key22": "38iWrgeeXUsswsembyfBjEk8eLiSjrxXGxyrwYrSMuw5WwwTiY15VTbw4jUGjgF66GU2HmaCyeazkUdBbpaDRzKH",
  "key23": "hnGGgeEfFAvMRchHJBkAq3zwCLaVxbHswfRZj1kLqUvFdyaRmkfJnVFnPjedGiXJHxKcFBXMxrUvnptvL4pxA4L",
  "key24": "5rRJFjUQDCg53HSrPoxafhjJ6KvY3vmKguN4Mmou1mf9qtbWhvtvC4k6bHsUVktkpM1rspUxeLSDbhRshtqZMPgw",
  "key25": "5nWce8ei4aXaPC5p2J1P9N7j6Yk5gHwDZePWMrnn49FhUP4wvugMJvWtKMGWSix3x3bzSoq3oPLkPSQ2Ed6nSH4v",
  "key26": "2du1qc3MG6LepuiT2UxZoKeacQY91Afhmko4mND7sZD7goYVgQ63eWmdwpxzw75cPie99WuxaMrQ36c3AiUuNKDu",
  "key27": "5sonCA6o2PeyYZH6CeKY3jPDMpX1ma6whtmnGiyFvsyjiduZeGNd3mRESgj5C4yxF87mKtLpRzXB3DpwYAyGgzcs",
  "key28": "3zxh17ddiSQKrvUnBr15w9DdxXptzKKFja7WQ2z8mtDaw5XyqeTFXadK9t1GyBCt6r7rgWRucs83PrVmbQWvkFjW",
  "key29": "2C3MpzxnosxzBmaY6AVXYcwRj3JLnR37wikWHx1SVHKUooJWLdSVj15dhxaQo9uFNuqJ82ZfEbszC9qe1YCzhxUH",
  "key30": "2LtAQVcqfvxVCJABeEZ7QCwhu4iunCYtKyAfnWWSoS7ae5cjyRdtqzu8mHFfVBZwvwfAeYpv7hmmcvvxAsXExSMG",
  "key31": "5J6sX5EG7Yxgtm9JiG1u1CuXRBEqBLMwHQ2ZyUzBGyzT488N2MrraHnoH2ZYr224HXLnW9EHtteba2xt35X3HFD2",
  "key32": "3fpShKH11N3AJ23BWKktM3ms1umP8MgPEpiwwHsFKQADDQau9XnCRwRyGdiLhxCdG6xhxXyTUPgQYdDpiAn8wD34",
  "key33": "3Kd7DnswUyLJ7DYHgTVNjZfy3Hi9NoD4t2tMerxC5Qet4bLb1Ez6LdMc7MS6RAURLNkwgmRmL3STduSuSgeqM6Sw",
  "key34": "3V4GkpZt6RcCST9A9kiqww1EwnCAZtfZG7EpvoNB8XWA8vFzUTW2wvAoRvmxUHVxEXn2LKGATEeMB3NffaKGf2dd",
  "key35": "2gyWCsvYkPNvwfQTf1eZfe4u1JBKypBbiW9qFhesvpaFMQ1RXKGTGTYth9gL5Eoz88GAS8mQFqn9cUhfDigghtcn",
  "key36": "4DzTntH9hW7kkefNC6w1eEtmyLvuU88gpgiLhspSivde6yuUCvVvVqnPm22KdvtXhqVjLA2jimsj3sdanPCfSm7p",
  "key37": "5N4iVgyTdEpbwjZL6zgRNJp5pqX6UPn6ZRLWYsn45766XKZPsP759jJaswLS5dB5iqsY4TSwdLxgZRChMqWLTqg5",
  "key38": "2NKFKkR5QJkRgTWpebYvnjwktS3WFG2j8FPTPtCq7Q1kebcd4GaQ15KFWPMu2nCno3UsjdeNBE3LEqwg4T3652Lq",
  "key39": "48qCr6WmHAAFFh67q9EvR2ufCPi47ePxooykEZh5GR5VUXKLZDGtWqJf6Z6vp4v1o6Sve9AEPcQpuMYsjDqFGAQ6",
  "key40": "2zPbccHvoMdrbZ33SWKH394zZQsozmdHNP2aSww2aL7Eg4ZNbJGrjtbFsCXDqQfQ3NwQQeL2BMV3VgtXLuHQdHSC",
  "key41": "4tpDa3uGkP8jNW6YoaSkL7NpvMhhfjF8t7fKHEVhoWncH2guiHgbzCpzGwmpoxwCTMsr8DGMpNu7xFhQ1hkjMiUX",
  "key42": "bhvrGAffZ7wnCu1sMwUkpe9xitWYfzwk6g5xsvVtXtKXnWLzzmVuzxFMWqxnsp1Si8PsN6gA31H6LCN5ktmRXwc",
  "key43": "5kbMAeMSuQgQTJAngg1VMSGEVmy1ibhiqsnBnCSNGSpfFu6Egfu4LwbAmS8SrCzvrH6zeA96Yw7dmttqrhXa2dtE",
  "key44": "5uHPxEiZKgXwJjj5BEoZBqPmGPueWppULmMnUA5uZS4jSAhu5P5VxaeNkaKtFWi4qtba7pPFRr9JDjkpj3JgCiaj"
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
