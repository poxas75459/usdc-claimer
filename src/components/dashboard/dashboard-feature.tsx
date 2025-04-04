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
    "4D483gX6GZbUYbRpmViAGWGbn5Ljx9dkcXY9P9pVpvaBDnB1CEjrB8vUCsQHTs326VQFMgtwsM3YyAgz3aae7D1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XbkngcCwLTKzCMtc6QidnrdtxbqxPr6XYHbJZgPmCQExXSux6WNjbjdC6gjonzi6vkHk8NLDM2RQLTJamrbSZkg",
  "key1": "3oN24QkB9xTUu6WGrJWTrfpsk4NNHdGqpWZ8Q24jKjtvUdp4Xkbo1PEUGMjxSzDFPtrjwsyk3RadhPxfFQ5dRa4x",
  "key2": "2WV4uYpskiYpELVgW3BfiV2fVxqVVS11wdnXvJLjKNHR84UP9vEkzqmpLppTyNniEUpX1EYWsjHTpvLG6hRB8qTY",
  "key3": "oG6xS9kgFaSSPHRiMyr9f9zk8QmyMvy9cn8F2qhnGEdkUR2oJh5TqZdZLNTJbJVjfW2e6mnjgtv4kNdeYuty55F",
  "key4": "RSEekGWMAk5JLrNdaYF5grC5GSW1HFy48pVP9rrJkgPzdJ4NLWQoxs85oAaJy6cL766WYZ52VEqAiXiGNYCyC5C",
  "key5": "3WTHft9Qo2TGN1PceNaPBpwnWFCE7VKuLLP5Ye8bdBZX5KfYyqdhj4VjtofWx4SnkDr44AcSSLyvrQkSfqc9zxuj",
  "key6": "33QU3VjPQdEBmRd2quF98g1NtLMSw4x7CsRWeVNJboRjiYFKfYSTVxzZMwKCkgQFgo1UthvnQepvnDPVx7UvJKgR",
  "key7": "yB2P1h1sp8bEM4rc3k7AfR9ArFZXZkobfb1HvztdqgsRCv926Tu5V29PD3gLBrHhEaRn3U4kJ5LKSsqqZp4vPbE",
  "key8": "3Y2JiM7J2xothmXv4AGxQkwMvbbCHnGa1BiFkTWzxZJqtx3a8b31LadLFzNnMBnYYXc3EZ4PdTnyc6Dc4bmdQsGc",
  "key9": "3haamQ4GoJkX8she36DhgUYvJQpUCRe7gNkdgQE3mCaRTTagCnqDpm6dduVHyL9BpyW1rdc5p9UVaCxBauz7cw5P",
  "key10": "2yei4RMEQvpUsgDwk3iFw67QTd67wDynxSocJTC7wsQni1PRQ2XhVwuj723xyehAWXxdxstFYe4sQdBZ1aDxm34L",
  "key11": "2u8qzkc97o4PZnqDvQGvNjnpknkW2JbHc1rMdkVfziUqrT2pRup1ou6kK5PJZwLeBdErU5kkJ7eK4wgEyyNx3Gnz",
  "key12": "2EKb2DXLMXgouuBDJ4h8mtfrdN5SUGRKACPxMYLWCjVMkpcdkk48rsxvcc8nyEmnd7CCue6qvG1SgAAu5PoXwZP3",
  "key13": "5bMB9tyo5QFKAqmFFcRmNX8XqZbwQLRoAFg3oiWZHVy4kxhK27VAga1aP6rjFiKJXiGSwUqUsgjahYZEy6tGXNxG",
  "key14": "4oHwiXMnQ8xiT4jHENcPfX3YQAg8RtvXnsg4taGqiqHuhuYqh2jvBS2tTsirGXHgss6KZHDWXVUVCKiLPwzKSdYY",
  "key15": "5dGpN1LgmUz9kKdABF6J5ZsWnCxJAdYK7LMh5JiJ1W59TrVS39MQsjpYSczCEiyQ1hNQw4CYmDihka951HqAGruC",
  "key16": "2GZZRoBK4N9AL4MdQsF98KU7STpfKxM3JKHSmLHmfs1WfBzjL5ACEUyAwxzo2UDt32AZnZGFoykyYASvu6JHuUVG",
  "key17": "eCLBh1KbfYb9ty7XcNVEYBS6aZuSB3gV32Ga8cRpR7DTT9VrbqbTE3o2ao8s5SJhVXQrezTupa53PD8drbZzg3H",
  "key18": "5bZBt8PZEHNiHuukvaJDhvooNy1RWj3hgDkX7DSdiuJbLoERcR6CVvDwwoe7koshDEu6KBCSDetxVTkhVtHPfYvr",
  "key19": "2FzRk6uUckvRQQCHadS4Pop5jmRW5QrV5HZm7QDitKZJPBJh5oVew8CgQXaFiMZ4XWn5yKNK75DWsgPgTJmVeGYJ",
  "key20": "5aLa17m733Vyop6YiY2Q65LvLmNVcCrQ6FvV9o7K5sVoRLCx8NsF2NTDNV3csA7sxz6R86w45ZhXQa7UQm4HRYHq",
  "key21": "4j2Uyezp3E3SBU4ffnb8Q8L98NHPCBsdrLxDZPsE17ZzU9aqsjXiSz4325GfmwaFnqBxuo9JpAgYK5wdAHh4jnuG",
  "key22": "2KRAkkNdDqKJhe9bcKWcVUJ5jUB5YktdBbz8mitKMLCKCgHo1Uy4G6XtAp9qWGke18BWbH8u8Cuhc2jYTQPKEFYR",
  "key23": "4ubLCCCU2vhRaSTFvD88R3KG9q3B2cRhSLTyBZCJcZJFX6Vkp7WCd8W8ttq6xc4jMyPNujzXXrcu9umWTa35qp3N",
  "key24": "62SfVphS3Mk5JLmj8wLSLhkU7FxgmUWazs5P3dSwkUeckhHv4iKtpGrPrSvUjnp16cRXHPzNDdWMJ2n63KG2kAci",
  "key25": "3TqaW6g4rQNZcnr1Gmz6zs43h6YaNEG2pd1VkLwaCyRk8Asa6NAUVVa81Hnzj44EdzEjq5zFQniinTRjg9PfoTgQ",
  "key26": "58NS1N1wBKy5V34bht4DrQEeuSxPEykrtPSVfJSQKEU2qskRMhCTEittRkHvcsTubTkrZQuyho3vGpmQ9Savp46a",
  "key27": "3jNdkZ5mwuJGMad17shpoEH9JrTfWtW2s9FeSY7kUCHwzDV7CNF45cfZJfkfq1ZaA91kVq7wN7KLvsLXEzShBBiR",
  "key28": "2w4vkVEvRiCArDJZZAeheDEx8wHb51zq7yYNYkf2VFKjXFhtJoTgxY6y86ryDbVmhaXaJnZnXdGW9ypMKWSFRQ5z",
  "key29": "5K8GFpSXopX3r1c3Tnq31ULWNbiRE6qiLd6LHgS595v3HAKZizdDBv1st3kikBdSwM3XZh4WQqo9JDN41fCeVHFp",
  "key30": "31E3gU9V2QdZmNFASHYMkDsaDeAFWFv8MsiTArmBknvnvpfCYQqRtHsrKMEpr9qmZt9M8jdBFKDAFUhZ9aABSAa9",
  "key31": "4NKLNNHJhtpWR3ZqRBcpgt2mpFERtiSFwE52kuYkXpeRrErqwSVEc8QLaFBKzG4r3EB3nUPtu1YVLSdighppeMus"
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
