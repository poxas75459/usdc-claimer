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
    "21X8rPQ1hetMVJJYBPH22fHWbs83d6MM7egGsVMVUoDpM1h8DL9u9vVxupEYAUCa4RSb4vGkTLJ971zHyLAJFF5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MkSHQ9gkzJU7xyMph2KkPNhxorJCbCVemLo6G8dMeVHtwiiMs3BGx6REgRyDXUscr8JC6cqGRdfCQHNdZtGy9VC",
  "key1": "4efnoj2BVxpDHSAdSKvJN2gTyg1vGrt1DN5an9rtjbzYi1e4T3EC8nbNryTAZqX3i1uncigEY2VZTCsX48GsZ15H",
  "key2": "2cY2crAgLX2gJXMx9mxfX1pDUyATduKU4chGMkfiRvorwfLszCAaXsadCNwAqyoPHP3p3VjEd72rQ9xL98MJEjkA",
  "key3": "37xZDaWKKZGCzyGb59Kws3Hn32RNrsGGX8UQnF49Mq7aEi5R1HfaFgF2h7xbY4Nz9DMkgsYfircmzZtA2DVYQ2An",
  "key4": "3LnA34pk2D5xmE8nWwsxba8QBhuDrJXs5xw6qGWk23wUdBw6cecNuSKWsXsQth5ZP4wPbeuYFHmmEba1khi7QWni",
  "key5": "4yLtGaKNbC4qnFUwP6YWKz69XVtrXD9Choj9CUoutCnR6tjm1nqP6ATdgJiEcMrpzK8qL7DieV44YhpbwxnKQVwW",
  "key6": "2mZZVtXZHo5Tnj7yyzjBdWp841FJJMPGwm6hprssrwzoySzQKz8WS91fnD5koRZc773JqpZm7t7GanvHy8RE3ecF",
  "key7": "2HnfCiK9jLj8mcKCb1oTrpfQ1kRw6LWt8V5rxPn58JDmtS9vRGHk2mqac5t3hFj9e3Nuxkr23ruv4hEESh5Q2cy1",
  "key8": "4a5Z1feQJmwHZ6aK5J7fmuSgDo7NBht8MJTTgjebxieRmCTnzEu1aDqDworWSjr5XZpqjuP64DK425Qna1J2chJb",
  "key9": "35Fjsytk7wv7yYFSoqW768sxkPTrchg3F7KdEr7eCgTZ88dKdsGh5AZ8MQFdXL8k7mEV1Jsx1yq6iRqW165gEBTs",
  "key10": "4mzenpPFe8nmiUzVFpVwGX3MeMyhKWzTYLRDAtmtA1YomdFKZiVa8p9LS1zcfuAdFnDUeneD181MVTxzL1Y1A89m",
  "key11": "7KQUziUYJsE2Yud4ydfeLmaiJq4vAsKn4hoKeKmzAPwoQ6wnGrH59jKqboDR6P5GJj17cVpgnnD9cE8USBQ7NCu",
  "key12": "2yAZqwAgNnHvLEByS4fBBRQPHCk6nwTj3XKS2XBLSFR1zeZ5oKXVpuqCqggTitXJX5BoE7MbLdkBDQMbcq9JnrTT",
  "key13": "5yAJAyD6FAFqL7hbFEWY7G9i2PXduYkaDkgvuy2eyNcq49bh49ztb6czpMkLNcnqUMrDW2TJZDHsprSDqawMkN3C",
  "key14": "65V5oMPAM8aBasDHSJkGMxe3ojJesEeAMeQzhJyGfg74xJCHpaw6M7P49sb7okHb7zxV46XJttFF6svsUUebxE5G",
  "key15": "txSVM5YBxs2AXQC3wcefADxGe7N9F9siq7F3gzL8raZeSPUFwUGWfdfEKb13Xezh5oLK8Ue85p6rFpwZmt57bw6",
  "key16": "3JLKhMYBXXFUy2Am8DEEC3NEanyXmHZ8Ghrkaf3wyifGWqKKh1ydPRVjWf2BxRv6nNRJgpYrCTJHKpz8WXSEjfj4",
  "key17": "vRCzUZkj7ppTZ91eHwbDw7WshvqTQqyBKLtRgQaT23RWTm7FKEDnThs7HFLj6HBgefN8wS4hVxDkQKYRAihEQy8",
  "key18": "3XCUfBnZuQd2EHsVXAPZSTt44b4uZo9bXF7HhpokTxmZ5pDJVm5G9n9JqB6eA9Zav9i8ZrFKeoKxbuSYBFCbHTFk",
  "key19": "5steJrmWRAQCf9gsWHD7BARWqewaxfiXzbmUsMBLqbZCP1PiEeTffRPNCVq9W7jdCPrQgbxgt9Up1e8kPBLXJPdF",
  "key20": "5Rn1DUd4wFjnUDYenRNnAx9w66widqUUH4kVRUg2AWfnJHP27R1sRZXyDHKgXB3Pef6P2guP4jNsFBofasV5r8Pb",
  "key21": "66BnQX9QqYAj92Uex2xCmuRXjuLpNq3oGFZ17EgsqaXsTngKPR8kc83jWPt6412dqDL6PKfT9MyCCWi12purBVt8",
  "key22": "315G24vsh9mi7dE2uP4yZFjk6GynxqyM8epSfZLQpMR3BSYn6jw31rycV86dgmuF91hawABHScQh4ASmCPEncQKr",
  "key23": "pcR5NT2kC2wQu6hmo3pyiSycKquLASnePNg2nd5sXBuSnSadXx2F5vAUts9TTD3c13scna6r93j8cEQzWJQdXZy",
  "key24": "5nYLZvf1kS99k997SYPZQecdMwJi1w7RVzocfKf3g3pMHpTBmzaHbzhLvJ69gFAitvbyxKjL8BN5Fz94hofPfz21",
  "key25": "4Y77s3zPECHDCbzNV7jF2tzM8mWmAeJyrckcn9fKvqo2qi1zAMsRFmwZWWJwTtiNsrdJ9fSoxuRAXfkZWeXKeTGw",
  "key26": "2NDyhxZ1AHrZa316vA9NwHXoEDaTk616XgBaeiQKSHBiMru9RgKu3s3LGYpg9YuLrV4NBaoAFAb1DVVKzF1CYnGm",
  "key27": "23BvZ9LmFD6aZfT5xbYMPzN8ZuaAP7Tes42T7h8gbz1k5KHVuc4ufnbE3WzHFDbGzmEpvRGbXomZ8t89nJfeeTm2",
  "key28": "wtYJmt4iRBZXGbxjHdKvB1fqikM4q412bT7gZzMXzM83QH2aC9aR2QDVCXEn7kbohtbKZeXRkDknhC3HvWHqW1e",
  "key29": "F3p8s6pVbU79MRinjzv24LRaubEs9qb1jfCqvgDJKv8UMr7o1eHsHsFPE7VLUWovws1YtuQqkQmZ52q27uch165",
  "key30": "54je4iLRWeVLfM8ZotGvLZjbHfsvD6k1hE4wYSMHmATL9p7weL7rNckRkVPpdj3ddRW6qUWHSEwJLWZSzksCSDSc",
  "key31": "5szFZxG4FcMaXoEZEHQ3ytgdJ5y5yXjLYh6yKR2XQJB6XoB6kD5joKnZ7SSG3dTVnPgsv5Aqo393FVt7RcqeyE3t"
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
