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
    "4a8nEfDDFiH6fnNYGssEwJrpzdhTt1uxhVUixLgipFcdMAUXvBDHDKoEvYWW7RMepD3Eu6KV9oq48XdrexuakynS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kGqErWNho7XMNLQDnYBCqR59vXFjrCYELsKBE4qBUodBjGRFYLT5QbyUZUkkXFTw9CkMGBEC9USnALAGJhjPYzL",
  "key1": "5gsXgYstP8AK5EzPyWqqhz32cRrnbJPWh2W9mNg92TVwhHn5Pt3JYbes4CaJ6Czi58XMemenjpKXZptWoqRpCYVG",
  "key2": "5DKnaUUrCyUtpXzFMfcYRJsTNudKzk5MrBNHULfkZVugqK81vTKF8JNq9PRbESS7mFfH7nqof5y97xTPBppCtUiw",
  "key3": "3s5f89VfUSBoW9sgpWxPqFiWyXmmKakccmeVHRr5GTzkCAzQ1y3FM6kLQ1wztakypN1HytUpShiWCdGG1BPFerg7",
  "key4": "5HYDbqvCrGrZoSydD7BgzxsKPJC7tS4GLGqn4HHm2DuFLwqtgEk2YGeZ2MDtbJv3xPhUjsCs2BmyKiLCKUq625ma",
  "key5": "5oWdspAq3bP54RZEMAVHVR6KxKDmVREtcbDvRR84gNBjcDx9YKjDcPhx5PJN9haAe5HTSVwu15f6pJn5GXWAagve",
  "key6": "VAxqpdkk9TzJTxqvWCJk4SjWftGi4wwKdEZEUc8kV6o8PB51E1TGPLVceUDcWSRLvBGftUDAXbnfYGMsbQrmuzh",
  "key7": "3Qa3gPLpsZcQc5dNXPcQPGGKB5HAEvnAyzs9ZFPDAGkttgkfKDWDNhVFUZMDmhFqUM1Wrka9xFE869q1DePAa6jL",
  "key8": "3us2LmpwtsEbCxQsfBAAbtqYmEPUvnTufapNw79gQJBr4WMrDbms3wt3fjLpmRpi83cKggkNzbU233HpLFdxR2Ya",
  "key9": "5PUYvWQUP9mXkwhihsxoYD5t3dpaXD6tWydAyh1Pt17ZJ2isDu1bRi2eaWYg5Z9555MkUK5bFQaKRZM4X2M6CPBK",
  "key10": "5W34tEpmmdfYuQpm2GecpcxgWMxtQKytQ8dUZhuxSyvry5EsZhEUTU9bTJe9YFQq2YTd8f1NCJ3CTyb5qKBrieBG",
  "key11": "45DvcTqtFEjonmWN4Qk529eQuTtau8gxd6GCqhpf4wWggWYaM7ck5U7f7bYJ6eYMRufHK57gtvUjV9QF3TfSpJhy",
  "key12": "21oo3wNVEfKgF38rZUroSxjZr3G2hHeDDM3BdEn8BUx6rHZKccHbEvuui19z37FF27FSNm5UzT73C437pQDEY6jx",
  "key13": "2G2ETXvaoETmsARrng3LuzwLvjobaUGHCpBfxD3fYFeZRmZATfQCWsrnefB9dZovdmJ1zaAD4PhHL4H7DBzGjbvC",
  "key14": "3aTdtgGCK9LfgnEE7cywF3KRaJtH4nbF58Ga1uow6L2KczMCqnKjVXQ3kGtUfWWjBPZbNsK2reerNmsb7KJb2z7c",
  "key15": "66eXgk1qGHaQ1BXjQND9sNAkLcd7TNeJUeUfipXNhDtbL68w4GEZLVva3eom3dTUyp4bC7KR8HJjUPGFqdaYEbX4",
  "key16": "sF7YxNPBnL4gNHB46pQbG7HZjtUEETuxcrL7LAeg9r3ewZPVApd6Kw9ftSU2XhRWfTXynFWyGkEj4Q5sD4JoWrm",
  "key17": "4DSRr9sUuYHnt7PgwjcMQRRhQHhqUYMjtW4SjUkW9YQdJmYzEvbVCeJUn2eWBNXLgmut8zN22Pz66RP9qF3FPUBs",
  "key18": "e1huv6ZmBC2JEML8uDDFiYt7JcNq72S3MREXzUX1FiuEoVJGm4tuD1qPhRaPnEDoKz5ruQH1WKZVZ7zaFT2XC7j",
  "key19": "4yUsDG1EueKH2DRag7wnVHrZoEQyHqB7Z2bpx5PwASQFygDaXyg77uddwr6EsYwFZJGAYSZdrzh1YpyxC2F742UW",
  "key20": "5fy7w7k9FFcxdBAZVCdN35ZXCmP6GpAq3HksUhjyVLBRxiqpC3BFUqesXTh7KHLHHGN6eTtvxSGEEn4zPR4mTcQZ",
  "key21": "m3TTrrbogLGMtoFQusQMNYHC5rfBJ4RuQRTDaMNHHXEBgS6C17tuFWQHxMa28i3buz5RwNS6UbGHX8rZewVYA9G",
  "key22": "5zeQG1pMdFtxRMnM5QZekSivD5WSjtcb2XYhYZpYVQcFfQCS7jpgffNtHGEaSt3dovU17YnsKsN1sdNeTHTWoGAc",
  "key23": "2BRzMS8MzRBxz8b1ahhGkV3FM9bZZgtsv6CGubfF163CD1gtZv36xbLCJguPR65aWppnXHaBTsGnKPf4DmhvPZ7M",
  "key24": "67GuqNkvqu2UFwvKFXqSaJwDgnqFupjNFK7ZEBSrZSGmqWUwEfaWz9YUYnsT65SsJHmATot9a9HRUeTKGnur4i9n",
  "key25": "5oaGPoUW8iabASDXHvSF5W4TKwLP26uyb5RceU4dxproL83ZibpYL6Gy4MQKcEguyfXd2Gc2fZsjTdb3T2AJiQuk",
  "key26": "33sKhpsovxyMySRNVHsBfrdGcqWixFWxZAqP21HEhy6pHaZVnuBARZxMuk5zyc7i1tcoimqk7mynUunK6KtGuTXD",
  "key27": "RuqdyhGBTnwkTDrR6LwKL3y2gxymUH7GLqNw78zKNqHhcUU35C61me1qXeWkHqcxDgM2zoNss7GX77omVMEKdVC",
  "key28": "21LDWptvmKU5LfYE1BSjQeyHFGrG5rLVkJQcGLQ6qTy2gy7aZrgzSiatEXsdQhrd1XZaNvRusam54R6J9Es9uGkK",
  "key29": "GGcWcLnLEjNrX1aiFbe3ZGqakeLzNN475eMJWeXxa5h7RcfMsZNasd2dMHJiSfK8LnZi5GeKTq9d7TSLs485yoy",
  "key30": "4HzmzeEZtChH26YZ82P6mx3mgtf3Mxd4AwTAxM1EDfsZqXK4nDkeW9i5uc4UZXeFrsBt1WD5p9jW4NxNYeejErSc",
  "key31": "5E7F5nDazEQkc8x6cE3J4EZMrbojGcvSmqjtwB3WrLw5wRnNMChfV69pNQ4KuzNfLNEABBcbvFyWvoo4EiR62pew",
  "key32": "5K8BadyJiMs9Jf8s9V3X7QJMJLAuhku5jPfEokBmrYSUrTtMMrJTiyoBdnLJ5cpNQmxjfgxyz933sDxuRxjnNGpN",
  "key33": "5HEq2Lm6smhuoDHbqm9fJ7WrEVKu9YjtzYGynrgmdSFpA5qAzTGguU5A3w3JxMSKyVWGboYu5X8TaHRb7csvp3uR",
  "key34": "3wpihTFtV8LMh8v9QJxLnfu1zGjkbDs7s7mMxWLtZ9RyMS9UTtJkSmDREMne2CKRRZJ2ne4RUTbFrGCjb66M2zu4",
  "key35": "4r2Buw9TT2Shfwd4wN6fyFM9QZsmGnxP7sCg2oWsgshkVtwwwHD77NPKYfkktbkZdGahQJEDFsK6EUHxyqJVsSq5",
  "key36": "2zJyNpg3rTs5r4P1QH7yDZqKSfT4TpdCBSageSa6xs2q5agYS4kSbHuqpjtAXTb83dZqoPest7pSfiJzkMbPhNdX",
  "key37": "21BRn4sU6Z5Cu5BJPMk1GwoJ3D5GwucdL63CbgnWWdDVxsqHNyzZhiB3iQwfM9E4RnsrsAVDUxVZJiytZLosTBFe",
  "key38": "347Hzqp9B3skssoPysBN1xa5yTt6CF3zMSZcXqSs7hWTJPjHhtJHxaekTRcDS4rvoqeYiogY9rH8xvQwjQ7huQmJ",
  "key39": "2JLnUBtrZ4Qx1z2Ut4MtS8yC5tE55gn8orsFYFuyryeX1BBQtdQKfp7x1B5fdjNZMudYP3P3P4izF9iqESSQ4PaD",
  "key40": "5nr9W12itZK68qnquFEh3V3pp4uYVd8Q7wN1GWCUeWFnjGUsHPvMkQu1g9jdxqPVAEjRjZmghwuDRMo19QBp9VPp",
  "key41": "2j4EzkULNhRoZ3i6Fh39ETxAAj4PC8hSsfRZLyEuKunrBDZmmLbvvc3DWxDv4VDd7neBBa9o2D1vg4FMYcNky3Qm",
  "key42": "5CWYN1KYBMsTBM2qUEMfKmMRpDFVhNSorp2QXFGUe6hPTQwqu5TGFkHh1zdjBSDob7J2yiYHjUEtjuJrdkhHoaac"
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
