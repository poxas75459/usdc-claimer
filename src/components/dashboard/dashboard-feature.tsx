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
    "4EuYA731WyXHW7CfoLi41FJLd1A8ykm9teAKieKdZmBYMuKEVzPAonzapan9eZyMMCLupVRYEAvDSNKwMfvNod97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zFDWUZtdY16sJv5XNkyxhtdsRGiq3UYfYoqrCsHvUNgdwL6v7TjXKGCaEuv92Q4gZ8fTD25akXkXC6iK2xvEiM",
  "key1": "3T8wHXjAC2NX9gyTspzPvjYqVfmDD5LQi7UpjawsqoZ2SnEfmnmm8WrSXF9Y8C5Lx97t1Qh9zJLS6tJG77jU9Y5c",
  "key2": "2xywT7tLH2B5edXrNntAMPbaqA42DzF5EDoREAuzpfacxBMmsagHNjojdvGkWCQGMupBKDLA21rM821Vq5JxtxDk",
  "key3": "5NkLwwdNo8XfScJnAPVpvK6z9gS5dBr5wroZ7ttE2W78XQRy1u76k3yyzKDxdSkdmACUtKj7VTG1amghdv6ea1hC",
  "key4": "3q6nSsqRdWsnw7SM2rUQ6cqb2zH9w7bPjvhXG23J9ac7XttZ3ANVKymzFXztH15CYKkcsKY3hRfzC24KtX6xDc5q",
  "key5": "3o2gsmmFZqshqZkz4AufL8XtHiucHcZ4Su5jfoKgwj4wy2nTnJkQSnay7pAB3Fh2knsxKL2Bu2Ly5BctGTE2mdtS",
  "key6": "CrS7mVxxagCamKVpF1cSBETGTpXPzZnu83WHLNr8eLvuZmz3XqP5FRfZyWxPmBb4wu1Mu7De6xf6nMe1tVdpJ3a",
  "key7": "5DZTh2LP641xbaJv1VFQD6szppK3SBfF13RjEs3MF7sfAqeaQ8beKNWya3eWcjjGpdL3ztBxcd2fRWgofSJwhejz",
  "key8": "2Z3VPP5CjNEuh4ZAzvXFMQAYhcx7ZPzGmX6BdEwsy4ZJZe3qCxnf4j6EYChB51Ey3vh3oj2Ht8aTMjCBxcSytoHV",
  "key9": "3ZDpM9CC9PLC6GiLU7QbZn2JfJV8bPvjDT5CXoPNbgTnDHTweSqfeJbBs27mHbpDGFt3cNCyicgN3cVLNspACZG4",
  "key10": "2XvoeRkvtNVDCDk1uVutZ5UGErhuQjETtXLfW1NN1YVMQuWbQbBU6dJCppbYm7Xjp3KXqsr7UDft1bLxfT6CURHF",
  "key11": "25tX5p11K8ZLvnGU8ux1YoTtqXNhPhm4zNc7RagPFiVPw68X3bdjD8g3gGqrodwZosWQ3GcHkNm9H6492RpgmARP",
  "key12": "qWRiVFmF95P1Wp4iLfGyoD58rLFpn9axqADtVNSjN2xYc5C8F78iPvsqHhz8UGeLXKM8fS1GNHPnU7M8avwyQuP",
  "key13": "3XZqUtUduMW3GfUDMT9Mzy2vECAAX9QtKg1XCLQ2C2SkdvSouMKb9Qhk8ABLLCZiH5CWbSeLmYuAatSxYNLQH5VT",
  "key14": "2RCMucd6eUdV1s5LJuALcRHDohJr4HBcczmss9xHouGvmHuzmXacfxwN6PhF89PGEhFH32cuQUQgrDTiKvyyXVoH",
  "key15": "51Qd51egHbG1EtpAprUWr6NQnPjtDSkF19DBwERcEiTc3JTgdhkXQEawTcydNsHkizmuuWgecPM64bLYWyLMYyaN",
  "key16": "57fsr3C3Kb6tjWCtCmyXdxq7bwVVzisAFWBsdwcVvNFetvpVfZ2kEdHKYYGXBJgjv4TrjRRJfKvGGCdTuwxfvtAt",
  "key17": "2M4xMZ2UcFFFs7Q5mwrdYspqFFQRDVdHrz8ZPq4n1NKYTsKsnRQUQY8AGnXoo8iuNfeJbUqvXALJUGDup3fhtVJg",
  "key18": "3ny7QZD7xtHaxVfxe1aohK5SRwug6xbfnLUTWuUeKLM97Y5JuWArRN6ZPCJYETSZKdFNCpLdYZrWDCjaTxh2g3ug",
  "key19": "3UeFeYHkd9WSdEtnzdEcMkEx42bYzsJcJVXSvYwmxqj2sZ92BTA1DSfVLjvENbb78SAYvxf7gjVBNdGLYBEkKr74",
  "key20": "67fbKd2pCiE4TtWBysGxzKjndhbQH7KH6rKYnS3nHnyKG2H9zjbAfaNVgaKALU2R7BreBe22haa3pD5JUg4GLdco",
  "key21": "476qaaMWDn3rNfAkHNpKsro2Mjbj5DYzbjMgV1pbGjdbzWHW93Jkp8nVNKYd9NWHS8CeyzVERy38Y6gp8a3DUVXc",
  "key22": "61DdNj8oePdvSQMGXbcbJ6z9bn4GLAAmqLhkJk4zUPCpJJgCQ6fA3aYQZ8EuvmnNRn3PXPZC2w5RrY9AB49bW9Th",
  "key23": "3ZmvRBGP8SqEyoF37xcZskxyadHAsDuCHAuS82AEWe1X2NHqTcNisFzoKtKMcnRfNeaTVN65xSt5Xzr8evu5gdyK",
  "key24": "33AUzvX4Sm7N5HMp8uW1ovcyREuDNoSLS421PmSLGbA8YjMjDtnbvA2WxM7Wk2Y35oz1peHBnmvYRAsFSP7WY4L5",
  "key25": "37y4XRNQ1kGdCWaeJ5Tu85fSQNwqnwJaen6AD1LsfsvcbTro7nQDYJxsmKYmgBbUrhha9cRGJK8mn9JuVcwLtaCm",
  "key26": "Ctx2zMVXAsCam5ZBbF6iuu2UvJ4W4o1gyBYBHijViBERfJBJtZQFyEnVFD7U4zwXTwahSsCiLzqRSoEyE7fsD6d",
  "key27": "4DwdQR8nT8bQyvdfe6ubiwwo9HvBoJv88aysURya3WNqDWeYYnD4MDFu73KSHfUhKu7qhb2pHS6PZU2czcapXReB",
  "key28": "2pwNxM9Ee1FVtEaeFDNQSS4YhCbSsFbyxWLwHGLfz1NbccpwwEp4J1AJEDWnY6tQZbEvWko22KuY4gNqLHQnphFo",
  "key29": "3e7vRmJYHua9Fu8QxARLVY8RYSp1D8hf2EQ4bnZi9uz1Cf96EzW4H692hxJ8e31TTc4P47ctexHdjRtWC4idLR8t"
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
