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
    "5q1JDsMRqKKUQq47X59pbiJzo39kifae9aWxrNekCSt9DoNvKAHGSBMer47WqZKTfZscQag6vg2qdLuPnAnnZ8Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzAZu8aogJv9YSD9X92YZmiyWQzSd78xCcfiAaXutXWRa2D7oPfUAPrJ9V4xTApRxa4i6FX3CXa41XwTjaYNyx4",
  "key1": "3JEqBEZGPaTht2ewXT1bX52nZsDwxPbptXa7prbTMbyUvidX2A2WhtEJp7mKKvgbEhGFe4sFZS8Y8yUAdrkqDBqa",
  "key2": "5Wv89M8fxPMn8DfvDL9Uh2dZVHbjD3VrT3J2BLKkVCuNnAdFmWRKx1magbKQNFZj44WyDkXpdmkQiDm3rKhdw91E",
  "key3": "41Sbom84hRykw1XL4n5RxbypKhoBpVtNDX8SiZ5EEuN6BD16K3UzqHMYCeq7BGeM8ahQthaGmusz8FFdQdjoNR8F",
  "key4": "5W3anK7icXraLqoqiJd3VTtJzuNBbUXDbmJAJXb1CJgjcn7fSu4EVNt8tiqzkYB4wp57kDETmjjoMRAwR2hK7DEt",
  "key5": "39HmSUkHqznFiZBdnyZAGWBoCqfdFWgyq8s3bsNaXFbse28o84U7Q18UMNFAmY3v2utn2ppV2DizDD11B9Ve8EwA",
  "key6": "3VPoK9fim1ZLYreexY91tCPetayRjxmrAFvUR5uDH1o6V5jsvQ9Fd9HJL6CyyZb8BJUYe5rGGazpuUoXNjziQU21",
  "key7": "ZpdetQkKv3n1298hQfoHRiHJ8QPXPc8JKuRg8gAaXKHSST2HKPEJ2T6ghfjVNeRq5Ahd5AfePmqH9dxazAWw82E",
  "key8": "3uYxFqx17qDg1U9xaTQfAJKKg9t2uZcQS4dkT3SFumS1oEQuebtT2yrA3yGuLMvLpmrHdkCufa1Ex8S7LouF2drR",
  "key9": "2FVasMfrBUt2msoJv4pDkueXV8T9Bj3gyYPYPpJpLHwqwWVwAQYFWeBb9KbrRVW9SNXMVZDeFC2pKU1Vtk4uCuZf",
  "key10": "356aFARW8urXrWSoZqZfQJHypeV6GWdQXBgddBw1DdZzLBoRtciM1eXbGE365YJUJHC6WCQ6bEurVfULaFJiDzJE",
  "key11": "2yGGpJWsjZ3swoHi1n9PcCaCrDMFRGgTb84fbm26Y3d3Pgp9YJfsHYuK93X6oNNRdY5z7pXwGLDbyzMLPNCM2UyA",
  "key12": "z7rn8cuQtB6P6w8edrDznmp2PUHmZwhEMN5Ksq6wFhYkorVsACoHA4jZ8mxNsPdDvEufURDCWLd4QdBNgrx1sjY",
  "key13": "3NPNChHgYgk4Q9GwbKd4jZhcZMnV6dqhMhQnUbtTXM5UxKS542NHkVw263rtfUQ2AzUkr31dpSgNnKpAzV2P7GiQ",
  "key14": "3oeX5VLkugdvt2i7yEFG1NAmsh1HfXraMxSZCWVHNAPNajPrJvntg75j5tTKXCo5N3JWEYyo75zhfjQojFLTqJn8",
  "key15": "3rxJM1U3FakohNC3LMcwc7KUsir6psohW7whNSwzxmrE5a3NjcB3LA1S8VuLUT9w9Uu2zeRW9wwmeimUYMxUofiP",
  "key16": "2qnRYFY8tfjbNxZDYAu2g9YAcDC5q8nf2X5fdnsX4C9b5P6HzvYtBT4vGwFdkBBHUiqt5utbcomPC2FZM8DfMYXz",
  "key17": "2rcAgj3KbrTZWqaePgrKMnKYTDsGxESPVVjtEyJ7iJ6otdK4Lpev2djY1qRLNyPk8dTeJdC5qDGnkrqDUNXWXRzN",
  "key18": "3G82aC6qJ8BUqnDQRuuxDMZvooKr1haQihzhWwD3NqMQpVCP3os7XjxCj26Yzo4zNcxGUxD2TteY1NQnK8JW9ERw",
  "key19": "ZsHxVTwYHEykNmpGiFrwxnhMu4PGtr5MtyoWgmxi1SGV7V2rDoogcgDiV6CQhFTzXK2yCefv9SVSzfmSe8w4ryH",
  "key20": "5xVtcfJPTH7vBcqHxVpuuWaE9vRMUb5uFwqBcMyiX4h9xx4xKQsmyhGL4FCsMjuJLhk1Xf4MjMaGq7xifpLkZWSt",
  "key21": "eCDc2G5whdd2oZPLJqF3fvcuXPL1c22uFxLWtruiTgy1hiHUgG9txw8CAwKUJBMwdXGfo2AL9dmiQxY581E9YFF",
  "key22": "4WieyKKC4fxZPLvDrCDwikNNRKe31Uojcmqy6rzzQ4xrLJowDoXgoAfF2tAJafJMBTt9xX1AfVFQNp1TydenMzJV",
  "key23": "3UfDzbqdEic9MzLihshT4PpmT5vApjv8gmVfNaZdxXuu6Q4qt7M5NtP1J4TPznXXZ1BxJQJhybcpaEwtA84SpUht",
  "key24": "3ervGahXvNjWPEXYT1Cuy24mtZ8Z9BgWzSkCZPuw8RsvWfYh6GfvDw8BeF7Cd5ScucwjM3WkvkQfp2HjbTimSNRm",
  "key25": "2wG6MM5KRUxo6w31egfWyM348GwCk3PLfpT4xMozVRxrzqTbXZr5QjHMixU5VUrLdJyJhgjFXLN6wdRuSQrJuaqZ",
  "key26": "2gZmtrzSsNpzDSs5WgKdAMaXahj35qvsC1ru9YHHgP76YsjgZPzcMUwfxWXFLsTaqw2r8LEAcbJDzbAFZNY6XshB",
  "key27": "nqL7o3Lh3wvHmRmKg9vvQVn3KuX25JvvRRMV6kJCLiu22A914Vh2PfGFsUHZDnYcQM8FyJSbM4JL11fC7gbZGYr",
  "key28": "4Q9MU1PNN5LiVtX9hqCejgQV75uhkYwRrm9dDtLMLa2B1VMbiGUxTUhmAZRHEnaBjZk5DSuF4pKc8Qdkh2MUyEk3",
  "key29": "6292VthySFsjAfVv3mKuhogPPFwgH3ntproYV68fseB73SBedKaUyFcqKoBasVKta4a8MUz3dJmYrFg2upt8sTA",
  "key30": "61PC1usp5JXX1gFGj6gt5zZhbGbKj4SAHuH5mDg4Y2qeKCQuKiKsLassEBUAP6cKy5SPL2Y2NjWMJ8MbqQ284Psr",
  "key31": "2SWyg8A1FLndrrMc365eLvQzjsrDHxYc1zsRfJ22KYfvFiNJQpy2XRQVwevLaxmFjTbrGQQ73C81npYdcao7LM2b",
  "key32": "2Fuv2R3yqE5pnHiQd48JXZFZC8bzCXZRb41ssVACu3E3eDSSjAB4shnUFdzSfdMxTXDkww4es42tijrp31S1dNxY",
  "key33": "38srQz4RVRPK9NqDazuRE6Tvd13ondhAEPbksw9JNuUR7BG6Q7B9EfbMNxYyZrCDk7XQS11bLNbK4jLJXViwvo45",
  "key34": "5FNLKB4zmgd4TUjwjy5Xn6xPXwgqwocka1MZTrKu1FQqFp9q8wCtRndpdSowUDzxw7D3wELR76F1jAsWwEqEbePK",
  "key35": "3jCKDDCZTBXWryzgFdEzvwBAqv6sihpeoKGW5tebLBQeZ9f129xXghpWdiGbGWVgXqpChF2rypxAxB19tr4rintL",
  "key36": "2QpxAKtShmjtyMjPMz6DCNRUSgnnH2kkLSFgLVedKszsWysB3ajLj76xBRDiJ4gE9BqMjSN7FjnpjYdqi3q8AUot",
  "key37": "5uZ9PEvU7aJCBwtoRDW79LKtz6AZRfJz34EgAvKQhg1iMYXxaeeTP1i88ftZ8fv4RG8uCMKeiYSFs1RKqwcdLiG8",
  "key38": "5KnzF9dxeEjfx5MdJTaSLdYQDXs4q73ncvyohzBWh8kigu6ucXXzKXhM58QKecbeGF79nfowzUUeisXJTAWQ2g1y",
  "key39": "2P7eFjGuX1FDeBbKpvRQg4Z3umcAtd2uczvcuREQnM3US1jKJP2mUJG1zrrfuuUkFEnQwNPrmYPTtdSBci7aECAv",
  "key40": "2mSrvEst3T8qW3UMXUDH2JyDojFhRExvAHUiB9UL8EujYzbHCgc8UZpnqUUNhgxB5pTcRkR7AsCjjB3JDRFnJptX",
  "key41": "2PBTcL7kuFTWW16675uYRvJ3R9LzhQNv56mTruPkvJuYUavC2PWuxvPsstSxNqy3wLgdE3JmFpZJ8uN5S5eyYwup",
  "key42": "2KCuBxRVweW4wH2s64qBvgZ8KJneD3hpkqo3WXmuSSPtkFKGNLF8xcz2U3vjExUKo7aGcNguN2xZyVYQtGtuC4Kf",
  "key43": "4GxkgPNJCjsWwf5mSdivy3knrjUQpyhCQ5BTfNRugnUvw33NzAJkU9X6kBzn5rnYjDcZpRHJNkRq4s9Pwz148383",
  "key44": "kxNvtk3oLtpoxDjPbuVU1BLCpMEE5mmPYKfWcjGFP6ecwd2sdr6SvsVsaGceZjWWzGPgNM5HAcBA6NPB1YKB9FY",
  "key45": "4v6rwZT5V2iwGupPT9ze7A7wFDDSViiNdQAbkFRpCCqKreahDDB9EAVfTz5kJigqXvukvCSxobGZuBvqyBhvfB2b"
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
