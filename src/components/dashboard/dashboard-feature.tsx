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
    "3yHZhdfk2nWqdyd7Q1QhGF21JazC4YEhj738x73rgCMMCtt7p3KGi4nxxn879Zx9q2CVTao1HFYzQMQKg7ybNS3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DT7DDK9UmNz4YsppSPJGRJwXcLSD1Cqu15sPuMhS96jy1BP1xXsV2rG51L1eHzXGgKrGESddPnjZpiiSF6Er5W2",
  "key1": "2L8HeW4WSecZAFZDsEuGWDjzncenks6U171Vu8h6sfoP5CXYA2e4FRnda4HTt8TAuLfsYM7qg5DEkUfoV1NA9Gqz",
  "key2": "5STM3b2mcm8aJmwUtPw3C6yypdrb1wQ14JSa2BBWssdkN3ZpXMjG2WxYsTKVGTjdjQmXcfFVNd6hr77DupTguaaH",
  "key3": "5qX3tQXY52BqcpYRpuiNW42HDmzKJuVPiExEADEyHQnH14M6Z7hWUYJ8oPC2Phv8TMB5zsi4g4QPATPePzX7KG8t",
  "key4": "27sW77ycgWM5j8LCc9RzEjBin428f1kVyuRg3jw7CGadSmWusAZFfRHw5QPhwtrveiXoZ2Gb9MRhifidC4KzkJsc",
  "key5": "2VNVrMbj4bcTAiofp4yQjFmmH7czaRE8m9WJC72r97a9nT8y4KSsCa94oeR5Dmu8ZA8XSQnmCKuVtJK81ARQru8p",
  "key6": "5j78SDGFqaswYa5GfAMQViYkc7zg4AMd3DywBYdbPAcTmvf7PeLesVcyippzjHTjKkL5ksB9S9VXgTzTFF64w6Cz",
  "key7": "Hbo382izASorLaZvqw8nY8PFWHXEdSgw5EDV4LRFoKU3bLimuoHcQ6QXsoEa9xkse2kdEWCUWGwT4QHisPSmkYF",
  "key8": "4e6uvho9zDPGWabYhUhbXhdELnmSCRyX1sX2gRdn9qFfdyEZGRxkeScwJWMkT73mGVsLTifR8xyRYeKmDtEZ6qZe",
  "key9": "2g8MgGckVbvJHfJGUe4zPkTx2oV1DQ6a3QXB5ey7L2KzAPsQZoUXyGqeSGVpaJg87PtvSv3gcVLKkxFNvGEqrR8g",
  "key10": "5tibvaa3P1jyyZqPnMaGXTeCg8gNmeZSC9hV815M7txhmaKQTVPYmWoie5XuMesJMwefNognchtCDj98sPVwB5qM",
  "key11": "eNeakoaofDrwQbaK85N8M7QGXhAfxNt9ywZ1FtyJdhdJB6Gax2a1PseMFAcHgM3TAXVXGEXR1UnDCjA7iXL2Ybt",
  "key12": "3d7cTUhMWs4yjGMnY4uSB889S4ASJcr4YgiH5YXwe5iBAfRrtnrNp5aHX3ihaoXVt5JmwtDHxHbrUGBfjY3E8Yhr",
  "key13": "4qJkQfmU7jUBPAX5A7CZv8foKwBv4jeHu99oRmn3LeDzQRrtpPXwGTJfiQhFxmPQfBoD6Gg44uGjGsiV42zJRc1J",
  "key14": "4kCNmfLEmjXCAiTa8XLMeCWo7CKUMU8Y4WAxRBsYH1yTaYMLe3pFu69uvcq7A5y1epVYypCDmnkkK2RgufUupj7v",
  "key15": "5BmoTkPY8o5R27waEgmQeT1Xh7kNaqVk4op8irACKCPD24a68HLgAbezQNazuEnpiER5wXNe4QLfQCxscYJ6P221",
  "key16": "4uhmYpZjstgoqctPGSPVTtdv1YiU2mXqNLmynfK8nA8HHVBfGb79kA8DUwg5Yxc8YmsEFVXGSqcbhbP7tfVHw7vJ",
  "key17": "3Jrdi5s8Ys6NSofczpiUCRm4KuDGmN9EvnyzqYSRoZE79jXH3nmVNMwgTsorXaWCRM1i91WJ7mH5CiHvs62otDCv",
  "key18": "4vTHoVaQEtTJ8arT2Tkj4Rg5DywRy6MLKwSKoBLReHxR89nxWLTToPJ44GiDZ2VXD7EWBviBG1xMxeUQZ3GcQ1Yb",
  "key19": "3idY2ufH6Uxw7K2GeXZv2AxS8wsGGf1YJwhxBb51cEfN57kuACVe1359J9JC3r4heh3vHPWAcxMnycZgnTy6cS5k",
  "key20": "2mViZKrV8f5sp8kwQtSiZQgKCBFhT6oh3rFqJNpc7qEMktNZiyi9KY3yqW35CvjrAULdC6xxkGe58Bc4aUupfg8x",
  "key21": "4d48szi2uwfGCvLLQERHzrFVFskk5eByMCPGynxjBwCpvhbqMGYLxgpntRcogDM18beGdqkeSAYNTBoUCWw1z6JD",
  "key22": "5XbAyGZXHuv7psnh3acRaSELWHffBusAAmNVhXf3vbo2jMgDY5x7UyEpP5VQzSVE8Bbi7g3gTFnQGc6XnTgPohAB",
  "key23": "2sc7oPKytXhcqHdd5dx4zChpUkMZzfCjrSgYkZ9MgV36SUo62yqBc3PVqkfJJumeS8rLqrkyDQxp5oighnTipuEm",
  "key24": "2DZVQuCBSdg3SV1dfK3sRiVVYHUgzoRjhDte96enThKHge5iRZyvqsmbSBr3EGzZ4k1og3P98MTpPB7bE4RYXjjr",
  "key25": "5N3Zzitbm1k3MDnGBqw3hJfWmTjXi5jBQYZwgEvp2X4V74UZBaLRZqXHJTUXjm8u7ftEFu7yiShAvByKfZQyC6qt",
  "key26": "44EADLihAg2TFr9qmN5QuPWtxnAxg1erG9F67VLV5vXBorrsDBN1cL2G1zdtPKRN1nhYXfbFpZMb6th4n3D542t3",
  "key27": "VcmHGADXMSQoBQwCMGMGFQqJCYHts5czeLZJpWwrfrnSwzAAfzVkRbBP66fWuSnRM2n9qwYkvCjkxwtk5za6yxo",
  "key28": "Bp8Yf3DRFhgHjw72T5YsZUSL7rgSwgEZYcTedmorj5AoahFbrZBHdF6ViW8y24dNmVGejTrCrqzsJrnSN9miubm",
  "key29": "3qzdyXwASfmKRMLtXKenxJKcxEWuhbb37soWKjJAP7yX2Kin3eGfuSFfpXK6V93qz2seSmFbWKUsSoRh15PAyzJy",
  "key30": "3HzudMT9Hn25KcDoRGSHTu4JdisJriREvCc6gkdFwzh8GaM9RoYbrtfcjTFfAZj21gvmgvMe8e2KceFoskhnAu52",
  "key31": "5U4beNXdBjhekkevmksZ69dSnS1EDDNcK3dya8KiN2ZrYFCMUG1ecYpJkdD67B5iYYESKNfQ5q6r28ofkvvurHLP",
  "key32": "2CLDmVg8EpSHqQvZxBzWJ89UP4kUmbA3QvmfiLbQNwejQ4X5Azrka6P7j52BDM4LhK5scNyf1G7vMkECRjeMssyF",
  "key33": "4Gq3arwKCmKovHsDcAo9BE2XbVhK2d4cj7QchoA1GyxQLAJrasyE57jKBAcw9zGUnMRgQBKm4Trr7rX5NFEUJcAF",
  "key34": "iETpuugyLVQELJzwadvoeTNs2XSfC5WoNdq3CFmDbWisHbQopaAuz2FPWFSj41xxANXFCLGXBULGejT1Cm8CL5C",
  "key35": "3StFXN5GJeJefBRvRDfCd1QQZV2CWYx3aMy4u1YLqP9mPQQeYmEvVLXqXuShFVksdGirbM3kUw4taHQxiNEZknLv",
  "key36": "AMdJxxQ9qUBLCpbf4reL2WZYjyqLtCLFRjRnEnK3Ft9dNLePZ5NG2yEixzcibG5sXkEe92AyATkByEDzFXkgEsk",
  "key37": "4X5D1GRKhJnHZLPGiPrPZNnVii2yCDsBYgbqecAuHMr3iLggoUXDtXTDYVj2iS1Crp69XWNW5CXgQ2C4888gmqKt"
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
