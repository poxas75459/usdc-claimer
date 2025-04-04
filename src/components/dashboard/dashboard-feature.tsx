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
    "FygjqCzgBGdY5MWnjoJJ4FXiNKYnRWFckLQj4tDKab8SKDweJhWiMz58MCETuZK6Dmg6Wn6EuDo6soEHXt9K8A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGt4LWQrifW6JmXKHd9q5q572QiB9oH7S3nsubfnBY461D66eP3aSz5GwCR8JN5ErhHwRbMheiNKinvgzHvLPpd",
  "key1": "5fV84WmXXMLPWgXfbyiWPWgRLDMNVsMnqATRYtpt7qkEdzqxnGE9Nfk38o8LNjnxpBY1NMqUyA9h74SzQu7TVb3F",
  "key2": "2jYd2KHfTde7dZit6oQ72BYfvZTkweBzxTQmfqpta4QPnHk2CtKNCNspZ3XKhfjw96D4PWRZt1Joodsg9woC6znb",
  "key3": "21SJzSNB7tts7GDD6xcqA7rkEynJ7xeWsZwtnUxSMPErXRJnrAb9UTyu1VRZmhWnj7Rd7dtq5V4BrXtf2QRysFeB",
  "key4": "5kCFeCFi6zuW6TDQBPkgidJgphFBwk2mQtagrPRY7QfsJa8WjgPkCABiBKMjwMGxX1iose84WEMtwJZyd2Hc5MV",
  "key5": "3vf6MKrDXTnAB66RmdpjpgCJKjAUMWsx3nr65VViu4Dk1p15xgBMKkxjavhMDuDVH3vVgQG25AuQktCnuKjwZJZ9",
  "key6": "4MorWVRoeQ9JzqJGvtyR75Cwuvz6MDYmKb4ctVAqTLAxacjDfCVUfTKZvQmGN9ta2VKwmrvAsEw7R2ua1Uh6gXEL",
  "key7": "4qGLVj25FUWZz5ikF3LS3beSvWQGvtnGN7gT8fhUiGr8Ucfcf8By9yDpxDZEtDr7zC5D2RoRJby9ADbomczWEEQx",
  "key8": "3YCLyny8LHN9druLjwAHgHUBmbTw61n9PXMR26kLZQ9Eay6A2ncU42tEzgt8nqNbGtU7LZ9Z6uN9pacuBRvRgC4J",
  "key9": "5MN8upb68nhdFfCTN4VbjNM7n22VKzsd1QBZu5f5GxtUTdcAwq1uRWFpgfsh8Wfyr9TdMXP5FH6SxTwgoMvJxTYv",
  "key10": "4bxkgQrKwDf9n285PPLSgkVbx88x4Hs88MCaqdNdeEvuQaP2TuAioLWnPUUUm3a6aefw8d9DES3NQPb6wtvHnEMR",
  "key11": "2Q8FnuWBWddGxtP35QN6NKhuygjn5xAsaFEyGQkKHmKD4C69brQ94eDdB5VpcySaQrQXGqmVbeYC2fzw7ttkWneZ",
  "key12": "TAEaFXuPnRtTKCzLiieHtPPpEuZ6egeCanPDXJ2a5YCXsxGRCPBs1W9UTAzyyjqKsQinbctUz8GhsnNShwjQCvM",
  "key13": "y9sxraWewNdhtbp1MFcgs9BKbEgV4G6WcwBvfiZ6Dq6uwczVuwfrPztSkANSDJ6j9NbqhoTk4ZPmmUjKw5GJj9k",
  "key14": "vDHSSc5zPij5umZtbmQ5FmWPuueURjBcbe4xcgAZ3qDt2BTk392hAmaH59R6tKSAj77v1LG7ENVZJ7e4oqstww5",
  "key15": "3h71c3BBJAMVGFomEv5ZU9anJiT2eoDzAfzP7ESKGBM4bk2yi8WABnYSfDBWVznnWLP3zQTuPUxxGkETnrpzgPqe",
  "key16": "5AD6qKxXsGqAMDRVfypXZBHJc6GwACbqcVRBf4G5394p71pPNxujFyP4f7P3caXhWu8As3VjLtaxQfZLTRymcXrg",
  "key17": "61Pv2ttqp5aY48P157wNSzfxPgHbz1uJpFLbqgaStXo4eXMkub2xs9NB4HhePHZQguxTYmHYdCLGdSsmB4PUi43u",
  "key18": "4dmJ47irow3Qi8RbDCa4XGjizBnSyoR1biTJafjWaBtpsYLpyutNTm8LEHnAARrQVBvoTPEfVRb9w66gP7TRwEFH",
  "key19": "5sKLzxGsiN25DormXZjSJv2FV5tEVWnGTWLDeUqRCt9sevxt1SvbiYDsEA7RnypsVGnpLjizFt7JGprRxMTtEkoL",
  "key20": "3oKLN8JkENk6uompZXp155pbMZXUDPdKErnHxP3ovmFw4TU2Jb96KTTRNTMiUnBxcftSoREznHMXZjGfPCQcSiq2",
  "key21": "49tvTBgosmoJYoiLCKEA3GM8eTB2joRv9Z8u9LYVs9tHJvrzjzkKXfYBazza4h71ofDemBhvhTvceHfpySoY9zyx",
  "key22": "44UEYVyERoPp3oUVAGzCt7CP4M8WfMsVyYCqFRbrDBKBWY8V8LMTXrX3W14GiGC2buRmZburWbQo9GuuvUY6fijC",
  "key23": "4LBrLasJyGhAw42SxiqztMBmWXfvLzHraQn4Hyx8fvgftURS1HX6Jgy9KBnSewmNKknGVRPNt2DtKpQfnt8oEUfu",
  "key24": "51mrCxRNm4Hxb9jstwqFg2c5FjGBFNDpuCri3q9i9gvAkFwPC7jxf1X4qidBJaHyeD7C3BoTp5Jo7pAvFBTmA8Jt",
  "key25": "5vvBM3ahhPjHxx8UYAabzvxSegNdkEWwmkwYAhGVxg3VAHK9UuTMuT1nrJMJReBjVTFfD4dLbnfQe5DqhhasJHn2",
  "key26": "7nwAhv5KN188hm46Te1hA4mvaCsbHuysA9GoGY4u1X7cBQ86HbYfzULKVzcywYNtTRgiF57uBkR16AmQ2FQRLcb",
  "key27": "3Rq2ok3bxexzoaZpa4MWykGey6nkPXyFGzDFz7Fogirc3SACadw6fnStxb1PcXPwXB29e6rk5Araxh383DzUyBAg",
  "key28": "5uSF4oKyYZK8VuWJ4LNbb2Tf7akynqVdmpiUifnMmGcTrQ1uB9meesdYMYdehXxHd92wBTet7iv1R84gW9DPRxA8",
  "key29": "3QFs3RSNnkqejUiWWnkZ2LY96LsyWimwyqzdoVnbsnRBb6gXSsmeVcNAEKwh2UaGqgpDyRhaoX63y86LgqnBku2n",
  "key30": "5hwMdnNdpPfBYnSoJPb6rcMtmQh885jtKYCsj3vjTnn6tEBUzppYTVZQGiKisSckSNWZjNKdPZRkhSTeNYKzyZuw",
  "key31": "5i7naQCUjaRcDFi9QCAwYzMfbyRdCsz9pacNSUvcPiK2VbkEFgVhauiaipkMBXqgrt4QeWWZf94fbPF1f3TAkXUY",
  "key32": "4P2D3Sbhw21Dp88vWpb48WqaX8hFSu6UmUbaC5K6f513ZUzki9MkNG6NhCBSfpDM7v6U8GGGHPMh94AAAs7LJtg7"
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
