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
    "A9Ws3G1H8miBTLubUvaJkpjp9ScNoAr5Le6tZ6FDdQi5RDihsUTQvFTCbUBX1WVPhyeSfMTaKJBznqDeNQ78YVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wrmCwQ74C4U2vEf3w6aw563aferbA6nUGaFaGwGTUFxW8kFsUzgmHTJFASExjw1yzH8hGuuMQf32NE57JVoBUG",
  "key1": "aXXVVYyfqYEhtVKEV7v7B48eCCtGQcFGiiTwtdja1RihApnmuwbHvmS5LNJSryQwqtJfWrtvXRbSoDuuLYo9QtL",
  "key2": "5FSBqqPwwk4XFW7LccTG3QHGcvrErPqqZzQu57jWXMksnZWX9LMok98FmUmjBsTJw4nmme5SKwhbo1P3WTkqY8nj",
  "key3": "4nMrrA8c6ULrs8zyg52uhDHASmDZkb8xDmSjpt14yw22tp4sM3dZCjj9zTkbByNS7QzkWA3K97qh6EAdkMJ2Vw3C",
  "key4": "5zP8ApuwYhkoC3WoPDFmxhVs1dwNja2hVauR1WQ4NQpxJp9oEcPfhaYMrtY4HLAStmHSjSp33Q6LNj5NZ8Kmijs7",
  "key5": "5oZ5mvYiWjLDKaKmijBh85sxWsoPoAF87xB4YvJgTJSdRyB4u6BdjsYwMw2J4685svN8D3suWtGuoBxzrhcGnjM7",
  "key6": "2CUAEcpSMVXw9GDNLX1UWn1MyzdiMQgv8vZ6KHcLiHytb3sR4v2HVVbq8Vi94QjuUY7NPrjQLNFpyDuEgzVPLD1T",
  "key7": "3T2yG5yxhdc3SHpvuqYtvCWrnT8W2Zo2HzUPaf1kS9ethpuT3WLLyqTxNbHPSwDqwZFvxxDZufNeVst74MwvPpUE",
  "key8": "3t82dvWWfeheM9AhKp5jSNfqkSsVDj25kkEk9VswkkHw63EvsvWqa1p2Us7FZinDmX5gk2zNEy8WTMhC5W5y4KNq",
  "key9": "2ATomiZAv4n5dYxB7qhJQzPB3XB8C5cvVhgxUpvpDFyiWY4na1kc1pYwKKcs3vqEkG4VNneYad5bUMEyCicvdrfs",
  "key10": "2M5FgJGoKRYJWNq67uRzTfQTM7QMpmB6DwRvdXsrzAwF3AuMT36FZQdj2DGp1eWD7LdfhgKGn24DQxPVKbrhvF2t",
  "key11": "52ivMMh1gHswFishHjqao7cBsZyVezUiTnvMxDZ9L7X2pnTPvVebf68gXYvscV6rnkuGgurFTa7zBTS2k8EF8CZw",
  "key12": "FaTtkaQ5PCWQN67zL64bvtxh4dn7PfrwNJoAMMNZgMo6Rkg9jw4dDV3d9iYyd2NQ4DBBEFpS1CPyrT6CzkiGbYh",
  "key13": "4UGNRPV3RVDZ1hyXW9uvvVz4D3PzpK29sNgMYqHCxWwvxtnhPUNXbVhvMVza9rRgZVTsxHJVGDTkzEYjFhAPmzdr",
  "key14": "3SSZAjK1cPoZ4AxwS7G88QRRc6q8zZG4HbrrsCTTaNguY1KH5C3HqsQfxkvkw87LFnJSqx9wPa2iJ3rgA1xKApkW",
  "key15": "4tk8nHETHRKuPKkL1xhnBXpbntxr9D5RzmUPSKYzgyGxjzaT15dvapB9aMV9JGrXTtnP8kvPLigX5qkK4i1yVuuB",
  "key16": "f85KvEonVUiwtSa7PvN9AYf8MGgZVnbJcQRB2DaXumTpH5qRNuZGJcihneFMjXsT1m1sRFZrHfPAgVMeC2NLS87",
  "key17": "PES5LLd7dvw1mUdGXWvHj5Bu7VhbsyLFiReyCVZm7AWnzDZQYbbHfQrAD6a5aUeN1Umi6vFZwg8Xiq677SDDRqu",
  "key18": "2yChnaYWtkxoR8Cm5PT15UKyCDHa2qicEBnRwNWyB9QMutobn8xEvCbag6xWGkTvaGJfutAVyUdau7dKY3KfiKo4",
  "key19": "4k3XfWAsq3U1YW9HvgGsxzPGc7RopC5ZsN3wUwCyjvDy5yG7nkYYz5j4MpBrbSouYEmncHNyvwfUAjFniSke5Uuj",
  "key20": "22Pnyp54Gr5aaCNksJeEGMfke6s6kCJrU1fHCyBtodug1jvCjeLTCeiNnQ5xhrqqhMY7qqcnzVXdRJdV7XEKDpSr",
  "key21": "47YrCj4LkPrBqpV6yfAzfkGtTvbzd8RhH4TSC4xq4dMX7Ubcg82TzgxBE33y8Cp7J25j1zeEbSDGNAtAXuKwHqhY",
  "key22": "qCp7neDcHRvpvftH943PzVNoT6iWqgRzqKrYEEveMEnwSjBCHPAZEt7RJ4Qp3R4PtsgDxntpxsEdCMF153JzEN9",
  "key23": "3dGHJLjzvDYKtgPNFrjBwS1b31DVRAVxSozreRyfTc7rLCoGKmTnhzYfAK4kNrZNrSmuXCcmRo5X93h7YKNZXuEy",
  "key24": "2rHPzfC95gHojhpQ1FdSP8XTaL9usz2FPdgiN1pKGL6aC5XMVqBBmjqoSrvK99xWRvszJr8gRho4Gzi9br7b6hw2",
  "key25": "3EyaB2caZkfK8DorGbhjmyXZkQ4TmxYMeMrx23maYYNRCePBKFykJMhkb4eFEMcKUg4nZEBTELmedUgRgL9ybnPa",
  "key26": "39SgeUmADvFtagnUX5nACxDbV5quJSEDuMM2jPrTFXQah4PTZnct3GEi36ebRiikGpcNv8ZFV11ZJAvEi8q58E4e",
  "key27": "shHFWn73JpEJ2qK2J5uErjQf4eNBTDM18y8TUKwsqTjdX8sNXyQqka2DdmS9pCapALiBKUJJHMUNJAS39HKjp4w",
  "key28": "adpx3aVh9fEa8Uca3N1Z2HWVUp2UK99oM2zC92bKVvTP6bugNKpfPwDinzGK9Z7GyV2hjFcfJE14QKWff1PFzqz",
  "key29": "2VYgZbnZYFnaMNHfkR9bXQFURhM1UfPPyj5RDB85BExMzYkiFiihpThFbCk8PUUgZPs78nkSKFNfxSg94UNxkuo8",
  "key30": "4L7LFkv9SHDqEN54RAgqQJVqg86ntZE2L48gTf82YWrJqUiWsWf8wkashJXXcxkZT9SkQs5Ae29AWy4hf5RHhrw4",
  "key31": "45g6tjLvkdFoqtHyJGqzmH6uhBo1muj8mLutoR5GLXFi4y9ebkvL13ieefsN1La4XvQ6vP3fYg4BAjvT4uFMi2Ce",
  "key32": "3gcS3zoegmkPozhtrd61paNvuWafvDZAiMvXfAeSGFJy9k5ZaeVKrqcJybXFouSYmJVcs7o4RPWRQfUwv2ykDbja",
  "key33": "ovyKFbRorcCYtRV8hhsRLmpGfX32kCZRc4LRsrVFv8znAuNe5nGpCmrd6vuHNUCpEvDRToTAtagsoNCvTLeQcQE",
  "key34": "5rMN9GJridcaCM9NeS6wcAuaTMQpdxXNG5oMn353he2BfmcYyz2Dv8q6XuWdJ9sCUXDspSVMiDuokFCBErkvvmna",
  "key35": "5LJZTKAy8xoY1cFa4C4vdcp3BT43dHp7FGh1D1ug2aKXd84izwJVvqS7LoT217hy3DYCjxBDr8FrK4N7kPfCemZP",
  "key36": "4riXUNcoZdngAdBtQTRy7fYDxnTMKWYQRJcsb6ZJx5W8szaqyyoruzLbKYoCoJu7whDpy1Djpr67K7wGcND4GvrU",
  "key37": "2ePJP8Gcodc6pKfKiCEZ9FwY2HNxoxkoYrEGSJ5oDMdV21NyXGh691akFxtGu1T1EwVxvYXhbGbrAwc1sHWjrCXr",
  "key38": "3ejjRvCWTvSKCNAq15jRpUeoEHEtgYwgoVxkyxCBxRbJP5cb1HuzjCT8kAZKs2PJ5W6oQLcDhzBu7SVxSa9Jx5gy",
  "key39": "2E8v93dodbeKPNmh5MPfMvGneQtMsovbjuvrsBAANb9ansQYEto3Wjsnzy8g43ycVDsSJwKtwbharcCxSsKjrLgL",
  "key40": "5nnGgUc9DMxRUmbqQ56VwYVSVjCnPWvP76THzGiXfz4CZCGR9vMNb8z7jecP9ySJ6fbu98T2Zrx7k5upXkP6ycQp"
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
