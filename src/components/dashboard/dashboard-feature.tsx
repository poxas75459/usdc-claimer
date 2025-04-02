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
    "2PjUcf6AEoh1w2YSxp61f4NpmQTgL8TJKheGHxH9svs8Ts61EjzfuUbsUY6K4ZQ7chDv99R558yAJVxNrqAwzHYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1WndLoNmZ7CTQ4ruWVX46PJFF1NWf5JMsaMhye3YqCGHgnKRaVs4f3TGdAKYcqVMRetucAsGHzqMYo6XcJ764d",
  "key1": "DTwpQ3FQqbcuzAw9AiL4g6Emhqf9i2hoheeJ8qFB1VFf5KTRM4pa7yYS8jjdNNoAzD2Wy4Y37diVLs82rjEaJmP",
  "key2": "3ZJLdAPmXuCDPtFY8Jnj71WSsPopJKxRgK6zGH6yNCnHnT5Rv2z8XjL7aYNwQ9YqxCtwvVUWFhqBaRxgARSTFwJu",
  "key3": "576QLiAnH4Dz4S5SP7P7TjBR2DkVK4R8yYmU88xJrDRyUb5dXhqoDsdC85zXhU5vCsnWw8S5zmRYfrm6RMj4EHmD",
  "key4": "3J6cm2DoAbZ7DSvx2dNQTU2ua5wEsvtSUhQjDSw6QZz2h86etjB5L64NJisXWB2nRWtEzmwtt8GynnuRCyWqiyTo",
  "key5": "4RkbA6aYDz1TDgZvo4zz39Lffku8nFCmtvzSCnPoyF2zUmnC73zZicDTgnf7o6wNXnjnfFYqNT8QN96Moo5Ma585",
  "key6": "oMaeP4BJQED9F5Dfn9KVayJwoPTiwR16W3SQrP2LBvh9mPGZUTYDHCrwYEpLUM4bUtwtKjr5RrW7CFWaVSELT5A",
  "key7": "4QGGPc74erG9W1tek4N3ZepWxa46XNRGbRrcMEtfUn3zoAmcGJhNQhQkMcEAUsXoN8gk1AnuYyjZtdVURzTQMtVL",
  "key8": "E2eDGN1CuLb1KacWoPWPjSFhR2rmKV7MLJ6fkoU39NhjghkXKMkLk5jmj4DXUfqXiJP9mJ1Ui9YGJ6QYZKTDFST",
  "key9": "5o9HfRwEBv8VKinLCfWkC2NR4yryaSK4QVv8UQMYSSUPBCtLYbGeMAiGur194i4ZWVZtWBFfeUka8uKfMWLius44",
  "key10": "2JZMFsyizL3rsEfRq24RkHgGKy6TSQtwiR7EBH8da7G2nJGf3dn3sBuRAQtputUmTknijk6S2PW5fvY9yLdK51kT",
  "key11": "3zUhUboLpsxKoJ9hzv3MF6NAeAQaG3vPbi6MaRPDWDHG1UGp9V5m4GDGZv1L7Yv7CyU3T2cAZF6BFVazfC4JEHvV",
  "key12": "5KY7cWnUKqjYAqoYD1J6UsyFQ9tv9A5HX7e1DkCGqyTZv55Ucxzy25SVFHpS1mRtdYvPhe5YVUn27CkEkgCJqX9H",
  "key13": "4PV9612d6RDLhBtsDFBAiiGdmHJSAfeEHYh1Xh54BZs4VxQEpnDWYtEbktJTgJpn8czbpgxWcTaaz13nFfF51Mot",
  "key14": "43ByrjF8mfXvn17fz7ppzLBHM4bYpitmWJScJAGqMsAbVkMjLae7PNHKCcFpgz21nU4FBhBEWWi7U3THQ1SeDgmC",
  "key15": "3jBCUias5X6kkuKfPt4FRb4egV8sabXpkLVKFxSCjEj7oU8KpwGFofqzRXMTZEiLXMxBNy5kMwtjLzkxwjnc7PaB",
  "key16": "5qA7zSrPbGzrdeshrsCFFtd4NSNPQZ4tAefNkpADgybJXoXGsKXuhBU7kkiLXBWfussGk1u9pMndMmQpWjTqyxjd",
  "key17": "4mWiWFecp8sR4JbWji2nsMNmgygQj4ZGAUrwNy3F7e5yrUhHnxDgBi69NnhntspgFKqmJnqs1MEhBNrgiWpKtK6X",
  "key18": "mFt6Ti6eBF2yBQ8gPzCzW4iA72a9GdGwpXhrZG3dypcfi8TBdyun1QKZeQNob1zMCLVhYDHZ5aFda6XNowUNn5t",
  "key19": "FibojvpPSHPsAooPfwEvRxkMK66AYRu7o9NUhRMMCM23M6kH3Luwxrk8gp7oBjEbNtCzjvdmEMBm64sX2DVt6qM",
  "key20": "gfgtkK4EQgz3f5JywUdmCVgxzUekWK4Lu5uNXivPB664xQ8s1GefZH5Z6FuuQgdcrCfpWohVf1psauPnzknjnwm",
  "key21": "2Yr2rbXqVANyHZcGijjQ9ru2KmPbuKYmPmVHEsXxgY1j5R9PLzsRCucqaRbzDjcDJs4FfqVfHKVQGPwzKW59a1Ch",
  "key22": "5JpPhoK3gJkAbsMLHFJ5MZBsPffMs1THGC9Yj9tx81aPuz36PWZGJWZ3Mar2KZMwk55cJ3C9NgRARbRzwbM7LVDQ",
  "key23": "38wybU5FLSjfUCVWpHJhVgbJU7mGBJKSojfm7Qhwc4CE35ktWXpyVmu3zVG3ZMW9fhWNbXUQn2Ls5hYFHiomeZm4",
  "key24": "L9mTVUn4JwxhXkBAdqSVFDCkfydZddzdtCu1HC8nwEr4EXv9dcHFiQ8cGystFKXqdUrNCKJVePfcEFFYGfWnZic",
  "key25": "2qQUMhBaPj1KaKiRivxQrY4xLBn52CMZuLToRQ5KqYCWqEZEFueFEG1uEBjCmz1Nawb7qwc3NkryfrqQGDWYEpmR",
  "key26": "ZUd1PtPHzkHpndmDFMuG7g6RK5gfGpKraG6dfjukQhGVoUFFcrXJ4PYEqrtVYf4tABfuXCtN7tz8X8SHMQGVkuf",
  "key27": "3omfmtPUnaLN9KoJBmBWa9ciugv7GiYbLdJijpZx98FJsCZXoczwArwmHKaACoT1DRgMNEJVcZceefu6micu8yFv",
  "key28": "mNpdtRufjHYQMY8xgWcCuYCaWCPut44mjSBFcnhyKAX9Tbf2wTSC9kDSroyvNwLadRi4TDKbExvUnje8fQjNVhm",
  "key29": "3UUtNj9Zp4z7dRcJMENepSedpab9FFNRPZr7XsbkGdhbVUbpKDY2EMuXnhKswDzGMB7vhjJHdFpPWEWfnszjYi76",
  "key30": "RWs5rr8vt8Z9d3unJNvCGvkeGDp9Ns9UFGGCuEDog5m8p5UwbMUktzCwh9F8uFB8ptGTy4ziyem93p1gjbc2mB7",
  "key31": "6kT321ywb1DxCpNY4rAyWbb4BzKNsUCaQyGsP4E3Si2SqWYPskE3TU7xBgyriipS3UxMrzUsKw1f7dANqDapWW9",
  "key32": "eb47xwvwbS161MVg55k8WYfiRTQXm7oFaobuT5ADA6cw59d4wbzygsKyvUmJ8PPaBFqs9jAp5G9EhCjpUNdb37H",
  "key33": "2HJc3odc6Y8VTQi6LKfu79wbvvX9W1zD3bmMKYGzu7mFt9g1xTVfdmvnSA9YczZx5P67BXFLWVsL3neAQLYSTCk5",
  "key34": "4FwjPbuaWFMJHTemvhpbU5vx41CNARciRPpudgqYkeuvaxTzULdghJbHKW3SuxpSeUQkYiUdGFTRspEtcEPmWzDS",
  "key35": "2YgDcr7W5ACjvuxdJXQPZ5ksQBeWjv5d3Bdh4L93gVwPe9kAu9ZYZyAaGQR6QJxf4UnETxZ2L9zWdsDmWRo6hrLw",
  "key36": "42yjQLpCqH7TyoSyYcufHCp1FVts3HvJaBbzT6rrUaWR957DUpMkoujNGjV29Ab9SHPVrRAmU5zK7iKuCRooKGte",
  "key37": "3KSu6NEPSNE3GnsfNp3nY3quWEnMEH7zCYGRFdKFJKCs6w3dxw1QJawJq9m84R71H717Qb7MBdARUoNbKdJX8VX4",
  "key38": "4jX64FpE56sJbVvZCYqUtsqF8uKv1wvviUFrEQVqccK81aMYNjPfLehbBdde6WieedJt5ohqzVa8c8G3ejqSHwGZ",
  "key39": "3er5VbuqE3MB5BJumq26HrFsRJEfWz4kXzUCET1MfqR5jxAfuwUzBk8wpcUT8QKwc4ouPMVwUb56uhm9RSAwdFqS",
  "key40": "2uDDXedKGAG3wE1H9pyVZ59LkDnHmtB5VXJA16Buboxj22ciFmadLWysdo2Jv8XhXQNjbNP5AuWQbjb6ntBPYwEW"
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
