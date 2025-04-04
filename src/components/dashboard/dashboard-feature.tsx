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
    "3vYFRqe7Jo4LU4jdABUqtjCL5jS6VZMxK35nZo3iUTuthr2hQLPfzoTZa9SCs8LtA49C6wCMeWSGmyKrSqYifG4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZzEDNeMbcwVjAR2hs8YKNxsZU2pwREyTxmEAPamHYqfdwk916g29eynNoQSKYFRUCo8EQM3LPAd7AnD1eeSBrN",
  "key1": "2ftfPVHh9FLvRQpikKK8o5ah8gkaZyoZgwanrZcmJxGCBfme4zLtBK1MwEWXZbwwp4TsmNeEFY9ZS32585qTUSEe",
  "key2": "5jriF3Q51uiCoRwkq6MnnaC5YgnhVUiFYKvgcnkbTRdyETfudVMxD5hzRhUbVpKTXYp2au6NJNbqxkVWrASFtQWx",
  "key3": "uS7yjzd3jhgnGWNyDhgTstrmaodqUPj8buEGoAMpcduXUdW8WZCY5KHUEWnjTnC4xrSJU9rCjvkuwN7PuK2X9NW",
  "key4": "mP5f8z7rRAkrFMkhkLTsZwjuWnYMAxoTEZeJsXBUyFci3wzEW6mzn37AtGLf1fg6eFLQ9A9qzr9T4YvqJ3fa8Lz",
  "key5": "4mR8JzFQDGNjnSiPrjSf8BzgdckQRCYg4paaTH3oeWc23KkJrwGPXemfYDunvp37hrfHgzyFo795t3HAj3gju2JH",
  "key6": "4hkFPAyTBb89A8LHWdc5nwZ1JFgyxi3MJvXfqPcZfSS64vrhcE7YRk9krtqyGzZufNWRE43wj14yUuXTHrQd41G",
  "key7": "3o6nPydSguYc3QSAt7TdHQk3RMEXQ3LbiqUW7Y5iSam91qYpEKWtoWmHXjPb3SoAKqdMHpY6Kqq8RgwMZYUpfbg6",
  "key8": "mfXaKNFDWC5Nyj8evGQ1doNYs5yYjBsQqPoEmiEKiffqcSV6H7kN1kVdjdhqJG7AcB3NGdR7VZEh3asdeeCHkzR",
  "key9": "S4KnAuXj9MmWFN46Hd6HGqrtkmmT9Sz3AjY3BbbgFF3vFfoJXWYK6d9PLgi55j8Dj8ewCVipniD3z3HWeEe8vpj",
  "key10": "5xQNzpAggYoBb4Xy2Y25TbsFgguCRjQ3rknHxU2gYT8ejoj7fJ3oWo3haGHA71ss2nsmHyMe43iV58SHhjV9rBvX",
  "key11": "24b7EaNYehnnSLMMjm3BTFqHnAJwrU4dBTHjxqBWFp8xfNrDzjpYNpPXKzcxxqMrGiGfvJcWcaoo9rGf5rip3t6R",
  "key12": "4YbeXwU2gXJk6yCsM1S8hGK9LNr4wnftcarVe8LSj6eFaF2W2oYHYeHpzSJ8cgKEUDswAYwtDWpCt5jRDjEg6Bz1",
  "key13": "67fdJYX2op5NB2dvGrjjB6pJR66nYEKzUfx2ziFdxJddGJ2J7oD5khshyNxTbheViFWa6oedNbmn5EtirNTMveY9",
  "key14": "659kpv5LgPM99bdDQkYR7F3cNwbszYxUSvSbZd7Jik18gMe2GrTFCP75JGS9w4mX5KhH4dMrTNSAi15Nubwo3Pr6",
  "key15": "2tjUgNh2Vaf2dXKdcr3uzqTKLdip1TcQt13ywy2riSuMDWDjPPpJvVfEXWHmwraVhBQD3fT58QeVZkpDUgryEUBE",
  "key16": "5AuJwfoFaMoCTuuQ6797UVXdZmaMeWega8sCesfRwwsNddMGf4wa9W5dky8ygQCztxv6FhXsPSifTEkuvwMCm3MX",
  "key17": "34XzWp9LvxwdFRccciCizphhULbbzV8kFKMxBZiZWbmwcP2DKJEKPuKGoffp5sDyCC9cWagBXXrQrvFbLmDBeq3u",
  "key18": "Pdkw3nMmMCrgco39ioC9gLph7gDVDmzSiUzsgJ6ERVqY4qswLPs5wZSRvbmtDNuFgD7uVjNcaxsDi5XsPbEmown",
  "key19": "5agmoTN8b9YsArX4FgFWPU7SicNCMekDeSV6TSXezkzm8jmVAFe1gjravMLvZ3hYSxjb3p2NYP9xh3PMGr47bpTU",
  "key20": "4cHisNNxeee65acotvPxHuYx1xDmteynynLe5EXDoxFp8erCj3ZA3oJGX34mHWZoY719L4JRDUocXDXaAsVLL9FU",
  "key21": "3CWCy6EGGfstXBPWeD3iwePTUDB6W5bkdHQuGkrP1E2JEyuWCwtY4UjyZftzrx9P9y9FD5UdeWzi9UiB1BqooTgP",
  "key22": "jLvN8BVf9bMdepLedeqJtcyPMEDXSyxCDU2SWYBjN1F4H1vGLepPhdmCxTZ5BvXYL31MSKyFkAJL329BKhjRMyx",
  "key23": "5FTYdw7KxHmVQAT13oRXEjPmU1yPwJDUabphkj5hnsvL58HeLzLeNhCEFvruzYdr9amGpwcYvGEKNcGK4vmGYNAR",
  "key24": "3pBeoBSUhME1UYmBNpRUcDv42ah9knv9Swp7PxHQLeGN6K7oBf43k8vVWzZN7J9P8EtzBJmsSamfxivg12pz7Xzd",
  "key25": "azH7veuKZzZrJ7CJhmgsj1pTyPgqsL5t88BCwkNe99KSuRuLyHQccDoUyvZXHB7rcJKMALgGrWFwCrCBh4fdQee",
  "key26": "59WSsZhMJFncvxFWsKvkJUT3ZgbJdXKQPJQGWTZCQfvZFqPR4NneCSWXtZmUy6aTKAmyCZAcX8AhpHaQG4Kwhp1t",
  "key27": "5i5vkbxyRug1yRDH8kdcBrL9Vacdi2m4ytN9LJrRWHRWeqw1eqmzbvkJSd7eydo4z2tsGKTX9LBBC5kRe3dyEFBe",
  "key28": "2o4rK2L9jHmhu23rAy9pXoZfsukZVf6zCcEKC7AphFQt7fVWDXrmokzoNg9hfBtE52wFxQ2HaPaAKvi9tavwCVd4",
  "key29": "3T5sb1zEUNU3vwNwFz6CSS7CuEjcsfzuEJR7pMQBJR5wQiFtGEJ5NCZXrCfjNTamBpWvogHBZkSLpdvHYcwAhkKU",
  "key30": "4KZ5tCwunEYdXwqnQmVUCwDe8gTn3zfowT97okPmoJY2ccyxf5984VLzGtgGxnh95zM23p73q7XNGSiZ4ATzb5FX",
  "key31": "4XUWkaVjW8FiQTZud66Pcvz4Wog6qqPAvtmG6wX77izW2VqNsisetq8WSxkj1EECSt7qFH2VrwC9hwx8zL9BQkqS",
  "key32": "2p1bEsbVtws2WhppdoEjmLivAp24iUhRRNbDH24Atux6Xcvy1nCZ1VquhgfURBLbekTox4FXQb1HATF32fGgkFGC",
  "key33": "3RCQ7fz9NrwSSwNF8bReUYUwYniXJeviqgEr1UxtS321G9ptvXDyvosuHbYvL2shV3dHyrTMmzk5wr2fAqvZPhXW",
  "key34": "4GXPYKtdxzvXTM3iZfbJ1bMYu1rpyY71swC6XmQQ34KQp5nxAY9XVzH833PYsLSBnVJbCYEx2ggT6mULVveeJgHT",
  "key35": "23hkSmiKU7wSa6LvAmCRQWKB6LdiQfz9LEbHCTHfVsMjbAooaDtiTYmcqV1MfwmJzNHKcdLQvvYzYHhvkxj6nk7W",
  "key36": "48NVzkESrY47beAqcMzKoE8Sm6qtUw8z8zKGei3U7vRV7iPXPyq6i8FNiyL8GY8QqF56gKwUqHrHHvUbGxrCDUq",
  "key37": "35LpCm1EYe3Z7mZ2agMqNe1CouDZoDirBTGYJ9eUBJJtgBTnbzAP2QaMFS7uRh5bUXmrtahW6dHVyMWoah3xWsP9"
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
