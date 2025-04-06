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
    "4x9Mu3s7viiDPZwPwY5pgSu7v2PXHcRyPtUqeFViKndt1JQX6hwYtum9DkZwqxv5T2QgYpsjcAdqfxuZyE59wM6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Snkowq5ECGQubooyD8Zemf7nX6dLsUPL8K9p3FmsHn6Ta9K3nwiUrzHLNtSLi7D3b8JWLRAh8stZZZ52yXTMnw",
  "key1": "2jW8zt8ajXAFhajwoHQUrZGYCWwEqrdY7hFMRL1Zwk4vf3igzdhW8uVD6tMQH28z95MvyFndz2BXmZnyL3k9fjzv",
  "key2": "2XxsPXUBjFmLENXqde2rQJbdfMJMquiDqDcsYq96y1aZquHwi8kE6T9c16wz3yufBsrRTxyac2Mukv7xsvkpAch9",
  "key3": "2hU6Q3bZB65TEApHFHza5REDHwNgYWvgqGk76XFFuTH1xUimPoyLJSx9RVwNtoPFF9jiUUB7Ni5awnPGXCjMLCK7",
  "key4": "49rTt73co9PVvaw3SQyCcZ32rdLPGXczka9NNEXmERtHG7f7CdZv95TryFuNM6UEap62aVCnaomyWcwaSngo6yPY",
  "key5": "4E7jmH852dH53gU2XZH5YKnty4Q7NCNAYHpNoZ8FyfCPMu8MZQtY1Ee6cETEYbdpFRZGu2ATGJXhMkQi7JfYKQUJ",
  "key6": "3XX7eES3HLontUxBbxB5BoB33ByjaK1jvxn8dLJWFQMVP321BQ1stgoCYsteGqsGDfC2BzHqU3vZdbumMKDmb18a",
  "key7": "27sC2HpWafuDL73637rkSktQtfkJKxhrUiynCjMdP9E8XhhpvXeD4ykDYXrKJtyYaYYRx6XRRbbkKJ6hie98ryv4",
  "key8": "5o5GFX5mpFtcVLHQxZMfzmBj39tRXaVZpF2CsS28JxuZY4qBU3GdRJy6DHJcQUD6v4ZMsDx3WY2QVwBML5G5Ci15",
  "key9": "5aFdYCYqxjKs2wbbqqxKCmNGY9f9TnjFkYM9TNuuEbqyEkGxyZBM3TND1Tt29wAYihQSQFpLVbQx4LTTf3xXnHp5",
  "key10": "2PLQRePB5kzM4uErCY5KhP3Qpg3swvBvr59xYsfKqXTDEwCRMAT6MgqW3BuoNTYh9M5uXmJMcsKXPr7cUbrbNgfH",
  "key11": "5ogo4EasZhQYLCAN1Cha9iXuwbR2kvYQ1SRwJY7RvbtLqZnxPU6H9xKgRypqbGXnx9RjwpxUT9AwcYZKHAVgG8CF",
  "key12": "3D5cpnbDwc5nZKNnCm8MxuNwnRiapNsn5j2kbKQ9jrmXtDDL3JjWEqADVp4dE4qUZKMgWzQQstPhrh6YjBnAqRTP",
  "key13": "3swke5b1bKPG8jE12HrWA9cD5YxFNbvcWKrdUbPgSFyYFgo1kEvp22Mh1ePnMccqevpWA5onqwZGykNkh8uADYSV",
  "key14": "3YAg1gwJQ6zrGwL6y8HmXekkTPXiS1sAzDR1ijwFeiM5bzN1gcpXMSuGJLLy7Hr4GEoWbLDaphLVA74nZVQJWNUF",
  "key15": "3b3usDEwCwoYbQEV9yPhkk1HcX7Ra3TJpEFvnKfCkEtwLxmxSbWUb4PFF8pKiaQWNXegngnVKLAEvqhbnAFuGsjU",
  "key16": "2fBros17aSACiJEZ5sy5JpoWb4o8uEYmkuyAfYaZNu59rDAo7KW4PfmTxX9CwUZY2LFULdx6scAJv1Py6mtrhy9k",
  "key17": "2oJA75PPK4ATVLjAfwkrEqLKkiy4Hm96Aqm7FMf9c3yUMECCiWj42iLnH6Ay9HhVVaufPzk5qZ3pWpSC5zvJz2Hf",
  "key18": "4vUbQUrZs7NusbwCSfQHPTiQz7PeBFFPbM8EL9hXB4bL4DaF75QXEjEfi19gK7Xx7Yg21JRpc8tStPaTmJfw9TGT",
  "key19": "3QEA76DiiGLjjPbXvfLqWZ3rpvfhk4vvDXAoPTiVMhfSYmBjurDCgG7oDDwKAnYN3wcTpapH7d6dxHPsEWgDR21P",
  "key20": "3cqmBtodxuytrhsFns6Ep4WDePkVWg8Bi9AtrtRhWUF9MZQu7efgtCS6aKsxKDCJ8E4yLCE7haYonHY9gbT7nJJe",
  "key21": "5aTX5vrE876YFqrp3h1gSwrr2ZqP8T52zM2vsqE75ZWcKz2aF31Z8SNt1M66rTQSvdRb7dvRmHZXopWiAepQFeio",
  "key22": "2EMSFiaCCfGhSzfHSebyyireCRvoZWn1UH8rFaNLev8uJsxLFBpmdyKEhyAsXc5jBZsv6wEEccGtopusad1v3zPR",
  "key23": "SAQ5GN81wEKZ6dSAmofhsmuStkDWZYcd9xf243ik3catVKcURWTX2LbnTmfXaxarpiT38jQb5zZcADSH3MYwAKe",
  "key24": "5XHEJ5sqgdxvQtsnKbHWm8fJrHtUMRew7QYPkhA4agqZTrna9McS5CfzVqRpvurWcL5BZ7JnDe7uieKhNsfhXrkb",
  "key25": "5iH2bAQvVL7UoradbWnEemP7eUrMMY3MAebEiahuq9SieNCP6V5JdRgLNXzXMfSqJiHoNN4563CzcDDQ4peqQL5j",
  "key26": "45Vj2RwgrCPE2g65e7W53qfCmspiaSL6GfsP3SLtQFMY2v2u6LJRkXxZEVzkeTwoM2Z21A6BGF17rCwZ93cxGgDF",
  "key27": "624ofzCzHrUV9zw7rA8qhAPoDrNURm6ehvRnHTDaW6jU7DGc6dgsSJb4ofXBjZfecVNr2TcRmGFEamHkzuPozcSK",
  "key28": "5CK36QeuWFzga1oz4GZSF8WXrR8ZkPGuGFcseRJYiKkeLiTjshxCfHhSLbsSrbJMbcMY3rWGaddRt3MBd4CdMfrQ",
  "key29": "4H1N6UXNtSyRfzpz8GH3MnULSTd2Mp2m9q7PCjfma8sUw2UE9YCr7FKY2AM7PNXezdpdQT6otUuoXg6jJANF8fTT",
  "key30": "5s6HQoZyVhZ8JDo9R9SXKj7RiJRh26wHCytWjmNCWwb36sX7xyGfopqk598q41qdbp9GieikjchsjZAWobqAQdYA",
  "key31": "Ry9WNV3z65KaRdHmAiyNycTYdMhgq747boWMZv59AkjDn79sopyKNwqnia1s3zioT98zydwAC1oJAmeYsLumXjD",
  "key32": "RzRX3Mwp6R2NSeMeU6YoPGFFqudqYLksrfnL1QdbupMuqGqXPCSA2bc7aAqRFNbbT4fuLMcNAuwggaEnW3jcLL7",
  "key33": "5XM4iUetSznY69Q6LRGNqv6HEeedK6XAstQvPExR8ZVPtqr4GQQM1aDKjW2QLPr8vz1RxFV9W6oTiT3fzqvj4zqH"
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
