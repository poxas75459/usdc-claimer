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
    "5K6Rb8auQW8amjs7jvmoJD6KvfRvZdEHNZiuYT2fkmHfNCa83ZPYFp659Gr93ke2xRZVdQr1MFKnUeNMZHjqaPJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m381XBcoZzjVHsQEmS3hPySG7GyLf9W2ReWVPfjofmeKUScQKHMd5McEYQQhWWrwBML2M2cFzSii6Mj5CXUtZmn",
  "key1": "5ckz15Cgz18vrdQQkEUBi3ghpPsgeungU5F6oZNa79u4M7cS98fjrxQKnYdUyjT52P89zPrdiZtn3dW4gCcKzHZF",
  "key2": "3PsVg9URT9C9HTRmHiQTB5cYPZ2rD3XXRQu9kETBe7J3qZXGb9AU4UB4VcUXguFVe79SBuUZvxNxX3Er6ARCA1wv",
  "key3": "2CgwVT8m3jtmm629c2NrFh1aKvuLDC7YP8tFxXduLD6sKuUZmm9FyqV2s57YgMKXv67dkWQH55L2qTCxoftbxfqu",
  "key4": "2iyhhcXLc6EbMHLHQtFyca3eiTUEeZaeus4yxXU8CEEx8uzqf3rn1oD9CCpE5sXznFwZJa8bQaRys6v8Yc3FGfU8",
  "key5": "4DKF2batLdB5uUcq8zTb9wwnWLy9JR8YgYKUan6uYAFydHWwe2scapai3CprgRwVJr8C2D7UYAFdPxb5c521rLns",
  "key6": "2k4h6GozDfNcPeMWB35VqBbSkiee2X5a715LV3i57C9cMQBv7THHHFbvfEgESqg5QwKNp2JsWeXMM2uQpFMBiiNL",
  "key7": "2zwYibds3xjyrEzKuprNGj8z3jBfQZUu8PNn7WXJx7W5sb4j7d41kmatn8fgtnGm5bu5GtQDVWyJ3UzPuSPMMuVk",
  "key8": "3ZThgCkyRCb7fT1C7NXm9fHjjoQC3GE4tPPeNeW2jHP7qM6KjXSk1JKq3s5XapDCehuxrSn9Yf6kcRrQWryd7WGr",
  "key9": "2fJz32KwQDJRrBZR5ri2gDLcpYKJuBx4EyTBwGpGAvsaJSU7J7wMSufMXSP4jM3JhngFGwevm4jxpUnnDjwkKQgo",
  "key10": "2K8Sp8WzhfZLUBSet82qmqgNjCSg6qErSETnyjMf8CgCoM6uXFQ7uVnTPGJR1EG9q15vWDdGydhjrMNs1yqwXs9u",
  "key11": "Znq3Yom1kf5CixmR5Fs43PABeXCkZSQekRPKjxxpRnGYoiHBQMNeHTFfSWcKV9FWDccfzNXCifhcvfySLhhSYqT",
  "key12": "4aVTEBuTTweTrUW7Dq2SskDpRehguXVBkYJC1EQMjD93fWt5ud1m8F5KK8hcCLGuHLcaUQqua4A38UJPeELjBtUq",
  "key13": "3uQAHZNqX1gQD7jZjWBXhVLA1MZ3d3mBFAUudzkossGXyLhGgvKpWVw9YwFuxierHpGpJ8iVjidfnmMonMCs5JnQ",
  "key14": "29QnhXq9CQS8gGtojMhKbtaqqr1g3NsMsUXMd5bbhtGuwWWgU2WaUgmpHoX9AvJ7rm2Qs6hN9d2hvjAaPUdcCnAc",
  "key15": "5G2GaB2MwK8rh6vCSvwnqZxGgwmz1DXPLsLbkyLrPdxQGfCZyZ9E9QwaeTcVXx8jwxmeTcTfL4vkENmQ9SrgxjiV",
  "key16": "3sAvUkKukHYQomE5acT356RuWEL9xyN81fGZ7QSL3Vwu4jGxWue4pcNgvUnUPUFcoZnzUh9uAUNDv3b9P1jrfnqH",
  "key17": "2XkqemvTKbM5XQyWT3TWiVX8p1YMCGShdiQ8EgfuWLj1uxxKoMQs1cgHAyJBUpf8N2bixFpamHSUhzV5p6HqqurC",
  "key18": "2hJiiyUNFnqxB4oYUZRWsbrZXVXY4YXMwRNg4u8PYqdtSuC4jAgZHZDYMp3Z2ueinfPfqbUC3T2EUv7SqHC3HASe",
  "key19": "2RG91JHf9XB3se9LdPfh3GCbxEqxhpe9dSztDqzFXyRKAFrSFUcmoqaxWKE26UBiERYTwJXh1VYVMLdrEAX2288i",
  "key20": "5uGuUnu4bZnWGnS4EDXxn9c8u2KpVtz7NcrjCdr2hvRcTePFbqNsDisQkzixnq7UVz2b4cpLCH2edYcsAyFY2shq",
  "key21": "5wpmr9UteLcFgaN6f2VPmuSJ9cEo3gkjdDyJYwH2Q9y1phu8xv3kmaYyXJorUNBUS1Kr33stZ2Hoh8gYdPU2og82",
  "key22": "4TwFwzoynTKcdawH8dxpScr47XPkUVm9Gzcpu2Mxf9x7c1QcLVznji5pgA9EW1ApiW1cRPvQsRinE2axrB4Cjzxc",
  "key23": "5k3PhrK23jo5oHF72nzFESJiXCZi84DTYspwmY5FbT3pH4usEwomZiJbyfFMK751cUCvK7KybwQV2yFBAVHcZyEL",
  "key24": "66ZfHR5Ne7r47q5pLLVTJ21UQHrwuaN16CqQnwpQUHP7V4frZNpYFbeoNNcFxQVF4HWvnMbDb453qeQBNYdFfTuH",
  "key25": "33NM88LYZGXwuL6QgaZWKDrD4U9tcmJHT4FsWxkqa8oSGg8i2qnJzP8nS8KmZkESeHV3KEkPynkaPbNH2aLTQRNv",
  "key26": "3frhY8JJsnnBGyaJn4tzWmDPd13LxvMrkdRFhw3iVV1aA1kpt4xcWMvYUnXCCCevA4WksUepc2uqMUWMe5Yf3trD",
  "key27": "4jTinVebCHjUExW7jyP4j6X9mT8GKzpo7gzWPS3mRB3xPuo4tBdUk7w71u7rZa3JHP7ZmsYuSPawyjdT1QRngBe3",
  "key28": "5FX3JVsfvosyi6NYEDFtezVgdkJnJJZpzcVwyYvdQCKzVCxAXKkpRWfcHMAuFEHutFdQWDspdsPWz599tFHAT2Dz",
  "key29": "2ng8W647miDAjbwFzDwezcNsR4dgtyYtDgxCPBE6vkyk51A2UT1tSaAmJHygym7MDrP5RGC8G1MkFpXvbD7J8B4R"
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
