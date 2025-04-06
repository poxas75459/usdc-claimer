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
    "5sNzXpsQHMpBDppt7LHD5j6ErJqdwq1VWyDLzJWnLZjDWVhj1qDtJBxCFDkWa3zyjpLe58wyZTHteKKK5NyoHqGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65EKvea1FWSrpcrmQhnJ6SyX2hnEGEYonGLysPyUgBiTJ2GEnueoxB3iP6MWe2EcSdcifwrZUa1MbF6FecEDn81x",
  "key1": "uwZ1MPkD2NXHhKg66h2m4ZwRPYG15TLLkKxkCzPGb6U4YDg5HT7L4ReqY4NsWf5pkYndwYdZTvv2a6D6ZedVkpR",
  "key2": "CtuHUuWVSBkVZ2mZ3v1L9vYX24LqnoAMzWUheURYqs9mbH4LLXJFb6KEsCxgKcit51n9DqZMS3gG6L5B7M2hxC6",
  "key3": "2DN2aN9p3X3Xu19tqov1MTixxWDLd4rGEhERNx79ZEjoTSUfDiBHGie5gNRs3LffB4nPgW9NYgE5CMbKMGmsmLve",
  "key4": "2FbAJvGYQGj1WdpN7Sd1PgxBTQAMxmod146ogbzL35G6Lzio7oH3vaQBbNABk189ZeFvViVgtFrZeZBmbWmyQyX7",
  "key5": "4BUQg3kDY9q8ywoCpiTD7wsTCKRRfSwA15eFKRKHr7YphybgiNh4BDUEKH1bJtTGz54NqBSpjyC9A34xCbXhNmWM",
  "key6": "5pPyGgURWbRUfBpXVpGFa2P5xjNuFF1EgRMKjmDyiJGaGFU7SsRkGLy7fhSSKdhHXa2rTKDwqAhbW42tzoT67FKY",
  "key7": "xq5EtfBE1H7VuKWHKrmhNxyj7TAd9qaBvEJZCMT35yh4Pr6ovDiMGWqJZLMDqUCRfmJQrFZgcKXwbXm8tCirEn7",
  "key8": "4zKm2F76eaLKHxtfpzS9Bh89qypQXvVdrCqRu6Yip9p4pFDHUxw5Bs6Xsz5Cqq4mrCfRoBhgHyGuECqarsD9gsrq",
  "key9": "26B1D24LhYtT9TKq1hGT59GhTd5PNCkpe2Ya9FKiMp1zjxBr5Q6Vk2EUhLE7GNCDA3kdv1aKdF7VMjUrLuQebCcZ",
  "key10": "szx3fQ7r8B28aRmHGFe9i1KdjdcoaDLAonN2FwCLJzXKLRt5rv4MAVZ8hWdxgNDNCSERfd2CukzSc23EDPiaRjA",
  "key11": "qYEYmYXPt4MZRKUZLFpEg7ae8nQ11DAB4Efs5ixwCZQQRbuqUj4TVHJWdDtsdsZthEYEZ54X1e34gK7JKRQeR9x",
  "key12": "4VZVPna6WbN2qzyC9eSmo6zW5nknL6prMqNqvjq5n3GtLfetGhRDQ8UZMDRF8YtMTRoLA3aWxPXSGf4f2JPUSLx8",
  "key13": "3AougoMAbm2nVGSyHCrTK7DNhUSTcSPpMdRxUZUhxLWVU7XEevDXD8rgkBpgLszU4hx8jwngQsSuW25mgZzi84oH",
  "key14": "45RuxYeNjdQKMuFQgUjxuJZmpaCsKYtsuVAaRLJpTdQ1e8Nz62G1v1hQK2fnYMaP9sfht1p6q7Ecw9xk1ca1HCbT",
  "key15": "4Ce7e6X5E8mArFkuCusnN8s7khyXTdwseavkF6qEPKfD44VicwuaDxf1H189e3rTGuX8UrCc2GnYS2xM5tzTrV1E",
  "key16": "21H7sHjg5cNJ4X8RrYUXYT2Hn7z2Eeert9Xcvx1sRwZMmyKwwKX9beDDmjLaK4X22fSmcmWfdB2UgLXZkR29MhSb",
  "key17": "aBmVNZYuaVW4eiED17bFB3KVWFBQ7uq54K1FJ1Z5ZR2yJFEmgFPYZnPakAKHDRwXoG5fMJBqFUh19CYsSi5LvZs",
  "key18": "EqDJThtSGZUtysH6LCJba1uDZNCFZYNkPcGVzVXHENZvSpHdgELop1ocQ8Ws7tKmCdTRmX6VN4D1FxVjd1ms3Gc",
  "key19": "2GtW5xfWgE4vtDuW9FZBkoraVRS46FqF3KAWWbJJtRMAL6UTHVn86PGDX2g3yZCuHzXvADQFavNQCvxrLVSuLKaE",
  "key20": "4s8x2bYGmAdWViBdgmcTP2i2rbBgScCtyfsF9iUysJUwJQhNhNK5UgUxfhGAh4RZxns6A2PAHRosfKo52fSRMiiS",
  "key21": "KcrgySTXjzqUzfYDFBd6Pxeq4kNsqQrj9S4u9krfow1yH4koxMSjin48evKo7ms96syenmEhGQJ7mgQGEbNavGa",
  "key22": "3THVY3PVYcDnxQhSwGrLHnqHnqqhMWBSvJtLsNNCwksYjByfefg9RJcbAPrKW8QrjczVmLT3ULkwRqMWD6WeD5Wn",
  "key23": "19HEmNraDjxdfVgiVgkToJvaWk7KigkMGXfPJuNrJrt5mNCDqtp7JQzqDHCaZwd4cdbVawG6FcBmsqvFoKbEvf2",
  "key24": "5T6Yy9MWgew815QtwMsTDsikzMz4S8pxCnUcoHTsu2ZY9gMNTgeLfSYFj3rH5EEuKTte7cmT66aA7K7f5XUaWNHj",
  "key25": "2w4Y8BGFLn3LTgtA3JpSMgoRqcEPsNF9eMhDtxswzvGtkEaDpdcU9kufV45y9M7detioaAMnQUWZRkf2r2p6fb6J",
  "key26": "4KhgsxtjTk72P9cSDGw9GHYAhQzPgz84UsVCT8oGR7Cbk7S6YsewaQdsYcZyLDydvBE8ktbJgvXns2joG5ySQSJu",
  "key27": "2DXeYgq8Kr2mqhoR5Ef7Rg8VwbAxrTR73A2mamFrpfxdcRTjdMP4Q9oHGsEyfCP43iEtcfPLPYbsaxYzqWmYPV2A",
  "key28": "joR3eoyo8mVYi45QXb2v9RSo4NyqsQBGqeqBzRmAjj7TUyjQsGvCzJXBGVYgDsBpZTkgx3PX9VThGVKC8ajKXE2",
  "key29": "5MJZGNP2bkFxyUGsDUn8x14sGfwZNqgLnz6bpNBYwjqa7zWFozE773Kr6ATu8ZbH6h6pe7EXZr3e4NP5bRpAcehh",
  "key30": "3FyLueRXr7Txw8G9wp9k2QHgTLj1SfFQpHJ3cHyz6xsU8Kda4b8RReQPPnnKTdm4AV5Ydp9oREVyskSFVWJjGzXV",
  "key31": "5PFuXiQeNFJ3147Yr7ngHaWv45kXAgDt3AaAzC6FR4aJNqo8Jx9uogj5m323bo6TuyWRKXKtg1pVWXKnZ5MMbyGL",
  "key32": "2x9jhLpW6PYYDic2YyfDfwmzUXeZYj6eFK8W45tze7uNmAnjW7K12feyXgEFhJpH7HXouByqRKNBQ4VqvU3YQqV4",
  "key33": "5hbNVgVZz5brP94F7KYXSqDQuNk7Ge8xaRYHUM8n3hFQtA96RyNJGtDsAhLdZdPDPQ2mdQGgwuNtJkiAuCtUEhCm",
  "key34": "2hqy7ax6rFNh6QnhkxkFEW5uBi4Y6GCnKWSWwq8zHABCQQYM1KxMENpHhNCYpiTJxGrvDPTNBPayiVKt3ba5mkKZ",
  "key35": "57hTeKCmCzYZfvrWCQkApi3aAQLqDLfwywRuvXeHxcAKE69ixvEo5E2c8kfKxPRwJwVCCEcFN8nQnZmdFhHUbcX2",
  "key36": "3FiAXWX1AfvxZc1v82tJojNPZSzng6ykjDfWrVdL4rrPD1E246w78eDkEdsz7KaSm6b2jNd2KWZ2RCYA5DiZgXd7",
  "key37": "67F8qGzMZVHmUSZ1hNcTG4JTr3qAaSzQef9jLLUNpidNeVWgey2UxaWc3Mvc1oArEev8TXNzVCaZLsu7SULhJP7H",
  "key38": "4VRsPmXoQ6gDBJxtahqDiyKb6kaMJ6HWvyazjrb79QoZtBpR4PtvfVc6H8FcSdUsriXjaKCNweHHRTVRnbduvffx",
  "key39": "5u7A3z8u3to9tcqpeGPYdmx4HaRjXqrrNaDiRNSN4AoKK5LgyMdGLbGQPwpr5yAm4zhDmZMHsRcwK7b2E7gtN6Lq",
  "key40": "41qtHtSd8GaiMGYQWhiWbWazh5hdEwb3RpFgpgenDe17MR3fzyF6Nu7qduB1dVUrJZLQvYdrNi9NND4nD5fQoBxg",
  "key41": "2pJe7Adt6sEEwmWfMKwyhACYbxWcbJuXMBh5p3kozm5NHy36wmugRyDwFyUWuT4f7uJhJuzXqt24ZCPxQY18gQj2",
  "key42": "5e4VytponzFPaFvpQysEWy6Kakm9LD11eNtRuqJb1gRfNg4wTPjtCSMkqDKJQYJFriCCSDmkcfHXEDYxpatQsETM",
  "key43": "2WpsT7dDKk7eRpJDjGfFq13cCQwMcNGSQvA4EU54EEoTxBfzaYXHHdudefPXxfFfxPnXEPScvVUmEWJ7FXytXE7Y"
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
