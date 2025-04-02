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
    "2Yjbnc6eRGHHU7Q9pqGxp6SDQvWMzoe2H9PoA7e6GXTQ7n1rDTY19SJtuPRp8uQPgoJjwL4NXqox3DY4ESkTpYhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJPBLjyicL7PzYmsTvfRUG2mZZy644krc7cC5D5rq49G8mrbojKHkcVr6PZXZiKRWySMF8cAh4j38kVdGkBZmHE",
  "key1": "PL1X2RgrTkJadkQKBkrbQYSv4PkqrK2zDv1q7AZpN9Xq6KfS4DF27PTuZKHu4TQVqd7mvVtHKoJfQbjVQbTCi3D",
  "key2": "5p621a7mbgdxkscboBM5y6GMa3hWeasJkRsHGMKS7PHnXqvEpkYo6f26U6R5ByJBsE3axLh4HccLCiCRA3ciHGrf",
  "key3": "5CKPUUiFtbeqEibhmHFPKkMfAxty5aL1Wc1L13wCp5GFm9sWYWLXsnovooa3PMjg8m2FPRsgBhizAVUKKRDpTCS",
  "key4": "4J8BtzsynjNQ8uCpSAKwWzyWQEjj5qGGC1JbpGUv8JhgkJ2C7sCGtngxyE8S719obc3PsuaRjQnN7mpUgnAWs1e9",
  "key5": "5f783AdwisYjvhCE6fMk9aoWE2NAiSoLB54nYz3L7xR7d56YzayST1WwUyUUXkQWcDxp2EtaCcXGvqRoaUdLziwG",
  "key6": "3qCt9GPrbEykLLYYvh34bgXbh829Z18b95iv8uuwBD8mojTTFLfnqjcKg2gSC1FVeDWk9BrABq5xVzp21mUgR9Y2",
  "key7": "2UvgYKk8E6jMjt7TQaGqet3RhaufdqRjp85NBgYin7PQ7eqYnntBcDuj7ApcrY5WWQ1UQMGk1VnmydjkGMsZczrM",
  "key8": "5NJovc9sxYdZzueEqwRisKwp6vnDyDPfpfwUQ7rUhifNdP1nKg6BGZCiQxLxS3g5QNGwMHTMYN1mE4ktcQyVPB3z",
  "key9": "2ks936FFvP9et2zAzG2r7gjzJ6J7WePSifnhmHBjTM6XnRDmrEzV6rZpWDkzTUzumaTwnqRBM7y96Gqn8bALb3L1",
  "key10": "5cPRvRLQnmmsUnkdLN3eNLa1JwmQLW5KBRUUK5v7hZ1eUAibYdp5nnT9pcAq9dbg9VZrUAWcPRVXWVaEMgg3nB8Q",
  "key11": "2H8yeJa7ZcHjV9YWzK8Bh7YUpTV2aAnpUb7vAa4DamUqvowXf6HyFZpxwHWDDEV2VTgUmnhNZq8zYj3c1xP2uvTs",
  "key12": "2QdGtNGEKg5ewwhB7koyK1abm7MXCcpSnc1EhLV7dZjh9pBnboKmeBwE1UGVc7HpYsZzqApjztdV89tY5mKcQEko",
  "key13": "xSVVgZFqwQCX47ErWMxH1BBkHAj1RgHiWScDg9piawowX4BRVzJtYYd1uBu4QCmHdzTjGuy2JNwX1DKo2mY6eT4",
  "key14": "3dS198bihb3Jv6k2QQo9upBEgktq9xXstqaSwEYoom6F9r1qbrQHRSLMpyu8HfYYH714B2MwyfjF3M3KdMbfrUTT",
  "key15": "593nsArZLwogA4Gudu2A4Ko5dXkErTBbZJs9gz6VwnMACLETAjrZLxUz2PaRnpHJRrVV8czM1wL6oExKM9kaJXaH",
  "key16": "23ToURM6aFPSNni5vquPXtxPeiQBxR4P15BrwdjtjDXWMkuynrXftubyiRMkRV35fVyjJLRxJsDvsWCLV2B5DG75",
  "key17": "58sD56r2Lxnmw4U7fTAaoXimpqnTz6yTrqimXXjpZFeecQBU1hbkQVKQr61HnT46uhfTCzi624MTnH4BfqobAipC",
  "key18": "CRBUDEZGHLe4Dr75mKnd4AWwdVbrhsRtmArxvVvjgnE3eC4dngfhGZwquDzgRSesq7gL2juSQzTLFRFCL8TVN6p",
  "key19": "2DatAzCgpnwTxH1Nt3fa8LjcycAGQgAaFQnZMS18zzVF2eLK2zCzgnrc396LeL4pEoUXJ6o4eufj7GEsFowty6Qg",
  "key20": "3Hj56RGwa2hRfDNJJ9FkcbAwSChifJ66vhS1shWqVPmZefRQXmoBmMJhRWM2Px2e2Z9j8GGN23uEjmTH5t4iU6Ao",
  "key21": "YfzBciwWZJXpK2wM3Aia3f6PHbmijd7zc9AKY4jcR47WFKcUWyp92AqAaiFUEYiiVkcartAq4pn4zPDwqirNPr3",
  "key22": "Pf5VHjjoRx5YpK2esHgsGEgt1FLjRtBkAHDd7JEh5XFtsmPcfrhZBFgYbSUx8BG1TgWmveYG654Vr1gp2xZZVEV",
  "key23": "3a2ZiPWFvuBA6LfSix35XtAMxWkLEkJSQz8evoqh9HhKKZFhSNvBGxjk7yEGxuBr9bw4ULZE9eCtg7F3DhoaRYHa",
  "key24": "4vxWetJ3MhP7wJ6EJBGqJkM4XpexqG3u5T2zqtbqMZXA1nPa4y8pc38VE5j48Lvp8qd3SbZdc5qNPUe4xrgEQmvJ",
  "key25": "qhyeDRDFKJGL25t7XsaysqMe2uLGGriafubfxXC9XnRdnHLVQ6frMU26pent43uZga142sjY8YoJguayX6z1bGP",
  "key26": "4AvsKAggjToSBPFrFwLznPJxKpPUcnroaN5f6xpoX5Dfbvs2tPYPxgfsNM2CJkTN8dAR24kxAcS127hs45J6ERG",
  "key27": "ivSEx4nQs7bvhQgqMuq2EXofGz84d5sLNJ7TfTkszQM9xCoZv2rYkQTyB3NRz2QV8vpzbUSqcqqR45SKzK5p5Rs",
  "key28": "4r1GjZvygiiVPDbx2AwFvE5bcr6QenPp4sZRcHhyN63M69w2Xd6jhs5N8w1cUVzgNc7R1u5diU4RRhBVYguoQ2qe",
  "key29": "2ctE44ZTTp5rqW7SHkmq8pEQRRwBgFALcLDNrz3ZUawDAKEK58Z2r7uzJKqjYtGN5MTkxQdNMNgNWEyowFRSxEWT",
  "key30": "pqvXrgN5iUefnnFxXZDzTzsWQRiGCV8ERAP9LFq42cT8QvtY3M4LbnGySoRP1qZvAymHAr3KaXgCxLBtJHneoQg",
  "key31": "2Ai1kxDbeiztQvdXTqNvDFM7ctxJxfTuswWzMqCTDgNumjg9KruBa1BXbQ5KyJaKm9FSA6TjahncLez5ByvjHNsm",
  "key32": "3BK1mncxbeFtTC5DQAo3CW4Ss4MUmgNQjKpsFauWzkMvkXiCMFPe9Mct1NeuKqEJaVxQtmrL9XehpD26yiyza9cs",
  "key33": "41eSvcxByV4b31g4REDQydrFq5WeohmKgi4WuWMpjY8jkCCXTyMSZGAk8AMhK5jMjY14UvamTEbXq8EyUNThApYg",
  "key34": "uCF8DUffegzb7Stirwpy1ed7VPmJLQh858H8cV3gVEFYCR9b4qDAEUtenUDDkZLRXh5fxiUWDc93weaDMtZht3m",
  "key35": "2hwCZtDyFdRuVzdgbNH7imkTFTDB2cYyKFhr5Bi7ErwefQmbKbpbYr2dCiiFUHAjpj4E2sGTKJYd1uZ681dsXu5N",
  "key36": "fCo6JwdBkDt7PvVPsmZvTQHidvm58WSYBnChmqo9hGEJqWj7YArcbBvTtP98SdLiWuctsu9jxVx1t8aNZrAukwa",
  "key37": "5LsBqn2LnvBUqmWbJJHcB8HM13YyykqLRqmBLCfCUSwTYdEztEARw5MKVb458gUGijmhMLAxsmYnhh1LGz4vn3g2",
  "key38": "LXdh2Wx9CHhSn9cVkFAL9k9B7Ksde4moVVXzgpn4BxnvWGL9fnTHZvrXWq2NPdz8mMLHcpW5ZKNxiWnd5KG8zBB",
  "key39": "5T9LwRdGwNSfYfdQ81G2QLwPRqfV6W3eKHcWxNbpqtj9G9kgtmWsLRCeshY1iMv7jtKzr1dv7RVCs8qCzFAJBBc1",
  "key40": "pbniyiF3rPVVDVWkb5ASnMM2XNLhTnHgatqEXhUfsErKzyg9sXJBC428MjPChXTx8bSiZXjXjFgcgNUBj4qTZYv",
  "key41": "GuF9DjBZY4dJMuSyyMo3cUJHuj1zp7dyFqpjPwheivEhSkbUiceskXKwA7wDDutF4qaoZ5KzF6RgfTgm6iZD6ca",
  "key42": "46PwuUq2LypW63qZ19rEvpagVjAmYf9umGsqeXYDEBmXHNYj8kVXaf4MV5JN4KBgJGPwP92fTVCwEPJZN1Fba4gP"
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
