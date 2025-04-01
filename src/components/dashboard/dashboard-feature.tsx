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
    "3VB1NrzozdsrmxLQ8Dreu7cx8SyfeEVJpfgePncdpwuVvk6JnTMijoLUoiwYUcN1khK4nUAhi6B3xRQo8JjoZi68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCsfL9iimGQKSVJUiYsyFDKeSPA3N2d7xWYMf1kWthha3hyQAd6FCEU279Sg2EyrC1cpWgwVXVbxz5jvXBjqckP",
  "key1": "5Fk1b2rVsqjwRtiXf4XXExd6XJBuKo8r8KXRp217q1HdcuLMPz25yVFcGZ5ApwY1h8QGNhHdBAogHkGaSrJ1BgKD",
  "key2": "23cWi7tsymUfxSPbwkZDVm3L4QwbX7aqV1ykUh3XuyFsMWcae2YvjLdyt1kYTRqg4UN5B7JaCYQdEu8Ln2F2L1wJ",
  "key3": "23JUFZhqAo4kkkzqNTTTwRv91MU5UQrr9M6e1hWAsjKMLPEqhveTM6UFwdMqMsgqVbXiercmpf1e99t4Xrg8Yy9F",
  "key4": "34ejZEzdySSGFbdXxPQsxnPmbP5nP9N2JuB5ZDB6wXtPeoRepQ6vcLyjJv4bsJicGB7ByTcTY1MpJExJ53ZQAw3R",
  "key5": "iLuVpqzCz459hHr4wRGewj1kGhoccZzoN1Z4MeNbHCNKSWVN4WuXRNwjy5pbSXLQxpjaCNhgdsVynMV6phhS2Yu",
  "key6": "5qhZbCiMhCdJg4XojLarDaDSn61hifmHKaSNyvGHNeTXraJHUeFG4fuJj6SVBxnGpRD72vJsFqjsvvAf5UYBiZtm",
  "key7": "3mSFRPr1LBBuXSdU6TMR4QDpiCjeZ98ciheGvsPn7VicnkCtPz48qWYdyUmKF2XdUGvXTZDJPLxpmPspEpV3qE28",
  "key8": "2ErykVWNYBRmgWui1Y9dqnY8bXWPDXwj3rTtn3VRZjxHu5satYYrYyppwAJU9DpmisM46ferLrGAxjgQn44muj8T",
  "key9": "2F3s2wr6WNCyzLhkGCdoiUSoSJ9iora8tvC2BNbN85RrsTYMj2uLp2hJ3si6vT7xDDv9KE7KxgEk4HTxz5zuiX3j",
  "key10": "2ks5MR16dS1rbwkgrSvvXT4ZdYVJy7UJu9Nzxc1uS8WjP94fTfRZZreiBMkbqtovTx1wNccBq5bsKCZN6D8PLepu",
  "key11": "2iMRDtM1FqekY13A5kFYtHFCtPNR126xyYe3qN5R3gVPiEourmzqjcVtAdUt5TF1Px9ijqDptG5Npi466GZoUt75",
  "key12": "YravZsxdJWVXexNh4dKbMprsPC4LL476CKpHzKPGCgkd51jpHJzTsjoJyL6Rk2ZsB4vPt3wosQkQYUgihx6tZ8i",
  "key13": "3JgJ2usfgacvtZ6bGcQERSUDRpgtYKppnGX2yWtH8WAWcqSXNu49RTEniBXzEsr6ma9pASMtwXWbg2UKVYqnFGKe",
  "key14": "5GDSoJPDRrxYkQfF8uu4VNdS3prTNZVj5UFvHekRB4aqxe1DKvtJJs3kEnJLsdT29BtJU3PXESzzB8S7eKGZsjHD",
  "key15": "2o5xg35n1tQS1w2WCLtE78g91LqCKsfLgr6Xj4pj5Qgh4HiK8C2cqQsfYtrKxfZ7ztZnJkwaUAY9EdLrNaGCtUjm",
  "key16": "2APFL5fV2xx7ondEZY5bfdhQ82CifdvuWLeJRpaEvJMFQg6VRznnebZEY99CmxFrPmjsdenxGE3BvHmRgupLa44r",
  "key17": "3MhJyu8pYAVkoAroTNvhcHz6G7f9xzZ9TrT6XRv26yCbcS8sG86vvFMzPJz9oCbnbed1SKeXbiwHTzghJE3Lwe6E",
  "key18": "3xBrKNGMEEdhwgqjshigcAAiBxLXjiyASpnkGWnMjMkYKX6nq8dv6Lv7DkjqiTAkv7grvxPW22gvfFJxU5tKooDX",
  "key19": "2Stqqd6SYzSoTX9yV5yLN96mfLwhgejpZ2mzXa2xgBvjDkxnNY4ryaUPZmBb7awdVff8LcwUnY6ejfwzxyaPfz4G",
  "key20": "5eofVWRUH6US7v1Wj5XodfTCBxzkbSUY9fHGesyXQGShaWBBZCDwUFYR8AKnYvuChyk4LzgeAkFLcCq4LBYMHWTs",
  "key21": "pe2Rqw4ACkzJojr8h7bbvaMBMvtyNLgbkyL2aZwL4y4oYFk6QM498m6KfhQ3gQe7GbBbvYBF12yna6AGm8pgPfj",
  "key22": "4HvTPpYZ4ir9uBfdUfogeq2aHv6jhYqEXg7uGzacnrNj1UyKup9QSoxHm8Eo9hstiziGuhEkLUCuy53vpAYzTy7Y",
  "key23": "5NVSz2QhKcRrLDnUFaxa8R6cBDPXZWaLVBFMihewEKW76ewXfHwuVFD6xuWjm8Zrhj8eGzeJz5JUqLhNsy5cZka4",
  "key24": "PqKmEEaew9ydGxqdcvkzpkhNbt2inbcF6Jg6HSMTjEZahjmnT2ZjefLW7A8wTemrQRndxwM2shfSdoEwST1q7ny",
  "key25": "5umtmkKRgh9XrHp9Acsq3s3RjW4rfDkXMNi5H5KtoVhUDVcqDbRhUWwzvrkA71z8sFjFTQxVesmABDMaU9G74H5W",
  "key26": "5CeFcY1Au4HsDvSkNEAi2fBESJXCBERM6h7SjUSK3ZjZ6c82YSnC4xU3E5KjVeZqLsS3Uu9nc26dUfkyhgzGTH3J",
  "key27": "41tom1VELrYKKBw5qwPjGgHTxdZnWz17GS1DN1xiKm9UG1vv5GUivWH22UGxUQFZ9rvQykD44NEYudFsQwdxtUWA",
  "key28": "4NDtmPdZPJAAZUAxW6VNGMxEXZEw4yHEyMpZmU4FJkJ9xXhNdVGXtrrNHoen9xtqsojNShJRzaN4a9A3nw99mfLm",
  "key29": "22Rdg4EhC5UTZuv17eVXheTkJ8EmqAWdFaHNLfecEv23dQNwE1Dmgcp9JZmbKQ6idwFooQFVALmhvvDykB1kZyan",
  "key30": "37JeveFveg874vvjNHSA7sZCXrix1ChN4JEjg3dP3bU2YBzgjEQKeAVSB5t4Hd8jnV51nzUuRFFabVxKGEJiNDvx",
  "key31": "5GFT7pKyaCAXFKv2KneMHWnjbPKiwafpxethoEZughWd1Ms8BkkH7nPKtfbMeMhbrAJZA4xWkwM8195hpQGXvZvz",
  "key32": "3WXWpopvqTvt4zS8rtKHs4hxuPUoAJUXRTdQr6Va5e3tKAPrZqhu7rYivRYy5AejTkt4wE8ndjWtZrAnbqW6hZT",
  "key33": "3Hsjtt9RNnUDeBNhRZDN93oKpt4iTMkz7WTf6TTe8UPUMKj73KDMvq4uKN5HzVTY6XFQtLS98nrNPn9FadiGrSLL",
  "key34": "3RWjeZwCmurQgGaBkobUEKVUff9YqUm7piMYH4J9zWeHogK2LabpVvxFC6tSAZpcHn1yNs8A5QkB7fKhaRow2kx8",
  "key35": "5kyvuVRWG4ysYzV36ovn4pfLtEcEfASenL5Dx5vZ4vFUsk4ULEvmW3DaSbsnvqykGyeTEu5AitHzMX3CmqBVJ9yg",
  "key36": "CBKJXPXruGv67i5DLV7f12d4UXvu6pxHvVrSePGgoPSkwRurrf5TzXCa3WZ524czDJBkK9vJvcpvvfypednpewm",
  "key37": "4S2iXffSvALYXyMxpTnQ7Vn3x2TGEmM6G5yoNHL2ReBx58cLUU6d36Uqd45D4EGrBCQwfVHgdxT7XMbf2uRuLV1W",
  "key38": "NJ5fK6VgYJUsG5ittJRTUrLu4V5B9qn6qygg1Y6QGLknG7d7P6JTNVJDAvGS6Mq6RZ27g3F9kQfrC6KFZJU986N",
  "key39": "8pCCVecfYr3NG3abeqf8zTvCSuq9Y3NsviSLzaN8fZ1KE6jyJivgcNw4aYkChXKT8njR55tNBUurj8b5CZdKStS",
  "key40": "3zn9UZcuq73vDsNk25E2EujQwKoQ2JgXe2tqSNvAaPjkfUaf5im4AwUEHfPsSxjpEhnwhBCDeS4HmwogVYPAKE4i",
  "key41": "3wFZ2HeNegjDkt7wavTg7Fi9N1HmJyzkTLvJ2dXUTi8JCfxCPgm6PRCauirh9oU1Pq1SJc5DZCJznrPBZKr1ryGC",
  "key42": "2WNYBg8JwVzqs1q6zp8o5RP83oPpCeYwYvKpff4CaqJKHtotoPd5cAMdzCZBGxnN9ENyfBuJU6rUxCc6hA5kg6vp",
  "key43": "dWmc117RSqH2HT1nLu7K1k3KAURNxhwdHhBt1BvtvdXLAkWNkV8mxnoTE7ypeQL6BAthgxM5gLr3BFKSqWk2sYX",
  "key44": "jVxt49ui9HfEeb9VHKaJgk4kNpMK736ezLM4FhBXVVUr31UtwjcfLiH63Vbg4jeWUQhgqGRRu1qbt1n9chfdmvF",
  "key45": "2RGSY5WKr4AeAjPbK6niDMTgcu4UNJ1QsgpLu4AJQnRSo6NKhAbLe7FQMP4f2mLSHahuDvaUU68Lunv2Qda7mmR6",
  "key46": "61w8gKrS7zCp1kKMATqPgz4npDxenkbG4vbEPkp59A8HfEkswnYh26hCByv5axMfBwsA76kAaNZyPPe4m3oSSKEa"
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
