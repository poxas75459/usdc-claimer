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
    "2xERDeXxib8f8j2aeaxcfUJAuaVtYhPgzsZWwUvNPTy4HHFzBgriRMi1BVZpfzHUt17YM9drj2Vd37CAfAGyqXd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngmQNSoSgonGwNfTe3UbGhHNTaZ6GP3aiTj5TfvQRCeAmXYbiSaQuqmKrWPNUu65joq6dTFRiHXD8r5tKtS4aZZ",
  "key1": "5aAPvc3rgaqgrmaXKEz7rbKTB5UpmtsbDFZYgwGuF3oyn4v26RbVAUyBuRszQhxnk6K2MS7UH297R3D4fVB35JcE",
  "key2": "tdsV1By7o2z3touKQGQme4YNvxtQdx9CShQiT572BJLHoNz2kaSkFAzv7nyDG9YEc218tefs4tjJkQKKybLTzRH",
  "key3": "3BdXm39fMDFJAh1XBQcHNm58MnGsDCdXmtM9kkMwd2LmEcFeSUKCCzbYMWzmTntvhdiFLsZZ2RpDeXLcBwTDHoHD",
  "key4": "27M1Stnhr4jCyAz3zbacF2zWYxKb545PqPA52cTTCn1WGD6sXFtE67S9AhFboEKJJjjfgdSHHZpaPMK74Ewj7Gud",
  "key5": "WXVQ6FfYYX5jbLort8CxHqik4gxMsR38V4UxxGL2Mh12DDCpdEj1WRp4Y7P6nHAcow7EHDLFFSStoagXAiZRCVf",
  "key6": "31qSoNKfzZCRaUb5LhCVWRpXPHsLTZPzV7rES1feDgxAiFxetoV1rdpAvAmNt9E8G2hdWivGdKVLzJmcTP8cVggD",
  "key7": "3ft9oymFmk8xcj6pECpSHBtVsER2JNg6Ky1VztJNQf12X7Ufsczt78NKWLnJSuKi2wdrRTVuKwZXYBoCaAToH35Z",
  "key8": "2jN9icinUu92ZDgk5pimeSyPDuDchDT1SAUBmksvWjw7f4KdT1nEXuSPPcenq3YhRkM5mbUxeaiokywNkwtNEov9",
  "key9": "vfHR3uw6FScWZDtWccVf9RUZtGxAqZvLfXeguJRzRpwYmCrZrKD1KcB7tUWqYvWjAYpcinxxHGvX4iEHPcCMpwA",
  "key10": "PrSXEexGqRBp5qxsaPYnE1uqR3oJhwhyZUhvBjpFV6HkQrFTJr7HF1M53X3LAzbfcCCZ9QnxByRyCWq2kE1fqsh",
  "key11": "4yqpaskTS3sqpWnYrEaWHFfjSHzRudBSSEKoymHoziSNA4et6RH3zr6WuGutqwqQKazEytDELuHmhfdJYDD3X4m5",
  "key12": "4DSu17auYckWbrfkd5e3d6YasZZnXSPsTCkq2v2ov7rnkeZDrtGxfsCWQH882yfdUVc4hrQL8JFcJ2qkDXuVpRrX",
  "key13": "4xHAtPTK8qArd3eCwWpfVHramxh7dLefMMPTVAo7JH3yVcDzQErJkJVb4oWuPmvjbfRSNjmYVLRs9ewcph4SEum4",
  "key14": "gJQ55vb5ZV6Y3aAAptKKU2ziFUqKDDf8izVAiMKCDK86gDcHh1Xwmq2yjanPDgnTdTX2WcsgXSyUfjrXHSMfgDq",
  "key15": "ktMoihhdnk7Jx5nQ9UfdxUXKjToBJkpnB5Lpd5C8EBew12D6mr9F5mFWPCjdhQduvSb6CvkBgmFwY2WhnS3t6rq",
  "key16": "3is7T88NRhhNg7xNqdhABt1QXevx3HSEuQJ2QTwGi61fbxtMaZvLE9zmWsYwepQSGMiJZQgB341jGVkWCBCiSWpe",
  "key17": "5A7BrCczRUGXX1VCorM9Qzo2wEzgWbTH4CNHe9cxzTj4562XtxxWgE8q3kihAziiao6F2t9fSUGbCnHeADR8QG2n",
  "key18": "2sieXMvMbZdfHQsy4Rc15CbLDCj3n75wYdVNcbZbtoL3ukaoLHSuHhwr8w9LZrDYEJoUWbfT6vELyLpGiwdX8XS2",
  "key19": "4aur6wYvy1iHJcvZMGCU69UWWUo45hdRggRo9wKkE9jxFGgqQeDf6WCjWzdZ91nVuarc67KUVMqYMryiQnmr29DL",
  "key20": "3XWXYA3LqRF2ijJiGE5C7v7P54h1kKTVPhQ5Z3ESci6QLTbwu1CWYSvoDDZF3SaqmhnVTAAAXoTCVqWghsr7DNyX",
  "key21": "3sjhgwYuf2gEpbjcFUQoCfFCeHY2ZeYwKG8B8FFbt6eyLeJbGeUV4CACjfS42yERZFpmFH2nPUKcSxHgThDQkBi8",
  "key22": "XRBGakPNS8CAi1nTrtBpAgYq4H9NN9n8gedY3DJ5ejse557vgxeMUTAr9QbW4QsVajshHMskpFNAUu9rDMpZGds",
  "key23": "63DGV4cR3f7T5oQDzmYXgA2nWWc41LK5GMULqvcydEMt5Ts94WRceQc7tEpDCPcMtQdxxsbGYpinEzsJEkEo5z5V",
  "key24": "3jxT4kLBnbuopa4JjGBD9apa1pM6d8sfpvhBhvkyvbBYieaHDGJwcSXKtKZ4sdEcx3sSJhfQBpxvRGnK54GMdTyK"
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
