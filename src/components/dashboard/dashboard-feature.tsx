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
    "ZYAKY8g9nUNuroS5csqxaHqD1g66p4EY2ca5TvGvyApU7HRo6E2TcyaP8WLBzhAXKkaiGJytYkn5r9dnxCUx6a3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nMxZnsRNYpXvSbiJ1rB7R8HW48NH5pRcis3FxP98tR81S1e9tgwPVGLRHbQK8YXNeQwYAcmKHLaiGfGKeCqzJFj",
  "key1": "5WGNqZDmYmRCLzCdX4gQhMfBn5fXTLtkjDnYtdFpfkVvbH6jrTxh68EMBHpNCxijUYTrCgGGzjhSowgBQt3Po5kJ",
  "key2": "3dFr2RCsX2e813uUjKPZKHZhHegBEdFia4pjpEbYo5N5Gem8KMDBFYXNt7PTxNeHv3Rh9bxLMmVPo6Q3AJDeMKk2",
  "key3": "5SuQh9CPhdpn5q3zGFgLiQEHeGW6BgCd4U9G5UXzMp1UMx1e3EXcixSbt79MLe9NrJWvhtAF8YAw2veBFoo7MGw6",
  "key4": "2ETXZn2ahYomT5FYx6aLuaoXQMVh1uRSB5DyYc52NxsPS9Mfniim5VJQ5cb6aCXBoH3959MwU5A3PHcWRR2d5gM5",
  "key5": "2JXkY8PUsPmHEf4FZBuBdKJXUWdkCNFQJD6c3MapVRyU9FGu1FeKV2d7VpnPczBMgA9EYtughbCgNXwbvpQPKrnj",
  "key6": "4r5eiybAARBb1MbX3fZ1HXVpuSza2kYoz3oBwBZfJ5v3XpRW11yRKK9u3D24m7CxYQXTGH18m7rkRhrrVLQ1xrx5",
  "key7": "4tm2phBnsaTB2u7dHa7ymfeEcKCxzm8G4Q4H7xJzAtmaZucBVNEZub8B58eyf2ogjxcfyEq1Jx4ZCSpDm5yKqHXa",
  "key8": "5vLTpDKYXS3PMPWmadVNyQ9g1oZ4PXUnYeFccn6fjmKhuTs4LJxGWdkEMamWSpoud5u48ZTue59VpC1qMdGFoEW7",
  "key9": "5EU2GXVYNWBSbR52d1mMr5TC4Et9jRKW22rmqe8a2jPPkB8MyTZ6LLtzpwnqPWJpc5EpyXwn9ZWLT2Lbgd79ykoi",
  "key10": "5Lt7jP3rdodQpV3ZtdQmcPwnJf9nxY4cSmF2K8aiLuTyKKULSJpYjoorU5w3oWqwodFkNk5ijEfYDvMDxFwa5YYy",
  "key11": "21phuKaguEqt1zAu6sfPesH6mDkDqLirErDCz6ybTycnpkm27tc56rjcqd5dHGSjb9VFKRRpfGVNuXTVU78YNCER",
  "key12": "2TjoyP5oohPsxfgNP9Pgvps1YdfXkZ4y1tdCGCxvQvyYnK9uJyX4yWUbfDVqx3krYRxHuWV1PxXuqWpBxT84RdQ",
  "key13": "5zc3CTwmZMVSqNoS1AzfxmGVej169pSADKF6CNERU2MWrrBiCjYYTGMg3bb1VSUufRpyq6yheixRiRJuc7nsecqW",
  "key14": "3Mh1jmERBsv8tWx13zURinmuyD3iEaXnMhX3tVsLDK6QrYXGHCPTtjqbyGJEuqaa3eDZFoVEtwFjf9UtnoHYxt8C",
  "key15": "22FRZXK6fZgxLmvSXiTSoJqyPYajjjNPwHQk2hwTA1BZfSME38APSD9Bn8Avngw7hxcDDHbpwrTWusbD5Aaay6RJ",
  "key16": "3282TgCw1uLhYmBjpnKHs1KBA1DxgEijNj71pv6ZTBMzabxWyLuhM7pk58mFwWC3PacJwpmj1ApRWExtx3aw5hAX",
  "key17": "5oMLejcmjQvjxnFX2aPFuXYYwqecgQ9niWGLB34UeG8NzK7JRsVUGgAsSdwZzCDYHbPep5R2FTH59crDdjsKH8cZ",
  "key18": "5DYf24UuFhsaKetN6ndnp44LqyN6qpZjMYNHeSrupCV9K43GTUygZHwFBTBXPB9jqBtgLNCCqohBaF8fyrhUxkz4",
  "key19": "2g3hhyyYiPrjTVqPZWepLWB6McG32F67GvLT4z3AdsAGFK8QXBcrfFVWSgqvAGLYn1abGTF71dFfyBcY2uu55hjL",
  "key20": "2GmDDBaZYjNFCQbvGmcsnVRWzhNFQuvC5t6VSD3NY6DAWYuDActRo5ue8NambKkrMBdVXQHxbzp1WEYWboWZW9pV",
  "key21": "36a293dha8uoAs2fj8ShY7EyMs781DYBHENq89MvrGRVuS69f29kwYVDQtkcnvXCPTtGsqN4F732cfgh4o7vRXFy",
  "key22": "367SrrAtGGyGrtBfEfTogHJipmb1QXYfdkhZvjtNQciFm67g6yNsob16zXq8VLiiXKMXcz4mAN124UHo2r7MKj19",
  "key23": "2EGkVkoXjVcHinfLqcqy9RExqjTWCUJfwPeXBTrcZVoFmoF65NuUwPpL6hYtDYkLvoz2SKXsiuDpQiJwUwFLA3fp",
  "key24": "4pPxK64ef65k8GnZPZTG6hoQGLDczFfNjZ2jMhjEZFw9xi4uKNisPXrky1PqfSxYBiQgpgbTUMr9isp2Qh9aEJb7",
  "key25": "2DfJMASKEk6voNCidmSTYdZ6LtSj4tkkaVtu6smfBy21h4yzH5ApEhTMzVDEUFv5kwSyyM6fNoDW8LX6Dcws9mjb",
  "key26": "4KmoQhMrJ51Taod6WgieWbU4VPuGRbtZXb556vefT7bsvoxEPSzYSHvSYLhH4MUJhcq6QQYbpQLaqA9xPBiApGpm",
  "key27": "2g8yURwdq27qfgCRJb2wCL8S4aokg8pn96EWdhz4t6WZ92S1kuPjUNGgifLLWpfsZNjmyJbLs3fEmEVn3QbxC1HV",
  "key28": "2zbZeumrrZvTRgeXwnvN73PHYeyFS9GFGavjXkB7A1g5wCyEbx1aHyBjFp2fGFuSJToKq6NNNvHyeifWpB9tU9Uv",
  "key29": "5JZTtttmEnFgxfSTtRCAEVotN2wVPQBAydcVqJ5CXZo8BumKiFprCs8XrAyDxBaRfqudqvL1kXt7qEjTfWSGq7H8",
  "key30": "5VrGmtP6YpGnPrWaBbVGhbve3MMeACEhCGSZAvrSNkLdrXDQRVFuLcXSadpP8H9cefUwLuKVpDGoyU96PpQa3Z5k",
  "key31": "qczZXwEkLsfZ7stUghVEChQynnoLWfqBUDdnapncCURwpfndnBHQS4AXu8cNkdnWdaYgocaMB3xCePgvfwWwkhn",
  "key32": "3s1yLm5i3ah7rMxeCtReHSuFRXs7cZKG8kxsdHvr68Qwj4wsLdyeEPDfU2RdqfefTahNtkSG6XLncgFJMwpmgEDs",
  "key33": "3DCLvCM5d4WbWA8otu78JvLtCsRqGqLRW4ikrz839V8nfA6Mfkmxi55zTyB8BexMbKWNj4MEsxbhtDkNf2LP3M1o",
  "key34": "x8tra2yPJUz8WUGyQM63LLYpYfC1d5QB12JP1BrFNBA3tp6oQxEc5hp9TbNfcMNrVwN7mQM4AxcPibVZa9YGTNW",
  "key35": "5yGpkfFc8hUAPuF7WTwMKqiBTw9LHMQeBtH6DB6AWCe3YTvNZyKpcanh5zy5LM4jr3AjHfhaYK32aY9S5GRgHwkB"
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
