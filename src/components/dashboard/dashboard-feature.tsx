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
    "4gMSAaxi6X3QKf8NDr8TYZjv9WouxokLxoxQ2SwnrCxLkCuZBWw2HvgMmNX6Amkd99oAKCaVtfAHa33whpRFEPiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJcJNU8qitjFiwctynD7vY15ZDh1jE4SYVQ8UnEbGzxMLksHKyqNANVKB2AFovMRKHmyi6Boka5u5F8qtkHE2Ki",
  "key1": "3jiH5MPQhiRzF2nVixdx4jNs3H6eQ8MoNLdmSrtd5G5nbTcojKwHAy9wtuvNjZYSuGJev6pqxZWfeUD9U3WjSsfK",
  "key2": "2FesXFgLpVT7iWP3sDMjs1TH9XX4EBbSrsgUT8KTQUrUNo7MdnTczfSmp8uU3QS2xREvueb34XTmo7FJiYLhmCqA",
  "key3": "sjYBDDFs1jFDMJbWqBokXs26srXJEoyobeaG7Cc7WJdnPTZdyyBVRpCVUsLbDZcBfDCM74VxWXmTCtiKMmxRWij",
  "key4": "5eer5i2kzq7XeDgw2jV2CYmAPKs2ZuDG3aiLfWbpYN664zXmYcXRsJwHFBoPnJyN4Zj4eQVn7spE2JzSiN7mDt4V",
  "key5": "2dL83duWzbKJn7tA3u9aYJztK1DjVJbDLo322SdKxvRrhaEVuhA6nFxC15q7tL6rCrqj7C5h5L4iKSopadukAqWu",
  "key6": "5gLUGCHWwAeSzxAWL5WLhcb9qPD7ZrWwJwSgyxZaVTPD4a2dRapxiAq1mXAR1wBKxf4WW9PkuYtJQBjAHACxC9d8",
  "key7": "4Ko1TSb7WMqL2CcBQc4xrKzJGTnpaTMnGLZETNQJE2RMB53sQf656HeSj6mrZDgNFZt43ofD5LKhabQRZsRtorLV",
  "key8": "3FdUBi4Au6rb5ANUoyut6PJokfvktb8CWtFDP32cXAeMBY4wt4RQbnetwCPrptm6ZxfsiCiDiurr9y9QCLcy2Q3L",
  "key9": "3x1NfA8CGhrNuE8naGv8SHfkkgDkTkq1baBGsr1CWbtB9RmoMPvBqwfynDERrDDht9o33YQGoRDPCoaPAA3hgbRz",
  "key10": "2QvxhU32qqD4GCAoJpfFMTHtH2kmxAfC1p7SBzVCp1viqHNdgPv64LRaH4k4YnRsL9JgLjMbeLfromw9EtnpbPk4",
  "key11": "4j9F1HL3BDwFftkv4nZbgxLYYtr56NeJU5fiEKBeXpYkF6JwLn7SEkZYo3mGt9Xfv5qqp2CiZBErEpGqu4658FgN",
  "key12": "57qayhwAX2dAdfdkjTYTnzrda6bMkQ8BfXsAZFyC7UoAaGyKijAnWsmWfPPMNtMFPfwjZHKDfuy8QuZP98SwnBSE",
  "key13": "HZW3MMrvmPHRi41wwMsRSg47CsDoCh2DfQxbe3jkCe4VxrL6m5kTPCLkhPpdoBbMMAyMJDuUHHvSy5iYUVVjFKy",
  "key14": "271ZAJHwJYfYrsLCuEoMZ6DYYK3CqPbxYdRPiatWd8QKcNJzS4bsUAeeq4wh86QTDgYusQAAMY13SWDy7edgDnq7",
  "key15": "56yAmVX88zzby5CHwNAuv6QzGp5eZKkxLyjfcuGE92ZbGrWTqUASHjq418fFAm4yzZ6CeYowb5KtHSfhhjVg1t7f",
  "key16": "33bfzrsA74UnnpzPwVy81RNVnjhUXpj51xhTKkLrDbtjUmKTDXgGNjgUgm6WHUDPY7Zd8VHAf68xCKsvWuFjxPBX",
  "key17": "67VGJkKG1nBWGyU91cxWX55ZJ8HXXahnxPeeDLFZsgXUaEFkK7UThpdXFH4rKpNsLi4dFxQF9Tu5SXButKr8AVy5",
  "key18": "4zqND9bQHSE3v2k77GhsBciEaPGybSvhfXjwDBPCJDXg5njGeL7EoicoPfoVhLLK2hqj96mMf89LJQcs176Vhw8q",
  "key19": "2xpME3jq4mxJFpsRHBDPrLx7gQyYAVMqj6VaxQctYK4q6dyVprMHS4dZb9e94hsjHb6ervwAjTLirnKYvYEEtMr6",
  "key20": "61DjiUJfivGxPKjntP2BFtU9ZBD9uj7g1Kwh8Eq1ReBqU62H4mrRq3YrAoYweqL4XEzspuEKBCN2uVv8rsj1c9ad",
  "key21": "5rsvShvKJLxBYgZa6gaTEsy1Yc9TKWUUWLmqZkhjnyafRRWi8djMGDrpA6kHKGWV3ZM6iVapPPbQsKaNmXQ7YwpD",
  "key22": "5TvX4JhAkkyCmUDufqXMiwgA26sHFZBKgjW7JdnfyTsCYqHyvs1dpvpC9t25mrrCRGMUXVQAce7TW7oEwWFLAXff",
  "key23": "1VMeSfYjDKnL5FsN2Xt9Ys3Nro59WEd84NESKteKLWF2RpFMZZfVCB5Eim4gM76JcskR4yov5LBcNVbEDf5MHuN",
  "key24": "4f41NkjhXmNmwXX1BDQgKUH6SK2oBCRFH8RsaLzsQXYAizhNBWfHxG1cYUhauyNZyKbcU1ZSwQ9wYZMNh3kdnPEd",
  "key25": "3KeD8fZecscUzHa1YxgFC4Kq9LAsdYLWM22vRTeDevBt3g4hGBVasxvghx6WZVVjmcdEAD68e9MyV37MqNBZfyw6",
  "key26": "4jbkDgcJsPFVxEMhikoy9FqHdTYoZkpurbdRbwgbCuHaB9iN3UbY7SZL2g4D1woKBfEH7GLdSGh1meANNzPyBywk",
  "key27": "2Pg22sB4vaEwnBXqfyXzkoFw7axN69AJNTbu2KqRAAxNJrt3pAUHh5wRPukf7xronyj3n7Vv3WQRw9hMaXtRaYZ9",
  "key28": "JvAikyT6o7baf14bJyPjHQptZfEmzWhXjXEB5S4Q9N2CGQDJ2ndLDa8Ks14E5yg35Pm1dM6DHtfRF39xyKMvtR4",
  "key29": "3ciVE3cPFzB4WimKDHvgZ81Y3Q3ASXeDHAnGxQJGxSxNrTXAE64sw5PNTazmMe1tCEJCVfJ9QkYsb8a4t9d4QPYR",
  "key30": "RJp4yfXeSQTJqzfXeJrRrDNZmQGtQF6d4Q9f6hjjtcPGZX6kUURwh3BStHVRESUQDUJPyEGANW4zvWUeaoK6a9e",
  "key31": "4tVcaE4g6k3RK8bwrwB4yBAgjmQY3GcRrtTNHyYNPPDF8F1ivr9mZNLCYG6n9PywbS4ZT6skZutJptJUnQg1oHzk"
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
