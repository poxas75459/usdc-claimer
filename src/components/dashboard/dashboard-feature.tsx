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
    "63ETfrrextAjDrKsT2XkZXMXJCyaTW1b8YsiRStPgpowRvoHYsQuLqjLRdDigyVwU3GZnNkL7zAo9LLZ53J5hoi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFa6L1q46NofUWHQxXZNGVYsgJK13Naj1JKViNNfbWyQLizoF6aMSnepcQAL1u7TJ3ZVETYUfVDRhCZ5gk8SEBE",
  "key1": "4vwYqRuxi9L9BXonDMpgGSJwEbEDuCrCarDptjjgpVHH4YcGz73Vfxzt5Bs4ySy9Ruww7nKbS8hRGZV4JRmzhVJz",
  "key2": "4ZndBJ1dbzrzLY7pB5HsCVL7EjZZ5DCAesYnxxmY6LKpmqan54nujH6ciCw6WVA8vehHSSjwtqb6eQ1VB63d65be",
  "key3": "33fbeAZEk3z5mkAtPRM8wbGN7BPRBhykSoXBgtUMz4kaNugCmQcBSk2ddGNrG97fqCp8DiAJ7D8vhzWi6Jpusy5n",
  "key4": "2xwq7WqvNNK2DNoVd5tsXBqbxGgwv4UJcPQ4ADuCXqgbotmJjYLDiyvH5D6rEyKteNfKCQ1DMMq2hbkzygouauMf",
  "key5": "3m5kJQnpccSiqNLP9CsU6nz5LHXyq5d6WyHG5h1ocnkjUB7VjRpY6gX2UMUwZSy9oQoQja2tQoCnckBLuJQQANXZ",
  "key6": "4fbFNBdA3id9HDr9nxp7Yg9fGBrcdhS86mDrpd6sTRYsyDcjn7ynZbonPjTmbk9hgTRq23HemjB2y5wJ9RADpD52",
  "key7": "3H6cGs2ZH69rDMNArwTuCXnNSpmbhAMBtkCbHHj4Q6RWy524gfU7KZ67j6gJPThos324811F6G842JJgDgABnr3m",
  "key8": "2W3efZKperRxdYg6h9qYLmy7boN1fgf232JP6AzuEdWP7ck6soQ5wnFLe5RgLgVDHiLnMhwfPSL9icXEZTRzatR2",
  "key9": "3Tq2nyjCGgwDFDjxK7PufQjGevTLK7v1diiUyWzgtgXybS3GMRBUa9LWDkhWMjiLscrAXAW5PyMSjVyyrq1yLMVa",
  "key10": "5uc9z1NxQ2HUxvmo6RrqSQf2GdFUDsqgemXWiTLNV6JyUEJpyF7NizUuzACSCUmia9fnUvGDY7Nusc3rjQwW5Rqz",
  "key11": "61w2SBSo6XYmTrVhG2QLXYRK2XiPSarufivHreev3ne6kVdjZWtCVvcs9v6RxJ8e5RRMSAfLnGS9uDo8T7AysvXH",
  "key12": "2V4iJXbvcDkEw4oApSA6BWby6Gnuxzc6ZMwvGvNSPeMGdErxK4U9fTpDvu35CmVEvj1YhCqK3nu5omdRCKXebcyE",
  "key13": "23rKPrUzEq9ZezcVYGciB1kz6aCvvoj95sktbVRPoP9WjPy3bVHRHvWuUBxy9Ps5B6GXBYT9o8pcQ9L4ndZoyGEk",
  "key14": "fKHCYEbdWhVqrUwzCS2Qd7vXZkUWyxecaiS5DEgJ4LWLyX3iy9Rgio2qRDgvCzWamDkgCFyNg697Gf9biKWPkgG",
  "key15": "5uXt1Z6u9VhojbKYyjiYeLoPD4uHJwMraDpfDGbQfyST2eQfy5SXM3bSgfuZQHB844pexvK1ZQLuZWjsG7Fvoc71",
  "key16": "54Uwe9P1CDXCw5YfbfywDEqpLqvunyb32XAyLrpF2aS9jwyhNFhG58ytP6PTsxKVJk7tcBua691FLj3hgqPd3mXG",
  "key17": "2fdGSWgx46BVs3hPPPwDC9gTz2Gzdsy4b2Zx5zET6REzhGVWJYAcK9Ypxmxx7xJFLPweqCeNrKPWghW1TPf8VyMo",
  "key18": "5rJCRMSkKU31BuB8iMGBQHvY3YPgyDsTC1JHurZmK2Kha7fZTmFvCj6rUj7FRoeFhvTNpyScgxxFgZ4Qc6obLLtE",
  "key19": "67YhagRPi49BkJQyGLLrApyer2SUBTQmEVm2cNyUwX7HWAweAMSSdYmkik8HJGgrPoeajGu3FHcKid2RsXC9Eu3H",
  "key20": "4WEg51Xm6771rRuNHDRSikZsrEo9j35uaFfHCYkY85cTdndjasJVjPMGA14Mm4kQPcDP3YJKDX7Jr79QtvoB8ZiZ",
  "key21": "2XddHfmPi8iAhtcGPZ7kZnUAaTP5FkRXRU1VN9tvkkjf4URoQGi6sQASpLvWmvCWiUqHEnSgc198a5wtVFBpVPBx",
  "key22": "2sJ6iNaQPqobffVT47jgxxdEckCXV9G3WB2HuhAx9iCd7hFmWUx4AmJAtUTeBHDhCUEaBHXtVRMSTmD57xJC3BpD",
  "key23": "rmCwijxSKoMZXSkhCk9J7giR1KjWp9A2ihcEH5sMo3NAuzwP8QwoHpZUm4qruQvMsuu2wgJqycD5gp4EFt2F3NP",
  "key24": "3hdbzMoya9tKHkoPyUznTdPXgTTNSAuCeKrY1n6MFbV87ZCZXC3Qv2Wopwm4TqjeXo4Kq1ugJ2jjRg3eMYAyG3s2",
  "key25": "2mfJK8jKmbkuBSUwJLy3jqzWreD4rvurpdsVGHW7uRkDvoH92gPqV466JpYxjsiHDXLiD9XbjSygmWBFNtyuVq65",
  "key26": "3sr9kBNubUDcWD5S9BBCBoCk3mNgJ32GUQm4KMzH9e2dURTEXMpKMYAMxHDh3omqY7Gkk3cmtn1T4dRA3SVeAn5n",
  "key27": "5bVhvesgAaFdupNFZ3i2dZitbs7NRrN7tvUx75xfM82NcwTTUbNq1oZeZmFoAnsih9ceY9mvTN5cXGjyhP2qMPEs",
  "key28": "acmZYKoxeeRS4FkC2Z6YDZ6NipdxyHqemHF6guFRbNfcy1hDKxvc22pMqTvHAKJS2yaxMd8Cuz7RiM4EXjecv6w",
  "key29": "4dBuGN9A5WwkcbTGJPX3Z4Vzq5ZtYU1ruekAffbPesAfM8qQ9xg616Tvc9qzuMe7jsGyFq27o29T5m9cvPGV1cxF",
  "key30": "3YNwj1j9ko97WbobJ5JyQeeVbDPRZDq44Yjoug4qdtL7ca6C4CXoTCqVBhbK3g5deDNTQ1ydwUaYgzup8L5ivMG1",
  "key31": "4CLjPHk3NXQA9713nDGSMnXA1AypHUZg8t25PJHSw6emXMnCmmd1185HGyCnR2ttihtoiZpugfqughRtNeWo9DQC",
  "key32": "97ELkPgoNYRDdVmSbb77KnSuUXQa5yCQYgMa3RTNKvEg51H82qEyKxwJbAEMhmK46W1HkcgXSWrBbkDUBqDUrVB",
  "key33": "z2N6BfSdKW7eWSJuRLp7QKhdcn84rKSrcMqwBXnf8PHzrFBeRX8MJ9JvosuTwE85Js6634bhB9B2t4Mkto6o99H",
  "key34": "3Pg8wkhaHGahmUsAFRmyTN91Cc5B12Ho9ZVZVS8RpLEpN5hYUZCQChBhpqpCCLJ22UkVeFD85mrp9oXAdj5piGco",
  "key35": "WwS2o2PL2eZ34hPKRj6L2FTDrPYixGAqs5fr1518tjGY3bRr44nNmXeqJuiPgowAfK7aZ489KKJCj2p8qw9R7Gv",
  "key36": "3H9qCHSia4NqG5MJqSECHxCbtRcSsz6cPSDQASev6yfi4Y2KX7uAej6r7iZHZ4eHCBLU9H6reKavkHxs8euLD7nn",
  "key37": "DPHbPdD3sdWfrNDWzVXA1GYrdEJsCzgATb4GMJ5T547GXRXC8LNgmQARkU4aYfhHV2b3j8uUt695EPBQ8BGiLiy",
  "key38": "YE4M7dMhtAoz7xBSN9W1YHy9zAmKJUtPJ4JNJSM7TeQk3HEHVEDGsPTZa8TaURoeT748pxoYwA5PUGtuRopeffY",
  "key39": "5Jt7P9Ht2SG6PVQKv5Wo8UhBmYf7Lf1PoeVGzvainu958gjtW46DF949uPNa4E8CAEosHskUJZNf3oQ7PM8AqFYR",
  "key40": "26pnbjhCjjZLpChp6fyKnpAmUUwNecMGW8e4m8gdsgtmMYZerEgHeFEcne1Hf8cHvfBQ976U1n1Sd3d8QHbmx7tU",
  "key41": "c55tjBteERs6CN5xhDJNAP2jVfiTokJUDrfcEccd1TonKASrhbNbtF9pvNHMN5C12Yf1zopFcHjQKJDTT89VayX",
  "key42": "F9CRWKcU7fWDvtYpZpkT8JgGWNW1saiJ2Mb6Yvya2ntfEiU2RGxERwabCqAWuYyQj5yGuJk9kFPGM25HUsarPex",
  "key43": "5mnMWgcUKaGENMFtUHL3MeS5oFKRhMd7mjx36xkVjp6m7A2yZiqmpAubLBBy9fpk2hgGsX4N45dWfyL7hP8JR5Zh"
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
