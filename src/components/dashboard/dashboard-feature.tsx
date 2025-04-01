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
    "5VGj4qLnhVxkCe54rBB33izNhBsxtNHigkjZTL2QbzKDw3JuPYQCzUeqN2X53ee2KrA2rynPTXQ1TePrPpAscXQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPFNnsHaXbUpPpSVz3cktMfJBZtm9QMPyPS3g9CNMLtt6HZDQTGnf6nc7i9qrQXofJALAZeBQqEfbYRmjQXoS8U",
  "key1": "2WdwTDXjsQMBn2tweX1eqBqy9UuczgdEidhwYqj6jk9eWbUYJqy1S5GUTVxqWQCjCyE2RKXsUDdQS1We8bNW61oK",
  "key2": "4x62WM8LbKgzBrRzFfDsdiFHxrU2urKVW9BHeqdofotEXA2iXRcKKdmWmPhaWXag9wUzGze7T6k3RPggCe2Cx5Uy",
  "key3": "3avUp7VBgn3LJbS1cdrYehVU491Ng37AxxFtuTnDhArU85HsJNWT63vfpPBgYAhgizHauZ3XDbZ953YQAf96tWkq",
  "key4": "48Q9DAXUh2uHCFciLAjbtxMvuoWVgzmj25RHTjQfNqNh3WhZj8fduQztnCYSz5AgF9bcrMPvupx6Qfcp77ftUTo9",
  "key5": "2Xy9q3CCxJyi8FLGy5hb4ddWVmQC2CDdNyEeFXrqhMj7G34yhmZKK7qKVk6P2xLMM457QEVGBCFDZPThS2AQ8mNu",
  "key6": "nv11DaDp6XXKdeq6o7YuTy8X9dYFSaD9ihdp4rahGAcaWc8AHfAKw5EVipx2CLGpA8JZxABihfS28bjuN3tdJnG",
  "key7": "bxsMMQDmypHWF8sA2AVrmQVZ47nxH7zW8E4W8EJNcfb96QDMrHRuTUREhxgPYDpdC3hTpkaATg9r7p79x4LGrdt",
  "key8": "3TiTScoRGYoRVqhi9hZ9gWRnDgJ47qcgVyk6RXD9WhYXRZaEgR8yLFNhi75F6vUK6kS5qDePkKmRCHRYkzLGeAot",
  "key9": "33SN35bt28JwAS5cRPFTjzS6kdc6Zmheqj13JvKnkvLLsRQKMJTYiVhUGkc62AHWyPnqSBixRhEVjQCNmDtmVHSU",
  "key10": "5iX9Uk9sr8sVsmMygLUpERetmasqb7svd32jtNvrKjezWqtyyRu2ScFNwQYghDnHGFH1BuHKsqCXsUZ3T6c3xgFt",
  "key11": "3WLPLvrcQvVR8wAx3MXK8WfHSPCU9AoGYSP28C8DaPKPjZETzkdjoeeqcpniqkcEyD4i5qT6DYA5iTjbeBVnipHM",
  "key12": "2jZ5WZGN1YwezYxRaFCZucDLyeecJKWag2PjYwsvFkwBGiLLDCaZmJV475dTWVXpovjX397v6v6jDZToecdxscQ",
  "key13": "3E4ZTq5LHU2raGwUvzZaMDANZjCwGnnSxy9Z19DNFMjRsXMR7uUXcD1UgvWrEDjQckztbuiQPwsbA3YyJcPjgwZy",
  "key14": "3RFDHbcjgyjttdEZWKx7Hi4x5sv9ttsbh11ivdsBzZpF2Dm1A7ubmyomAwubLXVtHbZN4cpc6iEs3XpUTpgfvn7R",
  "key15": "2dUpjfXggbHdzFnuiV6HskGqoDkKauavL2jP4oBsy9FtL9voaMhGjBxwCActuitQnpQowxV5PtK1Xy8DTQGLMefU",
  "key16": "39Xx3LbQQKBgGMh2hGEsqiUyGc5Wti2B92U29HtUSkGFkdcJaMBCAqDAM79oJZz7a7VkZptckF5b3N6926Lqai6i",
  "key17": "2xpZwoXFAY4g5ckRGp7hRzwiLnkzMDbPP3AF7V1whk3jLaZEY8XvPnssqSUX4UR34pHKAfxfwv1inrGBJPzcFLQr",
  "key18": "PEyRR9FQJHetgdgbWbM7E8S4cMh8RRAm1RrujrR72Y7BHeRNvYE7qFXPuMM66qEaT5hmrrZ2qeZ1jjxkGXpV8LF",
  "key19": "2gHYJFbPq2W94xJgYhHM7sF1dutgJ2LcZFEn1yq7BwgLohVXGfPWjbHaR71W6nnnCRngU9i3juqow3FrqBW3j5LC",
  "key20": "24n1foCuA6tfg1NMTMtTcGQhjYc8GKJmgHuLz4jDYFuyH3zkH99Bipfpy7QShDhEhpJtqPFfsmS9Ej18xZjhvinF",
  "key21": "VUrQk6HRYLSN1eP7dtkKhGoty4htgmjNxR2oJTkiFvQ47if6dmTpzMbfPNrLjKa7jbMTNtu5uZgVGJ7xhjwrx3H",
  "key22": "2UjE8S5PwmD7J312YQtYnWGW28A6GRkABKo1SVfHv2aeT3UU46H8xUN8ex3Qf3QF8KnKn6fuCeKCda7Bk8UKiKwG",
  "key23": "3n15Xo9BLRa95Fe5Km3tceqVP3GbVwgwfAUqjAywcJQdhj2yjufoy6uFvasEGYNXFAU5i5pD4qXPp2wsA3bsPfv5",
  "key24": "5rpd8kCbUpgEvkAgU3biRL88Cfw1wbjXfYwByyNdrBG1VbdwvLX7r2ts6UNRAFnA6k6hCDQ1yj9mrGHWdFkiBaRS",
  "key25": "2vETpvMGV34E6aithS6B1XB2bcD8atD1AoMZoUxjyA66f3rq3cBUMdToff7oExNJbWo9u3civB3Ge5B5tci8cnWE",
  "key26": "487T9yiqt1NR2Na1k6Pm4vsf2EaYHWx9WAhMsHgug3THNbWoo8hbAiJmDgtSMCA87LaKbF9oRgMjugUcop4Dep2a",
  "key27": "66Dg96CCiNqjJY3kK775kfVHfPmED6UcfSV5hupBA26GhWyaWtbcvRj5oMXkuNgxefWmugrVThdhLRmiUGrZ4Su8",
  "key28": "2JRWYWR4Knh2u95QcXY6m7Ua3AecUQgY7APQxEywewVftGzQfQX8AVd99o8xeSXeqknYzRfSbETDVV5YHpK4vnpB",
  "key29": "4StonF9kUDnKTVcxvSUg7U7WnMAyk5gArmvknKbiwuh5vLYwzezrQKifQLTXKRoL73mUagyjL5s2Sk33sTQPWP9b",
  "key30": "66xrYxtLDBx9Q42XyUK131cG4u8YhXAFrDcoCcrfZDtfjCa9HZFi5QEMieP5nDMagUkw4LwvgbULabw2YY7uZ6H1",
  "key31": "4aVdFbNKGVbdFK6gUdBr9MEM5772vXFMZCmhj8ZApYbntgnevTay2V274eZaxQHNsuDq2wdvexYhxjypids9Pn4a",
  "key32": "3EWYLfnhvbXUASrMa42MpUNrhnriWuPp5WHCuh2GJyJQ2iKzZYouBDMwq3rAtZRBA2Ag1UKmWBvzd1oXMT2hTEkg",
  "key33": "9QR6BF64KNGWUtB4wPfmVwZBjHh4vdzo8ZfC1Ef9Cam1nMXRZ8Bi7wk1SkxN5WPBseVZzVpZH8MwgZptVzy1TKx",
  "key34": "2SaFKLz3gYDzmvcrPNzwmCbdqKqZmvVmqdsu571aiz2wDo2iXaU2u1wnLCqjqfcduMsWbeStjeBYb4YSH2hAdAyj",
  "key35": "2MkW4EEXXxo242h4wX8C7CM5RB5rkgEJu27mAzkc4xwcBhXAEBHCE29R4jWf2SdZo177yCTciPxLk2BX6x5tyGHu",
  "key36": "36nR2e8BtNRJzZaWiWwEEmgA4p18mU7gJVevBcgCds5SjENoBJc5WFF2gbXAcDFwkSLEjrr3NMy9mo16BGVWgKyo",
  "key37": "3ebhkyuWNLdS6RM7JUboNWDbfx85dnMBCtfVWi4bSa6vh88ryD8FAJLGSSunCa3jZ9NCimyAKENQoAz5mzP1NfUa",
  "key38": "3iUuzHLSExgd3nVkZtDPkEjKt3SSk4a49ka4N8XsoKosnB7Srwz6sTEuyx1Jeyvpwd1zR1hv69HAiRFjmDtE4KeH",
  "key39": "5w2MRBaZ954Z41cJGALKyaGUuGwfYWTMnnejVTGDD2cGpEAStT684aZqBH6ABjuTHSFJebbnSXBFcYxn9mQgGeE8",
  "key40": "4aqfK5yKDq9sZuMQ3KLrk4YGnePo1xZEQ11cf5A1Ffdy4Gj3SGuXcBUmXDE4jXihUageks56sfbrZY4DDXj751Gi",
  "key41": "59GFKFKtQ4gDkt9MKwtoEDMU9eSqoZqk4asTi3xDE3qLFdRJjwH8JBseBJduVJtcVJ8TmvGWxqUa7JNcba7spLaA",
  "key42": "3cdq9zPmvGPz6jnX9HPyrcQtSkCZ8Co7FSq6aM4WfRxCRqrBLfnLofs79YhdQA3XLmXL2rfC5xmajSyWpABByuix",
  "key43": "uzCStaYYS8PsdqdxYPECZqDzW9KBxzSdDkLzgWXJaJ428zbBvb7MfdYfDgiWsEDfkXAGjtGheCPc9y3aXCcBxDj",
  "key44": "FyxaPRGDPt2bRWoTeWEqdng33c2DDmWAsESWiTgTb85SiBqr5Q7FjRt9sxem54H9tg5dQHjXbGRC8ztWUqUaSQQ",
  "key45": "37A2LJbkFw2LLWXnPESvaRKAVnWZFfUNdssCUGFkVny7GhpXm4VCGgSZ2die6CtoLfT47vuKSajU6sW2auaZdf5y",
  "key46": "4SsZKQHTNJGLgK2tg6EY3bnAf28VrHxboFfQjoNGQxwjqNnLTfayNNhFKvTaA9Uo57BbSdJ3qQ2AsFsoJd2nRGGo",
  "key47": "38r9ooVDpEXvC2KZHoDLbxd4kTHzuoqGqQR1cSYb5MCBTfGcMFgJtEJrKv2zcYriDJG8zY7poVNn2v7dpHaM7v2u"
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
