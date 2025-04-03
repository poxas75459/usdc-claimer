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
    "5cGQmesJf1SPBwcAZ4qNiSW7g71S5547BFqvLZYEsx7yEvHZK5sYMKjo4kE2xQC87zuhgESe4496sEME83Y9XPSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fBRmmYtMAU2ByUjSft4AdmP3tR81NpYqVs3yno6bvgiFLtmQ4Xyd5PXJJwkStbNYuJE8uD1VjepwfNthTeHTvG",
  "key1": "4qwcQJQtj46TwHnc41tXz51vXcuyuCU3tiuCnqFcuaRj444wUTS7aTFFfUHwHQaKfXNeHxs2wYY7gRWFAUvPPTSn",
  "key2": "37GiFebhmPX75aWRGLHmuEszGhaZwbmHrmedY9LBCCVSCwsDtFKvKq6WPTbu6ViTLKHK3dZ8mDTgFSAJSH4pHtoB",
  "key3": "3tVYHvwLd1DQuNkyA3MahUTQc7R68wEfk6xjp2NAeYzuYLT7WT4WsWa6ZPjpwRYCmpkSAJPeXxZ57ydD4AYUMcEY",
  "key4": "4smZPWRN5dHjwiM9z1cpL4wKhnTgaFTcCdi8WDZFGM7iPPMg93BUqV52vV7FooVkzCu3JvTtdxuZmRmNHxPWDy7v",
  "key5": "5wjTHhr1P3b89fbRG5jCPGWDKKdKoEgVb1RVmmrebFb9APetvgTskUDfBKFhqRNG9poknRfmgDAZzhvTBzNZ83h9",
  "key6": "2pLPTyLUWsPV4FGhy7KUnQ2xfuzD5x1aSaM6AzpJhNLAeESTNLUpLUPFe2ATxBknKLnpWm8V2tFNuuCaUNh4ivNN",
  "key7": "34vnFVtSxYyqnuiE1Cuz3mYPcppYeo1yo6qkJUepphUnHrZWdCyKYoiS6wt8pZnUGSRVXmYFbjaKS4nnXhYwGVyP",
  "key8": "29QszCWeymKuLAWFKXBr7j1pbtF3pFzY4SNFBGw6qZXc26ReKZvmfxmAXoNL2wP19FPQnsDn4D9mcezNB1PvgBLb",
  "key9": "3wVTqr4NuV8jFPNxqjnPL9HZ3w54kjvkiBY8BvwkuDVUX3whuxhZbSVebRpKdJToZfbSv8MzVgEfgFpxA8vqZ1eT",
  "key10": "2YdLowHeqUeyn8r91oEeoQ6vpVvTVSYhwybCajxXoZrvroX9Hz6xzz8VVfooiEzdYQQpKiSToYQRjwG2TxHF1Jud",
  "key11": "5st5ai8amMvkqSnyDEGURuyHebkZA5mWpZnicN3G2V6UXToerg8m3iNmYTReLGWaUMLv6qV7ACrBHr2gXaujha3h",
  "key12": "tEGPMqKY8Wttop9qL5kNPSJDkgD9hM4RTdNY126jVtg8BJWAw8xTqcE5K3PDpb4KrmgFqeaF2EAXsPmDpoA27Ri",
  "key13": "2qgF3TNoaovBJ8MPun9xRgfsj8w67BSnGzZnKVQM9cyqsCs6UmrPMRSNnY8xK8CPouirbqke6W24QZREzvo4nMCK",
  "key14": "3Bcq8XW7ZFW3esu6epbARo499QaaaBNsCpMkhhm2DpARXouQVDep4SS71uxG1Tbojsh6CN3VadtbapfjR89z5Ure",
  "key15": "pzmECokiN8tx5gT4VkYvWnycbKAVsmjPzRsWtt2udve9jYZ18tiK4R3cw53kLZ5WbSsjPnNkdGt8a7htdkp8oz1",
  "key16": "2K3Z3xPj8HruCJYx2YNmLxtV1FRXwQi5cwsKYmo8TK8Hgvvj8AmWcwqsY1KyPZjw8CC3X6JbHAVr24uZ34CUFod2",
  "key17": "5bePSZDnzdmoRg7W6VLADewEwwjHsHuvx53AyBZdwcVhfbzQXfyXu31p5aPjf9PSnkT3ghg1AeKph8FiJmGr2fxe",
  "key18": "5KMKoqyUa6Qd3fQXHtYgGhchQn8N8Pus4oC4xwDe78cBAKNCnuRJnvShRmBE4uMFYXA2NWqFg7xL8qLUcqhpFiv2",
  "key19": "2Y9PPzDmmM9ij6TBw61Z1ohDzKUHvpuj2pDdk7aBSHsYh2rnLx3FtfooEaPihYeUPrp5rZgjt6p2gikgqPRFGXty",
  "key20": "4UNSshzAbKTqbfrtLZ5V7KwZq75A7PeJsS8nmZey1xWSTwzr4pigkTNQ1nuXKc4RqauvH3TcZfQg7GpEmRqsu2v8",
  "key21": "4BxutV9MfHmJD31Bse3xgL15AMssNNDfde5H8cg4z27UxxPuyLvoxJA2bh9a8bbqVoVyzogWsJnAQLqmmmMjgVnp",
  "key22": "21abh4Qgoje9b3EtUSGHK2gitxB3wgeGJgehwrAjTHJkeHt4wvx2yhvhwZvCaDkcMNonDJ9QdCYfQpHCSZMLmnJB",
  "key23": "i2UBTKGMGRuWF2yS9xwFTUjkwy7FB6M3uafXUXj6cwJ6KBHxxX9P3A7yeNEZuvsgndWC39A2xdd6TRH4dtCsxZg",
  "key24": "5YG6cMEr8rMQZ86TsXqx8DpJqKgCSPwmYQ3AwLnTvBjEcJVDtQ8cWKQQ5BGAkvXEq2VmgFgAb88iEmQ1fehWBLmK",
  "key25": "tVBvv9P7sapmFNUuXyGzn8KFQVsBi6qM89Qb9pSfDYohM1HpaNaofZEd6FcDeCNsUGL6EKmunCu3WYzwpM9b57X",
  "key26": "2far2Eptwty69FvQ5nh6WumWPhGA2ACSkgznUZakXKiRXtUt5mQyD5V9tQ7H3MqzXs5pfLqXk2EyEApG9Bak7hHP",
  "key27": "5YwvrDypt2s229RAaD6j8rsw4q64tV8c17Ye1Un4FD24wwq8H1VAZY1Fy3E9LTdYxMp2HnbFK6diEZU98YkdmReo",
  "key28": "3QGLBwoXthvBVhcNpDNbnBaiGfFGr7jQPfocR4gV3TvnC1J8V1VjKTL8aujUnV1VJ6HVYRky5p1UnqKKv2Vi4dwX",
  "key29": "4akkxPuYZMCiipBksTmmxjawtgsaCZu2RzkymXAQGSffw4AcjjEodf2dgwhPnZEDf98K7ygnyZeSv9VdiyaQ5RGY",
  "key30": "5oGcZkWPZUUytx8iBntVp61Cgvdgx66wGhqiFFT3rY6micqsjxh9uGYCUUeXCYjXuhbkhXxV25hzFayXhDKEygV8",
  "key31": "2aSKg7JtwaTMxzrThBmrSP7anSCjgoJBm18yU5vv9T3moChYqwD3kKXJDk7xsKv8W6o7YWJZc47pgbtj4cvtJcPe"
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
