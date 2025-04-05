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
    "Uzqu5HPKDXvXDFmes23Cuvrpg3kjxZTd33ti17i78vEADn8RYUZyzWKXZZLiL8o2yF9jCYh5cG1eCxQRfeN6CyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6YxUfJs2DCTRPmBSng2YanjBHiWBVBnZH3KAeaC3GwHAwj7SL5qUjUGg5oK2P5CekWcqseMrreXDzYfdt2GQGQ",
  "key1": "477fAQYpJhgUxRvbqMDZVHZbWU71rutbxm7Ts6FaFeWcbRRAuY4dS5zg4SGgHMENpnoRpCYGrpqtMyKn4QNZjFvo",
  "key2": "4C4uVa2eMP8vSKZsBXFxPctyvUMMom3zpKK923RjbEAWc2Rj5BXvi3zijE2KiT9hj2mdFvPRpXUEzfV6qQNTys7m",
  "key3": "pvh2QNoerRfqN29UifrLXmtqNqm7eAghf6iPWmNmqNFpDcfvW161feR9EEHTR5M4oVJayqBW1VDBxBQsjwa2NwB",
  "key4": "5G5BasdVQaJ4DJxpgsXK9gQxgrQir4vvjZwSjDRxVbpTRRhLHf1UzoQ8oEqUWZzpLcMceFyreqr8eXrAgCUuL28K",
  "key5": "2GjCxVBg67pmffGnMmRDNNVtKi2JejJKsqR85JJU6TKoigMaFw41HEPEcWRRHFanbS4RvT3QhXBPFnNvEEkgc8KZ",
  "key6": "31wcztwAZBmk42WDPH4WrLsBcsyqEkMbyySvp8gG23HKziKVAW7mvWBwSKBRaU5PjU6CrS6G1BCvZ7PnD9m19JA3",
  "key7": "o8FNU2C5ZeEKXKeW7eBFA5CdHELNCVyhq5bJEN4cvK7Mdat7M98e7GqTXgPEXKdJovNW6XT8WwjKJPC9EpqCKer",
  "key8": "4nJRg4FzdL9UANw4LG8dBbpMzi3u2Nc9Px3AFUsHyq29Wo2XfToniv9u9LugMPVWMf4rsrkckv4oMtGdGzL9oqC2",
  "key9": "2gnYbpEz8um9RTRXeQMY61PpTUGSm9HVa6pHzCbfWJL1pcbKdgH2wA2r1S6U6TfhJGcr5qpGFiCGC3D8SMBf3h34",
  "key10": "3ci4ApQuPEuQ7JbbXwjd4AbkAjuhgWsMY8fc9DvtdZAAut1xFwi4tpJ9ZPADuSQ9ztbFbFSsuhoni9D5W9c7LKGg",
  "key11": "2rjPYD3Do1dVwNAqbUzarMTaJa1sMb1b3yBwuMaCwrxsew1wPdMYJi5U9mgva3nJe1bVmNNMzbtwWgUG3uypYpjg",
  "key12": "33sQYSa81FxmppK9odTwbrLg8nwh9QSaR34seak8sqUZkp2Dc5pVj3UAXxM8YW1C4XF7vGNPauoDRChy2KDA9c8N",
  "key13": "4aJPaTpgpJsNsUm54rCTxng9qz6J7ro1FvMjrU9kVAAMrSmE2nMEQmGQ5UNa1LStYBhQfrDhN45UBhs97sL81KJZ",
  "key14": "2ZV18pbdHxWRH9cMHVDDstmeez5CXRpHPGxNVSm7oH2WuUDP8AYzYVoaMFLMKA7k6u8sBeqj1wN8zf87EZQ5Wjhb",
  "key15": "DjaLVeAuqfA2HWVJTxnToHnUc84PXemB8R1FJYVtBq42FbvMdsWXuLCHdYt3zxHVjFwpjWFn6B2XSTSsa5EGVno",
  "key16": "5aveWybPquy9XVqAoUTUmyEnKbYpCksic9vF8c5o7eLT2ediqdq8LahxR6na4pmkGWb2q4JNpXS5ChasqyJnatHJ",
  "key17": "4kexrNVSfoRojfrG8taPtZJf61EmXdM8HEdWHZ8eoxdzJ9qjaEQreHbTkWpm1GrJD2Z68VuVZN8fi15FTem1xA38",
  "key18": "5no71Y3FthNqGyYcEXLQnySMVkiRyFzWFH7azkDYUeUVvoxKkJ2XvNFzL8xkYs3nAE5EyYjGLSDfBmGN8fE6CCQN",
  "key19": "oQu8FAeKCg7X9WaSmf97FU7TSm5keNU4pYyZggU3rEw3aeJqNAiX2M2nXpC91J4KhcAvewqcoet4d7aLXHkrSpC",
  "key20": "LjMZXQhFT3uxRZDTy1fQGzwjKd6pYSUdF3zGHbT5HXSmvrf2eebTqpHhwiu1PJPxHfRrRvqjdEtJgrMwDTpmUkT",
  "key21": "5CfHokgoDCN2qbu2uPQYp979vwByrgWxnbRDHd9AUmGF3sUcnymWPbAcsDJJgeBhxGiV73LyqcQ4JcjJ5XqjFoH5",
  "key22": "41Jyh5UaEq5CnLSt75CdjJ4o13gt1XQcJWT4DJaynSNAAKWWr1eykScS8WpbqtK4qi7mxAhnVud511FGxMDW7QXN",
  "key23": "4VoDwLwLpio8Nu1rk7oEEXm4sfqqPnnGRkuF19R97K2Mn2UW9W9zanq7WviCqQiKfxfWhs4XCz5c7xTcPpxX7efV",
  "key24": "2QGNNDMXVd347ogzzsNCtpeTNgEgAijx3mPFP44vwhct4hByLxdtzMFTEKV4CMDEp2aGVj3ZPW5wfnaqbNfN9qzU",
  "key25": "3gBTPWSkRcg2z7poTMHEHs9uJiW8APktJKE2B32evF4m374jtuxy7y1W1XEbDRu1dMSH7nLk9P58bXS9FE4BuJUq",
  "key26": "5RKfDmRgVjpax8HfRXmgtRTmdLeZu26wy9X6k2ETqwdB84pWyU7EAnHtjMUjHmsQyWCDJzecH7UocuhqDPzoyFmv",
  "key27": "3Gn8ZNDki87z1ZkVGF9uxBSne8yARWRZA4V3EGxWE5NfdquXCPUzjUzSuH5DYouQzfYq4ws81ySZ1zYWz7T9CZEF",
  "key28": "5m2E1SUMuSLNgZFHdGwjiBLWm4C5xb8Wf8XkTNNdrZjRM6LKGzKiDkRC8mD2Rjjiq6wDNpXpEA278UbW9yJHoGms",
  "key29": "5LLiVazYXebz5GEUke32kxudD4ybcZZie3rptPLbofxBtARMXq2caLXiWo3Q9mPf1XphGP6kLNQ6JGH64ArdQMrf",
  "key30": "4uHJ6HVhxQQLZBVq92ESgXqz2WcNgzs7Ts49xKxVjhqNVrBZemRXpey2UMJuWHmrUSTrXAGWYbRrm28Hgyts1r7X",
  "key31": "2s1Hu8txi4yGVEg7iK5NdwtC7qhwfUFtEyD7WkdbzVMgd9oQjbsUd9GCPjSmruRyskkPjLYWgcQqhTmg1QLKfX5V",
  "key32": "5KWRUpzAy3yM82h23d6WGSuoCxLFYsWQHtr2sfNB6u8bo2NVzhTHoecRL5sREAApiWdSP7itPrYT6M5Xr7bdM9k2",
  "key33": "3MMsq1YcXZUpHHxyYD3b7CWMNfA2AmRb8fQeRuvExDbijRNSciRgiayE7PMxx53N1DrNzx24MfZMKabF657ZJU8C",
  "key34": "DQZSveCBdina4KTVYz6dLp7HonJj2qEPFmA5VyfWiKV4saEDY59JCQ8qQ9GdBBnYTxYxKQjv9T5t4b68G8srmUN",
  "key35": "5ZDC3Joa8Uh7bUk9g7ymzG4zgQYQd3Hga9CefiNHmXCyHivk3rsVTgXuqS4uTUsbSdJRtjc7LcWnkHugJ6LneWEb",
  "key36": "5szUH9bHh5nLWyiAiWy5b7zUsb49R8wKopqaSKRcqsvHECNimWGWsJVC2123HtXQ3zqY5qavJnzUGCj6JQ8nDNGu",
  "key37": "217phDyCvNoUXC4TLAP8nbF2Y6CjFzxmJBWUAQ6y5LGGa46ywfJNWCAB6NiMFU98jd3GkChXCpn8r82zj2QuX2KL",
  "key38": "3kec3quxXhMP1DsudxbX696fsDMZcpvzso8X5UpCmBjPwXyMDy95gvLR73sNcZhLv8VmCLtkG6ozwXgvpR88zFsh",
  "key39": "5K66gNkyLBDyYHJxAqBttW8Y7ZsNJDnpZBUjJrDsRY3aFP4GRA13ZUdEe7whx84FABu83vCN3hVcKhNdh7ag4bg",
  "key40": "5FrYcRKQPcb1xwHCPesh6B5a29aykSz8KJYo8Lord3Q5ySmdJ88YC2FuDXk1bZNyz8hhSGRMwE7Kj6aMfebUthAV",
  "key41": "SQmijN58Pep7fSkxteLqhs3y3cYQUw7wPt9vRyEtFQpjwNMs2eLhbG4aMk3D798ZtgktvmqtRLPggJ4SZxQZNmj",
  "key42": "3DeqPtka9LCQKjRGhVNVB1Q8mVJ1hapQ9jfzoKCiPjxRmzcc1J6XASaPBZRoLcHT76YuN1aPGyWggWgAL5LNZjCe",
  "key43": "4t2zypRTYwxVnHHbB1SxCuDVau7aGTMzZHVaonwePjV9MGz9b6PfRzgLRr76NKP4wGqGwAMMKUKUcUpzxoxQosWQ",
  "key44": "3igAAFhT6eTzAHX3KUequbJKGKZpsLCGC9nBrXnJ1Bw1HQHA7wvuAXaLTQ38yi4cpf4rt32MD9LJgkQL4EobwT7D",
  "key45": "RAdFVJ5QYVNza83EqQsf5AoSsYR1Tk1TKmg814LALs81ZFnu6NRaPCUpvTTw4vu1nPeM8Xuae4jdP2jipiMh3kr",
  "key46": "2ESma1oyrbktFfedGAmwNw7RD8hUhCeSoKYNMa9J2Cp25Axg5CGBcYzvmu2HmJJz27qZ5NJ9rCT2rbwCVDiFRzq5",
  "key47": "5pC6smLLjLz4urXugXWEx5fZNRhmDqnKtwXxpD25mZEkBTEZx8cJBsQrcxNdVPB2aveXZvsTtYpy9pgVofQk8Cdn",
  "key48": "52hKwpGbktswo4fzqYotC29Grhow1KHaVXCjgcXK6uMHdtWHMjua5neMsDnuiuBPNRjLzUmhWuSSYGEjTbqT2yWG"
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
