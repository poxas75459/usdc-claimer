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
    "3EG4jFLzWCCFtbkfxAVfCB1YZkFUjSirwpdHW3xY8sBL2sorafuW9ikjDFriuB3zba9SgEnswrp82Pn33stiYLat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kar87offLydfza8ePhJkAXAiPpiyWk2X9qpwpDSektVJtSSLtDyQdPqUN6VbLjLsMmDtRrU7hgy7sTXt2XtxrP8",
  "key1": "nHwUX7QjAvdqU5tKpPXkaiYvjqWKFmTrNAEwyf9zrgBa7oArZciUD6dFR2mhAUQWJXFk7VtwnXabr3c6cTSExfJ",
  "key2": "48iPdaGVf4fFenBDXZv2P6HiqoJJ227FPDwS9t6ozVpTE1UJoheWk7oJrfb1YEicXQaAgcaMwvbDSPrvSDxPgpd",
  "key3": "586eKjQs1hjZ2iPHcnQ7PSUdeU1NBQkwsZXmuCfCUDu48tMgrshASTHknE1wyzaxJfaax3gUaSo1rxhwbqfXmYuK",
  "key4": "5aFDQCECUcY7Wq9HsEG6cgTxcABcKE7ZBcBCv1CuGq9ocdXsFmpjKscpw4XhczQRb1GtZbs4o4SkwE7TXZNQkUoY",
  "key5": "4qi8RL6eLCoYEjfbwLnwz24d5WoBkXXHUzvtMxCfExbBynTttMmdit67GE44GPVotVkPtVuaNtQufG1kmcKg1hKA",
  "key6": "2NK1pwqLRrqeHCM7jtfzsQ7m6RpcAhEn5mgNDgcRThNTYH9Nn7XRm1ofRr7akeFfgNAcmM7BSL9gRfY8u2sbqvHD",
  "key7": "2Aa6S2ff2VFuxWVsRSPgqMTueWgBtAzoZhvFeVJRaM8rviUwzUq71wsbhmNqwc9VjnL6bTkBKV3TbUFEhPUmkN5K",
  "key8": "2DrtdHtRMosdP7UhwkvzkWBRKbjzxUEMZGCymXnG4xff8oZU7Psjd7eaGXKQeVE9qkVk928uSQNAS1GjjmpKA3XV",
  "key9": "2jQhZMSPPbUZX9oWnjvoDK3Xx891DUWiCzc6574DNY7yUj6kGhyTvq946SSbCUzk8ATkMTmTaob3haScSxMqQLXf",
  "key10": "3XVWg45Kpkxwn7uYoZhyLD5BShcNHiF4jzHhtBcyjFHp8Domtt1ZFLckYNNWkwTF7pghD9EauNMGAWEr4qSwVXos",
  "key11": "3TZ7ViSLmvaP14E5wppFsrMqU4Dxqtp2zwBvCg4TmqNXoyPsN91J9R97vPEk12gM5f9V8ULzQX25qg4WtMy2Kznb",
  "key12": "3zpfPXqxvYJwrspgFjkXRPpzddkmkzocfv5RZA8tsaJU61ouuHUk4fs13JhYVe7ujUm4dPrJe3Kii3QM63PLDZoj",
  "key13": "Ng8nTDG8bZiexbvUkHwCGmk9h6mf8fNH2NyPfZigzhjKEwYLbprADkxPFok8uHv4PoiEEnG9to2GkjmVzvLP7re",
  "key14": "5bMXTsDZJ4tR7bAaXDWErT8mJ1wtbn3RZSZKiQqSp1jLzxpCxz5u1B28GEbWM1WTUVVb4V255SyMfksNCzgUXEZf",
  "key15": "2TLBArZqa6kDfGr9Wt2s9FKRKaRVRT5Pd1WGvQive8jMgdxbiKGNuuR1xt3PLeQ2qs5ZikNg4KLvXHt1gxUe3JkM",
  "key16": "33tXY8VRt4meT7DcbUeELkNKMxySMcyEHrRdoFK9LfvrM9TrB3DaWgLG2Ge3rQXHzU5dAuA1Vd8qdTX3gQ3jnJrZ",
  "key17": "q5uTuAaQLYsidDp2VYsAbfMRpMaFg3seby76NLmhyXixs44cLQZJhUjLcfe7JbQQatGF2uFuS3vvdgjKucfsu3W",
  "key18": "2nuapwqzLgq38Fqk4CzHqYmQreAEYHe791sfx6BffFWFt1Myy9YGSjkU9odn4C2CdTrbGj7iSkVmDdbDFBUvMS2",
  "key19": "s5A9JTtfgmvorK6mz4wjgrE59qapRPbMgHPbVZcfQfBShKowAq5ejgZAPgxr6T9kwrBFVbz4THCC7V6ezAmb9oq",
  "key20": "5q8CTvVrAq5QBdGBXGmmzbVRHFaBggsLSSfXTMDxCY9pVuh1eK5yhGm4JQVrj1ddo2VtjZsyHzCJuwadDD6P5xyW",
  "key21": "2NSSFZ9JBNLvT8hWWz53XGKftSqDvypNhfezYbXhqyqGuhdTbGaDnHdhyDDXGFdTwD7rJaVG1q5KRc5pSLJkYB4T",
  "key22": "3RYtABsoA1XUEzA7XMvdc3tozFYFcS1mMkjQABa693vu5PiHxDXZatBNhRaCA5DUtwPJqNzBqQLfZXzQWw2v8Mej",
  "key23": "58VVGjbNGC5kyoSXGKHhcz8wAS9SfF4uGtZnFdGBAdiAmanJnqYKJjWeEhthhNTicUGKaFLWGf2yjsPonETnPsYr",
  "key24": "vzFWaTFFYbR2Y9uV7oB8QfZMCnc6bwsEvevb5q4Mw8du3aUepFHZwo2cCHceCXb5DwBrvSnZ3PTUBtNcNRR7DsT",
  "key25": "3GSRX9eaVr8D677Wv8sFW5nebBWL4uSC31UV1sYdKZFqKJ1zwHv1yUwGy8dbKwFinqoZaSxTy3i7ZzxnCvMjKRAa",
  "key26": "ChVgpNz7kKmca9rA4JRYkPnba514PDs2eYJxiqZ6GMngNmWZCMYXYo8TQMuwkvNC3FQjeNb5E8otKoEMdjWnPGk",
  "key27": "3gQasYpsQQnAmo2XHHTLPJkgU33yqPpSG1ktppoPLy6PFbqXhC1JVUGxnir8FpKLpUVZGwpD3Epzz6kpkpG8e5jt",
  "key28": "4KjkFni3diN8e467fLdymcjrrTNc5vk8XBe8owjUuwyoQZPvSZ3gTKvSBzKbuErSFqKvBPZavRnGosrfhajyQe54",
  "key29": "tKZFVdhJTwMZCND3qihh4BUzNEVFYoi4jyaDbJDjxSpbAZYWFESwkgMxWKaPssHB1JifdSoq3REob22UpWgBRUQ",
  "key30": "K2wgizM9h3ErqVDAEfd6fStJgRjXfMsMHSEBzry5Wwf9t1Cvb8W8ogg8Pj4UfstnjWL1wbduQ7Dn7twzAJE8rRh"
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
