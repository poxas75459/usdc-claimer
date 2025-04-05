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
    "2p3cfuZ4WpNHBoY5edTupXGFmeT8jZuQicoQaYgp8B4PoyjR1hVS5w1xJ7PScywPM9UADHQ3QdXaTAkg3RY8tuPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3Y55CCLjWBGXVRf71bscc9DwEbjMPQMQvt5a29Jj1cv7Ef9k7UEM2KdNZzXZ6xegeEsHqHZM3yBKdKwBdkQ7H2",
  "key1": "4pvNNXtUkjD9V3guY6p9FvQTWVbC1AAAYkW28KC1SarsMeGJoydnkLcwRmYQW3VUNi1Q8B9WjWX8PS1gpZpj7Bwz",
  "key2": "2ELP6SrrtmLb28VxDufzpQKUQeDP5VZYd3aCQ2imTVv9HvVcCD6sR79pW5SUPWGrZWWymMAEnsQymeSeTv96JfoC",
  "key3": "3Zp19CLVTuKjNieiBSwiqFas4mdD6mwXiNpX3AUhBhTfhcyk5PaftzjYqxfCxuF2AZQzQh5t1sFF2QxH6DYsq9jC",
  "key4": "5dQqHwDF1iNL5N5pYMEZT7U18DuwVin3T3qYgaapA9frDvCLYLt72DLfUXgNY1sQLRBZ83eAFcgA7qkeuPB8P6vC",
  "key5": "5aWf36dXHjffhKTradnpW6vLLG3KQcMmeYAvLmPVfoAxqaaYTuLQzWDhPDMwPkxeArYGzXtSKM96fVPsQoQH97p6",
  "key6": "3PWtQ9Gnmp7CaTiy13u1StAPwgbniPvu6rztWboCpuHgRG5JjascjFx1SQu3aZ5itpmMBKEuiuqnpuLVCbR2LjTT",
  "key7": "58NZoPXfiszu5BaFz1ArAHED6M8spEkfhX6mUbGJvVobUHBgQvJyLcV1qZJzz3Nnkz8XaK2rqvXA6zEk5CRnckbs",
  "key8": "55CMf7vczRNwnyQbfpf775gBcVA53PVvWkPd9U744qAu98sFy9xLaA73BS98RcCEVS2fQe5oYQFzRUa5xwoVG9mM",
  "key9": "41a51J6Gfqi2NBhv2LV7DyqfHu1oF87no8xyWQVHAARuEVwzyJqtashJLgY2pYbWHiAqWF9saiMswtZypf8TBEZp",
  "key10": "55zwkU8ek5qUUFLv3SAzZA4vFA4Wkn1zxEuff95Ugb8CduYFCdh8iA7HvtazK1DKw4z1RJk9Mh6STcFEY6j79Kon",
  "key11": "62EmDXwZ8UYsqfUoAzzXp9dqGFU5FHjeMRRSRrnzAkTwf2uThEUXgo8xXiWKTKv8NnGktFWuiMkZMq8B5nvRk2Ek",
  "key12": "3GkaUQjAbU1sDctgatNURcaGPi5ExXekQ7ki7X7Q6rcjp4gRfxUe96LdAwNXH1YEN8sirmTPd8ehCKBcKbGukXAH",
  "key13": "3cqwd7zMC7AeEJAsrMWkYXJnS61MXbPX4GRGzajhJDFNaqh7vxzvoqTShnWQL8p2kP6ya1qFSfGB5yNT9pks7x78",
  "key14": "4DbqA7J58k3uXAGiR4zagCqfBkxK3NXmPEZxEqnnsdvvQeKhm1EPTQcn1tP8GwFPeG2vBUnr34hL6eny73Q4bzpU",
  "key15": "5VKnwgjYeKvJBsE6gX5tsqx7jfcxxubscGPRMGV2vNE2dq9xfwaUYemqW6jEwDh1NSUqK8DWxtKtk7QyrmW82W8t",
  "key16": "ikLc6rvjN2Sm6MsvVimqzkyEFzcyLmZ1TibQBXoDJSW1owzwg2EvgwPiEBgLg35iiWkUgfTgHFHrAiHJchV4gG2",
  "key17": "32Mw6DB1iay3Rsnre9YhcqdMsJPkqeV2Lv1W2MbNRTntTGUgoHhay7prJQnYEbtsinh5umTYLhndWDnSz5LYKQzt",
  "key18": "PcL4FTNzwCDAzQNZY4drWmaxRBAGN3VppXB7YDHXgKMeZPSVcHEaNBPCLFjeok3rtbYjSP1R2us4cyeaq6N94n2",
  "key19": "5HAFogCeXYxsLwEuGxBNXGaUnW8XVhpjRzh1rRQbeCLxdkcNFRJZ8NQHKNYopmXm5mgYFXAPQnqV5fVYtMDkneRq",
  "key20": "b37KPHjJCXbmDZiRcUsSjDcBuT7vczbsyYfVE8zYTuDfotPnNge3gGgDvFr1mbSESubYwFHSpfcxQuhRMtXncXz",
  "key21": "4Nn8BaUvSCjwtbhv45aa5XN6nwkMhxxifYDUztcJYJpXC4R2bqCTfnu6RVrFWrkvNrfPVdd4iFj6DJ8ejh29XPyR",
  "key22": "2YBDUgbovPQyh13vv84eugdPJpvN7dm8crqpD6V2E2F9QcgB5Jz4VcbBbGirNeEv8b3kFmAKEEyBySbHkXN2UD73",
  "key23": "3HXctaEm391CmPUFuiHE4aRRe6iLUdJid5az7gozmAFU5aabbhobjxiFY7tRcsBRUARgnKtCxJ6znAqpesQfAXHj",
  "key24": "2rnhjkyT12SarEXaLGy8RNNbuPzA5sxHZCQAhk7UPovbzSH2R7BVHJDZaHxwKwYWEHZfQuZYqrNVQUyz6ZnwzP4Y",
  "key25": "3ZwjyL2Qpzo2FQDxpM2sGeT7tmm49MZNXeHYvMXmZ2MNBwjmnUEsFipdqumMe2WfJxyiHQR2jGjQzDREWS86MYLs",
  "key26": "4pApApVBGduAdmqW15fZqhEPQMo3yravFeKNfbcut9xQCcU8VEow44p7bDH5a76EBrp4JSXmcc2HZ3GPSozojjfn",
  "key27": "4mnAHDJXmyVhboa85wEUPMAM4Pef6KSUVLiH2GL4T44fuBnxmsT9W5WRojGbNb5gM58LKGqn2MBgpEGuPi8Lw3RT",
  "key28": "3r4Qve62Wk7zJdCMkxHtGYra7nn1Xc41ZrSDBHTDSUXaVKfTeGps6trD43F2gEdG4VJCuoqwQZMLkP8FFTEQhtEA",
  "key29": "2XtnB4Qx7MxwQu8AKy44QV1NpEwJ4BwLD1WGE1YqoHHp8CYumuByrgZNnU1MdudMg8ddvdjQUQ6inD37nJebvEqV",
  "key30": "28tY93HMvPBAZQiZoULCYj2zBsGPKUcJC98ZQsx68tUcspvLAL7WZFPUQTtsTnoWTLmRrUnswqPnAErTWYPiWWDo",
  "key31": "5QyqWTf2pauWHNpyWg8En37yKyyr5nxkAv2ugVU87gL3JH6zDwtTR7n4SQKokjJX2tjrYw28TNRaJkU1mCy6qoqz",
  "key32": "3ssGJg6vQUh1DaxiL3wopkwwYE5Zcd2o5EK5rU1QBaLPn9MmbvGJ2Ub26ji35aVJCsh4Cr2xgS7mjkLVe1GqUnHq"
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
