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
    "4Dmv4fwEPQKXbJSXraAgDCe69RyubdGtwHGj5UeZgBNsEDyN6mtKAtfKLdocpKciaCWMY7iVJCiSpBssNJAhphJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLNo1nw91HjJCB3dz3nT9iFauMrwA5JRzXF7MVRwX5dJZAGByqJ16Ez5c2n6ra5Y4Wqc7LHTkozSJW44WQbzftx",
  "key1": "4yyjYKPP7ik3iFi7KnKRDsrsnAVZLtbPXFjZukD7D88R4MVaQUwX2toL1VndmGApKP9951YKQyn5C2XLZNFfucq6",
  "key2": "39yQwPLNAUAhgpG9HCk6LsoXxUTPMEDBksnajcJc6nFQ82yrZJWoMb3dLaeAAt5utUAjdk1ULQ93D264QKjQhdnu",
  "key3": "3Z6CJ5ZgWiQePjAHQjvpsSLLW3TggKaqmPsnDLt7UEqkz4KEYiBRaq2c7LPZ9wm6uRoqYqTDC3wok6jrEtzMxBXu",
  "key4": "2vD48RkJs2JBFA2bpsEdTVAQorGMdvf97nvR7NE3qd11R4ynjBCUN29CSssGKN6j5rkcmea2xFXYUwBa8W6sgsZi",
  "key5": "56wGn5ehJgdHBZkAKzyA2jaoKk6pD3q5LdB8Gb9V5SActPvd5zcNbXerGPU4aGpEj3gqJWjLjE1fzPR8fXmdzVLy",
  "key6": "2yseqLXBq1fYk5JTD1zvtcZsGWoKS8QqxYw2KSWQ6Ewf3dSgvCP6ZrfyLH8uQ3XoVYpiusxaC4cJgLbNnASgtg2S",
  "key7": "3qgDUFht4copNyeNJapqwomeF5mYA3EmTZUCe7P5eksAVb2i1eW7JPTWhV5M6owYoZdtbHi1jf48jvgJTHXWmCRy",
  "key8": "5DWr6ras8ARQFGsPp5HWVhPgg8LzZ5XezcGdM8WgUkWZ7mD8htXya6j2cLoNXeyyAoPEVziUT8TqGCUYoFRXjneP",
  "key9": "3G38ERszAWJHFrdWqvS39FstbSWjAxxuJwjNVyUxLBH3mEnq5drKWyc8tE2thP5ctjRrM1DhdRgfhj6QcgPx9YWS",
  "key10": "ezeNBJDa5WqdV9MURhxdpyQ6wfBxDS6xgULxd6jnzdZZiUAbN6yswvjhazng137gdsPjdw2C7C86eKSGHZCCQ6B",
  "key11": "i7d7KYAjBrL6r6ugmUwTMhwSqmNcH4RqeqPeQXsigg5c95XEoFS5hfKcTdqCyuttxAerMJmuL7njzjEKra1UmbZ",
  "key12": "5yDcTzP5wzcK8LgPa6VYjruU5EifWaK9aFQjyaDKPgnujoere35ry8EUjM4YWrpwHpgNzDndMExEjUzbvob32wdF",
  "key13": "2iZ6CwLhACVNBTu4LMs73DjaT6foRZXeaoezTBqNaD1tvuc9tgNGbqre8e8atqPqttrMNG4NAro56kzAuYWQDjYw",
  "key14": "57HkoraUTz5dqZKr6SEZLeUbDqXPeX7qD1zMt5mqm1r4hZbSwF168sp1gTxScR1YCPeTgcNj1eD8HiXswnbhZxNA",
  "key15": "2YKiuyZhbsKVNKWEPrWNf9WHiyHhFYzCaJCJCA5wBwYkvFLbpo8EeNEhEzdg78mDb4y5tgJP7zxL2W39vBCV3ipk",
  "key16": "5HWimFWM6pX37mBPGKv5pCLR3GpiGjtmS53rJZgYdBQa4gXDedNJ5Z5SLdbiaKDbkm7xwSGYaKxFZmBTYYYSyhL6",
  "key17": "2u46tdGtYWZ5xkLjh4czn4XTctxtaAzteWnjRrkgJkqpuFL83YCuoZgcnDQu6TkA3GVv4MZM7vLRpfL4Pc7MqvXC",
  "key18": "4dqD35N44v4P1rZuwoXHQvdKQrD41f2xQPedgZCRQzaSubYFYLUVW1Y69KvnUBhWzM8cJ9Zn8TDG7rEMNSLwDdHB",
  "key19": "3FuDFghnXdECqg9tfUKSz7R629R5RgDyaxz8rGvKUEdkHhJFkkQCY88CFkYNQCT5dJphWRSayND9A9h6HWdEUhzf",
  "key20": "3tnQAXt7GcmU2cE8HghbNGeJnA69BhVFaMxXay42L8gxqVjc3UWo7cCg3dXW7kC1eWCfZ5Xto2pwHsUPbHcrXW7p",
  "key21": "4cxs3CfqPYfY3TarjJf7gLNA5uZD3V4H5TmvgRvFfyCrhU3nCTLZsGU1Px4y4DCqL4nUkb4WcSvXPaM5YoMqoiZ9",
  "key22": "5FULsVFkaS4NyLskvZjbBE1Ux62WjpEtHdJyvzV1NXGSbD2oVM7GVea8j78unAfvUZZmPzwDgeiKzok6ceHForHA",
  "key23": "2h2ZnZVqEKBKbHUEcJjDbtn6Gq3WwEomDZcN1qzMTsBzjJarL2QdhjJcheqv3HKRU7oQshiJ4se4BZJD9fsLR3XT",
  "key24": "WxM8pSUJmbeVmd5Fc3wKEEy7GGZJKYyPVYFTdT4A125VsazTEoHBBKFwffjZnHocPUQrabjxcq8V7HYKde3fxNL",
  "key25": "64N4zkZpMRhwYHUbNS9JNeUWN1o5V6ctkRvZ5NxuaimDiKEUNEm5S2r2pesDYK2iygmv9jg79CqYhuEL8bCGiiZf",
  "key26": "62nZ9m9mFswZa19CAMzB7Ao5e4ngQrJxYdn5izJZpmimswD8YwXf97pYhyPWbay4ZbhkW5nipQTBgbYbDqndFsR6",
  "key27": "4csXhJ19RePjkHTfBLPkDWc2gtxiAJMqF7hCwSqa2D2EVdkLhdwYGYtqgrfNyuAwUpJc5S9ks9QDUt8X4HJVwkQs",
  "key28": "2sNE6qNzkqjTZkf33qWpGavGN3cMkWmXJdxR7gugVhtVpZ1u7RTzorVF4JbUYYUqnmwmHX9fAEnjSZHtAHBLA5Xz",
  "key29": "2WHTGQJVWqwqENYGSHcvNfzsVGYiKgrfTLFFMimx9kfyMdwsKqLw1KaMwYKqZdSEYpenw3Ymi1e3ihtgmRuwJ31X",
  "key30": "6XGK4AqDbARVEmzfV3CNNiJAQfJVbj4N8qMEciwBU3eWxtJSRTrh5BuPzBppjDnxg6HSd8mZbufgyiLphtmQWV7",
  "key31": "2MrFjV3VHqT4wb4VZ6vqSokjWx82riJbtukPorVjqBzxvGafwQRW3sfBQqZcL5hXvJKNKWHv4E4vwdvDi3bLjUEG",
  "key32": "3XzCQskDJJWqDZDmmumnUg2ctNmuHSPe4GU7pwPhyoHfpud49JjiBRmhJa3zLTXFZbXPdjpUUo62zddczv93pypZ",
  "key33": "4BZMZ9JUZfAzEL5aZS8ZtEtpinoUUJz5hBRPBikoQuc6dqjE6GumEjXteY8goa49EGek3shaspzCppNbM8XVNFUs",
  "key34": "2Na9rhqjGyHLsiQfm6MqLuednuHy6maq6PeoB4ho4MTmyC7e3f31Yx5RUCTozoP1m4sQd1UwJ3LJes24zqh5EtGb",
  "key35": "74HGuwu93EuvAHtDuvLCLZvne3FVjyC8ZnsV2dHTzd2smRg196VfNRuz7Xf92Vt4KqwFGBKwxRmBnPJitiszWfo",
  "key36": "LUUsdGre2MUQdh9euK4QiV2e6P6vfuamszYFPsCsscAD1nDKzoDsWyhohZQiEZRehRQQfH7CYKfmVyXMGvkKsqf",
  "key37": "2WNoApJVa2vA4MfXvFr7kGrpWdxWYpsyYqhaHvPteESame2pmYeYEuW42gr52YoLrLcBKMASfannLa29ao9is75H",
  "key38": "28BLNJQ29D5JsvPmbKMrJhML1p1mWTMouyGbFnV3VyFMmfHeUrLL9i37cAccXTPzw9V7qE9j1LMKoUVxCoeQ5okF"
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
