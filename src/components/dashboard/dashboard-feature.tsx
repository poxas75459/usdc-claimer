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
    "4QmyFoQYjizgreLrHDg1EBpAweSiZgfvGMTe8wADjj7RaWDru4Kyi7R4pEGTaLP2kw277U5nMuaFxRGkXaG8TQF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5vE6H6ChiQWFufhuthEUPwDvKkwymtMxgNCwMuVYBsrLRN54pUdSCJSWTfZ1NwP4VXNfFMWZ5saVdo9tYpyBjy",
  "key1": "5YwQTFb5FnMwDvbLcbApKZPixH2hvyAyeyrGvRTHYWRVyzWhbRstRbAz4LjEFmsdAk8docVpt5jkNfPTsMQMq5Qd",
  "key2": "35SJ1F2waYEigt6ne3J1gH9m6jTLehf9UdQ6GjEx1pWDC8Yx5NpWYdnueQn8AHRMcxXgyryNpMhdf5PMbtYVRXMb",
  "key3": "gkPB8cr1xYeMnjNFJtHbqngjpPsM3UBniZt25cz1WzqrdujnGstEtBmXvADLUQ7mfptPU8kTjvEn9ssmZjHn8xU",
  "key4": "3HUixfXZ1tRsj3rH6CpfLGw3QdnD6Qr1zQRzzbvShgTvv2PTmdhdko547ojJGGycCz35BhrRrR7wfk2jfp5JiFaM",
  "key5": "3kjzYX7ASZ9JNV9G7uQC1r882azs8cx7Bnx89xNadyeRNVnsTKq5gEDxnuiSCBEs5UW6NB6B2WBbSfztPXyrUaZZ",
  "key6": "Hzi5uVnjLsycbyRf5Ew21c5akzpv9HrBGdjpBaymjHc8UQw8banrnewuGtBxAzpMxTv2dzi2ATdqbT2e9oQpHuN",
  "key7": "5WMrBnhZzVUd6nHznDTavDWn2MpyUNJFmzy95irDhzkZMGTPfrw8aCQW1iGGWUEFK14dcqYTRunwytkmsyyu2DUp",
  "key8": "3Tg74haoK2zpURcKvhoW7ASWffPs7LAM9UsLosgnc2VoHDEXRXDPR8u4V4yn1N5xpnAAJ6idmD8AbnB7Ppy5MknH",
  "key9": "5FFMHMMwKUUeUFcF9NvE5AjhKh9CKMGbSBok3YMdPqzTtJpApX4WGypLhqCBoc6f1hor22eRQi5rAKgPURxG8oHC",
  "key10": "xK3Z2UQwfgivc6s7ShAo97ouvMMnEbSvTHJ8S9ycFjfzHp3sBBkwXrLddwfcYuQKf6ZPXnb3Qx8oqAgScATxUSA",
  "key11": "5ZqpexXdVVZU9urkJkbjcH1if7XQQSQyDfk9uTjbXAfUF29r9RGnYxsyYczct4ZrktmvFofjME6iqm79uuJ75xbF",
  "key12": "5fVeVsiDnXmAwuEvAmn7aNyZyrjnsCtvc3Qf4DxzxiL3G9npvwgpTbmMUwBS34uor4kDEJcoZAyKNVfNtiFCgyCo",
  "key13": "1fFF3WbsnxVw8pBdGar1TZoUfLYSoZfSkXA8gt9hcLtH2KKSv5jL46kXHKCor7LoFCUrWPDsiG1em8fNjjNSsWc",
  "key14": "gGiSbhTxuWCHhq1PMdKk51Pd9Y8mGLSdcjpupgbPeKvSiPop9DHYdS7KuQjzi2hGuCBfYxNJSuHxqJNzyAaiNb7",
  "key15": "5yQZB6ZMqVprJA5PmSCqLuos8VH8w9vCHwjH7fiXne7qKPr9PcgSpTkdWD1qCV4jaaYcd6R3YDcxWhNT9APzrcGY",
  "key16": "5PsZrNwAJvUYoFYfTgqjNGrxxyeFgvFm6qDCDDGS5Mv5zoRQhNSQmZh6kV2YtwfVfNzJAVdEmYaCbiW853MMbDtp",
  "key17": "3QmTzVajivA9tHmgRfAB7bKZk85CBYHp1mRyEapHRTwjXXqBgA2WJGqfdmaLbq9Nw15tcGnGUxyEm63rTuscYV9Q",
  "key18": "go5y4NtLUc8ktHoJSGZRtUJHkA8S6F4fjtBtdrAHaSmhmLJS3KCz4piZvZ1mx4dxi42NmWu3gDJvrzVm26ygpRY",
  "key19": "4jemiDuW7GmXuz59dLfdUpAM43T1VbeyT3sQyAcm2bcvf3zjP9qp8MJLSprjMkJdH2FELSqdEQcAXB3aBAgb6MFC",
  "key20": "n8NiBdDcsAEEfzaHsiv2irQqMyH2sVAW2zGT7EqtB1WXJQS4C98vYTL5PoxziG8WBcZxLLftdHK46GsKpd5t9Hm",
  "key21": "2CXsXeiMemWUKBq5HTJJ4CYiUHithkUX4fnuJ9GTAY8sutc3SHBurNeykx9CwGzwvE7vy3ur4ycit5JrdF1zQJEp",
  "key22": "5rHpwrx923E29RfRoX1VRFFPaetu5b71gZM9JnJSM91SVsJNgXS9NaYnyAW5XCrDnPXLXbeQz9HgwL6r6yAVUvYs",
  "key23": "jiVtmsJzgLiQPaUHivqNB1jcJPGdhpBUDtNcpwe5ZKiEqFxBenKpNUAyzY9GfUkmLMvNsKiHEGiq4ZR5XVT1rLw",
  "key24": "CCpZnFGNyqQZ3hxnHSJCbcCPJZ7n95A4ymvCM6FH2gTL4noorkGZwekYeeWxhYwWNp2rZdLiZPEfWTj7SZrq5Xc",
  "key25": "29cJ7XWE8bobYy6o2XkWa7oNkSn5dNYpytignGqV8TDjZ6RcK3Hua6RVDCSsqqEBQgeuZpTWuL9UCrh3mzqQ4iyu",
  "key26": "LDQZeaVtYGAf1oghMYfhcSvjT3BTY1zigx8eW8G8osdBQPk9DA2xbrwR4k1r9ed4uT979goapon24yebQaZzdW4",
  "key27": "2Hiay7p2LcbKQ25vNLbBCMGzzGrnJHdBNMJCCX62LZC5ArqNdDgp7txUVCLgJUQj5RXr6vk3bJwUY75Bo3zVQVfB",
  "key28": "5E3kPoemzGqjTPU16LfScEH4gDFcHgS6SKPx1Xws1BWNz1xJWDM9N48jCrD1NeLYSkdNwJbEmQoKKfywUSRi4PdK",
  "key29": "4otKTMs9fuBknJCFPuPoM2puhRgM1oEeXwBwRnsqYnVs6ya91if6VAWU6S3CztRXcdjMfuyYQPcZB9QVZ95jt6Re",
  "key30": "4AHwEhPfrY5JJ83eopwDUV7hv8keSRhs4g8zJ7yVahY8i72CaStXRZPNYeSkGPk3BBpzcKXii42twkqGvG97Uhfs",
  "key31": "211i4Hibsr5kZEgwGThpAek4qNDJGziZ5yrEkXXEoQCw4QxQzEtAV3xX6uYsWx7mse9yHWWUbS49VJi9gMTNTwzs",
  "key32": "1RExYjiyrcL1pYL5aRMwjU4xqnSq4CCWMsKkPGaZ2owzaYXiaBdhkKzyuPTEEh8wJXspuPbVXbb1HewBqxwhZnp",
  "key33": "JdEtpJyKVT4EhoU273jNVR1WR2VYNe5YYcnFAKK67rFdrzfEKmopT7D6tZ6h5A8tdGimuwtoHeCgodx6b4peS6s",
  "key34": "4ERmD2UvVu1uMca7AwrJbss17ZL944J5XL9Hnoc4F6Qyi6Ss2bpRxsmHkiEHmHZLNdodCAsD6cY49w8n4VLFQjN9",
  "key35": "45gdmaaGqXFUXhU5oNagtTX6hrtNBxJWWfPSwkSP4UsVvYUXYy2ozzRYj67EpzwMJd8xYPXQCZ3nRYphQ4jKst1r",
  "key36": "jiG1EPZvZf3qtxcoYNxyMoFS4xKKbaWVUGSzCryKrd8HAYXoWEUkPRyd9eQgP59nTpoATPcEyswbX5tBuLRDGk8",
  "key37": "44GNVLs6UeNFbHSVTSo7JHis8NaGUWv8Sd4Ag8qr1nYptmnfFBVz5d1tGiNRV69yNP9b74xGRDzT1KtWuufxJfJ2",
  "key38": "4bubQ51fnvPgk12Qrn3wBL4BPsEVLQbxWygK6a76uScTqJAiF5JmrJ1unpKXUdmTqgeERv6riayzHhVYDW818Tny",
  "key39": "3SfXXg1AxAc3s6WEV9u7x2xN9h9uz8hLkVDS6buitGfqFs1d2FLEDEfyRDF4quWmHxbhMTkqN3JnALfJoqWw3s6h",
  "key40": "3ob2DreYhcxvMBBBWzXKhgW4fbcBkXp7bf6qASch5pMsPq76QUrDkw4dwBJ1wvTw9h2GAHgzactp9tswWoJacY77",
  "key41": "NXPVK3QgfVJ5vMVPzUBQ3YEGHNH9VqvGmFHmvdLFJoKd57XZk7eBVYLo6RRj1hmSWbc6PvEyXBpoWbQYfwZZSAy",
  "key42": "3RBU46BiKrtBG1Vq1gRLQdAXvY6WGV7Uq1rN2LZq9WA7c2n9vcsx2JorJWuDpaVUo1zud6cSj6Di9kV2urE2nSR5",
  "key43": "5PCux7ksbAcmcyH8Pa4Z1d2XV9T23nfxi8CbZPsRpFdKAKLrPosMNEzK312KH19ZSoxiomcbqyc7C1YuriQfTPN6",
  "key44": "oMYeiE5ZG4Z69M4gjvWcA1jxitANGp653HcLgCCwYHdJ3pbvUkVBwLvCUZmWTXtwbKTbRGP4Mh79jtS2QzgEhzi",
  "key45": "3R3PNoN6vtkfwER9sCruBaextGXsgdjmAgQnKbYkaPiDtRErgexJe3Dz1gt2qiFNJHcnivLGpwiXAzfgABisp833",
  "key46": "51YYZwR4DfmVU7XuMjazR2oGkJaB1aPpDKYDqYodEDbHrCbtuB1V32iC9nYkE6reLWB74UtRSBd76vEEL2fjcpfZ"
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
