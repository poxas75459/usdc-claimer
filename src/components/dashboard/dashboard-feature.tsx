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
    "3mgC29cyfEzP3ibey6KXY7ekhZtmM7ZyY7PUdYAqQzRR1cgP2GasBSDSkr3Edj5N847RerFSA83yj2k4UazD2UQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AnHrwMs7VLUw5QZ5K4TG8fCVnWGZPSbzqF1H5UdtXb8HqUQEae2zJ5QJZcsJYjzuFQtd1GTTaXxK7465eDXcHRv",
  "key1": "GJ24tmCvzZG84Hz3pskfH8bGLLs1xGpUVq6ToLyPPqWDfFAxES7EmKc6iUwGwjo8znFNMMnYGCAQrVSXsQXeaKQ",
  "key2": "5n1nfLUJ9Josgcp4gR9t39tW3YN4RamBnAtd6fiCTj25EqnkKv7gEydcoNrdnCZWMMZ263CDy5SwehiUZt7HsmEd",
  "key3": "5bSxQFH9wjrqKZiWesuvuJWzxYXSLhwHVcAuZY2GQgtXs7EB4DHYQz6Y7vVfCsNTmJxpECABuvBy3mea2RwDRUVw",
  "key4": "232N89SSQSTcQE5y5vHSF8PSg3EMbn8UXw1fdBCA8ngQax3SFqc6CaLUzxSoop7X9AAU4BuX4y51MPwqUPJaP9zK",
  "key5": "4p9avX64zqcu2q1pBsbB7CC9xcR2etcdeuGoh1LchiLJEL2d9GQHxH19gAJTF7RBNKeyShhkzioazsyGzCYnDexw",
  "key6": "3RyJ3LyjTE653ab8iZkZ7L2SAPnnB3BanypfFnKKXfqRDDnHEtxqKRih3MfLPZK2Xd9J2i1YUnoF6YFXkFGJ4dHd",
  "key7": "2dwg8no5N8t3DfCmNs7c6JEp9HXFMA9sa2atmRMLxBs41JbmogmxhwtZQXJDBUFcWTfWj71kdT4zo96EvJcDHVoU",
  "key8": "3P8qVxRHuuKsJgAbT3a2t5siPApXncCZghizSYwvByKSee674rz8Nd7iG6S9FSxef5u8MZrBNVLNNDQsGxeqzBVv",
  "key9": "2KvwVnDy8N16A282yd7QraszhZNQyK6TXUxWU1WWixPy2DAq5VqjDETg5hjUnzHZ2KgNE627MvG6Sf2Yy2wKPiKD",
  "key10": "36BuqPBRsFp5v3octAqWfHQVjECwfGCHHrzhNsxdt2ji9MTb9sQxNVpzduwta743Q7VAQjRY9VvdoNGocHKh4G7j",
  "key11": "45vsm9n7EKTb9YqPniU9Suego6XyLjmp5gPcJ6qchH6u9B7csqr9BiFDb4T2tN7Zt11T62r8deG8YFyqDmHPANkh",
  "key12": "VMaHujuQ3CK8dyPiU3jXCv8yCc1RytANdBG5Fzg7Zca8uJAuTjESxyLLfyt7WoLeRbmMqWhh3rW3Yx2Rk9jpLVe",
  "key13": "3zKd2dwmvF77BnioSDS5LLCr5Vkdi6zqYUAKpSGTLS9qNDXT2R96BVmq4MrkAYnNbvdzTrxcsGffyfQZCnRAJ7xJ",
  "key14": "466oLVsoQT3NUwX1qaRjKdseRwZZEypHvXhSt93TpRbbTHySuhkTW6LZKjhtEVm8uXiLNEgV3NoExKiiYs6CMMFB",
  "key15": "Nk67K9qJy4aHgJWZ5zGvdHzbsd9UK3JXLSi5VFUBdMkiouU2PgcUfT3PPZvkJ65uZBkHoBXzYuW5rVyAByohHNS",
  "key16": "25cx4bn9P8MU3YqqJfmyDbUkCAQhvShVHbRmqbw55SWFfMkRv6m47zqWop3pAbwevZwxvqqLs1CRmqtWM6SyiVEa",
  "key17": "QdZ2uCuqSrKHbardmoFnyMbWrYRia4YHRdbyu6ugMy6c1WcHhRCXhBVyg9kfUGHytzCvauAS9LgEC3X7JbGbkts",
  "key18": "5sJLBFk5EKtoPLUbgMCWtBSSKxUwm1S6pLU6SjsphKpm9RuybY299CX5kj9ZCNQDTGMEfRuAiuxuiqWqWbXx8Jig",
  "key19": "5LKaVQSS5Ud44WyYq7uh3XViDHhWggo1UYKvNbqphoH4bb97HicM9cCYwxD6uUpwwVjWpyCELi7vVMDAAnRght5W",
  "key20": "3PNmyo7kG6S54EzkWGqjwfZ9BmA1JeyeAJerXe9VHwqXHAqJAJoTHtHMJabmP3QLRp8dynzmKb35DuF7QY1zR5Y4",
  "key21": "2s8tp332ZkADgaPH2FEe9oU5HHfH4cmMcHsCrffPZWBd61pJrFYyWCeVoXEMywEFrDhaPpfMRhswaR8d7sMy516T",
  "key22": "3N39SEUgrTTKCLzEJ2sm5rdnYHidGbUjoJ34dfwuKnmfeW4Fhieo7hvZKLXxNWdwMH99nFbJx23x2uVh8HwRVBe9",
  "key23": "2EhBrfzi8gmC9maHcH1Kv8u93Q23n8yz9Ge5eF5FarVg3BdaRt3y3BXoqwvt6it9QR6YjmZG1XaiaExYRa3VyPLU",
  "key24": "61UUGtbod7pSSaqwTX2iqrpxGgmpoEQxrTdtkyidKXkEamt5EwXDbPi3KycK1MmETenyt2soutRJhQcwR5CQzCVj",
  "key25": "3aCVnLJzyFsRsWEAoXDZGGxFET9TUZoYpUoig4n1JvfH4CE27CMs2RrMGm5j8FC3VUZpZysJScTtWXPTcLCqDmv9",
  "key26": "5xdTqwXkT7ckiq9C75pnpeMxfnua4mp8fE1YzHV5AXqQQTM47pnRAJLwYFWSUH48wY6r7go2KeMWbYdvyoqLabm9",
  "key27": "5Q7THqx2X4kXvvMUgggUM8ErPKVo5JAibCYEcifsYzAhiAcXuYrRSwaoymN6wwdyUV4enx6zZ9fvyhKPm66s5PXJ",
  "key28": "6FP9sJKTqmURJgqCZhmGhdJRe7Axgb6S5FR7eRqkeXCcNL9v9P3sb3iNp1khvhVnieCRsZjru34MAv1H7p1TuEX",
  "key29": "2qYRFkkzxUWB5KZahaShcFHkWn3rpYDq23RqWRfDzQ4FxxerCRcuDmU2HJZXeLFu5qSkGcZJDM6Z4mkbQHRYTJva",
  "key30": "2cA9bWtjkwJ3JJWsN5B7B1djApJcGGhiW4FLGsmkjtYSyEhDSQ9hcgHJKryxH7QYHpf3LvRmN9G31YuFV6dhVusD",
  "key31": "C3mW3fUXBJnCX4yZHgktAZDTjXQVoejX4uvFWWFkdFExwgvHVi4njapgHTM9TjfNN7zczdsvD8bUq6GvY5Gijv8",
  "key32": "jN5vXcg4UU1TRhbZRuSFp62nwvAd15XHmKaJ4nngP8LHwaeGnkKGPJGSMxvnGf3FWmCVHNh27wSmz9xUP6z2Gxe",
  "key33": "3DThkrWUymE4cRqUBKwtc2bTzrrwSwP6SUYoY8YqPESsSHjpkTmz8W6E7urJsvebjrVykLGyzGR8rV32GQdtBYAX",
  "key34": "5fmH7EMHjpS5DwTCfkHxkWD1DA9ajMqWVDEjByndKrpignyLAkXUZVNuoV28YuYFmJHD8VeFGonEKvywhrwDgeih",
  "key35": "4NLPatzQ9jmEHakGx1JkB9G1manLauSr7uHXfdCt8ttTFSXgd5CFKWW8FczVfyLZW6VPNWNkjAxrkWLuDJ6ogdJu",
  "key36": "KUjjETSdiYHPmtduKWS877unmuvJ9Nip16hJWdQ2zWhK9WnmMXAEWGDxdLZeGdy774C3vhRrTu2w6RX72KV8pm6",
  "key37": "3tYGUVt1okec4BP9xvK72Y8Rk2kjk8N3bHRbFpf78ULZbWXrDNa8fT6JyNV7YEpGLFJadAoKnParezqME56ty7xX",
  "key38": "5QgnXBzfmfCFLJtB2gqdVbxJpiebKGnjkXWbAjTanGftaZPT1zdniSLZhadenrHpjTFehdneYkp3ixvurkWL6SpP",
  "key39": "4V7xsmyZXdo5XKaYZtFgw2fex1RP31ZjoQuWb4sGjLEsXfqFYatxzbbhGt6895fyYk24M4eGZDeBLRje26jYH3Pv"
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
