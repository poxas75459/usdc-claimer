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
    "E37Mk7dSE2bneKx9gz78Q5JCUth8jT8LDdCmRUrWFR1TU48kErqA7Z4AzriW9rVsG8HgqzJy9pRmj6Phtd8jQkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTTvN4ZnqnXz3M7eEPcWgjcpKXeRBPYYBfSdTAz6KekNpMfHkChaK4VP8JNbxfTxbKjEacMRENomuvd5eapBPS7",
  "key1": "4gXgPvCNjdxQumU2RN2bUQdXUJXpQw1f4YGd9g9wE7zEFcf7PzG4vH7N5g5qDuvqxRNfQhnq7mG8KXFFXignPzX5",
  "key2": "2RKJ7gTbtQqjegwrFtUpYMrjuxzUAu7AKknAyqcQWS2aBeMC4JauSS56H2iW18YkULxS85sdaqeqNPaGRdRphuEC",
  "key3": "qoixsSzYakhEmBYHftgyb9ZtWY9ncwsJYz5qgEdUcNhQVqCoN3kn1NLbQv9N3ufGfb8z1oz1JuYXb6mFgaJyF9P",
  "key4": "pogqG7DeWVNFzTtytBpSoJJzbHiiEVGmY6qn6t4sSn1vxwmFUDJxgtm8vTsJpJBt6J72YQ8qxEX4prV8c6SzSrC",
  "key5": "3y4LPQUigomGUvS9bj39wHTk7XAoWAUZYYwRR2P6rtwShujhTebnHmD8R2ewNWKPwhhprLRnGBpSGnG193rA3mqh",
  "key6": "kMcQ6KjgxVzvqedG3cpAZS2FiehN6yaMfjfNutdS47uAJqvSuSi1dAprkpENvYtKRdAs27H85hVCMMjHwJ3gBMK",
  "key7": "2wpPiihLWPBHpT3wfiU7jqLGhKjuCFc698gzPyn3nXSFfvH3ZKSbRRDFGs7gUtBB8BthRs8E7da8ZmWDyhd7TPzA",
  "key8": "Mc5PAfwUbeFfvAqZVugueazxoSB6Y1EkQQxMvGoPnFjp7bMMBb5ynCyEFL6Z7Mpq6pbFjYE6jFmMXVwfano3TUX",
  "key9": "3EtSM17UeKLAJNiDxBry1LGpBJDR8itJoiN27ui53B2VnmvDPWByRC7DBTTtVCzckhaXGoqzES2YRUgEJcdaHfB2",
  "key10": "2sSbyRe6iNSJtRFCB5YZ2NdbCoxqScEiVKgNGUteaFx112bVUZMqiCcjkk5vzzXiirTH3jML3WzjVzSGRKujysSL",
  "key11": "21V7smaj2M6Ho9BQwfRqhKEdyRvBpexSqitVesDNF9aJQxPgQ6aM7ARygQk1uy8W61htJfYeFjXnLTsXjuHRi1rQ",
  "key12": "4Av4xxZmvtF8FryJhKFC7RXEyqhyvKtF7zojCoLG2wZ61fh6TpLNuQsaX2xKEpmPsGS2ufkju51ZME11PCw4kvZQ",
  "key13": "2STdxwGeQPHxez6CZ4K3ntuka3ERKGDaeNPXWpM29fSpCRezY4bFMgqb7kENuZ3mUJyVN1EgpemgHAG8tFG9q1qx",
  "key14": "4QQmGnrEYQFsRhBdCRYJq7q39MeojJzcFBWuKpZjRFJvoXwktjT6KN9Zm1qpVn461wbQ8YWYRKiEPTN5fS66jxTy",
  "key15": "25UaL2KkEDHTFHXiT9vrC3kGcvTvbTvAHYAYzxmYVYRR5aEQ49bhiv9B36pWtDkrAfr1dvrHB6G6Ao1X6Ekc2ATQ",
  "key16": "4efe2oWziGqKLUm3L3yUdG3rzwPtdCQw2YCniqjaRzScnSuurQbnq4k1y97fowTFgvbMe63SYRaVe1VQDtWht4CH",
  "key17": "sjQNc2d9qHY9k9qk3WzGMnhbzpXhcVVaP1nxSRu3LVbNruTTiQcigedLxghzhm3yZC1aCDVJyAK3ahes9gJAxPi",
  "key18": "64mQ2bgiWpStGRtN7Xd2XK2DrbhCRsgoBDMHHZPAFTDMM9pG6NV9y3p8vZj6eYR9MgEAm8YX77jGm45m8mh65EKj",
  "key19": "4csdALLy6DKaeJWJ7AtrNuaUUc43Ks5L6DMhQs3YK4xtVD7fRUKDdChzFBq3qkrTK98KkTpobhr7XxWje4p5Voyo",
  "key20": "3yC5MP8rAWE28L6D52o8bUgUFF4ExfWTzzNFkMR1XTHrgN8oGKVw6kTt2V82ifXUgdejp1deJwJ6yLQqBkE5bv4Z",
  "key21": "4Bnr9HhGXiANVAphgCsjwvrLuNrrog8KQghhjQH8AcEZvki1RCNiZH8LhtyeVk2S7KCZSyrkEXX9Yah4RQVxhLvg",
  "key22": "5Vwg6zFf4D68u9um9NoYn4miqivtkki4SKc7NermDtxLDzuXkUwDkF4h6Zy2CqWnimjN8dytc8aHzyLHSiPhhiVn",
  "key23": "2yeykkZ7e5zAd23oTMbKsWeraaJwCseZCVmgrNggs1yb33UW8bXo2fBnRz4x3Zp1LgaVMfXEq8bnBGuxMkEgmgoi",
  "key24": "oPZHs2EG73BHqqeK2ZKCDwLi9fiTk1Hqyb23HoqEPYTT28Wp1mTogB1afqHKb4zmvrKnHkYth1VGbvP4wzeJfXT",
  "key25": "Ld5n94MYwUf285LqBvxw41LQsnFZvTn5KT6tcEuNVQ1AsagkrxbJUSu8HqR8Ly34iTDqw8rpTcYWjcCEgNMHZ6Y",
  "key26": "2ng6rDKJda6bQTirBaKGXs5Z4YRMUnqjLMLpUQ2LCWXi44SqRssf9oGpT6dMMJi5RUY8bZmz5GJuBe4VqApaN99r",
  "key27": "412uUcTj1grhUV7cpLwUsn4kAe191YSq92tghJ9cGRLDqQauUHPBSPz6bfQoSAdhucjTd6Rhcm9afVH8jksRunUE",
  "key28": "2SBkw9zyyT4eK2gEe8YTByfxDdHMwweiHGGX7ei1VSWWr7CSGGHUJyUaqoLKw7g3fLpv46wjzHsxEsMqdasmEVPn",
  "key29": "38Wp4RVyg94tTQEDXBChPt1dZeerXgHtBwb2mhjUkRCpSkj6sJJjNkFECf6uWR2qcwK4jACEAsFZuaWUEe1E3YDU",
  "key30": "3MVVEJtmhJZG8tsSenXQ2S4s53jU3gmukby5JuWPy1GAHZDj2SsPvsDWWTsrZkyTZHBL7PfoPnPxwEosPg7ZrtqY",
  "key31": "3m24ERsB5NaAQ4rGHcT1pWrjc3HRyPu4ErrM16So6FtcXAzu7AqWExeLWdP1iEjN8ucpBdoKEfYoKqMsSDdWYT1U",
  "key32": "4n3d46mJwUzoRwybrfqdViKBkhTJ6btmXQCTtVS1f22zKcntoiDD5y9H9oHs3sTNFP4MMR8Vcc2YUWt9CfTjwvQG",
  "key33": "26N1HGqVFzA15D6JKADDNvA2eCyUqg96NsLJK8fWrgSQBqCQnBrdzFmHmth77v8GLMUABf3dTcehXHuT1PZkC6wQ",
  "key34": "SgyQn5t6LPDfTVv2KCaUv6JZ512zHHT1uwk6LcJcG7B9kiz6TnqksuEgegCAYbiT9vTJoySv5e8QP2a18hGXK7t",
  "key35": "66WEtPZeEUegokG6p75mjATDQN34WxsUsfCtnpLDG52VFD5cBZBpjZxaAWgwcZvTVFMBDgDRpZYuAbcrw8hVwvma",
  "key36": "2cZ6SmhsAbgi484W89Ki8TtrrswEY4x2MuwBehZki4LoSqbdzhCNSkKKi5EeeMpHzJkD7uoXwLiDzNTex4UN6s1g",
  "key37": "2PKbAzpXbF3yUN1ZHwUtVFL2PkN5FimeTYSyPtGUn1uXWjEf2ncb5WbseUGMCvDwatvgj1zAiHW95GsR8fzW4G7N",
  "key38": "3G9pFw41abB9zr9zL8m4PpbbY1xE9ggP6CvLBhXHUhtyT5N3x97zUfDasYLnFo6Ci48SEG9fvxVFyCY6B2yf8RFs",
  "key39": "5NoFyGCJxFSNEbJ1rgxr1MudPgqRvikcRRk8m5iuoBnrPUyhKGF6SLBrWcpdYbcuRZSw4maR9weRj2u8Mfp4ZCdp"
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
