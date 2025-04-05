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
    "4T63w2pc2ULqLEbgtkKNNGmj1r61qtEeM3ZW4UG9Kd2vZhfunxhwKqAUie8rA2KnL8UYoELfpirUhfJ2N8EShqNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyFjJah7vgztyibymJBxqJTw6EymdbYszMTa7GEK8dJEJJN7SNdCCRJHoAvgTGsYWYN132tqDfiuD5fNXj3qeCm",
  "key1": "5eRiK9iKdnfPcPERbW24ghHQZgFxyjuJ47HwCNyY5aih3pbrRsPRM2fupVZ1wtSg5YfWwL5tBsLMJ9dyvwJDDRiW",
  "key2": "5oaUQrYPLqFpsGNzxyrtZtaqYgAtSJLetMfY9ztMzmSGLq3rm4uYrmdYwGqmwcCXem64UyEZUiTjMu5XbCFYSJnP",
  "key3": "5QtHDFgebcq8ZnrTbegrxq3bDihDMxmdpaA6978JFcEiywHhCF4C9VZiHYp5BduTYvWFncjdaT1hvGK978sFLvjF",
  "key4": "5WCsC2LnHX7f65Ch74kYVRShuoeQXXhV4825WN9ZzikgWsSoZ9B8JzzbWKfFTYWuDwKyaby2yKgvuiGqTCP37sA7",
  "key5": "2h1rPrdYPeWR2dxQtY4vNUSzwwUTvVeE7uMrBo5UsFeQ6N9gxWMrjvBxJG4wTF2enn2hNHNajyANUsKgRcJuWmmF",
  "key6": "3xkA8cVZK9zS2RXqXu5ZRLMRbLxcCHTyesL7GoyAuqyWiohLcytBcmZ5j3GN98Y9YGnwG41QsAgpAgtBFZQxW5Xi",
  "key7": "4TBxSu7PQnQfo6KMkxsGkt3e83mNLPzbK2uGBc9ogX8oBzUawGCrmM28fFXtu3EFQJtTNZ6hs4FXuubERUBJoCD3",
  "key8": "2X8bzdFkU8DyY8yYfkLAYdp6UTnqGN2rJopjo4sLxqaFa8Kyg2Na99gY7rACekEsn4shRWe6oasAadHJu7ZMmDQE",
  "key9": "4fCsWSyLpbQ4LJiWSaRpUdTAFFb3HJwZ1LYoQeeRZiSgW8wgHNNfN7JaVXW5XtxeGa9sMimwo8nZ1Y44PT2iPqNi",
  "key10": "4e9HAaP7HtTVqDXscarUbGHoHi4tL6y3PW1pt9tYzc2FsXeACEw27EXw71vBioW2joikoW5LryAanMUCYGUm8x4e",
  "key11": "Y3Y5z9JVxrhugUTViQMnp5yxVVWzgu1XmDSg9Xua1NDRbcfcTqb4jy8gWmDpcstP2PezFT3ZY5NEBxbmYmm5JCM",
  "key12": "3N9KtT5SdT9znU29r7rSPuu2dQZd27EG6bsBkJw9qKty2h5CFwvxjMcCksM1eiZdxrG2Vus6S88tZfUaLVtNBtg8",
  "key13": "uXEqVhej8Lz6tDYbxNeWfyGXejZB991uArvUNTXmWkwhPQmwHjqm46V6CQYp4uHJ9ptWCcNtm9n9FCrw9BmvBgZ",
  "key14": "5CD63DxuiVE9HTVuxYWDDaEGTQThAHGS9eBJ7yfFLF4nAXXYyB2Kqf2fCsPUbT4sYXxLsqtZem9iuQv2SsCK2qQw",
  "key15": "4ddhTykjHwW9gMftxeux7274ypfSvvdZgjwB5yYiiHiYSML64G6x1ERcW84JLwrYUh1SattWw6MBSjrWY8nMfuET",
  "key16": "3xoRKbqfiBV6tGdGng7LJwmw1xmg9AaG762RQz3LV3Tv2AUvBU81axZi7fwPZfy79jXz3SVtzbSTrgDkCkDJocXx",
  "key17": "2nEUMtXDqP5sZksNE6buiUA3mnzevC61ox6r45GLTYK5Pr4maHJtodGqD1fmSN949LWv5AZHdjG4ww977KeBt8tF",
  "key18": "gJMWrxsJQS1B9tp88hv2bcYqkFa3mGXZtFXmRSDRmQmPeqec9UiXgomsD7bZhmigRQSgnJaDqqm4ghQw8x1sVhZ",
  "key19": "5gL4VJys3g6198xHzzwLcVDjZkzEMbE8cRu1FeNWneKitQ5Kax1pnLdNfP1BqkPPzkYunQPWn9D4k2zJD1tPRpPf",
  "key20": "2r1yN1n7q1D3vD8ne1gLb6DqLPXUka42XBBDPvnqHAzmrUmsKexNEoeprjTCwbAu24zbqA7s2PJ1JjQvexGqg1LG",
  "key21": "5ygLM1Fv4uB3duYZo2hhZnJ3NG2qxrCG4PCxDaN4LdswBpoBSh9RqYv6eh3TYctw4WQTYysL6NvpyekscyKewuwp",
  "key22": "2VaeWo5HNLfat97ds9tN344qeDwRZhbVPeTHcTdcPFAtaKmeoJefgSnVMnrCVePg2A6MNEri2QAS67tfr3HRVk1G",
  "key23": "3T3XKkAAKJS5bTvnK2ZibmtBY1ez5P2BwRLekJGKFq44rQQQMK8GSFPciF1SjHzDntUd1go7XJtsZcNx19DGkaSb",
  "key24": "3UJAZx7YFJCQWKv872CXvhzq62Upf32SKrfBipdQZDJtMXjgtH9128FFU2YGTbR6S31nDnbg3sLujvBRWXB1WUyF",
  "key25": "5bTxnzoP5j7LMLTPbx5mm2AxZFcnHbJACQp9Bnrj3QTdQ4JfrQsLy1zpYMWxGX9fTPpeJUcXKMmKswUhimvW4m6K",
  "key26": "Gs7bLECsc6e62xWR9DXPRb9JtVAsQyaNAVvJZXaKoVLHHsNPrrjBN2vb3fUmf3QEegnRo9DB1EdAzR2A6edqbPE",
  "key27": "58sjiJM7goVF7yzDxgrTedNsypRhPY6LLshqF9W2Beds5WfveGv9eE31taDF2K7VBnDf66xYivJpBmnF7zxZkSLo",
  "key28": "57RNq1fLSzt856BcX1fzkfHd6hiY9SM92wYM5baPQsJ6CcV6CRzBvGCLjpBe9Lj4rTBVbHS2XojB5Akqh51Mkm4u",
  "key29": "5hAXcSd2RqT1uxxkeM6zfH1QgUhMAsGamNPiiSgRPHoWQfRLa2iLswTqvRgtr8wYTKrE78sV9yMmJvsR9vAUnGio",
  "key30": "2wZAH7AErB193FbNLZzi9qG6w8RjTkoKcdE5qMpp1m52jSpKmSwKeLep8mJXFeNZGDPNp1eJyjdaQRbcCsEP8SFm",
  "key31": "3bG6hTqeRLULAwphHL4tghEPm4BfPD3fKyoNn41VsfM6CSEUgKdVkLwWEiEXfQmCXzAbmZBWAnfwPT9vdEgu5WNM",
  "key32": "2G13KDTZWLAKe9CsHhNycWuPREZ1Pn63GEm1dkvyRh2tryXPKdTQUHLxS93K5RqjrmNCi5KDke8DaBPBieEcZme1",
  "key33": "ZLyqg7bYxMFDqjZyTf3cbYw8jvW549VDt2aDGZciJN4y71fs7Em13jv14LJ26jyhw8imoLdAr3Nj2igGm42akzJ",
  "key34": "3Rb5UjqM1f9qaC15nVe2igMjVjqu6ZagXcZPe3D8ckEptojpP43WxM2ekJMrytZ3bDLPwZjKoptcCMVuAuM616qU",
  "key35": "4BGfiobPWYG614qTmTSQL2g3iYqzR2NHLTfrbuyfdQhmist9gTSrNmzWu4uSjm5PdvQp6b8pwmabT2XP2kn19ggE",
  "key36": "5Tpb7YmGj7T5yJhyqh44tRPmxHyfH8BAUo5T87mCMfompMg7NK6PnrrexAEm7qeuwyRc2pyWE89oZB44nYcejm8J",
  "key37": "2L4YkDiNC4dA5LJ7Hb2kQFZ3KPBykK8dv4bdjpanB7xFa85dZrefyBLzUfZETS17qe2hVNshTzuujihAU4AUWcbC",
  "key38": "3gztshTWHUkF3WR4TPgcqRTSzUUkDUh98y2L8mcH2TJiqcRzwyUHQWiA7wpgLbXGbELn2k7YVLzLvDCC9QpdWjgd",
  "key39": "34DHAz6Z7QA4AhkMQUCp5FW8qiD3BaMMrhfxVB765XatEtQ5n7dibYuTQGvGJfT8AbwuKEmWCFtiSL5KbBmAsisM",
  "key40": "3b4YVWKLcYXXiPnjsBJGrwJQUvC8Ch8wigPesiiftt9Dz3Bvj3j4vP2w47dBv5EiXrGp25z9erwU7Gvvgm17p3QA",
  "key41": "2bi9htD8Wdu1Xxx4V2gDbjtuCQHPifLArmTpScyxMBLCHc2XsEoNJwHyaEip1UTZn15JPXC5TcPyE7i9QUErUZNs",
  "key42": "2CNtyexrZ64kCMwASTKX3gsNDBXsQpQr1t73o4hVvMDWmXugCZWsPsREiptLR9sdHLqwQtxFwwEKcpNY8LfkTr1U",
  "key43": "5KCkXiS8d5RhF9t6LsyjmS6eMAACaKceaonbaefjPCwQJeEKf4wC9wKXB8asAa1A3R4oA8Zj92wJbbcGBADKxm3G",
  "key44": "2LSaR7iin5EpnZL8LMXvZBQHczYxsAgWYnPVNMHY2hwo2VMqMJyLKtkWEmQ3EgWPQcEmbvC6m9r8JbuC3R5HSq5n",
  "key45": "2g6DVLjDZH7L6sRQxyQG9CYRp2DWd7yXUHkSMbkKD8Ebu8qm9GHmrfKxukk5tPfUCUzXrepkhBGYqFrgmD1X1F3R",
  "key46": "4ap8Pe5qABHP3YkMeNVfrGMCAwvFcrYim5QcWBktcfi5nUAwhj3cruhYnBPcjwhbex5s2M9hTWWAuwUiEQiusAZQ",
  "key47": "3RXK87VYUmj7Sxku7rnEMwnj5AtMb3P9n7a6bf6ZRczVusk7EBfiJhsMLa22HcWFdHTXhcJTn29hyeiWH5ZwNmRj",
  "key48": "iG3xYfvePTj5QPwdq1wgb67oJh6xSpjTv84VmXyWfVnLwHtLWWnERAaKD92pUhBHGx9PGhsFUqqCMaRbqWfyM5B",
  "key49": "2rsHG2CtQBf5TZvMxTB8YcHs1uFUVu4PH9Lf7hgrcKXfJEaWyUQekGSiEhMMLSYroZK3zk65DPFUUm7WVjdsS3SV"
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
