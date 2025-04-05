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
    "iwQW5QxpbovYACo7inLiDqeJGkYh5hYYAzMQJ6juM6bUaoHT13bNgXjzG7howffYrAfmtzdJHqizh7J3A6qAGjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gegM2kJM42xY771bFHWx53DeUjGn8Pkdx4122yvcXRguEKDX69bpuEthxC75Pay14a8CJoL9kojdrLQZMkFkE5n",
  "key1": "ByNLMDSxT6E7c4KhzWPptGun5ynL1HNts6ucqic8KHseaFMwj3AtnFfQzVHrbea8f2ii6aqNoz2dq8DCFM8yBq6",
  "key2": "2aaGz2KDi2HFY4SjYUhZkL4NHqD2nLpNUXMPYJfeyScWpun5rVgDTNwySyPT7Gfj4uqcbbhXBHVnwoKWp1sXktRe",
  "key3": "4coXgcb6vJMFaPHvroMV9XV7w6jsJCi3JaLn3ko8rMdsZfJGcs9XWmQNayxbRaUtTNotPUnLeuiDgQAUV1P1Xari",
  "key4": "aN1f55waKNFMJUMdDLFHvCA44xRJAnFFYjX1ifHVK96JLwJy4EwScNHbP6XbhCPg32bC7kN79L3y5DJ2U35WySy",
  "key5": "2ZfKMRhufn9R2HQaNZ4JQJmAVuCRdXT57boF9jEFn5uYJtKpGPaQFE8izPh1L6Gp9p2gv2uSVNdhrfnb71jYEgSu",
  "key6": "46n29MUD5fXiFUL9FAhSjSfZ17cssjHDQQp2Z6BvgrQBSDV1NFdbnErKmWcVA5t9oqjYgzcbmCpZWZafmDtgQzdf",
  "key7": "3SKQjNZZYjMxGrGsjd2KHxfoQtfMJhuuzUmvn3AoMk63U888AxzZ8eHiKLBg5RQCXydsNvezL1jr4UwMqp4UkDqj",
  "key8": "25K8YQD1AnG7UfeURmsMwSFLcdFJaDU8jezJzZtjr8rMLiF79jMV7xmh3rXtY5eeHv8vD7Dvs9nGSfJsA3CEB5vG",
  "key9": "MMPBM9GDXXYvvBXp6PPq3QaeijzXzDCAjf81N75gaeDdAoxFxkxZoU5BaXGFxiqCqhFMMy8X44WWRDm3caDaMEW",
  "key10": "5rbFCyZgjva1r4TLGuyWzzTXFYwYrAi8Vgg2HEceaALWfSYSXwwukMEyCThshjWoXqvJZTBzPSysqxQx2tS1KJdE",
  "key11": "5fL2w6KMXBEK1CeojjseaFhG7kKZmUu5FVmPTexesGPtcfewQEhW4GkECv31Nv7GBbKfMBxKq4KCHKUS2VJ1ax3q",
  "key12": "4tCVmkg4gxw6nN4WmjuyBJ5GpxwLtYbaMHNhEdiE1NMdV5KDnPtY21CFYLL9R9J1Xpnx1o6CxuGFQSzNXoqUt9gX",
  "key13": "42Y1xVHRsYxrm54VhjUbLw3am8sp2NtqAUf7MDUkZuiGgGuEnccAABxHcEedTq2oPUKpqSX9EwPPTMT4mfzWWqyY",
  "key14": "32pcULUQdq4LyXyUngumM5nTWJFpF6kYTYJbVujZCeCLYGnrwVdaR736S9G2qwUnM1dPWm9DMuiefzjC2M29ZLfZ",
  "key15": "4pvrqeuSsBVpBirBZF4oW1RWx5d5MnSYjhMkgghU9s1NjesJzp6ibtrk4pZQkkiZm86E1LwAJGtvLh6qyoKNjuuR",
  "key16": "5Z1uSScL4251ZGLqC8UjgqFQJHhXKh6yrRCcLvUdKKEuEB6kADHCVqarxi2TKbtZjEXTTGSyvikfh5gbfgz2ZZHK",
  "key17": "g6LzebuWvwN5nF5ifgWiYHyMMZnW5BD1kiPq7txYhWv7KzxNjtnmDJwXejhE6zYrYyS2nFxLpeu9dA5AbZhJ62g",
  "key18": "5Q5M1rYDQPtJM33xy9BgAHLRH2ZnJMxVxiB7RqWBke6UNLBr5YumFHUYCkbupMQ1L6WPUCag4YWMcQXktMjyxr4U",
  "key19": "WLbGbcc1TEqRud7Z7DLUdvNcqQfBV66LEMAcnpEtoTMf9GWTMyh9yna2R4U9MzZBsQJyaDh7NxpNPLEFeYAn7jH",
  "key20": "5DS6hitq4A7gfkRGnvPmRAuqZ9uJoysYadzAxBn6cDrdB6aWXr2L2nUHyE7i9NpzNk4yMqa6rWqFtwAc4bvUDkTH",
  "key21": "2DKote35we1EWJPUyk9jZttAPrjEkLkEN1g53VNCa3R2Csm11hkQDJrX5oye2WX6xH64ewqR7dSdg7aDZMJLoQyp",
  "key22": "4uQXzyGJBNS8rsWEPZ6FFUgwsfQMS18JScR1mEoqMqtFXwNUqcm1MTSQvd2bxa7kNLw79v2AkdNBMu9SUom22z6J",
  "key23": "2N7sUv6aYGmjgrpvR73znS8PoYNAo7eUvnZc3p3x2A3gQ5LEjvcMTh7DaHsJewxHPXdjDwcbWnXXzZsjQDsxQKrj",
  "key24": "XwiceDAtMLpZg1CkLG4aYukEeKmrWnyf5iVDcehdyvr3mT47hgrXgEyqfyBP3ak7yPVLoXxdCgRrgDAhQmyuZZk",
  "key25": "4H3fwdsVhZXUQzbiLfVfX91xWHoKEm95E2sDGnSx59Xw1xqXhv2UbnrXF3naAt57oAEfbZAQb7xVbau1DbgbJBVh",
  "key26": "4eZtbppNwCkfCaXh9gcX7svqK6xAc85KPyZ1es8wQ3d6yqchFBH9xPifD8xsDam3D5Y8id3yzVz2LJsLMPpyaEky",
  "key27": "2Gn1aJ7yHmbLV7fXqjmCrEwT9iEYzbQMpPvWr1v8yux1U6BYG6tCzqhwZRQnd5SyaCmEEDZn42HNo5iN1H5zaSfc",
  "key28": "46EG6KbAwKUnHus3YVLu8qdkr71LNV4aRP7FcTJP5Wa7CVDvd96hQqjPFezVgGNk99q9C8mLZSSaELJFo4Y8AmMg",
  "key29": "4MXaLYKSJoUJ36hkCvWT2fTb9WtADPfH9nvuuZQdEVsT8ZFA1ZWsh9htsVG7EMBxQcixLjdcpxzA4XqTtkdw4o37",
  "key30": "Lq1qdszepCsoMDBjNWz6mvNDzppFc1tWZ6pnqY2AnaUYwasAwFUwqWYJCVGWzEDxdiULaoHCzobr8KYywcdafY2",
  "key31": "4Y35qvNrbknxmsjUyuFzMfkXDu4apph6SEZc6VYrUf2ZLBfu2X5GvrGBb3DCwbcUvLowDwWM5Npap1N7srUs5XUs",
  "key32": "4GCgrVcGtH5DHiGpZsne2L58uLwVazvNcUyM1fZjjC1HqbBgfFJyeMHPa7n1VzXsb9XMy2nWQHApoQXUrx46NqY8",
  "key33": "3wpJEEwN7CfmA3wJVqYNBrPA5tDWDCNEc3YSRFTtTNR6sLn9u3N9uYDch3rSknuMs78p118zNQ9YxvLetiMB7Emh",
  "key34": "4gQ4LDUUrBvYccz9dcSz4qqDdEioCSpLKWnJDiTN3gc6qfbaUKeTjq6qwUyLBstwzA2KbYCjchZ2YzUWD1XRP8KQ",
  "key35": "4wJpgaNhxyP5YXD7gzHFPGQAwgTTE6BUXt2XpZszZ38myUsbJQJsqyBNfPvgu3nxBoMeGB6XUgGDVQ6K3M14d5XV",
  "key36": "3qEeu8DhmwrnSpdxFzoTAdrC2i5iBwJGKqJEuWMsAKgYNytY6DBJgPxF8PSRu5GW6KXqd4RH2HjdBanV3bT2eDqq",
  "key37": "YSh3pr2pEknY8q4KwDx6Ah54h1S4CRqJgCDJHzc9yyBVHEPujDNZN5cFkCFqNBt4Wk9JvfwDVeB9vs17RQdTPWs",
  "key38": "SwD7hYVf6T4quQBUZouat2P4Kh9J73QUp5GLGu2YgnV4yBt5nzb4GdcKBuKQNxLcVKwzQuZiXwgcmzkf8MaxRR2",
  "key39": "hi3WQyhHShp8GrR3LkEb3GWU5PjJ3kygrNu7QdTV2dBhEj6BJDzvNnjATVbvNYp8QokFPFyiboeHRyfRRBNLBMv",
  "key40": "3JBA6iYJa7R4HPFwrHeBvmevuxpom5A8d3BtUGgQ889bzaQcrJBLbh1VB4CFZusr7tV2ALKypxZHwjK35caW2dU5",
  "key41": "2Zx9YFz2E6i954vk16ieJCT5y1VwKimtBkmKgqy9mQ3cUFAhuvN5FYURE9h6DY8HLs37UxySBKA3GfkxgJ3X8Ce1"
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
