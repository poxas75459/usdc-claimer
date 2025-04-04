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
    "4cnMHhZB9KZx8jydRkRbVALci6B6nr5Qe5ZE5y8r7Scu8V87Ar7mRpBFKHqbBcSjVJQZW6vxY6RYzjSyPG8J87HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iPPJXQsivpYGNTKYJxLgDSPT2egXmwpF1rhkqEGPpdKZaA5vSBJkqpGbYcqjQEfxG3R1gjAAcmGtsMvF3Rd4cyU",
  "key1": "5pjauuPHpc5gp3AEKtYwCqnhqxG4ZdBMHpadRScgcb5Ud6apPp2XmiDChacP3AQFVFvFQ9SBfH5M5q35suFzDhPb",
  "key2": "2nidMpXRr7tZLyjmXzfJc3rHD67CWzifB6hxgiFQ2c27bdSmBfGCm8tDMLaXHsqNwjaYkubjBghDRepoBYx1QGTY",
  "key3": "3VRCHJZBvqyhAY5rBnmiojKMGLuGDuoh6dnrJUbnPVXyToY69E5oyA6ARKBtLFD2VYJzebabKDuQtPrgkSJ1TgN6",
  "key4": "5UGUDrAXqCJZaBH3gvGibJNi1xo1BbBaiPDSNQ1w7f3iCuPGPzQLVxRnrCEo3HiUFTL165WYBD6JKPNjkwbbDVtZ",
  "key5": "2EDP43MLTM4VkUYHXtH2GFTcv2qe8yQRjSmcxM93heDU5AbceDKJZSWKpJyML8k8RQBV19Mm5rFcRu8SvSLaiy4v",
  "key6": "3KH4ptoMEAxokdCKiTicbDeAgKVnjG594Ci4HNEXVM73frCfKAiD4F4XCNJWWp7f1wXvWULnhac1b5CTrvxakMqW",
  "key7": "2LQAECoMazpJdU7EigVvWJmQv4LZNKtE2gzjvxeec8DghQRJ4UYngDEcT8taZB1jBD8Qi4oouxGmoKWKrfmMjHqN",
  "key8": "4od27dxdYwZAa3vX8Bjd7UtN4swMsLiaeAEhWy2UKSL7Xr9788RoSast6EVQW2EvPEpBPpupNKDco8pM8C6h7K7j",
  "key9": "FjxNxHRVTyurMMWBQvwqpdAv39kmRh4c7EEtvKtUc8eWwjojWukEwXpQAjk6BTAeAPbPi3QsaXMyWQ9JhfuUdA6",
  "key10": "ewdqkCyUepbhWvwS2idag39MC7p1yE3iKKXGUrR9qhp1xF6kbbeC6116KyWNq1Reb9sLXLMaqPoFqnX1hdyqacK",
  "key11": "M4qaDEYxBUYSaPMUdY4ARqTbciPrn35uB92Gc7r4HqaAos1Ewqkq64CuLZgyXECJywUkEqohH4Bu5oevRcwaBGY",
  "key12": "2Tn6Mw1fEbQxMghvMdbmXNEXDnTCgFgEJWEkseCbsDeoWqZhuGsaGxr9Adz9Ph6sGQ5cjQQHJKJ98FVHKXYFtWNz",
  "key13": "4cyFngvBhqetF3wkwKwJR428m3TY6Uq5q5E6rvgoqCyLxv56EGdBqrkmP66SqrAvkvNjgEdkUwwzwcYad1U3K593",
  "key14": "3ozgjRSENaZtNXJf7HKjEJTXwbi3gMpfm3RB5wcixtEHVf79fgbuWWVgGGhTuTJB6Bj9YQUtoD9v6v2wgRg6GRej",
  "key15": "56D5wzYiPDjE4jp62J7Cdnveb1z8PhXkmdZDegSiqekcEmx2UswqvTvzJUgf3Pfx8kQ8TrtkjFYgiQgsuPyNhK2c",
  "key16": "2UCxrRZi5fLfnkHRNpm7V9EB6FJLfuW3fwQDzNU4wgCFQV4cc1hFZQDh2QvJZj9GqYDgmVBihEsJQxHmKdXovXVu",
  "key17": "5ZBousx4LxewpYhMLMaMpRVVy4As3m6iGVzeyNmPNXet3N6i8DHDVVJZUXMfeUpiCYxRyDdDvZwxCAJLkpiwWXpo",
  "key18": "UmiX7RcS44wcWwdZKoMoxHLtDcqhTWQ6bXXVRMeqYF5DhrQ4GGm83KY9AFv9fag1RcAxvCFBqGTVgyCvjcFq3YS",
  "key19": "26BQPcmSmQVwdh5peqiKKhwrsScHJkn8cZi5H9USTArNenCRtDK6JHowymKDhLCZ3Qq6FQkXqCWN7Q6uZrMGMrU7",
  "key20": "JjwPLaby6GK6wPi52WKF2Kq1GT6SmQkf6soPLxSQ9iza1PFus5HiQtED7QwyzniTkjcPF6xpvpnyG97vYGKRpte",
  "key21": "4UH2zwoQAbGGT3bzMGc4MHHsRRMptzzLEnMwaJWBqke36ireTWdz2CKBujcK2dB9AXKUa8eKLWKvFbCo5bTGyqCz",
  "key22": "5ZnqnMxBQo9pss6MddsJcvbjrBKBDgFvW8gPDjPVJ8BikwcTSd3dXCWpbTnwy68XRKDP335NnuzWJxiC4wHcDKMR",
  "key23": "3uncA4KAmpivMNm3tP4fPymSb2xTnbhCoY9xJqDiRVSioxAFRD5VDmGh1NgifSepegpDaD6MifHtGQ2yhN23Awnt",
  "key24": "3pZG5BXv1mxdhRmUqHvvRJ9deinkEAX1i2oZD5HXseBpRkVt9SNbkatFaWPGYwtksYSmh1Wt56KCKusvpW64Zp3y",
  "key25": "5BakcBP94nKPJVN54mEZYzj85n2rqx8kceqA7S3mFNrAopxLFPTrxKJCZrTY2Ljer2yXaJYZqwLmeWJ5m3uiKbc3",
  "key26": "3pZNppAzZtqiVfRLYJfntCw5eb8uRw8JYds6QsP2tATiYgUany2FqFAodJ76BmeWzdXA1RowSVDZ12195tJtykHg",
  "key27": "57QsNYaNer1wFzmot8bn4WBufEmMckcoKhi32Tes1rhXxHgK7kZ3zqzB9ejDiMartW2YCSXSCY2ivNZ5spE6rZvQ",
  "key28": "61pEmEyRFUU5y9njPPAvbwPT4DvWEGSCjkLB1aewQNS8asPFj9RbVjVkJiiVgjgbjUQ72nGF7P2MAyuAKeBx7YSJ",
  "key29": "2VxGZ1ERnwFe6HdKdS5CKPkC1NTWVxqUafpu2NNMCXbjgTvgUwZYA9dbJzB1JDFJfv6MrXhgUpoaZFWuHGzpw48c",
  "key30": "5frcnKgDPUwbSBTzQyB4skN9SV8zXJjh2ZjnovanS6bqdhB3t6nJQZVkk6SQPkehY93WwjPuwLB8UaeATU2P8bJy",
  "key31": "3SyVg23QcvgGuoWeXyy5a2Byf5bWqUjZVxL7dRX4z9QkJnmoxo1eVEyzpmLTD9DoiwZpG3VNeHtBZF2UmFCoPE1h",
  "key32": "2fYefTuQecBsZM5ZcYSSdTE7KMuJtH2Z8idUvu6gwMPwVtyyGg3DjjbbCXexSQYXLK4VwUTR5NsvMZJWLSyQuTng",
  "key33": "vfZdM5rW6bUJizdaueJ2DLcBCF8766RwVZPrEdkVVjByHqn5EiyjPBwMgdA7cqj6xncgssVWvCVxa11KBPELJFW",
  "key34": "3gx7ZHhUDxb5pXjYauok4oTNpaGFTqhHDTKEcYD41KvdtRpZSuWjkDBecGpXiYw9CQiZ1HX8W86yp5iaUrWia2a3",
  "key35": "4RroMkqLjPCrBUwCSWjz3FsaaJ42XuEd1izchVu5G1fcheKYsHFTxuQYFT6MvzWR7QtiHVFuK2YsEESFq1fkLDvF",
  "key36": "4fttxKAAziCzYnXKwzMdcTSVsNkkC6jXvBJDJ74C3ktdZ6JcBMFSdWjE2q1UHhY9C7aGsuQDPk51MVFfnhjzJdzu"
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
