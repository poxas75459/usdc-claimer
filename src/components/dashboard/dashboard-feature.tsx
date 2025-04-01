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
    "yiTRYQQzn2uD4SPcxcLrycgd9MtR4y59Jm2PQbjk8yJBinadYYyZxFfPxYkGsgiCEu9rnGKjUj8WGNtYJTApUZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M7BnYryaDuR88kdtZ7gKPAejMnLB4ZnHbv7DkasU9BQco6PH3Cbbq367Vw1KvCoMTLASjdzXSYAPSPEFbNji1Bg",
  "key1": "61fy4TXBLWjxsQnWwXagWYDU8w8hafjUBykQxEPsFWA2XLTotW6UwGhmBmBoA2LDWVT987hicxg9VeuX8LdWMxLW",
  "key2": "4cf7z8gntynZjbymrAhDhAzmY4TJdvzSZjpLG9jBiS6wDf3RyWsxhuDgxJ51SgVqG2QnjS3NMaJQQs18ApvajYdj",
  "key3": "4ubsPHWLQx6CxTkWQzzecVxNrsNoaWZLoZCrk2B9ospSntKkqs5pDUf1agvRyES9pbsDFgTPbmg3SjAX1HExPLXF",
  "key4": "5C6erzkD36fX9BzMsWenMCBYNdkjPfsmS6RyumLDhfJD293VrYdLuGj263JenWev4dqLwBFV45mZXf56ntxEUYmS",
  "key5": "BReJsXzThafTLk4YJeABmMaREAF7diBhe9ToVbyTunUPjQexi2SwTnwf3US7Uxae5jxj3C4dejWzWPppjAXRt2g",
  "key6": "2MpbGjDwxJY1nYRu2WSwmerhkPjb7fyVpysiw5xWPXDfZdKC96QAyABGcaatgoFdazwopJ8N8DBEY4nSP6U3VvXr",
  "key7": "5NnAPVQf4zLNin4aq7XukthauoDftzCzDqujdiUL7ZYpdNkk1DPmCbYkVQsGGAPYY6rtckvxKHzdBSMk1Uewqkew",
  "key8": "SE9QY8JnQTxRLgGoNbc68p8dbdkxQU3gGzDxCfzQpGC4sgEJNda4LgUX7Ab1ioRuVZjPZ6F3sAysJAJj5JMEFop",
  "key9": "55qppse7cddkAhJzYZcuAccg1maHioGxoX22B9i1iVhK3TESDFRGgbFUZid1TuMswFAnvdqbrqgG9zyBGNvxFPmH",
  "key10": "5RT3EXTvJVQqHew94dYcvxLnvrWVfCFyW8WRxx51rnPVS4AGzXoNR4RdwHdmkntVHWzarDhk3WkWi3RAP7kYg9cz",
  "key11": "53AwdNewGvEXszmEY3uWhYt32KKszzdrU4oApNnUufrJ8kz4Gfi9ZBycxNBryNy1VbvpSCaAGq7p8DqfEYP1MH2H",
  "key12": "27NkEsZnjXpqZnfoWFZ3qVg47LCRd2mkzDNE9imJVhJsT1q4uYY3F2eXDzm3Bq6qpLPPfgf15Wz2NhCbp9u7aikQ",
  "key13": "4oFp5TVoabYmSe5gbBhPtBBYs3sn17AQvjNp2ARqsumh858GJgeF7uazu8AVJDHfrhWCQ578XXkunA4rff7BvhQ6",
  "key14": "5LsvxLcJ39DvGfpKXWQ4WFiZkowFfNacTmWq8tXpZXHcoEmrLAPdDfCSVjNQMAHkNSdwGdxYX6GSxbmxGDkqPxdf",
  "key15": "4hkDJQRAq66mTPVZPatHkZALazuZrjTk4nVn6kFeWAF2bhFzck1RTrjYkxx65b7F11RVPYGVVhW5QAGgcHZFmpxV",
  "key16": "2wnkG8EU8GdJgurE4HPDZovvzZBT2Rdmt1cN6VCjBGkktEqLGDrW2yMRxYudyYBX3iqXXE4obj1bWrLPTtMm3mcK",
  "key17": "JSBNpyptedZqqnbsDLXAwgCDMZ4XXCwiFnFmhcBU1fze8RWfeaLh64F13H88MRFBgotJjbtBpaUvNYkroahrtMa",
  "key18": "3QTb5SWriy4MmwYH2nZcBk3a4Vpi1Pp2Pqisk8RoXundpM6mbPdPKyJw8dXBZ2gVmufzywNGdDuDroMKDviJxPT",
  "key19": "uCYeCgPTiBqw7rZhWUKH35EDredGm5ACNpm4cExfAJnRFQ9nbnRxNL1d9yz1chg2w33SZnkDyhXLpEgxbmPzCUt",
  "key20": "5qc3BF3Nzb5cG9JZ2ZSrVNE1KBq5PRAbxQYycd1e5CYda3D9gtPSydfBXf3yJMJMz8n9CQkDWy37GDuXk8S1qXeT",
  "key21": "2y27VRZHVNYeb1XwE1BsAhkyAmYVfNgHn5BUumCfeSi8gN6Bk9ydVBF3zKgvcCwgn5mi4wHwZ4rJh4iPCGfxoe2c",
  "key22": "2Bp4m7ToNAr664SPUsMBSVGkRUFQX3sRyJTWBAxmFhALg1fGcsNREcHy7kTFkbnEfgaRpSnMZjg22uLnkufUPiFy",
  "key23": "25EiBiHnrBNiN1Puee3NX59q54dk7s7Z7XZ9BMkoyruuSDPGzRA8CLNfj4tBTDXcxijiK86F6NTevdqmfeeBKj7B",
  "key24": "4pngyK2WRN41C6zXMSuhbWC9VyVufU3D57AiF4g6T7jnFuJDsgGtkWyQHLUqen3F3C6Eb7iKDHqgAYqJUEUYXgAD"
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
