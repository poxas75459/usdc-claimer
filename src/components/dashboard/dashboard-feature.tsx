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
    "62UcjE58kv7hREcUKUuxmfr91RBfWajBixMfrHj3hhsA8gJNz4RFhbS2oAiNXL3AC7dibgH8fPezVT4z6ranGXPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AvkKjX4z1MbdTEZesbZ978YrUseYbvVNipNdGyEHzps1bfAKxZ7hWWae6LsYf1pmRdx4smQZ5WUqtvFzToJ7p9P",
  "key1": "4dgzPQjaoNo4iBLPbuGseUxZRu2iATSPSbKJwbP2aZHXuA4DvJM9b4mHbCyb9hhQpAkZArb9YNLXzkXBHSNYjxU9",
  "key2": "2yuX9d5hp6m5jB97rxNZCWkxeAKG6ycWjaFViWNRyNTCe1rmAmT32tG7SfR3SaTw8ma11B8Yggh6KsZ4BkXAyX8o",
  "key3": "364aCK9jNBndCUGyqBka234PR1y8i8kFaqeRzjSYeT29tBd6EAPNaB1fDTppSPqrxk2Q1N7GK95PWrGkjTBaWRxG",
  "key4": "Da571rqkFLbgZrjDP3B7KioN9x23x4S7WWUoAk1N5ipJh886v1uXFa41ttpPvE2opX38vcjzBwGHHfqzAKSf3bi",
  "key5": "4E3eLZmZ4G4y9b3vXNCLCpMHAVCXHxWeMCZJvEvVmoaHdRm7iJWxJ6ZprMEXxGjYJwYJB27cxpvv5SQgYYmk2W7f",
  "key6": "kydma7facHooyScDzJrcvZUxMuEwLC7wonwq4UQv6DBAXxTqSoodiBsdb8JLTASpdPmY26H335JN93P8b3Esf3n",
  "key7": "5CMPecD3d7P7YbKrB7QMxARxv9uoXLLWBx7nrZdWNzyRmPcYVMzETQh4aTTy8RvB83V5aE7pk6QBZBt4NbXXWaqh",
  "key8": "5Fxq6rH4689qYvWZYfG8SyVruhv4do2Yep3qaYjpBhZqdkjAq2EUkDy1F3yjHebrZFg6N2kk9GMUzoB1rjbWVgoG",
  "key9": "4tNSzNHAcPt5UMhXRnn3TUgAWtsmcf2FNr4uLi5xxBDbuqNU8iNbZx4VUa4xPDQ6V8iaLtd3K5fKMYjpgfNoWbmQ",
  "key10": "5SgKzJYetr73nEmt2w7EEtTe3rsfNLktmx2HrV5BSn27nNufRwLrYUs2D1GSNQCg7UjWE8EGPsNjGzTd2aPzTB74",
  "key11": "296AFDcDBfj5EGtT78bqgR8Kq8ugHrG6d8ExCDrzcijZkr51U4mhFGc2igztuWVvHzuC8ndYE5yu6YHqU2B7tvQX",
  "key12": "2Dhpffus2PrCXzYjH17UStD174ZvPSP2fJEwrX6QDzDtNdhGVYCD1RA14dHkdrydxyU6MYaq5Tfe88aNQsxbzBSG",
  "key13": "gNWwQ4NEK2B9gENCdWn98zaHdsG6TNTU4xohR53kn9w1H44L5o4eYtTJpSvLz6EkofxuebA6cJoyNdoEk9hPGeo",
  "key14": "4VAnwzHyxr7bmmbpvStoiupfcv5yJAYSXPuzy3m9eWRWDpBe3AxU8mBh7BHwoKdGmQiu3WVhnJYEoiDjNjg3tDYD",
  "key15": "3c6AzBY2fdbLgD6auEadBiVfmz5kkH9HuPYyJW6JBdohR1A8vKRcwusDqMxNys7FgVmLwBUdhQM5BWKtiva5daho",
  "key16": "3oo8FiMnUq219ZP68Jp2tvF9464Kd66RyncXVaw6h8Dd9RgGQ6QNML3NCHn3gNrPCChYPjprb39Qg4E4HwyogkkY",
  "key17": "9t3xS36pB98QEoK8uzQJRAbzcXnbWLbBwcEZFXuv2XEJ8Gifq4ugNRayxuaasaGJvcoi2YQrNyvLuUTebwYX9TA",
  "key18": "4aFZb2sHNrmQDpZbLyC19vsM6RudwxqAEAEzkK18p3zqgAHq2D7CUzUJkSy9eg5Bb47sQM13DMsjZrU7pLboRhEu",
  "key19": "3rf7GE9WEEHTHN1xn2VTbA4gPPNcwAwm4LqLoEpt9fkCtbk7R8zm6k8kUsu3aYvhxnumJ6JL721s8LDp1czgyxrw",
  "key20": "2wu4hnY5MP1Cp8PyHiASnhYJm33cdE9pWoEbXvFJ7S7UQ2e4n5xQqcv37FRh5DeTSSRSdid4BFXRNWpC1aBWuFi7",
  "key21": "4kmRu5Fq9eGRPck2kFpKT1xssxPMK5wWbHPWHeg2fwk2o2ZjgHKcxQUqgiPHS5wJphcw9cBT1bg2PDCTRY9o58Lh",
  "key22": "3pSwvHpQEZa5K6jiiYC8EcVV8r4muNKeFPPJgWZCuYhAkToxguR9e3wetWiYGtBHugDf5ZeaX2M1KP93mr3zeytK",
  "key23": "2d33qNJoKpctuGoXV1NvNzMemSnb448Be7KPUDm3ThuuJNfSCunQfeTMTmiEy22iJpm5U7H9mromA259oARg8MMY",
  "key24": "4NM6zvoauXG3tPQccWwKYznBhVERJWbcjLgG5HaYocYbKKmfKitBfb3xFhVxwZpMrZLSS6M5BdNAs1weyJoHDzYL",
  "key25": "3CESvkLw15t44K7xV9wFq2WGZ2dDsbWem273AAkCqNPQk7PdTdZwCcMxmQAAXjHn5GmJTzk1jLZcPDptLtYZJGki",
  "key26": "4w3ct8sy6nqzWm27wP6w7Htvug8XhDKVVsBuRhUmRooyh4MKfEopsyia8nWrjPixZYBh3CJpJ3SWkRSZDNktjEsy",
  "key27": "22dYuM4urQJKYyMxzFkoqoZCrKCms5X4C4Tt2ZVkEqEcxMfWEtH79kUj5UbZCQsxquUyd2cc1GvJENqfReEZs8be",
  "key28": "46tJhhmeRPrWjDQ2sjcdvhAvWm97BNTftQN9Q7ixUX1g3wXtiLPhYEGqXKCQx51C7tDoDS5LHoVuo7HK1aDEiGSz",
  "key29": "ddiXgJkh153rKNcXd8TvxA9TRg45Qu2t3j5SL3vgXw6B6xSyqd5jPQerSa2zo563ppbReuVvMFmgxvkjfRgGpJS",
  "key30": "5qnpx74TV7jKpsz2RC1U74VifQAN7TpieZ7WtXhZSEjYFjDA7jQoMNyEsWHuVcmBK8AgAKjD48knzGSKy7SC5rU",
  "key31": "3XnnuWV99AzxemRNMx61pEofM94yfVS2kAVnSwWLaBzS5CwkaBQraCcHCDqWYFSQmAB47QypjSoHKYpwsWq8BHk7",
  "key32": "4HZfp5z7n5B1kMKDQ5cYVQgVKYLK2qqKbxDTMaEqUDSZZvbCsDC8jtpnzUAyL1GhN3ncFzhhaEbmcvo6BzACYNGc"
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
