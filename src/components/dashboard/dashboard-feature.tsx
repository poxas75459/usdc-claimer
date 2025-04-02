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
    "4RLXnQa2rFpP76g5YXb8bgUt72BgQEEpd3B81sA4eumi5H9FpctczZ7gjDaKKxvrwo5KscDdrxr5wGJ6cgG8pr8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42SQhaCgYwUdFQoSuyEFKC68ZgcfntZt91fpnPj46BEYqraGbMjQCcuqw6KoFyJDzwmruDahSJ5jh3qDWSbVrccS",
  "key1": "TemgBHrgiF9yCvqVvDfYaTeV9tx89Zm4TTDTHCUtfLJ7DPiPATWc1GwvnsPkGCb2y8GPgnEWNWK45KN3KoPG6nn",
  "key2": "ev7oFP9xERDy6i9gMM7jLkMF6rQjKtu6fPhnHmCkWyySLHXSNQFLUsuuZsUdcWovx5T7o7586Wgxkfdb7vS1JaS",
  "key3": "36CbsfAJq8Re7WkQ7pQhLFeTYi1iJ1FCHznR2k2G2e6hJs7VY74wcKxJ3gmqwMzxFCRjy8LLS1pktDib7bqpsbz1",
  "key4": "2VYbxvNV1PmSMGKnof3FT3hwUyNzXufjB6TDiFdLcr9927CbByj4J6qFNEWg9dX3P9f5KidcAqdDBGN1Mr2JdZSW",
  "key5": "4dMBdXgQ8ycTDgcc3AdJoA67VehSpgYA7nQ38u2u7v8LZo9Xa2JPVuxXTcMs1ypLi6kVcSKUMXEvBkPpw7GwUz1T",
  "key6": "4zfnzPcXUoq4ZkosN9QSpYSRoEfczP9Z2qpJ3zTb26SUw1uPv3QmJPEUZwCBAEHBMwwL2h1nEAjw7mst2KT1BvRq",
  "key7": "5oZEDbwbdSGHrZCfVTNu5f1dsqpeVtAnfcouPnHGUsR66oC9fVnzPy8om6RVozzftxkv5uADNuhaHu7KVcBn9ghq",
  "key8": "3wK4MZQ3xzjSR1uwrYcpr2LTMENstipH9ERAtEDZghruxX8XK2b78H1AbfQnPMjukV6kMVsF2WUpfESYKYn5KR6q",
  "key9": "5cVdcJrbabMxokMK2fvub6BF2LX2DbdXLLZP1qm7sJBvKRFQVW7fZB8o2yvNTyV3tDdPGdrS17xm8ZmDhQBgPeBk",
  "key10": "4QgScpYXDXDrhsWGMZk6BWiewYk5x2PwERJGCrH9YMK3itNv9H1wE7wW1JT1zShX1DZuRwWegrC5Z2dgKnPFhZ1u",
  "key11": "3BCfuZWm9SyETpG7x9MvZj6CWR1xw4mxcZnLVUkktjBEhUqbWMLaxkStTVoAdTpYhrjpZgN83KWkkK1gSV51Ts3K",
  "key12": "XLB67ZUFMrHFQVbk8xMxcXbVfN6UFnR9LogwKY9JwCYfbPRebZ3fbnYcg889GtJVcFdc9nnzZxQrCgc236xQwoi",
  "key13": "554DQmoRgukLcwT3FNMufcfuNHqVSmrdscxpj1yqrBRo147RGXzxWgJuZxVhLNbZf4WzfvUMg5UM6bS7r5sWQ2Q5",
  "key14": "46BAYkRwypzEXPFHmXuh65GMzuhiCn9GUMJhJJCdpWBBMwgst3m2dAfW5UfSySKaKhrRi4kMyMbPN7UzUuT6GGMh",
  "key15": "35AEHPQTjZPphRdi62NsqL76cMpnFzAq3fSPKbaG9JgZbcN3oW5RAponMVAHfoszwGmVvTJgEsXTguwz12Zwofjr",
  "key16": "49ShkfptL3mKiGezMu9CDbHYHdpmNTvde6gpRentG6cZFeXnsBTdj2E79pn3Uy12gA7yhg1rCLhGVfCGgVPZowMx",
  "key17": "3mNpwMigoZJxfigfNDQcVs1MDqjVNSMsGJkXqnt7NLrgqXMbk75rhL2xEyDuVTSgKW7Z3ZzA9xwtiP9j8bWGhXeL",
  "key18": "3N9j4gP26eNpQrmTddWYRUdJqRdM5ZbWW6XnneXDE6Nr2qXLzfQJo13ubEsf9oH8FEpxMQtRvKv8Fpj6G8sJYNab",
  "key19": "ysyrp9GAFKgfMw2V4gLcLSr5HcyCokBFnXVMvdE4JZSr8gFkynB3WbE57m6P83dPpj955iegoKnu9dZVBqeJknh",
  "key20": "5Zqu3iz2MnNPoFNjaJ5RDfAMXnCevpkwV32qfrPktUDZwzE7QtsYkyxouy1wKm2GRoAFeiYdgRYGATT6KDgLLDwM",
  "key21": "5dWuZ1mxAeE8uN4fxMGaso7w4ckQEEcxygHjf8Aq6XM2f7V4oahrjMayZkVNAFGiMLHHvhePS2k9mfg3c246RCyF",
  "key22": "5GkbxAjddwqUMeQwnpGrftk8UGDWdZjrT7JxecytRkzjsLCs7NPuA4wLScCBDwmCuwyrrRkPjf6SAwgXPWAF5gYM",
  "key23": "2mCuYvHWXunGYMagZugS9V8Feg39VibnfHvucJ8RiuN4KfmDURGZDMCTE2MZgGkw1GqvyUyvPBh3RPYoEgq5xgXX",
  "key24": "5WWL5EQUnnF8rsyXntEAiY8bGgiTDQHniQwVripaLBjNKw1kXF5hB6KAVfRqZhHCsa91PW4eHV1viEChyPXDJduP",
  "key25": "5aAxzGrTRyEH24J7j9KmyBCshSV9ypJqkoi5X3zKW7ipEGYM2bSnvFQaAaYJfCN4wXuUSUoPtDWiLeX1ANGgLxb8",
  "key26": "5UejZeCFCpQXT4Di5kR45A7j6BWod3h1C5b6PDmKMYAWryjjY67G6gKWac9iZUnLfUV3Vij6y55ybYHV99hhSTyr",
  "key27": "m3rPxLE3WQ3hnvgLZD2Zv3RsPdYpa8TwMow2C9GKARQ9k6fx5Te5dPfQQzvzmN4Lf12nTYsLebs27aqYa9aE1vQ",
  "key28": "3XwRw2x6b7T12sgwwj5R7bf3syC4oLeN58YXLHeRbwe41rRdRomioipQENKd4Ng8e46XYPE4Ph2Nvxyk6AjqWZhQ",
  "key29": "428o2KLfyiQsGCbKxXbVVPv7kxf59d3GhhUNrHvKoPY3HL6X73UXPFvoqKhV1qVnZmQ9AYjsNDbM7xsaf5BfuYyW",
  "key30": "imXfSip4UqHtC8BYBm7Yv1KSrPHFdAtW7kLauaSadud2nYjiJP1zDMsGLc4uMz3bYoxJ65LjAPNR24xsnRZKeoP",
  "key31": "5zF36p3kA3whZyrxkru3ViM2zBHwzG75sP1TVxCtsrtzUD6VxYUN2kzAsd8TtMvXyekhnD5mcsTBCX9eGMRXdWXg",
  "key32": "2sNHka9kN61bqzigJyGpqWijb41FKJqgAm35J3AqMgY9hyEE8WweJnkWrqVgbiH1oeAJTtndNXwhANwBd2P7R9RL",
  "key33": "5ju2qiJNbJoGChATXfAAzUM8fniBnHFQbi6HvocYCGKpW263agBvxPDkpyxm8Vp2wbwz7AzWkWNCovVV9LrmdsJU",
  "key34": "54ZKCPvFioptcftcCEsY74DDUsDWxUsaJou3kgNT8ZfBgzLdCvBrdcFxp8q78RGkwpSXhtQ64EX8DkTJxhAdhGhi",
  "key35": "47mYkWcJPmBmWHAVX1xdWA7JkwzpKMAd36Hh2t96H4217C19dU5is5B4p3ATywu3kitRv8McZD7A4bMiawKBsesi",
  "key36": "29d5YcX6ZWrRTG2SZL3bcFxKyHz15ud4zf1doL1ace4YtWKSE3vfWyfTVkCfezmanXEnWGKCkbsWWnqkUJ2r7ucZ",
  "key37": "6Pj6FkEMfooV6twxPAi2HG1R2e6Udrt3MrnKac4Uv5MgjwvUueqYcX9FFEJAuZqp7EYHmQNmvKjhq3pJtWCZANB",
  "key38": "5ZRFfV4G76NBNyH7Pnsw7wkfDZ1tHMdapFksFQvW1bzkk5JgsMRMAxCSvTtUV88QBh3K9LqDCdyDVEdY5z8VQjaT",
  "key39": "5mvGyss1d6AD9TbJaYYJhuXrbTXo4EZYqH42uFQrQ6EdnPUvqJnT6eB5ybozRddcbF6Sq5u7tvw5B78xG3g7ZiqH",
  "key40": "oJ47fQWKG2vNz6SM8HzdtTHUwtFRp87q67eDhysrWKNTyJyXhhaD2zUwxbdhk9NEcmmKT8zqcH1tHd9w4rRF2ny",
  "key41": "3Xod6nAKoPc6qtdUET4cV4TmzXzMrPXcDLBK7fywcJwEELCZSNkiHEbjMyPo28wvUVw3Mofs6LyHyUHbkQ4o6WFG",
  "key42": "3ZVqDJe1qDSvCMTLJN8FJ33EhzWDjADtot5WhKDZNNGHE25G2USJbPTy3RyBgAUEDj7NUwW7zxAxyKTjfyVGzPvi",
  "key43": "2NehiasvoS82chWHS8tMijpMtnVTFjRzTV6dDSmYg6CzNzTJFgRKuvG9M25uBLHE3NQWmmQeYfTB7QPF2znh9YrP"
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
