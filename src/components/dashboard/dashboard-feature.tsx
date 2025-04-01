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
    "KaBq2G6d1mQA2R2RVSMpoHeYij8nzSg88kX829oS7FdGaSuubfQMqQChKYUuEV1NzaGmTPMwSBoZcYHRYdgLUC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPTSHajuqi9KzwjiX4K9UYR2nQwNG3FT5RpdSkwmG6bevmpza5z5v6JxcPQUWDB5Xcw15RRpECPHkKjHazE1BZr",
  "key1": "63uMF9kc4LXKs5nHBPEvoyHmhnhS9c3aXr1yuPx5C8vPLuXeRnhijkEHFHhCqiBYKbNVBCvHH27AJ854jXGNgfwA",
  "key2": "26ccE49ih9xPddWJRDcbni7FPPBAc4Aqa6mqyJWVeZrASQmeUHBgJujaaLXfqbeQiJnKSSrg9QXyeWWDoR7d5RH9",
  "key3": "5ACbih5ZPkmNaarni9tA9MUsMHw1pRmnSr3tugePCAuavoP5x6jMDJr4fnNLZJ1yvNMAZz2QHu7Po92Znhsm7Wyv",
  "key4": "2naswAccAD6zK8zt9Kb6Awqtjbb23XjP5q9aH8KMK22NVXzd7vCbQtrt1DnX7ctoyKxvqcipUiM6ShPoDpB4mcGy",
  "key5": "5DRfW5UgXEvc4rrR8TCWfJVWD2W8JEgTeGDeLU3X9V6gCm5g3h4rkUGBGzN6Qgy8MS6nZaPFTcoq4FuJx8oMouvt",
  "key6": "3WMqFjxj13vVeeUgueKECJoa1ixPywAGeXBqkTpPsx3qq1oEVBSj5iVBracVCtjGypgjVmbD49inmonoJGEh9YG2",
  "key7": "64K5sLanfU8FKKbwZPJLEKHTbzPgJYnvgNATGp2EYCf9dUvrVLh1cSWf3n7TNsPH3hjnjb3znDhb8kSp8Aew5C88",
  "key8": "5fG1t5E8GxK2KShJzwpT2p2CHArDhkHzj9YxMHUkEWsn7q72CqAUp1nPVbih1RFPvnJS63Hu6SePd9ZRGzoiatiw",
  "key9": "nwv1s3sMfhZuzNP3zgsbRkFFY9793dVXVurNZF8xRgJC5AxV1aC4R8a4GAcDVEraBQWFFPyjVMmcxbymHisvEFb",
  "key10": "3Ec3D3SctQown9sqQZ3MckrcjzpLaqkSFejZy4rYfAzggtcuDKP5bGAb4memLTPVDZRCfsAXZGTHQgFk8hxR4tSD",
  "key11": "56gbBGeVVy7aDZQHUYqsLCtuq8CKfVbPyYCR2HFUamSRPuCmHbWRiM4ZBehcKW3dpbTvmhRGHb5SR6DKVm2rt2yg",
  "key12": "55Fs31H725VeDF8f5fmeXitzXtz8WCEch25FcAhCfkfyS8u2aqykk76AGf4Jk38ACSyLnkDPcaHMpatvhseDiMMX",
  "key13": "3DX4GfhqNwjD8tiF5F4mvxXH1Uuu8VTy1Ner7DVYq6F286vRAJYqnfnqhvDDemRrgHiupBHseRLXzpaSq9CZ984y",
  "key14": "moj295JBP7FMcDMLRVPZtVneisSxHgmEaUUyUdXH7enL6xh7JcnG2edDKoAC2zngKdEU1a71SM5RTBDp5gzxfSG",
  "key15": "5g6va2kthz52EsDej9CCxdip64MVVzmZj5nSGcqedpwxTh6WFPZQ8h4NVeHfnevKAZ1WQGwFCmEZ6LUNScU8JU5J",
  "key16": "3fUed6YtT9rpxxxooSqzq4cd2HFfvTwyzKyL91eJSNkNzZRfD2aThCobedUjrVVUXVuKvghPSFt5LESzWpNmjYii",
  "key17": "3b339SFr2VYqEjvwWNBcTW4cfwbnVi8M6ugm5oqzSrWxDQ73oQ77YGz3dodFkhem3oWdnGrHT22V1n9VhYBvzdr5",
  "key18": "YBpBhjtNfUjPBbVyNzqgcXr8BQCb4MRNnqazaqu1FMwSSFWqUdbG7fUX3wtJFacNmuvh3nLy3un3AjcXCfBSUw5",
  "key19": "4TwzL7BmgMZ9ZaiME1CexNaFdVRtGqXFeBCLctQRGhoUR8BsaxwSXPFCpVZSXqyKg41BKW7GGM5nDf6QKnAMRR2f",
  "key20": "427KqNdJYNgzBRprYZpEMtkpxL7KcJ8236tcc7Zo6cvVfY2RMwjAEm72wXE6bLV1tDmS51knyQq6Qzmk3JaZzeHW",
  "key21": "3VTH1cEnSiDRDTx8PKJCgzqEdAqSsRmAMBMXUaN8YMksXKQVzjJfhfQJKcygYSQzCPJpLGrCVnUUs9uXRdvTgmCo",
  "key22": "2JAPoaZaa3aHUWfaMBDbVuE7zbLFvkJGxRrwgvyTNqSn97JATivkXRoWQZ3Y3oB9mw7PfABWizdgWWzusXToCazS",
  "key23": "5xxFbxu14H33ZFCY2PyX6mEerURqGYdHLCeEdGfpCAHj49XAR6ABuuqvM5qdNsYdCUjKu5RieV3p2nXq2rkQTd2h",
  "key24": "2oKNkV5p7qSoSqEXvpfy4E2DH4KcFTZ8mNc5NhrMP7e2utLR4tDUafd3ueqT5U1BYUzzHxwbutCwt3cQJWuQRHdw",
  "key25": "9bDXp1aZuxFBZeBfYLV8ch1c8CqEy2c9s2dw15me8jG8vHAJGtLGsoRCdfD7XA5CMnfrkVSHNBiVrWCza293VEg",
  "key26": "32LBdSDCKe2L1KPMH4WZoTiwSo1hrVEqJZKAmedr5b9TRnkcfMU2tPTy8sRaRE8X5BMz8Pu1YdWQkY3gSeRj8upi",
  "key27": "5qXgjsq9NGAogEUVcRp72K7TsnkoT78cn3riNbzYzjkw4pC56Jactegqh2etkAN8mm5SEhcSAz6vi2q8KqixB1nk",
  "key28": "2rdeGxA9hZYeoQAs4MNFqqC5cnUzjpFa35C9Hk28QcFj3H5BZ4H9pZiqa1PfHzbQSYnZbhoBJVeMbr3oGPhHXd5R",
  "key29": "3nBtSBnDpoLaahydaomuwzQLWk3zkdJFAj7n9wDa7GtWYdHKAShVB7Rv8SfMRHTLmdfHe2gdiH8bRUTkQKEdUhuE",
  "key30": "4bdBUywtVr2X5vzsVKQgX2U3njwpzRtMLWy4AfnmEbV4933ZHzw9AFta4vmsBHCowEB9SR5UuAEFtnAFrnEwN718",
  "key31": "3y85HfYxVZCHEkefwiNbcqxYX86fEP5MmUcCt3i47ftfuLM8jnZeGAJCkQykzcPFh8ySrKqndfh5iMsUBm9FQhYB",
  "key32": "3fNcNB5qTYDMCKckJeHMdQJGLhVno1UU2Vn7SnJbwfRxqLnYr2oQcNbyegToM4v5gDusEVaEtPHyPwdSzDkebc1z",
  "key33": "d1nJF6d2X3ubaZMmvWXai6BYwArGn8pLFZS25fXzqQzFnt5Q7EHEHU6KkKjodnGsHNGSHuRXDGJqyf52uyNN1cD",
  "key34": "5BXYD4mFjS8c1o3YaF7XYAvhLvZhbYzoDBPRNk9xAwNznG35iTTAJMxcFSYF7TKv9TCurMKVFmXtYfcB6qZPZUNm",
  "key35": "4XosnSdApDTAtaCmaa8puJd1P2E748pWNiJ5TfdYiu5Y87qELwqrBzYeFzRZkpnFSdeFf6yFSG3DafE3vuzit6GC"
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
