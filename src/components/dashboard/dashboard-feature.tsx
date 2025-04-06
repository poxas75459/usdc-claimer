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
    "DdmPTBmesExW5JAVJWf2XLQHefG8UXkVd6B8vfW5BmwUnFaDWVpyA4q1wURaaPSkT2QczY5SRuBUT7qJNWq56x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J1P7qTHubz1vZBoxCsoV8EhvhXim7PGCptgwmk2Ja3BdY2Ydu1tN4Gid3tKGMtdg3XbgMa6d8oqyFhFM58mLX9x",
  "key1": "5FbBmJwVgg756XgQzC2tC9hiC6XVvGbzcs24SQJsDijGbNECCrkyZ9PG7xjphj4JSqgFPRET56eaaQogRMH8VipY",
  "key2": "4KPAtF8pgGAwwgKBg4zFXfYXHZZkNs5ajhY21xC4dn7VHg4JNFpmwmJJfH9VM8D2MMHZAifzGDBij4Us87pHYFEp",
  "key3": "2rFnqYh4cQ6675GpxM3V4jLK2wSi6MP2uJSgdHKEoTaAZcaQGUVQJ5yJKgJx8Z8cCyikiNyprqaqeNHDqKhFkn4T",
  "key4": "4sQm6L1ifNbkeENMcvLfwPWAmKyuG7MLVxw49nJfooVdwAL6nbNrRkWugH1h37GUhHxcz6KQr9ZKyAtYc4fuEHtE",
  "key5": "qWEo3nJNnKUnyWqhKnbsCQPjtqK2eAstGvSUaN5VMjCmDjAPhhCNe8ya58KUJrALpgjXYQh7R2z6dEYgmYEzVcw",
  "key6": "5KWrXGNczvh2RH9WgJJFkUQmoXdxxtdKaNXiFErPaj9EgTKzJNjXrFCTp7ZtyYqrbE9ECnrpKFuxt2FdLaxuFy8B",
  "key7": "PuQ6XLoAjtBKKDKocePBJzGZjRjuZ3guhQ6MbdwbYmo3aLrUB93FTYJgDL5VsY5n3LaE9F2rV2tpn5T1QQxmjoQ",
  "key8": "4BCZ22tpf2KqDQFUNcHF8LvtL3MVdjnHbPYnJHo9gAShJcA9q6ub9zVJKYNH3vi1ye2X4wj7rQTStZH5iDrbw6Dv",
  "key9": "5dnHH4xkNLSHkFy5KvvCxpAikX4QEd5FUQMpzAQxaVYXRhZ4zuNizHWQSptc2KFj4QXBKoEqrPwGXbRVngQ1KrkA",
  "key10": "2aJt7SZHAATKU86N8fyxkH13wWViotjWqViVnW29mQmvQiBmgSF42xKeeZChcauUHMKaSbUB7YRyTWs7Up3RfgUV",
  "key11": "3m1gGskzdXys8wxMvwtBE5XyiM9zfhwAPdhepApYePESK4tBtoHceJ1ZZk2ixNPY5NN8tirSCiVtyZZzproHZWBJ",
  "key12": "22XrESzX8qf1gPLWTK9UDqqoj9KwR6zBy8HAjCpDh9cDPG76wQj2wPU2CYSMjG42GP4MRRcqRR5mbnhshv4rXYmP",
  "key13": "5sbS5nX7BszDXqzTyoqtpMcnQjKNDvALfoRVpKes7fVmh6yxSmbVWtVkRy7PqQM17EVbt3e8DucFiDCViAz7djfn",
  "key14": "ZvvPRVqb5FVWJLV78yrXkTm7ASoFSHJyyxbTg5NE3ojtC43PycLvm73iqG3od5HxqsnWRXbZuoSYiUvj5oJXYc6",
  "key15": "S2RrcVmhjcqL3WhZZSHWUQx8SeGY9hcnnbKXHYG5dwLSWKKyv1QLsLHqS7kE8xRP6EG1nWz8RMdcG1K2EVQrCS5",
  "key16": "4jpgk4f3NQzmjfp9dfCqFvEckeb9SMMpEVoe6Qai3NJUXLiA4KQCGZC1XKA7Qz6bF2SxgwDV8xq5CQRt1uanyGUf",
  "key17": "rLoKf79Ce5X4UQABoxTaoZEbeZiz7eMhLpdf9yqFFjXqbjZF62p4WXwN2G4FoyTRuDyfrgL67GYwG7NQ7cetPAw",
  "key18": "56Ciby3zqt2jDQHfjgmNx8RTYGFhAG1tifwmE5SePQhu5eamww1L3hLH6mWZT6KdFepXkSWyNDj31AX1Z1mMRbNb",
  "key19": "367CgLcAXMPCn5PD541bKdtn7wVbCimiJ9b84ryWUh7zFnZxnZMrGZRpow7VuHP51kngQ7GqNCjDWAcTGuqQBf6b",
  "key20": "4khxJ5yNecqEVB96MGDYGmAr23PQjBiNrkYY9iCDsUJgVw9D2RbbAFYJ7DyR41Cnj7EjQMfpByB1EgiqmMgA6Usg",
  "key21": "2Lt4ZwpKdj5Lim1usciN7hWZRq3aFyZwsRuefE8YnjEVMeUdjuys6aiYiY2xoaAmie9A3FRZhsXYUAJH7Td9gVJZ",
  "key22": "3rtP1LraZfMKxoGMjJzFwvDQCYMCPPKrneh6yFpGgxAtSdGRiQDJ3gGUvtbdNKfjy1YhRzVNkUrebLKNvx5T1ijm",
  "key23": "42k32ktRG9p5ivDer3CZGrq8GzpDQvaeN6zxumd5MgYAVWaspw7nsg67TeKZSb17TRi2eHfNzyE1QxLHMidpkbZY",
  "key24": "29uQvu1n5azJqHtUxGfPZpJ6t7jvr4bd4W6FPgMm1MJLYhNrQ7kkntd1ZSZqQwMLoqqkgDgmYEok3G3MK7QDk7GK",
  "key25": "2MMtZ2W541doSm349BEifjiAUXXAk4ticZxX3nVXwbk9EozDkXeSCmTsCMsWA86e1JYFqWZK6eJVHUGVCF5d3Ko8",
  "key26": "3UWKY9RwCzAoSqnaVoQ1iNy5yeNubPDfuuKgPaovg418GicZjDjBbDyihwvkGnWagLy2fqj37WZc6kFM9Hcxrboq",
  "key27": "4NbPDzvELvqGpP4DcDs883nQEBgfuxkiN7kqYNqC4pFH8L11ZQQ8894LPBbgnWQAFetr6ZryNb2kkZZ83MsNCjwi",
  "key28": "476g4XvrMcgKjyuLHbJbSGABFKjdNgDPTo2gjPvvYoh4tT9y9wNY5NP2UKpWbnFYMjchyvC23LFWMBXtWZvvfWou",
  "key29": "28oA7U1dRMrNCNHLUoc28Gjebws3p5hoiR3m3c7gzYKmSHsDJZPSMqwk7T4Jac6kjzBsdSrf9DKEcUbNrc6kaqzG",
  "key30": "4K1wn89Qy1NsVBSayP2cxni9z5rXDd8NC6D2s8n7Ky8D5beWctKAHYrzrMw3wUYk6gFN5NKVFdT9zwQhbT8mV5kf",
  "key31": "2ntJSeu4cSmW598VzwZy7iA86ZwZJ2egrScfibYcaMu5FZE52Pf8kDMS7XsPLrdYzDjf96vx3tEpoHbRWQzfM91i",
  "key32": "22kGC3D9AFohK59v3k9QpwdWGMZpKHXmkw6ETD7mCHBoHohinbxgZLeLHiiMfG2snGi9Mr3hh6B1w3MwEcXajf7N",
  "key33": "571hHEhQVkuzrhuR9JeEp86WZWTRXEHo9SDPQDWDNyCSmY277qSXZao1WL4j7oEryaUjBmVrT4yikqmesgremLQK",
  "key34": "4ZcdJ1QX9xJRS4at5qAqE6TsJfJmeHKiAafFiCueaQuDCSAWGETeXLGq7emg8erQnAqdhkn4MEA49As8U29xTrMN",
  "key35": "2MAopzYmJNYHBB5UAVNAaqB5bfKY38A7JNCqebdbF9avydScBv9fKbCLqkjibZMi1kp39HhqE3hbKnSVjpJrL32h",
  "key36": "4wHDEuqdM85MgTA89WRYqhCbxFA63pibmwBMRcQBMZ78EF7NvyWwCbRs9d2LkobvUGqzGXmEuXYm29ovYdDKBBP9",
  "key37": "56PvKiWKokyfxcAwz6XWLq6XAJF3vq61VhFQjaL3bXB4mcNerqAwQc3RYT7HEGjyzawAokeFRbwcgD2fJnLmmApL",
  "key38": "3g4wSzQM9Z8Dx7QEAUDDnX8acqFDVq9jzvsFDpYCJjst7FnESiEBPT2m3JRLQtzdQdxptGUpoL2BNDGQovUJVYFh",
  "key39": "39N6vmyUJNJiuAEx4pv7Kme8YFPiSjNnRLkVuwvqKN5bTUaXn6n5WseKEvkAbTHXxR4JuZU3tiL2oRLuGzXhsFxw",
  "key40": "46dNNiHiTVkZWF59wyn4X2uyq5s9yXegMr33PhM2ponJMC7hPdUCwGXYj5Ao4ZLmzhTexKyFzUddzH1HNcjdbmjb",
  "key41": "5hfivt8HuMArS3BBMXzNVfkHyEz6gJnt3RPiuQ7cNjKoJVAcf9At16XHEXAM6zvMy12EGnfA8aQdafgZAjriET7n",
  "key42": "3MxhgdbbQbqXQKRNcVqorJuCoH9MsKqi7Spt4wGmWQ8NrLuS2xwXiVW6cKECwqShavEGbAN2WYWhzPFFqLJ6xxY4",
  "key43": "2vwnCsjiqxi4fr3RQs88XTiHcCwGKBnCyoMerwDdo1KEUMpJesKQGfh7HYRVEFetH1dHxbeMKvufRw9fskGEDC5W"
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
