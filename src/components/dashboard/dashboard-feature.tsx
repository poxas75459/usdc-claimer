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
    "8n2vj3WKZbYuAEwAwH4NS9Mv4rAttxdB7QaVRvuAHSHBb2rzmeg5opRyJAdBApG8JBCHM16v16GwXB1rAC2NgD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LM8DEPh1CNwx8yVFrqfEXF2V5wssnRREbfC3KcNFyMekXBWdUNsNqYoyjCNZhNfeUxmLWgyp9vn6qUC34QC9wUq",
  "key1": "2aFRtdov3BumnNRcebeyNUkC4GuM5RakEdYTL9SsQGP2BpC3Fzsz7hfwV73co82RH5XgiUWLVQM6KDkGRc49kbww",
  "key2": "2tdYMncdM5Az6RBNdnDpcq8dNDV2MuZRuaJczycmoZ8ZPKmCoLGKEtRHgcnJFi2MBtAdQfuB9y12Fymmo3pRZj2P",
  "key3": "TPhBVmTqLa18chpCaWF5XKxJYGNjs8SndxoeKkqHGYk87ewEyvviBW69hCLdUGhBZMPy82rDtxV71rYHhRiogMo",
  "key4": "3pnpPs7Kg5cAFPFZwoiiebNr8Anch5sjxHES7jghnAwpyevmue7TQyZwVYqek4Qksm5T8sQPr7CTuYH6BdBB8c9M",
  "key5": "4u71xVXZupzma6xVoVnMwGFnhfpXnHTg4YqkraXWFQNeg5PVCBFSfvw95NZDy3eBQLqLr19TdXzoAU6PRS82hCbF",
  "key6": "3C8FNuHibP29m4oZMZfh3ekWFK5f8QFdnMZBZjEBKmNCtno3D6gwV5uEvaXiBLpVnwhGYxfaduFmc1muz3eFfziy",
  "key7": "5NUKrxpCAdmK3bv1awibm153h57zKWzsgGDSZbE9KVfSw2cBP3L1JoXMazJvjWFbeFHWmhtc4GdewFfavTWk4bph",
  "key8": "4VWCJ4iuxQtkBTj4JhHWMJ4rVqQuYFXTTCEPTGQTdwZR88x1rGoH5VNMmMzxscR9P7TmQ4fQcymvroYaoWWmkTcM",
  "key9": "3qunnyUTDUXXVRZwt2HwMRbBbYJDvAEXR2ZTqHpd9pdbt2L91vX7vbx6TEyh64jdWoysZGELuQT4otHpbCAfntps",
  "key10": "4yvWgf71jFYcSmVUbJqnMvnoNzDQnVVDv6UGAJ2eZPtwNq5LU4yCBUAYcXNKiWyUTvFQouqfHbnSnhkJr7zbRzLF",
  "key11": "39R8KJJt1fT1qehC5xBnBunuLEXVYPiGkjXkJkMQVKjozyWdHymu1beV6MgFRWHkxgypS39LCwpCMyPyQrbnRtYk",
  "key12": "4LioqMdPi6hmuExVKapc76PCQzqwyv17TFVX8bjHZ7vjpVPqPW7Rh7YE3uAZyja5v3YL3TLoxn5NG4f9VVTmGrBh",
  "key13": "c5prXGdoCTzeWT8hoPQYrRCo2W36qEbesBP4MjiowRNvzkKuwZ4J51W3H15EuEXY7HRLzxtV7F1WRLLgZzagJ2C",
  "key14": "5R4nZfTDQ3CcvLNWH2j6SJXHnM3HSjCN13kzhwRqXeixsJSnip3PbajAFX5hdE7sUQpcLvP3dKKy476KXxeFpsA2",
  "key15": "2hN6T9vXPfQLCaJMFQTPZFu39fCpyXWrrztw3jAzGQPqtMwQLc1xajoFfV34dYz8J6J9SivoLFJsuapC2jL18SBv",
  "key16": "3qymepPf7SnmmWiZJvaPFHuytKcQ9X74PdSMCACX3EWhEb8NVCYJkh1v4p6GYUp4K38fdWMa2Hj9Hm6AG4myTG8u",
  "key17": "5x1FSY5uEJ55bjf5oj5Gc1inU2tjXdU6FGrqiABT5QVc2hECL59w5fYtxx8PWJndXq39N9BmD35dP5Hv5Pkuewe",
  "key18": "TUFuS1iAf5r5EqjpEZm3njsJMr8LNEVA4rMRgSeYgNfMtUdfBzG6pqpSHHrW2T127sGCkDjr72a2EYDUFW9Aa53",
  "key19": "2GzHAosgrbrmtwVAbD41wko5Vm2GkMuB7gBAL8LGEsTY2Xmo77KEHgXAtKN9THn5L8zb96sDNbC3CTEGKpcgjxa1",
  "key20": "3525uDMbKKd1fPAeaMjqkkeigm9bQecndV7wwBcMr4npASHbgdUwSwdqUfXBNNRdjYg4LmBgJQKiJWKTGu5E8wpu",
  "key21": "4Bcsm5nKBkHjZvnxuTyg6sDqArGP4vAGhSR1hwQLMZBPDMAn84CSkmcD3SrhbZBe29fwELzsiH3mGrovoLQp3yv",
  "key22": "3q6kZMFvcULBaVakw7KFScycDkGRBirrgvJijJxE8UNhagMh1zeH2PV6zy32GcJsmT3Hs9QeteMjaakXSNDiCHMp",
  "key23": "2P7V2y6mynE2ASUMnPebjzu5tK2vXMqB87fCjjgzdnUaFHpB4DS5wjyjM6VMjdQV4bDM5q64bK6LqvvKqZMhn3g1",
  "key24": "3a7LWmgLMNvaUn3xwV6pnBokRoeaqZBKrFW9HLc9PZAFqSaQVWNHcW46PVuwFqEGM31bdQ7dLWDs9WQLw6CsYUpc",
  "key25": "KYRR9ocu5w6j1AvVhpUzVSnvqwX1TUrc9qGkekGdsjY4iHSaFdF73AZ99ek825a2RfJGuhYENkyQhPE2M6n7TZP",
  "key26": "4kKShwEnbekJU23hyFJLt2gXkqFpRQGFbWP5TuUCWsNZcqDRqGjFKNaRUQtfq1o7WzoGE9y4XT92grV4vN3TXofv",
  "key27": "42uTQpQ4N9n9YDNpvaqHhyP6z1uSWXVHxmDzYhiXhmto1oz9juAX842uaZx62k5S1dEGnzfk7C6rSof97n3rfYEb",
  "key28": "4n1Vom6dMptzdSxjoMxrbFUgBd3oZkaELeaMrZsCu5UM3ygk1bqnPJwm8c4NE3rNFub4aE6yRYiCzqiTDqm25Kau",
  "key29": "3DZVuLrCiCbPmBQ3dmfbV5YYiKvZwmWZhyMqMF1q4cuvB8HJeX7XSpdb2eNw4GQXFzbn1ASY9YGjLRT4Zy7Psgyf",
  "key30": "4J7BUr4w4jzn3s3V429QkY53qga6bbEuxFUFA1DhYNUiZAa5ndrcPmAdCWf85Gzi7BJLQCUh1ZMWJPMnA2h9YrLJ",
  "key31": "3Wdq4sAHNecnMPuidu6yTa8MSdYfC5axsgsHGfLRzfbg1YqLAP7nmngg75i6bJhgVHPTmCRnsKQXi8Um9vUgHHYq",
  "key32": "3JBFTuAbDYieorNSGryWTBiyUiD9WqZu4EMrn6zu9VhExp4gLjLNNfADjtx8cE7zxNni4QaQw3v9YU1ZvNuzTTmt",
  "key33": "3s8j6AdZz6ExGiPuhMSHzPEdCwCHxro34zEzbBpSGJWRCjPyV95dwastyDPvbURW8xX728x4PMUYj13uwX1QjvAb",
  "key34": "4FZFh9ZkjvHvtN374v1RtBcLz3xxfMXDAHDKDvGz7gy4cKCAoRXKwnb771S5KdWMxbzs19GPCVjPPLz7RnoJAMb4",
  "key35": "5sGJqUfAeHg9H9SoY8uqeYxa1FVbh1NaPL1DqUqTAVJmf2ePHeXqhGvPse3sr84DYQFJfDiPiSYZuFoHhVaH88BJ",
  "key36": "3FFEK73VMNxENM9qW4xV5J3nNvnaGLvaHEeSXwZVfQSxtKgPG6bkQTbN42K8YfVGdDaSC9DBZmMY7xA8heuaU5xL",
  "key37": "4SDpkEZd4Y2Vq9CM97UFz7LGYSZmajGN6EJTwXoQ1V5qbvozL89X1ukp478RpMSB2AzBCAUxREstXa4fNhqYJQxC",
  "key38": "AfzbQEtQEiuXuAuuvJ5CmvExeBSaMJLJzTtXp6X8BnuPDZYRrVPMecNX6PL1NecASMcrpEaAn28JFwp1tqaQyLf"
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
