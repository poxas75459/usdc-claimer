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
    "s98ecAvkzkQwKyRCy9JmJhAFfqMojnGPw4KSLGeaDz8m4kGxdr7rXq6skvLLYGhVfcUL1Ax63KSvx2K6FZMmW3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAaZDUa3Nopgz3wH3hJfyp7XTT2oVTGo7xuzatApuG47SUcwa7u6k8jppjHaVLjoDh8N5nnriVM7dnrP3BG9sBn",
  "key1": "5Pt8QCB9PTJWNwcGx44R2iPQhuT4hZmg8cfZZX3aniLESwsHYKN4DfPs6Z48ahgmTuoWCsFvhtmUDkteqPYbW7WQ",
  "key2": "5z2zk8rgTevjmJodvDpYHvUijx49mi5LXEzvWfRyomUCUamkpMe3pYJkbZ93DfTJ2K1pj6Hmgs2LVRgnKZfbPqt",
  "key3": "3YxsdtZ9tsterMsjXv6Ut9pBqK2AVng2xd8ni9v4bz1K4qG2MYEv1xEzyPVvEc4oew5fWJ8EL5puW9uxWbjYXLdM",
  "key4": "28gzJstBgB3uvhf41ETfWgcFSNrj1YyokyA7VjQcFsJ4jm3rd3T4b4Np3ZsHTz4aEgaEXHNbf648owTE56SKij59",
  "key5": "2EAoVoKcSgHfiJGZh79M4jQzuRsBFH5GiY2nNphCn9TCm7a3NDh1dNpC3RHgCi1V5ECjJceueLQLnip8skMDbTSP",
  "key6": "39DHVNFvdM6SsutUAV74wmK6TfcUMgcJ6upWdVms6jKS2B2ZYnwJz5r4qDG7yChcPLceWtSxAKnyNSQhMrvbyC2",
  "key7": "3bzr4vskABkQwUx5EaewuwBqwnftEPus1Srv1vA2dzQwnn9gDkGqhSCTGzTu1D8nMgLjvfpZKSVFGgdj4RmzBuD4",
  "key8": "4VGDfu3BDWUzE21TfD4X9JJy6TLXkpqsP8k1uZCaodCL7MLR6LEYvYtP5EJeq4ERJh2wTGn4gsQ6SbGTcLnMy4Fe",
  "key9": "4rNcBN7pEPWZk5WZNHdxt7ULXiizZJoVDv4iFHzkFtYq8W7eET2x2tP1NzpSCE5SodFpQTivcSVu2vMojSHQNdXp",
  "key10": "3WMHZVJG52VVgNyS96HTnyHmSz13yVsiGTuw2VDZHbJvUFEv5CRUthH9DaBFWnUVhJy1RNRov1f32t3a8t8jXZym",
  "key11": "SzGerv4EE5JvwLhDgVFo9dQE2yjAHKeoExLjyc3e3Jyhc7LUXgKo6ycmoiRN1ynqn6zRjLTuC6ENugq49jH38DT",
  "key12": "5yufZ6sHHe5A68a8XYij7DADR9L9QY3RmfztVqXRRhMRVXWHUWEXD4VmA5gjDvyMPRtF2HBr6WN2CZ8dGMCJGpUe",
  "key13": "2QckRL6qnpcMjVyXeEcQxtQjWUfqRjHLu4gpYpR91mQY9vCUQ848CwZX5Df6iRBU5HCiRTmCsyHphyBAvG5MsDU5",
  "key14": "33n6vDYsvoVELxBbERe9YSubQ2BxkbTKmLmqWkFu9JDt7tYPYHzFJzY3DKQYDuS4b8hkFVtwYgvWX79pbWgg8qmX",
  "key15": "bCUJJ5DxVCJqTPiRAbtD6t85iWv4mab8MdGAHA91CbhQrWfLUxSPCPMriXSJEGDMGp5rVeom9WQXRwrvCmRWCHj",
  "key16": "2KAPuzeawzetq9efGn7pF5BrtcQxBHF69wV1wqkLV9sWxAZ4U4zKvDPNUFHzaRmTyFEmrzdnfoYHVMEdews7KEtS",
  "key17": "da8n11JCuP2XqvYSwwkgAnBerqLC1NEtQDZRzhnvkuUa4H36rbiujzjV19qmV3AfiDrBLp13si6miH3DTZysKoF",
  "key18": "4346CHJZzxM6sh7ej8458WFZQ4wYsg4xW2sD3jCfeQsnHVArJFRbf5q6ve9tagkM6iu4iuyiP17YRqzRVDng41NL",
  "key19": "4ekHwg58z3JRbXw78oPJ42ZpEn3sgwv7d9rZMkiog9UBBuoqiqRYbRRcpQDZKYHAPTxAe7a5kfyfxUuF3P12UgF6",
  "key20": "HAx98EpGsDiwv7baiWpVBP12xJt117wZu1ijScFzBKda88v7P5De5BSKjSP6DXtSYjue4jcR95jdhc6NxSvdVsw",
  "key21": "2UmU1vfQBMPsKyMTmP5mtdn4AiNpNP7uUpit2NkuN7PgQVQpxpfmbxQftYkM3PJ73CjiomXzMiRDQgXALDYBpMxX",
  "key22": "i8YRVggZKhADeJ7Z3RcW2BFMP6V5E4Bd6LUjmkF211M7MZizTUftZuh3nbQV2PAaHnY8p2HrvucDbsVXcGM9Sz3",
  "key23": "5txBHpcMPMEX6Wno87Ggrc3TqKajk9ERKcGbd82o686aAMzjy8FTEhSbnXxqekcjroXpZyZFHda5MMDRXtvR1npi",
  "key24": "2376ZRwJ5QKrdRHPogvsDdtN9TydBQ3m52RsS16vBykN4asCxdUQukeZdJEjETKSgtUfAtQh49oTXaXrp7o7tF5C",
  "key25": "RV5smG5rkkBCSqSwrcLZo5mCdEBox5Zk2wpSbHWz2L81Hi3pD684pwVy2aM4tBUW6eggHbNi5FDqPJJKhVgpd7L",
  "key26": "5m67W7oZkKFxEgiXqhfm1nPJMtcuizjp9wT2P4EqiFLBtwrwmdUjkds3pzNaaQCcQHYKRDQEVq7UYYPJmh24zENP",
  "key27": "2zuxAsS8nZmzftcg3CaE7gyoq6UQDZdz26LmPtabTQPdCMfKyUFnPfLLaVFQexzyjseWQAZuf6d1La64Sh2nbfUL",
  "key28": "jVQpsZV1T9KohY1br6BwMQs4rGhaF3Q4R3Qijom5rPhu1iEUEiChnEdknBEir95PTPyHhKfNq1PDWHSjKuhKrZT",
  "key29": "36ohzLX3S39HYgBKL2qKrfPTFS7EWBL91UTguJ7ee37eTeAvQvwaDZ9CTzT6t4x7wJDdTBgVw4NY4EJ2kuxM3T1v",
  "key30": "4GCYpdackiqtiF6a69TMSkMpFLBJu26WJYnpZVZnxizvp3AcpdHwLoBrRpNTY3P524PK1xnUaHanLcKgH4zmDUic",
  "key31": "2sAL2AYqrrbyt6KKTZuXs8iqSNc5r9AkgT91r4WhqqLyP8ua3UbjLJ4S11mLUP6ggspTikFmxm5RZ677pxdmM55c",
  "key32": "2qi6Q9kYeWthqio1aMVscEEDgoQsYYw2DYoQXDGFj9tTtBdzFQgXL3NBKD6vPYsKCdj5JuMWk3GCfS7b8DNvAzmz",
  "key33": "2vUVZBGavcuzBxmw1oWS7QoRT8p7BcgSunXoERBzBYN8sKn7esuh4YUbpkEMVUrdGcNSUwjZFtjnPHVdxHPpMKNq",
  "key34": "bA2EMNSefyFaoxqSAnabHCZMpxkaQXGzx4vbV7z4Hvid9AFqpoxEq82gjCkdae8XvKNUyXWnhsTKnK7BvYVgQK8",
  "key35": "49dbukMLaAbH8yPKHK6Bo5ixBbrKsKPwb67PmP8vRUdsdzaAffsLoiCXFUHKks81r19HGz1m8Xnn2UoaWKDJQm7P",
  "key36": "3Juc1CBBppubpSdknDLuDoA7odmhpfa4EBB2sKKsmV1qvCfvzEEmeA12m9axX1phkAhHXzSszUUf9cNECYbJRUjt",
  "key37": "5A4an7TxCHfTz25xP77HUDgACPK5Y8MNJ5CbZafTrzYdeNCGdbsSgQx9wEMeSvaotcJtswMDHJZf2hvzqkGoTQ3o",
  "key38": "2fGts8yF7yzBuV4tdBe7G19NRWE5JzihLUobuWEDKidEdHCWEquwMCTqK4LZN4f4Y3fE5udKP777FoG7y8j52mpT",
  "key39": "RdGqtZmkFxewiq7LSFkSe2STamrBFXgFKNhUM9ZHcko2HJF6uVrd6aWQShBJJLM4sjbnqCB2gtbWJ3RptMdQcZ4",
  "key40": "ZDS12ESonoX1oMbR2tQ35pVaSGVoUMKVoTEXUqpLjKRxfyAWpV15CiFX8RSzpjdDAwNEeB3uk8yFHgHnubUb3Cc",
  "key41": "4Tm9b6oSLJaVqMm5Y593dpH8KpJfpX5JdZKmFEAYxddQ6cvfvarYBQZVjcZ28Jvsiskor8wVfj5pyAkGwHnJgnw",
  "key42": "67cMGMGapMpBZVc8ryEfkDkaUp9GWzRpDMC3m2gtTe2sN1rMnmDRCXNFzUbaSx9B9WErepSKERHF4r1AArdqcEto",
  "key43": "4qKbfezfCnEb7FwFEFSPXCysi7vPdZGojMXBBjqot52uP51pikuCQkqDpUgEze6RbmyszSEjWqb2TNntDybUWNgC",
  "key44": "26Nq6ngCDfM9R53wYSQ2NwvccThocRJWPSKF3GUpbtSsnJDSAmZd3cqJE3gceerGHjEXsJNBd4ZHcvnpxAey5V3y"
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
