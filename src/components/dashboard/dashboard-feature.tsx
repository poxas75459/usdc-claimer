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
    "3djWKuaQbge1uEG64byKvohGmEk65BgAQnK3SNUz6UA2mwNYMXfE4da3wFvY9temH3ef1Ta7SqdW9shXX1HQoJXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DjMDuFLu2cAHexFrrgmGYUH6m9DBq1Q6iwL7tcQQyL1XrABmS9m8anLmpdUUyMrTFYzNwx3ASU3jFikhzC8jKPR",
  "key1": "5LzMdWmCLqdo3EQntqE2GLC1ApJX955rv25XcU35dCwyJEB3WBCtw7xgEyCZe7GKAaLnZcTao8M8fUtbpPfmufee",
  "key2": "3wFt6RvEo9Gnshy2LqCUGt4p6AZFuHyn5HnppHEuPX42iDERRoMTEfUQLmW3AZ7225izzM7qdN3QCvWvJ9RpFGnA",
  "key3": "4co2mnSdJFtV19UytNay79tkom4yEWhvbghDcuksLDQFpRnfJVUjxNZCPtn3wLRfxatmgSKjSwLgZ9PRGTYR6abZ",
  "key4": "3fFccKfbnSnmxrFA8rDpNQfUb2hxRV8Wdx86Yu93yP4S4VN2uRvbXsXfDBk9v2YNg56Zgzs38Ybmy1HXHX6K2APg",
  "key5": "5KR1thWfopURrAXR1egoY3TaGuN2TDp5N3LRMFvuD8h8iJmdvGgM36pQzcUKcfxmxBWnzcxgWaa4xBPmmnSGTeYL",
  "key6": "3TVnf29iNqcfgC47DWsSTFbuKCPmqocUCNHEY1Y9tcEtNxquRCP9cUA6wB1Z6TUbfJ8CK9Mhp6osP39gYTKSY8D2",
  "key7": "GNCanHdg3zsDEkYfMNfvrzSyYe84cVg2Jr5Yo8EeJn7z1BEcpoGgyFa6MdjFFF2wSchw1ejtdJSxn45B5oRugP8",
  "key8": "5caAe9CRtEA4rAxwu7TxRvaonnMD4DAwurtqfBs4EfyHKRJufnE5fmHkhg4UiuhNVeWsE1kac7wcuaBJ2csKbVRF",
  "key9": "4DHKuHCAak5xjhpFfyxMvcAf3YbmMkY1iJQPeuRDojVQ1bFfGqpsoyRAh5Sc1gXHwxftHtceyqXmPt3PPmfSKqZQ",
  "key10": "593eiQJ9tW6w91jXrx9UU7gPs4ehKxc8XcdvhUCob53a76tS6rRAo3kzPM2qztGws3Zh5aUhKhQ97sRifoQZ2rsc",
  "key11": "5GSSiC2aSEXoB17XbFCK1Ff4y2R4aQ8vnBKdHs9Ek13Qg4a9VnXXj4CvS5BJwj936g6tC8cXwpQg1sp8EEeE7fmu",
  "key12": "4RRDUhU6Ei5U8KSdUnvTrbiNsTTMqzVczqCymtGH5PY1w8dcB6pvbCbD2urwoHXyE7zcmdYFLjaCqZnsTD7eJCSJ",
  "key13": "2uA2vyBRHiBgbMe2T4iavUuv5ahX9VHazJsXY3wThnS5G3QmU17RKHGEnH7xW1tr7FxpgZX73abKVbi9yqgQxS45",
  "key14": "4XTVnbfW5wmYjV6F2UcFoDtYSZLpH9kb5xpGxQpZ5GHKTVBf8ySCv9g45gU5y3vCYdTaAjUo9YNW8ydHF4kq6nKp",
  "key15": "5xvx3EmgnCwoZ66TtYy1ob5JcsxHkvgyVyxgG49UuHWaoQCnqJLDHyXFzvQc51vhVJwUDAeTrWZxnBPPpk2dLLWC",
  "key16": "2jmH2MkkqJ8f5Dybv1ZpfGeUdptd4qUGvQ44Bb9HYxfSCjBmoCaVUe44hhutp3VzebmEwH2LTaDY3ZZBSi64AEM4",
  "key17": "2uSAL5rr3RAsf8oGHP3vP3TcKF8x1GxE3trdcz44cuXCv1pZdwS3VgdRwqEr51kGBxfUDAjsDqmArBL8qpro9tLP",
  "key18": "2skRL5J7jYzGi7JLbYvWYHw28bfSCUvS6pWVQajrxjhxxBaEH8G619GmZH9yxztszsuTKQaipQhT62hkn2V8eWpd",
  "key19": "r7qkNPuQbVTfdcVrTaCVWrUKjn1DHwYXrx2Unk68oWwg9959DeRYhdfkw2Qy3uz5m9FHy2isA93Kq8XVYnHoBEe",
  "key20": "g5N7QaaYvSp2q93MiFBmaiecKApC7TvQY7s4GjBZQFCw7TahW7FdoBw448f4tnQeHbCxeKshXMFRrjPvHkdBb65",
  "key21": "5tB4VDup379iU8mfw1aK2q7epJw6tkS6jgZ2yR9B4woo968qR5BU3Q78wpvfiepJdsbHPrY81qP6FRNAJ44P3LX2",
  "key22": "2zEvUCBsUV1nqCbzTtWEDKdj6LDEttbCyvFP6eqfvnCcJScuufuDS1oH6ozi75949mo6ZymXsqRiPTcxiZTQpxJk",
  "key23": "iB8wrVBoo87EpwY3S6uVmJ5uu8eX3ybQn7SDtxkV7DbgNrTD4absfzoLVDfpefXSpRc4jkRzSBY3jqSZvSNnb6M",
  "key24": "QLK16cYRdEC5g9V5xXe7hdv2eih6TwgwXFZQ7mqLivJshpnQiEGvQvQWdcp5sEcvUpm6NiVKpiMAgenWMSYJ6FL",
  "key25": "3EooA3FRRq5PCeMxr2K4ZUaXiYo3myLCa6ynEVswfoxq2J4qTCniBJkT9QCrKq8hzam3xKocmRZ17E1DniwwMD4T",
  "key26": "3CeYiWrukYBZFg95AFuQikJfSvmkyqEgZrew2LRHY7dH7TrDXamJujJNvq7PPmbxPe7tDvujkKS85HpwkMCiSCRd",
  "key27": "3TMBvBTTDTQzTEC5ArpawHoB2r52RCCpDXEFCGQPaPvZoXUW5ijEPWZ3UBjpd7txPMb5YEpXDhPAzUvJpqL7z6eT",
  "key28": "4wuq6d8wc3v321yhWBCjKuy6GY2yyHymYAV6HJUJ34rs8u3KKQELQL4LjzopVowB5qbDP8Rzt98KUJmssdCjeSUS",
  "key29": "5yxzSnKpi6nmVBma17JF7VbnXR7jqLL19oukD2QG9kq3nBtk5jATN3REoDmEW6bQLQRQCrzjssL5ykqW9A7e1Kc9",
  "key30": "4ff9NjBRW6uLm8ftVb8uvLe7PnoHdYA1HWqXQXParHL4p9gaLZJ1oWMpSuzhXPxHk49deo7Y5LrS6iK5GN6UXC34",
  "key31": "4wRwZgdoDggcRgLfPZtWxPGAQ2TqUS42jaZz4rJEAVfSKA9KLqFLiBYmRcvuzhgD3tgwL64gw4T2fQsykaF9bgRs"
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
