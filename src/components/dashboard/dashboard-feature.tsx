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
    "2fnFMuLnXHEmQukN18w1qrxvXxEQdmcVEAqVnEvEbUBc67fArQd5BX8S3SsTtNAhULq7TuZVxkvidN8zZe8RogJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsbuYgRXhgXrWsd3SNri4VcrhYhPDYtnzD1FSBBANCWCgtKusynbFXPmyqMoB1ndj8XKSd6hekxm8ztHmBrePUJ",
  "key1": "5MwunGJPrVTMiGCVgRWzv8QmdAEckLFpXDHYhTvvHz6NKM4ZBb33LzGV4gTxqfxcKAZrZU8xdceJqqtCVugPBnQx",
  "key2": "oVTcG44rmrkc1C28uxUdMinZPj6QiQMCy7wxygEfKNwmAaEVV5wB6isiG9F8EZiFYvWQ35uE1crTYkwZJMKTRuR",
  "key3": "4tupooq9ovhqnzvZq5198qfnNaX5TLQLJmsH97hHVDdCNfjfJH2CqKLoJqVEX9pa3D8oNrPzsMzF8RjC3h2V5KSd",
  "key4": "38zMMZViwb2rMVLp8y7EDgKGd3ViZyRuFwZ5XzjuPA7a5zKGwMzBQzMfFV27GQciRpE6bP6PEsBTkiZLdpctZRi2",
  "key5": "2PecZNT7vtMbmo9w1qFx9k7wZt1Y2QCdxEEfCeLgRiED2x3wteH9JvAFSj6aSYyJ5vNvvDbgzs69xm5RFKE6CXkv",
  "key6": "4HTvFB3tQyCmzb9GiccnR8AeKp5YU67njqUmLHvVQeGeV8JEL8Q2Fruih3yKMwjnGjCUgSBn3XcQQrBnLEDhhDc4",
  "key7": "3xdz3wjgpAhUpAc6CFet9LrdhpJbjHbjGhtQJPPz5ekDdNGobTxkQ2j4QX38McTmAQTFARyM2mUz5K1fZmatz917",
  "key8": "5xRDDrgSPGHCkjpYDJbebrzjpea4tP42oRqUs8MRFit8bTWVQWgWDxA9GrCaoUdwL53HhGZUN18QzDo5tYUu3WEh",
  "key9": "2AKcozsL6bqnBUqL3BjcJNHuguXF5NcMgBwzfKkiET1rX5aUGuUeVZ26jrDzoFNNrHr8bnij7ur2VkkT1YwJAMB1",
  "key10": "6749frzuuEndBnsMpzSP8YHkipns95jfQHhWZCzKYf4GsEYUptiQCZDJFjbwRckWF9TPpcauRrSzc4hriWiz6rpa",
  "key11": "4iB1kTNff7LRpYSkjGRURPHTnFvJUvUTvhBawLuPPtVPxFD76ZABigzcvWr4bVcdLBHMG8Fj6odDVR19zYsSSKGr",
  "key12": "2fKUysB8X3EXvpV1sv3CNxg5cjff5smmDCBZhinjiwke1ktfArXRqWHsPUxt9odEYnuKP7D8MFmRkbCrThmTYX7o",
  "key13": "44aww7KqiGwcjLmrrHH86p91jnooBPWHz8SnMNe2w7hTd2dxJptnvY25JgNLZJrmazPyVmTomYZct3mCWXULbLJm",
  "key14": "neRwgjSv3MvKfErGhBL3pfpNgEg4jYTPGwqX6U99j6a6rsAikxYwmozxkMokA6sdzMEYRNxoneUb5qTb9vdZSp3",
  "key15": "FUZLFQQWKzcL618qm4FXc96ABDV3PKcuxQqj4hu2dDuepW2oybHKWp8WfnZPbLNNX1qGRg9menRPFXhth6E9h6c",
  "key16": "4zutoq5b9VrMgc9swtWQZw43vvUy6QBqVmumZc1jfhEaW2tBZsGTgsjTmVchSTxyCK4egJbaFAksUEzhoRhigvVH",
  "key17": "4gSsAYXG6cRgKg7fq3eiLYurdydnHGhTf5gaQG1FWF55b4jPV5WL4U5ps2ARXLf6kNhMXazvwrg9uBjxSmWim8iK",
  "key18": "xyCtX4AkASpEwyaQaCu74C8LqqxEaqzcmZvCAQFSQwPgT4x49DT8t25uJCVpDbUUcSHPCu16AiNcWe6k94MtPaX",
  "key19": "5AeDHgBeU65qgdFbxWD7SoimqcQXSANNbAg5DSK8XoVRaf15fu5drRSpY6E6WJKLYedca4HXvyLUp4KvhDTruMYf",
  "key20": "5PfsDwGkzaJoPdGcr9MVs4fcddUqvLMeYeWdfw4aqHf6UALPe2LJkoTDhu5Bjn34ekE9v55bZxWtro1EWxNKLHSr",
  "key21": "kTQShLtzw3HoEFxUKhL8L9GLTsLxGUjMoJFcbStPYR1K8CWUN7emqRfm7UfWByW3XxbQUjDVekJRGVup58LQh6F",
  "key22": "2g9jSeRr4SkEQ65R3e5vckJCy7GyUU6NfyxFrsqkVjLUXQh6QKohBtYYbPHuSii5EAhusYyXHYjUTeTCat1vr6Xb",
  "key23": "3b7XcejKjQKo4G7vbesnTwkp5Ajr5a4pXaju8CNwqo7QyNwtZ5DcrvPVvZeVNAY98cy4v2yyf7qxNASUXioq1kQA",
  "key24": "3Z5MihKUEv5PrJr3u4bMxa8aAD2Lu6yGGMESyGYGwsSfWYBcjwmd3NyZXqUcSFp5vrCHjYiDVMNMXQjZVJ2tnwxn",
  "key25": "3Z38h91Mgcoidu3mpFkGqxFHWJ9o7r9UeYYfrSdpXBM54PciQV2Re9e5MCDgN7KcerqEdiE1MU1XE7j657XTbeLN",
  "key26": "2EaC9BSF6x69TW36bUfE9REQunjDoseoomYjqQTstYJ5zJEcKmKc3ksHsNZCFizYfDzDCnGc1uJ3siV4ENX9GMK1",
  "key27": "4v9Sbi5jtFCH9ZecofbQhhkvD3ePv9A5qZ9QZ5wWrdUKFYSCpEshrMq6HJQQtqAk7xMzvmp6GzapJWXP1hpiy8wB",
  "key28": "2FcqhSxkALAKEsmx4Da8MoHXbbvc1hoRvDXQSdRopTyFd3XPDhg6k5TzgWt6RMg1wJ1aMpN6sAoaVi8kfA3z25BK",
  "key29": "2KERMxWEVimpS9ZbmzVYzCDBbshSFKG6HRv9V31xQR6zVkA4Ha3vpPLMzzNZzRCQmqugwtTN8xUZR6UnLKVnLsGM",
  "key30": "2tN2FroXKp9WRGvRcr9Pr1Vy1eQMY4KgRqEQuxcASk8Nu87WKQvvKqyGsmp1NjBQBN2AwSYkjbegBVY3G6wQmurH",
  "key31": "3wrhBR2S7DiNFKS3hK7Yu1jMYJTBPxwE1z4nkYfXG2mqo2eGZbuQ34kfWUaFUvrTDLyewbDyaAJiaGf4e1hzStVW",
  "key32": "g8ubd5KN3sncnsXTtdSuLrqTGUUXjptDZQSpxFfyuR6e2VGXUpY3KW5444tRHvrcDW69cuUSbidwhZUdkPcJTk3",
  "key33": "3KgPhv2apf7ciygwMN6sbKhyXWmEvdzGxGTuj57tYozxVjrgAEV3SE2SWCBL7Ygp1N6vYtaqvjriUkwi7iaXbYUc",
  "key34": "2vkznYYvtf8jgvCjcVRzS85aFYRhzDX4xTDKy6wKdfL2WFr3pDeRNsfL2AqVDNwTaEZnvVhLuk5hFkquGdnkZmjg",
  "key35": "5P7SasisjUPRNKSTi9s1ncyRtFhZDN1iy8im211qhN6ynWViLRsGuBdkb8EWaTwoF5x6oryudQ4uVR4NZpHzfEAM"
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
