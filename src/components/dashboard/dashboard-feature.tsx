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
    "4QgwNRaNRgJ1UDbu8Z7Ean3w34JMpGVEDLcMA2deZS8X8TSmWD58CZPZ29M5sbsEzWVR916XcDNBqhTkfveFUifE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1t5KF3yHwkzceDV9rDJkbcyo6f9HighSHPnT6xHfsy2sp6QwTivGoWQRBFD2hmwuzCNnz36GHG4TkCM6RghEkg",
  "key1": "38tN6aUGNxWUHTHY4bUiwRH5bAofcyBAdJC7Wk1ENRGc5azj2SR3gkvUtR42yqxjUWqVXWkQDUmLhzHgtMp3DMga",
  "key2": "so8tKHxh9dMuZdg6qsjQWCQ6sUnf6x4gXBVv3gTqdBsriZS81E5Bzh88qcvTG4zYMURF1gEdHs8biP6uJT5nETZ",
  "key3": "5LwTd81DEfKQhWN9svfS6VMexgXRsX8ZYHRwUxYmrHrfC8b3UhotuYQQqAYTip9qTU2B4SGg2iQoebEAsBY3n8MV",
  "key4": "4GwZa3UNjCbx4YmZRNmEqk92CiQKdYLi9QJ1i2UtxFkAzxNWD6XLdixy1GAX3zzdSGMyCMiBAGNCWaiYwhu5VsUq",
  "key5": "5qYEuEhxrfToLeMv8KopVNYopG3vhtSd9VRMZV7zTscUvVi6xGxRbpsd1pcYQLfiHTVGo71uJ2uAcEXCZiF97YkQ",
  "key6": "4CydYFPuW18JUjSX7GgPrZ6V266mLqmWJEQ8yC83Ut3Cx5H1ia5yu1gfant6wrURbdghhuB5R4TSFSmv3KYJNXFW",
  "key7": "3xtcdG3f5e9qfVwYqEBYuqCVuLp5FFcGn756Rbpfq3RXNGc7Sw4jW3ZG6ctdajZqxqqe9JJBs35k81hQXiuogxhX",
  "key8": "2PuaQVx7YyNMZbrBPWwL9AS7eiHMXjaVGVfyY5QSCeiMftvjfVAi4mXgJH9Wi5msrromVy4jt7KjvcHgguaKFLBn",
  "key9": "qX4NruLFsB1pNUfkr3iAzA2qvAEbs16Q57gxE1uKf1ZL5e2kEJyUFbv99Vit4N3wrk97xpz26PXwuMTcunVPpCa",
  "key10": "xeqcdYbbS4Mc4dYGx2EsgVsAAjnuG57By7iLGukRLpNyzmozR15du7HG2ceetn9yiF88M88q3VgkZa1fW2P6oN7",
  "key11": "5esM3fh4sCexzGft46zbe7QRTVo8KxN7urJjpSXwGSEwW5CkRq6fCx5oPsvksaqXu8te4q4Cyk3wKHqPcTCRJ7qs",
  "key12": "4i9D9HcoiiaYs16YZHtninktnJKdQYiNiXHJFPmHZYiGSwhXLXFBSPgQza1vnPMecGB3zv4oZLWfg67cTjZjjChA",
  "key13": "21u6PkgNBcRtPfZiXBX6mEgFbL2Bxf7bLPxnH5PemsTxDJBXE9JyjxcuuHmhp17Zuyi7Sive73p881GJn4VJ4CyW",
  "key14": "8TrxFWULKRv7S2wFsngAFVNMTzYD9q77CxmEkNafypNGPR297Q55gB61vmbKymdrRb5p6kDZ6b6HTfBtgQdtzSs",
  "key15": "Lz54z3z7ouzQJT6yRwfn5EMdKWWGTT7Y4665chAmNogfYkW3YdKPnCqLRvUztH14zUyon7BZbPWYFoqobsVJc7w",
  "key16": "CkYQ8Z8n28BiaM33dvcepcH1tUF9PvgZqDTfppd8WgHwEazP2s13JGF7txJydoTLztVQY4nrh4YKWNWm4UbKd7Z",
  "key17": "5pe6HZeQgE2hfc47HCkdUfU861emaTo6eApsCkYECGqgTwLiAAZmUigSrtdHUy6h1apVyiVE3DojoMjg7dATCht9",
  "key18": "2DuxWYe6VBALaGLGVxYZAsC8EZic5K3YeLFdeDYK8c2YidJGsuQ9Nw1b7ubHuaHXCFtBqufgTnQuJrVQd6Tkv1qs",
  "key19": "34QDgFLDEqpV7G8f73NFH77uxa8aUc9qnhxBf9hoCkAPkAsKNbLJLnw9as1NGM7GHivs3NbNtz1C8wR856A2aEcy",
  "key20": "4XH6qWbUSiRjYapsd5VSyLijLxybRUYkQkj4owxySbCYAsNsJ4CKMFKv1Hbg31Ek3rRnYx43ZUEuufNg7bv9Ka6G",
  "key21": "5rkdReyrobQTvQbxxkqo2QRQz6PGbFpTpQ5cXR3SKSJYYBByBYH1nHGkLbfGCHDg5jJHj7WY4aJ8aKwiZqjbDZyF",
  "key22": "2zUpxGj21bqmRWXBQobjf9QuFX6Ev9feMFAQEgNBoFbKukiMJvQ7B2UguAfzk3YA3wb9Sf6PHhmEfWbxmNogEeZZ",
  "key23": "4jPdzWf7tUXnQHMv15xuLovZ6zMevfQf7JbdAdP6ck6x7ZXEH5KpzCX9wsa8E5n1p2HFN1VeiuBqdAV6UF1kAeUr",
  "key24": "42UkmhD1VbDpy69jKeByL2fwgpAGhWbySYmfnWhLF9nLqM4JKVxaR3fkK3ALbFzYbAmJsn8cjRcEK1TtZhLeAJCE",
  "key25": "622eJSNmRBqN6scg7khrGwmnB4ACTVvwLxJ2iaimzg9Q9F2EeecW56JwHcab1BQXGx51ziWB2jGNFtWf7ytApsCy",
  "key26": "2HtikDiAxjPxyp6VwcwzhouCUPwh5QUnLt7yXYKfq53h3DMzyELYbeMRKqnFVnoYzoj5JoRCB85H3TQ2GgsPFxbk",
  "key27": "28sfVqmG4AFQsFhDFgBdjvWk1E1AHhPkPTC7uViTZaot3sFWHWsMgwqtM6iXfhMSmpa1TdqzaCMvku5CyP5o9pHZ",
  "key28": "2yHRkVSPe9WEpAQs5iL2vAUai4gg8MhYfeLfSh5w1gMquRxfki2xnkWUnPbXi6FbVsZiLTpkCwXshmiFwDxn64eZ",
  "key29": "4mUaDMebyLXsBgUy8v5eiihTxTZtjuU8jAMg3WfLkc5WPhReH4K2YzGPsFikzSvAKrWKhHVa7xDkbcgfgan9mSnv",
  "key30": "3iC1skJ5hsLnMzsLebq5d3SG1n5U2wqScdv7YqD6yUTnf9JhjijAHKfzjTKVEn7Nv5LkNZ3vXi9a2NJrC8tFn1WL",
  "key31": "4cewXeyDTv1GKwzv6Sf99KpDk9DRLeCuZ2EA9NM4shxbJxxML8suwQkhjGmgkCeYQHa7fYLjrw6fAPrhRgCb6FVe",
  "key32": "5t9fKt33nnn3EviT4ZidVxYpp9zohmSnpUHpDF2mcGjEBEdYnHjcNWphCjo3RcHZottriC2XHhcrx9YUZqkksyDx",
  "key33": "36niGLv5u9PFtM2gwkz8mYyq35JYfft3GyUrQSbWUdxpcqaS2vvh2vW3TevFJRERMKbmMS36B84Q2JzuKqkS6yFQ",
  "key34": "43AVVK5FzaAYewAMyrwmbTuW2CqJfbrBsKgV5PjejSVfBhzAEzpc4s15ZhrL4Yaq1UVFnjKtwce1v7uRVB2erG2V",
  "key35": "4ECV3xgYSakbRNKMLTr9gA3ZFYG84ZLih4m6Xd4Pi8Fartz7yPo5RjRi7QfZMEReQb16o2Mj97jM33Jxhj1NuSx3"
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
