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
    "KU3WNUyR3SuLjfs3mGjv2iw79zExCBqTFiqJ9qrc3L4eei88Rp6n8Nr4kJuiPieeWDf4PV3x6na1P7Uwj75tW7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L48T7WjwUQvV8uL9KHHoWaDZ6ExvBduVs2YcVds3hQMhFyBabj3wStdyMWUbVFgbbzDg1CebEwBdW99pQKSDp8g",
  "key1": "t1bKZvJim4EjkisYtAeUbcARq3uvyHZLxH6YWUtmzJQsWLQp3rDLXSHD7i9zQ4r7oGQfUnTBTGpjib4rGs2Gwzz",
  "key2": "4qhaLSfuAfvXSPNx9yGcJhxXGubrgzJQf4jer7hxk2aKyQE3ZyszShqhaVCq3efqcpcLLJFEP3JQY4EDJbz5Sd8C",
  "key3": "2zTdHkqvdyCAi9vhYxHsnfkPu9n89DiW5aGasdUoCiFRe2tMz49dADyrhdi4kjDYZw6uThs7RrT4yqyjbch3mVTA",
  "key4": "5HxajfSu4pb9MR2awKqCMGdSZAPncfVXzP3q5RXjQG2oyQcHzsWHzivWMbEW3C875vnRquuqZCYqmE1TtPgLbBtJ",
  "key5": "37YCeh76YGkrfs7F1ozMWJ3Ykc9yh1mXYdZFjsVxMgyy1fKvMzKnpsCdGkAcYQ7KQqY1E5hpbEFiPJ14BeFXFHCA",
  "key6": "2sGnNdrNs2G5W1Mfm3YNTJXqPpnBbNDZ5xfE2TR3eYBcAMmXzpkoermcQBTTn9Lu6eVcnd8y3siFBgJKpFnUy3Je",
  "key7": "5VeLKJS6jmc6z5817WjyRca9JuDbVq8GQEnoufU45eKvyGzGPUwnha5FjC7aG63iaTiQ43NCbL9YZT6PmB4eTWTa",
  "key8": "4cC7jBiitHwkR5YSihtvHTetFhUy6AdRYQTretMEX16CfgnJNSFJB9n2L6z8yfnnscMGmGPBcLxSS4MfPYUVrHYu",
  "key9": "4xv9PhxNq65awXqoZFTF7t9q7eXkj14xiy4zkrU3maZ8RaGZ8inpXYJ1HZ6HqitFcvrCSBgUSkHv1iMJBn26SMfV",
  "key10": "3F381KM7CsJ5VdERqutDiyBKndJG8uN4GjC4upYJt2fq8NToyyEAywCm73dMNScmgxzAHVRGvisLX6GRyBnvubKS",
  "key11": "NAttDdiPt9UHY81XHfdQLkDRq5RcFKpJMTbCewo1pakEUbrawqF4MVqUfTTd7iJCymR4A2BbnwdCmZMu2MSA2u4",
  "key12": "3s8FzqbYqNVcBtrnWcPYvv6rTsXKh5kSHeojdiwuf53vmdcXzKxqXUYnp6cb49idvZiqWKvokt5a5jr5Bno4VcSq",
  "key13": "5JvoBNWbPg2QyS4udQtaFxgKd5ZmNcnnkXCNmCmbc2EY5K5rnyqELj1UCNnuwjA3JQHXrDcJqPvtRdb6Spo426Ly",
  "key14": "3kpgAZ5EbU2CWyB5cys9Nuc7u1Pz3A69kyTmuBgxP4cFntVDDqQzHPcCueWjHvT7edaPvsHSutPZsEXyJAA6DUWU",
  "key15": "36S5enLgtXUVoBa7KngdhtZSGcLcbLcxVM6jFatruGE8XxWMHEqADBRjfFboSXqb9ouSdavAJLgcZ94pEYcmk2jA",
  "key16": "48F8dgJSezJduuFcRrwo9yc8qBdZBsxiNrcdnpQ17yqXrF3ZCipYRNvvpDaG9MxaZBV1Cmkda1qx3VuRvjf6hzwu",
  "key17": "3MQTLTVWMJvJuuXdY9PxLmUoXcxtAycnw88EVaVwwT46DYXKj9QFn2RfcCwy7tWqz3SeDk21WCu3N2AcsVY9dkgh",
  "key18": "55HmCze6CWyn8c73nJJH9pdUN3SKB2AqAmkJVR53WUbsj97irAVMBUDNY6o4ZcjqoZgpqV3SMwyBFbRimMqc7svD",
  "key19": "3jimVT5AAWUmjcG2Ksrz3tWzuG5JNLyb1KB5aRRE1GX3k4MXaCL2nm9EZjxWKYbFGh7PcYwW8PLga2DKPRnfUjnf",
  "key20": "2hQ9diHiLhgked3KCKbez7FCsvDFb9MG9mqddoxG3VQVHwxzSrQVteGrEBoA9Lw2VFzE7a5ReQ6gzFDA2UnjtdiT",
  "key21": "3RoU8FRUmGY8VDykpQVCnLxKx3RN8mmeqdqGbbooajs4Uv2tzJ19wTvQXouRnFyjwyWbUyrUCB4b5tapVt8jb3xk",
  "key22": "2W7o1eKj3jMVHbz57c82rGBU4JvvniWBEXutUBvLwcjLmnwvLU9gXKcQWK2QpfuU1qNHH5W4jmdJkv2MKY85V7U5",
  "key23": "4ePCkpGcjFacZGxRh3Wpp8ctCbWAGyHYsToR65RP4Lnsqm6u9wxu3LXYoPwxpFJhKEt8mgd9VNvnESnRDuF1EhwT",
  "key24": "453T5QPubvSf9nxkrM2kUGFD5znzYNDNn6nGSQew5bLug1nNHrBfgLGZMH9T269p3mAF5ZpNTbEFwVdwU2xT6FzJ",
  "key25": "s5STqgAzov8Tfz7PDRSc3PGj8hFtAW7pTpGpAAQYbEhT2fDYRGsrDqcdjk6FQ2PzJt6rsJPoyZQVyF2rqpz37a5",
  "key26": "uh94sqNKp6Naa94sksgEHXfZyLBXrcXsrtC3UJpTaKJXS6g4dU3Y9ZD6DNjRTHjF4vQgv96VpzieRSzD6npWEXR",
  "key27": "4bzriYuZ5LUhwZHYpYCg4EV71Q3YksoW2kZGEqeg7LR4rtfFuLwFu245YWE2cdeXZRqyZn1uxQsnpyyzzw4DdL3f",
  "key28": "4qinBi5sijuMLnsPSydf6ZU4QnXifCbxzmq5eokqj34c2Kx2q7XCkdaa1nSaV9UWRw25j9xB68znEnoTWKSzTrYw",
  "key29": "3Fc6X9kbPspkUYBKMq7rq7y4yS8o4Sepd6fetDK7o7XHUWRDFnWXjBvr78bPcUAk5QarKNrijA4KyXXD3nEcK8uc",
  "key30": "2zRnNm6WEQQ6C3jhaiRapSJ1xpoKGn4dnVuxKeJg8ch7JMPz41YUnoNcyr5dEfhntmS9GTZP3KkNcEvvrQmCCXuW",
  "key31": "5Y8KKg3jcwKdmVD7DAwpiFszXXmoVbHQRnCPZRw8uNLCgLQZErP24WYW6rEbtbkDRuCzkkRv6qBqwW24w2NS5B5j",
  "key32": "hhNTNMCAEm5c5m8Be7sdBjNswUix9mPS8UhN76FWpbcPGT7P6j3Zu5ysvHdxCWiaBdkeqRRxD9CFdc6JmPqSqL8",
  "key33": "5hS4VCrC6e6TE3jgS2SJScoLAVdbrX26GkXz9aeR4jtyVv3sqxZGWdc8oRWZLLF1weJNqk36mZPgVBmpX7pWRQGt",
  "key34": "2jAk5QPL38xDwWuqWCrQMWXWUcBP9JZ82gGKEoePW5Ci9BphKtbFRpGRPdtNG498MMsa1x1bZVBKtdq2YtQ5hj92",
  "key35": "4PcdgDEB2t8hymeTu5hje1K9hit2ioUc3jE33pALjVFuRpA1H9ub49tRzHhtgSXjtRmLtiswrUNfcfQRYZHjckj3",
  "key36": "3qVqDkWKBqUSQ3uzHAKmfhHZf2YpCmCstLutBTtkZFyTAFPRNtkGXQNSerqNQVdefbGiaJoKFSj8ESmBCGePCGro",
  "key37": "iWYBnkLWJatwRrspeitEXENgPQcZP5Hy5kDfVc7rVnJppPDJRqGJQjuoNew4o3hbEXC88Lij4m9xqnZHgiztRDX",
  "key38": "XbZaTrKfL2C99dTaTo6YuDB3CXXnpCNmgk4xZpFooZPkAPNMreReend4YZQtpNgZLLKDcG3hfaxgVUJBuM3h8Gy",
  "key39": "2x4gUNF76LZ3hC29rJEKR3KjNtUpBpfTcUCKtVhjkv4eG2fFkwHgyejP1fZX5G3MDsbZpFDqujerUumXG8WCGUVC",
  "key40": "2nzt3igTT29d8n64tE7DPHjCEth1FJBJJxar9Bs7h8FvnvhbqgytqxJhi2Rz4sJnK9koHBzuQMG9H9cu9CKftjf1",
  "key41": "5LMwGtXEN7AxxQ9fdxWafaaWLJTPV222LBhkYioNPTYzQk67ug8NjqoUGgX64dw5JSHaMnJzNCBHkgSzZEP85jT2",
  "key42": "4WLLW2Hwe5HU5bnotfbhc7YL4k9SUHnaZrUHLPfs1kY7s2AHx6XkQnj24qzjKZZnbfmWXFSak9YbwENzZSoZc8VM",
  "key43": "3TERPqB2F21mzVjDEFQDB8ZPZGq7LNV2ahUa9VaVP3UDT7WMvBZAr3Vb6bqMy24Spb92XiEqBUu1Lff5KDm1TgCo",
  "key44": "2GE8vmFn1g7CmJ71kD47Z8hGgcE5ZYDTDcHYbK2m9ZuZxDhJST6Ju7f2hNwGWt9xpJdXCuyRLnDrJ5R8SkazJDjL",
  "key45": "2rytDQzCZX9ZjwzKHre94f7iQDfzUgJRnNM7hXsWpVBUxtbQh6NzVzXnb9qsEwvkvPuGKekNs1YwsD8FjZBGQWkh",
  "key46": "5dsTm5z4hbb6Z4zho58KvAcKUZx6RnZ24e62u9LMrDmpRjJKpgKARP4ccjcaDAYWLFpwvWB6y734S9eRe4s76pZz",
  "key47": "2LJnh1WE5qw9dYyfKhrjHNajb74auh8r1h1uiDttY2MjaVwXAdnncith4RKm2Uttyh7d88BT8SncovcabrNNWKGo",
  "key48": "5kf9eQ5QS2yhRhwwBeXrAtGNqDJXLokVkyeb2cAZXzN2Y2SPADTnPvjtf2F44Uybchaz2WszVrzXHmF6rp8zy3a1"
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
