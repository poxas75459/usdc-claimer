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
    "5BHVsvteLrSH9gzTLN1RsMRDFjNmCEBERu7UsfadkZwK5HKa4v4aWH2Mj3Ho44ATynC6J7A6C1YTDAXTfDtTU3En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKraQNH2kNgFvGSuPLC8HY4HWVkvqxqMxSbaFAzyfZsqc4ctmBatWnXPrt1AevMXSPRuJadNNhjSTsDCuuBwVsh",
  "key1": "beR4buLMADbNbw4kvoApxMHCxVikkbRRazgD4x5xB2i4YeTCXKqGHam3wNukwNtL7JUJsmaXeHfUhGZEATSYb9w",
  "key2": "3aRb3mqdFQo8DzVgbCMC4VdXySwrFCQJAZogkmK3nHiDg2hi9sTRirvZ5pyAAZk2HmRttpA8aV1uYEogmYmNkKTb",
  "key3": "U8yNhrai1RmyJjRFfoGsaxKUPzPj8MtSZCfLDS1csqSFEf7vuqrhRJfBPzoqexEcW3sPMDoAkBWm8snGag8PnVh",
  "key4": "4TCc2K9aJLxERPoQSQrxYuQkQunRTPbdw49Zqr3K8uCmck9qeWCEWDYzg2DiarTr5hZv9TTZsEJYD5qfeJJMxcfa",
  "key5": "2wNdY9Y3NGws48tXc8tb8e3o7UUP32pCmACgi4jPxBv6AQm5drXa3gYFAX5Vgb1pmqBib84rDKo5zhT8su4LyhtH",
  "key6": "21Er9X7jts1AWcLR9pNUmJnwuhbrv35CbB5qaaJVwWEBA4JqjhNHjJGAU2WDwvSy879x8DX1qczY23L6zrk3mT2s",
  "key7": "c7761FJ1LsyXQB9QkbSt6q6B2iDKA4XVb6pZ9z9MqB1YLNdcW24hw1ZNBm3o35peMQNGwLFbL9SZb9iMtwhPo79",
  "key8": "2w2KiMmrkG95TLTsGzkoLAh3fcrpebqbtrLTxLwKSYPFQeLgHhCDQ4smeddsowXRfzbPcCzAfjy6jCy8nA3xWhi4",
  "key9": "y7pL1RzKnKz91KVvFrPGWxDZgi64QdnUpA5CKi9P6evS9REDWwz3PhA8Pq33So6fRgs1U6EEn1xvKyBBwytmTiK",
  "key10": "2MH5ZvGwLtzHGvnsX2sTHrMRQCzvvjubcsnSYvboouV97coEmUST5YeD6nJrfEy3vM83z8e2t9U4RsazkLabHwvJ",
  "key11": "2PZZDDYDS6ABsUMBaspiZoM6rhYJb7s3vYYdM2wfXxpLdgof2BLL2KmQAYcfYCC32iMaVNnUxuddTiAAGmgja71J",
  "key12": "5U9nhj48jdm8rJ6LXGWWDeKL3DampvTL8VLKbJj7wA7DcDYYYXjdAESoZKJHq1vq2pmARAnK47TjdjuVzVQuWACv",
  "key13": "566Q5yJ87PaWicsUByde3nsRZtTjv8yFcDjYAxqDGeqtQsoFEesk5bfi31jAhrvPkNH4depXiovYoek4fuLe1HJg",
  "key14": "62R2XUwyMVNR7qRCrqctfLmdgq4SWFwBKzDumTN5AKgaZbyhcjB8KHecPp6QYXgSxqpAduzJY3UhCK26q7AjVm2g",
  "key15": "4FnaaVaUBuACe4evUSGELwt8MoFAbaHsRRVhiVU7KavSB9HRzVaYfB3pdYBSSKxBNj4aNzXSLWmdHgJ6Enm3BTtJ",
  "key16": "2zEGEk5v8gnnAdoRPCyqyT2xHhxAnTqvtikwkXKd9vkBUWqhSq6Rk1zfCNCVkVtCtgGYZs8PuEoPxMebJ5wvjoDP",
  "key17": "u5MfnsKUgbU7pcuCHr3UkeiSkbKc39djSzNLTJGXLWRynqg7tXyDjduSAPXXiiiMacjQFhKi7DfTBH4AsiEKtV9",
  "key18": "gdmMAfnmknTVHr2TjXT9jvK2M9eEYrzCn963XGe2Niv3jT9MkdbAtewUNrzmHtKwwNdGUuoLFSYixHd2evBAV8Z",
  "key19": "3te73Jtb5HTiJzAkRrkUnFDzK26fgqp5zKBAdJG4J5MsCMGuofMGTefdQ1by1qkRwxKtP6syqvdjYfZUEmye3Gum",
  "key20": "2bpET7pnPnVSNHaZqEJ63UL5gEpBqMo88Te2MBNUvn5KagW9sV1h3SZUG7YJp1BQS1ki1FzpoeGKRbKPLnpH6isC",
  "key21": "28iCTCLcfxUesT75xNNaxXzDN4RYhAzoqTkW8UUgYoDWV1u4P4VWjUbxbESv6L1Qz4kcwdNmxpaF3CkHn5QgmGnt",
  "key22": "5tGgvvzFY4E7UoQPY75ZfP5nDxnMNsDnCWFAeQrz2WEZwLGQM46ZyqPNuo5o6Ph9gtUcT4Sqq5Zogx32jkUghc7W",
  "key23": "JrHH9M7fZLcUw2PeNimPxvgCACcQ56xvhMXntUdPYwGYmKziX13FWioXDmqbSgwAiTps2fLoeBwTQXv4hdZ2arM",
  "key24": "3V1fJ7muAo55khkh7G3AEqGomx9LWm5gmgc91mMfYYn19WaQdqXAtLM2GUJ7n1X5kp7dYumTA1zgG6S5ivvArBBJ",
  "key25": "2ZSfTybhryg3bC9obDb1TgFCdeizwDzYPG313zNbwEHg32BaAmd7N5gnDLhyozqzEKVETVhq58QFBBmoP5SmnjJN",
  "key26": "3129gVcqsbVSdBWKT4hoaFg2tXprjqgJT9duasyD9Pdpj7p1DZFXUZghuHoinq7syrcGmb2REcrdocJrHtYMHnpb",
  "key27": "cmmi3mRZYwJuxXTJBynULAaNRgyX5fhT1ovgJPFrVqLHDGtCVChUmtCvyZJgFTkMgitQSz6h9wD46hPySXELbhG",
  "key28": "BAjgAsAZgt8CCJdKSDq1ffRPfE8fKyhfuoeSqenpHHa9w4dxnyu3p7L3FMCJw5BH9JkN7zsRZtp5uugSLuKsjUD",
  "key29": "5zgV7MEkNfv93MzxQWcRw2nAMZ7qSJhwSHQY3aDXn57wr23XrQs1DKqBJHk6tfbhNp9Wv3HcDpXGS9hCHSVgfv4w",
  "key30": "43o6SJaBPuzwCZzPV1mBV7th5VcUJqcmcArP6U4wT4QVgXSCDMzrZuPqH3mBrmJU3iFJLSp8ACy8bs7f6yXXuDDD",
  "key31": "3NgsoGYatRXtWPnCEP89nS4TFgkuQNYE4ULkwi1uxhtsVwDm5L3cAhZhM6JFxTuVrQfWGwptWmrgms7HLdG4qizk"
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
