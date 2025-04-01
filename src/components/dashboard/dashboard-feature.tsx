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
    "2MYMvUW97WKZLop8X9DWG6LFUVLikZS6iKs7nygDx8zPR3HReUtYUUX52LL64qLCKW5A64oiMzpDundmzfdtHMJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yctUgZPGmLqYLzrZiknFYYYo1Tr6foCAWZYXTYfWM8rsKTbUS9bYsNRPKm31XexhTuaU4hW7pii8qUDBouSfCbL",
  "key1": "2FjNXWMEKFr9xTFspmjZaS7MKyY8WzcfyWSb8Ft9VWpejaH2nEgySa3jkJk7Fxhn2f93eHY1aqZySvCStssZq8d9",
  "key2": "4rQHYDjKcDKEsobAzwu4cCBbmZfTFiL1KufYsZWg9s3XnKvcStViL6dWK17K9zGwthuq8XnNiTmFt9WNs4zwY7kx",
  "key3": "2nfLSpNzLc3gDcxcrfbUMq93bW7cdPZKuFfcr5top9kjxN84hFhThLDggMHnHKujUjA1cqcvefvFvtLQXQXBu21g",
  "key4": "51gFmm2G54JV8XnmKFv6LjcxHtbqrMxg2eQNsUzkTTeGngpmYL8dD1HCmANn58uqhga39WEFKn8gxUs6Kwhau4jb",
  "key5": "5pKaQtoUEmYtD41qo7mFEzWyCXHGG78mdpX4q1hoRBhsbuhsRYtxzKLafuKnHj291k7qcbkfzZgHk2SescjcJXHL",
  "key6": "22W3ttrSbUB8XRjE2V811KWYQ8A6b8WQVQYT9eq6qgLoxMVJGcpYgsG2mg3nFUu1KcHxzuNW4vKBSZTpkcsWJVuX",
  "key7": "484XTteN7BZ7vHGamzKjZg6D6F83koJ8jB9qbfZUwGhahZNgccikrG6n6ZWzKe2mi8oByjagyuKJVwhUcigxR61i",
  "key8": "4AymrhxYPir8Bu4yY24cidvm5osWu74pGeQRHxoC868jNnRe8fhGvjLvPG7nF9EemUyQcVAoqWrPgzKSapTf8VJT",
  "key9": "67JwM5FUrNifkXGzdCbxQ4ZaMeeEgJX4VmnBZR9ne4BfDF8WMwk96XYhQZDgzYa5QUAZw5kAS4T7hPeoQ7pz5ebN",
  "key10": "2wz58PoD9T4JEFWLE7r2ZHi7Sea5Q4H6vxvYW7SQqe2rfGgGtWK5ByffieGxinFxJzh4XG9fmba56FfkLaPMw6cN",
  "key11": "Pj9m5uKk1Q71PvQzK1ajer9Xo6CdgRW3J7vCcoBwBkpbMxdTfdn7sadfN3UBdACvPFuuC3ZUAjjdXCyNmA2uVgw",
  "key12": "4AAgtnqTpivT65EH3xsickHKCmTVTg6vvWGm4qFiGKbFBbUHEGF757RD9JyoPpsEFTYp3qA7eoQJu7TzZfNvLhN2",
  "key13": "5R9FiVB1dusJsh385ZFGFZFAjjccYtdkTSzvTND6CjkVQyQ2V1tqacC4YhJhvSVGAvL3UcQi5ydf9MKepuZyvCfw",
  "key14": "2nwaFw9uPLJDoov8FtknST7PZHSDKQpvxJrhH1wU5KeHXZeUJDzvS4Re1meJa8VcSTCpEyBtkUUSmtbL93wnRQyy",
  "key15": "42kcLhDhQzYXRRtTJqezucUZQFquDSiTmtau5egcVi82SXKvMhhfZ94Fvm5URekcJZt8tEcaiACZeYt1oRzpSoBH",
  "key16": "2RCNyoKgEabsesFAMBGHReX4nMZBNvJG94Em9cBy5s9MUr2o4UTUSKj1zsq2jUNagRum3kwwQmoFef1TbhbuSWpm",
  "key17": "2SrjYTPCq87HZyfe2A7ZgRUX3usfbHW8hMEQRDD7kFfBpfBt5YknW1LgdQJeaob5t6vKpLfpJuNG5Qt1pM56XQ87",
  "key18": "2DM1DnKhECyBx4GTcuw7g3wU2cGAS4VY7BLfokr68FYbidcsoJ6X8QCGddwh5BNtxq5gApzXXDhkpbd5R92HTmRn",
  "key19": "62LzTUKmt1tzxDboPkXFgFL6sjwY7KbXbL6CXETsuVKQdQ8GF9q34uCDLNNAVe49TAaBCnzV77YKT3N9uyR4xbKx",
  "key20": "2RYHk886jZqA8PFEGpJfc6oaHDguw37RoJdJBQ5sPGeNuSSW29ArL4GgBLnkCWektiWZqkQd33JwgdFwmGCQHCFZ",
  "key21": "4CktQjan1rngYVD3P21snhN8S4iTPx2Tubve2KfhcT26s7grMqwMuQTBqPovLGh1Z7FniYXpKf7hALxnxEMTvEEn",
  "key22": "5zvtB4AM6GWqCcJZnPHYPSwj4eBi6csBiv1ex47Lq8puUwPdHBvu2QdVy4f4cd2jSeT8h8Qn1ShV9YJEvVcNF5ah",
  "key23": "659tj95aYvcdZbMs99hz3SGhXifCKRz1idQJgW3fQYncDv7oNW6dmRudhQUhiZJn5nJerPjriGuEpFyb5t9YagYw",
  "key24": "geohLNAy4nRYuxzMtoSeej9qmy7wnmeKwPnWb7VuUNVYxYu6VCWXX9E1vbt4bN1SsCbKRyJ6vw58Ky9khwy9F27",
  "key25": "5E4nUzCmEBsrpAgKcoyYrRYLyYurK8BecyjCtavk58jXexuBL8f8mRvtaWZo4My1rLe37fo5Y8KGFEH3ztdrpTsn",
  "key26": "rFUtPRkiKAckPGCRjrQKqidou3Ue2vY1Zr6HobU1MtsPmtz2DoJRVHfVByfsBhApYU57qz44QuurFRqugPLJhCA",
  "key27": "27uJdkrPped4yu1yYy2cJtm6rDYJSHmki9zbdNTbLxPTcF6zJ8qYna31QFre84Qj9XtHy541w7jPizwMgr4YvrD9",
  "key28": "4ghiA48w2ScE3j4r44kw2JCrizmchHT7pdoy1DMEaYcCtrgtKfjjnbHtGFtZrKpzvmeeRhKAAJ8PdJdE8uYsxdei",
  "key29": "54kUyyGf7jpDMGsgeXu7ZnEF2shfmbhwLK5e6r4gZgdW45p3UhicGnxvNKzHYnu9WFi4WUHYup2dEC4z6TVvdXyW",
  "key30": "5cJKyHc51SdwjqHDaLRXYvWs6vhTXGSkW9RKVWu3rcHkxQZH8NazCYDSqNZ2XFhdE3bmZFHBE3h2S7RyzMnh9iQ",
  "key31": "3D86cjfpwVZU9oeezcWL9KzSzDteBFcsDCB8QkdTq3H6c6QJpJBHZiHXXJM1YAdhACaZJsFDZuaqF5hW14dHFtwW",
  "key32": "424Xg83p77W5uXRuafV5iovg9scrJN5t3WhnAWLfjuHEtNDeWYne33eKBr6Y5FJTMMzW7xpaWqbrbFenvyziNomB",
  "key33": "2V8hex8sUEwP8CtgztSAMJVrQyV7Sm1ybCw72Z5ULt8ea4VTuZoWLNFj4HYjoX7Ls32ueN5sWhsMuNxoAREwCCS8",
  "key34": "4q816jU1GYgY42zXPLBWnmK8uxQ6uDfvitKe3RJJBQJV8f4bsdEJY3SHyGodT7uF7vtgbv98B4EriJsPrHJYQZv6",
  "key35": "35r7fS4KFmAz5g5zKs8w3jLZ9nJ9h4ERvYiMsyvCSH5oBknVwgmn6nw7aygxzG2qjUHeAJzwbp5c8oLcNPMEov2V",
  "key36": "3FK5otN7oL7fs8SzQEi9qRqztdZRNMcDicXzLSYxcLHhcp3AXbg4QtqdQLpBocQsCxX8ETrDMYQWUzMzjotanWDJ",
  "key37": "2Z8R3URiWou7DAFrZSh5Z5KFw8q11DBENUaS1Txp4SdCeyfh5qHSDs6PLpLLfMVxQQYMpgvfeuoHCm6MH4XuWD7i",
  "key38": "2upvrcDv79SNxFCHyDWyZ7qrRzLmcTLRM1HnGuNcNFYjrW6bTpBp7EGCmmp65Ds5bjjDnjBV2xHnZdYpHiAH5PCG",
  "key39": "32UPG3gfee62VBVNuP4MnyJCZruMj3wc4a9GY39G58AiWQXLPiNqeLd4TjarQ2KjDFiki8RjdUtErgG7bcSgHrXP",
  "key40": "3kCpsZByso2BGcEN1XYwyfaPQ2M9zGt99w2vnoyDXgH4byZvfZ2kuWYjRuEHysCkk9SfeL8bPZDkn24Jy12BLpCq",
  "key41": "53h4YukdkjSPpfRVy3Qfmr4LxBi8UyVLAkgKvx8hzkyzvV9Z8BnZuWdWKXLdN3s6Y4tWNWm4yn7vQ6GRrEBanY86",
  "key42": "4ogofEzGcMzKV8PvubTVu6ci7NGPzH1DsVrKdpPQppLBT4zu6CCSjNSrgrq5qRBqQe3J7qK8wLJ919Zg3ZBoXd4L",
  "key43": "23owWxckL38fCWTgbiMEzny9KxXQ3Gdxp7Judqig8k9MXCRA5ifKgsEogf96NKJwdTTamfh8VVojBq221SZCYeUg",
  "key44": "4psrPZS38ayrZ8XKtZtrWXkij1Q6JV85evbysSM4CjC2u3ajCfuzWCekQ9JjrEKZUTSUw2xNpZ3DgbwEwGRRS6Ro",
  "key45": "4CxvmkVGuFJgWdXk1Q7y8s86yoZjbEzvx487cX2mmaAB1xJEj3kH3SL8r2pLifK35mLNbcoxM9RE4KvmoAvpQLf6",
  "key46": "4kAzySpg4uHShhgUeMPNLUxeQCK1LurSQMsy2sx4oLGBjFGPbctiCpHvbAYKXU8Zt8LWPVsWrctGz3jWpqXZ4mm3"
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
