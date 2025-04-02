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
    "4EGaKEN9KNGSpNjg7oXmBgAzC9EeCtSuBZKZRj2HbUyEkh3owrhVRztFLrTyESa2SePy1fP2hCkRYHUooYY5Hcrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cG3vtiFR8FVF1Q823v6dmpdoW1CfywRsV8bRc6hLiZacLLnhvPBqHkvSHuwHwGn4TFJk89PV5cS3nr8t9zCMUFx",
  "key1": "YCSGWxsicpwVGreqcAuokYsEeGxUJRNeouNMEQNpbPMUhfHvdXtXndH91MciJMGCsXCCJ73wiRhug1cBuWjrLBP",
  "key2": "2j23mf1LT1hzn1eJ5EbDKS4MzzfaDkTBjsrCLXJ7TcH4Jo1PWqBy9iCkxGUGHcWTyqw1tgd3m8Wtfqwiump1Cs76",
  "key3": "4gi4jPvByQ1sVZ4yrbgZ4AGaaeLT9YmRT2MrVogt12fw3m4vY9utL8TE6wq4UpqG1aaEzVASyffa9zgyPg9r6M2F",
  "key4": "H4ycY8d5DbdmB6MuzFPPfakZBko6JHz11ni6SpSSzYP91fqxArfqUtpdAnk9tcJzbAVkWA41fvjCMFYtK6aBC6u",
  "key5": "5sUPxC3WfauS38Xi12zSFtEtFU3zk6GDkFaENXJgbmkGPsUoaqcJwaJ2bkSh5rrZXNdhP5znyh27Ey9L4yWF3WVH",
  "key6": "4c4GsJ7SBNAp97CmAb5owuSfAMr3gyzw9C6wMHK4RDkYMdYpzWHAB3GzcM4AMuSn1Si1Lot32Y72LS5RiGr9pLZs",
  "key7": "C29ewaY1qF6yBC9bRLLYbwg5tVSNtkynWynK33CmUgyjPedvcs6nGja9h2wHEgg6qtb2VaRqfF2X6ZWpX9zsZoM",
  "key8": "484whhiYRYkNhvKvbhKnTEUDvKb4RWXXRVgFTY2UhQNZ8CPFREUs9EuyPmbRE5EFCL6A32rwqtCVz3jpDa4W1LSP",
  "key9": "3yEmkRcJoKVnKUnTDub3U2MEQ2RwuzvWv7KLyUW1gNuPVHydxEZpsdvdzRQd2oUAYGEZqcVtUKamcUYrw5udmZMa",
  "key10": "5wuJM9ycC9qK8WHfRTqVUHceoueokuCLSRio9USvC8Ss6kLge1gDojj7i37gKZkQLjrGqsWTTcKn5aWCbbVG2X6U",
  "key11": "3HhLmjfnoRxsZuSRX9K7iYfPXFAnpgUsCsEHa973bSsECgRcj3o86NNsgXXPyTsAkg6XS7MLtr9c7y65RziwhZYQ",
  "key12": "4u7true6rALtDYpqBygLXYSXwg7qDAcPg3h7A2hHZ7nGvRZoXBuinN4sRyDXaMnCYGGHByeFME29MKz8UPBujLBA",
  "key13": "57paXcAmW4irZjgXuMhTrNUN9XZsVBSu8TtnARmeygCX9vNhNxWYddGfo3qa7YF9Yxm8xzXpqP64XvVBBh2KQxtQ",
  "key14": "5WKEDypBP9FYhr1fM6cvpbXQcsY6XQwU2PQ4p8WMQiRjqTsuNrhVz49jJNJRhXkRf7XGzjbAJ3g7BCm7D7nbhAhc",
  "key15": "4PMVEA98auRduz92PYLXtxBmRY4jUXezz9HWJF2RNJRYo8NJWDyo4mnmVf2vvuL4x1qR9ajDR6R2P4FKFB2NLksG",
  "key16": "4pyExn6UYC32qNZ3hVNxLqedAoMSmXuMH1o5C7pVbECRmWFUqueY2H4ojcZiQFh75dJJLqu96jgACAczMAH33wX6",
  "key17": "4kiG27Eu2Gep34X6uwnyUTmdb2wW36nFarouYn4qpP5wdU9avveWgT9LY2tBHeX24Ae9DMsPnEAiVAkf7srjfXhd",
  "key18": "5fjggDQ34rTjCvHh9mdUWA25A2C4jJoECFP1cf2kGDkc4U9CjM7U24LhbCiav9wuNTrGuL6u1HvnbU7xLeZj7WMp",
  "key19": "4SBJEWPN3jxhLErzrZ52qveuemuY5U1KHC1B6rXrK2XpzHxKJWokQPnyHpF3xVQc8jyHLPVodDFA3bzRZVKPJf3X",
  "key20": "48MS62rhbsjNrvtoboU2ghTBb8d6W7jFpPLY7FU3LYW5jbKti95JpRsSAoCur53bNJV8ak8uVKz5FQG9WNMjfVkC",
  "key21": "3gcDmJ6aTfWhjbiZ1AMMnKfKUgSyjN79yXkXqpBh15WKfoH6UcEGk3WDUk3hEuiNGoCHucXC12YmYzEqc7KDaL4E",
  "key22": "3qNWoe3QfMtxQPqVjfnbJtcfV3bZgsYm8NSs5eT5qFGjxGg5xetNGkTotBX9BK7GiePLcPN7BweY9Q6snWhFqAmY",
  "key23": "2AnX9gVADjkZyeDt6CgU9AS66WktPBPQYxP4YY2aqSfg4BSh5Wm4UZ5CgXKAqnCMybwTkPEJ6B2TFL8xawgu9hdj",
  "key24": "4EiZLVV9fcdcSjCLas7ytrDquY86fFfbWo4GZ9kdJYX9GjcNVee2kbbov7AwS1fQE8CRXGd7TBNUoV1M5g9b1rE2",
  "key25": "59wLfMpFWXk5J9rW54LaQct6wqs5udRzHfQaBAqhn5cHv3fZm9teNnsYH3JfKRpVMuQp8cGoEA8o2topCuN8U3dZ",
  "key26": "3BhYUJmPiTfig7Mq6M3mXxoPR4QPMvaUiDTCbR3pJZPrvPpbSSQdMpw8UQUBoGPbCWzKtAn2Nd2yEvEz2MHw7atT",
  "key27": "4R3QKyoXiqv1tTpTMnnzN5gj9EPsKNkP7Eiewho3wfG4FMAVqGcd68DwfQpKFLHvczo6MCmLnGQggvxRvkrE2XJH",
  "key28": "3oBNGXb5Zex8Ytm12Mc19eCnaA2JarMA6UTWLZ1hv8fpLJzN9pMMBcVKjcEL6yrKK5hVLyq1V2YtqVwECoL1PNU2",
  "key29": "BVCTRnRTx8HJ4rc1qxfNPzYj43RH3Xj1qmdPx4XBbQsF9iC5G9kFGp5xjQ3gVP3G62fDWzi2Q8m7Ep8sGeyHAuu",
  "key30": "4SCqTbVLaJUY17KdxNbQnivzGCwsnZuFiDnUrfxr9ULpE3PQParLmrkvsLoEJWNySbGijouV6gRjK4i57GadsQXF",
  "key31": "4HRt4nJHHa28ZnbHz2Q5RdeVyNSrRwLSASsG4rARzMd9syxhGc1tJXKuxt8LFNCrPvURJNoSzgNoDH3VxJ6vNjgs",
  "key32": "4KkkjGKxEATHGVoQxxkX6iuBPXxq2MdnHDt52yxUALEHYrN8RmCbHmXUV6BBLn4s3totifvwcFsDi5EyVdQttZsR",
  "key33": "5f8uoWScGUkqtP3ejVwSPXuvLWrUnXDyDeNyQcKt7df2RPjvBFASMUhzjVY1WWxDcmtthKBVTdB4nc2bgWhWQ23o",
  "key34": "3ypamMWqdnSYHYX3umC6USWAeABCvwu4jAm9YX4qJo8hRrtzZpiRFBkiiRSqExWjWc44QGBXgCrYAMiTPTSt5hri"
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
