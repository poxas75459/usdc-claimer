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
    "Fzo6FXquqRaJaHck6wuXKFNiVNwnxx4gB5JkbMRDE5xiqHzcGQgMKNciMcYCALELziu9BeVM8Am7jiLHwPnAr52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KoiBcntJZG96aXyKf9bEjwfAmBHGJEPETNEW3uP5cX6J4pfpsafHcN9cEWu4mJbMzKLpdyYGMozbY7sVvc2zcur",
  "key1": "26vfLAwf1GHUBkWFE8qDKzTeKexMBdhgp3MHXfJyFAuXs8XEET9BAjCGpiKo78LAgGJRVUc8VqxZG3RtgRngujyz",
  "key2": "2zJt4ewvLRReSR3qhWdZqtZAQ6BBeamDMrZCFhe5qcEzvtycnnU8U1cX75atNVHKCmSWrZCb8rUrmhkiLZkjT7qF",
  "key3": "3GHR9ZmNPQLJmszG6Wj2UV86Njq5Lrd1NSbvFyxipdFuw5NgRkqaqarfmehD7h1nLhRGqTrWx2HDQtENkBX6C4W7",
  "key4": "5ir6ST258QNaadNR6o8U9rDHwLU9cnvqBU45SUXSF1a1u7Fqx4FdktaaH5oTjijLdRpjVHxVph5cuvgqJiKWAKp3",
  "key5": "xuu4iWAW3ACe9g2jTzcxXDgNgRjcJePaFwyNux7aRLG95eRBVbtt7Pic7bHtSq91r1JxZtb1LYBtg9PUxKej3mf",
  "key6": "4W3vECAVdmJJ1h9j1DUdtw8DCGV8HE5WPzY527QqfnQwzdeAGMKRkxD4RfyChwnWLBjHrC8cvkzidzHQNeATBsWU",
  "key7": "3NwShGnLY2wFAAqdW5vQaVXisxt27aDYNXSLYJeyDBbJffr3JMJmnCU2KRd9LhupNMZ99GuRR4FGR6eagbHJ47mN",
  "key8": "5smwUNvbG8B65VhcF3qkZMEGRtc5tDPy59x4knj16uMQwUgyJcnw8DHnRrZYSjERMtDKtgmkgbczL4ML5CCeX1Ba",
  "key9": "3JeNHgpx4fpbykKtCABZzkog9GCy4B9TEdVwcBwbiKyNnZiMV2ma1h3oTUY9CZv5BnmEPsDaZAfuzzrxLMEghYPx",
  "key10": "4L7y2mvbUpkkoGvwXdKq6SGFiZewB8c9HbdkTGxpvwEvqLr5DPrTD1Yu8NSx5jCzsaJ5o52cEr1SLHRsV69aYcLK",
  "key11": "2HBgdyWHyALLkSgcrDSXJ2uu5T9foJNYse6KakqXYzKxGn8CP8wYbg7tWHRwKDZLmHXcCZu6dEpxrUB8vNnpyjc3",
  "key12": "4849gaESc4zZXV9a7h7dh7whWBYBYAJxg2CEaorssLceya1SC4qaC1s4ScHzL14h2Upjp3FAbsw4L1EfzfLFgSr7",
  "key13": "2GNesEGWxLET85JMY9wxQeyN5EfS1Qi3CZg3mcdpN1jAGL4jr6SRxsDgQihypj9SweDaC3dNLpJ1HD8dz1ssZYMP",
  "key14": "553PQyutC7PBKFkfb5sZGMbzJDJTjCFKYdZD8PRH9jhS5bvvP2sAgEfthoG1GZn1auGdq8GyfKzfrr3bfmsFZ43c",
  "key15": "5Vray9Gr1iQn3u68UhN89zGiq4cE9sVs7FG36APPnQwbGjhTLFxYbw5icpzNA8G4kyVGoaWmHhBh8XxB8njPVgU5",
  "key16": "5Xhtze8d1zJ7RuvRfYmAQYGPrZpUA2CCqH9fasBZbhYx7Loq8QrrVYgq2NvdYTUHu15dZao7whwErfVDZmPoxHNZ",
  "key17": "4Yg9mYz8vm9sNhpw4xXXUsvAfpL3ZnUMPa9f36WLuWraJFyvXHLBruVR6q2RgPErA2DfGbTCa1QDLy6FwobZtjb2",
  "key18": "3M62Xrnpz434bLbzmdnK21MKpj9e6B9G99mEDAaMnSivJ7nXAKYvAjCC1Drrn5GSccKSjV8u4YXDjbWB5x5A5DJj",
  "key19": "63yW9NKQB4ye9n4uas5sfQc26u9ah5rShmeqCohP6JtDa56qJoFnG4dE2xueAUMcYhTZbLRxo3JrxkWHizPGLpx2",
  "key20": "HAwERY8LwvQLBr2kaJ6mKy2xDznaKVmY7ZcYKV6mrRLJfMxgGJcLRqCerENezasH2P3v5mdTn8LwmSW55mAsumY",
  "key21": "Nn3ga2BcvE5Rjk1PktWtVs8FxwPmRcNmTYyoBmxM9Axz7C5Nus2GXbcduQhUHBvCxnV6C6JKZrGaFi6wwtEwrPW",
  "key22": "3zrKw9KKN7BAgT4GhKVrHPvwL9ZjeEqKfAwLLGJN1NvT48bvcTDhzBymWubgbfF63aAo9zjEQDn63JL2AJhB72KA",
  "key23": "3g3Bhg8FrDc5GTpJz4o1TL2obY5LKmbvciNqyvC67TWYVbQ3yMcUZHSF1w5c8sF94pBbz8efzdGj3gfcciHbcc9i",
  "key24": "5xytM1ES8SNqutTLejoQXcptczN54yJHPyh58futsBFAjxi3EJGdCFpHsBTaaX8GGTpH64KnJLvycHs5E93faFaa",
  "key25": "4DeLWUFDJpdpg135jDDqpeMjaEB3Sn5QtoHugDZx58Y24G8hT2hLxMExi2A5CAc4D5HehcpkEdWvSwRTCARTckZx",
  "key26": "4CqpugCSfyMZLFb2fDpvDyQtUwvDoUEiGzUQmBW3maAD32cx8NteqUSURcHh6D3BwM7JTpd5Ksjk7fPGaRCWFUGH",
  "key27": "2r2GtCsuinCVg1Z9kvC6fe2ysxHtcmzarZrDFvqUFPZrYU3hqcnDtzZVPjSgnFN4PcPzPqp45pGDRAkR5bzbD92N",
  "key28": "Q3mxnWafma7AoBtdyAfvdTD6D6hykpSieMkvUG59UZ4cNKcaCgoEujxBfqkBtcPeat53bRujo8TVNnU9wypQrRq",
  "key29": "ktqmPFpa9Ea9UzJnW7Rh1xvzgNvMTZF4zvPbJrheafjvTe6w2NVizAyiMXNtiGsjWEvJx4DkAHut2yvTMjCAVyQ",
  "key30": "djNErfJ8Fp88LBH6AwJPbgpWqThiWCxUztwQC6M5B6uKShzpMmmtHjCsC4AKYCJvetA2RCqD6UqUFrRktCVz5iE",
  "key31": "3vEsstErB3B1FZiahJGSRswytn448mtRAqxepYjajoH7PuaocABSyCEmLadTjBmsDUznrpKixfLQrTt9ADXqJad3",
  "key32": "39Wkx6QceU4TQkwD34G9wFFnzvA76cxh1UTRA7s4NTGXaaGpz9Wq1bSPaqdLXoWx4FzHt9chGoTsZdMNyq465K92",
  "key33": "33z3MMsx5B6pMkg3ZQgvkrz7SFgBk2YER8qYFnEjEup6vK2dJJPLnokX9ug1cRgdoPANYmzNMvqwPqMd7Tgv2Bdv",
  "key34": "NQnyz8Ysgkq7AJq7jEaXTmdRsDNK8AAHXGfRZaVr7D7SY5s39XWm9hz6WxcQfwnH7vDFQ6VrHUe15kyZeXfS2KF",
  "key35": "4XxbHMJasNjUEUUgASSqKMgnAt553qt55iao3SJAJLSFgKJdvFQq2Y5hWyVNepSxjxcnq36CYmi8HSicfjPsHgti",
  "key36": "2LppAhy2kP8EzwYVxfCJNCjnVNYCmod8tAmZdMsP1rr4tkfyvQTvCNTwBfgSo97KpKxJtj6iLSriEr8KzdVXw9Yn",
  "key37": "2hYqmZoZLhW9JM9MtmyHAM5jd2CWRnxNySLzTLDGvQ6PbhDduUWLVtSgRZRD9KyWnSqsbbEFMRHpxnrM2D6sHYau",
  "key38": "2ktdz8K8yb9E8EYJMaFyP48FDvUZsdcRag4NeAQQULexHPBEK7r1bjt9RydgvpmT5TN5ve8d7Vd7vdXH94ECpRnR",
  "key39": "hUFhGoK98DjD8BM42i2B27cj7kNSEixv28YRQejzzddVrpzdnfKNzT2cH3RJPCjBrnAqxnxEB6QHYsmWkqJ8FL3",
  "key40": "2v7YFDevENCsXMJ3VXkLgmXXQMUPxnKdgJrWJTmsDVMu4NRC5YsXSChPC7fSzkUJ8CgC1hQT1PYjgqFNKGT9zvjm",
  "key41": "2VrQLWMPxbFBtxcLvYx5a4ncKJ6y5L9efChom6MLVKFbXZueajofwqqaJ1swCGadu4tL5Msi52Mbf5ZLCE2cM2G6",
  "key42": "37VmkU2FBSyVBAsH8KYwpWegMTP6zsEgMHitvn5n9SJw8wiADFN8ffFUDa7H1Keyfd9VTi1mKH4zfKxfsL919JJn",
  "key43": "qZ1shNSn16Espd1FecqE8fXahoXpnhUHBqVBHT8roK37vMqep2uiXj5BKyKUXrsBLP2sSGQK76whpLJCN4GT4YY"
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
