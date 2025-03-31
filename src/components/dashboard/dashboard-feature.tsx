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
    "wnFVRaEkQnBsBvjJHbA8tFNDXFKaEkg62xybKpyrDn4LG5n3AyveUMvTBYW6158rzB64u96W8kwTNoyn8w3rqe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNbbk5f2javKGWgASbVjd33fSn9mgY79wZPGLvV42WU2jWca1DTxEzH8MLH5ZEEGS9UQ45tWbXq6o7pgJbkx36z",
  "key1": "FxG7CXYfFQwqJ26u3caznLnLCkkZZrVg499w3eRejSPprqkuRijHtxZv3MvzSPsJk3iEeAHgLV7PAEShf8RtUXZ",
  "key2": "Rk3mJkpzrvonTyymWCeEqhFTae8yRMyPYFyMrz3VoxxxGmkXNUzvJ9zqY5ekjfmuKJ2xNkq4znoZzaqDF847V9S",
  "key3": "4mUv59YMxzNfdTDxTRpTbHFm1bkPJgDymohmwStPbPbRRGPTmMvtPUXACKkkPvnC4FWZQtvNbURaCFLWLUVVkXLF",
  "key4": "3uZwGchcXdTJm5EsYwfYaJXyZgmNahNGiXa4LwmoSvQbP8SLo3YtrsgA4tS2AbuBSdpQn41fPXRhDkkChV1bLKy1",
  "key5": "4GQRCNW17iuMYo9MUcmoTgX12DiaQgFfn2i2oEt4ud5m7gKCgXhDWZ6TN7f66sp5un8cJoXT8VFHwVfoM1Lz65KU",
  "key6": "63v4cqRegRRBCvrfCTKwRCETXW1bddb2DSmBsNJwp1azKQMy8V9cTY4Y3wXgcyrZ4rHfGH8ps5xG3rndJcHuRrJU",
  "key7": "3TjQ8Dm41ieGQwcKWEWrGq7iabtwx64KFepcQLFwNjbfYcSwQ3JhCWdBYW78d4rvek4TRSBraw8b3JG1HDppv8pf",
  "key8": "3G8B6xrYTpKvbKdsFCQ4hkx1JhAMZRteH5mAYUoUERyeptJzJNiRvHN5DjkidhimoCDQa21oTcnFiWp5TbhqQnec",
  "key9": "4A8ziajCmVLKDy6RiK5GQ3ThJfsai3BaJkKiiqgh1y4XGkKSBXJ6RgGdpW1VVFHPAR81mL2RF7ky8ggCdeMuBvdy",
  "key10": "4BbthTLXZxDhkGvKVUhwQDXENqzM8KuTkagaP6UhDiAq4b53x29GviuBnX1png4tXuArKY3hMj28tWFp7CK7i9Rc",
  "key11": "5fizkZoyphpVcjBmvhoZq3pBG735prYC27VnoYx9ASwpUHhHuXx9BfJyDFUPHT84eyKAR3YdRkv23ESzkYJQv39A",
  "key12": "2VehUvZEqK8QfvNff37TA788gDj9wZ6aBaJZfHdBsH9tnbBNSsDsATeye2T3YUjckA8kUpuZhoBifwa8NSjb4kgJ",
  "key13": "3wBcoPw8DUpuwXHB75cUMKHYTFgg89TnE9qe1a5Kxx6NVmFneaJvEdgfNSToc9u8KM5xoYobqjezEuz59jqFRjVz",
  "key14": "54NyAki9J2eM2G8n9SwfUd1t2nTaMjFNCSo8yPXirh4qHa8ZGJoojcHJQjtpu1JzRFyrAwnevr17sJjfXknssxR3",
  "key15": "5XBbL5JBWc8j3MMYfg993xKhqFEpp9UmXsmjkLX6y3DxCPJbyHUth7f9v31k1LaGEXJtzvH8A5gGwZtvGznmoH2a",
  "key16": "58pU5YYKMt88CeiRbTkL6crWqeSHtChczP4V7JVjL2qkP1cxqczR38H9MpXGCe3UETQ8WPfBRsjA8mWunZGWWpd3",
  "key17": "1sh3MwsQ2pYZckkh5WD5jorSmozcSrRE9KDQjB3q8U9va3rxniRRuAHzQ3rnhBvsDLi72iC3bA1j91KzQZFQo9o",
  "key18": "24BsXKqM5DtmeUe9ntdBTrvVDf4UY6gnnfVDxhiPaiZzVTvaPsBS2y1edX7AvQy1cUZSFDB7VuwVwRENMddGPAAf",
  "key19": "5tnGJaA7RkL8ZQRaFhrAM57NoKDAGcq2sZ4dQtk57ria88ZPqHGzaK5ypaeZwUhseqLmvQcuyQPTNgyY9mTuGJ39",
  "key20": "goX7fS2YGrXkdY5JPZjgTAERizhwQQSYyCQryaNiGrnhj2PEqBLxK9Q1yXzqpA38He3WyfrB3wPj12bfYKH67AQ",
  "key21": "4SdJLwbrcpUtCovDgUkMnwy5KWPC7uC1gNKyccLnPq45wxZoYhyyKhbsUWp7NPATRJqer4av25WNdbWiJMPT8YDz",
  "key22": "5ynSdsvAfx19EhtzdBaDfBACxEdeKQLKzLM638gUNDbnvbzhQYJ6A2Z3uBjexC4EamqsBV74Vvgb9hyuJ362fQRG",
  "key23": "4KPFT1ZTrAu1nKvBoTgiptAFyjHUcZoSdMnH6JN96m1HJ4HqLzmJYJp4xhoKECR2pLZBpJfDkdpM3AWy718an4wU",
  "key24": "8YtiuzuyDq5KjDeYxePbvdjBXeL3daVBBxHDAMWSEqvgN33zPCUEqjxpbhibxpy5WZwyS886NnEknWRcKtXSaBY",
  "key25": "582Bhq6ExC1cpaA62GDHm1HEQZ8fRGNEJKPGKs8goXViqJzjpmMGWusynJkQsTeRa6atqfE1NPzSA7ZpPh3JQQBV",
  "key26": "22WfrvyKmApGQusgrsVVuyhD3cbtXXAk4yphXgibFbXtF7WLPp5tHRD14493S2TTtX4hut2xBboxtGNNvVrEyxzm",
  "key27": "5Vp13pWSk6scUphQV6eHsKyVc6cRwev7QrUfYWSP1MHZi6CoEf987JmR7tobHN1t4Ss2fByHtt14S3wyTTL3bG1V",
  "key28": "5LRRgJ3chYS73fvSpcTMeAJydsXeR6a5BDvQGecWUR7PRvkEcP7iZcoJP2ERixosyJ9q8PJKe9aHqQjktJwq5Myp",
  "key29": "pxorohFhGDJVQ7hki4mmD1uaWQXgAoNh38jcKJyRuEwHRi1kxK3TyhqpDKbGxvh5VJC8n3Cc5GqpUizznH9tRaF",
  "key30": "2D6pT2HWcw5U8FK9mizY3WWRt4qD29sAYTXKMxUN4C53c5XdnUX4tGLtzGbj518qz3fnksMfBhAS5JpYSbftXEra",
  "key31": "q79ckrJCCmGKUFeS3kjzEjtXP2Zt4bq6MCmVMBAhYTu5P45bbWbXupenRvhmPa4W6TffTGYyHYBWBBnbqUNzdh2",
  "key32": "2UeajxY5Rdk5nkg1T2rmAiFVXbgg6A3cJsujvXxpe19xiPN7ZxWPwGGakzXSarbWZqoiKRS2EEUuFzY7rpoYk5JW",
  "key33": "37CHgVWN2iARfPVTV9mmpxag1jmYMkPxuyjTtHPEVpGWo6KGSfQ7tLCN9Eaz1GnyUFpwb9dz9avBdkyb9dkUNx9L",
  "key34": "3hWFXM1QFrN8bvVVpK9HUDCbaLyfgemYriibmMm2zt5t3Erk3DEYR7dRSWbZsmgPQftm7WBUJBpsSHjDmjEUqgVR",
  "key35": "4gX5BmcMnwEmbcGSQ8vsVYXVbdjnJFQBQnUonUpCxo27Hevvega8gezZw6KQTHyUsRxYoqGNxCqCsk66sbsXTVFz",
  "key36": "4JnfuY6puWQPMCRxtX5fdtjCxTdorvvqt98mxgzMKxCSKtSbdvQRg5Y72wqb9DETiAZcYp9zQYpK3VgQNuDN2Jj1",
  "key37": "3gSnG7bCNKragLobwtDEjjmvTP7ZnoyMFUDfB6EcgiRuFfmeehp4qeNGGGzKuWJdKTtTRh29eQJDzP1nCQaXfdVY",
  "key38": "4ewdEsVF5s55cqwKTQGKqK47rvKVJEdVaEnUo7ZyhbN2ryhSQqx4YQ9ZJxHn9AXucK2mMsHgoLwj1invQsW1wwVC",
  "key39": "42DtMnukevSY5iEjR9yi9at92sXiqPm98vJcWUWSN83o8JakbBRNWBDqNUNje3Th5MyxWbXMXjj9R9jCARiiP5n6",
  "key40": "26EHnYhTPEvLNpCeHdBQBwGQHmxp4NUkSYVg2K6WRHtSeJTJV56TCRXK2JUf6nLg4dAvG2JycXScKMPtgYSBSSfW",
  "key41": "37hGYNT6RB1bcPtkm2Y7YXwQJdQDSPXhvgHVUJLEfaVqcSiVMD5J4A6sJZycLG4pbjQRyGaU4LvubYTozQU2E4DM",
  "key42": "3Xpt3eNxbqWSbjyBhbX7RbPBRR5N4cXfVsFn8DcfbYJpGFgAjeowajkRmAidRjJDudZsyFGmu7SK3cghNZynxkp7"
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
