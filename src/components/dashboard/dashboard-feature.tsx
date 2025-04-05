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
    "4NdXDRAST6xDQPVZWSXosgsc756Zk4YjHWM4TdSyE9AeUnG1KKPuJqWT3mpqb117TZyXCVtwr3VStzvaYg3qigUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5niBHAkZasvX6Lu6XQW6dyDdNmx3gVBH5g73XkdKB6bb7qPUo6TPBtpcMnfaJaMPBikxRQWapDMRjssKvtvGxyCw",
  "key1": "2eHpCBFWAXfTEC9w1SD2ikhgghgBREctNBps9CzW4eygiWenvAbHvQzMa75MpCPsbQixyuSyfmQZMEm2iYzjX7UY",
  "key2": "45wrSuEW5AZTUb9pG1d6V4crdkuMfnFztzYGcKKfSVc418iHHKjKQ2uNicwgVWZHyEcMmdyFmDmqVjsCYLBr2Bwc",
  "key3": "4jTkbPR7sWXdMZTeLJc2tvTAuA5qzBAa1YDgbVYDnDp6Tk17vuJq3xmPzEf3ruXebwTDqxnqAGuisFDp89oftAA1",
  "key4": "3swcNQvYAF4ZVcuKDHfaB79dEbsFgonx7vznZjNVG6CAYCfzSAn9LKGj97oqNyi5avzaQyjpzxFokLrcyCfphqFm",
  "key5": "5oT1nZU4yRd1rv7FzFUYe6YUebSArSgypVFhpBmg9jsG9Vuj4s3GLrWAzXQdQ9TMZx87n7GCPqmyS8xS9dHtDUTd",
  "key6": "ZTJd5upizGgm1nkGNL7NU7LjJRy1f7wrvbKF8c348shYSTVwWcKQEgcUtssjTec43Kctrmgtsd6R5LmJ3cCq3XN",
  "key7": "pZxoSgmtCQwD12HoDKTxrX5ArB9N8MvUTzbn8H7npq2Qy32mJVJbSwwLwLQXj4fMdiHUuXfQai8YDxNJjXEn8pX",
  "key8": "26dyCGxjk6YqyyQhfsBi37NHJcBnUWF3VGWFDr2RTamHyripL7Qp6XYyyME73QNsHsdcsBmxDJEXM2t17wv9MAs8",
  "key9": "5HioFN1BWdKk8mdTbArcEMT4DBhBoHkjKdU3Hufa8XMhN7xkcXguTED6gJWaNztd2p63A6Ljde1m4fADbiMWYpKs",
  "key10": "3Na3RfitdDjfPWofqvxtnpYJV3YNx2eRvZPQmYXVcsRnAdbeAJoZuZnG3qPEniVsTRndNQhwUZtrvmTe85S48QQA",
  "key11": "4bMed41KLqUoyd2V415wSaRZWqmsFfv5ZxGpqLgUwCjvuCbFSJqF65opcr9qcifgaq3VVbnqNYTLvbC15WkKgJ1",
  "key12": "3Kp9fzeGyZrR6ERa2WiiUtXtc8EcwpMX8d9Sphkp4zyHqVfFAHquGgpXUZ6rwQ8KjAX34tyZ1j4Xj1nUJPLgX5hj",
  "key13": "5oArDz2xsdM1uGafrhxf6ho9w3eT2Jr2xY66bdcMEwyGZRd7oU8mPncXBPTPki8Nf1JjxGgUNufyzxwj3xBEXGtQ",
  "key14": "4NkwsaSURMhJbaYBguZAeNtyb13tiY7BYmfBDAit8cLbMrmHM99pvkD9FLUcsrWyrCp7RARx99HUUafS7twDQVdP",
  "key15": "wftc2a6xZCr1gwKZZ6ivUYAE6RPqguLzWCKjLehWVew5GkUfkoCc687RJkZsTrizMA564cL8hWUjJwSbcoFHPJ4",
  "key16": "5hofkdH9n6Rf5YHus1zG6JqAejtXyaxx6ycrpJPBjQvb7ND7BPp827a1gdBNE67j6G7mRe11cwqZ5cL6ZDSCsdGM",
  "key17": "5cXojQPMsCgT7TeZG4pbGQhNr577UhfLipvAfUKvG49kwntBsrzTFRTqAZAuKiF7M2Yhh8DU7rFaDV8EDGXJ3RNf",
  "key18": "iRix71fymVu94mQVNDxToQWWYghMwKemQirgaQvQf962HbbUZuR3usb8EHZUXgTnuM8uL7ZxiLbj9nsh9GdKaEs",
  "key19": "5HDW474LSZa48gbYpwbaoH1WrDvXGyMhf8xB8k9Qp3eCoQHQxo7SSDoGqk9duQqgeDeAdbaRwWv1JouN5UY96KcP",
  "key20": "2hr9iGn1b2vsyzFvGT3b3LX2ZJUwY9sJe9V7knnZPM1VsHqWYrjynBP33VfTn5o7RknSQL5zF37YUNX2pfeABhAs",
  "key21": "3t8Q8kVM6Fj5PP6q1g9GZ3d9u6vC1YWJPtYbVwJR15nR7DJFRnv95hxV4BL1LSVSTEwnGFuLCj2oUY3joyy4GgF9",
  "key22": "3SoS2j2dxKVP1Tb9MBHTxCqMDiKbxiGP3pBXsf8bXp1ffKJBGKF1MB9udSL7n55a9PKe9A7bLMrTcSRCQx2erzMV",
  "key23": "3u5tu9QoW4GmzUTuNqoc7ftFTevmmiDs1rz52S4RdnoCX2fXhXNTkdL4NLC3ofC6iz28o71S8U3FPhjVCmEVYtsc",
  "key24": "FmBGmECSVyWuNkK5i7at7tsE7s4XqhQyUaUSj4nXcccM3e5EkgGgvsQwh8GJ5RDF79o3TwijVQgSUaWVFy2y1ZL",
  "key25": "5eACE4sVJJXK3RTo14H8H7kWUb8ggZ7G9VR6C2tSokX7a4geW9FnrNtDvZLMq11wHjnUxAAtV9k54q4ZLvoCxKMj",
  "key26": "4wbBkvEPiZVoQVWY57pPBX3eb777bhdkSuba1J7UfG73drqVq1n1e9BW7HJs6XxCaJnaop41pGSkfBYuGyuZsvWY",
  "key27": "da7KkUcdb9uymTLzXy5Db2LcyczKA6MMe59KGhkd2ygex5VMEuiUPCSf6vSp6TG8GbaKn5hTVA3rx7wLHBjZERb",
  "key28": "5mkhSBnLYjJmF8Mw1eYL5ehAk7hbpQ8kMXsLBQNquteEejkDhKh9TuCUT2qFKJ7R4oa5S4ZLD3huLuMmAQuzTQ7k",
  "key29": "3DZ7G16Rz8AkVU4Nmhs7ySdRPf8png1C7VZWiSD2YbPPMmnMAHWjGWBpz4s6oZYwMHJYF3MmKxA7i4dD3Qcibj7b",
  "key30": "5Kesgu9YvC1CkHRLrXTuBNrSPzs6Y1FKSw44JCWUKAj4QyRtjzuD2bon2BwD3oDhGQhwKiXuoF4VbzAKsjnJVLrt",
  "key31": "3Ha3PnV5MtVCswMm5zmNwWiXzsPM1abjY1sWCVD4QNDQ8AJnAZRE8pcgmCAdS2oCYJ25u1iBLpszypbSgJH3KHZa",
  "key32": "3TriSQLg5WUgRd7dJqaZLyW4M5XY1bjJxDgdPTLseb1qNmurHg7AwiT3bDNSqewnoopyAZU12V3VMFhJ5Q5gzmBa",
  "key33": "jskZoevbPEYxkkGDsx8TzbPMSpc5giPjTbwvogpLUa9dRtcxifB6VG9MvxhivoXLeRWrXCtPLq5sDh1CAaBfdej",
  "key34": "58hgxAKS8zjhvpuRse2KWR3AhovHJgNaRZzzewivTwJ4zqHi3h6UVwxn2iv5snbqVPsYPtpH3DP3DxTW3ij8mY6Y",
  "key35": "2YX4w2eoSHjPkzYYeU92SPwNTE7keLS4DzytUS8J1W9YYAyDsQTHFFvqTXmGRLL3ArnJZc3Bs6xtDSj9PSQMEHpD",
  "key36": "4gZ2RUcwYEx2dcvfdU95DdE4FwbG844ncQ6hc95ug4agbpadNUH8QNDr1awJFfe42BnGC8XpQJZpKuf4UweGF3KS",
  "key37": "4cuHCUQZdYhjivEVjNS4nUBx6sqDSwsShpZSLg19LiCjxo142fSRd8FCAeR7PZowxy3ch2A1cHf6FnhghgfF7Ha7",
  "key38": "2aBWnfHM7K5xNg3ksZVMib3g2aaTgcbKshPaJ2MgNVDy8oZ1jqhBjMf3uSAbMMrgfHRZRMpTRR5XgFW5Dz7VNgaU",
  "key39": "4Ec4EjDGWBB7Zbwo7tAycujvAa6HZXgJYSFHJW5qc2cUCHmBbchiVCi59gu6cw4KcSLD3TgidJtA45ojdA55k825",
  "key40": "5NqHSRnXjRHBv4i1iN2DSso6RQGbQLUz13vx5pd87d9bL5P6TbUERo2bpEpdzu9xBYWSbg5Y2DyhxhdKVDANtEps",
  "key41": "z33C9qAyCqv7cNVFGNVWrNFi4jSeEB7JWNWLzan4hjucTqiqSo3HAbQxF5x4ur8JdztiG6qYSR7TE8vpWLca2j4",
  "key42": "2cKNK5Go6Ye6NK6vhojvoNqEdvhTYvNQpWntX9Ty9pGNVwzcqmj5JhHxJdn33ac16tVXsmzkcebE2YJ3h158Vhm8",
  "key43": "4pdYxR2RXzTdhVE6XCMfzfn965aH1btH9UP13KEkMLDoyG4gt7hkTduUYjyshS8uK3Tr4FbMthdP9EGb5LiaieA5",
  "key44": "4uaWqVSxkQYcJE9zdKYFHACnW1TuwkWwNoiKQuVB83kLD9b7bos4ir3TY1BWcdJnABwmXnh8SUcPFUrMhmHFhtvx",
  "key45": "55Svpabn5WYeyJAPkFAvpLLubE4QU1Pj1mrz2ju5fKPMvb7ZQPdp2DgVKsJGC2NXnsuBCQa4LuiVHKBGkvszWND9",
  "key46": "2MsD4gfqt7uceDzWXyQPLuK1ZqmJvp59KG2gLCKXMGdPZrb9xPDpje6EBveEQdxhjcTjLeLE51EbkW6xAXRwfRE9",
  "key47": "2KZ1NCuEeKFDGgTKvNyLCQa84NQw2CJe1bM92uDdJc4KmbZRB4XN3nyG25QHjTd3M9T72F6LZLTyVJgfSXTNgVFt"
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
