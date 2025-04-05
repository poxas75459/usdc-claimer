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
    "2nusEsxHEBoYcWprMgc8U5chiuseHwHnSGo9Qa3XorY6Qo4A7TjG38fjkaW3ipADsrnu9ZoBVbeRSN2w3C2bZC6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGNnq9VuehVA8WLjPqRheJ2E6rkZeQT3DpcRDbcw15Dq1e12p4Sq3Va5j8TUY5pcGYRLWrhGYJiDcjh7JvHToPq",
  "key1": "482WTZFXhC4y4MuQCbctWsGiUfVD7rcXhr8kTwwXeSHVAyumBbwoK3mbB13hBcYwM7WapEtQJai68Q7yVQ4sFyoB",
  "key2": "4kjaX9BbVDvppRhFffJgScggTpRPkMbtx113XcKoXaAWJSm8sHCk1pqov7MF66iDpLXN1kreCA7tFuG7Ne9frqws",
  "key3": "5RBv9mNqnviaA6j1SvmbwUWU4cdkxitBVuuF4bkkmHypPuGLcSaMbR2zXysM1uGtGzP22tQCqXUntzfzqW4PUa6R",
  "key4": "3t51EfRh8iWcSDUCVniwBDn5NSY6YUp587ZuUuepQ36ZKeXmvsiDaFP6t2Bdcpv3NAPESmZnuqTsYdSFrqHnNMgY",
  "key5": "25GmEUPLN4v92jTbQUrAYbYaSEoLNSnXH3cWb4q7tUapu5ZLvPBZPJq8jAQKVpJQH3ocZZuBuCHrjmJCLALL8K5E",
  "key6": "52PaRXz3vWT8UB8pcBFUBU2YQo4mkWYfStzBSwJ7k7Nkt8k6SA3phK7gcJpHtPzAehuqVP8BFzGzpnahytWkf4an",
  "key7": "3SH5N7Gb1n1YswJ1thgm5aQ5XMDjytehANCxnUdih3FLDeh7wKN28WU9DQT5e6tPATD8FiVcjSqmptjy9UxvfmL9",
  "key8": "43m548QiXSQesoQUqnwp8aEA6UWPsuhC6a1wH4p4xgPvwB1a3ptzKk6mdzRedQQKSLaVP9EJMfyXCeLirTMMUnNE",
  "key9": "5B6aUKCXnVacdpULXxCp1hPtSoHWPpM33QUxdn4n7yuUcMPKSRezAib3Buz1pmsxWN9SQ78pJWkELP8tSVkoF3hR",
  "key10": "2zF54efuUXrrLrd8HvnryhnPyYwrjrPn4mC89vQEmX5i2Wq8xFJk49LJj9WvXoDAXYTGiTRGa1rgWZKAaqX3tzXq",
  "key11": "kceJUV53ksjjapFu5RD2GYsrFgevekcBsnA61xXKdP6KghCjn29mAnixt5qfc1DFNFKeSWq6vcBEHundjQEMJez",
  "key12": "dePvZgy6A8NNEN88Y3rcQP3MGdrsfkiGqoh6qfEpZQrzEiHLWRaiv6yoqqVHouKB76M9jGt7hfnyQnzQM1dfHpL",
  "key13": "2XB88F89h96qqXrFygLE38MAJV7z3M5pTxTmTZyjsM6i8hQqNuGsqg18c6kaiKpBaoXx4ZzSNveXe65n1L1Fnbpr",
  "key14": "5AgcpaWEYm5rLVJZnPovLD3a66GkZ5huX8Yev3MiW39CNRJEXJaXjhnjEiPrQJTxa2FTKhNvYMWdyw7S3aV5GXFV",
  "key15": "5SGHnx8GsubxkKUzD7nv2vytK8X26CxrK3QvSx669nzNNy67gBxQhCsvHU2xXJRhUWtWYnqm1pCJRiGRGZBzZmC2",
  "key16": "6K9pHokniFPUrxYxfbJPrUsm6Man1fsAy4DZHmAMUnb4wRQWXt7vRddQZSyWWswEti7Lx9DdS8GmCeBHjWhAye7",
  "key17": "673iHLXzECha1JFPMcj3aTX5UAMHfDSUTvcFA3JfdKtHcnpyJXeALQsKShnJZ4MNkHvBmM4KumRhHqiFgVHmCaN9",
  "key18": "3nmVdkVmFBrChbjgmveM9BBdDqyXrUGiw914JJunzvjAD1KucYfaiGPkfyepYwaaMTVcCHxUUeQNwsKiaV6hrpW5",
  "key19": "XZgX4YoonymsokrtD8fWLAkVdE4jNXXsXe55bGtjuH3zNmfZauH6HZA75163xYHzH4tNBRME4eNAJpqvJrJTr6V",
  "key20": "5rNToNVQPSgxwYLGQWqjFptVuLuxr9xmCPj7wzuf6wjBtQNzmPcsPYqafP3Tddnip5Rxf1DsSgiGLfRnipMsecbv",
  "key21": "5tp2tQ6Ynb4igRv3BzVWU7XWQjSwyz3Df11yiBYUWfxMUw6RNwREyLX96oxJj26gmKXSXUbe9cm7PnBEyp5YsV1A",
  "key22": "5EFebw8jLsDL3fbjnZwHrQHXvExn7ewJKtGnCddABMqKoqCF78MKYGUwdtXdnbs7zEipFjQ7cXCRYSePGHLDzub1",
  "key23": "5ZZ6Ed2X3oLPvpLzhvnBQyo9f6HnqgoMuUpQHJPBvjAsLN6zV8Ww9eV4hgQHesLEe6LkiEGLP3FVTa25TcHVhbGe",
  "key24": "5YtLd5DfhJ7DkCZKdfELQNqovk99QCp1e41o4JyQx6jNb1fqkH97dnowyfnXso6nPkk4Z11qZJrAFMPfvyTehR31",
  "key25": "5USPrYwyzTCNhy9REwGG4nowRsfXQ1xz1PwheQKKGh1V13fYDCsgJc3QHkFHs3LXjs8bHQiU5zDTa15ZfpZ4iPDE",
  "key26": "BvMMeC6ympkqSAnh2SM7uxHL2KhU2Qja9pntAcLQRWox7v72CYGfRnTH2jPTTymEcZrjXbdiNcbaqFc2d9ZUEKW",
  "key27": "56pshxPZ1SYxictHN9aNX1md2XQt5fKqkZuCgp8eTrBU5NJYG8wnxENwafWCzob5T8yPWeLGJRca5LVxEBr55NVg",
  "key28": "4hG3oHebni8h1Vg9uvqjzYt3D4mwFfug45NAMzfVAertecbyXPUKQT8MZhKSkuviQ7wpH6JizWmBFGHHZDbWix71",
  "key29": "4J8AAWQ3Y54jbjCCfr6xUJiLvkdNH558DJKg6C3pJipRBkemAtvoA6zBM2tKVLsCJnZaMNicE5iorHvfXisjRTyq",
  "key30": "EK4uZj88wsN4CPdwC1LBB4v5BZFqfZW4o92PJfPXvRkT5ciVovrXYuLPbKBZYnVJFpUYt1STMR3RJXGhMTeS1fH",
  "key31": "4Ji9xwa679SEKAQwhoQevuYBJCkFL25mobM2Z7gq3f2ujwCPYV7uQ39gp9ZnNLQmTnqTLBVteg2HUVzGiLardeEz",
  "key32": "3QPmzoq3CP1KruNEp6X1D1uxofKodwQ2Jc3nVYTgDRbPMNaUaLT3Xpn2YtPRGk8oBaKXbASDFpxEhfvDgGxv7bGq",
  "key33": "3xGRaWiDRfh5sbvod9Pw93xZ2LKxjAbGhAAh3TpYjbqvZtyW8kNWtpb5xpxdGT18HdevxFZiA7WkuHiibDhLNDdk",
  "key34": "55h1NskfJkEcZZ7JuFwAoJLZRsK9H4qLS3w63KK9sg2roa6ny4RnaXrPb94ZDQx1NNmtQdFnafynMgnTMH9B6dcV",
  "key35": "3uNzXtQQCEA241UUKbS7BRVoCRrtFWyjR5ynTP3hWqos2Xjoy4tLQ2PZDQV3Y4GfntVHExGx95XnexhSeaqvc24t",
  "key36": "3fBkitzmNLkFLyHgo9EtfyteXqSL1eUVHxqmw2v3oMKrrdjaxVYPDKyygGwUyAPz5b1D4uM8iEWnjAo2G5WAoJtv",
  "key37": "2QBgV5NwrP9W2LPDLdDaUuSVYyeVZBxJR8A4wBE3CKUfnnfFziuwV6QfPxQgELwwTk3VJZTbvRNy6z1HYsTH4zNc",
  "key38": "2DfBS9KtJKMtswiVcvZVkHUbd2tSQrEx5ghKmkXYCE4XkavTU8wFpNma2zfqoT4Bg3YkyjkhJwvjnSaZ4CEJGhzM",
  "key39": "4Xvqs7N38eVarcNGfEZXRhpoBJ5j9DSTxaoou2KRkTeMPgUuzoto8Cu3EpZ8Eywen75otpJGodUi21rCUSw1GJvf",
  "key40": "5aZv6AsX5anB3bQdCxfag36TC3DWapU5TvLG6kktMjzpTYMyz4Wy94vgUNpyVcoX8er1ryEGQLynScNvzRTRdtPw",
  "key41": "2ZiKY5Zx76J3qUhPRQZtNZNBdkR33EwGF1Q6XuT563wvACjmDAhEYpCXHLT8st1ezyRqqvAYBp95W54Bmb7yjRYn",
  "key42": "2MDvDrMoRoU4AW5cPWNGGRMsLrXmpP8bF3RsWQXkQExuasT9qEqnkyTeGPuzLQGZT3dgyf1FBcSoWdceHCgMptFv",
  "key43": "3BLW2Kr9koJtgin9RJmxRxJmRhopVDFPYabenUwRewwVtRfTaQgnNrycowSNXe7drHidyNS1MqJpJSno7rW58RxW",
  "key44": "2ToheriAsyiaarX3hQPyeSYr3YPgzq5SM7ZVzB1yCW7xBf2zbJchTEavZNuot6mVt9tU1MtvjUybwExccn5Rzopq",
  "key45": "61ScRpis1K9TeE7U1HgVGfhWxupx4XQu5wkx8se27QuseRnsRTahi52DVeKvx6o5HYt1cja9yyNdgJ3hXxGFTQcg",
  "key46": "ijU58PcBN5rD1Vhq2xnQ54aaVozvdLvEw2zKqc1z3MVakpPfCAKxUGhwDe2eogNaDiA16gBFbXThFZV9ty1vbPM"
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
