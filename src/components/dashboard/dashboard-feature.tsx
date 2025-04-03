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
    "5r3GgoUKC8aDU1Qs1oTRHJrBCceTNekSTkkEkHieTpeD4BdoCpaLhWsn9tFu4ViW581A3ZNbPgYvTQTfiAUeoW1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359VTyLa5odWPjqmNFoVDmqDsM2nFmotTHoR5vMutqQAURSyJ3suM9PfbpAivRUxBp3o8BGv8sxBYsKAmyks5MTV",
  "key1": "fJ44cLxg3YHoH3ABwxskk7DjEtUkcJ1SUrpDWwxwcM9icr9dKM5Waa8ESvtG5HUqEARDotskmn3xHfUJkJtKRi9",
  "key2": "rq71cGn3psX1xuarSsBVT6kBxffapq8jXyYVyq3e9kXEWkSrrTqVe4KvWhEG4rw4kZ9xmDKGQm6mTrDekHQT8q6",
  "key3": "45ukZeRgmzDhi161w2Ui3DdjyWtkY93YnrUtxrQ5cZu125ASQdLswND38w85nzHjQ2Y7awEXp1NMYguN42wr4N3R",
  "key4": "3F58o3hZm2V7zu37TUA5qt1AwmbyjcZbfsQRnXw2crsn6dKXDfvQw4kbDBLscypckBkvmiXSsJyt3Rcz79xGpSZS",
  "key5": "2n34mGqrh9MDTuMRvRgB7nXv57qiqZx5Tt4mSJDNFF7622Fs29wj5xADcRmndY5ngmCjvMBG1k5FuxBMARacSoXZ",
  "key6": "4pn5DejjY5TEJPuxpXCsboHEZJPU17NN8ZtSdN3NjYMq5tWhPz8hHfoBtr8KJYN6HvxDEC7p4wKpy8CfXj1jBdWh",
  "key7": "4qwh46uU7zKaR2fwuHn5ZyXcjcA2QgKF9JPJnusw8gkRuDmGBnQTU8WFQP64u6Mij237a3uxyoXL8AEfgi9Mqaqe",
  "key8": "uFVseprhcPzNEcjqqj16DT96ewGZSvwpJRyNzqe39FykA1kGUHtExiAG9ygqZfLHF2GEcZVumGXPtumJYMGbdmE",
  "key9": "434fxUj2gR6cbnLF3WqAN8tVv6wVBy9YVxAGbBFxS2eYdPJgtBLETsV3YHRqqQX7dxW7CzoxryeZ6Z7gXvztdLku",
  "key10": "4v5DvvBVztxVeWCpnfMBVaD7zgNUc5wJUNbRB9WVSJdoKbXJy2X8x33Z86YZCR4YCzxjDfNs9BerK2WL62RryVEW",
  "key11": "2iBgGHU8rppQKZD76XEHaCrq6UBeRz49gmaegdxAzahT87sEJuUVr4yDCY6ezn3K7WjNYPJYniewVEtW6B69BG6v",
  "key12": "47g1QwaaBq5aJuhcmgkUGMe7PquYdAhC41KSp9NE6qvqE8TxoPFC3GFcG3MskCaUczktCSCzpFEUUoqPh52tuP1Z",
  "key13": "4AGos4QzeEhxs1a1rFo8QoTjo8JupY9JYY5wkVTKbacD4hx1uZQkGdKuiV8ZY9RB8RNa61sob2Gm9ENJv1xvwQCW",
  "key14": "31reEUKPe9bke9KmDWg5SBR4ty6r9FgF7v1i858bxwXV1KDjwZXPwyHnAxhGHL8MAEicf63RLe4QNwDALPSaghSG",
  "key15": "1Bkrhduk52SbVvnShSWyss8w7Gq9HkvWkUcv6YnbF68c77CHLVNUsNidWZewTEnG8tW8RDNbERkfhvP1ToomLjE",
  "key16": "45qQwUnS8kRvoqMvSM1sikk7xeXoBX27k5uAsCVufb9qQSYJwH2fyp9yRQPDC3ARScWsD1hCKJcmictYjbF21H2L",
  "key17": "3GRmDxfMh7ZRaeDavZDy5oJ2hTLsQB1iLNtn3Mqekg9utdWoJBiJkAeuEHB7feaVap68Dy9McmiD6xXDRGh6EBzM",
  "key18": "eMqExTXmVq8fkuMDgqdXHh7fyJHrxQxMV8kD4w67FunUPj2BfL2Jsuipi6RySFJBz74VttSmiGYuHnkkTYuxSYE",
  "key19": "3WbasqHF2M1TqxenpkPWDjgraFH6mmDj8pw9AHXtLP686qpR5qsnrcbfBbh1JcuW4eG64rzRnVhCd6rSfyBx3ZEc",
  "key20": "33WTdSu6nN9sq1KL3yViELM2Afa8KXb7P3jj2ErQgWUfLeZyfAGweTdymaqLR5TpcAxH6641ncdDzUt1eUnTDUkx",
  "key21": "uZicpZ8Tqa2S9W4Be5faW2pyTsHDTXWs8Hk4gQJmwEnSddXo9KhZh7Lz11txmxK7js6nbnFKrsGLSxx2dGFi9BV",
  "key22": "5uGiWGtD6qrzcLYnoqt21ZhLSX4Zpq7MXxr7aMd5oVJ4MvVjuD9JGzQ1BhQLvRoKV3denMo7BNcUwZCCfc4Yccyd",
  "key23": "3Ay5mZvcLxdSEXohRqdt6QyDQExNBKGQKzLrWvGwyeVvUZd5S3TUVdJ7tUQZ13DGeN428P6LXbCbidFVoTkEFu7t",
  "key24": "3wphLDzHKtkGxn97CueWfdDnxETYAyULUDNApJ8NDaRdc9WxUhQF1HEJ5fy7w8WPSuC2F3Q4A4VGZjM1CLEtne3p",
  "key25": "5qg74DvgS46371q9xkAN6xJza1joPX6jh45hKDKM3M6usQae9KRDPU2oXfBmbgCnZpr9jGV4LZu2bH85iv4oiCMC"
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
