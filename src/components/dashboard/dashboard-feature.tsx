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
    "3GneAWDNpGcAKU16qp228gxxdU2SeCwi4MHMEW7gD6GXtT9F99yaudTjaYpXTeWAjDahH9f1MmGkG2NVRwq9ydiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKimZD7qhtYANYyMQKvTd95atHK2TcGLAbzxUBhXAsEMQLN7SdQy5H81LQg8ZwJDqhsAANcNjqFJavBjhJuk7gQ",
  "key1": "3bYYriguRFJYei9DHrGn6NHdA5YueZLWeFL7ygM8NxVei78wKB3pQ51U5AxJDxbKHv48Gpn3nvMTNXLs8qnDWARv",
  "key2": "55yUzmWZaJ3xibm8qu4QSxqDWLxzgqcxoLRBK6d1Gfaigj7ica8VNM3HaUY31tEp3uPU3xdrQbCzGtYnYaxKxYNu",
  "key3": "3sz9mAsCK92F2N22xM2xrLpzYfUTMUWPkoYhox68YaJCT5kuDgPFRpdeoMNBqfM7D2mHEWjAKPiVHC66Nvbd7nQ9",
  "key4": "zjubvWnJoeHL9ZnJYvUPxawLCjfh8yjSCzeoJSA6avhQ619gzD8bir2rggwrQ2cDjuVqLTHv3isLGLujNu6Bixo",
  "key5": "5n32sr1o6J8gPv2b37xg3VjJZSVaD1PKC47AFLAa8HXAqUviaorHdCAqAbqRzdP8x6ZnTv6TihuXsKAVEtnBoKTf",
  "key6": "2FdbM6tWgmjQn3943PF4ke2fTzz7vMiH7LVQ16ot8iBqAGXJKGqJhpyVqgTReWto6GUTNc1vUZLTBADLfcFmDscT",
  "key7": "5TW88rXJb5tS1ts3knT71ehBS7syVEN9xsbok6inEsrT9ZJZ9XE4EjHPBxZCSNaKtw3832m6b3fKYC1iA5yLLLPX",
  "key8": "BHcrV3A6B1U6ySekY3bwPFN5Ep2yQ3btTCtZkxKHfi25h2UbTGMyoJgiaT39d4EnnVGk8TKDF2RbQmpsi2dsgKY",
  "key9": "ARFk1fFikdU6x7UwagyCSPGse59wTLFvspeLYTXqreMDb1CARBEGgko2qjybEqwxpdpX7WNgvieGyRYH5bVuuRM",
  "key10": "4JvTLBYvq28xu1q9wUajJopmKVWK8Bkq128Em1ND9Eq6ds9sfUcN4BuAwaUXPZuYbmTDScBc1vk4kgSWkWDDU1XG",
  "key11": "2prJfBFV1SwbnEhN4eW4FnsCLwR1xHBdnjeWuEbcCjWRBNtkqFtGdEbBVb1pDWaweDd8oeFACMXpsT6apXfimeB5",
  "key12": "2dE2jgP9B9DonP8y9MeE7Um7VfwGXdCzycdf4gxBCcC9CRL5UiE11qCJFr67vfHdD455xX5odgLqfhrGhYUVg7N",
  "key13": "4gTrWvmzPKTuCUKdPYnNGeYocqyYq3TE3RNYvBMQu2r23E2W5yNsDpfzpAeC88Jtx9PbGgaBVspJqCCqWcNqZCdM",
  "key14": "vcqP7oRSim46zfCu11ATxXFje88BxaorQDB5iNYBbp8pcs5FD5APjsdq1F8NCvoHZ35tcFrK5VJvDLLxz8EzzuV",
  "key15": "5Mm1NarYKvyXqFEHKhGDpQo1q3cu4F3NtMwiTdFRfmYPZyoEGf6mbsCxALPS3qaWSYAXWJtCorwsA1BRkYZT9N2T",
  "key16": "3MGT86LtzyxZ3F3GoaXGEcX8P2WPvC4cWgfCF32dMC2S83mCPXZwyaBf5qBrwimNXoHt2tKkBHknrR2ETV3Gfter",
  "key17": "2HQQHshnWfkJaaCabJBm7bFAPCcQSgRvetTLnywRCXwitPjVzf9SVFHrwJ5mAYjKuVMJVVZZ3oismtY9ASAR6QEe",
  "key18": "7nrpTpxZ6qvu4fFtXSpLSqxUTCX4Ti64GFN9Tn62rVAjwvHJsAcY1SGdakPH4Dc1JBfETcVVJJ635RLimGdG3MA",
  "key19": "2nJRtH7yMET7Byik2iX9UCDPWcUxSWanjQXtfBNE71tNj7611JBcbmayRWuHC7JcPsvhbuR3P68w8ewNyksZ1Vjb",
  "key20": "4Ru5xtFgupugDGdY1AHuqDaTKjuc2ntXghF7KBhycjG9R3fMmawEnjuyzTm2YD6DK4fD4DqBH3FaetZ9Uqowdxfz",
  "key21": "23MAU1vEUUvBPFSzY7anC5PGS4s9KgttAZ79goHwHva3sqJuQynfg5AdXtKwn9uhK1xNbGDZiaDXQLDYgXi8WwjR",
  "key22": "5Qj3HUV6Dowa1dDAoonA8PwoDELi7enwDdEyFeofc5dMhs73CDTToquLn8AgXzJFqapNS4vtvNnE3PnZ2wp212sZ",
  "key23": "4XB9wcUpPcjPq1N1WcwMcaLPej5TJg1V4rtaMpfg8vRUY5MKoGBeQZBtHi9TwbFJqkRFnuiKk5hKw8NXYeztzEsM",
  "key24": "5yxcWXRfkFPTzho8qmM41B9hQVzej8evvuqnAWt6NbABLEaWsx2tp3Pw5evQhCy7gAuUphjPKDYCWABFibmarXKH",
  "key25": "39HhoZdFEFroNf4AbMXR3WJiyHFUpGYGDUetCsC1wbpkgRMTahXCLhjcaYWmzPi1SKydCxXCUF3joDj2K1rDcQ7d",
  "key26": "4sgcyzWdna9inpaLeHDMV4BfhFbV5jwqxh4Lwy3x85qsmZk1C2G4nhKZjggbdT6AKZN93TdohEFzYHAS4abqxsHt",
  "key27": "5oBQk8QiCx62u2MF4YqcyneQBFppUJ46SJynKHAJimupHFKGXkQqLBzphmYJCmwjFufQkFiBqiC8zpX8YN6vbpRb",
  "key28": "55NfcGMaferEejhBeBu9NzYJb8Znjsx2QU4f62kCdQwApUT5BuKuiBFjCDwbATBJdcSTZUq8ydH2ySJrNJjW7PFb",
  "key29": "2o7T753AzRnyhbKQ8xzEbkB5f7cgMzAwGN8BhS3unamhdJaQx89r664hmHS52L4Qr5vuvSuUbPA5kp5zyxrwL3Vu"
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
