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
    "GZhjDmMUSwE3Jajdc4ALjuM1PiV1e2JBSgBYN6b3xTR75bcir8ntmeSriDaYmcwe6nirBGN3AvnX8UzZ5LmDjZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeQ1mPUPZxWPswSXQEj8JgdDFTdRSy14B2c5bfcux3RMQh2PEDcJoRDsBFv7WTPmpGE7Hw1RrkstEFv1MZrHbT1",
  "key1": "raUp6xX1QL169GJ6SQiZW2NVKENX3maeLoSaKPbPY3XR7oSn3xUoaZdzC2kxmhviqosc7E2Hd83LW9e64ecaxjG",
  "key2": "3vU3t4WsNMqPFSLidRHy3fAAawJFNVgWFq8zPsmngos4tXoWH7QNNHUXWVFkWx19koV1ju5a5uq5Q3JQJCCVTpMD",
  "key3": "5SpvvL3QqqD4XNZbfhnTiArb4a7yvh9Kj91UocgVNwqr65zpXGuhgtgJoqwTGaNmD8ZaNwz8vVkZQrZtfpoz3B11",
  "key4": "4WS5xjAHYxR7Nbn2H3dnrUPwQdGy8M5x1DPVkU71w76MJKVwGVxTTykySNged9jQNsrs8Wg4f5uZdzSa76CmmsHo",
  "key5": "4yUiPwvTsHrCzAMbQjca9zrahzycB57KqFjPCbbpr9yh9tA6D7bRXwCBPBDQe1joS1BsgifLNZsieGD4YdMLFk1Y",
  "key6": "34Uvg4ztQLhnUvnm4LuEVA51FJaTCGyrDhZZE8k5k8RVbEe3guFjM7ive9a47BejjtH2ric4m3iSceXvsfaY368a",
  "key7": "535Mq6E3h8YcgBkb2vTe1g7Ri4K4fEQVtmwbvurrbzsoAtcZ7ZQzscAnPFAs5ghT3LPo1FBaZhzCLPtHhknEpQSK",
  "key8": "boRkY8BTLsWeXWAzmNXvKR5Fy2tH2v8MBFNgtMaWxfd496NApqWqzkM6CbJLak4uJDYf9hqf6DnU72XqTKt7uDm",
  "key9": "4ePM4xNH12Gsa2Wco3cGeewDyJtA1eLvxquZWkvnFNgGAcdSr4WvHmAMb67bVacNhSepjfJZhjyfA7pj2NWQDkwg",
  "key10": "23WJCDXoAkE5Ysj1CNGaGkMT12cDtESCTkqCJJCa9YQxPE4S15sU2aPa74vjbpLb7ydAauTN37vTpqnnBbe6enEk",
  "key11": "4Yvm3tsPeAqUsNdW3c57ydkHkkSNcPdiHRckYNf9pdC1pQrBi7RF9UdEA5D5WV55iHtCYtH2dHNfeCUwAJhgPjzy",
  "key12": "2LPaVrgDWXUJHg4PMpZLY3BUAsN29m9JE7DvtfJPjbXrQLK2deDq5fpx5p7v5MsX4EjYDWrGGKNRd58bnG46MS2o",
  "key13": "2zLpMgDtZP18E4Xtm56XZjJ6iGkbK2NMGiDc8J4mYvbNnvEZCqmT893R4PGXjkGBPiaycLeDiYqVKu5QS9Ujr52C",
  "key14": "MwiGNDkQCZX7ogty2ApkdWoaASjM4rvkMpcaQVrfaLs1QeCnr3yJfFN7C1PwrFBp9p37LiHRZ6nzdqmf5Vwu11A",
  "key15": "5SxrKxqi26soxbQW38EkWf84zr5YmZDwBATgZWXg8cgSwNBdnYoY7RpvRJajFQYdCZpcohxdujnwXoo7PrjA6Zk7",
  "key16": "BzFqFGbXY9hjkkd7pibieZEtKme8mkGHn5x63SV8Fpi7DgVxSPtzCbVBxSMT26RtvK6psksa8NQxq5GvCR2srKX",
  "key17": "4WZ35QmrH3xQLwL6q4Wpc9dZcgDfGdhbzAEEoV68FtgphkREoXe8JbvCSYZGP9WGCd28dfxNfwFLrqHKHdeWM3yU",
  "key18": "5nonC27s9QhiMCk2insdtJpnow5i8ENZ7tKWCkPH3iiwCmfKWmRG8X5WeNvdFLpckDEp3ruMUbJMy7KjY5inBZN9",
  "key19": "3RhXvWZ5RnYXRsgV6fSCAiZxwZVdqmwzr5rH9369uYKStC9929pzJYPWjaCi9f86TxsUMBFP3fXPUPPCQuGfVAVw",
  "key20": "i8Vtz382j6AazxKaQChcotPRTxcXAq7GcPTmkyuM2XTp1inEqm5AHGU3W5ni7Qt9En4yNZYNq7eRpKvyhaXukQ7",
  "key21": "4Xk7mfAYL98rYqVaobvcMaVqntnVbpBp17f4apKmCWQCtzRqzQUkBHFA8Xa29UWPL6juriw8EPNN4RdFH8K3xpac",
  "key22": "5ReS6GBuB7X48eTkScjBhLtBu6TZ3tQTKq85vdshg26MV5esB79gWhephnpkjZpVGqjo7HzxqeVNpLNE64VJYPxT",
  "key23": "4enxVqQm3zxT7EdSdX9n7d8UxdaMTNSBHjCaxdvxLwFifuLyZrWSvtgPQCn4SUhp7mDWvNT9a19VmGNFXyNk7d9q",
  "key24": "5pZ6KCGTio34xaWc9qJcW1AFbvBnNJgsXmgz9NtNgaU7xPwwZdgj5zVnTfuCbSfAVnRzuX1SC1pnW6kfCjVQTwgn",
  "key25": "3gwjB9u9u9VkjCrCc1VFbR3gbFaSLxBGpcMCZ6Y9r6N1mnNLngs3j7BUCapGTcmmycpXc2FhqKPm4yqkhAiVnRc5",
  "key26": "4cZWkvs84H16Pe5tZMf4tmt31sjgwoXoG3rPxHH5SmjYAF28hBRzJ6YxVCzvhjAF8VsqDnzXWSuf6WKyY3dUE5hW",
  "key27": "4Qb2VTJfjmPPjaywq1Gvx33iziG4YAM31KQwTQ9cG4FJusaGzFiBbg2abhR9jfbHXQEDYgnutD6MjPu6Lp3NRc1q",
  "key28": "Zm8x7jYUnSRRcbPL18oriaDL4PV5Phpk1RN8Sojd3B8XyRdQXT85VLfbcgz5T4NBbR9wtBTLqNMJm9hnTTjeatr",
  "key29": "31CySQrGJzf5RMbtdfwazseMMQxHj6TUino7RFhwNoZqyXQX2C2Gjp7yceaPWjXBiVeAxRW6fkpShjFCZy1cfaUa",
  "key30": "3cRimXxFjfBnDRrracXwz77BffjQqWBpFapcrA6Gf96qXPrQgWxrN3gCcwzaZfNYaE4TkLSh6psY7AVNw8nU5jMF",
  "key31": "2h5MgW36ST9aHGEx4u3FPEmKjh8rwBHYjX8U18CjWoFPcbr4f1E5T8jwoWt6wztw1tu6r6NNn7edihzbpSLRBhSD",
  "key32": "kmBTvV4G72T23T8JJoY6gUT5Hsx5uRYAqgFq1QVZp8iwAB54WcpPb6YhnkHrqfvx3GhS2BLeNAf9HrMavygr74v",
  "key33": "ikAWShsJ3ABzUdJsU4mtxZZPCyRftmMPhQmCHVK62NDJ6EnNzMeWDcsz4WEdNw5oZZQY9TsBLs5WgGHoJ1V7cok",
  "key34": "4TMb4zQR3oFkttYVFf9LikvaBEFQ1TsonNWf4td8BqGz1qyrg4axMBvNCkCQVkeLAhVrCzZckUtb1XYaNR67vsw3",
  "key35": "4Duq4yEqQmb5gmYxbMuswjiKSrznFTcFb4hGs3L5RyMsnT2Hm9JeS8KjctFBoeT9yN1rVoPUXz4LPW1qj8ogRKbK",
  "key36": "5e2fLuHvKSXdrpkih48sXSo1y4MFnJJMReaepQHVvYGZv7qZJzQjKK4bv18P5t2yL16Vj6HE5LDBAzoFjzXhsVh1",
  "key37": "5HtKufVbqzdDANr1TCyEQqdgVsLX7m1mK5vGcZug7uTVmRopw4uSkX9CK3os71muHQ7Zc42id7Zj2C86F8vf6quH",
  "key38": "nP8Qrh7vnQfrWmtk6NAqRr4pUyNSaCkX14XYxtigZbwjbPLKAcYvtBF8o21GfnPGQexsyezPK8vAbJwqz62rs13"
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
