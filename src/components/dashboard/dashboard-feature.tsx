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
    "4UiypFuouxmV5UL5AebBP2rfw4Rc74dW3mtJDFVAga3QepLWyNVnqRLHiQhfU1p6wUDqj4DSFf1ioWefaDntzbnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxWJ8zJhfVGaWAZpcu8RMFr5MnWo6vp83Ez3w4HssASD6X2SBaJBZgHz48ZyoRicfkxS2vMDmDYZ6b5miR7qHfV",
  "key1": "3a2VM641q27doEYd6pYiSddthS2ivT9dbU3xAkkG8TFyWTdbqVDNKU1hBdYFZCWwRMjWP3wC2WDq2iN9Nn1Xqnc6",
  "key2": "4VSD34E61zYkRhMFznn3Gm8SNRuDUDM6yVWxyrA9QwwJa8eRDosLFi8scUhwBPfuAdN6Zz1CVk2WZZ5f8nXpm371",
  "key3": "s7RXhZDxv8EYXpb1VriHqXV1uCdCyJNqey4LEm9hFVf4UsvAbuxncF6FNsy2Y2Yd2BjihC1tiLa2cENLrZvQbH2",
  "key4": "W5H7dd88pXdeyj35f3MgcjzaZ1nFsz8xfS7iC6x9Mww8NVhgyK5kzJS6zQJisV7PSXEKSeUFjfi629Jc4KRnz4b",
  "key5": "2cKGGaq3XUNnmEZ8SJN49GXWxmwT66WMXQwGbFMZXb1rZQwbvMiteTCZSYT2b8PaiLAWv2TEmSY1LDgGyDBuAZ48",
  "key6": "2GnBTP5LisnSRykVtqtYVqqa7HMgEFS9YHNFysq1fw36aWMixZPCYqNiVbB3X63FbRkvozpfADzvaQTi83Cr7smD",
  "key7": "3ESgFpbHfPYX23QGUMq4B7Pfw5zESYLccFzaVPTkNJoJC972f1usuRYTi4iN25m64DyWBNvoewJ9rTV5txaK9iYD",
  "key8": "32M3mqMYtnUhVrNt1qDhYAYBtEcCTxMrCNvSEwSMziCF1uaa6YcE5dfWeLsnWeUws4ec3sipguxbxkgPvsWxCVHJ",
  "key9": "5ioBCK8b31RzffCimVYwvnbBhUJ5mLM9LCnR3WFyyArDajpbKQx7TBE5TYWyAG5tazAiA56ZZARqAeWmBRU5FqMu",
  "key10": "46mqL6Fb25J38VSz5xQakBi6PuKC8VAnWzqmX3tp41MtQQWfBQRqeyDL4W41AWZ2mJcKtjh8bKh1BkatNuUKRine",
  "key11": "i4hifa1ziB5VDrG6Nce5oXbgrJXtZW6vV7XAhjqhaSjuvdwcnu2VZRReaBpz2Ge4W7eovzFCBmCxkMPXrzkSWK2",
  "key12": "4zNjHxiX678RJr2Kaf3cMmp6JkvVWoHGZXDjcCtz3esARGmm3TZUvjx4Y1EsqYKSuJr2XB3UV3xgdrKFYQGDJ2Y7",
  "key13": "3zkDBUn32Jvhg6RkHeDxXyj43FjWkJ4Wv6GJZ91yW5TB565ixa3JoEaRsC5QrKziAuGoVwqzfxtoCFyJ1TJTBoUb",
  "key14": "3f1Nny9KbYuLbSx6GiQ8zBvGnzCnBfCB7XdtzvCqWzkw95UQnJ5DD18wUWKZeVPKEprCsU8TpVuq6BLNMXjvoJqE",
  "key15": "2r4Smoae99drDAJmVj5HdYX22tsfWkcBZCMyBcFLMjaBrVjPbPwsquYDSL5N4a6MNWmAueopSanT3LyT1kk86z1D",
  "key16": "2Z2woj78TuKfcMWgwmAViG6kA1AZGL9jENEUePT97FozK4cszrCiMRYTLyMiJqm2uHgvTNQkiJVjq8D2Jkez9GJA",
  "key17": "5iZ9LaQdFFdNN2FPAq9uwNw2UB7J5VmWtkq2SZiCo1K3n72t7KQtD4oewpDw7aFbynKcG6zFSPHFDfdUN7CPqSi4",
  "key18": "36DmUfXZvkBmA4FEDeL1oyBtcVgZTHNQoh38xAnybJYGG8L1c8dMFwPaPbZmZtCunNu4Qy92b3BDCRDacGEBuXYN",
  "key19": "2xT33rh7uJypw2Hemy4FU2y6KZcpSH7815APe8ZMhaNMqRufEjWpBC9CytgTaVGxdcDGxx31BNeuMGNUdYgRdJxS",
  "key20": "4ff3TnEYfuJpcGFeKYuznaLoiy3iNjpSoJmAcDXAjwsgjEdo8ka6qVsqmz8zVmbh3bf3nrXmxFikX7fLFiBm5Mby",
  "key21": "53WpNQMqotUXhgsKSrMqJi1tPNdsP9r9F5sYqrTzwWxTZn894RJ1VZUzAPqWCHNuRy33Rw2nAGMTFXLdLFKiL7xC",
  "key22": "62xvXMUJiVPAAQ832qksvU6N2iCvvjq4b1Nyz4BKb8fNVzHK3hh876zDFA8xvPMJX7NdYk2CRJD823Bocz8JW6Ek",
  "key23": "74x8UrC7TjS7eUdAwFv11VW7gFRE2WTv93nxX9umBvzKWEkTntB1pcW384RJzvvdCqcZhZyQFQ6w1fSsuWBwKpi",
  "key24": "4JvaX1VsyYuGQ66v28tVUo3Ek5Nt4iGZfudVLh9dN9MDhhs4h5haS61SnkY36u845tQh1iuCfEmCWvpjNjTpowJW",
  "key25": "3qBhPm7RGccJjqi5BpqZju27uA3Y7hSnuacUGSnEREXL6WnJkB1yT81FdNj5s2raVSCD2gdMUnP5DgU4PwTE7944",
  "key26": "635R1mFDmjbu828iJdHCdH4RNod4tQFfr9xSKhKVvB4onk9etfBQeRi1vMMqvmPVjqyxn2Pqfi3dzGEKDbYuqXuH",
  "key27": "4eQiHe6TwRbGRXwE29QnyiY4nACnivFJGcAgChGxBF19yUbwvS8EiQv77fiHyDoGUFBPjngYwZ4qiDN7QFBXVduD",
  "key28": "b3HUhU5b3X2Yizr49t1tLp2hjUr1MkVUG7PCtJZqVbP3ckUtLaZ8DTB3WjCfY5TXt9kpCLW5V5JsNt1JyYhtCwe",
  "key29": "o1z4gmeh7FTucS4Nbs4Naia1yC3mnpUc1osBEbeadvfRn7njx3cJTLrDK7ypR1ANAaAw5Wi8quAtiDBEKrooboe",
  "key30": "5uQB9qZEabvoRM9B4UcJi6axqLqoLzRsjteduSH68W31ya4p5dxqyRbD9ZL5aR9TQBVit852TnHoVn1LGG1B7MYA",
  "key31": "1MhN5birMzYJ3QtJyQ3nVrciS4qbSdzm1r8g4Y51XrjJSadmLjTLgVdr7BQPeSPGKmXiLzFZF19XVCFfdt1RHrk",
  "key32": "2p7yyULSD3cLzppgZLiEFaG7SRFac9KhTX5A3QUhcWU3iLXXyeTT3XNPvpH34Y39uhN8uU65bf1KB8v8Y1JjuAUC",
  "key33": "42iq8gfAMxXeuE7SZRJf8iaDvBsvvoRpfnFbPmmAvRbajHQj5Zh9vUJNNFV376YB6iUxR6aFDu7FNufXdZYuWC1b",
  "key34": "2ETXzS8WkLuhkdeercNu8AaQonZ768pdqindZbnKn7AY41uVEQxt1A8YTGVXQLQ2BkUFRup3Gndoa8YbTZaeWSkW",
  "key35": "46BgTqso2BpNQj3p1i1arjzqXsw9n43g6qY9Wpyn8ePpiQpAmCoV8mjCSjTvPSpsLY26vtpnxxLfPrGnTJjGvvuk"
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
