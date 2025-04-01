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
    "3Z2TyNKj9o7cpP6dPyCdreh2me9Ag6p7MPUXKp9HitYjGZQvMwNJkUcSGXuhXatk5P8syj2jxLGwFZAo5uSeEL7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4GpGwM9Fa3NZW2hWFP3kvWxBEtE31YBu1ojSRiTcb12bTeXEvb9sHzZKfQAP9oFWefPAzebqv4yqVFcDJBDyW8",
  "key1": "5v8SYQ7dTEx8krTPcH8a8emXZfpMX9GMuV1u5NVKRDWTJyivHF4U2pRjVdWPH6d57NnFdtf28RBmXdiRbkv2ST8A",
  "key2": "2bgEvu7cwvVPGUpgKs22MLcPJn4AMSGc7yp6bd56gpRHVgQ6EamwYkBcqYYzR7d41dB2Wvhksr5cXR4AQ4Nm8j8P",
  "key3": "QCuUR1G48XGLqR8ZAk93CXL3b6jvPKtMX2aSoKK6vDGdL5u2tEtF9C6D3nR5QmzwSHN3XK7SwLdKMvMkeFw4agG",
  "key4": "5yQNjXi8VwsX3Gmfj4XfXnKhtCpvhfLDHBW1mAQASWbhxgug5DHzhw4ytJ2MVhUckyXyhR4oAKMYVaARRJDd8kjC",
  "key5": "2f6JFWWYqcQd4LuLqCzGKPKhBqo7WzFgQ4ncKN86BE4HMokkFTGZWUzTT3RaoLQyWsFcSp4qqZM8pNXJEUXqmaWD",
  "key6": "38AHKF3D346Dm6mBWJjYwD1uYQsmds8PM3AZeLJGPmE5vriU7nUHGFGjvWiie8jAtWL9e6c9q5x6sSZNfwTintqr",
  "key7": "3AFpPvyg3yYuHG9Zn8k38B2ZCjisRWNHFw5LJtc4bKQUHPYASvWiT3MWCWQkq9ZfEGxFHLKNoSTrfJmMTgwsSCJS",
  "key8": "Cw9gUPRdiut9K5r1r4Qhuf4bopUABc1jhBFqZHiQr9AigwEf3b7NpHPhTpWuSeb3h1kbgAJNCMuAu71WQgLQRFd",
  "key9": "zJ2bib3GiyuBRQJ1u5hpHQ1QLwbZRF89WaToWxRLqAMHnyFZta5Apn5fUh62RnrhDZb9Dd25dqGAUPwUi75DNkG",
  "key10": "3qdsc4YuJYZKFvGUrKmfDnUZTV7RuQ5cCvSCcNnvQismSX7jWsxRrmB8tkcHZBU8U55GKAPSZKDccFPmDmewvpnF",
  "key11": "2cyiN736Zeh8QNff3JJ7EK3mb7LKpyupu8UizuFDZsmcBBVZpHdZN7Vn2FaXiA6d6RgeZEZcGScXS6b2xRJRnqi9",
  "key12": "4pWvgLvakDLkvmp2dQfxKzt5Xu2z3S2Gk1HbREgaqWqqur2YZ5HMrE5pdwdX2HAD29P1rkDYHakNwDkePhLuMTzn",
  "key13": "4kCvm7JZHG48cyEeSEgSy8gGUpNwHBNomJDtp88Vyrcsrae3caTbYiaVknAJbijmdca52ajWL15THiuiM5UFrTJ7",
  "key14": "4fBMZ1d7DqvLq9wR2coga7ZUtxuH38PUwq4mLwJjTahMvVX5tDeRkzcuS5X1X1MthhiFWqW7v4yZUtmGugUYrGzJ",
  "key15": "3YDsRQPuhjuHUfRFG7V9urb2A3tQmfrTaZs8KR1DBrn9u9FszYFDaBEr485mbiCAJ4p8UZP26X8q8syV6E99m15g",
  "key16": "5Cve12HYgVZBzvnm2wVw9VPC39v7hNT6HSVVFqswP6BeeseMtSr4Akyjh8jKRM5foyKMSDumGT3MGo8R6YrsHeVE",
  "key17": "4nvwtRL4HXEP3Ah5612uZyDsyTHLaqHvT6kPAw4md6iyaY16mwSnhR4cvevhd1s7WFBnmFaxrNcMmLD23iTiG6KK",
  "key18": "UZvZkeFxTrJuePYdcVZjTM6zACyigsaJk3nmACofVKZRd5CsLWfxFPfmNVJh72hBu1jUE1YHBkd4EHwWpXyQ6aH",
  "key19": "bPLQapkj5QnufoE9MT5zsjGHnx1vrNvBNWQBLsbmkvT2M7JGecJAaDXd77JqDbDhKYFFrVccqJBtx1Strevzwrh",
  "key20": "4Gzz1VCzGL7D1Kx6rFKeMi7EtUBWrTSFrxKwGqxvVCGrmjwfGghu3yq9VzUP7dNjwYpZiRhCnuXREEdMCjPmqGyN",
  "key21": "2BckHMrjDt31bvu8ueLLxCU2QYrGCzMe7NEUAxoFEpw31nGSVwZj17VfaxMQ9yZmZnSzB83sUjv6CNkRVhYB7ehW",
  "key22": "62ibV3HJf1g1h7sQWyBpqqghdqVo71zgEwf8UQmSiLGzoWAghJSCUydPVjfoaWerqQjWCT1phbySq3xrCb1SojoY",
  "key23": "3aRG4fwB7PGd66Gmg6rHrER37bLsx2zbY65aqWWtn4Lfj73LspNMGNhSWoy39DfVkk9iHUfQbhCFS7efUw47MkFM",
  "key24": "2pJjBu82arGLSRXzsFUGfMRLG1krnY6o7U3BFaH8Y9cs2yK3ycw7jTbZPmp25TkjrLY7yHmYZfNJD7MwJuFJ8djz",
  "key25": "42JsqkBQjsMywA8P8pEGxCCBHt65zgC8SdU5EaWnXmjeVyLPtXjGKbEfomFEfTHYN6Ymj5exYE5LJCnKfYjKCbgM",
  "key26": "2WNJVv9wA2MuJWG8yKpWEEhwehAQrM2xtpfjyLmb6eb3tEp2ndecQUvi5zgVRFMk3mqfwZF6QqGz24RFDuTniPUF",
  "key27": "55iN4MGLsBs9NJqTQYcsbZs4ogqsw1wd3ZyfFXtodYty9HDzcKg7eVXKE7dBm4qBr75i2288oB5n5amPKmsYBGgr",
  "key28": "2getS9Sq6GeVMGs11niGeVHPxa6NTvsJw9cGct3b1CJYsNosR3R6srkXokebfPCbpXe92TxpvRXK9uAXstcLnYG9",
  "key29": "2bqVrfvHZ2fMezcrPnitMokLxPC7gEZv8aV6crK8CnmTHxY8DgQcrAPAqsHpt68tjC14Ln9sXYFU76r46nfhFz2i",
  "key30": "oPqdhmucejNeAmzfhPMoaCCscWsFoJnRGoaGXqs61pS7Z3CenWr8RSDpR319Y4ij4d7RKd7MVeVtzdyRQGFTSsK"
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
