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
    "4L9zn6zwX91PSbpbhiqzXFyCzNa7DXCuS8w4xaqrKqj3VWf1N56sfVRH34QX46pXNqks5khVsQfuN3tWToy2n5Ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bs4LEAAxfzvZ99g3y36nVBCu2nJQ29X7zMxgUjK2SZcSR4ju9UzZJFTL7zWM3aF1V1QpMcXFZ2n4CevziRh1h1c",
  "key1": "21GarLsJFYcxcriWvVgJKNJXNC6367A8mhnPsEXRuNyiHL6TzXKVgVk3ezih1gTRjgr8si1ghoBYRP1PFeeFKd9w",
  "key2": "2xmu8eP4mxCvMGePNv3cGtbG1eiQVrKKVwkPzEwNu8Cw8smGoR2FHG2VzBf9cDZ6NKUwHEsRfJfHCnXhjBMQnrve",
  "key3": "2bRpNvJNoHSqDEJmoxWVFhTWc8xPohuEitK1x4294deJW6c36v7QiPG4GXCqgMcqX7YWr1HTE32ZGXFs1L6wTLtf",
  "key4": "3ouutye8k5qSASLijQqWUsADTVQW6ZS5pEH2HRBun3934LghPLpHochZkAaceS2v3Te9sZ16ZqA84UJkE3aCoMcn",
  "key5": "2MCarrzDwtBvgwt71PgyAPtNFqBbnnjetvvL5nCmXnZzQMAMeyjKexqgc7KHf6LFXZZURkTJ1bbZ5VMmx4yTxW9H",
  "key6": "f8xLrjbkfjQXvhiVxULc99EhW47JpZ68XHjEohH8jj7No4Kysd18Ubtg8gtfMi1TbmyjTKyGSXZsSa8gZ1Q9Ywf",
  "key7": "4QYvuMVcPXA15KeDps1sACTNqQT7agzX2aUcRxWFQZWogyxJnVAxpyiddTPYLftDYbZPvCB1as98MVHTuXKhhV4v",
  "key8": "2VGt1XY5yhf9H6DwXFexkY1agBwLFp7Zuivd1g1zKkRBDHhKmUTKkcnj99cL5YmNvj1UghQgQ7bskGxxcfri6i15",
  "key9": "3FRz7uSKCkgjPZhEDWRZDmonxnzyhpCX35RTJo5eyjuUzgLtnKJMSa23AQAgRTCW4zftKo3tZvnGdoKM89Apa3Jd",
  "key10": "5uMNPgSjDD6okAUGu6QmgiqtJNFgXVq5CUBRek6ujmTcYeEkB5LKvQkDVHaYkko19RRHyP8KqskkWUgexPyUUft7",
  "key11": "5trkTdsfdzaSm2VEAsLab9c92piA1pnuwhqnypU6uTmtNGjKHsohFYEKbBMNbatU7tSvBT3cfbrNs9eECbm3M9cD",
  "key12": "39zPTKAXbCLo5yoF6X5AmCgVGSXMUSkSYgqWi2PjRhFNMGxBMSU4BYUjjLLpi6BFsvBPDQGLbsyqsBMb1hXXg6V8",
  "key13": "3hjBLvULNbTcX2XJ1ZtqhdrRzNgAboWjLwyS2kQjqhNdCvXBYc69V2iyLcXqQSkXfCYHJ5nNZuLyQKP3qFMGeTpf",
  "key14": "Pm2qtXasijhdQBVktRK2jYxxJELwpkTNfcP4xZ92ydyUFeKjbsDBUfLXfW1WMK2Pty8hWHptfgqYmXQz22zBWW6",
  "key15": "578QKQe8bJk1ciVdE5yFjkfKVWvcPA89GRNQ4uayAG98THUTqRwEznUyVucit9gZViiWo2pVucr7i2tnPQRLEJYo",
  "key16": "3fAdQ7grCgdoiktCpr1Q8Zeb7TJf5pC399W9w4qEkbk2iM9t5ef6XgMHKW3BzhL8ZK7Hq2Uni23v7xkHKxifuudG",
  "key17": "26RCWqgVQu7pn2gcM5Wi4tEwkXYnxnjt8DgazPChLr54mh8t9mA8955C7SvF1qBXHaEVyrjKNxYaExps98yLi51p",
  "key18": "Mac5PgJURGk1TRUcVjK935wvbnFxkDYQ6vvchfoyJJCnLUU5kNR6vMzxEQupN2siX88Es1Tp6pssXnKZ23ZL6vB",
  "key19": "5f9UM5oJ9Ry54xFXHG4FyPBusaxkTPLNXUXw9PTscRFYqvVYz1iGCYZigh76vGscixFs2sUNMf1ghpPvEZiiWydv",
  "key20": "3fnepq4uxnbY89K9yzspgb3yzk1WyX5dX8EaUD2xUaXYLpW8PPXuiEzwKv3We2tPESwHYyft14CQ4aW6tnNu4sG7",
  "key21": "3fRe7NbJCwtA9Zp6BVXrGpWym1phy3zoD2etsgXZoyRwekPvD9VUNQbEFUA77csPWqWwMnmSTvPnJSxwgryaAFJR",
  "key22": "3pgrDk1H23FvCUKTXSXabwjQFgMbb8rgWxmweVdAsuu12b3Qd57mmLrptqS8BxVYn4X3pdK8BsZqSBeo1Unkbd1N",
  "key23": "27eZKzeF6tGLnyZioA6Uw8GQonnQVNkJNjQMY6fL4Vq27JDkVwfv8Sfkw81NhotRzoCWE1kQuhHDns1BUL96s3XN",
  "key24": "2PsU9dEYyUPBonZvrMFfg1k196EEApGjSiMqsc3EsVGYVRvWpeYa8DKEznjh3A6zs74N6XVcbmxjZeRZWaujNyL4",
  "key25": "4fC66Wshb1E2zHi6qUbc3Lh7doGGwnBUQdwjhQQXZwFgeFKh1aoeFb4yNHea6qhiBzQsFNReawveQxTLTRtihCGG",
  "key26": "5PMKkwtgZUzEdj3Yy68HiqmEFHavCRfCVFEsjYbpJSYNrfm3cSa8Zf683pe712WvWifdoxFs5ppEFW5wBW5H4Kp9",
  "key27": "57aip8CF5W4KMrD6a6R9nh3yfHTzqrGMc2KpfvaxcCBtLeNi6x9T1wTSCBeLdf9WqrppoXdKAvTdZ9vnpYZW3goi",
  "key28": "59W7n4rF6NB5Lj9D4Uh4aW54hbefzryCjVoxKCRLY9yJdyRTo3ps2q3DkZmegwi7hYw2gZELSB4ZDu9ucFF8btmd",
  "key29": "3QWBtQq3EVW4fz62eAPmrPpP1BBFdAJsb9tTrPKve1p9McWUBAc7EMqprCCVghjWwTUQAeKxcpNhbb4QiMraDf3L"
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
