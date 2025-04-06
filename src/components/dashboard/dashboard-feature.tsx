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
    "2T6U7aCQBaW5fDZcCSFPXQtJTzDwa3jYjykse5ua5sWWpUVb1w5iUju7qBmMFR1cvRMnW3KShHkAafk5Z9d1nM7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6uCDgfoNFEEF4LLR88vzhvgLoV3UAoxe2gpijnznd8MBWcaCtLeKVeqwQnmDy2MSVNbuaskGqSTVEgxGeXwJNi",
  "key1": "4zqR4DCnhwxXCo13vQZxcuv9hA1k1W82SVQozRUfq8NUMToLwLxFFA1dEnhWKEBBZzQ8CA7jmx1SP9rQWoT48CGh",
  "key2": "4pTb4ysv4SyVTM1xtu6F3iGukT9AYTYbebpLmNBspHB8pPbNaTHu5UJeDiF1ZZ5xTw9GNGnvrwou2gPRK7M4zYJA",
  "key3": "4vZstdzhEyzK28Dg8f3ebWXoTudB1Mmu2wDVLwEeVwxz94LUgkYTcRfzwdjeC7uHvc6fHPZx1jzesH8RoSBU9hrn",
  "key4": "3GBEY92eyJvrJk1E8SZwWK4tZfeqffgqg8SQhu1whD5FYgNDcXWGtWMycqi39vpYzPcP4zzidLESXM58cUZsoH58",
  "key5": "N7vn3Xe6e7KhhsQHXnvx8nygipqcMEipXzYTwX9CLT4xLoAs8oKcu6VXH8g2Q8K8jQ58m4qAd7giKKqEwdUDz9n",
  "key6": "5nBNm5EoUwmQwjgymCEirPRwrBkApmCj48Da5JYphrRFvTk1fVUqXaY1UkbsdkQEbK3NRWaqbFbg2DimMMHmjM55",
  "key7": "4mjNeaeDrhBLSckCjVSLD4CYiqncQkyZead89HdppRC3ZZbhPtMttMTjEh6qnt1ATYNUCgYiU36WU3UKzWGhasop",
  "key8": "uXGgvoqCM8PKZsJ59kA4QY4mH1bdKV6DUyVxhLXMrn35NafiUEFevsiWRQ9Tk3NXDmB7yHuGCNHLFnMMUc4iMbg",
  "key9": "4nL3y1aYgeaLJTTc1NXuKai9RUJkHmRkw2Um1DWKkxS23BJWmDC7tKDXwDWQXdW3JtYhDMWYwqQESoHHxQtJbddN",
  "key10": "22am8pUQV5qWNKX3nAL6xMAo8EHfEmukEzhvEMyQFe2bTnDDYa8Pctoafhw4ub6jF4J8BL38PZKpVoAv81q5j2hy",
  "key11": "5t4ZtchYcVsvog7N9uYtr9kW4MZmJAFCE9uCuCjGHvZem9BXVXiBrpZ2JeMzignQQNPvtEX53rpDei9DTTPPy5nu",
  "key12": "3uE2qKY2YcsYnQaAhPTER3PAAysF7SMo5TuggqrKGT7zGjEDWvQ9Db3bdomvFbQ7Qc5hdDrGu6nV8rmHKRe5GJZL",
  "key13": "5GdSwK2HgCNg77ek2GBe4pEoc4SbZE7pTgK4eecYWNPYHJr2DKCErY1MAsrg9TEGQfodo4FtEvBzidyvLCjNU8Aw",
  "key14": "62MQV5vm4rCtVEqa6aB7mGcEjav1mS9UYnJVqp5DKUtkVcxJU5C3BmLC49KBAu1zA7a8D65rzpvTQ9FzMKbuMhhn",
  "key15": "5tPZEffY4WZCyr1yJPXfQ1Dy9Tni7i5hZbt6Qeo8rWf6axaUNeUD6Cnn4mHn674ThJVbDaoWsJCGdoHXkwuakEXK",
  "key16": "kta4CKHoTiWzRSfpS6oUVyHQLbbvYURgbViMg7AGuBBtA4JiYxtoG8zC2pHGFgo5BTeCTbQRip37w9qkREGJmug",
  "key17": "asjkVQrzDgtALRXcqoYwmrwSsBnkGKygSmP4sDdWFuz4CPqaupCjVNob5rdFT6SMjmjobnC7AeSSyyJvZFGtSRa",
  "key18": "27bZ3J4XhpuE344SkrrrsbcP9k33ZkubUmWUMuLnJSw3vbj3kYo2jiX5RGxUb3TN7TeAUipciCiwiHjuA4BVMW3R",
  "key19": "3PYjXChJKKtyx6awSWUvtBW3kqroWfUSrkw8fwvFPqiooeHu6vDraPrarfS3T62Kss1Xq8yWCBJuCdVq4GwJjuTF",
  "key20": "4XNqmpfFiNfwTb1tcWKjG4M3ECbZvsbNFBmgAYZxEzbhVUCM1VBugXkf4XEPp6mk5VDMakgzReCPWgLpypaxCBnq",
  "key21": "66N5gPU4zuzRA2t3CCPqmaGb6pnMC1hhjYwTVxsYBXZztDUyFwEZaoTyMrHCbtAVH9NFwqgBNM1XYqcURJWDJpgK",
  "key22": "4TmvMLE2MMmyQCzexqChyMWNks6oUCMqCqBH1rtV8eZiRdjKyP2G9Qt5RqxCg69bJwVivK41HmgAMjisZMLR21zA",
  "key23": "4QrEtfQ2Dmf3CUY65W8sfdvAgDNPDM9VBfz4VXFpojXm1BH4a4c3D3mqb5sreZys3XxqVWEiwb9RDc8Js7WiUpsb",
  "key24": "5e7WGa5u7mAcUrc8sTTDbcjmRSRCYKDBWunCNHUW9S6MmFPd578Ccyo7ri1tuffpm3nCTmMjCeSxLXajD9FuJcv9",
  "key25": "3yBo9awuoJugwU21bn3PJWdPtEGEy8Ufy7S2zwu5MXotqQamUfH228VHSw4wxtVUCZPvVU3mCggahQhy9o7oYjK5",
  "key26": "2iieKgGamnBj3k9GDsZo4FTMkxVa4E28tV752of8TKc8hMRUgDutW49qZyjg1BpSrL6VwyfxacAc9gEJ2sr8B5pj",
  "key27": "3XaawBFtmdQjDnKXZKBHu6s8s18bmcuMNV9H2TzeS5nLqAYyDqk34QSNU7JFQF2QMcCmYEJa8yQ9EHV8eRCR5bkW",
  "key28": "2cXq6oKvarDkfLhqjVCt4jRUqfxySHUEF2VFEG2ipY7uB1VKfkvXvFKnu4CKkw7YHyaacTMTFM42oByxU3zgTfDF",
  "key29": "5HHbsNXVZv838hBRhnkQ9Ef9xRiHDMdeGNdQn9ZsJ3YtBsNdDWapaZ6vA4U6mi3gTqHAR4VXv9mmbQHYwkht8rJj",
  "key30": "4LVkXgYNUtuZcgWoSPwvMf8SY9amGNx7XpMAHFJGxkyketPZfnpowcuJhkrtpbEm2ery6sfpLLuSqxxqZsiKqATm",
  "key31": "3An9jYrpC4qHeXusc7TgsGfUS8WDqxYpJ82p6nAWPCEGnnrvF2anc8heUbJWrePimpoVXgPZ1exaxwMo8Vei9Nbw",
  "key32": "3Tk7pFitSHqi8VN59YqLT5FsYbx4FguSE7VEZ9LmGSLEeKhGAF5WRmFE2GrbmY7Xxr29cT5C4gAkx1nH3Ct1qTkx",
  "key33": "57vz4Cpj3CsgZ3nVKvHm1Me7f9rETqwYL2Lkzp8R5hVRewexymWknS67rMXpPDf7nF8XgEapuZoDdx5ygwZKkHWU",
  "key34": "5UCFe9G8RRfALa8Zp2TXYoibS8NbqC6wrZGEzwPWQgNYTAfKuQxm2hzvswTQQaXyNjqHjNF7BnK3DSycENDWdHkb",
  "key35": "26HUmvAD52XK2MP6VWdkA4EGWM9oGH1Uv4CLRBKEavk77TRnxouWJreEBjgudhc1tkkLpKzFh8D1aFno7GLAsbXg"
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
