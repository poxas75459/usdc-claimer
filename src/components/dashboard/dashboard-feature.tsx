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
    "4LnMt4GwwLyYgLWV5QnAS2Ju3ibb122rcjMDgZS3uLX6Z3s3oAQYn9WF6fEHy7Z6EVuBCiKXNtisu4jfbGSNX7Mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51kMak5BKJCq2VKCZ1sfWUCfP14MwA31BDR76oy8uKuFLTVWvyG3NFhiFiRyxxGUfpRTcbJot8sno3ZUTPvb8Peh",
  "key1": "3mGaxAXJHMA1aiwo4gKYcqrDUxC1Fb7khfK3XLZ3CkCdB7cGhriKaScn78H6D4aHpeU18kNK6yBnvfKUEnYeuGoE",
  "key2": "35UhcL4pHHds1KmkTP4uwcw3iT9HxcxVRgJk7LrPESNDC63fu1MRmXmBZ358ipqMFdZ47gSvZrc1txnaLk7jWU5G",
  "key3": "AGsMQixZZP44nKQGkwAJ52yf2Hi4ZDNj5UghEawUUNm1iH1zCHCbRM2HFzJ67KQKyrHKRS74atVpiAqjYvAUKZ7",
  "key4": "3b19gMhg6VCWAcq92oDptjnmqxan44Pt9d9xVh2sn6Krv1R84bJrW35HyTFZNsBSNAsfFTWNrgW9HkoUoXTKe3Eh",
  "key5": "43MCt6GxVwTS41cdqKeCGmQseN3FjkkFqMAvGEucSETzTJbNRVprYvTDQsH9bjcFvwxxqxYAXFH54d4WtKqJv1Ro",
  "key6": "2hPYsDUEkDv9sx94v9MKrTU5GcjuDQ7WSfB2xpJQMUw6QsndFtwsoKc5RKZLSJ1bRGebHbqtoSjdG1K8NufpjnR7",
  "key7": "3omVzch4g15EVGmfwY1vfMNw3VjMuB2YRpW2NUYSxQJpe6fs56X3886YyasCMw2NKWRhjLYnyaG7Fr82q2mzSazh",
  "key8": "4M7ewvfKpq4mSYShiju7T98aQqPKQaZsRV1Anodf6n8qpAfYrnqVTFZ8bqaTLsz8WMH9o8XY5w2Ubcmr3EB3Mcyy",
  "key9": "3RUeAbG6WcmD2Q99sUCApDJsZNVQjoJki4LhYHs5pLoJ7AV9CNG5mj5UHdSqfHEBSzb2ZvkLoaJpNAVoMSHLKJat",
  "key10": "4RSUtEdpBBY1xQMGcLSbQAfi1Ke28PEF2VScobiy8j1SwYorJ91q3j4dAKppftXQDjVKHToysdp5XnQtuj4JVU5j",
  "key11": "3ebRtzmi3egCtTiPtv3wpfg7uzo8xs9ux3YzKK6RahfeRc53Shy5mq5V2AfxM5pU2QqFw4k6chJeFU1YqUM1n4Nw",
  "key12": "2cscmCNi73xT4KwGZPMc5gxEcLn2cUJWCNxf7asXiMtPRPfAQ4iWWpTVHq5qMrqBXkpiuoLoQmggaGJ6PvVEytnu",
  "key13": "4VF7k4wQFZTMgGmnN4axnXyFsdmRXy6KFVTTuMBz351UW8mMH2ic79rLzBpjEbr8qK176WSm37pvUMfWrxGKG3Kb",
  "key14": "oAdxt9pm1j8a2Wnf23aYfcvZzaov5sNdXdt4E6rtj174MXiQCjxyErifxYhk3mffeeF3BAMbpwofLc8Yc1xCTtK",
  "key15": "3hJ9oiqZxTWEjJs1fiWXEQQWfR8jbNtQ3j4HVDwt9GbbsLNVba7ebps98CFHiPrmcHTWQVRt7EAbuDSoskFUwkNS",
  "key16": "4wmsqxq4k4GmiVLpzFE4YPY8mVkraYQZkqjsvZjypTaeZFpdRpJbSKsi7CXDYLKoRxjtxCScdtWjgepyim94vU8n",
  "key17": "5bvky1bnbvkKaM9hDyDHYXWJQYzfY6ApMDwvHCW2QHFziEerLBGxjHu5xWnuTVnujaRvV3HMJCrZpjmDLyRUkybN",
  "key18": "3HEKogDNLw4UTC6X6BwQ1AskGFWnDcwxaB8PPkeu1cacwj5EsYkGabN9jqxmJFUAoF4BqVU4eFwGjE3HGwChsVUE",
  "key19": "5MfnRKptrfxXMTzVWBzx2dp9vMmcbrkA2HAMLs536jxZXqC97aPJhhoddVQq265WptqGHRrKRmA31bRhe2suEdKK",
  "key20": "2BV2o119XZGD5mwcxZBnFnikmjMsneoCkALRyb95eqsDqk9HK3xjBRGFVaK2N7JBDiQWCq3KJrS4cxEk1F9mNvdW",
  "key21": "48wxqCkwDJ4urK7xatjGPowqMpi3c7APBvGYZJ18nzMN8Zwa7p6tuJfjMFoUMzcx3t8pn6d67m9EevGJspthxoqY",
  "key22": "5HYb3husTP1Boy5GHqB61AzpmFYwqbyzao4mQcYg2m4JsmnKVWfA1WXoUFKY69C5NtCXjzmixS9TaSZgkcBhKpB9",
  "key23": "2fYHD49LgVqFpDurHR3xPQnus4AEFMzXGsshMPF4BSBdR2k9cRnQDWDjBDrr19n8ZmNCA41DKbihbtwZaRgjWqTA",
  "key24": "5kVvgXBAhabJz2mZnQ5FnT2FMoSry8vnCSyYesLVofRzdsUYMrkz4mHfaEis95hjvaK32kXU2RfQTK3rYvwnt7LF",
  "key25": "3YgPG3CtmWMV947UVmniK4MY1ohegANcuyT1LkHcy3K9pzk7STLFS26PeiG1gZSds3P4U8VEuMW71dKU5nrVXTaC",
  "key26": "4pDvLxtbhbrg5oxe9iuixyjHsgJM4HVwvPqjYRfyhh2xVjSydnj2uqcApSgeMrvTtM9tCuWBkfExkHCu1rMHCZ3s",
  "key27": "2FhucXWVFveMa7aG8GyqVhhCxN1W6HSYmfZh6YM4ArFCoKMoxKyezRnstncnwgktSXysAB4WWiindZ34j1L8PMFH",
  "key28": "3tohF8FcWVzq9Nu1w7KXBQRwNGZACNpLBJAQMh8cVnGkn922hpZMFrNXmXc8pZQ82o52CEVoYVhqjChpqPzWb4zN",
  "key29": "235eFBxBHgsiEk5C1JPdDDuEGUGh196m7Nb2nd7YXi2YxFUB9bUBSR1LBLBmk7k2XJmVAbtU6gNygAM2Kweh7e4D",
  "key30": "4s9f1L991pigjSFa5JiAjqWsjVXGhCoTmP2S5vBq2vXTcPy8r75aSCC4xc5fWKqQSgNuftFTbJXm9RkCJLbsCiMS",
  "key31": "2jC2SQvDhkRAP9p1nXcRv2jJpVfy6B6yAHB6bYz45Z1EWLeCeXXHN6SCHpvMSthg9mt2CcZtEPiJ7HjidFtNGzd7",
  "key32": "5w3pFhvubVCY5zpK4adogMTgWzMeG2kPzWeaFcFdY24UFr4NMatwgN8xY7v95ow3VEHY5WYh8pEihvPAqRWRdNzp",
  "key33": "2Ev8Qdc45fPPGXaJzDoh2ZHmYMcc5AqhvoozQYb2QiuKXeqW4uYfUhjkEe7J1RzFb2p9EXy4bGoN4rkxhW1XBrnv",
  "key34": "2mXN3JMTRD4iDoTDXuvXxGXNq8EaV82pg8gHBT6YsgkurDQYbhPeifZVb7jehXFDPDoZWaEc8ng2KcCTUE35GeaU",
  "key35": "sccSagkKAd5Vo83pdaYKy9QTFejfvZpTG5HaghBo9C93cxAYHqddjJKLF4vter9xootMEAJRYqJsNXd375iTSmN",
  "key36": "5kUpzq4NK4cvLJzQobdoTtuqjUtWGWHv3PNctC85Bd1jUWc88LDZqd1qvtWDoBZtiFaVH7G4qTmowX2WGKNRZpaq",
  "key37": "2VfcGjydKudkxsvGBrEQbLCfqaJWbTkxGxJX8C7Hw9tVYnxnnENEMKbp9ockP2tGEW16tNqJS5fiXe6vLSCuv9Di",
  "key38": "4DMLwHFX4yH5Ni7RYZk56nBCmTSLhdJBmFxCKYLW39JpuyFh5A1spgBJUxUWuXjL66tbHdy4pxVKUUWdg83draXV",
  "key39": "515iTNW9KU3yZHHZMCijndEL5rT1ctLi3X1kqRdZDCAvLeemSKexzKHt1qF5bf4mRP6SZ97MLcaa6mKqNjWbkBLh",
  "key40": "3r6YrQcR76qCQtBTjVAYhLDhyHPfGpySzkNjZsc9FSSkiuabNqLV29wbbcLomTCXgrDFnT2KfA9KriYDXQugnh2k",
  "key41": "31PpVu8RbMyNpzZMRs3Bf8amG7i5vtQExk5WN3iNp3GpUx1scCVotFUi4acgLmRGd8k2RDiPFvCkmDAH5XtoBtMM",
  "key42": "3scX68v7et6Mn5xaXsE8Yor8zH2ist4bP8z4MtqZELUQXsasUZbaMXgE4sGr3ZuwW7MPvBAJ7zXEVZkgnk21g5B1",
  "key43": "4RUAKEqK9ZBBHLjPhvFAfuC9EL6V2aUWMEYEYkLnM9NBRCxWKRf2mfxoLR8H6fR87Dcm1ads9juNRKXJ2YUqJrFc"
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
