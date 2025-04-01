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
    "ZtsUp5ars6dofah2rtPoZ9YJZrryZgAnETvCWV1aUZ3EDyU9HjMGKoqos8PTZbyhkH9w4qzQZ46k5Sdjr11RRhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzVSHs2ByffJnqZGTFok6Le8coFDB64z84ZhN4BPwsuc3YnAWrFJMLpUaxQcTUKKuqzW7uJ3tNVVVUYvwkNyoKG",
  "key1": "3gKvGDg1xc2FN5Ha1fAWwzoeFvcE8pQXKduQmDhw2FR31gJiMNDDAYz3ZvLY88xpcUrvFjqzewasJU4SbvG2pjuB",
  "key2": "4guG7jL7F6ddKhLDBwQEQiKGCjgzdWdrwkHQsaygVJ9HK1dEtQrbLSbPVBJfkhrQiKkUenjsQdEK8A3HaBGY6vDF",
  "key3": "3u7BhTNYPxntEkqb2gwGaZFBvioh3qRJXZHKmnb7rCnQ2mgz8vntBxC2YhUpvAM9t8muLTPfhwhwdrYDao4tSrvt",
  "key4": "4QfbCc988ZyRfsU5gAKuYq3bt31NpjCoYzesxLuLyrwzvRCvkh95UVCmmJKzCbuuAYmaQKJYUH6EQeAiaMVksZ6E",
  "key5": "5om9sk5H3vfzNktcsibEdmpaZU6hHbn4AsrFmESBURFGGHQRvUn3ALxnF9GrscrVZxwX9Z2u4sWrgxLxstdguv9d",
  "key6": "PSF6bQGkKpCA4UQpbBX6qCgEthfLTdv3FJas87dDTyuYX3CmNZ2NEMRpEmooZAL9Qxaqs1CZDdEEnNptMXCK8W5",
  "key7": "gB8tABUt494DjGbVedUs684K2fNShfoC3z6StoRHUMiw7wHdTyLBvbtFWjym5yv4iPLJi9YEJoqHEh64vTFyPMK",
  "key8": "3bw8TdA1jKXnJZrpwHymekWWpBhhbjoLxozQLj1BiP7HDRFKU9edeyADPzkNFELgABT28MCn3kwq2dP52mkR4XA2",
  "key9": "4Nzd3jEbYEFrDiMsg3eTJ1Liz6FzD43NxUPj45URuzAcBhd9RqxzyuYsK8UHgsm4uRt8qk9Urg671rX3ujDRQJfa",
  "key10": "aitAhhn7dwtAobyXZDRUjPLtFsbbGsaRhLybwY9WGGd6g1aENha43K4KhfNXoZWHiNEU1V6QSgfcZSMdvosJza6",
  "key11": "3hCainC6Mft5HBMq6tZ5DFW55dkY8DSEFaiHjA1Vjkzsp83z9Gq56Nxqv9CSFoSaAMSKJuq9pzfwECnsGyvnbPZ",
  "key12": "2bDAkoLEiQRz36wW6Akc8sBVexPpYG8oGwnG7E4oZ68wusEQq6n8YYqSynoBNcePTWxia8TLQkqhfSUB9jEWJY7y",
  "key13": "2UxkLoN6FbePCMzBeoKcoWhwXkBuZ8RUFCHhUnir7pZyrfXb7wit7Zpay6ipe5ERMSt7LcRWDb3CwdJJHzkP47if",
  "key14": "mU1gEu7duL7BnVDZaHHNsk77DPw8C9bvjhNtN2yKQtZkUvQnefsMQ7AJ6xNBVbKZEKbeQwwk7nCScuUQ8RLiKH4",
  "key15": "35cWPJX1fostf7uHcKq3iEM5iemDvFkb6mrtV9XjgAfovbZeAcxrz5LFGTnebrSP1uZLt1GSqCJPc7inskEtoDMP",
  "key16": "35xGzaHUrJcHUvVKnqtFXh9MNsR5gJjz7yKnyATcrXq5JPkbTYUsrneM6khymkeDAgGZVTfmsJMXLutDkrHRmbp2",
  "key17": "zw4C2Z2qDyYrfugegCoT7Jsemyw5qM5DCAc1DnftNznBMSK6nUvRmgjPbgcvsiqufikv4vGLY1rfC2NdJKnCYVW",
  "key18": "4W62qRqY4AN83ofwQpnGFed7gfQFKp95XYWkHFzNGfVxMs6uQcJWbsi9LhFzPU7vZ9dabb68d41VapqYnPGVoM9H",
  "key19": "4eDmCcco4m7AbYz2RnktuixGeBV5LiKpk1BcMHnxfQtwftVjxAFZ3ridf8RDLvbAHqRgWoThTjrh4Zw1GDt4ndYh",
  "key20": "3PGjCgxSY67ZynFVMERtfZ858ftnjom8t25PyHo3Mh1qTaydxkXSKkwmqVSEjKC1vgTQYXcZTBsW7fHh8AxHSDxo",
  "key21": "54ryrcCvZNHV6BqQfsmcSZZiJsBoKYjevAQEZaaZqRtEyXcfNyahBoMT9ogaNWxkD7uKUr6Su6L5eB2kVkYEQ6ni",
  "key22": "2GHEhLd3GfP5nJAah2dKw3NGK9FBdsQh4v4RkeKLQsdTFvBhEXLcxdAKCksixN6ipWcWtW6s8PZayjxTNGNQkyfR",
  "key23": "5fQRND9Pq3jH43BksJKEgnSPoRXwyaWK7ssPcX1dPru4DBD5b22DD6hFfrHYhFAGy2TjCNo5tuPYR6e8969CZx98",
  "key24": "4jma5etCaGE6TK5bmcCcNhkdghF1WfJNy9fhSh3oAUhwx3RVAf83PNV97t247iqxwQo7PTrNskGAMusdDLKotnU9",
  "key25": "jK4Q1c4WhGthcZ116XeXZw4iycasD9JmZDfX9HK8p6sSzjp3GXWdoR89ErW769w4vJBmEa4MXdsttvHS6F6CPFo",
  "key26": "Ud283i2gkeUDbMcDo1kSZKMRLP1MiB5TvSPBxVKE5P2n1L3gyR8fegqudQs81ALoVktFW7sTdAkZa7j7zajeYxw",
  "key27": "2Zw1jFqwyxZtgfP8hZLbyuZXuby7S4eQGbCLp7pPT74vxJiHoU4UufGUGiCfk5JC4NCg7FXejFe7FS9syLuxpnq5",
  "key28": "5X3AgCTTqcyyPs3tKuWgkrwVAm4Hm1snnWsFZo5Uw8bM3fGhuzqE5PHPhEphFF7R8bmRRB7F2WNkoPnxigQRuBuh",
  "key29": "VdcTksm6ffJgz1MDax5DtvTZ8iyhiCKu1zSHLyZRT1jjjbHaE84L7tPXkePo3AZkqoz1925vZHJhoqmkMZv5c3F",
  "key30": "4GCy48ymxLZpzRGavEVsLQ4WZWFhvNHyqouCowVwXLjVEHgjG4BVGE4wg9Qokk62ubnSeY2v9tXB6uZykWw5grv7",
  "key31": "2o6ceJPVVYjVabGT7zDPK1XqYshGoYFMkERLJ2tmKMpqtpPiq5njAJbs8ZAtwNCYFWntRCGYyD2445ZWogwLf4S8",
  "key32": "4NzjkExtLnq1RMyxMVGjWnZvXM8oCS18CyYVF5XZNZDZ7WZb5FD2rPphhPqwPx8eMjzwUTYMP2eoqh72JJuWPPqJ",
  "key33": "2XBopyv94yAva9mvYn29D8UbGwMbTkXqod35EAdjZ2AT1xRURej7ugF6KkY2HtFZWNX7owcPacj6CtH36vwjRPHJ",
  "key34": "4eAW69je8ay7gGoLAb5vdykWAndsRzUojVr9PLX5FbnhgB3xZBw9FPGEfjsrMmuASu3tSSUiQmkejMYCvTZ3g6LA",
  "key35": "4MuGfG7r6RWM9BWN8KvGhFBzgcADWjUGVn61bMpzRyZbqhA9pS3SRNnpVpL8okDSMjKZz1cPiFAiEuqtDELm1H8W"
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
