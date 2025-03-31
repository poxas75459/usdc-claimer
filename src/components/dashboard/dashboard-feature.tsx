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
    "5z7gpGKKyEevXuBpnztBmfp8azcSQKC8nPR43Hr23fLaSfCXHhRBwWeHL5NkgjWTB5xLUD85MeaGYti2GAJLNmmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHsRRjZomNZe6782fcbQYNhtWd8zFVaTs6rb8tFb76PfRW9wiNUAYWLBBzApcJYDbcCKto2P5Y4YKmZj4cQTjNm",
  "key1": "4fw9gB8bE7JjZ43mba3Z3DNUZT8w6gAXmL9fsZdZZtPcTLiquWArP51soFSxm5Ahxp3xZrG3SqjpiKxXZq1nLJpe",
  "key2": "CFVPn51Xm37EVPT8GYTbHa51ebh3wYZkrm173G9jVBHuhtYGDiwNMBXTcxEvfAfdXSmrkuRM2yD3xHxXksKyJj6",
  "key3": "5gExZhzMB8nVcCzUJFhUjXC1S7W2auaWuEbsPomi8DPvtKHoob71ovK1ztQkLER45MFwdUZxuvJKvZCT9mr9kuq7",
  "key4": "3EcUDWMgGW5hzDgESEMVNyse9Dk2HhqDTKr8L9hTHgTLLCCey6PZd6FQJNCtdcCVVUx9NUcqWPRoVJaxveGZqQgh",
  "key5": "5UC4YViV68i5P7AwB42PCmigFkbgSEzyitGBRbGvAfNE8vy6gMwKkM9TNZ8uSdJCB2aQwYTPh6fP2CeBzu1uRExJ",
  "key6": "48neyXAP16p2f7kcfhnKQsojKiMMvpzbePD25exAn4Zec5eq14jRMWYDdvCeup2NA7vmG5vA2fvxAaqEcrmx7QkB",
  "key7": "3RcFWeQWiB94QStF5bnitY92NVUGUGz5spM1VikJcCVNVMUeCFcDYfguBZtcsvgWN2dNS452g3eCuGzMKHuzpjcZ",
  "key8": "2PzWujThNqTG6ThNPrzT7kV4hDUWUExP5J5iFGvpnHzuAKG66QcuD1e2uHijSfV8uSrtakQHieekmfhrEv7KVu4M",
  "key9": "MWXSua8Gnuy8e5VnBg5zFqRoAUV88pxTkxFjbYUqwoNbZMBNnWLUGMGRJy4ZvHoSKFVAzi4aPpCmZu5ihWDRVMJ",
  "key10": "5JKsvMjp5uLZtrTcb5GZVoAqnnDSeLfEcf7kMsNWMQdEBhy27vQLpkSXHQ4PukoBE71HwtP7x3WqQHXJs1CmhcrP",
  "key11": "DPSfXHoRnhcpiYzYjcSR98UtG2k1qo3yiJMp7mVrZSLVDQmMR9Unp1oVbMZDkryLywcRo2nL74TeZPz7M3M9rRE",
  "key12": "65qu3kajMcwQuh1dYieZVyEQHhTCyijSqX1XpMsFgvLVNLvm9BNBvb6BMUYbVEsvQdq1gNGfVLEd7HHoA1bqPcTj",
  "key13": "5SrWj8GW1F2QLtabELivt6xvsAX7g6ukvdFu7tcKtWatV4Ts1mJtKGZJzAxFLFAeZtM4DFbyHLxhdK2pdnYySauC",
  "key14": "53mTmrZDorYp3SfiBTwLaQTGR55V6z7NohjUDCGeHD164jqFWremfVhULBheMuqiZFX9WCWxc3sMjFiFLKcQzzbK",
  "key15": "4BjeakxGK8D2Cgu6ZmEQLdamcMxQ6HTHUVcxHPWdfE3o1Z5SAsZCmd51CY8BYF6SHiFuf7pRZuEAsEawZHKUM8Z4",
  "key16": "EFSWULRdVmrRseyCXPFenvULNq4ZF4Kz5Y7FSZGxwPm5JuX7RjJXXeKS7iR8qk1oN53geasvQwiCbUzpe4fJHiy",
  "key17": "2FW4Cdc8GqnziyG47kJKFx5SEqAYkxGAPN4Amk5y7jodq4ZBSqCKA4cugRhXQVGEvnMrFdHsNFKA3Us3p3JGCRN2",
  "key18": "39BBmmSSir2TjXKR6XBEco6Lbyd8ko2QnziEVqN5EFZ7cmtgVJ8ZA2uDrW8hwrkP8BvKUcKA3vUi4gxoTt9WudFb",
  "key19": "3LaTanrSXxGqgQJE4Vs72p8Y8eRtBpTGndeJsZRpgsxwXornNNeUKrqxks57fe1LmEGnGAkVDLChBRhLJq8M9XSD",
  "key20": "EwA21G8JfxM6hE4s5LuztAdD7fVK9egCuoyXxTj5hsfP1EYiVq9qGrYscAwBCyR5E1RBLz6T6tHFb7CBDnNkFcv",
  "key21": "9mS44EzYGKbWXnSUQR59CCFnUvh9ts1VcXSgc1CuGEwXEbn2yqNRCWKCUMoj7g44UD6L7E7Aws7HnPefDV3PYku",
  "key22": "44xWRPMknTRCZTtTvu6cP22D5eSfeToRiEdVf3wgGL1a45UgwExQsL2t7niZkxt9q93VmrkY21uDwsfQ5xTm57Ds",
  "key23": "4Lt9fNQayf1oP92NNGJrmSSRTyScsnkAzYSqmLSPbyrHbK5e75D1JzW4RMyxQMfiewNzYk1bh58VAZQCa2SNMvFS",
  "key24": "53pGtsr8z75spuf9ERujTw4JFpkSUupZ47BjuxAm4GxWS2g4eJVBraaP57YtEauWACYUgwYks5THzSUYdr6mnYdW",
  "key25": "5GRr9s8i1LzVjnvTWqqS99ya2HU9dEuwa8p8x2bm5eMCmrtvmBmb61zPh322QTddkGtQgxVjUsYnTmeoVGsUC7DV",
  "key26": "2NJaVY7m4jkdm6YiVxfEATYdtyE4j4nPB5budkuRBF67JfvXYvSXhUeDYez8xhe4Lers8KtnDzGsNnW8Bp1dcrXU",
  "key27": "3fZtdCAKyNqqikXkfDZFefgfa7QRsC3tjV82YjfQC4fLkdPXc2rSnSxfwQuhzP6txwJcoTdtwfThUSPaD5zE2ZwP",
  "key28": "62ZEsrDaT2JanLVGqi9eTQyGykCx2weBmDuuYptUoqrdh9NviBNt6yHqunqZjr7rTHVhFBeCYLaTDpZLA8vVtB5L",
  "key29": "4sWagU1UJpDtggLuXWFNstfToETZ8ZMwEu8kkYZMpTEpDZfkJigTfPTh37mFc9Cz1xADmKBFTdtFntcJEGHLWfw6",
  "key30": "3R64T1iatu9F84rJdqtG9bAJMQLZkuNByLgoL3j3MVPGoqmQKcNqxY6rXSedSLb8B1RbYabwbMSwNLQidjooTruy",
  "key31": "LWBf3bUmFknRUAH6ahVuK1522G7T3ADZgzYnCBESVZNPUSmmW2tDKBgbNHdy2EMb3w1ULKUt3rshDojntmsPHMv",
  "key32": "oDHis3jkiZXAq1cBM96TKAahQyvynP2yAHt741eiZvafeoVPdLGSJF4xVvfwpB4rwR4YJ6XLAE1QG55zLixRCYJ",
  "key33": "3pi5dvH9RCq95sdGn1Var2Z49mE9ePhdqHGJUsLxtfTNCG5TUteDG5T9EekGiCjtTtGr96NQuwutGnjR31ph3pKw",
  "key34": "46mHAffNBjECS7FszZNBcwZ9TD6BEqUYpnHxfwkjgFL8E1hjVj2XQaj23zT2drm74EEeFed8QrEgW81XHFuy3daU",
  "key35": "5ViiKD1jpJk3RdZqzx6kzJhJcbULJXZRvpAwHQArSQfMQPU9HbLULFYTVq8BW8BXcouzc9ogd7LGW7Cx7iYAW85v",
  "key36": "5fNfAGFFjT6vUB1GkYTqWFx7BF6o6Cgd6iQoc2awcDLWevS1fps5NkVEpnEmvVWnCAhMrt42K66VdeVLQyaJc5nT",
  "key37": "5Ms7tfy9My6S2DpbPgCrwZQjpjyAbvvyxyQbM3QSxT6YNZusMNhdi5uNz6fPNjufUyQc1c3qR3sso6XbjfzEpTHs",
  "key38": "3rQMzCfEFonXYeXYsD79VdvoPZdJhU99AnJ9GBujnvXzHCUGY5Ro31e32YuHj82VNFWaGoKLDhcgjmcwrqSeAAPt",
  "key39": "4XNNFy4mefomp1zuq3739U9hjLbUtuPfyWLfsVWR7P4tehisfC8nskdUSTu1rRhxuzwTk3kyFb5geSoytzVNEdu2",
  "key40": "Cj72v5W4ouGQPz93NvDbKXF9rX7546RPawVZu8AXeePCjn9qKQbKGNQFYyDLiKNPMZMqKJa8fziyzhTVqqheHnd",
  "key41": "gpVjFjgHuTi54puwS7FnpvnAPzwyo5N9D8NtDbv29g2toQq4pFcTcFvZSNcr2vaiMApaDUhvvx4J8vtxTsFPJa4",
  "key42": "5oy6kbLMR1Fq8otVWo3U8Ah5djVQeLp3RGx6zJiwc7yZTjnkNmkkNq9KXLjT37B9v42r6ZREbFGf6fnwbzPwFLZS",
  "key43": "2z4iauDPncyGnfJqaqiZ1XT3jAUGXx54pWHWUZ4qKAZxDmP6PXGgv2n11M1GwHkuR4BxZerptXKxVeLJ6AiTin9",
  "key44": "4Mbwq9H5eazbaqYDovcC6BHiKQ7ehdvDcn19FoFp48rq4jSrT4XTR18JeP9N8RJSmVtVuA543m29EBpGh21sfKnd",
  "key45": "3zDTv6i5XGhQSqfbXRfzCbzqQWetDW3B7QxdhcE7EBVCtdcgmM8UFo2dNGb4BESmYQhMvGLaSNtF7cqTatW1WXQz",
  "key46": "5kgwB4kA5gzbqXSFtWSMaszE1xgc2wm65TEq3AVwrtRjmoqN6tVq6v5B7mDuoP3b4zobtpCnv1kUfG54zA7MVbk9",
  "key47": "2mwuZA3t2AChnBDkcVDq59u91VDfmAabt7BbRS612ooRpShgUSZan5YRZA6zp6XFce13Wa8yhAbh2XTxErR5QAzF",
  "key48": "Hb4ziosAmC2TwihgYNHMo3hXkCWyAzgNp76swbVMiARn1bjD3hsutcPoUETMMJEPNxihHrWdG2nYvtZFGQxxhJr"
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
