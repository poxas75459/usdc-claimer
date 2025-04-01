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
    "2uURRmCM8oK7WvfxJQEjB5V3S9wuz2yNB2UtNTmTH4awPSx64BYfYkCurtmAHNzbvu7rWK85Ya998pZzjRSVntWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1j18JVGfPSs2G4mzyzhegdJJ88zuRruKYTXgdSEKGumocuU3sYvz2L5VdqwzoS6AMxweJhAQVkyzCgTUKrvncJ",
  "key1": "2juUvaCd5ksVZkSK4QAw8jWBndLyDXMV8Ucp2aG8K8KwuS25W5De5SNcU2eGjEa6zEte7stNwUS3qMnps1ymrFBb",
  "key2": "67B1CQsZqS7wzsSKBVLxsPMPdhR2juqE28zgPwsBJBdCq7gkdgjQt7gJUnX3Stpq9HfSAcB2ke961LfgbehTXEkr",
  "key3": "5pFugisW5jTk1ciWsWstgru2T2fizRG9Ng4zxU2h2VKLhQsUY3EwkBFvcHjSqACfB5sqpsoXrEE7CD8iK2nCG21M",
  "key4": "5f7oqcHHt9QoBaGviQYMn7fnBkoZvvWR7VMWp5z6CkgZLUZru8PAkHWdaB1uHDZFvnAFhgyB5p6Rm8MGhJ357bJS",
  "key5": "5E9wBN5HrVq89Ko9HGPotkefosdHMigSxDSRvorpXNFNY74pDnVGXckvUqFUqKzTfYCJ7G3Eib3x1EQPWyErEwGZ",
  "key6": "5GXQ7YhrxbhVHuZWaDEmAbAMguKrAqukCHm2NUQGLLn21xM2HsVfy42XhftAbSM9P4mjvA2QwHyrkLKjhoaN4EQn",
  "key7": "orpFLkkBvQ7R2hdFc5NZZXZtopexqWbZaypmS26J6an9XNUsgTxxzT55bg4geuGPjbHjw4PgG1ZrUpQC7h1hLbH",
  "key8": "2z4jgjtPddbbPJTLwQ7mLuawxzq3wdV59oMAea8HXch2iyg4qNAZiSFU1mJSRSATz7gE8aCjTrb4yUjPX4QhRjwB",
  "key9": "3gqEaJ8e3L6oL5CVCy9nqvaA4iJh7YpNpDqhyqoQiPEhPBFJYkpqLqiba5YiGfLMwErLjbsAnrtwUVf5t92g15KY",
  "key10": "39hyULASnL4wdbfXhHPSHNDnXWzHVTH3we9CCkQEFutxRgQ4YGzF7ZrwnivRCKBzfKS5WdgtKn3bnz1SwhJL42GT",
  "key11": "4vemqxuts6Ft1TE5XnJzzJWrEjDgQaaaxYfkXQUh2JZ9t8254ZLioJo5tAf7BmLzqULZHvMxY8CaCD4m6tw38J1A",
  "key12": "5zxz9cBq8KVHzNbdiEQovLj2gS9jH74FtiCD7qc8bA23JvYFWiQkTMiy7GBxFqX9S63ykoZ1sJnuVLeRwfCSWZQh",
  "key13": "57zvV1DgdLBJUbA7xckWoCVPWmJnG6S9ur7c9rS5JQKdNDxerJW2N5BqUghuHHWZVAxSQF7PKcCX9njmsDYHFXkd",
  "key14": "5GEN4iE3FGwERBojW7Noe19Ps5zczUFtBFGAwpUArSx9oULVbUuW1TUGvZoUKkWuwkNeQ4ehmm6zr2hjB1uftkfg",
  "key15": "3yTedfPsexiDt8zfF92AUz35WvDKkgNp1fVMzvzzdyP1H8U7EQsXwMghKXxwjz6UPAkZNV7oa8TkX21kTP44tqzV",
  "key16": "ZKnotoWHS25MMSE3wYWntFZWPErr7ex7RxtVrSp53sQ66LvxZwsLsmK7FrmDy1pLgUtd8qcL5XP4kW9S16biNKS",
  "key17": "kJEtEwRxyRqax7AmzbJS5SFMH54mJuhq7tXuXK3PcZQhM9vwfX4WHMfdzDEAZeMWSKKLgm12A34KuP6T4q7bF5B",
  "key18": "oY3oyGTXJgckzw1azxT8ELouk3fXKQQ4J1APmFvgXU81RRhAmL3iA2Bp7oEkjg2tPvRaSDXCtihriQhimxSNxS1",
  "key19": "31BafrkXYZyhe5AZGMQuK7hp3dfPD4nqaxRvJMGBJG2aeaAjad6o8EXLCbY7tfxK7RhRp4woFxRDzt9c5bUhVeDz",
  "key20": "3XTvNhHomsgqARTwDn3GSRVCswhJqwx7wji5L8RfMFvvTYmugx4CWJp1HbykHeWSRLPDQg7H47fpVHa6EwHzsFUw",
  "key21": "53woxXf51WxBJEiGZCFPu7oJWVHhapuLNUHYQ3jCrotAQTLYUh4Apb31U7qE71UsdHupok7rkhz2ffigwp9LzzfH",
  "key22": "654pMNQMGvwh2tHeUcnxHnnvtWsjuo5h1EE9CMdG6R2Tobp5XbavTTfbZyHvuTC6TNEuNZfh8FNRM7txNAoqw23q",
  "key23": "2ZTF8x7UCLe7P5n3UDysDixuWnVZEoontrwEFf6Ye3yHTd5osJv1knt8EGukX2taSp7XvMLQs7PziDUwVu7YBGDo",
  "key24": "3cAUuvRDJzGQS7BVzL99fYBwBoH9d9DcPf2NUC6MvxYUqFj76cV6RP2wfgLwadzaydT9RiSaR79FXB8N5sRPCVxK",
  "key25": "3W2mdFzkkobzoaoPaQfHtdz7nM6VeuRBhxpTD89MSAZwbgJBWejfRFJX5Rz7Tbzmg7hML8TjdheVQuaqKjaGpnHX",
  "key26": "3jwLn3zft3SUxUSDuAEsmJVcKQ2Az1kNNY5MJDzhFS4aWTBtbb8LcnkQqamuTsCWYkW1SKGKMkKbzRyvaLqMNWci",
  "key27": "35BkgnQv4sCHd4MZ3ykoJ8bMVyX1XSMTG3J4Riph5ASU456iEm8rTqaBdrAjtBkzTx8N2t8TbG7s7KeSoT9b4jHG",
  "key28": "4LcVfhAVbuYP4z9LHEmgJqKnoCZBbbDwoDMKDcdjkCEQuvDVmWLSKT6PbpfH4uMuHiU2rWRMQqGMsYuBky4SQ7n",
  "key29": "uiihZkNvPzX3tFaqkmNtV9YstBCvgAeLY3hSZ1HcvKCtYrwNRm5ShpzsJKE2t4timEHJgxUYyEifeQzk3JvKNxM",
  "key30": "eMvtfrPv8nyKz6Xdn5ECaRfNEFxujWLZkrtCPQmnHbzGeZ3abBa1yJg6AKAQPxvR53MCnboVTaxpEzF4L8FjTmY",
  "key31": "GxzQyKLzac3KskUWSg4JUvUH7JtwdboK535Am7azTP25vccNiNq2QysZ6f1qDr1R1YkFtENNA4seFkMk64GaP5h",
  "key32": "23bVsehg9vFsSfJbhbnFWTUGJsrCUpKVH479tprZVYkLom4pR9P6NLhttKf6AKqx3kaNxgekLPvSrNd9JNXjiJwm",
  "key33": "4d47PvZniLE3RtPtVituEVsHCB54yzVHm7M8gBbuPH18BXNAGpDJ4nadEiaZ9ZSEtTHqNBNf3MdyFSKA7fMAU9qk",
  "key34": "39qqQZ1sJQLu3PJSYw4spwGHm5XjXiEv2KzR1dArVWuBYHvAr1FajbgDXvN44kByfCtt8YzX6vbjUmyW8425tWus"
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
