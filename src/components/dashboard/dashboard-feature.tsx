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
    "4Cgt4wNVs8Gz8WvUCUFZ7jw9ZPxC5FsWKbuQCXqZ4dAspFVJtZBrRTr94L3ixDyPdF1AJaVPPJ8EQjiP61LhAAJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANG792QQ2tZvr7Sp8KEcYASrFVQ584mEzUExiZRV5CbQvNnwiFb3E9bheWZkTDNV2fTAaKBRyuaKwsnvcsdWEku",
  "key1": "EfrpusYqmDGCiRjvqeRxMJyJHnyVufKLktUtkK8bjtYBSFzTpvUMAfERG19Cfy3B4jJJaMs2hWpb4MTyeJiSpgt",
  "key2": "3dTRnUzSuunfMG1bGnY9Z3CQPhQBNzcv9VNBUFTneSkB17MCnW1yHKLLVjBkvSCqUgFuh1JxdBX14NetPtaCabaJ",
  "key3": "2uqWAvLi3oxeFXizKBStXbvsdMpJaXZGti3DDoQSqjjGpCbtcX85TtR7UEMWEFeUK7TnWhEwwscXnAV5RDtSZjCQ",
  "key4": "3oTYJsn4Snvv6xUXJPJzib2Y6M3W4q9JYt5ZoRaAjXc9joyCNTnYgLqXfscv8epZszaC6DF73h8GG9kG1j5Rvn3k",
  "key5": "5cN8GmooZNTSFd3Yjvey564YKYEBfuAnFg6TDshF69PBeGD3g4RxSmHRVmz9LRfED6tTvaJFh23mqCuR61YtLaEK",
  "key6": "ahtnu3j5Ty4H6ZJSfYshsqqf2iUzeZyWC7qwPd7Q5o81XsNzFjXiVfwEuTqFfBGLfQESzWENJxDoCBmZNfjNBoq",
  "key7": "3E7MaWFwEKWcCRZEti5kZAxhyyopDhzGkQZHk7az6YX3jYE6LGHvFZwhJpEku1hkT7z5V8dTTf68wdjDjpHdFBcH",
  "key8": "4FnCE5fVhdd7bK1FK9MgzBiL3ubP4Rp7rEp91EkfNmWVyKQmvQroABaTGZXuWfGj8bCBRCmhMPkjenXy8dxP8xo6",
  "key9": "2PSvQ7aM2xRnA1Tt3JYZM3MJ45YQym7eCTgB5rvVcT6tUQ4BbrePiQB4KiTfoUaWVhbhR6WxD4yU2DciuXSE3PDs",
  "key10": "62iDKyZnG3hXNMwJJtVQhFTJ8X59ssv2yoo6BszAcp5FgMPq3kFUtDNP7U5SZs94NXQxcYYBwfZUWmoWwCSb3XfJ",
  "key11": "4dG4eYUA2EpiffAYgP8iSHpE1yqRXaT4kS6zFSmAnuqbD6iCrvTSreNJSmZgSid5W4YBvwBbZj65CeZjSTBLZy4q",
  "key12": "eVQrgAoU19vLstugP1PLk3nSM1RUcRk8AHBZ3WYLYULJrqpbFB4t3DkNdJPB8yVJPN5VqUthMqqh69gWKvTxpKV",
  "key13": "3Bico7bdSH2muaidPUiCCPQDtmTSXaofnZC5b8A8YLic64xm7UPWSNjkHDCWxRTXot7vtm9SaoQxaU7w2pdYLmR4",
  "key14": "2yKhs1EKGNWRSzYUsEWQeNeoCiNCDx9A2P4DuEtzoK1CXpvdfHtPHM9hMnPj55cNtXCaLiB7EG57AkVP7aac6ZJi",
  "key15": "CuuDyyu8wUhK4HHZ9e835Apa7iySZWsPKNRpQKbwtUVrXtKMci6GyjMLDJh22Bmqr8sCnHLuDuMp1CHNZhSu52z",
  "key16": "4sSgKdmgR22cj2g2cWMDgKcUDJNmFETCR26qPBEB5idn4tYeukFVFyNDsAkn6HdPP5bPB4k7hEGqMBjbYpBf3mDQ",
  "key17": "4ZnKq8xXEvDnuATEg9wUw6ZR92nu12kRCSz562wDtzKMXdjpqsDNUugGHshsRfBKCMEw4jpNM5CazXFuSu9jguje",
  "key18": "5tyNSTeJXNbFUPYaon2Jxt8YgT9xDpBnX2pFY664EBRkBoG7HzzCrxvTCjBVdgoyrywVVboMRCrNPafjvSzuM3AG",
  "key19": "3tKB3NUhMVzds9iAtXtFFhkcZvgTo3dP6PdJYyzMNkR3eM1oEqz7uAH5o9MQ4YYeNoDmmFkrbSu8d62n34ro7JPT",
  "key20": "EhuLoV4o1VuxTRg4M5kndVjhygbhzmvvPQHMnJcAYGeUQtXEg8brJxue5W8xtpx8n3GrsLpjnaP8g6qoBLu3ZUq",
  "key21": "64TiZQS1GDB1ygbtxZN2Y5b8x5cjC5hUswZa4LkrBRPM9T9iLbemfcuTD4uxiXDfDijvWwPZGtoyZUCPB6y2gdeB",
  "key22": "2PjoW3eGFPVWTqZ2mcMdmSTiiiKbFaQKtjXKNKKPE2xyd5vHfNYfWXajStmwZxUtsdxKdHgUN8i5jpfWA3rDkxQp",
  "key23": "3ZGxXBbDzkcbymyG11GPjAw9vfeQkjX7eVUmFRcuhwZBqtcnWn1DfP7Vdwzdq1U7cP7zNQ2Y69qz4x4Pn6YFoKKC",
  "key24": "5dEN7woXeY2cgn6reUN7YF8tWYyam1mZor8PgnK4VZUMbN2NUyFgeaEGtWs76JFfNM9Xh42wpaQ2auaiD9hMBbnE",
  "key25": "5Ddk6cpryK34aKa8jpfWqDP7iu5Shq3bPUdmevzoSsXD9vQtfqLEthgB9qBkZz3N8B5kumRm4HSvdoFmLLq9ok3Q",
  "key26": "5beoSg681hgsJ5QU2XTwDoNsdmZNgKdkFvyWWhNoWDzexnQM2y72H1zZwEPgvB9rX5K8wRwdhgWJtFFnvHDTBR5T",
  "key27": "3REZQ2Wp4iBCBvXmy6AzpHeBp8ATz4szLR2WWd1wtBQ7hpcj91U3zwwgu1ZBkNN7Ykw34aghV6MSaqV2bqLu7xfs",
  "key28": "q8LB63Cn5WZdoSbWQrNAzsohUnQeuAjKNydnagboNvPopKg95r2TVSxDxbtppRGQa1UbZu6TMo4uoqeEyTTB6A5",
  "key29": "4oBBHmJyKffdQ58iouDSD9QGBXhw69dbMDJuguJp1rRvN9du1TajUaaEUH4UoWigasYQuZPPNmuEHVPSvpqFKE7V",
  "key30": "2PAejQMHP3yUo23oEpcZemB7XxHW53couoPxmkJqxsDLkigGmJ8bDXikGVJLKfFQHsZtXsX26pZvvMFVJaQaqosh",
  "key31": "2PU4Ci84svNXR24mBKAHHf7bavJYp2r29NEpfV9zDf4viKGrfSHr3rPNe348GMqaJ6CvtDT5YAVjDdVfvsnCjzyn",
  "key32": "MqneypNcv51zeEj7S73ZGet4Hobp91RobHFYgB6Q1VMhBcWTRbM22jT9ar1Q7U9reuLoruw4dbJbjpADYopGJPq",
  "key33": "sftGrGcH1AGoQe1otoxGcqU4tJ2R3hBJiDLqvYTFspPXyrHTzgFAjPiBWhWxxsYWJ9vhyr55Q1g7XB5p1nRHo7P",
  "key34": "2GYxo3Jz9KcScYyoHd3anBW38JBxZeUsPjbeyGQ4PShcWuyDFbFRMaMAZ7eAYow8uKBwCkF9CocrGDrHeHmy3zLc",
  "key35": "57Lmyftub9GgAnqHTMEWEgMhSAnwSSi1FugCAD5T7mSjcLbzEoRbVoLc5bqmFAbJfE6kTGxcKXf6q1RkRwRToLzQ",
  "key36": "5VGNGTZrdHkY2jj86iWfjQ3G3kjzyvGqSyy9YsUz3PuLvrp2vTF6m2k5oXZwtbAzdytiKnW85vgQyA74xDDzkBvj",
  "key37": "63hUbehjtjaMAuVqNXhSf7zHQRbvt23bhaDbMFeWuHpqjHVK7p6XiK6GFmqMnJMQJJZX5CS9dCBU5yQX52zdktmM",
  "key38": "Ei7cZXhKK5Q5XB3nFRpPjijw7zvi1ZWEQr1v9P8pYaExDJoVph3WR9upHw3FiwvJV1HxhRBeFKgmU6bRezemD2B",
  "key39": "vRP5nzK3N5BD1RSPGxuBAbgfJzCvoEchM8gK3DF2cBnoPPdohoZkkzbcmFao51NLUD97FtbcePuiv2w7syBBm8t",
  "key40": "2BsZWjts1ARavGNKrm4wvZZijMtHRAASE3aSCm4cb6RbZvZbmsC4SHdpzFMXT8WSSLZnGhKLfow2189Cxo3X6K48"
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
