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
    "5yg12fzgdnLMK3qcJSqynhbB8aHym8p7Gke78MxjnG8n5HDNx78iVcTh3jZTzbFwRd8pHGYwHFTnVEQGekLXPe3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNmQCeQrMjEEcgjFBiQGTLZZHARjHjhGMgPv3ZpTch1hHdbAAPPz44VtcmVwLNNKPCSgWFnvWhnb7vjxFw5y5xG",
  "key1": "2ZnPfGB59e4FREXdgbUgaVCXKR6bk5nMgda6K4M9mYRTxmsCcfNF5tZbZWHg7hPAFeGLUTHrJPDRbnhrFEeJNsBt",
  "key2": "LhKEyfVNa83g9yBKd6yCnXgKhZjumyPkZ6zMGqy59ysq4cPLz47ayCQvdroJYP6z478Eq5tNCxCqunvwd2bdi4x",
  "key3": "5gVNXz33Ee44eii6G2by79nmfqFRzqeEoQ57wDwPJfdpwL8osUomYd5i2acRB24QRRz85zt1UzoQ2j9Krp9RKVX2",
  "key4": "3MyUmXqKWF4wfsaDzBAUUov73Pg2Fhq5zgcBW9XPhRUEUj8sGu1yHVTyazsMCYmkT1NjRfqEK9YFnvqKubTcyDcf",
  "key5": "33Aw8pRkPqjnyey31WvzWfQXLDG7uEU4twFnFbf8hHRUy5qxTVEYuKiqbYVjbHopbtvVHdvFdzpKfLh8y8j5WStw",
  "key6": "2RP8R8zC9iymPKQSMqpnGmB1kHSJXuizy6iQKoNRocmxt4vjP5xNcJ3iZkXPoNJfCw1tFiB8ffFYF1rrnsTGoxDu",
  "key7": "5xcjUssvEQrLcv3ao5nQZ8GYUBtqcbks2Grnuuwx7dQyXENYTf5G5cS1iF2kcEzHggmsW92Nczpc49r7PkkB4DgW",
  "key8": "439Xnnm9J1HfJ9eU83iJYRLwjhwg3As96d7aSrCALxLa37WUiMvzSCpoL8WCJEpjHaW5SyuqArH1AzY11gDtCnu6",
  "key9": "2VzcNstAvrQYKyVqeUbWs3wdQjEYps2mTGm4q2EqSRH9oiN6CkbhvcgMJcino2qVtXVCb7YfvsdBsGfgkH8JqzJi",
  "key10": "4RhzB9HtaWqACViQ7iT7TMurVYkQKyDdCQsyrrc4WKypXMREuSYm6SQReWvyTGA5giywN2s8xMymkUK42N1y9JhF",
  "key11": "34pQts48cNL8EW512BovVHpjJD1kDQDBrD32S6KK7QowuPTXzP3vFAm3FcDbxfmMJQz1CpjZuNappgzKvDLQLRyg",
  "key12": "9NczGBfMHsKApqefN7ptCGiMSpFkVyoP4xuLHecfSUbULJJ5WjPbciRuaEPUjvMZ8ZoUPX3Q69sGSTs95jxYHo1",
  "key13": "1oVDTxU3H2PLVpxWUyGyjJqgMVFAezdmPguQczLdT6WFvTjxhrr3x4PAB4t5vcDgQsY7UqXyMb5U3xZ5cvNTRNF",
  "key14": "3AuDEEtvcJmPY96yAm4ArY91fXtStp2NS6Y14DXLicr1sjPn4AmawhtbirwA2f9jkGCTAfVcTDXg75dvVrSrnueH",
  "key15": "28oU56SaoD9WyrWp6w4AkGXf8BKq9LbLRwAqDP5JYWVd9HjgpFReWTPGTyW4E5T9qUMAhrNdtotR9R8JTi1ePVV6",
  "key16": "4iaZMBgTMif9jQp1n2KizFt64DhyguowzEMPmE7R6CXX83XubQJrPGAKwg846HuFf5PZ8wGoZCWfg2jN6Ci9imBQ",
  "key17": "Yxt71rWRagFAw1RrrkzQeoKVEEUZnQQFVKAugUTmNw7Hu58xfXppiPKayfWq99kz8KJxg5tbpKGAxknWSekhXCi",
  "key18": "5FDDfyPpCb71BKvksaH6pDuQpjqNaRKnmpGMqbYZskYnM3vGphbESCM2J4pWXSYT6ix9X2qEwYBqhCTb9saxpQ6v",
  "key19": "3y1iQipLd8AaxwSXCK5rhimSr3tv3kgCHk2x8pCmBBvuoNTkfjXTi1wmyZmZDtYJZZD5ATf8pwLpWPBHZZgenStT",
  "key20": "67aHope9Cx3t14yDz9FH2z7CxDhY8xZh7aMNkPRqbjhFRHmiDNYo8AgVF5hbyZUmpTR3CuUgSMtL8RzdtdyF8t6Z",
  "key21": "2QrfsNH3ZgBMPeNas5dd81LDr99epFHLDCcYC5PFX5Uv2TAJDzykJCh9hfQjUCsDSe1CVPcuVzPkVgbD71AQgQqF",
  "key22": "3n2E6FPvd7mGhFQrGPNJKaBV31ZdGQhRLMbjk3iPnF1qH2J3MagwoDBi1RQ33ABMY2s6YChpSTxbLj18Ckj6TjmL",
  "key23": "4nEneX8ZXzTzkXtr8PtmivyHBuSUi5YuZi8faPdhhnAq7YvBxojamrGqhnPkUdo7BLYKwdXrJARbyQunKsgzC8U7",
  "key24": "2w5h5sbzCRujuuc99EyBnuZoDHutEFignQoGGPVoPzwceetKvPhjG3cF88t78uH5EN9bg64v7eBMNcvzztykS12Z",
  "key25": "2B9bjc1nrmUgq8JSKkaA1eh9hDJeVVahoxCyJViVk25cdHSAi3q6ik2LnB9sR3WW28d7ez7Qy8NYmmsddp871FWj",
  "key26": "mn2b9rFVdxADUk3WWAPhxkrYKygqtJxHn1LfmBN2PRyhWfxrbagiViSUQAQoX9GUVMaGNypHHoyJZrpQRzk7NFH",
  "key27": "2x9QXaWjBfSq5NWmRGP6VmEpv9FsVXodpBEnLq28qbq5uREgSKkxPNbxhrj1nsgrK3scPRSLVEGu6Wx2tLyqXxNP",
  "key28": "CKV4yiwJUHWc4uKzwAQEcZRJ6z7g8mdXVcebQcmmsqFjeSgzYeSLo34bmuCTDde4XGS7bHjxmmKvsZTWgJ4WFP8",
  "key29": "2ke5hQA3DYDW6MgFpPrkZPqW7VGHrAN6RA363y9aL18hJSiEi9kH8PMyA1VawWziTaEmyaYVwzL3X1PENipgNnPg",
  "key30": "2iXn8wg61RALpnSyZ4BnNRGeqnLQgEsRd3nauwf22W5rRFn1D5k5mvmLX5ct6f5tBZnEzvVMDjZkxbB1F38vWquL",
  "key31": "3MJS5Zb2KaXVEXXqsJzr3a7QSZhSv8VTUgdJ6msJzK3BcjuTWVKHFeeqcVeBfRdPVQKjN7RAtHWECpS8jw3nu2qn",
  "key32": "4AG3wTWn6hDVcTskgMVvbNjEsgjXZRwhj9SHULAUd8pt26GGLmJkaDvKzodV7uqCgR73YnLxJGXrFHHSjXdpkXzo",
  "key33": "D7SMpB3SjbETFp26TkwWioxX1KLoEJnk1TN1oTWtqjBhmz9LezzHdUfeSxKE6vqfJz6UfYjg1A9MtchUSeUzimV",
  "key34": "xgHZBQrUP4qCoAMEw5c8v6jdM3oeiwBnKj3AJ86JAgojk2bzWu2WmwVi8FbAz2gWQry1PJkiZMSCWNkvsoz4tuB",
  "key35": "4JBJFLuXLVLGNizjMZ2dsdegwEBhN217YMGPpbRjXMLqZ438GHxGEfsiYWVQdF9Hk5SY33iiAWe1gFr3YRiHGV9n",
  "key36": "YWzmYBfiHLXAXFAGodgei5APiqwWMoLnaFFHbGBXvxNyRaKgkuz9R87RL2bvDYzKnXR3aZaCGG71ayySkjZfK4f",
  "key37": "4CGEtXzefjHwFZrsunJnQmt6K4ekLBhJve6PP6S1SnDeLzGCjNgea7hpwvkkxGqj4bCpF1q9rtg6MdcV2HqHptiU"
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
