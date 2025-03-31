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
    "bKpzqWXgFvDnnbJAAwMFtNooPw4UXNE3ntFyHuTcUagLiRWkXx6ggCpFfYGsYPLR5EQk1HZZTnnm5BSmqKJ55dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ru9yrwuyLSiJZDx1myu8EwAyYuMwR8XbosGJVCyqVbtxxrKXu2hDvZtr2HFW2pqqP9e2BMEc7RZriBkJ91sSwSk",
  "key1": "2hZTKmAeWL9g2vzWDb5GKorfkeedYk3YWixSGemA7CXeiniUMKndgtSH3ZMcit58QP7KVyptgv5kiJLa5zB5JFYZ",
  "key2": "5tFbBi7rQMPMqNdDb1MHdScgkJxZMxxKDMBmm85rhxAEefUBbeXvYutCa1V3ZTUqzweKjFBhs2PQxaXM3v1ouMxc",
  "key3": "x8j8isC7xSqSvir1aKCHk4HgnqiCenqJED7Qm4xfvdvNW6LeH6Aa3FunkUfT5XgBkdMLn42yaaJrNtQoMF6frAV",
  "key4": "EwDMUnmeJ6y6AhERHj1ztnFHazugokmmuCA3a1QNww5gjzaK1JSB13RpbrPfskJ3dCypySy87SqHdkszaijdY69",
  "key5": "53bgxuqpHsUGgKtizvyg4T9zR8tzXUJNKVhHhykKHmkTfASEafS29Z4J9oKdX4anTdXeGdsDpSmm4NvpcqkWwk6X",
  "key6": "3EsyNbLy3JoaRuxJCVaidFuaUBv4LzxEHtaKxRNNwC2xj2xt1dMmfcfYdquvUzNUYPmUcn9hvPpN2t4M7kRbV6ci",
  "key7": "21WRSX6rNWaBdZrXjLAmqo6nQSCEsviM4KoEUW6pQ3Rw7qvstQc1ctcZ5YakiDqQHunowtCJCK3H3XPuzXebsFgd",
  "key8": "QQMLYyJvRoK4cEAC967yZGvfZh6oR834j1MhRAgi6T64w7n9dE5MorwaHZW8zKoNqXWV37pTQU9XMPnyUkk6oG6",
  "key9": "2iSFMNYzHDn7ZT66DA4AE7owGKKacDntB8SHrhhjoAY7Do5qD4bPazNeEnwS99xeSY3Hv6eLupvQdVQ9GWsLufyR",
  "key10": "4AmMz6TAhfkKo4So9E8cDwSPWyoFKwGz2BWkGXaCDdqh9NAgNueFtVihqqWB8ESRhnMh6i8eNFDyRgoHEwDrC5GQ",
  "key11": "tAixcUJKvMiXKUcp1cgidZdziJmA1fV5VTwaU3BvqCuFMLww3Ye6N394Wf4Jht9tCNDjCQEohPEBizcm81DE7C2",
  "key12": "2zvZk2fRbnBCsnS8rWSrPophiS6Z7H3S3an39ViskcKTm7voKMeSruyTnW8aR2xGoqjUGShQggYhKybiDKWCYwxV",
  "key13": "3qF51fAdvdSEvPCFnGb958JAEWgpUaWKwQECLrtnu3HFY9eXdKpkjkGmVc85NDm4ttYGkQTCqh6dcCdS1CWLbQ1d",
  "key14": "4bjjM7BWxDQRqdCLfZzffyY9rhLjaKExg5yuZYmrmjyCLbapnhCMBH9EMyd31GivQQQNdUmfMcsLVrdoKjyP1gig",
  "key15": "4ut2vwfAeJeXnKc37LMUN3B3ZqTyisAtL2yZsLgmWtuc1ZGbrvq5UM1CBPhiYVRfiSmABKctQ5ofhQG372gqDeZX",
  "key16": "5tMWSjxxdARUzBgG1e9Wm4hsBuV69mQ1Wjho2HWQfS9tQeq7Qy8JRwhVAB8o3ECFSzGQEVJJyUZir3aEYHjho7WJ",
  "key17": "3fTmeB3T34ozJhYMCBPVrMThMbCqG6Rsf8KVQwCqzNNxjU2r5xbgeCcHHyAMMT2KmPjymZcTXUVwSzwjA5cQoRnz",
  "key18": "xQHN2VSoYafWk3jatr8ACWDTcjyfWRpor7p3XnQftMkhoQCnkr1x1xLiEscJdh3Pwqn5heTCKGWUW6Hv6MWeyzm",
  "key19": "5SXoeip1bATw1vszvqtDi3caj32xeKV91u7M6vNGxwMadnNipoeSrRm9qD6fpTkyG3hjS2QzYo7GcdfnikojhoBv",
  "key20": "NyxTRLoRtb9mS112XBu5VaLNuWAMrb8p1zNL5FXtekjwNjv9Z7MkguVhK3NKU6AQDU7dVquKPNbE1mEsgdE4NXe",
  "key21": "WK5GTTMEoAxKsHu7RN9qVN1Pyc9GvRrkKJFtmtmajMons3CtYDgwGFnAGZCr9WkZuh2H8VtQWbX6qHzEgkUDqyo",
  "key22": "2HoA5rVfXZLMdB1a4QHFu8Aj9qVKNYd8kWare25SBzuXYdtkjBS8HCZpoMtLjwotLqBigRNQc9yN454ubk86duop",
  "key23": "wh8mjpWt93GbHo8xrWbA28XhtBoGwK5npmRZjSfkih2X8edBbgHgWYBVvNPqtpYCY16sUFY6PZqiGUrBKGzKW6B",
  "key24": "2ZxabwWcL51BbDefvmR91u2Yj6xaJipqPoCZCxdFG7mukuttHfJhZHHZ7ZPJQ6ez5uHXq9Ep3E5pC413EoNeYapB",
  "key25": "4FkRW5aNvYs7ky9t5eRQgXVZ4y2xojBWzBaTFrr1aX1Xu3NaeZJnJbNAYt34CAixUsCcSa8LkRmyQEtJ37a8xsXz",
  "key26": "3GXWvPj1Lcc6uiR77ZV3Hr3vgN54AG2BR6xfRR5SDB9kFWvB37KCYKhDpDnTAwJ8m2DGU2ec6utKwMYK2jcB4Sx8",
  "key27": "3ds6AiXfmCNkNFfQhqTphksC9cokM9ZtwbsurfLnxZk9xWSjr9SVVYZLeMCr4aTfxnk7jtaExB2TdyuSYs2dGG3o",
  "key28": "5NG2xFQmET1oL9dLafLqcAFhuynBP4RoRGvwRKHY2xy56GCK8kSqi4SxzEZ1mNs5u4ZbKHWfiTztEnwuztK9m7Ug",
  "key29": "3TxpF6rixGH1dSJwbzkrc6AUqfAF1nwynNVvTx4dLQLWnSrbD6EMC2YUaoUB5Dck7QQnDHHTWFNj7AWQufzZCCzm",
  "key30": "2gh8UGmqk1hu1SA3ytgHk2yLgcd9A8AMT7v8A8Y6j9L6Yk8S19e7WWaSTp5HiGdSxgZje3hUqrKpyDJQ6pQ4Sc1o",
  "key31": "4bMQNYWAgC9VqpmhP8QHXw5Q5p6Hkjq4ZoxxkcDszKTU8zz4wiRmxg4VV2pZk9pkKLbpY3RL7BrjDjtCTRPYrTia",
  "key32": "2nsyXxTWo8UTPLJMSuWJbLM77dAp9Nmruxg7vgacuZ2vKooDBX7U791STe79RBCGeEZYYGy1Gr7wKYK9zm2yspH1",
  "key33": "3R9wCZkC8ui56YAZKhtrZd2ZXdo4WQjnyymDHQwWsnfzPF3T4ztW9YeUBi48A5yecfj4goxWzC8qujBteFbw1PGJ",
  "key34": "3DvdxQkc3ULQ6Wff1LGFksvwQQF7vMqTY8Fc124iGLmwQJyX33NTovZLWGETqmYuzANTZAwdbppP8z9mMrsYp1mM",
  "key35": "5Z2A4yprghuv4powCnrBCEQcYX1cXmKH49T3ofhhZhAaZFe9HfdmRirLcZD89VfSw9STsj5DAYzEUCYzm9WxeAEe"
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
