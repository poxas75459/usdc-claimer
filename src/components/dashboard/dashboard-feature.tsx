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
    "2966nRc71AtW39QyweWTH7PG1N2S59bMzEjWCifNamXGFHLUbCatm6zQvWJvqqNTcPzkMx7kpYQkvKU5CW3tDpef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEygrSgS7sD1oFQsSbEZrwi2XTXDq6CcA4rAJ485VGnLKzFk2QTVHu4kJRGJPoE1sFvsWFyBo3aZP6fCZU7MfbR",
  "key1": "5YcxTufa72e5NSiRJpXPRDMMPtW8HpAvmWAb1aecUMQVuu3KC5XUx7PFiHJrhcubWuSy5bSybG3UBHXyazAyJjsf",
  "key2": "5dnn4CUzgfqH335X929VW4ANHmpWsg3NZJ1vhodL3TZigYdLroUXE95iQAPNsyxEzMFqhMtsGhaG3GJtqTQj8eUS",
  "key3": "4A41snx464DRSs8xxceHDY15idPrHjpaQQ4GSbHaSHu3qAiALPKpULsoypXdjmojqXtuHGWYuZPJGQ4iv4bNmKxS",
  "key4": "3HnghbUtfMkXqw79cDy3d1cgwV47QWdMjjRVvfgB6ShbvJcqPc7rfe1iTn6A5KpKXFUMVxJG42tDLZw4B223figZ",
  "key5": "31gC45JBMo8dVcexoduDiqexdMVTzBkANuvp3AovpU6pajGvtwunyhBg64pEsjEJbcCLNoN13tSvUaf2cyaRyfbE",
  "key6": "54DDeDb7gwzUwUPzCGsqyyTseD6iJ6EhNpunNeZ5eDVbAQvGRpPeNX74D1yD9ztp69ppWk5DEN9nVq7jn3GKY94m",
  "key7": "4eqjNLquUpR6xGsyGGK8Y5W6tUVPSPc1mt1ygCyxix9kzwKV6kgsSVWtdK3dfqekxtAh57zdTZdAPxnBjkSbvGJL",
  "key8": "3SMpYDoPhG9PL8iCdKdATaUbjJ17VxYsJKdzwWR8QsAUnjkiCw1sLgm1ry2DxdRiYJ3V4FmGU3u7CyFE9ScNRqz",
  "key9": "3tQTcooNN9PYSGtpVkcujRnZaHYAcrXgyY83FEXd6wK8FSXMVx4U4WqpJxENJF73zi1MCMKkUv1gXSGuzYLTtCon",
  "key10": "iVVLrTycZRCa38Tf9amTTdxg5JW4HrYqPNJBkDy3QKX1MWHktvGCg2B5zYeahTTSCndSWPyXemYWX3aF9YreBPd",
  "key11": "5h3i9wrYgr5A6VBCCvBpa6aqWNT9yWGxDCvsJVwSw2aMuWnChBvQMZqGz2K93vy5rSkkmkvWfV2sbjKr1fv4RiUQ",
  "key12": "2im53kkBHbT6etXU26iJAXkS8BqkBragxbH9xcXW6nekSxedbBgydnz9L3vBtGxcpWG6CBpJoHDgN8rBEexJM33D",
  "key13": "4ptGFR6GhdGUJ37NRg2vXZBGxzsq4jDs2zbieus1zThGjLrQVAio52Y1oRUoDc85yxwdmwdG3gJnSLGc8yshXWc6",
  "key14": "HjiTteUZpVW4ecX2tDo8itiVtzhVgtd5kH7wxXDjDYA4dxeFHAVR5dvaztmmicqU9YBr4JKzLRmMx5dw4bRb5MW",
  "key15": "33WVjJg1sSXFFJ9ApzsKxEJUHyJATxxKThwTtRkVE8Mvpif4wbDmg6s71GyUmnmzSny4qojKWATiZkD647mcyuYf",
  "key16": "31ZrDHW5tTgaGP5m8v2CFcUxKk1RK6akuqD1wnLf8kMcC6yH25VdnwgbiEqopoXBWHKBWWiDHJUgidSrDxcQDE4N",
  "key17": "NhXn5kiWSAtKKoTyUcRnx8bJJmrcaSGonfieRsRpqaq5hQDqGT7G84c7RmuffDUa1dKVB5fckMBNTk42s5QMp6y",
  "key18": "4D88LG8Bs4SwqTsz47r5HphA9T8rVQCSumtJJgxceCJCS8dF9f7r9Afd6XSbz9Ax9geAzptYTynfQ16dYxXcVgGa",
  "key19": "41dnbgxdJUizKLJunEn8PvQdHrCAQYVJ1n3hTZMHpB1rfxhKKYVCLjHnjd3sLx6QDghn1LdZxzfGwu7ZeUwGVqUc",
  "key20": "4cGQfJrrWYJZPDhm81ghR9Sh6MoMnLzpVHHVwz8dAZ2SAEMf1dX7pFyjQdpy25SbeDvT8YkKdbqAUUoqAZtx2uAF",
  "key21": "5WG2GxdUxYpcJr7aat1Fz5sXPgvsNmaLUi9BvpT2Vd7L6hr1jKgwp3YYcjcMRJ8CZsz8scgKNYj4qomNuMnEbpbJ",
  "key22": "3DiwnCKDsP9zNxE3oRddJN5JDgrG9qf7JeMDni59trW2YrSzuAojRdUBweaGZEUyTB3a27mXvDDsbtLJP7osL6zn",
  "key23": "5VWzcpvZiUNBMyodKUUtDhUGxkMzoozUNrZbHksgcNo8jT4d1oX3sZ7roeFrgPoxDNurwUMmJrc5rSZLn6XfKZEJ",
  "key24": "5QarafdTcYzw5JmW5Gu1VkD7QuHTGBVk2AQ8Mx2aSPLk1VxXaa5dL6uDNMDmxKcZauDsvHobjsBeTYRwWDGkUKAw",
  "key25": "9oGAtZWfAxxCeRLQs98o7sVcKwYxECpJLX82KCFYgXhiPYW573zMZVSHVD5SNQF7A2KNFbxvCNwdMC1ghWoWJ91"
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
