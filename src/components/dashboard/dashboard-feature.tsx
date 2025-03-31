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
    "44D9KA8WuQ8rCrtmGQV2GYszCFEnWv9BiutbMEmFCYgdn87wrMV3uyg4jy896HwmKZTye3fDzahhn4Xdi66rFPAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7czoDUYBejxaVSP2zT2qNR4LkCGkqyZCjfYYy69MLGdU52PFz4ZZK6CvEDjimQ5oyC3UDFFwkTA7yeWqDAQ5SL",
  "key1": "4CKcwYFn9QbdaWig6kxjAgbUkLsUL6smGTV2pLeXZKLj7eqnFSHaSHemrhK66apWFC92WLusHWNEysJ58ZLpY4jk",
  "key2": "3yo4GHTuWEdhTYuwKoLfgCDV76hUMYuz9t9EzkpWQ531xDZc64dE4NtkHAV4hD7WdMwtmvkoazRoCqQjMW681p5x",
  "key3": "38cLByBepyBsdczDhcWYsrMeVnK25mYsbUDBxAiBHdr1WLy8yzvNUj8FBaJBuRrEDyfa9NxNkvFoe6GLrQhDP52d",
  "key4": "5xPrBJeTZ9KLtLt1RNFBQLoN851aow4HT5MsHs1cVcA2T8jK3qjwtZtpvjn6iqmXnfSdPxUrZDp1JgUHxCD5C6ES",
  "key5": "2wRkohp9NmPn5rsZKdVLxAX7KoU3sSvK1aqRgTyaJauYgoo2iN8cfW3wdSMAmZzDcnmgq28Qf7wupdjbnZXneiUa",
  "key6": "gWCL31KG8HQws62rEsKY7mJfYNwuMsnjizcocfSb3ynA5ys5KSN5C3WmLPGRHT1RARLUAKkmNWz28qZ9CmvtxPt",
  "key7": "377tS3PmEdrYdMtkaLTesQ7f6icWMFbDQTHSS9MHiJSXQnxGng9w5BjcPw9BibBCkFy9WBkq6ZVsVRtkFnhZviCM",
  "key8": "3mkayrnjwXaTThoWj4KcgtnFf8tLj5RN36PqHXSiNxTz65cFEnvTm5NBqP6Cv9FjiNbaFVesUA9UP3nE8x1hf6e",
  "key9": "2TDCTRyrJikEZYyAEB66ErKiKS8neWh9dzrbPHnfN2smvocuE3djT7jHkfniDqvqdcb1HaJFC47T4eBnCciuYxJB",
  "key10": "49zd64WqGpbWQQACfxeRb68JypKo8meWRAp6JZcDgz6W9chWVGLWFk9rAnHqCrck7RJRQGCyhycZ9gts7UbPiHbU",
  "key11": "3hxmC75VqKVYVULELNUYhV8rDKEnVzeFSUh7YH4gn3qqzQBWfxwpmL2j8KhDrBwrn4vg98oXEPYYWu55tgnPTonK",
  "key12": "2Z2iNMt5hjPMpE1puBKppYuP2H1ZrszztpmbMFYMxmz6zGh8NMnVSUadiMGAnUty3YPHVk4evic8xmsUcu9EBHaS",
  "key13": "54rz9kGkp3UBkkQpfYcUQCPjXsf54VHJcJNT21aaZehLGMufGMDyAgCp9yerXQnU9b43U9sWxYxL8VWH5Ga89hgk",
  "key14": "5NdhqsMRFjd4vNaraFPzotJbREcTAnPp18S3WaKudBfhDGoyfQcnuyLgaGnkA3tu5Zj7tbAdMcRtNDqkWN1v9kV6",
  "key15": "3YPyh33uodF8tbV4xediGWbtQfgkhwHSHKVfrD7vEVYSPZKd2DVEqP3T2PzPcHc6sK6HV4iwUQ9kEKYBVNDhcpL7",
  "key16": "2qPQYzGNKA256v8iLDFciGHnjBgamtmkR9JnwKSrA2pKgaWdgahnAZ4iC33KqoHidghVxinzmptYQvGx4eB4UcL9",
  "key17": "4BohYHLiB77Bydv6eDDv4oMj8CHQ4vUCaRwdWcSHz82uaep1ZvhZADeUzYHN9Yk5Ch6MjKqYWNQwk1CYaFHZGoAN",
  "key18": "3p51hFixmBa3fcvqrySc1mocUxHU2NpWgnmXj1zMXBPmXTG7tRDyjw61Ei1iVbWTmw5ygQZ4paCHriyGapAYL63F",
  "key19": "5813trtLAjRRRtKSMGfxs9aKL6j3jPDq6UwojyXnV9EUxUshcKom7ph72djm8e1bdkGKaUD6pKhriu6vYLFdqq5Q",
  "key20": "4uwwepxGt6HPUbgVh21D6CfuHTiB7y1P6hoSc3YUERuwgiXan7sAU4ci33VsydpAMvjyCDftWMe5B6SD2jV4HRoD",
  "key21": "4ehrYCs2VhsjJsbSkQWfKrNmkUabqyEUsvz9M2zXzi3spphh7pxomAaS6t8eZr3R4uqeMFyqChKvgJZdNS7Vzbj3",
  "key22": "5JnzisGG1YwFR6bimQ2iFyrjqv6iC1e2CxH2ubAPGe6QQMhPdewk2UD9N9RkTGAdqtU3T2eyPDJSQDhJ9qMmaEGT",
  "key23": "4wu5HqmFS2P7aHh6NM5uK6GFLU61bxegtUt9SGfCJfH2wp36cL2yVUoKgkDiZS9XwEpACShWTrHiY2erAuTjhzE4",
  "key24": "2buAffgQbdryfPYuSwdT3kBeY2EfWvR2GjEb22vKqEMxXLFP6QM8Pz3rn9AhbmQDoZtzgHNLRvEpnY5ASPuXgrp1",
  "key25": "2cTXwPZia9S67xH3DMEHD23X35ELb5VrNScD2kSAShmsKj1KSxHQhTxAvrVhYN4PVXFeYE9zhiYgH5pvzsoKUdkC",
  "key26": "4KMCEXPB3UmdRRQjX9oAud26QbistAqQcrx6J3n854nZhF9WCdj9b94p4KmkTnKUpkP6uDK27B9MmLguqRGxztZM",
  "key27": "2UpXNeM7MjTbvkV9cEiSvg3iEo714of2bgsoHjzkqk2SdT2xkDf9Mp87rxhexLoK6keyFRYrEJfSPLQokKECvBSf",
  "key28": "2RGaNYrmakbWvw7d7XWJFJjkcmeYJxjTdMnANE7CccqMcZ9hcSAEjRqGZ35A6ZZHEH39skevxEijsuzkecptPB6N",
  "key29": "5jA7xA4PMRUBsEdyndwz2FxPxSe4MbYeytcyBfR8Vc3EbVN6y7eb19VWQdzj7xrhSt7cra96NMtano9y6mZZaMNc",
  "key30": "37gJrAYqbbu5SkXz6UhWcbaCeQHJVpbUsaG8N9tW4nRnJhPUffunhNHRWFtzuVvFPatobZZu1WtRF5epBkQ9kvnL",
  "key31": "5Cy6yBW4MCsiQEuY4bX6HBCdqfZtHWkto3XQkRTV39ftruYqs1wrdmaaW99WJzsghUhVPagFxNQXVdpffU6n7viU",
  "key32": "5EmdaCHDDr1dKLCHRtCRrUEWZ8KLnxmVM1S91vUzN3abkbxX8mSu5VEBJBHKcNfjHLAPHCUDkp96A8psBTx7mquc",
  "key33": "3TMxdLDEvRt6ndjmtEqQtwWB94G8GzP4BnthxswoxjMvYjNyWThdyGpUqENWRsHigYw1U5zdyomSupdKBkeYfZaG",
  "key34": "53BC8FG1Ps6cueNcjaX9jtpKCTvVL7DnCemxWZp6UrdDkN9hw4kfjToAwXfKasajQSJAZebuzXDuHm1DAkinXwwf",
  "key35": "2WWBQ73RACM9jJVdTG3UnGpBAgqYqjWs7Lk31qUjNH8gXd6mtcxZp3N16dSkrsHd9rJ44TjNZMen22ZkxKTvR13n",
  "key36": "4LXLDRXWaZxF2C2W6bgsSXsgChje9AmeF9xMGzH8BYPsjx31mUUccGMYcNgStTM7XP8cnXGe6jeWhHXgAjQWzwra",
  "key37": "4Uq1NhwGFy9srcbvKVdsLkM6AV1ezBXxZ13LL92rQGUhg1F63UckF71nvmsfFpudUbXbiDa3WfWLRDdYRLkteG7Y",
  "key38": "4csfEvT4B5L7A5HCQvcNVwQhWFeg957p2qiQcbXcofCJfY7hqwZvsmR4UinCyyXe5VvAzGeZx6RBenrMhxK6xohV",
  "key39": "PLex8B9WaEbVXn7zSuFwdPxTf5RStCkJBgjrMeHZDGpFgqyTfHrA6ArZ3rwKrCB283TW5iGNHNQTqa6X7pMxXBV",
  "key40": "3Y1wv47aaCSikAHCZBuRtDpRamotuN7v4tcekEUVKwi3D4dmqLGVq7J9cv2pS4F2TbLDic3VJ3R3Xk2GTNPTzQNw",
  "key41": "5dK55aqgZKFVzqgU6gLQqzk5gxVbyQBeH4qgvqM9aCwLK4MPX73yUhbj111iUUYcZ3iFcDS3FBLixySEaBnQa6qU",
  "key42": "u9CDoCiYQXUsVcKK1cWUqaphc22ruh97yTyfxjJzDLm5D7wn3j41hUy7MC7YrVatKC6eJKKBm2c4tYBq1g44rdW",
  "key43": "rKht3AbRNkRyQy7uacqq5o2Z15hbshYsDPKv6nPzi4BJAvWySZs4K7EQf6tQnTopYcktYPgUApPw57uxtAPkYpF",
  "key44": "ijVokWmTehT56p2AwPA3WS5sjWTqW3PMLHeB5RPv9C9o3nUSDUckcRuehZmjJAeLQQfcLZpXVfUMvdYN9d3udnY",
  "key45": "5apMf1ob22Pc2d1wKAffUKx9ntqF96xhoUefGw4hEktoXaToQsgUybZzA5Yho2C6rVz94uXQkHbmf73aE2h6wEvC",
  "key46": "3WDaqwEY8ypFfGFfRd2fvGPLKUfUN3F29SfSc9TbuK5uHPfabccmKK1HHqvwM647HWpaJJsaXpThujJkUWLDaeHc",
  "key47": "2p9UTqzDfPH68M7Qi7MLnAqjSyfeBVHyQAk1AkxiVKgEaouKPgpj6WbtFKr81uG9eZnvqR4ooWT1hMfi3Nzb4i85"
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
