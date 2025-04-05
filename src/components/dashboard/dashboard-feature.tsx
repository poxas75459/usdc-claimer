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
    "4KfmYgGAdWCKngSsg4wLgHxAtfnxoSxFxpZK84NPccksGNgwMBdHyUeTBhyASS69kbjpP3VfviSt12o5dDLKfjnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHvB4U5bdZboBrsMKf3aDAMmT1qyrcqRK97pBFuwGur2RviJurt2ps3WiPchUTvDg4793DfeNZfKwYUHgbL2LPm",
  "key1": "3iwvcGVfiD6hMAR2ox6iXcXL7CJfgBvWsvPeGJJqb9yZQyeFc8YRCnGcGEH3FHQgGP72cYMUpjZbxa5TiC78DviK",
  "key2": "514hxUF38G8XbpwhTqDXaXsL4TrVHgW2iPeKDqiMVVVretywZRRXKCLVqdbpAE5pGoTEregaJ3BRb2ZzTYDUS6as",
  "key3": "5gDAKPVHuiK9Bwuiwius5nMt9rnJz6GZf7DduFfCCrjKoVqxXFLaDTbYUirfG3EB7Vo1Cqi4Wc983gJJSVb38Yjm",
  "key4": "5bQpNBtCFZ5CvsNmcndYze6xoFSMmnCn5LUohGVSE4q5gZQ3DK2QFsh8M8ttEZ2TcT9WQhyjGjFFAzH87rGd3xFS",
  "key5": "5krP6QSKrS33a8CsuYDRugzJ6LqBTTNGTKBMCszvG8jBYAr3zxFabtsTbExCF6hjQSWRdLvYDuhC7DG55SMaCJYW",
  "key6": "3AuUwAFT6gBPEoWEQ3TnCEeQr66WvBiQvoseUyjG2sKckPLqfoD9uyd5BBBJhNSpR7C6SydVeBpqk2PK7z3pWtZD",
  "key7": "4fyrBCvbVQ6PfGJyrqRbZ9QEjX2BasgDrjrGNFGfBfrTLmaC4Yc5YY3CgFncSNZNbUfy7GfXWPU7x14GX3CwfhYc",
  "key8": "3MuPE59gmGrDoev4SeqXFhRVCuCmwRyNDcBJCSV5bJyonJUrVUE8xzso6RM6fQd84Yi9jic2B11e39DHq5ABmfqb",
  "key9": "TFBoGiRQ782UcgxPzWiMxjLc2LAVmK5Y7KupJXfpZJ2NffXSQ9zYND3eudHX7mCGxveiULm29N2rEMMaT4Ck3yx",
  "key10": "4KX7q9WcdGNrcSh9UNpkBDnp3WCi5QwWW7RC4FYkUVaq3VGJkKrorVheruH4SvYraong55JZDm472BTCos43Z8e4",
  "key11": "5P1bUeQWHseCxhMrf7yK6tLpBpL2TMD64EF51bgwe6ngh2pz7jwkWTkhyNgzhPTwCvZtEKNHJjv3DWnWMKshQGD7",
  "key12": "61JPjgyAuLhtSTrLZAf7CBjF2GPF11FcZ3c3xGVd5DHG4FwaXjKyxXpQK9cDEebkerGXzFNtuSUD4EVCPb7gX37E",
  "key13": "3gWAmExVrUQAMtNvRuV8wdGtn6q1qVfxWyeS7TaUZvNnc5fqFrXyoBgnffsopgPcJYMciGN689jM7TmF5nAWBYSM",
  "key14": "4eix4aHqcW7BjEWhEmM2VLjBvfS4heZhZdi17gwvHFVaVq9fBhWqc4vB6tLiRgodajFGD7gV5A2XWCrunhx51TEx",
  "key15": "5LXpKkuxHzXCbKMuvF3XuNv3qycce823EQZcS9wey8oTZz9Wfbhc24dncRb7TrP5JpnbaQtmh5MbeF7LZUS5PRCM",
  "key16": "5W8KURRhDTLmPUujRWqUwG5931zKpNzQ1rxcT9jx3LsHqVUJLJ1xjgQSakSwEg7cb2ZhvTDFPnR3xzVujktb8aVR",
  "key17": "4SnwdWUtW6w4n5oJxndoQ8ptrvFSMC1FcQcJa4pRixKt6Shh6NxkUg7nVH9F2p3kKATBw4xXMkKegTFbtBfw2jmF",
  "key18": "5ukHtZHpbYyMu8j7o2eU2qdEmxDZ36m92mxKhyr43GB3MBAP9DyjXc4SPZd5ku19E9GKeNhzTrHPd36PJTNy3GKS",
  "key19": "2mu89r1X4JYChxB72kcCoHY1MoGWuQQmyrWDULb3o5rJ8G8bpnCCMyH1N562AyoDH3TuLvEQRp6QcxYocKfHWP6P",
  "key20": "47LjrpHMBE1EfboX1LzyojCBFeTW7UDTfKYfwy87NJnB2va6AFJUymwSTX7nxoovPyiuSt7Y5JacUTPyGuZ2GjHV",
  "key21": "3vFXJCx5Bkj5xDjrpvgyBiCQDtYZSjckTBHJ7ZiNW9FdCJ3dbSgdkUfpnXSYXNkkLRbN4337HeDmkipnTpQ4Lrzz",
  "key22": "2ngo2qxsSxKpkfHZbytw8PZWPtE38icsCS8UPmyLLG8tqhTcMWMpHie88HoniN1QdtaUhc4CtdfvHENbp1xtMUVg",
  "key23": "2zKgRLB9vVA4unvEDJX5um8SLv694MoPWyifezwApideh9c5rgTBUgMCtfbz8eBDoAp7TMorkkR7TdHHuQcXSP9T",
  "key24": "61beMCedstQ4T2uDT52SLAiBwsep8Qm2hkLk95DWAmRyS5jQNRQb6tiNHKsEQRrsmHxF5UGktuRHzfPctXqFRTAf",
  "key25": "3JdiJUbVKcKvcrfNCsm8sfTbkMtU976Bdco483AtzXtPUEseid3xjDFabjvco7nsCAxQG7hWY44g3TbHhhpLG2vw",
  "key26": "5iQxt7WLqxLKaJAHnYGfNoDqsFHXWE7aqBfMdumKMxcNNjCxYraVUe4a6ZQ3czjis2TABr6QAKsN1aiuJZfMysio",
  "key27": "5jLBGsY4YNXf1NpAkpjBJ9wFURhinkgC11Bs9AXsvqEs544gUktEy4WS6bVo6ysZDEP35tdjKXhqvhQbVYZgzRxd",
  "key28": "2nkR8WSg8VqHpCXfc2vvnd9CsTjQKtU5s1xqNhbBfpQKWNhFjgyAVK58JUPgfZmnB5CrVdBsihWLWvRCgaQWE6ri",
  "key29": "2fQmPgEtRcrYLkrKN8evzTd2H81PondxfsEQWHY5r6cxmupCGyjhzD57zrcHVWyckFNpEPDZaZuz4bEbu2Kuf9JA",
  "key30": "d7FDp1Zud1aQ43oERpVBpr3XRi5gGXDduF5Rmhdo4BfTGycACp7MbcJw1QHBEMgDVw8Rk9bFfpEZqpZhm7k2kCh",
  "key31": "fJekCk5cdbcNLqJM82Z6ifzzgCd1cyu8BtS8aVey7PwQnPHv8pE1hrJ8fRVoAicKVHnNB8Wfed4E2woTb5RvT2w",
  "key32": "3LKJktEQYxEE9H8svEwA3XLo9HmXQty4wktreaxBVw2DW6q9pTTS1GBYmi9uSov7VQQw9kcC6RNMutQqHLHk6Gfh",
  "key33": "weTKKdemrRzvNvD7mVe781LTQAohZGqSWqtBocZ9VP1bD87kccNuF9egFmfWU3utHjtFwnEfD4ZL1mXG1Qn1uQ1",
  "key34": "5MJWNtNfTypE9ifsZ7zrtxiNPMaKHHPVZGQnUxrZPh8ioZxUexH6172dVjPPfLagFHf7xBLP5sGt42cHJ8Mmf5bE",
  "key35": "3e6V9kfBjh2VgpxtdT8GRezoJ9geLVW1K4SKojaN6oyLiDJ2Af9zaw9KKp5mkCBQ7bXDBDLnZaYdeGxHTRXsWzvV",
  "key36": "4eCyFKiwb8JDzN7xVnJBgnYzs6jqbwHAe5o8PxzYamwxYPdGEPPL4Lw8MhTB5tRmMPQc4nbapTzL7RGLdfQe8hjU",
  "key37": "23y6K9s4gg9zvFvDRYyyuujpX4YEvUzWgVBjDLVv21qEvpnATfkcYnK8ywHiMYLQVtDSmt8CWZ3mG8bWSqBvWc5G",
  "key38": "5QU9SMf64UpkxtpPNTG2UATpcvH8H9LTDziQYkF1sJFbGepHu7Ho2W5PQ5f6MEraXRA8vaU42WsVDbJ5jCcceFQc",
  "key39": "3vXevmRHE39pd5VqcDfPfJUpAwrxw5GLgP8apfLuz5ZNd3d3zZy4sTFSg7CE8WexFbC8Bmm5dy4AqUdbHaXfb7oY",
  "key40": "55jmeu9TrYYZQuJCbPL2po3YdaUHdtqiwXj4VPYvHgStAYEuJat2DHAbXqnf5cez4bjHKgyPs5aEaYyiJVP6DF3H",
  "key41": "NPoT7RXshjUAjnLKhsr26ZYa3Bd64yoUpsXnVtajo9ts7WLrR778UeNCGkFiWXx9nzcS88vTESiRXwy941p8Aov",
  "key42": "4W5ZJPBf37kHF3qT6fmDTReQFHpHgKbG1DgSGpBoyH5QLmqtFUWH76U87438U8QurgcyBaPWGFjLJba5cXWdoi9z",
  "key43": "5F2jMDn4i3cQxV7AqghGuFje4atLX7Gnh6xBpNHuhGsRqtigEPeeYi3BLDMRThkv6RgQJAcR9ACpnCqFokdkMMKJ",
  "key44": "4V59gamFKV5UvS7uNXxmFwZG49mmZ2qHDrT4z6PpS43Ch2ay5TggXXZcuoWF9ztic3FCQ2q9XBm7BEfXKFeNNtVk",
  "key45": "65WDbfeqxY8sonSvJ7HdWK4ej3G7TKhp9DWspibaEJy1FudUFqd7EggjAqagCXGd4AzoURrBnRrysysxvkMRL5nM",
  "key46": "5WVpMqq9cXjgsbGqhFn2yfWuFnpwxXRFRmq5aQaddHwr45s2dAxzHYknrCBvA2v99b2EKNVTRscmMwHuYGbBB7Eb",
  "key47": "4keE4y17UqJdNN7vf4jBCeRSNoj77Mj6fXj83jDpVe8nGknZgtB147Yvkwc1LajHTbn2UU1UghiLAqk1Nfj9uoDg",
  "key48": "317YRCNhbcC6qnGErzVfaStERTtuE76vLC5CZt9PxmHDG9tiWR9CvhNT6RW1Lzy52kMTWhy2hLg16ua6VZKWsS9J"
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
