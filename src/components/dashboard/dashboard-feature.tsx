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
    "3RUzQUcpSxM6p6cWNNx1i4ToyBYjX7XEJX7kgGZGH8fYKyY62SfWYnLGbccjnQdWNUbnJU43iFYB5NoYGyVBNP6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X72quqLHv8hJczeDC6pkxZAJGzEHuydrit9bFmUw3gSEsWP1Evd7fyxnNNiFzuyx427AiUmUAqKy6LrRN7zJMS9",
  "key1": "5ybSoYQgk56XTUJ6vJSporKLCqecxEsF71HM5BnQYc7Bh2ZTDuchiuhxJb5BTEG9nWELr9HbijhD3oXk6aRm8ZjP",
  "key2": "oNEk3LjduNwFLCKUoA95DqfntRxz8H3RQVUExpqVCLmf1fjaxqBaH4XbJfgjxoGEVv7rBA1BLrzF6yq942LyoSN",
  "key3": "3CAnn4QpW4QQD9QehpyDeWNwExN6T5pBjmiMWj4ypic9HkvLJHMXJSwy9csNdYKZPAKU14cmSFEUNNSvFkU9L4Ax",
  "key4": "4Qibn6bQhuM1LJacEnsnUzddZXycPSPBBzgjZmEZAhceQxYhaQaY6M9Bh67pRXqPvuG8mKe2L2px6H17LMJ3SG2T",
  "key5": "M2uZPGXZeBWdq9556xAJ9cmdsaB6Fvo8xcXiGFJCwChEDMuhWHtZvUcrh3d55fRUx6mS9XPp9pP1nNskeFsnS7c",
  "key6": "4yyXw2nUha5oXyZz8UvqDgfhLNmSgdu6QuwZUf8fYpniyoACbT6tjXtScCvM7SkRCGVUuBRSz8TrY6tXuEQbRN4T",
  "key7": "5jcaEgFqWdynCb93mFJ8YmzU3gph2TQssvMxPwe7wxnrciPGvQbcJA5RncaznFQL6wZUDaHu5hRSJtzR1icXpfMv",
  "key8": "UDc5p6waG8Z9RedrjvqQ1m4NY3nYzhbuKbCsZPrbwRNwUcxtTXjcnUi4vYt11X4fQwsshz2rCFZBh4uDbq4YcWY",
  "key9": "5fQVDJygtmGfhVhGR38VwVqFumKFXfWGg4UkUpNcHccpp827xbsbYB34zAhb7P3p1GHZizovkGEVpgEZx3dhQBhS",
  "key10": "2jeLqBMcstNFvjwHZWGXWcbwYwPEBEua2hPeXvXek2XZFXqCsxGXD5Np6DUU5U7d5yujhYTfs4RtHrZsZ88LpvyB",
  "key11": "5Ho1EPpLdanffJHLL4hTJH9s6HLAP53AuS9CS4ovraYPiMLW8Ypfazm4SKeNxAgj5HtPKYsmiHbNcG5R7cikFuTr",
  "key12": "5mnReUnfCLTM9VdRZxx6XDvze6LgTNZMGvprzD4R7zRw92pqe7pCCc7swWFmdzv23pRiBk6yb34D8PhEQYwC6amw",
  "key13": "YrsLYoQCoTLAUiFP3D7uJevXgz8UuZLX5hsQkVdTiXfMHFr11ubmzdVqjqHG2pt7qvMeAtpJ8hk5D5gFgy8RmnK",
  "key14": "4kiDATR9afc29qmNv1xnPN4DHHxcW2c2Hyid5C8f2DRf3aTBzj8xtQ9tVrypo1Mk2GpkbZ1orWeaeSh1W5nHxrAP",
  "key15": "3GcG3PNJDAP7cHdvUwtHJXrh2k7GUMrdUireEpkkFw9QSgwDvUVKpbGQSXDmqbUL9gU6LYdYw4EMMorKL8KpQbnq",
  "key16": "5dWo1L6p9cWbAiNh1xuNY91M4bEtkjd1Fb4CcyorLXrEcUh1TYCJnENc5DFf6TQj82LD3ENoMbAmnCe3JQT7YBHe",
  "key17": "2HbR839fsB8Z6B7zf1FRmT55rGAM9DbaVcXS5Du7SQCpWRjixmRmECuMsbHr8ntzmLtVhaCNpYHYgmfy1jKSmir6",
  "key18": "5v5pQUDPRrUkWojGEaW3AeY3zvjRaqkpmRRa7NznWPjJaGcgEVWqAoY6BdNKKdpKHETqqToUBNq7Tyi4n1RBXuCU",
  "key19": "3P9tecrqVrUaxxMTGs5uwcUyjvjtzhH6GFBoV1yxwQ7xsfCeBRSDrAZFjNys54DWQzFy9RHoNs9mDqRu1Kg86XS8",
  "key20": "4ZwQAFeKzyqkbQzU4QGPsUmgN3i9Actqu6wWriCWANd2TWKb9YVWr5oWky1ePZrBrRcUzNfi6fX6fr7b1Qxv7hqm",
  "key21": "5uvDvbhrhxWz2nCqPeWCSSG1E28wtNGjSnBiQBBnGHBbWZKf6kEJ8VNkRMy4wDMBLMQWi23XJxeUXMUhMYTAdbTL",
  "key22": "3HV19CMY3Te9RXikmXdpiumPTrhCzrT9MZzjJ2PfsE3nDd5hjGjvXwoEcwwjmhsJscNN3jHSHVfmm3hvjywhG7RL",
  "key23": "3bUpMYNKrFqY1HKxGaKSTFowW3sBZG1cow4V1gZg2eLoGwceGBkPLAVzhmwVAZtBzmJfyFh2QsjqxrmDLBe4SvcY",
  "key24": "fYXV3UwNAv5rfDAPmjhHF62S85bnQJhf2RWjhfNQzD8jmxMjZLjZaHYTCMFw6Gxz7WqXhfF4okKgPV19tYAAxEu",
  "key25": "5b2LePEzn3UVLw8hr7dUHyfHfMqzWq8SKdZFqZTwsfmzCEaMsatSsHGQNna76iUpqMDeVXhhpxJMv5AJXKkgNAf4",
  "key26": "2RGzD8JSQmPmCuoc9fQKs9XgVQfhFqvZpFUGW1iQ4d61uLHm6bKh8KV3CQrjmaKHc6fQyu6mBGC3GB2hkMShPn7",
  "key27": "zA9Qxf7Gq1rUhp7DSd9vPQr5ZRkTbqY6wdiL1YMdcUcmx9CRPAQGg9WhcJZoHEBQDwPoMWkxxUUeSh7T4uqaRuk",
  "key28": "EwzWRogSmhDAvARhzzUFW7tTQcBPhCMdvDJ42ds1kb4erPuMjMGkW5RuMYREz1Ajq9fXmNBHesRQYigCqc3KTFE",
  "key29": "4bJEt1TJkUP7hoJmbR1vLksKCdv7yvEKVXJ5G8JURYV9h8PMNcNjsYXY1xVTbvoGhPqHZz19tjbYmfEAwBL6RfsH",
  "key30": "3CcWgmqiT7eFoitmHuNTsGTGGiGaWZgWTxt6KSdQ9P3gDJP3GNy1ii6JUGJc5QUcTuu3KhBgm1amV8AKhXQpeLKA",
  "key31": "pZoGmMf4stpPpujHxanc9Sk75zqyiTk95UL57rQ9HMSxEUJJsBMadN2zMwuTrkVEeyeTw8JBqbPaLyTu3z3HYWc",
  "key32": "4KWgRr2zfnSELhhq3uEGU56StcK2Mr2auNAnbAEfFCrqs5FGcucfjZv3c4hg6XtesHM9QAJYYAT2KmLBCxzoeuJj",
  "key33": "5tv4wCp8C95rP6yWd8iPqeV9QZzz5VWPue3pGzLHUzMka4wckuvwwszwfAYFGGs8Y4NJ55Qbjn8FouZzByt8hVS3",
  "key34": "4DNP7BsctDJUU9oLYZXdKeo9qEfkYTFss7XtmNEr2tpbD8YLgwN2guPfYe4gRPjeQ82w3x2sHrfXZ3LgS7NfkiGf",
  "key35": "cZGxAufHS5on5vXHJPDFFf9CHVydnuwBxiBd19RvFPfimvLkq7bv21J5gyVADkWpd3ziKidhovLnWXN8KsmvwDR",
  "key36": "51HLvnZWtAJ7cto9e7bux8KvdYdSKP1sYNLt9VrQmjuWRpruL7VEhxkPVQigm2us4LNhA7wPL8ZqhaUAGribDswu",
  "key37": "4XkwSiZxEfAQ6zKbLPsXWHL1R8Gjp8x12crad1GawSoN23vGevRKh5oN1wE5BNrTpxBVQ8S9hLVdD48CUibPDGyR",
  "key38": "UemczyahNxRmUq7iPgzLNzzrfzG72shExXc1b3GgyucrBMCGsrkA8c9qSdEtTgqi5j9sGASz493Pud8AhFeHDLT",
  "key39": "5anbjbRLRP3TYqfGfAPbvDZosU4jvbUd7MsVpYMcCJsWj6f8i2uKVy6aosADbWY73q49QFvie6wTW73FVaPnKT1C"
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
