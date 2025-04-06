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
    "4cSKJwpyPM4p9UBSNHYyrgm5xGQSmBDxUTratwe1eLeq6wb5eYtrkaKX7gmshapadfZjS8kcsKtZk6AzP6sjJfrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9c2iE8XqnpJtRVz6mVz4yWw6keCEPG4r9Vz6KNNV2akCKHWLRPW7z2Ksa9FPtd7y8HDa4guasKw8Xi82c7W1Ns",
  "key1": "36k4wPoJekGeGY6HNT1bDaxdDiZEdnvnHnwwE9xGcnMZz7CpJ74ffqKgq89FnuXisLYNcHpkEPFhNHWgS5Yvg7Zu",
  "key2": "4dHyVzpUAeUC5tJbu53suYXMXHEKEVSm15wAqz2xQ7GTZDAVx6nvWkMPaEFwBMczhezfrKjBPbUiTs61FewHr8W1",
  "key3": "4NWDqtvuyPWA6ZQnZfHgNV3c1XcBxSsWuCQtmy14J4AqtAs5jqWGTv3QA78GKxPYBAedpGSZo6ZHqpbNYvZB2TGJ",
  "key4": "2g6MfTLRXNHz8KWYmu9ZpVj2dZLRRWEH1eZAjPRwtDZy7QmxMqRSMQNB62cnrTzgvEbkHk9ohCJsdocdA62fD3Dv",
  "key5": "4xfn9DCAHTJuQ4Chz81bcK1EBnqnaqfCB4oZACnAbTKBPvT2yiaTEc5MMVgDE4rYHKWDnou5Sm1qjpr797SYUtbW",
  "key6": "5HTGfShjBfvsSbtywTAUC1LMwQedsnwZLx4t5fQcrrcy2BkQR1qJZdzdimQwjBU6nKdmUDdCNLL1uCJ3upgdZoQV",
  "key7": "msAxQPNBvoLXAoG3QLpzujDHF2Winty5Y1xnuvamTHYu3Mg56Hu8wNLyc3Nu1UDqwF3NQ8tocWSskPcZALtV74F",
  "key8": "5t1hnEjbRydk99f5m7aeFKRgzZrPyAEGXD7dSEYdGQAw62c5mt7FXYLryfburoo6utnZLCYKbcQQpLWPfQHchEoa",
  "key9": "2jKvBC3kVYdi5S3HDAcqnxyCLkcsPkRfnJuJkiJykjYnAQ8M1DePpRZHQunSWygN2XRzFXRrnDXFaNqtVyqMzysB",
  "key10": "36VKE5PEHgmfX4Ttkc4Y46BDLAkyGHcwnmVF7Cskdp16fHG3tKY2ifPYYWiVJ2S1Epv8XqgJfBxr9HWXtAo7gjbi",
  "key11": "47vKGANSPvsUuk4FWYa96tP2aboMayt4nQT1ya1VmJ1Fv5KxLfbRaWuZ73BpBV1tSKhHxGNDRbDy2JdyHa4FLcJf",
  "key12": "nPkdQ1PKZUj9xijryEnJ3KbPdxAPZNLVCvMSegXRcTNUKiwkTWvqi1qVoi2FoR4TnJikVJr23GE8azJuRgSfuRH",
  "key13": "49NGzuafwhTKiJHkS5TVDbGuHBw7jG3JGaau2McRcGQMjDDy8iHLATn2Q3ptQKZeaGfr2kX3S9X39v5tNecmCRqq",
  "key14": "sUTSdodj3pHaeSJjAqVa3TvWqnaTyPK5b2kPHsYvphuhEni7H8iRkvvw92A8sPBVWL5uXQRTA6kuCbPjB4C88Xp",
  "key15": "2kMtM3nzFHbpSUpCSzKYpRw58yKVeXGvs1J7RxRncg8nzU4BmC7d4hpZ6xTkFNuer4v4kNZ4wna2zL2pnzbKNqhk",
  "key16": "2dTwqnV8h2yW2UjWSDTKaza3Rvyo75WRBqP3tm5TxvqPFuWmnF12YDdTsf1D8Qtpfc3JbggM6pCsLd9nkXrsjvm5",
  "key17": "2zxk9U26idQ9mrcyeBtgCL6PC9tb8b4SnBYGukA2bQnvg8XaRFCBp8HoGqHsNZzfJFsd4g1G5W8dcL5ZJxE7TuP5",
  "key18": "rGsxGixvKbbeTtvshGXp7B7qsxqMXLvwFAH2B3DcZviPtyp2XaBgV4iyrChwQFQ2g2tbRyJfQFeWY5XSAsuVKf8",
  "key19": "ogtk5ktktTrSBz4EvFYDZTefGzDrdVthAsaSn9o8f2uWVZa728DkjhguzCdX6noXK2nY6obbqijVezuA8nyDSGT",
  "key20": "4QkFT1dbzLc8zb2coHwbKSMTSfuuoCfqLHHkhZCLHka4eJjg4eQPN2nM56F6tqE7UUiJZkFdvaNXBwKELS6sebEo",
  "key21": "4gEfEUQ4626fh4ig4qcsbyGJHys7r8YYkSgPj28G8C5NEBuV92MpC94JWZYDDdLQd6tiGF7Hstq81chQdm6cAdaw",
  "key22": "2hHHLFkjiFpYoN6CkJrW2xnc28UioGHujt8mo7FjjoJBiZUnN4ETky3KNqEiMk7bnLwnsM7rDmg4wZysKc1RR4y4",
  "key23": "q6FSGsC5pDQxL3SuUhyabhcoUhDjTN5uvDuUmNdNnJ6pxYUjUR6oeyjyNsyK13w2BUk6mjqqP2z6SPEfX6UZb2V",
  "key24": "21ANWrqPRpeQZzSXp6QoTnMjCmFyUgMLgFtRSAVsomXmB8AUePiMXwx32jneNc96iEHgNtd9HQU9EUd9gvy9SoL2",
  "key25": "2rNeR4izVfyZ3JtLdNoQTroBsCnnSEwTC773tB3dBabnbBG38HeQdA5FYw29nx8jaoCr7EptcybHbEF3qdBSERas",
  "key26": "54JLP9N1T2uzZ3Jh6ZXGZdocYixQBtW7vfvys8SSm2bcbvPQXz8PjMLgaFWkcGDR9ZArhAPQfDQ858HDzEiZxMwo",
  "key27": "3goKHbBEYXsvxJfrVgsU862AbRiRZmWx86Qcd1xBUtG9WWKeBjWk4Hp32hEzYCusKk3hYSpxUytwfKP1bJ7Zhtih",
  "key28": "MkgFxWevYUJErjcmFX8xwV6ADrEy3V9AxjV6xu8BWKmz18bgZ7EMsFDBAcGoRZeEqfAGM7wfWa2HNrpEzNHiaG2",
  "key29": "nCcWyvRUmkPWvmDGtAQrugELnJ2vZMp5r1fs1T4pzDfwds12UdMZ79fFEshcvaKzpgzznYtnC1ZkV4eR8BzNPDM",
  "key30": "2a64fhU8ZNQwLVQw5LpeX3QVr85JDGfnTDnsC6kGo3Ad81nEDzkG7g66JYXYyXLaSJvLZ9MjJpMbEnLcnx4Lb491",
  "key31": "3aQVSK2BZD2vWSsmtYtoP5n7K2wo1gwbhtzyDM61DW4USL1pDTBfU3y9sGk87kj45XvBCBTz4PgqnyVBpbTtBzS",
  "key32": "5kcyxyGBQkZJyyky6nK7rAMWLguC7SY6osSUeYRYqqgqFPmpLQUi2Bm9TitY7PVAxfJpqLDQEudQRDVYTvWaR9Q2",
  "key33": "4H21uozyKigRPYRiuUn9eMgysKGDcZpM5cmFF2t16YvFqUGN3zTBHBaAwp1kfvNSYibHAGMDPDuYKmhmcvgYtw18",
  "key34": "3NJR3U4chwbJzCnrTsV2ZH61yCnbvP6FstYde78i6Z8nJyEXztXD526qBdkev7P5EgFsWB4SUVotDWh3DJ6pVRg7",
  "key35": "3kC2sTw8NzgSikbAaBpAJkNqwbvMYgqiiKmnFrVKvPvU22SMJEtc2VVEPQ4pruz2F26kaJRmS1QNa5eX1hWzMMQg",
  "key36": "4hYG7H7FCpgcGVNFD6Cxr3cQQMiVwhwq91RtarnLZYGPW4KFsN7TqWwnx9Hfc1HwZc6GU9PugBwchihpJev9T6UT"
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
