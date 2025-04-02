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
    "38ku5uagYqzyKWo4HkgwbjJF8nXoC8RXWA3tsdN8TWeWzfV6pv52s8ua6Cat5C7JfRuUjRLTpW4B9SUV1as9yMuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycsJL3C5fCEG3LpggixfGQwZmsHHy4agDFeNkAtRCA4bovqWyesuvDNYwH6CVDzs1d3RGS2AbAiUQUsTxYSGqf",
  "key1": "5W76F65zANeqUMcJTatwrWN9YnzGLrfCtUJrbJbwhVWnALio5sYEfYPnLwxY1jTGWfeqym9QHR6JwfxR6zeQbmWa",
  "key2": "4r7otn4nwm3byWV8frKVDi7vQf5mpuHfK2n3YQxpMd8CE1VhCdSnzM4EYEmFXhS4RQhLcMw7qySBQCibYmvcNwU6",
  "key3": "5TFAipYbzUUTnGKw5ynPJrubTYXikX96p8AjHos4yi2nggnoEi87zdiB6izbMLx8Zfk3GwxwnNHT7Z4UMtukNZX1",
  "key4": "7P1BAKfXBg2kUi9CWQDZ47reFnMmc1YQ4p1hHJBsrQPrxUit3C3GbgW6JjVss6DiCBA3UQeVQ7PLkZju95rosQn",
  "key5": "4Sch7sU5fJAfkRNKg5LUs8qzcZjPSGJF9hcwmXcnM4JR7exdWYN7JpJWim1NLDBj5oPfHPmYctvZRFKw3QCFUjyc",
  "key6": "49AUdU2TTH4NRMvzhJFRq8ccki1QWLYH7hcz4YYdf2ejz6yw5KJPKLCwk9sfRFgHZrTugfqna1B8UnLbutdeKz9P",
  "key7": "TqVMBLGaRTVzg4PVZUeL3qJ58VqfZNJsVifhCkvq68aVeS9iTG4gFeRrQQ1EP5yumCrszGZiwH9dPRwe9U4B98e",
  "key8": "55hNtg7gTvwGdpyxQogfB8fcDRjGkfywrtj6nv4XPKcWSq2h4m5bCUPRdz4NmimaJaYEdrYw5mLxBweTvoTEH5YD",
  "key9": "pjoPrV1Usx7p5Sq7868zdPTgkYbpM6XrTjgvKS1uCAQVcqbg5sU5KG5qQX4fXRMbj4yMNevHzHJtgdthpP8CDU4",
  "key10": "SGzcTeHZwodH9ozXYrkgCg1Pnsf2XhcN3H8g3dSTVTHoEQX6YjGz9zcEwFBw9PVs594PFD4yqyVEvJQnDGJnDJb",
  "key11": "49AheGfrej18h8LazD3comHTSDKT7y7tfB1nNN9wF4mts4FdFPxDKDeYig9qG6tYMYGa1w9bL2TDUGx9cZ9fCFF",
  "key12": "3oZCH11V3dbSwh6BfVnn1ZP3FBTMVTcZbEHYs3fyubCwYdE44rw1t8eWAH1kidCm3xZw9cxXyGrFJJHR2LeNvRcK",
  "key13": "tBe3sDy8kapUxn1JLZzNJWgocve4EwLQwGgz5m5toy4wVCJp1V3aV247ToJUZWW59nToDBGwNLuyF2dHFYE1SS5",
  "key14": "5KEfkY5EUww4HmqHEURJgfonnH7gE9XU21cRYPZw5x43RaqfoeQzzisHFUXsckNnSWWcEWBQCQo7KLJEfMDFW91v",
  "key15": "3JZLc3UsffzysTTEXF9A2anoB8qVzXWsgvjpJduFFKWxCTgv7QtzYjFd3Sxzb2nJqSzZgMqDBz4kVMpaZn46cXq7",
  "key16": "47woFyzHGLSxXpaSyMBAhHuNrhuBd14iq4NJZbDx4ifGM31diX2YLWAuBAqpbbz4cn6krFaJfPHpF3uDfKxC5tLr",
  "key17": "3KWarkKd3tS253SLrQRkoasWAfzb532qgTe5bk9cgPJtsBWBmeykSfi1cvuJY4rtAGazvN64YDbPWuLmcpea4yA8",
  "key18": "354ZPhD4mT8wKmDrmJyfeq7HhUJ21gdFoeSXshfRF1KjTGZN3k2WfqkRpcyAcztEG3wvpEXh6oiKy8fM6iZHJwDG",
  "key19": "67RZcABb9uzG5yf4Y9Z3cjYrfdKjYiWFZb1XJ44yGQnQQbfs6nVzGjop2tLZ9h2PcYNKQPixHGvMb7Fdk151WUoZ",
  "key20": "YRmrLmq4Ut2EJ8ACC91Fdc2zJL36QGMTjVh5sjvXXBjgF7DdS1oLUvH3kAHiVHBvQxkWAgbSv3YLtJApvPZvzZC",
  "key21": "5Lha43qEenByeCxPXYa8zVzcy3WxT2Z7qHMirTfDkK57gNpq8SeRmDWFnNZoGz9o4S1SvpXa3aT2QED6JuoDE1sD",
  "key22": "55wb3YYra9BL2JHEyeT4RK59jSVmT7jq7zgXTS9v3FK9LJk4myRa3eqh53mMEkMbsnAREhLmCCNfjZBowmpbg8aL",
  "key23": "2bGZ3RpzRToKnthVXTJk8xzfjBp3qquWmn4W1zMNXZQF7i1FdYuMJKzkLCBgE6qfR8PnmgPqbhbfYHa7tEqivrNK",
  "key24": "B69o31hvTLA5cvHw7MP74pJWrfLppmPEroSJZt8AZbs7wKCQqAHJQFuuY5mnfxxTP1vSJ5JpEfUbxyaXzE7tVhU",
  "key25": "45nYjv1vQTJ8ja2fUdukanPWVuHwP4Rtsh2q21QqgZQQNnqZCdfcnsuBKcuAvUGuEd8zVSQ3UkJnqCdtfSAr2gf",
  "key26": "54R2Z6DBgip18LrXvS4Lef2UH24EHGZbuMKz6bwsXcriCVTyR2Wh7eqRYBKuXVd2nzffycUNYz1yXoJBQQCy9fHf"
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
