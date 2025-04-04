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
    "5zN4qjRLyjifwvBjHy9CqBLqZtz13RQ3shjsqWjm4cQZBFeJDWioHNQqdJrmpCRUnQUSDphZ9yfoTQ1FbSLdYDsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNM7qoUk6v8W5LFdaMZCc3YwkP8WtkbaoikKwEwfj9r767PVsx1YW1ttxQDUoE177QkKodTE8ycWvZx2H5br9po",
  "key1": "3V8GgM3b1Jg1mHqHFNyRFANGwVG8A4YbPW98MncqMuMzHLB85HDT9dcjE6vL8U7Mtjm1uH4S6kPvyphWDfy2vjQc",
  "key2": "2GK6VLmxgbbFEnr7GedR3ejcSJSAx7V8St7gQqAohijNCW1BncA8ABCRupc9QHShMeW8QMJVif5AWBzghV325HiM",
  "key3": "5hPgbNhkubhG7a2mjiLcdsLu6vZLenENk6CwDQaovQoP3NwvQawxMx4crKuRK52v26FZKMu6ZqTUKwPR79XvJ3qV",
  "key4": "2gtToW8e7ENxK6arxYTdFiMxUHVVafm7XpRcssFm88rn7ypktDhLbn4f5quFpnZ5wbT1f9Dn2Q4PsebW5VVcySzd",
  "key5": "5wsTHyYDwkcaacvPD9XHKxfzWUWBHzqzzZF6g5T7WBo9tX7c9ddSpPutDRPYj35cJXUEMkPdRTw3MaxsfM6zDi9u",
  "key6": "3ZHdML4EHkPcP34eNSWmeWU6eyicFkhjJDMUA2Xs29Tyt9VFVpQq8625jzPnipR3tC8UUGXfXsM2sDVFLrLHSZ2u",
  "key7": "2GLfPUsopoB7QVJ9TVCMQTRQ46wFsbebGjhxQ4mWK3zzQj4HnZ2iGY1FHU5GdpduKcYC8JXNcSyotkPBHgm58DJr",
  "key8": "29A3Qyq2h8c6CsH4PvQ8CDkeXHRtVotK3waNZL8mTnjNUUnFDNAvD2Q4923BgXfAeGXYLK7KWC6K7rcNJWgBmzVc",
  "key9": "61genfrKCex16MkGaRHMWbTXGev1tPiLXvrsCEqooiMM94A4aYhCJv5fHfMDAgpfyLYxRtUErWVEGoUfWq9Qir19",
  "key10": "4yiiFeHBh8xXgdJBCzmgpigBKAYePLm2XtZkdZ8qes6hbhLnkFYWq4o39VK1xPj7vfy2bqXQBikoPAksDon2o19a",
  "key11": "2gVqdErHbpLuGWLHMcxsdxYacA8Wbixvj1Evz33H14VFB8C1RGG9YCCFtL4XCVYPjVd4UZ1YwF6tmVYGXvzNkPhQ",
  "key12": "53T2AXAJ1mbKi2GUf7Tm6RJXNgKCiQv7Bwowc6K3DYTMLRcZK5q61zsH6Vvo5qzX9KzxGHJe7VGMFbZkDav8uZLU",
  "key13": "2ccBfZntc6Ho4TmqwgM3LgCaaLDhPsft3KCEKQ6ApcnxB3Awb8MDfYZkTQ1iDMYzKKqBpCab7C4bnmrm32H1paLp",
  "key14": "38x1Ev4UsNkANNEBZT3tAqW64TCzWF97ghSo9v55nwxJd4Q9rSkdhGbaDuChuxRZKxLQx5DmMzfFShw1VoEjxX3U",
  "key15": "65g3yGD18WFoeXQHVNHzNBeEFcvrYfhUevoL6xpD7dLJqgzzd2z5HkVzcsV9SPBAGesrerXh4UZyjgukvzdXCTLq",
  "key16": "4i5pqvKG6m2UkjZqTZRFh92ktiypvq38Gt2PyC1s15m7eUzWCth8B6uGaYAdC4i36Nwh4DDoYjK6KJTcwAnNjowN",
  "key17": "3KFVJwk8MzGnq645VF9UhigV9V95h5Dhg3hyve8T4Zrg4dk5voZNfYnRsFaeTS2z8HM5ayP4GsPAkWHmyX5nTzcu",
  "key18": "4Rj9Fkn5yAcHWmZo8EW6VDhf6XtXR2AJwAmXqj4fVraaWosN91stYNqirREiVgKXg5g3EvK5C2M3bFCSmfJoiM9Y",
  "key19": "2zQt7GMrt7WJ54dfyfoohTBVofFpN6aT7rVbW3DHrk824Vym6hyiKC82RSUTojWCSjBF8aJB3b32kJsTTtSzuoZY",
  "key20": "4PM8rTCtQ2WzVQUQTAaqkYtChG2h4dsuPbmQV85ZAHwe7qxi2C2NPvkN8Y9nHK4yi9FW7XwB7MVhn3WPZVxxdiZh",
  "key21": "37JZwp9FPUxvmzvBMhQLETin3ETH6vVwBDn4FWsHJizgjSCfFe5fGQVUwZtNZNi59u8jKahPTTyHgdXHqziTaQmh",
  "key22": "5fXueaVSVDAcWDmnZgL4ZnJE2FT6vcxnhukCW2ukSopr8Pc3ZXahYUd5x6EQ8XVxkTZViptGpnS2EkZk2NoML1p8",
  "key23": "3XUqvC1z3uGEW8YT1QgyDPjZMQbE2ZLFbHPuKNY7Tf5pYizinCCVP9hjEZUw1M4MmW5TUYJJMEC7EziNhdvqLrsB",
  "key24": "vxqsQw2goFHo4yscKzy7ynTX5CcxzkD5Fi5kqQsfv5SS46oNdr537aoPeg1vmysKr4upsVbdBa5KcBk22jLmuBT",
  "key25": "56TJUghcktAaCxmirsfnfihcAUn1u23Rnxw7683GVcsJ8pXzeuQiBFrQnyZwo4UZexFvAtboJ1s43GthUNiVgErz",
  "key26": "6m5EdKWaGPMKN3UmQjSvybV4FVBRqtTm6LCLM4ZZUvS2f2MRQXnDwfqqgG6BGH7ggrmxL5TwVd1nyaaD9vRUcoQ",
  "key27": "bNnB3xRMbs9WPvkek5jnnRFnsR5feEktz9VxAfRHm6w5K78S6naHygu9Vd4NqfSskPDdiEMzpNV7FcAwXpQisfZ",
  "key28": "MYNPg4SMn7rZoHpi7RdVS8KHKGQ6mqBjmjqZtP9y79jKWrX4RWavJovDewchbBx3V4iwE4oWRCYgNzKWxSD3qLu",
  "key29": "2DYDqYkKH36QwgVHkr4yHqGHzjtiPnPN2WCNVm3WojPUiFrMD8xMrxCKjyzj8y8UEENh6GqfcxN69jdfjycRiQnt",
  "key30": "3LDMswbrzUMnwqQDycpHTuBDiupgWsKZbXd1MAWWqKsL4ZrZdixmeDF4p8YDfsVkGFTRMQvZhjKrjo73k9WST8sg",
  "key31": "1y357VhQHrNCSoY5wdqak2uKGxXrd4XVEy1Uy4CroZNiUbLD2pwduBNQXLEmfsDgiviBmW55BMeTVH4Pvu82S4i",
  "key32": "TyT2M1NzawkK6vbPLZnZ3rRVQzHigVMtaSAuEaxE5X4iQWbTVjS8rzAqCUXvnY2ar3nz2kvXFE5Ad2fC7NV7s1t",
  "key33": "2Pt2wijFuWdzjnhsQQorDaAZomo1YKrRH6AJh5tF4c8FzZRZ6Vz6qghT5jgzLKM2SwMuPEk57PkrUqZ7sTCeco3d",
  "key34": "2itt9i8ZwZQs5ThV6AMQGCMfsCFBdzqYpGZNBX8aqow3CjoD9VRr1rLhZCXjALnnkqGVXxEJzz9c7J4ssNxbVrZh",
  "key35": "2qsxwx5PpQkMKdsnRMR91CyFw7PXSHXt374ZJgBqmY7ZHAZKV9P8JvyNHh79DRVUvtRmkVZM8iCJ3avZfhwjSMMa",
  "key36": "3pccVGQ83u8sJqBD1Lws7K66ttdQUwYWGiaTREvFaJFE1JqjpofoRfkWJWyKXVZ38tkX6y3qv3gqPP2B3FDjd63Z",
  "key37": "24ePi2sMYC7TFxCx5NQUfDMqTSCSWCNmgFzysoMP4NAxjXk6Cp95mAwVEttm22Jy42HM5kmeqDXRt8DvPL2YB1RH",
  "key38": "3FYY6YGi3hDB7hSDds4Rgc1eAJd9a1nFKjJChix2YFkNqk9X2tUbYFZoTcM87CPJ3keDTPfs1nFqVw25E7StpjyP",
  "key39": "3uHQ6WvyDLfYwVPC9sGhAvXo6J5YDvZcinDLvYLCAJMbK5ywURszAuHdA4Jce6xhMo3BwjwHnLCkpxAWizhbD7yD",
  "key40": "2UKxTJdvzDASt9A8SvgXTG5WFT1D7vdT1Bu8TcqDndfHQSKamoxuVyPCbzFpQEQrttvGebrzZRuzpBZWTfzfkvwd",
  "key41": "46pGrVTZELDycc8jL1NXBfcYLffc4J9Zc4zUq29aD9mxgwbipUaXFasYmmZzd8UquipdgwubEBdacqhNgpkUo95u",
  "key42": "bXipG5heJf8NEGttNs54Eru3865noph9P8PTAAdgAqPxKtBUkC3bVcsN1Zq2qJqQs8nCYHgA1cr7A4ZQTxLxkDy",
  "key43": "3yfH2M2DvEAG4D9mWK4G7kf4PLKD8eyfsKBd9d35Ypw23Eanu6oEtf3wf3DiNL7tjC7TNR5yaucHLLs3q7SEXg91",
  "key44": "53Cnu2nQuhpdd7NbgUZxWaf29gZk5oUBYhcSeJj855qWa3Hx1GYNyqfRQ69PEZdHLcCKYV2CAEFqkVqDx131hWze",
  "key45": "4h1A65o8qyTJqwVL9a1KycrbRS4FckPBKEAn8tw7QwDm1tqcwuaBo9tQ83VxQ6QGejr2DDo9Lxc1mepjruGS1Xdo",
  "key46": "2nFqk6UkXbmAt2mdqxG165BMCyiKMQTKKRnfDqEsFmkLK5RXSwW8FFFuWCkdZ9spWBfBQakFjmM7RHN36fnWyLUE"
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
