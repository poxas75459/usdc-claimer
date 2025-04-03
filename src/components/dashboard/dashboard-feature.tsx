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
    "RiYTVAZZbPeaDe9fvSsgahZxBb55xwhykjrF5BpSLcuafLAVuBrwB8kW9NoFPYF6n7UWq777xDvBLPS6hPYUt2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSqhSyuaESmQvkyFMLV4gk1GnNcRg58L1d5TBaA9UV9dVqZsnep6s1w9Xu9GqztiA26Via388zZdMTJPNUGipE9",
  "key1": "Z954WJkuLm4aBii6uGHYQRLvZPxVLBusxDzbkwdH9rXrZds5H5vx9VXx4iUM1UfrqctSDuFqxpsQ4srDpPe3Kfq",
  "key2": "5kHKQHerZMnRNmn3iokhjzzA1mn7ynAjmvzzHEM7C8DQsEV5yiqqdD8hf21Hq77qywvEQqb5uenYVfA4tsmA6QLo",
  "key3": "4BhMfMiQaUHpEvNeLjTDhVyyg8Zi7FgiXBwb6HuaFqfa9fsDPBhZhu7dtVhT6tNpVNxJ6yWDa83KvS1PU6eGQxvD",
  "key4": "4whdZgT8cH9PbSZWWprMVvSx1AqgscKtKeodJrXveq8UxMUPXU5PArRkz5SbUaHzTrBozxUBMRABmb3X3WgmXEWV",
  "key5": "4WXmg5X4ocX4o1QV4WBGGNN11J45RyCtMG6Kyicz8W6XHt7unazdsgKWf7bXxvaULnw5XfNiegZCNkomQmPDehGQ",
  "key6": "2STECPJU372RFzkWUSGTF2ht5wk6Pmg7TkTXCz4ETfwdee7pRPokkPM6aa6U4mkZCAtv2sLf74NCmmGjXeDLSnz3",
  "key7": "4AWBsjvXvJCnc6ZWXyotojQtbfJtUou8NtzoU9JBd6kK8exz6MTU5TzYuYSY3pu8tZc5QncvSqjXLQt7UbbYz12x",
  "key8": "i9MSi2DxCQz69podZKE6Xm9nmZtGRQgf8zMJvwACiYU52y93hr1b96mLo4xjzifyW5xEejTXAjcc6gFLZQAJKw9",
  "key9": "3C9AKaCc4UDv4zusCRAnTEY8Wxm43oMdgeAANQxSoBPE5jxgwZgeonqjN44YXsL57h7PxGEPazA4uriJ5Cfqr4X7",
  "key10": "2L1jqwtdLk2sAwGK8319ecbGCqK9SVuq4WQwkCCAv2Yw2SEYZ2v6wwDHmdE5pTvXsfWCHjHsaMiaKtvXHEbgZjqv",
  "key11": "VtN2cdgKa8Q2gWEjyD1wRCremuKPwTFL5rjkxzatEsyZVbL627kEVeBqDSDKwE587xNPbHSzG9D2kewot4iR3dL",
  "key12": "2b3p8BPpX6a1t7KVETktFh5oC359MkQpRzXUtH26jzihMt1BaRaPs2zZ8WX4dp6h5FXuFfXDHEM6YZEJhj2qScYP",
  "key13": "55xo1ABBZ1bktLoD8oPRqEA2EwjLq11bDsd3yA2K4X3mrtHMqWDBzMhqeiX8VwEfcAH81bRNTVa5WDTS8HsXZjA8",
  "key14": "2xEbpeQpkwfaw4QRyKrdZ32ihmJoHW2ntwSrYKbJsduWeux7s8NgYKT1uyxiPJDyUkq4jYXDxCHsarft2Yn5Nexh",
  "key15": "pQodHhyvv4yn5AGanhguyhWtG5Q1r1KH4SBKbqmCUGUqGR6PPCranYLk5HjoUhRJyZedUc3wLEe7vhXdQCyfETw",
  "key16": "2seijuz15jt65QCb6rN2cdXGJ3dpxAhDcHD6x6W9TB6Ce768xzzJDu4WWyrYnCpZVUG7zpmLWW8ath36WMARUjTf",
  "key17": "54SFE9oQ2Rt7MjMz5evXeTHWnGuLf6H5CrA3LnLUjag43x9gWC7L6KG2wgQ8QRHmEVFxybxi9td1hpyBZ6qRA8ZG",
  "key18": "5e12a91F5B9vBBVK58Heu7kNxd13sw1DaYFo63L9mYYdRa1mFykd6srmBN2XMAiqmGWnUT9LB5Twhjo27vBikfAY",
  "key19": "2z9D1voxUSuikcERW3pmqZZh2wo9vRRmh1DreUSB9EkpajzSizx3NXJX4tgBPov7KoD9Azku1qG6YMaXvfoC1Nva",
  "key20": "42WzCM9FYSemJENjFsUQwzhwQFe75Tp44JXSH3e416JK6jbTbVcEgM1Q6K2XKuXoh4h5UKjoEi7WZeRzPrK8Npgh",
  "key21": "5gPeqrEBfEXB5tY31TzwPZGasa9bE7gHbfSqEC28R5qdwTDiYiExuPLh8WPomZTpMXBzXhPSFDwdKTw4uyuGARnM",
  "key22": "4Dc8bWPWcTaiBu8uX6kwJAFpeThciuG988xsiH7W8e9HCGDGENaW25rn4uh3JNo6oTZSuz5PLKRs9LfUMWejPTZz",
  "key23": "5wTZmbeYakRb6dT1pFFXR9axuQY2h3PnbweN34cmYBMZdddw6M77NXC7SxmhyrvxaxUPRdF7SPGVtvhuspJXjZqb",
  "key24": "42y7MAgErkZqRYRGcqM86hHYULZg2yppgT843g6nJsgNvXiepsUj3tkDUWiejzSDYF4ddbj86g11SBf4RYDXubQS",
  "key25": "3GCbkzn8H5ucQidt5EMrLzFhok7nhgmbiHKJE9v9qAj3ZpRFutcXR1w7NxY1gZQiBDVha3RFgPN5v9jU3RTDwgR5",
  "key26": "5uduzNufJ8xjToHBpfKwCMCLB18T1GfxtCWAgzBLdAcm7oWdPAB3djnvj8DzbJT1Gj4qfrQopb3HPfMUnCRWHdwh",
  "key27": "jMY4MLRFTR2pMMoM2RavM5FpfJQvFECQyQdcSrLRavcaRsrsVn792cWYeg8xbEcF3fthyDrMtdgpWMBTDppPQjr",
  "key28": "31GZZQPJ1xR7ag1L8HMAdmXKctPTvPUnRhhCLM2kbxkAXygKB7qwMAL5GsPLa54S3Ya2UE1z7aZCHU9mdZGicwMv",
  "key29": "5sgFXxntnzfdvv2H72tUhsNt5GgSfHkH9qXKxwsSPZJcUz6QZnehJLD5k3gfXN1G2xVTu3THmUkotRUvHhBXUMeV",
  "key30": "4yDeoi6ysHRqmiE1BEhFnHRtkU3XjSKDuz371EecMXBsqxNmo3rdr4VZ74sdLEHrWS14MB3vbeoMcLZAwFtN7g7U",
  "key31": "4q93GGb4yh7YFpXpqBGqafUWuwdU14beuMWXx9LGWnnk3Xvwy8pB973ZmVwb3wm6Hm96QqCLgM38nuEzPacGdiLZ",
  "key32": "4wvRke79dJ5kpkRo3iWojAZg88fELu1kR6K5b2XGHLa4MQxrq7io4kj6JYbEFH75Y6fgfPXXLs4eUfRdP9jMFiUN",
  "key33": "2iXYFQoVQou35BVm4aUj1tu2jZqG7bbhsorLknW43DzGkKHyYzds6tEGeXmnSSvC4JDXr1TJdtbSkKsqnLT96vRw",
  "key34": "59pXsZUk5uhDYFVD5neqMFmgBWyfJwfPSsDkXHHgmGehL3S5TBXer3gcu4Mgci1XdTuubGBtiSWCZ1z2bGmA21nG",
  "key35": "3cdQEVc9ZWtZ7VkfKqVvNrtvaP98KM5iP6tKBWH691Za9psCW4XU8qtFP9oxW3Lnd7mrKCjPejZd1KoswwYtFMBg",
  "key36": "3fcyxp1iwAmAUSpixQKgBCvj2jTxKdVKU4qHnq2mKcbeGaAzqijzssuGqofcsjuvvaorEozMsdPGpFzsmuMX3Umr",
  "key37": "4GUiHxxKXC2E86CEM4bDdz4kCGrsVwppfaP1XjsPJT77zGDT57Zb5n8jkiCCNdTx6RgLKneE3M2NXiyrxkQESdFT",
  "key38": "5QY9DLN39mNpLPLSXBGGvswbpPdTNrzG5jSN48YJqa98uag5n29DcwVjUMiKof3ES6KYw5FMao5Jg9buLkVRTM5A",
  "key39": "5oDFFwdsHEHpouRATLCvCHS1FLcm2N6kiMak8u6YEoAKAxZQfWDoBNXgJ9PxT2fUisna7jJHNAAydFRohoJm8rsQ",
  "key40": "4GLTHZEzoAPtw5AFcsppUPEMA5omxDfag4JTT5yixAYDithKnVsAhq9zGvjv1FjcgFSsVRSjvsAnJnK7U6kZ2Afh",
  "key41": "552v7ZoeKJYsYZ8JvGeEPuUrebe9Eu2fADnMX64kZjr4e5DN4tsPg9kYCJsvnzYCEfoeteLSmf4NhYbYnwv78adX",
  "key42": "3bcSx59yhCHjhKdXgJSviK1JuM83Jop9k98wbLqtDJmuSfKQVxPtXTVkRpN9St1qwrW2Q2EkronjKcxZwTA2x3zt",
  "key43": "4SNJm5AnUUYa7Uc4YMdzj2qpm8kSLuWj1EdpJtrQWM2T7kfURtA94Fa6h3vk6iQWFKrispFmGm2vnNuqynKRZYWw",
  "key44": "5RUcRpUEjcCG874GijSJ6iLuzHUDhgp9jdakzZTUCPUb9tWFebwnNVzwXgXKEcCJ5JSBTRmP9YVXwgzMEhFzMcxX"
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
