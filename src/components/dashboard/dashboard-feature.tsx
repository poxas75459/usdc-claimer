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
    "3mmBgUP4c6u7jM1R37enVB2jfheCLy3ATEwcz7thA2FFRCGtRBBjpsYU6gPE9c6Z7Ld7VsNccUvK5WEX2FjHSgaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311LZiUuwX1xq1HEZTMMT9S3hNzNGhUQxkvvVFEskMeY1CEne9nvBPDW7khw8RQSdYw1ZkSG2m7rMqCXMBTnpcXJ",
  "key1": "2SFeQMdLxWDM1LrSGQNEFqKsSP7TFEmeagUtF99FSUknELbw6kw5bLCRSxnYpbGA1KosujnX6uw8S3PmFM9FdZAm",
  "key2": "3eEQQ2MDhvTMJbyqmNKpBHsShQnt4vBNS9yCrFCsQWu7unsjHyb3suQ4HmpErjM6jy1APkiJo4sCMRiQ6zKMz2z6",
  "key3": "5JGxGSvwY8Q3YEyGYbRY9tvDBUwZ8RSBnVYekCmXg8n1fx3gqDMraAvQSMNpcxd1RQihorKsQ52Cm6jZfPqhaEqf",
  "key4": "K7ZgmkTcCqqwjrvwWJKzjELeuxbfdKxa6jF5vo3wREfbmabjHhWCKZUR881udrEoqHT7JRrmGZkTXr1NtR8Lauv",
  "key5": "3W4f6u79ezV81CXjAnyoZNnHBZTQt2BXJ5XebYcpJwEGDYnQqb4pEy1GajfabJJPHk8BYYHUg1tFtZd2SQcywdc5",
  "key6": "42ZDZUa5nG6bUqwMqw4dR6TirtjXnTRKQEgAxg6GxVxYuMq7cPzp4bumiSFV4W8s2sBpXCa7YZZf4sdmxtG4pfR4",
  "key7": "1s2jfKXDPXjypjB2mYjCDCLug5KspmjBpbCTi47hcq8ALpf9VvKH1NL7zW6edBFL51JpwJ596sgzJ12C4PNLSxM",
  "key8": "3N2t7nThnCEApVQnj6MGM3P2SreEfRwP2fpaPTYdAgHEajiLNRdM1KxRenmq6anLdj5tEcCLZLdFgVq98drm1jdZ",
  "key9": "57tgycUYLEAwWjvXqkNZrdGZQcoZjqGHymnaQJVsBFBtfisxBQZLoYhjAovcuU3dDsiQCgZLS4iLp1dqWZDe3r4Y",
  "key10": "jPUGsRxAnjAAn9HnHvEShTno5AutZ3NhhXHDEbGu5VcKWHjWRfmja5KsDp5HMAJty2CTf5janpQh49omkfrLPrM",
  "key11": "3WBjiz1Y1fDQHpCWhCvsSWyFkFnq2Fb2JYG3X9JJmSoZsWg1CBALC8cdmtm8jy95Ci5d2MMenGYRepqv4A2k7uNB",
  "key12": "5u2fT6x87csZE5KVXZ45xVGSeBKdS7skbRoDdWTx2D8Udog4xvyyU6bt8kZkiJbD1nNpRGj8ziwJLyBgJLc43hYH",
  "key13": "39HNUyn4uurcRjN4q7erbMHJMeFYLkKyb6E6U4PytKKnVTjoSTEaGsm2RRuJEmN3icdc9QTKzQj5mtuL5SxSipvF",
  "key14": "2MTm75fSBKrAL6YN4nGSMSwjMEE2ueTQ6zjyy51F5mMTYcvgwdPZoc7qbvMGU7hYwa8M7h1HWFnkcW194X7jNJVb",
  "key15": "4kxykUeGFpofpfBg7DjuBo3DqJXswfdrXBQ8pJyHckY3EW8Q29ke68umMmrCJyYSjBfPMmdWeanRrXRwsrU3SPQH",
  "key16": "1AKzmFcMUv9hpi9vW5581sfK6n1fheYwKWSPEoSoB5iL7DDdJ8znKgcEv8WAPHAxgmaypSsyncTAakkBpy5WJ3v",
  "key17": "z53oJSDYT3QPhZCSEQAuYMy6UF1obdvEvMWmWHi9vbpdrK18zhkEmXG11WhwwixnVtqY4oqDR6EJwtaVLjuMBJb",
  "key18": "2yacTaCD9NfpNrY7qrnTnJ8vAGcrZ6DFjJsEs5sSzzQLbbJJ18sCXAEifrcKWDDWsmre36zfErt7KZxkjSUdgox4",
  "key19": "3BWDaxDpWYaHLZ8UgPovJdX58RJQC2X9PdmHUMn4w9NMjUCRa7btp84yHn5P5fAWqMaTd5pJmKJevogaE38ofqj6",
  "key20": "tTDgqVxChw17gNCddgvUnT6VRKSYBUnwNj7PfeSz7nY5KjbvCVaKk3P1cC3jUgP6WKCmH9tzQV2Tc5xWDNx57Me",
  "key21": "3mNYSCGuddmiDNp44qXmxkzxDBsbwJiJ4qzHCjt6bTtwBgYRgrJZzesHU6xiHeBNgfTQqUSzEyEMZo8BACD6X2mj",
  "key22": "674dG9nJA17yWdXcy5wSDwayoUVHcDeRr48zJPeEYGfmRP4FMHN4Hz7rAaGTnqxKDcEiG1dZYUEwdcrfQMAkGx6n",
  "key23": "6kfajbR9L6sWFfqgnHRsJ148amBkgxvwczNM23BMNSbT57jJnCM4vqyWD1iw86ZceRHcQoqwcbEhKwficHc6EU5",
  "key24": "2ktJqXbHBkNBXu8FYBSr3ScVtSmtXqttLuqUMaijQm9ANeZkyy1etuXLFPiELYdwnMb2qtRzZaW9T28nQehQCs4s",
  "key25": "4xVVgz1xbK41wvydNJwMoTQdc8iHECUN9KaavkeSHiVCNTDBBNxnCeFpKrpPqptNMczN5HX5fk978LNLaxcQYUf5",
  "key26": "2UEa3X3HhomC9igupZm4TKPqhqtF38WK3CcxaZgUkAQNSfugm87rw1uwqP4wYCMDx3uVUyoPFjqSsBHsQWWFMVMq",
  "key27": "5FFDnLUKtkoNGmdLwPnYKsR4RiksPZFAoP5MVSaxHN2ZPpJktxPq2toZPcyuKvJh3rCWP7fTSGR5PEfCoZZV7zeN",
  "key28": "514KbBxJ2z6eakPfUUYkqae4AZjVzhysHaqorxkCU2S3WtPd5ZkUKM2mvyYM83jZXyChw3PRa6cEbohTwdvPfLLj",
  "key29": "4XRdnxEMwYGEv9tC1FX9WNssgmGcJWe6dJZmJqGZimJ6SfLg8CddVHUK4PwUeRihrWL6x4sCydwvsvKcjcAS7CRw",
  "key30": "2J3U5TyXkoLGTPvmwFBRoERRoYUxZeo51wF3PSwT7ZNTxrc6vW89C8PvYUgvGQaazbuGayMNSBfwcq84TWL4Ys9G",
  "key31": "3gNqupgazQ3QTXFfaQABEJmZA4ekY4ThpqDSyx4xstTVdwjjh6k7vzfEns8aTVmxh81NQJtKmxqe8NBYGwiQrGpr"
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
