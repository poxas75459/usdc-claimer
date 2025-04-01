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
    "26EADZjjvb9jGXwp9VZQH83kqGtJmxBfcMa2CbCijP8jidH9pjQEWFy1YBRXo3ZfbeiJErrYJ2RVPE1xgAH7tmGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xwXMM7aV4JK5KnzX11bmXo6624JfniE9jHiN2JwMimMMdboU1yf2FiFmsDMkJK1Fvvt4Y9HHYH87Wpiewt8kNcs",
  "key1": "4JW45K4znoNWhrdcJ3sBQk574U7WQtCCiiCa1daLqQS41TpjAU25izoMXMmy5Cu34PY8JnAiZXYw92hDNQ2GW5DX",
  "key2": "oKKFR7egXS1mGKKks3rqGTEHYNh8JtZoVi2yQa1BfEHeP4CKwFiuokN4gvgb9cSJuHoBCZAf3egsVgS9bppsL9g",
  "key3": "3NyPHYCSxvt642Btdb6ketPcrZ34qBsTF5LgxuBn8yxM3854et7JhV85QazeAt355iszVuMQ2ZRUvL4h2hq3zuP3",
  "key4": "K4oJBkXu1ff29X6qZLM8gVsiY6CYQUFBdqxpaqJzGrHACR8AqzRNcZ8N9mcFvbaJMo1iN2rdFix3S63s2ugN8du",
  "key5": "3SwQPMsNBRziucT7Hj8TDBFbQQoHXNYmGEjU5JX268pxKvUpwe9UsQZWCzoZNd17nQaZzDofYdZiFHAQH2HwQcDH",
  "key6": "2rX9ibLRWCQjGKaKh5Nt9oGbPC8YHJ1PTXixzP5U4Kjx9gaiR7U84462KjeswwB9yPBCefzvCHcEach41Zw68Jyo",
  "key7": "3XXtZpwCHreSTSKfw9NF7KycgggLrJqtfTm7SBEMG8M8Xhh3gFJh8AV7ptwQzDWGPiiREP7Y95aHnVg5zN9bhA2W",
  "key8": "5mSLQhGX25frfXjSRezDAFYUPnoDdx8LPAPUcvcJJsL6WrtiBeYDDPQCm4Kux86ZhWbx8cDF9wDX2en7tEppyUTP",
  "key9": "2keXn5srADSz91jcN9eMFEzZCEteVMoDgYfz75ohNRGTQZ4aLRqLgCtnUwAsxkukdmo3che2vwYcETypMT56bGH2",
  "key10": "2k14As7GKv25mNuSE377X7p4Nix9cAbfRc8vLGNg8DB66zQUcKbbp5yFHSQqnFKyoojGkyTLWxAWvXYwA2VMqRZU",
  "key11": "3s8NAnzh9a6HE9QVGRfqHkUfVxhnEhe8CvBbWyxeTaf6LBJVwsr3KsvwNsPNg6vbP9ubJJur2rofkB1i2fVuqsgj",
  "key12": "2EjzDTcvGsZr9MsPTN3ccM1xHDJvxRWVqxXqhCQ4w6eoJpDJggNxbvuzYFNEUrTMzWU4MR8HBpKgHZYbvLFZ6pbX",
  "key13": "4ouhk6tWaxy5H7esw41BJh1QQ6PXsjHwtXAr4Wd8EhurMuGPYitXyq1E4Rhwq3UcR8J9cBWwEWEapjKyJdaA9YLb",
  "key14": "3sNexp6jmgRHRGNmNB8ice46yyvjmnXgtmRMZaUmfH6nHEwbXmNzY1HH8rwdvvhjdtzuX59jNDWvbiEkFXU8Jyc",
  "key15": "5ob2jGT6rApmeQdtPGovSVXfczDxLFGWpwMftE3aMVBv5ZXniguntwN4wFsvVVQK6aUXzpg5ZyyjxUpiVAY19Mf9",
  "key16": "EYdR2LRs4URwDbwfu9a3EDHUF33DxsHrqSbiowVHSV9MbNPGMMaVMV6ekRy6rYBhMVL7KVTVWmoytYK25FeKARz",
  "key17": "21RKUPKMc6MnyCEpDYLLGHwgR6CSNH7EELhjudRnxxezP47sLRxMBRUuebkH1ubDvE2R76mqZtDhRWqzuncpbss5",
  "key18": "48VwoDbMUu6PJ72WfiauzUfHwYFyzqYEnD3zX1k1wn8Yr56hNN6XuJ16pcJer3VpcZtPsjR4dJnvaeTB4ULaLtgQ",
  "key19": "5k8Qa9G3H3ppCxWAeCquwndvPKQjJR8X1PAt97MAaLDjpcj2gcAwAjkP1TM9cWjKfn5yoTE35yi4fK9sA2s4XByD",
  "key20": "45qT496cTagRH4v6BNkzNWLE7h7hkwgtU8RF56sv7SHoHGJYHfDwB2zKtAvaxsUAh2njaavwHrFpmzMoxfTkg2H3",
  "key21": "5oboven9yXN7cvg5Vhm6oHMv6SBadSNHQfmXob2qRQzL6semKk6aYPt1pr4TFA4sQPsT2wxPozuZeUvsvpJRjcC9",
  "key22": "4eEJPP4fgY15fanyAGaYiFoViyTe95FKyDzehp9EA4tLeSyuYfa1pBvqrmsXHHaeYueK3wWP8RmLTaXCRnRHZtHV",
  "key23": "29KFGcCQGnxHJLRKYimYG1cFU7EPtvb9rZ7LVPC2LNLcjCBvvKfoWgPVnUaYQ9fJXbV3L5CGbwSdL3kxhB427gT2",
  "key24": "2LFrxCuuPsJDAsuxvgcfEmzKDnhqZSdQw6NaPuc6mR8ruwsutbNaPGyqP7FmHhBjRqLtaPByT7EnhiATrfriQdUE",
  "key25": "dBV3yFwfccbM5dNLdEJSeSocRhDdwmRbpMbD3kYGfKnKPU4ppLCPoxK6Num8gn9gQKAyFg8QTRKsD8tGXfahp8j",
  "key26": "3ZZSMA7wZoCuYXDtayu8pruDmXaVdTH3veJDsAiXi5jGjKoMAySiubxTbVa5PuGyfSspMymjv1FWck89GkDtXpcf",
  "key27": "5pqL5kMnvvP1a7hxRZ5vwbu9PGrAmanLzhuwvzTPK59xJKAJZsUKa9oHGHenSWFxEcQ6vJCfoLiZ37YWpdGgAPDi",
  "key28": "37HU4ctDvTkkuCkgK74q9TQiRbECcT37q537ppajteW6V4jKZwKd2fpM9v61N9WQYmiV1sbKqgQqvYe78q7uCTty",
  "key29": "2P6BCXHB7CznaVWf6YhLTR9phSM71LGzP6FsoHQFkV3NnUxu8AJCCxUSWNmPWiWsvWa19R82ikrjUqGgf9mVCkEi",
  "key30": "4D5aDkqbp9kFCFcU9novHECU4H2mvscte7EUmm7A6kStm96zBFf3AoVabX4rCeVgLfTSLd3RuoeNzrRgjrtUNXqy",
  "key31": "5kNc4yawwewj7PuisfjDvKbUzc9nvfZAQjMhJ4Ht6v4GFebqH5C1YXfBzqYrdsh7n7w68goR6o5pJatMF9JE2eh8",
  "key32": "7bwANXnozjNU9bEEnH7kAG4BDzK4Hi1QBGmGafmJYZrvkp9oH7GvFTqtWLAtAyEcpu4s6Unr3BGPTHBm7cG8BtF",
  "key33": "21YoJe1eoPxwZWrwL5ogkLpVJzNtHReLhu5C6vKefwambjfbCNYbeRCidwffvVtmDH8TsHYnQkv6HdeDwBERHecf",
  "key34": "4R1osbFhuutMijNyqTTz8Qnxot8mvGWhajNFSJkFr8oH7vjqphraeYqvr3f2kxarNXRAUhdiCRziQGXZ3VpbT72u",
  "key35": "msSHHPRGYHArsWMM1t4TccpzFfAkRctVvc9cbEcgKY1G1zWdL5WdMZLoqhipt2CbTVZyTu6HpgtbMFkK616fiRu",
  "key36": "2CPa767EKpYVbNq94j5bdXZXGWLBKGA9dYftExq7RJApsiz4LdRqfJuSFrn1FpAmbegHGCbUnyFVfp1ZRV7s9NUh",
  "key37": "Kp5ABuAQVuWovtQhL756r85LuwypzKHxBSQjaGUH2uhRaguPNLq9Mqb2As3Vdu6ZAM2bcviAmryfxGecQ13sdzG",
  "key38": "4QgzZJVTrJQ4CSk3zXp1KJ71Qm6f6su9Vt1hga5AA1JsP6wv2EvHK4BMm51ivWwM8nWrHNENeofBLDW9F8Bh224k",
  "key39": "5qVNg9Dd6LV8B9LRy5xGpAoDcxHdvqvhGLMk374SAw3kAujySMHA3bF3x8LpLHbtDvUCt3swvJnCoV5AbvmWMf9C",
  "key40": "tKvmD1NgGkBmEhoYf2eZi4n14ybupgVrJMaAzemmps3pexn6JpouqmQxgheu2R1kmLfJeYbHm9SC8FeWmMRTmFf",
  "key41": "4tFjw5yRWdqKrrRSgyVtcMTtB5QMCXeHZgxnwzMwPxxKnTkXL1HujcSakrnotqYaRanfwVPTebzbfLp7pT78gDRX",
  "key42": "5gueomMs4GvzXosLCG52rkhT3pyDj3KRrf3bS1hzZCGX9448wwxKP6BdGxADwArtP8tKCNUhvA7mgeLSj86r99yz",
  "key43": "MEbx8UZwKjXPGJf4ce4NN8mZd6Cf46shBYEgFGz87Nt6kK2E9mfvGpY1MrbW9g4AYFtx2a5PHmrfuqiow3wBohm"
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
