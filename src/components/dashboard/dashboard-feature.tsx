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
    "iFgqsHjUnNwaLEKzgGvzRqmR1TrzEYHgN4vGwbmgHMggFEsEfLEJCAE7KyLevLMjmwHEjMGhB3wPJUat55Xx68T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vcUXbJz1QGxqxpLUG77Q7ULLRKhAZ7wMgtK2pR3mLmUb57KTevo41H2e9qRHwMbxSFijw1m7YokDG93TnM26v7s",
  "key1": "jtCuUf1vbbx595P7e547VDhd7xMSURTMEJRMp4A8SGT3ukGx58CBTbwSttn4JCswp1Ru9zmSugABYmbrvipGAZc",
  "key2": "29mCDKeqKDaYZUZcHjSQTSaJuVghyVRFPtzr1Q62sSS8uscgwkU9x4CvKQA818AzHtwcmFq52mP1Z1gXH9bJQq7m",
  "key3": "5WZTYBNsh3vzkfr3kFedCJAUKc8s9VHKCsm1Yw6KnM9pvnim19e9cBzF6kquZ6FK554QRFcPzoac4neXiAUk8Y49",
  "key4": "DyGpCRMZMm79tR9LqQSmb2on8bJNYxMP7GAcErYaYQapLvYnuUbeMGJydDaiKNNLDY89s4bB4g9fCLJVVtXJGxC",
  "key5": "tLqepBTy33QSHmt2VCV3TjvUsMJTHtz3Gz5Lho92SNeBzUZsVfB8Dht9YNzKmvfCNNShTegaRZb4fKZzxTwDhBF",
  "key6": "5X9iR8gZDMgYB8VwC2DVxbqYgquM6igy887FjPAw9FfbnbF6k5cDxkz3SJwzXSRN5de5yR4hfjjDQKXkMKwTDyLb",
  "key7": "2QZhFFwyVHTRjeEA23FhzBu8bLmdR4yEYhhDVYfJUwgXVvEBtYyVjSw3cqwi2GXpCSytBaG4zToiNcMKnksqJuUk",
  "key8": "4dWsSnizh1aPhN227aJMJvjCLAWbegXbwjwLp5ynFKsPpeJj6wUpnez2BYgfzCtvjX84WFmeorzi1QnDi8a3JDat",
  "key9": "45H4N9guMcn7PsegLSn4Rabrq3VkbZJdx2AZfCZkE8HrM4T2zTSLp1NSxM9hFcsR9NAZwA76YwuTyPF4XU5dbCRo",
  "key10": "3LZb8AMGAe5gm8VeqU9nq8Dyj7hWjeCnJejuoMinFTM8qxRbwQF4LJhaQjhFTd4wy9qjPyLUBaCGXu2UMVxZ8zB7",
  "key11": "CbToTvWh9Yonuxnq1wLorcC1x2cPwP54ioT5fXZJxuKVcjXBUyENndys1c2UqZXu75W9AZEYfgrksRqcw8bf4eZ",
  "key12": "5KiT5ZzT6VwE7PvjrAuGHhF4ZKpNcjEnjuEpsLy8tTJFqtM7VgKsSQJuy6GHu7dDREzPJP95W5eoycPEUE8aysmq",
  "key13": "2NcTw3DPiueUSpwWcAgiPSYcLeEfDU6WmjmD9cjmdTWD4vivFuNqYFuPSAxK2grLLsgYiHcqS9ejWzKTjKkBjmfk",
  "key14": "411g9iA9hZKogSVriBUxZL9SZ4JEhM9nqQwYs28uZd2XwnzU8DBtsndE8x8zXKVmULDxXrvWMqvEJN8MV8Bsm5cU",
  "key15": "5RY6usfR2TCRjZHrgS5L45vfunwtu6VCHMyKaGMGPqdyht69g3Z1yWMdB4DJ7qLZRDqHETQG6ndVy8wvZm4CL9n3",
  "key16": "4aaGUuftkxWqntAUHWZZXMe1yMgiF6gSNwuM2oTA9Sr5A7S5MdQirWMigkvWMXXgSqSm3dZf3Zmp6z7MNp6gP9c9",
  "key17": "21PxS9tkCXZH22d4ZoDA7UvgyjUo3DdB6PbMVz2zP8GgkJBdvixFn9AZpCctUQ81zyNKAPpGTmEaQ9wtyPNv7Pos",
  "key18": "65WYiYcXokwSoGVSy8ASh3gyZ5L4dPNhj5wusxYsCK4mJW2kQaLF7f8mrT2wuvjzvdZakpcqPaLLH2bjytauRHtn",
  "key19": "3RXS4s8KR4xrXiP6hBHREatv2PWDZybLcffDQEi5Dm8k83YoinaWXd8kfQAMUZ5ChMzQ6yEmsL36eNByv6zg1QGG",
  "key20": "47foWWo3LpAMkrBWyTtFPSmWzP3ebWnQwVj3yQXhG7m1gDL9vmYjZ8L41TM13vxy7KHXqg54UaxUqfap1cFEqoaT",
  "key21": "28maXE7wGWP1NXwa616SGm2nbWoqpmS1Nfp4qoMo49vPpX66bDGgyzg8ETexwTksKRFdhNLWLrRRnasFE9MdWYqz",
  "key22": "3fE8FKDHhR3WcqUMKrxWpoqfbBTKq8vDghwdqkwToz5fX35H8Xj15yVg4adGrSETrDcmtcnsACavr6Ftz6Pw98p2",
  "key23": "57QubskUHiF5r5uHas24duCNn6Ln7e2sxHkFrYS97LwPvNQBeFn2mGxsKDfej5UKK84aeuNytZrkXbgaCBpseaBU",
  "key24": "jkcEj3qLPh7fi82Tn8xRQBVgFfby6ZjszR5R9bY2Kc2MYVBwXMGCkF5pkoYthvsqR8U5AEY2miBHWhScNn2u1ED",
  "key25": "3AbU8FGuWoKHipNA5VAK4w4cgBoy5nQDGi3ysCpPDPaJK2xhztHzhJU262KhMmkbHRcsQtLbR3EH4C4RxVzxzshy",
  "key26": "3WYKod71XVW35bZk5p8tbgD3aDvpbnY9umeMuERnb8Mn7F75uXync2zjKipfijcCGAzaU65upUGFZLVG4TiBGqJY"
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
