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
    "2SgF1Tx2hStxF69JKyC2MJaPwoTbqGw26sNEdiGo9YywdZZXkhMcqfBmN2zrzW4jW5NcuiUBtvyadu9roq57i2Mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46UFFnhMfC8W9g1oM2P2ZCAsY2FctrYgMmPiEzyMhCFS9Yzguiic1Hzeo6B4FKsSTeDAvJYnJ1PLGxXPTfN9pe2g",
  "key1": "3AyYegi2vyFsNjyLVtESbJzSHMV6yeUQ6RFKtPgiqo2vVm4W3gMa2F5LP4Ny7BYVdsvtgSyscKMkcDxgRX5nxy8x",
  "key2": "4Z8t1WUjYqj73TSKuJM71G3cW1Mc83pcfgtX3GtEJDS961DJgSvCEaZAFsEPAEteVas952yhyW72KxpEa9WrdSYA",
  "key3": "cMKC4jXdnYveaKCziuaabtKu7sAwiPaaUpiePnaSCgHpanoZfDUu2r94hh6Vydp5MQ5qHJWAqm9V6EG4C9LG59A",
  "key4": "5fMwqv7gpkyr7jRzNYjkCMJzhy7tMn5uB8T6heujcPJAHMp6kpBoTBzry7ptNW6rGaDRrLsDjb9upr3QfkC7JrVn",
  "key5": "2t1boK9YXhvqQMKKY1ZS3JzBPXWJmizp38Xew4S2xjodcc5NGevoQFbNFhTtSm22RPsWhfrmE3tpCipPH7zNNJ5t",
  "key6": "5ewabz7bhxiXy8J3kStiXnSMzdR9SPFka2Tpy1DmPEzKv4Jq2YzRiDoTPCWkPLJo9M6ryx5Y4t9AUtLTYNDcbvc",
  "key7": "b1BNzbbpCxFXACHn1Z844GgWL3dBCXkvjCHXByohunpdZCu4GhU7zLjnFGRfzduhwzfoFY9EdcYGEgE36a26bnB",
  "key8": "3mpKxgCGcdp8ENqQs83wHckBVay2PSAMkBv47W3tbwiAJefMatiUh6AsCzxx8kgtkEdEZb1eEWUV969MDsFa7gKq",
  "key9": "3eJNQSH57Qfc7MbxACEQzTUEz26GDtfhga9oxWV4XZtGyJEuBAZ9i4HuVHax7EjAWe4bX1YENMJ18E5oV8rws2TE",
  "key10": "5cLgw6qkKnbvaYeSnG4x3YWfK6tCZXbp5xxMZWVqRX8NRdMQaRTYE6RowqkATGom2ZFpQBUJWk6BcyMzEzzsv5Q6",
  "key11": "4aiJ39L22NWxBzUVjTeQgM2CMYX6rpjExsHVQVoHsnUWXPwRXpsMUkeFD7LWxLuBW7sR7T4LJ2wmWuwiSn4xJgS9",
  "key12": "4zywpaw34FcYYVHZ4jgxYYzmcemwyhwbU7UDnYbrodnqVm6qhiUuMX5ou4cLftbRfvtD1SfB53duBqr5qLoRjhJ6",
  "key13": "4JPV1FAjEp9J7JWJGjQmmcgvkEpQgqy51Bw7z6Gy3imUC2fBQtMFmHLMuERMxDmatnhcASTcYHh3fg3Cxp2bvZm9",
  "key14": "B2yUAFBVcK5XNu2qYLAYxuWXSBeAbSTmdvf8Dt4rVpAuSYohdEGBdBejUit2ZEwehYDoX2VmgefgrNCyG9w8xMH",
  "key15": "67h3Fpwu9z7sXcV3F2mkCB6dkUgMTn4smmw2uGz4ymtnAigqzu7ZfZAaCiTio6qTkANgj9BFLtHLeEBqcZ2naQmn",
  "key16": "3noGyoHNT2euw5u6auZnwrbKmaetnxXwnNQrNfo2JPuRp8b8E4vm6jx8XYhrmQycdvFZHrmTHGG6qHVg4hzjokWu",
  "key17": "4P3CEoZ2MUYjGP9ig139EsW1Rhmj71L8yFgwJoWBuM5rt36XxkjXLrastssqgeFjnGkVWKpVPyMQMqN7Xgtu3VQa",
  "key18": "24cR2f8VZMPsaoB1J1mbLrvTUkrTswN4pZ53oyv38Xv6VhRUshkvdSjE98mrXXa5AGne1DDnqYWMpTpTVNwN7Nj2",
  "key19": "5RvpQnU4BXQdRGxCjwuB1VBddwNoAwYdCS5tqF5aXEJcu6JggJRi8mRFvEMyF9vJbgBvwqtKt5xWEPAG8EB4VnXB",
  "key20": "cspRmxsJQKf8K9Tp7Q77GVaEkaUZEDJg5CioeoPJowWwUg19CR9zXZpoSiyeFGjAhn8pxZnMbqwzZpXa1bD8jDW",
  "key21": "TwuiNRKmYhesAiY7sx88DfpZb24xnXeUcwS21pW184c5y9pUa9QN7xsKvVFnStwcfcX6n5yVUNY382Jize2aQVC",
  "key22": "213hz5DWyfHTUfTipt4vdi5Q7waWSyiqVBXYGMxAMi14N49KkY5o28fZjaXwqtW86E1rFR8cfX5C978zskQMysjv",
  "key23": "zdQZPpgJsSovcfWSwo9q1s4xYY1R9hFnSSmy4ntjC6TnMzBUUmnrNf92d1CFtknAJdaPDnGkU9G5febs5g59huC",
  "key24": "2wCmCStZ3VauLzP3nVbiLP3D2hE5ovywVhm5nmv9xztFWuXjvD5zKyGVYEra2iJ2hbfpQGJ94BKaYnkFZMT83W4f",
  "key25": "2tKNK4Q5We34LqhXRLLSppRy5bo1iDFmsqzk4hT2a1ZLkdn3mA9R8KoxViR436ybyan63deFm2ZobLHyqkDerLvh",
  "key26": "5n1YDBhwrKUMLrPFQSRXxJqPeuHgtAgps5KyLSBmxuPsNNWqLdsPxC7u5rpHxiJi1f7p139ZnDL17C4SY2waR5cQ",
  "key27": "2eU8wpaBhM8hW38qrh76ncbpBazrjqRq7Mm9NuBXjYXHbEmRsup8jF7mf9irrpTkvC8Wivn9KUdQqwNRiNsfmUxM",
  "key28": "hGpdMBPNVFqM6CEcRbsveSybGTPyF5FHysuPu2AXhubJ4FbcetvSZ3EJWiekhmBqS4G52LQdcdpLBmzrKyGzxjV",
  "key29": "tWXybMAtcV5DZApXwHxHLEzJ1azDYxcoWmSyCHd74z32dmLtaFqDTJ6Wkb2cmhrNC7b5AunguaXhEk9VQ3KrKhX",
  "key30": "3gbKPzygZHZ8ffri7X1mT4wAbH8S6jREdRQCLqB6pCyFQZLzpa4v74rQML7DNn2L7RC9Ardas5MbzaPmdwD6z7SW",
  "key31": "3y69GGufb7zKDaiGSDpSmiTPMsQ8pjsRxLEn5eXk8aosy48TesNU11bj7FCKfrAvTkgaC1mdqoZRVvd26RMt1tyK",
  "key32": "5KTMTX296txhoeXV2AtjcVWLAJnsCyHFH2f9PekNRKdHhRbggvKwYAmv8pwQ1xUoTqLqSwfSQ5sUVMnbLT1ubYvU",
  "key33": "47HxdwK3uYxMoGhPDM6FssFxJnAsNqxpwKGNAcsQozAsmFu7SaHSh6p9PxHeRTys2Ya96XxyRYh1qSKBjJuEWofc",
  "key34": "5VJkeoHjHSRXbPt6fLYiQp16DZ7Lx6BLhAQ9m3m6zeqhgwQzJ92Dhjxu1TP3o1jfLkKMNMYq4TE7xdinzuvwrwZk",
  "key35": "5JbXvy8gBnzfMXT9p2FPDBFct9uKD4Ax666ZdkUumFWrmjbzcxNfVw6VqHAXbBVvgZPHosV2kKtyhTsSFr87Spem",
  "key36": "456Vzws9z7Qrb8NRgyMgSem31P1nkFSyn76RrMuFBSLb5cMnrJKPqdhQTgetEv1tktXPuNEAcSCBp4BnHDBbndak",
  "key37": "4QsWCg8oi2YvG8PYRhfjUnRxeNj4h5RRyvwqaFare3s353njNaUqKMajk32dG4QhHPBcRD7HJznSvXcwstqfV5rt"
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
