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
    "3W42QZhovUiQ9u9fieJJfGEcNVvcx1WQ8q2mTUZWkD4KwY9hu7CRKqw7rZJ4q6UEQU2iBrBK1d6834WZiAcLrSvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37j8wiuKgHinBTWQYXzfSTVS4U3nrvQj3nzF66p1bp35bqKdgKbZejYreNTSfbCrYjiUc9zT2Ap4G42C8uU2d1Yp",
  "key1": "3R2i7xx8xAc4gufurPqw6pMbAXKvpPXydBZhQjN61bdFfj62LwzT2y9eGTzxgEKmPzzEGZMKQvJ7MoW7TtAJdsrR",
  "key2": "4EpgBcDPuZ4kvAEtgSFzECT2Fo4TM4ua38p2kdNftZ8qu5qyGtDrhdgw2m65f4j6Cj2pySzH8fcTBsLP8uLLvkp8",
  "key3": "44kKhhvErZSDtQYv6tdzLqHR3JtFvjbG18epEwmB6fejjqGxub5e2hra6PEu8Jk4b8EM7a1wK4rU3cbu5WZA6wDR",
  "key4": "4Y4pi6waTFYkxmpUkLMamhqMAtq5DLBvcLqt6WosJ3MK8KJbmVLrWGKFqcwXLbkzWPTzK19medcV981rR1D6SCyM",
  "key5": "4RutXotuMivurnkSaZ37fDGZHLEwq1Z8uDK4CpxCqtvw86RSjqBmHQAAC4gBFKvSw9HANYEfxBxScc6PhcCEdyf",
  "key6": "5FXtDQcXriM24tn3Rcro8g1EDmqsSqaYeT6eLDFunCRcQMiYqCbptRwXzh6m7QTpbzhK2Yc4yNWx2thU2uB5VxL3",
  "key7": "PXRDKZrCvUoRh16Wd1XRvd2Eq2A5Xg2Su8sLMEcCc3Qg8g48tZPwFjjrUmgoT74aF4howoDoFsUXgHxoT37jwBj",
  "key8": "2bCKkaeMSxQHTwEa7svvJUC1idKEtmSZGsNrfkGeGcJ9AQSownYPjS5GyZqDsixgJjAuHdEaf9TyQbctrMrj2vWv",
  "key9": "2mnbqhqJddb7jRPqWMi2QLnhSwodfEnomSkyeascGcpFYpEBKdmCWRxxwZBbNEtZF5rjnZKV3FDSgViUbyDkqWeb",
  "key10": "2vMrwnoJMUZAHQeGg1WYKLMTi6VqTEdRx3DwEizCaUNTjQ7jm4YvX2YE4fxNGve6MpKfvdUFwBVp1uNgwJ91yiMR",
  "key11": "4ZeEmGZN7ysA7kcmdffSn6Nw3RpoxrXxSfU2afT1nFipm1jYaks4BzxAN5nUgVNeXscwYdDQBbxMs2R7eydeiYyb",
  "key12": "2i56moPYx8AHXaLwJ2aAiGpP9qyjb3oBWSXLR8uh7CyJ7Cu3akLMWMutSi93d6C2TTaAY2tJJckGxtJVW7E31JZt",
  "key13": "482eyDmxcDK16JPSywXmH4CqUcK5UxGTc4hPfxYxEP6CJuiaMPGF8YXCRfnN47UzYpy6RTJR38a6fpkgS6NGZerT",
  "key14": "5fxBVhTrakyzBfPFTQzNEykPVdUEYqQ2A66EmBJjKSvREPqpfgBYeuukJGeSjEqW1yeiDtvJZFoLEXHSKW1CRMu3",
  "key15": "3tuRuaBDs55nS63fKbaaKMnf8sjJHGUVQnUfwJqbqUDv9PGmP15W8sZ5kPnu87CQH2hpPNnPbNpE1qd7mNk4HFYK",
  "key16": "3kL464JEEdo6rYo9octxjiV2bk9XEVxUxrrmUHiwkN5uieaPh3WTKuHC2Vf9yxzhTybjKvJcb2ZLYWjHZuMFqwUH",
  "key17": "428ayd2ZYeCuQh8YDvfRJxLEMRUsAFyk6rMGCxNK7aBzXBuwTUaJtVLkNd9D7EeoU1yPwFcTGnusb8fGiUWL1xVh",
  "key18": "3viH7rpcSeyM9UTbeahVEhKRfRagoknhqwtGjgj4gYbCKNBLWQJSjTWQcmpDzDhkVwtcadJrgRzsvs2DMsQiCbmQ",
  "key19": "2ZW5cE3EZa1GUrt15iLxSgzahiuFrSC5RRacanpBwhkwXNKxupqi6xymkf1MqC5sKHcbneeGfFwK1V7WbVVH2bkF",
  "key20": "4pGeZGgCgavXhNrZgECijmjxZg2Jb1BK7UBMGfCFhub1f78JoGLzRiuYzzQabb9zXWuDXMwAMKDi7vvNhjvGLK3c",
  "key21": "5yqTLRUzxy6aVeTdCwNFQTJhrs2gRH1Lkf1p3ehfpT9SY9fXJXniuhZz56PNSUsEp2b4BpCDjHefrZkWFghMhwDh",
  "key22": "3egiHeNdtFwR2Br7hfYqdZFq4EYD3ChmFZThH47Pgz2q9R95BpBU7Rh53y7EC2Wn8ukLQe2W8btFvnKz4jBeEAdv",
  "key23": "37h7PVQV68j6udKgvFvDAELy4rEMo2NGBpE6SDPVnqartL1yf5DDAYFbbPxENJbzUT3LzpKE1A1vUaMmcf7gpxEA",
  "key24": "5pD4FTVxyTHuU6ECs5WQhpTLs3itL6E2ieSsuKZwQTGwnSoLZVueRB9TFqriQuTgE8A7uQJdEwJxcwvWsFiRtWNq",
  "key25": "2HckZyy8ZMDoCCCwtWfEdotQ3TML5RrjbqZmYUuwbX95m1kHfZf7kofkf2vjWn51FpSNjshkv3k24mHb8zRNKX1Y",
  "key26": "H15fatCtSvRGqZxL41v27yATDRvRUVqr3EQ5eXBq7MpDmG7kE59yUasa2cayme3VfwpGSyHP2yfKfvgDoEoPdTx",
  "key27": "5rYNtzQqVb4s7gkR4Dsg82E6rbwsYnLZqwJR48Eva5PC4z8vDSqqA4HUVEJ2DtQUwcWnViHPBi5MfUuy8wiyiMF1",
  "key28": "66RMaZijRvFTjZcePRj2pSHUzpGKLKeyotc4R5UZwt9gVqffDieHNaaemAes9jkFwUX2nGPvkkj5ABEfrx8Tj4Bi"
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
