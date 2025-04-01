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
    "4Kg763YiFPu2DdDG1qgFo5wTrnJiAwXjCNbt73ywP7k37RrepWh9QHHzx9CB83FiSpM2ck1CeCBK9jtUCGhSmkNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TBAZ8wtHhAZ8xSwKP33iFh47HK5V3zHdmDHRshMjQN5JbM5AsXXb4DS5FmBZP43x4ZC4Nx925hSAQnX7JfzABg",
  "key1": "3tAwzgNNoruCgJ93mVB61Zbu7WPP1pzycgyL5R2vcEFf8DjUgMX65zvtTBWH9SxA48WaZsLCSaK7o4zCBtuP4jhz",
  "key2": "57dM8oCMQ2cCWoMPcJUeVFxNs788wGYNjhQEprUyYZauqJm6Q4MPU3mi97FFt2PEpYMJDAyKWcKMThjFDSad8sz7",
  "key3": "2SJD933TEgJgJaDH4KDYfC3bGCNTTQ7uQq1kTevoCzQZ4i2y5VLVeXKSJ2tjz6iFASPKBeiXyAQp1pnPQDcyzJKQ",
  "key4": "CGAdGYwFRjJNjfPgJP3duBJCtJrQobXQrE7Zptx57u8a6kNiUFDBeSoF3qjBxwFVB6ye15dFHHTZF4jurYQMhAx",
  "key5": "5k2g8GsPfZBvNQH2kbcCRmaAa82gjiSYHdPkoF6Rqncnho5ZoGFxUmpD3r1EQY1BoH3rAj4DS3uXSvPLDvbwKnEi",
  "key6": "5BGZJwENuDTRbQrAd6QKTSJg6ReVDc2nuqrRV3AEUFySkNVsxrj6Gzij9cTn3q25qQadP2eNmJpYoGPfTzSBAa93",
  "key7": "4U8btjY9rHnW3P5DmkqgqYWNDApW2vrzscpvkwYz4qfu336E3Mn3UyuBPq8cv78a9N4RwbWdQW8sRKrZz8f1ekEU",
  "key8": "C6WFubEo9rrqtjHrVrtdUYZ5du5KGzdNsP8QNgQAunuYBvc1EVsmN8nfCahiJYbXN77ANdy5usqa93R4asRkqKy",
  "key9": "7pQ4KDWc2JVGXVWZLUy2cvdccAqtQAd6Z9PFDqMtWYEwkRxuHCjb6NmNWd5Bkm1yK222ympyEznj52ZY8Q4LBZf",
  "key10": "3qAE3KLS8JAvK9fw565d3zwsGHYownfVGkC3izq949wTSz1FbFkQfEueyhUf9Wjvm7BTVrqeVUGDD9R9BnJcLyW8",
  "key11": "4aDWQ5AbKF5PrtNQ8DFpTFeaWH3Z6bdY9GBydJzvZgZDxPvEaWozM4htxM9Xn58N6XZNoYeRB5hKueo232cxAjzx",
  "key12": "3kcCtCQRrN39NyUEDEby9kzE4jr8jVPqzLoiYF5P9ajrZ3y791nRLjWwGdGrpDJaHTdR4563Up2srh1SAJVJTV5G",
  "key13": "3SYcaPVKAjZsXomiWFAzxUVDH2AJjRaV8k3s1DyHbzvyRcHsTGGvbx2hgTmKkFDSjyKbe6q5b5Duj1n5Gj6uUD7T",
  "key14": "5neiyKx5xjpPQ8UTaEPu9g5LFNzJzbrNuajYzuEKfVMNzSjXB2pGyKdUdh9h3Fotzs1suhj7Hpu2EaxBNNT8n55i",
  "key15": "4ejbvKrPAw3bLpygpsrngr8RoK4V8w3r3HfzqXfvTiL9qpfLiGWxULGyh5BbCSF6eAq2roaK1LmYQVn1uJb4YpM5",
  "key16": "3kXZBqdi26ukeZfFEoBLiajNwLFCq4R8iqfYP1mYnqhgsmmLA3ui4Cs5znGDuf7ayppJiMt5jV9V6SHxuv3XbpeX",
  "key17": "39EjZ9oWq5wDFPfEaEPr38Amm693km2N1XoanGALGhj69ngNM2PzqBdQRq6ZrY8d64hcJu9chxsvsqyCPsS3zMcg",
  "key18": "UQZ217rMRzTsqsyxEzHovxyypeWHe5w2i2p7u1DXMQCVH8UpmZwtHsPU2J1tKeZgxQnr36kWuxwsgrccwwabcvh",
  "key19": "3nwngPMZbsyXRsTKfr5me5h1pg3WPWBPTSJHRBnTNz9a9YudcUgX9sRs6RTQdy39tW9Dn6mWV5foJj1MGaE82oXo",
  "key20": "5mNFeGnQfnGPyvTg75yZqPs9mcEJgNFe145YQHNfus1dejkfpbVUYuKRqyXL71eh34AXgwP6xoCo9QQF3Yrnid1C",
  "key21": "6yE3XfLB3oGm9WtvaDD6vnk4aR7shVn3k6gLET54qrULQQ8y2J9fYNex9RBaLv3iPH9E82PbKhKQedCWBN5UKck",
  "key22": "3DVdTmVmh2vNWPHq7jEoZrav1z7C89eD2V5oXhfKjhyTNPbcVEMdiMkJgVSzFsgBzdBnTkNqkR4RK25GFBJu4tYk",
  "key23": "4sWkw3Q2amMQeE4b1praiHMgmEgNSD9bHaq9e5CdQh2Q5gtmYi5qnqpZyzkQotjvCdBdJCWsvLQeSEHca6mEyM61",
  "key24": "3eYX6PBn4HfwiBLuBB3vt8iHQxCa5i64ooMnPZwXFP5NAG3nt1EoTvPex962Chzck4dY2kbjiHNfN1HsXvF9RrDf",
  "key25": "3qBGYnFCxk6D9McuxD1mG8vXqeDfKxivnCqhB5CgenwxbmQwXW4EjGHSGeHsodmnNbqmSkSWSZ3MFPw3qeC7uRkX",
  "key26": "3DSTXxEfoKnAWqkcGJAbJv7jNf4zYNSZbRiBeJbb6fL91ZmD9oxY8ufWnQWTVEG8YqsswFVXvmX9fGSj77hwUyf8",
  "key27": "3pC6NE5VthaHbVkjbxAxj1qc7Dv8nCEahvkjQPenRrgMVBUxyzMPyjNJApqo877tn8UphHzVgsUqCSoV7EEitXfZ",
  "key28": "JASgTZ4PPcj3oYRbPhd9biaKJiT2yLGX7LCET1kKb1poriHtheUbUDEb2W9BqrfPHUgMSbS6wMkZmzaNXKze2gF",
  "key29": "5RxkwRvwJkHwaKbv6kj5gu9GtAwvjJVLBog17WU2coovbduxZvZN4835KVdtbF3SuhwW8dMvFv8DsEexeLDubQek",
  "key30": "4S5bsfK3LKQZsv2PTZ3oAoVZ18ft1cmwbcME4d3CQ6eG8WA2qsaz7UET1RBWJyqksTLzjKk2dSYYiTNDmF5WgmRP",
  "key31": "4hUJS8vaVshTHBYjAd3vWnTpzEteAVxox4HHgweK9w9gj7muH1kJERGHvQAPYZ47o9KgVFbQxY8sLXD4uAQCBT1E",
  "key32": "57zpHe5ErBxAnwdd2FoPwWrzmLHoPgTXdTvFrgnFU17mYvLaaxLF7sMM1FnYGuKYDJ4qLYZLP9Xf3BMymndqcm9y",
  "key33": "3skiYkarSnG8KytoD8UAtNdT9yMsPumhTzcPQkXwDjLNPU5CkiW4bjp5C67W8FGpS7pR4ZdTrCU3KYCWv3q754kh",
  "key34": "g6mfCK7aEeHKFbSrzygwwfh9vmLyCh4QPWnDHfP5iVLFJYrKa9mKv1duBkdafUpRUYWxHwcL27zgvbrGsLZBL9M",
  "key35": "2bzysByMhURbEPnCZXwbcfZuwWMPaJDNk6vkpdxp5w5JjdJJwpTByMv9562FGNYjaKYcT25p1vjPERDoD1biAz2s",
  "key36": "9bqqMidc3ZiRjJsKohvpsdMEsrVFJUAwTt45Xs5eUcShWBgpuRi5pvDxzyHCPDg3RvyZ8eGJR38ci4sR8Vrufxy",
  "key37": "5JJbQYk6d1jWbcPAWu6dgEkgxpqsbQZevGGUfYnsT3S7G74xFwZzoC1XbYsd766aHKAaYZKcCHxbBpCuE758mixH",
  "key38": "3t3nHSMDh8sr1X4Tx3YWtn4z5GsPDMuhYC54j5wVaNL85GxqtDTkDkM4txt5UC4JxJS4gJ8HFSyDeJAhYDnSytLK",
  "key39": "3Uha2iCHaHDTPqBaCrPiQshY4VmsLULxWWwrr8EF3hzBWGMwP8aNGrHHQnx52CEGPyZ1V6xG2J6GmjNy2vm6Tzsk",
  "key40": "CpvKL6T8RDLsVVUDW5nGN671JsLRMcNwqoAK36WqVZPdyad2PrXK2pQxEXhhedP2YwjewyNy7U9WuA1Ja7JPmDS",
  "key41": "5eoTgLYM5SFpa6ByjRbrRTZw42zcoy24YwhMyEycT4t5HrKht64C2LjiqX8Y3pUY2hMEiKDF53byo77ok3A2KkSr",
  "key42": "3puZYRG3xe27v5cUj9cSq11emu4Je47GMSg9xerG9ruAawhmvsCJnyDCBq5Gv9FyiTWX3Nuv9wS8UGraNWBrCiCn",
  "key43": "3WjnA6j6T4oURZG8kcpC7MSHXV2sBwnHZFHoafdgXfwfEVNkvgeHfqNdpjuvAfNfwdtgjHXtf4Hmj9ekQDUtPj64",
  "key44": "fcSVQm1SyGGKqirrwcm6fykNDGcNz5wtee3NtSCxCszNvzcb6zmSmJpT3A1So2p49kDwmYtdS11jyYupcSEh6MW"
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
