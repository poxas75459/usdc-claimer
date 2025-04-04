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
    "5pd5p6hjpQ6f67pqBnpEdcgNKVpMFS4gE93WBcq47Uq6GNiLUN8hB2tgpxy3rjnRmTsd7Zh5PM8EZ3nDLHUvZy3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWqYbyT4LASan6DK1v3V4auZeR1wZdSqHoFg3vXJ4m7Cv6z7CLRQYHPJM5NsESwuLn8Sgx4hiuu8PUk9V7XAb2R",
  "key1": "5UjaVGkDrNYMWGwA5UPG94qXBJAXpDciWPVWCStkz1USQiHCDxB8BNJNtjN4TGvW3FCzmpTo2q1AUFPPd5gtMmS3",
  "key2": "o3uv4TgWgBkuyuXJYCBhUqDZjmE7dF8oU1osmR9DjKV7JXvKBiCpoYBPoAnMztkvsoCpByX8Dx4NK6Vap3tyepp",
  "key3": "4cruNj4TSCcfTfFzcHwppX2atkog5iEQW7ZAntMPanSTdHZn1dxHKUkgrEVdbXVuahkGmWuUXktm1xoookTV8HDr",
  "key4": "2UFYYJFUYPnJ9KF7tUtot7JtqGFNfCwxHL6LTf7qLKg2dT7WWhV3ftcFGf6GyNraR2UBruZfq3ZCR8ZRgPtVhtLq",
  "key5": "54sPfzTQuSJ33QmVU25nugSkpUswAxhyMCBjn8ij57zEj562vG3mPNNyMAGHCMcvszqzhGSKLndvAVRtgtnF9uPr",
  "key6": "5FbBXMRNx1B3rXq72oQYk92tK2b1gzAAPb1MtsYqtHKZd9pnsHKCGKGPS5RurFL5DGseGYfYwGS4NbiTYH92NbQT",
  "key7": "5k6auzkV5txqRuX63MwKWpe8r37AjNJwPw9R9DzZG8MGr5xmoikj6zq1kcwh1kyvMVGaNTHDnhk2JS53rBqywKcX",
  "key8": "Ne1attG3wc8UpbXB5qzzzW1L6okReSqAbmc3ci5GZ8q2gG7nPtg3z1iJ6QjwtJuspWiTLA8vMsYPqmhKcGTHrRN",
  "key9": "4GVFj3Y82AyNhLFm1ZyQZLF83TBUEN6JizMNH7AJMqnXUQAtuUm3z5c4K5j3zS7TYFSi8ozLGLb3x8zC25wfVmem",
  "key10": "2oqMDdcPXxzpSyTf4Hz8PbnGBciPE52sX9VyyfKsrMCu9Rrf7rpmxAQVC1H1sjXhuWGnWjZTsKhnfyB5B6cL16sL",
  "key11": "CR2YWiUxiJJtS57n2LPRfGQzy7zxiK6Ru8e72pZHyt8qK1QwJyMsCqh4zFGfqwFKzXpUcbjqFYRotsm5wC7qjjy",
  "key12": "4WdC8CWPfT636k13YXMePgDxspksVUg6Rq99gzhNDgF3L46LsWdLV2J1xpRgnb1TuunnDgwngYsL7R2g9wqWU2tU",
  "key13": "4XfspfotHGsLEN3YYwNNAWHM3xJym8qRgrBoF7nAZgB39q6iikR6pHftt8ae3r7FryTKaqK5MpeXt8HEEmexezoY",
  "key14": "4YFRHTuoWac1HJqxpef3f5vfUd4Nvef7PCMQf4Tm1ykgtC5gq8ho6TPKZvtVBYVhVNLGyhoM6pBgS6mjR1yeUMp4",
  "key15": "5yZ9QdqaLc8mvX1xfXcRJczGHzkJ6jEyo8rqPL4uZcTZ39v7rbuDAwmsYE74Wb9UReuBsZWAQ3pZGtaQJHnB2DvG",
  "key16": "24sB7Agc4xcRZfaxWLRgSnSgiHVP5m8YpYoa6zuyV7ipeHmuxYGCKH3x7TgGGtHD5t5HraK6R4sE8ycGrAHVi5hV",
  "key17": "2LRB1kDoUTc2CQCdU8nG9wLTLa7rVDRU2iCj4b1tZDwBdLPV3vUNcwyZKWxQD2Y5woELAn4Q4jyMGh1Ewp89G1sB",
  "key18": "2AVeMv5oXBnqPr4PAMW1jp27GvVzvwH8odMXfuDdnn2no1AjpmA5qAynRYxuw7LtdoqJzyY5zt4VB7xjDg1xtUAs",
  "key19": "5wARoXxhrVfAjstGXcHXGjxsxRbJaoTX2Wa3H4vB2JEVQKP3atx6AoPLSgMu5YVruUYhbdcgqGvj8iKqfUbi7D19",
  "key20": "43GLRhHLr1iTotgCY9LyH5XmXPbqLCzndpzv8wxEG6KRyX2Dip4VxjJQJzkXtG5HhHEKnWnGBegJLc5fXodSgfjZ",
  "key21": "2vu2YkWPm1YbqB6FFLeSYM1G1duFAK6XhcgXScwLtm2HoCi4G8ULysFNRuCY7yzrCG42eCyAMe1PNQn1ZJK9y3i3",
  "key22": "3CHxptV26P9tjQu2z7mewqJAiMkzLMyihQLfCXDacU7BamWE8tbqgLcC5vcAQxusi161ZdJadg7DrcB5CVUK6wr1",
  "key23": "66Dn5f7ZgLZsF8HPXMu2UHtf3889hpYV7Sy9VNcdiL5BUi7kxNdDU1QcJZ8TbQCgyTp8FGNPd8D9QZrdGP7uksV7",
  "key24": "2njq62nQuYPoya6dxCiLf69kLtnpW4k9LgMfbhxJMDGfBSaRTgyzD8HFUvvoFq2GaqHSBpFnsFCD5gjQ2WPRUghr",
  "key25": "2znzN19GEC6pifzyoDw7oT9XZXz5S84zCP32nq5UxrZfJkYVWBcmfFtRzyQzjD4EkcWbNSDoU7M91tRRTVD4TZJf",
  "key26": "wqYQpEQ83TeaBk3PDZGshuEELMe28WakctnkUA74cj6spZ6e3WHWCN5j1t8G4nVJYVfZPpDFryAf6wQYGVGXc2y",
  "key27": "3vEZzGuceMzHC3M79E8UBXm5FydykD1jxmAYECcevHwGUxwbsTA83NpnPV4HR2kXQoTG22bxZaRSBdsuE5fqNJq3",
  "key28": "83Cjj3bgTJC44oqucQBFfpFGNnCZvLZMV5CWfftmifoioi5jNahKKPnmmoMj81YHGPsBQ2eZDena2S3FYihNcdu"
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
