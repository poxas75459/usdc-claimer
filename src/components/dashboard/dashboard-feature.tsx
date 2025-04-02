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
    "4aJkRGAyxLged4sHa3zTAN4crXohXsn37i45oS9njEUHQH9qP5XRUzXY8SkPrizhVHxkutnr2zo183FQUcYg2mvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42gXeZ1hpFeantWE5mikrCCavsRYbEShtbeMAJycgdqGxGyU1JQDzBeydpmrR5YNu4ZUkwUDF8Nm1Ez3gcHKGrV3",
  "key1": "56qgYHgjd6UQv3DqCJ8iinGs7QrcGzBpRDMM2aQ18P5eM76p4PfZFnVhBQdGU4ti72pvmDRtTBHysXq9tUVtcrKC",
  "key2": "5j913V49oiyrobP2XAJ7EsCwtQGenV1DJQW3jvfsSCbD9zWrLpGWodM8aZWcbJg6ZJQGuvfajpTbVcPH4iQfv1kY",
  "key3": "oa3KSMf9qXx91Tx5283SYwyEXQ1Pj94GLJYzgWvrKp9fUHw4sVtMx8pn1hKMV87amtKA57NeGfg1N6GmonoFjG1",
  "key4": "4Rb9zLDvgkrWiWnZLURHUz5dK6XT7RpHkbb6bFCGuxC5eh3ovevd1PkzHaiwA9wE7K6LpjturYFQJPaX35uR6bBU",
  "key5": "YTFvvcsvHzkgsNxEd5WUhSb5k1Mp7FV9tNs1LXQcGHjgDyGXBrt317Sm1avS2JnJTwuVv3QNiA92urM1iVo4VBk",
  "key6": "3DW7eRGBtLt2SFm1QrhDQfp2H2eR5AFsJWFN29ikzjKo6Ueug4WVzCcmemYEJzp7ieQDk3X9ZYpm7Tr3pjvS2aqi",
  "key7": "xtiiVCdXDtAYqdNebL114mcKWHhYAv51bSdZBGgqq2ZTL1PBbU2epAX47LoeiGzcagHzzbE9homFYkF83dU2wHi",
  "key8": "25YzrRoHwybJ3fHetDbrJLvftEpSUBAeuabZ68CHvRTR1rDh3yRptSGFDJi7Zsoo1WQXqrgBx9YRXP8sUE6s21L3",
  "key9": "5xCssynzuK1aCZzY6LdoxsmYkFNaQHwDnGNt1LknZySGbxDqKg9pZAciSE4kbdUsdawc2P7L98u6kz4qTmDqtoLh",
  "key10": "4U865GwNh8vojysJLwApc2viTXRqXfhTs39bE5xcKJpmf3sWySwrFk2DU41rYouTAhFezcWze8bG2YrgSya7NRPT",
  "key11": "4eqveev8x4w9fASfffRFmyD8YUVYuALMqb59XBJPRUJAawiXYcgromoBLTVo8vTv1RZqrqvJJzPQZz9gJmw1AQMk",
  "key12": "5cpX626os9UjpXWcwGXEZvZr2YWD3yisdf9VfTgE9UdzTNtFpYVNrRypAPWQAvx2X3Fjwa67K9eD4HqwUv8LPqgb",
  "key13": "3R4BMfJUqYLmUtKrs7GoeJVrwvRi3e3ENorif4Mo27cpoiZRg28Vx5XBUeYcK46XnnybGiKotgyjCrPbhwjztXCp",
  "key14": "3g6Aw3M9UkDdYXPkkW8GDfnMChsfoNFSCZvUXFauSxqCCo3GwbTYw2N6PaY5vsJkyRb6BDvXAgModk5FmqGn69Qd",
  "key15": "4Ks93gqVGT3zm63K6y83q8vKYnQRZPgBMZT95mEKGNiokRVkJCVUGc4TqXU1SQoXYHcsuj2fbxG4eJy7AAQrN7bu",
  "key16": "H6wdZX45fYu1dcM744u3UAuzLCfnjFnDkwjHb1yiKycywB7WukasfX8jEV13qBTrVQyPfG2vUbGcZQ4GugSyf9j",
  "key17": "3ASxZyEQTSiaEQqKUztJAvBtnzYJ3QL5QPJCpFgH4tsosYUo7UNmqxeWsGj6VjsZAEhCoi2XoEMMzU2h873wGWdP",
  "key18": "2PqPGeDsBqsugvAuqNiwHaTZfP2vv4UVs9iLUTtSfCcmDpcoAPjzSbrftGerkacbF2sc7PkYeLnf2iBGxixFV1Tv",
  "key19": "3t5gs2VZN9dzUCGiPeUAUi94oyBDSrcG2LFaBiguaNxJATaxaFB2domS4vhdLqPHCx9LPFD3ow7otS9dF4UXyKfz",
  "key20": "2NEbxubx3nUE3fPjMzFwNofqXgD5n7zKH9NmWugbSUnVCDxsNhkcsFMjYu7AwDrrd5hKevJ57qg2dBGZGBTfnRwg",
  "key21": "g3FAbAf5XPFmHf82cUgABfny8NC3v2mYiMAtcQ1b4A2bZy9MbT3zae4frjsaMu8QDpx2ZL99s6kQiAHDUF15wW7",
  "key22": "4q8AvDJxxYJnE5xAvWVyvfTMi65XVg253PP7qYvAMdafPxp4TcqFhtwWddRVGgLBmZg2aU8LUsqLLM6Y5snF4jfB",
  "key23": "RkfJaxMwpp5NaxEWmjd5meCei9uF4fMjUmvyzwNKRbaH127Re95PZ3zASUxR6k2yCthJwWuQToxcNhnocEY2SRF",
  "key24": "4jtScjtsc9zqYESL3GStwno8b2DenAqPCTMC8iPoi3HdwMBNUfoJTTqVEMdfu93CMCXc1muTUjC5FeWxxVjtP7V5",
  "key25": "5aVbumjportKVdAhurD6CXy9R2t9ubze8zvGRtYkvr3As2xg9U1Li8akSZYpyfK31Bkm3varHPHoZnS1ur1Xmetw",
  "key26": "5cqTP64c85PQDUnCcyxmMGojqd6wrnUKKdDqZVJpdunA8ev5GzYs4FJ8sQZSmKPbx81mVnUBM6hcs1ktT6GUnEWL",
  "key27": "rHer2PCgf3NrwGkLBQFnyEvWhcp7x2w9Yp83qMdEPhTBcpEL7vmQRpd2JzibVjURunn3DTAqWJVpKUrCdTqgxms",
  "key28": "2rQX7Lfa2UZa2s7uCe1sXoVNKeSeLSu3sg4bAA7YrgFPbXZqEHvT47gidi5YUQ3St7mneSPycCLsfJpZV8sWP7CQ",
  "key29": "2euJNPNwr48Htt8oiUXFvyrnyqWGdkYkHdkAutHtPA51tx9MqKverMRUreSMwJgzvByJ3f4R3jgVr75PFhmTCZeZ",
  "key30": "3bWrDc2kKKCXyrwnFNek6UesKvEzbyin5g1v4aMXMpNnc2z7sgiV6xwjGrZbPS4TGkVGB71onpSUZJQyieGFcXkr",
  "key31": "ArMGSyABeMqMf9cftqH1kTQqSk9hJor3i8aSFEeCtCV15M61Ssk9tC8rCx2XWPTrYAF4g3URkKLtdXcnUokA3kF",
  "key32": "4e8Wr1GHwTMYJuhjMcJvJGzqLcPCPsHV1gTP9jf4bGEfv6mYxtbcamAt8VSNCQPX3SgCgW1TTuiPqqY4gnA84gsS",
  "key33": "2fYcCgy9zHW8D8upDFmF7KtiaU5ARZ4oaZ4Scd9PyknHSzXtmr5BuNN4Xf3Ltd4D9YgPAYTzJ8S9zvEtf3DQAEwd"
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
