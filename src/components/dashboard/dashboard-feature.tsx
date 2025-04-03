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
    "284659BezBDTmNb7SV8TuHDc6cM7S7d5gVQCB7trY2nssaXB3rXFhP7A64hbBrmp4zGikaMxbhTqNvWyZHrzt7dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZvEankGFHPydNmNgf79T1dvwrhaZhmPW5fnLobcertxbYB9tm55nzK4jZXBfMtCYZEZVMk5iPiNUW9TLxxp4WW",
  "key1": "4VBRSd7SF5TRDDoa8oRQwuqi5Z4uNv1dgfN6QM4f2cQbLktv4kCro3cmHozYXdBy2F49Vv7tJSGjXv4ZLpmdnhLu",
  "key2": "3XtQnBskNChJ6612Qgib8e7ZSvESehAbv8KYk1i48mARws4oaN8LXSEHCj6WqoCGtUha1bXiYZ8aUxYoLcys5FF2",
  "key3": "453cs7vGQeemcWS69vL9zr33t492wZxK8w7oPvRWog9VewsGvVwWZMEhySMFZdHtH34JZ9XmvEDtuVTXtTCFeiG6",
  "key4": "3zjGhPDQkkkpypMLcWmXcsPrfbdKBFyDkFJYPPZcoKEAAaWDLCSKogh7cf7VRRTkQu4wctjPTni78WHfTmFhUQTa",
  "key5": "2bTx6fDbszv4MKjxT8xxgjuRQJrqPADchMAU8nG8Ubt92rU58S17TpVVeyh1jZHAQpngDAPRCGj5tBSbuhnqfW7u",
  "key6": "2xTviFXbC3svNakF7qKmJL4TVQGWFDi5AjrwdPcFkSRtzfBjCxxdz69b7C7YXfc156EuCwnHCtt1W4wDjEeAbqXe",
  "key7": "JdBQYBMEBw4H7L8yx3tisBTANTfEQxxKSCgTXM32vMcuBXCnhvcHeUVh4hhb6UWmLtqSE61Td9i34t3bq3ipH8u",
  "key8": "4qno2x7DpSFUYwaHkdTPfh1pdPQEs1gi9kPaMPEZWjRLX7iAdJHGMGYQD9YCDMHZ7syU5Rz1iid5W1i7szbFeCov",
  "key9": "3pMZejmL16RcxMVNwTWBUfr73pqMDNfgx1zjJ45GzX7Bhzyse7xDd9XbSg2BKz8KE2mPKGSV57ffQwUc2KronBXe",
  "key10": "3BsV5B3L6GQzJ3AxoiC2zRdLgweTpisN8B1w1NoAoBBFqUsCChHqcif8EqbJCjuKtqWbAnncAbCScgiLmb27tPRn",
  "key11": "3VSZdoT8EN9MVBPL77Jvq7iiP9c4GYLN5z3dwGahpJwrnyZdEgXxiJchQriy9NPKGp93KDCfrQnym9jfSYc5KsvU",
  "key12": "2BkxZjDrusa6dwDQmKjpK3CZAvgFJBP6M1cgrCWjg2Q4Sg6Zcc3RCxAbfm8skGKyVinWYjjMZ2d6rKHrf3mdDHsB",
  "key13": "4swMQZcSyNwa4AzKyVtwDEvQZJPAiNCpkb8tLbV8ggDKm82pc6Ry3M3sEt3sxBGg8WDNq1JK7x42KnpncobBjy36",
  "key14": "3vft5PZYNA8YfPgwx32bB5UKxm2EVFcASe2ABDqJUKmGS3wND7M8o5zy1mHXCMgEn5cxKbYjjAR8a9RYpbqD49Zy",
  "key15": "463x6Dbf6HNzL7PRsuRgLL64dkQ6PREPr6yhBRJ9szVXCZn9R9aA7S8XNqSr1aKgpC8AK2F3Yx8oWmgKqdqchu8J",
  "key16": "ZVSFAcELwxQxmHT4D9nCQHcZHeYq53j7xEB3WV3RhsfsPBUjoFjzCEWJZ671AwKqKomj54RE76aS4XvVnbcMa7z",
  "key17": "HyGRzTC9c84Hb21k51n5c6ThA1dv1YGUipy7bbbh18fgcYEqxsr52zEFnoS6U6H2a1NEmpLK3t4LodWDsaiTpyR",
  "key18": "2hGMtQVQBXCEQvgSuHqH5SnRhx2sXYc5jqk51Rr7vMrbiUyc9yczKKs1p4pmeVTuW4qc9hRQ43vciiMgKgeBWPB2",
  "key19": "4KmnU84LKgv45LSvpReBS7E2huvJLmrAz997wSE6AqHhAwSsbGtrtyV57C4DwDQWby9WduJQo7HA5hChmiQrKj6v",
  "key20": "4oxDmKm8XghnAMXKBdSSrVoyBBn96MWp4BCFnShDPHNnVUmWzmEF3RYqZyf1ZvXQA1Dub7tzi1G1ouKBMRLTZ7pM",
  "key21": "2Be3LdnbUTNaCmPWixYxBxnbnkH9SB8M2kZP543tqaCeigikEy7SqmC4yCRjrCVWXij7gLrfZbWPgsFbu9TTKebw",
  "key22": "3grSiCvZJQqpfJ29now6Ai6cMQrkk5ZQftcKDm1nMx3oQTjKR9AkuC4oxukatQ8cYJoZxXN4Az3yFe1UtSytcZX8",
  "key23": "4rkZSKTk2Zewq8EfkrjFGCYBz42DbJhHDHSsvFeEGyAmkwamuyefBRxyR1ZaLUdDNT4i5i6LKLknrtcc2kb9djbi",
  "key24": "22PNJur3kx2Qss4ME2zi8MEZAqUNQ72jKfwE1B67wzqdKu8FZrN5kxoJWm8NLNs8nmqVRPihVoZKBMDJddfnuuY1",
  "key25": "2pNfwjYMWhgLeqmqd5fVqXCoc9YjzBwJ9BkmptiiZwRQpCMdSct1GdkdV58YVK8ELNMst22axvg7yQKivEDbQqJU",
  "key26": "2hekrXuYkrdjbY4HdwLGrA7gS9zp8i3NCD4fswRQfeuNr9n3zuEREHdp5odxtHRWmxYj7yuoKCTbMAKgQvitrwYG",
  "key27": "4XMcXhDAdgfumw1xH1FAAyu3PEynTE79XjxoeGQMwsYn7MscVrkx4ay3g9C4Rou3Z9QGDQRnoGsXbKp5pc9kwf4e",
  "key28": "5eaEhaWX4dxYa1nwQbDDGBFAyJNa3Zys9F7fTPM7mtiUt1wpJH9vpqBPpk6Ees3tDAdx4D3osT3nLHaoRNghV41j",
  "key29": "39WWutZ5URobDHQBeyVRJWqdvN3oQiQsrYqAuA98s8ER8hjyYvGiEzdoZmGTKQw21nNSzbLLPq7pE1tDbxguZQG4",
  "key30": "55QLoGu66WF4JaFQBMNV1LgSm31rbRvU1DsBnvBq3t7c1ApsNqqKV8x41296w5sRUNfpGKEGJFeRsxjocC8CyYR4",
  "key31": "5UzmVjt7Xw4nHcWs9zRLf4XcfpZi2LJCpX7XvY5eohgb1SDfD2dzhTZEJQDTFinnDF7ePGb5ssF8QRNfvyJKL63J",
  "key32": "3N7LXHe2iGn4s6krfS9vTv9uc6TNeMKCVkc13Zz5MsHrNY9gcgTnZRr3eB7Kp9d9okZBMwJNeZB8bVyLFg837msy",
  "key33": "GTkBugsg9fToeScgEp6mWjPUYcq3uWYmyCwm68Rj2hGdh5isTscUGSVxFrVb1jzhAUeKuN8yLHMgbXdMnDViJPp",
  "key34": "5gKp9j6MR4xXeqeykuMcEFeHmMgQpV84SNXFamfPsc2CTzZkuCwH5L1Jni5ZGaeDo6AF3sCbCVdH75pXaqAzS66S",
  "key35": "53tNC67H8qE59FA5j2XAmLih5SiHjH88RHbSqzXKjPMbwsG8NHnE2BnTFZS9QsLsNQgpznrfpWAzrRJGJWjrKbKE"
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
