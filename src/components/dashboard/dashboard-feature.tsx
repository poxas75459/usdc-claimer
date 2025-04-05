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
    "5hhFF8eufNwZ2aDg4eE9YjaNMEqWyt42EtsSB4D8nCaWih8qrCf4EUtX8Juwn3wfXFLGNM3xLvCNoktEBEEGkvmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bH47kf3ygqkMx7BmnN28zrCyFk75PSdXW4rRf9gZRkL3RY9Zp7sQW6CCoU6BaaGoA7z5YGnq5QFcAXGVBDr3a8i",
  "key1": "SRpp67bjrARK66YNJyrRHXSPrA5cbzfMewTL5C2UpT2aypMtm8LQ43xuZtXnBtmKwpToGgNHdrKoL3114iMDhm4",
  "key2": "2h38E2ky1Mfn4ENPTYjcCKrtY99gPQARR4Vp41vXuYW67z5tsxs3k5xYKo8sxVzkwS5zciRhaNWkLpP4mWd9Eh2g",
  "key3": "4PHcqCwhXxX8pQ2bARjDX1xiezft5p9zjyF18CSV8v2pEN3Y3Q4xwWrNXHbSzYRJVxar9cjejT1BJHTVahQGEepp",
  "key4": "4qpaRAR4UpwDYMffPU1wDb5DcyFudoVwqZnMosiUeWJVyqiVKzoo4nCdr4KofWeztVFBPDgigJUyL69kM5Jq7oBA",
  "key5": "5b1ZX8A8xKQQPabyTALYajD6H4rvQZzgKF8mjMwnAQ4EMN9daMbZjRrzcQiFLjjcFdXekKgCpisb4mwp1pTgLvie",
  "key6": "3tBrr8eEgoQW3LN9V3wJ5UGmoMLb5qJSHmjZEeqyvWoGqjk2QvKtuWxnvWMyEb6cxpAPBmkeRyasHk51boJE5DP2",
  "key7": "zUPU912mkzE731ysiq5RjUQC3RsWebvJ4Le5twiztnnTs4sgWusocHPQ5UaZ7S8KB89WW8jUVX9AsSwWR1zDqDv",
  "key8": "4kto6DjdEqkC3RGcscpugJDcX9X3sMZYgwgu4X1ahqKMWH2zKueWvMJDmw6mikgVtCHA8VfGTDCxqk6f5Pbbx6vH",
  "key9": "xyiNTYtD4fc3XP8khJ5YD45cAkBzcCmHkMDaLtLAcaPAud7xXV9jd19JaYYVfVngrXZnrmvz6qTSs5nSBTsFn15",
  "key10": "WBZ767gotrm3B8Mvw6kkuoh4SdTSXCZ1FHBqqohv8SDeoZtiKtFLLdY6969AF6514TcK1AoBARVUjc2AoJsxoN9",
  "key11": "5NYCLLF1BFfDypzwGcJijhHv4paRKN6K6fbp7bPeheWWBY7qbyk3x8vq5hzxr47BtLTmG6zP1GfjLebAGmoDYqQJ",
  "key12": "21HUEM48SDdp2ZEHeAgk4Bbcn17XoMJ2UtwnEBJhrDLo84vTtnVB7XyJwfB4goSdFK5iuoPbaSq5oVQcziN1cECs",
  "key13": "4AivQmRaihRLbmG13wSe76WmtvSbZMNtQQxnE495sjbo5EFCTecDZz8gMnX7APNuovdyj2JsKU2efysLmEwNBjfG",
  "key14": "3PLu2n15EPorZw5pBzUMeyekZPAFKndpcFTR4mTmnph5vAHdJxGsxs1ptjQz4RBhE1xKgYrBMTqnpDzn2UG66R2P",
  "key15": "5DmS49YdJxRYuE7Qi5XyVJZFw15gZ3EGwSpkqEoyzUQWAvbPVJnnK8B3uEjHegGXDyemh4WTZkVRoUyddk7TRfhZ",
  "key16": "4or6EMQ1T5Fm3FEu9yG1xs5akrk96ShoE9DEHbeypQBy3BVjZa2rEf7oDjd4ravd66ATTcDsvdAa7s1TDohHSE1x",
  "key17": "JfkCXFo4fWacjXyQHDuoYEkf6tdxnRe9CtX8gXjddJGeNLTZKpgvZcnBgUkuBCVQzxbEEdG242gMggku4VknPuq",
  "key18": "3vspHj9qWRFXhgTTLDBA3M3CSSvEcwffn8gBgpraj5niivm2AULmhsrsQuDN5vBbQHTtSGdrFx7TaS3UKM7SqEpm",
  "key19": "2pFtorEWhbokxbKUh3bvKmXfnW2WN462r5JHx5Scth9XkHGXatsvzTVcMHRS361Fzwx3qgCUk8d4JxTQcH2dRTVg",
  "key20": "4dZg8jULoSUFdmfewLEJzYafardvzZ2pmv1jCy64aCikiYM5scMQ4p4uUtU7qiuW4Hg61vken4xZwznEQJQvdTym",
  "key21": "4C3nQREGVT6KRvkNn5CgCR2chRi6aAMbw6RjV8TEydAnyMQyX3ZU43HBJKWMZXzcpbud5KyxJq11EreaR6yv3xeY",
  "key22": "2qqTMHeEBEGrtnZ81EaUknLHNMqm3xeZUdJDnMKvaTKstbF72fXiWdmFQdYREtnDweSPcMTM4JeS1f1A1mMa8p8y",
  "key23": "4MiCmG6phFRQB67Bgy5fvJmpK88qoRxfEs5Gae6GiKCZXt7DahQMXd8v153XQRjvXpFgkUjiUCR41KjW5kiKFV31",
  "key24": "4khoBj4eYRwzRmhUTTd9BmHAg7PudV9QE6hhbHk6Q6g75zSHWRdNbkxFTgEteDh1FBJDCoxZQPdbqo2WrXpFzCXr",
  "key25": "46EFTPpAMaUfDkJTSXjDMF1RjYwLfA126TDhUaTU96XYMCZZDZKiynCwRu4wUYbdLEjEgMwC1RmNpjp7iBbKdXVL",
  "key26": "1B6ahUN2gUkHAitD78kN82PxeFnFZ7njXmZLTd8JX81dmPaBi3aVYzEq78SitBB4UGZwjjB1DVoJnaTVHytcFTE",
  "key27": "4ZQqYBCh9LbnPjuqS2SvpCCbnh2gvDsxAB14ELMJ7qXFHBtjLys5ErQedNHq11dc2gYxZga4XjYzQfmG14AwcHmH",
  "key28": "XraWmFzdoVuQJ1V1vf2bFCacxqmYteRKqsk9TvoHdrcu9gdwc2y5DkY4y9BVwkrSRJpheNaQbHxLrcxmonqErGg",
  "key29": "2uSmy2b3fJfNCe9WKrei5Bd3MbRR9fKgLZPmGVUsKqmysx4avKirJUiVhE8tQeCuiYQhFQXYhDFs5LKsS4GNUUoG",
  "key30": "48Ena6JCg9o3F8scNC1JhqCS8L3vfRn6Rq4ZMRc9HppagRQKviryUNb4v3Ww84SmmB7MryF6DdNR3jj2a3ehbtZB",
  "key31": "36X3icBkVYUJBBuenThW5s3P4CiR5hKrTZYQLF6KvGXQEXmEnWeA9cMWNgu8Kr1jCi2LmZDsu9j4NTmz8q7csQee",
  "key32": "2aE8qLtnDkr9fjN4PxYDspLi9VzDLdxezR2kkPLcYD632bRBWcTeAXEKKDsVZP3LFWwdqVwAfC9zZhLsP9a26ve8",
  "key33": "4ua2eRQp1A876ogPiq3Y6qhuHsu6xdYjPpnq9qUH1oUAzBntyBYRwgCNSr4ge3khNaBJbQKg7jPheMerRpnaqRZE",
  "key34": "JwrwdoYVz8dc39GNT9CPvCPsnSFdmfJKpjWjXQDu13D5WeALgbR7v178PnRo6oSmQxjaMekUpCYXzR6NhrAMyUp",
  "key35": "3DKahWsBTkGh5R1dMHaaBaEv7QjGN4caYvRtEAuMMAmFE9emfGBfSXUMUouoV4HkPB6FAEiHnzwW8av5LFR96GSR",
  "key36": "25NgUiRKDmMi9J7Fu4J37VcAc5X8kVVqk7Wx1AadxJT7dxULwnGSL2DcCQHRy5bPkoBWFQc15tJFPnHv52WpreZP",
  "key37": "4uBF6Dq6deJK2az2YNGCDTBdDUJ1h96dmgVv4CYBc3h3m2TuYnjYphpCL6h6HirXSu1PiMnhLEEQEMkhQWhLXwh7",
  "key38": "43DBFH5QqsYEvm7t7TwwNRgeSVVxE9AfaGdyvRUJjyppdn2ehxiMuB5J9eT3iKwzsjrLi64prgRSTXDgto7S5mUu",
  "key39": "3fKHZkZak7eioHPxZyHFjCFRAYVPysJHwv5vHcpzoQKTEYvS62X9qK3bLmmBTVofgUZAr9aEdEYzsaSrMaATk8pf",
  "key40": "5T6dwb9ue3jHqoLQW1gMa1g5RDEuT39qDKbrSDgcL4WgbHUZnREdKuEfb1N69vTtE84dMtxhwXarTLmJmBEqvvmQ",
  "key41": "29vCAtiZ6fdAdGAL3xuQeM4iXE4FgTThNmmSaiNMtFJmDCMqyutJzHBhLbw7TF4FEzZq6xzGrX9ox5iMPixoWKxf"
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
