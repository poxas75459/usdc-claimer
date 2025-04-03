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
    "eFn4JHxkPnbXaA1s3PHABQeq11R9RShzBVcKrJkzSWR77AVsp1XwhupBUCkxerdwRWyCmkgbdHG9THmw4RQGJ3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHNg6uEnVvZUSWvu8NLQe8A3MGUmqwL9YDtQmTiG1RmUX8r5wy2emLvEtmpyQk9qLPXDhxtzgwhJYFTrbEVag4w",
  "key1": "7zkaaBm3pmXFSigDwQWMdXGBQrJQ7G7kYP7riWbc7VDbTz6JX4TTTRzWvTrmk5UbcE1mnUMHePwLMWHwJZDpwTt",
  "key2": "3AcYhLZfsDDG8R6AcRbkmuCPgZNnqzksm3SpPBTdQzhnESaMjjpixdkcCvyaRp9xKEwHzWgm5WC3H5JG1hZGV5hp",
  "key3": "jS4AWsfJoqGk8x7YRbfvC9DQdv8hTkLnekqAraf6bvM3WqhH9iuoMkV3GG4AvcN2EdeSWbw3r2CjD2hwdsjpXDY",
  "key4": "4r46L9JpnMYj3ZmMJ2uL8KSmrisGvtmrUaD7iTLy7RSLkVCv6auRpWEvC7E6GcV7ZuUXhujigmfVBetxEqBAoYip",
  "key5": "29DDYsikhbzc6BZ7JH7Sm2aqQrLrsMjdMuLNUHjSg71sQb8dQwee6aAYrhZDpJM3oCC44UVPo4gpDqoM77415pjS",
  "key6": "3CFkjZuJ1ZGZn4tidBocz26Mc9kjuCJojQA2vTUDKhW3eET6dJFqR9AzTUzDxSo9fBsVTVgkJ55xiJz6PbeLFq5z",
  "key7": "2njXdcDzrbbJ5jEUfFWof5hy3jNggkyepdCitY2PPX3QZidCd39MBsMjBnXxCUbcNjVCHw2ABrcVCw6QcDUpQZdr",
  "key8": "586M6itPjuJMmjrWjiRkQkFxHMQ3V7AkFRYF8QcNd1E5racT6yGBfFSpGiHrxQtCGgWAkwskig4TCSZozZ9TkDsu",
  "key9": "61FBmQR4JRZXjbg3qs4XauLbkiGwxnKdyofHa9n2ckAYmG3XGdQKo7JsAkY9Xa52QFaUuehUmti4aydqUnYDdndJ",
  "key10": "3mAmM51BLuW5ueNxegmF39sFGwC1TsSRz9zhwNPZtzVsN631vmtarLX2b12V9oL1J6ekpv2UFN7rKBG2xU5jaFkS",
  "key11": "bcQ7KA4fqa12nVnMvugF7nAQMHs4DphpNsAZBy9D3MtcpmpRrTHw7LjyKwRo3xqQfBN1i74XUCC58aJ8ZRvqR8K",
  "key12": "4d4mLCatc5B7AyqHufD7YmrMkmdUHxM3qs54Kh44D3rfuAcuxEmC3bukajKWgCLJYPr6vDixaT887kSGbCFfzYWz",
  "key13": "3BZAGpK57BXbon3XZdfnxLbiEuZMcFWMzDvgMk8LHo7xcSDoE6wfL81rweQBHVLhWMQxqXbG6t9NPAohGvZcg7W",
  "key14": "2vYPPmmc8BBdzKGWVEAfED2ZxWm4TymBCnP58Vo8EpMPCmvgsTZyjUg5gKi5XmZUa3gJLk4z8i13ojU252NH4gQn",
  "key15": "4itZMUhEh6LYMuShD7qRpw2ZVWjs9FJc54PUSS9hWKt4ikBUQoPNttK9kuP3ANiSfZvnjDD9y7t8BNn936NhXpdo",
  "key16": "sHohhjYpHmYspyfjWwySuiUbswnPwnKULfeSpFcCJ5ade8FBqTQ39CDwUJn1rsqKF3C6Pjgwg7RKJ3Pvh7JzatW",
  "key17": "3z1hzygmsidM1WTS5xforFmeqrJKGE4tQAXaEvs3C2mTWq9MabbSRqw5zbUnQLxbFX76V2NtNkU961dc4CWd9StW",
  "key18": "5Gyev2dNjJu9zCQu4afpuZcPPxub3DXjyJaq6qLBGhwAf2haNNYGcfN7Xg5go6oaqZH9pwC1ygmUqaY6EbEBMyC8",
  "key19": "29tqJJpHSudNR8pRiLK1dMUBN4g7tsQqJ31VEyBY61WpxaESNhLcuocpbzxSzAFZENZNRUVERk1Rm2sSoMKX9Jhy",
  "key20": "2TpmF2BEBoBWUf8LAhfL8QfE43KD1qCn9xWhDeWbHzVYXL5Vf1Vq8y1a2sQMvYxc1M6XgT6pV5M3qQ3NZPg8C1z5",
  "key21": "THFHT9f3SpNPSP6RzArPjQxNEDGN99CWj5DdjhxtgiFQ3jij1y3GFtXKqJsAzeELmCSvfhhyF7AF4x3bp9GJiCt",
  "key22": "3AL4haRTVuLGxKq3P7Jj6FLemmXLMP4LpgjHALAuhaS9ewvvBPR6DJDKqaErq6Z16qVvzEX2hkK46fGYFKo6Ac69",
  "key23": "2Xrt4AZ6cuWk4Ymgc2961rHteWUypiVDyN9sAGNx5eUAveAsV7dmmVFBic66o8yqnqejpo1QQvrutPJELXHp4nA9",
  "key24": "3S6dhZsPPo7pEWCNeWT2SmVGrDyWA6GdNM3ZFbjbmQDbkBgBLKmRbA2F6fhobTeXXdm7AHqdaVtpSVUk6MRFYAYp",
  "key25": "3YdAVAKGzEACFNeDYnBithg5iSFrHnf7bBcPyd6pxzgZZkA4afxK1BfXN7RVDN8oJMS9m9z6xunnriSHybX8JSxg",
  "key26": "2he5oELZYKmTGsHZ4gHcsPNAcF5HVXAW2udtYfc5sbw8zc7VRrx2ZK1ASbGvqVktUkjBttaCQW65ZLsyJeFrr3aZ",
  "key27": "5TEhrSyCrziE7WYXm8G51HUG68cJDR7utsBUg6x533ToMYwAnQcecxD98aMgJUE5h7B6qxqXL6uFzK3kp6kVhMvE",
  "key28": "6iK1D5T3YveknwmdJepboRrcxGGCY2wVGe28jjWRa4PTK5wrTHHQzEf87ymuQC9aLmGt2nxumiR1HrCx9YaFQFp",
  "key29": "29x1pgBUP79N6UnHCuSZazosZAgW6ztyFNCHXuf5SbqHSdMisKSJhstR2c8Egyc1FPBapT9Ho5ib4MNkiSzqSeKR",
  "key30": "61vFJG3WzNqNGBu7ahHediz4v2ErWnQcL5aQvc5GX3kvWcT8scwimHSpbgik5Tr1DrA9RfHsS9gpmaC5yqNS6QZi",
  "key31": "ycv4FKJ2i7G1pUSDGpenUEMgh79xf3q9WYDfzndoAcMYF76eF8wKwMn61MYRMzTxpHALunDrS63uuZv4n3Gysac",
  "key32": "3Ewf8T8UoywFoFTgfp4T2PxHExs2HfmsR6chXCtLWgzsrJrWJpYv4LrgRsnGt6ftMY8P7ok947V7UncQACzhhMNP",
  "key33": "3J4vADK3XptgFL9WZixd4ChHxZNLUPkh1BFjfrsYq1KWimxRGrkHfoaixjBqi89DsrEEifrXwvQdq7x2DNTtPnk8",
  "key34": "2ntn4kBfxGhrzBwsexb1joi2upwptcNUfYMJNLGq1HKaDYxg5tZZMPxa8qpDQPy6WDLZeJqwwW9z1oUsRPdXA7JB",
  "key35": "5ZwitZauqx7wjSDN3y9HAZHHWoAPjkWdACLfoDSLYwyFGzRMwCqVqVFa8hEsMU5i88QcNK8E9CQm7HezpyYEsVtc",
  "key36": "2sPMfAhxdjaA9UvLmq8pQkDyEjeq3xUnBM3up5eisKST75c2kthLkQoq6MYvBkZtjLkjmDyv3swbffQMAuGnJXKL",
  "key37": "2Jx7Gd8cmrwKDteLYqS9PFNHsUUAMAD98YpUFdmysGPj4thvBviWUyRcFyDXHJpHbtKfemyuVYfNKtMBSxU2reP8",
  "key38": "66nHzQQQb9pSaqJiSpEidQKhCiQcPoRUBYBjj6k3Gu3KbdxoCJtfYhrqvft6LNdYexvb2mYV1yH9XyzingqTxGsq"
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
