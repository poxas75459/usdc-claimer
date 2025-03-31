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
    "oigw6VwcVSc6sikxyHWKsCaQ1cE1C2JC3NpKhEme3D4oWVgcfnVu4oQzjsPaVnvegjBop98NTJw4Df85sS2fBAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JbwRHo3aqRUhgeJ9Fy77stc9ZcQExp7PWvyxQQ3XTAjdxnbYn3JXvyoMTppk3fJ7yyf57dXjTZBA63uFp9saAs8",
  "key1": "2PeUBPQCSQTJCi97EkePTSQ9GUuH58V1K46YTcxxePTwXh3d9pFqGH8tdnCKhFwSKE9vzfhyS8wKKjGmQoQdcC44",
  "key2": "57FtiKSCC31KRTwK25EHqHiDaxjgWaqKenCa5aKBEFukE959M7txGuNcRV1H84Q9KxWD9zuUKDtJcG87fjoY5xkd",
  "key3": "4Qxmx5x63tGRQJAizhL7uJLku1r73U2gZabC9kMs8hDitSEKijrFfs1A6AgYkZbR8vuRTGxgdCsW6sFM8F5PRmVx",
  "key4": "4VF7Hfc56Cxx3hLRefgunGnnBMhYFveCd8Zo2eNnxPDLoyxiQBR6T4ZQCQgRbuV3wmFcrX6hCYfJZDCRT3ytJRXo",
  "key5": "2uK6oHgNFbaQhizer7TtoHyvfWQHwQ2dV1WGeL8RVkRG5KPkhDz7exa2ndJZNUZS3HYtP5hJpykznsJcdypVPUpZ",
  "key6": "4fpSPZpFGrmNRongpJXJhE8QkwGJZwc2VZKuJXEX2mpLb4N4SyMxhtQ8Q8qv6uexUQPJZGCnmZtfiYSGdnNdXgn4",
  "key7": "2UVKzDQJE16E3NsMVh1RDkGBnbR9JG43SbbSTf7Jrr3e1RR9JqntbgDkuaMnvqXoSDUVKYcYawVFsHnLHAAnSTka",
  "key8": "4rw9imVMB48kGjo7mbrGww2dVEgtRqph8UQXHJLXhNtjV2Ut9CnMaHycjwP971DgTyttpK4SbHnboc9HJmPhsm8h",
  "key9": "2i6Gn5mBMyVUDJSWXrUPDnwtvKDQr4i5edjeWUQS2espdsxCjDBM6rHnXdRQRgNy3rUexEVuSp3uqhc1T3Q1KZwX",
  "key10": "5TRSkD28LkVYbbSNXu7CYT2jrhx2jWWvNm1BHyCa6oKCD4iZ87h93wWvoS92LrYhbzvqzYc7UjEHuSn1xSNEC7BP",
  "key11": "5jYw53ToZqrt5KwLEHnHm7CHYPiuBVEPWLhvYSqk13EwPPPTfwZT8Pw7eUsacpgHttyeYUUsexb8jJtLV3uoPTEK",
  "key12": "3BKxVKPML56y9sNUvn7igjewyfqe51ZXn8HH3CkeUKjerxx1VGogHo1PY3EPV2eogpjjM22xuVULhE5MEqHfBEoS",
  "key13": "4zEdWbknjAbx6kDwz5B82hXH9tngJ91fycZ1roEtskt4uutwkfYdrRZGGh8T7V3cBFH2ckKmeSZNqVqvhYoRouPc",
  "key14": "42GPnx5fX4bWoZpa7tgBMCtPktG97V5LJHeE3E1kkQf8jnFh97SqEmWVqv5sAQ26bUYKLMyzEN1NW4ftpcEtEiu7",
  "key15": "5LcLtp5g24XzV3MiqZhUtcpMe98JvBNnee84XtMuvDb6NL5GWKyjj3BDMZygDQuEEmWQeFzTxYs17ibi3vZLXocx",
  "key16": "54HscX1fsgFQjSUWMeSkucUDbM6dsCcmBGf6G5pe3qas3L8dGD4MigGPAHAyxx5kqSiTFgm9ZuYmiwNbJu4nP3rr",
  "key17": "4xVF6dVYnh5NLH3cSZsRHa7RL1QEPqXFTbTnArTDVCApCwACNgZKvPhUchYAPhjTNZz3hcd8DBCvbegHkVc5UcAS",
  "key18": "35bTumybXYBgU12hnpdprU5cmETU6mro2kgCwYhCznzFSghCjUihpmt9UcKKmyCqcL95iZkecrcFjcBUDEaYDLGb",
  "key19": "5KjbieQEeaaUitgyUD8uvJdtt46TeSmLVDxHa7VPwkkoALGX4MHfDfYQLt1RtVXZxsHG8SSDuPgAJx7Wrg5n15b5",
  "key20": "3pcgyzHQv2GbwJfFnyfA64XNLgH5xLLD5kYjfiCgcGqjR9N8mjDn2Lzb6so8RfB8yrsw8jyTmA5Gp3SAZLifcDBL",
  "key21": "3n9a5NyMzFjuxLqaonoe8q9c9kKaDMQyhw5P3VL7RrNghDxcVg3arpK5jFLGdg8cAvYxprVsFoa2tpurMqsJJULE",
  "key22": "2s8Q83XhKyaNuurjRSX2pXZWJaLWQKmGDKFwLC7MmizVh98dsxtPHQ5SmQXT9AJXDQARGDjG5VaNEynkymWU2WZT",
  "key23": "TynYQPToQi5E6kZ6PR88Tf15Fb6e8yaJHiG5hfD4QhtTk4wUUBWhyVFeBtjdfPdMnbeWzN8wbSJpmRD52NwZyDh",
  "key24": "5CvzSKKNPWGic3MQNmMYwi4eWsmmotBN6e421RJPE8HNK1Z29CHn5Ci5fvPU88L4y2qcE9nUrhS4MkfkSAwo3AsJ",
  "key25": "2G5Ed6vMHuvMJDgE51fK8PyRPJwdUPALk259fqfez695ecfNGxJpUkszjcDhJYZxQkHtXjr2Fg5SpY2hSFw7yBv4",
  "key26": "vymP5UjbSYd9m4fKGFC1zmP5dJFp7GAWVsihYV1UjbC3aZ572x52JrmsdSi13RKSc4nJWsWJPW4XDnNTrv3k45f",
  "key27": "37Jqb9YQgkvipZKeorYRkek63Cp1WPm1EWsuGx2vggQQt5zg53ZaGXobH7LVhH3inthme3DhACpE3cdncHcp4u2j",
  "key28": "4FLbk23Fy9aXj8ovoBYrA4MmP1H2pSTyPsp4m7SyKeSvNBNkkMhdttB4wrhibrQG65VNb5gfKGonbhBgfzx72nRW",
  "key29": "57btaBeVtD5bx1CouDCu9XhzjwYUuUQ8n4r8G5YiGtLDK8mBNvL5Y224BKBmqvQspPjMtG65pAxVhsvJQGQa64WL",
  "key30": "2hwJ9YkXgBUAGVVeoLTeT5zRXfA5iSYaUETWRNgp1cYbx1zH6DEQ8h4T7trgFu3FyTj2z8V4me4paECHAnCwaueV",
  "key31": "47YTQADHkAYjFPLpRj8yW5kkVkiCtVnY9sH8iopqopmQr5iLboJDuoC5CAWZgfAYGZCrPivzPANq5K6Qhud5Bbkn"
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
