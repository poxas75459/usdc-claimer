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
    "3rpVQRSSAUxeXTPtoUaGoJobAvyfyCjyyB3pHfK8UL7TjPex2BbzzwjKu7P13xy2kzJ3uuZHVRktwNMPH8mrk29c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyQ6ngRyuuySQenLWNGHKcS4LABxSaUKwmfcduY24vW5Ch5mpEtqqvRfokj1vyT5VFREvovir2T9T5kjqtoM4k3",
  "key1": "5fvnPBAwwU2o3BkP1mZidhEKZXg1uXYgFNWdrJ61iB6diZ5LPbpD3Kohu4TV4b5qpFktfq49mbKVMLYQMak3ohzV",
  "key2": "3C2BbNGfosRrQPEfPbgSLMbK4sfRXye2i1EAmsaZgqJrS5VqxYnrqXqV7W6BrJQDzXTYjfkZBrAiCqYp8L6xR8ww",
  "key3": "Z31MGAAQ8yH6ucrqcJ4KtnjjUGpDHS9FMSnppd1Guy8nZ7TyJ3a2nNKG1YCgjm8AKgdJ8nGmREeexjpa8Hph3er",
  "key4": "4VrTAiJb2F3eMyKxuooMnM9CNt6PAU9qgKiiwfqqwabZcDDrREKj1c8ypvKQQbx21JxAzsxzvs1b6wofQmwVrAX6",
  "key5": "N8jHqtodpjfA7uF4D6uZXxcSKKRs69bH7EvKuBfNGa4fxtSBiwAWJ1qi8ZgjXTxeHet79aZcAiPzJiRAhadRzJa",
  "key6": "CTN51bXKwEEaXKTKSKKVPT15CSQLN12doWjEUVkvhL9ydmz6z2ePGGqDSphZe1ZgiYpnKRPEy4mRa2WtcFuG1wo",
  "key7": "4u839QH6Y7P7TrY69EHX2ovTdofvympfH3GF72UQEvKmmaycvNULMeWKf8nBuNkajz1TyfhdjgJZnhvz8VJKPHYi",
  "key8": "5E6X5Ly579wju9PEEsntLNXRyC74B8WBCKyKmSpcXu4SvRoS2uVNAQUkFcmLbd8zco3tp7i2CzuFKCGF9Q1LWsxo",
  "key9": "3oEyYVyje4n3fctezWRddRKigCMLfQ2rbxjGEaGH8LDAg5ofbebXdBJTUTmNx6CycELg4w3Rb6KkJdJ6FMN4yCoV",
  "key10": "4HLG4r1CCsQNzRJ9W7fGxUQe3e2mFBBVvR641MXJG9bVZeqGk9q2REvbTtMHzcgqJqQMTte3B3oY75o4nWBiqFSy",
  "key11": "vBvWiFnVZ84m3uYs39eh67mNL6rEqrcdbMrdiFXqacYUhZ6d95P4T4B78CDnZudBja6AU5VkZK5DCaUhVW7vnEi",
  "key12": "xtPhe8vKRh97BzGGyquqJ4YCmxaGgHYZExmJwQ1ipmvYLQv9wSY56fQMYyGjcor44nr8JSDJKG5MuaxXTVbz2Re",
  "key13": "56fnfuPAPFxFDmkjKpCF7zcHAdriUatmzCHW9XXYURTBySDhpci9fWBL1sfXruEWC4XHWDhezWYCMRe972T4Tiz9",
  "key14": "3zRBq7A2EW9pRiyGPtRdpk7nAttod3q1u4mvx1NFbmbvfWhEM4qEQqxgthVnYaDeBFigGpwjH5ZakPS8tbEeV6ba",
  "key15": "XU34sHHhS9iEUjcP1W8vWvNMZo94mEYMKdptJSe9gysNfxN6cs3eeW32Scb3HcR4Up8pJuffJyT7Y1t32n3sXL9",
  "key16": "5YudWZvb9BD45hAUwhCzxZLWfgVYy3PXAcVkUV6VHuaziNEZeYosJyMa52bNpgYcuLZMNwfZUhPzMrHP87XXXPS",
  "key17": "3rGRECHpMFFT7xtZhHXNRUdsH9XaG3tkkdcmagsPSMV2yMnABG7QUNZng4bG4fiERBBkHLko6HE4m88c9sTQvQN",
  "key18": "kfQBfnKpxcYz2XmbNeeo7es5QiqPEDjjHYAdytVcf9iKmK3NXn8cBJz43k3PRKNFpbUZN5aF2b82by1sfho68gp",
  "key19": "3qMmngRLopyB5WNgu7op5kGH9axvWGbWbuqwRxaDr65Qt8yPkbBn4HY8jFnBWA8o5RbtkcRabhCECLF9W5S4zsEQ",
  "key20": "22WqQ8Fogz5iF4kE9sigi4AzThq4PKnX5cVAEL42xugrCjEqYoRo2iffS8kEJtDr9rouTQfz8JS76Stab4PvG2cL",
  "key21": "ZS22oRk31RyGNMH3XWi5Zp6KBMqLnmdwToDP8BQRt1EXDqhbSRrtHzLWyzvq8axFcrZGRqcBGL6hN3H25awqTz3",
  "key22": "57NXmWRfZLa6AFframLN9tzvBaZQcC2DUhx35f3iXZATmoYGczT28ditWZoynYZNqw9LHBK2wm2EDqJ8PzZQAyyS",
  "key23": "5iuESNZGk6ZFPj3Ymvnkctb2J5hfcANpPSXUCZMsUunDxAb2W1DA2A8B6gU4ZYAxxaYVKsxQpGQxqVRyibrQjuYM",
  "key24": "vgrPTtXYD41MdnUUoUYe2BjHL1JmDDXjDqphLG9Lauiamtv6aMy6a4TvqrRwT5D1PeqKMNCZo4KntJC5kVeRCse",
  "key25": "5xbGA5rXsk6NNBDJJ6m3uB3GBHp1ZXSWT8zL8JRyYZreZfYdCHiFhw4JtG5oFijywqimjQJe1K9xSQZSTAWoMfd1",
  "key26": "4ZBFWMXEqGpNCnXvoCMXmtSh9EMS6HuEHZ6vnnq5FQcNCMm51VHmDhc7ReD9LGqBJsWy1AQLTV33n8KTXvDJnWco",
  "key27": "5Bfgy4Ym2eZY8QY2B3mCH5Yjzf5WdXsQ62PHX5icYrNE4ACULYktbRkpmPJXhFufnGmAGyPq6eDeZRiCtxk1NsMH",
  "key28": "5eT4fkVfgxWbqRfgkevZ6rm1L8MmU26GqJzNSGhxWiY7VKSz256oLP7ud97nt4kYkF3kwKHnUy47c2EME8GUNtoa",
  "key29": "H4kyYQWJ6w8zTyUDDYBgC4qvUPdkbS2cT9So144kh8QvCc7QBMccX8h2CJUvzioH8DkkTK8uSB7e1VMXQWXwpfr",
  "key30": "4o7RtsfCr9jisdCE35zhQH6kr9E8Citib4ujcaEbFSC2z8ZrnzgLrZWG2HxWJkfYEB4KdCXMx5tDp55Zo1dqvXC1"
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
