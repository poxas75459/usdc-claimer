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
    "2yaSK51M1gstbqJumJCgUxShFcb3iye6y7vb4QS8riHrgGqZ5tMvZazs9xmcCw3YAne7dwpsBJ2p27Hna84PvEVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpmK58Fa1Hms3YbhVa7D1cuvX7shvxJ1thjYrq2GTsG9jq4MdFvArgyoFtYkrvHcS4LGL7TYWkjcTQy7r5Txf7s",
  "key1": "43uQUVx8r7zmZvzUCscBmCfqykf8W36V9ZZoUisikYEz1c7LBd7qw5PZtWBdhFYvwCD5j9WNyU2eSrPLxJoeaqR4",
  "key2": "2pN31mUiMWCyFF4bF8M7CmSWHcLWim8ZCPo4tcbtXNAXNX1M2QPg4DcCbLyz2s3ZRAFnmgavRGXdrgpEqTHFG2av",
  "key3": "2wHw31U6Bd8GTnzbe3VTUmpjftXhC77ULLUPxsGngRPv1G7j8KRshL7HgqFpaTVGfyDLAEijaMt18deCCcfYFnBT",
  "key4": "3Y4PB5vompwtdQtBcRzMqPWk5qm95L4ZDyGVUYsZAakhz4p6sgmkbFaqxCPExVwTxMw39QKGYjjznFktnVcyJFHf",
  "key5": "itwn7PgK6v4o3kKBz9HMt53uLEYPqC1RRTwZHbsUJpA15XseM5Xy25CiZXXE8Rh73woMCAKej382GQMHkxfGMLW",
  "key6": "4aRrWUHoe3ycx4GHeSpCLFKdjPuiY3WpAFv7cRtNmetzUvLhNZyczEVe6cdLwBNEEXXnEX8pbXhWFwSAmf3YWHCz",
  "key7": "4Ttd8osHPN7AixgwVWucsebVgLYkXk4kgC6VdyjVVyRAoXVbnNsrMjEikKsrxm7WdE9qLkFJkx74AKETn2BwKwEq",
  "key8": "2aTL7cUbqx5Tgf6Qxz5iDWfXN6xRVf15eotCEqU6aedfVCFEpGkAAqQ2DtfKy4GzVFYwh9MDbP9JJbBbtu4V4iJ1",
  "key9": "79kjSZeVEZpUtZDrcnpAXsaA6XpZSK6xX6wHyho3CgCpdAxrew7uCuUvDv1f1VqUvGMgfWaayqNdjeP3MbVxHg3",
  "key10": "RsiiUNtYp7Xmv12HNACmPuPGdCFvLZUUo7jX97nw75cyvr1P2M12BJfC1aejcjuuvWNRdWBFp4QBJJyKPtwGAqh",
  "key11": "4DMVTdppoKRGS6Yyk3ACX2C1y62yrnRupsSsUnbUf1b4BS1q6pXGgKE9p3mSXP74hrmQKCmbeFAFno9mxMfY3RZ",
  "key12": "5icom4rukoqhw2NmNpuMtawCyM9BoUx1z2P6HCGtXEBkBUPMYTfSYz45GF1cGLxGh1twM1MafZUnar9B3NBUaAB4",
  "key13": "2TJZFNdn4bECjYqjEyEYKnUdZm8MAUWmcDCiE8vZxCRLydrBnEFF2pmBrR4LhwMf59qRuEWagDRvKNEdHCjXuwaN",
  "key14": "m8aFM292SqWc6ok58egjBBm7e2vA9gc8eQa1Csfe8c6vTWD3qwviipN3wHDb61Gj2BTwUhJKpR88YU8pbvNeUvZ",
  "key15": "2RMs85iz3mdoPWqNgyexEsQcCZR2ShNGXtqxXikiPba9CAPvtP1aPQry9i7cfTMQL7TkrjFAFfTCTeJp2tpnmNF2",
  "key16": "nkF46J5y9X7p7khiS5Zkz4V8KmRH1VEg7FMuWrnL69S6KL42xgHmmPKPF64vEPysXaA6Hpv2kCJe7Mqif38Y1xm",
  "key17": "5Pf6RUWNYVRqcaaBaRPE9QjX5t1cc8KhsiwVhzAWAvNNKEsddbFKimy8AYrhtf8Gjduk7Y3rgi75RebW9EReuR1w",
  "key18": "4HncFzJVsE27YssC41j8SsBPNwWEMH7hSnnLRakuMTUdCriP422XoWk5MN4CcNHW97zUU5c3ofDsR6e7s8iZads3",
  "key19": "5gQtFhM7kqonuNadE1KhQFYxGcrTYAYZyuYGnSMFHJUcv5Qi7u7hmcVxxJW9ja882K3tKhFMHUhX7hwNqUBvxzoE",
  "key20": "2Lq91qJBYo3o9QdvRtsxZ47NC2imjJ5AgW3gy3dZYC9z5hXZTEHRqjmZtBsRMFxAbCjfjsGoXoNtq1soEpsmcoh9",
  "key21": "Z9psQsSu4ANYg4ut1as3DveRANzbSTasrMZHyD6vTYMs7XYy4W7wp9TrziC7BFbpXfjCkNTfkfGvSQNMduLj1ib",
  "key22": "5wEifX8j5G2Ux3oaPzND54Gyzmo9eGp25iR5kYyEVDF28pV6dog1gSHdoefU6NSGLfhN44NGSqqHS8qJB6TH6jza",
  "key23": "2ByGaSbTDZqY4KjNzks9MsQRB9pavhpgsdny6C1QCVWK5iGLyy6VBdC6YrQsGaGSwgFC26fKdr1TkTntF9kqqQrs",
  "key24": "4devm9c1amgqv9YurPv9XafBEWTnue8Be97QJwmXQmmrcNr3vLr94EQgDaLRvjMEqFQYz5bidUB5jaKw8N9WJR5Y",
  "key25": "4rRirjsAJcBnC9988VuSwZ2BzGmvD99LJer8eR9g9F3vWto6Ga1jT5Sgwt5JkhVvZEWkMQ5oWZEzs2hSV94TDi7H",
  "key26": "2fG4WXBnPjtdRfvJkhy4JYmAj6UR9juKwRMseHnM2Udcd2hi9qKpme3WmMTrcz5jKsBa5tkHhVpV6djZeAsG2dhu",
  "key27": "A8kfQTi795WzXw5N6QW868RY7p5Hzz78PHNEERR8kVTxn3CBywqjkjkk1cNGtRoYhdDXxvJJ8arWmEgSKHgj3TB",
  "key28": "1gWRxivjjGwxoRQ72SKFPrSefAKEmMtJfrvZuuVBPjn1Fij7ZJw6MTaDh531eGqPgx1KHeDG6fSnaRxGm2qHXDB",
  "key29": "2sHMdLnBEVdHjWFA1ViZJqtwPTQi3BDCrz6Ye7XLemVCEKAeoFRTGFuhZRjVACT7FA5UiuMC4N9b6NCsYC66qTwj",
  "key30": "5Gq4YQriZQh7CuqumCacVpYr9w5Tev82uTtZR7cthNCE2Qatvgn7fGHiHTqJnuVf4j7PZdtLX14JP5FYamSstKkL",
  "key31": "4PMNHcEYYUwiaHcpPCRjJ39QrxqxLt7i6WnusjSL76kp8e4vXzd3CTc8NVwZrFLRrBY8ey2CsK4Jpwfootr5HX8Y",
  "key32": "2T9U51eMWj2vxGpQoq1h91yDLN3TKwT9Yihc9AdBZJWFvrXneXfFKSbnW3rcFJssLKESMcf2HC7VHgMemdxqhNyE",
  "key33": "5vgPh1Nskegm74GtVW3YvqJGdV5pnA6dMipZJ2hgQWMXdWPC15eEaetNRnERaEcvHTUMgMzKEPizwSCfeye6rdSu",
  "key34": "5kY1yZr39uHRV9R2AWvV499n4SYmpxWnHGndjiKAWaumDZ9TzcERkoEXPEpPYuu2xeMUKhwMr2dGmSadtEw4zUa8",
  "key35": "3XrxBB4Z7axnsFvypT1mfqW1whUj7SjyWzzhL4AGdPTUmw6uc6Wbpx1NXMT22CgQpU3JSKZPz4uUypVUiJJXC6sW",
  "key36": "3UBgkYCyLYbhcdLC4CWXtZoZZjQE95tm5vxYoHTg6EHPpApJTvmaWabhzLACX4rdEeBVjsksSC3fX5nu9SVCe4M",
  "key37": "52xzyuVhxRPR7RkvfAh7naK2zgsr9MjDb8zWTnDZEoMRCar8wJZmC88K9qEL7GANG18V4v7yYtiKt6oTuE3aTCNW",
  "key38": "4vSbvkSNmJfBnPJWePtHaScz4BPrzKjLvisyMWAQrL2M28LZvk6npmspBwG2axn8LmxkvR34xYqtAZt5CGoUaDyf",
  "key39": "aCfZN6pJv4b6gdbST61TjzNvZDFnqe1GXRCeN46VwXT6Tv1h9itQcMo1w64UWE5K962kXd8fZtFZcjKXPwUkJRR",
  "key40": "4KdLgVmWLWyjxeWNc84RMAXFtY3NkPQrLLTQ6MLNpYFzECB7td1EH6bDDZL3XV6Scp68peVGSSEXYUzY6aJQpDy7",
  "key41": "4dcdrUppQmEwaJ83FoGo1yp5gP2Jt5FYr6L5cDrT7B8uB9AgeGSVZzVpiQTCFw7vKQ25Vs1kDRFqYMGfsxaU14Sr",
  "key42": "23L3bx77oW4Q9wyyR36c2uPfDxkhF69gJJjjqHuWY27QYpVbf3kRECEun2fw7N89NfrQGENXumhHQ3DfJWxRrY6e",
  "key43": "4BzGMxWchRjmMMRUbBULM56txqw5SWsp4u8P8VorQ5kSbQN7MGuHxNtj3FQWEQp3qQgVfivaEiyB58s337CcBjm8",
  "key44": "2PkorJC8CruFfYBrkznFtnwUUTp1MvDnJdkBtU2BPZnQnvFZkqzMf3gfzW9nobi5fqrJqsGRtwCb7wdCnyT5hcbV",
  "key45": "4KwQdiiN3sXNcmXNLjVUXWVLEz8AH2DtVaMcCk9qcUCAnY8iwhyWupzXBrkvXSDcgMjHTmTdsdp1TTfUaBQA7du5",
  "key46": "2QhfHcgr5YDB5LAgtroGBGgoo6m96DWEGYp2VDoFA3i3enFHETPxM3TPqPjv4uBQmUqABoJCtxZbkuBnnrvAW3Rz"
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
