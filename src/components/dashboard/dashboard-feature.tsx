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
    "2GugfH4cRdhZPwzbDAPcmiDrSdHYAzLC9hWLtfymsBf6AZYky6YZEj9NvFzHd38y7b4KRYM1LNYRBLNC9ziQufDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbEHQ9hsV3FtLFaeAmQasdcy89evXtb5qexJKmLBfwFC3b3W489i1ow8AYmYrumFLgM7ELr4FqKwfFnda6YMzfz",
  "key1": "44FCzaEiYWs5aEUhuY4814ocLyPpHdhoXaMdqXTS25od6akfN2Q1tZQoiBue49LrdtBAXtbTg2ULHMZm6puRND9i",
  "key2": "3xmG76t8vjvW6WVK5hwooUQY552uhXGHWowEWUxCdTLYZrpTyNH99WWjLCG5WEPHoYPo9rwtcQMA7Kcz78bpBGP8",
  "key3": "2kmVBTWBj4QXzRarndcaQYdHLvzMTnizCs2GgWmNhG4xu3ENVyDeL9ckDqMY4iAMjER1Jw8TxJYKVSria75CVNxN",
  "key4": "53MbeKdmR6KnRNG3rKEZmoJKmkYuDgkpmzPVzVMgCL8KHVyHPBvSVCD4QZ6Qpod8Nzrcfnn3ihTHy1pykNKoQjVd",
  "key5": "2cK8T7XfCXzeQgw5PTWhYxHUAv8vEotB8x1LmSd4iMUxyAMLH42jAj6qSgbxijjVWqhoEj6QhyGCHz5oZ5jCa9Yo",
  "key6": "4GY15XXFC9n963qzXSMRMhTX22oA1cdPKnWNBPpndxvmw6YdRERQVzAqcmjeg77ctQC6njo49dDE1tB7hzHvyWg8",
  "key7": "3ZzYyYwax1WyGFydjUmu39sarrznBbMmBXWrzrf5nBPwyoPdDXF6Ry5s64X43hGR38JKULvCvbnQb2vUfKWeMJhM",
  "key8": "33xHSXMTzvGSJBad9APUYbFvjFHxtG7jrFuBLrE85CZQdg5T453V8L3aCKMamS1WVovbbsSEE6BnGaWd52sxvgUx",
  "key9": "NpwoA5UQsoq1kSu1EqSqxr3VFuYw6dzrBC62KWVbBYUPUfT6vfbQmggqEztnQrSgD5riPRRe1qXNK9qAdqQTnLM",
  "key10": "52yAehbj7TvHDEMcnvfnuF8adiFkZXWC4x76gvJqjeY7vAvoHGvMHVUphzb98MVJaC7VHAw1qEQ2woUFs7kpq2bn",
  "key11": "38rCPebo7tPSG4nPyenffw3rZsoPMpYyxzqssGLojVpdcLpYAoLyA8vB52mrzeyTHL5XqHeLQMs8MrYqxmhYYr5Y",
  "key12": "2kgNZwHjqdDCk6HZBAytZxQixqvfHEWQUCE4nwDcVCEew6T6D6pY27uEQWiVyNrNEciMDXSmcE8yxXRKG9qD3eA8",
  "key13": "fTBGYx3vUpuqBRfPGdERb2RbTwMFroyJG8JLQi5eMkKanBhNfiFNNJZT2to45ghxt4jQsc1JwKwcXrrFp3wPNtC",
  "key14": "2QHfB4n6m4oZhjSVC9BuW6aPrQ6cJvX4bP1acVXCR5n84Gk6gmbH7YPDdEaPYviPDdcgBaWBxqjSqbh7yYUd22ff",
  "key15": "5V4rfpstuGNNHULz48y3BdxtZQgtU7ZbmmcuH85hYUBMMjgrgkFCizhaRf3LwP8md935tFnADgJE6m1NERP8Yphv",
  "key16": "4JC4NKHJR4WjMFTnWYHzWaYyHVxCp6UXDNSBvkQY55LggyDWmmwW6oNKr6u8xrytxHUs7uUzU1QQBW3ChARdGtSY",
  "key17": "x7Wpt5vN7FFFt575KmQkY4gL3GZFMzDjA5uUkKHTjHAgPSyDoN7zpj3Edokou2MfcXmPPdpYNrT53dNPVRriLLh",
  "key18": "5oG3QfL3PE7GecjsEvrFa8HCapVMkgj2DW2TNSi5kcP6ZYcowFwqiAaftcqZm5s6F3eUSPTEQFH4wG8apqb2JWfj",
  "key19": "24zxoPu7gvspejbeP5P3L4mVgCnFAxJQThNa1nZJABBCSkaGx2Yk8vu5wERPs5HCAQeYzh16x8AtdqMVJGpu3zLL",
  "key20": "1GKSjjmPquK4jZJn4grccSsFnZhJnP4eqknDcjqjhH1nbHBFoEPhK8YAvprnqLBkmRonfc116W61a1hnk3aeMDa",
  "key21": "5pAMf7bo21aoxoZL9DnY2HwawJaDa1G1CU883atx3nvs1tRuThtXRzg5Ed3FNELXv7MDsinzJ1XH9eDN518rxdvJ",
  "key22": "5XydXNGa3Fi2uTBa5jX6i5EamLdFsxokA6JjNtYPNMGgvn1GKn3aiVspBUVVrR6NWc3D13KMAE8d7g46de5UhYxK",
  "key23": "5VPWuL3wRaK2ku5a7ubjR4LVKnjHhWdYnbqYwqucqqLPHrzQ3Jvb9hVTwYVrJiXYSHtnRUUC3zWs3sSZiAPQVoVv",
  "key24": "2UeZVEQtWnHDRQjBmRoxPqTM3SxCyN6K6h5NjPgQ2XV5VyfttiPJ5ebhHrqUUFN4pasQEvmsmyyrrDwBNQXDdzqt",
  "key25": "31n3g6Ugoy6eL14bzRWdQ9shTsyv8uCMRu6voNcaQAP7ku7PXnS34XQcsYSEtAywP4T9MVPt4S87dHH4YX3LuWKn",
  "key26": "5UrnoSWhamH5Narw2biMAFEr3bNHb1Z8FQAYsck9J8qmCVgGbchfWnANDLt8Nqu1ZkHDsAzVa5VzQLQjqcTnNmEd",
  "key27": "uh1jPQUGPSJdYusVaFUJVhAmEdNQKEKtjKjFtQXUMzmmxbiFMLtqxjGFZNVp8qsBpLN6jxMfdon43fpSBbnP1pZ",
  "key28": "2jZfN7UqqRGPVwkPoFxHaWG1t48ni9VMpN9GdnVAmdVhDr6k3MsUtrsaWkCfjj8DnAKWtTPRpkcKFWFPzfqNqERC",
  "key29": "2CRRCsfuoxfRE1rY2Q1e7XR5h3B6MfgqLPGq9vH7vMyVE98XJQ1mPzt77PFB1tKP4oeHf5hLxSubn2JaeRKdKhhS",
  "key30": "1eH4yhULsG8DWXf9ZZ1UNveW5XZRBMNbmhCtEp2fifdeYZAMdGNCU74EwKed9ZbMAqdDwFHXa4zeY2Ht3Dc6FUL",
  "key31": "64eeXWyFkeX9TKRq4pS78RiqETTFBUf8Vp1bxzWPFvQXz9ExrBV5gvLnDeMqvcmD8NUJoWcEFDb3Qz4nUuvj49G9",
  "key32": "4aCeQsjeJUdFvtMp8jPZeFMErWhodpxGscf53fmgeZZsBgjkY5xadyqdWrGZSoujJeWAffWGgeZ1mK14QEYPKouh",
  "key33": "46V3WJG4ugGX3V7Q7zXtDTqSwbB6huxqphxBwyvXH7JdXzkZPpvPzBELjSDjuobepd3Wsvykwjes6z5J8RVGS7t3",
  "key34": "3DRSb4ewAj8Tn1sUBHFVEefCJMSHReMipwvaAvF8ABd4aLVpXBnEZotv4bDHVBfytPsby4ZZneGvACRdTfbWYDku",
  "key35": "3iTixdKgqqLQiVkViWPcStaiBCp7dSVLRXC9VDt52cVJ9jgqD3i4fbk5BSZnLcjKhugCPK339M1cQmqqMwLaEZ67",
  "key36": "4KN9ZPhNzemj7QaqiPsU9YW8P8Qa76z6BquoQ2uzovYhhEZXBCQAsboaDAC1s4cXf62oGAX4tmNZKF8JCreEHEp7",
  "key37": "dxkSf5mLQUrgM2FjqEQVPn9LCQ6AsBcyEvAstUFe2tTG6n5FYW9HX4fVSJrzMQfV3QYHu2yTQVE9jMd8aZGGMbg",
  "key38": "5MkTpY6ug8j2x5ZHMedRZGqxt1JbRiRBZLsGKzQyPCCio32zSpuKw4a4t97tdJi5TYfYq9oV5TtLJcQYuVi4pyvJ",
  "key39": "5QeoXH8Moaj3JQ1EsB6DVzxPuwmLRojpPaSHToy5rtJEAhVGJRsQfW5VCVTJJ2sXbo2XkaWxbLNHpzHGZy1BzZM1",
  "key40": "2vQLKbNUnAhgqK653d4Wx8nD5aJxo8zhUxtmEYJU7rria736reX61LRv94HAidxQ8Xj2dZBoRoVGGa7hdqSbV51S",
  "key41": "3YZBNTEs7LGtNxynisjoigiLq1SHtGsSn4n9Q5XAfmbKgfYmoxVXZJV345TzRETRCqTFjgyGWCWWiEpwmkWtJirZ"
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
