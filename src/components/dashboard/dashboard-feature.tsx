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
    "5PQwBiJpR7gbtTzHoKapejQVdAQfRUfR8YLsD77MfSsN8onf8Fs9FbP9detk8E8U8vSf4kRdVqMYsPEvca6s8C1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVgxyUK57uw4Ep2tRWbmkjMk6vxPeoc3YgvWutKyLGfVE59o74jGFgX7vm61xgMbZerw8NaYeK14C8bQYrcJ88G",
  "key1": "2rBTAT2osSLqNu59TKW25Uoir4qKq4whj8af2GwLic2YQ9vweqEcmGzujPJQERXboTvYYY3CcKzMRXRDvLqyyMJ4",
  "key2": "5RiKj9aqKLkLKF44NX8Vgnxz8Xka2AHJSwFXvyPNHbGcg8b3uD2g2P2HQNjoM5w2FuUbwbantzhuntJFpN64zA8m",
  "key3": "4GzDkibUXVw6B2FTeJgc6JY4Q2cpzEuZ75vjp9ZVZoVfWQ6mo8q1MXb1Q5tAgwaj6TT2Fp5HjuLvCr7UJvryPXbf",
  "key4": "CaKP2bvSevrgHy7vbQGfNzTKE8TBkNHXPG9ojrqy2KSFUrFFxK8TRQG9J1F7BjUTGyxhe1BjP8R97E3BVdRowUs",
  "key5": "wRjW9aMhgj3TfpUMhFoTKWEsxejMmDTB5UyP8JJrRn9Wau5TueHCVxFKxeDRZfDi3EGn9RhtHNpX5u7Q9Po2eCs",
  "key6": "H8qkLn3dPQAFjXeH5JRtjhPnLL9arChZywRpaV4ra18fo4Vn2yQsLKVCxBLTftp2TXU5E8teKqkDpbbhrMV3USS",
  "key7": "4QPiDuWUz2dNpZLjdBxAocoY5tATDoZSqF5Gbi8G8TtN5S29jpKZJ7uZJASJTzW6jxT3j8cQ33UQDbKGwnwA8uJp",
  "key8": "3YiyghJyoMVxJjS1nAgbnqFjTYr2ZqALZ7uEZ69zwMCqd8ydYVFUnUYDQb9L68T1QANuMCYh1p25D8ocMoNWC2MS",
  "key9": "51AJj2EFnm5aGaDjKrRLoeScvb9yszBQiKNwAPQZ899reZ7oArGhZ5wMbJfaCnRAzu6iknFsWHZfPwugCwSbdwEj",
  "key10": "21zFATSFtptxfexeB19hxfhEcyZKG586fiToWvyZ7Ju7XwcQ7amCQUxzA4JZvXVHdYretVBc5Y1oDja5wFrWJUpb",
  "key11": "Y2KJzqeE8ZU94AaZaLgKahhBdsQzMdy1tP5R39pofgRr6C5TqkYVF4q4Fqp64rddwyViHZu6zEhKZ8mSMRgjrb9",
  "key12": "3ckKrJcb9eGEp5dt7gA1jYVUR9j4FeLwsYKaURFXESbtvoiwwMm8EuSdgZwwa4o2A4ZEYFWLG8gTLgByru8Z8xMu",
  "key13": "4BWFup3AeXdhiDmUGTe4QNbwqJX1QSeNkUmFo6mxV4AEbKthsR3yxbGF6sENNv3D7Y5QgNr7L8tntuNkyfubxjeZ",
  "key14": "21xuNwKosPQS2WR6qSQXKhN8xptsfa9xigd9ZoWTR5Ka6rwPyuMSKfAV1dY4M6m6s2PPAjbhdCCYiNYcgvsg9rqX",
  "key15": "3u6zmLg24RQTAGpZy513gyS3tBmWmay7RueprF9mBYz1v2XjvKGkwrmNtpsifTM77hkopm5TeEQt2FsLoM6cifQh",
  "key16": "5nvJ6cRmSHfdRf5zjq1rimJPYaHrWcyK3m8rBNLZxFLAmrKPvGDPrHeyMWt461tLjBSiVTJsdeMama3qttTSqJfE",
  "key17": "UZqve3MtqBYif6DGSMs1wuLaFufjqoudYo73oLGHei9sQfqpgxdFWxaeCokov44eFLkEUVZP74EzGJ4eMGJccgT",
  "key18": "3ANdHA63X9rVda1rWTDyCmMxzGeg4Yt47WNcJ26RnxrScYaWCBUCVSKtXFCZCgAiY1trcpW4MCKAtTVUkns5AL3X",
  "key19": "3QAzVcyRtMwuqXfiLD7YLg5t7wpPt15FR6PFNNaEFSLmZaNa6hWdSMMRg3AmPVYNxRQpGRv1VpWL2JidBMpG7vVE",
  "key20": "2ZMnrsRJxPYo2A1FAu9zNkVmGzqA2rqdepPbr17quH5cdX8vtcjp4Q3RRPyWVZfSoaZym6rEH6DArcAx5AqffXuw",
  "key21": "5pagL2gdqaZ8w3kQZW3fZgg9GuWh2Fm1mdyMe8F43Ki2MN4LYn327gvqvGJDy5hp2RsDP1AjowPRBQFLhwMxW152",
  "key22": "65Kxr2miVxXrLPZjzVnmGu1wLTa6dh5SQ2JVwDsvQQUWiwS89YrfaStKtexeaRiSHtfCKbCVh94BxGekzrzZYRD1",
  "key23": "rH4nj4ULitTZ8NpgygEnVGVzJW8iLErNvYntq4FK41UJMfVHyvjns13ZXBHyf6PQZUo4W4KVZHzqWjru6nUUKGN",
  "key24": "4KXzFZKE3npC9x8xtdmHHgFhidkPw29Qw63Z8LYyJPiKMUKoYQSdC4mYRcSfiLj1DGgBC9Jbn99nJTBzwXFW97GZ",
  "key25": "w9vJwcdS22NksdhcFWqwP7UAVokVQHB5ECVh78CNcE52sz1dAVaAtPxBqAFU1xTrsgttYNaRW6Krj4BJ1Qc5oo8",
  "key26": "23FZLm3SLUyKLVwD8EjFVRdnmtt46SRkM4LS6M1DSuiXEeRLSFbk1thAycaBBbwUjCiiquj9eZYWs7ZUUuy2Y3mr",
  "key27": "53q7zfAvuwB1UXRasJKS6t19NSKZJ1oTe9Wan1WARgPuHFbo2g4EYE3j4bCjqjayYpNZwmYHtoNxEFVx4HoE3Tdf",
  "key28": "5Wqkn7N9sD99CxJVqWs6QsKR86icmZtQvGF3duDGnHhKLsLkdTVfeFDjtXuyRsDuWCCHWWLCoG9iLZkLYwYPnSYn",
  "key29": "3v9LKg5MravcqNBzhszntgwk35qPiX9Xvye2VGDU785vriD2o4eoEzxN2WX7ScNHRPQNW2fgTYnx6UcVX3wcB653",
  "key30": "4JGp8rDhUxqiaN2U2jquh8LZaH2iRU58xBigYhVArEWfiNdYfAQnPwmsosXE5WMwidmJJKZzGE3RtgcGdQD9UHcJ",
  "key31": "2nBMhVGtch9o6fyBqo4QhndddBjzWpCUs9UurHaWu1n5hqvd97wXqAoMnQ6m8pB5M9MfhEHcVFgUxDuUQGGCuZ3",
  "key32": "5cxqN2yQFzNbSToscssRVKLFxPrwJpT9ZeCXPGPbhn19ByywqfYY5TGAkFzjbjxWVMqRbHrL3Jc8wtPhaRUKkvFH",
  "key33": "qBkdycr3pL9D5ib4fWKJcbi8z7TM3TpHKsKjiDrynJX3m8j53ws2EawsMM1fTKvtHfw4A9HpL2pU9WPxnTvh4qH",
  "key34": "Ubc8PpzjMfcVTVyJ7feEQGj2W5jCSo4LEwTRCDkmkP9JTpPng5vDfD8wTiU4RiFex7Bo4dXzvcYvQffB9gyLo2L",
  "key35": "4SXv72rnsbNzf7qVt5JT24HHHLRhbqL7Vq8LHP1vdJSCF9uCrfER3JbnNNz4pA9vc1gevCiVP3dp9y5wPVkWpAbf",
  "key36": "gXE9i3JoizBwsC3N3g6KceWH4QNNxBSc2HbqDLiqknEHmaaECuA8h7PnRYwutG69utvPPrXKw9EmjfV2a5VxrFq",
  "key37": "21VG1KFME5UrsxMExdjWLdHVUxViYL4xqmZUdUAf9Jr9f48HF5iWeL3S4Amjgc14uwBL2i7rChshzJqPM8tBzxqK",
  "key38": "5VUDJYHZuwp1LN8rcav6XSGaf49QXa3C8CYkt5uaiGL5HiHv4GtC5cWXJkAMzYJ9xr2Ziur8a2ApdjYRt5MBWBfu",
  "key39": "3VLsyL2i19An3zzR6F9PC9nuMAFR5TXWePHPpGHrH4AgriCbAwbKaLuuvNzcAP661CzPRVHvwqeJaHm6Evf2JwpT",
  "key40": "4H99wCHNeFJXeVZy5reA9q81P9WgUaDA7UAspmVFAswKgL6aS3HBzbn9KxTnGZyeZreTxK4xuAKP2F6gBmjx7qyN",
  "key41": "61McBXoQ8WsoThYyvD4J2AFNqLsSZDYx4AyeGH3iPm5AcCHjiNxRkDMfbWs1xkvcb6Zaavz4ECwQ9MhpYqxru1wn",
  "key42": "2TAjNp3ec4CC2wwR75TCXEuQVAHfpWSsJsue1bSXDv6aE2rCasZsVhmvYxZqZsXMbifZeULciFbCwMfUBJpqfxaP",
  "key43": "2YCMrGY8WU53gDiocP8KgKTgyqAB38sq6cjWijEc1CKnqgdR516TEuPhS8wxTyKEf84FmLaiuRKjXciXBLs8h35r",
  "key44": "2rgsZtWAceaQM9cYD2fjw4pVdhKaRc8V1vZqfiG59Us2pSdHhk144ss7Nmx5qt57AAGCn4fmKy7wtGHypcRLNKps",
  "key45": "52ASz8cnuyHcWEctapJdQXVCTTLLSUcCuvtjiM92taQpyLymKWFBuzhKjG7GxF1L6gDQgJNqv24XXvrKNhuh2R4M"
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
