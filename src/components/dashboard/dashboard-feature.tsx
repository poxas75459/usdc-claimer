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
    "2Gu25eXTtsYKmkTLXGryCtrVm8jnVkBqZ4j48deG13RpycF7MEV3u8ivR9EkhwtK8EX5b3BUfhqYshNgi9nrkuWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37S64fCMuUSNwjLQK8besHPXozBdtEdueGjFipRg3dsP9bGngsU2jXyNq5Gr9CmGMmhNxZKT4KbAgyevu9iY5xy8",
  "key1": "3gufVmaQCj26hFqNvmyCFRrhASXRkw7EGqTd4iaZDr6EZjM2KEijkRSkWkmnTSE7uKLMd3FeuunCng8pxUqrQrHH",
  "key2": "pU73Mx53P4R27nzHxSm92fgJbvYF6uKLdT3hiNhXTRWKT99mqqW8vuQiMxwFPMCfjiMKffphDL6bKppxqfDaoaC",
  "key3": "5eJhPkjznzb6ec8stv5xzkzpCLcYE9tfxTjDL2p8eMKxF7D5HtTxbfhpon7syLoyNYbRUX1E9TpUmDGoNEwwWTdR",
  "key4": "5VwwBrKqPpe493J9epDFvg2j1PbycJzc33QkawjJvi7Mxdhrh8ZTWGyRfXCdK8AjwMVEv3QuLgsnwurdH3StGkrX",
  "key5": "5gwgyce9w3u6tmmHL2mQ9yzJmtbp4Zix7YXkPQxSBBg5PG8crED2ofppNUUUhbR2mkjzVgvZg8KPfKziDbL6Zdr7",
  "key6": "4GZhdfhAfMrnbj7V3XK5fCwpVC1oXpb6m24e3VEkSUxyB73dHSUNWPtojaMAGUtZeu4xaCAdtFEw16VrDbDMKdTm",
  "key7": "5nqvDJwJ1brweL2qPszMTXnaKuwNzHSUgCtkYMxG7cuDmZg6rZC4AfuLWZLQuD5s7XFVyTvtddCc6zGRzAohnBLY",
  "key8": "3YxPz4MqycGBGc4dM5AJBQqQfbRuk1V9g6d6ixjmdDEzAPXKFAESqaWDkHR8N5W4S5vX6hiLPw8GMzQninxJwY3",
  "key9": "3FfCRA4HGJcS4F6Lb9hBdW5wC2BcND5DzRCUd2a8Dt54fhDX1s7qma7kGERwn46ZbG9BtVpZNcHK9ykjnGL1KdKb",
  "key10": "5ziZeV8huE68Q77Wsmu5FDSwTPFMiXWLFAqC4U8eePAAFTp1aSX6ut41RZiWEzxPukVuGPEbyuzkD4c5ELoDAxNR",
  "key11": "5phKHp7HthkTUa73qLFSuXPTvpFV4AEzfoVRN8vRDj4vrfNzo4fKJMgt9jdobB8ySbB61Wwh7dpdiL2Fe7DAGQ23",
  "key12": "2RqWZqGn136d1NogYsZPNRFu8k98FkLeqmhj7QWLFJ2PExRQYnLWfv9sWS4F9LDFzLCN3TMm1Sm8Ece1aK6XECL7",
  "key13": "3Su9dwS23ubQHsXa2jsQuQSmSw146nv81SME8vHqFmeFdH7UaRLRjzkmgbvicVqNPdd4R5EL2EjyzwEw3hDL7LNe",
  "key14": "3b4oN9MNdpR5vPXpcm9bgGy3AnRhXpWn42MCbQQtwavEa3KE3ndYnuKeX6GgP2k9F5EadsA2mSuUJAs1bhzY17Ae",
  "key15": "4DUPFR54iEuSdgMctb2mJMPgGvBtViPYqEVeCePoipJv1XmTfcxVhmypkrmvNzymCQ3CbpzW7L5DkfUX28s95khw",
  "key16": "5bKXyzqTLs2DShMLYH81YV5equxtaeBKKBrzzKpkPDkWRMWp2hDdgLXzu2pyzW2hCQGeAYvAao7xs4QiaVn4C4Ri",
  "key17": "HkMXJ2LbpkP8LdzcPyw49wAXSu6vtgmP1GJ19Zeciq5bDNEjHo74Bqp8znKNnaExo9jU4Q5WKRgcAqimVm4mfCP",
  "key18": "47bYoWWJoTMrctvWG3QBH5ZCkhxh9VrbsJxFFt8Ksi2bo7ruFNvf9nKWbEoZGTzGZkF2cUBLdPqbSHjPHdkYdtY7",
  "key19": "2T9QnGkg1uZQj5difSedd5M1c643e95PPZtCqiY6pgKCLebNWnmbTm2goebBctbcqz3eGXv6nUWEpYXSfGjdd4KH",
  "key20": "5ND9spAYTtQ8u6fZ5oLWSfqqngFwwEymLBWwFSnTrWdeJhjrWJipJt6NiVihGxiRfoyvpsqPpqpPUBFVZZedRbEo",
  "key21": "35SiksvkdF11dQivacdSw91EHLUwVr81KB6xF2sjtT8ss3kj66dnX5GAXson5RFY2NsHJWgtiuUrJuj17S9YwoYX",
  "key22": "5eDv9rDLwKQnAPZRXsmqY7rcq51sdPERLmKPozFHex6xj9xHXHgZNAYM6edYgEUpNTCBK6RPtSmshRbzExpnX3YC",
  "key23": "644zCusTyssXnWaW3CA4z6227fnutNnGk7Lxw14P67fAVf1nEgoRZjTz3VfxrT2R2oyGnRN9mCRXPM25USz9xRSB",
  "key24": "4h6NLm6eWirCN3s4hEyhCL5aVC3qbpbw97SrxSLRBuBAeahUG4bwxtEnhw8h4SXu3fZcDRaK7yaUEoLXg4VJJrri",
  "key25": "4JSxpMY8ckiQvc5iGHLpAFmC1BMCRB8WZE36S4qoXSNiKHGNM93u2c6WKhmLteh9KYDqyTiesa5EWCCjfpjZJewX",
  "key26": "3tuB5VcpV5joKEHTLBvoMUK6nc4d2jemz8kL7JmdXNNagAvr2DL5g2K5JkGLWrRQJzBxXfuhd6DpZgaGEqBpHLDw",
  "key27": "5fm6GmrWhD9Y3SGUmQARX1SFPrkcsdjv8DRfAW9ve4czpwurbm91DRpwnMb9DkgfxnuvEHjC798oSB1JWg367mRW",
  "key28": "4cBL31mKWpDyiu2wGchYTTGKhGTCjoBaMQH5ADXoM3ySPkZi7SsFnngBmdBNWuHZYzuDUkQoabSsx5G6GVHBNW7M",
  "key29": "55bd6FhQZvWLUqvCdb66dhENwsaRx3RBs2SZj6GgajmYM6gnQKnnSH2v8QRzZ2XdPDPEsNG5VVs6PzuxLwuihh2A",
  "key30": "4LiDwBNfaGfT8x2ePJz2HV79d6iMApzqbLt4JQVqe23h6ecs3pxKmHqW7QYkezR2jtnq3BSSJyRmvWwjxAmnLRvm",
  "key31": "qXEDFAwAZy46S3cDHoHKKixBfTUtXzkKF8rGcjKbgaVbDPWtYJyQXac33Pc1FZCsksZTeRoth6o3FtRAw333vgz",
  "key32": "2pAopygne9DEdh46ggjbQYFtGYHxKJBC5QcWQQXNuBzP4BQKBdj1aqAyhdHfosdeKnkvt2DFCDXuw21jYq1ZKPm8",
  "key33": "4nhX4xf7z7hFxNYW4zhmZoDAmTWqz76KmBFjPpQQQ8akLTFaYecyxT9hFVKTyRFFwJPBtA7a7ZKGkaFeUv2eEsvY",
  "key34": "24zLoFx4dMn6uQPHmFPFP5SUS5oWzSXkPmNYWbVMD1xn47mqAwUvxBLPkj4cZT2gcZAj5bZVrAy9r5L4tn6XAKYc",
  "key35": "43zMrmfTeS197xt8XxiZQarhj8Bb9Y4uRsMa3NUh6tdibWXLtRkFzZE9CcqDgTNVwToRxEdhYZ3RKqCauFxxY99n",
  "key36": "3WBQqEvzCYZ5wfwaAp8v4Td1YhCmm7RowPJvefJSt9855Gr31Go2JL54WptVhPsY7z7MHYiY7HaPwhvCoSuLT9q3"
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
