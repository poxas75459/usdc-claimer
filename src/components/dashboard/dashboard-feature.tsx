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
    "2z3Yj2a2cdqVPNUoyj9LforPbefYiZhUaas5GYwK3oZ87128osLCwabMFQQ8CcfzcJ5kXuF4CFyJDYyAnQK9WsZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cX3cugza2JNwRnHrKVVneuSyDzJ69WMmA5Qa7iXgb5cWpBkVS4j93wjv4RMuDriEKevzsAeXwFJ4xzn67byRisK",
  "key1": "3uvxmdztG7CNFpJtZQyKuoiWH8TqNtnhRKv1h1cynT8wgtdG1nUZuWtyQS5rxixDCnmqe6JmBuVZ4T1E82Xrf8Yn",
  "key2": "3Mw6CFS242F2haDNGChvzYb9nbqQgFXoyioepEQCC6a7LtBpFFUntUrxn9wayhZFDzLPiVApmRkS7w6W4xWB9FAZ",
  "key3": "64mQ1E7p43Gd5yxUUybEWY9Z8uPPTAyBA3T5Df95hiAdvu5coQjXF2yqRa4WW6M4J4BmDX7JVS9F25J3DjWcxeei",
  "key4": "22MAzQpoqVM4CTH2TBny6JSZjHRrTpgbEv68Xn8mqfCoYFXQv3FrfrSGt23Hr4bePGDMMdt4CfRPd5PTGmgFFLnR",
  "key5": "4F7Qva5xY2VN76ThLYzvcrHSB1h2yFgwCS7MApCMoifsbSs33UTiu31stLAKEW6NpVL2ffDkQKQkc8CpJdS95XZg",
  "key6": "3JArNYBd1Z43PwztiwKjARAukKTUrj1Q2NKvGNMJfXANFrtqnS2ye5z8sphTEvbe7BCH8SuW7qSW4ejjJ1MswS87",
  "key7": "V7vqumpB4PXS17K1LGrFZFyuyhp2jpk1cm76vBh7umDyjELjvr7KN9k8RwUmV7q4rbFC63AZxTc7BDa7CscBCBJ",
  "key8": "3QccCp5kpSr1Snv8zAhq5cvR6cfWi5egAg71MMMMGgP23qkaACZjbuwQoVmx5tHaPp2wf8YfMGJZWJMf7TzrdrpG",
  "key9": "5nSXddBUgDwb4hQtaqBonjj8zrJVsWf8ttWAewjGowMg2Lp22eYEV6ZMD6yHmNs2L9K1G43ds4oJ8phyXFuyh1ve",
  "key10": "3BiTJAyMbw5hbYamWeqymWDXQ9HNWGnngpg3Kg1gEfNzXhXK5JAFMoE9c9k36ke8iGDzRxdV5veET2ueWS2dHj3H",
  "key11": "4s64zDS6Hsg3ZNZ5BB9aof4BeYnNnyTdmJ9kU2hR5nzi12ZRb8SDqJxVCqpUzmu3zuvuDW8prxhXhRhwbG9h4ygJ",
  "key12": "3m27NUuNN4wYoSjtitmYyqk9Wx3tHbhf5i89wLqGN98c2vn3p7L5ZPrX7QWF2GHASYmXjs7BSSLd3jZkE2uNdwnL",
  "key13": "21iGXYPVuNRADQXXELxBCH8Mu6jeGpT8KmRcziAkV6UUk9MWLSpd3yQjuJvCbRCF4sdqWSs2Ni3bKYkHidL6TP3Z",
  "key14": "3f3c5puFRtuzXLrPK3xj7kEr5xdgPezuyFK36nc8DUucMzhFi9k7ePiktmTLTz2tcnTcMPu1SuUCsMtFMguwdNhd",
  "key15": "5JpJTwNRehC4dEEjVLA3agUWnskDvB57EgWKD2FNnKA9SuHZ2STg42EhFe71Z3MuH1BYyuhR6P39FAv2X8awUqbN",
  "key16": "5PFA3LCpm7YoFEBDvhQzFrvzSyZX5MczQQdVdEBvy8xtM58KWUzNBwqks6WhCTcvftCRQqAPHFnWh29QB1u2MGTh",
  "key17": "4VEKvZHFrFu6oP2m5QwQB8GpyLdHh3CoueKb4oyD5Tkx2LSPKPVrVD6GDTgq3X4VeDcBsxBxq3CDxJZfQ1bBF7a3",
  "key18": "2VRd92h2NuPD8KnbAwTSMB12Lbbj3MWE5WKpFSCrsmJznJMGhNBNwP2RZeduWwQvvwxnfhdjqFfSSjJ6EhP1wjMj",
  "key19": "3o8vmyz9rsB8dN91q9nxtNg9DarvnzPznQPvT9oNXmv282yhAJZJCoTSqemKdHKXYzotAJF56maZPHTHDzUf3hVi",
  "key20": "5e67GpNgCa8375QieWXiG57KZ4YDz3bVrSijuEYgPsBdmshpZ3o41rk1ZwfBRKAVxfC1re9gjnmnkMimnaTjtMGs",
  "key21": "4aR1SrdnH4JSc8SMdnTbEPRT8zi64yNvUBQqe84r2ENP5znSJGULkxWVQsePmqgogjeKZeYaHymyy4juzVSBXHCF",
  "key22": "3Wyff94fQqnGJ7Zq6Bx6tGh3ziyZvMbJVqZiPXHSnc6WXehPbGCKFe6nzVo4PKrM7u2ZfpxgALnFAs1DiapeX1PW",
  "key23": "5fAig8cfV2hEmCVmukp8rG7j4MsB83eFh8hxhfmJjshhbzVTCai6ADSJGr2rqburGiRTUeULp1kkVLe1fQxCNxUz",
  "key24": "4Y2zzFqWE7Cvcv2PESkcJmaFcKi4nPwA4U4c53DSc4LkEtcVpeq8U5RafdSXDPpe8fvzGx9SU45iN69StPrSiHph",
  "key25": "31dxrxREJBikVYCVAWucAtJiYSYiJfuQ2u3anZmw6eyVbfKMbYZENSb1PcMX9iQkPTjZNQ6FtP28dpoD9hRULr6N",
  "key26": "DpXzFsfGXZN17yM5T9vHZxKayoAyXkKRiXfNVMDZbcVC5HrQW91qe44ahpqJJedG1knGneKKHKaMdZiMcZtCMfR",
  "key27": "5dRZCzQboVccXFhZErKGW3pCanaJZxAGyC2BqbYYFXGx9pSihrVJUnXH2hduBawepb1dBr2vGk9SHSR5VHmeryRB",
  "key28": "76kKttWstT5sk7x3j3GayUR3dbku61gaSQPC13dX2FmAFY5o9oxHb68MJzTcVnz1akUXFtUc66EYWPaKB22GXka",
  "key29": "2HhJZi2oxrQ1RGf6tuacdhsu1HJH7RfXi5iV1CRSyK5YbRQ8dorrBMbmNMe4MM2TYSszKwTcpmRLqTm1g9BSNJD3",
  "key30": "57ULa57YnYft3yi7AaDDfhBkoqjWQjvmn8ZyDFNsVzHkj9QnqCzF9a28UvkbBZnbgECrKWCsmHbhgrN8EQfYgu4p",
  "key31": "5USNA4Fi4VHUYaJ4rgBowfHYD56FLxJdf76ecKCpNbzZ3SyBMMmXTyqMc4FXX3RgeGT8C9cBeZEJVj8kZw3kr671",
  "key32": "3iRMaxCseUK7ok2nnyBpWv8TkX6HaDbPsB34Q1m91UGLe3Kxk2CAzghTKG4SLkk2HWV3wvEAxuoQUaR1QoxmEN9i",
  "key33": "3YNeAz4fJkSavV6AmXbUAcgByxfpPbqTdyeeVD3Pa6V2bwyQPpkHTWjysbE4iViqiW5J2HyTUjHMtVmdH7XiSkBP",
  "key34": "vLxw4vfjN4oDDiQUsJuMo4qttRcsJnSJe63n56USUqVKjcQ8pnMgSxy67dqAJUjShE1wnmnWVvyNGUHTx6pHmXm",
  "key35": "r2BjLaZwDtF8t84Ltk2XPsgzVjytfrweY3q1APWQFriEz9zzeT77Tpk5FduchxwQsnSHcUXcHLDDj3LXj8yEVCi"
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
