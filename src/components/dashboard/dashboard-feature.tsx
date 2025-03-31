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
    "5XdSvMfn6CDATobwjyvmUuRrT7dok1bEUGV99hnHjhdhcQqeBcJW6Nvx26t7SafjTZEamBbCgGLTd3Em1kDXmS9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1uTGBPri7LMQ9GPJ44djsqopTZACbkMWfcsErL1DBNFXPRX1iZ9V4yJFskXokdPgdAC6oAX8Arx1dAiSNF4keTY",
  "key1": "4emSu1tFCp4XWc7YS2U9xsUwg4tSpfsj7fc4tQMhLCyMBt4rVqs4YKJ7xnHEVRykQAPkEF3PmZdzCUoWfDXhqZog",
  "key2": "4br1MW5hAzk3GxYcqhRVm4jTvPtWKXN3pBLqoozyTUeGJiEdXYcG9CNKYtBGRMXwggm5BS1T84DZJVCNMZS2YJte",
  "key3": "4E3uTVPBPqS1fbZXJ4cyfc9QmiL7hfyQ9npZn7vawLXM2WdcMfHARCCocw2jKZo9iVwL3mAnYy5z3HZS17yn2dvn",
  "key4": "3JqDGnVaForFq3rMw1gCbFQtQwjh9scibUJxMbkVjmphHcg3nGVuRXACrcsg994mSVhzojiFuShjXXGemNmVhya8",
  "key5": "2qdRcfdWD8139FomwHpgPKDbHsnpzc3MvExzqprsVvQivsG8P5rhqJL4Ue8C9gtN5RZkrm8fXvCL6wpNKbnUzDtr",
  "key6": "3VM1qYvcafW1Qgia9sWAo1Hnn57xytxMUqRUQK6BsbtUbDu67embrJKDEVoUgZhN4YJNbjLbAyPyr4UzCycK8JWA",
  "key7": "4ijgvtZqKvVkv1FEsySnRihZwWSSiP9o5AY2wyi7dMKRHpgVsQxFb63PBv4aW3XVG9D16QhxnFz7X7qBV7hUFuxT",
  "key8": "Ezb8drzUqYZkF3WhGrTigNoM3ewh79FhmXo3V9o99F6YQchTHYQSXTvi9B6pa84muy8wKJc3xyMWDdWX4RVj3kQ",
  "key9": "hNshBnyeCedwH2Y6cfZo5Q5AJWU52NA1fr7dHGuWdjbJPJLdXzyzquCsyzLVUbFhDXQgoPBmJE8zPXYLUyYNcEm",
  "key10": "4ziGjFh5epvhvCFJ1MsrBAMgi84uwDca5UiSiuH4iwac7LXak7V5Yg41nPzkqUvttZ3wWHRKQjEQ6cWiZppU114w",
  "key11": "5TsQBvHcDiF7Y1kBVutYrRmNCzotHyBae8NzbM3dSLWiMBQY8emmySPTZR8jqEqkDhZewJdEwUE3gMnRBpyfP9fs",
  "key12": "uSidjF2VUs6FDif5qNLNNjqdxsg9mdW2psrGfysCQL7JCn2LQ1HTZhqPhfz9sNexfSdVvvBrQF9dyxRQedbdwYX",
  "key13": "4fsYb8uKNUgL765UJVyyV6tX19UyybDbtzvR6983LFyrrbBWRF8skTgAuhggXytTA6cGoibsSg1JJStee2xxCEkr",
  "key14": "KNnp7BtXkg6dqMn4ZkQxzUyN6XcEPzMNy8qdxG9osqheq2jTrWDpMkxLDFFt5r9jbgEEy7Q54zjKbbwdz7gqp3M",
  "key15": "3LvDXbV5DEwoEQQ3wtqSzLRMCjMKAfDGT6Ep44Mjwcos8GkqgZcoU5kPGBdCwUqNK1WXa78Dfj8yzCeTduzMXB2D",
  "key16": "5enUPGEemUL1fQ3NC46HLr5ucqvkfbWEEmB6AppYr9fiJL1h4B8bf2Kk2tzSFKcrvVBFm943XaWCzVWgKGK9dW3V",
  "key17": "2HyVUczzZW9KWNFrJLhU68mdcZQSRQcuk7RvC8m91o9v1ZDANroAxtCsHc4d1kojsaj7p1sTmrZSMv2cDhHPAaXj",
  "key18": "JnmSLVjKfh1kuG2qoJsY7oYXpBQ5LN2iECtvBe4XmtPaxwefnctHZTpWWfJnYbxgsHM6h9BqQWAuvnkLpPW6z26",
  "key19": "3HF35G3BER4hqvu9HQXkezpRnTYPH36xbKc7KUi4AMvXE2gvDQsL6s3vohpWZmU9xTCGhTQvYNznmCJTLzgeKiXD",
  "key20": "5RaxXRRqneshJkMzcSKdQXKdDHYWFuMvVekrUr96jXSnbttDz44dfMe6jrW6eNjQqfkmSJReoKA32HoCEs8t5hXZ",
  "key21": "5QXSL7avXCTEmmYd4PWHy4GgBiwQcQnpzFxwGsLSa4zJY3PQCQbCyWiFTzU2oPLK2S56YbfrghWBBzAhYM27U7to",
  "key22": "WA3jgSWT3UJFYWkpdCSTyUu6pSB3FP9zhxE67hjm5Qgq6dgcQobPxFbQZUHp1XfdwcvhUi7tSp1rWXqjrwnLWzV",
  "key23": "5zcZsnViMoiGWmRTranQyDt8evhY6z45Ht4DULUaYhXt1Ay2fCpb8fXpxC6fpStKZUc93CspsKaEcr8QMqeWrXTg",
  "key24": "5a6TqS3fEw5Da65HLGG4N3A8wbwnDZvbNFH8fYzrNDdN8qc9vbYANTLhpLjZtCquaJcQFzo7WqgLTJH2Bwueeo1C",
  "key25": "4YPrzjXMAgDPSm1wrw6FEi6xUmeADRuFrKaNwXy2skdT3u9YVa6E1JFRJVPuGntn3UdoLLGKCM4DFMuyDugisMS3",
  "key26": "5Y1v5GBWvSqZ67ze3g8kbxkK7dLyeGXQZYPtkwwvuvPrwUFAsAoEFRpRrsMok8ZFtoPYCSouQykDgVSrsuAAJ7e4",
  "key27": "5X3dXHbRFQHij2Rn59T3h69bxPkp84c1Vo8dAX7HsTHNTzm6k4BQXmb4s9beQgXzLL9a8LuN6Kax9bPNQHejErsM",
  "key28": "Fc9py17QU3U9a3iQfhEMPtPVgvWyocZs2K5hCvQuzbtPCmAzyyK78yrXbEVH26Dgc1W11c4EmbUyAcab4Xf9T3L",
  "key29": "4VH2nM2Cdx3UJAoNUbijkHv2wtNog8qKdi1wwU1vsXkTwBTvQ4tS4qLrpxiQR5wn5r3ZZeLGZGAnPXc4RUuXDDqu",
  "key30": "29gowiNPN4p5rPqRT1XTKAgapXozk2vgzh2GYoQz5Ty3iMJHo4JuNJRvPz9ACh4Y4psfVryKDHivifNdS3vHxMFn",
  "key31": "zg3PUYQFtvqiL5jwHfbRjMpjqyM3ocKg1CUZRspnxLZgDo9Zd1GGFHo41ZVsS3N71Je35XhBhpYqJVZk1h3nKcp",
  "key32": "5e92UDcZUsPfNKVCy17Jvu1WTjbPoHT5acKgKEHNQWMb38WMwxMhEcPrwinGCEYX766DRXPJcVRGfYtHG9qyCsop",
  "key33": "41WxQf8QxpnMtTKqu2UNCCGNkcLnc69BCt9BdF48KJ5bo4U5AskcN5cQFyYnRSTgSqPXZjJt9Bha4nzdafXW7h3k",
  "key34": "31Gz5ySgPDpBrGQfvKAu2mKHusaMiKEKHyb77qT9HCV8GwwPNoFzZM3Yc9dVvaeM3kTu9R9F3rvJnnnpVtR3T1Bt",
  "key35": "2gg4n87m1NHJqg4Rrb6c9xzLuGpVz6CGqR61PXvdnUGaDD7iKe6Bt8MHtvPDBFLNDjM9yxRBuRXCkKpFi7zPLQWY",
  "key36": "uNp9JC26b3RoTZue1NBf9jLmPMEr7bm96WgvksFQ7NRegZyPpn91RFYegZNGKuqBnTvCBgYt6QeRuv9JH4q62W2",
  "key37": "4wP4b3uXEgsVV4ETa8GMcroYichGhBn47p44E9mctmnkYJvR9ap9C81XiyM7yWnosGv9JiVLKsxsxBfqJvKAbSKm",
  "key38": "5Cboqhigi2xFhaexY6VoF1avMWCUoMd6XzReiSgW4XKwaSj7VL9Z7XEkJNWx1zC8CwaqQT3cr666oUpSauUyxRTi",
  "key39": "4MBQUfogvY4kkaNjWJK9Ty3FUi6ik19vebvbRpMNBRJtPCTzcoPVenfCzgSFsyZDQEm7rVbdjXLBGyKHXgbBzhW7",
  "key40": "3BKifiLYyKM7XToSAQzYMRZx1KanrhLT2t3ttNC2pWE75s5mWZrVJULVPkndRwdJq2FjZEtPnp9qvXkUCLHfnPer",
  "key41": "2uwgJXkCS3uMRZih48UKBfNxGV8wuHSq95Wzuk1C2ScTJbWCFiUVqntvdsHen4sikqvP2FZRzfDVfBaP8NHxZUw",
  "key42": "5hC6XYyNS8UBtHtKfLfihAbAWe4gwFZiBWq29cZGGfr3EcfpR9uNVBwgLzGCW66Mga79h4bPe53ss2FFMgaw5qbv",
  "key43": "2VEYjnz3GvdUAkXcN3LJVaBhwwrBtXhYymwNsKtdYHp9qVoQD6nPGXsa7WMRg5ZyD3K5uC17AZPcc9wECHeVDfyW",
  "key44": "2R2j1PP9pvpUE6NoGpaykonxDbARUKWnUopLdkxxzGfPEQGrDiaTM2sNd36bEMAuSKQAo3htNKBLVvaWRYUfyZJ3",
  "key45": "3j7KpDPNcajpaufeq1d9hJDu6BYGBBjibitoKUKzwhivR2QeXN3KuRYfLZAmrpEYZpifZo4YDkSW5DMwW6SksRHE",
  "key46": "fJ8kuAuCHoF6uKL9ytviKrCWPvdU6kouWe4Ru5UiJG5FV3r6aJcUL1m9Y2HdGjGcM2uajQnENomBkR2reJP8CsR",
  "key47": "5iu15oS1k11AWEGWAXFf7r2qhGas4K2HpxxWVrHBEwE3yDfS1jEZ2m9gVwDgkjtv6bf6aYDVaYYTn637RNUxm57F",
  "key48": "3YFErYaxUNWAtF4MmVfUG1RZ6T1XPr2BpNTRuX97AcECUXig1wZtgdSq49XRxizVkV7uc4eFP8YgRZkwgmE2RH2f",
  "key49": "4yCVqGi4PG5XrgpQdUEEnEgdjXdoivf7cV2bbEQmKPtEmpXeiewmvKhgNHYtf4KQWWoveDWiZ22XoQw9C3Pr9pEu"
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
