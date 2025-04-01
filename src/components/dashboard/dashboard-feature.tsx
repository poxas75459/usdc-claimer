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
    "55C8vC7J75GBiTzJpBmQfyQkY4Gx9QvnCTJ8KyMdyeAt58uoWFK9Fcc2w4kfRAwFezAEZu4xjqgdeHvUDoZ7pSfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CSe1tb1ZrYUc5mySiMRzMmy9w3qqR9yVPyNQqcEFANkrBFnSZDSDJKGxW5bPKC5ospfnjsLbQYofsF53vBs9gTf",
  "key1": "52Ykn5govNemiiB8SUXpaeKtVbMkneEpboknHS3uNFKrpqEDSaMbUdJuhEQ9ib7aYBEbbQmWvycC8GRVWu9kU8Rw",
  "key2": "3TTNp4EqTH654gVd6n26oJSjZ5XcFzkv2CAg8LKDSWsBiktVVeC1iQbgdDyUMcYrnXXMqZ81w9SX1bbL2uaWR7oa",
  "key3": "3PHv779kjvM8Sb2HhXk6fXqEar7dirfzu4S8bYEWbCN9DqRQuuxETUNpA9UmRRiiWfu7NGwWMxff4B6y2iNL5VyM",
  "key4": "3jD6QjWMwkHBvcvCfppW3oxGDCAmXkT5oyKYF6MuYr11jvRhDVEqwdtBafVczFgC7VcLAXduAkAtoJ6ZYYBp6ktP",
  "key5": "DXrqk9XdHdF2C8JpbBjEVFy4KvbdDLsrRycDEKagyujqTv1sc2ZkBnEYXwq5ZiC6iJvJr5JFYyMiBjhxb6LKosv",
  "key6": "3UXmiZxQdNXD93oABQ5Jc8PY7eDLPtRcnssHFH7zqgTuj3z7FuxsKKzp4VBdM1zoMzQ7Rzz1oS1NAD2JHRXRrLyt",
  "key7": "52eWB5irGnYRRaewxawxrzMECrV2gkqdN6upi1cHoufsWU2s57WgpNRakjTtFN1SATmE4WsM4LuLDtvvPdi92XW7",
  "key8": "4aXANkWs89hWw9X2aFovqpjEfdbgfH1fRzhHDTxRLyoc4uxQNcGyYfrBrZ4XSUbcKdrZueysnzcUkt37XpZde7ZY",
  "key9": "2vHqqijRHdvuaZonM5Q9eu3fnbuDrBt8wGxke7BCXqjvNMH1Sev9FBqLYTCfAFcG1yoWaMmwG8BinyLFJYbo4h23",
  "key10": "3pRu8Jwo7AhreoAhSqY6ttuTrCSRk3tEibTsdEmz6nT7xKcpnqghErVq1iPoVTKHEx1k2gQUrdvLr4UdXFEeBzHe",
  "key11": "5xN1up9LbeRnhJtpS5oEi1vDzekxcPADFdMkKTtNfZfTyoHetFMbKjXzPJjPobJNCC92Szd9NQQaEiNU696ySvpS",
  "key12": "iR1qtyXx3S2eGAiukzD4e2jzhMuDyr91aC2xrNGuZ4rZSy9qpMrSHdmwgoQJnB3RJrqLb4LWtAJM45QYeV5wwwy",
  "key13": "5xQJaEyNHk7FGvQd2eQwpxTCbA152BCXbh4ck2dXDrpJaHXzqait4XsD9AkNjXJu5AvfRa9S2EQyK2GSfQs4t49Q",
  "key14": "3cfYw7fRRoMfbXMSezAAu1upFXtetvvWuxXXVovB7RTbHSsZ8ab7ackKY5H75NiFbEwYfWPQzxws7Dzd4AcdyZsd",
  "key15": "mNpoa1wDTHtgu9zaKaZVcQ2Xt9bjr9KyTYzMuNQD4w7Ehsfa3GkXpkAGAZaAZALmbMiFi4ehJuCmfUdRjvXpLFc",
  "key16": "uzrgebovBPQnJfEnedig1iFKuEfyGk1df22NJMWjrhD1yK9jyQe8C69sLfA3uVShiEMptCYqJvuANyYnfTFs2pK",
  "key17": "4dGnT7LFiGvxq5gNergS4WZA755TtZseyyJffZkP5DnUKLx7tzMVBWWr3SPxyt6Cfe4PoB4BTLewVfUGhgkEH4RL",
  "key18": "3BcQGDzbWtE29rgF14KEQn2VDzYBGzHMvV7U1z8zJSXJfwkv9X8ev18hZDseZMt2gPfaTVNKyCNf6FzvkoCLy66u",
  "key19": "3SrPLt75PWUuR67qjbgGRR1UU8UfjygHbUQQ5vmt1g7zWLMrMa3RoGWLsdCd6cUmTkKHJuJhvNvrxWTkRyCSCwth",
  "key20": "5NEP9Mf3u5V3y68FNBcvHpAzNrFTid7Sr38PuJHF5GQHfadjwkZyNigpXCzcmuXrFsjNpP4K3JYvQrACwpoJLKE3",
  "key21": "3ufMUTrooLM9KpUF3tDbUpn2GL1oUguV5EByKgnuYjR7ybxHAKhp56x8QQQGE8h9XnWsdoMT2ezYqo4Zrqp7TSfW",
  "key22": "5ybKfB7fKn5bEeMit1jJUamUqwXcEAaw2Hqg1fY8DrhQMzo5rJb2cHU9T6V2UDL6QCBg3R6rj1TzUWRTuRnauMna",
  "key23": "PTZKkAGv28AZ5HsNAiEyjVhg8b9QnEhP6PvAEARVYWSbuns7mbU1G6MRPAR13c9myzZPnVq6RS5QbqSNzghNoii",
  "key24": "4qUDQtipwmENJTfRz9hCN5YtZejNDret1N1oZ6M9msmmmzPbaQnGyRUSooq6zJYMwZMnDjVZbZjJ6EbU1RqrLjax",
  "key25": "3Wf3mUQgfg4jtTCk6AHapg2FQZTNTx68y9bDVcuP9HgK1PrVJVm94hnrCjxhZC3GB1Qkt8mE3w9Ax9XGRQfaCvTs",
  "key26": "5Fz5SPBmbKakgKwhQGsdF23nYDhNsHznFREFywFveftKBHCwbHHmZxh8MRyNiqtwLWbtfarizCQL5Q6F4ThbneZm",
  "key27": "2HnBdCEjReNQDRuyG6nDxV9AVbrUBhYdB1FbC52zvdNU1Z5A3bdkQfXFbyLq1hp57vdM7DHJi5UNSNXJzh2nDq42",
  "key28": "28xk67ABNTZ8DqiaJMtDTXHyaoxvw8KtFn4jXkbrnyYMHjCryHyy9TCM7U9hBy3b2Xg6brhsdcZDB1irG5YpJnCn",
  "key29": "jgXZS4fLwTrdxoRn7hwYUkub6No1By4EQVcg6DcdFGoLegK9U4PGtofX58NcVyXR4wMtM7CqCJTEghzEaptDMUH",
  "key30": "5q8Hd8PMG5iSjf23hXBgj4SNRn3nLgEFFdbwGbVqGRA8mepTfjB6U3V79oRckinFrvs1SCyWCVYu3kcMxZbA8Ys7",
  "key31": "3FkTw2UowJNBZPCrgzFsmsKfCYCz5nwnZZ6W4ueU4vxyQpknDrUtFbMBdKYAq4HuWAksf9K9J6s52nvGH18EZv7R",
  "key32": "2eXcRDzHdcS4PN53seKihssPSzUhfVi75ZxSii14zLankh3srZsXDdiFojGTR9Vynb2iAvf64cRGmT8ix7XS9o8t",
  "key33": "5FubfaZn8XJMER5cnXFCHgDfEhv11aHYp2hx1fXqCSSsd3x7STKZa3tgkNaNqcQxUPJRufjiHHTQkV3QppcSwzPH",
  "key34": "zxSB4JGLN7fNCMXHgCx5wuxsSSz6Lj4g9LYiH12FtzidJFW9GUAnVSHS49DLPDfxsJTDt3T5KpEdn361cqTpGMG"
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
