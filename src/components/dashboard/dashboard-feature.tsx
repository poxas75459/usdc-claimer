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
    "4mNeyzfmgbLfmtKr7yCmXUa3ggcoQepekXLa1b9dEbqYifGFhc3UuA8QBb8JXjYPjH1jkb1v1FNwLBAKAp6Zdc3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZDL53cXmQLPgvbCDhNt3py8fkYZ71mPcyveDFCvUfLEyHuN2ZGF5upWvXUhrXFzC5TrKrGCH2pWZoWfN19tKvY",
  "key1": "2PNHQ22KgRmLiQLeURoEnRQqxPdvE9xKo9VZFYYnX5rwesQTjS6aD8wzDiY2MZs4uAQfDEDGg5YqHs2qaQePskGU",
  "key2": "kdnmCnwBrMF6DUyA7xT3iDMbDHFiEeRaRYREhxqJwNFbrDBffTRMhCDjEjnE3BznUY5MsHbyJAYfGB6G2xD56L6",
  "key3": "5voHGjBjBPshpUee4TQGjuaMVUFLnTQpbsyWCd19CHE5Rpdsq9ysXPJtBHwa4aLLAGgHtLeVYXKKGuyxyZaeNWMK",
  "key4": "521xGTfTMabSpNHvoMEzEKQVDTXPbna1bA2ShKduEJ2gZFHuwZ5y76FL6rFLwadApg7wsFssCavBTLExvPBdXnA7",
  "key5": "d3cunSEAUaeE6aFvtXpsFXDKyj2JLdAohVj2LsPmC3kv2rNXi7uKf9cozNP8nW4Tw8Rw2oo5fJQ3HFuXEerejZK",
  "key6": "3h6s81Aae1o3eDpUHtc8Dvg7azLGftFBNTyczA7KBifjnCEujChnTUK4S5dfwqX2n8GnPuFQjGdtPR4LWh6qbc8C",
  "key7": "3NA3yuZB6ZZoxpoaNyJuufBw35jXWNLwnJ15nuAjKN7BPdv5JY9HMZsovLDWShJHxqVZfJFKe3RLU4g87q27hZdX",
  "key8": "36qo8Mosg7hMCSR3ys1ujyR1gTP3x1XGa1bfAQ3N5R8PpJAxT5YjwBujz4GdMu4WGaUJHc7WNZrwsh9TEUbEgMyc",
  "key9": "3FHrigYopuLdrn7cQEKBbvwnF6gompvQJCmbH8ztpvmLCVKW5BAtXHD6Po9i3hTJLExrRGgdRt1Nw6Wn4x4rTaXr",
  "key10": "3SivnGtn1EJ7Ka3fTPCX1FMFUPViba32BSvTbwH5T9UJSNZRf3q7iYtb8Wax3brUzinRaGrWfNpBLRBG3SuZ6nKx",
  "key11": "4piddho4396meeQNGJNA1WKqQ3DDFD9wj3M5Mxcf8BftRePpLbtsbyjMRkQktkCd5qK1oLs8yasPNLUNEa26EBv4",
  "key12": "HncG55jRiZKMeaKJVXfxKE2WPUhYr314kJNGB9yRwQVzHxPCJnNg1V9pDzoirczmGwhtDsAUypcx1FsxKWjv7Z9",
  "key13": "2VfGLm3nXzQFWuaeVxq3aJ3Mr3g6pNhHnZYekANKxwc9v6t6F5tgqRS9kBf7AnEj81U9y5FfntQiyimgkD71Ut7F",
  "key14": "43snzHWTVrh7MAURXvA7zT5AZLH3RLWK4yAQcArNsLHmP6FcrQAZYsNtmCxCtLnXx61JQ5vb6FoSw3WCWhCw4jmw",
  "key15": "3NV1na7pv7SxM88LPsmiMQhJ76ppx7h27VkSJdUwTPeNGddnjUyJyJXoAK4qyYWrERPyRy733yxyzXGVmu2QqVKq",
  "key16": "X1dWGG4ERMqT26zoGd4UsrrS4uvLKk3RCwLdsebJBjAbp8YnQk5ScfmsCs3oiNf5sidNZAgM1qFLudjWqstZ8JE",
  "key17": "3TfJfY1YvvKLNsQS7rvcgp6GwUJx6tvroGeRQSyNL521SKYZToF43JNmkrQwGvYd9wrzavmfyA3y8bKgu7DkwxRy",
  "key18": "5vYUHKcLVYdyAUQjbTrHYX4eAfzLhjasLixxxCrAACh1E8TfZHYtgKspZQh6uANBBy7t5Dv71ksWDNru12MAZ2gc",
  "key19": "4Skq4SEPzXS7XANT9msRFViBDGT4jmDtUK4n7sRpeApRooW6sVQNkcLMBJBn9ojHJ3MVPNCx8ntVeFRTiDdUQBPd",
  "key20": "5YSN6XRcwmrENG5nKspz9RgRiRccCk71URp5C3QQuLs9Zj8da6omPd3v1LU4oeAnfYQJYaLo1ZPoLc9WzeTbmDFf",
  "key21": "3UZPjpu7p4w2e4WZF47YHB8cZjbjNP6Z9d7n6GPuPnd6PwNh543auJyHD4FWNDjpSA3m672xt3KCMMWuY9dggC88",
  "key22": "4NGDSTrYoq3sEh6SyKEyBAohZJraP2Z84BpYJQsgZARBMyQs5as79MhyeFv93C3hRcqMZvECjG9pJXk4YfGeVTKi",
  "key23": "b6BS3BuAwriS13R6HL2YRpFvqa17XLouBKbS98qV3AEaU93YvpnRYSyANpYU9LpWUxwYrySaXikL4WPfsBkja2k",
  "key24": "81zhyfvvVKiySxxynVmuRpWqt7hhypAu2wzRA1gz6TD88a851wXtWifUqs1rz9gbucFc8XhoFDpF7hjWbWvaAoa",
  "key25": "2Jtb1fdhGA2eNup93ntmmqxg7jwH7iWe5tJ7oUfniR7ryMaucm6T48qAgtYR4Pt8feN6rbUEmX7uBBijJ81QwViw",
  "key26": "4bN7a3Hm5vt5CY7vFphTH25dUDYTd8kNqs35VQXPwor5Vg9niYoy2hZEJhgy5pS6HfZuXfTZiRTe3UvX92PPZ6xF",
  "key27": "544ksW7RdtfH5sbqmn6rEod2fx6vpLjmg59NBrC3NtCwPRq2NtXTsCuWXRASXXGmUcv2XLfLJ2KgBbGWHcVQvn2b",
  "key28": "551Avz4KxoDHt2Zc3foiSNZHffkh99toiRjZPq6Bp9cqhnomJyhTBAF7c27wGWyqBCtnXcPiEGufZKQQD1sY9trP",
  "key29": "47aoBTfSN3PDf53RG4LPFSbmX6riMfSE3CjovQGY1HuubzRfumqfvvu3Qbn8rBrVEoqdTUvcJEEwjcowHE8Jd7c3",
  "key30": "5MXchZP3z3bRvD2Snvv16BKKnb1owV2Vx5KcKjmmdysphVKGEk4FAFTAKmt8XzcnrNikkHwCc9AgpdZRVbnY9sbp",
  "key31": "32M3RhLfzhjFiX98bLDohCMy2HyUf6ddgfnQsH7w3pFtEprZgg4Rd7UYsfoZdnJ2HsMZEy8sC5sUkMcnLPRSmNtk",
  "key32": "L9gBj898BzmRR8qAwhu7B1UajMg9vn9QfcDDcJZ2JnHmJ4qSjcJD7sJHP6YYC7Cew4eeRa7vU7SM1EKUi3GB8Hq",
  "key33": "5LSqPNQE3xSZMcdNJ9q8PThaWZxLFk3cphAjoVzYfXLYp9W6PYHfq5cL6yCRNABaEGtnqsfPqwqA5VnAVFkAM3vK",
  "key34": "nTc5yKRiRsNB5unEPmeZhzUpdeLARHMqfUmzTdHXVX4fiAeNGeF6VtauKKq8nPzRG7kGf47DdA3iR8ACDqYCKRU",
  "key35": "4mFTfuU2QbP9T8AcPpWg7qcNEpme3oed54LTzSFPZKrr348U3z7xekBQ9brCjX8Askikp87T8cX8oNse9XjcJBqr"
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
