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
    "8AD7xTX7epJxmQ98Lp3pnTsLtVQTEwLkxjgXzGHyKzkBHdqPs6YKbmKc7K8MaNjBQW6DTstXnL6aFAXuWFr6n9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyvqaLDaxPu31mb3PJLaZWcorHTUF73Ah22HGeLGre6XRyUHPw6uYRVggDvupGU8jqN51a4n4DpWDmCLG2duTEb",
  "key1": "5SxD4CTMAzbqE6s16BF18UZWCzXGF9pkiBDQ6SWf1rLb9QaZRTGq7XucU46DqugEJpsPssjmxYZs58eqNQTSgJQE",
  "key2": "58vtHC4dEtVcyaFD8fDm6DcwpdexxpVSuGfMHc7F76az359QbGDdgnWKYMbPtyETx2RGr4TKHXpSQuxRXB1LvNam",
  "key3": "4rwRHeQwGQ11JsXexX9DtaqdkhyWfHceUmJ8HXoQ3DsFBfo95EXaNqcBPNfjarPQPaccyatpVjarC5pCFhjqyFnQ",
  "key4": "bxMnwRrGoRsHKCA2tXD6AJdsdc4KmK2Zpj12mE9ssVZezs7L8BGbgFUQx6wUtmekpFzZuFHRVybSu7k6DCgZa54",
  "key5": "5Xh38Qm8YfQ3RnNoZmfBVH21pmn1AHGzMJzdDtoTN1hB4s8c8rZXgYyEB4TxAGBEe9aohV9VaHVnAaP4nivCE1E1",
  "key6": "3TxY3K2eqkC3DDagpuqPWFeMA8d1dzrLPjbVg5c99JSb76QSZVnmHxkZexMJrKnJrmJk7iBC1fNt7mEfSkr2cjRG",
  "key7": "3nkyBATeQbwDPFL3T8LMaTcy8tNk6KhgEuCw2QanWCU6geHichv4JKT3JUdPGxQJFMXdjQpZnSpTyNeqzo3GVb38",
  "key8": "2aL4QHKnqeLSCLVZtewkaA5g2TDyvoLK9CfjhL7qdNrarLZ9VtSqDv3yTHXKwvfHGCupMeFfMP9XPga9yVV3MFAD",
  "key9": "4Lcru9o7FRFNohmabfUUi84FAEr8DAXFJmDtyM7jUVzWDBWxvgGq9PEQ9GoXRNZDtfKrR7CawiJc3icy5cxafVf3",
  "key10": "zFcA8E4VtjV9ynqrGRaCUfDAomi9ZAa3w8hj28nBxBZ8L4ApQreTKmy8NDo3V6ynVvjruJghhZr9wCJ59EVW3cU",
  "key11": "5BjroBa9RNv68kQS6dCuUFgU2tG7CCdDG2zFpnyWasNZYnErZiJbvv3cyxweYCorU92vWyn1sySJGhDUnnHmAWyW",
  "key12": "5SwB1YjbERjf6KKT7PQc9xEaTPJnzwVzzzxY3LroPXpvn24Jko4THac2PvedfejYp9DTULdQ868xvAKWJRsscjY5",
  "key13": "PtMGXoy6xvgFSnEyRPJhuiMffKWPJRFEEt6LXVLgAQSE8mCrn7TQ9giR4tPXZi53DyL7Ji63nK1xPX3rF9TuPmL",
  "key14": "2BqdNPaBtYqbJdsgzhaTi3wymjDkdNsCnMZBF1JiwLRQpLtyKWBHD9dfmLKYmkAmtY74ge2ss8EEdQQPbukiLwgA",
  "key15": "2gN96B7j2PQyrKw9aiF2PETgCKhsRpsq4qBn8J3uJLBvNj2FTDKCudDATvqpRUjk4nfKqrtTJTMxrqGqLie4gDif",
  "key16": "4D4dUdxmN3XL8MLcEFT8U4kjqspWh2v5qpPtCmAvWGF2ChnJfyNATbFyc3wr1VGnCmqKewJFK1tL7Z9a5fuPT4ZH",
  "key17": "3odp34WtFTMYSkuRSMg9MrH1ooM82X7q97AgZ43rxheYGcZCtKHV5hPDe6fd8o9JqG1xCmLP7ouvsqedLH8EW8nD",
  "key18": "3Vy288udXmv8Doih3kCC3WwhPAa3rRN6GU35YS6D3w8W5jf46is31A12NZyAm5egU51sq312b4dKJ7HnLAUpAvJ",
  "key19": "2YZEZegoVYFsUzenDaseXjseSrSzWYzRASfMTELqRtZgfbNH2Em5kYt45Ax2zn7NahANNRhRphtrk1NCbdgrb99b",
  "key20": "3upU8b5YyNETJ5ZXDQzyPrQ1PJuqgAd5u19X9tVz7iNeCFarLC98XE4ad5nFDmZM8y7QFXooSpPbhUgppgdbkzye",
  "key21": "21ykNvqyn16Ww8soEpAZyoN2vuteH7D5icWx6XyrAk5J1xMfnFpmy34LijTyD2fEshcPPeeBRxaqYyqmMmoWWt1E",
  "key22": "636yif8kpdzo5y36srigq6b8J6DSPUWuFh37vwyq7rspaWHNZYtzUfsBMaGkoPxH8RPDVfffgPBS7bM16E2tfdN1",
  "key23": "5XxDw784CkG1oHFcMZaTTtuyrQDJKnUnfB22oTQXUUbHFDFvotrfPuDe2pDd45fiR2fRU7Bq2o1f1G8dULf26rab",
  "key24": "4e3ns9XYJ8QeVfuZgrbSjHMSa6w4sp19VFZbsm8zD3cs3ZbzVGyFXKMB5H7XQFTg4QaFmRzYd9PQvtRD1VqUYyjx",
  "key25": "4ddAYtkQr7GKZDohSqXGvTTTp92RHrcwauaHkLTGxqtKrcp3f2roYdmihKHmhQ1K9HJyiJsBMFoa9KXPbdbSZpfA",
  "key26": "9Kg4tH1sjEHBrqwcRZ2zBPYrbXo1whS6qLtpzYby82jTyMvQBZrTx2bPPx1s5YqcG8nPh2wRvNyaucjkoGagecp",
  "key27": "kNnJfzmdPtws5BBxEVTSuzMbS2Y9iZPRGoBVDUGzde9RLHEin71CBnRMQz7b9Tag8hDHGYjK94XNGWhrrTVyJZm",
  "key28": "255AgMiexD7HFFkrwdSTKJ1hCbKFCSGXwJTxZKRrHqRMp2uFHCaHjnepmZf63ehbwwWhxKVfCRc8rHq5qNso2YsP",
  "key29": "5EHB1MxFTwfYMgycuT1vSY6epxwfQsxGnFpibjJBGA5Cn146JWJtWqej7XhVxdMVC7tnwE5a8zzQ6WGTshaAhkTH",
  "key30": "4vFah8jKV8iyLpkB8PvuZcswC8pHx2swQtawj5e8JVY1CFPyiJMoZLG9SrSe1i9azpSasdtJzPakyjKpbEXtipo",
  "key31": "ewrR5we8xjdr7yQ1uxe3Yx5RLoTUdkKmGXCSqiz1Gic5ML8f6sc4nk1kWuN1yd5t6oRh8NWJ9GvV4CCpsmEfzE7",
  "key32": "vTE9i3imxQ3qR8ECu2j8diBcAEzUFWbpAF1QqTnNhhvHt9EzfmRKvDeCzWGEFLBTwwFQ6Kk5hoC5C8D6T9o3Yfn",
  "key33": "XqoXMFx6mLgXeR2erko4ozZNYbqSoCXbauSSZSLtedvdecJsKDpGbcr2fXRtCKnNj9yPnTGPsnYsqCCYFtLtxqb",
  "key34": "5Gfbo91JUVXxYbUX6NHL6WcyuY54LfDRyNdNmBxGENmDF3JyAMuTvoWwieCMzXteHGaQgDTAn8tv1x4yJh8SvDuB"
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
