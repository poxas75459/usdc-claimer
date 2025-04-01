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
    "5yL6e3HQR4Wv4mubecmXcqGNdYZEKTWo1HZZPpxLr25yRq2ctdNMJ681i6LUbthdSsVGDC4GLG8B4VrDqG6njAxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhDbHDfvsPVNER4XkEgiAYr8fN6NfCD4w9JFFw9CHtkGm9ZpHcen3TEPgXXb21TcHrF7QzD6tyjJQBwRyQ1dCSS",
  "key1": "n1eRcygEm8H2mDfyKswFKykBKjnu9zW4pxyFNv7RWxE3CFryn7xD7zELFKadzmbm2MKxsTeYyYxMm5MvNBSsDZ2",
  "key2": "5cH86iphMQLWtdbtL2Bxv3w7K9c11LhMCW22qrUtmoCxnMGL3RoqzV3WbFkAqa2JKBxNwcajfhmd3ce9CUGM67FQ",
  "key3": "2xgm8N8otraWjADzcR7zupYCdtpiyJjn1gMSwxsQzQtC18d2zxz8sXYsbq2FtfF2eKW4n5ENruPYwwviyArUqNQx",
  "key4": "vfAp3QstcgC7iiK93zTnzGdyYHauKK3QsvzzkD2UQX8c3ce6FHHdnRqF8sUxZMScy4pnG4yvcNLYdpgezFxhKmo",
  "key5": "3JW5L8wdxdiavjihnRJsY7sMGKdghtAhdDz6Z9Jktni1EpZKjacRy1WyKVvw3XEopw1hWQnAQktkUzMQzaq9cHvK",
  "key6": "53zgVhLpw4AHMYLRBuSMxnEeQHqbbCTcuNH3TBRDPeUz89tUoLremv4hcPvSsHgxG9ouhESwWQkM6cCBzoDGMumG",
  "key7": "43nUELcUnrRhJaiRhq57t7UKCPVkTiPqbBWqq7xabBq6cJmQq387RnZ9CfJ8wjFCP2kc7bVmj71cxcqY4YjSv3Gg",
  "key8": "WGVunoD6qhJCBg1g8uiQocj73xut3Eum87akQeZ9Hu6ea8X5hz7NMgf7Wfz3fPRBLto9Ayupm4RcJ7aamFD8ncn",
  "key9": "3yt7wZukT5WNQx38NaTCewT3hvajBZyST2pEepdY8Mc27Xyr6es239bybgnUXb8f6dUUvCujvTfVVu5X3JmC5dq4",
  "key10": "3dqtFe6xNqNKrpQ3PmuRDNXjBHxKep7gd2UZz9UYCL2e2fx9Hwahwzudqr2APan93SXWX1MuPQFwAt7XvSCZXwgZ",
  "key11": "3qZkJBjQQAKZgAUkUtz6YzHKpefTMAQgovMpsqk8jfUdL888z8wwuoCsSyqCAjUMLTNcz6MRNHgpsXNYqdYi5HPx",
  "key12": "2twSbqHrGViSzTHiPxynVxYYsckECosVabiaEnVstgam6xQZt6nJUJbkFmvaSJaHtz5FRmvuK1F98BhEqNVHFvRz",
  "key13": "EiTx8mZGPZc1KYrhk1sf6KwEm9oHGBWUktKAFPGmixWhL61oFB2ooeeMBV76zfWaLQ7iiM3K6tsQxSk9cxYqD2A",
  "key14": "F2VRsZvUUT48VKuwBzY1Gq2keb4JK7ghuvrMtfKYCo1A8HHWr44zTRsaeW964c4xRG4jvayFUph6GxLDhWTFNtW",
  "key15": "48fTwEYRVpn3SDt22vwXFaLgBCedVJudstc7hm5v1z82wYXt41Sf6jZpUcpjW3poBbSRxVRcfaJYGZPYFMCz3CBR",
  "key16": "2aDVY7RcKAL27eTUduNcxZ3PNXLTqZrZ93e6DwBhM74UM531HkAuJ7hivrT5D4RjebnLtxeym4LYYNNRNJyQLuzR",
  "key17": "2UnNgaQKVexqMzyeMy1LeKmT8UtA8YUY9qxgCR1Pv4wrJx7EmpmYfYFBNTpT7iTemzqHepMq48VDnjJFybQHfatX",
  "key18": "3MvjfnB6y5zxhGL894KQgyUumvUakxSKLKxNnRNgBWT8Utyi7qvh3PBxGF9RSqhfJ9e9G9hmuPbc1LD543FQznqT",
  "key19": "4zVhFfMmCAFsH6TnFrH6koJWRkY9YjeU1kiFCZ6ezY1KByt7ANN7rjRMXDibuoBbYdg37brcBKejwCosVxUN5LCc",
  "key20": "5VFWiSA9nWr4XpGUeuLzbdcYVqY4GCUdiRnTP8RxzfihDieC9XiydhPCaUddcPnMTNeeYMC27GZ8TZK87DC2zDcS",
  "key21": "2n541ptyNaPCnkPnaSRrZYUNeKaBSPVcknW8vzC1rUBcZxNNezqLDoj7aZEaABDTfuoJpdJ7rJqamokSENar9NoJ",
  "key22": "535VmtQ4x1wzSFMk21iEhDxF7knMB1L6i2S5t4GStgkwE5d6aoyxcd3vjT7iwinQyq92wXf5Kkve39o4BqDsi5z6",
  "key23": "WSCiJdE8WCfnVhADxmKFnWb6zdQSL1qCrRAjHNYCxcikgwFYT7YKmo4Eu1raR8uB3gxdwrHxUnchXTwtUHjS4J4",
  "key24": "4dEeNQG7mQnD637UFNAeVkt2N4ezDbdYh3oN8xZURPTJPpEnHCQFaKDDqyfRzSWPon6K9sMDzAumnm2YUJVZmbwB",
  "key25": "62eNwoJ8jyfJErDXEx9eSv5Xx8cwQRZ4SUytgtjaZb5kaSvoE1dZifXDv9TCqBBK54cXeaUbfZgav1dDgP3cVjSj",
  "key26": "34aWJAP6nrrqHCJBYFYXsr3RsHBrN3kyoc4DdGm3cQcBb5N3b3JVCrJx2WneTKdhFcSF7cfwBLdRJNg6VUVTeiAD",
  "key27": "2dzsRRqrmym5ghqDfzA8dRg6UyAMbZtgrgGrSZZPiT7VzHZabz1owLvk7ydUVSpLprng4rX5vFYrU4rBRw2oQtW9",
  "key28": "QhnSxquP5oTi5o8uAWwAistfh5rwG1CCTcstvMb81kSB3jb4CcqCL6yfnjfyMFV5qEAYoQnaFiiUGAKTxu5LyBp",
  "key29": "5DoLhhfF9At3qEQBeQjRqBqMc5wTaBJMSBHfLbziJS52J8TsYqh9nu6aBomVm3miYb9hxa3CrJ4d5Cn1kw2D3otx",
  "key30": "24pSJiDZuS7VvvbsYzQkeqdokaZc6YyBStnTcUxuFnEm8zgwKD6KxLGwzfkWg2T8je11dzXSxdZMFejReMxbjFAu"
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
