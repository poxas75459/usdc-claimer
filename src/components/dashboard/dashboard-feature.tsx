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
    "5sDJSTVo5bf1MLiRpL1Fd2igDn4nqtFo1MCgHMN6NkmLGdBZd21bS9Ejk1j6ZCQWq39b5ihun5E9qWggcgKTBXNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DE4obKMmyMGijkDDc9zRQ2EFVm5jqtZ9PY94WsMsB6gpT7mfpPhY1RtwRZCoc9NWowCfLugRGeFbD7sCr4JcBX",
  "key1": "4ZH8PAWS8wDW3hppe29HqoiDGWaMatBSaaBAgfDVn9Fnz81HMy49nsSScB7ZXXk5LcSEfxP9tvCop7ewNaQDd15B",
  "key2": "4wqAGAsTx7pzY8YwsSDV3GZQhgHtZZvfbPn4EnkL8sfwaEtBB3FQPYw2ryknM7uvkQS7Sue1QMiWEe4JQp3F9u8t",
  "key3": "4WHBAZ6WXFZi6E1obQQ3WiVyD2J9x7nMoC5YrZtd1NVgEKzXggFHwVECnr2b8EpdUiRTjGdvS4cNKRWHChp61rSq",
  "key4": "3p7sFj7wQgAJR5dK3XRLF5zpzU7ip7MEzMzvpDcx71dMoBRwwpM9irSQWTA1UQF1W8Pu8GPTU4M7WbmCapM6cfM9",
  "key5": "vyyaetzz1C1LVEekNXiRMUUPjX38F7QJretfRukndCyY9LeCSvdDQrBUoYmFm8pEhTk4VbdZ7BX71YvYnZZiUV6",
  "key6": "51szGbhr1ey4MqwJKGuZQqYjezqfwGXNpqAegAaWAX69wXHaFJdMbraFnJeK4Z1ZXLQnz5XMajqTryk3d4uaiT7v",
  "key7": "2zW9ggXVonkBDPHQwknhRceFaqY4Hh5MW7z8eKAv4fa6jEqBW2CR9zpnA5BULLZRBgDXDaNugo4CFyMUb5SnnHEU",
  "key8": "53SFydpDdEqoMLzR9EcVeoFemKZQjvwJKFenw5P2biQCwnZNWzmEWdJh4WKjJXKAPipZVhUe9atrBpgY9JZ6LXTn",
  "key9": "UMcKP7Lw3kS4UNtgP1wXxa2yeRQ27MiJwSJHFTBo8VQQo3u3d9hmdxNrw3xct9wRqnvGA9DB3mbJ8BwUL4AnRm2",
  "key10": "2LUiewYHJ23wex5oCwgNSregfzwJcLmthhSjwqzr1Qy7UgsvrtJRtixg61ffj34rGKbXxh7Q8gAShL99jeeUF5gC",
  "key11": "4ep8cmaWoFYigH3Ny2tMm6NfzhkpNgyFxHCnYABNuGqYwpprzAttjUBEsw939yTrt6Ndz7VjK4ok4gn8k3WUxemX",
  "key12": "m8dqBnJ2jK3CeNqGawFnLongUXyqkEtUgeDW8x9hji7f5N6DFD9rNsWxs6GS4Gf9tBaGmSp4b5cEYxoh4WsBE9B",
  "key13": "59EdnD4S37Ex9FjmD3PFXZnoF9FGBX3RDaj6peKn5jSxPLbv1heSzRHqm9cb9GBpW1nhqbbDTDjPDsAcK7pixugn",
  "key14": "493uWf6dRo8MCyFj8gnLm2YxUTabr2roQ7exF1hf7av6kQfQbi9qaZeGTupqy7nKt8avzhYfofZNiG6U7zKHMjmj",
  "key15": "5SCKMykRWj7bFdUhdhNCpPgwJJzkxohNs83pLBNbxrBteEjWpTcXMejbcKwBHudErmcawvJRGPM9KQHpaudkaXya",
  "key16": "5Bh2vjvmbWUuNgLx8Ho6NaDxrK23kgZsUQqgoMmEm7Zm4UsWUP61ffX6B5d5faRRcVzhBe1jKTfimqC8pX7jAHjk",
  "key17": "29FiTYBA19ZZuDbDKEQB7MvkTZv1a3KZYdQeGuH3QgBtPMRT2SHQZdXARLwiGFG9bbDQ4F6dZpjc4gDGPWZfx7e6",
  "key18": "28bHTqmecXWxpuJ7mWeyXtCo7gDYDqv92FY9o9kYqS4GLZ7WtimzFJHV7gEv1YzNrWZHxRDUSTfJF8ZwXqZ799ZS",
  "key19": "26Q5AMhhZhrPjhM7xsnVB4TunL3R4JPPwkhAkD2nYLdP9AobJSFM6nVEVRknQVYcZmxkAoPvuWR6LBJMMaGYHV9t",
  "key20": "4gYwgcMLJMLmZP9PsXetcFDDqEWV7uUMEBLCmpMatz6FSzCBsCyNrWrFrxsKo6GGp9rdTqJyygD8ZTgsg32wcqg5",
  "key21": "duBVTEn6sXcDv719T2L8hLdF1mitQSB6Zs5Bm6RAwVAVs7GER8L5ukBSbJy8VCYxF38QNj2smUYMtWq7wTzLiPS",
  "key22": "5cxsHztMZgfQ8ffd7eZtprHXuuNqkAtysz3fJqRsAR4z6p8LCivVDLZT6kmmh2mZpxJMJejko9DGLCyA3yz3NAb8",
  "key23": "2s51ByZEnYiBDQgfsHiVTrZbJ7v1NY21rrjdGJMMeK4UcGAd7nyqAvKN6cVJEvtmdQzEGAupKH6fLZyCxXDxd5mx",
  "key24": "RpPksLRJ3d7pqUojTpoiFfkZRpPU8g3snz5HdaUBm8aY7DcVTukxCKfppQoLrhnmC1e1fQHbK2Y4hcHuKzE6Dya",
  "key25": "31feD1SJ8Po1HEGhHqabPAQdbasc4mDkSNjyoScUxAx75L4q6Y4NmTFSjAdG9aL1iZdji4LFnxb2vw2rzrzYUnbt",
  "key26": "4TY7zJFcHMCp3dYQHxnhA4XHx5bAEwwa5URftTCU9FP2NDEAiRqCNZSLPg8aeHK1C6J3DJeQp1bFJNZWYYxG5PfJ",
  "key27": "3adZFvduW4pBCQT9qZgTEZmj9GxJ2MQFQ5SutUexMTvyRag1uaEgv1KYp38AKfXjM6QvAeUJDZ2AKvb9UgiQRV6C",
  "key28": "4hhT4L94hyydAyDM1yM6nRBtrVYxoQs2gb7WsDCWXVkrRm7CXqdLCu23Lwsxw8rNQZXSZAx837rpooSaT2aWV1VT",
  "key29": "4XwAjrJVaoCwuFBjpMA5kNiZ4JHAybH74wtqAEkCPfRDqg3VP5pQ9AcnrQYAJJZ2FGnTcqgV9KRPdn6JUb685Tf6",
  "key30": "6ssXwGo8bTmiGvx9pdKdTayWaNxL6TDSAuM42RMJRkMzQR9W4UE2UB7dui1zSrV5FjZqQXiXvKiPnf95ij3vrdG",
  "key31": "5YqUALXt8DMue792Jpy6iS4TjdsteCdoiXDdtxmn9miomFdWRY5DRJyttnZkPtmC9TUs4e5aVRy4Tr9vb6AKoSCZ",
  "key32": "2GW7s5w2ZNPZyqYrA67BmSLASY79CGjP1vkAv6ji6HKEWvjzNQvQpivyJMQT9Fgd2p28fYP814qob5fY4wf3ztb7",
  "key33": "4cEGafJmaGrpfnP2z1cWmVSpnLvt41caoVHdf7Mi8kphKYcmAshFPx6nvTGdD9ScTpZu8Xrbcvu2oS6Xp69ygu6V",
  "key34": "51prW4sJsqtJsr8jRtsDv3H49ZcMeRsSnBnMjQGqJTTQESRwFfzXnSTCCG5DGK4KCVSDay8MZRH89jHo5tLZ1jfE",
  "key35": "2eFt6Nzq9hECnBWRaQrQDPnHsvLojscuphFJ7YffG4LPqoxfcdfp8rB9pwuc1j2xJjrMwFDPXTYgJaDjk4QK3bEC",
  "key36": "BjfEiDuppRNrvEM55mXJ3AcPHsN886cKr3VxbrCtHfkXb4g2eSWCRwkmxNecBSCDtgCTbEUvYAKHdGWGjTC4Y5f",
  "key37": "3PJT89WtfUZnSdPnzKPCHw4TRE3Su6yMLVx49dgNfM2M9NsFqwUNbN7241aeG12EhQ6m1LpXWCb1AWQZd9CGy5VK",
  "key38": "3pAKy5XwbBB8eZG74AawNwEQyWNWd75tK86W6aGi9ewazTp3NLMPkAkuzuzTJdNEDH925ADmmRw3f3qSQkVgu7X5"
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
