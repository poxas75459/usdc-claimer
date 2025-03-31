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
    "4qg1jZWdEi27oAag9PF7X7BKvxUjmeSJz9DkwH4r7zivvGtNJtAXaSDLaKeoj2zLhx48x316x2AD3WzogXVREyad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhcZ78Qz8WFXyY1oK35qkawojFM33SQpDtyzrbTuXSBJcQ2oV9JDXVRm2NBpg1jRuZ4ywGpzLkcKgtEn6Zakict",
  "key1": "4TSgZwbGfbXSBZggN5ZrvqRgG4ggHG3bJNSAUTDxW7hZaR4WwepN8KngWeTyfAL12ydvJx69fC1FJx4ELhBzQzRX",
  "key2": "ru1jTzm13S5WSKXTco6H4xNH2BQ3Jwckgd8VdHiPkTAJt4WjMmhS7CTWgUbfovY7JiCyXYpymkPQ5CSmnFz7YAV",
  "key3": "3C9HcQ1a61vH3xA39fVmtfRVDtAXxYKWXsFqViENxrXwgow8JUYaRykDJXUEfRPPmEqghTgHUjAqsRPLTJp67QXa",
  "key4": "3GYPHb7AxwWy33NRzUyRQ92mCQiHnu89fs66eDqBsHHHpH3kqb8YvD8FUYX5DVxfciUKUATZzpzxdP1GQzrcwQhT",
  "key5": "2GnNBQxhhsy6uqRSmYXdcCAkmjxqF1d9EznrBmEcGGYhpZeDGBm5cFTok7sJpYZLZkmneu3oxW7g1a4bHYyY73Tu",
  "key6": "4nPbXqPfACPYkyfEA51s78pmiXDVYGdevyfJFqmp98zMVCYq3Pmi4hLv1d8XMYzbQcL9935yYWS1zjP7Bp9xDUCL",
  "key7": "2tWA6Z1tWvCP2hQH1oaXdPfYMBjuM78CWxesiDhE3rgp2CxqH5hAUXncPtTcMN1Qn3vGVEa8jycbvbDXQKq1GRof",
  "key8": "2fU4QQ9bDKByoZWwGukuyZH8ywNRk2W1b8juU5gk2jeeMHjp2Jj5zUU1B7stVDiygEV8RHspQxoEaJQBQi8HU1Fi",
  "key9": "4XUxx2Kmz24iJCPpLUR19S1x59pg6Da8fvCC2iyfJsGSzaXNRxJeEY9UEY1HxtLimXBEZdzBAdr2WU2ieHgyUnnw",
  "key10": "13ffF72KF2JaQvqYXkQ2Y3Hg1deq6H4PWdCT1dFEYhX38rpNRu7VLvwzhyVT11H3QeAERzgqPKJbUquHpnNhWkM",
  "key11": "4VLSmiLWtwVPRUXaSuiJeqYWh7sh8Bzj4zZYhuyU3Zs3ayjE3gzff7KApYFBYNvoqdVSLh44J2zgnKDR9UkStiGd",
  "key12": "51JYhtpnVdvbhsZWPaon2KKuoX7NnefXzaAT2CTtFu5aVsK1QaRMMk1ebNj53Mj2aLpUCHFCV5hKJWu4TzLAKiwm",
  "key13": "42JSbH6PDCPh5mfHtwrVKChwkwYfQ8z3aSGUSydnVALiQ6jQzU3dpz2YFpvQiSWLrtfXaCE1SAVLmo47nSsbj2QC",
  "key14": "4bKnFHQ4tJ1rAq63YuomerAyU3X5Ju92LXodEd9cniectunmxfyMo2QTXiYkNKxCnjPtdikr3pf3MFjZUHG86otv",
  "key15": "4spWx1hB8vw95Pt41yyX1fk8vQaTnLHAeqiXMGPa5MQKmksaA4Xe6G6DB4iDoHKxu2W4EZThsDmT3E94BqyqydgE",
  "key16": "4ZbYTdfM2tiTKnn9aSm2m16H9vJXTUHYVMoeok8thyiyDJQgeGb35r8iPtrAvCiy2x6YYV57DAWb4tVW5jz3mM9C",
  "key17": "3hHifqJehGysqgLA5xUt7LBh7Acofjhd7komEQpGdd3pJchm2AmwxHoga96rKVoVHVUcQ4NKxGD2rtn6zQke6APD",
  "key18": "5XX96dFW73tm82wYu6LT7oyx1ixeLaYFMkZqefv4ZgvB6FajQXfwske7oGzC57XNCiGHizCFpmC7mxoV1CKiM65L",
  "key19": "2Rk3xwqp7Pu2jLef6qzoUHtsFEY1rG3UnZi7D3a8GJN3uH659YCjqbBeB97ELAbB5i7thPVTVzQsf9MLyLhF316G",
  "key20": "3KnokY3mZvTAKZuog8qsCL4WTJHc3Yeb5E6zKgYsBxjpJ4JNpxi2cfiddmaWak9K2Qqknu3xHLcesnqVtFzUX5Dp",
  "key21": "5pEZVF2WrFDFbYjLQNwfZW5xGf4mGiaTAbtkpmwKsZeNCiwGXRb2H3Mb3SosjRnuyD6x9dCjrMJhRihW1MXbV8Xp",
  "key22": "dH26zSKZT9o9kMQTA6t9fE7KWNPm5hZZ37NCgzBuXPNmki8wFMJQwGpz9nfZguVkCLdT8evtXhHo246M5z343b7",
  "key23": "47MFhRy44niYe33yKhPKiR5k8JKDGogmp6NDyMY2N8ixaQjWmaLA1MsVNTbU3PjszqiLAujSU4ZMvMyV8Sv4PwQh",
  "key24": "57oGjbCr3udNsVRMv7jyWaiBvMbf3yerqkaoKmE7FKpRHg1YtStskWZ3ThnCC8uEgpbYBTqiv6eHjysk4zdryzJC",
  "key25": "2avFJGoL7LkVhbUw4wefNC4vjcJeucNEP1F2kmrTAmi8abkSK3y96v66epC1XeC6GJ8XRyqD666rUXyo6wwfRfPo",
  "key26": "4Ksc1mDYDgL9YwEhwuADyXAiPagRTgvPnXHhu6ToBe7dQT5LsfWryddDwoJYc59BQm1Uw9ENL7ALvLD1PAYxmx8W",
  "key27": "jvxecBzAbz3XCDvpACgUdPFifdar4ZxaWBm1XgmQXyhaP6RKVRFeZawxJxWAf2a11LqwJ4FedeVirNbhnEyVLSn",
  "key28": "5RQz3XJyrG8tjWewvSoKKgJLBJmrwhuktzNFvH7axPUdwmo9T3zN8FZ8hNM1zExYZaxXfT9REDwkvRNM1FUUdBUR",
  "key29": "sLwagfveeS4npyZFHJkj5PwoaiPnpgzeuvzmukqZA299iB36sG8EZsP9y4p1CPjdhBXHqjimQHcLbdgnanx3DBk",
  "key30": "4kp4fQpMe8GKvj8f2pMFepdZtgPHJ9rA9XiuaHAdncz8RMamb79PM3gEw5aVQckPAXiqLyj84ws5CHQD3PxXv9fC",
  "key31": "5WyZr3ogTVKDLKv9X6UxQ6kMMhTt2PnijYHq5tAxgY1ow6LwvyC9jYHKbYWbgnRWYXQgGCDfu84ZgVrKUFDGy1JA",
  "key32": "4qS4UUvaEVwh28HJcbWnBoi76KSL4eNRyfvJ8VDwCoDf23kmii1kdEQcHxkaF5wv3S9JmZ4KX5uMvsVwk9ppNA4c",
  "key33": "5ghkS72ik5834TCANbqbkZZsGZmaobry2mMyBSK24D9FHPaMKdcUVDDciYKUmf1oj8PtMXUskgybY8ymUnuAZXVF",
  "key34": "4HuGZJW62XuWYkXM72N7GXqk2CRzCjrmEyk6Giwv7CCwzpfSAU6NGmLQuNENjikv8hi5Ns3TfWCdf5GY4i52rKKu",
  "key35": "4WeeWAQ2Q9a575YAUK9FJFwBZfjQaw6wW8Pq9LAMCxMuGQFFzWNpiyD7bVs7mFesZStfA9utfoUN3ThW4qqCWPEM",
  "key36": "3a5sFLRSZXTwXiUYnPhUoiguoxf8X2jMVTaivXfADypC9Bd5MPZ1SVpC3BEiYJcPJbPgaNkWei9NAJdyk9HNq56L",
  "key37": "5eZWQSoJ6aBxsLuJ1k6JtcK8xutiNEV4ghb5uxvtbmL6RQj2TuBTXKaxf7tY5bjcExES93Mas8Wd35mfomHy6PxB",
  "key38": "qX6ox1pk54cwtB7FvVdwie4nYapV6cot48bkyp7aDKJPcmurEzRWSo1Da1kdWHMrrU9eAeEyNMS4WNdmQDt8jsG",
  "key39": "gWAXqEQAGG3QWd9pWQb6NBpTGwuKfWZz3camPMPJ67b7boA3E2hon913qAMqyBq71yMSd5P56Md5EHX5sECw92C",
  "key40": "fEnwxEogFBUByjTBT9NxrVovvCK22nicefYJ6Y4mUqKme9phZ6n7Bq7w2tKXYnQY3qRbH42fjUimWV8c9ZmKYEn",
  "key41": "4qNjq8A5vHy2WCotcXg4g5w8Aooy4yW1r1Mq3tjdzUGmKbLb3iD6eptDcqqB5pzDCxdfJFc4fwrF6YbbW8xTJK2i"
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
