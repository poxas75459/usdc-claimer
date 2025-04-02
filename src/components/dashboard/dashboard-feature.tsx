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
    "y1PNZX2T9Ht9qPYVMzcky8vnQdhwPNkJUqD1WTtwfL2HnC9eXno1V1eUuSCzYHkW2Rf3fWffhvHT1ogFXrtyxEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTBL2yafRPKroomr9MwEKQju4octqRD4bVc8TaL1hHu4RDZCYXe3VZ5MpbjWqgpMcJ537YPyrcwRHVqfCCqM82H",
  "key1": "873X9R2B8Ffs2zHorTUkFiwLXkQoZg5xLpyAgLt774mgaRPAEmMbzNk7LPaEtJAjtjfyb9w98tNjsKkATo9KmXR",
  "key2": "4xBew366P8KGw8YfJswM4cES62HxJMbzqSF3ncdDVpvhpdFkHR2VqbTCGPX4tZiyxi9NAVDUH6fsLTk6qhLv35ZM",
  "key3": "4KH64qM5czpeto1oqwvs3XXZvGCzMzdDsK6o4sJoEUcehtBqZHhDucMV3qgAVjopy8eW73T4ztYWb5ZeUDsd63qc",
  "key4": "4qdTb15i8AVAvAjZXddCbHno7gGRoULJZ8EAs5zVRTczMCmQqUBSs6Yae4f5qpj9eSxyR54N2FcEiDVSS8UXjQ3V",
  "key5": "TjHw6kgJW6s3FD5o3fde4MJwh5XFNY7ze1socQdrKsHz41DMQm6RVULoQNZmtZvp6AtVeK7PMPGrbnNcpWC8Cbn",
  "key6": "ZxJyxqEvoTXpBXQfz2cxKb2n7c9UuTHtrANkVwQYP7oYbCoVGMFBU4sR8KN9Kk7T5SpcAMnYAEVirYTLpV62EJh",
  "key7": "28G6T6RJDBBVqSZ9rBxVcjbjohbkp3hqm7LE2sq7FYbstgoZvWARz2KgHXvJ5eFMyacvfgX7rap2YpBQPp6zUg5M",
  "key8": "2fYhdnaAF7R5NDogjbC4jpY7ZXbd63nZ2fUVYqxuaq1L6LUhNLx5L5xVDiijDfMn8Lu6DHkyivbKm34PW66tLT4M",
  "key9": "2yLbJnJsWmSiBakbZMR9YQHtTCfNY5zL2knM7A4tUEKn9MUnqubgs9RNEvZwfGXqsmcNKadVbpSDGHbKVrJefaqA",
  "key10": "2xPtKGavRZAHNKQQUyySGtTrLfv9Eu8ZWictS6tj6MC9gDekDznbuqP4nNMTZxPTYoDDaEergdT4RopuHaP5Nh7v",
  "key11": "3HWxJP1PaMHEizmobsnJujeqZzKRd72LJVfdgZYzmJPVz8LC4jyWViA193oaCUPt78Z969GibU6beWcC77VBxgXy",
  "key12": "4ERVaiyZwdMNpinTG8WCjoMhiq8s7qAXdz7im33unMWjJSQqqwKrbLR3WTyoxJRUvJu9DM5r9yBQBxC3RXPmNTBo",
  "key13": "4UHGm7oqmnj2h5FCoHCUTaynAWMzBTJmneTdkfy3KnQB5iEr3NwCbbkZLhLP9xA644Nqg1bcs4Aecfe5VKMN41tq",
  "key14": "4LZrvusdEkd1YuApFsG69aNHTmrRZZz8ahyYVEwvS6g8xKA7SQkA22J2reiGCUfu7sKfw6dE3tPp7tUvNRFXfLz7",
  "key15": "5YrMCBJJyN3FvhK3DtBnxcHMVbB9w2JHtnEVTgM3RJQAH3nTQMt8qWYTmfb5shgRQFgyaeshqwkNP4XVZHCxQ5fm",
  "key16": "M7MMjg6YH2zgWy4ip3PG3C3W3PrRQmeMVK8vFvwHcQARjL8Q5x6Y1mjA8t2Xvm5W6ejuLXreXMjm9QvB1pxcutH",
  "key17": "i1shYHNAA1kSoabcQVHzix4PpV8ZnvQDwKCENWJBHQzZMAww1RVbypzCmdqA88yTJKH6dFMLg6DE83S9T6fXycQ",
  "key18": "5YbeizrZffvYPopYrRv9Nkhe1aeZP5dYLH9CSvgzw4A3jrToquLBWMA7BtRZyQkpcqjJapDpToYHp2Ndmad73n2h",
  "key19": "2yLkNRau2ZjZKW9KgutWnemZCGoHeSzL8R1M3PVVTYcufrvxSRWZ3ZXmN2CgW6Ha5D4SYXespYNYvVXEqx1huy1",
  "key20": "4hxXSScBeyDP2rUkLPFyF7BVeMkjYs3tfy7Nuw1L4iHUHSiUGpzfpARv4h8WsfBT7gqiXU893ALVvV1dqdnanK6R",
  "key21": "rUWLUQsGPDMgzKQyxejHQBtC6KTJH6NYgE41bdCmED9tk9g2Ms1MMDrJAzBSUWxbJu78GYKf1fTgRQFZGgZpsay",
  "key22": "33vGmMbXzdh33FFQRPm4y9AgXPwHeQ5PcszKKNS2y4ubQBbGZfpmXoTz7EVQiBwYXqXBMt46qHXpXQTZKJSQ1DTA",
  "key23": "2EzaqSeDiLV7jwV28Sp6FvhGW4FS6MjJ5REmeWSDz9rdEiUEauQRZXcN6QQoYE4d4LGj1JaPS1erEqdXNyjqjMvG",
  "key24": "aogG69xrLvhPe5SLSMAen9d8p4Cnc5LVZAiaY2o2BgeBZC4vcn4DPioPYQLcoXiWDg3pSJVh9xGeAxjC3ZXftrq",
  "key25": "HZHsTeVX32AdbWToaiWFUSHhbpZ8vkv6KkrAgKQBZa1Bh9tF2zLv2jrHRUwNorEKfYJBCMvAyVCqEVKYKjiVVRX",
  "key26": "NFt76fn2FFXB9ixxacjrqqYN6y7AKPEQCn3htGWoTZSZaLLhC7yjP7GF9a5Qmk3kDyaUvdwvcRmoK4kfyKosY6m",
  "key27": "5ybhZ4xiR9vcETuE1ySTranbEiHmqUcURnJX2jBBdfs9bXxb2d2WHMsNGnBTofxPBTM2dsTWamNJBHUy7CEanQK7",
  "key28": "49X5CNnyLcCBJZ4pKFNVZnGb5zp6ycz7KpMHLYS62feS3d7Xj36Bz9XpTQiR9YM3ENUDJD7TqkSh4AZr1V4amquu",
  "key29": "2bcjd5omKZB1kS7qsGQPLAjuLAibjRpCD5QHeEFYxVhFzxkewwNeNmmYE55Tyoqn5ayz7TH1grb49jFNXQ4RQLfS",
  "key30": "5FoQ51uRFzUKzXF5q9uycuz41ixFv3Z1J9weUU9kYxa6wp9ggD27bdxhcJdj7tNzjgkK1fGqDkRtgzAvvYchwQEc",
  "key31": "jHEL42YE9htMtox4TCXpqGQtALk6RGbQVHirUxtMC6fNsFW7wnNQMgMvpkD9Yfmy2re425VvspfwLrWrifL7dLh",
  "key32": "4EFHeURoj612LJVttr3NiRkmv885c2fTbC3efSwKResYQwDopeU11p2wzbNtZ8KDgqbiBCrsdBHxgEg8V4UVNWsn",
  "key33": "5J7296Fy9VSC3vLz2rzNJt2XhBhPWfNoF1ZGMKFLiuJp2hhU1ixD193TqBRcUiQCDtop5JFKYL9duBvk4d9EALiZ",
  "key34": "3T3GVzDHH73FagkQ3wtPG2bV1WA2KTXSPi5ocwuzUjexRPyiN98asUZuX1VhFg1KKkUU2UVaoWvuT2SmsPVwExpT",
  "key35": "3Tc6smDdujm5VZJsynSZaAUoWVD6vqp52GYNWr4PkDScoYV6EotyHdKBHNp5zD2HW7kAGF7DaDXvzmQpij1duLMK",
  "key36": "3RtzsifnqoVe9jcgyrxMjj1fX7dv1yBfBGZpFjSXFzr4RXbxWq4eNMxFVj4ua5GyCCsEMVXoiTY4fNiVumTTE9w7",
  "key37": "2YLDUHkx8o7pU7PpeJh6CwArD4HCeWHZPoRDZtLqu3UN2ZZpUY5zmAiVkZDGoet9wapAgTMVRuSoPJfA2YMqapY9"
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
