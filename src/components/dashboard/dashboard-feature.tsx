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
    "5vG7vcBYPhfnRmktnoCPjqtTHvrymqpwkkKmzS9oy3zLot679dNENy1YjXVMPoWwnZHJJdj1gT2RMqDFzGd3BQCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UpijzWnifxfpsacXSdUFzsrs7oGjABy9HYtgJF2ew9TZyrtFw7b3iWtaWdQuyvQSAwb2JDBxD69bV21mWysrSjA",
  "key1": "1vqR82G4HdhR3rcYnkdzWUVKeC8KRy2rwoTEdDXkb92p7mgvbVRAVJrdAcGJc3r2iczQx5s1rff5n3wwwrsn2Wv",
  "key2": "35wMySxSP8HVt6ACojKvrvFoVU4HS9b3JjhrvBbH5ncvPnzkUAtgsCYaqNcGTFtD5UdmBPB9rH346KGaWzqqWmDK",
  "key3": "5Rdp9qg9uiuPK7F5X61AEqjPhkfv4oWEooNBYDbsnobEyQswV1JXCmH1MdrKVovMfSjsnx2PfNKnZDehYDXub89T",
  "key4": "59UBuyyrvsMofMFpfJnQvsqtB5jpfxR1zSzwtULUmDuwyEYiDyrCzsA5NQjNeZs3deCggmjS7P73htrijBxiMrYm",
  "key5": "5W1bvjRfiKb8v9kbSpPkiVa38U4XKLvatMsnaKz3eUhs17ypTBYhMkfojnnWwRPP2JnHZDDpdrsmCwrKfNjvKEoi",
  "key6": "5yHFsnbLHmEfoZAC3Z4vd944EgZdfM1fFmLkJUgUGmLgYZX67kTwM6ZYGjdWPPfpQxe3mJPJKtZF3d6phadBMDja",
  "key7": "XXp4FMi5LA15oRuDEnPmetLPrxWipn6cMBEtEmmr2kjWa2uiL9jPfnYkvbs3cxf9nxgH5jmUYt8Cg85JE17WtCT",
  "key8": "ArvD8ASLMgLV9YYswHoUCy8wGRq6BYAR51nEpUQUGqpqYrbiJxTosQXyc7YymxPEra82GVwfwTyGNYyodHNgCKX",
  "key9": "23mBkuRmNuNUHWE5pgLypbUChj2xPAcNYW3tQdv2t5BT5Exx5fSfj5hFkrfdScuEsJUw5sokmwSXofM5KWacJx8Y",
  "key10": "5EUkKVnP8pZNZ5tgqHEUNNh3AJ2oPEhprtmaK87VtNWcGGi7giKDgXbKHAeKBy4nwLJH6PkaRdUoLDkkKRnmoknD",
  "key11": "4sshJpnmsz5a6mAjNqWzgnsuocsr8n4QDzo1eU9kf6owTPC41wdF6kSfGB55rA55pnEjUnpk7PMgy3PUcjzskCJY",
  "key12": "EqGo1y6hySDLgANxT5tDejzhGxrxs7FbKZbSGTtyEUAoV5qz4XXvugJaWcqxL9EVAiYXYdrukWxcZ2CP7UTnbvn",
  "key13": "2Y1eFYCy2SjCGMh7TvjjpHcAh7b5PRKAed1omFh7gaYtYtPvBvvsFTTyY6RU1aJ1z26Ysb57EnaLEjLE2V9WjSWp",
  "key14": "2nwPUbBBHyBRJfRqYgXpwshbQni2wxBnsPYsUynUBWcS2FjZgKqjwVVsMf45VSq11LfwMidcBabPf4sQeguQkuNZ",
  "key15": "478vvGS4tCmjSxRczxbrnyqzfDEmR7mYTTtWkVFyvNxTDVfB9i4BVJCmbqpETUnbeNcooG9ZHrk8zEnHPdsB7Eby",
  "key16": "4fhr89dBbBgVGhPfbXtqEEbKqubQhhQ9j6GmySAcpTgGFaNEnkW84syeFirnFqnvjUTJ75YDYFLJCm3n1vs92SyU",
  "key17": "rAyD8333AVn8L7aXYLbhfkUfmsdtzYuxWJHXmZBaQsZwVZzXkR2DDvCsnaeeGf5d612gHisz1NrgCM9ESSHY2dW",
  "key18": "2F2cs2dTbtka4Z4bp5yJo8NXKX9rH3HsK74oTtWWPrUZ9esoHn4ib4qzrb1mYwS5YG3nKhnNJx31WMQ6B9LiK8BG",
  "key19": "2Qbi58VJzVgHVbBGnS7gvTtP4h5Fc3Ypg8zDoVYZLDdvcSZVbYxVX8H8gSh95hgj1BNJ9o2osdsTdFeu7HNGFi1X",
  "key20": "2QwVrqiXfizgBzwXz7KGyZbMyiBhzE9FknSxEQM4w9sibRKANgTCmCTc3v7f4hExTRTtYVrfXuuUPVqhvg4Tir2a",
  "key21": "kCyxgUAXC4uTSd91qWmwB7aamcqhW9i25zxoJkjKFHfRMd2aGw9d1cze7ZidwfVNGZiSZnuTX52rJ98Q7fqP85y",
  "key22": "64gmKPjTxVfWpPYFYS1ybFJhXjGfaC1v3LhgTDotn3QDH6eChA5sbCPRKXDkjeemULyydj7qJBLnZUThHXfubA43",
  "key23": "jnrKaqwTen22uX8tdXYJMkgZmskrL28XjQ6c9f1mhX8LmkrWXygrpXx34VEDeAckDr6FEtDKUn9TnGVEYuAnKC9",
  "key24": "55A8CxKDp6tU2mYjk4p5avWgKr3KuV7hifyEaLM7Q7SUApQrBShMFZW1yBTyZuoCk5xrLVWqutqGctqGbZwxZJBn",
  "key25": "4Mt8Uxhe9Ptr6EWqmXgp3orXKWgvu5GZAC3HE8uh9P6hEfYfQLXJ3bA9737HTXoupDG4vV5pN6MyGaH5HUQHa3uH",
  "key26": "4VCm4aQ5zfDW31byxKwK2RXAp6zcL4nxvw2MG6q9GFV1a89STn8v23i4oJAhaqwpLKz5RJ9p99XkbRAEBhyAYfJf",
  "key27": "35sLRLqCqZv2tTJbVSCSn9XHFcALN7VGJ1rkoj65uWaeo7XXzgGnnTPCXE1HdciErG1F182KktPCBJzdwLQ1zhgz",
  "key28": "5kJehx7RH8C6UYdBK5JaqCsgcstWprH8ZBfjvKti5xEBt8GRWs6XwG4ywaSruUDg3JqXE74FXHqgDwvMeyzmhudr",
  "key29": "5DR5fNVe8jDyPXFwMeNKKUam87NHHUm9vJcCvczCNhcqoykYibkwr9sp4wVYb6DYFwxwnHTMvGjEAfovg4mvpTBm",
  "key30": "4PrsAnp28ujWPSDiCxVeeZ1Q1EMsyvPiXcBLmKUu5kVePC1s1SSH3Wk88sYXgomRdnxCdymYHt2CUPUTAVkCeUWZ"
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
