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
    "5M6rQaLVCb7LzbtuqQSvtUymH1Fzray9PY2wZWoEgPU23mmxxXpXVekbnt8kCMzYbuL3KpbNzBua7G1afFVf2rSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPmJJSfpMsuANwyKkqbppeC3SDEXesdT6XvAeQgyU5eEQs88hYNDuy9YGNeKi1tpyTDgZBi3TAdv8HBGjy6ewRh",
  "key1": "37j3WosZpy5qyXMj1vZBWfnRU7DPkmuMJ1MSm5jwxD29XgABxRfcCeAMunvhqGzAaz2BSFCXzVKNVMfHQGYKkKX3",
  "key2": "3yScDJBmCyi79KDxkbSXe8VUmMuKntXDy1KsVyHFjJazH227JboBeMvtkjJyxg7LmBwyfLMzgDntqbTn2zQCXEkr",
  "key3": "3FUCYEdzB64CKE5MqNyr99sTch6n2JcSotAjxGVdkNmE5rGBc2NdezaUBCHgrUsqs8h9nBsHCgWqpCZqPxiuAgmD",
  "key4": "5egQ7H6eBezqf2YJnX6mZKE4mpU7oWo4i1ppd7ADCy9Mpo3B2VHfP42nMPxTEocQm2vdPHZW8VzDqap63VjGgB6q",
  "key5": "5SU74TcDMDX4CAFCoDeyunEaFhFPna9s1xbzpvqJLwrssJq64QTce5vHsAf3XKiQxkkToXVxEV7Jcqt7DXtcQzgD",
  "key6": "5bsJpJJ1mTZZVj3uYkCR9E4wPhaejGpZchcuyGZnapzVBCa34H7keXS7ZQoAs9jExE4nmrYURfhXnp5UnBrCPCig",
  "key7": "5dc7MJ93WBYbbW7T2fJaUDNyicGCuFxCi2KYqeoAfTUTizR6nyvhUKunD6e9zuuzf3jQVUJweFEVuvC8pzEjegH6",
  "key8": "57WGUE2y3XovA4L61J8ruxxaud1LkzqmwquLuBgy2p8tRWXr7hg15ZXiRvZHr7k5Q1hvk1RcN1LqWcyKTvdM923U",
  "key9": "2GSs8RUu7AdZn6bFoRcwePWmTJ6kjnaBts2xCnwjGmeS97wQrff2PyJidf2b2hLMhgGWdWf3j9x2aAYTWxBM8wyZ",
  "key10": "5uVcJRJ3ScUM4QZCyZuvkK534JtftEFHQ3cwepzjueo8Jc5g1dR8xnu8znWrWbZyYpYj2G5HhQLTvJzsKYECuyi9",
  "key11": "25VxNfUcpc1YDnPBbomFshkWot24BfcBkCcX1SEWFLvT9jMSbWYGAPxG7YGPX5kFRnyGnwdJBjueJ7AxrQAezPG3",
  "key12": "3zSdgvQURNrSKY3imsohd6e53LfhNvCTbkMSnkg1imkT6QNPvDmFoCYsrjciTGs9TwR9R147N7bcxJPC19uVhEVN",
  "key13": "5GRNtjVVaReLkRP8Vj6aesBPyxvxAF5rrSYpeTBaqbcoU67p3qF9cnj2k684WJMFbhwq8rJfSG9ML1bUSpHRBEaX",
  "key14": "DkhcwNvqPJyHi8fYGMTL1BQ55VGC8YrNBm7HRcZuGYDM6263WaZFeFzkutE9MHhMo3rp6fN9RA9WWYx5qhbFCqt",
  "key15": "3EKMDDU1Wjj7nztSNJab6X6BUYqQ39pjXDyQAFKHueJJ7c7e7xH7bEjHbGzWNobedLxsJG9jCDMcHcRxBjvo2NZ2",
  "key16": "2QCtccB3r4w9GRvhHVEnJvv6nDMpP8scHnsbGSKMCTV6JKqkKPhaH98a3ZvtPkQyb1HB2PJW94eF8Y4sSYbVdgi8",
  "key17": "j8FDHjjPNHFPqftqWzHfBY4pdDwGR6WfknGMfDHQN827d3jCbJR3TgRnHGLgGxRhH32Y16B1dFUUbX4abbPanh4",
  "key18": "21r9zdt4h3dAvJQPoTioPhwredzAGSCicQGebWmyDoiSXQi6Zov8hzpo4TSXTFtXmpNpFXqFTmeVP3AHz9HagTdM",
  "key19": "5FFb3GVPfhLGcAJUk3uUqx3RSAdtKFM6m1RRyCPCgYAo8fXFq9dh9yKpjH5vFmp8xprjVWohNfpW5q2UKiKdLZJR",
  "key20": "54m9ex9McyMQ2onkx3fYFximfCugMi5MzMPkuMCc9KTfSQV38KEuaDNSLmASJXRbHRAUxnGzq41uA7h1ktFBTsDb",
  "key21": "43wHbmaR8EhSMvRZucCm85sU4xpptAnGcuB3amQwzGsFjqz2wPr8jNSPjPwTbsthZSsGDXqeUmDrQkimcLdL4WcJ",
  "key22": "5AdJXVATxiek85GnpyThWRVvRYm61iggRjyoYHYCHG3EBNwK4fSqdjt4KQWREXJwKDZeCKZKBNzza43w2yzkjxp2",
  "key23": "Mvpkn7Qqzs7o2WM1trVsP9KuQt9Pq8P9XPmJnVkcBrbqk59sJWNZx54EwcuCitvUx4sEBdPuxhZPB4a4bcnD86G",
  "key24": "4kbmemizwg9UZpVA9tps15cdiFM3MubXSagX6ZkzMt8ofv64SzetzdWxuKjEsC3koKnxmXwJRgVHVjddnkriGhrL",
  "key25": "KWRmoJoBJc91aA8TUKgu3PYzjvnXbrJhPuzqHB82YVgocYcydi4oeLS4xf6fkpio8x5KR6z2LKppZQ2RLW85PAe",
  "key26": "2he4spfef6uzv2ZLtXtThChVGKaxojFSwRYmkQWFSv9swgcppuoH2bRH7iY5xCALLNwRaUzMJutzRBZLBkDSQm2g",
  "key27": "gWZYjMjJB4GHmAFGZFSVNEntguUCpMJL869QLA5syUyv9xxEkAdqEdcXWDPfHXJEKM3fWcSGkxArzHYeZ5STN42",
  "key28": "z74KiHoN8omkG5wdtmdWBUcGc1UrTbdy9mTbDgQ2Hk3udePdDpxMJMtvSG7PkU4R6rFDM5aKGXKBfyLkSGuwpj3",
  "key29": "5Bdsgp5cHMGrZCivXWbvpQGgQWKySmHkpxw89PpCHF9MzCVeuzi4pjJGmoME2a4ve41F4f1eZQDXs1sc9bwcX6pe",
  "key30": "SqSSfzmUQU83fGPDzeScpd5jiLH7aQe9GVobhHds2UYjKqb8sH3qjvX4WH7oyNwHjNMRhkWL7edqbDZXRQFC6zj",
  "key31": "5cunp4UvEunbSTFxj3pPLpZboYyJCCJZnEsCv6jWYNpEKWn6fyVXW4LkUCpmRUJFSqSByAjWi98md1JMAEfdWr3J",
  "key32": "2NkfB6tfgaTq7JnPWNzp4EGvtWhBeoN9ZumUnKL7xYEn5F8PbRYUPMLmymo8g6ixiR3MSiooi3wryFUBcfArfVcR",
  "key33": "3dYPEv61Bsk7wpD8otzEUYgqPVaygMdB5GGQ8SM62NDrozVmkegcZQ4shX97qa4NXHXeiFxSrYkC3WjMYtQxFJkQ",
  "key34": "5uKP5Goo67iDm2T27yhcVQrX7gS4TPH1Se3PGgxKGj3RGLghZ1gH9u1tkYqTxCQHCHDWVH8b8YZujA783jdp6fTq",
  "key35": "2j3SN7krNqPkomKhA3bstoqaXzQF7koU62MWZbCFcu2FRk7sDk2nqhprQD1o57LEfTzGMbdjcjFCoGAE3MizugZk",
  "key36": "3JNcGNcHWBTfhxFFW58jkZB3p17FJjVjjhxf2CEGCZs1gtKH9DsKSB7qL53Xky2ALTKP74kyNjC2WeJgHPSwSYjf",
  "key37": "HA47JGPjCmZC4EbuKvpQWw1sAm3y6MnbWtGN37LbTZeLrpdN8oBn7JvTHNFk9GM4UF4G5RQx84XZuUZwbz3D7Ux",
  "key38": "3h1wPxZqqpYn9S6s1J7q4LA3tNxgFV6uadeJQ5U3LNnpqKBBzUcajNyuuqPoGGe7xozfVcMtzkGZdRW4NAhE6Stt",
  "key39": "5G7uABcHXtHCLA4xvJStePbpy1Msne4SfksnEdd5t18RGJMgTuxRxvHQhpgkuPE414tYc8mwFD2UVFfTMwgTXbus",
  "key40": "3BRpFqPgKodUeGc3tBrzG5NMsvBdW5SUkBzEqqtG9Bzq9cNV8AV4M8mmszwarzozau3fDQvybMZyhzN72eJnT8vF",
  "key41": "4PauDsWbGGpBXJ6vit6u4SCpPceAHQKxythvKrCDS29tEck73Uan8Vxna94bBsyy9UCx7pDMJamvGFjhgo1bxCJu",
  "key42": "BvFN87m8Wqn4T5Qzw9RCouC92WYmAK3AUixeEixHChPwJrFP6pbScogej39d2gc2BJNYUaJTbN32jfaEUsEMAJe",
  "key43": "pZYPTg6hGrGmaj5ipWQHwREEUHLsUNpgszc7hUZ27tA33TWnHWpXVavWsLzFeDHSxB8XAMWkFM5ipB7R3sc2CAt",
  "key44": "246W4B8ro3ExNuApTV76TsV2Q6dFbpZTELubYsUw3NqLtbY7SptaZYmFBbkgMDqADzPsCNhh9sFjBdCfqg4rf3vy",
  "key45": "42ubbMFbYipaRTVTAEv9TxLU7UE2riseeSeSpvn9v7GRWbxHfmEoqV862rC3Bph7mWMBnPnX9i9mV7vVEhiM3LW5",
  "key46": "3HzSHGnLtQncG4Ya1bFMJMrgDQGohxHVm7J3U4TG7Cu1mkYVqhvhNRzNb7ZeUbSgNTqRT8KF5H4zz4huxnSv1dLR",
  "key47": "5p2zai3XRoqHPVYtSPxdR6VNHqe4LPoUggm7yG1k5jzfH8HAanvGdWkx22z5un5C4oWfCzv4kLwns6ZhwHZNNBwi"
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
