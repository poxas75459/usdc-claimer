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
    "3BP9v2AQVUsMqSPSWmxcM6SEkNwVvetgN4asX3cEsmchkXWXwC4iDKKevUHEryYEL6VCCnSntoByg8QHb4DN7MxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cM2ee2Gmxos8tm31qZrBVH2WUgWAQJqwkhs1RjhvpRzLS724SDr95tmx45gWwr9m7RvBiid3zjSZWud4qmuf9Zv",
  "key1": "387s17Qwx8m1zZHh2Zk4SR5gjsBtJK2h8e5ENYXmrwNm3o4jZedAtxaQeN53PDc5sqbx3UQsE2JrfrLtsyqDPDz3",
  "key2": "3mCFhwbatagHip4gWqRiiwr8Q92RTkJSRMB2QyhhCxCzxLFyDsXQbKEvedxYgJYrpbLEPWrEUf5drH3k3pf5uXHK",
  "key3": "RBLNdYbjcdvJ7afnqryBPVPv7JtH97PBYGMZ9deGPV6sNuAgqveYbeAMZmxcuB2T6qZhcGGD4f66sh2hYyxKqKM",
  "key4": "4LqKtP525bqNfpnky8PULwUY8FhfwY41ygtTNcPcJCbcUaQGcj38tv8x4tAGQGjcv97DE84wuFvuhaKUmUxHSw47",
  "key5": "3Vr2GDB2XaoPyQJroPTHRRHiwPrQ53Ew2m3bQj3ApkaJaTMPpkSWSTxeHrk8sXE67wmNxqd5qszKcQtE7rLAdp6c",
  "key6": "66NSmdwV7SYmJ5SJ5i9nUQTaxCF9EiR7KPjjf3fpTo4V1goJzeejrs86gHjqhjZnStQZu74TYjr6V2sBoTLjyw6E",
  "key7": "4JBkq8bLqj2NnicgZns84dFuJ1JQFM2iM9aifKKykkbU1ApEnvzcsuWYzozFEBz4xTtWexJVVWXcFwEM5nvc3T4n",
  "key8": "3ioXAHxNMjrkzrZF8miKq4TAEKvdaZTp7PEMiHnZZNFuQr1LDorbtjWxs5eqe4fJN3RPMCZ4ckQT2a8adU1dzTat",
  "key9": "UzW71ScmA3qGna4T7b2hwLsnRxRHBiuLh2uVFG37SZi9jtTZsVnSGyQKu3tnbuVHimkM7xhrnHtuhR12kcrtFMq",
  "key10": "5X4T1xHNS59GNGrC2Zd7CCAboXiYoRc59UWNBuxR8q5vCAeZ9HSAatn9YFBLFQe3VtYk1kmTHrUM7vukT7CnRqfU",
  "key11": "3GUmujPCwrEJ718uWv9GhYrEWCG9F69N1bHPVVsYesJTWv2XyF6HxSigEv1vkY4uMPo29DAa5tNiDNJBV7yLDsFm",
  "key12": "3uze5PXF3VpUcC8puXXbSmZvHf9gbViQ26zwbHbhJ24ubcZucGffpYCmZAmY2wvr6Fsnh7mShXVojyDU5rMVFjKQ",
  "key13": "5RW1pH2vnV2Xwb6VBu7Je1qUqcQotK4RQmPhtCFz9KuBGeVRdfc1ZEnyMBJchEkghM4PvjwPwUMgmQdJPtKwvDDM",
  "key14": "676CkYAkS2pYUJFgbwkt2Yo89N4SczgQDz2xuN4Gkr7NwMa26aTP1jwtGx5eGihuWm8pwkgNFRkDfYcay7wQnYbV",
  "key15": "5i2w59qqtvrRh7bNBvNr7Ud6H87C4HeFaqC7Y4v5Ec3sU4CTm3hxhDBu1bcb1b3h8kSEZwPWAdMLyYs7fjkrfvPg",
  "key16": "2UKUmuEzdqWXRDftYspLL8NmUzrpP7RgYr77NGRemLXJFb1ajh4dPh26CjhD2hj4tvgNHnTxkccADnwYEwPnzYTA",
  "key17": "2KquTNPBLBJC1KEp1jAXKdFCeJK1b2cbtSAgMncF5fhvVSfoCMonhGbrRae6wX2mQRrkgbQZ1LzVSaBDG4qmVwWo",
  "key18": "2mQ95Aro42JpQDAptSvL927ZG2epPvrioRbm1sxpCvoQy749EWjJLaksDLh1NFkYnpfy7LpRg9wm7198p63QH85G",
  "key19": "38yWZKfQPPkTgSALkdm3AxyvpB3NGZMyzCHhNVsJG3QwNwamMHKXqt6Bu7akcoijQyQW2KECHjAuRSBHPTNn1tuY",
  "key20": "2o5GiLGFttQC1zDC5v4zA7KE4dAFAaNDqrb7Jobj4FWmqmExWwTgSrAqfXmkHd6EBUMTniBvxGCrSEWomrTQdqTH",
  "key21": "EwWkUeLkdoBRdT5kv3SWbvYedh8AyHEC7UaajqaipjMw7hxZQ4w7LYC93HX3Rtc4trQ1Sct1jJW86ptC98xTbgg",
  "key22": "35R78shteFJYgRvcJrbkfXVT7sVzspS6SXQpq8zWvF3LUXSxMUGVUJbVXPrfp7W3p1YTVMKcgC2Re1BGdgwP7AA5",
  "key23": "5dJytfGTef46snVTjjN7rbDDHEwpUVK9MfLqshK99JDJxzb9bGi8TWKS6YWXb5gEymmzKCsaFBE5YV8ZFqfWa2Xm",
  "key24": "3cHjgmwXTfLgd4Ak5qu7Uqaq6dq3QgMjqCKuDMtzzZQCB9DoVkR1KQHhD5RLYWVFsx56Uug6SSfgWtX8znWy6KAc",
  "key25": "2rw4aU18B8r3GGwctV2PYuEKW53FnvvkPEXHfAjgNasS3KXqxyQK3kbb7hkWdDz3kPhaDaWteJdXC6q3H8pR2DR6",
  "key26": "47fqBAURiNrzXsheVvzQxKdMHY7TJur3j1aMwSSHKcTorUvGrMfDWmBhXNBUSXf85pr2wYLXQmyk1xNVgyd72fQW"
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
