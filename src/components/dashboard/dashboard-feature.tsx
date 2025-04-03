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
    "5mxXNs29T9kH75Ak3wNXcLTnpDYEqewCr8BVACKWDJht3AA7W4ixzG8gVSbFgN8LfKRNsH3QYLrZJLjTbjWDpbrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Na7DxGnWUrCxZFbnD5bsdvzfF6x8GgpLCKYcbmP2cnfsMB2U2kQSNzJRi8fUzZHpzBWZ7QswkYbJquCHBLDn3fJ",
  "key1": "59TieMqBBCcFh6kscfyK4HSrJYKMCmiSyffuR91HPBd9BkwK7Fofexi13GBuFg7phwh9YNUH2xo7apLfVgg2ebSK",
  "key2": "5yLhb3SdXTREECT9oY95HkbjkiURXLNMcMfrUAZsakFqERssKggsgoc6DzW5hjSbECJ8eovSMHqLnRNBGXcQyugF",
  "key3": "5crmjnde4Dn6U2WiVCCWVZBpEAfAkfwSZhmJrUtHCH6UndBMStf8aVhpSuJ4wCyX1yWoc6AhptxZ4C4oPdczgRWW",
  "key4": "3PkgeUzFvxQN5kgruAukFYaSDGekrGaQ1mnraXm3Xea42jk36Xj9LjJNLfKXbwFvDW46Xv77Hq9Bxybzrm1qfyun",
  "key5": "AerRFybYLfom85VzBDrC9YD1eMzeXMB6d4HGGAgMvexA1yXwJu2kYKDQyUsi4gEcQ3xCrHUktY5vA5WCA1Z11sV",
  "key6": "4k6xkG5FiCxsLzJA1AtggeU5mcquYxPTEnuc1mjhMCjnVrHaDTBGmPLW9TEmC9SgdhnK3TcpxJnUE1MiyygcnMWD",
  "key7": "2mHG6mTZbCLVj2WnuiyFuqKciqJGbmFrZqDLphB5wY5y3vA71uqWevUByRzGW82bPUTKavD1cd3jLSfvrfVmUEQy",
  "key8": "2SLAcJSQhWbGDYwnd36Pa2rVuENqr4haKC5zVYjTwnnukWbcPtvEJCxhW5GT8NwRUFV5pH4Bb1mUYz1Qqfa6TDVJ",
  "key9": "4got4hXYYSBoeaSDaQRr9P9QksYsQC7LdRYZkC2BCBryqMAfA6fXkixh3tCCpMF2zGAVsekQ6ryaxqVrnEgJzpos",
  "key10": "2fHEg4EFT1TEAhTNsbAePVkGPpKT4tfNsQkgEkEyDT9FbAwd3DGtViyfqeLo4f1RwT5yejYLPXsSEpq9B2aJNBeh",
  "key11": "5CZbJdNKmvPCYNyi67YFsxxnSmwpe7e7MVa5TqZqZB6Vb4h7MaPFejTUgbv6XdrQ1uivfjCpFkdgngJeF55BtGfL",
  "key12": "5QDxiPJ3wsDrsti79Y96aNS63kbxjrkLm91Ebrx1AiYchKT4zqrgfgTbDHQEjqEp7XpwyST2KYPQuWe7zmMWZ6gT",
  "key13": "5Vu5cghtCzEwF4M1kFjjuD1snVfLsyGn1qf7jRDkTqzcSNGC9QBz4izaywuqqB4NZbasLTubq173xiWTeibXUqtt",
  "key14": "5qNeFb2SKAeE7JiqEj4NG73dXPHRw3LWpEWMofbsJ5W3sJWUT9eb34soxgPKZB1zfdnNvd7XuMAYvwCXEtvrJGSA",
  "key15": "5XWd2fDd1NzjdTRTEyTbEgprqRtovUikFzNaFULbYs9dAz6CcCwG3QW9UXJumnwBiNjGb5tNHTCpn8SYpUDmDo1d",
  "key16": "2J3Dm5yJ1iruef97ErYzcVP7BaNs4M4tMM6XobpdwT8amm1wFM81cATEqSuU8N8HeYk3vmVzBXXyycsC7RtewqqS",
  "key17": "43qy4q6TPrSMDp7M8hd8ibph41mKF7yapzyqGCGVEYZJkAHj2XMt9GweGWWNc4fqpzb54brtziasncnzR6yNShkB",
  "key18": "53W6rMgCd5L1tVAXVb4SPnDwoT8iYaN1StQkGkvT3nbL68dQ5svzZ4oHTou8s9BYFLSa1vpX8f822zc7grWAinaq",
  "key19": "mVEdSrL9aoDPcoP3MdzkztjjFXN5dRiCZwWJQYaAjQLXyu5yF3QDbNuZExKd9skHVRfxekg7KdLFK36fBewohzX",
  "key20": "36kNhqcx23c8XgGP1qaucyAtpAdp1d4MGSpdUn7QdMnGdqLj1t6S6r5q5Y2AwoUDAV19gLbh9sqRDuyjnvTe1tKd",
  "key21": "2yjEJSNGNbMvXeL5g3XTiTXHFNYw5vaPrpgBBjTyQaiJVMjbiUavGZCKEERRBBYxcSEu9HvRCLjK34fnuhHFQARL",
  "key22": "2CCTELE3kHDUr8Q4utDbX8ZHG7YysdGr4HXdkRgBp1oRozK8Lo2dUdehSPDEkJnW8KbErGR1p6MX22CFm9kJqGdN",
  "key23": "bnZMpQnaaT91G35ntDHijNg1Jzc7bR6vnXpFB6dgcJXjMPXPCLhB2joxi4abtABHwJRSWPk9D6YmdpaRSSu2aov",
  "key24": "4UT5dSZoXzGSyuTFkCbZRRUkeNoK8SFfSQuGtZhAYUHupTR5zMGx97EAKGgsCgX8AaUAGkLtEwvVUL951QNoCsrV",
  "key25": "4tcaZgN1sF5Ynkap3ACh6VeL6FBQjjzhAG2m9iUmcax4ZLVCrTi6EicM6ugPJfW4XfDUVD7zX5nWibzXqugQ8op3",
  "key26": "zbMhnVyJZ1hGeUEU6mRRbVMCPwVwERc6voRbGFHyi4nq3WQthmc92Eco2pZEwy3ecZbLpEcHKPhRSwwBWfQ5vzh",
  "key27": "2P8yUe2qQ93iEQMQW3ShozFXwDQw7129tU6Fso39Pag6wyXgDNWGMgpbxZgLjEiTNHANTTJjjiEPAvdzqkrvPgv9",
  "key28": "2VYocuuaQKBiyToV4MCc1EYnENfS5QsZ54rSrr9VsszeCnckuWAPnAjGHkPAdgmpBdanBfg7MxuXTMSSG4Zekous",
  "key29": "2tRJuvrzRPW1tW5iXK1Kumtmr9LzckzUWAwukoyYSmvE7LdXNYDi5FGjdp9mPpFe1Pkz227raceiAt8YcHg5XcLi",
  "key30": "61yFRhKeqNHfvKcjE28fS8ommnFocnoeQUjhqiFRfFACnLoe9uftrCiwRE21K3opCj3Sk1hHDhfuVRMoWxchge3P",
  "key31": "yUUjaY1wja9DLjujVSmyGcS8cYQnoWtupQHmbKskoaddUAuyUNtuLxPMD5DmpEXkLmzY5Z8ZhT4D4oktvWJngJo",
  "key32": "58sBwbxk9XKZfu17xhwTaJYyUQS86Ddh35gQjNsx38WX3VQuwT65cNZGsxPWkYC2vPNxopGAfjiW9EM5eqLKkL5M",
  "key33": "3gtC2z91m2nGyaawM9xH7kRAUoSUnJr8GVvdND4APK35G243xM5hpYmtrsZX1t6tCAUaavs457LKSvVmKtV9UbLt",
  "key34": "2v6Dp2uLBikXMcRB5HWLyvmqG7SCQsyPdLxvDNqqMJf47NWenDSskVnFXhithEEmPvGzatScmG3Gy8sFMMnuj6d5",
  "key35": "34SHRUaKFyVEg6u8jHETZwRzELxAUhWbDWXCHr7po7TzL7FuD6C3b5iHFezahd6Kgt6oT8sYGn7oKTb9ztbwPn5L",
  "key36": "57nfZgcxd2uyjxBNCve1QbdycbpxRwXwnvLXgPeXFbMNyuLzJ9HfChkfUYMG9AKGUWqqv3ZeCsVbNTay2cacZTPK",
  "key37": "4VoTpoLjb8pKBjt9iqjaLYcnn9LHQUGzc2WdhdGRbpxS7m7bp4RKskcbkDfhJaivNumyk2tELHSbaT9B6kQcKn5Z",
  "key38": "2W4XKsMR7giK5LVi6DNppEKAMb66brrRpLmLGGgmXefrAuSVJTmcUAYdMKZkT1fDLq1Uc3doU8eECnmHQTsVDWEb",
  "key39": "sb1R1BKnyryRgJGMSSk43Mp71RvvxbraRtvgzu52EkPX9Dj28zPZ6LhVDHx7HKJ9gTYczjm2tSZpdZcsm3joqfq",
  "key40": "Pyt2GhpXpj54s7Bdvt1UrhTYNZvxzTUFTsZsyz1FBJvmepgRr6isXg72hkoZ2y5dDGRY3Ep3w53kq6Hgpctr4jN",
  "key41": "3LrfEnLpDihwanHup2REdoFR5HLvmEkTVhoXyRFm6fFqMZuFeb6TyDhbz8HHx7LPkqJftmQh5v9Hz9EKfrYko4ks",
  "key42": "4aRNQbXd3imuczbbMWxzXwuukWUozYTnP4qji6ESQwVDFZYGKZSRmPq6c8V7Kw7ve2rCz2TCCUWmKSMZpKgvfYPj",
  "key43": "4aiTdBtygtxVj4HQxC1f67ua5fsbNodf5cEiEJZ39AfovWNTXavH2PBGvKdvjzmwF5TELxfCEdH2UkPZSAJZDRJQ",
  "key44": "4NQuLTouHQrRtXtjgZ6m6WfSrXNUPsU67ihbazJnvqmkZtNhVnnyFH4gMpzX2XGWfRLuo8eyZFuF3nLBxZA8eKjD",
  "key45": "2FgQP2BFXPx9HhnsmfqD4CQKbVmBsV2k6atxSe2DLkaCPtJyvSVGqUDexv6HGajTm2UcvVBcaXYjmXqCb4SGV1is",
  "key46": "5yB6T8zwBNnADq9Va64XjB493EyizUqSpPmtfGCk6FiJwJt5Nsr3dPZ8rdBhRuW9zLke8BrWWCbcnTXtk5EGfzLb",
  "key47": "3GM9RHgAP34zpK1PkJQAQhj4d2HAwREbGLHdaHNj8NrrjHfV3kQSLuUUNKXT3EfiAKpmYcfo3vSkmySDbtShY4s6"
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
