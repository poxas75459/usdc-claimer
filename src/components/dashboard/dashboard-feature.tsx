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
    "3R3ahTwg8YtqZtM9RtmNAbnXdHwh14fMRq8HFNp6Vqnd7P3GmmT7YJZV9FJwLHg4deq4hr6mpwEALiikot3qK2c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cHHmukiKvqFbuqH3Ff8MMknT734Dw67wiHkvkN9Qy2XYhSEc2GrPQcBXGW6AKZ5WG8SrE8VQxT6SSaqyeC4K6B",
  "key1": "YsMwCHSqX2gy9mDSix88fWvrNGVUpB1ii69PfNx9ebxWcyxtHqtUcocPWo89YgsNb5DHxy7tp3V7s3LpnNsHinD",
  "key2": "2JdaZuBrvgyKN3ZLbyiGy3uejmsBfTwDASzoiiiKLLhrcfAbVSiCxVLnUP1EAQ4GWiihfxHtXYLgfypFgeS4WLGo",
  "key3": "4CWvhfUwB8VZrhF7iPMqyNtFbzMs4RuS1aW8jkXdfwjH1ngfTa5ar8QDQFqggMkMXQWfoygisPr43LAsbejYExbx",
  "key4": "A4Efi72kATRt44G3HCqfra2DDMqiS4fbNs1ccfy7mUrshoWx1oiMkhSKrQwcyr27rhgyd5JBLJ5J4u68finc6qP",
  "key5": "5mniHhJvY4YXATGDL31kvVLQnQhXZv8PSfzbchJkhAtguz1GaP7Wx1Ut3saCFkgZb3ha8eVXxeyg71Xhc8k8ByNz",
  "key6": "4y9EvxUqBFc2afdTmXHcwrQKJkABb3ZrxZHbB4oNxieBg9NE86gpQkZNYc2Jz3hMKxBUKXXNtLcRirgp5VBHh3Th",
  "key7": "MCUtzLmZmFdKcHJVFKC9mnd6WfVsrmZeZipAHYkhdgUNKLwa48B6J9QTVnai1PxtQU4GaP72ksZvZXzFECAvorS",
  "key8": "45QRZh386jEaBvPjrjZGYPEPTEDE4gou8xm8S5uQjnBrgiT4htCjTuMKisYwKK4QG5raix2G8WdcMbAJpznmerEe",
  "key9": "4RybjuSWWePwgo3VXNfqZdwR77JPKmDxAXQE3bcMJPxbF2ync9VskeCNMWzXHtxF4x9PuXn5uAWGa2jyXXjw2FaJ",
  "key10": "8mcs4FE4Kuxs9CxqxioCtCe9PXc21cND3TpyBNyPewJXdgRsTHGYwwNgS9o6fPLzurqq4CVXMnu1A3Dt1LYJRZF",
  "key11": "sBP1sQug2kqX6Ypi6tM7BizUBp2Q8TYvWFk2GJf4rQxvGe7KZeAkRCMHScb6r6VaQb1bGKtv7bzxjEj4J54mAoy",
  "key12": "5vm8xpTek9WvGihdWWyPmWK2qRu5FgLdqDEkv8DHRcM1cBcohqY8vGY2X7eYjQrm2orQQR3iVCUXSATox2inPBPM",
  "key13": "2QAEvFNvfFqi3NVZjAoViDDVNeZyXkYgekPQcrXReKWF2rT5xQMPetbSQ5dXGrtpZMbnJxBQkb3iGMBn3KkRdTr9",
  "key14": "4kbGNG5ism6jeFD4pq4sSpWhjdscmzaWM7KQwdM6BjNkcxWrvJ9wm6ujLL1L3iNakSjEKB5TNCW57TFU9hsAiXBh",
  "key15": "4NZDMagUPUfxhWWysniW5RWEKFoK8kB7feyA8pVoiwpanRURCnrAupMDqqnppVZu7pZc2KMPGUoUZxoZHcsbVsK6",
  "key16": "2rB3yAZSWmq9Vwv2FBHSi3kGM1NutCxcp2mThf9ajbDKhJrHn6rv9Xirpi4esspZbLt7naCiqN176ZhUUANiJwAE",
  "key17": "3VPZF3kys277sk9udMgYHeKzsAtzLSFPgHLwquwXdosQCdYtcMjDQwQiLNdgffj6FwcHTzBW389j3x16U1wkjuXo",
  "key18": "WGWhYJfGxygKqSPCuRTFwHkjBWkNpGvcduVqzyBkZuFM6p9JWEgsRSNdTdYQuyxMuMKNmKePaKkSp6gg8tc3UGi",
  "key19": "3M1ggtA5FcfHz8cY3g73gia2YMQFszz38id4vGjEtmdxE1cRPh45323e3dWXgbeXyusvrLD7h4LfV1v5zw5e5Hdc",
  "key20": "2AGvtjpYkmqcMURrxWGiCGKNJcx5vb59Lk42otEt3n9pfTCWwqz9LeS8pXTtUQXibzQziybuDusH5PcxKiP5FPiM",
  "key21": "4ZqC1y1iRkHgSKqYMjiYG18bZAcyzWVPGsd5Z9JMjoQ2uuEtZ2u48oT8ntMM67yYc5yDSAPVCBWzjn1PVNJN5Zxk",
  "key22": "2QPEDKdZbcyimFk7Y5fGfjL7PfNG6ooRixaQMLL6upSuYQFJnvcLRjeDW8QaeqvfQWZuypoiZ8Jvr7xGYvtFnt3Y",
  "key23": "2JQhLuYm2xKua9UDRf89vCNqnzi1mH4N56gJr8D6K3it8R7fR9TbfAmUx5qcVMCUiezFYrJCctygHLPXm81VhS6s",
  "key24": "4ifoUJZN8s8ykG7hVtsWcne5hky5H8aJ8B5Htx7oV9cdFu6fowLw9CmBv6VfKENEzEg5TdaUHc5aaLpdMs7FTos2",
  "key25": "ZiuVp7ULgthrJKnhqPUAsW4m7H384uX5qP9n2WDzmPpjmjsqtVAXWuaiXTXwizgFit4ZbyfoXqrEHhmUe5cnYxq",
  "key26": "2VDB8UTgZmzYmYBRYnjkL3gWgS74fAUsTez3cdgYdNfwyYxvnsLxgLCT7p3gA6xGpvfQWSUicw18gzmuNgRNphXy",
  "key27": "5M9k8rGUkjGYT7WjhEvYDcWw482qQuxKJoJAyck3sv64G3dfFJSZTeN7mkjcSHoVEGoLSVeVRj7kRHfC2J5ohR5a",
  "key28": "5AbTjitUo2KQw5LamMCVPg5aYDRCDHycTw385nDGEzqiQrucNwpM35j96kfEWGmY13dpNmm7gEVhAPbZ7RYPtvdw",
  "key29": "3pq7ZpdZGGsdkFpD3XQs5hUJZXgfSuYUggFR4x3P88fENysSdEYt7b4RXJSyt79JxxMTRMXy9R8eGuuF9pVzqi2v"
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
