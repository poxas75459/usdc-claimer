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
    "3ETnvzAPMQT5Pi6mYx2JSdx2aCvvpJp5NBqGic6G9x5uyc37qsgatTzdHxshKmGvwjREhzA4z7oE1cCQoSW9FcZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Qf7M8VfAyTW4bgqpWzagbs32SyfV2xPuQiQJrGXSuTq7t6BxqCMNNmBqC8fLhtPxPW9zwuRsUhPHGGs2gNiuXs",
  "key1": "427Dp6gy1MWJtTxpFB8izjVhjZPGGTX3RVZmWH3vySBS7adWoFkXtb8LEF7cBLsKbwwxE5yYiVE9DAefUvUt6GZk",
  "key2": "2bU4mc4XdB233qEe3nTEfJ4Anp3Ugzo6DhE1mJXt9WGLHDJ7jFQyMujvFwoSxTLs7RyVK5pUFHS5NaFXvxLdSqA7",
  "key3": "2s1cGSXa2FEDRMMptQZJtzppNAk9aBUJAQ8SXFdWW3qFCCY6vBrTRTR2LDWDGh4yQLnyzhYsjvyfp8LNhbtmbu5Y",
  "key4": "dHH6ufzu1Uo8j5MkD9ZoJgrUHKrPDVdVpRr4cpSUPL8jQ5akNSqqXonrdnCCuQMQAtMVqqBeSV9jj1fSonbexoS",
  "key5": "647XhP5bUxtsBVhdtKVQKb3MNiLLj9aenLcL9mAaN5w2ANaob4Bjtsufx9ca9P6FddeR3NypTBKkgye7eeWviHap",
  "key6": "4zGvnyJLevbtMsnH2tvYvUZRPzJJcwDtomo7q3FTggiaqFZPLEGasjnVrfJou9YrvqF5RfCz34dbpanGotBXA3i4",
  "key7": "kYE5vnVm4Wz7kGRwhaTkzv9utX8Sru9fsB8xFj8SGoycCDWswismF7Mat4Nm2mHdGYZVk9RcdpMwkqex7hHmiGY",
  "key8": "5Pin8vNVSQVdFjbNQSX9zxEVoHkkzADT2UPfjyDo4jn2wegaf5QqtTUmHazRRd7Q3Wq5tgp8T4RNwAWyk53y2VtK",
  "key9": "2vFC8c4GWKYQFukSVus3qQS5VzCMhTSm27W59LQ32W8phLHDMiKnSZPY5CgkA4wPC8xGaDa1Z5cau2NnzboLnnP2",
  "key10": "3J3FGE1Xo5y7xin4ow5yV64XXc74B6XZm1cziEeUjBDio96D7gU7vQ5ffn16TexS7ky8qqatzmTz6PTtmAo2ay5c",
  "key11": "4bDF55KHuLMzgbRHBaj268ZY8teuwoUhrob9EVSqqB3f1e2MLQ7UscDk9CJGThZHv2QgjoFBkAw5jcUdJtAKy4gW",
  "key12": "HH79zK6BBG1zjK4c5hwzRhgjyPw1rD43SijRYuBoXw9es4e3t1sxVgJQR8Usrw1gUph7iLM4CRBjS7USQBot6kS",
  "key13": "4rcrSaSXNxaUVCFSiwGnLUW7LVHQky6rN1A438wXzyMxipooM2K7NYbavNNsqLD6qmMnftkDkKfPBLTT1vuUPK9t",
  "key14": "3bN392asdimYAcY1woVG2HRMJLc6dxxmnAXuMqsV5TDPfFtSVV7U7c2eXjyrv3VCtSNxhQdQBuL5v67fwA6MvHDr",
  "key15": "4M75y7JctScmw1hGBrJzfggAAoMkiNhjx3nfSpgsEJXe8DqH5AGXnxydehbnBAs2H7ctgTfx7r2puz2QpYUN3VgR",
  "key16": "3zPnV5eH41KC8id354LzN3QtdX7Gmt6WNAoZSqCTpDu1jTy1adKbe11V6CnBHTibRwU5PdhnrwCtRsrcnF5CJ5VM",
  "key17": "2bCebfCwV51SsJETVYPxbsh7d6MPnLYhnUjqgx7XrnsPV6VY9Z972tJPEfWTrUrKBWNmtiWK8VND5KGDctGe2cZA",
  "key18": "41vhSjg32nkjwhGTGX8K7ZkZvQ59pR67uzUfmXJRT5ciwPN8RgmxJq34tugYqYh3cFFprQyqktYxfyVpPwYWGhKQ",
  "key19": "2H3axR3ADMAhFb4gsSGkRWqfAsnNEMESKPiHjASQoDcW8Mu6MGtom7S2rqWpsUxDkgiSiSAqXFHdSvJQ9TX3eRH7",
  "key20": "44DwtAUGL2dQzJU2AhxJ3LGnnrEWrVvdmZU3yGTL6qYhSQRyPzE1iwsYW9m1fvqMpwiGQkfE1UzFpT6awmyX1rR8",
  "key21": "4An8F1NFFLRLjpv1kMARhEQ7T5R6eLGDM54pg9ys1QBYxZSCtiFnXp6mk3bA3JjRghP84mCY9xLomrWqu7TxfjCU",
  "key22": "5bQPxTsgzj9tRAXHhCEBW5yMgBnhiJq5WMjkEPuqWh8THiP5kx1eZEssWricvM8XJxq9km86KFQ8KkkmyAttr69k",
  "key23": "4UY3wpvWmKKy7rbUxsTBudhjZQEW4T72kMJCExZyTMAJwNRiQiEieBxZdt9FmZDUZc1iKzEybSeQaPUV4N2NL6jh",
  "key24": "3ipTTsfxcnZQwJ3LkGhbAd6vxbFZhtAdjYKLYBjXoRmGgdyCTcudND9qnvnGx1AtarhBkU5PhksyTN5ni1fETRPJ",
  "key25": "4ucC3651MAKdDebYjC8xHZHfEVoRbdB9F7UcSECrnuBRkkJM5pjMuUjwa1XhXYMDJvvU86kED7yxURGDKgdz1qLE",
  "key26": "22C3q8jyoRzTTvTdyY1te5Tq8iwKpQFrjwLmGTZBRdQGmn7bwfG4DoSUj5kTv44VKGMmaQi1279yU1pADH7W4F91",
  "key27": "3shgTCk6vaCrVCDG3JFQaVaWV3rxkEpbZJMuRhmc11qtDErha83wjrD2urPta5dpcf9VzSCUzyHGXWaaiEGmACZa",
  "key28": "4nDQKKAeZ9osDWRsU45YcuzJjEnVTKdvD5cCjSTjhfWPTnUULD6KCf9QNyaJnZeBJyLxH8eZpFkysdJos8hHJEtb",
  "key29": "3RogQD595D8fUCFhuV9z7ugRwXMc7MNpcuos8cWm93GzwAUz8ZEDJbocUPBnoYmyyb5fyLf7b73RuV5woJPEzJK4",
  "key30": "5dWzLWrXZUzYPibjJtUwo994eSmMNTRfTa7uBmiof5guy741yHyUtkrQ66BZxYAtv6QQoZLJtymtAtc1w28HZmtt",
  "key31": "5vfuJnkJQ1MvvBD8DA4fv1wSVxYVPhA2yv3P6N8X8YKKcbRdQxp2frB6SQ2bovmncfvTzGTB6x5Hn1XudCYtCyUF",
  "key32": "3T4EpGvj8FFvk8w9r2vBEQKa9U7NBPzviL1VK7urJLyHXAaJmzqTk58Y8Cgner2HAhdWuuVV7GW3TFzFisjeVHUm",
  "key33": "61qHHApRrNgqsFccHaevLaSKeUBYhfiQYJqK3YUvHMwrAfz16PB3rRsGrPkggjJVRLcDQsB5ZwNhxBTMjTiEgUSo",
  "key34": "2hQ8r38M8WpVJog61P5e3Ex3gemND29F46954dccWaNzdPD6x5y3nvzJFC6fk15YTqqBzydve5gcERBN5LfPJZHg",
  "key35": "5gi2mSmXzXQAkS2qkTvW4NrWJuE94geYbytiHARxetWiw3JRb4ha4UzLHVhdXPeff5GoJKhsANLqoCzJeuzkrCsx",
  "key36": "2BBeubueksghkb5dXUrSTzj7P2YffAiXpkm2vS1B6atQy3ztmXgzR7KAu4DVXdZGSPNeuBJKZMvGtqPeCfTu7yrY",
  "key37": "3kT9y97Gp9exdUp8qW9WddEuG5JzyVQKRdLrxfQsYuaqy6mf7HecWh9xx99yPAxQ1iNnQYdn5VAwzNT7kA8HrCEW",
  "key38": "2ecCYW9C5rXMximzirzuBvemqabPX9UFtSnv1zC4Ff1EnfjEogf88P9dy7BuwA7kgzeUeR7VGXZx25sfGeTcE99Z",
  "key39": "5cunc4z2AfFSTyFGHM9uLuXiqE4Ug7eKFU69EYNDznFMhLQP3vGM8Mws5ug3PRzVmNacbbewgjWdRH9sM8rSSeoD",
  "key40": "3y4wAga2m4tx7XNuARPUHFQNveurzP71YRvJBYhk4JuaJNEDNGkvyShs5VqEzi3VdV5GDUyGH46Tcf9FGL9T5HKV",
  "key41": "2qVMxhs6HzBuuoDhDyjuNuzXU8hmCozT1DSHsiVzBKb1CwssyrNRJrrzLgapS6F1A5guLdCisXzXAu7ZrNXVYB6X",
  "key42": "5ZmoFcevH2WvyT7iNo4is8hFScmXvMDbNKyRd6Eiz2wC7GYtPv9JoPd7hgEqGQuuBSuffRhd6MwWFLxhMhLWz9hG",
  "key43": "4FpG3d7wZGUNi6m85N4f2Ub3yP2zZ4BTtSezN6kMRZShGy6GM8KAzDyhHGZ9w3PrbYmU9EnXXdQLkrn6iQ7gZkdm",
  "key44": "38DwFj3tfU3mdRnyXpSWAmc7gsY6WC3dcmjo8CYsDip6WWnyhEBSmbo5nagxxVtPBU9SbBN51st4mox92njyhrhM",
  "key45": "4dzxP8hMDYmvuryV68fRYKEewbeNVHQpCYWWzmCsajfASqfpzBAMAYMJGojdfkRfcnD9zzAyvB52VrBdG5kwYedR",
  "key46": "4niMGJKeDCKhk2DWaTC36SFLQn8h47zewC1qeyuoFRN7pBfhGwPBFFRXXRamNUF1YHJ58ubniPKsxBYPU3FyJXhZ",
  "key47": "L69WfarxTkWCVXLBgD8cWkWmeDNrAsvEE2dPGX593UTvtqY1q648uyx5ojjMnfqq9F6ZurtrwieRcvg1Rm2PxTH"
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
