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
    "384zQDngsMuHcLVCaasZE37RaZbgawY8GhCrrihzxd49fjpArsUPJqDcNBdYhNMmx7miLBhWpsF2ti5R4i2CMiN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ExspoJaYWiYcvTvfaFoy2acC6KPwST5meNL2RKn9vibd3Ym2Bgd2EHySD7kasZZvV1Bg5Rpgd9bks74mkjg9gY",
  "key1": "5VpCiMSVZmQYT5UXwvABwSWg28PQdtBgypSKDUvFnvDPFSJxTGnA2XRw18pskBpRYahV212stqgMTi6Ne7Zk29LA",
  "key2": "3BrGWE1T34f7apX4dXXEYVNsKoEkUYkHfHyN5iYADYMii6tUsRoAkrSabU1e8MXVDNfxpkbQpYPUSZQjQiZpK7rk",
  "key3": "rHDQVfV3TLYmfCiYu2KCLK87QsHeJYNGvjR69xDMS8TMFFnK47aq9hsbtsyh78sQcXosdEmZfYuTJdT2z2NTVuX",
  "key4": "2QSuYoUJhzzURF1LsJ7USgkd7yPf56x2cxpUtHGvEuDwgoBi5ssvqEZPBUZwsGdWk1L4BR2tpjm1vtsus2ND4xHm",
  "key5": "57zHzhZ8pWiA6KVUv1qArtkECuu1ethY7HGRYbkM29sW5bsLmu5HhEokffxPxLuAuHSYJ9sxE7j77WrTA1eceuvk",
  "key6": "2NBdrbJnFznTnDkRdQJqY7hv4DXinRQJSuEyjPKNENGCaik11uD28d57YzpgtJ9xdc9Tii6JAkDwm1kUU9hs9tr6",
  "key7": "KVEhQ2CcCxpvvsubSXGVdjFmxS2rRH9wxfAyK83aCBY3xY3LfWMFVZ2SmFR9pj5JERxCSVjCmTT7xxZnBTxoXfT",
  "key8": "2nvvfdKmJQxzi7XkwE6qhJKg7z8N73YGswFJ8FG2bas29fXH5uZGFB63FCYYpbg8SnNpDi9jAERV7T9JogEeKuoj",
  "key9": "3MbRCxZjfjHDh68g7t6ZXhEEFMcC1ngFzzACACmVCB6DGRFC47rwpcaRsV5jjEERtKUURkbyyuRKLw9bw4fY2cw4",
  "key10": "3T6XRmWsfUkWx8pdPeFaSZb8bLF1Se8HtwLJABXN9rRrG6ggtNMM4ez5YG59NNFbwoZhfjd4C7HrSjHCHiqQt3q2",
  "key11": "3ggGrjQhd5z1kHH9RMtYQBxVnoHGgRNVoqBUQLQXvsbst1GmYVqradnD9dHaX6R2qqdUsR2nTv4EAvqkygvhiNNG",
  "key12": "2EN6qdAERe8bhCXSVxC2F845wvbuwa2fXiL37W4DkYHcEjbEEMCnWhhFg1fYajHPmrRYDi8Ds2HUngAPDwChTbcc",
  "key13": "2AEnRi9hSwrKByeY9wP9g7buEJKZdzdnag56mrwxd9Au9jCcWpmDAP7bipNf7wXvQ7nQTAX7Ahvoce2WzE4No3hd",
  "key14": "3NwEW9cPeSJGSQokk1P7kR5cchLtJV4ijSm1uiAr7owaSZeF8NNK427tuExDwx6ozTdscTP1bRjfdUEYYcqwyQZA",
  "key15": "3TfRBf5oNui65AAnj6MeC6CrdJHbaMQm7Z6eqVgCz3rn1sS7oj4jDqCd7MceNd51hGKFAgnbHQWtGFEJKoXvkap7",
  "key16": "29zgjpT2AEycf29Gi1jXVEFwnX9esEgg32JpcqTQ36gJASLjmUUkdhc1fJyWCtqKwWaJb1oe5jmz6AZG2KnVPhYy",
  "key17": "2rE2LR31fKerzG67p9GTpjJUz5aTd6DsAckFGY8xrZMA7MG96Bx7H4VGNDoUbgSU9Skdy9C8WpyaKvKzUNjJR6Rx",
  "key18": "26iaeM3eWbSSnxnc69vGUKW7s8H18BfCjMjnrAU4mD6BCXyHh2Zy38yTRR1djJPmyg2fU2W3uTquD6qzCjoUPx1f",
  "key19": "38MjSbnyc1J5s7f3rNb6GGJFMEZfK6RTiatiDvBGL2AtPz7dze68kWLpbKt9wnTTERjYR8Mv5sKuAduWiBarQSUi",
  "key20": "2DGQBYJJBKG3vSibdKMiEyXNq2DY347PVrVM1ZR9ZeopK6mbuDDBrdbdbBrZZUV9x5UTp9rY4rZ5H9k23rW4dkjv",
  "key21": "2NFGSRiySSTdCx2hcpr5n2TuvMa7yCVNm7a9XxqtCmfC4ugZMHad6QBFwTSM5rH5sTXjSSTx1nbrDpxFGTbMEdRJ",
  "key22": "64eMYbgHNmARnuewG2zTPEaKPAG2LPrAVXSbeXAThhck86fDNA8WYD7yrtjV7B2angJNRZQC9E1zCMxyvmSRXnJv",
  "key23": "3ipBmwBa9TKJkxoL9NPBCBNxN9NQkiEa9VvrtG5rf1vE3FTNeafX2tyN4vvmT4QeR2LT9tRbsqZ88zUZbPhN68TU",
  "key24": "2WqAd9FLUvp1qvSfixAWwjYwaycSDYYcMepfg7bkYKxqRDDK8mH2ZrVbicrj434ss5DuSXyQFiWgiPWEwgYjcr6v",
  "key25": "2AsBySstsW9XXod2Gehaz3s4JE6ESw28phccuqUnP1wPL2MqkKjmn1eMGCU6D5sPj5c9UeyfnQq5aecgkVLzpszM",
  "key26": "3vDUqsqmFW1QXHaAoDYNPJ4JWTFzbPGcXEFw5JvT1A3tKwfZNvVvZr3M4tyZPKUwR5juREZua1EJ4khDNtFnWKfH",
  "key27": "5A1U1v2K83x8EfpJM7MbfyGBt4BRMBTxjHkqkWXtt4hjx9gT8CrEt5byzTqpvxoG4gCTeKRf95MZV3q99XyS7Qfr",
  "key28": "61BdQ12jtAqYd12QyeaLVPQAaXw2MG5nY2t8R21BhcWH7uMjH9vwD1LMwHaQveCCYGMjc8zNwczJmQ6NzuNu3rvk",
  "key29": "5UqCZwdBHAKbu31cx8pyu973MY2avCghJ4qqgRXGkLrQF4DdoBaUNkw5bGiiaRsBeRXPwBqPUP5XJ9qEBcDp1JAA",
  "key30": "4ChKaHHDtvLzp7QAmSNeRXYRorwYECPbg9DfJDb56BusfgvCRnupqhkpieXbzgyv32pNKbsxcTNfJcUWiB75h7hf",
  "key31": "54TtdPC1bEiDG91XMvvwu6TXcRx95RCxAqG7RjwedSH2X6xc9aChL32jLcc4KvWXZXXqdq1FGN4ShmevesGY64CT",
  "key32": "3YQGuke5vbw54k93ftuH3L7tCZHqmJHtLwFMVeBeVnkj7pCWwuN4eXXbLtkDMgXhqoiQKYdoNmqyR2C4BCNW4ueK",
  "key33": "4X3L7eKHMXMUX8fCDPkHFVLPquV7THaZ4XATHyA2zAwx2cQ3VmYVmCwh7nsCC6dv7DkgmSPFNcaPUtfhymxKFFG5",
  "key34": "2NaYtPe5m2LQ1rDwXic3MnKaBb9iqqnwSvd4iDqTqV4ydBMU3xVQoEwPiAoJ8UND8QaMpqz5cfC77BXHwKDvMi2p",
  "key35": "4itdJmcjqtrWhtURaaJ1brVERBrsCutsyJyh9kL6wdM1ZbTgkLd7sP2vH5mWFp2fGqmaf8SP14vp6Df3qcDAmj2p",
  "key36": "5FAwgGdDXpbYWrpQ49DgQUkhCDq574xF5pugy8Djk95kYwec8m75wnZG4sCnQrhN75D7eeeuRHgNiEXDbj8FcSQa",
  "key37": "5ueRGxQAWGo6Ncwh2F1Bhqv6WV6oniNJ4HWKVbdAC9DKJwPd86sMK3PfxLwMtkkmTYUhGrGsL9226qGGCeXvpDtu",
  "key38": "5LjE3DZn6NkLa2UcZHawjxm2CeuNhMB1JvgWHyzY3bQps5Fkz3gcgeTM7tesgHPpBoyjpyxwAbwT21pnhgyJ4LKo",
  "key39": "22F6ZymnYGFktnisKN5AHWGhwVUNgoaKpXCLnP8AHKNu3SjQHcE2vKtkoJL1KG3Yxj8t7n9rCqsvmiC7Dg2Aejia",
  "key40": "gmh7exc495iznhKnj6tRZYdPsqto8VVEN5X6cyYtFy2ZTZa9nJeKQThjdqyq4rv1E56E4XbZvKReKiAwYpXEh93",
  "key41": "5Q4oB4nPSfxyZrK1vdDJ8eDLwaSMbKJfj3fBx24rub3mpMwG77KfWiUEqY5ibXPzdorG95fozPfELwd8nvaLupca",
  "key42": "3M2pyJwaDKAZWP1XdgbQNEq4hUenvQtc5tV9pC9NP324hXmHTrAHfpLXVqzK6kVHYsDxyTGkU3bmiB9QyFyCFtnM",
  "key43": "3G55Hhsjcwhb5Uw2oo8Rk2uhwSxKifPApcde2EtsdtGDDAkXnAvt1N7tAXJE6hunTFjwHqJSrmqbMqgZGev3hhHK",
  "key44": "nJGJ6FRUg7UW1poBXhsbuhvUVj63339QBsBu4XbMiQVkwEn2cRk9nRb9yktgeVDZmHxPEJZZnEGNxxbtiznaf4V",
  "key45": "3rgiZDrCaw69USu7XbiFVtYjDxFNWNKbXmJvhSLrwoMJ7fxuXLtjKwEr9Y8DWuGtbotjezkMLW77QxxVJ43xVdFx"
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
