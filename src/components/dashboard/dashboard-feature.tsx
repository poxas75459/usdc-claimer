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
    "5UBsqXBxeLESWLxN7P81zdEwJeCJFqhxcwaf91pE3HJ5W4UzPCvbvTMwq1wQrUT9rF4pRGqgiEkYudCuwbjn7Aao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTozT8o4xFE54xUjYrSXFFuFpd1ceCieUyoufKLKdPX3aaz4feeKAerxPW4bhJBeEcDmWDMCvExBDL8mTeq8WHd",
  "key1": "49JsejxCpkN96BZjPZuEnPRdWKWiRDmJ6K16G5dvotaHJwPbYACTciUHr1LT4mVyPc3eBhXXUq6JQqhru2kmTUSf",
  "key2": "4MzMVNws1p819qZUUz1mpx2hatu8ioK4SzjyXP3sPBJGYcwhiahT5uQmbNDGMWv6qRhhMsPeHH9f9NGMz1t9Lahw",
  "key3": "QB3MPTsVHhnHvbcSgGo83E4sq1fTioqRfvLKyi8H1HtUS7BET9zeKT61LedjBbvsCphS1cCQxXT4e1QLSgKEm49",
  "key4": "66qhKFDSyXrKi2C7m1oEE8D6QEnCUZnCbZq3Xzoa78m3TbiATJnDjQXEkff4he3ZfmZVwZSVxJe7EK5ZgWwahVsy",
  "key5": "4fhD1wov4LLY19r2Ngvpa2PZvnTYTRMiXAyQm62m9y7r9A84Wmusu6CW1ZckspjQoBNQYV5QSKHmXDDUewMkGfng",
  "key6": "55DwvAjzQVH5soAKDfPWVSWcmRxfGqxPHUGTqCb2knJac9zJPLv1y4mmua3ZzYBHfcMdRqMyS869u4WWxKmtGWem",
  "key7": "3sQZgV5cq74ohjLVtZnMXzbnM1kGkMEnL56j54o1krm3Pkyuk6GqHcChRTyCHHmQjhXzF4yzdEq3N8Hcpq6PZpYk",
  "key8": "41E6ZfgTHYKfk6cebAfAnzEaR2UhakK3vSwWAQTDFhUYgZjAJgPczNJsPDXQXT6Rf7Uzg3EfVNAQZDvrWnwfXweC",
  "key9": "2Yrb8ipYGq7zn8Yna8memSxzqBEH6D2UZ2g4ndQL2eUXxGgs2ADKbWEnkbnKcThTdyhHRHwsyXLF1evfRj1ZN1v2",
  "key10": "jncZ8rwwoKKGwCc4azhKm29ki7TqRrBmyJFExEjRHjxFi8ZpfCsca6GD58KwJjqvnYoSXQxk2hqtE8FaxTA3pvJ",
  "key11": "5KWodS3uTpcev3pL6e72fswASxg3C6t1oFy7HwuBX6EtVbivjeuzqk8ezB29qEcAYEq1XBBthFZbudd6TLe97Y4h",
  "key12": "2Qb1u4qcLG3g6XNYShCXVgL4hcJrt5Diosgw5i6LWcDisPqxtANeGFAmXTgigsWqxysN43riTtKBnWH3LgujJHjS",
  "key13": "2JgMjRbZg8HWrjJZNoF6yHKNAwXxdJtw6mVn8B37htsmoSzyi3Vzr4UNutResFtWNsN3WyLPkt49ioD7ryFBcFCt",
  "key14": "2jV1dXsp3MhjDhSdvLUuaaQ7PLJko1SdUs4aQguZs8MeyTjHT6CD94zbhf2mYhQ4B1zftZHTmVUJYJCuhQZH8aNW",
  "key15": "56tmnCbfHUNTCTHRYfVGDZibQPiSQGVk927vzJ6PMLZcopwvVGvGp1r3xw2MTjsuHj9LNm7FjpsweX5rwpJ3AquC",
  "key16": "3GQszYkp37oCWyMAP6wPMMiYB6FJf6nGEpqc3ZifyawaZ8dwkg13umgL4MnEz8wVKBmFk6uAHVwWeCdF2xzcBF1g",
  "key17": "34SDh3zD7mdT6tiuUReynbXM1inUVcYWJKYpFeZZAhxDHmy4joULgCqxNKQg7Qr8EPeew1xeTci1RLoqjcwbXsj1",
  "key18": "46MdeygjaUeAXxxRZXFJXJeCnKdGCdYfhsinq6DwSGRXbL4W6TVGXPbNZy74ZrnHT1ESsY53bNapn8vjtemyZC2o",
  "key19": "5vJFHJxVWwoTFV9Um9LiAFY53wvZwSysFNhHbYPzK3GNUa5UXd6FKDxUrd5NPJaFCqUnHEnuSRHQMaCeXHDyweuk",
  "key20": "3dYHXCkqcdmsjDQEQS73ww8BNxGHgTk1NTUQ8s76Xi9PWTSBJyP9DnLUbNcgQhjZ8Wpo4m42SoBFanMJHzq3DZqk",
  "key21": "21UE24q2MpU8k1km3KhnVSdcxh2pbTX95fhJgrFkGe6Pv4A5QvjknQACUz6ZNhR5YBjbiDZnonnV4T82gk1sfo9h",
  "key22": "2j8c6m7Smo3LhtsNDBvttkCrkgV1Mw2iWAa2WCvnRJ2X1HQLY3LW8fNWXH6CBQZt5tFkwD2T6ExTxBBJyJNMoDN4",
  "key23": "2hHHZmWxNrbkmMjfdnt42jmy38k3gyCFzptNgJtTxmjRAqwGUkWTUS7JdwFnoFko3hKEV2QZwWPgn26Qyi2vGFSS",
  "key24": "679cyPAb2TTtXckH4SzMqZh165MMdAy93huRbQEnxitzYfHs4hT4NJd6QBnGFc6ohzQR1r7GwB5hAbcpuCHyxxR6",
  "key25": "3Aj8vuJBMavkNX5QMhwJ6h7TVTRStvsLqmyRtQtBN2oAER7zW3AHspCapJNNhbsUcAfomMS2sZcz877VmmwbYPGZ",
  "key26": "627ybHqcYsX2Bs7MiGaTBJwATbfSiKnckLBxuVN8cw6opNC3UfDp5Yf88PB532jt5GMo9AdtHwMrK3ZevsK5KhZd",
  "key27": "34DyCgXkexuiNTr2X3y57bU7z6H9QQmYPr3vNuSaMgVHny7PiZVps67Ap6PUV4ekan74f15yojdVij4JgSPi3mww",
  "key28": "3EDSWw76FEenJWrwPKJdWxV1doeiuQV9sZRg8iXwPEFpETRCghAi6JCJNZUVYbQ5AiBWPYEF8kp5jtpLM9aweTPz",
  "key29": "5ALURsfNY4XnBjpcoA4QLhGmDQELRMutxLFhfsFyBcmmy9cjMi7vYVs7QVAxTA8fmnrb1UmvhmbfHsW4VaAo314u",
  "key30": "4Xj6fJJ2GgWCEPK3UUmuVJaWJQQTPy9ebvjC315uXen5Zyvvs4QJYqUzn8rWoUrPnhNeiiihCvXSzoqYok1QGw9L",
  "key31": "2Nzuz7HyHrU1E1QNkvTsYnY14a9isZNWCvrgmAmJoEZZeKSB19ZzEdLHTyu2ptzHb1tYDeM36aiqe85Yv5uqLp4K",
  "key32": "29fMB5AstHbJroqGXopHXehDb5ZNvy8zZjXuwUkGQfQVDq9VJ6oehDjUo9ch2YgJ8mGGTB5qtkytpFi6UupUHKEf",
  "key33": "3oFkK3uGjCc83BQ2T8Y5uQT5xkYaDX242TxzL44jxZDJoc2PuzkJs9XV3ZZ7LpzDd2S1tzzfs5WKH1d6KGf4ju5R",
  "key34": "2wZFMaHfYxB5CyCxnaxrcQNy67PMX8LvniVbbDovWFDELWuABW9ZB2Vw9oCdRTAzktsRiDv76JjTdig7tBdZ9iK1"
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
