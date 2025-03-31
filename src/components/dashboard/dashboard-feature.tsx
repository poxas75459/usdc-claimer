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
    "vss9DibWv28jmdo1b47UziHUAsKQetWeNkiduf3AbhoT2z64hWGoPhwBBfmKv1o2gq7X5fKT8qgxLkowehCBasb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6W9FGPY2bqGNPcrdeuNk6kcpBdcuu9wURF1ewcSMxojBQokjGrd6NEucgNiZmpEseybC3muk7dL5gQKg1kpPAG",
  "key1": "4m3hG3FwhTVVY5Up46Qe8a6WrJYKZmH3tq31bgjKRvadkA85vvnMVKcP53NTsn5AugXoSVeaVQ9vhAx1RTE8we6F",
  "key2": "2Tbt35W2rkVMk3cL793C8DzWJu9dKUzJzPFpimRcvtimy2WLt4KZw59u2qJtXznsQMLsH4gpdbqoGefHUmHTnMfp",
  "key3": "3zgsi44mgjdw9oj6GhLPLwKCeAqvJvCgNFsSe9fzj63RRFQyLTPrzzXyUZEWR854YxHa7NsxKUCNWuAtBD3hFJQz",
  "key4": "41NchEtMj5CaHegq3aBZ4MLvdBNPFUmC8iYpdFDf6da33eyQ2g9SvCbakdLep9eg25myzYTCrB6N3ez5uwSQS8LW",
  "key5": "5RpM1cdq3BB669NJJpn4epj1WfAbPxXqCfqzENn3VkM2JwCVc9HVVYKh27FdpfVSdboM5J3muSemweEdoBJbmf6J",
  "key6": "21mJ9VE65CHnRiniGueNfQHwhcaueDYZKBxCAh5YqCeovtjgdJ8b9dvRLjVZiPb9ZLRzmTMffj5vifT1vcb8R4Jb",
  "key7": "2TarvK1wjpU58uUQi3mAVh3aR1coYjSAS7KnMRXSyDCqJb2atVPpxjkxYteQUPcWuyvjvAaRwTaUvzUfBGYfTSe9",
  "key8": "3w5JALUYLE65XVu5SDrFQhJN5bCDk9rKNEfrhFLyRxKBpsLeB2u5xTKUyMTJDPTXVcMw52V2p1Ae5DnGMXsrK74Y",
  "key9": "4FSs8tYTxYiRxLpmZLSwKYE8hQ5heyq35ZER2WnaS615W9jBjVgZxb2W9UcFqEXo4x4kwj4CU1aPC2gZy5gAAxVr",
  "key10": "5kQ5x3th6zZbDugk8Hi5Sx6ibkfxXbDFByLAxKjibA5Ci6EDV4b3FRt9CVkDv64AtrHktcn9BYVWZstRiT2tTp2f",
  "key11": "3YJHJHg9MiHo9H8qvLvf6jKUH3wZeLTLmtbMLzmRvx6f72wt19n3qWAoNfRDe6WXjEwfEzcVytbRu4VgcrLkTdyE",
  "key12": "2ByxN9e8nc1SZUe4fioe3zNcjR7yNPgqXCRg9rkERtg95TxYM9rG5WHh8B6mCpuQYASvF8ane2brDsg2zVxS5gbA",
  "key13": "5RyVsfV1mpixTb9H1pfv6p3T5aaeNmxPEYZpWH1uCDC5UkGWVy8qU1xU2cP7LLamCD3qD44ZRW5dxUbjBs8xHSWy",
  "key14": "3FRBwE1YTqcvJVTtXkBLi1tJDcGtcFUopWVsmVMq5xa4rPn6AduymW6CVcEvXx4KSYGfKNX25tPXGvPTW4yYskQP",
  "key15": "46uBct2iosdReDt3VHwZNtKmT2TrJupE3cRELTshSdRRwcSR8PiaXGGEDHPvBWiGN7u5v55xfhEprJ1v23xnhx7T",
  "key16": "5vU5XVsQscfi4ZBmJttdEGoyJgWhjNnGdeyE5SFNJYc2kyNgUAxZ4gXYR2EU6Dqw4437SD97oYBdX7zp3s8cGL7U",
  "key17": "2pmiUe57SsfcFvWeJf5cZYqSbEevqs8L36eZb1sQHaM7rjzUjPSbSYymGDDLQRRQamaGFHfnjstNsnoYyqCuzkCX",
  "key18": "2YAwB9kjBZZwVnEb3m1iqgWhR1RpYWCbPaPRa3i7dywCdu22Bwr2ThF5UqsaV9X7ECgprnp3SRrormVhyJzEDyoG",
  "key19": "3WKf5m1rKa8qNnC8FXpcVKB2mnWxVrDgfVmrXyj4R9G6mNr1cbAoqom9ebUdtKb9eFew6eNXVDE5E6fARXnkBndL",
  "key20": "2j5dgJsYZR4Uwksck4rzcYfmcq8SCp3De2foBmrKj1oNT5W4W4zaMP8JfDFqY6mXbyyJU7cQGVxc7Dm5ksZtmDBj",
  "key21": "58dw4bqBoQjv494bCtkMUXWfdoXW1rtAhN7QPmo6kWMkJ3rmS1SnQ3pxo3W9gmdnwWnBsSCQyf6Kvso3wh18V5CR",
  "key22": "5g5hBox2dGsBRr9FxLNVyhFRsQR7LVzFHXyg8yXdVpgxRvPbrZ4kCPV6CY2Mt5Efv5uscbfRwvR5uSFnonBtsP91",
  "key23": "23dkfz4XXSqZzBeggfXio5C9DtdfPpzUmwsfP4whAak612E8hzkVP8hb8toudLbniGBDKZdjHL4z46RQ1Vm22naz",
  "key24": "2yVE7CW4eajwLyFrkQfrDBCMwVWa8mAcZ7f399vbJeDvNsGzNSkrhbTnZJgxbix2kEHAXD4J5eCytgG5Xkm5gRh6",
  "key25": "3mAJ32ruHwPfU5oWC3KCE1M3tVU5VxmJe3VHrUtajC4ZXCqwBLtHngd9LS1uEtCfQDH1fSwsqtRZ2pLGfVmTWHhN",
  "key26": "5cmtcXrQHMy9hEAzsfvqDFcGofC8MipEnr4mM7yvJrUsHLtBByQZWcTZhPrVGJxxa6aZWbhGZbd8MbKwYhrcbVR7",
  "key27": "4XqSVt3TWSkBwBbhPcqaH7KENB9UH6b8txWKNn48pvifnvdQXUzJp1jWmF7oxxQZzLgw6jQ71AFyfsbzfWj98Mmj",
  "key28": "4EWXpYh7ca6VyiheuA4Lft4cU3hXLASRJzVEVaRRzELAMgEAoKpmH1ccYFBHyU5BWpEN6GXQaD14nDuiAgKwxvHV",
  "key29": "QPmj3sEDZvFKpvNGkZRe2Qjkk1vH56JnJnnqsoHa9U1dKwwCRHKHYUNmXQiM5gH7Gq7rygvgBWUG7GbKhFksXpT",
  "key30": "2HnnCZfo1ByTAEyzTquNj2UAEYNFbijLKbBw2N6JtdfRuSP61VpZundHaWaqrYTS6gwbCPtwSvmavUNiwmsgMU9i",
  "key31": "2bcQyzr9E2X6TdQFy7qrXeG7E13BRpLkPLi944QBnnH3ouNHCBrCLxCmAbnaUHe1vzQfrBy8z7VoLvUnaQyWHWsE",
  "key32": "43sjJxEtoM1MbgygCY9cp64d35f6nexaL8qjnG5Zmb3RS1U1tJzqZQfZKoCtGjB3FnP8D7B1Z5Xm2RYaoK3K2gtU",
  "key33": "5qb7Sza1fT2R7pL2PmEuU2QMSGkKi6cACSdh6befsVeTNnBKpaV6LvRL36hkriRdfD5MNfY1pA1eEnUhM35RpyMT",
  "key34": "3XeUvp9G4KbrP6Ks98qK6JGNieMHLZsC84cpn9Z8HLAE7inYDfBzrJqKZcJm7SZxnE3BAub63qAWj88D354AGrr1",
  "key35": "2k1w2nRd8zWsvnc3Ysdt4XRakfJgP8Rb9vpt1FxTX5FR35w7bni3Gs3HZu1P7QcSPqmeQGy412ZyrPQDeajokbYY",
  "key36": "2rsW3PGKQaRK6iX51JvNf6mB45Za2EbNJDMgQcgUfoeEdp21m4GdzauqtM6bxy9JrJMBFpEhmHkDsu9yzpxcwTrM",
  "key37": "3aDXWokoVis7kmsArosZ8NcBN4PqQqwjGDctst7TwVAjMUufYB9qDddR1oWNhX8PWDJTN4zy1nVZWGtBVw1X3zdb",
  "key38": "57KsYoueuujCw6eSn3DjV4yJURbahqmczVcynMHXMRXYjEPswPEmG89xW1kKb18KVeRi5Hs1ri4QBVTcd1qySHCm",
  "key39": "5LYs6XtDbqtA2vHFoHkh1fGr9tJF65XmT8W5Athp1bxtP7nW96KpBD29n13J2sWj8QR1LqQzkMzPB84UvRnqUxve",
  "key40": "5UPLwvbmkaEdBPtvRxHsoCCRzQABiU6BAYAciEEKMTudznjb5Cpf3J9UQ32dgfyyeRkc12N5zSzRvVYoKg74rzJ1",
  "key41": "3drPdWXjLk4wG6D1UVZcWJ5pg4UdXdhMudsEiCPuudr8Jpfude1cquVMciv2ubTeNj3zEYWr2JKvyg5dpd7ENLBv",
  "key42": "39PzBkTG2zV9P5tgzP8L5nQD1EdbX9d6gyh84gM6xXziyioGfGCFceU7kkjSwkhMD6oYk8WJCsBQVTcktBiA3pcD",
  "key43": "47r4GoFMTPkDnVfC4B9UrnfAiW2wHbjvCmw8i1bsCskQRTYrNcyHGfrfHymU4Ghc9eDYZr5QW4zyQwkAqxvPd2wF",
  "key44": "YXV5tWLCn8nwfWToou6nvXyEU4UUN6jgpLoDHMVUgvF2P3bxS458yPkwDXCKWcPuY8M85nuVk6La6rXsG4zJLMj"
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
