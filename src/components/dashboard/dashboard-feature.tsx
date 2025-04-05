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
    "2gqkWkuWuzJN7qn8amaAbqs1gHULa2C5MyBeWtHWgSLvV9hehwD8ny5vNdDfHJJ8p4HUiMAhKNAvgYviXohGAXBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JrKV6eBVHY1DgLbywpJE5xrcTyQWiDRkjPCzFz435kjWBohrjtGdSPJAFV1YWx97gKJbWvUrYmaphkdgygiuic",
  "key1": "zniPwkvjGwzv7dMLPv3ZZUdwCASpUrPWtVgZg9L2UqrZZHXFKn5b26f2HNtoz2VhK7fdT5s3vPrqu1peykdvSEy",
  "key2": "3537CVaqQbveQYdS9YgwSWunqPvBq542DRQJB4A8Vq7zB76ZXcoBcodg8ynoEMgEVsf7GbyhdSSr1ZzsaeWtuCHg",
  "key3": "5yBjdqhzFfPADGm1U6MBoLP7ZmB7RCmvXtrDWhqwHKHhTXVsgJVjWtTbgxkKy36tcF57CkwiYtTppiJy3LL1PYqC",
  "key4": "iGK9PHPj55mRddrb8aAM4XX4FPj5PMrd4QqXrhXHmrNZ6vRdMvnei5BSBK9rPbXoWFdgTxqktKf37Drz9bfK6yW",
  "key5": "5TxmRc6mkyYfgr6YriwRRrPnr322tnxJ5jUGaYGGdcWSc9GHwnonmMhfnQ2HqdJR19YCwx6uC6Re81jvnirJ8o8J",
  "key6": "h24Bwqas2SJHDnLchLgozV3Va7UKnVmvQ1ESfoknZbDobJ4YQ2B9wJFZ7Ezq94gTq4EmsBH8J1RDW74nzDZQ2R8",
  "key7": "5uqjLKtySmnfvy4K5r8Ak26xnnfaVfJEXeRebzMkFJBcnumTiJqsPbhjGUsriih9kxjZSfveRcpN3mEHdDCKs6wW",
  "key8": "oDPcNSo6vmspJg2Kp3gpCTHdtidRH5tUCHCMBYpJnZ34L9kjXa2DgdSZgAkdNNuqFRYtYAPcWkRzmWyj92FyQKe",
  "key9": "65rVVcrgjqYQGLtkoNifC1e7e9nfkJuVWqGHRwj7ivndWgauNdSmqoQomRBzmGC6kAYpiYaxcVFJkq7uKDj9Hpj",
  "key10": "5wZYkncX3HSFSU49UDMkxVoqcUcHWjcNjp75QD1uUg983X2MMjdw9HkNBW26GCCQoHXRar36aCiRodJ4mbmY5fbm",
  "key11": "5ZfXPdMatESoe2fFVFrAs4h8SpdGKrb4bRtBcTvukYBVCyrDVnWxX6wTbPAxDgqdMhYvKugQiCEiQy3zFrxEGZ7g",
  "key12": "5GVscE58HvgzhctqKXmXvG3sAW3NB98WyRZERumecmuCCRHo4qm5JUAXFascJKHL3rG9we74PLZy5B9kVacE969s",
  "key13": "5kVjj1Qvm4BWMAJ7HL78ZNukD4dTgeUc7EV8A3gjrJtsdoHxEuKZyqWHCb4Xaokh2psUtfNuNFpXWWnLyCD3UAnK",
  "key14": "4bZxA5Fx42tqa1Hg81UQh8GAjTCmKG3BTr6NxmneXDCpmos5ShJVStu7D985xnex4fezqCHKA95i8Wdk9ZeZ8175",
  "key15": "3cXtneVtjN2RSNmWd97v24XMLnK83XUpfeVp8qnDWzHwiPpmJKDHLighCLiCLaEY3jixLQieuhEdVgnWKhyaLJCx",
  "key16": "659ULDco2Sd3wrMu81zhsy8M2Sr2VA8DXFPXxNDyTmeEmb8HNdpSTbs2JWS2NJkuUAugkttmeifeKrJzyqo99jag",
  "key17": "25AFC5kajndQJrER684EWW6CKN9mBU7t5sS3rTqiM8ug9xh1tstbaphuiq3sY1vTm5ZJvHHuH9dxCvvMaKCuZAyw",
  "key18": "4ivoVdBaDTjNhAgkmhnuwaSRYMr4avfNGToVQJWUzT3K9BDVESVnLNnhKZYLXFkfLgjB9ocdFuFF8tu8JbCeBASZ",
  "key19": "XfpuekqJtkKLMX9Bxd1BbTXeScguLVBK7xswokKtiAxA8P6FEZ84WXWyfxAnAtUCzCTy7Ji9Xd8KQ2BQSmyG1c2",
  "key20": "oTfUYvpx9EtzWoLhrYKeUxoUJNXHeaMnyqieXxJ3mT7Kg84QGoCpcEhZwe8txL3HfGTy5ridafGzmJLixLrXotu",
  "key21": "3kh3VGhYP2URuf7BzQFmVYqgDwuhzJ6X3jdPBbdmqpTPLLSvjgpCSpzD5PWRpm34UxahfwQjvT6xAyHUbvQpyYuJ",
  "key22": "f6cXS4swiUpTxciGMt2qNTJiK3jKiX9LC9ZkoHMCEjQFGg5BtLYGh9SHt7RcMF3y4cJ8YTS3ECeykozFFxhenms",
  "key23": "4sY4WSptNFZSKibHBsPv8JrNgJrAKNQcwVVHwBjgWhztv1yVGXuNfuc2izFs5G79UCKj7oJBQn9yyLwf38wXZGFJ",
  "key24": "s6LMNU2N9mzDksFuwancKczH4z8Yz5221LKTQBuFzQ4AAW37dUQ5AWr3hs9MHxih2rKAU1wgn89vYvg4PYAdct7",
  "key25": "49yZhw2DZr7bw6cnjFtrpJdKoks93bFvp1yLuqdhTWWQTfjLTqiqc1UTb1DLkpqBjHqmds1i4PhLzThS9LqxnrXp",
  "key26": "5YjMo1xPZkf9D81CZE3MpVwTM7N1y1UzzcssEjMrVJNxYrwz8CY72bE46EyxFNPkX3YhrZeL7YkmqfCPRhNtzdzh",
  "key27": "3AERdPCSAUuVXWefNSiNGnwpbdA7gtVopUwnQEQvHZqgPRymKtnyCdGd3jVQQxRsJQrFAubaxHEnYj8KzTss7SfZ",
  "key28": "4uvX9yC91UadgV6hSBCUZCBSwXYb6zFoXTU5ogsTgt8sdNfUbfWnF1kAcFZmFwpo6cGW8RNs6H2sC7181XdCoeLh",
  "key29": "3461mgnijt3wTQkHqDW2JQf6vaFwqBPweFCvamY2d6AoyH1iRp5LSGzA6HaDQmSwkhjfXkpKVwx7r9bCAWLg4CjU",
  "key30": "timWojGSeHSokqdW1VxN9wmCWd5Tq5wD2V8Ki85tC15ZPtd5uTLgFjez9PALGvB33C2Wj5whfKH1jcpNWvJpAs1",
  "key31": "34SjJqJSrSJLinMtqD5RaNNtgE3YkxQCZz9rzx9h5RbJi7rSZeoD5BZ19RJgUZwkZaAANvxJPtPshj2d167bKjGm",
  "key32": "5JFchBNeQCp3c8DEJnBNHExUbGFhc9YgSMVTxtzSD9ZE6hib7ksJsVKXZfLKnFPTmMjSCuCLET9xLLhCCWYdz7HC",
  "key33": "4Nb752u73EgTeqcEhhtvJXkBUXyuJAH4NA1J6HnuNpvVWkecx1geJJFF9oB6roPYX3anHGqy5FQERQpveykFskQv",
  "key34": "knxDN4WWdFH9aB8FEXaYUkZCEHe2XMkjvvQPNkq3TEYEa7chy6MtPQ924JW7aBjBMdNKj87p6cqZ8BQkjubL47a",
  "key35": "2BgEneqsu74dixZSmGoJib7ZunWnpduWTW1MaNCwRkNUQ5neMHv3P9V2akPaxvZiu8WLUZqDJD5Pems8exMKjW9y",
  "key36": "mfQRfViDB88n2dRyDFdHNvPvV59qg1zh2QdDfatiksW1NGpKvfSmXtshu62oyhyz8dKBqyduRCp2wexrrT9eNeS",
  "key37": "zdeH62KJmTmrhgzNDZg9XQGw5gtbGBVNmmtWRzfWUov3w7Snt5A3n1fm99tCe61Ce3n72CuKBM5rAymd5EEj2kf",
  "key38": "3gQATc8uL8fTnRFhMBYexJZhARnonKrz8VBfveyU1CvAvdwpgjGL2qDcumszSdDzGNbRZ9NfmANXpsVNQ3gRWsJj",
  "key39": "YPiWya35mNdhQGBcd4vwsRRmTEM2ywN5mDZruPq35E29sMXoGn72nXJwR8pxVUEqm5ikjaruab9jVKW3MXRXy2g",
  "key40": "CoVo7rWA4mgSCBksPYJej9BB2c5ifvDC4trLLmbLnk6hDuNGNUuqn5vfNviMf12expYSu5AaWE2D7AdTEWFBtah",
  "key41": "5orVe1NYVXfyzR47Pwz5HVWk5bpZdKPqWmM5ispebV6Antv7wyV26eNsUh32MxwkQbXwcTCHv1ZGxqtWC2Ttpjz9",
  "key42": "5d2JvwfbUmWXboxie1DY7FLh3cSzEqkYbMB3LhQNkonavsXoPhoTxYhdvJuiTNxxjce8XnS9pjPdL54Zq2TzZ7fk",
  "key43": "4PRSN3kghFmZQHZR6ifHASqtTmPkZt7sqni8obNdfAV7cBgPsah6VXHMoQ61ePdPyuywcTWt5nAbTzowujWxzDBv",
  "key44": "5VciYRvQCVN9J5SM3KeVA4odbSA4EurLfq5Gohi5TxkwwoEr84MX4ZkXsZ9EVp9KKcombpq8Yjjy6dyMgVLeTfmK",
  "key45": "CJvHr8GvKdScpKiM5T7cetrWodjHbPLYk6QsYoBUGkChEY9FRSNBAHpktz52wmD5Z3brBaeLYumqfdQ7CytJPmT",
  "key46": "4F6k27mjmSCtsokXSdHLFS1hbZFL3PLb9CaB4yeSgUsLKyNUSwbAC9g6r5oEeozHq9B7Fx1mGjCUbJ3BmXJhGUNv",
  "key47": "5fqZRCq4m7LHiESoZHH853h3TN6phryoeRgbSeL8ZjSb5uYd2LF84HUzTJfmA1dfKp5YZpjyD5dtc8UyiXLeBy2E"
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
