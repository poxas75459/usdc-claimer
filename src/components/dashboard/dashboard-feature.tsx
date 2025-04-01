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
    "VPTozHinokgG6bv29uMnmZhLGK7NGS4vuK8hEaxaS9xMnKjYqfkwcs5HCz1hTZjNLeg1RKyEiXYkNMaPkmuMNdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qR9NCUYbBE8gdnyoGasDgJzKrFmAtxELUS1djRAevaRuS82Qv6DPoVw2TN6wtDsZyJjdvqbtBiXvT7QVFhJk5Z",
  "key1": "5d3KZAFNDFWR11wP9acCTgYcvCnxjupESaieJxe9puoRhbD5h1E3oAsiYgUVMdxkgVFjkQVf2ZF3UZRr6VNoPDUu",
  "key2": "4WA65XptyqPMYWRWobtyhNMUzuw88z55AnmGPHxqvQ4bcboqDF91WnQkgEzMvw83jxwgoPuLpWeLLdSVSB2Uux5d",
  "key3": "4KkEzCiFemsaPs8bJNiHTy5XygtXD8Y4YtUvpwbUgoFhpqtB63hspQ6dk45NjmYwCpNYQaF6x2r6re8BDH5Z6NH6",
  "key4": "3MEWpRuvpXRBpod2SGieqtFora8YdtiV1jr7Uafx9zbQLAz3vebJtMEkHteumu6WgimG1ZFZn3Y6DMwpELzn4TY8",
  "key5": "2L2r5FuNUb2UAuF7HxTjaVeGt5tY6fS21QSYthK3PVk9ZJH1xpyFG8dqwcvKcuJcM8mnUYbNKS3TvJCZJfNZkpZR",
  "key6": "53cMm63HQBeTwUCvCuCC7LDnJXVXvmCDDmjTtTsUCxgo9BHfg6S6RqKeDaygWtxqsgCkbctG5bRmm5aKwEMr7WVi",
  "key7": "3FvVdNZRL2pDrLMkx7BRMF66wgN4pSo5PVYPJpi48JG55qVN1MN3WX9pLb4jocXbLruzuVLcrtMzHAuip4U1Bx4b",
  "key8": "bvvv72MHMRq4Fr2c7iaexivRAPesdQR2vLpCnhibb8aEvk6dAeuhVUw5ViUY2HU8G7cQNR31RUEws2PevXnNRuM",
  "key9": "4bJKe1BmjTZZHEn51pNdLZxN2E7Aq8qY4zDk9rcXZ9ii7XNXMSgo3iCZEXXHGyb77DTv7QBrLNnsbFAPHpNjBBrP",
  "key10": "4H8EAojLQ9kkDqj8dKkxK1ev5bH1JRiZzESZv6DHwViqKTSZREXFjSe5JAQqNDoGr3okWnQcTFkxUhiTwCQY5h2s",
  "key11": "RcFybFUf27UJnNHSJw31SLfTptekz9KfJEJ2TgWeKNuGrMQ7qTBw5febKwRD4z3rL3m4kKbbZmvXLHiiuXBiYAs",
  "key12": "2RhQJtqAQwpzYhL1HfhEYSDjCrHNsWxMDDhcenEMVeyVGRHUBaUxqifwy54qKbR2rEi1fZud38bDLrX5y9cF1rEr",
  "key13": "2Z2beP31gaMDZK2DagviGv3vkcPwQY53nfbPkLVEqFP9DrKQNrgUK44AJGMBTh587TQHV5qdykQ1p3WF2e9UMgDd",
  "key14": "3VkWsYuqjzEXmtbZ7s2im4e1aXvBR2SboDqdNrdcxyQUNT6kcEcMhE3LL9ARXaJvMVWsnJWRrvc4ztr41n4iDKCd",
  "key15": "q6d3mm21mfAbptbt4XeeHJD4noFtCkeJ8pVGMztdGUThhy5pf8xtZ6LbYc62NCE3cJJi1Umx1C4SKZsGQRtjp5H",
  "key16": "3j9xDomKSTH9vfEn47iboBoXSxJ1yX8PGAkY2tnR8BieiTAWBGDowCF2yXgJLZNe7EN2adb9DDe1JFPUN79LaVB3",
  "key17": "556arXLXXp3rvYQRzPmjSYuM8dqydmDtoXTHpJSqCHA5Jmh8YF6LXCZ6ZGfFrEz6Md2n1qjTLSUrkjygr7SWAnkb",
  "key18": "3oyuYHdpCGy5xjSLCfDdrWTCHHpXwEG2KYkxEcGwvfkBz3ZGVDgG5oGofQ3rC2Au8XnnNqEGDcwvUee8BqZEfxPk",
  "key19": "3hCFHakHZxF38gpDLyo3bysGkAkCjCp6BCvauusRFHYnxSzy1gYBrGUvfNi4w2u4FteoH1Qd27mX7CLezCSf54Lz",
  "key20": "3r46vPd73zaMZJv29WVhFzJXyPmUU9XgG5rv5bmw7zS9kRQ3n5cgKjj2pZPDd23iM9FZW3gvAbbbgBzQ3c9bsk9z",
  "key21": "3W2pSFbDKBxKP31he2cqYu1pSfMxJ5iBCXSDdteXrff9KCbAKLonJMGoR5JmDRVRUefgSfaHJKzkDXfwQiiC1C7t",
  "key22": "5Nkj5CsvJXCoPMRzvpcyuEL5yXtwPuLnXan3rzSiyEbfmteL9LicRvrPWhWkqSTMiX6sNmJhXQkWz8MoDVLru9jw",
  "key23": "5DgXX59ezktrb4T4pFgydaenBspTTMGygmk1X1RyQ3dJnYMPnToRwh4KcVHUsKKRoafFQy1U8wyiDdAkgU7pzTCL",
  "key24": "48244YcJdNKdStqyyJ8BVwuTXRX6s6rkr6ZrHU1wYZSCJJd2dsuEzNpD1qoVNK3ZQJoCUyugbHhW4UFaM7uWhGdr",
  "key25": "2gREeXY1dHDud3nC9encQzz549BjhPeocuAtTsJ8i3QaVcmjC4FyJikFWNC2GAQvS9EhEqSeVpA4J5bgV4Sd3Aoz",
  "key26": "4ZBYPD3gJqJCrvqaSx9DKo8ThNUN7QY9Qm89sqweVZgCPmRjLy9q5Z2wj3LWPXQZ9WqpCBF7dBGmYmgzg5L8D1NS",
  "key27": "25j5Jq5GuJUXDvXWy9TAzQxVekChjUZmB7oXJMLxUCWg6K2QtzX6ohVaso23518sbCKsCFNDJwVnFLFtsNBX5bxY",
  "key28": "4WrcAvmsLoXtK7hGixQd8Ji9HjAkaACknSQ3jdy7tQgFJAUxiFTfKiLKAhRcC1Br98moyzuC3gQ8TKrBwzCoSkV1",
  "key29": "4D3HscnFeDBmXG2XuoN4hxCSu6nAEXR3DQsmXpfgk4fLvBiHrX5e4koR55oiY65VDoE1YRg1EfN6JyNtaQc3Pq8q",
  "key30": "3Q29xad6SFhrXh1CdH2UyNkDUttfmymRBisGQ8MXRf2fdR5jgpAtPyY62WzRFqhn1uQTRHcGkKQ971xSZ4ArBYWP",
  "key31": "3BAhw1HGxq8XdzVaJhjvLvGp6GtmBcDjr5QuhSi5U9wydjRMzGHcpnxKA8m5BKNWmHCCLz6XD9UvnUS1DKNNCf7i",
  "key32": "2a1er7sS4BtSsGXURgHYD6nxqtYrHvo1yLFCLiZUp1pTDKngbEz7HgRCNYv4t3dkYcMNKYQZeFuNACHyKsbsbmJS",
  "key33": "3nd6n9As7cHYjjEPzLJcc7hKYJhm46o3dgRLt1kVQKjaG9y382Gk6oPdkQabwiTiTVQWXdKqv1uqtTVntp9GNr2p",
  "key34": "2qPmd9hHSzcP6Xjp96AcgqfDT22sQ84xhze4Qo2MVYWsaP7qCRF2g1o4dud8wPEMHsoLjAXQY8JBH9resV4VrDK3",
  "key35": "2NSxoxhKbL21jFc6hr2GCBG4YLg4kBS4Ze73aTEBchEPqvh3bgZWB8PDWTciMux7TWrDBeqgEbrSukbELcdi4WfY",
  "key36": "3ZDrqJXtbPa81xseQwiCqDjJWb56mMXfwxYS2B1jqosRvEGNgGzASGDa6ZvxE7H4E7Ni9qerCoSgiQxiiepr8Y7Z",
  "key37": "3vkzgFxfHpewhGfqiB1kmVNhx9ebEdABrjhk6xnddmBZ9L21tMR2RrfPZDK6CWEayKaWofSYsRaGFZMW5tfZbpSf",
  "key38": "445VQ46ixxeyq2Fay5Ge8WCDKmDgLgwnXxJhTDRN5Y4hhRuRV7Z2KfraRR94JXP8xFeLYF4UjVB8C6B6wC8qjF9i",
  "key39": "5CqyLHzCUhUDDUFjGMGG9jww9JzXwxf8qnxaeQNHWzNeiEFj5h1Wah1aHhxrrfbRu9GwQXkTVZU217E1RuCV2rgf",
  "key40": "2niUvGTb654uUvG1bqv5rKpNgvAjmmvhgoDAp7Z6vfMf8AM2dDfqXDsbvx4AKCgNP6uXbtmZ3fa2CBmERraMiuJc",
  "key41": "3kZzdzYNTH3jHZ9snyJVgm3m8nsRJBXYm2rU7cXNgCghDpQgP2HMFF99aTMLCLBEbobGrUSi8a1aYDfvekrn3nmX",
  "key42": "4tHByxmEym1KiT2aDR61KzRTi6zfnx7HQQN4ZG8T3H2mg7BTp7QsWppTKcJwEEVXgiZ1iKwomLX5H38BXEiYQfBD"
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
