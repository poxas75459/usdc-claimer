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
    "2xcj4tn1oWnyN5u424xXkhWNEeETuW9HohmaEU1kLoR3dj2mvyZtXuP9WrNr9HZKSmUNP35eZ5kjWXryqeT8mZBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAKnpEkQCmbSGJaSQM35Q9Z9Yc4PMdegoCX4N54gMfCGmZr9tkiZk5NcxFiwQBFt1JbwGUbbVcArrhvSWREosGa",
  "key1": "F42GocKjbLQ3MoRYMQja9cbXGDaDKtuvAcFcGuPCZ9D8Z3m9p5LboYechiPCsadDk73D87Gvt3k4tsRkwzBBSbo",
  "key2": "4ZngoJDvLnENDRSZxrZCuPYxQXiZ4tAYziaoiur1iXZb5wQkkJNUThcyzKdk8YVBRdywdtsGs4VUyPTEgtmDCqAr",
  "key3": "5cFS1xsbMe5EC3YpTvL6xH8rcJUYxkJKm5ZvG8K1RYqZ1gPPjNS38j8KT2SzAAhYPAu3NM9jA1CYteDFMGanNdpv",
  "key4": "43U1BWFdTP41mVJNKr1KmS4EcY6bpkxiESKc5yk5ckdaTzXuYagdzdtDr2Tk6b1VyPkEd7wDERUFG7R2JmG43Y3B",
  "key5": "3whn3qpoxSgQsniBSFpkHueL7HVzJjeDtFPGAPG7v3hZPp2jrjqRiNFsyqdoGLak1gb7gtd4auhHtCVKaXDTujbz",
  "key6": "2rSPGvJWj8ovF6X97FDVsKg618izGvPf3Uqh13D5cF2r21Tz6SZycLf8NVQpSp31163sY8Ad1dQYBatGRkCzU91U",
  "key7": "4Bq51xGyqUPxpVCUHwJ4ScNbCDFrg1ekvdScAKz2212NgHK8emeHedxx5re6hNQxB2qTJUpKYzZKV7hmj8N9X7FU",
  "key8": "5yZEKZG1CcqJ3YZaB6gKi7321F1f9pk5b32JrKNzDuh4bEB4eSoid4pY5BfQV2xwBy5SfV9GHC5ENFXNTSQWKi29",
  "key9": "DiCWRiD8tim7PgpCZmXNC8DY35MU8iDUXs9JumgtiA4ec6cH8ZAJgWBPxhSMYTunZNVmMkRd5kGVmNnkqh5zt4Z",
  "key10": "SsqkQx9oMGD6HyZqHkwHN2dzygxkJTucnjMqvm2nz1keHovVy6JnRLsJsEzyrham5RV6dX5q2R8s492r92WjtEm",
  "key11": "4gSSrXJjHzEgF78dS8ZtSjLYhNEGq8F92P78f8TXyxq7UKS2UocDb8c16BBGun1BDy3SyYLkq76JTbfuLKibeCoM",
  "key12": "4QPNdxB4ECtkoy7g4vM1b17kuQ5RJxzWovu3pd7vDRFha48zgJN6uSXbbSBHwqyjx67yNTC3H8sLZxQHHtRvVpdc",
  "key13": "3gZD1qtgDP2DzyKYnXPWjT4tSp7GPJ3qVDm1tsjmUaUSWg6zbG1WqZ4TmC2mRstAFvPJ4Uiwdk4sYCrmdA8MMrNb",
  "key14": "3kV4mjybVKiCxUocxxGBH6xtPD35oudL96w6VWHbKZiiMGLsA6dLj7XHXXN1NjkU4MV4DPrGPHEZcC5MUyRX7uMF",
  "key15": "3pXYkDjMH3snVYsfvYv8b8ERAtxgRSfmG1mF33vsBmj1pLhv7VxL86Hk17Xs2LzXJiVG9TotTdTExdVrL5WM2v7L",
  "key16": "3ybyMkea4rRB9PuLDVdRjmdgbuMxwyHUYPkmiFUPoogRbATun49f65s5YmeVy91Xur2hv23D9uhLR93AYpzVeuoC",
  "key17": "8Jx8TJgLtvwmoY3bixyNQAEuGhYn2U89xUjATEhe2XheYGhTJ5vmLsUNhJMDatGT7HZrQFnX48GegLytqXKNjpe",
  "key18": "34kXyJWDf744nhM7V6KzNYJTBfGC1NK6WBwbhFkzp8nN2GCCoZGiq6LkrxcB2wiBq3DSo92jhrE7U2d1UTwpzsi",
  "key19": "4tuwZ6eGM9JWmSCpT28bqiPrJQMvTCQQc2oUBCsRxPsYeDviLzZBkJ7sJV3gAdYxQD5b4RJ57iMJ3u37RXKSoDY8",
  "key20": "57auxAZvMf9RdGfrVGhaw4Sk5qJFDqVbq3SvYNR4Us1rkRcCkPxnjXqDJTo5uafZMtp6dLw18CLzxXykNRPpf6T1",
  "key21": "4EnU9M4E4gc8yJdU5HXzfZ4yyZnrgCUAKB9xTiWkLGYgwhaqZrJJppSAVuki5HEuoXZgPBZnFFDrzGYkRAKtaBq5",
  "key22": "2tur2mqBrw8BxTf9vbr8YA6TpePWFab4oRQZC8c4fq1y8ySVwYwDV8SucS17fhqsTJYk39HzYRnnJoUEaLt6Cxod",
  "key23": "5W2mMwxiEvk1oM8r6jRVfnhtmywLxEAF3ZYH5RybekgrcN56wEcSwkzSHzvqerYvRogCo8nKQzJY5WMsNFDagnrH",
  "key24": "3jaXpjhw3AFRb7Gpm3zRaXxree2kqqBZ2oom1eo5q9SA7v9nHcgcfgp3CcdNFCSJJhv97Ma5q8Ki99EcRMTtbotx",
  "key25": "2t2j7XLVRWc7jkSCzPaRAsLnXcmRcxzUqGdTpjwydjdomx9JE91Pc2czfTskjvXXBzTy94A4gSDGZyWnTWLWoEZ4",
  "key26": "5QigreeLmZHGf5z4kUYRVANJjKJ5DmN5bmRynEpx9P8fgPG2k6xdmvmQdJ5kCGTBqtN8cwfn4y1h4Qk4n7pWg5tL",
  "key27": "5TUvXq4oWziLtDHnKS9JHBVU1tKKHwKHbKokpFMQ6UL45kEKtFVzXw34D7hemXApyUNwpZcrEsSXTbzyCHdy3z1g",
  "key28": "3EKgmse3CoQRszWnqEfnRvGyEvHbHYhCHGUqEWisZJxDhg8ZBgEP6gKMKPi1tzBjpuSPcrrpT8WQ7dnnVsWsnoio",
  "key29": "2LsqML9TpHvpuKN6QUTcVGy99iQ8kem1p7UMtKWkxL93d5bkkjLr4ybfdmcpQFNWQLGxZhW8smoDq7d4MYCvppWe",
  "key30": "r4WXYYgUEaLdtmwXVQqJsXnJg2DenTcDTseF6u3FyFRJN23Qo2wyeSCfd6pNNQhJfUC6FtYAeD4pT91JW3kvzxw",
  "key31": "3B2Rg61PKjH5WSGmcHAS2XpJpytxNSguKep2H3ZZzXs7oGACYeeGejw3GNuaNRFkK6RdfTCWQVxyXz7xQqh2voSX",
  "key32": "5uuszonn37PEZVNFtBBv4BT1LZ2dBnyCsea6WhfoCAZexQhurjbZcxQUwjD3rqGncp1fFsxLQNqbZcVdfXP9RNxW",
  "key33": "4ozVjRxuojFtidPgVDADuZbLQxdx8CCUV8ztuFgSSiHUpVjZz83tUquKS52TPZBQt225RbD4zRqvCJe3Z379ai7o",
  "key34": "2c93vpiym9PCNAp236zoUadoYSSMVoUPzPiSeAgiVcJVh9K2Q4NFD5RtV33BBHe3XXqCfxyMEULaJHsDS6E5Ctej",
  "key35": "3SKfKy2ZRwYLTFUByY8YtkJjrKmnZdsa2v8EFCQ31w9ukorktYQjpazLA7cGTpf8knXbohKdw9JA3WUmW9RtmHdz",
  "key36": "3yQ4WoUxThzW7BV9YzUDRLbGFjNTovWt8sGuTRtnCoYCmtVFnf35ZwMkPrLD3p7SmrasgeBh6HbQRUGvoBaVKMAR",
  "key37": "2pwd7wNnJcjPdodikjixCp6C4j3juxeXaKNE83yv82AYRD42pmTJgpZJBqPY3WYmsQG5tb8bsnGHMZLpZ4HJTUcV",
  "key38": "2aJy4UKVYaMLYSFYR4xBwtg3Q759xJZrBWD4Wa1ekyBSKqFSMASVp73yHpyuhgCsxgqdCNkddXTjAUFGhZM5Q3tJ",
  "key39": "wbByQtVceaxRFPdswTgYD9qGNGZHh4FraJsZHUWzd2gHi3FF2wHJcf1vdJrXrMZe2ZTtThxPdDViyAYmr7gpK1T",
  "key40": "3XYEYstqd9m38GK1v3EmTCVPLMTwKgaMrXq6mdt9PTGKLT4VFn7Z3ZXXESmMordvLSgUQkeqYNYYyYje1VucYKB6",
  "key41": "5uu9u5GBivoUzmWDwiafUfASxY3eMMr6kS5wi8RJGwcxQCKRgTaqeyuUKzWET4b8BRjEpZFJGavVwdL3A5T5y5wN",
  "key42": "bYswG4cWWn7XD24t8S6EkVMWkmNCNssQo6ZLHRAm694rMPo63YbJpd91eGMdxi4SdsJ79QxQfZvzZS8pDB9ZWXX"
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
