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
    "3ABr9KxmPeRzryA8PHcvECZvSVZhJN64UmRTZj3mH1ShLgQhxcanKs7TkiEvCXeKhinhYQvYtVFsByHxwaehunEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exRhZDg3z7L4dp7YFeJ2JEXfW6wMKdp23tmwQSiyMnKayi2jBEXKU184z9hYYgKFMTmG3ZpE9EkwSwRWa73bt6D",
  "key1": "xnDJ63qV4gwE8CvoufpPKrFLwb7PE6Ntev5iFiXQvWB12E2YZqBKPZjyB7U4mGAHfytPjDTxMkUJ2KhRFXhmqHA",
  "key2": "3J1WbemVyZyaeGju9j5DKJHaqxPkZVpheJMpzA5BGnicJzWxcEG3GZvXHMxrhRoFNV8qyLRkPHRv7yB7v4DtrP4s",
  "key3": "2nf7TR1jt5zzENkD5wPFmj6LMgfC6Foa4t6MbWRikZJRwg2qMLZsDaeeFLJE7QvxpG6Dtk2aSjn8y88r52j8rb5w",
  "key4": "3FcEFjLNwLvSVcq91eU3s9tGvm8hzknD7iZuYKBrBWA4dkH5BGUwetLdw2zCRxLiX38vR5xXzK2RjH27Ug2nx8Tk",
  "key5": "2n87TebVKC2hzrCj4KLFe4Sf9YPi2UD6yarPe1Tu15PcFu6Ff5Z7ijbrocPw4dQ7FKweeFR9U2nCSQw9hLcmmRcG",
  "key6": "3BnqqvNVAVM2RoK7U1a6Jz7GGdANDZo1MN4VrBzN7EXSX7EdzySD43LzHLMNKfdLqdGWQLgLPXqgpF5N8N7NwNnd",
  "key7": "476NELwXKdiQcJQzv7koaF1J98CJs7VoZrSGbLTSEqM9J5bRjiJHnUzpZ5mekD6m1kRvUJM4pi66yMJBGkbfNa8Z",
  "key8": "5UU42pWfUYSe5Ju88mG3D19KhTyzZAPz6MuiUzotF42njTkmeZkBnCq57ncjc7QxguCJkhYoeoFjJ5giTq4kHhAV",
  "key9": "3sDhhdNSh8HyfuLKExdcysUFXu2bkH2iQ3Y8NU8RcNFj4i2JuS1LboFxAiGGg9nkSEXsjz3DTejUtVVVu9dEeNeA",
  "key10": "595MXo9CkAja3eDbtH7RgYWBWW14zWmbb1rtV6KnQeGLHaazddjFyG7thTZhRsLryDAuauezvXrv4f1v1jfcSYE9",
  "key11": "2832qF1bj2e3FhNJJEYr8iq45LyygBcnx4xkLbMaPsjBvVyZqkYx66ZTtxjRJPsXGJYRTxtKGpTNaWGNrVaSzZSs",
  "key12": "WHw8mdju2TKQbU2PaXg43t7CQBP5dqSSXAmxe5fjqS1a7LKWwPHGU7PUTQ81snGP4Bc3q3wiTrf7YQ5h7zhu4jk",
  "key13": "2sqj7sur55ZtpHZK6G7kpJPcAnB1nQic5tfAGLunaL8mZ3ti5pkr4FKpQFs8RgFub7Ytzbo378qWgoXpk1dBjKne",
  "key14": "5DZHgguxfJ6n669J1smdpyR1phdvid7bcjUMEWTVKQDtq9Rtec2DpWre12rskZPZAhfsDjSwAdfYUgVpMwygi8Ub",
  "key15": "4BeRR4vXEhPJowtXasC7tpU3yX5QUGah2CWZcvhUZ8W421nvucefRCTq1ydeU54QGq9o6ZrJfBS9RXSXkhA7qGE3",
  "key16": "2yVLDc6SGqPJv8x7Na9EzoUddFfKAtxfqHiGFfzMEEWPWjqe1UhqN1JTUw6E4aEQ8q43WEgfysXFhvzxiWxhLW5N",
  "key17": "9zLmdQ8VQpn6qHtY7sbv92D95jNcsVe2QCyinWWKybD1ikvXrSVuLeQrCKEDJPMVzqz4C9gpHvWxoRq4pSFps9H",
  "key18": "2sBinZiNGPf4baLLUupZvPsuTc3H5odBRXxLM1WoKQtzpP2TEFCuisVVPftLadcx4dP9eKN3w3hkjwTbn9upqJMD",
  "key19": "38EJCmBmpLtCfqwSAsJDuXaGfET4rL85qDRxfPfQsoGU5rscj1VHcUfRmkkZusyKsh5uoajPu43kW4sEMvp91AKT",
  "key20": "5KKsAeqDeSY51UvpFongxKE7jQNK8MaHNujAYfF5BBjEQDSLSjoUafZB566EYVTu4P915ASAxsh8myM31SimVRYp",
  "key21": "4Y1GpeMbymir1ji7qxQoZEtwYysg3vRnkSvTuw1iiH4j7C76cvVEfZepHxvyLDtf4VpeKhot4cnpM932geeaYvhX",
  "key22": "34rXtA9SGeqh3JbrNmeZqste5oyp52NH9fQnYHirw8C3RUZnqkbK3agVkXLaqj6Q3gK8CEYZx9pDNzV1vjCA85a8",
  "key23": "KQjWB7Fw8h3VvKfDU7dzD15YkKm6pdppxwe6YM1hyTGE5EX7ddnLQAiNjJjK9h8ToTaSvRYaHWLYHgvzNWJdjEn",
  "key24": "ToqrRhToiRPFe2gbuSsTfyiuKE5jXF6LvCBE1u8Z2p5gn68C7WX5ZwFzJ3J43oDUknu9sWwk83CH1QxCHA4D8u8",
  "key25": "C9Qr28wFM8pBYH7AEQ4c5VKmXBqeC6wkzsx1Skkgc7pCmdvahhunXSD7SeYR6aVHGMN8s7RZmuLzgJLxPq3CZtP",
  "key26": "2bwwnxP2JfEakvvkChmPnNsXPGgPTNEmSgqTCryX5NGgkAWq2C6EqKkKTiqg2mdfTaesNtgpKhr5n5DBeprFWVkq",
  "key27": "4EnveMNAMZJhiayzcS54W13KQvKVJNNbuT7FU8vRtAJrMNyxUs8K4jYMu2HXgYVVnWUQwtFGCXz1kgqkCGPJyemm",
  "key28": "2vvS9XiAMRGRF4H918Q3c8diLKktm77fQ99dWJcoLLYmy1MFg4kfTqKQhdY3ueHfpw46YDrxPwtVduej3zjJUUaA",
  "key29": "4HK2CDGEhbCSuy4nHaPyp32kmjSQYV5WxLJLoVfGZP85ozd84C9yCq6vCywzg6oo3YH6HV4LDN4RhgEKEzcHFwwQ",
  "key30": "3k7Q7h3teXcqWTi6LN4ezUv9zrSvEpYYJ4Hm1bGAVKezopej5j2ZExWCYrH4VhywFWzB4TiAhyisagghLrE4xajC",
  "key31": "3XZ6kfH3ZKDM9ViZvJzZxc8d3uDgvmsKFfKe55sYU7y2wjmURmAoqq3DUYS1go8wnSaqoyoCjkcPvA53QGAQXAaj",
  "key32": "2YAw34bQbHmDLonNNm88yZwjQdb1fBCJo43mHtt2QMkDFymzM2asfjUvkR1RWpmTFy4C2ujJ1BYN3n2Tatnx8fbY",
  "key33": "3BkRwrozMmGLmz2UsDyYot69GMBpUUxWgaFPhbS6d8SG39hwAyhpZZugoHySMw8uUGzfeFHoc31hj7nn6eBqE5Yv",
  "key34": "TsKDFrpXUpUKCotSQoBMtbqTLhmEM3nbB2kdgtpPxvUwpYoefPEb81Ct8YRYE897fbhpTCkMS5tVN8aGDfgcFvb",
  "key35": "5JZNB3T1Ndoq1Hunr7mwnhAk7umTgX12UdjpBh9iqtbneYj1kJMeU8TPE3PoFqBcVtT7AxHXqJY9fmoVHHweeT85",
  "key36": "5UBdds8PukbXMwa6vmWfGPVu2eU3KcRM4zNP5GnfFg7hQgJ4bY7Qx4LiQKLvP6syNu3G8Lt4sK42gaMfvqmiUTz6",
  "key37": "2C2LyWwCMzrCjPU1ssGGQJTy84UK1TdyH7qJd54Qi7U7Xu2UdBMbNwAgzAGhi77bPVJVpBGe6H8B7sXepspvBtZk",
  "key38": "2516hfgPrqxcgQpVz8gM23LgGyzpJnTTB22bDSKz5JKUhbL3c2nCB4Qr8ieWiuVQDJC7fMarjx2yBf3YQG3Bv9ZW",
  "key39": "2mN1ow9b6aEL6hTEn6w5Kq3chgdYT1KLdTdv1ygG2MfQQhU1G18mkon2DBY4b7go7nKQToZb7xzHnWvnE56NDCRF",
  "key40": "5KgU8K9kDWAfbnY4Q4br9zLxQL5RGqHkvsNNtCNnM5cqY3igpu1CgsuLVrK6KFqEU9ewri7Sn47fS2Q8LsssgLAJ",
  "key41": "4GXurY8P97Ar4Qnw1RA5v1C61diZH6Td51wrJ8iY9Y5AZArSnz14UrdYGkbeBQnp2FokoxGEwot8wNVBKMVzja7k"
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
