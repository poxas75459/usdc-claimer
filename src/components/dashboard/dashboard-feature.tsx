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
    "48z3vXixS5HhsEvaFV52n7xb4D6dhfMh4BSoEfYtV4dp1AAPpotJiTcfChb8ezqPDfJQEiHT94SmAvMy66NkQCay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y18qd7MAAD55TmYue85DTpMNoJkyH6gM1qRpiu2whKSHxA7sRHTsuZgf5Pg6wepMoH67pnvmSMhFT8UMBYSe6rS",
  "key1": "5kDCvU3LXkQskkRZ66C4zby9tiT6hb95ZDCKvtnFrMsnq5rHwnCNyMqbiaqVvRyu8k1EGnCyieAiC5eEHbqurEgq",
  "key2": "4AJVySh3Y1cYajLW7UD1cYgWwkGx6bhvSGHg54Yrtf3HLEBwFQJJQdEpxsCaebxxEnYr13ohbM4GkpbaR1AAY4Tf",
  "key3": "4FGmpQxVoLk6JMq8oWAHcb296KeobFNJR3SjzjdMcjr1eaeYYaXnF7jbLd8YoXhs8HZeWKGdbzKdkGRcDk4yva3w",
  "key4": "4ksUskKAL3xDxc8eUcEkZ8GCMGfxX6aL1ZN6LJrWhzGp7u7cJqqPkPzvRpTyxNU3x9DRFcPw2tQ8NSec9dJA1KE7",
  "key5": "2aM52ja8ht9d25Gjm7FjRyKnL4Nqg24AbYku43UXasRKAvEXT2CaXu8FZtse3Ztjf4Z8jiMxFhqxMbHsbPKzKRuF",
  "key6": "ivyp1BNv3Adv1hF7S2ccbWNyabhiQtvAVa1QuKsjcEnFzVsVRmG4wphZ3CNQe21LvDZZP8xAmf1xTQqAtYBkg8R",
  "key7": "2wBb7CXcJdDZ9J5xUW5EwciQtMFsRaF2KXJwfUpuRsUDtRS9SjoB58hSQxo42USwPGh77StafKLYR5U4QrAbXNRG",
  "key8": "5V3zpzREBamZRynGZTzt6R4QXB12ysvd5YUf8p4DQDpeDL2qrzASsWrrSU7HkiAf7SCAb4uthbs988QaDoCrBfCn",
  "key9": "d613UGcpYkJUrsK8AvThEFbzX6TYDYvhtwnnhPKDgaBc5mA9eVGS8xbfTmGdw9SgQJ3G3XaMegHLTeCETBgLLHa",
  "key10": "41afyjMaWjNiGTTHtHubJvzF2kbaxo5rTpkqYXGMuAUFKeAJM2XRAdYnzDUviTGiGyYiU1LJ8HBRioZJ7Vrq4TEB",
  "key11": "5cfHWThRD9L1YU89KqH1W9DEn1ggFbga7TiGdBiyizYR1gmsjYV6QE3BgUbGb8Th2y3SF2qUyiuZB3A3G3s6xAJp",
  "key12": "5Cksgt19DnUb31rHiwCp6pTKwE3gFNPcqbyD7ESGqA7LdKhoEskhzNpvDtFWEqY5ANURyHeiJE5pMLixyuHWidgv",
  "key13": "DzTnaHodYdQxkYRKe7w1rQenx2oioNo7V5AWB2GdTkVxp1otBkZ5isLVGWsrqGREbkNsinxn4r4gaCpxLJpz7R4",
  "key14": "Li6ZGHgEofm8WGGGH7bSLH363HVerELgYkFmqmMyi6NLE8xe7JuzetmijCK4g6P6vmC1smKvBnN33BwikK8bqLB",
  "key15": "25WQFSx1CuWjEpSw3u7KeZbJCkRf58LocWa4YX1m1t99VEhentfzq7stiQb9HCh9mSsuBxYkSNZqhPfKExHFS3ei",
  "key16": "5sQjTC7XHcHCNZ6vGMPJqvHnfFQ7H73Y4W7ukxuw8MoBXYMpeNCrFSrXKy3GFyUhp4FDZtkirdNB3BGXMjvbFMPc",
  "key17": "5Kne2DN6tfyxzdL1s9wKqRUjnn2MQEbtzs6dDTahroZq7FKJSFKbZEzbdyoBDrsW4AYQwZz5Ybjz5Pk9muemR8Ri",
  "key18": "4Lv51UsZrN1FAaec43mmoMWB8BCX2ZW4MHStNyxLy4ZmtzkUVPno4L2cAPykwLGNB7csvyhiVpTiUMh7JTP5DVNi",
  "key19": "3EJg1b21UTtrtW6ECzRy5yu8QcdXUP8PytgFLaatQWhWogN2cZnBdhej6iwTJ1FWm6QejwDXGtPeVVaD1NqcQX8Y",
  "key20": "28sQeYxqeybadVnYbYcLx1yZZ1HkfSY9BSUXfg87D1susxEP8Ch9x486tno3iEHQkcpsuM2wcmGtLpDJpPsF3uAJ",
  "key21": "5Zy8N5DFHmPxCtZKGPdLC6CrvJ38oiG6WyaT9geejvT1vFjDyQ1M1vhey79qPNukrFoi968H83MxrknCL6nB9ETP",
  "key22": "2QYg2yWRVR61zCZK2AnWRwLKtvacQQTUZEZurK6N6oe1v14WX6ucmLDi1eafz4XRHHKtX6aWVLHBXkRVFwP6GmAp",
  "key23": "36pkojgBs7cq1XKJ5AayWtQT2oCBPAUb8dd6L9T3cRci9Cnz9JRu2HjV1tafnyxprRBrJihaJ5DDEraB3TnChQK1",
  "key24": "4LU8U7kY2NJ9QbknNDYQ4WyvWY3A822TJGmcKWnp3axCcJT46iUfxtPZvLK7XSZJCHquaTyBzjtH2jesLWo9ZgHc",
  "key25": "3KX9GLysGuf3xTHGwSyfKNcxq8eGdQhVsFXbLSmdwR7u91CkgRobc1fsDoXr8ThWX8R76ewnG4B5FWPt8PUCbiHv",
  "key26": "3658uz3gVXSupdtUwnzxoKKsiZEmsaoeTwtrt5yGTF2uMXSaYBKP7NKN7acy3uWKshUXNUuqWx3dfS8LgcQa2bTw",
  "key27": "qe6D63KnA9D8JyeB2u9qmQXMVXKHTPuPSU7rgDbdKFzPhk5ZrmGKfBaAwJyREc7WA8SXv1eEGjpL4idAm2YMFoq",
  "key28": "2vqguDK8hG79yCJykgQuKRsXsjBF4Gvvwm3joEtqTFtURDbg8RZz7pMNtBMAkJo4d7p7BfK5tuWK4WhdRmPHje6v",
  "key29": "4k9q6aXP32XtsdjgFQHTLfkqwNUy6azo42RHf2r4VcMEbm53iiJY3V9mxxMxRXfotGS47usjLCsvYa6uk8FHHcci",
  "key30": "2qsbD5eBx4QAMc4tCGWSpnPyudnxvZZL3Cx2QvxDrm1vsYkAHYDxUGX9YT14imVQqafBjV4Yw5bZPWYLiXBzp4aU",
  "key31": "2bg3vaxmv7XnEruvTatx8oPp58ccffVRSQRQ6sCjGAKKkeVd4oTdAJSvdvqA1PqoK6eyXYePVrbGt4sstCaKnUE9",
  "key32": "2gV48Th5apZLGWr85EZg94UG9jYmPjpq9p2irLSwWUL6pDe7Lymg6YTf6SqAWpTz6M1E9EafcqgzJcFzeUctnq9r",
  "key33": "5GqY57KBaJ9jpiN9MCKwFVLZVLmkKUtMGayAksMhxEg7qcLAWPSZR6Y7TtScBKmVBnFSMXW4KyNUipRV9HtvatAA",
  "key34": "qGUocHaWnZMoWhuvn9DrELJsmJpMY8L3f2VkMGyFH8MYYpE5FSpdnHx58s3fcimK3aatJcceVSHtDhPW43uFEvm",
  "key35": "5VdKiLjkhKjaAhd7wdwnADWktrfi1SJnknmmWNc4K7os8cqSBf1yKhkUnf4gBJfqR16jWwVEARDoNmQpTea4jb9e",
  "key36": "ECYFG4jub8whV7tpnLfznttWfeAqJy4Eb2tE3LqrDN6kH8g4D9p38tA3vcqurjz1aXajuoBZHpZW6gWKJPUNLCq",
  "key37": "KS7zZXKhWQWMFPz44iYj2t6i7aZRdEjQy42AKpnmYoo9SMweTDfdKgmctK9vnUhqAkAHSLP4YDJEnSV4qfujYG1",
  "key38": "Hxh1nXt9WqsxnnazfVUi7BUq9hBvseTiBHaG3oH6BSMeUsBDT3L4ExUjr6Cj5BXUGxouDMuqtDwKXmvmNBxKoBd",
  "key39": "Sz5DHkFsvKCBo54QouRG7nwYRaA2Sz2G8s1kpo1JbbD9h4i8LzhdyrUnorSyFoH9NfZZSebqWMMroaGAHzSK3kr",
  "key40": "48w5kGaeDVDy8NwQ2MBmoocpW29JYNJ3v4kE9ngJhmsJvFjNk5qi33d2kdK4dh8kfHqk1pwSWFK3ktc8qKJNE5f1"
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
