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
    "5Nzb2KPtwhyYtBFRA2NreAqLGTWY35j9yeTgqn1Z2vVBJAb3rS8XNYqERNG1LgV5bXoVjTk5fkrQfpLd3uRAnyQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nkncTbByN4abaNjo66S3e6N9xHLRqCzJXhjvjBKSPkrRQC338dH2veorquTJXPSMehyaVvUD7hBTXHNtNA4NWM7",
  "key1": "32EzbWScRYuPp2RAbxveD7VzVQyzmjSYCZdBrjAFuSptjc3ag5VBrSJaG9ozk6AaSKyMMLbM8TB29gxbqTc5bgJd",
  "key2": "2tyPj2CjxikGdqeGTWTSFThcGSS9KRHtL7FpaZH2DUx7FhVPZwfsoHa1QVC1SxoTD1Z69We52DytAWTw3px7veXY",
  "key3": "55EGPn1PANn4F6YAiedhggStLupRTd8ESucW8DryCo1vFfiafcR5mEs9hvZYxWEdymoedz1sJmiKcsb1Z3B2Fn7n",
  "key4": "4kqskBWDcUiBXGQyiCYCdyWzmVACRiUkBAFxJ8gNbeQYzcf2BbdWBWRuXZ4svRe2zG9fe3oWzC45wXqgSNGeYamo",
  "key5": "3ih6We3XhTZoxLpNs8iv9kcDnghfpiw1qeR4k1r2QzgpQq8Ru5nNEan85bNtepSXL5CRsXBzDSVLyWACQT31jWv",
  "key6": "3WSfUWg526UsvRtkS54N2qX1k5HNx6NWyfUPazjkzisJMMBXGb8iemE5rRb9Y9Zdtyhhe6sSuh73kNSUxZU9iHsc",
  "key7": "5MPfkE1yJYuaCT9zJnSYte7LAodZyfFpd3NmM818MpHV3KbHu71Cmgjv7X9VA8Vx2UBnwaZPR5LKEueZqzzW47is",
  "key8": "3E7QUkjhA2Hkvjghv6LqgzPxjQT1qGG3BSnRyiePHR5R1RBLPxbkjH9SCg3ojs2UFCvEk8n6PYgccpR6NCwM7rmo",
  "key9": "GjCJn3Xt8XBg6w5noDRMWBCreHWWfyswnsztFP9EY2URHC5zsRNZdNgjLfGcSsYpUCCaTLA1QnKsT6Mo9d43pqG",
  "key10": "3aPn9iGmvSoCWNpLJSPsFMSuWJ13MjTY7JErFySYfirBrJo5QW2Nqdrc9T6YHSokJ4tVV3Bk8gc6Wrg1qciRTAww",
  "key11": "5ks1E3TYJKG2YxCSq9kWCScq2AqJNCFrhTFJBb2S3N5nAZdk6ZfjZeR5UfjhiqmproMowXnZNa8LCw74AmA5qycp",
  "key12": "4cueuVmxTsf3bUiPkQhBvg2bChWMQyegUzxRyENN4z6YCPftzRR16iKBHmYmzhMRmrZFtvDwta3g8HFhjaSFmjSB",
  "key13": "3kEYPj65G9a1ccGcXN9Ah9uqFgPjLJhNg7VAxqvcCjPsyDsGtrxtpv7WUScUVkC8Gu2JbuJexWNQwtUGVDcZjYKF",
  "key14": "5b14442mVQBesYspdinDHcvgA2WYdwKbuAKRQsZ6xWa6LF3m8rGNAiFpbWqK8UvTbrtz69ksnJv99wXLbV8LhUUB",
  "key15": "5RX6kcJ9Pc2puK6f6pKsE2WJRP4SXjp63N76qzb9eRAxCcQqopifBKfi3iBkr8XKJEqQRYS5AhfXZZyCmjjLELiH",
  "key16": "2uGBbgyj6pHJp1iwGDVkfDt7Ru9SK8qEXNh9bUyFsyX6xFUrX6WNm7vMGtGe2ztwm5evvbU24sLwdreHo86eEdZ9",
  "key17": "MFNkGbPmjjNCuBH36F76EzsPP2diEgfSLN9DWSdTVypbSMnQ1gyHkmMaL2a8saqaB1KfHYCVbdMNgcs7YD6cFfu",
  "key18": "48NMQLwuJoTcSCCLfHzfx6oFQJDgd28pRXg7gSSKaxgU4PDfen1ADhHyjJoH9Wt5c2zugLFt7xRSTdfnWmfa3q7T",
  "key19": "2QWAqX3pDDGJtUs5eeb8voWFLbAYGx5sXNnP7DSxFZhnuVgBgcDXv2jMrEvNBBVtDYPDdCgyE41ZAR9CKxD3kRdm",
  "key20": "rtCyXkKvqKdjUhz5274ofKgEdxQW59pBVcQB7qpc4a2Jrnbm1qua9AQXL3378jBaWHMNVH4fYhptx1mMqQgsTuy",
  "key21": "3FxwzeZPvqhsb1ZQXn5oEsa128odXiohqXLjWfr9jhfa6fSCH9z7JyQGPy51spnSFCupqeixmWYq66FqnUzT65fm",
  "key22": "4dBLZ5MNuq6TsbXRakN2xnqbmmmW5juPYozQeAv5ZJN1pAUQuxMLbjuPB2nSFXtw3f7GNYMZoLuTRvw6TdvHhRVh",
  "key23": "34Z6wUuDQqwDtF6pYRFTDxsKEry9zkXJaUwyS3xfWh99c3D8aXBQchoC5iKwERM6oqJkyJmnCrJL2Zew9TRKgHR7",
  "key24": "4Kds3SCSL94BAjVxsmXG4SmVcH9MH7uDMpnSk2sMov6vUN2296edGM3koKxhyvzhXRpjr6LWE8vu3vPvCyqStY7x",
  "key25": "3phDGWcjkLf3CPvX6vajJNiYbU51YKR1FQynX3pqw71jRqReDYcEHJqY2JCmfy81VbayNbuxKM19FKGKdvhFwTo7",
  "key26": "4L4eNmWPzzJhgspqqSNqbtjae69gXNFRD8JcEZ7K4efFxL6kwDbBec2nPXFGver1VsRxUKwszpBBKWAUQHiiFYFA",
  "key27": "4uUCynXRux7FQZ5pDpoqntpf8bxfFkwdBG8YnBukCTU1NCZRjxs9XPrjZSwUrw9o3mcGesHs3naLDaUoKziZrjjg"
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
