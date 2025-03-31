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
    "3qf2gQcHNw1wU7bHfU1ZGjjgnMArLjkw2jtkWKicydEHWjweZKcBFmYjLfFDdzYbq4US5jCEE8QCKyXcDHHmjCyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aV6SszpcxxMgx5EbG5QnR5fw35e9fffte1WUiFYGksLgxWUfWnkLeiHmbs8VvEBmKZVg1YeqEdJdZMyX27J7Wvw",
  "key1": "2mSR74VWxdFFccehvUfc7mtHqQEKS2JwVaEPddduGZkVC4qCyGV437XfmTzJBLB9MgkFDtQwZKupfyWbK3pPkHKv",
  "key2": "DrEjXre64trV8phmG3SWYnEaWXeGWBux9qMY8e5255AmZmqKnioyyZWC9W5ebyMvKVKj2sVYD1tPzdMvYA6ys49",
  "key3": "3jK8bn66fhhf1AYiEmmM3fVG2QCHTcDHD9eWADNZPzKWPR17LNqyLXDLZzY6dyHqaxEPRvv9Gm9bpqeEEfSkU2H8",
  "key4": "4Fbt1AFF7YpEFmZR8smhpw5KpReqJwbtnXMmrofTxMCcuYHTFcoGXSh1k7eybcC6ucv9kpBj7cGWQMTkvDcH2V2w",
  "key5": "2hH9FuGsQd2jKqVByRYNkd1SM5wAXdJceVbgs2wKm8GcVZGTeSrApJnkAygcGE3eZiKHohWWQoSy8KeTunHF5Lcz",
  "key6": "5xeB5sR62NBw7PGB1PukLb6FbaG6iS3ftEdNLZa1RmrNfvdXEEkhrW5wY9uLym9e4pS7F8oS7oosh1PXkYJWnNac",
  "key7": "1YUmoyrcd6g5HxGmWhbNq1PgkaU1bw3sijg1hQkbxu5YMYJCefJabL6Qs98jaRiJm6yFW2CnFdGH5uWJWvGZQrQ",
  "key8": "22KvQhjBPDomYA7XDGLsdDpA2QQib51LuHQuDwwUWeXhFUscX7wJvZveTUt3FmEcrhZ6M875bh2KiudYSRNDBxwD",
  "key9": "5niHk62pwWm15NQ4SVHZ5uPFC8iKDFM9UXb6DrBgNcXvFGNHDf1mCisJ34r5HCFMKoeMjKWGYuRhY6ELH6TiuK6F",
  "key10": "4MqZPYjN9vSF4aNLhd4g8vuYWEvQcUCqqHVbEW55U28e696GLGnGbBP5HYPdVgW6zM3fetk62eUbD3Q1qzru3jSe",
  "key11": "4tjR39fsRS7vidjXsay4pY8Q64Wvt4rTRcJpM6c8gwmdQ1PNdqVFpJNxb3U3bqh4oeWWK8gwREybkJ4arbBfkkZP",
  "key12": "3acNBtbj8jXaDLcsqC9GUVxkQ6qt3555fs95w3e5hDfz5nV5T5LwJxggf7fo9kNTY9M2Sz1LafD16y1zG68s6bcE",
  "key13": "3DsQQRtZAh839uETd5omSKy1dMGHAa6RXfCweu13FqreQDCj16aT1eVM6A1gCUKpCdjyQXN4LALQo678iKcft5KQ",
  "key14": "3todirYTF2sftLtWNN466czdGgrJcbEvU1b9rqpisF7hSjcXKpF2ipcXRbhRGq2LPJKKNYPjTTjaNPTSGeHKkqJ7",
  "key15": "5AaTdTKXcCh8ZLWWV3xYUpjNiNe9gzm3Be5ydUTvtaqs9BJDALQMFTsxU62PUDF5Db5TGr8D1oDp9v586ZatN4i4",
  "key16": "4VKPd2DaQNZpF4Uh2cXAfRCDdizy52fq6r68bHC5wyrVc7UZCjFipE4DoBguJS7zeR5hC94n5y4ASKWLDRaUhi52",
  "key17": "3KXU5EU8cx87udSj7ieRyeKUCJV7wG9gAvx97E78S8amJW2frkR2wn33B2mz5ZFKcWuotX5zqj6gHf8LbsweMkL8",
  "key18": "yotetyc18sp7JhAuqLXRRZRTetV1wF7veQAFxhxwVmSHtpp2wjsZXkiiYJ48pXdCozfMHb9G95UgQM6ZzGt83GX",
  "key19": "P25YhY6j6CtSFUVoQN2j6uBiB3g6pYCLjiXpaRzMHEZerGu78pnXRs4gHBuFN5BVyc192bVygdqbtCY78QyTFXX",
  "key20": "4m7pTVF3UZHvUcVRQf9aZPmRpupE86KBhvuVmpLQahptugREZbWUwKzzYn4fYXYuGeG19TGRQyuy8DwsjZM5hWJv",
  "key21": "oB5uqHqHEctQDSUs6eHxiS8Mwcie9W7cndYKAdL3Zd3bF1pYWWgKP64ujESWUa1q1uAThZkWxeYRYZ8FsmXwr7L",
  "key22": "4DDEUyWB189KwcmpMQrUz5xLHnupzzkJWsaiZEjgfXiRrD5MnAYk67RB8QsGGDNx47DtFwNVhg7sUKTah9Vfyv1G",
  "key23": "3ScRJSF3gq7timTfELQaZLmMueS5N4urTdFjNSUsxWYKcjy1VEdDK4zkjeG4akvsSez5rbccfVK2eeyYKUNcg7Sp",
  "key24": "3pjLAJZCWY9fK5fSdAAByFcewFNn8U5Z1stTpfqbZugSY19A5w7yNjRsu1EPdAtC7YJDs6PdFh9qAgXozxQvffm",
  "key25": "2ixdUr5tmaZWsAif7H4qLDGdHL4dQXdGFrWDdAXSKnuLWWZx89TUg83x5VUczTk1zBF65HXN3eZwo6mMJDvaugtY",
  "key26": "3tLf9LfL1A4dPSXiWn8Y4F1E8UjKymhxzZjgHPUqbAieP1rEvn7gBD5VEKsmAQLKKA9EPw6pNFVFtdn6KYqvGJqb",
  "key27": "5VpwC5vxsDMT1Bsg2UFDT8fkRpzrAixuSSdLTpg9zrHajGU4RGEHunbM5C9iFC21LkDELotdvadGWveG9gLfVHYR",
  "key28": "4baAK8U8vSmsBqzoQ7uUmkt3u6yFDBRdjnw2oeoXjtE6yBxguxqSUZkb3DXy5UzUxEda8pbroXUm8Ve3BPXurjXh",
  "key29": "4FAFXByWuYH4AzDgJPyHC5wL5wzVfwgoEfhKPUfSN2KV5uJb2GjyvBrTRus8jgjs6kBE3FgknjjHYHAxW1Mj12zX",
  "key30": "5ZQenKM37DNosvqR7hGGgoANXfdSDbHcWZWW5uas4M3apaeUyiywyaf9CyjH82JtDAFpxbRKfSMyBCjLi63EB8oA",
  "key31": "323xtdaihxar8iZGyBJsBA3WKJD3ksqJmxpWHY3hoTf3uQ74K8CAHBxtQwgpBzofp8w5roQ5n5ZHxodAo4QeodPu",
  "key32": "d86kM4UaFttbiEfRuwEW8h5kJ2k7K1xujNasFmoXDyaZrm3TdWtABEQRYasQ4WVG1msNnwTasmo5yqdiHqLeyKE",
  "key33": "mJJL3Z1SG8BLMikjYmgdCQjUkZXhFBn7fF79qCztaMirhxQoVkxstfuTngv9n1QgQBkS5iKi8xHjmv37xVKiebW",
  "key34": "4aQvK7x1RW5vQrcqKP22UjycHAb5bJAQ1ri17DJf74oW6wGToRTSRp1cZJnUBUpMmKaMD77vhJHv4xpB9jGrFzQd",
  "key35": "5J2MGWnxN33XcPT9gTDdXYCjNwX8iM9xyGz9DW26wLxV5AMzyoRAVK3qw63ywDS9tudWupS6Bughet6hNu9NqSQW",
  "key36": "zDNDpYCbFuFG8zWPCncPskjFsfZZ6V5muGMmSmSa9nov4EAnGNCMir7uTEniPLa9vcwLSSwFsmwND18ozbHd5Cz",
  "key37": "4XDcaBvCZhLJ8xJfihhJ7vv1TatytRW1qNtCbFqErfS65bbHiNyfaYBeqVBnQyN42Hn7d5iQJP3AT2BfERotJcQA",
  "key38": "3Hhh4AP2Wn2PLK4dfRcspVdV55FAiKzcxxaHZm3t2FYuhHP5SGQqdDkgRbp13qR6edxG29fDGMA4bqdifAaY79uM"
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
