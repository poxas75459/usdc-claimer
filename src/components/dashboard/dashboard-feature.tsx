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
    "4zvUEgjNhzpkkXhJaR8roWLtuytsLUGR5ZgbNeiPq93NYoveBitiNN9JXaEamDgMcuvQMAs7h6ciZqxzNjTUCtfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLcGpZNeXBVTx1y9jEtbz5NcBE29vXsMV54QvkSx3cpWMgeMxDwRDzUtxSjuQ9qrv9oaaYmXTASMHYYDdxGEauJ",
  "key1": "3gpT9xf892hcGZe9GKLk7vyWSH1PKKKxpo1XxX5vYmULMwBvSC9A4idEMtwtSFPuM4FyFjiizWvLbwHqgtWXWVni",
  "key2": "5rqmH4Cg7EcE9b49gkMvARZQxHQ6VsYLz9Zd6vF21dGn9ZvdUHa3Tknrv8TA2XtJMAt8annTTrizAPzeVAcPqXbt",
  "key3": "4A7hpkMYricnX1ocwdA429ccVXANe2X3HJE5aSff4ub6YzxSWqefR3p7stuVdfLxFA5HWqXw53AhoeTz6aSvDQQD",
  "key4": "67GnVm1wR6AmTizxgdBLtF36evExzFxiG1m3WoMUDn44bdfQnQ9Xuv2i3yCXW1ux56VCgtkRK6GJAaX9XVxbZ7py",
  "key5": "5MQMwQenQD8z9sdsppsg3y1eLkBMLoyStLGeCNt1uHXFcn5FejnLqjgu4a84T5uxKyaDANmnX6t9pRFnzrK6nFes",
  "key6": "22LCQA235rjiJ1NTQsFLbpuJac1NQZ5dw6VgUQqYRDkpUaM5hVgZLyF6P9AsmHDYspzgzxizDubcGmBE9KoRZ2ZK",
  "key7": "renc48UyEtynv6ErVV9AX1NgDJ7SKKs4prp6MyZ4HN7sRY56otP8o24b2zRJCPMRCxGgYNCpQzyBEUUY1qN477F",
  "key8": "2rZw5PTiFNrRtA7vtP2AMHk3kXxBfKsLt96HgG7UA5f7EhPbm7hZUNdeszF2da3AXhX723Jzujb3ShzCnzeJa8qy",
  "key9": "4Ps1QExGtMUm12jZMrwMFX6ynHfx1zyEdrrvBeeb1g3r6Yn6bHrEvqcPjDXoh9tVYV4EquPfcn75XPEAi78odVKt",
  "key10": "7XdXVe5UinDJUgFGpqysbobdbmXcwyuqpTw8KeC5vLye4Dc86tmGkjvZ4fL7SWd7N5EmDhC4bxTEwD9QRrkYGTF",
  "key11": "58PPC8nu6N4RE7kWwLSezqabcYJiiW2M2QfeEbN2rWwTAaNJkBZDYRU5kGBNAwdCdMKufLbZ3fJzzBfoAJ9Nqmz",
  "key12": "3xfx3qph1LXK35quwYEKaZLF1JR1np9mnhi7SvmRUxQGhSUEdgbXyxwLUWJV2hVn1MsPssNwq8hNQmxfFXEk5t99",
  "key13": "2RSgtQHQBJHC9yzpTVn5mzxdvJCoVmSMahxiRDivjv3pFB57CviwUVSvaF4RK5bSWePk3ivxRp8Edg45ABer4S1a",
  "key14": "CtnDCHR2tNvxaWvPtLU7LGvA1T6sFXc7WkffdTLgvjb98ythwnzmj7RPmD5zai5ki4p2qHW38EiENUhNWQr1zTs",
  "key15": "5Eo9YUBxfgUBjfG4wDKFgiwYBRXhMyeV1oSsZp3qJEPxXZ6K9a45a7g9GtqXVD9i6hCgcwWNpMm5BnqqXuJEQpog",
  "key16": "5fW3gPaSYTkGyfwhQ2HijrhujXhBqcFaGJFwCTpMhHt5jmkcAtDt3jLfuqUbab2GBn1hxzbvz5zpovA9g2iND7j9",
  "key17": "2yrAmTMvZQyZBtz3JW4exKYvFCPoezefrJsMsFBzg8zZaJZ86pTU4fsxoAzzaELsbRYik9kFkroznvTfN53JA1gw",
  "key18": "2TiSJWoTGjsPBjQzCmTichK7hScYAXNcokLyDxBa3Eidrgdf8CwSFNTNz14D3suMk2gNMbKweX75XozDGEQoyK7j",
  "key19": "55L3jQd7rKKUJ5T4sBRBkoa5AopBEUXRjxLt1Fr6GZo5X2wzEbdBQ8vyPWPp68EyoGvqxCRNPe1k6biX4aWvsDd6",
  "key20": "3gEkBxbBBvdMPVxTVZK1brJeuKaorF7cY4kDPSeAPVK1nCC2rBL9WyvvYmzxzmnmsxzrKmS9wVLttuL1NGVBZw1m",
  "key21": "tARLka82gYT3DxS5zm6W9kMEZAma4dtmmVMKSUNTAyVfkGjNRYZfUhFqhndRQpWCkwWiBd1kzgntwptkUk723qe",
  "key22": "4pUhBGPe7cHFBs9xVm5iPFuZTAncAo1MHE7p4UHJdAk38XwaBFdWLHo6EZYiLUrXtxyaB5ju7y1SMyA5p3TTk4vJ",
  "key23": "5Rw29LRpCr23RZtYu2AbRR4zWAvC27rYg2pYKKH7c51EHc5ERrsQNvRdtN51Y2b6VNaHp7413Z7t3rcEUKEcvZz",
  "key24": "2JmR8NUiymun8xSU4GWVSpS7F66NnLsv3K2ms3NrMPaRmS5svgsNGuDDb8MkH1ZwqUbt3y9BfyozWGJYdU9ZSi6g",
  "key25": "2BzFmx3mNAGqnqafBnxAoQzR98BjeVgZXvsuioiDs27RMdpANZUiSMhVwUbx2QYtrSkhGaQNtBZdaHtq8WrdLw1b",
  "key26": "47K1FMc8yS536NqVBkYPyCkJSoUgq8NNpHrVxtLyQci9ti348KiCnvJ8g2W7XCVhYUSgGjio6UcwgJQyrGLaQ7Zt",
  "key27": "4gV7WfAiRTLh523zphNsEoS6jJFtmMCVAzwuuDz73U8knYjh2SwXTCcmYZGXTAvNC3t8YRcsDq9wzdw2iEqg7369",
  "key28": "5wERvc7XmfA2Q59UpNumCiDiAUGHWPUYfCXzje6HpQi54QVM6qtD1ZiYWksyQXEU8vzVvUh8sEDNhvcFoVBnM2oU",
  "key29": "32J86AKFcjsVousLREmWr4yXRBmBJYWWzoKdKJrwH1UjsNuLq7E2rvyo5GtpTP3Amsi63qYcsXwYGuSj4Kg3Ht7",
  "key30": "Yf9iK9MLvZxLEy6DYZQJ7GtejafibKBZyyibb5fePYp79vimCBstTfEBcRXXteeo5z87v4afX5TeG4RC9knSTjS",
  "key31": "47zZerZZ6yP4rDkAHYh4iGW8Evif4ZHH6kEa2jUbaeS8HjkcJmrTmHhZWP5Zo4h2gvNcmNktYHeY7cdLj4bx8Z4W",
  "key32": "4NcHsUrL3Lj1wizcaDAbAxGq2WhDGzMb6rKm5NzrnQajQRLvJfuW8iBTAShRsN9N4g63Umzdf6ECjVAMGnepacGz",
  "key33": "34fJ7nDmHfQU7v2teJLG4QvZNj2wTR6LvnAKfxqYoTzs7G9xNfKHwy4zDtrXNgRuDFDeD68duDYVknH6K3udV37N",
  "key34": "25yr367j76HTa782Ediz1sLrkFvq8yeEcVazd53c1HkZs2jgyujzo4cP9HHD1uijGnAhEDQQCk8X9GFpn1V2Ara6",
  "key35": "4jReBBUtrVVnjpZpcZBSrTe2Ng7idPnzfTByCdsGfZPsvAjCnUed1Bmm73nanUdxFJZAve9zw6GtTMfBYpBzaL67",
  "key36": "4HaTapBajDzBvretDDHdXWkb7VnwVWQQ5WsATcZP1Hi6g76H79tS6qDzWD1ABEQ2gvKVtN95oPS8PQqUAsk7Tc5y",
  "key37": "4kw6dKrhqPgjA8pmLprjbeFx6ni3nDQUX4zcAv2pXxTQD6W1xagUThhvVxrKSSDqgJnihc8Sz8QigCgvDTMDkQUj",
  "key38": "3JVJpDqVGHLevThgLn8tcH2QdbTy9WNdHNgkvy9JEChQU4CDCZyHgTB8R43kx66qpZDMFuGnKTP8FeYTYG2Mjzu2",
  "key39": "5e8YpZS6cjthXip3gcfUB271Z1dWf89nhNedSUKQ6mRoACjGEuA4AnjV3exWuYeyijDc1pHq8uPYeQ4WcM2GCGYv"
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
