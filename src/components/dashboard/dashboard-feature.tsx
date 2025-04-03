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
    "4rKinYqsnVHeGMaYabEnZggghWcWRPRG7uPf1CHPJ9kufjknnAtaLouZuLTZ927yCavZ7Vgg4dKHk1GXradSzuq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25t135UytziUkj7em1ctTSDJ6HDFdUwncC1SxCSMXoRVz4WYACw5hqnpBuwLcDufJFG72SEnjDERHHxmjpZjougc",
  "key1": "5zdoRUMS947ndFtQSHML2YS5tD1bWQZwJZN6zZfhEpzq7eS3hiYjFhpXxaShm3G6QDwoVTbWqQDTcww96dD7Ax7D",
  "key2": "2usE5eGo6QqmXLnPD7SxyRNDSjnbepYexyzKWXnMVAWqr9aWCrUES1LJamncEwJaXeST6AEzVu4f65xfvWLfoVEu",
  "key3": "r8tMVzoiBRPASybAi4wJz41c1iiwv97RmURHt3X5g5CyE1f4qw9W5mhM7rFBSRP6ahb1w4yPSLhaCbQgb3MBYDL",
  "key4": "2jm9YFL9xGBEMLJzTq7Jk1LZB8Bres9z4eXArSZdbvbd3QF57zfLZJtt1rREvGvwf3XVhwYAQh3tXVLELLRFjNC7",
  "key5": "2TccE4BmWHpsFbUdpWZzfudjrs49rShsqxyDanFqiaLAghqQJwzhRupxPDkrapovWa5TAHne5KWee8UD78MGqVRK",
  "key6": "3nLvhyW9GxBaoY7d7ic9Ram6pGXVKtiixPUYNG5yVuYL2VP632QWa3eHTYykboPEsb7dkyRFmHCWmg2Lgz9FZBY1",
  "key7": "5yWg6W6xLmjKWk4BQT94CdzesmA9a6RR4KnduRL3244ErBRFqAY2C6QQQrcfb3VMqdmNc1HoNw795b2XgPcgJQvP",
  "key8": "2BpyaodwKoS9CZU49o3k4dn6NdtoxxnRdrvs7UsXbJmgLbALkjThr6Q7iBCK4zwpd36Wa7RbcLcQF8NvR8RGejaL",
  "key9": "2TRYDXzGytQuRcs3KW6jjB87PN2iBCAqKE5drcpRrkQezcQRfZwzgjpFJETAhRCkTsNQmxjErrmHV5LXwHivHwhc",
  "key10": "617QQqtgHZiYuXg1XxmseZncotMVogAW1kkMmo7kpaw75VJerkNeUTnMU9FSBd7rqjWh5BMduYWj1qyNf8D7Av1y",
  "key11": "2gqpZdJq1tmDLDhKHoNfVzAFj5YPmP5JZoT1ZXb17iLKX66sySQzV6VTWYi9T5ff5SExGt9FdAxdQ1gdGuREKtXt",
  "key12": "2etMNZWZG6ovXPV5bfxSfHsAMGZrvQxJ478UDbrrxcbwWonaPvRGyjZMgjY3H3B6aUFBGmWYprkWCq6KxfEQpK22",
  "key13": "2LvUhPbPQiYvxaRtoWYGHMTg8ojdWXMEFNbZmASuu9u9L8mNh3QxxSjfmzBPkmHGEbqz9oD7kYabF4er9Q34chgY",
  "key14": "3FmZRjavy8PN61mDCm5qKcT16zFsvEXB3AcdCTMgC8Y4Up7Y53P99YPg3CoAbMYbfwepBPH5chHu5wT93q5Twxam",
  "key15": "62bHLxQEq7bisxJKaCGNMzicKcEiMVmNpbFf4cLyjBLv7Vi7nB9eqarYKEccybinUr8pUpvfHFSV2qzsvWG8KMjR",
  "key16": "66qY1qLYvb5HrSsNStLmPpstotiocknKzzYbu9iAtSv4iL4t5C73LMKpi7oAkrx6Jkumex2yCKsh1eMxHxrx2MGL",
  "key17": "4U4YjdnSXVRJaSihwUvZhZ7jhB28jTfqLtQ9BASRLESNHbtTsicc7cwuGZhX4PzQDwvNesUCUQixCucojJK3to68",
  "key18": "3PBsZdyqiWjaF8iSvYL1z2XJp9qTkWzumH3tCCNm2Uc4Eefmza5JeLAownAh5HzWa2u7UKap1A9cg9uCzbw7Q25h",
  "key19": "LVyonRRD4yYYdoXHkfb1itqN2awVtT8JPuyxTFmyviFvLPp55y5wgMmyacH7Xcb8ZFedxi1xpv4ZWGRTSUcCpbh",
  "key20": "5mHeFCV2JW3aaTDmx2WRyktA8UNRnt6kTyKHr8nXoV5qrDxorrQdVpEF4gGAuYpdRcsGXzak7rrFYAJfs2GmgNj9",
  "key21": "5EdBjmKiJZ6g4xyJ8Citw1mr4XK3QcUNNyP2G2sx9v3D8LJP3Q9FumjJR4pASKgoZ9aJkoCdVuoXsCyvxrRL2wrP",
  "key22": "RpBMKMKqSvQDhcE3qQMeZa1Lp6dqhVm76G8khi61QugJNqs3Ea86WnEJPhdJquCPZ18nddZw8KzvxCb2CAsR5qw",
  "key23": "4WnKR9uFtRuiUExBb5J34wQUbEFhESTmDqfZ72L8XXzBRTY6qViMNMb4Ttzwj7UPUfhADhycHBFcHLoSwvq83mF7",
  "key24": "3gKVwwcHGmfaXBKp2uxEoGBrqbEUTzT1RQSVHAvrJGfgmhz31nwCmqgdLtDoqCvgyCbrsuHW2KTcyWTwiokAL6Ce",
  "key25": "59rKdzdsP9p85UgdSRRoXCx8mnr5M56ddPbDDSZwm4uKpGktJPLHu3Wz8ZKbUtkTyV6Xj9qxQL8f9XQh5jwgw85c",
  "key26": "22QRecRJesnVhErurbNg42z2dT1j5bgPpFM18yF2wxaWRUjpzkiUruEjNyeoyaafoksNgUBAH6t1oDnpKVfbLBEU",
  "key27": "5r5XNwEockH8vWS1GmFr33KJWFMbFyAeW3ADtVnA4AXNJpwx2qUg9hJerHmUaK1mbCR9bSn2hp2HH5VwJjuiSpqr",
  "key28": "3JFdM9gWacm2QY6vmUCdYVEcZXcneAVCDzUekSwfEo8rYV5uMyUSKTyZgfNCNFL9SZxHzSBCvPJvaKFo776shfRp",
  "key29": "5tVSDrvh3L6dDCxrhPkyC8DBP4KLcBYy3WHUWMVc7fxgt81X3VCkPesGSNwkkmq5Zyz6DfwDCAFN7qY2gKYvjA9L",
  "key30": "4VHnuuqjYdDMGKQfcU6FqeWye8USNwUwDfJRyrE9w796BBc9VT7ymfxt1BeXJeBnjBHm3mnp64hyJNYNP7cdmncj",
  "key31": "4CpCRQ63byod7L9grKmsacyyfpJvDfVZpoP7vK2FwtnkWJCJ9qkwDfq4B2FqXQQGYSwhSMFUJu2wzHqXy92JumXy",
  "key32": "56zfyKUF2qHYNX6rU85HKiwERcGJEGGYaWWfJwHtWjj2AJ9feBcDSh2cjS3Bi4JU6DTnefEmBrLAzqdoW3AmS3yE",
  "key33": "3tW1jXooajwXYD29rxnedupRrboVXR6rjCu2XYdbopAGfKCHWXwzp21HBpxeRRevLDzgALBXqc8agW3zCFZcj8fz",
  "key34": "3V7AYD65P1tMbtKZLRFmgYeZqPtPrsWoCmbWGdWY2HkkQkFF24NBMvKtQUHm53gJpKKiQXk6XrFaegkvg27uuuVF",
  "key35": "5JTwoc8wqrvGuHrCn4mmfFhWWVcfvUwi9AUWkm5QDivv8GEavkpAY3LD7UXyLfaPbUuntcERNYozbC16AMx5z1et",
  "key36": "2cgpnVG4e3UcDPxcGNryZf93TvNjV5m5BatQg1oJdMeymbhNmHrRCLNabGAbK5cvvt9PAuCkrahXjPKgD4r2kZrG",
  "key37": "tA9QG5h1n4DnFE6e2wRDWnJadDQDyczevVezcMaatLsXw1toaJycg4UPZSsSSvdNcYAMPwwTikJjTfKsUkv73D1",
  "key38": "5CxoM6mGM9G5ap6MSDiBgk5299J7ah7LvR5Ny2sXF2U9ws45GgZH7TjB1je2FtjwgevMu2GS2WoofTvJU2CEYZft",
  "key39": "5Kvr427xpCcLNGmxPXCFoLVbi6Kdst62gP5YafNbW6jyHs9pQzgTeYSh24AmyCW2zNZhgqwFXkt5H2xKgKSVq7gT",
  "key40": "44DdxNgwKVNHrZFqRSTF9iE9KWEPWhoQn3Vwweu9FeHqtRmgKpkHjusMXkpegzhTDPPqYE7q1MnMZzXwPcQF1Ppf",
  "key41": "5jDJWmgqVUfZxj2ewa29DXrPmg9Hcbhd7hdfdEiLap27krrur317vm9tnzpwF53ZGPJeSeExyYXy5LCJmkXAVoN5",
  "key42": "63nApBefyZLm9V5yPm9EduNqMZaJjsUbUP6k9HyHF55ajmDMjggGuCdZkVVQUqXsFEm1Ut5ghY36bQGjEGsCaFK7",
  "key43": "64r873oU3ZNPNFGqMWqtCpoWHNp3eYyfwao8sS5fA58kXKdgLg2EDB9cPCEiYK5jFmGspwFMyPHRqp8j2N1XhuE2",
  "key44": "26j3DxsrfXdQ93RumuJqm7mrsXE6AVBXwh4bwjtetF3kqe7XVG316dbVJ6ZwJQ4mJAWSsZLSTxqihCXf8MXyD8CX",
  "key45": "5RDo7SwD4R2fCN2o5Ez4u4Ck2xXqKF3ZosQncyNCvm3Zk4knmQ1667zB8jg5VstRYPbNYaf6hYkcT4e8bsKLofCt",
  "key46": "N4RP4YpMrBzVngH29YvJvKXVBE1mgDjaSArwFFjrrE2i9eJUmxGEvWTsKyLNWc6ppo85CuGgUo4gD6wd4c1Y57h",
  "key47": "4TXgWnYx3cx4FDYy8ftsZcBTKxzjcWjV27YzKAwR2esVEjdez6qF2PGxQMEMEg7CQQCTWndek2B1gaKtJDKcP8Eb",
  "key48": "2BA9ziue4Uc6L1Ewz1PXg27uZCP8s4utjNrGxTavpYAnG9WBBzX2RmFrDGRrHXLiQ6gvdT32cdWjCHtrCH667onM"
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
