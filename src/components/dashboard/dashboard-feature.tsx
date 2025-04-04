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
    "4wyKUJRPpVBUoFfFGeLYmSZKNmrkncZqmoeK2pTLZZSAV4yfwvyTdiWhH2C8rMPbRpqfPyeCitYTwNtuj726uYJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFyPq1ZEus7h2RdHmFvKadpptYW21UVGgmekFfntTKYa8f9hbkJ1xB3CEutg99Bqc2oTKqf35C2aR4EahPyURFz",
  "key1": "5nDeY2iCXdBKrnTXAgRtnHzLmWVoVLmGMcSYKacJid6B1uQ5SSVpiVTtfBzmXsgZTt8B95qHvnPzE4F9h8xqpnV5",
  "key2": "CMcdywGFNctBmK3j7CJf4Zp25YgmR2MNDwUc55nNTMFwXsdP1pr2RbQce5G23gwkzfN4g773hMjVofGEVjUwRT9",
  "key3": "AjwqPyUESvGqmSmS1EfC6GcAPo4rLUUS4wf6V415vXYBEC2MZjhPh4u7Wy3DZ6G8D6FB8yoFZb72mJbDVfyPBDZ",
  "key4": "2aKRPwTmJy2HmseVBZYnHMeU1Lg9L3f9JUN3aC7TDiindysv7idWB8EchAQLEpVrdEwYjB2VPMYXu4x4KcGUbkvy",
  "key5": "3YCUSyVkCdQgW2qbrm29m7CB9V27kKi9swW8tTajL9zk9NrMKhCPspF61EmruFFtN3NHrWroSpm8h5seckUxTbKx",
  "key6": "2F12NgZue7p7nq8g8wYRFp6UGvtqUdfW9MuiUW2M8X1YHiBbx1KMzGzNsMt8Bs4DoyV5aXpMJ9rpCsdkywcBtynL",
  "key7": "2VBiiV9uSde4vCasH8xjYBb4et7hvHwnyksjkb813Aiizs4caBWSXBBjSqyYJB24eAB9seif4vnk7Yb5jczdP6XR",
  "key8": "2A7wW7pXyjtehrshenZoBxxgojkqzw2L9e1GrvATGshKMThwUQriLvdeuUh6S9ZVWhMAgCWYo6s8t2cVT7LhdJyu",
  "key9": "34NM2Y92CtukRR8Sbaq6X2pHeTCswN9uE3oG5oScyn3evMyxEmbntFtosTzwB7aPsNNYLS3EiAGSyWF2NC6qqio6",
  "key10": "4B2EFWLntov1iTNT1TCXBRY6tMKLif9kAxtSYa5cwxzSheBXqCVQQbQmjfLuXwbMpuJiH3Fz4RbEZrgZsT78Wrbp",
  "key11": "ssHibVVNPkLLUKg9m8LN8Ys2jBzGbB14EDxscdAd1qtSGFamKqXk1mrQUXrwvCGq27YZMkiRknYr8G26KW9VAZP",
  "key12": "26kSb6CpH3M6ZHQn4w3KVVxRAcVbcEL59ZxvpAb23W3Bn8wQPj7PfVxJeMo5FfEe5KLvCiPLidQQQ5SARhfJcN2U",
  "key13": "21TiBsREyQeVjXQ6aY4n3UeVRKsS9AvFhGDwt6Ru1fGQmAwuDfM7SKFfg2nbESw2ZmXYxyVTEmoYEu5FsHrpC79U",
  "key14": "2iyQHgGeZkPXeaudojxqjoPd9rzpCiGSk4vk4v15PWb6YXUrzyFbY5h3u7Lsx6XUbYE8GttyZVqvZj13btJCnWph",
  "key15": "5aZUznga4Y1Gx57LbwzP8fyYx7VBeYmBykbvwcXdDWncbE7SsV2zbmJE5K91eBxecYuG6wXevFUGBJk2LJrhUXWP",
  "key16": "5a8J1nJLsNQhHYefoNB8AjZDJELFjgd8P9pDfvbqDXy76BdfT9krUey2KJXUmNhd7tn4eMb9Ga1cV2xTSDqJXzDL",
  "key17": "3igf3DXPLH7w3gy87oYQVRoJn6Nm1zevAD7GkjyBEDKumSRLA4fMboRK1sYrbGTSvTsC5E3Do2u7CFArrxeSnR72",
  "key18": "3Nf5QC4K5mC3sDYZPf8s1grqf7MEPN9bbVqr9UycYaMTJ85Nrghtcn7uGhJoJxf7KyR2aurjDixobH3EFhLNx6h2",
  "key19": "4V6RZxoX1Tj6Wha3AdrBgLSdEBEHBJvRYdMrePTX3x5E62BsCAsfnrZZAkV5u4AfPyjWnFM3G4nPYfo5hzVSTobY",
  "key20": "3vW3t4g5mvLhyJ7nY3DYfwuVqPBKX5k8wTxqievhNHG9A5SZn1zY7uyyEuvZZtuDUgpUQruJ1kRnrwbELszJTkx5",
  "key21": "5p75h5syERpJ1ZbBSPxHPdA6CSBN4QqRjEU3QdDhjSn8MhgtP9kW2iX9EbSmXGhNvWqAt1bjUbkq8AZ9gJX93V7D",
  "key22": "5Wg7JcEcQDZuiJd9Xev1erFeJDn1WqA1wFbuup74PgG9v5JdbGx9F3DDKmpd8ctknwHHADRYqEqjwyHakciX7ah8",
  "key23": "5DDbnfymm6j3hQYu1PVr4J9PjgNFK6corSJTEnQ78aMeeComSveYMDBvbgQfCNQVtY4xFYL3mA2s3sHxFNyesw5C",
  "key24": "kKdaqkwri584SzT3rxgB73BYi8tce4QWGmSC99ok8opeMCoYNFQXReEDRoBTGNDCsfmRgnQxUmU5JTmYo6FPoJ1"
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
