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
    "49SyLAQBfLBCgwDcbTf8PmTuAvz9vMb88ouK1QAmQG63MEgAJSVUknbAQSsXAgjaxyd5ffs5pPjK9Fr4QDH1zuK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCPjxokL1FuKd6281S7CpNeVTnUybUADdb85HjYFMPz87YuZqkBmPX3i5SS15ofNoPh5fCbhQ1D6UbbxuDvUTQL",
  "key1": "2QLMDpdttWkXHSvShynJkbfVqiD9QYGD7W5hHTM1wb4c9vsd2vTBJN6xoaaBGr1TWvfMw76Dm8xHuyYCqtkbMsyd",
  "key2": "436Q1pkN887x9ZQ2KP6pzocxPhXFjgXC1nako7XAPwAtp6yxrY15hPf3wkz5JTCkT1FadPpACv9KgyRKkRhu5gHQ",
  "key3": "4QWZuSEbeFMzCL8ScFaXQCK9GQ4NzJxjgNoiQiaPjCtha3bXHPuV7an9S3wFGYmmZVe96yJcKL2DTtW7Ho114zCZ",
  "key4": "5zckKseWWsLoTH6BPrD6e55Fvpwdf78WgwszkdAMGNTAJMVt2GwudemU35DZW6PgBZLZjemjFmYAKyD1wBpsoYmE",
  "key5": "3Txdit1q61ZoaoHywTLo2RABN6k8mrAzx15rrCRpfoV3aiVxqvfxeWR1GkpHrwwGFLpTGQixxFC55WDveqFaUGxa",
  "key6": "5FA6DbEidKj4NxqJg32AXsJxipLUkNYi6vsrN1XskRq1k59F9pk8bhEGhQ7snC4knKYYiiktdye6nH1Q1zrnE7e5",
  "key7": "2zoVRQFaFdZzAYkxTgJFZiujTF593VXFoRxrVUJ517BEBtzwMSR1UXrHQdgq9s36eWadU3bEBPbpRZuDpk2TyptD",
  "key8": "5eAR4tcTiJGfAwcuWAiYfPz48b8Sf7L9Zw3gNpsYnFkV55mk5ahQifCDGdaeiumbWFhNurFL8b36CsxRYxvEygMJ",
  "key9": "4AmHSNE8qAp7rZq9PGf9N4PyWigr8YrZrYW4S2kCVCcfzvoXyxQKxLMwbWhP545PgiR1bmTqbKNwPXfDiFP15w1b",
  "key10": "5JQsXtQVeuZopxNMK15xhoSe66r3XoUDBM512DasWUeVCKTqFcRYb1Vz2iMhWiM5Z2K3Vt2W3riGFiCQ2y7FNQDw",
  "key11": "4mUHzH9KSAsQLsWV7cw8gVajC7i9LffhvLPm3CZhLJ6TfnpkftPwqsfETWyojqxgv5HAwsFyaccNdBz5JjZqhN5p",
  "key12": "25dMf1KXDZwbzYRHD2KptwqgBPpt6UuTULg12pG4UrZGQTUaCEV19fULMKX1DQVgyANELmkcvb3bn1Zy7DeVS3bv",
  "key13": "2s6AGX9rgYGgypwGjWim6akHmYE9sAkKtomz9EEc6VVL5J2tSQvXX81o7r2AVCaPdjzTekT8rgF7HCymy5ognAXk",
  "key14": "445pPWvc7MsiEytVsVx9YKTJo9RzAPdMdrXnPMUPxx1dXizL3imhPG7TeybqmH64hPKw47KbLVa8SXWrw2TMDRDf",
  "key15": "32VsiBSnXkub7Kf7mcSb5RUCisKDQeez1YatEJ5LEBd8QknyQ3FyasNdqhSCpConWEA6NZ8iuCDSgYHTvGD5hTut",
  "key16": "3kvH5D8Qww6EB9uEfwh3dNN9vbcqoxjaWaPkcJMLhwNfkg7q1ghrwcuGutn1sPPRqtNPNtmc2A7BrBZDkUECTtJE",
  "key17": "67rNSnGbedkEXQYRwkVhHrzKrMptp3Qz7UiQXYMdQy6GYEkRJCt5PU5kqDaMRmz1b1m3hhCty3XCrt7su9pDWdRY",
  "key18": "3o3r2GAiJLt54MtMKu71CKQAuJFK5mJWkJ1xPuvb6JpJkzZSebDH236epkKQq8tms1rGaUDeQcixVo4rnfkTRxVz",
  "key19": "2YDQYhP5e9nxVMkBYYBcHYxH49MKB1gdA4V61V36Q1ysbBoDUSskNuS2bwPW8hamRHRhQ9m9xGkSWyw7CLHu9teD",
  "key20": "3xwD3SG5rzUUGhx5TfiPhPLcHKABn1SkVSnfZFzSjhxnHjCj63gQ3LcwRpE8GSHiWkuHuYhsMFreMh5woA2UdYFU",
  "key21": "To9xEeqjBDxJKEdb5mAqEJLP3W4sAAJGaNgdFqFvhWXYGNJDZh31mU3PiK1a9gfymoQodnQQRqpGw5CdkjHBFVC",
  "key22": "5DrxHvMe33bHqRoMUDwjQBW1eY4C3LNJjcoojz3sPEHTRFL5GTfzaXxCb3CmxnpToZdtsBXhedPoKV6m3Ac2YhNt",
  "key23": "5ZecGJx2qTT5FTAJZ1aqpjp63i2sLnArUPsQwzuLqy6vsB7iwgSuUCwNbe6GQ7LJxdT5oBrxGPL3hb85xNvJ1fdo",
  "key24": "4xQbR6DiDsjickbE9QPAsW8x3xx5BKEm8HuLnTRsgoMmmBqpxpN2ehZUsP5d9SqF95yEmPZFQn8Q3cBmNpqiFbYx",
  "key25": "2iBY1R6MrpVozEFZSkZMAc7bJpXXoZZ5gEwkELQB9a4b6G4vjELa49TK5MKcMfYsNDn1PJaPy8P6oYqWDavy2v85",
  "key26": "2TNwBE9caLKr5mbSdEWvHaoUP5bP3qYG8es3ZQtTFftB3zzxguGScSTg7SfB79f8kmZiqdSfkTzcCmHiAMHxmE9g",
  "key27": "57aEsUXPBvqmP4GsgFsDc8BNmCiianuM6HPgs67c5g6uEXB5ipM68V5tRSh54L9bqQoqUxRgFJPpwNxKsBcMKiUc",
  "key28": "5iqdr4345fGfjou1ob8ekM1FRSL2Rs4ZuYyipS1tgeHfiYJKKkmpE8Z5CnFfXzV3duDSNmXLUftEcYoUaVfKw3ng",
  "key29": "4LWwZvo2aNtxpj8iRbSdBfj9JGyP2cJD9gYps5HhL84fqcBgEc7eUfwZzdncbH3UmkD8BMkdE8xyyygZT65QpTuD",
  "key30": "FkdsvXPZSdWg3CJVJktossdD2HoPakyE3B1Es6eCUKaLTYm1PKWuWbPW4v1F6ZiCPx2MmdF716tMAqgH5arsdBD"
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
