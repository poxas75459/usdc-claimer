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
    "5W46qkMCyXNuyiPLmwSQrcBXy2FTPAdJhcVowNbjaHuwPH4fZ1Rk8cHPHZBLLphcEmjPVQdhah1Hdf2T68ZcLbTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XP7FKNBuofArUuiHbnYxkCYKg64xb9RnBa6wt5wQ4tmxg7z6VuWbzXhnNgsBHUiVwK8t5VDotJe77WBwDvxe8yQ",
  "key1": "5QCx6zdtTMropFKc4NQygNtK2YCahhzPkvUAsEsCN44TLPnsvPrnCk9jsoJTofYuERCAbaRXtSmfyBXFeoVT4qGd",
  "key2": "39vUZDbVbsoo95G5cnq4TAthjkrC31DTudFg1G98eu6cM56pn886Fv1ZdLhPwcGdhqb6eVbi1XUk4vz5CmnrAJLq",
  "key3": "2jGyTNWsPrBDnjRL6Axf7maoDRZF8gFkkmuawG8qyaSrYgbr4t22qzfzM12s3vN87W38KgmcBSCzypkbSfVLZPJf",
  "key4": "3pNAUTzhoAbZJcr3GbnQzK4YnUD5W7fFiijVqUxU6XUtYgjEpgPCucBo2WKpNxXGRV7K5Xq8rQXEbMfJMgYmfRGs",
  "key5": "4JcNqdeWm7wPaybmaLbHUiYJX4TF17eks2nWLDoo7NTEehYUAXsWwhJkfLv2RsP8KuUxNePvEwvJcaq3QdLCdRYU",
  "key6": "FjULLZyQrP81ucfk5mgimFYF5jkL28pJ1pDdtogSxLDd1mJzg4gkxa9TSUaReUDbybU5JY6misNx2hqWgds9EHB",
  "key7": "5gjwn1nTKhhiQaKwEJwqAxmagtBcuSkwSup6KtkCWFYb8AiHGHdGD3ZaP3DHZ9yyGHnbahi5MGTxkqaETmFYm9os",
  "key8": "5N1EY34Btk89gJzZB8owGPbrGCSYnd4WZo5S6HGFYUGYM2JUChgh5guh5rVhtq6PfGLMMWjkwsygVZZvwy4bkDM5",
  "key9": "2nRviDJiFPet9EyVK9jbAfy9tuAVPJrXkYTWaWqD1uauZ4g9e9b7N1AhkhxvziARvm13FTi4Ai6nHaLUoEe5YhD4",
  "key10": "4AsMRfEqEKcvBZkoCDHxsqRWsFkg2CwyNTGK3JxCFKsnqsaRH3GikRJpLn5vTEB53FAsQRNJKNsKgkdCS4bxeezC",
  "key11": "3GjGSWhto8eTfzcyh9ok3MA3C79U7kR3Lz1U5XRnFNYovryMZspaQdzwP32TLtZNZhLpMHQDZbFiq9LGi7F7xfGZ",
  "key12": "FLyixbkpyyJt6hw87xjY5Gb9e1nrPzz1YBMaDid3KUwRdCkp29fV6WHAo3E8Rk3oN5uF8uucf4DmGHUexSGpXjf",
  "key13": "NWNogvFYsDJx8ZWsURVNz4cVSMcB513ZCFUvBx9B9sduApWoxMnKJcRbADiwYzgaUAU6vNVR1BbDQs65fALm66t",
  "key14": "4y5X9hbUogjfa7AA6n5HnGhSjGmRQ65w5HDrErHgt8UYHEAxU8ddkgSP53WmYr7pwqhuA3gCnYHsJxES5RDLXLVW",
  "key15": "5U8556cBR2BaYecjgQFbyNqwFaFMTgSP83GRNFUoJYWy6Va13iNvGFKH7TJ48UDkLBhZTAoh2ABRpHMPJdgrePma",
  "key16": "38rMjP1K6rz7A1pQAaUTUSZeDm32h7dJLcp353p4vAu1ePi3cWQhhRTrTwKGubFqDZ7K9GxB3NSXj6wui5LbZszJ",
  "key17": "2LpxwL4S11LktMMetBnz3HdfYDJYB87JrSRbSq52cTPrmtKBi4oEEQcywaZCT8iC1mdowJgrVgzUmF6trSxmZvzU",
  "key18": "4UYYcWCDdnZz9pg4RfjDzaaeijSXrvX8rPPe8wzBpbmuaDv3waAeEPg8wWfZLAo9kLjiyCwRRU5LH7zc9NfgoXY2",
  "key19": "5jzwgM9X2sMZKQdxqvmhq3hJTDVayDaRy23wSRCGgm2eSHLc7tAZxwAi8SxgJKyxBfa3MeUTvBmwE3Nmhfs3s3PU",
  "key20": "48LSsyH911NS6f7VSH4RL9GF9NnAAHd42SEy5GMopC9PoAF9VMWutspUYXMpsdtF3pHUKv5PhFtPtiR3arptUZFF",
  "key21": "3zcHwKcKYJJXTgrDnuagcschQVL7fzSUoFxd7jiSRy3drHFbd5KDTETp729LHSYy8YpvA3TAdAuCPQom1w3FDBsz",
  "key22": "CaoJ9mod6hQFwe8B2Hn9gc6e93evTUBgaXtKwf795tUbnMdjfGkSXA7y6RtEtRjvbwvHGGMrASWG2HmNfriH5k1",
  "key23": "5Cn8Zhzqm8Ls8cEbdmp7nbQq8wWSdU2ZqYQKAFtuLRV68qQcQJoPqP7iJnSCfAdapBNXBH2SMgvcbuvMGhSKWn6h",
  "key24": "2QQxQRuJdhz14M5R5QHxCRqJcRvJs4mHHPzUFHZQx3PWGM1G9Uv23yfCMGmdVdREcetc5cTa7M1QqoN838udAQEC",
  "key25": "4WBtnYRUD93QixiCACctfpgJNgbfdFzECkv1hpghYBADZPEAdAMTrxz7ju1cH6J9bzsQhcksWcD3jU3BGyi7p5PK",
  "key26": "pqa9tkqrJXJXY97BsYVSkhCLmm1E5zcj9fT87aqEcBTAdHo1FAyNzmQDBKGUzFSTJ3mc7SMASa4FKmxkc2qTH38",
  "key27": "2QFkRuUmKE9WhC3ncUkCEZGmobEnNidpomDCNYATmAtn8WZnt6FTHwd69cXKoABdZNRNMFPpvmwDrD6FdJqhkgHH",
  "key28": "2egwarn9LQ9pDWEJb5RuxohEpdKcfaRy6vbZzbDSPfD7NphctwMqeL6j1vjZ6Gr9eEr45yzwvog73XVFd8PGztLV",
  "key29": "3gZdxq73KbfsJNexK1VL3c3vfS7FKHxsSLM5NZaBz3ABDVPZkWYbWR6bR7BbSpyRBUReDf5KzGFy5HeHTCeBqbSg",
  "key30": "3g2aZ8iRcTHC8j1TirWDnXmRceeoQzYbmDyAbht6Bc5XquN32bMynaS9awhDFZC6f9zxs94sfnSZ9aqh8FTAu2FJ",
  "key31": "1VrbENkQ9dyE8efxXsKJzZeihVCk1FSTfCToonyEvawDAyDhfoAiEeSaAkDemzJwWGbwtupbkq4gAfduXxe7opo",
  "key32": "5tiRjmiif3VKbcUnebyHj91WwqBYt3biTMsK8EgCTSr5hbS2AAgramozt5AvstWm4thsgG3G3AYryHbsVsbQxmCd",
  "key33": "5bGmu9PCnCABrurTSg8n6WganVFd1Y7JAjoqfZG9wBQRkRCdFfpn2BvEcvi59y4hyk1s291qBJomCX1oozhVXUHH",
  "key34": "4NWahh2c7SUMv7BCX1EaUob7CdqjgtuPFZ7Up9TwU3nLYc5bf36bb3MNmbe9zEynTdq3bk4nyDr1QqD1s2pcXVeV",
  "key35": "5fkbgPg88nmwqFufQv9pPwSWDoJetFdRoQ75LAL4yfSdMpz4ArARzi2so1L87hdtXrHu7P7VMSm9hLmB2RFspq7v",
  "key36": "3mfDhy82drHN8FC5c7fd5KqYKPYVygZ62PsUhjYZykP12b738hYst3UYfzn6oWAVhrQ2u8ZYYMrmDRYcWgKvUroK",
  "key37": "3Yzd2Y7o67bk7pzJjXPAfXXEUYFvqYutHtUAi3fJqP4cVAyGsjXFqHoHMb7xWYHj5FoqoZUH3RL35WRbL8X8U4EE",
  "key38": "44yK7DLUjHLQfSdH7698pdNPac4St2ctaD8UcrSjLrt9LaXgUJM68xncBYUUoPH8geuXZQBa7u5eGXxZecubDt5v",
  "key39": "5C6XHpy4MUbsiZDJRYgxtx4F3iRaKxeSDBFQw7haPcxcqW8x6aiN63BVQoaGNBiZhYArWouf5ZRzeaK6WT8K56if",
  "key40": "2A1CMoNYzkQJsk8vw5xSmGWyXSmuy1sf7wYr4buNy9XyjVGc9Rqyi7q52CyjuV6jQbg15KjcW5Eyh4TFZkrx7mo9",
  "key41": "3oUUb1eNUgj9QTgJdRvGqcmSmGwup3KdGvvAMwvYJit4jtuY9b7hegpvm7HsDLbLQQ2qekHmBTh9ZEyMrKZ2NUae",
  "key42": "3dBgBro2ag8jR6wvBR2jbjNYwTWro8cH3Y6nPLWduRgcs7esqTjGkKg5jTNZ41KH6mYiYSLMEVUTdduRKjjyDyHg",
  "key43": "4vU8Y3kCz5HZUmu2ZZ62KVzb3aHsfY9d49959irqKiucxyGWJChiMHvYBnPfLpdPEWki7kzyvd8H78gjzSi7yPxX"
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
