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
    "47tFtX4yEZiNiFUQVNQHp12NmmQDPikQZ7nriCJLabxQoydKbz3NNFMJStUaKttYiFTHFm6WEYwAhZNb8F5pRov9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3K21hj2cgjWRV8YXXfk85RJZaNqv6nNGUdMVWQzeggqY524XVinvhzKtGevNS1z3cb4oenAaTqkr4nJjQsQwnN",
  "key1": "sewjizR56Szde53DUcFuMV5Bw1FU1PSUdkDLNSb3vfxQf68QFF4nP9462F4GQkxQ7JrEijXjUN4mueUAgYZwSkr",
  "key2": "4hAUGaRLhDRkH8DZAyqqsLw6Z6UWTpBDmWu9LT95jh1Jqy5hqgKFze2A6ubqn5idpp9RLPuG7qvKn8Rd2i12PYGg",
  "key3": "4eEZ8QUuottiLH9PLyP9qYEtsoFtNhM6Mr3FUdpDk1cja5KjZ6Md9eUoHkZk3kdj35AcKsbm6rmEfU9m8YJbn9AQ",
  "key4": "5LpcXV5qYmVXwGL8EFQ75qxtPtdX5yevXHteYoCTJEe7btPNvr9CbfwYQYq4gTyJbuSd49dJXwaBrFYGVJ1ECYqt",
  "key5": "2KyVh1jhd3woXBLbkZ6QGvKpZ7xpXnt9ar2WckVmnXCqH3w9W8MbiuCuu5ZaC37KodWbMwdn5VG8N1xHnoxccZr2",
  "key6": "22MDSXd6Ybwvyx4CDhCUeBpAGr1ztAmngSkNci8ax61kK1erYkj99MS5h6DbWVa4PDk1dn2Rp18PNb2o3WRsCfJ1",
  "key7": "q2Sse8YKsEnY7G8Vn2vgxPie5XVrVMM3TSB2NF9PaA1RhFnHMr7Gjxqo5CkVdSTXJdqPbkzdVSpRmC27sV899Pp",
  "key8": "3SnrTHbVNow6dgkyenJMc9RbremSEchuPTmDQBDrnCwqKTHodcx6Apt9SkZqSra1EfuwQaPTAuvVguC4PLfXQ6E2",
  "key9": "3X8wuD3StxowJg3pVqB8fBdtEGEXWqKYKhRJaQVdMTV4FvDjLeg2g7mWfpVsX5eqKy3kNHEQ5auAPX8PdiJpBbQS",
  "key10": "2xCVh1eFhdxzpHqNWUk2vE3FHS9eH1GyMeqnmqSmTrEe7cFMTFzPw6kH54wuMwPzvoeaJhBx5Ef3koSAfggGo78K",
  "key11": "5Eq6FQsosTGarJv8czfknApMF9j8eeFdmGU3rNVZM3rPgaS54cp5iZFW1SVPmwtULHHHb4oqYT2kayvMU3SQ2ZKx",
  "key12": "2xJNmAEUpfbYb1QiTLp2DtCGcaBLuTtPfGieprPk4vqrU5Z96c1QxzHLcHVmgpgBkSUfUuX5wKvo2HdESnQDWH4Y",
  "key13": "3oNWHGqwFtX7Wm6F5rZw9nPuUoi7Gmtc64WDeoXosPx2N98KDUynxSwvoC6R3HHySbXcWQDiAfVVpk5JZ9bd6Rwj",
  "key14": "PBts6hM3eGxk17YQqyi9fYz7L2w92h6Jw6DoxETsxCxG6htjj9QgThkSYC8Q64LmcYTnkCaibogz5MsfuwkmcbG",
  "key15": "iME72M5w7CkB8co2qGb9H8zCT4mLJHTE7Qdf5oHaadgiFaz4Bo3Y6VsNnjshxRk6VyZxRYf9oaRZUVtNnA2KxJv",
  "key16": "475eLCLjAPdPgCzL9QPycGWEqvqrqKYLQ3TrP4LtFWa1UM8Q1fkXgHZZjDhg2UgqJ7y4x8JxZT7yvnWcGWVZ81Zm",
  "key17": "2XP7TsdTvQgrhiSvkKoekLKZgvGkgwmbkdXimNw5U5ffvRnPq4GciPy6zCoQKG5ZNpocmSQY2qzdrweAqiiQzodT",
  "key18": "vesWMb8tYR55jCzWjazBVLaXUVZq12HrbkLg7z5kPybxeaCRRADCBr8eFPc2aiXb55GG7DKdCGSNDwcuY3Wvg44",
  "key19": "NmoHntNuWfRgBUUo1MPD12b56eFgU6FgY8KBH47ihE9RduuqRdiCk6xrWp8f2fAyX1MWvdH4U7QLViuvpktCAAi",
  "key20": "4fMEKHTmJFaJMxG9QT9XQqZwMzgCJBAq9UZz9iVYeDDEvwrqRaHJH2g2jVAYNEL2rYy1akHfx2KZWVSNa4Zcapqc",
  "key21": "4A6urW1Z7Z7EKzQ9d7WggS9qMjG3quxW7gaEs1j7wxTXysQ8HPyjkcWtSXmX5MsLgtDbvDgXwMMUw23h5acz4FsD",
  "key22": "2e8jTXXwKy3xiGvmwA74b84fR9HvAThMD3qQgSG9wo3XnpcqCh8gq9oFkSdak1sQSUsHj5UeJdJsfakkHqm4ofbg",
  "key23": "2PUk12BLKWC6h5i9yoTRxP32zxY6rx7YmnRHip8DstuNVYRCsYJNubhtyfsTxgHuWXfUJiMAWLob1aBYN7UqEPjL",
  "key24": "2zcAPoHof7S64wfamLmo3oUX3mHXQuXWzZiMzjZmpBxhqR5G7ocNaJAStcpg4gMJjkjgmXi8nnL3uRWg15B8bBCp",
  "key25": "5Xh7W1B21taXrW8iTX2Z227sv1Miv4qVk6UggekxhFMUncNeYjHkV4kBDNz4Jwi2UN4reswHBw9AXPw3xECYRXgC",
  "key26": "njEEzLJXvMqBe9ErXi6cRu2Xu18HCv7yG33nBeSmFqcntVgcH6gKNBQ27MwBMxQdFJwbzaoT46SyNqYv3X9Lya4",
  "key27": "4cCn8yu7P8GK7AmGvXYhoXU6bycKJ3NWa83TE4o6Jf9vtWwRHwmk5aj8N5uf5WMCCML1GYtGsW1PHcv3tPfH7rjW",
  "key28": "42myJCyBMhZ7SVfZpomP6bx24mcJ22r2fPzZ9JUnhSNnC2Dgr28MEVzWa8G9BHxUiM321fQpTZEyLeCghYV6s1Zu",
  "key29": "3wUSLpahWLjK14mM4xjMRe1yAigKByVBjd5TjWv87GuJxvpLTYeS3PHNeEw7aXADYfNUP1kUmFS2hJXRyQ8ADCWJ",
  "key30": "3iGd8Jw7dnYEc9AqxLCuRV9igBLEr8J3ssiUPBGWg7mU9G6ETZAgX14JrH8r7sqmzS6Hiwte1M4kcm9yQYTtWGBM",
  "key31": "5viQPi3sV8LJ839y83k96fbfY9ttetWQMkKMNAQ9fcZetfCkZPQPucbCN9b2Jm5Ci96iYnWK6rvjT8C1Nc9fQWdE",
  "key32": "XjDLUaRbjixufFY2CwUB3ePAc7n1L272TxtFFpUPQYCu5b7FYEjccdHpccaYXEge7a48GFN4RSkCwv2xwDZviUX",
  "key33": "53cw1rs6iZk3GY3ARQ3sGrnxANWHytGp5FcpzFVpvE5DU2BM3hGd2Hagi5kvDcFuWwPWh63NkxAkbVTk1KDye8Cx",
  "key34": "45Jb8MVcW7EZtVzRPS6mFbYA964EGw1xNHM85phRVaMzwdY37mFri1oQWdE2d2GnKCsSfyzwUNZb9eB52Df755yr"
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
