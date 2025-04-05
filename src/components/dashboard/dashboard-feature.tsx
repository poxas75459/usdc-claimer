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
    "j6SSqZHn8N93KAVCa7FRbV3gsRHRSaoEFYnWsW3PsgVMbbjXuanoDh3o3wa2MNQ711m2dudhjHgrSQMUJYVRcmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixgb2ERaHFC7BCnTfQhyZTPhNjENKbvPwKYAHcEYTQzvFu5kckMtU7ptboR5Sn7yAn1CTM1LSE8TMdJLqY3RdYb",
  "key1": "35NTDc655BUuVQ5nEksEHyWBV1zgdRsB1eqC3yVbSQarFu4RwmSUzNiBqhLSmXMVtJvScJuf3uYwH6eziW5eeuLj",
  "key2": "64pxiX3GWu8zMeixMjsvL1eK1GvTRAHqPJFcHH9zqtftDAJcP688a8k1XPJWNcEKp8gkL1EjsAW81NJuuv83SSPM",
  "key3": "4gtocQu4xNUQEzNW6JpYfHCoFFCYkeHGkJtgpT6LjexXGWxDETCdVg3x8nWk7o7Tub3jUXrRrqB934kBWzV7m1He",
  "key4": "51bMJg5f5efKkiMKe1THixbh9Eo3cmbFBzwmY3xLz3WZWbKNFUkhVumBQ3rfFrjLMbREgHyyJ4nRPqFqbFRENbkC",
  "key5": "8BLySJKwGDYSBhy1uV9K3NeJaP7J8vpiFGh5LSnm455ovjPgVPN8Fay4MktaMRmsZaaD6An45vmdRunfrDkHEeW",
  "key6": "oH1r7Ds4juzzAtYuG1FQ2Xokhr1vUFFSetw2esoRWBYRkmcXcH1JpdrehWXDTYsFh7qNZsFcv8Af1t2wXFqB9Yd",
  "key7": "5mAuXs5vXvM7GRTq8fY1k2tSf9zLqzJu1ovdGgbZbT51dXk65y8Lf2k3ujA4auY97TzmhY1o2t4Nzqk35PfmdiX1",
  "key8": "4eQpcGX9a5f3e5KHJMjgv1972MvDGnuve1LmXh5VxJfusQUeFLuhsG3K3WFbQu5MJBA8XQwvoNw92TfB5iU3ip7S",
  "key9": "42upiis1VRhGAMJz24JwJxPoS3NsxoZ4335Jgc9G3ETpYjXmXhrDhGACCcYtCu3SuNXkQxBTxAQEqvtSopNMf29b",
  "key10": "4haGa1f8TsPT3LVbWrJgyZbqW5kB8sH5oMVZQh56gQRVaSzu4jN64tWYnZRw5jbZjDLpcsUaNK6Q2Ap5CjiPTgZz",
  "key11": "Y8BPrHFfzNLXjiuRC41HH7DaMFzdJXNwD27uzDcyGQ7Bms9i1xJdJCxrn8Lxaqcx4CvrdBgscEWtAa4XBy98yoi",
  "key12": "589av3SHLj9B8qtNS59U1ysy1eCX2X2xN8uJ1CJFuv52mo2o7gmkKqWPECneW4hcRUNJgdAoaLW4Co59qiydhSTE",
  "key13": "3VSPBgn9vZZTjPj6TXLzHpSgbcf8s5FMF5NpJrmJg8shqa7q3AYqvadbzkQKXXkYBCWxj5b8JGyuXc8g81y8jTWk",
  "key14": "4V4mr2evTG27KSobQcmN28KB7zPPAM9wFfqNjC3ChvCB62BFVe14De2HayP8d4sqWgpKizuDajAQqTG9Ki5QG2N",
  "key15": "grNdqycBem95u5npbVCksso3NFZbAMdLkWdMWaK6bquNE7LN7nmVRKU1DumnBg3bFMXEgYpq9kh4HEUzLao779Q",
  "key16": "3zHu8mJEE3im4i8k6uWcDykcBasq5RbkyeWjoBbTJ3bnm8yXDCsKziMcVxxpM4srQGNnmsZJ1np3jT1xEXLCHtgB",
  "key17": "qi1vEeJvGoDugKZBRskhYk2yBKLu7Jryk2uLGPPiP83Mmw1318BD4g8DvnvQJ1EPYASne5pMf7YodfzGs2mp5Em",
  "key18": "2kKerYkmLxPH3WMzyndMzSVqMNWtMN9kk7Ee5NRvetCR7psRZLRrhCRvWNiXAeRKbANEuPSy6qcZoh8FcdENULbk",
  "key19": "LYJVJF7yjUtpmpEcvXEocJp6NU2kdL5TsY1P4g7XGAi9XJHvLkEabfaTqr6dE9e766Mkmxk7wzKCugNMWTz6kSv",
  "key20": "2H3Xe6sn2orRAbVY56i8Z77HNec92gmsqBoWoR92mEuAkw6okbHSg2U2E5vMFPAi5ZTiHWPk4M7aSa1qqpjbMxmD",
  "key21": "4ZHJvUVwdvEzstYnN1kWwD1k8NkHWmHUukxSkeAvdSEVChegSNQHFD1RMTZ3HskoR52KTQV6w7c1xRatjWUuhp1G",
  "key22": "2Sb1Pnpnu4fNyoupjzZ5JUABUW9h7PVXx24bs4R6BKCS7q4hgnRRh2io1iHzKj4yG4snvpiAgije86BDfhRPJHRu",
  "key23": "NAq91uKjmFJgqncxzYCEjypRHiDtjgMFwWVtDmkcCxq5BVVeFmHThJAe7EAixeUqgxfzGwXZvvDasiixVLVDvKT",
  "key24": "4BwXQFCA45cfhRMst2kPQoK4sb3S4t51fgzCNP2NGAgwkFZ5Vu9nKvcHR4cA82K83kBzVWjzLHXKWNXQEd1DzkcR",
  "key25": "4mke3PReAwi4dgnHrFHXCkva2t9H5ms3naQHfbbakejudcVRQDq75jzRcqvB4P2jf6EZ9jbFtDtLRhp4ac9d4Da3",
  "key26": "ZXtKSAe6KQqgspMhKX6TZhKnR1WMRUGd2LBogt1bxw2qopL5jL3LhHVKgWFzkSoSvS16XzUfXnWUCZD5NjdSNYs",
  "key27": "2sLTTBAzUVDd1W6DSAGx1ZizykXt5DTChDrurw2Z2q3E5ESCESv57DHwxSRtpSiXU6xHQCKtT2rsfSyZ9fJ64pZ"
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
