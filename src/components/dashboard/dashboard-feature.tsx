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
    "51c7jk6bd2DRaQvEh7LAi7MxcuLSAcTFCUC8CScrrRtAKB1Ws7CPn7twVuN44FHUNFa7YJ37EAx7EsFnTEYXattn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtomncSLaTsovgaejEKdQe5m48NW1KVZXFXG5BAbZJpfeTvNdeqJ19v5gCP91WqpwuFsupGThMi2QCpsS4xbtTw",
  "key1": "4B48Fe7r3PHh8qKCXBVjWcHMQUNuKC3TMi16Nn18ZFvQ1WHnGmwqxWqeobRAHuL93LyMZjHj4KrrtKyS6e5YEU3t",
  "key2": "4FZ3HuD9k1BEPRKdW5a3V5DrbiTRs38bv6ix58VQtLr47YBwhGB6G5YJWzuTmjo4UsgU29vhGz89zpYf6HMrnnDe",
  "key3": "5NfCqxyoPHNDV44UbqYFnQe3JvUAMJruvtQ3xrRp6yG6yWkNTjNtNh8qiiJSMDZBhNW98cGZPaby6ossvNzBjjpL",
  "key4": "3VmBi1ho8cukffvsLn3VVgnWN4k71xQGukZGbjaaWSYrY4s5b5SzL9VCkY7wTWfH4jaUfRbjmkw1WzjafvWLKyyv",
  "key5": "HkTftnHoWofhDjn1FBesj5nz338mvkzSZjoAAVvQbGMcKHsfPTzh7XovaH76TdRyAmfo4scUuAxYuuvrJUo15m1",
  "key6": "5L4xyDHm16qJTMG4hSo1Cp13bqEQZL895t5xT7t1Y6FAyZDLCtXCtHMxD9AsEG9qMqhoFZC1c3x48CddxzTjpcoo",
  "key7": "HmX3MJSopceKU2nJQSp3rsxdWaoT5EHr7CxxTf1UMEVC7yUXPgQW5GK6tJmwEH2nzVu1vuGCX7bGTA1SAwK8BMn",
  "key8": "2DztkKfrEwjuG78h2Qbj29VRvw9UupAaPrxUErQNv4pNXSNHzFs4tEFdWguz8BawUarzke4kmeg7Jz7gmBrrtVXD",
  "key9": "YyeXB6rF1BtxpGosAy3ou46ELG56BoWQnQkSKjwo8iWAQzZwUpguiM5ytBh8RMymyho5czFdapnQhMWu8fBisqn",
  "key10": "BB39zyU2c22HQEptF4CLSmpgqv5Q3QfjXaJsyNNY4U4sejgQHnkyJoFWZZsYKNKkQH2J7fMnviSbo8awtreMoGf",
  "key11": "5edHGkwvursmFqTS32V9RPUjhjXgaxxJV7XBAX22AaQv6VNGRLKGNEsLm3nCFqZXjPqRT24H4JgbnMW42X3uVwJj",
  "key12": "vXV9QZHCqqEUj3rbLZhyyTPYVHr1LzYSt9qm59G1tGv7MdCcuR7jqDfTKgxSoW4NjGiDo6o71uyZ5Jd9oPPSWyS",
  "key13": "29x8FBux3PALfxqJjE4ftVMSvjtwKSbL3Z4W1i33zR6MPZLqHUS1xoLNg3U4GHxzmLFna8RCs3fLkCvZ74Ce13mT",
  "key14": "5WJhndUVwi8EkraiJYwkb5E4zgP3MFNRUBq67PTHsKBWX1TxQsgxVww5jwMh3wpgG42iZVzjutGBvbwxH7n4n38Q",
  "key15": "3xnDeSW3xY8UjP4yh36nWYj4eqrkxNbQAqE4p1oaxGEk898Tbb6yJM3rMexsyf6VTez8hhvaHmKMPM8pRfabzKUv",
  "key16": "6xEDBZZZc8XYRGyMWZnQmp8SeXeR78TDkh98aEy8fe9nPuwhdS6MjUwUAudaLChxkw9aTj8NkTiTbJoMacas2Nk",
  "key17": "5JJX7XkJ2as63Z6WdJiZFWuq7LSPLX4ociP9AaBZXhkB1bKo97TkB426RG5W3ztkMwW84TcUjHwhfa9ZK1tgsarj",
  "key18": "3YTeCupyhL1fbRrk5Zind8wWpxgWjL1UsRP4A5rbJVLXg6NZm4U7b6oWQw2SwTriy9ZestkCPMhbGsyCqgcMkvVP",
  "key19": "2dKbm5sHjdY2EY8M4AgLX2PUAoHtGpssdVqnLHgwfkoCEP3bpMy2nTFX9sf4975RTseS8B7ojPAU1SGu9LjKfAVf",
  "key20": "31Pgb4XtQw4e8ivrSKpTHwSNAbfFL3vv8BXPZSncXEVtbqzpnrRYmb1fTUgqxzAb5XxtdNqeWmC6iGKm9G3fEzzX",
  "key21": "5m25wn5QFWLKTF6FuXndzDMsqDXCSzw3AkXrWCMJc6HUriTp21jj7EzfBL7PiQXmkfsKYDwfTPkig64aGHgj55bz",
  "key22": "2zphbi8MsVFBjzqaFGhHpqwzxBcYqXd5s9Eyz5MSgBgZHnUSZee1q5SxT1AQKBBMEhQYMpwfjm31Us5feXaLZE64",
  "key23": "ekADpEDeNBwoMqEjCYhnZdvT6STnmqFLoWHZjF1L3jPw9sUh9xgB5f3kjFMfpr7rwZQwKmydYMbL7oUgRxPKviU",
  "key24": "2M9N6TXyXXQU854QtDeULyN9ufHkgAmnRwFspzZ4joCK5SAfXriPzs3ECaMbQGEJptS6Dukyk4dqCstCXWjf4PEW",
  "key25": "6638RoGutVLwMwZuQLSHU3PwQycku5uSawodJ1qKfZURToYg5fD8XAJnaznGy1EdNg398ZaJP6DTWZLcG7mdz9Ua",
  "key26": "WjC3Yo3it3ZMbk2aA6kvZbypT5zQeNbgyv8Phh8cvV1Ve7n6Q15CbLYRGscGCX5ZXGf1FiDkEbnzcqX2e8o8Gvo",
  "key27": "5SpokSriqTq2hpdo16Cpo8pfZ55hENZGVtWNx1qgai3TQupE2QF5NobtUtEyf1Fy67vUxW6KLdSvtJXKHByTxWP3",
  "key28": "5rRXQZGz4zQYaGyjXMSrqTcdSqAfdB4AY6HWLKDBxgqjXRmpx7ScyzREa87jMKSYWhtpnYgKuc4ddrQXESMt3SmD",
  "key29": "2QRCtdkVAnreUaasKeEaTyhj15squUswjyzQcGw2sBEc6FjXG449SrvCGLnces4Hd51kahF9QhcJSVNVdoNc6j5k",
  "key30": "5CLcc73n3cLJg4dBYpUH49sDm4s9JdpbP1BDwmWwiurBjUynop6SGUD2rLrX9ceXCtVN7vNFB94KuvLgZhFQEW1f",
  "key31": "5aoDUx163bJwWXZjznr23zGnxGkpmnwF6w37o5ggaA5b7DR52y8e16Vzpzh8og4CRqS6YeN9H42cqFrxuadj91gG",
  "key32": "4viZDmftG5NS5WNTivxDqJv5wK1gGKgHDktds1XDuUCgakwEAPWjNxGUXaMc99EXQoJAWhEt9F8ADvaLjZ36H9Ls",
  "key33": "2hriKAc2osnZ3iG9FiVpP7SxMcdaHFGa9QUHsG2izFvtckrHjxdVCWEfxgJhKvEB4GH9Lp9a9pWhvMYaoYLhdWr3",
  "key34": "4P3ZHndUGi9n5wXhCqqEdWAtYL8amrxov3jkKyXwJ7SGd7mUgpJQTUgLPMmowsyBURMxqomYvSgweDnyQqrWk8Mx",
  "key35": "5edawQhLxyx6rx3Mazk1ccWw3zFj2qYrAUF5H5QaggHFFjgZ8jmkgqxSuv9t83FoNAxHGPGmD1gx52YuJpZz6NXN"
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
