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
    "5w8dc7xskvLFyAGMpuCD19wbtzdSjygymUSkBjFoGSgySShDm1NAhwTjn3xSZeUfnndVo4fNTgTye8TH58swxPWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ofcPv8csd8aDPNgsc5DTiaP99GLDrp6YhErEfFNFwatyPaYxYQP6hhVnPCDwcjNeTrS6rPN7QGmUJga9hRv9jxR",
  "key1": "AsYiV9Y8F7jFNhXDPk9VN4F5PqyHaa2cGkgd3ckYkhqAHpMm18zf791qgattg8R6irftYMTtmvxJbE1RyWEuVpV",
  "key2": "4NYnEbsZvfGEdh3wbx6Aetzy5GxKdCKhrpxG7ngDHbhzNZW9vPVgyZoywoWvu6UtUQ5kLmue3kREFuXHrwig4syn",
  "key3": "61DovdBc5nwJjuHLKf1YtzY7A4TjxF1axJEkbGwokD5M6g3z3nWV2t2YMcaaLqKkkPbxQeQ8aj3v4r2SWVkBsqLu",
  "key4": "5dM63nb2jCYPT9qnp9wGERFuY4Y3J3L2gjTc1SgYfdRFMmz737Ly8dopyGkz9wY72Tf4D35Va53ug9tKqdxXCQXR",
  "key5": "3XMqkMwvyDd3Ybhzs7B57Y8NtNfrCLmefjfh1PyVc2TUcjgwPnozAsGBybhEVMVLGvY4LiBgg1totjVpXWyvG6gk",
  "key6": "49MB7KvLpsV5NNAg2KbusgxRp8D9erayPTZiVGzHhn12KcwaAdHTkBPJfkDwts3oCxe2ZQMsMJuWZpYRGVnCQkLJ",
  "key7": "2h3pmQvFtSZHhmK9XqeGK68EdcGHxSkQw69GxtjmDpLwJzM5FtchzcTULDFQS6iS62DjvHnCRpVSjmCBdCWXahok",
  "key8": "2LQgf5aUHYgM2oM7f1T7eeaJXRoFjPfeJDz5VA5uCB1TARMuLku812XJGqtHErthiWXHWXcTBGA1Q5X8bwfsg8cE",
  "key9": "64ARUoZJGotkBUirLU4sGBUnQFnLrqbZ6KNqFhgNU143CQaFwKochYJfoPKTn1LKyvmW9rCphgD97XLiFdcehy4b",
  "key10": "5Prv8endCqCHSyoqfVuSPnb8drTW3cUfbBX9KCChmijj6JDRqnmZCqypZmoS9WihfQAxMVhVc24NUqoqCKRzYG9W",
  "key11": "4x9QzurqcjTVqnqdUHr597o7FFpVTzsT9wxcweMSMRq5kb929EyUVc2QGKaMbYvu5HybTJ2zqprXEGFqGc8FHNMw",
  "key12": "5df6PMS97HvFFoGhdLp2VqqaEyq8FcuyymjsopeVoa9RZsBXPaG7C7c4hXKgLv1LeX3xKrsVPkKknJV6QK5mexgs",
  "key13": "491oukSU1ibALoqGvFBBCA12bfoBMiAHJNzkpFZy1QQGiyw4KHM4YbK2QNhJewuyr3UUkgXdwfuDdBxP3qp87yk6",
  "key14": "oKtUPiq8bQ9s68cPCmq2kMRVH8kgwxdPc6NhF1M5m2Q24ehi6vfvkuKYtqXcNovUW2swDkqwAnica3KbAPZPZNn",
  "key15": "29pqcmLrZGHjf1e4rho2g7oc1hY9kgrxLqVUX4PnYw22WJz3tNmDpZqUQe5cdTf72RPyuX86hcjZ2LsY5wspHhPw",
  "key16": "uo2E62RHpSovCAd1xmg1w9TgDBh99bn9JiuSwDVvo3LN8juzPM1KvNxcaeMAUPCqd6ApDUz4quFtEEnAgNYieNG",
  "key17": "2Ninkd9keYXaoC8A4kZV76532LsZXonmbQ6MmQTqErRzdQBkZkgMdvaBwARuiciBJUdTzDfRUFwfNU2FTxtq8nTi",
  "key18": "4dW96noTpZg5gthJxjjr3yamiTVeRR1bveRasUBbpP8p56amd9y7Ex9bCRuUPjH4tFX4agbE47pCXeQcpjczAQJZ",
  "key19": "5yW2wjUKZ1R2374CZdhMktTNHpVoBdx5GvMRus3a8Ky9VfiJo7zFYKdYyNuk8qZL2MnPJMLvBfy2tQRCrZt9kds1",
  "key20": "6xCCiQBJzbaifVm25t8zKD4PKrSUR8JvNn5L37vqrGWMtKMbVGz6t7bD72Zuy4mSFCinCnyXLVwsR4wuKQ3Hsn3",
  "key21": "3qjAVvAQxKfrqX53jFvC3j63E57VnREUnG6dLkiwSLZHdzydkBLBokpVBFoXCFnUMHWr7yb9fj5nA3Q2FQqknuaE",
  "key22": "3kQNXs4jSzAjMdbyB77T45eVVKPGSLb97Bu5TohKouFLJ11e1fZYK81LfqNZSN112S2UvG7rUMtizgoXJos8uNu6",
  "key23": "2B8TumUvTYD2dWTNuZodti4QrFRBvUUkxWppw2EA8Kq4z8tA5QrB7nmMv3HKDV3LetYfCXnmcNGMphNzy4Y4WW8t",
  "key24": "56Ld5GS4PeaXSyRZcT7JXTUThZtmRGwvCy7ivEdxsGj399UWBC5nWVeqmd3pnKmH9UST2bXJ8XEgejswf6QGWYpB"
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
