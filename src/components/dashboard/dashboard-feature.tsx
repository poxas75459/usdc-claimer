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
    "2qqjRhB61Jcw9DbuzGZTgxxxD1MeZBrVVwQ5H6w7txJet8arvBGsNbWfigaKSTStEzr7bCdP5cLMKFpx6eoJmJuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAGPwKCWSsm9iKZuiAAnc2hJpuvdeYkipqitJfW8qp1L1QQdSBDc4XxXnPNnzJtx7CtQEpeLUzQavvV1KMc2pU3",
  "key1": "4GFE3FEwHnhNt4UPrxfZFxSTHoPz5MTWgWVM5k9saR7NJ3r5nt6tFis31rbr29vcJgGZqhbEKcr2FX8Rje7daUe9",
  "key2": "2bpTjv4hqLJdYmWQQtCSGekApHQxYhLB8abfeqdjDthBKAmWJCCKG5v58o3VLmgkteqFNybxCtKkRmAzQU3PGVNc",
  "key3": "4f5qtGF1ucfxN4CT3wMAvvHAiSYkKAqtdG65Z6APEKyHCUif16yGaZnB4SPC8o4AcLn4efWkK3SCdpXBaRjXQ8DL",
  "key4": "2gyiAqKNasRxRV4UHJko8wNxpydD7Hnjx9RwhW9mZJtrdoRYLuTeuHnK4kadskKRCMvSJvF7B55nqTPg3PwAXBiE",
  "key5": "5uwqN68JGPtBQNNBuexsF6pTj5hi3XcqrioihKKNXtsEE2qSvpGSgjjPPGTA1Jjjxw8EacMyfBxNExg7EwtCmYxd",
  "key6": "3f27tQDMcQDhFjsv1Xo2C6ZxVpXzNL7m37mzLmTLnXkhFFwmMkwSebcox7xW1hWQw1op1m2Hmaq9X6tcFBox33tE",
  "key7": "3odaNJ5u59H2LG8mWYPQwAPkWGniYd6WDPT7AU98TfiYfxFApzrb7VFDcDkYgH7Zh6G3JZw5B9RP8H63ohmDUuFt",
  "key8": "4RwbiRAGigkMHus25LA6A5djHYZkJpaRE5t6wrgCJRqACyUaDjBgam35AtF1NEBXzihKwnc8U1TjY319juSrm4uS",
  "key9": "4cjLzzFCwKjYgL3sJhzEPpmWy1goGCdb789CbEjo6j7st7A2yhhZZ1D3ZGZ3YQsMTYgk9GMhs92GtoPNvLhPFdjX",
  "key10": "2Xg94FkyzHi3DLe7NfPX4XegGF9FfS5qAW1MGT8s1RPXoCUGC1jC84vFpgVR6SSWc1WsN14iD9DbUXKN7eTxQ6eu",
  "key11": "4RtkMtTRDG3szQJJjkkAoykhVx7P6BRuRGZSvzeK2kfSZc4iPWdjorZmedK32evAY8EM4C5DWJU5q5xb6Jnh7hNr",
  "key12": "4NSeo5MMXmb2oJSVtjFyp5mwqskqwMgzhWUHE5o7b7KstBgAs6jdF8Qu47PFzJhacB4MBcVqZbSCtHNLt9nNDDZS",
  "key13": "yNQGh7jDNgaZZ1ukXhfC4BkoBfwKUstfAGGJEDzvUdPJPUo3gPL9qBBXLZFgbi4ABJjwfKUom6TTTiPkrncj91s",
  "key14": "2CDpk4ZdbpLXmkp9M43SxwHc1c7Sbo36XwaxmPsg9acjya5LLaNsKjvZnvckgfdqfPMZDe8EcaXFR5f52afJpQmF",
  "key15": "WoKAvAEPGUuVaFoaCCGLLQDz3SUs53Pkoa4XsffSDi2dGqgr676vQN6JTtjXWcPMcZ6zddwHUpHDwjVP8xWrbqa",
  "key16": "54YCMbAS3pDPboYtJ6r5ZLFzARspjAX64MpUcJTuoconJJqDZKe4GxDer3m86dEHNpGh91cPs7iagzsjF9rG43dn",
  "key17": "4urzae1yYCJQ1nqXTcDiimqkunGWpm1WcDUUPMVv2zYtEbTKm4LUiT9PQEXS3HfwfA45GQx38muq33YsFWxcWXt3",
  "key18": "3pbbbcQ4YyE2NmV1ZwtNEFUQTxt34GhibH8BSXEJEgg5WotXVhXXNBwZbDCV7m8BekSXDtKQFPMjv3mawrRR6zow",
  "key19": "3Ax1MLvuA9VaWgAv9CNv2sto1ULWWZ9Lq1EbWL4b8D42pn8i1fvV1GPcW5GjD4BezfuLBhqSzKEE1HfKHaC6mYAV",
  "key20": "5xtKx9tiz6wjLxJZ2MrXCFsSnWQygqnaKQ1dfkGg88mWTzqmoq9CZ52245ABDfBSAKH8aPcT3XpKzVUrba4pinWZ",
  "key21": "cfFZPvRHsmwWQAyG5HvatgXPeHY29ryNxBcGu6y9TzUcjy4z9GbhJtEDpH79Q5sXwvxjrRLvenNGwGv4pRdkFQj",
  "key22": "4YsSNjrUBnxbLtqUtqdJfVShhWRmgfTSapy6xxqUDEvGujuSnmFJy7hXJn4aSwRPAEiAjHgRYt92SPXyCWYmeyMU",
  "key23": "2kChE5qBy5mDh1r5Tpa1Qy1E8uAhEfxR3Um9no6A3eHd8DhfBeKqUyQiCcEfJrUT4jZvDtFy5u4AXpwqaEdUD1dE",
  "key24": "5Hbh3h7bT5NjAP8d1JJcS2zv32VSw64qD1fvgejn9bbg7oH1uyUpiMiYxFMjk4bqytxj8p6Suzh4AV6SSdXXEssK",
  "key25": "21HvdckYsanY7bxtSPFx1hQ3oNVh1JFJAMKPPwPWFzekWy6VTGAumJipnwHBy9zwFxtDcYZ1jUWkbtfnsKqTQBRE",
  "key26": "43FrWX7S389yrfx3UnnfMYWwJZYkaw8yVJo83S7KCvQBREpuV4q4aE5GuKSMGnjxJt3payVinQeZVco6DeUKNgSD",
  "key27": "2zWWaH7qnaVG6JfCMXyrjA9FrGhFDggWNNeyRoAEW87Xoyr3naXh2hiYw41FMJngkdKACKV5on9pULTYumrQzm6X",
  "key28": "2dovBm1xXCrGsRmVd658YttHkT1KCx61mFb3FgZZZEJPYeAHrYHSXN2Dk7CXHB6QH19xLGp2BJ9JqxHUFJN4g3z9",
  "key29": "aQu8niGHvEA9YcXkxt19vziVEydAzjgNv8W4bxm28sFhAmNtPWUsnKJr78DE2aodLZcSimZEY8NFEEocXy2EucY",
  "key30": "Dwfn2g8AifrecmhnSNrR216KgQuDxU4dtLwDw3MvRgjLc7hVr1XoopeV4LQs2jjGXP9ZYd33XPJLMAjKD1JtQEr",
  "key31": "24u6iKfkQWmWnBL6TbSMb7PcjRwX9XxHLJtUUU5QeY4LZAGXgBJYK41L1piCYH8Y3NtBmQZq8tppvM1etkiJPD68"
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
