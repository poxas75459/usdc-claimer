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
    "26pZh7DNCRAVpMEh2Zaf15qEb6SMTXsaxLAuXcPqZuGdhBGHTNKXGAYmQziaoqWnvjm8QH3Hq44NhUJzLDiEUfjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pjktbKB75ygGdVVgh2BvwYJkwytR2dDNs4a4hoe3k7J47TU19L2tbnmUPRze6F7CgW7H4fMJ7X4kqPrAFedP49k",
  "key1": "hEVof85UjrrsNEUtMzqcRac9WphiDJW3nZMV1g98zcjPttcmq1XYJrVitLqb8Ev9rMwSaV1nyPsetth7jsvTMWi",
  "key2": "3NuWCydUbK78YWpqZbcz1NKVgKLXXjWbcM5M1fKJDpXzDezpaeNqKZFaMd6X8rwaHgdYET2XeREGJanPStZpfXhs",
  "key3": "51cLyR3yunx73stvYWXdKKvpCe48hnS6yEHy1QWBr7bqbY3UU1V2MCPr4476HGw3QZTdnxuAXpCV61ys6mZGj9BF",
  "key4": "59zi24Uv5ocX17951pzVFLapXX1fseethRB4YHWKuJXN1BfTNxp5AyCARyosCJku8ww5qZTJKYpPGfW2Qht9br92",
  "key5": "KTfhLR337KKAdBAPiKfuhVZmzNMJusMvu1jfJ8UhSzjy2QMovuDQbyz2KGx8F2JCCrDAcnqBnVLJmjyX2uTxfqo",
  "key6": "qJsuweVhLo9AdL4kMJi5wdwMtbMxjqjBMzjcMaPQwpHiGWjPMn7AbZkVBr9SHQoKR65r5swaE4sZVFrP3sZLMvK",
  "key7": "2BmZg3JwiLp45pUG1fXUvhVS1pxDDrd1hboGyuCjz8VrsnMYnXxwbQVEnC5RQZJesCYpSZxJTUz5gTQqz1ovdEcd",
  "key8": "2QWLTGYSxMn9HyjiX1yafaDfreD9aL4F92T9ZXctEcSoCkwSepXhQmxysFzRfdvN53qW6KH9HxrCPYnHWGW8Miac",
  "key9": "4wGic3M3LcnMy9wHrwzrTfL6Z9ZTzBMKtPMwb1MJEwFKWbepR9TWtkiVqNghScY9ZaGL3NuUL4ajM41m4qLC1d8i",
  "key10": "4Q9yMV8jieLJwtkS6zJokc5xQoA7mJzPC7AVjkXpeq7R3wPQRdnmxTmQ7wCVag3heioh6WDrjF3k9kkWc8z24W1T",
  "key11": "37fArGcPwaZfNuXtZw7gZ82SagDbw12XjC7dUDFaW8fvxV59rkXcV79xZ9Vc4M4DSsGBNRgNWAr5g8T2zbyuUqxK",
  "key12": "2L24tXCodVAxaBWQUsHTQJJDpzkUDNZQrepPaZRwy6Zf4z7S2XLG7UfzgDZdHuhPX3BoNJTfEpmfQ9tS2MnQQKRn",
  "key13": "3PsMSyPkAgMfrCkt4df2EFYt46Z2NemCk8uFAjKywK6v7c3TziD6qYPrL1QYNAgBTLgvKhNA4MVSFfCYajuqJQvD",
  "key14": "3nwQ4UVR6zgAgcuLk7QWaLi7mzdPifto9wz6eSW7ftyR1ER25b35xuCpkxHSH4aSrcTxjMc6wn419mGx4XCeBJgp",
  "key15": "54bT1BC6DcNg36BKcjxxM4BzLaH64ZiabCfCp7Jj7KuAi7yZX3mzupm8CdBtrqbA4a8Kgf7ruZpCWSY36YH4Xs8M",
  "key16": "xvDEAJq4ibpP5DnYbikoeczRwVmcT8wDVsMQNdprG5s6UDL1zYgShhjYATKAVHhvSZJb4cjLeNjzM3eMEiudmnH",
  "key17": "5dYjWtuikQWBkd7AMgDgPpMGgDALmZbnnPKYRFt9EfrgQAsimFMVKRa2S83SKwZtHG3qHJToUfAtrkKcDLVmcf4k",
  "key18": "5jGABMoZWLMcfUtEwNmQ6d83HG4Hfb1SbzZCXHk2nFsq8yDEZrAdgH1WdB2wMftmwEr6RnhkgrKYPbNm8trE8sWa",
  "key19": "4SnDMr3ykMZUFEcu2BL8srXC7wes5R7cc5Z4Uxs1d3qaJgiwmZiokCXJj8stAfsJwb3brVb2wweSYpDh7Rh4YZez",
  "key20": "5BH1ENurR2u4osjfJveGfibdTfivLjTo3c47VKmY1GDubkio1XqYSm1LFVpkKvAxPpsqhJb5fUV4M81dy1Ni3dgu",
  "key21": "38vmQxVZCFEX4EjiRPLS7NzrFspVVVgJ3HgFRySmWRBsJUYJWUEDfbjp7oej6PgXoq7MZt4tMmSBAy4qzf2tKFrn",
  "key22": "2HKmbrUhZryjxsbGBaDHUnEW8u88i3BHcc3uT1ER37kmGEBo1LNnCinAPjcgoB1idMVMWbExh9p49shBWnCjjDZ",
  "key23": "2GUmNjyZDuYjQiEs4Bi9c6RA3SbMcoBXEk4SmfZxuADE6RF6ZbQYCG9Pb18Zo8V97FPsEgYJDr4ouDJNsn3c3D66",
  "key24": "64gL2KpcmGv8SJdNKHow735B1rxHcLAdW84jcSEmY7gZfzJJpoAQ3x1N7TawnSYSxTVuR8HrNBJXnmzdUGFTcm1h",
  "key25": "38whqhzDUem3wxUr2GymzyZQs5rDb4RBnPCrJ9uRbPQi6CMQ1U3pdDKDBMaX3Th5SfNAXCZeAwdwoDw78gNQjNkr",
  "key26": "2AfbXgxrxyLLALkf8k1sithgEjvHvpaEkKqv5frg7hfbT6qiuRQyJ6HdLGDWcmnnz1caffQBfPkQYuZ8LwDZC5x3",
  "key27": "3uKWQpoYJNAKfqcMDVFgycwj4YCDFtwyzFPDFDevEQCHYGrKLvX8y2cC5HNEQHsGSNueNu7VenEwQ5QtDtR1rxbt",
  "key28": "2eXKKGggBrLczqeqYMewuzQZXrie6GR9jQjAVsJKEcMdNu1AhLpu8RTUf6Evdcw7w3aqG3mJT2G27yiLwC8kzw5H",
  "key29": "3p2tBmpGmC9izAWArr7UFEFPx4PLgYmLa4FSDVxzPT4c1iMEZnPVyZGQ8kS7x9Nbv6xpynJ6NHygjNtUbEyQGRHn",
  "key30": "p5g64YeMDrd3jvGK3nKYQzdByBVMrBqHyW44afHkjViMwQeUcgtAQZqtDgGm7KtqS2Rfm5THNRxNAuCSYijPFYb",
  "key31": "2zJu9M7nstZcETdTqLNTgHg8sGSaM6AHX4v3Uh5724vHEw3zxQkVaGhTozmroVra61GYCRZhkqXum7UF8y2MGSPj",
  "key32": "4waZMpfkeRZjh8WW2RHNwfGD3StBMNxJB3bK2Sy2HebugTunGt4VcTQzHMfpcfPbNHFFognDmZwYXgaE88tNomnr",
  "key33": "5uCUe6LxJvC7zHLNapZ9e4NXj6t5tnkRkrUkVuGcyjj37yTbMX7f4iSmQxqUyhXUkyWbTwEtfYv9u3sAzhjZqfGt",
  "key34": "5qh3wv22DNiYzRa575xZCuKbjj2KCB9DfdbK3BKZVgowxgwjN6iD363vgTfPNViDVRFJnmoV8jpwHBkKxfbEQyy1",
  "key35": "3HuiRhWa93mUufxGrpRpAkc7Q5czxREa2GFNUtEPHrb2WtRfq4uTTWC6tW69Vjt9cp3BrbwBnP4hYzTrxdEGZ3no",
  "key36": "4VBSYAbm4YUP11ypRTwiCP1wFVFCsu7PcEGzbS5V6fJKhsxSJ6SPm8GwtjoUfWJrGrh9a2iYHpF87kSSACJSTk4b",
  "key37": "4fXiEv4taM4BtBuN1YdZkENSoABAYSshAF8WoZ8tCRKfWUdPsjJZrB4x2AJ628QSx7bsbeVk69PqtcTdBPcUnPto",
  "key38": "wtC4piCjadyHzALfB6WKsVx5vGRNHm1YxET7Xcdr5GADSkisWKRghweMncAGpmTdrGC2guGtXNjh7K38PS3Zskg"
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
