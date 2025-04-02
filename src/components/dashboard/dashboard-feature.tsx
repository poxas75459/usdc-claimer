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
    "5DpfSLGaF7JgH7nrHsEMssqCSY2c8aswqVrc89fp8xzxMqgAJbpGzfMzY2TJSp1UNMxkvbe1cN8mWaveHvWN7ScK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAsMDiAd1esB2LmF6LVDeguQA1nwTddp8n5o18XvK1JdG46j8iPCoAZWLCZQ1VAJQAJzEmeAwaESqzb1ywRkNbf",
  "key1": "4DM22cRnB2861hxMGo8uEojkR3KEorjanXjTpmwhi5W4V9tuavxcC1ePf5iUHkRMUfLYE8TvmXu61CfYakaLTbdh",
  "key2": "54MmWzJ927fmJotMgD4nXdMDJsFVvdjCCxiA52p8pxZBmG9TpRaURXzhjXFroGPyoa1Q53X5aNUCdVH16q8UNy7s",
  "key3": "53dkkzu4U9sv7ywcMd8uknvUgJ9u7qjTJTaZzcHaBDuC71Hwf8X2tEPkH25dBRWC4Cnzht3qDHyBJKdHJoPXq2u3",
  "key4": "2TG7v4UDrbPGH3KAPgGYP7ZpLUmPjs92xvtALCggkoZa8VraT8dTtWUp1n1dn5ZFajxyPdastBJ9SywHKYcziaej",
  "key5": "5LbSC5ZiUhzvk5vqyFDFknTUuPPUrsrXLWG6keGAc146Ruizso3KV8X1ooiteUcZ29Fo74k3RUhjYg4qDythB1yF",
  "key6": "4Wy7MYGnv94aRW4Fm4i1fPn8dhnbFzheWkx3M49dH69f8bnAoov6u7rkK2JqAj1QGX442TXRRFMkHkb9uBKYHSvZ",
  "key7": "5tT47Vpgk8Wp4JW6coRQgsF912nySfrBL1tZMgTSk893yFRSnasQfzUAY46kXLHZS3P7fnEGkV8fjwgeLgBWz2WQ",
  "key8": "2q3aYQ77DHUqG4tn9cFCCBafdxFtvSfczX3tJ6xewNvDXHG4moZG6iwRuDB1w1jKqMSvYcm1YSRU3VDNVVWu4Z3H",
  "key9": "5cRuoEZ4gvkogL2ekGbDQYDbbMwhPM6uBhZK5ke8iG3FNJUUFfqkiEuTLqDoUr532ac2CyeVHhmhHumsp4UdhP9K",
  "key10": "2y8odfT86UAEaJSVNjsjETmEx2mqG4o7w9Wq2ecZDUyYvcjh9pHiqmRANmcRY5S3AFoSExX1HyicJTo74TnxvBv3",
  "key11": "DxZQNjPYxdt2DKKsfHc6vxzD1MsJPG4cZwNvoPcWCL5Zaw5iMoiGtnjS1yJXZBkBpdFP9sZM6jm1xmZcpT2zKYH",
  "key12": "64vXQytxDUtBtR3uSo2b1uGFExDzREV8nUziLZQt9EceYZ9EJRHnm2V2xUA8CTogw4XTHhXHMF3RMydSW9fUEtGM",
  "key13": "5WGZs4dUhkDPwnkGTsWCtsUe6K9vNu8qMG4euU7GJqaXkzQ59qg7R4NU8V7Gr8jeRWafwrLy8LNw32w6A36BDZ2a",
  "key14": "5bSUg7V7Bb86R9BxRKRxi92ZDJ4cMW5X8UafHM46fezNyhAUUJprYUHsNdb9aVYRz1ovBuUHjfzeXUe97YM6XSdu",
  "key15": "598VUFmSsapx2xSfF6EL7pVtR9B3854JqUaTpBa8pmDHQJ9LFQzSbiTYBa1KmbBFgH5a5GNJzBEwHCQdAvaHjG8W",
  "key16": "65cy3ohFDFcqoXMu88oJkqJuA7FGs2KsH5aBB3wAM6akBY7G6Z1AbiyiqdrfiM9xbbWKgvWMyTASRsWGDdwiK56q",
  "key17": "4SY1K69yzo6ruZmgmpkVYrmuznzRbUGmmjEKSjskqmf5QzctoDxw45jMWLTP7mr1Xfj72FVZ7ARbfpdyzeSuVeky",
  "key18": "5kLWmtEdsjYKNyFLNfASrLENBWibygoZRmSowWgqdh62wxtPbiowcAmQj3iqtth3BsgXBxUq68cVrz4zBBYAXjtq",
  "key19": "5WjZfqnVcp761uvJneGzhBCWCTUHYh6FRg6Lu6LLtmhKndaica3Mc7qVUNRoeXk8M6JfnFBjqWKgZcFkzFsTFWoA",
  "key20": "4wcmaegvuzpHWetLCckJqFkyypAYN8ZPeDLJ7oGgNAHC8rpypZHBFgDMh5inD1AHH6hRmwF13FAiS5TngXLs4RmH",
  "key21": "2Erj1D7dLWHpvcmrynGpwDehmjY7SbBdQTEUmE4mMKnctbmEqvRPwE1SnTYMb5U54H2YzjUGvTfmk82F4xxeU9UC",
  "key22": "66KYF3S7rRteUgpN27ubcbR3jtgTkZuUk6kNfZjrARLXuAcsHz6eqM8XSyZWs9ZnHCShd4awZyEtHvdiZpXF8mBF",
  "key23": "5oNLqrXeKuAb2MY9LLbKgnrnuEGowrHYK5JzjLzJk6fy1W9983reAiXyHxgTHCMwut1pxgriRvR11fGYVLz1TTiR",
  "key24": "5q7KPLh61SVTQhWuLR7Tqkx2sRBhZp74JfnRqKFGMR246e8JHuffPjwEWbyycG7BqY1k34CjAgjGs7aUBpZAbWDj",
  "key25": "giAefDLe1YKwaAdmQNLjJwBhNPdM6H9Qyq2xPFhuHZeheZU4Ee7KsmGVvdoYYL7ydiMPw7Vku7TtWamqbmYkh7c",
  "key26": "Jans4aPiRCkiLjDnuV3ZrmyBAksPm2H8hWxS88H415q6NKqMM7w34RegNzpoBHNSwe38GRsD7z4ik6QZgJGG5hK",
  "key27": "3C8xZU2MJX65bRj3DAKBzqpdDhdpD5mxx7zVTLn9Rt5C7WFKpZN1DEQJeTUEGNXFK4ud9AggFBLAvYLHW5JNqvV",
  "key28": "4hsJNYVzcTBK9Z9EbyhVxDHhUdAjgCFS7HM8s9QgLbZ59ruyZQZ3Ky8A3MWqSENfDfrM2H5qdcMu7XU2MJgKRnCH",
  "key29": "mBdjX377ZgpYVJRSaarBWNySsUYSaYmo4RueBWNrGHveWXvUHU2U1sKdgjKaCSSiph7wRVePFgTEtRr8DGvBSZ1",
  "key30": "3hbRtSKeEeypbpAh4EAVrLzG1re2r1ppz2ye7hHUcAJYADwuafZELh6xHiUpod2i2zDFVejes1Wf4CJP8FuhkNvo",
  "key31": "48mPZm5qqjkduSoTv5dQukDWsR8Ha3UhF6qh7UNktNVTayhpAmJkfosMwfEnoWDidJrz7EBAtpTg7UaguiJjBKth",
  "key32": "pB7gd2HVbp7UdF8EeCPfQJrxCSmT9Bj28RxNJM4YoYyeZCYmqW7qfmED5gMU3XVT71yjaN7BNcs4kFSGkYzVqzP",
  "key33": "5KjSyW1G8edgWnNGHEhBswU3mBymib3pjBbc88GVyTS2E1yyKUNfkYg4huisSVYn82PBhqPEWxNHeUwPN6mr1H57"
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
