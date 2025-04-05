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
    "4pG6S3iHSWkM7DBJhnmYLE5sTGs4yCKKrR5uuzgXfKU8ZhaHVmQLsWDPBqHSZcEJ4eY1JdXpgmgaZSwkPKeux1YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNfFNawCr1C11RgQbbhMphQdSLENfM4bvHhjgU2MZwehFBXUSivBYaUVrKzki9iGjLmSrxWHAZYHyRTqecUpQhx",
  "key1": "269K7kphFcjdZX9HLCyCfSkkXfKGgGhchVzctgTYDRMrGWjer43xXG5hCDEd9FvbGqkdvXCNqygUu1s7Fp4TYbcr",
  "key2": "2FX84nkbjffqrXumnzWy7qGCyHxAcy5Jr48Lt5fGiX7oKuBKyZb6LCtFb7Bw9eWPHaTDGLBbb1WQewW882s1ta6D",
  "key3": "5CqL7AiEVHfo6eV3o5KkyXZTj68KJvmVj1B3fLwro71C2tCJAGqmSStrp37uYQUsctDFUyGrYt1Ra4MjnDtWjYkC",
  "key4": "DKPjpne3YNZnCq2sp3yhurdzRXT5fBvSJcThpzsmY2rfA24iYaRUH8J4gJ7D4CL8CVgCxZrQ11hPjcwJo8Li9Eq",
  "key5": "3PtBPxHF3TXf5iCwmNyoxoPj7ttAfQHeNS5H3KzYkwQSbjvtqa7J6Q6XxGkUEBy7aa6fXxBdQLPPB8ftVceWUabt",
  "key6": "5w5pw5UR6fqYuKQMADBEb9ZgEkSDjmPmB24BDfaF5A6B1UockqRhihujR4Tc5C8zRPnThvZ9TWn7ethLsfeUZij8",
  "key7": "q78YS1w9vED85wXJNiCqo81dQqjLgjjA5rhLrQi72xWCwweLw5Y1fkYyaUCjDMUqt7fJf97JkG82LLqhLB5eCN5",
  "key8": "3jkM2sZZUtwrNqaTEewGufLeML3PZr24x3meFoQbVvPUyi6DG86qNkJj6roEmHZMCLfJKQ9bu6CSFnZR246LRUPZ",
  "key9": "4KHgiRCvh2MAkX1BSggZif8JHhmk9z5UEfKfduaV2mZjE1ass9KuQU5UZTk9u7WFSZNfHYaE4oBb18F9ywvfSFFb",
  "key10": "z9ZbPRZtBgfJbzNChyfSMu9GzLq47LeBj4DN3vccG9mVJGpFa8dVSdoEHos3yQVtEGoHezPwhmsjdUCDgpeMcSw",
  "key11": "5q6RMoJfn6S1nKzTEy7KrwvEJJYHcA2yD7cG9imXpKU9Jnz82eNStaW1s2YS7hrDYVbfs9TfWym7GCXwhgzXfst",
  "key12": "4xUgenXCeuBoNp47oLj1ZMHBPpq6kdhe8ass4Rob5weK1dDZo47dBpikNCz1vfYcjCvz6Wzd3yeQbcBuaHEUmNrL",
  "key13": "yTpmtD2hVtxbfjFCkwmmcnsSwZn9CsQyzRPNy2FE9XLEmHiCXPLXjxs8cXJWQRLLfuqeXoYKDtaEs56WzLbhsC9",
  "key14": "5iaDxuaFNoe3sxXLJynFvLqWJsnbLibTubZk9Hid4wENrHppEXywr7VVmzPZ3pjHresGoP5JE3aaSGybDaAJFt8P",
  "key15": "3k8JfiH82zkzuoeUHMT7Rs49i2NmMAUKFZ5XhZHHBELqDnRc94XXmYyzjeQAZALDpFmpMMndAoHWokMD5M3rota1",
  "key16": "5jToNcaduURhBY96QjyNbZJr6jW2dPrAsAKpPURTzNsfFPyReKsoi6XH718Kdxfaoi6yMcJFtKdcBSBTH9m2kt4i",
  "key17": "5YD7yCNvwzy3jcKG8Nyobb6rFbsiDnz7AseyptpzgM8khva2eKG6bjf9aBXeGcuuy2cRcstkSsbheLqae9ySpjAz",
  "key18": "27aDXUrLY6dWPwwVfFsKDmiej9peUbEx3rGJtQdGNea7XBUWHNCtjSyuQgT2tjd3d2fFW663bJqm75c86hFzQMDD",
  "key19": "3VdBQJS7vb8WaDrmrcPw197YGX3G2PDqqi6N8Am4UhsK7w6HqdWqwoezPPyyxzZSTCham6tGBcjt4nEYnqNH7KqS",
  "key20": "dTBYeX1hEq3WfFfvb2KWi8rV8ZaxKy6UxVLpneBmyWU2D1DhSvyZ9vCuyBHEtdo591GLoZS19zDsFchHgE6mUri",
  "key21": "5wPzDScmfLrEmP7FBENo4Ya4RJSADEfQCmGmuy9hZK36vGik1ZYLVzpPXPx4wSz3mVhiGCg8DJ3UbyYRnJ6AfvgB",
  "key22": "5AdHTtpNUphvWLjMtpz7BQZB6NPNp4Dzg22iuDm6Sz7aT1fGPXGGwXikvhqx6oTCp9e72v66sF3pncSE3fRdwFRN",
  "key23": "4kyNdPB2CqDvEGJ9YizwfYNYvp4MXJJQvqcdMy7ts8WMKLXXJiAnDrSeLwbon5wHgHumaKN33b1t5YBzmQ12AVCf",
  "key24": "C3Nq6jfvwYCUQj4ACvM3EepducU5GmQtk1YN912CPvZmcs68x7hLJqik7zVovdkk6xjxKkrDyvkTQR3v7yx9tq4",
  "key25": "PAKR6UmTy8x694N8ybEqpJ3qWY6eVCKD9uJ5acps4WCdZFMn2wymoHt3wb144zYJKLqbAjRsXCjvyZo9RfZhFZm",
  "key26": "pmCJgoaohe5o6h21obs11QJJZo5BTHK5uWwpNY85MhEi1B2PLhaKt6NY1Wb6gS9Mksr6P11uGZUUNGyzpCfDTtY",
  "key27": "5sC5AGwg2BFfigg5YRs4VbiEZHRZZpWyRxPS4Hkp63vazhukxa5ktoVZJEfaEezicU25QyUPhjDhSpvo8gGhnMiE",
  "key28": "5edyKKJr2dmCRv2A2hr5jeTfDCiaep7JQyJJgPRXMKs6zsVKZp4mpmCXihbDa4iePiE7Fq2U6UL1zFsHv21n1prJ",
  "key29": "3L9Vvm7PAQ9mL2B8f3Dkh4QAqYKuZYwgqjW9mwyywgg8tCXv1j2mifbSZfWX2QQmjnmGydCekDAn9k4LedcaaHxX",
  "key30": "BWDEkprDBYDwNU2EnLt3uuKopUmjC9vW6AsFxxKzo57o8F3wBRhT8GHtDUkRQUJXai8VEAjsAzKz5sQ4Y1ARLCn",
  "key31": "2HkKwQR44ZM5XXCNHE9DWA6NsiKohUvrr1Tp5oB3xjPYsTVBtoCs72fYHVmt6vaT9Y1HqDgjTYm9dh2irt5aXJvz",
  "key32": "5jJ3UPPQuHQtS6DBTSGWAfxVuvDHLnMPEB5NSHVNcx2Gqa6WQogbQNZy8Bgyya8D6MPeHVfpBWX44zRiqNzsQuhY",
  "key33": "N4AK3q32c4mPDZJR9Qt3LicUpRJ6hqn7av7T34fxETSzfoZtELog3vt2emrFfxswhirSGqSbcRNiGdixWcsBnXX",
  "key34": "RNCvKKUZSTgY6BDo9m2bNAwmnqjDk3VSb7n92Q8egJo1rWpB7RbKcCzceRNJ4bDPDqFRCvuiHHCCjJzA4KoLX6i",
  "key35": "2sRbsWPNerfeuRrjH78WceKJaCAm55Jjoq2GpuoquL7qYNtNGnhykwWfCimBxPGKVVtnpv9aKGBvbtx2fvknuFeJ",
  "key36": "ZuPTnpiqisDARWdSBXPbxxKvWWy3Q7gyDrncdGuMoDnjKp7bX1YJJ14c5NRdeJkTLAwXfeJraN9MABEM2mZYfbB",
  "key37": "3wk51EMD6spidsvEpSdztYU7LzrmWXCJATNMAo2iNoHYkmfy8nZNV7Wof4kTknxnM7oo3R9J7uJAnKPNN2PHPxtm",
  "key38": "4rzLt1rrDNwuNdcMhmCYsDeNPN5p7qHZizQUPYE82WkQ4KZxHT2H3tKAxXhwUART3uRLhyaT5t3cXVejyyZt5S5j",
  "key39": "3J1CeTd5XErbrMBkpgdJB9bV7JfC7AzkeTbTHAujCtt33yKJvfBCzu36yJf6Q5CPwEDkzKeV3DCGtKMU4s2EMJbs",
  "key40": "3yyEeDYVHuNc6wtjHiaFAfa2zSXLp2jCQMYyxrKagEAb735px7WjQUuarq6B2pgrtZby5nHNuYKJbky2TMbq1Nq2",
  "key41": "5khFvGgZwF4xAKgr4CdEmDwpBhx2dtQhouzsW5jKvP6htZ8jXqfXTS3v1TeNEFDvGPHZWzsWGXLKLK281MsnUbj7",
  "key42": "3ignLK8D8mN213VXwBaBinRdac7Fq6XN4Byt2ysSYuEwamZ2RpcpNKbAeHWFPqzWB72dnhitXrGm9Y16V889fNYy",
  "key43": "5HjG7eu5VuZ3e7qiYhxJA5nZZuRG8tK8gaPsp6ZuepdBpWzw4PvPamxDsbmQ8KnURhGc3VoqSiWEtniSRdiietdJ",
  "key44": "5ciTJZknqP8fgAZv3rRDejjvBharqkj718Lo3sgayevpRo419E9SZHCgm6b1xis3TW1oJrsGyEAeQnCqggQkhCof",
  "key45": "4M8dHKKNWzEzQFBzCwdC6VqA8G33Bp7BM6YxhSnYcAJ6uawmbV69weUYTU8Mh5CGcm25x2LZdesQvZjyZoCaKmUQ",
  "key46": "3yHYjumkQuBMSiZdghWVwLGAdSA148U6NR2qXVuN4Ry4Hhdfh5uGS97MuUsaBGwB9fxnZxYNJY9DRCdQgdiorgHJ",
  "key47": "32zXCPhJdu3wVJDGFiH8LQwA6J39UtGe826CyhK53wHHxxtSnYF1yqRW1h3rHEgf7ZuWgzj2j7EXp8EphbAjduA5"
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
