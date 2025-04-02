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
    "5SWPCBjuY7ZzKuFpju6Lh9JBNzbicJQavzsp9wYYkNUCsZHqgx8CYpLBh7zK7NWfH9g2JVoV1ghqPB25ABiyx5KN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXArsbThwy61xAGk4eZkF49BTGwDaBrTa6eoWkBChB3TuB9XYXCGDvFWGVjjMCXNXgx7nmU6inq4kurg4ntaB1w",
  "key1": "Rfa8iSW7ec793miQvhSigtYJhdcfXYnNmTscFVRwmGSSy938xhFRVViDPvmiMntVcEyRZQVVNBkk3DHECpkJXVp",
  "key2": "WE1YhsoN9wkyfdGMvqj5yHScSrYWJ19zNhREhwtgCsjZuaXvKd4J4zXMX6LYbEawEM46LAxNqAky8N6HAPaGoUU",
  "key3": "3DjD5A3SVgXnRHkbuVub1uxWzw7Koi725cjWhh3rpBagGL2ssndszGfZsAz5nY7grXNJ5pDmfQ3vK8CJUw13WLN7",
  "key4": "2g7dE5XC4ciLYD3yqvK9BbZdxCwDD4KXJQ6LeSgtRU9raAQjaKdbg2Qf1a3TJMpQK1bAQaoknDJEytYPXa78yEdq",
  "key5": "3gGza68riy8jevqSa9Sm7zFRdVA1x5uFdMxvaEx2h3hR7DWRzEEyFrsouNeFTmEGBKB8KKmoKAr5k7MLcvHeth5r",
  "key6": "2Ct58YHZHtJTFjxdmmUGHxWuJP37dTk9ZGSPGKQMrMZX9U1vBJw42YiruHUPYKVam4nY6WSHmT7AWYCTYiAf9KT9",
  "key7": "2T8FmYC1ZUkXu8RP1jZxZneY7kuEtUshxjtSn3o1KdyVnpXyHnJTnLdehgBtVGQ97yRjATNz2WH6Chp6VxqurpUo",
  "key8": "5Qg8uP9EzhLXTNszUkGZiYaAFW6JfYY4q1RE9HgE3hRAAo1S6ALqg56FMxfhXXjbNVc2wMnDhaj37XgNAhnpzHxD",
  "key9": "3KzsyjTLYBmBySLNBRP2qt8NCwfd7F8HjpRcqMNT47i7D2fA2m7QyyvNKxKNEwoEm1X2yxh8z9RN8qRLLCQ6j8xk",
  "key10": "4fXohuDhRq6roiR2cL6BWFFVg8vgqGnMMRPcota9ZsPBwm5nS6nR4NgYVkdkYPqUGShTFEP6mDJci9EJh3ruJ3az",
  "key11": "4vEThWae8ZFkL5M9BZiyRKbveowAtPW3SGhpbabm5rrhH6kgRFwJozZwsroDgxsbVDYTXh4pZPaNRvufneUVb9Di",
  "key12": "5pH5wGZkwrMfmYm8LecWGPKwZsCojtrPNx7SkZ5XoHgy68aGm3UdDYMVy4rkwXrR5JXeR9uGZqYEyxS5HsF7tWxt",
  "key13": "5x8yTKACy9na5fPbJzVFX29BCUUQRHqo8eiYFvbDKA66PDVNqp5FemjYVCUZTjP76MNFSfXEhjQxuncGwxJ435fb",
  "key14": "2x5L4EKgi8LZWv7uWNvrf2tdpYbgipMYmwccc4WkitCRLjJ7RJY83SM9ve7RpjjRa5qPZuh5KCoYvpXNkn5TKzLw",
  "key15": "wPS1zfFxEstKBv29ZtDWvWFEfkWMc6nhhWVuSzdhm6uLzY9rv9yqpWFbDcC2w8X4Egdypf6xkc2tY11J8X5imGx",
  "key16": "h1jTjQo1ZNK7yXuCGQG5u94ZkHW8c6uVyZoH6pbsXnLE2bfnE3nf93Mr1EXRWeCFmg4pxLqn4oFhn4J5vWMscsB",
  "key17": "2bZex6bmEPGVEyaGPnD7nvYkUgobXQyTmsrYRc3G4JhTDRCLmHSmpBnixq6QuYBJeRufHgYw5aJZsUQ8ymmiSF8q",
  "key18": "41BZW4iEnXRjh23hKWtzRp7ZQSxmyt7FziEsjf7En6PS3ZSvEj47AskP3tkEKPLfN9tyTTrUzx42TaHLpfqGQK2y",
  "key19": "VuXG6TWTrTf3t5GTkAtjUEjBTraa8NvRUBiq42TV5gZEVvDtvnuuBPxTqr1c2KXdUnbJ6K87fKaNGmeVU3F4MYd",
  "key20": "4ynxsbWNVE1niM84ZknJhymFPN48P2fMtA24PF9Gf8oyZxj9hN4fmPzuAoH1JsjivQZ5B9cYGBxju4R9u9CF2uh6",
  "key21": "Qnnu9JHJfcUqggwBjZqqD1dkkpBLQJLAC5LVWWwzN3XkFYX7iUUgZhgALKfzcJGGX9DDcrJyAn7mN7kvSLEb46y",
  "key22": "3fQdvnj2889u2h8z71qyn4aPDEVcswsA2o8hJv7Zo2oznjDuBX6zn7hhtKdLRsSo9e6KReS2GBfBrHmSCxkYrG4e",
  "key23": "5SyJkCrgHVdeJRCESHazcakbUibFoVvkJVtV3SVhv7PxbD92LdsfTDR8EfRRonkbFuSfhkrKykMP7Evw2ChgRfWJ",
  "key24": "5y2MyDi5S7S3Z1EDvPdyTFsWZw3yAgSMWCHcU8Zsyhk14GpEKvCtUXT7N4qX7TFSJvzuiBXCLk41hSh9NT9YCGhx",
  "key25": "4uYVrrB1og6HXLhPcMUibARMRRps8rNmxVoNxFNNZX84o6PTRnvxQ3yJvscszmmpeMqD6DzzKCAQU19XR9wPMWpQ",
  "key26": "4LSVP8dFxqHHRnzxejvkVV2ujAKQALrfAohPasdYcxNKkQgP1p6Bn5s8Ej52gcF3pXwLaxYXgLUqdz9K4sm5jFGb",
  "key27": "2iVVqs8yn3KMzBAoVwcgznwUsajCW52opvTJaiheDkowkMtYKugrhq8eEVgRr49QDz8t9TWsgqntrtsucWqgMrha",
  "key28": "4uD2xr4d6FE38AK2AC7UXEAw6sjCxJoS918QDYEY4BwhpmvAfYR6ZjNhyMPD9QCfKuKXNwrH4xgmAwZ8bs83xKJR",
  "key29": "5EM93P6WyMgVzdLcgFy5r2sGnEEEaED1GhS8bV513sF8L14k1a3yKcSZ8YnSVViNyFiwtePmqtf16JdMTM3CUKrE",
  "key30": "4FdNxfRuExEq7uCSC7kBFNBrTEs6ZZgn5XzoshWUjpbBZ3hR5Aq6SXGsaGXq8sRypDLndpKPXmQ61Hzag9h7QzR6",
  "key31": "4TZMWFyPVsk1d2PhuCHmLBATFkiVrsH6iGpkxY3SYAv8TvUwEXUp99ca2soZBDHCr1ujwEUUR8tavrVsxm2Aw8mS",
  "key32": "4gHTAwVxgj8EojzCWkYXyV2u2VDx6oFBFTVftwzCr66Uefc6w5ApEN5ESYK8sE5JqAZVRPzDTWcSBoy9p6gqHj6k"
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
