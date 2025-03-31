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
    "4h6gyeQccGCHSpgSh7KW5jWYUkg1piLh4FYZEq3QNzYGsFe6cjwjbnMA8DFq4CSnrwPPWimyYgTChyWK6RcxUysG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCrg2c73Vf4EyTe2aV1T6HMLzbzNqrSX4JzR7m7LEv3U2AUopVWh7MXfgHksS2rMV6jgYApbv9M2bkcp77tkkMs",
  "key1": "uNPEcHWUkJqzTaWDcsgbt3JEupbTK9Gg8weod9hSMfbWffD7mCRgrmaFEfBYHKkihHTc7sTN9jKqgPLKsGnq4Cj",
  "key2": "417cN6JMj7MJFtW9PaJwatVxyhTVsXRaBLwpr4K5Tsg3YmLkr11UJPwgDQbrNhQtp9kEeSuhZLezufEY23pc89eA",
  "key3": "3CrfhAU2ZNQA696mhkDKM27ofPgu81vCFapwQqbuFfwWREDWxvUHvgRgWSp1sC1R2qUCMHrBZyD8e1Tq4woXNY5Y",
  "key4": "39rhw8HRQG9MyeqUkyU189VuaQZupwsMrCcMKn21dbkzVDWskthmTShHqrHuNo2KMUhfQx2j7xfmUgjSWqZQnVns",
  "key5": "ScnPFFEwWTGRXAyEWsJy67XKrLkaTQcdkZS9svqY82RSYBJbR7US9LtUxqReDgSYYSGxQ6QSLi1H5o2P7M88s5j",
  "key6": "2HKyETDh4iY12r1KMekqz5YHAWm9X3vBCsyL5tUkH6fn1NXDzu1UWC1vmQjmeiQPqxkwnFi5RPbVGjBETfrE4Usi",
  "key7": "j5NrmJbd1s58nGmVY7LiAUrW59Z9Q4THVgEzLCsQtmAVVZ51ui4rBjkjHgpAd5PgxdDrJaXNf7JvWL8tBXhJEEo",
  "key8": "58QEgWGh6uVZgnXShHuqQQi3z4AqLc4f5rNS9Bg9MrckQtXXKEcooKXk2zC1j4sR91aZC8yL8hiTdPtgHrsCtHKc",
  "key9": "5ebmhhDLuVTYNppJB4ikjmjUpRaLgxnbDreg8aYarukaoNqChyKmMF4hJAwh2y48wd6SKeoRxSszX6jcp6JY9wTo",
  "key10": "5kkkPHihNLGJPBjSm5zSUtxLXpi6e2zNtdVJiTzLbk7yBu8BBdvDKmmCJvy29wAm6BHswJGcWwCd5BssY6D6hbvn",
  "key11": "51QyZTTLcLqr2hWVse2QymwjTzVxZfVGqaPSuf59uevaJ2b1U94qVJCRRfS3fuAZanzJnWAi99beBn24zdqDW5V5",
  "key12": "2JAymSz9satLhH3ZCQyhQc8kDCTKRmhawHH8ohqBbneRd5zw4twxS6RirRzDdAdtFfdYjnjnZtFEkdLaznXDhHM7",
  "key13": "UTUmrLm3KLvn7bTJGMjeDVBKksbE1GdFCGzoVsdbYuKVP6eTQULUdwzwz2eVJPDp4zfqU2x8osjahFxfDCcjikD",
  "key14": "39D65QQSnSFMji3dg8MHHjbP3Vgib7ytpZZGcFnyybHKeM3qWMWt4nAKRU8LwJUfpj2Yf7S8qTwF7knH4uXmaDJb",
  "key15": "3YZVYARAFTW36BKB56Cgx3RGY1p5HgUyXQbuU56aRbWmvHCu7R2EN3fRUXGcDBzT31K3XQqYTNhimTQeirTvW8E3",
  "key16": "4G41KRTuKcfNzsRvqPL4oiomNw9wiTm9HEt7eyNr5GMpNV11jf8hF42ubWGVd37iBYnnk6NAjYwAz5ZUs9EB4apn",
  "key17": "4YKk8quB1py5dGcDoogAatQJ41hiBTmpFxCtRW6ryGd1uCJQ7PmWgrBpo6DLkZBfmNUnAUhgxJA3WqVVuB3vJrnm",
  "key18": "5M9koyv27swcPyT87X2vEbEYKbfcpLRVNxE43FHopbXCm1KBW6WQgBmEwHtSCceRSW8R4pYGoPJtH52JCKamAuuf",
  "key19": "35TBJ9SEqchh9uuBY9jLCuKGtvNSS4fCxHNvyhD9KWt6by6poXVAkG6oCkCx5odX68JxqJUu3VRjqmVmsMvwF8QH",
  "key20": "5VooBHxNVJWxEN6oncU77oEjKNMWC8Cb8C3zitr57aB6Fi47XQsW3ZZqC5MhrCSvkZELSLV1RRcdt8XPs6bsTTWZ",
  "key21": "4yYbPmJoww29Uenm9dezTySGw9dJq9vNPSee8oPTHRRNLg5dg969BXQuw2WwT7K7UXj5E9seWVTJP6k97j4FRkcA",
  "key22": "5VzUVFMEhF8usSWiq7vbbfZzbGrQQ3H2cox1YVVNPZ8sYLddL3xwu7Qeow2pbGJVSbvP5DUSJQYV6ysaC1yXvewR",
  "key23": "2bK3xNQpsYYHbBF6qRuRuY3kS4LtAEgVTgnjuTpfpwQmkZVVvD4zS3oJALyNd4CY4zEAGNcv8uAZ2PBemzWovBXv",
  "key24": "5F2dAqwLbKj1qCHRaZscQcnwUibi77dua9VE9hcohRX8tfkZWFAzrvEuze4BDqcHoiNAQ96r3taxmZXjBJ2GwzSD",
  "key25": "2tgX1xP1YSEbEkPEFSQZvHRoXfLjXqGzuQ6KTSDACqnZ2VpXXJRgMsZ5oJeLsHnvfRuShSL38V5jPRnqtNi33ve5",
  "key26": "122wxRctzDjJxWoDg41g5WMTZrcAcKUwQm9BRGZDnX2SGuVLnetUDn4wwDS9UFUH6XXmE8pJtpbvv3P2RPjfZE5A",
  "key27": "5BQjRxXMjoDMMvyPkHjvsM9nRJ9DwCBdmpJqK6DS1TmL8RpsXD33BhjbAxYwa3pf39LmVkaft3Sibwak3kuQcziv",
  "key28": "4eZkqSTb5AGXSKuCda2h6FA88EgkBsJhLKwoDMFJ4A6G7szwd1L8cpgAL6N8knZht9EQ5e9oAz31uyBsVVgBHvk9",
  "key29": "3jjijYvbcJ1SpADqdvLETpcYQtfGGE8m1ChJq9X4mRyDFTjGPnqerfb5UWKWtvBM3nNfAdU3GppDKfWk4Znunwjy",
  "key30": "3Zx2zFbBCKNQgFWt92HAbFXAtHgzPVDjDfDHmrj84xU9pasdX6H73sof48USTsYNvEHAJLrySWocekCq1cAoeR3X",
  "key31": "2sWHS38mTgVDhm1gtDWaCNaZNgwLvAgjZuDk7CK4WvPN4ESKQKpwruqNy5SV3qkjvWZD2HHXGcMjn8FaJXPgRTQ1",
  "key32": "2hGfihw2R9rHNEwJ7cZkUgiageKycGvoWshjqeDycsiikRMbVXGAkD15mLfisUyxwXrYjNDfcCn2B9y14gwDczKV",
  "key33": "hXKLFagLePJaWciaQWWXoVE7MW7w94mJRideHFrewC1CeNAYPfZREVc8Q3yH7kUFWpiJ22GKnU7wn8bwsJ5AmMV",
  "key34": "gvjXeBT9qvXwxVbhf1tfx4czu8YDnZa1bxxjmC7Nh6z7xwrnCWKNfnd24xsDmH18qBFnzJHGpnPiBaK4WjmWpuU",
  "key35": "3GLmsdgNGkat2hDrYza1S9LpEuyYBH6z9dZRNPnnttzpeTyengQ4NwRpzTi1briEvtRX9Vwyrq4KfNQ6HmAdptBL"
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
