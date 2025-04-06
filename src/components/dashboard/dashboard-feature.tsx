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
    "56c72oSDQ3NXd8FfsFEP3FL2P31NLemDkrvNFhAjLES7REu1QDeaYEzaW3WYhGBxfv7cb67mha9c5GULfEWmHbd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mtqscWU67xgQjtV6f4C3FczXzhW6mhvFkKW6KKCdKpqCYzbu8eJjVsC471aARJ8EFrCnDoSBficrWSpsxESuUtB",
  "key1": "331b8D8i62yCcR3A9kz7hk8wS58ZWNAvQFPVtfCyxwd9U5NLgBuBZrkUVm8rfEs3KdSRtnGoqYZ2jq6uvtb3SLRM",
  "key2": "AXdDFXYrtPjbjuNDJj493RsKv3JNw2NK8HSLR8axP5cEPMLdW862YvnfEG3jNGa3kQx8FktPzsEjnFEfZf8apo7",
  "key3": "4LaXawfWgnE819erN11gpQzFhPgSCo9DeAbtc679TzMd5cRaE8VGSUv6ALykLkVLmNxSiaFvtCVopzs4cKsFxKV3",
  "key4": "4HdJ5dv5aAtZ4YiSriD64ByduGcM73JaF5owH8EXWrfbFMP4hkQRWPe3AuA322ZRS7v9UUt56Si5wdpuTF6vAPK5",
  "key5": "2niyQyJNapvCJ3ARVSejwsojybFV7MGCsZCYe7dGot3PodJRTCg2nRQ9Pn9ZwcBfvjWvtVjmdnRduEhSQf8pQRoj",
  "key6": "4rDEenNXNm7DfenR4JTTrPi5RCetkFn7x9BHyfTMvS6TRRV57t2kXsH2cviLZkhLkRcWz6anDVbYtY3hVTW55oBA",
  "key7": "3KvbENiWdFCFFZB2vYrEDwCJSQ8RoYAB3rDRokfCq9knE9UnHcXiedgDr4wmo7Psmf6RKnRCtsVA6UDdreU5rTLf",
  "key8": "36PsEYaJjj5ZyQSxmcpJu727F8SZ5xpe94VruRr8ZYwJUmRAiChSzJJJQ7dfyKUgZHLux4ZoX4vZwmioLvMmj7bi",
  "key9": "menpm5UdiBcHb9baubQy3BYLWPmV4Ez7x4MpMCT99Vz5XdUaoqsuJ6P2qKoZePBvzqQETRkfDZ897koWp8Dz2Kv",
  "key10": "5HsoEYQYzgsQwoX9FFMzuv3BAKBpoi8YnxnXbVbh72dUuprM9Jqp3rGvfT8vfAHRHoTStpupAGi2HgRiBZARtyBh",
  "key11": "4toqkvFPCFCXmKmqQWEYnkQWcCyf5SYKrpQmpRG9xAUSqt6RAGcTho4Q6gRzduTW9Lnn27VV7chpi8BSocqwtPqY",
  "key12": "2Xhz3x842pz4bWbkvag9xZ5FNTN7XKeFU7nnf6cSEdeTCDr6bqQD6V4ig3DQJkWkxNgiAt2UK7fuzY7ypAaPuH8h",
  "key13": "5bwf9j6wUhxbmPkZtUBK7YEZxiiSQin42dqzk5NBdmNKddRz8MKxnY86uRCxQqTFQbHXwR4jN5b6jSybLec5eRNL",
  "key14": "33H72iUEJaX2fd5hjEXeCbuU4ZmTU5a78pCyUJC46CX8Tx1B5zYKkJJRvbXYS4vRedAvbnfaorB63RDf1syC4PBQ",
  "key15": "bRvjpxK6KD8GwRy1J8bFE2u3zW8ReS8UUSG3Wc75ThQaZDrF6ht2ged9cqZKbQZB1jF7aRVvNNN7Hc3LaV3Fy7t",
  "key16": "5MqvQPFeeshoH2qN3iSQ3gh6c99nFn4ceUwHULXhiB8euCDe1XoffDttPXSkZngbJ6fA7NFtuUiCbxfEikybMSpn",
  "key17": "2GrgLHf3UpuLKgwCeocPPcrZFyv9eFwcM78r1BCw87ocvYd1f56Vg3ahf3DYVqFCnQK6bETFq2dLn7SwPC72pWT1",
  "key18": "2zUQZLMLU9LzpFj3mE7CRMVmTWS5yX5TUZxoRvWLFtAeFAXE1tGkrNgitE3DwrVjyat5JmsQgh8SoU4ckTdEdCPp",
  "key19": "2D5ci9yH64XqbevAc7dn4NEhb8TorgixenM8EmzfDt5KvRKgTkdR384bomVF9kLAtwEPJPx4sZqCALcvk3PzcCdw",
  "key20": "65s2BByteBiGrnHt1Wpe3fnQSBhpLSHm56KfCBggHENPZ9J8sYLjmNcJN65dBCyYjvJhzM4eejFaasMSA7jeVKzj",
  "key21": "37MQhbYpobMYSUPpJ4d53PZPwbYVdrbBK835eJbSQETqM7AHBhrMCd5oxxyMbY8EGZ5XNUj8BYc5iVMdg84cf79E",
  "key22": "3FfBSurKHYkPyoT4iMgZHzKjnsCqjx5zDLQNZW3Fzk3Z4Ln8T4oamvx8e567zxRDHrFEcd9zhoKQKzkxGRDr2pgA",
  "key23": "2x3hRuhQZ6jSUE51sMgo72sViGWwdXkpAcKaEuGQ3TCtvWc4YHKufyaWAeKtVwtuUu9rfBp1eD3y1BimB8A74d8Q",
  "key24": "3JqtuR9aP2ZiGXXTecTQRFwauWtvZyQ5DALoEMQWfs2rcErXbHTVb7t4m8cBexCbae8iurrRBPe5ceFxj7Zrowsm",
  "key25": "5eHCK9vemRSpUPLBnYuFr8PrA3aDBCb4myKCKwDiToQJj9K8xKMmMe5xtWJ1fuVtCR5diqEV7bvh7GxNeBgLE8Pb",
  "key26": "3GGS7u51B8s3FaC1nT4FF5v2kgmfrsGnX4REUAoJnxHCsC1XLuhDmPkC3YfjxwF5iZKWNQ7Hu5FWBubnZmxRgMCg",
  "key27": "5GCdh7qAk5qGfjKRv3gxP63SoKdjdAVrk3PmWzWfHPPMPbm7yGatbBpqQkxKX2X96aqpxWwABJMVmi4cJcMkjnSC",
  "key28": "D6PPyyp55jmMXi59JeAmccz9FGf161mAjo4aXwgx8iKw2J7RyvToWtKbpDeLHXPr4ANkNvAwo5MPjFMimqKC8Jv",
  "key29": "59hjgaeCj8xpaRi37vVRNMKP4BghKFRgbpEBiPh1XH96MFREpWagMxboKVzRhe3DXioY7Y1ywraAFzMf9xg3Ry1R",
  "key30": "etDDBNxGKyKrZcT4jmL2bgnQhwLp2pvMDHWdXvzRHmDAbYX1RXwuJu76NehB1YA8CRQRnFEGjx6Ne6umdezyJ76",
  "key31": "2b5NVhQqgDBwrYFgZPe4n96a19LoD2UqUsfpuCYogBtfpM6i51M16tVFCFzAxMQKS7z6U5W6Aeri1Ra88Tnm6Kjv",
  "key32": "3LddH4hXDhGAJh4f5pzKh1ahq2HjMNrQvi9EYNSKHBtvYj6m4CrSZULsdmgpoDfjJKYvHwSTmNqC7aadjxwooRJz",
  "key33": "3g3anjLQtkBava2y6ppjUjxzAFVTexXChZRDb7iKU6mFv8zP2doEShMGWiKDqSRGSCuhpEtFavYBMSiBGtodimnR",
  "key34": "u1R9z1Ye7cWPTjfVhfxuuqhTgpQHuG4W4PQsxRgh7WpsSjuEf7osvJRTuhviSYxRjSwH4r7DneFfwkRqjAubyXz",
  "key35": "3LXEnjjVRmMegWRPg9KyGtws34bQR4xWp3fCUfUv4AyNeP4c8MLmkCAkxBbF2VZmgLRd8czdg1yhkSG6Dnmdx85K",
  "key36": "4G1hFhG3LQy68V2ZXJsjMfpQjYY9TvmwNw2syRxBcNvnoKmyPsk9bkG97oNme6JDQ6HJS9qgSoxZ2cu45V6QnMf3",
  "key37": "5wywiXJQxrBH364ZgDYwsHALYzf7ESEvmzYKd8kNXRcShqqnm7LNnCGSNtny3BdAeuVqfsYKdwBd1s3hfxcSEwAQ",
  "key38": "Vf38EnVFQ7bKZGWB6aYt4mzDmstfgxXyjBVcCnvEELX36kZo8Jw8GJLe1F2NUbTKDg33H4vyTDD5CaKeQS2VVFC",
  "key39": "3x7afqywJBoG9yyrojSF9GCUmDDjeqr268btFhuZMTat5j6qLKKu1A3iWgxmkKyMsBiztDXARddUK3c9yWxpJrDX",
  "key40": "2DvkMLXut396NPJiGLR4ooCnEnCBPNqhZw9GPSJcWMBbBY71m7mV4L55guBgBCMoeyS4Hhw9tnedNcH4xcqVWkYm",
  "key41": "4mUD1Vpkx4k2zqow9xjjgh4j1RigKQhxbdgi6iGBvfRnSS34d49QcfqE6mKPUG6XZLnvvUKwUo9LgbtQad8zWBQE",
  "key42": "4XevbcCs7uXzGXXfPHRqjoiviQzqpiRwm8PJKUr2XYez9CmwTedPiW7ijguj5L9HLBwb73pn4aKmg21vzJX9bjtu",
  "key43": "45fHyFDc2Z15sjch1DGS7msDPei1AcXPBKBm6dMUvyWhCK9e28R7NewwAAKGL57nJfEHq7SUSuncnb2QxhYLd8hQ"
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
