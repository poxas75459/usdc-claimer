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
    "4uB3vKudJDZLG4HUZvns31PNJ1AWZXnGEmUCeQDiMkQTFG91AtLnH9syhE9gN3TVeWPtBpWrCosyN6LDD9y9iyFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUSMC5DWm4QdjSaY5vLybkqE5brpMyeivSuineTB64yDvZtyxTSHjmCvaQAi3Tns8eFBwk8cuXwp8HKR2vVpsAu",
  "key1": "43Tfunq9X7e3Xm8sPGM1AXNAed2KptZPU7Yunk3xoWXcsCQRYf8y2Su89QhDFtaxmrbnzpV4piMqijCmTfuvBYSr",
  "key2": "35iTfWZbkK7PEUmwv64cPGSxph6R5tFUDgLFd8DcoxZfnTBXw4pDNaF73rGFMw6twBDrMpJP7TB7WFaj9MbNUUdR",
  "key3": "5S51u8ousYRfXBVChJTTdTjkH7Djuz9WmCpJQnzs8mczMEUcJNtS8qTWifEYBTMPN6fJazgjxKtgMZUhB9vmNcKG",
  "key4": "48i4Qyqb6MZpnUbFKGBafLE8bcvBRh6QZnMEorNXJABrcZVoRXUhsHUjqrjYBgmHHu5vBC6SkDNLERRWa9XjL7Gi",
  "key5": "62ZTXJw4uJbe3Ws7MhH5LkXu2on8oV7inZ3WPuUTEESTMezaQVDihfFi6SStTrWu3BR1armLHfRjSb5fxgDAvxiH",
  "key6": "5waAoApqri6E7x1UkupVs4y54ooc1q3YNgzqrGoMGXdCHttw7imPA78FCchpoWTw7raF39r7gisxSgxGhMrKnDHt",
  "key7": "2mVhknWC7hY3An61UoddgS3cXComXUzqMQg8QmeFAeZtUY89XfWpgA5iMCanqhemGZWQr7YjPeJXxVXDd8ivvyTB",
  "key8": "4K4z3tRTCnWLY9LBizpyympNYLba6oe5osJqgHepFDUFkv4wJjn5CgZxCA6g9PEg8DpbRkvPiuFsmEKwZTJMryTC",
  "key9": "632EoCQuCi3MPQFFD2empHkniJpWz3u4zLkCZ9BeRHHv2dXn1sZ25NDLg4G2ikG45FqMoieUVJBahdzJMdpjF43B",
  "key10": "5CXfHGFpiidgKnAEMFFEhampx61wCjwkc5sBViJKvcJthwPWJsos4UGAvc7kXxrX4D26EG4hJwY4FVfJo4zxGAiq",
  "key11": "5hfJWXSF8rtDFapBN2C9SdwXZRgoUbsrtATQV9ee7RmHoaRAGkWpFmT3NkuAphAbuZXk53fCYmaL4wVtg9h337Da",
  "key12": "4Um1EKCAneB1jcXN5Mytzdbhgfujf3wB8dFtNHmPoWsEJBRmRcNJFdHcoV91XKh5usdPx6aH1cu5vASKAzFZXoH4",
  "key13": "5evLEna41iLvq4LpBfy8jyrxRi8KSPQrKpmPz7zTBaHJkvN5wt4DVR7RYWX2KVPf4rwcfp26apzVEx6PxULqKAt5",
  "key14": "aykj7Dbn1tH2D3VTDEFYZT6uuPdJxb6VAUWpsfFF2u6qCwPtFN5v4VNJBSuW9uuCEY2rn9N3APjyafHw6VohQMr",
  "key15": "5mwe4JojpYdp5dU1p2AFP77PneyVtXqpYai2SopWLFy5ApLoR1BJ4rHCPZkTAGPguwqx1ULpHUndteb3ew4MTnLL",
  "key16": "4y4UvG3GN3sLU6eVi2RNttYbCeKaCZA8EDX76fmv8p8PWXUphps6cSYgAaRFK8hz9dkZ7NmvJFFmEhB43GSg2JUt",
  "key17": "y51PxZCy7pGD4qgeURn6gc7dcPJGdckikG3HwfiAmTgNMUyXmZguFHhA7hwGegs9Qqi2YaSBhmqJnSsKgUyLJ8m",
  "key18": "5Cgr9D86gchXYEm1F28FxQLTCnvu7D1zy7LTz2RRX586Ghy1iuPbT8Uptn9UdjvrGgixbFdY78qacW9kNDRnC2Bn",
  "key19": "2JjAZrBFQ9SuZwziTAoxWf4r83dfXgQLf4qbN5L9ZUTq1kougxaeSr2ppbekHVoitBs1c1i7sympqHmHrmBHoDU9",
  "key20": "65mAAwxn63kXKmmWLopb4YFxUKHjrPssXs4hzDtN8PYCZfGpNZWfzKcedMJgqi3dkBbU8WBtxBhyzfBtHovRK2dS",
  "key21": "5qJ9DZs9X8mREBjEhxAQAgqFwxN3Jzfs4HhGNxgeH5GPybyRLd8sBLgXSVYmXDrKBaCKtB2hYNdZr54hwyr1j7jC",
  "key22": "4QGX5Lgy6uKnkhW35inY7NYCE22czejZovgmih6nm4EoyRUYNogRvZCkEeVCbfDGBF3BBqfjQM4vRJnT9fauVXtk",
  "key23": "2fB8FZH11V75xxofsuJU9eXu7HLLA7UPK4m9J2p7TTiuysfEwvw5gpyhn71w8YDtddDQWSNpo1y7G1nJaNMaAj1d",
  "key24": "H6hJDhqYxEG7tSSJYbGuATjU3xQjFDr6KqJbH152FEiZiT5dCH2HxiRqUG8muxrRaoyxMuCB2FuxERGPkJiXceF",
  "key25": "3Bg5CvWXsqCySLjVnv6KniicpPHFTuiodEhvWXThFQ5HabwCFPXAvCiAVs2yjYumVwkMK5AqLT5S9zAozzqKnutc",
  "key26": "2oFj8XTGzXEY3fBV4ksCt4DWMJntxcWK6dLCMUrEBRni1BRKwhwvjRSXXq342LtdFrCFT86zBBarFLV2mLC7qY3p",
  "key27": "2uXLwyPYPr2rxUFp8NadstYzVApRv3cXR7nk8ZD4G2y8A8de4bXpxcLJsuZnc9DHhiKS6sRmToKk1yHpeieK7Ts1",
  "key28": "4tcCtcJYKV3NjXb4TuXowGgm5Qgvq3enJZpmxrK85eB9uZe2ibbmL2fsMrdgRPxfrSXwSrKBEgnF1UMjqxXZpAku",
  "key29": "4qsddi7fb2Avmah1EgAA9ZGDVpN2y3MfXZyAu6kLsH5gUW4YX8shujNTKK6qTgLQZkQ5myhP7tGt4wD39s5fJwGg",
  "key30": "3fR4qrJ27kfXUX1S55pzGAPqmA5sQPWZC8YdmVqPEWVEqfHXEDi11gpxM24PRAkbB93bEb2UkPno5YKHnwBR6YgJ",
  "key31": "2SNBmTntQmfbZhz8zeNzHA3cyQr4DCuo1tTVWeo76qsTrtE7wrqbTxio6af2z51bNEtb9JsspUTdwkJ2pyjQk3Rg",
  "key32": "5F8bW1HazLo8EMTMSmkxqBRjXAtgT16Xp26gjiFnrBjvzwVFfyRCB1rY2CY5iaR2W2GrJTqBq92PbN3mutcDBksc",
  "key33": "4Z5Z22jcUT2kase9tKmQih3gWFJrEt5Jkfonvz91RVuxmriFo2TnaQcjNmDqu5afrxjFRpPXiNkHbaQnuygqs4Jm",
  "key34": "fkYwnQs4fTWUSaYQhYPPr1JFVbffn4aW9ih3dmv9MFHq1dEeNJcHkiHZy8fSqdhnKAGeWdVgXPwHUN4k1HE6WHg",
  "key35": "2kKvL4TRhRYxzwjKyo98QNmc2MuUo4fFyZMXBXvCgBP5hnshNwrdauiDoaDDQCMKYKxvVqACi5fUZ67PWvzH9xfd"
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
