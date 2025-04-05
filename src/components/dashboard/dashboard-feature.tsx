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
    "5aptWK1gSWKFvwLwuaRPiJya3PxsqSvyBUDbJSYBaj7fsazv4enMhAvb6Fm8WZnGAtriS2CfYvLifATjomZmkDhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2bSEUkYA3TzXPG5RjDaa7GYiZe3KUywMdww11VcBKn7rzga7bnPqjSW4stPrfsrNRYHRMVh5irqDJeV5SeRKbv",
  "key1": "2wBx5JjCN6aAQoZKgDSbuufwz2B3mADxJF7aZGnoTKrqFbiYFSc1CUkMnMEMrP1RhkuPEVFrdeuysq3s8rQEogWm",
  "key2": "2MfD4ssi4Ro1LXRdC6FM69SusyAfSsbQP6hTuVXy4gn9ybdXApZztPpYzTc1JCy9tyBh6ZVBNj6xesGeY4a32U5d",
  "key3": "5xuNGYVY1WQKGWnA5XVGpYpxv7tFFi2A7WXeBBkg711aW9ac435Us8oDxa1gvMR44uF6eLCZGBsyHKxsrWaXVfDT",
  "key4": "kSHZXyP7UpU4hWw9c4Hnfn5NCHtU2iKz2bigWfVtrS9tCU6ymbsCHYjLwAvPtaLp7dJwF1VgNFJ5uMrj2HYxxJs",
  "key5": "62Vrhfvb7yzGyRcd3Ft9mXPXtPBtjvQkNizmY6ajqpv2tWdEpzRyvjsC3y8QZYFqhx5hNVZKBEA7MPQ3QuwZTeSN",
  "key6": "2DDeJ8dyDscfnUNvnK6um5jxPLRw2TipVdPLY9yPn7qEfLTs4NJ3FaF1MiWfTgXt6xZVw4hmW3G4YFhssLNhj5bH",
  "key7": "sna7FDbFxEbQ98gYykuSYNAziHn8NvkztHqC2FiC2hwNqWnbWZRgqVo8vzvVL3Bn5caof6qLVBRNsQX8xG5kV3V",
  "key8": "YxKrfhxBr4jdxe8F5RJTvQbisDnpfLT2GmBGxfnhFMT2H7eJW13cBv2q54H3ZbR3XewSJSUZV6nXXh1prvbcC8w",
  "key9": "2EzkKgk4YnfCBj3L3ktNQUevyhXFqVojRJeD1nDkEwxnea5uSSTQJnXuFhJFDEAKDLA4Ns8nGG4pk7x6H6JEhGLu",
  "key10": "2DQ43BGGjrSgJUaG2u6YxVBVMcWbDqkjHU9gUYfpncBqCcPEfRrTSivQhSsDSyiQosjhmBrXFpxCsBvYxhx1PiPk",
  "key11": "2J8esTwVV3dxBRHwMtH7ntCvdV36sbXThtNSgHifCaZGKP998UNt4z5v7TRJoPutMoPugEUnYF14q1XdGPtkBiC9",
  "key12": "3KnJEwaDj14WGXPuAgPUafdVUjHsJG96iKGCy8qq89x4fSvdW7D2aoc4ktnZxJs2mRgDnGhBViumcbwhR1nsaUC1",
  "key13": "2iqHdusYLYA4yxMKvLacGwPiRXkkK7Ch784krLMsF5ikXN9ucgxntVAZwxbzMVJVSULyKpEJ8PLf4oC9xr3TGav7",
  "key14": "4pcM72V37yGVRk1y3371moTsgn2aybtygepgWBvVfi12LqWbnmjkkwgg95CYopsKiHL7EaHLNiX1VcTZJ4oEA1Jj",
  "key15": "3ZHKZg6psX3cLZUw7WguQ2yB335AQH93PLC2i2AX18GuyYEvGaajPbEQ3WjbxZXnw9HDPqa4z1kRy2DeR95A71i1",
  "key16": "4jtJpMqdpqMLMqEu7dd7cvRBMAwEXUzDZ5UFCM5Wusx67rvd5HX4sGA6m1YCy9uzRYm4cZso8aDfFqwdEw6zFp8r",
  "key17": "P82QPopKLYMWWdz8XwtXMFFfNWqzPTnyGCtQmaDEgnjxSKT3eAfhtSeCLF4eqsHxZSu4KzdyjtQmD5ZXQH4WZhg",
  "key18": "3o7yANk1FoCvhREQVWsEvwxavcotcsQJ8tZyeR3V96GGGUd6jjSGJ8V5VX3s4DvCgWe93upSHXcfFQHdaAfGXfr3",
  "key19": "2ucBYpQQvcfMHVePL8yQf34hLdAEFVv5AMzqKYZ3ciwpB9R37oXpEoVVMB9nd5MGrN7eVbheCXmSRKJJk57yWhQm",
  "key20": "3nuVuMsPbnmeoR8QQfzbPh6P5UYfGN88AMZo1dWGeRfWhBFKRukMPQ9Uw7JrsWWbqADpoit2K9nZHy5geV6x11Am",
  "key21": "zuVKMXDiVBFMpvcLaWA1kr2VX3mrsdxJu2CMAbknQtosQFJ6FoAZE7LGqjbkwtQB1wXXWVs7f7B3ZtQRWyf7fp4",
  "key22": "GegYyCcCJqHTD5ZsEPTZb4L2t5GDPmBYDMSYd9p42XDbsxPxgtw8GQhhjNwyJhPLpbNmrHgRY6LLPvsryTmDuxV",
  "key23": "5kTV1GfFASwBMiyHZ73hQvJb4oW8s7Fc4tMcpcQ3Q1qSQnnWVvFoi2bg9pWNqvmy3VXx3ViHYqThrRbhnLu7gycX",
  "key24": "5uicWaf7cLEgtbdNyaNmxk1JqzXDQym4BjgBkpBSU8JUXxczVXHt2V2JJwjhJpp7AZyie1LMkHT86qGH4iUGhajh",
  "key25": "5LrCnCFFAghJFeW7Yc1SC9eKbRGLjJ1tmJ5UHsWQfpvzUoBR7FTh6VArAGtgDUDLgriRYLvDW5XSUWMzMHfXnUBN",
  "key26": "5hb5PXXEyoDuei6ESHVaqevhAR1uSvfAkSo7jWWHCP3E9gVF76YyCVhUfzjeqYUNP8NcH5kWA3mb5jniFW8nB8wo",
  "key27": "4r6SiN1xuBG1Byg5TzdV8jUk4KsbqUK8pZQR6HFQde1BR7HnXHy2TsNJC3XWZB62m3ommfWo4wrLU9HkBqmvG6pz",
  "key28": "4bsriGPMhm1znumebtjXHsGbuZTtCc7EgFUS5qCXaMEskJT32i3cgFKM5RBFTr9oKnJjkLW4Hi92dMcDTaHCPFQQ",
  "key29": "3iEbQ3FBvaRyQWKLjy6zypEHHgcDE9VPkC3z6iTazMqdRQHNmDWuFtDpKwzwCuia5X6ar88sU8HzMJ2MLboEeT9Z",
  "key30": "mhDKHYyJBnedQyX29a8SZ7N1y9tpjaMZmu3mHvqj218HREFBY5yBKABPAGmMWc7w2EckKB7gwjWYGh57oKR3bD6",
  "key31": "4UzwEie2C4Ak7S4YixiBVoMpqtncAqucrJx9GcfnULhJ2fopJVXTN1Vft4C7oj51RnRdkH8fZZRXPGrbPcuD46e",
  "key32": "62LEsBxUHQioEwcFg9XK5vqPx8sB1GjnQupZJ3Pjxx8GJcPRDcxrYuL2bjDHDDTfy6oF9pNGU6wEYCAnKXdDs1hp",
  "key33": "4HLFQ41SPAsxjBYCykx54bmVPC9Dp59VTA4MVkX4CtMXxkTpUCo4owYfyGJdV625aq5afn2Lwx1NjxWj4aHTp2bc",
  "key34": "5FbFdyGYC4TJSX6vbKyeu11QWFtE2fCJCk14E5VYHPUGFrLPhHHcRdfKUYYk83iZe5oJZJRrNWn32KWbQ7BgEq5A"
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
