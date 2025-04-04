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
    "5wk93TJohxuA4KD1cGXUXZgQoYLWWc12oKCHGRDBu2txjsTG5G5eNEciDQTvg6cM7ztSHzj95roTg9VWNEgwe2qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpuxraeu66ryZea2pHxyJ4c2GKybbwhBVJKuqEWZnLRw8AQDhox1orE1NeaEuLNt754gLjuiwjB7tsxK7z1tREV",
  "key1": "5NEDMa5zHKC4UbBDuyR8Y1ZEeKVtNJ8un8hoT1aKGAdo3eUnvT9iUwNcsRL71mA9WUcsLunUAj9eB6X4a6TKXvBj",
  "key2": "DY1ix5hb8R3vTSoz3S6cPKT1xUAtofFyjxNiUQKqCPGuRKLC57xi8mA13L6uGsonG5k2NwoP2Nn6sKoUu2eq8wK",
  "key3": "399KG5DieosonjQJJBbbtA2Z3kTccbxJ6fBE2zRCukDXq2EZzM2S5vUFjm7kW8B91UatHfkcNNfkcdKtfMtdxsQ2",
  "key4": "pHwx639xknQS3tBU2eFmBrvBRgSJefrCqjXxphYou1rtp5wHuaYGdVXNqf3NfGCzjKHJBJW3yTNPkMiHtLPkj9F",
  "key5": "H3UNnMi3TWYJxSCisUJfQAyE3RFcNBxZDeCTzKzrbe3UJq6uup8uUJp5eQ7TZYSy4jt3E4hKs4EcApkhgBoirs5",
  "key6": "2u1xCy5zyqsttfsdKsFbBmJKhoZ7GGtQDPAdnKfcEfDQMpp1w1q2qX9Y4Cg8hnXA89G88w7AXCg3ajgVhGqEErq2",
  "key7": "4nqbFZFsKGNDPtVX745rMmkdtt3kAtiFoJBGNUwQVzmLA2qDQAtCMzPwUxkB2B1yK9CuwdfaPivHdBWiPYSg2qe3",
  "key8": "4VCzLGa13tZkQiTK4iK1AVWQqGUu1aiNpnAN2AjMuLmjdDkUFd3oHpZAjJUhDMPeiZxVa6XL2TEVQAP5ir4n3bX",
  "key9": "2cJ2EAeG4bzUPYDJcrFQQm54WoDLgeRnXc1wAHW6N6zwpAjBJGjGPedzpD4xjt4HzyZhz5SHJnXgkPswJ6N4UPK",
  "key10": "2FVNAHkyndNMcgVdSxwnS3BoAdCD22QSeMZJkbLNpwWYSyH542QtaUdZmtCDLMVJNDVsSio3rjpG6p1HAHeW4Zob",
  "key11": "2LsprrVntREqMAS12ZKojwFDDptx5WUPDmDZ8ep8eD1mG9W6BNry587Uz1MbQZPPFQUS2EYaRif37XPjQnu3D84u",
  "key12": "2EN9FrKe6W1kTr1TUa7aSnT6o8JYmttaV8TWjefypES7GZSZummrBh3GXiNPytU8THpGGuQ9Z4dMt88Ehqnc22zx",
  "key13": "5pYjstN7VkpgmtSPjrNCuzJsne3d3dphbpHf73W4owEDEuDt3VU6f7txY53mYLMdmNDrU5n538kP5fcjZcHPpH6s",
  "key14": "2kb8zT5LRWAhMKwMc89kfoT3r7MQXsSVAF93Lgt5jCXSKDNfdWLu3LiDpvneiaj83vR86L8VCoShsgBnFByyoTpL",
  "key15": "QKPhS2XLjTqfc69zMTQvwVFEWqKjMkcoQk2rebDhzh6zTCosgYwaWNj2kEzXb1B7bSa2ZUVw8yPPxrUYA7bSoa5",
  "key16": "32sH7Tr7pFzJ8MSvMwNuDAvp3DqkZcRbVZBRh225eNe56Ba5bsds212HmwdnhCp4C9R4qt97HyX2XfPfSCcmX2g2",
  "key17": "inrhaXs8QTREdkazAYVk28PV5b223viqKLyRUXYYhr81QWVfPVPnA9ZtnBTwfmKoU5TtjgnBdU3yVDfm4Yz7xGH",
  "key18": "5viFhNgpgmBwJeexEJfprUKomtgFTpCySrTscBC6TnWXTA9q7XefQepKCAXdNXyhVrmxTsCmQrBG5B3vPPczV4yP",
  "key19": "2HfGJvu86y85SnubSTSBb1RzqeDTu2MBUoUhReA3zAK6T1AZEPWLfkhkMiHk3fSaF7pWWvCXNAtTo8ifvJfENfcv",
  "key20": "388ihLT432fwDbUC3hZUwm7S57bgFPJGHLQjjjFsHj1Kr5wMk2koZ6AVT4fh4oxcNTyB4tXBSJGPXzRKTtRivBoT",
  "key21": "3efhFgbHAJ9kQfvdFtprtuRHbFNndkmnQRmiYY6xo3yZywKsV5BjaUkGpQCiujny1ccDnxRSB7trAti99mFczqVT",
  "key22": "sUB84Aa5Cu1cQz5NjKN2NKFdA1Y3AmFvJwuWziTLHWuSwfPedJU7Np9pMnxmMpWywGZLLtoWrPPcM4bqd3jAbFu",
  "key23": "nryM5mWJbuyVvDc9KixbnckUm3D9y6TwJNxXk5tv5NRUJ5Vskf5FD6xm1cBHaP97psvftkicFpDDKuLH76kuz9f",
  "key24": "582fiSbmzy1FfZYmGgJcsdepK54croRKbLkpCRYv3Y9a5tizjJ3MbERZceDvHVyPcQXH9sMJHe9VnkYDUVg8ywdX",
  "key25": "H8zHMNMghwVnY7hNTrKBagXXKa9QABJ28F8kBK6iMHbfvGYRxNzog7FYMued2pyBHdbDDsZPwY9B9fwLCZCwgYz",
  "key26": "4AysXdf8eQX98Ldv8BRMgGNTrab5nSVEUrZEJ6L1qYxtd57kWXC2sFiXgcizhsAgpHyRYuBKdUhevBYxa1pkMjHS",
  "key27": "5kLNvqzvj63V345TbdWH4wq16RMZadPksUs2jNc7WuHLz5WqxFiffDT2mV6EikjdBJSruqbdXmp8wrdQRMHEL1KK",
  "key28": "5p8x5ss7aYMDkYV8eiFCMaAe3QAAbf7CM4PJy9Y2hkQgMMeVQTsw1PPaWGuQJDwfVDvbogCYJJHcRpsma4RKNJbY",
  "key29": "2JQK8k36puNN5FbSnythzegvm1Fj7XChP6Suv3z6hvsj6Nao8CSGQJN6zSgWcXNVPJoSdGZ9gguijTJsyUik21kc",
  "key30": "2CnaKZApudV82L5qqaATiczZpQZ9d2yMbFgwp79NoVb9agXE11BbJMZLJ5PNRrnrZCiHcsg6gTT7taMxn7W3b44G",
  "key31": "43tcX3n4dEwhtjFjFkbwFhbSxQgJ9nNjHdJeQxRzmVGYjWmYQ1Kg2R9gADYu2FLm9vKdamKanZqnA26TnyiMFkQB",
  "key32": "4vQEsY7f1vMpQgDQpYbtQ2xKmqkeyfiz7LAGxEBnNFpWQkT4ZrA2GTZ9fpjkEDmsAQZj2bZ36eyxkErZ14rW79J6",
  "key33": "5TSVvhFUWV8vbrd1JJDNjKCLXKCYhpcwEbnqvk2hk6RbG18axz2REs1Y4ibTiJ1iQKWPiKKjLDoEq91G7xueSoR7",
  "key34": "44ZJWc7sEpkKJ8PAhu8GKiMoh3JgfMw5sk5uuQ7uknGNWWtUiehko4zmfRgwUZHq7a6VfQVPvH3Ryc7DzkeRjZ1E",
  "key35": "2oEi2oNfAYcnMZ1uFG1AHhUUfGLiQuKCNCaN1pUcKKzLJtqhnM4dUoxULbjD1FzYoLwrdKJp76asz5pTUi2TQy9V",
  "key36": "4ZCcmw6p6qCw2eQ66w9wJ69ty7wXJe9mYh2SryG33kLLkBykYVkrWDhP3s4KcRC1qTxVgPhXsjDeWE1Se23AJiDa",
  "key37": "2nW2brJLhKJkAPRH3xrexA3ZnPx6Diarg7YV6uHAnhQbpkUzEQAKtWoiNoAA2GRT7wZrEXiPi72qZmn6X2fWdCBN",
  "key38": "52eeADsfAr62PNJCXPLbQ15AXzseoq73wkSYaLiCMcQzCcPMUjuWdZuLS4jmq14jJd4egsqoz44J7JT7327zkrPt",
  "key39": "4RSpXNupLG4XN7wXEhmz1LybT1aZ3z6hUwBw6WSsH59TDYzBLaR6CLjxsMerZB6D1bfhPzK6F2HaLgeofM6EwP17"
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
