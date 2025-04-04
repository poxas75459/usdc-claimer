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
    "47p9HEPHBrz1VsteuWJbE8o356SkqfGwWhp82NuozBc5mWYoAgH1LJoKixAwiX4CCggBvsmM57n996uE2ZN8ySgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d4oRjXXr6EEofsFfJzJxGyfBn5jYYGwWEqpuB5py5xgmagXNEy5fMrWujTerxVxfxRkJsVXATALSjArcStMyK3e",
  "key1": "266XMj969UvVTiqumiSrY4foHGYdX7ugF34e2YSWdbmCVXhQBeeisPrQboKgawZPUdaD2UMsMED8jco9p9uPbmgx",
  "key2": "4TpdtdU4g1HgnJyLQGApJijZLVevVRxYe5wxyxv59G8k5VZ7RwUCqctdnGguLxUZe7jEXgfe1YK5ZdZQCvuEBcAk",
  "key3": "2teLdj8Qsw2D7NAgnnWwwYHqviXFAewRkKTfttDKfp2Q2Curbw6vC8W9TTXYRLHsGmKcqS7DM2wSqD2SEHx9jFvn",
  "key4": "oDkiqBk5BgUEwntmWKKbLRtEaumgZGR2CgqfBmmMScnLtctyMvQogSro3WHqRYRZBZiAbiZHiB5f2YjMP8uXmYU",
  "key5": "2JK3TU38hZhbKKReYS7BBjFeva3L8ugr7LN8XMtvD3BSMwKRLBHrmyAAXotHPdahTXAA3gsyS7v9ewdj4VHTZyy7",
  "key6": "t4VqUHJr9tCLAeL4UmFFSyJUcfZUEqBJss4WsLmLT5QUrVegEU181gjMezq17eQv15i8NFLFkrPDGR9HoeopHtk",
  "key7": "5JBStp71aU9SjLKiUAt2EbreRNHmC2sfizjGJrqcsSJK13pNbCMpM9qkDWRcp66eZeSjL5Ao5ZLRuv2ku9WjRSAQ",
  "key8": "2JTFMFoKQVM1zwgTDJBcJQPJDQs21upxgjQjmP2ayhrcdYtT7fpcB5qFczMD5rQLydRXb7Bwyo13oQMqGRkZ5oqV",
  "key9": "5GgP88Sf8rJtZC3dfuuTiUU2LrTjj6RLSjU6BbmJGi19SfnQnFZf1EaypaMmQNUP8wUAG7Q8yPGRqS9XYDC3fSQX",
  "key10": "4fG17JnJRdHvJGw643Np3YhafpsjZacopDxJiGByvPZ5pZuDsFWU76hXbP2XYEXXf9okGNDbqDVzXPuEmxpGrENp",
  "key11": "38ouCvwpqBq44L4Su1tyzXs1QY87dFmHvWh95oDFP3f67JGbHo263JRjP2Ej3cpwkg8fxHHsTS6qSvVNWneDAB5b",
  "key12": "zw2exRNk1ZBfo8SFPk9CCAnEHHe8Akawi8kRzfjPR9tBfRgifBV1dtAtd1yA63y7PsaYkyofadrkZp6TxKhegRW",
  "key13": "xaaCY2gcU4ZHS9U9Fgeu59WCcdnHqfCmF3QrcdRdsyGZKgYHYNWhL6MwtQoHuR3Fr5mCo8hBjA2gbUdjkeXYpRT",
  "key14": "5ASWem4c3TPAANaEHhCwiHmy3CyTNxGKRtYsakkxVMpRtYFMkfHDRrmX8u7LLEkQpxTtqp46xbFQrzXPDGeNoDm7",
  "key15": "27AjVwzDy9RuqzXkw6YeNdnJbGX7m3r9W4DabWRPMH75g7eizJ9oyS2rYFhanmSVGckCxyWwgfaRcFUHonovcdSV",
  "key16": "3gzHPPMQ7PEbS1BYpuvL5JtG5oxhKJixZBV17JDa6W2rWi1ymXEr6sppxP22UtVCCJksqMXgHtfw2zNeUBm4Zpbp",
  "key17": "3VNs56DAHx4SKrsMxB32979rbBTpLTVE8PhkyC1NwVP4DyLiKVdEcCcwEyNykkVB3Ce44BMJU36xa7pifE9nL7hh",
  "key18": "56rmAxx12W8MoRJQyCvvr8pKQACMPixUNWaE2UTjPuxdccigsYjxXERWRetTsUVce2MYe2gyQ1Rimqk2ega2duQb",
  "key19": "31nqKPfvxNFvQWVk14pbhDw1aDpqMXrYjGYFSz5Y6zRXAi2kDfZevsxYvcC8JkAgd2WQDAc1dniVLytmBUZek7SC",
  "key20": "ykzmgrwBz1KrjA4GTRHiUjMqzQZHoBJcZQYNqJkFwNJf9c8UCkAiPm5F4Xx1JX14J2f1aFfBpcK6BYtFuS18MY6",
  "key21": "Duhd11pvKnom8PngLY6qMgVuG2ipFDC1Gq7GpQZ7H1EhcxYNzTxNPxUCd6TqW7J8uvjAnse2Xk5pP8DiD4UaQDz",
  "key22": "3TgJHHsgadKkxWJbuExCypwYUqYvcTQ58BDoRBocSCTwtfTdzJggC7fC4aPH8SkLh9vQDg7dSNXk4CgYwcLwqf99",
  "key23": "azzEw3KK1QDRAkHVhEqTVxaFbi9m6k2WSgUNiLxYARukNNKQDdfjjtzLDybYqHZCxxtegLQzp8QGzetoPkuYpij",
  "key24": "CRXqYCJvWDTTZ5J7dvNWCTUb7CYXSGJGLKEcSjiRzhNBDzkvUrVifLHDGmHP9kfvXMygoAGQ1dDjJ8QC7PztM8k",
  "key25": "2TQ1opjoaGh1USfujgz1QDW7GjiNpAGoDy2ho51sD1MpiioV1sHmHG1Xzn9nDiNkpKWWp1KzToqFU1Mx63doopSa",
  "key26": "5aKiA2WBaadEBKAskDd7jhB3m2jzaFJz6bckNYBYgDr3Ai5WTbfGQYyb8u15khAMJ1DGBWwnMuneokdcMVSbjK6c",
  "key27": "2QfZn5SF2xXnN893BnH6v5Xa4RDNqEUC3eUmfkhrcdv8s7qRa1MHH7pp3x5NWVMzR1QTJ3sCSnjvVkHpcEJYLshA",
  "key28": "3zQKWMzoceTiXV4Am7QYTpPUFA3hd7h2WscKy2RTTzjyhSVt6jLRxKFPMWCTDRsbQWpiHmkKpCTRdCNAPByhGcLT",
  "key29": "Cv7qSnT8iV1MgGLTtXeY6154HH8WvuNHpUEbD8D2eDyngxRax3NHqYuxyeHFd3Dp4jdHEnjzaLKX3BGV9Zr9kRj",
  "key30": "5W4q7C6VJrhDZRvt9h7x7MV3oQTXZPAFgqj2mC7MWyJUWb2VrjFD2GyFDaBegkfak9EYbvmqhPNtuUPgnW5xc3r1",
  "key31": "9ySNThnF4jX6wxFvzsfh6jpEZNqJqHtPiAd6v2ey1DS2BPmTDbeyKLBqctc3ftufb7qw2ZxVF4eg5xgmc9KJXb3",
  "key32": "e5PCACHutYSC5PxbXmVnkPpbYvhCkf6FznoAyz8K2aVV722GuD5JFGi2VedQKjQH2FBKJXT7qRqCSNh9NP1UoVi",
  "key33": "3W1EbjTdeJsARBXDVqtcYkdMexLcqwgtZa8m49GLEs8Djg55GSC6U9dWfE4L4ehdMs5aMpyaXWhsSHLWNQJ6gsev",
  "key34": "5sF4vp86NsuBFRDdZYrfKwDmYmKpFMDZucK4RZgtYvfxHvuiuDs6HaP3ZfXQtMqGpbVheE9w8zxXy38arQmo3WRz"
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
