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
    "4kUnz8iNZmEohgcMLHQdGLApZZveotDtXkofMKordCDqUVcsu8fofKbFeT8xoZwgN8XsMm2UBHH17LUp3YivadGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LUuywNTVQKtC8L8DTfk6STyarN8cezm9WKa6YPaMdCxV94N9FbhgAXcCvP7FRCZW4GdK8JcxGRXkFS4iLef5RT",
  "key1": "gPE5focWeQpR7Jqe24jgQWUxvhWiAu6xaLQfvohYSjkiwaP77R7vFzZv8SQgaPrNHftPwyXHJZpc3NTFdSyNvUg",
  "key2": "4hKm9UvmSZYhdadm56WV1EpeMkGwssEo395HDs1xr2zJLt24x5b4DrATSALXkWrCx1wbuVAk1gQ8porP3gwtSWy8",
  "key3": "4LaZYYQwhJpWkRj6Fbjrzs69jFk4GYWzsQQBukfjZuNkPPWxTAdb6wQAsPpU33SBFtZBkXbSxK7S2XzmxqTBSA6g",
  "key4": "4dpq6WC697AE6X93qATxE2FiiaxwX49zVmyvuQqZNxGBr51ATuK3fq2yiAhWJbfK54ee9qGXZ1RrVb3vMQ66GGCn",
  "key5": "6zihHNHbHhyjhkk1pMjTexK61BWzrmMnHKpFa9MwET5bi3cRafW2rYdyAnqyJnJLnyjUfz7Cdj8b1B6bLaUpFU4",
  "key6": "59y4p2y1Q9uU7SAZjQjTQJUVh1jTL8Cd7VwCKLjtgGUXFr9qmof2h1FfofhQPuKJVTK2ya3nWPCjswt6jrapCiDt",
  "key7": "h233UDZVt1fjc7Bu4js5pXYo8UxiLLQN9wV9Xu7AT7e3oDqH8eeacA6KhCP1ExEkVcAXHb5jYpPLp1aFXTi7vRE",
  "key8": "4hUUZzYqSt1SBEsgcm99k2DDhyQ9DE726vjCmKt5vDGrc9cZFBmskL8CJFb51G61unGN3HL7WB2bLPgwK421woJj",
  "key9": "5r8MmZszAob4MuXFkH2S2HZG66VphA5NGkX67EJ2p8p1fBpg4pLHvD5NpG1KCuGoMdY1Qv28gEG3S5fLz3EUG2oY",
  "key10": "2rwdCvCiV5Vu4C7XuCKEzbKHwL3JfkAdi7qJnTRBBedTK5nezbgGDRwVD3AUz2oNXJErWvXsxBMu2FNyDLduubpv",
  "key11": "3CH3Ezn9Maa9iZmTeVDCYViKNP8yLapCfwhXeFGMKcyZTdg6Qq9fULMKPuiehzc7eFQJJjFHtm72psHJVdkgJH8P",
  "key12": "5DxDCbNLfGjAwznv7aCdXzRMsXVPuxzgEvSVCr2NKAhh4d16auFz2HkK6Wv8PNJH6wW8ckrC8doNGQppGk5ra6Vk",
  "key13": "63F3HiS1hS38t8PRs4PsFLhYwkXAhx4N8NDTs6EnKFa3jrn64ig4F5n7Ph4D6VNankj3sW7BPp7vnxnxUaSpZwM5",
  "key14": "2M8AzUqnKM8GgF4c5EVUYbodQEKC1aTwmSxgyhQL5wCS2FGDqkBqEr5maoxACQ7JugND6enwiG9JV9mAfJBE39sA",
  "key15": "2zyZZheKSCwNSdHkden6Fy3b8HoUsKVrTvQ2JiRtp2ZP8A3kvpsh2abpWyQDDRB6CQkmzr2Bmbe4byV3oFbNSkNm",
  "key16": "3RniE3JsWB5BYVNR9XP4uf35Et7Livi8DxxuMbDoEUqUSt91cUPNkUiNmuADFPLS8LiJwfDoVMMzyBN8JasnRksM",
  "key17": "26gFs8eYyCraFUAyh9Qpcrsmnn1a4V2ck8qqz59YQmG3ToNgJwz1im86TPZ9mccq6qWZXS5YmgtDiJmr3SEHcxpb",
  "key18": "63AcnEribnUC4ZXxrvZN48waQU32WQxKJHBkgkijwchbHc6ZYptjYZigiWxAvLe3HeT6rgb9FiA2JTtLxaeetUwa",
  "key19": "4XTWCJWWHv4LkNKVwpG11oA5DDi6f3fuyKRJso5FWSMsEbQjNJy5xF44u1jVPgPSH4XfjwR4HzxiCyZjNhMwJ11b",
  "key20": "3tzG8D11ZQwy8AA1HbiBWW2CMQoLCkwqq413hxteDqHrnVwAKzDkf32BaVTdC542omhUKH3ZUwrafedeZQHTLrCA",
  "key21": "2eUTo24BaZXnpMJoLghb5QTj1ZmMCMPmz6o5SmWpyAeJLVhHktud2eoGihkaDo7rzLCvbsxr6u4TfpXy6iq4bpg4",
  "key22": "2YA9AzQ3ExPCR7Aby2TaDbqZUv2m6yAwuBzWPTW5ks9rcGFZZ93KzbEzRGSV1b17JzeWv2J2YefCPBwjEPps2p1p",
  "key23": "23RShF157czq9WEesijdrK1bUnJ9tuXCFDaeMtNqPwPQt7eXTUfzPv2oUKbbWzdem5TvGXpK8WAyXTkDAVtyHzbV",
  "key24": "62Lmd1H3EeP8CoAS9HKaWQeDWjWv6RmpnRm5N2xeiuh9ng9bF6NGM8DY3ETMK9WXbo9bVsEg9aNP8cwU6GFqoWdK",
  "key25": "3w9sd3e4xFYZmPFsuzoccnz49oF1WSs3DZJv4TQQhHV7N1NF5xVh2rookqQRsR37qaY7UJGYDq2ezopnZVCjMUNZ",
  "key26": "5SE1N1f9dQBdtpKAPLeG4J6MLp43bnivbt2Dr4YJHeHw3jkLnGjzssvyCNwsKLwtbo4x5fpUnvBcJXv6YsdD3Jac",
  "key27": "5BteMkH79hs3LE4tdyENBQYf2FGJ1Pjsk8rvCckdHDT3BEHLtEaH5HtnQqYHSWb6Ys4kUukicUbH4DiEB3iM4wTX",
  "key28": "5f3gpPcCo2jMt8tUWp97SfKSPYHSKerDHqz6Y2s6tNWWdtMWDiEKGzEJizrR963vh6mmHQNUG1B9PLV2HKrsgCNK",
  "key29": "23w7zcoNhzGnozowYWq5wSnvTywQ7mpT8eW11bJEvZe6yehAs6PxFhGmGER9fTy1wTZLtyPc6DFLe32cLubXwDbN",
  "key30": "4nLA3SVAWpzTDwaQMbKUTKqLXXBtNEchUVCqBSh9YW2G497fJYsKKwneWFbfSkLd6E84k9q2nQtWyUdargHsYgYB",
  "key31": "2RaD125ZyngtmdeZ5XpEbWcTarv8PvH432sFVe7nVfc3hdE6DMRdrd1bxt3pbpfN6kTRMjNUCi21W5SNUtVJw6TZ",
  "key32": "rknbAVqRUTCKAoD6EhtwXyzHaTdzNCSFpxwEgQ9zn9aZ81e7QpzzN8wFnEDWCiJbobHNB1hyUvtbexyW3GeaKHJ",
  "key33": "294KLno8phADxdBELRwjZbXTCZebEAdwDFyhpWWa1HPCRVWMmd1pLByjaaJpeKCk6AZvz9DCVZ7bbYXVo5dXmZ32",
  "key34": "RskowmA8npmYprHpE77hK5msjncY4L1DwyhnmAAwN5CRZPbDVwXmuWmBc5X5xn8y57BpxrzkJwcoU7AJzfukT8x",
  "key35": "h7A7neRhKNziGXa3kDnatPVfRqPks8x12sxr6R6W8oBwo1DjtQ4YKWej2aCm6aWSp8RyHiBf8fMPrg72T7CT6V2",
  "key36": "4SkatFsrpZMwFg8HvBmhL9mk5CchKtkwcCiYDcP96kzLu8A2P9iDeBcSjVFMHjw6ZmsuCmWr5VTw68sysfKcNe3J",
  "key37": "3arT1NxAjVZHZe8WqXdSSUFyLaw2PXVg5NkYgdERiUTQLAGcSUkz1jRdcMkvhHhYEkmFef5kBVG94e3ABsDqZ8rY",
  "key38": "4Tjhsi44fCHG4cD6iLi5pTFLwWngeFBQssM1nuv3VPhMciVoiJVJt9A25faeTu28LHa788uqkajJTEaPQo3mqkgr",
  "key39": "Ada4UAy5oMtwaDBGK9i4Jigs7xUdtKqNWsgCTgD3v2PQWfUyhzedAwDH6Anae6RcS16zPEEDz6jZAQ57vj8ZwHY",
  "key40": "5K2vsnfC4Co8c9iNPTjoRA3gVcGQdKUgJd6cACQdDU9DD5HUfSM6jyty5HoVJgdTo9NiPNkY6eiuRhELuFeMqsSg",
  "key41": "5d5913r36Nwbk8dpx5YhXNwoF4KEcWh5Q7cyZmmCjj2x2U67sS3ndfV35rLskojJFbYDz386Uj1NjqHQ3Awv8VeA",
  "key42": "wtXYgREAZZxpLju1fh24jY7AqKZoqvjJe5LyA7WuFzt8FTJNcHAzoRwgmCTqaz144RAfiGweYFSugnHsCVTuuQo",
  "key43": "32drDx7yWKcbxVJYdEGQAtdpRJiL4V1XJcwyBT1gjzfbPB58JQnezC7rCeBfG4b2MmxThEz3o5xCWErREGmBGE77",
  "key44": "4TjHsgAiMutAfectAMaaf8s8TztD62kTGV6vRbn49P1EjzGP1E2Ut7fR5w84xAidGWoYTakZhggbbnUF38KNF7ux",
  "key45": "31FsDy8ie52P1DZP1Ak19ECwahDd8cBbLWFQ5PckkRWSAVFpvVTcftuxwaHwSTZWNX9fM6ny8ZSwq9CdBwEmJ5FG"
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
