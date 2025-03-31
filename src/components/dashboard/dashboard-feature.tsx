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
    "5KurenKZySDE8jP3vwFmo34M6N94zjXsSiCtrN62aDuMmd4y8Xsq4DuMBeWJUY5cxVTv6aJvVu9Mu36hGCArfi6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MwCZcarU4okihZsqxCnytx5WranV3xeJ8XiDHw6gbsMnWrUwpz3Nqe8g9qvdxczaAqDx985ZzbphVqTuX3FbcAZ",
  "key1": "5wD8H3hBLKHTgSVjS3ceqBQLpexiJufY1KjPp97QQ6z2GKAMvrB7Qbr7XWa8PLEvp6YNSFVmL5tM6CiucXsKLSWB",
  "key2": "4jYRC5VeCj7eFMu9v1B5iATwbXoqYnhPDZrBU8U6tohWZyq1o4RP3VSgy2QA5ppTMLaC75iSob8RxKTS2w2dNGDh",
  "key3": "2wXcujdXETy2JYHJhd1Er9L7coEJDDhBgzwSNjmtUahez1XRz7GSn9XAEFAHHU4peZG4Qm59DB2W2NobNNaxrB6W",
  "key4": "3bxLfW1pA33VzYi9o6dfAAivB7Qw43XHNJhEuoiSK925dE8fDtToEXW1R46ySYe9P24con5WfKDUxn6iAYbWZgah",
  "key5": "4kLnWCqhmFkbb8GT7ryp9nwv9KkYkHHMnsQAyPmVA5XDU7YspMzQeC7yzaKYuBTKqKS2FXbhbm2FjYC73gx1fxvQ",
  "key6": "3tGFDUjs9XRj9zHwax6TW6xjXja54KBeGdZ7DpgEavstXAPm5VBo6ypV9Bje6v924echyA6J7SsB6PMuLDmNRYp6",
  "key7": "2AtKgMtWgGLHvA8pEL2U5KzupoC53YqYBJFwAUfCKNCqpHSaGQPKkqNTXViiv8dcWAZtnbuabpbmFJFWLpBmweHD",
  "key8": "4RxarjzGeA5BvtzbwbWeewwLjtBpne1qH3GBsBZQriPvcCYJGyNUtLq2WoX1KEpaxA3JwxgcMbUTNzY7Aa5ktPyH",
  "key9": "4M383b4bkSNjhPHBL3EYUZcEFy5L5FP6Kv4t2zLGy8TBwFbk7bzqrUTonumVDZ3xJDjGciTVR3WATf1P8svUs8RA",
  "key10": "3wsVqjZ5Ekt5cfBKbVFzbgxfm5iNyLcQuJkUvB8mmwpsY3gogmGSRukGiVHAVrVbdcsoXy7ssQu7wX26GprH8vms",
  "key11": "4tQWyqxVHRTY1rw1vc3SAupp1b8cS6Dx1aBXMecMdqH6A4BT9RyLeM4kQ6dL4sebASDL9fyEhxMg7ZmpyoHRFEZn",
  "key12": "XcFAVtZWneBUGDYGD5szVnJCMT14e83z6A5JkAeBdHtyC52Rq3KFCMcrFwYtGbHqhqrwnDoJXbbqih23coZoC3c",
  "key13": "48TS2mCRU2fJmVgSFdbj358EKxXtDBFxeNtKfdqzf3hY13NjswFDne7hMR3HSy1NqafP32pYrgH5EBqEqHTQPjHE",
  "key14": "4C2YDdUZQX4y25VsMJWSm9LUU6N4rcLdksiyxML59nEGa2Q2vpbUX66eSLkwdmypYMarTtro5HiCrhuMujYaJjFn",
  "key15": "3smxuMGPpxDFZgn3R1QqbExKWi2uzNHSnCegCJRcEg9bnuQSW6WqubwWmnm4qJ3EhsaAHyznCp5x3hWPeJcshZf8",
  "key16": "65YaPW1uYbEZi5PSf3Wez4KbSY1Qubs9p334Agi6m6B1bceUoyQ7SzovB7yReGBRpS86sKzta32mpJtPrEShbKFp",
  "key17": "2rHc1vEqcLvxcnVeYbTbF5SMGfc3PCRCuo5EUSbNcWN5vmgj3r6ud7ixegBb2mmdicNN9Yx2bPax19QikLThfHC5",
  "key18": "2vv6A78FefGsYaztYPsQhGScZZdCcjn3BDmCYL177u3unMC7of3dzucWNtgDhjkKZw5JsTKJ9EQn6iGyqJ5waYGP",
  "key19": "5CqKHUAbqEB2DtK13HuvzLPa3PQ6gMwJLk3SDqZECm71shShtv2zNTN9rWTKpaSxwdYX7RkQqBeNuEaqxLmUAvSD",
  "key20": "5w6goffVrHFYZQdvzEn2h1fdTRpypz2inKd43VrjCPhKkUxowKa8SLY8yEQPoDsH239zmQGjUJxZhV4DGzEMxEqm",
  "key21": "6QEarpkub4wYhmuiFX6gPg9M2cherGhF5Jf7Sp5TWVc6zPMjtT24aT9G1WjdVvtUY9Wr3oGmp2NepTg7gk4Pidh",
  "key22": "2odxN9fxLbJ6c691trSeyZN98rj4EZoAfciDLQXnGUXkyRBXySgVxNwiMEP65gW63kew4fBWdPf6ubDWZN3NNhQ9",
  "key23": "4iTrQnuuUnZWWVdMaTzmRA1CFJGZkLFmJHHNHQJiDv2gqstQ31nUPj131Z3JtF4PMXzcL8iKHptn89AWYozYZ3jZ",
  "key24": "5rwGiM7rpxjWS5BqrW38bBsZuKoBjZXrEto2Nza9C3mqkp9SWHXM5t7C4zFAsrqe34t1MvaR744LSCk5UdDHYGot",
  "key25": "3FdLhuf1DDyNzZCv5nfi3z3LrHm17wjcUxdK5TN1LXbj7pdJvV6yZGR3ALKwnjhzBLuQ1hbsAFJcuzvo24stmJRa",
  "key26": "4TMqjdjLtYHeoiom6NwM18WNpE9DmEYq8cqd6EhMSm4rDsD7bWAENHUj6bb4gzs8c6JjT1kPPuwzhJ97nspQzbb6",
  "key27": "3LjwatKiruGJuLWq7ETcrG2T45bevRTmpNyHu8WKT3sfr3obtu2zREAT8wtkaAk2PaC6a9EjWBRjaBLVk3WESudX",
  "key28": "2ophf3JvzzA3fuiA5R8GL1BVWsQPcE312L1DhHdosywY1NtK987MRxK2Eq1xVtaBM55rysuHGkEudi5fLcV7Djrr",
  "key29": "3eDfLXLbL2Vm1sY2zowPqNPe5jWHzM2AJishGeB6AwPQPNDJua9NMSeHfxYQJpShAA7mzDTcvZpkyFpDtKLb5cnm",
  "key30": "4rSGUCaFprfGG9aAL5zjfZokN8bAhdWaVRGQkCwJy2TYcsvnwLL3g65jUnE1aShm8ury6UPEPPq6MKb66RA633TU",
  "key31": "3bMYxofguR2VRP67jeCUmCVPPJpCvNb2wJ3RXudPs8MZ8kPQgiGThooBCs4opdp9p4kRZ1WPxYknP82Txib9YQYj",
  "key32": "4T8QJNcXL59dYSFZkeJzqiwkuBGR3ZM1SE1yhdweFe9T4BWPjoxTGoCApEWb9hmZsfhTsyZZQfUqvXhh8FWhNCE5",
  "key33": "2kgFhU3GkQ35XRmhxMKH3KQys7UPnNVFYp4st7yXRBzCEuSdKATXMP3JU2Q7vfuB8Y7BtW46jhrp9dUivFabqkWp",
  "key34": "66oVdaRnTViQG8VP55Q2Re9Kche8wmfTy4iv7R5PD2xjVQSoUTCfPKLagExmgn9jdNc4XYggZWWPHrZbcnuWskaM",
  "key35": "n3BbN7Y9sAsPovQ5xKthWfJTyVyxufMkMwpPuyVjSfevpfUpAAuZ2TECHoqLpxx65eyx1T3Z1axywzzwzCMnfP8",
  "key36": "3jbx6ztHxq21KuAxafuWntAJCCRGgYiaCHmo6VJoDfdbPL32jwgYb3cxrX1arji8pPqse3VxMffxiC6abBFAN5ct",
  "key37": "39Bp94MFbvSVoN39hERJWjhKGwix3HaDH2Q2MWzdxpr1BZYFqVnBaA8oXKUASUgRB8Y78dpTeGA3fpjoayUrwBZK",
  "key38": "5GzRo3Y2qf1iqxyHkFpDKx1PWBuhBwdW4k2MimcBn9vozhJiu2JbP9jXg8wFWHhayi77gnSekW4iU81dmw5R9CfP",
  "key39": "4BHXFSV7Gs4E8Zfh3DJgR2sVFCwmYTYYvYpVtZz6QHWhLchD6X69rY3qEApqNjdLYkMyWVoDHWGME1kSCeMaN8S3",
  "key40": "53mAqCwvBb1LzEXM3tJurTXN4HidFHEUY8fKqxSACKJs3R57knRBVXEn541kkMe61GzfJQqbxWqELFxFMbSWr8HC",
  "key41": "2PCWpLNYDNtsCDF3i8mDog4mdoFhBDEjab5yqxiAhWCvp3fWJigc5Bi4eRTGhy2dPccBq1bYHPQJZLas8qBEBeo7",
  "key42": "66ELR3JV8LHKM7D5k2117zkEzfuGGtv3rVZU2Aea1cEMhG3MyxYvTtrrioc3R1cxa38aRUAHQSTsBuxr84TVqvLw",
  "key43": "ESwaVBDo9WErwguMG4zmHUaqEyf9nG4Jmi2pMmb7V5QrLEFbFSbE4hwH86wSLkus6MkihiS83ykquD1a2isCecE",
  "key44": "5zjNakJMQfb7Thfd7VG64SCdepHdmUsxfxz1vmJLrBnR13v9fqSURTtv4otE8uFkDnSLQenfyFiT9iVUnfjds18v",
  "key45": "2Jsxt4BnyJfTCshurea3WZife5izuq1cFXhkcqYGtt8M6P8frmK9wTeUWRMX6VgWYGDy7NDyuHdxUshjHgpGtPyt",
  "key46": "2jPp5of3LMApYavK2Gn2hnq32oMV6GYjdvkVdNeybdprhFkpsUChu6EUsGXVs3Axqg1zcvoPnU9iDhxDrKkAcEwi",
  "key47": "48Rp4KAHPRqVk3rissDSoxxSiV1y6yENtippcCJihebdE1ywdcAnUycurkjUsBz8Uz2N1TKiv6gHbgkzXuE4EWKu",
  "key48": "5fY986YmqiMFhJSY38g5EeqxEpcPARepCgmteUUfagJaYFuxXFtAFKN4JYkthtGh3r1ZQkXJUXdCP9X2Vf5Kdsim"
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
