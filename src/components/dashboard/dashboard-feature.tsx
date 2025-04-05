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
    "rhZ8hfjCzQ48tJXjtC4ZSeDe7DU4khwB3dKCLEoPPYYwdUjVeH1o45w1f7VCVu39AVVkjCfxK1TVLZmrwAjWz7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PT5oNBFA1oZeYzjYMSR8qiaXyh79Zmjs3iMa9rTYygDZuhvpUHjyWcAfMhy1R131n3qw7LnGuLMtsirChPMfaj",
  "key1": "5gWoZtNwkWqtuNxGCkG3d4hSxDq7A8Dicoxvr5VfC2XGuX4133yp7SRRqR5nupvsNBugdfZWN76baCe1qLwGGhz8",
  "key2": "a4DVtK8fkvfkWtWSdvLMDT5pVipcqRuuwMDgFETU4udV48L3kLF1hbuLYpdq85BspsCjEsgJqYV8N8dYk7qJdT2",
  "key3": "3n8KA8HqvPUYfzyeFxkj6ypv3XzjajYx54he2PmXWgs2RrPthfLfvLZfVkH7mHzvL1T6ub2WXZTvyr9ey9F1iSXC",
  "key4": "2Cd4vzCb2u4g1gg5WjCNe5wCJfgD5uy1U9XsvviE7SuXXDT7kXfgzZPzm5Hroi4SjH7nssbgaq41dNcLGpsxrdsH",
  "key5": "21J9H3Kz4hUzyiaXhymwq9UTmDzTyoYtcjM9QfythYYhJU11Kk7e7kpi3xES9tv9Wf8xBzirbciq17aD189S9an9",
  "key6": "5J54xM8GCVn3bVdhJkr9uHjkjGXYoyVHxowGuXw9K18eKunr1qgsdYnho1KDfTYVxQp3t2YJpzxkjwbiNzSfUm8Z",
  "key7": "RWtsJ2E1xmdBi2tN5Tp4j3T2zQGARjsAvkaDXijgsoB8HEwoCMHQx3XFBSfMWqvGymaftRoWan9oypibz9xWmnM",
  "key8": "3iNLD3Rb321fwJ5dvz5iJZBtieSfWtqXADSb4aBxwSSEeKkWmJBPNLBdBW4QAb4tzcxGdje4Ghsq5ZdQksdxinpi",
  "key9": "2FJNswbVw9k5dAUk6Yz54pbvzDCVGkHKz6okDW3WYyvYQtda8fiuW8NE9uogU9mKGfyBifhHyP2ojacXG4tn6L7x",
  "key10": "4MiLmWEJevFzqLtaDoR5PQMTEreADhJAnysXGVqCwx5jtcetPDVHL5FVm1WXq6dt9WepgJYYdQ1De2eNhiuwwWDu",
  "key11": "38fXfmmKEPgVJq9vkmyZVwzMTeLfxuR85i3Gbz8VV6bqMc7rSYmnA3tzPiEchiGRkG8KJ6Td7HqJcYyoLM35Am6f",
  "key12": "4STFVhYrVz688pDFMMzWjB8Y8sEJkSPYEtJR7kmrrbsAPwuB54veHPShX8xUWrAfGvGHyumr8y3dSsU21MLrtGeF",
  "key13": "sxmWBX7MmZjcvYBv5VuFg4JENYCNZZWKQ8vESzyXZmPyCUMTDY2tU7b8i8PSw9Rnm7ziMcev1rM28BGnK4rhtQh",
  "key14": "5c9gdoHrj82QujBjThNLX5gXmx9vnWSfMkWccoys7N3F5X3Dgig5M7qmiF9wnyqJJM9XDxWnC4oWZPkmMi5jPBrh",
  "key15": "4pWLg5tfmjPE2q4HT9ZqSWnFmUhruUT6fDRHWfMfVu5Zi6fMwTgujPGptESRe83fARxU5oLQYKj5aoqmQu43CZE6",
  "key16": "37Md5hrUZB7d3LPSVWe6acwCbWRy6jMKd7TzpdvL5aeyrtd1Rs2tnorKwVhv4tLVw5y6pepJQBqNahjj53iYjuue",
  "key17": "4cBuvvhhbRJvVtGBapGVhkZR3JmRf3G1T4EyvRirNZ2AKKH8bBU3wn1DVKs3Q1iWdND6TjgiKdLTnazfvd6RBXzk",
  "key18": "5GtndgWYbU4vChK43LvyQAPW1jWfiTopSymrXZyDmhKyG4U4uvMm9F4UWmd5Q8M4r95PRBVT6F9VyiSGQQZ6PZrx",
  "key19": "2NiZn8fUYGQo27N7j3159MzBMHzT1MzRrdyF4dr8m5uCfLYsBgk1yihnLknBmsZtK4edARRaydtz3xVqWTGkPwqS",
  "key20": "4jpVK6Q6BYLu2V8bMUtXhpKUkQMVmUGShuZZZgzxnTZZrvARW51jk4oeVeohZoDdP1dqvMEAUgahEkJCRxeMm22E",
  "key21": "cR9fyggd11GCT6vq56V2vd5wx8j5PeJqJFokdZsQGLLBjSrV5DaNFEsXCSds5B1k5RfzPs5T12QuPV75rgff7wW",
  "key22": "2VgsC5NRjBnxAt53osGe5DvzqoVNJ2oD98frAeJC349t2tgjiLJTLLfzwoWMiCk1QCjqutdUzTy5fxh7jFDzFbGV",
  "key23": "4hbbXRe1gUVcWhJGpV4rRSSGAbCoj1NksGFAyxivTG45PWcCcpzpRmHUiRjWQDE5Hn96GR6PCde65oFeggRfEbmA",
  "key24": "2HJJs9FJXJHRkKuAfWZVrbhETbCoyScpSJyzXztbwwsFyhJCQTo6GpFZpqqXvus6t1YN31Dr4qM6DKs4mWdnVnqr",
  "key25": "ieJDLmXsMrMmynEAYrxL9xaNcGVbXMnSfmv79sG94o8KTDgDAt9ZS8Ak5KBzntH98YdxRZVrc6e34LTub4mcb9r",
  "key26": "5dUSYgYJqW4w7N6DESfWtYda64qLa4sL4i9ucM9L2A6AX7QkY2ji7BN7LnzxvYf7Svnfr5B2rjUb2jVBDtMqm8Hv",
  "key27": "3v3WxReBsofUunhmnBt3zdwW8hJ3d3monKYSpb39JhLUrQ1rsV3afQhuzAH3WUiN8DEB39opCGCCLVCH5PkAcfqe",
  "key28": "3xA3NjjtKDHkCrNMaoGsPtkWc8ptYwXgksXvkyVHukusdNBp7xX9A9pQFhCow7nV1dt2NR1Ar53iF56yCchLPLJu",
  "key29": "2sD9s2jmrHayo1G8hKZPcVazanFPAe5iiageVBArv5cHR2TVv4jpWtgEn6Py2CU7KKyPxXZ4aozaaReiWbekdayT",
  "key30": "4FwccvGKn2XHurp7LKiy7Ktf81JktptWZbpwWpBaNdxL2Gw8LfPeEzUXv1PXVLrFyud6y9SMNEGGKGABARsjxwrH",
  "key31": "8Mn7qc4uL4m8tt91t9Bvr7hZXAGVg3vtQk97dpKbX3Lj2S17PhkHaR1uXjqjr9n2iVWPUfssBMCqTKnZQdmSS9T",
  "key32": "2KWiEqJWcfCAzqDj7dRNMJpvHeDErHXk4dHGBjXHivtPUoGGrQtqGXY8bUpiw6K3GVhu87fLXdJ1J99nubXms9bN",
  "key33": "esobU8rkLQYiDCeimYcXbGNNQXGreTjkpdufvBx7MkSw54Nzth8GdETqnD2zjfy3VmknX4cgmQaFW1Zpu6DqeKK",
  "key34": "4isu8529QX5Ns8PoC8dAF6ND5kHCfsQHWTZ8wz6tHpxzvgVUwrZD2cWWMVvgv7kdv4SMwQ9VyipTJi7SVv5jDNyN",
  "key35": "5Exxj4jkJbyePfghnps6Vive1DgWu86ryJjoppVUbVxBZB95FAzm6RPH7yoN3g5yMzydqV7eCJsQDsjua7sSKciY",
  "key36": "4v3ottPCoaoFzmsLYT6ZLiugUhHGy7QjFA9huCaVGH2cCx4gErGD4y15Trk2VVeNihm7phQXeGjdv6adGwBwDJzp",
  "key37": "5Y9obGF1odJCLUwRhQPNcw2vHJo34vBY734fYxuuoHba8KnbwshDpgaVS3cqqtDrzvgcSThwvX4SuLK3vJDxc3mj",
  "key38": "627GcGFWe3RqBnYYcDKbyHopg9TJJdgmoUnV7XeUSL6XBu8pQyaND2hemMgpayncj6gCyUFjcfnFYXWAhfaz6Lm",
  "key39": "4nNveERvGRJBVoEbZPHLmEsSd5N8TDNKtiM6eMR9TQtdWGVPBUQWKwEAjYcMT6zuwSHS4Fro11AptUnbxka1UvA8",
  "key40": "5zdBs9LpsPgTtneWCsx7oqGtrzCgFhL9G9vNkAuyLmmU8Ur6aqkSkp6TcivLX3G7pbfZp7tZY1YTmK1cZvzF612T",
  "key41": "5Fb9xumHS3s3tCeZPHfXHB2AGz4bBhrvzwUr9Y8s7SZiW4iBTTPWQ7vgyXD3dAVWiAeALu8baarN746BQgygx8cH"
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
