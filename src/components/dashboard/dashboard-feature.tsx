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
    "2F6WH5M8Dderz2sX4dV16kp4eNYnmV73VSopjwg5paFqjf7bPYmXSdcSn5bjfSc5H5NEr6sm7kJ9M8phHQRno2Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xi717WbNi3jVernPHtXGwenUs29mGf7EzpNWVMcEPH5FhA5Kr5MTLQrfGB9a6pwEfE4SXKGXbGY1rBcUbwQD2fq",
  "key1": "2jAqiKPx6XfMTmbDFbTtSCgwbzxNXVWnwmSQea3cD6NUQJdDyrY58pwJ4MAkjdgmeWokNhhAdU77CCYvmt6mQS44",
  "key2": "2GR7R31bZBQh2cKeeMkqtTirX5Hr5E9vq14NNNN6sCaEsj9aMhMVJb8kHU34nncj1q1ooftcwSbs5vL1amBNyEeW",
  "key3": "35uutV8pW3pMoUCKiWeKRAtRpXjBJNSx7BR4CgbM9atPCNNWQSxZa1cbW99yA4ZQFK6P2xEB5e1dgBM686d4ej8u",
  "key4": "3GfZu9AXvUHtpTXL1CL5ztecgY8UZLUHir6CercwDASKo5fUZFkm1Annq5RYBHz1f4rRGWMhYSnkmc7FAq715NAt",
  "key5": "Fr4b1CG5skm2BnGhrL9BR8aeWWtkdhmm5WM8nuRsPBQJ4LVRGitcaCt5vdbaBhMZsAxVGL9vWC96n2oS43oT8bg",
  "key6": "3pAkdzRgHoePH5zetgDbLegCXkS1ZaCDtp1FpACqBZrZfKowNSTAxY6xrsjw951sCABS8u1JUJ6KBaZ93o3LRx28",
  "key7": "25uZRqJn22jjk7uTEFUijBx3s6VwHxyFjMQBPQL3pvyXGsQXCudzzU8VMMCAk5kN2fyesAf4JCoCnSFAw3ZJDdZ1",
  "key8": "2pW3HvE3S2ML7p4a2fuRFbF24WbyZr48crSnAcJxo89f4Zaj8QJP164keT6nuY39LsQ3hrkfSjU44PM7j7fnGuwJ",
  "key9": "211rfWKGYZHYa6PoFDjQfMbHYPcqetbv5fjRvi47pYoqNx5YNxdVd46bd2NFQT4jKNbaFh6tLnScYMJJHYFy8m2p",
  "key10": "2G2HHcMimJW4iBUL3x9P2GFchnAFV7yy8PEQEmkjj1L6Vp4QrdT496bZssyeHpJkfQxUxXfrocziN328Ypjzxraw",
  "key11": "26PxtSDsKDNDmqBbsBykHWWt8eKxgXMoUWRAGMsCR1zxA41hhfGVuekss9ct8qy7TD23SE9yNfgEz13y5XwyPYXn",
  "key12": "2jXWrAvw3CDd3YVEAfWF2PpEeVcaomZr8CocsC9GdPKd9nfiT8DZYcbySwZuMD76AN9oZnv4SgwJBbsisDnZJ5t5",
  "key13": "5LAJHdqMXB3VgDaBTiF24UaNKCNUxbYeVKKe38GYhQJF6ZKu1qNiQtgwzcZqebhNkStJDTVRfd4pyrqtQ7FrvY4W",
  "key14": "2TjocRR5SeXWEE5RRZvW7RRydbu545xweSZnJgHWUSS6cXaqfaX3UqTvYKSYVpy4raEGhEFP8BQrrtMPV7zBkyDN",
  "key15": "9WFs9USJsNk1M1KjvxETEHq1BPtAgH3thm9qQ5HqnHmk62vSm7vvi1bnYTXn55MkdypjnRNutQvUnBkQi6RFsQP",
  "key16": "3wiU98fubK36nHp9U8PMBM1xAdJiDi43HKjfdcnyStLLgjjucvy17gvAfyToyAKfBmxxAJb6rtdMK4vdADcjNi2n",
  "key17": "2TrwPZu8PhckfMyvdHNpJM9oHEzqeDo5LLRc2m6NrzroCbujuKBxGktDkgaeh77b3rRed65z41Zim2N6mLjQcF3i",
  "key18": "3mXiMbBkNFwcwgeMsNU5vsPHjJdjxYAe1g1wBjgmSGeeR7Gk1xiQFLziPbXfbRKuF5GXe62mC7CY6k22uaMTWQV4",
  "key19": "4UYVMoKNAZjdum9TMgK9BrsnF6WpNZBuZWAcXcm7NyxV9cdS4sBaLDnZYWQMtKCE2ZhWa9ySbKmREUaNMg77d3ex",
  "key20": "3s1TzcQCPZjRBKivVHcSuMBSXLLprSWpZRHk4AWzEDniQbA64Hwjf9qTB6EgBEkq1b14dhdmuzMxXBqCDeSmQ41H",
  "key21": "h3CYm2sxWK2dVZXSsT6ZACoZU1JDqdrfrBHLcLPhcJkVgw8US8aDp4p2VWC7Qq3VWZbcvaK6bUfMHjg46yN1Wca",
  "key22": "88eRXvrUstXMVqvzfYfSWgymAbR1hLGdk2vinamj21PNgcJmWGNEJnmszE3BEJpQeEjL4Zip1EzwQX67mS5Ud4A",
  "key23": "4CyvrpJf4L3pWNxc1QRxZ7xACTPjzcm37kG7UnuFWEh3RhkK9d3grSWCyQFMMLoZFXuVLzjdd2fMtLmV5rGHaz6m",
  "key24": "4nHN2SFCnY2bi5MHxWy8iAcZLwkTJJLsgWVVjoT7A7tHDLpsExzsDSzg2tfXSjzr1ppmoYbUieRzs9gr4fKVYYB4",
  "key25": "sGHCdDBorxro6CeGjikasQeqS2avvsuNsFhFmZs56mG4erVGiEi2KEThk56CoRYAoicc6JfEscebZUyXzdHXXVs",
  "key26": "39HHoHhufXtMkV8XkRrA1v8QQP6tMoKKLrHM8B4hiwcV64RqEHbXH3LppVpvmnUJrGMtSQTDqp2wAQXkUmhuuBC1",
  "key27": "5adhWc5BEy4rzN37U5qYvBdDZSR2Uq1B37H8iQzi8dnHncevX3kbFczvZW7HMrtr7aoDNWV7P2i73XV4pSrprEvF",
  "key28": "54SeQiMRmLAqdF6xHwi4YhyYoaDjbXPa5ZhDBYUCfscxuZDyQUaEk6TQPEShvGnDpWbRpFrGH62oM3G6hJUqivYo",
  "key29": "24vqzNVWu8fNt3Cbzd2RZq3P6kKhWcTCifmWSCAcmcPRSYtj6LyTwmsmkrVTVcyC2ResLHdxDNJbsCgsRJPmmHff",
  "key30": "2Zq6eUXvm2Zai7q8CPDigiXYBw5PEYe7gdzfrcdptFfrxP6UNScDbyh28535KApnu2JTnvduRiVraosMnHYDQw7P",
  "key31": "22o7YpwuBeburuksGyXHXeXJFWo7Rk4LY55qaPUse685jWHAv3xhDWVKd8pArbst7q6WcL6suW8uXTza9cbjpQSK",
  "key32": "2g9NdGLUryWEX7W7LDhRaZaoT5NTReisAHB4hbb3K6JFKjtApspm283XzJXqSnU9QxfE4zUKg1bbD64rPkgDJhSj",
  "key33": "aoVZvN1VPpwvuAGxvajqt6sU1TL6iSWHGBVrtyvJvQVZDc5NsF1gncG5afzkvzCechDw5QRsVRkXshCThVG5So3",
  "key34": "32ZXxFLQRvaC7ubT2b7KdYkwYH2GCSddrT4TifdAZ79tyhrXb8aGkAvAYrCMvFtyLE1jcDpx2axwjNBMd7pzMyMt",
  "key35": "ZDqnAXt3b4KZDvijEgEN9Pv28BPy3VzLZRNSA1Bff4xVM3UPEGnB9rYLR1HgmsEAcCn6VQuMNieQBUmkPBSZCRH",
  "key36": "4kxwMefXjKGNLnJw9otwVyvFwLx38bfkT9ToWsNNFbeaQuXgoXbhQuxqpB3GBzMKGyWzZjbZtcPQKGdiPE6UXASx",
  "key37": "2N2SijQLxX4Ljuk4viexgp3hTztsyX6ybWg7JoYepQXvez9FiYRKDzuMCGZ7JAxGVKisY3NV2H26X2cAGBGuBCjn",
  "key38": "48CjNztkKWKzEz1ShFiHuFoGTXqpbQFM8Ho7ECZeXvv7CBSgTNbnRodVxBtDXf6BYbpHPfXALiXV2HtyY15FRzs2",
  "key39": "3XA24GERSUQTifk2pCn4AHaWZ67wzFepF13JttRfx9A14cXyszgaPeo8T5qX7sR7SMhtYR7UR5nkn2PsT4iGLH8U",
  "key40": "46Dy2F5MKtajVkiLGpH5Qde6i8KFEGgUDcVYQGhSw9Un1nNKdSyAeMTUQXmRrJN3TTBiDGVJuFT6FvsYN5sTSmw5",
  "key41": "rr4AbSnCZXR9553pgLXTdjcSyK3Y6p3PCm241nmnBXcbtY79hRTdratGfBWJeBGw2ea8MZgiqDUHvhbnF45iN8x",
  "key42": "f8WFU8KSmQVZXo4a86ZsA7Uu6Gwqtv2Wuvvrd7QXfUiz68962wgb8Y9GKqioVAUSzftSWZpb5vWrrV4Hs3PnSPs",
  "key43": "Sa8dx4Nvyi8VLXYm6x6NnbMikZrxKHpYbkxHwGy5qQLkgzZo2TjeyDRxPtm3kidahvv4AyLRgyjxHCzENeqSxmP"
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
