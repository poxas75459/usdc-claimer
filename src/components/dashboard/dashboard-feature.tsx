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
    "4EXdAwqLUJoEYA3LnWm9BVifBb1gaXPzyjQsT5GEAD5XVQfSxkzCck8cT8i5dkUXoKDbudbzTMFjr3VT9cNeMeTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARz6WoBPXk8ytJ5zjavPH2oCVrxD6jhPnKvMQoPHWeczvBkKjiPwtfPbHW94mcPzLfu142nQvVuTDS3GMaK3NnU",
  "key1": "32AjXohmdf9mPgagdsrWvWNQmDyLwdwHUPiFDAzJAXha3y3LRaFetq3nmYQdmvvW6SRM66WoYJtZP8xQCgYusm3y",
  "key2": "LMN5NYzBK1vzc7aPKiEe5fVTtgm1VRZhi8kfDeEj6ixkt7DNVDYmXmgCqdKs9ore2wyZqeyuqu3KtWxtvNrDyXu",
  "key3": "2YzLwuA7X3qxZoNXZRCtH864gH3SvbxdErcm5tC2TqCC9ENysXHFZMb5CoaP1RF3BZ65MPeMmqQpYMs7HjdquPcn",
  "key4": "sDcQjCPJqKCP16YjXt7zA1daUZFv8zkKeSGcUiMZVkM3fDhV5TSkDS9tjsRQTW6mr4GRMKN1D7fS9GsMcZ6rkiS",
  "key5": "Ni2FGWesjxdXQ2NZ97psBTV1xziqRsf5TjondvYZv8yjRQfcu2YgwndQLboPBVsBjwuUv9zXXnDehzEnEso6Uey",
  "key6": "79xabB9hqEfmpurQh7vyK8oPsiXESkokdVdp4D2Rak4YrfdeAnXw1cnCPPMNuRWuEvtt64p3ZK3kE6wUL6s2WnX",
  "key7": "5uwoetQmSdUde3WyHkTKNoQR8dBf9jTPcBRjMZBf68cH7FNt24Aq4uu19fNVNXFkfnD1GCd48jRi9c6sof2YJUJV",
  "key8": "4bzoLZiKEuxKZ5rKJi68K7vyYzdRtjWhPKXQ5yq1zNrpavYERZs9Mo1s6cySGJnpLUA63kvXM4wjVDmjuNFCgYD1",
  "key9": "2LHnfq2vzY6iMu5PZpkk53SeXn8N2JsSY7xbnoMvzqvfBHWpYhbMrdreRCD45BKxHVm2JcybiAFWkXYk4cgjb6ZP",
  "key10": "3NJLamdAzQMDRmGvVhphNFLhnB4Qt7VcFE21zWhkhDyn2Q1hTCPmfbFpPUtbbfwVuaWTUrzYgdhJ4LW7SXpF8Qyr",
  "key11": "Hu4DLVBVGjPGVsJimmh34Jmq7uUmyw5b3iFkDbw5m1kwLEozbk8zvoPcNva66itk3VZMyGfFv8M6RpqntaXa3gV",
  "key12": "Ti47SwZ71G6e5cjAEqwQuBNC1Lwbymw4KEhAEQA5WY9MvxvnUcBrLHRRxWMkxz2yKF3GYSRa9hAjvuSPrNjecr8",
  "key13": "21JrxK4THZ1MRgMbgegGZVeUN29ctSfoEyKj8kgHSMD9YTphafmYcNbMsVzohMe9bGP4pR8fRj7QSTpZB1gdcQuQ",
  "key14": "4e4jEUjcpxmTgmp8kB749uEe2aq1cCVMCFZ6SdbPGH5YMv7RapStaYtoKAEN3iAr9uxU8KJRga4skTzBSAanW75G",
  "key15": "66eD8uMUoYjUfy1dt7PA8EyHaEvdKWRMEceCUoyP27gduhsATXg3hsBAmXJwoUHu14vfMXVfLC4sUBEATUSQeJiz",
  "key16": "2NJBTkhoyojVBm8xXSm7TyUkxfFLwN2iRhNKfMH7msVWajYrVAP1ZZQ6SrF741qNh1wx8erTEZjA29hGY7GWzKss",
  "key17": "Ze3E3515wXMmKwCFH6GMAR2M2fS7XMSWN9wTfujR3KxCj862P27DeFDT4nQFk2uRWWoLx6RjaDSLmF8EzvR7sYz",
  "key18": "wQ6t7JXWcKbW14myrojgCiSth1tBDeYxvuZCjErj4gRfeuHFzrWLKEXxUbAh8n95ris2hvfsxhyPeBpr2fE8Zct",
  "key19": "63LgQyekX9ta4diq1fgJNnCN5NPvNZPAUxZBCMvw57RH6Q6vHoBGiqmL96KkmLjxe4wJ4tNzoLxSSzhkcQt9Mhmy",
  "key20": "3bkfNSitEst1ve4qUu57Si77g8VYmX7tFd9hG2RHw1ZyWC84i7VRFSX1Uk77R4oyNaamyemXdk9L9Vwiw5o36tXc",
  "key21": "4ybscNshXfghxxXNt519tn4i64nj32N4cecpJ7QBbyg2ghjoFUCs6hQvZ3GbcW6k1pR9Cyr5n5sKU4QXTVGNfG7P",
  "key22": "2fiLJrekK85ESYx8pPj37qMRw3tF6DNGwgWV49GubAUaRmSAksyDn8ToRpND7AfdaQmcgfMCSxfiDPQ48NsVgQyZ",
  "key23": "59Px5GLe32DabXAc5haRpnG9BBsY6GxUrDsMzWjwQVzAQRNrakXEwCYb3CCK1f3riummAVJ9Q9KBGkfMFKcg3xV1",
  "key24": "2LCWbKc8g4rEaSwizxcZKDNp36hCKBupVvKqrqYXgemXDupkU7yaRVjrCALrnFfYJYXx3Et14G3nFsseNFypF2nL",
  "key25": "5cvNiZZbvmP5pfg3JMx5dZcjpyzGtekGQ4jjgY9VnLYaokHbZy7yQqr7ckkromA48yMK8E5w4b2SQGteLD4GXL8u",
  "key26": "9bFbGLyiti1AUJeS7TKTXed22g3SCPwEDszQLaaJCzjQgwRQYzfimPEpNbeWNMfNwo6zhn6cvisfR1iiGvct5ft",
  "key27": "ZSn9Hyem61FQcH7XtibMjktTQWx1BrY9RpZ7HjnKYykvtVxgJT9t8MrzXDSbeXTbGfX2TkbS458nvWi6T59vwez",
  "key28": "5ioPB7HvVsdFcNjMREcMNEjwZRjZY5GhttJWXt2A3pkwAVnKNawAXsUSD1XVyAuXd3pNPBaL3GAkzpet27QMUJdT",
  "key29": "2vFdsr1BbArZimhB7oBR7hELdD42TRy8hNjpz3LH7G8ki1ADFxiivRXef9KJASPhjKguB5zyKSAitjSYF4xPmBJp",
  "key30": "5AaHt6ooz1kPSBMsPJKTTDwhJ9keTeJpft74KtojeJN7suTs9LeactDEeCu1tVHh6Z2HhEpZsMQ4Z6F87EdHxY3n",
  "key31": "5rrKGyKdWi6yTboQ5ikZS1FsQVW8tH9LeyZ2pYXpo7eWHFn8QRqcB7AdTgAsz43a9aGpsGYvNRaNBJt5qsbZbGQp",
  "key32": "5faMokug3gdAEwSidpcuLAAM3E5rGpBAHb6WswhFH2vEQTuhKYsCUc9aVk4YuvKAzAnAhsjBKE591UhLK5jDWq4C",
  "key33": "2kfLrGeemWFmKdEAHiA1G7zsMvRACQW1vGHj3yoMsAga5qeXnJ7hhb19GbPyf6PFw4KvZ4iXDvek1oS7SRv5UjUo",
  "key34": "kEpyemTxJckfZYJG83sTyd4VEyrGgS7vmJUQ9NfP6DNWgjDsQqaZnw5HmBfKbRHtA7BSFtc9CfLd7XbJnRxZQfo",
  "key35": "m1u1ivjVjdpFR3RTLCDiZsqzNgkghoGkvNQKtRVFKn7J4HCtts6p2ekPCbj7esxbjbX6TM4a1pzjW45fL9xWfAd",
  "key36": "9FXSLw3AN4gDmxG6gTWPhuhzZuCRJ2qQu4LqVqeftFgVf9BLEvceMnTgK3PDmfnCdW9h6F26zrWxz1KBSgSNizb",
  "key37": "2L63hxrQRoF56RGwvE4vbGeDGCvJSTAugSatWR71a5ESNuERoJhStngL8zCE8L2fiHAQGxatqzHwvauPuWZoH2KM",
  "key38": "34yPwWp8ui6rY9ESoV6m6zz5snC2F9N52o8bGjmEk8F2LMtAa4bTFeseheSiq7LDijng3vPK4GsY1u9NW3FcJfUp",
  "key39": "5FbjjmkHCByaLCoSi5pUMLNoRHMUpCNd7RL8hfbxcUe9UtSPcDxA8g3xT6QSVxNwg65AjbQEwbkH3PueNkL1L7NF"
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
