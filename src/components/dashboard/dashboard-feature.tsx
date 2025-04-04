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
    "tfj1HSyJRioVuVeP9KupUPgWXZCanr5V2Le9RsuLXWUQm83bnanA2Pm35TiEsmtADhMqCTjcmEKhazHppu2CDXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJJK7TZmLd41BgFQ28QaCiK3mK3FLPP3ro61Ys79gC9nXzaby2Fp8FM4rjBk6ChJNtduwjKHSj3YjBKbLA86k1h",
  "key1": "7yH2edAHXnevJRAJEGsGNBnukw4Lqi2jNjoDVF2FKap3REvgPYip1EuoJE83pb2Hety2PDbmMP7QDJBkjLbzEzX",
  "key2": "aHEmWmKKT5n47BWzSVrtGPiDi1WaGHUxErEBkrpq4qVjW8fuDzzZkA3STFtcnMt8SLMytUSwpGv9Ki5e67u44j3",
  "key3": "32NLk3WhdBX5iMdq21E5K2FsaL2S3DengubtvGf5ghrMrjdV8bJsywoZd83q9PCe9gcnufHswof2yS61va4b7dYn",
  "key4": "2Nna3FVqxtpJNbrNak1rJnX4WTZHkwofhMnrjLXjsgNdhRgJpft5fpwvaCwSVGD1pYptSvjxC37rVZTMbmUxDWfc",
  "key5": "4EAsXgW1zTSCmfmRJrFgR7hxozHodigNNJEp7EUDhdMCzbTY4oLwPhnoGVKC2NNwMYtKDgJ2qQQnTDg8Rq4aze8M",
  "key6": "4V4tTkmMsRBrtpvDKPE5SiSkDRZ9PuAb93W38KVAwvrwurmQxwabTxovdd94Vt1WM7gYzy2AFjgbKQ27b1zGbJrA",
  "key7": "7ozLFvrTMLBGCZeWqd6B5oAtBEuYcLucrPAWtVL1tpYHMCY3A7Xno7HZsDNtbR8nAeUwFzRyzz3oVJtE9XD5Dod",
  "key8": "KhsnbqCe1XCdr8J2epEy2tNWHm8SyYsFxVTftMfTtYrsaeaLa9h4q5rDtUHBFAxqKz8oTNcfprSpYzzuvT2sqxb",
  "key9": "2PtDdSeUmspsKs6cP1gXdKpXFgToB3xAWbqXJH9uZC1EtHZhUYdLhySHzjLT3DGfMiSvCBKLK9VxhYMoR5zzGkSb",
  "key10": "38FcjFmPmPFzrSExcDtJVbTWunvcX71PvTd4Ka8e9UkHDnwsLKntgzhLCuXCG6zrSYqAK1iLZwfc2NGGGuAuGZMD",
  "key11": "55hqBKbLjfXKUgFGRgKAGQhUnnfAbqjGLyt3CfJ9Apui88k8QrzVdST8FktKLmNVnT594mBFU2oj3h6oyMe3dmG8",
  "key12": "51HTHbjfrMB7hz22ePGPsJ9bagLfmU8Ng13rVaR3Ts9Np7GQzykfmJUaWHybZvJdWfe8YdDvL54wUhGLZxnYFowd",
  "key13": "5zeVdfgjLApLWR76YeHaSnhZnqwWCwRxuJL9J1EHBnnw3vD36zZWysj8XEpy9jKQdk9dWKaHqeibdemw8Lgt6kSF",
  "key14": "4uWJapQYkcvXQQYuV7W3fz1PfJ6xAamvv8esC4pNLu8hpqbwuVHHDq9FdpFZAGAeYtd73EBHs9U1RZ3cajdT5ARd",
  "key15": "2Dh2YukmA8ivyg1f3RZGRmE9WAxQFeJBJyr1nVk3gfsjYYNZDhkgchStbGgPzhHJ65aVQUQS4q3pgCUC7RCHXCfZ",
  "key16": "491tpuqZ51DsNNYRu1AarWafkCmn16GFMd3Ev1B7jn1XrLfSMY7VKeqfgnvF2oQ9bE7aBLMnPc7HNZ65SHSVJ7Ut",
  "key17": "3B7E1qMA2fvCeLdm3VvfUSMTWQyDuQQib27iqLbA9fbTPUgwSALjqrBdvEA8ytSdrYrnYbuzngQGrnd2aNY4xfej",
  "key18": "2oP7iXcQT2j7RqQnosLgpbH3rxzFDyr2AinQMQGrQoiPdFfiMMpWC25KgDp5GfHjPvqe8Qd2cvQXDZRJtwSuoGdv",
  "key19": "4QHbi3JpdpxQjacuWB4Thr85GRDfPo93kTKVtbekHH286KrTJ6F49kCmhEy6FYNZJDJHHn3ub1L4p1oRRxp5mtVB",
  "key20": "5Qk586zg2q5qhxMAhHuvyS1cJs7oem9P7z4B8UuR3Zc93Z5f9NsVfBbU3JwZwmhvw1EajryJgZ3y2EkLSKa8DPTB",
  "key21": "3ANTrc8ajC4vm2CREQ4FBTxb2yhzUED7k3FFcVtiVxeqGTnqgNfKLroA9LYuQGwgwRjvcG47eUjzUktCzaJwnr6L",
  "key22": "71iWu1tkY7HGWT8q1tRBhMV2zMsDoutH4NRfn5KP5c8reGwWCqNvq1hy4bBHGH423Sb1DSAHnR1HhKjHF2Xfu91",
  "key23": "3Sf6qmd4HdtHoRuM5hUdtihpL7sY8vEq17SbE4uFvLA7Y9eZMUzJSizQ6r4YitD6iyRkvqJwTXwdQd6VDHT59bfq",
  "key24": "je6AEwGKzRpo8ZqLVTmXqjyqVQQ5f4EPka4Y5BAt26BTgLV4T2xK1eZP5nEfPcVRQoRERzaeVZrmsd12DsLbnsG",
  "key25": "3ExufXqrm8eyeRRzqGnerKZ1Cwq2URwHA9LisgKDrbjm4o9ANC5B4kjebME3NJLRYiuSDn5nYkNaLm8m6BW7rddS",
  "key26": "5A5FhfVSreH7uxVrWHZpu8Gav1ifMFwjQfpiFzWB6mFYMKiPkLnVgomb2W4DtidCcJmCc3E75Pc8Pex6uLxq6spq",
  "key27": "51rDdGiCNvjWB9B2enND7UBS6biPD494jf3LgiyLQDGTYsP4yMMW6H8njMejZVEL1vseZzQx1pErjacLUxvynwVJ"
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
