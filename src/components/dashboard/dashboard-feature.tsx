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
    "LckGWsNkrtcCPYmzAxvR3VZ8pvKGtADw688TPECoBnkbASTZwVyd43hYjot46ThmB6wWa3L6AV8feifYnAKRS8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1ng1EHY4JVyhS9vUSxCNP43pNZXgSbnAq9xgibGwvkdue8uCjWvkbK7Em5hBB9pj3GMt6jo11qRcvh7QoWvYiu",
  "key1": "7VcZ5E12oiaZYXcszLDyivA4UrVeAZ4VKEitMMZ7c7joaeSPc4BhZ4kmyXD8KyQrRLohGTzDSWKa7hPhb2g8f63",
  "key2": "5ehKBbdS6XZtMxV2ADiCYqXdJu81TwvHNrwATDacFVjotNDM21a8tEQM4ksjMvUVQSuwz3XdCg5aXGRVoYC1iT3P",
  "key3": "412aVFvok9ZsD2pDPs4jtXQMpu5q6Co32AgCGqBkySGQELPTVQuQCZVdP7CvDY358Ppx84xjKdNjfQQXiAV5RJpC",
  "key4": "4P2HPQaEwsUkwhK72ZwSGmBizhqNfdh1k1FV1KbGeBhwtwaWYfroiMtWPgP6DZKyMtSa1k8kK87u4XXtXiWiWSGb",
  "key5": "3qWY1Pgy9KzKcQKTAGWiftP9anS3G45GDe7LNjixqUY74EBhM1vszQdFjR3bza6tntqoYs7HgY17ksRxQao9QSNq",
  "key6": "5S6v2a32JgLE5XV6hBfv6LUPEceibZsdbcvWzxZE43AykxMmteCqkVGr6eYMkzGjgebo6sodJG9NuXvNhhnSMi9H",
  "key7": "54mQBPCsiDHgTu8duYu4XtJ6erhCzF9sywpLDrBSmFs1HLK6AmFYh96aCaZ6s8Tuss9oMdGN3R5TisBYmr1JTBad",
  "key8": "3zD6edLJkSN4dCbUDCiw5TMdm6qqyg76mUaizJN56ouqe7UUe6JfLNHAXGkvWDgZ3nyA3vCUM796CfWpsktqoLa3",
  "key9": "3dRMfxrgsZgi5QnDZFoJepDieGufBq1Ts52mcneYHUpzK8uVERHYDfiM5QDXtnrPBhydguK2bTAmHFD1esSx9pm6",
  "key10": "3m2arkWtPGdDzT6idYAt3oCgTL7jV9tEVWmhpcgtrdUwPB184FgfJsjpkfS3CLfV91WD7AUuhYZTRDvzHiKLiAB",
  "key11": "5enh1zndB2oztcnaJ2S6wSFVsjyVTC5fpGJhZepVDGQStY7g2GFWaEFRVD1k5D6pEh8gfzHpHV1mtPac2RQAmHxd",
  "key12": "4f6wD8iYNqhKqWMwVPwkC6TNKCaG4iZihbWj2LMmAtQkBYyyq1GvPMCfh4738DC8MdDGmMzpLomMFB3Pts6ZwqGS",
  "key13": "W99GMdff4q9ChDpo6rK4J8Vt7zguohpFrUmHsQXZtAJQJ8VC2XFqzGcG9zXvx4BMhFxCVrcwMGv49tx93A2qjoy",
  "key14": "337hKVvX1pAgHr5cAutTHKz7Xsz5DfF6WBSmirrTyZUQYoifySNMPKbbkGfPLbVHQLyBWvozEDNccxijW9JTb74n",
  "key15": "41x8AV7oMUDKTWAKYWNVXaHnpJBEGHHWVeaCtd8yJVBTub5ZJEiaewxEBuzwAfc6NiZAzNgzfeWEP6gzwvRwCfSR",
  "key16": "2bJNMYhH5RNJMDsz7LM9ynPXEeVnSTwZZGHmyYmwJZQsM1jMsa7mWVLneeXcKbmoycQHozgUhWo5crB8x7LpE7Fq",
  "key17": "urygA8gz3rDTfeT4wyUYfb4tG2kGoTwPwtafcD1Vywkudm29YbnYkHH4Wv1NEAH7uqRHN36E7AwEhoYkEne2wzC",
  "key18": "3T642CVBPk4C16PMYotX3zCVRXZC7nYn6kXw9La5JApCTjpHApyVcRcefpRa8g3HgGVSwAaBVoJux8V7n97zDb5W",
  "key19": "3K3MX9cZxwoN9RKCdgvLYFQjJKbJCUft8AGwKr34QJt2HdraJQLXr8j1vo72Wsn6Q9piHjonDHDr5GPdUH7qn7xz",
  "key20": "4gkN8xGBW717KTxZZFHtsdNm1CuTaPSGxcueWvsRdRvhFPqHW7HTdVr8essB949oTbD3k8zpKRSpdhNoi6cmjA8m",
  "key21": "3ThsYZ2DYo6Hwce73jikVtkBFbrHYizUwGKvpJECZKC4W3gXwzWDVrEqSa7Vav93HFK6ncoJMV1LU6Xa5AQSEHsx",
  "key22": "5CfgzyG8MNKzAuwHcpw9sqgCz5aGJapgRMe792kKLDDVm9vo6DrqJEhMUwkxFdiFFWPfkWEjGDLiPqniuGJFkKZG",
  "key23": "54ennbPgeJA3wAgwRbbeYKh45dtyyFNLp6GJPdCaHqUykRLhm8aRxrcNZafXdZ5n7khmJSjbemWbmLLoN1Ubq4pP",
  "key24": "44gmx1Ndvf28FyWRntf3ZVeBTqYB63vH4dkKCqSC3fwLmtV36wWYJ14J7M99cTWSdNoFC9iBMc775YXUgFQa38Vv",
  "key25": "4rAJSbTSmESYdEPXWXkkN2WApUSdL1Y5iNVSmUoV1enUqP5KzfYdSXKjtrPN8kLMSW7wUk9CMo4xBxbiG4A1Xaxn",
  "key26": "3KFZhKq8gnYcAYME9bvF1r4Q7p31z2Um9P74behwGXscAPgNxNkVcGEwBRmWzAPpLk1YcASFMidVqZznY4P717b4",
  "key27": "dDh5XDGxK2ihiQW2jmCUsYzbAmkhLqMekkSufJJ75i3bGAmQdDHxrqeg9JFiaLDbQFCWa2wY25QcsBxFhzCd98B",
  "key28": "25vn3iFCkHvukp5Pdh9MR4RUWaecEb4Gitfrp5YY2eJRqy1jNnbAgBx7e79eNEXzauEa9GtQa1CLzZxLy58FMXWz",
  "key29": "5gTAZSXSB9ieJvDu4eXMtyG7JURz771L3WGx8TL8V5HQU39duvuj1c1KJ5TCT1Wi8xNRroVEqr9C2Lg3jtrwHf4P",
  "key30": "3qJz5sYWQeM8h6khfLJK8izQ5uUwse9aSgZFJdNfNwoDxAHG6VJamTjFiqTgZLJhGtHTWeNS3YDFkobbRD8DtJMY",
  "key31": "5J2cVkYWxX8vfCqo3TEBdPFHPLKCqMVSujRtxst9YqS1qP9snwECnVtkQZR4DfbbcHnrZwSUC8jdJcgmGt9WpKfk",
  "key32": "5pzgrQrAj9BqnWHmyKSZiVCP8Jdhm5n3qxqNvS8AkrqjwPoehzLVShocAwhDy3t4YB9YcVJEUVi1R4DwN7vu5n8X",
  "key33": "4XvA1hFikEJo5m7a34xj9WWX1yYRg72oFKAnp9MiyyEpKFLF8ttPBsrbW2zbfgyP8nchquZhbhipXah9fZs24UyT",
  "key34": "pF42ovHMfR382siCcYH6e3HXi9DfBhUvU8mCBPo5dCMwcuwo1iYhwLPavv4DHenCPWUYu2Uhf9czR2MNhqjMGRD",
  "key35": "2epHsHAkJSWvjorHj5nKE1VqjdceQBZq2fbCxYRcu3SDF14jRNSAEigBQckdorFtZGth79mDsVtKxmd5CYwuLGQY",
  "key36": "2AkEFPmGym5RFJRfpAKBmE5UsCkE8ck5AfZh4DDHoAVr75xWKMC3msJjstTSdK7DnVeYC9eA7NhKEfDegj2kQg6U",
  "key37": "2i6C3PiMZm4FYZe5Hx3CHwr8xP6fywuefDZyRnLaLCqz9MxE3Lm1wr1zX2FEGUcZxouKFcV2jeG2ceMhKsgn8e4o",
  "key38": "twLbTWnPzMPAkBVpQikaQiS2AreJKehsQkpqFpXczTx6vDxsk7CNLBF6Wk84s3iXrYvS6x8jZQGNGSQ9GNMYbz2",
  "key39": "5n7Wt625vTtQCwF6B6pMmu5LvXLVf8KF3bAjEqYZCjuNMe3NVNk5MRaZZfbRcK4bYBFJsQ4gqPV9CtmiveRjSFH3",
  "key40": "4icSGFNYwWr3vvqczyojtQYCAH8AgwvSLX3dju5z7Z4MNaGSEPqgYax7oE5JoiAT4GKwd9hbTKbKWtF1jxZj7AH7",
  "key41": "GTwDDL4CE1hZnt513YoL5Sw148sXRYp5yu1CfCxfmiBnjfrmr8QbH71R3ijL6cxFi13US8C91DvLEem3TxeGXEK"
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
