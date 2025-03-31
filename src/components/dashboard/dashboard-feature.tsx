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
    "67aoG4G4zBSdULf4qTXxd5tFCmqwqK69j3j4H7sa8eY3rYGJeGdN7EfEC2TsBKr8enT7tGpbPqCMV2iAMMneQN9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oorWCjeyxVc2r98Z8c7bGfPJjskpMmJZFT2aW4QFfkVF3jGTZvP9mM95Zbhv3ETKio1DphYMQT1WhZyE2D3Vei7",
  "key1": "3461XjEh8udVWArWFxogwWPygpugWHjrGEKueb5yfr7rfkVxFq9yMJGRDVPT9AEQjKXMtmaTYKBArPYodsSoCxQN",
  "key2": "4hZ5GamgVsnnen6sem4HBc4D9NsjCxEWeXdeCr76Ub6EsdkALKg1YJTeVhsgPKWm4We4GqD5i3YX69i5nh62EUrQ",
  "key3": "wBrEC75NUJwA4aUnBCXprm5cCXAKoinX6DqMrRXrDEeFX6qXySRzQRehcyLM2dbFWKtM2f5tX2jSxMhpdUrjGeL",
  "key4": "2JG69npwKywFuEAiXBigWTCNwaWmEZCVN77YJ3PYUGxFm4BkTQp5UZpZ8VzidLsZXuJKiy9SmWQKAydwFc54LCEP",
  "key5": "2zH6pEhAf69zfqDb6fAoyuubFbTXWPni68d77xs38dpm284X8MU31E3dAjopYEnTu5EZuRFPBifoY6daNs9DvmJW",
  "key6": "T3vza4iEPR9XcHjw3WyotjjrX9qAS8Sj9Qj8Ji1zeZDbBR6sXfBtk1oNdQkvWfZecFCck981XPpAYCMaEHQ25xW",
  "key7": "5Q4NaEACczuz8RrdVov2dr4EJNg23EYFoGxoqkWR7GeNhM9tJM3YXmRRe6XhjbRaqqKKQVMumeF6bc3ZyrLpdNND",
  "key8": "4JWBcoRNnjUYLqqReVDrFAoV8Jm1tq2Wb9cRh61P7v1h62KpXikv3u1Qyep1nxv9A9dNzH5TDBgoo7yVKBTYLnyy",
  "key9": "54unaFrrgwmrJSX9t9Lqf9hCsv7Q9eVpNJuEnyMPhV6UcagTCGWxBbForqJk5Jm2m417rACeYNWAfqiw21qJtXNG",
  "key10": "56tYMkZp2MjUtS3GXYP6Gho5v6eDG2GkJQVSbkSVfTNvKPgWdUHWHcvVSPkA4MkpusRLTtvch5ckDvz61wX3kM6Y",
  "key11": "2QT1aM8wQkUFxwdRQ6ERbuQ4ZrpvN1jkqPExJV4rtxNRc14goBUEcCAYSb3uNZsbDtFhdw7kxCdTwUtZaY3Gk5TV",
  "key12": "S8CL9iggKWTb2FLftV7GYD9jDaAzK1FnyuqsA1DsGTqRkUKQbwjFNSHjugnNjc61y8iMLn61wodDzLk4opkAdWY",
  "key13": "35JNaZLmgqXbh9DTUmC77qUJnym4dwQeGHGEuBkU8EtFFXApx5dZwkvmhxMP61HtkYPwcyxacHNMiot2aU2SQuhb",
  "key14": "2rC3dWvdcRwjyp3L3gJWJTkNkdYjCw72Zbzwtm7rjRbCWLiTnWD6X3Zw7oovf1cx9AtMhVtQYyojQD5GqVu9RBUg",
  "key15": "4ncqDGe1fNFpBDQfvtAD1JJgY1pdZrKXFVuWN7prczLeNAFrdZfBHpCPN4p13VJXgPXg816fYm1eZpFnaCxJN2DM",
  "key16": "4LrYEuoiiRb6vJVwvYzPt7y85hNa3bNH6GcJf9KAUfKrJkdVscVuBU7jipk7XRpxukzX5BwczDLtrpjTTp8RYQjK",
  "key17": "3A7rF7NLpzC1Pd7giNV88QjiJy5dtSpgoNq9kz17xwM5B14vTupi8bDZFwMrkbrHRnXaTyUoX9ZPRYiaQrDmCVPb",
  "key18": "Ym4ermFaBvmFoFrCocVUsCrVizTx642yznHWBx1LGjHw5E1Qt4X51dbxp1pa1EBzuoj7dyLRhZ9mrLW3HH3s1m5",
  "key19": "5deJJgdtc8kdroYpJuzy6o9itHswcD7e4bPA1sy9ZcMzBrJ1QagWdC7vQoBVFRY1K9L7ynMizr4D3v4VD6icobeB",
  "key20": "4pv4zb2CUMFXMeUHrry9JGHSavb9rsAH8UXqbnKBkjSVNod1JG1hg6K45sGwXVx8LxfTp4iX1qLemL8YyKRHfKXQ",
  "key21": "v1o2KaMtH7enrFUU6mEPUTDk448pmSSXVLw132b2L6qoo6WFfSqa8GC7TKP6yzWccPWGXypwhTuWU1bqfRKvPas",
  "key22": "zYYoz9GXX6itVbmN3iCyUQJgcQBR4gfKSybRDJtMxVgcgSdAVkmDXtdd5hk8xbw4eqVSJpvsyZKSKKSbFiswKhY",
  "key23": "zKfpisG5wbMhXg1LmV1Lzv9ejYSEgY9NwvurNFBeAvAhdMmWbevKeW7dLtouaY8wKYh7sYhENp1vsKwNe6GcN9n",
  "key24": "3MDVaEeTZTysuEy64mj2nYThNf4ynt5EdHxiDwKjsQovqt3V2coWJAPQV6fB5guV8Dgu6zutyUDHio9GSv5YLq33",
  "key25": "2tUicLoM7TeeJkNfFm1fT9W1nyFPFGZyVJ1CM5Ja12Cc8tDkugYBSH9XZiWStZPDuGjfucy2qoxWyCfZmX455aJN",
  "key26": "3YpqQWgZivQ1NND4q8C8ZmvoD5iQ1CmGXCA6dEiicosicpik5izraqhbhngZEw2Bo2hrwnEifAt32R7CHuyZw3WF",
  "key27": "5QbXqag2uobcrYNaRvjpsBvjDqDnfroMYwEVLUbvydkods5FKC6yhZGmiFDp5sg6uhDXShB2L1N6WqUEdrPKgEi4",
  "key28": "2Q5CTjbHyRDRKAM9cLejtynrkXX4dT8RmFVdcctBKriV7xMSYkjiHNuH8PEHjsTqTqX5RvGyZJksDqVEgXXgNPmB",
  "key29": "r2VGKz7MLScN8fr2uVqneJrWMF4y6kKYoCRNUGkYfAFVT5QEmwZKL9WZpGYteESxTdFNrTBW7XFhe2ZNXrzfAKU",
  "key30": "5dman6CwML4ZSr5owYH3yvkpWaZcSApZYxzAecYos3kTrRKu7zy9Ee9prE7SoaBdGZR52ZowDgQV8Lp139R8spuz",
  "key31": "5E1VUpc8E1ZXbLqbCjzQjofQ1Dre3pbEaeQWz1DEScK3G9PR5ffpCFfnhBUiQmLVLG2YUhxA1dNo81SrQz4JRsuF",
  "key32": "2nxTxpT5HkTot6pjD5goJrzJmX7jsRTQmxZJmznqnumFHVjPRHD47soKoJ74HzsXUKABbF9Mc5f7GR6cZSYodXmc",
  "key33": "3Fk5cz25KEAR4wRBtVYJihFso8Xaa2mzitWafUc4utB85wQDhc6HAfExS947x3zRCSg7QhHtGg51mFnTGaCQqpkC",
  "key34": "4WUuQiZCJS7qz1fpGzhWM1Xcsmx6HhUWmoBXvyDukmCD8cyZcheKnbYeREQibvTbppSGM4KxpLJM2w6k7t9opCgr",
  "key35": "3eEfbzmHE31k6xpKkPgV6Gya8QVJsmEvE9rf5Zco37Nkf54hwFfi3xAQxB8X81Bbi8yVTJx6Y1EKWwLq47gY9PYj",
  "key36": "23MYRC8tteSuBMPSx6hxXtGGKFP2TETdaFHtbTZwNJHSN1fvqa7XTyukMrcaKUDctmLsB1Wy9Lqv1LJzpGFc9438",
  "key37": "3PRm7XWtt5WBzZwkRZAzt4WcRoPh7pvLikWe92CYyiEBnkEuHiDa4a7TLmWQgK3fg6JkJmp7gVSz8GMMosfYCsMw",
  "key38": "4x9qFnasjR6pgJNH6vGLisUg3uni8CyJeS8eNCMU2Bga1CkUAc4hD8QhrhthjvsexmTZRvmwt61166Ci2MpnbW8C",
  "key39": "Qpd7nLvhtkzmTQRajoKeLRKJHb8oUcW4sySkRSmVpx1JiA4bXYtK15iRpPTvkSdfLKifPf1jRJcuhf8zwtTQKgn"
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
