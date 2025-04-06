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
    "2j145duyzbf8pmKArxDtuNMfp4FTqCHZFftfNadVtVaBJoPiHAidDkYJJfx4CudjuLkt8gh53zY5g5PWgcaxcUU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8CeE99KpBhXzdqU73RgDz6iNWj7TN8LMkavbAxsgZGioPsXG35unsQQu2GKUVnx1Pe9GEzb5xJUumVFfkaUvgh",
  "key1": "2TV98ivvEbxmPVFhDfCpD5gk3hyGdJU19MwKeQ8CUPgaeaXVyRinx1wET5dTaCdmFd8tsaMnU4NfN3hH5LtsZTBk",
  "key2": "583SPqcAutjJ5mbbv831Ym9F1arFEMNYtcKZdeE7PhUKvkvq2GiKx9Hsnpm1izNWLdcbd7g7uwWVhKmpikX8UyLv",
  "key3": "2d34k9TNex7h6EQigEv7ebF23cmJC5pcmgVrmD6C69NMfopL9pKPEdnd6Hemvw6XZTVu8nzJmCiLpQ1jsNvAruew",
  "key4": "3cSauxcQg43SnCkstUiTe5nar4fqcnWKbZypG5vW8gPp5saixPHr1k4Z4vaPeYoEtC3DHDyXpb43Nij1aWnTPCgQ",
  "key5": "2HGy3ck4de6fYbiBghPYK4PHCRjuzdVNuHYvbungjk9TE7aju9M6y4RMzkke2D9X2tX1U9kS9TMaFaAZJzg2encS",
  "key6": "62wjCoEEqtn6fAYkQZTthh8pkbWPrWBKrkjssrb5W5chpanHjRRDhnBYWZWHWRcNhVnSbCBXFBLiRT6CbSfMDcpN",
  "key7": "5jWoeUEhw9z41p2BLLSvFTctaFmis8tJjEzkaupmN94UfijNQ55WzKua48Qdjp1qpZ9NTJtNFpKwSBRrtnH2Vspo",
  "key8": "3EM6ZnRKAGjhM2Yh6fsKTNRjW6WcVujZqF8fbwvNqimdHjagy9bxt88RkeTnbJyaVs1oAgphtYQdz5PmpK5AvztB",
  "key9": "5YPxMfHc5pL8mcPZVKP1XgF8SzTdvProjMA4GZj9ZKfwDL4QGWANd2w4dDbLV8mZCESS8kDDR4RGbvS7WhChcrTs",
  "key10": "4Jkz2wuw8aQ4PfHWaVWnmWYcNX8Pyag6r81NaTcDpjV8WxLyQWUq3oHNscTY3zmgCrDACAJxubPZsxx6j5dFk2jt",
  "key11": "2gMA5xNPCQCT4zmZNReD8rcsoSihtnVxfnWqMmabDGanPotR5XfwiU7UpKA3rzcMmxTiVt5Fi8qNsc3EZY2vaGPw",
  "key12": "612KHduZ6zjXE8T1c3MKreaPhX7zcgShvEejuADXoK9x4xv7kvNGLkgLDeZU3ycFkg9DJJDnwqtEu3RQbsQirVaF",
  "key13": "2VR2tdTwxDZQJkz8xjMqBvbr3512RmWcevZXGXdsDHBdY44MyzAfV7vRTwLMSXuGEgoXSWecqRHmoC2qQRj1wpY",
  "key14": "7zuZVBKLLG9fpcHakBsWi34utLHTxZjHDKdA52WW48B2cjYrDpRjmaKnfZaNwcsFBfJ7ZmT1eDQYoiy93YU6FiA",
  "key15": "2hteQ1ZhwjqxQ33sdypgD7azU3HUM4cyVLVxQQzqCGaTtzJSPytqnNXUjZQVfdHCWEt3rBdCY9ayya6RsCSD3tv1",
  "key16": "2pj6KGHnKaRVZsJV5Uvopu7qmAsMFciESSk2ab8hxZMV5VGYUzqi4TdRj3Z3pxMDKBEtUZafG9QT2mpHCWNyFFPC",
  "key17": "4KEyWiRCzi52RxwaYdAQhMxEGsiN7uYUqYC5fUan4bzEzQR6URU6MKz4RoQm5zixai2HtP6WuAGsGmRaNNNPVynR",
  "key18": "heqzqwC8kSeFTed5ScHd9Mm1GxDuYRvXBEGhUG6bVuRjrNhDN5Zb7G1watcLy5iKn53EhERfwVqyoYr8qVkyqiS",
  "key19": "5UAjQdMzJn6tgTuWWUTvowQgdcBqXTPNXTu9fgj7ETgtjA6DvLMXxxYPrvuQmkFPmLp2N63aHv2XYVhgb2HCWYjB",
  "key20": "5bADsLhApLsf5mJxRgYqQpJcqjJM5r6Sy4fKZVNdxnvYJexWXT2Ab2SRSd4tLM3MFD3J8yLx7wMbfRabioTjDYnA",
  "key21": "4qiutDfg6EeYqB2tQZPYjgMQU1PHLDuvDqC874sC4WKBGoFRvJn46aYAuGYwUCNt1jBTix3ysLrG2BtFSuJQrY5d",
  "key22": "5WTxpFYW1AHfu2QZRBaWtgAdGwfKsD6fDtYhb7M8SS16qiHvN4FDSczvyjtZh5mLNmmsDKq9NpGmpX8LQMdVpNKh",
  "key23": "2nVePxthbc11gmUUPJtEoHUB1G1biBFRgdjSNotXkF7qN6FEuSufGT7smoyvx7bs1nD5LrRB4v76BDNRns1SSCZo",
  "key24": "5Cb7uX515LiFGvwR8s5aB3qgNNTCNT9mxtur211LK88iucWLu8zPzYRAerZhUi2ZYQDfStJA8ebaJHXopvLaivFw",
  "key25": "2aFmAqd5rskGs61B3zbJSq5FUQz5WvNWzuSkx6sJoModX3FrVBgTrGyQ5neZzKZDGifB6XRbwMdQrF9v3v8o5FSk",
  "key26": "2wrXF8TuvtjCQAtrYus1wWhVkgoBtGqtiYFwAYsQqwFMzj78MP9L1iP19FYq1d3zGHPoNxw1zv2ovTPCQuCA4DSJ",
  "key27": "yV8fJtRus11LzkSQKiLqnEtQmECzLBYDR4icHaArsPbj4Wj7An9c32WVqM6T6DhsC1VFPpF9pV5QSYXEnZQUNVz",
  "key28": "2TjKuDi5ZCVotx3XZjjk4uugXqqtsQugwM4TXvZs4Hyt6V5UAiH9DqWCAz6cf5Adbo5Pqu34iv11u5RqpfqS3YAP",
  "key29": "4jtfYDDRGzczwkRSUbCbSfEHvPjA4NCKKTnrUyJJSSt5ujGCGomb334q8zgvdz25UUTDFvhkYin1Qho5zAfctnFw",
  "key30": "3xjdC95oFzRSdCnTohgd4amMkLcJgoYL9E3KHZ944gRrxzZf24X4CUH9YnL3vwCzX5bR6ZUZrh2jJQdaTJkvSmcq",
  "key31": "1kAa4DG7kG3kNoVVM6ZhpUeRknBD5h5p7FbkJYTXzKh7d4DjY5r9D3FKhpHCa57FA4sjgXGHZ6GNFfzUN4hZ7Vu",
  "key32": "2PTyzYrZQ3nBbhHfDv6KkJnBXCYU6ptDQazhktjwZ8SfvJDvWz2Jiw7mXK6FR429mzhZzZbcHzFnbfe4mPSLbpcw",
  "key33": "i4mQrEYcMfuaFs3XjDA5eKTajT3TduzdX9KX9GWqiapaBAZRxqCVjx9feLBZWSRT8DJHCM5Y5pGHBy2hKod4YsE",
  "key34": "5RciR7hZWWLZrxKFYbxg8ANzfWTEdn2BJr97ymx6LADPrA7RPn3xAtbPjG1qUi8vZyXZqH2kmdpZZA3tpF7hqGSc",
  "key35": "5DPxnaRqNq1vSHhNygmCtbXrVmHCXvDV5bUN3xi5KKnAeSYXH4DhMPios6KZEcswN9tdgKuftPE3MAn6JeTQuGq2",
  "key36": "4LxQQ7tk6zA6UGzEDH14yfu3VqXXLq3oELLsenUFWAgJkKUDNrbCiNhpNKAnrSFfjXeTcgUG9hdLHvD21L4w5GXq",
  "key37": "2ube7HWVUz3gjYiKRH6CVtn6LzcNDdMmFu9WaxgeRniwZXqgf7Cg9oKHTfc8xorwxDn6fgjfnZrMdypHeb4jT5ZW"
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
