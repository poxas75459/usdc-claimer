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
    "39QjyCw5N9VZiypUeKoDx4Z1L6Gv8JgFF5cFv1XVxpYnzBEpz4tY8Zroso8haTV7v7LUM4B2gr13ZDRiV8AtF7mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYDgXMedgfGTFx4gSpR5ka7nHHynFB1nhxXfWqwZU49wcX89RxA9tfVK6Ef5veNjDCJeqouWk8UyA5dj2btJWPY",
  "key1": "59EuCmLJUBgBJGiLLeouyjxR86WBJA77nGnnZp7p3wJLpWSUqrKJzxS7uWnchBFb4q8jHCrcjvreJA5L4KW5XPwz",
  "key2": "r65zy8toN551cNXzLm9zJkY5zKyCvFeV4qthg6xNuX72xSQBN1crFm7eSJ2P32YLGsUVcEmuTt2h9fGwPK6V82p",
  "key3": "5ropJBbCSwZ67eTnix5JtebNVNztuKJQTR4N5Du4qZpNV3Q7GtPpYNAegwiQs9TSoi4Qe4PCNJ7YGWoQS8imKkD9",
  "key4": "4gUm7TUeXuCUz8kXqQJ4aggG9dFW6VtwYYjs9JWvfmqVbpKLHHkVLNJv35r6GNUnzPubEYYK9yLWZyLMftpFCwtt",
  "key5": "3WtqU3GjBVz3GQP7PHBhkic9SNrVUEsUXV49AW9CGTdkKsbLGmyaRESuotkjAcQSiiNGYMHVN4QZBTy6hqh7A8cL",
  "key6": "uG6CXiywvVRweAEFne38QVdQ6Z9z9VBXGCw2ebForQYWvLsmPWzJut1E2pFXSBNCYbbHmJxq1ZNPUPZ61LsfD4C",
  "key7": "3U7VyYvPjNsCerqYkmzmR7cJRE1qQ3ZnvmxJgZ4yEUE1nM9ih8f6nTKdy76xDpm7g3w1wyk5ztnviCWoHGfWfvR1",
  "key8": "5XQ3FqzTFZaSRwspyQmp4RNsM2cQGH4HYXKwnzZT4oMp9iZmXeM7yRxzBbh16kvW7c9QMoCCRwN5hzLN6LFNXpEu",
  "key9": "8jroUgSLNjNxNG8twKfumLDddrJnLEqMRJ2g4xjhnPhZnjVh8TBgP1fPqptvcf5bs4Ch2HGVGRkZFwKQJEMQAv8",
  "key10": "4dZaCxeE8nQw2DJKTA9Qwi8sYtKDPvRAbBKxxCad9r6X5z4Xnek7pc2pH6dhJYQ448psfVN2dba8DDRr1QAJ3e1t",
  "key11": "5ounRsgGmBZvHMiy3XD8sXLMJHmraspH8BEWr4iiow6EMbnLutngQ4Cv2j3GcNbTodxfqZdHzx1PkxF5xeXGyeAJ",
  "key12": "4d7vGeUsGtFEiQJ5GPUZWx4LBvkCdZNrA22jtB4XvRXuJUp2W2xWaWBcRENH4JpytK1LX7KaVN1aLVXAfxwz8pKT",
  "key13": "qQJGGrjzavjkoPy6qte42j6Ab44Cs3VZEvfbXA7L2W9srJ2nK9MAvL9rLhKK4pML3jQbWma1PC9JM7hL1tRx7hg",
  "key14": "4GhU7ZsNC3oEF2Zw2EESQ1PeUxU61VkHSgwMm63LHsMHmfLo2AdbBweJfYPpsD1rf2wL9dfW5brgc8MPM63895MY",
  "key15": "4qgS7jjSxCUhHd9e4PTQ5Wc7MTqgpYC2Gua7TME2UEunNkr2vvEnoPoLsMrDphRCekssS7kfwNH8nwLariQ6VUKB",
  "key16": "3vvQoHgX92mGGpmzs3Wnj4pCTYLF7PkjdHJpAirvRqBPXT82rtBs5sPQxHkLLCQZEbDKhxmmHHFioGViLnPzQufV",
  "key17": "4U46ZkiikRpCwdDaYSghbF7jfzEvnEnnsNfSwbQYcJ5Qk9hfR53xyc9ynppAjteVz5ZMEf4crp2cw14ymSVU8jiK",
  "key18": "HqMd11F6W3btciuzw6cVhtQcyqc8MfRSHoUpQYAEZCn3U7Qrjn7svvYiWMXEXVBsSmSkN8EyiVNAzoXkX51edDK",
  "key19": "3VrKH4P63TwUPSnk7Rmchnrb1kdubym7FoMbrhLncwYqNKsxX2qmzDSzKLBw1zLZgaiLiiY3xvrnVmCaRG7nMkmu",
  "key20": "2Hf983UByE8qHQKx5m1qgWb48H6tUVxL687ctW6NrK4ibBCrvT58hkzVxzPTtB6EQie4gZDp56DWUhDwJUT4aT8J",
  "key21": "3JV3DBkjBTZywAoL2pQqbABGE436Krh6JhN4kHuoF9iMfaWCUi9eiiHLvwfASwhsCtEbzx3bkVRtE59EwRCtvW99",
  "key22": "A2etADonZcV7JDu7Ey5paavA5B3UU3FFoZdwjUg87ndhFFDU2anJHen6JwdxZAWomn89tFuaCEMbvp7g668eajU",
  "key23": "3VFhC1jfHxeH2J6ozPuFwVKAWZv52dVKxLAspwvmBwPz86k1krd1ohY9ThZtVYwywQeRRo1q51TmdCNyBg9SU9gT",
  "key24": "2SdcEaSBNCwr3FUDEXMY7kk1p1bdcMmHUFvzUXuVvsUDw3ZGqkNoDTeEDoTjfR1b9GKZ31hsyRzex19YcVq56m1f",
  "key25": "4YvsdWLib6vCrTjddyhFKS5Dbxvag6CD6H1Ee3LgYKdzthMomAnDUskBxYGeYgfoUQQm3yEXCo74KvUvEMPdBwaz",
  "key26": "3QLug4BiqYsFmWACJx6sze9MjyEHhgkx7xgXrFR3qd5mcddEvuUZWHvs551jphTX6gPyKY7AahCxY1fKsyz3Q9jN",
  "key27": "5KCs8o1AHar9rLKqCtS3bFMKrh1mMD5QDFMM9icg1pcUdzg8BaoFZ3ivzY3REpzJrEodWeECTKMnhwa4W4LktBUj",
  "key28": "25Az2K1AQGFttWeyuGzifnjP9RyLeNBmnGgxc7AS2JsJV17jEagtitk2bduL9Hz1i1zY5xhxjSKRGVMZLenoF6wf",
  "key29": "YuyMopwD4BnCut4upwU95jCtiKxE7Upa2SGiWSteFodMREDZAJpaGAugQVzNXMNMdy4GDuQVQsRjphGXdaimGcD",
  "key30": "5A17rrosCPwQV9a7jdHMMduuHdDB8D8QeFthwKGE1b2pxqwfenbVYzLhuwpWM4ZU3Lfq1Qhy53VBQDTHaK6JPBZm",
  "key31": "5EJGEZZSZWQH6Ma9vvCj8g8DqxuX8hmU2ytMqaRmpfw6i1gf5vLdeCYaZS2z4tqdWu4oCcDTe2BkMCLpepMMH4n",
  "key32": "sin52PCfCydLop3j5D2bypBNNh3vrns8P6VPC5aECFibrSJXBmwxNk6TXcc5oTuY6xSAZpS4uMDpm9EhJ1CcXzZ",
  "key33": "4khJ6bU8Kc3UyewF5j7Safm5LnrBVNePMzQqwqwgiJDZxQuZKbQuUJ6cGveQf8J2LDjwdTUikgA85bfNGNXZB3q7",
  "key34": "5Dnjjs3xMEpZ5XpFjrJVL8tpqZyeLSaQH7AXV5h34B9QW3QyuUjb6ztg2oodonZjDSyAj737wPhAVwk3VpcovDiH",
  "key35": "2VTcka5smJwXPtWL9kGr3LVVPuaK2vMyMj79ddCCjxJ9TQif5SuHb8Gu1Sc9F2sQAM3JFiYpGUmnwRr3AP7g2vpK",
  "key36": "Ku3JKxEY74T4Re99joy7dyra2Yem2Ljry5zYtQGbu7gtw18FtU5BX7WtGJUZ5zzzKJ1MpaZUQwfLMLN7eihLNvo",
  "key37": "5t1Q1FWUUfVXAyzAs5WZSRxFi5WQkJeDirSk3obE8rUYpUK8e5hBvL11ph1LMjMVVpUe5B4infgPQF3EVruRRCwh",
  "key38": "3WM6uUnjJo42soxsC2BocfhqByhVtaY9KFXLB2Rucu88dsnh9JYZDeVPaZgShPjC7X2agHw6tBpUufsp7gwV7npu",
  "key39": "21iNEvgM4tiNmsLvTpb36C38wVWKB5SFZvkQ8hFt9ysZsWyBmh7Bt7tGp8XfHV6UUeAdL2X9FHYvw8WLGT6bCjdK",
  "key40": "3KMUaWLE5taYTRu2r1zLcsa29V67sayWPYZ6qPGMTqxkP12v2Cnzj9gM3UkC5W8HypKsGqJDd6NZiYbS3t9kF3HR",
  "key41": "2oyXKNHsKJZ1XQNEd2pW22htdkoDHa9BwoGSREf96TgqQazQ1cG1AbVnUsBWu4dSDXc2ik4QdGPmuCR8auwpGegy",
  "key42": "4Sv1c2iR4hKVnE6sjTbSSp8N2aMTduz9hdCBKF2CcaGPsUUrBYnRdbx1dUvbZopgBSCnk6DFQXnwEzDgBtE7mudE",
  "key43": "4HngxKcxNSbk71Sd1nd5UU1xKugHYNudYmxpNchi3U9F11HARmaNs2kUCPhkkbC9z9SsFj3qs37XGj5zKfPQSwDo",
  "key44": "3Q6AM5TfWXsFe41XV9FzkEjgxgZfwsG8cS6odkQKGzeTTz3qGs4cwcVt25H7VhzXZGFJKPanKxoim7zFoRZ44T4R",
  "key45": "3SQESVjWa7R3FRtQR29yRX7hjxkfPkX5XoUBXGL5E9Lk1jjPALBbgXcmNvKAK9zBoFPesvEaWjaoQEuUs8suX8yZ",
  "key46": "3pwSf2u2SjZ7DmsckSNYA2ynkkhCUaHmkBQ5wckHRNwbdXdJZrKRy69FMec6hWMxvyk9QBYvNo4hiJuB2K25AHV"
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
