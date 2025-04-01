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
    "2kQBtvxAfTWZ7jPvaCwjgfqSj2UF8qPmwhsf82Kj4i8oX87wrogjXoZ8uSH8mkjroeuHwj5UHjo69gpyDyZUGE1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9wVdukXEFCJFn1q1a9yEkQF4n5i2DJakVb6cMmiFHtbaGVC1qEyHRdyS4cTFabeuCAG972VtV3QM9F11dmJbeZ",
  "key1": "452cCdzmTWdhrNw2XWg3phGe3MqPXnbY37DbdGUifj2hKiDLFhGR3fusDKYFmBKAzcdbPJDgaj9BHYRyXLShJmDm",
  "key2": "2wzvsQgDd7WKQrHawYN8SY5oxSVmFyhZac4JvBbXz8y5HsL2hoe9M1maEfbW1CkeEyYRZBUMb5mVqNsZoYXYgGkV",
  "key3": "3jLHxsetjmuTw3FKurKT4mYt269iQfMr9ZJZrVZqN3SPLgj6SxCK9eVcLbXxix1MxSLcuqwQjiV6DnzajQNFHuFJ",
  "key4": "2uhkAxgAjpZXzBDoYmYoJAhGC34rVorjmmT6ooPHpa9U2CgnuvqusfJCqxUriXthhWXuTBxtMLrStt9o6ZzXM2RV",
  "key5": "3oXYEgvKQQcKwRSyM3m3e1dm5DkJGFfgm58zKqA3fbHvLNM93MPZYTkrm1UGLBMq92N21bfoCD9HHGPF1d9nH9sv",
  "key6": "2tf3HbWpoNLftbiss8U1sLbS8eGo6TPvY9LyS2wPiJBZdYnG6agBenSwdvKKukq6xEJcR9KoEMHNaryeaxs6Uk1f",
  "key7": "3AV32ThbzwxjNfC5kUxoxVAzRNqrvhM9natXKAgcRTNd52SKmCxAWvR2zbXyySt4vnc7UPWYzpdV1sqMHGx4PXqF",
  "key8": "4qaUMtm4H5TfZbxiFuLki5w7samUSxfMDaG87rtXBAVALSPEgoBHv3cC9kSvUKv3Mf4yidpQV9uh4eAwJQhQqxab",
  "key9": "pDQp3dTuYMbXUFQRjcmJiB5gdNERiTFW94kjye4CbXF7zrzEinWXCfctWRNHq4daSEuSigvVd4DxaCcbFnKc2zS",
  "key10": "48pAtwX4yQBwDRGJjMjEd5w5pqfsmp7nCEpvUwL9vAXBAcjuceDuKLsXCYCqFD77NEDTB6jWujCA7J58bVikA6SE",
  "key11": "3xw9U7PgZPx7iD4rNa2ELaX1xB2RXHRbKsuk3SfRJHhdsLqetjEUUtx2oTHjNyRhRJoNL5226Y8NK1Ch5F6XJQFo",
  "key12": "5cEnm9cQubqFUSRTT7iuRxNicbu1q6EVnjTHxGUUxYw7AdwSECe9ncKNKrddEZ4eCor99SpvhQuTMHpaunnVD4oD",
  "key13": "arLArabUmh55N5t1z3QETutFmDFwqdtECT3EQGNvC9zvpYACaAhbg88SZEzeXJgCSMhZ4X24PMAuSLrsnWYrr2d",
  "key14": "5YQJXSjhtd6tc4o9JScnHKMnxazsHJT3ADFATNTrcuvSZmiTnLDRiT8Rj7Bjoh24mmPVbFxed1irfqKep1xn4yCB",
  "key15": "5Angd6Z8sp93oEWz8F45onnB2NuaLuDsxqSJBHXh87VfGxASeCb6KdnkVa9jqJPYg3wdkaFAioaNRHPJ7wqM1uWR",
  "key16": "2stqpGaEDC21ChYPx2fpxJPYTrJsd474ZmPHNBCzZ3uZSmpgbnzRM9Xsgi7L4QXTcMc3WhM7kxnZcjFNNx21aixG",
  "key17": "2N9Vrga5uYRY8En656xnYmGKib8sbwfmWkyjme32UEjhzroXKXfmy8R3GjWuxmUdAwYShG4FUYSGN891ij4vuo78",
  "key18": "NVNus7TMW65xyTNtsWACNLvTsj2YjY9i6hybu794zqnuR3uYSyiLoNKNNoaqctQNEELMFhNmi2hoUCu7R9uwwoG",
  "key19": "mydbTL3RtS39y6moHy7gBzjREwiiTQSjG7WF2NadrpUfsgqyC6ux81mYfXfCJzJbenc7SmY3mc5wLiXeDxVecfc",
  "key20": "4hfYbDVmtr6JbLTBheujruSd646fLryrDG8chL75yfrwgBZaDZfJMiNsFiFu2AASDUiPWdKwGhhgtNYX7zoHkQXM",
  "key21": "4fXgw7PfcMpHd8VEMuNXjGUptxXVVwUp4dEf5CW9aKMr5znmZJCrm1D3op3nQYzBnRkQwdDGFy4Yyr7CRvrZKM79",
  "key22": "35AdcECLniUiEoj5chrX9cjH8iKDG3j5K7zsvefpMqAT1waFvboQWfeAem3Z5n5r725rfTWhNtoVvCi5kSZvY8R8",
  "key23": "3ES27X3Uk83fsMwbrCdkLiWinrN8ii6XfCibytvJaEJnZ7SmDM3JQsdr6n1pvFPkseLmTK8S2zXBTakB5FyLqsbp",
  "key24": "PUs1kBHQEJtWeavJNZmiPrgFf8egwrHw8UsQDi9uzVz296hp1dWAZqgfkw4DRyc44ZnxkKvpfHz6uHC5Lu2bSpE",
  "key25": "ZthW8Kd6bdDKURzSkLCs2EnWZUL6nUkQZ8Zd8Qg1TBRpBusd7xfXuF4NoxCGrawEXZWupPXErD5vQow6Qcne4iY",
  "key26": "49cLuUkzY1TjBxd5nnUj1ndHgTwer5CvHqQVQGnYALWdPWdgcdtZZYF5qRbaK6ZpjXvcZbfjY6NfVxWcVqVTcdyB",
  "key27": "4ccX6wr5NK2kGrkM7THJWqei14sq6Vm6UiHB5fYDTX1KHCyS7wK82JV8KHaWZ2QLgwANM9TrrFPXScJqoz6hmVmD",
  "key28": "27TMeckr5HMUzqsCnYfpY5buREhTBmxoyZLodkEznJb65RXGQzujTpW2P64UG9Vi9SeMzJymcY3N9JNoaSFxF2Nw",
  "key29": "pnSNUPjMChfresYdzAhPYavqBXTyCmYbZdeb1aJXqSHaZNnRaJfVNPt8DACo1ehdFqyBWLXfZtL7GCAbQc4HTaq"
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
