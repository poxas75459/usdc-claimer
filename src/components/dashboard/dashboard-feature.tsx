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
    "oTEbce6r1WndK9S6cosYWW8XPtY3xywxaEEyqsBD1tCNoGioDwKd33i6vEJT8YM8KRWbDWCfym85Lsxuq1v9rL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRg7qBwFv2TR2EoskfbjL2v1tRRLYNb6BZphrpZUpyexxCaDisiVLzbdDgRKLZAAFvvbJDZLGwLWLaR1a5LZVct",
  "key1": "46NMLYsuz5VFw18JRk26NK4VNW5CiHJXLxk1to821jGPq4MckvsktSiEd9MQQiK8EqytxmddcuJoPqt2usRsFvfv",
  "key2": "2Z8v7MeCGzQsTtAvyzcbNQ7jWUv5R3CVtuLw5SrumsZahDaQbiDDVmMZs24KusotNbpmwThAqfzKQHZyALgdo2zN",
  "key3": "3pMg34ovu3fvHQFKqqDXXcdp47QjYsS99WRQCQHBSTfAmmE7pzjRUyEzNmBWb4rEtV5pHtVNUNr5npExjX1wcN2J",
  "key4": "4YD4Wye26bAe6uH8dzkRwbdzVMgY4gm5PzBSdZnqiBfTtpY9HGkbkCz48LK66R4Naj7T9kLjMXdUABZFPTiwWdcr",
  "key5": "4vbDquWLaVNiY63JvHHRS5PpqnVDjJKzzZxzurUfT61MacaDiomxsCX67g7awMuHgDscXBNrd68DGeUYkC4cAMUo",
  "key6": "4ZputiZ8mAfrn8GmQKFHPqaVRaHkNqe1kNJhSFD6FPtoYtNV5USxMCfYG9feALBuSxcUzT6EEuf9kNmpZ46dX16k",
  "key7": "MLzV5aBqSH6QSYzRkLaCJixauZe2qjZa5oZ3L6kd5cNuhxPfSeeuEM84VdgFJ3RTVZ6aq72QcXBpfyHzTobdebG",
  "key8": "5JWzSKYK6ZmYnvYsXG1vRx9XUSxwocioxYBpvKR8FzDKJEk1y9jz2s2MeyuzC2N4cRwkjt5sX3PJi19Th1YeAPC5",
  "key9": "4JG8JJXFd7sjoLSyuKPPBqj3PwQ9AZuHYf5F9arNf1Fym3B7n2FNKJgTEGQV2ic6xhpQQQqvQpQCJ3j78R4xBgnr",
  "key10": "3roJCyd33TUzw3dCoZH1rCwnu3k6dtbaFLMjv7ZcQu5V1JwiJrp3QoeJX5iYkii5eGcnmCfmrZCNjaNzBZ5S5ZJN",
  "key11": "HyuSPSCx9XfEVsJowdjWs3mKbFPFZRRrfg6Amxx9v8BLCkpxNGRQezgjYVG4ocs4NMdtt3PtETiT4gnbUojRTtv",
  "key12": "AbXCz6E71MLKun9r5b3uJrpK3obxyEuC5qeC4CuVE2S9sALoyn3otE1pRZygJdgTxF9PPwczRzbi2hLnooizv7R",
  "key13": "3P7dAvfHQHhVFWeUBSrhq28FFsgRP6gkSd1RzzWamU6WHy2HWq2gZfatQHiSJqQmmLcbE41r8Gqk9TPgFvksKAkb",
  "key14": "z97HNQULMRw9ewTpCnV4KVCyhUcFvbH3fwwEmcUC7CjUSRT89tmGh5W3D4J4QC1odLDnPfeh29iiqEqAQrAaX5m",
  "key15": "5zqebHvC1kAougiKCHsaU7SFtnPQRqV9rkSXbwuKM6NcpE6pPhdUEP2apHM4p1dD2NyVHqudoZ5R9hz9M3RRAAGD",
  "key16": "2FwZ6tvQcPDBUmnzVBCR97wqjvByfSxb17sfUD2NqXBy8RS1QZETSrEX7UwV5eTSbT4xgoU95QBjPedBjSZFxh5a",
  "key17": "5zrF8ZJ4sxaAERq3rBqefWsiTDHNVhcvXxeLNtyrvipPhx1D1d2BBvGWSGCCGTvZ7eDj5CKGk7Devi9HZh53w7Sq",
  "key18": "4TA3ZwCq2FAkarNUSEGH9cw7ESmvKnBKpBwX57ppaJRU2d7SPDfVDv31h88Mp3KKfrRZZsboRF7ULKZ5SGfBUQ9T",
  "key19": "4gm9hM8J4Jyrmgpxqrnux3A2i8pn4RGGpJSRoLzMoAtEHM2ZKSLqpDrd76PtoQXgkTqhBJRH5gwJdTuYGAYAY8NK",
  "key20": "293xK2e5ZQSs81yBEbaZNYHFvN6zVSg3ePkZrX7rqtMWNnMMJtnwyzJ7igFVb43soNFmT8tTjAxWjf5c2iBMAZbA",
  "key21": "56dxfKyu3xdS5wjCwiTQEyunMEPeryNVgEo2KoWJoj9ogWfH99KKNG7hFQgPjggG1c4nb4cnSs1tG3DLwTnqdzYg",
  "key22": "6a2t8QQNooYCnQ23RUjTG9sPheEYw2FuMu5sJcPsoFRudkZaL9fNgL8uwXoaDzVmsy6iTZi6gKJyJeSW87c6EHv",
  "key23": "4PjLKBZawANDd5a5z5pg4GyHgfJCzHsoQdj5FFbewjzXprokLpvATgWkL2VcaY6eXJ9ProQYktJQBTB9oVfLQSTy",
  "key24": "4xG6r5u5TzRr7a2RAgHnqnxwffeuSHg9XpkNbhRXtWkT84fKCxUQwyKeUGNiEVmpSZqLFZqENGmGJf1F8SiZqvfo",
  "key25": "4ZSCzCVySYWeTUBhBQwEatVqqzndDWvcQogbJyUHV67CRBsxW5nQqbc1hdCzWDLkdB979Fu8EYGTYcxmFco3WmMb",
  "key26": "3R9vLxdAo1kpV1hqSi3bKXEduGnaasXeSLNoWDF2Qbrtmw1UMVKQSybZGeKv3niH6Emj944GpVGMy6kadG9y4aW7",
  "key27": "2yNZKTusRXYsF1nDH8hNVk36S2Eu6RYNPQCdBe9YtsqABhCf3u5bYDcm1XmwrHePj7gGqcexqn7c1gL5YvvFSGvK"
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
