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
    "2muLNjTr1Nx8WPZHqTHNh6jDdVRatzDuGY9ktWkGuJyGQaLJyyF26iNs3HTF1sg7KnLJsmeF5hNfoBsPVVBuWinL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LG8kCvnvjFCUqRrKX8WMUmLJrPu1wpadZQUS1Kyi7vdPn6T2nNP1bswzaViK12JW5K1iVenuw576DyMzHmNx9tj",
  "key1": "3sFVuyrNz1bNinshnw7xMCGzBJ88xQvnkKxLTmcXtvwgFtZB6963JXW2wnJM8gRDzX71v9fwXgeeNKUbUDmcooSJ",
  "key2": "2qCxH1XN8mvUmopaaJZoGQHn9vPRKosKqhMJtGXZdXmCaXFy4cyYtnpSmd5NHX3xvP8h3L1Yuacaex5UPvzjNukG",
  "key3": "5VsSj7Li8nB8UymDV7RFKgDnTPk8ZV45NF6sHo9NcC1tNK8Asm2LDNsDj37bFXZn27AdRz2UUji12tpAdVRM1vRt",
  "key4": "4Mng7edCDpHNz4kjhqasE5Q5uDb4xVXLJWZq5q5R39Y1SbK1vU7jmjvnwohvhBLumNdBxcfV4V3bnAvGdgpMEsLY",
  "key5": "5Z3K2Li2dmjKT4DRK4ruNK8En5BGDxZpmzasuUqX3jxcuDLPWTxwSiNFXB6g68sA1CvPXcRDXNdwKD229pnZLgAs",
  "key6": "2QpiofQoa67BRE2GbCUmfF9PxKVPsP18J9NrNM3ki6BtnfohtDZXRYosEJ5m6QeJjPy1gWeP94VLtWNbnUVD3qkm",
  "key7": "58cbfNSudvVQcouLrnw3q8aGJmjytwigL2bHa1e3G3a31PFTwj2QsHdxF8XZXDTsf7BTaN5YETJwwPqvYtYZQpnd",
  "key8": "5RN9K65ptrp4m9M1u1wBrJpo3oB975ZkH2hHkz9odRTRBriYuNz2PujdDc4F3yneRpGD51uE168x2cwnCMeHFzQy",
  "key9": "3By2ghFnJxA69ZtG7tnAPZ5GysRwHzjB5dpdG9bXMxL7P8Q7Umop2aKtRxXL7YbkDQSZgE3GB5gVpfCXc5gKWh56",
  "key10": "5UjbsQpcL4UyEU54gtWPtbyQZsa6RFAPQdUdxZF7Bw4dR38YwvLTyFaF9JHqKFmBsgySnWteWyD5npMcyv5cArcx",
  "key11": "646YWzyemWYLPX6xuMoLrgJxc8LjLAtrogGrUEmzmSTjjLvEt4KpNvkFNDPbr8aTZBBEwZzqqdBrmnSuHfePWdYy",
  "key12": "XBiwBYAx1QcCrHq9yughQz3emvBoYM4nKDcGqywMhCbGmZaGBxycsG6BjmxMGcsHczWgCsEbo9s9S8RAWbTuAPv",
  "key13": "6NmGuHKez3uoEGzynu9aNGESLFzxmjtP7tqc47khyaYyc1LYW7aui1vzeykDbHS9P5Yymxp8x8rcyfdEyWWx3YJ",
  "key14": "tAKm6ZTAQHP6NYVYm2Zm7rUcPDxFfXuacwmer5KkofAEq2Z1BgPqdsVcn3D8Ksbn9qZfvBESmmkEYcQudjakcxE",
  "key15": "3vMF19Rp2xkWXNCEoh6qAK7tmZsaBDubKTWDvfUJXitGQXfn3z4VBaHz3g29PPnYBH76DYQ1vJFXyEgurXzCox7i",
  "key16": "Bo5RDm3wtPqHhTC5Nir4D7QSYoUsMy28QwYsW4pww8q2i2HquQWkSVdFwCQW5ErVQkvweCJTCyqKa9Xnb1mftvF",
  "key17": "HcQM8rrmXiM8e2HZEqA35qRBMU28zXA8d6K85CXmgQ4ocAAj11BjLUECnk9PCDwdqoo8dWWbBhY2UqWHHeFWi6w",
  "key18": "4wZqx61ttMjw4nZFqHRARUoExfSwdjhxTX9jiKBegwWFwN8JoDL3jh1hWByfM5GcSfX2UkJEAJahhEWcydfNLxsA",
  "key19": "5sZZqQoVYJzLudqxebdphsV7Zjsihf7HC4VxL3r77nimf5PM2mpg1VLyRL3d88cYvc49C3yibGceh26ZQgt2hTrF",
  "key20": "3GB8jPk4a9tCHWEVaixGMncWU5gJ42TB36XibyqHUxCCgL2UWzCoDo3rXZEW4pJiHb3tWwM23CzxUqWiYUqtczxt",
  "key21": "64QLrei6RRupEiRUCDveQZncYycGDgVfrwPkyivXkYvrS4GMaBLmoyxrGRRHv8SsfEwrxMuvZRb5njr9dRps5fed",
  "key22": "RLxPTJs8ynfMbbUqGxvnp6xEeRUTfe2S2XkrgEGz7hFoWJBBjrSiT9oP36srRh9c9am5unW6yjz26sSY1FmBDsS",
  "key23": "48FatWFsu26PCTJVekpZahqKsT7FP4uaUA9FTf75uXemsYp8pTeQXBcCrETo6kmJ2FKBTEjkN3rbtyWaNPQJDAui",
  "key24": "CMiVuQBh47SVhjbqQP19vx4AkMGuu9aR9xWwc7esoChag4vaq1eT7UAa6GZxG9pUVpYaY48B6zjt9euLZ9RTbcS",
  "key25": "4JSGv26zuwFXaVZkQPyUwzssSiEJYm2dp3pPbvxjNsMBBciQo3AoDsQWsyGR5ebjNF1LN9hj9irufEHXHDmmUEva",
  "key26": "2AhCjsqPd3furSMWTYXJut4an7R4AuTxmcUGq3SYZU8F3CigtypiXR5wmCoqjWDKTj1iVbCkUsMqgui2xyc6WoXK",
  "key27": "5jenf4qMUFRTDxq7TDPMmsPmsCGyozmfMKfLLdD2ZWhgqgRdS8eEiJnECgMSkoey6ARPmqpkh91CuxQWCiwhQnST",
  "key28": "5ghoVM9ALHDpirrt5voEWM8eeQdvSSaQVb9cDSMGHWepYC1dVzrBAavJK54g7RtpaXdXnV38EpckXTkvvkjxdmJS",
  "key29": "5EWMyiRvbZmv52V8xxQc6dTx6kUaLDgJaxTHJQBFUegv7rKqrQwMVjprGbLdEUG5N8NeftG1RyLxYUsin4MCP2Le",
  "key30": "3fPcG9i1mnBwpQ9WCMzncfUSEwsTGV9vFKkr5UT8PwJ6KRDdLHX4zTgNT8W3oMQy2g1LdDk99bB6h7SQ9ERponxy",
  "key31": "KpNkhBJUk848kLF3d1nLpi2D8BbZjpjwPUS4rmCg95Cy8GynBvV7fC1Wai3N9r5SRskxYFVjtp8po6YDTD7D4Yt",
  "key32": "zAPqZqiQMuKF9kh7vwUHzrdeszqYsz2T4XiNWXzqk7mRZeb2WYNHF14wJLU32nVh3r9SeHdMjY5JBDUvezRdNqP",
  "key33": "2Jb5yxURCmwwWmdMuqbV7nujHGo4BRDoKYEbGjtmWazE6EUuMxp7XJ2FG1K88HuMdcGUyLJq7E5W3sVKDZ3Vvvgu",
  "key34": "4yMFdRycQb9wLNh8jC9vJnNkTshEqh6bDnVcyyGA4T72vuFwWLdQXCqo89erWppb1KEScwoqwwbyXRMMZ6ePvDXD",
  "key35": "2sZE2N5vFR5Y5JCnHtuzcHj7922kUJwwPfTmhjymBvf4rNfeHZa82Yzm5yMT2hTTc5jCPGPEH6joodtSfieua47T",
  "key36": "EHE9PbA9r8sg9jaFXQCwE6UZzZpWy7sG9TxDaBpAoQgu2QWkpqQrS885QJCBnb2MgCoJ7tGRVMdyrXyLa1iazgM",
  "key37": "2LM5zZfJdPHTYXZAY2ZhDW4YPBh8ZePJ5MANsL4Bw9iAHFiZcodERzMq9CV6YGso1vXfQ3ASzfnGePedmf26h5u1",
  "key38": "5ZekQXPfeaGhRuGt4fs1gAoWtm1yyrmhY74D6EALXDr9E4iqubgR73Cfnb5mE6fcwomp628zzyS2bNVRpj5TMBVH",
  "key39": "4Zg1iH6qWqnq4Cco5qqwzASC9uxkZkEwX8AKV6e3mMBZo5CNpwyWvHjNA8dcogAdVQRv7guqMpewLGgjKEpnzq2K"
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
