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
    "4T6sFRBBtG67NvwdzmMeJJfmnBnBsz32US6Ywbofx4PUJJYbNNL3a24hsL45ysK9ZwLo3p5EQYEZxUr9Q2puBxxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CZUrmT7v8ar4DryG8pnGSniR7T1LGzs12FWuZ2f8m9rUe1TV6vTTu2dyKdbwFWKTSVUBG4fhEGDu23vzGHQgA5",
  "key1": "31bUJj8tzTBgh85qzjosEMYxKDE1uHrq4fbksq6zqFNWEqpGTcMvxRrqsSckhSeDsfNyZZ4U2nygnh3CwfWi3Sss",
  "key2": "4MDYc9Qv6fED1bxhyuvkAEBnAyeCcCYnvLpGDy9bQwvY1rCDAoYLn6g8CXxdddudYfDBrDa75XiytMkN6vaS28eD",
  "key3": "4s4d1r8mNBaeToR3XtgzRYe9SBR6SR5pCR1CWQWAFcs5Mw2djGZvtjdjPBJgNaSASedZctkQQD2y5FMapvcz8y2C",
  "key4": "3HiGvRrY2GkBEWMxLm1qq3o1igLPbcQtbSGDN4WqV1MsCWFCqNcsqiHxstxA4KnqfmYYXZ8EfLtdShU87eoQSxuQ",
  "key5": "2LZHi5PdbpYqGW3k41Ati6cf357zQgMGPphAEZ2ZJyJcEde1YGJFCXK22ymSuWy9ZAMhozecfF1wF8P9txoVYAGx",
  "key6": "33EYd49N2ut6ZrCJs6KV9MQ8vq8frQsJajBvRiin6gvoJJaD48uf5sMtb2GxnwHUQsCDpfve32AbfTAhpbcds5BQ",
  "key7": "6592L8LKBANaa4vRpKnxYKLnSam5HGxAbeUAfbfMBDktTZA1gpchr1uthv59C9PPswL6gQg1oRbi35xXGk2pT4MB",
  "key8": "3TqAhP6ffvw531uRH7fC1b71VxCeQTPS613u6KRsqD3WJkiAq8rqoG4ddSUBANadEq1ebKmAfvSSQLRUMMvRR4AZ",
  "key9": "3eX2sNo3QV1yagtCGaMqBxMLB7da9TmL6eASimSdRVKYzkgSZt4cuDwp8wMHXDPHeCrmrgQjDF7B59DkkERaE9L6",
  "key10": "3htBzozVrTZE89FfWyegBSGocDkao6Thh5k1mgnCcNs1nDfPFecTha3ebVH7LWNLNp9LM2J8zrGxcUkPAz8RWnh9",
  "key11": "Q4WXJ7Zysg7DkyFvWH4eYhzEQ4B4Mb6bYA8bv5cV6F6bRpKAtEXKMxixJjmaKu7iYtswDNJeGgjkuPoW9PbSwBx",
  "key12": "5UUBeZyDFp8jwM6Tr5YQP1BKLHBE4SH3exxiuZcT7cETkgmSnwngTeCdjKZmVDPDqAqPAFnrqyqRa1cT4T3MFTge",
  "key13": "4gjZeKtWhdKQBTGoNw3PEqiRWQzZAjiNwdioVJFSnnXRnARHxnTTfCH1zjLKKomuYgd8SwAN4dg272V68ZWYqnaJ",
  "key14": "xf57xPk4ZWcYfV24ZGDFsdg7faxX8geE4iGnApCsbCYkmSNgaGTCe1wrMRyDwdY4Wg4rLK5Est5ymSDz9fA8aaf",
  "key15": "4c5UHWvGP44pjyv9uLq3Z42eVKXeZenD2orqQU3igWZCcmQaPyFr78i1Z3dYgmRih7Tp64sf2eDyuV9XuXvN8nYX",
  "key16": "2sX9LHHy9ByFwcgXXfdJ4BQyYL1r8rn2uXS51EJnoy5Hb1qcShTiejcxhmpMC4HpMdvJAMePijUYyWdDouZHAuGJ",
  "key17": "VnwA7eHF8GaNtnZF8nBgeFPdK8asaLtmirDwKwEyyT2dNYJtxCu1gSiUhnX5QZy9ZGwJpgF9KYsAjDZ8RmTrpem",
  "key18": "47EE1tjGAy3gD8iRPTEaCXgVWhX765mWfNiGX9jBz5zLnt1M9PJLnVH7P7gQFjAYixff9zeJ6koDMCRUcxoKuP15",
  "key19": "3huFjZwzpWK9tcFtU8K1BibkS2LcwdAAVBA5yRZUHYfVVXaa8C7mj7wFNawiEbBAqL9zo9U35CPtFH7rgWncaXsa",
  "key20": "2JiouvX2kyNCaq1ck2K3pozh2YXyyNuF96ybZb1TzvpxYzM12t3EV4adHxfyDMnxmbd7m14rHfDiCiQJQSY4SizV",
  "key21": "3BSprfBfy16xRLRNtpKwt78eZQkwWUX11TLAuhRdqRAi65XK5KBZQBcJun1ogUe42VHS35hQvGGidHEnbAe2ajKr",
  "key22": "3GSMw1QcVghPZ9RB8165Cm439HPUSZtuh7h2yh9nQ4JPZL8uAnCjjyeDig47GbF4u5zAUfaMVv81zUShnUyX4fo2",
  "key23": "HkKuqHCiQQREvMmq1A1CLhRLyWuq3TPHZg34zpPQs3yaXe5FTvEdG6e9pNMEP2Apa31VSabc5YbpwP1cbDceqHF",
  "key24": "MmQ3NsLJjFbwmpTccXqUbkdXJhKmjgbACLhWqJrbPtYdUuaZ5gRHo7JAGU6Ly77tpafyeFPPh1wn6EsnhpPN9WJ",
  "key25": "4Ddunu86rYrWTy1z9oCXzahHEbg5a8WxmWTubv4nrAMkKM8dkzMfM2o6v3MiYNaDood23utGNX2ouLgD2EzvFF5z",
  "key26": "26rzCpe37uj2a4cYyosYnLZnTRL5XgAZBhDU1JZwkKzwDJ3HVcYUCr5jPu7VQZSgQioviepqB2MncC7n15YoVEif",
  "key27": "yUikJUdVbbwiv5Kn5EKoZyLZytDe2S23XZRKUxErUg5mUSWmN8Ra1WzNB9qxdPafbJCLaySaoEwvyQMskeeeZdB",
  "key28": "54tYEF2iZtR8qQ1BCxF7U6Wy8xRoc6NFM9rh1d4SxXPzCcZ3EmfXUi3bhdYnoj9GMDNKE1naVZv5ALZCnyUzhB8u",
  "key29": "34dJ8AXhBMZyJJgFFBBS9MGbr2krAGvthg2rL9TWwrtA3YiP6nzQs3St5ctZRv4bbtiAsakXrqr2afS9CDcwwfVe",
  "key30": "3QgoMEHbNYK8yYPR3EDLdkgPh5dvH4UDZmTVZjmCC1k37gLv9KB2zGFUCp75HYaDas7wYfeFQWp2TtLhZBz4WFQa",
  "key31": "uKzgfVfvHEcNmF5HXXqE2PQtEZrtVGFNTbcn4AXkLoGwPfuJAdVfCheNqT8gQE2TZuWbt5NA7wXVC1Hu1CBsQ5y",
  "key32": "2Mv2CVBYEer5Ay1BXX8M9eWiBYExoTrfYfM6AeRCSHpn2YbGeFUHv6HWubcw3MxtJvvxksy7tSz8yZHHhfVMCpCV",
  "key33": "4n4gvc3QtsPbpaFUmScrBW7AQpjUuDgbMwvGiQ8kKRo2vCvsGYHnXxjMi4psTVujpHc5kwWGYWuLigACgpE7id5",
  "key34": "emfyoSS7Le8H5GQHXk5spkzpgrsemooSraoBi5eqBeBFVvRMEGFF2GyRmtvzCkbKRYbWr25bPMfrSVJYoSe2Nyc",
  "key35": "L5WH7p3giSQtn4F8HnD61b8vBURiJDdbCdpNwPmrpW1oet6pupjmx4h5g5kggLU2JqNaqQcA3LLFvc5BgHLmkky",
  "key36": "2GcyHA2AsPQdwoMxQxwgogd8sdAbc6WcMLBMLDyikwTnsV6vXhtzVKHpjWYF1No69qsYEfNMgfoEMc6ZvzF5FoBs",
  "key37": "4JCRyfcgVMvpCGDShutZt6eVyuuFFUewDnEnrw6XjMhUbN3xTW9UdXajxvyhyTR99H2YG5wVRFuayoBMWwzBASUk",
  "key38": "53AoKnj8R6sCx3XZ6gTYKZeqEVTLMrozTVYQC87CNjZ22PE4UNPUY4kyHTbA8Mit9QtSgABzBiCvfFQHExsuop5Z",
  "key39": "2BKsmHvWhpSZTkmXAdLX2WFwudKwYygv52YVWRv2V8Chq71iryc12szdn8L7scfvGteAWCgLCaddxJkFC3eidUew",
  "key40": "2z6eBAMZPqkbqjk5PD3T2bMdihMhNaUVsHpkRpE8anGm67RQPBD58fPYjmdfeeD4QRgXL6QvWpvakkCFtBsBise2",
  "key41": "2RjF43L6e94apyAaha27j6XQvr1ATeknG8XuXG6AjAnK4ZephyRjtJ7B5Gta3UNwDp6hnSKnYa7N3qyi5bd6PRdh",
  "key42": "wXCZ1N3mVNGKEeTq9cVVamVcPSMqitAyEEbfDDgQ2TSzRSp2PAio1Z3joU8zVWyD8ZyRvX1izJUfUdRxPNR1ANy",
  "key43": "5REXYFeF4nzwPEQPKhjwBtohjDkn7BZZbe5KrvL9rzQ4DvLNVrbERZDtuHLZ245cJHMH4aAyzAGAoBfpZSkBgj41"
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
