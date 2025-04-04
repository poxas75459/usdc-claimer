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
    "5aHRXqEHRxe5RDJDMFZnzHaso9YkSRKwTqyS8FG5Xg8e2v7pWNrEchduspe16YyWgBd59u4w986ZXJ7k7AYtehzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adWDEgAYCss6VnscVr2hcjoLuTSLa9WZ9VNbGAtzPyR6X5s9DTo1ALqzs8wSPWVKv1PSBpWAcFupE9EpZ26P6vR",
  "key1": "5kokFxu2TxVxgj7f2njLmYjCVMD5zEB11TxDoPLBaKguuft95NqmjTMvUbJkbvD19BD3JMfKaunrSpskTJkeQnZ8",
  "key2": "2fVeF2DNiDmKCKmpog13ACoioFGw2Ziq8YfmGyhMRXXindu5mL4kYoTP1TyMojKZJkxGo3dzvywb1wcLZWDskESj",
  "key3": "bB2vKEnGGE6NRfemxhLtoZF47hTx7XG2LJts3EgBWof3S92ddAAkcc2zyeqAFpNFnHbpYMWvPNzpExfnK9zqYxy",
  "key4": "5p8gnh4yXdBNcrTX2AFon8GP7LNm5ZP87Ec2gN9rtuoG1ensHt3U5WsougbefsfhTWUVNKkvL3KdwT6P9qt8ivhA",
  "key5": "3gEx7Tzp2siFtsqH1LqoFCNKivdnSZNZam6cAESNG3J7QSjU2K1pfPLJVPsG1c3zag9QH8hg92ezRE45G1gCHc7J",
  "key6": "2djmbZaAiMQPxrwLRuCpz3WZs8ibXjz6aEQhVYy2csZ6fna8Qx2f9RBw3vvEWwDXkfYyTQDgk4i58b2yjYZVXeM",
  "key7": "5yLMvDQvXXmmwAeGYkjhdqqASvYbj9niz9YaMj8uDz1zhGXktCBwkTNaG9Nd7hv5JbQUQgFwDL73cNnk87YHHnPi",
  "key8": "5nRiFpvsvSkxVU9Gqednmq6YqtzUZe6k7zQaTq2STPd1ru1ioEogGYBSmRUYDdBA4ffKEizq3hc13MvM345dH3oD",
  "key9": "aoiySka2qoH52eNZxaurbV5WS5XRWAcYDamK2mFm3qzy5GUNCeKYjscjV9Qvni1Csp7DUcb5JLgWAM8YR3KfXJG",
  "key10": "2vHYJheFcYobnS56QKg4uQtu6boEvUQMZtxVdJq4JNykB41TaXerzfEw2CYY2EDzohtQyoMx2HB9AgYDXT6X3FN4",
  "key11": "3bQ1f5gSshYZGGAswzgo98ZkcuH2bqxuUD8kgWwdkTvQ97ubRFxVWoZmofJM8Q6Bx2eWRYs17ApnQEzctkSNKbxB",
  "key12": "obdJ2i1WdzTCQDg6jSQrLjuj5MAuHZHbPUfsJXAipzhCWy7UE9rcfTrhsNz5V2tYbMQEv2tSN5CkwgNVR8897De",
  "key13": "2Rz4v12r1sH73Ud5Qq616zwjRRWkVfLkK8pUbAUFFQZwoqxPMRAucgpwTDYnGJa87aeBXCGsyNpWRyYqrix1ggrE",
  "key14": "63hR3MnGrHUoaEfFU5hia4paRNnrNcxeWL5fZB79QB48oucYSZbKp95qop7Nkz6ezwu525sMm3yWzV9gcdVQC4QS",
  "key15": "34Cg8ACribRgpyaSJ9JZVbhuJvqo8vK3myiKaCeJWg1AXMqnVuKjcpSUoQuCec89hWu39QdgaSJwBGu54dZDoK3X",
  "key16": "5U9XgsuA5TtxTH9jBiaT2n2yHb3tmN4WHrSvVy6nP4phtVNToD5LJWj8z5McPf2yt1Xn5g1LbWbDzWYMyJkQsXKt",
  "key17": "3YREa4pFt9897MDfjpfypXbQLKKiWqrz5cNEnsdgMgc4qgVsxBEj26d64WTv41ttqzHJqbABfevNkXj1R8yfm8sv",
  "key18": "4TkVY74oq48v3H5gfZ5iMb3ZSarFCoM4ivE792dZGYWwpLx6Hd2QUcG1UbDVQxTmtMf7GJvHRMf8vqabimGWL1LR",
  "key19": "4Zzfpan2w9meFFGKqtyakooFSsKGmjA2VfBVzm6BdtWogGzKykfr9xoNaHyF2jw1EiXD4KcAAEhQykbQAE2Xb3R8",
  "key20": "2UT1NkKaWfu5D4AZMEyQ82RAsob9MDL8DAd8fUwdpKJpGT6uGC78ZZnxY5pCoxNRYrR881jpDo4Ync3D9Ww2Ga3g",
  "key21": "59eX94R1TgToAELiCfA1oX5Y6wQmHW28YoZBePZf7xFkF62nb8jx7nzf3jTS9be5NCr53wjSoRJpt64fSFMYdnyw",
  "key22": "3xvdKs1jDfdTtxXVmCTcwE4Kr8cSe2rN47gMuCNpTCMFAURbs8xokg4E8htUUismgizkbAF6J3Rndyye9FsUNjpv",
  "key23": "5R3Bq9RMU2t6Ppj6L4mYZqidtCNrLjQdULGd4DnuyAeC26JdK48ac6u7UB3sfErLJik5SHaCQWdeWXey5yhmQWcP",
  "key24": "2fSzoAEVSGWjyWrykKsaUE7PWZjszE2be763YYLa4gX4Dkrw6snArdv3gg4kf2Re1RcLLqBsXAJraLEzXtKayBQm",
  "key25": "25CD9ydveWcJSCQeSnx1otWsw6fABrBLDtryFWBR5LkphCQCM373s1eTBhTqgpfUVSn38hnFcB4ge2X3gjywC64y",
  "key26": "5gdNBeqEy3haU3eT8TaQf3Pr8UxyjMzanUueXqGVDb7D3XNkNAW2sEzSMTMr5GVyo7yusDAT84up4xRNcQViHCZs",
  "key27": "2iy6DCzXnkSoX4DNDAq5cSVAKDiraovPVnqBKg91TpnZZ85cpv39W8pPPWdbFqfjwwQJmBE4dG6JVjxuqnrLbZKv",
  "key28": "2ueUFXoPaF4CNt1wR2nhBDrFkjycnkebvZuDiTwGNPKFfJrkJwcCuqX1nt2t83WEfQSKDqFF9jeGEC296zbDhvdm",
  "key29": "2yaygF7rnvAW25jFD3r5SmA8updKkbUQYtVkZncHaPRkqYgE9uQ7gMomZXs78odd2435gFLYJZpgWRwFrjYj3ise",
  "key30": "4zRUugbey6npvr5urnFTbrnE5zPrNjBTNspCj2i71Ves1pgSLmkir4d8isFrMr2Y7hgNfcLzAWmDjQvTCe5x23Fo",
  "key31": "3BCnXqGtr3CdDAbpsxqGVkqE1v1jbYWJU2ZUtW9kaG7sugmbLLP6QWV1Z8DMS6DQ5iX8toAgeYvD5DyDcC5kpGb7",
  "key32": "9qhsun9qPJ3DYFhJ4bDy8zxTZeUriGPfA7KUV4Nd1DN12j3hhJmz4GiN3yGpRLhYDeQzZwTxnYABhh7UdAQeMe1",
  "key33": "23KRj44SR7Xhg1Kwg1fgt3ekVEia8WJTSnyWqRJ1dkBCXhhZo3aYPDjUZigVGUNfTcy5Ebk1ap19n84ARi9EBxek",
  "key34": "52VqoQREy1q95xCxL9qWB2TfDufja5SyLbpmoajV1VXk7cYrH8gp8ypjVRfM7xv2jeq1C5xnXUptN48Hj2jccKEu",
  "key35": "22PSAYpz5N3gdTViY92ogmWsBwmeN9kCLArvBWt1mPpEYHFd1bwAvugTDNJxYjLmDCTHL1ZUVcKeHiDfUTsSuNhv",
  "key36": "348jF6Fn6izXVbSw8bJxoLYtnE3aTZ6qscHy7UEhWheoMJCBerYtmvztDEqbmVN5gxd4dpLEDg9F6YVkKypaBJad",
  "key37": "2As2SzrKu4nUYVNKvFZVNU4bnnwSGja37qe7VJFCUMiebzMrYJZjSUz3kf4UHkiQN15Pn9rF6173vbjNiH41dnL5",
  "key38": "2umzPNZkjrn3hmpgzSJpP1a8tiLFN8WrtcxiFNWXpuHEUg8gBq8PxM24HXei9sXyAypetXPiUZELrbeseuzhaYiM",
  "key39": "5CWvHcuQMmdBFdqFDpWJnEhZBPgAuc5wu9zfxm81SniAi8LLixadRJAFcNXmsdAu6Lf2iBFCC3BmbybchDudjLvp"
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
