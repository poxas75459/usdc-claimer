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
    "5NFRDa74wtZJMK5droH4fdjQ1KDmw83NjPiJVqfEuvGaUkS9irTDxAZgo6Frseoj8PGd7NzwGpidSyPrtHAxuP2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgaGUgEsZKkX362JDPaeRgZqYaAFUtNkTYG6ejJQWt2zqWHEhN7yXasgMHJs3rpDxaVxNTVzMvv1hA7D5RXtE8t",
  "key1": "3K1HXDZ5rfPURALHn3gS95tX1NDcgQ7jt3K9MYgsn3bfCCF36TEmzg3SWKShkWDvATWfDf52vGx1YitQTiW3fhYq",
  "key2": "35JeZokJPuHjB9q1D4tB3XKEgdxcojbh1W1yP3PoFd4NAD7k37kf2RHZUxonDv3wot6GviLtQmacoSQVqaEw6hyy",
  "key3": "4sjHcGMS6kc1pzp3tsnUUkygXpobR1kZRT7o5koXkw7ET4kcU9vPGEm6xyVhZhmtdPdGcEJaMZ6tKLXSQbnBz8nj",
  "key4": "4LH45bv8yriMZaukRhwLGMxZWYG7e9bvWUTx2oNq9kXw1THyvvtkziKWTXhLSUN8r8CoLGYjRGuY4yXHP58PnRZK",
  "key5": "59zTYEV8WxHbK37jxaFr9G9yGRkwHKTDDQzoNcZ7aYHVPXyP3oS2E8GtidUM2vTZdFV9sKt8JGbaXAEssp4eDCmD",
  "key6": "4yrk1pqw4EKaxjsNh3HWP7N6BSTYpa4dErczppyTJrYra4K7M4qMGiWgZ6JBGGUxw6FKdLx8z9mb6KQxdXHhpyWo",
  "key7": "3W24k8TiyGkQ3eqzLYMFjfNB9StuRxg8eegBX2iy5WwYBNFMaUXsL3mY7PHNyx2cJSsAqRt48fM4u73t3mNYKvur",
  "key8": "4EvWTb9CSg3M93jBhx6S2ZPUWJiTCYfmvbBBwDFxXNr26bYZpTe5wRZYEfttCKzsUWQQAHRzo6DuN76mWE2ohNio",
  "key9": "RNKrTsB4XkC9MAqWgYBWSMMhsQ4UM6oe5ngTqX3MewL5zXzfWTENF2ci7EyLRbKL6e6FU8EpnYDhfuM3W2XEME6",
  "key10": "5ChN1E1nmLcJAzBbv79pMfLJErRYLnzfKbDr6mFXybkUS5huJR37t7JbB3dJKfm3ffThJT4Ltsr1NbejBDBu42DA",
  "key11": "5hr2hUMSSpVpqpP6aJM3HL1qoXx7uXWVBQUmmnAU8mUCjwYkhTS237fAn4Z66WKsz9fuLapr2p1okghSGGu5sjjA",
  "key12": "2dheDkVkY17X93bzfqnfpy57ag4tTgsSbwpfjYcd6ovyYUVqDyTDwTcmxBuoKZBvvVxgQxkx6rscvXtkWVkYLgm5",
  "key13": "222jCdSMKDEhdn6NXheLDxyiLnaBShuocYJx5otj5aVKPoH9Qmv1Bbm8Psa7r2ZdA5VTRQ3n95stHvMxidbVMeQp",
  "key14": "3nUqJajETopTmDrFUaYoQ9DyeyXtaN9CvVYi5D2jzcZaQYooNVixfHnZzduZYkRnQ1ikWNymt9QRPn3dXs2TbHb3",
  "key15": "43z8Z96FgSFLup7m3zMRqmMhsXp23uPhp7d6WACbSqy9WjmL7bn39rbDftsTuY9hnkZFo1VzWQ89JdX9z3tNwKYj",
  "key16": "4SASYa61WZCBud8mT7u7WsKvnLBTyePhmUAcXNRJ76Z1eP4ggWkFdu6VJvxx2vMw5SredtD6R7GkNkZMrLL578HK",
  "key17": "3hevMtHXAvcTNcWSe2i7VUVZEeTZxkHmAK2srzZ2itqPTvpgXJHqGBR8iSAsf7T9HJyQURjrS4JKYS7yFJj4553C",
  "key18": "3QNWCnn1brXjsCYjzy34EvA3SVKek3VshXrKvDDbrhfkyYHTekBByWE78HQJ8iMzB8tdTVb2L6SkPv8tKEW9EnMx",
  "key19": "23ex9KLPVEPAiPKUBWUbUUskz5RYaVpqPLMTNs6SFeZiNo6jHkYpeVCG2KPhcpqMckpAFUBqxsWsRM7XNNVzEpTD",
  "key20": "5JZM4PyMptjzfP8TnJ97xzzHHGJAnNfKyNV2uQLjf1K3K4d1wbAHg48oTCsbgcAkaYzYn7QhhFCTVMV4WtrajWRC",
  "key21": "3Lm2WW396nHhhdzG3peEAHxXx3bbTCBC5tX2FhXnBtApC9oq6RaFDRNz6Xw6xfAis2WkBfp3uXbkJn6qzkypAhiX",
  "key22": "36ySAXyokWZ7Fx4eozpbXCMPjSbwmqth7N5RDVBD4poHtv37tuwu2XP8BQYEaFE5Bnewjj3nPxB6jBF2vwaoJKiX",
  "key23": "3uQheRWUANvQNE47xTAPXXRNqxELmBxzWJQwJJp3RrCB1G1988Pp7iuqxxKRbdCovsCcjR2MWebu2kmaisJyCH8H",
  "key24": "4KsM79ANjNjH5d8yjnykuvcq2M5pGyTkFgLW9Wyg9c5zBYHQbDqmSvvukzDSu4jXfySPKm8hGstuHFQPDuQGUeBg",
  "key25": "29DsC8pQrm5obDFQCQBppFshZMGHkawDRZjA192XcXxp58ehFLXdbHxYVJY6JLgKriAMCzea6YZQCmq67sMnZKU4",
  "key26": "bCgwxePAkAjDEZC1bKW7uGLYXGATSFUguSeZzyQAjT7W6kbyFZoVQxRECSkDunA6riidvhDHKr7MiiQmSk8XydQ",
  "key27": "28itWR2L3McMp2HJm4KY8TrV3B5HeKhqvywgxg1ySq1GoN9WUTNytj48Py6sUYhn2d75tze4pbwiDawEv7CtUCFt",
  "key28": "4WDRhU5A6tURKp5C5rfddiLiThuWxpKp2pDrLY5MxmBeW7RkMwePV6CcSbNQq18kR4kWHXgtrAm2Z28sjiUeSq7D",
  "key29": "4UgaooW6kS8GHGVKZZ3CZFEKS1ZTqaPw38MPh3sffqX7LX6Tgy9rKGMBqR9N9hRY3LFFfD2m159UguTP4jn8iVLU",
  "key30": "3jUa3WdKSTGsspHGfkb9znKrcc6WcbsaYA3smycDb6m5ZAkrNYzYkEUymhSUQGdYLwwSJd6Ys4FeszjmRsRDqmvB",
  "key31": "51wSLTendrmBNc1suEJGRhzp94wi7dgjDHAvdLCdDsecydYxqytCaD6v6hBWYursN8YMkznM9dS6HhBR9eVQ7hd6",
  "key32": "2GgVToDhnKDW9LsAf6TL5qcrRXQzubd6mSuEZDw1aPwiwhpAqyru2pcqQwZvesJ5kq4h4YveGxDs7TM45swubjgv",
  "key33": "pWf6Q1ZmBGUG53iLoUe1SVSECjGRuPgD4sqyg32PMApL41hgJqgecqMwGZtqzvTHtBjHRTdHX2YRKchiYQt3rC8",
  "key34": "sUT4ihB6JXrufRU2mFE2U8LcoGLrUJ3cUti7SzcKi4jxT2d6ujwLvJazTvoqRFt4VpTGsWKaVzRhQXtFMk3SRKa",
  "key35": "4j5DnZFogDgJ6opZhMVTLrvEHinDAaeb7c4mNJZDeKXG3u88kqiiRoJGA172dpJjPAHc7scdRuG4CdzoCrphazSq",
  "key36": "5MKve3MtKCyXKaj2TQqXEfDyLBDFdtRZfJu1fR5e4XF8fCHZYkDsaxzo1KHMaNyU6MQA7Q7jssiF3dfi9QYwsTBT",
  "key37": "oexJTgnM5iMTnTEBmgMDkAVz1EmBUyPfbmQBwNMnV1UM6VpYj3JCRYRxp6BdUqrysTyUXS8W4UK8Fy2vSV6sf3g",
  "key38": "5LLjPMsnowtkXWJkXxB3QySukvfRU2JC9oRdP7Df4vyPp57QiChXMuPAC2rYzaYTfgzYQNFhwqooENa9hr94dc9u",
  "key39": "5Liu8xBkdqRHXY4B82SMwd9hHAWJctTCLUTS6rbeLoGXTXnBs6yuTi8R2vNmmiS6evvwym5ugfhnFRRnCHJKfLCL",
  "key40": "471E5Jh4fXDc9deZkSAqN1GNXAobaDsfzS5Hngyv35T27syYqyS6R63mARhsVLku8PFREBPzRvWZxit3XEQ7fMzJ",
  "key41": "5XvipBMGTKvYWvwBpZDkMWQeRdVYiqQ7i5VbGKWqhficvut4vG16bA6jj15QxDerG6SJyX2QHTtnBAopXNuPUyr6",
  "key42": "DmLNMfzTgxuYK3jpTZMFJTCxox8cFjigqiMpB8p5MTxVaKD6ULUvWxbFfoG4hyDPisZf5BF6SrSmh3H79vYBSsp",
  "key43": "42oNpfVnzDdMENApWBgKKHBoye4P67RLZHznVEk1fL33a8ECJAJRdTPB7nxo7twXgzY6dqh8CMVe7HFCq5xLphMs",
  "key44": "3m3JNoE9pniTiXXW45VvqUWSC6L8nqL3aKKL5FgmCYB2EFTiykp5jMYVxo1MYUZnEKfo2HdCtSxFffHsM6Q8SZvB",
  "key45": "58f1ZR119aG4WtQEwPDZ71uuobp1JmaRVRcvRLqju9j58y664Jx74WJocM4hAU2GcXpvw1BshoNvrvMMMCRY8bfk",
  "key46": "4cMP75oAbJ25isF3TVvM4VHyKi4DShubJkQjJVUzqvzeMMReJYSCyYUkPm4S7VXbnCSCKH3uwnLwTFFQhWJvo4Tx"
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
