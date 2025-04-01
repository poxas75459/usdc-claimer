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
    "2YJyCTQxQyGSmJ3YgKEit9CJwcWaGaRbw2pD4nHXYihN2XZZhNeevQeKDx3BScPmhWTjBMHqW4vGZPx2r2dayVwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4En4MXyZr6A4XfJRgkwramzS2rV2JUcUkahDDfmX2EDY2JNcA6jQDhs5gQnCutJKpLgWZ1Vag4zzUpsJ9JF1edXN",
  "key1": "5gZGgCrtK4tWV9hK81A42Hsfk5RhFwUHDmUcr8m6acK5fQCi9q3y56JfZt83yvgSunnkAKpDaFr9onrvYCzPtkZm",
  "key2": "3T4CMDUb9z3RoSXjgRtv31XJ36oRcKpJB57GFgcbxePz4FjiAyxVMHWWZ8brdpUoLCASzrdygTeiPczihFRRcQsL",
  "key3": "33eZJYMfkomyeRwsx2JQHedEBtfdifzpWvAiTv71sFv11rNFfB45474CDdh947ZSpa7qVmotz4vAV71jDtkZbJgU",
  "key4": "5cwsVeUYViQviFB2jQ3bk5K8HP4y5cc6bHuHQG3nnM9TXCfqKW8J1GF1EweJtYhwcyrJAQvS2tcfMTrxyjKbSDMu",
  "key5": "33QVdFc2x15WXsMubWqxyYxt6CNpdYiWAKpGx3sKy3WUQ9Xx3yhFKNWV58Wz7eH7JkAyXdBJEppUNriNveP6HCto",
  "key6": "2zLuPUNTEguuu2s61RML8uweevPie5iA4b96grggrgRxwDu8NyTDZWKTj5wPR2Y7L4yXXDJdHqWd2bYa4ioRpa6h",
  "key7": "2pE2NFMudMXVECN2J31LH1MKd4PvXKyM2AjYnj2xwNyzrcPuZVpDMWxTLDXSRdrh6ws9sz1c6U4yuc5eUhFvSFiJ",
  "key8": "TomWqGNovTVVti3B3qdiS8wuKDW8w2Br8acPCgrwGYdap4cQLf2Aj3Scq9WiWKmzVqnjQLLtRVqLHdKb1j6C74w",
  "key9": "65ANnNFWLb5APVDpdPERibo7vYpJLYVyFDtamZTRXch6umcK3hEsAUfYnJe7iEL8jQTXggufhs5u6BVSvP3rGTpF",
  "key10": "4CVc6k6DofQE9px85cEh8LN4h6SNk8J4QKMPVL1XA3CeE83PCNNEVnAVKQNEgHyx7DZHWMJiYAPFTYd4xBQvAAMT",
  "key11": "4LPnMg7J3NN8TXSY9ECym7Q8Nrf23BdAXWq4kiWKa9wteu2HnkYEwYovsAXEU8qsGY3ybnLgbtbcyxjWQFNJ8du1",
  "key12": "4nesaBJRX34bSyPxfFGGnvTpBNbz7gNTgja97w7ydBv8L3aLob9QPUo3kU447ssiv6aew3RAKRhPUtejQ6rE2a4R",
  "key13": "4rFiYcDYGkmFtemw29wvomcDksFKZyDY81AH3y8eAWuyZNBhtdrFyHPKiRyqDKY5DyKtx2KkmJbMyH4pSw8XEmhn",
  "key14": "5N5mmh4RmhUF4PfDXomUMT4SRjrgrJkKLCLP4cXtfJJTxLxDSkZV7i5p5sjZCzeAkm95j9Z6z93bTQZj3xj3EAGN",
  "key15": "4BJdmJxwtjX3tc8W1L1hSfbwtDpGCbCFYYjoeDAkpnaN2hfpcAU8Y26bqmaU7k5h7qSqUdEbY3WAW9ct6SGoaTY8",
  "key16": "G8uMaHaHSRWxo8UEHLmCmMLn7Myd2LJC7Cf8awPVjspgCBsTDafMDrFHft55AJoM9Y1dvHwdR9w2FD5n73KY5Wd",
  "key17": "4X4vYFky1SGN7yW154HohaLavBMdEVhmkkNSj3PRLoedSxFwJf7bMStycNXzo9f2U9omgJNCebhRkXV7ain5Ut3y",
  "key18": "53gAesoMeYAyPoAqmpvi4xi7FMvxonai81jMJPTQMtuU9rL8VWh9a3AtjfR25aiHbgTexFsfNr72HDctQksX7GYM",
  "key19": "21x89nw9odALitbZd4h3mxjpZKVMNJqcr8ECxnjnufvR2rTwrN32V8M4KeDJhp3GRWMrUAbpj1F4jH4Pj7G1LU9N",
  "key20": "pmY9Q1Rc3tVT8jEzsp2c63CXGG9C2Zr7Q2CHXKnshhDqjmUoWiuoY33aNkYYoHvqygGQkBV9LZ33CqcLQGV8Xjm",
  "key21": "4akp8R7MUYATP61AR6NwQNshXuj5JVw7XuDitSbHNaeTfJvZaPLtybhZbY4eHj7BB6MNbSeoN7y2keupHNMSVhdh",
  "key22": "Hck5DTaDJjCu7Z8ipDcTSzePo75Jev1ngjnXBgqsKoEg5S9F3nDFKx4KYpQty1m4kNfkKkgPoP7fFqdfXAYjVpx",
  "key23": "5wrAA2fG7F1vhu7Yoy5UUPX82GR2BUEfz4u8iM97iiWxpqw9kUoQuPc2v5Fjjm5ivnsHCCcjKok9kGJzU81k1Ymo",
  "key24": "5piWorKioifJbsMvMz21YN5PPbeTnqJ5TNP2XQCPXJddewq1U6uDQtFR2JQ5w2Ayqvkq3N3n99sGcFstXRPYQn66",
  "key25": "3oRRqzgXWNBGd1HfxiF47RiAvCKAvavMPWQoPhoCrjbsCkSS4n7vxwoKBoW8Zo2NKwBptrikaQ7h1KDTBvEWDTxj",
  "key26": "bS4a37RXa79sxCpfUMFvM2or1ZkDQawfVK6AxUBAyEJeWqZ7gckLkncw48LnTeWXkoyfip7euJYAx11ZNXPZoSe",
  "key27": "2rGEtmgvjbTj1a4SMpX6Kxwhf3zV4JUXo1X6qU7QADTxHXvQGvndVt4Jd73wrjscTjvnwkdqHdDpDSxcWYczLhXZ",
  "key28": "4ZvgavAmEfLYU3EVpzSaWHiQWb114Rk5DraURCE48d5YYEJfB48PDXJer2oCiWqzFaLBJDF9p715zBDifUKiTC2M",
  "key29": "3uyDj6YQyJLAghsSC7CTdW5P938NKbVUTxeFLuppMCwfwxdpXhndNP4dpULGh6kdnTpuVkUeHJ1ogQNNdTfTVxs",
  "key30": "5yc7uFjxvzmKBNxdyvb84Lq7FFxkLaYb1b4vRMUJVMdG4aDBBjnyH5Q4vJ7Gc82aMwwVUy5tzSLVXM1DnNMcPJth",
  "key31": "2xm25TnJj1oTurXqhZ7yu7ihp7TLbvvMrLQLVvQ9MmdP2pL2bM4qYJU8te6EqXfxyirjXnFHKENL5LK2pwjibt7g",
  "key32": "4txAFRCh2kkghyZHk73zDbGhTtvwPKxUUeM9hkGUDCGaUnjUXf1r1TCyCFgjWDcfg3SHfoxFhqWQKtvw53cqMME3",
  "key33": "2SLc77JmKLGyhTXUEzMAGTQZvk3hjWxRtruHQGVDmRGcwrbJvsh6iT5npAtJfSvNGtwMDsk93YKPszVDEqdDcETC",
  "key34": "3jYuShmhunzPcnC8gNbC4L3ihkD5LKxyq2ZqQp78LPdkZqksHugMEKMQYK8RvZLZiTJU65AfQS6PTK9gn7SSLqQA",
  "key35": "2dioGer4GEkfttLuzjYhUQUXY2GnbWeEk2CSGamS4VrEXdMA44vgFP2XUU5EMggvP9qHg9kkv8Tk4Cc7MeE5rDH1",
  "key36": "5MkH5tWkdN8ahDFu4srw48mLUFicd3umtQzhtxAn3FJs1R61mWVx8AJwQtHbfn6jRSEnRiBgDpUaAqYLbb3oyin6",
  "key37": "W16cQiH6zqFvRYHfwRHxpddWARV9Veg6BJ6DgEwdzshhhk23RqCndutFQ7EnDYAHsCHDbnzAhwi985UMmRmzvsP",
  "key38": "55kN8YVhbM2vpoaUcsgSfSQo1Wpu8682UH2ENjfBgiamhB17FZxN62wSPXiUR8EGbsAcdc9XKjvGB5z7bTrphPL1",
  "key39": "5dGmD2pdEczzzooRg8uQuWyqVy2kverwzWDWzCoD9FNiGH2qnaxTb4tNU7nKZSBjpgxp24ynVJwi9UCDjY1sk2f6",
  "key40": "wqBgy321WRittdH6hN6vzMmR8H4tLib1vVsYrrQBRXWGxpgFDFALnNmAf7CqMHFmMSje5w2ttv2h5gwxS4jZFuD"
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
