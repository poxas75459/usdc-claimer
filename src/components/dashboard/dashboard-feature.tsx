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
    "5VtteiPJsTxtxqWhTw4nHLNhEKLkAvznFJwwQmdRKE7WF4wQr9n7AZ9mbRmr9tHRBgN8QZ34WQwLfQE9VJCFy11n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ko8d5fgmEVCpLmQzw3jx8Gk7LCvKZy2w3vYxdBwoWjNEZ4j6L34rDksuq4CjHPWvGRkZNwNXxCyUfqMxGkgnmD4",
  "key1": "2243MCmk2m1w358TtYGPzvVioJnQYbg4bMTJtUBjEZ9UXbJPZXourxveU8kJCydYGWAJDXHGcs5PDFZWV91efWyZ",
  "key2": "3NNnBX3ntSzzLePuo4yVCdim3fYxhqZV73ocXXGsbonNzYi9dz6SMqe2d6xSPEbrxKpE1H5bqFC3F2AfnPeS9Sck",
  "key3": "5zNMaf7FaLTN9gmHrJigtFrhx3urq8C8PCK81dHJy7KmoNuFaFroPvafp1oVV4F1mY5g6PYriFLUSnTcxgz2fMPN",
  "key4": "4No3D5XLDL5YRn4CgNrBuL32MdFdXvux97MqdmGgDXra22v6hcszfTRMibEnSBVx36fyJ8DcJPighr4X7zSCgpzo",
  "key5": "3spP13oPkaa7cvZ9VhETtS2MddzJtWbWooTdNZBZLEdH8EXvmSrQ8ZgrMt47XDQtCmwYxCU4YqPGv1LcB7FoahPo",
  "key6": "29VWXhaqWQv9gzSrDhTYQ8umxgCw64xvXCLA3dTQ2ReMfsjUVaQPCUz1yzQzjzFKQ7n5qVZC6kE8zSfKXvP543w2",
  "key7": "WaVoSDJt1bnPMYs2qUAvpJbJUM1pkqjmW1edGG8MecteGceZHpqsrKxgHpKq5EW4qMpSbW139TqRtiEub2Yf5XD",
  "key8": "5QDct2aP8qNi2sgnNcCd6cwmAdLqNd6HVXRVWgQ7sf8S7HnrHgHdvxS6g9U7fgTqZEfi8KqKWJEXJzBFnry4yj5e",
  "key9": "Bu3jYZjJCSkFz7HGwNWZqzFfxfv78kZT7EdEu9ogpvyrSvSdSz75xmse8npQrL39cgPGeBfcyzBHKc2A9y9taCX",
  "key10": "5GgWeaziojH3QhW1bc1LLAUAx8AyMuGwehudyi3cRvQ8uujtK48eenFyvwN7GXwwf7azrqWMvS7ykxmQbuFFu1Do",
  "key11": "2RJa2ExLc9Fzm1wD8NPa3rVb12WhfaVVLeLhSvPjwq1W6E8vkUsyECBPEP8dDTkH1LTURt6X6q72RJZfhhFWy6Rz",
  "key12": "5R962tgUJSfQoWTvKaXUgkXpVLb6m1SnYYQZeaAjcFYkj3UAedxbv2CPsgd3ktYTkmvE4aybYybohhZ2vSLiM6hu",
  "key13": "4RSSEjwrgr4vgq3YDrHq4YpKnUBXEZPiaLBsU2SqdP6XVpiUjaaa7J5pFLWHNKA8yU4SMrwbJNH8zLAL14Q33BcN",
  "key14": "2DBCW46VRMtNhb3orstnKRjragbDWDAiRCFZkmFeTMhri8ak7vyeGEA4ekCNZMcvedLtDyBMQZUazBeJryQ6pj4Q",
  "key15": "5XJWfQjZrRR4h6enbUkWFAyJs1wLHV7wedZ1k9c4xAiNYbWpcusDunUe1fhxZqDWkpbcSrqeK26A7XKnE2i9S4u9",
  "key16": "3yMBxeKEy6VpSLPqGaBJwhegfqyLHhBMk4riNpR1GVkpwsS3KKYBKzFTJKGDq6WJdcsKrbWXqGgtQoYYKMr7DQQ5",
  "key17": "3XYg5RQ8uaAJeqf5qcjTVm7kSUZiyjukBrXEjuqNcenMJea37V3dBxPRNqYuW9bkPJrWM9cF3xtTvhDtFnEcFSsB",
  "key18": "2X3XmrfG4yCV17SvUeUY76v5r6mGF2HhN7rhhqPBE7iQJUgsn5RK9FZ2NpKNGrZLBpBX3ycyqaoEttpscTQeZ6v1",
  "key19": "3D6da1gkbgwELqjffd4sZaLxRFzjpurA4Lj9xb2eW4rDzUXBeQksQSzbp1Hrf769Qe1MNTSqfSmDdppi7kxkLaFc",
  "key20": "3BnkRymBCZxgXUSMAEpcWHXspxsLpwZQUdsrVn7bhSenzXgLPgQpPhU5NSf3DUWAwBFjjoWpbJo4ruNAiMaHVfwS",
  "key21": "47q8LHF8ihZC7CZAAhQjXatQ55ypqSCzRbBCYFQs7mqxrfYny6ku4NoX8RSibHoryu6uRQX6jbtaQ4j5wA4d9ER8",
  "key22": "55ESyJpKDhGncj1ePffphQcLjSCCKpaU2FEM6yixc8NXmESRreogNZ6teRmdrKAQWYWQD7SskobAMSHgv1AcBy7h",
  "key23": "2sgVgvKespvW3vA33TMApWqjB6NPtbxnAgz64R8TUmTGvjbBbvg5waKAm7MzLEzg8ugLSxg2aFeQitifbmiN4ydk",
  "key24": "2Xi6CaQwQE8TYgMgrQGioBAHJRVMfdptGfcRnGyN92g6dE8ka7Ye9GzTMQ8xLBfZofF3EepV8DJfq8BAnmaNqb1K",
  "key25": "4Qm6x3qo6kTdADchLkEC5pYXpeYQGseauThZqA5qqWaQwY75w4eduk7w7ptngMH6Rr14doXy3S8U54qcHVdG4egk",
  "key26": "4t6qLV6zdik2U7L3AMBwy3FTDzZUbERgSCLwFJ2529Tw8HYZ8CaU5dojHxHeMoSf8UwtYJthJqzU4mgKosqSuNG3",
  "key27": "53CJSZFaq2zXZ52MuVQHAKer1uVSwS1SsjdMnAehhcTRgmidB8Pw4MMBWmZV7xiufVzp1QyV8yxKkKaNEcJ5JYui",
  "key28": "4aD4yXstWnnJZ8EYB4KFJNzi1Lm5cXDu8hMrca9RN236QR3CNqBHHwpPF3sWd5Q2EF4DK3He8XyU3pJ8vhQDGei",
  "key29": "3MaPBFVhpvpustV7ELSGYiGXsyT3HDNru6b5VXwXmxX2VTC34xuvWmEdR51sACCBJHM8fRePwvrwTKbDud12uMj6",
  "key30": "zempRhehELwjWF3yhhoLoHwsPBzZ6Zgiv4fV4RfvHf1VAbdY57Gj9MZ7xYTfL4SK2p5YhMVtK232VPfz7wiMiC8",
  "key31": "61TEjP3K5u8L35XrJvAyZoBsPYEYQJ7MjH4oRYuGt4o3oPgEEp98WsPfNxvMRi77FebP9pvoxW9MR8g1DWtMEax3",
  "key32": "3RUEjWHsasvaPnU4NskjKxgjbL7KANRiSmEKfxz5dm4HwLpKgu7qTjwdbsTjbqFzPNsJ42Wb8c7Bru8nGNE2upMc",
  "key33": "3vyBxenJeXLEhuaHtwWyogfGKei6V1GAVFSDcoR3mb8sSp9Y48rM3CJKS9rJUETFcuhyM35KEtQQQKHBhC1CDLRh",
  "key34": "38WocWURo5KpCfyZBbYiwkiUY2mhADxfxoQh1wn8xYqcbERQGv18squ1wa2uPtEb9S1FdKoaHKSMCy1q9XSCQuag",
  "key35": "2gtT92v6q32LR2y4xLbNFXCsZpprrNTUb5vQFc3MaHt9F7WksVBTjgGVJTa9FTwMxDGp11iTMo1zCqs2X2uXXXec",
  "key36": "5r13uqEKQk1Y33VUhvyVwjXBcjqoaNTABUnU7XaUnSftPaF8omdSRTeUjnfN7xiFUVPSerdoUgodN3kVoS6UxifQ",
  "key37": "53QbY5JjC8sT6bfqvGBR1dWNgVB7Bbj6Rn2LqdELE4muDAipiC3vvsmYVZWTb9Q4mUJk1smWiAzYrwc4GhkqsTw8",
  "key38": "5qGuvAiLwFUtLgu6tsJhRsEWf9tnfjDSxqwA3PyGSCrZUw16VspkLaVxtqLzyhp36dpiZstoT6AMm8M5dmo1L8sN",
  "key39": "57jnatjQqNLPQPc9ye6HSPLGnnDctEh8xdzbJiwBqSYbcNZzDgNMThNgKLUYhBjxrhTHPt8Jg3DMfJiMRJyqsKNs",
  "key40": "2XjDuYbJMWWiaC1o761KFPbN4VUwNmLaTMhgTegssTnv52EkSuLjFxpAs3dJy2U1rkXRyDijALJC7JUcVPENhA4s",
  "key41": "3s35Y1LD62WGwbkHxaSBD3XysUKQ5BDCh1ywtvWBFXXwFrTbSW1ZE7MqjrHVC83T1LdYLbbYLMn44GZh62DB6x25",
  "key42": "dHPqyisctc5otS3iCtvb2EBccAhBHwpEteEXHVBxPbN23pnwYfqeZ67fCAk7cpBZ5kSDVHagbw3v4TzbAptshGT",
  "key43": "5CJ6bFbKYECScaW5cXTPB7Q5T1z8j6dvhH7afjnaXLTt8Km3QNTnjcQepmFqXFJU1EwKwJQTfbBAccPrzD4hbZru"
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
