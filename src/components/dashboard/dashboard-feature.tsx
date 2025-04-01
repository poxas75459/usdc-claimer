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
    "43WY7Wujny7tcwP2m4U9w4ggR73qfNRaRaEvEFDB4SX7d8y5J1huNPzZ6SExbJoZs3a2fNN5FP5JryX12g5sdznQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rR9SHzzJvZc41sFVvVDSmA5H5vKmrPYn7o2KirYPkpxtEgBXsN1vGdUDeaqb8YEgy2vjh1HSjByYQGDy96JdvJX",
  "key1": "42M5StX55L2GQLbPNZpGLcSokMFhrVjhoLQoSfsPLR56nwmqeRbWWfUhTEfemUqh5U73AyFeAKcGsmC83XcbZcTT",
  "key2": "GdfeCvUtipZ2hmcLsJaMUpKACbsyPUwTZUHtn9rpvbi9CS9xx1uaZBZ7wTv3TcHiNPfPWYfNAdyz6XLaUgokDKD",
  "key3": "5Z1fBWtMSoShtphjTSzbEsiQmf1ByEFe93C6oHi9BNxzUuqHuUojPNH8rocsmDbvr8dpaY1PCJKbcNMCnFh6GcvP",
  "key4": "2ZY6GERrS3TrwTzG6WuejEP2so2yRoi2WZN7FC96dmoZeB3dKdfuJBeNuxpBaxvrzXuPZnJFGLoiXpXamjzbP3X9",
  "key5": "3uFcUNQeG6ZvzuiWeKkUFgAnBez99FeUH4iPGrieo6QrqVuj45y41wn4XiRF9qwZn4SqM1sJMB1fVzcX2Y7pPSLP",
  "key6": "5sNVH3LcbK8FHxgZQubxaFvMQin2i1AWuLJJKf83YJGK3WJefYhg8eo1BkmDTWAHzsuv45JbF9uu1tn3n2jm2Vi7",
  "key7": "3qdVh9hSz2r8WJRGthBpW5m8tJcyyqBex64TzgDposoDT7YFagdmpyo8CdanW3ooMhbMsaJowYw6pq1SEaoPsEYQ",
  "key8": "2WuC3SfMb9JD8fM2xU7Xdytsucqqno62EYqvm74BY79PMWLTeKhQxVuNJbL2pC75fw1E87qMNwiVSn5RYt46FMDf",
  "key9": "1ZAPPZfGMzwcLSvm2LnhaiVDVueeqsaZ4uskPePEjA1HkEjm2SqZWVig5AZpC3QLUSbWHNEYNBeY1BfynZfXQn7",
  "key10": "5ZMkY3WssA8gNL6UHLeZLTVoiAjbJBequy6jEne7Kt6PEBMaH5RY9vtv65HwSyMbLnMP4TwP3B8vB7gMk5T8LamB",
  "key11": "5Tb5ez1b4MynfPdrnb8LTB1jYQQaboevDhJNjLkQ1kxd8hrf3ufGAp3RbCo1SjUyqXfxf34agQVnBdz1NkFooPHh",
  "key12": "7xAFLD3grbtwgAmiM1h5tp4KCAAmq9rZsFwFy9UhYPm3w8oCRtnGXrK5YpSb9aU8o4QfJJh8wkSckeSyjyT4p9U",
  "key13": "22GEpVW8yg888oiDF6KnTqFW4avRogZPMMevxEyMvwRb3vv3t6TPJVgC4PEVq8jiFuQ9mqJV8eXTPynf5pmrKume",
  "key14": "2xLQuUKpURko5sZijNVwf3A6AM7gKZUZ4WzTccQoZSRAbc6ofKJuNPMaLa67qLTJoRAmBFiaktUZBdCPveSZXCrQ",
  "key15": "dBwUFq54QMyvy7iWjd7Fpe142hvosGXc2vPTXErRsCwmGETRNy49YfWHQJGeg86nw6e8SCEg3j3QQ3uXdTi7xBj",
  "key16": "BT4LYHW9H5QWzhqPyKD6yHWjUZPFFoH1z3y51FyXHBxxLzS8Qsh7kT9uCsyKfHY4ATxKePjxJiT8yFuP1SEypfW",
  "key17": "CaQtwX9nzCG59Sicg4m7PNoVHFzkt7sBXyqb5vDYFpLhqN6WL1zLHpwaPQ1Qfhxq1AvcAzPJQfqvxzGiEgfuFqw",
  "key18": "2WZQWYWopbrszEKbDgXhALzj69rJdzxiJBNDrzvzhg6YKtfFtL8xzsyfB4mH7uAUTMDSg737wG5miy9haukRdU74",
  "key19": "24evUW68pju8fEMhGsD9NUbanjXL5VdgC9RjeEbdu59QWs1iTYGkJjx1ErBaQtSdp6by9uEgSgUj39Es6BjgkAXg",
  "key20": "5Vx8vAS6cdw5z4C36iByuihZZ2jiGebS6gRV8zKEkhMiL8di1tYe9yCnV8Are8mSzM3Suk4YLySkvQsGUgz4PHt7",
  "key21": "5hJob62LccF3eUuHdUnzZ8U2jvfRaCX3p4fP84FCCdwjFXs5VdQUtmn7FvB5Qyt8hBG6fvA2Up55p2j3QPQdDUXf",
  "key22": "No4mAJhpm5hCciy26eaWmKaszqn7xn6QmzxvsqCyak1eJh7PYhJc8RbxyiVvAt7kQzFfgQ9sVyv8cPKEHudNPz8",
  "key23": "2vewF2WYrkWtjsJPKKqtyM4SLaSb26uUVXVqgR8ej5rf9TuuQ8f8k2twctaRtBaaP2hXEgMUqWfBvEB3ivb8XJEW",
  "key24": "3supbtqvFnuBky8cuDZopjJWeHNVo9gMxewFVxD7bAiEghgp2DaqP2ML3TQWmU8GRHzTYEH1zFmvhRq28q6zPa7v",
  "key25": "5TZHmbBqUJ9tfiTgU6Ae5X7M2jXfjJGFo877hpAASfeUXd22zf8VtHgdmAyfmPJ93T9hcjCgeX8nTovFRPK4VwCq",
  "key26": "bBKKNCw6KWb9gFfn7A1mpXqCA2e6THGD75m1whEWeFhyCkantF4LybopTZ8dcdi4VxmU2GdWQAYJe694LyTKajV",
  "key27": "DwC2XnUtmyu5HN6FMaAX2D1hSxxeTP1HCaxfz1sePLc5pgyoXSoLJMmHfjrJtuVXceAYJW2djXNmNCVdsVwFQzL",
  "key28": "5cKuNc8v9kR2Niit3LWfWyC6NRLUh9AEezohaaJXnmv9e41CPSybpJoZU6skdrVpwPSmGjDwbHZofSrwukqCUrzG",
  "key29": "3FJEv6pSiBAWCZJjzVMhmhmc67bZmU6xobSqbwvW8fTZcksA5qA1cJHUv8q9YqPeMS9P2KigTKSAsAcpFZcYVQtP",
  "key30": "3gCbCDhGs2URTqwvo4SNWStPL633zwzAttWdtRWjKecmNENPHJ6GxiBqoHTgCTDXAUueG54WF3KfqyqdC9P6gvy5",
  "key31": "2uHrNFAt5wm1EWrF3ar7ESFafBtm8dYgD2tU52TkFgbYv64Mqaq7VRKGrvHM7vfzijn3JLjutNfdTq6vEM5AUEcz",
  "key32": "2ySTDM6MpdGQtmacWXPbP1wHUpWNBoiYDnL3R3JujB1yG457HrZzfaEpYdes3tuwtZ8LwPyudZKDAQACojQ8XCXH",
  "key33": "3CXbXWxrpLM26Ne8oE4mLXwchqvUPMqrWqziAUuB82DMvoD2kamiGdV8MPKQfPNBQYBd9kSD76A3nCaX9RiALAqN",
  "key34": "5M9tD8A9cjRbztHzonsASTizByw5V8xKaVwMi5yvu5mpYnY83qG2n4FPq49eDFkC4EVGyqXuqhVdmAi7ZRY4Xy4L",
  "key35": "25CNyd5ZhWXE1ETXT96PfbSF5hy1ox41QYyQrvj6rYiJkmwfsxdW4CohnNMbvPJZjURWaqeESbjwajFCb8VEXh1p",
  "key36": "2ZPe39DKkCfJQjANBRDzVrqe4j9XGMdoGXMGvghpT92gP6abLqXDjnjRhjRdQSZ3rCAVm6ZswRyiCtiTZ2t8MaSo",
  "key37": "2hSk51pMbtnapF7jakksJo5xSLtdU6i9ihicNMYZ95PZqnW9RiaHLsUzj8WzGJbVtYGnu1nnRdMfNM7Wdh9Kka6g",
  "key38": "2dF6jhDFqDZMLBr4Hi5F8GwDHGpjPYGwxpNx8Go7hHvWkGoRuDUfmmrVm7fYKmixCvp4w5fBsg1JnePznsjHcKwK",
  "key39": "5MohooFbQJh4HWPtcDAu7TdC429rxUpTT13qiX5DHXm1LFTBm9rabQFssrxa2Kj2Ejw3Qj6inyL6BWt1rFVEjgUd"
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
