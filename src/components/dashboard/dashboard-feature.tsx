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
    "4fV6RcjJDJKKbFkAEgiD6JSg8FCTtpRYbgYWJumr32KMDtg83e1dVAW3E3sb6sV9p3XzNHXMyFYAY56AvW1RbrxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpKQ1S1v5H6mqoHzDYQtM8mHbPgbZbPxBMGasTDT6mTBZwzES65y4UcBFLzDuzQT2LhvZABYZrBVkMvZKgeonEQ",
  "key1": "2PD3FVihWfStcCfkRYMLzG3C8fJGukJDZqpMf2n1CJ2ZaCKGSJhGwdoRDXHAdi7iQDZNX8oavziuSFQNHE9Ta3ZY",
  "key2": "3qCt1eazUgR7oAATJ6ScTAod8H8U7ijo42MEQyPpiz1wwXepxejyGZTYAcdWvJdi8dtAzJd8BdfqXpNYcfq2VPRo",
  "key3": "2T1GVJ1MhqB1DwRkgvX6st463KtbRuqYFpEwfzVTKM6XNkzUknHgHgyVHqAZDm6okTqJr4sPj1bzQKyH8sN8kYVX",
  "key4": "4rNV9tHDTrzANCJiWmdqCMuiJvzGLPohuHLE6nuYFBP92daSu4DZNRw2q2TwaMcnA8jwURNA4Lyg7zEcd6Sgd8GW",
  "key5": "3NfvMyCT81enyY5rTZZzrV4sTSXTzRBi9iaqa9Z7a1MmC5LAG9WmGVk6xbodrvd7iTCLuCSswaNKdSoR2oZgMmod",
  "key6": "3us9dsUtJv7oGp8GR9PSUfyGJ9BG5ELMBxBV6SALBcNpvyYAa6jQoB6ig9KR388Ec8fgpugB6t4LjLFjZUUVv8eL",
  "key7": "peUYpNnnHVTgFQEZnSAs9z6e4iYYoc1pxFMhxNnXbczDyiSD8yNrYb7Be4K5jYPvtAHyKKf5HdyoTYd5tX2Sf4k",
  "key8": "29VxVgicUe1DYcMeNtb569GVMsVGCE1bamgbfxJNMgg9w739GAsF12odix98MnMNp8aaNNAmXRXnRBMYEktUnbQX",
  "key9": "5TRYebdRWbKz38BR4t5ywdKiscybR5iiF9NagiCRq3c34D8c8BBRpNm6K4sbkPkQ13nNJUsqFer8H58Dwa63Fu7h",
  "key10": "YUgcrfaKm8wUTYQ4eX2N82tkvvQgHTu7J1KXauN3hYog22W5gRPG1E5QqtyuLCwh8Satwkh2F3cdNdkLvGe4N9D",
  "key11": "G3tWYdkCBd5tzo5FiUtKmQyfa6mWqUs3oujgjkPd5KxZAGDpZ575vNokUtB5xu3jkEB86XHfjebhRWJPb9BMP6M",
  "key12": "3K9bNoKhJaEEfVZfkfomkRdHWnS29oHBrUr2TkwD4Zdeqh8JocNjjMtFmPZHD6HKw5iNzEnSoFaSB33m9uoonSSQ",
  "key13": "39LPgyWLoBN9m3X9JuuuW1GyRMgrbTg61RRXsGNkNV7shqBH2ZX2uz5Vn33f9nesNGQ9CiKEbRH9yt643yvaKafn",
  "key14": "5D1dqBVF79YTzuhGq68CrHVXzPQ3Krtbfdx88CRVDHdGMomwXYAzT4CTbATQcHunvUKWUDUwqcRufn6fkgusJW5v",
  "key15": "3RAmwuK1mF2oxuTLfvuNfXdPMxtwzVuXFYqFnFrT1c7XK4APGsS98C1hiF6gQufC3Xd3P3sYaGxgNYxGNjwJX7M4",
  "key16": "5z75Bc9af7Sv2SauQhugWJTePzJsHjhBJumJaedkTZ62E8eFiQADMPqzyZQrhCiwAeeVS2ZvYs59ap3dQWDTSEai",
  "key17": "5o4SxpmaRnNMStbTm1cSfYMW28kc1MhR23nASinKyACPVXUQ3rT8PgaGn373VHQMHP5aT4eXR5a3Qyr597hXE7YM",
  "key18": "48y2BLCo46CPnQMLAz5YppoqEG7octtim5MTEffWE5cwSfdRQExta4KhiFgdqT94yZyo5Po42UxTWq8kUUKdv7RV",
  "key19": "3AKoAkseo9bmX6J6BqhtVkFACJPFv4Nrk3AB9te1zMMXv3Uyk3VLQiRcGx3hdwAFZTjca1vmK8J7s1F6WFVy2b8T",
  "key20": "26iFrvftXNEmuoQKG8DcFdN8BAM1DSrTmwgnHEEJzBGrL97qsBBeGs3hDpcJgJbUBBL3rKYUiH532PLUiAtvbjuP",
  "key21": "4XJGsFnyQLT4e3j3U5XxuELAKp2ussv5f3bhBA4eDFX4RZ5HZCwh1Watt8iiZ55MAYkxv7b66ARL618qMdYno647",
  "key22": "2qmxpBMchypZWh2armVqjGZiFTNZEWVJjrvvi4bEa8LTfsYuPQ9qcfXwth4kMaGBXNCXnSP4TfsJZQnefFo4Hkjb",
  "key23": "492rGW36jGQP8kYBBHyFJvx15Ltnr7ug6Z7C1e1XPcQL8jFRwXMeWBm7GGdsiCpwTKUHgkJyCw8RGujAL3fg635T",
  "key24": "1zoK1en1zCHW1M3ZHcRWC9et35bjWcgL1fhjwhjAX1oNAy5MGXRGMUjKsp3paNBxWgZjV4NCL6PxeR1gyxTi9bq"
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
