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
    "2v8hgnAw19bmquipLsWbFF6SSv3x1jzN9ze9CRDdC4MBLagA9FQXLEeHpuMFJkYB2FaiVCGN7mNrbiAqhE9V6i6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzBR42jeeDcdcVZJomyG93zJZbUx9HDC3Gi2w3w6h7zyns7ebswiqB4iFC9BG1MPzWPRnjL8etC74AWndMShZxL",
  "key1": "ZA4kERpkMEWzVUEjiDv2CKh2BU5EjupTZZyMEuRL9SCGNCodj6fkT6tLDLy33tHVAyDjn25wqHpQevCk4ZK2rVV",
  "key2": "3aZhrAKQPueeNTMuNB87KxPcYJCcF1LHfTQgRVeg9CxoJyLb1xFk4D1fzVpQfApFwxmQfQfrMMMcfCwFN1SETHR3",
  "key3": "5tNBJaZDFzWymxFpibubXVu5Eo7pZTLRmnTJXAPiwJE5nWQ6FvZLwquVwCYeZqd2SEZhzKwHJcp2CyBka88x9oZc",
  "key4": "2Wp9mFWfNUwPThEtX27VevATaqF6bAEgdr9ZArXWNDNiWeYtUacY8KHbgHPoNFYNYaGtCanm1oHL2LEzKDtKNZh8",
  "key5": "5t14zm5eMAQ7YehWd1kGJtFFfGa9XVPRnmREd2q4xMQ6fjPYMNdPFRN9z42uep96nqcU9aBYJgbPNYkK7NbT41cN",
  "key6": "5EaQcQ1bC7w3RuT5BZ8qDbdBJXJpYTQQJ8TRQLDVR6Qf7UqpanpHPVKXx6HykUnnn3MhP9k3RMtcPhweX6MUmzN3",
  "key7": "2F8qc2NP3DbiCD36xqZvs6Qq4Hgg1ByFvoVY2M8axk2GwKuuLU5xoKmmEkCDs8dsrZiM9Zge2HtF22Q9Dcva33vT",
  "key8": "2QVkbzVCF8rrpXZKZ4ntgfzGE4V13s64DmW9LBP2oVEx39tTgZkt3cs4ZeFN6LuuV7XXKySDxDTCsrrBpgWAvyGR",
  "key9": "4gbh5AoM2MGRL9pKhhvSFr7xEuFHZkEYgRjFdDXeY9dwJUnXKcywFkW7jgyV8Wfdp1mhshZN4Q4ooHANd67LiXfU",
  "key10": "4gfPRvWsSdnV5W7vFzhocXMph5tZSHK1vWwFDsuGvtscktA3Ju9RdMRoeDySXsQEEUxCusd9oE9yRwBJpp5X36LW",
  "key11": "2QpJVKteJxfgy1WCmUGXPonsK4h756ED2eRJVuqFhvReMcJF6zSM4UVybkzQWNGzFYH83aVx4m3z6tQyuKrX1qfh",
  "key12": "4MTsso5E7k7gLUEmRoNH2UMwYvZoy4HU8EDcE7NRgzT6CM4oy7PadkFfF83HX15BUB3jbAeWENohTN132EviHMvh",
  "key13": "43q3aX1ZVQhSG9wNEJMtXirM9xRayEgkBqWqobVngQqVE9vDTYbabVBKzFopsPA1Xzf1fBaH7nvsBXLCFBsp6FBU",
  "key14": "2T74JifrCfUM6G8yXYpwRDedZYr6EnvW1A16cobtucgiSjTvkVn1uttx4ZN8vfJ8Tf6NU56u5czNW2s88qKPwA1a",
  "key15": "5m1Dwo18uJETfgDqrMadCoA2QtmvvU93oaWfMBd1J3QfuxkgREEsGLC5t3cbNxrc6a89c2DHY5GYu77FFTciv12v",
  "key16": "4PyL6xaurzbVETt6JaVDGPgR6yxqPY2UUDSLfJDkuh9YKcimTo9CB78pvu9HMhEPso5zHgtm3GNBtR2eXb8bSuKY",
  "key17": "3b7GGrwtV2MrCoiVJxWnzpjLn8q8U8nmY3hRfxN3wuvhDuuYda8G84zoM3wbdSDJPzwg1kw94MMx6WiJBCMFLWGH",
  "key18": "4iaWJgUjH7JvqzNupXwP3kVhFadsiRsdi5DLBhU3zkBYV9ATYNbDDiugHZqYqsnHTWGsQpBTrDRqGY4bg4721u13",
  "key19": "9EUrwdrJgvhhQzycX4LF12FepVqfMBa339BtVYYrBKYkuX1oxgn4J9gpxVMDGwc8ntm3DJeNPyMDG6d6a5kfBAv",
  "key20": "YMfA2L5q9veSu5Y36KR7eyoSpxXsHqUKLzyEbvHz1rMXzeCYLGw6QCYh1fn5GynxwvMSyVAmQojw8NgvGZ5rb8w",
  "key21": "57hj6PcK5FZm38Q8XsuorwxSTPwHEp91XpHgUhGCkuyAXQR78xLAtRYdhWwveLqiq9uxDWcsfxMKKAJPhmNmjtnT",
  "key22": "5VDdyrqCzpgmLsJVw75E34m8NTFKVGQqetdGLBproChiXPCHwLS35QgBq7VNCSi23CyRivyPLera3yt6v496B9tY",
  "key23": "5yax6VEoEZoVJJqTMrixRhj7jtmXQne83p6G8YEhs1Ha64GxLZD8Vbw8E4iEjDe4dQ2cM4JAC8Qvuiqa5TuUVwy8",
  "key24": "5p3o2vmTxKgwPDyg5VRVAcgXEdMy5HbxXbUPCZM35AF69GRsa8rBF6V5H7sNnDsazad46bnFvBFJtt7Q5GXwckBg",
  "key25": "3AwubizMTL9TcqaHriT91uuTCxyX2kVZZ2faEFJJGhDKSQDrVusrHDLfsazro5e68gNkSqLGcfTFimvGJL6srkon",
  "key26": "5L7s48BhpnYoESbKJsEhJ3iTgX6QLQz24G4QXZjGVK9wRCCZ3Vw9jXYb4bAh5PNfSWmjLMSrpiFCJvSQ5ACwLrHZ",
  "key27": "4euxq4RQx3UdZesr9dxkWiZ8urL5twPPzM3CDC1r8h8hj1UHDF6urpfz36QdSV39o4KuhZ2oy5LHBrQ8S3tRbmn2",
  "key28": "7dHDsjqs1M6PWeuDhg9su72veiH87iTq8PVQeG2wgAqUHAVHwixx9p2Rh2k4WjD7BU1xD5SY9vHkpMGNCkCxPmi",
  "key29": "4u6Hs2ZdA5ULwwAnj1yoAxUmohBKJJ2favBrLeom2V2ZUNdJFfa21EZTTsuK5gSpouaYnQ6aeHvvE9HqL9ZfseQ9",
  "key30": "Mi7B3hbeYcfsq2BpZMHpVMK8xamMiWepQQfFbotkVeJQ7una5dooDuiD6KF8h6ZYztQuXgsY2jA3goDN1525xN4",
  "key31": "2LGqTeaz9wzQYyne3P7viHdLK7CmaPwmhqSYFCiGMz4BYeV6vTjaAC5HHHdXCsitNWYfBc74hvJrmYSgCovponAc",
  "key32": "2NBX1NRkM9gjoTqpH4iQQ2nDk5EnfA7amsFaprrdjcgdKjArXRVbxK6qDZuQbgN1Whsz4gsButbUbtHYg7mnZPTV",
  "key33": "Ko1FydUvCmzhVhuUKBcVsg92PH4x4GSM9fEBDz7hjUmFJgKunRCyiCsyK4gzq9rWBUE1sNGsvheEJE7EzmMPSRE",
  "key34": "ovE55sFG9771DbiNK6sdrjMvbgeZHbjgWmYdZ6Done93fwYfkHiVLLDKr7dC3JKhmpXNzbHhhLTXd29KT77nZQ4",
  "key35": "WhqfWtMxbGeDWiar43VLtf3kz9JE6b6WgJZjKcSfP21T44CiMWmzaQSoe36H4Z1Gmr92xpAb46JGh5RRcADzNEX",
  "key36": "2jrJUv7kXAfroE1q98HEN1kewsxBR5ev7nnH71GvLCg7x4LYeFx3YVnRf3YsSs79XDm11fv5AisCXL9nEgrGJQhN",
  "key37": "42bU6KXM3CoLziYYVUQxx87jt1DC8L7Qhsdc3CSPzh4GoiXSuHXJSgYs3eXVvC89LH4ahPYupBr3r8TK89eX7Duh",
  "key38": "Syfp2z6LWb2PJNDdW8Vhe5URwZ1gcyEvQ1XgoZmGLLkRGRQQehcmATuzevy6kkibbqmz6B6H1MeTfrdo2gZe54z",
  "key39": "4KgQzgFJeBg4S8P6YWqnG61Bbnp9MGwQBhSPY9yQL6wyHAvB2Fkn7vnucbopGQsEWTcHapp2hU9hshgrFhfBhsRV",
  "key40": "39qjNcPjSXFqDYjpPKhkqrbt44zHqVQu6rqvwSgw341TyVZPdzT9ckukybyk1KYgBxo72ZyJ9yyx3ktNG3gLfVNj",
  "key41": "4E1dxPCQykUbK5jfwF5Vev4a88Euy7ttmrPaU5Q5A7NVXmaowL3ZoKpddupJ8UbxLfWfeD1wnzEGka1pc7eT3FSQ",
  "key42": "uUioLTmJVKdzCmKbnP8bQCvDTKt9s1E436Be1cpGqZgdBUZ6NmB34v387e85CerDYwkBAaYEakgeLCEgujWWaGQ",
  "key43": "355JyGKJd1aac9sgRugDPAD4PdZawLQeXLybwXY9wGKR3tcVxTsbTKu1qQ2aGvUdQXHd9D98jhkjWBmtgG58C3ai",
  "key44": "62B8Vqg7Pd1z53Z4trhADWDK5BoptAetQsPQNx5SAw6pjeCsAW7heNjEVpuSZ5yC6g3P5i7zKW2rCTKS1n1ZNYqa",
  "key45": "4WzXXrV8uqfvNZ32GW93VB6SvTy62BGR4igmZwHSxarPDxajMu6Vy8sEUPfpQw1MzcimYq91DT1MHw3hbGNTZKQW",
  "key46": "4qEZLk2fMqEqGSMgN9xkXGv4vexbamAvqWGbVBab3NDjcVrQXZVqj2NuBB73xWrBwL1ZeBjATF7arvL2fWZTTzq9",
  "key47": "26Jeyu8g9fRQJRd5dF1mYti9azkmoh6bmMbVcQG66mc4a3VrmkcMV68z6UxDWaExgkfnHfMfgkdtLfS9LoT5xJiY",
  "key48": "5URJVuPkDY12H69gotj6avUttNYtUxKihztmFvMVD2HMFUGnfmAg6JifrkukjoJJfQeXC9ywJ2eD4ZPyPyWsF4HL"
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
