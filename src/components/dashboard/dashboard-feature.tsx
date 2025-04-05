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
    "46KzbXZtFwLKfGSsEbZABT5hPPrhmpJ1xTJLAHt8CXPqPhmTvgx8bVjwauMm621SvXfHFhayCzkmvDBVCoYmYoi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNoXCgGtoGkqXkXVmsQHJ4NM1Rn6WrE1cn1crUS9DXfnKax8VP4uPKi8tG1vSjJuTEUb9b23c1RCJFewq3ZiSww",
  "key1": "45pXHXTLuGfPyLSguNYArTLPoK4MGBYuZYh5qq8JVSQ62prym5ecJr9sKVhuhZ6LbWKcUydrBpSRiKotvEcnjmvP",
  "key2": "5Mxy1HyxYfji8WVqTvEREPkwUzVatSbtRirp7iwhsSCybGZcc8X1Jncxqu4RHJkkRSaSuam8mZ8wEzjk8hBQoqM7",
  "key3": "5MqT1kePg3YzCN2aXvmLh92mBWFk443FyUwo4KDjfxj8ApqqcsagTCCSPUa1BvtYtLDFHpojNQPJ2oHY8pfCkvwJ",
  "key4": "45YwkfQU27GKDwXZwxHhPagbj5K2cCnQxAjD8qgbz87dhggaWEQiGcKTBBr2JD65aVYNJTePxDATF388vUveWds6",
  "key5": "4UJ3DPnKT3pKJLSb5tRqiA9GFMKaRQSULQo82cMSHRLTFHubRvVsMoZzkvR1X263nFxqrZy9pJRTCKrpTonthk3c",
  "key6": "3WV7gKZB343pMV7i6bbG5r7wQGK4sarY2yjDimFAHMiHtYwuvpFhASug8A4wznD2froNXB87TEiEx3EdWWPgD9yW",
  "key7": "5uGGn1P4w7nueurZguRkTkheHW2HnPksAcH6pyTCtvMcgPKwrwgLgbngWGgi2Z4UVgrJtdKKienyiZrH7Yjue645",
  "key8": "5N9sdQS4bqYYANGVYc1eAEtrziUxTjmkYUT5x8Tum4F8Gkuf6rbozje3EhSY8hkR9PEHUbNfUFrsGc32ZD4GM8wt",
  "key9": "hBXxvYSVuFrMrXhhWAJWPaMd2stWgghJBEvfyp5aHj1jcs6Zz4GV9Qz5cXd9qpvk6RE7tyiG96mXwjY2BxVghaK",
  "key10": "3PJTeNWzjeym6BgYEM9DYekBKC8Ekv8yjfFfik9WaVdK1VxKycPkQzZLhNpJEHQad3zmaM7f5A9bcpmt5TrUnaYb",
  "key11": "4g2ZyCQtnq5KZ8RVpV6F6AThC2QBzA6npebyjqrwiAWPXZCcAkCZzxvddG4j4ZAo6ZfEDPsZMwHuwMmZy7wJp3ai",
  "key12": "4umPW9CKxWMX43J4hYP8TGJgs2ReQwoinEjFtdk2tJUyZ599dHenyG3WtPPVUfjFoT3He4uSryGzXjr4QyjkkY2L",
  "key13": "5toLJJ3JXkRPYNAJv1NxNGHSDv7i7c5qvA3mLgeE8gDmRiPw8QW8ZGmccZSS4vSEb8pGLpcZHGRqMd2vydkx9NET",
  "key14": "4nZkhMCSWne1bGgn6UAcNP16LamvN5cxfVTHhBMHmCrgWhGHfj7DnV9dBtF4MxAxajubuCSxckWgqW52F6N2LUrc",
  "key15": "4nq4jKgMBtdmzfqDo6TKntWfJ4ef7b5TQUPH4PyW8wot3LDW6aLeFRAwgCAhKagzXH3Xi4SJXAvjh2jQXudFVT2d",
  "key16": "487rxY8jXgHyd8CP3Fo2WoHnCUXDbEviEkrTszxJYYBQczoz7YQYLS3nLQLTh5gfruosHZhiNCwQFKuQ7XsfG6E3",
  "key17": "41JonhSAcZhEqFU8sRoayoVg4hCSHtxmLTxysDyJDpgUfKZq2zCei2fdz7Vuu7Y8UecRSycANPvzbB2nXanGNGw1",
  "key18": "21NeK9H8xLqkuWvASAqEpUbA7jQk5ysZn9tM3csNukLWeRTpgL54n9wVC6Rjn2tCHgRzH32d5SMByyS6HQNLKCfD",
  "key19": "4fpuQCc4iK7wpFuFr5JUciNS1apKzKKzB416om4Xfrrhm1rN4jbMd7PmaRAqtTbSscXmrQtwctTKnyodLWynGuyx",
  "key20": "4qyAFTsxDq9eSvnQwXqyDQEyWk2Zc3LjvqEJJDHz3etNf9pmnFyW4KDcrZutUm83WHRhicNZWT6bAJnYkUD7LrFP",
  "key21": "3uCPvQ1ixnh1nGrr9mhBU9aWKGZPjmkmKxdJWyuEx2UvV7QxkuDadNCv12fyEs83pHJZJ2tMXZ1F5zEvRZGWU9tK",
  "key22": "5Sgg2mHKTovCzJ7tanxyDxZBZnLz2Juk6GrL6ierWYhe9Titsi2t3ZU5ZYZN1KCWG8u5Rhf1bGcdBcSZZjHQziWA",
  "key23": "2QZech8fXn8iQrDbDBFPpHkbArH6yQfa2aZKd9NVt7qoxqeSqag4xSyDqAvkxuVphCJ6fvqUXK3uEHJbmWn13P5u",
  "key24": "3ub1A8D84swhxUqGRkwvGx5gLzBagM1KVMBUK2TR2gtDcjLrpyqCSPVCa9B5Uz8dXRr4sJutpPYKUU5hihMtwGMN"
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
