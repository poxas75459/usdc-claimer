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
    "5uxcgJz2j4EqfPpJeFsuqpf22Sus6ExkVchZFzR65vHoJA5tz3zQPbSakS1oPmQD19h3bjovLo6Y4XReqoEBn2Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qo2NN4d5uZuFD5tbAqzE63vDh17WxE8Aihkovre5eDwn3USVyzquX1BBnayCX48huMTxvMEu3eoMVZMkkQ47NXW",
  "key1": "388ndLid8GPHNaVJjAjwdCByG33z9xdujUvJBipcXundVxubFQXPU2ewUDrdffxRTK8LKzeFRd2QqRY8GGqGVH9o",
  "key2": "3Ek7UKkizRaST9adpVhTxhLGik1vYdiQ3vB8AmHQyutpi3RK7Kgm5CafCcjyGxQJahqvx41HpgtontvRR4nn3zJy",
  "key3": "5n7EhE1hFkQD7AdJGpjQnaduvfnWByB1ho3Edu8qQdFJ4Mhwh1r4cTrWEEdJT4qYy6NuPHq3ubrzJkkM4gyVmeE6",
  "key4": "2EDG8Z5Eu41QRvFcv2LrWCLhwAr9pCde3w9CgXYFKQN6zwvCG7VTz7py1tFwCfwkvExEbzgf8CrfHaCSRBemuHa8",
  "key5": "MkpaVZYAkgwvQihuek4hmEN4tgzLXABBsZREdHhwuebDfoeS59TRCrxjGFdgEx3DEcCtiok36891dMnTQxTVi7Z",
  "key6": "3Tz19v4wAfFo5Py23s3GQhNpWT1CHggjdeWhLAWL5houM1ntCN97bbiPJxGvaLBpxeetudf9WnW8a7x9H4rUK75u",
  "key7": "5DrcLcjLEusc7hKUvGgjgqHe4fqriX6daMPe8ASeATtSakK5JscNfv7nSH2EqPWjoWmresmqRLz1Qq36XW9c3ikk",
  "key8": "2Zp1pj6h8X2AxUuBodh9wtPkvPaF2Tf4mCtzFFzZtrBwSdCnRSEaWwnc2zpsXmwykDHmog7uebhvQPxXTuLabdFN",
  "key9": "YLPrMa16rNnzVkYRRvGJtUR1kiHWvXeUpHDFiBkNxaQ7AC76qRF9o6BGdvM9nQDdwjkaL3ZqamM1kzEv2L58M4F",
  "key10": "3YAB3qstuXmPZWj3yi49fe6aPsaEpRqx7LKQs9nLmgRVa1XUay3zuy2jC4S8Si5d99MXG6JPjJUF45nTRUecKMfC",
  "key11": "4LRbT1oDAL8m3bjC1f8Lr7Bu3DKs5bj4NhvqC8PQYRkMG9W1M1PvDQ6NwmG6VorpcNpF16i58newwRwLfMWRCRBD",
  "key12": "2wyMkbK2UqSnn7UJwjandLT44jyA7eVjLYVLbXyQ3ASodih2yX3U1QurxFMTMfKukrfXL1fB7n86SfRYeTotaUmV",
  "key13": "6L3oQ3TghxUXXvMsAVBjvZNSLKP3NXvsX1mXGEm4FkcjXxMQdZeh4rGaERTdWZvRcNzHUhASsDeiqzoG2WyNYA7",
  "key14": "VTDqL5uZpoy58iy83o7dGX2zktHNt7yfwJBrqFvPcoN1JbR6znxAEiRJnjvYhMTE6uZwatwJ7sBAZihwufsJSo9",
  "key15": "4chyyU78cZYF2tAB2oRfMY6jzkVfB7oChGYzc5o1doVZPRK9kjMZv9LnoswWTZgvPhR6NPqAhJPWu5pgbRGN7iAb",
  "key16": "4TXcBD9t8e47c6jD6GSXcCShTJoJNy36XVkfkfYRaZDp5mMSATMgXkBT1jWb4Ca6WBTsHwzmzCyTLrwT4eAjxZ3W",
  "key17": "3KRjH7sicydAVAZpn2uteysajjNmP98k8eQLudkFXfLSrS3K27yom4fsQHqKDhP2q6XsUCyyjVtLVMjpQYPNa3Ez",
  "key18": "4n4bpbpy4NiFZdKbFNdy8G5FgQRiG29dHT8teYGquHU9SuJZSqFcjnfur5im6hT6SjYWDqBJfgbFHDgcfBZ22BeR",
  "key19": "4sUJDJkRa2MWhUM85Ec5ijmxM4Ea3HAt8sXC45bspMd1B1L2seMR3wvza21gg7uvLPXTrWUiyydA1iDKVjNkJmqe",
  "key20": "4xFHitzArg5EFdTR6CgWpEqaVeykQTpfu5ouJXF1UFZdUxWxs6LEBWvpha8BLEzzK6hpxaDP3qXHNZTFebZqmqa3",
  "key21": "uJKV121tFFaAFRfWxhw8NbpCTTm4NKxuiRsV6XV3B8Yrhv2xmjQHgjv1FFvzuX8jvE9KvCPFmqx5p8CPqrtvhgP",
  "key22": "4shSrKJeNGB2rXBqo34nC3u8gHM8kSAudprQxMH6iPim96gfjjzNDQSrz43HUr2jrTNm57fZMUZas41DtmuAP4No",
  "key23": "3zXpvvFjyqkLrFPhEjwAeifCkcBLnvGYsjzNAAZQni1irunwTC17tEWrpbDZWNp6T7LdduQhpNLFLZQERar2hLgS",
  "key24": "3T3jPMoxviEXShxMemxxJFBWZ1fd1oSZBXrAPWeiDRQpZCuoAeykeoH233eYLbPxVLT3NA5bTq9qjmckr9soEvme",
  "key25": "5MS6fU9SoVWQz1anm3isjAg3ug8sgWXFoekSgJFScoq5MApw4yaGHPxiDtus7SM2aNhNSsfgg9cjZpw5vbMdpAUc",
  "key26": "4VRqREtfPZs44e5CvtaBYDyzyCsBL6s34CtF7gnrcuSMcDisyvNBToJs6K5d2a7oPQ2mzNqHAQur12zFfiXqSJph",
  "key27": "7BZBofRzT2nwFBQT7LkP4rzfmyLeBSFeL3Khku12GJC19XmKidqNnTeTrNxhrFKVvqUjN5gMWiGRJG2eRZHRYqj",
  "key28": "wuCB7UHJBHwfR9wpDgKuV2yJhzYK38gbgvKmuhB6frm2uq1HL15x9GesxhsF4axUA2ubGkxvmXmz7PYmPzEjik1",
  "key29": "2yc2RqDa2xT5BTVKqDamevGVX2ZtP1FFoeGZBYnX6kgR4gAoKCWkRXcyZY7hAycX3jg6qCvK7ijK2BZW2XMUuSCL",
  "key30": "39ZcwZNHr3SLvBSUciesERGN6XhKPYPkdsxdVmoy8NfCoANy9iXUcCRbzdveLyUUdxRuZWE2VbRr92Feean1495w",
  "key31": "3V6CFHmf8RRFoMEVQi2eoHW5cshyGG96tECNh6hSZg3tooLPZ3v392j1HXKuDKUR5tndW784medtCMfJ6tbUqZeZ",
  "key32": "3BpNFsBxWAUDXtW8XPXtAcemDR9n5FuzQa9W9ssup8LghAXj4rhd7FtrwhgtT2nxhrRLbDWd5cuqB4QuP3HXqBu2",
  "key33": "uQZ3D59Jsa8SsM4MNjbwCGTRnBfEpdk9wTTrcGBaW6SGVmmBJUoe8iBNQ3EdaJJZHtQCmFsUhSBBzK2hSzKgFcT",
  "key34": "MLAQKbwv5VmQeMoT5TA1j8iQcFVdjYW38wjLV95vjudfS6cck2PVmf6w2Wh2L7J7R3T9AczYJaBMQVbrHmCg3SQ"
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
