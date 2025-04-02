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
    "4qSL1eh95jxAbbKEpgyiVJYNU2Ef2sq9bYVJioLVmpoTFWdthFHUyXSLDwy7Eaoq1t595JoHTtG1GchB3Q7MWME9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUe1Z1r8favmAv5r2KDgFz17BcXBdXixUpQFtyhsBtVbBbrToHyQDmASXavEucGLWN5t6UqEZoBrbG7PQZWwEk1",
  "key1": "477cwSzBBzSE2BrDbdeHUJTiZBP5nfZ7Vd8d59xdY5sV7TzTo8s4UH9HizWJgx5jLouizqHfbGPd7p9XaRCpt7s5",
  "key2": "54iNXGBB28g1Zd6KM1hzWo1ZK2782XgGTftMGW5nE9BZBYnMnmaDid88Qkah1xMXWyUmZ6JABfJEUq4bWJkK5J2W",
  "key3": "5n5KnbJyhkXmmHzV7YxfpbLYUXze2egnu53fsQHmwYPoKyTnQ5uHBC3CzKPDNCBhQNqVg8XgZJV6DSDDGp99zhzQ",
  "key4": "5wWWGeax44pvTDZYduDG7Gqyy4CmpZvFFKPFtwnFpUScbuUU74WYegcnwHrY9FbDyGjRyKvxQfbgkTMHqgZyXLwh",
  "key5": "2YNftrCGcPtQfpxbZsLnurcw3uBemJ3CMvWsJAaqM81HbMUWAQxWJmDFzppqUsTFNWwUXEmpjihmLL8oPGSWbwyU",
  "key6": "4fNyosrt1tW8xjMEKgvc5sW2PbDYxkpDnGb7Rkkmf6q95iPKbNn3jx2uJHYpMWGc8AgG9wKqVVCM4cBp9cUcSySa",
  "key7": "3b2SZyidC2quEjSboGwVBiJzE3R6a1K1wYhT2aY7vnMrafohGCs6JsxdLnA6zHgfDaLewKHrA7U7zwYeGUqCYxjs",
  "key8": "4VivfgCxzjCvg1bFtuD13crdXxSR88yTweHjRXiXTdZizMuzeoporXoHt6dQ2PLcpbAmsgkaek4QGPujoSguPCZ8",
  "key9": "2cm3YrrkHeWXt9GkH57zLgmcYT1QpF373uWFgCAaGEjPbDnPeg4bDNnEKTVHNvVTAh4n3RDFSDUSNHMCndtLeKX2",
  "key10": "65TcpoFySkE9uAGBcsyKPjL4HtzbFsrJxVRd4BkEZfddvQFt4WpMqtmCuXoRCvPPuZsw7AU9yuNexoeTFSLcQHzW",
  "key11": "4tV9ymCgdsx5zqb3SabX2Y48fYYbGaegDhY1ttXEQsTCZAaiaVcaUsH4RQyk7JFvtGmBiU6T6gLeiXHrgryo7AUM",
  "key12": "3QhpQtTH9Wk2jWfejhjGFt8TAUjKh4g7TAzz6qzoz8gQKgBu61HYoTdruC5675YLTGMNaZiPb1PptzHqvu4ZVQsK",
  "key13": "3Uwz7Lzsaz8iZcJJ1WQTWmNSLBb4XVs6Q8Kt3bVtsbXErz3KhDWH1tHC5gvRdvKisbHypnAGvVf14NfMGrMYhBgP",
  "key14": "5hpz2C3QXSGMR9bV84woJgejMy69TGzGj4ckGaAf3zmn8uYqnkzKPeVXomVyrdrDw49Nj7uBZn2epgu5he3XHbMs",
  "key15": "3xaA39RsgZnNxsZkEbzsMbU62Qy4jbspnnknVgDKRobdyXVxmCD39sh8Q6ZJUPKH5vfcpH1HW3gKQMfAMRhKRFaD",
  "key16": "3sS4ECZaiSqZbn7hz4tWuTkdgQSnN2j2jwGGYdrTEv4VWuS466HAaZMjKRw92Y5xNR7HWJjrUyyCxdGt9C5B6gCP",
  "key17": "3rPTmHLuYgCLqRur7ZDKGs7wCHpas13yFdpncdpCuQMfmvz4vg66RwCDhKbxtfUMUGjsMJae1uJP8cw8aZWBiBkM",
  "key18": "KsDxVQ695rPW2HfbgkqqMPdVvK3nwor45QHnPBa3wFqwWDMVciTKoHyjFtYEKC9KRBq3UeSBoHQyLdV2LmabVZJ",
  "key19": "F8NfXVN7f1F15Rki9XJNZdrCH8zP9UeKukzo9SjqiC6MKktbXQyC2gcNqhY3cynRRkeEJ3N5tDPPdeHu7142J18",
  "key20": "4FvPoK3xE3aBW1AzkjZprxtAzPaERv4vxwZvQACP9iErDXUPgUaepVdVwkgjwuJUa4TKG5ogKemFVMjrPEwgBPjy",
  "key21": "22usGgSqaM33hBzW6dB3yrh2VR4vFBBvdyogY7GXr9asMZMj1Ct8TrZ5ssiQhSsbmQHxZwZPNYxvyG95j1jFsoTr",
  "key22": "3E9vgoYAGCSJ1RPgvoujjoYRE8LfPgcGxGNNB8gLroMbQiypnVwusKg82Q3YL1snGoxWj7vWAkSrCcYKtHajwGWy",
  "key23": "2DGrYzhgHHSSAjXAh7pp9sBKE8Ef4rQYeuBYqNq5K9WSTLj4jLycqt8sLWuywJz194cGThTzvN6a7dknL2EwcDNi",
  "key24": "oKwens5cpzQnixyf5DbRvh3b65ttZLS2qdMYNoqDVfqx49BuHrNnhvUzPD3E9YtZW8bX7PfmZdvRX7ZktifNVhj",
  "key25": "29Y2ZthRTFB1HcAkoFMMChAQKv6xRFAZB9ZSeTzrt2En2MEL8GoDNZBwMAUBScoMGqMnWsmCd3YDcCGFjN86dvBB",
  "key26": "2aXqFpKWxcLkLi1uK18BjG61qojJtDRFkfNtDyxaDXvVG1FXfdFSoiL5hMbNm5yWKHVTa4anBqmRc6WiKvsSDQCK",
  "key27": "5wkxfTkGrFBMcwHPLKwExxNqkqSpi3KxbuYmVxHrAHJGmqboNZnw1x3gDCjG6NNrhgb1ap7PKnBJBcHHSixcrk3b",
  "key28": "5g7sUwqW9fHfgcaTat1wYsYtnLywWgnyZNvb71YKJJwH8piUfAaUPY34Pzao6mUCTFQXLZrg9Qw8crYiJeMgGof",
  "key29": "2LcdtbxYCGdPpgd1b1qDeZuxdkAjPf19zfNPxP95vcXcW2qzrZofdmzhfteNB6ceVgTFd8uhwRcJrJdy4w2ETMpD",
  "key30": "3jLy52pyzEyStj9Hm3vkZom9vVF5h8nG5mq8t3WrYZiVzf8i4osU6mmhYvPwJU4WCmtG2VZ8ppxMNYmtgNCbeJd3",
  "key31": "5Unj86bcdmiWbwBRcfRYySEyXj5TFaPtnobcFCoKZQwEjJyv2RJgMJQ4WacreB94iD33sSLLunF1rv1SRm5t3aQH",
  "key32": "5Wcv6kdAeVQKcAdecE2E1Z2mMSUDJVg3YG1qQg9P5i8pcW92cV3djdgkTRY8EyrmA2V1osYc2Yzh9XcMbNpZn7ce",
  "key33": "2nEMQk8ghr7reDNLbHa2846kgnhFn4DERHaiGn9sZ72UojGZjzLSoPURBxNT388umrAr3Hd2JeWbJmC3xYRPXRv9",
  "key34": "5JbmTTtCeqKHidS2PcwXrwg7brYyFoMbqAYNJo4BxRuwxAySRFQEEYf4JdpGmvCg4LkFqDFRDEGyCE23s8ZA5y1n",
  "key35": "2fsi1QEvyFQMz7Z2yv1YT3ymqiJkD12h38WzfMYayd4kaAxnPUSQ3UGFbHPMnxNuyLe4dQN8Wbo5veGpG2aXUqfc",
  "key36": "5ySVBWW5C2bjrs5u3chi5ykdBfw4CigVhh2KCTwjggo3tUme3LF3EK7V1wwWNaECbzQr3QnnWNZtnYQMDugq6kNZ",
  "key37": "5WiYQKufwQAZkre49n6aT3TtS2zYqcxfDW9E5JDKvbyaZeCuFJ28M1PomPg23oX2B8JqtBhjSCRNUg38zShnFzc3",
  "key38": "84fkVeu5ZWf7wE3vBPHBNKQTT1vDSJZWcbkjBXpFXKRRpbqEoqkNEgrhv9VtgY7KBZ3zoU8ifjHjMt73yH4v1Xp",
  "key39": "5d7f2ajTLCgLH9k3rzNg7SpXC93C9fWP5QjYbUGisDCQGSsRnwnZsjpfcqasJ4aPPVVWR2mVQTSDBtkFeCwh6n88",
  "key40": "4J7MHbsQee7GfEPLGoK2MMVaRghqQC3teKoXef9qisLGUtV6iGbQinNAZBMnBPMbxKuYGfefta3AFN1TxeNCgYxu",
  "key41": "64PGKqfWrP81UTyj7LyHdNbzGG5qVQna2bjUMSqCtk5CVtTjUjVLQ7vUnrTRbVSEWpA26aUsKQovgEz8vYQPpmr5",
  "key42": "4wpzk9Zu2UUiFrskmg675yj1u19FW8enA8sFjMkYUvW6kjykMMjJy6paapJXQmPmHpFPdcBeHF8LSqcJHZfFxppQ",
  "key43": "25n6QpT9bBJiYsMip4UHshxvwzZs18QPgJEYhughkRdbfZ7iwPYPMcUCfFySQRVtHTwez5g6VYdh75r6uGM9Xqrt",
  "key44": "4hNLC5qYyW8zsckaZa2nUpvPa5azcM6xAD1ahMWTEJ165qPZ7eicarhCxtSt1aKCYLt7wisncXPy8uCEXwzpetbG",
  "key45": "4gcYoEPm5qXUmyHBwQgGyWK5fkwGzWosQ1nZb7Ht6LVHNiMLuZ8SfbeURTcTRmGD94B2FFjcCXooiLt4jPDm5xvt",
  "key46": "4mk5DYYLonbVxNupzZSU7rnGXdhCE8Wn6q4CfyUyrcmF2Wt2UM9cNDP9J7xLeUTQCYjwCA3wWVQz36NbjAkdok4j"
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
