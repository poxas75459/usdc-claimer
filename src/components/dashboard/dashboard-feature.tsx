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
    "zUE94SwwfwEsgWmpH7xu3QHC21oQyhzrphNFG2f1kxJNC8obMU7JALQ76bjk3SBnBemz5r2CAErA9gBgk7BpmiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4deb96fKPRxDo8GCXKT1draEXtKwp3Q51nAHbj2Xtes3CojME48ioJQ93AAG9tJdTeDfX7mLF7a6z7NtW3uLkTDf",
  "key1": "4yKTFFCF44qU7UT617SgWaJMfbA8YAd1WtWNg1RM3mbrsxdWQBR7wKqZXuXiQddkFRv8kow8j8unRxpyA4JXuNyX",
  "key2": "5p7283QkUVquh8YauSrMsXjyhWDXgXx94dNAtFrhyDospNoHhs1Pt8DtBW6XkJHmq6DHNLR77LTdagZeJESo6v6r",
  "key3": "65TyTLqTqibQti9LGfpjWcPRbX4doQ84Ss69gqZrX7SPD9JaZxskoBBrA79Fpbvzj2HosGLdCNgnHYnBRD25vi6E",
  "key4": "AdXqEhrAtTXqLQYZjn3A57mcn2J4rfc9a5DHQZdEvJtUfdTSLLWvjKvG5ZQUHf3uL4ECxq22oCbTFHPQSG3pmT1",
  "key5": "G1oWnj9CyKhD9TGveghKcma9ygAp2CpjEMR9z2A38u6Xcj4TtKBX2pMj4eZgcH7p2eJ5Eeqr2cVCNxibfbPpcv5",
  "key6": "36PvwzjB3CbmujmozSkRdqGDXLt3pbSujbpuEckgEkPxvgusBFpHEXTGUcUiFSwiu7eA1NHY76kaXvKe4L7bTn8Q",
  "key7": "2UtRTVMmLdLjE4eEF6rwyrqbU4Uf2i2BNwT2BgRtQ71dRqbDnvgmi77kxF9rKz8UMZ9SbEudZaG8vk4YiezhNe1D",
  "key8": "3HgHY6bY5jVnvMYVXsYcpJRpMNBVSXUQn65ht98u65DPonaANuU2WtamSAaTXR3RE9QeZ9YH9Rosc1L7A9S1su4T",
  "key9": "4waSPH6en3SH73WqeJdQZatfyXjehEY3aWn1sbnwZQja7NNqSav1Hr9B1AgaFvx3AEJDbE7gcDHn4XfbTrzqFnKE",
  "key10": "5oyTgaAxNHvfXWRVxKuYudvM7ak1JHQRRi9YofdZTWEdNQ5w4HBQigJSZYZu4oUzVbK3oGAC8n9E58i1XAicKCdP",
  "key11": "4UzAuPYWWe4P1YWuzfFLuXRjascd8sLR87DLTaYfPUtyyk1Cz4AVCoUsudaPsmM2MA2XJFgsRAVdnqcSmQFsF5AW",
  "key12": "5h15Y2LiFrHGrBgDh3REWXRUuQLxF2GxULdYwvdgNS65VbrddJsUdcMAWbneTGv5rQV5F25zoFP6UavmbKtpcMjE",
  "key13": "4BbQohdei3K7Fen3gGME8bLbegXSvEFYv5YJ9hPgp1dAa7fCjbgoXN6pEZcnEY6RUgQCgQiaV6wfNjCrm3y5Utep",
  "key14": "5vjkr1rSb9fs7WREAkGN81ze8taLwz2Ebf9r1GsBfAhE4M6GfB83B4uaX8WMYLMPtCsmxkaLEkgk7jLHfMvmJqeC",
  "key15": "3NxhAiNAQfExotc3e7Z9ZSR6T8MbWZoi8PPu1YFEEXD3JR9DeAtEtwcXVhjN6ST2x7MuyVXnktAmqzwZqJrZ494H",
  "key16": "4Dtd41rEZ8baJzgeUsRtPdEuaEaEu3V2pwjMkSdRxEiK7BG9VwkhZ5aRushy3daJ9Tm8t7XSrA9XdC8TQrvZNSfY",
  "key17": "4bhKvNnt7ZTbv52udLhmRMTXKoBPtffYWtHdfTGhS2eTV9ZLytArSk9FQxvw1wMqra5k4ddi1PgFLpixidHGuNRK",
  "key18": "66y6DKPjHvt6p58wpg3y99bjm6WZsS2JWwqgzdmUACwTHZpkRLM6qkaFbhPrHcfU7fjXtW3wLNqtWS4JuxqUizPr",
  "key19": "8yrUK1KAbn46byF5kDxXgkNTAqKavRX5U9tiviixM8yfKLKYa8bcm4rZwxrrGHt7pvW3UnMwd4MeAKrSApwZSUx",
  "key20": "3rqR23AtLtfsVgBseEAc7FChTFrzRGbuScvyRu39kt8iNNpE7AHpTKLgdCs7yxuLNMtRKbBtShE39bMf7krCyNqk",
  "key21": "LyLo3jJogmN221fcQQASUiHkeMZGUWofqfjCXwzxdEd2e6BsB8BbHB4WieEb1rjaJQMxtvderDaRxiXxk4SdEA9",
  "key22": "3a2xhD8Y1KWziBGcbC4mw9Z3sceMUPQMQLj6UNsuh9iYPjHFGMhv7V2bwQcQKLSxTiQFiegCi1FAMN7DDN6CNSKe",
  "key23": "5ztzpHDmfyLiTQn7VYpRQQ6zNP3gKjnFEZcDdHZosiJbDpwoqPWuKJ2KMVbfudJ7A7YwGRsPGHLD1CzmqpGmS5Sf",
  "key24": "2JiNNVx755UM1x2tEdcr2ScyWTQtnJFqSbcuw8cYtMMco1z2UogqVKBnL6KMaRf6Tafr2ctkE9bQNnWXy2kYhd1U",
  "key25": "GLamaJPT2S9FTJLy6p5Ce4KZfcgtiADqrNSAMtFUMz8744eg2raPGWTpVzNWHbibgjTDKHBMW9WbVxchBJaKwWD",
  "key26": "2zmrx7c4GHFfrwXYcjKoBXMstFiZMhzNTASMFk3c3BzwXp7DGk4X3KtRzrP5yQN1Z1KsJhJd43AMheQZNqL4wsxr",
  "key27": "3hAxKvhxemPvDCEBStaw6vWYmwTtLAj16ijRGy8iuq7WK8PG2CsSfSjpsHTYGRv9RmmDPBuDKLiZYknmxAVYKn82",
  "key28": "3NGcmVJP79ZuQZwLLH2ra4oBVvSYzarG4PSwWFi5D8RALW89fsEcqXyif82dVtZTAYXxSqHKjuDdh3qnzU1pSHqi",
  "key29": "4PCHbt456CA9zLHqHzApVHAGhLJCYk4ZRLGvLZ8HnawX7ydg5hoTGjvjT7SFLitqWti1iSL8ARxoNZYQKyLnxYZL",
  "key30": "f4y4nWuFjuc2gc6ARmgKFeNyyb5BLYmUsiorvwtHmnURzCUoKTKLhLdEbEvJnut6V8wqzGs7tVgqwGeqU3TAZSx",
  "key31": "58EgvxSbwRtvxZXprW8f86jkjevFZqszfMW4ZqMdn66h82zYVJkRcD45yZXkmV1eM9nxfJTJihNYhTvi9ZJVbqKc",
  "key32": "5BQieu7uGd7tjCTsVSzLheVfBY5LAndBEuFwqwfnXFiuHZ78kR3e5uK4SCWahNgRx47yJtB3r8YKWHyEePqKvuyz",
  "key33": "3ydLXCmEQ6vhqfAmvpncNquPGRfettxkBWbLa6FPNU6sQqcTdA5D6W9GPbrLSH8CwMDY7v8f5weLRMmCruBKwg2u",
  "key34": "2cANWAaqyGPMHbHDzGhzwoiY9T5UBka4EHE6N5e58uKMHGVV5dRGJZVZryF2dWa121SA571hd8K1NnScQaRqgsRv",
  "key35": "2Y1RYv9DkM7sjib4MdaCi5N6x8ULE4erZLq6oVF3bLAneTQ1pdDrNAGTUCY98y4Dv4qqShuXRP4C1MgYvd7ZmpX8",
  "key36": "3eAQKyeXF7njcvvz4na1sceGLyeHcoxJ8jKLiKzsn2aktRpPZk2NXhxYLX2SqZrVoNmgCaZCznAh6xmYkc9esSdV",
  "key37": "4fLiMEKsbD8sJzDoNvdumnn47LbVeY7WJYiZytrHSd3U6i5w4VAoyCezKtS4PD4qEEAqDJvqkuCyuoPoXCG4agJr"
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
