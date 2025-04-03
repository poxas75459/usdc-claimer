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
    "3Ko1fAgWAiCZur9mrWyBkKUNntt1ELE16pKEj8n75TidhdLyFBz4bZsz2Ub2UChpVzkQjDyUXG5YSfZ6ZS6a7cNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXU5M7pYh7kCeCVqM71ueQXEDLgEznk5rE21fw5m2k8hKzq4hpqeu5ugvVAmErh3oLKtUygEym7VRWHjN35nE86",
  "key1": "3QK5yBNshcQKb5XC4jiosf3HVmqsyWDNgAC393cX5Qr1wcGH3cduXrP4LXNaaTsvQrz544RC1GgRgHEFosaTmpfa",
  "key2": "4D2gn7K5oC3LkUrebLzFnRaAJNQZKkhz14cy7Vaexj9u6MHHoAaSpE8xchS4wViMwkVPp9TVbcwGdyMkuz6BaF2D",
  "key3": "AumEhjXKZizQPohgNCYU8cNgCcUNE2YyotGKgtvgQ9chrwCeeNFCAkZwf2YePta5sbtpjrdZ8kcSEiBx6o4KaoV",
  "key4": "2aGKizE3VZGhFa196kygkaQ1wC3oH2ZcHPvK4mpbxSK6rrUMffYanvJ4vMggcEWpzLhnHqH8u416VadiqHc69T8E",
  "key5": "2SSwgpWd3y7ivpcD2nAGeo29wiaae8LakVafpou3WRDr3GV3YPFbmPmXhDLHjmTFNykTCE79kmVYPGUD2yFFAbKa",
  "key6": "29MMnWN9zgjQqj2NfatL3bKXdMS2RCZGASpgvB3eYKe5BaNcmdqBphWpY4pcjkgRTA6KeMHeJ58t7FFRMSwEUL7N",
  "key7": "WCtP4qKwdUYQGd1KG7tWv7JBHTCZ43Fao5DcMZqLbwS4U1AQMrtFHKRnGT8STstUA2Kny6CLL7a2yBPpBur3Aq1",
  "key8": "2emV5wqUDh8Gzg9dLie58c2mUFTAJsYv7Lf1jY4UZarx7oeTCDDH7v6ytsRrJZygYvsCBdrA5tVb5z3TTRYjbMyD",
  "key9": "3jC4WSZWfGGbn7LRdNVT8eARSfWruDAxydcALyNc6aJKByGhFEhLVeekt2D7ZbwhCbFSAxtB9gikSjjVdP7csnBj",
  "key10": "5gBF4F8MeCGUBKLCHpvW3G3jmTBYmZ3StaLDZ6ovgmMeVzBw3uVFMj2c6J74njMpcx3abCL91ZQjtY4JAiT7hKTi",
  "key11": "3xNWjeeVStBY6DqCVyoYu88S2jcpp3VxxGwvBH8ukCiYcCtxD9mb8WtTntPGGxR7K1SJGgp8hMwkS5hWWeWTwnJV",
  "key12": "2VN8JmoLFRuXMo7DPf1AiPBwddTesxs1ybvrzxXX51FdTvozBaH6o8LgSB4nXL8U9d9QG4SbBcn1DSVvADGKsFyT",
  "key13": "3DgbsNh1yHPh2xgi9TXZcXug8hGuKgAZ237hLTfXnPDPwgBBerzizdK95V2WWabGmtN6gUHH74DjreFrn36GFwwV",
  "key14": "29QaaGcaYBHZXuDyoNAi7YPDediRVA5LkGaVPMkos5Dt1bi7b7NvUdM3zK7CdDNVJ5KCaDhCpzF9AXaqGdDU5xJv",
  "key15": "5JJYHKAQApcAJh1DjwPSvWctetaHMmbVbM2zkQv2tXJZh5qSDToAQhnFFVhSEikkahKfp73etJa2XMBm3VrghzxS",
  "key16": "3ia2RbT3r9A52pbkqZcMAQDL8S9hz7HU95dnHvpg1RdmKcnamJFj7rMMhoTVhyQ6N2grjy3N3yp7ECf7KBhs7vp",
  "key17": "39D6QAyFgQLnJszZXGxW2VQxnTv4dzH88L5LArs3yZAayANPBtXcnDh4SLa3Bn9ULYB7Qbu4knPiyZFYEaQgbwfy",
  "key18": "5JtHPVMQXvBLd6AQJY1KDHfYcaGmQt4zRfYBXahdbNXUeWUBUEHJjQUHoUK53bRjsn1dMAusdptEqxhbdCsxzSSV",
  "key19": "ZXjNoaEre6iUf9qzbPfM5j2Cy2ozdzEuDup6bZ9gkrK7FzQErBMjok1cvSkatBxCxr95sbZF2YdgYBqNhU1bcbj",
  "key20": "2vCuvxNSqBBG3m3fexnxBH5pxMtEb4Pfnytutbuk3evwPraSQu2c6ZEbpHC3Tof9NeKz92KYQjmy18J7v2n5MKAs",
  "key21": "5XUDoQY4o4CHRnoKY1DLjDG3utPev5MrWjP5c3XkCrzHv1ZxQesKzSP8e2VPtWNz5nZeqfHsdFpzSEpCmSkeBPpN",
  "key22": "2FjyPABGE5QiyMGyfCKsZtE5jMP4k9rPBP6sGwLJAhEPRJXbP254APiiUjqfXhbi2THnTJ5Rq2npeqUDWiHfM14K",
  "key23": "qHTrUsviyUVioRdd8R2qEhc2m2AVJ2Pck8jCrctvNWGBvWaQxQQbB8jkzhHVdZM2zoSgLU1kx33kXs8TiVs841L",
  "key24": "2agdBQXT8VQiJGbTAYAy2VcFjLYqUdex5Z6raZjeNgYUBvnREhhHdPzRvRSKNxFZ3i5RVyLziW38ACUQR4E7kFsb",
  "key25": "4ioirFwPskJzCQfqSJ4kxk8nFah8ukT4M3hQkmKUGMJcmXZYzbyw2c3uCEd4WdCPZ2sYEL6v1AR3p2for2JXwoDD",
  "key26": "47xNxHDkJviv3hBf9bLoWHWgNrKhdBPwMpTYz158MXGH3eWS3mn2nzvoACryNmy6cX53C6F5Gz7YgNqtN9iNpHQu",
  "key27": "VpdEkqjshhFhRQhV56K8KTqF6fEGWYwQm79DqGpzZjyw961UXtu6cmu2ppNUcDsJGpK4XxYCdP4KkbFoCtH7qNB",
  "key28": "4BiBSbHQxZG2SpKaQqg2qB6S3jbLxrVNZGkGMcm6noncDU7BUxN9NoYujLvXknuUa2y1R8L3dxhu3j4sCVKfksAK",
  "key29": "3RYmp2ebxnNfb8eDaVauwMUNXBmxHC7SHGXnKqfKpkFdriBr9We3iqcAnt85LYv7vCia4hz2omEDsPAdEjJi9AYm",
  "key30": "2C6t2Fuyogy5FTR8TajSGek3H5M9he2Gpwm1WnFvBGhwUFo66Lncc5N8WokFDxANhFWaukMmigaY22yF3bju3eYa",
  "key31": "52iRQkUT8RDir22NBzLeLPsKkXPqJc39XHU7mY1QnXL8Sx7FwLG8dUAeubX5S1Z3SusQ6yZ9RUFD7JAML9Af62xo"
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
