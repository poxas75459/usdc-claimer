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
    "2tf1VM2hynQQSuVoqpL3sBXWyPjgnyRUBJveMNfrJbk5AumzdmixYMCpdAk8E3YR9zy92jsfUEpysSnTxQycJ4Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NhrQycqRLSDBwcyAw41BqU3J1hsSpPFEG271hQrGcBuyRoFvcaNDu6zEuQTtNWPJ6DJ4Gf2JcB5xvv7v9tDZ7f8",
  "key1": "3xwCwtZSnUrFwAyY7A2Bf57roR3ADRmCcZnj6LEiMoBaQCsvjedR43KbnwJnL8uvmH8d2pRVtkGVdikPBb9DGz16",
  "key2": "2McB9u8jmQFrsAVH72F3WhkNfMR8wed4LaM9tCmeH31yzAZkBF4ECSPubNUCtcy6VBAw4BGkffRUwoMGjnJCpHzz",
  "key3": "5qW3iSbFCajGbFsq1fby1Crv3JWJ7gLb8ARBisxikWTS5xRybb2CjjveMLbKeWB2RPGGuqro7Yz6avZmoaMzoiuX",
  "key4": "fEjugcUhSK9JyDCdaYqSf3XUt3anAX8usniAoWCXqXfpE9brd14ZDLUerGWeUN4XscBjSWtZj2Z79e5yxdRsgfR",
  "key5": "avDBsB6ew2iVW1G68QsRy8HL2KUhA5cf6NtsdUDqW6XG4jXbpEPj11vqCpoP41SUdi7bWfY52BZmm55Upzkqvec",
  "key6": "X8TFF4BkrJjQbv2MFFcSmtU5QKtiZoMx4BQHhezN4etF2ANUFE9eegu61orBZdiM9YvgjsnR9zGHC7xkP99LMxj",
  "key7": "3TA4DfCauU4quEsVwDQKp9ajQAHJmbfuE4QtSXuZeVDKpiS2vZGScN7vDR7b4x3kZNzUunvzZznrb4RewAGibLpr",
  "key8": "TPkuyyXd5HtH8Q4eYxAWWnGRyVujP6TDQCspHv9t9ws1ZsDJNRWapFa1cgwBb8vYxuV1BD9CRGyarxMx8vZUhKu",
  "key9": "46jW6ntNF8dt52FDKiznWDgfYWMK9CekLkFL8jSkVYZD3u42tpPe5WmXoa2bvWEKzpDmv92MTCyT15TJHQMbiZJ4",
  "key10": "5dp5xLoNPUCUyVG89K6CSWGdH7HjFfqnGAgFgfaLs3FCk187kcMXRMydqL4zYmTUeeDkBZrSufYgAk2Cyv8CRJSU",
  "key11": "2Q9ZgGHsGpmvsu3H9hTHeEeoJNmuSYSyuHumezMs83srjoDKXYgVe2UhRaDuJVE6sVh2ZwW5Xp3oYF4TSFTypvpy",
  "key12": "45FNn8R7h8ZU8uBu56z7GjZqBc76KL47npckwxwE4d6kBdZ88pdPSJH6uMBWnX8wxKXxY41veW5duFPi64dBsAim",
  "key13": "2CQRXiBk5wN3fU8iMaYs4a2LfhqoyUFN5GSGhqsES7WRfXU6EtoobYT5iBVJFFk9p7TFYVSfQHfrzjGEKYTBsQdp",
  "key14": "3hgu1ZjqnycPeF3dT5WdUrvWr4UJpNUToK4ZGuUuNsi8eMGS5n21hodzcBdLAmRuMnyGjxphrzU6t9cXVezN7RF5",
  "key15": "42LDGnPEV71VYP2dJWDuPstAZW65WfeJviioMXRvLW1dosxwNteHQ53UHL2asFgtX2mBqXudHjQfwumUhiiDEUMZ",
  "key16": "mVE8T9Jpvrk9qscAuw5Qn2gC6bnKWRq4VdX9GbYE2DuG3xhNmd499p987Vtfb32J8xrHAeWRp2aiHfYkbXuaBXh",
  "key17": "4oTU65i9iLu1z4EvhMEQiXgPyTTb3D8J65UmqFSGwbNhnfv7ZAoqhTZyU95QTx9tN98w3rthB3Ld8q3ZvQvtoJg6",
  "key18": "4nYRebbqeUDTW8RqbU1RUWB3qHGGjQ4XjqnkQt7VnDPDAcD9CVDjicTVSEwW3KxcxQjNiDvQ1zDMmqv7oLJpwR1g",
  "key19": "2vkofRKT8gpuyXCAM5SvFzg9P4zRuk9ovaeVgjkMooDjevYNtmWaPjrLpojCopQDNYt7Bh1xU8FCR47ANR6LYy65",
  "key20": "fcrAPF3KDTrdypEHCdhJwLFC4UaEdTQ5Z9q5y6rAqVfoXf9qKzNEWKvGxDCo65fjucDQ9zyNdeWy2mJ7nZMgoAd",
  "key21": "5Cvg9ekufxGSm75cvPND716M7DGdR6ChpzhMxRxk2U6TznE3wkRMKfJNfWZrK7F3ogeFRtZNiKzBmeqDyysv6Mwg",
  "key22": "5jAfLxtRUrGGA1V6JKLQeFJjuMeW6eXYYxktTre7hgaa12unoNSAjGZMG5pRi9iNp4acdru4ifhz9CJjNGpoaqcF",
  "key23": "yu8CuXj9ze1gCEq3XqTzN4moh2QU9WczB9gTHxcyh1mJS4gxpDpTEvc9XJ49AHRdZmdGkWJY8YjzTj7XKsgkXCW",
  "key24": "26Qr1Fe5NbrhVekHBsKN4GG3jRgVZMtFUEiVHKwN9QzssDfRASvewEq3KCTCmeaHTe8Wc5ogKyDmasHNnqwjU1bp",
  "key25": "4a9RxtsEUN4DRTYQmdrRGaVP3UbGwmvvQqazE5bnYRvCQeCvFwzKcByDxEGyX3jxm5Z8KM7hA1Zpn5e95A9UqWtd",
  "key26": "k654FN3YVEVtz5XMPGFB3VQGf5LqQ7RVxy8TRteSMAwbQzs6B3iChDeSY6NCEJn73gYpTiK1AbSc8eHJrHwWHNA",
  "key27": "3gq7V74HJK9agonTvVomNZEk8avnevaK5ByLvzA5MBsm1tAQLEV8PfkgD96myNFw6ApqffDwxHNdGT6nG36PQB7U",
  "key28": "2Fz9Seu1BKgZHWEc2b4uQyr57ujovw3Q8RFCf1wuaK3rTxzjHLBuun3FtJxaCoMGcc5FMrZ84dDzGeTHA9LHeQW1",
  "key29": "4gimDJ1ngnF4tTVRaiVMdu4CSRLAKEQi7AYUkABw7h7qQVKKuFpaKKq2bD7qx2FchHXP8FiyQzTAkbLVrHsNXCP",
  "key30": "46Qo1CwY9mp5TqL81kAdhNsXgYsu3USwBRNmGAVuRZvm4kC4L5zmcuSxm6Dqx773YB2askwTYY6fpK4sAE3VjwyD",
  "key31": "4XkXUEke5CTp7W7oSmJyXA6opYf9EX2fYLZsPRoaNCuNYQWfX1zp4pRY61VhEwKFdR8h9XCA9XTkG7odVnYzwTXM",
  "key32": "56yc3w6UVDLDnguxL2LQBECXhwnnP7bahT8TL9YVsrN3nbqdwiQiK3jQgVFRkrPZen2znBvLssg1SPd9penZ5Vjg",
  "key33": "4nawBYWT2PG3yi6VroAVsmZ83yvQrbKZzfdwWDqBKcQbsA1mSRH4b9waFbiLs3Lm8ux6vAnrBERnT79rukzfNZ47",
  "key34": "3rhfJFfCXxwCiHLAnz6897uGc4XRdhJs26AGktBjMUwf3Peq198Fd7hYQCsNLou3gSENEMSSwVdhSyZU7Jn5zwfj",
  "key35": "4j7NuYyA1FwqPUCyXx1keBcmXAcEhHsEsJ3eGdr6aRFZEC7oaTrqkDwjtdysGxXKQmwMrcTyg4toGJHwRZkvGxq",
  "key36": "39qApqrvC1KtbLy4jzzeo2iwmEaB5UbaxU6aWVBfdxJAp9pt6aiMgED2GkDpwunZ2da73n6tDejEhbzLsS4gbABk",
  "key37": "37HVm3vFQxLL5Fhyw6SauqHYdi3hyS6YJGZCr4J6JaQy7Ew5DKqj1Vth8DMk8KzBwewcdjQAoFAF8rVDfFWyzBSP",
  "key38": "5WJiejK34ys8NFGdLWVs1Xv2qJmizHftsgem2ifV3Rr4Wi3ti789tGeFr4Dhdmm1zcZg5f7YaJTT933UDrqhYrTR",
  "key39": "D9vWfWQiepPFfWNHc6w9YmUCerv3Wry3d2Ro42XCkXk1AmfsFCqRPasiJiLnYA6WvsQsnnqAFH1ihz45YchwASk",
  "key40": "66XKNbtc4p7XPMZNFEsSPJVWuaLY1tdFRVS7rCVDfhkJTgNzZft8sDvnzzma24kuBdq99Zp9ayZKK6F35GRsf9DD",
  "key41": "2d2iUcd2bBc4ApRzkLhpHyXmoz4VTMH8tBc4aGCeTpcqbA1KTBpxGF3QTSxUCi3mThLWDonLHC3nPx1rz9J8zQg4",
  "key42": "4tZbkxiHsySQfJCsSJJombY3rwR77BfQ66S3mk7Tm9vPA4D2Ak7QD8ryfy5BLqMAQn8hc8v5nhrpVo7TP42BfVbj",
  "key43": "4n1UDfqtt95Fna4AzDyWAd5WdAzzaxQAhQdmHHJc6zoWyzCzgziu7UwmcQmad4X34QdhL3dRNdGPXGAnpWsqXG9N",
  "key44": "583fPyiRjd86e3TA6nkRmUgk2bYV6asPdic1dwVX8PYKrzfbNC4NX26WMmoyDXALE8j3sJj8bVwFPuaMGG9QLGCw",
  "key45": "NFbNbJ9zkQowVAmrsKY4z9VPjB2XRvkE6THZEwEoutTaAhsjkyobPCRSaJwSPzPmUyAXYtB4DRSqF23rcC7CCW5",
  "key46": "3RDB9X2LBXeq4SWrfpiVGDXBbxmFVTKyz9LKxHHpU1jjjeDwHxkMiTPp3M7Ha9q5wBym9VYfzqoNw48uVwrWjh7o",
  "key47": "eKknEYUX6eMeNqHsJxdadSaWkb6nkjrDLH5qJ235HV8yTwySVZWywpX285rPY2GUhZvzAHtsBkjVqdg9JckWEm1",
  "key48": "2fDUXXE7CtnRdH7Dhe6RThhoN4GP2PT5FccLVrgKhsTvTsMjDXzz58YvaAg6FLhdMhwFnQs7Sw9FYvEz2tmZSNi",
  "key49": "3vzhrv8Ks4hf1itt3HQDYtFE3ukTb8U4rV2v6Yd5nCCn5SNJrZUtcr5aRW9RT6KN44KBk8fMTSLwCCtSrgYrELXR"
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
