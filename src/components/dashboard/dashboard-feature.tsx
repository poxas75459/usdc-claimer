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
    "4vghLFGhSo1SYbd1qsrcKpBbtpHibVKPpgEjQegEZc2moAT8kK8h212dm9EY9M5Ke73112d2tPQ6XBogCoyiVDam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ij4w5yixV8AYMPBCPeFbq1HQPxTpTtqin6bV6eEvy4XNApSXh55LTQfcXnd8W1Dd5HqehXC5H4xUPWp8F7Eqg4b",
  "key1": "2HTwwcRyAzzrm1t3DiSfZf7TpcQZQThgsCpaEVYyt7wrkg7YNDhPBkwR8TXPBdKmtZ1x3HvXzyPYVS1Y6HJXCTmJ",
  "key2": "44tCvnqhWwTjYDw7gJshaWUhTEEZ3b2y7xjQ2ZKFfsmn2zmNdXTrFVaRec4qCtn7kXzSNVQVfsZ25arP3QAwRpsM",
  "key3": "5DPAjxce5JknVBE9bCvVJ54jW676aj1t12pcbfWhBcMkT9AVQfHRnsqznuZXVNP1M4hSx5DMrBdUMpnxp75dDkrX",
  "key4": "riN9WtgosJQdEsF5CPjoR1EjaMoRH92FdSfJMVFtpdMfvSNojwPGNhLpgPQY8TTN1SVmRQH6XWAHazL3nqbgHDe",
  "key5": "4Jb6GkdtBFvs9qwSpMJUGTuLbbwbVG2YjWqcbRGxTaF3fmX9WBvUXQiFnnEywCAoD1v3Kfu7dFoFb8bF9XeKL66z",
  "key6": "1YZJNfHhAaGzsMH14fNFX1sK4nMdRMWBnywrvFS3yvgNQeyP6soVGbJBMqqprG2yXf1zMvVsUSV76bS4LpXt1qm",
  "key7": "276WrovVQeiq9eLprUr4ik9Df8fyWN7k3DFX1JuoD3YpwuaLNqp3i5a2tpi3rhGpotLmWwYVr9sARK9vHxavYwUU",
  "key8": "3N1Pf2FTgCpU794F4ZBsduSb4anP4qX2Q9xgRBUjcFL8weWNn7souGKxF8Q7sZ4R5Sip3ENa8VULFb5YFbA4U6Pr",
  "key9": "2Aec8nKneay41N3oAVkqsp5CH3cP5YwVzY6NDUDDC1WLphtvS1bj7UPZ9NrxtKaQqww6hiRXnPXPquCceb9QTsVc",
  "key10": "56c8SneRAygYDUyRqDKQQFmz3naiwMZcgy2ADfWfwgXJYm6pDX3kdaW1zrxK4CRd84GsQN9Wf3Ws4KEYahvjdNGy",
  "key11": "4SqgjzMzU53j9UVzMFpAFzB4otbcFHXdGYz3w5o4rRFkcVEvfxA3Uux2PpDZfwTkGP1uu5mG2ssGzqYHz2fQ53Wz",
  "key12": "5yUeSjtHxFo2bpPnDyNgrCUnP9LLWi6YzmywUS5x9QQqAnrQjfygQ5y6kq4BaSrjQpWTv2cF2BxBCLbh22vHsWhV",
  "key13": "cvNJD9TbAgmSEgUTWW3rXvELTeRQE4ZkQJRpbRpwvFAdbYVK79DnrhrhtTPmUXvCSQ2U1GA63AXA659t9tdxLhi",
  "key14": "2URKX33ZsUPScP8VcZPZijB1TK5DjVaRazWfmXpBRqZWwNAVNGe53XXxXkqhLDtnemKBqfTWnXTPU7oLeQ4xd1qg",
  "key15": "22ZWLkxsSnygzRxaAFDoAhD3FzZnBbknYHy8mXV6uh2rK1AzqCMgzxJUHKc4y1Ux8mG5kpjL5EP7ymBnViuBcMyR",
  "key16": "5ECDZiFU8Qqm6i7Se2BG5guZhXNEV8nRNwNWittDir9HUust4jZDzWxccfwNk5sAEgb5K3aCWSe7TXFyMvNTB39u",
  "key17": "5yVXiy9azpbVQLLRGk3UTHPJNwWtjyfjFr6KtetL5AoX4Dd7jdHyZCYPf4S8V6LnASmZkEqGmVnqAHn1Ux2npApy",
  "key18": "2xX3kg2nLS2sBevhA1L8Tfa2uGtvasuUTCmLyEwRqVZ31PXP2unSQtXKqvWyzC1HmKjbbkmxGRDykWuUqAnT5Kxa",
  "key19": "3PMwrqKTmcvW2CJ1jn7xrZWShiG74zCyU8MfVUJdjTUegzzMmDthTBbWGjeSjhrmTnahKEapwZjzyhNKTbou5cwt",
  "key20": "653s4SokW3b9CDmMUkJhP6Gx7t3wV9ptxmJvAskc3hvPo2oZmpm1RgRQkRckLypVvQrAu13crq71ranMZXZFCBsj",
  "key21": "3fnYfikoerzVB4rb5mAQ5xawLiqtCBKrKZofHEMDTitjdXeDHUkRmd3URC8YjgrC6duMzCqxBy2xBzb5zWJq7FHP",
  "key22": "5uM9BJyHRUxVorWRmVSzokVdfYzTdzVqe4v7vTXZfPZfGph16rCboswLpUvGsCrA5p2F1xkuU2VE94zUaGQj6AH9",
  "key23": "2UJ7E7eAsfiwAUf271dHje7nhVrhPdBjgbeHBZf1fvWvsJVWjTJUwbjUVBymK3uztFuHGeuHbsXdGXmnyKaTNWJC",
  "key24": "5WHHwcTeJsPw5LnxoBL88sqmCmPWpDwArRPoyvcAxzfJEzKDq1Dj8WffjK62yuCo9zXimwtcAgTqscENALc9BhRa",
  "key25": "43rwaxFKXU7foY1nbyNWcQGMg7psfuXsFdcf27bhtjK4cetHadtGPJ4zyKdmBL7achfRZU35x8mUKQY82ZemsNKU",
  "key26": "5pBbuiMrVBhNbigb6MybGjVjAMjdiyGpa3AEKFdZXgx9LVmQ2oaVr33j8w9nkweT39tFRaYqGj5zWQNytXw3DSD9",
  "key27": "21toNNPPCdgo5Mk1fPTgM438Uq8CgqJY2r4z7z6Gf2Ubi1w95Vu7ZfEnoiWoeWkL3Q9zMoVbTKs9Uw5exa2S9tWy",
  "key28": "55RjGMLsWCoTH7oS2Zvb4uoXBjAJy6LPt3hsxWJUdpQzc4Lp1erLB4PUTx33guzf494sSeQPoSCJdhHahn2kQA25",
  "key29": "2LwH7dSXE7XGNtiMzRVyeYxPW1ryikLikSbk3LiE4LLWT9Dkqpv5F2ns9LTAWUeK8DMYfkLCMBmDeRGgwDg1dpHj",
  "key30": "5KqGFZNMRT2Mo1Dip4hHPyGtQH4t8iTbX9r2oaQgcsrgct8awM8928HEZrfQmeP2mZhuF7UDBx7YmQXyEm2n7Doy",
  "key31": "86E8NDBoaEHyJYUPkoHjjMeq6iSb8r7RDmMG89T5QwpoSYXpft6TJ2TVGbJCwPaRH5AvbfTbJAWcBPkSDv4329j",
  "key32": "33ejMrtga4AhtPZebWERH4RxuraM7cxbjaMVVoC1zpuSgvo8n3tbvjKjkRCzceDVgduqu6j76GtuBmJ54iusgWFt",
  "key33": "2Ly4o6kZnz13oc1RWw2NtL1MzJC7tq26sJNagW4ZrTSjndam8rjEcwciNFVYtz39yhxjeDjZVvkvP2gr7cdGcScW",
  "key34": "8gJMb6PT85PKANPBQY7nX22A1gfoyYy7m7ik5J5zKY3M1JweXotYXopN2dSuaVRJYduXXp8FTQ4BTBsLrP59V2h",
  "key35": "4UdoLSjzcdbsSD6iaBfex8uveJD3EAUp5p9Gw8aqjQTNjyGVBbnEhUPRVNhV1wFgv8SrLdKYfxzmsv4nvbfnq5NN",
  "key36": "2Audvce8gL1gxkubRT44bS5zZJaS1Tx9yNEPDtCk7pTo2WryUDHnmmVhFrGFgXc7dtYut9c5cSmLT37H8FrurJVG",
  "key37": "4h8ShqZQHBVsV8BS8WtyUWBXhx2YYnJURjDSU9N3YN3nYME1RbKjvuVJ59jBXc5mUsGLdEZrKtsdn7ornN9k3wkK",
  "key38": "4sWcMy64K2RkUR247nQWeFsznzYK1EtekAYwb549QJucB35M8N22yG7DYVm3hksigi5UKS3qqJWT7BJfhqsRQSJK",
  "key39": "2DxSFdZMePFzX57mKT1UCz5Qp3KujpQ1eSQxU17kQXZVPoZtJMzY4f4UB88QzJWk2oZn2RHfexVwYUM8uCRoLMZB",
  "key40": "4KaNTSC51UrqvxB8GN6q8BDjFJXxqmqGCkQ4z3mT7jSFt17PrmgZcKLL6ZNmWXrjpoa7nzsST28iwhKYcG2xzyxH",
  "key41": "4zQyGpnTKW75sZAufAXx67okvQ3rDaVthrXZcHqBdmkmaVHHaSMjfCqwDyLdZzEVoJAx7BEQeorny43tsMUuJHHh",
  "key42": "36jaRxJvZZGiHfMwY9Z4JwVJLPFtSwKmroR4D5ocoEpFsRjo9EyB4bTR7atTZFjLg73edi8tPfAhuCLhzXACwVZS",
  "key43": "5FdLGepKSPDafzrZ1CtWDC8eQ2jCPc3U14Ko5GPZX14eABTG1EYw2vtmMWsfktef4ZftYkfmkkjPg9eZW8zhm1BX",
  "key44": "381JYsFcgXJctNgCwzZS5nPmtNq58VKehzrn8h2tmvCAobfPxsCGkbSVUfbXLFvCV52RQBX25mRjDsWB3ZtHA1Qi"
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
