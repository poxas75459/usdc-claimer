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
    "7VxRd9ctFREozoPj3aEzQ4rqMExpPmGELUoiQ8eonRxAfSMZkFXktvigyX23BvLDmQMBNHzpyDBiJKHGaFTdfQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSD2rTtiApkH9CRHa9eXFehnBFBzvSHnaVt3uoCJPkNsS23ygxLAzdJTQspDXL2mq7at8P1oCxQngke7SBESjoq",
  "key1": "59XCRKtYqtxjv6hDvVJsXtr8UGYmLoXmLSRsGadagjMyi9YhP66XSijrsxZcAwVpGbzpUhSmbskuM8CyS5W95Zd9",
  "key2": "4Vd9cqcR9Fxj3bHfWiTMtiqogFyC6gr3YDKemNkA3387XiupeQHB3xLVggQHtaPtuUuR2wLSFLHdGsFy1pgskuPd",
  "key3": "CfM2oKFTyS5obR8DTN9EDMxDvxYScE1C6dLER7rDGqbLhqAFoRcpquYNzEPTYQDWovfWzN5UdN2YyfV4pjEGbNF",
  "key4": "61LFwpb1uuVYdtk3gKDCxVosV73BkzaznQfLSMk6VArkFNtS4q42JzTunCseH4rt61PfA3LdegA5xNZfX8pvb9bS",
  "key5": "4JHPg9mVvCJTXjkuaQeP1iZBjmwAk5Wd4hYaFi7gmM6MhAvcU2sStCjo7XJiwhvCMGu771vCMRnkc9X3TTXyN1x8",
  "key6": "pMACMC2h5vqzgGxxQq6SdNiK4tVdvaQRjdZWNc59f7HaBdCsPvP3EW69iq3d5WSckmoD2C9tETEvDZ23HTQ34UN",
  "key7": "5yjshcG1U6sRzAZySFpvrwntkUpa9kHUwfNApzcai3anf4NdUvNQEsCpmL58P9AWyxcGCmhQKz65KwSpFzGmJnPL",
  "key8": "2mVL8jDhrStwnhULTGNXV9XzUQqQ4ugQaZqcH9cnwtZX2QwTQ1HopNqWtAQDQWdxDHVhLnKZKvEoyjEa2gDixZNm",
  "key9": "5EytzZMGAb9XfNuHzwTzfFU2EMJapM1wX3uCCNCxRjhYu7Fpc54oorLzcQWbC3Sw14hivxvhrBxPyPUKYP2JTZLc",
  "key10": "3iZRqgic4j2KEAP7s7tVDTknhCy8Y6MMWiaAHftdHYC1jQmw2e72Yvg6fQYhtMHcWABzbCspe3VeRzRm6EGzhFHw",
  "key11": "2ZpcUQhbazqiK6tUr3kKG2vFCc88x5xE7VAqHPunFCFdi9rPQfoqypG5Btemu7hbM4ijD1piWJcacqPE2FjqEV1o",
  "key12": "4uSbJzwsbnExHdWG41TRTXNvsmJHNF6UYELkgUUTYzVkxqS42QbXzT4mjw95tVHG1b1apqsGGUtCk2VhZR31J1vd",
  "key13": "2ZNxUG8Ahe9yzvYM8TpP7WoiWUQmzi8xG6swMvDrykoARiqZ2LdZxA3miGyKvypCCC1KuxTArMDUCJDqWuAHrzDp",
  "key14": "2JoG9dtdT6vpXHi9YzRpmCBjRhiLRNgpPAYBisGHvFcUTPgbgdNjvdPAfuKbxcNvqnG2n1CSiWekiKv4Rrc7adWs",
  "key15": "2bfRsp52eoSdCmQvceqEL8KnANmmWL1FRN2abaAyJTPhtRy8k5TDhJJg884g9k8QM3KhxbUKFWEwJT94PaGZTtjb",
  "key16": "2CapdtnVy7iEDBQdBc9Wkm4UuD9GYAv1gE3uguN1bL1m73Cx8X4keym3AaDVMa9inJBrXJjemSv5LTTSDRP7Jghv",
  "key17": "2szE151MyPLRsPU9RAiQJUsHmcg9FpSs5APuNNGwcujsnbmAHfCVwhjw1mstgjNniUjw1WsptWvn7HPjmS4xTAAE",
  "key18": "2wjbLvsbsXrFBoj4UfCZstgANA2PV2fJD6iu1MLpB5j69uWVbB94AdJHq45feQxAtSxKPEiWN3NNdUNp6ujfYv8b",
  "key19": "2qKpvvRxdyPVMXrvM4VY3LN4PWJQvUVBwphZ5F8JfuYh9dxV5K7jpjzf3YWP1GH3NPbSPv6Mz8fmZxmmHKHzezvz",
  "key20": "3hUDk75YVQoRW1RbBRYwhoowHeD4ZLCnJ5DPzcXZCK3SRcNqmZRSPxZpLt4vkDYi2PzRPMiLYbd8LyYqMGFUEGAB",
  "key21": "45w3PBdCnr7xu5MkRmrRbexpkYjHDQwNmURCm1TPhs71VvCDovQJWgTLSQ9SSvVFgsAK5QS7e7zuicdi1kJWLwsw",
  "key22": "3MX7wjiCBQg2SYzL22ykD4dfrUfAHGaa472H4NgXGRpkyP5Rjw4Y62XGAHBEfvLXiMme1suKyQ7ktmJMh5ynH4Jp",
  "key23": "4RaJ9r1ZqVom8i1D83GXb1fiyU9wMAdEH4QxkjbYWCE4E11RwjWToZuVVQ9ySmiaNhUMk9ku4bbBb1Ub18KjMh2y",
  "key24": "3oHbuJ56okEvzNqvnnDW1zF79aYmRNrt3drviU2kYMibhGYts8JSMkapmsC83pSTN4MvVKg4Y9W9zkGAtsnTag5b",
  "key25": "5a6i9FwcHTyyPEiV3JmmFVYvdt65qoSDiZNDQ473MLL22TQPDzUPCXJLipVyry949pmnigbEJT4wQQ8UJZyWVBrR",
  "key26": "4Fiqs8eozerZX6CPaH4VGw3Xhm6vxCyb9f4bLutrnogFULh1caeW7Lhj9MbRVLDujzi5K9Zo2nBc8Ru8y3r6WTnw",
  "key27": "5TRU7khmXjZEE8iC1oU3KhMDCGAykcjSgkdzqpdEFCgB9tC79fPDm2ANWEdVHUJTzsg8iAFpuNdVBsdgb4cLg3t",
  "key28": "455oFY7sNDCbJKo1uo1yVj2LQm4LWjABUDP1g5MFbbHRPxB2tmH71ChcKWCTW7hcRVH4mzj61ytaeRYzfqSyfAqR",
  "key29": "NGL4vkgscQhMbhTjFq9A6BJ6mgtPiyMNdsUEPaP1fJBTM7mjX74n2vMnv8CusDkpsSNm2JbniKq92MCitbk5Je1",
  "key30": "q6Gxgpg1JNYdEyuvP31TRf1S6Ne1MEK8e4fLhWxFsm58ncG3EUSSLowe4ZLJrpEyeGHNT6aQkKeVDkpnjM34mdH",
  "key31": "5MUgeriaDX1cEvGXhk35FV9CggnGmyY1ATehg7JzrqXcxjDpT6sQHqBdDCozaXHnnH7JZRvyWkZP2w9vghZ94Z2u",
  "key32": "HaFfadJ8qJahKLfEE92Z7cwFA2HFEkXHgTEEaK9fRYw2mmtq9TPYixAAjRhzgxsZn3YjxN5e8dubwgR4SihYmFe",
  "key33": "5Z3J1rLpiYKy3bXrvSdXUyq8ihcHJseHknHXthsiHYBNfSXFGf9zSVKmZxtgjLy7JXpxXq3iscdTfXJnvDzcNbDB",
  "key34": "3DjcQ792pKJTgMfVPEKNVGjvbZBSSyKj28ahN27fvYYTCH6qkGnrVodPFdwxusUBqq6UbUm4XJRcNiXiGJi3NUq7",
  "key35": "53CJjK52jEr6rC4PDkN7essSMBEVv4AiWx9bMgSzCRnsSBQrKyMBF3Enz1iG2LuXCx5zH7xxHN4woQmyrw5BTuZX",
  "key36": "5haRAzjPgGio46ZhJtSBRQN5x9rKH7wTw9G9fsjSXC2RkTfgpvv5G26omz9TAXEnytPPPD3mEnMNf1mYGedjqiLE",
  "key37": "2sMhkSqXrBRUY6YAAZvi3VRxftVq27uZoWoxQMKTeBcnSGohGSLZfMoW2pWYAs4B94qgQfDYSMW5jPfH24HwsGPa",
  "key38": "5XPLcWAtvpbseASHmhxYg1SsttkpuEmZP57vKhHsdD7uLqh8uL1Zezjw9fG1coemxJ8anAb2MSH8w2aDe9KPS7zx",
  "key39": "3feS9qjNpUD2b56pKc9mSYAnVi11r3wPubVyYXieUqM22WS6Udm1v1xufP2uetp9HbVxiWTvp4Z2EqGCVAwf24vc",
  "key40": "3ArvzCzgHbaFXV7CrgAjnztVjHBhLoico97gmFxaEP9E8aaMHK3N6cktYovH54jsuQvMZftaQs9n6yc1re8zkTft",
  "key41": "4G1JZA4JnBazLhEact4ePs2zVmErYTB5LxaadUC2HqddRnNRLYb3XwwmKq392APH4LY1m1qJgHVvSMt87BVEYKSt",
  "key42": "af3ZcGkW7MvoWPfHdib5vaixx4gT2YRJyEGTQtrs9qxgCYcZeL5N2RA4sEEfKXe5521CrnPkLB16w3ijWb7PHPq",
  "key43": "4Ayu581vuV7Nt3veuzwoegvVbn1XJWkAL9g4iYHyMwwd7BsB33xoHj9ZWHt8fYJ44hz3VYaPYCfj6Kwe6RMSZ9ii",
  "key44": "5WjvPeJoMJXEA8w557mrwPp2wm3hEMCYPcZQn1ui63ZXYpP2tzkwFyYSKbNvjQWBdzcDtZTMDiAtjzQw6vaFXhTc",
  "key45": "3yLWqAYNJprTxxVkz6Ne2YbTbv3XEpcGBhzcByWvgpo9vfHJKSFQqN5w7BkmwqEVhWLLs7kSfQD9hG9Ghk96Yosp"
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
