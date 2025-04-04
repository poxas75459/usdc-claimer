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
    "3q4UEoyM5yV646pYrC4SpnvFbRsmnkyMeop3Ed2V3nUJXQ5tZbjXCSg9cPjbnrHRQDBkHE1um883vFhyDhZ1T28V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eMUhtJA7WLq5BfEpV9GZC3WVjJyx26u67rFkVRFtiTXosjGqgNskQ3Hkd3C9ic4qEonmjsUJSt1Rep9yqv8UK5r",
  "key1": "5suKAvvzyoei8arzNZC5HKR488hVLhFR8WZ6cH6pwnRvGYsNDFpGVPbV2xvV4fDV7mNjs1EE6CmVQXRskV5tzAQX",
  "key2": "NuQ6XU9wN1tya2WguiAr11txLFtvguYC9PYMYru4GztPNUHaBZt8pgZbaARJ9TtTcHY3bWHXoDNxgKRsSM1RPiT",
  "key3": "H1RPruzYWi5AJ25CEqy1zWR6jnjkNspJbkCDycSApfyUATc7tSM6MVA3rnfyWqeAfiEN7HRnSCphtY7QFHCJx1P",
  "key4": "4VciSvbaqTortMfbMuY6GtMaNxAQpahxERepJDcUnv3s12Skw874M5UK3Mq2s1nw9GWvViJb9cwtRHtbhQzjYqrq",
  "key5": "24Ha5FDyTfUgAbwc8P38tsaxXypntdT7F7iPZc8VatgL3Y8UcHRswBZNefpmyPEbprbUHsMMGdveFJYQwQo39Yz6",
  "key6": "3rMBB61prmyfYrdVL88UbafKB67QntFL2ed47U7zDosaLzq82aZ9StMMvhMznyCWtpHr51fUrSqQ1vh7b7zaUNiJ",
  "key7": "1R8UZqg8mP61mNNKb2sbqEXVi1eBCv6RH3v5xyzyc5o3vwdk6pJx8hx4QWZUm7NkhQQd1bVEffw2Sq3xTfcZpPb",
  "key8": "2sBzzZk9KDimQKbABGg1E3wWpE4Q1Sj5rxFzy1XyYFR9USihE5AUeUKonqBmpXFEUuA3hEpDMYXx8wx4kPJpMSpt",
  "key9": "4NMRMynisgjHpnbX3QiVTNj6RG4bFtcfM32Rc2szm9rVhtCWHSPTAV2Por6xnzWXKwekD951DMAiEWKmyQZ9vETD",
  "key10": "3Rjy2cxrCLWjoat1Xk3wN5rqgjmd4YmevHPmzJ77xgqkvR27sn91bJyGRY3aAtnkWqxaR6XziBUeNZM1RrYKWCsC",
  "key11": "wveeHtVnBiTNLhXrd75pNEU9fyAVd29YH9MHj4coRp9xwSaJxrhQAtuydTgCRHSkeeFBV3KnnDCHJgQ3KoCvZ7e",
  "key12": "4RkQLZS6QUzSgNXJ4fBsfTdWCXxSCDa7qpnpAFqYmx16wSCMwRYCX7YuGpYPVQiLyMdiBrGzyV24n2rFgPnFN9GG",
  "key13": "t225MkoPbpSxD1FsYArwpWpYR9At5Pe1HkGUC2Prg5j84Jq7V7Txv3BJSRTihEMxTKwcVSJ7qmMFDL1b7jTz6J1",
  "key14": "5LhvuQxQpA7HNiU493bKXWWfMtgCGeQYf2EgCwB2umAaksC2EttVXomZNYu1bzqtry3J9NeRHiRLj5cX5tY8XFmp",
  "key15": "2PxFDjJHiH7bRArdNfqUEoiX8CiNnN95UTwtzp1Tq1aSt86spT5M1NfvVaFwZi2egBRGtVF5VkmqGDs8yT5MLREM",
  "key16": "5Xhngkao5ZqtY9EPPGpqJzTtgsXx8whXuGcFFFQ3vEcUffdXXGLKSbNprpHjN6wyafgBXqW4Q36yR3L7973KCQZX",
  "key17": "62iCiz6mgMUBgU6ZTtfaY8d6ze2mBRkZriYkxyP7bm9qgZYGuEbKsrZDAinAZoqkkSZMyZxvnCP3arHvfPeYU8PQ",
  "key18": "4N9u9nXwSjLUzqudzHcKkoU6HLrQV3QcUdSZLCD4AqBDKgZeMfWRqdwnyPCaKxmM9RNQ1ukj1d625BTztvxoXtPj",
  "key19": "YpLBce9mRe3BZK2YLv6k5TfN83mVunUCocCasERkBiJMEpKb6jhjS182KM1tTMmoVXMW12KoohRxj7Fmr8nF3EY",
  "key20": "3LTccHbfYE4Qw1fyhAviSDyk3mBgZ6uf62YSF7NncNAqjaRadaGpgqMGLrGom65QxpE9vCcg5FPcMygBonf2eGHV",
  "key21": "3SHvCxTPaDm8QKpcdq8gygnviprWALrGyYHZbsMxJCzmTSsZN9BikhUPzmBWppszivQVptmg6gkN3sJm9SMCCKkn",
  "key22": "2MfoG7FVYWEDmsfxrrtSVbRkQKvG9gAZ3mT4sEPdoccaxXenAmZBPyAjChjGAzLbsbsgj4z1BpEtrv6poETAw92w",
  "key23": "5KMX999cHU1J8Ud2LabwX74X8n3En7Txd88sEgsUmqNAcjau9xGzUigoziS99bUmmkQhkQMeuMs7P3TRFHpLMjXn",
  "key24": "3RZnhBfc16mQ5QvmBfQNzoN4zdqhYRzLjYg7ahzTRx55HfdFUJjo1utUabywioexbn3svwF56NEbDPNp1GxVT63r",
  "key25": "53NYECHiyn5duvpZicqyvxm2DYoRvmbLViK6EL8coQyY6RBWET1zWTBfKUMzWvu82wBwdTbX6uzV27s7aNfseaXL",
  "key26": "3EEcz2JX77nDF2jaAJ9DqF6MX8hZWq7NtDD7YbeEEYL5pjsC2rDf8jTxdbEzLxGuXh2k6Ppd1cCdVJWg647DrPxd",
  "key27": "52KmdTRE6YiMPU5MA7wZ7aSFyZ7TUiQUgdHabVTav36Sfj5TnVxKU47nrGLtQDGmC3tA2v5Nbq7qSUVPEtBcfBmJ",
  "key28": "5AtjrnwC7BKdhag9TZ72u21pmGdjGZkypfeAvM7TnxFZTpMaPRJPjWYtcnLs6aPWAUkofnc5cVPxLW4ToJLpqdds",
  "key29": "2hQibpXLKKhE3ZZVAqSYdFaxh63ubhqzrYp7yFJ7RNX9dZa282szyZh7wkXt6D3EL29z3uMjr3GZXSZgddBAdQza",
  "key30": "2uipjC63yqKCqZ8YBxL44CdZLPoiycB4pFA3X3rcuVi2AHkz36Cb6BK2GpjPgQT15TjRDZmWQUzm7EMe3ZaDgenW",
  "key31": "N1eqwgzyAh4HpiT8dYUeUCcWGyzTkYNWdBYs6MxFCFNeD1Xg5J6KZFLUSPiKh6TzUL5K45J1rHbqBa2bJV95xBm",
  "key32": "2zEhh4HSAhttUrityLsUsUtnbPxzX3zE8o93LmoVwn6wXfxdBfUhkBKuE1r7vpxTGX6pSQaxQNyxZJjEcwKvy2XR",
  "key33": "5hxsJZjSfVx4BnVcvei2N8Zgf3HzmovnvLN7Kk3P4QzJHUJocpw4oeLB4wzfvuCzCmTutAHDkJPMWjnw4qSXmKj8",
  "key34": "3T33oAsvxgWuWPfSVm4iAuakv3YY5GKEtiZLVVBv5TPdzNd2ZM3vYugpjsqmqBpq8brJmNDDUbCqFQgZbXNB2WsD",
  "key35": "4JdA4xqA9MWzTAa1zLFtXuko6vY1NqWCmVTYxMqLM8jfHHH1dsPshU5AyNfVxy7Hu1RDDUdbWXKuijzo5ejju8De",
  "key36": "3jCdbHKj1CKypYkN3uTjSD4UjmVdQTgiNB42kf9D3ZaPhHsgTLgHTJT3CP5XJ2sqZ8VpS7BMY9LfzTLTUkdj2dud",
  "key37": "cQ8apHv2XXPmKGb2dLw6JpRFFiugyEtSnXVbhCQ7jMzPe5mc4qGUYDSj3zXyTyey9zRnKUNPJJDiXKeoKvHF42N"
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
