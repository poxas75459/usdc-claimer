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
    "4eE3nmgD4KAkQxWMFaPkDo5LWoo9XqirLNwJUmsZtMzQ5myxE8HqRKAUyBkWaJvBQ1baeWou2KgCPp7WhRWVyTPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbDyFQoXmz5GNvH5YQQtux9pJzWzgbtnsg5hNUEFWTj6HqzhoyqxmXcp4kKaguQfsLoutZe2PjwhiwKeRX3TBQZ",
  "key1": "4YgJB7fWFxvDq48aRP3TgqmC4TMSBSSoTTagJyQUa6Efd1mo8PTbCtyNADtP2juGHBYJSZ5dzYEFKeRipDeBtzg7",
  "key2": "4hB8475U7kbSx3d5XtHdc2s77kDiFWdULEvkxQjcnjuwnRHHUn7k7QkcD6wktp5xj54Lct1umqgj3uqKQReBRooL",
  "key3": "3Sp9ffEmuDARpwCzenkPAQrnQ8WXSYSctgXXvGbo23Ugxan57c71LBE1it76DdZNshwa2GCjbNG1f72z39ZMpxa",
  "key4": "3f7fAe6PGN3oiGcDhaJXW5UYdWT4uYeYNBXvo6C4vpNAK3StECbFDL2HydqBu6ARvUEA1tiKrp7UkeMFetdunVoK",
  "key5": "P9tMhuGMMj7vB4n3Xk1jnKbpovxiArjQTAhKVucBBAjRvULeiVT68yxt3PbFbuQArRRwv1PCPwV9VZremkTF95G",
  "key6": "3dpn5H1EbFE45fHwHoYseTKZDVKkN6gPS5GR66GgMWFBbwrUPLSQQGjaHk7RfAo9hobPHZQYeQhCiZQ3ub3fmxsU",
  "key7": "4s21qdMBdVWHxbwb1ZWGSt8N7TfL7nduCf7cJCWVnjxpzqrUJzNSfw81JHDDwssFi6fN6CctrtoWaGtWSdNbkgeL",
  "key8": "4of22M5NKJDHdYcJ97DuCXpp4ukJfSPGtW3AtYos5t7TgwGKf938s7ydTKYjpad8BbFNENX7CnjnTuRaV5NzKQni",
  "key9": "51YZQbD8GjQE2y1shCwgRidxca5R2Hhad51sjzSTTcz9yDpZcePCEYMsHzA6ksHwu6fjRoBEpVavUftE1Q664XsD",
  "key10": "34wbAFeLAz73Xpnb9pXidkLGobSUsdVce6Nnd1jGZvAa7n3CFV2yCcRCKRBwBf8ooZ5Sj4mYFM1MDqjckBgf1e3C",
  "key11": "PS6DNqvwfQJUXvs2txPQCGv6v5JpLftbbSBVsv1PEqkDrNpZAyBYUSrZRv28pNh67Mr4U2CecaW1kJ2CUHbZgBX",
  "key12": "4HvP1KjxpVTDuV68dVAVEMRtvmVbdNNMfwPLXcZffoC6AAAqu3mwqmTnneDhKWrVjDZCvtCutkhhtyLj7pwABkxC",
  "key13": "3uXhUd1YnohhuLdmASPLur6DKc151wBcXnPPNLp9ZQ2KuHvXFg1hmLCfNkHADDvFo4nheG7zinG8woxgFWW39LWr",
  "key14": "KN4bhCNTGQWx7LmQotFCsSUpMPFnWWuHypM9DuiUhGvZLBWbWJsM7EzQZa38H3Kr89qm6cSJNB9Vwfm7ZQpJ4xj",
  "key15": "62yYD513rhcRd2eS9Vd2CphKRcouWs3XMqJqXKdPmVsh48FtHwWKMM3WTEQ9uzFsb9zna3Yh7aoQ42yuUcNaZCJk",
  "key16": "2j3DQFXAmc23Vk5RS9pwBG3mDQRyLfaPri3GqHtw5UobGYnoATJJ4JMytqP9YL1HuZXK9cyWCNbywucJd9Qgr1Go",
  "key17": "5eit3Gy922gNiGR2inrMaPnNPbzwLimgTLaVsCvkZW6kC9B5NFwaCVNm4vxH3K1RUVVhamDky26egDnHtTYo48Gr",
  "key18": "2vrZTHnrkZTKrh2GcXtU7V7ow2yPEtyVdFSrcwfpLzcUK81FcCFzvzD5MV2DCZuZ5iRPKckkgvAzHG4QvLxvLg6z",
  "key19": "4Kz8iA9E2WyYM2RxRCfMYbCW73PAbHCBs9zGQUi5KbDNHXhx32VQMqgFbNuN4cevGPmLyxgjdLQ7DfHJefXv8thB",
  "key20": "2FmKSPZZhqrP3hbW9vp4q9SupskcwgYEnUg4qVDpkBooSuBN2SCFFxPzVYtzqjgFQBWQ6hP1Pp7QtHm6ZGaVPZoY",
  "key21": "3VibUF8VLMTYqqcDzirsrSwJzLnkCxSqqKinJhEEYrvxNJCx2v3xKoZUUg9rdnK5eCBnRDMeco6B8sWMKgTe8VFf",
  "key22": "BnG4ZXeRTs37hYWdRKLNPDwUwpXin8H1BXjSp2RNfhPMiP8ZJP8arEbrcx739HdQAk4dHyUWi7PoFcxCSQ2WxVv",
  "key23": "2GHzDH2FGty1rY8rtaa293ApC4PB21kAmZSXJi7iGoWKr1urLpKeZRQpMz653rHv8iiztro6eqXvxmECpdE71U2Z",
  "key24": "28gqRjiPvKWqGvpPBEhH6zr1fvLhAunfojNGEirHS8QuX7ckJf7qZK5RsnAXveAyZaxYj8ska6drLCh5RGu8oM78",
  "key25": "4CLst34gDijUgoo1N57eR6REi2MP5gk5kYCh6MX8SNC3xZEx1xG2CgzLLcqrSBELvD7WCNuLz9XCbv8GjUedeE1A",
  "key26": "2MW9h7c8kxJo9McXu3q4LQ523xit6bAjcQXS3z1hbvmTzxqbkvE3bKdDwrX2PxTub5pwChc8Fpqyx1rrALQ4o825",
  "key27": "3eta3NK3xTeB2vMux9xy735a4x9jUH1rQVFSbTCe49LpUsFzJabmzjroHGemEWGaHBqUmbfA3YtkwnXJV4Kv8wt5",
  "key28": "25v3tEh7eTrU5xBDQbvUywjXJ6oVHpMX9xbB4a8LugFrhaPrSWwonc2yhMHgMjqC72MDDv6nLT6zV8Agvj5jHXo7",
  "key29": "39sQKEGRrwDdmtVNLRnPieT4VjgfwiX9DqeaByqnR1ydRngCWsfPDXrkZTD6YJ5zgyPaqKLZawWuHWzZXX1Fms1t",
  "key30": "2CZZQHDvLnjdZ8EaFBNU6FKRGL7Da3HznuUEbtLicuvWFrZe4cACeqtMLYyqW9sVUEBih2q6Y2y5JQgXEumMswEr",
  "key31": "4T3GMhoyygbYFtKyGRmog16s6akgCbPEznNLNG9autUwaSoy9uqWjDMWG1gPgqfrLWJfj4UeaS8iYudV7Td4auzK",
  "key32": "36fbbfvyJSZKeW6uCZsAJzEobWfLLiZpPA57785QLmFeJmwJZoRnitTgq5oMvxkyQjjDWeLykUjJsnQb2XtpQQg3",
  "key33": "3c3njEbr7SLjnht2QbAuKDWDgZ6GXo1gTJbAjcockrY72Q9e5tRBefvzbNtF7dT9oxwkCQRYe9WU4pKjErcB1RjY",
  "key34": "wzAVXokTDYjRSirxADgYvzMfzD1pq2Fvy9xuGVcyfkr9AKWTgB1V5da6wB9xntHhdrchPtUdMPSYFDV1s9Xd57u",
  "key35": "3dVkAHsmJfvrxbqrfMqNSLChC6SzjRSzjeSQ1XhoxxygeKCT6XZeaTKqwHopc7nmYBVJSfBGNuPtLC9uAqJZ268b",
  "key36": "4pTmsPgsd7F1eJdyufVi3siDsEA7P9shw9qph8BsJ7BLMKBfCWJYPSbZaQhcSfpfwXPcXtLZmvN9rMFcL1kgG2Ph",
  "key37": "24b31XZjpJAQBTX4K9PVY7XpcCPzXMgskFDuSXNVxFHYNnPJEnewPn2fU3hT5B82PH68mVNUtRQbGvRQgpGLJT7Z",
  "key38": "3dJARyCfiGpWukXREuKMhRTpUcaHXZt8svuMkRq8bhs6EPXiwQTgvsnihhuqhApYYrSVJnCWQznw72khA2zkerB6",
  "key39": "5Bueaf2KgScWj1KKTBsjtjUaoYTAuVBUfXhf6YKvqk8ZqW6AjiZQqWDsahzsv3ChPTvw6PR4PeCNeZKCT22Qpfa2",
  "key40": "2PAc5JboJ6HEjzEfs9vhZ6p2qUu9Vabjd4Ngv8WLvd49X18wVYbYfN9JY2hFpJ3LJcYJL7tioTdn7hBYqSYDdaxB",
  "key41": "3cHwvdymbbHzDjAhQADYzqdPL8G6fKicCcxYcXb1KpJdMgtP43oPxtkmy2DXTVmqjKGU6zST3ZgN6gUHbRkqqotZ",
  "key42": "2pMgVpLGweJ6foBrr3o3r2Br7Q8gKXCFXrKGM13gCpELyRZdgP2dzAuym4FSvjNjW88Tnf5oo8MB1AM1tcwfbYxu",
  "key43": "3QNtAZxXeyZpMY7dS9r1CQcDJdC1re4f9uv2UAdViNbz4bjqTWr5As4VvSGdtdbpTQEQDbmNjYqvbMeqX1qLDUXi",
  "key44": "Bx65XngRgB3GbUzW8j3fUbfRT5m1EYACTaEddRTFpLP5RwecKWxKSSQupkkrw1W8Sue61R4SjwLwyoeAvUSWiDa",
  "key45": "2SbmN33HzS7tWFTy94rDuVfDnygyuqzM9Qxe2YdfmE9bdduHESQa4v5pZ4K1jf6QQLWrwyyWxrHU8yNhBZ3urDMS",
  "key46": "2j3prbuMsNKY2LR3riYgPghexApMdwFqPhnmg1CzrcsKgcdjBgMNJu8K8YJEE6QW9RBx6VXQ79sXTZkPTBmTwm5Q",
  "key47": "2pmsvAdnMATu1jzpt3nvprKu1Bk7yAp2fzeZ478EmvmTsFunFynSNDqFTzmbUkD22f2esDfFbbbS9BYWFmpaG66V",
  "key48": "2ochPcCB2S1RDPC6P1yZxXogycm58tKpECwNdLbu4hv8KN6DkwopE5Q28JgkVoofvA8DujrLFMGj2VJRedDB99hC"
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
