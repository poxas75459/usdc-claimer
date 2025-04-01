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
    "2bXvMd1Dk2uV4pNFRgA8TmCBv29WDLT3FqcPZ1g7Z2rPDS6UfrZDqEywbQNGjcHAej1D9cbZ1KJ8tJPhh6ZuNpVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298v5D4Cb9D3ovLfVxmaqc9fVJt79kvyEFq3gEGLRh9gyy46yazo8bFrqaovX6NY9DCNB4MMRwD55L7x7daf6AoN",
  "key1": "2CWq5QmUUvUsE9KMh7ruVugvxokkCi2ufXRkTYzuqeFuQE7RcGSA3jV39qvE9jdm9XvkB8aMkJJhJE2ydeo98AaF",
  "key2": "rvRBasqqYAXdxsEdLTxxrLucFFvSD926rg3ejdRWAuXMrBPUi615uBobLhpBuX3KpFtAYouG2cc6Z7dKyBtYaP1",
  "key3": "2ztxiNbYiV4NxNhnMdT1UiiUzLjQmPWqfF4AgwSszwEzh2goGXLvXtn8Ph5dUKJ5P1CZzfkgRbnQUN93y9pigb9B",
  "key4": "3eaPQQ57op8zSN23BES81xGyxL2J5mCxPY3pEG6xqaSCTXrdBiQzGWVytBbozvBn2F9tcZe4y8QeJeNes4cXiQ48",
  "key5": "2QpFXynvZZANN6ph3JWGKpytn9oCW4zoHTdLE6VsdsPYy4aoApEtSqJEHwdN4gKVG2UTSWQs9qFtiLu8AqvqRnB4",
  "key6": "4aur8SA6m2SqWFuoXEPSZKyCfbBxWA5khgbRViz268HgrL18PH3m27iYiP2dpWcQGmKrR9CAeMR98zqtK6NWDtNq",
  "key7": "5dBVuznPwrsydnzxEm2WqRbXwWqvUU9x7Bm2gjE8sVzWk9pt6Ys2SExardZbwsXS8ZAFXCeaxf78JSxECHe8QJ6C",
  "key8": "55seg15ZGZJWKzPZaSMLCn2fNXQ7vjLdThF1HUSkyYFNDdWNaB3n94kZjYxeTQL8G87tbigpG4xzoWu1KehqDsr8",
  "key9": "4CuRsTJHab4navR5Ba41kNjqgdMsQ4NTqCk93DrqTDwLoQ8HUiFjzKZ6iahvcUKxZXNe6dS4UsXPyxrnfxwLkA57",
  "key10": "49nqu1GMpDVC8aBZEQ4MZNizMpaJV21UrZ2bUePQRceNNEnT2MwzTPRytdacG69UyJ3WFYbVSjAwwBmAZBfLbBkh",
  "key11": "5zYJTmPt9C4tQPFqHBnypitxaa1ShReVwaCcNK6ToCxTpgNoH8i9eat8cX3tszsRYJywqmJ3Hkmyxrr8ZoFpHseM",
  "key12": "ES7oEEvgxmKMdujTYJu3N3iRgrpkUeKvKfhYrZwt8LDqyEJ88vbZDyvSbv9RRkWmNAPfw12CFNxUW2JZW62shGE",
  "key13": "46QwRQ8dQp2dxzRU1HU6Akrck6cs3i2VLESGXwcZwz5KDoWsBmEG3gQkqZDpi86ePpsBfJeNgG2TuTeFpmRh1QF2",
  "key14": "fxz6yeTXgEFhh9StRpy365PhTdx6TfABC74rezTYt8avjTeYnd1aTZWnYLA7FBLPHPxE5iWRStSCsvy77AbRjqd",
  "key15": "3vN2RREh1PPBAiamPTs5arSQVfCyucc8EmZUXqx6LbgDfv3dy517p2vc1T1nGfPYYXGCGJoaLpGVxkRAqcKDwgBR",
  "key16": "PZ6RmYsDFc8ffUNNiS44uAhu11zuNSgkppxfNqjNpamiZCn2RtdQbL81qZXbTZmSPotKz4EyjBytSvqbeuctb7K",
  "key17": "3vC5LKAZywk6YTHxwaN5CbuuT1ryJt3BcUCAvBMu7psbEKJWQYvNNNrRf8wuLVubaW7QkBfXUzeiZkdnW5hAxm8g",
  "key18": "57yx183VbJXcXbhM8GUY2RTR4VYqf1WePPvR8tXJU6NWBWQsfKz956vt2qYBsgHoXrEqKPDnmxjCTNuh9pyogeVY",
  "key19": "i3rWeZnUkX5z2QdNiqwTRnDHPSPtKoxd7JqfogHmCox7enMtueytzLcUjWkdM2KjtiiMDpxdKZC6hjjCWMFUqP6",
  "key20": "37RvEEQRzfgkRmRYq8wgy1fN9yxU6URXixu1bpxQvN7BqyPvF5gtCZ2wrdDyAzWotbAtPmFTmrJGtabUDxLXRQnB",
  "key21": "3Q8G3s7R4AB7a3vZ1xQGpSVu3rZ9ffyUoenbG9MtgMZL5db17RJAW4gVNrUhVhjXw87PTRrFusZnZLt86ae4fH2H",
  "key22": "2zJDfy2JCiSL5XrWmAYrTMDei6ANgraQzDvY6xnUtnNzq9wepRziAXKixYRQV7drnps9EWiip24JE8ZXE7Ayz9GD",
  "key23": "4P77SK66oU8B8N1niZGFD9g85NL4Mt2ckvgdh2HDaHB9kpavhZAJ1fbRS7DiHomASJb8GczpYo5DmdTVRfHGenfH",
  "key24": "5k7qEKQg52qFYHNgBCCDyBiKyKqYw1dqVH3Wt74PKRMRb6aEepbb6NVycH9z9HWheZWickkopeoo87inhNJE8vH6",
  "key25": "3EoR7Y1wqtg2P5iFUfoyj4SAk7ByY2esoiQYFDECFzkp7Euh1QCMkWtytqNsF7BftBNb7YTRU1wN2eSxdTiB6iWm",
  "key26": "5sdUFquDEEEgyrLcyME75RCwRD85ihrdzujRELXcPMQ9yqrUJu6p4WuPENKFujisLY5pZna9WrbissHaSKHddz6F",
  "key27": "4ASaqVYy8DnjmXyba9zMG7Me5pvTxtE41edqXMtMe3cvjmPtkP73e9MBy4o5rtzjwCsgnkzPfBXdDYqMXNQ3KZEm",
  "key28": "4QXcBMSPbcmVBidWxjDAXQcu2aGnCp8Kf6s7iuQ95WgArBcKVNBwfJLbmDS3voNynA2cmU5cR41v3GA61FaN8X1V",
  "key29": "4tQNbSf79X9M6VR4BcLD1rKKTnxYd999Gct97zeXPWcAR49LGxjE5ESgXbVUUTibq89yZnZC9S674T67Jjzv2SVb",
  "key30": "ZMwrN5C38BvvAfzNCmE5pEsoZkXN74PUcfSXc42ukvfsA6KuSRusUhnAdk7F7Ajvb8LFF3fDmfiJ6bxnHVxi8bt",
  "key31": "2KMJjwQztc9164a3e5zdRRPnjfQKUoVqGhCrtXdf52eeoPwH4xdd55NfD5qFosBroaupps6GPMXFtZWkU5cNYEpt",
  "key32": "3RswbDcvvFt7jodKftaU1cG4Ps1LzUPsvRJzT3rYuwj3uqLRhmrnpjUpfNsG3vbhQQHERPbV12vAwK1ZLqex98MN",
  "key33": "2FY4wtRJXHX3gyGKwN22XdHsMDKv9ZyhTxr8XN7QgjSf4SuQ5ygJCtx5t3PtdXMrqyVSJxEZfCH1C8f63hkFD9b8",
  "key34": "2Ltbg2Sj53TAhAmbe58S54hU7uUsYLWPo5e3rCzT2NdG44rQzFqj2iYuNsMfjbYxbRHsmzW8WUsNSYzK8ULog322",
  "key35": "smz4dvspzu4C9rvhx4JqVsE8D4q7gfksduxgFGCbx9BJMndv5mpwU5ohBdqFNvWZcUtrvanmqCESvny6BFJdHUq",
  "key36": "3jo8VZuHoM9qTUp4F8vwGWjpFMHFBDiwQECcZEJUE1Adxyd8knUdjnArS2HzXv4ar3tV1q3m6HKAG96vKeWfJYTV",
  "key37": "2yBzvrQqjrNiy8A7QqXvKq6Vkj4wGmjTBuuTtcRx6U7KWwM6AfaQQri7BmppBmx5kjX8JDGQvEoSTU6JCLN5EFD7",
  "key38": "SiWXMKiHciE1kAPXYYYMpnfKDxxwboZmYRNkX2fQhJ65VqR5MWukf7QU7L6HqWnTjoMJkbM8pJwGfM5tJPgTqbu"
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
