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
    "3yojqASRkxQyj6Y6poVZywcksuZ3chsE1GKPk9ibvW7dF4Bs7KZ3NCBqpans9Wfu5UhoXatejLEatgjd7Y9QJrdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMAAJLHxCemSQiJ23e5m6hhMrkncn2uCxMNn5DLCAXJPKoutatG6cbe2Yu7YpHW3AKLJJaXKYWMffZYHUZZoxac",
  "key1": "fA7DBePLg1mEMrWdqL83dQX4aMYXLc49E7mrck96tzmdP83Rn7u56En7Tv5f45otNGByBRecrKnVkqeZg8tivfH",
  "key2": "CZXxE54gkTtwaVnX3sTVWjKYTTzZga2sC3pE7VhNnZXMvqFGEUKCew5vDQJ4RwZ1c6bQQRBE53Y8sQRVdXbpqo3",
  "key3": "VoNWvLBYuH9ahZMTmVWtDVDZnNRuKBgHbZuJZzgc5tHz57QQzkWmnntBRNeGhMMWwjZAjagpn2LRy1keWVrTTPo",
  "key4": "4MbWpX3LyxaBJBLuAhZbHeWh5XLQCHdNwAYmiwT32R3mTBwZMXXnmTuAw7pFMsg2Dv3kikneP9eo35PNo2Beqjz2",
  "key5": "2SWbGQMEqb28x9DaEAg9bxMqjfXiubCyLqkYjVWfciq1JTPYTdA4cMhvwi6jgDhGXwsLyspLbwBTMSrNrVfu54gE",
  "key6": "3orBPKdkDxnFUrPC16fKePKADaj6K1JgnQNE8FWpE1mbBCt9ofKicNv8RANeSZHe7fgrQR3qpm1zqrvaPifGGswQ",
  "key7": "2WcbFWXw6bgv9Ze32WnUAiRqaEpGasvzhey56y7qdME1NhjzcfbEFSKsvvTw7BNRcTjn55VDjR1AerUdpP7jHEya",
  "key8": "33xZQfJJJQJM3ppUYPazpGNViotmKUQEabwEfNJKgCPCynJGhvgnPzuN9Y3Vpmd6KwVtxUNbAsGhMebGxmJaWSth",
  "key9": "4WM1MDofNURvEhCcNJJ6LqCaUA4KGpjaUQtwVfU7Kzhm1qLqoG3tgZKKFnAoAxoyMSVt4qkwW2jV7JbX7dxyGyMC",
  "key10": "3v8SXHsFv81tKNj3BNNJfSaEvaSwybU17urFoZsih7rT1FaYAfuycDDrxBx9JBafkda2Lu2v4hjGnkJz3d9K9Beu",
  "key11": "4NN4C1kW9hCE8ha1rzD6NBTZL6njeUGL7tYo9wtev19azBK4CEekTSJNZNZiS43T2W3q4cBUAnRm7qjyu9ghBN1s",
  "key12": "MZyMVHPSmhec4w3GZXd95GmAgKQvrW3nVQvDW2YTfACqex4UFXhuNrhk4mSAHvKo7v6bTACkXr6mMjaN9JW7GrS",
  "key13": "5Qc8xamhmYDdEgpeMf4o99bGfPM4JNfCXRHHbDwg5HcoompfmWhJLYhJYFijeLdNJQFsc9sJ9oVbDpNUBZ85z25B",
  "key14": "5bhRKoewQoveTNhz1WJfJwQmfvTiKHiDv82iYW2abQ2r7b8dkPX9u8Nc3gkwgKJHRgSv2sfCumaukrdrrJVGhnas",
  "key15": "59b42a5uRHounDRJDE8k5F84F1g4CS9sC6bjkW32Ln7RMonCAX7AjWychHwaYzrT8fNZafj5ezXXMaDoLJXvDzbi",
  "key16": "2b32qLYomg1won2j85psZKfQVxhHgCPKSzmQJD78tyyUsHDLq6Aujb2xM3izf6cjo76WChWozsMtKoisNDMyUiBk",
  "key17": "2RWjkpe2mR9iFB442Kg2NsavgmSTNvoyMcw7w7tCybN15UN6neSsVU9aNfw63SDei2WUmUCiZf4jt8ZrPc3TSAHK",
  "key18": "52M4vog69LGesZ28j6b35u1L5NrBKbLFTLEZirUXEZPktBsj27V3fKZm8m9L5yB5u6LiBGEtquUypaeyM7soZp44",
  "key19": "3jGJAX5wTSuu7opbQu2jVzMk3UyFMaCcfBc6qconSdJ38xT4TbtpTUZbNVTmVbVfSvEQjx8MM5f8JLs9bjktqL4B",
  "key20": "4TNo3Eu6z8UVZ8BqBQsmZ9TUw7mWRSMcDSEE4i6X2S6vbTputDh5zB4J88a9unbRXpznAJPLaFyTMAX91uQLnNE2",
  "key21": "2TzqLFJkvtHHPUECWBGEzpMBWXDe9GyE5HyLzju8BdKAnw83eU5Lc8AQdNBax1wrmfPzwgMScoKezXchTxNWeLPY",
  "key22": "3RjU55Q5S3DctF2wDzH9adihWWERAfziY3L9R6XvjkQtc4sft4jeXaeiBZi9Ntz8aBJP5neiN6w3e37fdfX15PXT",
  "key23": "47jTvsrQkP57M5AoJK9tBij1Czp5yKcFrAFLtpGN3XRJPcoFyGnZqLa2gSJgxMmM3Vzx86tYidubEsHiEALvVGMJ",
  "key24": "2CnQYMT4a22DKcbiLhWi8UXLy3pbUj5vBLjNG5jrLweBL8mC5eozqfMfqzoD2QQoHbbPoHM7h113k2eQYGVThk9A"
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
