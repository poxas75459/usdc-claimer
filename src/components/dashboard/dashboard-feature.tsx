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
    "4Z4UGJxhVoxRma9MYoy4w33RTFLBJwvFMSNF5bn1aTknSTwXN1XyTjxr8vMQkT5LncjRcMhLbCoXMiYci8reZuvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41UQYKUBnt82ZVSDrZnA87zPHRuBbaEMpGeefBL6cqo6WYgxSpHN2tkXKEtw3mpcHMHshHofqmQ2k8jY7dDqFZUL",
  "key1": "3QKwxzvGWa7PoQLWm8evrYtczTKAHtvRNvJ166XaoNz56DmYkFncGbTr6Mwiioop4teGRGeGCPyrK3sSBe2dKCTp",
  "key2": "5fxsGueMJY7VyzKzjrFaRvkjeqUPzt91aXds2K96wMJAAXwiLcqMQSTkgEC9ynDmpNjtgTbdfS68bYNMbAwGZC7u",
  "key3": "5AYBPwARZcDAB99YwEgYsAr8C56FYutcTZqLxkK3U3qFVYGDRYWpH2CmzdusRaWtUovhPztKKHRDcka8HnoMpms",
  "key4": "gPJ8QHcTcxT4fvreyV7hd2B1tXHJkrrVe6DLygsbVuSxhsaq9JZcZJoAFRsZgM54j2mgBekkAYZ9qkranYwG6rd",
  "key5": "3oVKqXHbwh7B21rj4pCagUKwpUcE33AjdUZG8tBZcgyXWXE5Ez52LqzZ2xTKptZJc9y2sa3f92yqWLTyZf1cipYF",
  "key6": "HHY1tVjQ51EcbQsMCNkCpWWYixtgxxgHvmwRK8RYXuPTfmQ3LBfdqo1DVh6jSmjyhCYtWzyHMG8bXifMBsjJyFo",
  "key7": "3WzfZiVmajGBJusrxYhy3sqTz8Y3dhh8gbBYqhtWTAqGBsJfAYouRxiCWqybMXnDV9SYVyy1QGnARTajJTeNiCmL",
  "key8": "5ZX1FkTmr8ro11bjfqFJgcRYUBkv8MRfUcJXgAw7du7yuj54ieHWKfiyYTa9gw1oeTAEW6aJAEG7DzXyFn9Vfv5X",
  "key9": "2KR5hMi1qP3Tgi3aXB1FvWTFQaEkGX3B5aBjyBBtZ35YhaeCGyuWt1sFpxnVNbFityduHrRAJoiNdRtQHcQWK91",
  "key10": "3jhDyu9QCg9rGvakQKr2u3szk2Gb8ENtqcTyRFJGcDD1FqvUAMpQHRjqbNNYUp4YQNuknk2rx2mWaW8QLBHTZnVz",
  "key11": "nznkZP5t4haNFHeMLTw8VNb1zfx3cBhJiTNrjQkxyZDX1ejTmrPmd6SkiTXcA8szRgTioKMhvquCWreXvZNn1Yz",
  "key12": "4boFZYRSQk2mxPu1FyF64CcG1TF5hPLPs6pPEuh4gaoJnHUhyZanZ2djWmVf1dDR2tqab3WsMNd8gWYdgXpCLhRb",
  "key13": "uJLyiR6if8JxoB5k9ti7UhNj22vJKZdgznWUDWpegHSpJGqWFRx3CD5RDCSGWVy99DDCz3XdB6DRuNPp3ENR2M5",
  "key14": "5EQGV3PaTmyoqu2D66aX1x4uFgsf95Aqu9JAJsn2p8P8LY6t8cgYQ1tL4UCAf2H7dyjHwQkpEdkYHdRce4sHYpVn",
  "key15": "3ZjeDsWYgViaGQVpf3wo1JiZkCEE8ghyZuVQCNDN74RrHxcqvjzwaARwVC956bDJtQGa3NErJQEAWwtsXNLGfVb2",
  "key16": "3UjkeAj5KD1xi3m49wZKCoyvfAAsJ7hL6XGmnsDehPXaxLQYwZZA5CA4xon9AxDa8QCQR1qSyMa9yNkVeRhnNE4b",
  "key17": "4cRVS5XQ9cMeiJC79hMj55XSpCTMiV81N14ktnF2MVZYJP3Ck37PKqFKaFvP6RVN62DRnR1HsxYXLbCF7BJ7vBqr",
  "key18": "5sZtsseyQFfmzukLqiQm3ESrjVzY3E6pr4pSgR3N587Mk2WUaVVJRfKmhVTzte2Rk9sKYtWGeAvpYXfXvcN48oiq",
  "key19": "24cU1bFVnLePyqMQq4mveLKvFyKUKdbddmybbtLckUVKi4E9UTfbmMy3sj4pG4QTkLKcEQc4RSWcUHteXdWddiwa",
  "key20": "53nF7odxHCDJP8HKnxYcJK5wpYjWiRt3AMrFSsSqEjMpMPq7wPJeBKA2R9QJZ8yNACtXBshhTAb41jpFgqZiAiLp",
  "key21": "5khuvQKevH5pYNF4RRdeMDNtnRXWyWopmqYvGetxfGEVkBCzQrmofewYyn7A5mxVrWkchJrP4j1dpXiKGXfiUzDF",
  "key22": "4fxA394PkZwAcHQ7CaJVBc3iSZhJBgP39D8QikspGtD6b6jShTKj6ayRu35r812PnejCwBES8MjPXGPgoUPaLNC5",
  "key23": "4d3j673E9yxWA6h4MbxohssgLDa3YcGzv5yheD7UjqKH1rMTn84EcQwTtTnNAc5nC6Cizqj6nRdoNAx6coTWu2jY",
  "key24": "kUL5QUfof2vYCJz1HiPPbarKkhHeALtZgAAAnLejNbvbSvBiuogGcRRdY5S4Bij7dqmTA9yyDaoFWwGBBgMaUpE",
  "key25": "5wmK8ianknQ3AvkPkcrEMZfGrhXRjU1HKeA3vZ4o37ck8xP5UJxmjZgeKtKQFhPMsGPj5fuVEw1Gs3Gtkj1gQXiM",
  "key26": "C7M9RPeCMstyMc3vtWRcCiQ7tYagzFoHrtu8K3zbpo7o9195WS6SaaXwu2Ez9wkJW6AMi6A9zq6oArbd7q5avvk",
  "key27": "3qEFia7RkTtXCzcB6byn2uwmXad8suTfUKFRUxxW8FF5uYXySJRpQjbF5ernTcRahBUaX9WnKsuhUV9uYozpabsB",
  "key28": "5mBX11ACSnM1r26NVFmMCjCt1qAmUwqgfq7sEcVTHP84gJymSjit6FcHEJipv3BpkCE9qWezkaz2UxDF2aswLXe5",
  "key29": "35DSKZndbdN5arHv5GEdfbaSe8hCSXwzaURE8LLXzLDJHbMhggsLrDQiuJgkQnPVnBLXNUVupkgqpJRmhcVorGr3",
  "key30": "2Ty9dEiGSGfP99sVZfZsaT8koRDHQcXa66V2Ew6mFW6wmFcNCgfMHLN1gknbS6YWjZFCj7bw8JVDJLsURW5pG25n",
  "key31": "TkzvRNwgtFEQ5nGgDUUHVWdySsPc2QeT5NZDucjWnvhjUi8NykEKPMkTxPpD52ANLW44cs1xd5ZvLQqFd16f11n",
  "key32": "3j27LnbhJVtGNABKLUjhV2WjedwFq1VPUdJWZmz8nHXk1TcLh4FFESfmUCYsykwpPQ6rsQhtkSCk8CaGeU59XPk1"
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
