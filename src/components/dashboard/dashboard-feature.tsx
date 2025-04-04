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
    "319dRvJqLcX8tpCsThL1RS1Xbcd6iaA6qRvCDbfryNdNqy7oNi3iE4QMAPgERb2xY257aS1pUdKqinzRk6wdZdTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ybYe47qBd1WfYXFuKj9wY1QPfqxxMbeTHhUg1BdkUgWya8PCV5PEFFQoafFvaws6Xks7pWmd1JobDjM8iWrNQzh",
  "key1": "4J5PARwNFx3uvjZWJUhJLxZXBmVczaryjJ6jyuwxn6jiwBn7ZECgm6wJipZEhaUsR5k85Rdcx3CuVU8wFuhT97cX",
  "key2": "4mf7GGtzmW15c3TX7i9ehwBkbWUgsR6FrQqpBuAZYkSHRRu8eFUDo5hQNnL6x79qfLUXRKnx7qtAR2K5j4rUeXoe",
  "key3": "3zs2TUs5cPEZwZnUa7qQM7yEAHH7Hr5rihWCnzm21kRHbmafFaXAHE25oBRMfydBkdzhT2CJZn5LvwoNztWCYpbx",
  "key4": "4451io2NhESyyHmEYgu3rh4W1KWcnmqkXwcnFUC6J7g2EFN9JH824ys8sXsJNKT8iMGzvw1dX6gVqLo3GbzievYC",
  "key5": "UJvoEGakGiEvaMEJ8wwohJNH5wJQmq8ggWZ4JhqzmgN241mGZKidKBjjzrnnNY9W2mExnD1CEPzTiGtwnNp62tR",
  "key6": "2QqG6tuRqBR87C5aFCbs2iabLFwNeN5pjsvpMrhMjXiBtLNwFfMMiZAFKMAADcFsuvdXXs3ZsQZ6aBqAFLDNefGA",
  "key7": "4Xv9mH2Q5b8Jn3DUmF4MSmP2LrmxdD6cmxLnkSpxLZMxP1AMhtaXbsufSs3rDbtpKALKbmgBgFVbq7HcSeA2Fwit",
  "key8": "3X38uJ9zMm5d2PTtBTigYz3xD2fQdGnhankiZVzWg3zWtvS8Re1qVTLATtGM83GChbxbS8MqSqNqX2iX3Z6CCRqv",
  "key9": "3QXWBso6XS8CxUttLxJZKGahJ8iG31i6Tr5wCZEVSn5RqovwWwCf3WmvwnNvVT1TX6H13yEDZ3srvy23e1BUq38b",
  "key10": "2DbYMSqJ8ArXWxsBeVKFXnmp9evRvbPeibta1uudCsiGhm1U4N7Jd3uHaBKEz8SzuSCufsZJJvNDYMdxDM357z2c",
  "key11": "52k32PzDAYJtWXPBCTNxNJLKPJ9ud2478i3ZKy26N2K4P7nS8PHPP2quvh8it6dsDfpNXHYcHaeEPebHCcAGiwMc",
  "key12": "32CbSPH4jxzbXiHSoo5vsUhR1QkSnyX8zWFeHaUvT9gkk8JJ1VerBR97Wv7CwYYt5yrY88XvmJWqk8zdPhVZ8FMJ",
  "key13": "4GEYG4msNp8RL39RXC5PePrhzWLSKczDLhfem5gjBy6zbuvn651r3wWHpTV6TcFLQurcuwSJuiQvQEGLJSLeFZkk",
  "key14": "3kxC3Fq7y3NtRNmGd4wSH8pZVUzG5HLfRwWViT79CjaK4ncWsRXLkkUyDPBxb6CJdGZXrHGhn2GzgZKH4o7maX1S",
  "key15": "3KRUuv1XTnCHdvTK32K4JUC8Wx7XCADG3YBgUgXgPFNdfiUYjZWxDqrukkHhCVnuo64HHL2dbWCCVEAt1tYLdABB",
  "key16": "2qPu9zrE6r5bUncp2YEwvgNBsKJ7PnsqZBRqFcF8NhGXLbUxDzaFyDHNRmh6HVBdWCcC8HQF3aM9YG2GgP5CmtPt",
  "key17": "DWJ7Z4uwXs3yhnddSQDpNp37yrzhcVty6j7Za4y9eNrN6EvA8m163wTQLt8Jbc8BtRx1KTdnKByGoYex4WDgMnm",
  "key18": "DcdK4KCzDjN7gePvvJZ61yY7DU1FdGm6Lg6mvWma82r8EApfbKjaJBZhw3LsT2pQajdfe13zFAB9hj5W76RmGYs",
  "key19": "5pL2WpJPpsv4mGt3ZR2r64iByZu3E5eqcg4KSkkWP2bk7zY15wj1ZRdyYzTaGCMP2XEPo6RJi3WHtQrCwvb2ZcnM",
  "key20": "kkpFtDM5uMEZvnJwp4f9ctBiuD5ieYmmjvRpw7rUxwKYEV5Qamg5VmGutwo2b8cFJX3sZ7xSUh8KA5QqvByHPye",
  "key21": "4BxiukHrqjEo68hw6KcZw53avzW7VPvhXkk9zLncxz6cE4f1CooHa9kY1mNtues78tCovjucw9ocGJ6yv9vgcZuz",
  "key22": "2dmyHSoaHVmzWFHzYWx4G8mQmjQDqkaqQz1zWXmAMfwmZDA5vFprH1fXkh7aAq5u6QHvz1eJmJCSQW8kh13tyHQj",
  "key23": "2Du1ujrtR5qM29SEus74P7ZneuKR44nX3wPMesiD2oYG6iuMUAYSafk13LtsZ4aqQkpM43GbHcCdcevBMePMvrdJ",
  "key24": "4icF55tK7agxeadnNHyA91rdRqpw4n9GPaMXo1MDZkJX3DdgNsUkubHJuiJY4gShFpQ4Zx49JM9EDyFEYGS5iMCi",
  "key25": "5Vk7gA5yef3Kg9DhXwJoJVtCHPKLX5xRPLjhFt7CjiTc4hmP2cG1xgZXBnG87F9PRDKoN6JqmMDzyntRWDqZD7RH",
  "key26": "Pbeuw4h3vfmQTFmcTtNeXuM5eoSDnuDxRkBwWmnGrJdzV8M6TFgCVGsLmBCx19zwTnUPhzc35u5TmVMgooYvdxx",
  "key27": "5zaZn3Kfd8FBMLLXqMnCUpu1MzBvnaqMs3Uh1VwMQQQoUhoxMj48c5QtL27YBwLMDtm5RcWuRkb3x3ETVGMEiiFS",
  "key28": "45AQEgwdbFMhKwfTmCDdPyvc99cdwbCsp6yZyLcCWnfw5PgmdQ1dkEkK6ANU3er8sJicnwxZBnctEqBhJJXEjZjq",
  "key29": "4AcGm9JLAcje882o5757ciqQHDCd7CrbfFvWVy9uHjZHah6wKG3vbJc2LT3iZxcAhnsDLWbgJ3gxiTgVp3tjtMZz",
  "key30": "5xuzpNDMpAUajVuAHaQJQQM9G33gdhvP42AmzstTJs1Z7AnC5ZAjYC261GZ6njCyLBnDPWJjyGEie4jGw7KUB6c1",
  "key31": "3d2KNiSaRfBExDY1aba7fcWJRwJFSyn9cyLWnc3t5oUPUZV68S49YDAjj7vL7MY16HdeK8KE4BkSPhsZjLH9nDxt",
  "key32": "29BqFYnZbQkrMehNcX1PYdPJWkFhQN6iwnV2gbD5fiz7ZkeuwU5FdgFKLy9kH8SEZN5cDN3U55sikCAr8Kt4NgQo",
  "key33": "29tzE3t257sjCUStWLDUbpgM9qCw3sXiZc6MneKnzXTWJjajn1Dn5VZfTi7vZFskEqrrsBJgNftjs3ZGJkSUd71J",
  "key34": "ePxQgXMikVTZMh7fVdMGJsKttKphXD4TWmkbD8uHNsA5CTAV9jpEpYGfRi1eRiKSU2rbmVoUW9ZL5wagU73PYXZ",
  "key35": "2BLJ1MtU2XtX9na12x45YXVMtWjTTEtM31j4qkeC68AsZfTh1tbTNMEKDr2GERTzZvtefXCjZwj9dSX6KSyks6qc",
  "key36": "5H3KJCzN3MD66Nvd1fRsYo8E5YUMWpAu7rTnGg9Bcggta7hi9CbDGD9RMzLMpUXFanBwgUndaTijGd6NjiE2hE7D",
  "key37": "5TEiuwcfWdTR9sF2Vm3pPrNtNvV6HHrHjH5THsNpojhrHEAQpWbmMCpu6Kak7Xj9PCY1mieBNgzv2ZUD1mDWWhx2",
  "key38": "5BqeUwuTtas6AAUWzHZkNehpbwU4LHkT9XCb1ZqwF4yinJfXZjstwojZhoTUP1SgWhaW767PPkZgUpJLeauU39Vd",
  "key39": "2vvR7DvTtFbgkDPrqMgRU6HUQ4NvRoq2hD4xBnB2k9peuSDYuNzXucrsTshs95WSXCNoRZarzgPEUyb1ha85QRPV",
  "key40": "2U5BCkx8m3HCKrsnftU8bkGLzk9pUWfKTJb5D3FZr5wU9zc4Zb5MGe2PJbm5ate42Gg6TRELURXXqAUpfN199fQ6",
  "key41": "54sL5KtzZhaLdx8xs7VVDmayNPo9LNzohRdjFDB6NAApWjhZLLwUSXX7cTYXi5BCxdgUUuwwpMY5ut2J6yhNAzpz",
  "key42": "3z3QR1hBVbzNiBcBDNoUYmuPYR8EYHaRcyxk5KwtafsSVgzBpCARhcyrh8MZU5ruFKwpcZqSW2kBSFuzHvU7u628",
  "key43": "4XFiSnDrLmcQBevF1LU3rCHNPubZ7q8rCZceC1G98ukDSbejxCbMxfA2L5JSt5H6Bi1M6hB5YiDweaCrEfdLfgMt",
  "key44": "xHK5QEAMHVGuUULZxihMtkbB49zSceFgKymHb5WCU5uv6rV9N1cHa91BkV88HhEvvk7Zbkkjn573B2fmZFxXyhZ",
  "key45": "2AvbXgLf9Girg3Tki7DUPUMxG2mom7kQSyBdf7ZXFTsYKqytRq9a44iDPUYhgY16ZqpQHzNEb3uiAwfgzCA8mzUS",
  "key46": "F8v2X6USa8kveG6udWtXKkGAohP5VwHhyzcZ5kWwzpzGaP1wDamt2ZayexbQs92i7JbyRCdCQWBJxbLEKWsoRqa",
  "key47": "5E8AnxRtFEBeG3tgmzcR8y3Yx7RJuif46N1VwrmzA5MQ3zdir23zh1EiMtrBvf6XQQQHvTwQDerZZVt3rCQxcKeF"
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
