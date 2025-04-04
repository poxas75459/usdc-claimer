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
    "5GfkR1yyo4PoUVAFuHx4BkyuaYkcrpZaDW995mmj2XQfRzrXcVw6HudWbeTUJ8ZdxWoYKxan7DHXQ3YSYNoeLb51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfJe91MDGLZXs9PsS1eb3hDHSgRSWCLfkWQLMVdyPjALUizf6guZYLQemJKvFGjbak8vcUFxJNQPHiZXUXZkdH3",
  "key1": "AL2iPb3rV2r2sGL5j64rrEs2TF1bnTSSaMJYDxM6e9McWoJq9N8qYhYtEogbuQZGx369m7tY726Woj38ZxvHcpV",
  "key2": "5EFoS6acpiCQ9AfZNSZHZiKj83hoqjDU97cVtSGT1XDwqsrbGqMwrXkCEQtne8uirMgo3s8gG7py6VqeeYJU3FJW",
  "key3": "2d63kHu2oQyRU1HvpqmsW3nyjKpb6x7hw5NtfK8DG2JAdpDmEtzCvF98rG8VDshMGLSWphyQBvFquWGWuXioXY5x",
  "key4": "3qx84R9jV27EQdALnbRxew3UJyxtVtMpvpjp8ihLPv7qr8sWpZxUKzMf3MBEJjH2Q6heeba6t9jsxnSigvAk67vB",
  "key5": "51ccSa19UGdVoTHFEZbTCLdhnGmuqzKRkN6f95sr6qNFkJqZLYQ1ktQCHhHcM19z5VR1zEWdWVsjNUcQ5A93SZV2",
  "key6": "4bTiuAXwpAgtDYj7MMaMuRcKVgAu7ZUGic4JUEcLywCki7P1FYNxugTCymhX6kRehFnXS9WbbVX6Pi4bYWnAvn3r",
  "key7": "2ubwjXF8jRGXZVQZmbmarcgwcJeP3mqSaf8hH9UTeKAmjGNrPEKrEn2yFZ64LoAkhPL98QbY2XmK4kbTsvPdhfDb",
  "key8": "4uVn1rbxQMyzmDFMGiS7Hr8tourc1AC1N6YJ8sg8EppheH3byGotWrEnAmSg3UgudEQcWGwuATHaaPmT4vtwLz9",
  "key9": "5VNuFLyu3Uqj5UbdH5pqzcLPMUtRmcPn9Q7oKtEyCN6bEBwsSh4FKHKcW2Q5TTZygf1u637mQcGiPMAd579Nn7Pu",
  "key10": "5JYsXAxXgEwc9pyEhr2U2PSoU6Ks4JYTa8apUqsFCEiWy4oE8XBBDMMbnfymGLD9mQuRUxdQ42fXc4hZf4cZ9u1u",
  "key11": "4QZ5g9kXPTVtDbBRatnqqZtfryjKvNc7qxvSb6KJ8RwTxPpuRwqV8b6SF6LEVaWnGiuWKeb8YQt6EyBS4H6iLMF2",
  "key12": "2bJYeCXx964Etp9Kg8BqiEzr79egMv1PV54pocuo3urdFZy3CuwTGxbDYBiqXV61AWhkW4TJSmBPM8rUJzraNai9",
  "key13": "5M8hXcmjrfyGf2EYDd5AWWaeqLSTdc5vkWgigCDwBukddwqvJ5ze9VvHh2xa7N2gnxSVszcL5PD7BfWzKPx7JvQn",
  "key14": "3FNbtsKBTYqYVFLhPin7mK42jkPFVv52ZQ6dkDYLrTzxJGoYDf2VtkcEcxBSX2ni3nPyUAuZuYHmEPp5QuDM5fLx",
  "key15": "4dnvmAH9BfKg1siaCxt5gAqaEM1HeycSCb1YHciAJTrGCmSFiknBLtaSQTumHZN8PeeQtVTP7jR1xKLKrJajniDT",
  "key16": "5qyVbC4w6hEXqRhVhZAZnDZJPKtGfoh7cwdCsXqewe5bPATo5TUHGxeuRArQEChG8XaBvBL4NxMDbHi3gNbtXG4i",
  "key17": "GNFY9DtLyn5nyVaNjVaLJzEmq6dbE87AijBuSJRQau1n8tDMR6Baxr8HLApNbmMcuGCAseFxusc9G8EgjUAkfru",
  "key18": "3LaF4KyVown5PC24nzSgTxU3bJxmVobFLugTDhWKktY797SLLq9pRpr27R3UapFZDWN14qpZiq9D6jNZS4Cr2H6P",
  "key19": "4BpfzWisQCyousTYheMqmSws4R9hX6pSA76U5uw69dyrgGi7Vgd3MQmuk9esLLv6f1sics7H5L9zuDHxkKgJ5bpC",
  "key20": "329f2XP4EHtz3VZzTuJKG54AvmpgG6T9Eu6gmtWoYcSKGmsSP7GG8jVbYp5PKNhxnLwN38u8zraCrFB5Nwy24Vvy",
  "key21": "2XKz9Y9xabFTNMz5qR1H6yiJrF6669DhAvAHmLmM4MHGXEAMEKYZjA9DBazPePaCVKnUpX3XFkJ9d19fAiudTPpg",
  "key22": "5arGWkQJvSmUFbVwXCkHvHocLKbMXy8Ef59ghNfrctrhVvhGR4dFHdowPSpNctXg81KnNjVWw1HMwHGFQEXAGs8B",
  "key23": "3oo6Vos87Yy67KD1wGKwZTLMUdy1Bt2absohW156cdsYNF3ZPRi1eaSEv4wULxGZBZ7QibRk6GmBDrDEj4whGbKv",
  "key24": "4zFEEq2KJRZRPDXz8F7wK8MxYLpWZovkyaR3jYcndDRrsGHyoSLf6XfSvpdrnG5ikhv29rtdzKkyFDMNba4KuURW"
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
