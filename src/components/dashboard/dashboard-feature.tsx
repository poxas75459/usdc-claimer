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
    "3C6hPELGpYq7CceLEjdQrP1sTxKCjGJvRFCmgbgQhprUXfCueXueFYWQQRpK1vUHQmp3nAd2UMb4KL3v9PupYevk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bit2NpiiBVLgua7RTyQSSaUbrxyhXVnTgW4j6vBimiBdDdza8YwCm8DpwDSimjs1RjTs81huAVDjzKMjpaVwbb",
  "key1": "5cbpM4Dk5yPJ7xgR7FN4oCfVvF652aUd2hxHP47sjtSqQrNHfE6kJ4X8eHYmMJQuzDxavKHabbzXkczp8bmSRjUG",
  "key2": "2kQrhcoWUu8b1SNWwoCJukALeoVs3PSeStTnFj5evqBxqwp6srRAmecsGDkTf8o5wxrjtdBg9QqnBVc15yutkBPk",
  "key3": "QggV6ShkoZwBWLhk6t4ncpfDH1ed8CzGaCMFUWkZLqC52G6A2ZjiRE8p8tbMBmSpQjeqzA8pmwrX9HMNcHdyhfr",
  "key4": "KhZ1DaYSxihH3WyW8YF7vEDbXyeayeY7iBzPRcgXdZFzeMoqnnCEQbRRgPn8vhZTPoQ3qB2iQegBv6Tfvge3n6p",
  "key5": "3FnNE583K2SQDsVRhVQDkwmR25KKH8T2mAnyywyed2HSNQRNY6FgtSKguubk6FKzWqX6DRpeoRqwB2f5kY5Xvt3J",
  "key6": "5wMVg9kziuqTmYCjMy7Lmm46yr15Yi2LDo93AWb7qDgbTCKD3jdCqoAdfai9qc8QXQizms5CG66YMJk4oEtphKWC",
  "key7": "3wxdoiUjXC6HuVcjjT8BpdAW3zYZ7Tk3c4MxPorf2tzNq1S3SwijVrA89DkD96bmuHNArFdseqQ4dn69ZcEMfr4W",
  "key8": "2779LnRuhxLmR1xnb2eo8qb1o9dxa3oKarr6QhfsHb9a2x4HJDJqNwWmT9v2aiB4tmz4spE2tRUiXtjQ1jMmxcjD",
  "key9": "56d9sCyykeBa5RsUpmiYMirEWAqi9au33RuBWtFDvKVVJVRAskxdkBWk3k6zm4HD4yyFgFwbju33BbKpKFVPBEn4",
  "key10": "56pK4JGbTGvu1k8D3xN9JKBxBduEZ7uPar8HZ6GBT4Zw9C1yRt123dyyCUL9kuushxfaownzEKGMSjtgmDw5fSTQ",
  "key11": "5N3CA9rYyRcBvAHbNTSfATnbP74BSAeUVrP5ZqWHpcqSfVvoTtSdomxBxj378UzK8o4hWWVLv9YGq98K9nFgGyam",
  "key12": "3bHGyeqjv2cUn6XNvNi2vyQXb6MpMG6NRXyTYdStQjhSyNY2VY7r4829junKeZaAxYXFhs32nt6yWbKZpHDW1c8h",
  "key13": "3gHuBSAgjreAr1Jc3vbq4cdaz5qLxZAEqXvXvmt7jsTovhLdELVVhVNuPhGQaBxnacf9RwXnEDQzLQhKvYDtY1Ns",
  "key14": "47hX9Ch1Hd8iUu4VC2vCSCLQ63NF6VxXgJY5vSiDYknv6ZcQzw79ZRvuEqfLsQ5qrzV2SPYEeq3n9EziV5EhUXE8",
  "key15": "2LKTh2PXNSULQL45FYHYf6a1YG6SA7Jqw64Exm4q6GrQaUTap6J7ofG4c6SLRwi1eEyXF5wmrsGfqybNbAqpYQaL",
  "key16": "2dL2zvUtAYZMQcKXzK9ZcW19pp4QoGZUAgEoXDyvEw8QG1qcpMayeuwM9SjdAeR845D7yD4zMyGD1DobHEtmfR6P",
  "key17": "4xrKyFm2nxUJkJxKqMnQbebeFUxyFaPRyqreqKZ2tydhuNTff66oJwesrLHxRJrHqo5sGChWNr8kBWamKirc6h59",
  "key18": "AyKNsgmqmopGxPNfmpHRQT3ZqfffHFZn8o2F9JCD2z2YmZ3z71ch2fG3xRMQXJifprEceJHZfcMaWrAKJsYCifv",
  "key19": "5zJCBMozfgFtArN5c2yupoYxRvan6AP4vYhAQWGFfaMnouETxpVb1mfwApH64MednPQUVy9oG5g73nTb8yJwJiaZ",
  "key20": "4aSjKMzAYj4txGKc92MxEWYkvgUeVHTrkHJi2vbfViGrVe2B1QJ46HMn6ULYGmru5JyeR3oFQpf6fMCvqww3ih3D",
  "key21": "5MUrbVQxaUm2eK577BSTbZH6LShq2XUUPiDb9i2jxZTTdz6LYemULdHCGdmTn3A6P2m5ABwE27E6LGWJTs5kh3G3",
  "key22": "HyAANgxJYRn8hH46avurhrvYvTGaXV1dJJWkPF1G3huRXE2fWqTLSrDQPwvwqzhM3xnHWocvAmYwNU2kczrw2Fg",
  "key23": "5FnCqMUEbMnVr95GsXzeDWLEEGWXUmC2XRbbLr4WBZAN77QpLU5kgRuTJUw2jkMiutdWPSnbuqeLohYkV5Tz1doj",
  "key24": "5xJBs9dekXr6zys3EGbZxAaE65AS2rXRxXkn5CSbPV3ZTYusYWkoTBEioQcamymR7Qg1ptqtPWUVrm7qWPSfNQ5v",
  "key25": "5Dgf63GT7Emn2fTHz7jnJ1J5neZfWYb5SJ9ZGEoADR3vq23XxumjfTXTRDusjByPNN54ufmdTU5WeviM1Ea4aqtV"
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
