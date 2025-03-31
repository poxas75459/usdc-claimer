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
    "4MikocLYX5zQXugcdyeFLDUPfWrTgaM4n29BA2M4ZW9mDTC3htceS8v2yGtSGHamvumrxdcu5k4FYBcZYU7YnNHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5yM4WBgWsRqdA5KgMdqha5N31KbzjPq2DxDUX2FHmDR4kZ333g3h4gpwURqa6nGNSve8rgDms9WNHjuy7GB1Pc",
  "key1": "GY2q2veSvpGG4EuC8kFAZRmpaSYerd5XRwnFNhERoUk4KmxBcipPXdoUzCu5PpaHvkCHiS6biHCtJdXVXzkK9h7",
  "key2": "2EonC5bR8HsZ4dvGLPtdEKfM6sqAPyZK85v7u58xRMKpodgZXymsXkVcdyXaBWsP2mNmVH6AvxmwrLzV2sUBpiPG",
  "key3": "4SD4NeSqGNd42yz2HPQc269eQ2kvZGmzVNy3TM5i397eJ1v1nQHgufmuqAPcQMKjoPB5qdDQW9NzzkyLTCDBoDTv",
  "key4": "5BgKS2HoNXNxQuw1ZGq7tVLV2W7NkqvcHEyWenMKDDxsn3WeeHFUy8sysnxHb2UD5XyuD9yKp4gK38q5s7U764Eg",
  "key5": "4Yf2fvY9H3dJt7jeRxTjnBw9naZLh4PzXhG5rAuE8pJ7rRSwoVkSSz4ya3hztBsscmZH7QaGmububU1Sik6jKjav",
  "key6": "3MWsxbiuNsZsw8fCSMdqW7pRyozNbk73EC4yot3r4FUzvM6QnVZ3H6X1XvMLVu9rqnkczYQrkPWHKWbgksULoNTU",
  "key7": "64Ab1u4Fsq8ZGHngmGZhmYxVBQ2GjUPn9yXsvtvEkwSj8u3dYgaMj5hUFpdTkZhaT1TSvYgupggSi7kU482ASp7s",
  "key8": "2Hq6YhHk99xENUdwLExSMi2WAqFGnEMMAWeepgKyuqJ3FSka5m71Di6UvC4uRjPs48xD81btjiXQ38YCZH8kpnKT",
  "key9": "Wp56oirYKxCrmRSZj54wAVSfqKCdkredUAdwHDsQfcEBaZdmRf2ajAAYpfEWrS4TUTPzXHn4p6rRKXBgP3B7D1N",
  "key10": "2QeTPSVfdWegZiDQNrHCPL8VizNKsze1ADpWyQKQpXj1eGuksLbGKz3MVTrt9HCQsP9ScbjqahKJVphusUwATSD9",
  "key11": "2YB1QgUWCdqz1g5L8kfDU1DjM1hR5Q2VmuBg2jG7qsjJi2Q8xEEk14NuP7Fg1JfNBXt1ZcnWMHHzMHwx8fA12RoX",
  "key12": "naCd9EepSvTWv8n21rHpfL6qxEV4nPbKDqf2FcwHBtYEyb2Ye7vpqFkZQeYBmCBs8EH1GSf175H9uirhb6rJxNm",
  "key13": "4YN8iQNQJPR92oSwXcKC2RRxvS81bkxPCAfEetNXq63uTDTeNKS1Tw2QVm3hURnZJRmQzpuKVPjGfz36QHosXtiu",
  "key14": "2ffFJzcWJroPffbPX6hLdPXSpZZhqxBkjK6h6Uj51ysMdTwbgc6re5kKrBTCz67G11B2uNx328smSWadG1zM2rEJ",
  "key15": "4cvmQdMoFCRcadHMyDSXhjpXkFrjPMbz3icQMK2uXbtyAJG8WuD5Lr5eZKHdXBuTiX93WqgvArgufrbm6QS5YMna",
  "key16": "47K1o7phmvFFgjRfNo4jhxVjKSr1pAV3C6WXjKCkXbwfAt4eVcqomeB3L27AvHddejuJi8533Uv2PNitDrMLbi74",
  "key17": "5HLb5LFkXoyAzh7syUyjorD6fbBWuHUSJALqQYThSiXYbB8h1xiUiYztcDNbQrk6vVnJzakD2XQXdJrZgQP8bv7J",
  "key18": "UTGQNwrNLXYJ6d8qN92ihg3eH3EDw5Nf2hstVNQBUeqkHhnVB5r13PB9w8qf4MWbBiSdpvQj8uTJiTnjcMAAKg6",
  "key19": "62xKeDxXmCD5eaTnQwFEprECMx4hkRLvrBRokMb4dYYNfZ2S3XiLUo85XN2BULzifiXg1FHWa75A7TrnJenmRHMk",
  "key20": "4k7rYpVqXjax5w8kfBtj1HTNs3UEhE8Cw3NAg6StSXKGsCEVnTpGAyGXLd2t2XAXbs7wa39eCtxaax4fW1XVN7nc",
  "key21": "3Z3AcmtuGtU3uqgDHeeBoNJtTbe95TFE2px24LrxZVEdayAasWTxGhRp35d8eYKRdXnHhGq1ZK4Ni1rTrsmFxTy6",
  "key22": "54Wc3ydZPJ7CyM2WtUriuM5T3MMzhi8L98fH42R1tPmPLvZUdDjqTaGxNtjYWm7PPxqfuHtb2QhEE2FqG8gswQSR",
  "key23": "2K7jsvFxbqrG2zDcWqR9yk679gzUALG52rTsVcoyojj9W56yDmXXEQ63YVYzs7kxSnaNywkRQSxiEGrDqoJeWUM2",
  "key24": "nsQuhtFajJH92eLHr57ui8MmKJq7RZb5PJtU3KwfD8CRMnmi257Z6RByRjvoX6qbmsZHpV5Xxh8P2EmS2AXp9wM",
  "key25": "5gXR7AJ5jmmf6hyexhS4nn7YdSehRJ3TA9XMyk4EwGdpWMxAUibmMKWKsu2f3Jmtdy6FJv5X58AnyZDKFSXT4aat",
  "key26": "2RHAUm9RkaCnWSUifbkr3HPnhxFE9RtDob15VxGYouN97WbvWi4BG3UEXnFoxWKfm645qEoMRuKiWs1mMCXDrqfC",
  "key27": "2X3TNLcmXi3FnvRLwgdLSHqTN6MZLun1bMX9Xc9j8nnQQ1GFNDkLpvDZVS9D3UaVAAzhqZB7gTPTkzifsEdSSoHt",
  "key28": "5SoCdwvMyQ4UVR1zsShgFGoXoNHCM8EsAYMTHGtMiDZzJ5fRmcbXduZ3h2zxVPDQP35TM33q9TQ9tfH4mnZbmV8N",
  "key29": "3Z6WPRmFnbHNtRHi93M6SravSrxywMufJ3xBty7pd65qENchyZRRxDyn5W3VprMwmSZQQCaufhaaqjgGUZfw3CTH",
  "key30": "5CDR3d1ubeFit2wGXQSmoPUR1YvghmE7KPQ2EL5ZhSjiXhrzr8AAkmFZYbvwAURijAdWrV9quaWkYoMRZs789gJ4",
  "key31": "53km8SDvXjeNqWQHmtc3pdmnjdPsLvTmak7tukPX4VT2adNBGbNheV51CTz2NAGCUMPvve2M22tTAB2JgNmVjinK",
  "key32": "4GzYKSq7L39fmakirPbWB7c6ns8gt64zatfQyvNaraFfRS8huddo3xdncFZ4NLD1s3oQXByTMcs9oZhd6iTrGwja"
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
