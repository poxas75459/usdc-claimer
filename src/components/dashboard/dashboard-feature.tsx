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
    "3KLHL8JGung3WHvcdeC3pDTeSui24uz5paWUzwt2nPCvAHiEiQuS7qx35dK5UXn6hUsejNxuuKCybq4BgDHBA1ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nHTEf6PnxPhJtFykakqiQkU3JdYsgvv3TZumM74Z4p9TmpeS6HzfYe4XsrZiv7uyxx2f4w9sj3QsDEPrK99Pcb8",
  "key1": "4pvjdsSxmHbmevDttu5nvY23khsYkSAby1L4adLGYcTUcVUirXtH83HBfryrUyvpMSk5MdWpqd4yD8db5f1vLSjD",
  "key2": "5pqajCtJ7PXz4LaMdbrFwdfndsg2hYbMHFuUhoM2SBXmtyY1HeGxsqC36i7NgZoR5HN4KzrMuASd1pQP2v6ZfQeq",
  "key3": "4gTgkitXx4in4rVZaCKLbtjwFstwd4sdRoQhJKzY8eofY21DdH5ucPLrR7UKJBWrfz3trmjoeLatMeifYerYkMQs",
  "key4": "4X9FTDZvrGJdkgVJmfbeL4VTFQQnqFSCho6c8BeaGEMN5ZoiaXi3VhduyMp2g3hCp1SUc4b1Ngc23YH3MFj7LJBn",
  "key5": "4hzQ7nrAiJVJhdb25sykHpMUYyTt5FNsymu1ZL27JKeySctbw62CAHqqro5hngmagT3ReDusGTjTkfq8Vv3ihE9d",
  "key6": "2BeH8LzXEwkvnbkfwZb1WuT46KtCEiRzof155arTsccxCCuSdqHbufgap1HBTXWS6p53ocD6388djtFUNQ4MU8qs",
  "key7": "5b5Qg4ofWfkDXmzcAQEGtg7KXaYHrJdLmm7DHNVRQDCGHpqRZ3cZRCtuhfaQ3XBqdfpezJftivg23H61CcGiyYt7",
  "key8": "4a8j2Zfn9YiVx2MQ4SEVzqDLcqcZkkdp5ssiBUPSuAzBueFGrkNXfBAGBa4Y3cqWsowSCdqWaR8VSAH6bJgsnJgi",
  "key9": "3HrS2189eLXvvfGKpv4ZEiZZ1EtG7fJrK7ojup9M9wdPUptxbqPWSCAhHajt28YQr4WyEnqYvWyzdkDzKb9DyMmy",
  "key10": "4vqNLwGFpu9zc3zDDDJwSwvECEuQxZtJTiW8S232rXnkQz7uQv91wJo3uQEvXfa5MYNTuqASsYkpY6zGZtNNyjLC",
  "key11": "2NPSrHe1X3zNXKteYvWjeTseZwAZv1CoMQdu3Ga1kenZsJoyH2FeqrFHq8eNGnPMdy3qX3jJKSHDiwkZSW2dVAWg",
  "key12": "3ixCQ2vbRSG6JtttVfWrfMMfmVzYYnWiRgN39ebcrW9ZsZSjRTta9RJxtsABXXF7NmFEcQMpu23S6BVjeDdopAiD",
  "key13": "37whQav6Z4CQPsxqVwJyLVpxHUmeqAWZJM9i7rQuAba8AMdhE8Hdx1sW2A7eY9ZCqgDxmEpLjRX9UXe67x46Jncm",
  "key14": "3vy2L5HcBTwo3z4mYtEBKFP7dbxkQY1YtfaVYdx73uw393ji2pV8ENSs42Skhjs2GEBXpjGZ4BF18BuEmyzhT69R",
  "key15": "4kmSL5LgFxP6S6EMWwRP7E94C5VxzPvyijsG1q3FLdH42LRD2aKwdRkwJg5dyGfmQDWV26yMSq4qHwyMsH8hg1zs",
  "key16": "piRWYi3WGYr5TFpT1o8jv8ZGMQreDW81kj6VvTm7NHxF3gFtqux9zAZfz935x6jgQzoHCJbPhRf1uQS11QZk3JC",
  "key17": "M3FHhUUCW1JroJvkt7TsvjMUb3ErYFHf2jyDu1r6wPhXD78vzaaN4SkkMdMBSdMCh1R1YQtggH1Z3Dy8sd1gmma",
  "key18": "2eRP5uPbR29Vv85LN3CfJxxheubKFafozSaN8DgkiDP8etYoLx9EUMWjWboQayosb39UVmzug82GvYmyZXf7eta3",
  "key19": "3ESYbcg6WjQP4XWUFkf2AiTnQM6wVHuAE9sxpr4PG7Ax77DGRovHr2PbTG5pMyWut36donVpvYCRnu8KPJKZias2",
  "key20": "5RPJjZ6NPdjP6UsX91oenezpFxt3NgCoy1XhzMfCjRqwBcFfjDuJZFtt5ZgDWEHpTwT4JKhX12AF8g7jGsBB9rJC",
  "key21": "4tPb1JaXd7TBdL5hi5E9yyoKxT8fYkSrYJHZxZAvbmZGLmnoUUuWW2FP96SvvV9wdCEQ6gkmto2uAUaENBmxM9LK",
  "key22": "5Amzmz1hrxVMm6kiHgVCzQpUiRWhc1atziGb6gxRJuvL4LjeTYnzV8EtyAiLYvJokcimJ6W2SZv7A4iJjAnSKWWy",
  "key23": "4VTdUozekeA1gbngG5XSbUoVN22DWwn32e9XVaspnDpKwaWYmb2R1SHWM6tacBZmmZ4oMQR4cCgtsAZREXduT64H",
  "key24": "2FZhwTmsBDVKyWewHaMFvFdGS6w772p6C45S2MydxjAT4nBdTcF72kDhDvwDae3tew9q5TSr7K6zyvyuBQCMSu5a",
  "key25": "5iLbT6hsGm4xKZz9nhLku17dtL8GSASnj24R3JZAApeJSm2F6KYL34i1mVMgWyzkHYbXP5gJS9BiRnCEGMp1qJJ2"
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
