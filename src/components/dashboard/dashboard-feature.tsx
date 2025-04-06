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
    "5VuXcJHrwZd1HmoDizcMGy8ioe3cRLQqJMemQh2maRyBKFpwWsfRXF5SnFyaZCEAFyGLr4pwrVQmFKdKAEC6cfeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SfYqeWXCHyNbW7qNY3cn5AGDd1bZBKoMANV6UxzxjPZZfb7CGJ5vqnF28tuGvonXsnWj6qmiAngFVxsC8vkJxw6",
  "key1": "2BTYQbQ6Sz2x2vHzqBpPBE9TmQSgTXsX7ASPPwG3eeuhuGjBAdo8q1a31XqSHD6q4tiJuoocghfjNpGYMvc7VR4A",
  "key2": "27AJnTaDuY5NupQqUsC5oWk1qhq49RuRQBrApx76L7dkaE74WoRiMBntXqjxtMgJqJ4gnBW1jfrrQt1gj1n7Z2Lz",
  "key3": "4Qrmd4zz5qqHt3Vhw2gdURFgkaGnEJuX7BuHfC48tMHuP99eYKZMV1vZ5t16qzNdz6W8GbgUcYarQGouyADBDfM3",
  "key4": "4eNgGBbZ8iNbg7NSJibg3HtmLbqiCg2mVPZHZEAgX42PSB2hPi52kLBXsUk86PPcUenNc442vXfvpoQFyKzYxT7g",
  "key5": "2yhMrtWcZWhkkiP3SNV8hD4frEUCHdh9JqKEzoRJdzCtJaGveTsxe27L2wG6KhaTPTNEgRHqWpQ4CwKvMJs9hDyT",
  "key6": "3shsp3JBLUoWLwhqrPm8m46hgipRRHT8V5EoDipnSNdAmTyTuNtd72on5JaPX2edaYeYbYAjsf6C6cGbF3y4FhHy",
  "key7": "3pXZAV1FqYGh8rNjAG55TNHxuPRGZm6gcszutn7u8JFxVTLWvqBBYyfpSh92rzdh3Uex3iMQ7D8U2xHBTMvX8R8G",
  "key8": "5HVKZLfBHQ4zYYY1R87F6TTJkEESSxX4eNLC6p7bw6CQhoQ6ZZqcNArqwFxvbqCzQQu4gXQvMthph9b3eQZ1ChoG",
  "key9": "2Sgfwmg5pBv4EgTLVhnyQLhr8QfykWr5UXg9P63UUVCgnVzKpNeF8g3gH8nbfw3i2WTsuq9oLCZiKVnWm3KqFRxq",
  "key10": "2q2q2mRKA4t5aWZKLkPqtHj8gzgKPqD6eqL4Pcx86Zm3eyDBrn18XuVchkkWAzX5omPa32yy8tFZUjj5M7Beim4F",
  "key11": "5gUAmu97MJzRrSunw63p8Co2eR17nubNZsJgq95vXRpwT95WYJQcs1Uc1kMMfzeq8P1R9cRCcCnYShDHK5EkeMzw",
  "key12": "L9wxWuKFe2rQzTnGEFcNJvZWNmXm4Wjc6Q9JBs1FWMcX7pVTttx3FkXa4k1snGscgni4mxm2QN4QLuz4q8jDSvY",
  "key13": "4YtqzXuXouvFMpcKcYegyTriLeCMBfouRjZmJqQ9GHgv4D83Pg8u9yCtF1Y25syM7WR8PpgYuGtFciJvevjXDDos",
  "key14": "vYSVf7WHgih8CEc9f2oTkA3KfQJvdUneAeWov1o9qBBtGTuxRRZ13VARh1K6bfTSFvGTkhDxYBaMZ2wY1ytWHgS",
  "key15": "NBmV5kCAQLmmkpinPaYdfWeE1bUUGsVeFrHzTd2ipM1KXu5XFnZFWkRhpfY7zrver5SCyMBfP9F2jr3hrjBy6X6",
  "key16": "5WfFp6jMpxv7ms1NEpJBu29uMjYwNFASNtHjBhtR5weAmFai6CwJDgfcgEstmiCk9FFYTFGfzkJ4TgyF441GgTx1",
  "key17": "4GVA1wPDXyesCrLtopZeWjLmdfcDpAEwvpWZEPWeWUgSDTqTzREbaqwspoQor7df4TJAdi8eJDEyzibgsjuQaEVD",
  "key18": "2kTGvS3YHy5dVtT1kCd1JZyAfAEHgg5pbPGKboGQZBe9YS9mzYK8VNLZnEGUp7AN3SFLwcZDxGqusZFmsWxaQ5PB",
  "key19": "3JL8C4za7RibitbaS5f26VPFAmxnjRHn7qQnFKf7JH7gEDwuMScsCV8KuoZds1aa4c4Fup9i7oDnXPkRouJLXPNv",
  "key20": "66oXAVao1VyexSKTd2b96KRDfEq3wtuUGzmQEE3yxEqTbZR92rr6RJ1rLNHgVkXZzGEBHePyCecnjy8n8H3WmuqA",
  "key21": "2L841i7bWxWJ6wg3EfhdYMsfBq89QYy7id7DjuAsRXhRD5Wwt2zP7CFg8jHpc3P4urf4SGG4EhTBoLWQsMpnJFV9",
  "key22": "5SMGqqxLL9LTkcgvGPdqWZ8TqRu6VhXzmScV3ybMh1yLiDXmbLnhdzMZY1hXqRxGhyiWc84fprVfRuroVQVHFd3W",
  "key23": "upRfRfaDd7Ho72g73W8hHxx7y5mdPRiQ8fLsyPENCPrav5D1NBBwUCLhJwM2vabozPxg7cxQ9N7pL7bBK9Cw6kg",
  "key24": "2D3rGvJXLniEegKeuecECGVH4hJbvm3GrdSrcy5cSQSH9sA15KK1tPf4bM2SKAumfPggKfUSV4fvbdbqkxN4qKRJ",
  "key25": "uiw9HhUKrxZpSCAACexNVCBxNbXtFLJKdzhaiDLUbgLwszJLtgJnmLXqQHHPqY6LUBLSyhiuwNJRvrLiWBXotEK",
  "key26": "sqgVB7KYUpSeWAuX9mXPbVU32XrwBJutGwHE4QqwiHWEhTBizU3d26PoriE2tQ35zqaV1gF8hjQpsEA63NDM4sY",
  "key27": "57ZfXaM1ipYgkARkyYYdMxuqV1MHwBYihtYSTn6fQJV7PH9A5swoF4Ku293biUyjNvLrcV1oDpmHx3Rf9pooZcXw",
  "key28": "57xqFaWHStTTznjDVdLx36LJsj8CFvYD1E7NyFSDcFkUzPxaPLk8c596Qq71vo9b8MUDAKj88Dtta7S5L6rKRrvi",
  "key29": "5HXJmtodU1k2QUKfX2DWbtCKtqYVRKBHoV4MJHguphzh3NM9pjMQosNCC3xfzqM1z9rYjpDuJoKNbQG2xTaweXfC",
  "key30": "H2pTc2xaMLndBUupnTmqbCNyeoHoNXdS5fmjL8rRb4Su7R3vWBUpsZfNdm14oAnwFLztxEKAg68n3N1J5e5NDQH",
  "key31": "5M2RSBmL4TiNF7yZCCjZAm18GUe5bHYiudHk9iWpPzLKtKZaGdvxAHp85xSHHiiVVErtRJE8rBgkiVw8ErponLen",
  "key32": "3CroHx37wqLvsn2iYqgz2fEP5gSDymvygu8PkqWYvDtj6iNd9teo1hygeDRxbHbWDG1myKCbVXUKWtVTHLjurrKn",
  "key33": "2ZxdPby7DcKJyKTPXcXGTJoSDn6tdbAGcZvNcmqo39FzYGV6WVxmAKtnoQvcEjKeZGPB8QUmLiQGXz8vwqHe6o3C",
  "key34": "fTM2cERW5ztJaW4GLi65a2UdD7uTGfRE9PDzv3vi7XgzQwG3qphPrpzmaSWXxtXvicPTytKP1Mp1YAL1XZeDvcx",
  "key35": "261uM1jX9baL85ePR8yMYb4ZrH9oDKs3NF3y7zcC1MvLLrVbsHBs6hLvbJPPtSHY1ig7sJxoK3uCBUP1M7PjyNgf",
  "key36": "S6DUBbZU3MMxKvipGinrxGmfnbBHQ1mKmSc8rrfmjhypkDSbGVJB888KJsZMou6Joh9k76zG9jNaAqqCG9MPqtV",
  "key37": "4E89Z3mgeZ8KxMFhsxcCSkk651Hud582hpwP3h8GpVqtwtG4rJacbAmu79UyDzhyNV2iuoC5dDqAoutPQyeAjjCT",
  "key38": "2XQEDWbW28gt1HVWCv9wrPe4YDVyAFKz3xEfkgdhGGmaUUQCktaXuUDufhEMwEwGzKTgcdsYaXzRahMPbJ93Kzp4",
  "key39": "uQmLdvLimqc9vZjcCkKVjZL8JYZfSFUBRbfyQNTTKgzTM8VwyH6cfcSRJZWAJ6M2f8jxa7T8XuRuKpARdJvJMfo",
  "key40": "3ckewAVYzgmzfXC1wzN4HzJZ6SH3o4eWshsAbocV2t8pKiLfqs72YvbFhmh2276ufcU53n72cJtH8HKopRXSZUM3",
  "key41": "3BD3KpemoxFrWwYwjnAR99qGPoNkC1revpN82MU8rayKCtRzZNyt7xiiNXGdiZUjVw5YftccijLJJQgBdUPMsZrC",
  "key42": "269uryaj9hT77rkLNAyXTpnguQg2FZFQkVJsuuEKeqMnjX8VboR3YGGe6CFyxrs2JD2rakL4Vi7j195kbann9jvx",
  "key43": "3w9RQXKai7UbD8Vrf18HSHQQeMZZRVUEPK34XjKiXd88Lmot4DLNR4cnECb4ufL8ihirhtWcsKpYuCCsE8yzAh2C",
  "key44": "5r9U6b6upkravqrmF7ecE9LxRVLAWvgxVKfGvW9dVFemvXVPq1j7bGzr1sFEe1Le4FFEVgkunDmFzEJhB5cwRp7u",
  "key45": "3Nhn72QvPf5JW9CuSujU9xTUeNLH87qEEnNNtcQZ38ZnwpFC6tAV75CnSFDf9AhBj5wwyZGjbkM1MGzHMHn2KorP",
  "key46": "2b8weSezsyShYsbmpfvSBf88tyGCmtLzejBSos24Zej2xQy347cQMKPKJ75RtRkWTEQbgcMXUth15iHbKCNyNaYA",
  "key47": "42pWQWsCEcAYss8XAGHnx6aqRNxB3WdZ5sF6QwMoYym8Ghk3ZuZnNUenxbt5BDhPBG3DYmg2j7cdvXxWjuSRWaN2",
  "key48": "3R7UpVX5611XACQZwy3MviNFX5wFngJgZZis19dnGRUkWXkndNyKr3kPkc5UCS8t25nSUcKSsmYpqJxR47BN9vP5"
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
