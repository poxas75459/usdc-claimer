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
    "4gEaiduzfw4mcXidP73fdpxF6bVTAN1eU9kNBUs3DB4pBkhG1ubF6G7bjGj9uLatj45ndC8MVDb9Xg5jm9YmX2jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPzj6gvtwjgVJprNvLAEj4G2XNYxZ4X6uMLagshG3WhMhaoHLsAtnMFH4arm2P8eYoKQj4eGbHW5W8NohwazM46",
  "key1": "4yUSdH5n1CyNqoPKboWfpYqPSbXNyYV9YagSjLnH71mfPZUyo5bvoBo3HPRawcwzcxuah41KBPTRLv155C3HSwC7",
  "key2": "3hQkF6kf3fHJoMrwb7Mu1wExL1vyhTcmTk28QkMjmBbg5H23HSxycaH3T7JGUDSQZR2K1gJArvGQMXnJR7qFZUVA",
  "key3": "4LWy1AqPtQLxPM2vLprsUnLB5PuYhu48EHa4s717WFRDEyjKD83is5oJgWyhsvxK1g15MdnfRfp83VVPE8VoGcjZ",
  "key4": "2qGcYPou9p3YawRdYrnYjQs1VNcwrUiVon4jx6rmZ7EhtH9YHjM8N4fbjBw81VkKZENsZhDo6nGnTUwd3PoeUkAo",
  "key5": "5UggcaUeN9q6dRASgmVWrboHp4VAc5XysLmUAQvoSnkDaphSM9aSvtD1aa7tmKuLPwwvntjPDLaMZLH4vBfzQUCG",
  "key6": "2NsuDmL3WRhL8NogVzWxfcQWsZk54h5bgkZDaND1zF9ZfK4ZxUT6XRr5PFLdtQZtfWwFa59b5hGvoDiYXTYEDWtP",
  "key7": "atJRmzLMUqN8UpWJSXdezbR7uHK759niFrcXgDE95DYu89vhY8xESJfUPbTzmc9UxzDgZka44kwH58LY9RmPa68",
  "key8": "3ZuxsKXiYnVZMx7BtKvvyZidG3XVJuQ3zNFczco7oC7wm8T8ErieNLjD8SMkwXSrbBPsoRZ1rwRpQw5kGpLb76hE",
  "key9": "3mueqU4aaWPHsywoRNXKUcn8WuZqf6Ufgh443Cv6q9Bxzsp8gXvAt9Le1DFEsL5ZSkfxw3Lfc4CynZwV1pP8DJ7z",
  "key10": "2uvqNWpN2sMFb43gpWSFdoZaycLinMZKwMDj3vm7AYMhPnq67mTCrEgsWe1v3yvDBSHHRFyg2DgYrEWTXS7TY4GE",
  "key11": "3S2QmrCJHFyzdnQkyAUyTrG2FaGeLA3FZA9MA2gdLF8attx2VDW4BgtuhAfokpRdegQ17pSVYFZNwuGed2KBZ8Sn",
  "key12": "3VDMTsZFSi7qTthoFrcwrPqdXQH4sLP5BXoXxtAaM2SZHWAP7mpHv6774aRmeqsf9mvtZZPr9G4zTNuwUpyhLWMq",
  "key13": "3qy8T2Hk8GParwx7xN47DrvtFQDWYtppFWteuZsUBM64KL4EUF9ecF1cNjnYyzMkqkrBJqirHW2Q3981w7WCXaTK",
  "key14": "4He7khF8DfcQ4re1GMPqCHJKMHfahRCvm9huPWdDXXCvY6wJcdPyn8coAxebiSCkxADZHJMBfdXRWmRMJzw1vXEL",
  "key15": "3uTDZGekrBjafCrRqS7BZNVhKvBgHYdmVzZJvvNU5MVQgJ4MysLWFGETqgeK1oVTwASwVXpBshYco9kEETVnchxQ",
  "key16": "EmcAnL7Xr372zKJ8smNJh5LnKy3UvzXYSNQxFQnv2ACxBEbHcMGNLMd8QGw39gixPMZCQQDdNntCecpMhLLmmnu",
  "key17": "Q7eRxiMJmfNUjnvRAYTG9iUEAgJBmCh999Y1EW8J4um2ymRGwe4GuZmbXLnhXqAPd7QrMe5UjTVCiZaP2w6nChx",
  "key18": "3TePoApYT2nPcWyNojGpsUP15A8G1L1F2W8UDNM5zC4FYEo2gn1CU4wVTruZx58e4yAMoYH7VKiqfFd7ogkJ11aR",
  "key19": "5h2sFRgoppRCezjyZF7g9TFQ4Ny6gqiHWw3zDdHkqCkELsa42Pnhbj9FEPSdtyqycdPfCZqrEv5ULgm1hN3AqXi2",
  "key20": "5GWscntWk5FiKixFmdnYkM1tveroMMQk1KGcNv9i5fJfaq2aekwkQyfsRyBKf4xB8zvAhcXaDPUZTmge17s7fuG6",
  "key21": "3qTHsVAp24TfLVuBNpgtkGAj6A4jdWkG8Gz7hNzvMN6yw7mJVTTAsokATGNDTb8PLGod2naoftRvmHdAiP2XGvxJ",
  "key22": "5ZktwfAAwGVUEzPD5GvdMHjMrMikT5U3zNLfeybe7RumUXTcKRpMCgzApMsc73Ra9ZCgDbQzScZcP9ibdCTeu2j2",
  "key23": "2VKnggMHGYCysE499oni9dZfEMpFx1kv71gQputeMUwVVNHWYeN6A56a7RftLJX5oPsNVwnbf2qXXuPAqVUckSQw",
  "key24": "2MxSLfStXR7gJVziHfQs9XU6uzPZ1RhGUDGD3Q3pRGnmjzKAbwqHcbbsAzHRkU2TeiK6CMy47YtJ894bjP4xszmV",
  "key25": "2t5D72jkbWA72M43nb8jP1GPzDH3y6PMrqPuq1LDiTNjnNXyWQ61q1YJehapLhuVnPGMVjYVAe9P8pgDXf1sSV8M",
  "key26": "A5ctCw4AsNUVk5qXZXarNUXQiBnkWAQjhgtkJCacg1wSNx1RwvLxdxjxy5XQ6ZwSdJzT4acNDrGu8DFJTnvNrRa",
  "key27": "61kFxN6iQxyDuRCgan2Z78mwX6USYFoDh2F9Myh5nLD9gv3i8erUSBxRLDhTr6RufUCYxYkAg7DGBUazSHS7eEs5",
  "key28": "5HevmGgHA9xd1hV5k7hW5JRrUp3Ds3og1QfPi2S6LaNUNbf3ecXFSACWik4fFJwTeDmpNQaqcbZw5UiKhGLn6CN1"
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
