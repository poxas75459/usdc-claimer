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
    "3iFrAkHscHA9cM3R7fTX6dn1opXDaqWUcSABorcHX6T7ATfdTDpqkYoEs2k1XoXNnoeoZ5XyVCGatNLEoW8RfZgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZWCyUaWCc8H9tq146FFHoJwQXG63kVmzjH4w46jypNuRSPNGvVfVZVpF9xZ8KXM4FoTMKTXj3cXoxRfEN1p1iE",
  "key1": "5Yrsx56pLduHnxCg4vQ8dMHFwr43EtPKB1Rp8ymwntz839w8BCCXTmQreWSReQMGzwEZexKd88ztoDkt2mdkx5zE",
  "key2": "43kJZL2BynC53BaBHnUtM4xGfUCRYBHyjuijYNAjTs2Y9KS4Q8tRrmdX31eYEPP5kAmuYgoHT4NPdrNCM8hcmPc8",
  "key3": "2uQK6PRXaHbJKXczCbeHoSef52Yz3B5SHeD7YhsAc2BAWmS5BKDnpTf3RZXBShKnodriigYpTNfdKVabTfYDWnNP",
  "key4": "57nFdFGVwC2ybYGsboEbZaFyT366RhWsVHovZ73nstUJYQYj4JTASkizghp6GXFBAKRPpmmRgW4ibTJUur4aL7bS",
  "key5": "5sUpJVV57F5VdHqgseQMUzHHwYKhn3vtfzS13ZMkDc9adR91TNzcsTEFg2K5huNvWZRrdmaCnE9nrB8oStuYad9P",
  "key6": "wTYiRAz517xT29nZ9nyUvyikvxjCw8K6uzetnum47VD5w1PrcEFmmJiQSoZN27YKvqY5d1ztbRu6xMFGwWDUU2r",
  "key7": "2SLztbLHA4kP6ctByuw48bukAGdNyJB6vHhh827PJFmj39Dz4U3cYCRizMgRHG5j2ZfMGpu8MZsN3ZjqSXNje3qL",
  "key8": "2Guyt5K44qxu4XiZz3Vb86nn5r5F4PqmtyuF8bNFybvWu4uDbi3Ndf59m8v8Zx1wRsb3NxsLqb23Go45hw1WJSNE",
  "key9": "Kv4mT4Xoh1UJW6WagTp3TcJaBS8wQvz6D7Am9HD84WyMqdDGbFQih78RBTtuJridTxGoFTFDYJDi5HW5ccVhfkv",
  "key10": "4BUazyKmp3jqrhcAkrNuAWHxsWmqAo4p1PZEVwuEEp2QBwDbPvL5kXRHNn52cx6naPZb4b6LBXaAAHeCjboHzvGK",
  "key11": "ZCKihYZt5XttbKhHD7G6u4K6S9N8zY8Srch2xr2pfzopupsjTzP3kfeM55Hg3T938GD1pNFHPCT6DAGKi4m8z58",
  "key12": "5phx2nGxLC4LzrB9jP5poCpAfYvazpZothbm86Tc1fd78dRPwT3aGCVwxehKsReKgBfkejSHSY74VcQcinezJe42",
  "key13": "5sE5toQXGNKZqywJi3PLayBrG22xi5ysYXbaqyJqTKj1KcFDX8wy2kqk3tRKamzdiqxgXLMPy6LNPtK4awEPfwdM",
  "key14": "JrhgpKRWRZZFjPkwYE2waEhptjhPASoudxJm8NNcNe86mGi1HdA3AthyJf8ULW5zk2G8sx8hUF3bn8LUqE6GrqD",
  "key15": "4ugfK3c4ZHVoBaH6jnKCG44hpacGKCqvb44NuC5u2gyk7P4XyiaLtde294drJPNAymxYh27Y7pYNUcmXsSC6FFGM",
  "key16": "4u41nCFZLiBCA16c7YYkGCqqFihnNGdt3Gx6iccUxFDkhVzagDy8BvmJZab6gCLqQHcCNpWTcozcZugsLPHAoBTJ",
  "key17": "4NpNCJtPdEuv9kBBpsHwTxy7FY9GwMtnNBiRWNFE6cQcRkYjYRWNuPrB9fNHs9M6SdmXF5Mk8ZuQTbESw26HChBJ",
  "key18": "2D7Fcb13JpRSkGFjBCzr6LhUNweUZDD8cBdENnXjzRfKRfwyUrF1DuncH6vVny9VHpV8Fges7Pr2H1YJpu1Dd8e",
  "key19": "2HUSWdCF5Gc8vJ3gmH3Md4WLavmzNLp3fpy96jmWX7b2ULixrsTiR86v8eLXaRvFEqx3ynKbkjqjcwGJ215cvui5",
  "key20": "4XLgUntXtnjJJpUmwmDcVVdMqscPuyEWZUqo6zYa5QoEaekLVtAGXiCifwqBAvA4hRYvWP7BbDkwkJbgvzz6UF1L",
  "key21": "5smVZoZtjuMrk6GH8gFZHa9AXXUqA1ZsxuVL4rpirDAbhGYSeTfCYxC95Y5EbaokddapEjujiEhUS76ZdqPnkPvK",
  "key22": "64nPWtnhXQVVE3jnpbBMDwup5S8jN8sz5udV4Ca7EjF6zfGLWUf3mPoyKPgtUycbFz21M1q8VvdX5v8DVxzNhJ22",
  "key23": "2trvRJPxKjrR7vLnXEHxwSxLqTQWFjAzmdMa6MXW2i87NHwBpUXGp7xsdg5v3dxPdyL2Mp8bZQgmaGPaCuvnPpSr",
  "key24": "2VFKdkMHePffBKeqzjjmHt1MqFrnc7G6cNVv7dH3Dh6vH8pwZALcyWbCW5XC1xZhXA2wdjm47W2SfFFNLW6JZ8Je",
  "key25": "2QaMYigorcSSaZMnCMAr99Q6PJ51qazEpBjumypBqKd5VJVB7TQMki2yo6VBGWp216aqC9WCUqtSKn52AE8aw9o3",
  "key26": "Htp3W5DofSDZjQ1DeHRmqWpZyqJAYV8YWqWt86kvbUUnFZBvDTDrzwVdAXrebuqB58GKBAoEjtfs4XJ1wMF2tnE",
  "key27": "3Z2b58whmNeRUgZkZVUjfrBqpu9UXyJSb33VsDMSBGdNYLRiGGzd5zWAZBUdSz11Jgg7rFeDo9TJFkiWLw2pDwVG",
  "key28": "4SefBgT5J3XZ9excSgNVpm8pywd3vzAg2uqTKBMKWqrdZFyG87hhRApD3ZawTee2FruxmwRy7ucAxGsCXdkdxoaw",
  "key29": "4D5HXns1qR4WkfLqYK2sG24wWJ9XwtSbaMcZbo4Vx9iaJ3XQBaMbaz6fJGprVif1rjr2uN7ovnShZNHGw7e2VY8r",
  "key30": "4Dr1ggYjnpFUrcQL3XiGhXAX7namvHM9MdveuitgLpAU9dWoYjvJVSxpBgg5C6LWLHY9EeNCa5CF5T4wKKaXxSv6"
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
