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
    "3ccbetsqedjvyDtRCrEvK6D7vStLGAFedZJX66oioU14vsZed4s7WGzT9Q82RX6whgiZEGATKew3ReSxbExb7w1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62o4sGUPpCXHk6wAS1muGfcNjnvrE1tJwpwrCfPZC33WVk7xfg1NY8niuTRvoU3gtqDkPNiKv2FqppXkj2kUAyQX",
  "key1": "ZtZzzUz53DpDgsPT7aYYt43EmXJLTExXazEGKZNfH7m5WrQErhZpwuySJJtu5nKkNbHgnr6qmBoqw6qsUjPXK7e",
  "key2": "2vsAtSgaf6ApZgnkC8QnEBcDh7e8nwqpNPs5qnLWZXdnJAy8n2SN68aymuv2CpG5Stj3SwwG71am5tMiPiqJrnP2",
  "key3": "2Lc1AfkiBTXmL5Lv666SN7zYuyx1aFid8YyREdsGJHQx1u5VSnnSTpJvKVcPxoxW5cqeVJuMgdweJQzowRsT1qxG",
  "key4": "6K8CmVDBwGvQafYnyi5172DAcZXUwDw9zsHSgXhBjwAogexBNZhYnfeyVxFS2XmaweXU1Wnat6tzpMcP7Yboe89",
  "key5": "563RnauaNreK6f3vzd3ufwYMfXy2gusNewdyTJS8Eq6mgSiC3iLVndzdQU9fWFgDt32VnbPCJBdPXspKofJ2PniW",
  "key6": "eZ6ULuxo7PvLbZUwuuZaSuiUGdwRbqq8JhvvqkikWftLW4Q2ctTBYjfmYXizLLRxDUWU84p6NPb1NvdagkyffS1",
  "key7": "4AS1seat4c96DMnNYwKg6uLbm5W3ipcJnKDQ8cy4B3LZJjCcTk9GFpZfxKuE3YcBSYoYFgY8kESVMfmUHQhzqDw8",
  "key8": "5hS9BUtMwf5mbp4cf6W9nE7SaZtA1zetY9ec1tk9Fnh7FMwQ1FE8H9YzZS6LB7Dbfjd6oLbXHfd429VH8SmeXLbn",
  "key9": "McTStfLnYNG4xnTuZhc4berj1QsHcYC6WZgU4pRrBzgrbhdPSY8vS3uQT7ZhewCCpqF6CmLmjr58ytd2wNs6qCR",
  "key10": "5MbZ1X5qtRvoNAUpaDPMzkcndswd53fcSc4KihLPGVrPp736NUiNh4hPziazyDzKy6f165GwtUmJeqU7jw1VQSkU",
  "key11": "2TsKwfQE6ry6FnzTxZAAq3vbcNeZesxFcPxDacyYYEnP2BsapSEByMQYvUueeHmEHX1vQAD5rz7y8qzDXgD7GLUh",
  "key12": "2DGvfxjJqwr3WkEhGkwHXYDn2gs17ymjD7M1wcePtuds2baTFPzzXhTkyyaAzVwboewUNXQerW2HNNYheTTUPnKc",
  "key13": "3CuSSX1Uy24aXY4ntjPDzcvqG2VJ4cwcD7CuLC1C2j6v4nEjEG9G2fnTfUZVX3Gqdjydetvh4vxVQNkaUXGTRbJA",
  "key14": "5ZKEa5VjmLAvSs2GFzNzHGmQSW4ZcHe5PZZw6atXd4udA6PmfokN6DfhZmvci7sc1piFNQz9vL16bqJeieNYTQeK",
  "key15": "2quD9kXXaAA5VwWfgCtNyjByL4PBD4QQcMnz78jfTi6PEtAKD6WAa4jnG9McDnVy6vMHgiGwrDcBwwA7Y69ri9Pp",
  "key16": "2YkvEYzQEKdKLMkU7EKvdq8b3PzyyXqBcLtopNe4i1HHpranzjYuAnBCAKSZvubgEtr6PYJb1231PNV2KHbf6JiY",
  "key17": "2dCweogU2bPCyPqwpDfesPkVMBMhVsZUFgXpXP7AyfCfdQ3VRewbVRTNeS6CN2hSpYukukM9dxCKEuZiijcK5FJa",
  "key18": "4pMxhHQf1T4WsN6Tsfxf5TVHnP8peCT5g4CV6RVUpVqaYWuB9SuFmuJ3AA18ToQbKriaQLqRFb4u6g6SAGcUBNBx",
  "key19": "4rPAKxV7oUYpYkfPK5TJjDUXDwPYSd7e8r3J4BHaS4TDMpN17FhjKr4X6dXjkhMvjYDkJ3uTL9twsdLQ1Ze7dSgK",
  "key20": "4ciHhxApseY2d2oGhC4jeQ8kQccbsKSMBWFHMTHnZveReX6EDVJy2riRZnkXNLRpmDcJgHf3p765iif7TPkG23e7",
  "key21": "3aL6qGn6pegXsyoGUmSz4eYoJHwko52h8w93rP8PL7DUkrgbFYkjxfJB22WoCQfAnUBKZ7pYPU5vAQxc4tiYeqD6",
  "key22": "hra477Mku1MEFH3N2dtFzxHQNGrXqcfYxrCboxUtn4JGum58yowX96fziqWfnGrfPtS8nNcFcyE2phdDPzb6hrA",
  "key23": "2r54rSZ6mKpbtdnmTkiaRoEZB7YhKC4xyCwsRHdd2EicQYT8ReuspvJvBdn93U2n1Tuby215TbCifXff97MaaX28",
  "key24": "45g9cismiYMWb3E18xaFw2Re3G1PYAs5UbLKrdDv9Uz4h2nVCjGzXeS9SabaD4zuarmYjWE9LeTsupwm2rPVb5c",
  "key25": "3ENb1ABn7EAtRn3bCv9fUNU9j42wxNJP82X8qeVHUcvDUXP9V83L5Qmxgsp4pCQ7yNtYgcqBk7vPzt3vEbaytvAw",
  "key26": "2AkmLgvmVdTqaSMpTQPBA7qXjokxfpJzJgX3n4UsrEWBESnadL81vJ7Yy3eDHCxNwQbSbxnbzcC6SmFDRUZLc12o",
  "key27": "3Yh5N4uv1KVeAEFv97Eiiy5oBPvcvyMvdWNqihcBZHRE2YebDdLsjzgizK762sqAgKWB7xpWiyWMgdMn621aKuUP",
  "key28": "5jYFZu5iNoEtwffLzmF3GVT9Z9BsjXoZoYyh2wtzEFdcrrf8TMKqfyxkueQJCS28A18RpMDAj4wBN7Xjy5aLPCAw",
  "key29": "268zPkG2brmFKJwcBpJ9i2kALr9JHQLgoNuyjs4f3shNciRAtoYk6mDRBPhs1BGxJx6514QEmKkXqmYpgVWHjKu7",
  "key30": "3P4EJpAzAaYSvRf9YwkJazCUrfwfX44W8QEquSdrhuDTfQA1Bxiin5sSKScUgSUNZPkY6fbViHGbHs9iQSCSVgDF",
  "key31": "2FYh4hhCBq55TiDUZ7787shCzgQ5EhFXphW5RVsiLPFUdmZ7xYjTDgor2mK5S9kHdE1v4fg47TFR3D2k4z8HpZGi",
  "key32": "2m24VJMP5dmqFv7NV1L2dQ6T4U1spGNedM3fUS46VHRrfi1nczXKRKGqLhav6Uh2grt5mDvaVWGnc4drvWXEA5VB",
  "key33": "3mW1jwwq1wbeNY7eTpnercgcpdut9DH9WatXQshyKpFh9kQRrDRH1XBBU7vndMMPjfAGsHJvgeqM2VqFQmFKLTyJ",
  "key34": "5Wy5uEypYuKYdcrgdnM46832LcL5ReprRi4hVuFfD1U3DXBqodbVpqoTX8Dn2HDXmEH5rt3qK93u6PPjWH6g1Hay",
  "key35": "4ZHznsEH8EyhMZQCoZ9qSAwCz1UpK34TWL5kkzm86tt1vAKeCL22au9zVYUcit8HFHqwHJiqfziBD5revdK4RmGD",
  "key36": "3oqrWxpHJ43bymrRPtX17uLL81zn9g3rJFqYE9ZZFv3VKADZ6yg7PkEHa6igrDf9E4SpNX5DDa9xkSgKQvH97C4y",
  "key37": "3qAWzvJ8eb82PzJy8d4FRrfM1oxumW24ByAhpqowjiPbaTTAr1DnPCCUSCioZhPTnWRZMMRcrTd1w6nJGEv7pGif",
  "key38": "3J3KHc6EJi9xmDdiCm54a7ADay7cvxbbQF8Qv7UC9dcP4w2aAQ1DX4D1sGMtGPhrxgq4Pjv7WqnVtc4PcPkHP29s",
  "key39": "3iQeNcRPzpZR9QjyxJFmodYiCbpLNcxh2jxgxurM6VMSjDzqad8oxp2CZCgNwu76obtiKD1GSjj3dePafyRZgQxL",
  "key40": "LRUgtuWATRLR7L6FMkuXHn2FCUawZbWpX4ajWVKhd775ZrrKnJyaZJkuqCRUHNjCQrFtiJu4j5EJ3StTSzvg4d5",
  "key41": "4cypWLv4izQ5J81PhDFsmp4kTxNRd5er2LGxNvDmc8HhU62qqKFuiYrqRmyoGFgJFJp282Y4nboLqAYvH9HWHVRF",
  "key42": "24fun7S679kmpgxvHLawnTXMD3YY8RBLovbn5GcviRoPE29TDXKKWepm9Et6TirVrpK8mbEu8ZmYdwFXcr6Y4fwa",
  "key43": "41jUz3D9VHJuDLnw4MjUq4MhSTDKjqwejz9s255juxBG9E2ReEC9gJscY56uxMeYbr5Ybqp193WodioagYtjCF9S"
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
