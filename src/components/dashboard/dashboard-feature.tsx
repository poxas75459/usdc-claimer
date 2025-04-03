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
    "ezuteYc9wugXbFC7Nds6P2PDXJoYrUE9idEqEG1wr8fqCNNbLk4RXdjzCa9FsAmG9ZFJFmzf1Fk6ESnBjGP4rHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9w5nQhBzTYAG4wHiE6tY4JH37HL9kjx7AGddsT1GATodb9qCtR8bCNah9qpi7LD36GUdGTm536oT556yYPMhBZ",
  "key1": "5FNNAaxKA93bhGgH95EanN1MtAghSzaEr4HYcfJGJgFLa8NdTfgFhRaiqpPWmr4F6bJptN33R4UbFgTxKVSuh6pU",
  "key2": "4tDckVqkHJ4myg4Z4UxCLjd5HeLDrpa3xcwguoUaXX56xA7xQEByqUBxHzCoH6V9tkw4rHuJYnv3X9E2QL233kGe",
  "key3": "mVDqav5buK5xQibrVmsDtxW4ZZDxgUqdG89g38DLR27G4QeueDZKYFzStWLRJS4Rpd3mMPqYteLXjXYsWiE1WJd",
  "key4": "oQRLFsGzMTeYxNfcrLP1cbAAewAjKRUwG5axMMMMYQbuBz5nqXmyWAfmdsoVRGWuRZ82N2Rf8wxWtcYHAEjuFbH",
  "key5": "3EvqratZ8Tv1opyrCLJxDRFG55ZHRQPeDWPmyusjvEaFU9sQcJfnP1ZqUpuE9Bq97HQFMukVBYv2casUM3CBwC4Q",
  "key6": "5NJ8vbC3iXeWQBTxp1PNTxcaF7wLHd11Qsd1TonUoV9as2z6j6SEqi4smiV35yNMd2Gx8b19Sq331knkmEJxy3K",
  "key7": "8se5W81jfLPeY5RVnLUkBp26L9YqfiiG2nvEgSEZQ8qgvj3mzbAPS2i49hVPzgsPC7m2F92sp3bMf8R9YPCrqZh",
  "key8": "f2xBrTkuogc49YTm1WMoHHfWHrCjjidg7Zrt1EtTBLhrLyERgrZPcqsCQcADzRwHucNnaDapiqon473rBZwNe7G",
  "key9": "5eV9tNBxxGxef8jN8M8UM6VSsgYYcNpfohx36vafMC645fzQRHWfkHGZzFDuyWdDUAYcvwrBGkwht6KHLWFD1XC5",
  "key10": "2znhht1XBBiCvX3NQQji7zsL5cXCbA2fVzzMHNnhyoiVj3Z8fKgtDNdTYR5xp6rdiP8kJcN9XoHjteaMQunzj2YF",
  "key11": "5EDn9MiNjwvoev1qt93obNrHz7XpZV33fBj3hPL1oWLoRVmcqQ1CV9zXeKpnmcbfwUxSpa5PGeBnvqhSKwfdzBvj",
  "key12": "2aLdgWuwRndFUsHxEFCJdQWYJd7CoeVqnPPoMz2kz88pyZSPxsGu2XQ5D8yp3m56Sc2qvQ9ZCgyGa8mwKqh4qQGP",
  "key13": "5jGto5gy3fPJZozhUjwq4uyCPp9M59igxHRj5tDKvAw4QMx3e9bJPen9yLBEW2E3gTinErCN3uKwq7fTaEmGohYB",
  "key14": "5MzWNc3aYwJZuC5wxogGj3LJN8RdX8LgrXBPkWzpw3Znwi7tAtmV3zoKHDNxX5b3APAxxVNc5RBsYnLVEYXKPxXD",
  "key15": "4duLM4yxry4CCznEWNQpEJ1kXtuMRyWMuxmyyeTucu1yghysa1dsnPK8EvA3jdmTQ728b7Uo19ZfiMuLoEkwe5jp",
  "key16": "vPHvKfZt4buFRWNv9vuArvkSiwX6PDWXugNHV9qoaYCWXJPUBCQtxa78W6PqnLVBUMQDpw2JAAFbbwNeQErPa1L",
  "key17": "5t3GtB66zpUUiEbSbLybc29GiZc9de2sTuT2DgZkiXVPkEyrZtB9dMK3bgnVtCYQXbwz8unT2emQdzpqWUktpxu2",
  "key18": "6thCWPUatKqp4iAygMHQtiH7B7AFnjJ4dzK9ifdUipH5goXBDVkPMmX9jbiEXusitpivvKDBJGSqZvxcnvwXaC5",
  "key19": "2KUGeT1kUYSt33rkyLmafEGwFLQPWAW78HpAbQUeiVrtdUN62QrEidw2oaDTcTMywA1dL2uKtcxV8CdbzMFaMLLQ",
  "key20": "387uS13tmnsFS4czibCB88zaJZjhKDbE2f42KcuirfXJpeWUzDR8hVv2J8PJh7JoixwGiLMnZgeEC1MWCzpcn9j1",
  "key21": "4bCCtzS6Lw7aZQsVmM9g9ntaiiBjAw8ZyAumW1YoRpwjsDXjHjp8dxdrmfA9LUnWaTLhpHEV68JgaDyEFBq1Ndbb",
  "key22": "2tZLVFyi3p9n2r262qDbAKz8dQUoACAUrCq3irw41wPGbyEJfnoDVF6ByYfPzLrWWyYVnPsMbr6bannN1idahW3J",
  "key23": "3zHxFfJxs8sh3ak91e9thCACs6uz9hxQtZ93hijYPJGsswK9zkGghcB1dMcHJQHxK8XXghK7vm9Lp19UGToNQMeV",
  "key24": "4dwTk5ZZ8iYE4zgBXwL7y5JebSB6vef35Mp4yr5CBatQGLXzkJwEBUhEJX347rC3d2kiC22LK84zehX1nmJvBUPu",
  "key25": "2ziAKpUAbDcRNroqYgPYDN1cvWaK6PBeF1PMJ8M9nVa8FSFYqgLjhfyAC2j2uc7dSMUnhS6JFevBmX6uhRyAJoUJ",
  "key26": "2nbw7FAzF2dGUPnc9CvurMZz7H4ZdJ6s2L6SzzcAu1hhtRsinEyiDGyX4UDUmE6fnvphwrzSPhuFLp4TJCxPZxSG",
  "key27": "23rX4tioutfgPJs5oByzMaWzTPCi89pibMSXKPXY8y54aWHSTi7rv2aDNzazTDPNx6m3EKaULKjHfJra6V7tvBHg",
  "key28": "5fvMk4VLpsG5xQCKnC7YEhYXZSV5NpPu6gnXDj15QWZr77iM36mhQWD4BLCsk532ZxmL8CrHs5TkEuoT86WgoDfL",
  "key29": "53XoWGa2kKyf3YwPmyZ3rGRxfERVLhLgx8jZq4kHs6B14JpTYmgZuogBGMsMfkNFssf9PAbCkwhCrTD3JBQMDnDp",
  "key30": "4jNueY8MHSU7CifbuCn2AKWZPLR8PaRpfFCKs6JAZVrQmfQChoBoJWbK4MDCYJewhxoZhxizBYQy4MuH1jekLy2K",
  "key31": "YJvUFFVukwhuqXuKaVNys1NB5RbjzuEbGDc5wb45HKid6vU6hjpuYF1fTGBJbL21bd5NFUY3R5YRtiTvRKgfAWY",
  "key32": "4iUH3tc2pJcsivbj9qcSqDnM7LbsWBCfzZyZGs27VgfKA5thVpTmas1amB8iAmCECZXnuBoc2FJ5UBg2PRsqWKzA",
  "key33": "2Ws6nP9Gnfoj1c69Zv4QEQjqkcY7NfDhxzvi2CUvgojrVbDjSZv7oSt1XcanLuxc69yqjyucMLz4T9X3t22F4qkn",
  "key34": "3cU6L1AmakGJRZnDpMhCnkaroCsdeiDmGHWc3V7KcgiwXihAHzVM3nsTXJU1QZdoSyYkJYqcmRhyZL91PfEHEErP",
  "key35": "4UXxRstsGzviho4B677kZNPCACBZk73PqQcD7ag4r8MTyURgT8qmgjQ54PUo4xfxptpAhSesWvEtw6oxzgFuUmo4",
  "key36": "3iMdPnpVNiiB6fjpefyo4aS8Tzzpi4ZKMSgG6aPcWWAu43zzLqqWgbLVYWG63kECHXVNZbFoahe3z5fRzsoUxS2q",
  "key37": "2krjZ96fHmCDMdNVn5qfjifpUrCDTMMf4PprzFbDP519cREwBkrHXKjCtUi9UqiLRK1PdHeh2LbnJkBq3L199AcU"
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
