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
    "oxf1xgcdy72mX1h9xCw5ve6ApHvLg39ESGRRBbhnwUt49K6tteA1wnvovsioZEtDjiW4CUrAb8DCFNRv8xuK4ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQp3sQG23uQWeXLtiEMXFjhYdWPG7tyfLezb4n22UN5Fm8vZmyZ9o98PrYMoUBHpAYeFMiQkqCmX3wxSDEuVDbT",
  "key1": "2wmGaTYwjKEe2bjoVU4KWr7o6euHf5RB3S8ywh8h248Fi6sBBtDgMiAgz4Pgiu6q1FwcJZYZSyk7HeVrgTg2LQoW",
  "key2": "eTABTjUZ2kw4pnquVQqfYjBeRvLnAdXZXxkgm2nMTbBdrAZ5ZAVwApqHWk41ofiUa78rpbg5gPh288jtGRXdeU9",
  "key3": "2mbyYxHbngG7TMSM81iZvby66RB3nWUFBSqs9Q1aDQnNNVrQmpeUjexXdKBQ6FRcfkmrWEf2VEGXr6oF1LbuhtsS",
  "key4": "3hxG6eTsSjZCgqJLCLtZSgszkH8DT2zCMDr8PLCLTFpL3fkhLRyWiV1jiYp2jZRW9yF85Fay2KtkvyPqg8GaV27X",
  "key5": "4JME4X4cdK4mtQy4fQiKuh2KCHpddQF7AErVVrAMm2uBVAnMZdzy9vnC5rkMCqpE5L1ukqb6kBoz3rr2BrDSf1BZ",
  "key6": "WW1vLgvbf4AisUu3ZpoJ4yAd2TVgp8mXrwC71ZpUhmjGBVU2W8heFaPvkgBK7MKA8wH91SNScRX3Z7aWV5oXFpm",
  "key7": "3bbDKTkUh9hvG7oC1ggshQhwFnNgcfUFh4n7RvVW5f8vZDSZVLf7fCg18NPdBtrYJt5KqVfK41sNjgn7Z7FyoPDi",
  "key8": "64dzDUjuKzDjyhi4V1AjL6cqfnw3yFcWbKGUBptkQjLJMU7znDSypHLNdPgViVY9p95Drtk4oEjpiKDPziq34twS",
  "key9": "2vxrscJAxUMc2MdSQgY6dv563po2DMGpkETq2hFxQopKbqskZniSPmoBNc2iHVJXRetU7u1wjtyQPsdtARiBjpxC",
  "key10": "MHKYv14XYP9ovDP8V16HinoeNAstQwcknK2ycBTYERYdE2VVS6eiRLNDRSVAa7DFXYNzwyuuCun7fn1vbVRjcN3",
  "key11": "kgG2qmCAAt2FgCECWERDQsTDypdTVYTE3en1QLUJkE6Jhyh84V432Uacy356YYEmNbRYmna2rM83Ahu37jEE8TB",
  "key12": "34XipMQpGM54VHRsHnznH9g92JpzLrqdXYfiCHtFHnzFTGYNAp6MDWFtnQXwXYRAH91ck3rcXLUAWTqcAvcpeDQE",
  "key13": "PS6UzkeQ6sv1VJT84ej8AHnVkZ8pxvrh8gNNH4RsjmswsQDGjxFgEkny7bP1A3nspav3FoaViKW7zMYhUQpF95s",
  "key14": "2zUkx8JXNyGmMEYJJJgWvt7Zw6AN6McG7QjWYc8pb9YKrpSKgDM47oEBNjNnNDGo4ge73pjcvXieWkKesrN2WoBN",
  "key15": "3mgwE9Gjx7vrRm551ZZ2F7NTmxsCXT582oyq5FfVXhKEqZfig4HKR65XDMMRNU2mzzGBuCq3oLenkkyRed9LuD4a",
  "key16": "5bYcsu2UGqq8rEPaPunT36LvVb4nt46d392M5zxf9vqEf5oNtivzEPtRGPodcETNHkusCuAhQFBZR6qdrcVzLKCL",
  "key17": "E5PhCxZSJUoMp8DrpSNicSAJcdmh1TazobTKdqeeZLV5ukwgDHjGy9jagqFXLT2XDq6qT6Vt9YgFX7hy6ai8B5p",
  "key18": "36MAHjcwWWn1dAHhKw3gux2PcSZZDsqzvRXgdEzEmxA2vbP3y65JsKpviti96unFCdBUN81PeQb9o4LZzR8t8h5A",
  "key19": "4fudvq84WfDQEodAnPpBcmV5GLcTNYHnZyxjNQEDhS7LEmeJuRJEd7sabLTZ9srR5vZxWe3u8MvrjGLnyuEyKZno",
  "key20": "5fzPfxCdEE8jLsG1r41LyfpZdcdzeXouhoQfjdWKJZDWPYG5MBjnrAMHyXm25a7WFzLijrqK2LvEdNWnXGSN233U",
  "key21": "92iUZxYwPfuvosag1NdDCgEHfUPik5yQn5zno6Gj4UqqwT13UGdCyia7SxB49NxiMgBv9Bby2sDWQBbRZB3tKYq",
  "key22": "62DhpGM8p8YpGFadsxqEVMayApB3mw959dkvkeLCisndHUaEpEByjv1JLYV2sUwNBRBdKDwYuXHsxk7VRw7mxEgf",
  "key23": "5N4cqgj9jXr3aLBgRhwek4tDZyrXj3i7nea5VeoqMTNs12HFq5WBkNQeGxhQjk5fy23qMyFd5D98b7obEKwjjmgj",
  "key24": "3PKULFBM74iUoCPjxHQmhYDRajJGjUpc3ipKEjDr1uApzBERs5uvts4YxmXNwHwWgEoCgaQuwBpJgdri8JN7dw5S",
  "key25": "5fuXEbYVwNtANifuJcGYs5hP2MfFWfkMn4cxENbkWUKDJP9qr6VA85mobgrsYnJBc8xvtpnKuwVJRQv8S61bbSmg",
  "key26": "4dVFSE2NFyTJQ8EmQ8YUSMTiTCAJ4wLFT2P5WaMrwrXbc99bpS46YsjvEepcNHfT4tP5Aqk9mnMgYQK5xMq6gjom",
  "key27": "UFQ4EGwuiSKQmk8cbPpqadEaYuNVaUwzVijC49BQ5HxJz8xGxxEgr58FWKxZnLdM9bxcDhf8MBowAgt25ETiAtq",
  "key28": "3r6tfZGAdpdtyTA9q98s6c33zPJtJWzaAPYYKm3Zc7bcwW64t7pRB3jxE4v3xYH9PiZ3m2tRGvAXndmgrYtE9jQx",
  "key29": "bLEQjT3kkrTd5dx7w1CrgJSKExJDzheWqxrXrVCUz9oAh7DX3zcWUopmvmjpe2kBAqQ8iswPMFyxK6tM5HsS59r",
  "key30": "5qMz9BKeqze8vHyy1gzxP6N5JhT7cEZdaqusYURwRKG1HjZ5zbofy6LgmeaGDcLtasvb52pyTD4GUCG4pCXJhvYw"
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
