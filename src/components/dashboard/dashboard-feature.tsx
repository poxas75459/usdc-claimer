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
    "4wnAKUvgNh9xWmFSt83vUDhoWC885c8ixRo2YNzVhFzUiti29UHAhh6vyNfMVzAALyLPPvGmQ2iU7mRDo6Y1Kpxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7NT2SEZAuP995bb3HqNrVmKGwpqXHePe87xyC2p2SpPems4evNXT2KNeEQAbgZs65Pntqos4NZe56acQf1qJPh",
  "key1": "VQczMoKnEjtyPYi8foHzhmZzLEkrRkWcDWpLAEJg3MPWaXc6Jc4hwSwmqwPvcrDSDgoqe8GDnBa3xGnintGMdSQ",
  "key2": "48CTYRkafTUTFeszU6vb1pLRej6iShkxxqRBFeRvPrgvRzABRG1sjRDRHnik7jLdAkBWGQu9ADz4vgErFfMsXA8C",
  "key3": "4epurXjuinQ9rwJ5XygfQunbHaPBP4EpNmD9KjyjhWEhbJFuB7btEZUBEiMQfpra1UbQd7ZTcpLtXHrnZehNrdJq",
  "key4": "rzAehaD9DCPn8t4mgY5ewibZYrByC3Bdo7472zvw4WyTy7ehCRkkAP9V6AdKy23sp3uTvo7q16Fjkd3jwHdgJa2",
  "key5": "4M1sMPkHtDSmfSnLvG9t2fVG2h1ZBMMQvAFKxNzrY7ZWF4DYFTwfuEHSGxt6Wi2Q1usgshkWFiMR4scRjis2g3zi",
  "key6": "3TzP2aJ2ebDzrGSDDyixBkUvkgUromQQVpS4PEeTVhGQMSo5SmgHQWgeuSNeiw1uvJYUY5H7odG8z7kERNetF2a6",
  "key7": "2ggAWQ7g4X8oPtJRguWwsbTWjU8gHxQ8H6MpMdacHfM4UZ2s8CvJ4ArTTA62foP1YqiqB2hgk7sAL2SXQvmWFnGQ",
  "key8": "2izesyfDxGLRnLrKAsZStyaRTMGqufh9iXCQNjWxqDqVd39wNy95uHWcLE1Cp4oXCDhZbvuq7ij1EGrohmCu9ABb",
  "key9": "4PVTQ4Gv6jrj1HeJ6Pzqa16Ut9eLXftzCYrx5Pf3XEvZF318gWi3vwmf5U7TwdRwLTiB5XJFcMB7uCZ9zDK6WSp8",
  "key10": "3gGh1iPcSUvnLZw7VGxfm6jV5VJe5CdvUT8ZkpBUGLc5DUuJpFGc17LM6r5zSeVBbuipXfXvdfrbmQMMLA9oH6Xw",
  "key11": "5SdwopXoMtkaV3L1XVB9jyahuWWQwhJkoiJm3e2emKnjTNwtRGPdEXofUUPXZ2bpessJa3T8RiaRVVXEJ6GUaggy",
  "key12": "5g6GjZN9qUSCV2vKw3ezUvtXHJ5uZEHuHqk3LA2mvJo2ZowWPfCtonYSQ2ZFTnYhXx9Ep9qZPvCiLCUJ6Hg7Wq3z",
  "key13": "Tajt252J6RUrcCTG4rbNZMdmESGLkJekMigaakH2LtyUKQEynFU3guAn2AsX5zm2y2BgewB1UyCLPWSMqF9aKNS",
  "key14": "wKVC9tvonFzFnQeuJcA8nRM4neA74xnavbnRCuCXh5uqTv99zuneBs8umKEg5dKgBNM9PYXwWx77gxbVbLov1gJ",
  "key15": "iujGxAAzvUVRmFzRu8PHbyspZWF5Pj7MwLY9tuF6ZYg9rsTaoGMwvKrzE9DP7Q2CS6ZcNUhh1UbiuZCwntNfhoj",
  "key16": "5pY4cSYF2xRCJJwcKAGezCSBkyqo4NaAFnByvSfta8MAEtjoz2TbQfayh6m1gwteAFKMxTfWbtFQ2hGHoHv6rznq",
  "key17": "4vZo84CFLQbWnrRvCw4bF4xkb6LPYcn453i6KY7skenmYH6RruhjnY5tzxsecWuUik5rY1fkFgk27gg1Cg7p8cgc",
  "key18": "2HD3Hf13hS2R8gnwhrteBL2q16hsZEDcKhRkXdb8h7vCGaxy4iUZ4tGkFJx5DWqeWGJrMdzK6bkSdGRWJ811MUXN",
  "key19": "5TQjtRKRiaHWtLEDbLquTL3kdpQML1QCjgQ69R3WmZVrZe1wLksy95s4QouWkvYmP89935snnKmdYw42qda769zG",
  "key20": "37JrBLFesiXLxKhXiTsCAHYu3F8wS58sqEz1qBkApLVivReZVMAT7bbJkfxcGjHAc8z8SczRxeRvQND9QLzb1GK2",
  "key21": "4dSuDAwYuKRzcYiYhr4b8PwrUxtGed1MGBd7FjiHYndYMDM7ksoz5SurUn54rUnfs2EZZVf4TY4EyrvJGZWrgm1L",
  "key22": "f62szqHieJDHmtGB8NrKQo9oQNCmfzusws8A6TuxgWBuVB1AwxoZs3ssBtSbSKwrHzPttZxBJTNQB3LN6REWkA3",
  "key23": "3QZMroP6hT7PeAmkBAgV1ToGkfhjknwpNL8wD6Scs2E93u6sUTPXfDiQg5srR7LCbZyDJw7GnQqPiH1SQCE53ZiG",
  "key24": "2mZuRbBrLj23vA9cDnb6RyLPLJtxQrc3cxU1ZvGeGBT7mboB9SYjFp3LTDCMH9y1UCpjiDoWcNz4hnt4pRSpEGd2",
  "key25": "51FPDZawEvtWv5HEUjTuuN4HwaDeULH57r2b7Jj5ic2yLf347Mb9xDkch5Mw99rGWstpQzNByCm5jPvmvAxRqxXn",
  "key26": "2Hevq2SNYhxLpRN42UcJFKPpyQPjThqNjvXB1nZ9CFzq1VwGuAERo4uHqAZmiDvnmTZhdXGG232azFo1VzidnM6P",
  "key27": "3pFvTLRKoie6fDJFDkZ6wRP6K9weGm13ZcyX16YmBAq5JKPDawyBbxm7oRMGwJEJB3p1L61a66XwtLALxa4miYZ7",
  "key28": "27PiLqQZLUKa72C2wmSfKFN4pGFrM2gXamgew55rJXxQpfNsCsCWbBiKzvRE6DUq4b9dYDqkJBAWSiPgatgYmQBP",
  "key29": "5ujbTope34EVNyJgupirZeUoyVQepB95fa2oEYY9xyEb6fpPrSkAoD4wLC5YyywvCU3WFVD3YogpmwfxH8DuuYUv",
  "key30": "383Lm3K7PG3wgs9ej6WAryiHPfJzGDgzQ4py585ZoecQU1SyFM9mXkBuTWdTFeuxiuekLCN96Q6AhApHjs944PgZ"
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
