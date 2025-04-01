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
    "4u8YbRaSmMHsV99r4kAMbJhattet9NMcSqbHnzkzwK2j8CaydGgHFExA5mDxLAMbhXPSugQkk5e5cjwoGG1i45Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pj227EkG7xbkBudVfAy4NTyW439QscjuCoe3kttECNzh18J2uwLF6mMaFZH252JdEWYByNd3ZDKhpXYErq5CrzF",
  "key1": "5DDYYyvzGsuYZQu44vFwRQV598RqFWHwpGQt5mzxS7SWKu4jdSyJR3pbSg9RrwLFmepmEg2JvE4JWPcr49TmdTSJ",
  "key2": "4VeF2pMSqbfeY6iAxtULUWxXn6KUEjboMHMzBhNUU4Wx7F9crzhn3qTmgBTXgCrLEu22NoVYXuwTSkanfxNizvni",
  "key3": "5e8xwno7em8y3RZfuj4nkMS6oUbR97yyixMi3Ma1CBzsgFWkQ4SDHy3XN5yZXeq3RG5Qn5qSfeXexegg6Pibo6Ug",
  "key4": "4EKHFHpC2fG8LkQdvAV5k7kT6CqDjy8j9AioypbXUofStppmtpQCX65oBBkht2R7NBdQvHwjgbiMSHoLQa6B7scp",
  "key5": "4sAwK6cqAVS924hb3BN5uQk89rTzfYfbPYtCm8DwbpjXRepLoHgbVCrVTG9SZ2xmwbEb3vzK4pgmnQdeJ2TQeDoe",
  "key6": "34a236RskGhX9gBYLBEbo1HgT7Rkj6gu4e3GQR7hn7UFVQV38zgpp2RyjLCWm5mFWg7TTku1hw7xv6HgT7d3cz32",
  "key7": "3r5HuoJnCF9cKoDaBzSkjHxY3j6PEB6sr4ww7f4TBvRgUV6w2ptkudu2cxnc7UYMdDdwwQyXmh93LgKt7SqTzRZZ",
  "key8": "4s67LW5QE3fMbg2XweyMotENCkLh6bB8aaBjNC26E4TtzGAcmZPNkgUZS38jqBh1uzMayU5ccQzMaK8igZbm94Ea",
  "key9": "2myXyLvwZA1PECFzLrYnNa5tWo7G7LRZ5Mwbp5XHcU4JYTpwXwSTsWzkMmAoY3Ye48EyFEc7X9uMV9YsfquK3m8s",
  "key10": "5R7eZNgaxf7EseviHBwnfnkgVAf9x4dKFFvve5gsrCZ5qu5P7wSEp7VngEmFRPUTyeZgbqbctttEV64M1YbdQVL7",
  "key11": "4qG9CNHPnVsgNRXsgZMb1otXEx8QfnWVQLykBLVpdsERrMPiu1GW4mYvJLbh8CKes2mT1w5fhqFhizU4GcU7FDsk",
  "key12": "3uLrfCdaL2zSLdSr3mJ1JnqkppWMCAvM5TXRJPNhYZ3shmzcA4yQx1ZZ7yfgfhx19UTH1cXP7JumugeVVt48bkX",
  "key13": "5yr8hoQc5H7cjpNApgMTZW88QV4NKHURa7KRHx5axdf3SdQTFsK1tEPZ4hEXo1WJqPeXnJ65hLWi6MFjTdK4hEi9",
  "key14": "29eNCoGP3Wct3L2DDtA4Guau9hbAf7FmsHNC1X2CwFLUqn9shMefSUDTxyuqzwQS3zPumgUpszbCFwQu4f1BK2tD",
  "key15": "5jf791FuRYmvJHRBRzmTn8BWkVmaQJZuk2pbEpMXKuDCAufBmwTDgPxcohH2Lg7CyKC1xVgpBW8s5yqGZpYnXmSh",
  "key16": "5m1hkpgir9726Na6SJirfRtmqVMfXATrQPC1tH8kZHuCjEQpSpm1iVsAXEpQTsK6zZkvuAGbxKUeU4LDQ7tukkeJ",
  "key17": "4pfgLo1s6kipp4Pv14VfC3SYZgm1Uit6ArWvmBCweqAQUY42Hs2x8EZxrJtppNimSuzq2RN5UFU6Z1aRNSv5JdYA",
  "key18": "4V42A2jKx2MpocG6kvRWbZSJ4nfUxpxTeraotVbYEMpdpvusygpSu2KvkNoLbVg2UdfFLQ477RCXbBU4SJhWYAAX",
  "key19": "3NS3ssiwC7C7mkR2rBfKtchQRRD3N5eFxEBSCFJhA9oZDqKjxbQMuHqTK2FxJg17BPW238gsEeJio2RWpB7Pzeho",
  "key20": "4DHPhkwL3xsHNNT9TicPQhfY48fB9geyqVez8ki2QmL96ZPKDVgFZ7QgxcEWhGNQ9bc4TnUsp18Qf5FPyLV4wo9s",
  "key21": "4tREWhbSCVp1Y1hTdNCkdL6RwzXwt2TPyKuEa5PRdwAAgT8GCuRNBfaj8JUhGC5iG7DjzyjzQGpGEmeycJBuAzVe",
  "key22": "62pTQ9C556Bdx2MrYk5jTKY9xLHvU319Fmy5cGgjaqYAGGHJLnjTz2UKYk6T1CC6UHvgyPKxghGYE9po5rhMHPWi",
  "key23": "264KUVaLFRaGjGiY3VqU81gRpKMF1GaDPvFn8wwsiUCrHfD6ihsA4TBnMdkA6e7Lv7crHSnaQwCUBjWozoPPoKtT",
  "key24": "3EzmKcmdC7AksaBcWAcE91rzDaAttGRnyzw5s3vL39qqCx7aN9dAJ1fnPQ1enjHvaE88Dc1zwHKDXxySiwsuS1wX",
  "key25": "KRq6LEfR15t38mcdkGSPFdgBKtb3rvf5M9PscYZVa22PJBtbHbRfVb2zkixVta6ckCQpLqhk9BeXrTx6wVNuCwL",
  "key26": "3iXfSoK3PTykQfVHJq2b6uDnSsasCxbjkVGtkAjutFtJYvBTHS7y4k5LdPAg9zvSprzC4W9nJMqzt4qFefqM22Gt",
  "key27": "4DhpHmM3QMUgngfQDAVnkZzZ1qfmnFd2gokp4ADHWZJETW4763DqD2zbpXhqq6K8UQrw8sudxtVg9j1tCMogkFVz",
  "key28": "KvGgPXJ9U1GgmE9GBM58XmBJaMqkFKaa381y4p4M2B9P62CtbTLaEqJsYc3RMbHA4nXxtqBPD2HbCJND5GHMGvt",
  "key29": "25tFFtubULsF325qmbv4RUozPfUcremTAVTjmJ8L9zUNUtQMXs9nbwenvNt64Nj4YUDhMBy6SzGVoXoQ3UYJ6f4s",
  "key30": "5w8VZjiMKYUCn5hkpL3zQSYnRAwDA6F5qC7wC2Fr4uUUkh3FtU7aXQPVjcZzZ2KJ1Me2H9k9jSUBJ8mxprEyVvcy",
  "key31": "2PrhDtb19HEkiat5WJvT1jFVHKcwsbtVGHDas2AgWJvV3CMfhCGKRsHnvU2yndRZwwfC3n3JYHoT6YQfdSR2dofv",
  "key32": "5SYuVUwUbTrJ7rNt41UNLphVfjTFZc9cez8TRxb61gt5SDzFR4EjG6oxP1sVy5E3o9dZfwCuse9PWeL24wDHYCMr",
  "key33": "22A9xoHxbQXcPbxe8R1Yae1xfhErCbYtCUVGXTUdX5EVVyeZ1T4Nprv9z2Bbgj9Pignqe5ZnpcsxoEdkSQxjHjkJ",
  "key34": "2sRbcTGAcgWmRUuUAhxDYnVpDMmgzZSX1SJB6N52LsPzDGT2nCKeXg2q1iizDsX5bG2B692WkxhGwYXTFZ77x3BG",
  "key35": "2bLjNMNjVNtbNsMWX4w7b3q3L4thk9ggFLA6muN9ghQuZ4zZnob6EsMoPSLzQmmF7dhfoEsND1ySCSdmsvUuwEwi",
  "key36": "5CXdjd7B9DnkBTaFZcMBQS73f1LCKYDDwaV56Qp4DNpgQqRn5zAbriKGf6n9yjFThMdkbLArNbyxGLeQxXQrcvBH",
  "key37": "oijYLr8tDqEsz1qT92bfFQpLsX7XEX5HcMX6vCgKQt8gSGrKvmP7Atr4RgYMdmJffcw7kaey9RceiS3QrBF6s6B",
  "key38": "BohrR5wPwRfoUKeS6qmzSJkK3FTMHeuDaSyStrDqRRLxmQNYAk2kRNjAzshHzdcnQiVmvzsMGuVrLBK4LYqk9eu",
  "key39": "3HAtt9WHG5ZEhyiyzZKJ87HC3SNQSbrY7PnEqgBze62miA13U8P6YJaUE5NGoNzhWXLGR9EHDdB2PCvP3k54wkRq",
  "key40": "Ak4LLoy3HhjTDzSN8T9gj3PPpEKuJqpQXDmyfQKkvhQXViyxuGi4prrV1AXraXjguXWnuShvSacoCqSq538pC4E",
  "key41": "3MsmdazBwo2SB5qhLakEoNeVNxAzXtxRFZwuDrka6BESMrNENKSoNPbxm8KnJQFNwbjsM4tZMEvpMd3TQywDvG5n",
  "key42": "4XvviM7vRs9LrCAWTazHXgfzGfU99NLfT7YxBd34Z4piuEuDiJWsKvMrark3ZY8KVPTvzG5obdbnEyM4KwgUtJ9j",
  "key43": "5jjNdvdsLno598vhhaAiE6aRw11mZ5T3nagiLvQVD5445i9dmWkLaJhYnVs9CZnYhTmam3Z1KdZM7Awh6gqxR6hZ",
  "key44": "kgarees4xEScivxvU9pMNekr4Sa9v1xDvqGAqDDgEXUZbgdp2HM6VrbYqexd4htnKB57eXpVs6oHutRZeptqje9",
  "key45": "AAvHCvivJdTFDRdiVsJtoCK7EV1UAVG3C9WhECtwdwxe4XZCXdz4KtnG9MDrD7VDoqxN1mGc2BqebK8HRtdWuH7"
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
