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
    "axaou7L7tF2EvBJYKQo1oHR6Lioh56oRTji4rLzWxkWC62q9wzvxWD5WLwGmWtqQfRoutVKR5U9UuJtMEvXonnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zevH42aXY7ujfvaWWjSs2DZM1Ftk21PxTzHYa3uHXSbDoBqUepKfwLRoZrwV7GfgJDEKyVwjkSrKwRn9LhnquGD",
  "key1": "5MVGWGgEDjux1g6ftykJRgjVBrQPg5WQCAh5ctnWaNFa1MgKVAj41kQvR3v7QEJwrWHtXMEibLSdvKUUqGE3wC4E",
  "key2": "28whnUjCcprDp2V5DshoRxJMFBjtZruhU49XPWGyy9wr2xja71Hd8B7eCPv3M1vc8ZyqMM7uDLdbrhaQRNyL3jVg",
  "key3": "31Jt9NgSdFUEMqnNA2PsYimxaFCyAZQEXxeSKStnkqdY5QyzFwCrNwZY8VpE44jhDAhFNq2fNu2AGnFvKKcG531U",
  "key4": "3YGPMFV2Y2SMuxuznBTZfZ2rJcmoJbAgwibT37EsGtewtQmJYHnRsWWmeWVxtKRPby3YSbrxtnB4MSUS9N88BJik",
  "key5": "5dN25fzWe3swJC41iuwNtr6bu4gBQGkhMbMqqLio8xM9r4PrQtKeGfPvch9VV6QL6cPGpHeznjUe2d6LFMNwKqE",
  "key6": "5yWsYr6coVMfFGBFHhZxNVZrE3hPoffak7XkgRhLn6ihMzvZZPTHxRGYpPh1tX6kHmVoo7TJvybBeznM9WzVhxNa",
  "key7": "5vEN5JKuYZN4SnZZsY8Kkk9cbEx3YYP7m8EzTkutxi7UJfuCKYVsiDoa6j9b7R8msmyLancYnvQ2kxHz2K1gqLQW",
  "key8": "51p1Ft8G2EHK56yAZHVFMn4Hzbt7YJyqnpypLWBGXjYcQgmHub28joW83b36oXuvbyfsoPwxFqQiouvCM5gnJxRr",
  "key9": "5deN2og885YhLhCtHH1TMpZ96mGLzobD7zpeVc3y1pd6dMZyEGDJVNmgWYcAH8qTqyJX2oVyww326kaz83xVfAoD",
  "key10": "5nCiBtBmqMeYQ4kyfisRVJzbahgM6jPrFeS1jE7QpsnkUQLS3Vq1YUz4ut1B3hx8QqmhfwjwHvuRpVRBsceXEXwC",
  "key11": "4jM1xmSZ6gMmzGkp1kkDpdH183TJ8rameRQxvh3qN57pJb4kZRByJWB57zD7RMu8jKgnMdGuLAouZR8v8noRt8mN",
  "key12": "tE7FHS96FvQv9psEmyZTMXi3hQEyfbuem3HEoqWCEwNPkvG1VH7dMEfogqWNpRwS4eGsQwmSx1Yqih5bb7azsmn",
  "key13": "5JxT3Qudn6iMyVr1px2i9AsNHLyyqsWNae4PiRSQgXwe2xMhAzhWZpjeP8Mrr7P75jVyKMUZ9ctc8gEaijMhBG1t",
  "key14": "4cvwzXGipBeZW7isCzTTuJchAfZkECjD6X6qBwJRWBi56EQu9KeebnDTDJMVsEpGNZdF4hDUA3PuFTUXkDA6ErSc",
  "key15": "2dEYkzQWKBTHGxMCTW1bGarsB9KtWMSUnuUJq3e3YnHs4xycs3icCUJTCdAX5BgxgKdPuyiFrV5hLwCTq6hYysdZ",
  "key16": "3umYzp9SW8sqk7HdiuEe1EkTSGdWgNvPda1xNDak225XRpD8Kh74QjJKui2Ja95bmrfYoESunLpPEWBFoeYvrTuE",
  "key17": "3397SHVHs5N715debHm45e1m7kxvBEP3xs6bgrJScuPkwd8RGQJRS8BkQDXbJzH9eGTuMcaQBH531nGZqbAsvEDG",
  "key18": "4UADf7yEwgVB8Q55JpmTxEQQ5RzZh12vhkA3ZrWTboyhuHZEfvqxQocLiY6S5s5ffxRcqi2RHYjmr8vv3Rre3a85",
  "key19": "xm5YwafUnk1dyiW7RaJDi38fHSRcNFV9GrXus21JExAZCKC44SXCc8niuxXVdsfoKVFsZLGHfaJUxRGmoiwihQu",
  "key20": "24gfCDoSjttrxaw7fZSZqoLf4o3PDa8BEsdzAHtAwz1ETk9Qf4XjQ2WYp5dtx4gwtJUBMZautxXkt3brhqAoVwXP",
  "key21": "4JVWmzK9jF9uNNZ14ecmpHmf3pxaGHweuLHyYPCY1kZ3AeeX1hz1c1C1nFMmcV7jdXbTzEHEL6kx3yu5LbEddwh4",
  "key22": "5rnk7tRdSLWy3bfjMjLpz6yCdH3vL2z6pMiXNWWv46EzmvGHGPin1Qc6Bkgdv49qyw8NmpAji98no3wuwGTwHBSn",
  "key23": "5C76H1eazFWkpa7ZJUKQ4BbmxPWsUCNmKKypt5CeYdYMp6n1UeAPfwWbCLqhByXRFbBdpALxYnnwo7JmaC2RNjod",
  "key24": "4WKou8bLAvUxG3UrxkpMncDwXpDD7KT2JPUB3qAh6xX6FEZyyofbvJNf6Jr7w2GGWY2ysf2inLW1xXrdCAdFrqaA",
  "key25": "1we1ofz9jzcUjBbJEQ6VYxsVHGQ2QwVoXzz5wYhk1kTBKqnzNp41bK1nobz4Qdxs8VaVWffXjsvasFXRyusapV4",
  "key26": "5X7G6Ngzx9effL8vPBMuYHxg9KFA6k4qqymentas5WhZ7wMEkFJRPfL32ie4GEqW3tSo7QWrLZ3rakbPAdEyDfgU",
  "key27": "5nZaQLf6vXihsESQLZEAYDAi1iZubTQ3pW86vusrHBoL2vXqGwwCaeaHVfADaQ7BERLqcbsX4UNMXo1p7RvC4iTV",
  "key28": "5QnPJjUw5zSqyxHDnH3UY6QLQ5MBmBzg5qr21kWPxCRyvK4NQ2gf2Qg3WFm2y3zMY2rTqPR2x9FsZLJuP87dR3pn",
  "key29": "3qM3icDMJDCNKdVzHaxVg8rcYtepURVqPQx9mYmkyv8Jo3ErEAh6GmThenDFifeNMDDaj2mTVZPRka6TTDnbWbpr",
  "key30": "4YNsCXMDGhBL2BKNPWGd6MNwZYqrobUzEyBCFmSNVbnu15mCnKE2ZqnE9DYJH5sqYbjtxVAHamEnVMJ6KoAEHqXk",
  "key31": "5NS88HUUCTWka6pT2wYDXJ2EU923CY6pgCaUK4r5ttrr5doJMJo5kwWgwDDckbDyD3e1m6gAHRgqvEQrtYKxiZMU",
  "key32": "2Y7sF2LetHjzbpacJp4RfzcxDsGzQp5VJPDSDWhmmJKQMMX2jNihH5QayqCp6ij7JUXnCavps21XZ8hGCjWtK2Vs",
  "key33": "2iF9VzhFvRvcsuTGiT81dfPNBm8Ey6sK5EXbWpRsQg48bvGhMGi9qdwaewRbJVRByFScKxc3fQCmjrSsMkfWfP37",
  "key34": "2u4b8R1joUxsgHa5x8RAP9PZKD87ryoaDn58tUbAb2V3oFaFekAZPEjtzxtVZBc2YoYjeGLEifkBgK3gcBaqWcvo",
  "key35": "2627pxp1Km9QLtFcP1hqx8e37JULhBk9wTB4TDff1zQWCJdDcoE9yY9AZSM7YEHradxEqQmWp1H2TdCT8D41J2Pg",
  "key36": "5frXfwFmjUkRoUVBDL9UWFpnyS329RvNjjG2G4sjjcW8meAqbWWJbDv6rFy64CGenVWHDHKMErsrxTB9e2PW97Ag",
  "key37": "3FuEYHKEEXjGUwtsiy8jfP8DegmKgBJbmqiE9brNa7ttcQ1dmDsaCfYWfiRi3qDZPQdJwYz6ncRkTPAM3V56DCqt",
  "key38": "4kMvwbnZNjteW7B15G1z76BkDCzxCRu7ZAGmev8QxHQh7H5hFMrMNgkLXE323WB38fpcGrsh335GSqnMhmHB4CXY",
  "key39": "22ddH5uYQGroY5fT2z37nbmSrL6pCdPq5QbnAQt5bAc2WbZXeM1gwgi9zbnH7Q5aynmUvLD5AeBWLi79xHL2CdjB",
  "key40": "5m15VqZn3Soe2j7N2BrrUPtKPYUyzUHe7kK6e5MWjSPwyD6pxeDwHntSudDaF1DdRE6darV2cmLACwmdPTLXkEMZ",
  "key41": "3PncEuezuoJtur8LqxDNR676PHc5q7wRds85YFdidTvVWM6XPREm1NAsr8VxSkRHJsJ6xsqEKu8wcfwBDRTxE27v",
  "key42": "26CzPpxKq3kNMvMBJo5jnUY6MopwrvhGLxySGRs9q1PevGEdHY4jT6wMbt7nndGvM7yKr33k1cArvD4PcUBCrU2q",
  "key43": "39EMkwcp8mNcc6mdDD1GRL8GBcomNQGNXigADcKaQDjeHrzi12FWMNCYNKafRVDTmkgAEkWZijoisjGYJuqW5BsN",
  "key44": "4mTSbb9S1kkYQHBp51BZ1tzg6o3cKYs69NKvLbWmrvCSAho6WmhvKVSndkneGnQV85K47qfdz6KamgDW5RuCMPKJ"
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
