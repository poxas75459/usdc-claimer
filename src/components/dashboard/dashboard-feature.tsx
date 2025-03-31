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
    "2i1bcEAD5My4WpRNRZ8wroLeuLubwNVwM35rNhcYhScgCbiusPa4V4ubhPWoPA25AC1J3W7CAZm3RbzTa7CqCAAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsFASNGyvuVKTDQkWH65xJAD7GCNNYEmStUmv3q2Vm8gWXNLY8azrSxRR1ojJA8DksjoHG7JBKZzr5v3ZaETL1H",
  "key1": "2dsuvCecMpLR1LxHUS73bmHpUvVmGqZvAtAD7gnXqVxZXm5mZCV8hQnWd5gt6ihFhvtbCWUDm5gVJWSYNhYL1fkZ",
  "key2": "4vj29W6yA4UVFxoyaZtagJje7ReZd9BagcQ495qrspzpdsFLvKL8X776D2MMJihEsLqedbTNyD5VTsy9mJewdywL",
  "key3": "4rTm6z6P1Vyj73dfFWaHZuNHVNPfMwdPTAsPzY9cFem5oux7e9WJZJCCjfo4HmxLnmGtkirByqDtz3XT84444Nah",
  "key4": "3XpM1pc77hBLhRa5wKwFGvy6eyLAUususWXjvMVGRXQCNgvMQyPAcFM8UavdFT587CkVpbBiFTvFFsDcxhfRjSET",
  "key5": "3gPXmfmQbFqFZJ6aXDmKgC4UogRfLmokKJGyB9B4De2HNNDyHNze7THChy8mxULND6RB4R1tUn2gt6T6wQ7dAk5q",
  "key6": "5ASPbTvcm4U51dwk28mg2qwU5xYDchGHcu9AjkRYaHE9iwXhhHATLBHNZSgH3fMQ9NbAyCFS1EujUf8jrVKbrLER",
  "key7": "2bJEwKJXN4eGvejYRFaEDkNPfTWy6UaxLVFrUb1UCSahhgfy6vd3C7sd3wC6sAGJyk7PN2gEznvngj77CBGHMT87",
  "key8": "5BtNvF1LjEG19cSSyV1wHJBR3CiTYcEHUdYD5CpKyR6qxiEvpiuUMPi4c9y1UWR6Pf79uKU1icL8eQP8FCnRvzyr",
  "key9": "5SxKUBAfxcuTNuABgrap17dpW9pHvNEWnK3UXToGKE15bJS3N8WBTDD9aYbYetpt9fegzZrMCbZVNDj7B2KNZ3SQ",
  "key10": "2gcV8xwGEdJUwkeqs5bC5RyYiHiiE4yNupghF41t1EQ5juPQNHwoTXUR5Tm6WNLrZLK8CuzZfxGA7x6NWQyH1WC3",
  "key11": "4jZZzpDnsMDTMb3K5FfVt54DNGBr6b9s4vwZUqN6NcydJNVbq5EABJuZdNerXGohUwTFQfni7ngFQoTJJTkVzuBr",
  "key12": "2a7A4uC6aFUrqRBWQBKJxDqfpg2DR3ybYdGeeDjPSCjVE7FngQDmG3qjzNwKVHE2K7f5Czr1HaND1qAhGxYEXnF3",
  "key13": "2AQHfFJWZb1g5Ku5CNTnDSyeoRveC2YQvM56oFifdXiBWyeh6j8SFZ6yuTfuQVbNp7vu5jU9j2k8nbWR3ZTYZx5A",
  "key14": "mN7PVvLvyNP34cASiCP8r6fa9bR6s3VFm7P5RNaijHnki8UZV8vXuqjBpnVReVLH8HSyimuVQqhE2WrLc5MkA2A",
  "key15": "2HxBLYzpBxPaQ3Qx5XY5y2Vnz6g1H7d9wwqztrQKSro2MFXoH1HKupoGKCR89a9pcjHgRzmS3pauVCjmRMSfPkd1",
  "key16": "63jqKGiTUMayuFT8NeUxdHgMMRN3h9cvcgprpZ6vsamPdiRgqe3KLryLLggUGpG3hzd5wMaqCmQ4zamQaPfEX2TW",
  "key17": "5xBCJkEoELVrNjsWxmmqcqn4MgjJPEVdftNRh9ECusqB55KQ7Ao7j4wFCdNFzD5QY2UfkopUBizWWYwnZsPyNwtT",
  "key18": "5qrdz1PjMp2n6LTTWcYuH93hhkaLwgxffH7HetHzd9KeWaVyCBPQxJH6SdzDqbPG9UqumzKns1sfB84E4HosMMfo",
  "key19": "5JsoDiNAbgKnZFsVNhkF1SVB1E8PPEEabyznsDqBizHmMwotN4wARTbKZE6gkKiwLnLxWhQBJuSZaUT13efsCS8N",
  "key20": "4jfmfGMUcHypTAKksTEz73gyQqiNFLCBp6v1HbznrDGmEAMjDXECvFBGeQQJhSB8oPM7Q4QxNcoYouhPh4uccyqV",
  "key21": "2EniaeX1tXbM3c3v9TscJsSVEFfVVNei1tLbRxCdYNSPBejK5A98qaP1MTA6NEeyDRXt1F6betjQ9LBPfXBGMDGc",
  "key22": "2SKotHTMkncpLB5ZXFYio78w7ZrbYw7L85qhdJjCmArAUWUaB2nuetdfNMRZuYyfB6ssc6GgYXMfpsySbZ8m6Dfi",
  "key23": "3kY9n7uqEfZ5trwU4TR9iruQB5H1qGuhuMfdtxjUTXPx8zu9hivydMcwre9NH4mjiwEMBEPVM4u9BfAR8bdfs5oR",
  "key24": "2reVM8MwJahCjFvjt4GFPt2zfxMTiQ1XHoZKKfcbjxupgvLGKkqsNNMWsUF6iqfDHVYhYSn3BM1GB4U26akcFGEg",
  "key25": "vrrqSqyH7hXrSCfak2gy6Bn7DvgUey9mfMtcvprgdTeCzJJ3Wf6mkD6TxxhCk74a4CmWa31MFUrwhpHCqX52cqK",
  "key26": "aoE6ua7y6Qks5Roheb1hU93VUsC2o8iN2ftTDXupkhjDbt989ggbiSAoEikSydwhPaqy8GqzMT6KuXTyqDToRNd",
  "key27": "4rngCGo3u5gENCDwm4nKD14iwtyPGdzofvtjfTKF7WvFe5DkqyJK4iBNceKFFug5DgFwvCyi62gQjhqPaEfZsNoj",
  "key28": "3BTNixwmmjB9cQHVTCyqb1tbir8UfQ996uveby3b59J8b4gE29JKimrh2oKL7Mbkwf8ib2si9FCWfZr65tQL2qiD",
  "key29": "7jcsJGF9ABt2cxPAg1iSMHrGm1p3Jc69fz7rQxDnY9QGuwjxb7zbFbuNy71itsCuAyMQeuQdt9D3P1pfwSdH1Xf"
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
