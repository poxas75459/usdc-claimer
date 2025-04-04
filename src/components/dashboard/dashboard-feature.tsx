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
    "2Y45nkPFMGMZq1L5CFLRYFLkoSKK4tFQg4BGEB2WX4L4SbnYBnPDBMKHyzNR1fpf7qvVjms8MbFwW1xakVUiY81T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uY3ijvwxtAeA37woNUn5oHCVADjiQmiLktmaQjcYjwo9QJuGEKS365eTBBqN5WW6pK2agoSowvXTyHCEqu11Cyj",
  "key1": "tSQtDnn7kgLKJ4m4Age84qvwhtNAPdnBqYt4GZypEsHRevxTDNJ756eRaTbDKT3hLpUD7JUoxZB887SWSrKes6a",
  "key2": "3XuK2uqKodr7ZTX2QQgKqgLJHAXpxaN5M2FA7VjBKaBK4eJEQmHEn5fyWmWyEYdAmhB3CbZhxxSfSVgQ2d6hzj55",
  "key3": "33pqp2VrJBiBnuxzSmKfuohRX5MZpN4U8EcoscxVSLrENQ9uCQLPrup5T4eEX7p6mNgLzooQj7KPUKLzNXbFPJqU",
  "key4": "53VrHH6PZDbBbgSRG5xwKeWjs5NfFJmpCd4u1S3FVqKdwUApgPPhDibpBEAziCDk82m5wk8mPtgkWVBbwPbZmrpD",
  "key5": "2e4nxUwEzTmEKZRBbEkEbaUhra6PU9sjs8rt22tMwW5B5YD5Gbkp93YNLYjLD5Lv1NF4xmpZe4tFKuMi89TrTMnK",
  "key6": "55fWHTyYMj8WMbk1mqaZyf5ttRv2NEH2nrLhEcFjC7g3KigofTfbwDwvA4Qz2Nn3xtcowSckUWEv5sXHQYyADWjA",
  "key7": "3cJXziQ9xA3gFhehkhGtcWaZ6DjHvmXeQsRMowFDWPSRkmZmurd7A2Uodq4rKTDZcduP2vdfaNxY3bcLFYfJHxYe",
  "key8": "65cckohqQkg8vNvU36WLVU6z6TGsovUg4c3dDWvEa25D86p28iHHS9oqquK53TBXrQWSLcpZvAE5c8mbMt3kR7mo",
  "key9": "5aC6iA5BFaQCsVq3yrum49vo7nhZy8NhP5n5j9s27sZ38Ee952jo6p9DVraVjrWczRUcBrywTVGvdcPa1nWqeotS",
  "key10": "5v43D8bkjcXznUZshFvkKyhR4KT6k586Q3PGQH4jgdpKgPdpFUnTD5Fb1XCrsU61kK5prLmGx97TETc4YuXowmFh",
  "key11": "JLXZaUiyvnKcZ1bJE4um9zgMkpyLRxuS1yaqhjYamHZABtXCoF4NGEtWsKnnsgDUgBQ2dqdwYpa2JAkzVYTKoMc",
  "key12": "4QTW2y5nNhF3VdSeE6tY2SVXGdPwSnWSqt2oRNJ9CrkUbwV8i9bcEhrBLiTdUGkTAUTwsyUN4CMgz2xvayhFphJw",
  "key13": "3Ns6h7Ygnx6BcVb43aZWDWSFxRvKYzbGuhLU3wuWzn7HHyV4yGMLGQnXLbEdVzqgA1UQvHBi9CYS5NkHXVAJXZ3P",
  "key14": "5qAMvpN7xC1QFTCEtSoLSb4EKsE7gAYUo2uuPv5cJSE1TXPmssMM9JuuP9AguuDZ58QzuC2MzZeL4T8iCWfZiteZ",
  "key15": "2N9KwxwuAFHf5i5H8DkKWmnCs4wQy16p6S4ubdkVN3gh3WUokfLNr4d51KSvvVLbtsXmg4Fvsd8PXb6eVC3vFpLD",
  "key16": "27H6mu4VJ511iYLRj7kr54Rhhzgk7UtJv8ULtfdr5KQmef1hR48nfEwhXYs6qFLq49j2cEdRPP9iL7fU4fCoqvoD",
  "key17": "4moZwE61udCbaxpfqjvMrtVmMduXVsAVY32WL1SkNBCHeLeK8JjeXvi7yx8Kjk2oUxm6ApfiTRS9xqe5MLqVksHZ",
  "key18": "64MfqnJG3nSWkACAMzJ85yZoupSfFuPjuD2RcfN44i2UPVKVVypn1apvhmLqig8Ei4PQgU6NdNSkpfkz6woxAQG5",
  "key19": "5hL8mdetrhR1zroxLiuYNQ7g8Nw8DrTeBTQJBWUty1Sqsj2PqTycDNAfgowf7UymVm3gDNmLhAjhKGchwUz6Bbdc",
  "key20": "5KtPZcFFUU3QGLnRWYFHdGD4tGmAHJ8LVp7CTXZnZ2wjCVAsVdjpnyqWJ8khcktSEjWUnH5x6XRS6ptd4xMbJpmu",
  "key21": "4eAeLki4YJo75izsomEVsCm6sMMTwEu7mpaRggAqGJ4PJ588uB41HRxW1AT67r3HToTKhQMRzYT7APdQcB7Xwiq9",
  "key22": "GtuRokfke39Gvp69iEyDNKFAf5XnXDNb7cCoFPxvGrXtZkHsWQEqrxg6CqRnWL2LpbWoddnCDi4bbLUQ8kzzkJh",
  "key23": "4MiXUR3ujRMCv5v4udiBhGTvPWRCR7hHkiWzPJZwB4pAPyQuECCnNUgPrCARuo88LgEFk9MsztkJAkpTTX3qBNGX",
  "key24": "3SggLUJypydS5dXa28om5Ek8mBgNeqd83HB7RYuvwFqxx1h5YWk1rq8GC5WnaUK7cyNMFwbNhNMeYbjKNgMc2A8P",
  "key25": "5JFVBAefUefyMVYE9wVWhvGASjvQcrr9kDkoe8xfTh5RNMaGNRyEVUDSaDMu21A2ByLAAnDNw8LpB4Zd33YB19JL"
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
