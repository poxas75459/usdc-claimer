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
    "3fGhQ6mrBNiRnn6YPiTB4cRzHA6HR3TydeZVEmHMm9oG4YJasSnorBFy5ys3LvohHV3rUSbzgNMcJgfkrBo9tw5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Br6E4iJmEfFr3LTFHvZzb3D56xTAAhk2g6afV4xA55AckMqy9L91LXvKM5ezrvmXczRRtzyC969etYJfiW6Rk4a",
  "key1": "vxnkqPXbVpxaTnNUZL5XuoBL8CKvM6P1hhEr8rKH3Vk5D4Md7QBdB6mdMb5AFvZQKCg13vzNsS9uNdDSAGZZkBi",
  "key2": "365MeXriii3dPqzQH22AGWek7LniE99FRquuA9Bzokn8DYLU4EoHKVNmcvSz4b5wgdR7oYtJYFS5gNSKTPh8d4AN",
  "key3": "5TzAHNL8uu62jL83mFvUZDSM8W5LQAdfXtnwjVjrdx2BxoLBS69Q4CjadcuiiyekXFwpVBYUsitE3B5hVDP3eaPb",
  "key4": "DH1zihXfAnPkGGuPVaToZvhYx98yt2dM7jpTKLtGqWxDLYc7D2hVit2gGfywis6RGBi9GBT9FiqmYuNvAxyVWpd",
  "key5": "2x2TtJ1RVLMMXvSd7E5MRdWuj5KunWHkrkcCzgdXF6JvZFDhjoyJVtne7ZZcSYxkdqqKWZPMoxafW4EB3nF3PVr3",
  "key6": "3b2ap9yqnXEz3cndT2q4wLGVar7brYdnyh7q6Vi7LepG12BvGiAzZ1KL5WREdntm5NDZWEBttUppNcN8LiGMKiq1",
  "key7": "3154mdqKxtRt1ofaxWLirrppffUu4TcfmEKLA8qBxxe6Qeu31tfUqPT5n2n2drme8UosZ4g3FSU9nN89rM43mMN6",
  "key8": "5jFDzsPezxRqqw5p4Uyv1Ar2j9KjEqMA8uRJXVpKB9ULeSoBviDkTeTsMPYh4dXC9bFK9YLr4wW19uCeyXqR5FpY",
  "key9": "5Eua9N7KhbY5HuzrmcyJUFs4WzsiCvR6Um363DCvm29ikDWp8PY3wrum9WNVWWZCv1gidLhctSCa1dFJWdNYmvXB",
  "key10": "4Qau4wL6DVhSSjjHWaQa7NKQVdwNYPWYQ77vc23uXmTDDbwdXk4eXtmkaRonYuJop8UkxYxnxwcYdcPR3WCZFTY5",
  "key11": "3YPoFAh1BkbhFQedoKNuWxL1MDPzZPGT5UbdHE3ZXRA3fsYQzyrtGAMa1uattwFdmoMNgY9Hatu5qaGMPtJqaiLK",
  "key12": "4nQRzs2VtdFNKrWAzWUPrJ24ZfNWwiYKeyJE7sFu9B383Vw7pPrYvt5nMmU6yXzF7fTrzCnTBeamfRAtLYyyc4cT",
  "key13": "4EesQggJ2KVkLwxjV3zjxqhVLap3A78Z9X2i57KxBKoj2JbCKMdcAPGPJXQ23TQSg4b7Lpf6bCogPrKYQ2DZhihX",
  "key14": "5qt6r6JcXjJSMy4YQtaE3hsGpMwcZ9G2jpzb19DHkAPZGFVzZGwQj3qE86ZSGKC43PkoUh2VBwQjkzur7kQTVZAB",
  "key15": "2BJftQNqWKd5p6aue7ueQHAr9nGg2AANbYbBz2mHWjxocYghXmXdBqtCXNLqwZ7AMg9tamTTY9yC6xUrqdZD4LQV",
  "key16": "3L2DwD9XwoCMHh1pW2LizjQKpnTCYuM531CCRQuwAdg9XxiMyu97anpUdHweGJr5Q65omzbG8c9UqteG5iWpg9f3",
  "key17": "j6qECS9kh9ysXcXqo6dExLe3NzTrV1kRfhw81KFv1N4pXpAiTpTBHz7Sp8KcAjtW98Twi8QYKiqA4MNLbg8mzpf",
  "key18": "5AEBf44m5LXLpgeGbj4LUFtQ2Tk6BC1tqdPDw9iYyLLPPiwQsjRJgt6AbwzsZjij5JNvdDJXF4pkVbQCYfnfbmPy",
  "key19": "31TjwStnkbDtjzhyZ6AeTjsZvUaGpbgAkWqrrHK4QpQ3oH1sP575mkXFnHEdU2LysxXMazTXZ8QBP3KKM2xiJtEX",
  "key20": "41DQcVuYqygmSetAY7NJ16GMve3CyKRRejamMEc4uMvPCCAQEFnryJH4KeK4uRm5wJzjowa5gp2WcG5SVRJs8KRC",
  "key21": "4TUs2F5EVW6yTh1cyqaiXW5NwGqVR63Z3P83CnqDVCzZ5ML6ZF6C9m2A19GvwPXc53AkLAMUCiiU8xS8YGQYVmDq",
  "key22": "4zy4RXSfbYtP7qtiKxrtNt6VhQzBNTpdC492gfmXgQ7jAg5g3sKGXetkRSnT6qumgmFC66SGkecWZHShkqmcQjHM",
  "key23": "fSuao9LbCkjPFeS35W171Ri7cEwswZ6wKkh6kYXDunp4SdDJpurY5RZGjFbQc1TA76AKUi626y4Yx9XdmJY2SRL",
  "key24": "2X3oD4SfX3zHsVvc2gkGoc548KTM88MgzTHK2qj6Jr9ri5JgRxMdVftHV6LbFCsrAdDyYmSVhgwHkuRtNiayB3A2",
  "key25": "2pgzxvT7DRjj5qeFLjETE6ToQi3k7m99rza1DbumM48DoETjwgDDBXY9AfY5xN9Y93KCu27opDfkYfJMNboaQvg8",
  "key26": "5JHAQkx1RSgTgxW1YtDCpn7nFFWZcwCbbj8SUz6n2zg5QicrQUZutNb4qk5PQv4HbcnsJcYdJZLFqYcSAAQBgJkd",
  "key27": "5doc8hXK4iq14LU4QEd3akBPQyfxX9VjyhLdwPANYJzSqTciXNJyjevpNmx6ugT7axctC9gDDriDELkxGVPdHnhB",
  "key28": "3VwEhBnTBjKKExNkv5sgZi7ZdWYpgw7zQHB3vJVVEfhf6WFvZjT1taRGVUgEimqmXTkmrZzWBLSXioiehEL2sYi6",
  "key29": "3eNRAxe1wL4zUpURQVgJunyJGNKgTNkNnByxBdKTCxKovTCC3a3fLxJ3zCDpukpN4NJwasZFcMk1X3HdxoFpdYP3",
  "key30": "5kaiwVQ5RjyT28tmLjEDzNfhvW5RdNTMMCftk6Mqx1vhsPSb2CQy3a21HmVxRV3s7Y1PTp91rLLEujbAnTfZwcRm",
  "key31": "63F3hzk8Qhb5rZW4wsayRTyc34HL75YDQtpSD4PxzHeagucNmP5KJgvQxcETVyPovAxCWsWZEx4WB2VhFEEJoWAy",
  "key32": "38yo6TYhUB5yzVmpPUMFgqBuve3BE1qc2DRQaEBjDHjUDC9Pq7hrGEXwHJVedqC1D3EbYiFSVVK5HRyJuxpP2aLu",
  "key33": "3NkMYvHEiAfeHVhTM8qpJExxVp7Scea1EWLF4fkzRGzVre6aQVcXCMTDRWXn8Co9jfpYVGNKhqFPp5ZfSb3NojgZ",
  "key34": "LzhgMep7pkWBBEeGodnTUBapLKHfZCLzVatm9CQEpMattjahytCdSBaBzYWSuAfB4GpDQhumma5M4PhjaPdATaV",
  "key35": "FQNU4G82k5QiAFBYfAZXqqnFRR4g7v8DQq66nfSKiyqtrTqzTzSBL4GakRrCmSKUg4FDtDtqMsSZ5J1KhpGiWLK",
  "key36": "24nHgZkvRjySzRSWCELfF4RrVZBRXNsnT3c68Cw6xLyptmUJritbaXJC9F5rRgncgLs1e9G71UAFX3rW6Qqswb1q",
  "key37": "4R5ZYvYhGyLUJYUPigEfQ4aJkF1nqJk3Et5G82kuDYAiiT28s73U6mcMyGJ6x4Qx7cti3cWYQbqrmaw25gDvW6MC",
  "key38": "33NrB9LoWJyy8RJ19rgajpHu3g3bfMzoWHPfTJZnWxxGLLs3jfBbtpZomotyCzEtAeYxTJHLKd6FqVLb6XNxwgb1",
  "key39": "48nDafkvhzkQgFDqgZCAZRb7J6UWyBFq6UUQmJmvuhz9wrzXZFoqv6MrCtuEvtBvxPn3hLUGtrWGeUSgeCbeZeQi",
  "key40": "2CgkpvomsjXhZJsbeMH63Lvqp844M65RCehwkfTxCdABCi36DFpKfj82sH4iRf8JZevRwWr98ngLyR2fiu9ybpcH",
  "key41": "wS8GgQ5CpnwZgfPZu2TiCxXEKja3NPapUUH78Hi8W7NciL6b8sHNwMWVpWAFtB7fvBpvbECkhNY1A6Hrc4MHY2e",
  "key42": "3jRB228iv9qHTSkpQDDWdbErTWqtdTNFxdzi9bJKnhyNr7srKtrSQQV1dBb6Sw19L6tLUJtmhTLm8yGuc8BSASTG",
  "key43": "4hMqiCbckJvLnqnTTipsrErdk4vWLawJYRzy6CJapCcSQ2Ad3FnmvLcxqcMZzaZUkosVHYP7BJJg1oCkmbw64HPD",
  "key44": "33pUMpYq56yz8G45bsn42bNdLwz6RPdctWUjVL8nvcqkuaqNm6FZb2jhYCW3ru4EytzKQEPpWDjYSKTUj8MUvvRq",
  "key45": "29USEKZMhexUQ51ohTuo7XvXoVpjEVkYr6fQDzgxZzqc9MrBieEkNj7Kb9TBAfnvMJCNtqJGS3rLg4uTjuVt6PF9",
  "key46": "5Dr97BeAgzrmic6dx8KiajqVPJjGTP5X6hvubxDLofU6UAA1bAaEs59mbotm7RgEPm5BcgrCEDt6N7o4CGTkjTEL"
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
