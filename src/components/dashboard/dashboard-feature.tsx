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
    "vHsQt6J2bwvq3wnyamQbDniwwAxYsMDJqab6PQVNXotXYiSN3JgAAiJc4PJZbYBdisVP7ui23exS3zMbJm9suTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LSgYtVxa9PQU3ExhjjLAMYuNKsyJDkkB5rbrPd6LvBckcC6pMrt6q9vfgvB2LBmnMYzywBXCL9RjJuP5KWf9MJC",
  "key1": "2cnhLaDDa6kdSd8hk7enPy2btdA6C37iA1mjcLQr2DaSxpffVGmDgdHYkHd1LjZVociLhNejqHApEnUZFwaDU3Nz",
  "key2": "2s13jBGJHMAjTdnTNTXe87oZNpE9qMH9X8FXERD4H4aTLcNKiNa14qbDMBVsfjkspxRtY3V7uRwdhxXTGq6cfxGF",
  "key3": "vtbrQ82DPdP7tjQPwu4skfnDESG24KWg5fNoWTuBe9zvbasVCgwJJ9VQwbLNPBUJFjx6Yq1tjeFb58j9yhNFGsd",
  "key4": "4DM5fCWwGZJLds22cwR1TWUfGxBVFVtPR1xobqtKKBZ3YMcPuofSHwYEgodKna6bTxrxqgaYQy1SpVEMVHhQRXa5",
  "key5": "58Bg2ernkE31SNGqYiMo5jCQqRHodtdQZQ86ATyMW6JSTKqoZ3zzee1C8woP29u6G2xRi3sTtBz2HWTgPwn3GvHj",
  "key6": "mwbPS8Jh2ECEkDd5j89XrpXZw3VXb99LJKfw2WxCFnRtfxKouiYCwrD8tPPvoHDEBWvL7a8AJhAj5RUf5uYQdhy",
  "key7": "bsPdBBWFvfZWM9oCCHJ5BEVprTzeK3JMBZAEfhWvq7rSrVB9LWBY7LsShBx1X2N2JhnzqoFZs5HfFgQ6BTzw8FK",
  "key8": "67HQXWtExWbG6oRMXtMp4ZJsrvQ6m59dfqcVKcdQxMKNgWeNZoYJ9LGFP8n1HQJ2Tq3m6iURS41E6EENhEEY3Y27",
  "key9": "op6L6NwvXcx8tcHPUHQTayqxPk7aUNXGizwoiocyz53XRLP6aKA39s7W2YJvVWbek7EK9gQ7p6VshpuH1EheHiP",
  "key10": "5RTWr33GB2Z3pvwp2UKpKqxq2RnGHUiBEJop5UvdWZmKo6MeyunquExTChZqsh6XYLhHYsFRc8KKdQrqXq3gztBb",
  "key11": "5LSefTLWAvXNYtnbncUDsnroq6B4H6zrZ6XWbZv7B6iLvA2pQdKi2QLWJD7amQFzbmKsZwvm8K583TkA7VtfxwDf",
  "key12": "28LzVZVDEeS6VQamD3Daj62RwQv77TLkXAxqVvPPcdLcpZhy5fmzddLbSTZ5ZifpdLEw3QQehBgdryKrikW3eGVo",
  "key13": "WKCdhNxDZmXanxocdyFTj4kUeVAF2Nec6wsVZDd4VgUVLEUrWdwJznKDEycP82jVH4pb4LCiES1Dw6xXo5patNG",
  "key14": "5vAxJBW2SEJhbk9rTnQuhUCpJExQv2ctA3GvjKXqQvLH18spLVVKppBA5bkqDvrHCSYzB7fJ7EffFxZpxErCbgNK",
  "key15": "4FjAYMTvU12RgqXEZrkdggiKcemKDbaBZmruVRLb8wZmDTBrnKs1g6eAECD9MYCvc9r6yKaxVC4RhZZvZEdLnRJv",
  "key16": "4P377hnQY1VW1TmnsQ1VHQe5kG2349CrEsMkQEzM4qxZ8p34tTFtf8YKYgvvi5kRHwjVik1g6cFgLFuuiyRPXQmZ",
  "key17": "qgj4do6nxPoPcnrkTgYNnJDVLFFXPsxgBbvCqCpecZsARYvgg6oAokJbviFV9eG9VWbzhCxeyMs71NrcGGGoF6L",
  "key18": "2ECWwu84C5EJY7fDn5b6MjXS9fDjX9sgUjULi8aj1SHMWtBXQzGzrchPo1AT2P8gv4UV3LrBX7AnJwFzUT26V72U",
  "key19": "63j2NT9LQjLp1rK4JNcKaVCivGwwanoEVHkTrzx5Auw3vrPUPQzaXmd1mDFdef6Yf1BLRvALSaqoapUrfjK85h27",
  "key20": "26FBL917nHJEAp3WmT3UBbALX96EMPwgRWcZo2uyJmdE3aXKmefxtb7UmseyZeb2GzShKy3TkAGcfxp6xKFM9Jg3",
  "key21": "222QZHLf4RpxTsFVymTEgNDVWrXorFx6uTQrenR5T2X1AJDWPFUKeiwSVEMcvQXAwtkC5W72hQ3bBFJ75VdRy5Qv",
  "key22": "5MF6f6dYxQCMZoeGxWRUFvPQpsh7sAuv6n5AXyTAX9f5Su86qmKvgUJWS4bV8EXjcrVPPPVQh2s3BuGxGhhK53xV",
  "key23": "3T74hoHxx6nZj1CS9TLxYWgMs5U69v8emfdGybYWug5oFKWezpNQnDW19baGHmV7VhNUqkNHrnz5Ks9pGJF4JgJF",
  "key24": "4dsfjrmkrXwK7QEUAaVJB83A8PXNAZ4g9jY9joqyWp7Mo9gnw7bvX2YnoHcZTt7fySWexgcM7bZ2VcLEnrSAWT74",
  "key25": "58dvAK25Zj5y2zX599Zm8rNZBEcP5f97Gq8WLZHT9xK9cG9FUhmM8A5Zoi3eckb5hziygQb1XP31nyqrN5YhUgrf",
  "key26": "3oQyQcxzMVYpvjwuhqfn8M1hPgVotL2VKEL2hXSaXkBUiMe1Y5eAXn5EfWTgKLxZ1SF6jbkLaRfH1AQaDsyMeKhm",
  "key27": "4ktW8qAZcbB5PVw3ugYzXzeJnhJbcDCeEk7ahetW3BssHePRTHoS7pBZutkD22AcogtHPUKVSSYGfigqUSSLFJcR",
  "key28": "5BdxFRyC5adh5mUbNhpoQfwQz6cveynbWNTBvAreon6S3h5Dfw3us66hoQRzBUjHQXn7zJwZ1pfDEk2F8vXoAMA5",
  "key29": "4wVGqc8G3LCeFTE6doYfoTpmULFK15HQDtkq5c5TiEswZ5xj8yYxU3yY68vFut546rC9bXQouicbgk978owPTFMk",
  "key30": "4wmpBLQhT51b72CRtTP1svMMVg3VoLAs6FgzMgXrWRqi2uB9PHsksekhoSJS2QzwgBbcPXSC3PYysz5CQAaXiXjW",
  "key31": "4EVTVhNRbdVeUVfV2xPAT8DRFRu1jdCunhuJTgXv3CUS88n1HCCpB4Gv1sLx42y1Gii3GN9UFzX5L779FSizhfws"
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
