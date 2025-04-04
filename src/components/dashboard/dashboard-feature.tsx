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
    "1ByjY6gM8E1Qw7Nr2xgi6eFvnUHSjvkFvXVQiU1En6t7EmKDntDb1jHCgA93trxRHiHLyW8ZgPVBHeXFizAYCYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqjpxXTUrvqvKCC6parTwRMd27zUEB8NrQwqADEuxgKYgkvddLL5h2Sfwaaz18h4VQ3ST5fACkJ5ALwHaAhPdBG",
  "key1": "4rzVMBwMcpVpKHU5Jsq7vVc1LptzTenkLX6cbnxLr7XQnaxYp8kj7md7p8PZoDyegMKfJnNdpWSBNSZwDFKYJr5q",
  "key2": "XP3KYRxgED7SwFC88rrKscrcCifuSkZNgmV2XRnratcrdi7i9s4tPzwLDud1hRmh811bnrnSNphKkkypJgWcdL6",
  "key3": "2Vaea895cXyMkJeJBz4uqpy6sRDhZ7j7ChEc4p616M9RpGGV2U4iybry1yuZ86muNPYpTCAz1cgoJg1TCePjE9DV",
  "key4": "3294NpneW1Uh7NWw5AGaJjhoKdveK1pRFrdbfPve6hSYgxeUy2N6DGrok9y6hCU3TiB95qbzEzHrv3Q21ibUUHzB",
  "key5": "4F3Taip7WCdeAEPJUPaLJJ2Z1TtUrE5zhbwnCv1fHxUeCCu399TdfnyuUjU2TwS26h7GM2tir5ed7ib36nppAKj9",
  "key6": "4pH1R8EYbUeuMTmoJzXzRz4o1nhJHhbRNfyjX8NyMJZwcwfbKvpUBeDDRkuM55SRcvY2wDRruuK7akYC2k5AR9ov",
  "key7": "5mZZPw9geooJDFF48azLqxBoFEzHbsTD2uvs1FK8H9Ly2KZ6PvkTjvGbDEfAARnRneJtXDEBz4xa8rNgTX2CtUBV",
  "key8": "3L133YRDJ73qqznzyX3xBoDFG9LJE9rYkgN69qb1YSHDY3ZwsZJZewTYkw22dsc98HMYLRdhh1ZUT3oLPLoEzN9D",
  "key9": "5HzwiLKbn6VKCKLXf4XpDrC3WXapKqQXarGzLKSNSVmHF5pQu1LhAy8fz8xRxWUdN2zFiiTeUyTy4puULTNAkp7u",
  "key10": "2c9mkgwLLeVoyp5T7faTscHU2FA1X1Nw4PoJDCpvgkJXFWAB1GTkdjjExUStb2Ar79tLM1Lvd78ocJdmhhC7KNZU",
  "key11": "dTjxkrpEatWKib2kCy1nksQcTwk4iZRiXyymPZ9MfRmuZP14wBHuiccmNFtX4NBkV5qjf5JihMQsfugFYJ69Ajm",
  "key12": "22u7zucq3io74VAgzLkkM3KHPsFTEED2FSZck5zsL9dQkUYbs5o9NdrJCqcjEonTccSwAPV3NnK3mGt5JzHQD4so",
  "key13": "3rnjGrYUaygre9ieNPKDcY8RPuZ1upttyL4LsVo3TaDaDRaJ1Re3TBPU7GR4gaAnz3idyucb3gXs3kMTwWVogtog",
  "key14": "3PeiuJcNyD665A6CHhtKCxDrevmHdysV5wANtWeZwroX5ffvbESxxDZK81oXK4xtiWw3Q3ZnS8m4BytqNNd94TNU",
  "key15": "4zyAByNCkCg4T45vwXA6W75sp1mHx7mDpeDATMqoaWqyYhLdckWXcpxAaYsdHuthfBARxGrtemsZUaB6arwbXTuT",
  "key16": "4Py5BNB8zi4ZSUptCGzvRTCSqjcdGzhEh1jur3aJTVau3BTQhecJWse8UzSLhiA89oaaUiwCwEVfhiD5rjKR8VMr",
  "key17": "3WCYeGF4gLpkNg1ptN6jXmMwBxo6dhMJSkva6jcaE7dxCjUoBynajXZK7Jz3bhzjwXwDLmbkiLXnhYxUq28x4exJ",
  "key18": "CqfptMTPE39qGmiKR3nQZhbuQrFSYJAqtpmMdNMBsyFafNjPjWTbLYmqRnrr9M9NiJui68t9rdd4WT6FBHBZ1aQ",
  "key19": "2iWAjEefZtK6Ap8FGcqWf2PD4chPg2gZT9D66eaXznpCq9SY3rQ4SzddZcq9QAYANebXuRetXgskMQagpveJnDB",
  "key20": "5QYgrwKTHVkwRRsMUpYEBJYCxkNJx4o3mNkdTvCaDvXmeg26yAzi7hHKEwLTKeCXr8KtX7bME2zcdApBidVuBqmo",
  "key21": "Mre3TDC5oXXHvVjFss5rk56BCvPQPagz2fxtWqc1Z5ENTNDSXr2GXqQ85bbrHk3bDN34Pxye9Yk9uQwJ1f6Hw7L",
  "key22": "34z9SQouD7FGLDGPTz27LWMkHGL3LagFE7edVeUuvDd7jrCnWBC84gQGf8hxPJePzGgB9CKsYjqEwo6CFN8KAM74",
  "key23": "642iHqBJHUu5zEj9p7jT9kpg7U3DT4KWAyxwVArrmGdikeMxqzrFJpXxW85RmXpzXqDsFuqmBwd6vLbPYTai32GQ",
  "key24": "2JhNqSKVy7jbjhhCjJJFgwciWQRRACPBFHLfukjUqamkcevxRQT3vv1Sy2XwojP955VLMx4zTwRj7do7UXPGTdgU",
  "key25": "22bXvb6pGKmxmxrM4wnAJeaisXmXz4qT1ouSAsG5iYiPwLf9chLrZC7mtUCwPzjWQ71pagfiWvQoH4kYqGNa9Db1",
  "key26": "2deqiX6aAU1Av9GaZjU4GoHSEPvFhkiDiBHgNky6ERvBdGRpioXYYHjYvLAFxeZGZhgB15nyASV2yhAMbXYBNnp2",
  "key27": "5YxFfvoxm46JU6QuuaW4QcZ8AxrVjtd7RJ3zk4g3QRiEikj4PcFs3YAhXBsGzK1rTWJSwSZdJyVGWL5MNL9RBd4T",
  "key28": "2vVubBWCMJv4wS9gsDEkhoaGAjQbL2BdL5MEMytuMnCyQNyzxcsTpkfp9dAJU8bCGKrbGGasgmtcm4WDkg1ns9Ht",
  "key29": "KonHvkYzkHgZbka2H9AKBdskatZ7dtHEKdXYkrzsGnSkqfLK2eCD7CHib6WJ9N3p2riJcp87Q94Q7AysG1qpqSF",
  "key30": "53aUqsSVGt9pERrENqRJ8a9zkCe4RHBoKGcHZYkFPSpNanZNXtkv8NTsipmLLwwTqXaEajGcJhwUvkhaiJrHb4WV",
  "key31": "42pSDjjhGAfzKZWZSBZxMnhe8FGa9hwV3uh2cTAppDzhhTNBEBZMyxz72nq4U4xJTVQ5HCoAMukHPVo6rHQgGFQ2",
  "key32": "2bWgAkpaRhTcaUDy2brrXGkg9JtsEEo9wRtnCzAMDudtpeArwM1SpoyCiXJ7aB4GCDFQ4buhroXpu7tZnegP9DLY",
  "key33": "ZSpMQ2HeYLnFvvLgSYiDDVr8vtEzovJ8FBiGA3yNDWrSoq2MLQhy1gXKJRaYKK8zTykFejjxNvcWiQi8j1Ru4Fk"
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
