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
    "3U9e9azXmi22UsTZuuHdEYi3y4DMFQB9c5QrHu7gZriHYWoZfp7PBsQqphxQrKXNez6JxEkF9bMPjEbxbbHfC6At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzDZZhwEpTQ9A9DSMRgrvKeht2Jtgt5kN9BeAuaGf6qc4e1ZZR46gM1iwyDkBoCedL2rwcE687skSYYgLaAmK8W",
  "key1": "3aWoyu19QgP4fuxPoy3bvVfSxsmQM4J9hvnJeJk4giZa3q95Ti9MKqisdXKJ1rGetByBT3KzT7Jbp9pDZpGxmoUW",
  "key2": "AqMB3CUx2FUMsVw6hjLTBAVnJzA6GyyZEy2sTc3VzAfe34zyM3aJtGjwAMXAb8jRpi2UJcsJSLYb1bMmQC9Yts6",
  "key3": "5rn448gArzdYp5NZjF4LodKy23oL3aAtALLWHYqdTHcTiigCt8vWnaN8miL9vBY9phkczZrnyBFmfuo5NdQJjdeb",
  "key4": "2hJW7g7fDYz5Anij8vdM6RsDsYvRSpYQNX7PKz4qWTXQUiCZU577uNV2JNRsi4rQQshvpqrGNr3XuzFkwgbgnfBc",
  "key5": "4pgqye2f3KfeBq6S5UvsVwExkxRB6UEnzpX2sMf2kKK6njXEHFU74JKr2rUUGnBGFQ8JDiqvNeJNj2EDbhqccSe4",
  "key6": "4tFff2oHn4wFoZaQg2oQLEHPh5zQmaavg6hgr2ZQAmmPSTwzD8veTDSn6qwaWqhH2JPqNGiXThFyYiCySM1PtfMP",
  "key7": "3FGMB4XZFwZLYQgG94sD4CxyjDU3CKRords8WLivGL7bad9BCPcv4LXz2WceZY6b8p272D1C5NRueETWD9xCxy3s",
  "key8": "KBRHgnTQWCrRXWGMdnV6tbjutMVS3s2SWh6zRP9k1ipbK8vcELY9uvSF8G6auBDzFKkvTnTCtpkhSL7FXfjvq9t",
  "key9": "5Hr9EvJkog8fVusNVwCSTugAT2kSj7NroHnxSanGNgYMuJQCbfzUinVNgcK8tHcNb5irEcnVdz1HTx6FhAV5Eu5B",
  "key10": "2W2R69Mg2BDDmuseDp8HkW3AD7M46CMmcCUNR1RYrm9Cy4F9qKbcwBPZyjKxoP6hGW5AqMR1gGU9JRFYCyPdjsVD",
  "key11": "4ibnKXZhXegSWAzgtKjohXEBwDM1fYFsvMnfuzgg3Duf5s3Cou2pzrVLaF6sB87n9AWsNxzYGbuxTAA35QXvDaJd",
  "key12": "5UR8fNxqDFvFc6aiuFCac4xqpcKfYnBn3H5ujkicP1pYYrAsW9cTVGW5kwpfLtQRJE3kPSPeEEkTKtzRbxx2bQLA",
  "key13": "5hPFQr8uCAAWvZqfGVYDmyJTttR1CbxStnUkucAX27WEeFDqQ5Fu5XRkUL9yewZPSkiTcHYV1KSfdvctWU3AbM6",
  "key14": "ahGJkWGxUNUF4J1zMdbBku1za773Go55K3vkobnnYsTA9AtnR1penoSvTy3RivD8iCrTGZdARMC4zXzp9FD6znf",
  "key15": "5g6pcS3mphY1JrQr4tZLLJcANF2nX4V4bx62vh6YikzKz58DBKsYHSMUHKjvaNtTDbXoAbvWRchfdRtNwfLmFTTv",
  "key16": "2tCKETD4iszCpVoMkHSyUszkiyknyAqiSEB2FBUgH19HuKifxW9KAbXaBqCSRjkzc8d9KD3rsojAJJuB5VTJshdt",
  "key17": "2dY4PWySz9GRtQsqwu3MEmfEhPRJawwdX2BpUwAvcMGen5nzKJb6yKPSC8Soe5rXyCGKntPZbBKSKvmYRWsJjrc3",
  "key18": "3HY1cGHQ6ehS7xj7yksUxoHRTNbML1aJH1uKpsmLGyu2Q3D3SkiK1o428hvNEc8fBhbJpq512UHyHJrYsAv19wK4",
  "key19": "9ozvV4XNBEZCffDpZ9LE82mxsdJSPeUgXuX5NmFY3REK86Bs71WYH3YuetCbcFgyFeHCBwi9QY8huYGPiuu5vZE",
  "key20": "2MH6XGP4e4PopXAczd2Lfi3hsdC1XCPx4H9XfBXqNLdgUHWQnKFM6JvGHj1qAXKuZpgofDR6bu1aAZaFKge6NU79",
  "key21": "5bRz6kqVFiVZ3rxKp89JwfQ8UeDtGasNZzoYJbPXdchFEWXwpC5QMUNroNydUzvRjFYpVArRtUuTbXRWSoXnQLJR",
  "key22": "dzqXjWik8rQEdSsN4xX9TqiruSSwPL4VVobfYBn4rPsCtBUJtokQRGVK7b9wxGb1KgDZqYvit8o1ftM4Sr8FKnU",
  "key23": "452sqMeDZojdReuyjxMdPC2xD27NdpSmVsKHLgyQMtVmoCBXxMDgHuzjvEZucaeGS3jgXGwh8L4asamU9UXdBcau",
  "key24": "3pbb1bnzxZcrcKvJreiobsiBdEk6de6K8VeMdypxqwzvRJn93Pi3gMnFeSs96Afc4oE3Nt5M3CWDbg3DahUGQJNn",
  "key25": "5qF2gdXFYZcC3kFCjtoDcBTbvB2WKPrF7B3PX3L6rmFgpwtYgpnBdPDBtgYbsrdA1oj2a8NoF6AEs11UiLBFKJzE",
  "key26": "45mGV3yk6N4FXDvriPufkg7ddbstF5DaYNH29Ca2XLSLuR3H5upTV3PKGsDN6n729EbUBvLHWbo98jz5v92QdnEh",
  "key27": "4eky4aTYq5qNtt2cj5Unvxz6zPjU1cNgQKqGYGPXXj3hhZZuabD2ywDVUsJ7VhuTCLk5frBsptec6omfXLG7KvXP",
  "key28": "5f7e89xkQjpL8irMKbGpSEiRcVhmGHf9MyHTrkC6dgiBTm1G69NCgMwa7846Q3Q5RJ6TUdm8CN6JZxWRyn2Q5BRr",
  "key29": "4GmrmCfBwzqin3ST8tc2kU13gw8gdwJTbMPA5b1rwAMbeLJDds2VDQaLmhkZQb9LHauA3hmTRudmCHxKKbDPXTzq",
  "key30": "4VUgkBJY7YHR5VCSEmm5E2Bz9CusZAv4k1jYwa7SiPQyKyjNnAhfa3antgZCYTvxmwJTCkVKQGDt2cDjCtTMZfY8",
  "key31": "23FMRAPcuboHwnNVjNfwNwsiW9MeT8CKcnPVj3f4JhE47uo4cwPziKpbLjVCm7GhHe8f9Ta8VjfKA31ZxamsAzKr",
  "key32": "3aTUQgJsAPJcx6qRQgqymEqPtyV9ZHqQhiNdQ9DrDcJwwT34TcQvj8jWkb7pfGhZqQs2W5Ko87NF69AECLUKLhQt",
  "key33": "31yGPfbf2iZMp29ScLCHfuVpwfai5FYRztZThcTBtFzex8x8XP1gqmvCRVez8ic6opJ8AvAaAkn1UCiBtnCmwPCW",
  "key34": "Tknz2FPm66ZFd1qaEBeiNQeWCQPG2CEkHRmhQLQbs4M2tLNss4s2iVUZRSgXXdKALmFNsVssvFu19MsbeJT2eHU",
  "key35": "29jQpJZC3iMbLBZMcMWhCVfEbj8qkp3uJmU71bBPgPkAqtxUiav63BVjmBvZcCFuJoi2bDLVTebVaXXo9Rg96CUw",
  "key36": "2HBvMFhAERJDgSVRo1gVcEFTZnHoaXcVY3cYFp9kmCB7wuMXx3wqeZCVeXRGbFveRMv1V8S4Xhx6HygjNqGyiMqm",
  "key37": "3UdjL6rsjetEYTogTx1yAr7EJXmaQHPpZFG6AY1uSssuxXnkCYnt3erasKY94JyUtpcQYhwS53YfnCiynwjYAb6h",
  "key38": "2MxUXZMTafFg2byLRB5CfNFmccPoPB9Y9t7GLJuS9pH8WGPT9B8hgayAAbXaFzSCSTMU2b6WnBrVwn8Gtxe8JXr4",
  "key39": "43CyWKuL4jTpGnG4AgGSCuNvXZFaFQw2FaF6iu5dPNLF5wZiqavTxgGJPhCdi5rVdtq3ESoajVMdrWjzRMQvhVs8",
  "key40": "3HVX2Eo7gyRF7CCu1228zFKySVeFjLQRm3ZMzmGhevKtD3scfwxBgfooF4Cmi2PVwvgv3tC17sc9quKc8fxNNKRX",
  "key41": "4yiRQRx4KPT5wY5NMbJESfiveS76TYNAUNETTQbkxPoETUzqqq9TAhaf2PHLWaaeGwvEyt33EYkn6o7HDkoXEJv7",
  "key42": "DQp3XCiwT9KSfHt2SdrkSjvuxNjr6uGfkUrmpgWzAAnccuKcTFN8z4YeAW1qyho5qMRjji6K4UCaQGuD6qjDgm3",
  "key43": "3JxbtCmLtUQxUU9aWpnWFKB71v5nYcFLGZqK57NjcaF6fKWroJ7Yv8BxPtqNtXUs9TTmZYGQvgfivJ5cDy6Vm1vy",
  "key44": "5An8ojwF6FafabD6ieYLbigWGyEP2wLAj21WdP12AJwJsL9bbbz4BxBGzYaEdGNqTaXqvCK2gTmQZZcLxSs68Vr3",
  "key45": "43uz7A5uAkVGMtFWgxay5DoqZgc5yDtu5W5MnFe7cG8g6q8GA7nT4bq2zCnwkhowftd46rjM3DBfyXymyLMqB3Hg",
  "key46": "3ma3WVpkH18MfdEa8dRUb1M6caR75wEmiYPcQgoCdehKvwNjM4iRLYFCBFoNQDUQ9c7pzeSa4NTHgx3S6H7pmhGG",
  "key47": "3j8dD1hK9NV97FBVYzjkbVgkxtbrgT9T2QUkyGjZTw1bc2jAkBC7fE9KFeT6dyk9JF2UnZQKfPdmx9jgXTaf3omq",
  "key48": "2rCJ8TABoMQ3PNtP4hMMgAPrwJ5AjVuwNe4Rtw8MzuJoikbQeAvSghy2sPRoNx3F6gybiSf2S7FM5GkFYfekzh3U"
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
