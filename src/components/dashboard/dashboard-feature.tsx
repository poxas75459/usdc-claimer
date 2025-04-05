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
    "28Wz5ZLYyShji1U6CgRQhmptmqXyKrtXqC4DmKHYYVfjopZjSMq5Xqo7445AjRk6Usv2P3Sw5jNPhZtJJgNd6KKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pxxp7kxcqQYREhwPS7DJY47hKuVVtrwu19A1QoaVHkPWAPkXZrV8ZHP41nWf4aSt41toqybRro5ijYNQiqmviMf",
  "key1": "4wPpDzdWNznyaV4teZhpLYAeiUyYfaHrEfXGwmTmmYC14yEMUgkHnxbqrnumkzCrkWqzHAGDY7dfRwxLWTvsMLj7",
  "key2": "4oQ3ogFK7QdfXMzKiPsPHvvVNQn5xtgN36PsVVffmM3zgB38yUwy9h797wyCFXGtnDkhkL2PfKfuEnDt4NHASSrs",
  "key3": "i9FWRdUZ9CeMFgc7CuP84Qj27yoyrxVLvYzrHVRxpHVoE2cxUoZQdRFjjWQQRp6jox2m4UPNxb8MkTW1M3ELyMu",
  "key4": "3MmcoesNqJYVGqFEfTpTbxVzw76SJM8Wb3wvJqZzhrRvyDCYxW8jT6CMESBwdS1aNpuZSMFWcDAdHgDJsm1T1Wxy",
  "key5": "gRBgRhh676b6bBfVvZhiZvCJn9H8pDHFSYgT3iCQBWGBDQoqhkDyBupPSXGdfZNrzVDaCwRUEax64vFtK2zQzDD",
  "key6": "gF3kg3NMsmM6V7XR4uNk73zbpdyUfxBRe5fbrwqWbZywtSTNwnt2Qz73s8LKtuFpiHbBf7VE8XN8eLURtUpQckq",
  "key7": "2cZZgm4jk474wz6cXGGWXc3smQ5NMpomA1UJSrLWWRQZaSadLrqtRnLJwGLYGJ7bMrAeUJMTM2ZFdLqyt6xcqqzC",
  "key8": "4UZc6mMj15fpHTiav1z4N7xB4AE3QqPz3FrPidWhee45kRK8CW72mPG6sx8SUiHj6FLmWu6n9PzepnYjmpFshrZ4",
  "key9": "PGCqWvNwfyTjEudCqAzTEnDp5Zw4g8qtMh83hdeuTZrxqWA1r6bcVku252kKyajdDmhuMZt6UqF6PMTRRNa3i3j",
  "key10": "TFFKkHEMBZd2WNp2F6DTV3YEvpQZi3cuZcy2R7RuNCzjQsmiEX9TvuZ5WHosR6bPbkQ2oyU3gSjm8wWcSVyDwLL",
  "key11": "4m5aqBopF7fxRmV2FU6wGUwQGhDEQFcyR5BvYBpaomDJFtyuARi6nDR7Nb3NtXXWexbv8KhE8RBGD9QPqTJQ78Yy",
  "key12": "cERT4daWW3Qyj6wpyHdnhpmrWYChFTi7adWjcHBAJrUdMuvqNsyJN8TLwWhpVs8CMQPkRH9rGG4bpd3RHj7ckfv",
  "key13": "669DsZAtkKT8QAKjLGHpmk5SG95umUfyXyg4dUNtfMGdnNuvWFBVZDnxkoxJxJ38wiS5X6xgyBBrHSyf6NzXNXw5",
  "key14": "YNhpdcuHkVaakcKATtXGowQwTeAnmrGrNu7ETQYbLkWNtb9JrTr37wn72eDAjiKqDHAnJuNAHJT5cEQHFEWEKh5",
  "key15": "2v61YGr43SjApp7VQTL499owT27Rfh6jTp4TECdxo7tphgCCCN6dn3Edbf3SvfXdzrgSRepTY7AHNcn9Xka3WmK7",
  "key16": "4aVyEQuM71593pBXNu7S5jR6rVpaiaXriu31EtcpJdDRtQgYWwLLpv6vFE69q7u3x1aveVUKjCPywemGyarXnra9",
  "key17": "4tsDXxpcga5A2dnH8wCDTHtodvKTr7RTZqkKCJjpqUNCsNzSuTEM3iDismagXqUQ9Qs3NzY8C2MQZm3MxLXUqjt",
  "key18": "snnBRqvgrZ1bdgkoM9inZjaFoX5DB9oDkdntM5jMpr3jVrf7zw6Z1o5C1LkTPKVVdKdN7XzT26DeZjeQfhkfe4W",
  "key19": "46hdJtRbAwA8TgE4qu9SBNtNGsWnJBp6UPp63PnWz5A1yAtdYePihMvduku3MNGUTehsrr249jdpWY9s4GC9soJE",
  "key20": "3corUWE3qX5fn3KXm38WawWddw3FUzqjAoJuU8nWbwTsKsTca9omrdnbeET8dF6Mi1FUCMh9wwA1AvT36acxNZuu",
  "key21": "y8FzKscQJu12i6iuNNNfp9y73hYzmMVkjZ5zewmPq8khJ2uky5S9Cn1jBNeMNEpfEQPJAnoKjSBoLoChJvyPA6U",
  "key22": "3Liain3cwZ6kZvpTk42JyK5LFqSYF562XHyh3vmGNBNBwbNkzhjwvLmiXd9JFaYWTmZkpzWJwKLAXm5DqkFJYJT1",
  "key23": "58QwKGqoQSQDuTVVUAMVdgfQLs9Jwf3vSzgNetn5NMPEB76cg1EL2MESJxXj1W2QYGiFNfd7WXPkoWQu2wFYFs9d",
  "key24": "473jkaiGAH6sERe3CbBsXLr9rF4ddsoV7wuawCkF7AaE4AHT2du3LCzRKYd7wdwW1G8U8woWywzzhX7BSrFVu6c3",
  "key25": "3MVz9bPfXguzabz1kyXbMAhRnZqZqnES2w6Fwih76rmWHJGfwPbGczBrV9ddzCUG2hfAP3xMJWFxwMJ29yMizYqk",
  "key26": "39fEweTD7ypvhC3zZnungxYQJQZzhaRuSJnX6uf4C3yBRr8kKLa9npcozUBXxjLDYm7mpEyEs77Gf3ogru9FFsnt",
  "key27": "65YyP1ot3HNQDXT9sAJnPEAvPuodWSz9cCsZVCGbq4k1EmXwobHMKF3SyG35XMkLMDy3u87fwKaZz9npskSRrnoh",
  "key28": "5o3RiSk5ehzvFzTsH6G92deKgrS8zfNBP1CenycUhTReyhaw8zUpMr61Qxxen15CFKKSowPVpz9f4tZRNUiU2zBL",
  "key29": "2poiwoat8sdChfs3jbGG52p3E5Pis7FfAzfGTBikCCYCUjLjVqgXEnS9tBaVhSMKHE1qkA7MzbseTrjj1w8NwUTp",
  "key30": "4QcEoLHTX5FyY5BBNrrJEnvX7YDo6PCNtZK3yY7yw3PTSWetznNrkQ8UegWqqvvfVyCg7i6ir6uyncS1UeY2uZye",
  "key31": "H9p7dKX99WGZuMVxyZzHaSNjqxFAdX8F5NV7qWgZdVf2MDDP4ypnpjp6wRe4wUyHJmaJKVtEYKpHUcFHCRxjEvP",
  "key32": "58Unud3z3j6vhbJ8Hes17qtsNiZ9zgBgVxdtyKivD3Bu46osYGfCK7x9Ry6a8t9ytEPBiG6cPKafK7EmG65N3ceM",
  "key33": "4uwetaGQ2YuTERkRJMyRfUFCdTvsb9vcCxQ8NPQdpZLLsspHbMexFt1ZQmuLXdaf9xnsdEKfQguCgJJgCVUC7a5M",
  "key34": "4dKvWuqK7zA2XUf1tJjA3U4R5oaJhge7Gno2ZCiawnt4y8LJxnEo3AfCW6pcERWpzgDFUFkqhEqNNpVxcGxDsFhe",
  "key35": "4Kh3PuWy8rmh2MSbCh7Q5NoRz5rbDvURkyoBxMh8sS7HzNQR31LosL4dupH9DcgLTTf4Kc7qB7yV1kfCmQVbPbmo",
  "key36": "2thfjirjWbcBApid4C48WaUHsj1ZWZ3E18RWgQ3KNJwtgLjUjdvFzysNhbnFJk3JNUkKdHEm8fPJNNwCAmsDztYg",
  "key37": "3cY2qfYhJV822f4u9q3D4zjjeaMumt6qXYHNY5emjkwNqK9jxsUuAgBZqSm1owPCPFkgrJWziJAnuvf5yCjzcEEi",
  "key38": "5QTNDyzXT2ku4jjUsjN8ng64Qk4eAZRJD4JawEAi6tWLLnGudVrmNvjQvTLebwHPoHVTB8otMGr3tGB8RSAXcZnS",
  "key39": "3qUcntbt22i8jMyxM2k9zLr3wk7swk5UBBDxDeyNwB3PHfpPABvAB1HzEjQX1ie8kQQHH15o5w5PkCKuSU9hJ1Zc"
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
