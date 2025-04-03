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
    "5CX1BxE2CkqmLt6VUS8s76BMqzAyDM1xFKmXtTHJwr2SdSnLdfDXoTZDeDpD6jiRPg74MEPQMcdiKHhVDoBTABkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dB1BiCRZaCfpmPDQrp5T9B9CvppQYq1B2ATKwxUzkzyUFQQRJdo1R5HdMVRYDDEju6Sx4xNDW4a2eUnWKXccZRC",
  "key1": "yuALgqQmGH65ibeL7P1Hf99Dqkz2yXLFkj2YcDFXnBq5yQHNkWADQDHUQD5M5ERKN7ZfWr53nabzvR2JtW7Esc1",
  "key2": "2iKB9FRZfesW5fAJq4JeYf9kc86PMKrhdP53tt45M9zpmnno4Ym9ZaiHNmqnCVzTFxeN1vjZJTCtcrp5tKno4Ej5",
  "key3": "WxRzq6DkDcgRVh8Hif6dbdfgePtcKHyvv9rjxQc412Mcny3gXKErNMG8UC6e8kdGFpMbcq8CcvQpMCLENaGv84k",
  "key4": "43KXC1rGe24Vftx5zgjMsdTdeEd9nwdqFz9jXct4i6wBxRzepFV2VwbD6KXwPcBTVjcpW7KzDiN3iGSK7XfxQ6XC",
  "key5": "5CAjivXXG7dCqSgwss9EUw7newqw39eaWJnFvi5G5bAjSLU2ibDiJPDWU789kvz7SUFyMt7ot3nqA95sKhaURteH",
  "key6": "3mT5G7j3qv5CQPqBuYbhob2xmhCmWadM39LKRaYWWt9V15k1EXb8B3NkUj8ZocMnrLU9FkYcGuCSdtpFScEFhUB1",
  "key7": "qcNsRU9g2yLdx5eMmmi4csubK9CebtU6HF8Y1oDVYCnF9eD29ruksopnv45vtnDVtNcgnQHgc3Qv4ESDgjQUUWU",
  "key8": "5J7YbrHzfHiguMWFdtXFQj8Tzv8bmPVYfbkwNT53toGZcnu989rpQax2fK65BuQeGt2PB64nU6R1MmZZQk9goF1r",
  "key9": "2EJ9DCr76TwSdCU6UBEM5Fp1txSstFUiWWjgGSQN4jQKN8mmkWGBqvFzkyvd1Vkqfki8CUXqLjiud6dsmeKTrEJ7",
  "key10": "SjxRCstpRR77wjdCfDhJiBqe4HyM499knKWmPZChFe8wKkerKW5DX8HeS7AcSFxW7eGsYsdPW13LyqZJTX9eCNC",
  "key11": "VcvHboXMqhF754yxunXhAvFAkDHtMc2N6RAePH8FJUxY3FcBt9UZnNzTy7FdSY7bk79JGmkXr567Djnuror2Yc2",
  "key12": "4qoU52xT3ZjFhdvAM16iwKY7JDV6zY1bz1amo9jmLxbep3cyBj7RZdXiM8EJ1uWbi1gqWWcPGERiUWGDLXzj4gVb",
  "key13": "5BGWiRJmZQ1XYNASdF1nwx41tYJ5zR2SKBseoEup1sgZ9kXU2ZognphBuhFgmYa9C1vZWPYEmGvqmx62oXGiQA6A",
  "key14": "2SMopdWa4YeSftPqVmqaTLtV4NAY9Dtf1WSC83K6cLufX7BnUEgqoifpmz9p2HBUAGDxc7L3cfp653gPSyE65fyQ",
  "key15": "cUWSMQPDSJVK9sEis38erdW8ed3a6G18jgsTShz8b2B2v7kLMudmWbG6xAwcamAsYfcL9RMpLSW571Yjdi73nFP",
  "key16": "5v5EjjBM8WJkHmgCvxJWPKBNHRicRCCfdK66p4g1R86FN4Bsi4V3kwuFCKKVQsKBdwTNSBBueuVrNj1Bc9QanXLL",
  "key17": "61C627MXNWAGsSAUMVJ1uh2ggs84cZQv8wx7YJ8WcRFToPkDn3i7SVYVABbji7Ms3rqDQwHY7CTN523jhiwkKh4g",
  "key18": "5fCNqPehHEQsNbhrBKCs9PeUipnkwzeqZFWSoReHXN1nrB1UBvLBGH7Yu7kTrTphhsA7AMzm5uEXK8VHT3TJ9rHr",
  "key19": "5XSpukcsa3yijJKgrP37Hn5YwrRtbwFKHA1UEVAYEQCKT8Vp37YMq3oXZ7jckxDn1gdTscEFEkLzwPGeaUKUacK",
  "key20": "4aBcTcNy8bU7Q6W5LX9Ap8oTLRvDBqnRETPA4J78gV9NnnDJohM1AmgovQv8673gdprqcvicUfqsTbbHNHYeEXHL",
  "key21": "5fWrUg7dvzh1qhfQeXMZDALuJWaADNwzXCgugwYfY7vwWHC8H3bKuZCYj9tGqM17CYZ6LJPcwbdSbuQyB74mtHyS",
  "key22": "25s2x65JUSZizuKRZQ5C1xW82kDYntgDomtBgSnMJcdkiee3Qxfag4UNgNrN2sWtNU6AgDKhKjTwn1J4jVfjqE2x",
  "key23": "5VypohgFdSMmoMmEr3gqoTnYnXzahA45NT6GEpqAo92xMrYfXPRhtp3Up1UAHchHosFrNfxvE8nXGxkwpnnb41iJ",
  "key24": "24SGhLB8AMZt59cuugbbCKd8Kas6AL6TZ2WhNAwZPeRvKuf15zpgN8L25CiTP2UmranEEsSBWdiptoXfQs49UsLZ",
  "key25": "2y4rYcGQnxE6T82jA9rWQ4UCDBaEm4b1ZDC1GHHYmkeGg8L2nbHoXV3Tj85JDMazvMKtd1ghBriLj26aRYgD1pLr",
  "key26": "38Q4C841ZHYUBJoc7PLmFjEuvBJYbW2PwAqiGMQwjTiKouJqVYkxwWqN2o3oQuGY5WQs44fgedZhLRBfTotKWp9X",
  "key27": "52N1swkxAcofF1tdBmBZPx6rtBVJc55iS5MdbzHtLAoYMEFPxchGS232D1TG4Un4ZEEmHz1w3R6uBz4Jxbfdvdy"
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
