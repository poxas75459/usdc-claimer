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
    "2aiRGdoGXBtejaLpyzJc3j4noBffaejmJXgDwMwfWhXP7S1Ab4STMYE5CDZvhaVyxQgAYCCqDXDAYzxbwNp4fU6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UN9658bDs3PenQyxXSihDeh62myhjWVs25PdTDrWPtYA48TihMqKJNyAFaNwby8Cnf4Nv9YRxMgNFdz9y846No9",
  "key1": "4gpBiXXQ2fET8G7cjRHUnMCN697rjCSQmVemRyK3x7cV3Jv89Lg4fFE8cAV1o7wwSpZhw66YkLyCs5KBDqZgxGqG",
  "key2": "3XQ8NfUgVKHuaie8SCLAa5vVrRKiD7pcQofmjKjBdXzddZhvYHkCrBaWA2T62atUuB1Ua6DioSUMqdPhjuc2ffRT",
  "key3": "Srck4AZ6t1FPcq2rSxDA3EXCvsSiw3NudexNcarmayiQEtLDJV1zFpuhpkUG7cboHsKQGx4Xz7xPnuNmrwa2PZR",
  "key4": "523jWMMZ1tEyjNjKtymHEpnwCYSz1CdVoHHr2tyXvmKra31gYQQrNVsFd4XnxSrnc7GwgD14siXRvZpwLesf8UC9",
  "key5": "3MMrsnnXUxS2X3RKYTBucvgygA93DeGAaedB9v628WBS3oaNzKneDPQxCL6p3n91Pwg6VyQfvtbSKFkYcVeyi19h",
  "key6": "3K4o46Z7N2sVMeXkD4pUPSHwrANSsCjaF2TghSFsVdRjRho5UuoGu4PRU4kVWgHvQ9Xz3rT5Z2JTRzpUgRYQFnjJ",
  "key7": "4YU7ACNj4KmNKwcu5i4fj2F9v4v7gckBVtZVQ1r8cf3YyarYZrEL5DiZiSxd2wMFG6eGcira2ubEM7rhAC4a3dSm",
  "key8": "Mv8qKmaU8jQucVq5CzViB2jouZK3gLaRfk3aXkgdReBp9ZNJB57EGWqCk52Zu4gHnqXkJuAD1HCmS8KfVLne4qD",
  "key9": "29okMrZpSYEWamzggQJRMQyyqHVocwzfxytZMuLZsDqA6EegAXBVRK778EQzULokK3LrfdSJ5xLrB55UVNKRg4qu",
  "key10": "357kkcJSMKzmGWTbEqQxHvvN8rkvzoJ85naCcXhYvu8t3v7dyb3uChEy5jqnR5qGZ9PpT5yAw2VQfK7pcwaKXJt8",
  "key11": "2TQfAAw1HKWfpkSh7n8pSbwMHvrLXbdQHEa314cNXVYKZUt2WzmHjHFGvZQ5mA497sMBiNCuFbduxA8MUsWd9LWL",
  "key12": "22wGCrSdjgzYqvqSCQTGPbwJ94wqU23wwqnX2jgxYmkrfyKDcZdNHcMMWuYzcGJaooogiLyak1ySHsqacogiDTUQ",
  "key13": "q12f75FMvL7HwAFw2tUm9iUT5BReHfuUrNPEUPiZshU84WXDNPEa1PvfEkgBo91qapxPRVBiw38igKLNT8fw2gF",
  "key14": "Tq9PCHtzEdFgFgbGRoSed5hRvKi59Ut85BZVDqB7NjeaRpD2JYzJoqHCpS3Y5V5mWwqmYJkkCNBvAtko7usFYhn",
  "key15": "E5qupQd86EQLzWwzz1n73ZXTJeNKMH1QniufJg8xgQ1dvPQain9NssH9TNtTdzMHa1NoG8Lq7XqVyMoM55GfFp6",
  "key16": "8yh5vDXC1D5VK1ChAvS4WwePufLjCzqpHCm1snrsET4DVv3Lw1y2Hku5tKWa71bVXTW4LEjtJ5a3Pm85TKsrUf9",
  "key17": "3coRHD6VSCF7X3oYA1WqXRnmyAgbVpexxcu8PNaqsLhurBnyd9fupgZZiHFqCsZNCyS8sKPhd3yBVFknGih48bp5",
  "key18": "3tjRxRreEVwejUNMEzdcHUjAnWc528b7Yq4TGicju92LWUVw9wza6kzmMvEiJ46bjkNAjgNX65DTfn4uN7oGa24f",
  "key19": "4x5oFDCZ4mhVBJ64qFBvH8bZA7AxQwHoaYDBFSf18Rkf3N8qRSGdHt55XPtx5CAkgXJQHtmAUEAgALftbs8uKcQw",
  "key20": "225RaEM2MMjAgZ2S1oCFGx3pQxfU7jzejPGb4q1jskgptoz5Whq1BMQoBP5etukQsvBR9iXr6dFCBnGQ4dqf4YrE",
  "key21": "2JPC276xFAXCHVXsq3zFndiFZ5fviWYqir5pTKABKf5dXnd3HZkckNqqcQwPUprvr17NBWwaGjeRExti6uUnZPhs",
  "key22": "4btXCGw4SP68zJ6hbzh5NGjvPFGPUAGxCjHZVB2WyhJX14kP1HSuM9Pr2m8UrBym9815TnbBJ5Zd6jCpC38hMnJh",
  "key23": "2m7wi6vQyHMvB2iSLNA1E1sPhvM32gWmNYTSvWoGLLxgbvPBQpBiAGykPGRwUFgk5k3sBXhfQ3B22pXiYBz4ve5V",
  "key24": "3qVRydBLdNo3RPtvcpVda8qv7nyTKAndToXb6KdvSXCr8Z9jNTnFk4kh15td7pqRp8r57AXy32A5iqoSny8WXjKZ",
  "key25": "4yVTMx5T5wcRAP6Nhmf3nf1j3Gg3wfBzkf5iw4XrnKRhGVRwHYMn9egFkGmZBGr2Fuv35oyWSoFSSj1vy8GiUAkp",
  "key26": "5i95TVUEaTNRKXg76NwziW53m9rnuZVs4VDuR95cvMnLQ9ePtVWGvWPTKLrPZ6RpjZvWBsTZoxDP7KnaewvZWqv2",
  "key27": "oFrPpcMuqZrS2Nog8KgHVL1N5PcbsThYdUAw28fm7CmdpWZNVm6dHQQaViChwYpbhZfht1gJUirsxDAfdz5EU5M",
  "key28": "2xSCzVjiyRHL62DsZMDb3tH7SZyNWQfSE5mivfjUb4Z89kmyREp1VpyM4n6AV4rkdunuAnuaSGbkJ29eP5HAxKs4",
  "key29": "56fke2fJptcMds5TY6ksKYWLqeNbqGMbUriFuGRyb26ShkmCTixRkEMpwbstwBvoGeKJmy3oe4FK3EwmCSZrm5qv",
  "key30": "45S7NxqS2d43picAWVAm2fxdSFhjQK9AjoFX4uj5NfN6jrUDj63Nqhhfy8JijunUfjQdRgjdYF8dQuY8Jt8B7H3x",
  "key31": "2YBYLvUFcNPUoDsv2DMj8QvM8rSoVxCDrzsUK23RY6WBG4YhZo1zgvstnumHPZuw3jTGAsnkC4XD5ZYxXGsM3hR4",
  "key32": "5T5u98MWVDtD4nhYEEzYmvtCzpxrQzWr8WXRRaTaBCvHSEAChjXTN9AyZAdDZKYcsqE1pe92ML5CWkCMvwrFkq8g",
  "key33": "3EtbtX327v6CGrzfjcQRm7qGNnWL9VDTpgLFrgEs46AAR7bcsXVr54oR7srshiEPcmLzdHXTZBcVjMG5HBEseBqp",
  "key34": "2brKxT9odiyXejsUMFjwRMc7xnT35h3r5Ps24xXfCUN4RBhGDZAxwiP8j9wDEJGAGJ7BLJu6pX2Ejk5qhWUDnN6X",
  "key35": "3DguupNvGcFm5prkUVopXHbAEu2mN6XkjQ2yVnkE3uGG2TeMucXXbm5EgT9i9VqfX1MyLaraFKTsZxFvjqbNkgef",
  "key36": "2ioVPHu2nNKayPmkPpBzJRg1ZZUaxPh8U3uu8QAN7ify9ZmSxDxmrkFtjRc6cSE6814EEzjruK1GnK9bZVxa7397",
  "key37": "YR5RfDEhdufPcEdYmCf87FAdvoH7XjVjKbZo872vbcu8NvcdBVkWkvDHUxQHgacREJxhyV3jZTEywcLxHqe2PpE"
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
