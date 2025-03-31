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
    "34DnQXmXhNHcD3RFynkE4egHiMqw1nuXNAsPoSbPoPCGHUHArXr9UCA3M2gshUEAjDZ1CE4ZmXDVZ58Fj1bZnKuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rb5r7Z34c7obbDmFoMS4TYkAGXhAwu3CR2sAAtog1bqGL371eqLnAbnEPAD7xsbAKMroivrkpRsHYiyeeo2onxY",
  "key1": "4qqmgRSnLaWPoQNeLbiPg9dHvCo29P675zNLECd8ccwP4S2KPueDyiPe8f4cra4LJCuPBzxqty9DkRfWmoapfJnM",
  "key2": "329N5ixPTiDrWk3z7xbS6VuJMXXSMCNJwZfDKtbDwYd963o3ek17xfUhSYTcbAwAZnWYDoAZycsAqoPFnyGAZg2s",
  "key3": "2w7GPmafkKoEg88LVE8fH63isWnLeA2Br7SXrEkokXyqi3UE3m1Y6yMLN2FM47WDVKC6wjB9GbUNhWKTuHsgLrXG",
  "key4": "tGZXTq5Ypn1m1DYddJWrBWtZhMLgtLcTAeJRYMiPm4Up9W8ZyTQN7vRxYZBg1uAa2eLpvM3K7KeLFpCTvQJisps",
  "key5": "oDjZPyCHrtrcg2rbfgePxrXsmoZF5DqFp8YQB1w7rr6VfKEuPqDQisNchH7FCvuSUTDLhbMzJNzDWtX6tUW5PXW",
  "key6": "y1wmZqT27Jmat1JpVgqrFtxk27vg4gK1C4quZb7ViEebDHSYhpqUyxgeajti7tJii19jBLpS98xtgeeQVTFBXtA",
  "key7": "2VQsRCLV6jyWaKEceVPqx7uRNDxjPjqHJYTtNoYiVq2E29kCHvK94wfbjCAq4hK1L2C2dNSyoK6nTARfjXG5geCR",
  "key8": "3kohWyt6HvaN7xSSPh6ciW8gPcj1vPCZQtffymjsdnEM8Mj9JMBQeVxMCyorfPDGTfT1jGc2uExfzVpVGg9VTTYV",
  "key9": "57Jd9oYXvnfbWZFC6B6vTtB8DLGuKD6WamfjTVRDCCXNNn1DvJD6p6RjuAUwNe9QrPFkdnffTKZ4FBgJrVL7N8Gj",
  "key10": "uDgChzSwRAWrq8K8VaDisLPP4V6GBDViDMK4JH3wjwpYWe8dKJzNWg4ya6jkhCR3LjnEwJNFnoNLBTwbxBHF7zw",
  "key11": "3BySHpsNvavQUyGRuY2W2icuhz38PDtXbDNKfdETT39VQ8Xe4YcdScGPW8WXouiCH8hqMUWzLKpL3Js9K1ehp6Bu",
  "key12": "4Y2ECaDz7M57FRxjzcFb1xFqLTx2tWvLiPWCWBSy1Nd86bAsz7fdct7sehvR9yKrCKG37jUo955aGbh563vx64Tr",
  "key13": "66c9Zascpx4BEU6GybP1zXEd5b2qFZwSsnX197L6tN8ihGiSDwJPZFxvm6oPDzrtFZNkUZCC7s6F2aB7LWEJjE6V",
  "key14": "52qdMHTbcQmMRkLDRVHdaB4LwAoWxsWxPVwGpMzo2qpbiLLaS6y86pK7zxsSLGNvydq1afezM5vwbG4xzduEUqM",
  "key15": "5ri8qVMNcdT5o6oqc5HsfPy7fvaR8sMwtsNvKmMf5rwxZvjmhSipmuUbJ1ULcT9Uy6sKaYgYXVCqfKr4LXtr8gYq",
  "key16": "53opuPZkWqfj7TcVfQ19fgyBu4jStQjC8As3Xv2rAmFLDD4TuprcpHXA7MtHirzwT1CBC2aVjQUrQjfim1v9PAeU",
  "key17": "577CF8JgJ5sFutJYz8C1xrrwdt9Bnsa39f4XLm5cQLPtMvP11cnHF9GnQgGT7CXnCJRtAGSNEm84mNg99vSqvumF",
  "key18": "21Ly4CGNqN7V6oQjx5eD3qvUZmzMn9GbeXL748nLqA1VGZhoU6LwYp8KNGCBQTDSwKnzMQMhvwzqKG1gWKta1x5N",
  "key19": "61GPHNBiqpStCDGNyZfcofT4J9pAZ6WvNECXaCGvN5VwWX9UuMUEE4TcLtbLsUhtneWNLjrVg2GWPcDFFr5TJFPx",
  "key20": "EUM2K1muMjHQSDpwFdu3SkbpmGqrCABqz9pWH2esMWMVN1Nmdj1ehjbMbCfmABePER4oeLiszaPg8Fr8Cstxttp",
  "key21": "2PbePiiHyY4wU7C5sSBW4HrFbLEfMHBfj7veKjb2ziBftbU7PaFG6YkbAtuVXt3R67QKkxog7WBpPUQvsiYPEduA",
  "key22": "3Rc7ybYzhKGMgteTxs2Q2H1fRRtMZ6mJizB91iCXeBspVm9EJWrniig5B7VTDBhhKwtbub9L9n3R4vUQZpePQodx",
  "key23": "54FmekWj3RWCdYYtJEH8HePE6EiqdYxen8ezGirtR5mqwnEKFVeRkssETeB2M6b1BTFbkr6pwrgTGoTY8bHwxkQQ",
  "key24": "4To7v25ZS5xBvebrrAgfrXfW8KfZsbuHtcuHTJYpWAqRxLqmt2ovkv7TUxuckcXYU9pWXLnyYwgnjrh1Vw1gwrvn",
  "key25": "4KXHYVZ4vVPGbFLMnatrrLfZmq8m1No7wjgUPHSmaXQfjFbTdax7CJLZumjBrrLNdWvZP3rGrkffxcuwNVg9JZgu",
  "key26": "4PJgr9kS5F5xgwzergzQWuMH4GQRDfvuL9iJ7iAVYjarroh1wMUdqxQAo9EN3FtqcnD9KdRMRt3ineC2J1QnkG69",
  "key27": "qNPDGY6MxrYazYubtztJqg18Xk61SANw3FegyHtRMZaYGHvSTx8a7aBazEC7JWjbCTWBU6Nwu41XvCr8kLbBEcV",
  "key28": "2ySbStaRjCE6FX3ukjCWHh5VNiA5yMjqV5Wy7HYWckiEsrTsBbf1KwCSgaj95fDW5TgCLWCU4jFpCriWaQbEiiJZ",
  "key29": "5AFktNwT8VYZB8mhnyvpq7TqecwEYWEhZhuvySKzHtyE893ESBnN3xh8JEfT1HmsASV2K7ow6BXNEcuTeusToww7",
  "key30": "3H3gPHDcYshm4gMLd7BHMUC6JbmbfcynS359NmAPdDPkCd3CKj6JYEawB1VTrMK1iaSbaq56qLDortHqipQg3YsQ",
  "key31": "5PHNJz47gEMCzNJNuYaV1Ra3P3qKxpLSLu7i7hhzzGaS7cWynhp2tJu9r1mynJ2ppwvZSvUWKXDFJYvMi4P7BLCD",
  "key32": "3CFM9XbFjX8t9Ej8nY7WWfiWFYgXuhDaK5coWanvCCyEfxTq15p9ZUJhXEfTJwn1i9C9DnZHXG6GcaE4YsLKxZoB",
  "key33": "2hyY8bkMLMs7s4d4vEy8YRWe7Nq3tHmcHUoUqR5tfBJSwqWZVyxPFZDDQxA9w9NDFF8H6Du4SEdumDgpnQjpcYCV",
  "key34": "3EtFLNU77axqf4opMET3KPsiUx2YbBi8QNUPYvG83erNkJxcJ1H4Zz91ZW7GiWDskr7uWJP58wQ8fnX6oKV19d28",
  "key35": "38KaQajRPCLHiwBnkDp2HAVgqFCkU44EzVTckv2wrfPYzV3RsaxJ4DKZu6nD3RSGz6kvUka2MVcNY4WHRYPyWhVs",
  "key36": "2sLdWEDWj5HENXeiFHfqYRc3Pto5vWdY2n1Cc2FppNkwmE9kZHBT8dYqdG7XUXjYUkUbapEuMF6vF4yR4K5ePgkp"
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
