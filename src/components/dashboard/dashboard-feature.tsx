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
    "5oYgdzgdSHjCMsd9x61T1NgBn9DTQBYtXaGdo1fTvYzhfDkrVv6AsZ1i3HDJbWCAADUtXH7cf2nBh6vZboEmE88Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdPes5k6SqZKYXwjJtL6uvfXNth7fUwdsZJYenrfFqYuau6VRyuxhFcWorZ8jgDBRQgVLTzp9Ks5HDEsysCeis7",
  "key1": "4yp6x2Pg35NpAmWYbPY8TUb9CKCiPXr2yeLXUJqoYmKpSdxKppXnGnMTK6Dqih9hePwGKUtXXpNKYkFcUmTd9voQ",
  "key2": "5beXdRuaLy6caYNBJyyn1bHpgqSPScodCibah1PLFmoKD54pAvu7oR1QoonoPU4LuzFi3zUi9n17PP5U9pU28Xfw",
  "key3": "wx6R5t5ib6K57TFZxXVjSYFY1FQBMtdzH2qwDXxYeizDGF4PMxfDzg4PLTZTWUtwA5tUdnaGnPsN8GAExZ8eJgJ",
  "key4": "3zoD7mEUXVoy2rYunKnYw8sqvdmMMbQdrCehRZJdc9eYSXNrryB3TNF5Bi539G4DQgWTXqmdS22uft4ru7jvB3Hb",
  "key5": "45cQ8XjPpom4AAeEpct5LP5ySebYp1F9SskR9WKHG5WDpnb42ij2PHMFHBJbFMELL6zz86SjRHajgEqFEDayBzrV",
  "key6": "295QpeNroa7nJcWPjnQNPKPtQrdDmRLh3ytAFvRKXrYawPE3MuNnVUU6aRim45xsEiocY6XVR1E21NLdVydSxqTW",
  "key7": "5U46kSameKTUQvnxDgRS1sFvBG5uJaxg9XnSC3eykZWxYjft33Dcp9Tt6xeYRoDrMs6EWpTm4CiTFHeG6GDdXZx",
  "key8": "4iW3PoRJmVSy9YQge8MWrhiP3LrEMaTsbAAT13yjd2MDmF5L748eMasUuGxRnhb6xntsMsNy7VJZ3LoW1Wp867UB",
  "key9": "2sK56efupADy8QbeECnLbcztngD2HGkP33EKXXLZbsJbsqTkQrGWg5abaCGvTDoECYDxfAWEuzX8Duv7tJtyuFry",
  "key10": "VhAo4U1nRZ3YLCbniwbet9N9JyUHoJc4AxVpPR3nKkq8yvnQVfYL5cyHGBNMi9wcqzrCbp5z6MGDMNh2Bygp6Py",
  "key11": "3W8zj1eVxpYgsWKQ4Pv65iGqhXzquyfhhuAYMCKhaoxmm28LPeTZ6CRTmjY7SyUa7QYGUFrafV3Q2sgGFK63mfia",
  "key12": "32BnTuAyHT4ysaJWvYT5JhCjfovsWYLmH63s9Nu2Rc5K4yAHFQitkbhFkkTfrE2f65AZsWcAqM6YsLaVx8nUqxsH",
  "key13": "5u4ftrPUzvda9ByLADqWsvkPrEAy3tQnvdPHxftUtwA1aoK5yPxh6emycA4LfXzNdFVdjVxk8rAzq64BPq7oSS2d",
  "key14": "63gAAkuQU2QLWjSPHk7mCrMoWHKHic2RqzZ4mFLNqAiYLi98k5cdTFLiCeAWLpcwLYL5t8CQEDNdN9ohUr5csPNR",
  "key15": "4w8uNtNfnm5z8wmQMCx92y78kJC5RYg2vZB2HzQKhNDfmqCJ4FSzb42KcsD4CauJYXYjRYNh9iy6kTPPRjwRYDiT",
  "key16": "3LvNzd2vcXnnzNjNtJztj1Px7QKzvBBCAkTctfikLB9zq1UNoEiDBgX4oPVMssmS18DZHSVXUWfpyDcJWiB73JaG",
  "key17": "Adwc1b5836cT5JiBJa2Q3aaS2PkRZoWDSjWuGRTGftrv84VLyBFM65ZLpA7WxzbTj6m57YtJYTyNia3ZJp4YMZD",
  "key18": "562i3xUjvyzqsooNKVpa16vT8nSpgBjZxCvGQawYj4pu2ufxaDb5qqbkWLyM5sstyhE8jbuQttTfXLUriTVBqN7g",
  "key19": "57WJ5SkyHzuiWkxoqQLWPdPnj2BoWoXbYhJGkuMwgLr5U4V2dwk9F9VeScZsDDuWK1VhSyKnWeGAQ3QbaYoBwGwT",
  "key20": "4gSg9gJxystRXzXbwjzh8DFu5U3HMRBE7uYv1ruzENDtdptkwX2prSovVr7YVs9ANMacLiwmXDNWvV5fbY1GEAZg",
  "key21": "2J4hhZLty7vgXaRez1mTsesFq8mYfgK64ExAQPa7kYWekCmHYUofifXyobXwQgSmp2fBsscTDiBRCpkJnYPhD2z4",
  "key22": "gspDQryz1EBim9sp5yp5jqhRBZ9NE8r79Sa7X3pCxPDNsdrRojwEGcXniGBfGrWywgQbfCZq1GMXdL3FVkw5ibk",
  "key23": "4qPSCBzaqrPxG3g7E8ef8yF7Zm2sFPRay69vS7phKXRGSuJ4wY58fGbA5HiFGcwh8N2H4fXcmY7WrFcuCG33rmA7",
  "key24": "63n8asYQatiSGraJnVWLEPDyDRvxbitSUSoNhh1rVTm7S6duzsFyL8WPFaBLzQ9A2dANZk7MabGAuRaDmJeQnjss",
  "key25": "3y1cu5ucKMqCCBWWUZTRc87nHTRrvXUc8cKbqLQBqv9CAzpKJZ3z2vcDYEP29byw1YJmas3D4xKNZYcJshfkDRfD",
  "key26": "5MdYQ2pTKQLkVdB61jenJT23meYaCpysXuMyeEmvC6Kj2KhDihRfhqRXcpYWtEPCDC8y5GXNv2pSfo8NHMHsnTq1",
  "key27": "SD3zkG5Kw3UVZsNcPqKbfUAzRs9jfz1WVPZqudG1n5aUDPNnCMYo5mchY8mucsDFBa1DQEt5PC5j2gK8VbC3cHH",
  "key28": "33EY2DB6w6YtLbru8BcuCUmpryKDV4PmZPyg8SdcGGTv9JnHoKEirt819L4B4NniAvSiFe8pimDb92udhKG7Wur2",
  "key29": "5AGj1au2ccigNFT3ZHe6sSs6mSacfh1bR6EvoV1psAzbnDzB9UypyzpSYAfnLERuQfvZftjE8yuMACN98Ujkj1yV",
  "key30": "cc1dgcXZBmjkKkQsUJEQGBqfp4kYQLWQLkCVh2Gvy4tNKx2MKh2TM36vy5Su1xErtUDhgcprNBxrJxhyqY9bLPd",
  "key31": "YeSTwVQD7LFcfsapUT6HUTXeqMxcSwqdEVQtYZ5Lz8oVTiZV51SveYFQpCmE9jmw2bnE6aiqvxTYuQ4BbNvWcmV",
  "key32": "apirrXVfmyZYFxCVLtCKxcpdRaL3i7SYToJPPgPx7yDLFdGwcPJoMkax5Mj2cvq4z1Jy4Mm5YBinV9JaJVNp1yg",
  "key33": "4svEDJqDwFHQBWUrxdjwEsPmLjLDwaZ3NcSJfXqizhXW4M2v3NKBGVMgqGsUwwPQFU4sAo7iuSng6rH5kt6Le2RT",
  "key34": "4yiobieMNeVVCZ73cATc4YZ8VbacxFmGywn3KZEy5t6c8NpcK6miNMW8PkSS4UkfHV94xavQccCAwGviEUgALzbz",
  "key35": "2e1BQxm5tvoexSHNXj6ZhVfWUwskSyMitpR32XoTB2zJpV8pQyMLFqKcE2oSxTpQaqRE9CGpGM7nKkx3GDggvZhf",
  "key36": "o59X3HXSPxhyA3yq5x6mVM9xBD3FEKzmfMzmGD6jcnaxMPX6L4DFPH9ncBMi88BMkAbNeVxwx5iUsRas1A5976g",
  "key37": "4tqGRyTX74PRmcsSAEfVDfeHfKTQDt3QCDfYgtWW3BZbbstYbvmrGQHGZugP7keRxuoFPJmFPSFWeh7KMtii9ozL",
  "key38": "65wzJokgd8wruDJoSKPaeCAW8hH8Mpvc2W3CwzRzUdV83h5FrBdNZHpoiuvJWVWGffWtQowgqpsJ3BEGguvrszWw",
  "key39": "KYq9oBea9wMQnLCu3rBTLzC36YRrD2KKZeX8ucVDFx5MyMGqg95HyzDsKA7Y1zAdeXprxwt5Zb38zne36FcdMb5",
  "key40": "2uvLQwKJGPx1zizTsmgkSNbjhQv8CHFF45oea8JP9vUCGgbhxUzKmvW5DxMinDmqQ5EAVqVvnzAfs5wKgbtmFb5P",
  "key41": "qs62PjT5SnVGxnAD8CC8hhN8dRMoFswTih51ondEEZfAL9PwwMU9ZmdJakYeRGa6xhKY54vjDwuub45jyN9G8SN",
  "key42": "3ggswpUe5di7urmzQ6e94bZn2gj4aEykAwi1kFWaCUVGh8NjJeimCpYWTZeJ1bWB4Uio3sN783FHMdmS9vw1prpn"
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
