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
    "mMp4CKvdXasfHweSUKfFaMKpcfUc3BNJJxC6s23PE9GBoB7Cs4tLN5nPjd18AjQdwWu2p64MaMf2EaBRrz4x5n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMRqYGdn9Mn36VXqvJMVxuCCYKM6q86JwVRcDxWPx8RNxmoQKa8bKUV5mDBajUDHBanGCn1BJ9NBTsBaNdtNP8n",
  "key1": "2SKAnBCUtnUJ2BrTYcEcmhUgHdxYs4PJm5FgmkT8asdza8Syg2Hot1okApEFhopwcE4uQfB3susa5WDTfeMfXFUT",
  "key2": "2JUJ7GUZgjeYfyuGHuSD6qiHc8dHv4dwBuzgnZNRL4XEcP5Uhh6PwGvDeXfBggoTbUn533nQszJ1dM5oXyjKbXVw",
  "key3": "kPoQK4Z5b8i4yEWABrgGa5rVCqLabom2wAZF51zeRCQidySCfM8zcCdSUPNSWsEmPAngPgNYw3A6FKasge2YjiD",
  "key4": "3a9XXdMUyVUsofkr493CN31URBntzWm2CYSK7w2eGckMExsX2JHCcuQHZhpg67HMNzDr3QVBgWAuoyAZJp6t1t9m",
  "key5": "3CtvdikdxKEGKUXmryZY4ZMcecZQ9QcTJVA6AdqtHrzmfveFjWjXFhswsci9qHU2UWEEEfmujfshaGwVWRx8PrqV",
  "key6": "3bqcZ9Fwytco2b5P3eZzMRHG7yryAXjEhhaov36WsPwDpYHhRdot1xh99PcRDur8a92FvCjY5A7DsvNkmJBJzHPq",
  "key7": "r9YEJg8kqmDNfoXCSK2gidfds1oTmnMiTHaNwq7vfi2fJiyarAXdYZNYHj38aGFSjoT5urqy4HyPnq37nHkEhf4",
  "key8": "3FXX7RLZu1aJCh2rVGrfJyoPKu13FjAMVTmeZN277AXaUhx5m6pr2cGH58wQizQFBXXamqhE6chmeq9ixAsVfvsL",
  "key9": "4b2f63g5Siy9DVoEDj3QLCQPiMynEKoAXuQ6P8Ac1PRZi8QeRghckBdPnuj9sFCLByQEPMYg4AMbQan8GwcafXZ1",
  "key10": "5rJ66Jrzi3xofyV9pHggyUGSPjnNah159fSP1AVBDyHXTLVKRMxF45h7BQzzigqnsAFLNaUPDzWHgYoPpDBRRWDu",
  "key11": "2nUBWPpMKwvaFcrARV4EoeYxLKTFv39wdgxJ4hDfwZaUPV8xXG9HyNQm9NERW4MJeudvj3FnwHmAnkjSKRYXKHzn",
  "key12": "TvPFDz2yEVAbhbu5g1yKeqFWehN3yHFwh9sTyCAK1Rby2QWqqLFPDg85LLuW84kU2AMrhUkLamKrxbJ4RQH3euA",
  "key13": "38DpZLiSyULLCeWbr2yLBKNTE1JzZFNKDb2sgKrF2tSubbJvewShUHTBnsJWuqDnejiHst8Sn6rt5eQPTqM74VhR",
  "key14": "5HVXps4isGYK7s9c29J2ReULQN8YYrrLLPvPK6P9PVj47SvGUyAx4F9kzCPbTEF1W3GcPrQGZXoEnNRv2CNYNwMs",
  "key15": "2KiJ2e45AySb94hXA6tVum6GtmJFz3rUKQaxnBZ6tsKn5fVtbYEoxr3k1n4uHbUaX5hL1X4hMyxNB8bkimf8yzWy",
  "key16": "58bV6EPrFZ3v6DuFxPMjzAGsxxk9yafafnqcaUHAeyNB8LjegS4tQRqPtYnvNTLhYp4KArEbiXtvVppWQbDEjkBq",
  "key17": "sRQMviCiLHR6iYWUitiyEr84KUURTxg9rVeP2P3mAkKiTuvHmesJj55BjbTBTzrKwmoTag8PmqbTXniV7khdiL5",
  "key18": "GEQ7FrdosWmARKCkvH7yruVBZ8XbnConnPnfLcppAUYt6PW5FoD3bgrTKrgoz4mbEVCoHNEHATSjQxRsRXxGUAE",
  "key19": "5UVUC1Yby9i53DrrH77FgAoYDpfBE1r3vc1kDMfLaMm1QuNoYz1STZeBTAEn9zYNosjWEKTMFWM8VmaSoK2WvL6V",
  "key20": "3uHhr2bLXx4h6ESrs1GDr5kMs7wzSdStutPDGtWdcf8fenbZQddb75BqRFEogfWw6uaa5ZzNkARw47JQyoqxWxn",
  "key21": "4CwCpXqeDi78dduc2esCHb8FaHYsS4qXhRPBvWhqy67tVYg5mG6gWN2QbZGiepXpnUv8NG78NXtpn6KW7GKa31iS",
  "key22": "2J7aNftQe64FP7akeaK9uMGWw1Yn4wMbBdLWUNN1HTsaMKwc3XstJRKpanYAfPGeSgLAjBkHH8NZVqnoPLyQ1V3M",
  "key23": "2fpbpV8tXJPc6F2UuA9rA9REqDDqM1JBmraexMm1LpwfgfAEp48B9UoFiCWwvdtiNGbzBTFRiGKDyK3gWc4uNbMs",
  "key24": "ycrpMNC1c5VudrWLtHNVHLFCeG4zmVvDcR59NdNawCcMbHdMzBPWsJZm7UnEj5uKb2ESD98gNf8BdyGKJWkGGng",
  "key25": "4bFFfKRsPEicDDmmjJ5CfdMYkM3YjVyBZQQfxv1VzLJSQHUQCDRFLFUQa9T5QDxGXhs8wY24wN8hosTKWmS8r7Mm",
  "key26": "5ZLcJkAPR5ow6aND1GdXxD7zYNun1ixFnTuTDiLpxMzJQbNCYnkiL1RE2byhapvd5oB36Wijpk8B8gNnd9DBFd83",
  "key27": "22VajAbk9ffXcfGqqAafcAvvsjbwqvkTcvJhxcNzQQNEujan8sEKMY79jERh6MUQXdJzDCEjMstbWFNngRGJYFWf",
  "key28": "4KqvpkpUJpH4WLwYGjDBCjQKLdWdd9yQVYJkrBZwqKDB7M1aQHF1g9GoP1DyLvGWDsFXbaLfnPDXU4Z7ppCZ2Cmq",
  "key29": "3HUS5Wf9CW8CwN5fZx5fXHCUagk2W6RbNXycdMBbw4KfQYZ2QBM7uiqcHTF79zaakaBAjpkWF1eL3rqEhyJWAfP1",
  "key30": "3oV6rwPG2fXs9fJMYFvyPR2MWiPAf9JP7gRGeeSJJF8ZhAK6jGvfKAoKGJ9ihP4UmgMFnMWdFD243RUgu4WE1XGc",
  "key31": "4pwkvp87QUPeFnn3ea9p2i96gNR66f9PeLeUzKn7pozvPwgWUi4AGPrxdoSzErbrEv14jupZjxAUKRpWUoZbyiT7",
  "key32": "4ECUiCxEwEfLjKmAqCW4fLAJJriRod1oTecfQLfk97XXc6NT2TYQgaxxwmdqc2d7NzBPhSExChzwpZgwuTATcRBE",
  "key33": "3T68jmvA2vofNrZPbs846ZBUA6MVbmhuQtbWPQx9FeVdgzgCFVDMJBxH8XZo9F3vPYXWgUsYfF4eUB9DwssnmBfK",
  "key34": "4ptRubvUZKDj4fTJavoaoqUfou2gAkMNVoVAHFPMyttGpfwyzjNFNid8YnkTVorjQqYqWtkW3EVKCWT8sXAkVTcQ",
  "key35": "3eS8aWRkFhaifk1AeHDtsnoufta5K9BF2Qk82AVRHs4XhJB4bTv5dqaBoZvLGi56SznanpaDoSqeA3wnrCyhRFdH",
  "key36": "3KsMVMXSMQ73FEqUXL1yhb7MWpNkU6pgDRLK1jpAJ5Qdsy1waMXA1FwfuBMMK8jtWY9Eea1XhLQsPexEYN6Etnn2",
  "key37": "4ouRSb2bRWNZvDZwtjNMpBr9KmiXWocetntszbf7Ke99ZdFCarCGV8aKKb8C7krdBB5L9U6h89tv7JMU1Uzz1AKj",
  "key38": "2R5JWrrAX9Mf3Znynu4xozhtFFEJmsgmaQ2XJ6ZAEXy4n1aRFKvZV1Xz1TA1w2bnK9mmJapdZ7ccjpD9SkcruCH2",
  "key39": "9vjkWdw5oD8Jt75fJNGzurzip8G6Xqi3So7jQjKSGnhYayE789eeA5CqzANudSFPY9xkoFFsEixp4aPs8DVT51j",
  "key40": "1WZrkbNPbQ28xsGQ1MYsUnz7Dh3vB1jPiAhjAHyR23hEbcfsrkEbRtMW98c8pogZ4VkQG8Mxco3E3prZzPZ3CfL",
  "key41": "3fjBCoXsKXu7VgHFNtY6DHNb8fU9btMSoj1fAuJKBCx143qmiXsycFcPYKMYb9WjfQ3XX52GadbiJk6pusgkiATE",
  "key42": "5wy3bybGaHBh1FmojA4BaVkQeQGTXT7DvjPmwEHdv69AFbJfJJwQrTz6TpmfgG5VgkqVCEapCa7KMK8wNiJAjkvV",
  "key43": "443NsSmjqKKeA3ocWqvuMLzxepyviFHz62xBEN469VUFZnaVAJTuNG7mmWLBokugjGddEAkrDBuJRsppeysZ1jYF",
  "key44": "5kwqp2JC9HFXPtoaoyRzpn1kmQijsDfkxvju1fNxgGqPzRVrJLGbfF3KestJACJrWNCEcGkEuUBrm3gmg4e1q4gu"
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
