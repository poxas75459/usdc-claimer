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
    "32qncSyhfr4jm9DVaFm2Q8c4y5wssgZY5pi1YBHtGqzvrn37JHGYoRWoN13sDBhbGUYva7iFtGiMPg3mmgk8T4YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lv2VKuXmmvufU72WfYoRdUcLB3WzabaKiuW6fXh4RrAtXKsvUaH4a4iusY4z47fKgLLDTZqJ36BUmRufZLTvR9h",
  "key1": "2i1PWpT9HzgSFCN2ccrgWLGgKFWKTcHHwFvmZVT7qj7VAoPi126xXqwNLqcGjyVwBhnvWparDh2KTWiRXNzdKsTX",
  "key2": "2rdbhDgXRfg33DtUwQXDYJxfgZCEQrusFjLS1sYUvak2AiajL4cUE1FbTZ5FyWgewiT2Z2fByT6sn3bZdjfYYW4c",
  "key3": "36V8bCB7CVT9xUGaYJDbWiwWHqvhgerYZQEdt8VFs5bBrgkHf4DRtTKXHSiFZiDnJSH4mMiA5iAWtgC3zKZCNPTp",
  "key4": "4h5yDt5iH1VYZNVj68Q7ZN1NjLagGePwztnBVu1rJv3KoAG22F8Ka2xVyHtAzprxRi6sKKyMacSFUyMdBWrgDdpk",
  "key5": "BPwLQ9YYZavBLYzipq1qxvSp63PdxhtxcWzSs3ZKb9jWq3NG5QV8cDPZBcdvLwnu3pHdWT57X47Q4khuuJi2FjC",
  "key6": "5WkSo5crGo8KTZztDZaXLLtCpuCsaFruiFpFEkc8nj4Dbrd4eyHbkkSz9g5C1r7XDQra2HkwheemutPyKQrmDdsP",
  "key7": "524jvG3Eiya2D1az4gbNyYZEkysD19LHWp1vhHLh3NJxGE7c6Nv8MmLRSAwqzrxHcYfzBg1P5bn2EiBbei8S3xJ9",
  "key8": "2KbK7Qfssdd9oP7JvWmDPXVdR5Gof89S5PEg8FR33FA99AMvz9GebChk4E1k9z9gKyrSrzqh99zNPvEf8nm3pdih",
  "key9": "2m4SQsQtYTJaStFYvPjeCaohXsV2JjPgjmN4Qx31viwmuLovB4rt3DkPAzmWKNmAeJZbsxmVpJciDu7DGzVDHX3v",
  "key10": "9GfeC2QLcMxZHNeAxfbwweu1TaeTvjLtD4TR4Psy945MayHGDcerXqPMvdhhdtSGeUMsUPec6AfzYhgbYmA7AjV",
  "key11": "22S6ur9gw4Rz28GDZ7N9bfeixdoXSPk9kjEiAxLZfyyUTRRsJscsqN7tZyxSkfeaBnz1Jx9jLeiu38rYoxEF2ozQ",
  "key12": "5bQcBEEBH6BbGj7fSypGJNJSQou95sxivvSQxXYY4atxVAcmYvy21Bm1PkSbKkt66d1UNGApEHpNJfWPuHNnFAPP",
  "key13": "4b4TvAtZcR8G4N6GZGKrdDv7XmJFiZRfBrggEaTYjcJuWfphTPVBSRQca2nUH34pEgKthXvSkpqSaNjaYSmFd9BG",
  "key14": "3Aot8yavpoiEKScWgVF7DmLUzsGWvdStJd3nbqB3J6kmxwj1yexzDmvy3341p9ueaBKa9EXVaCZLC9xE3LXQYEKx",
  "key15": "3M17EXgv3ivir1VLTLtTWadpzhM5dAunw9geyVTjU3KQY4JRVH1wrci1qk1e3sxVfJgLQfvW43K9vYFMgyqxSkr2",
  "key16": "3wq3Le3wPTPJK3KttYi3oNwszhYujv3tzjyN3TwdnUrFUGE362STBbnnrQSuNBk7piK7ZkaqHkqfDFcGhEz39hpv",
  "key17": "3xw4j9YF3WJayYcfttsPPWtN5TXytKYPsTywHDdqyPiSoVt7a1pfdzvBUvwo8yf7YrCRdb8abQWjY6NfVaeG54po",
  "key18": "5KaANmnp54jRkQe7ZAaYio2Hg7fUdH4tny12icyT6xdPAkHoSbkXbfFis6vNtzaGarWQdoaYGikHYkWcTzMTWnUu",
  "key19": "MGHcB4sbYFwGigf5Rxcg2GyRLm3x52MCS7m2Cx6jz6DKbALKLes7u4cURSzfmmH6HVLgqKZfPp67ibbG6jMwYBb",
  "key20": "rag3HvnmBGcsHrjnM8zdgJ7YKYEGoSJvn4EYXmmVG7CDNN2ww62Qhmxe742McfAemysdr3arBVP2isVuBQp4GV1",
  "key21": "2geEA7rH7QiRZ4BRcvWPbL7higwWjanyuxm29pkgVvXKLnZ6diM2BqUj1GqjhG2cCGf3SijUsE4Cyf9E2Zh6uvJY",
  "key22": "5cvoAZvwGkc5GsteyG45qonxebpgebLi1LCfXchVXw9TAVrJeiLVX6nSheo8oeY1q4dT2KiaayqMiTtsxfm5uuU9",
  "key23": "2TuFfzrEAJC4PNVsy1q5ZLnpMHrrpjCg27PFw3hRs21mjiJNHkoMcTZqnCJssSTdu7dprMh8FexnYD7JLogHUgbK",
  "key24": "5p34udR6ktYcycGJZXfKQ2Wku9yaXq4tsEqhfqNEUwh63Kb3cmEDbKEqwDf9NcEkAQ7Rm3Mm1zV5DvKrzJhWzuDY",
  "key25": "3DHFR4qMeJo9cCajPKLTBaPmpfP1kYpEk9Ft1JWRAbUPKpmfz5EVwzbbwGmA6jjjiiocq9FVCZPdZAgTmHrniM19",
  "key26": "3xPLKYakLcAQka2PcAskFrBfheXGwAFwrfEAnbjanoNvNsitB2KfzBgf7dfxMnAVqE8HytfwG9rF7m21LudSb2rp",
  "key27": "283qkWvn6AtqzNwGGFFNNpbZNVWcjgyezvpybUi4eFmvMpftKa4sfrxgdGFuhMzq9KhC9Hdi1kB114j3ZmWkMEyR",
  "key28": "4RnpbemuVUWt6yhn52283rxnnwF6F5AvQMcE98d1BKWa7ktaSBnRryMDzMSKdhDbVdgLmsAnYrzS5xk3Sg51wHEg",
  "key29": "38A6yC1CkQXBdxCoesmsb9naHqm4Exa1CSThFhsJZbD4SMXW9De2hAeeu2LNpDnx88r6ZgMvSoGDwEWKVf5fa64k",
  "key30": "2Tx9HTB43QP8nq7336qVm5rRapFRaqjPemBdcXf93fSvamCx3EgCkJrXQ5pxvCjXWE6Fr7puRhasrQeM3N4kBD3A",
  "key31": "C5zHSd5R1meGEjthab6t3JM1bsiy34NjuafhjSayPmah24y1GtCjfPxiucuZxte7dMKDqr5KA2F2mhrgn1ueYg2",
  "key32": "4iDoi9sLKki2sBVmUBLbRykHinVESXxNsRsFGZx2qYa9RwxS1P8WKRJcP1qq9ftuvsPvCaEbaEdFLUeKx82SsPuT",
  "key33": "3zKZpwvH3q8S9E2i9tCkjLHGAaKHVe5pggBQZsCkAn6hA84UQ7tCg6JxcVpTAGFi4ruhPGqpuJs2ASnSAxr7XED3",
  "key34": "3VwxZtSELbgYrzAaFwuDn188gVGdhwRJa1wNqR4hF7nDXKAht1DUyreHiJiBsBuBMf11agW1VyQWjszY3Pjmw1yC",
  "key35": "4G1J83vLaprQd8uVfHizVGkWZQH587mEPYu1KwLWehLm3zpggt7jC4SsZuek4W2oUA5GNqSWbxMgLuJ8PMNJYSeg",
  "key36": "5PNpm98j2R9WrKQtT9DBN6qSw89jkRHGExvHYW7px9ph9o27gpHxdgXqKgMkdNS5XpLWjvbUEvZeYt3hY234S5Eh",
  "key37": "48cF2nFzQc9mPDwEtajyMq4g3mrpHX7ioFJ7P5yLKurpb8FQ8VytJzr6fQdVpCEfUykqLUXzbCskX4SwVcFStLrr",
  "key38": "3CM85b4u5KNLGxo4oUfmHc4ief2vV8tYtT44BEgxV2bTjcGQB4aX9cBQ8fjriCxxsjPTHm3jgcghUSKpj21WfRJV",
  "key39": "2GVKTB57S5AUTFDXsHDpqKeqitV5EDPBdkhhG9tBAXpS3aqb4mE2jZMonzU8RkPMhyaQxZ7bgTcDEMsVoZSwtHcV",
  "key40": "4Nd4eMqXseXh7hWB6741T7kVUYbJr6igNFj5EmzEkFuXSRpjNLK6SCsjRoCH4x2giRY3WZLfWN7aYC3aWcQMSMyo",
  "key41": "3uPZ8VVsPKU7e4qgKw3DJxCzGWkCgjh92sRca9u5GZfpDPSddBHfyiRxMPmDZmsRYrSw8TEpQchRUS8k29YPPhdR",
  "key42": "f48jjZk7j7YdqfeFAQVJrDKGxCcew7S2ABKsJie4LZXpq3Q7hoPo62PAcWn8X7BASeyP8H2W7hKbmECgQMuRKPF",
  "key43": "4y6Arwz7zstdrtAyjUumTVanjkFBjpLcVWh1UootqEW7KY8VJHQgWcZJxzHD1f6DWtm3ruxesa6MKb5tZHto8rZ8"
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
