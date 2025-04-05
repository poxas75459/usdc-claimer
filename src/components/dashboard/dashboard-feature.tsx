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
    "3BatkjX4ne5FTD7qgFBynMjdRLaReJcnxzDu7HM6cF8nimRzHHgSoCg68gX45tUK19sp6MmsK1ckWofSGNBfNuFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LahwEWqwUW3Ti3989Jir6FHQJZyqm6AyXetpDKEXqvVxg8F9vgDvFSQnNHn6C7HfAvGWkBAt5ZK8j27Y6BxxRkZ",
  "key1": "4gtgx2LArjqgDn1G2HDZRHzCtku77zjew1MBQzz9cCvrfzdFxKgUCE7qEwtQekYLrzRAg1NkDd5sQY5KBuGB73Yr",
  "key2": "3ubHCAeWbbyeXyEsEVe1trg3wtU9YbhHzkkP4E96z2bJbVhdgDqEj9QUvBpES64q3t4Akha3v53WXjGMkn5uAvPv",
  "key3": "5JJiotbVTXqYb89DARLPU8b5uz98TGFkvhQBe371bSwRRoSjPPXoZuftzmhm3JE71maCtcKBhNsAcNHcBCBJmigv",
  "key4": "5u2wbBDPBTRKekSkdAenGYLDLKJPTSN1jpiyH3VnixkuzLqBifVZ7B5ofY9S5UJDbVMjpM8auFopiDbPMU2STwaw",
  "key5": "2zRhVEjFVYT6JVnunB99TqZQGGiPEYBbXE25KVS8VewkMi7BYTtN3efkb4nHnmGW8orJCePkoXJZggGwo6Nmy6MS",
  "key6": "2Pr7PWZegv91DnHgTVLTymYwbpmvQETDiFtXtZiHDygr2KZYaJpNXuUzUbe8EFWyrkSunre9ESTk2fMvVjTpkGfS",
  "key7": "aDrZAXduVsQYtohVMGURfU19mAq611q1uKrHGzPNqQX2m4B9Dy2erzT57ae2RV9csqfs9ZnaoAQfZXudYn3EiUC",
  "key8": "4nAsR2SubMBMi8DC2yuvYBCqdYsW5JVqkugwvJohKwxzCPohNM8fWCRXk5B6nquwmqqB88Sh3ELqCcScGjRiDBHn",
  "key9": "5ST4gSHwYxjG6tXxFNPwbTRmuWueLoE7UkqCjg7x7AZEoDYraWft3udBhU24sTBs1cP1WcKiKLrFTiicPaCGzHtk",
  "key10": "tFcYCmzWLpUaHnezKf9oznFxtcwsq92Bxy4hiEwaFBpKXJUAMFZ33Fmw1vJRSAskQH3qkJ9kXAgFQrn2G3uEFbg",
  "key11": "43DzP5uzaa9KxNoWUVcePxMKWdivtChUA7oFr8ADyWuuYLymSYFU5k4KjeWWv3iLrhesjkgAwQEMokKdBQagvL8L",
  "key12": "2E8n6paGJRkZ29ZDN1VdThtYjpNWksZjU1vAPPfHiKW1gaAQeqttQ5AFvew9d2yVZ9iU32zi7RCsTGoGBeKMff2q",
  "key13": "nM2woPn7m5S6HJJQ7JVEtL1rzLFcxmxiWShenu19FUmeEFYMgqoCDuzVLZm6L9mtMpRkPLq4hhsJDCY9dFcRvgv",
  "key14": "5xaAws5vghHH7Cy3vmLz3jmsjAKSvnVD1fBaqiNNkp1RwaCKR6mYaXmhq5xdNWHvPHrPSrR3AJpnrJyxkNPFTB3q",
  "key15": "47Y9NmNZyqioz3i4F4NRtXzVUQCEpanx7encdENVsXAdBhU9rDFnoFaV9bGfmSFVmDdXmchjW61qkTBj9BvG3UbU",
  "key16": "3jerq8sx4PArMPSAgRsPm64etVxMwQjEF7XpX2tuawDy2cR9H6qhGCgHV2TGMSxt3JFSrck6KxQwkjxwAEwev9zk",
  "key17": "64TtPLGGgFjxHVoqR9yH43Cu5QruS5AjFufULarKPyvZ7mzovpPVna3cVtPTSGHC2vxy3CCz78BCRJ2LJUTCje3P",
  "key18": "5gLYLQ8FxwNm9hQrQYTaSR2FBvs6Fjre8MbCjoAAbCSbPnptxX4iGnFGiE1wDF4wRbJPZp2jnevQ4hEJGuW1PA72",
  "key19": "4FSbPATifMZHGeTaXLmxK3Qsgjh1xDoacKh1UMBPfvtEzMTEJF3XoUY6kv5pzn8KWFr61HNAagJ9fhd5roTbKtqR",
  "key20": "2CQTFHjH96UvhgvKv889fvnBmtYP2NUEj5xLnKPf1uK44Et83vJ7frWrQWiwqAtEqxjrTG8RMbZJjMeHsymEqonD",
  "key21": "4d1vKruNJKH4PGHvji3R7rmGB5RRXBzNWdW18a1vsRnWz8vNZerQftFXsBLpyUPR8TWQUWGCux4nckyopip5Hdxv",
  "key22": "3HyYfkSAiTN77omf7ZisZLMkZHoseABdS3t6qrSbrT1XgZXSvFHMXrgGSWX5fR88KKLZyhqB692P2sVfJsDC4c36",
  "key23": "5pP4VNQvU2Kdyc1okq1Dk1aGkbv2cBHJX38CNWS6aBNp1oSi2P1V8dsDLaEBdvpJFM4YvcPQiGDrDx2ShaeRLatr",
  "key24": "3AQswQpY9nXeEqhELdMTRxyWi24LVbdebV1KSSBX2M33v8Ch1GPMsiJ1WeRuLncn7W7mFQh4hZpUsWY7xo5vyGnD",
  "key25": "4LNyPaTyDUXEPHB9ha9gkzjXVeoV3Sa6EDumJBRg5ABb8FtqSEiwkJNCfmT9g2QjLUg8XcCmeUuPdR6L4rSj2Rky",
  "key26": "5mB4muUcNwr5ujSAYJ7AAh5WE6WrsQc6aenyFtWGuwiHr9QJdV88dT5XwRxtvg6DH5nRkzrE6mXqJynRuJQ2b7xp",
  "key27": "33YAdBfZjBDYU3GNAGKMfaDEMdfNmcR85DGdw3QCpQBb2MXn4HKhk771XJgL2teM8LgcC9CJHtPFM3BLf4wofJ65",
  "key28": "3QapGyWHvDX4orMhHgX5god8kLio7jZMox7CiBmvcWpQNFMG2yNrrT8KLcDjj8XSBu5kwqboz1dkEVkkifpR19p6",
  "key29": "BrSLLfjLCL6qgv9tP6WsLvm3TNWzzcL1SGf7b54CtURg9w14CsK6WaTcmDg1ZEXVZ51hMKRPj5TynM2eQrfrxvW",
  "key30": "5XzxTkuzH6mTKfA5CAN1qK7KBVLMB4e3HLHSVf8gj1eFAHjxwpfVpKoDc4WjjERUVyrWtwDoDzeitueAjRmB38Fm",
  "key31": "6GRa7BEbEBMzhKuKwH16WkDTCaSXBYWc1uG5Q1sJbHMtNJDfipXEK5EUCCFEV5iE5ouL36V6yeqiaqPjK35TqVm",
  "key32": "q528GshVS6Czi8orZaG3fPK8VQU5kcsFrC1M99APPEbVTCagCHrWBBVmPSVc3hhTiNw376nLGu72hu7MYAhjnSH",
  "key33": "5YQ4A8DXtPgmKM6yYzr5dcd2ixU3CWHJG5UfYKBixooonxgPVSkvH9srXRY2bvry8US9Gs2HHVc96e9Q1Tn8n5XD",
  "key34": "2B83PZbe7gK1oP7m2u7dvRDAoDyFv1kFHajKvefpoi3PfvDLQiLinm5yV7nkwwFS8poVkwPwUGGe71kgjhEJpZWi",
  "key35": "2DiFLUtHjJTCEvCC6bUJiDV1jsptUDnXb6PchVt6kh33xebN2XjTeVSpcGsKYdwVhuqZMVaVN7Rxm1a4kRjUyxUC",
  "key36": "444NLw2waZQ4gp9MyxzvV4ZPpBuZHfT6z9Xc1hLtxaBFj2QDFJXWQWjr7sSzEG3cHmZzr1qPCaW3w879mX4d99oL",
  "key37": "5ZFd4b6bUBJvMpYjj5AchUBY7i8W2m68gPDaQEjj9U4EFJTw7wPL2LqMdcfjoLM951h8PB9RRoTaPytecLC3EaDj",
  "key38": "5oXrpcmGZqFi1vg6EY97WuE9xMGUk9ZfHeBMQUEa1QfHDGc5DzwphbLMFqh3PKDmFGPbwWAXEyydJ6zgZii2g9w3",
  "key39": "2BuJykmhKajFX1WwbpoFzwbenigHJydcSqg2PxiiUc9VYkJt4vzc3yhJMr5vLG8f3FWTUAoBeuW7xYS4Xn8qkAne",
  "key40": "2hZNBbfAaA5Kho66dyzo7xdK4GW7QrKqerWGQQAP5269xnt47KVd2w8uqpfRhDUT2cQMZVUB55C842PT7jqivVRv",
  "key41": "2QMRHUZtvWYC9JfTj4fDuw9Gw9j1q8bzL88Qp6NzHt6gSbxGxSo37Mp4eG9mXVCTS4c1kTHUcZhxxgZ6Tzpt5odm",
  "key42": "2TLqSzrV5UU7Ur9B37aJdvF8uf6FKq2vGF43BRtQPHWW6xYNj7jCU7BUdKyWYuyj2tRVvHTeQD34Q926Ea8odifY",
  "key43": "3wCCvujoNGtDRYjxV22UPsQ5cbPQ6DXk3t1HibMQ4eoy5bc1fm9nrnRjLyd6zyxdD7YSCcGoo2ishXUu2CB2cNjY",
  "key44": "3pms7wAo9cn2ns1jSLv45K2QeqZFddYNJxMQ8Ejpf95EW2vw7LuNUXyU6nkPLDTpSkF9h2K16ueoGwfzMQaBtMC1",
  "key45": "rpVrd53nE6yCDiuAzKSD3UboZ73TbmCdKDNg2iQZgqzQNz7DuLDSWcuUHy4jFBpNQ9Xnp48XPP4zb8C9SZ1TpDf",
  "key46": "5LfGuZeYHY6awSixp7FScuWChDgjmuqeuYuJu2NAePtovCCQxg6u7QjgcGrEE6ghVLNWHdD9zVr4XgcCTziX9618",
  "key47": "riwbPkgwu41Nd6z51iriK6eHCnXF9A4wkzF1ELztST3Lh5DM7LFS8EbGSNKibbMVNqPLcwkww8wm4ZzNGT1cBRh",
  "key48": "MpJUBRrXFYcuWo3GbNaDoWAqK4aSMF6extwTxe8Z4huiFHVGEzVWVsvzaNemaQkNfhccqnu4WW6DhUSyByYsRp8",
  "key49": "4tLMPknuTYxT9BVHj7n5htiWzoyaBwJ7Wa9LDzwxZLtd3h22WM6KJg4Qd7SLAVGoW1c3LZ8ffGuRiYpUBcHHUsnB"
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
