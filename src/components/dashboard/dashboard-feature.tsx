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
    "5defZzzspwmCvLtyZD9UHJwQu3vdPJXbsGLynLB71APjm9452V2FnABxydhXtQsLYu6PJ45mxK27mQE3Jc4Vmwwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtDuQTQ8gV928tRcbb7Hu2nCoeKhHz3rpfozd9mf5LVrzq36rb18zpPFHeZegEajudTNUWWodWFyhPNnH8smsEH",
  "key1": "RigqUNsB8YbMY19hoGoSTCCy4r9xqTHQNYf3iDrL68nvLRmtYcEQFj8ekVbMiPzQpgFZbiDwebgAyYP4yMozng6",
  "key2": "51JoJh8h1BCcmRW4wL567Jt1LS9YfbSduP1NGXTwSefLvtcnJjBhYXdJmA5GHStjkQQuRTW2BhMhf4CRAj5SvZN",
  "key3": "SbN6upSVjbczT8SnW5Exj3VZKPe2kE8J2YHLJbV7ncENjSTpMytSYkP8tQnivwAqb4cnsHRKqYseFXk2BbTpj8T",
  "key4": "BNK2k54MVstf68FPBrjr9jY5GFz28HVPErEt4a5hqEYNHaoNvbWK2MY2gjKMSZUutaYxEceAbbLvxc2Hdues914",
  "key5": "3WXKaQEVxrJLFFMb19i4U8wNCphL9S6D9oFvsQJxmaJuiQS9Eoxv8HBS2JMaRhwH45Z8GRtdKhyJe2gx5HJZeRM6",
  "key6": "5TKgTcJhh1WSiUePYMgPSPhQGGkLwTt7ZjYRhARu4p5fNMx7SttMRnPr4iVVpXH616rWdXDywvz7GYB2WQ5nmswk",
  "key7": "3hkVMxSuRjqWaY3jtUUQ87kaAGiPYD3Gnhhz49SWBvbLjuRfCz2n2hYE87thuL4jwb1gEBcZQJQLynS73S87bPr4",
  "key8": "G8pEs7cLjnoxxhvrk5QyXjypbQhLxJvuJSqPHUYqBxUZ4e2bbt565Mh4fhiUhsGWNvoD7TQN9QjxU4qa1yKLWZF",
  "key9": "nK5YEqyzsXfCJNVAJMZhYq1YtS7NDUN4sEje3tAP3gWQJihDi7FBHpQZWddQksMkEMJLByn3g7b1mnEJEt35Run",
  "key10": "4sgffVys4NRz7ErMqXvBn9PgLk9eNXE553ZEhtWE6vFn2yE9CDAZzGJZW8f2XWWhbCvNQoLZfQsa32U8pDPrCgmM",
  "key11": "66L5qQb75E1x5abr2xM2Gds693HYXCieHozae7kLPpLdCbgp8v1FdYiKW6r43z3XdYYSB5zdUa25k4yjouqrHXa2",
  "key12": "3Lk4m77Pu5A6FgC3RYFVRA54AkD9Ssja4R8MXY7ESEHuwrcPEHB3puGUJjKj1kAB8r2WF3XMvEdtpQiZrJPAzoUq",
  "key13": "21z7aaMQuX7A5HRxSWjvT3iivRzA2mdG9NU6MUuJypWmYXiquws4Tz8pSnGap4uP21wrCb3T2AXXqDngYPFwk8Tq",
  "key14": "319gTiEwrUDc4JXQnQPBFuNsucyi6Kp9KwDUvR5FduMVdFkDo16ibx69XrkvtC4PZEsM9Lpk1Pz3KBXi2f9iARun",
  "key15": "3MtjaotiRgY1in19W156UqTxW5zR6rhhsykdPLo3axsbdrucTtHhc4EqSnAcdRTeLLkrk1fDV7boHSCNMV7AKQSc",
  "key16": "38BwSQcVgmWoSdakkKMEHiDesXx3XTzzMjfWS7Ecb6L8CJupGThDRw7jg1VeCV7wSAYkLtPr2f95Ws9rRDa2rvy8",
  "key17": "4uWBizGcUXV2mr5u1fm9uJYtmJSQ5wvNfEoUdbrUYjUnBf6sohmtogY7RdGP9xXmr3Kkp71pxQUEKMS4ahLoct4t",
  "key18": "3yxNQrXfVzmo7aS1Wgdoh9fPsmdXxz1XBFUVTWn94GYEeZH4wgCK4h8N3LLXWcMwaNQsBcoh7Fa2FqCT7XFXC8K3",
  "key19": "5aGKnMDPDaRjWSbJ6qu4XuXBSEz6hBBcSc4JA9KLeHkQ4XGSrBDe32gzkAFy4vhJLa2ZC3QzSrmK73sdwermXWKM",
  "key20": "Fcca7NGKv4jY323qS9efdQKsGnWkSCrgaHvqSjtEqs4PK7ja2JxszGDj3EBjKj5C1QAmZ9LJg9ovPQV9tJHaPaz",
  "key21": "MmT1D4mYzd3mKnBcinEzKs97kALF5yrU7ehqk4TSRny3X6r3noNjGp3QWmvp5gap1eG29YDXga7h7tymexB2TGa",
  "key22": "3X3reu82nYKNqpMeXNS13JxcGRL3FL1Uxunx4TDi6VLGRPitxBCgW9n3AB3xWkmf86daAcHmM1yxQf1wt5jaaH81",
  "key23": "3T4vV5yhvj3NrhPXSdSoryBrLR5TKqvwnRgZRuweMGC7txnSwv75LRXWX43KCZ86asRw3rnAkKBhfgAFhUHnoDCk",
  "key24": "ZHCFNF75tNYcfxRbT1zzakhoKzxcdcK9aR6ozrseipZA8MUotGQztAfmQY4jy69HxpVMedMC95BuXWWA1oDfmBA",
  "key25": "5mvsjjrYnmDd8cnM5au3ucinwgkX8SLHkkz5Fe9jE9nLeKtDf1fmHFpaptdc3U3EyqwpJuhigSHwHMinnsACmzwj",
  "key26": "2Mi6bummAY7uR4csPjBYZiNyybsirm3tk7jbbTTywaWbuMoktpeqdSXUj5Hi5fEQszAcGEmen9eRUVavj9zVxwha",
  "key27": "4HEfYxjsAMjmYVKwf6zKUqcgeiLHwAvwHZ9pz7ydnke1A3oPF977q6fkhurd8PiKs6v3cWvs8253vvnu1Vcy7cCe",
  "key28": "2RTVf8iFy7aeWoCQUgjHeieVDGgczACT9pWVsAbijrnynoJtNjPExHZDFTSKkRstpPVWBqvRPyrCmYHyJEXtsXsB",
  "key29": "3jxvYRHurkBp1yiAMGcaGWKRCd5Py43G1zC2oUzuRyG4dMAq9tr7TJkxg6H8dcHvGM2w9QW5XZJyvLBQ12ETt1BJ",
  "key30": "3QVgaZ9XE1aY6jy6NUFubYUrSdBzq6CahDXeS8JuExkMKugca4qLvETfchBQGcVDDLXoWF51foRX8aXfwG4uv4o9",
  "key31": "3gtGPPVuVFajg7iYGLUp44VnRV1uwKpJQoD33o7UNTai3FMmgkyYcSjNKGx1sn4tMWSvBsCDrogpT8W7ivrMXZq9",
  "key32": "2QJmAmQw681U8dMsnr2i5hBfpoxxF3oo6rCoLabuvtkgNiFKujR5dAhgz8Eg7mmfrAuhL7s4GKsgRY6JxCfxQpU2"
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
