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
    "4zwTcUs9exkVLSgrTiTMjZyzTkjRg6DJqqkoe3vMmNmBx45TWfkQfNk8NAAmVBeFiLqQroszGbeCDUn5B7mhgBTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrV3FcCrerAc61f27ThXihiLjD8vYGTW85PMwLan1fVnYz1XYKEBQMPd8Ck8dfaShew42kAczFoix63KJYVwxHK",
  "key1": "3H4oc2pGtHyUWka67HVxNBqZk6SCn7dJzYnWveHfb2sXoa5b6kqWvCNj8YpHvaFA5WCDLzLnoq8u3eD1VarL3cGh",
  "key2": "jbwSAwUCwCUicvjbGRQwFUxUTrtzUaEUtHp583kmr5E9xpdPUq8DfnseE9r5uFRXF7gKCD9h9YDhcsPyq3A5URC",
  "key3": "9gpi5CVuSKDB2APbz621xwpHGNzVYbH9f1z6eKn9mLuCoKTWpYMZKwjNgr9TrskwQRXLdSDyBw7gjCy2G4vLpKT",
  "key4": "3y5PsMdz61CYntE7ktMPB1bx7wCeCY4uxFLysrJ62b53cVnRXyxt6QLbUPT9ahFhydWiu6p9ih7q43skniPX2Z2j",
  "key5": "3uJm6GKVkfG1JkbevfwbafJdFfYYywdhpaAQrpUDuquZbXXw9PAXA9jr9er6hmRttXZcVjYDyoduZtmDwrsFSmPc",
  "key6": "4kyqKZ94r5ybY4anc9qrBGiPpkywJC5fvdmdEJ5qMmYCipfZkBZFaCMUmjqMM1YR2ub68q3irPwc7e73XufuC81d",
  "key7": "67pQdSQv5idzfWaW8U7MEU7tV4mkzv2XQoGbyCYmG4UNgqJa27pajXepCV4kX6HhujA1NeXDp3GMxeuzdQskvdRM",
  "key8": "2TaP4Tf2ThckoNg2R9DQMrEXtgz1ThrnFu6PCvfpzwBnQsQDJhD9a2km9qxWfuW5LC2Q9T4JbE5uVBhEZDmcJrcQ",
  "key9": "S6rCMmirp7ty8S4SgpYfrvd5YDNicmtXSiZC3mVzbALJFvYWGnJyFmh37YHZwG5WvdaKbUH3H35y7hyyFvH7g3Q",
  "key10": "3mM8uht8EC38rgeriGJPKSDxiygxVwKLEQGUummgj1Eanx3iCZCHERhbPNgHrbdDncxvKCBoa3gi5sixL3Yj2gex",
  "key11": "5KRWMVRxJ9UBXLuhKpVfu7csNpKutTUMbAfg9GzQixmyymoWx1HEjVHEpxGkyj4fVRvotfE7bPyx1hyZadqVPNt2",
  "key12": "252Ru4NrEKZPashYDdiDM4cCCJXW45U7vFeV7RmkRsiFRiZk4GQYXBBRQuuup5TpVFXFeeNi9aFjdb8vUoSCEJ1J",
  "key13": "3ktR4dwY7QjNuMXzmKArUkasmUKVB7kRbbwG3Y2KSnQHctwsv1Uxx9Df3XVicTnYK9ZyNqA2Mzqi3sWnhgQoJd6S",
  "key14": "3rKrKqFuddRv6b2Vh9neotSoUfKbUCbQtxLT1urajU4ha4hWg6LmkjguP8B4GCCMhWWMY6vZcyqG49sgA4EUepDP",
  "key15": "5NAXnfCmusQymtc6THE3KKY6uvXcB8FWzGECxHTf9Awn5v4exHUvxS8Weu94JyRaeShu6daJd7NjggA2qxuTFn9P",
  "key16": "33sxp8aDNwBnzcWthnxZkR7wTaZbXAyMNwpXubnUuSMG7nHs4VzvZGJTKm74Efvbx82iaCK64nJQkYmL1MXUHvZP",
  "key17": "rU9npnYqwpCHgkHAq3pkF5surn7XZfgK9c6bpsPDnVuY9fjcRVLmnivPiosZmhbeiPzyeYnj3EL6yVwQ8hH9Hif",
  "key18": "UreoGELwbG5tYcBxZBRJ5qhTtNYgfW3VeA7UGDUTRGEPt3NUk4hWbMDP7VNc17dr1zc8qRMq3ssbYF5AG1U4tCx",
  "key19": "KeZtb8ne26nRi3uUYUNGf7WfeEi69Co963zSkpCwLHNBchaVLU7LQ7Khm8bJSp6oyZ3x2yTxT3nQPFR97QAZJSU",
  "key20": "irxVLWRgLj9DQxW1U2xTxaWsxrG91D9DEtoyVf4sCK8z91GdgC7nPyo6yNUb9PdzSfd8L1DJWzkbCHdyMNXtPMx",
  "key21": "49TrRGCdyHbZGBC78eabkTTmgwr4tNsea7xWMkUM72JiKstvpCUSa71rPaC5zoptuEGc8wzyvZV8iYEsRsWW2eGD",
  "key22": "2MvKqyVP8x2tZgQygT9ERnZZkFMrV4Y9qaVXakaXpBQJFgr635GcD9acMLYEmDGuycHityevVVsAwTcpTvYDCFkN",
  "key23": "NC1iZczFP74FFb4nwTeZ3PAQdqQRKNuf4nRmd8mCSvZcpMcjF8ARwuYcStht3FkYwuHAekYt2KJDAzKsZz9Vnh2",
  "key24": "5xcie9jWhTg42CPVphAu3HxkCMceRQHYG8XQ6J7YRTfTnYQNYL3YXFmGgExjeyceswbt17ePZYrxW9o2VJUgWhNb",
  "key25": "5R92QGuTYhqLtsQQhLMi3E2zwxbkQnQiHyXewrCL2SkC4u55xCkb4vPtrqe6z5sKw1DuDHxiQL5W1tr3i82hgDhN",
  "key26": "iMstc7Vt83aBpPi3M6tVShbmGrMNoUPvBEnedVvjupMBYfNcRpGscaioYHBP6CZTLLbUz44iGWBaAoKHjAERH3R",
  "key27": "3Ngcn3QnJRPVuXoJvYFrqj8veKod7gbLaDN7nTMXZxagJeZ3xT4thJGqT684FwJpNXbZdnKhkcNBtKjaCkYDqkT4",
  "key28": "2oy4acWbBwcdN4Ffa7FSARrqwK2gMXdEKyoEMjAmWhPg8N9gYNYaFUjiHqJFunVKyBUpJVBSW55hZZL3CvggVXRM",
  "key29": "mFT5efbAyXVpsUdpqRcTL7LYRaEwM8QSrD2W2HnbaUthN57P34tkqG9XWrWcZ21x9SUCDY41cKbQCad9Zknr6Tj",
  "key30": "42QHRNSFjVtJTMBmorfDYmtLg36RpLtMcFxZS5ziM5unYCaqsN9DpfkjBKrWUrFmUQUCR6VEPUi4KSZoUXMqhFLY",
  "key31": "5K4bPWHFVrxG2rEUjDTUXjjfUZLAp5PtitkBvdahup5gJLaKAMYVhsPoAYuJtwZVv6v5XRRseLmfLmYrm5xnoJTk",
  "key32": "3QKQTQvKc93p3Sr7czUNDBwZwtePwZp3y6bMKakBujLWd9VJoiTG5LmZz6puxtMmadnQRA5TXkLoWRZJ6jZFssBS",
  "key33": "4cypdBGdV6cTrDtCzRXUSzTXArLveNaobTwcNSHVN9f4e3iwp65swEJd2e1X4SoAGf2Z3fZHk1YBjvwxzsa5jgti",
  "key34": "5dDbLA76NcWbJ1mh6eTQjqXoUqbJYb3pCKS1H6BeLXtWZedEyLdMSRi61ja7nejb3EK4aFLuj8nGwrxKusEEoeP8",
  "key35": "4z4yMsMkFGABG7zGeUhMWAJibfDHZYNgZQnVU5NxexSoaXGu9Vj3fPsNCFy5Xg1XsRan2g2q8dSMvsAgLQMEM2Pn",
  "key36": "2eoSBcAdSpRGNEHdveVUCCYTAmEsjCiNJz4BJboWuoB2ndttECgtS5LG8RG6WzTFyqcEKPSwf3Um8bfdtfz8ieDi",
  "key37": "3YVXgJZok6vw8vL9eu5X66YdBQGi16aQ18WWrX5Nre4J8bxyMxufqKwhcw1cofjDFSAFbiKVbtdXByCTdYsEJEgf",
  "key38": "3Ftr7s6suf4Qk5YDyZPHMw6ZXcgqi2KYrLiBRifZ3TNoK2jsJmqiFCMeimYSDLvqMvqptA4AneXu9hvkakuRo6S4",
  "key39": "2SEQwUzX454UwF24bBRMxvSrnmYUjgWYfsJX1yY5xkVjr2auwUQxxiSi8pk2e8ZmbvPAJNVjmL7ATFQeeADEMhD4"
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
