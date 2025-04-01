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
    "5Vcv4reGCJTDa2T6pkbqXPq2sHSTBiGuV9fiZiMMtzWngq61LWWJTtE9g33FvMzaD5cVhX6rwcUvpAPf9WrrSxvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3cjVSxKUTm9VaXQvKuGaexeGz36JnUEuB1eM136t8PcKk9Fi1PYckpNWqtwc8bHvxnpvJpoyD32DhEoeSjfE3p",
  "key1": "5mSisZVa88hjLVXQJLbc5EVLuLeYn7o1qLijp359H67XjY58qvTeoC52KNuV8PDM9tHp6Zd5w5biZY2EqKQfSCG1",
  "key2": "33EP5VxEnHYK6hNk8gfMfpRTqD8i9FkvCnJVC1PvzskbgVC48Z1Bm3H2Rhgcx6Vuwpn1HFrSHWX1Ph4b8R4PA4cS",
  "key3": "4LnmyPWawUXoenRWvz69vN5SGJXmEou3aGLCFiFHwEPzxSMFHQrsU9Twt7PQ26XByyvmKX39Gvi4JCWsBSC1ZwbN",
  "key4": "51249L21otxdPN9PVMENUoLhTcbkJgLF79xmAdyyihQ7Y7YnbntNNoPEdLiu1Ft4HVbP23NxPFXTM7p6QPbySJT6",
  "key5": "5euM7ZFddXMf7FZnzDmVnXM7Egsmu2YrtuMctD1CUvesw4onsC2xcLd1PwJ6odBxnWiskPFtumSXksshSzx3q6iy",
  "key6": "tsb3faoKTZAyhRR7QvnctASGnx6e5w8F9Zg1mmemcWCV9uUp4jn2uXnUcKczcHRxfpX7x2fs4hMxLQVUEvaME3F",
  "key7": "25xZGHruJU3pdQbcQuZnFsLj4ARp6VW64HBjPwAtNgJLsaDYijCBbPsBa9haoFKBYRJ2z9KRQnCMGW7NFjf3KQR1",
  "key8": "5uGSSTUiXmMPhQr6ZEUxkY3sWGeGSX11QwkRxkeGQUujDeyAYMioF8ipUYSWEwvMzny8LeCvMkjFUX7s33Lizc8y",
  "key9": "4jCALV5yDanDri8NACtX7zvR1hvLunouubB2okghztzX8bY9Y3CuFpmyJbX7332ybZfeNiMTBRo5ZQTqYR1Gbh9L",
  "key10": "gvMS3A8vC1aZw6EkQdfSaGtVxwFiqRPTcigntbYbWWiUcGr2xgFvZt2o6Udaua3XM36EurPHbtot8K1M1qiB7NP",
  "key11": "3hY6hMhHLC2i4tjof3R5nMCxKHyYnZfUEBmG5WgHb5KBGgy4d2ywGLUFUnPdt96Xw49PRvVXJZPG8G8PndqB9QyK",
  "key12": "3YXmM6z4TAe6ECotEccR21uYWwzdvtyoAdnSLUDJ32L2vPujkEa17EzfH2bSKbc7nZL9b9QniWeckZb2Q12HKpuM",
  "key13": "3D6JPNeQSRS227wSAfNdDqzYupmqep2r5w6aruUqpwZbtkHZG7GCgxDm3fJXt5XoWgbRCZfAFHSbvs5wZtEVbbZa",
  "key14": "2EfbE2XjSkcWnnDTyBC6DQCod7HDXVVJz1oBQmF6M6cHCyu9aQzTMe3TaHBPQUQ6puf5ddcRqyAyRUreMVp28nEG",
  "key15": "gJWStuEfjAKRepHMVi5GQw28DEufd5RZVLhMFzq6prytRVNneY79RewwrPC8Dz5ZUQojGYaD4ZhXeGwdEKEj67k",
  "key16": "2WFPhr1eBS4AxccUumAdY1QEsnFMH9LyNDZW6qM71KNhyJSWuZgS7daFvCKhT4nRYBxqMNAiriNdPRvmQHPHGSQD",
  "key17": "4PQap6aHeswoRfKRhoKgXi5EiUYehcgXNG4jdPxAY6eQfrjgR9sUszSNC3NJX2h9HkSfQeLtFgkERB4ubEM2S7nA",
  "key18": "an4RujvGQbHQmuBwEhdHZhtMwVwQv1xuKiASQBrGgDkEEawVvMJJ8nSCrSV3qY82n9PJF7SrGVae4MHBuXVVXA1",
  "key19": "2p6Xiy32Uyf3mgCTHN42oeWCeBDtDS49afrLGJrVAqUCY6hBToDCBhpRQqmwWXKx2soBq3aFVf3EVdb65bPgtwdB",
  "key20": "Rpqw5uUjtc1qkNPdeDFPu9suifGrGejMwy7ijyQtphoXtsKmpCEurscWapJdyNPNKGCYP1cqzr6rpAmwp8zpWy5",
  "key21": "5DnQLMHV62XpVMRRWxitAfGBMq9TVSL4qSMQzGwCm3pwzWUoUMGctC6zY6KQH73BxhG8jbFeQAx8XWeEQtwJR88T",
  "key22": "4xGHe6iEi4J7LtFNc7dwMKok63WjRqyPo81SSoC7mEWvzBhFNwbSza2fbZ4Ri1MT8GwSbABULJD1hyKRRYa4DaJQ",
  "key23": "2C3GKacCmbjEhCh4grnSkaE8insuq1zRtjRDckhmTqUN5PNLgaHJUkXy2ULu8A1EFnxpLfEdVV9gZrhiTKE7fL6f",
  "key24": "3BHDrQLm1mFP48VgynJNZWUmP1mmKQ8xCGYsgd9yzud2darWWH5of2RTWDo5TD6mMPaVVk4CQATc53MWwsjtLND2"
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
