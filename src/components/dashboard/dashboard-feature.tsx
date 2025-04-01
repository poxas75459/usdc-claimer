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
    "5BMJ4f29isCkDfuGA3xnetZS96VN3dNs2jAyYVNj8bHTAubA4YtM9uxTDXWHtWfLT2ZhTKgYPbTBZkyzapzC9TWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7AQaV59YDhxhazoDjYU3SV98EwkR8HRyRLPjjUjozGxNBXJmKtdk1rA9JAHrB1ZVjLLutVxPLhXhjzLkKXzcob",
  "key1": "5CECksHe7WakL1HmFp7x8ZMc3XJ6P38TfEESMWx7vfnZyzcqWtSitK14cU2puyVS1VitXWVguvpdtVSNxxEs6DNw",
  "key2": "xV1ukmnkEZsETY4bgDa1L9nqLstv24tuM3F6NZoshEvEviUivzBUgYWNF1ev7TDTqAMTwrHTvWXf3KAoTiKHb9N",
  "key3": "5WvZ51tMCEQ7BoKAGZ34bXUxnRzdtJiDKgbUnkSBQLp4aUvU1cQixDDGhgnLwShBRNnJd5zZHedJhNQhdbuf8ZLJ",
  "key4": "3PkWKepqp1Y25fyBeRMc4z1wNDCakFHvcBZRRiHFi8UvoaYZ3SN8ycQAiRq6ntruBGPPxt7fqBUHXjQrX6yJJACU",
  "key5": "2UXFbo3deBqLA6V9X59Ay68CmEd6DXno14m7NzEFah75QgencAUWyDZaFvdPZzGiwTLoySUsZVyMFWvoxCwuaEvK",
  "key6": "46sfhmarhvEfoMjK8EqEanc6ymmPR9W6jGWmM1XBMHqecQEE2KgtpVkuctsjZ2o6cUMA1n9ZY6FLp41WVwVff45J",
  "key7": "5LXkmJjeKR6281FxafALZ3VZ6kaBkeBJvXnrx3YRkaENAJ5W1AhpXRqAqMPoji99h7Xoroei2ttuyTfx8BMjQvtD",
  "key8": "hRr9siAFTajiPFVXn93rXbjJyJabn6bCddEfSUCh2b6oV3xU3XzkEXLpi2R8aExqWnEUhWkbSdkgS9xyqThXRnY",
  "key9": "4ZG3uSZ89RuiyFGp994EviegF7hNo3WqbvtJJpZCESNUzTq76fP3G8BVxmyA25XC4YBDiTGsQSCFST154V75ecHk",
  "key10": "4TJQjTEKmREi6cdNUuEYh7xQdbvaTLaghnS49kPwDhTo8H4zzp813jd6hJ7hpSqtTnYQ3Hzo4SHWNnvtc27yvZvw",
  "key11": "3ffVcATAFnW1qnM4QZv3mTXPnZfQe73p6ytzYMdD1W4fqX8pL7UnoHduGsa1mgj5x62eFVqbJ7HHi9fVi7nRLjpG",
  "key12": "4TeW16id7ALCs3ucNY6gRyoUWfHVSrSHeEe9SKuTSzg2xhsBePEEj6CGisBLRiowkpTd4wMpDigHZtfgpuXgyduX",
  "key13": "53aaCaE8DRrEz1BuLha7yV1SgHiH1A2qegQVvSBq5uwj7PvbM1iHXQqSHCmrMzmDVGMBbSRsj91hU5c9Aztxypyt",
  "key14": "58azRJP4jAsAeDaq7S8P8W5WmknspcoqtgsrGJaVn1nc6h6aQWC8o4wJRYoDLYwdAXmrg3Ja8YrZkH8USrenecy8",
  "key15": "49zs4zYhZohXgDV4jREQzwfMWwF25gjBTF5dZzAH4DUEQc33Bh2v6V9yXoBfSJ7bPHM1a16yXkdMVoyUw1ycy7mR",
  "key16": "2rfmSrDG2HF45p7VC1w1fyAokKSrCHjokoLL6hVLffFQSLCZ9b4VTb2Sj8Xa5vV1y3fyBmFyeYhHKC3Toh1wqkYj",
  "key17": "2acpn5HS5wQ5HLPnvpVEySc2xHPb3A5k27AHbtAD6HmpYzTYTxVxgxLBB1bM4wUTZEpHpivdXSwiiuxU4q6Ecupx",
  "key18": "2ftsRiJgFRveoWgC2P1sraq4d37DUfLhSvEPm3TupCM13y1s2df7PbmNAZrquEDihR6RzAMCQwZBmEs3XZkUDweb",
  "key19": "Ya6dTcsJHZnzwnY36wN6Q5KdSEJDb3hM5EXX6ka44Ut1h7aeUqVcCvoRq9rRJytFmfKJxwJaSnYCcddafZKE9VT",
  "key20": "4m6V9Byq6wrssvaNyMYdvLAbRoZS2LQdJmSXPWVzmCPUwJgvWY2QSXuezmd89XyW4uim2sMQjqeReXF1g723cXfP",
  "key21": "2LW8N8ZFF1Js6748BwgHorNZXLw9divdzKjCvrw1mV6ULVdLp1wpgBkDQPJLbgkSNwq7CVkiaZYz8AqyNuabfb6R",
  "key22": "2twaNLgSfTimXEXLRPe7RTVuNKTDoUfyU2XmDSngiEGEyaSubj5Le3ox4uaThMDtKTx3VQxz95HwQyXr7rR7Rx13",
  "key23": "2649PcyQh15X425aNkxa83RBh5WQjPEj9nMe2BesGhgV9FqGCzGj9bgg3a3aSVACq6rrSpoT7iN7W2F2XnzQESnc",
  "key24": "yHax3ZsANjsJEL7atrP4wpLrqYuCKqs4ESbmYvQVo2aBXQFNaxLZaBPjPHmtSjZCHMgC7URuS8LF789jFKQynBP",
  "key25": "5mVW5DE8D3ejQ6DKs88Yovtz51PL21HkBa9EQNaC95aRaKEGxg3wD2v7fWFpws46PJh3NuHRpeqLaZb8N6REyjG2",
  "key26": "2xxnMJciwPwU9HsLJNuTYTC2SzByFXbuDeyjypjAmnKxLD3QuTx3ifVsRrxSXiR8TvtzTpuDc4m2YqzWvnzzguWV",
  "key27": "5cBMXHth6wchjfU3P8pUW4uTMmA5WR8PPghSfVbRhoKf6cKQ6L5mZLRgzXmsWvN4M54zGtRGn5oY7FEjLonvA98t",
  "key28": "2dERZhjc8BpSr13m8nLusfkxUL4BMsWQY86oooTNFcX42aE17bNDshVCSnwX3jK9zLg5G5snffuHhopx6u5mWcCz",
  "key29": "4BHQbGzqRTgkie4RkAnc5XfQoeWfrdH5vEboZayqFpwrAcC1FjFhiPLuhfJqd3z7SNu6xfVEgr2LQ1ziMNa6WFSW",
  "key30": "43qCKBFRZNfckVsU584ryHh33WfQ8ie6c8QNadFRddNNvJ2G7ifa2by6JZAHN2WLxoAnux7UN6ewgXZnUeQysAub",
  "key31": "4rZs8FbGYiYeaNwLhRBkVRY1taCPyLJSxmVNcL2MQ9zCSswRfVy15tXkNjZfonYwouC4JB8LNdCViA7PpRXnaExN",
  "key32": "4iPwMAZnZjres4LxMrX2K7nULRgKG3FcBDuX3HFB2FHFDmm1TCXbJ4DNjBCY5AAQL6Z7ySFjJigpJspYATb25FB6",
  "key33": "4qJR9uWYVqNSmycysHhksAz5m4APV6GhsTzC8WcMDthpras3Ts3mCpXJrDB4Lc9YJyUbtKFz9X1JwweWrq7hELDx",
  "key34": "KWWmPevGHEuTK83ao1xJDYtEA4vWMPGtkAKBkN44SrPpjMhDt233ZW8irpEYhVEnswskm2jAjFcmJpbXKob4STb",
  "key35": "2LsA6RzLnZSbJmvqEnfdbtHfUP7bSb2RQMrUvyxnhMEYZKWE8PnXFCVL1X4mS9qeQj8Vmt7aMbgu3KuUwQxpAhU",
  "key36": "2r8q8Z6yfSBRPWSw3pbyr5XJFvEentmxeVw2AN2iKiz39sUCsFMDrEVBwbVriSyinmSiqWCwNZPfZ3P6sMwX7tH1",
  "key37": "H4FpSkz7fTV2d3ANSHEngEvsczrnYMK8c9oJZ98vJfSGYE8zCeNeT7RoRYRb9WpzqsSYL2Btv8eRJJuaAsATc7M",
  "key38": "8NDLYzbHJEgmRHs6uYo4jG4fBR4b6zXAkjVpCzGFruYXqH4mNmx4zR4mmot7vgSXMfRZJqNP4Kp7SLe1XGMr8r9",
  "key39": "4UGjzNuAoAd1xhm3LBzSMdk9fmMqeyP2EfhwxFMuRSuy3UotUSytxeJrVgwh238J4AydEUzeDCyQtCSorGx2J9YA",
  "key40": "61JwFvzgjZE8DCqmYeu4SJA5qC4rwaLtWV5oaEwgYVT21Bk5UCKgS8XSXWP5Zxu6bJSi5ie3oXNtHy549xEJW39o",
  "key41": "3bbFPJN976dLinPUXGHpgvmjHZNtuN7bAuqqdiReLijwdbkKHG7swnXkyHTnG8HkKUi6WPkpDa3hyxPdi3xitg9K",
  "key42": "3Xhg6Qg9fte8pGr5T9PD18LQPTpRg1tyeA9jeeqKSs8f7psQz8LRCAcJjieGrG3yKDbnP1Recuru3jSJt1Qqtyye",
  "key43": "2DzbC9SGBm1eYEe3UrDGXqc6mYojkcT7jvqf9umTP8KMDMLpX6355vrnr7HKFBW1dMVMjjxE2pqmhUosAymciezK",
  "key44": "5iYzTZQtVzZamdt3Vxn7pmGKRYbNqbKsTRUTvUTVMBYMq7vqqpgmFvrnwSwdVct88uTYXNfVeG8rxEWjh7fYEcEN",
  "key45": "2HpxAh7hE2EoAownqf3djxsHKiPEUkksepmxe38P78SusBMc57ptM6XQiNpZ22t8rnDNndAJ9AexUPPvvt7cENhy"
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
