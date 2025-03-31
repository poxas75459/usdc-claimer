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
    "64mCV74uQ3hEwrZDdDp7JnPAX4S4JVVvfg1MX6tuQFcjHrpDFkj8BwwHETYbpK2yaWnRUUMbsF8vy4DKjK6PBqpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EBrTgmH9V6GEoFWdwZ21D6xkLduNh2Cmqy2HAkydijdMQmgSmfX7Znxnt6drLivZgJmwTV3yh7unuVWzbMByqB",
  "key1": "2ECFMNo7E7wLWSdHKdxPiWiZGWiGh4mBV2atddnsA8kkXQeiWoNAqHNfXXKRZPEXY3ahUt6rpCah2Lz4WJpgiUBo",
  "key2": "2J1QUTJGXXjnHQCXV1qHU41gki8xTFbAeWhmD2wxWT9ynfcnh9jcS2njf8ifXaaL5ijuxY6wMPzP5595BtGATcdZ",
  "key3": "3RCMosNbfN6B7Drdf1Goqxwb9a8DyDkhiagbjCjTY4jXfezVsLaHDPF5k9Bpvhd11LEhqpU6qVinfsEk1x6hNbV4",
  "key4": "VK5PghJKojEDx3hiVLcBusAXwjxYtHvm2igk2t35pSvhmh8UgHa2dktnQhR2agkDW9cXv2whMqioRyZfPX4c7nx",
  "key5": "QSLsYgBw4AeKYkvkVS8ZtfdEfisqGJWJMB7hpoZNTdnDZFoAdtZUthmWyx9BJpioEhPzrR3RNox5qqahcutL4BH",
  "key6": "bMNuitZt6Wfbs4eUUqBpxryQqqDeumXTZfzLbAtzsERa8uJmKWT8DdjVoMHGyart2JPBTE3nzM2mYw4Dvz4ftvF",
  "key7": "4qpZfeQXhRjur7ZGTsmCgr5Q7o99wYBBTeNDye2yrCtTxkR4NY36HMyfsQsRXr1CX8qUvypWqGtH67QYAALV3GWw",
  "key8": "AqbCDARVruw9XsRe1gQ9wkeUNCv9cKDTVXbR4Rze7Yayq5jCngrnCsDcSfVXy9czsRPW3rza1vDKp2i7FxeqCeH",
  "key9": "3Pf1Zj7xKUFdBSXjcQq5F4Rup5sSvFGcLm5DVzAxeX7vbqRpUvRvDWDJpucshbM3JeLE5aTWLrELTyrzKSrRw6EW",
  "key10": "2gDDbLNLYp57SWij16natsCGxZMsfDuLTxaPULbBQWGUUFf1KLdQamceyc1EkRf1GZ3BLWWK2Hwo2713oMLGrNaC",
  "key11": "4seFQYBtnXKS2CXMYibpE3wVzabrfBGYgGvnNHutdtX4f26HoG1EqC7RrwKkfwgcxsf6WEiFLdRUg2fELHFoVrNV",
  "key12": "5YsujBedh4ieLg7vJDYCK3GDBmn6KpwfKQnsvsv5ES64FrjpyS35dML4XZ6DGy9ZnshgcbFWsA2dAxDPEiAsupZX",
  "key13": "56oU8KT4broWNmXhPzqa4ab4ht8aEAsNuftgQUqoZmEbTLNu7fdCDTHmVkGYA5mJRpMiTZPAeRGGwZHfrCTsoteR",
  "key14": "23CWxMNMVvsFJPZsj3TP2fRA1NNsP3nmeLCrkTaSC7Qf5XPNDor71A2Vx4t5kEHf5w9XFyDV2wboFKFxax4chrHW",
  "key15": "CcAP9jLhPTriHpk2EsAsHvxNB59Ss9wHgkccP3abcrUWuWWdUKuWgfw89TSp5mzypYe6Uhj2WNW5NnVB5KwB1j1",
  "key16": "5X74rYoaafsfbGr9eBEUeC5LanFwEFcY2pCoFB9i6suYVmZJuYFoA4NNaAzUypkLRapE6rcP22SdrENZPZu2Y2ha",
  "key17": "3N3hpZXtYPfDyBzKtCmKsHY9UWPF85hWdW2c74wRN8zVsofwBkmnSDgpVRARbzk56HZdxffSeKhW9oMsCvucU5kM",
  "key18": "3aBJKXykvgAHhE5dDdtwdxPJNhdkFa5o1qmvUbBuiWKswPhsV7UQB4DZ2eTfcHeniG6Q8JVHvpETeZKWGn7gtuHq",
  "key19": "4TJc2VWsrtoNPJeZh26rcTykbrst7UfrZocnKNVqAQwf9skEb9oxanacYHpeDeUoh7ihrBWMETa5kcdpcgXK5zxC",
  "key20": "3zo299vJbJ18w8pmN4cbo7LY6PScg9DSATT8eH7RdYvBA4wktvFbWnZr5kupoKB1xNYrsZXR5gfQ9krP7dfo8LBq",
  "key21": "e4Ef5nioMwFQRCGpcB45UuSQaRteBg34snu3soauYMshxWLKehfrwx3iTXwLKQqLw1VLztMa8PTRDSk6KG3qCXL",
  "key22": "VvSPSL4skn19yqazfuxbQJoQvgtB1tZqEBdDwyAt1kYM4DaHdtAKqZ3MntuH72Sske84SWX6wFrurpcPpan1zZp",
  "key23": "Bh7UMG55bmL2ggh48j4FX2hfCqhY2UGMkimhzz11kNJyTsBBsCfa1w79ktvAYw8eekQJty3Auvfs1kK98ZfQQzJ",
  "key24": "2kAu8RjGsk8AQr8o6ozCq4GUR2FEup3dRN9xxByJkEntPHuhehaaX4zYmDS7U6BLivNJm4HR6At91yVXgurxGZVN",
  "key25": "61NhbJTMpGxppXioZxqgdZKswkEBw58Vfv9RfyJu2JDqahMQBWPbnTyCd3vAeJS1nPhCPvXFcXz4fqpNq8fQs7ZD",
  "key26": "4mTxEWXGXYqd22KEPprTiNBzRnkAoJoHBnY3eyNCZZSKKrVCvojg6MC7oawGWpdTG3iU37Hnf36raqJapZGbLACJ",
  "key27": "2bikekLNCr3Ec3A6aSnaX2yrtmNn69soaLnTRjoCvG8ngmipjghA7n5Yx7UfuDBqeanB8G9uqYSHNkDMgKBZm5L1"
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
