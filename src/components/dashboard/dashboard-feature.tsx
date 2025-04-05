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
    "26w9TxsozeUasFVAZmkRbBcgQhZAsy8EpBPMkUgykoenG2uzecz5BqixDKjCbsTqui6NT6DmbWudpsTk8LBm9hfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ui2SiH9jKXsNR5p4HFzdG2vHmEfqEn3hVGDu58rb8b12AdWczdexqjKd9dfdk2TMkJWQg2Aczm8Zv4TaZQzjCSG",
  "key1": "qUY1PWwY7jRHKcqNGG7ckX5Zob1cpWptzeyYVJBTt2DyussB5MVrCRXmPYmjJ9geLZJbvZFgADD26pv2UFoJWYe",
  "key2": "4UaeBbJrqW2gfEdySSxP6xirxBdtS72F9MDPRboXJDQpv5HX3DPGMx5PAQB1i2SF4qqFSjCwJTZK6UgsqneDt7yZ",
  "key3": "4EVoPPFeSY1ctBGD9BmfaHUuG2mRGvdQcX82PYpkpdiAQZhUwiQa5mSKshrPS82vb7NYtKCmcMAcZEAgecs1ULND",
  "key4": "4UyEbbWC3cc24B5f4GB4SqkxAJfW5eonNngBeGMxrMDfFd71Q7aGEw64RH5KVtCFBesPzz7x8gfrZ8bB8kAk5z6n",
  "key5": "2BASLbqHmREoKDSzSmw4d67uQ8QWP1a1eh2432YhgXVnXQF7wLKThU8RyU8WR1X1e6xs2MvKW3QPdvTwZCicdKXG",
  "key6": "2RN9WMFp2TTDqs48jFdy2bnqeECy8rHkcKcJdjNTaMTdpYwUzcea3Z4QBWTohxX995pNAtbRTjTvA838fKPJL1Gh",
  "key7": "45RRpLLc6iyVgC8jKyWuu7BjKjExa2SBbvDB7ZTr6hcvCjFDhtQNQc7PpMrC8JM8eQ62ezwuwBvH6sqmTWVss3v",
  "key8": "5Hd9mS78LTVnJedrn6hBvVQF5v5vbp5DnKT4qWB5niPvcPNJwfQCNXjga4JQEBYkdjG2NeghreMwEwbbf1DCesPD",
  "key9": "2bUUpC32tpFf2d37trLBgdSyjPHSzkJqUSStPGiXBZXbrM8VbPkSyXRCvyUjX26W3dgGcBpMyRTMkaAbdGmNsYMa",
  "key10": "4kqA9EE2PQZqShUbQMCSpDab6HxfSzWdroK41mTqD2KuvS82nwtaieiCvrHtSBJ16CcBJZ4zimHFhMoe1SMb8ms4",
  "key11": "3UiapfWLSz3L1k1tkcvB3XPj2GoZuqZk95zS9QyQzJ93zg6oBEkckkRnvvnLUv28dDsXJem4FaJD23ema9C6LLGp",
  "key12": "5qWX8r5aUzeFt1zCBEJZJz6DvB15savUSxnR5eSEHtXJB43jHnGprgmGgWPwXbRfXkZnXew3kW4gabJRV7gBhmep",
  "key13": "3gKyjnbMAbm4L31dvkauchP8giYDNMA6vPxrpde3FfzYjWrhuuCVSti5GSwRCKpz9hGrPebiiXExECi4eAn2RsGD",
  "key14": "4BYvjAtRrwRZGT3rpNKTJSMa9h2JaWEeefmAXci9xUbre1RFJNfGtbKAdCTmZvU6KfePKNXb6aFhyipSPMiEf3RA",
  "key15": "4HSEkVanecqs57HeSdSpSXJ7Wy9hq9wfhztDCpQutiPoWBjsuEvSm72GwTfgBbKhXrLb8gPujwasGb65JXPgCAJF",
  "key16": "3ND1zfkLqqUTAQta65hKBDYoVbf8HzaVT6ZgvWugSXwJ9uqnYR6M3Xvn3PQisBNZHS7cRkawwKxGz1QRce5nHuvp",
  "key17": "2JU8qFSAQ1VSAG1FetL8zhdxVwC5Bhwzr1bgy1jyBFsBfbXihFDaMRKDWqDkKATSydbagimWoZT7U8L2ivDNDc4K",
  "key18": "MXC3mLCApCfuNrs5mM6W8BBkQJABujqjCtya51AhqMUt1CYr7CJCpkPVbWQPQXsccTPi3BxcBrFu5LHvFcwNjkx",
  "key19": "UqbWfKUxWoFWv44DZ211yPfwzecSnMfuNH5PJbs7DNgpmfaTjwaQ6F2xx1aHRW4udfYLoAjoG4R5UgBjdLJMnRf",
  "key20": "45fHB4YAR5emt9cvw3dRVCgf2rsbyJa3epxde62CpR2ThzPtuNgMQ1gnkvdTEUSuycHAAnoFf2XBd8oWKw9dBrjP",
  "key21": "2LXCziL2FZhm3u9eGSjsNw23ma2gH2eLAy9H62RvUaqT6GQUhp2Dh7n8umtMWoPsfkmrPvUWEWqYfD5T44Ny4dui",
  "key22": "34GbzXUJPB5yTdkagdVGjfJ6N9mBJ3YL9aCEwpL6QVhmTaedMRJ6SzDScNf2zFhW3ZBpYE3b9uGYHdjr2buXGioP",
  "key23": "4aR9emHmPqok4F2H51R2wQxygtzwKZiqARhrQwomh1m3G61LjHhrkcBJCzbqYNP2D3DiwkA9uWkz4AZEsT64fHWM",
  "key24": "37Q5QYFDL7mLTKt963sUPuZ578n6ZXkSJexKDrVzQ6p8somvdC4ornQeEwKSpxPy9ExR2icBTt12boYNRTZ6bYGC",
  "key25": "23gytDdqyUaM8Ttio81VMRjvRwP3Jr9C8Akxx7KzM4EkF7i5FRB3bgqyF3wtCz3kbHwXx9k4ArfmWthovoXj7ZdQ",
  "key26": "5ANfMEoLoKiB4UKxgvnG7WCKpvZDUyixFjjbWBgnPGMjgEnQ9VwKrYYsDXiN1S6KdnUzc9qJpw1E9NukFHAHuf3L"
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
