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
    "4o82zJYb2oReUB6bdhnXaMtJB3rpz6SP7VYtYDKD4auq4Yf1Xho1LkHAYzWApFie3Uo7WbQUUE4NiM6J9QDtPUqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKZkqkipSp7RxzPcGwS3dxomHe4R3t7S6hoQdaHC2dke41o2PxwpiGZHzXFhRrtHyN3d4zTNt5Vv4hgv4GYBVHF",
  "key1": "qMRhabtCrfpRGpwPFMfxUmnRdb6xJVmfCBsLAJgeVnNdBAXUexFPH5sHWGBuzhPQtcrAjhekqEkzAGvBwDsJSx5",
  "key2": "3bhTQ2UJ5MHNptj2RpqrGGq1JiuKtU5oXTh6rWBVFW3aLrrHAFoG9Mkmkxp1xaoEWMCnLP6CbNZUdrGnK3SksKR8",
  "key3": "WikvMD17NjaC8tVzbz6zp32LJaEYeWTZPYQLKu9rjwGXDecmLsvaegFVPKKsVr7tExtFMGdGJhdkLqETqtii2hK",
  "key4": "4kNyaFNnNEYNJHXtNY2yiqKD7xbMrY9oGgGC1TAhrgT6K89K4RcBXjxLfpHMAHBYXgM99MhLpNb8nRXy4KyqfMLc",
  "key5": "2GP1TExTYgEbjdzoTrSfVjfqxytz3QkNLVDgpXy1r31TTr4evDB4k7cZULjpZfrbR7xwQRyCTgZFuT18QKtYe5Wy",
  "key6": "32NhrG8NFAhrSNRyghs9dJ8ydg7xDWQDA6KFXrM6hv7zkqnFQFtgZLLX4y3FknsErsCVHyqWgUDX8bzLVEepYxtf",
  "key7": "3J65WsoHkR6vf875tCsatcJbzvqKrGq4LVCkSb5CG4RZ3Jt1yf3fMz9bp2wwiFaDQCNoEs5PPq4FtTAUZL2gYxts",
  "key8": "4zL5ZGN1sGbxJQqfbgntw2eUG8f9d3kakJBgafQAd14EhUum6epxHWjPSmUtA4fosbVNUXgpEKNFpuMSCzBTSPkX",
  "key9": "4voAG1an8Xj4NG3oRm9fjhk3bMaBL9eJ1NAyGULF6sE7sxd9SpNmpBCHdHVK1HTtSpBvveRVWxsUS9JEQRMqvj7n",
  "key10": "4Ydu9ES5NJsYnftEVFDg71SZqYTrgGbvVkhGgsAW7BsKui2mAH2WCWKmibNZgJNfshETf8B7nLgnt6Ee3j4BWgW5",
  "key11": "5ryzUjvULZ2H4fxQ6z6AEqkxpDEoP2u9i3DTrFd2d43QVMnQCyP4o4oVnFRR6cbF7ry187sbMvSxffV2b5azPMaE",
  "key12": "3g2TbzxKdSjpTCiPYeDWAVdbdS5uHnt784drsmhLU8XH8yx1d69kwgH9mYoSxyvT9hz25Kv6CzUxRv6JtHnyN3Fz",
  "key13": "5eMqmok6hPAdpFyTwfL2Ay3bkrbm8xrvThuVkMupnZMzT5ZbJasDPdHKps8DRC9L4ma3QunXSLKatgiKcW1QEDMm",
  "key14": "52wTikR9cVu7arswZsTT9tMcy7RpvmVcSkGeCPnFrDCeRPoW7XNhHYBFs7EtA2w3UEHTvJdZ5kZaVxyf7py4XaWj",
  "key15": "43dsXkcqyEKkFTosjC6dmb5gbfiG69Wazfk4YvzwUf1gYrXeUg9LioNXw1YzGdGhdLZvEwTBnWUmL8PdN217zpSW",
  "key16": "4SzTDaD9kgq4NDQYv4AyjqzDvb5HVrMsjFPgAjW2ngnHKuhXpQZ7wYdTygvPq6hLukgnBhJSHLkpvvRmtBbSCxP3",
  "key17": "4hkY2TYPxDKx7QKJAwFHY4U4UjMvqNQRVv1SK3ZYVNRoMBCEWSaPqoU9xEPXQbAG9U4CL7wXPFGW3sTXCqehQ44i",
  "key18": "3bnpsGAMKfzJA6wbX4VgrGWZBxiXAzpkc6j5qgth7xarTZdNgMvtJs4k9BRcb1LcxBqVWur3ZTp4CGbZFQbtdXr2",
  "key19": "2DrjGBeZ4787E1h8dXYZ3dNkbWd1Vi5K1yqXewVQmguEpNyE2W8YrFfi6J8H63QzRHEWVeo9XEHTddQEEUwgT8Nv",
  "key20": "zie31D2URiPSfGo4kWS8rf17XhHWCbQDFZMasX2hiXKJafdeLVKLA73vrKVwWM4fqa28EWnoJ1Tb6n72j1F2bwT",
  "key21": "3hkzMXKyxya2crZxtApXFZ3X6f4nb3G9osWX2WVSiax69dJsLydsveVdtVoMFd87erkLHNryiEErsF85jKKGKJ6o",
  "key22": "5sQ9GTKyvC7ug2j1HhttM4PKbq83nkHfgV2pAinbEqqyJPN3GZkBqmDZmwN5DECAyoqn1tSQq7w6bz97k26DsvcJ",
  "key23": "2iBe4yeEg4etwiwyLVAX3jvo21NRsvbHcaxfibMvVCj37QaJGZkCg5K3Fqic58SFn5ijGLSwy8F5aAFRh7FujSbt",
  "key24": "58jQuxcedzVs2ErHtZBDGzkJmZ8SJQRiuXXDggbnnP7iijy1eyZbGS8fzgQkTj2atqNH9AC6vMiDkntGrKwCAej2",
  "key25": "5in4kNWqchg9wGXD8k4SCojrS9A2JmuQWJwGxKRTDkSwAnij9taKtnV732RTiymxo2uSLPJmNSyrxqRynyQByD3D",
  "key26": "XXXBJhsnjU1XruLAUoVYGjShHgXdgKyS7c7aV3R2n8TMEWy1AfqYfKTfaMbz9cS8w7H9snRrxsgm8p7DdpRPdJR",
  "key27": "2pXCQS8434aLYrjRqrMC39mDDuqJLT1LpBpZWbjEE3mCUora84jBNJx8aRDoFKegQUKXRSCgTCRnj4pc9JEmFmKD",
  "key28": "NVjc18xKv2AKbFHfJHeihuXQyoNho1ER5PQZbeA7Lw4BX11a5qrPUWoLDo861ZktgcEgeXm58o6iyWAjik61Ri5",
  "key29": "43M8Xw48HUaVgtZGWKhreHBZQrwxrdV8whPPLLEiBEPPqC88NNVQuHPJ1qRVRsigm3BnLt5NXvK6ojNeKL2RcHv4",
  "key30": "2ZUgcZyVQQPePdTBgRc1XeJck6bEfYyNZbHtMh8qmYuWi2zt6Lv4tW5RY2aURcqXuDhn1zbZ1zs6ZFuWubaFRHjG",
  "key31": "ysYw32pVanGhEeHWFa7NQYnQ74GKstbZsADrNCeEBWtpxxMKWACaUbN9S3nAEncyfG6YtqDpwAZ9nADBo5Fbt47",
  "key32": "3BgW62ncjv7DjFJMRcmVSLCwaGoDPHSXGSFMrdUwphFNjZw7PxYXxXH7oUwCP59ZCgLneeEi7acuxkC2mxVk3BaG",
  "key33": "k97hKm6tD6YyAGuEkxifYmnz6JNyMr2MPmmFm6FUhqEC6eVPJyLh5qLATdvd7ejaP9yhCT5niPGLwURnjzdHUJj",
  "key34": "YMxUtid6iJ1HspbaPs3hgRY7n1s15UdC7R285HkFWFUNp8f4Y4wusm4A55PB5GkrLPAAdtQDF8WCbeWX9UbY1oT",
  "key35": "5ovm1VHEbDtSDBzZwkiVKVseugCU53sEcYSc9wbse51dKAistQCiWYYhFuxAm3uTJd4goAajGoiWyFbPGGyEQaKR",
  "key36": "4PucJgdLV5KE7YSvj4v2gUEJoVCZig3oxDdPNzTeXTSND7K2346UqtHJ69NVThVdESxhacLhG4Y9AEkVQYj5keTr",
  "key37": "5TrNcMb6qePAo1QDvfKnsJAhmATPqEikEDAE75VAT9dxYLkApFpGSqzKkQGxkgXYBBeLiMxAq2rfe8tR3cuHEyv8",
  "key38": "43cPr5y6fbDLCC5X6FsW2JKaefCQMmSprrzFfL3UHZXaKJr7D2WAQZutCfxfvX2wJZxVfbaWvUbY7suE48ss3v9b",
  "key39": "4trfFnHCktYeSMnJH32729LyRyA8cVV6NxRDUNVrtFZovV76b17gnizvv49hPCvfsKMjEVwQZsqtty8pvkyvwNFp",
  "key40": "4AX4em5oRWhncWg7BKFCMkj3i3rTkFGaYpqugjXvFe4chXpwAUVHrHPLVD5cSKo1KxapzNrhPDyx57XgP5wgNczF",
  "key41": "4SS5BUYPMHexkBYkXz17WJY81aMiKAtkoTr2WEvixk7GjGLeYEF2VX3HeyGTNzttB8TuhjGRJFBGiAxPJ2kbSycy",
  "key42": "3ubm7PwJm7wugM4gqWsVpiBqjZKNW7z9n8Qvu5Gym8iYWPGhU4KQzomAwRYFxtSmzyt3qHjSHYZB3dj6hVjdooao",
  "key43": "2irpPqpryMHtRbSVDmcBh15mGiWcZgNuSgWaVfD7wDaKBEj2SmXmcT8VSAMfWBHCGek9xxGuAJtseg89C6jUYtuD",
  "key44": "567xMVp8xZHGqMW39tMyWxyH8K92ZF4BhhaAbBPoSmZMgr2McZSGjgBz5gwLgVGSwnhGo8z1Bnzmn4AT5eAxT9xi",
  "key45": "5eM4NL74L89XqcThFso6w9g9cGhqPAi7JCG7YXrRhkJcDhAeVp9jEY2xB8QVSng8GfsviKXXU5y7Cb1htttE3swt",
  "key46": "5bzfVzQRTGxpvNb9n9K5c2oEEhyRM2Xbrb1Em5n7h1s27433Ru6VnnkaXnZ747Y8KwC2yYJqw4QQf6QzWX6DefmJ"
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
