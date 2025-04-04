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
    "CbtD9juWEdSowNFTszwcKNnXQBBqoPubLKJt9VJDCdETu3v4WmAftU5nyAS2FHXbrRUK6u1SeASjnVbkrmxJDmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFuJDWdK36TznkHosxApUE3q8N21dBDJsGY5VvG6D8n61fbepi7wutgoHunh7mSUUugZr9gPhkytECkoni54Y34",
  "key1": "348Pt2BSuuFnrNSM7ivC1HihDdGjjjTSBDBRqrFZkdcAR1J8ArdasLbwvfcMdXGPEvdaEBcgiYrfW1VvbWVdsNbH",
  "key2": "62QeBF9Zhjo6RupYUWnoJdMwQWuwUM2rbWVUNMbnFKSemUrcyAMsswjXhoDhf3izMdtrhBbg4QszVpapZS9dEoqS",
  "key3": "3wYzQ1ipVyqA6Z8f3P84Hd71CvoGRTxYApcyqYLp2o8zm96RxUaq7mzRUwPwn9vrM1yyitJuFmq85Dppsd7vdzoD",
  "key4": "3DgF8cxGHEMnMUr5EkKqhcSvF6eqaMJvCpsBamoHL21nKdf6BkaJxDb71ULbKvkh2x6f9wxW2uYoZ5oNHaE2bGaD",
  "key5": "okAcLPJ6hYm5zWyhmZFGicYD91hUo7LgsTfm7DxMcHnjN5CFWwqiDq7qZ1gvVFjBE7kBWPrQAUEwCjJU5hykCwF",
  "key6": "4CG8jZ8NetYRVH3ifes4pWr7pgD5b3r6HJsFirDFt4hSad4criXyrwaac493NRA1DuCf2UTSsiHDm47vRErwL9hD",
  "key7": "4nhyTQpiG1Ygeem9xbVnFKcQ6rU8MB3ydmdZjZopdoVKCK67nQ86B7wXC2GpAaaXWY9W8FsUkZJKXtBLYqZ36jBP",
  "key8": "hf2cb9BC4iFKaSQWDQfaxEz4RgeB2UKWEGPeHTic3c2PfDyMLVC3eAw3BRvdtXZ7M5nad3i857LrhT2LhN25ULt",
  "key9": "5xa4CAziJ2qeYS6Mn5akLvPgyBGvG2WoMUnmJhM3H6hgAWHrprvvgg4mu9vahvkG9gqHXByUHBsZTYDg8MvTk55m",
  "key10": "3iye7xvR2icgrJbcyFejNn4bJYD9XcUn4XfGnkeekhy2P3qyZbEnZiB5Kzwqe5YbSbfFAfsyM4LjuZbgQixad45U",
  "key11": "5djv9Y6USPh8kBJ4JASNpDXoTGxYu2S88HHcQJNtiy3eJD89Z4RPDkZSCq8g1eCMx3j8Fj9AnhWtqaV5Z9Gu9PSF",
  "key12": "4XfYZZLcv3zSUdDd5rJS1gUb4DR1gHh9xE6nGY9kAoHXbsgSdZYCdLS5LkCS23Z6QCkT4yzN5tdD6YCpGXov6Nhz",
  "key13": "5EnoLoqbhscuNPWgrRCW4YZo7DkC1D3eanqpYXUNs6AsCpQMitLLJvi7qw1Dck4buYTVyV3MaGeVDRCK75bfHBqQ",
  "key14": "26eQQz2WniuL18nfCeMX3XAdnfRR6uCj8QJjcgrs19mwVq6eZjDubuT18C17eZ9LzhY78AyLp6QwRS9ZSdPP3gHm",
  "key15": "3JqbtLVZ6FdEi9cxwhdr1t53oWwDCg2w6HbpDnU82pA7f5uMuN5PcDrwHZV3uHPDrz3ZpEGf56dsL6xj3gE654Py",
  "key16": "5yYpCasq7mBorSzCQgscxkvCJeaP61N8QHkoET6UkEkQ7gf9BCaggz2EGMcAeamoiCqwtHn77PC9p7DStige1MTr",
  "key17": "3gSGHc8rumuM3MVhaWAMbpmXeKV1wgWkKychnyDUbKxwYoQo97vE1Xe1jLtvDRYndxCp6LGxTwqSUdKTtn6EPgyG",
  "key18": "4kLxPqgTsisDEbDhCVGNDix3gydPerBjLi1H3unAVqUWCwNkvyEXVEwkfYaF1Kh5U9QK1qDbpQHDdU55znaZtHWV",
  "key19": "5kYYmp5CWJ2dwkx3FMwCkiCbQPdo6DHBdnhwZdwCxEB5RRdz3KiWKEgAKARTttU2cHG3y4zA7SZe1G7xmZL2AhKe",
  "key20": "5en8QQYSVfSKKi831jhZbMWC7oDNP1wHsUH51pcfYAPB2ECVuVEKL2N1AbCFjD6SWy73ewGLNJFSb9sKRsqCC5aG",
  "key21": "3nEXuiNVEBbxZ5xEFuNDNT5pbus7AqXDEi4KhsPGrzvzsDJ1C98q6qMZaSrcU4sKaM3oWcn8PppzX27fP4zdy8NU",
  "key22": "2y8RnuvkSKT4AGq9XsFHfEaAJX1VyczB8Kp1usyECQMpnQd7Gyndb7gsmXPx8F9PLNrwGGZQhJsW6bf8Ef5rUSnb",
  "key23": "43NtnaxXDGJ5MRxBXVL44uPgTFiXzza919XxR3wp392iQthH4RxtwuYwrr3hBEKojYMQxEet2KdhVVnRdsdM79wc",
  "key24": "5mjiuRh87fgLgR4Kc56ND9mF2c4P5A8x2gpG78tHvhdR8UXKJv5czf2VwHosNS67uWeM5GHbUXYPE3FZGsJVoEps",
  "key25": "3nGiRew3yuTZhGMRMxb9GD6tLvA1d3uJj5rzHZpMw2mn1yVkRxRvNuxXCZgHzKHDkJTT4Uen1Cd3w556KXtJqcCx",
  "key26": "ZpZVN4gyCJGmaHWMFngEWucByDNTJUGPiBK3QhxzrcfkYmEEBQJUMAzyaSRyEnrBVysYdgDvJv8zSJ3ikjjrhcZ",
  "key27": "3jmyuwzbhbKX63fTrgudF3aoPYyVEufGK9UUTnUQmx4i9K6o3b4eV33ZnWUj4szGYhRs4ednEnpc2CDhZBrNKye8",
  "key28": "23U5M83JZbRSEkydrSQv9GDcNENxPNy37Wp7RTCZq7ZKqboVtvRzcjJjeHE1DvZMFN43zmgTXgAmmZzjvCJnurFL",
  "key29": "oVaEJ1gDa5JjkPohUAqwVuVdv4CFxcginoFoiGhKCXxBRXuqdukbjDgZerPiVyZsPMRoSVv2ZYtJ19PUrL6EY8o",
  "key30": "bUinctj822zE8y8nN7fbMd82WxW9yYq3ssNAo65r8z7iXCUsWoLHqforyNrc1g95nXbXeCRtEiVofquLMcyzBM2",
  "key31": "5VCbX5SSqKNKijsm6KN8CiV4PaFHTadLL9ihVCm1Cr5TLYkh1VzYTEeaj6j198mbHzXirRs6HcziAvkjMSHZhpYt",
  "key32": "Zrfgz8nHR7tCFde8m9rCBmKSsMekLFCJ6jTycCmmYxxx97cNTkSm4nAyryk5AspwkU4VvBigEiaFVzzQqGhD1gq",
  "key33": "2iL5ausVQZSsLWA1EzzjTfNa6QtrNKHLLw5FFdPAD8saRMRxADDGTrCPrAaUJzFx9JqJrRnrFhP1jAWTFBGz8t58",
  "key34": "5JGuAmPjoV3JRvBtBzequwaVGVdu3CusqrWjVqYLXWfc675LFJjCv955tnC1GRVVPXC73vfba8VHMiKTXEmZcquX",
  "key35": "2ujkvodVT2LAHCp33mp5jrmak2kcdhbSz3gcgtoVpDX5Xa2xDAirYKdHqnTkbzEGXtBySKzLTG3TjsCM97S5rAqP",
  "key36": "2uAciUbbyA4FwPYBFen3QVdTk5XLwW7n21XqF1GubyaG7V3CmhAZiDk2g7X2pPPXBG6PyYzn71v7Wfwn3idZw7AY",
  "key37": "5HnqTrZomRx5yqCN2HF8mXxju85ZHvCCpiny15LenLEMzPJcy77UBTDqUb7aLCqHgQNz3zt4uVKTqqFCkLv6p37p",
  "key38": "5dyahSP4EUaCn2uXsALsJ53gk3QBeFouFytaL3KCEvSRqSP4aHxALgEZGUxQEozJM9ojWLxHtoGT9TnA3ovNL68r",
  "key39": "yG8JNEHgqNwQZEDMJQrnYd4AwAT8eBQCsUvtHedzgWvZNPWA8GKXV4HpEXB3whpPoyJ2AdsQvYzCER6mxAevHJJ",
  "key40": "tU6r2d3G6zLgRS8eEfuG4Ybm5vTtvei1eXwCDWG9pqQJJQWk3uJY9wcRwFavAn11uXg137j3fsty9hdjs4CGQMQ",
  "key41": "TgXUbt4airUyAF6xvjzGmTVSeiZnUEZuekzKDAyqGc2Gu41L4CN8vFNUk1c9MHinXgskM4nUPywQw6s3n7SqTsp",
  "key42": "5d3QfRoXfKhMgbBFYMGztqSUgHPbtv2UzQE416UN4QSTe9JcsWxQ7ds2vmBaRkHyXfvDD59vMjh6ysD2tDN4P4kP",
  "key43": "2v9oGh4jHSnt4ya4pA2ZswjAy1aTN7ncPFWcXB2fhDw1j4bkr1MZd5F77Cybxg5cF2QqdSCxhb2vJBHPCRAG1kvR"
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
