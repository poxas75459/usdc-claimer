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
    "3Vge97KNscvUhwyavjcD3m2qjczsdNgdKfkbp9i75QHzghxoH1nSknQoTyArC9uPoYmFrQGEf6LUMpNaBVFe4j2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJFJe7dmctYQWAVMPqLorCnGwPuUgqgz2yghPv4e6xjHidUGHwds9dspZQkAEV9JzC4aGfhcoUPDCPse3VNuFKp",
  "key1": "2qeEZWo2K8VecoG4Uw3JQEdSzEkFbym2knndtfxXqMZw8uGx6Lk75aYqbMdBKqSYEueqALKbfr9m46JWxJ7R96Gy",
  "key2": "2iog7Zh5CUESwhs7AaPdAPsoHGgHyvF12eGC34UL5V5YwYTnfWDNzMhRyCMJXi7ZYrKh5KTX8cqunTQ9dmrMRqZh",
  "key3": "5omZ4HWKg3W7VgRszkkFNVPmwJb1d6RUqN1j7r5WULYe8HT8BHT2dT19FvhzhdPtpHtBNbRtrrGRnfAReDcmakaw",
  "key4": "4Tn3Nk1FpJQtwXCvQ79moPCxa24NSmyqfLaJHMd2AVrBHPXwRroKnrPjhZrDsREC88nuARvRyNQf1WxQZtM4HxfV",
  "key5": "2CWrdkfH42n8dArMaLnakJXrWNFLdfDx9ku8yBW8esFZHmZJzR35dETBH5gjXrVjf1GNSLWP4gNBnLi6D1JaqPnG",
  "key6": "3prur39cugkwxVT1B8YcznGVsKKNJKQQc3SFLtDS2Bfd4HpRcWo6cCqRzsACrqpLxPh1AyU9iPSu7UAPtSaCnCfK",
  "key7": "4hDfFY47aX3w5Wq64uzQwaRUZUGm1cd3kUgbu9RyS6uEuBp4u8hd36yzHiHESGC2UFsBojjk9qjYXDVLv82q8kKY",
  "key8": "5ST11cP8c6KRz9tZJ538zY3fWYTo5zy8GkMCKnrhFc7bqurwa1jZqYM9LtQHDX6SJn8aZzEsrYEEsY4jnJMdBgYP",
  "key9": "5HjCCNGbK4yxzSBSLGCMvfj8gk4BZz6Djk8PpQit5eHaRb5btnavinAGFfpRq7ghYaCwgrcajhuif4X1zDZoUBxR",
  "key10": "3umQNhuaptZUfdfQH91K9CZCyP1TemfVinT3JhoMdYSsTvgrfNyvsZo6Ufwp8Hmksk19V3PRugssy2tmuWahrZ6E",
  "key11": "4qV1G3VXiScnWssu66wYimUSiAfBqqFfDvFVi5VNAx5zsE48tgKmewptaFqhbMY8F2vv82oviNmsXN8sVrTraLer",
  "key12": "1dHKrhew5xrMZuvPfcM35b4WHzzX4LTM3YXW9hT7A8g8LmsTuUyX3rtbSzDoxWwP1SYzB6dUcyRaUpjB6FsLV89",
  "key13": "5uPcVdn8WsNRgbWMqmhjCM4wrRtFKaYa4Zsrn9yy21wPBjTXADY1gkpCpL18LvYdX64wXM6DLHfRrqETewT8uZuy",
  "key14": "5Kq997VM6LRsohgVMuKyn3cUW3pCarRRrf5my5RBsRJ29a3fuet4HfJ95zcXPUG56Qyoq1vwKjLcCPiUqDSwDujw",
  "key15": "2MSiNKe4FurDWHSWytFxaN296PWn69wYvtcdkQKxY2PAeiH4xDKizQaPXNFzqJ25LycWaRrT8fm8hfhBipxpDRwv",
  "key16": "pdK16fcJB518wZSfkMb3UfQyD8KA4ZR4WqcA7j5ek2sFBJaCPMUXx88eaa4XRwf11HJK3FrX4uoW9zGjDThZKsi",
  "key17": "53WtSULspbWMsnLvkhEBruWpaDcEiYJxLwJqm1Wk6rCKMRJWh2m7MFHBFSURLVr9xXV48FqvU8ZhzzTVMQcCPRcM",
  "key18": "5siqiAoxucaUGzAy4xPh4FhnuhqkU2JhKuYaR8guP9MEKJBfV9xqvjZiw4mdNbnjPnh8Mr4A8WYBAqBLCGiHjq5",
  "key19": "36RHAj1YBQqx9x63hNyZYYweGF85cXudVpc7ijk6xFPeijGpQNQp98aQSDqDQcWELVxzaHrue3KxjBZGELbss79U",
  "key20": "4kF7Fzw1jZ8tcycdMRitswzS7nTyjUL6KSJMfjgfvnQrY1VP2MQmwaFFftkqEWFhHkgCxqGoELG5Am9FBDfPN7w",
  "key21": "5MMQ4yYJiQqXP8QyeVRwLcHPbhLNEENizBEabAyF6kSiL9JRkZXtJwJkqPXw9o6smGXC7x331k8QhDxd7kdwdGY3",
  "key22": "4ExBL19oeEaSNnEKUncG9w7h7Ym5BkGUNsfRkdnTwZ6mPtPHFGSjU8jp9vehhXNpcow6zgptcr1NwNAKxVKdSZqd",
  "key23": "8sQrPTzu1TCj8MinbnWRbRY9bVpWiqBbs683Z7fFyqk64rw7g9N65UbTQzi7jT8jmXHz7yMSdDV6sVst4CA2tCg",
  "key24": "5BvR6j77C6NGb7FjMuz5QgYQXbhp74yTj1h9TXfNgGehaPSwJmNCzrQJMDAasK7ZAuLEZQ3KCFY6VwmG2ud6WN8F",
  "key25": "5hTx1DVNo65jiHYZQcgW9FEccdrBKoLdSj39Wba2arZbiiJ179HCPZa9VpUi6HJwQ1iuRZwjiFr8m3D47mFvziZr",
  "key26": "3rBQMnYwRahdDMsnAqKey11LraJ1QqK4ssN7hrKRKU7Vj6XRHH8vWgYcfZKBuPiDBN3jGgaRfVM5TxzznCtfnoaU",
  "key27": "VgVWUaiJREgQnLXwJzdVV5Aj83fmjfjqo2no1XsqakmXWFJHZYKXhRBmxUCWkuRfwEvB8UypATQc4w3rv4c7tKT",
  "key28": "3W4qUbHYoR2wsegjqaQQEXNdgwugh8Pmkzvq5hQqmDRSxz3juzJHa8afoAB1rX8pF2q3FWTFxVQrB2dvrD2jTV9g"
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
