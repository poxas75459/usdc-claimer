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
    "3dXUxaimqUeiYzZjW4zQPx88HySqC2nrBZ2yUpgbD2HQ7zAZcNigqDBd5tkazeQMPR5GyfrAh7FVHNUfGsorGbjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfJXNDBeM9UiWQfeKZ5emvcjvDCre6k5q6uzSP4D9EPz3kfX6vzD4XfqbaPb9cKAwBKLTRX6KgDjTYKQfQnAitQ",
  "key1": "HVc8iJKCZE3e22HovXxF1oxDM86eJgBGp3ouh5jCbv5XaoyDoGBezEKMEsMhyHwB17jMh5raX4KEkpXTeSPnJN4",
  "key2": "2JXtzdLy6CuiFSX4CkgdM7zNtJmUkXDgWsmwGvHifAkmfuyYs9WhLQgkmCKkeNowUZypQ27HHrwGqyARj6H4xwQx",
  "key3": "4uZs3fFoB8k2PonQHwxwj9ktMXaEyq2zbKBzaApZeMRvzDUvfN8cRrxjo1iVgtbbRMTkEJWokxzzRJZGqH1bhp2d",
  "key4": "Gyt3LfUvbgN3G7iSyzj7gv7rE3FD2chdVKhhyEGTiAqREmgnUdFnm6eMk6YUYFNy26XsjwVFU1hnCYLisdkigsh",
  "key5": "5PZwHso7eML6VkAPGMigLLjdGWFG5Y84pc4Yqi6y6GdnCiShrXKZJiapoD7dWt4LYkiTja7GcdzzUMrVPHWSh7bV",
  "key6": "5zbBEf967j4P4iDyXhbw3KCwKnn2uy67TH4n9EG4FW1MFdiXcrNTYnvSoaNpqdxpvJzX53mSs6ZTYQyfriU5FWqf",
  "key7": "2HH7REVjuwzFwAJfoXfBcsACJzAKZhX6bWXYJHEFYbF7YteBNBKxrPjn63Ct3JkR5SjGMeYSey9qMkAVGTcKtPnF",
  "key8": "2EKnXUradRy4xstHrfQYDrCDsWrumNCkbEVhy4PZZWrvGiKXR2V3hxYXvs1h6CgkxdKQ1QmnsiXn9UU3eDYczFae",
  "key9": "Dvez3tHNiPMf39BMfyQJK9X4urjwHPxWK1Zbov9scPujdiy6j3TVLM3Eqq6vbk46G5G3x2Uh45tyrCmEmLU8nFB",
  "key10": "ryP1aLN7WWSHez1RQCEnmXKz7LUfBLBrLchbFA2W4XAGFZiFSdYF3fTNck3bxJ8bWAVSYJPZCDKWnvy21uqy5JD",
  "key11": "4UTvpEduUa729xR1q3B8npsNRSvJKNCPJ5vN7mefhm89CpHPyADA4oQNZv7VDk2vFVKhGvZxnWZMRBDczcg3yvhG",
  "key12": "2uQRr8Y3Jn2EtpK85axPKxmmiFRFVYWsg72pem3ibsWRxqxve2wuYo9yGMCBy6PFR6XccPd6Eft6B1b8GARUkadM",
  "key13": "4NZTHESRQZ7SjxipNjBYB1C9rSCUer2QJq6ffj9G1W2t9RXvDMmx9Doad4tdaPQDonRfJcP1UBLV24EB7efw8ocV",
  "key14": "5n5hQH2oUdAnUSfEMGPoz3YDZC9A9vbrf28xUDSytU1xBjTWJwoDjUSdddNUhLus8JpXFMqwstXtEd4iXBy2S6Nb",
  "key15": "5UtJLVHmgsXbnCziYuDFX98Wkg6D8qqeEAU9H6UTKkvsrYhTngqGsSpKNVauTF7YL6hjpfk7cZhEMRkC793dLmuY",
  "key16": "2ykxzU9w7hUm7HmtbQPSE9eesbr8dQ9P9GLb5o7VWNX2gFcfixaVp7erKyZ84skgxDxk4hxafxX563H8itMvqvBg",
  "key17": "3smwCxGoTo6bK7XkDqnQoA9veXyZw3vfCbW23waVjyyoXBbzuHNUfFjCRpW7TduohkC7V8pMGeyqmezDG3rRS5Kr",
  "key18": "4UXrTguCKvKjwek6xYpAwLScHNNKzZaTFdnFQ9UWBL7q5f59o1kPq1J6W6jDvxfTijVpcfKYP3aM5adQGXr8rN9L",
  "key19": "8upJsbARg5tFnhRSJobxDEdrXffyoGqC7kLpmk9LgWVUdRQqHgJsEBhdDNB85Z5oeDobv5txzRUPfzcSUYzjhKb",
  "key20": "3F232yog2gQ8XcTqVUtoYeg9mHgKZZc1bNyiRCThrcXssSKV8G1SB6pCoCXX6iFVDmCfkrcLGr3H9L8C3RmBixCT",
  "key21": "3k9NsCTFUJNaNVR9Xip3jC3DFMCnTckgu6FSC598BtuJaMA7wW1mj8vHUSpgA3pabBsU7i7Y6NqmFfqgrFJ6dcU1",
  "key22": "3BvMq6JvEoHZr5TAHi5p3CYkG5p6rG51rhPnDgK6V69oVCZ8qFULJiczfYGi39gMCj7nVxgyp4SN9KuGTwcng5Zg",
  "key23": "5owhW4JVADDEkmZvHCE8DMSQUxA9mRpHh7Anqrd8rVKDpcyTrBTtDpuTMrpzhxYR1mPdtCHzNSYGMx5dzjXPQM8g",
  "key24": "4np4v1mvXBgVLchRiqaCoPT3oSXaMsxAhbF8RbzU4MzPHpQDbeEjM2uHcSrjKJGQAaQJ38piUkq1zgwu9GiVooSe",
  "key25": "317Aq8kDXhciZLzL1Ld1PqqxgkBLc8cFp2tdWuYM3uozP6cdHnf7DB4G6hLsAS7ZXpzSjVwB1jBTCXEsQJgTNXni",
  "key26": "hSEkmstcBmR3uYcvQGLxCbYPEgcvCThTgSMpfhbAERtWJVqSzcTYyLfgwCx8hPL24eW7UyCGXCyp95FDtxHN7vx",
  "key27": "2YBC7537ErKUHWVKWFrJZEQvoXN7igP5b58n7iFhtP2pH78icowvEW3BGYwgF3yTc4nvU6Zi92HxQuqyE7pq6V3u",
  "key28": "4FgSZAGU15g1Ck6DKg5oG1qtNtchktTqAQMUXQB3Zftn19wxWd4yNVcfn5mPq9phgtd6gHQkgzyPMdpqhTCc1p4W",
  "key29": "5NQeeeNm2JtTpFzTKWRe856WjrXu173BUYg9XUwug5f8N46YmYtXCShiGigoeigZZbbS8URCztcDY6ParuseFccc",
  "key30": "24BH1QvYECPKxE6foh4pe3AU9G2qNjQ1dDVzuT2rH693YsHEUSSB61s6Zmt5rYeumEbXcW48NNaGTrnL9gWFsYq7",
  "key31": "HU79Q3csWbaJQxWdEWFKeQbLZvpRosxF37jP24SKmRoRVuTSAcQSuiGN9aSaPjZfuta4Sruv6hP7fBo7NUrxmNj",
  "key32": "4rYP86UBghwhdkSorDxu1izoV6m5knq6DfByHq4CKSHj2TJzcHznJye1TNftCzNTLdMbNMDTVNWKQQvXdXVYKmTr",
  "key33": "36tfQsTr6H2rMXhQG5Dd28BbiY9rt671XHCzWCyhKmXpcWFn3TUa5ybRHj4GGKcEr85EATBS2fUtX2wLxAXPDb8e",
  "key34": "2eW5b8rZ6qryweCzvY5vQ12GjbGJZf1J37LMKxdvqgREwt99HdRLvLTcuixA2xk5cMt2hyTbVvwW93g1mKcqZBAN",
  "key35": "M81yaD7t1z6i9SmhQeeT1AA3XPG6z8ABJD9XMYSR29otV2v2S3ESkLwhxukjbJBZqgLZqgSyFUGizGmogfptvhD",
  "key36": "2CjGH9YGS3M4koocNMJDEfzqntMLEeshF9iQ4iaK5MizSZBuZmfTMX2vrBB5BHnbxcA1UEuFJtScv8LhXS1sgn7h",
  "key37": "2Aq2iLyMGFkuqteFwXfimJJGx7Wey7E4iqVRDGCFd2N7YrJVLHLdNy1JbhNdKHYSTHaSdstccBnwXaBM1VUuQSVG",
  "key38": "645T3gBZNF65jMvmLVKBvH5uPXAy296qnMJXLvWJJ3U22bBkXMPVfLsYuQksCZPz2AsekyWwigKR4rnZ3r5q9vWt",
  "key39": "5qnXPTe27PLNswVeRmVLs1YjrS5fKhSwztsFNrLRhSkd9F7Zvs2sYeTBvCps6c27UeKbDu2JegtHxoRMEezX8JzE",
  "key40": "5PTpBZTJMeYzktwPv5ybcpQvQfCGLJcaQpDL9CPcau8nsyHNPcn84GieFW13FuCtogLqYXN4PQMhw3suCkvrZgQd",
  "key41": "4pk9QLKMvZfGwZCNCtnVqiCDUtQStxDDDJvXGH11Kzrpf3oRXXrxEpwgHhEj8J8qCgDskTGmfRZapkjLoEP433Ve",
  "key42": "4G6PHvmggW9sxBYZqHAzD71CwxMo8RteCTh6abo6xkqZG4cnvJvUJFsmGEWiefCEY2bAG4vzMF8hqcXK3zpKvXWM",
  "key43": "3YECtkFbp7ATqgMKcphHM55kne3fpWj6FeHv63oAXnQHCQvPbAfGXbTHrP9nZ5Sc5HbUP13qsoyjo8uZXKrBCD8k",
  "key44": "4NPJNCdvw4sNagjAWkJ1TTUV4ytk8juMLHPMSNiAGwzA8NuH91JSDGy3ajs3ZfERhaCegwEG741TzQYJ7D4frjWP",
  "key45": "4uK4RsJMrtbe1zvuH5Hj22uFREVJB22DRXBLWZmFshk6CQnXfAZxUkYAZD1t8M2K9ohApiaKKsJ9jKPjah68Efpu"
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
