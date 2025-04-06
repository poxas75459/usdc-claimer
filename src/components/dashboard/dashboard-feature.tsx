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
    "3EzQcRvfvWoFBmxsK3TMeaqrj8cdDwq9xmzDMCbQnKAvxomcwFP68ADPdPVo2KwVpfLJwNwjmkj77e4kkE3BUycm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5feqm3jkzjZTJnsF5QmU5FW7oBdq8aF2CJgzMEaZ1Epj67zQAgCta5uDdUGLRuR49QbZ35zGB6WnrJHBLcuq44zD",
  "key1": "49X2JbF2n9qFMVLAwjqzTJS1W4g1nvbYMDoXdT5ehN5azQJvUa6nWLYf4Y5XttjPC4BJYX1YhbvzJUMPaxbQ9qCy",
  "key2": "2fMFoo2a81W6k386D6HKQRL3WBDcgj3qDWP5th6hicCpgpCw8PuHnL4JPSC9tcBdRiUNHM1SSRSEdvfnqRW6YsKs",
  "key3": "5rQmSNAtR9jje4HPHjh6WuqxsDGZ168vtK5BGDujq6qeK34suXQmYGhBn57BKwZPoqyZLkBRK1o5SnMLEWq9KfsD",
  "key4": "5KBPVaRBC12j7QqshVyGynCw9SfiGapcQfXJRRd5TmDKTXBzfuRFXrcZHWZ33fXjzBVzof5WTC5znJFnw4zAUQ5z",
  "key5": "aZwTuCJRySY4XX9T23Gias2SGLGhiwjnqbmrAEHdYurbC4jfMrhE14UoMwaNGXzXqzmHiumumBCQ8NkEoT5acMU",
  "key6": "2RWPoAcndvR13vWXELeU2yv1jKGPHF1bcXvz8rTbEucMvRTv4bt3Pe87Keh52YAZzhMvxbq47me8Kf7Kp6cUaGJW",
  "key7": "29GzD8bVQZethmAH2vmRruPRS447q64AqLGtBaBYXSXQnL8qh5WaMPRUa5bB46CNpmhGuqKUryBk3YCL4hZJmi5m",
  "key8": "9RbAqdwKv7jNU3wKujYwZeAQMdvjM7CChpR1xQQAoPLqSigV31UCKvPF6AC3GhgYT4XGB3QC7D7z7wUMSkFHwdh",
  "key9": "4K83zgSFLZLD8LcZ9vjK3tEQxYkZhrE8XvZmBDiffRKVj6PrnzwD6cfGksQPYhznh1yv4LCqGqv9eX67XQDmh62o",
  "key10": "5FFJtke9WYsySr5TfCj5UV1HDEBcwm4qrXdzcbnkwXbiZsDttxxQPCGYzKhrxBWv4WGZ7f2xCgS47vEY1FgXaD3M",
  "key11": "3mELaxGTE8SgC5LgCGFpQngw3SXp5W6JfmKqH6qcQQYxuD6cnmH5mRnAVZod5CKxDcTpGEXLderz2k61zQbPR1LS",
  "key12": "EdpQU48ixuZMVREuV9wjssMuMpFiohSG1kWs17zAMTPNd7q3QS3GTEvjLE6WMYjfziDCstjVhKD9mm2Gj2KcZC3",
  "key13": "3D5YyZSD2gDDSj7FhW82PtZE6tG5AFc58VTiHJtoX9gf7cEmKjgCW8NPgpoD2r8qusPyJYvfZbYFtv27S6YhPPxx",
  "key14": "dfbgZifqpHLPzd1eLnydANh4Ex6MMZ5p3rdE6hxKe9tuTarxd5HbeKAiDzkrhQwKqphLvTPDXRGfw8QaDg3wtjN",
  "key15": "dh57ty2oNm92vSWMMAg7cAdc6roB1FicpT2kKC11xWsMN1KfTjBQjMAMS19jbLUrfgzESMHWrEJB7VWdJk38z2g",
  "key16": "hu8nziG5d3fyiTjnty9S1RVxhFm4kEEWVqSkYqdrEp8b3FjVAicgZmddMSnmPJ2RARJeVwx3nwxVo2hRJrEB7f7",
  "key17": "4KmBafnmuwk41agGhJKgaqTCapH4ZbmQR2ua8rDBQe5RiMmvCGxZWU66N8vanCnd6vQxChXbRE2BPYnbRNiXfeod",
  "key18": "5EEeGNN44M5RNkmRd5GgfmiR7sv2ZJtJ2qMkd6YMHcrS6M67ifGd5F8WevfvveKucn7sVVQXWo2ctQS4R5JTPP8V",
  "key19": "394D7VqhAmcdrinhfB3T1oFLJr2n9yf7Y5gUU9p2FjZEhf73WS3uNhtDzXaMvdkhkdSTYJwacSWQLvN1SNk5Di2S",
  "key20": "Acbkeoorx2dF5ijxw9a7D13PdvcPgXegELtY82fnNDG3dEmK1m96HcJ7kd1gXZ2FFEAwWwzvTGYDMJxfQVva41e",
  "key21": "5YmNKHjXD6jKwtMpKPeJgXGqrepnvc6tLBoPqBrNRYe3a2rudcLVUCATYmuXED6ufrecVsesChhcVK23Cs4xFjV4",
  "key22": "56yJMnPQ1k1UctrU4MYLiEjyHAD7jeLunbAFibGJpFQj3xbYSwfD7cshtdTbwAp4hLCgofCM49tXeUE3eRwQZLoQ",
  "key23": "55YGBFy4LwkwP6TdrjpvQ4HLUBJ3pBLu9hHuYSrdT6u6Du43JTA7FT887B9QUwS3xrjQ3wfqUvPvm76weHshrpKd",
  "key24": "2uqawSgCJEL3e7pQNJWf9SX7jTzEu3ASigbY3FfZLDAqQy6QPaz3ycfeFtLfqGS7k7uedQK7xJHg5cHyaWzvCJSC",
  "key25": "53ZpgR6DEoUjCNJ96NptQGUCFpV5X9dzpSLrt3Nsr2N9igcNTiQCWKGKKpf7V4UMmjNd4Goy8mvqikqT41yY56M1",
  "key26": "5BZVhqnm1K6b4SsExjeGFWrFwZxDHZyFe6kWyJgHjvfX4dCKsTC21bpKQWAxFGwK8gzvf7WpW3jK8m6a2LHSHZEw",
  "key27": "3CAKdtVGWFA4UNsFU4vHDMtsVAvBcyhk3wY9herPjZd8d1xXGP4FzwB4Htvm7v2qEaxksPeciupwNn4tUVnRxvfu",
  "key28": "384R6sudK4hk8aUxdesAAujUzZB9N72Bn2Pfuhyz5Q5ctQFgN434UZhgHjJihCzu7UMb6Kz35WQC8Dd7p5GedPjL",
  "key29": "4rdZEoiZoQk44QAwWN5BXVmRDr1f2ci6dwMKSsW8s3yKWNskEVDNdbHDAoBVqGiZEWLwxvLAeX9Dyds6p7WeXRJ6",
  "key30": "52554jgXkrXs9NfaiPWs363yF9YsQdvxBykyMCtiKNK9K3w2qPUWEjMVXoaF17oWGFXUpdURDyQADtvXAQv6dK9b",
  "key31": "4PpGB2igzFBLWtvtSbfUPVrTEZeDGT4eXUA9tvYjUa5iD64X9PqPpLTeJ2tyqAtjgesjSibfsDj3CD7FUHHLG4s5",
  "key32": "5ShMp2LnvRredxruZ8oM8jwWzbZuhPSxFf2XNR68iK1PVETEiK8XgDvBEVYrHnnDxKJLWbUUmQDkaJEqkyunsQM9",
  "key33": "34dWPMD167T6QWctgmq6xZsh4eNoL5tXw8UHghz9QapaGpTVC7y7tiyvxoSYxeRckKZH5zaLFG2zPhv2Y6CXJbpD",
  "key34": "4LZZyC1XZ6xhsSUAhEXXZgHZon4K4ebJy7NGmkcU6Da5be4SwSzHJznNgEMDrog8no9wJ6RnpbqG8JUDUc8S7y9b"
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
