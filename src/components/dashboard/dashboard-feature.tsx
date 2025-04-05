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
    "2o8G76cU5jztGqghahgHGRduiot2SCUWTyvox11BcY3rNNP1ZvEaiXv7sg7LbCHwzjZgBrTn1CLn4G8HR8R9pM88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4FHs4w36KiPDWihTfpxgu6FVf1xXWcKQHpGUEqHjhfqWYf37v3K71p3MnRGGXkpc3xYMLYBT6nsMhHTYZm7gEH",
  "key1": "5QwikVLZck4rqQLd4YmGpd1oao7Zc8LzXsRRQkyt6YbqzknPNBDPTcVgiMzptG68AtSRZgj5Y213Vt4CCcbE8zmm",
  "key2": "4jdmLyATHrhzqj6yiKpqRmTfSsxi2iarASrEdGqD4DD88ewnoHPQpX6RM6GMgkrqnXR4TxJWqwrgsxJUGJXSBQ1h",
  "key3": "29vtbQcTVRwWTM9ki5jpygHn3o6KqAtZ7FPANytLm8vTr4btSBJ4dhn6ZgkwHEQRNs3c65y8g3LzobvspAgTdmJu",
  "key4": "Y9dHQaZk62tfd5nZhhYuqQA2qhDUzwAoyyJmjFUTDPGH8PZDDCcWPXDkEE4u5Uw7cwXzzR8kp6mHmiXNFPjXQmv",
  "key5": "4uSmoKNjQWshkd9QfqHAdJXMJ3ADQjUTiWVeDGWJtsaPvCeCBGygmp5bG4xu4wVwEUozNpctNPQLaDU3KDsx6JcE",
  "key6": "4c2akVihnfri1iGmvpjWL688RtxdAeu5MewKLJGLs6ryYFRrjQ3ieiq4bobh3yWLNsgzStAJDMmdqFdfjcc8GK1E",
  "key7": "oiL8bzuCvJtUqivC5jFdDoEtdF1Jyiu3HDuF7mY6xmy19Vj9hfmPLXutS62H5caJb4iLeBwyZieBrsNusnc69nf",
  "key8": "nADJPq5M2EXNGzTZa1tVGV2kgTAPqD8t4KWuHPySjVe3J66RbSJzNeYyj6MWCHo9RiKmdA3BSQhnErV9RHaAAmQ",
  "key9": "5Grx5yHUUTTXP8nhP28EnDKCU3ifXWsWaRaBeWASkEfAgZkLLKHUT4KEHD7H7pV7YzqLbjirNLvnZXjt4JdS7Em8",
  "key10": "HPEKk2xK2oziQt97aEaBwKQtztHMFtFt6dGEAXrzzCpPxH1bypRt5HkdV9jGYRY73vxxSVtH4yY5kYPsE29NBA2",
  "key11": "4B5eD2K249eH44zY7iR3EKHL89EMe8Te59AA6D3HFZUwyJ3kDyaUET4NBt95UcAWRXR9u17BvYmJ7rr6JbjFv9x2",
  "key12": "2xuVQBFvv8HmdZXHRtz3cKo9pX14kgQfckfGJb2w23chHm5Pw7cNw4prwdfD3HXxVppTcYPiHdKLYdyQ9KKVEq5C",
  "key13": "28J5q7ByBGbrYjcteuzTdSNAxq7CcEPmtdqSG9q93GTUkHsVoERfsMi5NKcDCEM6WULZexuTi2cwH9Z6wPhVKShh",
  "key14": "2XikhQkd5LDvtM7hGCYpZZHiyQmFyR1muxxehYZeNQAMAkUwXgqiMVVtHgs6QssuMh2n86uZ3NYDvr8GnsGrm9W5",
  "key15": "58HbY5W34XJE4rVjz5DYrGyJaCGQFmAwG9CSpSFhr4odU9zMbdxuDDfJVSaoD51HvgG5o6se8c182ijvGRbsXL71",
  "key16": "4PeV2n7PJ4NPMDy3Cq8hgnx3HxFLsWwXsSrYBSXbQsMD8kBMAJfn7LNGUY2ge4BT9GPFN6e2iJXfrvXAjbSH8y4K",
  "key17": "67N6LdsriuBYfhM3F2UMsDHAC4BVBiicUcTMpcTwGL4HySPMx3v6NmkZaLR3WZnxH7geVHipT7X5BCb5761pbN4Y",
  "key18": "5f5j8qU2J9Q39WgyoYEsHEEEd4bEDugWbSmtoSsicBmcBhFef1KFWKDrWPm1oy7Yh4svFHjpEw6U6WvceQJcsvMo",
  "key19": "1abMzSWfyPTxaWnhdr3fspiKTuuHh8dqES7ztgxhBET6fiQyV31bDaakYfwYQu6raEmV136vPrNXadK1mt4epDY",
  "key20": "3L2qB6844wX2Ys29y6ePdySePSCjXva341NiZnLhbi7uAALfsskAWQcRSBmhxjpX1vncLaJ3E2AJfWFUouJiBPE9",
  "key21": "2YRukNCEfWFMJtHtXq8UtfTbDxr1cg2sfQxpeyYfusvjZ8CG3RF3Ai1RYa33hNsKhTqAYQZd3hdBTjU5EPNjGV77",
  "key22": "3xMchmZ2txxXi9ykSefwgaS6JiLcLCCbwPiWK2tjvmeZhmF1eaRbPAxAnwEgyT9ndLsMsKsRyqiUnLtt5qrHNg2x",
  "key23": "W9JbSjj2vRGjz7mTbzjEbpBBdXrhgobaCiBn9htqSR4q9uhdLuNi9KPjLBiNP9MVB9WfnzbwtENYUbFSU8oeRLp",
  "key24": "3QmrUZF59sc4rJbrH9VNJhgv6JSBjQLxYYCSfYMFnm2UwfPAV3F7NfEW3KjkUS5FRgbuEUi2eChqy7Wejx8VXG1i",
  "key25": "1gekiWgZqUyDJ9sSD99rGTn9LTRCwJMGEd53za8GUdEzSWiKosaDEEtDh8YrKnUtfajAp2Z3k2MmkNakNKL5VEf",
  "key26": "3VVxD4phz1br913dVgJJjVdSoNDtrNcvwPc93BzNTmnpeEA25XJVyWSitaJjHuiZjBg1rwupQ2GeJaD4KUMnCXqB",
  "key27": "39oQaA1GB6c9488bQgr3nTmmEbZDsoew3DQgmv8HqEz5Z33jUfV6NePuVXLhn4zXNy9hbVcJN5UcuzjF3KG2p9xL",
  "key28": "4cf92FM1dFMbRFgubSh3hijVpGQAcHxDbC6ZCYq1fntGmaqLk7g8aEzRUShK56CCo2JkVs9uvACro6RSPh5MVRQX",
  "key29": "2mGFLteUQtxb5tKgkLTXxru5vcfHWAQThfLVd98rvpUTsGyk9u6UfW9TTny1Kb7ai2Xed7pYMXwmS7K3FV8Co44W",
  "key30": "3mbRhv1io8MPJs3EcNaeq95tXLbodiaUPFLwo634m5azrRhXGVNR2ediczRfiDPunEXBqnsCB5tYFLJkQpSZumax",
  "key31": "eKE9Fd1osPWu4oXXAoE7FJ7LwCP9G5wtE3uAsZgJcptgL6bZHHNWGk8gcyMfQemmwb824kPEgf1gGbpS7gDBtpB",
  "key32": "3UgDkXgKyeRXMhSdgi1FpCG8uSDKFFNWNaQzhFkVRGunqAx5ok1YKssTJWYq63J6SFEVTG9VuwvFprMXgmsPf2r2",
  "key33": "2LxA8SiDSAuroMutvfa7F5YzmhPFrXEK3RVLd8Taonr3vRuvNTnieRaCjGSpEnERFQFpyHftiekJsGFZg3yEwDSy",
  "key34": "dgorTnyqsyBSnQnzUwzaerMmmriW2psyeYejBeNYDBHaFTv5TC8LX5XpStoZRNwQeyHrgwAQwoTWmrvvbyzRAGd",
  "key35": "2U56HvQcmBnvmxboHtrQtiT5oeeHSE9GB7JDEey2xVhhvNmR9o6QJLLARa3i746bAbvoaYnmmERpvZVMMam58j3a",
  "key36": "2SBE5dDMdjn66BkyLHK1k9vVdphK4XRu9m7BjMo6CjggsmSLsjJ7UN52UfsMGWW56i481pzULgjVoqVcrajWjyzw",
  "key37": "vnEqgdnFrH8TNkh64qsyAeQxEkSeFDw3zLr9bNLr4xTb4vxw5PUtAsLr4j35gSKboaNtxYAFzgnUqC9haQGNEU5",
  "key38": "5fdQVMLLVwz9yn2nC7d2qEtoNpDwpv74D4oEjxZo2Bk3puNnL3FgULvVTAtd2cDmGoat7L8Whp48UBmPsFerjhnv",
  "key39": "6T2nHzK9VwnTjquydYa1sASKkx1BM4WdhyLxKiFipxi5S4r4cfJoqMDF72TuNxkLM9bLoYAyMsAg5UKG2QYwgQD",
  "key40": "hAHoq8HLWaNztTWVNiMcmqb2nxBNoY99o2UZJBcyA9noHEPgH65WALXgJKdcGdD3duRtdyKfQzFTVMFMEgpP7Mw",
  "key41": "5nUcHppEDfwiBk8q7CJE3fiFsXeu1tJLthM3YhsfqNfxhyRgBqHrDZsA3sSYXhf4U5XgKGDGqKJBg5ZgLLptNVwp",
  "key42": "5tc2pTC7zReXMJFEgAXPTADnbrVrqLjYxcff4pQ6y7epw5hi9ua8h1WjNb5EVGLodREjWTtNSzfnZp6pp7Q9hFur",
  "key43": "5G7UiKLXA1TmXEqYajEitLX8Je8Xsu7pXjaSkjW9mEB3RKam5iQTrmvKzBK5Yv6sbE8RhAu2DAFQSxw6FTCeVpH4",
  "key44": "3ePHmHJn3wqn7k3jjdEtbba8oTHhcCyvFC9JwyNg8xc3WMNq5r5Uj7P6MVerwWX3EkRLsTYRVi5WvMw3d8rxPUL2",
  "key45": "52HGtptQRn4n3m6KohCM1bXhHgXHf2DEb4TCbq1bx1sk9HPdJRok18P69o9tjVmvPXhLpTy8sFE5mA6efXEfbZ5b"
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
