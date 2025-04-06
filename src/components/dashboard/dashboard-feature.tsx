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
    "3cmBrAFDqAthfJqifRRT1H7FUfwcgs2SRfKca7LewQMrKE44JvZauXmcAQiJPwj53zDH36PybNiqpDtV9pAhs8oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XHYk4YmSvPo68uVgLcixm5xDvR4zy62QcoNssPRZvNktuoYP5otXeB2wKWQ3kvT7oHr4vH84xXvSJipYDHTd1o",
  "key1": "5LD6pqXeCGz1jeb1whbV1xJ6avzKWqnTV48ubkpYTuwfSZwYjLsmYpNV9LBwWjscsqyyJtTfNp15h2bY4bJamovd",
  "key2": "36Ky9cYLC717vcFtazMcksR51kyHZPMmMhQJBsmXGWueDHspghf4kE1H8vpFhAKP4CzZMruXdf8zdAFeytxatymV",
  "key3": "2B1bs6sfENUWh3SuzpM5yqNJVJgK4ZPaLkfHnJUGB3iwMTwwy6cS9wMr49HaT1NcZKMtF9pXVWrp4PUoPuheboZt",
  "key4": "3FrBunzZiCpUdCCekpGJtwdRqLGMDFQmdkEsD75AoWjKD5pxPSMJbhsigkNrp2EzfewzYyREdmNGymVeatj2YuZ2",
  "key5": "67QsgvhA61AdKr7mRDiNeaYfoVoaxvYQEQp3rH8oYUu36YUVKR6c3U1gWRdkZ3aWcnce8YwYdgSpctgMdxyDvqXd",
  "key6": "2WkxbwaULXK3F2LUh5wxi96YYVkY1wjM5sKmYVCNoUuTdkFTkviWLHMqNYvRW4s21daR3sZeoAarAv7QS4ZiavmZ",
  "key7": "5qC8iknCSfKkR2hVdUmVufpTstuxKSti71tdij1mSYyzYYv9LNkS1FWp6Q8VRxWEe8CP8ha5YHcu8gCAT7Kc3dZb",
  "key8": "nxpkwodqm7L5YtAACR8fzWu8Ut5duuNwYvoBxiAJFNK82NmsxaGGp2dQFjR2CHQPeh2AvPuaW91hjumw6bShgGk",
  "key9": "4MH9cRnphEP63pEtiTLWz5hXWcXrKmz6FRc9myoCujidsyTjGKz7HrALWZ2ryySvVjn6cXXzXAK3w8dyDjfgwz9F",
  "key10": "3eJKLqZM1ce5VsBacG8Mpgsd9S1tHZvCw9WFyD7vnFsxt5uszR2BnseUhPQiA2NdNgAUzFovm4jTSxMequUc2ERR",
  "key11": "57GgTMewZ76VsoTmg23QEZjf8ciFvKBPWJScoEWfRnqshrrDBWYG1GjL7XzNvdb2nYUJ96vso5RVDq3JWPqNQdWE",
  "key12": "3yB88kLibdCPtKhvSCCgZTtAoMXPWhhQeMbgU6Naz9H3SHQcF2x4Qt9cGZvfpRK1khL8AsbcUPhY19g3RBKMfyoh",
  "key13": "3SLMr2tz4yLR4kcQweX4r2j8mbemzV82Kra23EqhdgpswxJqXVdc1iiqNPiBsu6hnAnRrMSeo7vfaezqK8MGdMkE",
  "key14": "4eCnrpQLVN8R7UEPoKv3kehGFtKL76UsEK3UEhoz2W7RNgxhQYr7abVYiUfpXNw7sw3fKyJ88grRjLQ8CFF2H89g",
  "key15": "5pseUcgYxyw34y5aBKrVAkQXARhxaHeBPGY7kizubfnDN5q4FDDDbtBkmUxZ2wotR5621WkbNK1GUqwntXyNbM2X",
  "key16": "4vPJw5gKXNWNDHRzP72y8oEMEPeKWQBxmCaRVnJZ53ccqxqZHLeXReiy5NB8Qr4SZ9z2dsnWmbUVrC1SKP9918fQ",
  "key17": "4wLQRmpfEv2ESvdhNGPPBPFz2dEx6vQoNjcjcv6kbLBNJHRV6kvpwDfEi6M2EgRCXn6xFym3QNDfnhdABu7K7kMc",
  "key18": "4oBx4bwzZTAgng2PzsKNfPadA9NjRqedgWgpJTQrTFsbFreDkkPnLAsgb19m989P2Nk38MUu7jG4eKyUDFgdesv6",
  "key19": "5mSZF6q5813mv2cj53FZijFWwD6j5127RPwt2T9LacaPEJj5LCetxTJmhVAQ4tpdeggbstKFiXC6875wfjMkoXKX",
  "key20": "5dL7aE8bmrHaXqZFiz4V8QTeawPaBXNRo31cKGbYA41QXFJ8avBtwRJKZAeFq7PgYrYXtrJdkbYv5TRvdh96pm5a",
  "key21": "5cCijKh5dXS5LqEpwZDYZCAA4FBnzLYbBty3eUeiSHDJZwatPuvMTMyfDf5ecwdfXagwP73G3L5mmYs2VbyunLiW",
  "key22": "5ENXMwCAUWE9TJgksy1W9M1KgBS6CSws5snQESyA3x7SNkJ1KKbEN3LL9J2ar71nEdw7466wpwqtzA76EpALzTnK",
  "key23": "5EJjFN4GB14KC8BF4JQZarpZhNNStvmtjuNE2gJUVT7w4voYF6XxzASEUDyvYXm8CJbQRAjU2YwPAkn7j5dDUEYw",
  "key24": "2ang7Ys6Lm3kTJx3KrgSE5LSJGuepZ1kztMX1c4ys2z5mHaWrng1wtJMEyXsLQKR4FWskQPVzZrBTejUL3LXCK58",
  "key25": "42sqHheKoDAGBznBkUh7CkEG6CgXfoQg3rq1bcV9oQiEHJA9e3b4cbieK26iN2MibgCTWZ9gAqLhugmUHZPYoy4L",
  "key26": "3iykdLWHTTaQd3DQAhJHyaGfyzHmbALpVWHzFDsEpxT7HF98C4hzQdbaFuQeTYWqP7NJpteUyWpcWUqWjwWRKqr8",
  "key27": "67Jefhx4sCRk6WWHaEpECbSTcx35jZnxaAUzYBrXS1YRMVzymkWZ49Z1wzCSQMVCfGnpmYDDA9EG7TuFHBpcNoGA",
  "key28": "56Ck4fTZessv8HbQeJbzX82ga8hz5QykFTrkQzK7pvQVMVWDU2sgwU8GFdiKGteZwooF1YbkDCBRV9eYfsToDY6E"
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
