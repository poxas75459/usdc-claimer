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
    "4Ra46ipFM7ZppHGKBLnBYLxkCM6HrHddruee3N65yNHCCeArx2EC2qk2FLYCXMy5GqwfMNy3pTpY71aNP1p3ifh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VzND2Q77wUHqvhHDFFUbYAwYxnhiRS6EekngxyED6qwyG3dMRqBVRhJo5Y1yjXzHMfKrmuM6PuLrW4n2qRe9bfE",
  "key1": "52P9FgBKpqJpGPTkx7USsTa2i2wd85HdGyM3BWnveZQ6W7UHZXnEfQuMVJMRAve58yETbsQ4gzKEEFhGMMNArQtZ",
  "key2": "3aypk3dyqtbiUAsmvXNTYd9voU7GoveUL1V4eALJMgs9An6TUCvw4UELNyGUz9MsBb2CkmhpKy54UNppXueJE4Pu",
  "key3": "3QtuWnxZSNJwwHPoWsoEvuxPhugAV8NDwrMYQwUjczwKW7yY1Gje5VGUXeBRSmJps8z379Ro59tzJXp9WSosEdX8",
  "key4": "4rmVf3vBLjYTMqBsbwUBZm4xaYtFiwfzNm46LeGY1YHFBBn7hTngvHmhVSzpwAG1AKjia6yTuD5QbrnwtAVuUD3N",
  "key5": "43aj9AUbnXwehiykmFdfecKYBFaR36ctNQuTrhynR5BTSjRxHqUCYvZVunCgwRJb2r3tA7PY4sJRyiaAW2V7saxq",
  "key6": "2Y2HEqkavqoT8mey5bA3EaUVsS3rAAVkp6CVWDNJyPz4FHb5u7vWEVyCXyRfRQKfGdB8VWrPTxz7rnJyYuotUnEW",
  "key7": "5hZFK4PnfoKNkSPfkiVoCrQsyBREyx9BXGgcMMfx6jB6tmecd5vjaad1r7JBVKmnUhwrKzQR14yA4Dgzzac7nZv",
  "key8": "5Gu4zwo1QAWmQiu2qBcv6j648LVayhDbz6cvvbkyyUwrBBC49LXLMP75y3bFMPyyq9ugRHCFBVhqcpcfCeeEFEfF",
  "key9": "41xfKCjSrbk1dSK5vevPyY2BWVKfJrX52tFkXSVymbSgFgSun33hWWpfxAakDJQ3Af672pisUDwUSPqFH5YpFzB4",
  "key10": "5LULc4nDR7hbryMZ3q8rWnewFpveebRhXaA3K4BTASKFeHvC6iqiYt3pTYnwZjKGQ7WpspjVzo91pkiE55tXKrJ8",
  "key11": "2zum2LTN9UWgreFDwUmdXFbUgfaMNtxAz7qqic7sg21dHhLv7468nvdknP8q1zatXvRhG5KGjtFCn469n3K7gVjM",
  "key12": "5qF1CE8xAZEafRSXCtJ357TNCx3HuobTAPS9186hdf68n6kPToERW3cUAizr1fmdAiLX9diAk2G3nzupkrFWqc53",
  "key13": "QcbidDNAt4Lg6f9b73h8NtHraZbzoPKenjQ18Cbs2dzBnPCVjynzVTN5raGPyFYojLRsMpFHgJZsXbGdBnxv6mh",
  "key14": "62oKPFTWznZgUQJEUNfsBxFd8VgnzppUSJqPmvyqyV13zqqaF8T5ZisxHZY4gtu69PMZn7BiB2cHJS2CzSPqC3qi",
  "key15": "V75DpPATysNwFPoZCh9b5FqMgtGYuTmrysSCzGwoHZPxz9qgzttGmETh9JAkMioRXYKVJ85giSAL8MxeDVTrE6P",
  "key16": "kBk1m7srsmCMaqzXhRYb2Ph9kD2WrEHwofhkfG4qkSEur7E3QfBMDfMxf31D2ecLgAdbuwxmmqwJdZKbcWK3Kvs",
  "key17": "5iBqsaXdSjN1nGK15x6tW9iZAHjUfWfQsBngBCdX4GaPuTjKuQ1Yzy7ontGPtLoguGUAPbk7wLYGQhPXmn9g1r8f",
  "key18": "spgbdaAc1G6RECBYms1GZdgtZNGMbSxxqoT6HrDnR57qewC3vz7qq95StadgYb2gMHM8wbMFNEXHKcLqBjE3GCm",
  "key19": "4fE4GD4QPRaTnauT5c5nbzV6Uv6kVd34mQryXjco2PmxTJpqwpfnTkfeFKXzYm1LF7Son7V5JnGcqjx98hWjDC75",
  "key20": "EBMDM5BT71LBXx7fqfL2buxYRNt3Qggz7KweYmYtynTHNGGFcjjhpMc5U69XsvQm86fWrRPi39DpBBQuweENbdY",
  "key21": "4iaP5sYev4Kz3pcdY3H31UU8wNhWWRxvivXstwJwZjTA5WKPGXaLaVsAzCfsMpR9dKxKwkrXw935Usxgao9yHAK7",
  "key22": "h5V9VsK41KRWuFmzdMztrfxaPK88w2Mo4ANTv2NqThz5gypX1cz4PToUo8AubbLCMWEFNQiS2vgepXYX7jipbih",
  "key23": "4bAFS2vcX8B9EdddZyaCefeQ6co1bUFmLs8UWfDyj6QQVMwYZwRtvsQhV26a9vb4qxGqXrN2DEhYbC5EsFrK73NJ",
  "key24": "4Y2jmbbZBzKax1mPtz1UtFzc85UkDe4MurRVktD6XUNTY6Ttx7cTUGeHZgjbdk2zYun2DLhHMqZUyopcpFu7YF2L",
  "key25": "2kxJabnzb3SccNqk7tTNsC93svrbhKoTCdU4HjFCVee1SURrsZvXeZiJTjgYpnLURHSyyYBMiPdvDMdvpDctAGLU",
  "key26": "5nEFdBQFNBTe2F3cpJok7s9tJiuScGt79f3z5HBZotWMfy3yTUBYwCLKa3C4cz7kb3txvtL33a7gC3Mz27nHefpz",
  "key27": "5XamJLDA7kyVUnzhHdQCpLHJ3ZqNku6xGdMzgW74hxvhg1yCE5Gan5mxuU4yFBfp9UYE91Rky7sZSi6rHmB41j8u",
  "key28": "3DTsNSUdC55zeABkUjK7aJNY3d3fz3rL1Sgp34NVoBJEAMf2q5KLcRjdnAgL9ULRcwsmmm38LsQcJtK9aGTpXcv9",
  "key29": "9vW3tsWyxdwMPke4q5oUJ5W4ps8E7BgYc7L9Mr7naSKEQyzbevKfeo46Tg7VvVxqpDwEYftJCDBhQK9mqg4GuNg",
  "key30": "3m4etEgZkNFhWkrH4E4vphfLvvW4NDXCdpfk3HBkCPPfmf3FqS3ASnhq68JBqJX1AWFHDJBa2jt2XjzRNR4UThiu",
  "key31": "puz3SdVz96zVgr8Yh9hn7vxgWxDucwAdniQe5U5EG5LPTzxYXbgWywpkafm3j7JdSbdrFzer6jgd5gx4cNJfS1D",
  "key32": "2zQenunwk7K4nxvN9PmFU98Kk8yxFjvpCqJBQHQm6GsYPUAFL8FzEXyKXztZCysJA4PCzpmgk9uvGbA1bUGSVQf6",
  "key33": "2FiyxviYR6hnhZM4GCeHvTngq83nue4M71y3fare9YzTpGM2KuL6wa3Qrs2rLov4ExGxdr9G5oZ6bBrqSYmAYN5v",
  "key34": "2qpfZWTF42KyTe6Yx9141v4yUkSBqW824ZTMuFPq7VjiEZzTQ4VKxqjLz4xu5gjDg3Yw7jG29a9pAFc8fG4CSs51",
  "key35": "5b2kJKABrzvJocj9zQ25exAYZjitbWFK3ohzpjC6t3jSjbCHx2rcwbsz6w3tYuCjbYunsj73e17VXZCVpHAFULFK",
  "key36": "3B9mc3x6U68Lttkkf6qKojYAuSQyLr8xQSnJPDGUJVYKH4ovsL7G4rJFo1syvdjURqHkxicMjPRdS262pBW6Gsdg",
  "key37": "3LB9E8nodexQNEiFiE148ycxR4MQujKyBrCVyqqrXMMEBhvrMhQuR7wWS4M8meqEEY7UkqEV35jnkxbZScTxBjWi",
  "key38": "4Gkmnr5RsNp3pTCMbFrCfoTg5d2kRfL9Det59r9Nmz5zUHVj394cWrZ7SfPTgYLz1gTj69ZReJ2tV1WZaAXmfzJ4"
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
