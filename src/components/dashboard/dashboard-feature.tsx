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
    "3uq4b53t8sGtkyESpMehHbh6F3ECM98mgMwfZQfkDifQJFiSNrLzNYeCDCWtkK9U5BiwWutKucohwHJdxHMo5yF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxM6L3zU4CoD379AeMxEKN3pE8XbeM9tnpKCghR3zDnyaFafHycZfm3HFWraaEPxbyZquwLcj8GHFQKNY82r6QM",
  "key1": "25n3J8BnK5zYwuBDEpKYk1Buv58NNmnfu2yu4GJTSAUcGvq6E2TUpEh16FG3BP9c81yye3TvcuLwnRHwiRXh5aBm",
  "key2": "J1d6VeFSZVbzakxUiLJy5iRh9i7UUkBFFbfR3E6G734qZwosSC3t8tUwhfB8LTBHHouKUdmxaxydUYyUqBREc3A",
  "key3": "3i1U8485ocZT5Q4C53atJUjhMXE3QrXFEuX6VwMPUtwvceuZSZ5W85p8pgvDxZ5AgCWSzhE2ZHjuuD5zmkCWNx2L",
  "key4": "4zdytUmnUpK9HdJHXfxEoGu6EdboeZ677H8Q8ofMjqSpfLMd9P5XQRVfmjs12wKJSv2iUU2dQHgYdJhpxx324uZT",
  "key5": "4omNTtFbujT1eMe9bi4RZvBhi4KAzGWUoHSV9xvbXRVQ8PK5s4FcRmF2dvoEJQMQtZ39NUVZj4fVaQSsNN9422iK",
  "key6": "369DYorf4pRCTpSaBbW2ZjeNC1E1KEF6RbnryMFkxxzwCznVULikcsY1hYDF8hvNgVDuGGbpYFqcZf9hBWtEQGwh",
  "key7": "5NtBcwXpzpe9dtBmeLjt6SFLpE8P792RaEuHExxWofYjPtZzw5MdMkvTk3krqVBxitVtqjgC8uWxdj2PkDY72zYq",
  "key8": "5RUNujBXYYkpW1mtS1ZT9XxaiUooc9CYGXEkk6BReyFbRcJaMn99uLzJMMeUmo7c349ZmzHGX6HtijnmUzfZFCFv",
  "key9": "5cgDHDzjkFZktGFXhMBmFvP3qF527UEEKBR8R66N5ycfgFyMF2osodBuevGxHBuCYBtwLv7XDG14vmX97CGdugA",
  "key10": "2oYkj2bkeWcDasd2SRqnBsZpYcmwoiLLDov6k8yrmYhSEeHwokdajxsZrcG1vL2xC5heEb7LrvHGxief2jjZkss4",
  "key11": "2uJ6XFhtGmij8TzFoAPkx6s99G8jyREnRK4myMebgG1ADCP3iZEtAsyr5LHkc3A5m1GnDbfCEvkRrTrq51tm536A",
  "key12": "4P2arXAZFM1r873LK69Bym9zV75cERrEaCAzcVVn8Va7VtKL3pFmnekP9v2Q1gYowP6fZ75qPgTDWHG5aN4eMwu1",
  "key13": "28Yi2uvTv37UMbbL6f6nUgvXH3TgS8LyGWRjtRhBVZXVZu3E3qCpso1mMuVAtjoG9vDXQiQoPs6REVQehJUP8Hj6",
  "key14": "fNReX8FbmSkHr6mnGxvq3WsHrMMcR8T44U3tM7sFB5tAwNzxS2wDvih8Czv6WKAUYfmVGH5zBw76HkH7762Whcm",
  "key15": "3Xj5jEYJJzseKenUPDwJLfGV1oxxViEbLm5Dn2vcLFaj7rvsZf26M2ULzUwChkGv3NAohkr9T8e8WjsWUPvV9f6u",
  "key16": "2QbcAysnJSWyXknP73vbUhqwccpsBtdLJofvJZdb5HhavAWpW83ygfowRCjhzfvRjm44zhzRdqgUkQEZ1uQC6bkM",
  "key17": "3Jun24AdoqDNx8CrZRjzJ4udTxCamZ5pCB9N5MABkshSgDNPdVQttHvvXLJwpvBMLvGX4TvKrQvrgjYdPXEJtJyV",
  "key18": "5U7zihn7JUdPSErZuJsNTCDtrjaLPpyvbnHbSggyki6SJk3fcekehXCQK2sGfHEdbHDuiD8BnznGsnKCEdU2UBmD",
  "key19": "3zbr96ZYiaGjsVWCwJY7ynTqKDDMyzMkK1c18QhQCpW7JAshH9JBuMao7PnPYsSKGZRmsPWQLavqwWLnRsE2RYs3",
  "key20": "5T7sWwKuE2MdpLqduUcao4VyZjmDEbaX77wLE7XVH3jYXoWb6UEuSbAnN7mvUDpnuzNFUmyB5F6b8CGhBedPwjBM",
  "key21": "4sECTwASR3DGUqahbnuXvLcQBkAyVkhvwFE5dEHq4ong9uEnQd3ZF1h6iotCJmTuQDdu2bT9BMm9Mu4Rj7ELC9zE",
  "key22": "4NFqXJffZTDEcHoM3ivwe884bsVaU1YVQwPimKmuVnmwWjqgErzKxeo4XjWLsrmhmNXFJsUAC8RN9T9pEpAT9UZv",
  "key23": "xRzfHLUPr9DfTphMbgd4iuLELF8UjTaN236guUBc8gW2KvZcQ5xcJmLrGaXorJTAGwyxoHooKpFDUu1oEHRqHkq",
  "key24": "UWDFc2HVNd4JV5TrwYpi3mrXjhJDJeASXUoLadGvdvcdsahfB9C31qGQzRU6GxNiGQ21EhxX1xpsDGotZbGsFon",
  "key25": "33xwz51cx8twyPnCj6T4msKjq7DspvsoXtLxqHf7N6r98gjq3FN7RdpVsqhf6T9BR3UVdMwmjRoWDhQjxbYmPtmu",
  "key26": "4CV8GgzauaH4s8k1CFtp1uP6BtVDDwLH1Ek3bjENjhvgFZXRK9fWogq4tiMRcnDArWQHMnP1K4Vs7wNGX4okCoVB",
  "key27": "52YRzJBAErgGAEbu32EntKcpV1GP95xeminZe5NqQgMS7wPgpahr1yb743jaUvrPy5A98vtx1cLViDcLEpDEMm4B",
  "key28": "7VvcVxWULnGsAQa4t8mcJxuzkoqc2jTxcre3KG9FPorWbeJhdwkdrSHy171Ec5jRkpU1A8GE9W98hLKKwRpUwwr",
  "key29": "6VVzzYXvtVcGiMsEqZuoQhtbaA6ZW5HVx2G8Ak9tAuPmzZ9nvagizfknZJkrC5obKJi8GrUSZTGhEXm2RqBaTBH",
  "key30": "3SrMy8UPCwbdrgmecCcs1r1PSxgmmakKGNxd5hKoVS6vbVqMAbLrSWDjnSCv1Br3xfBozJLTGVh8Zjrwz1x51a8b",
  "key31": "AkmHGoqi7HZXrHQF8y2TTj6iawZSATVztitbwMd9oX3hukaQ3ugkb63Xo92fZkcYHzMDwjsGLdxyguPEvHbJrzM",
  "key32": "5ua8VqXEs6XVdAhuWJpUBSami5GQ9m5Y4PSe7Yp8Gi3canm9qagJayBgHAyrR1sfxqv636zKagxkXFMipaNQwYX4",
  "key33": "61zyromt5QRQR6gve8DHM5TUbQhJ2sdiTKfTADN45HTziKXs2KW8Dq6ZG75Zqh418AjtarYZySWSxbB13ercurms",
  "key34": "4EGLkJH9KpKE1Cr8PWaKDryNUdP98otXFK3X1Pd5kHRbvbVzMoipCVXq48xYwCjXr3EeizSxWdHCzTzq33yzNSqg",
  "key35": "5pzSthxVLowv61Cbt14CvY4nXxdkqC8qf44YkRf8UUZJLZvophkuVuCpKksaStEYdjyQGvdQA5BKtQUnZbRcUiUx"
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
