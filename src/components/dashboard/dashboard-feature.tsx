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
    "UvRw6J5D3sE4PW3VVcyvSCvBxRkSdEaxWD59MBfVoNJDymF7qcWGxsGWH3c4xAV4YB4v3SuTtGwUousRob4DqLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPA7Lxo9UbhCAqawerDWbqoYtFzG2uMfC5meLwutRmigBbrzVU9sFGUrU3FpTwxwgkSFtbzecjVQQ7wLQq8yS7H",
  "key1": "4fmV2iZfNhe5Y7dhs4ekdp5fgnk2VuGuwHwXJrB9NXZWkV2jCBBdg2CF1ZXdUvBEac1z5EcEBTuPiapHXQ5m6u1m",
  "key2": "5bHmZqSkXxBzr1knxKhbY53Cz2U1pWE8HMdRGkqnxptyHrvv6A2UAYPd6Y2M295pCt4R9NBVGKpS71NfZGMye6ok",
  "key3": "2C3SWpu4cUsp2rLFjRDYDjUC7qBjgEx5NGxoDHDZ7yZX6URFbqr1A7WYVxdcmFNecKWjgHd9ZTV1CFPC88BSEQ42",
  "key4": "2zmyoyVG4rBJFd8hAYgnCw8q1wBhqfBGBC5idUMnHUXU9FC65rdJMXsyWUrr6z78WacwdF5uo5pc5G9KMCQE9d88",
  "key5": "4HQGJvx9MQ5yAb1d188tA7i9kfe4UzVnqmNFEeWmhrpUErWBgcEJaCWn3bDm5uQLPJed3xfmEv8ShtvV56wZeT6h",
  "key6": "2uUShWuHMbJmHb9zzsTnr6p2WApFabMa4vZromqa3uQRyPZDQpPC3fYTPhrWvCZzMjTvYcST2hNcUdgERNx6BdsT",
  "key7": "3QMDdbEFG3wdkRkQERCtAWVrrLoC1SnZKuYpN7EkBkKPUcaDLpWmRvCjptL8iYyX3CYT4r4NEJ2xFEZN3iyaySLe",
  "key8": "29a2Wa33RN7sMASeDaBhDCZ5YwnYYA25LGenrGQpTHuhN9M1BsCdzFzBsk85k9cCBJASJJX7fWRiC2w4KKeEbD7M",
  "key9": "4AcjYNhckDtEHyProte7axC1smxpboZnQMuivvdBANXm7gK7nbeMZ8HyS1JHL7ry5NKeiz6txaiXAUB75jKLK48P",
  "key10": "NvDiVYTfyoCkifVi2xxy6dxf2eo4cSmnUvf2LCymnQeXnWrMQMbJtLm6kEkGTU4hEhQUHJDGrEHSG3Hm7Lh75xV",
  "key11": "546vT7od3BEXaPcVVwoD8cnWxo9tP4Qcs7KnKrKkPTngZV9rLuHsQ6MELxDH6KwrTxBEkqZJCY37547L5gmfdguq",
  "key12": "3H6qijGsAyABtkZeJiFA1BycFFuw8wGygDyi1hWVCgsg93EEnKJmoNqcjBYkDoywMdWzMEBD6pzj8MGrGuWxWpR7",
  "key13": "5MvCkcZQzNu9B3wTbon26H7XxYTU55mqdPLih3CVLwwtY34jcM3vdfyVLXpsnL9es2ojv8QH39ocp3p1J1DMus61",
  "key14": "4npdixmEf8PYNVLtJAM3ikQtjy2JfBi6kURK4LSVoAhwkPcMFwZ2Rtbq9WyoyH1vUmk36c2nkAtByZMj1eTUUxX9",
  "key15": "21BV8KXMFNphJnbjSABSUQnu6JqgeqqfGWZAmcW9ty7J5dbG4rLjvZoEPEof4SSPJFw2Px1cFW6QAbngJLgBsj8i",
  "key16": "2nYFTemRL3UiMDqAx8UXjsYxmaTgpgGenZNFm6dDUJ7gkV1xw5y9yfy8FjQhBnpcPsSyQR5uF5inKvGHDHpvDC2J",
  "key17": "adtPvkBkTouhz9WVfu4BCiCdR9ncYvQKpNhX8JzvnT5bHEZ6NFeJuqvtBpPX225FtZyhVd8Bef8aY4Et77E57wz",
  "key18": "8nobScYAGyWSAHvNxgbeQ6n4yhDytzTVv7V2vhBgSZ728rrRckrk3rxexuDBH2y2gzsyrhECAULeqJ8xXdEN4sH",
  "key19": "yQVMsVnePqyitSgKF1hDqvkg6QrESTqgP2ShvGG9yTAE4tKddxm3swYAzcwihhbDr2Bomu5kxx7a9h8Njh7C38y",
  "key20": "67PiFS7TsLgg1gDF8oknhmW4ER6UmsZQnVMZMjodoyBzLjHtvSrsWbmPQnnwfuRatxvjs8mLi9TAg64hjfsh3YhV",
  "key21": "4mdA2mqZAGhuJrEXYCMtc64LrsH8Y7jagA19BVwuW6nmF3jYxstCAuMg7WXDaS7BmUBvDCJWqe67HrL7k5MDBtXw",
  "key22": "5vu8aBGCZ9hz7ULyKGhMApqBJ43A1Xyxvbxwv2XbCHDk1mjJSCu74cV6MmQB8JipnbDkJ1MiRPK8gaKMUS3VDKWD",
  "key23": "5AzotgZ1B8fM9P4vBtqAVY5Bn8SzejBvxRJMSe18aa5uEiyBvPM7uK7tRNwYAUY2xaTKj8PFFZppgcvhPsnyPvaC",
  "key24": "2Ffh6EXJSGmsu5xBXz1cL8zSKiyKRoocHXAbH9ZtRTXwwTyE6d259hbWUVhXPXTZk25uHFEhPBGKoYw2439Dgq46",
  "key25": "2q7BL4Zwj3QLu472oVdZxUehuhXaGUCRyr2qFFqpdmTD8YESBH96xXTV93pLHQLTTzZ9WF3QbWiFybm6WvUUjyod",
  "key26": "4p2nQUrnHsQzG6J4V5rV6ZjtLXwu7fLPWEYZfyw5SZ4qqHBgCjGFAPmsUoWMuaKZ9AkEEZzH42jJ3xGA3ejB7LbN",
  "key27": "2vW33GqWj98cKU1RV6osVPW41rFRpifP5FTinpvFATcH8jnPof8ad94Gmk6f2uRZ25nd5f42mAUpBqwEafH9C7Tq",
  "key28": "38wmwC6owCe2ypNi5mjc5AV6g4SQuhGvbTiKrurKQJGTevBuhWC5EFmbrxqC7EpbhMggQYVeYHDxJzy1uFdKd4rF",
  "key29": "44Yryv4VqT3d5HavmdeyWnCsHpV7S4FgWdLrbLbY22HYMN4Z9sWRY5rYAEdehGQ6cSvK3UbofbDhWFNfnSTmRMz7",
  "key30": "3CjUnYm8NAEoSDBZ8oEKKupAQE3zSPwiin91zvrQWrpvZibgvNF4vPKyN14pUuiFxogWrC11jhMogY4cDa6xCwCN",
  "key31": "2d2i5VFzucWfQ2gJMB7djY44r63iJ8qc8EsBiXZQa6RVzY1icDDToAbQQ4GL3ohAzFafDXz4czHVrJyH1GdHhJSt",
  "key32": "4kNqZG4Sp1a8RhrMPWFVUt9yL6oixusgWCcihKJh8e6ztg9CqxHPuS3V4itiUQZJ3krArpXregxDQJ98MDj9GFL3",
  "key33": "39kHMhLXHLak96Ajk9MsCpifm7EoCuAFbheuCKYdnnoUCnwaWGSazM8bKi4ZZLC5BHQCxzGG9nPtxfkH7DZQBYuN",
  "key34": "2cVCcyaAvMXqyzfi2ZcvP97TNXGWhRJHHeN7NgbafyAVAkLKBLY7tCS4f3BYmwE2QS8P45L6d1z88eURBt3ksMQh",
  "key35": "4dkViKkg8nSr7pSjBj6qYxACTHVcoi8ucU783Cs2ryTv2mDib44wjvMH6tVT3gsKJoeHkaEx7VuGzrHDLJFsrWwV",
  "key36": "qEijEKHUkESG1gnUv59SWWCLMZ4kAk3YAo8zxNm73iL7buDyLKKa3bizE23eXg2ftLYC86gYCgdNbHKACoS6rxk",
  "key37": "54fPXSuSPA2WxTbus7iLnCNDZ76cMVbf8L4DX2qeDEbXDpeV71xyGrx5F88Hu5cDizZdChTw7MJ8SfQd3qrhW69m",
  "key38": "5L6KeqTBhvYJ7JhQnN5S8TimrJVstiBxbjj1fmLjpDHrJWiaUvXQSe3yftQtw3Yb38nyQu6ZqNTj1WA3GhFQpDFC",
  "key39": "4iocATqkXHAtXbpSpqg7Loe46ETBZe4akiy2ebizu6Nh5nZAC4iYCvtPKuByEYPoeSP9pQusU9YBNpvEALtfUehG",
  "key40": "4KowDR96egNs9Tx3sZa3egonp6dQgQq51BQksS65KqmZD3Z1xNMzfuHyZQXZWjEETRwSHVSh2Fc2rP6LLz5JjBsv",
  "key41": "2CXPtqhBpmK9BsVkZJwnQKxdsWsp8yPoSLV9sQwJFcGnJXbr7W4uXxMVTWDnDjXFG175ffCxbMDBCb4hwrK9Gunz",
  "key42": "56gRgrQVWpsLePvQQhitHco979afniGD5Chh6bHqYZ1wBmfX6kSHFypo5YMWHnskixe7zDVBcVYT4EZfsrZQtc5e",
  "key43": "55MLe4ugN8Bp1p9vAMufDW3XauJddZkq1noRaBKE3VAvtQWVL6YZzGcjEL71GZ9RTqsp98pDUsUkGYCpFgHfcJWF"
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
