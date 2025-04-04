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
    "3trZzXnUm72EUoqa6UbMHYtbQvGuavV7RzN7N52LaQux4m7z8tWRRt3yXpRNmhW9J6dvijpaiuhee3hmF6YVFCNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbbYh9HwkZBZLd9PKSpsawbCucbnyKF2iDFe1cGGjyXXQLeD7JW2PnFfg3KG5VYpKe673VWZTwCpy8tYcHJz8WZ",
  "key1": "5tzHbS6fHsMHMyVeQ6ijydTn6ZxbSt8tuv99LyG4cMsrkjAx99P493EE34esHT72ZzxMGEXBLNqCe8xAgvhWwh8x",
  "key2": "5NbK7HkXwxYQYctizyYGzFV7EdBbgpYNMa9YJfz3H9m2D6y8vwbbReQCTcTdAZSjYXtVEWS4xNv44tBxED7HE1nr",
  "key3": "2Z6748nTmxv2shgEuiDegt9v2t64X6dJFMQu5yBfoGLh2T1mPxJwpeNCE5Fhq5TVNSKATHscJ2WwyHFWGeeAyZHe",
  "key4": "3nujB4uyX21ZhEbVSiApmYUz6CW2NPYvfEPsCWPBWxz7873MBW2T41MKUN8xyigNtZo9jbARiW2ftPQJAJMyDLre",
  "key5": "44xbXf3QxtKNYJPNhQxXPHv67vQ3i7Zohte7ycpnjTRPBdVGA2SRJfKZTP1i1rWsqXbHxkpxgXtWYJD2F29wPmPz",
  "key6": "4ftAR8B9Qv3W6Ynh1cauPwYZdVizXAEZivyYbGrUjGrBR78nRQheYgqRAanCwhuvKzVi9eSsvctST2SJHv35AETD",
  "key7": "5HoWWrjQKqFNjK9VJ6uqALc2Jn5h3hiiN3D99d9iFvKK9KHEyAUvLPKi4KgaSrEVjortGDuz3i1HEvGtUx4u2hxD",
  "key8": "FsPN1KtV8jNEmCn9bGtcsskMGT4a63xoNxxLcVKPduQNCiBve5qyc1FSBXJGgH2tFjxSi6T7mE8QoYYdHRmaNmi",
  "key9": "2T4qMFkPum7iYnDxTJZ8R6pejP3nBeponyGwXBH9MRw1rEEK7eWRbp73Uyijv1T3sCsaotfTsZyS1QTp9cVKeVfN",
  "key10": "acu7trDdX3LdA25Cx45FFjVqYY67EeLfzbvJtbZaFf8bM1mMiPbx3MFNFa6aDZNArQ7ZTURDNZgxjPNExnb6zJd",
  "key11": "4fmtJxwikarjQyCL9VGx1YTNwnuM31dgHGzYuiztAjQ2Ms5B6KVuwcFhJX9o3knWdeyi8FAv1A6yacLNNaghswrV",
  "key12": "5pEXc1VtwV4hkWKF3VMGdUT3pRFUas3MjbSeWSxjCh2FzYB28sHg8RfWD12Z7k126ihRhzqHbB5brSxw1D9H1z12",
  "key13": "5qz9E892PDDdQwEnW6LdJWCPBdMiBsyCce42gHZ1KyAdZzvD8SRiFSdvu9z9q8RFreDhaeNi5XaunFjYswL7V8FY",
  "key14": "49Y1iNUTfb9FCsZhG72TaPG5AqBwfP2sSvBc4Y8aymaYKzrVRQS6MYnN2Z5QHfVDCyRqqW1yFz3KtgSBWrMENvG5",
  "key15": "25g56DuLno21e1vJqvpdUaqBRM6tnmsRhvXmJBSEN6mWsHpNSZLjGNaqzaLigRzq3itM9RUZb9gPLeG9GeUsJjxf",
  "key16": "d7dRhyBANNUFpwnCP42gn8hG96GYJGEhkqRtLLGzx6jsEAU5U2sSGS6fRaAxX76uZG4CdE11a4MMWePoorrsTHT",
  "key17": "zv4yAEu21V5b37yD8TMaP6J9p5UwsZbgSyVck5A8k8PXRUqmYx4xNCeUWVhME32SytDH47Srb7KJeB4wTpMLcc7",
  "key18": "pHmE4JPQPBFjnEB2T3PXJsqWRJ4rEzfQGahxDYuJnY1nQHWimW39zBz4cWSJiLGGMCgFyXVh9Zox8ETskNNKPC6",
  "key19": "2bmwLWYpCNNa9PndA2CGqUgDqmjCyam95n5cBkybLqsgTk9vZXECwCBLrHgfTBK5hBJHnGwUTqg1BdGrzeKX9PP7",
  "key20": "3ssFgWZqSS5d35Xtp8QacUcbxsgYgLAvQtjhg7HEhd9ZtnSSEt4ZdUVnxyLUFHqzowQv5zpDxgUHSdmWpCfXrJbv",
  "key21": "66gtEqXx6UFBvYbc2ode1Vj5FH5gzpqpwcD9MCxwy1jSDqMUCigmgZ65AF5sd17h3TFRDWeDPQmACifZAMRhkddq",
  "key22": "3gAaybvsMLug4sL3QV4m1aifHX2LNmoauqbs34k3MMM2Bp593UuYnHiB6jim6H9eSDSXVS1H6zGV1UyfxAF9vEsR",
  "key23": "3yBeddDyqWxyQPWqkGQ1YQPCcCyHnhtHqYkFRYdZHKiVLQBJ27kc8H8kuRhmg2JtD6Pd18uGdsdR5FW6nUzbteFA",
  "key24": "AfNc6NY9n994zYaDVAJQFYvv8VQ1JdX9PWNKwDXDJ4J1scebqTdwCXqKjsyNmA5CFaao81rXARMpTjCW7P6v6w9",
  "key25": "3pUe1YvP4QMAYSdiPVTTiT4RQhd4v6UQmvgT58znS9MU49SHvuJBRc3anAxooGnB8SKun6BmXZvdKRLbiBbR6wGh",
  "key26": "2z7UxB9K6v1QJWqAh5ivyNqG9hg4UPSzr4EvsKfgnCiv7SprSU8vXWC7PWTaosfYrnRVXwqGhCoJYzJ29ZZW9w2m",
  "key27": "4otLvmB5bW1Dj8hD5Ld9wcJaZ27LhGh3HcV7RpnTCkPXwKZpjRLDWhtv2soMwA72GpFLpDCyVVEtwWbp8YohWGjb",
  "key28": "5ajyGR9fPmqPo4QSFFFcFvowHjjwXWadVvY4xpgqz2zVGXmvnyMTjfkieRnPrvL2XEYXNtVc5WTvXd1yw4Rs5p9R",
  "key29": "5Je5fMysnXvqiAZ4fcgjh2zitVN6qHyMzMsBDvFirCKyLJtZSmJYoYTJQGA9vuKXbVRzPqM1C26X4fTSXuR23MzL",
  "key30": "6WGP6dJbcjAtaz7CpG9DCjWsvWPXRt4K7nu7Tw2yAhR1yp4W7wPajPNeASTqDH1oZt1a6aa9geEC4wTjCYpVzf3",
  "key31": "4tCzJVoJezF9kkFya7itFSRVc71rfWoGnpLR9F6bFs3FiZyvvTbgeNNAcBcCVnf24QR9BNitifuvV6A9edGdNYMj",
  "key32": "G2b63ma1vsdRMUEx4qxUmGygbDcrmy9yjZcvRddrCmaLYpVh8mM1yr4Br8r2T7ePMCPfREYyammipb6bSJaHvns",
  "key33": "2QRdE3JgjuccGHsrUneVTdzVaQ6tpnPvbFsyy4PsvQFA2TFoDzG7ugZpifTUkroBvDHxYjndoXGeMQY28U964zh6",
  "key34": "5uzXHqdWG7JGL9onnmnbs5FVqopFp798o3ZL2VffXProE5KTKGcmETq4tipFJWEiEmx5ztmJtYJamNRFuE4nPqXW",
  "key35": "4ipz5Z6VSGEaypd4pAqPdijFYX24vky8uQYVQg8UTEGxrnRTd8WxnjN9Y56omLLWcUdJ99Uv1qo6bwdP5t53sZYu",
  "key36": "4wyCcS1mdh6drtSvEDuYfXU2Vqf8VcBhARAYZWR2jT4NiwJNy1MA19WTsVrMASecrrW768qmJ6PZUB1JdxTfn89n",
  "key37": "2GU6taUs3aLFenrqxaxyPRQak97mdwWkqFsporB7JvNEWsBw4QFmfU9TYCXXeHgDEUQx8j5kRQd4nYa4BWjrKyQC"
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
