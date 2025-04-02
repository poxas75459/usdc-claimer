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
    "5Tac53Bi4YXftq1UWHnDfnfK7hAVhff6fL49ZH3cpbKqS22FndGBsWiecjAcdkGvWUk8BF4VATdaDgtSVbpTXwug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AJWdTmYDsYE5oXx1B4Mi4YRLPLnMUNb1cR5ZwDtFRHLsrFd7auRJdrVBu6EuDKCfVVtwScWkMpYqiZV2wjdPA3e",
  "key1": "3R1EYg9T5pMq2ZUavqjc962hkt7aqbPRPD2nZnzMyGPrmwBbRyzQm8FqDzBaKWXkvgwAzaTrMjs3LB2T29AsJGds",
  "key2": "5vRkgeUGt6pGr1r187VjSfT7zsfbVEi6HHj5rDjJRnWHPH2mGbCpXsvsk4HdMkx6ZPcyFEQdJ7jqrBUZQfYZ5sKv",
  "key3": "3Y5XRJic2NiJFxEsvp2RTWkT5xsbX56UdFWm3n1Yeb8PbDCHLJ5dnZ6p3WMxAauxBWcUmduMzHvJditnxht8W47o",
  "key4": "4vpQhYGXtzEnj3SWUU4oP8WznDDbXGTj5SLPbdJFQvMUiprW9Nmnkk5YgaqQK915LyjU9xnw7Nauzu2vxFVTsHYG",
  "key5": "3J6mp7f4m5SjKAZAHre1KbLUmjRUutBvqLjaU8pVMpJJqHVFtYd64tWDTGUsDkh9sgteDyVYXa3a47yNEhi1FtqW",
  "key6": "5kbqnqgbMpgoxHGeg3gk55VEotwFzR2vRpw1T2WERg5rYN89oa4yy4mPGduJ85kCdocnzwpv7pbNzcH5HB7fezDw",
  "key7": "2E4bRB64kbZvtVXee8F3TZVp9eixFkLw5MwBFqGR6tfG9NTpou4iG5Gi9REgrFMdinT8S2QPuexXX278upYyHK25",
  "key8": "WgFtFKQBE6dPdpcjRUuG1paoU59WLCZDzEoMV2LTZhEZ8dXRUwSZLtBeemWszMwSSHMGie61xpCokUe69v5LPDb",
  "key9": "5JRxbszH7ok1tG7PWCtLzrYkUKdeSpCDotxrDjmwoUZ61K3Qpc6jCN9h2pM4NQcZz3jCf4dTCUdVThDbYkbgYBcG",
  "key10": "2Y6kFi84Lk93cFHf6bWm8eoGZiWeyBswyuYnxAPHH4ZMny5cze6313qbrrJRvLJ3yVv8XQ93K824DB2KnncDvyFj",
  "key11": "4cTWSZSUHryRcp9uZUqahgQit2mKQHmqaqShJvVuev8peUXmR4aMrcXw6aebJLqt8VTMR19VYxu2UFgk5wyisafG",
  "key12": "2526eXhhjf6LKfCcyaPXQfTXGwvHw86QVVfVeNLYQCqVoSHwLFmRzqtuE5o3pb8s9PMWMX9eJvMjBF2envVsVNba",
  "key13": "4Qb5fzcSgQye4F7o2LEj1v1hUxJsC4R2C8BPw1dqfHorJB9pYRrQXjgiQc2viAXj1fo5hRf1dsmPgw8nqwxLJEv6",
  "key14": "2FhJXGZQdZq5NKqaM6gnFG7oVdjcFVdCXcwkRLuTn6ngCaLGzf8gfYUeij1Gc5dJytWALtrVhzbhDS7FgCvtmPBf",
  "key15": "3HQYZccKPHBS62f23RKise4XmbdVsvSecffBCZeKKv11Dztvo9YuM3EqNwwxunqP9TMPAGqA8ge99uBAaSegyYCm",
  "key16": "5H7zRK5yRrbvYdQQVzr27S5xujafieS3D6p3t29qZtJKBwybscgEzYDBqkCTSDK4xiLcM4gza9d2bSJgPLPzsKs1",
  "key17": "46XoJZBt9UbCXryvozM5NTobUNKZq8jQm6u5rSSZRJLnsf1gmjNsvPGRReC7GaSTG85vn4eM3txZPAVMDmLKfkrD",
  "key18": "bjM8iJZwifawGY25G3Wm4x2vQb9hCSb5nFEN9bJ3fY1HFWz5r4GiPTMTGrhv7PUjb4DjUWdvNfJSUzDPdDX626y",
  "key19": "UHjpRZvFcxAXKgSF9NWXChX5UNrRDKBuJLBcW4rLVpZspsZnNQHms74aCVT54eoFaxSrA8wz24embTDb1RY2Fks",
  "key20": "LjsZKgbK5Jk15V8i9HotzqGnPfcHreZsHYjA9uqyFKKd6F7yvpLFhqsWD9ESRfcsS93vrqtmEaqf9UsAtk8rDJZ",
  "key21": "2yNMDmgmbhSsA4ZwmEbPNZqQHQifVLQYp44bnnofuRzZfYM7KLgkcJzgQeC6pjUMAQCDZf9prEeTF3qNw94fhQMK",
  "key22": "3qr4u7ichmb8YqnX5kqnkKEwymiaQemJenqsuRevrcv6UHuKJffGTXFkADY4QYCX9KtTkyG98kAFP4vZt3VjmkBX",
  "key23": "3ASmWfYC4gTfkMGsHqQbWTENVndXiseAzc3F4haH77oen8tUeFCDPkrzhiEsBm78u7rFjDvSkjjp1Kq5nMjuUE6C",
  "key24": "2xzZMiLeWaVAdswhcSTJv5hX7gFJgjecz4GedCCGE4ahH2pRcMN62Hjb3bGVFAorQ8Tx2BsM2u19MTRU6rBQcpKq",
  "key25": "2NP8eS75b5Rzk494zDwD15H3GuMkrQRUA4zASrAbDZjEuUfw1MS59rphznh9BTUy98R4azV6svsZNVHqnfJVhi29"
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
