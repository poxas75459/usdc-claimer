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
    "5HRHrnosUgUGZ8JwsUjewwPkCQNJc4jFhAd32snACK2xZRMpZX8jierErpwD8JSkmPJPEVNnfhYfHjvorpMdm89Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YvoXaXy6R5dsxRZyJsrwKxKhATfd2AfaiAU2NthkxV46QrnAnGDATiJU1tbJMzYwCHWXH46uo3p8jke8d6hpEg",
  "key1": "4hkP5dnrNuhGYtUW242CpT7X2Qh6NKLicJMHv2WHbzkvsF7E7aCfeS5HG89DeF3Hj6ytSojZwzJDEEgxD1NvY9yA",
  "key2": "4AnmibDUdfwhp6FJsE16F7NPsVgF6Hs6MAcKSWtts49JFcMU7UQ5h7moenV8TeosSGjgfkWaXyuxMP7PAgRJN4Uy",
  "key3": "31FysPgX3u4WYtE8c7XBNaMQSjwjV3MaFf5dzmhhRe8CZh5PmGWkMXpscdbCiv5MJoLskcjtN7TrZxFxTTT9ULiV",
  "key4": "3czNMKMkmJVtJHshk5qLsXV1H6mGa6VnWZhBJQaXWududYd1KikWAWj3cZrousdVQxix42VHWnn9GV5DgEqZViSn",
  "key5": "5QGmVi6YzPLS8iDV5MhVz8ZvqKH3ZZYcHaE7kW9T3VGG3jXTNNCSJuYfvfx6tdNaDTzLdNLGJvZTtgaW7RLg6y36",
  "key6": "5nRHR33wmvQHkeSqm7EkMGpTAmFKj7PH4qgEARthWBKq5V2Pyw4QMD2Vv9mj9VoAHeVcUDsmcdY2SvC6aMDP2ZGf",
  "key7": "3eB2wWdzJE5VeU7Ab5N7nuZBpHWWiksV7DJdypSig7aSErWcNx6cMAof5mc3XcfmNozQZmuw6eL1t7i8LBWGHS1Z",
  "key8": "3bATqtY8pP6tRGZtLPvGFryVCSwFv51GwHerBRSFBNZx4EGDPcmxHiiExNEgFhacygUGSZzSEUwJUoZXo7o5Ecjm",
  "key9": "ZYA5YgKkHXTrisa37fKDKdmp6wLk4CYDr7jatx8vRr3jy3AcdsuuW46SfdnHfQMF7UujiK9Rckk8q3U2ShMtzJU",
  "key10": "4tUaTXsZdWv82U8vD3NQwshzWdzKWFL9yGDvS3dYShBjKJHL8fncydvDAHT6Eg7z6QkLHwJvEoiMCjFSxTT5JRJc",
  "key11": "KoTwZv7i7yT6cXqyhUdhRcBPbFjTGmKfegubP71SQZHccuQmkBUnL2Zgr9yEULVrX8umQuj2jBe3n5fCeknEcJQ",
  "key12": "54BKHXrbk5kDR8hD698d54HXorCPcSfhGGwha8HJ5JC61jNvb7ZFp2be4HeuovruTZspv7Nvfan5vfZvrDSz3vHJ",
  "key13": "62VKW7qLS8njG9NJMs5Hdu3AWD2hVds8AEgyjSrb5dP3tLFxFRzKAttsW7bzG3jZdW3awX6omrTAssrKoWKcA66C",
  "key14": "5c4BZxh5jr3es1dYvhig3Yirxp7BjaQfbJBoPKpLyrKRU9F6Ue6g3WjoifvfVdv6cXjriUDwzC4uiuUWi9ouUM6T",
  "key15": "3jbwEjkhao5DqwBaaDq6AAcMhfxpiN7jD4KLTucMzbMcb3MA2p8Z62ug9myn9XSePQG1STqybA9S9BTzb5e3sJxf",
  "key16": "4SVmi8inBBsGHDVdmjTEr5jRvmEKGQmVReZ23CTdpeLeZntL2VS1qb3qMhGUFFiqpSGWHGWMXvKtG87qvVRcJsLr",
  "key17": "3yPvvU3PqDRf2tqQaMC8544LYhbdW64wxeFAw7dyt8yhWYjo3KmpXKcbdVLum5qRHHXPc9qbmJB61L27gS9io9Xj",
  "key18": "4xPe8PaGrbfnMUSdQ16ZUfdwFnBq2oUvqV6JcTu5K58M6wxHpXdy29aDw6Uw9ZrLCuJVT9dCKVU1jgjVorc3HBgS",
  "key19": "4xsZJN78BW6MHNM34CKrqfLdUTKSMSuNeF7FU3H4unvdLJg9mofsknzuATikdYk1UEUA119yDDHtNpJk7Tn5ci9A",
  "key20": "cmSUxG9SENAxgy3vHLdMPuoxHo3JNTs82DQr6u3vvpKoa92qTH73rjzcc4sGBtBrkKoZeo5WdGwz6Nn5rtv9E8S",
  "key21": "3fDEoDP4Hwftq59iFX1bgFvoq875jE8uV9Wjs28KYX9BV2EWu27puBb2oWQaGVuRzQrALyz37JBghepiLjUPUPWa",
  "key22": "ZYZHKHjX6jz2AS5Lp2uiYB1hfjUCTPqssxG1Sx5uyjbjxUhbQ2qzuGXKfxBe5xMsL62CKcDvtiT11aTMAQoTRWw",
  "key23": "2ZsFfBUmLdzKit1rrWXabsFpx4egcBwf4cQ9zUnZXuXrytz57WKhBkYkakw7aLLMB1Su1Jq6y4Zhw1abeqgGf9ak",
  "key24": "5MKW88mQR9jgFfPSw3FaFJaQuYxVVu5Cje2NCE1HU5QFdBjbQBdm8pqLsEXqW6cxEHkz7bwvsvxC4EDg5xZ3hTdu",
  "key25": "2aqrUy8gx6VnP48e84KcrzUjXB8EhJeMn3rtuZfjc4ZBMLfAK8akTM1B4v6zaDN6p3TM3tfx6kC1PZSGY2p1MPcy",
  "key26": "4NTu6vZmmzU9pQ8mhrLngQ3hhHAH7MYng7M1Jho42oRGL2QxA9fE4kQW1mpxFoy1YjbTJqqr3RWRNbwAxmk69PNP",
  "key27": "3mKFioxa5TWtk2zSNBJVzHvZi5BLniJuAH9ujsBsKi8EvDD6eeGEKjoodU6kp5Y6qZJA3achCwetPjkj2LcykCEo",
  "key28": "3dPjoXFbBHXXLdXZs8kq7iB4NmPZu8mJgUiGNhRWzY341CMhBFrrkZvGSZYvKLrBNE2hqrZF7af8VXuJwyAKQ3Wp"
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
