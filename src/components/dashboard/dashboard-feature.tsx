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
    "4sP5at7GivfXn3U36x9xdszv3N5NC3nu3dSt4Dtx8skwajsFbh7GNdn6bfbb1UAdYm6ZSsC4a3esv52mvMZMdeEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9Dxg9RsmuRd1VY5TNLkFJzNPVY1XBiVvrt5hEpxXde3cE6kxkPZ3fkCem3QDbXXc1q7CmNmP2NRs6dvmNu52c5",
  "key1": "5B6u6UvY9m824oBhJMdqAw2VCSLmTzbqKuF6XWE4DXg6NvPtuq3DPQGFnTX4778Lw3tX1mebQQAiMF9eEGXc56Tw",
  "key2": "2wuzPwEUMTkRvUYu6d3gnjg1VpdDSLSgwSZkfeH73R2RXpHYooG42p8LwfFRE1angb3h5eMYnGo5YPtrKR1yQJU5",
  "key3": "5whBbTsu2N6o3bqWWSTnFmsaXZzncZqBPoGHsSbQxep4QLDpw27JgSWNckptSZkEjsg1BBWjZXcPo11Tdd97RaVh",
  "key4": "26mL5vnQabGjV1psTMcKJyw2EejVA848mdigMCHh5bA6Ma9ugmctRaVHSM3C4hfTGRAWBByxNCZBxg8ivv3BTysh",
  "key5": "4E1j2sTYeM39WDbRU8gerFKpkTYV2rrmc6vwbg8u3kNgG7QjEutMNmtJd3LSYrUyMp1coi3bAX7Ksdbu8RDNYCuL",
  "key6": "5TTggYNbpWoNpnavXBmdhzcBe3SKEGwmGbukGJWrtXhMkcSXYw7vK7yVi1x8qKWgXWKd8ynAZe2sg3qWKrHs6Z6X",
  "key7": "3QgogGpWk41t6f9p62ok1Q81raZPetF7CGaUeP3fkQ7nR7noPDXQUCWcYXVZw7njcb31gm8Wa6XgrMYhvEL7heyw",
  "key8": "uDNYhgShjoZ37ZnBFLE2KPkPY5gLTLsPiYFJj9qKFsg78xahd3jj9x7LQyQzAojfq3de4B2hhiT1YazSGstGKbG",
  "key9": "5uY4XijGcuenwDd4ahBgfZVFgddHd8etEQLYUxH8p5icX2HGkeQ4r6A6qomD4q6LDVi9fdrbMMsGfxUNWKwBgF6R",
  "key10": "2xcwNteekLP2Dc8aqYiFbW4m1Bp4KLi1q8Ted99VCx9crPeBiHviJQMLHAwa96DZF8AudJ8bfM9j6grFc2Rd9y7z",
  "key11": "4pTijcpHWPn6gKcHZTXx1HdMSbtQszuw2Nwu1bVxTNGdshF285pKJtvmFHGKjYtXNXWbSeHEcXgkWRpKsrQNYyo7",
  "key12": "2HvL2Wz2xcAxJP4T9f4iFN7Tsqd2CxQWMYvfPobFuMnnxFUjE6ZMhPmaPDnKp9EMCjwoeHkbDjhR9PNAV3ikX1g4",
  "key13": "2MkmsuQaqVRRt65UZhESLfVF9sPBNq7cpNr2HnrbUvmjR9jaX2MmPj3KE2Y7T4BsdFdcsANWeqwsj8rPvWtmQznj",
  "key14": "4Wur4XPsXgHJX6F98R5zriL2DAbmn9gAMXp5o8445WyAss9g5zZEjqWzsrPBGMh1WGYusXf5XWHYcP6DJ28XGkE3",
  "key15": "5i75CzW87RGJYXcb9RMdYtCGKKUqzkXi4xCY1CRq2oSeT4vbnonbRuGoJ7JJpSgSPd7yWe5qjCsMdDau1NYi58cY",
  "key16": "4FzMmed1i6GqhAcANh5FMRTzxSDSnqQ6qT9Buer9sbD2uunauDrVNsWohjo9vpMDFZLHBFWd2bH5p4ZGh866hvC3",
  "key17": "3Zr5UtRNu9hqawZ5TtQgvz7TRBrWTAwGpEaELdi1sM1KYaqnzQqFAUZDhZrHD6PAupexx9rUxavY8zHKUUmgNuRk",
  "key18": "5P5csNJCPJDDg1ziQSdZ93QbuXHGT7AKXjkP7icZGrTfiZhT4gjV9oYGCZwFxek8pnaJmLWJ2sbNJee4azayncp",
  "key19": "55N7A8KK6SW7X3y36rZvKdxAuhroTsNdwAxqSxYqGqwJhNbh28pkf1mDCVSm4UPHfcAM2Dk8bvM3DTEzFSAfEkq1",
  "key20": "51p9Y8pLMsShmxDVUthwob4QmdKpzXyJbK2xN9sYBJYeNxjxW9EqPmex6kqXjFanHaXrnUW8i61LgYBYqhv9YE65",
  "key21": "4gko9D728oCBDnPRw4pWM6PDGXfdZweZDT8B9GFzVhkvXpQ2aZNHw7hgJBa828NaffDNFMaD5pjzfgPsv1tyC6eN",
  "key22": "3Qn5moCg7TY9jPYPrtz5LQAN9j5Y7SkAd9tdgRq6oTXvNSDuH5MAd4v7D8sxwZ3Ey3gUYnhuAFQ5ZUekvBrASK3o",
  "key23": "sE2qFHj2fZJsqinMzE4JTrMY3T9qkbCBFGe2P5co2CgiuwocQHFrmVBDZCyJWYLsHB3B5BjuYtMJvgK7R7Gsmqq",
  "key24": "5Sx1XeFgAD7BNMfH7UCr2kSKQVYqcU7SSk5TQo7hHNTgmVQF76J8wcPh379TuoR5zhJ2vQJeC16G1DhssdgqoNsU",
  "key25": "3hba9AHYniYextpuJnVJixdpGsTRgQEkBtqECpYpN6YcGi9NgeWnHnHz8HeAJFf9J4oLtCRfgeRAcuUdLtKBTkb7",
  "key26": "3GKAYjDS5wPb21cAMbQVpQikoW9a9LaRtV31tfsAbK4PW5jtGjrq2BXktzGNyiQ6BGztpJu6WsrtNLxSpZVrc3iH",
  "key27": "26TL5kAEGGtNGvUBKMxKwwuiMZkdfAGcH4y2zJXA7YwiQzasXvxh8MP4iZda1QJbEeTsuSDPnZFXy2B3CGDi7igP",
  "key28": "44Nhi7EFBrcPy7hjADAtYvr7YiQX65hQHQsjQx6z3HthxmbeuBFcYYmtj9X2VAt8GtixrRKkWrtjtnVU6iPWp8Ps",
  "key29": "54LHxxj4eG34CzeXX2WzNb1idr2QvHLXKh9VdW55AYuFFDyQFogoSx6ztHW8ZJVzog1XDAD7bPiD7heo2m5bNuB1",
  "key30": "4c1V22owSJEP1MLQDsYmGwR7sXxDQxkHJZ3NW9PzBY8fA7etHvZiES4YNBsMG8gZV5JKCLjFtyxphCVeGY3AjLPn",
  "key31": "2xFvpfbb8npZ5wTBwF3RhjtvwV3Sn5VuvZ3NSpgtPa2bRmPL9vFNxvbgJt2W6rQnNHnkDNDRcKgtFViNZfiaCKm3",
  "key32": "4Lhz6ZBVgX5DMuCXF9dhorx8MEDesWauiteVuCT5mbYtvfY6bo9Szd7zKj3rsvKYMamEsqJv7uswqWBGREPz9kJm",
  "key33": "55gTqaNWiVFDonnnaTjtqZtN51N3R9LfkCwuPYNdWU7LuBhSFwXGzuDtqeme5Msoe99fVvsHf7GYohfNrEKyiDEa",
  "key34": "2uQz54esnvQY1XFaSVXr4iN4GnGy9webRChB5EogjQshR9TASt4GQiSF89uGi6DYFo7t5bpDYmi2i7ey9ab8NGyP",
  "key35": "5X1EB8PSwpDCu8Z7DdGJdMLeJs878A45UbbNdE4rN2w1YT72zpW1sJuL5XVtgoADXCnvmUvPMMnVGzqCrATfQ2uJ",
  "key36": "4JPxpxWS9xGfUDdBCzHVhVG9VVBPvKCg7Ng1E7gAPnSh6QVaUTG5JnpHAkKvNSazACxbSXgKfPZE2QYPKc9zJJz"
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
