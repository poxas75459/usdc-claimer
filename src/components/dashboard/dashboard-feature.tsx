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
    "58Yw5bxLNpSwbD8UDLcKQGsqzwkky497d8YGUGVKBGSJQooYqqFrQBQxK8RGvHchaq8rga8i2G61hqDb5Gcrj3PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tPcU1P5rvBGuMngmDsa2ZMGrisBz2WsChdF45iabiQkfYh2npfEx1UKh5BhCH3AtU7LUdroAvCfL4UDtxjCaHM",
  "key1": "3q5JeaJHNt8iCYh9WK7qwQWBmeyNzM9EbbYzSRe62Ltb4KSnuCR3XyaJTHUSpRXaCavkopwSZYgQe1hN4zomkRTk",
  "key2": "5RF4Qp2tdFXGqvBgr47cpsCq5FF3soXru1Pkh9yKiSCBjSBQtBGgF9HPh4Xk8ndFNQBvYoyDE9oxFznkXAaA1KY9",
  "key3": "12AEukX6g3zLUX325zoY2ve2Vuq4cp27PXk8hik1h9yiwgnk9kaH34DANoy7tiJ3mrYFYtXWc7fmBGguFgha9mKM",
  "key4": "t7e8DaxvFN5NdXrqCehiwoNa2tMr9WDv1WVqofeVMhByyo2kggLdgRZoiudi9g2zHVsATA1qzZzwg6ugt9wqxNw",
  "key5": "hwa9dR6rQ5fejFGHcKGptdg1gTByiHrf6Y9GQdfHJWwmqTkYZiEydxS8DVh1wgoCpug5cskmJsHuTfEhvTec1cY",
  "key6": "4xhikQjziPTTbe7LNUVisK1YaqYkAxuiLmXgq4awAq6s5jtDbBeNhX7fy7zVDhWugYWq6Q8Sg8vQqRhwEpA6dGLQ",
  "key7": "4bfjWFFgWvWtZa8uBAdrdhv6L8sgP88hKYXqKLoS6izFbs5uzGPu7wg9wNxWYW8xvBUowjSnJHdsGm2RhoTW1ZNW",
  "key8": "4oEdtdB4KDEsNtkwD1Lv6SaFMgpKcY1gntDE9JYtG745FMGQ8R8PVoCzEwPmyAQaS338fK6KeiRbUUSutyzirm4k",
  "key9": "37cTspqC8hVf9UhRdQjUSDnfJuRPZc6uSCSMPLAKbf264t61AXNFeheqss136DWdk48mN5axApaJzYP7g64vBFTH",
  "key10": "398T66xqF5sok5kNiqpFqSWpUT4JEUs2HuzVN9NYYfibHziCMpycHJ2a4Pq9iVWP7XpqVPoyrtiJv42qCXEhnGSB",
  "key11": "3GePbbSqouyS3tPhkh6BTbpeNQj3NVb4FgPm2CbUSSKi1FKqJff6dqXMJEC8KdvC9S23MEy7fR4XBgUfL6kTywQt",
  "key12": "5McgSSyPP8mHPJ8hpb5TLPPytMRWG7KufnDxaqzVxqYNMM5YtzdWtjrEqXpk1EfshZyiisVB4rrvLF2XDYL6ht64",
  "key13": "4QUvGFL78Wy2MMS9i9bi82Y6iMHRN9eU7yyXF3AGEiz5QMeDG2K4DneXDxb7dJ8wHAMUQ2HdinTa7dCT1CwZniy7",
  "key14": "66QTWPCyA7A7zxuWd6sYoKgUpiDjeu8PW7oXFHHm3g8FPLJghfC1PgE24zZSCiQ2dL6WMKWthCRyjKFo6egZgVGV",
  "key15": "4CCw5kvmPZmJegkdC6LhL2X8vojNYgWKDDxF3StM4goVASfL45dvQL4vS2AZjAXD4dPBSJSALAT2pwA9G2fqnxQv",
  "key16": "48h5Ncnnx8iUdRPnkBygTcBq9HBeM28fjCrF3PKiw1ziKQrDFTgXAxPw9WYea7y8nXyNxQKtibz6XL11oaWhPgaF",
  "key17": "4cycwPM9XLVr1KQyHY22ZZd1v3Ngzf3ecEtkdwiPwbjPsPzVhKiS9ZbnRoQx7cVwe1GZ6wSDYCUMqMFB6ghEjW2R",
  "key18": "2HBiLJraSZf4VnEuUy4cegPZK3RcqpmQqTngTc1mFRfEj2Lmm1ZoCWD5LAKNtCgRFQFz8Cm8QsYu7nWhHcvtiVqp",
  "key19": "a9TM3qrku7HRurhuSsjUMt58cHhFcnSLUsKCbRcr5Y2sDX9KUHpBhTXePyinqES1Rkzcoe97cuNSwZic2B9cjE8",
  "key20": "2t1HQ42MydgnohgdhqNUU8L3DptQdagyobzBwHRQ1iuPQVtHp16kUUrhPE2WD4oZEUKbzipQpZ2xVt4i8hkj9HrY",
  "key21": "3t8akHC18XmdRZTqgzhzojbrGU6k2TPTNB7LZRjgqPRiufap465jgwmqJVUkJkzuNpqd2wZDwGaxZpvUySJ4xn1k",
  "key22": "2T4iYbeC4RixC3uQ6TrmNnaiRSyGQdsbtHdCZwRzd4TQ3Wo6aScJHudt9iAtFe5c5oxawJQek9bn5hznacKd8HVE",
  "key23": "5MNa2aPrqzmEiixAbowaMVPhg1SPS6Mm4eLoXn2QNLfuMTqj3KVRb1qSXvB1sAuQ7PTbWC9XvL8n3gtTXeLRgnhe",
  "key24": "BxpqUgnpUtEuCE1TehoFDCPGoRMPh5p1gUtntKE3prxdPr7dkWQy4tQ3x63cYGgWCotgdKhr8tdeXMog1XPnhnh",
  "key25": "9AJCRwfJMRouMkUNHLsbG26BqfRudVYy8anBfpub6Qw9mS4zDhexrxqZcdP72cU5TUt6xuMPZCFg6RgsMptmr8A",
  "key26": "4QVLM1XFGrcczNcSHMj3ZmYwxj2P3KNQzqojgeQek2SC4ENQXgdfmLVc3YCXpC6MgRSehJqBbQousto4RA5qTktT",
  "key27": "2KE3HTToEnE414hP6oy8BTWQRKoJ32TkSNgGhgXBxYFkJ1igt5pjVwPrqm37HL4ssK1QLuLCkgqX4nPXaL6hEdtz",
  "key28": "3LLJE3ypKFwU3T67SPpCxvhWt8LGDwxxtpA3y7j3BHiQwUJZsUS6AteCw2GQZnjZ3b7BouCTCzRModqRXXokxmGy",
  "key29": "2C83pHVkN3hPWDmX1hGbMtczY38Y4gNYdj3KendPSP8ET67M3Yqxr1rEJ86TsnHwsBymM9Uy4zZQKDiyjp71yJ9B",
  "key30": "5qQn74vhCCxn9czJEa6s7w5jy1mTehAfGm11JiheJNh4ZKWoevtwo7g42CVYD5aJZy911LnyoP8KR3g8NPnQMjEJ",
  "key31": "2RekKtKkHRTDLMo39kSNKSEZyWAwZ92evuobymiRhfZEidVeQWa3AECjCQx8ddL1e1ZeQr7XDTD7ZSfa3RQyjfJp",
  "key32": "32Y6RhD8oC6YYg8WdwjNzkcsd1jrS4kKFXsKmGX58LFLQELRX4XNvMdW8cSP9J6UcWf15ej67qiFZ5Q7JxqTHGB9",
  "key33": "8LM3huRDJuBayB5irk2oAKLXBERhyMYArtZQ8FUbLmPZqLBSZGi2bUCm2GVj1sLvz96yKaaxdNyQ7F6F5qEcqnw",
  "key34": "2GNpPu4cBbDnGGfGZ9YrmY5BdHLERDLkY88RvoE3hKLz5VTZbQK3hbUZeXSygHC6EQMzkUJcUZfyBQPuyAVkXxgh",
  "key35": "3Tx1NnPAfSNTQ5stqDTQMgWCfVmymcM5vxeE9skqStpXxcAi6qBxxkk7VMeEPc2t6LhcHL7HLfFH462Xh2WyYSNd",
  "key36": "4xPrJfCX3v253YSq89k45QxKr6EkXLPiwtREDZFs8xUR8ne1MUTZPcJrkwbjFEfniCehzT8i7KKqWtMGApa3dXnR",
  "key37": "4muLwBhj615RCwRLx1PyUq4nFn5cApfzhXQRHEPmbDAp2mps6APkbnx5G6bgzYdPqEtgbqNE8Wg8Y19ij3eBWFBh",
  "key38": "45HsdTmATbW7BGqCMGFYqG5x2zXWE3hMsS6vajygiVkj7gH2CcYT7onrLVcWk8Niig4QqTEEGoUf6CrLjdgKEVi5",
  "key39": "54HoFPg26tB8xWherv1My1TBkmxcgi8NW7dRSmMcCHQ24ECp2Q8WP8EQjPwj73UfqEE9Mkj8VMCANAb4jZpt8EPa",
  "key40": "5Sjj7xrXm5qqF9G3QXd2JbCNo4gCnB4aBxksCoRPftFFaBQmLDDQqVumSCodvPEX6QMssihuV7KK1CdnUPH5D8Pq",
  "key41": "5pXf9PeabXAEqVLmTRXMqrqGNP7E1dDKBTG7Wf5FP6Rgtd7Rnv5nqi8NPXzpTjh3v8qLvAu9D3QzdhdRNenFjAFT",
  "key42": "2GdY3rPeyBERx3HxM4euTXFq5sBnGvVcmA4qrktJ27mqsQWk6SBaqgfgtLi4FXGdsm3TCoCZzQLvHVKPxGagBL1U"
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
