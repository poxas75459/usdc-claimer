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
    "67njVudiQSjY5fjy1auS27yeD34PsjYqtDgxazq6Qqj331csovQF8mk2hmpuC7TKwctxVsNSWf7trfipAL6uzZAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AneyQveG9Mgg67EZuksWEejpkvzEAtjXXjwx2kTzdYgGpgsCebq2MwYGdgR2siZ5GAJ5nwQqAv8PtxffuoQTJ66",
  "key1": "4WQwQ2TQhYa6miucZcFPRW6TkmJLk96XPuYNFixuE6r74E3eY4N8jWnu2HNnEiPaLAqL63GPQ2meG4a4xKe1xdfB",
  "key2": "3bvrurcgWzZz338nAr5w3WLs2pQthsJmJ2dWQq3EgrE5GybcFvKq5NUfUeNiE79UcrmLL4At7RW3qUmvfo2HwBxq",
  "key3": "51uWQwc7Seaj16KsrhyGbxK25kFYyRYiCQMY6vhJWeXAA6XMsBA9XC55kC87E27qMPzXuKYJiuuxbM6vDccGUYvX",
  "key4": "3SUqMVLKfYArLWosehDsBpuCDCUa8Uh3CpGBD2e3gzEA3YNY4nBCXkEWte99anWTs8wvdZ1vwytxxMuaZsrCdBBN",
  "key5": "4Rky4RH9qbd7q6a9gBBqwe6qtfjre1cZQen1YhKNLdykSZUJjaDFsNSZnXxuHVyoNxUe97vJFqam51oDu54LMH61",
  "key6": "39oU8McaYviSjypMf4N9UXbBuykw2RDLbRyjjt1nqt1VKXGBbbWZ7S1JpF9FKFq5j8NCFLi3z4kbyG4T2PVKp1Hz",
  "key7": "4RiE4XfAHuGZdrgu63QuREQtyAu9ziakKAdKNShtaudbmMbZcLLqrP67Gjh4hSew986KX8JeEqWAdMqGwn4f5eCD",
  "key8": "4LYVTMV4HWNjfFetkEui8x31nMCFAB4ng5FnrR4U1BsuHxsPjS8bDixhyzPHFeYWS2Dx9HVr1UXfRwPejW5gb8Ue",
  "key9": "T33Q3E4dyu3jxZK5dmk9ahWJSC8MWmUaGfZg3pdcz2tYscwESKNqCXt1yhx1X5aFBNnHM5CHZnk1ekfPdfdrXVy",
  "key10": "4MLNFhNwfze93cbHfYmZAHLZKzqUj5vuXR2a6tAMqnHFw8LzNoJVnRggu4aRQUFZAWxkkjY5NsM3TDjEzxEsLu9i",
  "key11": "2fbccQfbJgDPhC8Ep2YVpPHbuXWSHYfJs8G7fAZis3QH6WQyynuhKKUPdEfV327BtnKm6P6C3anETUGVLcmGZ5xe",
  "key12": "cCu87NANo4GX5TVv5GGgnxevBWcU3tZkbiLrqwop1gUfu7TbnLfRxA2UsNf2maNJyA6QZnb2XZKzUoovwd9n9un",
  "key13": "5TEokvfaRKdW84CSwFW79ikLc49rMr9yQ29xLSarAJ5NyYQtXDV2df8V1R8kqQ3KXrLohFDJfFActw8xK7q8FiTM",
  "key14": "9F3cu7E8LzqNFJnQCdTGY1u2ZCFsGMv6sAUCprWCnz9vvPdDtPp7UYLbpVR58N3m6qbHJqMpAm2NEgAttmCMaKa",
  "key15": "4mcuUcNp21onv37g8aUMyuKmiTwNYooQZSF182WMfr4aK48MSM7gRs3vpYJyDkj5bXbqCxpQi4tyYxbroTcwnNom",
  "key16": "AVid2fYg5MGvoNpp1CM5coV8d1NSo5qz4Ug99e7DrxgTQGvbT96obr7rR1GitVHuEz62YwxacvaGTdLW7ix2tLf",
  "key17": "2488ZE9NxNe1V9CLvCa4NGmcQi1Uw6bwatpR7wWrSh4LGftsHFXKgSmDb14y71iZHZ7iaSNrupFfoPQRQ2wjWtUG",
  "key18": "2Y43KVssk6rVvrJ8dm9dsKfdLSdr8BQnEUosqtHSxq5XaKDXnuZbNA6qXoTKC4ASxuRv2EXserzFTNLa3cWANLi",
  "key19": "4a4c4ZaSj33cjzeL3k9Nj4vnfJqiAeHCLJARUBhuS1ZiAaHBZJ5akkkp68723xYo9vWEHneR9BjCJWA3BmSt3Sdp",
  "key20": "jn1GETcfUeY8jEWaatvURLWS3LPskrwuzqkAMsHhZWhRtS2DGrhDnv7JBa8rewaf5AWKJAdn6wuTw1q6nzsvErp",
  "key21": "Ww2mosya1hoxiNmNeqwwr3fNL4S1Tip9j11FeubQE8NAZG5x1tfDDX9JQeu4MpcHG6kCd8ZoshmGZXPRyB6SpwD",
  "key22": "bFYeSpGtVZ5tzBw8XARwHxZweRYVhuRpb53VJqcWKD85yKf17RQrsGe8uC5WFU9CBkE7XndXCbHFvPt5zuxwyNW",
  "key23": "4vm3NEemnNkd3r8325W8rB4A33Nm4xSkbYYJ4K6xx7xQA1jwdUYrjfVSmKyQhamvmiHvtdbwbmNXy8p6rsfKjfc1",
  "key24": "5Vb8fWeu3GZBeZEaEDfcCUB3hRk9bEqj2gNXh2boGWFWwvyMsnY9Q5sNx4FBc2sPeh9tkvixkJMZQqKyyBCEBX1o",
  "key25": "2zyCTyscykJZHUc8kFZXwKqKwUR8HUpu6sr61tXTEwjbiu9eQi25wPmMEsEXn3jxuK2oUjH2VZvMxz5oGvJis6HA",
  "key26": "5RYUdRanQVuvnum21LuiYpskRBENLZV2H1A3DFktJxStGCxUGocc4dnY8FNwDEpN8ooMMsDXwhamgqtRjVnDeoj5",
  "key27": "4WespKQ57zKuGFTtrwr4LsjA1epdXsmq5dftCynUp9yMK5Yq9Ys4G7EkTxS6kP5EDbG7bxA12uo8qccSFptZeRf6",
  "key28": "PB41RWnnhZw57NT2CxgpysCTZpDJaKoBsheA3Gmi7TajpthNQmy5AR1uzw14f21FCmuSCpqsgaKibmF9ZUQ1wsp",
  "key29": "3Ca2KAdRUxor8XjqxsuQbkW7R8EiXJFyFLDwC1PAriZJDUptFdnF2CgrQSt86T5mBoc7SqTrrHtQvgRgjanX7p9e",
  "key30": "64YocDDZLK3euxK5bnukGmpkS8J6ZLyT89gzqTvFNFsN4PG2T8h3mLVREbt51KcXatcgTwnX6nGWjbGwPoZb7d3Z",
  "key31": "2QpbqFshhGSXctemwxUB9nwWR3TH7iVDLogJQonUjXq6ARsnVkF9wj2b6avyNGBtQzSzRJauXf9ZBHwVR732bxR1",
  "key32": "3nDV34JvHtJ7RyoZcHvKwn3UQQF4CFVEu3CZJ3XwzqkoSpSH5J16KLbj1yUr6LXrLsxVKLojEMn64p8UcafySM3M",
  "key33": "3charUHVN7rG79UarEkxrNZStaDoGSCajacmDKLBqX4y248myTKkXFvN9hMZk8gNYghV6kifoX84ThVF47XZq5va",
  "key34": "3nYmSLVM8r8c5WPGkBgZuBXFt6dt6zijxCYj4MkSonnBtuUJUHL2ChrkrFvM6Syt4HMWo6zndswZyxdd8dzpczDh",
  "key35": "2JQiSxQMbb77vCrzaTRV3iifi6cdRnhKaXXhs23JEcHVqpna8YuLKKPxXpKJGjWXje7fyCt9pxSdyLu5RXXbjnu1"
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
