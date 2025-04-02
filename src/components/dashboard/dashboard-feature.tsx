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
    "hBMhig3P9WdJNE9rbzRieYoQT8X5JgqfLUeajcUmMSLfjdX82LvoVFZbhECyUWa62U4VwGZ9YvXWDYtpc6pHJk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55q4rV4eHUp4ASUkMsUReL8wH8PTfALEQ1WVWNN3puYhyzyL45qxhZqqre6FiWh9uY5uSvFGxkMrXPLWFFiqKhE",
  "key1": "2DMsARsxbx3EzpmwkvvtTAybSNC4gcKq7CroZVtwQJJ6eg4h3WqJTeEF4YjWUZ8A6YWCxPHikaVwyFK2gwe7yXqe",
  "key2": "3i1D583MxnEVe1cuGf7nQGPJ8Dtg9FbbKa4gjR9dbuv1g3HoVAmZxRWJwuYvjZmuobuiCKvNbGJn3MEHvXVLDtgD",
  "key3": "3ipGEkQ8erX3nvSMb3X4BK1sdYQwexvDRdBZHteCH5g4zFttgjKx1ZvZ2ZbQigsUuBzQFFBELzbWTTXun7mwWJmp",
  "key4": "53JTH3xE5AyUv8XPyjCNfsyWPr3MBa4zaLFBwh3f5z9UmJi1nS6UFi5KSgNgXUJokuRyhjq2Lk9C4s7gQ7dHFR18",
  "key5": "4ckGMuKnPLHw9dHxvkMy1DoCuyV57gxju1SFgnNGqCMvu2XUCj87cHgDVokGMspMsArEPZXishhWzwQaL1FgSFm7",
  "key6": "3iZcHz5NxPsWU2iYoK3Si3UC3oZKDCM33tAPpSHRuvGacuihGzjcNts6x3GQy4fFJfrRgy178LHCbu6ShQ39keQ6",
  "key7": "5qZoAdump6tRtJqeMtFxN3UiJT4FVJQimyqVK9zeP2TX1wEqb4Ejj1ZdTGExVf46Rebw6FQCgo4W9ZZVFPqHNtBX",
  "key8": "3PpQ5u7iJC6ojLFdcvdpimAiZAPZZpXgzvBrNsWuuVpYoLm1bj3TNCnffqQV4sDsjiTTYgtRttwtx8QioztBJbfV",
  "key9": "5J1b2XfbySEst1wgXwdJXMnC1BJb6jJNPPxD1g1iGVLM6NTQ936et1yge5aFjqvDKYPEPhjJbPu1eqy7nss5sm84",
  "key10": "3DLNwvryDPTDJyKCXdtkoKXfqSedM5eP372KJGgcdf8DSNboUEhhE7TzdJkiBCXGe9Z75vSDv1ipvybcKPUHzqJK",
  "key11": "2ee5LgmzEczpptRp5zE6NG8DWUDu3Kxqcgb1GDsmrCvsKxXzs5dPhKRDEWhJSn251fxvNEqfnU47ZijFLvuDdP3N",
  "key12": "5hYCHcRzJJTo9s4ajuKDLZnA6Kf7236HYBBBmZ9Lq1YMyC7yJhWKmyh4oaesUC24JLCCk6Lu5F1yUmKJU8prpwST",
  "key13": "3qRFh1ZDPHjcNBRxADJGE69CckouSUqs9KSH4K4eFtnyqTaXaEMasJFkinDR2oumd16baT5kFXADCKiSkCbouhNm",
  "key14": "2Ab9T6ANADTj2cJHCSn3NsM3r3bMrRE1EuLQbxUpsEexHs76oEugN8Vn6xPU1ZseiivjBgg7vf1Ru8nMrQ49ARr9",
  "key15": "3FvxBrT7J4V56GMEyYgVEnbQccUDwF4kgbKV36rA6i1NNfV1NJEm75DY7XddC9eo2Vh6QDoirAKn4chf6PCkgqEo",
  "key16": "3Ex2R4GeTtFnq8yJFD7MaGF9pUhH74fWcWpW9y4cu93pHHf2AHRcTF1NYwSHDPrNSXpHkBtAjVD9WM3Vac1tVEYG",
  "key17": "5geE8Jtsx92Y6y52EZBBSwLTh7Gq5kuy5k6nTgH8RCoCkEYDR7HtvWueTkTBuHjuekBCAbUWRX1BEEVaCJfRUS1H",
  "key18": "4qJa25aoMUQWsruScrr2wkd7V4898LZ5Q9cSwpQ9QAqENUk9pXGqeAgkTjWUmgaN3hPcjoA74qnVhcARHADzCZ3B",
  "key19": "5wafBrypbq5cZhYGXT5EqDXqXYgcJAyyfjxZ6QiMFB3zVvRQDRBuA1YeThfuJuByiAiwiBHj6XdaWoe5FFSQte5j",
  "key20": "4S9EyUAYG5tRbXhufJQA1pgqjjVZVnx6d3Gx9odj7rxzCwnyUV4gFUZ9VKNE7AgdZKYKuqg3kLijVjAAaRefTs2n",
  "key21": "5i5geYHw9cFhEAJky96og9e56Vmq9hSLuxnBV1dj9RUdWqCVBuqPhjb6E83JEM5mudDSYQriHQLs8iMfey8RT6Fm",
  "key22": "448b7bWV8ofbf2HjehRz1fN7ac3x2mtAW7Gwd8YK4FN1yJXcezbST5xCa4YxUxk1Vaz9wvNr4SKYC4SmPj7Jtmnk",
  "key23": "5h9oeHdD4GJfCGD3x5TMZewriRFDqDpg59cMZTmNrpv7ACTpcofeBmB8A3NHWVw26A2m5D9W8uNE31i9rJnSHKVn",
  "key24": "5fZ2jYG9ectRPjGz39EjMKnLoXZeusZ4JMoKVoKwhErJvkwgmUK8aoUKCvmYpWrPi4JjfCvnYni5wULGt8wQvcJb",
  "key25": "pc3urueDpRMnmkXZBXS72nLEBCfJ3jxbPwZA9RvPimWjdmvQrevzi4WqmaX6L17ypDK6VAmFiPbeW2Rj2EiUbah",
  "key26": "5QcKSyPAgXjRkZDjngXKwdA8YveJgATqvunxucU8kgKWyiSUtfTjpzPkrQpF3Laezb96Fq6cKmYt7mbsVVYFoJgf",
  "key27": "634YxFADcqtKNjN3smXZ7b8YvXJxwE1qVBYYiYHoUF587hvGVJEm6SAmyDykK3eu1HdPUnzhFzTSBFKKrAA8r4WL",
  "key28": "2rH7pmUXRxwcpEohvUx9bU5RshBxizhGzabQgfmRRmgvh5kgNMACCcaFESkidtMGb1Bw65qD6tRu1C9RPLznfPva",
  "key29": "5bxBfBbBdXZ43DXx9CmF8fSUyu14BC49z9eJaGDqgbvWrDvyDH4upNQq2Fk2jZiMSJfzJ9rinrXhHoQTBWvNjhnt",
  "key30": "PGWr3YETnXXuUfYyCxtE2fCqdvCJGa3oLvLJUZZpatii8CBpAUGtBAdMY7kTHkNf68B34kD8bbw9wVJytLfzD59",
  "key31": "2mBjUg6LmdiPoiVvQL3WpYvEU9Xqsbu3NWvxZ6NBKN1F7fU8eMUGtrqWkzsJqy2qWgpBwPYYtGNsnNaWuKcUM8ht",
  "key32": "4k7rKwmZErjW58zndsAk5Ek227G76hhdWxYMVzJawAPX5D2pSwyFWm3hAq79io9s148cMPfeH2u3Tzn4PfxaTsKY",
  "key33": "3utWKvLyR4Mvrwm7mnssNXFTADmXj1VCQhcwhySDPRdkpJUJ9HKw5c6AvhWgewkaTx7MHgWGX6YcRMHLtFiH4Z4p",
  "key34": "oQya5kumr5nRsBjTCdq9sbpTq2X1mEVUFBNr3bWKPWvukdDNEUSTRFmH69qwyyn8Y2xtXAfqCnVu99iPTy4FqKv"
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
