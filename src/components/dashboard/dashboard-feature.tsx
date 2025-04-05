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
    "5opa8sNDy1ibEg8Wp5fYRGEhsdtS7hfwAPrmgRqgoeFneRGzP5cuESsH7Pz6PVwZo5tJvTBpizaGrkDVQJR6asSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPv6hnaGt4tahNyD3FUTMLMqRNVste6RCtwyCMyR72u7TkqP8GscSA77nepCeKPYyPdZTYs59RPbJiLE3gTdPPo",
  "key1": "5ijNtw3TAzvtah7sbNYGhojbHqkvdYSY3BNCKxKQEzXT9AvqTDfaegtiVrWUFG8AiBuUF3fdt5h5zG14Nph6BSfk",
  "key2": "29XKXUgbDsDG5CvMvMibtwSpzboRw7P4EG4FrDSo4ENf3ztTvFiUBJHEYHXJuBZTgPnVshKUnGhZN4v3V2qNL5T5",
  "key3": "2pTUpDg9DsxVGUcAYpcYpnBFCCB1c4GMkq75sTtjiw5B5JcCgEGMatYs2SdoiaGzXmn6ytu9rNjZxA5bpKA9jRcN",
  "key4": "5YBi9afwT9yfN51toy34aF6evyGrRUuhM7Qz96VYW8A21ZkL8ujP38ygmiFrXW8Ejcvn9AoCVnWhdhEzkRmExhDR",
  "key5": "FB1bBxTkrVVpihRW8vZcFVD6vu5c5mqQ33FQttqp1yDActvucxWoFVnYKzLZCsUVYbnZ3MzRpvdwHg8bmD7g7es",
  "key6": "Msr61dYFW7KBojskwcnB619mxuLFNsbm9epkNBiy9ZyLAx5gLtbg6n5hrwRcmg9UeQgHJwVQshPzhmmwQR9SzbA",
  "key7": "5iEaNqjsBSbDQoMb45uKgmAzQoHvGEgTfnN9RakJi8pQwjvfCkhC96bUAEbbemwXY69Dy5nUEN4NZPFiFNW6DW7w",
  "key8": "4AdosGa2udctqWvhJfKjrEiaxSB8SrzdaH9bCdsfghWLePzmEUimxdZGu5QFp48jirb9Ab26z8fyzmc5cnHzqtcb",
  "key9": "2eq9sk6b2nMytuhFqe4hd1EyQtLdeWVtFskYwDJDqfypJKZnHmJYw6yzsxGgm5DRCw4SRoXN3bzYoqoLjwBJDW3Z",
  "key10": "4wtJHuxeDmcXH5W2DJgAAp1etBnHzz5rVhCg2R54ZpB6agLFJEzbujWq77LN5Ne45ogiewpGVMLc75sPC5jm1S5B",
  "key11": "VCsVtnf7FbxNtbsj6MHHR2TwPxd2H7CyRDvxznGeeKrbK3e7pE1ZX32Cg9eLf6PghGNUGr9AvqCR7qV2Fth3ysJ",
  "key12": "2NmVvvnn5NJZXApHqVKfS5hEnJZHQ6oWNAhLezocD5xGLkW1o8q9NoYsGjV6c1LQZhKAUKpdMLF7Kqo1JAXXAbdV",
  "key13": "2PKgzAPoGeL6yar9xU1JzuU96ijTs5DKX4fBE8Ez7s75L6GRgUirVgtjqNekGb4EjXejN1zL98wiJBBYNtQEZhLZ",
  "key14": "31JvSpKTG6pZyciKNZDHTREHBxbQXVqXeheyhJyYWVmakQeM1dPfXWU5hBrN9YXBC7efF4tzFu9HwKJeLikg81ja",
  "key15": "3WoNDF6oNYCTh2VUDtHZXosXu88UknobkfrvgpB5vZZqYpXGjEUskU7RqjMJbNAte8d3xYiiNdX9MvJeaxtwHQw6",
  "key16": "uePHbLqoEAvYuextVfdg35AKhcJRegT6bqqPdvAgChNZ4dNfX7CGkhaVgvaMK9Yd5q9or6tbtRvSxoVRuPwVx7t",
  "key17": "cXxVfncqP4DMzUNTDbRUn441KTTGRb6stqLwY7VxdEWe9dEoTuVAHcztrtrq1wPKKsaMSqUxk6MMyfFJs7V5ZJo",
  "key18": "2Gh1NcPnTwQsN5nJC8KgNdwoFWF4dmSU78vMyHUWXotyKQfyX65aVmSMuSKRjK2iB7RBpir5j5D2WQM1GxviU4yr",
  "key19": "26P9Q1pyvEk15YH2seqErQYyDZcCaNaf6kR5WWqALTnzRTBYExzoHY9z2BtWBwuYXWmxp1MJP3rBFLi8rrmqcazZ",
  "key20": "3ztjE6a2uVHccpXLabbb8vfzXfRmfWdwqa4YvGsn1m8mdaeZq7tGmdcAMB1GUAfUSavdK4Ky18qCiWG45VwhBSP3",
  "key21": "di3zWAiQaosmyGGhka8yKE9WG59mRSGKLWAMXaHhi3FebTBYPhmw55wKQwdDqF6V7XdWkM45HQqzQxaAKwvsHKo",
  "key22": "3wEGDEjS5e9kRzX5m5QNLmJFdHYJ5aEkGWjNoAWu33D8At6LfV8AHAxGa8ToGqGQxLrsDfWMTJEQ3ByquR4bFvUj",
  "key23": "2Jb2ZS7gRVfHRcMPzn7WyzYuf5aquMfu9akGgX725Hi7RQgEGxRAsRkmLXQaa4QGig93USrMYS3eeiL5EwSrrcFf",
  "key24": "5XWBaj3WD2js1rf8rMMDXYALnj9NkHCQxWtKep411Uzm34PPFvi1wSm3mATENQus5DSD7ivGYjP3hLhjCB7w5q5Q",
  "key25": "3P6pEzQuk3eWyk2ESiCnXJg3BkMKbvYqJz5yrEmfL9vH8q64724AxwoTJhibHmnfGSApMDXYgY2rq288GPn6peHE",
  "key26": "4xTXWiAaDVejsYGDRhTc3HQveSnZ4jFjVbUPb95CqySFB25TRx4GmUJ1rjzwD4TgaZK8hou89fwV76oREdfStVSP",
  "key27": "4nQNbwwLW2rBRHQ1mTrWwQzz27Gf7NCSDwViPRcfGWnJAJYA4afrLLN8ovZMLRn74nuJygvHgcsVSLFnV3Qj4kbg",
  "key28": "UShJZy71hfjqUaRh8VAd52sVMD2MZvr8uuXi1EjpKKVtMevFbcSez83iiNfBMzEvvoKbMEBgUhgpTR3hjG6XXse",
  "key29": "2zTS9eSp239Vzf8sENa4FLDsgd8hVPVX8xksfs6M6WUC36n73LShubgwE7b8KywvCaXic3EjdVi7ToQKzoz2bEhL"
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
