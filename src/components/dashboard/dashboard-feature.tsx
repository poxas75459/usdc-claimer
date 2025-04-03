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
    "5SZsHqfpWgVudP7NQe39EtTdWufH5YBhxaoQ852DJSzsdvpfbanQMSsLyXpGS7jieb9BJpS7uqVfm6jEpGwcuhhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQevCz3znFGC2sqYawHx1rceZXbftkDKxjxSEjryYaUeFB43cyPPccgWepS9FiNFjaAqdNvF1r3ivitE9FWADLF",
  "key1": "4SzGbpWQE472Zv2r9NwVB6F9ESbfL9g4TkH7Y53XxaJ7X5HS1N2iHE2MGneasfQvsRNyBgosmfW9oKbYqR8Vb28a",
  "key2": "wFZezxtqkYWksDrNxCqnx8mZgf5VmGcfvmdcE7cvQcjT4awg9Zmi5QwCy1mMYHzZjAfsSiosYU16RkrfpQSXcSK",
  "key3": "5CugJoJZBibsYbUcz9FfDQUTNJDGKmURDsMucrpRhdMxFWpi34mYhyUpYLxKA1sraTmKetRiZ8S38eNzX4gjLhYH",
  "key4": "3VQef9SD6PzcZrEBRYpt9F3qrXB4muC4Dnr7rmEeHU3mfHDWK4ohSFsFWud4XN7X5Y7S8nH3QW1FNGTag94WxJsC",
  "key5": "NkHRJJ7r5zb7M5x2fTyPHwkrqECNqvHFLngReQ7dLsJgaXYMVAy1phBmZtQdLTf2pDXH3bRjVCUaXVEtU2oTTH7",
  "key6": "5zUuV7jXtCDvxuXZhCRusspJqryPtF4HpuDRDhcu7eTvz2jSjQ9mqUufsaaHdHgBLRfk6qDuNdFEaFCAfSCqF8Du",
  "key7": "3wRxRfQegqzF1CopWE5NENpUBDbezJq8gzNmsFqkEfTcDgWJTQ5uGraCSbpYvuL39KweCAqhHe9Ejk646TbQu9B1",
  "key8": "5Do4fs27UGfrLzx7Mq3AuVttSy4Xbdz5hLfDaFj2S1BhtRjd9gooCuG4Fn2iEYihv2XBQmBfQLiSbGKqgvXQkwtt",
  "key9": "4Di9LDXGehYFYzjZaje3cWAN7L1qVcmv7y6HPEVpse7s8aLZQFBzEkwoEHq6SuGki3xVzywceBUB3z6FMVMh1gb",
  "key10": "gp9T22ZFYMCSD87YkX2QCsPocowrnYnnk8i7LepiM8PZAY9msr1HuJrUrK9xBX5GAcyoNXekv78aYmPtGGYSm2h",
  "key11": "eS1Wfw77ZdeLxd5f7GJkVMekTvLeWwJLMo5w2qpJbjoBshMNki79YMwMUdraJAUL3rvwSb9TP6RQiPUCjTEtVqA",
  "key12": "2Yi1QkGxYfaZvwBw67LkwCUStAsiCBM5KPZJoEtJq9e8kCWjASaDCzJimQ6kWDB7zX32hYVwFYUVh3mVCuWBGUnr",
  "key13": "2NcfYStieRiHPd49bWzPn6E1RKQo4Jz6L3BANSpMU2tXqvqb7gzq1iLZzfgkky77bMqfSurbMTveybkCxco7zxMT",
  "key14": "3NV1chkYdh78CUpqG4jzSTKLBqv27czY1U8JtW4BD4cfXxEFSitfCtuUX8kJGzCgPkRSFaowKq4XGL1GdZ4baVPR",
  "key15": "4U4sDQePpbnE62znaBdRBrARVsdVrvxi9wpSB96oUUWFmwiQFLXkqaRTMe56KQwt5gVo8fzDjApTPLRxia6LVjrU",
  "key16": "4iF4nD32QmiU27omyimXxb48CjUWdmwQRYnSSxYA1qJY6SQPSaB4vE2nb1norQCSfy1oKkGHqSAaGKURbCUWteZC",
  "key17": "3vADhdwgXCWy8NYtq7VdMov1zzYDeXH53BeZDn5tprzNxBcG9ts94vwr6kdCcj9MfGfJAeP7mxr8Am2aGQUY7iPo",
  "key18": "5AZxmnKzTkpqwh9LGRGmMNpjMgoP3DtN33wY1eQx17YK3WmowvzMXnZgjgGhxssFsXmRVPajhzvouH5bkAyfHExH",
  "key19": "2e9vjaV5cRynhmszDwG4RDknJ5y7NfY5B6eqFudKPFCnca2T2Q2HXRb3af53W1eSynA89Y63zGKfFqqQSW8kRnD7",
  "key20": "hV72ncje93hg1vmFin6Wf3ZJmiFacWteM3X5KL8mzf7skEKxYkxQSGnjTkKz69GvdYMVQZXn8t6kfxhkeEd1pBq",
  "key21": "4EgZLhXK6so78MbWpRoFiv7iQehydA63Nki9Q3RHyvbw5eAxL944kdskmTtJhng2tLa7DqKXQJ5MqrFe7gcfD57E",
  "key22": "4XJNyj7Zx65pEpryELvJTpgTYnVcgmn94JmzKpQq37E8mTrMQjTMY4YLN6A5WKrgot92BGmdDKoHwpZtrMp1ZnNb",
  "key23": "5PV6wpEKb22Yv9AdaJ3rUyuVj3v4ENgUC33rNRTmYePMsxjVvLVBFxj8JEJ8kS4z7g84wDHq7cyYAa98yzJUp8ya",
  "key24": "ieL17vCT2VVuKJpQfJUxvDcwrHgZUZ1KsW3ayPZ4rek1qJgjbQjcscXU5maH8VzpDTQw9v4zEj5UP7MDCakB1WE",
  "key25": "3T96Gztf9roXGrDtgsWi7Q4ukQWYTxeEBWtxr8PuZUhZWVAh3KmK8D2Yirw3p5mNWkmKbsDa8LYCYVYRbVAFGJis",
  "key26": "3sT2xxbS9GvvNtTFC36b4ucMbY7wsw7WVvfwBBDs5tBBLohS8RpHACbS9a4bghaM96eXjTvEK2YDiXcRe6rBUbo1",
  "key27": "3QU1pHMzfgsCa8Mbd38gNR1QTPbns8DWU37VZpzBTTEF4DPksGmMYL4BSirPsLrkVmkYB84kKQQ6ts1jeVz1dcyR",
  "key28": "59WsKCfQjDQCHd3vQ4pw4epA7dCEiFT1UYKF9KEjdvxdSSgGzDFU1spbzMvEEVDWfvJz8hGgo81rHGKDqKkhdpC4",
  "key29": "4pkuPQzKs2XkovUi6aWv46J45XobjMzmbHcfw45WfEUDHigdHqo4j8p9srL9ysf9dJdx4iZPDZUMyFR4D7v354rn",
  "key30": "3SPzHNJt64iy4eH9NoKFtoHpC6idTRytWME4ABNNqau2AdKmYhYihdDJjQXgBxgG7mho2uy8mb1aQ9FYZfA2kgHn",
  "key31": "5rcXw2PjDxHfRb76Dq1BG7YjR75KtH9skDwvMtFqxjwaRCAnTggePLmqtw9LyyR2rNyivtDoMfDnzYf52gv6F3ja",
  "key32": "54s5jA2Rcz6DuaYMJ38JZUtmSWos4DpAkPAenStRo9WWCe4kYGQmpjS7LyU3jDijRmoz8jahtW8oeJDZtykhY5GQ",
  "key33": "5rd2yq66FKk7nK2JyaurziL8vnk38XHwq9di1cRziQN1toXaMLWhmSDSypQsG8a2jcRN49XF5tEwsFZbQWkeWFYY",
  "key34": "3LjmKpHXDXUJtMzTJCCC3v7U8YA3PsT1ULUswEQLNdUh6prDMQsTKJBTHRmDZ3yTx3EwEveq4yM46oa8JXjZQL2g",
  "key35": "3hpM8KwM3LvnASq3zyKLowaHQRp9yjnpsAinmbnDjZaWgPh1Q4noZ2EcEtveiNcvtBaByyst9NGYokLUSAXXkvdj",
  "key36": "2VJNhJHBE9y6QZagVzcdKViC6Tn2fCD5NPSz9b5wj4tow6uDhkxzqBuF41m5eWM4jgeNqWeNKtSnhMxaswQFVSus",
  "key37": "2q927ej9L9TXtZBcBCuCXYF1639vnpP466ryXB5MW7iwb8T4So32XyXk5SBDGVJd53V9BauWMbBwC9ucvcw6REJS",
  "key38": "5ySQ9KeLgKmosgdBA3uf4rvwpT5R1qUQrukayKurQi6WpBVsqbN9t49YNrTq7nzmmknZGhUyP6wRiSBXfR3naGrG",
  "key39": "3yHK1SRUNsE3gudXqFoHpGCLK44DbafaMM1i9vvfawL9TtUwmxfEK9ZB637M1AHGMEPg6dWxp3EihK3W4CExTCgV",
  "key40": "P2s5PxtdyjCQFBrHf7BABtMgrTRWjYk8L3dhaQWyzdzRPM7cQM7xwkJo2BpCnGNPuarAzfU5tTYpF9nRNSo8LDe",
  "key41": "5kEh1LUzrUXJfXjp9RV64ZzPgVX82mbBcZMcuG3CbEJvmSeGJfUSzaXGQzRRAwCY3tiq1KJVuy8nAKT4iz9kudNh",
  "key42": "57Gu8jzk3YpjbWBA3NYWMvAzBSrQf47wU7mUZkCbDk2wfTjFwNQUuEUkNt9ZNhTWMDN8vkRoLPaABd1TRgaUERc7",
  "key43": "3wYCozmxeDk841GQvqXG2T4m8S6bpC8VWdto48kzep6vQEssa7nx1eCeTbmLxpJ7bi59gZVuZC3eJVwRcsWH4PBp",
  "key44": "J9qZRDsboSscC7iiLFTsQXrzSgXJPUAEUmVkigMQZZFcbCj7WowuA6nra5ZQ4ZKv7qdUojVRYK9hSaLFJ8QgKVL",
  "key45": "5x4R7pGqTr7XVqjRV94sDLxR7YKsxtiRd8FHnibt1ZY2goZSPZcFnY1VXW2qv3Pzw34bYyq5ECFvAPkvX9U88pis",
  "key46": "33RYbwTfonGHeQw8wUoALb8gmsB531NguRnfBbFHN7UX4N4hgdjKQrDa9DDzqvRCgC85ifXLxRrejdc4yAXFgyh3",
  "key47": "uGgAVuFDWskUvurUu8pMbT2VQgJwMEZySBM2pGBKgMR8kF2KZJsD4ytF8Steh2mwUpb5GChLPEveXXrqhLrVdMn",
  "key48": "2VuZSVKLLDQ8PBRcSYQedYEAqTqxkW8BdM9BtzYjNhbeHiq8NhEmHs5wkCUEJsmWMAkMijHhwDwfPvscUGM8z5tH",
  "key49": "MXYX5CEfQdpN4Tr9tMHgix46TLCRtrXrSrQrZbVJWssyyez7ESTdJjygpwntGee57sePdGQxzV6W3zsQSeJuxHw"
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
