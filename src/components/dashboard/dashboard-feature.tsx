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
    "5E2oxU32QRUMksJxa1yXD3PzttV4p4GsjRnxNqgrGamyCuJBYoTutZS4pr7sEM7jqQ4p5TyxyBJvMt9m72ED5mkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GvkqnsiQkdAexGTuwc5pvswFZvHw9vE61u17UNdUYiu2YHQ15GnZvWTJWn645ZaGgToGBTC7c5nw7zFC2iUqna",
  "key1": "hWakQSRbr8M7egaSKnCYgiQkQ69YfcTVJmin9CBBjjHzi5XdHo3C8THsT2YDbk5LE3hVZGSCC59ZrWUTzZbLwBS",
  "key2": "4mBzFLKQWHJV6zNvTTTKcZRZuEyHxKSgEAJudzLHHimQyvB2745rKftXvfftVd9Bs1GbdzicCJ2HMHHXA1Z2SHrw",
  "key3": "2w81a6DJiCtjrRawsFvDaRZU9REYn2diRmnh8EN4v5PwMExgFkZatRVvGGR8iW9S8UYhmQuXEPurZbe2rVwkUmMf",
  "key4": "3o9RTGBXBkPedZ6JxsnBPaRRb6diEtsNFrfs2YDv5LYbJaZdL294VRVvUTq1bFEriKXq1u8hxU31VMN9e4C6zPft",
  "key5": "bkSbbTH1Cua8SvPDdRYwmW5GP1C829cFrCZXtFv82aSAqfqwsik7fMrWM5g9JhwMUkh7JU3YxRgzZgmSuQ6sDEL",
  "key6": "3cJETUB5WCZ9pmt4XRJGg5cfUadtXp9ouWYxdQPDawxPFYvBkaAeA12gC8eAmD346tkwrfwTXbp7fG8CshnotzSd",
  "key7": "2SqwYMcC91Nd3LSKqN1CkKSHcnaqHByggvqsfVxqD1Xun11VxsKU1hXKRe8ensAFpHRAX2QE1aKr7zmxYZTzhSSe",
  "key8": "3kTvDsrc9TRctcf9MmeoZ4xw2F7WyVZNTr7gDxCNE3xkeFCSahGDLtVfP6F3GXgAz5T87yLLZyq5DCMJAdhDiUau",
  "key9": "3HgG9CHgaSXtgn3vVaXS2Q9WjuSqFBrm6AYDVqpGVnMhnkgFPb2CS2T8tD18NRktp2ArDuSPkGVp5wUmfQa3dvan",
  "key10": "LwgRVw5nKYBgfLQQh2F8Fx8AuAqemQQu1ahJtCTf6KDnVp5Zw8y5HAkXxGKe3dqW9iRTXfnmjeHxxvTyuLh5bCs",
  "key11": "UPvYHP8ScXQjR191qBiKhP72JQPUNg6BhiHZTTCykT3dsGgnU9Uj3J6SxvRJzJzzfaDwtxAnY4jjf4WZJLx7wzv",
  "key12": "549nrVAunxX7N5qrmxmLV3tJQvP2YayTTZkt9wzjLfzQrFvHYjfW51br21nS524VWD32ptnMMg8Y1js7ecCYMETt",
  "key13": "3GXNfqqi574HMmfNd8qQd7bLgvTK4ZgA5v1gcqxmUZWFKVf7NPn3uwtLpHW41LessBD8tdbuKjUQuC288v5Qafe",
  "key14": "jKZW6oXvt3rwCvRig1iBsbsZoHaPbPYrmpT6mJkgyWM44cRShGz69Hqqw3rv3Fuhki4Pp24DK4LLQJqH2qKWC7Y",
  "key15": "3UzM1U6Jt6sKhuckkg5nNQTKvpfN4oaZxFFMD1U1bQTE9EzfejFXBiex8ENjX54CWmabjLvWsxnSvGNwtc1KSHm5",
  "key16": "MXgRRpVnvDAsmBXrUXsS4Mysa4XtU39FUV2NP1K3JT31mQL3v4gZYtJ5FyeRQUBX2ApU7hdjQWLxK8CfnAbtdbj",
  "key17": "3JrfMQmerhGP6eAtGuJFUxELfsZtvJCgQ2yqSVdsW6HK8haWGs3Fyp87p2DkAx3fSoyMtZ9pDTnLKEY1g5tKr4LM",
  "key18": "53eJ8FSkYid2Nt6gCazQ9dGcE5EXnHS1ZrPBb81JY2GUwEKZ14ecxFEGHAjXftifXhZ5PkmhewL9Tr9MBeEfW718",
  "key19": "3V6QQfxWCBaHxW5NxQMZZfcEyHfE5VLcN941mN8ihWZFWhLrUGw3L7vfdQDAym44w3oBnMHep5MdKNRLR9mW7g8e",
  "key20": "23Y5MeaD26Mkdt1VjTrtHw121gHTFv4tE92jTRrFxYS2znJk9iw5Bqi8umCGGkjKC4sG8XGF1LGD9bJiJgeG93Qa",
  "key21": "3aCzfrtgQcfqEcHQUHKBSciSf9nGAYXU9mjSa4K9PKiwPGoxJrUFJPu72GofUacBhsT2pTSQ3YFmznuQ4kvE18bq",
  "key22": "3tqY6HKwzMyPzmi9HDUteH9a7KgQ4Bosh6Xt2hckHmQxKh9fYVSqDXuKrDUhbCbcWNpM1FPxq1ruW3viVJ4i2Boo",
  "key23": "3rK4Caak4fmidUpRabwa4BbbU99k3B2NgrLHoUU86UtHAU13eNef4izGutVK7k2AdUKnsLanouev17y61EStFhWP",
  "key24": "3wf92ZEW5wRQUupurC6t2a4zNHmZ3S4tFh3JBvD9DzVwajY6Tf2CTHz7a1wcqVP2TfnpvBeZtiUdmUU6wgUArnoh",
  "key25": "2nVn2hQ86WWNH7mgFxFEym6KcPHEA1nfXwSEAimNcq81hKfWeBDnS8QhG6v41XXo9BPGcjpp9SJyXHRAzXFqE7QE",
  "key26": "4zUtBkrScY7ZWuGyJG9YXYAfdcii2kfkzNBsPpQWKoqqeafMzsKh1wMDSX7HFku8avkaUB45Yv6tRKyNC8vn5po7",
  "key27": "FSjuvULPSAHDc3xoUn8FJqKFWtGcdkgTXKnP1sv45ro5ShKkGfMjEssPnxK5xNA62iTNz3rRRSXi9T6cYYrPZEZ",
  "key28": "4D233KWDkX4Tea2E7EWpjCQAfgYAYoHXNCDQW6e42QnJmn14LVxTGRBuJMZZxQEz8NKDaeopQWVoxHhZjJk7esvt",
  "key29": "4UjwjviK6AcguV7fAsWX4AdPLvq7g8rx8RbKwciTtxKrAn6h7TbTXswRzp2vSNWHaYrdr8WNFb1suhgyqoByUVZF",
  "key30": "JB5VfKjw6yG9p23i6tCNYXaUGuKGnf4nU5KB8fG9d7QCfWcTihwGAdkAQQKSQy1DgqmSHqbprAHd1TaHX691dyt",
  "key31": "2p4kRKJTWvAmzoUvqVrLMnfyqPkraJVMHAKPWAhztb1eF7QhuuwZgqtJe6ZeCb8izk6SzUXpsZP1nukvtwkTwj1s",
  "key32": "2CcPnFgScTuy6wFEq1553m88gJ6b2ioKgZagVoYW5h62VtjNYTaUF8njjybAeJcXUXeT4YWt3BTcSHrQLNihMiEN",
  "key33": "2DSBPjfXjBHkftz18AnRte16rmnV9eC8zC4qq1DZ2QQ5goKwRF9S5xjbmh8qaUHtBBuU4RCZvLL57cqoRjyF3tGh",
  "key34": "3CdYkNvNwD6Zbepicm98QUcyWPzMS6B3ZeN5jciicnNnuDoBrRwasYANQMm6sW5DmMvEU3ACc8ETGwhy6ksxXPfa",
  "key35": "58nsFGNn9ktReeNG6ie9efdAeCGNutkuJpT4mAP94XLbfU3ACmZcHH7SqagmLbCGA3KueQZBELoEmvdAsPmM7UQn",
  "key36": "3CesoUfUAD9FpiQXkCDQJVPRmboezpAmcag7BD8htb9EzMVWHmCCL2owAMAtYg4nYoSvACXMnvY1GZNnEPR8v23b",
  "key37": "26dAHnKgJ8R5ttGvxUTr5ssrvzkv5Z45BSGZhEN8WnNajR4q7SjJLPvxNwbC4g8R6WKb1RXmSr7Zr17h5HTFabC3",
  "key38": "zdtS831FdWsBjNgeQ18tAftGon82DABnTNXTNubNVvoVWU91HPGjDbWg3F8g2FRgBY9gXqoBkYK6skU4cdgsJQW",
  "key39": "4fsMNCSpdVHdZTUptU1zxtUzjMKdHwTZGe7jYEkd4NRpWc47i6Srkcs5WfhmC3JMPJ6WJzDfqH759vL2oM5m1St7",
  "key40": "5aKV2kC9PMNiLUNrETwm6cGRbqVvwUEdFHtGC1GzEQY1K1iBTpGPGDSL43zMEuFviVjVeSm1GdqfGdkZrraUbtSz"
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
