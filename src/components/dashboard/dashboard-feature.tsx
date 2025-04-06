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
    "59UWyMirDQGFbcW5tGSV5wYcdJNrjWVfKmspaHK9M2pQsprruP6PoAQ6zewah8rNjfLte6zfderJtCmEgX2ncesu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXkxnsqctvwo12CtGbayfXqgVkkUJyzsV6ELAKYpMC79BYCFxxnJ1GXjrgUheDdeFb689YGRDvNNkafhabntTCn",
  "key1": "5pb1i2XYbSFYajpdGog1kuYC3Njyk7WmDWPnctkeHsYpQ34Y4w1XiXbvjAjkepj42a3mJhRF2gwAp4ngFHmL6YMS",
  "key2": "Bp3gRm5i4rePr1kVhiuyCeTyYpYb5K4RtSXj1sAisr5X37b8QKMMTqWNmNjTSxcZonNVjakbWxF39YbDX6RLMWX",
  "key3": "2Uwpya9v65o1EYL4C4NbJ3DXpRHtUtoWscQmbRwYia7rwkHT4etifhBDoJjC4wtsEEN1uHaLX8f1tDHiojLh1RZb",
  "key4": "3UXq7tyL9aSDw2cz81cH6PqK35WYk4Nvfo48vuJyV2fsJJ5xdvkdpREPdBgbW85oQDQuN3ygRzXmACoArdfHz3E",
  "key5": "jC8PAU1s8jGy86jUViydkbJqTKXF8q3MnpMJ2wow4N5EXAgM7g8iY2f93bvbMUD7fJBdQZqStWh2bpV2PNPqaPw",
  "key6": "3webuWULrFCp252CpE8mdg1Vy6vMWo8AiAk1GKmhdqkqAgJyueuW73W11KvApAurVz8BPpiFZYABLicNgMm5MaMS",
  "key7": "3vgBo4DTkRnKaovSNpfSHg3wr118geVEnyyrForwuv8oACk4rYVHhtXTVEudAUDvQBkQhoKmSEYHT3KyresncfGm",
  "key8": "U4yBfk5GE1GW9Nq2z9ZVBExSqWZdBMkc5s4db5MbBPJDeuqza4FgDJ1ZXLzHr27tHV6u4vNQigVjVa2Zyx2B2FL",
  "key9": "5wYCpLZWHBae8HuBuZrmUBWNLnyXkA2pUYiKpTcho1y8xRyrarYDVS6FvVJzyDn9GLjnMPbQZLjcC5zsUbTQcfvT",
  "key10": "5jRcKATPTPri8zsKym8KR84grYvc4Q6Nk9LZgtzTQRGy6mPLM7DbBKEWVmuPiKTRwEBWokCoGprC6qZbQarnS3RG",
  "key11": "3xMwPALusqvpTKLSRVdP1UnzssEnqs4xsC8ic6HTubaA9oRZhEZqGTwJi6nRDtwxKKqQ7tcLbsgi1jrj67sNwYiG",
  "key12": "3DtrCvxq3hPJkfB58br56GdJyKGAmssMormbCjz3NUe8TMS3vAFtUsFoab2THPuWY8oFN1Z9BbnMmbEYMFZL6ABV",
  "key13": "29YvvBhzaqbSzZ7s4GbbzyyhgtHwVxZvEkxKFgcrQAoU8urzm7MUndWUkHYcSCpoByKkFoUF5P72r7o7CF6aEdsg",
  "key14": "mYtorkZnzign4BWk9hcfASa6Y29h6LrzTqHu9tZh32ZRQ6DBqdgXLVtRGr3w6S1F1db4oeFwNNoAtwze8AgLjum",
  "key15": "54TzdK6d8xuQLvkvd1jDF1SFKWxYyd3qGwAWJYqHQyRhVKPxZo33K4CYuBWkRX5941RaCh1aEx1zzbcB7dmzw8r7",
  "key16": "5zjtozSLQVcHiftNWYdENLZfUBj5FWDPckjzLKUigiEZ6iA4rDC7pSGnowdWhm8jkbfjHBbaCNg5bodB9fp2H7Ey",
  "key17": "2JPqwFcscwD8rkukan4xVmpTQJrxLVMrpimKFDT8mYhyqHmaDLvcm2xqqL2fHsKumkx4KYGUWLhGiRad99Z2DzGb",
  "key18": "kSMYfVKWMA9RdsPym6V9z3XBYLPmFmCup5LiJfy2t3ZTvuAZnYUxU7mBftxcMTKfqxjPieSunNZHdiADPhpw3oS",
  "key19": "4pyVGmwR4A3w2ELMHxHb7BpZUQHkFkiQ5FSgCbaWibpkMRC2k9knXJKSR2gsK38D1ZAA6SEThZo9yA2uvkyZi3KL",
  "key20": "3b9uQezCpgeygVLJ9qJP9GmYh6k1KzQxi1aUoYx65k8LE1ufmn9Pr81xq6fs3sZaQPWbgn3pYuBjm6BegFeCN5mA",
  "key21": "3bJJzfUism2Pq1tqdsXEHM3ZUcKMX5iZcsGjY28ra9ziTskFU8A8CpFDFTRX2sQbXLGamhXpFWSL4C4NgpiBa4ue",
  "key22": "4FAZLhjqkSqLZncQUUTg6WErhaWy8PmLqr24CWgnt97VWLGJPWoaLKddMBtG9WhdVm2JabgcQHxKPn1vuKD6bHwG",
  "key23": "5YxPWUssyeAFvR5G4yWNCMWZaQn5WRPcJ4EDMXNtmj77vJtEkE9rWCKYvsPDtcyJCE2oMBr3eSeC3b3WFyPwr9BG",
  "key24": "55MFhh1exvGjE4zgnZFPHYkteYBiEhxKe7uA2htFcRUfotZGeoscEMDAtBiJJTtdZMukqnauS2MZAxHmzywDMHnG",
  "key25": "4kMVEpKAUHbLpUwqrgDam4sAQrdTzc2zJXxgXgCYxxsECdVaSRaggXsjqWVvR26fJaSrviz927hQ16NRyWewmwSx",
  "key26": "4ctQ393QrRCRqntf6gViMZU8RqF8DjoPXWdG7ca2JZJddqxmum8L9arkYnuWrPirWhFYaQwwkWZQzbDSfF6yTkwL",
  "key27": "3Xja3Ypvr5uGjix8aVbsrSFWF5fAb5C3PnPAjLUk4fDAEtpwDWoVCXTWQBiarCSNRnPJeofXbcqVJqfjSV7MtnKL",
  "key28": "4QxYDHZLeSW7VS2rBzwcfDm1a9DXGPWErBZGnidFavvS8pbsJFwcJfeJGpQeYFpF92LxgJKvA7Rc1hPWesinkbi9",
  "key29": "31rPXDxjgHtZfdcE4kadqVyGEq3PFfnE7cpQaZAVTiuJ728KRGceBdrkUK18ea7cLoWbHoN6z8icWDVtgJxb8iWG"
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
