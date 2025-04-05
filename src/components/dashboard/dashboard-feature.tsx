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
    "4r1znNJZhQA3ph8pVuxVtnpFy6XX4HL2YxztKwmHxtBXZNXxQ9kN8ST5momdx7k1vHMsd2BVCzVRDcCphtJ8TAUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWzZURauYcJttC4zGYzgyFxo6GoZ3VKmiDP4JfA65YFAoyc2kVqFBojH5ebBhp7w8SwkPuykwtzv7C5GDmhaRpV",
  "key1": "37QxdKCv6SKWQKPHYmsMUhZLJWesp3wkFxcDJQXPXx2FMJYD1hL2JDtsCN9Uy85dkbBVPPtZNoVxjmtv5hKr2LTP",
  "key2": "2CZAyrBQpYKx4koHnPkMnkK3Usz2DXzRwE5xAofqXhj3HGrHyLnEoHTUd7ExJBnyU94qb3fLLEi8boDFwmjTeXj",
  "key3": "2sNVWaCcub84zpCziws7kaZS4TivHpFsGnpoSASao35nEEP1ttk8GxT89VAk1VAEVcXUvNFpPEQBZ5PGuDi4EfDD",
  "key4": "3Cft6Keg7SBKA6QP2MUZhFJjJ2JaZ1NvgNyGLCw6Y9S76RLsNXwc9eDp5mZdnTJ6Nr481Bq7uUEQ1HBaX1V11tLE",
  "key5": "5XMio7YhwVpk2n6x9zb2t8eYjkgxAoLgfAaUTCjXU8TPttk7SqFcyYjzKgBYbEkCYTYYk1jAqgr1YEUjnkVp2fzn",
  "key6": "3rpkEnRPoE212cUx3BZfVVHmMBmH9jiBncQtCwf9fxnwbt7MVLFTLk1xk4ShaVzsFzqsGLuBPBT44bxbJ4qsA7Re",
  "key7": "Y2vR1BoiyNvRUwSiggo9BJzumz5GPk6bv5wUZ3G6eLdvFrBf3zpw7zFVNZJZPV7A6fq1nDr6sgtQwd7fQhGCnYs",
  "key8": "4kEiNrHkF7irtzpxFvaMyzXEGe2RyrWawK5fZH29UvhEhfZDjm7VeAWz5Y3pQ95K5gsb7EDpJwT47fagQj1NGtL1",
  "key9": "qMZtf2xXm1AiWYkMwPFQFcjwqNDpddpHBprTYRp3kXA1a8TzSMLRbdmMGatCnsardbiGDtyV2zjfG7MykettYPz",
  "key10": "32yfPjzLxYs5NAmse6NPn5HftrYub5wUwarG9X5Fojp7B4DqXiMxZUbPJDje13uNXbt25z497S1ewBtpB1pm9Hdi",
  "key11": "2Dc9iNBqht5y6Fk8cSQgVYtbVgN24r9QRGNw2GrnPBqErVfZiHSCJDSEo4wVZEQcfK28TCMrx35am4v78d2v4rAm",
  "key12": "4dpeEm2foyxs92ynvLptTvVEXjsuqLQqfjmCXMBrC2Sod47XpoJP3M6DtKMS8ynEZCfjmrZ9wqdpi2GU7RnHhpxQ",
  "key13": "3BYZf5ZtvYNUnKToe1vTzkPLt2FQHirgmN4NUW4ABbj9L1hWD9yPATB8JTbFWyEKFGLufnUL8nAwXE2Zd5weTsiR",
  "key14": "3az6Mdyhx5fP8VzDEPajw76bfUYtHWJnSfQvjyUgpStgzEpLd4HT7g5nqq6Zxr1XoCUHXCrrdfYKbj4ZBvavXA1t",
  "key15": "2z4gHooe6jdS6niD1SLuNR1HBo3VmdKvrkFjUyMfERd6hWhqmbkv9YP4izt34tG6d6CKJJFDydyNsseQaLUaSP92",
  "key16": "2mQone8uv9Zyz391JPR4sv6Vy6n1y9rNiZ63CaM3gAni9BGnQ2dCgrKcNYdhvQmR7BupRmG9pDB4UtQA1kePt5LK",
  "key17": "2oJbQn9HUrLCt5aTLszRVprEAueNG7NmRXg3qzRbMcBJC4TgqHTPNim8CQygsV1JKqcyKsRgYzUmSU9q6Qtp8qa5",
  "key18": "4xX3X5x67xtjC9EftQ4qnFdRVgojYs1KssEL2rsFaiMrD2inB1FnUitB4znjYV28uLTpU4vWvvY3KuQBPezy6RKe",
  "key19": "4Dewi5UhQrJbJmf46KoZvNdD1fqJjMrFG8DKDc9FCqByM7ybjVsiQSdd9jpCeUu93Y3QRMkpZce1PZQUTNhJuEM",
  "key20": "28g4TUa2h31ZMTPnKYFuzzX6jHSiWLLtmnRhJfDqTaNqQT6Qa9kP5uNwzuSHAQNjA9CRjUZHi6iy5XevtqgaoDiq",
  "key21": "5RRKjXkhDBUkZTkPtSjgY8uag7CUgNaqZV5EtXPxo51JfSkH7PvTvyybhpzjFKDfpb8NkeD9h3gCNVubqDVwFJoW",
  "key22": "5MzDYkn7CmpLp5WxzZoS31vvQHyjTLUQB8RCqGjNWsMUT3h1y67iMi3s9YWs5zoZnxVKgJSdh4j2hnRP6Ws4rbic",
  "key23": "3s4osoPQBqkApfxE4jiX4LCrUQBC4Fa2qq5wHLa9cEsA6rt3Fm9GYTx7PzN1iFmqHxELYCBod44wvdfbAR6EnAa8",
  "key24": "UoKtGtMVGABHUpfUcAvbtR5FCbz45Mu1arduEWmQeKKa3inVArPgUJ9V2ZFxow8Uk5918quTSi1hLCP2AT2yeSF",
  "key25": "3CDvrRurxdWMve2Xwy6S1uaktQHLcPmkzNQ5Cxtuq5ZkeumczEZKLqAYRKgNqkBJoGsRcWqy14fcgivePsyJTTBy"
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
