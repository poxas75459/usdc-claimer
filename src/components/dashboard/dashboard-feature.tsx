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
    "5ZBsHiBSuYfQzdaaT3t5bMZdUjNbLJxzQMGFNgeembeaSXaQYR5Zoqrz4pbaACwgqJ1LhT2dbeBsFeHMSQ4A4LY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMj9YRKmqDMsxWkPhw7L6AWqLNyRkHrCswL9kJLovdWMCbu2KwhLvk4SjPnUYprSSrr7TjtTWwHoaxM4NnRNBo9",
  "key1": "2cyz62cTTWspHynyU3WSE2S7Aix3JhwRBGQo8umFymB2tkajraDnKLcdYJUup4dsEaqPzH3uEzHhQywEBaZeroK1",
  "key2": "iDZep8sXaToJxSJ5NfkDddGDAA9bx7XggppoKSM8ynfqqDZZB53RkhGtcQkajTDMEgm8Vxk85Ahha1pQJpZVSuy",
  "key3": "5jUCEkBooDRRHAyqbNdgZe7rDXDnNApQpgQMsDi3scrwERGTLisUCT9DqigPitKVxJhx3NRgvv1bxNXZwKsPQRYR",
  "key4": "4DJt43KS5uKAJFRzJDTjQHvMcqVcEdDTENyRpQddAzrphSdczMZqhMq8vE7vR4JQjfEdnCmf9aNFbDz68HXY53ir",
  "key5": "5LtXHwi6XHjdUUGwp6MKuqGxgMGGTDQ9FSrZLTsncKm8ZkLYX89AfiwCKAwL11DnHGVQsMcdcnkXpc8P3rua5yy9",
  "key6": "HWX5jzyGp378JBFE6k6mMtRHkcTHHyEoHWif4CNELeuiGSNxpoTWMZNq83HytLkGNZKJ6cWazT9XyJ8iKVFqhKn",
  "key7": "4nAWNAtw3mDVgsbwueQTwGqeFatx5N7DmdRXm3cxkP8DhoJgHhuNsZ6h3rZ1XUGiobFFGS8keViDg4TtvrygNMcP",
  "key8": "4hbjWBLDfRB9dhSbMbANQnvAPqqhdS5PMYayiHA1ywLzYFgsZMQXSB2KBLcUQAnxMTVqxDaNsWer9EmUSMWbvCnJ",
  "key9": "BKLbRuAqDUYsr1N6wqN2QNbou6vWbbxAjZsUAxLkm1ukLesLPndjEAkpvP6KMbCyoqTySMbtetZhYPueVn9inCr",
  "key10": "EubUEVJ3myi8MiWSDQHR9pKgBUCbAaJnmtcPLkYM2GvFwL2ZwZ3B8exsHYoejgxXrRJjiBPmLMNUuaN34Dhgwxi",
  "key11": "3jvw5LsLkQszyL8vrxxrhDtQjepU3tuLq7aHyvzuG1ALGPzFzxcrAKjSAVSTMDywzZqeoCuFBe1fvRw7Au9VZrWe",
  "key12": "XVqNvJz9xiJKb5RsCisVJnj4Tj3txjV7NB4zVPZUd7PPJWqaYxxYtmVFYzegs6ZFQf1KaQ8ahbyDDARDtqRfAMF",
  "key13": "AmuUhcShrW7CBGv8YTmygWpQrh5zKB4hdSPn8G4u9LujUYzNCzB9523S3eP2ZRVHf7tKsobsnyz49oV6eufa8X7",
  "key14": "2CDJRDgW1GHnNaHTwrTiZiuiPCah6ZqsM1GF1v46DfaNZA6EzGyHsrwBNiCjgvKN87u3gQQb9xaxUyAJMWnQzcPT",
  "key15": "3AZWeFHMmxcbprLVmesAtEoab7cQ66qYAXQeXupgznLEWKESc43JtiqY9AhL8vsxZBekuuQC919H2rws5QAKYguX",
  "key16": "3NwGmA3otd7EpLvoDf2mhQa1WsuZ7UixSk24oo5eMhMb7jhUZGTKdpgiqJMemRQUS5yxVkKyh1cBQtHCpNjHNFwW",
  "key17": "TRtE3uDUfPZBn8bR6BcwF4fFQCT2fhe6djdv3itk72675fGE5w5RU5dSTp77q3UuX7HZwSxRR1NhdnQycPvcqfU",
  "key18": "4Kf8ZKiKhhk1pfYYPxeJit2Vyz8cmMBckEMFtSi9x6ZHRCseVtRX9Yk7LE7CcBmR1Yw9GAD1pjeLKTSLCiB7eJGh",
  "key19": "Esg9f5Q6XXfaFXS9ffdiHimenCukdx6SUmUaxrB7zoL96xTDwhMxuimiqokQGFdm72hbYjpDjiN2w3NmT93QUYz",
  "key20": "5sAmhp5GyzSEgL76zVEhRtCcUGLjNANq6LeHxz2itA1qm7i6iTrsY1LWbVdt3YvnCkycVphPTf7ebKCN6w24EEn1",
  "key21": "4FCPEkWWy9Dq1CY1cLmdHyrAKmZr9xX88c6CMj3w8KfxaVxkz79Cud8You9u597f5g2LSVA2JRqYQYBsfMSkZ9M9",
  "key22": "4tSBq9h27xpH4Hpg21uevsRgpvwTmchU4SYEysVLkqzLjT9YSuYkJxLc31SYKVet7d4UvkDtAdTQ352pxKBgHpAm",
  "key23": "WjSXt553bwpkBxWEWfJ6g8HJfuSv99kWfKCdcbGGnBZnEjijpBD9vAKLbsVsQ9ofywjVeZt2v5XHuBdbjuPdgqB",
  "key24": "o3kYWS7mT8ZDxxHG6EJkMafsxvbQDmiUvnT6QPUVvRpJ52biStdYn7uLW44jDZj75AKUx5FWNSo9L5RKRaZfior",
  "key25": "2AXX9xni8TpY1gyC1eYyWDUeUstAQo569Kdxc44DsoJomJiatvq37XNzk1a58wq66qrfdcKVHsfNcxnTYG18rr9x",
  "key26": "51fiwj5c2HGxHX5saxBUthxbP9HB4e9bKzujcz3v9CERDyLpXW17GSxtMrtVrFqfXaTk6jVTXx1Jj88ym5eJ5y3c",
  "key27": "2H76DhrdUworQHiXJEfJd9y8HPCu2ZDaA9rgsqoMd4Yz8BvxMFdkFPzQmBZwBdCM7D54Yhmr9a4WgyhAWnh5F2q8",
  "key28": "5qbUEcYbzaEd88zmUcDLgiexJGhuraN6VQozHT7cx8xixKu6mqfPSzaZqKcKmxQD5U9W9TCArXChaQcvCuZW96dv",
  "key29": "49HivTDh8cZkNte2PPWdU5gaeP28EcYUN1rCTNx45YoeHN3bKwPsbrFUUU6VBq8w7TfexvtF9E7xh3HbVtjcWoB9",
  "key30": "HzAE9WSPc9S6VbH4T6Yp2g6G15gzFKQ5WdsNeQHfbzxZsQyPKJqrWyAx7GAxX8YjSUEsnMGYUq8MEWzJUGmq2B1",
  "key31": "4KbiY4ArtrpzA1JteSV3hfg8c8rreJobG1aX1RZr82MbZB63E5G5icMp1mv5tntyM75tyrDkDxF4cKuN7RXKNMDG",
  "key32": "4iJCQ1gMVd6eaVMyqV8dZTyq8ci1Gu7Rn2iirSNsMPqr5CBUQ9emWVvKfUJk8ec6eyssmuNekU7YKuQtwuVCEat5",
  "key33": "285xmXyboP4uHBid3DJuh6aR2e7CkM95MWiWTYm5UjimiHbg8CRC2B2QhKxZng4VVazRRfzuMbSNNr9iRPM4DRSc",
  "key34": "2A29qBYuvspUYFxTRFsyEW4BAq6z4nRajchZZTbZx38iQBgmTXXXWCi3pBEjfbEqEyRanGGxApejGW9yGtTPbffE",
  "key35": "44xJuNqsRbRkbDK3cNX4W5jkAQDZnGcjm6NBwVwnQ9cJ6sufGyT1Ek6AboS4Hajo4kLEshP87vGfAsMEgFNgUNLk",
  "key36": "36BzWjzDxUKVWme6QmHuPshFHyuYrPd4Shpk3hrvxsWG645YUX29wbk7orr3XZsma6Qh1dyHiVbc9hKWnJihmB3k",
  "key37": "4WkGMaXa9qzcwkeBeBu9dUQRJTrBQW1Q9HxwfpvrrmpPmrRjPmsL643mWownAvkwpbXjLjVhmehMY4GN4d1eVX2x",
  "key38": "2UUVjjAvrjbJXeaGF4tf4b9GAZdxb6HrAGbxAwfUJpm93cdrACbfGUsQ2boCR9Q9MR1UWdNrqL3557nEVxamVF5r",
  "key39": "5Z3roDrjHdu4htbNceqbXGtWYNsUp5sPPznZ9Q1puCc8cdPzKeQ6kGdjhPzx4x6hR28ei2VuSxNdmHxWJXPeE4d6",
  "key40": "2pGBquNdk2nQCq3LWCndo6NWjrZ467nTWRkBkXAxG9eX4h9LSB2FL9Fe14AEEvWDwR5FvDyfh6zTbvcBzePL8ucx",
  "key41": "47K5Hs8QPn5GBDZJ6W3oUNSaaULiH22D7TTWnfK8oZNvCt12dX4aKdgBrbioufmitJBCk2waySGSCks4Bf8hiZwG",
  "key42": "XNfdQ8pVLR6BcGRHpYMC1q14nHYFTwhkkJpneWX426tJSSqTbNoKP91AE8ytcavFtZTu1M95V83b1qjcqcceVDr",
  "key43": "4xwPqQM3Ro8UV6AaYxvCqHtGHuLHVYo7fDFHRuek8wQ6b5wzvXAb57UMcReMt7VqZ9a1QR1kEFKssvLGhVuj2qJ2",
  "key44": "2iAoAY8caCcFFaqNHaEQNox2pwht6TfSona3qGZtEtFijN6GfUorx6aba3VFdKXTmbSSUXThuSPnRvEg4FDsyrid",
  "key45": "oDfuCjQxFgNZw3fzWXjynJd2vu8maU61qVsFtXwNTn6YFgtB4dr2wd8TBeWGmQDjSwmikMAYvF2NbQxrMui4txQ",
  "key46": "2ZeQkLooARxohMFCVh3mmJTNoFFxXx67jAggbtoYb7qArYmKkpdUpekatmpxqbuNe5Lfc1f1osNLLWVkCLuNQf16",
  "key47": "4yBcxwziYuyuGYVXitm1XSAgyHnRudBDo7q5XcdWVSTkZQR5uzVLW6VGmyfCZPX1SkEkgUDNG1VQyicoRr27fg2t"
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
