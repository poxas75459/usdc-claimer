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
    "x9VfMHAP8dbXwZULcAV29LKbJQsoQvHinGGabPMw52cuf34MtDYpabqDTHT54ytdy3egTg9qtTMAuFYZGdd7wim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBbEgxHVNbykwkoioKrM6yjrHthmFDQthzMy4mrj65sScPKcgMcLkxx2vcxBQJnQNBykWCTfEgdpx4FsVPLF86s",
  "key1": "46GRh3hdd6ceEixB6ed5ksBeSt6JVFq8fXMjKNjmok32pCM7pHPofknBoUyprV7izowXw3nw7NonN8ARetqCHxC4",
  "key2": "2NYdCn3GAsDp4Hvo6tA8tnDr7KTPBfjfPezgbgXAVm2Uo7BKNWqbrQrYdKjvwqCK2bWhKj3GpXMqK1KgiwR5dKBg",
  "key3": "44poHk9eWyFzzZxj5Uboo3o5Mfrv62xDScu52CiUm6MMcVTjvQH2bJn9f7JqqYwbHrHqrowkoayR9LudbTsVmS39",
  "key4": "53fGqiKCwy64ieSVrcbouFoajyogWhsWghEGEAH7GQGxjqL6gqF5t43uWnQ4dRgb5GHJjvYAUMomDpSarBD9z53o",
  "key5": "51cQEhUvPTYhfNjBdh7yDYNAr1Av5jf9qTXhbAoaBJd7NCxpMQQcBuc3Nr8giTwCycjpViwryzy7kgEgPPYGpyqx",
  "key6": "zRuL79PMbg7PY5gAdCx2qgyt935wyLF9RpCfGL8MYwKxpSFSwfbQtHuV8iEAve4u1nts2T6n7cPVpKi5DFQcu2a",
  "key7": "3aMJQ7cBcTTRdTbwbfhqZXKcknMXGPFMfLwmx9PVjtvNzYcC4zH7mYDZYrvWxB9LTq4Sx5SqBrR4u47QpurpopMp",
  "key8": "5Pq8zDMMz5yYK6q3ijw4V8BAjo1FdvnTguv57w8wyAE6F3qWT8BFXXmQU8k25tyTLZv9ta3UaMQtNRRJid23RAvU",
  "key9": "5VbW1EH4U8taCsnr96LzbKEftWjkJNSKcMtSV37QmLyqRUG5z2hT7whWKRAPfqry5eFJUrV79TtH6XAULtNCcobJ",
  "key10": "2fhxbDDWpPzDKoBM1CLaKx5gQGjbEEXNFERhRGidQtrBRoCNVzGAZLJrAthqyybx6Ua9Lesh8MqY8ANXb7X8ZTYf",
  "key11": "64cebZQSdY8ypT5ETRYhA9YSkR1hLkoteV2YG4zsUBnh6vzM138j9YVuUe3msq99ku74CBSZA1hwGvZHrhKR2Qcm",
  "key12": "2fFb81w9DTYcEdpvN9KPVZcNtDb3s739QoJZvfuaNnT3Qrk1USe23kpWD3U48pfGz9yFAKSyZL1boAgx8LDbJUTd",
  "key13": "pUY2C9UvUFGV4Zj9xS5XvdM4t5P3RmSYa1GsaVMhds66zqP6h1ZGJgiLecvF3ZXNsSQuqcByEwvFMZQT59MK1rC",
  "key14": "2ZXA2gVgFDkiMJcPNyHstxPtLyBCYCaFHSH1aqMTHFMBmsmNmvoiBTGfbYFaWyTbNGooDN6ChcFWt1hTfVv22NRG",
  "key15": "KZVAKHjFwPDLVE9wovuQBwqAetL6qzpkFKFgevSk2ySac4Fs1eQzDmoa5rDrKGeiWtwtog9r4vPmyZMUBTabhtR",
  "key16": "4WdRnDBsAaeFSLCg5SUAUMmF1qyXX623bd4q6i2RAGoTefev3JT6Vh7M8VjbeFFysjdyyTBCRGefVaem1tGcWQc9",
  "key17": "2cxFFuS7vPgYU8T9APNYn46VWCLf8TqTZbodBf4CxP5QgEkuQ9zTwKfHHUJxbp6qvpH5EU4CApVSVk6f1wbmgseE",
  "key18": "2CfS2HHUtYVZ3Ujs35F6rgtpwLm8H9RzqXaZ6QjYiaDfAn1EaP5qt6udesyNn1GJauFs6wzyg7GQ9iKLc9T67H3K",
  "key19": "2qAcexwybDXyFwbL4NziURo4xTKd52ncHRRbyHqVAYqNUnkhS9cqLxrwJ6uYT6HtgpR4nzSWpX7f2rV32oiaf8iv",
  "key20": "3gBiHHcTx7HmTm5NWWB8tiMq14ti7V4DgW5TaXHv6WtXNy4FhxUz6HU9GcS6GmwXR172WwJK1TFRCcQpedQ6KZ6q",
  "key21": "4wUSgPugQwtSpLNdWvuaKyxo8GDk4qRmV6JDUViwytt8jVDfw2b1X7y4KCeeSvVpRt7CK9JQhVjCsqbgb8xVWDKi",
  "key22": "3s5gUTChPhSKBkv9CvhQBEpYwHksMXoeXjXHCSiwpsDhwtHrvZ1pL1iFL8z6V8qfmsDH24xndGujgSgLRPN5YDcr",
  "key23": "4JzWaXGcUMf19mFpn2yasvAiVZT9L6QpkagfxGEC3fVeqGWLL4ggq9FYztHH5GXuzShanEkXJKzxRdk4HrRZmiFQ",
  "key24": "4RRb1JxCRELooxxe1w91jFTxfb8PLJuZff1eoBdRqXHiXBph7eWD5LqY81QrH7FcC48TjSD9HW1SAJvhqdSWM6h7"
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
