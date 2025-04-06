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
    "3U6RUe5LRPR4UPML85FX9ittbPzZ5fkec1MqEvkF6RWacWpMVpyrzyjV9Fsa1ASvDLiwFv3u7Ufpi1SmXnzeX48X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wHkrMKJAyYJoZ2U3E1Y8y587Pv3B4wEXjM3q8gRdNs7nVryhWjW6k7Wa4ybLnRSV1zxU1VAEpSGkuaZmMc8rr6",
  "key1": "4L8xp9QKcuhPCTZ1QyMGT984StVWhCBc48dL7sP7k2N27gy455rtvERcY7jLqjcgLBUdpFjCbmhyHmXRqSknZdsm",
  "key2": "29LMts9iH2bqqYLFVY1wVubkEcx3WEyt2jJ7r6kB9ipwvMjCL7sSSYr6gPkmKdhe9Q6odBNtzCnNyc8rVBHJq3NT",
  "key3": "857nNsR7yfXdQJhK5HGWfQs4QErFCNEcQ5VQJfxVFnRAkxETg1czjhLtTX2hqacyjFHicacPqXnegjW9NyZ2rUD",
  "key4": "5syMHL7SrfVk1HgcwfxB6mVJv25gc5zzy8GsUjJGGJTuZK6BjxQjB5rrg6bLYtroCe2YddiSu28rDYjo1zBCreFE",
  "key5": "nrEPQByxTistM888LdUg43ZcCJUkaUcyW4bHHJwUhAavFuN2eMK2ECPzuu3kVzHxcJuwp53Zfaa9MnmvrM4tAfU",
  "key6": "spbhPd6E2DD4RQ97CQmWXDr7iHp7mjFsK2EyYKFLGqSPVrRydQgfXV1BJKj4iRaEx8rMC1Ljp7FyAgWD4e5V3dE",
  "key7": "5ReuCaewiwK1yZqbgxiRw5rkX6qXdJSnhGXyuYYx1viqe3nZCB5zbXHWB3n43gZzxxQuMA4uHcYXQGUQABXvWaKh",
  "key8": "2dANMPJ1i9LfjPgKgsb5uuTF5AyVdDyfemqXjW74ocaCRhq85J2xz2M9UZkM2rtnvrZcL3L2M1hH3LJGxSfWepT3",
  "key9": "3LYDSjmnqaGei19oJwUHnpLF8NPtJBhzsAP12pZMysd8nPFjWHSDayJw6qWAza7pEUrKHr3UBdhMZ4LEnMjVENHR",
  "key10": "2fgkp3LUxAhvRYhsZ5E3JFPq98LTuxc6AVxxjeCyziNivEVh5yX2LHe2msPgvFoiVzzwxGLy3HEaxynLHnPnwh7c",
  "key11": "5fRKPQJ4KCpypUSjhvJnaG5C9z2y1y1pTUFFWh54sTDKhTj8HSPAE5t6hkLim8YyqLLNpqNpGzwWRrpUXD1p1ZW9",
  "key12": "49UaYKSM1HkYuRpckqAgwEUdKUyG9Bhg9uz2rym56YwWhoM6rS5yzAcdGizSafEnsrSErZcLoo4VwD7akdZzfsni",
  "key13": "2pfXjJX1js4aMAajb6VKL1PGsgvQY8wZmkBd2TpPCR9YrQbcXrHzWt3nCPjYuzmoPdKVDh91aTJrU6SrqxCMXRWB",
  "key14": "1CYZxu4BdGAU1o5DyeJ5cjX3n4iscJd9LqwVYeL5aevSNMAJPvXSeDnxtrhiUuNVgUmcokBe8esf7iv4FADGw33",
  "key15": "4hUDBD4irj8KUv6rLfC86HFi3Afyvy5Pq8YMjvv2nrvpdyVPVR5CfNZhEfR5vtG1rzMCa3GhSp89DqMruDdewkjq",
  "key16": "4dVj3sMmdv16yNWb4pRJerZMerdJMAxwUqoF7iFoYjEaHMpog3X2cmGLLDTY5WriwBaAxghSQxFuc49MRyJx8ZfS",
  "key17": "mFU2BNSw99xwECf3wNBKqxVtptu3XRUD6LB4xvGdv6vQkhKTrDpzYTSQPB7GoTtF1g8CURpWzbduiJUhZTrQtyq",
  "key18": "2g8FrXFaFkiufymagwNiz5UhFjAkkYFemmQje3SuXNwE2hADACympZYWucVVy3iYuLFyekTK1YwS8mFDFKUqUXUu",
  "key19": "3Npk7jAaB9yGTodAURWx6DGLmkXBEoahXjmjyfVb9AzdfeAStCdDTJnwZnFYjSpnYrLQAeSZo8sxK7Sai4Mb3K4q",
  "key20": "5xp2tLNCyuKGX3FCsTAgsHxA6QXKB1Uh9RYYTqQFQo11NDVv21qspWTsaRY5VjY9HG5QYydAU5fDdP8kgve9nxLz",
  "key21": "49niQRHkhZgduFSY6ZhKx7fqu1nTNrXPkFVDkBxApBmTKzpcfKFZS1Cs2i65pa4oE7GwNYqdv9YHL6JNHwn9dFMZ",
  "key22": "5Uvgq98SDCSiB3muGsSuzdDfFmV5F8YXMcdZ3DqZf9vvfeqqbLvfp8FxgZ1iG7bmPX5S4TgDhTDpQS78MGkpKnxr",
  "key23": "34KX8TKCoPiLHocDmXxvsF13x7wtsV6VrhpW3BofxDoYLAEyB5uuzZDZavRUbsZK1nFz4iDREjZDkJyfeg16Rbji",
  "key24": "3q6meJSSc2WC23ADLNWSsuno2rQV6Yx8wmtHkrYx2s9vNyhQAU1dJBgw2zTNKtxujnh2nUsv4gmGvrEiprsti67d",
  "key25": "4gievHQAeXpMQ6g2TrWmo9VD4JZGJSLhXzYk1jysJ89Y7QwvKuhHKNG8MobzCLvBZZX9t6BZACyRkhpVAz9KFP7G",
  "key26": "62mwheh57oMZDvE2QGLSERGY3f86tuG1mWq48hQ1UCwLUUb9HCPDd6EJJHE7yRD6t14hHkgr7qgjGwvvrRPKwop6",
  "key27": "2wScAmyMVdDgp8fLbefr4GETDwRRWtTWApDxJi6VUNXxTbDcKwrmY3Tv25KQKvjGuFoXtAxQYN5V3dHLxUK35R6D",
  "key28": "211gKxEjiwkrVag79gj4AuEb96yRK9trV1FTTJ4ewivRwSqNPHx1ZotVisEchYz7KniLdSM5djSdGZGjyPUtXiXa",
  "key29": "4h8DppkP68MzeB7ik2f9J8RLxxVoUXc2wErx1CeMCeFDqbynBbdNmwUmrEbnwA5iYbujbdMtkTyFonw43F2ebRUa",
  "key30": "4s3rEjGVx2EG2EBuZsczj7M485Fv2pjrFTa4LATjWw9U8k53hexCBnrgpVB2eT9PAtf8GSgNRq6YdJ3EbWt7ingM",
  "key31": "iKwFxrLegPk1jeQG8Re4Ux5KB5EPtwSxhXjsunEoHTuHrpgy5eUZaQk5fSGUpduqBfx7UNg7cHohpAn7ZP7cijM",
  "key32": "66veejGJECU5qZbEkomFoj7KPEnST3yxXjYGPxDKcGpGAvNToMgbNPVvMYH2jtaX5358gq761pGguvNSUPe4kK9q",
  "key33": "hh4T8JqA7LCyG3RXF9rm9mkvGKRfuAPnfntyPCUusmyajt1GBTjvF6tYLwpZ3Eq5vgWzd9irvS7gp17jho3nnCh",
  "key34": "jBSo4otTYp8YvVVtUR2BmWwjGBzqPg6oMehEM1e7wZWWVk6B6vynbp4pC4x7TsMgPo6W4b5NNqyNrDJjxAyMsrF",
  "key35": "4tvtpPvkLvao3NuPRtVnA8nrmPEcsU8fr9jD1GDQwEYM7BPhLGzDv9jWy8RL9FzsJSXJ93BJttnFaXGfRjn8GZT2",
  "key36": "2PpswBESie4px9Q7BWmujEo5VGaLyvm3wQ7ggvLVg9FXj7PSztfX9HKtrS32Qs2CjLTo9Bb4qg2UsrG1ubmd153T",
  "key37": "2ECpoCEervGfnDYtDbuf87DYdoG72mSYvSB49toFjfyGk1djn2CX68HbWhqFLizyB7Ari81J7XnHrt67WDgmxBS4",
  "key38": "5uCo4Z6ZHWEPwxJsCU7ow846AYa8ZrvZJDNoCs5TnDh2Tvk6JbEaCTLf9EwZXKsFpdJsyH4T2HtRAAJ78CFDTem4",
  "key39": "eTs6aP7e4JxmAomnpuDEva7F2SWzmij2ii8fedQ1UUiMJqjtGaYUebjsqU4L99d9tYmZHQT4ZGPVMRmM1tcbiHf",
  "key40": "3rq5UG8urWNuQqPT5KWbPQGXoKXDeeZYJBxg7SKUmU5J94q9HvpnFz2jmUgv3GTDeMRXTBmXffdnVjdSa2tzR8aQ",
  "key41": "27N2gQDooghY3cZQhrpE6yrQ5hmiD7V8Mt6LxHfpTGDvNf6rEqirGJ6i1S4nTMoWEnDZwtCv3ZVQQDoSkU9WEEsW",
  "key42": "JtzfxBmw9sBFEycyWgsbob2TQ7QBcWPW1JqtqTm5aSbKuEgwfoSQ7AU1jy59DZ8RixuXuh52RTFGUTrEgDv3FoM",
  "key43": "2NV4aFai8BEFG8CatUSbjBc9Aq9VgYGeR5ApRP6sYiNnsXsAMXvEzm6YYHUgLJtvHidoeqhAnwXvndWYH7NsKWuZ",
  "key44": "3QuXonPVDh8EUJgqzQkDPHnbWm7vigNeTwMfcR3hLMQkwUmZzuzfu4fdPbAkH2VK84cWHXFV7P4iFnTw1Zpw3Y4J"
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
