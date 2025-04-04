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
    "5nfnurGnd8M2EqvxzrABcaZ88kx5nQSvbvqwSQYEtQ9Lx1Sa8gmbr7Xra6EkXSeV1KkQ9d3RjXRuceA8e4z3SpFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GbiEi4Moeyk6qy1g2b5JorQ595BGemsCzxM1fzGcnW7RPHjhGyJSJpbuwZ91AP8Xs66rXDiaBc8hy2VkU19NHuj",
  "key1": "5MPEjua6DiEKN4cMgRQBMBnMbgDFrtARdcXfVM732mt3KtFVXjh27CE8twpBeErkDBJLakHkoNENfbC3JcJE6qwX",
  "key2": "66XhMMgVJNdYj6BAhYjkCEUkV6krnAhD8dhbuCTbfgXbMVf7SjUKPjnm1f9aP1rve2WFooDsZWqDuW44UwARSiVf",
  "key3": "98c2eLBBLAcz8JpGJ7JmT5P7xHTsSPehtdDVyGGiZHHZ9KPkGqK29At4ipHA65bfV5ZWWKyX8vTZXa5N2kX7ZwT",
  "key4": "5Loe7UuT3cUutGY6tJqiUxTCRfUmxNQNvEfTfHJuhwUGoeKmy69p5W3vy2K1YxYG3zaDNMkcafDAtemgPUQu1TA5",
  "key5": "kXDDHfweixhCqyHyNFRUUTUzci5jFJdwBSj6mF9eTtne58sxYZnEvrxMrGskvde8TMTRYQivn21fzdJ8nkUM1uE",
  "key6": "5heGi5mEKFqydMMvgwNZgAHaM7h2p5tAipdDutgorkNN2uPwa5X5ZXd5Ck7nnDRAxQw7gFCEGMjg1XTWcyDFPgz",
  "key7": "9X4W5GcRheWPBrZe2xngcMrQ32ZX1KYJ6iziKAUxd3typjzgKhoxnCoetEVp1HBX1BQ9u9yqsajDuvdDDvLdWhr",
  "key8": "35jgS6fXrX5t99yDz8uXpX6ZzL5zqqeRFzMSXYwHjCbvHTmY5VqEQmebGhbdhQ377234Quy4dvrLrbbv55B3vFVd",
  "key9": "5JzwYJSQCcTQK2fEa2Dx6uitiaq7u39qaygzUoipuVfd2FXUrtKET1pVvKJUMA2zH1wAuxi1xTXCA4a8o9dPyrfy",
  "key10": "3CgCVmx1txHi8b45vcEGYaagDFbahwrc5WYGknXMQBxmzPNzuL5UpTXyDxhAc8nNrhebP2u39b7pN6PR4eLZoZQF",
  "key11": "5zRMHuWh1P7CWeDxLtHGBpVfCT2a8CTLuQDQMKzp4ugnKgTD1VRJQBm9s6HWzuBDz9p69D6vADVKF6FXhBxwPNmg",
  "key12": "4oMn5MhQCAfvJAJaU8QDY96oWMtnaQ4yTtz6uWMA9cWr2MKgxedNSqYzKD8vo6Vu9urda2dEckC78eihAUUZwtD5",
  "key13": "iwZJPDr5gE4ndtRst1VGU6ZYpQr7kmN8yXwHBRt7mQspn7Q5ZWMQ3jDv1E3SZQZfYc6HzF5JZ2dQBqj1tuQRvq2",
  "key14": "2LM7kNoo7ZTrMvyaui85hCQtdVCDHNV5jwntwVutVcEVDvT2UGHpuHhs8JpA2etPUyZsJbZf2ZTtMCC7bBimqXPZ",
  "key15": "5b2ZW1tEi9rrgRaAeKKj5KE5dCHrrkS7LdaSfYLpZQFs2uW2HhZBiSgUSLVn6N9CwicfgKJb1VzKV5pN4sa9q4dv",
  "key16": "66MYeFk9ddgyiMuTz6ZEwpjwnwamZ4qRDJDjSVGebbUUkgcfFiw3tZwCUQxreWCsFuJzRRgTGdYoBjAB2So3toWS",
  "key17": "3AbHxJjJKg2pGbpydiiFPcuzvit7n9BAdGDnaiSafikXSYoMPTy8ku5JP8sFshQrE5TVe9KFfQW79YSJCJKgtfMe",
  "key18": "BuC2aDHpnR6Uiyi2dN7njr9oi4c4x4twXSqPTboU6hiZ6HNbgPytBsgmFyZWtFAZNneWUm3gSJ9DoFfvwcLZmQZ",
  "key19": "3q7FwAUARrrGLDnEWKT991wX7ztdkPYUZ9B84pFYXy3VQ1odPYiBx6pDx5yCzR5eRLm47dZVnQoAGVvAzxsnuMET",
  "key20": "PwNEiCeCVJeFSe87aiUwDMmLsqDSHPikRSWT7KajMp9BfAL37qSWDKaMBNMAy4uzhP3ErfEWNEV4e9ejX3nuVUr",
  "key21": "3K1HHcBbJFdE7VWTgprtyRjCQBv4S478uKE12HXJiHrQrjgApbmPSHUhjN693gFtCRTVYpHBFbwDctkM9uAo9wEH",
  "key22": "3vtsRWieanzPUSABxMtnMtGy2bdKuSnJx1nbR2ewFGmamVnhhs72KDGTjUtGwjfuLeBbw8KyLazvpNjFYBu8PRtK",
  "key23": "5P32Psm31YYvgoHHh7X5tv1a2oLonqiuV7VaQENByAxvEtx9RjvhifHrd64ns5APcFrnff4ZZ1wK7zKeHHtPRwtG",
  "key24": "XHn893s1dGJbABzR49BPxJU3Jnx5sb746UXfecmQwvMpggam85f432pbkaiZ4XBZdu4QX348B1Zzzc7Ls1kB2gD",
  "key25": "4Lr5ujR2xTQBjGfQG3XNkR1MbNUJQvagp7eWpe8sA35N1gg8bUM3r766MFBuep4EznTrAFfvmePosSww72tsZVLP",
  "key26": "3Qpn8qNc5tvix8351sSmbDdSm8sEre19hyY9EQME9aLozpwmMJaXKrDKa4R2cCjV3QZDKcMr11twn6y8KuXy4v1t",
  "key27": "3xJYhaVdLPiQQgUNVa7Bv1oy39SnDmeAAjPghUtQRE8Ve63FAYgYiAwvKqk7rDcfEoWjFwjYRTiuQegzRbuqMcFy",
  "key28": "4ByJUb8BzXb2WVFS3eUG3ZGmefocGYT5aY7eQSSYrQYBfpNzc6FmNReHHG7tExjxu4aQDYaL8yB47ATTKZc4NVVb",
  "key29": "2SCVb7sjCJ4wePHQAebAMNNobx82HjbxTDydjev6kDeKTen9NLmKbjho8x1Zy1tPEg12n1umTUSkbZhPLF1UpbeQ",
  "key30": "41o367oYJ8xQsMKhFSdKHsgqSjUmwkyjqygMdD2HCVswv1fGP7s3i5ppGrWAVBAMw3C2zHUZRQeLNBd5BY1MzMLr",
  "key31": "5eJuB6U9T8YiycR3TxfG2TsgKRzeVLm431EhaLA3eSsTP9M1Dp9Ay5CxMd1GLxaEHL7MEV2y39y2ryjMMWbrrnz9",
  "key32": "2pmhaJ2TvaZ44fCDsn6TQMnqxWrZikafrgUjAZLvWD9Q5Zz8hXR6gTMedTC6igSg8NkftBNT6fn1zsvKbowpyXXF",
  "key33": "3i9NLyDw49XSj1mBGXGwkUHXrBfGz3yEQQdrt5vtNmoybbBrPciC79BN62YTFPKKoLGtZY27jmjChwGYTgAFNTMJ",
  "key34": "4JnbuaieVPjn7PVas5SfR7ZZUPCqDiXvf12dETN9mPKxMCFBPdicBu34JXUwKG87sZE9E9XYrBuVAuMdvMw9UUkw",
  "key35": "F8wrXMZvyUwoh8vNbFvynefMuUvjEg7ugunyabeWCnVecbfkgaoUeuYNcgZ9BT1g6Ccuqi5Ni7cVmg94qBF3DaK",
  "key36": "3dSvwdJfXcNTG3o8Uxuxt7J5vn2QETeTK8tHL6P9TyczopH6u8efkf5MRBGgpCK5QVVGryPftMNBfeNTNS1VuUnR",
  "key37": "4EDHSH6aTwnoBEZfnBAvT4ExgQJhFayYpkzKUtBgBaNU1gphbaRSBzNfcUtKYRe48szSbahq5TZab9DGyHLhgmth",
  "key38": "2gv3FKg81HnDh4Msxk4FQjDfFqqzjayxxvQT2eLh2hZSDUgYxYBLBY4f3uGFZgZdxXA9uW2WScAn5Nu1ThEeT5VF",
  "key39": "4tqBrKZAZ9k85ijSv6Zv7bYcZZ9o6qEsgDvebRfk8Xg7TpSCbi51NBM7v1zdWmwRnhu6zDj1J5DBQWy1wtePFuS",
  "key40": "2BxiQ5NDwZmaxZXsGvdFQtbS4stMrXubjhdXQtaW6TthwfrXx5JkUe6Mit8NLGoaX68AxP5G1vo1aDohM5h4fp5A",
  "key41": "5kZf4SibkxvbhnmL6mXTLbBuvuZS8C4oJ7mVaE4jKLuyjn3WkLduZk7h413Ztvws3iBrpKr22siSs9WNT2AhN279",
  "key42": "2mPKsKGKoeMCq7WAxyuJ5rjoZxgnWnetpa2YFRN6SEEM1QGApuNbwKaN7VEjhjiW1aPk3KYFeYktyGYrnnJfScZ2",
  "key43": "3mZ1L4VsvvgYM1JowJDuXnAiRBZTNdGzSsmfMcC2pDheuZcX4zDGv4FDWxVMmPy23X6EheFBJadjkkDWvvRhLJZ2",
  "key44": "oHYAgHtsNFix9Ry85KKEoiiU9CrFMaPpNKKzjrJBwy1hMrGdBF8L3K8Aq831eTmtSBWJGtkNgtokCFqjzGtMKms",
  "key45": "5yAGdR1jEW7CQXQNZAwMYE3QnriFDw9nYPz8dX8m8KpNkXYo68bA2oeyc7PTdu1QkTnexS4w2WDAzfpTSPoEUwht"
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
