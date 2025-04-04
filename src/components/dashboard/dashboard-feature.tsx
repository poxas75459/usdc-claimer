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
    "55qFhQCjK5i3onQSCSheZhAwfyjjcQXsqSerwkTHnHjPywyWX6RfWKdB5BB8vQopPVRuwvVTXmyd4NKuVoDSrnp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RasC7mudtitSc4aVTJMi42EqN2uR2bPYCuJvZ1qGGiepx4eSLScjerf7VfqSDDQgmyyM5oUUDRK6jx5evKC3EJA",
  "key1": "2L8F39v79kuDcKkfhpyY1VNYkoUkyPGwncRUB13r7QAgKFSQouY9QBQTewjKn5eH3oQeArBPDb5bbGt1U7BZkg3w",
  "key2": "3Bfx7y3nRMwzx2a7DMSKREqRagCzSFNHJxfQADZRfzcYzTqmFp5nsuxUSKiTgZ5qFo5L7g4Sa9AqgmJ9Z8oEDtCS",
  "key3": "4jjhGb2a2WQwQ239ADPM96Yj5Hyev1HWqyJ5BhMJKaZzmBdGnQDMnQf7KNK7aQFd6VqqRLx9ePk1honQ21zuivgk",
  "key4": "4ZReo5UxoJs7noJo6kFjmQ9juebNRyWLRopy2pHxb2MwV85RrfYFpLpor4yY75SjjDFyypnAaJni3R1FZFor9ZBK",
  "key5": "5fRgiYKYzVR3WEL8QAZeTtLSkz5X1PaUuu389ZZtTWTvJ23gwDyT2uZpcHk3rtJmyhhYgFbc7SQZNG6z8QHQdrbR",
  "key6": "32YKi7NUD6W489KEU8HDmgXEQZH5SWne5J3kQtqnEjNs83jFwNGyq25rGMRP4AZxpqjdKxRxkTMsu8ULizFQbfSj",
  "key7": "5fvFPxjXH7HAkgZKn2J6sHCaNqPBULHE1m9d91tPiPvHRsHpMHPoyNcvWNaAGhVR56juwrtQhKUVMiEgfaB7ADwK",
  "key8": "wPPZVsRLwm5oe8fZHZnwVtgkeuYYVobKPT3FQJZb7eWun5BiqVSAe4EqMJ6CFNEVJKqgdDHU48KWwu73oWgJ26Z",
  "key9": "S98jspzf4N2ENz6tPuXLUA1ymqzcgHBPK4TUzjUvVU7e6fxPz6GZMTqcMusRV3p7oMSjZP7mTz4FATifUWFVaDZ",
  "key10": "5ircKn5Jwe8WdYS8P6NK7hNLR4pcoSXgowUzUM6341hMDL7oCWqYEKb5fgkg1j5n8Hrrs8T9Vx6ou2xinYYfdxtb",
  "key11": "GvXQitApwFAr3ZKj3qpgRFbYjezSaGzZCrWNd6MPRhLNb1FruFN1c4gndtkoWWMBNisfEcsbRzPnrHeHzHcmJPQ",
  "key12": "3PbXDwFSHH7AYAGEAtpNtG98BLECnMoKyHZYdQVtrnXLrbisAqCTPYP5dhyGkK5LVwquo2SzLJ2FbaR2ToFKATLN",
  "key13": "5QEJDTbv1RsPqokoTxYRvSHtFMsfVZAuQRqBtBxY1VjtTxDW7p7GXiBFE3jfs8ZGzngR5jWT8PznuFysoRDJUSJb",
  "key14": "QHymmamDaGfM8NgVgiSxUXL1vn868cBc5eamM7F8Sw45QT1DcUGpBdzAKHGf3tKrJpxuy4gZM34QC3wrsVJHKYL",
  "key15": "2AuSq44zqZhPN6jmKStkv4yG1NaqBGGJxYN6tvMCAgHnsT4QJX95jeVw9wi8wJTLPSU6RysL3cWcxRjSdE9Ag7Rk",
  "key16": "5tVqrFoWcY7p5gNRCjpYaMhNzz5K72X2W1WjPbMtGrLrDx6fX9swCocbxx4b77ykJqiYZ333gd1uhakWwLCK37Yr",
  "key17": "26RgUoBo3pDgaAvjkyi3TTtDgk756dnPi5iWLqKziFeym2zbN78yr6dCBph1qnwW6DFi1Ef6u7iv1PRJdkqMoCdZ",
  "key18": "2sCvRY2R6Gn3FHvKyt9pbHVGzmQHp9KLuuLuERx1VWqG5MmE8QST4KK5jHSTEEmEp3PnmzrXPd1xiKD1vhowaANF",
  "key19": "4jkW9EyJCRP5wkjFE2jZcp44vUSmkPAS7Pdgr8u7itQK8QMxu7M8X78FtojMafnA8u9pCjqJPVrMwzxVzdXwxE6J",
  "key20": "5nmUCzw9FgZKvfTBc6b2H2265p8yvJADJ5UixX89w7U2J122jQSpamur6iPJQeutyA41qaZffC4h2nFDUJoBNrxC",
  "key21": "267eKJ2Kbtw4FMvirr2hCtyoXiwpyQd7mk54ATj9Jpek8TiRj7xkiPREsXNPhMQgHk8z7iJTfTAFDPwaHMrMCFgp",
  "key22": "43sC4YHaFCxLjohWuJpURrtwKZf9kz9uG5F5XvUzGcq1AJYThVry3EDwoBnvX9jckghnRngVX1h5fKE8nEgRXbmM",
  "key23": "2hYFDwv7RET16JVLBYkDEEebyk6MZwb7pDktmfAAgRwN1fTj3WX7obEjibkX17UdF2RErDoZvj5xyAZVV5vXkw6i",
  "key24": "2BpdfjM36pCu3TN3bua3HzNVvkmmiPuPFRvgVTFpefHcv8Qdm7VMC8woB74HDzq2SVouVWj2b4xwLqgBNcDp4YLd",
  "key25": "cioMaDrUXnLGEDH6HuSHrXmJyDgZuHEP9KxMrkYfE9ZsdBXFmDttMm9YxUivPPXsWn1zNjMUs2qmL6mpLuVzguh",
  "key26": "3ADZbLiYa3x7zQSHUdX7VN25v5zgViLqqiahAJ9yGeGzuegQ3sXuHmo3HRc3ScRQiy8K5uiuLDq1VAFkMQimr7P1",
  "key27": "3JCY4iHtZvpS3CoMTKouKT1R8t2zSQDFKZNQGNbDoqej6ESzEmnmBZ9bBQL6JsSwrzyJxjqd3QUyMYYcUvgJSykA",
  "key28": "5StaKFCEzfXtgZC3LMNnPfZzSp4zCYoTtex4TMbmztE1s3RimSx2zt429uwc7UMpG5FWN6SUUvQpSwgvGtfbLPJD",
  "key29": "3a7KzXwUG1atg9U8QBbbd62aUA3vCtLhseRTmuNM8G7RdZ27wvPmeTkSV7wR2G4gGnzhfBJuyD5wGUpqHVz3QtWk",
  "key30": "NhMkrNnVrQqNq9wKrATm985kcRrqfRZ6W6fW6vH9QxNNfzaNMD6jc6nj6CpVEPkGc5pNnHxcNbFUigqUxizkFmC",
  "key31": "3mmK7iUM9bVUbbVA6K6uPmDXEF1AefWpXTbdqaEpgRKGzux1m5e6dKUuyVFCgxsCR51ppjwVVgEXeH5eVb6NGXUM",
  "key32": "47k88GE7Bbd4PRjMeqK56uJv5e6USUaHDrmQTbdAVWB5pxB2g5eqQcN2WPxjUCACd3EPvGB7aPnvW8qMKUNRTC4a",
  "key33": "5TNq8QieZdcnCF3nV7686iE5AtczCry7VYyFu6DSe5bHJiXu3YMu4RF4h9tuoM649h6EsMThWnbdmcfuM1NmrFkK",
  "key34": "5UWCkoJ2qqrsMeW6iX7iLc7xQ16jYKuCJ1oBa8ysQhXR9aJ8Nb77yZ9JMV9zEk74b5VuXv6gDeBFWqtKHsRLhwsV",
  "key35": "43fioLgxCMkrFmetreagFGGyZ82GNqri8W2XDb1hm2kZDHUf8JxghqdXGAKU2aevpSY2UHwMF6qiY5QSYMiXqBTV",
  "key36": "2LmcNaEwjp8Sh56wtfAEfQ7gMferwNLeZm3cCa1sBP1H3bKkHq6fLrJ2x8UnRPWsC1WbmYKQBxCYEu5QFiyTctKH",
  "key37": "2DESFDiddM3Tcceu5ikcHbGdSJNzwWGFVL1x8aH5uRFbA89FAZcgkuquHfUA1xEi2iF4NssDP1UAz6yCjrB1H5rM",
  "key38": "p5D128hbUR5zMFabgrntGWC6vWAhRLdCYXkgQHH6Mv6FkqF8tDgzaEC6YvaeL6GFXxVaQXNhhkihPKaqCatjXAD",
  "key39": "47PtcRZskP4qkDJapuKbZHHS6o9KRFzv1KTMSZQT43wh7eWFdFSMJN2ZFNmKyLiFHnmxqwAQagBzbppsmSc4u7p2",
  "key40": "3S1sC9r9Bby5Zhx8afhv51NTPk6qKKbK3nS67hf38bGKBgv7yeQG3U6NdRBSXHxwFFo5aDAh9NfmEYVDXxgQaN1Q"
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
