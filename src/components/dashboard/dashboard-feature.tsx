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
    "6H5iboqqRnPFeBUyuVEWXEEdRkfDKsBAGirvL6Uj4XZbiX6VnLWvZ5tn4jmBKnoDNQJnSA8uYpHoLixV4vbsPjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgJyx8ZmbxbXkzxzD5xYkgdHCMLuue8VwQvVrviWQHN9cmjStDvB8yzvK4UXC3qt1SY6jiy4hGhUGqASwH2R1FR",
  "key1": "vW4MjuVDretLwT8SvSdH6J7y22qwzSbeK8VzF4UwizcGPAAu8HgPhX65P4wXfty2QhiBJF83TxvPig93RTKi2vT",
  "key2": "3Fokq2M9QcAmkR6L44SA8FQu3pfBDZdwtRzEpwTsR3xHPJ6VcTQ8414jntvSHRgkWvS8hnWuKGoobo7Jw2ATd9vB",
  "key3": "55jUA2uZ2t22fPjs6bfBWPhrxTTEwgDaYz7Zv4KK7bt3QuCTAobUHW2i9FkZHGkVvGdQY8VpAmWWvzmT9V8SXdvi",
  "key4": "4mstMJnL1a6RVFRZQuSezUA4JYhkcaqudBxqf6apKP8soRtppYmzccioJrFMfJiji9YJEfoudBDH5Trbv9k8Vt75",
  "key5": "3fQ6uxSuFyreGGvaS44LTbf5M9Aeg5D8RY5YwY4Cfj41XYDYWKe6NDGJtYXQioQYd5WnPD7F5pwfXApRuSL5CU84",
  "key6": "3w7vK2jukJqodaQNfHLssfd8ni3E4ZD9wNo3D1PcG7rtDNfEoqSwvz7wRuvAos52yR2GU7gZY7eJeBFk5749Bwa",
  "key7": "57NSgBCTVPFukARRb15jALJ83mZUghEnuuiXUtnvuYybLojtghdXEMFCL5H2LVmcfrFM81RDheL9E7GE1VdmfLkz",
  "key8": "3pJ1e1HhhFRT32NSMMhveA6GX98iLGz88Xh3vwjz5Bs9d2UzB39RmbYTTGpmJQ2TShKcwmnsyTJ2PZFaey7e1hGb",
  "key9": "4z5mBhYJgVYA9WGt85V9jEMgbZnFMRYLq2D9NByGx33TiT9HCwntEp2u9fSdG9hSnCqqCzBz2DbiEKvjHmYsRy16",
  "key10": "3TQJDsWtS5DqRhzsUAPdukB7FhwGjeisbAS92MDQ9eU5KGiBheySbkowgCroGDuYmgWoRbgg8Vc2oiUWPN6rNfY4",
  "key11": "42orH4N28HfMdg6U1VLE4twp6FHfonBuTWwsD4vKYu2nn4TdYa2hCLkuYYsm8W4WtWLp7F9TAZtidWTiz2Mv5oRF",
  "key12": "5EBAEJWRYXZFskP4SkvBveysS9XV1ohEoWgBnZTqNCoxSEHTngyfgoavq2CBzyx7iGea2XFB6Hkrt6Vx4SWi6wBV",
  "key13": "3DuVF3JDq88kLjnwy1D3Ggm56vBhDRBSy9rdTrKjmEzsHprsaQtKjGwV8aKV8dmeNfoGFtnuBTetThWBZoDDTAZu",
  "key14": "2Ydn6zA2ELtMomQgAZiLpXvtpN8JhAaatnBSYmUQfW3JDheC4VogDyPWVigZduRhVq8qm4TXBkogYxdeGy9PMXes",
  "key15": "5ZYPbEBLzpUcxCNd5Jhom5JR6epspTwT73A1EfpH8ZendVvbWFXMaKuwJpanH3NhZPBGBFmkBBke4tdm2XMemyTG",
  "key16": "wHfatnRWs2RTz3vyUXzEmiTxk5ULW6sysc8zz4PKy5QNNhTqA4T9BP8yjW4bWtCJDgtXAbCHaPwzGwdKZhA3Csy",
  "key17": "2eP4MTxRYf6iSSFTFJvDoMkKYGxwraVcXujdy6HWXW3MkWRV5yHYaN2vQMhiUtcDNn9CpdmVBZocd2mMnRaSDzgK",
  "key18": "5nPtaWTP5ua9N6dCupvKy49Bhsy1WpSRsB41oXG8HM1qmNDDcvke1QFQZqdck8PwNwV4WZj9C6ntd4zZyt3bRygw",
  "key19": "4Y5Vyn6Pvhc9Gkz6ti9Km9K8cSU7YZiwADWcNf2DTFzcGXkctFrxzLLowpUHbzQ7ZyJ1uHun6YaAPNfgoopfVQof",
  "key20": "2jXcfkawVE8w4WgAyh66RjhihSPX8AhLKPtJSLLfQyRrKgpbeBNNnD1RV1F6mHd6DnuJujCpmCozmShN6oLAkVmw",
  "key21": "hQiM6uVtQLyGHRXzfKsFioRaqCtVmoygbjkRJK6Y7t2KnrwVUS6QVzgYjZGbknN8RV3G27oJFhyLUJhHiKKw797",
  "key22": "5cWpSaBo4oqdPhzeoy7VYPhUSpAJd1H7JgfPRSyAVqqx6trfUC8LsofFQJ29j4YTkKHTE3VrabDJk3RJ5RZEqVBc",
  "key23": "3qXQUNQsdMMUWBdtFvexXzBiJwmgiXraksKvTdLSx8fucVWKgm4Nz9wdrL4tdo8VwrR9uMj2huChZGm9PozvzfMV",
  "key24": "5gKpg9xQcM8UEvKNm3ux4D4ndyXqs28nB6PEGnfKEJUBRMiKyL4st8i6qdmjVYqEz3KUxBS7hiYAGHWj4MjZ88XH",
  "key25": "2aNPMUNvPQSmzK5c91W1E72Dp5VDTxxC8bCiqryaJiYqTuwj3KE2mUp4BzVUCnzRyuzQtmvTHSvAZjCoNqDLEWwG",
  "key26": "NPYBLxBSgFaXL14F4wAPgNA4od5FzDHQpbVn5Rvi45xFhxawVvu6onaAhXPR15eQfN6b7ZQJABoAUUtB2xk3Qdf",
  "key27": "37M2tZpZHzr7rngCdR19iEd8iBMdZtVRKcbVedJHDnshWYb11o7eCJTWgbJnEdc5YU1BzubgwuYhqKzThrc5FUNB",
  "key28": "4B4pmneaVHvJfwCnK7mrGYNCN8peXJj4wTknqZPdTZS6fvdtbiMmMLUko3HCxJV2ogGQxcJT7mBrrpFBFXpPcB9K",
  "key29": "48Nsrzf2vGLneutvHojvYBBsysLivAUXdfn1ZPW8FehHjucRj5BWyBtK2xfXvfCNqRXtjbGuuynR337NH6vUxGp1",
  "key30": "3A3qcaXeWYNpG1J8gDt6djAvqKe1T1Ksdybpr6nQuHBQTVjLSJa8ey4A64NozVQt2PXxL5yroNNhyqtb4kZ3Rxoe",
  "key31": "BvuV1P1XKqF9t2E6rWSx7bdgiVWfWM37umnHWeKCXT74aWF6phNGUicYthcSetkezFHATSXjQzxQouyxTaugsFF",
  "key32": "2zMNAX9e6RVG2rLTfztA8yTqQNHpvVHRKf1QM2q6yWJxPmn8fDFJGBvRtWxdyA8ysorrRaJX7Pv5dmBgsBvbYnxD",
  "key33": "EQztLYCrEFRydiLiAVutti6tuMaeRmR6PK6S6Y3HY1BA7JxnY4gfyD3YZX2MhfQCoKdE3a3eGFsnhZ1i5fJdpHK",
  "key34": "64LN3udEMfcSx2nCodxTYJc6ymecP1G9771GxN8Hrfg1LHHsatxwdBrcXMhYddjpscHEgA1c1WtAy7FgtNSFFR1i",
  "key35": "3XSG7SFciiTULVS4bJ25u7JzFHCxPCTXbHhz5skpKKNaaKt8HTwFWSJQrrEMrNUWwdkvvVj59dY9W55dg3wdP7YW",
  "key36": "vHRjLzbLQU6JNxPn4XR2CucKPERv6HyrTuYYaUA82uVbGXBNBAbgyUEba46PgkGr6RDfttKMJa3R1Y92Fh98RhN"
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
