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
    "5wuXX5MHiZPVK42GCPs1btoF384cpUSMN7RJSfeeML8ZrNf4uq6TdLvC6GtD2tcPBfrnam8VG1khus6WzoxfZBKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKFNYEkJH4szQcCqywzfau1JrwGMFRsrQSGtyucy8hWqkKSaiUrfmPC1o353K5jEpQ3vYH7UTo9mNCtmN1qNX2p",
  "key1": "SGcQ4oTysZBv7wdjyJzfApjFcjfXZtNeSEgTJ8h8PY2WcWNeg8mzDhf3SwK2HBFek9ur3fxdWrMx1th5YUioqGg",
  "key2": "4o3J6aipvA6JWeQyPPspxqGu8mNNqVvaUHSBto6tzyySVyzeo824G8beNoBypznzHTMfa6Ysge1RHXaue17b4krX",
  "key3": "3VfZshBdoLePPe8hY86ytSyF2vZ3H44qHTwB4MLQHNwsL49WWgsBotB8ZrBimESRao4Vou1LzY4ZtDnao3CrToEC",
  "key4": "2Pio1Bqq9ujrckn4kFQVMxGcng6dbWzSCsgJ7TBH77rwDHiUUnGyRU8zU4VcrPVNQZ89b3ydqzpLDY5KFme1eEs7",
  "key5": "53NbsF1b6s8UvALkGDukCUEjV9jy6Y954u1n67tvrKHdZf6pje6nZWWFkQdaP87M9VxugX5ggnwkRi44StXguNJu",
  "key6": "51PLprJLD2oYGdwXxrWKsTkGYWHubUX3rCwdTMpU4kxnprz2hvqZcaRE33BWvd9P2MuFXkLTb8zNFm8z9LuCzLH",
  "key7": "3d1Vy3YtRUWDmvEAF4j2273WXSU1GguyeUk2T2bQxdmiBJXAxSHDE2zswCjNifgG7xtt8Q9y7FuS7RF5u9vsQAtQ",
  "key8": "3VXZja999FpU88uJ3tPzx6G1Q4z7DiSV5v9nfVTqU3aAuYVjwh2zMiRzcFUzKoKWFhArGx7qnQZjCMSkCmzQ6H9j",
  "key9": "2HBJhnRsE6ycudyfz9UekyZNJcmTtCnGrGDMcnseiVwntqD9h3QrjxfLgMjc9d9awiDgJ2BFTzKNjxcqLHHjgn9a",
  "key10": "5oRCGH9FUf9pJoEor46cpXkTZP4J3X5odTxhmpQBKNDmxYEFFdiUDkFZisviz8ffHyEiteLQUxXRsEBeLK37U2nS",
  "key11": "52FvgvNTpgyfD9utX7MKc65JixdVVnbw1MX63GpzE2cXhMREDPKnAXPpmzSfsGgz7BcSsTBqPhuQvdWzq5eQ3VPF",
  "key12": "4xNkAQKj6pcfxcwiqWtvcGYfG4qA1nZ7Ef1V1Hvq9bvBSYvS9UECabVzPFj69s5EghoYVw1vdLG81vdRN1oom11V",
  "key13": "9K55KAkoy3SZuuE7E9wzmmNw79qJMezzBtbHMVCzJpL4njQfJLFEews3KYwS94TeypJWn57HjBzpPH2shomjUyB",
  "key14": "rbk2Kw2iLELCDi6pR4aA9wGvKBM2JPK2TntgMn9o7M8Gg51KWRHvur8oViffYrBsUZUKhNS3uzQyedfVqhVYzHw",
  "key15": "4uhtwGNAQ6k5wkukzp1uwEAShRtpX423vmA2CBxbFWi3bpy74DzoxRHixm37LgfJje3JmrJNpd4mniy9TyRyKR3o",
  "key16": "5RetNa4Kg2torp4KoQrLneXc4XjgQBFJ5qjXzyzYDM7ZtiTf7LJZDR8actjQPc4DeTAqQFihh2GQJfNA4DFf1r7t",
  "key17": "4T8DnKoDbaAX9SEccExZSRWUvREWF39iQSpw4HdEfSYkeTwYh9XUBixTmnQ7RFt3TkZRLPkEwLvVXYoBLzD72bMe",
  "key18": "2aZKBc5hkanVxFi1B1YF6aAErkBm3eJw2KmuEDwErqNvxVsRpz31Tn28K9b6jbQ7kgo5BLzocuAwLQ3v5wTqWCvL",
  "key19": "3FLPp6Kobg2KBMjcQ8wvEpCoV8shJWT41Dmg4oA45gbAsJ53Y76i6WoZq8hf78bhfZ9yrnDv9iySTt8fArbrH8np",
  "key20": "4xq4mkUg62MJZ3PeQge53u522pYXj51ux2YRX2RCE2PSZEWf34kDUfrnZ1hraS1GAc4WFk3yRpa791iSgtbp1D87",
  "key21": "PKGJMiDXJzHs5H1Hy8dRYV4PqDKqz3gWyrs3G5EZ4yURD5oquqV5fPbRrmcyBFh6sdeL7oMUysfrc7n5oUyJ8X7",
  "key22": "28QW9Bdp7bE6A9yPthnQvSX17wGNaNTd8dxPJ87d5LsS53XLV3RN4ssMsN4pcpc997DZGBQjovG6TpMFbSWDzXVH",
  "key23": "5ppLp7PpFDyaibHgcPZPNxeUaXtNNTtjGL8F2aRXtA5QrTBayH6oy881YUFvvS6db9VomyTyo22pvHgynRt6cpMJ",
  "key24": "5VbdzfsXm21FykWPBhb17znH1sVMRV1ee73PQoFgTgaFMStcUp8raz3wnPt8Wg36Zf3pyJmyvsamfkuc1V8vQkBJ",
  "key25": "4V825o8mSdjh9ui5q8uWCCQoXKakKdyCfQsqAfW7MVVmPq3k6awvCULJB2GcTYSYaxfiKLVAA6Nbi9K2gttFDhxo",
  "key26": "2iSXjrT8gqRXGtNw8StuAqAmYPkBBk2VrszRm8P4mxashUMmyNGGoJP6MJYbuomVvkVc4JRc148JemUWxM5mJWwM",
  "key27": "hsVzaZ3RGk1DLLUWikM4hinsTuyGghJVxrXPJBFGSWqyYkuv8m6p4osr1P2YnD87ynQPZKKd5k8WmCTXwq1cnvL",
  "key28": "54t6sKkSs6zn3xWpRS1dkRycRfa27UNzozgKVmA8CKETrCrZ3Z45ms8rM5xF7CyH3uBEmgJCRDn9oN4CocKW1vMZ"
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
