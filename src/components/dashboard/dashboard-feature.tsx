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
    "3K8EhnWaPepDzDwefTJyT4sBcyr7RurSBmxUf7Gq7VQ7Ey1Jik3ZoHP9gpCSsp3bgYnDVaBMv8QQp8e1rATMf25f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgL7JY2SmHxx8fcRxjn4V9m1TWKWKTAkCLcTj5euq2oKieB62zEYJuwi2LkTGLj2DRJ6wCQUEsJMrEFhtnuUuhQ",
  "key1": "SuhSC5RKPGPVNC5YueXpsxn8W8dJHgKzp5fQqoxFsvtgMXuWinCPVy7SRgJAhGUjGTpuhmgTZWraaG6SwNWLF49",
  "key2": "4Dtg7Gvb9Gmvi8ca3DY1U99uXci9qVYXAu2z682Q9aaJXqMtE3vpG9UeeT7zvir5TyLmYp95FzehZFw1cTB3x8zj",
  "key3": "3zAUbcuaqAwEE4QmofbfYhATh8sQ5NPz3Wdx5BG2nmkgTd6zX7e8BnXKU4jPXWwiMunMpEHTzmRdLcjYpWGGWzyy",
  "key4": "3PUqqikr6bXyDiWML3kKNWx9hMEV3LALGiU4yWb4oKLWW1ES9cvkXVdUFdW8MhRbwnDE7of34WTAk8hQeymRgagz",
  "key5": "5fG1VrCqPmMi4DShrWdgZCDEZ1hoS78exSRf2sL8L3LqFY61Q8kf2g9XYH94gUWyTuNdiaFMvbZQV4D1MNCu8n3x",
  "key6": "4MoDQ5FqHxni2gm9VvSmnNikBTngJaooRe7g5eWbpBb8wUWL3gmC9wroYCDfCWWVpVtNx5ZvgYdmjsWtyA15Jmew",
  "key7": "22eWWJQJXfZ1EHC747KJXxAMzg283P94H1L2AnbU6hoyHwLasmXAuUs4jicoxD7adc1Vbyde6vdRu2mjv9ifMCMP",
  "key8": "4YaNDWytof4u8rUhDziPxtNnec5oJnKSxGXZo5XBM3LK5p3rd5nyBayUB6GwdBKoirwBQzfuL9qA9Etnd9YTdJQZ",
  "key9": "2A4mifcSGf6z2b921DXW5SzW1GPu2fmoVAspcgHmSaXsWLeuaU1oyicucjPWUyd41tKUxiTf6mMoTgE6NWDarECP",
  "key10": "2iTbEnNU5kk3zKu1huKDq5xGzDy6Sx7TrE9dyeQrCFVdT1Ut39MNT9dsLjKqpEkBj1rEtbdeeMgd2A78RiggBJaz",
  "key11": "4cF5GX4kCsPq9d8h4akrFJsGKCua16cjYoWkHRhMTZ9zXFu4my3FvSEaoEjotWAS9vnuhAbJztgShRpWe11WZmkj",
  "key12": "5TFhJGkx7nPJqX18WJJVCJKuaFpeWGvwEyXNbLVmTQpYRwepHyUaRRBJ8pG5AuXbNLDDTfKXYhu4p5ho1uph9LWQ",
  "key13": "45KUkfgCsUtjR7UHBzGoFh6VCFq4v6H6KyN7PoYVikX9wLCtwtCQGtjRowa3P86Z1oNEpjn7fHjMgtffiNNVn1GL",
  "key14": "5dDcY6e9tVyZkesyQH3fDQ3i86SpKfcohuqBGVYLS8eDurmsQV5AqGc61wm61XfY5zjqgfkCQrxzVuYiFSBNdCNA",
  "key15": "3WzDDtmDZSWurEHZs59Ao4dPJqLYB3c7ySeMYi7SVFFT1pxk3qkF6e1epDavGdkMnBmG7XKa2tYzPm7dvATePS6r",
  "key16": "5pQUBSG1NWZiUk8EqVjadjwaXx6xRSfNLvedN9GNv1DCRzTSXxMB4p8dxT5Wr9bPWxdTUhRises5yHHfP5FSVWqr",
  "key17": "353a8kHQYmrx9HXzHT9DLnXwn6dXHKLfuHw4C6Rk9gNF4pkoijk3p6L2BzpESUhc6JzFQrEcq1q1E1S3BLYRoX5b",
  "key18": "3MZU5ZAjsgKD5uBCBdDoE5gXaJDbKJHvh3yZG6GwC7Pd7UU1SvCpUEHS1A8oQ9WoeH9jsoR7scZDWo9wXqYp2fJ5",
  "key19": "2Ntrka4nsrgu5w5muSfXKAtwDaS5i1m1sinkfWN2kV5HzgCTo9F4mt26HwtcQqrXZKSU1irznB8pgFGaQ8xdLpK9",
  "key20": "juupU4at5PSSvDz9aKBW8Jf1snso5E1PutTZ1MuFyLrNQmSqZ6nK4dKmsnggMmTSQKjHLcoESJpV4bnWnv2KGVH",
  "key21": "5kxUHbyLhUBmK26kdUPmtxpveeAVsbqahmjqic1yXbfY2AzhZffBpY32Y6bBSRY6grkJjF4Hn1UaGkHRLpX5y8vV",
  "key22": "5QbWufDVHAdHkVQEDr7zQQ52WqwX1u1Y2sph5QJU2X1BQ3GD6Px4k1QjDmfeKoighKHLSsQHkY7PkARb5mSZC18n",
  "key23": "3ybw52673emW8gY8W3AkqHGak1PEa1NCUkzTTRyCCR8nvHrLjhrsk7uD4NAtq9WRFRpBVwRxePei5tqLrer6a8Mj",
  "key24": "xRRSF8ngf64tpZSZ1bkSDFGkdUU87831Sv1vfzVgshhPNsxcTaYxW7viEwgtXCfryyMedoUTdeQz7WiqwN164qR",
  "key25": "JhQ4ejPCHAUEvuE9m48DCcc7Lc1JW8vS2ixr6DezpeF84YNUkf7Z9qvjvBYq6TgvAQhWuy6cGse3SjQbpTxuGpR",
  "key26": "426CNg5esrFAq9g55kBciZJdnr1LxAFbeSAvbtVYr9vN242GxZhZu2U2cmLpZuEQVTMoWxviU7GXm7pqYzRqcQSX",
  "key27": "3G4BnypN4XfnBknDkNUf5DAo1mFM4bERKBAPw3dfVpjBw9VFgcd7AALrnNbHxV2ZJtBMfpUtaWt5kVPXjF3oQ9zM",
  "key28": "65c7zrW6UyPLxF5LmS1ZcGmZqpV9nhh5ipn9Qq68qv8uu4spm7FnvrqVk7dmVWjqiW8DyemzHG7LmLo5ogNgHkMk",
  "key29": "2Q6BHN3NSd6PwZdvnnkEZB1KrjQydkRvKhS352G69JtdjRRQhsBBWsRw8gLupgZjJiY3VpbFmebRpTootsP4eTSF",
  "key30": "4jPmtQ5Y4o2VbGmDMVqUVZBPRpuRw2C7tq6ZVHdvKpS2icHzQQbgCan7uoD8i3h4RpyX16VzpV7Wzddxg27ijy1K",
  "key31": "5mSqf1Vad2J3tARR8zUK51nyecJoa6GCWjq62ZssAEPV2VXzoxTNEFgPHvyT6shXDGmYNCxyuwK6sf1L6MJ1tesA",
  "key32": "37pv9J1jf44zCcUrHpxGPraKj5bU5xgEvzPvEFNjKDnZK8DQVZfE3nHvBXdTzKRoJYVLCkzisVusNkBv83CQHy53",
  "key33": "2DSr4mCAPEyCeJVTZxfz9JhFbQtnnXkJuu3eVYo8u2zjL4TQwtxrTqz4qdzTci84btWS6QS6P8yEG4xoxRyh9zxu",
  "key34": "zfpLg4Bh5HQGgW1Dj2VBH9zbqAiuwaic8xHQMiewVhS49snqQ4tWJyaCvHkSbg5ru6e7X3DQAZLrUw2GPvVoHe2",
  "key35": "4qx7X5r9B1EVRRoStScvoYTnHrbGJVisWCrJ6QucpmMzntVAUZVV9f34qXiMgVup5e1V4UQRgPFFy5RVLpie4MBZ",
  "key36": "5ggzjeGvPcSqEog6PVxD4qD1C3e6M751mzoNHr1N9cKXyoYWLufpYk3pAtKqQ5zSCaxYJ3w4LS9ULsfXiHCpNdZ9",
  "key37": "N7jYnoJ85QDDV9JQzn5QLyec9xLWoDY54TMLyTNiMDq8AehXp4Ts8fwmxDsrr9hLAv9Wo1CwFGdngriLfF2z8uy",
  "key38": "3a5MrFnLiZvdTD2z4kof3idk89kg9WD4wxf1kjw2kKhjfnGnSTe3WuXuYPkzv5GyDt4BAtmNb7qf15Qo2TKHcqoq",
  "key39": "5NBfk9nor4jbDHbYDs9fNoT7oFBDfadSnuTEPJj9hEJgrCwzaWmX1i5PnYykCq29LtwWJ319Xf2io1XeFdosmdLi",
  "key40": "5YRLayiBTDECHhfJWYACSEbNM64TotYBi5BEtvnS5hTmsP8DyA3xTMUVoCiKDCgWBxN8V2wD9Hu8dWxGr6xLRbDC",
  "key41": "2xAazLstaHXuqLKg1JF2rKXLChT9FcPQ5q6LzQDExGvbv9cYZLeKuNTZUrMecDA2QKZDozu9y75BBtAHm7j27Z8p",
  "key42": "2H1WJ2LXuDm3FVPdaLqWCXLdyie5r9kTdSM7t2ryqSwe7dbLYDt74WuvNeJr6BFePP6PnjgJsXQsrHPmrgPmsHSC",
  "key43": "3Ncdg86tU1DTwGCvK4LSnbPYVFKWMBWq2aEJNMSrZQPriG8qwc5kJMnQTqnCVHQYuTBE5wXJBuZS7DDRBGyFeApx"
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
