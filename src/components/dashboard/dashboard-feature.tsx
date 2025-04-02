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
    "4HoJy4GXiPFpiKB2wSrFbs8e4AKvo6jG4EjUcTsgKzPfhzHKz5PP4YySPQEJ8ASoD2yJAVdFWdFNV6xEWHzfeiqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwXqKNAJxAqApPgy1HfAmkbRs6LpAAq5bGmAK8qd413Lgg3GqTAeq17GJXM3qutXjnAVNQSvFBDJHwBiXnzHGNv",
  "key1": "3nPT9nC7BYMNFA5M1zYDBCMcZn9UyATSDUoArrNuHtnYXS8QiFPznBpHJWGqeaMVnEccJKeWDEyi5gfkyyFS85SW",
  "key2": "2tnb6tnfjUdjqPTJndUQE4aUne5J7ZvDNgAqsnpcgZgLH3DPVA2qaeWAhH7zuzVr2F4DUWgBK1mHXeaQ5vfzxWyJ",
  "key3": "JNz674RhPiiocSHCrchia1gcRdah9EN3Eo4GobhEwY8DzMVWmZJbEQwwUPYjcWss1izJTMcbc77eZfp9zRhfEe8",
  "key4": "5Hn5JVD2c8hCWgP1g1k4Zt4XbYYpBPG1UQ7R9fjV4f7M4axMNLv7naF23gog28hEDcbmJvs95VUKuitwxDKuaAte",
  "key5": "2oSoHhJbcPg1Hi99aDshwPpxeESVNwUERiC7jBMrDTgjPhRWdF5g64LqDq5NSQimUBqWdgJxM1Xc4euYn1T5mVtH",
  "key6": "2Mi1Zf65wVyWpucGmybYxFae8V7RwJDykq8prHBNRUGDceW83QQiTBYoYfbyvqa3hVy1upw33p7yBWYUK8ZG6TEu",
  "key7": "47xn7MTPxR2bKWwdpAEoLxEgPL6uVFNDgCdyYaKi3kc2NwMA5e9BY268Ptxd4aMg9ogJ3VArFx1JRMebnoSsPS6H",
  "key8": "5JuhWfrqwoagZ7q8QJh46HZRxrUjL1XmtPKQSfHaeepg68DoFcYSCHjBneqAEGxqukuLbn8R21D133xfE6s7vsVf",
  "key9": "3rV1bNgTPVXz4QyZhk4WKEJ6FYgrohbhJz27ogrnCRpsf6bxY5TGjJdtWC4VYiKdpVJ8pq4Csk4PKEmuniPgt96v",
  "key10": "PBiwjakfxgpLwBTz5PLUFjg2TabHNks2Hc12Sd2vZ36x7boHGeSYgKiZt7TL52PFNVU5H3ize8TRzuxWxoLuncL",
  "key11": "m7x5X5sHxfADQxoJXSgXYGMXnVQRZdQz9jTSt1ffWJSErtkh6UkmBvMQQ9oTrSZgPG2wc1zZ9VDpEDnBG3egzdk",
  "key12": "4YgjNofVqe7YFV6GSfyixqD4q6FEdFjDLQjVarYJJnxJ8FB57Y9nuAUJhQ8Kpv9YsYP53gVduVefXkonDvenGVHz",
  "key13": "62Bkp795wSnihwgNq6fCizXNZvCH794TptsL3LKP687prTjpeGuzKkjVmy2RmhrbgQZc5y1Ate3ubhWdA9Hi7fcT",
  "key14": "4TSfq9QGKPWBQ8JiUWVKXtGejmWweJzoMLLkcZhULVbWNzcNdFDdpAcvcjTkcuBv6LZFP9fHeWF2qrTKoL2miEy6",
  "key15": "5ecSXJKqaEivqaMKMDo5yHB3T2QERdaLsHjZzb3qjDaEqBTGcJ8fLMAdJfkLT3ikp7X2McZ3YSmKLyHeakFjnc5G",
  "key16": "3rcgNsTYiMqsYBkGcibNq6EFycNqjG8kcUghRL9LnEvkPWrY9pX6b1amLEXWh5b5vEENdXNgCCAndpdg4fQREq9f",
  "key17": "5ywDpW52J9Y9NfYzisniHDzYwpDYXfW18FU4regJFQdxi9WQy5ZwYLrmrqagWxHt5dG2V22g7B2qe4mkUEhvsW3q",
  "key18": "tYyToobXP4dMfC2vqLeT9BhJb4U3W2kpExytjEonA6Hy2yHpGQBStGUXd3uXxLc8xmcdYLzKA76u4Zw6tmcf2E5",
  "key19": "5GULoHiA435qQK1NeVDsgj8K8DXtFQ19vKafn3YUy5bEyxsgxSjFpXpWsVtu5zhT4kEYFYUdMUGdfHpFEZPNXQ49",
  "key20": "wctv2kVVsx7TPbH6rHnwE1aVEgarAJuHjB3QrquACMPZnECKMCKeyznjp6gwGNK6FPFcMwJpZg6B96WHzkBeqxz",
  "key21": "3zfRVZUqwxJN2cVaReCE3fFB2SeajCDXELJxFyBSTxyi6QhqgaNvWEXHC6K9StLjfAmNohLRsdXPpTfnrTgsnKg3",
  "key22": "5BvtbYUyCs7qWTjjVSEe6SLwtRwtkkHTiCWQFcMf5Dv6QrX18eKRADaGxCbXgG7KyybFPar4aLoK7M3BSGqSfK2N",
  "key23": "qDmP9BcgBaE5A24KvA29HRXZhDpyK8FEU9sPmpXmn7XBfDD8j6xAqkk73ZKYt9geBNUVouuiZbidZ5wvHTPCrFY",
  "key24": "5KoJnC5GfZmANHCdyqEB1gjwxsML195WRk9q6B1x21BGEXxt3VYmMkH6VVVKnYui9bxsZzdsoz4L3Rdb4sytPc1u",
  "key25": "4d3n8dg6VPSNy8A2ZFKarupbFaCVc4AXSrQoNk9wTNtNNa6Dgqj9mRQBRjyaYVkyYSus8ki98fshgmodQduzVNnH",
  "key26": "4rvHXxRAqfMPuaeV8HhCZW5a4y53iTvuHiN6Q4R1UTvDLda85NHsPywFbqRqxSfhC8yxSqgGCMvr1HeBB7ZEge6Y",
  "key27": "5LG8KPrxFBHYT3CETvSdzBnYUgQaWhSYMiDEi7eBTsb7PokCBcpD1CfhumBKrxYnvVf3XZK6PM1B4ML2zmvQMLHX",
  "key28": "4GQ25tc2D9xCTsUEHP4EThuCgQM5V7ySt9cfvRGferAcWQwcihW3zn1AkjKhi4R2rETXqBeNTfRMJnT3FoRcQDE7"
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
