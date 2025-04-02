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
    "uBDLmqisUjQgdmUqiGrNFmidm4Z8uS9DrxiUx2xu1qP5NXTyXhCTJ9MTzdZvoEB6zucTyxYRHvsTv3r2njj5CVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbQkQ2pbmgbHTXXAGMgKUPhemRuW5dcHY7E7Giu3TUXiARGpMYjChq1kTwss4AGTBNprrk4n1qsuHf2Dkhd4YTk",
  "key1": "2LF7DYEcS27ndvvy4duV4p22PGk28TPM9WrMBD2WSoLNpQLRn4rza5vkCQpr7WitvnXZKWg39hf82mNq5H3ovsFS",
  "key2": "24dv1eH4UnibchfSD7frCem383zA9cgbRoehVQs2Y25zL1d98bw1GepzacPRkSbeQmNk9PrPHja4AMjCoT1Yexjo",
  "key3": "Wt6CEhq3RgXWJLcve5Si4Utq8xgQpxzdhoBij86NAEPeZuEg41M2io2yn57uvEsntepejYTrN9bkec5XfR4S3fa",
  "key4": "2VqejHBFmxKRCb2HCj7rJM3GsbCnnkAJmC7vCBZgE6hpyEpMMdeq5Pfnu9YxveGqHBB3PdrayojqxNRBpjfNQJWZ",
  "key5": "5oSPWZR56ezawvcmyycvtf91s4LAvE8RJ7N4YX7VgkGbgYkd7RqoMhmtokzdvRGsx9fUiStQkD2scjhVUXcwiSbC",
  "key6": "2CuBP3R15q24iCc5qLnta1c5mYoN23djLpdXNVG4JRa1KfL8uzgBuZZwsK8Czf9ZPXq7bmDAL8aJZbYckXoPEode",
  "key7": "3uMABhFe6k5EzjX311iHRjPAWmTN7ddhwj2XkicmK26QHcDrVGwVdqvtjidTgXDmPWinnvZnbJ2Mcg6Du9CwzuU8",
  "key8": "2tJ1CjNpEcJdVLesKARNKasWFYibPyhoosDV1BjUGvBUSFBiLRjforRbTCidumFXA4dqa4xqSWe2t8CbKju5q1Xe",
  "key9": "5RMUNrtxsZf2U1AJuBMStbqgPv54dRQazVSa5CiaDjtAdiMxnNizD5vWirXjao8J5dHfsrqTQ7fSw6QWDAF7Z59v",
  "key10": "122m3MgSxop9p6hGD59c6zaUjFhLJQpXNH2WhoRLvp98X2oT9ZJfitAYtm3fmBR7Bm2hH4Zak38VCcqniycU6ZvH",
  "key11": "4V5teRqD8BMKEXjfX5V8czyot5XPyZGU8zvWN11wW1CQm35PmRt8hA7ngUC3KaBguHS5bEgmxvh7jV1hWm61eL9x",
  "key12": "5y4TitFZiEpDNjv63aMT3zoGGYGQ1WLvtUQB7PCUvo3aCvEtzCTX8v7Jv4pR5xUGKCpY77eGKHV3nwAyPqoWCJer",
  "key13": "3TrDY8omNJfcLWJUBVaa1PD6ygSB2Qkogo3w1sP8moQuoWGnuLqSGMKYibgg48gnn4z2BHok5WadxvJeJNdFY8m8",
  "key14": "4hChcDKDmpn9GPvV7T5cyvwKPVJkM6m3dqoqibeeEuDAty2Fkj9u4hHUamsipeM9r9ahAxXTsT3UuEhGEnArxwU4",
  "key15": "5jNZSVJcbdRTsKfyg3DQ39HheQ8zZCj6LZXWnRBqY2GwaUvq1pZp6uiwRocxLUUcEKvVWqZKsqfkp9uKBdVA4MPy",
  "key16": "2cfur7T1V6cQEpk7qdTUBSWGRMCcdQTC5hHjqwf5jXcXq7e1JQUXdLijutVhZ1XiJBo8he7kbFEyqwDVFY3YHApb",
  "key17": "2KXE3xAxYufsqoZmyKQygyaSNvdEDocqHF8Ua7N49YVqadnRk3WGHFDW2fmqD5CW2SQ2GHEAqqe7KaS1Z9Mp8NW4",
  "key18": "4wmbTuvK2gXngV9ibLVqiq4AFcwDjJz3ipMUKckNp8qB6bGmLGhiRX1ktdCfE1TkzBFFe9UuYAXXGnbSZhe3VLnA",
  "key19": "3UwSF7hSX7CJxCmVdfLnWxvchhSkjRpzyLn1noniNaBSCrnL2ZRRmFHJv2D1zooGV2GF6yhooRLFe1UZhG6mtNDP",
  "key20": "4qsMPHoaYoWCCBYM9FpyYYwNm5ytfx9wHsfmEp96dLGxaS53vefijLhmwfUwetFJsoghzQJBVNKj3wCgDQFDZGSu",
  "key21": "2mGe81wsYAJVcWjiFZa6A5Ek1kXNLvRnrNv3zbdTxofPjfBNkmeHFUZDnS3gQ2cUoSoa6CWGHryFwaixQ4m1cyRr",
  "key22": "2qJSDAeedNMkzsH1Dj2QDiSuuDkKKMEgyGMs2dFU9PyD9zSpNqGEn6QWScX3R6igYtYBMoTbJUZBmwDZwKg9xwzL",
  "key23": "2pUjqke7geYakXxmF3RTgn26yXJq2BrNULarBtVf825pMbCwL52p2egcf4CGLAtmcjWqvYpvdaBCpbptjD3NxU8M",
  "key24": "4Cc2HMzLArdFF5g7k5PwJCfsyYAxBJ2si8GByGwXsUv9PyCWgM2sppWGBScJb9yPMQPRzx1Auu69umQ8XWks1bvs",
  "key25": "4tkj8G2YAg2ZYjWGoj3oZYjXffV1WkfYd1C1mCUAWqpKbM8AGDN7mahp3LBTQtyWSW7pUDXJcoyandHHmbAkvXz",
  "key26": "2tkjXsGXePnohbaooGYKBQr2TLBe2nrNgaqKTxqpj5XZ3WGhDvpSVKHhmYz84zq5cK7Z2Y69gAaNuxQtSoasRGQ1",
  "key27": "46W7H4354UVmD3UM5dQWrWixKUDW4QoaYFKwreBTceyjdyTosauJYLMS5w5X4SZpuwUbFmxpAHjkye4wroQyoMms",
  "key28": "4Z617sapdp2emFPsUWhGq5YDwKKVDKuBFYCAZbgZLTjpGVNQQfsQF8RE3q9exdkyGttAusoM2ZKv6Jq5KFYaMQBn",
  "key29": "2bYXnKeCvpxRHvDEF6YesBTwfvXmMoNHn3skdNVCf4DnJyN44vhBqicBPboZTbQ5LaaUoAXiZFmhBqzx97pKW3rq",
  "key30": "3yKqyH5MdK87kTYrKUk4DbvXHeXSXkLmGryTHW8AfL4LsjQThBC4gURDTHBuNMJK1csQ7y3ykySSnPgeD4jHrhS3",
  "key31": "5W9zmNnUETeGQDoUZZXZLPvErNB9EXCdpbRFqc9pezxeqMe2QXvkq4VLEgV3trq38J1axh2XQ8RZZ69hS8RmKmJ",
  "key32": "V1Q1JhtJtfVQjdmBrxFishNAjh1eSYReTGhDMiWfhJwnZmvoU9pyBw6UQvndoVv2oDQk3ukUgQJT3Tntt12CvwR",
  "key33": "2TJAQU71LVNZKanEdxoHZVDCSk1QkjAhQok1HMfeNkcksy4y1JUe9unWKmFJYsSTaHmiu5p1VHCEJeButFgEhyrk",
  "key34": "4auYdb8Uy4Yy24JYVoRHzWTeLxMSWeMx1tT38pCQys7mNwLm2gTaJULvPaxypk9461Jdmr7ZHbodcAXMzhvNNq4T",
  "key35": "4f73rrFkGzQBU2gZuM5wW2yk9Roktmi7ThyHD28Qpi4yK8Nj2Gw51DjLvdBgRcUHJUgVVddcDrh8bwG5jr9gjKjY",
  "key36": "jEs7rXHEBwFAYXYeuc6hwJq9KBVTYY98QqSqvjyTS2Gpq7fiayP5wAJPcUaWYReRqLYsXf8kuVZ6E8bfrbRdiaK",
  "key37": "2nTTCWvzrASmJiE6k3J8tj8B4UPgqVB8y2Y5GxbhDFpYhhp6hpBecLPxR3YARcvZy4XMxd6ymnhEEvhPMMLWJWK3",
  "key38": "2UpdDssVxKAafwSmRDb7oCDjYM1jjwSVxhUzkkPEfS3xi74JDwKT57KCt4qViLHvE3sas8FezLn9MzCyFqzM4HUC",
  "key39": "2Ars5vuWHePtUm45cyyHgnbEpWNQUxYqJ9mXnbC6G9Wc876zqLyRQtmpFXrutq3zWDQ1EaLTChgABe3esHhTrXiA",
  "key40": "5mGX372vgPAMceRBK3svWMVfrGj11fPKT74AEiRVA1kCKXoJ6bTRQ2DTWhJLFPvR6Ew2EZpxJ2kUvuRDCCtwG2ts",
  "key41": "2v6kmorctYiRBrJsReaweuamQZqgDK1vT86RMGL8fNL632ttp4y2MJdPSMh3mjtuueeJZNStj4q9kQSR3QVFps87"
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
