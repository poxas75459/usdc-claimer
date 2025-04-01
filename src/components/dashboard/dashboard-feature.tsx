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
    "5R7ZYu93hm5sPg6VZhNZitrSMsRmAsyNh1FR25o7Mic8xgdegPvzshbWCwsDjaLSGCM18H9Ki5jH9P61W3koAeYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUHSoLwy872mgBDfkKkfLry4PuTHBHpHUDVA3sBpS3QCw94BDZcoE1spHM8kyFT66iENr28aStnxc4w6sYdE8Rz",
  "key1": "3hqA7qBfxgnFiuWG96PcVercQsyPfVp487Q9ss9yLPTKa76Y5aPaJ4x3TqWok75ADM821XLg6iUf7qaan2DgT4w9",
  "key2": "3ioYJMfSY7WFAsSh1FkwxiLWzsMSKNDCQ9GpAaGgMBwdz9DvxdWbFgD488GeW2jCETT2fsMDHvnKo8gzYkV1JU9C",
  "key3": "5SHheBMUVZueoZe7qV89F3svrA4dj8W5nXvsDqKoLr7CrGEeKy72Gv69pCQhcNNGRo6LLXYB9rnCU93csJ1YLF6z",
  "key4": "2m1SgeaWQqLBfNLYikUDJvescZ9qjXv9RT9ENoK91mmR8D2QbLokJ41tuHofraVNYyeXvbZV1teEFbH5puLebwN2",
  "key5": "5vxtfhfMoQAZhTvCFjc5547WMDLfNczYgHxh7ms51Pz76vbLbpKm1TwJymwEY2CZFRPzUUAhehFa3wcq7xgmDAmc",
  "key6": "5QeXcXyT7BkEhEys3u73GNM9NQx1p99MXRqGPJcSryV377wJMqqHP6W4Hqc9Kt1FiqyTswkqhYqoz5jCG23neqSx",
  "key7": "3unejzveuNRzLdmcaQBVPAkXV8Aym46LStXxsPBwz4T6jyVDd8dwPj6zU7YVvidpBsKWNepyXPZMRG8jEiYWpKLZ",
  "key8": "5pKC7tpNSCwahKYreZiBTrFu5WewJcdr3qtFN7eaL7cmhqSezXirGnTa8LYoFmPqAsp8PPnvYDKqUg2ERfeZQWtY",
  "key9": "2fLDDe1Dy7oXx6MKXMEQcWzShwxSXD28yBbbQeRq4Nibv6S8s7YCupS3Sy6XdDg6oCBYrHoZwuyudpvR4Z5JLf8q",
  "key10": "3cW8PM8dhK9wFVJieL2FkBpWn2XjZvb1FwwFbeTeEmFGUc5cvDa4w3uQ9yKsKf86yNd6WXyrSKPtt71AudkKWq8N",
  "key11": "5V3wgecQ3qm4XjM7ZJWMsGTfRTSMTj4dySRJtoJDR2wXuMsrsjctcQzYXSCe86ksE36XfHD5i2jmqB8YUgzkbWKk",
  "key12": "3CCZnKAX8CpghM4vyD8AcLU24pyPejipdLMFxGVz2NWQ1951HgiQJEAMhqjbdKLsmEATTz3Ef2xvBiA6CsnGQL31",
  "key13": "2d1nxDw8Qs9z7Z1KcfGGkJpf2QDJn9eN3EAZ65rL8x3uq6Sa1FEz44paKznC655WoUTcRpWNRTHvGAf8hQ3KjkZ2",
  "key14": "4aht8zfqPqBHjPeduzm8MpS2TWjPbhSkNoKn5wrjnpy3CCuyEDzY9SsHopBqjr41AEyRnNiJvvF8isHzbyBNPEzM",
  "key15": "BAzsKW1vJsyYqAAY2ijantiRi9yCR5rwH8yhH8xmZxTtXBWmaVYt6pu87ySjVhGWYnWJb3BcrKJpmmnPtEYM2mi",
  "key16": "64WPRSSnx5U5YZ8Hxbsj5cDWTPyEipov72UaoauCRjnwXtGtWtcyfx2ykR84NYSs4xcFSWaxW2qvY1CuXzV55PL3",
  "key17": "GK5SYsa745Q1ayEkCYjUruV5NubLX8RrRorWAegjXhp7PtVWWEc6hvAe322zhXM6u23R5YfHpkHUpBfj3wVru64",
  "key18": "5JZKviFgFnSnHbNxgnjqw82acqU6dbKZxjbDbg1h6o4J6r6GSNzLbopr9PP2cdG2uGsqdThAu84ThmztTMvth7GD",
  "key19": "5wyq4hp2iMDrEAQwza4ebDyCMFZedT5J87Gj1mx8RtHh8axQy9npU6vVJSbVfjQtmJbHRDwBmXStFTLd2Dz8czfP",
  "key20": "4zXdbebm8BNxZgKBha7q5m3ftzGhtohiyHVpSZ4o9VTusnLS9QQoM29N4SRdwQ1pkFxpxwT1qVWWjnJNqymKqHSc",
  "key21": "5RgSdYhXSxr258Vz9vKEQhFPoKsahAxL8nxxBwerKvet4f8eMwdtyqWsiAQFYJJJyFE8JxKqM3hiiUnzsiFu6UtZ",
  "key22": "sX2sACLNZ9KWMquYsbhrsoGtw6WPgZgxRZpJUB3zfG8PmnB6ZAn9AiYicmNReKYkLon111TJYATHMUsk2L4GKxx",
  "key23": "2YgTpzrpfseFJs9nTPoWceb18kpNa6hNaS3oPYtvkvnSDhTTDxHyy1eyf7V5nqH6cxPXGeb43iRLmn9WMvKoEyqe",
  "key24": "3e5jpXm1xqcdDJDhCRZs7M8MzyxiR4AAe34TtT1eiVHd6Z3dod9Lp6ya75GJZUuQVuLYQsMti2mFnhveyGEKPt8o"
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
