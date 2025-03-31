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
    "24DZi9yoyFm3i4cfWpyMpj4Zi42H5FGCem1MtNz52zUaCJn1GNgnM6qqKzjDoJBvytPqFfQFKwaAz6gB2dXHe84f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642QDQyLGq8v8o6LLXLG9CpBRj7ZWhC9gJbUo1rr9UzGuwFerj6tG1mvyjJorz1283LFNgNb3jExKkEfVZdoFNJv",
  "key1": "vYz81WuAm6DBcdsFmsryYdwnCjzyxEABKErrHFzEiUMuCSubnjou4aSZxcvvbrn1zkK1FNGY9ezsKRfoEWZWZ8A",
  "key2": "grjLeucooiRyEi23bkSgv1FcwKfuDPcKHX56rQZuj6trJsCF2wWRPvxQbWyid6YbHq7Mm5HGtCqWY7t7qKLBfBR",
  "key3": "4PdtSWrafrNNrLmHZUsqNVp7dEE1MayT1oPLaUr8r8ijLhRb6sTsRvbTkd8Z86uRuQtYygx1gkH7G3yUNETGaDUK",
  "key4": "2d4oPpmKJPDRqqvTocBKSZJF4TzuXGwSZtYh8zuzjvEPmfuFyezYDaZwDFyYQkTdetPS7JGHgRY8n878HWEPZKuu",
  "key5": "298cZ2ph7XapabCxRcz4EM2FdXSgTkcuvgV9ViaHaZnfaiqw4yJHPgyXREu8h12FScQG5Utp9ZVMkPETbEqGXL9S",
  "key6": "4UNE79vf3JA86UMtQsgGTTKfjn1ZcxciVZTnRTNojYmoEVp8FCTaQJAE5eZRnFEYu11AkEVDPd6g1WZxawTQemM4",
  "key7": "2JyPiMC4qvbfUBYy9zQB4EJeAt2pHHR1uk2y3PbbeDz6BKKEUqn9ykBaF67aeh3vfUwEkFBQANv3v5Wn3DugyS3A",
  "key8": "3z86PdxZsJkvnKZJWogWz9EZE6ZjC6qh3UJDjn7ha6MPi1ZQgMn6sQbm6Fio3CVX3bFSe2rdb5kxPUUDK2AGMBsN",
  "key9": "2uVNkeoYheoeEGgDUvUgquCGWyGdaRs2UjrnqsiRzA3vUPaRKPDGRfq7Nx1vHM4mfrPs2yFzN4vp1AZBMU3K4p7Q",
  "key10": "4zfogpYsS9VQQceoWZhkPAgCrr8tHUzf6BRVhVCco9yCbVeYCAZSs52xZQUDr4tEWXWkhGgzrKrTrFomtjB3JYm6",
  "key11": "5LSd7is9zL6k5DhAEowv6jMXwk5UyJkdW8VaPLhhYx2oiryPdWmYvife8ZEodFY9NHVgX4rRJZqryYg9u2wp2akq",
  "key12": "Vqws5ct4Gc9z1sxoAf5m7ZMTvnixbLhEa2MzsY1g1TGyJBqw5rbe4w3ixJJHze1mg44xzAB46Tqdrud43FHdism",
  "key13": "37cez8woND4fNwoTvYQryBQHKpDZZF2H1ud2D3twgDbs4Uv8LvPjGHweLztCXjV6GyTZ2Mm3DuTC4dtkvmuwPgaW",
  "key14": "44PtQX5FrrE9DME3pHj9G3K8yWe68wqYTwujdyQNTiDawa4oYer5JJyFCpGLs9jyENet8XmGhWZe9jBVjXB3mH1D",
  "key15": "5ziqjKWVSbjSbPJkoJ9P5xTBuypUFZmWFBdsQGuVWtMkVEwW7zjt9mCxJ1X9N8dNza1vPV2CyjnXT6d1U5m7s91b",
  "key16": "3SUxyFdr2y9NuoqoLyn9Vg9ZSsKNkYtarApkTKdQsjKj11HceFdorWPQWDVmmR6k6e1xJHGXFhUBYStCURsCJT9d",
  "key17": "2LVA4TRPP8sEyzVqm45ay5FxL5CQB3NMHfpLQ3hf8BUMaRx9nFvxKJBWbopD2LXFdAkYHCAx3mW5fWP8jNDULFkf",
  "key18": "2YmCtr3bvW2YvgKBzrYp82fL9pcCJTDH8SzpXVxW5uJV7pyBqWhRKX8A68rZtHP7RPCWMhc7QZNnvyQj3D9NvK76",
  "key19": "3def7ebByXibqAP7z8ooWKsmNknkPFbRZvXTYEnyhHnQ8iNxb6bnc2fyr1SZ15UCNYU8aPjSvpRJEgYfDiXf54Qx",
  "key20": "4BAtdnkWuY1LaD5Qrb7MDAJeJtZ3WNDBVstDHTRzBAAdUUpb84kNvrUUV85VE4mDDxncU6H9shcsFbnVdRHaDxrP",
  "key21": "4N6rMtaUFu19a1i3ejFVdfd9mFD1Jw9vMsfqLbHqeEkrGRerkTbP7D9fYKHsSdMmuuLTnhjcDCQSnxvAHkEKx6Uy",
  "key22": "5jZVkM8HCzxWDMe5exPEDbpqxJoW7ypMFZnBEhKr1rUpfbN4dbdeqw9zK214NFiS8mXBWZanewTHzm1hoK5HPrUk",
  "key23": "5fjW8wfh5uzY9nQqfKeXVBaQuC1uhxHainXCStoV5wcqhK2vxi3BngeP3TVqnB8tJ8GFAXt8XE8AhG5k3Q4r9ECj",
  "key24": "4wjFhuv1QpZTYvc3ANRru9qvGuowdsEWbVQ9iQvD763jr6QZWYRLYENiNJ9Nrc7TQRywdeyCVmMnsxNswjAr6mBG",
  "key25": "4Kfo2mMA2tDLSyYhorzCicPMn7QvkMUai9gh7pQ4gn7rrSYwJ6ZFSCFhHfL3rJBM8gkHKbVpn6XBfcidGDpjdeX9",
  "key26": "23Yiz8rgYaGoq27h9QSFwhgmzpGUVtuZTmBrdyRHrJ7LgrczTJV4TT4YXySmr9R3tmhSHeZZpqwvpZLjJsRbPMXx",
  "key27": "43opgpJVapW7MGTZigQPnq5vz7bjDoPGocgJq5pSvsxSsuTia7bJrzjePDUPg1h3KwD2xvmHQkzmFdsgVWAcMXc7",
  "key28": "2hR4LyqWxmZkVFGs2xFMY8TJ2gUkv6jDyhf35CVaq8gzjDQCX5wsFYnPyJarvz5mb7CW8CmmPW4FaAjgXwuz7meB",
  "key29": "62PmvVwyF48rwUcz9cShAu1jGsSibgdKSK5LNURpaYwRsi4QkgneDs3MdeWMds4Um53KffTT26r1R6ALd4kGqQZY",
  "key30": "5EdisoTRWtzB2QQrg1VRfQmgwn5rcfqDahBeQX3vSpg1jDfgGnPnDVt9RSdmhHAeXfLbgTfnWzTjeqT2yVKUthNp",
  "key31": "4wQ2mZj494xwPFN4aMKn3sZ4B2xzxTT4JgTfpMFDd2nkdawURU8PMpixMHN53ySF147Jaz9WVGp7w1srgDVp3oU6",
  "key32": "4BUCfjjnjdXFfMtfTy5XxbDKVMvyPqH4CwNv2ceQzPKNKiq8s4oWvycYf2LMAv2SBM3j3r3kUYrbrqj3P4BFWHHQ",
  "key33": "585fQtfNC3HKCP3L8bnuYJDeRUh9ozRvB4YsqW8MBjZekngx6tUwDHAhq99U5NdWevesWBzq9nuA28poteHqsfEw",
  "key34": "trFBtZCcgvasLCcGxwWYifdwA6CuuRR1hYeRqyyEnsCLNsq3PugyFHfXtELF6R1AJm6RRLEZ1HL4gv3zV1xQb94",
  "key35": "3rRuGUgwD5Wm8v9y1FxAtwmHrvAvrfQ1o3PF11DzaJisg7gseyHvoS2gvV9AGTTPZqsArG2rbTRPAi38otiuxrBP",
  "key36": "2zRbeah5ZGVoZEW7vAv3eskTHoPfsbRGQSJ1LWbpp7mB8veB2cv5ShnryoBJnL8x6FaAMzGNZH6CWV6VAMXJBttj",
  "key37": "21o7u8sEWBgyRKSDwRQY94jWuJ4WwBpfC7MizSpzCgWVMkUz1h9KbkqbrUh4qZHnk3XU7c1ogqnziFgHr92DkurS",
  "key38": "3b3zhd7WwbCU5D2kBkK8JM6CgZ6NAy5HW8db1zxaGAxYE9TikkrcF3ovGkbpyYCvqdhbs8yFFiDoPhM2a8AickhB",
  "key39": "65WZh35wrVXD4CzbdZrNd2hv3QdJe2uxab8zwQpt8bceiFZyEj72t3m2x3taEdpHn3TSS7FescmP6Bvyh3Zg9s2h",
  "key40": "5qpHgAJkXMUDNjPSBnj9pMz9ct9beptga9JxEboMbB349u5fa6AHjycagoT7jUE3Ukx7nqB2yedVM2S4ERve49UL",
  "key41": "dPSZ81kGdkPa1K1V6K61Dk3JxDfySZngEiQytf7nLqDktrHSBJWWrvYb4HKCBYhEyDVG3dVd9YwcNBHTkqb9CN7",
  "key42": "2H6WqKRHNsMN68bpR5nAiwpDveBhSGNaZfudp3ddBnBF6UTxG9TEWYRNy3jeTjcvFqh79qBiEmHq26AbGSuas6oq",
  "key43": "4jZp5yHirVuhBNVyuqUtA1wQL4WKGYCqkuoKJ9zM2CLnD8tQ9KP8X4uF3m3DjXZoFCNTw89jYHqkEiaBQMaukF5h",
  "key44": "51g8AvkvXnDrAirzkRWY5XnxkerEfoqUKL7J65UWitrrMbq4BHJEDunYHQL9GBpFvShgN1uS6Zo145do4GPHmZYL",
  "key45": "3XANcAco34AdX4YaN8rPmSHWNMUBK4T1zs4p74GzrnaUkq56FNztKZVgU4MqF6USM8U4cGvBzp3cmUZzBqrgd39w",
  "key46": "2wxftgnzBr8UvoEQNSWFfztWLCdBdEas9dv4GpvprdC1Fk6S6wTeYVYL1K2S1GB6R26Fxzm1BT2usTGi5U8AeB7z"
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
