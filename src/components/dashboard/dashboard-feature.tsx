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
    "2s863yrmE3DRqrf2WsWiQ8zQTJWUjVj7eQcvtEWZenTEMq9fCHwwn4ZKyunfAU6pTbmLmA33zRvF6jxQ17b7vDFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJDSZ3oy93k65pfmdivgZejms7Ts9qfKe6YgBMyZ5FPpLkTNtVZzdsCSPxffSVNFeZ3taDdgvPj3e4LhMbhJrPv",
  "key1": "5Ut5gpMhW1VYnMwbKRAhvP3rUc3yET5ip7phk34AHvq33UpWvymQFJWWpGJAv47J5nr1PyAE8KWyxyqzMPNU1KzG",
  "key2": "2ANx5tHx8aopcYxUHt4aKEPYxZYGaYwgNQkkm7DmYnikE1ePVDGrvsvG3U4zWNV1VVJXsgYTgtmWukVdcWJtsfeY",
  "key3": "32Sp1MNr88kj9u2cziep3SybwwynYMWWhQjoESQB95AspwbB4caRyB8YdsEruPMaqawWikjkv1C8WsGyaJ1s4BNW",
  "key4": "4nDXBL1BfvY5YG5MkYPWbZGTVRVA1w18fFjNBB6VUgrUXyPSVsd7AHN516ZwknGJBdG5AZaSQ9QLhyda2yvgpTMy",
  "key5": "5hDJv1BLuchQR7p2MgJ1wWU4Sgqrh28eJ1eQVPdWuvvWKySWYhNK77gcjZiEhUo5qGnK5sEE2tk8sYmZHFfHn9bu",
  "key6": "Lo41XqqJbVnaYW9vDHHFEUDWVTUKhwSTP5Zd2mso8WUoVdhQ7MiCCm2qx6hqrpRf2w17HvWEQY8KdoBBLkS8eXG",
  "key7": "4v7NPFaTerpmCdkNZrN7igBiG2teDZTApnB54ogwg2NZ66K4G5uE67nPDtoFuTzUNiVVZcxFUqbpAWd4p5d3RcJt",
  "key8": "4hg4TGZgiVQosADemPaiTUP33fmvQsW8oc8s2TkVBiNSFHkjBgkXfi2brmKZwjNc6dL5wRAJ4gVd4NfGzb1xJrJY",
  "key9": "2u5vu8TJJmfkfqmeL3zQN6EVrdMGT7SvEFHZXh3cU3cZWYQbL7tdSKwjw3KrMiWXHT3ddmTX7oJQxUfT9TEK9gQe",
  "key10": "4FnQmNQvUQVU4FkvboiEnhpweNXtzeyGSpgGiJXiQTQJhQstVPpuNFZtX7ap9PSfu68HqXN7Q2QJwW5eSKVFkxQU",
  "key11": "2MNNu5vbkAbruZVsJtM8B71KDsx4GfmwALJr7nhqZSBmXFmtRo4WegWku6xe6TJ1VmqYWuAzce2vkqSqWoYRnkRM",
  "key12": "5HUzthEAJFAMUnG7qgH23QHYnmQjNVU4XRSAjYtQE4txBtXkZGmWj1r5pNYC4THpun1UwbFzXK62XZawAzpdvXDU",
  "key13": "5LvzkpNGZeXMsjyx3iCNN4fQqurdPEVycfyeVC9EpSWYGDecJx717HGbGHPTPLGU2YTo2Nq26gy9pv4bQZVV2xgZ",
  "key14": "2CBRoT9QYtvZHXFsVNSTmgkpqLFMZEA3tKUWJRyoRtwZXk6iZcbhAixs2X3bhN1zLtckwBHn9eJdtVDHVKrB7WTH",
  "key15": "3pGRMeSUP8STDeYNZbyDE3wcbus5h8kjWX3VogaGCuSjRfmA5bdS4584hFxGP7HKD5UiqQLTRxZXZKXFWpXZJMJu",
  "key16": "2oLhgbScG6612piWysVv2EWs7xSzAcXbBvb6FkQ1ZDgzSvWRFv3A365kwMt78irZ4bhkDu7vCfaN4Nj9BeVpHzUP",
  "key17": "3JnBEF5vUBbcsUSqhHw9qVRPwviR8doWtboV5sqvBbkXGoxcXv7RzCrvfb2iLr74oierDFaYvhGHL6UQSwfsm6xn",
  "key18": "2mTRb9oxbDZim3KwogG8DzyTTTimYMUGkozFLLqw9EH9t17mNjuHky1C4CdzshmpVdZmqWodubgyhdJwurTtuk8A",
  "key19": "5HtQrfCDAvJxuLzhseDdxitkVUP9ZXoAy2SZpwRG2Y2s1EeTQsKP5U1EGTYKNEu78HCgEPXgXaMDKA3j3VnC6d9u",
  "key20": "37HW1GN4HDpY49W4B2oUba2d5u7tp5erHshc355PSgvpedUDdSwHPrCWLSmBzAEo7p4vJqvAdt16Ftd6ycytosA5",
  "key21": "8RnXbahb6jQ7azLhdGPB1jVczWRsV8KouSS25cGzBD5zgEPYLHDR15B8Ru31ptFUHea1CvvdUMffiQhfWtr8RKP",
  "key22": "5JSWTLVUisdn6GgG4iv7Jn1GttoBswCN2ShcynJk3FqauXWibcr539byUG6m1Up47nKspdrhN87AbzBmSLdij6Wt",
  "key23": "5SNK8CAXchoKqRG3RQBix2HLqwRCt7GzeZfowfQjqHeGS6Y1tjKKVpaL93S5CmighRXP77dCqC7TBJ2xZ5Y4eUo9",
  "key24": "2Mfb63stc3NGmxMQ6Vu7Dxv9TE5jn2c2LzqRZ7oyPmT4KquPqN29YpbFK2VWo1dsSDQqK9izszqL9bYyH346SSgv",
  "key25": "D2kJqjXZs1u6Hvmm4r1UQyiQ2usNBzNXfy9fgkGqJ9DPa15xy6WZByLdjEuoVAZ58wGrZd7uXiPKqpaaAb9BBsv"
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
