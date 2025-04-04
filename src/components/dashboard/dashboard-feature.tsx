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
    "xz8WZHzHn5bu356Tfmg3jPLmUtEghZhtWC3CikxULbKa5VJiGGbbrjSeSH5tKZkrnYvoc7YHStu8EyzBN1LGPHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRJpQBtSRUDbjibJFkDLvESo7hGviaKBySfX9jJj7MiYptSDeTUo5RMQogmSnxuPRpw1fKVxeNYDhzFYVvWmXMF",
  "key1": "YZNcb3Qm9pfwBeefWi8VFEuVh8DqZjcTd43cEtbeg4tt6NbAotkxmCGRW5GuGPUQHSjNJFHk2Le69rVbHcrsCmP",
  "key2": "HVNxDfeRme5g3NDnNM89boGd7berTKeDp8g7ru3LsVWxcKyxmECQsVo9pZihuoPjtd3LMQWLEH3AxnpZqW2Afsj",
  "key3": "4h7KRzW1eQ8ZJokLegwS4UWwvQS5UUJerAnG1BRwVnHt6r6AHRwfQQpumoSFZ45yCoXFzSBouUVsTrfZWPNq4Bi1",
  "key4": "2QDz3VUc6WCjEbGKFZzoKiyn6t6WRkQno7CQ7w1cjuA9TnT2ARFFpCQvcX7tEiuqTJaB6kYSRgiVhbnjr4geheKq",
  "key5": "qhwMAKyKgfU9LfNBwku5wLxG1rMtnB7cViZf2W8jPP7goHnKcVaGJQqMwMAcrGzY1u5Fun8FW9h4EKnCf2W2V6P",
  "key6": "mdx3kmPkpgjCZvgsALQQv2EgkrUnz36NbgfRtzyMfvQvFxnrEMkv6YjX4x3Q7XfT93cyCPV27Li8nPNy9VNs78s",
  "key7": "661ppccDueexAds2Zbs12fRpkNf3Zubfu3z82gdz5RGNzMVBEzB54k2tGMhKJEqZApxp1hPfkcmSk5eFnngD9CRD",
  "key8": "3n7wkFGobv6wyD7K2PmGzML8BvEFo2eiVrARv5tvUeioGL51xmq7dbgNsJgHuZsGScuarj1q7CkfJJ4Gh5ejmpSu",
  "key9": "2JqQKnn6xNeiR4aogv6veFjKBDApauJ8qhDkaudtdjK5QVe6v3JkdtNmVAbbRLWCxVFJ7VwS2Rz497VeJLmBG35G",
  "key10": "32Hu43KUbjhzGz7CzBPcGBHgfcLm9xxvJU6EZQfV2N1sEZrWioLsX9M9FfeC2RASXPZsT6DB7N5YZ9ATYE4aiNgS",
  "key11": "4XzEJYp6KPx1Fg5zGsMiX8T7A5yvdLHSUMvbCxU5K9vQeaWrBiH2EE8AFKrrH9cMD7rFHmjoKgmx9qos5DkhUz4F",
  "key12": "3MV6hKomaGw21pYXKCiJ7rR4HkgG56gGocK1x3fDY5sMHBJjwza9BqtzF7nyQZR5YPxdbuELvCGXMA4evyDZAEeB",
  "key13": "21jiPfaH9yfwKZD53FuXM6QpBLNrRmFyNp9LSKdFE2ABxtHX5GmcTaPUesmnxfjSEgC5USWYZFFrZbUWGri2GpFs",
  "key14": "5MxtsciXKCdCXA2XvfpSkYEffWdCc3ekj9kmML1GxWsVS1v83yQM5nKpBgHr7nRxPjRdcsXgDiVD9jZ9oJBN3Rx7",
  "key15": "9iPQdckqh2FW9xJZ1smGfaNsC4xaUaWi3sppBSBmzWwhbHNcD4KYU5QRdzZNonmzJ4Ubhx8XfRafmuodYnvMjb9",
  "key16": "2REfq57M1ZP1pu9LUa938p2qcb2jVZFaRTArEE6n3MTukkhHRW1FkFUUbPRiUzkQob3GqBvZDuRgFrWr2TwCsePW",
  "key17": "c3xapTcBzCC7e3jbNmyZ3ifDYSRQwLMJcPSUfCqE4onAeM2u9Tb7AxAZVBejRpPKSAAjffsNjgGRKLGRxCnFMZb",
  "key18": "3BXsLUpYTi5Wg3ND6ZFQrRE1pt8aXcjWPW7LpSdeeJcY3RKesyBCig9aP6kGA1DQQaykXtanCvKEkZL4bgsm1cEG",
  "key19": "4STL5mQEjYziMu3ApuWJPdK4HypV1mEp6BjUv2ULKWQCmRenuHq8DCdrDUAszPt2JBuYhBrJJQqsMSz2xP9gkF4o",
  "key20": "5NcXweb7o6EsfNH2Ue4J2ej138qEitvMKM53vLA9sdnfTAnK6VD2mBm5smVHGNQ2bYzTXomkJ74QBEKhYhhMSqEF",
  "key21": "2MtWmoVGo3C7LXyVn8d6rmGbAnwA2gJc2kRqbKK8pXXFWEtUEi3oWzSibKPFmR8ayKRSNhLCzVLn5eLPVYJYKPA1",
  "key22": "3pjzcxuPMrNUGyLVcss34SArSUFbFyXvwUBS6NQBMwVGm8tHwxNpmepCE7ZYUzddJkWjDq91JrEE7EvQ31qQRXAt",
  "key23": "4iU9geb6dAmxBSjYZReVXBhqLNurDY6GpoeUJ6jWA5Ff4T7P9tosJdVZJcE4R3ee7wotBg5D8qZ638QQga6YDwpf",
  "key24": "5LQdCSJVZUZN2oh4w6R3u5uZmbEiYurUtxdEZmA6ZCSpyKkCLyd28MGc7psBUnJasE1bSnyQMEsp1AAA4sibJRD",
  "key25": "3aqfR4Lsn48HRBoPWLF1XKBHdyhH2NjdQELQm8Q5VTsz6wQLZRJyUTarLuYw6gGsX4dfWET5oFcsdrZkqv29tn8d"
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
