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
    "Ym5qHbsw6K86Pk9tGX7PFiGRPifaxZSBUgoYGXb7PKotZ46irF7mDeuRBD852f9bTrF9CBbuK1jDmSpWtzMEhQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwxSKcDcqcStzrBoqQtCCdfZFUwua3JcbkuL5so8aGTEJQ7G3rzF6V3e5bgTPNjGqxPxgVJNgLdt54D3rJteFwp",
  "key1": "3rQ5cBzvWhBMDMUifMYs7bZhKyLU1SJn1BHm9eZ8RnjHSHQZ4Gc4M6TuwtcCkuDuD5qxxah4roYSxTqi4JZWqAbX",
  "key2": "5LHKNDVmsKRVmZfx5putxp7STy9Juu6FM2wVMin7sNPMEEPrq6qZp4zYyqHbKUfBrXcX3MRGChqTY8dhmNBHjscE",
  "key3": "2xxqgXi1NBgHigpxdC9q9nXqKLjPsd8y6eLnwve3MEam3AbiudJNwBMMCBjB6y2PCoKsKxVZ4S6Nboq9V8TNY9qP",
  "key4": "4MA6qEdc7rNYmKQrWtSfHDK1SDQGDw3nmvidCnjSrYtD2EoYgC4bHym7T3qY8Lr9Cw3AQRB67F7xxb1KYUZ4KwRY",
  "key5": "5hPHRBqGuP58neocMJdQYWf5DnoeKNun3RzXWBqTRCzRNQv65osivtVFq23eZQ9NxZPhSMvTo7zj1JkkxCvJL277",
  "key6": "5bAYhZPycwqymfPKQ5gKa7G82gzuhSS9xmTA15EHPKGufuxHeXfek2WHyEcCq3pXVdUyD3HdR1zqSkTegaSmBKTH",
  "key7": "3kseqZbPC7LZkGSjWZXeKqhYaZ2uJHTBF5Nhf14CRUTqpmGPNKksyP9R1BaKobD6eMUV2bhJvJ3uoUWbn9s11kx5",
  "key8": "61GpLNqGffzc6P5tYfPNBQmmP2QHJCN3nBmK5Wn9bEcpHckdrWfsY63EzV49tjEBUWAK2tpp5VQtbmGkayaUbWtb",
  "key9": "5VyoTqC4FH4V4tFNTSqRtCLugH2KM7oj9X4nHYGrWb8icxtBjGafgoh6NXdXkhSYmo145Zb9ishKRu9cvWKgdUWt",
  "key10": "4fD9LNCk9YcqZCGtomLdumCh16WfKUBp6fRwvAevrRiyKaEcFbSNqUVUMZuGYt3jfogQZ7GtukAGmUsXgSAhty85",
  "key11": "oszk5oBPzwoRyupXBMSnCrwcq9BXiqak42WhPUc118tWXSp9iwy2Ax7kSTLvMS1n8tyTgpgAnvMRQyqXjDoPRHX",
  "key12": "9VQ7CJzvMBSz9s3cLztHRwtHbSbWyLSUA9po4Gie88Y1Z6YFMTG63Rd8dYWkMkHQsnoGCJM75mBDkFf48ZQdka8",
  "key13": "5K8EJPiXH5ozvKbYuQ5FtZSqjPxe55ohJJ9qDhuFHtt7rYLpqcuMXnY2GFdkVkjgDN1zoQu72wiXHJ8Wb62dcyFe",
  "key14": "k3BevtowUM3codbiHCogwxKeCgjiMznbENGeqbLEFKzAPVVNTyCrWsquPzbUZn6cxnX7HRuHSyUH7ArGq2wjo3K",
  "key15": "5aDQUT1wkY3faXwAUdxLZ5dj3duAFEBkQNZsyn7MfJAeycVftMdxS38DovCjYLMHowc8UEjjvysSXYegW6NWpWhw",
  "key16": "64yJU7dTZdumnuyY2DNJJZXBAXQF7YYyUk86sbwhQ9Y7ZT87xjWcXR5YrkUM2FPn4me9zfxRyrspVh7eSJwNVPq7",
  "key17": "3QXohJZTChuYBibGxZqnUZ1UbThLg1AHJUAbSjdBDiWat4TyKjnEVEgL4mXMFzhrNhoRTNZHeUVqCy3LuCq255Hr",
  "key18": "2hoU99wpbXGpmWuchW3mjzbRBn2YDd6rcGuSAd8Pe82ZimWBgYp2iiSoGpm6EBg5ZGEBjgQoPfVLUMVKcqgjscL4",
  "key19": "4pvZzG8S5RFLEAoVp85eaVPZ9ai9omW8yNk12KZ5nGwCFVHeyZVe7XfpUpBgvnmHwTyzvzmfVKvzEQWdPS8qGEc8",
  "key20": "5Lk5aLmZ8pwNc3Yj5qWmUaXxRsqnDPoJb98FtJF4gfJBCN93hQLzPhLGBYhVyGLuzbiHxnSkU4kA8qdTExrr8YGY",
  "key21": "4xYz9VHtK6uDyvFu1JqmDM2JPEDThmyWKiCjbXsPtQhvaDfMHqtWxndcwHdw6u7rM2zrSER1WZ8dSewqbJk44UxR",
  "key22": "4HwMwyvFC4sYacpGa9Zm5f4QPHaqpDjrNfxmWiaDTpKTynbPKEhurGXGtzvNmN8nsQDiUHeEWtFLTj3uvpHEw79P",
  "key23": "34ygydgv97nKtN5Hpsm3D31ZRQYs5TNcyo8EvXq9cdsGpiEF39fqKUcjwcoeVcTTxrsEYv8A5N39DiBVKzjxks6c",
  "key24": "337147FfbCsfKniAre3mqBuyjVNwb9eUoW1XBCojgK69D1RYkxHpG24mWCTrFuJ8SE7Z33jPvAFPyKtMTVQpFBYF",
  "key25": "3FmW6NYBXDcbBXdRDsDrgM9BLaZ9hKg2sdLd2LXm2wvMrUNH7yYgnebiMHn8tRcCsVaKkgQbpeNtKUnw3UQMvytE",
  "key26": "61ahVPsnUEZ1xTQ9YSp3fM4Bh9q7Jkmqe51aJwv9ef4McsRgvRXnZrjGUr6gn6k5JaY8vnS92DfKmRBvpV1KMebd",
  "key27": "5mu1o1uNQqbPwt2ubSh3AGRgwYqALCCaXezgEvarYsVXnX2E2TK6MKf4YDdE1CDDMLR7Zu1JLukwwkhiphp13ge",
  "key28": "26cxd86SUZ5mEkGkKJzEYq1dg6VSyei1DvwLVMMcY7YQ9vjpyd2gJ2BMUvb5oCQdowdfM3kWNaqDNPq2K7hKircB",
  "key29": "4NDHtFGHp1ocZWH7exRwvBPVF8XZUppsw2WiZRYTHV31kU3ozEkHM2E99j8pVmBkFqPZ9CKuwq3Cd6GdaefQj41w",
  "key30": "gUakCtfxVb38DA9th7YsXws82taYxm2vZ2d6Upc52e3ftBkBcvE3oGzaxdHG1gu8h3HT6fwdx495R5CuLgoJLmQ",
  "key31": "iidTWnWt62xjpUdPhoVmNjpgmn9PC1wKftrrw7qGsvcVGcphNmuY4oQhiKqQTvjAyT6GbBTUamaQHjT4iqZHzSZ",
  "key32": "4bQEWsAJ5tvATdydVKWpMBcCJpHrm31KXWAH5EXDL1qTYscoDV5z4nFGkKJPKoNNEnXFK4Ypa66X56C5trpWCEpK",
  "key33": "4kUzBQtiWqobvpmgvBLUQLg2APdfbXC9oGw2cHMjdJT2GJp4v34UQromZfPjprPA5KaNrCJqRgagpyAwcMTRh2W4",
  "key34": "25o4URrB4tnghsKwreUNpfnUJYRHoqxxA5hhavKDe6fiSF4Phhti19K7fjYgSNX84LXXPGDUAZEzMjZPgaTGeAGJ",
  "key35": "3JeJnQmxSFg1HRPTMJ1BTF9jJrwvRbNMGejhTyBpbwmLwdcMY9mxSTYiopEZAmUhBUWLMB6qabdFCMA3uqgxtSGq",
  "key36": "2rfTHWbgZ3BnSFTtmC15jYU7kyUr6zczDNQzR47HXt68RtYKtbDRtpeG6x6Jcoh7nbgPwo2NigzVeRmyGPv8TxgY",
  "key37": "3mK27UZMyY5gk4pBzwLAapFFAVFuaDZ7X1XoCbHYC3CKkggssnXgnosCuqr2cj5tKQuu2rMS95RZ8s9XKjqn3HUz",
  "key38": "3sWfxHptAu3o1dUYNRMF2NCQwAo3RthbXX3LNVv6stCbERsXGdPcR9Vbjpnbe5cGSrtfXen9mPvkWT4rkAQXRVNH",
  "key39": "25bic4RjK9s65FdPQvz4eX1p3Y7wp675VburdhdTjphoi2zW13jwt3vB76nCQ2aRmnh19E8kWVdSrVQmDKzMy8Qg",
  "key40": "5Ag8aYhEcsamVen7dFBBfoaVyczyZzFv7fRFyWpBJGhkcsUCWH1oyS2sz3XQ6rApKsCTdQZMCfkErc43fxH8fx1k",
  "key41": "5xDkPZ8ERqxms3pNGkNCGUtpwtMkjm45fAREXhwL8t4b6vRXNExtcN9tTe84nhPrKcbGyYq2KY3CqePRftCVkpyC",
  "key42": "2MefDqhvBGeGmzPLxNhZzp6ZHsfQSNc4n2Hmf1Vc6QNAh2ZtC8cBVgVATFADJ4UL1cxcw8ep7W8NTzbRpoayQ8MY",
  "key43": "5LTUN19ifYFat2nUQZnYx6EAtbCTnpGnHAb78M6pBZZ2JwzJ1ri1C4WzN2XVruTrvrdnsZNdTxisKSYHLkeuJnRe",
  "key44": "64WK45oHKUZvRT7EtS75AB8RFSCYkpR4gAbZsyVZVuZUufdf7sG3Bnr86P46jNybLRvaTxHqoUzBPMwZM8g7gM63",
  "key45": "2fAKE7giykAdB6wEt9qPc2ZdSqX3zEWmu1aoN2sNBbgi4KPcrghDW7oPzBS7sLMzWBzwbpnqfp6qDtCKDcPPiymk"
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
