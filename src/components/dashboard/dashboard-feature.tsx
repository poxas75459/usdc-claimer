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
    "52jM7g9pS3zDU696ZvMKZLaZFCyxSZHbRnVsbu3sPpGcEom4yiKEV1uUFQbHEbZJJXzNzEwQyCEKfAtqnzx3Xui5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coGq2Ay21P38K4CFkaJDkQeyAw2QCV2YQUpX29MDR3aShABDnAG8MrKSgzUhxohrVLsky8JDtVjZsiiPdWaUeKB",
  "key1": "2niyfuiDRyvWiCkrw4LNDtYfpB14NzsDQvJoWNSeCkMTbHfcqCmvdP5APpR4Sm8W3YG15s6sVv3tvzXjCeorS62G",
  "key2": "qrkiTX2gs9j7VmWDtwPp974sGgoXG9osS7dEZ5NXR7PUwPBk1PSKkztTS4ZW6HbCBv3dSLRmd3y4SzFfLQceZiC",
  "key3": "E67M8gvn1wrbXz58sAtZfhxLwrAnD7qzTiKyhRrGnn7YUenKXMEXLaqVSeennmEQaGaEYDXLp6uuoJL8KmLZTJQ",
  "key4": "4aHxkwxEJUYEC6MSQx8FPNRGpYLU8z3QwDfnnV56bga6uiCdyv9B5zBoJqimhZst7LB2Nhw3UMmHt39j7u2LaDKw",
  "key5": "sB5H5kdw1iLHeAcvV9AahR7ZP8C68GUTund7MenAQp9Y1fTMyJKHjpdsPQ3y66YDqhrXJUf4W76WmHUU3gbNDDL",
  "key6": "5coXJbjXyDh8SS3C8G8tJwu9boGkh3FZnuqffE3UPawQgBAocsLQYPs73Ne2Rq4QCbv1JXqv7AAc2T2TWFWijRmB",
  "key7": "2heTpWahADZakUhYv9AK6gfEJUExaBYdCR6qSnaDh9FQTU5Qe59wyXw6Mw5msgSkQFhPTmqzbShGd9yAfq6UnfMD",
  "key8": "4i7cgrdSwd3NagfxDTCZpJstZmUXLVduBcRCCtM3v9zYBD76e5noA7zFxofBSnHepWyoVKquzSNx6SkshrjXDUAb",
  "key9": "FqyMm5vWM74rttdGeBGbWagCRQYcXzaTJiyGn9sj3txGXaLzMMn6Q8Nc2NyQjqgG6LNfna5PLK6NcuzPnWqhg3y",
  "key10": "3XwWxTR1Y6qp4BDFybXwbpw6dobeXiraiswqhZC9DhQ3Q89Me7YHQAqR7wh8ubBtkhcBwH9Q6xF3tKjRVtNWqJAt",
  "key11": "3fqDS9LB8MrNo7xP21raAtLroxUn4PEQkifhGjiDuisFoVEjCA7mqFHvXUPYW5rvZss2EZN4RdKnxUtqyK7Waakj",
  "key12": "4XEJ3oUh28hboDkNyqJoGZ5eC9hArPvGoSHNZ7xogeqxmQgPMNtAmWYuihJtXWqQviWoNur2U5nAH2KCvUYETQjo",
  "key13": "5HHDbDmV69XQSk5gcmM4anZFtH2YYiksQATsfuE3BkoA3hE2bSAoRfGKzT7Qm1zLHxPC8BiJVHDvxW4mHnzrVpLo",
  "key14": "4tuqEGcBsFSLKar1ouwLcqqPv84byCNbdvAMTxR7iMqVJfm4sKS7RmBs2kqdaV1v5HMXGEvcsbVbzS88PfM3zVD8",
  "key15": "5CmHPFEDYXNbMM6riRDwJqxPf6pRXacAoradu97V9Fep7i7shEFLCjkrgi97Nmy6UY2TXSxyLLM4677p93QJ6B3d",
  "key16": "3NaZgsTmpgDuc72nhcQRjgEqzBZhzb1kR1X5fXvHsLQEWG5PkQ3bc79owHtkJa2vsrdf8PZCfMUvMNxBrHfdSaw2",
  "key17": "3HDARaD3veGY2ZPza8nk9nBWsiLrGxsNW77VsTeuFwRreTJ3c8MuvACSdoywEmxvcM7ipeFCFRvkh8S9vAB7fWwp",
  "key18": "KDKo2xson4PchRZHEJpfUqbEMWsw2V2Nk5W5tdZWiXfJCzfNeX6tTpKXRBEvEij11nAYqDJUPfARv3JEwcoRnWG",
  "key19": "2iHaHwD6tQuY8We5cmYPggNJYXVSCxNZvDwXqoAd3wHPE9b1WPw6YcwR16hnAyUtT6gpMskgj4KtcwNAP9pTQ73U",
  "key20": "3Uq5sipTXE6xTcdebq6uxiTt8FwRcuBaNBkeYURqMBoo5PhMSsBc6yDUqjjRteDAnLePGKBEGkhGCsUbjDMqWLvw",
  "key21": "4pKdKYrt1k39KZDdrLUqsiCnon8Vqx3tU2hGRS1Ec5TkJgnYomVsHjfdwgYLFeQRmn3caVG9sMvowEeXazKEeRSM",
  "key22": "373mj2p6rJdR99bsGFLibyyoFxBrvQTtb8PCjkoMDgFDfZX62G1eLPzDTi9sqcZysfjzgncNGHwwMzjRmYMDXiwG",
  "key23": "5jStaomJKGD3mnEfJW2exXCiyUFBBGfYTfycCq2ubZ4Cn5sx89N79qf3r1tYiTqqKYtcDkH4GX2xfb7C4zb53ARJ",
  "key24": "5kfLwVQkg2oaF7wYe176vDxceYVA11aJTCDhbrABXBthRzahpPKWUesZAkyoJjsWDPEppdjjFbpsVavBnFW5mW1y",
  "key25": "2mTkcsMUK8DF9EPRe12iDc8j8NkgcgRGZy1pnF7qbgDu1B3nPyJU5CJxYrZtfxBbkssjDdV2u6zZoWyrXoSvRMae",
  "key26": "H7pBk26LBGqBerNS1hbPvhsFhCrjrdbtSVgxcpFW1Nuoh9dJrEE3YR7sY5JndsPFGY7CpMu2PZ57RWZ2xRsXkhj",
  "key27": "5jodpYNxN7eHReD2urfFL6ofDRUKfMFdRpw16NsDN5fssCubossgN8hjHKDZADp8BCUhRWtsa8ko3RZoFzECj6q3",
  "key28": "4p9eRZLzCAuHAtKLKgP3YzZAZr9WTWhWMNvsnHqsgMqWEXS56UzFoHmp2ywGneA58ATy3RC2WBBZVnEYxaMB2DdH",
  "key29": "4BMKxcB4HZL8qEvmYviqZ3vjnMdkdSrYX9hxh93Rg4NHE6nW3yQ5f8nEXAtC8mep4GkNXUPac4mAX1i8cP7aE1jL",
  "key30": "5f2km9SL6xduj19cYRA4cavCPsLwoaTmZpbukDdGqwSXqEKwYZMXcZZjknUB59utL8qW7aqkGEXNeRH5TceJr1oJ",
  "key31": "iD1pUDpxmriUKopTUQ2C8eAkTsv3YQVod1Lanogn1EcLHd4iNF5PqxtVYAPutafKyDpjCGLiTYiiir8AsPDjigS",
  "key32": "373SB8m5gfkpobfziSEqgNph6JVnWURKKM8SEq5ppTo2bui3zcuXBeP3QSBbSk4pw65w4zvF6fdt15mbCZF1fR8V",
  "key33": "wmYJz2RBGL5phiErYEGPK11Xcuqc3vcJ19emJafdu7Le64YDrmcczUULKsoGAmTUSub5tBuPiRVhVWaBo9vAhad",
  "key34": "B5giJ3hQnHuX5CPvBcFmDozj9N2oXnDJUwCUWM6GFubRAQcbkzpn6a55LpfbamBC4npravAmoUG8rExkErXmogh",
  "key35": "5F1P9BitLQamY1SgWqsmKEEN5AJarGLLfvtcQjELVyPYQw2UfbpLumFFTZBK2E972re7RXYNErd9Upx6WKghejpr",
  "key36": "592nmXcxLHNMYtEA2bdtFKbWufamFeccYk6t3WmDb8c9kVgpBkmAgmMepWHDQm3L4zbxQ2gAtrF9avNQzf5Eg4P7",
  "key37": "2nSPTvAckcrwGKaYNBL1b2j7VnJn9nUyNacktgkucdAiaCgqYNry479eS1jjamk1WkP12iyhHr7MHkhBGVVQb9rT",
  "key38": "38knzLyetBC25keAkSu9vzUgpiLcKbCE85Wshcy4HtrKYfju6AEucS5QtGSvH1oSthXCio68d78ifvHRgx78qJmB",
  "key39": "WifcZi9gjBC9yTrVNsLJzZ3je5C3A9BEXx9JNhRrEUfAxZvzd5jRrHPLpMLZuWQaDiqJMpHN13YiCBeWMJusn3v",
  "key40": "MoWJFr8Q1tGcLoWhZV4kRgJMRokcH2qwrzvJ8ZiqtxQ2kTC12mBhWLjTMmM5ND3eqVChUwbxkVPuzxzWa4hCdSj",
  "key41": "4Quq6iLMmBiaZeRC2hrGYy9vPBLNToSz2US3XFPbP4kjEDufhFessPUF1Jh7xmF4NCJYDv4J2SX4jwDRiEREhcG9",
  "key42": "32iXDYqMGjnsQXfE65PsEV7magbT8Hja2J9MCm3C9JtBbYRA92cnLdsV75eDqHcFZzDCGgFUEtks4t1UfVapHiiU",
  "key43": "3X6LvRzF3ZowRYxM1PCHwApMs2F9wCykwLtooZKtEZfC7w8br7WAYd8GD3EJcms22WaaXfUB6tFur2hbLwUB5ERw",
  "key44": "3YpNU5gFwKPmvMnj6pWpySTz6pknRSroEgfein7oFFk5bQH4yqbFKMAKFjpqC7gmUEpJuV8nRNYdLiU7aP97bDjp",
  "key45": "2RX7Fc7bRHxr87m79zdHrrYzboUCXVQ8GuBQSR4XrojDsQTJegw7gzFNoyH4LcWuDdmZPKuyKfXoBZ4uEqXmQViJ",
  "key46": "52HPWpWdRrCeTyFGj1ABx9nLco9hZvnBLCXSfoDWSE6cbSbxPE4DHEi8yVnbngZNWwkrfH8C9YYb1Hb2HYhbo5Qi"
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
