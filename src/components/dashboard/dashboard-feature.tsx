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
    "5KEMBnavNxPcDabTKT7giJQ2Vy5npwkiid4QMqy4KXW2NzwEN6HVCfgQ3fHVzYp84C3E5sUpEK6Bd9j4G3HTCNaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAk11X6bMkNAeijqj8tHoyfCz8fr1PWznGn9XrcgcSvreFG7Cu1Z63DVbfMFNruZnYWykSH9eMjaHaagCWEptd2",
  "key1": "5KxdnBMoSCR3zYjxDmqMQu3ADNbPtAyvNLSfru1Vshd7pDKA6BBqYUqYgDL4vNVhjnGXJ6jJdAWgLtnkfwSUkkvR",
  "key2": "4vV97nxA8CAzxHPSTkr5oqvXBEs2ETv7TpJp5Xb7znywWA6zw3tqfJ2xCnJXxEphg5SKzCry69BBQLbHt8ALFtmK",
  "key3": "3ajQ6J8VfEuhMEih9jDZrpmTGkt8A821VyCb6v8Ue7xZdNiEERoVxWPgU1gugxMZb3gf9x57o55XXXPi7JXLYkEZ",
  "key4": "5aUPYLaCdUQJ5MK7gr3JdSRRmyU54GBaJgoBnrmyQ2HrKxWZRR2UvN7m3AX2bd1ywvS7pkSJGEENb958F1Zhq85E",
  "key5": "eod1gBsMRF7HKSG93Lny8FuUTLWZiq4kAaKnwYYeV2Jp16moCXXJXSRKySWTSXoGhYjV4AF8mQp9rHoEWn7fD9C",
  "key6": "3LUpznB8PjsmBDzeNFaGRQeLdmJuEHonQt9JZ8Bn7omzruE8hC7v5mQrjKaWuGwyqkGG8UbvwAaMS4uUMGyuCR8T",
  "key7": "CFK5W7qoGyveqVbgNybNVz9WebNU4kjt649fUrAfMrSdgFuBTZRZQjesVfSpgdbrrM57BGh2Lr6VgsN1mGUaj6b",
  "key8": "5i4MjJCDFG565ZPU2WLX2YxZWfupsU6AFg9vmsiggesBbf96ae7jNVyow7tgy2GjfT1T8DvM8Jmxc1ojW1mkYM2b",
  "key9": "5M24k7YGV5o7gDSQQcYqEAv75GKQth7tStSk1RtSG4a17MJL8RwPabhkrjGWqD3R4Q9pvBa5Q5emj3dC1jeUf3TZ",
  "key10": "B8Ca8ztMeD8Lyp3jaPpi41JK3qZAhM8MojpuLaUs35zGEsrdmxZ3KeNTrRzo5J9FWQkBsBFAVN73xhwQczxCqrV",
  "key11": "dMwfyppEKbobLLju7u4jEuTjsot29iLoSDJhAjBDVGnaGu1X1BnfZkkYMN9JBduBLJRMohWzqwFQyUoNGFKCxa8",
  "key12": "4ga1XczuxU88Ng7AjPw4oDCDFyPfRPLTWzNL3MHp6RcFvRaQybJR3xm6yJHMYgEFKP843JmA7ChzDowZUc18dYof",
  "key13": "5zU4GuF4xf4vHLZgF7yKYFvet4MF5kw9Gjdhfm9yK1C2yieQ9Z48Y3oY6hVc2fMBXg926f1DDiCTaFgxBtgx161a",
  "key14": "cv1wqMFkD3mifTfshyje8SZqFwWt3MMZSsBXnLHJPYAtJ2kuWsX7frFjAkQ8QG49gbGdWgom9tMbG6PZnGb8NUa",
  "key15": "G44zzm4sfS8xiCgxGegk9zZDUAgUWJfswfCYXmqx5bnM5CMi1gTWDW2dbHQh2CWSvfuUeLYjDMr8JavsSsozDbp",
  "key16": "3apFbGfboHzYSVrdLorfnD3YuXUv3Wg1gPsHK568pHKT1P7SnaBAu2it6vn7h4CjsPHWuLwVP7merGXcnJGwXS2G",
  "key17": "2XQvwtnrocF3XKvZZ26a41VgUDqPu778mmtg5LboktHSgKBPj1sU3LZbXqrxZfVVSAquAsQMdxoPUc2HvGhmnvgp",
  "key18": "4PEBbq8qaGHTxJe3xJMfeiir6HCTmb3bz8JGjGJLBkNWdaFox7RDyaXFeBQjdUMd2Nm3TeSDcuojnRZnVMUKER8A",
  "key19": "2Hs9rUZqxTZx4n6ByE3CdpMmfumYNjS6UX762edwaQUDKUXkwS3u9C7cQj57dsKDGaEKEptRZam4syZa8PuXnRLw",
  "key20": "3cvkN99iSGKn9Ncmv26MMYL4RsptFQWzzxgVFG6Z4KFkaBaqCysQyM98bW1DTsNcGqcCpfZLM5SUL2LZKhTBDqFr",
  "key21": "4rMW4HCMnwUMnTfVwUKmZfRURThFQEr1jZ7cQn5hD5dVcBmoijJbkFwCGjdQAunh7HG3V4D3sqkufMvxUhRp51LT",
  "key22": "5ZRcLt2iWHpJQiWntHfxdX8AdUJBA9Popms1ZzrJuYy9PtAEyD78ybP2BogzhxwPfRJJcUzDKeTdbu5CQp8zhLTy",
  "key23": "5eS8qdf8QPGV7xp8cKTcWznbg8SuFM9Hrm7FA9iaizAVyHgwYBZN53AbWQa75kpKdRV7K1mSWpehotKQCTPEQb6Y",
  "key24": "2X8zPVv8uR35WHVSzF7fEDUeKv1Tq9kCLeBgwhq77BpuNxv3ihjwdE9GGiFtRV4GoaqaNGS9DDPNwPwSXiaG94Ns",
  "key25": "fLQ8DEiE9h93DuMgT1qkaoDoeUJzLixhoZ7z73nWazxYURhsfAorQyXr1yNSkLKU7WZB3DLH6musb69guJcBbYa",
  "key26": "2hzRu9aWH2QrKugBwzoBHaxASKaXBo8xqUcEj5zj1SHjKr97JstMbE8HaFxfdwNCwWoXxbYenvuKFSn9cSEAepjT",
  "key27": "3BWtRVFbWZ1FELwM9dTPS5UKK4Y62sc3QzGzMJRThmUi6LE7pddSKDPKgLP53xw5oybVjtBcySw7mizvAHY4PMmT",
  "key28": "4VqN9avNUac6jDviiqMuNKgy1U6UiPRue2NuZXRpXuQJodCv35hQtv9c476uTd2G8CwYTSrDyw151iwUWsWKfd5w",
  "key29": "7YAtzHHQDesd8FuztL69TDqvi2dxuAM9YA1hCMe4fMW4KnQhKrCUS1TPwJt8ryTu6GGkFDuFVJ37wJi9s3Kh4nr",
  "key30": "2W1627zpHqaQjhCttJTwFRuSRsFfiWKTdfcvJCazRJ2RCWD7kZiXCfFyqwwfgpMJZkZPWkEgMj1ThyHeQZLy4Bbj",
  "key31": "2NsYtzxMtWVeCCCyR6YZKoAP4nK8RLrq2Gco6fpdYtGYPBPhY7m4VbbKJZ4ryJHUYdcY5NP4oe8SmR1WbVHz2QiA",
  "key32": "26727SD651NNKtutzom4WvyQVZBnWw2mWzGj4tpgngKW8xSXUYM9AoT8Zi1vew9A27jxk5fxJVYo2T7AHxSWcqLC",
  "key33": "2xceHNDKHwFSwgbom16w8B2kZ8Z1qdy4RziRQ2xHtrDHHXHfKnqDGTokdwzhfntRyLxSzPzg6RXzLgh9AS9qnNvU",
  "key34": "2mqCRLNQ5wtCCR4zcZu4iL5mRsSxov4UfGxQCZjgb7bngpJHwsYiUuWPn97NRPWpbWw9qyeA3xWBWNYGpH2S1QQx",
  "key35": "2LEvvNVCGdv8iMJuuccSSDLkoeLJeNDuhWs6hNbmTo7rvPweB6Kxky3wmDvDRnES4D2nu49a9yVtSpMQNxXVBdGu",
  "key36": "5xUVHpLuS3psPH6DUGYukU4imyPBFuxTQEsgGVVtPeAXhdzK5BtPeDQmvkrx8MtHZ4zHz9EUikx8919HJeGg8buB",
  "key37": "5tG4Y8U1n1rkfESfYwp3yqxHyTmw9ZyBjdiEKZ9UQTbeY7fDFxgqyw5Vjz9TdGRo49tJS6QknsaJ5RKPXAuNzivP",
  "key38": "4248Dib7Mw1iC5FG7jLLiwyiQf1eDGcwuB6Pbqk4T9Hya3rhYFfNE8LtD2zLhv8KVW5vfT25GBYZ8yW8MhLF7omz",
  "key39": "5n4c2hQv4XGwJ4i9ESFrhcA7odoAp9tFWk2QgkBq34qaQ922kTcttmy2Rd15dgaMczerFQuSbsEiihEDB2LyqB13",
  "key40": "3gf7AAtcpmPFAnxhb42VaMMRwjwvK7X5M4SsPJZzgP81iUy1ghXGHRAX8pwYszR8tmah9M8rXthUMzMtfWsBdU3X",
  "key41": "2fzPD6YiqUgWjcVmHtLs9FKuGjicpshZc2EGyR6yWhxDygfS6LceKFaKYoxGjmxZVWZem8exha7QhwM6X8YgUxgm",
  "key42": "5YFib1vUyr9fRMsvjdWVf3TMTEEE6FJKPGXofkKEvvDcbCpN7vKygvZq8aBRPmbtjmejCThxMkp9pMTkXB9P1KCH",
  "key43": "298DGHU8m8jRuuCyVgd5vX1mpx2Tzro93eT8h3AKEr2NZQYyu5HnRewZrJBeRrXSzHXJBcjzCGid84H5E4bJE6KD",
  "key44": "3KL4y1RqLsMV7CNBTSLR7hNsgjdyyUuQXbXKWZtzFo3f84A3cidHnNBBa6wVZ6c1bqkijH7FwtC314jtqiSXidSs",
  "key45": "338HvdXpAqJJXX3mX31UDwReWyzP8WUAfHVqhAMr6Hvek3vLhrUoAbWNYU2WQXhEn15mUQpQpSRYfxJy5r3MMqGX",
  "key46": "2BjFab3BV4QvKKSJBmDQrDTarhqspEsma3ctDQyZ2KvN4iDTEUVGVsieKdoih92FCttt91UCgXCSDkNFtdPsfSgD",
  "key47": "HKtAStNGNEvxaWAPy5kBwHvnD7J2utExY4VjSHrgQCHsyyAfVaJtfd8pzdU2QtPViYXvhSNzAJ4b5Y5wMmUtYe7",
  "key48": "25wnMvYnvYqypyRUMiUPCDv61Atvh3qWmFB1BZMcFxW2y4LfjA3X99UaH1wADtgYUGgqSuFYnFYKmQEMUgrtywqd"
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
