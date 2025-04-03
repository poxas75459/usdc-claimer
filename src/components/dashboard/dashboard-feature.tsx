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
    "2f85RUDANwcouSN7zz7rtLNepaE8yQAaPBByRHMrGRgR3iDGnQUJfhaH2MggsAdJ6wfaoSayTNpicF153pzzZs5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsmZEKz12fhbnvw5gifPXped91T6WW3MvNGLC4uiZ94gfkhVDBNBpf4sMpTd6W6JfLrzjpMRktK2EovWtQspWHh",
  "key1": "5PRZ3daFTVefAkB3qk1rHwgPAuGS4Do6GtzQXmndC9WQHN6PjkguadsHdQmsj2gc9UBRNRs7UrwufdmjruVrBuwP",
  "key2": "3UHVWp6Hb46RQ391cnhy44r2Sw2nyTwcRLd9yztBSi2Y5687vKHxfL92Hfz1xP7wasQfQR7mTsmkg3axnVGQjJNn",
  "key3": "64dk86ppfkBHweTR1z8wAQazidpW1jjVtphYRLNQQ8Pc9FyddDpofv3zV5bPzhHABNGVvg5P6VgT3b67jPsTSn8c",
  "key4": "2p3XekLrErFf3eHXNLYUaiNgPyB22xskfiirr7g5V7ejKxnZKNHBhtu2hcbtiUMzwYv8fGYF6oAJpPvzy2JtFV9",
  "key5": "MZKSU1cCX2x31UgsWY7YxQ7vf7bRJjsng6weKvWbGUaSDmqbmQycCYfRVx2XRRPPHQ4D1Lr4qqxjGLP8A8WvWPV",
  "key6": "2FgCCrCUWsPiMERzBJN5GYnG7h4hBpsMmUkWsY3Lem9F2bmLe2m9SBKJQsEAUXzJugpVHgYXz2oEtrgkySq4sWSG",
  "key7": "5nDJkwkhY1im4yhv97VTCThgzhyEDqzWdz5yWAnWu98e6S7Ne8qmpuiw1dsYn5EpCgWb8ffbKTGddAiTzcJ11p5g",
  "key8": "3UTgrMe8mZrgZtJ2TRz6B3zmBZT52dUG9EFv5zTTFufvjHdhyiEG1QAKrTzEZSuR7b9E5kcDVqU5TAc8JiffmdqN",
  "key9": "56M5GJuQB6aoLRHJ3FUGRUGE4uxuM8WbTRNAjqL9LtVkbxKTREKQokLmrCYC3KsH8X2KRxTnyRTgD8T1kg59X8K2",
  "key10": "4xXfYhjY6hJjvBEh7QGssNxwvPPV2JiWrQjB3uYQwSocYSajPtFbGiuek7R48dCVr34oqZXiUnHXz3FYQySaN5VG",
  "key11": "bcEgx9RKbBBPv4fsU3qFvfymh3WfJGb1MtozpsWUbQbKSHMx3UzR5TsTeyV5oXxThyeUjgdmMcF7eHnsBc5RwdX",
  "key12": "4URgKFEhv3RKtK5EW9qSUEJA9eu3KpnDWbp56wRTFWfQHAdrmuYeGajXw4umHeHdruCT988SsySoisFwAKmtEWnB",
  "key13": "yf3gmGNGxqvhcNsXgCwHYambv4gnPyVS6oenVDUmfyyDET6hySxxPyqwKonyV36tiB8yAHpZiPJ8gYqFLtmgoLV",
  "key14": "3M7JXaocnJ9R8JGuvUPzsRjh7tm8GbSnuiLmo2ee6XxXY95DdgQdhcbUQ1xNZbYXEPEFZC76ktKBMubvA2HVZvQX",
  "key15": "2f53zPoYYDaumPw4vFYBVw5K9jk5vCoaUGF9yYjfWcWcYzJpDCZ9jo79pwb87ab5fQsLgMrYro1msaYPMHLXg3nz",
  "key16": "5M3ZjmnLCWdMcN8BuFsufJe5b6NX1TwhqKvnoUas4q3V5uN4XMqHGaQ8eUCF1hnbWfWHSw759TpyNjCotChq6DuS",
  "key17": "5V9Ves37ZB6cVT7LdMXxJoU6PgDjNM4pS2h24AiajHseXCqn7CQyhhu7ajePbC2xaq5cLRytQ7zqriVxgEi4JR4r",
  "key18": "3DTkSpigEQGmXKCVBAZG95aWoAy58g2mZv8e2YuNDJwZQKcGiTRmheimvGLUbnYtgrkZrCS3jJQMBQ1BSvFb1AGd",
  "key19": "3gMwTEjHz3SdDsN2KrUmiXuTt7moEQcRSnz7N2ANQu9usoFqzfLZYxZRi85GzAc7CFwATCJ62Cny39TfYA25UaaW",
  "key20": "4LDi3owMe5SSvkM23TNbMKjwBUCUcP4pW3NjPWieAULJEvdkkLTgKWcWHsR6iuTJSCnwYiwtxQwrAzS3dpyBYyis",
  "key21": "ktsCBMr9129ocKne5i5Sx9izT3A6qkpgrYQXxhyYdovbYKs8mDwF1eP7HX8dUjUGNVaZ3tjeoD5diCvFgEYNoGp",
  "key22": "4C4iEXrAEBWJi6vJrygYjXgrLuQ5QYpBeYTRXokqYpeGuTbeFJWV8mw9vDCYKG11gNSajp5N4TQNRaWneLYT4K4z",
  "key23": "2GXHfkn5ZtNBr6etsxgiJzPQMFx1psgXmZ1EQbyirdjuH1oLpLw18GuUyh4VxDdiBioTfiFEynB9y1aTczzdUvxU",
  "key24": "Hm2fdX3GP38PTxApr25KTcPQ9Te3VhZBNsaivkMwvJKif9xBZjkyqGxVh4ZecQsh6f1xcCfxvQx5utuTJud57zg",
  "key25": "5PGTTMDFKmRCWL2zA2Uors4TgAhrRS3qXr1NrMGCYjPor9cN647izxsDTwzocseetiXuhmHphPVTeZhA78H6SyKX",
  "key26": "4to6YGrJT9ikZ4FgHECBSrhD6PKsvDLAtTWY1iSsTnrSrHXvmqiw3Fde4kh2N9VEkuQNUtAffsTGpTX8YBnabvqz",
  "key27": "4eNAYefghq3zb1gUACfN1TKoWWvuDAYhW4iYUQ9fcRou4QLFQtNqbv58ni4uvazV8UCR2gd8gWC3Xt3Ck6r7hWgV",
  "key28": "4rXaZPPgjkyPkrR9RHigiJR7Qd3opNZ5MuRC3Tq9oPAJAW944AGMVqyWtaqJzGx7qxHvRQZ29rt6y4HPARJGMBN1",
  "key29": "5Gwj2aep8Q5wUJ4LfL6hEg98rYNfNsWSZ4rawctNG37bHG9Pdcxt2J9g1QoqmiDfmk6JyoDpBxC8JhpVkWHofByu",
  "key30": "41otF9wEX6wr2GotteFHGQWvd6kw2UT5ihR2DxbWNHyPFzxd19YdTN39BdfQK1m5DrrmXazSPH5WE2mLpLr7LE2a",
  "key31": "3xsRYdFcAUSqKYRgb5uSoFPPwsDozAY89HQ9JeMYWo2egbAUa4GFmknbjn8XncJ9amu1MUZfBh6gNSeSgrkTTyKU",
  "key32": "63H1qZnE3zrutDrKqmsJdUVDJRfniPDvDKdw4rvHgxDchzTcwFUjTEPdSkVEmQdUAZa7qDgydrZGfavBYiwUgJk2",
  "key33": "5gQoC3DwJc4LvDWGAXUKaSzpB84ibB3vfngHo9VFZRpwt59KJpHsoNDEvD5g4zVLJjPbpmVBAWPSwdWpXnH4uVn1",
  "key34": "3dBjd3rKPvcoZbYmKqPJ7BYLA3NLE7LQxU2tpY3oaQNzaqbDd3a8smKEv47d1JQe1rZytJbzb2iGU8eeXmaRPAsZ",
  "key35": "2f9M9KonduazAmLRSLVg9omembCrY1y932mHeHVCfV6pFGSqpYjhvKYYEnsNWmULGbt5HAB6GvSks29PS7BbwzEJ",
  "key36": "2qiBgZLZRv7k3krbwzWG7VKiY56rudPAY4jksqKUscMNSSw26Qw1PqTed12CNGc9LxJdvNZRb9eANZg6qTtgNPnZ"
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
