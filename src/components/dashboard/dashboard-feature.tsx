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
    "5xRLKvhSGMV9NZDiBPDtF5Ar63F2AFipKv4RqH5VbAL1hGY5E9z2xWvAYH7KzTcLhSxXZEpLSrr5vxoBrUymnjaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VXk2cvvZffJ13AqZjYpP4A3CGebyVy9FcNsgbagW5bgjBHyuv9iJGq4hGacucKM18XMJovvLFWU92tUnWCJCQ7",
  "key1": "2XZVNtNJCPGDXxosLqdPe8JnnRFEidW547JgL2poGWSKB4jX93Y62CfgRRsebn1CZRyPBXSLRzGvVJYkRrbGF4sv",
  "key2": "3DZj39CHrUdyU64cJGkpzUMPmPHR9mAm5VwQBSU8x1CzCP9oqRpECZ2fNscx6oQRCfRChsyiL6ssUVYXe5zZ9Wt9",
  "key3": "3AbfP3ux46eeJvzUtE4ed87e8cE9RWoWcuzC2aXEjKH93LpbygixZhYaA5eEkX7Q9VGntGvrH3BFbW4A52Wwvfqh",
  "key4": "4jiK9cadpt23jLg8hD7H4PMwa3dyeKde7o8MrLm4eQy7ip1AvZUpeupEspCRLp788MdiNdaAas12g53FWi8CaTTM",
  "key5": "5m3tN4R5eSkwWbxJhHCGpn8K2a8U54sTfk1LCQtcHFaKrxhNpkBymq2ToZvf55BNhvFy34tKCeK5ujMy33VaWhPa",
  "key6": "3wa9y2p6uuTqFpXStLvDMfR3KXorAno44JVh3CWsvnuF3vtXRuSRCg6mtDCR4A3kT235iBgWTeq8i8KMn6vyACj8",
  "key7": "3W88btG46H6hVtaDwmiheZGSZHobsztwthoXJq2AXdjoamtRsx1hKqG87wWenYac2HYbYVUKZXmpikEYmEM8sysZ",
  "key8": "5YssLDasQX2jfXZ8LZXd9vMYhi37Txyp4WGAkm8X4caDjq2jEwQbjRNBbstgvyp4XyRApUYYvGqg8RTyqHhTgtQR",
  "key9": "49Un79KJQJvaXmGw15PTvTFFZDMS6iCHbnLAZnj7Y4aRiZQxJbcxy8ZEse2jhUGkSjvLMsrMabwT7doYG1pc1y5c",
  "key10": "24jpvAoqxbYbWZXsiiSNsV6kSj8jUQaW8hhaPMmT8X8QsYz9vFFUMg4NNoQMScsQYrcjBoq415dMXbcX6rx1CGnj",
  "key11": "44mQwexueVyfasEXvcBWWiBA5xrAZYeUjHa4GcfN58sSziPVjAQEYXYEwf1FVu7QdvqvwYi5NEwrwRzSmsUiJQW3",
  "key12": "4FFrtfcgK6WVb4zxaZBkw22ZqGy3dke1bbtviWvftG6rgc4mrjTVrS2NVGyAzKRTzwAbGqdhkmRJJwFP4RAJjpEK",
  "key13": "49EBNEePUX8CW2evfKxwfr8NYDv1iueQ1Gh83iGpsKK3rP66TCxLgJhFDqt1TgYpWeriNNByo1Cz6S7EyuuD9NQh",
  "key14": "45rWEaSEqU5h1zp8sqeiKhgNMdsnZ1KUXs2xipGVXjqhJgHuhXWRJyNmNaK4SaozfQwvhTRqGtzCtnZhXzDBS9AP",
  "key15": "KA82iDQ77rJzk1FRKXppGLYXB8NpV99mgBp41v33BFDaMri6v4UazpRSezxQjN67EKWktNXhryyPPtxAtz1P2Qy",
  "key16": "5oiPA7679z9bft7dQZVpjfjUzgF7iAsmeruCQjjioeWz546qKSwFNLbD5XzY728ig1eqqL8AzMmDsnVsZacg9o8X",
  "key17": "2YVAaqWzMSLN8A9tPhtUek7f8eB7fSk1Z655SBtoh9VBbKCvnpZQc22kYWqmKGAtL5xouoMBTVGbKQamYnkQuNLe",
  "key18": "xGRfWcZAmWQSgowGdFmPZeR3nAGnUyfQB7DVL7Qa6rzTbQPLL7DWtisnQ9maYPp69arJwHdRXr9124ggbHNLWkd",
  "key19": "4Zr5VCs5YRG19PkdBxtSsQsHGQ7wT3AY871HwryBdJ2wd6Fy2dpWeTNpuYaG8DySMYZyd2ZR7N1P2LrX8Y1Uj9WC",
  "key20": "5JHJt5Nw7vd1UMpBWx7pBYM5m4soiSN8iovHdW4TYCJTMH3R9oQcQPPbEvjGRZWHyrVAAUE76ifWQ6FU9p2FEo7W",
  "key21": "4wLzSMYRK7gRLmqyRnd18QAeae4GRv24WRA6XcsDbXhCdnb6Te7ZqjzbQSSquwXV63M9NSECJNpDKkSmBqVFnUnp",
  "key22": "zDuyYRqC2Dk2UNsUhukTeVDdoE3rjxPV5kZUNFwyoa1Tqq7VEyNoy3kiZGf3V4okQGjbtgFEa51y3T8LpFdW2V8",
  "key23": "4qGGENzPuh48sbgMWjxC2UL9WWdMmvsutnzwprGWGttuKSW7bfShjnEgeTcHJPvWXWbxSKEP8E8kgcM2Qa2aTxP6",
  "key24": "5U382JSzLwoo43Tc8wAjLvnWbdqKWdLAx9nh6rFNE9JjhNtTQvQbmizrRmbmBJW6RK8FWaYA5vWiRgxDJA9VPmvi",
  "key25": "nUxvHSbwfp2o5BwpXiNq5GJ47rtmMYMvSGnCDhBTJcny7FLYLC8FjzSxdGuSoAfT7RcZx5EFCazeMCfxBBvDyw6",
  "key26": "5wcFMHrcEHcUiAhLVJbg4XwAjMrasgMhu9DWTuYEquvWpib8zqDrxcgzuGqMTiXpnrfaESnmL16rijUXvmUmXiCt",
  "key27": "9tPFCQYatoZeVkDEtmkapNePSqSRwHpU9Zt39xoPX3hkdNPP31bjaEZxC3u4zbWzHxoHNaeLD89dmpperyUTnf3",
  "key28": "5zfc2KKYRgZiP2BDRXx7ktMug2Kw3JPwzCUVQ6D8gzHokh2n6xcvCcESbc2TCaym79rTYQZ3jXxKRVUQxiRHbacV",
  "key29": "3spMC7brjXBVqnDvymFwYgiQ9DqNseiNEizGhERid1ipCA8amDhVp61qGYZZHr5vBD7DEB85nNLa4SxxXQ4ASRWo",
  "key30": "2GDvYcvpcLo8NvBZmeRoUyAQqv5a1QuzGwCBD5rpro9FPeWx7aV1S5hQ5QJWM85FbV3VrLHTFM5Mop45XXXy9HfM",
  "key31": "3wkbe2ohzZ3VNXCbyRfNuZVN8pBNo3Z6AGkTV1JPs863iiusc6HM369HjmDW95am979Qrgzp2qS7miocycvjWytS",
  "key32": "DyJbjdqmDfD3bAb1HPJ5LzcmCRC4pTCDNt7WBCgzN7gKXskovvnXXcsvG4vNXGhibbKjTABqXSYZNp6GEXjFnqd",
  "key33": "4Hm9R5Ra5VKLF7MRHeRN38TzaLSHzPFHgdgDxpwpq9wE83Z9XZrc5yYCDkpmQuBDkebwTzJm85PWBGPxhtPrfZ68"
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
