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
    "5dqScCk8WHXsY6hNApiiutJ2RKz8PkjP68skYZXmfDAMzuaS3eiFZzwuYV8bHNrRS51Vqid195PvxCGLQ4fLokQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tj3JNG5CCqgm1muQwmjF5t3zgayrbbJrsT3R5pjV39FHWz8PnnfrTRFWHbENUVPLeS2qfSG5HX2vSY7nBmKKczv",
  "key1": "4FMHTcNMDCGY2jQ3qTJ6LJSCshUs3RY5bgBRdw4qGPRHF9aE6EoaJcgr7QP5FYMjFKX2JvBeAVUR5xBa2jj5CEW1",
  "key2": "3gsYB8r8MXvUufb2CfLH74zDzXGhWRdnXkbg7jr1rvAzHGz3xhFnzjxRdZEGiwNfuBuZdnHuwgomRDV47sRcLyhc",
  "key3": "5EjjUtFT6QjUkEjFQ8BvGDwXnePEGSLd1zzT9SVKMVtk3G2kM78NRvhjx1iHM6NAjs29KLFb4oa8jW4to1gxCfjC",
  "key4": "5zzbzciFP5i16yfuFMizHUbmfoXGGQGhU4kEeV71aneSUNcFsmdE2NPpxxqr8WE1zfEPxNDoDaiHjpyCidYCYuno",
  "key5": "3fkewCK9DVZjpHFXoP26zQoP9Vw6LT9GwKceu1r28TUc4PDYZ32HDTXPRiZKD8nfNbEnSg8wZR5Lph8KHNyWv3n",
  "key6": "2wPjpuyZt43mWDFnV6p6739apbfBKsdowpZyJanatC9Uf5Hb7cyMxkgdTXtWnjZXER9CRtoYAYTpcmKMm11TsMka",
  "key7": "5BBy3j2qUQw5ec7EQty2jVHnm7drMZZMdP3DptKUu9UjRkfy4peVGQdS8NeT8ejCa1VHWEQEAPMB9WqvV4wbTHkk",
  "key8": "2gqKTzouBZihsqNR6a5juivsQgTxeJz2C1sTj1is9o1c6YLmAK7JsFTXAGhPhrvFMGEMZQ5QC5oxihU9bPTNk71c",
  "key9": "3Dk9ECsf2F5nzAFP7pn19fLQgvVPHjcDVA9UwuukFRVHVpPy6aoWaU7ZoBh2TwwvVxnfG6wEi8kU5zQXNxSq9PSB",
  "key10": "2FHtz1EqV2WnRHyQnnbdgToFuM5ASLjvoFphXGGqDH1BxJuTPyt3ADu6ksihnmfcxKDwkcgUYdZs9pDCidz1Ub2T",
  "key11": "5MHJnSgYGUwrdTaH3vTPhWPF7ZRGq4ej38seQY9nv7h9jn4cfAy1NENN13bquRsqiDeAcAy3Q9Vp3xcmsBzGTqED",
  "key12": "57zbXDitLnSZpLiquoY93QDHAjnavzTnVXiAe8L8nwQQeMPrBbTVCymzfvcnaXxQN8DpDQ6ztT1wCUBtBHV1jg7T",
  "key13": "2hG2qKHHEysxWURiB4EDzV9mByXWXYA4NvCKTeSvPTbJpFpWCeEBTMZMaaXhFyA1uhH3U8ipAxPoBSSTMb9fHm74",
  "key14": "43eENbo5AUUycW2DrVVx2Nc25cg3zo3HwYJGz7dcUbNhf5hBxd52zWoBNzrYJv4QNYsydBGaYpfLrJkJqqEiULqr",
  "key15": "3ahJpwiEjAC5bbtmJZbRS3LiBzK9fjP4SnfQd9PCqFTbGuktZPuFcQcGkPxjXcxhFRRhUtWH7EZmckf9KvDEJ2Zn",
  "key16": "2XYRcp6qNZnCDXdH7wjsbB2h7Mr7y6crGeKxvBDEwpVzXmETY61723NQZKkonaqMNRueQYpSXchi4UPbvUH2BGxb",
  "key17": "eAMBQBYHaP2FcDZsfZ8UXxajP2KMzCgJiM4XpbWKB2M4K2UpGAubVrkg7KEqKenXsGhcGVHnGBsHuhhnyrrwD9a",
  "key18": "45VzudWJ9mYsR8FosmLuVKbaYYVLwkK35hAU48Xw6Azs2S5aZuvCfG1K9GEdoZTEastjNNW3U7zRXxRWfZubySDu",
  "key19": "5ZtBK4NebpqyJg173zmKMpRVQwVjwknQX5RkogiCu9MC6Z3D527QVR452EesMfUqMUfGX52dRhEgcgK5eRx5ycKu",
  "key20": "4v5vUp8G1X4yK8Q6H9oPmsjZPLcCbvuUStQrB34uS4VS4pekEGmpf7vCbxhWdLcBNjCfnXAAVHUcVd4unPmZSgyD",
  "key21": "349AJH1sWW5h2g4Y9aQAf38bYg6S2nGKmw8VLwQnSo7r9cZbehCcocmiz87skzUqwFL3sVL6Wwuhyn11XkXxcyD",
  "key22": "ofHTWTmxaAbTZxriKF3b9R1jAkHuGRCd6ebAdbRFmT8gPAVhuQHY6rNbaP6cNzTnznMe2B7MRJZnkZ3ErG1BQVA",
  "key23": "3hWqQApzJLCPyntgVpRk7GGu6amC6f31HM9MmEosUDcPSrtvytJaX7E5dEVeZedis2qFqLPXCmsk8cvq9ne3YSpn",
  "key24": "57GrkHnNKhWMQetmqd5AEHWDrFXMW8qQb3ELbQzWKjKTRFnmr9pr5kFyk7NvSxCkceGNUCVkCE4bCxF1Y2hLg3cH",
  "key25": "2jXfEmkxcpUfTNZ3srng7SqFtoPtZUspmR3bZpe64Je14dzSs2nZ5Bf9vqPWSBDM2QMJ4xcBUhGpeARUHZAu5H38",
  "key26": "63iggCAbfwWY1ufpp36FpHRkZbt43G8sgVDJRoYjjwY9gprKJq1KvqBng9Pyjy8pf8J9mTorSKd3pXjBbshk2oAH",
  "key27": "47k1PkuEQUqVRQN5hvN7aEnKNUuHNhvqHwztxC4Lg9h7GnNjRUtMd4sE4TF9Ytdm8EucVqB9Giua2wpcpeeRCwBs",
  "key28": "2CUzDEh3eGmJeMUwM4UJ2jH5e5nJCzWTzs47bCdkPARzGTc6yGbk6tJM48oUCecGrbecVi4bEvni6Lkpvsjo4vty",
  "key29": "2Fzvwu1a4Ju33sDJmLKWugSD7CT5Wwkhg42gnkj2r7rLbmFuwd47cuYDe69GMy2mZgysFicEobDbN5D4jpx5jDTF",
  "key30": "3ta92o9D8z26WRcjf2agyErgAha9u51AV2LcvpJmAJL1Vqg5T7gGDn6ZUomN5PqFZ8E3JmnoDd9SrLf6ZYBcPmSQ",
  "key31": "gQ1rEDkZ9H22eYaWNTNwaJi5pELByFBWjmBY4w3Yr38veXVAJUmdaJ8sksQzQV6tqVZdRhoQj5D7bxHAj3obDKX",
  "key32": "4eCZA9VTduLfoDfEa8dHyHY3i18KqTFpZvgYQ1RvUD5k2RFx6xEzGFhe4cw8M5mkCnLFHnMW8wxneY3ArwhKH8nZ",
  "key33": "3RvzyFZsnmf59mbCavcBPWBH7yo3GAHDVW1ymy6ZqS56waZSS5rWQf8Kh2uGEEwvSqRc2Ro8JiHWcJu5KKbckzf7",
  "key34": "3ndCUQmWojzrKVVDKerEg4p2Ea4UYysznXAEGtScSaCtgaSUb7ncxr4KKTC7x6JywUKEj7LUcYhsLUVm5h5TTsUv",
  "key35": "TTWKZ7VXSa1oP3CQrUEi1DJ8WKuZ4kDDcofijP519YbNJ6Ft2qSqqiMmm56yGrZGgAokd8JWP8CWXPoFbsQZ9G7",
  "key36": "4uSequ3siR7A1hDp5j3esSFCyG5YdV1v7XwQCtRqWoFsKZvTBtZ1YpHw8BhWW8pQMMusxYWs6yW4mTiz2TXhjRkH",
  "key37": "4MC9gPozCiYtwEjbLqcMG6J2dsUzn5Kpdje9pyA7K4B8pxoLSGzqy7QRkuNQG3NSL7vgaCA9okm2zTZdDvDkLHfX",
  "key38": "558fjuhegqbE7bPEERTXpKbjRhrdbjwhJqV8RR44o7AZAcEExKqVRtAa4rTAtLz6eFVeCJjmLA5Xi4xx9oPkNwWo",
  "key39": "37RaqSoJ6ByRARifMRworS4QjPL7JpkXBM1WpmV66u49urgaRGo7pPgVPv9PC16biv4goEqD3qrEu9wWr7sdJBkx",
  "key40": "PWSLk9hcfRksvNwN4dd9KDvViHZ4bokgGTJNogCnykAoUdLRU7HMhMW4qwcXe7gUWpG2fBXjYJXaTxpc4vrCnto",
  "key41": "5BQfkCdj5yUgC6m8kaDArPKdNrxYLjKap1Pi79iJGGdkRerJ1TkKrAW3rNTXQbqhurMBFJnbyiVDVoUGBwX9wz3C"
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
