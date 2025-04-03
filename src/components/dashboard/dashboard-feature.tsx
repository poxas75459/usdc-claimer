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
    "65yaJGvJMteeJ3MhKwcWPMtJsBVk9enbAMCrfjVpaHmWcUWD3ifu2bESM3KSz6iggckedyLtTqSoup6jrHCQqeGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uqsk7EiGVsxfPJqhRKPq8zVzbDKbqGqy3DMsHAPyt6oxtC77zt2fGEjcBvApBwtZc3RkRuAxFy3MGTUER8EfRzV",
  "key1": "3DfUGB7jwAkA9Z2mEZrri5DPYC8T5NsL9iadv6GwMiN8k88EJVq8QFeCNserUPVx7Wsbj2Yfk85SEALrA7ASrzeL",
  "key2": "2NmAFZcZPCkjHJp4jwwLkc8AF6CprKmqKBahvyVBmemcgJr8zh6ToM13iAr9R9ZK6QC3tUrg2uNrrtuWeBiGgV7Z",
  "key3": "4Yoad6HuPBf7MUhozW6Ps8pPoHRVpxBJF4aVyENYJQACc3c5QBpzpX7EF3hDiaCchmzuuDoW9i1QQDxXTD1mTx3k",
  "key4": "62JjNNYhhaF8Aek3QdzjRmLp3PmqH4VbRpxsh57BspyXhsNBPrgCEti2PSUiLgdUR7PukwZ16CfwTvvNoSgV9Aps",
  "key5": "4uCtRMGZ9cfKAzgmY6N7iai1W4nk4otcLBDeucPEtNqhmKw7QKTdocUPKXNPydPLMPYbFRDYYTxQzSbzjGXAcf66",
  "key6": "4RUga26Kw2NmExgMVYgcTZfYAhXUFYS1bMPcC9PVU3g4ZsAAQdkZRjJ6drDe3TVRcgWsyvjtyBq2juGgDih7Dqqp",
  "key7": "3612devzs9uSJkAKKcj9PPfkUQmxkHZqF1jhyZ3UxTQ3LYQUZShxmZT5NNtuDxKtvqgTm7YeRGCAzRkQZziwMgZZ",
  "key8": "2eS8MFpbSye2vngzu1T2iacuQeLurCuHhojnKxWGVty1f71WEgiCmhXPXzhZgyHHWX42NuWgVE7e4gQo3zRLy7d4",
  "key9": "2MJFNMKwNyTs2gfeJ1LbMxKif6hYVkwrJHcC38oNpn1zzktwhPfc7YKdsaBHEZQ9n15D3NZWt6XevLUQVMPn5fMa",
  "key10": "4pDs5TAKE6NSu2nx51dDvW6sEc8veeT7sf6u5vjuXDzEALpanKVm1heT3E1GZ9ayzJU99gknu4GUxUgjNDkQ4Gk7",
  "key11": "EeyPvmwsxH28DgpF4bATiNiFxNrdWkMTWejqZr33QDdxoWXNKbQ5BZnM2sTWPPfkt8ypVp8nPd59vwCBzasodss",
  "key12": "xj6oU1mjNpZtvR8h6e1XTsqJ8PcMX1NYNbXMMMPDyWjLqtPcmtWQpW6om7utDX9MH4SecZCr1BNpzwcJeon2Z5C",
  "key13": "9pbTVvtcbUK5XvWuS54iDwbJzxfDCGfQYNbjEkCjy4HRTcYdPJcpkcfnFfc42uk3fma4JRCke2MGmUD8FFUKSfR",
  "key14": "2eaMbs7Z7SoXx2vexB64ErQZiRsK5kGva9CMxuRPK49yE7KMV4AMchz6epDaCVZM4sbopWuL5gXdYx5aYhNyiyDg",
  "key15": "43HuCcra5VN7oaYJviVkwxtmhLqkt17qbzUJd7X32phFytVCTDo5nxfnTzUaY4pyaaC6fPnTui1cyWr1sfMW6gJA",
  "key16": "3K83h63M1Aq4DJY9eHQ2Tjrj7qNLCrQWnkCCR6fxmdnHDVHNT2BgGxD6EcNw7A9nWqf9KKnhVA4FntijuaYV9eeu",
  "key17": "225DQRL92ZmCeix4TVTencjt1dPEvtdiSSmbhG86qPNLQHrmRbLC1FtoqvJZLJ5hZGmzUbWvmNjgu1fnY9mSyuSL",
  "key18": "2h2G9SPvMPQYDF6ShXRzm8aGSCFURqcnsjtPxzXiKcYyWdbc6XJ5ziWQMqj9p6EQBUrsbc9gaeWVrhJuXmjPaRro",
  "key19": "59DP2SHnFcMs9NgVUjWkJ17PrG6CzPZdDCVxEU23xmmR5QRDWNkY1twRmtrkBpCV7YXQTwVngjAUZxwFs1xNVaDA",
  "key20": "2pg8dARZdDQe3c6Zj3zfkW2B37KKarv88EGAQfJPKfNuoWAXKchKhdVk2sVW5dZjeas5LjPYg4c9fsyrfe5rqk3U",
  "key21": "4rJdCT9AVyiXCFJFHJiSwGsDqsBxwfQDr8m3EmcR5i7kMgfLi6xA1Vfz5tik89pPd5DyuGHWZfQReQXej6LoTZUV",
  "key22": "zzRFPZCY6cQnZjXKjoeSyZvmfJJZvbkDj1YBtZWBjMB16gVcaz594yu7YWEjtT6KJa9YeG6D1PbhupKhVjNZgSN",
  "key23": "2BE9xMH3Nx6fvzxNRu3kXY8NqgKN3a6HxHVAANi5JE2FpsccZneWMFme6R9pV76FXCvM1G3bGmBBTx8roUFtJrfF",
  "key24": "3Ss87rNJaAwHmjM4VKPD2AoAiEr2gWsMrikXpTCjETefbn1f65FzvPfrYrvCx8MMBnEFiyCfyL58qxrDzEWJLECw",
  "key25": "5FKA5JaTFAKjeaJHRy9ztjLEwD2cfok4qBr5J6N6LooyQZSutnnS2h1F45psKyv7h4zReqw4zsuy96fSFFt1YR19",
  "key26": "5DAZimCM71bdLEEZgNhXShY8zwfqCbGwpDyup5V5tFKT47E1ajd7tnvN68aNYQSFNKMaf6piCp7mDsmhR11tyt18",
  "key27": "5tZ8vcebanDNcmzPLxDCzzBrWcAe71gRRZ7a2rwfATx13azKcq7RTd3qPfCkTTfafKFKXkQ6NMJoECu6H8Uj1dsb",
  "key28": "4xLsozakXiUsgxSgZDQZ3QkG6M5VneeXPGnroZR2tDyH1HXkUWsXDharHTgPoiD77KZrPcr36urHuFUfzTt9tJat",
  "key29": "2rUygEzyfjwN71QUvYv6bQmN2vbTc3j5N3SffAi9PVpfoJMRpihSpeBckLAxHnDyXcdqtqFGAGbkn9SUEF78is7H",
  "key30": "MB98PiHmdc8gqKTZmvAyv4XzhQ5Hyzeqyog84oxrZWQUBNdRRMSiLEhWmnqJXsTTtC6KYEhgEKFURNjaoxsLJfk",
  "key31": "2docQSRgD2ieHMVkCELxNdxqTLi4kNGpJ3BHCudWffVwgCjdWHVxus7wwRaMwXSYbrzjX9R3Z3nQuJ4YtQK6eqQj",
  "key32": "4D2bWNubE1zBEQLHjhUeWdNV4LMLYDGSdhhwAXAgDXEYe19N2PQiazLYwiHr6qBQbxtLWXqSTxLkEKccxy9vx127",
  "key33": "1bHoYqTeSCRP8j2urgZh6TeMpSNdCKk1ug1CrziAv7ohyRAurGYvskCS6gsTq9qimkY72WCSLHQWfrfNBoDmgsz",
  "key34": "5suRWvd5NRhiJXxGhaGnrWBmma83ZQttsLBkaAhytJzDebnfKgzayfb4XKFtjJZrKGg8UFJpniE2w84imJf9i983",
  "key35": "3ZoUGw9nk3UuNreKKoTyT5Ggtd9oW1FQa5WHWPiM3bXSd7UTtNm6MKeTr6cKsR51WRoe6kNeuxHKCc2mLzMhDR3N",
  "key36": "X2nftu7peuoEZUYRWBXF6tfyAf4iFZ5NZdUDJJdSNLjoHwCjE2xzFkNDNfPhimg3VG9sv4gcektwpKnehRKqRVh",
  "key37": "57JUNmtvPD8Q5yQT5zonYwRmEDTAgeUNrTqfxzXvHMnNLU3LxAvd5EWpAXMoHGgwb9izU6bsNCDxxB5AuVPUqBL9",
  "key38": "26B5DPW4hsvj14Krgyhj6Qk48b9nBKmbvQ71aJgut4TwCDV2mhnbLS3WGovAFoUC9cb8PxDkE4TVL1Wpmqi5AoYM",
  "key39": "5YKVLCHysxXXuLnb6oV3f9HoJpx8ZoZGLKrY1vfSuncdDndJ9DXapSwFMo1cRFaCvXXboajLo5tYapjyQzEQUpCx",
  "key40": "36HhcEDhudLDzvuPTyYQsibkWqjEShFwXFETpoAqQQKh9kPxrQjN7iUrTQC5GcAbm1vKFiVeLxgVnu8hLtNAkP1o",
  "key41": "5SAyL55bQYiE7Ae7sv79DcnTca3g1CuTNoqS9Kv4s7MRijx4NrgfrH3tLLEEesfqme5CCMHzNXEfEbi8rfLut481",
  "key42": "3qJauJMc5jAsdB6mXJyFNdD8p3rjcxToh7M5nPD9egWy5L9MAERUurwYNBGxDxtJiHbGt5T4cazTTx6Dyh9Vr3gS",
  "key43": "49Kru8VSAC7wQdR79Zay8UNNCXwnGuoD3trwJ5u9VMKnfX9y8uK2E9Era3Yu31QSfMT3cKejebqPZHH7fkwwe2LB",
  "key44": "51hDLD8RB63ZC81n3DGeC2yVkQczvnFGFVuoiH9JMceNCr1NswnGqwtaCxz5B78qHR8HL1a1jdEazSPm17LDDeEq",
  "key45": "5Xtrm8V8LGMVDnuDiZ7cBjD7eRMJ3sLHhWsX6xr5FPW2jGEivQZgeMEEGfSaZjLPKHwUzdsWUcKnAnuvvaXDQEro",
  "key46": "39WhauM9JULja4r6R1hvy1FN5KmtoXczrC1Gp1ssr1aDHJbQjSzBMKjMhFaZ8AP1eGEboENKdgQriQJAvSXceh9A",
  "key47": "3gH2D813a2y5gVW6WabEksrGokDSLbB94SfBtFSqqTXyBrUHfDYVJ4kqZbgMw52CeU3z6qqNJjbuT3YhTy1DtgYB",
  "key48": "52LNVVtYMFRzWD1B54dBScQrLkfKWoXgXC8qVMo5WSJVwKA79UEnw4HYAU1h5kCaS9AFUyXboBbMQjMkwHHCEQmW"
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
