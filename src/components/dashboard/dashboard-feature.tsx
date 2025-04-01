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
    "26tjT887eH35bGyWHHV8ddFJnoxWaCMU2Tbm9SDqWdV4HCf8dR8D4viECgY2JJX99CqJEN1tuTRFzM7WeQ1zuHc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHVQm9tNhg9t4iEWHtuJ5wrahV8mACpfHWWxvTy3yZVGuoageeykvPKnkL7Cr1Vhk8oH6ooZxpQJ6x2Xi8goEbE",
  "key1": "4HRjMrAoPeKUX2jMkGFUKttk1Tk4sDtJ1ND5tk4Dyd76WgmcDLXME51VF45fe87k1LrFvCSmKVveYNkfrJkoUeNe",
  "key2": "3oMUD5frmMn5hYLZe9dxn4srjxLNCjvRD8Qcge354kNzQbjonTANKkFxUoNyp8vC5z17A37zDweh5mg897a96Xjm",
  "key3": "2SXx856GDi1FKzkjHSQqXibuKf2yrsuVZuiL5Gexx6HdcUVpLkdeGnqFW6bni8hfjMWeycRFrLVjMagwTKLFRRP",
  "key4": "4R1ZKSPGS4gGUYFbbWor54SW6wp7PgrSb98MWUHmfFoqvUY4miGf83kXBSXtKeVvFJ9r7cRzjvkSKfL1xBwm8AGQ",
  "key5": "48sgoSE6eFHNZ46P4qQfC3UNxArQJR24GeRtM1sdaaoffViACVKq5j2Jq7xByuKWxybPx9BmX383AWBhRGtMagJ3",
  "key6": "47YWtKyxc9gzcVstnwRNbuZ9JKSvb2zoyQNW78fqaqTbPAdNoCjWn4wSe7WYvJburqJ1P1p5wsdVnco5v5DV4D7R",
  "key7": "5moYzR3mCmRNxhbswfYj2e1gMkmJdE4r4wfvDy8RTdRbafkMoFiXbTTntRjvst8HwF9U5aB6f2UJ3yiLV8XjZGpE",
  "key8": "3gUdg2TeH768pYJ4DdTCZvsvDAyefEXYb2T6GhX3UqLyTPJ8hkBUKexXvxujiRoaDyFj2eGuwSnXyP7YUjYvwWht",
  "key9": "2NaCbeiSDap77o5cZX3up2suezYQabuu5i7oR2JMSAtNggBnZ87jFE5kz6J4vLTqVavuWpxNTfUuhDUUdpk9ZSbK",
  "key10": "2aEKgHzc5ZyeJyzDuUmYwkTYvy7ibAWwMjtTGXFHMU1TNjQ2Ww6BSkqXnAkaPBZ8QF5bnKgt4DVHcN8EUFbwpr8",
  "key11": "4Yvgr4EtRsWtXURTa6w37n7jEmM5t5uJVixzUez3rwmfw3HUit5cetqdZkycTJgGdGKS7igPjdYkHZuxgFnf5N7k",
  "key12": "4jKyQB5PAakCjQChtJ5UYgVGyrYnzNtPiNZ7aUEVCNNoY5cpSd4n7fgwCJtmR99mSZLs6QcFNB6V3AbQrZR1Fe6t",
  "key13": "GZuaYLKv9mydzy1h944qBrQMwzWpg3nGKcwkKkipENTLZYzwSc7h9JcJ8ATSd3xxvGkdhM9aZE54F4yupSb66dP",
  "key14": "28vBDHVL251sMZNHqLL26AqsWcdB7ahT86A1MtVcRf8dZ768krVUSLs3X6oLiLMUUfVfKFzdYN9vc2u5oenJSMnA",
  "key15": "319NzAtLhvJ8hBd31eSc7qksRsJ5ndESkRYLcVHv63Jp9QrDHAUZBHco6VD4C3b73zZ13EEAcn9T5YWNQZni3kc",
  "key16": "AGzHhutGbzv1AezNs8aNh1QM876P4uND6Qrbxo3kZtrsDVJeb5DfeGJSQoFFs4mAa73qqTgagmzXt51bdgtsUaj",
  "key17": "4UmSJTyzspj7vNUNQQVMf86LB4opQQq7dYNV7fWEfwWqM2UbLUEmXHXK24zi9XEtJYU9RTuSjdEvifcSh4TUZqwF",
  "key18": "38JTFXeJg6ab1AkF2XQRyDKh83YpmExsa7LjHCDzKr49Et1BRpuNcvun9rBg1pRxvREBimeu9CHJqbLREkTCnCet",
  "key19": "eMAxuJpx3Ke2Th4NL5RKvregfkEtz5RP2LwHKXQ7rhKsAA54pSfiU3fA1A9nykZtyrxHWJncpwbLyAPkDbpdpAi",
  "key20": "3tDgtbZwPYd7iRMHWuCtxywou21rkRYvEybmb5iqnpxoHh14aJRUKuF9ekjyWTRCfxuGkoH7AiNrJJhN7JE5kXw8",
  "key21": "5YrJwLnBtAMiKvKpzekfgeRZcD5tR4vHwUBZDAYuGey55T2X9kCM4KzZTpb82X8NfjMsU49T9rEsHKFsVHJGD9hC",
  "key22": "3U2H9D9ixLyaEcdjASKg1MVmNUaFXecE4rRPzTJqbqU41aJYa7DjGjvCAVk6wJc4aYFXZQCt1H6hoQ4XZL8tQdno",
  "key23": "3RVW5zFxb8CszCyN4uNwbv6iCLGn7UioEu4DXcLLcjTyFunHMRSXGYcryUaKZVfXiWnh29brPumepPbLE1qYH5rd",
  "key24": "HigUQkvxPehpbVsWNm6rpaXcZi74rFwt1yi8Xz3P6CZTv8EfwQyBP4p3zFs41uFohTvTUtXAqX9bw7r1fYG2Wf8",
  "key25": "3pbcAjPNB4t4hWacwPLJF6wSbGwRk4jbtDEdmR8c5wmzFGNC6V5zPTyJfbwjSKNtxJ6XA1wg35xTQfUDExBnhwDx",
  "key26": "5DeU8myvPX7exK4KWGtMc674oFrjQSFPtwiJsY375cG5ZJPJZApCzLeTQx8okXHL6bHqyDfngbzGwyGq6Vd2MY7v",
  "key27": "5wn4BZfrqo4GziSa6pAghGbsmJ1RLfjj3PZBzdFqtGfwxVA33hbnWhCZbKkC59UTZsdJGHgGuwcTer7mdfWqejVz",
  "key28": "5FmxoFUisGdvjYHrcJRP6dEwWYP7kjF6kE3GcLCawbFeVs2UygNqcirTpFphxhLD2Redt5sfEz2eweYuMVARKp8g",
  "key29": "3MuESk8BDEmuha4zav81az9xdZXxtirh72wpnviZxAvTv1yUQYrd4BPv6cM5dN4BR9AJJnCNzBt8rRtVZnUipzX7",
  "key30": "3P2sEnLKSfUWXiQdcUtF2EdaXLyR1XTSgqHvWH5p2fNbntgTzjb1o4XWrXNpXc5qeMF5iv5NPpzqcGustpNHkiqE",
  "key31": "Gzbxdfy6DmWpLmayrDafumjrsbRj1gAsSMGrb5dvQvFrVZnx9Q9HgJF73ZtPrLxy8kwgJgr1Wv99Cjsc8PHUfER",
  "key32": "32JtcwmUAbk8sJJ69R259UYo2z6a1TZDPyCBcLMEmVE9917yDnCtyVw12HDhrH1P6Y1s61WHjtCzo1Nd2zkD5Diw",
  "key33": "4JpLZb6LUbPAHfLTxDtWgAHjpiJeXckYN73rfshenusczmSpx8XwkjNZCiEzzKtFRSqFNyhaGGSU9Mf7sCV8X8yW",
  "key34": "Ejs1qNZse8DBK5mYN1CWcXzdsUMEjvpogzdoWWfxAc4b4ps984RevAF8WxVFzd84oTL2QMLaddeodSJrL1jK3oR",
  "key35": "3kh1pVLNh8TAnucESUnoojdBXieQ2fEU7ExrnkLrw4bRbBPhRGUMmysXubtPvmwznGZKqNYYfPKkMjZNSQXhQj7Q",
  "key36": "5Q6SaV6NctwWePBYkmc24RnRmdLh581BrA9138z58hRMz1rY3wWzN5jGpB1A66kTFwGC3ZVFKJhxrAAyu9wPcfAs",
  "key37": "4BhRm2kZdwMQwNsBqZs6pswpbFTQCDs3nRWhvSmXLZ9A9oPNodMxSdCzT4SLqTDRPBLayeGFGYY6677HQsVbyZzT",
  "key38": "4hbKV5UbnFAXoFjnncZAKZdLxitJQBZBEbsh3vyWnqv2qevXh5jB1cAc2bQwvKH1sfyUW9FNngvntFtntUjqnQ4b",
  "key39": "5thcxVkPMsRGZWcC3NYcuSy9uNGnTSfv4DZzbgHet5PWTf7uVHaC8cHnA6QfUj6hRTg32a8jmyMuyADqKeeW9B49",
  "key40": "4YmqoqQikLCv3TywenaEJvH8CuZZE7YSDD13uWZAebeen9kAqqyRMUzpUBiMsChzofqZc5DxDB2fqsYeFAyETa7c",
  "key41": "57L4bRrjiQjXmwEdG8so2JADmTgrvimmicAXvq8CbqmjgLPmB6aZeaGF2uxzKe1m3uRQRsg1dxmCRwLx34kSWSaV",
  "key42": "3FWR3Cp4L4YgvocPKvkTML6EJaxs9QuWfY3hb4p8ztMAUGrsscKFEeYsWYrY6KTmz5DABa5nnq52nYzLGgAgEQDK",
  "key43": "3TkPdyq1s7mN9JZgboZjhAH7aa8GBdvgKBRVVwwDGBPZgfkZJ7xWw1MgMunTJT3SwkrDKA2PWqydccmtvPQCxZnL",
  "key44": "5GuBY8jRVjRAhFhqaEfue4SgkSGq64xTn2p2AqmNfysaR6FHzn4WXpFqrqPHao1Hkb92YHZRfk42YoVpkw65CmHh",
  "key45": "yEUvoLEAzyMWvspytKLQDQnkFwZRPtxXoPrqoYQcBHNX7qx1tLqdZMKhjKXbr9xW8LyMzgsYWUS7vdWT9Q68wpY",
  "key46": "38BF1wYDr5km5aqSEoCHDChiTq5FJG4YsnHmLGw1GkQEffDHhfY3KyGm1URq5EJgTfJEutFrRek7oBctCJwsbpfd"
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
