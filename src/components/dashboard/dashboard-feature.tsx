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
    "4LdkbBArkeNGPMMbjwTFreuJvQGF7SaXsNHmsByAgfbBUkw3dwzcQehRrUE41Y7v9BdBZK54vMT6D3ieZEMknzYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jg1ADoXiYCjDNTCTNBZpCbCCU8AM6itQhdKLUVvhVrsTJkis2v24ity6tkEXX3hYbU3AwKwuDTweX32LyH541n",
  "key1": "4UmRY7bPcxje44fpJuBq4pVJVh2CNXtib1HogPWESWAVJdzCypQEQkPd41cdHJqX1EwrtL2paNR7qVUhGNC5ogre",
  "key2": "326FZHMN67cB3LHR3wVU5XEyXchtdU9bBbPs3UdGoJb9vwLoSw4kq2Dqq9tAauxYXumRhyXQ1C9bHqYfz2fj3Y9k",
  "key3": "29zmbPCYW9QPsYERrGaqigwNtJk1XHKTj5zaeLXDuDbfPRZouFyNTUgWFpL4j5KAtc6UEG67GuEr4JDgZpwmdsRu",
  "key4": "3dshJdhnYNi1xaCfttrZQk84CCJ1ttvutDFAEF282hURtPuaX6fBkiDFPFVUSPdtaepyDgQnic533atPA3G7rHjs",
  "key5": "3zHm9ksLcvxar7WfWEFyDFuTy1GJB6WnPHcsCANVEdDty9nda55efFqZXnhVxrQYPTz31TpXgqeRV6LRZzwE6yFK",
  "key6": "L7qvq2SEEy2dyBhZ1uHVhHiNSNHmwNEXfNFpHdrJNyiedvRxto6LuQj6nWUtuthaZvy6BhbvMzS9b2BkVQGYaAk",
  "key7": "3Tu81Rzr1DHw9xYqAR1hH5SYrnnU3GbArCMa2cTGpU9XFvDQhqvdS3TjmRkg1HcgJoEbDL1181U79NxxweeAxQib",
  "key8": "b2DGCCbcdKeLGvXAVKHSqoRxhjzaKGhsU1Ld5vczrkve9xusTtySfeNA6iCHb7gfsnxoLbYb2T5f2SWFDhaKm7L",
  "key9": "3WY3YoU4oP4cRVfHaE1dLso6qQ3YrNZLUJhsRLFDWyiutbiEcC7g1dMLpBQTe8CahF8R7CnDWBGQXM46T1fH6PZD",
  "key10": "2ggYCS6nZ1yzka7VtJLhviQgqGFyPw5MpxuyqXUBKFCvJ36Pemb3cT6u1jmxGBGa5TNC9qigWiNQBoFhagg9D4JR",
  "key11": "4FXa6mhxcKpbag69JGHAjQTzPJ4gjx155B89Kryh42iiW11JFjvoWUu8KnmHmPW1p3JJCkd2ti349Fsoyz89s6Tq",
  "key12": "21RHNF2nfxws3ADnnHst352tbkD4ynpv7VCLiVK9mpduaEoRAMTSKBrRWjnvxDHbpvJWtY9c4RiMFgKTfcHdATzD",
  "key13": "3t7BmbvBsNB3Xte8YY8pK2mNhNEpBrj9EAt1wCnDxTU3Py4cv4tvVK5ZMUamBApahUzBc2PwuJr45UBvQeCmVYp3",
  "key14": "5VLTbPHVk6N23ypP4zkZZTXjCTHB6T3UiEEhizTNBSS4KUeXiYbaiFffHyQXokUWSuc5XiZe5iufvjwMA56U6uEd",
  "key15": "4j4NCGEMmKgp3n4zYC9M8CjKVfwuZSsKwLqfqHqg5SmPagSoYNtDqckyKS4d2FnJSqyNcH2J5HEvHA3g5uqdCaL2",
  "key16": "3uKUQx6844JRMzKbnLiq6tiYsyshb7g6EXXPKpf9DoSZduR635fiUttrNPUAfdb8HvpMcPyVUnhR9uMoVEcbjjaH",
  "key17": "5ac8rK1vQTS5b5R8FcWaALNLb7NcPzjutby86S2FtudhhVboq73TArEwoXDEoewGLb8Jwj66qAg2XhAHfzMDXbDX",
  "key18": "rzxuqeHDxKuQrwNdvf6Rwf2ULFwYEvex7eZygKU1ifNYx5MYSwsnHABN32pSKqkqdh672GczUSrfkjPTCkyVZ9i",
  "key19": "3ia5zbqtnAvqM1i3q1pmJcJKFML2s2Kpornszv38tZeqBQbFVHZ69aFAjZjxkvVtrbZ4vzH1JsP1tZumDPwJNfp9",
  "key20": "3FnWf9G4TP4TaGLQ4txjCbveSr8qdvxsVTFpBXqWafn7CXfEqXL25tzpjyycQmM5dpkUXUJ1BusU5Zq4MroTg1ri",
  "key21": "5p1Qeh4zU7TfmVJPxW26JZ6QiLsWoX2tw9vDBXUSZ6Z38k81jidiQuGjAAAoWEowmJ54bakeZE1cJVtSTQsqhyhA",
  "key22": "4F8ULdzKk4oQiCNtcyQ9wyhAd9nxMQcvyjYNCDxzDp2hggwnhnc65tpVvwAFy86XiAXoSTme821SoSSPAEAUpNbu",
  "key23": "4GrpDSfNFmakUx9dMwb6qtYHdQBZCegNT4MuM8hTZ1uoMk2V9ftvDdGmGpss1xS9SWNEcPTBc4XVYnUoJpd6kQ38",
  "key24": "ctwMbnKqgbQmgb5EX4w4qTmWzhPWBs4hj5dnMj8e1rfWH3rugmBjY21wqYHokSM5HVpxzJ7HHR2zpVMBkUpccZP",
  "key25": "5Qohd8KCVP9Rkk726WLDbze7oAV3H4yfy8cJBHXdkKo142TQsEDNwwFSoK9wKPdBdchJhrJhaR6cucsiM3wxA7fp",
  "key26": "LRBfEpXnvvS68NpZ95xW7LtR2ip1X3nS5qRMgaP8QrgWMa5epnA3GSNPy9jt4nQAAmRM8QCboWZCehnKoD7yRN7",
  "key27": "21TMMSypFBZjLeo6XGzE1bjXna69hLhpNeUFaAactfL15sdEDJYz56KCVew59J9z7y1VKQFpXVABJdv9w92syUYJ",
  "key28": "2TPDM953xkstgQhXYS5aJXeRh8zrkxxQGzwymD6f6zJw5NbZWgNUG3h2eZs2e1bfaDa9qDhTr8HczMt5Kg97AK6t",
  "key29": "kLqGyX4tC5yHyW9vcSdx2E9QCwUtA6hqjZepyePnmatCh4JGZPuKuWyXM3uzaoJFSBmL8c1nL3zCFy5KWEPfgjA",
  "key30": "pEU4Q61ngpSSuv5YTNpBu4kevGvW1CTjjUVyxfuHZ3zeRSugdLqwMAxTwCVrMe6zWoHqejiUp3DvNvbpHodLggH",
  "key31": "46JMoKY3jr3vYyz4ktYdB9uxPxtj9arFnFt5MqxQjRLc4FHfd2Mbkkh5WkuTA89qdQGxAonikMKkab8b7Z3o1zMH"
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
