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
    "3zEVJ5tfjiNj3fijwEXQgMoQ8wSPbfnbWwbhdS3bDXkUyJKdSTt22JhDbBTb1XYxwYYRHaMxFYiF3Ce6a4pGyCWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uK3viWu3ACuEpZe2YjgsrgkgK9pUMN9v2vRYYjHoB8gRnz3ESnSwTAc5AvuUs3zo7VUC7MBpYV32B92w8uj7j8P",
  "key1": "4Vb3CPoU9N91Jx4E1igyFm2NkZmyZULL7Z2vBUE1uKS4pJrH6VKYRSbZiEUpbAUYNctUNohaSWJVgbNLe7XwLvVB",
  "key2": "2repPzBMj72YB8E5Jk7ejWEjCHfxc9ytEqwsKEMRDCsLnZUTL9KTNPuQv533gxTSakYomcEHXs5EM9w5YGV3oy1h",
  "key3": "3MiM6m6tfyVg1E5EPgzp3yjou7tUigQoBSDUTQGs58Evtn7Pzys1bHWehmJ8YSoRXtrgKWV6XhzxF3uqGDu2xBwE",
  "key4": "2DqSfMNeRzaAPyjuUMemDPENHziLULSbF2vQTSE9f8ShwTmC4njjnDnAZDCms4gD5CSAKcyX7BgdCfgaHxXe4NJ5",
  "key5": "4xy8a5psoQVtDUHyBVsZusVX8hyn4YrS5KUbBdUvaqhN5JsU3ZwfLv8NWfLn9Vj1y5vw4gnniy2BfhcsVLfnFJJ5",
  "key6": "4oUigQhawn7G87eEZfScZDngHjzaMXf6oo84Jjc635dKx7VH5PPGbydV634b7X8XjQHVXyZXnV6SFFzHLNyHYUNo",
  "key7": "3A9xxfbtTP165EJDuYZN23xThDZn64rFEedfNQZaFcabTsMs1jVFop8oR62zEFLNVZi3eVqm2Wr9e2vQDc9a98RK",
  "key8": "qGojYagsmXqjy6Yc1hpz1fkri2b3WdVD7Fw1aF8JnMiukCTEEsaocoXv1dqd3mZr4rHroQDMqT2JxFMZUFMZygH",
  "key9": "2FYdodosNuMVaPE5fWY2GVbzPXdQorP2ayYbPdg3YbY5Z5r3REETemgJXzjW4wtmH71njDBuUuPkH479bHsJWcZw",
  "key10": "4yyTjuzSJVuK1C7yyYG49DqpqPERDo5RozXR9r7nrRfLDgZBCE3Npak7AFTsBmifux5qaHM5ZDYf7mw2WbPHmdjB",
  "key11": "2jtoLWfZZqMTy4acUH2MbS8ADuJc9Ep3EKh9HC9qz3HeXTvN7yiV9pBEHikL5LNERbAPf7KBZmkDBv4pbwjN44te",
  "key12": "3kVXDdjtBwzcuMuTrztPGJYkJ2Tx56BEWLFvHscGBL71PgDJ3yg3iQ9HBFkbNNMJsfsDiC5XUGuRtAnCRgE6uury",
  "key13": "26cpU3hjtdRnEEpc3c6jqqr6Ti2yopReK8gp2fhfzfPCUdPrbEbdwoA7k1y9KeRwyPZAvFx6DwE3ENfyNCJL5WMh",
  "key14": "qHkoUZF5pmynh8BgfpJtSnEXhNR6rBFsLKZ2v7pXuKLateeF3eNowfzmfQLCAyFvXUpqjhyqsAZ3ovZxLpL4K1p",
  "key15": "3aFHT59fVKxkzBCJk5hmYbpAkLQYiBxTeZC7tYdLP8gZLYZ6KUGLyh6LYnaEikYdKAhoKWEb2AhDbZRJLgkURNGt",
  "key16": "B2ZZfZwDya9xQYw84a5JWNTVcSKtxoKQwBTfydauonnB1D2L2HQQC2zVLEJ8bhNsMQGhbY434JBwLFxMn2cWMTH",
  "key17": "5msahW1aFzYiQLgsXoXNBm43WUpKCZ2KjvPXTbUryEjLhb1zpyfiV25cKHB6seHoWKrw7ANbvsVGh68jLonyU5L6",
  "key18": "2gAqRHKRoTBUL3Pq8R6KFYNvoBUELcGjr5Zd5P18TQ7HpMifXtraG9uqVQWN2gWgdN4uzTHoWfKyd6gg62CN2kkw",
  "key19": "2ZeyejmHFNyHQTsJT1ToMwCnjXAJcTjLUhKC6eFuMMZTZJMGPM6wbT8AwKnbAM7gZ2R7bMVXmPEw9gYe1pftCdsq",
  "key20": "3xUQUh3EnsuZdvHTrr9NCm6WFVqdwDYjdjFYZwiT6tMFTqqD1Bww1kER8mj4yhjk2BLwpnhvh7doAKX8eAnLQj3P",
  "key21": "5u3s7uNsGpiDt1mrU52khEsWvDrmqJkapD98UCSLf5YFsMViNfikEoUor8faV1xFknWC3Cgz6DBMqZiyBUe63G5K",
  "key22": "3GWUK3YjZ2vqJjYxQZySrgpSk2fcWDpf6KqRWo1QWcucexyhTpGJiYvS34ktH8UeTWGj6LNDDwJKWwKaromLs2K6",
  "key23": "3cKRxyfZZbrqHRbfCE5ZszjHnBUbwUgVv7XBicoh7fjWGx6yenkybiJXJJB75yDZc23v3yahfMBPLALCuaGEk2Ck",
  "key24": "66g9Xi3BU4LTuo6fRSJrMoapApuA73pToLVTN8gdkPCaL3AvwwdchVE2uVdihqJ9kz5bww77CSYYp3XXAXUpxR1S",
  "key25": "2ajeCa1PwWi1DTypJq7uafR1Q9rb7GD369mVXBU7giDNgp9t9mCFEPiHJC4VQQfW3ukXxcCmdNDVdL75dhRDWrFe",
  "key26": "28Du1RSQLsHL77dbEAxD3yiZmK3mLWjwNAHY1mXNDCLSaTr8JLiXqqeSpjiQhp7imBJaQXrNu7HqkTtEETCPcH2n",
  "key27": "5e1v7RoRptq9VJRGLnxuYiJ41hnSdWvoj3vggcrd5i4pzggZYhipBRVAu7MMkpwkbyqLDrCyf6S1wnJs1QPyAUXx",
  "key28": "3mY2XRuJDGE7PUSmU9ayoLBG43KjP72QeH5aqWKem2DQyoWemhrtBfsZ5obQGABtm3j2bhZ7qpSegbbmW1C7mWZt",
  "key29": "4KuUVJG49KzQVXDUzk62WkvJyggUNx4Bbp3n2gbhAfhrwUQd9GvF8x8tGNKk6TjM4eEizULfL89jYCdwdziniKPk",
  "key30": "2M3zAGPDVXW18p4yNBxBLoYn6SQd5eEaGJ2miHPRJEhwbX6YfwzyBDnEUzF8K3iSPXcWewgeLKgPuErJKrSPBdH2",
  "key31": "3DpzpeZUxnoEhxNHFmHrvfWfXr4Tef9KnoosF78g7SwyqnCTbjWAdKg22tRK7tpnKBCeQpN2Nx8QagnUCYYCFgkb",
  "key32": "4x6cjPB6e3xnXtRW7z1nHdqZ3fhP54cG1qGduSHuQkx9uAYBuJhqf6KpwhF481RgCK47qh6iBAE4QTyz4zYTJjuV",
  "key33": "2euYnJEJf4iU2ypQnBvNKSn6cmFLiRvXRuaPdLLPm9eQTWrFrxx7yJBUEAhjyRBBQee9iH9FH8yW5DwqFspbWQbh",
  "key34": "usgqW24DDBJNLGHXbsR2DmGKp9dzmXMwtSwv5BCN8nY7hpZBmRZUTDCDXz9rZsB2REY213kNfwDrCKV5sDfKCWg",
  "key35": "5FC1QSR9wTQFKftL8HdehpB4G6pnAqWoG31Dox5WuMRMhUWtb3tFT8cTT8GDEeRJCcsL6arxGq1iddyzi7rR6Yfq",
  "key36": "4F1j2E1Bx8h51S4sw9mnvYEhNojjdgyHQ6fnz3sTSn9rxs24UQM8EiCDytCgzQQ8pcM478GpN3JjqWR8EGRGaddX",
  "key37": "2H3zhGkChrVx3ZVxtjAG8UuScdtFAFCRBadJoqKnmeeU2iSPZYr5XNASVHywsBdVx5EQHAmCq5sz1bagk14fg7Jf",
  "key38": "3iR9vQB9yC7EogKXRdrnexC3St9hiGDDdkZmy2MVomjN77ZqhquUNi3sVXSsYxEAXT4X9zxnzwJQ8oq3hwYNgVXJ",
  "key39": "Cg3qvNbxxZ1KdTEDhNJXKdxisYVVkST2Jepe1kGKdgmxJadG5vkQygGXRLw3J2NXvNwhpvGh1RzH4zGpLNUUps2",
  "key40": "Ycg6nLP8eBkeoY5J66fz6FAJpkrw39LLuyqwDK5aS59xeiV4ER7oeoaHjMR4aYpEETXRAvBUgjuXGus1njj6QvT",
  "key41": "2BajxrPdPYDhvVUfsCpUmAkkH6BRHQUQQj2krLrfsfGiHSUytE7hhAWaHxcJQTTWZsTNH5rGqNzD32NnswzEx8Pi",
  "key42": "3osTWt1JxnQRxDPzAAzvYtPDomHJC5WRhFZJBvaUdeFswDP6FaorD2g6EtP6Ee4jW3a4X6CfpjDFoQoXVJSHwkqg",
  "key43": "2YYijSGvZNe3jjCSsHU9nMXKAcUkKarqbwmFHHq54NGpTEusCcdJZevHSbUKi9mWT1wwfB8SkweY1R7RNE2VXYRZ",
  "key44": "5pbgjCTJ9FskpNzLRHvq4NSzSUsHx7FpssNSrFFSE8VDwN3nnVXFKQFV87m2jmM2McWNuiHdBP7indDBVjyonmaQ",
  "key45": "5RmNPpVpA4CZjQnKdACsUSSPb1thsQ3jbZNHa1azoo3ZHMGRN8qDTkCz9EqBSbFjCwVfJWAxFZmerxbFcJ1QQeqQ"
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
