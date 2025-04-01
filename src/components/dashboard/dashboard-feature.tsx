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
    "6rXKJRTfbEfMiC5kESokpp7MZQoXf7Zy66EJeHNa9RuPsBezqHBKkxHWm76EcHGN1eMjdiYPQTd6RaBMNvSgsx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AL3hvUyvT4SPChrk3qycc4zJJWN7H9y2VAp6Nn4uueSWWhfqW5289SEzw1fvezvaTKZzEWfYswWDvzWMPLVpyJQ",
  "key1": "2BUHoZAFvwHjrzuu4hVPryo4fGct2SvvqZW8Ea8pKdkSuPfa3fmoCAFhuJipteGN2MfaouKmW6Cb4a39v34Gn9M8",
  "key2": "2iFNZ1T3tqm9Vtfm7dhDmqmpb6ifqurTuQmRtDnJwNtKLCn6NATMM32TX4p1FAfxj9d4gLqoZ6p1RgHaZYg545UQ",
  "key3": "5AjrUK21C4Uv6NZGnNg6qzrUzcc4fmKBfSr1xUKFBPXD9imsQciDKxdDzjv8p52ZtJwyubFUZmtX8NXBCBSD3DXQ",
  "key4": "4dxymhtcvwKvtkwrc2e7WGeSBzR8Wvy9QJa16WfbgH38tc4kv4G2m8wrsUtGDWodTdQdrxMvd2pm1pmLWMCRzoMo",
  "key5": "47wjx5bdnN2dDBjewFNTQDGXboAPt1Ft2MNYftgZFSBWGrAj4zW3tdvZXYfSt8yrMrAEgqxRXLMrHLGN1qASLA8k",
  "key6": "5tFtRT1B7jNJD4NA6f4VRjXVqmACsmkRT96nQU6Ffjq3EEKffPaKdBowrh8S9SmQWrxLRX1ay2fSDJQeWbdrR7jq",
  "key7": "3GKK9YG8sjpcMk1q9oD6GeYB7VGad9RFKpHWQfAQgYntjLaMmRQ1epss3HRQsd2vNxVR4zvvBNhv2DcMAA26FyRM",
  "key8": "23qnfE1ZHppBnEDBDvArX4mfN843eqzix3pmpAtLJcY2WkWfZcZoLZXFvB7k8kxtrRNcWib4LsZ3NkrRHZG9YRCU",
  "key9": "4cBggWgZErA76nBKLdtaRNKxjPVK1kyg5BZ3dbH89tW9aBMKsmMhThEsKvXDjGzsbGUDzT52Qb9ubGvCpXRp42ZD",
  "key10": "5hqktfRLjDHS28LXU46d21MjBdcrETSTyxMw1YeztLM3WbPz9TyUoKS3DQLFSExyy1hGSUXGSZUKjvDCQqTmrH1M",
  "key11": "5QGacPNL2mHk4zkMVRvL1foVYo6qthvqfBZ3pKGcCtJ37rfix1m2pBb3bUEZ8VvMoBQswtGE1pj917zeSyave98m",
  "key12": "3KNebzpSvWkVvDrgDtkp1YKA8qRdHhD4G7xV1WDju8tRApYSHSRmvbe5pcwB2nfDEKCBjsKHWYsmE2rNzNphPJhK",
  "key13": "5HENenPr8poXXFRwBNxcJPPBivtRnHHAjHf5y1reWKf6bSv8xPCm9VFPPf9Y9m3QBZzcLChzmmDEQuEGowsswZp",
  "key14": "5pkYHnqgixREjrnurtsZwdig1LRzxALEVavSCdo1GtrHCjfH7KNm5raZytwyDgvfjjVL6GQAws8J627pFV6oQtdo",
  "key15": "4kQJ1jfFRcsgf9VHePjgnHdpdXAFe63nzdGFk3AYbKSBxV1BRtJ3YXCGWsWDu95zFenrsLYyf9MiMdKhvoNJAxHY",
  "key16": "2ddmF5NtJdy5Hq9zjzrEUv1HD35NyFMzGb3cN5CFjv2YpXB15Ys4ZPM4Bf89Gh9nGdHYHP2aeFnGCL1mkhNt3ZBc",
  "key17": "43vPThoq6xgd4DdFjt8n1WtyMN9MYHqYhtZHYkKJeZs8Y9vSVbyKYyLK9kgn4w5FWeLPAuct37gQKZybchsGbPcx",
  "key18": "QTxyRK9NVCgAygoHM5Rv6ufptk8BFut6eXjWvwqqpsb76cfbMke2YQF9xm1xBvKx3V6Zy6bd7oPWYugfS8ZMvwi",
  "key19": "5hmM38We8QCq4D8oZoikqaYiQvpikdVrgJHyn6KDoD9vcZwd5Bxx5Wi2H6Wtk5EWoJqYnxYSbPKkBPxeoG1LST2H",
  "key20": "4jaam4ULz3X8Ry8na8D7xBGmJYCgP57qc7HvBqSU6wkfz2mTanqGEZ1UbDqiBdHnAQy64i5MNFhrNaNzXXJagpof",
  "key21": "Ap1How6L1XoMuJGUBTPaNMrrgUQnuzygJrAFM3Liagy8CVWN8wSbyiwRnm83jP4GmDy8vZSbpPnXWuKqJGkx5vg",
  "key22": "339QmK1JJnfxf9XEVyQXZiLYvPHW3q6hYAxVm1vqd8FxLsjB6qscALUSWCQ7UpkZcQBdfoYXQjTUv35D929T7g36",
  "key23": "5sVUUdcxw22hmLFvHXcuk6bRKEiqrgNxyc3oFqz24SB2GrzsL5tHuxf9VuAzQ5tBuR2V2khEqgYr6tHYjrNGUC2d",
  "key24": "4g4vTbRcYvVZj29hgro7yfscH1a5yjVQn126fiPDrNxNr3j2oYwzwZG4qXosGCNsBLyP5QfycyaYs3QwE42AcbVv",
  "key25": "3L5rzsn6MH4fjtWswBP4Z27L3A2xykKgCSZP8VkT6d3hynTaWwCZcHFVAepeFdAs8eCBMuFJ78xW1d2rVRu17hna",
  "key26": "2ewyHrxsDiKSmsSCgsx8uGpCLxjjSVSvSbbuYUGUAqbX9DUXFURnZyFXHL9Niit7BfxU8pqbw359msrjSeU6xdPJ",
  "key27": "foxHXvUzUk63a1xpfMGiB18AW8SWyBARrU4bnTSUcYZhdGB2u4SmMACcV3Kcn14r8wGWcG8cRKLad7DqtsWe3vE",
  "key28": "4VNHRqQooRMhDw2yzwFKsArWXwp5GCiq4STJBo8s8Wk27TMJrxEFhPTViFVphN8cHUrnuEsVprTivjhwxeM39Qdw",
  "key29": "39tEifvovWkF5Md2KdkaPk4WE7bXgdUAbEANaW4JvFPcsQyGYJsJQ8bsiAAah9Qbu2xXRh2xo1J7pe85UoPLjZk4",
  "key30": "4sbF4oTxuAom7imdrRH6PpJnpTSrN8HgzwtYxtQMHFjmEh9op7BKEq2MpA8vMM86PuSFUsRPzJhxqGYEyFNRoAfB",
  "key31": "3CswUnjTiU9wC1t2TV7sdUEZbNB2FUFeb82qwcUAiqoBSM4v8B3egNUSEeUdTFNV1VyuDBoa6GPD9xRN4eKkeJat",
  "key32": "VxD1WNEzLz7jdZUG7pVV9ThMPLgJNo1jH936WKjGMi3rwijskLa9UqP7JSqP6FX3zpwRkmykh7187iAUNmLe9hR",
  "key33": "251uUUgyvpGnNe79F6v3EYvMM24fkX19iq65fNEzDdjcbgr8hq7p2XC2rHZEymZ4Ak85ADKynr4seJhWCBphaee4"
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
