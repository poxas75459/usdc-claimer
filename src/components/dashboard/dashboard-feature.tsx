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
    "2SR2AmGm7GGK15NbhAixCQ7w4nJ8QxQdaVWKptYCcEA9QV9iGt78SdCvAH7keNrL2NpsoRXxCzy2CyKax2Q8Wqr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fh1SwQqoJhENnxeSZVmb3tKxJGWV7rBdvNWMpWxFohzTD9kx5rKwES8CbDuY3Fr9qgD8Em7XZAdRuDRQvufyQKg",
  "key1": "3j1Y1dxiyAxA9Fegr7S9Zfv6J2MsTPHFyNKQYCKDKtDayMWcZh8B4bHSH13mwMWFfPk4XyCVb53hRKyavvNRLQre",
  "key2": "2jbMwwxmhvoHYkpGDBHY7eoGXhWqDETVhkp8aPJTa7wH3BZZ6viSxKyr44wz5D4NWcuqwFmJqkG4y123xpRju7zX",
  "key3": "5u5pBGT2DJ86tBB3G1tBgNPg96kAzf8YHFXDU9c8VHdJTWX4p9vLXA7YCgkbbRa3DCfEZhenj5a1Lwcsirmrgp6e",
  "key4": "3KbRYeYEohhDhXKM3fN4zhgapwHB5RjTGEiiMKkcCqzBJBxyScA56kiUjBB33SjUg8acugYs6KSRtgFy8Gcy9RCE",
  "key5": "wofLFtKCiFwR1a9FNysvVJFPE8ufcW2KPiekUZW1kqfEfyDThD4CVj3k6fFBBJXPDhore3w7oPFSaep2whzX5AD",
  "key6": "47QcbVie4cBA3CcbSfNdmHMp8FKxTMHN9eAWiSsyuv959vY3LAbq3FVsgFGtAyRoM7suN2rgqhmuf8DBcxgFVLcB",
  "key7": "21uk4TLwLWqkjmeR53qvamwYFPYYku9L5T7Pq2npkS1vH8yBzMVV6KoJhhCDZHqvLSy1HED3upot2KXQMMVVJKZq",
  "key8": "6413oektZBovi1Sa5pVCH7if9gDEGLKt6QuUcxCMEEXFdrwe3hVoAmfoVDg9YMzXyHnB3AeuvVnFdiHAtvxScNuu",
  "key9": "sA3Xh5df74BjnTh6h1K2X67dLYw9cXR357ajdHXf2oTt7bkA52TwDe9RgxFVNMnPkNGpAuRHkjdY5cekcup4L8W",
  "key10": "3eRy2dLqDbuJZHDwmQhEBcTELA8q15jbV4u2VPKgqqqRaSFREQ7Gm1MgmZQVtjuKXa79TJ8pX3D33CrBQxjJznUB",
  "key11": "5Zj6MGESj6S9kmKhkQ5T3wwwVAaXvSomN1RNQaarS5YopHbGC1KiSFyc83tnqrQs7xif1h7c5SkAsrvtJzBjL6Zp",
  "key12": "3SmsKpb5DZv4maeEzHTjGSUuYT6VgFDs4rjBLP12dR5trNDTuHqVuUQRvr554WzimxhavCNHpXXeddG6nCJFLBa8",
  "key13": "21CX1wjpaFPg8pr5A3pEBvEQW5abXZhrbmZtYGNTX46ZwkfYJQ1hNRz6QvP91wQM4mvHWvT6fzztjgwYMzaUwShs",
  "key14": "3gSPfSnCM1yisEoeS4uo7G6cXt5sf4jyaJ9FZWqGLHMjJtShMVnMbJFNMhFffyLJimNdTKvqXqipvrVmweYzNNSz",
  "key15": "2RBq8VUKYYKE1aVUaJ9xQBhALL8KtvjjQALPToGi8vbRt9vWpo3pCc6Yv4exQqpLkSbDMwefAnJinGFXhtZrhzmN",
  "key16": "3waDjmrPY5G9HtKTkfHiFnPgpZB8HYV2Ej1PHngDahRewaVPyRY8wpMVYFMQA3ZaZM9NN6N1kJAH1cDWXdU4Pi9A",
  "key17": "39H1WFYhSboUiwUpbHmdmVxmG7Kp4qHSt2JnpQoLXMiZpBgPfc2E32JHRN7nxvsf4zYWHi4HqE2KaHQXusBh1SFP",
  "key18": "3a4fPkSTruqF3i5bXQGEK5CBknNgUBTaRRBuXAnzbenHe9V3gn6cb4HKPuCKQw295yQjTP8DXXLcpjk7mbKopKPn",
  "key19": "39BZTDFBCFAwRf3LNrhsS9GSvrNnB1bpPSW9A86dM8Wteg2PB2R7H48aYPwuEKMEPwNDfgtc9wtEhiAVbHHnRsCm",
  "key20": "vV66K47VnVjeBZZ8eLKZnREZKAah4AKdaYRtKYCjiQwGRbR4Dcc2FvNE3rUy9ms2p9KkYaK7jMYBo2k5yTLTnsM",
  "key21": "4kPtGd5sCwFwFMr6e1wbXNw7kqmFWzPyVKQz1WJEffqDVfxBP6wkLQWTrUudAsJDgSDakCmHNpTkG2S9FJYFKTqq",
  "key22": "2HMhA9bj5CCpahHincxAxLWoCVt6qPAujt5W9vq8P2qMTSqN2atPFPyhyMJqTXgXUyMWDqhjRrrNkeeStzfqX6xY",
  "key23": "41y7vjmQvcU4DMn9SNMjfenXk1L55xxSBHNt5xHwSTb8qoCpGHQFPsdS96seJvYpGU6b5DG4di3qW54uAyMarNZX",
  "key24": "2DnPPYSWSQLLauiQLwyHzdwTv99KGKr3BpUSZkVvJoscoDnsJoBDH7xBqQ1WKN1EzwSKNX8PaKPjDxNXpzxXhR2D"
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
