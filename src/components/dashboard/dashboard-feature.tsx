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
    "LzxcCNMDH8THENH16kFM5Yx9JEaAuY8kq6eNhXrfsH5G8dmVp3bS9NFfTrR7w5RgD7bDBt5PcAuhCUJjEqLGvXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uBnnoyFWQtneB5BDE2iunH5j1SoLN5GWTc4AM4WQvV3m4mv9hnCM7DfVg59ZKC39xg2xpKyLHGnJnYkiSAiAya",
  "key1": "4WzR3UsP51riyPgPQM8kPFFLuJ6CPdkT3CKNLVQvXC2muucJxCihgUHdQ1t6vzNNJez5dqUHXf1BXYFa6hUAggHn",
  "key2": "nsYqiAL2kGNfd9eFUH3AgW6W2cqaTqugsVaMR2uJo8tydd18ZPQj4emK9Why1b9fTyndtjj2XKuSXWq7oSWuQME",
  "key3": "vV6m57kQUnrYY5Lj1Wg24mVsmos1aTT7hW7NX1x5Z25ex6VkEzSwhvpcds314ziLCd8m6xphTqTFaMYoK9EADZv",
  "key4": "4aCRhS6LVrQAyUCZtUs1eRFG6J3Dd88xhFDEqurPgwSPjnkRnQX6GszxpcF2gZPJMjjPdCQ1eYkpjABXF2MnfENM",
  "key5": "3RSNtzVR87THccqJH5TmtZaf3SgpWsZL2dfQrLaEvrEmAFEgepvhykF1RyaQeiDeQMmpM4xJYWDUoaFfhNyJcHHi",
  "key6": "4zn9SxxYcLsQ2yL4BL734R5MXZNhxcUAJd3moTjYW9Vz2yNW9bvuafni3nuF2s7NhRgVx5gMyi6SH9b4ANyerZxr",
  "key7": "3pJcDtUo4Cuhy6jNVkUgcmofVTDbigRaZncF4jTiaHZCn2KezmbXTj1TNK9S9WQeK6js891T5KvN7Pet8nYcyzxQ",
  "key8": "RjoJ7a8MGPYQPwoULAS4weNnPYvWdj9w2jLxp4Avck7qv6Ys9RKn4yq256w6zELxGtbTnVRgfLn48BxhQB6P13s",
  "key9": "4ZYGodpeiFLBfPV18GDRsc2WZ2iwiiBVZhSaZbVYnfiYsU87ZjLu5dDu4Ao7NKx8re8LhNS8oAjoxd6bMyvjqTY9",
  "key10": "3gykMbt6D4w2ZuDkTu529CoyriZk8SqsHJZ3XzYx4AwXKxME4xGwFGENMrkW6BnGQq1DGZCkW1iGxmLao15iEvaw",
  "key11": "2WzaiyWBAVQSbAuQQjnaEYsShKZ3FT4YjC1UTkXDWS289Pm6PeDzoH9Cem99kJh3FVgR4uus56vDdt8zoJpxYD3A",
  "key12": "4jeyVXrudQVLt4kibndHzxxLgofAe5HvUdkLeDbCKyUWe74fh4CjyBm5iiWhzmwvCi5hRhD21bed41XgEzQzuMKt",
  "key13": "46796WGhh7aRtyBbV8NaersLxWt3H3Mq97Jzx2GxEdqHXrEnmkFNzv2Zmh3U2X1z9aHrUWcF62UjY9hhwq4ihrnK",
  "key14": "2S9zso1uPpEfGAgMdLApsQvXLPFfKya5zR5yueYMjSXWBgbEQ9YMRFZt1TzPN4gMVV1SACeRkAmqB1ffRieWBEMp",
  "key15": "5aAjxHbdET3smTwJ1JJxA6K7tFxD2y2dBUQ4fsGKPEjHCAekAp8Jbg7G1Aq1AHh5QSZ5NKvywsKuh2NhtvNCgX7q",
  "key16": "4kbZF12KcX1Kyohp3yNQSosHQifrTr1haHAWXVQene7vreY3X938dQdSRrHCeWujqBxqNQ2pi1xFRa4A8rvT1Jx3",
  "key17": "9hiEPMLCdYnPhqABEcRAmStBzzDEUNVhXEwqg3HEU88qfLRwzdn9TCkdNYPhDcjTGfkzFVuShqsMDdmSxdQSNs4",
  "key18": "4gRMPPXrghPQFCZCGXEQmFWwxgyrAjhJNoxJgC747uqRwKTvtEDD86HLVkD58D6RWazPKEZ1ERBsv6QA1gPDaB71",
  "key19": "5GJ1YKQX2KSbto9HqynDZfw6UWtza5uqFf41kpqyNpkU6xbXZiLWrpWdmz18M2CwNShfWbcVxUa3FMPDD2rBFwwZ",
  "key20": "sgNfNR7F1Pwkg6byZ9N9dyxq5Vke7siv7b6AGbYMMsxjRqQHx7LYYU6FsSV4o7ZwXf3fbNbFbPcCKsE8ypN8aAk",
  "key21": "mPYQXWfD5J9BWv56csXFgzP9CTdwWQX5dAA4izRzx4rDXPpUiuZqwpvUbYKMF1uqyXMFymz1kggdUqRitABPeJE",
  "key22": "5PAHz2Ds6E6E73T8zh4MgViuZMznXshDHN2cv8N8eG8sKv8nhqMSTGy9LiSWeGFezoYPGmzDBTH8axH6npVfKGbp",
  "key23": "36fYvRSbjSp2WRgzNw69Cmqmbt1mSjBgQipYLz13YTfhgz89bwHijVtbZXTRRMxBCzoAnyj2qjXDU2aS9XQBdNYF",
  "key24": "5KjxRxRzfD7H2Wr2tofTv6cGj5WM5DXMmu8Xw2tjxEsX6rwBmPaqwCdm7DVLy7DzKR1MhXBc1xUB6wkfbMT8yAdF",
  "key25": "5jqzAkA3uey2j7xArmtLkRR9a8CpWdtjDszDKD7vfZVwk9dwdBM2xzeHGq27jtvvq98kTNM5cdA1zFXbcMEWBdxB",
  "key26": "5PMWC14mBdcqjo8XNQ981MsVrt8VFJ1Eyh7CRxz97b8wjUypepKXfEuDPqnyxHaqbrGasfiAAuLaa6BW3FPcdMhB",
  "key27": "434WRUmaHAng8mFha1XJsE3jhBJ5oJyXwxz8bJW1x7p7tux6zLBDbQyWFFMMjY9PieTE9tzaD14yKdTHyaSaQzpe",
  "key28": "2KMKWGVbNxPV5bGhC4YN3MSYnnUmNjqmTWEkv4MFHqdx9AjAg63AUyjSxRRfR8Ysv6rxiSQ51oH5poULHfwTLd3B",
  "key29": "4Qqxuo9J7FB5wGhsYs714dmggYvB7z1yK27pBqC1oN2N3rJsKi2tjtto8FE91Q8bXNNHC64BMovgPXFTwGYTd2qz",
  "key30": "5cvqekNmTPtqRsDKQPiiqFFLpnpxVxns4Fw4H5ZKxctjpUZtdNwksyCKvpptHy4LvwkfMJB2zH6CuUFuDrnHEdWE",
  "key31": "2VKHiSLxPKyEh62XF67f6SSvXjftBWBz3sb2TqHPpn6BmUHv8hmKK733si9QPvyF6Qvb3UZt3jmQQykiXY1F4xeU",
  "key32": "5wyw4BbegTUDtmKGjKnm55GpX65X9Zdc6u9w7VgMDX1bTnbx9PohHci2mHRyyDUw8hR1LQVdtFo9NLEhtSR6WuZn",
  "key33": "5fakUUyb2RMcY8KfswWgFYebsmbiJrazsdwAdt2q34LvgfHADoNGDjfaixYvcZ8M4vAanMiFupVZ8WbaHQBdy3sg",
  "key34": "23xppJk2std7PCvHCdK1aao5gLDzThiAj5p9qHksDkKg9eLqnoLdMZFCevQLsZU1VVsGRZxw9egffVBet3YCzR1m",
  "key35": "66ZiSnzpmZvu1kkUPNy6QgrxsGvCaLZBS982v5ifNTWNnzw54Kt3MLRfVvqsHakGSJ3QPFZyB4Wvy3jgFKn6eP4r",
  "key36": "Zf3wGY7UpnFk4ykJx6qGGYePLxevRxyj9dQ1VCPdXcTfVhKMfMuHXJCHE8Aexk6F2qe1n3aKmQAunq7h8m9E488",
  "key37": "5eBHTSoskc3ETnXont5huhXJNHvDR6XjLjCz4ZtCNn5vrUfnGCjh4835qCvkPTZmCLwUPXHdJJDyMaChwEsdQkeX",
  "key38": "2tsFW7vvU5CDFv9bS6ey4Exy3ycNev7cQ7T6XjNPBbA4A1ZWNyeKwRji2dMQa8P4fDPtmZumR6eQ8jF8StzRGDSo",
  "key39": "3kTyF8wGDbdMUc7BvFt3r11XTWTqoyYTFW49AVXJe2n8wuVbGhhmEq1qAUMiN4efw2bCdsoJ8vp13JsRPNP8DoVW",
  "key40": "56fttm31RaaB9hhG7qTptCDy3ByXEAUfZkuPo6QtvhDnpkDfxr3jkqFDHJC7de8Mrq2AfyFvf7WB3bFYtm56Mk7j",
  "key41": "4pw6nS8Up4g38cDG9GaypopLj821joLJciFoWov2HhRPDrtoyTUp1qmzCWLat6BF8T4H38qbWQB9UBqeQYk27Qjb",
  "key42": "STbHEPBKk8tNdAK883KMkRYhLQX4ggmFZP7NnhaeTg9Eh8BT6k7mdBYS7wVSTdVj74mKqNPXEzqebGwsXeJLANK"
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
