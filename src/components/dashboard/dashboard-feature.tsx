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
    "2HDTnDecJabf4p4t9KQgBgjQqiwHryB5skDd1PcsE5srCEDNN2fBhZRVdMJjhbitw1LbJc8Fbu3ZA1Afc1QPy1r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmpb7DsTWvWXTqLfGaQG3MYeVSFsyKgF21aEZH9TSuFjupJsLXQfikJ84u7GYbr3aopp4tpacYx6awLCcnxGfrX",
  "key1": "MroA2cbA4om6VQgBLoLaA2kBzu89Dotnpg3TRhgiAZ9ZkyFz1UMfa3MNa5bkVJh23jS9pGDTku8cgsyBVzfv3GM",
  "key2": "5dpMoNrmmQ7sRFXBYc1bQSRT7iYjSxmtySdDFUAEkTo4NWC4oj2MFEwqB3gHGfTJSAdNBGAiiSjuEzbZYogahnTD",
  "key3": "ozhv5yF4u6mz5mmcRtapwcfjUtbz7Tbf9f2rFnfQnUM7JprLxVNCijqxZHt2cdkzwikYVAwV8cnSLAV4PGfRMxX",
  "key4": "5NkimDaYm7mG646wR15ZtkNe9Zfz8haqfd5cvjgVzbqciGDvW52aGpVMKHNnR8EG2LuURhxYQpsR3NG29BY7k1Ut",
  "key5": "3yrhrcaCoGDoQPCZqipTjEDPBgMpuwYXzfuaTBD7AEmDQan6mGBzixtBFbaKPuK47oNvNW3xrwo4StHNngbJ2GGF",
  "key6": "3NyHboXjSDxrU9otGbpDCJ6MdieGg4HW5xMK8dwrEZ5wekJ3BZFcuWjvr4Y41KFrwBA2nJmA7VtCjCjkm74aYar8",
  "key7": "5GecPHadXZ1rDHkyxAM1cTofjafPei9mD26AmSLzrpouu947F1aH5wjuAYtHDJLE7NDqSYrDDDgwcWAYGGdNt3sL",
  "key8": "3uimKQmJfy4AfM1LKcVQTA1gkxnAYLkL1Wt4Y7vnfC4YTBiW95XHSHWagzWRBfWZnYFYukgLn8UzLQgSqq57sVZn",
  "key9": "3CpobBsA7TYhRUDrhyXfDjwVVwfj9q74Xdc31Ceocdksu5fG9ffPzid9TJshNzWRDRB4p9FEYJPaZ6Bi5sCmPwXK",
  "key10": "4P8pTByTJeDzVTEC3LGSULtYnmMUSPDxPaukqwbaQxVMHWRmqVTUieVarEYTVdancV8HAJo4eDNPER4nrKNGnvyZ",
  "key11": "4498DhusKg1kJXiSVhtGe8xqtSqS1NSSrHAukb5wPYNbDBst8J3zb2gtLbwtnTK9uXRpBZm2DnFrv2jTnjtNTjcD",
  "key12": "5UU1vTvwiQNXdhUBx8eC88auX7rYaMSynYzZWMzJTWmBReaMCpoQFXfaQQkrLtBFKDaGJxHKsmYsR6p3JTFWLTfD",
  "key13": "4e3wi3qiCqFhZESJjFYj5ekh59PTAz7HQiHsdAdi89Xv7iDQrLvnjzPFbUYwTJvigvGPkLji4pucwm85QZD3HavC",
  "key14": "WVCR7gx7uHZAvhgWtsjdXA71CFXAxxZsQRfp2yC51zV9NefJb8Rk4uBEgTZhewhCRT4XU6PwCKT4bvjN7CuBt7J",
  "key15": "4oKyQtQighvYAJEBKneYPoWiq4BYAn2QESjYGNQowB1E3a4czviz3UgB1iWW8ZRA3pnx99vjfNpLU3UzPpChvNaN",
  "key16": "4CV347RgyjZDmz5SA63Rya7A84CiVacBt1mfNFjqabZFo48marWxs1wnPwz2F2uak1FVqErmdhEMXFLjH3hFnbuk",
  "key17": "5P6tJFMSLkfhdiAoehE151xJzS3Hw2FD9yyZ3jUMKchnAAQn2G6dBaQw7Vn33Kaehbh9bvkX72qk1Qhx4XdPrqaG",
  "key18": "55x5LzXZ1E29ESj7gnWQizW1i2SeYeksWzapNJfQbdJ3SPvAG1dL3sMxZLKEhJCKD2p3BLbHvTchFfQAGvXcYvDJ",
  "key19": "54LH8Wjco2qNhPNGXEGqh5dhmvrXdtFGGG3n5Dd9c62LWdbYjskmzk6C8AVxuHwzqAxxHEZqG3UpcngczBNvRYYQ",
  "key20": "QLQN2TsTwGMn7R8s9mXmpYQ8cnBU8XXE9f9tehvhxcssnuyuLuM2CthPE6JCZvJQMMUJjWrRKTnWfZnrputkYyY",
  "key21": "4kfachXuSqNK7p5Pxx8trxF33wqoadsPx3Bcwx2cjaFFJaWmhM6cCvxXNBgKGCJoZqbnkjqDKoM8dhL8j9GkQEyr",
  "key22": "3JXnRmrULcJAHXAFVZPtZ9ScBgSDArX9XRiQp974bpzuztwWm3untQpzv8ckc7CvmDquEkiE796H1MA6RnuwxHSv",
  "key23": "2zgPeTetmjou3bh6DRwG2F8Rs4Zj29ssEhRanZQ8sFZjnh4sr65CKYfoYj7VSwT18vpKRTsdrtTJXZNYttfcLJkK",
  "key24": "2sxSvumxqsyYKuKheaiKuMxcX2GfAevGHaxEDgNARqrhdQpzAViJCgFq3Vr6LBkkwFX1CB3nTu1wqnwQYDphBj2K",
  "key25": "2D95Ur8QhozX4eP2VHoHRnT4gxmatubYDpaBJkX4cqE86iprPVYmVN1V3ebdMyZ33shXYx6JM2XuSwgMieMfc4jr",
  "key26": "4tLG5XJxEuZBSMibBUHjpgSNJbjDkRZh6DcJj3xLAvo5X3qZfzTnjyaphyqtuwYTbdriDAqBYCe73tAes33yHb6v",
  "key27": "467NZ1X9QX45Kbtno4gYJ3vvLNH4eS5WE14TRGzsfjFEqfdjBQCeUnPgmiQkWDJLX3w28F47HzrLiVSSwNEkxWe9",
  "key28": "5rHC9mkzNVm2hvoNKYQ6pRpRhNSehAobeqAKF7TSqKvzLBrR4K3ew6aTrXSg2AGzazs8cVwHiDnqenLebLga9erq",
  "key29": "2SZgQoTQ6MJmhgd9i36jNzE2EBujJ7B5kq8i5n5k9SyKKGMqKxV6wRYtLcjLPKrtcxY8tdGrMPfQDd2Vu49LPCq5",
  "key30": "5fJrA5eoES8hPKSzeyVjwZVz5BFp3Mre3kFqYJyz9dVDvLeKKy7j6RQPAgkYoGr56ct1KEzbdxLT1n2G6VNdxAk8",
  "key31": "4aYj5Lbj4wk2wHsG43M2j5TLKjbPRiEFqmcYpZL4Mr1TgxMsWh4ado7ZhokQoGRqPhYMiU7CMyZQNBgSVyqCQaSg"
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
