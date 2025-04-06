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
    "4BnVP5CzCMyZy74nM2XukEpsQRch25Ado2nbyH4uGfz4JQiZX4P2oNXDVFhJmNbr7wAaYhZvNp5Gyx3966s1apu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ue8D2e8eYyjn47Z6rjYSBBGH8tw6pKGaQDxheMi8HHHr6M46bez77KQw8zg2uD74GxZhtcFFCowRLahrzKwr2LD",
  "key1": "5t9vtRja1Y7pmQ1BbNahJJHktQJM9RLjJ1Ky331zjNUPRZZHb94JQEQac1QtWks46Th3NVUpTqRWHBuoPKkgPTLD",
  "key2": "3uVz96814nuW5nAwvZSKtUnXJMTJSch8rRuSybhgizdSSjegqHjs7jydPhaUQsQe6GRUaraTSwoeYzJjHL7kbL1E",
  "key3": "5Rd7o3kha8Smny19QPxj74c43pKYP6gtSLpZHP1PXmVkjY5DbXfo8BCjcHZT7mMP2FkmUSJK5EZSfoCQWHumN27S",
  "key4": "BTihAwHzK5DjF6J15nLziq76ZqJQt88WnxwaJZn1AvQSF9J772fJ121pZ78Kd7csoMW3j7w3W4M4gz9YbrTGBUf",
  "key5": "iLi5NiWEu7Z3tnGs99id1iEbYQhTEwEJkb5ZWFT1LeF1AjLvu9kPrDbfmtBJzpVTjMRejMkZCTjU1U5WLvx2P8k",
  "key6": "55srEyHhxzjZ29hp4C4vwPeuvTPVX6Mys8cLYANYjncUB7wZNmd6NLAFXWbqcYQafBGpEV6gYxsNssPjzdWCc83",
  "key7": "2hBryXhBKo3sSHkhWxWJVamopoUphFfftfqshVLiwZHiRRnERfhY5Q4AiB9FDwS8W7cQ1bmDNqjGFgFR7LzoYWXc",
  "key8": "L4J3vXZ8JeDUmCjjiek6TN5T8Jw8Yzpf1BJiWa28kimNtYs758PtncDgmoeagVc8sE8TqTqKLuTs2L5MzFpSN9W",
  "key9": "3okKEPRks4y66zjGzn7xP3jBzVKZXcsN7GGJUhEWZrxhnH7pv4x4oDevUcSc4rnMN3GyjohQjSf4cX15Q12AqZuS",
  "key10": "2K4ehuVvq1qQr4PwNzPYQXjF1GfBKtqa3T4atCDsDWP6q7JR8MWYRELs18e3sxCcqkTF3yYVjLsDv9wLHVNNdi4i",
  "key11": "3svacG8JogCzJHENU3vVX42vQwX8ePdHDuZBSLnPWyTpnERz4ULbYjYF2g6ppBJ4S69YEhpfDmJfTayrqVKKVyeh",
  "key12": "2T9mTuyUXeCu1wYtznZUPmSeFQGw6tpRLdHVfjCmsfLPGCK4tx6jK7P8X3Wp8Pdsos4opQV5HNedGQoSGJHzQkSq",
  "key13": "643jTbvRvdufQ4AJAZ4FDuvZvH9b9AbqZYY1fzh1ej8TUhgW5DLt1FqcBLfoPixDwLqZUHj5JGw6yrA6yXoGk7Ae",
  "key14": "5BygxtFCsiy5aDaRAiwf4P5nKD8TtiUqVsjrBtTM972ZoR46NJEjt4iEj3gA63EdCSqtf82YDGUAhbXWQiPp6Rr8",
  "key15": "2iRuy3zyyuwYxjRiX4VTRy9XBoeMpTMeCspSaG32DC6puqDw8GaW1SX9MbyTSrf1AwRsgi7kSbQVpNXpZCpzCwnL",
  "key16": "5yANnBaPj8LRjxh1UL6PSC6whiaM3o41z3wjQZq21QKfVuBeMteVXvNPFf1HtV4s8wrdoqz7hSkTk4jZFqCPfLFU",
  "key17": "AAr2EpS7RPbZ5wzxGaE35RGWZMNf989CJeJabpksDoBJGAiMBps21kfoh5qdecKTmQUKR6TvCHkzzV9CVaVmx8U",
  "key18": "3pBpAfhBxEkre86MJzCme5rqLA5kUyXJe9vnjT6ktDGa7cVzdCYrp17iqzgbLCVuFYvEjumJCwTYhxL9dBd1pRiY",
  "key19": "2bZQE9dDKk3eWiLuKnrNrq2oqrHGbBtd4abwL89wxLQc7pE361LkbSouTu8Srb4H44eRVwfuG7D8uho1UV7Sgey4",
  "key20": "2bVz8J6Cb2BZuLcUY22Rm2UkUhFgd9QQ4225GePWb3jKfkDcY2m38Xp5iXKQ1yARyRFMYhBTLqgpsE23rgBNqrfu",
  "key21": "5R9PPaQje4E4E4F8R8h76N1XN9Y7fwi2wGqLAScEYixRHopk3p7oLfnznaC7KiH1P5rxgQqswGUdyHVAvGt1ZVzi",
  "key22": "5jCMVNVe3e2gUR7j3333PTnRPCQ5hrTx1ppdgF17azMKD9c9qJgmXZMsjDAkY5ozeYstLXzNQBnHs5P2evqb3gx9",
  "key23": "4MwxCy1EC1q8FJMQBeHocLax9eqieYCzEtvXkTeAkdrPMBAqFLgSZi32GHTonVJS7YsYvDiSC8EdxFDgyv2H2Nm9",
  "key24": "4oGqNrm7vwwTgRsVsbChjVA2WiTnqmcXCpBeVufUYjF2cBB6bedDRiihTzhZc9SS7SJMyyQmUH213CFDm2KkKFTi",
  "key25": "2DzVCVm6Z5ZRFjq26vQmC8wtji6JTgfqc3HFMwxu6qmGLFMHjKREfmvZ9cXLNZFrRbs3qz1pUcA1wvvucGpVK3Nb",
  "key26": "57knGztwAuqESnohUjsxqaWQc6hhzKvKt4BF8zcrc9DZeTRieuq4niM2huabYGLwBnhj5fyNpNVAVa4dbgBiHwUD",
  "key27": "3HXXgzkkEVNwo9BYYpm9CHAFWRDxwzQ5yiFh6uvb5KmXF8U1XVgFsDmNJ2uenFEq2C7cGCaZcs3m5NvXvBom92Go",
  "key28": "z6dt1iJDzm4PK6ZvFRTjyKTFgMToQnNCdrkNrsaXUe117NVUbrJKPrUsciwiqs59fe6DrrC38a3RECcynKNmuEK",
  "key29": "4aZTrcs9MRALnQhUYmv6wRvwo6ioXv6tHQVftowfZhMjT2zaqJ2enfWLfxN92xt6AyP4EfBp5N2FhvxZ3AQwAbi4",
  "key30": "3L54HfEWz4jQvuuv3nprginFuyBsMW5LXZXYm5mzkPeUHiTWGCnyBVvHrjPAoVTpadM5KrUqQmeyzmfyjTnVgT17",
  "key31": "5qzLSmgbKreYREqoUDGG8b9CA8WySEy9CrXh2gK6MxKC2dsjPFP1e88mCv3FgGjdJBBTPnvxz3KdbZ7ZMuzq8YS5",
  "key32": "38Q8ZmNM6SFRtC81N2nmCMACCNCZetnusWMFe5R8ccyz182X4SxqEnRxZsGCKHdAHD3UKvaYtSXCB9PKw4nTSaoY",
  "key33": "4SkSmMsJRtRKHyhWkDz7SMNhqQaN1XQ5CeyXFBXjyDoKaZBLucycBUpfjhNTiHH5fU7Fk893jtAsCubitwALYrUw",
  "key34": "221w5r53apfnwNPsNAZF5jS6AUo4peGQq7jeXiNzf8p6Scs9ctCGC34S5p1FHodcdKhiYyX883iFdxTvxLKqNaER",
  "key35": "3cBssrC5Mi2spvFPmzYGc7iVe4JioFJzTDM6hY3YnFSCFEfDpD5vHmdrHw2MN9QiW5suVf3YXxraEVWcLyGt8ab2",
  "key36": "5Bmrax35cQYEKbyy9XDo56rqDoqdr6wuoGnygZkfDbB5MhvgVPKNmRA6b9pFsLethT2nhvpsnh8EZwtjjfgAKHKN",
  "key37": "2pagjrcXtYtQqPPj9XSEXeteXSadSytPZhBe89JSho1Dz4bpwyh4Z11jKvjMoAZEVXQZw9BhL35MybGthchMHCsb",
  "key38": "CB4EX7GyV6u6ir7ME47KsKY9DozbsdZUJ1SEMWMc7H5ZgmmBRAUWcU38WsR2Up8TQWCa5FKxBd1o431cYgV4U1Y",
  "key39": "5VqKbdz8NX89zx5ALkRLS7J8N5Sym6TrJ9Ed8jqwBkBZ2vuuXJi59EXoqHCAj6ktMK9ctPxzp47bAMWfWEaEs2a2",
  "key40": "4XsecbgFzrfDVoUMSAbf8Uc3RkZmRucLBKN9vFXsa2j6cywDdHPPXxpzVjnk4JNSSu457iZieYP35v2n1SmdyiAj",
  "key41": "5jhA3ajKGKQEfGpip652GAFCikKkXTpCSMvvBFMRn1iePyMnLGXZPNb48Ftf5bMkrxnysJiE6euffPTLyqFHjqs3",
  "key42": "5iNzLGG9vLFyP5sUgnbzQGVtNvNZWcm4mVFFVsNCnzVjzY8AE6uFLprazBBUoGZebnXsU4QHEaxnc4iZqNUoFst1"
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
