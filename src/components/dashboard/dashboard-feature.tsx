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
    "4NbYvjfVCaP17WWxh958Zgiwdkj4TWw1EbJSEV3KatQRADYhubLLGVs7pNXYwsdHWqQFVXRgFUV2U1s6qCgjD3io"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22st9KTXNHzhSaaBiDW1uFSmx4aeg5NiavsP62KGUfZ4SwQNJn4rAt4kq4m13Fyf2M7ys3QpDnj8HFiupoV6utvS",
  "key1": "2GWWgqDw8jb7x1yWRaT47KLzcW11B6EnVaSac3E9KL9bWVqkV5ePpRDoX96UKM6ZCETRYzzSQi6HfcZpboubbriz",
  "key2": "2yvGqdZd5iK59qKoc7LfSo68XmMUtxihm8KPughX8pXyJ6L5bwXo4iUN1sCW2ftWeAvvCp1KDJAbo4LZPEHwxkR6",
  "key3": "2SyMon6FJNWkJfXgMBPcWXS8fpish9hosmVkh1yLoP6kdaYXxQAzv5FxEPMJa1fUbs26xzuuXv6aQ1NBAeW6MVgT",
  "key4": "4xpGau1JStViBuQrDvPAFdhdUi2VxaaoHz7AsKNZv24WBiiHxgsirUTUqPhC5eCUNK5Zge35gPPCDWBmP4NZA7zc",
  "key5": "5VEzTkDoXJc1P78GW6GmQpHbUsVwC66Vf4KtaYesWFk25LjDvmQtyGPb5H6KMbSB3JXy8bcreb4Po9XZnfj4z7AM",
  "key6": "Apznp6fMR6sEocpFnw9GCyD4MQn1w2d3dFazGKAQ8dTzQFvrdRtTpAbu9qKSRGoisQ8BUwo4NcHzdP1YXDtpnTj",
  "key7": "3ZbGuMUxCsJP4Sw2XHDffa7chEBpfNwzrwnGDWTT2RmT98KqxfzGV3581LMbkUjBrgeTwFrBn7srRqxfM4RnbhAu",
  "key8": "3E63x3PsbXpaZHAYZ9DBeZ6oLWS7Kupsm7TkF6UDabktemERenxnMeAR378DghABnLUpjBQKUBKns8yaVPi7kDFT",
  "key9": "4fdPa3anZzgHt3JZ3J2NAFer9m3jhChpB2CQoDvxdhaTWTASVp2CzZ16HowoUSGnAGVQNKWHk1qCqU9QShxy75Km",
  "key10": "1RXNfkbeLvi9KhFUDoXb7LxdMdXnJ4rTkfYNW68znLCK4kwDm7yjLBduc7uPRihMasHu98pmNLzJkwPutsEb8La",
  "key11": "FMuZA8NYajUqk4KTPGBDwQ6v74PbNn1r5aNJwxu6D9aGSCqRfTUEZszEZW2wrRTXxrhKy7eCxA6SUyPaRY5mtiY",
  "key12": "5VtyG2r2qkmGQSm2aWS2v88SX5swHwtpHMRvz5t13jKmy9yKCdF8NkEvWP7RUTprb5iwaUFnKdyVd3gdEeA5zbVC",
  "key13": "4jKc3bTwtXGgBY6Up8a6FhcUk4rTmzmsGuWHf8BjA1rzcavJZYTAS41LfKg194QfRJkTMWV7b6F8KBrTT4MSuzGh",
  "key14": "32rvmeSuSCdULYYeAq2C9DoJay7LSHNkWcQQv36dZdF58RPZtyCcUg52vapVbn9vBfvZkEMietgrRsA2f4MQZr8g",
  "key15": "3tuwnuHvhsg9P8MZ8E1Kvy2iP4ExZpanMj5zYNrEv3KaiFNU3Vo4qKXnDAj9v92nGg8co7Zk54rbACHX5rpC1zWg",
  "key16": "5BCprHTnVUc6C7EpQy6vah2PR3kD5AJ4FyDjHxRb7XYjNcGL6EjxyV2BfBnuoSyC3HnbQhL89qAGv3e8C4viwsVe",
  "key17": "3GmaPWPZrR9jvqDnn72yEprq3vA1c1EGarZofospt9xuFQpwwLekvkKesrzauJ88j5DZAKMfcXDUQFNkSWkgDqdq",
  "key18": "5JLrZ2zkDi8WR2VbSuWVcvmzJ8btBoWGrgtpY1DEdGvpQVRQQF9UyhnDmagdpfwYudCVbX2wDYUyJW1yf26JbUEF",
  "key19": "9zGy2Y5jSsXg64414BksFbL9EKRgijHEmxYwQ2GpnZC736uwFP2iMS2RGQYnGrbHVcwvumj1VyzA7VkRzFHUuiH",
  "key20": "QBvjUoB8koTo66cef7P7vWm6KTzzy9dxgrPsF6EkDYbMsuz34qN8AsfN8XMyGEuuUjDUigUNJux8PRt37e4nDns",
  "key21": "38v2dsNSdnspoKqtVxjZbHr5c9smTbZ9gFDKJJs7pYtt7TVgg1rnghC7UZXXNXobyDUuLaGtpRrytVhvBXQHLwYS",
  "key22": "M51B2Jb3Jdk3ach7NXbL7FXBy56aeibVmZ3NeRUJ2byh4EZdbWfqJXaMR73p6yrjemjTpFWY7wzrb6jnvpUVAnN",
  "key23": "5sNDWg8tGGuqGno8tpSfcg7QdugYVay4JRTFyv5DpvM9HuR2K9ha9ZejTZrbqcAqXASfra1BH3SYy3fkfXwFfZLe",
  "key24": "EG2EthrPDhatqCJD2LmpL8LsCjMS1U7WEuTjhoBu5SfBrvGUw2viJXThAkRBEuSm49umzLM8BVGFcKmxzSGkjEV",
  "key25": "C5ZgCWw7jWwTZjfBuSbsENkNiT9wCvpjrkroN59z5vjZTAR4mNfGZLqKsGXVbBpRmtj6tTrKYerLcFHXUKNwtF8",
  "key26": "3AT7A7MURpMk9T3HTdNad8tzM1xhUyCiKjF5uD1W5dt21XDrnU3zrxd5Ywu6um5RvzPSzo3s2Ui2GU9jfNBuddsT",
  "key27": "38LRKd2msZfwekzcSuX3jHR1h7fuvKgju5MiYBbmpJiqRgnfztQscYPkid1s3yvrp3RzEUKtwosUyCY6XhyBL4fh",
  "key28": "j4oLGQhYUKk9ujfUXC4Kca4N3ja3zPMQnSbwssapsTYqKdsSiTEvFySC7m47i3NzA1gRxkMgBXs5iUGQJqvAqom",
  "key29": "23wj9qmu8KHsdN7X4qKZFiCAoMQzY7Smwm84Efzwx8matWZDrSCfdE6pM7sbo8Q1NgmqnSXeTakTdQd6RdzjposG",
  "key30": "4Wzach9gwWUMHkRhdGgmf9kQLMMRf3PdChNsG1oEPBAPwpVEUUWEB9WEu9e3t3aP2g1Apnnb1QdSJHDnQtZrjxLk",
  "key31": "47anKmewfcJDgb9kPbbNQ2XS75eBdErNaszhPzQsYhDAsw6C2HDbwFuHF8aimGbvrPgArvpF1bwTY1aeBvzPDCn",
  "key32": "2XYU2DZh7yYuuUBmnVhqbLyhrYPUfngRHVX8c7p7TS1SUEL9kJmKZnmnFMmDR57aS4mVeHjSNhB2hBLc3zdqQt4d",
  "key33": "k8EoBCt23ebdNsJikLvCqu6wu54JeiVqpreeSS7z6WeMMq87hLrH5GUfKrcPws1Pr74byRHTUmKkfBqrW5qPbuV",
  "key34": "WmgKaF5akTFNL2jSaDV1tLgTz6sP9MaWUGePCvkq2vx35K3dhgBnAi7qHw1qB2a7UhJjATSxo7YmTqfHEwkk2G4",
  "key35": "3PT2MdamjCH2bRVT2HX1UMEt6uQ9bw3H1SYfCbvoj3QezWKAWdBcw1vY2DrKTyHvMqQdFSvApqAxsHT9R8THX2as",
  "key36": "3bdXkVHHp7vTEL5iCH4CHeZTVJg8Db5rDpwkpKbSzkf3rQYdWwdnQtQJGFXCvVmY8b8PQWHZozQVuAW7cW2zWzgm",
  "key37": "3LZtJjkiSaxMtctLsuu6DBujA2tEoG2imgoAU5moYAJVDr8DSe7c3tZ6PRiG2xUtzRpYQGHBnR35To6wUDhZdtMj",
  "key38": "2WZ6tkz1gHG3rAVz9HaDaRKQ9JRRWayYDPnPY229tokLdPcLg6vBgfXkUHYKamv4rULNKtAkwj1DB7ffe92Kw4c5",
  "key39": "4mkWzeKv3w6hhhL4aZCbcnvh4iXpF7GnjRfk3hz22eJm8MNRD3Cm9fN4iFgXY73mW2Pe55VvKmZEqfD5RqGxtpF",
  "key40": "2BU3U8hEiVoqQzUhJhA9WttBaRVxJJiey8QDAJxoMTpMiBThWV2pTicwUT8dy7p6NNeU3rkpHtdjLXLS5NjwhtrR",
  "key41": "5WmmdXgNc1ViebQixbMJ51KmwuJ7R1jDXeMdTGJ8qwrcuz9SGrTFTtzLpggHcmqZB4T4JER88z8zZwYvg4veRxMy",
  "key42": "5AfrXEs6HwHnhDHYiHPzjCFCwdzY6J2kD7ec4ap3zZf6R9T7tphH5CAyAVuyGqGZQvSn7VwJyWSPmYN923PboNGe",
  "key43": "4EqPGBYkdoet171YHudPubbuWKefmWqUCDAvUXdEQfELY96Gz9DdfUv85ZdbHgx1ARnLACJqCBAtf47veBaj4TFr",
  "key44": "4owG71KJXEXbt5ntZrRjVBw3mPftcfZ9b2BdsR4jJ9Cz1zaqNioRvFTRXMoxwo4dzVsLaqoYrirPQTdQo9wAwaK7",
  "key45": "4ZbwTZGTmYfdBcPN6PrLcbqfcJ787mYPFhDrc5KQNTppeGCDyTAe5ybesGSM2bSJt2cMNzUjBS7xwvJBbYQbeVQd"
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
