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
    "42d6YMgy9v4y8a5J9WqdW7yvnn2ki8CtcdeBiNteN3bywLygFGk2mPVFrMzDVgXugzf2c6dmxJUWaqaZnPS5DddV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPCyXFfJw2s4usaVFFbwAgWevkrLEJE2M1xgRRvXUyoCpkXdDzUaY9iF6SzkbqwViZHFEAWQ1dXJ5jfp4JGtY3i",
  "key1": "urUkgpZzQRCamHzR3ANtaGYdLdRa63o6BBQXUfCVHiUyPwLwqnPnj9fUvkTY6f2cEujiptkRz4V2wg4JJxyKKw6",
  "key2": "2TVStoACEpGWPAnMfQDt8jk6SrrskUwgAEqH99KoGtmanCMyBBDjy35xwRkmk5pnTQamPU9UMftFcvQAVVdQ9ht4",
  "key3": "2R6UjCu8CNXh2ctYYDpKudWHSdRViqUJXFprqE1F2kDjQHE7pjd9MVQkJnn9Ao8ZGMMthNycAMyio51FzZ6ewCEN",
  "key4": "2mGKCbvN2hFT2CN13enFxwLHfeHj6F13qyhdELUt38SQjJAk3Bk99CBZXdnBbTHGt1QqKaQAB2sUdWg4PamJ8amd",
  "key5": "2N2juFZ9PF4aiAiLnEe7vGHS99ErbjwM52g4foFaZYDXnP6tjFxqCtd3u6by4kp95L2ZCnbmt9BqUjiqkPpLhin5",
  "key6": "4G1rYRLpbhpNYDS223h6gNwovt49hAdxgZavZBsMVZYsR94KYu486pb8EFWiX48ZYCFMrmSZbwe8HZeEQbQJ4tar",
  "key7": "3MUvGx7v8bW9c1UCXsmEwFQkgvh1uL4GH9W2mo8iXp5Usot7xxcTBKcnW9fqMPqsRdQfL26kqLmyZVGYyPzSD5vo",
  "key8": "3XGrTjcCtx2njxtkgjQKfwCLEFKetpAfYyRDC1NywJwdDHHgLh3K1bS6oNfB8KupNWGfGFf4c7nEpu5YPtkUeiHA",
  "key9": "2E7BLAyudJsvMqfsJh3sRzj6hf5XSnFcxteXjYnFBgKamdt4FDhzNUJFzWTnTDCdNTRJaxQAKtjs6HK6rV5u7fRf",
  "key10": "3bW4pEa5kKoHPn2NB3AiaGq2442bG8EBtELD8bwxYDVf5VMX9616k1RoqRHXzArpXiqyidhhmvpK7CHQ5jwcAFrK",
  "key11": "3smifSsHx42w1zaTDSudfQDn8sjb2h3dEgThbsSsyN1iDN6QFk9FCUJhAiW7XMNqLqpCkFGFecMdhr34G8GVvdbD",
  "key12": "73sdVRg49bS4GjnR7EUs6aR8EU1tJycjPF1yUpJ5A7kCQYXhh2H4HnQ3EFiXiCP8zDbiN8BMrme13MCHmwyhrTj",
  "key13": "5jBzd1TPoysJKkWPq3FYcPd6KZ6WpNaCrRpYkgwrq1SU6Ubcb6HEEEkGczsLQsr696PEfTmJk4HSdhBDt8hKotLF",
  "key14": "eefWePn5Bfyn1ZhZjqzjvjoscTuwdGXyHfqZ68ZLa12pMdwvG7Q7W27FfvH9dvSepipKXFmuK9bvKfVCE8M7Pxr",
  "key15": "5HgGAW2BQ2oWjKiwAjRnt4ABv25WVPwp6iJDiKrPEJHxbktGSGkNmPyMqyP5WfsW2YP9hBDmLQbcqwPv5iBt9Pr3",
  "key16": "2cHnpJZ7V4hMVVcEUfQT7dUkxvHRJMQcLxGQegx6wi8VygpYVLLXgphNmttjpr5zTSzK2k3QCEpzXttW6EqdiJPJ",
  "key17": "GY7iFCmE7EtkQzs4aDcpc6UTEyed1dE8GxMEiTRPGWFjN72dUwvGvPk3vctDDYhQbArePbBBkDSv64Bv6A5hGxs",
  "key18": "6buuGmFEPWpbHFnjD9p4mQzFWEGCG2UD6N368ciPxeYTUUn4RpnBL5GQot4zJYWAHgaAYvpSJqoMTiQEgoYmB4y",
  "key19": "3ZyK9tTM4bTAukKFcmkj92JxUDmSoyR3XY8ZtspKSdarABpQZmrGK6YKvstidb3GGkebZM2cMkk1zHCHWwHDGdZP",
  "key20": "3GRb9DRcgQd6mK9cR3sd2fHTEjsEsZG1bpLckkECXQRTkhKnLr2spS9H4yZmMsYeK3oGpmkMfmVYSzhDAajTjZVr",
  "key21": "g83qsnJ5duQ4mAwWCJpq9umYfEqE9P7kEjcuGFxN5e1wYMaeqx1mYnbphgWT7AbZkVYDtU8a1999FmitGb7MJD1",
  "key22": "5rkxjL4XuiFxZ7RYF1AYWwC9Arb3mtERXvMpW9AY6Y9juRpvaY68A7igfjusRn26jZ5DSZUSYRA9pTXcJgue5qib",
  "key23": "26rUFtmGwCMr5AgwLZ4gVVAR5ff9JBcXbgxhwQHf3GfyCTUArjAZSYRDJZgjhtVzN9e5fdCUB3HCobzLQzVb57a7",
  "key24": "371B6Pos1fw93YrHV3AZYJQfmQrg8DCmJLrDJbWKqGtymyXZ5PqZwWC73TTbZ8Av6dbAe1Ecn4K1SQ9R7xJHzAsH",
  "key25": "3S1JTzXRDphQJH4oyH9xNKH27NX5oEA6Mj3ocGedBTAAGEaXmT3dLh9t4wHh3Jt4p5aVZ3hbkBfaZNJG332c3CPr",
  "key26": "4p8yFKdPi4ZdqhKrVFFsyeo4F9mAzeYVdRhhiYCKV4FjMCbDuCRNNVmudJAKtskypUjRkA3fc2oaLV3WNfurY1XL",
  "key27": "3d8Y8kLfLcinxkTfmm4h8MKgmBrdm7MbJcrQTasgNKWuzgY1ndqT6Vwxoc8pFwvqe6XdZs6HMCd65q6hj7FW1ore",
  "key28": "5yqnKbxmFCmoJrq5N15FbTnYsHoYi1aLqnwN9WRoqm9iexp466m7kaJu6m1Z2cLogDn1enNmVGhkSV31cRFEAJo3",
  "key29": "3zudootVDnNnJ5sGmDoU94dckHDrxtm8LK4wWv5zTsMSHgX84cbHAD18nL27jmRF32nEPmy9Zg4axJL52BMEnFrW",
  "key30": "iS8n8fMN8RVnbVQGsQ919FtQ78ePPxEoZNs569TKpjCcvhwJxybgvVJHpu5sZ6TXqxKNG9bTtfkr2uzWbtwMB4M",
  "key31": "66djWJwF7fX7nxmjxiM6WqKvdixXHxvktwYr8DcmrUGDyqDufMZfD5JmnK8MmTPUrGF4Y33XdSMYhtzpf8MEyzou",
  "key32": "3tyC9GGRhJzmhN4akJSp518iQxwRmgzcEydaZqT3QLNdZA8fPyFaa2srYJvK9CWH9UMkve8Uu5Ds7VYXqeVPkDDt",
  "key33": "3NGpcf8XFP4hMf5tzTZaBQhxG7dHMkWv8kqUPRKmGDTaTmGwKcYMdj11JTLeS84x6K4y1z7v64BGKaJansBh3jLN",
  "key34": "2EMTg4eYa8BGD4TohC1TdP9E9hzvfE5RbZasnNddZyD8CZWhmqTXUh4xUVaYHZvDtSxHbRqonTyi4rkikjwuxEJ3"
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
