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
    "5wpf8AcVAt3NKozgtYw3d5AqBAxADopPYJ5QcMFkfPB5PJ8dma53d2tMWVv8HqrMmd2TdVHwfijEFYPXFWPNUEDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoLunT7BVyD5DEwHm68PE75q9atUcQsHKpRHucwF3QezyuxLXv8vTshjzRu7GJQrUNfWU61jJdpjHLfGX6NjHAB",
  "key1": "5Lh5Mjove3UqDoQhAjHrXXwPPnvmBP9PrFvUM427F1hyTJ8Ssqjqo5ZYkQQyLF3jcBu8mACo3fGComHy9E4s1dat",
  "key2": "3hvunhprx3fVX4mWWab5y32eUdqnnrQZQBZXvKxfRFzEtLyaMp8aNEsSEEUJhwhsrA797eQumJHQSv3kmrBm8kJu",
  "key3": "3iPbHAJFcjmqiPj7gBaSGkSCWFviFpkAf1aFg1Mhk5txyxgGTdAUTTW9E7k9oNJqRJff6ew7tiK5ZMFHU5keNYP7",
  "key4": "3p4PAf9RtKwUoxa6a12Kvtwnc19Pb1svG6CcRepJ4ofRhSPCEFBJr3t2tCKHteUBoRjrxPjwjaBFDAgB4F8cGQd2",
  "key5": "3ihjcgDe2LumQPRacyFYp1bUBopHHD7tuJjfcrnK2vrhzGJU1uYDdbCianNS3VUYAuMyA4WpB3i51DwZzyoP2q15",
  "key6": "4CEAc3ibqhuwDTvP6aHBiJoP5MZQ6ajdWhRMxTeraVKrJGzejQnQbvf6vJckvbCHczvKEDXMuHXz3KZtoRWs6YEz",
  "key7": "57BrFAtT64cSCv3q6nRJbEQKeRKRim8EqSGD3dy2kDvwgXtwyJyYfwR3zoXAC4oXFYxARHmrKLDbw3VTh5X2zB8K",
  "key8": "4t2gzAUui3k7386GgwicCc88w1DpAybVQucbFYn2H8nep3C6o4cFm9izNEiZF5HpBgX6m2Qfy3BzMovHmPpRJEpx",
  "key9": "5NyaG9CTjAwgsBNhazFeEEUUfqnPZYy7XZ2AMQjcqKxtQRsyZuAoBwTjy9aVrQUGMxcVpyCiCdPphccCsq2PqxCK",
  "key10": "5tGLwTPF6e8uoaau5D4xangYqbPcoAVmFL1cnth8TfboFPMvja7VVEdhzQsR7gwbJvUp1L2PPGG4Kvwz3pBGxXaY",
  "key11": "2ZAbbzhyw1gKQtxWxm12FEmrsxjHYhbbyFCcKr7ePXgrFDZCo1bjmWP7KYzzgscjGtFe7cgow3J2A78DRQr8tGRC",
  "key12": "Av81aq9bmP2VEfefUQyg8kCTzZ7JcTGEoQyfUUeMrzwXjreEWez2G5MZGPf5owC5kfeQ6QX2H2KDQkjad733Rh6",
  "key13": "2YDjUCmpDFG1ue5ddyHarwx1pVtMHTwdYnbs8XNK6k2hMiELNUKnBEcRTYEdXjPpBKW3B72x5ubyY5QpMKW9VVHH",
  "key14": "2Tp2GxCbWQZiGiSACDCMxLUjpLkrsyhvkazYwEQsr3e9TnaniacbtqNMKuZQxkMyk2TXmWd41zTViKvZ9t1Qyt1P",
  "key15": "5QJfXvKFAVYVzzCJ7FAAZ1JqfTbo71bnTB8ACaoDrW6mPSBT7pLEj4Jq9gWmKKbmrdH5VCWSw1KWNnPBEFAF9S8V",
  "key16": "5JMrvhbbUMDp1reEY7oQ9LTgxCY2cRboLKjbw4Etm7nUR3QtY5h7MPhjFqXPUMVmGctUit8sv5EhZkVrQjxw4GoP",
  "key17": "4mA2bQLzudN8zFuuf7Mmbec9pAYkFCMa4VJdeSsZ6vRLf2NadBuRYbgxQtTMUHpA8gx7FDsnfEsW5YJ9XXd3Grm5",
  "key18": "iyhneydfeuwqMdjRFKtcQ5DidjKbTY5nsNoTjNvssnH1qHqnkmamMgjbvYXfbsiFXxY56b1jmwf4kuVgyo56Q4N",
  "key19": "2duWsChNhhAy79TSk6uKvf79Y1JuweRRjkp5ewEGgMn1LcJ6Gws66q3E734bLR5bitWCEjP5wQShkxNoea7u5aa2",
  "key20": "5kEvnWYeEHcznQ3AgcVKATC1fBZE6o78PQKwMQCSQk8n54yZa7AzvjEHFMVHK38bQGAgie5fiRTGYEazR3HmJ44y",
  "key21": "BiZSp9y1rkR5awqKFaa8BJxYpfxQeZScEQBYjiDQxfH9X3gPtNtze2RKj6waXcQnPekjBTHFRBFi79m5uiMWY9m",
  "key22": "5vTP7djD7pgxAEDUnKms9SN2oqWudYUadGxNGYird91xTSSsDF5NQS86n9awJvnRLuqZwPg7c9MZBWfStw7knpJg",
  "key23": "4D3sN1neiycx65hPtPy6FrKeHUJJmD83LuDTRNtAsdnHBJ3w3TNnfyNAKKCpsQGyExGVXXPDsBirZJNaVUEzcKWH",
  "key24": "4GnbSw4MrsnZXf7WJTYq51XZsrsXRehxAkg5qjFkPL8CXFuUyZob2JieZPXt8MeovLt1EYw9kuDJj1LRDy9r7PKQ",
  "key25": "5iqeWgCUXLWGhXs3fKko2w7og6onHKmGKy2DteSjRmvepihC8pze7YJUaj1cyB29P2ycyYKqAwPce8VtQHNzqw7t",
  "key26": "5aQedpJvnbtVNDEJ6zRmZYTP364ysLrsqcDSdpMua99mDwDBuQaC16U8QDkaNtSpMqV5rSRGVCJ5ZP7gtyQZQQoJ",
  "key27": "3mMje8GLRictGdMwfeRn7LEAF7UYWv8StJVfkFVTEogDzCrNgGHgYUM27hgyhpsHeVPWH6NGGUjoJzErfgLGWbui",
  "key28": "4LLHqFJD4oaqdaMUWs9LCQMUK3vGM6Qa5Nzf1x5hps6mzf92vGQDggvocPeUB1pKDhYJczZUjfCu1LkfU8654wtX",
  "key29": "4Zd7Nrq8ANmoPbqLkvbDxTGEcxXxeypesNQRA33WLrgzeE6TNEDpbsubgPPo5VMgao8YJQpjPm3GfxrsBzkG7WA6",
  "key30": "181m2mAgAN8zZ1RmiEvXHP11g5DqpR8CEeqRwpz2D6FL6M1wVjBbYYa3UhxXV1Z1NZcmjtnJKz5DvRBJkwi5sdt",
  "key31": "5d85bxQ9j2Qfq8XA5Vk3TNhYVN5L6JGUUbt6Cj3MzJ4LrUnMz9z8eeEGSfbd2b3Y8N5MU5w1XcMVKpwPMmsrcRhZ",
  "key32": "2AuFUwnHtdkS4iXVotjxVFWg94HAqkZMxbGP1rsZ2KnE3w2BJbHq2T96sUChNcmAkdP9pMa7ZA54FS6YurTjdeuz",
  "key33": "2QaursR4QmzY4oy1mptndVYR2FQkedyXXeDUR5TNJdYfjpLAVZwEDp2sypBz5eUiY1TtAdBbHPrm6Ryq8ss8Uqtv",
  "key34": "4iHVg3sHd2j5zEaGt9RV9R1jfnraTMMk7FtUvN68ypau52HG3PtvGqGdRTHWzTPjEQK21xir4rWrULxPraLWzh1t",
  "key35": "2ixEc5UKLocvzHcYN9YF2HqoRG3qFWdUgt63NvPa5AoJiPVAGkwkkarJM4oRGNRazNfhauQUQjoZD6wCcshEaBJe",
  "key36": "3E8AZ2ZdmSKwYH1vPTTYWmUEXD6iP2ucsQ4iiUSnPbGfgetszH75tD796ngrSyWKmuzbmWxRuANqVEdJVRLeVn9w"
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
