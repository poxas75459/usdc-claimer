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
    "4W75BzCUWZMyieudftQ69YJViXTDAM2mFmij5uvTEoRfKs8Du5sZYgmFq78MKrHNSvkBpYJv1juAp9XPp9JUrYxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34WPFB3FQiyoCqGzbV7xRPqEqpsJzBdV1yD7E5M7L3wHb11yt4E446h18uet4p9CdRVV7GK517SG7gyJ1TcfyMPD",
  "key1": "5FhEjDDiRSKatVK4BAAV8KijTZhZN8AkK3KoJhSFkeJLUiRWAPX5QmSMHw3NsrrF8WSmrjke4hy88dm3Z8BtEP3K",
  "key2": "5dTk8KYJfA3GUHcMjDhUuN3wrtUiHr36pWDmaJLjRgRqFoCV5f2V11KKT2UsvabmvgetNUjzh9AcmkdhxaGD3GWS",
  "key3": "4x73rDZMMzwz49yhnacd9fobNiHvd9bbPBg1fKw6VViq6DSQgBQenZFCfiKWa8o3bAPVhsKTwYMkm8LidDFVnqpz",
  "key4": "3vbCpFeLPdEfmr3UpDbhmpfHd9fcepoQvXCyRgw5HqJYepqwG6josU6CzXjAwmYfdn81MKoVDHEmLEAZY5Qatfrg",
  "key5": "44zUqDTRQ3tNPyNoqqxpGhcSk8xofX8iMuEjoDuxwMf8fnEjm5DT3oer7C4mpgVcJbHnzjoTMYegwYJUD6mQy3mb",
  "key6": "3vXm2k9Ezq4B2sY3rWZrTJzMax11ssoG32Vv56YkjW1i3VjcSKh39Sb6xKGnCibEt2wgLoDnmc3YqT8VeoXAgE5f",
  "key7": "66WY3N8sQMmbkJH6y9xi5DzNHjncMQADbQA5ZsoeVq3etPU9Nbf7nuJd4gLvCTWw9QtnhCbYcLjB8wpygff8g8Ya",
  "key8": "LaRjgXsTWnA6ghf754YLDo21v8CdThG2g2SCmPfyx92RkQhaT2pLnPzWcAY1gNbo2JmvuREFW9mTKkHCQq2nUJY",
  "key9": "3sru2N5W4hDgWP6MgF1sqJFvNujvBrmZZcL2HyzZDS7wCq8ZqFC7Xr7WQsTfgcUMhGxSATaTDW4u2o2jmPgwaZz2",
  "key10": "t44Sa5BtkB7tVG3sWTpNksLjHoVkj2wzDSuhtpziSbJEefpFNVkzZLug9a4JYfE3UMKWzB6Q4xULaXcAV6yx7f9",
  "key11": "3LSGK2jdxGQRsx7whWYykuAPJ25rsZPVnnZBGBib7XUZygn9bQRHkoCRiJj7z3aAm23oxvNx2AwwpNfwesJKryFb",
  "key12": "rNaA5fVh6Yvt6pf4fbyXHBBcYXAmakGcEj4MMZvbLZ7TREim5jq2bPGducJEJzY6w7CQZdi7UisZdctBbbiecnQ",
  "key13": "5neKa685cZG6kMFAsM9MH4ogzS2PSepdyEtNH33xqp8VFRiwfJFCuZvvGgwNvitrgaEsHkPLnroFJknMDzeEiTHf",
  "key14": "2CSBNC5wPf8aMqGjZeLtx3ABLU5vFA8ecV871mNiFS138HX1jrHCH35oy1M5zynZkYKSePN1nHVjUeJyjkMeHQbU",
  "key15": "4MEv9wz2S2N12AkDRQg1KuNGYFmcXwftV9YcViPM5WtGsqQsdRrghVLX4aQAmg9494CpgXJCsLhHEMRCmVpjyHd3",
  "key16": "5ZUVPumcwQE2zfhAvDX1kYbxvt48oanoe3i965dvD9mU2WKm8sFcfvS6uUvJ3CjS4jXQxZ6PgYjJPCjD6paqG5vo",
  "key17": "287zDZTXBcjwZyr1xYKRUh3qH7gKGWBYyYSXHPRSNQHbaV6yvXzBaAoHJYMgEkT1FNUTMN18VhvNnmiQxpD8kxJS",
  "key18": "PdhwbsEWgdzwmsved3gBekTYbN2t86N5x9WrGeg6ppbFrGzvtttLY8bWbJRrT4GVhjYsiTZzV2dfb8eLH461Ei3",
  "key19": "4WQ4EkUo4TvHav5eE8Mh7Z5QbVsXp8RbqA9cEM3GP2jsKe3Njg3vM19LqRGk9ReNHQkFbkpt7sv6V4Yhs1LuW1EJ",
  "key20": "5gmnY86rEn6gFbX2wYvjTQ9R415BXCHFs3h6U5b6VhNiuadqe11KUMWnXcng8vHMAJsDRKkKDDHH95jdwKAZu7hD",
  "key21": "5jR9pxL9T2zFLqj5srbMr7HdY2wXaC9i48bntrrkLLn3t1hEHDMHrpy1XxdfKdDepYTejb8h97tBeZB3j6uDYA8i",
  "key22": "QcjoeXjR64TaSs1j1bexHz26xrkZbvYu4pqN1Q55N9YPirseTSJSUAPVVrido4iFKkFcsQeZDtL52nccZYjs5tu",
  "key23": "mAs4g9uWMgtpyzD9UyVJNxHUuB2J7xAmEGcRxXtZ3iLxfhqK77PFT5rhruUMC24Kt6p47Hj6uKH5asQRYswpZrS",
  "key24": "M8dfmmdp73MVv2Nodzoo7TiwJAUC6NotCAEei8Kn35omr6EXB7zW5xozqzkMmtZ8rP2PYniWk2i4L8RWnPqaBuJ",
  "key25": "5FM8VFTpCSx39QKhrm1AF8Lx5mibaJkjJJiNeBnfiDLDp8gXbHZtLYbTY37MoEuxQfei2iESULbZjpncfDHzPh5Q",
  "key26": "3ZHZBR6JBBKSahcFeW2kYJKBhj5QYzpUVEbzRSFQvGmG9dSe7PDwb5TVzR9bHE9Vw26PXRWpJF82tVAGYcj26Qh",
  "key27": "5iKWc1LWV5RkXrW5WW5hqEbtJVT8evoDbYNAgyG5JPq8qkemzSvt6pZHL99QpXQrd2fVCeDXR2tCyfiq9KcfRQHa",
  "key28": "2MDCy5eyKWktxrmyHYkzDnLFcX4HUdg8Q9xaGXiSVabryXPeiHfGuYfeYtgxyjCewiuj5nY3AYPQodz7iV5h3jNp",
  "key29": "4Sn8DQNPv7WVeFEeRTwZ8pHztxZ9dFoyy9Bx3JbVC7M1wq3zvvJkmTPkwzFNoxL38uXfT6JcWtzypeeTZQjXEqWM",
  "key30": "3CDkd9KyGpXxg47x1B9y4UcRA96Q8n1ecGoPeTQYZbjbNbkKmR2vekY91rDM4TBp6vSTbVxyEyWTA2iVVGWuQSeU",
  "key31": "34cprnPotbofTBVxqidLs9qAZzc9ZKwxZyxuSPAbtSHdaogmzvedcTridNp5HtdCM5GoYqwAQLCQhtVwDQdZ1xz",
  "key32": "57vegaMHhjAWaxVumNfDcq1LmEeAM4xQYzZkH4HnPGhs3bL5zU5SUWvAsJAVMxbxmWkp8EBPRgdUrDiQCF8ySLzd",
  "key33": "2V8RKnbaWLesNVT3WuuTLmkN24V1ZugCXTkEBfseT1x4CefT6TcCAsm71vjjb1Anv9fP44zKkNNtaYppodz97ojv",
  "key34": "3Z73NdgZPcgJxXL94mbCkeGzivorRyR1ZVbZJcdZ5pPQmYoH1GhEHWJe6jfAjx6o8UYAQGbjdQfvz8eD26TpHEmz",
  "key35": "5UQQKp2KN5rUpe8dsSFuUDU4mFzedjG9yMqhkzbzT4zBEGT5MfSL1gsk1aNJyYvUbBYcHa1UstQTLfjBh6F86R92",
  "key36": "5ofbMNL5qRCmNhxjHpKWqMt5AbELQx35SDx37vf65kCCSYLM4UvUpLmm1E6HBqmvB9RSzCb8DHnMuJFCL5XQdN7j",
  "key37": "3PJFnDqhVzaxWieAZB2QoN6m5jGmbYhmSxG6v6VaKvu9cHPV7QGFg52vDg6PsaHJmG8f6R1mGCLW4wVTyasZpPBt",
  "key38": "4rin8AoQZ9wn1KHnETdg47fXNLs2YuUekRURVVur6JthS6GwB13wNQhQTUk5zWkyFHKPu8GGQUEPi2a22rWcwTrT",
  "key39": "QLXGusTqQm74GB4wCAvCPzvae8fvz8RFwpXz8BpuR4fsfh8Z2xQokVjB4kCUEbqETduriYu45xX23Q8Vv6ZqAWN",
  "key40": "5E9y5ei26d3mdvF6z52qv3ENiGBPxPKsLdRHfcygLkDXf4AeodgeVU2CXtJzKu13dxfcsAZjnStLTsoTRGdyMRna",
  "key41": "23GyB64WmdB2XUYMZ4kDrUJmt7PSaGrcgW6E2P8jJZpf2CfFAY9gzR8xrzxaLh5zT3zBRMNB3wa9WZ43mVuwRZL5",
  "key42": "2yWZpTihjBEDUdiY3WK4QLVFDiz7r9puZTUmJtyq2qu8tDp78a545z952HahrSxrpz4HbjP2Y1JRpXM8oFh8hxmm",
  "key43": "3qRYwwA8zj89jbqtYmsVJALBwGJSJ9wo8b9S5ZHGFWwCBQfws8LxfbHwBzTK2VAXfRhMpkTHajAW7qvPioWxjs8K",
  "key44": "QChU3V78eRsbpXSXpp2v5sUB9c9gMn8xzHKWsiN5ML11WSxmEuSVceWD2AsPBFbqGD5KVy9kBZnwJazw6yNtSaC",
  "key45": "2Kbc2VMRHeEwZzifpbVkoRikYPtQc2dDftxVenR3vvc9CiGkmoHLq4QUWza1NfxBmafcgtEdWAznFTVyjPTS29ih",
  "key46": "2qCk2uPHteFySzTcqBQ6mbazky7pTMDVEfaKrLu4gxbADDCE2DoZ5NGcwWiWXJToH8ioEorHEjdNsK4L4PZ8jP3o"
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
