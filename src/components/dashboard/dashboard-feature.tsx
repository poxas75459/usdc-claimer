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
    "4as4JJa2FXczKpLRu5a7wqBqLNDQN4TEy8YExXhZeG3HBfxZcWXbGSzjj2axXqq5WqBDaGc5M5tmYHF3xnxrrAib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wRmTkuo7D6KHfSMYYt6imFCbKJGho4XUDvL2Zr6FWdf4Wt3RZr4SM8cpmkZiCtj6Wuh3aQ8GZs7txKK5yuG8rU",
  "key1": "5Ahehka9zWog1TTotP59PJXWCjhUeAKpnt73Ha3FkJTfjpZ2cyr8Z8xmowVjBh4D7S56JzE5czgy8tex8eULXwuL",
  "key2": "4MUBs59m6w8yhYgVmPgSLVra8k1L7e67mZfLDv9bQAbG8YeRGNAAf7QHZRhttHqMcb4D233SkJgk74ajRtyGbbAi",
  "key3": "2D2K5psTgi3y5K3NWZkfVBdGgw5EWSzNkxUUnPzqwB6ZfYAnPTNzLqGiAcY3DugW4qy61r44AAVcQwj3QLMqP8mm",
  "key4": "5CJsdnFhsSfXxWyYcTqzibf5tRTbT33a5ZD63CeYAf7Ya684ofYtPQwZbrX3WPZsCY9Fn3ZKXs9TzL3QZtcCkiqg",
  "key5": "pf87V4j4ibsUqnWBe5UeXp6bzCRfvmNThXTDJNrqsTAuDb6FSbLM67hBiBiciw6TFD5TBs9mobr9sHdT5kruwsz",
  "key6": "22Gi7VudD4jDMSH3ezetDk68n7UHMiuH4EZsoo5SmKmfNnJEt8MPuZtNrVeJbsSYKCmL3D1GotymNsqP9Qic3ZCv",
  "key7": "TVTaSoySJaRfqPK2RPxCnuqcZeZrQSjcnVXQHMcQ9HTmx5F3MnwoEQjbz2Cgw7DHfmDgs4v7B63G7Vg8xCt1yfR",
  "key8": "36BVS7JgLguRnBvd21xBKv9iEo5P2RVsLwvJdugk4uhfuBpB7HMTd25yy7pawGyMATSnt4tCkNC2DV7cEwj3DNTK",
  "key9": "3dhKgxGjx4BpNHrnh2b9uJ9HRswwDyhyRNxmmKPGLNVqguewn4FK2KxXV5C6uLhwn6b37WJ1m57yC3v9CyebaW4x",
  "key10": "3SboMy4m7Usr4mLnYo77XB5cxWf6Lt5pCT7kwxNR3gqJuzNy48x66ZbSwcKC7wbTUvHDuaTZpvUyzF7R91VKK8gk",
  "key11": "35dodbBj3ygvf11XPwgdcbrFHUNZhZniPVV5a4q2yhESovzXNy3vMo4p1QootU4VyUQ4bU3apBkQHo4YRVWyRLNV",
  "key12": "ArNpn9ffS8TS1nCEunMzN4QXC5Xd2GuNK6QhNhS7GCPpNXQqVpCwgxZcVG2SFzody8dtvPTuUQbczkafZQT8CRL",
  "key13": "p3Y142YjLRoia5rVvYrw9dN8eFmuYhW4FmnDL7LtyqFTafD4kmAwqN7WvtbxpQdXvTGnRe8hVvN9krGFeyfkZ4Q",
  "key14": "5i9GmxVFPoev3KyF2tSpCm6nQs38M3RX7BCP7xTHxMKCLtgCzUVVf16nMwBmXWWbtaEpuojqMiqGUKU1RnWj12TA",
  "key15": "4qhSJGLyKvvt9ZtrhkcTqdZHWkinEVY2wY1yFEQduXcbcaeiTTkeTSDvQhJsN9aybTf1vWsn9aXgwQ9VPaojvNFW",
  "key16": "oXewUZomPnptN2g11zyHvAprwdT9kWJY6HSLxoYvxxbmhHbjo2GoW6RTpuyKtw9GgsZXK7TNLGn9MQDLXetUsyV",
  "key17": "45fsxwuqEco6ciZerHJPcyQePfbwdfza2JsSiUYHj7jz7TJgc5kLSY4Kw97ZSd8PSe2mbUh6RPK8DJEwiT6dDFAB",
  "key18": "4nkAVexyQ8Pv38MUnGrtzWBgJ8NQ4vq4jECH7UXwxU159jmfbRAcNTvbFk9eivAgK2vTNZCDe7YChKCdF4fsjz2o",
  "key19": "5KWcGaN6YNLEbAvKeay9XnJBgSB9XTTL3HZJMnb6nDruh2SsK8UWFWwHUkfSefcweUD3bwSTo74istzv8omgZrHB",
  "key20": "ygtJcFGXhfq8DPYxbRnBhQFJ3DMfChyggxYJRT7SbyWHHnXRg9XDL1izyDd2J7A5xm6WsxsKXEfaCUVMjwBk2Hp",
  "key21": "4bAS7fdLuSGLSNwHNhasWiaJzH9pSHH4AAFv4TRNCqA87r8wsrHRzGzChkwd3KZAHgFhSM14TiZTAr2wtQ93moVd",
  "key22": "2SiN1PG9Kgp6L5dB3thnoyZhpB8mpycTMoQ3PiRnaAhHfwiciedtR8YofQGcrr1UtyZctNS5Q9Lpuq93a6294s1C",
  "key23": "2q55HJeb1HnjFTsQafu8DxnqoqoZVEZKaSDxT6uGSXJtQLMatr7PNQ4pDhiPRyzcKLGtviNzzw46mMpvCffiet2G",
  "key24": "5QomSvGwwumBbcx6f8jPegCTemdYrMwUQm3YynrNeNCohCR23z7BsPqDGeP8veayWf3Y4Uc3fG6S7hHyLanWcvUR",
  "key25": "kNB6G7Bdw5VpN4dNgM39cXsxfre3DKB7AynYbPnyQah9UawTakKkhEML14HzJ4NGEanHLmGN4wbvUeXxzogP57p",
  "key26": "5aQ8rLm8fexv7k4HJg6DEzxP72nWLpoLQkERJBVkmzUqeXJx3G7jGaFWVg6hxXEAZRPmXvuv7D2Wvnvx1nHyYuh5",
  "key27": "SpikNgktNbnnUFn32SLiBbw69ycDhscvqfu948sHVnoekmgZrHhuBrq8wKboXom8RFjW1Y4zaMcHGnTNSjvFs6r",
  "key28": "3xQHrPui9mR7PRDop8a6M4mZmzj23PMXNXxUoZzzLF5WMQ92xXH1nrT47JFnquuQEj2hb2wjpE9cqC73hkyTsquU",
  "key29": "3SoxWJG4RUUziMthKGg9maXH3pKEaeAVQaoWEt1FywyTG96Y4Vheme7tNUzmdP15E9d7gHbFp3R9rsjPRGoikiSk",
  "key30": "3viQWnMJvT67kX3AbmgLHwr9xL9NyFDr792Rs9cZwi6zzt3VR912UDXBtTapPRV2iFf8ssHhZv9BDtgRLEK5MsFo",
  "key31": "3TmTHbG9m2ryZ4vWbGvdjNvnzBzWHLm9NAAk3RUVmQNigxdNCJSq8uyub4Rw7Zr7L1MCt2e4DP9BNi7mpYM7gWCH",
  "key32": "2hmKAjy4qGU6UdS267QGkUAxDbhreZLhn8ZwnPf6LwdUi9BwLnMNbBpbn8Bzpo9Vg4QfDMu5vRu9KFq6Vju3TGrR",
  "key33": "5JF9N3evp2Njtoz1VC36Wj65rNmSjCCHxkjqiqkpkC3msDJHN1ZKncWMsKvCpHyeCb6ZHG3ZVSHdECP4ngu9b7Cd",
  "key34": "46KWo6ovKGiLf2A6Ajw89XYmeXGkjV1KYuwGzAQgma6U287XNtkgS15E6HXFPW9DpVmLEQVN2QwLExvV2Azby3ot",
  "key35": "2uv3ErWXxSjg5j2bKatF55QpV1uY7a4nEWVpEwA9pEbu3SM1ssw5iKEj5wsYK9n2kmjUmveH7Mm9pUsYFKy7LuD2",
  "key36": "22c5Uxmh6FKrVfLocE5wTT5TVXSuMrtxWpSBCGBiFJXKe1454GjjTd44MW5Rmx5s5dov4trBr7JAmxX9YoH2GPBQ",
  "key37": "5Hrz4JoBN4g37kZitWtXrTatMpazAAeoY12xx276NHVmFEfJtMwbWgLbHhSXK3Qmh4moxrK9kgFvhgJJfXzKF96R",
  "key38": "5uTwnJVkeHeZ12DfrQHiV2s8UHWcakNzD6btRNfkZQhRzHBYeDztwREkuvzuHpJ4NtTc2e8svCukuxaWghXdG5b9",
  "key39": "58TQDw72zFoKKPjWnUUNNkMdSTeCJbLT3eaJ7QgCuiwJZZkecAN4GVYa4xkg1HD1F7rbkEyX1TeykK4yWHnHmo4r",
  "key40": "5kkdd5KyVubBvceZN2ZDn2uyCqyDQjzComT9GQTPhBtQsDS9J7UPydjdRHoZZZXVrZYui3Noco9pDRE1oTZJsnib",
  "key41": "zNrGxxorrbuLqmYqyaQUmHdKYfEvYkRahNmNUQZxb4LgzZJqHv5T4RHJQT4WHiYeF8j7FeAidcnS6WmLVpSnqMN",
  "key42": "2zAFhXb38ecgyWVyX4jnSWuMXiMEYoWyLN3f97kJsbbcj8oRt2TLYAVSFbWGpwfTqEQw49r4be1i2ps98DuQbbeN"
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
