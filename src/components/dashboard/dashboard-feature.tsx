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
    "5nXQGZQgnjhSUs8YFPmDDtj9FDiUmpJPuLgh7AmZ9hY9mWS2oQQnG6gtdTwScuXCnBz5dD8316sXGkUHuDvRiMLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM3DXmC8Nufm28zca6QUADHp8YdkEzbpiJLDsm8t1aCQsVTWuJsnJaWpQUCd71a7KYgTNwPDHC6SYCzjgks9FQa",
  "key1": "59ymwYJDPYVuqxHHMgvC9xcK63axnwECjrvP2MpY2V7xtWotwxADnmWD3myezvzTSepgqf3uq7znUKPBorwPPi1w",
  "key2": "5mfA4t33Dd36VkiDyDUijeybCWr9Pfqir6LcCc8KmfJWZLNPcBtHYtqsR8i13cpLL5JbqaKHdhELabTGZHY51uWB",
  "key3": "ajp4FdwMf1LS5gWAau5TFUStYzuymPEp473kpY978DBAvMdC2zbtUsBzWq2FMKSSaExNtSwcYKheNA1TyWebvsN",
  "key4": "2r6LA849wempk9z4VuicS5HdK9ktNgw6QwdDanpBfZhZrL58djmeEsAsCHfn3oA5XtaW9HkTURhZc4RF8SZ6gxGJ",
  "key5": "2yCS7AC62gNc4Cw55rwtYHftebK9KhgBsoHoEwfptA4MjUJKx91u7oSFTzUbwnfSJz9QmYdPWzUtC3JNfGCBN96L",
  "key6": "3dA82YxKaUUxcqX8YD9aeJEFfFH44E49kakVubKUQf7BWY8WFB4Tt6NqaZgmxNWP5gh8DFJtphcfYaba2ZBuvwTc",
  "key7": "4xrkLxBWMgV5CjgUZgXr9WJGnAd5FXR9247jQPvBYUoJoU6uGFdemL4aAtW4h8KQEELT34f1G74p44wAEAgkmSzz",
  "key8": "2LQMBjJGFzSdsYUZjEGHJrcPnCA86mGv2gptxZgoYKxqkajhnuGPE1kpRxKYHmXG732kEuzKpMTHD9AAu9PJVnwe",
  "key9": "2i9DAmPqSPCGX5nsWdtvtMuQGt6RWrqSXaVdoLo2GGSXbtFmuoV7iBVkjmTV5P7rn26soek5e47gqaMjAqPM8ecK",
  "key10": "4MWzSu3hXPK5ToLZCJCaMzZFCmP8c9vCFEyM19if4KJ4jNzJq8XMUHDBkGASS2NVdaz2Hhb9T1YKZ6jXw9KPiQPJ",
  "key11": "Lxi2heuGjUL3aaH3a8yuNg6kadZupRaRp2q3vHBEReQxhsjjZGNDQS2X5TCNWBTvhtzwMrHyZoiKBnbZtnEoEDz",
  "key12": "42iuqc3pKn94Egvm8oUCCfhCry9yZvxCQc9bpdg2Rk8Fqh1Ab8J52pddAKxmro8VEnQbPJSzPS3LXAUoiEZbpw49",
  "key13": "549fzQf7TL8x8mHiakcgUQBoK899TKcFnNYJJaJTPwDq49daWGLoZBjX5fqLCDkzfns4sstSeUYjrr8iNLXrBebm",
  "key14": "2zfodjnF3R196ebeu6RuSymPmyDV5J6epnWzmgXAsWqfgeuqS3w3QxytAPBajPCLkMk9kxS7Y37fC2vJL7acTbiz",
  "key15": "2EutqeMrdf3k1tgZ8ofAE8xfmqRKD9LSUgVvGJzovQvM1GZ64bHVkQmgMZeF7o9icYvbeVWP5ozH8ntX7hVXi9G9",
  "key16": "2QBebEWCeof26ecDyswfF2LEiT4sKRWTZpGFkA3PnFqkrTLk1XMs56RhfqC35Qdp6GZcX98bMjtGBxUmE1jszGc6",
  "key17": "4cF4vJVrJXtZNyHYKxEN384dF1kp7rai5fKENoKA28B7H68hiXn2E72y5XKktv1mwQ6Bzx5dDzA9rZi1Z3FzidvL",
  "key18": "npaY1KUchwpxhxsVtXwA3wgobWbHu3rneGcaMZ8TBtVxsHpcN9KNzsjD4fNT74okxWGKX4sju84a4WoHedNYuyD",
  "key19": "62peGLCJ8DDrm6cV7s2WtaBztRemALhQKn1S7TLmjmJpVoTiDkrZnzc75A7VjP3aLoyoUkgkuCK9Uu5A71c5wQG8",
  "key20": "2zSdTagx52KPquB6b9jgGmAph2fNu3XkvsZTu1cJxxj5ASCEdW7V7L5bH6A6RRrGVTNiH8y5N9VYYWR5czgj1RWu",
  "key21": "5zJvPQGmeGyZFArPfPS9rPTTeUBwodcQAFsBWN5dt4HRAGGZkNnym35xLaHbLtiggAfx5HYDwcV5Gv97KfhjF7CW",
  "key22": "56F5kaTP2h8ynahXGfeMDBJEi2PTHRZ3BNFStFduz9ytA72scmLkzYyT4hHiKFfJChXnQ656RQavkHa11r9vbWWL",
  "key23": "9wkdUEQy9DTKfvL5XC8wqAcg2eG3P9kLMvL4Epn6gbh5mQYVv5u2n9vgnURmx7bMrLfMntjHbSjhwup9txDVNXZ",
  "key24": "4rERo7CJNK2SyW3uK8K7zKo43yBW1QkZCF3C1T78EGnYpsNTSMiaJth2PBaMedapB79JiprNoGNnzREnqUwfJJoM",
  "key25": "hKB5pU7Z4QAydUX4v1P6S4MeYisQ4w4cb9cdyBoj14eQ7EyDAzasL8iWVhzKzLLeQnqzbPYNomdPkUGEFkhFHAc",
  "key26": "63UTbAFzxh4g3zFAic7rvLukfnaYFgU5oGwrWPaywtsnCGrUc2YfSnSUCb6aJBPfxhvvsD7pynAeG5B8VULWeTYv",
  "key27": "5BaVXvRzn5kffFG9FiJEFpAMNaZ8pi3fxW8o95YeBdPcGUx9AbNJxeMHZV3ZPVDzmTTyQxXJSxW7ubnKYT9fsXS7",
  "key28": "5T1xjhMaiG3pgk9dSeWZeX9rVuPLCZExJgMP5j4ub9SS4maHTYb3eEveEButfDCd4P6inb8XUjszMbyLceVTzcau",
  "key29": "217W3sm2Lj1RwvyUAkC4d2dMY1xVDZj2c9HwzqZDnZwyJ2d1ejGZjs8XKgWMtWvxDhnk7s1vCC8AaETT7jHLVpgZ",
  "key30": "3r3fxc5fjHycxCYtCX3txyTQUQbxiBW324PUNXS5cABbcPGxAPAhtzFtKBjib5nQxam1fodnKDyiiZZdJbn78tbh",
  "key31": "46t48QSQZ1U9SzXLp2TcVw3Rien56ABAvppc9s5jFGFZp1oyK9PgFfgvvn2mL8dp9q2fiP9ufBSuQyJJYFujRR5y",
  "key32": "2sgAKXFxxUwYc8ZAzE5nB7pw6Kdtxjv9aeM5ogEY9oqJ2jp5Gzas4wU9usaE4hzVP2zdf6mk6vBuVvrM29VaK34U",
  "key33": "4z4dddUQQTQbSjGV1uAz1s2tvxi3KnAbFU5qJYoQT42CnPzYHWyzhHkj8VS6p9qiMiuJQRtJEmHYNymkrsN16xwq",
  "key34": "3R7tmwRPv8XcLbi6y4iMfqBzaPXuoopmLjovFWLw6ZYPiFNgesKyDEbvGYELR2e85pfb8r5ikVfFSV3jUygngXCy",
  "key35": "4AexS4KTpUbAvJ112edVX5AXUpb8z3tAsf9E3o2hW58AENiah4Y4EGPxkkK1LCJp378XkZT4RutmfRcY4EXH2Ce",
  "key36": "2g1T9M9Aki3mr72gQpCGgZfXpk8KRb1pzy7DxTVE4To8dvPuh4YFiLyqDgukLzDLqbuiVAqTnjNUUZamviJmKE89",
  "key37": "5XVCWW6g4T2VKfEH5DwZEReQeSY3FBXiruM6pTg3Rdgwz9b4tiJZAreGcVVbFd3vjjPyhiPFWqdFq8BXdGA5Eqnh",
  "key38": "58YHsek2QTTiEG34T7upZDAgXBjmA6QZ6sM3qH62PRBcg1ScxzxGnMnGmiejSpkrtWwwDTcDMTxgs8ywb4XvkB2M",
  "key39": "BbQe47VSVnxzUggkSQYCCLemt3QtFzGCFdPEo57cMxyVtPPwhEoE1wEGgvpPYhsuE7DzXBF4mTBB3Ut8QiqcQMb",
  "key40": "84Arh383LSefdRqwwSauYBPuyJaZmfSHXKX8Jmdo7v82AHwxJ8gSzrgHhKQPgK8wuzohcpj3WmjCi3kazPqYEbV",
  "key41": "8UvCrCqYo82uuGBes6sFMxxioHPX45FsZ4e3dpwJgCKxYkuMEaXRM4L3cyu26igoXs8NhAXANSNKVFmF8zzioJ2",
  "key42": "2M4qeAyfp1CRGQiZ3T5xMABXdkCKScKoofttZEdiSWgZjfGFVQwsb6MPSLXpjsTpy2vrPFtMZsDYztrPXukFsWTh"
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
