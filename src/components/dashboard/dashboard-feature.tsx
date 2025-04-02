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
    "3Fm8ZRcjH82eUTADDZWCZFHgqxs87epWP6KYZzG1ZBsxUhQjjWejcPLy2AShhiy9M2aiqqc92NM9bnRgxro2mW3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnMpMAPG7BcCqK8E3xp5uYgQs6NKqnSHiUxFuyhQdkQVoBuhbiUnN4v1h62ZmdmTjgnxLsNRpsFYuE6SL6oLrW7",
  "key1": "21w7gnmYWJqXhUpWBTiYnwB3LMUAB9JiVMhKqqTA3vvUqzcchFXUVpEVFTXA2W5pC5WKyVXNen7xkd9VsGhJ7w82",
  "key2": "hVjUE3ez2Uj7bF6yK4BUm7hyUdnB2diJW4cQjjtVDW6m5wY6U5gM5Zzx8oSEsqrtt2yxMQc3Apa1yDZE41MGNET",
  "key3": "q5rjJzdcBpt9jZ6cjj245MF4V86Pg58xM8ozjnUvqoBUTPcDSbuHE47MYtkJ66xhpNGmFoJDAnRKBNEaaLsu7fX",
  "key4": "2nyus63WF44N3Vry16jsrx2MhScTwNrM7oNa3rXs2cqBr18MWQJUeSsqFsjojTjfg6PvBx8aATM81z8rpn5B1XRA",
  "key5": "4MD1du4Gj6VPQjJzfKQd1ghVPX4owshpbaMKFbNXhPfJWBjsBqskCafqHY4iFSbDtBxvrMDkFuudE26aKwoq8jVH",
  "key6": "3z4HDxHWkKiU97CqRToc3aDiq8mSpq2k7XoABA1QDjrjUg2hjZMg518XL3vSerKdS5nNHVe8mvk1xXpWQjDjHVtv",
  "key7": "5vfdJXhBroEd31MDEFoxjq8LBdTP2993HsGDUWU7GczxEdPUziZy52rsc8H8kLuXqLZBAy47VCwZhwLCDbE6cmNU",
  "key8": "3ekKfzcrZsgxR6fyzmdRSjC64H8sLgNHUSYMPyC9eciYMAeRhdRowoGjN3qmQeAnJrQhzW1UDT71vDexkHggoxRA",
  "key9": "FEziEbNX3VAcyvQBAFdJebuqTrXPVVT5YZJWGdBD1jiLc3QR5pBg7FoTrzugkc4eixjDxGBrK9Ezuuw5JCTtQ35",
  "key10": "2p1EsjvHdbDEyzasxjZXnS1shYEWRRqFYAnt7JnW4SXPQULfj2Wm2FnxC5fS3k565d59T7bS4jcpUnP3aru49FXc",
  "key11": "2TYCBWeFsVaouTNKtjbpkzPi3nWGs2KJ9YF7MsV3ts4yy5AseV4oX1S61swmdvzzNqTi7xMXG1bgr3qfMvrJAwEx",
  "key12": "5GX83oJnbVgsiPxCLX3GKnzj6oajDpK8w8AQD5Sipj2Rffv5oAUq9Hmu8H8DHp8uTh6tb5SVUXNHJuwzYoo4KxTo",
  "key13": "5WgnYvxvaFyxyKGa7bNfuPHWWPPKrWYoh2KUp2aHoa32GR7x1VFBQEQSq6FxzR2LXAzfB8djYp9duRsBv2BR1Y95",
  "key14": "3uXuoaSUTE4yXcwZ5TFtC9g2v3vazvLPCz5nUDKNTPvTp4CXmfwLprgxP9jy8mKrKPtkLuJAayxCuhSuSVxLkun6",
  "key15": "5aqWSx56wDeJ4W9DvSmn5xCQsHEFqymyPwFv2ttrRsRZXE53ckPMRhCmNXRuy1dMBUTQtZtyoNeRc4uhZuuY8cE4",
  "key16": "4LQdnWD9CDC7w97xnoqGnpjq6JJoUQpJGLkzdLY8VfP2fNwHbVDmrhCpM8R6AzztXB3ANmTtfuGEQnyhmMnwvnkB",
  "key17": "Bgdu1PmDXd4m69ncW19TpdgUDdyURXMsFC9A72e4CnfBzoQ42pu6hjVTQdVD8jYJRkhfvQFo5V8Xe2ECw3kF1rF",
  "key18": "uFtT531Ga6uiKgzk7SK96mugmdivH7QWuaTg1BU7z6T9ZoTNGPXyzLz1vKyC5Xccfg3GtTzybQM8CaYtMtybbDQ",
  "key19": "5njx49sBJ5GtU6TvtzDps9cDuN2tkzuY7nHJUiKDgaazkWwzUE3o4nHofjw4epeBXUFLkzXAKqTn2Y7b1FyUBRWi",
  "key20": "5tyWvgsa4eGdNvBAHVrhjV58m6QGrPYXREB9W74ENmGAgMsGnYXbGrXCJ4Afqun1HmadtSYp8KCN1xNt77VxP8Tx",
  "key21": "4QxqGAPESe8j2D6ABx7tFKxTXG8XiqsJb9AqBx5EGz6SgFDCJkyxuKtjN2WhA1vxqF24fQZu8yFbG1eRLPDbvzpQ",
  "key22": "2PmSpSN6MvEMrTNJC8WULELuYJYmd9f3CTfQWXDzPyr3khNEN99WReHCYJChpJN64zqLLmtNsoN45JqxqD2dSf8Q",
  "key23": "2RmKvmc4U2KrfuFPeFELSSSdUDqm3agsiejAtcGgQC76ehwMSMdXT72UrKrZSLmBbyeacs3DTpJcdmb3QToJMUdz",
  "key24": "3ZUAJzZ85AVuM1w5cFnmXzvUUqB9Rjgc8yMsziSXbNpH5DAGcuHmbrqo7ixU6TLfw3aREosf7cM88iZ9E7rEunMw",
  "key25": "5BzWnCuDZDGp7DQENRf3G7bXj7BhBvjtopbS6M5TbWTTeZSdBisyVPgBqVLnLcfEcbFCJ8UttXKKPTaUT9yyZKnG",
  "key26": "126uPeyM1H1SVxv7o1sULgwxr5w7BbFZikqw1uBNyzV3LUvjJ8Xtqgn3ocnRwVdJZ3CoqAf9zMtiZfYtWsHxwAFp",
  "key27": "62H89CswX3xENo72shpHdM6uLyV5A8bAcnf26rAdgMuoiEBD9ozR7sTvWxTX5mSijvYgEZRk2kcuDvgfgR6aHZQV",
  "key28": "5XzAXz75Fn5NumgizuP1rm3qBFLaqpKsbUhGXwPjzfF4nYfwVtryVggzvFapF6GJZGJbGz6Zr41kVE5d49Kvhgp7",
  "key29": "zd8xKjWqTHK41c1VrQKkLCZyJAmmJZYE1XB1Vnf8FSCwXkoyHEnF9ubDwNtj36ovKY4AtD2qJHqjyq8zuHk6Wex",
  "key30": "3bXu3FVzKAHqRQUXKyZVPPs7MKPiTtNYD5WrVHQEkCL3oUv3oqknpT21NoBzxeJ8vFK9QxrjuGCj9GWtPDqmyNeW",
  "key31": "4AEr8jXVXTZax4a6yw9eKTeaUqPZFCUvYsKBmGzP5tXzQwCnXBLnqKC831fX5zJzRCZcryjEi5o5ZhseovMEJ8j9",
  "key32": "5QMjRakh6hE7rNDNDe2kEK5iwznnpuqUxVeNsEmkTLrC8xtX1Fcn5bZyBjnP38wJHRoPjRmt9ZugYnLs1LLTihhS",
  "key33": "25RZ3Mj4k5NToKDr7ZTFUUkt2CX9NE2dBoL2uRjvPr7TF5sR5tNp2EyKeBTRnHh3nz6iboSsxXWc2fvmHyuvA2qM",
  "key34": "58ax6HXA2xHp97KKvp1sr6sKAshxyBVwf3rs7CRvCNa4J2Jyzt4gaiYLMdAo7tKiJPJYVRa78dT3Q1DAc8Nmjtoy",
  "key35": "4zvw8sRDkhMa9PisNZsrVdwpH9es16qmzM6pewKLW4gpoQjoVRtqPA3uFDYr7Ee5xBRyeoQnwZNVYE96rfBLzmqg",
  "key36": "4hCZhLtxQHeaYTqZpAwtSJ4FZxe2iceBmEs59DNqF4fW95wmMexyqJLNJknvpBfej1U7gjgqWtg2nTvha6Nd7Lwd",
  "key37": "2TqJiz1BYGJHaxBys7UfmTab7qnJyQfs9tHuDqgESxr5WKWqTJvuPrVXc7WGLsVANFdDhqGJsVBxB3VJo6tUmeGc",
  "key38": "2VMNf8Dm5kRtqe834Bvrbz4AYMeJspTdZEuCpanyap7Ub3fmv53NTFhudYbY9qyxtRRi1VLzHr5hpMJXjAudwqDs",
  "key39": "4N64dATRg82Xo3ydaUtNKgUB1aWPEdyXG6mWJi8D44Ba41sdmLY6URVn3JdDt1f4nzAHXSjPPTMJoUHP6rwx4R5a",
  "key40": "o3s5aFrrS3t331NCMw7SCuCRfsgYeRibeeZ8RibRpLc9jVZ7ce6F7SLFDwwxH1aQs4aoeXx87tSHDkHuVnq1yWa",
  "key41": "2J95CRpZjTjcQtxLMZycYrC2K26wApPCpR4w21sV4jci7usKfBZ9e2PYZcPcTjm1bDfNVMzrsycNw4dimoRXv2X1",
  "key42": "2T92AQYVFe37xErdeUhjumVfTE2XwJc4k73Fm2MdSthB43b8eMx37GkNgkAYKi9dGaknbhp9ifNtxX7JjaHceKFw",
  "key43": "4EdyAHNbsVSpMx5DYYb3dX6yxaCAYWrXJU8PZRyxAHaAxuJyaZKYa7KmXyKpuHEbxBtQriBQ2eANtPumktRx6rTW",
  "key44": "5irrK4vP5dmDnBX3MCGPRjt17BBQ64YG2TvDUCozb7V5xBbDuWGKMKMQK1VtHaRAgDBtGE9fKzTVjTsipN3UKwkq",
  "key45": "3aE4RayTLCbRiUUaSxLB1JKkmra7vCYy1fmaUxcbTJTXt5JEq5o96yyEjpgub4HCxnWeWfaTMrPjvKu3MfPePMqM"
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
