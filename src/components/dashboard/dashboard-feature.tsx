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
    "5ErGXF2FjGh2EjcS8L4j3vMxJ7uffkj33h85nf6knCfdzPS2BBvnh2tcYmuSVSU9CtEsMFpvejDeDcA64GnJ5AFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNETgu4J9U7tjvPUVnTEkyGthSucYE4uFDk4dkxJPzcsaAZsAmZy6iDQSs8kxt1NHG1Ckqj4xHS1ANu2TkDDtM7",
  "key1": "5bLNDQJprfWLhQqPJNyDdPF38fJWpWYo9LhNSNpsWbPfYgMS73Pp5aNxzD6pd16wmjXSHnrdaeXkNqPDSiCtaHz1",
  "key2": "4wswppH4w1YvPn5u8wSCTfksgZEGvzVVu8B6R2L9mHu77kYst5c1q5EZhxdHxJLB6qZ8ercUzTPaQmhesbZKgGgj",
  "key3": "5FVQEUm83ygXxUV98U4PZUCJUTdb6HS3Vm6QmoVob1t95GjSKacgusDZ8Bg7ovfK6Dkh9gaFCxE9EScnCdqezpnH",
  "key4": "37EoMhS3cQ8boh3dw1J522gpCeWX1DdagiXSUXo8F4hiksoCunUVnewXMkGBaDQZd51DkziSEgJyWowa6Je5ptUW",
  "key5": "4TiCwU3G6nFDRStNEEz9EWoo2ckhVHqZLSNXQgnArSz6tRro3V49VdYC7CHhUBNRqa4ckPTd5bR7GDJLf9BZf7Hx",
  "key6": "Gj8zQNnxPtPu2R4yWMxkzPxGNM1GEs51VL3ATxokkBsuWmRXYaXCmRS5p7Z8tsC3oQDUHGtwi39uPoej8gEShtf",
  "key7": "67nuuXYnDorik7N6gkxGGW4UwKavRN58nAXAM2xPECe57hu87GJWc8Mar2AEjoRNpzRs7iVTzaeZ9DbUuHvQNCix",
  "key8": "LkmT5u9m4oixsqjVx6VjkB8w8ZVRovSBJ96MW4VFs45S7rZN6sp3jdJChAivXrGawqo9irF65WZACehqr8kwnkm",
  "key9": "4HPsBViL5iGER7he3h9v8LevnzD9jRJ7kVJrdF2JMqXgpC4CCkXmfYYathELpkHMb11aunFiHwzZhvhd9QeUA9jE",
  "key10": "4C1MqpADpb775THofLSu9W3VzrhFnqtQb7x8fHYS6YRiucHL5BQQzFSXpPoq7y5srkKDvpUdtwE3gTZK5tqYRjWF",
  "key11": "4pa2LxwtWV9P7aUqCUhRqkPpNffkshKdsfMDBEjSMXKwWrrsvhXcsSesejgk5sdXT9Zny1NxPYPgdfa1AM6aW6go",
  "key12": "3fuAD66kSNxbzPkZWbY8uXj29bwkoFscUUbj7HSQtxDWq1HE3qvM9M6DoDsS3gUDcCVjrzpdQqyt98rTHEnjkVLB",
  "key13": "28s1GeVxPu8b9CdzeeGGzaYQCoHtAQjqkDtteDb2ndSKtuyR3461GpuN6r4GKwmqLQLivQ8G14pzCqnL5jNQd7Nt",
  "key14": "5odc2AVkksm8bMANAvBBFREmjkogx59kMVLCpdQzAqiKw81BVdSbGwFWTe1rdvw59mdu2qtxuKTqcuCRH5c7yHKt",
  "key15": "2vqzyELc5watMaZ5hqPuQdXUGL7c7QQuFdS74Z1RwyyHrgBRGxu5mepNPgpn2WmmnK3wZBmPeDLAZ85kgmNEamJq",
  "key16": "5VXCUEUEzF5MLum2z7wYj3BWydhWfCaFJbnPwMJkatS4EiHNGgrPCxufxCTtUHws2bidimaf2sToZHde7mMho9dQ",
  "key17": "3ds9e2iUojFHtjYTmWr3HCKW3tCM39pGt7WVQWXebWyRTCCFoe8yfxtQruKktYMjG8ncZLi7dfMbxJ9h969tWPsC",
  "key18": "4wCTigRJ8PcfapPaEfYpCrx273xtxm6ATeyEkm6UU4MuScS8ozih8ECsoZHux3Ln6hEHDXKKzqtkgQo56XFJb2kX",
  "key19": "RWRiYSuWx1B5S2W8ZP5QH85uRmnYsPZqJUV1Z2bPvvRAzYL26UoVDiNPRd4TmRTBQurnLTVENUvpWcNZZx19Dy7",
  "key20": "KWCvhSHsq8m12KucxTujZCAnWrAejQuoDHGnGeph8tX9RBv37KxcmPzxhQrPP8sBaxjKNCHyBAPf1BTfDgreApM",
  "key21": "5zSYQu1GK7gmSuVTacLkms68EE8YxApVNJNeYb1Q6Cq1e8K5A9iZuxVv5sMu8qofND1NP3AYL3q3nhd3LTsvVUtP",
  "key22": "4GBMETNtcViGgamkYf3fabKJaZJi2rGpz1Jp5YjZFvY59G1A7oywnbvfz2tz8BfZtFMMdACVsBkU3Jf65PVHKszA",
  "key23": "5ZhtKMDEXfKNFczWSssAQabMQ492UCuXVonNxPFdjw9dUjrRqb9252wd8grmUkjAzQD4rpjZu7afz5rUTikzsb4x",
  "key24": "5oHdCwdvu154bQtczZNwViWagHpGJt9EpVjxDQXfkweE42FUX5NHz4pRpbLBpiQqjZKiBiantMH2Z5FoBGTvYtMs",
  "key25": "4UibguwGRpL1jhBC8ADG7vCU2rjXUF7RU4MZZxZaZidE1wfdtFj2ScxG4tvAWxcujnRKoCnHCnxq45vzaHdv97ZK",
  "key26": "CXq68jJQETiMtboaZwMrsR7q9J59uYQ4RxsGaEZ7uyzy7DeBPfK9GPuDFXCJhNED6e4ZGRJutWRFLGa8x3BRFe4",
  "key27": "27PdfWiF7RhYnaDkwy27Bq1r7Lqv6q9pT4CCDEoFEH4RoTnf61qrmag1sD7JD64TD7D1M89zizRVBwGN8ZJBRdiZ",
  "key28": "5HQjDh9Uw8RDQPTobaGEQeq8g6vCwUY2yUgYibUh8hn2Bj73RKmEXJv9LWP9vZTbsMciUw1U4BhTjegMTidUCwdp",
  "key29": "2fNbNE81PFY9H6BKrXKHyf9HSznS1TdxKzXWsYAtweJp8T166juqQM4jSzDsuaSxeFkynPkdmf6Ef3dB8GEkCbt8",
  "key30": "4gTKtYQVv7WXiNMWfVhRHu1tRAYd1uppTwuVNub8z2yGoiZV3rTZmDyHmu2VT8ghQ5FCff59D7G6y5PdEji7neCA",
  "key31": "4FG65FPq9RcdQqatoDC2YUCXDtyAvjsUnbbxhA8okHwnvr9cgz882G9fm2zpxpSg1WDxmATagyac9TgJF1QnLpdN",
  "key32": "42rH53EEFpaSyVE3Lc2EFNnqYMeNetj2aKBekqvzLYm7xkwubg32ntrgdAsjcqzgh6KebWg7HCotSC1LjsxYAd1J",
  "key33": "CrNHLqwaZSagXCD84iPXq8aPWm9Nv9vdAfp563yTuSDDHGzCMTTLc5ZX7uQBK2Grh3TjS7pWRGu4uWyszeEJLXv",
  "key34": "QYqQpzTeGft7ZpW7wVHFH88ofhKZbRTRCkVuQfsCna2Eyz5QDu9E87JvzE9X5se37pcf7K77nhuN4S28a4WUWLh",
  "key35": "5JsCvufrR5uDjNxPAFT6BfFgb95BmPV7aR2aKKRr36cPsvon5yiRRUziQntYrtd3JGhVrXpfw6iozey9C9Whs4tJ",
  "key36": "2JQeFCTE3YjZJRh878xU2yZUEBV8Sjz1TJp8ouNPqq6tzoapAqRjvS9BJeg99xKpFtmmMapJQpDYunM5gkSiTcsw",
  "key37": "31nKcKQdfxGcFgW2XNCmjvbf63cWLLvWgzuUe3JSo55tmBWST9TWTwt7VvsoLm1C7P8rVRR6F66wqeTCo1Ta1ENW",
  "key38": "4Qd4tA7DmZ77V8vPvxdJqvtcWWfiEZAYjf1aBFBgcdPWRCZZpLRsbz57ohViXRiNQNvUco3wdsP6WcEHrtyhHFAJ"
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
