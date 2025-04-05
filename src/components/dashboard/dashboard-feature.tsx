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
    "4zEkSVBpqoye2MDNQbt8Yiz79BQkWNszas4gUpZwXuTkFNRCE7wCrEaMhiwHkGERGdK29DrDhPzpkAsN2ZCVsyjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E7F8pREZ5LedQpixTKn2gWjdGXas8zQWwNBM8MoavZfiqSasrM7ocSsSaw7MZc3XM3d6dHkGWM7hGoqHGQEcwPx",
  "key1": "5dyu3R94HSWvhmLKgrdne9qUWmfJmmBBzAGwpSMpxNXSathnTD233fuYBw8RpPBpnDMRo5diw3aynJyQkvPVWZwC",
  "key2": "5xrcue5H5qx7BhbZfiv3VxwN8ZrQDF9EwFSSLTacZ74xipvsAYkopPxbmtCEGgwhxCmdbqdmKyzdNeqKGnybcdVf",
  "key3": "3j234YyAsm3NNy4jqSFKwpaDijp5gQfUQeNGAypcqJCv2aB2Wo7wYnHGsxdpJQFM4sqEjZ4At5EVaN37Xxr2CQ7n",
  "key4": "zuJeWZrq2tR5jrAYakLeKyk9KMpvP9W7Jx3SFZ6jweVVR9LaWpTZjrvc7wuMmdYjkozcvnCssN76XBh6NeK9LQr",
  "key5": "4PE5C4mjNg1aoVJe5whrsbGi63Jb63ka37pHVozanVqNPZAx9gBYefj4m4gdiZmJpk7F59n1zcTPmzE7DQtq6CJE",
  "key6": "5qZ97uYjDKqRA9JzzsXuY7abt2cmoMjj8jNGjuBswjiH8L1wTHMv4tui4MmQLpF286JfCs9LMqUxyWtHB7mWWN7z",
  "key7": "5TiyN8EWHhXMxCcA3iix7JchiYBspSyhSwpMJcrNKefbKaXNNbP69ddkuPVjxPQyAZRqrxZtNXMjLhkY34S4iwW7",
  "key8": "4Qrn1ySr9ZDwTvKuYkxsjg8F2JMnJbVRmqhsjJ4BkBvgKkz1BrVEEEuk3uu2afp6McrZHoG144T7VywR3ZgyNz6X",
  "key9": "2dtQgabV1K4LyqWBQV7D71hDBYMhQVw5ffRG2FDRbNSgL9oZRJrbqUmdnaXKQSTCMAySxEaDwHB7boWMQHHhLBTe",
  "key10": "5tAAw3UsMg3u9LNrHjjKErriB96MCzaZk5S1umaSkYV41ioekEga9eQYULTDNDSzTC8jfwbCehLP8GnEYCbyYZck",
  "key11": "jeyu2396TRjPba7yJ5G3Rmtaid3L9VJPszTYbfJkPfRMZ8VMf3ina4DL5fxoeLPuHjDv5khMsvTgmax61ffZWo8",
  "key12": "Go8KvmTVVMq9i89rrMyezj2PNKisiCLWJpsVk1JmTQqF7PP2Ewav3DB3zTqyrsgCGKtF5Q5dRZ7ANR7Dw8JT1xF",
  "key13": "2XfUZnvFSSsQyCgF7N99nwWz9J8vFXLHwz5EJqMtPfR7EY6GLaDdjxye6WrjdNos3eVfv9hn1yFRuSK5xaMv2FTF",
  "key14": "2WNU6s4VG4HW7SyibTQKrqNiuqCass1UP1Fboh3Nv5wrtqYnE8UtqYfijP7DXi7ExLrbcA1cqeTzpsNDxMsKF1tP",
  "key15": "2gAPtjuQerQfGVP4nkJm3dwUTv2jVvtzfUDTBc1mzu2RppHin9RdFDDHoDchzmDBWa9C12B6w7T4H6VRHmi3Favi",
  "key16": "4zMyvrUwB8AF9P8bYS9cTmbhAgN4Ko72eKsz98ng4W1NLYkyToGKMjHrdU4mmz87NGBDTKzkZ43815x9UraqDUMT",
  "key17": "51J4Nexjmam59sFjqovompUrQ8d14VCowCbUfVUVQZDn34NZFNQdmc1A8dRNmAfdUTCzqi6hUattrifQfMArhhV1",
  "key18": "5sXourUc6KJFrjJuWawmnLqhZ1MmvXheTHuComvdZJj7insn1tWWjssGDgnq8AA5C9fbEJFBMceEe1Y76LQknGt6",
  "key19": "36WFmJE27ejeiYRzyB7w9SQj8fEXqmtmg87Q9S9uw4ueXqTC1KZn5wLnXuCEadtqAxcJRNqiFmRdr6yAffkjyvBy",
  "key20": "5o9fzqKR1rS9iotcGJ8YhNnzd1KMZi3aTJ1hEiYEdbXxHdUALCdthZXWiBmmWuSiai2FHwCBZpx1NMNhoGsy3MYY",
  "key21": "jdA9ehktjy4iGa19PKwiS8AC7uRSS7EN7jtMSCGfJPtAg7seYxAvx1sf8iuKt2KoVZBarnSVZkiDVe3mrp733Fy",
  "key22": "2JNDQ627mph5rNUe3odeH1ixwRX4W4kM8JpL72Gna4XbhBMsM92wMQzqajHBNmsfur7eEqHiuoRm2NWf5zyHAyGC",
  "key23": "5BkomoXhC7cxmiTDm93nBJbFnd3RxAKqMRhAZspGNkTPRPcuH1uzKDiSLoEHBTYjnGcuecq8UdmennHNVh7ZqEev",
  "key24": "5HseArG93oKbc8phR7YFm9TCRheCCszUm1qyv8m5wX9zaqXSxnTwyUXqeRkab9LJds4ygn81BjNVAM9wsUfwwoB4",
  "key25": "5sG27murZJ69sd9K1r4JbLDpXBnUzxtfvmoWi3PTcmbhUBgAfGFKbDPT8nPXp9cMTNVdyprLdAGAa5WvS8EHbQoU",
  "key26": "3g9jQ7izZaxYeVpbx6B9oSUYyw1DY62aE3D3TQmuZTAyafpwEdg9piRwPJ9hGyy9qbE1upDFwHKZLz6xXifFYxY7",
  "key27": "4FvGPCroeRkzYqxD4b5gmmv8N28Mr5WhtetmgdugFXKHrYp7GKzRUp5Z8wEkmPH3D75u5xUxXvcjSs7avfJPct8L",
  "key28": "4WHPC6dEW2HB3pfdSVWxBoctrkuziw5M1953QLWiXKwHE4KvLq1BxbMqyTyxXhmLzAH28MGj5L4Ns41JoJTUPgFk",
  "key29": "3RKrbHfF4Ttc61oHJZEsWMLkNG5jrPSfExnBW8yXrAdGtgRWwoqbiWNLHm1oZt3iZhs9myBadnDwUjbRRahLVH8e",
  "key30": "j8MnqYmN1roUajgiRXYtE1uQ6wT1583Q6qjpvsBtLWzRh3HKvS84ToVkMyhMbw2A1S8ATiMVRz1Mh1uUtT2r7V1",
  "key31": "5H7Pf5KjB1BAiwwFUqQ2NWyp6uGkUyRtZ2zo7ss3d6skmBawSmZdDR8KMwQ4EJuxkhF4b2r1SDxcXbkMWGBUTvQo",
  "key32": "5NPebDCzrZbm2wCC7baTRPXZ9r7ZRstsKnyfAoj6xeTyPKq8S47zNjjZH7MgS2ZboETsWBkFMuCtk5CvpwxH1MzD",
  "key33": "23ETWTV1ZKaCdsa79zQ7mx4qH22dRjTbJC7icC8BFUXPUzSwUFVCDErPXks66iLCEDpMqF6xV6C5ou78mySzktz5",
  "key34": "4F89jDfjdytJBsWA7eygohxwqW6geHgdtYvb9jJV884FxYtBeP8526eB2nuaF7wDGGsd19AMJT1oVDMsBPe8kMDL",
  "key35": "5ozhBn3RGUcTbyJR3YNxqSzv96Mqy2QeTjvd6XULafy1VrzPWaLUvP1DHoqpeCCzbbvayQoqJFLWbzFkEQwFARru",
  "key36": "5W7UN6Xtw57iXWmaeTcimHbGcr1B5bTHy758FLG4prHqcGqkDMZgZHiN7B1w8PzrU38cPkhuduNGF8SmUUrPZYCi",
  "key37": "4z9wsvgsi8xMKcoZgHNUnMc9CDUVK6KcSCBTeUBHhw8jWEGcGcvAMMsZwUEyEtdJSaGLCpsPFDz7PZb16ANE2xKk",
  "key38": "3RUzs6UWw5M5n6x1SMLcy2kuaQKhCWkvDh6y3jKhBT6MV2N5AXKHCA8Z9LmtaEDsBBKeQcpQHaVd4wom3a2X5CkY",
  "key39": "5gDcsQRdB3cK4xoh5S6FvviWDt5o9V4pBk2xGFa6fd3vF5swLNdX8iorHryk9qN2w17kvFMqzaNNsBKhpP2vGPQb",
  "key40": "3i5gcTqYveeGTbXcUhoUioj1SsYKM4GnT8DdFWGUq9MMMvS3pAfh72b1CiJ8qLsRG6UWNajpg468zdDhMAWxgwHb",
  "key41": "4jLsHg3xowaeyaxMpoUF272XzHXmbuKjSf4cH5HDTJtVFLkAG3tyKGCVeHoJ1nVopAxXVz63WbnAV4bn1hTzyzA5"
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
