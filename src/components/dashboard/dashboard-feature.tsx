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
    "3HfahfjSM5XJhcdRPccrbxY8d6zumaZdynzEmYZJgVWWjuZJ3QKCSb9pJ3qYw9yeBQAgPfNgdkjWJGxwbtE2kbig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498URGaGuAeMRJoUZErscjc4WWquzRCU1t2F47zwQ3srtWfNF5AgP2xixXLhJhJzFGXN1wUr87WHzCom33zvZ7e6",
  "key1": "2hw2inegyDhtqCpuhWA1Xfp8gVdFPQPrVefJYJvn1xvpfsYS2HQPfUvvGSRcuHUhr51qR2HzYubcgseNgvQSgBGm",
  "key2": "4pEVfjPVwH2tvDAUX6XzYLkQxDJu3Jdjcf6hofwVzxpcQ1tT7Mn438tebcNg4Q8UKy4dzBovMR6YeRyGfVbqtFpF",
  "key3": "37iK97iUSKvCjUp7RkThJynpkretrH8k9gmJtTEpxTqzjkLKEvPvT2ufsHdS195J3TjYs9my1C1gbHg2vaJ86GZ8",
  "key4": "4yg2692BBpjvyoGsrXTELXrPobT8173Fz4Vv5RBDv349SqMyJZMbtZ7YTxQM7J8qtDmuedN2UEsRSfLFvuezaxU3",
  "key5": "3G3S52Xbjyh67tkht1Jw7ybSf7cwpv1TBGvbXRTVeYKfQs4RkVRymHGFjYBjt7LQDrFbFty5QjPiidmfg76i1eQH",
  "key6": "xVsARuBpnv5qjWZXCvz2zo2EKzsymLjVJBzFSKEAjAY8ZuWWWksMbdzeGaQmWG6R1PCP9GSLYct3eW9M4uxbab5",
  "key7": "38wveW4viZ78XUVjxV16AeDxM2KTsEJjJkDpfuv8wUDsqt9HYeKBpBVMEUYQyWsESxZ293g9tSaW8wbSfyw3NSsC",
  "key8": "3bTgzok4DewdTd6AbkfSrSShvj6AuQy1HDAUQvUXubHWcZzpBh1dtdmFpwMfCThkqRZhUR1RVJtas4vNn1yx8tSQ",
  "key9": "4wFQzkuoxtJcQcYBbJqUn8gHbzdZkfyn8bzpaAgYJ9t6xmQjpr9KKHWBXPm4TWxnxu1mHXgqmP8NJUHJ7Hcw5aAW",
  "key10": "4LBtMBuhRbH1om8fxqBNGWTZzXmj1hB6hjMkkYiowkSj6Kn3PhfNzYVntneJZYYu4FTbqtic3Wrgs3GFjecTEzJD",
  "key11": "4TqXv45DX8GpYZQLrWpGdvvQ85hCY5QdUJuMLQJ3cdfKyLiNhrEenxQVsLupdo2yuGvvBborDoeuG38kR28gsnoE",
  "key12": "TZdZWzHJpjmC9fpR44zUfd6NMTapCTGcDJVs5NawwY4HpemFC3bTDMXYb4Kip2rtfzhJD1uF2RQm9rMUpH2z6kb",
  "key13": "2AvM6KuTKtQ7rsea6ChCe3kN9b5CZRto16BMQxp8cnckKjNTnraKe4GpavkScr6KHNuiaafhW9q4VBhy2qDb4rdA",
  "key14": "3SRevYHcs9EbDdKwwN6Z8UirKkvEz8EGzoUJXdZ6Updu3GwXiHEdesyMMZWV2w9b2yC69ZiwpGQY1WMEHkPXaae",
  "key15": "RPQgWLC6n8KPVsq3CQjEP9h4wjYCPGPbBrBEa9zwH5KLd5FMwh7fLbJtGjZk5JbY8FcqLDpgtQEHjDo7WWWoqeu",
  "key16": "gn8k2w5dzNCwsJaq8iwUzQuqogLqFhPMKvawpwDhXae7TxpCpxB8fvxDvL37Zi2GrKyqruLVDJUxGFjZDTMApcc",
  "key17": "4vzVXUs7A8SnwpRWbYpvuozmjSAeRAmgPhciRWntQ5x4x8u6ikp5rXxG5KPp5BMv87WxacgbppbK88KnmYuytDYw",
  "key18": "3tzc5AdJpH8UhiVANqeQDPDkWpe1Q4fJSWQyVFVpRAK2TiWfRqsYw8Yf6e7yFQQo44g9D8pbPFfJyU4daBdbp1YW",
  "key19": "3tq3786FWwgdtimS3gMHQgkcib5KG6qxXJpye5jzwWX1xBC2R35sdP6wwoFbBzmphNiLD85bPhgaTTRRuxtG273S",
  "key20": "2vP6ZGNv5ZH5Zoas2JALTMUezoEbsQsUwququLWgSmgZTgbWMwyTnieLBR3TTYnQbrAbH3WgdFzp4gVjyZhmDTFe",
  "key21": "44gxbKqgTyMBCbiMrLWV3xNZ6Vd7SeW3DVSpw9EVNDHzvQdvUjimnjLxhRKQA1nRh7n7Pawhn82W25EhqWCEXXVa",
  "key22": "oS3CNqcgDWV5xtETp8skYgXSuEX6d4AQbwqgWoXdQzBxkzEoGpDGqwQujyQz3ZuTsk3YEfMMVtd5ULXBm6aG3ox",
  "key23": "2pgvmDm5UjJE7qDVAD5wvsHF9TBKsg7Cb24cRxqshwhTbnqE29KZhPziWk1LEH5bsVRcmXztjytEznDjviFUNRgb",
  "key24": "56Caav5qF2x3xgnzgM95N8vTYoYMw1NHJ5jfvSsiJPyi6Z5HiHT6QttSqA36bVCrWW5GnktSJAyz1xm9r7hFb1Jy",
  "key25": "5DTJbh3aFDT7MY6joWWYhsKEovBusbvtJcfpDkMMqBFXViSvYGZo3L1SxvhMZnrWTM5tvGv7CzXryUQSrkgm34y"
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
