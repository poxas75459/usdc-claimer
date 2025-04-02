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
    "3YM3ZYV2LwpuX1LqLFuQnZMvnMm6YYbdXmEhfmhBajjSf9mEgEA5Zkaox6iYkmuyXpkSFL7uYfKta8HYmMgtYs1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reSc9MdpqfKqy17EJnPizARfE2pQzSDKqUTFVyoWM6Rt4M3X8A61tAiL8e54McgY7Ct8BG5NfEsHnxw5nbgLu8o",
  "key1": "5bzRqFennrYdaWnMcnGVL529EHJbwMEuQWvRyi3jHYpYhBLX63H1KgrSzZMSNSNEePZk9LUoQLstxRYHk11WDnA6",
  "key2": "4w9jicSay8wvrxW3ywQCsQNFwd7hu6Wfa7dYVz3smAs3dhufv7H9rqtyUPEBGUyqKj7P28qrCJ9NuUSC3NErnoqZ",
  "key3": "5E69ytfqHN3AR9DC2JdVHuhGWbmcwbt7XMNohg8xR3ju6rezNqBfPfSfFc5fiSCuVLQPh6nPArm5LySFp679DxJD",
  "key4": "3B8tF4By3BBH84XTvFS9di9Mg5gZ4ptqkoKZACdJBHkZWAiHvjGjH4wq3dPXZVDkxpg2cRfho97SRaAiUCFnYGtd",
  "key5": "4w9MoGb5VobE8zeQhKBh81ysJzVyW1VYBc2E5khSaWStZVden58xDg9RvPHJC9cc9LMYT6Hc3Ms4yU9PEKGHJsFB",
  "key6": "1KdhZVWQvHEQDuLCHLBPURxnx7SE2upMsFtHx33B8CoVHaZQj4pkxBqwRk4c2zHg28tMbaJN8af8oaZ7DwifMhk",
  "key7": "j2mGJjBZUyzb1F6vt6jXLrRj1eeFngoC1vJq9bLW1SXdkD8yneYdiZh9CjrWwcNpzockMYLzb1AQH1VdymkgpFw",
  "key8": "SfWb8sDyiHyrzxaHTiMqZMn5v8o6NUEC5NTSMpHRkJCDkMyVt3KSuGVqHnxvsH3JzfPyVN8pgHQVPwEF5eD4VXU",
  "key9": "UfwfLWypdAsuXYYmy15g9Dhxji2zEFYcywDDDLSgQ8ARi3NL7UZvdw8cRgoo37keztqBGTnq65Xz7rteR1DDsVJ",
  "key10": "1U4Hk979iWcMWq8cZRj8WT7dReaR6Uh4shP4YaCUT2exxpCgDW9NKvoXKpRJjkA4SvKfZ12N4vHzGkK5uPgwf6y",
  "key11": "2q6bdMqqn3JETT27h74nzfE8f6SdoXeP4VheQHb8vh5G5ji9KgPGS4ppY6zWREL1GVou51Cvt347wqBrt2ZP8Tik",
  "key12": "215AsrnrBsSoQ7E4a51WqHVUVjeAZ7gQpPA3RsmaqevshYwTzDJBEFmiykSq5zEgAyZHXJTp9PaMuEHk2Sq33mDN",
  "key13": "4xM5EpygdRGf5PZUGT6vNYXS1cCf3zpLkzhe32aXRqFtdhm2DUmNZy6HxBu4ZDBJCtwQq4HfHco1uRnKucDybJGp",
  "key14": "wf5U26tZwU4rfdmos1koZSB7NvdxXMAm556LsHmTjDu6hAo7LTeNhuCaj2qECPo7zWLN6i8XrnFGbjUK1PuFvsv",
  "key15": "5MqZXeWhJhLtPu7eChH5sXV6avLYQ2sbw3XT4iz8HMv9Toi5Da4BkjoVRHM2s4SkmKdCHyWNnby3bLyKTXjVNLBT",
  "key16": "2Aad2wNVpeGr6NQiwGVK681mCdvH8wTmYNydhXrwLar1qZPUicbtn9xfUEWjkehiyGEgkSkK8GMLdu4EoxNjzDJk",
  "key17": "2gWZdKvY1WLx7FNfHGW3RrDZbEr5MZ2kGUnviswB1GyYcKhDXcTGfeUyPQyoBq9DsEYx1CGDR5hUG24Fa1Vx88Nb",
  "key18": "52UiGqzYp6YeHLMuDpVZDXBEmtoGzcbJcprBXHjTQXmUqdRRCGr8P1hYrtJdyh1c8VWJ1tekRvjUTq3VjARTgadQ",
  "key19": "3MB4e3AC422NGDAF25c1DgyWQYgFeSt85rypBeVwW13zbL2QyvUYe7rRj9h3YEZAhBHiQxeeKmJUh9psV1A89kBB",
  "key20": "583SGvywYziLbjP7GXe1grH9qpF513sr3CErkdXWnNufvnBdd4b9t4F4hqVv3a6eP8h5UmgV2ooLi2gBvNzzUqCN",
  "key21": "26yEphUAgH8DbWksvVnGJFpGtqG6mAE2D2pXAGH8oNoSsNmBr8F4dU4ZTr5o5RQnbw8MephxYKkxtFtPCv2zzHjb",
  "key22": "3VbkZQJgm4ftFRVCUiST3J8b89wCrWAjxsFyFyiTYLhLnmbNdAQoCXvyftxti2pg5HhZfPGVfwANsWcuNACwsJiA",
  "key23": "4gETCcbwZQXipebyGtH5gXqAQskyA6esk577GjxGPQDNakiJF5E26vArGZEXSVFKZHrumQuocKK6G95XYM6wMm12",
  "key24": "5ETLZEiqKvjXLCme5TVE7R4M5PKWbETnyXzzr9p2UJvz785USvqkibnogwXDvra2ndNXUWQRKx7tgVYnbgm3tuS",
  "key25": "2KezFu89q1jVEUYuRSFeMw6Apc3FHZUNY7GpitMjEiFesj8u3ebqMF3iN91mbRp6BeHD47PJzFcgWeKqpnWbbzv3",
  "key26": "2mmP9wdRDCRvFspidKKg96G69eojjTmNAnSaeu78crE4vpSbb7z7noamNd68Vx5aXUCMzp6JhrGKwy8DzyfDUQVE",
  "key27": "4z91PcNNR2wwcjfY8mXxqNr9yWMLmeZdJC5GaA6LfYoxan6HWsLLcsseqEZhFY92b1FBsB4KAsSV3RjgkSAkTtHu",
  "key28": "4UBtFG5DzGAtwG341XBQTfrLFjAcXFVzf9tdzSuPzoS4ka6V18teQLbppWkeEGKdfpUzBVoQLnmhDMATKUFfS37e",
  "key29": "3e53upjzpEi8FMEq84ZTh71weXXqrFrUpBNa5cNiRtMPi9jtjeCbuQasfi2t1kr5CqzxcBJcXpSPY5ZmmiAdH5w5",
  "key30": "2KwkjLrek2XACCD6v5G3bWAMbY1TNZG3gTxXw2N7E4EhppquoZ5b64uyuBJLL8tEZV7oUmTLcq8tz3gKSq4SYpvj",
  "key31": "tq3vWdVSnnkK76dYmb8Wus9poh58HsfwrgQiBMFNP8bhWTFGEDjKiUiWRW8JpMnvHLFVYB6UjjDXhc1zFxVmTi4",
  "key32": "4VWs88iZou5PPoEDw9E8CDQbjNKxQR9NTtZ66koUokMarCUpebrKDX97RqwJix2R7Yk8Q5siHAqreYB8PX2W8DG6",
  "key33": "15EiaDaNERgUJCq4iwjozG41iLzy2owbJpibsrgsUWB8KtkdozWLhbgRdAbeCtvgt4NLoEfLqopLa9wK3L68RaW",
  "key34": "dj3GPLBLe7AMD8e3jhcQ484CCShuUTRGtK28sUdb5ykYxj3wbvkorTFHptCYFJrTA4oLhXao755VkFkWecfTMnb",
  "key35": "3KKw83DiQr1NUqo879djPDKtwsTWov4Bvv6UspUCo2Zj7jQ6ZaxA9C7cp9STjhyzjiNXW9m7njsjK9FmwMkBq69Q",
  "key36": "4EvdWKMgN1vzpBhMk2fAdPbbSBdVYu4AtsT9sJzd1cuXwoGoMumpBTyk84tsn2qj3iqaQEw9Lp8mXw7hrhsUednX",
  "key37": "32DSax9p1eKQjEFivSmaHRETZq1TQa5qeyPMd8kMZSHRL5SVgdLcc4PxzTViUNx6JRQkhYoLa3sTuJr7bL5hSW5Q",
  "key38": "1Cc4h2Ano45rx3C99bMysJ6aeJezxNzzY253PQEN5UvcFQzkHnHiujFECintZ2RGzJPJWTX9HTYQcCjPYw9U4JQ",
  "key39": "4hxz9tq3yRh8nBw7geqdHu5U713TNyAvfq6UQeHRTEYvxn1g81TFrvkGqKNq5K69c2Qka6BMVVhVX4mA2Gf9tbHU",
  "key40": "35iBH1zkDt8AwhLardZy7WZyUBZRMtGTxM1VyqhhFz8HyHe5LDAF888FK4RRvmX9YMV9ANQDngg9Es8LU6Q7bQ8S",
  "key41": "3F1aJD9qeVquuaLChQSasYG8Rbpytu5DmgEw1kAG9FDvg1eqdG1r1fQjJ1USRSKttkX1P6u2uQKWkoLJhRAx4eon"
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
