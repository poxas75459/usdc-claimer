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
    "65xqb6bV4tq51YGvwZWgSXRkjrUbeZH7TkVBTXvrV4wRCu3MKh8f4JVkK3H25saAeYmBqvka9FfLNJTyYo4GeqG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XcVuA74qfaH7AcLCCHbz3ot3isTwyJauugVYF3qxCQAZ9tnHzn69pQBam5Ao83sSe6v3xGNNp36AF6xgBbmKk8",
  "key1": "3V6Bhd4GoRzrBhrAzG61Q5Djwx8sdmuKa5GEcRS1aQ47GyRz5uwDXP3HWtZnkFeAam7HA6gNMxQ86Z4D1FXuxzZ2",
  "key2": "2PkJZWronWerPQm8G5wZr5FPcuDDhDRcyHfD1AjBn9z9EwcMKhq1McCjoRTDE6eenVRJLWuNCG3wG5pvDiutewAd",
  "key3": "FGew7pk3Cexe34ZF7cuPtTe5V7jrx6Uo4sxFCnLGQ2zWJzrYrjuC2WdcBfGq7rHxfpFQPtSfbKXPhsNhVJsdF7L",
  "key4": "3muA2UHD6oNqptEmZ4VxwJ5d5fh1HxiQPHNDZzR4mXk44qgsA43Lk1Gq8bNYTBwF8C5cXbkfTrzcrJMwr6VNddCV",
  "key5": "2zx4ex2V6ud7Qv2oR1UdAFnvKsMSYnfDpFRGjSnqa89cLhogcrctQN92uEorrvgjpyg3yPVkxspSWoNLmbijBYwK",
  "key6": "5i4v5cMSs9cfGox1egnVyMz6aZiNFAEozRESHvo3ygpR7hiBv7WvXhgMxkYKKT7iq7WTCa6n15wMruhDhQUTDewJ",
  "key7": "iMDwWM9geyi3DiCqRvV4BemG2izVD9FB2NfnxRzbxseABHZgM7uedU4rgG5eCuYeysGfRmHF1zS2deJQUYyjdks",
  "key8": "2jaeS2JBF6cCTAoezrbHakrc5Hs8M3hqdfRJgBGDL8e9196t6HNdnHCXsXk3iLNmGYYsh7GnpuAv24SwsUWguFN3",
  "key9": "2v5upBGah7ww5Kgi6SzyapAdaPYW97wYtWYkVxpAXSjkd1o8dZgBhZAohJiD6h9STKnbVCWraF6RufLe4jkZc33T",
  "key10": "3tFpdjRWK64zZEAzGkPRQR9CvziGM9CtUs9GEWdP6Ld8WBViggdYqHBXaYCG5VjYYMwuF6Ww8XnzD5j5pMbyKesw",
  "key11": "2LBNWt2NkbKFnGja9k667kpnsZzV7VrffrLxjbPCFjPuQmCWx34kiMFGtBvpUaKLZKcXAiDgefMVK76QVyBCqrPT",
  "key12": "5vR6zixGPecXugsbM7mD3qXtWQ1ErFSeYDegMgWzhFkGujC7J4hSTRpwJiDDB9MVKVpZ5NembA9pM3955FYAiwjw",
  "key13": "gbCmvnEoSo2bVM39UBmQSarTGu69qFFjwrkoT32yu6pEvwwpmyHUywqMzJysJKFJa8wjez4HnB3RhMVJn2psFZM",
  "key14": "29eJmXZQvSyurhUN3eZSHQQzAyeFSzAopx6JrVmDpQYmUrJBXX1C4hbDcZxK3WwuWB4ThSXNkDY9gixrVsphkXLf",
  "key15": "2uSLb7xzkLYjnCzgrV5GUnmstx9kwuKwPMPSjbmhcaoTpzrKSrhXb3y9kFqUT2FUjuRbYhRXe9PS9Ezibx3iVLGR",
  "key16": "3PeZ5xjGMKt7hq5RkMz4ieJfTd3CPtx6k9Tqy2WZf1C3H5T9vjTtDmR68QZ2M1bYSJSRPE1qf96XDXp9Sh1AKLii",
  "key17": "2EQHW5AfiNx9sT6BYbvkrT5axJs2HiFX9stgd8TnmSsydHiUiPt3mUFZGmiVDLvcb17dyso5nNiHnkhpTDeNTidw",
  "key18": "58gjZ49hRyPazajUVyR1iLH7VmeEcaKj7BsJe2BRfKKnbKyLYiMMvDbeKH7tkMCBq5WfDqc6jSuGyER2f8eKakNc",
  "key19": "4i5mWt6ut8pUfPxaGg4MJomdLSBEqNfRKnqNcBsDpKdoi2VRxFBT6X1z8iaq4wjgQqAy2bPAzVbG3hwSLVAq4HgE",
  "key20": "3QMDiuL6xp6X93Qa9o7cCWFJbpgoKdUxVTuzapKSpBqhQJ1pDLfjzEUjgFc9hZCHMfTN81RZch7B7DDCrmnhYjf5",
  "key21": "4BnSSzJW97XAN754YigMMJWKwR1qKeYBozt2MXmzMnx9UnGV3raDbvmtSV2ZoSexWDHuJNEMq4a6YuKZD6ub4ktX",
  "key22": "2BWidwBpy9Vwu99Ttom8Lw18FbyHQ9sjZgnyyugruif7VBcCY44nd9xkP2KJD1MYvpDhWcKyXcQzGkVwbQ5uFLSa",
  "key23": "2hCtytvs8Z7ccoUh4mScNdYtVBmh8eUzGwXrRZDoFE8nTGsd1pPyRrPcU4j4F4p8ZPhKzNC6m3We9cjnXUuvdTm9",
  "key24": "4dj6f6fYFShvYcKxWJjNNcVku5w2kKSHnHZMByXVaKa49HbAZCsmNHJQmQ9TbMjUZHA8ptxBgHXhkR6ECTVDNuih",
  "key25": "3DmsdPq2xLMAkySFoPd4aLwQdKiJEZqqLQLZUGk3tRK8iWEnHmHCZTjjTsEX4R6dWena1UizqmELgETeMgLgJNrg",
  "key26": "H3dseQ6Ex7cUZZPLsNqfE2bcQfy3jX2Bn6eSnZNsnDG8m78Dmci14sd2nmCouBurm31iQg3VmbxkroPAxNFHnDQ",
  "key27": "72HESBnQoC6UduXnsBE7c9W31cVpcxPv6SDVwLDttbQczPnfhBHk4hYzcD1ZNCEbA46WCSRti7Fxkt2sFRALwN7",
  "key28": "2D69m29EdDwA1fTkfJo8DdJqB62F9Z85X8CSqjEJy5qq8ayD6K7ABHpdoFtuSDcxaoLCs3z6k7sgz2rnFBnweknV",
  "key29": "4rhJSG8EWg5pT59FTk4xTDaqjrTjA4h86vgRgRkaHoM6FrZG1wMaWEEYHeZvUpmSE28XALBfzZ4UbYmiszb7z7EZ",
  "key30": "Ry45qzcP3GscjzEhZWsHo29gbvadyPG73kqjRdJ94XTTJuizbDjx9xFpqvMVmyg1M7jcxdmLKkHbqV3EfCgD8xa",
  "key31": "5UPVkdJo8Sxzw269twximrQ8b4iBikT4Myd97CWc99itaTyU9j3mbrGyYtdmgfnYv8LRmESNerv6VZDtPeDReCFo",
  "key32": "2U65TdZLAWJ7nsphYnbSyjGyg739k5NxCoQgmT7WmkTsxyBfJvNqBSw4AfNHgFhxiZ3bAqNV84t1q1krmEVnWHR8",
  "key33": "4fgwbFzjxP1V1zaXptz2zujj1MVKJusxdVEjoVnfKqs1FpC16boYmnrHkB2jJZmGCQvbLHZ6LqNtojy3rigZ4K1g",
  "key34": "4uovrExDqTR7tviCZPLhxvjr8TjJp7so7yJispQfLtrsH1oDjzyFJzPYaE183NCeKEVkM7JFkEhssFkUZZerhdW4",
  "key35": "3MVsGDY9EQ1kX9UFYFnHTBX5HMNh8gLXaKYPkaW9tHfB8Xoj1733zbyBSMV46QqXTJKzMpsAxpdFQBE4gUtNG1Q9",
  "key36": "2z7vVJrNi764JVee98xDrKsgpXFvqiFGaYDE9qGtcpNvQ5yY2dxavCERFL8bnBbG4iSrUWRD5wLdgSksXfqPXDWR",
  "key37": "4xnFJMZ5nHvh9jnZvmvFa1Rn3t9EtwyJGyk7BG9FibbcWfGn3zLjiZMPschpwQmWzWDFz7HpDts1BKHzabEgustG",
  "key38": "55EHHz39mMPfyaes2JdC9rtVVfSBmsYygn55nXwRkfPxkUy23X8YtAfY9SAHFepaxXyj6TkLAoTNu7ifn17a2eof",
  "key39": "aSMdgtvDDGhYWLE4dywNRhpnfjTCD19s4uFce72WnGLsjFGMUMT3x5U3FD4f6ivRgJ1q8eWQGWdrNiVfY22uSiQ",
  "key40": "3cimTWvGyR4tiS674y3h8iSFBHvf9D8p72Z1XPRnNjTy1bVLvJ6wVmKfWS2DXHekhkfFDJXDcLuCiR2y7iuyUQiJ",
  "key41": "2uVv9QaGMrtVgrutBfqu8S4YAM7gpPB3HJFirUtH7aCmHix8vBGRZv6d7cs6gGiFTBnG2ivXgTMo1sRgBQgTrk5n",
  "key42": "4whhKRo6DCk5cnWZfdWGEwMArdCzsAV7uTyaMoXkAVzMfyM2TftTQjGCLZeh7pZcoartLyn3T4QoLGwp5rUGRH3S",
  "key43": "47o7Ahe2aqoA5Eon8cKjJxGEyzb4VMXNHjd8EbgtQN1kbxsanz8AZe7zRWe7gVc277tdWG6JP8vLNmGrnSeqerS4",
  "key44": "wUGGcXYwryS6VP8pbudwSBDsz3iSYorveBmYkC3EVr6qgHfLhp7V2SyzfDcPwjVSkcfnv1tsHxKyYXWLnbgUGdj"
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
