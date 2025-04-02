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
    "x7eATJrgC1Vsqxv6hSXDn1zMXpaenwPygaT6XKxhnoVgRtt1MJ9EG2nEQCcmznDw64hgjunj75UHEPZEn12m4Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zNuqdmtg8VQyL7wEF8eAqgYsTvo7NYbHVArW6kQV4D6sWbwdd6trT7uetGREBqbmPHjukoSkgjbmSQTNY5yh1r",
  "key1": "CsYFSdGnBpPGEi3uBv4tye22tV99q8NdGTgBcarqGGrdmyucaZNSyLYg9PjzmDXGkNtfwcGjKJckgmPGP1GDnKC",
  "key2": "27TqUPZAePLUdjggmVArrG8ormJKZ4iTTRp6KrmsBBWjMpzfoV9d2vLZ6j9AaTXsWaa3BekWGzsscrBEDEUFvQnJ",
  "key3": "4mvgk3ZaEFMVAVhdbWwDfu45rpaQ3RuTnNGEn2LDuApH97niMpyaKjEJ7X9hDRCjLspk5Yn95aPYzHiKjGY2bpQX",
  "key4": "4aFbuJhDZtjRs2vSm2Pb2wy74J8XQsDdeSDZADrFm7yW8Vt8iJUfnJwyUVk6zU3QTk7Svu5kqg4wE9NskffrNEDV",
  "key5": "3UKq1z57MDVYvCVbPjiH1xvB6s1PMwMWKtXwDcWdNHRE7n5QrjKNzsrYWdGsLfqX1YfsKKBAH4ML1fz7UvEqmW1e",
  "key6": "49iYUSWMUzYZwWVcjUUp25KbLZi7ggVuRKvNfuBpzLSHcsHkLrfhnjKoQGhpQDuxBXvobVC7zMAKYreeQ9ZNawKj",
  "key7": "3JowLY6uzrTvKWWqNbgm82CTED6CSzKBZsiqZmVx6MDxwe5vSoNCwBGePbsWf3LkJLaT4mzkEiCV38vkkh6GDVr3",
  "key8": "4DK7uKdCWqLfMr5uKzsUcpvxUZdytHUpJsz475RPiuoBCCA5mMC37csJfxHtk9AzivU693FU6KZV7mLwp1B1U6vb",
  "key9": "4mofEJPYp4YF9L1SL8oY6bApoWLpNQ3HcUB7Gexy6PD7hveiDcyMUDXku7Tv3v6Jz2vP8NFn93Skp1tJD5TiMymZ",
  "key10": "3Ke8tKDgy3Z2YV5Hha1ckqcuMaW2cipuPn5c9qHCnhutF2htx5z87o2MGBHKxx9FgW68u4BgzesyyjYU5wwDJD1E",
  "key11": "4ivFH9RLdvuNd5nBW2QRQL8anybjh8HYU2web1JiFNFbZKu6pi4DkpVFEas9pWbiSeszVoQXduxmkqmhjcRKkcBH",
  "key12": "456722LspqLihiZu8Yf8s73VTZx36vZyJMcLD1W5ZCkKhDrzDx9xdvKV6kNBz9x7xdvncv3xUJLhUgbvBuoAbnKk",
  "key13": "5QozPwkD1P7KrEtQ5F8opGBndCxrLVQJQuYsRZJpT4Efuycn4UfCchQCbemzGkvrsZVmBazMWqjb1cgSCwVngMRK",
  "key14": "tzaSMKxKMG1s3vDVDT6J2yxLW8UXb5aA8jXpPbYkGKysripPAFBff31T58LMfXjsfajrE8iBoDMTPcidwH5wzoy",
  "key15": "5i9LzwB61znfFUzrciipwHJrbbZcemjyWvMfuaMpk8HYJsUW3h9ono6cHGBn7wJ38EjvP2Bp3V3ercUDJqPvsqm8",
  "key16": "5N8ziHjq9hnZgr1mqv3w8v23EtbTxZufNPeG8ioSvNw91GRMbcr3B2wsYVmWufrJypyLTZLHPdnnEViJ9v1J7jnj",
  "key17": "5hGkcY3m1Ko2zy3jcjbZAdSDwSywHWnNt61FK9qrUYcM6H4jUBREbRqAA67ocMPNqcNpuKef64FfCKq7yUcrktGv",
  "key18": "3ZekusmzB53wQ2eDGdzG9yBttsyeNGL52gWv6RuMgFM4ox2JdFcByFySxQ7KPz8T23k4YRE59U78C9uCKRxxroUn",
  "key19": "3TpdnXnXhHfKAUyKhhVeikTFLfJC72CzcXA6qquVuUzEpk4RuHoT1cZsLrjPCqqaZugrXS8pGVDRv7HowzTwwqvY",
  "key20": "2JsL19Ztgxg9i94cKWB8RrQtQbYXu929drGKQs8HiyjVicwwiS6JbeDwrm8238sUWisGJhxLJ8HkcRvDqzDpukci",
  "key21": "3wQ6svDzEFySGxyi6Hn7vvDCEmDupETM3Ln2JAvaAJBWir1pWABRGAZBz7GoRYeR9fJ9w4Ctczbh7n5egpn7cUQj",
  "key22": "5Lx5Ej3igX98R9M2Q9jfFjwurMcCR4WeegggZAyGWnzfXX7YFc8xXAgqgLTeFNNGBuc9GDHUjfqw9WrsDRpPvDTt",
  "key23": "PpPKzNCNGCqep7mHPDLc7bYgXLaawDeBCew8mP66P5Eb5noihHGJ6AHivoriQPjwVYs6We5bsxPm7jwcgmsSFhd",
  "key24": "2d7pQ2YHS679XiJRDgLDP9yMfGQnAEWjGQXCDhEYj1tGbG6cjYHaNYX9gvZCkpks6E146tz7heNk4ymEJJWo9mi",
  "key25": "498kpuH8hGxB8W4rxbceGZFenitjsBreygGkL4BbuL6zrNzdpRds39yE9gidACUzikXSpEpT5FMVb5FHWC71mEZd",
  "key26": "5Ysnd3Deh8HJQET1fTb4tQ9UTCqBs4Yxni91kPgCDXq6u1dNun9VrjZTd2aMq76F6biJUXRaf1wS6BtJBex3pNdR",
  "key27": "yRZNEGjS7FJWncR2K8m2afk8gYCBCtnpykdTKVeTqaLMYrYL4jaVfdfbTChGXY1FyDNbbpYNVNhQt5CKh8YMJnM",
  "key28": "3KehmMtdseUoeWn9e8tjMWgpdLT2UdGYr9BuY8vkT5NFpXsEj3nsXzavPgHn8d1XHqJVTi21rbpWBAsRpCxP22pH",
  "key29": "22DGrUE4t7aPiuLaSCZbNkqTmKizaULH75WhCgXyofy5VbpB6nvdyQXSLAgtoQGzJAAT8oWHpoNrLfvmccvV5jFN",
  "key30": "5EkdPpJWpBgNhd61v8x3YK8ro3QAvvS1eVr4htwd52oH89gUX6dnV8tohjymTV9hZrqv9NScKHNERZF96FcEHTMV",
  "key31": "2fsrZB6yBgjkw2cmaGDjEFQ2gPdv3XzcEqf5NKqwpU54vJSJU3JnBfykAB9KPsPGwJqBE41JAazfzUDkRyLVQeAa",
  "key32": "ubx38huEDFdQ7k6cVPwbseZA6hFT1DV1rqcjXeVvYoTYxcwxE3RdU76ZsUxPCkQ6ECUmdBDUjRdxYt6YzvzesYt",
  "key33": "VrwwQjAMcVrFE22khwJBhzXVXkQt1FJTbSKntXjJdjdnYoNEHMJMLBHWvEuMYJcPRyhsfpsszU6Erdjc2oHjKMD",
  "key34": "fgjboRHx2Ka8qjuKndnvcGiYanxunmiLnjP2FsFkEMFw9zUdN6jEMV1VFVFFApTVESXibnwQEB8kvrpn8rxA7Sr",
  "key35": "37Fui5GcbarvA8skaRuNwgLVjxif7ExdxjwTbX3ifSytCF6NQohQeBhX5eraxv5TkK6toueZvyj5UqyUVMmJYEcS",
  "key36": "4MTRGfPkLFMSjfQY3xo9kJB4af69RDKRpj6idjiErVgG5kiG8dYcXtjDDLix2K7AGJAFET7BgTvVHTd6jd5m75a2"
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
